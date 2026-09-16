import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { csvFilename, toCsv } from '@/lib/csv'
import { BANDS } from '@/lib/self-check'

/**
 * The subscriber list as a CSV, for uploading somewhere that sends email.
 *
 * ### Everyone is included, including safety-flagged rows
 *
 * Phillip's decision on 2026-09-16, asked and answered explicitly: people who
 * reported eye pain or a change in vision may still be emailed.
 *
 * **The flag travels with them as a column rather than being dropped.** The
 * choice is his, but silently discarding the fact would make the export a
 * worse record than the database it came from, and it would take a second
 * decision — invisible to whoever makes it — to get it back. As a column it
 * costs nothing and can be filtered in the spreadsheet if that view ever
 * changes.
 *
 * ### Not paginated
 *
 * An export that returns "the first 500" is a trap: it looks complete. This
 * streams every row, which is fine at any list size this shop will reach in
 * years — and if it ever is not, the failure is a slow request rather than a
 * quietly truncated list.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const admin = await getAdminUser()

  // 404 rather than 403, matching the admin pages: do not confirm to a
  // non-admin that there is a list here to download.
  if (!admin) notFound()

  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: 'desc' },
  })

  const bandTitle = (id: string | null) =>
    BANDS.find((b) => b.id === id)?.title ?? ''

  const csv = toCsv(
    [
      'email',
      'score',
      'band',
      'pattern',
      'safety_flagged',
      'source',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'joined',
    ],
    subscribers.map((s) => [
      s.email,
      s.score ?? '',
      bandTitle(s.band),
      s.evaporative === null ? '' : s.evaporative ? 'evaporation' : 'unclear',
      s.safetyFlag ? 'yes' : 'no',
      s.source,
      s.utmSource ?? '',
      s.utmMedium ?? '',
      s.utmCampaign ?? '',
      s.createdAt.toISOString(),
    ]),
  )

  return new Response(csv, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${csvFilename('quell-subscribers')}"`,
      // This is a list of real people's addresses. Nothing should keep a copy.
      'cache-control': 'no-store, private',
    },
  })
}
