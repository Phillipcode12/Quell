import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * The order-size cap.
 *
 * "Maximum 10 bottles per order" was enforced per *line item*, and the items
 * array had no length limit — so a request posted straight at this endpoint
 * could repeat the same product across many lines, each within the cap. The
 * stock check downstream is also per line, so with 250 units on hand that was
 * roughly $7,500 in a single order against a declared maximum ticket of $300.
 *
 * The cart UI could never produce it (one product means one line), which is
 * exactly why it needed a test: the UI is not what enforces this.
 */

const PRODUCT = {
  id: 'prod_1',
  slug: 'quell',
  name: 'Quell Preservative-Free Lubricating Eye Drops',
  priceCents: 2999,
  stockQuantity: 250,
  active: true,
}

const prisma = {
  product: { findMany: vi.fn() },
  order: { create: vi.fn(), update: vi.fn(), count: vi.fn() },
}
const getCurrentUser = vi.fn()
const createHostedPaymentPageToken = vi.fn()
const isGatewayConfigured = vi.fn()

vi.mock('@/lib/db', () => ({ prisma }))
vi.mock('@/lib/auth', () => ({ getCurrentUser }))
vi.mock('@/lib/authorizenet', () => ({
  createHostedPaymentPageToken,
  hostedFormUrl: () => 'https://test.authorize.net/payment/payment',
  isGatewayConfigured,
}))
vi.mock('@/lib/order-number', () => ({
  generateUniqueOrderNumber: async () => 'Q-TEST0001',
}))

const { POST } = await import('./route')

const SHIP_TO = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  line1: '412 Woodmont Blvd',
  city: 'Nashville',
  state: 'TN',
  postalCode: '37205',
  // Required from 2026-10-02 — the carriers ask for a number. See lib/phone.
  phone: '615-555-0142',
  country: 'US' as const,
}

// The real in-process rate limiter runs, so each test needs its own IP.
let ip = 0
const post = (
  items: { productId: string; quantity: number }[],
  shipTo: Record<string, unknown> = SHIP_TO,
) =>
  POST(
    new Request('https://quelldrop.com/api/checkout', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': `10.1.0.${++ip}`,
      },
      body: JSON.stringify({ items, shipTo, email: 'ada@example.com' }),
    }),
  )

beforeEach(() => {
  vi.clearAllMocks()
  getCurrentUser.mockResolvedValue(null)
  isGatewayConfigured.mockReturnValue(true)
  prisma.product.findMany.mockResolvedValue([PRODUCT])
  prisma.order.create.mockResolvedValue({ id: 'order_1' })
  createHostedPaymentPageToken.mockResolvedValue('token')
})

describe('the per-order cap', () => {
  it('accepts an order at the cap', async () => {
    const res = await post([{ productId: PRODUCT.id, quantity: 10 }])
    expect(res.status).toBe(200)
  })

  it('rejects a single line over the cap', async () => {
    const res = await post([{ productId: PRODUCT.id, quantity: 11 }])

    expect(res.status).toBe(400)
    await expect(res.json()).resolves.toEqual({
      error: 'Maximum 10 bottles per order.',
    })
  })

  it('rejects the same product split across lines to beat the cap', async () => {
    // THE bug. Two lines of 10 each are individually legal and total 20.
    const res = await post([
      { productId: PRODUCT.id, quantity: 10 },
      { productId: PRODUCT.id, quantity: 10 },
    ])

    expect(res.status).toBe(400)
    await expect(res.json()).resolves.toEqual({
      error: 'Maximum 10 bottles per order.',
    })
    // Rejected before anything is written or the gateway is called.
    expect(prisma.order.create).not.toHaveBeenCalled()
    expect(createHostedPaymentPageToken).not.toHaveBeenCalled()
  })

  it('rejects the inventory-clearing version', async () => {
    // 25 lines of 10 was ~$7,500 and would have emptied the shelf.
    const res = await post(
      Array.from({ length: 25 }, () => ({ productId: PRODUCT.id, quantity: 10 })),
    )

    expect(res.status).toBe(400)
    expect(prisma.order.create).not.toHaveBeenCalled()
  })

  it('rejects an absurd number of lines outright', async () => {
    const res = await post(
      Array.from({ length: 50 }, () => ({ productId: PRODUCT.id, quantity: 1 })),
    )

    expect(res.status).toBe(400)
    await expect(res.json()).resolves.toEqual({
      error: 'Too many items in this order.',
    })
  })
})

describe('merging repeated lines', () => {
  it('combines them into one line and charges once', async () => {
    // Legal in total (5 + 5 = 10), so it must succeed — and arrive as a single
    // line of 10 rather than two of 5, or the packing email and the receipt
    // list the same product twice.
    const res = await post([
      { productId: PRODUCT.id, quantity: 5 },
      { productId: PRODUCT.id, quantity: 5 },
    ])

    expect(res.status).toBe(200)

    const created = prisma.order.create.mock.calls[0][0].data
    expect(created.items.create).toHaveLength(1)
    expect(created.items.create[0]).toMatchObject({
      productId: PRODUCT.id,
      quantity: 10,
    })

    // 10 x $29.99 = $299.90, free shipping over $59 — the declared maximum
    // ticket on the merchant application.
    expect(created.subtotalCents).toBe(29_990)
    expect(created.shippingCents).toBe(0)
    expect(created.totalCents).toBe(29_990)
  })

  it('sends the gateway one line item, not two', async () => {
    await post([
      { productId: PRODUCT.id, quantity: 5 },
      { productId: PRODUCT.id, quantity: 5 },
    ])

    const sent = createHostedPaymentPageToken.mock.calls[0][0]
    expect(sent.lineItems).toHaveLength(1)
    expect(sent.lineItems[0].quantity).toBe(10)
    expect(sent.amountCents).toBe(29_990)
  })
})

describe('the declared ticket ceiling holds', () => {
  it('caps the largest possible order at $299.90', async () => {
    // The merchant application declares a ~$300 maximum. A transaction far
    // outside the declared profile is what triggers a fraud hold on a new
    // account, so this is the number that has to stay true.
    const res = await post([{ productId: PRODUCT.id, quantity: 10 }])

    expect(res.status).toBe(200)
    expect(prisma.order.create.mock.calls[0][0].data.totalCents).toBe(29_990)
    expect(29_990).toBeLessThanOrEqual(30_000)
  })
})

/**
 * The phone number, required from 2026-10-02 because the carriers ask for one.
 *
 * The expensive failure here is the opposite of the usual: this stands between
 * a paying customer and a completed order, so rejecting a real number costs a
 * sale. Most of these assert that odd-but-real formats get through.
 */
describe('the phone number', () => {
  const withPhone = (phone: unknown) => ({ ...SHIP_TO, phone })
  const items = [{ productId: 'prod_1', quantity: 1 }]

  it('is refused when missing', async () => {
    const shipTo = { ...SHIP_TO }
    delete (shipTo as Record<string, unknown>).phone
    const res = await post(items, shipTo)
    expect(res.status).toBe(400)
    expect(prisma.order.create).not.toHaveBeenCalled()
  })

  it('is refused when blank', async () => {
    expect((await post(items, withPhone('   '))).status).toBe(400)
    expect(prisma.order.create).not.toHaveBeenCalled()
  })

  it('is refused when it is not a number at all', async () => {
    expect((await post(items, withPhone('n/a'))).status).toBe(400)
  })

  it('is refused when it is short of a dialable number', async () => {
    expect((await post(items, withPhone('555-0142'))).status).toBe(400)
  })

  it('says what is wanted rather than that something is invalid', async () => {
    const res = await post(items, withPhone(''))
    const body = await res.json()
    expect(body.error).toMatch(/10 digits/)
  })

  it.each([
    '6155550142',
    '(615) 555-0142',
    '615.555.0142',
    '+1 615 555 0142',
    '615-555-0142 ext. 204',
  ])('accepts %s', async (phone) => {
    const res = await post(items, withPhone(phone))
    expect(res.status).toBe(200)
  })

  it('stores the number exactly as the customer typed it', async () => {
    // Including the extension: the person booking the parcel can read it, and
    // reformatting would only lose what was meant.
    await post(items, withPhone('+1 (615) 555-0142 ext. 204'))
    expect(prisma.order.create.mock.calls[0][0].data.phone).toBe(
      '+1 (615) 555-0142 ext. 204',
    )
  })
})
