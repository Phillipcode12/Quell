import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BRAND } from '@/lib/product-content'
import {
  GUIDE_CATEGORIES,
  fillTokens,
  guidePagesEnabled,
  guidePath,
  publishedGuides,
} from '@/lib/guides'
import { appUrl } from '@/lib/site'

/**
 * The index for the guide articles.
 *
 * Built in the same commit as the guides, because the city pages shipped
 * without an index once and sat orphaned for a day (see `/eye-drops`). Pages
 * reachable only from a sitemap crawl badly and look like a shadow set.
 *
 * Every guide is linked from here, about 110 links. That is fine for a page
 * whose job is to be a table of contents, and it is split into the categories
 * so a reader can find their question without scanning the lot.
 */

export const metadata: Metadata = {
  title: 'Eye Drop Guides — Buying, Using and Storing',
  description: `Plain answers about ordering eye drops online, shipping and returns, reading the Drug Facts label, and using ${BRAND.trademark} as directed.`,
  alternates: { canonical: `${appUrl()}/guides` },
}

export default function GuidesIndexPage() {
  // Withdrawn means gone, not an empty page.
  if (!guidePagesEnabled()) notFound()

  const guides = publishedGuides()
  const featured = guides.filter((g) => g.featured)

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Guides
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Plain answers about buying eye drops online, getting them delivered,
        reading the label and using {BRAND.name} as directed. Nothing here is
        medical advice; for questions about your eyes, ask your doctor or
        pharmacist.
      </p>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Start here
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {featured.map((g) => (
            <li key={g.slug}>
              <Link
                href={guidePath(g.slug)}
                className="block h-full rounded-2xl border border-line bg-surface p-5 transition hover:border-brand"
              >
                <span className="font-semibold text-white">{g.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">
                  {fillTokens(g.description)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {GUIDE_CATEGORIES.map((category) => {
        const inCategory = guides.filter(
          (g) => g.category === category.key && !g.featured,
        )
        if (inCategory.length === 0) return null
        return (
          <section key={category.key} className="mt-12">
            <h2 className="text-lg font-semibold text-white">{category.name}</h2>
            <p className="mt-1 text-sm text-muted">{category.intro}</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {inCategory.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={guidePath(g.slug)}
                    className="text-brand-light hover:underline"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}

      <p className="mt-14 text-sm">
        <Link href="/#buy" className="text-brand-light hover:underline">
          See prices and buy
        </Link>
      </p>
    </div>
  )
}
