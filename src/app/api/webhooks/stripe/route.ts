import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { prisma } from '@/lib/db'
import { getStripe, isStripeConfigured } from '@/lib/stripe'
import { drawDownStock } from '@/lib/inventory'
import { sendOrderConfirmation } from '@/lib/orders'

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

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object)
        break
      case 'invoice.paid':
        await handleInvoicePaid(event.data.object)
        break
      default:
        break
    }
  } catch (err) {
    // Log and 200: a thrown error makes Stripe retry, which risks processing
    // the same payment twice. Failures here need a human, not a retry.
    console.error(`[webhook] ${event.type} failed:`, err)
  }

  return NextResponse.json({ received: true })
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const orderId = session.metadata?.orderId
  if (!orderId) return

  // In this API version the collected address lives under
  // collected_information, not the older session.shipping_details.
  const shipping = session.collected_information?.shipping_details ?? null
  const address = shipping?.address ?? null

  const updated = await prisma.order.updateMany({
    // Scope by pending status so replayed events don't move a shipped order back.
    where: { id: orderId, status: 'pending' },
    data: {
      status: 'paid',
      stripePaymentIntentId:
        typeof session.payment_intent === 'string'
          ? session.payment_intent
          : null,
      stripeSubscriptionId:
        typeof session.subscription === 'string' ? session.subscription : null,
      shippingName: shipping?.name ?? null,
      shippingLine1: address?.line1 ?? null,
      shippingLine2: address?.line2 ?? null,
      shippingCity: address?.city ?? null,
      shippingState: address?.state ?? null,
      shippingPostalCode: address?.postal_code ?? null,
      shippingCountry: address?.country ?? null,
    },
  })

  // Only draw down stock the first time this event is processed, so a
  // replayed webhook can't decrement twice.
  if (updated.count > 0) {
    await drawDownStock(orderId)
    await sendOrderConfirmation(orderId)
  }
}

/**
 * Subscription renewals. The first invoice of a subscription is already
 * covered by checkout.session.completed, so only later cycles create a new
 * order here.
 */
async function handleInvoicePaid(invoice: Stripe.Invoice) {
  if (invoice.billing_reason !== 'subscription_cycle') return

  const customerId =
    typeof invoice.customer === 'string' ? invoice.customer : null
  if (!customerId) return

  const user = await prisma.user.findUnique({
    where: { stripeCustomerId: customerId },
  })
  if (!user) {
    console.error(`[webhook] no user for stripe customer ${customerId}`)
    return
  }

  // The invoice id is unique on Order, so a replayed event can't duplicate
  // a renewal order.
  const existing = await prisma.order.findUnique({
    where: { stripeInvoiceId: invoice.id },
  })
  if (existing) return

  // Reuse the most recent order on this subscription for the product,
  // quantity, and shipping address.
  //
  // In this API version the subscription reference lives under
  // parent.subscription_details, not the older invoice.subscription.
  const subscriptionRef = invoice.parent?.subscription_details?.subscription
  const subscriptionId =
    typeof subscriptionRef === 'string'
      ? subscriptionRef
      : (subscriptionRef?.id ?? null)

  const previous = await prisma.order.findFirst({
    where: {
      userId: user.id,
      purchaseMode: 'subscription',
      ...(subscriptionId ? { stripeSubscriptionId: subscriptionId } : {}),
    },
    orderBy: { createdAt: 'desc' },
    include: { items: true },
  })

  if (!previous || previous.items.length === 0) {
    console.error(
      `[webhook] renewal for ${customerId} has no prior subscription order to copy`,
    )
    return
  }

  const order = await prisma.order.create({
    data: {
      userId: user.id,
      status: 'paid',
      purchaseMode: 'subscription',
      stripeSubscriptionId: subscriptionId,
      stripeInvoiceId: invoice.id,
      subtotalCents: previous.subtotalCents,
      shippingCents: previous.shippingCents,
      totalCents: previous.totalCents,
      shippingName: previous.shippingName,
      shippingLine1: previous.shippingLine1,
      shippingLine2: previous.shippingLine2,
      shippingCity: previous.shippingCity,
      shippingState: previous.shippingState,
      shippingPostalCode: previous.shippingPostalCode,
      shippingCountry: previous.shippingCountry,
      items: {
        create: previous.items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          unitPriceCents: item.unitPriceCents,
        })),
      },
    },
  })

  await drawDownStock(order.id)
  await sendOrderConfirmation(order.id)
}
