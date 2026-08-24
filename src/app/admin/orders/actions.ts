'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { isCarrierKey } from '@/lib/carriers'
import { restoreStock } from '@/lib/inventory'
import { sendShippingNotice } from '@/lib/orders'

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
