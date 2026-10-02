/**
 * Shipping rules — the single source of truth for both the cart UI and the
 * amount sent to the payment gateway. Change the numbers here and both follow.
 */

/** Orders at or above this subtotal ship free. */
/**
 * Free shipping starts here.
 *
 * **$89.00 from 2026-10-02, up from $59.00.** At $29.99 a bottle the old
 * threshold was cleared by two, which meant the third bottle cost full price
 * and earned the customer nothing — there was no reason to buy three, and
 * Aurora absorbed the postage on what is likely the most common order size.
 *
 * At $89.00 the ladder climbs the whole way:
 *
 * ```
 * 1 bottle   $29.99 + $10  =  $39.99      $39.99 a bottle
 * 2 bottles  $59.98 + $10  =  $69.98      $34.99 a bottle
 * 3 bottles  $89.97 + free =  $89.97      $29.99 a bottle
 * ```
 *
 * Agreed with Dr. Rynerson on 2026-10-02 alongside defaulting the buy panel to
 * two. **A minimum order of two was considered and rejected**: it would have
 * taken the entry price from $39.99 to $69.98 for someone who has never heard
 * of the brand, at the exact moment cold TikTok traffic started arriving.
 *
 * The number stays a subtotal in cents rather than a bottle count because the
 * cart has to apply it to whatever is in it. The buy panel derives "three" from
 * it, so moving this moves the copy too.
 */
export const FREE_SHIPPING_THRESHOLD_CENTS = 8_900 // $89.00

/**
 * The same rule said in bottles, for customer-facing copy.
 *
 * "Free shipping on 3 bottles or more" beats "free shipping over $89.00",
 * which makes someone divide before they know what to do about it — and the
 * whole point of the threshold is to pull people up to three.
 *
 * **Written down rather than computed, and that is the risk.** The bottle price
 * lives in the database, so nothing here can derive this number at build time.
 * `shipping.test.ts` asserts it against the seeded price: if the price ever
 * changes so that three bottles no longer qualify, the test fails rather than
 * the site quietly promising something checkout will not honour.
 */
export const FREE_SHIPPING_BOTTLES = 3

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
