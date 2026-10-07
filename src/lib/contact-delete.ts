/**
 * Whether an address may be deleted from the Emails tab, and what deleting it
 * would actually remove.
 *
 * Separated from the mutation so the one rule that matters here is testable
 * without a database.
 *
 * ### A paid order is never deleted to tidy a mailing list
 *
 * `Order` rows for paid and shipped orders are **financial records**. They are
 * what reconciles against Authorize.net, what a tax return is built from, and
 * the evidence if a charge is ever disputed. Nothing on an admin screen whose
 * job is removing junk should be able to take one, however many clicks it asks
 * for first.
 *
 * So the rule is blunt rather than clever: **if an address has ever paid, it
 * cannot be deleted here.** No partial deletion either -- quietly removing
 * someone's account and subscriber rows while keeping their orders would leave
 * a customer who still exists but can no longer be looked up by the thing that
 * identifies them.
 *
 * That is not a general erasure policy. A real request to erase a customer's
 * details is a deliberate, rarer job that needs to decide what happens to the
 * order history, and it should not share a button with deleting `rgwrgt@...`.
 *
 * ### An admin's own account is never deleted to tidy a mailing list either
 *
 * **Added 2026-10-06, after it happened.** Ryan registered, was an admin by
 * virtue of his address being in `ADMIN_EMAILS`, and his account then
 * disappeared. The September bot purge explicitly kept it (section 32), this
 * button shipped on 2026-10-01, and by 2026-10-06 production held one user row.
 * Nothing records which click did it, because there is no audit log — but Ryan
 * had never ordered, so from the Emails tab his account looked exactly like junk
 * and cost one confirmation to remove.
 *
 * **The paid-order rule could not have caught it.** It protects money, and an
 * admin who has never bought anything has none. So the second rule protects
 * access: an address in `ADMIN_EMAILS` cannot be deleted here. Removing
 * someone's admin account is a thing to do on purpose, by taking them out of the
 * allowlist — not a side effect of clearing `fgbbgf dfbbf` off a list.
 *
 * ### What it is safe to delete
 *
 * Everything that is not money: an account, a self-check signup, and `pending`
 * or `cancelled` orders. A pending order is a checkout that was started and
 * never paid, so no money moved and there is nothing to reconcile. Deleting one
 * also drops it off the Abandoned tab, which for a junk address is the point.
 *
 * Two schema facts this relies on, both worth re-checking before changing it:
 *
 * - **`Order.userId` is `onDelete: SetNull`**, so deleting an account never
 *   touches its orders -- a paid order survives and simply stops being linked
 *   to a login.
 * - **`OrderItem.orderId` is `onDelete: Cascade`**, so deleting a pending order
 *   takes its line items with it rather than orphaning them.
 */

/** Orders that represent money actually taken. */
const PAID = new Set(['paid', 'shipped'])

export type DeletePlan =
  | { allowed: false; reason: string }
  | {
      allowed: true
      /** Ids of the pending/cancelled orders that would be removed. */
      orderIds: string[]
      account: boolean
      subscriber: boolean
      /** One line for the confirmation prompt. */
      summary: string
    }

export const ADMIN_REFUSAL =
  'This address is an admin (it is in ADMIN_EMAILS), so it cannot be deleted here — that would remove their way in. Take it out of ADMIN_EMAILS first if they should no longer have access.'

export const PAID_REFUSAL =
  'This address has a paid order, so it cannot be deleted here — an order is a financial record. Cancel or refund the order first if it was a mistake.'

export const NOTHING_REFUSAL =
  'Nothing left to delete for this address.'

export function planContactDeletion(input: {
  orders: { id: string; status: string }[]
  hasAccount: boolean
  hasSubscriber: boolean
  /** Whether this address is in ADMIN_EMAILS. Checked by the caller. */
  isAdmin: boolean
}): DeletePlan {
  /**
   * Access first, money second.
   *
   * Order matters only for which message is shown, and this one is the more
   * actionable of the two: an admin with a paid order should be told the thing
   * that is unusual about them, not the thing they share with every customer.
   */
  if (input.isAdmin) {
    return { allowed: false, reason: ADMIN_REFUSAL }
  }

  if (input.orders.some((o) => PAID.has(o.status))) {
    return { allowed: false, reason: PAID_REFUSAL }
  }

  const orderIds = input.orders.map((o) => o.id)

  if (orderIds.length === 0 && !input.hasAccount && !input.hasSubscriber) {
    // Already gone, or the row came from somewhere this does not know about.
    // Either way, reporting success would be a lie.
    return { allowed: false, reason: NOTHING_REFUSAL }
  }

  const parts: string[] = []
  if (orderIds.length) {
    parts.push(
      `${orderIds.length} unpaid order${orderIds.length === 1 ? '' : 's'}`,
    )
  }
  if (input.hasAccount) parts.push('the account')
  if (input.hasSubscriber) parts.push('the self-check signup')

  return {
    allowed: true,
    orderIds,
    account: input.hasAccount,
    subscriber: input.hasSubscriber,
    summary: parts.join(', '),
  }
}
