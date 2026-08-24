import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * Post-purchase account creation.
 *
 * The security property under test is the one from PROJECT_STATE §8: signing
 * in must never adopt guest orders that merely share your email address. This
 * route attaches exactly one order -- the one whose number was presented --
 * and nothing else. If these tests ever start passing while more than one
 * order gets linked, that property is gone.
 */

const prisma = {
  order: { findFirst: vi.fn(), updateMany: vi.fn() },
  user: { findUnique: vi.fn(), create: vi.fn() },
  $transaction: vi.fn(),
}
const getCurrentUser = vi.fn()
const hashPassword = vi.fn()
const createSession = vi.fn()

vi.mock('@/lib/db', () => ({ prisma }))
vi.mock('@/lib/auth', () => ({ getCurrentUser, hashPassword }))
vi.mock('@/lib/session', () => ({ createSession }))

const { POST } = await import('./route')

const ORDER = { id: 'order_1', userId: null }
const CREATED_USER = { id: 'user_1', email: 'ada@example.com', name: 'Ada' }

const VALID = {
  orderNumber: 'Q-7F3K9M2A',
  email: 'ada@example.com',
  name: 'Ada Lovelace',
  password: 'a-good-password',
}

// The real in-process rate limiter runs during these tests rather than being
// mocked, so each one needs its own IP or the fifth test in a file would start
// getting 429s from the leftovers of the first four.
let ipCounter = 0
const post = (body: unknown, ip = `10.0.0.${++ipCounter}`) =>
  POST(
    new Request('https://quell.example/api/auth/claim-order', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    }),
  )

beforeEach(() => {
  vi.clearAllMocks()
  getCurrentUser.mockResolvedValue(null)
  hashPassword.mockResolvedValue('$2b$10$hashed')
  prisma.order.findFirst.mockResolvedValue(ORDER)
  prisma.user.findUnique.mockResolvedValue(null)
  prisma.order.updateMany.mockResolvedValue({ count: 1 })
  prisma.user.create.mockResolvedValue(CREATED_USER)
  // Run the callback against the same mocks, so the assertions below see the
  // calls the transaction body made.
  prisma.$transaction.mockImplementation(async (fn: (tx: unknown) => unknown) =>
    fn(prisma),
  )
})

describe('the happy path', () => {
  it('creates the account, links the order, and signs the buyer in', async () => {
    const response = await post(VALID)

    expect(response.status).toBe(201)
    await expect(response.json()).resolves.toEqual({ user: CREATED_USER })

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        passwordHash: '$2b$10$hashed',
      },
      select: { id: true, email: true, name: true },
    })
    expect(createSession).toHaveBeenCalledWith({
      userId: 'user_1',
      email: 'ada@example.com',
    })
  })

  it('links only the order whose number was presented', async () => {
    // THE test. Linking by email -- `where: { email }` -- would hand over every
    // guest order that address ever placed, which is exactly what the project
    // decided not to do. The claim is scoped to one order id.
    await post(VALID)

    expect(prisma.order.updateMany).toHaveBeenCalledWith({
      where: { id: 'order_1', userId: null },
      data: { userId: 'user_1' },
    })

    const where = prisma.order.updateMany.mock.calls[0][0].where
    expect(where).not.toHaveProperty('email')
    expect(where.id).toBe('order_1')
  })

  it('requires the order number and email to match the same order', async () => {
    await post(VALID)

    expect(prisma.order.findFirst).toHaveBeenCalledWith({
      where: { orderNumber: 'Q-7F3K9M2A', email: 'ada@example.com' },
      select: { id: true, userId: true },
    })
  })

  it('normalises the email and order number the way checkout wrote them', async () => {
    // Checkout lower-cases the email before storing it and order numbers are
    // upper-case, so a customer typing either casually must still match.
    await post({ ...VALID, email: '  Ada@Example.COM ', orderNumber: 'q-7f3k9m2a' })

    expect(prisma.order.findFirst).toHaveBeenCalledWith({
      where: { orderNumber: 'Q-7F3K9M2A', email: 'ada@example.com' },
      select: { id: true, userId: true },
    })
  })

  it('never stores the raw password', async () => {
    await post(VALID)

    expect(hashPassword).toHaveBeenCalledWith('a-good-password')
    expect(
      JSON.stringify(prisma.user.create.mock.calls[0][0]),
    ).not.toContain('a-good-password')
  })
})

describe('proof of possession', () => {
  it('refuses when no order matches, without creating anything', async () => {
    prisma.order.findFirst.mockResolvedValue(null)

    const response = await post(VALID)

    expect(response.status).toBe(404)
    expect(prisma.user.create).not.toHaveBeenCalled()
    expect(createSession).not.toHaveBeenCalled()
  })

  it('answers a wrong email exactly as it answers a fake order number', async () => {
    // No oracle. If these two differed, the route would confirm which order
    // numbers are real, and an 8-character reference is short enough that
    // confirmation is the expensive half of the attack.
    prisma.order.findFirst.mockResolvedValue(null)

    const wrongEmail = await post({ ...VALID, email: 'someone@else.example' })
    const fakeNumber = await post({ ...VALID, orderNumber: 'Q-XXXXXXXX' })

    expect(wrongEmail.status).toBe(fakeNumber.status)
    await expect(wrongEmail.json()).resolves.toEqual(await fakeNumber.json())
  })

  it('refuses an order that already belongs to an account', async () => {
    prisma.order.findFirst.mockResolvedValue({ id: 'order_1', userId: 'someone' })

    const response = await post(VALID)

    expect(response.status).toBe(409)
    expect(prisma.user.create).not.toHaveBeenCalled()
  })

  it('refuses rather than hijacking an existing account for that email', async () => {
    // Holding the order number proves possession of the order. It does not
    // prove possession of the account, so this must not attach the order to
    // an account it cannot authenticate as.
    prisma.user.findUnique.mockResolvedValue({ id: 'existing' })

    const response = await post(VALID)

    expect(response.status).toBe(409)
    await expect(response.json()).resolves.toEqual({
      error: 'An account already uses that email. Sign in to that account instead.',
    })
    expect(prisma.user.create).not.toHaveBeenCalled()
    expect(prisma.order.updateMany).not.toHaveBeenCalled()
    expect(createSession).not.toHaveBeenCalled()
  })
})

describe('races', () => {
  it('rolls the new account back if the order was claimed mid-flight', async () => {
    // The conditional update returns count 0, the transaction body throws, and
    // the rollback means no orphan account is left behind promising an order
    // it never got.
    prisma.order.updateMany.mockResolvedValue({ count: 0 })
    prisma.$transaction.mockImplementation(
      async (fn: (tx: unknown) => unknown) => fn(prisma),
    )

    const response = await post(VALID)

    expect(response.status).toBe(409)
    expect(createSession).not.toHaveBeenCalled()
  })

  it('reports a duplicate email that slipped past the pre-check', async () => {
    // Two signups for the same address at once: both findUnique calls see
    // nothing, and the unique constraint decides. P2002 must read as a
    // conflict, not a 500.
    prisma.$transaction.mockRejectedValue(
      Object.assign(new Error('Unique constraint failed'), { code: 'P2002' }),
    )

    const response = await post(VALID)

    expect(response.status).toBe(409)
    expect(createSession).not.toHaveBeenCalled()
  })

  it('returns 500 and logs on an unexpected database failure', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    prisma.$transaction.mockRejectedValue(new Error('connection reset'))

    const response = await post(VALID)

    expect(response.status).toBe(500)
    expect(error).toHaveBeenCalled()
    expect(createSession).not.toHaveBeenCalled()
  })
})

describe('validation', () => {
  it('rejects a short password before touching the database', async () => {
    const response = await post({ ...VALID, password: 'short' })

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toEqual({
      error: 'Password must be at least 8 characters',
    })
    expect(prisma.order.findFirst).not.toHaveBeenCalled()
  })

  it('rejects a missing name and a malformed email', async () => {
    expect((await post({ ...VALID, name: '   ' })).status).toBe(400)
    expect((await post({ ...VALID, email: 'not-an-email' })).status).toBe(400)
  })

  it('rejects a body that is not JSON', async () => {
    expect((await post('{{{')).status).toBe(400)
  })
})

describe('already signed in', () => {
  it('refuses instead of creating a second account', async () => {
    getCurrentUser.mockResolvedValue({ id: 'user_9', email: 'someone@example.com' })

    const response = await post(VALID)

    expect(response.status).toBe(409)
    expect(prisma.user.create).not.toHaveBeenCalled()
  })
})

describe('rate limiting', () => {
  it('blocks the sixth attempt from one address with a Retry-After', async () => {
    // Account creation and order-number guessing in one endpoint, so the cap
    // matches registration's five per hour per IP.
    const ip = '198.51.100.77'
    prisma.order.findFirst.mockResolvedValue(null)

    for (let i = 0; i < 5; i += 1) {
      expect((await post(VALID, ip)).status).toBe(404)
    }

    const blocked = await post(VALID, ip)
    expect(blocked.status).toBe(429)
    expect(Number(blocked.headers.get('Retry-After'))).toBeGreaterThan(0)
  })

  it('does not let one address lock out another', async () => {
    const ip = '198.51.100.88'
    prisma.order.findFirst.mockResolvedValue(null)

    for (let i = 0; i < 6; i += 1) await post(VALID, ip)

    expect((await post(VALID, '198.51.100.89')).status).toBe(404)
  })
})
