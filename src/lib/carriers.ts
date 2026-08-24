/**
 * Shipping carriers, for turning a tracking number into something a customer
 * can click.
 *
 * Deliberately a small hand-maintained list rather than a carrier API. Orders
 * are packed and posted by hand from the office, so the person marking the
 * order shipped already knows which carrier they used — asking them is more
 * reliable than guessing from the number's shape, which is a well-known way to
 * get it wrong (USPS and FedEx formats overlap, and both have changed).
 *
 * No import from `server-only`: the admin form needs this list too.
 */

export type CarrierKey = 'usps' | 'ups' | 'fedex' | 'dhl' | 'other'

type Carrier = {
  key: CarrierKey
  name: string
  /** Builds a public tracking URL, or null when the carrier has no usable one. */
  trackingUrl: ((trackingNumber: string) => string) | null
}

export const CARRIERS: Carrier[] = [
  {
    key: 'usps',
    name: 'USPS',
    trackingUrl: (n) =>
      `https://tools.usps.com/go/TrackConfirmAction?tLabels=${encodeURIComponent(n)}`,
  },
  {
    key: 'ups',
    name: 'UPS',
    trackingUrl: (n) => `https://www.ups.com/track?tracknum=${encodeURIComponent(n)}`,
  },
  {
    key: 'fedex',
    name: 'FedEx',
    trackingUrl: (n) =>
      `https://www.fedex.com/fedextrack/?trknbr=${encodeURIComponent(n)}`,
  },
  {
    key: 'dhl',
    name: 'DHL',
    trackingUrl: (n) =>
      `https://www.dhl.com/us-en/home/tracking.html?tracking-id=${encodeURIComponent(n)}`,
  },
  {
    // The escape hatch, so an unusual carrier never blocks marking an order
    // shipped. The number still reaches the customer; only the link is missing.
    key: 'other',
    name: 'Other',
    trackingUrl: null,
  },
]

export function isCarrierKey(value: unknown): value is CarrierKey {
  return CARRIERS.some((c) => c.key === value)
}

export function carrierName(key: string | null | undefined): string | null {
  return CARRIERS.find((c) => c.key === key)?.name ?? null
}

/**
 * A tracking URL, or null when there is nothing safe to link to.
 *
 * Returns null for an unknown carrier rather than guessing. Old rows written
 * before a carrier was removed from the list, or data typed by hand, must
 * degrade to showing the bare number — a link to the wrong carrier's site is
 * worse than no link, because the customer concludes the parcel is lost.
 */
export function trackingUrl(
  carrier: string | null | undefined,
  trackingNumber: string | null | undefined,
): string | null {
  if (!carrier || !trackingNumber?.trim()) return null
  const match = CARRIERS.find((c) => c.key === carrier)
  return match?.trackingUrl?.(trackingNumber.trim()) ?? null
}
