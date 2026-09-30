import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/db'
import { sendReorderReminderEmail } from '@/lib/email'
import { DAYS_PER_BOTTLE, REORDER_GRACE_MS, shouldEmailReorder } from '@/lib/reorder'

/**
 * Reminds customers whose bottles are estimated to have run out.
 *
 * Invoked by Vercel cron (see `vercel.json`), daily, an hour after the
 * abandoned-cart job so the two never contend for the same function.
 *
 * ### Same reconciliation shape as the abandoned-cart job
 *
 * Vercel cron delivery is best effort: a run can be missed *or repeated*, and
 * failures are never retried. So this asks what still needs doing every time,
 * and marks each order before sending — a crash then costs a missed reminder
 * rather than a duplicate.
 *
 * ### Why the candidate query is deliberately loose
 *
 * The date arithmetic depends on quantity, which lives on `OrderItem`, so it
 * cannot be expressed cleanly in the `where`. The query narrows to orders old
 * enough that *one* bottle would have run out, and `shouldEmailReorder` makes
 * the real decision per order. Being loose here is safe; being loose in the
 * decision would not be.
 */

export const dynamic = 'force-dynamic'

/** Never mail more than this in one run. */
const MAX_PER_RUN = 50

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  const auth = request.headers.get('authorization')

  // Fails closed: with no secret configured nothing runs, rather than leaving
  // a public endpoint that mails customers.
  if (!secret || auth !== `Bearer ${secret}`) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const now = new Date()
  const dayMs = 24 * 60 * 60_000
  // The earliest an order could possibly be due: one bottle, plus the grace
  // window, is the widest the real rule can ever be.
  const oldest = new Date(now.getTime() - DAYS_PER_BOTTLE * dayMs - REORDER_GRACE_MS)
  const newest = new Date(now.getTime() - DAYS_PER_BOTTLE * dayMs)

  const candidates = await prisma.order.findMany({
    where: {
      status: { in: ['paid', 'shipped'] },
      reorderEmailSentAt: null,
      createdAt: { gte: oldest, lte: newest },
    },
    orderBy: { createdAt: 'asc' },
    take: MAX_PER_RUN,
    select: {
      id: true,
      email: true,
      orderNumber: true,
      shippingName: true,
      createdAt: true,
      status: true,
      reorderEmailSentAt: true,
      items: { select: { quantity: true } },
    },
  })

  let sent = 0
  let skipped = 0
  let failed = 0

  for (const order of candidates) {
    const quantity = order.items.reduce((n, i) => n + i.quantity, 0)

    /**
     * Has this customer ordered again since? Keyed on email rather than on an
     * account, because most buyers check out as guests and have no user row —
     * matching them by account would miss nearly everyone who has come back.
     */
    const laterOrder = await prisma.order.findFirst({
      where: {
        email: order.email,
        status: { in: ['paid', 'shipped'] },
        createdAt: { gt: order.createdAt },
      },
      select: { id: true },
    })

    const verdict = shouldEmailReorder({
      status: order.status,
      quantity,
      reorderEmailSentAt: order.reorderEmailSentAt,
      createdAt: order.createdAt,
      hasLaterOrder: Boolean(laterOrder),
      now,
    })

    if (!verdict.email) {
      skipped++
      continue
    }

    try {
      await prisma.order.update({
        where: { id: order.id },
        data: { reorderEmailSentAt: new Date() },
      })
      await sendReorderReminderEmail({ ...order, quantity })
      sent++
    } catch (error) {
      failed++
      console.error('[cron/reorder] failed', {
        orderNumber: order.orderNumber,
        error: error instanceof Error ? error.message : String(error),
      })
      Sentry.captureException(error, { tags: { cron: 'reorder' } })
    }
  }

  console.info('[cron/reorder] run complete', {
    candidates: candidates.length,
    sent,
    skipped,
    failed,
  })

  return NextResponse.json({
    ok: true,
    candidates: candidates.length,
    sent,
    skipped,
    failed,
  })
}
