import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { AdminTabs } from '@/components/admin/AdminTabs'
import { BANDS, MAX_SCORE } from '@/lib/self-check'

export const metadata: Metadata = { title: 'Self-check subscribers' }

/**
 * Everyone who has given an email through the dry eye self-check.
 *
 * Deliberately a separate tab from Customers: those people gave money, these
 * gave an address. Mixing them would make both counts meaningless.
 *
 * **The score is the useful column, not the email.** Someone at 18 with an
 * evaporation pattern has told you they have daily symptoms that ordinary
 * drops are not fixing; someone at 2 was curious. Treating those two as one
 * list wastes the only thing this feature collects that a signup form would
 * not.
 */

export const dynamic = 'force-dynamic'

function formatDate(date: Date) {
  return date.toISOString().slice(0, 16).replace('T', ' ')
}

export default async function AdminSubscribersPage() {
  const admin = await getAdminUser()

  // 404 rather than 403: don't confirm the route exists to non-admins.
  if (!admin) notFound()

  const [subscribers, total] = await Promise.all([
    prisma.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
      take: 500,
    }),
    prisma.subscriber.count(),
  ])

  const scored = subscribers.filter((s) => s.score !== null)
  const evaporative = scored.filter((s) => s.evaporative).length
  const flagged = subscribers.filter((s) => s.safetyFlag).length
  const averageScore = scored.length
    ? Math.round(scored.reduce((a, s) => a + (s.score ?? 0), 0) / scored.length)
    : null

  const bandLabel = (id: string | null) =>
    BANDS.find((b) => b.id === id)?.title ?? '—'

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-white">
        Self-check
      </h1>
      <AdminTabs current="subscribers" />

      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {[
          { label: 'Emails collected', value: total },
          {
            label: 'Average score',
            value: averageScore === null ? '—' : `${averageScore} / ${MAX_SCORE}`,
          },
          { label: 'Evaporation pattern', value: evaporative },
          { label: 'Safety flagged', value: flagged },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-line bg-surface p-5"
          >
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
          Everyone who completed the self-check. Retaking it updates the same
          row rather than adding another, so this is people, not submissions.
        </p>
        <a
          href="/admin/subscribers/export"
          className="rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-white transition hover:border-brand hover:bg-brand/10"
        >
          Download CSV
        </a>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[56rem] text-left text-sm">
          <thead className="border-b border-line bg-surface-2 text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 text-right font-medium">Score</th>
              <th className="px-4 py-3 font-medium">Band</th>
              <th className="px-4 py-3 font-medium">Pattern</th>
              <th className="px-4 py-3 font-medium">Campaign</th>
              <th className="px-4 py-3 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length === 0 ? (
              <tr>
                <td className="px-4 py-4 text-muted" colSpan={6}>
                  Nobody yet. This fills in as people complete the self-check.
                </td>
              </tr>
            ) : (
              subscribers.map((s) => (
                <tr key={s.id} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-white">{s.email}</td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {s.score === null ? '—' : s.score}
                  </td>
                  <td className="px-4 py-3">
                    {s.safetyFlag ? (
                      /* Not hidden and not excluded — Phillip's call on
                         2026-09-16 is that these people can be emailed. Shown
                         because it is the one thing about a row that changes
                         how you might read it: there is no score because they
                         reported eye pain or a change in vision. */
                      <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-300">
                        Safety flagged
                      </span>
                    ) : (
                      bandLabel(s.band)
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {s.evaporative === null
                      ? '—'
                      : s.evaporative
                        ? 'Evaporation'
                        : 'Unclear'}
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {s.utmCampaign
                      ? `${s.utmSource ?? 'unknown'} · ${s.utmCampaign}`
                      : s.utmSource ?? '—'}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-muted">
                    {formatDate(s.createdAt)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {total > subscribers.length && (
        <p className="mt-3 text-xs text-muted">
          Showing the most recent {subscribers.length} of {total}. The CSV
          contains all of them.
        </p>
      )}
    </div>
  )
}
