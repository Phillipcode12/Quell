import { formatUsd } from '@/lib/money'
import { AddToCartButton } from '@/components/AddToCartButton'
import { Droplet } from '@/components/icons'

export type CatalogProduct = {
  id: string
  name: string
  description: string
  strength: string
  priceCents: number
  volumeMl: number
}

export function ProductGrid({ products }: { products: CatalogProduct[] }) {
  if (products.length === 0) {
    return (
      <p className="rounded-xl border border-line bg-surface p-6 text-muted">
        No products yet. Run <code className="font-mono">npm run db:seed</code> to
        load the sample formulary.
      </p>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition hover:border-brand-light hover:shadow-lg hover:shadow-brand/5"
        >
          <div className="mb-4 flex items-start justify-between">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-brand">
              <Droplet className="h-5 w-5" />
            </div>
            <span className="rounded-full border border-brand-light/60 bg-accent px-2.5 py-1 text-xs font-semibold text-brand-dark">
              Rx only
            </span>
          </div>

          <h3 className="text-lg font-semibold leading-snug">{product.name}</h3>
          <p className="mt-1 font-mono text-sm text-brand-dark">
            {product.strength}
          </p>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <div>
              <p className="text-xl font-semibold">
                {formatUsd(product.priceCents)}
              </p>
              <p className="text-xs text-muted">{product.volumeMl} mL bottle</p>
            </div>
            <AddToCartButton productId={product.id} />
          </div>
        </article>
      ))}
    </div>
  )
}
