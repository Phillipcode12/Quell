import { createHmac } from 'node:crypto'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  createHostedPaymentPageToken,
  getTransactionDetails,
  hostedFormUrl,
  isGatewayConfigured,
  isWebhookConfigured,
  verifyWebhookSignature,
  verifyWebhookSignatureDetailed,
} from './authorizenet'

/**
 * READ THIS BEFORE TRUSTING THESE TESTS.
 *
 * Two of the worst defects in this integration -- the element ordering and the
 * signature key derivation -- were both invisible to unit tests and only a
 * live gateway exposed them. That is not an argument against testing the
 * module; it is an argument for being precise about what each test proves.
 *
 * What is genuinely proven here: the parsing quirks (BOM, HTTP 200 failures),
 * the field truncation, the amount formatting, and the *rejection* half of
 * signature verification, all of which are self-contained behaviours.
 *
 * What is NOT proven here, and cannot be: that the key order below is the
 * order Authorize.net's XSD wants, or that "text" is the correct signature key
 * derivation. A test that computes an HMAC the same way the code does agrees
 * with itself whichever reading is wrong. Those facts were established against
 * the real sandbox on 2026-08-17. What the ordering test does is stop a
 * refactor, a formatter, or an "alphabetise these keys" tidy-up from silently
 * undoing the fix -- it is a regression latch on a verified fact, not a
 * verification of it.
 */

// 128 hex characters, the shape the Merchant Interface displays.
const SIGNATURE_KEY = 'A'.repeat(64) + 'B'.repeat(64)
const BODY = JSON.stringify({
  notificationId: 'abc',
  eventType: 'net.authorize.payment.authcapture.created',
  payload: { id: '120088547461' },
})

const signAsText = (body: string, key = SIGNATURE_KEY) =>
  createHmac('sha512', key).update(body, 'utf8').digest('hex')

const signAsBytes = (body: string, key = SIGNATURE_KEY) =>
  createHmac('sha512', Buffer.from(key, 'hex')).update(body, 'utf8').digest('hex')

describe('verifyWebhookSignatureDetailed', () => {
  beforeEach(() => {
    vi.stubEnv('AUTHORIZENET_SIGNATURE_KEY', SIGNATURE_KEY)
  })

  it('accepts the "text" derivation and says so', () => {
    // "text" is what the real gateway uses. The returned mode is logged by the
    // webhook route so the record of which derivation is live comes from
    // production traffic rather than from anyone's memory.
    const result = verifyWebhookSignatureDetailed(
      BODY,
      `sha512=${signAsText(BODY)}`,
    )
    expect(result).toEqual({ valid: true, mode: 'text' })
  })

  it('accepts the "bytes" derivation as a fallback and says so', () => {
    // Both readings require possession of the secret, so accepting both costs
    // nothing in security and turns a change at the gateway into a log line
    // rather than an outage.
    const result = verifyWebhookSignatureDetailed(
      BODY,
      `sha512=${signAsBytes(BODY)}`,
    )
    expect(result).toEqual({ valid: true, mode: 'bytes' })
  })

  it('accepts every header spelling the gateway has been seen to send', () => {
    const signature = signAsText(BODY)
    for (const header of [
      `sha512=${signature}`,
      `SHA512=${signature}`,
      signature,
    ]) {
      expect(verifyWebhookSignature(BODY, header)).toBe(true)
    }
  })

  it('is case-insensitive about the hex itself', () => {
    expect(
      verifyWebhookSignature(BODY, `sha512=${signAsText(BODY).toUpperCase()}`),
    ).toBe(true)
  })

  it('tolerates surrounding whitespace', () => {
    expect(verifyWebhookSignature(BODY, `sha512= ${signAsText(BODY)} `)).toBe(
      true,
    )
  })

  it('rejects a tampered body', () => {
    // The point of the whole exercise: the signature covers the raw body, so
    // changing a single character of the payload must invalidate it. If this
    // ever passes, anyone can mark any order paid.
    const signature = signAsText(BODY)
    const tampered = BODY.replace('120088547461', '120088547462')

    expect(verifyWebhookSignature(tampered, `sha512=${signature}`)).toBe(false)
  })

  it('rejects a signature made with a different key', () => {
    const wrongKey = 'C'.repeat(128)
    expect(
      verifyWebhookSignature(BODY, `sha512=${signAsText(BODY, wrongKey)}`),
    ).toBe(false)
  })

  it('rejects a missing or empty header', () => {
    expect(verifyWebhookSignatureDetailed(BODY, null)).toEqual({
      valid: false,
      mode: null,
    })
    expect(verifyWebhookSignatureDetailed(BODY, '')).toEqual({
      valid: false,
      mode: null,
    })
    expect(verifyWebhookSignatureDetailed(BODY, 'sha512=')).toEqual({
      valid: false,
      mode: null,
    })
  })

  it('rejects a header that is not hex, without throwing', () => {
    // Buffer.from(..., 'hex') does not throw on garbage -- it stops at the
    // first invalid pair and returns a short buffer. That would reach
    // timingSafeEqual, which DOES throw on a length mismatch, so the length
    // check has to come first or malformed input becomes a 500.
    for (const header of ['sha512=not-hex-at-all', 'sha512=zzzz', 'sha512=abc']) {
      expect(() => verifyWebhookSignature(BODY, header)).not.toThrow()
      expect(verifyWebhookSignature(BODY, header)).toBe(false)
    }
  })

  it('rejects a correct signature that has been truncated', () => {
    const signature = signAsText(BODY)
    expect(
      verifyWebhookSignature(BODY, `sha512=${signature.slice(0, 100)}`),
    ).toBe(false)
  })

  it('rejects everything when no signature key is configured', () => {
    // Fails closed. An unset key must never mean "accept anything" -- that
    // would let a stranger mark orders paid by POSTing to the webhook.
    vi.stubEnv('AUTHORIZENET_SIGNATURE_KEY', '')
    expect(verifyWebhookSignature(BODY, `sha512=${signAsText(BODY)}`)).toBe(
      false,
    )
  })
})

describe('configuration probes', () => {
  it('reports the gateway configured only with both credentials', () => {
    vi.stubEnv('AUTHORIZENET_API_LOGIN_ID', '')
    vi.stubEnv('AUTHORIZENET_TRANSACTION_KEY', '')
    expect(isGatewayConfigured()).toBe(false)

    vi.stubEnv('AUTHORIZENET_API_LOGIN_ID', 'login')
    expect(isGatewayConfigured()).toBe(false)

    vi.stubEnv('AUTHORIZENET_TRANSACTION_KEY', 'key')
    expect(isGatewayConfigured()).toBe(true)
  })

  it('reports the webhook configured from the signature key alone', () => {
    vi.stubEnv('AUTHORIZENET_SIGNATURE_KEY', '')
    expect(isWebhookConfigured()).toBe(false)
    vi.stubEnv('AUTHORIZENET_SIGNATURE_KEY', SIGNATURE_KEY)
    expect(isWebhookConfigured()).toBe(true)
  })

  it('only ever points at production when explicitly told to', () => {
    // Anything other than the exact string "production" means sandbox, so a
    // typo or an empty value in Vercel cannot start taking real cards.
    for (const value of ['', 'sandbox', 'Production', 'prod', 'undefined']) {
      vi.stubEnv('AUTHORIZENET_ENVIRONMENT', value)
      expect(hostedFormUrl()).toBe('https://test.authorize.net/payment/payment')
    }

    vi.stubEnv('AUTHORIZENET_ENVIRONMENT', 'production')
    expect(hostedFormUrl()).toBe('https://accept.authorize.net/payment/payment')
  })
})

describe('createHostedPaymentPageToken', () => {
  let fetchMock: ReturnType<typeof vi.fn>

  const validInput = {
    orderNumber: 'Q-7F3K9M2A',
    description: '1x Quell Preservative-Free Lubricating Eye Drops',
    amountCents: 3694,
    shippingCents: 695,
    lineItems: [
      {
        id: 'quell-preservative-free',
        name: 'Quell Preservative-Free Lubricating Eye Drops',
        quantity: 1,
        unitPriceCents: 2999,
      },
    ],
    shipTo: {
      firstName: 'Ada',
      lastName: 'Lovelace',
      address: '330 Franklin Road, Suite 135A',
      city: 'Brentwood',
      state: 'TN',
      zip: '37027',
      country: 'US',
    },
    email: 'ada@example.com',
    returnUrl: 'https://quell-six.vercel.app/api/checkout/return?order=Q-7F3K9M2A',
    cancelUrl: 'https://quell-six.vercel.app/cart?canceled=1',
    merchantName: 'Quell',
  }

  const gatewayOk = (payload: object, { bom = false } = {}) => ({
    ok: true,
    status: 200,
    text: async () =>
      (bom ? '﻿' : '') +
      JSON.stringify({ messages: { resultCode: 'Ok' }, ...payload }),
  })

  beforeEach(() => {
    vi.stubEnv('AUTHORIZENET_API_LOGIN_ID', 'test-login')
    vi.stubEnv('AUTHORIZENET_TRANSACTION_KEY', 'test-transaction-key')
    vi.stubEnv('AUTHORIZENET_ENVIRONMENT', 'sandbox')
    fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
  })

  const sentBody = () =>
    JSON.parse(fetchMock.mock.calls[0][1].body).getHostedPaymentPageRequest

  it('sends transactionRequest keys in the schema sequence', async () => {
    // LOAD-BEARING, AND THE REASON THIS TEST EXISTS.
    //
    // Authorize.net's JSON API is a shim over its XML service and the XSD
    // validates element *sequence*, so object key order becomes element
    // order. Getting it wrong returns E00003 "invalid child element", naming
    // the element that appeared too late rather than the one that came too
    // early -- which is why it cost a live debugging round to find.
    //
    // JSON.stringify preserves insertion order for string keys, so the order
    // asserted here is the order that goes on the wire.
    fetchMock.mockResolvedValue(gatewayOk({ token: 'x'.repeat(3250) }))

    await createHostedPaymentPageToken(validInput)

    expect(Object.keys(sentBody().transactionRequest)).toEqual([
      'transactionType',
      'amount',
      'order',
      'lineItems',
      'shipping',
      'customer',
      'shipTo',
    ])
  })

  it('keeps those keys a subsequence of the full XSD order', async () => {
    // The stricter, more durable invariant: the schema's sequence is fixed,
    // and this request uses a subset of it. Adding tax, duty or billTo later
    // is fine -- inserting them in the wrong place is not. This catches that,
    // where the exact-list assertion above would just be updated to match.
    const XSD_ORDER = [
      'transactionType',
      'amount',
      'order',
      'lineItems',
      'tax',
      'duty',
      'shipping',
      'taxExempt',
      'poNumber',
      'customer',
      'billTo',
      'shipTo',
    ]
    fetchMock.mockResolvedValue(gatewayOk({ token: 'tok' }))

    await createHostedPaymentPageToken(validInput)

    const positions = Object.keys(sentBody().transactionRequest).map((key) =>
      XSD_ORDER.indexOf(key),
    )
    expect(positions).not.toContain(-1)
    expect(positions).toEqual([...positions].sort((a, b) => a - b))
  })

  it('sends amounts as decimal strings, not integer cents', async () => {
    // $36.94 must cross the wire as "36.94". Sending 3694 would charge the
    // customer three thousand six hundred and ninety-four dollars.
    fetchMock.mockResolvedValue(gatewayOk({ token: 'tok' }))

    await createHostedPaymentPageToken(validInput)

    const request = sentBody().transactionRequest
    expect(request.amount).toBe('36.94')
    expect(request.shipping.amount).toBe('6.95')
    expect(request.lineItems.lineItem[0].unitPrice).toBe('29.99')
    expect(request.lineItems.lineItem[0].quantity).toBe('1')
  })

  it('truncates the fields the gateway caps', async () => {
    fetchMock.mockResolvedValue(gatewayOk({ token: 'tok' }))

    await createHostedPaymentPageToken({
      ...validInput,
      orderNumber: 'Q-' + 'A'.repeat(40),
      lineItems: [{ ...validInput.lineItems[0], name: 'N'.repeat(60) }],
    })

    const request = sentBody().transactionRequest
    // 20 for invoiceNumber, 31 for a line item name. Exceeding either is
    // rejected outright, so the trim happens here rather than at the caller.
    expect(request.order.invoiceNumber).toHaveLength(20)
    expect(request.lineItems.lineItem[0].name).toHaveLength(31)
  })

  it('leaves values that already fit completely alone', async () => {
    fetchMock.mockResolvedValue(gatewayOk({ token: 'tok' }))

    await createHostedPaymentPageToken(validInput)

    expect(sentBody().transactionRequest.order.invoiceNumber).toBe('Q-7F3K9M2A')
  })

  it('posts to the sandbox endpoint with the merchant credentials', async () => {
    fetchMock.mockResolvedValue(gatewayOk({ token: 'tok' }))

    await createHostedPaymentPageToken(validInput)

    expect(fetchMock.mock.calls[0][0]).toBe(
      'https://apitest.authorize.net/xml/v1/request.api',
    )
    expect(sentBody().merchantAuthentication).toEqual({
      name: 'test-login',
      transactionKey: 'test-transaction-key',
    })
  })

  it('parses a response served with a UTF-8 BOM', async () => {
    // Authorize.net prefixes its JSON with a BOM, which makes a plain
    // JSON.parse throw. Every response goes through this path.
    fetchMock.mockResolvedValue(gatewayOk({ token: 'the-token' }, { bom: true }))

    await expect(createHostedPaymentPageToken(validInput)).resolves.toBe(
      'the-token',
    )
  })

  it('throws on a failure that arrived as HTTP 200', async () => {
    // The status code never tells you whether the call worked -- failures come
    // back 200 with resultCode "Error". Trusting response.ok would treat a
    // rejected transaction as a successful one.
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      text: async () =>
        JSON.stringify({
          messages: {
            resultCode: 'Error',
            message: [{ code: 'E00003', text: 'invalid child element' }],
          },
        }),
    })

    await expect(createHostedPaymentPageToken(validInput)).rejects.toThrow(
      /E00003.*invalid child element/,
    )
  })

  it('throws when the gateway returns no token', async () => {
    fetchMock.mockResolvedValue(gatewayOk({}))

    await expect(createHostedPaymentPageToken(validInput)).rejects.toThrow(
      /no hosted payment token/i,
    )
  })

  it('throws a clear error on unparseable output', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => '<html>gateway down</html>',
    })

    await expect(createHostedPaymentPageToken(validInput)).rejects.toThrow(
      /not valid JSON/i,
    )
  })

  it('throws on a genuine HTTP error', async () => {
    fetchMock.mockResolvedValue({ ok: false, status: 502, text: async () => '' })

    await expect(createHostedPaymentPageToken(validInput)).rejects.toThrow(
      /HTTP 502/,
    )
  })

  it('refuses to build a request with no credentials', async () => {
    vi.stubEnv('AUTHORIZENET_API_LOGIN_ID', '')
    vi.stubEnv('AUTHORIZENET_TRANSACTION_KEY', '')

    await expect(createHostedPaymentPageToken(validInput)).rejects.toThrow(
      /AUTHORIZENET_API_LOGIN_ID/,
    )
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

describe('getTransactionDetails', () => {
  beforeEach(() => {
    vi.stubEnv('AUTHORIZENET_API_LOGIN_ID', 'test-login')
    vi.stubEnv('AUTHORIZENET_TRANSACTION_KEY', 'test-transaction-key')
    vi.stubEnv('AUTHORIZENET_ENVIRONMENT', 'sandbox')
  })

  const respondWith = (transaction: object | undefined) =>
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: async () =>
          JSON.stringify({ messages: { resultCode: 'Ok' }, transaction }),
      }),
    )

  it('returns the invoice number and the amount in cents', async () => {
    // The payment webhook carries the transaction id but not the invoice
    // number, so this lookup is the only way back to the order.
    respondWith({
      order: { invoiceNumber: 'Q-7F3K9M2A' },
      authAmount: 36.94,
      responseCode: 1,
    })

    await expect(getTransactionDetails('120088547461')).resolves.toEqual({
      invoiceNumber: 'Q-7F3K9M2A',
      amountCents: 3694,
      responseCode: 1,
    })
  })

  it('rounds the float amount rather than truncating it', async () => {
    // authAmount arrives as a JSON number, so 12.34 can land as
    // 12.339999999999999. Math.floor(x * 100) would quietly lose a cent on
    // the amount an order is checked against.
    respondWith({ order: { invoiceNumber: 'Q-1' }, authAmount: 12.34, responseCode: 1 })

    await expect(getTransactionDetails('t')).resolves.toMatchObject({
      amountCents: 1234,
    })
  })

  it('returns nulls rather than throwing when fields are absent', async () => {
    respondWith({})

    await expect(getTransactionDetails('t')).resolves.toEqual({
      invoiceNumber: null,
      amountCents: null,
      responseCode: null,
    })
  })

  it('returns nulls when there is no transaction at all', async () => {
    respondWith(undefined)

    await expect(getTransactionDetails('t')).resolves.toEqual({
      invoiceNumber: null,
      amountCents: null,
      responseCode: null,
    })
  })
})
