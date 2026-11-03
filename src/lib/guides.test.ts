import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  GUIDE_CATEGORIES,
  GUIDE_TOKENS,
  allGuides,
  fillTokens,
  guideText,
  parseInline,
  publishedGuides,
  relatedGuides,
} from './guides'
import type { Guide } from './guide-types'

const guides = allGuides()

/** Everything a guide says, before tokens are filled. */
function rawParts(g: Guide): string[] {
  return [
    g.title,
    g.description,
    ...g.body.flatMap((b) => ('h' in b ? [b.h] : 'p' in b ? [b.p] : b.list)),
  ]
}

const raw = (g: Guide) => rawParts(g).join('\n')

const STATIC_LINKS = new Set([
  '/',
  '/#buy',
  '/#faq',
  '/#science',
  '/#how-to-use',
  '/drug-facts',
  '/orders',
  '/terms',
  '/privacy',
  '/about',
  '/about#contact',
  '/self-check',
  '/reviews',
  '/eye-drops',
  '/cart',
  '/guides',
])

describe('guides: the set', () => {
  it('is 119 guides, ten of them featured', () => {
    expect(guides).toHaveLength(119)
    expect(guides.filter((g) => g.featured)).toHaveLength(10)
  })

  it('uses every category, and only known ones', () => {
    const known = new Set(GUIDE_CATEGORIES.map((c) => c.key))
    for (const g of guides) expect(known, g.slug).toContain(g.category)
    for (const c of known) {
      expect(guides.some((g) => g.category === c), c).toBe(true)
    }
  })

  it('has unique, well-formed slugs', () => {
    const slugs = guides.map((g) => g.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it('has unique titles short enough not to be truncated', () => {
    const titles = guides.map((g) => g.title.toLowerCase())
    expect(new Set(titles).size).toBe(titles.length)
    // The layout appends " — Quell"; Google cuts at roughly 60 characters.
    for (const g of guides) expect(g.title.length, g.slug).toBeLessThanOrEqual(55)
  })

  it('has unique descriptions of a usable length', () => {
    const filled = guides.map((g) => fillTokens(g.description))
    expect(new Set(filled).size).toBe(filled.length)
    for (const [i, d] of filled.entries()) {
      expect(d.length, guides[i].slug).toBeGreaterThanOrEqual(70)
      expect(d.length, guides[i].slug).toBeLessThanOrEqual(160)
    }
  })
})

describe('guides: tokens and links', () => {
  it('resolves every token to something', () => {
    for (const [name, read] of Object.entries(GUIDE_TOKENS)) {
      expect(read().trim().length, name).toBeGreaterThan(0)
    }
  })

  it('fills every guide with no placeholder left behind', () => {
    for (const g of guides) {
      for (const part of rawParts(g)) {
        const filled = fillTokens(part)
        expect(filled, g.slug).not.toMatch(/[{}]/)
      }
    }
  })

  it('throws on an unknown token rather than printing it', () => {
    expect(() => fillTokens('{nope}')).toThrow(/unknown token/)
  })

  it('links only to pages that exist', () => {
    const slugs = new Set(guides.map((g) => g.slug))
    for (const g of guides) {
      for (const part of rawParts(g)) {
        for (const seg of parseInline(fillTokens(part))) {
          if (!seg.href) continue
          const ok =
            STATIC_LINKS.has(seg.href) ||
            (seg.href.startsWith('/guides/') && slugs.has(seg.href.slice(8)))
          expect(ok, `${g.slug} -> ${seg.href}`).toBe(true)
          expect(seg.href, `${g.slug} links to itself`).not.toBe(`/guides/${g.slug}`)
        }
      }
    }
  })

  it('gives every guide at least one link in its body', () => {
    for (const g of guides) {
      const links = g.body
        .flatMap((b) => ('p' in b ? [b.p] : 'list' in b ? b.list : []))
        .flatMap((t) => parseInline(fillTokens(t)))
        .filter((s) => s.href)
      expect(links.length, g.slug).toBeGreaterThan(0)
    }
  })

  it('offers three related guides that are not the guide itself', () => {
    for (const g of guides) {
      const related = relatedGuides(g)
      expect(related.length, g.slug).toBe(3)
      expect(related.map((r) => r.slug), g.slug).not.toContain(g.slug)
    }
  })
})

/**
 * The claims line. These run on the text **before** tokens are filled, because
 * the tokens are the approved label wording — the stop-use warning carries the
 * word "redness" and must be allowed to. Prose written for a guide may not.
 */
describe('guides: what they may not say', () => {
  it('never mentions redness outside the verbatim stop-use warning', () => {
    for (const g of guides) {
      // \b before "red": "tired eyes" contains the letters "red eyes".
      expect(raw(g), g.slug).not.toMatch(/redness|\bred eyes?\b|bloodshot/i)
    }
  })

  const BANNED: [RegExp, string][] = [
    [/\bcure[sd]?\b/i, 'cure'],
    [/\bheal(s|ed|ing)?\b/i, 'heal'],
    [/\btreat(s|ed|ing|ment)?\b/i, 'treat'],
    [/\bbest\b/i, 'superiority'],
    [/#1\b|\bnumber one\b/i, 'superiority'],
    [/\bcheapest\b|\bmiracle\b/i, 'superiority'],
    [/\bguarantee/i, 'guarantee'],
    [/\bclinically\b|\bproven\b/i, 'evidence claim'],
    [/\bFDA[- ]approved\b/i, 'OTC drugs like this are not individually approved'],
    [/\bdoctor[- ]recommended\b/i, 'endorsement'],
    [/\ball[- ]day\b|\blong[- ]lasting\b|\blasts? for\b/i, 'duration of action'],
    [/\binstant(ly)?\b/i, 'speed of action'],
    [/\bprevent/i, 'prevention claim'],
    [/\b(disease|syndrome|dysfunction|MGD|blepharitis|Sj[öo]gren)/i, 'condition'],
    [/\b(infection|conjunctivitis|pink eye|glaucoma|cataract|LASIK)\b/i, 'condition'],
    [/\bsafe (for|to use)\b/i, 'safety claim'],
    [/\ballergy relief\b/i, 'claim'],
    [/\b(FedEx|UPS|USPS|DHL)\b/, 'carrier named in promotion'],
    [/\b(overnight|next[- ]day|same[- ]day|(2|two)[- ]day)\b/i, 'delivery window'],
    [/\bbusiness days?\b/i, 'delivery window'],
    [/\bfree returns?\b/i, 'return postage is not stated in /terms'],
  ]

  for (const [pattern, why] of BANNED) {
    it(`does not say ${pattern} (${why})`, () => {
      for (const g of guides) expect(raw(g), g.slug).not.toMatch(pattern)
    })
  }

  it('only says "diagnosis" to say the self-check is not one', () => {
    for (const g of guides) {
      const rest = raw(g).replace(/\bnot a diagnosis\b/gi, '')
      expect(rest, g.slug).not.toMatch(/diagnos/i)
    }
  })

  it('takes every dollar amount from a token, never typed in', () => {
    // Prices live in the database and shipping in lib/shipping.ts. A figure
    // typed into a guide is a figure that goes stale on its own.
    for (const g of guides) expect(raw(g), g.slug).not.toMatch(/\$\s?\d/)
  })

  it('takes ingredient percentages from the label, never typed in', () => {
    for (const g of guides) expect(raw(g), g.slug).not.toMatch(/\d(\.\d+)?\s?%/)
  })

  it('is written in US English', () => {
    const BRITISH =
      /\b(colour|flavour|behaviour|favour|honour|centre|fulfil(?!l)|organis|recognis|realis(e|ed|ing)\b|apologis|travell|cancell(ed|ing)|labell|modell|enquir|cheque|catalogue|defence|licence|programme|practis|grey|aluminium|whilst|amongst)/i
    for (const g of guides) expect(raw(g), g.slug).not.toMatch(BRITISH)
  })
})

/**
 * The scaled-content guard. A hundred articles on one narrow subject drift
 * towards the same sentences; these make that a failing test instead of a
 * quiet pattern for Google to find.
 */
describe('guides: length and distinctness', () => {
  const words = (t: string) => t.split(/\s+/).filter(Boolean)

  it('gives the featured guides real length', () => {
    for (const g of guides.filter((x) => x.featured)) {
      expect(words(guideText(g)).length, g.slug).toBeGreaterThanOrEqual(550)
    }
  })

  it('gives every other guide enough to be worth a page', () => {
    for (const g of guides.filter((x) => !x.featured)) {
      expect(words(guideText(g)).length, g.slug).toBeGreaterThanOrEqual(180)
    }
  })

  it('never repeats a paragraph between guides', () => {
    const seen = new Map<string, string>()
    for (const g of guides) {
      for (const block of g.body) {
        if (!('p' in block)) continue
        // A paragraph that is only a label token is the label, quoted.
        if (/^\{\w+\}\.?$/.test(block.p.trim())) continue
        const key = block.p.toLowerCase().replace(/\s+/g, ' ').trim()
        if (key.length < 60) continue
        const other = seen.get(key)
        expect(other, `"${key.slice(0, 50)}…" in ${g.slug} and ${other}`).toBeUndefined()
        seen.set(key, g.slug)
      }
    }
  })

  it('keeps every pair of guides textually distinct', () => {
    const shingles = (t: string) => {
      const w = words(t.toLowerCase().replace(/[^a-z0-9\s]/g, ' '))
      const out = new Set<string>()
      for (let i = 0; i + 5 <= w.length; i += 1) out.add(w.slice(i, i + 5).join(' '))
      return out
    }
    const sets = guides.map((g) => ({ slug: g.slug, s: shingles(guideText(g)) }))
    let worst = { score: 0, pair: '' }
    for (let i = 0; i < sets.length; i += 1) {
      for (let j = i + 1; j < sets.length; j += 1) {
        const a = sets[i].s
        const b = sets[j].s
        let shared = 0
        for (const x of a) if (b.has(x)) shared += 1
        const score = shared / (a.size + b.size - shared)
        if (score > worst.score) worst = { score, pair: `${sets[i].slug} / ${sets[j].slug}` }
      }
    }
    expect(worst.score, worst.pair).toBeLessThan(0.15)
  })
})

describe('guides: the kill switch', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('publishes them by default', () => {
    expect(publishedGuides()).toHaveLength(119)
  })

  it.each(['off', '0', 'false', ' OFF '])('withdraws them all for GUIDE_PAGES=%j', (v) => {
    vi.stubEnv('GUIDE_PAGES', v)
    expect(publishedGuides()).toHaveLength(0)
  })
})
