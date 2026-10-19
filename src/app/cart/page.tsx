import type { Metadata } from 'next'
import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/db'
import { OrderingUnavailable } from '@/components/OrderingUnavailable'
import { getCurrentUser } from '@/lib/auth'
import { isGatewayConfigured } from '@/lib/authorizenet'
import { CartView } from '@/components/CartView'

export const metadata: Metadata = { title: 'Your cart' }

export default async function CartPage() {
  // The cart lives in the browser, so ship the catalog and let the client
  // resolve its lines against it.
  /**
   * A database failure shows the unavailable notice rather than a 500.
   *
   * This page cannot be cached the way the home page now is -- it reads the
   * session -- so it hits the database on every view and was the second page to
   * go down on 2026-10-19. There is nothing useful to show a customer whose
   * cart cannot be priced, but there is a great deal of difference between
   * saying so and crashing.
   */
  const loaded = await Promise.all([
    prisma.product.findMany({ where: { active: true } }),
    getCurrentUser(),
  ]).catch((cause: unknown) => {
    Sentry.captureException(cause)
    return null
  })

  if (!loaded) return <OrderingUnavailable />

  const [products, user] = loaded

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
