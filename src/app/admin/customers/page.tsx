import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { formatUsd } from '@/lib/money'
import { listCustomers, type Customer } from '@/lib/customers'
import { AdminTabs } from '@/components/admin/AdminTabs'
import {
  AdminHeader,
  AdminPage,
  AdminStats,
  AdminToolbar,
  Chip,
  DataTable,
  formatAdminDate,
  type Column,
} from '@/components/admin/AdminLayout'

export const metadata: Metadata = { title: 'Customers' }

/**
 * Everyone who has actually bought something.
 *
 * Keyed on email rather than on the User table, because most buyers will not
 * have an account -- guest checkout is the default path and an account buys the
 * customer nothing at purchase time. Listing only registered users would show a
 * fraction of the people who have paid.
 *
 * "Bought" means paid or shipped. A pending order is a checkout that started
 * and may never complete, and a cancelled one is not a customer.
 *
 * The grouping itself lives in `lib/customers` so the CSV route builds the same
 * list from the same code rather than a second copy of the rules.
 */

export const dynamic = 'force-dynamic'

const columns: Column<Customer>[] = [
  {
    header: 'Name',
    cell: (c) =>
      c.name ? (
        <span className="text-white">{c.name}</span>
      ) : (
        <span className="text-muted">—</span>
      ),
  },
  {
    header: 'Email',
    cell: (c) => (
      <a href={`mailto:${c.email}`} className="text-brand-light hover:underline">
        {c.email}
      </a>
    ),
  },
  {
    header: 'Type',
    cell: (c) => (
      <Chip tone={c.hasAccount ? 'brand' : 'neutral'}>
        {c.hasAccount ? 'Account' : 'Guest'}
      </Chip>
    ),
  },
  { header: 'Orders', align: 'right', cell: (c) => c.orderCount },
  { header: 'Spent', align: 'right', cell: (c) => formatUsd(c.totalCents) },
  {
    header: 'First order',
    cell: (c) => (
      <span className="tabular-nums text-muted">
        {formatAdminDate(c.firstOrder)}
      </span>
    ),
  },
  {
    header: 'Last order',
    cell: (c) => (
      <span className="tabular-nums text-muted">
        {formatAdminDate(c.lastOrder)}
      </span>
    ),
  },
]

export default async function AdminCustomersPage() {
  const admin = await getAdminUser()

  // 404 rather than 403: don't confirm the route exists to non-admins.
  if (!admin) notFound()

  const customers = await listCustomers()

  const repeatCustomers = customers.filter((c) => c.orderCount > 1).length
  const lifetimeCents = customers.reduce((sum, c) => sum + c.totalCents, 0)

  return (
    <AdminPage>
      <AdminHeader title="Customers" subtitle={`Signed in as ${admin.email}`} />
      <AdminTabs current="customers" />

      <AdminStats
        stats={[
          { label: 'Customers', value: customers.length },
          { label: 'Ordered more than once', value: repeatCustomers },
          { label: 'Lifetime revenue', value: formatUsd(lifetimeCents) },
        ]}
      />

      <AdminToolbar
        description="Everyone who has paid, grouped by email so guests and account holders appear once each. A checkout that was started but never paid is not here — that is the Abandoned tab."
        exportHref="/admin/customers/export"
      />

      <DataTable
        columns={columns}
        rows={customers}
        rowKey={(c) => c.email}
        empty="No customers yet. This fills in as orders are paid."
        minWidth="58rem"
      />
    </AdminPage>
  )
}
