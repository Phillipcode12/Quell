/**
 * Shipping rules — the single source of truth for both the cart UI and the
 * amount sent to the payment gateway. Change the numbers here and both follow.
 */

/** Orders at or above this subtotal ship free. */
export const FREE_SHIPPING_THRESHOLD_CENTS = 5_900 // $59.00

/**
 * Flat rate charged below the threshold.
 *
 * NOTE: this rate is an assumption, not a quoted carrier price — the free
 * shipping threshold was specified but the paid rate was not. Confirm it
 * against what FedEx 2-Day actually costs you before launch.
 */
export const STANDARD_SHIPPING_CENTS = 1000 // $10.00

/**
 * Carrier-neutral labels. Naming a carrier or a delivery window in the
 * promotion is a claim we would have to honour, so the offer is stated purely
 * as free shipping above the threshold.
 */
export const SHIPPING_LABEL = 'Standard shipping'
export const FREE_SHIPPING_LABEL = 'Free shipping'

/** Countries Checkout will accept a shipping address for. */
export const SHIPPABLE_COUNTRIES = ['US'] as const

export function shippingCentsFor(subtotalCents: number): number {
  return subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS
    ? 0
    : STANDARD_SHIPPING_CENTS
}

/** Cents still needed to qualify for free shipping, or 0 if already there. */
export function remainingForFreeShipping(subtotalCents: number): number {
  return Math.max(0, FREE_SHIPPING_THRESHOLD_CENTS - subtotalCents)
}
