import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { csvFilename, toCsv } from '@/lib/csv'

/**
 * Abandoned carts as CSV.
 *
 * Same shape as the subscriber export: everything, not a page, because an
 * export that silently returns the first N looks complete. Same escaping too —
 * `toCsv` neutralises the cells a spreadsheet would execute, and these values
 * include a shipping name someone typed into a public form.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const admin = await getAdminUser()
  if (!admin) notFound()

  const orders = await prisma.order.findMany({
    where: { status: 'pending', paymentTransactionId: null },
    orderBy: { createdAt: 'desc' },
  })

  const csv = toCsv(
    [
      'email',
      'name',
      'order_number',
      'value_usd',
      'city',
      'state',
      'utm_source',
      'utm_campaign',
      'started',
      'recovery_email_sent',
    ],
    orders.map((o) => [
      o.email,
      o.shippingName ?? '',
      o.orderNumber,
      (o.totalCents / 100).toFixed(2),
      o.shippingCity ?? '',
      o.shippingState ?? '',
      o.utmSource ?? '',
      o.utmCampaign ?? '',
      o.createdAt.toISOString(),
      o.abandonedEmailSentAt ? o.abandonedEmailSentAt.toISOString() : '',
    ]),
  )

  return new Response(csv, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${csvFilename('quell-abandoned-carts')}"`,
      // Real names and addresses. Nothing should keep a copy.
      'cache-control': 'no-store, private',
    },
  })
}
