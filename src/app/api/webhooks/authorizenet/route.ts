import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import {
  getTransactionDetails,
  isGatewayConfigured,
  isWebhookConfigured,
  verifyWebhookSignatureDetailed,
} from '@/lib/authorizenet'
import { drawDownStock } from '@/lib/inventory'
import {
  sendNewOrderNotification,
  sendOrderConfirmation,
} from '@/lib/orders'

/**
 * Authorize.net webhook. Payment success is recorded here rather than on the
 * return page, because the browser may never load it.
 *
 * The raw body is required for signature verification, so it must not be
 * parsed as JSON first.
 */

/** Gateway response code for an approved transaction. */
const APPROVED = 1

type WebhookEvent = {
  eventType?: string
  payload?: {
    id?: string
    responseCode?: number
    authAmount?: number
    entityName?: string
  }
}

export async function POST(request: Request) {
  if (!isGatewayConfigured() || !isWebhookConfigured()) {
    return NextResponse.json(
      { error: 'Payment webhook is not configured.' },
      { status: 503 },
    )
  }

  const rawBody = await request.text()

  const signature = request.headers.get('x-anet-signature')
  const check = verifyWebhookSignatureDetailed(rawBody, signature)

  if (!check.valid) {
    // Logged with enough detail to tell a genuine forgery from a
    // misconfiguration, without ever printing the key or the body.
    console.error(
      `[webhook] signature rejected. header=${signature ? 'present' : 'MISSING'} ` +
        `keyConfigured=${Boolean(process.env.AUTHORIZENET_SIGNATURE_KEY)} ` +
        `bodyBytes=${Buffer.byteLength(rawBody, 'utf8')}`,
    )
    return NextResponse.json(
      { error: 'Webhook signature verification failed.' },
      { status: 400 },
    )
  }

  console.info(`[webhook] signature verified using the "${check.mode}" key derivation`)

  let event: WebhookEvent
  try {
    event = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Malformed payload.' }, { status: 400 })
  }

  try {
    switch (event.eventType) {
      case 'net.authorize.payment.authcapture.created':
        await handleAuthCapture(event)
        break
      default:
        // Refunds and voids are reconciled by hand for now; recording them
        // would need a returns flow that does not exist yet.
        break
    }
  } catch (err) {
    // Log and 200: a non-2xx makes the gateway retry, which risks processing
    // the same payment twice. Failures here need a human, not a retry.
    console.error(`[webhook] ${event.eventType} failed:`, err)
  }

  return NextResponse.json({ received: true })
}

async function handleAuthCapture(event: WebhookEvent) {
  const transactionId = event.payload?.id
  if (!transactionId) return

  if (
    typeof event.payload?.responseCode === 'number' &&
    event.payload.responseCode !== APPROVED
  ) {
    return
  }

  // The webhook carries the transaction id but not our invoice number, so the
  // order can only be identified by asking the gateway for the transaction.
  // This doubles as authentication of the event: a forged id that isn't a real
  // transaction fails here.
  const details = await getTransactionDetails(transactionId)
  const orderNumber = details.invoiceNumber
  if (!orderNumber) {
    console.error(
      `[webhook] transaction ${transactionId} has no invoice number to match`,
    )
    return
  }

  const order = await prisma.order.findUnique({ where: { orderNumber } })
  if (!order) {
    console.error(`[webhook] no order for invoice number ${orderNumber}`)
    return
  }

  // Refuse to settle an order for an amount that isn't what we charged. A
  // mismatch means the payment page was tampered with or the wrong invoice
  // number came back, and either way a human needs to look.
  if (
    details.amountCents !== null &&
    details.amountCents !== order.totalCents
  ) {
    console.error(
      `[webhook] AMOUNT MISMATCH on ${orderNumber}: gateway charged ` +
        `${details.amountCents} but the order totals ${order.totalCents}. ` +
        `Not marking paid — reconcile this manually.`,
    )
    return
  }

  const updated = await prisma.order.updateMany({
    // Scoped to pending so a replayed event can't move a shipped order back,
    // and can't draw stock down a second time.
    where: { orderNumber, status: 'pending' },
    data: { status: 'paid', paymentTransactionId: transactionId },
  })

  if (updated.count > 0) {
    await drawDownStock(order.id)

    // Both sends sit inside the same guard, so a replayed webhook cannot make
    // the office pack the order twice.
    //
    // They are settled independently rather than awaited in sequence. Sending
    // is already written not to throw on a rejected send — it logs and returns
    // — but a DNS failure or a socket reset rejects the fetch itself, and in
    // sequence that would take the second send down with the first. The
    // asymmetry is what matters: if the customer's receipt fails, the office
    // must still be told to pack an order that has been paid for. A missing
    // receipt is a support call; an unshipped paid order is a refund.
    const [confirmation, notification] = await Promise.allSettled([
      sendOrderConfirmation(order.id),
      sendNewOrderNotification(order.id),
    ])

    for (const [what, result] of [
      ['confirmation', confirmation],
      ['fulfilment notification', notification],
    ] as const) {
      if (result.status === 'rejected') {
        console.error(
          `[webhook] ${what} failed for order ${orderNumber}:`,
          result.reason,
        )
      }
    }
  }
}
