import { prisma } from '@/lib/db'
import { formatUsd } from '@/lib/money'
import { AddToCartButton } from '@/components/AddToCartButton'

export default async function CatalogPage() {
  const products = await prisma.product.findMany({
    where: { active: true },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="rounded-2xl border border-line bg-surface p-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Prescription eye care, delivered
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Browse the formulary and start an order. Every item below is
          prescription-only: checkout collects payment, and the order is held for
          pharmacist review until a valid prescription is on file.
        </p>
      </section>

      {products.length === 0 ? (
        <p className="mt-10 rounded-lg border border-line bg-surface p-6 text-muted">
          No products yet. Run <code className="font-mono">npm run db:seed</code>{' '}
          to load the sample formulary.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-xl border border-line bg-surface p-5"
            >
              <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-brand-dark">
                Rx only
              </span>

              <h2 className="mt-3 text-lg font-semibold leading-snug">
                {product.name}
              </h2>
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
      )}
    </div>
  )
}
