import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BRAND, DRUG_FACTS, FRONT_PANEL_CLAIMS } from '@/lib/product-content'
import { formatUsd } from '@/lib/money'
import { FREE_SHIPPING_BOTTLES, STANDARD_SHIPPING_CENTS } from '@/lib/shipping'
import {
  findLocation,
  locationLabel,
  locationPath,
  locationShortLabel,
  publishedLocations,
  sameStateLocations,
} from '@/lib/locations'
import { appUrl } from '@/lib/site'

/**
 * One page per US city: "what eye drops can I get in Nashville, Tennessee?"
 *
 * **Read the note at the top of `lib/locations.ts` before changing anything
 * here.** It records why these exist, what the objection to them was, and the
 * switch that removes them.
 *
 * ### The rule this template is written to
 *
 * **Every sentence on this page is already approved and already on the site.**
 * The product description is `FRONT_PANEL_CLAIMS`, the uses are
 * `DRUG_FACTS.uses` verbatim, the price and shipping come from the same
 * functions the cart charges from. The only thing that varies per page is the
 * name of a real place and the state it is in.
 *
 * That is a deliberately thin page, and it is thin on purpose: **the moment
 * someone fills it out with "the best eye drops in Tulsa" or an invented local
 * stockist, it stops being a shipping-destination page and becomes a claim
 * nobody at Aurora has approved.** Thin and true beats full and invented, on a
 * site selling an FDA-regulated drug.
 *
 * If these ever need to be genuinely better rather than merely more numerous,
 * the honest version is a stockist directory — real practices that actually
 * carry it. That needs a fact nobody has yet: whether any do.
 */

export const dynamicParams = false

type Params = { params: Promise<{ location: string }> }

export function generateStaticParams() {
  return publishedLocations().map((l) => ({ location: l.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { location: slug } = await params
  const location = findLocation(slug)
  if (!location) return {}

  const short = locationShortLabel(location)
  const full = locationLabel(location)

  return {
    /**
     * No brand name here: the root layout's title template already appends
     * `— Quell`. Including it produced "Eye Drops in Nashville, TN — Quell™
     * Preservative-Free — Quell", 62 characters with the brand said twice,
     * which Google truncates.
     *
     * Leading with the searched phrase rather than the brand is deliberate for
     * the same reason it is on the home page: nobody is searching "Quell" yet.
     */
    title: `Eye Drops in ${short}`,
    description: `${BRAND.trademark} ${BRAND.productType.toLowerCase()}, delivered to ${full}. ${BRAND.size}. An over-the-counter drug — no prescription needed.`,
    alternates: { canonical: `${appUrl()}${locationPath(location)}` },
    openGraph: {
      title: `Eye Drops in ${short} — ${BRAND.trademark}`,
      description: `${BRAND.trademark} ${BRAND.productType.toLowerCase()}, delivered to ${full}.`,
      url: `${appUrl()}${locationPath(location)}`,
      type: 'website',
    },
  }
}

export default async function LocationPage({ params }: Params) {
  const { location: slug } = await params
  const location = findLocation(slug)
  if (!location) notFound()

  const nearby = sameStateLocations(location)
  const full = locationLabel(location)

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <nav className="text-sm text-muted">
        <Link href="/" className="hover:text-white">
          {BRAND.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">Eye drops in {full}</span>
      </nav>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Eye drops in {full}
      </h1>

      {/* Answers the question in the title in the first line, because that is
          the whole job of the page. No preamble. */}
      {/* No article before the product type: `BRAND.productType` is plural
          ("…Eye Drops"), so "a preservative-free lubricating eye drops" is what
          the first draft shipped. The sentence is built around the plural
          instead of bending the constant to fit. */}
      <p className="mt-5 text-lg leading-relaxed text-muted">
        <strong className="font-semibold text-white">
          {BRAND.trademark}
        </strong>{' '}
        {BRAND.productType.toLowerCase()} ship to {full} and anywhere else in
        the United States. {BRAND.size}. They are an over-the-counter drug, so
        no prescription is needed.
      </p>

      <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
        {FRONT_PANEL_CLAIMS.map((claim) => (
          <li key={claim} className="flex items-start gap-2.5 text-sm text-muted">
            <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            {claim}
          </li>
        ))}
      </ul>

      {/**
       * No price on this page, and that is the second reason as well as the
       * first.
       *
       * **It keeps the page static.** Reading the price meant a Prisma query
       * per render, and `next build` prerendered none of these — every crawl of
       * 1,923 pages would have been 1,923 database queries, which is a bill and
       * a crawl-budget problem at the same time.
       *
       * **And a price repeated across 1,923 pages is 1,923 places for a stale
       * one to live.** The buy panel is the single source; this sends people
       * there. The shipping rule below is safe to state because it comes from
       * the same constants the cart charges from.
       */}
      <div className="mt-9 rounded-2xl border border-line bg-surface p-6">
        <p className="text-lg font-semibold text-white">
          {BRAND.name} {BRAND.productType}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          Flat {formatUsd(STANDARD_SHIPPING_CENTS)} shipping to{' '}
          {location.city}, free on {FREE_SHIPPING_BOTTLES} bottles or more.
        </p>

        <Link
          href="/#buy"
          className="mt-5 inline-block rounded-lg bg-brand px-6 py-3.5 font-semibold text-black transition hover:bg-brand-light"
        >
          See prices and buy
        </Link>
      </div>

      {/* The Uses panel, verbatim. The one place on this page where the wording
          is legally load-bearing, so it is quoted from the constant rather than
          retyped — exactly as the Drug Facts page does. */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">What it is for</h2>
        <p className="mt-3 leading-relaxed text-muted">{DRUG_FACTS.uses}</p>
        <p className="mt-3 text-sm text-muted">
          Read the full{' '}
          <Link href="/drug-facts" className="text-brand-light hover:underline">
            Drug Facts
          </Link>{' '}
          panel before use.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">
          Getting it to {location.city}
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Orders ship within the United States, including {full}
          {location.county ? ` and the rest of ${location.county}` : ''}. There
          is no pharmacy counter and no prescription — it is ordered here and
          posted to you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Not sure yet?</h2>
        <p className="mt-3 leading-relaxed text-muted">
          The{' '}
          <Link href="/self-check" className="text-brand-light hover:underline">
            dry eye self-check
          </Link>{' '}
          is eight questions about symptoms. It is not a diagnosis and it is no
          substitute for an eye exam.
        </p>
      </section>

      {nearby.length > 0 && (
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Elsewhere in {location.state}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {nearby.map((other) => (
              <li key={other.slug}>
                <Link
                  href={locationPath(other)}
                  className="text-brand-light hover:underline"
                >
                  {other.city}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
