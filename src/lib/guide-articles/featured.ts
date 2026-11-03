import type { Guide } from '@/lib/guide-types'

/**
 * The ten cornerstone guides: longer, and listed first on /guides.
 *
 * Read the note at the top of `lib/guides.ts` before adding to these. Every
 * product statement here is already on the site; label wording arrives through
 * `{tokens}` so it cannot drift from the carton.
 */
export const FEATURED_GUIDES: Guide[] = [
  {
    slug: 'how-to-buy-eye-drops-online-safely',
    title: 'How to buy eye drops online safely',
    description:
      'What to check before you buy eye drops online: who the seller is, the full Drug Facts panel, the returns policy, and where your card details go.',
    category: 'ordering',
    featured: true,
    body: [
      {
        p: `Buying eye drops online is ordinary now, and the checks that matter take about a minute. They come down to four questions: who is selling it, whether you can read the whole label before paying, what happens if something goes wrong, and where your card details end up. Here is how to answer each one, using this site as the worked example.`,
      },
      { h: 'Find out who the seller actually is' },
      {
        p: `A legitimate seller gives you its name, a mailing address and a phone number that somebody answers. On this site that is {company}, at {address}. The phone line is {phone}, {hours}. The same details sit in the footer of every page and on [About us](/about).`,
      },
      {
        p: `A listing with no company name, or nothing but a contact form, leaves you nobody to call when a parcel goes missing or a bottle arrives cracked. That alone is a reason to keep looking.`,
      },
      { h: 'Read the whole label before you pay' },
      {
        p: `Every over-the-counter drug sold in the U.S. carries a Drug Facts panel, and an online listing should let you read all of it before checkout, not only once the box turns up. It tells you what the drop is for, what is in it, how to use it and when to stop.`,
      },
      {
        p: `Quell’s panel is reproduced on the [Drug Facts](/drug-facts) page, word for word from the carton. Its Uses section reads: {uses}. When a seller says more about a product than the product’s own label does, read that as a warning about the seller, not as good news about the drop.`,
      },
      { h: 'Check the parts that apply to you' },
      {
        p: `Two parts of a label deserve a careful read even if you skim the rest. The warnings, because they can rule a product out for you — Quell’s says: {warnings}. And the directions, because they tell you how quickly you will get through a bottle: {directions}.`,
      },
      {
        p: `If you already use other eye drops, wear contact lenses, or are buying for a child, ask your eye doctor or pharmacist before ordering. A seller is not the right person to answer those questions, and a good one will say so.`,
      },
      { h: 'Know the returns policy before you need it' },
      {
        p: `Eye drops are not like shoes. A bottle that has left the seller’s control cannot be confirmed sterile, so opened drops generally cannot go back, and that is the rule here. Quell’s policy in one line is {returns}: unopened bottles in their original packaging can come back within {returnDays} days of delivery for a refund of the product price. Original shipping is not refunded.`,
      },
      {
        p: `A good policy also covers the parcel that arrives in bad shape. This one does: if an order arrives damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days and it is replaced at no charge. The full wording is in the [terms](/terms).`,
      },
      { h: 'Know where your card details go' },
      {
        p: `Look for a checkout that hands payment to a named, established processor. Here, card details are entered directly with Authorize.net and never pass through or rest on this site’s servers, according to the [privacy policy](/privacy). The shop keeps a payment reference and whether the charge went through.`,
      },
      {
        p: `The same policy says the site uses no advertising trackers or third-party cookies and does not sell personal information. Both are worth looking for wherever you shop.`,
      },
      { h: 'A short checklist' },
      {
        list: [
          'A company name, address and phone number you can find without hunting.',
          'The complete Drug Facts panel, readable before you pay.',
          'Warnings that do not rule the product out for you.',
          'A written returns policy that covers damaged parcels.',
          'Card entry handled by a named payment processor.',
        ],
      },
      {
        p: `Quell meets each of these, and you can [see prices and buy](/#buy) whenever you are ready. If something here is unclear, call {phone} before you order rather than after.`,
      },
    ],
  },

  {
    slug: 'what-does-preservative-free-mean',
    title: 'What does preservative-free mean on eye drops?',
    description:
      'Preservative-free means the formula contains no preservative. What preservatives do in eye drops, why some people avoid them, and how to check a label.',
    category: 'formula',
    featured: true,
    body: [
      {
        p: `It means exactly what it says: the formula contains no preservative. Quell is preservative-free, and because its label lists every ingredient, you can confirm that yourself instead of taking the front of the box on trust.`,
      },
      { h: 'What a preservative does in an eye drop' },
      {
        p: `A preservative is an ingredient added to stop microbes growing in a solution that will be opened and used over weeks. Plenty of multi-use eye drops contain one. Benzalkonium chloride is a common example, and it shows up in the inactive ingredients of many drops that do use a preservative.`,
      },
      { h: 'Why some people look for drops without one' },
      {
        p: `Preservatives such as benzalkonium chloride are a common source of irritation for people using drops several times a day. That is the main reason preservative-free drops exist as a category, and it is why Quell leaves them out entirely.`,
      },
      {
        p: `Frequency is the point. Quell’s directions are {directions}, every day. An ingredient you might never notice in an occasional drop is one your eyes meet six times a day at that rate, which is why people who use drops on a schedule tend to read the inactive list more carefully than anyone.`,
      },
      { h: 'How to check a label yourself' },
      {
        p: `Go to the Drug Facts panel and find the Inactive ingredients section. It lists everything in the bottle that is not an active ingredient, and a preservative would appear there. Quell’s reads: {inactives}.`,
      },
      {
        p: `You can read that list yourself, or take it to a pharmacist if you want a second opinion on any ingredient in it. The front of a carton tells you what a maker wants you to notice first; the panel is the full account, and it is the part to rely on if the two ever seem to disagree.`,
      },
      { h: 'Preservative-free still needs care' },
      {
        p: `A solution with no preservative needs the same sensible handling as any other drop. Quell’s When using section says: {tip}. The home page spells out that this includes your eye and your fingers.`,
      },
      {
        p: `The label also gives one reason not to use a bottle at all. Its Do not use line reads: {doNotUse}. The drop is milky brown when it is right, so the thing to watch for is a change from how it looked when it arrived.`,
      },
      {
        p: `And storage matters: {storage}. Following those instructions is part of using any eye drop, preserved or not.`,
      },
      { h: 'If your eyes are sensitive' },
      {
        p: `If you have reacted to an eye drop before, or you use several products, the most useful thing you can do is bring the labels to your eye doctor or pharmacist and ask which ingredients to avoid. Quell’s label carries one specific caution of its own worth knowing before you order: {warnings}.`,
      },
      { h: 'What preservative-free does not tell you' },
      {
        p: `It describes one thing a formula leaves out. It says nothing about what the drop is for, which is the job of the Uses section. For Quell, that reads: {uses}.`,
      },
      {
        p: `For the rest of the panel, see [how to read a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label). For more on the preservative this formula leaves out, the guide to [benzalkonium chloride](/guides/benzalkonium-chloride-in-eye-drops) covers it, and the [full panel](/drug-facts) is always one click away.`,
      },
    ],
  },

  {
    slug: 'how-to-read-an-eye-drop-drug-facts-label',
    title: 'How to read an eye drop Drug Facts label',
    description:
      'A section-by-section walk through the Drug Facts panel on an over-the-counter eye drop, using Quell’s own label as the example.',
    category: 'label',
    featured: true,
    body: [
      {
        p: `Over-the-counter drugs in the U.S. share one Drug Facts layout, with the sections in the same order, so once you can read one panel you can read them all. This guide works through it a section at a time with Quell’s label as the example. The complete panel is on the [Drug Facts](/drug-facts) page.`,
      },
      { h: 'Active ingredients' },
      {
        p: `The first section names the ingredients that do the drug’s job, each with its strength and its purpose. Quell has three: {actives}. The first two are listed as lubricants and the third as an emollient.`,
      },
      {
        p: `The percentage beside each name is its concentration in the solution. The purpose is the label’s own one-word summary of why the ingredient is there.`,
      },
      { h: 'Uses' },
      {
        p: `Uses states what the product is for, in its maker’s approved words. Quell’s reads: {uses}. When a website or an advert claims more than this section does, believe the label.`,
      },
      { h: 'Warnings' },
      {
        p: `The warnings are usually the longest part, broken into labeled pieces. Quell’s open with a general caution: {warnings}. Then come the subsections:`,
      },
      {
        list: [
          'Do not use: {doNotUse}.',
          'When using this product: {tip}.',
          'Stop use and ask a doctor if: the situations in which you should stop and get advice.',
          'Keep out of reach of children: {swallowed}.',
        ],
      },
      {
        p: `The stop-use part is the one to know without looking. In sentence form: {stopUse}`,
      },
      { h: 'Directions' },
      {
        p: `Directions give the dose and how often to take it. Quell’s: {directions}. That is three drops a day in each eye, six altogether. If you are unsure whether directions apply to you, ask a pharmacist before you open the bottle, not after.`,
      },
      { h: 'Other information' },
      {
        p: `This section collects practical details. Quell has two. The first, {milky}, saves a good deal of worry, because a milky brown drop looks unusual to anyone used to clear ones. {appearance}`,
      },
      {
        p: `The second is storage: {storage}.`,
      },
      { h: 'Inactive ingredients' },
      {
        p: `Everything else in the bottle is listed here, alphabetically. Quell’s list has {inactiveCount} entries: {inactives}. If you have allergies, this is the list to check, together with the warnings above.`,
      },
      { h: 'Questions or comments' },
      {
        p: `Many panels end with a phone number for questions. Quell’s maker can be reached on {phone}, {hours}. That line can help with the product and your order; it cannot give medical advice, which is a job for your doctor or pharmacist.`,
      },
      { h: 'Read it twice' },
      {
        p: `Read the label online before you buy, and again on the carton when the box arrives. The panel printed on the product you receive is the one that applies if it ever differs from a website, and the [terms](/terms) say so in as many words.`,
      },
    ],
  },

  {
    slug: 'what-are-lubricating-eye-drops',
    title: 'What are lubricating eye drops?',
    description:
      'Lubricating eye drops are over-the-counter drops made with lubricant ingredients. What is in them, what their labels say they are for, and how Quell is built.',
    category: 'choosing',
    featured: true,
    body: [
      {
        p: `Lubricating eye drops are over-the-counter drops whose active ingredients are lubricants. They are often called artificial tears, and they are what most people mean by eye drops for dryness. Quell is one of them: the full name on its carton is {brand} Preservative-Free Lubricating Eye Drops.`,
      },
      { h: 'What makes a drop a lubricating drop' },
      {
        p: `It comes down to the active ingredients and the purpose the label gives them. Quell’s panel lists {actives}. The first two carry the purpose “lubricant.” The third, light mineral oil, is listed as an emollient: an oily ingredient that softens and coats.`,
      },
      {
        p: `Glycerol and polysorbate 80 are used in other lubricating drops as well, which is one reason panels from different brands can look similar at a glance. The differences tend to sit in the concentrations, the inactive ingredients, and whether a preservative is included.`,
      },
      { h: 'What their labels say they are for' },
      {
        p: `The Uses section is where a lubricating drop says what it does, and the wording is usually modest. Quell’s reads: {uses}. On this site that is summarized as relief for dryness, irritation and itching.`,
      },
      {
        p: `Anything beyond the Uses section is marketing, and on an over-the-counter drug it should never contradict the panel. If it does, go with the panel.`,
      },
      { h: 'Water and oil' },
      {
        p: `Most drops top up the water layer of the tear film. Quell’s formula is designed to reinforce the eye’s natural lipid (oil) layer instead — the outermost barrier of the tear film, responsible for minimizing evaporation of the watery layer beneath it.`,
      },
      {
        p: `That design is why the formula carries an emollient and natural oils alongside its lubricants, and why it looks milky brown rather than clear. {appearance} There is more on this in [the tear film’s oil layer, explained](/guides/the-tear-films-oil-layer).`,
      },
      { h: 'How they are used' },
      {
        p: `Directions vary from brand to brand, so the only ones that matter are on the bottle in your hand. Quell’s are {directions}. The panel adds one handling rule: {tip}.`,
      },
      { h: 'Who should check first' },
      {
        p: `Quell’s label opens its warnings with this: {warnings}. The caution exists because the formula contains emu oil. If that applies to you, ask your doctor before ordering.`,
      },
      {
        p: `If you use prescribed eye drops, wear contact lenses, or are thinking about drops for a child, ask too. The label does not give directions for those situations.`,
      },
      { h: 'When a lubricating drop is not the answer' },
      {
        p: `Quell’s label covers dryness and irritation, and that is all. It is not a substitute for an eye exam. {stopUse} Sudden vision loss, eye pain or an eye injury call for emergency care straight away, not a drop.`,
      },
      { h: 'Buying them online' },
      {
        p: `Lubricating drops do not need a prescription, so you can order them directly. Quell ships anywhere in the United States for a flat {shipping}, and free on {freeBottles} bottles or more. [See prices](/#buy), or read [how to buy eye drops online safely](/guides/how-to-buy-eye-drops-online-safely) first.`,
      },
    ],
  },

  {
    slug: 'do-you-need-a-prescription-for-eye-drops',
    title: 'Do you need a prescription for eye drops?',
    description:
      'Some eye drops need a prescription and many do not. How to tell which is which, and why Quell can be ordered online without one.',
    category: 'choosing',
    featured: true,
    body: [
      {
        p: `Not always. Many eye drops are sold over the counter and need no prescription, while others can only be dispensed with one. Quell is over the counter: you can order it on this site with no prescription and no pharmacy counter involved.`,
      },
      { h: 'How to tell which kind you are looking at' },
      {
        p: `Over-the-counter drugs carry a Drug Facts panel, the standardized box listing active ingredients, uses, warnings and directions. Prescription drops come with prescribing information and a pharmacy label instead. If a product has a Drug Facts panel, it is sold over the counter.`,
      },
      {
        p: `Whether a drop needs a prescription depends on its active ingredients and what it is meant for. Lubricating drops, whose actives are lubricants, are generally over the counter. Quell’s panel is on the [Drug Facts](/drug-facts) page, and its Uses section reads: {uses}.`,
      },
      {
        p: `Where a drop sits in a store is not the test. Some over-the-counter products are kept near the pharmacy counter, and prescription rules also differ between countries, so a drop sold freely in one place can need a prescription in another. The panel on the box is what tells you.`,
      },
      { h: 'What over the counter means for you' },
      {
        p: `An over-the-counter product is one its label says you can use on your own, by following the directions and warnings. That puts the reading on you. For Quell it means {directions}, and it means knowing the caution that opens the warnings: {warnings}.`,
      },
      { h: 'Why ordering online is simple' },
      {
        p: `With no prescription involved, there is nothing to send, verify or transfer. You choose how many bottles you want, enter a shipping address, and pay on the payment provider’s secure page. There is no account to create, either: checkout works as a guest.`,
      },
      {
        p: `The site asks that buyers be at least 18, under the [terms](/terms), and it ships within the United States only.`,
      },
      { h: 'Paying with health account funds' },
      {
        p: `Since 2020, over-the-counter medicines can be paid for with HSA and FSA funds without a prescription; the CARES Act changed that rule. Whether a particular plan reimburses a particular product is up to the plan administrator, so check with yours. The [HSA and FSA guide](/guides/hsa-fsa-and-eye-drops) has the details.`,
      },
      { h: 'When you should still talk to a doctor' },
      {
        p: `No prescription does not mean no doctor. If you already use prescribed eye drops, ask the prescriber before adding another product. The same goes for contact lens wearers and anyone thinking of using drops for a child, because Quell’s label gives no directions for either.`,
      },
      {
        p: `The label is explicit about when to stop and get advice: {stopUse}`,
      },
      {
        p: `And it is not a substitute for an eye exam. If something about your eyes has changed and you do not know why, that is a question for an eye doctor, whatever you end up buying.`,
      },
      { h: 'The short answer' },
      {
        p: `For prescription-only drops, yes. For over-the-counter lubricating drops like Quell, no. You can [order it here](/#buy), and it is posted from Brentwood, Tennessee, to anywhere in the United States.`,
      },
    ],
  },

  {
    slug: 'how-to-store-eye-drops',
    title: 'How to store eye drops',
    description:
      'Where to keep a bottle of eye drops, the temperature range printed on Quell’s label, and the signs that a bottle should not be used.',
    category: 'using',
    featured: true,
    body: [
      {
        p: `Find the storage line on the label and follow it; it is the only instruction written for your particular bottle. Quell’s is short: {storage}. That is ordinary room temperature, which in most homes means a cupboard, a drawer or a bag, and not the refrigerator.`,
      },
      { h: 'The range in everyday terms' },
      {
        p: `The bottom of the range is cooler than most rooms but warmer than the inside of a refrigerator, which normally runs well below it. The top of the range is a warm day, and it is easy to go past in places that trap heat: a parked car, a sunny windowsill, a mailbox in summer.`,
      },
      {
        p: `None of those is a good home for a bottle. A kitchen drawer away from the stove, or a bedside drawer, keeps it in range without any thought.`,
      },
      { h: 'Keep the tip clean' },
      {
        p: `The label’s handling rule matters as much as temperature: {tip}. That includes your eye and your fingers. Recap the bottle after each use, and keep it somewhere it will not knock around loose with keys or coins.`,
      },
      { h: 'Keep it away from children' },
      {
        p: `Drug labels say this for good reason, and Quell’s adds what to do if it goes wrong: {swallowed}. At home, a high shelf or a closed cabinet does the job. In a handbag or backpack, an inside zip pocket is better than an open one.`,
      },
      { h: 'Know what it should look like' },
      {
        p: `{milky}. That is how it is meant to look, because of its natural oil-based ingredients. {appearance}`,
      },
      {
        p: `What the label asks you to watch for is change. Its Do not use line reads: {doNotUse}. Compare the bottle with how it looked when it arrived. If the color has changed, do not use it.`,
      },
      { h: 'At work and in your bag' },
      {
        p: `At work, a desk drawer away from a sunny window or a radiator does the job. A bottle in a handbag or gym bag goes through every temperature you do, so take it out of a bag left in a hot car or a cold locker.`,
      },
      { h: 'Spare bottles' },
      {
        p: `If you order several at once, keep the unopened ones in the same conditions as the one in use. There is a practical reason to leave spares sealed until you need them, too: unopened bottles in their original packaging can be returned within {returnDays} days of delivery, and opened ones cannot.`,
      },
      { h: 'Away from home' },
      {
        p: `The storage rules travel with you. Pack the bottle somewhere it will stay in range, out of direct sun. [Traveling with eye drops](/guides/traveling-with-eye-drops) covers trips in more detail, and [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) covers the most common mistake.`,
      },
      { h: 'The quick version' },
      {
        list: [
          '{storage}.',
          '{tip}.',
          'Keep it out of reach of children.',
          'Do not use it if the color changes from how it arrived.',
          'Leave spare bottles sealed until you need them.',
        ],
      },
      {
        p: `The full label is on the [Drug Facts](/drug-facts) page, and the same storage line is printed on the carton.`,
      },
    ],
  },

  {
    slug: 'how-to-use-eye-drops-as-directed',
    title: 'How to use eye drops as directed',
    description:
      'What Quell’s directions say, how to read “in each eye,” and the label’s instructions on the tip, the color and when to stop.',
    category: 'using',
    featured: true,
    body: [
      {
        p: `Follow the Directions section of the label exactly; it was written for that product and no other. Quell’s reads: {directions}. Everything below is about reading that line correctly, and about the instructions that sit around it on the panel.`,
      },
      { h: 'One drop, three times a day, each eye' },
      {
        p: `“In each eye” makes the dose a per-eye dose. Three times a day in both eyes is six drops a day altogether, not three.`,
      },
      {
        p: `The label does not name times of day. If you need to fit doses around something specific, such as other eye drops or an upcoming procedure, ask your eye doctor or pharmacist how the directions fit.`,
      },
      { h: 'Before each drop' },
      {
        p: `The When using section gives one instruction: {tip}. The home page says it more plainly — that includes your eye and your fingers. The aim is to keep the solution clean for every dose after this one.`,
      },
      {
        p: `Glance at the color while you are at it. {milky}, which is expected. The Do not use line reads: {doNotUse}. If it no longer looks the way it did when it arrived, leave it.`,
      },
      { h: 'What the label leaves to your doctor' },
      {
        p: `Some common questions are not answered on Quell’s label at all: whether to use it with contact lenses, how to combine it with other eye drops, and whether to use it for a child. When a label is silent, the right person to ask is a pharmacist or your eye doctor, with the carton in your hand.`,
      },
      { h: 'Using more, or less' },
      {
        p: `The directions are the directions. Extra drops are not part of them. If three a day in each eye is not giving you the relief you hoped for, that is worth acting on rather than working around, and the label says how: {stopUse}`,
      },
      {
        p: `The panel also carries a general caution worth reading once: {warnings}.`,
      },
      { h: 'Building it into your day' },
      {
        p: `It can help to tie doses to things you already do at fixed points, like breakfast or the end of the workday, so a dose is not left to memory. Whatever routine suits you, the numbers on the label stay the same.`,
      },
      { h: 'Keeping the bottle in good order' },
      {
        p: `How a bottle is kept is part of using it properly: {storage}. More in [how to store eye drops](/guides/how-to-store-eye-drops). If you are away from home, the same rules apply on the road, covered in [traveling with eye drops](/guides/traveling-with-eye-drops).`,
      },
      { h: 'Finishing a bottle' },
      {
        p: `At six drops a day, a {size} bottle will not last indefinitely, and it helps to know roughly when you will need the next one. [How long a bottle lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) works through the arithmetic.`,
      },
      { h: 'The full panel' },
      {
        p: `The complete label, including every ingredient, is on the [Drug Facts](/drug-facts) page. If you have not ordered yet, the [buy panel](/#buy) shows prices and lets you choose how many bottles.`,
      },
    ],
  },

  {
    slug: 'traveling-with-eye-drops',
    title: 'Traveling with eye drops',
    description:
      'Packing eye drops for a trip: the temperature range on Quell’s label, keeping the tip clean on the road, and ordering ahead before you leave.',
    category: 'using',
    featured: true,
    body: [
      {
        p: `Bring the bottle you are using, keep it inside the label’s temperature range, and keep the tip clean. Those three things matter more than anything else about traveling with drops. Quell’s storage line is: {storage}.`,
      },
      { h: 'Packing it' },
      {
        p: `Pack the bottle where it is shielded from heat and from being crushed. A closed pouch inside a carry-on works better than a jacket pocket, or the bottom of a tote where it rattles around with keys.`,
      },
      {
        p: `Bring the carton if there is room. It carries the full Drug Facts panel, which is handy if you need to show someone what the product is, or want to reread the warnings away from home.`,
      },
      {
        p: `If the trip is longer than your bottle has left, pack a sealed spare. Used as directed, a bottle goes in roughly a month, and buying a replacement on the road is not an option when the product is sold online.`,
      },
      { h: 'Heat is the main risk' },
      {
        p: `The top of Quell’s range is a warm day. A car parked in the sun, a beach bag or a tent can all run hotter than the label allows, and they do it quickly.`,
      },
      {
        p: `If a bottle has spent time somewhere too hot, look at it before your next dose. The Do not use line reads: {doNotUse}.`,
      },
      { h: 'Wind, altitude and dry air' },
      {
        p: `Trips are full of the conditions that dry eyes out. Wind and altitude outdoors, air conditioning and central heat indoors — all of it pulls moisture off your eyes faster than you can replace it.`,
      },
      {
        p: `None of that changes the directions, which stay the same wherever you are: {directions}.`,
      },
      { h: 'Flying' },
      {
        p: `Airlines and airport security set their own rules for liquids, and those rules change from time to time, so look them up before you pack. Small eye drop bottles are generally easy to carry on, but the rules in force at your airport are the ones that count.`,
      },
      { h: 'Keeping the tip clean in transit' },
      {
        p: `Hotel counters, tray tables and car consoles are all surfaces, and the label’s rule applies to every one: {tip}. Clean hands are harder to come by in transit than at home, so where you can, plan doses for places with a sink.`,
      },
      { h: 'Ordering before you go' },
      {
        p: `The site ships within the United States only and does not promise a delivery date, so order with time to spare rather than counting on a parcel arriving the day before you leave. Every order gets an email when it ships, with a tracking number when one is available, and you can check on it at any time from the [order tracking page](/orders).`,
      },
      {
        p: `{freeBottles} bottles or more ship free, which can make sense ahead of a long trip. Unopened spares in their original packaging can be returned within {returnDays} days of delivery if you end up not needing them.`,
      },
      { h: 'If something goes wrong while you are away' },
      {
        p: `{stopUse} That holds whether you are at home or not. For a medical emergency, call the local emergency number. For questions about an order, call {phone}, {hours}.`,
      },
    ],
  },

  {
    slug: 'what-happens-after-you-order',
    title: 'What happens after you order Quell',
    description:
      'From checkout to your door: the confirmation email, packing in Brentwood, the shipping email with tracking, and how to look up an order.',
    category: 'shipping',
    featured: true,
    body: [
      {
        p: `You get an email straight away confirming the order, a second email when it ships, and a page where you can check on it whenever you like. Here is the whole sequence, step by step.`,
      },
      { h: 'At checkout' },
      {
        p: `Checkout works as a guest, so there is no account to create. You enter an email address, your name, a shipping address and a phone number, then pay on the payment provider’s secure page. Under the [terms](/terms), you authorize the charge when you submit the order.`,
      },
      {
        p: `If the shop cannot fill an order for any reason, the authorization is released or refunded in full.`,
      },
      { h: 'The confirmation email' },
      {
        p: `Once payment goes through, a confirmation email arrives with your order number in the subject line. It lists what you ordered, the subtotal, the shipping, the total and the address the parcel is going to, and it has a button to track the order.`,
      },
      {
        p: `The order number starts with Q- and is followed by eight letters and digits. Keep that email. It is your receipt, and the order number is what you will be asked for if you ever call about the order.`,
      },
      {
        p: `Read the address in it while you are there. If something is wrong — a missing apartment number, an old address the browser remembered — call {phone} straight away, {hours}. The earlier a mistake is raised, the better the chance of catching it before the parcel leaves.`,
      },
      { h: 'Packing and posting' },
      {
        p: `Orders are packed and posted from Brentwood, Tennessee. The site does not publish a delivery window, and the terms are plain that delivery estimates are only estimates, so the thing to watch for is the next email rather than a date.`,
      },
      { h: 'The shipping email' },
      {
        p: `When the parcel leaves, a second email tells you the order has shipped. If a tracking number is available, it is included with a link to follow the parcel on the carrier’s own site. The same email repeats the directions: {directions}.`,
      },
      { h: 'Looking an order up' },
      {
        p: `The [track your order](/orders) page finds an order from its number and the email address used at checkout, both of which are in the confirmation email. If you have an account, signing in shows all your orders in one place.`,
      },
      { h: 'When it arrives' },
      {
        p: `Check the parcel before putting it away. If anything arrives damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days and it will be replaced at no charge.`,
      },
      {
        p: `Then read the label on the carton before the first dose; it is the version that applies to the bottle in your hand. The first bottle can come as a surprise, so it is worth knowing in advance: {appearance}`,
      },
      { h: 'Later on' },
      {
        p: `Some weeks after your order you may get one more email asking whether you are running low, timed to the number of bottles you bought. It is a single reminder and says so. There is no subscription, and nothing is charged unless you choose to order again.`,
      },
      { h: 'If you need help' },
      {
        p: `Call {phone}, {hours}, with your order number to hand. [Before you call](/guides/before-you-call-about-an-order) lists what else is useful to have ready.`,
      },
    ],
  },

  {
    slug: 'the-tear-films-oil-layer',
    title: 'The tear film’s oil layer, explained',
    description:
      'Your tear film has a watery layer with an oil layer on top. What the oil layer does, and why Quell’s formula is built around reinforcing it.',
    category: 'formula',
    featured: true,
    body: [
      {
        p: `The surface of your eye is covered by a thin tear film. Its outermost part is an oil layer, also called the lipid layer, and its job is to slow the evaporation of the watery layer underneath. Quell is designed around that outer layer, which is also where its emu oil comes in.`,
      },
      { h: 'Two layers that matter here' },
      {
        p: `Descriptions of the tear film usually begin with the watery, or aqueous, layer that keeps the surface of the eye moist. Above it sits the lipid layer: the outermost barrier of the tear film, responsible for minimizing evaporation of the aqueous layer.`,
      },
      {
        p: `That oil is made by small glands along the edges of the eyelids, and the oily substance itself is called meibum. [What meibum is](/guides/what-is-meibum) goes into more detail.`,
      },
      { h: 'When the oil layer runs thin' },
      {
        p: `Quell’s carton shows a before and after. Before: {oilBefore}. After: {oilAfter}.`,
      },
      {
        p: `Everyday conditions add pressure. Concentrating on a screen cuts how often you blink, and your tear film evaporates while you stare. Wind and altitude outdoors, and air conditioning and central heat indoors, pull moisture off your eyes faster than you can replace it.`,
      },
      { h: 'Water versus oil' },
      {
        p: `Most drops top up the water layer. Quell reinforces the lipid layer above it, which is what slows evaporation down. The formula is designed to reinforce the eye’s natural lipid layer, and it is rich in bioactive fatty acids and botanical antioxidants, which support a more stable tear film.`,
      },
      {
        p: `That is why it pairs two lubricants with an emollient — light mineral oil — and a set of natural oil-based ingredients, instead of being a plain watery solution.`,
      },
      { h: 'Where emu oil comes in' },
      { p: `{emuOil}` },
      {
        p: `It is also behind the slogan on the box, “give your dry eye the bird,” and it is a large part of why the drop looks the way it does. {appearance}`,
      },
      { h: 'What the label says it is for' },
      {
        p: `The science is the reasoning behind the formula. What the product is officially for is in the Uses section of the Drug Facts panel: {uses}.`,
      },
      {
        p: `Because the formula contains emu oil, the first warning on the panel is worth reading before your first bottle: {warnings}.`,
      },
      { h: 'Who developed it' },
      {
        p: `Quell is a patented formula developed by a physician, built around how the tear film actually fails. It is sold by {company} of Brentwood, Tennessee.`,
      },
      { h: 'Finding out more' },
      {
        p: `If you want to know whether your symptoms fit the pattern of a tear film that evaporates too quickly, the [dry eye self-check](/self-check) takes about ninety seconds. It is not a diagnosis and no substitute for an eye exam. When you are ready, [see prices and buy](/#buy).`,
      },
    ],
  },
]
