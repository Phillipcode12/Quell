import { prisma } from '@/lib/db'
import { Hero } from '@/components/home/Hero'
import { WhyItWorks } from '@/components/home/WhyItWorks'
import { BuySection } from '@/components/home/BuySection'
import { HowToUse } from '@/components/home/HowToUse'
import { Lifestyle } from '@/components/home/Lifestyle'
import { Faq } from '@/components/home/Faq'
import { FinalCta } from '@/components/home/FinalCta'
import { JsonLd } from '@/components/JsonLd'
import { faqSchema, productSchema } from '@/lib/structured-data'

/**
 * The one page that must NOT be prerendered.
 *
 * On 2026-10-12 the session read came out of the root layout so the rest of the
 * site could be static and cached at the edge. That worked -- and it swept this
 * page up with it, which would have **frozen the bottle price and the stock
 * status at build time.**
 *
 * This page reads `Product` for both. A baked-in price is not a cosmetic
 * staleness problem: the cart and `/api/checkout` compute from the database, so
 * a stale figure here is a page advertising one price while the customer is
 * charged another. Prerendered stock is worse -- it would keep offering a
 * sold-out bottle.
 *
 * ISR with a short revalidate was considered and rejected. It would bound the
 * staleness rather than remove it, and a bounded window of showing the wrong
 * price is still showing the wrong price on the page where the money is taken.
 * One uncacheable page out of 1,452 is a trivial crawl cost for that
 * guarantee.
 *
 * **Do not "optimise" this away.** If this page ever stops reading the price
 * and the stock, remove this with a note saying so.
 */
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  // Single-SKU storefront: the homepage is the product page. The full Drug
  // Facts panel lives at /drug-facts rather than in this scroll.
  // Buying no longer needs an account until the cart, so the homepage does not
  // read the session.
  const product = await prisma.product.findFirst({ where: { active: true } })

  return (
    <>
      {/* The price and stock a search result shows come from this. It reads
          the same product row the page renders, so the two cannot disagree. */}
      <JsonLd data={productSchema(product)} />
      {/* The FAQ section is real and reviewed; marking it up is the same
          answers, not new ones. */}
      <JsonLd data={faqSchema()} />
      <Hero product={product} />
      <WhyItWorks />
      {/* No testimonials here on purpose: they have their own page, reached
          from the nav, so this page stays one argument ending at the buy
          panel rather than pausing halfway through. */}
      <BuySection product={product} />
      <HowToUse />
      <Lifestyle />
      <Faq />
      <FinalCta />
    </>
  )
}
