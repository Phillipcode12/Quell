/**
 * The session token itself — signing, verifying, and the constants that
 * describe it.
 *
 * Deliberately separate from `session.ts`, and deliberately **not**
 * `server-only`: `proxy.ts` renews sessions on the Edge runtime, where
 * `next/headers` and Node built-ins are unavailable. Keeping the token layer
 * here means the cookie name, the secret and the lifetimes have exactly one
 * definition that both runtimes read, rather than a copy on each side that can
 * drift apart without anything failing loudly.
 *
 * `jose` is used rather than `jsonwebtoken` because it runs in both.
 */
import { SignJWT, jwtVerify } from 'jose'

export const COOKIE_NAME = 'quell_session'

/**
 * How long a session lasts without being renewed.
 *
 * Was 7 days and fixed: a customer who signed in and came back on day eight
 * was signed out even if they had used the site every day in between, because
 * nothing ever extended the token. For a shop people visit occasionally that
 * is the difference between "it remembers me" and "it asks for my password
 * every time" — and a password someone is asked for rarely is a password they
 * reset instead of recalling.
 *
 * 60 days, renewed on use, so the clock only runs for someone who has actually
 * stopped visiting. The cookie stays `httpOnly`, so this is not a token
 * JavaScript can be tricked into reading; the exposure it adds is a shared
 * device left signed in, which is the trade every shop makes.
 */
export const MAX_AGE_SECONDS = 60 * 60 * 24 * 60 // 60 days

/**
 * Renew once the session is more than a day old.
 *
 * Re-signing on *every* request would put a `Set-Cookie` on every page view for
 * no benefit; waiting until the token is nearly expired would miss anyone whose
 * visits are further apart than the remaining gap. A day is where the write is
 * rare and the renewal is still reliable.
 */
export const RENEW_AFTER_SECONDS = 60 * 60 * 24 // 1 day

export type SessionPayload = { userId: string; email: string }

function secretKey() {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 16) {
    throw new Error(
      'AUTH_SECRET is missing or too short. Set it in .env (32+ random characters).',
    )
  }
  return new TextEncoder().encode(secret)
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .sign(secretKey())
}

/** The verified payload, plus when it was issued, or null if it is not valid. */
export async function verifySession(
  token: string,
): Promise<(SessionPayload & { issuedAt: number }) | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey(), {
      algorithms: ['HS256'],
    })
    if (
      typeof payload.userId !== 'string' ||
      typeof payload.email !== 'string' ||
      typeof payload.iat !== 'number'
    ) {
      return null
    }
    return {
      userId: payload.userId,
      email: payload.email,
      issuedAt: payload.iat,
    }
  } catch {
    // Expired or tampered — treat as signed out.
    return null
  }
}

/** The cookie attributes, in one place so both runtimes set them identically. */
export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  }
}
