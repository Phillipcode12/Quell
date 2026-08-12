import Link from 'next/link'
import { ArrowRight } from '@/components/icons'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(700px 340px at 50% 0%, rgba(127,201,212,0.28), transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to move your prescription over?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
          Create an account, add your treatment, and we will take it from there.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-medium text-white transition hover:bg-brand-light hover:text-ink"
          >
            Create your account
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#catalog"
            className="rounded-lg border border-white/25 px-6 py-3.5 font-medium transition hover:bg-white/10"
          >
            Browse the formulary
          </Link>
        </div>
      </div>
    </section>
  )
}
