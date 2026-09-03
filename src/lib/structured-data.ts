import { BRAND, COMPANY, FAQS } from '@/lib/product-content'
import {
  FREE_SHIPPING_THRESHOLD_CENTS,
  SHIPPABLE_COUNTRIES,
  STANDARD_SHIPPING_CENTS,
} from '@/lib/shipping'
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
      shippingDetails: shippingDetails(),
      hasMerchantReturnPolicy: returnPolicy(base),
    },
  }
}

/**
 * Shipping and returns, attached to the Offer.
 *
 * These are the fields Google wants for a merchant listing, and they are the
 * reason a result can show "Free delivery over $59" rather than just a price.
 *
 * **Every value is read from the code that actually charges people** —
 * `lib/shipping.ts` for the rates and threshold — so the markup cannot drift
 * from the checkout. A shipping cost published to Google that disagrees with
 * the one at the till is worse than publishing nothing.
 */
function shippingDetails(): JsonLd[] {
  // SHIPPABLE_COUNTRIES is US-only. The markup says so rather than implying we
  // ship anywhere someone can reach the site.
  const destination = {
    '@type': 'DefinedRegion',
    addressCountry: SHIPPABLE_COUNTRIES[0],
  }

  return [
    // Free above the threshold. eligibleTransactionVolume is how the "over $59"
    // condition is expressed — without it this would read as free shipping on
    // everything, which is a promise the checkout does not keep.
    {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
      shippingDestination: destination,
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: (FREE_SHIPPING_THRESHOLD_CENTS / 100).toFixed(2),
      },
    },
    // The flat rate below it.
    {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: (STANDARD_SHIPPING_CENTS / 100).toFixed(2),
        currency: 'USD',
      },
      shippingDestination: destination,
    },
  ]
}

/**
 * The returns policy, as far as it is actually written down.
 *
 * `/terms` says: unopened, original packaging, within 30 days of delivery,
 * refund of the product price, original shipping not refunded.
 *
 * **What is deliberately absent is who pays return postage**, because the
 * terms do not say. Google lists `returnFees` as a recommended field and will
 * note it missing — that warning is the correct outcome. Guessing it would
 * publish a commitment nobody at Aurora has made, to every search engine at
 * once, and this is a drug company that has already been cited for website
 * copy it could not support.
 *
 * `merchantReturnLink` is what carries the conditions. The headline "30 days"
 * is true; "unopened, in original packaging" is the part a structured field
 * cannot express, so the link to the authoritative text goes with it.
 */
function returnPolicy(base: string): JsonLd {
  return {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: SHIPPABLE_COUNTRIES[0],
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 30,
    merchantReturnLink: `${base}/terms`,
  }
}

/**
 * The FAQ section, marked up.
 *
 * Reuses `FAQS` rather than restating anything: the answers on the page and
 * the answers in the markup are the same strings, so they cannot diverge, and
 * the regulatory review that cleared the page cleared the markup with it.
 *
 * No empty-list guard: FAQS is a const array, so TypeScript can prove it is
 * never empty and rejected the check as unreachable. If it ever becomes
 * dynamic, put one back.
 */
export function faqSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${appUrl()}/#faq`,
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
