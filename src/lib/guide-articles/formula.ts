import type { Guide } from '@/lib/guide-types'

/**
 * The formula, the ingredients and the brand. See `lib/guides.ts`.
 *
 * Ingredient descriptions here are limited to what the label states (name,
 * strength, purpose) and to the science copy already on the home and About
 * pages. Nothing says what an inactive ingredient does in the formula beyond
 * that copy, because no such statement has been approved.
 */
export const FORMULA_GUIDES: Guide[] = [
  {
    slug: 'emu-oil-in-eye-drops',
    title: 'Emu oil in eye drops',
    description:
      'Why Quell contains emu oil, what the carton says about it, and the egg and bird allergy caution that comes with it.',
    category: 'formula',
    body: [
      { p: `{emuOil}` },
      {
        p: `Those are the carton’s own words, and they explain why emu oil is in Quell. The formula is built around the tear film’s oil layer, and emu oil is one of the natural ingredients chosen to support it.`,
      },
      { h: 'Where it sits on the label' },
      {
        p: `Emu oil is an inactive ingredient, listed with the others on the [Drug Facts](/drug-facts) page. The active ingredients are {actives}.`,
      },
      { h: 'The allergy caution' },
      {
        p: `Because emu oil comes from a bird, the label’s warnings open with: {warnings}. If that applies to you, ask your doctor before using Quell.`,
      },
      { h: 'The bird on the box' },
      {
        p: `Emu oil is also where the slogan comes from: give your dry eye the bird. [The slogan, explained](/guides/give-your-dry-eye-the-bird) has the rest.`,
      },
      { h: 'Its part in the color' },
      {
        p: `Emu oil is one of the natural oil-based ingredients behind Quell’s milky brown look. {appearance}`,
      },
    ],
  },

  {
    slug: 'natural-ingredients-in-quell',
    title: 'The natural ingredients in Quell',
    description:
      'Emu oil, manuka honey, Dead Sea salt and Terminalia chebula sit alongside the lubricants in Quell. Where they appear on the label, and why.',
    category: 'formula',
    body: [
      {
        p: `Quell’s carton lists Natural Ingredients among its front-panel claims, and the About page names them: emu oil, manuka honey, Dead Sea salt and Terminalia chebula sit alongside the lubricants in the inactive ingredient list.`,
      },
      { h: 'Where they appear' },
      {
        p: `All four are inactive ingredients. The actives, which give the drop its lubricating purpose, are {actives}. The full inactive list reads: {inactives}.`,
      },
      { h: 'What the formula is designed to do' },
      {
        p: `Rich in bioactive fatty acids and botanical antioxidants, the formula supports a more stable tear film. These natural compounds are known for their calming and soothing properties.`,
      },
      { h: 'Natural isn’t the same as suitable for everyone' },
      {
        p: `Emu oil is the reason for the label’s caution: {warnings}. If you have other allergies, check the full list with a doctor or pharmacist before ordering.`,
      },
      { h: 'The color' },
      {
        p: `These ingredients account for much of the drop’s milky brown color. [Why Quell is milky brown](/guides/why-is-quell-milky-brown) explains.`,
      },
    ],
  },

  {
    slug: 'glycerol-in-eye-drops',
    title: 'Glycerol in eye drops',
    description:
      'Glycerol, also called glycerin, is one of Quell’s two lubricant active ingredients. What the label says about it, and how to read its strength.',
    category: 'formula',
    body: [
      {
        p: `Glycerol is one of Quell’s three active ingredients, listed on the Drug Facts panel as {glycerol}, with the purpose “lubricant.”`,
      },
      { h: 'Glycerol or glycerin?' },
      {
        p: `They are the same substance. Labels use either name, so if you are comparing drops or checking an allergy list, search for both. Quell’s carton uses “glycerol.”`,
      },
      { h: 'A familiar ingredient' },
      {
        p: `Glycerin appears in many artificial tears, which is why you will find it on the panels of several brands. What tends to differ between them is the concentration and everything else in the bottle.`,
      },
      { h: 'Its job on this label' },
      {
        p: `“Lubricant” is the label’s word for its purpose. With polysorbate 80, it is what makes Quell a lubricating eye drop, in service of the Uses section: {uses}.`,
      },
      { h: 'Reading the strength' },
      {
        p: `The percentage is its concentration in the solution. [What the percentages mean](/guides/what-the-percentages-on-the-label-mean) explains why that number compares only like with like.`,
      },
      { h: 'The other actives' },
      {
        p: `[Polysorbate 80](/guides/polysorbate-80-in-eye-drops) is the second lubricant, and [light mineral oil](/guides/light-mineral-oil-in-eye-drops) is the emollient. All three are set out on the [Drug Facts](/drug-facts) page.`,
      },
    ],
  },

  {
    slug: 'polysorbate-80-in-eye-drops',
    title: 'Polysorbate 80 in eye drops',
    description:
      'Polysorbate 80 is one of Quell’s two lubricant active ingredients. What the label says about it, and where it sits among the other actives.',
    category: 'formula',
    body: [
      {
        p: `Polysorbate 80 is one of Quell’s active ingredients, listed on the Drug Facts panel as {polysorbate}, with the purpose “lubricant.”`,
      },
      { h: 'Its role on the label' },
      {
        p: `Alongside glycerol, it is one of the two lubricants that make Quell a lubricating eye drop. The third active, light mineral oil, is listed as an emollient.`,
      },
      { h: 'An oil-and-water formula' },
      {
        p: `Quell combines watery and oily ingredients, which is part of why the solution is milky. Polysorbate 80 is widely used in products that bring oil and water together.`,
      },
      {
        p: `That combination is deliberate. The formula is designed to reinforce the tear film’s oil layer, not only its watery one, so it needs ingredients from both sides. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains why.`,
      },
      { h: 'Reading the label' },
      {
        p: `The percentage is its concentration in the solution. Compare it only with the same ingredient in another product. See [the active ingredients section](/guides/the-active-ingredients-section).`,
      },
      { h: 'Allergies' },
      {
        p: `If you have reacted to polysorbates before, mention it to your doctor or pharmacist before using Quell, together with the label’s own caution: {warnings}.`,
      },
    ],
  },

  {
    slug: 'light-mineral-oil-in-eye-drops',
    title: 'Light mineral oil in eye drops',
    description:
      'Light mineral oil is the emollient among Quell’s active ingredients. What emollient means on a label, and how it fits the oil-layer design.',
    category: 'formula',
    body: [
      {
        p: `Light mineral oil is the third of Quell’s active ingredients, listed as {mineralOil}, with the purpose “emollient.”`,
      },
      { h: 'What emollient means' },
      {
        p: `An emollient is an oily ingredient that softens and coats. On Quell’s label it sits beside two lubricants, glycerol and polysorbate 80, which makes it the only oil among the actives.`,
      },
      { h: 'Light, as in the grade' },
      {
        p: `“Light” describes the grade of mineral oil, not a reduced amount. The amount is the percentage printed beside the name. If you are checking it against another product, look for “light mineral oil” or “mineral oil” on that product’s panel.`,
      },
      { h: 'Why an oil' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer, the outermost barrier responsible for minimizing evaporation of the watery layer beneath. An oil-based active fits that design. More in [the tear film’s oil layer](/guides/the-tear-films-oil-layer).`,
      },
      { h: 'Its part in the appearance' },
      {
        p: `Along with the natural oils among the inactive ingredients, it contributes to the drop’s milky look: {milky}.`,
      },
      { h: 'Reading the strength' },
      {
        p: `The percentage is its concentration in the solution; [what the percentages mean](/guides/what-the-percentages-on-the-label-mean) covers how to read it, and what it doesn’t tell you.`,
      },
    ],
  },

  {
    slug: 'what-patented-md-formula-means',
    title: 'What “Patented MD Formula” means',
    description:
      'Quell’s carton says Patented MD Formula. What that tells you about how it was developed, and what to read alongside it.',
    category: 'formula',
    body: [
      {
        p: `Two things: the formula was developed by a physician, and it is patented. Quell’s carton lists “Patented MD Formula” among its front-panel claims, beside Preservative-Free and Natural Ingredients.`,
      },
      { h: 'Developed by an MD' },
      {
        p: `Quell is a patented formula developed by a physician, built around how the tear film actually fails. In practice that means the oil layer, which the formula is designed to reinforce.`,
      },
      { h: 'Patented' },
      {
        p: `A patent protects a specific invention, here the formula. It describes ownership of an idea; it doesn’t measure how a product performs, so read it alongside the label, not instead of it.`,
      },
      { h: 'The other two front-panel claims' },
      {
        p: `Preservative-Free means the formula contains no preservative; [what that means](/guides/what-does-preservative-free-mean) covers it. Natural Ingredients refers to emu oil, manuka honey, Dead Sea salt and Terminalia chebula, which sit among the inactive ingredients.`,
      },
      { h: 'What to read alongside it' },
      {
        p: `The Uses section says what Quell is for: {uses}. The [Drug Facts](/drug-facts) page has the rest of the panel, including the warnings.`,
      },
      { h: 'Who sells it' },
      {
        p: `{company}, of Brentwood, Tennessee. [Who makes Quell](/guides/who-makes-quell) has the details.`,
      },
    ],
  },

  {
    slug: 'benzalkonium-chloride-in-eye-drops',
    title: 'Benzalkonium chloride in eye drops',
    description:
      'Benzalkonium chloride is a common eye drop preservative. Why some people avoid it, how to spot it on a label, and why Quell contains none.',
    category: 'formula',
    body: [
      {
        p: `Benzalkonium chloride is a preservative found in many multi-use eye drops. Quell doesn’t contain it, or any other preservative.`,
      },
      { h: 'Why it comes up' },
      {
        p: `Preservatives such as benzalkonium chloride are a common source of irritation for people using drops several times a day. People who use drops on a schedule often look for it on labels for exactly that reason.`,
      },
      { h: 'How to spot it' },
      {
        p: `Look in the Inactive ingredients section of the Drug Facts panel. It is sometimes abbreviated to BAK or BAC. Because inactive ingredients are listed alphabetically, it usually sits near the top of the list when it is there.`,
      },
      { h: 'Quell’s inactive list' },
      {
        p: `{inactives}. Benzalkonium chloride isn’t among them, and the carton states Preservative-Free.`,
      },
      { h: 'If you use drops often' },
      {
        p: `Quell’s directions call for daily use: {directions}. At that frequency the inactive list matters more than it would for an occasional drop.`,
      },
      {
        p: `[What preservative-free means](/guides/what-does-preservative-free-mean) covers the rest of the picture.`,
      },
    ],
  },

  {
    slug: 'give-your-dry-eye-the-bird',
    title: '“Give your dry eye the bird,” explained',
    description:
      'Quell’s slogan comes from emu oil, one of its natural ingredients. The story behind it, and the allergy caution the same ingredient brings.',
    category: 'formula',
    body: [
      {
        p: `It is a pun on emu oil. Quell contains emu oil, the emu is a bird, and so the slogan on the carton and in this site’s footer reads: give your dry eye the bird!`,
      },
      { h: 'Where emu oil comes in' },
      {
        p: `The About page makes the connection directly: emu oil is also where the name of the slogan comes from. The carton describes it as an all natural oil with a long history of use by the Aboriginal people of Australia, and credits it with soothing support of the tear film’s oil layer. [Emu oil in eye drops](/guides/emu-oil-in-eye-drops) has its full description.`,
      },
      { h: 'The serious part' },
      {
        p: `The same ingredient is why the label opens its warnings with: {warnings}. If you have an egg or bird allergy, read [the allergy guide](/guides/egg-or-bird-allergy-and-quell) before ordering.`,
      },
      { h: 'The rest of the branding' },
      {
        p: `Quell’s tagline is “Quiet the Storm.” [Why it is called Quell](/guides/why-it-is-called-quell) covers that one, and the name.`,
      },
      { h: 'Behind the joke' },
      {
        p: `The slogan is light; the formula behind it is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and emu oil is part of that design.`,
      },
    ],
  },

  {
    slug: 'who-makes-quell',
    title: 'Who makes Quell?',
    description:
      'Quell is sold by Aurora Pharmaceuticals, LLC and made by Aurora Pharmaceuticals, Inc, both of Brentwood, Tennessee. How to reach them.',
    category: 'formula',
    body: [
      {
        p: `Quell is sold by {company} of Brentwood, Tennessee, which owns the Quell trademark. The bottle names its manufacturer as Aurora Pharmaceuticals, Inc, also of Brentwood.`,
      },
      {
        p: `The seller is the company you deal with: it runs this site, takes the payment, ships the order and answers the phone. The manufacturer is named on the bottle because drug labels identify who made the product.`,
      },
      { h: 'How to reach them' },
      {
        list: [
          'Phone: {phone}, {hours}.',
          'Mail: {address}.',
          'Online: meibum.com.',
        ],
      },
      { h: 'The formula' },
      {
        p: `Quell is a patented formula developed by a physician. [What “Patented MD Formula” means](/guides/what-patented-md-formula-means) explains both halves of that phrase.`,
      },
      { h: 'This site' },
      {
        p: `quelldrop.com is operated by {company}. [Is quelldrop.com the official site?](/guides/is-quelldrop-the-official-quell-site) covers how to check.`,
      },
      { h: 'Where orders come from' },
      {
        p: `Orders are packed and shipped from Brentwood to anywhere in the United States. Shipping is {shipping} below {freeBottles} bottles and free from {freeBottles} up.`,
      },
      { h: 'What the company can’t do' },
      {
        p: `Give medical advice. The phone line handles questions about orders and about what is on the label; questions about your eyes belong with your doctor.`,
      },
    ],
  },

  {
    slug: 'is-quell-vegan',
    title: 'Is Quell vegan?',
    description:
      'No. Quell contains emu oil and manuka honey, both animal products. The full ingredient list, and the allergy caution that goes with it.',
    category: 'formula',
    body: [
      {
        p: `No. Two of Quell’s inactive ingredients come from animals: emu oil, from the emu, and manuka honey, which is made by bees.`,
      },
      { h: 'The full inactive list' },
      { p: `As printed on the carton: {inactives}.` },
      { h: 'Why emu oil is in it' },
      {
        p: `It is central to the formula, not an incidental extra. Quell is built around the tear film’s oil layer, and emu oil is one of the natural ingredients chosen for that job. [Emu oil in eye drops](/guides/emu-oil-in-eye-drops) quotes the carton in full.`,
      },
      { h: 'The allergy caution' },
      {
        p: `Because of the emu oil, the label’s warnings begin: {warnings}.`,
      },
      { h: 'If you avoid animal ingredients' },
      {
        p: `Quell isn’t the drop for you, because the emu oil is part of its design. A pharmacist can help you find one that suits. The complete panel is on the [Drug Facts](/drug-facts) page if you want to check anything else.`,
      },
    ],
  },

  {
    slug: 'what-is-meibum',
    title: 'What is meibum?',
    description:
      'Meibum is the oil that forms the outer layer of your tear film. Where it comes from, what it does, and how it relates to Quell’s design.',
    category: 'formula',
    body: [
      {
        p: `Meibum is the oily substance that forms the outermost layer of the tear film. It is made by small glands along the edges of the eyelids, called meibomian glands.`,
      },
      { h: 'What it does' },
      {
        p: `The oil layer is the outermost barrier of the tear film, responsible for minimizing evaporation of the watery layer beneath it. Without enough of it, the watery layer is more exposed, and everyday conditions like screens and dry air add to that.`,
      },
      { h: 'When the layer is thin' },
      {
        p: `Quell’s carton illustrates it with a before and after. Before: {oilBefore}. After: {oilAfter}.`,
      },
      { h: 'How Quell relates' },
      {
        p: `The formula is designed to reinforce the eye’s natural lipid (oil) layer, with emu oil and light mineral oil among its ingredients. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) goes into more depth.`,
      },
      { h: 'Finding out more' },
      {
        p: `Quell’s maker is online at meibum.com. If you want to know whether your symptoms fit the pattern of a tear film that evaporates too quickly, the [self-check](/self-check) takes about ninety seconds.`,
      },
    ],
  },

  {
    slug: 'what-customers-say-about-quell',
    title: 'What customers say about how Quell feels',
    description:
      'What people who bought Quell said about how it feels and fits into their day, with names changed for privacy and nothing else edited.',
    category: 'formula',
    body: [
      {
        p: `The customers quoted on the [reviews](/reviews) page talk mostly about how the drops feel: soothing, comfortable, not heavy or sticky, and easy to fit into a routine.`,
      },
      { h: 'In their words' },
      {
        list: [
          '“These drops feel soothing and comfortable.” — Ming',
          '“They’re easy to use and don’t leave a heavy or sticky feeling behind.” — Raj',
          '“The drops are simple to use and fit easily into my daily routine.” — William',
        ],
      },
      { h: 'About these reviews' },
      {
        p: `They come from people who bought Quell and agreed to let their words be published. The names were changed for privacy, and that is the only change. The quotes above are excerpts; the reviews page shows each one in full.`,
      },
      { h: 'What a review isn’t' },
      {
        p: `A customer’s experience is their own. What Quell is for is set out in its Uses section — {uses} — and that, with the warnings, is what to read before deciding.`,
      },
      { h: 'Reading them all' },
      {
        p: `The full set is on the [reviews](/reviews) page, alongside the note on how they were collected.`,
      },
    ],
  },

  {
    slug: 'what-size-is-a-bottle-of-quell',
    title: 'What size is a bottle of Quell?',
    description:
      'Quell comes in one size, a {size} bottle. What that holds at the labeled dose, and why there is no separate trial size.',
    category: 'formula',
    body: [
      {
        p: `One size: {size}. It is the only bottle Quell comes in, so the one you buy first is the same one you would buy again. There is one price for it, too.`,
      },
      { h: 'Is there a trial size?' },
      {
        p: `No. If you want to try Quell before committing to more, order a single bottle; the buy panel defaults to two, but one is always available. See [ordering a single bottle](/guides/ordering-a-single-bottle).`,
      },
      { h: 'How long it lasts' },
      {
        p: `Used as directed, roughly a month, depending on drop size. [How long a bottle lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) works through the arithmetic.`,
      },
      { h: 'Two units on the carton' },
      {
        p: `The carton gives the size in both fluid ounces and milliliters, so you can compare it with whichever unit another product uses. When comparing prices, divide by milliliters, not by bottles, because bottle sizes differ from brand to brand.`,
      },
      { h: 'Buying more than one' },
      {
        p: `Orders of {freeBottles} bottles or more ship free, and below that shipping is a flat {shipping}. Spare bottles keep in the same conditions as the one in use: {storage}.`,
      },
    ],
  },

  {
    slug: 'fatty-acids-and-antioxidants-in-quell',
    title: 'Fatty acids and antioxidants in Quell',
    description:
      'Quell’s formula is described as rich in bioactive fatty acids and botanical antioxidants. What that refers to, and what the label itself says.',
    category: 'formula',
    body: [
      {
        p: `Quell’s science copy describes the formula as rich in bioactive fatty acids and botanical antioxidants, which support a more stable tear film. The description refers to its natural ingredients.`,
      },
      { h: 'Where they come from' },
      {
        p: `The inactive ingredients include emu oil, manuka honey, Dead Sea salt and Terminalia chebula. Emu oil is the oil among them, and Terminalia chebula is the plant.`,
      },
      { h: 'Their place in the design' },
      {
        p: `The formula is designed to reinforce the eye’s natural lipid layer. These natural compounds are known for their calming and soothing properties, offering a new approach to daily eye comfort and hydration.`,
      },
      { h: 'The label’s version' },
      {
        p: `The Drug Facts panel doesn’t use these words. It lists the ingredients and states the use: {uses}. The science copy explains the reasoning behind the formula; the panel says what the product is for.`,
      },
      { h: 'Allergy' },
      {
        p: `{warnings}. [The inactive ingredients](/guides/the-inactive-ingredients-section) has the full list.`,
      },
    ],
  },

  {
    slug: 'why-it-is-called-quell',
    title: 'Why is it called Quell?',
    description:
      'To quell is to quiet or calm, which is where the tagline “Quiet the Storm” comes from. The name, the tagline and the slogan, explained.',
    category: 'formula',
    body: [
      {
        p: `To quell something is to quiet it or bring it under control. The tagline on the carton makes the same point in three words: Quiet the Storm. It is a short, everyday English word, which also makes it easy to say and to search for.`,
      },
      { h: 'The tagline and the slogan' },
      {
        p: `Quiet the Storm is the tagline. The slogan, give your dry eye the bird, comes from emu oil, one of the formula’s natural ingredients. [The slogan, explained](/guides/give-your-dry-eye-the-bird) tells that story.`,
      },
      { h: 'The full name' },
      {
        p: `{brand} Preservative-Free Lubricating Eye Drops, {size}. Each part of that name says something true about the product: what it is, what it leaves out, and how much is in the bottle.`,
      },
      { h: 'Who owns the name' },
      {
        p: `Quell, Quiet the Storm and the eye mark belong to {company}, as the [terms](/terms) set out.`,
      },
      { h: 'What the name doesn’t tell you' },
      {
        p: `A name is a name. What the product is actually for is in the Uses section of the Drug Facts panel: {uses}.`,
      },
    ],
  },
]
