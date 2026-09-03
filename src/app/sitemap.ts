import type { MetadataRoute } from 'next'
import { appUrl } from '@/lib/site'

/**
 * The sitemap.
 *
 * **No `lastModified`, deliberately.** It used to be `new Date()` on every
 * entry, which told Google that every page on the site had changed the moment
 * it asked — every single time it asked. A lastmod that is always "now" is not
 * information, it is noise, and Google's documented response to a lastmod it
 * cannot trust is to ignore the field across the whole sitemap. Saying nothing
 * leaves it to crawl data, which is accurate.
 *
 * It would be worth adding back the day these pages have real revision dates
 * to report — a CMS, or content in the database with an `updatedAt`. Until
 * then, silence beats a number that is always true and never useful.
 *
 * `priority` is kept, though Google has said for years it largely ignores it.
 * It costs nothing and it documents intent for the other crawlers.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = appUrl()

  // Only public, indexable pages. Cart, account and checkout are excluded, and
  // so is /orders — it is a lookup form, not content.
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/drug-facts`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.6 },
    // Linked only from the nav, so without this it would be reachable but
    // undeclared — the sitemap is the one place a crawler is told it exists.
    { url: `${base}/reviews`, priority: 0.6 },
    { url: `${base}/privacy`, priority: 0.3 },
    { url: `${base}/terms`, priority: 0.3 },
  ]
}
