import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser, adminEmails } from '@/lib/admin'
import { formatUsd } from '@/lib/money'
import { isEmailConfigured } from '@/lib/email'
import { stockState } from '@/lib/inventory'
import { OrderActions, StockEditor } from '@/components/admin/OrderActions'

export const metadata: Metadata = { title: 'Orders' }

const STATUS_STYLES: Record<string, string> = {
  pending: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
  paid: 'border-brand/40 bg-brand/10 text-brand-light',
  shipped: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  cancelled: 'border-line bg-surface-2 text-muted',
}

export default async function AdminOrdersPage() {
  const admin = await getAdminUser()

  // 404 rather than 403: don't confirm the route exists to non-admins.
  if (!admin) notFound()

  const [orders, products] = await Promise.all([
    prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        items: { include: { product: true } },
        user: { select: { email: true, name: true } },
      },
      take: 200,
    }),
    prisma.product.findMany({ orderBy: { name: 'asc' } }),
  ])

  const paidOrders = orders.filter((o) =>
    ['paid', 'shipped'].includes(o.status),
  )
  const revenueCents = paidOrders.reduce((sum, o) => sum + o.totalCents, 0)
  const awaitingFulfilment = orders.filter((o) => o.status === 'paid').length

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Orders</h1>
          <p className="mt-2 text-muted">Signed in as {admin.email}</p>
        </div>
        <Link
          href="/"
          className="rounded-md border border-line px-3 py-1.5 text-sm text-muted transition hover:border-brand hover:text-white"
        >
          Back to site
        </Link>
      </div>

      {!isEmailConfigured() && (
        <p className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-200">
          <strong className="font-semibold">Email is not configured.</strong>{' '}
          Order confirmations and shipping notices are being written to the
          server console instead of sent. Set <code>RESEND_API_KEY</code> to
          deliver them.
        </p>
      )}

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-surface p-5">
          <dt className="text-sm text-muted">Awaiting fulfilment</dt>
          <dd className="mt-1 text-3xl font-semibold text-white">
            {awaitingFulfilment}
          </dd>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5">
          <dt className="text-sm text-muted">Paid orders</dt>
          <dd className="mt-1 text-3xl font-semibold text-white">
            {paidOrders.length}
          </dd>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5">
          <dt className="text-sm text-muted">Revenue</dt>
          <dd className="mt-1 text-3xl font-semibold text-white">
            {formatUsd(revenueCents)}
          </dd>
        </div>
      </dl>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Inventory</h2>
        <ul className="mt-4 space-y-3">
          {products.map((p) => {
            const state = stockState(p.stockQuantity, p.lowStockAt)
            return (
              <li
                key={p.id}
                className="flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-surface p-5"
              >
                <div className="flex-1">
                  <p className="font-medium text-white">{p.name}</p>
                  <p className="text-sm text-muted">
                    {formatUsd(p.priceCents)} · {p.sizeLabel}
                  </p>
                </div>
                {state !== 'in_stock' && (
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
                      state === 'out_of_stock'
                        ? 'border-red-500/40 bg-red-500/10 text-red-300'
                        : 'border-amber-500/40 bg-amber-500/10 text-amber-200'
                    }`}
                  >
                    {state === 'out_of_stock' ? 'Out of stock' : 'Low stock'}
                  </span>
                )}
                <StockEditor productId={p.id} stockQuantity={p.stockQuantity} />
              </li>
            )
          })}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">All orders</h2>

        {orders.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-line bg-surface p-10 text-center text-muted">
            No orders yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-muted">
                    #{order.id.slice(-8).toUpperCase()}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
                      STATUS_STYLES[order.status] ?? STATUS_STYLES.cancelled
                    }`}
                  >
                    {order.status}
                  </span>
                  {order.purchaseMode === 'subscription' && (
                    <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand-light">
                      subscription
                    </span>
                  )}
                  <span className="ml-auto text-sm text-muted">
                    {order.createdAt.toLocaleString()}
                  </span>
                </div>

                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-white">Customer</p>
                    <p className="mt-1 text-sm text-muted">
                      {/* Guests have no account, so fall back to the name on
                          the shipping address. The email always lives on the
                          order itself. */}
                      {order.user?.name ?? order.shippingName ?? 'Guest'}
                      {!order.user && (
                        <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs">
                          guest
                        </span>
                      )}
                      <br />
                      <a
                        href={`mailto:${order.email}`}
                        className="text-brand-light hover:underline"
                      >
                        {order.email}
                      </a>
                    </p>

                    <p className="mt-4 text-sm font-semibold text-white">
                      Items
                    </p>
                    <ul className="mt-1 space-y-1 text-sm text-muted">
                      {order.items.map((item) => (
                        <li key={item.id}>
                          {item.quantity} × {item.product.name} —{' '}
                          {formatUsd(item.unitPriceCents * item.quantity)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Ship to
                    </p>
                    {order.shippingLine1 ? (
                      <address className="mt-1 text-sm not-italic leading-relaxed text-muted">
                        {order.shippingName && (
                          <>
                            {order.shippingName}
                            <br />
                          </>
                        )}
                        {order.shippingLine1}
                        <br />
                        {order.shippingLine2 && (
                          <>
                            {order.shippingLine2}
                            <br />
                          </>
                        )}
                        {[order.shippingCity, order.shippingState]
                          .filter(Boolean)
                          .join(', ')}{' '}
                        {order.shippingPostalCode}
                        <br />
                        {order.shippingCountry}
                      </address>
                    ) : (
                      <p className="mt-1 text-sm text-muted">
                        No address captured yet.
                      </p>
                    )}

                    <dl className="mt-4 space-y-1 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted">Subtotal</dt>
                        <dd className="text-muted">
                          {formatUsd(order.subtotalCents)}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted">Shipping</dt>
                        <dd className="text-muted">
                          {order.shippingCents === 0
                            ? 'Free'
                            : formatUsd(order.shippingCents)}
                        </dd>
                      </div>
                      <div className="flex justify-between border-t border-line pt-1">
                        <dt className="font-medium text-white">Total</dt>
                        <dd className="font-semibold text-white">
                          {formatUsd(order.totalCents)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <OrderActions orderId={order.id} status={order.status} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-10 text-xs leading-relaxed text-muted">
        Admin access is granted by the ADMIN_EMAILS environment variable.
        {adminEmails().length === 0
          ? ' It is currently unset, so nobody has access.'
          : ` Currently ${adminEmails().length} address(es).`}
      </p>
    </div>
  )
}
