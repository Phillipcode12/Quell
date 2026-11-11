import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BRAND } from '@/lib/product-content'
import { formatUsd } from '@/lib/money'
import { FREE_SHIPPING_BOTTLES, STANDARD_SHIPPING_CENTS } from '@/lib/shipping'
import {
  categoryName,
  categoryPath,
  fillTokens,
  findGuide,
  guideDate,
  guidePath,
  publishedGuides,
  relatedGuides,
} from '@/lib/guides'
import { appUrl } from '@/lib/site'
import { JsonLd } from '@/components/JsonLd'
import { GuideBody, GuideFaqList } from '@/components/GuideBody'
import {
  articleSchema,
  breadcrumbSchema,
  guideFaqSchema,
} from '@/lib/structured-data'

/**
 * One guide article.
 *
 * **Read the note at the top of `lib/guides.ts` before changing anything
 * here.** It records why these exist, the objection to them, and the switch
 * that removes them.
 *
 * Static for the same reason the city pages are: no price on the page (the
 * buy panel is the single source), so rendering one never touches the
 * database. The shipping rule is safe to state because it comes from the same
 * constants the cart charges from.
 */

export const dynamicParams = false

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return publishedGuides().map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const guide = findGuide(slug)
  if (!guide) return {}

  const description = fillTokens(guide.description)
  const url = `${appUrl()}${guidePath(guide.slug)}`

  return {
    // The layout's title template appends "— Quell".
    title: guide.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${guide.title} — ${BRAND.trademark}`,
      description,
      url,
      type: 'article',
      // Setting openGraph here replaces the layout's whole object, including
      // the site image, so it is named again or shares go out with no preview.
      images: ['/opengraph-image'],
    },
  }
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params
  const guide = findGuide(slug)
  if (!guide) notFound()

  const related = relatedGuides(guide)
  const path = guidePath(guide.slug)

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <nav className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
        <Link href="/" className="hover:text-white">
          {BRAND.name}
        </Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-white">
          Guides
        </Link>
        <span>/</span>
        <Link
          href={categoryPath(guide.category)}
          className="hover:text-white"
        >
          {categoryName(guide.category)}
        </Link>
      </nav>

      {/* Mirrors the trail above. Since 2026-11-11 each category has its own
          page, so it is a step in the markup too. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: BRAND.name, path: '/' },
          { name: 'Guides', path: '/guides' },
          {
            name: categoryName(guide.category),
            path: categoryPath(guide.category),
          },
          { name: guide.title },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: guide.title,
          description: fillTokens(guide.description),
          path,
          datePublished: guideDate(guide),
        })}
      />
      {guide.faq && guide.faq.length > 0 && (
        <JsonLd data={guideFaqSchema(path, guide.faq)} />
      )}

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {guide.title}
      </h1>

      <GuideBody blocks={guide.body} />

      {guide.faq && guide.faq.length > 0 && <GuideFaqList items={guide.faq} />}

      <div className="mt-12 rounded-2xl border border-line bg-surface p-6">
        <p className="text-lg font-semibold text-white">
          {BRAND.name} {BRAND.productType}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {BRAND.size}. An over-the-counter drug, so no prescription is needed.
          Flat {formatUsd(STANDARD_SHIPPING_CENTS)} shipping anywhere in the
          United States, free on {FREE_SHIPPING_BOTTLES} bottles or more.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/#buy"
            className="inline-block rounded-lg bg-brand px-6 py-3.5 font-semibold text-black transition hover:bg-brand-light"
          >
            See prices and buy
          </Link>
          <Link
            href="/drug-facts"
            className="inline-block rounded-lg border border-line px-6 py-3.5 font-semibold text-white transition hover:border-brand"
          >
            Read the Drug Facts
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            More on {categoryName(guide.category).toLowerCase()}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  href={guidePath(other.slug)}
                  className="text-brand-light hover:underline"
                >
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm">
            <Link
              href={categoryPath(guide.category)}
              className="text-muted hover:text-white"
            >
              Everything in {categoryName(guide.category)}
            </Link>
            <span className="mx-2 text-muted">·</span>
            <Link href="/guides" className="text-muted hover:text-white">
              All guides
            </Link>
          </p>
        </section>
      )}

      <p className="mt-10 text-xs leading-relaxed text-muted">
        This guide is general information, not medical advice. {BRAND.name} is
        an over-the-counter lubricating eye drop for use in the eyes only. Read
        and follow the Drug Facts panel before use.
      </p>
    </div>
  )
}
