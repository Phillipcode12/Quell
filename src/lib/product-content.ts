/**
 * Single source of truth for Quell label and marketing copy.
 *
 * Everything here is transcribed from the printed carton, bottle, and the
 * brand info cards. If the packaging changes, change it here — the whole site
 * reads from this file.
 *
 * Regulatory note: the Drug Facts block below is the OTC panel as printed.
 * Do not edit `drugFacts` for marketing reasons; it has to match the carton.
 */

export const BRAND = {
  name: 'Quell',
  trademark: 'Quell™',
  tagline: 'Quiet the Storm',
  slogan: 'Give your dry eye the bird!',
  productType: 'Preservative-Free Lubricating Eye Drops',
  size: '.33 fl oz (10 mL)',
} as const

/**
 * Brand owner — the entity that sells Quell and owns the trademark.
 *
 * The address is Aurora's own. The phone is shared with BlephEx and is the
 * number printed on the carton, which is why it did not change with the rest.
 */
export const COMPANY = {
  name: 'Aurora Pharmaceuticals, LLC',
  /**
   * Kept separate from `name` for running text and legal clauses. Identical
   * today — BlephEx carried a ® that Aurora does not.
   */
  legalName: 'Aurora Pharmaceuticals, LLC',
  addressLines: [
    '330 Franklin Road, Suite 135A, #117',
    'Brentwood, TN 37027, USA',
  ],
  phone: '615.465.6041',
  phoneHref: '+16154656041',
  fax: '800.330.2241',
  hours: 'M–F 9AM–5PM CST',
  website: 'meibum.com',
  websiteHref: 'https://meibum.com',
} as const

/** Who physically makes the product, as printed on the bottle. */
export const MANUFACTURER = {
  name: 'Aurora Pharmaceuticals, Inc',
  addressLines: ['330 Franklin Rd Suite 135A-117', 'Brentwood, TN 37027 USA'],
} as const

/** Front-panel claims, as printed on the carton. */
export const FRONT_PANEL_CLAIMS = [
  'Preservative-Free',
  'Patented MD Formula',
  'Natural Ingredients',
] as const

/**
 * The "Relieves" list shown on the site.
 *
 * Deliberately NOT a straight transcription of the carton's front panel — it
 * lists only what the Drug Facts *Uses* panel below actually supports. See
 * RELIEVES_WITHHELD.
 */
export const RELIEVES = ['Dryness', 'Irritation', 'Itching'] as const

/**
 * Front-panel claims held back from the site pending regulatory confirmation.
 *
 * The carton advertises **redness relief**, and the site did too until
 * 2026-08-20. Two things are wrong with that:
 *
 *  1. `DRUG_FACTS.uses` below does not cover redness. It reads "protectant
 *     against further irritation or to relieve dryness". Redness appears in
 *     this product's labelling only under *stop use and ask a doctor if* —
 *     a caution, which is the opposite of a treatment claim.
 *  2. Relieving redness is a **vasoconstrictor** claim, and there is no
 *     vasoconstrictor in the formula. The actives are glycerol, polysorbate 80
 *     and light mineral oil: two lubricants and an emollient. Nothing in the
 *     bottle acts on redness.
 *
 * FDA expects front-panel claims to be covered by the Uses section, so this is
 * a packaging correction rather than a site edit — but the site is the surface
 * we control, and a merchant-account underwriter or a Meta ad reviewer reading
 * claims the label does not support is an avoidable problem.
 *
 * **To restore, both must be true first:**
 *   1. A regulatory reviewer has confirmed the claim is supportable, and
 *   2. The carton's Drug Facts *Uses* panel covers it.
 *
 * Then move 'Redness' back into RELIEVES above, in third position. Everything
 * on the site derives from that one array, and `relievesProse()` reproduces
 * the original wording exactly — "dryness, irritation, redness, and itching".
 * Nothing else needs editing.
 */
export const RELIEVES_WITHHELD = ['Redness'] as const

/**
 * The "Relieves" list as prose: "dryness, irritation, and itching".
 *
 * Exists so the closing CTA reads as a sentence rather than a list, without
 * keeping a second hand-written copy of the claims that can drift out of step
 * with RELIEVES — which is exactly what had happened before 2026-08-20.
 */
export function relievesProse(): string {
  const items = RELIEVES.map((r) => r.toLowerCase())
  if (items.length <= 1) return items[0] ?? ''
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`
}

/** The OTC Drug Facts panel, transcribed from the back of the carton. */
export const DRUG_FACTS = {
  activeIngredients: [
    { name: 'Glycerol (1.0%)', purpose: 'Lubricant' },
    { name: 'Polysorbate 80 (1.0%)', purpose: 'Lubricant' },
    { name: 'Light Mineral Oil (0.5%)', purpose: 'Emollient' },
  ],
  uses:
    'For use as a protectant against further irritation or to relieve dryness of the eye',
  warnings:
    'Caution should be used in those with egg or bird allergies — For use in the eyes only',
  doNotUse: ['If this product changes color'],
  whenUsing: [
    'Do not touch tip of bottle to any surface to avoid contamination',
  ],
  stopUseAndAskDoctorIf: [
    'You feel eye pain or changes in your vision, continued irritation or redness of the eye',
    'The condition worsens or persists for 72 hours',
  ],
  keepOutOfReach:
    'If swallowed, get medical help or contact a Poison Control Center immediately',
  directions: 'Apply 1 drop 3 times per day in each eye',
  otherInformation: [
    'Product appears as a milky brown solution',
    'Store between 15° to 30°C (59° to 86°F)',
  ],
  inactiveIngredients: [
    'Caprylyl Glycol',
    'Dead Sea Salt (Sodium Chloride)',
    'Emu Oil',
    'Glyceryl Laurate',
    'Glyceryl Undecylenate',
    'Manuka Honey',
    'Polaxamer 188',
    'Sterile Water',
    'Terminalia Chubula',
    'Tromethamine',
  ],
} as const

/**
 * The returns policy in one line, for the point of purchase.
 *
 * The page at /terms is the authoritative text and this is only a summary, so
 * it says less rather than saying it differently: unopened, 30 days. It
 * deliberately omits the refund amount and the damaged-order replacement,
 * because a summary that starts listing exceptions is a policy with two versions.
 */
export const RETURNS_SUMMARY = '30-day returns on unopened bottles'

/**
 * The appearance reassurance shown beside the buy button, written by Phillip.
 *
 * The colour is the most likely "is this spoiled?" support call and return on
 * this product, so it is said plainly at the point of purchase rather than
 * left in the FAQ.
 *
 * It must stay consistent with what the label says — DRUG_FACTS.otherInformation
 * carries "Product appears as a milky brown solution", and the FAQ explains the
 * natural oil-based ingredients behind it. This is a friendlier phrasing of the
 * same fact, not a new claim: if the label wording ever changes, change this
 * too.
 */
export const APPEARANCE_NOTE =
  'The eye drops have a naturally milky-brown appearance. This is normal and does not indicate a problem with the product.'

/** Emu oil panel, transcribed from the side of the carton. */
export const EMU_OIL = {
  body: 'Emu oil is an all natural oil used by the Aboriginal people of Australia for thousands of years to nourish and protect the body. In artificial tears, it provides soothing support of the tear film’s oil layer to reduce moisture loss.',
  before:
    'Water (Aqueous) Layer evaporates due to thin, unhealthy oil (Meibum) layer',
  after:
    'Quell reinforces the tear film’s oil layer to help reduce moisture loss',
} as const

/** Science copy from the brand info card. */
export const SCIENCE = [
  {
    title: 'Reinforces the lipid layer',
    body: 'This ophthalmic formula is designed to reinforce the eye’s natural lipid (oil) layer — the outermost barrier of the tear film responsible for minimizing evaporation of the aqueous layer.',
  },
  {
    title: 'Supports a stable tear film',
    body: 'Rich in bioactive fatty acids and botanical antioxidants, it supports a more stable tear film and helps maintain long-lasting ocular surface hydration.',
  },
  {
    title: 'Calming and soothing',
    body: 'These natural compounds are known for their calming and soothing properties, offering a new approach to daily eye comfort and hydration.',
  },
] as const

export const FAQS = [
  {
    q: 'Do I need a prescription for Quell?',
    a: 'No. Quell is an over-the-counter lubricating eye drop. You can buy it without a prescription.',
  },
  {
    q: 'How often do I use it?',
    a: 'Apply 1 drop 3 times per day in each eye, as printed on the carton.',
  },
  {
    q: 'Why is the solution a milky brown color?',
    a: 'That is expected. Quell appears as a milky brown solution because of its natural oil-based ingredients. Do not use the product if the color changes from how it arrived.',
  },
  {
    q: 'What makes it preservative-free?',
    a: 'Quell contains no preservatives. Preservatives such as benzalkonium chloride are a common source of irritation for people using drops several times a day.',
  },
  {
    q: 'Is there anyone who should not use Quell?',
    a: 'Caution should be used in those with egg or bird allergies, because the formula contains emu oil. Quell is for use in the eyes only. Keep out of reach of children.',
  },
  {
    q: 'When should I stop and call a doctor?',
    a: 'Stop use and ask a doctor if you feel eye pain or changes in your vision, if irritation or redness continues, or if the condition worsens or persists for 72 hours.',
  },
  {
    q: 'How should I store it?',
    a: 'Store between 15° and 30°C (59° to 86°F). Do not touch the tip of the bottle to any surface, which avoids contaminating the solution.',
  },
] as const

/**
 * Customer testimonials.
 *
 * **Every word here is a claim Quell is making about its own product**, in the
 * customer's voice rather than ours. Quoting someone does not move the
 * responsibility to them: it appears on our site, so it is ours. This is the
 * same discipline as RELIEVES_WITHHELD, and it is why these live beside the
 * label copy rather than inside a component.
 *
 * Supplied by Phillip on 2026-09-03. **Permission was given and the names are
 * aliases** — the site says so, because a pseudonym presented as a real name is
 * the kind of small dishonesty that undermines everything around it.
 *
 * ### The rule for adding one
 *
 * The test is not "did they say it" but **"does the label support it"**. A
 * genuine quotation of an unsupported claim is still an unsupported claim.
 *
 * Safe: how it feels, how it handles, whether they liked it. Sensory and
 * experiential language claims nothing a reviewer can demand evidence for.
 *
 * Not safe, and all three have already been seen in submissions:
 *
 *  - **A condition or outcome** the Uses panel does not cover. `DRUG_FACTS.uses`
 *    is "a protectant against further irritation or to relieve dryness of the
 *    eye" — and redness is withheld entirely (RELIEVES_WITHHELD).
 *  - **Comparative superiority.** "Best drops I've ever used" is a claim about
 *    every other product on the shelf. The same shape of sentence is what the
 *    FDA cited on centersfordryeye.com.
 *  - **Duration of action.** "They last all day" was submitted and held back:
 *    it contradicts `DRUG_FACTS.directions`, which says one drop three times a
 *    day. A claim the site's own Drug Facts panel disproves is the worst kind,
 *    because the contradiction is on the same website.
 *
 * `product-content.test.ts` enforces the first two mechanically. The third
 * needs a human, which is why nothing here ships without Michael.
 */
export const TESTIMONIALS = [
  {
    name: 'Ming',
    quote:
      'These drops feel soothing and comfortable, and I really like how my eyes feel after using them. I’ve been very happy with Quell.',
    avatar: { skin: 'tan', hair: 'black', style: 'bob' },
  },
  {
    name: 'Raj',
    quote:
      'I really like the feel of these drops. They’re easy to use and don’t leave a heavy or sticky feeling behind.',
    avatar: { skin: 'brown', hair: 'black', style: 'short', beard: true },
  },
  {
    name: 'Susan',
    quote: 'Feels good, provides relief, love the Quell drops, reasonably priced.',
    avatar: { skin: 'light', hair: 'blonde', style: 'long' },
  },
  {
    name: 'William',
    quote:
      'I’ve really enjoyed using Quell. The drops are simple to use and fit easily into my daily routine.',
    avatar: { skin: 'light', hair: 'brown', style: 'short' },
  },
  {
    name: 'Marcus',
    quote: 'Great eye drops. I love the Quell drops!',
    avatar: { skin: 'deep', hair: 'black', style: 'buzz' },
  },
] as const

/**
 * Shown under the testimonials.
 *
 * The names are aliases, and saying so costs nothing while a pseudonym passed
 * off as a real name would be exactly the kind of small dishonesty this site
 * has otherwise been careful to avoid.
 */
export const TESTIMONIALS_NOTE =
  'Real customers, quoted with permission. Names have been changed for privacy.'
