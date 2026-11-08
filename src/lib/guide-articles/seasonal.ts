import type { Guide } from '@/lib/guide-types'

/**
 * Gifts and the holidays. Added 2026-11-07 at Phillip's request: "20 more
 * articles… things similar to Christmas or gifts for people with dry eye".
 *
 * Two lines these hold, on top of the rules in `lib/guides.ts`:
 *
 * - **No arrival-by-a-date promise.** The site promises no delivery date, so
 *   nothing here says an order will arrive "in time for Christmas". The honest
 *   version is "order early", and that is what they say.
 * - **A gift is not a health claim.** Quell is suggested as a practical gift
 *   for someone who already deals with dry eyes, within the label's Uses, and
 *   every gift guide sends the giver to the egg/bird caution first.
 *
 * Checkout has no gift-wrap or gift-message option (there is no "gift"
 * anywhere in the checkout code), so none is described.
 */
export const SEASONAL_GUIDES: Guide[] = [
  {
    slug: 'are-eye-drops-a-good-gift',
    title: 'Are eye drops a good gift?',
    description:
      'Eye drops can be a thoughtful, practical gift for someone who already lives with dry eyes. When it works, when it doesn’t, and what to check first.',
    category: 'seasonal',
    body: [
      {
        p: `For the right person, yes. Someone who already reaches for eye drops most days tends to appreciate a bottle they didn’t have to remember to buy, much like good socks or a fresh notebook. For someone who has never mentioned their eyes, a bottle can land as a comment rather than a present.`,
      },
      { h: 'When it works' },
      {
        list: [
          'They’ve told you their eyes feel dry, scratchy or tired.',
          'They already use over-the-counter drops and run out often.',
          'They spend long hours at screens, drive a lot, or live somewhere dry.',
          'It sits alongside other things, not on its own as the whole gift.',
        ],
      },
      { h: 'When to hold off' },
      {
        p: `If a doctor prescribes their eye drops, they shouldn’t add another product without asking, so a bottle of Quell may go unused. The same goes for contact lens wearers, because Quell’s label doesn’t cover lenses.`,
      },
      { h: 'The one question to ask first' },
      {
        p: `Quell’s label carries this caution: {warnings}. The formula contains emu oil. If you don’t know whether they have an egg or bird allergy, find out before you order. [Egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the wording.`,
      },
      { h: 'Why Quell in particular' },
      {
        p: `Its label says it’s {uses}, and it’s preservative-free, with emu oil, manuka honey and other natural ingredients in a milky brown solution. That last part is worth a word on the card, so the color doesn’t surprise them.`,
      },
      {
        p: `If it’s a fit, [see prices and buy](/#buy). If you’re still deciding, [gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes) has a few things to pair it with.`,
      },
    ],
  },

  {
    slug: 'gift-ideas-for-someone-with-dry-eyes',
    title: 'Gift ideas for someone with dry eyes',
    description:
      'Practical presents for a friend or relative whose eyes feel dry: things for the home, the desk and the outdoors, plus where a bottle of Quell fits.',
    category: 'seasonal',
    body: [
      {
        p: `Think about where their eyes bother them most, then pick something for that place. Dry indoor heat, long screen sessions and cold wind are the usual culprits, and each one has an everyday gift that suits it.`,
      },
      { h: 'For the home' },
      {
        p: `A room humidifier puts moisture back into air that winter heating has dried out. A small one for the bedroom or the home office is plenty, and it’s easy to wrap. If you buy one, add a note that it needs regular cleaning, which the manual will spell out.`,
      },
      { h: 'For the desk' },
      {
        p: `People blink less while they concentrate on a screen. A simple desk timer, or an app set to nudge them to look away every so often, makes a cheap and surprisingly welcome stocking filler for anyone who works at a monitor.`,
      },
      { h: 'For the outdoors' },
      {
        p: `Wraparound sunglasses cut down the wind that reaches the eyes on a walk, a bike ride or the slopes. A soft scarf that can be pulled up against a cold breeze earns its keep too.`,
      },
      { h: 'For the bag' },
      {
        p: `A small zip pouch that keeps their drops, lip balm and glasses cloth together. It stops a bottle from ending up loose in a coat pocket or left in the car, where the temperature can drift outside the label’s range.`,
      },
      { h: 'And the drops themselves' },
      {
        p: `A {size} bottle of Quell is small enough to tuck into any of the above. Its Uses read: {uses}. Check the egg and bird allergy caution on the [Drug Facts](/drug-facts) page before you buy, and see [how to send Quell as a gift](/guides/sending-quell-as-a-gift) for the checkout side.`,
      },
    ],
  },

  {
    slug: 'stocking-stuffers-for-eye-drop-users',
    title: 'Stocking stuffers for people who use eye drops',
    description:
      'Small, useful things for the stocking of someone who uses eye drops, and one placement mistake to avoid when a stocking hangs by the fireplace.',
    category: 'seasonal',
    body: [
      {
        p: `The trick with stocking stuffers is small and actually used. For someone who goes through eye drops, a spare bottle fits that brief nicely: a {size} bottle of Quell slips easily into the toe.`,
      },
      { h: 'Ideas that pair well' },
      {
        list: [
          'A spare bottle of the drops they already use, or a bottle of Quell if they’re open to trying it.',
          'A microfiber cloth for glasses or sunglasses.',
          'A small travel pouch to keep a bottle with them.',
          'A sleep mask, for anyone whose eyes feel tired by bedtime.',
          'A pocket-size notebook for a dose log, if they like keeping track.',
        ],
      },
      { h: 'Mind the fireplace' },
      {
        p: `Stockings often hang right above a fire, and that mantel can get a lot warmer than the room. Quell’s storage line reads “{storage},” so a bottle shouldn’t spend the night in a stocking over a lit hearth. Fill the stocking with everything else and add the bottle on the morning itself, or hang that stocking somewhere cooler.`,
      },
      { h: 'Under the tree is fine' },
      {
        p: `A wrapped bottle under the tree sits at room temperature with everything else, so it can go there whenever you like, as long as the tree isn’t next to a heater vent or a sunny window.`,
      },
      { h: 'A note for the recipient' },
      {
        p: `If it’s their first bottle of Quell, tell them it’s meant to look milky brown. And remind them of the label’s first caution: {warnings}. [Is Quell vegan?](/guides/is-quell-vegan) covers the emu oil if they ask what’s in it.`,
      },
    ],
  },

  {
    slug: 'sending-quell-as-a-gift',
    title: 'How to send Quell as a gift',
    description:
      'Shipping a bottle of Quell straight to someone else: whose details go where at checkout, who gets the emails, and what the package won’t include.',
    category: 'seasonal',
    body: [
      {
        p: `Put their name and address in the shipping fields and your own email address in the email field. The package goes to them; the confirmation, the shipping email and the tracking link come to you, so the surprise isn’t spoiled by a receipt in their inbox.`,
      },
      { h: 'What checkout doesn’t offer' },
      {
        p: `There’s no gift-wrap option and no gift-message box. The bottle arrives in its normal carton, in a normal shipping box. If you want it wrapped or with a card, the easiest route is shipping it to yourself first, then wrapping it and handing it over.`,
      },
      { h: 'Let them know something is coming' },
      {
        p: `An unexpected box from a shop they’ve never heard of can sit unopened, or get mistaken for something someone else ordered. A quick text that a gift is on its way, and that it’s eye drops, makes sure it ends up in the right hands and indoors.`,
      },
      { h: 'Keep the shipping email' },
      {
        p: `It holds the tracking link, and the confirmation email holds the order number. If anything goes wrong on the way, you’re the one with the details needed to sort it out, so don’t delete either until the gift has been opened.`,
      },
      { h: 'Things that still apply' },
      {
        list: [
          'You need to be at least 18 to place the order.',
          'Delivery is within the United States only.',
          'No delivery date is promised, so give yourself room before the occasion.',
          'Damaged, incorrect or broken-seal orders are replaced at no charge within {returnDays} days.',
        ],
      },
      {
        p: `Before ordering, check the egg and bird allergy caution with them. [Ordering for someone else](/guides/ordering-eye-drops-for-someone-else) covers what they should read once it arrives.`,
      },
    ],
  },

  {
    slug: 'if-a-gift-of-quell-is-not-wanted',
    title: 'What if they don’t want the gift?',
    description:
      'If you gave Quell and it turns out they can’t or won’t use it, an unopened bottle can still be refunded. Who calls, the time limit, and what comes back.',
    category: 'seasonal',
    body: [
      {
        p: `If the bottle is still sealed, you can get the product price back. Quell refunds unopened bottles within {returnDays} days of delivery, and nobody has to mail anything back, which saves an awkward trip to the post office for either of you.`,
      },
      { h: 'Who makes the call' },
      {
        p: `Usually you, the buyer, because the order number is in your confirmation email. Call {phone}, {hours}, say the order was a gift, and give the order number and how many unopened bottles you’re asking about.`,
      },
      { h: 'Mind the date' },
      {
        p: `The {returnDays} days run from delivery, not from the day the gift was opened. If you shipped early in December and it sat wrapped until the holiday, some of that time has already gone. Ask soon after the gift is opened if it isn’t going to be used.`,
      },
      { h: 'What isn’t refunded' },
      {
        p: `Original shipping isn’t refunded, and an opened bottle can’t be, because nobody can tell how it was handled. [Why opened drops can’t be returned](/guides/why-opened-eye-drops-cannot-be-returned) explains the reasoning.`,
      },
      { h: 'Common reasons it doesn’t suit' },
      {
        p: `An egg or bird allergy, prescribed drops they shouldn’t mix with anything else, or contact lenses. All three are worth asking about before buying, but if one only comes up afterward, keep the seal intact while you sort it out.`,
      },
      { h: 'If it arrived damaged instead' },
      {
        p: `That’s a replacement, not a refund: report it within {returnDays} days and it’s replaced at no charge. See [what to do if an order arrives damaged](/guides/damaged-order).`,
      },
    ],
  },

  {
    slug: 'eye-drops-for-a-parent-or-grandparent',
    title: 'Giving eye drops to a parent or grandparent',
    description:
      'Buying Quell for an older relative: the questions to ask about their other eye drops, making the label easy to read, and getting it to their door.',
    category: 'seasonal',
    body: [
      {
        p: `Plenty of people notice their eyes feel drier as they get older, so a parent or grandparent can be exactly the person who’d be glad of a bottle. Before you buy, ask whether they already use drops a doctor prescribed.`,
      },
      { h: 'Ask about the drops they already use' },
      {
        p: `Quell’s label doesn’t cover use with other eye drops. If they put anything prescribed in their eyes, they should check with that doctor before adding Quell. A pharmacist can help with over-the-counter combinations, especially if they bring every label along.`,
      },
      { h: 'Make the label easy to read' },
      {
        p: `The carton’s print is small. The [Drug Facts](/drug-facts) page shows the same panel on screen, where it can be zoomed or printed in a larger size and kept with the bottle. Two lines to point out: the directions, “{directions},” and the color, because {milky}.`,
      },
      { h: 'Squeezing the bottle' },
      {
        p: `Some people find small bottles fiddly with stiff fingers. If that’s them, offer to sit with them for the first drop. The label also asks them not to let the tip touch anything: {tip}.`,
      },
      { h: 'Getting it there' },
      {
        p: `Use their name and address at checkout and your own email, so you can follow the package. If they live alone, let them know it’s coming so the box doesn’t sit on the step in the cold.`,
      },
      { h: 'The allergy question' },
      {
        p: `{warnings}. Quell contains emu oil, so check this before you buy, even if it means asking a slightly odd question over dinner. [Ordering for someone else](/guides/ordering-eye-drops-for-someone-else) has the rest.`,
      },
    ],
  },

  {
    slug: 'gifts-for-contact-lens-wearers',
    title: 'Gifts for contact lens wearers',
    description:
      'Shopping for someone who wears contacts? Why Quell may not be the right present for them, and practical alternatives that don’t raise any label questions.',
    category: 'seasonal',
    body: [
      {
        p: `Be careful with eye drops. Quell’s label doesn’t give directions for use with contact lenses, and this site doesn’t guess at an answer, so a bottle could leave a lens wearer with a question for their eye doctor rather than something they can open and use.`,
      },
      { h: 'If they wear lenses only some of the time' },
      {
        p: `Some people wear contacts for sport or special occasions and glasses the rest of the week. Even then, how to use Quell around their lenses is a question for their eye doctor. If they’ve already asked and been told it’s fine, a bottle is a straightforward gift.`,
      },
      { h: 'Ideas that skip the question' },
      {
        list: [
          'A good glasses case for the days they give their eyes a rest from lenses.',
          'A travel kit pouch with room for a lens case and solution.',
          'A desk humidifier for a dry office.',
          'Wraparound sunglasses for wind and glare.',
          'A small mirror for putting lenses in away from home.',
        ],
      },
      { h: 'Things not to buy for them' },
      {
        p: `Lens solution, rewetting drops and lenses themselves are tied to the specific products their eye doctor chose. Unless you know exactly what they use, those are better left to them.`,
      },
      { h: 'If you do give Quell' },
      {
        p: `Tell them the label doesn’t cover lenses, and suggest they ask their eye doctor before using it. [Can I use Quell with contact lenses?](/guides/contact-lenses-and-quell) has what to show that doctor, and the [Drug Facts](/drug-facts) page has the full ingredient list.`,
      },
    ],
  },

  {
    slug: 'buying-quell-for-several-people',
    title: 'Buying Quell for several people at once',
    description:
      'Getting bottles for a few friends or family members? How addresses, shipping costs and free shipping work when one person buys for several.',
    category: 'seasonal',
    body: [
      {
        p: `Each order ships to one address. That leaves two ways to buy for several people, and which one costs less depends on whether you’ll see them in person.`,
      },
      { h: 'One order to you, then hand them out' },
      {
        p: `If you’ll see everyone over the holidays, put all the bottles in one order to your own address. Shipping is charged once per order, and {freeBottles} or more bottles ship free, so three people’s gifts cost no shipping at all. You also get to wrap them yourself.`,
      },
      { h: 'Separate orders to each person' },
      {
        p: `If they live in different places, place one order per address, each with that person’s name and your own email. Each order pays its own shipping unless it reaches {freeBottles} bottles, at which point that order ships free. One bottle on its own pays {shipping}.`,
      },
      { h: 'Keeping track' },
      {
        p: `Every order has its own number and its own confirmation and shipping emails, all sent to you. A quick label in your inbox, or a note of which order number went to whom, saves confusion if one of them asks where theirs is. The [track your order](/orders) page looks each one up separately.`,
      },
      { h: 'Check each person' },
      {
        p: `The egg and bird allergy caution applies to each of them, and so do the questions about contact lenses and prescribed drops. One allergy in the group is a good reason to change that person’s gift, not the whole plan.`,
      },
      {
        p: `[How much is shipping?](/guides/how-much-is-shipping) shows how the charge splits across bottles.`,
      },
    ],
  },

  {
    slug: 'quell-as-a-last-minute-gift',
    title: 'Is Quell a good last-minute gift?',
    description:
      'Thinking of ordering Quell a few days before the holiday? Why the site won’t promise an arrival date, and how to give it on time anyway.',
    category: 'seasonal',
    body: [
      {
        p: `Only if you don’t need the box in hand on the day. The site doesn’t promise delivery dates at any time of year, and December is when packages everywhere move slowest. An order placed a few days before the holiday may well arrive after it.`,
      },
      { h: 'Give the idea now, the bottle later' },
      {
        p: `A gift doesn’t have to be unwrapped to count. Order it, then write on a card that a bottle of Quell is on its way to them, maybe with a printout of the product page so they know what to expect. That works just as well for something that arrives on the twenty-eighth.`,
      },
      { h: 'Ship it to them directly' },
      {
        p: `If it’s going to arrive late anyway, send it straight to their address rather than to yours. That skips a second trip. Enter their name and address at checkout and your own email so you can follow it.`,
      },
      { h: 'What you can follow' },
      {
        p: `The shipping email arrives when the order leaves Brentwood, Tennessee, with a tracking link to the carrier’s own page whenever a number is available. From then on, the carrier’s estimate is the most current one there is.`,
      },
      { h: 'Next year' },
      {
        p: `Order early. [Ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) explains why November is a comfortable time, and an unopened bottle bought early is still refundable within {returnDays} days of delivery if plans change.`,
      },
    ],
  },

  {
    slug: 'eye-drops-as-a-gift-for-a-teenager',
    title: 'Is Quell a good gift for a teenager?',
    description:
      'A teenager complaining about dry eyes from gaming or screens? What Quell’s label says about younger users, and who should decide first.',
    category: 'seasonal',
    body: [
      {
        p: `Talk to their doctor before it becomes a gift. Quell’s label doesn’t give separate directions for children, and it doesn’t set an age at which its directions begin to apply, so this site won’t pick one. A pediatrician or eye doctor can say whether it suits a particular teenager.`,
      },
      { h: 'Why teens bring it up' },
      {
        p: `Long gaming sessions, phones in bed and late nights of streaming all mean long stretches with fewer blinks. If a teenager keeps rubbing their eyes or says they sting, that’s worth mentioning at their next checkup, whether or not drops are involved.`,
      },
      { h: 'Who can order' },
      {
        p: `Only adults. The [terms](/terms) require the buyer to be at least 18, so a teenager can’t order Quell for themselves on this site. A parent can, if their doctor agrees it’s appropriate.`,
      },
      { h: 'If their doctor says yes' },
      {
        p: `Go through the label with them: the directions, “{directions},” the instruction not to touch the tip to anything, and the stop-use section. Keep any spare bottles where younger siblings can’t get at them, because the label says: {swallowed}.`,
      },
      { h: 'Gift ideas that need no sign-off' },
      {
        p: `A timer that reminds them to take breaks, or a comfortable sleep mask, needs no one’s permission.`,
      },
      {
        p: `[Eye drops and children](/guides/eye-drops-and-children) covers what the label does and doesn’t address.`,
      },
    ],
  },

  {
    slug: 'college-care-package-eye-drops',
    title: 'Eye drops in a college care package',
    description:
      'Adding a bottle of Quell to a care package for a college student: shipping to a dorm or campus mailroom, and keeping the bottle in range on the way.',
    category: 'seasonal',
    body: [
      {
        p: `Exam season means late nights, laptops and dry dorm air, so a student who already uses eye drops may be glad to find a bottle in their care package. If the student is an adult who has used Quell before, it’s an easy add.`,
      },
      { h: 'Shipping straight to campus' },
      {
        p: `Use the student’s full name exactly as the mailroom knows it, and put the dorm, room number or campus box on the apartment line at checkout. Many campuses route all packages through a central mailroom, so the address format they publish is the one to copy. Your email goes on the order, so tracking comes to you.`,
      },
      { h: 'Packing it yourself' },
      {
        p: `If you’re building the box at home, ship the Quell order to yourself first, then pack it. Keep the bottle away from anything that could leak on it, and remember the box may sit in a cold truck or a warm mailroom for a while. The label’s range is {storage}.`,
      },
      { h: 'A note for the student' },
      {
        p: `Tell them to pick it up promptly, let it reach room temperature, and look at it before using it. The Do not use line reads: {doNotUse}. And the milky brown look is normal.`,
      },
      { h: 'Other things for the box' },
      {
        list: [
          'Earplugs and a sleep mask for a noisy hall.',
          'A small desk humidifier, if their dorm allows one.',
          'Snacks for late study sessions.',
          'A pouch to carry the drops in a backpack.',
        ],
      },
      {
        p: `Shipping is within the US only. [Getting the address right](/guides/getting-the-address-right) covers apartment and suite lines in more detail.`,
      },
    ],
  },

  {
    slug: 'quell-black-friday-and-holiday-deals',
    title: 'Does Quell have Black Friday deals?',
    description:
      'Looking for a Quell Black Friday or Cyber Monday code? There isn’t one. How a holiday order costs less anyway, and why to skip coupon sites.',
    category: 'seasonal',
    body: [
      {
        p: `No. There’s no Black Friday sale, no Cyber Monday code and no promo code box at checkout. The price on the buy panel is the same for everyone, in November and in June.`,
      },
      { h: 'How a holiday order costs less' },
      {
        p: `By buying more than one bottle per order. Shipping is a flat {shipping} on a single bottle, two bottles share the same charge, and {freeBottles} or more ship free. A holiday order that covers a gift and your own supply often reaches free shipping without trying.`,
      },
      { h: 'About those coupon sites' },
      {
        p: `Around Black Friday, coupon sites post codes for practically every shop, including ones that have never issued any. A “Quell Black Friday code” from one of them won’t do anything here. Skip the pop-ups and email sign-ups.`,
      },
      { h: 'Watch out for lookalike shops' },
      {
        p: `Deal season is also when copycat stores show up with prices that look too good to be true. [Is quelldrop.com the official Quell site?](/guides/is-quelldrop-the-official-quell-site) explains how to tell you’re in the right place.`,
      },
      { h: 'Health account funds' },
      {
        p: `If you have money left in an FSA as the year winds down, it may be a better saving than any coupon. See [spending FSA money before the year ends](/guides/spending-fsa-money-before-year-end).`,
      },
      { h: 'Checking the price' },
      {
        p: `Prices can change without notice, as the [terms](/terms) say, so the [buy panel](/#buy) always has the current one.`,
      },
    ],
  },

  {
    slug: 'spending-fsa-money-before-year-end',
    title: 'Spending FSA money before the year ends',
    description:
      'Many FSA plans have a year-end deadline. Over-the-counter drugs like Quell can be bought with FSA funds; what to check with your plan before the cutoff.',
    category: 'seasonal',
    body: [
      {
        p: `If you have a flexible spending account, December is often when people notice money left in it. Since 2020, over-the-counter medicines can be paid for with FSA funds without a prescription, and Quell is an over-the-counter drug.`,
      },
      { h: 'Know your plan’s deadline' },
      {
        p: `FSAs are generally use-it-or-lose-it, but plans differ. Some end on December 31; some offer a grace period into the next year; some let a limited amount carry over. Your plan administrator can tell you which applies and when the last eligible purchase date is.`,
      },
      { h: 'The date that counts' },
      {
        p: `Ask whether your plan goes by the order date or the delivery date. The confirmation email shows the date you paid. If your plan goes by delivery, order early in December, since the site doesn’t promise a delivery date.`,
      },
      { h: 'HSAs are different' },
      {
        p: `Money in a health savings account doesn’t expire at year end, so there’s no rush to spend it. It can still be used for over-the-counter medicines whenever you need them.`,
      },
      { h: 'Paying and claiming' },
      {
        p: `Whether a particular FSA card goes through on the payment page depends on the card and the plan. If it’s declined, pay another way and claim it back, if your plan allows that. Keep the confirmation email; it lists the product, subtotal, shipping and total.`,
      },
      { h: 'Stocking up sensibly' },
      {
        p: `A bottle runs about a month at the labeled dose. Buying a few months’ worth before the deadline is reasonable; buying far more than you’ll use before the expiration date isn’t. [HSA, FSA and eye drops](/guides/hsa-fsa-and-eye-drops) has the general rules.`,
      },
    ],
  },

  {
    slug: 'ordering-eye-drops-early-for-the-holidays',
    title: 'Ordering eye drops early for the holidays',
    description:
      'Why November is a comfortable time to order Quell for December, what the site does and doesn’t promise about delivery, and how early orders stay flexible.',
    category: 'seasonal',
    body: [
      {
        p: `Order in November if you want Quell in hand for the holidays. The site doesn’t promise delivery dates, and the weeks before Christmas are the busiest of the year for shipping, so leaving it until mid-December is a gamble.`,
      },
      { h: 'Why early costs nothing' },
      {
        p: `An unopened bottle can be refunded within {returnDays} days of delivery, without sending it back, so buying early doesn’t lock you in. If plans change, or the person you bought for turns out to have a supply already, the sealed bottle is still refundable for a good while after it arrives.`,
      },
      { h: 'Your own supply too' },
      {
        p: `Holiday weeks are when routines slip and errands get forgotten. If your own bottle is getting low, adding one to the gift order means you won’t be hunting for drops during a visit, and it may tip the order into free shipping at {freeBottles} bottles.`,
      },
      { h: 'Where to have it sent' },
      {
        p: `If you’ll be away, send it to wherever you’ll be when it lands. [Shipping Quell to a holiday address](/guides/shipping-to-a-holiday-address) covers sending it to family.`,
      },
      { h: 'Following it' },
      {
        p: `The confirmation email arrives when payment goes through, and the shipping email when it leaves, with a tracking link when a number is available. The [track your order](/orders) page also shows its status from the order number and your email.`,
      },
      { h: 'Storing it until the day' },
      {
        p: `Keep it somewhere within the label’s range, {storage}, out of children’s reach, and not in a garage or car trunk with the other hidden presents.`,
      },
    ],
  },

  {
    slug: 'shipping-to-a-holiday-address',
    title: 'Shipping Quell to a holiday address',
    description:
      'Spending the holidays with family? How to have Quell delivered to where you’ll be, what to put on the label, and who should watch for the package.',
    category: 'seasonal',
    body: [
      {
        p: `You can ship to any address in the United States, so if you’ll be at a relative’s house for the holidays, put that address in the shipping fields at checkout. Your own email stays on the order, so the tracking still comes to you.`,
      },
      { h: 'Whose name goes on it' },
      {
        p: `Yours, if you’ll be there to receive it. If the household might not recognize your name on a box, or the mail carrier might not, add “c/o” and the host’s name on the apartment line, like “c/o Pat Lee.”`,
      },
      { h: 'Tell the host' },
      {
        p: `Let them know a small box is coming for you, so it gets brought inside and set aside rather than opened by mistake or left on the step. A package that sits outside on a cold night can drift below the label’s range, {storage}.`,
      },
      { h: 'Timing' },
      {
        p: `No delivery date is promised, so order well before you leave. If it arrives before you do, the host can keep it in a drawer at room temperature until you get there.`,
      },
      { h: 'Your saved address afterward' },
      {
        p: `Checkout remembers the last address you used in this browser. Next time you order, check it’s back to your home address before paying, or the bottle goes to the holiday house again.`,
      },
      { h: 'If something goes wrong' },
      {
        p: `If you spot a mistake in the address after paying, call {phone} as soon as you can. [What if I entered the wrong shipping address?](/guides/wrong-shipping-address) explains why speed matters.`,
      },
    ],
  },

  {
    slug: 'visiting-family-with-eye-drops',
    title: 'Visiting family with eye drops',
    description:
      'Bringing Quell to a relative’s house for the holidays: packing it, keeping it in range, keeping your routine, and a house full of curious kids.',
    category: 'seasonal',
    body: [
      {
        p: `Pack the bottle in the bag you keep with you, not the suitcase that goes in the trunk or the hold, and give it a safe spot as soon as you arrive. Holiday visits break routines, so a little planning keeps your drops on schedule.`,
      },
      { h: 'Keeping it in range' },
      {
        p: `Guest rooms can be chilly and living rooms near the fire can be warm. Quell’s range is {storage}, so a bedside drawer away from radiators and space heaters is usually the right spot. A windowsill isn’t.`,
      },
      { h: 'Small children in the house' },
      {
        p: `A bottle left on a nightstand or a bathroom counter is easy for a grandchild or a young cousin to find. The label asks you to keep it out of children’s reach, and adds: {swallowed}. Keep it zipped in your bag or on a high shelf for the whole visit.`,
      },
      { h: 'Keeping your routine' },
      {
        p: `The directions are the same on vacation as at home: {directions}. Tying doses to meals helps when every day looks different, since holiday days still tend to have breakfast, lunch and dinner.`,
      },
      { h: 'Bring a spare' },
      {
        p: `If you’re away more than a week or two, pack a sealed spare. Finding your usual drops in a strange town during the holidays isn’t always easy, and Quell is sold online, so you’d have to wait for a delivery.`,
      },
      { h: 'Sharing a bottle' },
      {
        p: `Don’t, even with family. Once a tip has touched one person’s eye it shouldn’t go near anyone else’s, which is part of why the label says: {tip}. More in [traveling with eye drops](/guides/traveling-with-eye-drops).`,
      },
    ],
  },

  {
    slug: 'winter-heating-and-dry-eyes',
    title: 'Winter heating and dry eyes',
    description:
      'Why eyes often feel drier once the heating comes on: what furnaces and space heaters do to indoor air, and small changes around the house.',
    category: 'seasonal',
    body: [
      {
        p: `Cold air holds little moisture to begin with, and heating it makes the air in a room feel drier still. So eyes that were fine in October can start feeling dry or scratchy by December, without anything else changing.`,
      },
      { h: 'Where it’s worst' },
      {
        p: `Close to the source. Sitting right by a forced-air vent, a space heater or a fireplace puts warm, dry air straight onto your face. So does the car heater on full, aimed at the driver’s seat.`,
      },
      { h: 'Small changes that help the room' },
      {
        list: [
          'Point vents and car heater outlets away from your face.',
          'Move a favorite chair a few feet away from the heater.',
          'Run a humidifier in the room you spend most time in, and clean it as the maker says.',
          'Turn the thermostat down a little at night.',
        ],
      },
      { h: 'Where Quell comes in' },
      {
        p: `The label’s Uses read: {uses}. Quell is designed to reinforce the oil layer of the tear film to help reduce moisture loss, which is the layer that slows evaporation when the air is dry. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains it.`,
      },
      { h: 'Keep the bottle away from the heat too' },
      {
        p: `The same radiator that dries the air can warm a bottle past the top of the label’s range, {storage}. Keep it in a drawer, not on a radiator shelf or the mantel.`,
      },
      { h: 'If it doesn’t settle' },
      {
        p: `Dry air is a common reason for eyes to feel uncomfortable, not the only one. The label says when to stop and see a doctor: {stopUse}`,
      },
    ],
  },

  {
    slug: 'ski-trips-and-dry-eyes',
    title: 'Ski trips, cold wind and dry eyes',
    description:
      'Wind, altitude and cold on the slopes can leave eyes feeling dry. Goggles, where to carry your drops, and keeping the bottle out of the freezing cold.',
    category: 'seasonal',
    body: [
      {
        p: `Mountains combine three things that dry the eyes: wind, thin dry air at altitude, and cold. Add speed on the way down and heated lodges in the evening, and a ski week can be hard on eyes that already run dry.`,
      },
      { h: 'Goggles first' },
      {
        p: `Well-fitted goggles block most of the wind before it reaches your eyes, on the lift as well as on the way down. Wraparound sunglasses work on milder days.`,
      },
      { h: 'Where to carry the bottle' },
      {
        p: `Not in an outer pocket or a backpack left on a rack outside. Below freezing, a bottle there drops well below the bottom of the label’s range, {storage}. An inside chest pocket keeps it close to body heat, or leave it at the lodge and use it at lunch.`,
      },
      { h: 'If it got very cold' },
      {
        p: `Let it come back to room temperature and look at it before the next drop. The label’s Do not use line reads: {doNotUse}. If it looks different from usual, don’t use it.`,
      },
      { h: 'Using drops outdoors' },
      {
        p: `Take your gloves off and find a sheltered spot before you open it, so you don’t touch the tip with a glove or drop the cap in the snow. The label’s instruction is plain: {tip}.`,
      },
      { h: 'Evenings in the lodge' },
      {
        p: `Heated lodges and condos tend to be very dry. Keep the bottle away from the fireplace and the boot dryer. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) covers the same causes in everyday life.`,
      },
    ],
  },

  {
    slug: 'holiday-screen-time-and-dry-eyes',
    title: 'Holiday screen time and dry eyes',
    description:
      'Movie marathons, video calls with relatives and new gadgets: why eyes can feel dry after a holiday spent on screens, and how to build in breaks.',
    category: 'seasonal',
    body: [
      {
        p: `Time off work doesn’t always mean time off screens. A new tablet, a game console, a run of holiday movies and video calls with relatives far away can add up to more screen time than a working week, and eyes can feel it by the evening.`,
      },
      { h: 'What’s going on' },
      {
        p: `When you concentrate on a screen you blink less, and the tear film has longer to evaporate between blinks. Add a warm, heated living room, and the eyes dry a little faster still.`,
      },
      { h: 'Building in breaks' },
      {
        list: [
          'Every so often, look at something across the room for a little while.',
          'Pause between episodes instead of letting the next one autoplay.',
          'Take video calls from a chair that isn’t next to the heater.',
          'Put the console controller down at the end of each level or match.',
        ],
      },
      { h: 'Screens in bed' },
      {
        p: `Scrolling in a dark bedroom tends to run long. If your eyes feel tired by the time you put the phone down, that’s a sign to wind down earlier rather than to push through.`,
      },
      { h: 'Your routine on lazy days' },
      {
        p: `Days without an alarm can lose their usual landmarks, which makes doses easy to skip. The directions are {directions}, so linking them to meals, or to the first cup of coffee, keeps them on track.`,
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side in more detail.`,
      },
    ],
  },

  {
    slug: 'planning-your-eye-drop-supply-for-the-new-year',
    title: 'Planning your eye drop supply for the new year',
    description:
      'A January check on your eye drops: how many bottles you went through, expiration dates on your spares, and ordering ahead without overdoing it.',
    category: 'seasonal',
    body: [
      {
        p: `The start of the year is a good moment for a quick look in the medicine cabinet. Count what you have, check the dates, and work out how much you actually used last year, so the next order is the right size.`,
      },
      { h: 'Count what you used' },
      {
        p: `Your confirmation emails are a record of every order. Add up the bottles and compare with the months you used them. At the labeled dose a bottle runs about a month, but your own number is what to plan around.`,
      },
      { h: 'Check the spares' },
      {
        p: `Look at the expiration date on every sealed bottle and move the earliest to the front. Throw out anything past its date, or any bottle that has changed color; the label’s Do not use line reads: {doNotUse}. [How to dispose of eye drops](/guides/how-to-dispose-of-eye-drops) covers getting rid of them.`,
      },
      { h: 'Ordering ahead' },
      {
        p: `Ordering {freeBottles} bottles at a time ships free and covers roughly a season at the labeled dose. Buying much more than that ties up money in bottles that may near their date before you open them.`,
      },
      { h: 'If your needs changed' },
      {
        p: `If you found yourself wanting drops more often than the directions allow, or you’re still uncomfortable despite using them, that’s worth a visit to an eye doctor early in the year. [Questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) can help you prepare.`,
      },
      { h: 'A new FSA year' },
      {
        p: `If your flexible spending account resets in January, a new balance is available for over-the-counter medicines. Check your plan’s rules before you count on it.`,
      },
    ],
  },
]
