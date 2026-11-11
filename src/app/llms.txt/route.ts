import { BRAND, COMPANY, DRUG_FACTS } from '@/lib/product-content'
import { formatUsd } from '@/lib/money'
import { FREE_SHIPPING_BOTTLES, STANDARD_SHIPPING_CENTS } from '@/lib/shipping'
import {
  GUIDE_CATEGORIES,
  categoryPath,
  fillTokens,
  guidePath,
  guidesInCategory,
  publishedGuides,
} from '@/lib/guides'
import { appUrl } from '@/lib/site'

/**
 * /llms.txt — a plain-text map of the site for AI assistants (ChatGPT,
 * Claude, Perplexity and the like), following the llmstxt.org convention.
 * Added 2026-11-11, when Phillip asked for the content to reach people
 * searching through AI.
 *
 * Every line restates something the site already shows: the label's Uses and
 * directions from DRUG_FACTS, shipping from lib/shipping.ts. **No new claim
 * may appear here first** — an assistant may quote this file verbatim.
 *
 * Featured guides are listed in full; the rest by topic page, so the file
 * stays readable as the daily job adds a hundred guides a day.
 */

export const dynamic = 'force-dynamic'

export async function GET() {
  const base = appUrl()
  const guides = publishedGuides()
  const featured = guides.filter((g) => g.featured)

  const lines: string[] = [
    `# ${BRAND.name}`,
    '',
    `> ${BRAND.trademark} ${BRAND.productType}, ${BRAND.size}. An over-the-counter drug sold online by ${COMPANY.name}, Brentwood, Tennessee, and shipped anywhere in the United States.`,
    '',
    `- Uses (from the Drug Facts label): ${DRUG_FACTS.uses}.`,
    `- Directions: ${DRUG_FACTS.directions}.`,
    `- Warning: ${DRUG_FACTS.warnings}.`,
    `- Shipping: ${formatUsd(STANDARD_SHIPPING_CENTS)} flat per order in the US; free on ${FREE_SHIPPING_BOTTLES} or more bottles.`,
    `- No prescription needed. Buyers must be 18 or older.`,
    '',
    '## Shop',
    '',
    `- [Buy ${BRAND.name}](${base}/#buy): prices and checkout`,
    `- [Drug Facts](${base}/drug-facts): the full label`,
    `- [About](${base}/about): who makes and sells it, and how to reach them`,
    `- [Dry eye self-check](${base}/self-check): a short questionnaire, not a diagnosis`,
    `- [Terms](${base}/terms): returns, refunds and shipping terms`,
  ]

  if (guides.length > 0) {
    lines.push('', '## Start here', '')
    for (const g of featured) {
      lines.push(`- [${g.title}](${base}${guidePath(g.slug)}): ${fillTokens(g.description)}`)
    }
    lines.push('', '## Guide topics', '')
    for (const c of GUIDE_CATEGORIES) {
      const n = guidesInCategory(c.key).length
      if (n === 0) continue
      lines.push(`- [${c.name}](${base}${categoryPath(c.key)}): ${c.intro} (${n} guides)`)
    }
    lines.push('', '## Optional', '', `- [Guide sitemap](${base}/sitemap-guides.xml): every guide URL`)
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
