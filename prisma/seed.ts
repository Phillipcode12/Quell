import 'dotenv/config'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import { PrismaClient } from '../src/generated/prisma/client'

const prisma = new PrismaClient({
  adapter: new PrismaLibSql({
    url: process.env.DATABASE_URL ?? 'file:./prisma/dev.db',
  }),
})

// Quell is the only SKU. Copy is taken from the printed carton.
// priceCents ($29.99) matches the retail listing at dryeyerescue.com as of
// 2026-08-13. Confirm it is still current before launch.
const quell = {
  slug: 'quell-lubricating-eye-drops',
  name: 'Quell Preservative-Free Lubricating Eye Drops',
  tagline: 'Quiet the Storm',
  description:
    'Preservative-free lubricating eye drops with a patented, MD-developed formula. Reinforces the tear film’s oil layer to help reduce moisture loss.',
  sizeLabel: '.33 fl oz (10 mL)',
  priceCents: 2999,
  imageUrl: '/images/product-box-bottle-white.jpg',
}

async function main() {
  // This storefront sells one product; drop anything else left from earlier seeds.
  await prisma.product.deleteMany({ where: { slug: { not: quell.slug } } })

  await prisma.product.upsert({
    where: { slug: quell.slug },
    update: quell,
    create: quell,
  })

  console.log(`Seeded ${quell.name}.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
