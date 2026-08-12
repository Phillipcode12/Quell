import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { formatUsd } from '@/lib/money'

const STATUS_LABELS: Record<string, { label: string; className: string }> = {
  pending: {
    label: 'Awaiting payment',
    className: 'bg-amber-50 text-amber-800',
  },
  rx_review: {
    label: 'Paid — pending pharmacist review',
    className: 'bg-sky-50 text-sky-800',
  },
  shipped: { label: 'Shipped', className: 'bg-emerald-50 text-emerald-800' },
  cancelled: { label: 'Cancelled', className: 'bg-neutral-100 text-neutral-700' },
}

export default async function AccountPage() {
  const user = await getCurrentUser()
  if (!user) redirect('/login?next=/account')

  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    include: { items: { include: { product: true } } },
  })

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Your orders</h1>
      <p className="mt-1 text-muted">
        Signed in as {user.name} ({user.email})
      </p>

      {orders.length === 0 ? (
        <p className="mt-8 rounded-xl border border-line bg-surface p-8 text-center text-muted">
          You have no orders yet.
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {orders.map((order) => {
            const status = STATUS_LABELS[order.status] ?? {
              label: order.status,
              className: 'bg-neutral-100 text-neutral-700',
            }

            return (
              <li
                key={order.id}
                className="rounded-xl border border-line bg-surface p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-muted">
                    #{order.id.slice(-8)}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.className}`}
                  >
                    {status.label}
                  </span>
                  <span className="ml-auto text-sm text-muted">
                    {order.createdAt.toLocaleDateString()}
                  </span>
                </div>

                <ul className="mt-4 space-y-1.5 text-sm">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex justify-between gap-4">
                      <span>
                        {item.quantity} × {item.product.name}{' '}
                        <span className="font-mono text-brand-dark">
                          {item.product.strength}
                        </span>
                      </span>
                      <span className="text-muted">
                        {formatUsd(item.unitPriceCents * item.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="text-sm text-muted">
                    Prescription: {order.prescriptionStatus}
                  </span>
                  <span className="font-semibold">
                    {formatUsd(order.totalCents)}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
