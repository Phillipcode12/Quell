import type { NextConfig } from 'next'

/**
 * The canonical host is `quelldrop.com`.
 *
 * Dr. Rynerson holds four Quell domains at GoDaddy. Only one can be the
 * address people see; the rest exist so nobody else can use them and so a
 * customer who half-remembers the name still lands in the right place.
 *
 * `quelldrop.com` is the primary because it is the only one that survives
 * being read aloud. "Quell" is a homophone for "quill", so the brand alone is
 * mis-spelled by anyone who hears it on the phone — and `quelleye.com` is
 * worse, because `quell` ending in L against `eye` starting in E makes the eye
 * read "quelle" + "ye" rather than "quell" + "eye". `quelldrop` has a clean
 * word boundary at the D. It also has by far the longest runway: it expires
 * 2027-04-11, where quelleye and quelleyes both expire 2026-10-09.
 *
 * `quelltears.com` redirects but must never be the address on show: "quell
 * tears" reads as *suppress* tears, the opposite of what a lubricating drop
 * does, which is a claim problem on an FDA-regulated product and not merely
 * awkward branding.
 *
 * This is done in code rather than in Vercel's per-domain redirect setting or
 * GoDaddy forwarding, so it is version-controlled, reviewable, and cannot be
 * silently changed in a dashboard. GoDaddy forwarding would also give a 302
 * without a reliable certificate on the source domain.
 */

const CANONICAL_HOST = 'quelldrop.com'

/** Every host that should bounce to the canonical one. */
const ALIAS_HOSTS = [
  'www.quelldrop.com',
  'quelleye.com',
  'www.quelleye.com',
  'quelleyes.com',
  'www.quelleyes.com',
  'quelltears.com',
  'www.quelltears.com',
]

/**
 * Response headers sent on every route.
 *
 * Vercel already sends HSTS. These are the rest of the cheap, non-breaking
 * ones — no Content-Security-Policy, which on a site using inline styles and
 * a payment redirect needs its own careful pass rather than a guess that
 * silently breaks checkout.
 */
const SECURITY_HEADERS = [
  {
    // Clickjacking. The real risk on this site is an attacker framing the
    // cart or an admin page inside their own and harvesting what is typed —
    // and nothing here is ever legitimately embedded in another site.
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    // Stops a browser second-guessing a declared Content-Type, which is how
    // an uploaded or user-influenced file gets treated as script.
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Full URLs stay inside the origin. Order-tracking links carry an order
    // number in the query string, and this keeps it out of the Referer header
    // sent to anywhere else.
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // Nothing here needs a camera, a microphone or a location.
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]

const nextConfig: NextConfig = {
  // Removes "X-Powered-By: Next.js". Version fingerprinting is not a
  // vulnerability by itself, but it tells someone scanning for known Next
  // issues exactly where to aim.
  poweredByHeader: false,

  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }]
  },

  async redirects() {
    return ALIAS_HOSTS.map((host) => ({
      source: '/:path*',
      // Matched on the Host header, so this only fires for real requests to
      // an alias domain. The vercel.app URL is deliberately not in the list —
      // it stays reachable as a fallback if DNS is ever misconfigured.
      has: [{ type: 'host' as const, value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      // 308, so search engines and browsers treat the canonical host as the
      // real one and the method is preserved.
      permanent: true,
    }))
  },
}

export default nextConfig
