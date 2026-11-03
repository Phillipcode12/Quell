import {
  APPEARANCE_NOTE,
  BRAND,
  COMPANY,
  DRUG_FACTS,
  EMU_OIL,
  FAQS,
  RETURNS_SUMMARY,
} from '@/lib/product-content'
import { formatUsd } from '@/lib/money'
import {
  FREE_SHIPPING_BOTTLES,
  FREE_SHIPPING_THRESHOLD_CENTS,
  STANDARD_SHIPPING_CENTS,
} from '@/lib/shipping'
import type { Guide, GuideCategory } from '@/lib/guide-types'
import { FEATURED_GUIDES } from '@/lib/guide-articles/featured'
import { ORDERING_GUIDES } from '@/lib/guide-articles/ordering'
import { SHIPPING_GUIDES } from '@/lib/guide-articles/shipping'
import { RETURNS_GUIDES } from '@/lib/guide-articles/returns'
import { LABEL_GUIDES } from '@/lib/guide-articles/label'
import { USING_GUIDES } from '@/lib/guide-articles/using'
import { FORMULA_GUIDES } from '@/lib/guide-articles/formula'
import { CHOOSING_GUIDES } from '@/lib/guide-articles/choosing'

export type { Guide, GuideBlock, GuideCategory } from '@/lib/guide-types'

/**
 * Guide articles: questions people ask about buying and using eye drops,
 * answered with what this site can actually stand behind.
 *
 * Phillip's call on 2026-11-03: "100 more SEO articles, stuff related to
 * ordering eye drops online". Offered three readings — ten real guides, a
 * hundred more city pages, or a hundred topical articles — he chose all three.
 * The concern was stated before building and is recorded here so it is not
 * mistaken for an oversight: **there are not a hundred distinct true things to
 * say about one narrow topic without new health claims**, and Google's scaled
 * content policy is aimed at exactly the near-duplicates that produces.
 *
 * ### What was built to make that survivable
 *
 * 1. **`GUIDE_PAGES=off` removes every one of them** — routes, index, sitemap
 *    and footer link. One variable and a redeploy, same as `LOCATION_PAGES`.
 * 2. **Their own sitemap** (`/sitemap-guides.xml`), so Search Console reports
 *    their indexing apart from the product pages and the city pages.
 * 3. **`guides.test.ts` enforces distinctness mechanically**: no paragraph may
 *    appear in two guides, and no two guides may share more than a fixed share
 *    of their five-word sequences. A near-duplicate fails the build rather
 *    than shipping quietly.
 *
 * ### The rule the writing follows
 *
 * **No claim that is not already approved and on the site.** Product facts
 * come from the Drug Facts panel and the copy the home and About pages already
 * carry; ordering facts come from the code that charges and ships and from
 * /terms and /privacy. Where the label is silent — contact lenses, children,
 * other drops — the guide says the label is silent and sends the reader to a
 * doctor or pharmacist, rather than filling the gap.
 *
 * Wording that is legally load-bearing (the Uses statement, directions, the
 * stop-use warning, storage) is never retyped: it comes in through a
 * `{token}` that reads the same constant the Drug Facts page renders, so it
 * cannot drift. That is also the only route by which the word "redness" can
 * reach a guide — inside the verbatim stop-use warning, never as relief.
 *
 * Specifically **not** stated anywhere: a delivery window or a carrier name
 * (`lib/shipping.ts` explains why), refund timing, or anything about changing
 * or canceling an order. (Return postage was on this list until 2026-11-03,
 * when /terms §7 settled it: unopened bottles are refunded without being sent
 * back, so there is none.)
 */

/**
 * /terms §7: an unopened bottle is refunded within 30 days of delivery, and
 * from 2026-11-03 it is not sent back. Damaged, incorrect or broken-seal
 * orders are replaced within the same 30 days.
 */
export const RETURN_WINDOW_DAYS = 30

/** When this set went live. Used for the Article markup, not shown as a date. */
export const GUIDES_PUBLISHED_ON = '2026-11-03'

export const GUIDE_CATEGORIES: {
  key: GuideCategory
  name: string
  intro: string
}[] = [
  {
    key: 'ordering',
    name: 'Ordering online',
    intro: 'Checkout, payment, quantities and reordering.',
  },
  {
    key: 'shipping',
    name: 'Shipping and delivery',
    intro: 'What shipping costs, where it goes, and how to follow a package.',
  },
  {
    key: 'returns',
    name: 'Returns and help',
    intro: 'Refunds, damaged packages, and how to reach us.',
  },
  {
    key: 'label',
    name: 'Reading the label',
    intro: 'The Drug Facts panel, one section at a time.',
  },
  {
    key: 'using',
    name: 'Using and storing drops',
    intro: 'Directions, storage, and the questions the label leaves to your doctor.',
  },
  {
    key: 'formula',
    name: 'What is in Quell',
    intro: 'The active ingredients, the natural ones, and who makes it.',
  },
  {
    key: 'choosing',
    name: 'Choosing eye drops',
    intro: 'What to compare, and when a drop is not the answer.',
  },
]

function activeNamed(prefix: string): string {
  const found = DRUG_FACTS.activeIngredients.find((a) =>
    a.name.toLowerCase().startsWith(prefix),
  )
  if (!found) throw new Error(`guides: no active ingredient starting "${prefix}"`)
  return found.name
}

function listProse(items: readonly string[]): string {
  if (items.length <= 1) return items[0] ?? ''
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}

function faqAnswer(question: string): string {
  const found = FAQS.find((f) => f.q === question)
  if (!found) throw new Error(`guides: no FAQ "${question}"`)
  return found.a
}

/**
 * Placeholders a guide may use, each read from the constant that already
 * renders it elsewhere on the site.
 *
 * Functions rather than values so a bad lookup throws at build time on the
 * page that uses it, and so the test can exercise every one.
 */
export const GUIDE_TOKENS: Record<string, () => string> = {
  brand: () => BRAND.trademark,
  size: () => BRAND.size,
  uses: () => DRUG_FACTS.uses,
  directions: () => DRUG_FACTS.directions,
  warnings: () => DRUG_FACTS.warnings,
  tip: () => DRUG_FACTS.whenUsing[0],
  doNotUse: () => DRUG_FACTS.doNotUse[0],
  // The reviewed FAQ answer, which is the panel's stop-use list as a sentence.
  stopUse: () => faqAnswer('When should I stop and call a doctor?'),
  swallowed: () => DRUG_FACTS.keepOutOfReach,
  storage: () => DRUG_FACTS.otherInformation[1],
  milky: () => DRUG_FACTS.otherInformation[0],
  appearance: () => APPEARANCE_NOTE,
  // The carton's emu oil panel and its before/after, as printed.
  emuOil: () => EMU_OIL.body,
  oilBefore: () => EMU_OIL.before,
  oilAfter: () => EMU_OIL.after,
  glycerol: () => activeNamed('glycerol'),
  polysorbate: () => activeNamed('polysorbate'),
  mineralOil: () => activeNamed('light mineral oil'),
  actives: () => listProse(DRUG_FACTS.activeIngredients.map((a) => a.name)),
  inactives: () => listProse(DRUG_FACTS.inactiveIngredients),
  inactiveCount: () => String(DRUG_FACTS.inactiveIngredients.length),
  shipping: () => formatUsd(STANDARD_SHIPPING_CENTS),
  freeBottles: () => String(FREE_SHIPPING_BOTTLES),
  freeThreshold: () => formatUsd(FREE_SHIPPING_THRESHOLD_CENTS),
  returnDays: () => String(RETURN_WINDOW_DAYS),
  returns: () => RETURNS_SUMMARY,
  phone: () => COMPANY.phone,
  hours: () => COMPANY.hours,
  company: () => COMPANY.name,
  address: () => COMPANY.addressLines.join(', '),
}

/** Replaces every `{token}`. Throws on an unknown one rather than printing it. */
export function fillTokens(text: string): string {
  return text.replace(/\{(\w+)\}/g, (_, name: string) => {
    const token = GUIDE_TOKENS[name]
    if (!token) throw new Error(`guides: unknown token {${name}}`)
    return token()
  })
}

export type InlineSegment = { text: string; href?: string }

/** Splits `[label](/path)` links out of filled text. */
export function parseInline(text: string): InlineSegment[] {
  const segments: InlineSegment[] = []
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g
  let last = 0
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0
    if (index > last) segments.push({ text: text.slice(last, index) })
    segments.push({ text: match[1], href: match[2] })
    last = index + match[0].length
  }
  if (last < text.length) segments.push({ text: text.slice(last) })
  return segments
}

/**
 * The kill switch. Defaults on, like `LOCATION_PAGES`, because shipping the
 * pages switched off would be a quiet veto of a decision that is not mine.
 * Set `GUIDE_PAGES` to `off`, `0` or `false` and redeploy to withdraw them.
 */
export function guidePagesEnabled(): boolean {
  const flag = process.env.GUIDE_PAGES?.trim().toLowerCase()
  return !(flag === 'off' || flag === '0' || flag === 'false')
}

const ALL_GUIDES: Guide[] = [
  ...FEATURED_GUIDES,
  ...ORDERING_GUIDES,
  ...SHIPPING_GUIDES,
  ...RETURNS_GUIDES,
  ...LABEL_GUIDES,
  ...USING_GUIDES,
  ...FORMULA_GUIDES,
  ...CHOOSING_GUIDES,
]

/** Every guide, published or not. For tooling and tests. */
export function allGuides(): Guide[] {
  return ALL_GUIDES
}

export function publishedGuides(): Guide[] {
  return guidePagesEnabled() ? ALL_GUIDES : []
}

export function findGuide(slug: string): Guide | undefined {
  return publishedGuides().find((g) => g.slug === slug)
}

export function guidePath(slug: string): string {
  return `/guides/${slug}`
}

export function categoryName(key: GuideCategory): string {
  return GUIDE_CATEGORIES.find((c) => c.key === key)?.name ?? key
}

/**
 * Three guides to read next, from the same category.
 *
 * Taken cyclically from the position after this one, so links spread evenly
 * across the category instead of every page pointing at the same first three
 * — which would concentrate internal links on a few pages and leave the rest
 * reachable only from the index.
 */
export function relatedGuides(guide: Guide, take = 3): Guide[] {
  const peers = publishedGuides().filter((g) => g.category === guide.category)
  const at = peers.findIndex((g) => g.slug === guide.slug)
  const out: Guide[] = []
  for (let step = 1; step < peers.length && out.length < take; step += 1) {
    out.push(peers[(at + step) % peers.length])
  }
  return out
}

/** The readable text of a guide with tokens filled and link syntax removed. */
export function guideText(guide: Guide): string {
  const parts: string[] = [guide.title]
  for (const block of guide.body) {
    if ('h' in block) parts.push(block.h)
    else if ('p' in block) parts.push(block.p)
    else parts.push(...block.list)
  }
  return parts
    .map((part) =>
      parseInline(fillTokens(part))
        .map((s) => s.text)
        .join(''),
    )
    .join('\n')
}
