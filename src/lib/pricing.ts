import { shippingCentsFor } from '@/lib/shipping'

/**
 * What a quantity costs delivered, and what it saves.
 *
 * One function because the same arithmetic is shown in several places — the
 * hero, the buy panel and now the cart — and **copies of this reasoning have
 * already drifted three times**: once when the hero's button still added one
 * bottle while the panel defaulted to two, again when the cart's nudge still
 * talked in dollars after the rest of the site had moved to bottles, and again
 * when the cart totted up its own subtotal and shipping and so was the one
 * screen in the funnel that never mentioned the saving at all. Anything that
 * quotes a price to a customer derives it from here.
 *
 * **The cart was the worst place for that gap**, because it is the screen
 * someone is looking at while deciding to pay.
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
  const { subtotalCents, shippingCents, deliveredCents, savingCents } =
    priceForLines([{ unitPriceCents, quantity }])

  return {
    subtotalCents,
    shippingCents,
    deliveredCents,
    singleDeliveredCents: singleDelivered(unitPriceCents),
    savingCents,
  }
}

/** One bottle on its own, postage included. */
function singleDelivered(unitPriceCents: number): number {
  return unitPriceCents + shippingCentsFor(unitPriceCents)
}

export type CartLine = { unitPriceCents: number; quantity: number }

/**
 * The same arithmetic for a whole cart.
 *
 * **Why this exists separately from `priceFor`:** shipping is charged on the
 * subtotal of everything in the basket, not per line, so a cart cannot be
 * priced by calling `priceFor` per row and adding up — two rows of one bottle
 * each would be charged postage twice and the total would not match what
 * checkout takes. `priceFor` is now this function with a single line, so there
 * is one implementation rather than two that agree today.
 *
 * There is one product today and `CartView` is the only caller, but the cart
 * has always been written to hold several, and a saving that silently goes
 * wrong the day a second SKU exists is worse than no saving at all.
 *
 * `savingCents` keeps its meaning from `priceFor`: **this basket versus buying
 * the same items one at a time**, each with its own postage. That is a
 * comparison, not a discount — the customer pays `deliveredCents`, and nothing
 * is deducted anywhere. Anything that displays it has to make that clear.
 */
export function priceForLines(lines: CartLine[]): Omit<
  Pricing,
  'singleDeliveredCents'
> & {
  /** The same items bought singly, each paying its own postage. */
  singlesDeliveredCents: number
} {
  const subtotalCents = lines.reduce(
    (sum, l) => sum + l.unitPriceCents * l.quantity,
    0,
  )
  const shippingCents = shippingCentsFor(subtotalCents)
  const deliveredCents = subtotalCents + shippingCents

  const singlesDeliveredCents = lines.reduce(
    (sum, l) => sum + singleDelivered(l.unitPriceCents) * l.quantity,
    0,
  )

  return {
    subtotalCents,
    shippingCents,
    deliveredCents,
    singlesDeliveredCents,
    // Never negative. An empty cart is zero rather than a saving of nothing.
    savingCents: Math.max(0, singlesDeliveredCents - deliveredCents),
  }
}
