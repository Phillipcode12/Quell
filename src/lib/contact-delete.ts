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

export const PAID_REFUSAL =
  'This address has a paid order, so it cannot be deleted here — an order is a financial record. Cancel or refund the order first if it was a mistake.'

export const NOTHING_REFUSAL =
  'Nothing left to delete for this address.'

export function planContactDeletion(input: {
  orders: { id: string; status: string }[]
  hasAccount: boolean
  hasSubscriber: boolean
}): DeletePlan {
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
