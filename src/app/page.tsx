import { prisma } from '@/lib/db'
import { Hero } from '@/components/home/Hero'
import { Relieves } from '@/components/home/Relieves'
import { Science } from '@/components/home/Science'
import { EmuOil } from '@/components/home/EmuOil'
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
      <Relieves />
      <Science />
      <EmuOil />
      <BuySection product={product} />
      <HowToUse />
      <Lifestyle />
      <DrugFacts />
      <Faq />
      <FinalCta />
    </>
  )
}
