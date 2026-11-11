import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BRAND } from '@/lib/product-content'
import {
  GUIDE_CATEGORIES,
  categoryPath,
  fillTokens,
  findCategory,
  guidePagesEnabled,
  guidePath,
  guidesInCategory,
} from '@/lib/guides'
import { appUrl } from '@/lib/site'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'

/**
 * Every guide in one category, newest first.
 *
 * Added 2026-11-11 with the daily job, which adds a hundred guides a day. The
 * main index used to link every guide; at that rate it would pass a thousand
 * links within the fortnight, so it now shows each category's newest and
 * links here for the rest. Every guide stays two clicks from /guides.
 */

export const dynamicParams = false

type Params = { params: Promise<{ category: string }> }

export function generateStaticParams() {
  if (!guidePagesEnabled()) return []
  return GUIDE_CATEGORIES.filter((c) => guidesInCategory(c.key).length > 0).map(
    (c) => ({ category: c.key }),
  )
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params
  const found = findCategory(category)
  if (!found) return {}
  return {
    title: `${found.name} — Eye Drop Guides`,
    description: `${found.intro} Plain answers from ${BRAND.trademark}, the preservative-free lubricating eye drop.`,
    alternates: { canonical: `${appUrl()}${categoryPath(found.key)}` },
  }
}

export default async function GuideTopicPage({ params }: Params) {
  const { category } = await params
  const found = findCategory(category)
  if (!found || !guidePagesEnabled()) notFound()
  const guides = guidesInCategory(found.key)
  if (guides.length === 0) notFound()

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <nav className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
        <Link href="/" className="hover:text-white">
          {BRAND.name}
        </Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-white">
          Guides
        </Link>
        <span>/</span>
        <span className="text-white">{found.name}</span>
      </nav>
      <JsonLd
        data={breadcrumbSchema([
          { name: BRAND.name, path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: found.name },
        ])}
      />

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {found.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        {found.intro} {guides.length} guides, newest first.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
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

      <p className="mt-14 text-sm">
        <Link href="/guides" className="text-brand-light hover:underline">
          All guide topics
        </Link>
        <span className="mx-2 text-muted">·</span>
        <Link href="/#buy" className="text-brand-light hover:underline">
          See prices and buy
        </Link>
      </p>
    </div>
  )
}
