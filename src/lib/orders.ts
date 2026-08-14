import 'server-only'
import { prisma } from '@/lib/db'
import {
  sendOrderConfirmationEmail,
  sendShippingNoticeEmail,
} from '@/lib/email'

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
