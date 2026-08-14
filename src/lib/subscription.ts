/**
 * Refill subscription rules.
 *
 * A 10 mL bottle at the labelled dose — 1 drop, 3× daily, in each eye — is
 * roughly a month's supply, so monthly is the natural cadence.
 */

/**
 * Percentage off the one-time price for subscribing.
 *
 * NOTE: 15% is a placeholder. This is a margin decision, not a technical one —
 * set it to whatever you actually want to give up for recurring revenue, or to
 * 0 to offer subscriptions at full price (the UI drops the "save" wording).
 */
export const SUBSCRIPTION_DISCOUNT_PERCENT = 15

/** Subscriptions always ship free, regardless of the cart threshold. */
export const SUBSCRIPTION_SHIPS_FREE = true

export const SUBSCRIPTION_INTERVAL = 'month' as const

export type PurchaseMode = 'one_time' | 'subscription'

export function subscriptionPriceCents(oneTimePriceCents: number): number {
  const discounted = Math.round(
    oneTimePriceCents * (1 - SUBSCRIPTION_DISCOUNT_PERCENT / 100),
  )
  return Math.max(0, discounted)
}

export function subscriptionSavingsCents(oneTimePriceCents: number): number {
  return oneTimePriceCents - subscriptionPriceCents(oneTimePriceCents)
}
