import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
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
  const [product, user] = await Promise.all([
    prisma.product.findFirst({ where: { active: true } }),
    getCurrentUser(),
  ])

  return (
    <>
      <Hero />
      <WhyItWorks />
      <BuySection product={product} isSignedIn={Boolean(user)} />
      <HowToUse />
      <Lifestyle />
      <Faq />
      <FinalCta />
    </>
  )
}
