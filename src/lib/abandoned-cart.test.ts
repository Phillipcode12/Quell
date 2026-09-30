import { describe, expect, it } from 'vitest'
import {
  ABANDON_AFTER_MS,
  ABANDON_WINDOW_MS,
  isAbandoned,
  shouldEmailAbandoned,
} from './abandoned-cart'

const NOW = new Date('2026-09-30T12:00:00Z')
const ago = (ms: number) => new Date(NOW.getTime() - ms)

const pending = (over: Partial<Parameters<typeof shouldEmailAbandoned>[0]> = {}) => ({
  status: 'pending',
  paymentTransactionId: null,
  abandonedEmailSentAt: null,
  // Comfortably past the threshold, so the default fixture is an
  // ordinary eligible cart and each test changes only the thing it is about.
  createdAt: ago(6 * 60 * 60_000),
  now: NOW,
  ...over,
})

describe('who must never receive this', () => {
  it('never emails someone who paid', () => {
    // The worst possible message: "your order didn't finish" to a customer who
    // has been charged and is waiting for a parcel.
    expect(
      shouldEmailAbandoned(pending({ paymentTransactionId: 'anet_123' })),
    ).toEqual({ email: false, reason: 'already-paid' })
  })

  it('never emails a cancelled order', () => {
    expect(shouldEmailAbandoned(pending({ status: 'cancelled' }))).toEqual({
      email: false,
      reason: 'not-pending',
    })
    for (const status of ['paid', 'shipped']) {
      expect(shouldEmailAbandoned(pending({ status })).email, status).toBe(false)
    }
  })

  it('never emails the same order twice', () => {
    // The whole point of the flag. Cron delivery can invoke the same run
    // twice, and a repeated "you left something behind" is the fastest way to
    // turn a near-customer into a complaint.
    expect(
      shouldEmailAbandoned(pending({ abandonedEmailSentAt: ago(60_000) })),
    ).toEqual({ email: false, reason: 'already-emailed' })
  })

  it('never emails someone who may still be paying', () => {
    // Two hours. Mailing a person who is mid-checkout, looking for their card,
    // is both wrong and irritating.
    expect(shouldEmailAbandoned(pending({ createdAt: ago(60_000) }))).toEqual({
      email: false,
      reason: 'too-soon',
    })
    expect(
      shouldEmailAbandoned(pending({ createdAt: ago(ABANDON_AFTER_MS - 1000) })).email,
    ).toBe(false)
  })

  it('never emails a stale cart', () => {
    /**
     * The upper bound is what stopped the first deployment mailing a
     * nine-day-old order from 2026-09-20 (§33). Without it, shipping this
     * feature would have sent mail to every pending order ever created.
     */
    expect(
      shouldEmailAbandoned(pending({ createdAt: ago(ABANDON_WINDOW_MS + 1000) })),
    ).toEqual({ email: false, reason: 'too-old' })
  })
})

describe('who does receive it', () => {
  it('emails a genuine abandoned cart inside the window', () => {
    expect(shouldEmailAbandoned(pending())).toEqual({ email: true })
  })

  it('emails at both edges of the window', () => {
    // Off-by-one here is either a feature that never fires or one that fires
    // on stale carts, and neither announces itself.
    expect(
      shouldEmailAbandoned(pending({ createdAt: ago(ABANDON_AFTER_MS + 1000) })).email,
    ).toBe(true)
    expect(
      shouldEmailAbandoned(pending({ createdAt: ago(ABANDON_WINDOW_MS - 1000) })).email,
    ).toBe(true)
  })
})

describe('isAbandoned, used by the admin list', () => {
  it('agrees with the mail rules about what abandoned means', () => {
    // The page and the cron must not disagree, or the list shows one thing and
    // the mail does another.
    expect(isAbandoned({ status: 'pending', paymentTransactionId: null })).toBe(true)
    expect(isAbandoned({ status: 'pending', paymentTransactionId: 'x' })).toBe(false)
    expect(isAbandoned({ status: 'paid', paymentTransactionId: 'x' })).toBe(false)
    expect(isAbandoned({ status: 'cancelled', paymentTransactionId: null })).toBe(false)
  })
})

describe('the windows themselves', () => {
  it('waits hours and gives up after a week', () => {
    expect(ABANDON_AFTER_MS).toBe(2 * 60 * 60_000)
    expect(ABANDON_WINDOW_MS).toBe(7 * 24 * 60 * 60_000)
    expect(ABANDON_AFTER_MS).toBeLessThan(ABANDON_WINDOW_MS)
  })
})
