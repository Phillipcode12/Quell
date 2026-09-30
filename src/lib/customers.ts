import { prisma } from '@/lib/db'

/**
 * People who have paid, grouped by email address.
 *
 * Extracted from the Customers page so the page and its CSV build the same list
 * from the same rules. Two copies of "what counts as a customer" is exactly the
 * kind of thing that drifts and then disagrees on a number somebody is relying
 * on.
 *
 * Distinct from `lib/contacts`, which merges *every* address the shop holds
 * including people who never bought. This is the narrower question: who are the
 * customers.
 */

export type Customer = {
  email: string
  name: string
  hasAccount: boolean
  orderCount: number
  totalCents: number
  firstOrder: Date
  lastOrder: Date
}

/** Orders that represent money actually taken. */
const PAID = ['paid', 'shipped']

export async function listCustomers(): Promise<Customer[]> {
  const orders = await prisma.order.findMany({
    where: { status: { in: PAID } },
    // Ascending so the last row seen for an address is genuinely its most
    // recent order, which is what `lastOrder` means.
    orderBy: { createdAt: 'asc' },
    select: {
      email: true,
      shippingName: true,
      totalCents: true,
      createdAt: true,
      user: { select: { name: true } },
    },
  })

  // Emails are stored lowercased at checkout, but group defensively -- one
  // customer appearing twice because of casing would be worse than useless.
  const byEmail = new Map<string, Customer>()

  for (const order of orders) {
    const key = order.email.toLowerCase()
    const existing = byEmail.get(key)

    if (existing) {
      existing.orderCount += 1
      existing.totalCents += order.totalCents
      existing.lastOrder = order.createdAt
      // A later order carries a better name than an earlier blank one, and an
      // account name beats an address label.
      if (order.user?.name) {
        existing.name = order.user.name
        existing.hasAccount = true
      } else if (!existing.name && order.shippingName) {
        existing.name = order.shippingName
      }
      continue
    }

    byEmail.set(key, {
      email: key,
      name: order.user?.name ?? order.shippingName ?? '',
      hasAccount: Boolean(order.user),
      orderCount: 1,
      totalCents: order.totalCents,
      firstOrder: order.createdAt,
      lastOrder: order.createdAt,
    })
  }

  return [...byEmail.values()].sort(
    (a, b) => b.lastOrder.getTime() - a.lastOrder.getTime(),
  )
}
