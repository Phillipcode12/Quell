import { beforeEach, describe, expect, it, vi } from 'vitest'
import robots from './robots'

/**
 * Indexing is guarded by two independent checks and must fail closed. Getting
 * this wrong in either direction is expensive: publishing a shop that cannot
 * take payment, or staying invisible after launch and not noticing for weeks.
 */

const disallowAll = { rules: { userAgent: '*', disallow: '/' } }

beforeEach(() => {
  vi.stubEnv('ALLOW_INDEXING', '')
  vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
})

describe('while indexing is switched off', () => {
  it('disallows everything when ALLOW_INDEXING is unset', () => {
    // The default. A missing variable must never quietly publish the site.
    vi.stubEnv('ALLOW_INDEXING', '')
    expect(robots()).toEqual(disallowAll)
  })

  it('only accepts the exact string "true"', () => {
    // Guards against a half-set value reading as truthy.
    for (const value of ['false', 'TRUE', '1', 'yes', 'on', ' true']) {
      vi.stubEnv('ALLOW_INDEXING', value)
      expect(robots(), `ALLOW_INDEXING=${JSON.stringify(value)}`).toEqual(
        disallowAll,
      )
    }
  })

  it('disallows even on the real domain', () => {
    // The whole point of separating the two guards: the canonical URL can be
    // correct long before the store is ready to be found.
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
    expect(robots()).toEqual(disallowAll)
  })
})

describe('the staging guard is independent of the flag', () => {
  it('never indexes a vercel.app or local origin, even with the flag on', () => {
    vi.stubEnv('ALLOW_INDEXING', 'true')

    for (const origin of [
      'https://quell-six.vercel.app',
      'https://some-preview-abc123.vercel.app',
      'http://localhost:3000',
      'http://quell.local',
    ]) {
      vi.stubEnv('NEXT_PUBLIC_APP_URL', origin)
      expect(robots(), origin).toEqual(disallowAll)
    }
  })

  it('stays out of the index when the URL is unusable', () => {
    // appUrl() falls back to localhost on a malformed value, which the staging
    // guard then catches. Misconfiguration must not mean "index everything".
    vi.stubEnv('ALLOW_INDEXING', 'true')
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'not a url')
    expect(robots()).toEqual(disallowAll)

    vi.stubEnv('NEXT_PUBLIC_APP_URL', '')
    expect(robots()).toEqual(disallowAll)
  })
})

describe('once both guards pass', () => {
  beforeEach(() => {
    vi.stubEnv('ALLOW_INDEXING', 'true')
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
  })

  it('allows crawling and points at the sitemap on the real domain', () => {
    const result = robots()

    expect(result.rules).toMatchObject({ userAgent: '*', allow: '/' })
    expect(result.sitemap).toBe('https://quelldrop.com/sitemap.xml')
  })

  it('still keeps transactional and per-user paths out', () => {
    const rules = robots().rules as { disallow: string[] }

    // Not secret — these are protected elsewhere — but a cart or a receipt in
    // search results is worthless to everyone.
    expect(rules.disallow).toEqual(
      expect.arrayContaining(['/api/', '/account', '/cart', '/checkout/', '/admin']),
    )
  })
})
