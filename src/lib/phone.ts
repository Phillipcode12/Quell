/**
 * Is this plausibly a phone number a courier could ring?
 *
 * Required at checkout from 2026-10-02. It was optional for two days, on the
 * reasoning that a required phone field is among the most abandoned inputs in
 * checkout — which is true, and was outweighed: **the shipping carriers ask
 * for one**, so an order without a number costs real work at the moment the
 * parcel is being booked, every time.
 *
 * ### The rule is deliberately the loosest one that is still useful
 *
 * This now sits between a customer and a completed order, so every rule added
 * here is a chance to reject a real number at the last step of checkout. The
 * test is only: **after throwing away everything that is not a digit, are there
 * between 10 and 15 left?**
 *
 * - **10** is a US number without the country code, which is the floor for a
 *   shop that ships only within the United States.
 * - **15** is the E.164 maximum, so no real number anywhere is above it.
 *
 * That accepts `(615) 555-0142`, `615.555.0142`, `+1 615 555 0142` and
 * `6155550142 x204` alike, and rejects the things this exists to catch: blank,
 * `n/a`, `none`, and a number someone has fat-fingered three digits short.
 *
 * **It does not check that the number is real, assigned, or reachable**, and
 * should not start to. That needs a lookup service, and getting it wrong
 * silently costs an order.
 */

/** Below this, it cannot be a dialable US number. */
const MIN_DIGITS = 10

/** E.164's ceiling: no real number has more. */
const MAX_DIGITS = 15

/** Everything that is not 0-9, discarded before counting. */
export function phoneDigits(value: string | null | undefined): string {
  return typeof value === 'string' ? value.replace(/\D/g, '') : ''
}

export function isUsablePhone(value: string | null | undefined): boolean {
  const digits = phoneDigits(value)
  return digits.length >= MIN_DIGITS && digits.length <= MAX_DIGITS
}

/**
 * Shown to the customer when the number is refused.
 *
 * Says what is wanted rather than what was wrong: at the last step of checkout
 * "Enter a phone number with at least 10 digits" is actionable, where "Invalid
 * phone number" leaves someone guessing at a field they did not want to fill
 * in.
 */
export const PHONE_MESSAGE =
  'Enter a phone number with at least 10 digits — the carrier needs it for delivery.'
