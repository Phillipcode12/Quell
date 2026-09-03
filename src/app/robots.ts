import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { appUrl } from '@/lib/site'

/**
 * Three independent guards, all of which must pass before search engines are
 * let in. Any one alone blocks indexing.
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
 *   ALLOW_INDEXING    unset or anything but "true" -> Disallow. Fails closed,
 *                     so a missing variable can never quietly publish the site.
 *   configured host   NEXT_PUBLIC_APP_URL pointing at a staging origin is
 *                     never indexable, whatever the flag says.
 *   serving host      the Host header of the actual request — see below.
 */

/**
 * The serving-host check, added 2026-09-02 after finding it missing.
 *
 * The configured-host check alone did not do what its comment claimed. It
 * tests NEXT_PUBLIC_APP_URL, which in production is `quelldrop.com` — so the
 * check passed on **every** host the deployment answers to, and
 * `quell-six.vercel.app` was serving `Allow: /` for the identical store.
 * Verified against the live site before the fix, not theorised.
 *
 * That fallback host is deliberately not redirected (§0): it stays reachable
 * so the shop survives a DNS mistake. Reachable by a person and absent from
 * search results are different things, and only this check delivers the second.
 *
 * Reading a header makes this route render per request rather than being
 * cached, which is the documented trade for using a request-time API here. A
 * robots.txt is fetched by crawlers a handful of times a day, so the cost is
 * nil next to serving the wrong file on a host nobody is watching.
 */
function isStagingHostname(hostname: string): boolean {
  if (!hostname) return true // No Host header is not a request we can vouch for.
  return (
    hostname.endsWith('.vercel.app') ||
    hostname === 'localhost' ||
    hostname.endsWith('.local')
  )
}

function isStagingUrl(url: string): boolean {
  try {
    return isStagingHostname(new URL(url).hostname)
  } catch {
    // An unparseable URL means something is misconfigured; assume staging and
    // stay out of the index rather than guessing our way into it.
    return true
  }
}

function indexingEnabled(): boolean {
  return process.env.ALLOW_INDEXING === 'true'
}

/** The host being served, lowercased and without any port. */
async function servingHostname(): Promise<string> {
  try {
    const host = (await headers()).get('host') ?? ''
    return host.split(':')[0].trim().toLowerCase()
  } catch {
    // Outside a request — fail closed, consistent with everything else here.
    return ''
  }
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = appUrl()
  const servedFrom = await servingHostname()

  if (!indexingEnabled() || isStagingUrl(base) || isStagingHostname(servedFrom)) {
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
    // Always the canonical host, never the host being served: a sitemap on the
    // fallback domain must still point people at the real one.
    sitemap: `${base}/sitemap.xml`,
  }
}
