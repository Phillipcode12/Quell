import { NextResponse } from 'next/server'

/**
 * Catch-all for API paths that match no real route.
 *
 * Without this, a request to a mistyped endpoint is handled by Next's
 * `/_not-found` page, and on Vercel that comes back as **HTTP 200 with an HTML
 * body** for every method except GET. Measured against the deployed site on
 * 2026-08-20:
 *
 *     GET    /api/does-not-exist  ->  404 text/html
 *     POST   /api/does-not-exist  ->  200 text/html   <- wrong
 *     PUT    /api/does-not-exist  ->  200 text/html   <- wrong
 *     DELETE /api/does-not-exist  ->  200 text/html   <- wrong
 *
 * It is specifically a Vercel routing-layer behaviour, not a Next one: the
 * same build served by `next start` locally returns 404 for all four methods.
 * So it cannot be reproduced in development, and only checking the deployed
 * site reveals it.
 *
 * That matters because every caller in this codebase decides success by
 * looking at the status code (`if (!res.ok)`), and 200 means "worked". A
 * typo'd endpoint would look like a successful request that returned HTML
 * instead of JSON, and the failure would surface later as a confusing parse
 * error rather than an obvious 404.
 *
 * Handling it here means unmatched API paths never reach the fallback at all.
 * Concrete routes still win -- Next matches specific segments before a
 * catch-all -- so /api/checkout and /api/auth/login are unaffected. There is a
 * test that checks exactly that, because a catch-all quietly shadowing a real
 * endpoint would be a far worse bug than the one being fixed.
 *
 * Scoped to /api on purpose. A POST to an unmatched *page* path has the same
 * quirk, but pages are read with GET, which already returns 404 correctly, and
 * a catch-all page route would risk shadowing real pages.
 */

function apiNotFound() {
  return NextResponse.json({ error: 'Not found.' }, { status: 404 })
}

export const GET = apiNotFound
export const POST = apiNotFound
export const PUT = apiNotFound
export const PATCH = apiNotFound
export const DELETE = apiNotFound
export const OPTIONS = apiNotFound

// HEAD must not carry a body, so it cannot reuse the JSON responder above.
export function HEAD() {
  return new Response(null, { status: 404 })
}
