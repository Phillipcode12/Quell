import 'server-only'
import { prisma } from '@/lib/db'

/**
 * First-party visit counting.
 *
 * The whole point of doing this ourselves rather than installing Vercel
 * Analytics or Plausible is the privacy policy: it promises no advertising
 * trackers and no third-party cookies, and both stay true this way. Nothing
 * about a visitor leaves our servers, and no cookie is set — the id lives in
 * sessionStorage.
 *
 * It is a counter and nothing more. It records that someone came, roughly how
 * they found us, and when they were last seen. **It does not record which pages
 * they read**, by decision on 2026-09-02: page paths would make a visit a
 * reconstructible browsing trail, and a counter answers the question that was
 * actually being asked.
 */

/** A visit is "here now" if it has reported inside this window. */
export const LIVE_WINDOW_MS = 5 * 60 * 1000

/**
 * Visits are kept indefinitely. Nothing prunes them, by decision on
 * 2026-09-02 — the shop wants year-on-year history, and a counter is only
 * useful once there is something to compare against.
 *
 * The cost is negligible and worth stating so nobody re-adds pruning out of
 * caution: a Visit row is a short id, a word, a hostname and two timestamps.
 * A hundred thousand visits is single-digit megabytes, which is more traffic
 * than this shop will see for years.
 *
 * What makes indefinite retention defensible here is what is *not* stored —
 * no page path, no IP, no user agent, no cookie, nothing tying a visit to a
 * person or an order. Keeping an anonymous count forever is a different
 * proposition from keeping a browsing history forever, and the second one is
 * what the no-page-path decision ruled out.
 */

/**
 * Bots, so the numbers mean something.
 *
 * Deliberately a substring match on the user agent rather than anything
 * cleverer. It catches the honest crawlers — Google, Bing, uptime checks, the
 * link previewers behind pasted URLs — which are the overwhelming majority of
 * non-human traffic on a site this size. It will not catch a crawler that
 * disguises itself, and it is not meant to: this is about not counting
 * Googlebot as a customer, not about defence.
 *
 * The user agent is tested and thrown away. It is never stored.
 */
const BOT_PATTERNS = [
  'bot',
  'crawler',
  'spider',
  'crawling',
  'slurp',
  'facebookexternalhit',
  'preview',
  'monitor',
  'uptime',
  'pingdom',
  'lighthouse',
  'headless',
  'curl',
  'wget',
  'python-requests',
  'axios',
  'postman',
  'go-http-client',
]

export function isBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) return true // No UA at all is not a browser.
  const ua = userAgent.toLowerCase()
  return BOT_PATTERNS.some((pattern) => ua.includes(pattern))
}

/**
 * Search engines, for telling "they searched for us" from "someone linked us".
 *
 * Matched on the registrable-ish host, so `www.google.co.uk` and
 * `news.google.com` both count. It is a list, so it is always incomplete — an
 * unlisted engine is recorded as a link rather than as search, which is the
 * safe way to be wrong: it under-reports search rather than inventing it.
 */
const SEARCH_HOSTS = [
  'google.',
  'bing.',
  'duckduckgo.',
  'yahoo.',
  'ecosia.',
  'startpage.',
  'qwant.',
  'brave.',
  'yandex.',
  'baidu.',
  'searx.',
  'ask.com',
  'aol.com',
  'perplexity.',
  'chatgpt.com',
  'openai.com',
]

/** How a visitor arrived. */
export type Source = 'search' | 'link' | 'direct'

export const SOURCE_LABELS: Record<Source, string> = {
  search: 'Found us in a search',
  link: 'Clicked a link on another site',
  direct: 'Came straight here',
}

export const SOURCE_NOTES: Record<Source, string> = {
  search:
    'A search engine sent them. Which words they typed is not recorded here — that is in Google Search Console.',
  link: 'Another website linked to us. The site is named in the table below.',
  direct:
    'No referring site: typed or pasted the address, a bookmark, a link in an email or a message, or an app that strips the referrer.',
}

/**
 * Reduce a referrer to its bare host, or null.
 *
 * Three things are dropped on purpose: the path and query string, because a
 * search referrer can carry what the person typed; our own domain, because an
 * internal click is not a traffic source; and anything unparseable.
 */
export function referrerHost(
  referrer: string | null | undefined,
  selfHost?: string | null,
): string | null {
  if (!referrer) return null
  let host: string
  try {
    host = new URL(referrer).hostname.toLowerCase()
  } catch {
    return null
  }
  if (!host) return null
  const bare = host.replace(/^www\./, '')
  if (selfHost && bare === selfHost.toLowerCase().replace(/^www\./, '')) return null
  return bare
}

/** Classify an arrival from its referring host. */
export function classifySource(host: string | null): Source {
  if (!host) return 'direct'
  return SEARCH_HOSTS.some((s) => host === s.replace(/\.$/, '') || host.includes(s))
    ? 'search'
    : 'link'
}

// --- reads, for the admin page ---------------------------------------------

/** Visits started since a point in time. */
export async function visitsSince(since: Date): Promise<number> {
  return prisma.visit.count({ where: { startedAt: { gte: since } } })
}

/** Visits seen inside LIVE_WINDOW_MS. */
export async function liveVisitors(now = new Date()): Promise<number> {
  return prisma.visit.count({
    where: { lastSeenAt: { gte: new Date(now.getTime() - LIVE_WINDOW_MS) } },
  })
}

export type SourceCount = { source: Source; visits: number }

/** How people arrived, commonest first, with every source always present. */
export async function sourceBreakdown(since: Date): Promise<SourceCount[]> {
  const rows = await prisma.visit.groupBy({
    by: ['source'],
    where: { startedAt: { gte: since } },
    _count: { source: true },
  })

  const counts = new Map<string, number>(rows.map((r) => [r.source, r._count.source]))
  const all: Source[] = ['search', 'link', 'direct']

  // Every source is listed even at zero. A missing row reads as "no data";
  // an explicit zero reads as "nobody arrived that way", which is the fact.
  return all
    .map((source) => ({ source, visits: counts.get(source) ?? 0 }))
    .sort((a, b) => b.visits - a.visits)
}

export type ReferrerCount = { host: string; visits: number }

export async function topReferrers(since: Date, take = 10): Promise<ReferrerCount[]> {
  const rows = await prisma.visit.groupBy({
    by: ['referrerHost'],
    where: { startedAt: { gte: since }, referrerHost: { not: null } },
    _count: { referrerHost: true },
    orderBy: { _count: { referrerHost: 'desc' } },
    take,
  })
  return rows
    .filter((row): row is typeof row & { referrerHost: string } => row.referrerHost !== null)
    .map((row) => ({ host: row.referrerHost, visits: row._count.referrerHost }))
}

export type DayCount = { day: string; visits: number }

/**
 * Visits per day, oldest first, with empty days filled in.
 *
 * Days are counted in UTC, matching how the timestamps are stored. A day that
 * saw nothing still appears with a zero, because a gap in a chart has to be
 * visible as a gap rather than closed up into a shorter, healthier-looking
 * line.
 */
export async function dailyVisits(days: number, now = new Date()): Promise<DayCount[]> {
  const start = new Date(now)
  start.setUTCHours(0, 0, 0, 0)
  start.setUTCDate(start.getUTCDate() - (days - 1))

  const rows = await prisma.visit.findMany({
    where: { startedAt: { gte: start } },
    select: { startedAt: true },
  })

  const buckets = new Map<string, number>()
  for (let i = 0; i < days; i++) {
    const d = new Date(start)
    d.setUTCDate(start.getUTCDate() + i)
    buckets.set(d.toISOString().slice(0, 10), 0)
  }

  for (const row of rows) {
    const key = row.startedAt.toISOString().slice(0, 10)
    const current = buckets.get(key)
    if (current === undefined) continue
    buckets.set(key, current + 1)
  }

  return [...buckets.entries()].map(([day, visits]) => ({ day, visits }))
}


export type MonthCount = {
  /** First day of the month, UTC, as `YYYY-MM-01`. */
  month: string
  visits: number
  search: number
  link: number
  direct: number
}

/**
 * Every month that saw a visit, newest first, with the source split.
 *
 * The long view. The daily chart answers "what happened this fortnight"; this
 * answers "is the shop growing", which only becomes readable once there is a
 * year to look back on — hence keeping the rows forever.
 *
 * Raw SQL because Prisma cannot group by a truncated date, and one grouped
 * scan is the right shape here: the table is a few rows per visit and the
 * `startedAt` index covers the ordering. If this ever gets slow the answer is
 * a monthly rollup table, but that is a problem for hundreds of thousands of
 * visits, not for this shop.
 *
 * Months are UTC, matching `dailyVisits` and the stored timestamps. A month
 * with no visits at all is simply absent rather than zero-filled: gaps in
 * *daily* data mislead, but a shop that took no visits in a calendar month has
 * a real gap and padding the table would hide it.
 */
export async function monthlyVisits(): Promise<MonthCount[]> {
  const rows = await prisma.$queryRaw<
    { month: Date; visits: number; search: number; link: number; direct: number }[]
  >`
    SELECT date_trunc('month', "startedAt") AS month,
           COUNT(*)::int AS visits,
           COUNT(*) FILTER (WHERE "source" = 'search')::int AS search,
           COUNT(*) FILTER (WHERE "source" = 'link')::int   AS link,
           COUNT(*) FILTER (WHERE "source" = 'direct')::int AS direct
    FROM "Visit"
    GROUP BY 1
    ORDER BY 1 DESC
  `

  // The counts are cast to int in SQL rather than left as Postgres bigint,
  // which Prisma hands back as a BigInt that JSON.stringify refuses to
  // serialise — a server component would fail at render, not at the query.
  return rows.map((r) => ({
    month: r.month.toISOString().slice(0, 10),
    visits: r.visits,
    search: r.search,
    link: r.link,
    direct: r.direct,
  }))
}

/** "September 2026" from a `YYYY-MM-DD` month key. */
export function formatMonth(month: string): string {
  const [y, m] = month.split('-')
  const date = new Date(Date.UTC(Number(y), Number(m) - 1, 1))
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

// --- orders and revenue -----------------------------------------------------

/**
 * What counts as a sale.
 *
 * `paid` and `shipped` only. A `pending` order is a checkout that started and
 * may never complete — counting it would report revenue that does not exist —
 * and a `cancelled` one has been refunded or never charged. This is the same
 * rule /admin/customers uses, and the two must not drift apart.
 */
const SOLD = ['paid', 'shipped']

export type Sales = { orders: number; revenueCents: number }

/** Orders and revenue since a point in time. */
export async function salesSince(since: Date): Promise<Sales> {
  const result = await prisma.order.aggregate({
    where: { status: { in: SOLD }, createdAt: { gte: since } },
    _count: { _all: true },
    _sum: { totalCents: true },
  })
  return {
    orders: result._count._all,
    // _sum is null when nothing matched, which would render as "$null".
    revenueCents: result._sum.totalCents ?? 0,
  }
}

export type DaySales = { day: string; orders: number; revenueCents: number }

/** Orders and revenue per day, oldest first, with empty days filled in. */
export async function dailySales(days: number, now = new Date()): Promise<DaySales[]> {
  const start = new Date(now)
  start.setUTCHours(0, 0, 0, 0)
  start.setUTCDate(start.getUTCDate() - (days - 1))

  const rows = await prisma.order.findMany({
    where: { status: { in: SOLD }, createdAt: { gte: start } },
    select: { createdAt: true, totalCents: true },
  })

  const buckets = new Map<string, DaySales>()
  for (let i = 0; i < days; i++) {
    const d = new Date(start)
    d.setUTCDate(start.getUTCDate() + i)
    const key = d.toISOString().slice(0, 10)
    buckets.set(key, { day: key, orders: 0, revenueCents: 0 })
  }

  for (const row of rows) {
    const bucket = buckets.get(row.createdAt.toISOString().slice(0, 10))
    if (!bucket) continue
    bucket.orders += 1
    bucket.revenueCents += row.totalCents
  }

  return [...buckets.values()]
}

export type MonthSales = { month: string; orders: number; revenueCents: number }

/**
 * Orders and revenue per month, keyed the same way as `monthlyVisits` so the
 * two can be joined on the month string.
 *
 * Dated by `createdAt` rather than by when payment landed, because there is no
 * paid-at column. On this shop the gap is seconds — the webhook marks an order
 * paid moments after checkout — so the only case it could misfile is an order
 * created just before midnight UTC and paid just after. Worth knowing before
 * anyone reconciles this against a processor statement, which uses settlement
 * dates and will not agree exactly.
 */
export async function monthlySales(): Promise<MonthSales[]> {
  const rows = await prisma.$queryRaw<
    { month: Date; orders: number; revenue: number }[]
  >`
    SELECT date_trunc('month', "createdAt") AS month,
           COUNT(*)::int AS orders,
           COALESCE(SUM("totalCents"), 0)::int AS revenue
    FROM "Order"
    WHERE "status" IN ('paid', 'shipped')
    GROUP BY 1
    ORDER BY 1 DESC
  `

  return rows.map((r) => ({
    month: r.month.toISOString().slice(0, 10),
    orders: r.orders,
    revenueCents: r.revenue,
  }))
}

export type MonthRow = MonthCount & {
  orders: number
  /** Bottles, not orders — an order for two counts twice here and once above. */
  units: number
  revenueCents: number
  /** Orders per hundred visits, or null when there were no visits to convert. */
  conversionPct: number | null
}

/**
 * Visits and sales for every month either of them happened in.
 *
 * Joined here rather than in SQL because they are two independent tables with
 * no relation between them, and a month can legitimately appear in one and not
 * the other: sales before counting began have no visits, and most months will
 * have visits and no sales.
 */
export function joinMonthly(
  visits: MonthCount[],
  sales: MonthSales[],
  units: MonthUnits[] = [],
): MonthRow[] {
  const byMonth = new Map<string, MonthRow>()

  for (const v of visits) {
    byMonth.set(v.month, { ...v, orders: 0, units: 0, revenueCents: 0, conversionPct: null })
  }

  for (const s of sales) {
    const existing = byMonth.get(s.month)
    if (existing) {
      existing.orders = s.orders
      existing.revenueCents = s.revenueCents
    } else {
      // A month with sales but no visit records — anything before counting
      // began on 2026-09-02. Shown rather than dropped, with visits at zero,
      // because hiding real revenue would be the worse error.
      byMonth.set(s.month, {
        month: s.month,
        visits: 0,
        search: 0,
        link: 0,
        direct: 0,
        orders: s.orders,
        units: 0,
        revenueCents: s.revenueCents,
        conversionPct: null,
      })
    }
  }

  for (const u of units) {
    const existing = byMonth.get(u.month)
    if (existing) existing.units = u.units
  }

  for (const row of byMonth.values()) {
    row.conversionPct = row.visits > 0 ? (row.orders / row.visits) * 100 : null
  }

  return [...byMonth.values()].sort((a, b) => (a.month < b.month ? 1 : -1))
}

// --- units sold -------------------------------------------------------------

/**
 * Bottles off the shelf, which is not the same number as orders.
 *
 * An order for two is one order and two units, so revenue and order count both
 * understate what the stock room has to replace. This is the figure that says
 * when to reorder.
 *
 * Counted from `OrderItem.quantity` on orders that actually sold, using the
 * same `SOLD` rule as everything else here.
 */
export type DayUnits = { day: string; units: number }

export async function dailyUnits(days: number, now = new Date()): Promise<DayUnits[]> {
  const start = new Date(now)
  start.setUTCHours(0, 0, 0, 0)
  start.setUTCDate(start.getUTCDate() - (days - 1))

  const rows = await prisma.orderItem.findMany({
    where: { order: { status: { in: SOLD }, createdAt: { gte: start } } },
    select: { quantity: true, order: { select: { createdAt: true } } },
  })

  const buckets = new Map<string, number>()
  for (let i = 0; i < days; i++) {
    const d = new Date(start)
    d.setUTCDate(start.getUTCDate() + i)
    buckets.set(d.toISOString().slice(0, 10), 0)
  }

  for (const row of rows) {
    const key = row.order.createdAt.toISOString().slice(0, 10)
    const current = buckets.get(key)
    if (current === undefined) continue
    buckets.set(key, current + row.quantity)
  }

  return [...buckets.entries()].map(([day, units]) => ({ day, units }))
}

export type MonthUnits = { month: string; units: number }

export async function monthlyUnits(): Promise<MonthUnits[]> {
  const rows = await prisma.$queryRaw<{ month: Date; units: number }[]>`
    SELECT date_trunc('month', o."createdAt") AS month,
           COALESCE(SUM(i."quantity"), 0)::int AS units
    FROM "OrderItem" i
    JOIN "Order" o ON o."id" = i."orderId"
    WHERE o."status" IN ('paid', 'shipped')
    GROUP BY 1
    ORDER BY 1 DESC
  `
  return rows.map((r) => ({ month: r.month.toISOString().slice(0, 10), units: r.units }))
}
