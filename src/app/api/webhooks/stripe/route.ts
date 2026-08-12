import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { prisma } from '@/lib/db'
import { getStripe, isStripeConfigured } from '@/lib/stripe'

/**
 * Stripe webhook. Payment success is recorded here rather than on the success
 * page, because the browser may never load it. The raw body is required for
 * signature verification, so do not parse it as JSON first.
 */
export async function POST(request: Request) {
  if (!isStripeConfigured() || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: 'Stripe webhook is not configured.' },
      { status: 503 },
    )
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature.' }, { status: 400 })
  }

  const rawBody = await request.text()

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid signature'
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${message}` },
      { status: 400 },
    )
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const orderId = session.metadata?.orderId

    if (orderId) {
      await prisma.order.updateMany({
        // Scope by pending status so replayed events don't move a shipped order back.
        where: { id: orderId, status: 'pending' },
        data: {
          // Paid, but NOT clear to ship. A licensed pharmacist must verify the
          // prescription before this order is fulfilled.
          status: 'rx_review',
          stripePaymentIntentId:
            typeof session.payment_intent === 'string'
              ? session.payment_intent
              : null,
        },
      })
    }
  }

  return NextResponse.json({ received: true })
}
