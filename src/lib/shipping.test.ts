import { describe, expect, it } from 'vitest'
import {
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

  it('gives a two-bottle order free shipping', () => {
    // Load-bearing for the ad strategy: two bottles is $59.98, which clears
    // $59 and roughly doubles contribution per order. If the threshold ever
    // rises above $59.98 that plan silently stops working.
    expect(shippingCentsFor(ONE_BOTTLE * 2)).toBe(0)
  })

  it('produces the totals two real sandbox orders were charged', () => {
    // $29.99 + $6.95 = $36.94 -- the amount that actually went through the
    // gateway on 2026-08-17. This is the arithmetic the customer sees.
    const subtotal = ONE_BOTTLE
    expect(subtotal + shippingCentsFor(subtotal)).toBe(3694)
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
