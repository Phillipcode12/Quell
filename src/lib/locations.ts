import { GENERATED_LOCATIONS, type GeneratedLocation } from '@/lib/locations.generated'

/**
 * City pages: one per US city, answering "what eye drops can I get here".
 *
 * Phillip's decision on 2026-10-04, taken against my advice and with the
 * disagreement on the record so whoever reads this next knows it was a choice
 * rather than an oversight.
 *
 * ### What the objection was
 *
 * Google's spam policies name two things these resemble. **Doorway pages** —
 * its own documentation gives "multiple pages targeting specific regions or
 * cities that funnel users to one page" as the example. And **scaled content
 * abuse**, added in March 2024, which covers generating many pages primarily to
 * rank "no matter how it's created", so templating is not an exemption.
 *
 * The sharp end is that **enforcement is usually site-wide**, so the thing at
 * risk is quelldrop.com's ability to appear in search at all — not just these
 * URLs.
 *
 * Phillip's reasoning, which is not unreasonable: the shop had 2 impressions
 * and 0 clicks in three days, and nothing else is bringing traffic.
 *
 * ### What was built to make it survivable
 *
 * 1. **`LOCATION_PAGES=off` removes every one of them** — from the routes, the
 *    sitemap and the links. One environment variable and a redeploy. If Search
 *    Console shows a manual action or impressions fall off a cliff, that is the
 *    whole recovery.
 * 2. **They are ramped, not dumped.** `PUBLISHED_LOCATION_COUNT` controls how
 *    many of the 1,923 actually exist. Publishing the lot on day one makes the
 *    result unreadable: there would be no before to compare against.
 * 3. **Their own sitemap**, so indexation and impressions can be read
 *    separately from the seven real pages in Search Console.
 *
 * ### What is deliberately NOT on them
 *
 * No claim that is not already approved and on the site. No invented local
 * fact, no stockist that does not exist, no population padding, no "best eye
 * drops in Tulsa". The page states what Quell is in the words the Drug Facts
 * panel and the home page already use, and says it ships there. **That is the
 * whole regulatory posture and it should not be loosened to make the pages
 * look fuller.**
 */

export type Location = GeneratedLocation

/**
 * The kill switch.
 *
 * Defaults **on**, because the pages are the point and shipping them off would
 * be a quiet veto of a decision that is not mine. Set `LOCATION_PAGES` to
 * `off`, `0` or `false` to withdraw them.
 *
 * Vercel binds environment variables at build time, so **changing this needs a
 * redeploy** — the same rule as every other flag here.
 */
export function locationPagesEnabled(): boolean {
  const flag = process.env.LOCATION_PAGES?.trim().toLowerCase()
  return !(flag === 'off' || flag === '0' || flag === 'false')
}

/**
 * How many of the dataset to publish.
 *
 * **Start small and measure.** The dataset holds 1,923 places and the
 * temptation is to ship all of them on day one; the reason not to is that a
 * site with 7 indexed pages adding 1,923 at once is the exact pattern the
 * spam systems look for, and it leaves nothing to compare against when the
 * numbers move.
 *
 * Raise it deliberately, with a look at Search Console in between.
 */
export const PUBLISHED_LOCATION_COUNT = 100

/** The places that actually get a page, largest first. */
export function publishedLocations(): Location[] {
  if (!locationPagesEnabled()) return []
  return GENERATED_LOCATIONS.slice(0, PUBLISHED_LOCATION_COUNT)
}

/** Every place in the dataset, published or not. For tooling, not for pages. */
export function allLocations(): Location[] {
  return GENERATED_LOCATIONS
}

export function findLocation(slug: string): Location | null {
  if (!locationPagesEnabled()) return null
  return publishedLocations().find((l) => l.slug === slug) ?? null
}

/**
 * Other published cities in the same state, for the links at the foot of a
 * page.
 *
 * Same state rather than nearest by distance: the dataset carries no
 * coordinates, and inventing a notion of "nearby" from nothing would be the
 * same dishonesty as inventing a stockist. A reader in Akron being offered
 * Cleveland and Columbus is at least true.
 */
export function sameStateLocations(location: Location, take = 6): Location[] {
  return publishedLocations()
    .filter((l) => l.stateCode === location.stateCode && l.slug !== location.slug)
    .slice(0, take)
}

/** `/eye-drops/nashville-tn` */
export function locationPath(location: Location): string {
  return `/eye-drops/${location.slug}`
}

/** "Nashville, Tennessee" */
export function locationLabel(location: Location): string {
  return `${location.city}, ${location.state}`
}

/** "Nashville, TN" — for titles, where length is scarce. */
export function locationShortLabel(location: Location): string {
  return `${location.city}, ${location.stateCode}`
}
