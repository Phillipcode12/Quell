import { describe, expect, it } from 'vitest'
import {
  CARRIERS,
  carrierName,
  isCarrierKey,
  trackingUrl,
} from './carriers'

/**
 * The tracking link is the whole substance of the shipping email. Getting it
 * wrong is worse than omitting it: a link to the wrong carrier's site returns
 * "not found", and the customer concludes the parcel is lost.
 */

describe('trackingUrl', () => {
  it('builds a working URL for each carrier that has one', () => {
    expect(trackingUrl('usps', '9400111899223197428490')).toContain(
      'tools.usps.com',
    )
    expect(trackingUrl('ups', '1Z999AA10123456784')).toContain('ups.com/track')
    expect(trackingUrl('fedex', '231300687629630')).toContain('fedex.com')
    expect(trackingUrl('dhl', '1234567890')).toContain('dhl.com')
  })

  it('puts the number in the URL, escaped', () => {
    const url = trackingUrl('usps', '9400 1118 9922')
    expect(url).toContain(encodeURIComponent('9400 1118 9922'))
    // A raw space would produce an invalid href.
    expect(url).not.toMatch(/\s/)
  })

  it('trims whitespace around a pasted number', () => {
    // Tracking numbers get copied off a label or out of a carrier site, and
    // usually arrive with something attached.
    expect(trackingUrl('ups', '  1Z999AA10123456784  ')).toBe(
      trackingUrl('ups', '1Z999AA10123456784'),
    )
  })

  it('returns null for "other", which has no lookup', () => {
    // The escape hatch: an unusual carrier must never block shipping. The
    // number still reaches the customer, just without a link.
    expect(trackingUrl('other', '123')).toBeNull()
  })

  it('returns null rather than guessing for an unknown carrier', () => {
    // Old rows, hand-edited data, or a carrier since removed from the list.
    // Guessing here is the failure mode this function exists to prevent.
    expect(trackingUrl('royalmail', '123')).toBeNull()
    expect(trackingUrl('', '123')).toBeNull()
  })

  it('returns null when there is no number to track', () => {
    expect(trackingUrl('usps', null)).toBeNull()
    expect(trackingUrl('usps', undefined)).toBeNull()
    expect(trackingUrl('usps', '')).toBeNull()
    expect(trackingUrl('usps', '   ')).toBeNull()
    expect(trackingUrl(null, null)).toBeNull()
  })
})

describe('carrierName', () => {
  it('maps a key to its display name', () => {
    expect(carrierName('usps')).toBe('USPS')
    expect(carrierName('fedex')).toBe('FedEx')
  })

  it('returns null for anything unrecognised', () => {
    // The email renders "Tracking" with no carrier rather than "Tracking
    // (undefined)".
    expect(carrierName('nope')).toBeNull()
    expect(carrierName(null)).toBeNull()
    expect(carrierName(undefined)).toBeNull()
  })
})

describe('isCarrierKey', () => {
  it('accepts every key in the list and nothing else', () => {
    for (const c of CARRIERS) expect(isCarrierKey(c.key)).toBe(true)

    for (const value of ['USPS', 'royalmail', '', null, undefined, 1, {}]) {
      expect(isCarrierKey(value), String(value)).toBe(false)
    }
  })

  it('is case sensitive, matching what the form submits', () => {
    // The admin select posts the key verbatim; accepting "USPS" here would
    // store a value that trackingUrl then refuses to link.
    expect(isCarrierKey('USPS')).toBe(false)
    expect(isCarrierKey('usps')).toBe(true)
  })
})

describe('the carrier list itself', () => {
  it('has unique keys', () => {
    const keys = CARRIERS.map((c) => c.key)
    expect(new Set(keys).size).toBe(keys.length)
  })

  it('includes an "other" escape hatch', () => {
    // Without it, an unusual carrier would leave someone unable to record a
    // shipment at all.
    expect(CARRIERS.some((c) => c.key === 'other')).toBe(true)
  })
})
