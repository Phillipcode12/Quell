import Image from 'next/image'
import { BuyPanel } from '@/components/BuyPanel'
import { Droplet, Leaf, Medical, NoDrop } from '@/components/icons'
import { formatUsd } from '@/lib/money'
import { BRAND, DRUG_FACTS } from '@/lib/product-content'

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

export function BuySection({ product }: { product: BuyProduct | null }) {
  if (!product) {
    return (
      <section id="buy" className="scroll-mt-24 border-b border-line py-20">
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
    <section id="buy" className="scroll-mt-24 border-b border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white">
            <Image
              src={product.imageUrl ?? '/images/product-box-bottle-white.jpg'}
              alt={`${product.name} carton and ${product.sizeLabel} bottle`}
              width={2000}
              height={2000}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {product.tagline}
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {product.name}
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="mt-7 flex items-baseline gap-3">
              <span className="text-4xl font-semibold text-white">
                {formatUsd(product.priceCents)}
              </span>
              <span className="text-muted">{product.sizeLabel}</span>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm">
                  <Icon className="h-5 w-5 shrink-0 text-brand" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <BuyPanel productId={product.id} />

            <p className="mt-6 rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-muted">
              <strong className="font-semibold text-white">Uses:</strong>{' '}
              {DRUG_FACTS.uses}. {BRAND.trademark} is an over-the-counter drug —
              no prescription needed. Read the full{' '}
              <a href="#drug-facts" className="text-brand-light hover:underline">
                Drug Facts
              </a>{' '}
              before use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
