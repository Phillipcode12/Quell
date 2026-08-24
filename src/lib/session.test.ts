import { SignJWT } from 'jose'
import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * The session cookie is the only thing standing between a visitor and someone
 * else's account, and it is a signed JWT rather than a database-backed
 * session, so nothing server-side can revoke a forged one. The signature
 * check is the whole defence.
 */

// A stand-in for Next's cookie store. cookies() is async-only in Next 16.
const store = new Map<string, { value: string; options?: Record<string, unknown> }>()
const cookieJar = {
  get: (name: string) => store.get(name),
  set: (name: string, value: string, options?: Record<string, unknown>) => {
    store.set(name, { value, options })
  },
  delete: (name: string) => {
    store.delete(name)
  },
}
vi.mock('next/headers', () => ({ cookies: async () => cookieJar }))

const { COOKIE_NAME, createSession, destroySession, readSession } =
  await import('./session')

const SECRET = 'a-test-secret-that-is-long-enough-to-pass'
const SESSION = { userId: 'user_123', email: 'ada@example.com' }

beforeEach(() => {
  store.clear()
  vi.stubEnv('AUTH_SECRET', SECRET)
  vi.stubEnv('NODE_ENV', 'production')
})

describe('createSession then readSession', () => {
  it('round-trips the payload', async () => {
    await createSession(SESSION)

    await expect(readSession()).resolves.toEqual(
      expect.objectContaining(SESSION),
    )
  })

  it('sets the cookie flags that keep it out of JavaScript', async () => {
    await createSession(SESSION)

    const options = store.get(COOKIE_NAME)?.options
    // httpOnly is what stops an XSS from reading the session; sameSite lax
    // is what stops a cross-site POST from riding it. Neither has a visible
    // symptom when it regresses, which is why they are asserted.
    expect(options).toMatchObject({
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
  })

  it('marks the cookie secure in production and not in development', async () => {
    await createSession(SESSION)
    expect(store.get(COOKIE_NAME)?.options?.secure).toBe(true)

    // Local dev is plain http, so a secure cookie there would never be sent
    // back and sign-in would appear to silently fail.
    store.clear()
    vi.stubEnv('NODE_ENV', 'development')
    await createSession(SESSION)
    expect(store.get(COOKIE_NAME)?.options?.secure).toBe(false)
  })

  it('does not store the payload in readable form', async () => {
    await createSession(SESSION)

    // A JWT is signed, not encrypted, so the claims are readable by design --
    // but the token must at least be a token and not the raw object.
    const value = store.get(COOKIE_NAME)!.value
    expect(value.split('.')).toHaveLength(3)
  })
})

describe('readSession rejections', () => {
  it('returns null when there is no cookie', async () => {
    await expect(readSession()).resolves.toBeNull()
  })

  it('returns null for a tampered token', async () => {
    await createSession(SESSION)
    const [header, , signature] = store.get(COOKIE_NAME)!.value.split('.')

    // Re-encode the claims with a different user id, keeping the original
    // signature. This is the forgery the signature exists to stop.
    const forged = Buffer.from(
      JSON.stringify({ userId: 'someone_else', email: 'attacker@example.test' }),
    ).toString('base64url')
    store.set(COOKIE_NAME, { value: `${header}.${forged}.${signature}` })

    await expect(readSession()).resolves.toBeNull()
  })

  it('returns null for a token signed with a different secret', async () => {
    const token = await new SignJWT({ ...SESSION })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(new TextEncoder().encode('a-completely-different-secret-value'))
    store.set(COOKIE_NAME, { value: token })

    await expect(readSession()).resolves.toBeNull()
  })

  it('returns null once the token has expired', async () => {
    const token = await new SignJWT({ ...SESSION })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt(0)
      .setExpirationTime(1) // 1970
      .sign(new TextEncoder().encode(SECRET))
    store.set(COOKIE_NAME, { value: token })

    await expect(readSession()).resolves.toBeNull()
  })

  it('returns null for a correctly signed token missing its claims', async () => {
    // Signed with the right key but carrying the wrong shape. Without the
    // type check, `session.userId` would be undefined and get looked up as a
    // user id -- so this must not be treated as a valid session.
    const token = await new SignJWT({ userId: 123 })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(new TextEncoder().encode(SECRET))
    store.set(COOKIE_NAME, { value: token })

    await expect(readSession()).resolves.toBeNull()
  })

  it('returns null for a value that is not a JWT at all', async () => {
    store.set(COOKIE_NAME, { value: 'not-a-token' })
    await expect(readSession()).resolves.toBeNull()
  })

  it('refuses to accept an unsigned "alg: none" token', async () => {
    // The classic JWT attack: strip the signature and declare the algorithm
    // none. jose is pinned to HS256 on verify, which is what stops it.
    const header = Buffer.from(
      JSON.stringify({ alg: 'none', typ: 'JWT' }),
    ).toString('base64url')
    const payload = Buffer.from(
      JSON.stringify({ ...SESSION, exp: Math.floor(Date.now() / 1000) + 3600 }),
    ).toString('base64url')
    store.set(COOKIE_NAME, { value: `${header}.${payload}.` })

    await expect(readSession()).resolves.toBeNull()
  })
})

describe('secret handling', () => {
  it('throws rather than signing with a missing or weak secret', async () => {
    // Falling back to a default secret would mean every deployment shares a
    // forgeable key, so this fails loudly instead.
    vi.stubEnv('AUTH_SECRET', '')
    await expect(createSession(SESSION)).rejects.toThrow(/AUTH_SECRET/)

    vi.stubEnv('AUTH_SECRET', 'short')
    await expect(createSession(SESSION)).rejects.toThrow(/AUTH_SECRET/)
  })
})

describe('destroySession', () => {
  it('removes the cookie so the next read is signed out', async () => {
    await createSession(SESSION)
    await expect(readSession()).resolves.not.toBeNull()

    await destroySession()

    expect(store.has(COOKIE_NAME)).toBe(false)
    await expect(readSession()).resolves.toBeNull()
  })
})
