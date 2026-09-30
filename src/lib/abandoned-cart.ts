/**
 * Abandoned carts: who counts as one, and who should be emailed about it.
 *
 * ### What an abandoned cart is here
 *
 * An order row that was created and never paid for. The customer typed a name,
 * an address and an email, was handed to Authorize.net's payment page, and
 * never came back — so `status` is still `pending` and no transaction id was
 * ever written by the webhook.
 *
 * That is a person much further along than a visitor. **The first one arrived
 * on 2026-09-20** (§33): two bottles, real address, organic traffic, no
 * payment. It sat unnoticed for nine days.
 *
 * ### Why the rules below are as conservative as they are
 *
 * These people did not ask for email. They gave an address to complete a
 * purchase, and a single follow-up about that purchase is defensible; anything
 * more is not. So: one email, ever, per order, and only inside a narrow window.
 */

/**
 * How long to wait before treating a pending order as abandoned.
 *
 * Two hours. Someone can legitimately be mid-payment — finding a card, being
 * interrupted — and mailing "you left something behind" to a person still on
 * the payment page is both wrong and irritating.
 */
export const ABANDON_AFTER_MS = 2 * 60 * 60_000

/**
 * How long after which it is too late to bother.
 *
 * Seven days. Past that the message reads as surveillance rather than help,
 * and the recovery rate is negligible. It is also what stops a backlog: when
 * this shipped there were nine-day-old pending orders in the table, and
 * without an upper bound the first run would have mailed all of them.
 */
export const ABANDON_WINDOW_MS = 7 * 24 * 60 * 60_000

export type AbandonInput = {
  status: string
  paymentTransactionId: string | null
  abandonedEmailSentAt: Date | null
  createdAt: Date
  now?: Date
}

export type AbandonVerdict =
  | { email: true }
  | {
      email: false
      reason: 'not-pending' | 'already-paid' | 'already-emailed' | 'too-soon' | 'too-old'
    }

/**
 * Whether this order should get the abandoned-cart email.
 *
 * Pure, so the rules can be tested without a database. Every caller must go
 * through this rather than writing its own `where` clause — the admin list and
 * the cron have to agree about what "abandoned" means, or the page will show
 * one thing and the mail will do another.
 */
export function shouldEmailAbandoned(input: AbandonInput): AbandonVerdict {
  const now = input.now ?? new Date()

  if (input.status !== 'pending') return { email: false, reason: 'not-pending' }

  // Belt and braces with the status check. A paid order whose status somehow
  // lagged must never be told it abandoned its cart.
  if (input.paymentTransactionId) return { email: false, reason: 'already-paid' }

  if (input.abandonedEmailSentAt) return { email: false, reason: 'already-emailed' }

  const age = now.getTime() - input.createdAt.getTime()
  if (age < ABANDON_AFTER_MS) return { email: false, reason: 'too-soon' }
  if (age > ABANDON_WINDOW_MS) return { email: false, reason: 'too-old' }

  return { email: true }
}

/** Orders that are abandoned, whether or not they are still worth emailing. */
export function isAbandoned(input: {
  status: string
  paymentTransactionId: string | null
}): boolean {
  return input.status === 'pending' && !input.paymentTransactionId
}
