import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { AdminTabs } from '@/components/admin/AdminTabs'
import { SendRecoveryButton } from '@/components/admin/SendRecoveryButton'
import { formatUsd } from '@/lib/money'
import { ABANDON_WINDOW_MS, shouldEmailAbandoned } from '@/lib/abandoned-cart'

export const metadata: Metadata = { title: 'Abandoned carts' }

/**
 * Orders that were started and never paid for.
 *
 * These are the most valuable email addresses the site collects. They are not
 * curious visitors — they typed a name, a full shipping address and an email,
 * and stopped at the payment page. **The first one sat here unnoticed for nine
 * days** (§33), which is the reason this tab exists at all: the information
 * was always in the Orders list, and nobody was looking at it.
 */

export const dynamic = 'force-dynamic'

function age(from: Date, now: Date) {
  const hours = Math.floor((now.getTime() - from.getTime()) / 3_600_000)
  if (hours < 1) return 'just now'
  if (hours < 48) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

export default async function AdminAbandonedPage() {
  const admin = await getAdminUser()
  if (!admin) notFound()

  const now = new Date()
  const orders = await prisma.order.findMany({
    where: { status: 'pending', paymentTransactionId: null },
    orderBy: { createdAt: 'desc' },
    take: 500,
  })

  const value = orders.reduce((a, o) => a + o.totalCents, 0)
  const emailed = orders.filter((o) => o.abandonedEmailSentAt).length
  const queued = orders.filter((o) => shouldEmailAbandoned({ ...o, now }).email).length

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-white">
        Abandoned carts
      </h1>
      <AdminTabs current="abandoned" />

      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {[
          { label: 'Carts abandoned', value: orders.length },
          { label: 'Value left behind', value: formatUsd(value) },
          { label: 'Emailed', value: emailed },
          { label: 'Email due', value: queued },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-line bg-surface p-5">
            <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
              {stat.label}
            </div>
            <div className="mt-2 text-2xl font-semibold tabular-nums text-white">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Orders where someone filled in their address and the payment never
          completed. Nothing was charged. A single recovery email goes out once
          the cart is two hours old, and never after seven days.
        </p>
        <a
          href="/admin/abandoned/export"
          className="rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-white transition hover:border-brand hover:bg-brand/10"
        >
          Download CSV
        </a>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[56rem] text-left text-sm">
          <thead className="border-b border-line bg-surface-2 text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Order</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 text-right font-medium">Value</th>
              <th className="px-4 py-3 font-medium">Campaign</th>
              <th className="px-4 py-3 font-medium">Started</th>
              <th className="px-4 py-3 font-medium">Recovery email</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td className="px-4 py-4 text-muted" colSpan={7}>
                  None. Every order that started has either completed or been
                  cancelled.
                </td>
              </tr>
            ) : (
              orders.map((o) => {
                const verdict = shouldEmailAbandoned({ ...o, now })
                const tooOld = now.getTime() - o.createdAt.getTime() > ABANDON_WINDOW_MS
                return (
                  <tr key={o.id} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 font-medium text-white">{o.orderNumber}</td>
                    <td className="px-4 py-3">{o.email}</td>
                    <td className="px-4 py-3 text-muted">{o.shippingName ?? '—'}</td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {formatUsd(o.totalCents)}
                    </td>
                    <td className="px-4 py-3 text-muted">
                      {o.utmCampaign
                        ? `${o.utmSource ?? 'unknown'} · ${o.utmCampaign}`
                        : o.utmSource ?? '—'}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-muted">
                      {age(o.createdAt, now)}
                    </td>
                    <td className="px-4 py-3 text-muted">
                      <span className="flex flex-wrap items-center gap-2">
                        {o.abandonedEmailSentAt ? (
                          <span className="text-brand-light">
                            sent {age(o.abandonedEmailSentAt, now)}
                          </span>
                        ) : verdict.email ? (
                          <span>due next run</span>
                        ) : tooOld ? (
                          /* Predates the window, or the feature. Saying so
                             beats a blank, which reads as a bug — and it is
                             the case the manual button exists for. */
                          <span title="older than seven days">too old for the automatic run</span>
                        ) : (
                          <span>waiting (under 2h)</span>
                        )}
                        <SendRecoveryButton
                          orderId={o.id}
                          alreadySent={Boolean(o.abandonedEmailSentAt)}
                        />
                      </span>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
