import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { turnstileEnabled, verifyTurnstile } from './turnstile'

/**
 * The failure that matters here is this returning `ok: true` when it should
 * not, because nothing visible breaks when a bot protection quietly stops
 * protecting. Every test below is a way that could happen.
 */

const SECRET = '1x0000000000000000000000000000000AA'

beforeEach(() => {
  vi.stubEnv('TURNSTILE_SECRET_KEY', SECRET)
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

function mockVerify(body: unknown, init: { ok?: boolean } = {}) {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: init.ok ?? true,
    json: async () => body,
  })
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

describe('refusing to pass when it cannot prove otherwise', () => {
  it('fails closed when the secret is missing', async () => {
    // The whole point. "Not configured" must never read as "allowed" — that is
    // how a protection disappears without anything breaking.
    vi.stubEnv('TURNSTILE_SECRET_KEY', '')
    const fetchMock = mockVerify({ success: true })

    expect(await verifyTurnstile('any-token')).toEqual({
      ok: false,
      reason: 'not-configured',
    })
    // And it does not even ask Cloudflare, so a missing key cannot be masked
    // by a permissive response.
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('fails closed when a secret is whitespace only', async () => {
    vi.stubEnv('TURNSTILE_SECRET_KEY', '   ')
    expect((await verifyTurnstile('t')).ok).toBe(false)
  })

  it('rejects a missing or non-string token without a round trip', async () => {
    const fetchMock = mockVerify({ success: true })
    for (const token of [undefined, null, '', 123, {}]) {
      const result = await verifyTurnstile(token)
      expect(result, `token ${JSON.stringify(token)}`).toEqual({
        ok: false,
        reason: 'missing-token',
      })
    }
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('treats a Cloudflare outage as a failure, not a pass', async () => {
    mockVerify({}, { ok: false })
    expect(await verifyTurnstile('t')).toEqual({ ok: false, reason: 'unreachable' })
  })

  it('treats a network error or timeout as a failure, not a pass', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('ETIMEDOUT')))
    expect(await verifyTurnstile('t')).toEqual({ ok: false, reason: 'unreachable' })
  })

  it('does not accept a merely truthy success field', async () => {
    // `success: "false"` and `success: 1` are both truthy. An `if (payload.success)`
    // would pass them; the strict check does not.
    for (const success of ['false', 1, 'true', {}]) {
      mockVerify({ success })
      expect((await verifyTurnstile('t')).ok, `success: ${JSON.stringify(success)}`).toBe(
        false,
      )
    }
  })

  it('surfaces a replayed token as a rejection with its code', async () => {
    // Tokens are single-use. If a route ever verifies twice this is what it
    // sees, and it must not be mistaken for a pass.
    mockVerify({ success: false, 'error-codes': ['timeout-or-duplicate'] })
    expect(await verifyTurnstile('t')).toEqual({
      ok: false,
      reason: 'rejected',
      codes: ['timeout-or-duplicate'],
    })
  })
})

describe('what it sends to Cloudflare', () => {
  it('posts the secret and token form-encoded', async () => {
    const fetchMock = mockVerify({ success: true })
    await verifyTurnstile('the-token')

    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('https://challenges.cloudflare.com/turnstile/v0/siteverify')
    expect(init.method).toBe('POST')

    const sent = new URLSearchParams(init.body as string)
    expect(sent.get('secret')).toBe(SECRET)
    expect(sent.get('response')).toBe('the-token')
  })

  it('includes the visitor IP when known and omits it when not', async () => {
    let fetchMock = mockVerify({ success: true })
    await verifyTurnstile('t', '203.0.113.7')
    expect(new URLSearchParams(fetchMock.mock.calls[0][1].body).get('remoteip')).toBe(
      '203.0.113.7',
    )

    // Sending an empty remoteip is worse than sending none — it is a value
    // Cloudflare would have to interpret.
    fetchMock = mockVerify({ success: true })
    await verifyTurnstile('t')
    expect(new URLSearchParams(fetchMock.mock.calls[0][1].body).has('remoteip')).toBe(
      false,
    )
  })

  it('gives up rather than hanging the request', async () => {
    const fetchMock = mockVerify({ success: true })
    await verifyTurnstile('t')
    expect(fetchMock.mock.calls[0][1].signal).toBeInstanceOf(AbortSignal)
  })
})

describe('the happy path', () => {
  it('passes a genuine success through', async () => {
    mockVerify({ success: true, hostname: 'quelldrop.com' })
    expect(await verifyTurnstile('t', '203.0.113.7')).toEqual({ ok: true })
  })
})

describe('turnstileEnabled keys on the site key, not the secret', () => {
  /**
   * This distinction is the whole safety property, and getting it backwards
   * is a silent failure rather than a loud one.
   *
   * Gating on the secret would mean that setting the site key and forgetting
   * the secret produces a form that shows a widget, has visitors solve it,
   * and verifies nothing — protection that looks present and is not. Gating
   * on the site key means that same mistake refuses every request instead.
   */
  it('is off when neither key is set, so local work needs no Cloudflare account', () => {
    vi.stubEnv('NEXT_PUBLIC_TURNSTILE_SITE_KEY', '')
    vi.stubEnv('TURNSTILE_SECRET_KEY', '')
    expect(turnstileEnabled()).toBe(false)
  })

  it('is ON when the site key is set but the secret is missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_TURNSTILE_SITE_KEY', '0x4AAAAAAExample')
    vi.stubEnv('TURNSTILE_SECRET_KEY', '')

    // Enabled, so the routes will call verify...
    expect(turnstileEnabled()).toBe(true)
    // ...and verify refuses, so a half-finished configuration blocks the form
    // rather than quietly waving everything through.
    expect(await verifyTurnstile('a-real-looking-token')).toEqual({
      ok: false,
      reason: 'not-configured',
    })
  })

  it('ignores a whitespace-only site key', () => {
    vi.stubEnv('NEXT_PUBLIC_TURNSTILE_SITE_KEY', '   ')
    expect(turnstileEnabled()).toBe(false)
  })
})
