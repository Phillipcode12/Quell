import { describe, expect, it, vi } from 'vitest'
import { generateOrderNumber, generateUniqueOrderNumber } from './order-number'

/**
 * The order number is the only handle a guest has on their purchase -- it is
 * the second factor in order lookup and the reference on the packing slip --
 * so both its shape and its uniqueness retry are worth pinning down.
 */

describe('generateOrderNumber', () => {
  it('produces the documented shape', () => {
    expect(generateOrderNumber()).toMatch(/^Q-[A-Z0-9]{8}$/)
  })

  it('omits the characters people misread aloud', () => {
    // Customers read this number out on the phone, which is why I, L, O, U, 0
    // and 1 are not in the alphabet. Sampling rather than proving, but 400
    // draws over a 30-character alphabet makes a missed exclusion very
    // unlikely to survive.
    const drawn = new Set<string>()
    for (let i = 0; i < 400; i += 1) {
      for (const character of generateOrderNumber().slice(2)) drawn.add(character)
    }

    for (const forbidden of ['I', 'L', 'O', 'U', '0', '1']) {
      expect(drawn.has(forbidden)).toBe(false)
    }
    // And confirm the sample was actually wide, so the assertion above isn't
    // passing because generation is broken and returns one character.
    expect(drawn.size).toBe(30)
  })

  it('fits the gateway invoiceNumber limit', () => {
    // Authorize.net caps invoiceNumber at 20 characters. This whole module
    // exists because a 25-character cuid does not fit; a longer format here
    // would reintroduce the original bug.
    expect(generateOrderNumber().length).toBeLessThanOrEqual(20)
  })

  it('does not repeat itself over a realistic run of orders', () => {
    const numbers = new Set(
      Array.from({ length: 1_000 }, () => generateOrderNumber()),
    )
    expect(numbers.size).toBe(1_000)
  })
})

describe('generateUniqueOrderNumber', () => {
  it('returns the first candidate nothing has claimed', async () => {
    const exists = vi.fn().mockResolvedValue(false)
    const number = await generateUniqueOrderNumber(exists)

    expect(number).toMatch(/^Q-[A-Z0-9]{8}$/)
    expect(exists).toHaveBeenCalledTimes(1)
    expect(exists).toHaveBeenCalledWith(number)
  })

  it('retries past a collision instead of trusting the odds', async () => {
    // The column is unique, so a collision that got through would surface as
    // a failed checkout -- a lost sale from a one-in-656-billion event that
    // is cheap to retry.
    const exists = vi
      .fn()
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(true)
      .mockResolvedValue(false)

    const number = await generateUniqueOrderNumber(exists)

    expect(exists).toHaveBeenCalledTimes(3)
    // The number handed back is the one that was checked last and found free,
    // not one of the two that were taken.
    expect(exists).toHaveBeenLastCalledWith(number)
  })

  it('throws rather than issuing a number it knows is taken', async () => {
    // If every attempt collides, something is badly wrong (an exhausted
    // keyspace, or a broken `exists`). Returning a duplicate anyway would
    // trade a clear error for a unique-constraint violation deeper in
    // checkout, after the order row has been built.
    const exists = vi.fn().mockResolvedValue(true)

    await expect(generateUniqueOrderNumber(exists, 3)).rejects.toThrow(
      /could not allocate/i,
    )
    expect(exists).toHaveBeenCalledTimes(3)
  })
})
