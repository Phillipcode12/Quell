import { describe, expect, it } from 'vitest'
import { buildMerchantFeed } from './merchant-feed'

const PRODUCT = {
  slug: 'quell-lubricating-eye-drops',
  name: 'Quell Preservative-Free Lubricating Eye Drops',
  description: 'Drops & things <with> "quotes"',
  sizeLabel: '.33 fl oz (10 mL)',
  priceCents: 2999,
  stockQuantity: 12,
  imageUrl: '/images/product-box-bottle-white.jpg',
}
const BASE = 'https://quelldrop.com'

describe('Merchant Center feed', () => {
  it('states the price as a decimal with the currency, from the database row', () => {
    const xml = buildMerchantFeed(PRODUCT, BASE)
    expect(xml).toContain('<g:price>29.99 USD</g:price>')
    expect(xml).not.toMatch(/\$\d/)
  })

  it('follows stock', () => {
    expect(buildMerchantFeed(PRODUCT, BASE)).toContain('<g:availability>in_stock</g:availability>')
    expect(buildMerchantFeed({ ...PRODUCT, stockQuantity: 0 }, BASE)).toContain(
      '<g:availability>out_of_stock</g:availability>',
    )
  })

  it('links the home page and an absolute image', () => {
    const xml = buildMerchantFeed(PRODUCT, BASE)
    expect(xml).toContain('<link>https://quelldrop.com/</link>')
    expect(xml).toContain('<g:image_link>https://quelldrop.com/images/product-box-bottle-white.jpg</g:image_link>')
  })

  it('escapes text so the XML stays valid', () => {
    const xml = buildMerchantFeed(PRODUCT, BASE)
    expect(xml).toContain('Drops &amp; things &lt;with&gt; &quot;quotes&quot;')
  })

  it('says the brand, condition and US-only details Merchant Center requires', () => {
    const xml = buildMerchantFeed(PRODUCT, BASE)
    expect(xml).toContain('<g:brand>Quell</g:brand>')
    expect(xml).toContain('<g:condition>new</g:condition>')
    expect(xml).toContain('<g:id>quell-lubricating-eye-drops</g:id>')
  })

  it('lists no item at all when there is no product, rather than a broken one', () => {
    expect(buildMerchantFeed(null, BASE)).not.toContain('<item>')
  })
})
