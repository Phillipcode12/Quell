import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  clientIp,
  isDistributedRateLimitConfigured,
  rateLimit,
  tooManyRequests,
} from './rate-limit'

/**
 * Rate limiting guards sign-in, checkout and guest order lookup -- the last of
 * which is an unauthenticated read of a stranger's name and address, keyed on
 * an 8-character order number. Guessing is the realistic attack, so the
 * counting has to be right.
 *
 * Note what these tests can and cannot show. The in-process backend is what
 * production actually runs on today (no Upstash database exists) and it is
 * exercised here for real. The Upstash backend is driven against a mocked
 * fetch: that pins the wire protocol and the fallback behaviour, but it has
 * never run against a real Redis, and nothing here should be read as saying
 * otherwise.
 */

// Bucket state lives at module scope and is shared by every test in this file,
// so each test takes a fresh key rather than trying to reset it.
let counter = 0
const freshKey = () => `test-key-${counter++}`

afterEach(() => {
  vi.useRealTimers()
})

describe('in-process backend', () => {
  it('allows exactly the limit, then refuses', async () => {
    const key = freshKey()
    const options = { limit: 3, windowMs: 60_000 }

    for (let i = 0; i < 3; i += 1) {
      expect((await rateLimit(key, options)).ok).toBe(true)
    }

    const blocked = await rateLimit(key, options)
    expect(blocked.ok).toBe(false)
    expect(blocked.remaining).toBe(0)
  })

  it('counts remaining down to zero on the last allowed request', async () => {
    const key = freshKey()
    const options = { limit: 3, windowMs: 60_000 }

    expect((await rateLimit(key, options)).remaining).toBe(2)
    expect((await rateLimit(key, options)).remaining).toBe(1)
    expect((await rateLimit(key, options)).remaining).toBe(0)
  })

  it('reports a Retry-After of at least one second when blocking', async () => {
    // A blocked result feeds this straight into the header. Zero would tell a
    // client to retry immediately, turning the limit into a busy loop; the
    // implementation floors it at 1 for the sub-second remainder case.
    const key = freshKey()
    const options = { limit: 1, windowMs: 60_000 }

    await rateLimit(key, options)
    const blocked = await rateLimit(key, options)

    expect(blocked.ok).toBe(false)
    expect(blocked.retryAfter).toBeGreaterThanOrEqual(1)
    expect(blocked.retryAfter).toBeLessThanOrEqual(60)
  })

  it('starts a fresh window once the old one expires', async () => {
    vi.useFakeTimers()
    const key = freshKey()
    const options = { limit: 2, windowMs: 60_000 }

    await rateLimit(key, options)
    await rateLimit(key, options)
    expect((await rateLimit(key, options)).ok).toBe(false)

    // Fixed window, not sliding: the whole allowance returns at once.
    vi.advanceTimersByTime(60_001)

    const afterReset = await rateLimit(key, options)
    expect(afterReset.ok).toBe(true)
    expect(afterReset.remaining).toBe(1)
  })

  it('keeps a blocked window blocked until it actually expires', async () => {
    vi.useFakeTimers()
    const key = freshKey()
    const options = { limit: 1, windowMs: 60_000 }

    await rateLimit(key, options)
    expect((await rateLimit(key, options)).ok).toBe(false)

    // Requests inside the window must not extend it -- and must not reset it.
    vi.advanceTimersByTime(59_000)
    expect((await rateLimit(key, options)).ok).toBe(false)

    vi.advanceTimersByTime(2_000)
    expect((await rateLimit(key, options)).ok).toBe(true)
  })

  it('counts each key separately', async () => {
    // Keys are built as `checkout:<ip>` and `order-lookup:<ip>`, so one
    // customer exhausting lookups must not lock another customer out, and
    // hitting the lookup limit must not close checkout.
    const options = { limit: 1, windowMs: 60_000 }
    const a = freshKey()
    const b = freshKey()

    await rateLimit(a, options)
    expect((await rateLimit(a, options)).ok).toBe(false)
    expect((await rateLimit(b, options)).ok).toBe(true)
  })
})

describe('backend selection', () => {
  it('stays in-process unless both Upstash variables are set', () => {
    vi.stubEnv('UPSTASH_REDIS_REST_URL', '')
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', '')
    expect(isDistributedRateLimitConfigured()).toBe(false)

    // Half-configured is the case worth pinning: a URL with no token would be
    // a silent downgrade to per-instance counting if it were treated as ready.
    vi.stubEnv('UPSTASH_REDIS_REST_URL', 'https://example.upstash.io')
    expect(isDistributedRateLimitConfigured()).toBe(false)

    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'token')
    expect(isDistributedRateLimitConfigured()).toBe(true)
  })
})

describe('Upstash backend (mocked transport)', () => {
  let fetchMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    vi.stubEnv('UPSTASH_REDIS_REST_URL', 'https://example.upstash.io/')
    vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'test-token')
    fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
  })

  const pipelineResponse = (count: number, ttl: number) => ({
    ok: true,
    json: async () => [{ result: count }, { result: ttl }],
    text: async () => '',
  })

  it('sends INCR and TTL as one pipelined round trip', async () => {
    fetchMock.mockResolvedValue(pipelineResponse(1, -1))

    await rateLimit('checkout:1.2.3.4', { limit: 5, windowMs: 60_000 })

    const [url, init] = fetchMock.mock.calls[0]
    // The trailing slash on the configured URL has to be stripped, or every
    // request goes to a double-slashed path.
    expect(url).toBe('https://example.upstash.io/pipeline')
    expect(init.headers.Authorization).toBe('Bearer test-token')
    expect(JSON.parse(init.body)).toEqual([
      ['INCR', 'rl:checkout:1.2.3.4'],
      ['TTL', 'rl:checkout:1.2.3.4'],
    ])
  })

  it('sets the expiry only on the first request of a window', async () => {
    // EXPIRE on every request would slide the window forward each time, so a
    // steady stream of traffic would keep pushing the reset out and the limit
    // would never actually reset. The second call has a live TTL and must not
    // re-arm it.
    fetchMock.mockResolvedValue(pipelineResponse(1, -1))
    await rateLimit('k', { limit: 5, windowMs: 60_000 })
    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(fetchMock.mock.calls[1][0]).toContain('/expire/rl%3Ak/60')

    fetchMock.mockClear()
    fetchMock.mockResolvedValue(pipelineResponse(2, 45))
    await rateLimit('k', { limit: 5, windowMs: 60_000 })
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('blocks once the shared count passes the limit', async () => {
    fetchMock.mockResolvedValue(pipelineResponse(6, 30))

    const result = await rateLimit('k', { limit: 5, windowMs: 60_000 })

    expect(result.ok).toBe(false)
    expect(result.retryAfter).toBe(30)
  })

  it('falls back in-process when Upstash is unreachable', async () => {
    // A Redis outage should degrade protection, not take down sign-in and
    // checkout -- but it has to be visible, because silently running on the
    // weaker backend is exactly the thing you want to know about.
    fetchMock.mockRejectedValue(new Error('ECONNREFUSED'))
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = await rateLimit(freshKey(), { limit: 2, windowMs: 60_000 })

    expect(result.ok).toBe(true)
    expect(error).toHaveBeenCalled()
    expect(String(error.mock.calls[0][0])).toContain('[rate-limit]')
  })

  it('falls back when Upstash answers with an HTTP error', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 500,
      text: async () => 'boom',
      json: async () => ({}),
    })
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = await rateLimit(freshKey(), { limit: 2, windowMs: 60_000 })

    expect(result.ok).toBe(true)
  })

  it('falls back when the response carries no usable count', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => [{ error: 'WRONGTYPE' }, { result: 10 }],
      text: async () => '',
    })
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = await rateLimit(freshKey(), { limit: 2, windowMs: 60_000 })

    expect(result.ok).toBe(true)
  })
})

describe('clientIp', () => {
  const withHeaders = (headers: Record<string, string>) =>
    new Request('https://quell.example/api', { headers })

  it('takes the first hop from x-forwarded-for', () => {
    // The list runs client first, then each proxy. Reading the last entry
    // would key the limit on the proxy and rate limit every customer as one.
    expect(
      clientIp(withHeaders({ 'x-forwarded-for': '203.0.113.5, 70.41.3.18' })),
    ).toBe('203.0.113.5')
  })

  it('trims whitespace around the address', () => {
    expect(
      clientIp(withHeaders({ 'x-forwarded-for': '  203.0.113.5  ' })),
    ).toBe('203.0.113.5')
  })

  it('falls back to x-real-ip, then to a constant', () => {
    expect(clientIp(withHeaders({ 'x-real-ip': '203.0.113.9' }))).toBe(
      '203.0.113.9',
    )
    // Everything unidentifiable shares one bucket. Deliberate: it fails toward
    // limiting rather than toward waving traffic through.
    expect(clientIp(withHeaders({}))).toBe('unknown')
  })
})

describe('tooManyRequests', () => {
  it('returns 429 with a Retry-After header and the message', async () => {
    const response = tooManyRequests(42, 'Too many lookups.')

    expect(response.status).toBe(429)
    expect(response.headers.get('Retry-After')).toBe('42')
    await expect(response.json()).resolves.toEqual({
      error: 'Too many lookups.',
    })
  })
})
