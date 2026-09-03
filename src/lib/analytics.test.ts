import { describe, expect, it } from 'vitest'
import {
  classifySource,
  formatMonth,
  isBot,
  joinMonthly,
  referrerHost,
} from '@/lib/analytics'

/**
 * The pure parts of the counter: what gets counted, and how an arrival is
 * labelled.
 *
 * The database reads are not covered here for the same reason nothing else in
 * this suite covers Prisma — every call would be mocked, and a mocked groupBy
 * proves only that the mock was called.
 *
 * What is worth testing is the classification, because every way of getting it
 * wrong is silent: a bot counted as a customer inflates every number, a real
 * visitor dropped as a bot deflates them, and a mislabelled source sends the
 * shop's marketing effort at the wrong channel.
 */

describe('isBot', () => {
  it('passes real browsers', () => {
    const browsers = [
      // Chrome on Windows
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
      // Safari on iPhone
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
      // Firefox
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:129.0) Gecko/20100101 Firefox/129.0',
    ]
    for (const ua of browsers) expect(isBot(ua), ua).toBe(false)
  })

  it('catches the crawlers that actually show up', () => {
    const bots = [
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
      'facebookexternalhit/1.1',
      'curl/8.4.0',
      'python-requests/2.32.3',
      'Mozilla/5.0 (X11; Linux x86_64) HeadlessChrome/128.0.0.0',
    ]
    for (const ua of bots) expect(isBot(ua), ua).toBe(true)
  })

  it('treats a missing user agent as a bot', () => {
    // A browser always sends one. Something that does not is not a visitor.
    expect(isBot(null)).toBe(true)
    expect(isBot('')).toBe(true)
  })
})

describe('referrerHost', () => {
  it('reduces a referrer to its bare host', () => {
    expect(referrerHost('https://www.google.com/search?q=dry+eye+drops')).toBe('google.com')
    expect(referrerHost('https://news.ycombinator.com/item?id=1')).toBe('news.ycombinator.com')
  })

  it('drops our own domain, which is not a traffic source', () => {
    expect(referrerHost('https://quelldrop.com/cart', 'quelldrop.com')).toBeNull()
    expect(referrerHost('https://www.quelldrop.com/cart', 'quelldrop.com')).toBeNull()
  })

  it('returns null for a missing or unusable referrer', () => {
    expect(referrerHost(null)).toBeNull()
    expect(referrerHost('')).toBeNull()
    expect(referrerHost('not a url')).toBeNull()
  })

  it('never keeps the search terms', () => {
    // The query on a search referrer is the visitor's own words.
    const host = referrerHost('https://www.google.com/search?q=is+my+eye+infected')
    expect(host).toBe('google.com')
    expect(host).not.toContain('infected')
  })
})

describe('classifySource', () => {
  it('calls a search engine a search', () => {
    const engines = [
      'google.com',
      'google.co.uk',
      'bing.com',
      'duckduckgo.com',
      'search.yahoo.com',
      'ecosia.org',
      'yandex.ru',
      'perplexity.ai',
      'chatgpt.com',
    ]
    for (const host of engines) expect(classifySource(host), host).toBe('search')
  })

  it('calls any other site a link', () => {
    const sites = ['news.ycombinator.com', 'reddit.com', 'dryeyerescue.com', 'meibum.com']
    for (const host of sites) expect(classifySource(host), host).toBe('link')
  })

  it('calls no referrer direct', () => {
    // Typed, bookmarked, from an email or a messaging app — all arrive bare.
    expect(classifySource(null)).toBe('direct')
  })

  it('errs towards link rather than inventing search', () => {
    // The engine list is always incomplete. Under-reporting search is the safe
    // way to be wrong; over-reporting it would credit SEO for traffic it never
    // earned.
    expect(classifySource('some-new-search-engine.example')).toBe('link')
  })
})

describe('joining visits and sales by month', () => {
  const visits = (month: string, v: number) => ({
    month,
    visits: v,
    search: 0,
    link: 0,
    direct: v,
  })

  it('pairs a month that has both', () => {
    const [row] = joinMonthly(
      [visits('2026-09-01', 200)],
      [{ month: '2026-09-01', orders: 4, revenueCents: 15996 }],
    )
    expect(row.visits).toBe(200)
    expect(row.orders).toBe(4)
    expect(row.revenueCents).toBe(15996)
    expect(row.conversionPct).toBeCloseTo(2)
  })

  it('keeps a month with sales but no visit records', () => {
    // Orders predate the counter, which only started on 2026-09-02. Dropping
    // those months would hide real revenue, which is the worse error.
    const rows = joinMonthly([], [{ month: '2026-08-01', orders: 2, revenueCents: 7998 }])
    expect(rows).toHaveLength(1)
    expect(rows[0].visits).toBe(0)
    expect(rows[0].orders).toBe(2)
  })

  it('reports no conversion rather than zero when nobody visited', () => {
    // 0/0 is not 0%. A zero would read as "nobody who came bought", which is a
    // claim about traffic that did not exist.
    const [row] = joinMonthly([], [{ month: '2026-08-01', orders: 2, revenueCents: 7998 }])
    expect(row.conversionPct).toBeNull()
  })

  it('reports zero conversion when people came and none bought', () => {
    const [row] = joinMonthly([visits('2026-09-01', 500)], [])
    expect(row.conversionPct).toBe(0)
    expect(row.revenueCents).toBe(0)
  })

  it('orders months newest first', () => {
    const rows = joinMonthly(
      [visits('2026-07-01', 1), visits('2026-09-01', 3), visits('2026-08-01', 2)],
      [],
    )
    expect(rows.map((r) => r.month)).toEqual(['2026-09-01', '2026-08-01', '2026-07-01'])
  })
})

describe('formatMonth', () => {
  it('reads as a month and a year', () => {
    expect(formatMonth('2026-09-01')).toBe('September 2026')
    expect(formatMonth('2027-01-01')).toBe('January 2027')
  })

  it('does not slip a month at a timezone boundary', () => {
    // The key is midnight UTC on the first. Formatting it in local time west
    // of UTC would render December as November.
    expect(formatMonth('2026-12-01')).toBe('December 2026')
  })
})

describe('bottles are not orders', () => {
  const visits = (month: string, v: number) => ({
    month,
    visits: v,
    search: 0,
    link: 0,
    direct: v,
  })

  it('counts units separately from order count', () => {
    // Three orders that between them took five bottles off the shelf. Revenue
    // and order count both understate what has to be replaced, which is the
    // whole reason units are tracked at all.
    const [row] = joinMonthly(
      [visits('2026-09-01', 100)],
      [{ month: '2026-09-01', orders: 3, revenueCents: 17995 }],
      [{ month: '2026-09-01', units: 5 }],
    )
    expect(row.orders).toBe(3)
    expect(row.units).toBe(5)
  })

  it('leaves units at zero for a month with none', () => {
    const [row] = joinMonthly([visits('2026-09-01', 100)], [], [])
    expect(row.units).toBe(0)
  })

  it('ignores unit rows for months that have no visits and no sales', () => {
    // Defensive: a units row without a matching month would otherwise create a
    // half-populated row with no revenue beside it.
    const rows = joinMonthly([], [], [{ month: '2026-01-01', units: 9 }])
    expect(rows).toHaveLength(0)
  })
})
