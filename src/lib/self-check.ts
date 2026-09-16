/**
 * The dry eye self-check: questions, scoring and result copy.
 *
 * Every word a visitor reads is here rather than in the component, for the
 * same reason `product-content.ts` exists — this is regulated copy. It has to
 * be reviewable in one place by someone who does not read TSX, and changing a
 * question must never mean editing a layout.
 *
 * ### What this is not
 *
 * **Not a validated instrument, and it must never be presented as one.** The
 * established questionnaires in this area — OSDI and SPEED — are copyrighted,
 * OSDI by Allergan and SPEED by its originators. These questions are original.
 * They cover similar symptom territory because that is what dry eye consists
 * of, not because anything was copied. So: no citation, no clinical framing,
 * no implied equivalence to a score a clinician would use.
 *
 * **It never diagnoses and never prescribes.** No result says "you have dry
 * eye" and none says "use Quell". Results describe what the answers said, note
 * what that pattern commonly reflects, and point at an eye care professional.
 *
 * ### The rules the copy has to keep
 *
 *  - **No redness as a benefit.** It appears once, in the safety check, exactly
 *    as the carton uses it — as a reason to stop and see a doctor. Still
 *    withheld as a claim everywhere else (see RELIEVES_WITHHELD).
 *  - **Nothing about bacteria, biofilm or Demodex.** Those belong to BlephEx.
 *    Quell's Uses panel does not mention them, so raising them here would imply
 *    a claim the label does not carry.
 *  - **No named competitor.** Q7 asks how long *your* drops last. It never asks
 *    whose, and no result contrasts Quell with anyone.
 */

export type Choice = { label: string; value: number | string | null }

export type Question = {
  id: string
  prompt: string
  choices: Choice[]
  /** Counts toward the evaporation pattern when answered 2 or more. */
  evaporative?: boolean
  /** Excluded from the severity score. */
  unscored?: boolean
  /** The safety check, which overrides the score entirely. */
  safety?: boolean
}

/**
 * Two scales, because two kinds of question are being asked.
 *
 * `FREQUENCY` measures something that comes and goes over a week, so it is
 * counted in days. `EXPOSURE` measures what happens *when a specific thing
 * happens* — screen use, moving air — and days are the wrong unit for that:
 * "some days" does not answer "how often, when you use a screen", and a
 * reader has to guess whether they are reporting on the trigger or the week.
 * Occasions are the honest unit there.
 */
const FREQUENCY: Choice[] = [
  { label: 'Never', value: 0 },
  { label: 'Some days', value: 1 },
  { label: 'Most days', value: 2 },
  { label: 'Every day', value: 3 },
]

const EXPOSURE: Choice[] = [
  { label: 'Never', value: 0 },
  { label: 'Occasionally', value: 1 },
  { label: 'Frequently', value: 2 },
  { label: 'Every time', value: 3 },
]

export const QUESTIONS: Question[] = [
  {
    id: 'grit',
    prompt: 'How often do your eyes feel dry, gritty, or like there’s sand in them?',
    choices: FREQUENCY,
  },
  {
    id: 'burn',
    prompt: 'How often do your eyes burn or sting?',
    choices: FREQUENCY,
  },
  {
    id: 'blink',
    prompt: 'How often does your vision blur and then clear again when you blink?',
    choices: FREQUENCY,
    evaporative: true,
  },
  {
    id: 'screens',
    prompt:
      'After an hour or more of screen use, how often do your eyes feel worse?',
    choices: EXPOSURE,
    evaporative: true,
  },
  {
    id: 'air',
    prompt:
      'In wind, air conditioning, or heating, how often do your eyes feel worse?',
    choices: EXPOSURE,
    evaporative: true,
  },
  {
    // Shortened from "water or stream for no obvious reason" on 2026-09-16:
    // the qualifier made people judge whether their reason counted, when the
    // frequency is the only part that is scored.
    id: 'watering',
    prompt: 'How often do your eyes water?',
    choices: FREQUENCY,
    evaporative: true,
  },
  {
    id: 'drops',
    prompt: 'If you use eye drops, how long does the relief usually last?',
    evaporative: true,
    choices: [
      // null is excluded from the average rather than scored zero, so someone
      // who uses no drops is not recorded as someone whose drops work well.
      { label: 'I don’t use drops', value: null },
      { label: 'Most of the day', value: 0 },
      { label: 'A few hours', value: 1 },
      { label: 'Under an hour', value: 2 },
      { label: 'Barely at all', value: 3 },
    ],
  },
  {
    id: 'timing',
    prompt: 'When are your eyes at their worst?',
    unscored: true,
    choices: [
      { label: 'Morning', value: 'morning' },
      { label: 'Afternoon', value: 'afternoon' },
      { label: 'Evening', value: 'evening' },
      { label: 'Night', value: 'night' },
      /**
       * The fifth option exists so nobody has to invent a time of day, and an
       * invented answer is worse than none.
       *
       * "All the time" rather than "no real pattern": it says something true
       * about the person instead of describing the absence of an answer, and
       * it is what someone with constant symptoms would actually choose.
       *
       * Deliberately **not** an evaporation marker. Constant symptoms point in
       * no particular direction — the pattern this question contributes to is
       * *worsening through the day*, and something present from waking to
       * sleeping is not that. Severity is already measured by the questions
       * above, so nothing is lost by scoring it neutrally here.
       */
      { label: 'All the time', value: 'constant' },
    ],
  },
  {
    id: 'safety',
    prompt: 'One last thing — do any of these apply to you right now?',
    safety: true,
    choices: [
      { label: 'Eye pain', value: 'flag' },
      { label: 'Changes in my vision', value: 'flag' },
      { label: 'Symptoms lasting more than 72 hours', value: 'flag' },
      { label: 'Redness that won’t settle', value: 'flag' },
      { label: 'None of these', value: 'clear' },
    ],
  },
]

/** Times of day that count toward the evaporation pattern. */
const LATE_DAY = ['afternoon', 'evening', 'night']

/** Evaporation markers needed before the pattern is named. */
const PATTERN_THRESHOLD = 3

export const MAX_SCORE = 21

export type Band = {
  id: string
  /** Heading shown to the visitor. */
  title: string
  /** One line under it. */
  summary: string
  max: number
}

export const BANDS: Band[] = [
  {
    id: 'minimal',
    title: 'Minimal',
    summary: 'Little or nothing to report from these answers.',
    max: 4,
  },
  {
    id: 'mild',
    title: 'Mild and occasional',
    summary: 'Noticeable on some days, often tied to a particular trigger.',
    max: 10,
  },
  {
    id: 'moderate',
    title: 'Moderate, most days',
    summary: 'A regular part of your day rather than an occasional nuisance.',
    max: 15,
  },
  {
    id: 'significant',
    title: 'Significant, daily',
    summary: 'Daily, and affecting what you do. Worth a professional opinion.',
    max: MAX_SCORE,
  },
]

/**
 * The pattern read.
 *
 * Both phrasings are about *the answers*, never about the person. That is the
 * whole line between a questionnaire and a diagnosis, and it is why neither
 * sentence contains the word "you have".
 */
export const PATTERN_EVAPORATIVE =
  'Your answers fit an evaporation pattern. Blurring that clears when you blink, trouble on screens and in moving air, and relief that fades quickly all describe a tear film that is not holding. The outermost layer of that film is oil.'

/**
 * Chosen from four options on 2026-09-16, and the reason is worth keeping.
 *
 * It is the only phrasing that does not sound faintly apologetic: it puts the
 * limitation on the tool rather than on the person. That matters beyond this
 * one screen — a questionnaire that is candid about what it cannot see is the
 * reason anyone believes the evaporation result when it does appear.
 *
 * Previously: "Your answers don't point clearly in one direction. That is
 * common, and it is one of the reasons an eye exam is more useful than a
 * questionnaire."
 */
export const PATTERN_UNCLEAR =
  'Your answers don’t form a clear pattern. Nine questions can only see so much — an eye exam sees the part this one can’t.'

export const SAFETY_TITLE = 'See an eye care professional'

export const SAFETY_BODY =
  'Eye pain, changes in vision, symptoms lasting more than 72 hours, or redness that will not settle should be looked at by a doctor rather than managed at home. We have not scored your answers.'

export const SAFETY_NOTE =
  'These can be signs of something that needs looking at today rather than managing at home. If any apply, we will skip the score and say so.'

export const DISCLAIMER =
  'This is a symptom questionnaire, not a diagnosis. If symptoms persist, see an eye care professional.'

export type SelfCheckResult =
  | { safety: true }
  | {
      safety: false
      score: number
      band: Band
      evaporative: boolean
      pattern: string
    }

/**
 * Scores a set of answers keyed by question id.
 *
 * Tolerant of missing and unexpected answers by design: this runs on input
 * that arrived over the wire, and a malformed submission should cost the
 * answer rather than throwing on a page someone is looking at.
 */
export function score(answers: Record<string, unknown>): SelfCheckResult {
  // Checked first and on its own. Nothing below it runs for someone who
  // reported pain or a change in vision.
  if (answers.safety === 'flag') return { safety: true }

  const scored: number[] = []
  let markers = 0

  for (const question of QUESTIONS) {
    if (question.unscored || question.safety) continue
    const value = answers[question.id]
    if (typeof value !== 'number' || !Number.isFinite(value)) continue
    const clamped = Math.min(Math.max(Math.round(value), 0), 3)
    scored.push(clamped)
    if (question.evaporative && clamped >= 2) markers++
  }

  if (LATE_DAY.includes(String(answers.timing))) markers++

  // Scaled to a 21-point maximum so skipping the drops question does not
  // deflate the score relative to someone who answered it.
  const raw = scored.reduce((a, b) => a + b, 0)
  const total = scored.length
    ? Math.round((raw / (scored.length * 3)) * MAX_SCORE)
    : 0

  const band = BANDS.find((b) => total <= b.max) ?? BANDS[BANDS.length - 1]
  const evaporative = markers >= PATTERN_THRESHOLD

  return {
    safety: false,
    score: total,
    band,
    evaporative,
    pattern: evaporative ? PATTERN_EVAPORATIVE : PATTERN_UNCLEAR,
  }
}

/**
 * The invitation shown on the homepage hero.
 *
 * Kept here rather than in the Hero component so it sits with the copy Dr.
 * Rynerson approved. It describes a symptom questionnaire on a page selling an
 * FDA-regulated drug, so the next person to review the self-check should find
 * this in the same file rather than discovering it in a layout six months
 * later.
 *
 * The wording is deliberately the same promise the page itself makes. Two
 * things it is careful not to do:
 *
 *  - **It does not say drops stop working.** That reads as disparagement of
 *    every other product on the shelf, and it is a comparative claim nobody
 *    has substantiated. The hook is curiosity about yourself, not doubt about
 *    a competitor.
 *  - **It offers a score, not an answer.** "Find out what's wrong with your
 *    eyes" would be promising a diagnosis in the one place on the site with
 *    the most traffic.
 */
export const HERO_INVITE = {
  /**
   * Says what the block *is*, and nothing else.
   *
   * Two rejected alternatives, both for reasons worth keeping:
   *
   * **"Free self-check"** — it costs an email address, and calling that free is
   * the small untrue thing that makes a reader doubt the larger claims beside
   * it.
   *
   * **"90-second self-check"** — a specific number beats a vague adjective like
   * "quick", which is unfalsifiable and which everyone claims. But the body
   * already says "about ninety seconds" one line below, so in the eyebrow it
   * was the same fact twice in two lines. The number stays where it does the
   * most work: next to the ask.
   */
  eyebrow: 'Dry eye self-check',
  heading: 'What are your eyes telling you?',
  body: 'Eight questions, about ninety seconds. You’ll get a symptom score and find out whether your answers fit the pattern of a tear film that evaporates too quickly.',
  cta: 'Take the self-check',
} as const
