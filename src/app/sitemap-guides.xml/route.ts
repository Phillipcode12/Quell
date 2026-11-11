import { appUrl } from '@/lib/site'
import {
  GUIDE_CATEGORIES,
  categoryPath,
  guidePath,
  guidesInCategory,
  publishedGuides,
} from '@/lib/guides'

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
 *
 * Since 2026-11-11 it also lists the topic pages (/guides/topic/<key>).
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const base = appUrl()

  // `lastmod` only where it is true: guides from the daily job (2026-11-12
  // on) carry the day they went live. Older ones have no date anybody here
  // can state, so they carry none, matching the other two sitemaps.
  const guides = publishedGuides()
  const topics =
    guides.length === 0
      ? []
      : GUIDE_CATEGORIES.filter((c) => guidesInCategory(c.key).length > 0).map(
          (c) =>
            `  <url><loc>${base}${categoryPath(c.key)}</loc><priority>0.5</priority></url>`,
        )
  const urls = [
    ...topics,
    ...guides.map((g) => {
      const lastmod = g.addedOn ? `<lastmod>${g.addedOn}</lastmod>` : ''
      return `  <url><loc>${base}${guidePath(g.slug)}</loc>${lastmod}<priority>${g.featured ? '0.6' : '0.5'}</priority></url>`
    }),
  ].join('\n')

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
