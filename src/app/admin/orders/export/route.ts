import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { csvFilename, toCsv } from '@/lib/csv'

/**
 * Every order as a CSV, one row each.
 *
 * The Orders tab itself stays a list of cards rather than becoming a table, and
 * that is deliberate: it is the view someone packs a box from, so the address
 * and the line items need to be readable at a glance, not squeezed into cells.
 * This route is how the same data gets into a spreadsheet for records.
 *
 * ### Items are flattened into one cell
 *
 * A row per line item would be the "correct" shape for a database and the wrong
 * shape for this file, which exists so a person can see one order per row and
 * sum the money column. Quantities and product names go in a single `items`
 * cell instead. If per-item analysis is ever needed it wants its own export
 * rather than a reshaped version of this one.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const admin = await getAdminUser()

  // 404 rather than 403, matching the admin pages.
  if (!admin) notFound()

  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      items: { include: { product: { select: { name: true } } } },
      user: { select: { name: true } },
    },
  })

  const usd = (cents: number) => (cents / 100).toFixed(2)

  const csv = toCsv(
    [
      'order_number',
      'placed',
      'status',
      'email',
      'name',
      'phone',
      'items',
      'units',
      'subtotal_usd',
      'shipping_usd',
      'total_usd',
      'address_1',
      'address_2',
      'city',
      'state',
      'postal_code',
      'country',
      'carrier',
      'tracking_number',
      'shipped',
      'transaction_id',
      'utm_source',
      'utm_medium',
      'utm_campaign',
    ],
    orders.map((o) => [
      o.orderNumber,
      o.createdAt.toISOString(),
      o.status,
      o.email,
      o.user?.name ?? o.shippingName ?? '',
      o.phone ?? '',
      o.items.map((i) => `${i.quantity} x ${i.product.name}`).join('; '),
      o.items.reduce((sum, i) => sum + i.quantity, 0),
      usd(o.subtotalCents),
      usd(o.shippingCents),
      usd(o.totalCents),
      o.shippingLine1 ?? '',
      o.shippingLine2 ?? '',
      o.shippingCity ?? '',
      o.shippingState ?? '',
      o.shippingPostalCode ?? '',
      o.shippingCountry ?? '',
      o.trackingCarrier ?? '',
      o.trackingNumber ?? '',
      o.shippedAt?.toISOString() ?? '',
      o.paymentTransactionId ?? '',
      o.utmSource ?? '',
      o.utmMedium ?? '',
      o.utmCampaign ?? '',
    ]),
  )

  return new Response(csv, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${csvFilename('quell-orders')}"`,
      // Names, addresses and phone numbers. Nothing should keep a copy.
      'cache-control': 'no-store, private',
    },
  })
}
