import 'server-only'
import { prisma } from '@/lib/db'

/**
 * First-party visitor counting.
 *
 * The whole point of doing this ourselves rather than installing Vercel
 * Analytics or Plausible is the privacy policy: it promises no analytics, no
 * advertising trackers and no third-party cookies. Only the first of those
 * three has to change for this. Nothing about a visitor leaves our servers, and
 * still no cookie is set — the session id lives in sessionStorage.
 *
 * The trade is honest: this counts visits, pages and referrers. It does not do
 * funnels, cohorts or attribution, and it never will without a lot more code.
 */

/** A tab is "here now" if it has reported inside this window. */
export const LIVE_WINDOW_MS = 5 * 60 * 1000

/**
 * How long views are kept. Ninety days answers "how did last quarter go"
 * without accumulating a permanent record of what individual people read.
 * Enforced by pruneOldViews, called from the collector.
 */
export const RETENTION_DAYS = 90

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

/**
 * Keep a pathname and drop everything else.
 *
 * The client sends the path it rendered, but it is still input from a browser,
 * so it is treated as untrusted: anything that is not a plain absolute path is
 * refused rather than cleaned up, and a very long one is refused rather than
 * truncated into something that looks real.
 */
export function normalisePath(input: unknown): string | null {
  if (typeof input !== 'string') return null
  const path = input.trim()
  if (!path.startsWith('/') || path.startsWith('//')) return null
  if (path.length > 512) return null
  // Strip a query or fragment if one is sent anyway.
  const clean = path.split(/[?#]/)[0]
  if (clean.length === 0) return null
  // The shop's own staff are not traffic. Without this, checking the numbers
  // adds to them, and the more often they are checked the busier the site
  // appears to be.
  if (clean === '/admin' || clean.startsWith('/admin/')) return null
  return clean
}

// --- reads, for the admin page ---------------------------------------------

export type Totals = {
  views: number
  visits: number
}

/** Views and distinct sessions since a point in time. */
export async function totalsSince(since: Date): Promise<Totals> {
  const [views, sessions] = await Promise.all([
    // Views are real page loads only; keep-alives are not page loads.
    prisma.pageView.count({ where: { createdAt: { gte: since }, ping: false } }),
    // Visits count every tab that was here, keep-alive or not.
    prisma.pageView.findMany({
      where: { createdAt: { gte: since } },
      distinct: ['sessionId'],
      select: { sessionId: true },
    }),
  ])
  return { views, visits: sessions.length }
}

/** Tabs that have reported inside LIVE_WINDOW_MS. */
export async function liveVisitors(now = new Date()): Promise<number> {
  const sessions = await prisma.pageView.findMany({
    where: { createdAt: { gte: new Date(now.getTime() - LIVE_WINDOW_MS) } },
    distinct: ['sessionId'],
    select: { sessionId: true },
  })
  return sessions.length
}

export type PathCount = { path: string; views: number }

export async function topPaths(since: Date, take = 12): Promise<PathCount[]> {
  const rows = await prisma.pageView.groupBy({
    by: ['path'],
    where: { createdAt: { gte: since }, ping: false },
    _count: { path: true },
    orderBy: { _count: { path: 'desc' } },
    take,
  })
  return rows.map((row) => ({ path: row.path, views: row._count.path }))
}

export type ReferrerCount = { host: string; views: number }

export async function topReferrers(since: Date, take = 10): Promise<ReferrerCount[]> {
  const rows = await prisma.pageView.groupBy({
    by: ['referrerHost'],
    where: { createdAt: { gte: since }, referrerHost: { not: null }, ping: false },
    _count: { referrerHost: true },
    orderBy: { _count: { referrerHost: 'desc' } },
    take,
  })
  return rows
    .filter((row): row is typeof row & { referrerHost: string } => row.referrerHost !== null)
    .map((row) => ({ host: row.referrerHost, views: row._count.referrerHost }))
}

export type DayCount = { day: string; views: number; visits: number }

/**
 * Views and visits per day, oldest first, with empty days filled in.
 *
 * Days are counted in UTC, matching how the timestamps are stored. A day that
 * saw nothing still appears with zeroes, because a gap in a chart has to be
 * visible as a gap rather than closed up into a shorter, healthier-looking
 * line.
 */
export async function dailyCounts(days: number, now = new Date()): Promise<DayCount[]> {
  const start = new Date(now)
  start.setUTCHours(0, 0, 0, 0)
  start.setUTCDate(start.getUTCDate() - (days - 1))

  const rows = await prisma.pageView.findMany({
    where: { createdAt: { gte: start } },
    select: { createdAt: true, sessionId: true, ping: true },
  })

  const buckets = new Map<string, { views: number; sessions: Set<string> }>()
  for (let i = 0; i < days; i++) {
    const d = new Date(start)
    d.setUTCDate(start.getUTCDate() + i)
    buckets.set(d.toISOString().slice(0, 10), { views: 0, sessions: new Set() })
  }

  for (const row of rows) {
    const key = row.createdAt.toISOString().slice(0, 10)
    const bucket = buckets.get(key)
    if (!bucket) continue
    if (!row.ping) bucket.views += 1
    bucket.sessions.add(row.sessionId)
  }

  return [...buckets.entries()].map(([day, bucket]) => ({
    day,
    views: bucket.views,
    visits: bucket.sessions.size,
  }))
}

/** Drop views past the retention window. */
export async function pruneOldViews(now = new Date()): Promise<number> {
  const cutoff = new Date(now.getTime() - RETENTION_DAYS * 24 * 60 * 60 * 1000)
  const { count } = await prisma.pageView.deleteMany({
    where: { createdAt: { lt: cutoff } },
  })
  return count
}
