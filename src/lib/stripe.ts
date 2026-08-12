import 'server-only'
import Stripe from 'stripe'

/**
 * Stripe is optional at boot so the template runs before keys are added.
 * Checkout returns a clear error until STRIPE_SECRET_KEY is set.
 */
export function isStripeConfigured() {
  return Boolean(process.env.STRIPE_SECRET_KEY)
}

let cached: Stripe | null = null

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not set. Add it to .env and restart.')
  }
  if (!cached) {
    cached = new Stripe(key)
  }
  return cached
}

export function appUrl() {
  return process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
}
