import { describe, expect, it } from 'vitest'
import { mergeContacts, type OrderRow } from './contacts'

/**
 * One row per person, whatever is known about them.
 *
 * The two properties worth protecting here are opposites, which is why both get
 * their own tests: the same person must never appear twice, and two different
 * people must never be merged into one. The second is the dangerous direction
 * -- a duplicate row is untidy, a merge silently attributes one person's orders
 * and phone number to another.
 */

const at = (iso: string) => new Date(iso)

const order = (over: Partial<OrderRow> = {}): OrderRow => ({
  email: 'chase@example.com',
  shippingName: 'Chase Becker',
  phone: null,
  status: 'paid',
  totalCents: 3999,
  createdAt: at('2026-09-30T20:38:00Z'),
  ...over,
})

const merge = (input: Partial<Parameters<typeof mergeContacts>[0]>) =>
  mergeContacts({ orders: [], users: [], subscribers: [], ...input })

describe('mergeContacts', () => {
  it('merges one person across all three tables into a single row', () => {
    const result = merge({
      orders: [order()],
      users: [
        {
          email: 'chase@example.com',
          name: 'Chase B',
          createdAt: at('2026-09-29T00:00:00Z'),
        },
      ],
      subscribers: [
        { email: 'chase@example.com', createdAt: at('2026-09-20T00:00:00Z') },
      ],
    })

    expect(result).toHaveLength(1)
    expect(result[0].sources).toEqual(['customer', 'account', 'self-check'])
  })

  it('treats addresses differing only in case as the same person', () => {
    const result = merge({
      orders: [order({ email: 'Chase@Example.COM' })],
      subscribers: [
        { email: 'chase@example.com', createdAt: at('2026-09-01T00:00:00Z') },
      ],
    })

    expect(result).toHaveLength(1)
    // Lowercased, so the CSV and any mail tool get one consistent spelling.
    expect(result[0].email).toBe('chase@example.com')
  })

  it('never merges plus-tagged or dotted variants', () => {
    // Deliberate: some providers treat these as one mailbox and some do not,
    // and merging two real people is far worse than listing one twice.
    const result = merge({
      orders: [
        order({ email: 'a@example.com' }),
        order({ email: 'a+shop@example.com' }),
        order({ email: 'a.b@example.com' }),
      ],
    })
    expect(result).toHaveLength(3)
  })

  it('keeps an address that has nothing else attached to it', () => {
    // The whole ask: if there is no name or number, the row is still the email.
    const result = merge({
      subscribers: [
        { email: 'someone@example.com', createdAt: at('2026-09-10T00:00:00Z') },
      ],
    })

    expect(result[0]).toMatchObject({
      email: 'someone@example.com',
      name: null,
      phone: null,
      orders: 0,
      spentCents: 0,
      consent: 'opted-in',
    })
  })

  it('prefers the account name over a shipping name', () => {
    const result = merge({
      orders: [order({ shippingName: 'C/O Front Desk' })],
      users: [
        {
          email: 'chase@example.com',
          name: 'Chase Becker',
          createdAt: at('2020-01-01T00:00:00Z'),
        },
      ],
    })
    // Even though the order is far newer: a shipping name may be whoever the
    // parcel is addressed to, the account name is what they called themselves.
    expect(result[0].name).toBe('Chase Becker')
  })

  it('takes the most recent phone number and ignores blank ones', () => {
    const result = merge({
      orders: [
        order({ phone: '615-555-0100', createdAt: at('2026-08-01T00:00:00Z') }),
        order({ phone: '   ', createdAt: at('2026-09-01T00:00:00Z') }),
        order({ phone: '615-555-0199', createdAt: at('2026-08-15T00:00:00Z') }),
      ],
    })
    expect(result[0].phone).toBe('615-555-0199')
  })

  it('does not turn a whitespace-only shipping name into a name', () => {
    const result = merge({ orders: [order({ shippingName: '  ' })] })
    expect(result[0].name).toBeNull()
  })

  it('counts and sums only orders that took money', () => {
    const result = merge({
      orders: [
        order({ status: 'paid', totalCents: 3999 }),
        order({ status: 'shipped', totalCents: 5998 }),
        order({ status: 'pending', totalCents: 9999 }),
        order({ status: 'cancelled', totalCents: 9999 }),
      ],
    })

    expect(result[0].orders).toBe(2)
    expect(result[0].spentCents).toBe(3999 + 5998)
  })

  it('marks a pending order as an abandoned cart', () => {
    const result = merge({ orders: [order({ status: 'pending' })] })
    expect(result[0].sources).toEqual(['abandoned'])
    expect(result[0].orders).toBe(0)
  })

  it('gives a cancelled-only order no source at all', () => {
    const result = merge({ orders: [order({ status: 'cancelled' })] })
    expect(result[0].sources).toEqual([])
    expect(result[0].consent).toBe('none')
  })

  describe('consent', () => {
    it('is opted-in for a self-check subscriber', () => {
      const result = merge({
        subscribers: [{ email: 'a@example.com', createdAt: at('2026-09-01T00:00:00Z') }],
      })
      expect(result[0].consent).toBe('opted-in')
    })

    it('is customer-only for someone who just bought', () => {
      const result = merge({ orders: [order()] })
      expect(result[0].consent).toBe('customer')
    })

    it('prefers opted-in when someone is both, because they asked', () => {
      const result = merge({
        orders: [order()],
        subscribers: [
          { email: 'chase@example.com', createdAt: at('2026-09-01T00:00:00Z') },
        ],
      })
      expect(result[0].consent).toBe('opted-in')
    })

    it('is do-not-email for an account that never bought or subscribed', () => {
      // Which is exactly what the signup bot left behind.
      const result = merge({
        users: [
          { email: 'bot@example.com', name: 'x', createdAt: at('2026-09-27T00:00:00Z') },
        ],
      })
      expect(result[0].consent).toBe('none')
    })
  })

  it('reports first and last contact across every table', () => {
    const result = merge({
      orders: [order({ createdAt: at('2026-09-30T20:38:00Z') })],
      subscribers: [
        { email: 'chase@example.com', createdAt: at('2026-09-02T00:00:00Z') },
      ],
    })

    expect(result[0].firstSeen.toISOString()).toBe('2026-09-02T00:00:00.000Z')
    expect(result[0].lastSeen.toISOString()).toBe('2026-09-30T20:38:00.000Z')
  })

  it('sorts most recent first, then by address so ties are stable', () => {
    const same = at('2026-09-15T00:00:00Z')
    const result = merge({
      orders: [
        order({ email: 'old@example.com', createdAt: at('2026-01-01T00:00:00Z') }),
        order({ email: 'zoe@example.com', createdAt: same }),
        order({ email: 'adam@example.com', createdAt: same }),
      ],
    })

    expect(result.map((c) => c.email)).toEqual([
      'adam@example.com',
      'zoe@example.com',
      'old@example.com',
    ])
  })

  it('drops an address that is blank after trimming', () => {
    const result = merge({ orders: [order({ email: '   ' }), order()] })
    expect(result).toHaveLength(1)
    expect(result[0].email).toBe('chase@example.com')
  })
})
