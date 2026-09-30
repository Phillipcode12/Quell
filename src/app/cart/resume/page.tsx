import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { ResumeCart } from '@/components/ResumeCart'
import { isAbandoned } from '@/lib/abandoned-cart'

/**
 * Puts an abandoned order back in the cart.
 *
 * The recovery email says "your cart is waiting", and this is what makes that
 * sentence true. The cart lives in `localStorage`, so it survives only on the
 * device it was built on — someone reading the email on their phone after
 * checking out on a laptop would otherwise arrive at an empty shop and a
 * promise we did not keep.
 *
 * ### What a guessed order number would reveal
 *
 * The quantity of the one product this shop sells, and nothing else. No email,
 * no name, no address is read here or rendered. Only `pending` orders resolve,
 * so a completed order cannot be replayed into a cart.
 */

export const dynamic = 'force-dynamic'

export default async function ResumeCartPage({
  searchParams,
}: {
  searchParams: Promise<{ o?: string }>
}) {
  // Next.js 16: searchParams is async.
  const { o } = await searchParams
  const orderNumber = (o ?? '').trim().toUpperCase()

  if (!/^Q-[A-Z0-9]{4,20}$/.test(orderNumber)) notFound()

  const order = await prisma.order.findUnique({
    where: { orderNumber },
    select: {
      status: true,
      paymentTransactionId: true,
      items: { select: { productId: true, quantity: true } },
    },
  })

  // A paid or cancelled order must not reappear as a live cart.
  if (!order || !isAbandoned(order) || order.items.length === 0) notFound()

  return <ResumeCart lines={order.items} />
}
