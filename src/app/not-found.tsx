import Link from 'next/link'
import { QuellMark } from '@/components/Logo'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <QuellMark className="mx-auto h-12 w-20" />

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        We couldn’t find that page
      </h1>
      <p className="mt-4 leading-relaxed text-muted">
        The link may be out of date, or the page may have moved.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
        >
          Back to home
        </Link>
        <Link
          href="/#buy"
          className="rounded-lg border border-line px-5 py-3 font-medium text-white transition hover:border-brand hover:bg-white/5"
        >
          Buy Quell
        </Link>
        <Link
          href="/drug-facts"
          className="rounded-lg border border-line px-5 py-3 font-medium text-white transition hover:border-brand hover:bg-white/5"
        >
          Drug Facts
        </Link>
      </div>
    </div>
  )
}
