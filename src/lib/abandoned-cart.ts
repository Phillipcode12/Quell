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
 * **Two hours.** Briefly 24 on 2026-09-30, then back the same day: intent
 * decays fast, and the industry norm for a first touch is one to three hours.
 * Two is also long enough that nobody still on the payment page, hunting for
 * a card, is told they abandoned anything.
 *
 * ### The threshold is not the delay
 *
 * Worth understanding before anyone tunes this number. The cron runs **once a
 * day**, because that is the Hobby limit, so this value sets when an order
 * becomes *eligible*, not when the mail arrives:
 *
 *   abandoned 08:00 → eligible 10:00 → sent at that day's 15:00 run   ≈ 7h
 *   abandoned 16:00 → eligible 18:00 → missed it, goes tomorrow       ≈ 23h
 *
 * So the real delivery window is roughly **2 to 26 hours**, averaging half a
 * day. Lowering this further changes nothing on its own — the daily cron is
 * the binding constraint. **An hourly cron needs Pro**, and with one this
 * constant would mean what it says.
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
