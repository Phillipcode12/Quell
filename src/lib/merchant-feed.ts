import { BRAND, PRODUCT_GTIN } from '@/lib/product-content'

/**
 * The Google Merchant Center product feed (RSS 2.0 with the `g:` namespace).
 *
 * Added 2026-11-11 when Merchant Center account 5903110366 was set up for free
 * listings. Google fetches it on a schedule (daily), so price and stock in
 * Shopping follow the database without anyone touching Merchant Center: a
 * listing whose price disagrees with the landing page is disapproved, which
 * is why this reads the same product row the home page and checkout read,
 * rather than restating anything.
 *
 * **Shipping is not in the feed.** The rule is "$10, free from $89", which a
 * per-item `g:shipping` cannot express; it is set once as a shipping service
 * in Merchant Center (Shipping and returns), from lib/shipping.ts's values.
 *
 * `gtin` is the carton's UPC (`PRODUCT_GTIN`, confirmed 2026-11-11). If it is
 * ever unset, the feed falls back to `identifier_exists=no`, but sending "no"
 * for a product that has a GTIN is against Google's policy.
 */

export type FeedProduct = {
  slug: string
  name: string
  description: string
  sizeLabel: string
  priceCents: number
  stockQuantity: number
  imageUrl: string | null
}

const GTIN: string | null = PRODUCT_GTIN

const escapeXml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export function buildMerchantFeed(product: FeedProduct | null, base: string): string {
  const items: string[] = []
  if (product) {
    const image = product.imageUrl
      ? new URL(product.imageUrl, base).toString()
      : `${base}/opengraph-image`
    const fields: [string, string][] = [
      ['g:id', product.slug],
      ['title', `${product.name}, ${product.sizeLabel}`],
      ['description', product.description],
      ['link', `${base}/`],
      ['g:image_link', image],
      ['g:availability', product.stockQuantity > 0 ? 'in_stock' : 'out_of_stock'],
      // Decimal and currency code: "29.99 USD", never "$29.99".
      ['g:price', `${(product.priceCents / 100).toFixed(2)} USD`],
      ['g:brand', BRAND.name],
      ['g:condition', 'new'],
      ['g:google_product_category', 'Health & Beauty > Personal Care > Vision Care > Eye Drops & Lubricants'],
      ['g:product_type', 'Eye drops > Lubricating eye drops'],
      ...(GTIN ? [['g:gtin', GTIN] as [string, string]] : [['g:identifier_exists', 'no'] as [string, string]]),
    ]
    items.push(
      [
        '    <item>',
        ...fields.map(([k, v]) => `      <${k}>${escapeXml(v)}</${k}>`),
        '    </item>',
      ].join('\n'),
    )
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(BRAND.name)}</title>
    <link>${escapeXml(base)}/</link>
    <description>${escapeXml(`${BRAND.name} product feed for Google Merchant Center`)}</description>
${items.join('\n')}
  </channel>
</rss>
`
}
