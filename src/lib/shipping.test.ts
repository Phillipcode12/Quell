import { describe, expect, it } from 'vitest'
import {
  FREE_SHIPPING_BOTTLES,
  FREE_SHIPPING_THRESHOLD_CENTS,
  STANDARD_SHIPPING_CENTS,
  remainingForFreeShipping,
  shippingCentsFor,
} from './shipping'

/**
 * Shipping is worth testing despite being four lines, because the same
 * function decides what the cart shows the customer and what the order is
 * charged. A disagreement between those two is a chargeback, not a bug report.
 */

// The seeded price of one bottle. Kept here rather than imported because the
// point of the arithmetic tests below is to pin down real cart totals; if the
// price changes, these should fail and be re-read, not silently follow along.
const ONE_BOTTLE = 2999

describe('shippingCentsFor', () => {
  it('charges the flat rate below the threshold', () => {
    expect(shippingCentsFor(0)).toBe(STANDARD_SHIPPING_CENTS)
    expect(shippingCentsFor(ONE_BOTTLE)).toBe(STANDARD_SHIPPING_CENTS)
  })

  it('ships free exactly at the threshold, not just above it', () => {
    // The off-by-one that matters: the copy says "free shipping over $59", so
    // a $59.00 order must not be charged. `>` instead of `>=` breaks only this
    // single value, which is precisely the case nobody clicks through by hand.
    expect(shippingCentsFor(FREE_SHIPPING_THRESHOLD_CENTS)).toBe(0)
    expect(shippingCentsFor(FREE_SHIPPING_THRESHOLD_CENTS - 1)).toBe(
      STANDARD_SHIPPING_CENTS,
    )
    expect(shippingCentsFor(FREE_SHIPPING_THRESHOLD_CENTS + 1)).toBe(0)
  })

  it('charges a two-bottle order and ships three free', () => {
    /**
     * The pricing ladder, pinned. Changed 2026-10-02: the threshold was $59,
     * which two bottles cleared — so the third bottle earned the customer
     * nothing and there was no reason to buy three.
     *
     * These are the numbers on the buy panel. If they move, the panel copy and
     * the agreement with Dr. Rynerson move with them, so this should fail and
     * be re-read rather than quietly updated.
     */
    expect(shippingCentsFor(ONE_BOTTLE * 2)).toBe(STANDARD_SHIPPING_CENTS)
    expect(shippingCentsFor(ONE_BOTTLE * 3)).toBe(0)
  })

  it('matches the bottle count the copy promises', () => {
    /**
     * FREE_SHIPPING_BOTTLES is written down, not computed -- the price lives
     * in the database. This is what stops the site promising "free shipping on
     * 3 bottles or more" while checkout charges for three.
     *
     * If this fails, the price changed. Fix the constant and the copy follows;
     * do not relax the test.
     */
    expect(shippingCentsFor(ONE_BOTTLE * FREE_SHIPPING_BOTTLES)).toBe(0)
    expect(shippingCentsFor(ONE_BOTTLE * (FREE_SHIPPING_BOTTLES - 1))).toBe(
      STANDARD_SHIPPING_CENTS,
    )
  })

  it('keeps the delivered price per bottle falling as quantity rises', () => {
    // What the panel promises: $39.99, then $34.99, then $29.99 a bottle.
    const delivered = (n: number) =>
      (ONE_BOTTLE * n + shippingCentsFor(ONE_BOTTLE * n)) / n

    expect(delivered(1)).toBe(3999)
    expect(delivered(2)).toBe(3499)
    expect(delivered(3)).toBe(2999)
    expect(delivered(2)).toBeLessThan(delivered(1))
    expect(delivered(3)).toBeLessThan(delivered(2))
  })

  it('produces the total a single-bottle order is charged', () => {
    // $29.99 + $10.00 = $39.99. This is the arithmetic the customer sees.
    //
    // The rate was $6.95 until 2026-09-01, when Phillip set the real one, so
    // the two sandbox orders of 2026-08-17 were charged $36.94 and the records
    // of them in PROJECT_STATE stay at that figure. This test tracks the
    // current rate, not that history.
    const subtotal = ONE_BOTTLE
    expect(subtotal + shippingCentsFor(subtotal)).toBe(3999)
  })
})

describe('remainingForFreeShipping', () => {
  it('reports the gap while one exists', () => {
    expect(remainingForFreeShipping(0)).toBe(FREE_SHIPPING_THRESHOLD_CENTS)
    expect(remainingForFreeShipping(ONE_BOTTLE)).toBe(
      FREE_SHIPPING_THRESHOLD_CENTS - ONE_BOTTLE,
    )
  })

  it('never nags once the order already qualifies', () => {
    // Clamped at zero, so an over-threshold cart cannot render
    // "add -$0.97 more for free shipping".
    expect(remainingForFreeShipping(FREE_SHIPPING_THRESHOLD_CENTS)).toBe(0)
    expect(remainingForFreeShipping(ONE_BOTTLE * 10)).toBe(0)
  })

  it('agrees with shippingCentsFor at every boundary', () => {
    // The two functions are read together in the cart -- one sets the nudge,
    // the other the price -- so they must never disagree about qualifying.
    for (const subtotal of [0, 1, 5_899, 5_900, 5_901, 29_990]) {
      const qualifies = remainingForFreeShipping(subtotal) === 0
      expect(shippingCentsFor(subtotal) === 0).toBe(qualifies)
    }
  })
})
