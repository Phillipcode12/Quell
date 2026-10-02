import { shippingCentsFor } from '@/lib/shipping'

/**
 * What a quantity costs delivered, and what it saves.
 *
 * One function because the same arithmetic is shown in two places — the hero
 * and the buy panel — and **copies of this reasoning have already drifted
 * twice in a single day**: once when the hero's button still added one bottle
 * while the panel defaulted to two, and again when the cart's nudge still
 * talked in dollars after the rest of the site had moved to bottles. Anything
 * that quotes a price to a customer derives it from here.
 *
 * ### The reference price is one bottle delivered, never the sticker
 *
 * At two bottles the delivered price is $34.99 each, which is **higher** than
 * the $29.99 shelf price, because one bottle carries $10 of postage and two
 * carry the same $10 between them. Comparing against $29.99 would make every
 * multi-bottle order look like a markup. Against $39.99 — what a single bottle
 * actually costs to get to a door — the saving is real and checkable, and both
 * numbers are on screen.
 *
 * `savingCents` is therefore "this order versus the same bottles bought one at
 * a time", and it is zero at a quantity of one rather than negative.
 */
export type Pricing = {
  subtotalCents: number
  shippingCents: number
  /** Subtotal plus shipping: what the customer actually pays. */
  deliveredCents: number
  /** One bottle, delivered. The reference every saving is measured against. */
  singleDeliveredCents: number
  /** Against buying the same number of bottles singly. Zero at one. */
  savingCents: number
}

export function priceFor(unitPriceCents: number, quantity: number): Pricing {
  const subtotalCents = unitPriceCents * quantity
  const shippingCents = shippingCentsFor(subtotalCents)
  const deliveredCents = subtotalCents + shippingCents
  const singleDeliveredCents =
    unitPriceCents + shippingCentsFor(unitPriceCents)

  return {
    subtotalCents,
    shippingCents,
    deliveredCents,
    singleDeliveredCents,
    savingCents: Math.max(0, singleDeliveredCents * quantity - deliveredCents),
  }
}
