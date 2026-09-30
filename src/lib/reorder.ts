/**
 * The reorder reminder: when someone is likely to be running low.
 *
 * ### Why this is worth having at all
 *
 * Quell is a consumable. A customer who reorders four times is worth roughly
 * $120 rather than $30, and nothing in the shop currently prompts a second
 * purchase — the first order is the whole relationship. This is the shortest
 * path from the site as it stands to recurring revenue, and it is the evidence
 * that decides whether subscriptions (`lib/subscription.ts`) are worth
 * building at all.
 *
 * ### The timing scales with what they bought, and that matters
 *
 * `DRUG_FACTS.directions` is one drop three times a day **in each eye** — six
 * drops daily. A 10 mL bottle holds roughly 200 drops at a typical ophthalmic
 * dropper volume, so about **35 days per bottle**, which matches the "five to
 * seven weeks" already recorded for this product.
 *
 * Someone who bought **two** bottles is therefore only half way through at 35
 * days. Mailing them "running low?" then is the same kind of untruth as
 * telling someone their cart is waiting when it is not — it is confidently
 * wrong about their life, and it teaches them to ignore the next one. So the
 * estimate multiplies by quantity.
 *
 * It is an estimate and nothing more: people dose less than the label, share a
 * bottle, or stop. That is why the copy asks *if* they are running low rather
 * than announcing that they are.
 */

/** Days a single bottle lasts at the labelled dose. */
export const DAYS_PER_BOTTLE = 35

/**
 * How long after the estimate to give up.
 *
 * 45 days. Past that the reminder has missed its moment — they have either
 * bought elsewhere, stopped, or forgotten the brand — and a very late "running
 * low?" reads as a company that has lost track of its own customers.
 *
 * It also bounds the first run: without it, shipping this feature would mail
 * every customer who ever ordered, however long ago.
 */
export const REORDER_GRACE_MS = 45 * 24 * 60 * 60_000

const DAY_MS = 24 * 60 * 60_000

/** Statuses that mean the customer actually received bottles. */
const FULFILLED = ['paid', 'shipped']

export type ReorderInput = {
  status: string
  /** Total bottles on the order. */
  quantity: number
  reorderEmailSentAt: Date | null
  createdAt: Date
  /** True when this customer has ordered again since. */
  hasLaterOrder: boolean
  now?: Date
}

export type ReorderVerdict =
  | { email: true; dueAt: Date }
  | {
      email: false
      reason:
        | 'not-fulfilled'
        | 'already-emailed'
        | 'already-reordered'
        | 'too-soon'
        | 'too-late'
        | 'no-quantity'
    }

/** When a given order is estimated to run out. */
export function dueDate(createdAt: Date, quantity: number): Date {
  return new Date(createdAt.getTime() + quantity * DAYS_PER_BOTTLE * DAY_MS)
}

export function shouldEmailReorder(input: ReorderInput): ReorderVerdict {
  const now = input.now ?? new Date()

  if (!FULFILLED.includes(input.status)) {
    return { email: false, reason: 'not-fulfilled' }
  }
  if (input.reorderEmailSentAt) return { email: false, reason: 'already-emailed' }

  /**
   * They have already come back. Reminding someone to reorder something they
   * have just reordered is the most obvious way to look like nobody is paying
   * attention, and it is the complaint this kind of email usually earns.
   */
  if (input.hasLaterOrder) return { email: false, reason: 'already-reordered' }

  if (!Number.isFinite(input.quantity) || input.quantity < 1) {
    return { email: false, reason: 'no-quantity' }
  }

  const due = dueDate(input.createdAt, input.quantity)
  if (now < due) return { email: false, reason: 'too-soon' }
  if (now.getTime() - due.getTime() > REORDER_GRACE_MS) {
    return { email: false, reason: 'too-late' }
  }

  return { email: true, dueAt: due }
}
