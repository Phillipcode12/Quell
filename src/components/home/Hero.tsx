import Image from 'next/image'
import Link from 'next/link'
import { HeroBuy } from '@/components/home/HeroBuy'
import { ArrowRight, Clipboard, Truck } from '@/components/icons'
import { formatUsd } from '@/lib/money'
import { BRAND, FRONT_PANEL_CLAIMS, RELIEVES } from '@/lib/product-content'
import { HERO_INVITE } from '@/lib/self-check'
import { FREE_SHIPPING_THRESHOLD_CENTS } from '@/lib/shipping'

// Fades the photo's white studio background out to the page black instead of
// sitting on the page as a bright rectangle. The product stays fully opaque in
// the centre; only the empty margins dissolve.
const BLEND_MASK =
  'radial-gradient(ellipse 66% 62% at 50% 46%, #000 50%, rgba(0,0,0,0.65) 72%, transparent 88%)'

/**
 * The product the hero sells directly. Null only if the catalogue is empty,
 * which is a broken deployment rather than a state worth designing for — the
 * hero falls back to linking at the buy panel.
 */
type HeroProduct = {
  id: string
  priceCents: number
  stockQuantity: number
} | null

export function Hero({ product }: { product: HeroProduct }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 480px at 74% 42%, rgba(0,167,181,0.22), transparent 62%), radial-gradient(650px 400px at 6% 88%, rgba(0,167,181,0.14), transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
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
            your tear film’s oil layer to help reduce moisture loss —{' '}
            {/* nowrap: the hyphen is a break opportunity, so without this the
                word splits as "Preservative-" / "Free." across two lines. */}
            <span className="whitespace-nowrap font-medium text-white">
              Preservative-Free.
            </span>
          </p>

          {/* Was its own full-width band of four boxes; inline here instead. */}
          <p className="mt-6 text-sm text-muted">
            <span className="font-semibold text-white">Relieves</span>{' '}
            {RELIEVES.join(' · ')}
          </p>

          {product ? (
            <HeroBuy
              productId={product.id}
              priceCents={product.priceCents}
              soldOut={product.stockQuantity <= 0}
            />
          ) : (
            <div className="mt-8 flex flex-wrap gap-3">
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
          )}

          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-7 text-sm text-muted">
            {/* The sentence above now ends on "Preservative-Free", so showing it
                here too would be the third time in one viewport. The constant
                still mirrors the carton's front panel; only this row skips it. */}
            {FRONT_PANEL_CLAIMS.filter((c) => c !== 'Preservative-Free').map((claim) => (
              <li key={claim} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {claim}
              </li>
            ))}
            <li className="flex items-center gap-2 text-brand-light">
              <Truck className="h-4 w-4" />
              Free shipping over {formatUsd(FREE_SHIPPING_THRESHOLD_CENTS)}
            </li>
          </ul>

          {/**
           * The self-check, offered after the trust row rather than beside the
           * buy buttons.
           *
           * It is a genuinely different proposition — the rest of this column
           * asks someone to buy, and this asks them to find something out — so
           * it gets its own block instead of becoming a third button competing
           * with "Add to cart". Bordered and tinted rather than solid for the
           * same reason the cart link is: nothing here should outrank the
           * primary action.
           *
           * Copy lives in `lib/self-check.ts` with the rest of the wording Dr.
           * Rynerson approved, because this describes a symptom questionnaire
           * on a page selling a regulated drug.
           */}
          <Link
            href="/self-check"
            className="group mt-8 block rounded-xl border border-line bg-surface/60 p-5 transition hover:border-brand/50 hover:bg-brand/[0.07]"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              <Clipboard className="h-3.5 w-3.5" />
              {HERO_INVITE.eyebrow}
            </span>
            <span className="mt-2.5 block text-lg font-semibold tracking-tight text-white">
              {HERO_INVITE.heading}
            </span>
            <span className="mt-1.5 block text-sm leading-relaxed text-muted">
              {HERO_INVITE.body}
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light">
              {HERO_INVITE.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(closest-side, rgba(0,167,181,0.28), transparent 72%)',
            }}
          />
          <Image
            src="/images/product-box-bottle-white.jpg"
            alt={`${BRAND.trademark} carton and ${BRAND.size} bottle`}
            width={2000}
            height={2000}
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="relative h-auto w-full"
            style={{ maskImage: BLEND_MASK, WebkitMaskImage: BLEND_MASK }}
          />
        </div>
      </div>
    </section>
  )
}
