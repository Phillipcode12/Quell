'use client'

import {
  NO_CAMPAIGN,
  campaignFromSearch,
  hasCampaign,
  type CampaignTags,
} from '@/lib/campaign'

/**
 * Remembering the campaign from the landing page until checkout.
 *
 * The tags are only in the URL on the first page. Someone who lands on an
 * advert, reads the FAQ, then buys has lost them long before the order is
 * placed — so they have to be held somewhere for the length of the visit.
 *
 * **sessionStorage, not a cookie**, for the same reason the visit id uses it:
 * it is per-tab, dies when the tab closes, and cannot follow anyone between
 * visits. That is what lets `/privacy` keep saying the site sets no
 * third-party cookies and no advertising trackers.
 *
 * **First write wins.** If someone arrives on an advert and later clicks a
 * second tagged link in the same tab, the first one gets the credit. Either
 * rule is defensible; this one is chosen because it matches how the visit's
 * `source` already behaves, and two parts of the same report disagreeing about
 * which click counted would be worse than either answer.
 */

const KEY = 'quell.campaign'

/**
 * Reads the tags from the current URL, storing them if this is the first
 * tagged arrival in this tab. Returns whatever the visit is attributed to.
 *
 * Safe to call on every page: after the first, the URL has no tags and the
 * stored value is returned unchanged.
 */
export function captureCampaign(): CampaignTags {
  if (typeof window === 'undefined') return NO_CAMPAIGN

  const stored = readCampaign()
  if (hasCampaign(stored)) return stored

  const fromUrl = campaignFromSearch(window.location.search)
  if (!hasCampaign(fromUrl)) return NO_CAMPAIGN

  try {
    sessionStorage.setItem(KEY, JSON.stringify(fromUrl))
  } catch {
    // Private mode or blocked storage. The tags still reach /api/track for
    // this page load; only carrying them to checkout is lost.
  }
  return fromUrl
}

/** The campaign held for this tab, or all-nulls. */
export function readCampaign(): CampaignTags {
  if (typeof window === 'undefined') return NO_CAMPAIGN
  try {
    const raw = sessionStorage.getItem(KEY)
    if (!raw) return NO_CAMPAIGN
    const parsed = JSON.parse(raw) as Partial<CampaignTags>
    return {
      utmSource: parsed.utmSource ?? null,
      utmMedium: parsed.utmMedium ?? null,
      utmCampaign: parsed.utmCampaign ?? null,
      utmContent: parsed.utmContent ?? null,
    }
  } catch {
    // Unreadable or corrupt. An unattributed order beats a broken checkout.
    return NO_CAMPAIGN
  }
}
