import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { AdminTabs } from '@/components/admin/AdminTabs'
import {
  dailySales,
  dailyUnits,
  dailyVisits,
  formatMonth,
  joinMonthly,
  liveVisitors,
  monthlySales,
  monthlyUnits,
  monthlyVisits,
  salesSince,
  sourceBreakdown,
  topReferrers,
  visitsSince,
  LIVE_WINDOW_MS,
  SOURCE_LABELS,
  SOURCE_NOTES,
  type MonthRow,
} from '@/lib/analytics'
import { formatUsd } from '@/lib/money'

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
 * The hover text for one bar.
 *
 * The bar's height is visits, but a day is really two numbers, and the second
 * one is the one that pays. Orders are named only when there were some — "0
 * orders" on twelve of fourteen bars is noise that buries the two that matter.
 */
function dayTitle(
  day: { day: string; visits: number },
  sales?: { orders: number; revenueCents: number },
): string {
  const visits = `${day.visits} ${day.visits === 1 ? 'visit' : 'visits'}`
  if (!sales || sales.orders === 0) return `${day.day}: ${visits}`
  const orders = `${sales.orders} ${sales.orders === 1 ? 'order' : 'orders'}`
  return `${day.day}: ${visits}, ${orders}, ${formatUsd(sales.revenueCents)}`
}

type Bar = { day: string; value: number; title: string }

/**
 * A bar per day.
 *
 * Plain divs rather than a charting library: one series, the page is already a
 * server component, and a dependency to draw fourteen rectangles would ship
 * more JavaScript than the whole admin section.
 *
 * Generalised over the series rather than written twice. The height trick
 * below is the kind of thing that gets fixed in one copy and left broken in
 * the other, and it already went wrong once.
 */
function DayBars({
  title,
  bars,
  tone,
  empty,
}: {
  title: string
  bars: Bar[]
  tone: string
  empty?: string
}) {
  const peak = Math.max(1, ...bars.map((b) => b.value))
  const allZero = bars.every((b) => b.value === 0)

  return (
    <div className="mt-4 rounded-xl border border-line bg-surface-2 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-sm font-medium text-muted">{title}</h2>
        {allZero && empty && <p className="text-xs text-muted">{empty}</p>}
      </div>
      <div className="mt-5 flex gap-1.5">
        {bars.map((bar) => {
          const height = bar.value === 0 ? 2 : Math.max(4, (bar.value / peak) * 100)
          return (
            <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
              {/*
                The fixed height lives on this wrapper, not on the row. A
                percentage height only resolves against a parent with a
                definite one, and a column flex item sized by its content is
                not definite — every bar rendered at zero pixels before this
                wrapper existed, which looked exactly like "no data".
              */}
              <div className="flex h-40 w-full items-end">
                <div
                  className={`w-full rounded-sm ${bar.value === 0 ? 'bg-line' : tone}`}
                  style={{ height: `${height}%` }}
                  title={bar.title}
                />
              </div>
              <span className="text-[10px] tabular-nums text-muted">
                {bar.day.slice(8)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * The long view: every month that saw a visit or a sale, newest first.
 *
 * Separate from the 14-day chart on purpose. That one answers "what happened
 * this fortnight"; this answers "is the shop growing", which only becomes
 * readable once there is a year to look back on. Nothing is ever deleted, so
 * this table only gets longer.
 *
 * A table rather than a chart, because the interesting number is not any one
 * column — it is visits against orders. Traffic that does not convert and
 * conversion without traffic are different problems, and only seeing them side
 * by side tells you which one you have.
 */
function MonthlyHistory({ data }: { data: MonthRow[] }) {
  if (data.length === 0) return null

  const totalVisits = data.reduce((sum, m) => sum + m.visits, 0)
  const totalOrders = data.reduce((sum, m) => sum + m.orders, 0)
  const totalUnits = data.reduce((sum, m) => sum + m.units, 0)
  const totalRevenue = data.reduce((sum, m) => sum + m.revenueCents, 0)
  const peak = Math.max(1, ...data.map((m) => m.visits))

  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-line">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <h2 className="text-sm font-medium text-muted">Month by month, all time</h2>
        <p className="text-xs text-muted">
          <span className="font-medium tabular-nums text-white">{totalVisits}</span>{' '}
          visits ·{' '}
          <span className="font-medium tabular-nums text-white">{totalOrders}</span>{' '}
          {totalOrders === 1 ? 'order' : 'orders'} ·{' '}
          <span className="font-medium tabular-nums text-white">{totalUnits}</span>{' '}
          {totalUnits === 1 ? 'bottle' : 'bottles'} ·{' '}
          <span className="font-medium tabular-nums text-white">
            {formatUsd(totalRevenue)}
          </span>
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[52rem] text-left text-sm">
          <thead className="border-b border-line bg-surface-2 text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Month</th>
              <th className="px-4 py-3 text-right font-medium">Visits</th>
              <th className="px-4 py-3 text-right font-medium">Orders</th>
              <th className="px-4 py-3 text-right font-medium">Bottles</th>
              <th className="px-4 py-3 text-right font-medium">Revenue</th>
              <th className="px-4 py-3 text-right font-medium">Per order</th>
              <th className="px-4 py-3 text-right font-medium">Conv.</th>
              <th className="px-4 py-3 text-right font-medium">Search</th>
              <th className="px-4 py-3 text-right font-medium">Link</th>
              <th className="px-4 py-3 text-right font-medium">Direct</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m) => (
              <tr key={m.month} className="border-b border-line last:border-0">
                <td className="px-4 py-3 whitespace-nowrap">{formatMonth(m.month)}</td>
                <td className="px-4 py-3 text-right">
                  {/* A bar behind the number, so a year of rows reads as a
                      shape before it reads as figures. */}
                  <span className="inline-flex items-center justify-end gap-2">
                    <span
                      aria-hidden
                      className="h-1.5 rounded-full bg-brand/50"
                      style={{ width: `${Math.max(4, (m.visits / peak) * 64)}px` }}
                    />
                    <span className="font-medium tabular-nums">{m.visits}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-medium tabular-nums">
                  {m.orders}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-muted">
                  {/* Bottles, not orders. An order for two shows 1 and 2, and
                      the second number is the one the stock room replaces. */}
                  {m.units > 0 ? m.units : '—'}
                </td>
                <td className="px-4 py-3 text-right font-medium tabular-nums">
                  {m.revenueCents > 0 ? formatUsd(m.revenueCents) : '—'}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-muted">
                  {/* Average order value. Dashes rather than $0.00 on a month
                      with no orders, so an empty month cannot be misread as a
                      month of free ones. */}
                  {m.orders > 0 ? formatUsd(Math.round(m.revenueCents / m.orders)) : '—'}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-muted">
                  {m.conversionPct === null ? '—' : `${m.conversionPct.toFixed(1)}%`}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-muted">{m.search}</td>
                <td className="px-4 py-3 text-right tabular-nums text-muted">{m.link}</td>
                <td className="px-4 py-3 text-right tabular-nums text-muted">{m.direct}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

  const [
    live,
    today,
    week,
    month,
    sources,
    referrers,
    daily,
    monthVisits,
    monthSales,
    todaySales,
    weekSales,
    monthAgoSales,
    dailyOrders,
    dailyUnitsSold,
    monthUnits,
  ] = await Promise.all([
    liveVisitors(now),
    visitsSince(startOfUtcDay(now)),
    visitsSince(daysAgo(now, 7)),
    visitsSince(monthAgo),
    sourceBreakdown(monthAgo),
    topReferrers(monthAgo),
    dailyVisits(14, now),
    monthlyVisits(),
    monthlySales(),
    salesSince(startOfUtcDay(now)),
    salesSince(daysAgo(now, 7)),
    salesSince(monthAgo),
    dailySales(14, now),
    dailyUnits(14, now),
    monthlyUnits(),
  ])

  const months = joinMonthly(monthVisits, monthSales, monthUnits)
  const ordersByDay = new Map(dailyOrders.map((d) => [d.day, d]))

  const liveMinutes = Math.round(LIVE_WINDOW_MS / 60000)
  // Sales are shown even before any visit is recorded: orders predate counting.
  const nothingYet = month === 0 && months.length === 0

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
          { label: 'Today', visits: today, sales: todaySales },
          { label: 'Last 7 days', visits: week, sales: weekSales },
          { label: 'Last 30 days', visits: month, sales: monthAgoSales },
        ].map((card) => (
          <div key={card.label} className="rounded-xl border border-line bg-surface-2 p-5">
            <dt className="text-sm text-muted">{card.label}</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums">
              {card.visits}
              <span className="text-base font-normal text-muted">
                {card.visits === 1 ? ' visit' : ' visits'}
              </span>
            </dd>
            <dd className="mt-2 border-t border-line pt-2 text-sm tabular-nums">
              <span className="font-medium">{card.sales.orders}</span>
              <span className="text-muted">
                {card.sales.orders === 1 ? ' order' : ' orders'}
              </span>
              {card.sales.orders > 0 && (
                <span className="font-medium text-brand-light">
                  {' · '}
                  {formatUsd(card.sales.revenueCents)}
                </span>
              )}
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
          <DayBars
            title="Visits per day, last 14 days"
            tone="bg-brand"
            bars={daily.map((d) => ({
              day: d.day,
              value: d.visits,
              title: dayTitle(d, ordersByDay.get(d.day)),
            }))}
          />

          <DayBars
            title="Bottles sold per day, last 14 days"
            tone="bg-brand-light"
            empty="Nothing sold in this window"
            bars={dailyUnitsSold.map((d) => ({
              day: d.day,
              value: d.units,
              title: `${d.day}: ${d.units} ${d.units === 1 ? 'bottle' : 'bottles'}`,
            }))}
          />

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

          <MonthlyHistory data={months} />
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
          address or browser fingerprint is stored. Visits are kept
          indefinitely, so the monthly history below keeps growing rather than
          rolling off.
        </p>
        <p className="mt-3">
          Search impressions and the words people actually typed into Google are
          a separate thing and live in Google Search Console, not here.
        </p>
      </div>
    </div>
  )
}
