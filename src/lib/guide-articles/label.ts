import type { Guide } from '@/lib/guide-types'

/**
 * The Drug Facts panel, a section at a time. See `lib/guides.ts`.
 *
 * Label wording is quoted through tokens only. Where a guide discusses the
 * stop-use warning it quotes `{stopUse}` whole rather than restating its
 * parts, so the panel is never paraphrased into something it does not say —
 * and so a list of its parts can never silently drop one.
 */
export const LABEL_GUIDES: Guide[] = [
  {
    slug: 'the-active-ingredients-section',
    title: 'The active ingredients on an eye drop label',
    description:
      'What the Active ingredients section of a Drug Facts panel tells you, with Quell’s three actives, their strengths and their purposes.',
    category: 'label',
    body: [
      {
        p: `Active ingredients is the first section of every Drug Facts panel. It names the ingredients that do the drug’s job, gives each one’s strength, and states its purpose in a word or two.`,
      },
      { h: 'Quell’s three' },
      {
        list: ['{glycerol}: lubricant', '{polysorbate}: lubricant', '{mineralOil}: emollient'],
      },
      { h: 'Reading the purpose' },
      {
        p: `“Lubricant” and “emollient” are the label’s own summaries. Lubricants are what make a drop a lubricating eye drop. An emollient is an oily ingredient that softens and coats. Quell has two of the first and one of the second, and the emollient is the oil-based one, which fits a formula designed around the tear film’s oil layer.`,
      },
      { h: 'Reading the strength' },
      {
        p: `The percentage beside each name is its concentration in the solution. [What the percentages mean](/guides/what-the-percentages-on-the-label-mean) explains how to read them, and why they are hard to compare across brands.`,
      },
      { h: 'Active versus inactive' },
      {
        p: `Everything else in the bottle is listed further down, under Inactive ingredients. Inactive does not mean unimportant: Quell’s emu oil is an inactive ingredient, and it is the reason for the label’s allergy caution.`,
      },
      { h: 'Each one in more detail' },
      {
        p: `[Glycerol](/guides/glycerol-in-eye-drops), [polysorbate 80](/guides/polysorbate-80-in-eye-drops) and [light mineral oil](/guides/light-mineral-oil-in-eye-drops) each have a guide of their own.`,
      },
    ],
  },

  {
    slug: 'the-inactive-ingredients-section',
    title: 'The inactive ingredients on an eye drop label',
    description:
      'What the Inactive ingredients section lists, why it matters if you have allergies, and the full list from Quell’s Drug Facts panel.',
    category: 'label',
    body: [
      {
        p: `The Inactive ingredients section lists everything in the bottle apart from the actives, in alphabetical order. Quell’s has {inactiveCount} entries: {inactives}.`,
      },
      { h: 'Why it is worth reading' },
      {
        p: `Allergies, mainly. If you react to a particular ingredient, this is where it would appear. Quell’s warnings call out one case directly — {warnings} — and the emu oil behind that caution is on this list.`,
      },
      { h: 'The natural ones' },
      {
        p: `Several of the inactives are natural: emu oil, manuka honey, Dead Sea salt and Terminalia chebula sit alongside the lubricants. [Natural ingredients in Quell](/guides/natural-ingredients-in-quell) covers them.`,
      },
      { h: 'No preservative' },
      {
        p: `Quell is preservative-free, as the front of the carton says. If you want a second opinion on any ingredient, a pharmacist can go through the list with you.`,
      },
      { h: 'Check before you buy' },
      {
        p: `If any ingredient gives you pause, take the list to your doctor or pharmacist before ordering rather than after. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
  },

  {
    slug: 'the-uses-section',
    title: 'The Uses section on an eye drop label',
    description:
      'The Uses section says what an over-the-counter eye drop is for, in its maker’s approved words. What Quell’s says, and how to read it.',
    category: 'label',
    body: [
      {
        p: `Uses is the section of the Drug Facts panel that says what the product is for. On an over-the-counter drug it is the authoritative statement, and claims made about the product anywhere else should not go beyond it.`,
      },
      { h: 'Quell’s' },
      { p: `{uses}.` },
      { h: 'Two halves' },
      {
        p: `It has two parts. “A protectant against further irritation” is about protecting an eye that is already irritated. “To relieve dryness of the eye” is about relief. On this site, the two are summarized as relief for dryness, irritation and itching.`,
      },
      { h: 'What it does not say' },
      {
        p: `The Uses section names nothing beyond those words, and nothing on this site should be read as claiming more. If your symptoms are something else, or you are not sure what they are, see an eye doctor.`,
      },
      { h: 'Why it matters online' },
      {
        p: `Online listings can say anything. The Uses section is the part you can hold a product to. Quell’s is printed on the carton and reproduced word for word on the [Drug Facts](/drug-facts) page, and [how to read a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) covers the rest of the panel.`,
      },
    ],
  },

  {
    slug: 'the-warnings-section',
    title: 'The warnings on an eye drop label',
    description:
      'How the Warnings section of an eye drop’s Drug Facts panel is organized, with each part of Quell’s warnings set out in turn.',
    category: 'label',
    body: [
      {
        p: `The warnings are the longest part of most Drug Facts panels, and they are split into labeled parts so you can find the one you need. Here is Quell’s, part by part.`,
      },
      { h: 'The general caution' },
      { p: `{warnings}. It applies to everyone, so read it before the first bottle.` },
      { h: 'Do not use' },
      {
        p: `{doNotUse}. The drop is milky brown when it is right, so this is about a change from that.`,
      },
      { h: 'When using this product' },
      { p: `{tip}.` },
      { h: 'Stop use and ask a doctor if' },
      { p: `{stopUse}` },
      { h: 'Keep out of reach of children' },
      { p: `{swallowed}.` },
      { h: 'Why they come in this order' },
      {
        p: `Each part answers a different question: who should be careful, when not to use the product at all, how to handle it, when to stop, and what to do after an accident. There is more on each in [the allergy caution](/guides/egg-or-bird-allergy-and-quell), [color changes](/guides/do-not-use-if-the-color-changes), [the bottle tip](/guides/do-not-touch-the-tip), [when to stop](/guides/when-to-stop-using-eye-drops) and [children](/guides/keep-out-of-reach-of-children).`,
      },
    ],
  },

  {
    slug: 'egg-or-bird-allergy-and-quell',
    title: 'Egg or bird allergy? Read this before Quell',
    description:
      'Quell’s label cautions people with egg or bird allergies, because the formula contains emu oil. What that means for you, and who to ask.',
    category: 'label',
    body: [
      {
        p: `Quell’s warnings open with this: {warnings}. If you have an egg or bird allergy, that sentence is written for you.`,
      },
      { h: 'Why the caution is there' },
      {
        p: `The formula contains emu oil, an inactive ingredient that comes from the emu, a bird. The caution is about that ingredient. The FAQ on the home page says the same thing in its own words.`,
      },
      { h: 'What to do' },
      {
        p: `Ask your doctor or allergist before using it, and bring the ingredient list. Here it is in full, as printed on the carton: {inactives}.`,
      },
      { h: 'Buying for someone else' },
      {
        p: `Check with them first; an allergy is easy to miss when you are ordering on someone else’s behalf. [Ordering for someone else](/guides/ordering-eye-drops-for-someone-else) has more.`,
      },
      { h: 'If you react' },
      { p: `{stopUse}` },
      {
        p: `Every ingredient, active and inactive, is set out on the [Drug Facts](/drug-facts) page to show your doctor.`,
      },
    ],
  },

  {
    slug: 'do-not-use-if-the-color-changes',
    title: 'What “do not use if it changes color” means',
    description:
      'Quell is milky brown when it is right. What the label’s color warning asks you to watch for, and what to do if a bottle changes.',
    category: 'label',
    body: [
      {
        p: `The label’s Do not use line reads: {doNotUse}. It asks you to notice a change, not to judge the color on its own.`,
      },
      { h: 'The starting point' },
      {
        p: `{milky}. That is how it is meant to look, because of the natural oil-based ingredients. {appearance}`,
      },
      { h: 'What counts as a change' },
      {
        p: `A bottle that no longer looks the way it did when it arrived. The FAQ puts it plainly: do not use the product if the color changes from how it arrived. It helps to take a good look at a new bottle the first time you open it, so you have something to compare against later.`,
      },
      { h: 'What to do' },
      {
        p: `Stop using that bottle. If a new bottle looks wrong straight out of the parcel, call {phone}, {hours}, before using it, and have your order number ready.`,
      },
      { h: 'Storing it properly' },
      {
        p: `The label’s storage line reads: {storage}. [How to store eye drops](/guides/how-to-store-eye-drops) covers where that leaves you at home and away.`,
      },
    ],
  },

  {
    slug: 'do-not-touch-the-tip',
    title: 'Why you should never touch the bottle tip',
    description:
      'Quell’s label says not to touch the tip of the bottle to any surface. What counts as a surface, and why the instruction matters.',
    category: 'label',
    body: [
      {
        p: `Quell’s When using section says: {tip}. The home page spells out what “any surface” includes: your eye and your fingers as well.`,
      },
      { h: 'Why it matters' },
      {
        p: `The tip is where the solution leaves the bottle. Whatever it touches can be carried back toward what is left inside, and the instruction exists to keep the contents clean for every dose still to come.`,
      },
      { h: 'Surfaces people forget' },
      {
        list: [
          'Your eyelid and lashes.',
          'Your fingertips, while you hold the bottle.',
          'Countertops, desks, car consoles and the lining of a bag.',
        ],
      },
      { h: 'The cap' },
      {
        p: `Recap the bottle straight after each dose, and set the cap down on its top rather than its open end while you use the drop.`,
      },
      { h: 'No preservative, so habits count' },
      {
        p: `Quell contains no preservative, which makes clean handling part of using it properly rather than an optional extra.`,
      },
      { h: 'If the tip does touch something' },
      {
        p: `The label does not say what to do then, so ask a pharmacist. For the rest of the panel’s handling guidance, see [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed).`,
      },
    ],
  },

  {
    slug: 'when-to-stop-using-eye-drops',
    title: 'When to stop using eye drops and see a doctor',
    description:
      'The stop-use section of Quell’s label, explained: what it asks you to watch for, the 72-hour limit, and when it cannot wait.',
    category: 'label',
    body: [
      { p: `Quell’s label is specific about this. In full: {stopUse}` },
      { h: 'Stop means stop' },
      {
        p: `The instruction is to stop use and ask a doctor, not to try a different drop first or to use more of this one. If you have reached one of those points, the next step is an appointment.`,
      },
      { h: 'Pain and vision come first' },
      {
        p: `Eye pain and changes in your vision are listed first in that sentence, and neither has a waiting period attached. Do not wait out the 72 hours for those.`,
      },
      { h: 'When it cannot wait at all' },
      {
        p: `Sudden vision loss, eye pain or an eye injury call for emergency care straight away. For a medical emergency, call your local emergency number.`,
      },
      { h: 'Take the label with you' },
      {
        p: `Bring the carton, or open the [Drug Facts](/drug-facts) page, at the appointment, so the doctor can see exactly what you have been using and how often.`,
      },
      { h: 'More on the time limit' },
      {
        p: `[Why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) covers how to count it.`,
      },
    ],
  },

  {
    slug: 'why-the-label-mentions-72-hours',
    title: 'Why the label mentions 72 hours',
    description:
      'Quell’s label says to stop and ask a doctor if the condition worsens or persists for 72 hours. What that means in practice, and how to count it.',
    category: 'label',
    body: [
      {
        p: `The stop-use section ends with a time limit: stop and ask a doctor if the condition worsens or persists for 72 hours. Seventy-two hours is three days.`,
      },
      { h: 'What it is telling you' },
      {
        p: `Quell’s label covers dryness and irritation. If three days of using it as directed has not settled things, or things are getting worse, the label’s answer is not more drops. It is a doctor.`,
      },
      { h: 'Worsens or persists' },
      {
        p: `Either one counts. Getting worse at any point is a reason to stop; so is the problem still being there after three days.`,
      },
      { h: 'Counting the days' },
      {
        p: `Count from when you started using it for the problem you have now. Noting the date on your phone takes a second and removes any guesswork later.`,
      },
      { h: 'Not every reason waits three days' },
      {
        p: `The rest of the stop-use section has no time limit attached. The full sentence is: {stopUse}`,
      },
      {
        p: `The complete panel is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
  },

  {
    slug: 'keep-out-of-reach-of-children',
    title: 'Keeping eye drops out of children’s reach',
    description:
      'Quell’s label says to keep it out of reach of children and what to do if it is swallowed. Sensible places to keep a bottle at home and away.',
    category: 'label',
    body: [
      {
        p: `Like every drug label, Quell’s says to keep it out of reach of children, and it adds what to do if the worst happens: {swallowed}.`,
      },
      { h: 'Poison Control' },
      {
        p: `In the United States, Poison Control can be reached on 1-800-222-1222. Keep the bottle or carton with you when you call, so you can read out exactly what was swallowed.`,
      },
      { h: 'At home' },
      {
        p: `A high shelf or a closed cabinet. Bathrooms and bedside tables are where drops tend to live, and both are within reach of a curious child.`,
      },
      { h: 'In bags' },
      {
        p: `An inside zip pocket rather than an open one, especially in a bag that ends up on the floor or on a chair where small hands can reach it.`,
      },
      { h: 'Visiting' },
      {
        p: `Guest rooms and other people’s homes are where medicines get left out. If you are staying somewhere with young children around, keep the bottle in your own bag.`,
      },
      { h: 'Using drops on a child' },
      {
        p: `That is a separate question from storage, and Quell’s label gives no separate directions for children. See [eye drops and children](/guides/eye-drops-and-children).`,
      },
    ],
  },

  {
    slug: 'if-the-label-and-website-differ',
    title: 'If the label and the website ever differ',
    description:
      'The panel printed on the product you receive controls if it ever differs from this website. Why, and what to do if you spot a difference.',
    category: 'label',
    body: [
      {
        p: `Go with the carton. The [terms](/terms) say so: always read the Drug Facts panel on the carton before use, and the panel printed on the product you receive controls if it ever differs from this website.`,
      },
      { h: 'Why it is that way round' },
      {
        p: `The label is the document that travels with the bottle. A website can be edited in a minute; the carton in your hand is the version that applies to the bottle inside it.`,
      },
      { h: 'Where the website’s wording comes from' },
      {
        p: `The [Drug Facts](/drug-facts) page is transcribed from the carton, and the rest of the site’s product wording is drawn from the same source. They are meant to match exactly.`,
      },
      { h: 'If you notice a difference' },
      {
        p: `Call {phone}, {hours}, and say what you saw and where. A difference is worth knowing about, whichever side it turns up on. In the meantime, follow the carton: it is the version that applies to the bottle you have.`,
      },
      { h: 'Reading the carton' },
      {
        p: `[How to read a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section, so you know where to look for the part that matters to you.`,
      },
    ],
  },

  {
    slug: 'eye-drop-label-glossary',
    title: 'Eye drop label terms, explained',
    description:
      'Plain definitions of the words on an eye drop label: active and inactive ingredients, lubricant, emollient, preservative-free, ophthalmic and more.',
    category: 'label',
    body: [
      {
        p: `Eye drop labels use a small vocabulary that is easy once you know it. Here it is, with Quell’s label as the reference point. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
      {
        list: [
          'Drug Facts: the standardized panel on every over-the-counter drug, covering actives, uses, warnings, directions, other information and inactive ingredients.',
          'Over-the-counter: sold without a prescription and used by following the label.',
          'Active ingredient: an ingredient that does the drug’s job. Quell’s are {actives}.',
          'Inactive ingredient: anything else in the formula.',
          'Lubricant: the purpose the label gives glycerol and polysorbate 80.',
          'Emollient: an oily ingredient that softens and coats. The purpose given for light mineral oil.',
          'Demulcent: the word regulations use for lubricant ingredients in eye drops.',
          'Preservative: an ingredient added to stop microbes growing in an opened solution. Quell has none.',
          'Ophthalmic: to do with the eye. Quell’s science copy calls it an ophthalmic formula.',
          'Artificial tears: a common name for lubricating eye drops.',
          'Tear film: the thin layer covering the surface of the eye, with a watery layer beneath an oil layer.',
          'Lipid layer: the oil layer of the tear film. The oil itself is called meibum.',
          'Tamper seal: a seal showing a product has not been opened since it was packed.',
        ],
      },
      {
        p: `For how these fit together on a real panel, see [how to read a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label).`,
      },
    ],
  },

  {
    slug: 'do-eye-drops-expire',
    title: 'Do eye drops expire?',
    description:
      'Eye drops carry an expiration date on their packaging. Where to look, the storage line on Quell’s label, and the color check that applies at any time.',
    category: 'label',
    body: [
      {
        p: `Yes. Drug products sold in the U.S. are generally required to carry an expiration date on their packaging. Look for it on the carton and the bottle, and do not use a bottle past it.`,
      },
      { h: 'Two checks besides the date' },
      {
        p: `Quell’s label adds two things that apply whatever the date says. Storage: {storage}. And the Do not use line: {doNotUse}.`,
      },
      { h: 'Opened versus unopened' },
      {
        p: `Quell’s label does not give a separate use-by period once a bottle is opened. If you want guidance on how long to keep using an opened bottle, your pharmacist is the person to ask. Writing the opening date on the carton makes that conversation easier, because you will know exactly how long it has been in use.`,
      },
      { h: 'Buying ahead' },
      {
        p: `If you order several bottles, check the dates when they arrive and open the earliest first. Keep the others sealed and within the storage range.`,
      },
      { h: 'Spares you will not get to' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. [How to store eye drops](/guides/how-to-store-eye-drops) covers keeping the rest in good condition.`,
      },
    ],
  },

  {
    slug: 'what-the-percentages-on-the-label-mean',
    title: 'What the percentages on eye drop labels mean',
    description:
      'The percentage beside each active ingredient is its concentration in the solution. How to read Quell’s, and why percentages are hard to compare.',
    category: 'label',
    body: [
      {
        p: `The percentage beside each active ingredient is its concentration: how much of the solution, as a proportion, is that ingredient. Quell’s three actives are listed as {actives}.`,
      },
      { h: 'Small numbers, by design' },
      {
        p: `Eye drop actives are present in small proportions. Most of what is in the bottle is the base solution and the inactive ingredients; Quell’s inactive list includes sterile water.`,
      },
      { h: 'Comparing products' },
      {
        p: `Percentages compare directly only for the same ingredient. One drop’s glycerol figure tells you nothing about another drop’s different lubricant, and a higher number is not automatically better or worse. Watch for alternative names, too: glycerol is also sold as glycerin, so compare under both.`,
      },
      { h: 'What the figure leaves out' },
      {
        p: `It says nothing about the inactive ingredients, which can differ a great deal between brands, or about whether a preservative is included. Read the whole panel, not one line of it.`,
      },
      { h: 'Where to find Quell’s' },
      {
        p: `On the [Drug Facts](/drug-facts) page, or in [the active ingredients guide](/guides/the-active-ingredients-section), which explains what each one is there for.`,
      },
    ],
  },
]
