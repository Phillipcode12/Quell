import { notFound } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { csvFilename, toCsv } from '@/lib/csv'
import {
  joinMonthly,
  monthlySales,
  monthlyUnits,
  monthlyVisits,
} from '@/lib/analytics'

/**
 * Traffic and sales month by month, as a CSV.
 *
 * The monthly series rather than the daily one: this is the file somebody
 * charts, and fourteen days of daily rows is a view of the current fortnight
 * rather than a record. All time, so the sheet is the whole history.
 *
 * > **Source columns before 2026-09-30 are not meaningful.** `/api/track` read
 * > the wrong referrer until then and recorded every visit as direct, so the
 * > `search` and `link` columns are zero for that period because they were
 * > never measured -- not because nobody arrived that way. PROJECT_STATE
 * > section 37 has the detail. The rows are exported as they are rather than
 * > blanked, because the total visit counts for those months are real.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const admin = await getAdminUser()

  // 404 rather than 403, matching the admin pages.
  if (!admin) notFound()

  const [visits, sales, units] = await Promise.all([
    monthlyVisits(),
    monthlySales(),
    monthlyUnits(),
  ])

  const months = joinMonthly(visits, sales, units)

  const csv = toCsv(
    [
      'month',
      'visits',
      'search',
      'link',
      'direct',
      'orders',
      'units',
      'revenue_usd',
      'conversion_pct',
    ],
    months.map((m) => [
      m.month,
      m.visits,
      m.search,
      m.link,
      m.direct,
      m.orders,
      m.units,
      // Plain decimals rather than formatted strings: a spreadsheet can sum
      // and chart these, where "$39.99" and "2.1%" are text.
      (m.revenueCents / 100).toFixed(2),
      m.conversionPct === null ? '' : m.conversionPct.toFixed(2),
    ]),
  )

  return new Response(csv, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${csvFilename('quell-traffic')}"`,
      'cache-control': 'no-store, private',
    },
  })
}
