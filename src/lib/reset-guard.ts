/**
 * Whether a password reset request should put mail in someone's inbox.
 *
 * Pure and separate from the route so it can be tested directly. The route
 * supplies the facts; this decides, and never touches the response — the
 * endpoint answers identically whatever comes back from here, so none of this
 * can be used to discover which addresses have accounts.
 *
 * ### What it is defending against
 *
 * The bot chain, seen twice (§26, §32): register with a stranger's address,
 * then immediately request a reset so the site mails the stranger. On
 * 2026-09-30 the gap between the two steps was under a minute.
 *
 * ### What it is not
 *
 * **Not a wall.** A bot that waits an hour defeats the age check, and one that
 * rotates victims defeats the per-address limit. The wall is that registration
 * is closed. This exists so that reopening registration later is safe by
 * default rather than safe because somebody remembered to think about it.
 */

/**
 * How old an account must be before a reset will be emailed.
 *
 * One hour: long enough that the chain has to hold state and come back, short
 * enough that someone who signs up in the morning and forgets by lunchtime is
 * unaffected. The awkward case — registering and forgetting within the hour —
 * still has the password they typed minutes ago.
 */
export const MIN_ACCOUNT_AGE_MS = 60 * 60_000

export type ResetDecision =
  | { send: true }
  | { send: false; reason: 'no-account' | 'account-too-new' | 'rate-limited' }

export function resetDecision(input: {
  /** Null when no account exists for the address. */
  accountCreatedAt: Date | null
  /** False when this address has already been mailed its share this hour. */
  withinEmailLimit: boolean
  now?: Date
}): ResetDecision {
  const { accountCreatedAt, withinEmailLimit } = input
  const now = input.now ?? new Date()

  if (!accountCreatedAt) return { send: false, reason: 'no-account' }

  // Checked before the age test so a flood against one address is reported as
  // a flood, which is the more useful signal in a log.
  if (!withinEmailLimit) return { send: false, reason: 'rate-limited' }

  const age = now.getTime() - accountCreatedAt.getTime()
  // Guards against a clock skew or a future-dated row reading as "very old".
  if (age < MIN_ACCOUNT_AGE_MS) return { send: false, reason: 'account-too-new' }

  return { send: true }
}
