import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  organizationSchema,
  productSchema,
  serializeJsonLd,
  websiteSchema,
  type ProductForSchema,
} from '@/lib/structured-data'
import { RELIEVES_WITHHELD } from '@/lib/product-content'

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
