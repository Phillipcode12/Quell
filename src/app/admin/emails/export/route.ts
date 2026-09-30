import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { csvFilename, toCsv } from '@/lib/csv'
import { CONSENT_LABELS, SOURCE_LABELS, mergeContacts } from '@/lib/contacts'

/**
 * Every address the shop holds, as a CSV.
 *
 * ### The `use` column is not optional
 *
 * This file will end up in a spreadsheet and quite possibly in a mail tool, and
 * at that point nothing else says which of these people agreed to be emailed.
 * `lib/contacts` has the reasoning; the practical rule is that `opted in` is the
 * only value that means someone asked.
 *
 * ### Not paginated, like the others
 *
 * An export that returns "the first 500" is a trap: it looks complete. The page
 * caps what it renders, this does not.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const admin = await getAdminUser()

  // 404 rather than 403, matching the admin pages: do not confirm to a
  // non-admin that there is a list here to download.
  if (!admin) notFound()

  const [orders, users, subscribers] = await Promise.all([
    prisma.order.findMany({
      select: {
        email: true,
        shippingName: true,
        phone: true,
        status: true,
        totalCents: true,
        createdAt: true,
      },
    }),
    prisma.user.findMany({
      select: { email: true, name: true, createdAt: true },
    }),
    prisma.subscriber.findMany({ select: { email: true, createdAt: true } }),
  ])

  const contacts = mergeContacts({ orders, users, subscribers })

  const csv = toCsv(
    [
      'email',
      'name',
      'phone',
      'known_from',
      'use',
      'orders',
      'spent_usd',
      'first_seen',
      'last_seen',
    ],
    contacts.map((c) => [
      c.email,
      c.name ?? '',
      c.phone ?? '',
      c.sources.map((s) => SOURCE_LABELS[s]).join(', '),
      CONSENT_LABELS[c.consent],
      c.orders,
      // Plain decimal rather than a currency string: a spreadsheet can sum it.
      (c.spentCents / 100).toFixed(2),
      c.firstSeen.toISOString(),
      c.lastSeen.toISOString(),
    ]),
  )

  return new Response(csv, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${csvFilename('quell-emails')}"`,
      // This is a list of real people's addresses. Nothing should keep a copy.
      'cache-control': 'no-store, private',
    },
  })
}
