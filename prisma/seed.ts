import 'dotenv/config'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import { PrismaClient } from '../src/generated/prisma/client'

const prisma = new PrismaClient({
  adapter: new PrismaLibSql({
    url: process.env.DATABASE_URL ?? 'file:./prisma/dev.db',
  }),
})

// Sample catalog. Prices are placeholders for local development only.
const products = [
  {
    slug: 'latanoprost-0005',
    name: 'Latanoprost Ophthalmic Solution',
    description:
      'Prostaglandin analog used to lower intraocular pressure in open-angle glaucoma and ocular hypertension. Once-daily evening dosing.',
    strength: 'Latanoprost 0.005%',
    priceCents: 3400,
    volumeMl: 2.5,
  },
  {
    slug: 'cyclosporine-005',
    name: 'Cyclosporine Ophthalmic Emulsion',
    description:
      'Calcineurin inhibitor immunomodulator for chronic dry eye disease where tear production is suppressed by inflammation.',
    strength: 'Cyclosporine 0.05%',
    priceCents: 8900,
    volumeMl: 5,
  },
  {
    slug: 'olopatadine-02',
    name: 'Olopatadine Hydrochloride Solution',
    description:
      'Antihistamine and mast cell stabilizer for ocular itching associated with allergic conjunctivitis.',
    strength: 'Olopatadine 0.2%',
    priceCents: 4550,
    volumeMl: 2.5,
  },
  {
    slug: 'prednisolone-1',
    name: 'Prednisolone Acetate Suspension',
    description:
      'Corticosteroid for steroid-responsive inflammation of the palpebral and bulbar conjunctiva, cornea, and anterior segment.',
    strength: 'Prednisolone Acetate 1%',
    priceCents: 2750,
    volumeMl: 10,
  },
  {
    slug: 'timolol-05',
    name: 'Timolol Maleate Ophthalmic Solution',
    description:
      'Non-selective beta blocker that reduces aqueous humor production to lower elevated intraocular pressure.',
    strength: 'Timolol Maleate 0.5%',
    priceCents: 2100,
    volumeMl: 5,
  },
  {
    slug: 'moxifloxacin-05',
    name: 'Moxifloxacin Ophthalmic Solution',
    description:
      'Fourth-generation fluoroquinolone antibiotic for bacterial conjunctivitis caused by susceptible organisms.',
    strength: 'Moxifloxacin 0.5%',
    priceCents: 3950,
    volumeMl: 3,
  },
]

async function main() {
  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    })
  }
  console.log(`Seeded ${products.length} products.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
