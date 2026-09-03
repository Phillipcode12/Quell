import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { AdminTabs } from '@/components/admin/AdminTabs'
import {
  dailyVisits,
  liveVisitors,
  sourceBreakdown,
  topReferrers,
  visitsSince,
  LIVE_WINDOW_MS,
  RETENTION_DAYS,
  SOURCE_LABELS,
  SOURCE_NOTES,
} from '@/lib/analytics'

export const metadata: Metadata = { title: 'Traffic' }

/**
 * Who is visiting the shop.
 *
 * No route segment config here on purpose. The numbers move minute to minute
 * and must never come from a cache, and they don't: getAdminUser reads the
 * session cookie, which makes the route dynamic on its own. That is the same
 * thing keeping /admin/orders and /admin/customers current, and it avoids
 * `export const dynamic`, which Next 16 no longer lists among the route
 * segment options.
 */

function startOfUtcDay(now: Date): Date {
  const d = new Date(now)
  d.setUTCHours(0, 0, 0, 0)
  return d
}

function daysAgo(now: Date, days: number): Date {
  return new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
}

/**
 * A bar per day.
 *
 * Plain divs rather than a charting library: it is one series, the page is
 * already a server component, and a dependency to draw fourteen rectangles
 * would ship more JavaScript than the whole admin section.
 */
function DailyChart({ data }: { data: { day: string; visits: number }[] }) {
  const peak = Math.max(1, ...data.map((d) => d.visits))

  return (
    <div className="mt-8 rounded-xl border border-line bg-surface-2 p-5">
      <h2 className="text-sm font-medium text-muted">Visits per day, last 14 days</h2>
      <div className="mt-5 flex gap-1.5">
        {data.map((day) => {
          const height = day.visits === 0 ? 2 : Math.max(4, (day.visits / peak) * 100)
          return (
            <div key={day.day} className="flex flex-1 flex-col items-center gap-2">
              {/*
                The fixed height lives on this wrapper, not on the row. A
                percentage height only resolves against a parent with a
                definite one, and a column flex item sized by its content is
                not definite — every bar rendered at zero pixels before this
                wrapper existed, which looked exactly like "no data".
              */}
              <div className="flex h-40 w-full items-end">
                <div
                  className={`w-full rounded-sm ${day.visits === 0 ? 'bg-line' : 'bg-brand'}`}
                  style={{ height: `${height}%` }}
                  title={`${day.day}: ${day.visits} ${day.visits === 1 ? 'visit' : 'visits'}`}
                />
              </div>
              <span className="text-[10px] tabular-nums text-muted">
                {day.day.slice(8)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default async function AdminAnalyticsPage() {
  const admin = await getAdminUser()

  // 404 rather than 403, matching the other admin pages: don't confirm the
  // route exists to non-admins.
  if (!admin) notFound()

  const now = new Date()
  const monthAgo = daysAgo(now, 30)

  const [live, today, week, month, sources, referrers, daily] = await Promise.all([
    liveVisitors(now),
    visitsSince(startOfUtcDay(now)),
    visitsSince(daysAgo(now, 7)),
    visitsSince(monthAgo),
    sourceBreakdown(monthAgo),
    topReferrers(monthAgo),
    dailyVisits(14, now),
  ])

  const liveMinutes = Math.round(LIVE_WINDOW_MS / 60000)
  const nothingYet = month === 0

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Traffic</h1>
          <p className="mt-2 text-muted">Signed in as {admin.email}</p>
        </div>
        <Link
          href="/"
          className="rounded-md border border-line px-3 py-1.5 text-sm text-muted transition hover:border-brand hover:text-white"
        >
          Back to site
        </Link>
      </div>

      <AdminTabs current="analytics" />

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-5">
        <span
          className={`h-2.5 w-2.5 rounded-full ${live > 0 ? 'bg-brand' : 'bg-line'}`}
          aria-hidden
        />
        <p className="text-lg">
          <span className="text-2xl font-semibold tabular-nums">{live}</span>{' '}
          <span className="text-muted">
            {live === 1 ? 'person on the site' : 'people on the site'} right now
          </span>
        </p>
      </div>

      <dl className="mt-4 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Today', value: today },
          { label: 'Last 7 days', value: week },
          { label: 'Last 30 days', value: month },
        ].map((card) => (
          <div key={card.label} className="rounded-xl border border-line bg-surface-2 p-5">
            <dt className="text-sm text-muted">{card.label}</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums">
              {card.value}
              <span className="text-base font-normal text-muted">
                {card.value === 1 ? ' visit' : ' visits'}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {nothingYet ? (
        <p className="mt-8 rounded-xl border border-line bg-surface-2 p-6 text-muted">
          Nothing recorded yet. Counting starts the first time someone loads a
          page after this goes live — there is no history to backfill.
        </p>
      ) : (
        <>
          <DailyChart data={daily} />

          <div className="mt-8 rounded-xl border border-line bg-surface-2 p-5">
            <h2 className="text-sm font-medium text-muted">
              How they found us, last 30 days
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-3">
              {sources.map((row) => {
                const share = month > 0 ? Math.round((row.visits / month) * 100) : 0
                return (
                  <div key={row.source}>
                    <dt className="text-sm font-medium">{SOURCE_LABELS[row.source]}</dt>
                    <dd className="mt-1 text-2xl font-semibold tabular-nums">
                      {row.visits}
                      <span className="ml-2 text-base font-normal text-muted">
                        {share}%
                      </span>
                    </dd>
                    <dd className="mt-1 text-xs leading-relaxed text-muted">
                      {SOURCE_NOTES[row.source]}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-line bg-surface-2 text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">
                    Which site sent them, last 30 days
                  </th>
                  <th className="px-4 py-3 text-right font-medium">Visits</th>
                </tr>
              </thead>
              <tbody>
                {referrers.length === 0 ? (
                  <tr>
                    <td className="px-4 py-3 text-muted" colSpan={2}>
                      Nothing yet. This fills in once a search engine or another
                      website starts sending people here.
                    </td>
                  </tr>
                ) : (
                  referrers.map((row) => (
                    <tr key={row.host} className="border-b border-line last:border-0">
                      <td className="px-4 py-3">{row.host}</td>
                      <td className="px-4 py-3 text-right tabular-nums">{row.visits}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="mt-8 rounded-xl border border-line bg-surface-2 p-5 text-sm text-muted">
        <p>
          <strong className="font-medium text-white">What these numbers are.</strong>{' '}
          A <em>visit</em> is one browser tab, however many pages it opens.
          &ldquo;Right now&rdquo; means a tab that reported in the last{' '}
          {liveMinutes} minutes with the page actually in front of someone.
          Known crawlers are excluded, so this should read lower than any figure
          you see in the hosting dashboard.
        </p>
        <p className="mt-3">
          This is a counter. <strong className="font-medium text-white">
            It does not record which pages anyone read
          </strong>{' '}
          — only that they came, roughly how they found us, and when they were
          last seen. Counting is first-party: nothing about a visitor is sent to
          Google, Meta or any analytics company, no cookie is set, and no IP
          address or browser fingerprint is stored. Visits are kept for{' '}
          {RETENTION_DAYS} days and then deleted automatically.
        </p>
        <p className="mt-3">
          Search impressions and the words people actually typed into Google are
          a separate thing and live in Google Search Console, not here.
        </p>
      </div>
    </div>
  )
}
