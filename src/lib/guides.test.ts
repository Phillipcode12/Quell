import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  GUIDE_CATEGORIES,
  GUIDE_TOKENS,
  allGuides,
  categoryPath,
  fillTokens,
  guideText,
  parseInline,
  publishedGuides,
  relatedGuides,
} from './guides'
import type { Guide } from './guide-types'
import {
  locationPath,
  publishedLocations,
  publishedStates,
  statePath,
} from './locations'

const guides = allGuides()

/** Everything a guide says, before tokens are filled. */
function rawParts(g: Guide): string[] {
  return [
    g.title,
    g.description,
    ...g.body.flatMap((b) => ('h' in b ? [b.h] : 'p' in b ? [b.p] : b.list)),
    ...(g.faq ?? []).flatMap((f) => [f.q, f.a]),
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
  '/llms.txt',
  ...GUIDE_CATEGORIES.map((c) => categoryPath(c.key)),
])

/**
 * City pages a guide may link to: only live ones. A city beyond
 * PUBLISHED_LOCATION_COUNT has no page yet, so a link to it would 404.
 */
const LIVE_PLACE_LINKS = new Set([
  ...publishedLocations().map((l) => locationPath(l)),
  ...publishedStates().map((s) => statePath(s.slug)),
])

/** Daily-job guides: everything from 2026-11-11 on carries `addedOn`. */
const daily = guides.filter((g) => g.addedOn)

describe('guides: the set', () => {
  it('keeps the 139 hand-written guides, ten of them featured', () => {
    // 139 before the daily job started (2026-11-11). The daily job only adds;
    // a guide disappearing is a live URL going to 404.
    expect(guides.filter((g) => !g.addedOn)).toHaveLength(139)
    expect(guides.filter((g) => g.featured)).toHaveLength(10)
  })

  it('uses only known categories, each empty or with at least four guides', () => {
    // Four, so every guide has three related guides to show.
    const known = new Set(GUIDE_CATEGORIES.map((c) => c.key))
    for (const g of guides) expect(known, g.slug).toContain(g.category)
    for (const c of known) {
      const n = guides.filter((g) => g.category === c).length
      expect(n === 0 || n >= 4, `${c} has ${n}`).toBe(true)
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
            LIVE_PLACE_LINKS.has(seg.href) ||
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

  it('never repeats a paragraph or FAQ answer between guides', () => {
    const seen = new Map<string, string>()
    for (const g of guides) {
      const texts = [
        ...g.body.flatMap((b) => ('p' in b ? [b.p] : [])),
        ...(g.faq ?? []).map((f) => f.a),
      ]
      for (const text of texts) {
        // A paragraph that is only a label token is the label, quoted.
        if (/^\{\w+\}\.?$/.test(text.trim())) continue
        const key = text.toLowerCase().replace(/\s+/g, ' ').trim()
        if (key.length < 60) continue
        const other = seen.get(key)
        expect(other, `"${key.slice(0, 50)}…" in ${g.slug} and ${other}`).toBeUndefined()
        seen.set(key, g.slug)
      }
    }
  })

  it('never asks the same FAQ question twice across the site', () => {
    const seen = new Map<string, string>()
    for (const g of guides) {
      for (const f of g.faq ?? []) {
        const key = f.q.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
        const other = seen.get(key)
        expect(other, `"${f.q}" in ${g.slug} and ${other}`).toBeUndefined()
        seen.set(key, g.slug)
      }
    }
  })

  it('keeps every pair of guides textually distinct', () => {
    // Jaccard similarity of five-word sequences, below 0.15 for every pair.
    //
    // Rebuilt 2026-11-11 for the daily job: comparing every pair directly is
    // O(n²) set scans, which at a hundred guides a day would make this test
    // take minutes within weeks. Instead each shingle maps to the guides that
    // contain it, and only pairs that share a shingle are counted. Same
    // result, and the cost grows with the overlap rather than with n².
    const shingles = (t: string) => {
      const w = words(t.toLowerCase().replace(/[^a-z0-9\s]/g, ' '))
      const out = new Set<string>()
      for (let i = 0; i + 5 <= w.length; i += 1) out.add(w.slice(i, i + 5).join(' '))
      return out
    }
    const sets = guides.map((g) => shingles(guideText(g)))
    const holders = new Map<string, number[]>()
    sets.forEach((set, i) => {
      for (const s of set) {
        const list = holders.get(s)
        if (list) list.push(i)
        else holders.set(s, [i])
      }
    })
    const shared = new Map<number, number>()
    for (const list of holders.values()) {
      if (list.length < 2) continue
      for (let a = 0; a < list.length; a += 1) {
        for (let b = a + 1; b < list.length; b += 1) {
          const key = list[a] * 1_000_000 + list[b]
          shared.set(key, (shared.get(key) ?? 0) + 1)
        }
      }
    }
    let worst = { score: 0, pair: '' }
    for (const [key, n] of shared) {
      const i = Math.floor(key / 1_000_000)
      const j = key % 1_000_000
      const score = n / (sets[i].size + sets[j].size - n)
      if (score > worst.score) {
        worst = { score, pair: `${guides[i].slug} / ${guides[j].slug}` }
      }
    }
    expect(worst.score, worst.pair).toBeLessThan(0.15)
  })
})

/**
 * The daily job's standard (set up 2026-11-11). Phillip asked for as many
 * words and facts as possible and for answers that AI assistants can quote,
 * so guides from the job are held to more than the hand-written set.
 */
describe('guides: the daily job', () => {
  const words = (t: string) => t.split(/\s+/).filter(Boolean)

  it('dates each one, never in the future', () => {
    const today = new Date().toISOString().slice(0, 10)
    for (const g of daily) {
      expect(g.addedOn, g.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(g.addedOn! >= '2026-11-11', g.slug).toBe(true)
      expect(g.addedOn! <= today, g.slug).toBe(true)
      expect(g.featured, g.slug).toBeUndefined()
    }
  })

  it('runs to at least 800 words', () => {
    for (const g of daily) {
      expect(words(guideText(g)).length, g.slug).toBeGreaterThanOrEqual(800)
    }
  })

  it('opens with a direct answer of 25 to 90 words', () => {
    // The first paragraph is the one search snippets and AI assistants quote.
    for (const g of daily) {
      const first = g.body[0]
      expect(first && 'p' in first, `${g.slug} must open with a paragraph`).toBe(true)
      if (first && 'p' in first) {
        const n = words(parseInline(fillTokens(first.p)).map((s) => s.text).join('')).length
        expect(n, g.slug).toBeGreaterThanOrEqual(25)
        expect(n, g.slug).toBeLessThanOrEqual(90)
      }
    }
  })

  it('has at least five sections and three links', () => {
    for (const g of daily) {
      expect(g.body.filter((b) => 'h' in b).length, g.slug).toBeGreaterThanOrEqual(5)
      const links = g.body
        .flatMap((b) => ('p' in b ? [b.p] : 'list' in b ? b.list : []))
        .flatMap((t) => parseInline(fillTokens(t)))
        .filter((s) => s.href)
      expect(links.length, g.slug).toBeGreaterThanOrEqual(3)
    }
  })

  it('ends with three to six real questions and short answers', () => {
    for (const g of daily) {
      const faq = g.faq ?? []
      expect(faq.length, g.slug).toBeGreaterThanOrEqual(3)
      expect(faq.length, g.slug).toBeLessThanOrEqual(6)
      for (const f of faq) {
        expect(f.q.trim().endsWith('?'), `${g.slug}: ${f.q}`).toBe(true)
        const a = fillTokens(f.a)
        expect(a.length, `${g.slug}: ${f.q}`).toBeGreaterThanOrEqual(40)
        expect(a.length, `${g.slug}: ${f.q}`).toBeLessThanOrEqual(600)
      }
    }
  })
})

describe('guides: the kill switch', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('publishes them by default', () => {
    expect(publishedGuides()).toHaveLength(guides.length)
  })

  it.each(['off', '0', 'false', ' OFF '])('withdraws them all for GUIDE_PAGES=%j', (v) => {
    vi.stubEnv('GUIDE_PAGES', v)
    expect(publishedGuides()).toHaveLength(0)
  })
})
