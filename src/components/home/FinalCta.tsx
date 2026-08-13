import Link from 'next/link'
import { ArrowRight } from '@/components/icons'
import { QuellMark } from '@/components/Logo'
import { BRAND } from '@/lib/product-content'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(700px 340px at 50% 0%, rgba(0,167,181,0.25), transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <QuellMark className="mx-auto h-12 w-20" />

        <h2 className="mt-8 text-3xl font-semibold tracking-tight sm:text-5xl">
          {BRAND.slogan}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Preservative-free relief for dryness, irritation, redness, and itching
          — in a {BRAND.size} bottle.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="#buy"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-black transition hover:bg-brand-light"
          >
            Buy Quell
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/drug-facts"
            className="rounded-lg border border-line px-7 py-3.5 font-medium text-white transition hover:border-brand hover:bg-white/5"
          >
            Read the Drug Facts
          </Link>
        </div>
      </div>
    </section>
  )
}
