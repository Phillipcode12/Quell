import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { isStripeConfigured } from '@/lib/stripe'
import { CartView } from '@/components/CartView'

export default async function CartPage() {
  // The cart lives in the browser, so ship the catalog and let the client
  // resolve its lines against it.
  const [products, user] = await Promise.all([
    prisma.product.findMany({ where: { active: true } }),
    getCurrentUser(),
  ])

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Your cart</h1>
      <CartView
        products={products.map((p) => ({
          id: p.id,
          name: p.name,
          strength: p.strength,
          priceCents: p.priceCents,
          volumeMl: p.volumeMl,
        }))}
        isSignedIn={Boolean(user)}
        stripeReady={isStripeConfigured()}
      />
    </div>
  )
}
