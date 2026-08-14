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

  // Cancelling a paid order puts the units back on the shelf.
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    select: { status: true },
  })

  const result = await prisma.order.updateMany({
    where: { id: orderId, status: { in: ['pending', 'paid'] } },
    data: { status: 'cancelled' },
  })

  if (result.count > 0 && order?.status === 'paid') {
    await restoreStock(orderId)
  }

  revalidatePath('/admin/orders')
  return { ok: result.count > 0 }
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
