import { appUrl } from '@/lib/site'
import {
  locationPath,
  publishedLocations,
  publishedStates,
  statePath,
} from '@/lib/locations'

/**
 * The city pages get their own sitemap, separate from `/sitemap.xml`.
 *
 * **This is the measurement, and it is the main reason the split exists.**
 * Search Console reports coverage per submitted sitemap, so with these in a
 * file of their own it is possible to see how many got indexed, and what they
 * brought, **without it being tangled up with the seven real pages.** Dropped
 * into the main sitemap, the only available reading would be "the site's
 * numbers moved" with no way to say which half moved them.
 *
 * It also makes withdrawal clean: `LOCATION_PAGES=off` empties this file and
 * removes the routes in one go, and a sitemap that goes empty is a clearer
 * signal to a crawler than URLs quietly starting to 404.
 *
 * Submit it in Search Console as a second sitemap — it is listed in robots.txt
 * but an explicit submission is what turns on the per-sitemap report.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const base = appUrl()
  const locations = publishedLocations()

  /**
   * State pages above the cities they lead to. They are the level a crawler
   * should reach first, and the level with something of its own to say.
   */
  const stateUrls = publishedStates()
    .map(
      (s) =>
        `  <url><loc>${base}${statePath(s.slug)}</loc><priority>0.5</priority></url>`,
    )
    .join('\n')

  const cityUrls = locations
    .map(
      (location) =>
        `  <url><loc>${base}${locationPath(location)}</loc><priority>0.4</priority></url>`,
    )
    .join('\n')

  const urls = [stateUrls, cityUrls].filter(Boolean).join('\n')

  /**
   * No `lastmod`, matching `sitemap.ts`. These pages change when the template
   * changes, which is not a per-URL date anybody here can state honestly, and
   * a lastmod Google cannot trust gets the field ignored sitemap-wide.
   *
   * `priority` well below the real pages. It is largely ignored, and on the
   * off chance it is not, these should not outrank the product page.
   */
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
