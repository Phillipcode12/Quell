import { afterEach, describe, expect, it, vi } from 'vitest'
import { registrationOpen } from './registration'

/**
 * This switch is the only thing standing between the bot that created 120
 * accounts in eleven days and the reset endpoint it used them to reach, so the
 * failure that matters is it quietly reading as "open" when nobody meant it to.
 */

afterEach(() => vi.unstubAllEnvs())

describe('registrationOpen', () => {
  it('is closed when the variable is missing', () => {
    // The state a fresh environment is in, and the state Vercel is in today.
    vi.stubEnv('ALLOW_REGISTRATION', undefined as unknown as string)
    expect(registrationOpen()).toBe(false)
  })

  it('is closed for every value that is not an explicit yes', () => {
    // '0' and 'false' are obvious. The empty string is the one that matters:
    // it is what an env var set-but-blank in a dashboard looks like, and
    // truthiness checks get it wrong.
    for (const value of ['', ' ', '0', 'false', 'no', 'off', 'null', 'undefined']) {
      vi.stubEnv('ALLOW_REGISTRATION', value)
      expect(registrationOpen(), `"${value}" must not open registration`).toBe(false)
    }
  })

  it('opens only on 1 or true, whatever the casing or padding', () => {
    for (const value of ['1', 'true', 'TRUE', ' True ']) {
      vi.stubEnv('ALLOW_REGISTRATION', value)
      expect(registrationOpen(), `"${value}" should open registration`).toBe(true)
    }
  })
})
