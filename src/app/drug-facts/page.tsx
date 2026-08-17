import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { DrugFactsPanel } from '@/components/DrugFactsPanel'
import { BRAND, COMPANY, MANUFACTURER } from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'Drug Facts',
  description: `The complete over-the-counter Drug Facts panel for ${BRAND.trademark} ${BRAND.productType}, as printed on the carton.`,
}

export default function DrugFactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Drug Facts"
        title="Everything on the label"
        subtitle="The complete over-the-counter Drug Facts panel, exactly as printed on the carton. Read it before use."
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <DrugFactsPanel />

        <div className="mt-10 rounded-2xl border border-line bg-surface p-6 text-sm leading-relaxed text-muted">
          <p>
            <strong className="font-semibold text-white">
              Questions about this product?
            </strong>{' '}
            Call{' '}
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="text-brand-light hover:underline"
            >
              {COMPANY.phone}
            </a>{' '}
            ({COMPANY.hours}) or visit{' '}
            <a
              href={COMPANY.websiteHref}
              rel="noreferrer noopener"
              className="text-brand-light hover:underline"
            >
              {COMPANY.website}
            </a>
            .
          </p>
          <p className="mt-3">
            Distributed by {COMPANY.name}. Manufactured by {MANUFACTURER.name},{' '}
            {MANUFACTURER.addressLines.join(', ')}.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/#buy"
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
          >
            Buy Quell
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-line px-5 py-3 font-medium text-white transition hover:border-brand hover:bg-white/5"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  )
}
