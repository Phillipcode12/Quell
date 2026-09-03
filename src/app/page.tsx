import { prisma } from '@/lib/db'
import { Hero } from '@/components/home/Hero'
import { WhyItWorks } from '@/components/home/WhyItWorks'
import { Testimonials } from '@/components/home/Testimonials'
import { BuySection } from '@/components/home/BuySection'
import { HowToUse } from '@/components/home/HowToUse'
import { Lifestyle } from '@/components/home/Lifestyle'
import { Faq } from '@/components/home/Faq'
import { FinalCta } from '@/components/home/FinalCta'
import { JsonLd } from '@/components/JsonLd'
import { productSchema } from '@/lib/structured-data'

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
      <Hero product={product} />
      <WhyItWorks />
      {/* Before the buy panel: someone who has read the science is deciding,
          and the quotes belong between the argument and the price. */}
      <Testimonials />
      <BuySection product={product} />
      <HowToUse />
      <Lifestyle />
      <Faq />
      <FinalCta />
    </>
  )
}
