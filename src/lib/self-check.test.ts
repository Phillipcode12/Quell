import { describe, expect, it } from 'vitest'
import {
  BANDS,
  MAX_SCORE,
  PATTERN_EVAPORATIVE,
  QUESTIONS,
  score,
} from './self-check'
import { RELIEVES_WITHHELD } from './product-content'

/** Every question answered "Every day", which is the worst case. */
function allSevere(overrides: Record<string, unknown> = {}) {
  const answers: Record<string, unknown> = {}
  for (const q of QUESTIONS) {
    if (q.safety || q.unscored) continue
    answers[q.id] = 3
  }
  return { ...answers, ...overrides }
}

describe('the safety check outranks everything', () => {
  it('returns no score at all when a red flag is reported', () => {
    // The single most important behaviour here. Someone reporting eye pain
    // must never be handed a score and a product; they get sent to a doctor.
    const result = score(allSevere({ safety: 'flag' }))
    expect(result.safety).toBe(true)
    expect(JSON.stringify(result)).not.toContain('score')
  })

  it('scores normally when the flag is cleared', () => {
    const result = score(allSevere({ safety: 'clear' }))
    expect(result.safety).toBe(false)
  })

  it('applies even when every other answer is "never"', () => {
    // Minimal symptoms plus vision changes is still a doctor's problem.
    const answers: Record<string, unknown> = { safety: 'flag' }
    for (const q of QUESTIONS) if (!q.safety) answers[q.id] = 0
    expect(score(answers).safety).toBe(true)
  })
})

describe('scoring', () => {
  it('gives the maximum when everything is answered at the top of the scale', () => {
    const result = score(allSevere({ safety: 'clear' }))
    if (result.safety) throw new Error('unreachable')
    expect(result.score).toBe(MAX_SCORE)
    expect(result.band.id).toBe('significant')
  })

  it('gives zero for someone with no symptoms', () => {
    const answers: Record<string, unknown> = { safety: 'clear' }
    for (const q of QUESTIONS) if (!q.safety && !q.unscored) answers[q.id] = 0
    const result = score(answers)
    if (result.safety) throw new Error('unreachable')
    expect(result.score).toBe(0)
    expect(result.band.id).toBe('minimal')
  })

  it('does not penalise someone who uses no drops', () => {
    /**
     * The drops question is answered `null` by anyone who does not use drops.
     * Scoring that as zero would read as "my drops work all day" and drag the
     * total down — the opposite of the truth for someone with symptoms who has
     * never tried anything.
     */
    const withDrops = score(allSevere({ safety: 'clear' }))
    const withoutDrops = score(allSevere({ safety: 'clear', drops: null }))
    if (withDrops.safety || withoutDrops.safety) throw new Error('unreachable')
    expect(withoutDrops.score).toBe(withDrops.score)
  })

  it('covers every score from 0 to the maximum with exactly one band', () => {
    // A gap would render an undefined band; an overlap would make the result
    // depend on array order.
    for (let n = 0; n <= MAX_SCORE; n++) {
      const matches = BANDS.filter(
        (b, i) => n <= b.max && (i === 0 || n > BANDS[i - 1].max),
      )
      expect(matches, `score ${n}`).toHaveLength(1)
    }
  })

  it('ignores answers it does not recognise instead of throwing', () => {
    // This runs on input that arrived over the wire.
    const result = score({
      safety: 'clear',
      grit: 'lots',
      nonsense: {},
      burn: 2,
    })
    expect(result.safety).toBe(false)
  })

  it('clamps out-of-range numbers rather than trusting them', () => {
    const result = score({ safety: 'clear', grit: 999 })
    if (result.safety) throw new Error('unreachable')
    expect(result.score).toBeLessThanOrEqual(MAX_SCORE)
  })

  it('does not divide by zero when nothing was answered', () => {
    const result = score({})
    if (result.safety) throw new Error('unreachable')
    expect(result.score).toBe(0)
  })
})

describe('the evaporation pattern', () => {
  it('is named when enough markers are present', () => {
    const result = score({
      safety: 'clear',
      blink: 3,
      screens: 3,
      air: 3,
      timing: 'evening',
    })
    if (result.safety) throw new Error('unreachable')
    expect(result.evaporative).toBe(true)
    expect(result.pattern).toBe(PATTERN_EVAPORATIVE)
  })

  it('is not named on severity alone', () => {
    // Severe grittiness and burning with no evaporative markers must not
    // produce the pattern: the claim is about *which* symptoms, not how many.
    const result = score({ safety: 'clear', grit: 3, burn: 3 })
    if (result.safety) throw new Error('unreachable')
    expect(result.evaporative).toBe(false)
  })

  it('counts late-day timing but not morning', () => {
    const base = { safety: 'clear', blink: 2, screens: 2 }
    for (const timing of ['afternoon', 'evening', 'night']) {
      const r = score({ ...base, timing })
      if (r.safety) throw new Error('unreachable')
      expect(r.evaporative, timing).toBe(true)
    }
    const morning = score({ ...base, timing: 'morning' })
    if (morning.safety) throw new Error('unreachable')
    expect(morning.evaporative).toBe(false)
  })
})

describe('what the copy is not allowed to say', () => {
  const allCopy = JSON.stringify([
    QUESTIONS,
    BANDS,
    score({ safety: 'clear', blink: 3, screens: 3, air: 3 }),
    score({ safety: 'flag' }),
  ]).toLowerCase()

  it('never diagnoses', () => {
    for (const phrase of ['you have dry eye', 'diagnos', 'you are suffering']) {
      expect(allCopy, phrase).not.toContain(phrase)
    }
  })

  it('never tells anyone to use the product', () => {
    // The product may be offered after a result. It must never be the answer
    // to a score.
    for (const phrase of ['you should use', 'we recommend quell', 'try quell', 'buy quell']) {
      expect(allCopy, phrase).not.toContain(phrase)
    }
  })

  it('claims nothing about redness', () => {
    expect(RELIEVES_WITHHELD).toContain('Redness')
    // It appears once, in the safety check, as a reason to see a doctor.
    const safetyQuestion = QUESTIONS.find((q) => q.safety)!
    const mentionsRedness = safetyQuestion.choices.some((c) =>
      c.label.toLowerCase().includes('redness'),
    )
    expect(mentionsRedness).toBe(true)

    // And nowhere else.
    const nonSafety = JSON.stringify(
      QUESTIONS.filter((q) => !q.safety),
    ).toLowerCase()
    expect(nonSafety).not.toContain('redness')

    for (const claim of ['relieves redness', 'reduces redness', 'redness relief']) {
      expect(allCopy, claim).not.toContain(claim)
    }
  })

  it('says nothing about bacteria, biofilm or Demodex', () => {
    // Those belong to BlephEx. Quell's Uses panel does not mention them, so
    // raising them here would imply a claim the label does not carry.
    for (const word of ['biofilm', 'demodex', 'bacteri', 'mite']) {
      expect(allCopy, word).not.toContain(word)
    }
  })

  it('names no competitor', () => {
    for (const brand of ['systane', 'refresh', 'blink', 'visine', 'restasis']) {
      // "blink" is a legitimate word here, so check for a branded shape.
      expect(allCopy, brand).not.toContain(brand + '®')
    }
    /**
     * The drops question is the one place a competitor could creep in, so it
     * is asserted directly: it asks about drops generically and never about
     * whose. An earlier version of this test wrote `expect(a) || expect(b)`,
     * which is not an "or" — the first assertion throws before the second is
     * reached — and it failed for that reason rather than for a real one.
     */
    const dropsQuestion = QUESTIONS.find((q) => q.id === 'drops')!
    const prompt = dropsQuestion.prompt.toLowerCase()
    expect(prompt).toContain('eye drops')
    expect(prompt).not.toMatch(/brand|which drops|what drops/)
  })

  it('keeps the pattern about the answers, not the person', () => {
    // "Your answers fit…" is a questionnaire. "You have…" is a diagnosis.
    expect(PATTERN_EVAPORATIVE.toLowerCase()).toContain('your answers')
  })
})
