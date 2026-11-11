import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/db'
import { buildMerchantFeed } from '@/lib/merchant-feed'
import { appUrl } from '@/lib/site'

/**
 * /google-merchant-feed.xml — fetched daily by Google Merchant Center
 * (account 5903110366, added 2026-11-11). See lib/merchant-feed.ts.
 *
 * Dynamic so price and stock are current when Google fetches, but cached at
 * the CDN for an hour (`s-maxage`), so a crawler hammering the URL costs one
 * database query an hour at most. That is the CDN cache, not ISR, so it does
 * not count against the ISR write limit that §57 of PROJECT_STATE is about.
 *
 * If the database is unreachable this answers 503 rather than an empty feed:
 * an empty feed would tell Google the product no longer exists.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  let product
  try {
    product = await prisma.product.findFirst({ where: { active: true } })
  } catch (cause) {
    Sentry.captureException(cause)
    return new Response('Feed temporarily unavailable', {
      status: 503,
      headers: { 'retry-after': '3600' },
    })
  }

  return new Response(buildMerchantFeed(product, appUrl()), {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=3600',
    },
  })
}
