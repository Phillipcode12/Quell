import { describe, expect, it } from 'vitest'
import { formatUsd } from './money'

/**
 * Every price the customer sees goes through here -- cart, receipt email,
 * admin list -- so the cents-to-dollars division is worth pinning down.
 */

describe('formatUsd', () => {
  it('renders whole and fractional amounts as US currency', () => {
    expect(formatUsd(2999)).toBe('$29.99')
    expect(formatUsd(3694)).toBe('$36.94')
    expect(formatUsd(695)).toBe('$6.95')
    expect(formatUsd(5900)).toBe('$59.00')
  })

  it('always shows both decimal places', () => {
    // "$59" on a receipt for a $59.00 order looks like a rounding error.
    expect(formatUsd(100)).toBe('$1.00')
    expect(formatUsd(5)).toBe('$0.05')
    expect(formatUsd(0)).toBe('$0.00')
  })

  it('groups thousands', () => {
    // Reachable: ten bottles is the cart cap, and the admin lifetime-spend
    // column adds orders up without a ceiling.
    expect(formatUsd(299_900)).toBe('$2,999.00')
  })

  it('renders a refund as negative rather than dropping the sign', () => {
    expect(formatUsd(-2999)).toBe('-$29.99')
  })
})
