import { describe, expect, it } from 'vitest'
import { priceFor } from './pricing'
import { DEFAULT_BOTTLES, FREE_SHIPPING_BOTTLES } from './shipping'

// The seeded bottle price. Written here rather than imported so that a price
// change fails these tests and forces the ladder to be re-read, instead of the
// numbers quietly following along.
const BOTTLE = 2999

const usd = (cents: number) => (cents / 100).toFixed(2)

describe('priceFor', () => {
  it('is the whole ladder the buy panel promises', () => {
    expect(usd(priceFor(BOTTLE, 1).deliveredCents)).toBe('39.99')
    expect(usd(priceFor(BOTTLE, 2).deliveredCents)).toBe('69.98')
    expect(usd(priceFor(BOTTLE, 3).deliveredCents)).toBe('89.97')
  })

  it('shows the saving climbing with quantity', () => {
    // The reason the saving replaced the per-bottle price: this keeps rising
    // where "$29.99 a bottle" flattens at three.
    expect(usd(priceFor(BOTTLE, 2).savingCents)).toBe('10.00')
    expect(usd(priceFor(BOTTLE, 3).savingCents)).toBe('30.00')
    expect(usd(priceFor(BOTTLE, 4).savingCents)).toBe('40.00')
  })

  it('claims no saving on a single bottle', () => {
    // Never negative, and never a saving that does not exist.
    expect(priceFor(BOTTLE, 1).savingCents).toBe(0)
  })

  it('measures against one bottle delivered, not the sticker price', () => {
    const { singleDeliveredCents } = priceFor(BOTTLE, 2)
    expect(usd(singleDeliveredCents)).toBe('39.99')
    // The trap: per-bottle delivered at two is HIGHER than the shelf price, so
    // anything compared against $29.99 would read as a markup.
    expect(priceFor(BOTTLE, 2).deliveredCents / 2).toBeGreaterThan(BOTTLE)
  })

  it('stops charging shipping at the advertised bottle count', () => {
    expect(priceFor(BOTTLE, FREE_SHIPPING_BOTTLES).shippingCents).toBe(0)
    expect(
      priceFor(BOTTLE, FREE_SHIPPING_BOTTLES - 1).shippingCents,
    ).toBeGreaterThan(0)
  })

  it('gives the hero a saving worth printing at the default quantity', () => {
    // The hero has no quantity control, so this is the only figure it can show.
    expect(priceFor(BOTTLE, DEFAULT_BOTTLES).savingCents).toBeGreaterThan(0)
  })
})
