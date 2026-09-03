import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  organizationSchema,
  productSchema,
  faqSchema,
  serializeJsonLd,
  websiteSchema,
  type ProductForSchema,
} from '@/lib/structured-data'
import { FAQS, RELIEVES_WITHHELD } from '@/lib/product-content'
import {
  FREE_SHIPPING_THRESHOLD_CENTS,
  SHIPPABLE_COUNTRIES,
  STANDARD_SHIPPING_CENTS,
} from '@/lib/shipping'

/**
 * Structured data is published to every search engine at once and is read by
 * machines rather than people, so a wrong value here is both louder and
 * quieter than a wrong value on the page: it travels further, and nobody
 * looking at the site would notice it.
 *
 * These tests guard the three things that would actually cause harm — invented
 * ratings, a price that does not match the shop, and a stale "in stock".
 */

const PRODUCT: ProductForSchema = {
  name: 'Quell Preservative-Free Lubricating Eye Drops',
  description: 'Preservative-free lubricating eye drops. .33 fl oz (10 mL).',
  sizeLabel: '.33 fl oz (10 mL)',
  priceCents: 2999,
  stockQuantity: 250,
  slug: 'quell-eye-drops',
  imageUrl: null,
}

beforeEach(() => {
  vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
})

describe('what the markup must never claim', () => {
  it('publishes no rating and no reviews', () => {
    // These are the fields that put stars in a search result. Quell has no
    // reviews, and inventing them is a Google policy violation as well as a
    // lie told to everyone at once. When real ones exist they need the same
    // regulatory read as the testimonials.
    const json = JSON.stringify(productSchema(PRODUCT))

    expect(json).not.toContain('aggregateRating')
    expect(json).not.toContain('reviewCount')
    expect(json).not.toContain('ratingValue')
    expect(json).not.toContain('"review"')
  })

  it('never carries the withheld claim', () => {
    // Redness is held off the site pending regulatory confirmation. Structured
    // data is still the site saying it.
    expect(RELIEVES_WITHHELD).toContain('Redness')
    const json = JSON.stringify([
      productSchema(PRODUCT),
      organizationSchema(),
      websiteSchema(),
    ]).toLowerCase()
    expect(json).not.toContain('redness')
  })

  it('describes the product in the words already reviewed', () => {
    // The description is the product record's own, not a second copy written
    // for search engines that could drift from what the label supports.
    const schema = productSchema(PRODUCT) as { description: string }
    expect(schema.description).toBe(PRODUCT.description)
  })
})

describe('the offer matches what the shop actually charges', () => {
  it('formats the price as a decimal string, not cents and not currency', () => {
    // schema.org wants "29.99". Cents would advertise the product at $2,999,
    // and "$29.99" is rejected outright.
    const offer = (productSchema(PRODUCT) as { offers: Record<string, unknown> }).offers
    expect(offer.price).toBe('29.99')
    expect(offer.priceCurrency).toBe('USD')
  })

  it('keeps whole-dollar and sub-dollar prices well formed', () => {
    for (const [cents, expected] of [
      [2999, '29.99'],
      [3000, '30.00'],
      [999, '9.99'],
      [100, '1.00'],
      [5, '0.05'],
    ] as const) {
      const offer = (
        productSchema({ ...PRODUCT, priceCents: cents }) as {
          offers: Record<string, unknown>
        }
      ).offers
      expect(offer.price, `${cents} cents`).toBe(expected)
    }
  })

  it('follows real stock rather than asserting availability', () => {
    // A hardcoded "in stock" that outlives the stock is worse than no markup:
    // it sends people to a shop that cannot sell them anything.
    const inStock = (productSchema(PRODUCT) as { offers: { availability: string } }).offers
    expect(inStock.availability).toBe('https://schema.org/InStock')

    const soldOut = (
      productSchema({ ...PRODUCT, stockQuantity: 0 }) as {
        offers: { availability: string }
      }
    ).offers
    expect(soldOut.availability).toBe('https://schema.org/OutOfStock')
  })
})

describe('shape', () => {
  it('returns nothing when there is no product', () => {
    // Better than a shell with missing fields, which earns Search Console
    // warnings and buys nothing.
    expect(productSchema(null)).toBeNull()
  })

  it('ties the offer to the organization that sells it', () => {
    const schema = productSchema(PRODUCT) as { offers: { seller: { '@id': string } } }
    const org = organizationSchema() as { '@id': string }
    expect(schema.offers.seller['@id']).toBe(org['@id'])
  })

  it('uses absolute URLs, because a crawler has no page context', () => {
    const schema = productSchema(PRODUCT) as { image: string; offers: { url: string } }
    expect(schema.image).toMatch(/^https:\/\/quelldrop\.com\//)
    expect(schema.offers.url).toBe('https://quelldrop.com')

    const withImage = productSchema({
      ...PRODUCT,
      imageUrl: '/images/bottle.png',
    }) as { image: string }
    expect(withImage.image).toBe('https://quelldrop.com/images/bottle.png')
  })
})

describe('serialisation', () => {
  it('escapes < so a value cannot close the script tag', () => {
    // The description is a database column. A stray "</script>" in it would
    // otherwise end the tag early and spill the rest into the document.
    const out = serializeJsonLd(
      productSchema({
        ...PRODUCT,
        description: 'Safe </script><img src=x onerror=alert(1)> text',
      }) as Record<string, unknown>,
    )
    expect(out).not.toContain('</script>')
    expect(out).toContain('\\u003c')
  })

  it('produces JSON a parser accepts', () => {
    const out = serializeJsonLd(productSchema(PRODUCT) as Record<string, unknown>)
    expect(() => JSON.parse(out)).not.toThrow()
    expect(JSON.parse(out)['@type']).toBe('Product')
  })
})

describe('shipping and returns published to search engines', () => {
  /**
   * These fields are commitments. A shipping cost or return window in the
   * markup that disagrees with the checkout or with /terms is a promise made
   * to every search engine and kept by nobody.
   */
  const offer = () =>
    (productSchema(PRODUCT) as { offers: Record<string, unknown> }).offers

  it('quotes the same shipping the checkout charges', () => {
    // Read from lib/shipping.ts rather than restated, so the two cannot drift.
    const details = offer().shippingDetails as Record<string, unknown>[]
    const rates = details.map(
      (d) => (d.shippingRate as Record<string, unknown>).value,
    )
    expect(rates).toContain((STANDARD_SHIPPING_CENTS / 100).toFixed(2))
    expect(rates).toContain('0')
  })

  it('attaches the threshold to the free option, not to shipping generally', () => {
    // Without eligibleTransactionVolume this reads as free shipping on
    // everything, which the checkout does not do.
    const details = offer().shippingDetails as Record<string, unknown>[]
    const free = details.find(
      (d) => (d.shippingRate as Record<string, unknown>).value === '0',
    )
    const volume = free?.eligibleTransactionVolume as Record<string, unknown>
    expect(volume, 'free shipping must carry its threshold').toBeDefined()
    expect(volume.minPrice).toBe((FREE_SHIPPING_THRESHOLD_CENTS / 100).toFixed(2))
  })

  it('ships only where the shop actually ships', () => {
    const details = offer().shippingDetails as Record<string, unknown>[]
    for (const d of details) {
      const dest = d.shippingDestination as Record<string, unknown>
      expect(dest.addressCountry).toBe(SHIPPABLE_COUNTRIES[0])
    }
  })

  it('states the return window and links to the conditions', () => {
    const policy = offer().hasMerchantReturnPolicy as Record<string, unknown>
    expect(policy.merchantReturnDays).toBe(30)
    // "Unopened, in original packaging" cannot be expressed as a field, so the
    // link to the authoritative text has to be there.
    expect(policy.merchantReturnLink).toMatch(/\/terms$/)
  })

  it('does not claim who pays return postage', () => {
    // /terms does not say. Guessing publishes a commitment nobody at Aurora
    // has made. Google noting the field as missing is the correct outcome.
    const policy = offer().hasMerchantReturnPolicy as Record<string, unknown>
    expect(policy.returnFees).toBeUndefined()
    expect(policy.returnShippingFeesAmount).toBeUndefined()
  })
})

describe('the FAQ markup', () => {
  it('is the same answers as the page, not a second copy', () => {
    const schema = faqSchema() as { mainEntity: Record<string, unknown>[] }
    expect(schema.mainEntity).toHaveLength(FAQS.length)
    for (const [i, entry] of schema.mainEntity.entries()) {
      expect(entry.name).toBe(FAQS[i].q)
      expect((entry.acceptedAnswer as Record<string, unknown>).text).toBe(FAQS[i].a)
    }
  })

  it('never markets redness relief, though it may warn about redness', () => {
    /**
     * A blanket ban on the word is wrong here, and this test was written that
     * way first and failed correctly.
     *
     * Redness is withheld as a *claim* (RELIEVES_WITHHELD) but it is required
     * as a *caution*: the Drug Facts panel says to stop use and ask a doctor if
     * irritation or redness continues, and one FAQ answer reproduces that. A
     * warning not to keep using the product is the opposite of advertising what
     * it treats, and banning the word outright would have deleted label copy
     * the panel requires.
     *
     * So the check is on the claim shape, not the vocabulary.
     */
    const json = JSON.stringify(faqSchema()).toLowerCase()

    for (const claim of [
      'relieves redness',
      'reduces redness',
      'relief from redness',
      'for redness',
      'treats redness',
      'clears redness',
      'redness relief',
    ]) {
      expect(json, `FAQ markup claims "${claim}"`).not.toContain(claim)
    }

    // And where it does appear, it is in the stop-use warning.
    if (json.includes('redness')) {
      expect(
        json.includes('stop use') || json.includes('ask a doctor'),
        'redness appears outside the stop-use warning',
      ).toBe(true)
    }
  })
})
