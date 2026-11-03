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
        p: `Without a doctor’s instructions, the Drug Facts panel is your instructions. It says what the product is for, how to use it and when to stop. Quell’s directions are {directions}.`,
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
]
