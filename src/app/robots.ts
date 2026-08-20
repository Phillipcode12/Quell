import type { MetadataRoute } from 'next'
import { appUrl } from '@/lib/site'

/**
 * Staging deployments must not be indexed.
 *
 * This is a storefront for an over-the-counter drug whose legal pages are
 * still unreviewed boilerplate and whose front-panel claims are unsettled, so
 * a `*.vercel.app` build getting into search results is a real problem rather
 * than an SEO inconvenience.
 *
 * The check is on the host rather than a flag, so nobody has to remember to
 * flip anything: point NEXT_PUBLIC_APP_URL at the real domain and indexing
 * turns itself on.
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

export default function robots(): MetadataRoute.Robots {
  const base = appUrl()

  if (isStagingHost(base)) {
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
