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
 * How long visits are kept. Ninety days answers "how did last quarter go"
 * without keeping a permanent record. Enforced by pruneOldVisits, called from
 * the collector.
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

/** Drop visits past the retention window. */
export async function pruneOldVisits(now = new Date()): Promise<number> {
  const cutoff = new Date(now.getTime() - RETENTION_DAYS * 24 * 60 * 60 * 1000)
  const { count } = await prisma.visit.deleteMany({
    where: { startedAt: { lt: cutoff } },
  })
  return count
}
