import type { Guide } from '@/lib/guide-types'

/**
 * Choosing drops, and when a drop is not the answer. See `lib/guides.ts`.
 *
 * The symptom-led guides ("for dry eyes", "for itchy eyes") are written to the
 * approved Relieves list and the Uses statement, and each says plainly what
 * the product is not, so a search for a symptom never lands on a promise.
 */
export const CHOOSING_GUIDES: Guide[] = [
  {
    slug: 'what-over-the-counter-means',
    title: 'What does over-the-counter mean for eye drops?',
    description:
      'Over-the-counter eye drops can be bought without a prescription and used by following the label. What that means for you in practice.',
    category: 'choosing',
    body: [
      {
        p: `An over-the-counter drug is one you can buy without a prescription and use on your own, by following its label. Quell is an over-the-counter lubricating eye drop.`,
      },
      { h: 'The label does the job instructions would' },
      {
        p: `Without a doctor’s instructions, the Drug Facts panel is your instructions. It says what the product is for, how to use it and when to stop. Quell’s directions read: {directions}.`,
      },
      { h: 'The warnings still apply' },
      {
        p: `Over the counter does not mean without conditions. Quell’s warnings begin: {warnings}.`,
      },
      { h: 'Buying online' },
      {
        p: `Because no prescription is needed, Quell can be ordered directly on this site, with guest checkout, by anyone 18 or over. [How to buy eye drops online safely](/guides/how-to-buy-eye-drops-online-safely) covers the checks worth making.`,
      },
      { h: 'HSA and FSA' },
      {
        p: `Since 2020, over-the-counter medicines can be bought with HSA and FSA funds without a prescription. [HSA, FSA and eye drops](/guides/hsa-fsa-and-eye-drops) has the details.`,
      },
      { h: 'Not a substitute for an exam' },
      {
        p: `Over the counter means you can use it without a prescription, not that it replaces seeing someone. {stopUse}`,
      },
    ],
  },

  {
    slug: 'artificial-tears-vs-lubricating-eye-drops',
    title: 'Artificial tears vs. lubricating eye drops',
    description:
      'Artificial tears and lubricating eye drops are two names for the same kind of product. What links them, and how Quell fits in.',
    category: 'choosing',
    body: [
      {
        p: `Mostly, they are two names for the same thing. “Artificial tears” is the everyday name for lubricating eye drops: over-the-counter drops whose active ingredients are lubricants.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a lubricating eye drop, with {actives} as its actives. The carton’s emu oil panel uses the everyday term too, describing what emu oil does “in artificial tears.”`,
      },
      { h: 'The differences are in the detail' },
      {
        p: `Products sold under either name vary in their active ingredients, their inactive ingredients and whether they contain a preservative. The name on the front of the box tells you far less than the panel on the back.`,
      },
      { h: 'What to compare' },
      {
        list: [
          'The Uses section: what each one is for.',
          'Active and inactive ingredients, especially if you have allergies.',
          'Whether there is a preservative.',
          'The directions, and so how quickly you would use a bottle.',
        ],
      },
      { h: 'Quell’s version' },
      {
        p: `Preservative-free, built around the tear film’s oil layer, and milky brown because of its natural oil-based ingredients. [What are lubricating eye drops?](/guides/what-are-lubricating-eye-drops) covers the category in full.`,
      },
    ],
  },

  {
    slug: 'the-dry-eye-self-check',
    title: 'The dry eye self-check: what it is',
    description:
      'Eight questions, about ninety seconds: what Quell’s dry eye self-check asks about, what you get back, and what it is not.',
    category: 'choosing',
    body: [
      {
        p: `The [dry eye self-check](/self-check) is eight questions about your symptoms and takes about ninety seconds. You get a symptom score, and whether your answers fit the pattern of a tear film that evaporates too quickly.`,
      },
      { h: 'How the result arrives' },
      {
        p: `By email. You give an address at the start and the result is sent to it. The page says the address is never sold.`,
      },
      { h: 'What it is not' },
      {
        p: `It is not a diagnosis, and it is no substitute for an eye exam. It is a structured way of describing your symptoms, which can be a useful thing to take to an eye doctor.`,
      },
      { h: 'If it says to see a doctor' },
      {
        p: `Some answers lead to a result that recommends seeing a doctor, and that email says so in its subject line. Take it seriously, and book the appointment rather than ordering drops first.`,
      },
      { h: 'Where Quell comes in' },
      {
        p: `Quell’s Uses section reads: {uses}. The self-check does not change that, and the result is not a recommendation to buy anything.`,
      },
    ],
  },

  {
    slug: 'eye-symptoms-that-need-a-doctor',
    title: 'Eye symptoms that need a doctor, not a drop',
    description:
      'When to stop using eye drops and see a doctor, and when to seek emergency care, according to Quell’s own label and terms.',
    category: 'choosing',
    body: [
      {
        p: `Some eye problems are for an eye doctor, and a few are emergencies. Quell’s label and terms draw those lines clearly, and they apply whatever drop you use.`,
      },
      { h: 'Emergencies' },
      {
        p: `Sudden vision loss, eye pain, or an eye injury: seek emergency care at once. For a medical emergency, call your local emergency number.`,
      },
      { h: 'Stop use and ask a doctor' },
      { p: `{stopUse}` },
      { h: 'Outside what the label covers' },
      {
        p: `Quell’s Uses section reads: {uses}. If what you are experiencing does not fit that description, or you do not know what it is, an eye exam is how to find out.`,
      },
      { h: 'Not medical advice' },
      {
        p: `This site does not provide medical advice, and using Quell does not create a doctor-patient relationship, as the [terms](/terms) say.`,
      },
      { h: 'Before the appointment' },
      {
        p: `Jot down when the symptoms started, what makes them better or worse, and every product you have put in your eyes, with how often. Those are the questions an eye doctor will ask first, and Quell’s [Drug Facts](/drug-facts) page answers the last one in full.`,
      },
    ],
  },

  {
    slug: 'comparing-eye-drops-online',
    title: 'How to compare eye drops when shopping online',
    description:
      'What to look at when comparing eye drops online: the Uses section, active and inactive ingredients, preservatives, directions and delivered price.',
    category: 'choosing',
    body: [
      {
        p: `Compare the labels, not the marketing. Every over-the-counter eye drop has a Drug Facts panel laid out the same way, which makes the panel the fairest basis for comparing one product with another.`,
      },
      { h: 'Uses' },
      {
        p: `What each product is for. Quell’s: {uses}. A drop whose Uses do not match your problem is not the drop for it.`,
      },
      { h: 'Active ingredients' },
      {
        p: `Lubricants, emollients, or something else entirely. Quell’s are {actives}.`,
      },
      { h: 'Inactive ingredients and preservatives' },
      {
        p: `Read them for allergies and for preservatives. Quell is preservative-free, and its inactive list includes emu oil, which is why its label carries an egg and bird allergy caution.`,
      },
      { h: 'Directions' },
      {
        p: `How often you would use it, and so how fast you would go through a bottle.`,
      },
      { h: 'Delivered price' },
      {
        p: `The bottle price plus shipping, per bottle. [Comparing prices](/guides/comparing-eye-drop-prices-with-shipping) shows how.`,
      },
      { h: 'The seller' },
      {
        p: `A name, an address and a phone number. [How to buy eye drops online safely](/guides/how-to-buy-eye-drops-online-safely) has the checklist.`,
      },
    ],
  },

  {
    slug: 'comparing-eye-drop-prices-with-shipping',
    title: 'Comparing eye drop prices? Count the shipping',
    description:
      'The sticker price of a bottle of eye drops is not what it costs to get it to you. How to compare delivered prices, using Quell’s as the example.',
    category: 'choosing',
    body: [
      {
        p: `Compare what each bottle costs delivered, not its shelf price. Shipping can change the answer, especially on a single bottle.`,
      },
      { h: 'How Quell’s adds up' },
      {
        p: `Shipping is a flat {shipping} below {freeBottles} bottles and free on {freeBottles} or more. One bottle carries the whole shipping charge, two share it, and three or more carry none.`,
      },
      { h: 'Per bottle, delivered' },
      {
        p: `Divide the delivered total by the number of bottles. The [buy panel](/#buy) does this for you and shows the saving against buying one at a time.`,
      },
      { h: 'Like with like' },
      {
        p: `Bottle sizes differ. Quell’s is {size}; check the size of anything you compare it with, and work out a cost per milliliter if they differ. Directions differ too, so a cheaper bottle used more often may not cost less per day.`,
      },
      { h: 'Watch for extras' },
      {
        p: `Codes that do not work, subscriptions that renew, and shipping that only appears at the last step. Quell has no codes and no subscription, and shipping is shown in the cart before you pay, so the delivered total there is the whole cost.`,
      },
    ],
  },

  {
    slug: 'eye-drops-for-dry-eyes',
    title: 'Eye drops for dry eyes: what to look for',
    description:
      'What to look for in an eye drop for dryness, what Quell’s label says it is for, and when dry eyes are a reason to see a doctor.',
    category: 'choosing',
    body: [
      {
        p: `Look for a lubricating eye drop whose Uses section covers dryness. Quell’s reads: {uses}.`,
      },
      { h: 'Everyday reasons eyes feel dry' },
      {
        p: `Screens, wind, altitude, air conditioning and central heat are the everyday culprits the home page names. Each one speeds up the loss of moisture from the surface of the eye, and screens add fewer blinks on top.`,
      },
      { h: 'Water or oil' },
      {
        p: `Most drops top up the watery layer of the tear film. Quell is designed to reinforce the oil layer above it, which is the layer that slows evaporation. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains the difference.`,
      },
      { h: 'Preservative-free' },
      {
        p: `If you will use drops several times a day, check for a preservative. Quell has none.`,
      },
      { h: 'When dryness needs a doctor' },
      { p: `{stopUse}` },
      {
        p: `[What are lubricating eye drops?](/guides/what-are-lubricating-eye-drops) covers the category in more depth.`,
      },
    ],
  },

  {
    slug: 'eye-drops-for-itchy-eyes',
    title: 'Eye drops for itchy eyes',
    description:
      'Quell is sold to relieve dryness, irritation and itching. What its label covers, what kind of drop it is, and when itching needs a doctor.',
    category: 'choosing',
    body: [
      {
        p: `Quell is sold to relieve dryness, irritation and itching. It is a lubricating eye drop, with {actives} as its actives: two lubricants and an emollient.`,
      },
      { h: 'What the label says' },
      { p: `The Uses section of the Drug Facts panel reads: {uses}.` },
      { h: 'What kind of drop it is not' },
      {
        p: `Quell contains no antihistamine; its actives are lubricants and an emollient and nothing else. If you are looking for an allergy medicine, that is a different kind of product, and a pharmacist can point you to one.`,
      },
      { h: 'When itching needs a doctor' },
      {
        p: `If itching is severe, keeps coming back, or comes with other symptoms, ask a doctor or pharmacist what is behind it. The label’s own guidance: {stopUse}`,
      },
      { h: 'Ordering' },
      {
        p: `No prescription is needed. [See prices](/#buy), or read the full [Drug Facts](/drug-facts) panel first.`,
      },
    ],
  },

  {
    slug: 'eye-drops-for-irritated-eyes',
    title: 'Eye drops for irritated eyes',
    description:
      'Quell’s label describes it as a protectant against further irritation. What that wording means, what to look for, and when to stop.',
    category: 'choosing',
    body: [
      {
        p: `Quell’s Uses section begins with irritation: {uses}. “A protectant against further irritation” is the label’s way of saying it is for eyes that are already irritated, to protect them from more.`,
      },
      { h: 'Preservatives and irritation' },
      {
        p: `Preservatives such as benzalkonium chloride are a common source of irritation for people using drops several times a day. Quell contains none, which matters most to people who use drops on a schedule.`,
      },
      { h: 'Directions' },
      {
        p: `{directions}. The directions do not change when your eyes feel worse. Stick to them, and if things are not settling, the stop-use section below is the one that applies.`,
      },
      { h: 'When to stop' },
      { p: `{stopUse}` },
      { h: 'What the label does not cover' },
      {
        p: `An eye injury is not what a lubricating drop is for. Injuries need emergency care, not a drop. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) sets out the lines.`,
      },
    ],
  },

  // The second set of ten, added 2026-11-03 at Phillip's request. Each answers
  // a question the first 110 did not; guides.test.ts checks they stay distinct.
  {
    slug: 'how-the-dry-eye-self-check-scores-you',
    title: 'How the dry eye self-check scores your answers',
    description:
      'Inside the self-check: the two answer scales, the four result bands, the evaporation pattern, and the safety question that skips the score.',
    category: 'choosing',
    body: [
      {
        p: `The [self-check](/self-check) adds up your answers to the symptom questions into a single score, places it in one of four bands, and separately looks for a pattern. One question can override all of that, and it comes last.`,
      },
      { h: 'Two kinds of question, two scales' },
      {
        p: `Questions about how often something happens over a week are answered Never, Some days, Most days or Every day. Questions about what happens around a specific trigger, like screen use or moving air, are answered Never, Occasionally, Frequently or Every time. Days would be the wrong unit for those, so they get their own.`,
      },
      { h: 'The four bands' },
      {
        list: ['Minimal', 'Mild and occasional', 'Moderate, most days', 'Significant, daily'],
      },
      {
        p: `One question, about when your eyes are at their worst, is not scored at all. If you say you do not use drops, the question about how long drops help is left out of the score rather than counted as zero.`,
      },
      { h: 'The pattern' },
      {
        p: `Some answers point toward a tear film that evaporates too quickly. The result says whether your answers fit that pattern or whether the picture is unclear. It describes what your answers said; it is not a diagnosis.`,
      },
      { h: 'The safety question' },
      {
        p: `The last question asks whether any warning signs apply right now, among them eye pain, changes in vision, and symptoms lasting more than 72 hours. Tick any of them and there is no score at all, just one recommendation: see an eye care professional.`,
      },
      { h: 'What it never says' },
      {
        p: `No result tells you to buy anything, and none names a product. Quell’s Uses section is a separate matter: {uses}.`,
      },
    ],
  },

  {
    slug: 'reading-eye-drop-reviews-online',
    title: 'How to read eye drop reviews online',
    description:
      'What a review can and cannot tell you about an eye drop, what to look for, and how the reviews on Quell’s own site were collected.',
    category: 'choosing',
    body: [
      {
        p: `Read reviews for what they are good at: how a drop feels, how easy the bottle is to use, how it fits someone’s day. Do not read them as a guide to what a drop can do. That is the label’s job.`,
      },
      { h: 'Useful signs' },
      {
        list: [
          'Specific detail: the texture, the bottle, how often they use it.',
          'A reviewer who describes their own routine rather than making promises about yours.',
          'A mix of experiences, not a wall of identical praise.',
        ],
      },
      { h: 'Signs to be wary of' },
      {
        list: [
          'A review that says a drop fixed a condition its label does not mention.',
          'Claims that one product beats every other on the shelf.',
          'Pressure to buy now, or a code that comes with the review.',
        ],
      },
      { h: 'The label outranks the review' },
      {
        p: `A customer’s experience is real, but it cannot widen what a product is for. For Quell, the Uses section reads: {uses}. If a review says more than that, believe the label.`,
      },
      { h: 'Quell’s own reviews' },
      {
        p: `The [reviews](/reviews) page quotes people who bought Quell and agreed to have their words published. Their names were changed for privacy, which the page says plainly; nothing else was edited. There are no star ratings on this site, because none would be honest until there are enough real reviews to average.`,
      },
    ],
  },

  {
    slug: 'questions-to-ask-your-eye-doctor',
    title: 'Questions to ask your eye doctor about dry eyes',
    description:
      'Making the most of an appointment about dry or irritated eyes: what to bring, what to ask, and the warning signs that mean booking sooner.',
    category: 'choosing',
    body: [
      {
        p: `An appointment goes further when you arrive with notes and leave with answers. These are the questions worth asking an eye doctor about eyes that feel dry or irritated, whatever you end up using.`,
      },
      { h: 'Questions about the cause' },
      {
        list: [
          'What do you think is behind my symptoms?',
          'Could my screen time, contact lenses, or the air at home or work be part of it?',
          'Is there anything you would want to rule out?',
        ],
      },
      { h: 'Questions about what to use' },
      {
        list: [
          'Is an over-the-counter lubricating drop reasonable for me?',
          'Are there ingredients I should avoid, given my allergies?',
          'How does a drop fit around anything else you have prescribed?',
        ],
      },
      { h: 'Questions about what comes next' },
      {
        list: [
          'What should make me call you before my next visit?',
          'When should I come back?',
        ],
      },
      { h: 'What to bring' },
      {
        p: `The products you use, or photos of their labels, and a short note of when symptoms started and what makes them better or worse. A [simple eye drop log](/guides/keeping-an-eye-drop-log) covers most of that.`,
      },
      { h: 'Do not wait for an appointment if' },
      {
        p: `You have sudden vision loss, eye pain or an eye injury; those need emergency care. Quell’s label adds its own guidance: {stopUse}`,
      },
    ],
  },

  {
    slug: 'optometrist-or-ophthalmologist',
    title: 'Optometrist or ophthalmologist: which to see?',
    description:
      'The difference between an optometrist and an ophthalmologist, which one to start with for eyes that feel dry, and when to go straight to emergency care.',
    category: 'choosing',
    body: [
      {
        p: `For most everyday eye questions, either is a reasonable first stop, and many people start with an optometrist. The difference is mainly in training and in what each can do.`,
      },
      { h: 'Optometrists' },
      {
        p: `Optometrists hold a Doctor of Optometry degree. They examine eyes, prescribe glasses and contact lenses, and look after many common eye problems. Exactly what they are allowed to do varies from state to state.`,
      },
      { h: 'Ophthalmologists' },
      {
        p: `Ophthalmologists are medical doctors who specialize in the eye. They can do everything above and also perform eye surgery. An optometrist will refer you to one when something calls for it.`,
      },
      { h: 'Opticians are different again' },
      {
        p: `Opticians fit and adjust glasses and sometimes contact lenses from a prescription. They do not examine eyes.`,
      },
      { h: 'Where to start with dry or irritated eyes' },
      {
        p: `An optometrist is usually the simplest place to begin, and often the quickest to book. Bring the labels of anything you have been using; [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) has a list worth taking along.`,
      },
      { h: 'When it cannot wait' },
      {
        p: `Sudden vision loss, eye pain or an eye injury need emergency care, not an appointment next week. For a medical emergency, call your local emergency number.`,
      },
    ],
  },
]
