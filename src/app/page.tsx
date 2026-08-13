import { prisma } from '@/lib/db'
import { Hero } from '@/components/home/Hero'
import { WhyItWorks } from '@/components/home/WhyItWorks'
import { BuySection } from '@/components/home/BuySection'
import { HowToUse } from '@/components/home/HowToUse'
import { Lifestyle } from '@/components/home/Lifestyle'
import { DrugFacts } from '@/components/home/DrugFacts'
import { Faq } from '@/components/home/Faq'
import { FinalCta } from '@/components/home/FinalCta'

export default async function HomePage() {
  // Single-SKU storefront: the homepage is the product page.
  const product = await prisma.product.findFirst({ where: { active: true } })

  return (
    <>
      <Hero />
      <WhyItWorks />
      <BuySection product={product} />
      <HowToUse />
      <Lifestyle />
      <DrugFacts />
      <Faq />
      <FinalCta />
    </>
  )
}
