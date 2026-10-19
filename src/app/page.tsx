import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/db'
import { OrderingUnavailable } from '@/components/OrderingUnavailable'
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
 * **Reversed on 2026-10-19: this is now `revalidate = 60`.** The reasoning
 * above was sound and the conclusion was wrong, because it priced only one side
 * of the trade. A query per request meant every crawler hit woke the database,
 * and combined with the visit heartbeat it exhausted the free tier's compute
 * quota and took the shop offline for a day.
 *
 * So the trade is now stated properly: a price or stock figure up to **sixty
 * seconds** stale, against the shop being reachable at all. Sixty seconds is
 * short enough that nobody can act on a stale number — the cart and
 * `/api/checkout` still compute from the database at the moment of payment,
 * so the figure that is actually charged is never cached.
 *
 * **Do not raise this much past a minute**, and do not make it fully static:
 * the window has to stay shorter than the time it takes someone to read the
 * page and decide.
 */
export const revalidate = 60

export default async function HomePage() {
  // Single-SKU storefront: the homepage is the product page. The full Drug
  // Facts panel lives at /drug-facts rather than in this scroll.
  // Buying no longer needs an account until the cart, so the homepage does not
  // read the session.
  /**
   * A failure here renders the unavailable notice rather than a 500 — see
   * `OrderingUnavailable`. Googlebot had only just started sending real
   * visitors when the database quota ran out, and repeated 500s on a home page
   * are how a site loses its place in the index.
   */
  const product = await prisma.product
    .findFirst({ where: { active: true } })
    .catch((cause: unknown) => {
      Sentry.captureException(cause)
      return null
    })

  if (!product) return <OrderingUnavailable />

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
