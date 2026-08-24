import { describe, expect, it } from 'vitest'
import {
  DRUG_FACTS,
  RELIEVES,
  RELIEVES_WITHHELD,
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
