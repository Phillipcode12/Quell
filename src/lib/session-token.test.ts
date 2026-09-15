import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  MAX_AGE_SECONDS,
  RENEW_AFTER_SECONDS,
  signSession,
  verifySession,
} from './session-token'

const SECRET = 'a-test-secret-that-is-long-enough-to-pass'
const SESSION = { userId: 'user_123', email: 'ada@example.com' }

beforeEach(() => {
  vi.stubEnv('AUTH_SECRET', SECRET)
})

describe('the token both runtimes share', () => {
  it('round-trips the identity and reports when it was issued', async () => {
    // `issuedAt` is what proxy.ts decides renewal on. Without it the session
    // would either never renew or renew on every single request.
    const before = Math.floor(Date.now() / 1000)
    const payload = await verifySession(await signSession(SESSION))

    expect(payload).toMatchObject(SESSION)
    expect(payload!.issuedAt).toBeGreaterThanOrEqual(before)
  })

  it('rejects a token signed with a different secret', async () => {
    const token = await signSession(SESSION)
    vi.stubEnv('AUTH_SECRET', 'a-completely-different-secret-value-here')
    expect(await verifySession(token)).toBeNull()
  })

  it('rejects junk rather than throwing', async () => {
    // proxy.ts runs on every page request; a throw here would be a 500 on the
    // whole site, not a signed-out user.
    for (const junk of ['', 'not-a-jwt', 'a.b.c']) {
      expect(await verifySession(junk)).toBeNull()
    }
  })

  it('refuses to sign without a usable secret', async () => {
    vi.stubEnv('AUTH_SECRET', 'too-short')
    await expect(signSession(SESSION)).rejects.toThrow(/AUTH_SECRET/)
  })
})

describe('the renewal window', () => {
  it('renews well before the session expires', () => {
    // The bug this guards: if the renewal threshold ever exceeded the lifetime,
    // a token would expire before it was ever eligible to be renewed and the
    // sliding window would silently stop sliding.
    expect(RENEW_AFTER_SECONDS).toBeLessThan(MAX_AGE_SECONDS)
  })

  it('keeps a 60-day window renewed a day at a time', () => {
    expect(MAX_AGE_SECONDS).toBe(60 * 60 * 24 * 60)
    expect(RENEW_AFTER_SECONDS).toBe(60 * 60 * 24)
  })
})
