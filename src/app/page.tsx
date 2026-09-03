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
