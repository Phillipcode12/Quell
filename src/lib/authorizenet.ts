import 'server-only'
import { createHmac, timingSafeEqual } from 'node:crypto'

/**
 * Authorize.net gateway client.
 *
 * Authorize.net is the gateway sitting in front of the company's StaxPay
 * merchant account, so this is the API we integrate against — not Stax
 * directly. Same pattern as the Stripe module it replaces: optional at boot,
 * so the app runs before credentials are added and checkout returns a clean
 * 503 instead of crashing.
 *
 * Credentials come from the Merchant Interface under
 * Account > Settings > Security Settings > General Security Settings >
 * API Credentials and Keys.
 */

const ENDPOINTS = {
  sandbox: 'https://apitest.authorize.net/xml/v1/request.api',
  production: 'https://api.authorize.net/xml/v1/request.api',
} as const

/** Where the customer is sent to enter card details (Accept Hosted). */
const HOSTED_FORM_URLS = {
  sandbox: 'https://test.authorize.net/payment/payment',
  production: 'https://accept.authorize.net/payment/payment',
} as const

type GatewayEnvironment = keyof typeof ENDPOINTS

function environment(): GatewayEnvironment {
  return process.env.AUTHORIZENET_ENVIRONMENT === 'production'
    ? 'production'
    : 'sandbox'
}

export function hostedFormUrl(): string {
  return HOSTED_FORM_URLS[environment()]
}

export function isGatewayConfigured() {
  return Boolean(
    process.env.AUTHORIZENET_API_LOGIN_ID &&
      process.env.AUTHORIZENET_TRANSACTION_KEY,
  )
}

export function isWebhookConfigured() {
  return Boolean(process.env.AUTHORIZENET_SIGNATURE_KEY)
}

function credentials() {
  const name = process.env.AUTHORIZENET_API_LOGIN_ID
  const transactionKey = process.env.AUTHORIZENET_TRANSACTION_KEY
  if (!name || !transactionKey) {
    throw new Error(
      'AUTHORIZENET_API_LOGIN_ID and AUTHORIZENET_TRANSACTION_KEY are not set. Add them to .env and restart.',
    )
  }
  return { name, transactionKey }
}

/**
 * Authorize.net's "JSON" API is a thin shim over its XML service and has two
 * behaviours that break naive clients:
 *
 *  1. Responses are served with a UTF-8 BOM that makes JSON.parse throw.
 *  2. Failures come back as HTTP 200 with messages.resultCode === 'Error',
 *     so the status code alone never tells you whether it worked.
 *
 * Both are handled here so callers can treat this like a normal API.
 */
async function gatewayRequest<T>(
  operation: string,
  body: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(ENDPOINTS[environment()], {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      [operation]: { merchantAuthentication: credentials(), ...body },
    }),
  })

  if (!response.ok) {
    throw new Error(`Gateway returned HTTP ${response.status}`)
  }

  const text = (await response.text()).replace(/^﻿/, '')

  let parsed: GatewayResponse & T
  try {
    parsed = JSON.parse(text)
  } catch {
    throw new Error('Gateway returned a response that was not valid JSON.')
  }

  if (parsed.messages?.resultCode !== 'Ok') {
    const message = parsed.messages?.message?.[0]
    throw new Error(
      `Gateway rejected ${operation}: ${message?.code ?? 'unknown'} ${
        message?.text ?? ''
      }`.trim(),
    )
  }

  return parsed
}

type GatewayResponse = {
  messages?: {
    resultCode?: 'Ok' | 'Error'
    message?: { code?: string; text?: string }[]
  }
}

/**
 * Verifies a webhook came from Authorize.net.
 *
 * The header is `sha512=<HEX>`, an HMAC-SHA512 of the RAW body keyed by the
 * Signature Key. The Merchant Interface shows that key as 128 hex characters,
 * which invites two readings of what to key the HMAC with:
 *
 *   "text"   — the 128-character string exactly as displayed  ← what it is
 *   "bytes"  — the hex decoded to 64 bytes
 *
 * MEASURED, not assumed: real sandbox webhooks verified against "text" on
 * 2026-08-17. This cost a live debugging round, because "bytes" is the
 * intuitive reading of a hex-looking value and unit tests cannot catch the
 * difference — a test that computes the HMAC the same way the code does will
 * agree with itself no matter which reading is wrong.
 *
 * "bytes" is still accepted as a fallback. Both require possession of the
 * secret, so allowing both costs nothing in security, and it means a change
 * at the gateway shows up as a log line rather than an outage.
 *
 * Returns which derivation matched so the log records reality over time.
 */
export function verifyWebhookSignatureDetailed(
  rawBody: string,
  headerValue: string | null,
): { valid: boolean; mode: 'bytes' | 'text' | null } {
  const signatureKey = process.env.AUTHORIZENET_SIGNATURE_KEY
  if (!signatureKey || !headerValue) return { valid: false, mode: null }

  const received = headerValue.replace(/^sha512=/i, '').trim()
  if (!received) return { valid: false, mode: null }

  let receivedBuf: Buffer
  try {
    receivedBuf = Buffer.from(received, 'hex')
  } catch {
    return { valid: false, mode: null }
  }
  if (receivedBuf.length === 0) return { valid: false, mode: null }

  // "text" first: it is what the gateway actually uses, so the common path
  // matches on the first attempt.
  const candidates: { mode: 'bytes' | 'text'; key: Buffer | string }[] = [
    { mode: 'text', key: signatureKey },
    { mode: 'bytes', key: Buffer.from(signatureKey, 'hex') },
  ]

  for (const { mode, key } of candidates) {
    const expected = createHmac('sha512', key as never)
      .update(rawBody, 'utf8')
      .digest()
    // Length check first: timingSafeEqual throws on a length mismatch.
    if (
      expected.length === receivedBuf.length &&
      timingSafeEqual(expected, receivedBuf)
    ) {
      return { valid: true, mode }
    }
  }

  return { valid: false, mode: null }
}

export function verifyWebhookSignature(
  rawBody: string,
  headerValue: string | null,
): boolean {
  return verifyWebhookSignatureDetailed(rawBody, headerValue).valid
}

/** Gateway limits. Exceeding these is rejected, so callers must trim to fit. */
const MAX_INVOICE_NUMBER = 20
const MAX_LINE_ITEM_NAME = 31
const MAX_LINE_ITEM_ID = 31

function trim(value: string, max: number) {
  return value.length > max ? value.slice(0, max) : value
}

/** Amounts cross the wire as decimal strings, not integer cents. */
function toAmount(cents: number): string {
  return (cents / 100).toFixed(2)
}

export type HostedPageLineItem = {
  id: string
  name: string
  quantity: number
  unitPriceCents: number
}

export type HostedPageAddress = {
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zip: string
  country: string
}

/**
 * Requests a one-time-use token for the hosted payment page.
 *
 * The token is valid for 15 minutes and can only be redeemed once, so it is
 * fetched per checkout attempt and never cached.
 */
export async function createHostedPaymentPageToken(input: {
  orderNumber: string
  description: string
  amountCents: number
  shippingCents: number
  lineItems: HostedPageLineItem[]
  shipTo: HostedPageAddress
  email: string
  returnUrl: string
  cancelUrl: string
  merchantName: string
}): Promise<string> {
  const response = await gatewayRequest<{ token?: string }>(
    'getHostedPaymentPageRequest',
    {
      // KEY ORDER IS LOAD-BEARING. This "JSON" API is a shim over the XML
      // service, and the XSD validates a strict element sequence, so the order
      // of these keys becomes the order of the XML elements. Getting it wrong
      // fails with E00003 "invalid child element" rather than anything that
      // points at the real cause.
      //
      // The schema's sequence for the fields used here is:
      //   transactionType, amount, order, lineItems, tax, duty, shipping,
      //   taxExempt, poNumber, customer, billTo, shipTo
      //
      // Do not reorder or alphabetise these keys.
      transactionRequest: {
        transactionType: 'authCaptureTransaction',
        amount: toAmount(input.amountCents),
        order: {
          invoiceNumber: trim(input.orderNumber, MAX_INVOICE_NUMBER),
          description: trim(input.description, 255),
        },
        lineItems: {
          lineItem: input.lineItems.slice(0, 30).map((item) => ({
            itemId: trim(item.id, MAX_LINE_ITEM_ID),
            name: trim(item.name, MAX_LINE_ITEM_NAME),
            quantity: String(item.quantity),
            unitPrice: toAmount(item.unitPriceCents),
          })),
        },
        // Shipping is its own field rather than a line item, so the gateway's
        // own totals reconcile with the order we wrote.
        shipping: {
          amount: toAmount(input.shippingCents),
          name: 'Shipping',
        },
        customer: { email: input.email },
        shipTo: input.shipTo,
      },
      hostedPaymentSettings: {
        setting: [
          {
            settingName: 'hostedPaymentReturnOptions',
            settingValue: JSON.stringify({
              showReceipt: false,
              url: input.returnUrl,
              urlText: 'Continue',
              cancelUrl: input.cancelUrl,
              cancelUrlText: 'Cancel',
            }),
          },
          {
            settingName: 'hostedPaymentButtonOptions',
            settingValue: JSON.stringify({ text: 'Pay' }),
          },
          {
            settingName: 'hostedPaymentPaymentOptions',
            settingValue: JSON.stringify({
              cardCodeRequired: true,
              showCreditCard: true,
            }),
          },
          // Billing address is collected on the hosted page (it belongs to the
          // card). The shipping address is ours and is passed in above.
          {
            settingName: 'hostedPaymentBillingAddressOptions',
            settingValue: JSON.stringify({ show: true, required: true }),
          },
          {
            settingName: 'hostedPaymentShippingAddressOptions',
            settingValue: JSON.stringify({ show: false, required: false }),
          },
          {
            settingName: 'hostedPaymentOrderOptions',
            settingValue: JSON.stringify({
              show: true,
              merchantName: input.merchantName,
            }),
          },
        ],
      },
    },
  )

  if (!response.token) {
    throw new Error('Gateway returned no hosted payment token.')
  }
  return response.token
}

/**
 * Full detail for a settled transaction.
 *
 * The payment webhook carries the transaction id but not the invoiceNumber, so
 * the order can only be identified by fetching the transaction itself.
 */
export async function getTransactionDetails(transactionId: string): Promise<{
  invoiceNumber: string | null
  amountCents: number | null
  responseCode: number | null
}> {
  const response = await gatewayRequest<{
    transaction?: {
      order?: { invoiceNumber?: string }
      authAmount?: number
      responseCode?: number
    }
  }>('getTransactionDetailsRequest', { transId: transactionId })

  const transaction = response.transaction
  return {
    invoiceNumber: transaction?.order?.invoiceNumber ?? null,
    amountCents:
      typeof transaction?.authAmount === 'number'
        ? Math.round(transaction.authAmount * 100)
        : null,
    responseCode: transaction?.responseCode ?? null,
  }
}

export { gatewayRequest }
export type { GatewayEnvironment }
