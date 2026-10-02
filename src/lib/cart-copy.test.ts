import { describe, expect, it } from 'vitest'
import { addToCartLabel, addedToCartLabel } from './cart-copy'
import { DEFAULT_BOTTLES } from './shipping'

describe('addToCartLabel', () => {
  it('names the quantity, so the button says what pressing it does', () => {
    expect(addToCartLabel(2)).toBe('Add 2 bottles')
  })

  it('is singular for one', () => {
    expect(addToCartLabel(1)).toBe('Add 1 bottle')
  })

  it('stays plural above two', () => {
    expect(addToCartLabel(3)).toBe('Add 3 bottles')
    expect(addToCartLabel(10)).toBe('Add 10 bottles')
  })

  it('reads correctly at the default both buttons use', () => {
    // The whole point: the hero button has no quantity control, so its label
    // is only honest while it matches DEFAULT_BOTTLES.
    expect(addToCartLabel(DEFAULT_BOTTLES)).toBe('Add 2 bottles')
  })
})

describe('addedToCartLabel', () => {
  it('confirms the quantity that was added', () => {
    expect(addedToCartLabel(2)).toBe('Added 2 bottles ✓')
    expect(addedToCartLabel(1)).toBe('Added 1 bottle ✓')
  })
})
