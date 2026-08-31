import { prisma } from '@/lib/db'
import { Hero } from '@/components/home/Hero'
import { WhyItWorks } from '@/components/home/WhyItWorks'
import { BuySection } from '@/components/home/BuySection'
import { HowToUse } from '@/components/home/HowToUse'
import { Lifestyle } from '@/components/home/Lifestyle'
import { Faq } from '@/components/home/Faq'
import { FinalCta } from '@/components/home/FinalCta'

export default async function HomePage() {
  // Single-SKU storefront: the homepage is the product page. The full Drug
  // Facts panel lives at /drug-facts rather than in this scroll.
  // Buying no longer needs an account until the cart, so the homepage does not
  // read the session.
  const product = await prisma.product.findFirst({ where: { active: true } })

  return (
    <>
      <Hero product={product} />
      <WhyItWorks />
      <BuySection product={product} />
      <HowToUse />
      <Lifestyle />
      <Faq />
      <FinalCta />
    </>
  )
}
