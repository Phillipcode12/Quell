import 'server-only'
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
export async function sendOrderConfirmation(orderId: string) {
  try {
    const order = await getOrderForEmail(orderId)
    if (!order) {
      console.error(`[email] order ${orderId} not found for confirmation`)
      return
    }
    await sendOrderConfirmationEmail(order)
  } catch (err) {
    console.error('[email] order confirmation failed:', err)
  }
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

export async function sendShippingNotice(orderId: string) {
  try {
    const order = await getOrderForEmail(orderId)
    if (!order) {
      console.error(`[email] order ${orderId} not found for shipping notice`)
      return
    }
    await sendShippingNoticeEmail(order)
  } catch (err) {
    console.error('[email] shipping notice failed:', err)
  }
}
