import { notFound } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { csvFilename, toCsv } from '@/lib/csv'
import { campaignBreakdown } from '@/lib/analytics'

/**
 * The campaign table as a CSV, last 30 days.
 *
 * Its own file rather than a sheet in the traffic export, because it answers a
 * different question: not "how is the shop doing" but "was that advert worth
 * what it cost".
 *
 * **`revenue_per_visit_usd` is the column to sort on**, not conversion -- it is
 * the one directly comparable to what a click costs. 2% conversion on $60
 * orders beats 4% on $30, and only this column says so (PROJECT_STATE section
 * 29).
 */

export const dynamic = 'force-dynamic'

const WINDOW_DAYS = 30

export async function GET() {
  const admin = await getAdminUser()

  // 404 rather than 403, matching the admin pages.
  if (!admin) notFound()

  const since = new Date(Date.now() - WINDOW_DAYS * 24 * 60 * 60 * 1000)
  const campaigns = await campaignBreakdown(since)

  const csv = toCsv(
    [
      'campaign',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'visits',
      'orders',
      'revenue_usd',
      'conversion_pct',
      'revenue_per_visit_usd',
    ],
    campaigns.map((c) => [
      c.label,
      c.source ?? '',
      c.medium ?? '',
      c.campaign ?? '',
      c.visits,
      c.orders,
      (c.revenueCents / 100).toFixed(2),
      c.conversion === null ? '' : c.conversion.toFixed(2),
      c.revenuePerVisitCents === null
        ? ''
        : (c.revenuePerVisitCents / 100).toFixed(2),
    ]),
  )

  return new Response(csv, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${csvFilename('quell-campaigns')}"`,
      'cache-control': 'no-store, private',
    },
  })
}
