import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { appUrl, getStripe, isStripeConfigured } from '@/lib/stripe'

const schema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().min(1).max(10),
      }),
    )
    .min(1, 'Your cart is empty.'),
})

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json(
      { error: 'You must be signed in to check out.' },
      { status: 401 },
    )
  }

  if (!isStripeConfigured()) {
    return NextResponse.json(
      {
        error:
          'Stripe is not configured. Add STRIPE_SECRET_KEY to .env and restart the dev server.',
      },
      { status: 503 },
    )
  }

  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid cart.' },
      { status: 400 },
    )
  }

  // Prices always come from the database, never from the client payload.
  const products = await prisma.product.findMany({
    where: {
      id: { in: parsed.data.items.map((i) => i.productId) },
      active: true,
    },
  })

  const lineItems = parsed.data.items.map((item) => {
    const product = products.find((p) => p.id === item.productId)
    if (!product) throw new Error(`Unknown product: ${item.productId}`)
    return { product, quantity: item.quantity }
  })

  if (lineItems.length !== parsed.data.items.length) {
    return NextResponse.json(
      { error: 'One or more items are no longer available.' },
      { status: 400 },
    )
  }

  const totalCents = lineItems.reduce(
    (sum, { product, quantity }) => sum + product.priceCents * quantity,
    0,
  )

  const order = await prisma.order.create({
    data: {
      userId: user.id,
      status: 'pending',
      totalCents,
      items: {
        create: lineItems.map(({ product, quantity }) => ({
          productId: product.id,
          quantity,
          unitPriceCents: product.priceCents,
        })),
      },
    },
  })

  try {
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: user.email,
      line_items: lineItems.map(({ product, quantity }) => ({
        quantity,
        price_data: {
          currency: 'usd',
          unit_amount: product.priceCents,
          product_data: {
            name: `${product.name} — ${product.strength}`,
            description: `${product.volumeMl} mL`,
          },
        },
      })),
      // The webhook uses this to match the payment back to the order.
      metadata: { orderId: order.id, userId: user.id },
      success_url: `${appUrl()}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl()}/cart?canceled=1`,
    })

    await prisma.order.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    // Stripe never took the payment, so don't leave a pending order behind.
    await prisma.order.update({
      where: { id: order.id },
      data: { status: 'cancelled' },
    })

    console.error('Stripe checkout session failed:', err)
    return NextResponse.json(
      { error: 'Could not start checkout. Please try again.' },
      { status: 502 },
    )
  }
}
