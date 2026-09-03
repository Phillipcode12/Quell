import { describe, expect, it } from 'vitest'
import { isBot, normalisePath, referrerHost } from '@/lib/analytics'

/**
 * The pure parts of the tracker: what gets counted, and what gets stored.
 *
 * The database reads are not covered here for the same reason nothing else in
 * this suite covers Prisma — every call would be mocked, and a mocked
 * groupBy proves only that the mock was called.
 *
 * What is worth testing is the filtering, because both directions are wrong in
 * a way nobody notices: a bot counted as a customer quietly inflates every
 * number on the dashboard, and a real visitor dropped as a bot quietly deflates
 * them. Neither shows up as an error.
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

describe('normalisePath', () => {
  it('keeps ordinary paths', () => {
    expect(normalisePath('/')).toBe('/')
    expect(normalisePath('/cart')).toBe('/cart')
    expect(normalisePath('/orders/Q-7DAGMJPS')).toBe('/orders/Q-7DAGMJPS')
  })

  it('drops the query string, which can carry an email', () => {
    expect(normalisePath('/orders?email=someone@example.com')).toBe('/orders')
    expect(normalisePath('/checkout#step2')).toBe('/checkout')
  })

  it('refuses anything that is not a plain absolute path', () => {
    // A protocol-relative path would record another site as one of ours.
    expect(normalisePath('//evil.example.com/x')).toBeNull()
    expect(normalisePath('https://evil.example.com/x')).toBeNull()
    expect(normalisePath('cart')).toBeNull()
    expect(normalisePath('')).toBeNull()
    expect(normalisePath(null)).toBeNull()
    expect(normalisePath(42)).toBeNull()
  })

  it('refuses an over-long path rather than truncating it', () => {
    // Truncating would store a path that was never visited.
    expect(normalisePath('/' + 'a'.repeat(600))).toBeNull()
  })

  it('does not count the admin area', () => {
    // Otherwise checking the numbers inflates them, and the site looks busier
    // the more often it is checked.
    expect(normalisePath('/admin')).toBeNull()
    expect(normalisePath('/admin/orders')).toBeNull()
    expect(normalisePath('/admin/analytics')).toBeNull()
  })

  it('does not mistake a customer page for the admin area', () => {
    // A path that merely starts with the same letters is a real page.
    expect(normalisePath('/administration-of-drops')).toBe('/administration-of-drops')
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
