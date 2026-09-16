import { describe, expect, it } from 'vitest'
import {
  NO_CAMPAIGN,
  campaignFromInput,
  campaignFromSearch,
  campaignLabel,
  hasCampaign,
} from './campaign'

describe('reading tags off a landing URL', () => {
  it('picks up the four tags that are kept', () => {
    const tags = campaignFromSearch(
      '?utm_source=facebook&utm_medium=cpc&utm_campaign=dry-eye-launch&utm_content=video-a',
    )
    expect(tags).toEqual({
      utmSource: 'facebook',
      utmMedium: 'cpc',
      utmCampaign: 'dry-eye-launch',
      utmContent: 'video-a',
    })
  })

  it('never keeps utm_term', () => {
    /**
     * The one tag deliberately dropped. On paid search it carries the words
     * the visitor typed, which is the same thing `referrerHost` exists to
     * avoid storing. A regression here would start collecting search queries
     * without anything looking different.
     */
    const tags = campaignFromSearch(
      '?utm_source=google&utm_term=how+to+treat+dry+eyes',
    )
    expect(JSON.stringify(tags)).not.toContain('dry eyes')
    expect(JSON.stringify(tags)).not.toContain('how')
    expect(Object.keys(tags)).toEqual([
      'utmSource',
      'utmMedium',
      'utmCampaign',
      'utmContent',
    ])
  })

  it('lowercases so one campaign is one row', () => {
    // "Facebook" and "facebook" splitting into two rows would quietly halve
    // both, and neither would be right.
    expect(campaignFromSearch('?utm_source=FaceBook').utmSource).toBe('facebook')
  })

  it('treats blank and whitespace-only tags as absent', () => {
    const tags = campaignFromSearch('?utm_source=&utm_medium=%20%20&utm_campaign=x')
    expect(tags.utmSource).toBeNull()
    expect(tags.utmMedium).toBeNull()
    expect(tags.utmCampaign).toBe('x')
  })

  it('caps length rather than rejecting the visit', () => {
    const long = 'a'.repeat(500)
    expect(campaignFromSearch(`?utm_campaign=${long}`).utmCampaign).toHaveLength(120)
  })

  it('strips control characters', () => {
    // These would make the admin table render something other than what is
    // stored, which is a small lie that is hard to notice.
    expect(campaignFromSearch('?utm_source=face%00book%09x').utmSource).toBe('facebookx')
  })

  it('returns all-nulls for an untagged URL', () => {
    expect(campaignFromSearch('')).toEqual(NO_CAMPAIGN)
    expect(campaignFromSearch('?ref=newsletter')).toEqual(NO_CAMPAIGN)
  })
})

describe('accepting tags off the wire', () => {
  it('applies the same cleaning as the URL path', () => {
    expect(campaignFromInput({ utmSource: '  Facebook  ' }).utmSource).toBe('facebook')
  })

  it('ignores non-strings instead of coercing them', () => {
    // "[object Object]" and "123" are the classic results of coercing here,
    // and both would be indistinguishable from a real campaign in the report.
    const tags = campaignFromInput({
      utmSource: 123,
      utmMedium: {},
      utmCampaign: null,
      utmContent: ['a'],
    })
    expect(tags).toEqual(NO_CAMPAIGN)
  })

  it('survives junk input without throwing', () => {
    for (const junk of [null, undefined, 'a string', 42, []]) {
      expect(campaignFromInput(junk)).toEqual(NO_CAMPAIGN)
    }
  })

  it('keeps only the four known keys', () => {
    const tags = campaignFromInput({
      utmSource: 'facebook',
      utmTerm: 'dry eyes',
      somethingElse: 'x',
    }) as Record<string, unknown>
    expect(tags.utmTerm).toBeUndefined()
    expect(tags.somethingElse).toBeUndefined()
  })
})

describe('labelling', () => {
  it('names a campaign by source and campaign together', () => {
    // Either alone is ambiguous: two adverts share a source, and one campaign
    // run on two networks is two things worth comparing separately.
    expect(
      campaignLabel({
        utmSource: 'facebook',
        utmMedium: 'cpc',
        utmCampaign: 'dry-eye-launch',
        utmContent: null,
      }),
    ).toBe('facebook · dry-eye-launch')
  })

  it('falls back sensibly on partial tags', () => {
    expect(
      campaignLabel({ ...NO_CAMPAIGN, utmSource: 'newsletter' }),
    ).toBe('newsletter')
    expect(
      campaignLabel({ ...NO_CAMPAIGN, utmCampaign: 'spring' }),
    ).toBe('unknown source · spring')
  })

  it('calls untagged traffic "No campaign"', () => {
    expect(campaignLabel(NO_CAMPAIGN)).toBe('No campaign')
    expect(hasCampaign(NO_CAMPAIGN)).toBe(false)
  })
})
