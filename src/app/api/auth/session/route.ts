import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { isAdminEmail } from '@/lib/admin'

/**
 * The signed-in viewer, for the header.
 *
 * ### Why this exists at all
 *
 * The root layout used to `await getCurrentUser()` so it could pass `user` and
 * `isAdmin` down to `Header`. Reading cookies in the root layout makes **every
 * route in the application dynamic**, and Next.js sends dynamic responses with
 * `private, no-cache, no-store` — so all 1,451 city pages were a cold server
 * render on every crawl and could not be cached at the edge at all. That is a
 * strange price to pay for an "Admin" link that one person sees.
 *
 * Moving the read here lets the whole marketing side prerender. The pages that
 * genuinely depend on who is asking — `/cart`, `/account`, `/orders`, every
 * `/admin` route — read the session themselves and stay dynamic, which is
 * correct and unchanged.
 *
 * ### What it returns, and what it deliberately does not
 *
 * Only ever the **caller's own** session, and only the two fields the header
 * renders. No id, no `createdAt`, no payment profile. An anonymous caller gets
 * `{ user: null, isAdmin: false }` rather than a 401, because not being signed
 * in is the normal case and not an error.
 *
 * `no-store` matters here: this is the one response on the site that varies by
 * viewer, and a cached copy served to the wrong person would put one
 * customer's email in another's header.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const user = await getCurrentUser()

  return NextResponse.json(
    {
      user: user ? { email: user.email, name: user.name } : null,
      isAdmin: isAdminEmail(user?.email),
    },
    { headers: { 'cache-control': 'private, no-store' } },
  )
}
