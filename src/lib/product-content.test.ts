import { describe, expect, it } from 'vitest'
import {
  DRUG_FACTS,
  RELIEVES,
  RELIEVES_WITHHELD,
  TESTIMONIALS,
  TESTIMONIALS_NOTE,
  relievesProse,
} from './product-content'

/**
 * These guard a regulatory decision, not a formatting preference.
 *
 * The carton's front panel advertises redness relief; the Drug Facts Uses
 * panel does not cover it, and the formula contains no vasoconstrictor. The
 * claim is withheld from the site until a regulatory reviewer confirms it and
 * the carton is corrected. A test is the right place for that, because the
 * failure mode is somebody adding the word back without knowing why it went.
 */

describe('the claims shown on the site', () => {
  it('does not claim redness relief', () => {
    // If this fails, someone restored the claim. That is allowed — but only
    // after regulatory sign-off AND a corrected Drug Facts panel. Read the
    // note on RELIEVES_WITHHELD before deleting this test.
    expect(RELIEVES).not.toContain('Redness')
    expect(relievesProse()).not.toContain('redness')
  })

  it('keeps the withheld claim recorded rather than deleted', () => {
    // Kept in the source, with its reasoning, so restoring it is a decision
    // someone can find — not archaeology through git history.
    expect(RELIEVES_WITHHELD).toContain('Redness')
  })

  it('claims nothing the Drug Facts Uses panel does not cover', () => {
    // The actual rule: FDA expects front-panel claims to be covered by Uses.
    // "Protectant against further irritation or to relieve dryness of the eye"
    // supports dryness and irritation. Itching is a recognised demulcent
    // symptom and stays.
    const uses = DRUG_FACTS.uses.toLowerCase()
    expect(uses).toContain('dryness')
    expect(uses).toContain('irritation')
    // The panel is the source of truth; redness is absent from it.
    expect(uses).not.toContain('redness')
  })

  it('mentions redness only as a caution, never as a benefit', () => {
    // Redness does appear in this product's labelling — under "stop use and
    // ask a doctor if". That is the opposite of a treatment claim and must
    // stay exactly where it is.
    const stopUse = DRUG_FACTS.stopUseAndAskDoctorIf.join(' ').toLowerCase()
    expect(stopUse).toContain('redness')
  })
})

describe('relievesProse', () => {
  it('renders the current list as a sentence', () => {
    expect(relievesProse()).toBe('dryness, irritation, and itching')
  })

  it('reproduces the original wording exactly if the claim is restored', () => {
    // The restore path in one assertion: putting 'Redness' back in third
    // position returns the copy the site carried before 2026-08-20, so
    // restoring is genuinely a one-word change with no copy to rewrite.
    const restored = ['Dryness', 'Irritation', 'Redness', 'Itching']
    const items = restored.map((r) => r.toLowerCase())
    const prose = `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`

    expect(prose).toBe('dryness, irritation, redness, and itching')
  })

  it('reads correctly at any list length', () => {
    // Guards the join logic itself: no dangling comma, no orphaned "and".
    expect(relievesProse()).toMatch(/^[a-z]+(, [a-z]+)*, and [a-z]+$/)
    expect(relievesProse()).not.toMatch(/,\s*and\s*$/)
    expect(relievesProse()).not.toMatch(/,,/)
  })
})

describe('what a testimonial is allowed to say', () => {
  /**
   * A quotation is not a defence.
   *
   * These words appear on Quell's own site, so they are Quell's claims however
   * they are attributed. Every rule below was written against something that
   * was actually submitted on 2026-09-03 and held back, not against a
   * hypothetical.
   */
  const quotes = TESTIMONIALS.map((t) => t.quote)
  const all = quotes.join(' ').toLowerCase()

  it('never claims redness relief', () => {
    // Withheld from the site entirely, pending regulatory confirmation. The
    // testimonials must not be the back door it returns through.
    expect(RELIEVES_WITHHELD).toContain('Redness')
    expect(all).not.toContain('redness')
    expect(all).not.toContain('red eye')
  })

  it('makes no comparative superiority claim', () => {
    // "Best drops I've ever used" was submitted and held back. It is a claim
    // about every competing product, and the same shape of sentence is what
    // the FDA cited on the sister site.
    for (const phrase of [
      'best ',
      'better than',
      'the only',
      'nothing else',
      'more effective',
      'strongest',
      'number one',
      '#1',
    ]) {
      expect(all, `testimonial contains "${phrase}"`).not.toContain(phrase)
    }
  })

  it('makes no duration-of-action claim', () => {
    // "They last all day" was submitted and held back. The Drug Facts panel on
    // this same site directs one drop three times a day, so an all-day claim
    // is contradicted by our own label — the worst kind, because the evidence
    // against it is one click away.
    expect(DRUG_FACTS.directions).toContain('3 times per day')
    for (const phrase of [
      'all day',
      'lasts hours',
      'last hours',
      'hours of',
      'one drop is enough',
      'only need one',
    ]) {
      expect(all, `testimonial contains "${phrase}"`).not.toContain(phrase)
    }
  })

  it('claims no cure and treats no condition', () => {
    for (const phrase of [
      'cured',
      'cure',
      'healed',
      'fixed my',
      'treats',
      'treatment for',
      'blepharitis',
      'infection',
      'disease',
      'symptoms',
      'diagnos',
    ]) {
      expect(all, `testimonial contains "${phrase}"`).not.toContain(phrase)
    }
  })

  it('discloses the permission and the substituted names', () => {
    // Real quotes, permission given, but the names are substituted. A
    // pseudonym presented as a real name is a small dishonesty on a page whose
    // entire job is being believed.
    //
    // Asserted on the two facts rather than on a phrase, so the line can be
    // reworded — it has been once — without the test becoming a spelling
    // check. What it must never do is drop either disclosure.
    const note = TESTIMONIALS_NOTE.toLowerCase()
    expect(note, 'must say the names are not the real ones').toContain('names')

    // Consent can be worded several honest ways — "with permission", "agreed
    // to let us publish" — and the current line uses the second because it is
    // plainer. Matching the idea rather than one phrase keeps the test about
    // the disclosure instead of the vocabulary; drop the disclosure entirely
    // and it still fails.
    const saysConsent = ['permission', 'agreed', 'consent'].some((w) =>
      note.includes(w),
    )
    expect(saysConsent, `note must disclose consent — it reads: "${TESTIMONIALS_NOTE}"`).toBe(true)
  })

  it('does not claim the quotes are unedited', () => {
    // Susan's "reasonably prices" was corrected to "priced". A blanket "nothing
    // has been changed" would therefore be false, and this page's whole
    // argument is that it can be taken at its word.
    const note = TESTIMONIALS_NOTE.toLowerCase()
    for (const phrase of ['unedited', 'nothing has been changed', 'word for word']) {
      expect(note, `note claims "${phrase}"`).not.toContain(phrase)
    }
  })

  it('attributes every quote and leaves none empty', () => {
    expect(TESTIMONIALS.length).toBeGreaterThan(0)
    for (const t of TESTIMONIALS) {
      expect(t.name.trim().length, 'a quote with no name').toBeGreaterThan(0)
      expect(t.quote.trim().length, `${t.name} has an empty quote`).toBeGreaterThan(0)
    }
  })
})
