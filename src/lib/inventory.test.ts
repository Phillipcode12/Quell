import { beforeEach, describe, expect, it, vi } from 'vitest'

// Mocked before the module under test is imported, so `prisma` inside
// inventory.ts is this object. Nothing here touches a real database.
const prisma = {
  orderItem: { findMany: vi.fn() },
  product: { updateMany: vi.fn(), update: vi.fn() },
}
vi.mock('@/lib/db', () => ({ prisma }))

const { drawDownStock, restoreStock, stockState } = await import('./inventory')

beforeEach(() => {
  vi.clearAllMocks()
})

describe('stockState', () => {
  it('reports out of stock at zero and below', () => {
    expect(stockState(0, 10)).toBe('out_of_stock')
    // Negative should be unreachable -- the conditional decrement exists to
    // make it so -- but if reconciliation ever leaves it negative, the shop
    // must read that as "cannot sell", not wrap around to in stock.
    expect(stockState(-3, 10)).toBe('out_of_stock')
  })

  it('treats the low-stock threshold as inclusive', () => {
    expect(stockState(10, 10)).toBe('low_stock')
    expect(stockState(11, 10)).toBe('in_stock')
    expect(stockState(1, 10)).toBe('low_stock')
  })

  it('says in stock when comfortably above the threshold', () => {
    expect(stockState(248, 10)).toBe('in_stock')
  })
})

describe('drawDownStock', () => {
  it('decrements only while stock covers the quantity', async () => {
    prisma.orderItem.findMany.mockResolvedValue([
      { productId: 'p1', quantity: 2 },
    ])
    prisma.product.updateMany.mockResolvedValue({ count: 1 })

    await drawDownStock('order-1')

    // This is the whole oversell defence, and it lives in the WHERE clause
    // rather than in a read-then-write. Two webhooks landing at once both
    // run this statement; the database decides which one still has stock.
    // A plain `update` here would let concurrent orders push stock negative.
    expect(prisma.product.updateMany).toHaveBeenCalledWith({
      where: { id: 'p1', stockQuantity: { gte: 2 } },
      data: { stockQuantity: { decrement: 2 } },
    })
  })

  it('draws down every line of a multi-item order', async () => {
    prisma.orderItem.findMany.mockResolvedValue([
      { productId: 'p1', quantity: 1 },
      { productId: 'p2', quantity: 3 },
    ])
    prisma.product.updateMany.mockResolvedValue({ count: 1 })

    await drawDownStock('order-2')

    expect(prisma.product.updateMany).toHaveBeenCalledTimes(2)
  })

  it('logs and returns when stock was insufficient, rather than throwing', async () => {
    // The customer has already paid at this point. Throwing would make the
    // webhook fail, Authorize.net would retry it, and the retry risks
    // reprocessing a payment -- all to report a shortfall that only a human
    // can fix. So this is deliberately a loud log and a normal return.
    prisma.orderItem.findMany.mockResolvedValue([
      { productId: 'p1', quantity: 5 },
    ])
    prisma.product.updateMany.mockResolvedValue({ count: 0 })
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    await expect(drawDownStock('order-3')).resolves.toBeUndefined()

    expect(error).toHaveBeenCalledOnce()
    // The message has to carry enough to reconcile by hand: which order,
    // which product, how many.
    const logged = String(error.mock.calls[0][0])
    expect(logged).toContain('OVERSOLD')
    expect(logged).toContain('order-3')
    expect(logged).toContain('p1')
  })

  it('does nothing at all for an order with no items', async () => {
    prisma.orderItem.findMany.mockResolvedValue([])

    await drawDownStock('order-4')

    expect(prisma.product.updateMany).not.toHaveBeenCalled()
  })
})

describe('restoreStock', () => {
  it('puts each line back on the shelf', async () => {
    prisma.orderItem.findMany.mockResolvedValue([
      { productId: 'p1', quantity: 2 },
    ])
    prisma.product.update.mockResolvedValue({})

    await restoreStock('order-5')

    // Unconditional on purpose: an increment cannot oversell, and refusing to
    // restore would strand the stock.
    expect(prisma.product.update).toHaveBeenCalledWith({
      where: { id: 'p1' },
      data: { stockQuantity: { increment: 2 } },
    })
  })
})
