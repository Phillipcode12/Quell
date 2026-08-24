import { describe, expect, it, vi } from 'vitest'

// auth.ts pulls in the database client and the cookie store at import time.
// Only the password functions are under test here.
vi.mock('@/lib/db', () => ({ prisma: { user: { findUnique: vi.fn() } } }))
vi.mock('@/lib/session', () => ({ readSession: vi.fn() }))

const { hashPassword, verifyPassword, verifyPasswordOrDecoy } = await import(
  './auth'
)

/**
 * These are slow by design -- bcrypt at cost 10 is about 100ms a call, which
 * is the entire point of using it. A few seconds in the suite buys a password
 * store that cannot be attacked at speed.
 */

describe('hashPassword and verifyPassword', () => {
  it('accepts the right password and rejects the wrong one', async () => {
    const hash = await hashPassword('correct horse battery staple')

    await expect(verifyPassword('correct horse battery staple', hash)).resolves.toBe(
      true,
    )
    await expect(verifyPassword('Correct horse battery staple', hash)).resolves.toBe(
      false,
    )
    await expect(verifyPassword('', hash)).resolves.toBe(false)
  })

  it('salts, so the same password never produces the same hash', async () => {
    const [a, b] = await Promise.all([
      hashPassword('same-password'),
      hashPassword('same-password'),
    ])

    expect(a).not.toBe(b)
    // Both still verify -- the salt travels inside the hash.
    await expect(verifyPassword('same-password', a)).resolves.toBe(true)
    await expect(verifyPassword('same-password', b)).resolves.toBe(true)
  })

  it('produces a bcrypt hash at the expected cost', async () => {
    // Dropping the cost factor is a silent weakening: everything still works,
    // and hashes just get cheaper to crack.
    expect(await hashPassword('x')).toMatch(/^\$2[aby]\$10\$/)
  })
})

describe('verifyPasswordOrDecoy', () => {
  it('always returns false when there is no hash', async () => {
    await expect(verifyPasswordOrDecoy('anything', null)).resolves.toBe(false)
    await expect(verifyPasswordOrDecoy('anything', undefined)).resolves.toBe(
      false,
    )
  })

  it('behaves like verifyPassword when a hash exists', async () => {
    const hash = await hashPassword('hunter2')

    await expect(verifyPasswordOrDecoy('hunter2', hash)).resolves.toBe(true)
    await expect(verifyPasswordOrDecoy('hunter3', hash)).resolves.toBe(false)
  })

  it('spends comparable time whether or not the account exists', async () => {
    // This is the fix for the login timing side channel found in the review
    // pass on 2026-08-19. Skipping bcrypt for an unknown email returned in
    // milliseconds while a real account took hundreds -- same response body,
    // very different clock, which is enough to enumerate which emails have
    // accounts.
    //
    // The bound is deliberately loose. The claim being tested is "the absent
    // branch does real bcrypt work", not "the two are indistinguishable to a
    // statistician"; a tight ratio would flake on a shared CI runner.
    const hash = await hashPassword('hunter2')

    const startPresent = performance.now()
    await verifyPasswordOrDecoy('wrong-password', hash)
    const present = performance.now() - startPresent

    const startAbsent = performance.now()
    await verifyPasswordOrDecoy('wrong-password', null)
    const absent = performance.now() - startAbsent

    // Before the fix this ratio was roughly 1:100. Anything in the same order
    // of magnitude means the decoy hash is genuinely being compared.
    expect(absent).toBeGreaterThan(present / 4)
  })
})
