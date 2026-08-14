import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { getStripe, isStripeConfigured } from '@/lib/stripe'
import { appUrl } from '@/lib/site'
import {
  FREE_SHIPPING_LABEL,
  SHIPPABLE_COUNTRIES,
  SHIPPING_LABEL,
  shippingCentsFor,
} from '@/lib/shipping'
import {
  SUBSCRIPTION_INTERVAL,
  subscriptionPriceCents,
} from '@/lib/subscription'

const schema = z.object({
  mode: z.enum(['one_time', 'subscription']).default('one_time'),
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

  const { mode } = parsed.data
  const isSubscription = mode === 'subscription'

  // A subscription is one recurring line, not a basket.
  if (isSubscription && parsed.data.items.length !== 1) {
    return NextResponse.json(
      { error: 'Subscriptions cover a single product.' },
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
    return product ? { product, quantity: item.quantity } : null
  })

  if (lineItems.some((l) => l === null)) {
    return NextResponse.json(
      { error: 'One or more items are no longer available.' },
      { status: 400 },
    )
  }

  const resolved = lineItems as {
    product: (typeof products)[number]
    quantity: number
  }[]

  // Stock is checked here and decremented again atomically when payment lands,
  // so a sold-out product can't be added to a Checkout Session.
  const short = resolved.find(
    ({ product, quantity }) => product.stockQuantity < quantity,
  )
  if (short) {
    return NextResponse.json(
      {
        error:
          short.product.stockQuantity === 0
            ? `${short.product.name} is out of stock.`
            : `Only ${short.product.stockQuantity} left of ${short.product.name}.`,
      },
      { status: 409 },
    )
  }

  const unitPriceFor = (priceCents: number) =>
    isSubscription ? subscriptionPriceCents(priceCents) : priceCents

  const subtotalCents = resolved.reduce(
    (sum, { product, quantity }) =>
      sum + unitPriceFor(product.priceCents) * quantity,
    0,
  )
  // Subscriptions always ship free; one-time orders use the cart threshold.
  const shippingCents = isSubscription ? 0 : shippingCentsFor(subtotalCents)
  const totalCents = subtotalCents + shippingCents

  const order = await prisma.order.create({
    data: {
      userId: user.id,
      status: 'pending',
      purchaseMode: mode,
      subtotalCents,
      shippingCents,
      totalCents,
      items: {
        create: resolved.map(({ product, quantity }) => ({
          productId: product.id,
          quantity,
          unitPriceCents: unitPriceFor(product.priceCents),
        })),
      },
    },
  })

  try {
    const stripe = getStripe()

    // Reuse the customer across purchases so subscriptions, renewals, and the
    // billing portal all hang off one Stripe customer per account.
    let customerId = user.stripeCustomerId
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: { userId: user.id },
      })
      customerId = customer.id
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId: customerId },
      })
    }

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      customer: customerId,
      line_items: resolved.map(({ product, quantity }) => ({
        quantity,
        price_data: {
          currency: 'usd',
          unit_amount: unitPriceFor(product.priceCents),
          product_data: {
            name: product.name,
            description: `${product.tagline} · ${product.sizeLabel}`,
          },
          ...(isSubscription
            ? { recurring: { interval: SUBSCRIPTION_INTERVAL } }
            : {}),
        },
      })),
      // Physical goods: collect a destination address.
      shipping_address_collection: {
        allowed_countries: [...SHIPPABLE_COUNTRIES],
      },
      // Exactly one option, priced by our own rules, so the amount Stripe
      // charges always matches the order we just wrote.
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            display_name:
              shippingCents === 0 ? FREE_SHIPPING_LABEL : SHIPPING_LABEL,
            fixed_amount: { amount: shippingCents, currency: 'usd' },
          },
        },
      ],
      // The webhook uses this to match the payment back to the order.
      metadata: { orderId: order.id, userId: user.id, purchaseMode: mode },
      ...(isSubscription
        ? { subscription_data: { metadata: { userId: user.id } } }
        : {}),
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
