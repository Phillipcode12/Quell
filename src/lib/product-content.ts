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
 * Brand owner. BlephEx owns the Quell trademark and sells the product; the
 * contact number is the one printed on the carton.
 */
export const COMPANY = {
  name: 'BlephEx®, LLC',
  /** Without the ® symbol, for running text and legal clauses. */
  legalName: 'BlephEx, LLC',
  addressLines: ['500 Wilson Pike Circle, Suite 103', 'Brentwood, TN 37027'],
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

/** "Relieves" list from the front of the carton. */
export const RELIEVES = [
  'Dryness',
  'Irritation',
  'Redness',
  'Itching',
] as const

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
