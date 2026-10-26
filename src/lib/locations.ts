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
 *
 * **Raised 100 -> 1,000 on 2026-10-04, hours after the first hundred went
 * live and before Google had crawled any of them.** Phillip's call, with the
 * trade stated: there is now no baseline to compare against, so the ramp has
 * stopped being a safety net and `LOCATION_PAGES=off` is the only one left.
 *
 * **Then 1,100 the same day, and 1,400 on 2026-10-05** -- the day after the
 * sitemap was submitted and before Google had reported on any of it. Same
 * trade, accepted again. The dataset holds 1,923 places at the 20,000
 * population floor, so this publishes places that were already generated and
 * already name-checked rather than lowering the bar to find more.
 *
 * **1,500 on 2026-10-13**, Phillip's call again. By then the measurement had
 * arrived and it was not encouraging: nine days after the sitemap went in,
 * **Google had indexed one page of 1,451 and sent zero visitors**, and Bing
 * held only the home page. That was stated before building this, and the
 * decision stands — the trade has not changed, only the size of what
 * `LOCATION_PAGES=off` would withdraw if 2026-11-01 goes the other way.
 *
 * Checked before raising, per the rule below: no new states, no slug
 * collisions, and California's state page goes from 250 outbound links to
 * **258** — still far from the flat-index problem, and still the number to
 * watch, because a state page has no further level to split into.
 *
 * **1,600 on 2026-10-13**, in the same message that asked for extra paragraphs
 * on each page. Indexing had not moved — still one page of 1,551 — and that was
 * said again before building. No new states, no slug collisions, and the name
 * scanner came back clean once it was fixed to use word boundaries after the
 * "Burbank" false positive. California's state page: 258 -> 275 links.
 *
 * **1,700 on 2026-10-26**, Phillip's call again, asked for in the same breath
 * as "do we still have a login". The measurement behind it is thinner than
 * last time rather than better: in the eight days since the database moved,
 * the site's own tracking recorded **one visit from search** — DuckDuckGo —
 * and four direct visits across the three days after the crawler stopped
 * being counted. Search Console was deliberately not re-read for this, so
 * "one page of 1,551" above remains the last indexing figure anyone actually
 * measured; treat it as stale, not current.
 *
 * Checks before raising, same list as before: no new states (all 51 were
 * already represented), no slug collisions, no malformed slugs, and the name
 * scanner clean across all 100. 34 counties are new to the set. California's
 * state page goes 275 -> 282 links, and the largest jump is Illinois at
 * 88 -> 102 — still the number to watch for the same reason.
 *
 * **This is the last raise of this size the dataset supports.** 1,923 places
 * exist at the 20,000-population floor, so 223 remain. Going further means
 * lowering that floor, which is a different decision from this one: it stops
 * publishing places that were already generated and name-checked and starts
 * reaching for smaller towns to fill a quota. */
export const PUBLISHED_LOCATION_COUNT = 1_700

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

/**
 * Published cities grouped by state, states alphabetical, cities largest first
 * within each.
 *
 * For the index at `/eye-drops`. Grouping rather than one flat list of a
 * hundred links because a flat list is unreadable and, more to the point,
 * tells a crawler nothing about how the set is organised.
 */
export function locationsByState(): { state: string; cities: Location[] }[] {
  const byState = new Map<string, Location[]>()

  for (const location of publishedLocations()) {
    const existing = byState.get(location.state)
    if (existing) existing.push(location)
    else byState.set(location.state, [location])
  }

  return [...byState.entries()]
    .map(([state, cities]) => ({ state, cities }))
    .sort((a, b) => a.state.localeCompare(b.state))
}

/** "New York" -> "new-york". The segment used by the state index pages. */
export function stateSlug(state: string): string {
  return state
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Every state that has at least one published city, alphabetical.
 *
 * The index at `/eye-drops` lists these rather than all thousand cities. At a
 * hundred cities one flat page was fine; at a thousand it was 463 KB and, worse,
 * **a thousand internal links sharing one page's authority between them.** A
 * hub that links to everything ends up recommending nothing.
 */
export function publishedStates(): {
  state: string
  slug: string
  cities: Location[]
}[] {
  return locationsByState().map((group) => ({
    state: group.state,
    slug: stateSlug(group.state),
    cities: group.cities,
  }))
}

export function findState(slug: string): {
  state: string
  slug: string
  cities: Location[]
} | null {
  return publishedStates().find((s) => s.slug === slug) ?? null
}

/** `/eye-drops/state/texas` */
export function statePath(slug: string): string {
  return `/eye-drops/state/${slug}`
}
