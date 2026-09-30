import { describe, expect, it } from 'vitest'
import {
  DAYS_PER_BOTTLE,
  REORDER_GRACE_MS,
  dueDate,
  shouldEmailReorder,
} from './reorder'

const DAY = 24 * 60 * 60_000
const NOW = new Date('2026-11-01T12:00:00Z')
const ago = (days: number) => new Date(NOW.getTime() - days * DAY)

const order = (over: Partial<Parameters<typeof shouldEmailReorder>[0]> = {}) => ({
  status: 'paid',
  quantity: 1,
  reorderEmailSentAt: null,
  createdAt: ago(DAYS_PER_BOTTLE + 1),
  hasLaterOrder: false,
  now: NOW,
  ...over,
})

describe('the timing scales with how many bottles they bought', () => {
  /**
   * The point of this feature that is easiest to get wrong. Someone who bought
   * two bottles is half way through at 35 days, and telling them they are
   * running low would be confidently wrong about their life — which is how an
   * email teaches someone to ignore the next one.
   */
  it('waits twice as long for two bottles', () => {
    const created = ago(DAYS_PER_BOTTLE + 1)

    // One bottle: due, and emailed.
    expect(shouldEmailReorder(order({ quantity: 1, createdAt: created })).email).toBe(
      true,
    )
    // Same date, two bottles: not due for another 35 days.
    expect(shouldEmailReorder(order({ quantity: 2, createdAt: created }))).toEqual({
      email: false,
      reason: 'too-soon',
    })
  })

  it('computes the due date as quantity × days per bottle', () => {
    const created = new Date('2026-09-01T00:00:00Z')
    expect(dueDate(created, 1).toISOString().slice(0, 10)).toBe('2026-10-06')
    expect(dueDate(created, 2).toISOString().slice(0, 10)).toBe('2026-11-10')
    expect(dueDate(created, 3).toISOString().slice(0, 10)).toBe('2026-12-15')
  })

  it('emails a two-bottle order once it really is due', () => {
    const verdict = shouldEmailReorder(
      order({ quantity: 2, createdAt: ago(2 * DAYS_PER_BOTTLE + 1) }),
    )
    expect(verdict.email).toBe(true)
  })
})

describe('who must never receive this', () => {
  it('never reminds someone who has already reordered', () => {
    // The most obvious way to look like nobody is paying attention, and the
    // complaint this kind of email usually earns.
    expect(shouldEmailReorder(order({ hasLaterOrder: true }))).toEqual({
      email: false,
      reason: 'already-reordered',
    })
  })

  it('never reminds twice', () => {
    expect(
      shouldEmailReorder(order({ reorderEmailSentAt: ago(1) })),
    ).toEqual({ email: false, reason: 'already-emailed' })
  })

  it('never reminds about an order that was never fulfilled', () => {
    // A pending order is a checkout that may never have completed; a cancelled
    // one is not a customer. Neither has a bottle to run out.
    for (const status of ['pending', 'cancelled']) {
      expect(shouldEmailReorder(order({ status })), status).toEqual({
        email: false,
        reason: 'not-fulfilled',
      })
    }
  })

  it('gives up once the moment has passed', () => {
    /**
     * The grace window also bounds the first run: without it, shipping this
     * would mail every customer who has ever ordered, however long ago.
     */
    expect(
      shouldEmailReorder(
        order({ createdAt: ago(DAYS_PER_BOTTLE + REORDER_GRACE_MS / DAY + 2) }),
      ),
    ).toEqual({ email: false, reason: 'too-late' })
  })

  it('refuses an order with no items rather than dividing by nothing', () => {
    expect(shouldEmailReorder(order({ quantity: 0 })).email).toBe(false)
  })
})

describe('the ordinary case', () => {
  it('reminds a one-bottle customer just past the estimate', () => {
    const verdict = shouldEmailReorder(order())
    expect(verdict.email).toBe(true)
    if (verdict.email) expect(verdict.dueAt).toBeInstanceOf(Date)
  })

  it('reminds a shipped order, not only a paid one', () => {
    expect(shouldEmailReorder(order({ status: 'shipped' })).email).toBe(true)
  })

  it('does not fire on the day before it is due', () => {
    expect(
      shouldEmailReorder(order({ createdAt: ago(DAYS_PER_BOTTLE - 1) })),
    ).toEqual({ email: false, reason: 'too-soon' })
  })
})

describe('the constants', () => {
  it('matches the labelled dose', () => {
    // One drop three times a day in each eye is six drops; a 10 mL bottle is
    // roughly 200 drops, so about 35 days. Consistent with the "five to seven
    // weeks" recorded for this product.
    expect(DAYS_PER_BOTTLE).toBe(35)
    expect(REORDER_GRACE_MS).toBe(45 * DAY)
  })
})
