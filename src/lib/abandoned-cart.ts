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
 * purchase, so the follow-ups stay about that purchase and stay few.
 *
 * **Two reminders, ever, per order (from 2026-11-21).** Until then it was one.
 * Phillip asked for more after the first recovered sale (Q-RX4K7PP7: the
 * buyer's card was declined, the reminder brought them back), and chose a
 * second reminder about three days after the first. The first email now says
 * one more is coming, so neither promises anything untrue.
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

/** The second reminder goes no sooner than this after the first. */
export const FOLLOW_UP_AFTER_MS = 3 * 24 * 60 * 60_000

/**
 * …and no later than this after the first. Two days of slack so a missed
 * daily cron run still catches it, and an upper bound so the day this shipped
 * it couldn't sweep up every order emailed weeks earlier.
 */
export const FOLLOW_UP_WINDOW_MS = 5 * 24 * 60 * 60_000

export type FollowUpInput = {
  status: string
  paymentTransactionId: string | null
  abandonedEmailSentAt: Date | null
  abandonedFollowUpSentAt: Date | null
  /**
   * Whether the same email address has started any order after this one,
   * paid or not. Someone who came back and bought, or is mid-way through a
   * fresh checkout, shouldn't be reminded about the old cart.
   */
  hasLaterOrder: boolean
  now?: Date
}

export type FollowUpVerdict =
  | { email: true }
  | {
      email: false
      reason:
        | 'not-pending'
        | 'already-paid'
        | 'no-first-email'
        | 'already-followed-up'
        | 'later-order'
        | 'too-soon'
        | 'too-old'
    }

/** Whether this order should get the second (last) reminder. Pure, like the first. */
export function shouldSendFollowUp(input: FollowUpInput): FollowUpVerdict {
  const now = input.now ?? new Date()

  if (input.status !== 'pending') return { email: false, reason: 'not-pending' }
  if (input.paymentTransactionId) return { email: false, reason: 'already-paid' }
  if (!input.abandonedEmailSentAt) return { email: false, reason: 'no-first-email' }
  if (input.abandonedFollowUpSentAt) return { email: false, reason: 'already-followed-up' }
  if (input.hasLaterOrder) return { email: false, reason: 'later-order' }

  const sinceFirst = now.getTime() - input.abandonedEmailSentAt.getTime()
  if (sinceFirst < FOLLOW_UP_AFTER_MS) return { email: false, reason: 'too-soon' }
  if (sinceFirst > FOLLOW_UP_WINDOW_MS) return { email: false, reason: 'too-old' }

  return { email: true }
}

/** Orders that are abandoned, whether or not they are still worth emailing. */
export function isAbandoned(input: {
  status: string
  paymentTransactionId: string | null
}): boolean {
  return input.status === 'pending' && !input.paymentTransactionId
}
