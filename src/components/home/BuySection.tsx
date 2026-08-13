import { BuyPanel } from '@/components/BuyPanel'
import { QuellMark } from '@/components/Logo'
import { Droplet, Leaf, Medical, NoDrop, Truck } from '@/components/icons'
import { formatUsd } from '@/lib/money'
import { BRAND, DRUG_FACTS, RELIEVES } from '@/lib/product-content'
import { FREE_SHIPPING_THRESHOLD_CENTS, SHIPPING_LABEL } from '@/lib/shipping'

type BuyProduct = {
  id: string
  name: string
  tagline: string
  description: string
  sizeLabel: string
  priceCents: number
  imageUrl: string | null
}

const highlights = [
  { icon: NoDrop, label: 'No preservatives' },
  { icon: Medical, label: 'Patented MD-developed formula' },
  { icon: Leaf, label: 'Natural ingredients' },
  { icon: Droplet, label: '1 drop, 3× per day' },
]

/**
 * Deliberately has no product photo: the hero already shows the carton and
 * bottle, and repeating the same shot halfway down the page read as padding.
 */
export function BuySection({ product }: { product: BuyProduct | null }) {
  if (!product) {
    return (
      <section id="buy" className="scroll-mt-24 border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="rounded-xl border border-line bg-surface p-6 text-muted">
            Product not loaded. Run{' '}
            <code className="font-mono text-brand-light">npm run db:seed</code>{' '}
            to add Quell to the database.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="buy" className="scroll-mt-24 border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                {product.tagline}
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {product.name}
              </h2>
              <p className="mt-2 text-muted">
                Relieves {RELIEVES.join(', ').toLowerCase()}
              </p>
            </div>
            <QuellMark className="hidden h-10 w-16 shrink-0 sm:block" />
          </div>

          <div className="mt-7 flex items-baseline gap-3 border-t border-line pt-7">
            <span className="text-4xl font-semibold text-white">
              {formatUsd(product.priceCents)}
            </span>
            <span className="text-muted">{product.sizeLabel}</span>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm">
                <Icon className="h-5 w-5 shrink-0 text-brand" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-2.5 text-sm text-brand-light">
            <Truck className="h-5 w-5 shrink-0" />
            Free {SHIPPING_LABEL} shipping on orders over{' '}
            {formatUsd(FREE_SHIPPING_THRESHOLD_CENTS)}
          </p>

          <BuyPanel productId={product.id} />

          <p className="mt-6 text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-white">Uses:</strong>{' '}
            {DRUG_FACTS.uses}. {BRAND.trademark} is an over-the-counter drug — no
            prescription needed. Read the full{' '}
            <a href="#drug-facts" className="text-brand-light hover:underline">
              Drug Facts
            </a>{' '}
            before use.
          </p>
        </div>
      </div>
    </section>
  )
}
