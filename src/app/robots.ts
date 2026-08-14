import type { MetadataRoute } from 'next'
import { appUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  const base = appUrl()

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
