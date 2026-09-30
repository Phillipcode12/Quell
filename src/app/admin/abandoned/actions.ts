'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { sendAbandonedCartEmail } from '@/lib/email'
import { isAbandoned } from '@/lib/abandoned-cart'

/**
 * Server actions are a public HTTP surface, so each one re-checks admin
 * access. Never rely on the page having rendered for an admin.
 */
async function assertAdmin() {
  const admin = await getAdminUser()
  if (!admin) throw new Error('Not authorized')
  return admin
}

/**
 * Sends the recovery email for one cart, by hand.
 *
 * ### Why this exists rather than widening the automatic window
 *
 * The cron gives up after seven days, deliberately: past that, an automatic
 * "your cart is waiting" reads as surveillance rather than help. But *a person
 * deciding to write to one customer* is a different act from a machine mailing
 * everyone who ever abandoned something, and the seven-day bound should not
 * prevent it.
 *
 * The first use was exactly that case — the real cart from 2026-09-20 (§33),
 * ten days old by the time anyone noticed it.
 *
 * ### What it still refuses
 *
 * **A paid order.** "Your cart is waiting" to someone who has been charged and
 * is waiting for a parcel is the worst message this system could produce, so
 * that check is here as well as in the cron rather than trusted to the caller.
 *
 * It does **not** refuse an already-emailed cart: sending a second one is a
 * deliberate human choice, and the button says so. `abandonedEmailSentAt` is
 * still updated, so the automatic run never adds a third.
 */
export async function sendRecoveryEmail(orderId: string) {
  await assertAdmin()

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    select: {
      id: true,
      email: true,
      orderNumber: true,
      shippingName: true,
      totalCents: true,
      status: true,
      paymentTransactionId: true,
    },
  })

  if (!order) throw new Error('That order no longer exists.')
  if (!isAbandoned(order)) {
    throw new Error('That order has been paid or cancelled — nothing to recover.')
  }

  // Marked before sending, matching the cron: a failure between the two should
  // cost a missed email rather than risk a duplicate.
  await prisma.order.update({
    where: { id: order.id },
    data: { abandonedEmailSentAt: new Date() },
  })

  await sendAbandonedCartEmail(order)

  revalidatePath('/admin/abandoned')
  return { ok: true as const }
}
