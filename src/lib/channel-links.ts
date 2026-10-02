/**
 * Short, clean links for social bios that carry campaign tags.
 *
 * `quelldrop.com/tiktok` rather than
 * `quelldrop.com/?utm_source=tiktok&utm_medium=social&utm_campaign=bio`. The
 * tags are what make the traffic attributable (§29); the short path is what
 * makes it printable in a bio where the URL is visible and a wall of query
 * string reads as spam.
 *
 * ### Why a redirect at all, rather than a shortener
 *
 * It stays on our own domain. A third-party shortener is one more account to
 * keep, one more thing that can expire or start charging, and it puts somebody
 * else's hostname in front of the shop in the one place a stranger is deciding
 * whether we look legitimate.
 *
 * ### Why the referrer cannot do this job
 *
 * TikTok opens links in its own in-app browser, which usually sends **no
 * referrer at all** — measured on 2026-10-01, a visit from a tagged link
 * recorded `referrerHost: null` and `source: direct`. Without the tags every
 * TikTok visitor is indistinguishable from someone typing the address in.
 */

/** The tags each channel's bio link carries. */
export const CHANNELS = {
  tiktok: {
    utm_source: 'tiktok',
    utm_medium: 'social',
    utm_campaign: 'bio',
  },
} as const

export type Channel = keyof typeof CHANNELS

/**
 * Where a channel link should land, as a root-relative URL.
 *
 * `overrides` are query parameters from the incoming request, and they **win**
 * over the defaults. That is what makes a single link reusable without a code
 * change: `/tiktok?utm_content=january-video` keeps the source and campaign and
 * labels the placement, so one video can be told from another in the Campaigns
 * table.
 *
 * Only `utm_*` parameters are carried through. Anything else is dropped rather
 * than forwarded, so this cannot be used to bounce someone through our domain
 * carrying arbitrary query data.
 */
export function channelDestination(
  channel: Channel,
  overrides?: URLSearchParams,
): string {
  const params = new URLSearchParams(CHANNELS[channel])

  if (overrides) {
    for (const [key, value] of overrides) {
      if (!key.startsWith('utm_')) continue
      // `utm_term` is deliberately not special-cased away here: campaign.ts
      // already refuses to store it, and silently dropping it in two places
      // would make the one that matters harder to find.
      if (value.trim()) params.set(key, value)
    }
  }

  return `/?${params.toString()}`
}
