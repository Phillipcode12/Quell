import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Droplet, Leaf, Medical } from '@/components/icons'
import { BRAND, FRONT_PANEL_CLAIMS } from '@/lib/product-content'

const claimIcons = [Droplet, Medical, Leaf]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 480px at 72% 22%, rgba(0,167,181,0.28), transparent 62%), radial-gradient(650px 400px at 8% 88%, rgba(0,167,181,0.16), transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-light">
            {BRAND.productType}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Give your dry eye
            <br />
            <span className="text-brand">the bird.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {BRAND.trademark} is a patented, MD-developed formula that reinforces
            your tear film’s oil layer to help reduce moisture loss — with no
            preservatives to irritate eyes you treat every day.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#buy"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-black transition hover:bg-brand-light"
            >
              Buy Quell — {BRAND.size}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#science"
              className="rounded-lg border border-line px-6 py-3.5 font-medium text-white transition hover:border-brand hover:bg-white/5"
            >
              Why it works
            </Link>
          </div>

          <ul className="mt-10 grid max-w-lg gap-4 border-t border-line pt-8 sm:grid-cols-3">
            {FRONT_PANEL_CLAIMS.map((claim, i) => {
              const Icon = claimIcons[i] ?? Droplet
              return (
                <li key={claim} className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm font-medium">{claim}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Fixed height + object-cover so the source file's tall portrait
            proportions don't dictate how much of the page the hero eats. */}
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <Image
            src="/images/lifestyle-gamer-setup.png"
            alt="Quell carton and bottle on a desk beside a gaming PC and monitor"
            width={1086}
            height={1448}
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-[340px] w-full object-cover object-center sm:h-[420px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}
