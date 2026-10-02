import 'server-only'
import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/db'
import {
  sendNewOrderNotificationEmail,
  sendOrderConfirmationEmail,
  sendShippingNoticeEmail,
} from '@/lib/email'
import { fulfilmentEmails } from '@/lib/fulfilment'

/** Everything the order emails and the admin list need, in one query shape. */
const orderInclude = {
  items: { include: { product: true } },
  user: { select: { email: true, name: true } },
} as const

export async function getOrderForEmail(orderId: string) {
  return prisma.order.findUnique({
    where: { id: orderId },
    include: orderInclude,
  })
}

/**
 * Mail failures are logged, never thrown: a webhook must not retry (and risk
 * double-processing a payment) because an email bounced.
 */
export async function sendOrderConfirmation(orderId: string): Promise<boolean> {
  try {
    const order = await getOrderForEmail(orderId)
    if (!order) {
      console.error(`[email] order ${orderId} not found for confirmation`)
      Sentry.captureMessage(
        `Order confirmation: order ${orderId} not found`,
        'error',
      )
      return false
    }
    await sendOrderConfirmationEmail(order)
    await markConfirmationSent(orderId)
    return true
  } catch (err) {
    console.error('[email] order confirmation failed:', err)
    // Was console-only. This is the send that actually failed in production:
    // Q-QRABWBQ9's receipt bounced off a mistyped domain and nobody knew for
    // nine days (§36).
    Sentry.captureException(err, { tags: { email: 'order-confirmation' } })
    return false
  }
}

/**
 * Records that the receipt was accepted by the email provider.
 *
 * Its own function because two paths send this email: the payment webhook, and
 * the admin correcting a bounced address (`correctEmailAndResend`). Both have
 * to stamp it or the Orders tab accuses a customer who did get their receipt.
 *
 * Stamped **after** the send, never before — the other order would show a
 * green "receipt sent" on an order whose customer has nothing.
 */
export async function markConfirmationSent(orderId: string) {
  await prisma.order.update({
    where: { id: orderId },
    data: { confirmationEmailSentAt: new Date() },
  })
}

/**
 * Tells the office to pack an order. Called from the payment webhook, right
 * after the customer's confirmation.
 *
 * Same containment rule as the others: a failure here is logged, never thrown.
 * The customer has paid and the order is recorded — a mail problem must not
 * make the webhook fail and risk Authorize.net reprocessing the payment. The
 * order is still visible in /admin/orders either way, so the worst case is a
 * missed nudge, not a lost order.
 */
export async function sendNewOrderNotification(orderId: string) {
  try {
    const order = await getOrderForEmail(orderId)
    if (!order) {
      console.error(`[email] order ${orderId} not found for fulfilment notice`)
      return
    }
    await sendNewOrderNotificationEmail(order, fulfilmentEmails())
  } catch (err) {
    console.error('[email] fulfilment notification failed:', err)
  }
}

/**
 * Emails the customer their tracking number, and records that it happened.
 *
 * **It still swallows its errors**, and that is deliberate: a failed email must
 * not undo marking an order shipped, because the parcel has physically gone and
 * the order status is the thing that has to stay true.
 *
 * What changed on 2026-10-02 is that failing is no longer invisible. On success
 * it stamps `shippingEmailSentAt`; on failure it leaves it null and tells
 * Sentry. Since the only thing that calls this is the same transition that sets
 * `shippedAt`, **an order with `shippedAt` and no `shippingEmailSentAt` is one
 * where the customer was never told**, and `/admin/orders` says so.
 *
 * Returns whether the message was accepted, for callers that want to react.
 */
export async function sendShippingNotice(orderId: string): Promise<boolean> {
  try {
    const order = await getOrderForEmail(orderId)
    if (!order) {
      console.error(`[email] order ${orderId} not found for shipping notice`)
      Sentry.captureMessage(
        `Shipping notice: order ${orderId} not found`,
        'error',
      )
      return false
    }
    await sendShippingNoticeEmail(order)

    /**
     * Stamped after the send, never before.
     *
     * The other way round would record a notice that was never accepted, which
     * is worse than recording nothing: the admin page would show a green
     * "emailed" on an order whose customer is still waiting.
     *
     * A failure of this write alone leaves a sent email marked unsent, which
     * costs at worst a duplicate notice if someone resends. That is the right
     * direction to be wrong in.
     */
    await prisma.order.update({
      where: { id: orderId },
      data: { shippingEmailSentAt: new Date() },
    })
    return true
  } catch (err) {
    console.error('[email] shipping notice failed:', err)
    // Was console-only, which is why a failure could pass unnoticed for days.
    Sentry.captureException(err, { tags: { email: 'shipping-notice' } })
    return false
  }
}
