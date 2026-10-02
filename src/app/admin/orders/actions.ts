'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { isCarrierKey } from '@/lib/carriers'
import { restoreStock } from '@/lib/inventory'
import { sendShippingNotice } from '@/lib/orders'
import { sendOrderConfirmationEmail } from '@/lib/email'
import { emailLooksWrong } from '@/lib/email-address'
import { UNDELIVERABLE_MESSAGE, domainAcceptsMail } from '@/lib/email-mx'

/**
 * Server actions are a public HTTP surface, so each one re-checks admin access.
 * Never rely on the page having rendered for an admin.
 */
async function assertAdmin() {
  const admin = await getAdminUser()
  if (!admin) throw new Error('Not authorized')
  return admin
}

/**
 * Marks an order shipped and emails the customer.
 *
 * Tracking is optional. Orders are packed by hand and the number is not always
 * to hand at the moment someone clicks — refusing to ship without it would
 * just mean orders sitting in the wrong state. Without a number the customer
 * gets the same notice they always did; with one, it carries a link.
 */
export async function markShipped(
  orderId: string,
  tracking?: { carrier?: string | null; number?: string | null },
) {
  await assertAdmin()

  const number = tracking?.number?.trim() || null
  // A carrier without a number is meaningless, so it is only stored alongside
  // one. An unrecognised carrier is dropped rather than saved, because
  // `trackingUrl` would refuse to link it anyway and a half-valid value is
  // harder to debug later than a missing one.
  const carrier =
    number && isCarrierKey(tracking?.carrier) ? tracking!.carrier! : null

  if (number && number.length > 100) {
    throw new Error('That tracking number is too long to be real.')
  }

  // Only a paid order can ship, and the guard makes a double-click idempotent.
  const result = await prisma.order.updateMany({
    where: { id: orderId, status: 'paid' },
    data: {
      status: 'shipped',
      shippedAt: new Date(),
      trackingCarrier: carrier,
      trackingNumber: number,
    },
  })

  // Sent only on the transition, so a second click cannot email the customer
  // twice — same reasoning as the payment webhook.
  if (result.count > 0) {
    await sendShippingNotice(orderId)
  }

  revalidatePath('/admin/orders')
  return { ok: result.count > 0 }
}

export async function markCancelled(orderId: string) {
  await assertAdmin()

  // Cancelling a paid order puts the units back on the shelf; cancelling a
  // pending one must not, because pending orders never drew stock down.
  //
  // Which of those applies has to come from the transition that actually
  // happened, not from a status read taken beforehand. Reading first and
  // deciding afterwards loses stock: if the payment webhook lands in the gap
  // it flips pending -> paid and decrements, the cancel below still succeeds
  // because 'paid' is cancellable, and the stale read then says "was pending,
  // nothing to restore". The units stay off the shelf for an order nobody
  // will ship.
  //
  // So try the paid transition on its own first. Exactly one of these two
  // updates can match, and whichever does tells us what the row really was.
  const fromPaid = await prisma.order.updateMany({
    where: { id: orderId, status: 'paid' },
    data: { status: 'cancelled' },
  })

  if (fromPaid.count > 0) {
    await restoreStock(orderId)
    revalidatePath('/admin/orders')
    return { ok: true }
  }

  const fromPending = await prisma.order.updateMany({
    where: { id: orderId, status: 'pending' },
    data: { status: 'cancelled' },
  })

  revalidatePath('/admin/orders')
  return { ok: fromPending.count > 0 }
}

export async function updateStock(productId: string, stockQuantity: number) {
  await assertAdmin()

  if (!Number.isInteger(stockQuantity) || stockQuantity < 0) {
    throw new Error('Stock must be a whole number of zero or more')
  }

  await prisma.product.update({
    where: { id: productId },
    data: { stockQuantity },
  })

  revalidatePath('/admin/orders')
  revalidatePath('/')
  return { ok: true }
}

/**
 * Corrects the email on an order and resends the confirmation.
 *
 * ### Why it corrects rather than just resending
 *
 * The first real order was placed with `chasebecker27@gmal.com` — `gmal`, not
 * `gmail` (§35). The confirmation bounced, so the customer had paid $39.99 and
 * held no record of it.
 *
 * Sending a one-off copy to the right address would have fixed the receipt and
 * left three other things broken, because `Order.email` is what the rest of
 * the shop reads:
 *
 *  - **Guest order lookup** matches on order number *and* email, so he could
 *    not have looked his own order up.
 *  - **The shipping notice** goes to `Order.email` when it is marked shipped.
 *  - **The reorder reminder** (§34) would go to the dead address in five weeks.
 *
 * So the address is corrected on the record and the confirmation is resent to
 * it. One action, and everything downstream follows.
 *
 * ### It checks the new address before trusting it
 *
 * The same mail-server check that now guards checkout, because an admin typing
 * a correction by hand can mistype exactly as the customer did — and the whole
 * point is to stop guessing whether mail arrived.
 */
export async function correctEmailAndResend(orderId: string, rawEmail: string) {
  await assertAdmin()

  const email = rawEmail.trim().toLowerCase()

  const structural = emailLooksWrong(email)
  if (structural) throw new Error(structural)

  if (!(await domainAcceptsMail(email))) {
    throw new Error(UNDELIVERABLE_MESSAGE)
  }

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: { include: { product: true } } },
  })
  if (!order) throw new Error('That order no longer exists.')

  // Updated first: if the send fails, the record is still correct and the
  // resend can simply be tried again. The reverse would leave the shop
  // holding an address it has already proven cannot receive mail.
  const updated = await prisma.order.update({
    where: { id: orderId },
    data: { email },
    include: { items: { include: { product: true } } },
  })

  await sendOrderConfirmationEmail(updated)

  revalidatePath('/admin/orders')
  return { ok: true as const, email }
}

/**
 * Sends the shipping notice again for an order that already shipped.
 *
 * Exists for the case the Orders tab now surfaces: `shippedAt` set and
 * `shippingEmailSentAt` null, meaning the parcel went and the customer was
 * never told. Without this the warning would be information with nothing to do
 * about it.
 *
 * **Deliberately allowed even when the notice did send.** The obvious guard —
 * refuse if `shippingEmailSentAt` is set — would block the case most likely to
 * need it: an address corrected after the first notice bounced. Sending a
 * duplicate tracking email is a small annoyance; being unable to resend one is
 * a customer who never gets their tracking number.
 */
export async function resendShippingNotice(orderId: string) {
  await assertAdmin()

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    select: { status: true, shippedAt: true },
  })

  if (!order) throw new Error('Order not found.')
  if (order.status !== 'shipped' || !order.shippedAt) {
    // There is no tracking number to send before an order ships, so this would
    // email someone a notice about a parcel that has not gone.
    throw new Error('That order has not shipped yet.')
  }

  const sent = await sendShippingNotice(orderId)
  revalidatePath('/admin/orders')

  if (!sent) {
    throw new Error(
      'The email provider refused it. Check the address on the order, then try again.',
    )
  }

  return { ok: true }
}
