import { appUrl } from '@/lib/site'
import { guidePath, publishedGuides } from '@/lib/guides'

/**
 * The guide articles get their own sitemap, for the same reason the city pages
 * do (`sitemap-locations.xml/route.ts`): **Search Console reports indexing per
 * submitted sitemap**, so with these in a file of their own it is possible to
 * see how many get indexed, and what they bring, without the reading being
 * tangled up with the product pages or the city pages.
 *
 * `GUIDE_PAGES=off` empties it along with the routes. Submit it in Search
 * Console as a third sitemap; robots.txt lists it, but an explicit submission
 * is what turns on the per-sitemap report.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const base = appUrl()

  // No `lastmod`, matching the other two sitemaps: there is no per-URL
  // revision date anybody here can state honestly.
  const urls = publishedGuides()
    .map(
      (g) =>
        `  <url><loc>${base}${guidePath(g.slug)}</loc><priority>${g.featured ? '0.6' : '0.5'}</priority></url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
