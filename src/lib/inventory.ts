import 'server-only'
import { prisma } from '@/lib/db'

/**
 * Draws down stock for a paid order.
 *
 * The decrement is conditional (`stockQuantity >= quantity`) so concurrent
 * orders can't push stock negative. If it fails, the sale still stands — the
 * customer has paid — so this logs loudly for a human to reconcile rather than
 * throwing and causing the gateway to retry the whole webhook.
 */
export async function drawDownStock(orderId: string) {
  const items = await prisma.orderItem.findMany({
    where: { orderId },
    select: { productId: true, quantity: true },
  })

  for (const item of items) {
    const result = await prisma.product.updateMany({
      where: { id: item.productId, stockQuantity: { gte: item.quantity } },
      data: { stockQuantity: { decrement: item.quantity } },
    })

    if (result.count === 0) {
      console.error(
        `[inventory] OVERSOLD: order ${orderId} needs ${item.quantity} of ` +
          `product ${item.productId} but stock was insufficient. ` +
          `The payment succeeded — reconcile this manually.`,
      )
    }
  }
}

/** Returns stock to the shelf, e.g. when an order is cancelled after payment. */
export async function restoreStock(orderId: string) {
  const items = await prisma.orderItem.findMany({
    where: { orderId },
    select: { productId: true, quantity: true },
  })

  for (const item of items) {
    await prisma.product.update({
      where: { id: item.productId },
      data: { stockQuantity: { increment: item.quantity } },
    })
  }
}

export type StockState = 'in_stock' | 'low_stock' | 'out_of_stock'

export function stockState(
  stockQuantity: number,
  lowStockAt: number,
): StockState {
  if (stockQuantity <= 0) return 'out_of_stock'
  if (stockQuantity <= lowStockAt) return 'low_stock'
  return 'in_stock'
}
