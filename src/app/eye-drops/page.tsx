import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BRAND } from '@/lib/product-content'
import {
  locationPagesEnabled,
  publishedLocations,
  publishedStates,
  statePath,
} from '@/lib/locations'
import { appUrl } from '@/lib/site'

/**
 * The index for the city pages.
 *
 * **Added 2026-10-04, a day after the city pages themselves, because they
 * shipped without one.** They were reachable from the sitemap and from each
 * other and from nowhere else — Phillip asked where he could browse them and
 * the honest answer was that he could not.
 *
 * That was a real omission rather than a missing nicety:
 *
 * - **Orphan pages crawl badly.** Internal links are how a crawler finds pages
 *   and how importance moves between them. A hundred pages linked only from a
 *   sitemap get visited rarely and rank for nothing.
 * - **It is the difference between a section of the site and a shadow set.**
 *   Part of what makes doorway pages identifiable is that they have no place in
 *   the site's structure. Pages a visitor can browse to from the footer are at
 *   least structurally honest about what they are.
 *
 * It also makes the thing reviewable: a hundred generated pages nobody can see
 * all of is a hundred chances for a bad one to sit there unnoticed.
 */

export const metadata: Metadata = {
  /**
   * The title and the heading differ on purpose.
   *
   * The title is what appears in a search result, so it carries the phrase
   * people type. The heading is what someone sees after clicking a footer
   * link that said "Where we ship" -- and a page whose heading does not
   * match the link that reached it reads as the wrong page.
   */
  title: 'Where We Ship — Eye Drops by City',
  description: `Where ${BRAND.trademark} ${BRAND.productType.toLowerCase()} ship in the United States, by city and state.`,
  alternates: { canonical: `${appUrl()}/eye-drops` },
}

export default function EyeDropsIndexPage() {
  // Without this the page would render an empty index when the pages are
  // withdrawn, which is a worse answer than not existing.
  if (!locationPagesEnabled()) notFound()

  const groups = publishedStates()
  const total = publishedLocations().length

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Where we ship
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {BRAND.trademark} {BRAND.productType.toLowerCase()} ship anywhere in the
        United States. These {total} pages answer the question for the places
        people ask about most — there is no separate stock or pricing by city,
        and nothing here is a shop you can walk into.
      </p>

      <p className="mt-4 text-sm text-muted">
        Ordering is the same wherever you are:{' '}
        <Link href="/#buy" className="text-brand-light hover:underline">
          see prices and buy
        </Link>
        .
      </p>

      {/**
       * States, not cities.
       *
       * This listed every city until the published set went from 100 to 1,000,
       * at which point the page was **463 KB and carried a thousand internal
       * links**. The weight was survivable; the link count was not — a page
       * that links to everything splits its authority a thousand ways and
       * recommends nothing. Now it is ~51 links down to state pages, each of
       * which carries twenty or so.
       */}
      <ul className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <li key={group.slug}>
            <Link
              href={statePath(group.slug)}
              className="text-brand-light hover:underline"
            >
              {group.state}
            </Link>{' '}
            <span className="text-sm text-muted">
              ({group.cities.length})
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
