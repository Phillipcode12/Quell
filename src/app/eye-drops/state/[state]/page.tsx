import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BRAND } from '@/lib/product-content'
import {
  findState,
  locationPath,
  publishedStates,
  statePath,
} from '@/lib/locations'
import { appUrl } from '@/lib/site'

/**
 * The cities in one state.
 *
 * The middle level of index -> state -> city, added when the published set went
 * from 100 cities to 1,000. **One flat index of a thousand links was 463 KB and
 * split a single page's authority a thousand ways** — a hub that links to
 * everything recommends nothing, and crawlers treat it accordingly.
 *
 * Two levels fixes both: the index carries ~51 links, each state page carries
 * twenty or so, and a crawler arriving at the top has an obvious path down.
 */

export const dynamicParams = false

type Params = { params: Promise<{ state: string }> }

export function generateStaticParams() {
  return publishedStates().map((s) => ({ state: s.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state: slug } = await params
  const found = findState(slug)
  if (!found) return {}

  return {
    title: `Eye Drops in ${found.state}`,
    description: `Where ${BRAND.trademark} ${BRAND.productType.toLowerCase()} ship in ${found.state} — ${found.cities.length} cities.`,
    alternates: { canonical: `${appUrl()}${statePath(found.slug)}` },
  }
}

export default async function StatePage({ params }: Params) {
  const { state: slug } = await params
  const found = findState(slug)
  if (!found) notFound()

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <nav className="text-sm text-muted">
        <Link href="/" className="hover:text-white">
          {BRAND.name}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/eye-drops" className="hover:text-white">
          Eye drops by city
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">{found.state}</span>
      </nav>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Eye drops in {found.state}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {BRAND.trademark} {BRAND.productType.toLowerCase()} ship anywhere in{' '}
        {found.state}. Ordering is the same wherever you are — there is no
        separate stock or pricing by city.
      </p>

      <p className="mt-4 text-sm text-muted">
        <Link href="/#buy" className="text-brand-light hover:underline">
          See prices and buy
        </Link>
      </p>

      <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5 text-sm">
        {found.cities.map((city) => (
          <li key={city.slug}>
            <Link
              href={locationPath(city)}
              className="text-brand-light hover:underline"
            >
              {city.city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
