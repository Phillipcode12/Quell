import type { Guide } from '@/lib/guide-types'

/**
 * Directions, storage, and the questions the label leaves open. See
 * `lib/guides.ts`.
 *
 * Where the label is silent — contact lenses, other drops, children, an
 * opened-bottle use-by period — these say it is silent and send the reader to
 * a doctor or pharmacist. Filling the gap with a reasonable-sounding answer
 * would be a new instruction nobody at Aurora has approved.
 */
export const USING_GUIDES: Guide[] = [
  {
    slug: 'how-long-does-a-bottle-of-eye-drops-last',
    title: 'How long does a bottle of eye drops last?',
    description:
      'Working out how long a {size} bottle of Quell lasts at the labeled dose of six drops a day, and why your own pace is the real answer.',
    category: 'using',
    body: [
      {
        p: `At the labeled dose, roughly a month, give or take. Quell’s directions read “{directions},” which is six drops a day, and a {size} bottle holds a couple of hundred drops, depending on the size of each one.`,
      },
      { h: 'Why the answer is approximate' },
      {
        p: `Drop size varies between products and with how firmly the bottle is squeezed, so the number of drops in a bottle is not fixed. Quell’s label gives the volume, {size}, not a drop count.`,
      },
      { h: 'Your own pace' },
      {
        p: `Write the date on the carton when you open a bottle. When it runs out, you will know your real number, and that beats any estimate.`,
      },
      { h: 'Planning orders' },
      {
        list: [
          'One bottle: about a month at the labeled dose.',
          'Two bottles: about two months.',
          'Three bottles: about three months, and shipping is free.',
        ],
      },
      { h: 'Reorder before you run out' },
      {
        p: `Delivery dates are not promised, so order again while there is still some left. [How to reorder](/guides/how-to-reorder-quell) takes a couple of clicks, and your details are remembered in the browser.`,
      },
    ],
  },

  {
    slug: 'should-eye-drops-be-refrigerated',
    title: 'Should eye drops be refrigerated?',
    description:
      'Not Quell. Its label gives a room-temperature range, and a refrigerator runs colder than the bottom of it. Where to keep it instead.',
    category: 'using',
    body: [
      {
        p: `Not Quell. The label’s storage line reads “{storage},” which is room temperature. A household refrigerator normally runs well below the bottom of that range, so the fridge is outside what the label allows.`,
      },
      { h: 'Other drops can differ' },
      {
        p: `Some products, prescription ones especially, carry different storage instructions, so read every label on its own terms. The instruction that applies to a bottle is the one printed on it.`,
      },
      { h: 'The appeal of a cold drop' },
      {
        p: `Some people like the feel of a chilled drop. With Quell, that is not an option the label leaves open.`,
      },
      { h: 'Where to keep it' },
      {
        p: `A drawer or cupboard away from heat sources, out of direct sun and out of children’s reach. [How to store eye drops](/guides/how-to-store-eye-drops) has the full rundown.`,
      },
      { h: 'If it went in the fridge by mistake' },
      {
        p: `The label does not say what to do in that case. Look at the bottle — the Do not use line reads: {doNotUse} — and if you are in any doubt, ask a pharmacist before using it.`,
      },
    ],
  },

  {
    slug: 'eye-drops-in-a-hot-car',
    title: 'Can you leave eye drops in a hot car?',
    description:
      'A parked car gets hotter than the top of Quell’s storage range quickly. Where to keep a bottle when you are out, and what to check if it got hot.',
    category: 'using',
    body: [
      {
        p: `Better not. Quell’s storage line reads “{storage},” and the top of that range is a warm day. A car parked in the sun climbs well past it, and does so fast, even when the weather outside does not feel extreme.`,
      },
      { h: 'Glove boxes and door pockets' },
      {
        p: `They feel tucked away, but they are inside the same hot car. So is a bag left on the back seat.`,
      },
      { h: 'What to do instead' },
      {
        p: `Keep the bottle on you, in a bag you carry, or take it inside when you go. On a road trip, keep it in the cabin with you rather than in the trunk, and out of direct sun.`,
      },
      { h: 'If it has been left in the heat' },
      {
        p: `Look at it before the next dose. The Do not use line reads: {doNotUse}. If you are unsure, open a fresh bottle and ask a pharmacist about the old one.`,
      },
      { h: 'Winter counts too' },
      {
        p: `The bottom of the range matters as well. A car left out all night in freezing weather is outside it in the other direction. [Traveling with eye drops](/guides/traveling-with-eye-drops) covers longer trips.`,
      },
    ],
  },

  {
    slug: 'why-is-quell-milky-brown',
    title: 'Why is Quell milky brown?',
    description:
      'Quell is a milky brown solution because of its natural oil-based ingredients. That is normal; here is what the label does ask you to watch for.',
    category: 'using',
    body: [
      {
        p: `Because of what is in it. Quell appears as a milky brown solution because of its natural oil-based ingredients. That is expected, and the label says so: {milky}.`,
      },
      { h: 'The ingredients behind it' },
      {
        p: `The formula pairs its lubricants with an emollient, light mineral oil, and with inactive ingredients that include emu oil, manuka honey, Dead Sea salt and Terminalia chebula. A clear, watery drop would not carry those.`,
      },
      { h: 'Why it is oil-based at all' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, rather than only topping up the watery layer. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains it.`,
      },
      { h: 'Normal, and what is not' },
      {
        p: `{appearance} What the label asks you to watch for is a change: {doNotUse}. Compare a bottle with how it looked when it arrived.`,
      },
      { h: 'The first bottle' },
      {
        p: `If you are used to clear drops, the first one can be a surprise. That is the main reason the note about color sits right beside the buy button.`,
      },
    ],
  },

  {
    slug: 'contact-lenses-and-quell',
    title: 'Can I use Quell with contact lenses?',
    description:
      'Quell’s label does not give directions for use with contact lenses. What that means, and who to ask before you try it.',
    category: 'using',
    body: [
      {
        p: `Quell’s label does not say. Its directions — {directions} — make no mention of contact lenses either way, and this site will not fill that gap with a guess.`,
      },
      { h: 'Who to ask' },
      {
        p: `Your eye doctor, who knows both your lenses and your eyes. Bring the carton, or open the [Drug Facts](/drug-facts) page, so they can see the full ingredient list.`,
      },
      { h: 'What to show them' },
      {
        p: `The active ingredients, {actives}, and the inactive list, which includes emu oil and other natural ingredients. Mention that Quell is a milky brown solution, so they have the whole picture.`,
      },
      { h: 'Until you have an answer' },
      {
        p: `The label is the only instruction that applies, and it does not cover lenses. Ask before combining the two, and if your eye doctor gives you specific advice about timing or lens removal, follow that.`,
      },
      { h: 'Other questions the label leaves open' },
      {
        p: `Using Quell alongside other eye drops, and using it for a child, are not covered either. See [using Quell with other eye drops](/guides/using-quell-with-other-eye-drops) and [eye drops and children](/guides/eye-drops-and-children).`,
      },
    ],
  },

  {
    slug: 'using-quell-with-other-eye-drops',
    title: 'Can I use Quell with other eye drops?',
    description:
      'Quell’s label does not cover using it alongside other eye drops. Why that question belongs with your eye doctor or pharmacist, and what to bring.',
    category: 'using',
    body: [
      {
        p: `The label does not cover it. Quell’s directions are written for Quell on its own, and they say nothing about combining it with other products.`,
      },
      { h: 'Prescribed drops' },
      {
        p: `If you use eye drops a doctor prescribed, ask the prescriber before adding anything. They know why those drops were chosen and how they are meant to be used.`,
      },
      { h: 'Other over-the-counter drops' },
      {
        p: `Ask a pharmacist, and bring both labels. The active and inactive ingredient lists are what they will want to compare.`,
      },
      { h: 'What to bring' },
      {
        list: [
          'Quell’s carton, or the Drug Facts page on your phone.',
          'The labels of everything else you put in your eyes.',
          'How often you use each one.',
        ],
      },
      { h: 'Quell’s own directions do not change' },
      {
        p: `Whatever you are told about other products, Quell’s directions stay the same: {directions}. The stop-use section still applies as well: {stopUse}`,
      },
      {
        p: `The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
  },

  {
    slug: 'can-i-use-more-than-three-drops-a-day',
    title: 'Can I use more than three drops a day?',
    description:
      'Quell’s directions are one drop three times a day in each eye. What to do if that does not feel like enough, according to the label itself.',
    category: 'using',
    body: [
      { p: `The directions read: {directions}. Using more is not part of them.` },
      { h: '“In each eye”' },
      {
        p: `Three times a day in each eye is six drops a day in total. If you have been counting three, you have been using the right amount per eye.`,
      },
      { h: 'If it does not feel like enough' },
      {
        p: `That is worth acting on, and the label tells you how: {stopUse} A problem that persists is a reason to see a doctor, not to raise the dose.`,
      },
      { h: 'Why stick to the label' },
      {
        p: `The directions are part of what makes an over-the-counter product something you can use on your own. Going beyond them means going beyond what the label covers.`,
      },
      { h: 'Talk to someone' },
      {
        p: `An eye doctor or pharmacist can tell you whether something else is going on. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the points at which that matters most.`,
      },
    ],
  },

  {
    slug: 'screens-and-your-tear-film',
    title: 'Screens and your tear film',
    description:
      'Concentrating on a screen cuts how often you blink, and your tear film evaporates while you stare. What that means for eyes that feel dry.',
    category: 'using',
    body: [
      {
        p: `Concentrating on a screen cuts how often you blink, and your tear film evaporates while you stare. That is the short version, and it is why eyes can feel dry by the end of a working day spent at a monitor.`,
      },
      { h: 'Why blinking matters' },
      {
        p: `Each blink spreads a fresh tear film across the surface of the eye. Fewer blinks leave more time for it to evaporate in between.`,
      },
      { h: 'The oil layer' },
      {
        p: `The outermost layer of the tear film is oil, responsible for minimizing evaporation of the watery layer beneath it. Quell is designed to reinforce that oil layer to help reduce moisture loss. More in [the tear film’s oil layer](/guides/the-tear-films-oil-layer).`,
      },
      { h: 'Screen days and the directions' },
      {
        p: `The directions do not change with your schedule: {directions}. Tying doses to fixed points in the workday, like lunch, can make them easier to remember.`,
      },
      { h: 'When it is more than tired eyes' },
      {
        p: `Screens are one everyday reason for dryness, not the only one. The label says when to stop and get advice: {stopUse}`,
      },
    ],
  },

  {
    slug: 'dry-air-wind-and-altitude',
    title: 'Dry air, wind and altitude',
    description:
      'Wind and altitude outdoors, air conditioning and central heat indoors: the everyday conditions that pull moisture off your eyes.',
    category: 'using',
    body: [
      {
        p: `Wind and altitude outdoors, air conditioning and central heat indoors — all of it pulls moisture off your eyes faster than you can replace it. That is why eyes can feel drier with the seasons, and in some places more than others.`,
      },
      { h: 'Indoors' },
      {
        p: `Heating in winter and air conditioning in summer both dry the air in a room, and offices and hotel rooms run one or the other for hours at a stretch.`,
      },
      { h: 'Outdoors' },
      {
        p: `Wind speeds up evaporation from the surface of the eye, and higher altitudes bring drier air. A day of skiing or hiking can leave your eyes feeling it, and so can a long drive with the vents blowing toward your face.`,
      },
      { h: 'What the label covers' },
      {
        p: `Quell’s Uses section reads: {uses}. The directions are the same whatever the weather: {directions}.`,
      },
      { h: 'Keeping the bottle in range' },
      {
        p: `Hot cars, cold trunks and sunny windowsills all sit outside the label’s storage range. [How to store eye drops](/guides/how-to-store-eye-drops) covers where to keep it instead.`,
      },
    ],
  },

  {
    slug: 'keeping-spare-bottles',
    title: 'Keeping spare bottles of eye drops',
    description:
      'Ordering several bottles at once? How to store the spares, why to leave them sealed, and what the returns policy means for unopened bottles.',
    category: 'using',
    body: [
      {
        p: `Store spares exactly like the bottle you are using — {storage} — and leave them sealed until you need them.`,
      },
      { h: 'Why sealed' },
      {
        p: `Two reasons. A sealed bottle is one you can still return: unopened bottles in their original packaging can come back within {returnDays} days of delivery. And opening a bottle you will not use for weeks gains you nothing.`,
      },
      {
        p: `Those {returnDays} days run from delivery, so if you have over-ordered, decide early. After that, the spares are yours to keep in range until you need them.`,
      },
      { h: 'Where' },
      {
        p: `Together, in one drawer or cupboard, away from heat and out of children’s reach. Keeping them in one place stops a bottle being forgotten in a bag or a car.`,
      },
      { h: 'Which to open first' },
      {
        p: `Check the expiration dates and open the earliest first. [Do eye drops expire?](/guides/do-eye-drops-expire) covers the dates.`,
      },
      { h: 'How many to keep' },
      {
        p: `At the labeled dose a bottle lasts roughly a month, so one spare covers the wait for a new order. {freeBottles} or more ship free if you would rather stock up.`,
      },
    ],
  },

  {
    slug: 'eye-drops-and-children',
    title: 'Eye drops and children: what the label says',
    description:
      'Quell’s label gives no separate directions for children. What it does say about children, and why a pediatrician should make the call.',
    category: 'using',
    body: [
      {
        p: `Quell’s label does not give separate directions for children. Its directions — {directions} — are written without an age range, and this site will not supply one.`,
      },
      { h: 'Ask first' },
      {
        p: `If you are thinking of using Quell for a child, ask a pediatrician or eye doctor first, and bring the label. A child’s eyes, and whatever is behind the symptoms, are for them to judge.`,
      },
      { h: 'What the label does say about children' },
      {
        p: `Keep out of reach of children, and: {swallowed}. In the U.S., Poison Control is on 1-800-222-1222.`,
      },
      { h: 'Who can order' },
      {
        p: `Buyers must be at least 18. An adult can order for the household, but whether to use it on a child is a doctor’s decision.`,
      },
      { h: 'The allergy caution' },
      {
        p: `{warnings}. Check it for any child before anything else. [Keeping drops out of children’s reach](/guides/keep-out-of-reach-of-children) covers storage at home.`,
      },
    ],
  },

  {
    slug: 'questions-to-ask-your-pharmacist',
    title: 'Questions to ask a pharmacist about eye drops',
    description:
      'A short list of useful questions to take to a pharmacist or eye doctor before using a new eye drop, with Quell’s label in hand.',
    category: 'using',
    body: [
      {
        p: `A pharmacist can go through a label with you in a couple of minutes. These are the questions worth bringing, together with the label itself: the carton, or the [Drug Facts](/drug-facts) page.`,
      },
      {
        list: [
          'Is there anything in the active or inactive ingredients I should avoid?',
          'I have an egg or bird allergy. Does Quell’s caution apply to me?',
          'Can I use it with my contact lenses?',
          'Can I use it alongside the other drops I use, and how should I space them?',
          'Is it suitable for my child?',
          'What should I do if the tip touches something?',
          'How long should I keep using an opened bottle?',
        ],
      },
      { h: 'Why these' },
      {
        p: `Each is a question Quell’s label either flags or leaves unanswered. Where a label is silent, the answer has to come from someone who knows your situation.`,
      },
      { h: 'For an eye doctor instead' },
      {
        p: `Anything about what is causing your symptoms, and anything involving pain, changes in vision, or symptoms that have not settled. The label’s own guidance is: {stopUse}`,
      },
    ],
  },
]
