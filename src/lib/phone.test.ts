import { describe, expect, it } from 'vitest'
import { isUsablePhone, phoneDigits } from './phone'

/**
 * This check now stands between a customer and a completed order, so the
 * expensive direction is rejecting a real number. Most of what follows is
 * formats real people type, asserted to pass.
 */

describe('isUsablePhone', () => {
  it.each([
    ['6155550142', 'bare ten digits'],
    ['615-555-0142', 'hyphens'],
    ['(615) 555-0142', 'parentheses and a space'],
    ['615.555.0142', 'dots'],
    ['615 555 0142', 'spaces'],
    ['+1 615 555 0142', 'country code'],
    ['+1 (615) 555-0142', 'country code and punctuation'],
    ['1-615-555-0142', 'leading one'],
    ['6155550142 x204', 'an extension'],
    ['615-555-0142 ext. 204', 'a spelled-out extension'],
    ['  615 555 0142  ', 'surrounding whitespace'],
    ['+44 20 7946 0958', 'an international number'],
  ])('accepts %s (%s)', (input) => {
    expect(isUsablePhone(input)).toBe(true)
  })

  it.each([
    ['', 'empty'],
    ['   ', 'whitespace only'],
    ['n/a', 'a refusal'],
    ['none', 'another refusal'],
    ['-', 'punctuation only'],
    ['555-0142', 'a local number with no area code'],
    ['615555014', 'nine digits, one short'],
  ])('rejects %s (%s)', (input) => {
    expect(isUsablePhone(input)).toBe(false)
  })

  it('rejects more digits than any real number has', () => {
    // E.164 tops out at 15. Anything longer is a mistake or a mash.
    expect(isUsablePhone('1'.repeat(16))).toBe(false)
    expect(isUsablePhone('1'.repeat(15))).toBe(true)
  })

  it('handles null and undefined without throwing', () => {
    expect(isUsablePhone(null)).toBe(false)
    expect(isUsablePhone(undefined)).toBe(false)
  })
})

describe('phoneDigits', () => {
  it('keeps only digits', () => {
    expect(phoneDigits('+1 (615) 555-0142 ext. 204')).toBe('16155550142204')
  })

  it('is empty for a non-string', () => {
    expect(phoneDigits(null)).toBe('')
  })
})
