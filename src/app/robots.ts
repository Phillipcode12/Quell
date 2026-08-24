import type { MetadataRoute } from 'next'
import { appUrl } from '@/lib/site'

/**
 * Two independent guards, both of which must pass before search engines are
 * let in. Either one alone blocks indexing.
 *
 * This used to be a single check on the hostname, which coupled two unrelated
 * questions: *what is our address* and *are we ready to be found*. That
 * coupling caused a real defect. When quelldrop.com went live, pointing
 * NEXT_PUBLIC_APP_URL at it was the only way to make canonical tags, OpenGraph
 * URLs, the sitemap and the gateway return URL correct — but doing so would
 * also have switched indexing on for a shop that cannot yet take a payment,
 * send a receipt or ship a box. Leaving it pointed at the vercel.app host
 * instead meant the live site served `<link rel="canonical">` pointing at a
 * host that is itself Disallow, and every shared link previewed as vercel.app.
 *
 * Separating them fixes both: the URL can be correct now, and indexing stays
 * off until someone deliberately turns it on.
 *
 *   ALLOW_INDEXING   unset or anything but "true" -> Disallow. Fails closed,
 *                    so a missing variable can never quietly publish the site.
 *   isStagingHost    belt and braces. A *.vercel.app or localhost origin is
 *                    never indexable regardless of the flag, so setting it in
 *                    a preview environment cannot leak a staging build into
 *                    search results.
 *
 * To go live: set ALLOW_INDEXING=true in the Vercel dashboard and redeploy.
 * Do it when the store can actually sell — not before.
 */
function isStagingHost(url: string) {
  try {
    const { hostname } = new URL(url)
    return (
      hostname.endsWith('.vercel.app') ||
      hostname === 'localhost' ||
      hostname.endsWith('.local')
    )
  } catch {
    // An unparseable URL means something is misconfigured; assume staging and
    // stay out of the index rather than guessing our way into it.
    return true
  }
}

function indexingEnabled() {
  return process.env.ALLOW_INDEXING === 'true'
}

export default function robots(): MetadataRoute.Robots {
  const base = appUrl()

  if (!indexingEnabled() || isStagingHost(base)) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Nothing here is secret, but these pages are per-user or transactional
      // and have no business in search results.
      disallow: ['/api/', '/account', '/cart', '/checkout/', '/admin'],
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
