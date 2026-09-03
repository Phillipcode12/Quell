import { describe, expect, it } from 'vitest'
import {
  HIDDEN_ON,
  MEDICAL_NOTICE,
  NUDGE,
  NUDGE_DELAY_MS,
  NUDGE_VISIBLE_MS,
  TOPICS,
} from './SiteHelper'
import { DRUG_FACTS, EMU_OIL, RELIEVES_WITHHELD } from '@/lib/product-content'

/**
 * These guard content on an FDA-regulated drug site, not component behaviour.
 *
 * The helper can only say sentences written into TOPICS, which is the whole
 * reason it is scripted rather than a language model. That guarantee is worth
 * nothing if someone later adds an answer that makes a claim the label does
 * not support — so the answers are checked here the same way the front-panel
 * claims are.
 */

const allAnswers = TOPICS.map((t) => t.answer).join(' ').toLowerCase()
const allText = TOPICS.map((t) => `${t.question} ${t.answer}`)
  .join(' ')
  .toLowerCase()

describe('what the helper is allowed to say', () => {
  it('never claims redness relief', () => {
    // Withheld from the site pending regulatory confirmation — the Drug Facts
    // Uses panel does not cover it and there is no vasoconstrictor in the
    // formula. It must not sneak back in through the helper.
    expect(RELIEVES_WITHHELD).toContain('Redness')
    expect(allText).not.toContain('redness')
  })

  it('makes no treatment or outcome claims', () => {
    // The helper points at pages. It does not tell anyone what the product
    // will do for them — that is what the Drug Facts panel is for.
    for (const phrase of [
      'cures',
      'treats',
      'heals',
      'will relieve',
      'guaranteed',
      'clinically proven',
      'safe for',
      'good for',
    ]) {
      expect(allAnswers, `answer contains "${phrase}"`).not.toContain(phrase)
    }
  })

  it('does not diagnose or address symptoms', () => {
    for (const phrase of ['your symptoms', 'you may have', 'you should take']) {
      expect(allAnswers).not.toContain(phrase)
    }
  })

  it('describes usage exactly as the Drug Facts directions do', () => {
    // The one answer that states how to use the product must match the label
    // rather than paraphrase it.
    const howTo = TOPICS.find((t) => t.id === 'how')
    expect(howTo).toBeDefined()
    expect(howTo!.answer).toContain(DRUG_FACTS.directions)
  })

  it('says Quell is over-the-counter and needs no prescription', () => {
    const rx = TOPICS.find((t) => t.id === 'prescription')
    expect(rx!.answer.toLowerCase()).toContain('over-the-counter')
    expect(rx!.answer.toLowerCase()).toContain('without one')
  })
})

describe('the fallback', () => {
  it('refuses medical questions and hands over to a person', () => {
    const notice = MEDICAL_NOTICE.toLowerCase()
    expect(notice).toContain('medical advice')
    // Names where to go instead, rather than apologising vaguely.
    expect(notice).toContain('drug facts')
    expect(notice).toMatch(/doctor|pharmacist/)
  })

  it('does not hedge into giving an opinion anyway', () => {
    for (const phrase of ['but it', 'however it', 'generally', 'most people']) {
      expect(MEDICAL_NOTICE.toLowerCase()).not.toContain(phrase)
    }
  })
})

describe('the topic list itself', () => {
  it('has unique ids and no empty content', () => {
    const ids = TOPICS.map((t) => t.id)
    expect(new Set(ids).size).toBe(ids.length)

    for (const t of TOPICS) {
      expect(t.question.trim().length).toBeGreaterThan(0)
      expect(t.answer.trim().length).toBeGreaterThan(0)
    }
  })

  it('only links to real internal pages', () => {
    // An external link would be a third-party destination on a page that
    // states the site uses no third-party trackers, and a typo'd internal one
    // is a 404 at the moment someone is asking for help.
    const known = [
      '/',
      '/#buy',
      '/#how-to-use',
      '/drug-facts',
      '/cart',
      '/orders',
      '/terms',
      '/privacy',
      '/about',
      '/about#contact',
    ]
    for (const t of TOPICS) {
      if (!t.href) continue
      expect(known, `unknown href ${t.href}`).toContain(t.href)
      expect(t.linkLabel?.trim().length ?? 0).toBeGreaterThan(0)
    }
  })

  it('covers the questions someone actually arrives with', () => {
    const ids = TOPICS.map((t) => t.id)
    // Order tracking and contact are the two that matter most: one is the
    // reason people come back, the other is the escape hatch.
    expect(ids).toContain('track')
    expect(ids).toContain('contact')
  })
})

describe('the unprompted nudge', () => {
  it('reuses the carton sentence verbatim rather than rewording it', () => {
    // This is the only line on the site that speaks without being asked, so
    // it is the most likely place for a claim to drift a word at a time. It
    // must stay a quotation of EMU_OIL.after, which is what the carton panel
    // and the about page already say.
    expect(NUDGE).toContain(EMU_OIL.after)
  })

  it('makes no claim of its own beyond that sentence', () => {
    const rest = NUDGE.replace(EMU_OIL.after, '').trim()
    expect(rest).toBe('Did you know? .')
  })

  it('says nothing about the reader', () => {
    // Same rule the slogan is held to: naming the condition is fine, telling
    // someone they have it is not. "Did you know" is addressed to a reader;
    // nothing after it may be.
    // Word-level rather than substring, so nothing incidental matches.
    const words = NUDGE.toLowerCase().replace(/[^a-z]+/g, ' ').split(' ')
    expect(words).not.toContain('your')
    expect(NUDGE.toLowerCase()).not.toContain('redness')
  })

  it('waits before speaking', () => {
    // Ten seconds, set 2026-08-28. The guard is against someone making it
    // instant: a line that arrives before the page has been read is an
    // interruption, not an aside.
    expect(NUDGE_DELAY_MS).toBeGreaterThanOrEqual(10_000)
  })
})

describe('where the helper is allowed to appear', () => {
  it('stays off every page that exists to be filled in', () => {
    // A fixed widget in the bottom-right corner takes taps meant for whatever
    // scrolls under it. Measured twice: Continue to payment on /cart, and
    // Create account on /register once the confirm field made the form taller.
    // The rule is the category rather than the measurement, because /register
    // measured clear until one field was added.
    for (const path of [
      '/cart',
      '/login',
      '/register',
      '/forgot-password',
      '/reset-password',
    ]) {
      expect(HIDDEN_ON, `${path} must not carry the helper`).toContain(path)
    }
  })

  it('does not hide itself from the pages its own answers point at', () => {
    // Every topic link has to lead somewhere the helper can still be reached
    // from, or the answer is a dead end. /cart is the exception above: the
    // shipping answer sends people there deliberately, to check out.
    for (const t of TOPICS) {
      if (!t.href || t.href === '/cart') continue
      const path = t.href.split('#')[0] || '/'
      expect(HIDDEN_ON).not.toContain(path)
    }
  })
})

describe('how long the nudge stays up', () => {
  it('leaves long enough to read the sentence it is showing', () => {
    // The nudge takes itself away on a timer, so the sentence and the timer
    // are one decision rather than two. This is the guard for the day someone
    // lengthens NUDGE without noticing it now has to be read against a clock.
    //
    // 160 words per minute is a deliberately slow reading speed: the sentence
    // arrives unannounced, in a corner, over whatever the person was actually
    // reading, so they start from a standing stop. NOTICE_MS is the pause
    // before that — seeing something appear and deciding to look at it.
    //
    // At the current wording this passes with a little under half a second to
    // spare, so it is genuinely close. Anyone adding a few words here will see
    // this fail, which is the point.
    const NOTICE_MS = 2_000
    const words = NUDGE.trim().split(/\s+/).length
    const msToRead = (words / 160) * 60_000
    const needed = Math.round(msToRead + NOTICE_MS)

    expect(
      NUDGE_VISIBLE_MS,
      `NUDGE is ${words} words: about ${Math.round(msToRead)}ms to read plus ${NOTICE_MS}ms to notice it = ${needed}ms, but it is only shown for ${NUDGE_VISIBLE_MS}ms. Either shorten NUDGE or raise NUDGE_VISIBLE_MS.`,
    ).toBeGreaterThanOrEqual(needed)
  })

  it('is shown for less time than it waits before speaking', () => {
    // Not a hard requirement, but a nudge that lingers longer than it waited
    // has stopped being a nudge. If these ever cross, it was probably not
    // intended.
    expect(NUDGE_VISIBLE_MS).toBeLessThan(NUDGE_DELAY_MS)
  })
})
