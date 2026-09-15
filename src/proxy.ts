import { NextResponse, type NextRequest } from 'next/server'
import {
  COOKIE_NAME,
  RENEW_AFTER_SECONDS,
  sessionCookieOptions,
  signSession,
  verifySession,
} from '@/lib/session-token'

/**
 * Keeps a signed-in customer signed in.
 *
 * The session token carries a fixed expiry, so without this a customer is
 * signed out 60 days after they last *signed in* rather than 60 days after
 * they last visited. Re-signing the token on use turns that into a rolling
 * window: someone who shops every few weeks is never asked for their password
 * again, and someone who stops visiting is still signed out on schedule.
 *
 * This is the half of "remember me on this device" the browser cannot do. The
 * login form already carries `autocomplete="current-password"`, so password
 * managers offer to save and refill it; this is what means they rarely have to.
 *
 * **Next.js 16 renamed `middleware.ts` to `proxy.ts`** and the export to
 * `proxy` — see `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`.
 * This file must sit beside `app/`, which here means `src/proxy.ts`.
 *
 * It runs on the Edge runtime, which is why it imports the token layer
 * directly rather than `session.ts` — that module is `server-only` and reaches
 * for `next/headers`. Nothing here touches the database: the token is verified
 * cryptographically and re-signed, so this adds no query to any request.
 */
export async function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value
  if (!token) return NextResponse.next()

  const payload = await verifySession(token)
  // Invalid or expired. Left alone rather than cleared: the request may still
  // be for a public page, and the server components already treat an
  // unverifiable token as signed out.
  if (!payload) return NextResponse.next()

  const ageSeconds = Math.floor(Date.now() / 1000) - payload.issuedAt
  if (ageSeconds < RENEW_AFTER_SECONDS) return NextResponse.next()

  const response = NextResponse.next()
  response.cookies.set(
    COOKIE_NAME,
    await signSession({ userId: payload.userId, email: payload.email }),
    sessionCookieOptions(),
  )
  return response
}

export const config = {
  /**
   * Page requests only. Static assets, images and the favicon can't carry a
   * useful session renewal and would just add work to every asset on the page.
   */
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|txt|xml)$).*)'],
}
