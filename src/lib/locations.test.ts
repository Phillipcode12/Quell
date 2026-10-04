import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  PUBLISHED_LOCATION_COUNT,
  allLocations,
  findLocation,
  locationLabel,
  locationPagesEnabled,
  locationPath,
  locationShortLabel,
  publishedLocations,
  sameStateLocations,
} from './locations'

/**
 * The city pages, which exist over my objection and with the reasoning recorded
 * in `locations.ts`.
 *
 * **The first describe block is the important one.** These pages carry a real
 * risk of a site-wide search penalty, and the agreed mitigation is that one
 * environment variable withdraws every one of them. If those tests ever stop
 * passing, the escape hatch is gone and the risk stops being survivable.
 */

afterEach(() => vi.unstubAllEnvs())

describe('the kill switch', () => {
  it.each(['off', 'OFF', '0', 'false', 'False'])(
    'withdraws every page when LOCATION_PAGES is %s',
    (value) => {
      vi.stubEnv('LOCATION_PAGES', value)
      expect(locationPagesEnabled()).toBe(false)
      expect(publishedLocations()).toEqual([])
      expect(findLocation('nashville-tn')).toBeNull()
    },
  )

  it('is on by default, because the pages are the point', () => {
    vi.stubEnv('LOCATION_PAGES', undefined as unknown as string)
    expect(locationPagesEnabled()).toBe(true)
    expect(publishedLocations().length).toBeGreaterThan(0)
  })

  it('stays on for an unrecognised value rather than guessing', () => {
    // Shipping them off on a typo would be a quiet veto of someone else's
    // decision. Only an explicit off means off.
    vi.stubEnv('LOCATION_PAGES', 'yes-please')
    expect(locationPagesEnabled()).toBe(true)
  })
})

describe('what gets published', () => {
  it('publishes a ramped slice, not the whole dataset', () => {
    // Adding 1,923 pages to a site with 7 indexed ones, on one day, is the
    // pattern the spam systems look for -- and it leaves no before to compare
    // against when the numbers move.
    expect(publishedLocations()).toHaveLength(PUBLISHED_LOCATION_COUNT)
    expect(allLocations().length).toBeGreaterThan(PUBLISHED_LOCATION_COUNT)
  })

  it('takes the largest places first', () => {
    const [first] = publishedLocations()
    expect(first.city).toBe('New York')
    expect(first.stateCode).toBe('NY')
  })
})

describe('the dataset itself', () => {
  const all = allLocations()

  it('has a unique slug for every place', () => {
    const slugs = all.map((l) => l.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('carries no Census entity names into the pages', () => {
    /**
     * The failure this guards is a page headed "Eye drops in Nashville-Davidson
     * metropolitan government (balance), Tennessee" -- published, at scale,
     * about somewhere a reader actually lives.
     */
    for (const l of all) {
      // Case-sensitive on purpose. The Census suffix is lowercase ("Nashville
      // city"); real names capitalise it — Atlantic City, Boise City, Elk
      // Grove Village, Oklahoma City. An /i here rejects all of those.
      expect(l.city, l.slug).not.toMatch(
        / (city|town|village|borough|municipality|CDP)$/,
      )
      expect(l.city, l.slug).not.toMatch(/balance|government|urban county/i)
      expect(l.city.trim(), l.slug).not.toBe('')
    }
  })

  it('keeps genuinely hyphenated names intact', () => {
    // The consolidated-government rule splits on hyphens. Applied generally it
    // would publish a thousand pages about "Winston, North Carolina".
    const winston = all.find((l) => l.slug === 'winston-salem-nc')
    expect(winston?.city).toBe('Winston-Salem')
  })

  it.each([
    ['nashville-tn', 'Nashville', 'Tennessee'],
    ['louisville-ky', 'Louisville', 'Kentucky'],
    ['indianapolis-in', 'Indianapolis', 'Indiana'],
    ['lexington-ky', 'Lexington', 'Kentucky'],
    ['honolulu-hi', 'Honolulu', 'Hawaii'],
    ['butte-mt', 'Butte', 'Montana'],
    ['ventura-ca', 'Ventura', 'California'],
    ['atlantic-city-nj', 'Atlantic City', 'New Jersey'],
  ])('resolves %s to the name people use', (slug, city, state) => {
    const found = all.find((l) => l.slug === slug)
    expect(found?.city).toBe(city)
    expect(found?.state).toBe(state)
  })

  it('gives every place a two-letter state code', () => {
    for (const l of all) expect(l.stateCode, l.slug).toMatch(/^[A-Z]{2}$/)
  })

  it('distinguishes same-named cities by state', () => {
    // There are four Nashvilles and the slug is what keeps them apart.
    const lexingtons = all.filter((l) => l.city === 'Lexington')
    expect(lexingtons.length).toBeGreaterThan(1)
    expect(new Set(lexingtons.map((l) => l.slug)).size).toBe(lexingtons.length)
  })
})

describe('links between pages', () => {
  it('offers other cities in the same state', () => {
    const texas = publishedLocations().find((l) => l.stateCode === 'TX')!
    const nearby = sameStateLocations(texas)

    expect(nearby.length).toBeGreaterThan(0)
    for (const other of nearby) {
      expect(other.stateCode).toBe('TX')
      expect(other.slug).not.toBe(texas.slug)
    }
  })

  it('never links to a page that was not published', () => {
    // A link to an unpublished city is a 404 shipped at scale.
    const published = new Set(publishedLocations().map((l) => l.slug))
    for (const l of publishedLocations()) {
      for (const other of sameStateLocations(l)) {
        expect(published.has(other.slug), `${l.slug} -> ${other.slug}`).toBe(true)
      }
    }
  })

  it('builds the path and labels the page expects', () => {
    const nashville = allLocations().find((l) => l.slug === 'nashville-tn')!
    expect(locationPath(nashville)).toBe('/eye-drops/nashville-tn')
    expect(locationLabel(nashville)).toBe('Nashville, Tennessee')
    expect(locationShortLabel(nashville)).toBe('Nashville, TN')
  })
})
