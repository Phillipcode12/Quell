import { prisma } from '@/lib/db'
import { ProductGrid } from '@/components/ProductGrid'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Conditions } from '@/components/home/Conditions'
import { Testimonials } from '@/components/home/Testimonials'
import { Faq } from '@/components/home/Faq'
import { FinalCta } from '@/components/home/FinalCta'

export default async function HomePage() {
  const products = await prisma.product.findMany({
    where: { active: true },
    orderBy: { name: 'asc' },
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />

      <section id="catalog" className="scroll-mt-20 bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              The formulary
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Prescription drops we dispense
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Every item is prescription-only. Add what you need to your cart —
              we verify the prescription before anything ships.
            </p>
          </div>

          <div className="mt-12">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <Conditions />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
