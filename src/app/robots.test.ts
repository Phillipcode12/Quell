import { beforeEach, describe, expect, it, vi } from 'vitest'
import robots from './robots'

/**
 * Indexing is guarded by three independent checks and must fail closed.
 * Getting this wrong in either direction is expensive: publishing a shop that
 * cannot take payment, or staying invisible after launch and not noticing for
 * weeks.
 */

const disallowAll = { rules: { userAgent: '*', disallow: '/' } }

/**
 * The Host header the route sees.
 *
 * Mocked rather than faked with a real request because `robots()` is a Route
 * Handler, and the only thing these tests care about is the hostname it is
 * handed. Default to the real domain so each test changes one thing.
 */
let servingHost = 'quelldrop.com'

vi.mock('next/headers', () => ({
  headers: async () => new Headers({ host: servingHost }),
}))

beforeEach(() => {
  vi.stubEnv('ALLOW_INDEXING', '')
  vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
  servingHost = 'quelldrop.com'
})

describe('while indexing is switched off', () => {
  it('disallows everything when ALLOW_INDEXING is unset', async () => {
    // The default. A missing variable must never quietly publish the site.
    vi.stubEnv('ALLOW_INDEXING', '')
    await expect(robots()).resolves.toEqual(disallowAll)
  })

  it('only accepts the exact string "true"', async () => {
    // Guards against a half-set value reading as truthy.
    for (const value of ['false', 'TRUE', '1', 'yes', 'on', ' true']) {
      vi.stubEnv('ALLOW_INDEXING', value)
      await expect(robots(), `ALLOW_INDEXING=${JSON.stringify(value)}`).resolves.toEqual(
        disallowAll,
      )
    }
  })

  it('disallows even on the real domain', async () => {
    // The whole point of separating the guards: the canonical URL can be
    // correct long before the store is ready to be found.
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
    await expect(robots()).resolves.toEqual(disallowAll)
  })
})

describe('the configured-host guard is independent of the flag', () => {
  it('never indexes when NEXT_PUBLIC_APP_URL points at staging', async () => {
    vi.stubEnv('ALLOW_INDEXING', 'true')

    for (const origin of [
      'https://quell-six.vercel.app',
      'https://some-preview-abc123.vercel.app',
      'http://localhost:3000',
      'http://quell.local',
    ]) {
      vi.stubEnv('NEXT_PUBLIC_APP_URL', origin)
      await expect(robots(), origin).resolves.toEqual(disallowAll)
    }
  })

  it('stays out of the index when the URL is unusable', async () => {
    // appUrl() falls back to localhost on a malformed value, which the guard
    // then catches. Misconfiguration must not mean "index everything".
    vi.stubEnv('ALLOW_INDEXING', 'true')
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'not a url')
    await expect(robots()).resolves.toEqual(disallowAll)

    vi.stubEnv('NEXT_PUBLIC_APP_URL', '')
    await expect(robots()).resolves.toEqual(disallowAll)
  })
})

describe('the serving-host guard', () => {
  /**
   * This is the one that was missing, and it was missing for a year of
   * deployments without anyone noticing.
   *
   * The configured-host check tests NEXT_PUBLIC_APP_URL, which in production
   * is quelldrop.com — so it passed on every host the deployment answers to,
   * and quell-six.vercel.app served `Allow: /` for the identical shop.
   * Confirmed against the live site, then fixed.
   */
  beforeEach(() => {
    vi.stubEnv('ALLOW_INDEXING', 'true')
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
  })

  it('keeps the vercel.app fallback out of search results', async () => {
    // Deliberately not redirected, so the shop survives a DNS mistake.
    // Reachable by a person and absent from search are different things.
    servingHost = 'quell-six.vercel.app'
    await expect(robots()).resolves.toEqual(disallowAll)
  })

  it('keeps preview deployments out too', async () => {
    servingHost = 'quell-git-some-branch-quell1.vercel.app'
    await expect(robots()).resolves.toEqual(disallowAll)
  })

  it('keeps local development out', async () => {
    for (const host of ['localhost', 'localhost:3000', 'quell.local']) {
      servingHost = host
      await expect(robots(), host).resolves.toEqual(disallowAll)
    }
  })

  it('ignores the port when judging the host', async () => {
    // "localhost:3000" must be recognised as localhost, not as an unknown
    // host that happens to be allowed.
    servingHost = 'localhost:3000'
    await expect(robots()).resolves.toEqual(disallowAll)
  })

  it('fails closed when there is no Host header', async () => {
    servingHost = ''
    await expect(robots()).resolves.toEqual(disallowAll)
  })

  it('is case-insensitive', async () => {
    // Host headers are not required to be lowercase.
    servingHost = 'QUELL-SIX.VERCEL.APP'
    await expect(robots()).resolves.toEqual(disallowAll)
  })

  it('lets the real domain through', async () => {
    servingHost = 'quelldrop.com'
    const result = await robots()
    expect(result.rules).toMatchObject({ userAgent: '*', allow: '/' })
  })
})

describe('once every guard passes', () => {
  beforeEach(() => {
    vi.stubEnv('ALLOW_INDEXING', 'true')
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
    servingHost = 'quelldrop.com'
  })

  it('allows crawling and points at the sitemap on the real domain', async () => {
    const result = await robots()

    expect(result.rules).toMatchObject({ userAgent: '*', allow: '/' })
    expect(result.sitemap).toBe('https://quelldrop.com/sitemap.xml')
  })

  it('still keeps transactional and per-user paths out', async () => {
    const result = await robots()
    const rules = result.rules as { disallow: string[] }

    // Not secret — these are protected elsewhere — but a cart or a receipt in
    // search results is worthless to everyone.
    expect(rules.disallow).toEqual(
      expect.arrayContaining(['/api/', '/account', '/cart', '/checkout/', '/admin']),
    )
  })
})
