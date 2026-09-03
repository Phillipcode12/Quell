import { BRAND, COMPANY } from '@/lib/product-content'
import { appUrl } from '@/lib/site'

/**
 * JSON-LD for search engines.
 *
 * This is what turns a plain blue link into a result carrying the price and
 * whether the product is in stock. Everything here restates facts the page
 * already shows — it must never be the place a new claim appears.
 *
 * **Three rules, and the first one is not negotiable on a drug site.**
 *
 * 1. **No `aggregateRating` and no `review`, ever, until real ones exist.**
 *    They are the fields that produce star ratings in search results, and
 *    inventing them is both a Google policy violation and a lie told at scale.
 *    Quell has no reviews yet (§14). When it does, they are subject to the
 *    same regulatory read as the testimonials — a customer saying a drop cured
 *    something is a claim the label does not support, and marking it up as
 *    structured data publishes it to every search engine at once.
 *
 * 2. **Description comes from the product record**, which is the copy already
 *    reviewed and already on the page. No separate wording that could drift
 *    away from what the label supports.
 *
 * 3. **Availability and price are read from the database**, not written here.
 *    A hardcoded "in stock" that outlives the stock is worse than no markup —
 *    it sends people to a shop that cannot sell them anything.
 */

/** What `JSON.stringify` produces for these objects. */
export type JsonLd = Record<string, unknown>

/**
 * Serialise for embedding in a <script> tag.
 *
 * `<` is escaped because a string containing `</script>` would otherwise close
 * the tag early and drop the rest of the page into the document as markup.
 * Nothing here is user-supplied today, but the product description is a
 * database column and this costs one replace.
 */
export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

/** The seller. Stable across every page. */
export function organizationSchema(): JsonLd {
  const base = appUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${base}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: base,
    telephone: COMPANY.phoneHref,
    address: {
      '@type': 'PostalAddress',
      // The carton address, split as schema.org expects rather than as the
      // footer prints it.
      streetAddress: COMPANY.addressLines[0],
      addressLocality: 'Brentwood',
      addressRegion: 'TN',
      postalCode: '37027',
      addressCountry: 'US',
    },
  }
}

/** The site itself, so search engines can tie pages to one property. */
export function websiteSchema(): JsonLd {
  const base = appUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    name: BRAND.name,
    url: base,
    publisher: { '@id': `${base}/#organization` },
    inLanguage: 'en-US',
  }
}

/** Only the fields this needs, so a partial product object can be passed in. */
export type ProductForSchema = {
  name: string
  description: string
  sizeLabel: string
  priceCents: number
  stockQuantity: number
  slug: string
  imageUrl?: string | null
}

/**
 * The product, with its offer.
 *
 * Returns null when there is no product row rather than emitting a shell with
 * missing fields: incomplete markup earns warnings in Search Console and buys
 * nothing.
 */
export function productSchema(product: ProductForSchema | null): JsonLd | null {
  if (!product) return null

  const base = appUrl()
  const inStock = product.stockQuantity > 0

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${base}/#product`,
    name: product.name,
    description: product.description,
    sku: product.slug,
    // Net contents as printed on the carton, which is what a shopper compares.
    size: product.sizeLabel,
    brand: { '@type': 'Brand', name: BRAND.name },
    // The generated OpenGraph image is the one image guaranteed to exist and
    // to be the right shape; a product photo overrides it when there is one.
    image: product.imageUrl
      ? new URL(product.imageUrl, base).toString()
      : `${base}/opengraph-image`,
    offers: {
      '@type': 'Offer',
      url: base,
      priceCurrency: 'USD',
      // schema.org wants a decimal string, not cents and not a formatted
      // amount — "29.99", never "$29.99".
      price: (product.priceCents / 100).toFixed(2),
      availability: inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': `${base}/#organization` },
    },
  }
}
