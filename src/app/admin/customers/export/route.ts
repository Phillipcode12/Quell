import { notFound } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { csvFilename, toCsv } from '@/lib/csv'
import { listCustomers } from '@/lib/customers'

/**
 * The customer list as a CSV.
 *
 * Built from `listCustomers`, the same function the page renders, so the file
 * and the screen can never disagree about who counts as a customer.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const admin = await getAdminUser()

  // 404 rather than 403, matching the admin pages.
  if (!admin) notFound()

  const customers = await listCustomers()

  const csv = toCsv(
    [
      'email',
      'name',
      'type',
      'orders',
      'spent_usd',
      'first_order',
      'last_order',
    ],
    customers.map((c) => [
      c.email,
      c.name,
      c.hasAccount ? 'Account' : 'Guest',
      c.orderCount,
      // Plain decimal rather than a currency string: a spreadsheet can sum it.
      (c.totalCents / 100).toFixed(2),
      c.firstOrder.toISOString(),
      c.lastOrder.toISOString(),
    ]),
  )

  return new Response(csv, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="${csvFilename('quell-customers')}"`,
      // This is a list of real people's addresses. Nothing should keep a copy.
      'cache-control': 'no-store, private',
    },
  })
}
