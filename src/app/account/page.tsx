import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { formatUsd } from '@/lib/money'
import { SignOutButton } from '@/components/SignOutButton'
import { ManageSubscriptionButton } from '@/components/ManageSubscriptionButton'

const STATUS_LABELS: Record<string, { label: string; className: string }> = {
  pending: {
    label: 'Awaiting payment',
    className: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
  },
  paid: {
    label: 'Paid — preparing to ship',
    className: 'border-brand/40 bg-brand/10 text-brand-light',
  },
  shipped: {
    label: 'Shipped',
    className: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  },
  cancelled: {
    label: 'Cancelled',
    className: 'border-line bg-surface-2 text-muted',
  },
}

export default async function AccountPage() {
  const user = await getCurrentUser()
  if (!user) redirect('/login?next=/account')

  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    include: { items: { include: { product: true } } },
  })

  const hasSubscription = orders.some(
    (o) =>
      o.purchaseMode === 'subscription' &&
      ['paid', 'shipped'].includes(o.status),
  )

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Your orders</h1>
          <p className="mt-2 text-muted">
            Signed in as {user.name} ({user.email})
          </p>
        </div>
        <SignOutButton />
      </div>

      {hasSubscription && (
        <section className="mt-8 rounded-2xl border border-brand/40 bg-brand/10 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold text-white">
                Monthly refill subscription
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Your next bottle ships automatically. Update payment details,
                change your address, or cancel any time.
              </p>
            </div>
            <ManageSubscriptionButton />
          </div>
        </section>
      )}

      {orders.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-line bg-surface p-10 text-center text-muted">
          You have no orders yet.
        </p>
      ) : (
        <ul className="mt-10 space-y-4">
          {orders.map((order) => {
            const status = STATUS_LABELS[order.status] ?? {
              label: order.status,
              className: 'border-line bg-surface-2 text-muted',
            }

            return (
              <li
                key={order.id}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-muted">
                    #{order.id.slice(-8)}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${status.className}`}
                  >
                    {status.label}
                  </span>
                  {order.purchaseMode === 'subscription' && (
                    <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand-light">
                      Refill
                    </span>
                  )}
                  <span className="ml-auto text-sm text-muted">
                    {order.createdAt.toLocaleDateString()}
                  </span>
                </div>

                <ul className="mt-5 space-y-1.5 text-sm">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex justify-between gap-4">
                      <span className="text-white">
                        {item.quantity} × {item.product.name}{' '}
                        <span className="text-muted">
                          ({item.product.sizeLabel})
                        </span>
                      </span>
                      <span className="text-muted">
                        {formatUsd(item.unitPriceCents * item.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-5 space-y-1.5 border-t border-line pt-4 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd className="text-muted">
                      {formatUsd(order.subtotalCents)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Shipping</dt>
                    <dd
                      className={
                        order.shippingCents === 0 ? 'text-brand-light' : 'text-muted'
                      }
                    >
                      {order.shippingCents === 0
                        ? 'Free'
                        : formatUsd(order.shippingCents)}
                    </dd>
                  </div>
                  <div className="flex justify-between pt-1.5 text-base">
                    <dt className="font-medium text-white">Total</dt>
                    <dd className="font-semibold text-white">
                      {formatUsd(order.totalCents)}
                    </dd>
                  </div>
                </dl>

                {order.shippingLine1 && (
                  <div className="mt-4 border-t border-line pt-4 text-sm">
                    <p className="font-medium text-white">Shipping to</p>
                    <address className="mt-1 not-italic leading-relaxed text-muted">
                      {order.shippingName && <>{order.shippingName}<br /></>}
                      {order.shippingLine1}
                      <br />
                      {order.shippingLine2 && <>{order.shippingLine2}<br /></>}
                      {[order.shippingCity, order.shippingState]
                        .filter(Boolean)
                        .join(', ')}{' '}
                      {order.shippingPostalCode}
                    </address>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
