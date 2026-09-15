import 'server-only'
import { cookies } from 'next/headers'
import {
  COOKIE_NAME,
  sessionCookieOptions,
  signSession,
  verifySession,
  type SessionPayload,
} from '@/lib/session-token'

/**
 * Reading and writing the session cookie from server components, route
 * handlers and server actions.
 *
 * The token layer lives in `session-token.ts` because `proxy.ts` renews
 * sessions on the Edge runtime and cannot import anything `server-only`.
 */

export type { SessionPayload }

export async function readSession(): Promise<SessionPayload | null> {
  // Next.js 16: cookies() is async-only.
  const token = (await cookies()).get(COOKIE_NAME)?.value
  if (!token) return null

  const payload = await verifySession(token)
  if (!payload) return null

  return { userId: payload.userId, email: payload.email }
}

export async function createSession(payload: SessionPayload) {
  const token = await signSession(payload)
  ;(await cookies()).set(COOKIE_NAME, token, sessionCookieOptions())
}

export async function destroySession() {
  ;(await cookies()).delete(COOKIE_NAME)
}

export { COOKIE_NAME }
