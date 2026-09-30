import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * Visit source attribution.
 *
 * The property under test is the one this route got wrong for its first month:
 * the referrer it classifies must be the one the **client** sent from
 * `document.referrer`, never the `Referer` header of the tracking request
 * itself. That header is always our own page, so reading it labelled every
 * visitor "direct" -- 466 of 468 rows, and not one search arrival on a site
 * that had been indexed in Search Console for a month.
 *
 * Every `post()` below sends a `Referer` header pointing at our own site,
 * because that is what a browser really sends for this fetch. So each
 * assertion about the body referrer is also an assertion that the header is
 * ignored. If these pass while the header is read again, the Traffic report is
 * silently meaningless.
 */

const prisma = { visit: { upsert: vi.fn() } }
const rateLimit = vi.fn()

vi.mock('@/lib/db', () => ({ prisma }))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit,
  clientIp: () => '203.0.113.7',
}))
vi.mock('@/lib/site', () => ({ appUrl: () => 'https://quelldrop.com' }))

const { POST } = await import('./route')

const VISIT_ID = '8f2a1c34-0b5e-4d7a-9c11-2e6f8a0b3d45'

/**
 * A real browser user agent is required, not decoration: `isBot` treats a
 * missing UA as a bot and the route returns 204 before it writes anything.
 */
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'

const post = (body: Record<string, unknown>) =>
  POST(
    new Request('https://quelldrop.com/api/track', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        referer: 'https://quelldrop.com/drug-facts',
        'user-agent': UA,
      },
      body: JSON.stringify({ visitId: VISIT_ID, ...body }),
    }),
  )

/** The `create` half of the upsert -- the only place source is ever written. */
const created = () => prisma.visit.upsert.mock.calls[0][0].create

beforeEach(() => {
  vi.clearAllMocks()
  rateLimit.mockResolvedValue({ ok: true })
  prisma.visit.upsert.mockResolvedValue({})
})

describe('POST /api/track', () => {
  it('classifies a search arrival from the referrer the client sent', async () => {
    const res = await post({
      referrer: 'https://www.google.com/search?q=dry+eye+drops',
    })
    expect(res.status).toBe(204)
    expect(created()).toMatchObject({
      source: 'search',
      referrerHost: 'google.com',
    })
  })

  it('keeps the host only, never the words the visitor typed', async () => {
    await post({
      referrer: 'https://www.google.com/search?q=embarrassing+symptom',
    })
    expect(created().referrerHost).toBe('google.com')
    expect(JSON.stringify(created())).not.toContain('embarrassing')
  })

  it('classifies an external site as a link', async () => {
    await post({ referrer: 'https://www.reddit.com/r/dryeyes/comments/abc/' })
    expect(created()).toMatchObject({
      source: 'link',
      referrerHost: 'reddit.com',
    })
  })

  it('treats our own site as direct rather than as a traffic source', async () => {
    await post({ referrer: 'https://quelldrop.com/' })
    expect(created()).toMatchObject({ source: 'direct', referrerHost: null })
  })

  it('treats an empty referrer as direct', async () => {
    // What `document.referrer` actually is for a typed address or a bookmark.
    await post({ referrer: '' })
    expect(created()).toMatchObject({ source: 'direct', referrerHost: null })
  })

  it('ignores the Referer header entirely', async () => {
    // The header names a page on our own domain and nothing else is supplied.
    // Before the fix this route read exactly that and called it the source.
    await post({})
    expect(created()).toMatchObject({ source: 'direct', referrerHost: null })
  })

  it('does not let a malformed referrer cost the visit', async () => {
    await post({ referrer: 'not a url' })
    expect(prisma.visit.upsert).toHaveBeenCalledTimes(1)
    expect(created()).toMatchObject({ source: 'direct', referrerHost: null })
  })

  it('does not let a null referrer cost the visit', async () => {
    // The same shape that once ate every campaign-tagged visit whole.
    await post({ referrer: null })
    expect(prisma.visit.upsert).toHaveBeenCalledTimes(1)
    expect(created()).toMatchObject({ source: 'direct', referrerHost: null })
  })

  it('refuses an absurd referrer without dropping the visit', async () => {
    await post({ referrer: 'https://x.example/' + 'a'.repeat(4000) })
    expect(prisma.visit.upsert).toHaveBeenCalledTimes(1)
    expect(created()).toMatchObject({ source: 'direct', referrerHost: null })
  })

  it('records campaign tags alongside the referrer', async () => {
    await post({
      referrer: 'https://l.facebook.com/',
      utmSource: 'facebook',
      utmMedium: 'cpc',
      utmCampaign: 'dry-eye-launch',
    })
    expect(created()).toMatchObject({
      utmSource: 'facebook',
      utmMedium: 'cpc',
      utmCampaign: 'dry-eye-launch',
    })
  })

  it('never writes source on update, so a later page cannot relabel a visit', async () => {
    await post({ referrer: 'https://www.google.com/' })
    const arg = prisma.visit.upsert.mock.calls[0][0]
    expect(arg.update).toEqual({ lastSeenAt: expect.any(Date) })
    expect(arg.update).not.toHaveProperty('source')
  })
})
