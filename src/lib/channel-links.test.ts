import { describe, expect, it } from 'vitest'
import { CHANNELS, channelDestination } from './channel-links'

const params = (search: string) => new URLSearchParams(search)
const destParams = (url: string) => new URLSearchParams(url.replace(/^\/\?/, ''))

describe('channelDestination', () => {
  it('carries the channel tags to the homepage', () => {
    const result = destParams(channelDestination('tiktok'))
    expect(Object.fromEntries(result)).toEqual({
      utm_source: 'tiktok',
      utm_medium: 'social',
      utm_campaign: 'bio',
    })
  })

  it('lands on the homepage, not a deep link', () => {
    expect(channelDestination('tiktok').startsWith('/?')).toBe(true)
  })

  it('lets an incoming utm_content label the placement', () => {
    // The point of this: one bio link, told apart per video, with no code change.
    const result = destParams(
      channelDestination('tiktok', params('utm_content=january-video')),
    )
    expect(result.get('utm_content')).toBe('january-video')
    // and the defaults survive
    expect(result.get('utm_source')).toBe('tiktok')
    expect(result.get('utm_campaign')).toBe('bio')
  })

  it('lets an incoming tag override a default', () => {
    const result = destParams(
      channelDestination('tiktok', params('utm_campaign=launch')),
    )
    expect(result.get('utm_campaign')).toBe('launch')
    expect(result.get('utm_source')).toBe('tiktok')
  })

  it('drops anything that is not a utm_ parameter', () => {
    // So the link cannot be used to bounce arbitrary query data through our
    // domain on the way to the shop.
    const result = destParams(
      channelDestination(
        'tiktok',
        params('next=https://example.com&ref=spam&utm_content=ok'),
      ),
    )
    expect(result.get('next')).toBeNull()
    expect(result.get('ref')).toBeNull()
    expect(result.get('utm_content')).toBe('ok')
  })

  it('ignores an empty override rather than blanking a default', () => {
    const result = destParams(
      channelDestination('tiktok', params('utm_campaign=&utm_source=   ')),
    )
    expect(result.get('utm_campaign')).toBe('bio')
    expect(result.get('utm_source')).toBe('tiktok')
  })

  it('produces a destination that campaign parsing can read back', async () => {
    // The real contract: whatever this builds has to survive the client-side
    // capture, or the link is decorative.
    const { campaignFromSearch } = await import('./campaign')
    const destination = channelDestination(
      'tiktok',
      params('utm_content=january-video'),
    )

    expect(campaignFromSearch(destination.replace(/^\/\?/, ''))).toEqual({
      utmSource: 'tiktok',
      utmMedium: 'social',
      utmCampaign: 'bio',
      utmContent: 'january-video',
    })
  })

  it('every configured channel builds a readable destination', () => {
    for (const channel of Object.keys(CHANNELS) as (keyof typeof CHANNELS)[]) {
      const result = destParams(channelDestination(channel))
      expect(result.get('utm_source')).toBe(channel)
    }
  })
})
