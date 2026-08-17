import type { Metadata } from 'next'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { isGatewayConfigured } from '@/lib/authorizenet'
import { CartView } from '@/components/CartView'

export const metadata: Metadata = { title: 'Your cart' }

export default async function CartPage() {
  // The cart lives in the browser, so ship the catalog and let the client
  // resolve its lines against it.
  const [products, user] = await Promise.all([
    prisma.product.findMany({ where: { active: true } }),
    getCurrentUser(),
  ])

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
      <CartView
        products={products.map((p) => ({
          id: p.id,
          name: p.name,
          tagline: p.tagline,
          sizeLabel: p.sizeLabel,
          priceCents: p.priceCents,
        }))}
        isSignedIn={Boolean(user)}
        paymentsReady={isGatewayConfigured()}
      />
    </div>
  )
}
