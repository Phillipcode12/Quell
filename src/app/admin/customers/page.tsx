import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { formatUsd } from '@/lib/money'
import { AdminTabs } from '@/components/admin/AdminTabs'

export const metadata: Metadata = { title: 'Customers' }

/**
 * Everyone who has actually bought something.
 *
 * Keyed on email rather than on the User table, because most buyers will not
 * have an account — guest checkout is the default path and an account buys the
 * customer nothing at purchase time. Listing only registered users would show a
 * fraction of the people who have paid.
 *
 * "Bought" means paid or shipped. A pending order is a checkout that started
 * and may never complete, and a cancelled one is not a customer.
 */

type Customer = {
  email: string
  name: string
  hasAccount: boolean
  orderCount: number
  totalCents: number
  firstOrder: Date
  lastOrder: Date
}

export default async function AdminCustomersPage() {
  const admin = await getAdminUser()

  // 404 rather than 403: don't confirm the route exists to non-admins.
  if (!admin) notFound()

  const orders = await prisma.order.findMany({
    where: { status: { in: ['paid', 'shipped'] } },
    orderBy: { createdAt: 'asc' },
    select: {
      email: true,
      shippingName: true,
      totalCents: true,
      createdAt: true,
      user: { select: { name: true } },
    },
  })

  // Emails are stored lowercased at checkout, but group defensively — one
  // customer appearing twice because of casing would be worse than useless.
  const byEmail = new Map<string, Customer>()

  for (const order of orders) {
    const key = order.email.toLowerCase()
    const existing = byEmail.get(key)

    if (existing) {
      existing.orderCount += 1
      existing.totalCents += order.totalCents
      existing.lastOrder = order.createdAt
      // A later order carries a better name than an earlier blank one, and an
      // account name beats an address label.
      if (order.user?.name) {
        existing.name = order.user.name
        existing.hasAccount = true
      } else if (!existing.name && order.shippingName) {
        existing.name = order.shippingName
      }
      continue
    }

    byEmail.set(key, {
      email: key,
      name: order.user?.name ?? order.shippingName ?? '',
      hasAccount: Boolean(order.user),
      orderCount: 1,
      totalCents: order.totalCents,
      firstOrder: order.createdAt,
      lastOrder: order.createdAt,
    })
  }

  const customers = [...byEmail.values()].sort(
    (a, b) => b.lastOrder.getTime() - a.lastOrder.getTime(),
  )

  const repeatCustomers = customers.filter((c) => c.orderCount > 1).length
  const lifetimeCents = customers.reduce((sum, c) => sum + c.totalCents, 0)

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Customers</h1>
          <p className="mt-2 text-muted">Signed in as {admin.email}</p>
        </div>
        <Link
          href="/"
          className="rounded-md border border-line px-3 py-1.5 text-sm text-muted transition hover:border-brand hover:text-white"
        >
          Back to site
        </Link>
      </div>

      <AdminTabs current="customers" />

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-line bg-surface-2 p-5">
          <dt className="text-sm text-muted">Customers</dt>
          <dd className="mt-1 text-2xl font-semibold">{customers.length}</dd>
        </div>
        <div className="rounded-xl border border-line bg-surface-2 p-5">
          <dt className="text-sm text-muted">Ordered more than once</dt>
          <dd className="mt-1 text-2xl font-semibold">{repeatCustomers}</dd>
        </div>
        <div className="rounded-xl border border-line bg-surface-2 p-5">
          <dt className="text-sm text-muted">Lifetime revenue</dt>
          <dd className="mt-1 text-2xl font-semibold">
            {formatUsd(lifetimeCents)}
          </dd>
        </div>
      </dl>

      {customers.length === 0 ? (
        <p className="mt-8 rounded-xl border border-line bg-surface-2 p-6 text-muted">
          No customers yet. This fills in as orders are paid — a checkout that
          was started but never paid does not count.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[46rem] text-left text-sm">
            <thead className="border-b border-line bg-surface-2 text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 text-right font-medium">Orders</th>
                <th className="px-4 py-3 text-right font-medium">Spent</th>
                <th className="px-4 py-3 font-medium">Last order</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.email} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-white">
                    {customer.name || <span className="text-muted">—</span>}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${customer.email}`}
                      className="text-brand-light hover:underline"
                    >
                      {customer.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs ${
                        customer.hasAccount
                          ? 'border-brand/40 bg-brand/10 text-brand-light'
                          : 'border-line bg-surface-2 text-muted'
                      }`}
                    >
                      {customer.hasAccount ? 'Account' : 'Guest'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {customer.orderCount}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {formatUsd(customer.totalCents)}
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {customer.lastOrder.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
