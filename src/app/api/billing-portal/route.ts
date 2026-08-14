import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { getStripe, isStripeConfigured } from '@/lib/stripe'
import { appUrl } from '@/lib/site'

/**
 * Opens Stripe's billing portal so subscribers can update payment details,
 * change the shipping address, or cancel — without us rebuilding any of it.
 *
 * The portal needs to be enabled once in the Stripe dashboard:
 * https://dashboard.stripe.com/test/settings/billing/portal
 */
export async function POST() {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }

  if (!isStripeConfigured()) {
    return NextResponse.json(
      { error: 'Stripe is not configured.' },
      { status: 503 },
    )
  }

  if (!user.stripeCustomerId) {
    return NextResponse.json(
      { error: 'No billing account yet — place an order first.' },
      { status: 400 },
    )
  }

  try {
    const session = await getStripe().billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${appUrl()}/account`,
    })
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Billing portal session failed:', err)
    return NextResponse.json(
      {
        error:
          'Could not open the billing portal. If this is a new Stripe account, enable the customer portal in your dashboard settings first.',
      },
      { status: 502 },
    )
  }
}
