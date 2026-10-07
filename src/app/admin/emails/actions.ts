'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getAdminUser, isAdminEmail } from '@/lib/admin'
import { planContactDeletion } from '@/lib/contact-delete'

/**
 * Server actions are a public HTTP surface, so each one re-checks admin access.
 * Never rely on the page having rendered for an admin.
 */
async function assertAdmin() {
  const admin = await getAdminUser()
  if (!admin) throw new Error('Not authorized')
  return admin
}

/**
 * Removes an address and everything attached to it that is not money.
 *
 * `lib/contact-delete` holds the rule and the reasoning; the important part is
 * that **the refusal is decided here, on the server, from a fresh read.** The
 * table hides the button for addresses that have paid, but that is a
 * convenience for the person clicking, not the guard. A stale page, a replayed
 * request or a hand-made one all have to hit the same check.
 *
 * ### One transaction, orders first
 *
 * The deletes are ordered so a failure part-way cannot leave an order pointing
 * at a user that no longer exists. In practice `Order.userId` is `SetNull` and
 * the whole thing is a transaction, so neither could happen -- but the ordering
 * costs nothing and removes the need to reason about it.
 */
export async function deleteContact(rawEmail: string) {
  await assertAdmin()

  const email = rawEmail.trim().toLowerCase()
  if (!email) throw new Error('No address given.')

  // Case-insensitive because `Order.email` is stored as the customer typed it,
  // which is how one person ends up as two rows anywhere that forgets this.
  const where = { email: { equals: email, mode: 'insensitive' as const } }

  const [orders, user, subscriber] = await Promise.all([
    prisma.order.findMany({ where, select: { id: true, status: true } }),
    prisma.user.findFirst({ where, select: { id: true } }),
    prisma.subscriber.findFirst({ where, select: { id: true } }),
  ])

  const plan = planContactDeletion({
    orders,
    hasAccount: Boolean(user),
    hasSubscriber: Boolean(subscriber),
    // Read from ADMIN_EMAILS on the server, like every other check here. Ryan's
    // account went this way on or after 2026-10-01 -- he had never ordered, so
    // the paid-order rule had nothing to protect. See lib/contact-delete.
    isAdmin: isAdminEmail(email),
  })

  if (!plan.allowed) throw new Error(plan.reason)

  await prisma.$transaction(async (tx) => {
    if (plan.orderIds.length) {
      // OrderItem cascades from Order, so the line items go with these.
      await tx.order.deleteMany({ where: { id: { in: plan.orderIds } } })
    }
    // PasswordResetToken cascades from User.
    if (user) await tx.user.delete({ where: { id: user.id } })
    if (subscriber) await tx.subscriber.delete({ where: { id: subscriber.id } })
  })

  // Every tab that counts people is now wrong until it re-renders.
  for (const path of [
    '/admin/emails',
    '/admin/orders',
    '/admin/customers',
    '/admin/abandoned',
    '/admin/subscribers',
  ]) {
    revalidatePath(path)
  }

  return { deleted: plan.summary }
}
