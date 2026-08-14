import type { MetadataRoute } from 'next'
import { appUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = appUrl()
  const now = new Date()

  // Only public, indexable pages. Cart, account, and checkout are excluded.
  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/drug-facts`, lastModified: now, priority: 0.8 },
    { url: `${base}/about`, lastModified: now, priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, priority: 0.3 },
  ]
}
