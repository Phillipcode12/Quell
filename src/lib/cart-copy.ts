/**
 * What the "Add to cart" buttons say.
 *
 * Shared because there are two of them — the hero's and the buy panel's — and
 * on 2026-10-02 they silently disagreed about how many bottles they added. One
 * said "Add to cart" and gave you one; the other said "Add to cart" and gave
 * you two. Copy that states the quantity only helps if both buttons state the
 * same quantity they actually add.
 *
 * ### Why it names the number
 *
 * The buy panel defaults to two. A button reading plain "Add to cart" beside a
 * quantity box is easy to press without registering what is in the box, and
 * somebody discovering at checkout that they bought two bottles is a refund
 * request and a lost customer. **The button should say what pressing it does.**
 */

/**
 * `Add 2 bottles`, or `Add 1 bottle`.
 *
 * Spelled out rather than "Add 2" — two *what* is the question the label
 * exists to answer, and on a page offering one, two and three bottles the unit
 * is the part that is easy to misread.
 *
 * **"to cart" was dropped after measuring.** At 360px the buy panel button sits
 * beside the quantity dropdown with about 100px to spare, and the longer label
 * wrapped to four lines. The header cart icon already says where things go.
 */
export function addToCartLabel(quantity: number): string {
  const bottles = quantity === 1 ? 'bottle' : 'bottles'
  return `Add ${quantity} ${bottles}`
}

/** The confirmation shown briefly after a successful add. */
export function addedToCartLabel(quantity: number): string {
  const bottles = quantity === 1 ? 'bottle' : 'bottles'
  return `Added ${quantity} ${bottles} ✓`
}
