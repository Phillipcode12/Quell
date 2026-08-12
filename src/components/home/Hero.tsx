import Link from 'next/link'
import { ArrowRight, ShieldCheck, Star, Truck } from '@/components/icons'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Decorative background wash — pure CSS so no image assets are needed. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(900px 420px at 78% 18%, rgba(127,201,212,0.30), transparent 60%), radial-gradient(700px 380px at 12% 92%, rgba(15,123,138,0.35), transparent 62%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-brand-light">
            <ShieldCheck className="h-4 w-4" />
            Pharmacist-reviewed ophthalmic care
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Prescription eye care,
            <br />
            <span className="text-brand-light">without the pharmacy run.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Transfer your prescription, get it verified by a licensed
            pharmacist, and have treatment delivered to your door — with
            automatic refills so you never miss a dose.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#catalog"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-medium text-white transition hover:bg-brand-light hover:text-ink"
            >
              Browse the formulary
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-lg border border-white/25 px-6 py-3.5 font-medium text-white transition hover:bg-white/10"
            >
              How it works
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { value: '50', label: 'States licensed' },
              { value: '24h', label: 'Rx review window' },
              { value: '4.8', label: 'Average rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Illustrative product card cluster */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="rounded-2xl bg-white p-6 text-foreground shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-brand-dark">
                    Rx only
                  </span>
                  <div className="flex text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                </div>

                <h2 className="mt-4 text-lg font-semibold">
                  Latanoprost Ophthalmic Solution
                </h2>
                <p className="mt-1 font-mono text-sm text-brand-dark">
                  Latanoprost 0.005%
                </p>

                <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                  <div>
                    <p className="text-2xl font-semibold">$34.00</p>
                    <p className="text-xs text-muted">2.5 mL bottle</p>
                  </div>
                  <span className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white">
                    Add to cart
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/10 p-4 text-sm text-white">
                <Truck className="h-5 w-5 shrink-0 text-brand-light" />
                Free two-day shipping on every refill
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
