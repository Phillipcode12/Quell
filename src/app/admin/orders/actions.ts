'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
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

export async function markShipped(orderId: string) {
  await assertAdmin()

  // Only a paid order can ship, and the guard makes a double-click idempotent.
  const result = await prisma.order.updateMany({
    where: { id: orderId, status: 'paid' },
    data: { status: 'shipped' },
  })

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
