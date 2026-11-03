import Link from 'next/link'
import { guidePagesEnabled, guidePath, publishedGuides } from '@/lib/guides'

/**
 * The ten cornerstone guides, linked from the home page. Added 2026-11-03.
 *
 * **Why here.** Search Console showed the home page as the only page Google has
 * indexed (§56). Internal links are how that standing reaches anything else, and
 * until today the guides were linked only from the footer. These ten are the
 * longest and least templated pages on the site, so they are the ones worth
 * pointing the home page at — not the city pages.
 *
 * Plain links in a list, no teaser copy: the descriptions live on /guides, and
 * repeating ten of them here would make this the longest section on the page
 * for no reader benefit.
 *
 * Withdrawn with the rest when `GUIDE_PAGES=off`.
 */
export function Guides() {
  if (!guidePagesEnabled()) return null

  const featured = publishedGuides().filter((g) => g.featured)
  if (featured.length === 0) return null

  return (
    <section
      id="guides"
      className="scroll-mt-32 lg:scroll-mt-24 border-b border-line py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Guides
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Buying and using eye drops, explained
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Plain answers about ordering online, reading the label and storing
            a bottle. General information, not medical advice.
          </p>
          <Link
            href="/guides"
            className="mt-6 inline-block text-sm font-semibold text-brand-light hover:underline"
          >
            All guides
          </Link>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {featured.map((g) => (
            <li key={g.slug}>
              <Link
                href={guidePath(g.slug)}
                className="flex items-center justify-between gap-4 py-4 font-medium text-white transition hover:text-brand-light"
              >
                {g.title}
                <span aria-hidden className="shrink-0 text-muted">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
