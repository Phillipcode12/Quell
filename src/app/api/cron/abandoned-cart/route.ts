import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/db'
import { sendAbandonedCartEmail } from '@/lib/email'
import {
  ABANDON_AFTER_MS,
  ABANDON_WINDOW_MS,
  shouldEmailAbandoned,
} from '@/lib/abandoned-cart'

/**
 * Emails people whose order never completed payment.
 *
 * Invoked by Vercel cron (see `vercel.json`). **Once a day**, because Hobby
 * plans are limited to daily crons and may fire anywhere inside the scheduled
 * hour. On Pro this would run hourly, which is where the recovery rate
 * actually lives — a two-hour-old cart converts far better than a
 * twenty-hour-old one. Worth revisiting with the plan (§—).
 *
 * ### Idempotent, because cron delivery is best effort
 *
 * Vercel's own documentation says a scheduled run can be missed *or invoked
 * twice*, and that failures are never retried. So this is written as
 * reconciliation rather than as a queue: it asks "which orders still need an
 * email" every time, and `abandonedEmailSentAt` is written per order. Running
 * it twice in a row sends nothing the second time; missing a day catches up
 * the next.
 *
 * ### Marked before sending, deliberately
 *
 * If the mark came after a successful send, a crash between the two would
 * leave the order eligible again and the customer would get the same email
 * tomorrow. Marking first means the failure mode is a missed email rather than
 * a duplicate — and for a message they did not ask for, silence is the better
 * way to be wrong.
 */

export const dynamic = 'force-dynamic'

/** Never mail more than this in one run. */
const MAX_PER_RUN = 50

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  const auth = request.headers.get('authorization')

  // Fails closed: with no secret configured nothing runs, rather than leaving
  // a public endpoint that sends mail to customers.
  if (!secret || auth !== `Bearer ${secret}`) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const now = new Date()
  const candidates = await prisma.order.findMany({
    where: {
      status: 'pending',
      paymentTransactionId: null,
      abandonedEmailSentAt: null,
      createdAt: {
        gte: new Date(now.getTime() - ABANDON_WINDOW_MS),
        lte: new Date(now.getTime() - ABANDON_AFTER_MS),
      },
    },
    orderBy: { createdAt: 'asc' },
    take: MAX_PER_RUN,
  })

  let sent = 0
  let failed = 0

  for (const order of candidates) {
    // The query already filters, but the rules live in one place and this is
    // what keeps the admin list and the mail agreeing about what "abandoned"
    // means.
    const verdict = shouldEmailAbandoned({ ...order, now })
    if (!verdict.email) continue

    try {
      await prisma.order.update({
        where: { id: order.id },
        data: { abandonedEmailSentAt: new Date() },
      })
      await sendAbandonedCartEmail(order)
      sent++
    } catch (error) {
      failed++
      console.error('[cron/abandoned-cart] failed', {
        orderNumber: order.orderNumber,
        error: error instanceof Error ? error.message : String(error),
      })
      Sentry.captureException(error, { tags: { cron: 'abandoned-cart' } })
    }
  }

  console.info('[cron/abandoned-cart] run complete', {
    candidates: candidates.length,
    sent,
    failed,
  })

  return NextResponse.json({ ok: true, candidates: candidates.length, sent, failed })
}
