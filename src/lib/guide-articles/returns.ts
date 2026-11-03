import type { Guide } from '@/lib/guide-types'

/**
 * Returns, damaged parcels, refunds and contact. See `lib/guides.ts`.
 *
 * Everything here restates /terms §5–§7 and the privacy policy.
 *
 * **From 2026-11-03 unopened bottles are refunded without being sent back**
 * (/terms §7, Phillip's decision). A returned bottle could not be resold —
 * nobody can confirm how it was stored — so collecting it only cost postage.
 * The guides say "refund", not "return", wherever an unopened bottle is meant,
 * so none of them describes a parcel the customer never has to send.
 */
export const RETURNS_GUIDES: Guide[] = [
  {
    slug: 'can-you-return-eye-drops',
    title: 'Can you return eye drops?',
    description:
      'Unopened Quell is refunded within {returnDays} days of delivery, and you keep the bottle. Opened bottles are not refundable. The full rule.',
    category: 'returns',
    body: [
      {
        p: `If it is unopened, you get your money back and do not have to send anything. Change your mind about an unopened bottle of Quell within {returnDays} days of delivery and the product price is refunded. Opened bottles are not refundable.`,
      },
      { h: 'The rule in full' },
      {
        list: [
          'The bottle must be unopened.',
          'Get in touch within {returnDays} days of delivery.',
          'The product price is refunded. Original shipping is not.',
          'Nothing needs to be posted back.',
        ],
      },
      { h: 'Why you keep the bottle' },
      {
        p: `A bottle that has left the shop cannot be confirmed to have been stored as its label requires, so it could never be sold again, sealed or not. Asking you to post it back would cost you time and cost the shop postage, all to collect something that would be thrown away.`,
      },
      { h: 'Why opened bottles are excluded' },
      {
        p: `For health and safety reasons, opened eye drops cannot be refunded, returned or resold. [Why opened eye drops cannot be returned](/guides/why-opened-eye-drops-cannot-be-returned) goes into it.`,
      },
      { h: 'Damaged, wrong, or with a broken seal' },
      {
        p: `That is a separate rule. If an order arrives damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days and it is replaced at no charge.`,
      },
      { h: 'Asking for a refund' },
      {
        p: `Call {phone}, {hours}, with your order number. The [terms](/terms) hold the authoritative wording.`,
      },
    ],
  },

  {
    slug: 'why-opened-eye-drops-cannot-be-returned',
    title: 'Why opened eye drops can’t be returned',
    description:
      'Opened eye drops cannot be returned or resold, because a bottle that has left the seller’s control cannot be confirmed sterile. What that means for you.',
    category: 'returns',
    body: [
      {
        p: `Because nobody can vouch for them afterward. The [terms](/terms) put it this way: for health and safety reasons, opened eye drops cannot be returned or resold, because a bottle that has left the shop’s control cannot be confirmed sterile.`,
      },
      { h: 'It protects the next customer' },
      {
        p: `Eye drops go into eyes. A returned bottle could not go back on sale without the shop knowing what had happened to it: where it was kept, whether the tip touched anything, whether the seal was disturbed. It is the same concern behind the label’s instruction: {tip}.`,
      },
      { h: 'What you can still do' },
      {
        list: [
          'Get a refund on unopened bottles within {returnDays} days of delivery, without sending them back.',
          'Report a damaged or incorrect order, or a broken tamper seal, within {returnDays} days for a free replacement.',
        ],
      },
      { h: 'If Quell did not suit you' },
      {
        p: `Tell us: call {phone}, {hours}, and say what happened. If you had a problem using it, the label is clear about what to do: {stopUse}`,
      },
      { h: 'Avoiding the situation' },
      {
        p: `If you are unsure whether Quell will suit you, start with one bottle. [Ordering a single bottle](/guides/ordering-a-single-bottle) explains the trade-off on shipping.`,
      },
    ],
  },

  {
    slug: 'how-to-return-an-unopened-bottle',
    title: 'Refunds on unopened bottles of Quell',
    description:
      'Changed your mind about an unopened bottle? How the refund works, the time limit, what is refunded, and why nothing needs to be sent back.',
    category: 'returns',
    body: [
      {
        p: `Call {phone}, {hours}, with your order number, and say which unopened bottles you no longer want. If it is within {returnDays} days of delivery, the product price is refunded. You do not need to post anything back.`,
      },
      { h: 'Have this ready' },
      {
        list: [
          'The order number, from your confirmation email.',
          'How many bottles you want refunded.',
          'That they are unopened.',
        ],
      },
      { h: 'What is refunded' },
      {
        p: `The product price of those bottles. Original shipping is not refunded. [What is refunded](/guides/what-is-refunded-on-a-return) sets out each case side by side.`,
      },
      { h: 'When the clock starts' },
      {
        p: `The {returnDays} days count from delivery, not from the day you ordered, so a parcel that took a while to arrive does not eat into your time to decide.`,
      },
      { h: 'What to do with the bottle' },
      {
        p: `It is yours to keep. It cannot go back on sale, because nobody can confirm how it was stored once it left the shop, which is exactly why you are not asked to send it.`,
      },
      { h: 'Not a refund: a replacement' },
      {
        p: `If what you received was damaged, incorrect, or had a broken tamper seal, it is replaced at no charge instead, if you report it within {returnDays} days. Mention it when you call.`,
      },
    ],
  },

  {
    slug: 'what-is-refunded-on-a-return',
    title: 'What is refunded on a Quell order?',
    description:
      'What you get back in each case: unopened bottles you no longer want, orders that cannot be filled, listing mistakes, damaged parcels and opened bottles.',
    category: 'returns',
    body: [
      {
        p: `It depends on why the money is coming back. The terms cover five situations, and each works differently.`,
      },
      { h: 'Unopened bottles you no longer want' },
      {
        p: `A refund of the product price, within {returnDays} days of delivery, and the bottles stay with you. Original shipping is not refunded.`,
      },
      { h: 'An order that cannot be filled' },
      {
        p: `If the shop cannot fill your order, the authorization is released or refunded in full.`,
      },
      { h: 'A listing that was wrong' },
      {
        p: `Where a price or description was wrong, the shop may correct it, or cancel the order and refund you in full, before it ships.`,
      },
      { h: 'Damaged, incorrect, or a broken seal' },
      {
        p: `These are replaced rather than refunded. Contact us within {returnDays} days and the order is replaced at no charge.`,
      },
      { h: 'Opened bottles' },
      {
        p: `Not refundable, for the health and safety reason given in the [terms](/terms). [Why opened drops cannot be returned](/guides/why-opened-eye-drops-cannot-be-returned) explains it.`,
      },
      {
        p: `Keep your confirmation email. It shows the product price and the shipping on separate lines, which is how the refund on an unopened bottle is worked out. Questions about a refund: {phone}, {hours}, with your order number.`,
      },
    ],
  },

  {
    slug: 'damaged-order',
    title: 'What to do if your Quell order arrives damaged',
    description:
      'A crushed box, a leaking bottle or a torn carton: contact us within {returnDays} days and a damaged order is replaced at no charge.',
    category: 'returns',
    body: [
      {
        p: `Contact us within {returnDays} days and it will be replaced at no charge. Call {phone}, {hours}, with your order number.`,
      },
      { h: 'Set a damaged bottle aside' },
      {
        p: `If a bottle is cracked or leaking, do not use it. The label’s handling rule — {tip} — is there to keep the solution clean, and a damaged bottle cannot be relied on to have stayed that way. A replacement costs you nothing.`,
      },
      { h: 'What helps when you call' },
      {
        list: [
          'The order number from your confirmation email.',
          'What is damaged: the outer box, the carton, or the bottle itself.',
          'A photo, taken before you throw any packaging away.',
        ],
      },
      { h: 'Wrong items, or a broken seal' },
      {
        p: `The same rule covers an order that arrives incorrect, or with a broken tamper seal. [Broken tamper seal](/guides/broken-tamper-seal) and [if your order is wrong](/guides/if-your-order-is-wrong) cover those.`,
      },
      { h: 'Look soon after it arrives' },
      {
        p: `The window is {returnDays} days, so open the parcel and check it shortly after delivery rather than when you first reach for a spare.`,
      },
    ],
  },

  {
    slug: 'broken-tamper-seal',
    title: 'What if the tamper seal is broken?',
    description:
      'If a Quell order arrives with a broken tamper seal, contact us within {returnDays} days and it will be replaced at no charge.',
    category: 'returns',
    body: [
      {
        p: `Contact us. An order that arrives with a broken tamper seal is replaced at no charge, as long as you get in touch within {returnDays} days. Call {phone}, {hours}, with your order number.`,
      },
      { h: 'Why the seal matters' },
      {
        p: `A seal shows that a product has not been opened since it was packed. Once it is broken, there is no way to tell what happened to the bottle on the way, which is why the terms put it in the same category as damage.`,
      },
      { h: 'Check before the first dose' },
      {
        p: `Look at the seal when the parcel arrives, not weeks later when you reach for a spare. Every bottle in the order deserves a glance.`,
      },
      { h: 'Until it is sorted out' },
      {
        p: `Keep the bottle and its packaging until you have spoken to us. There is no reason to use it in the meantime, since the replacement costs nothing.`,
      },
      { h: 'If only the outer box is damaged' },
      {
        p: `A dented shipping box with every seal intact is a different question. If the carton or the bottle itself is affected, see [damaged orders](/guides/damaged-order).`,
      },
    ],
  },

  {
    slug: 'if-your-order-is-wrong',
    title: 'What if my Quell order is wrong?',
    description:
      'Too few bottles, or not what you ordered? An incorrect Quell order is replaced at no charge if you contact us within {returnDays} days.',
    category: 'returns',
    body: [
      {
        p: `Call {phone}, {hours}, with your order number. An order that arrives incorrect is replaced at no charge if you contact us within {returnDays} days.`,
      },
      { h: 'Check it against the confirmation' },
      {
        p: `Your confirmation email lists exactly what was ordered and paid for. Compare the parcel with it before calling, so you can say what is missing or different.`,
      },
      { h: 'Remember the default' },
      {
        p: `The buy panel starts at two bottles. If you meant to order one and two arrived, look at the confirmation email: it shows the quantity that was paid for. If it says two, that is what was ordered, and the unopened extra can be refunded within {returnDays} days of delivery, without sending it back.`,
      },
      { h: 'If the confirmation itself looks wrong' },
      {
        p: `If the confirmation email shows a quantity or an address you did not choose, say so when you call. It is the record of what was paid for, so a mistake there is worth raising whether or not the parcel has arrived.`,
      },
      { h: 'Keep everything for now' },
      {
        p: `Hold on to the parcel and its contents until it is sorted out, and leave any extra bottles sealed.`,
      },
      { h: 'Other problems' },
      {
        p: `A damaged parcel or a broken tamper seal falls under the same replacement rule; see [damaged orders](/guides/damaged-order).`,
      },
    ],
  },

  {
    slug: 'how-to-contact-quell',
    title: 'How to contact Quell',
    description:
      'Phone, hours, mailing address and website for Quell’s seller, Aurora Pharmaceuticals, and which questions each is the right route for.',
    category: 'returns',
    body: [
      {
        p: `By phone on {phone}, {hours}. That line handles questions about the product and about orders.`,
      },
      { h: 'Time zones' },
      {
        p: `The hours are Central time. On the East Coast that makes them 10 a.m. to 6 p.m. your time; on the West Coast, 7 a.m. to 3 p.m. Weekends are closed, so a Friday afternoon problem may wait until Monday.`,
      },
      { h: 'By mail' },
      { p: `{company}, {address}.` },
      { h: 'Online' },
      {
        p: `The company’s website is meibum.com. The [About us](/about) page on this site gathers all the contact details in one place.`,
      },
      { h: 'What we can help with' },
      {
        list: [
          'Orders: tracking, damaged parcels and refunds on unopened bottles.',
          'The product: what the label says, the ingredients, storage.',
          'Your information: the privacy policy says requests to access, correct or delete it are made by phone or by mail.',
        ],
      },
      { h: 'What we cannot help with' },
      {
        p: `Medical advice. For a medical emergency, call your local emergency number instead of contacting us, and for whether Quell suits you, ask your doctor or pharmacist. [Order questions vs. medical questions](/guides/order-questions-vs-medical-questions) explains where the line falls, and [before you call](/guides/before-you-call-about-an-order) lists what to have ready.`,
      },
    ],
  },

  {
    slug: 'before-you-call-about-an-order',
    title: 'Before you call about an order',
    description:
      'What to have ready when you call about a Quell order: the order number, the email you used, and a clear note of what went wrong.',
    category: 'returns',
    body: [
      {
        p: `The order number, above all. It is in the subject line of your confirmation email, starting with Q-, and it lets an order be found in seconds. The rest of this list makes the call shorter still.`,
      },
      {
        list: [
          'The order number.',
          'The email address you used at checkout.',
          'The name and shipping address on the order.',
          'What the problem is: missing, damaged, incorrect, a broken seal, or a refund on an unopened bottle.',
          'What the tracking shows, if the parcel has shipped.',
        ],
      },
      { h: 'When to call' },
      {
        p: `{hours}, on {phone}. Outside those hours, the [track your order](/orders) page is available whenever you need it.`,
      },
      { h: 'Keep the evidence' },
      {
        p: `For a damaged or incorrect order, keep the packaging and the bottles until things are sorted out, and take a photo before anything goes in the trash. The window for reporting is {returnDays} days, so a call made in the first week leaves plenty of room.`,
      },
      { h: 'No order number?' },
      {
        p: `Give the name, address and date you ordered instead, and the email address you think you used. [Finding your order number](/guides/finding-your-order-number) may turn it up before you dial.`,
      },
    ],
  },

  {
    slug: 'order-questions-vs-medical-questions',
    title: 'Order questions vs. medical questions',
    description:
      'Who to ask about what: Quell’s phone line for orders and the label, your doctor or pharmacist for your eyes, emergency care when it is urgent.',
    category: 'returns',
    body: [
      {
        p: `Questions about an order, or about what is on the label, come to us. Questions about your eyes go to your doctor or pharmacist. Emergencies go to emergency care.`,
      },
      { h: 'Ask us about' },
      {
        list: [
          'Tracking, delivery and damaged parcels.',
          'Refunds on unopened bottles.',
          'What the label says, the ingredients, and storage.',
        ],
      },
      { h: 'Ask a doctor or pharmacist about' },
      {
        list: [
          'Whether Quell suits you.',
          'Using it with contact lenses or other eye drops, or for a child. The label does not cover these.',
          'Symptoms that have not settled.',
        ],
      },
      { h: 'When to stop and get advice' },
      { p: `The label is explicit: {stopUse}` },
      { h: 'When it is urgent' },
      {
        p: `This site does not provide medical advice. If you have sudden vision loss, eye pain or an eye injury, seek emergency care immediately; for a medical emergency, call your local emergency number rather than us.`,
      },
      {
        p: `Our line is {phone}, {hours}. More on symptoms in [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
  },

  {
    slug: 'getting-a-receipt-for-your-order',
    title: 'Getting a receipt for your Quell order',
    description:
      'Your confirmation email is your receipt, with the order number, items, subtotal, shipping and total. What to do if you have lost it.',
    category: 'returns',
    body: [
      {
        p: `The confirmation email is the receipt. It arrives once payment goes through, with the subject line “Your Quell order #… is confirmed.”`,
      },
      { h: 'What it shows' },
      {
        list: [
          'The order number.',
          'Each item, with its quantity and price.',
          'The subtotal, the shipping and the total.',
          'The address it is being shipped to.',
        ],
      },
      { h: 'For HSA, FSA or expenses' },
      {
        p: `Keep the email, or save it as a PDF from your email program. It names the seller, {company}, along with the date and the amounts, so you can forward or file it wherever you keep receipts. [HSA, FSA and eye drops](/guides/hsa-fsa-and-eye-drops) covers reimbursement.`,
      },
      { h: 'If you have lost it' },
      {
        p: `Search your inbox for “Quell,” including spam and archived folders. If you know the order number, the order can still be found on the [track your order](/orders) page; otherwise, call {phone}, {hours}.`,
      },
      { h: 'How long orders are kept' },
      {
        p: `The privacy policy says order records are kept as long as needed for tax, accounting and product safety recordkeeping, so an order can be traced later even when the email is long gone.`,
      },
    ],
  },

  {
    slug: 'finding-past-orders',
    title: 'How to find a past Quell order',
    description:
      'Looking up an earlier order: the order lookup page for guests, signing in for account holders, and what to do with neither.',
    category: 'returns',
    body: [
      {
        p: `Use the [track your order](/orders) page with the order number and the email you used at checkout. It works for any order, old or new, and needs no account.`,
      },
      { h: 'From the email' },
      {
        p: `The confirmation email has a “Track your order” button that opens the lookup page for that order, which is the quickest way back to it.`,
      },
      { h: 'With an account' },
      {
        p: `Signing in shows all your orders in one place, without needing the numbers, and it works from any device you sign in on.`,
      },
      { h: 'Without the order number' },
      {
        p: `Every email about an order carries it: the confirmation, the shipping notice and the reminder. Search your inbox for “Quell.”`,
      },
      { h: 'Ordered on another device?' },
      {
        p: `Orders are kept by the shop, not in your browser, so the lookup page finds them from any device. What stays on one device is only the cart and the checkout details remembered for next time.`,
      },
      { h: 'Ordering the same again' },
      {
        p: `[How to reorder](/guides/how-to-reorder-quell) covers that. Still stuck finding an order? Call {phone}, {hours}, with the name and address it went to and roughly when you placed it.`,
      },
    ],
  },

  {
    slug: 'what-happens-to-your-information',
    title: 'What happens to your information when you order',
    description:
      'What Quell’s privacy policy says about order details, card data, the cart and checkout details saved in your browser, and selling personal data.',
    category: 'returns',
    body: [
      {
        p: `Your order and shipping details are used to take payment and ship the order, and the [privacy policy](/privacy) says personal information is not sold.`,
      },
      { h: 'What is collected' },
      {
        list: [
          'Order and shipping details: what you ordered and where to send it.',
          'Your IP address, device and browser, recorded in the hosting provider’s server logs and used to rate-limit sign-in and checkout against abuse.',
        ],
      },
      { h: 'What stays on your device' },
      {
        p: `The cart is stored in your own browser and never sent to the shop. For guests, the copy of your checkout details saved for next time stays on your device too, and “Not you? Clear details” on the cart page removes it.`,
      },
      { h: 'Card details' },
      {
        p: `Entered directly with Authorize.net, and never passed through or stored on this site’s servers. The shop keeps a payment reference and the outcome of the charge.`,
      },
      { h: 'Who it is shared with' },
      {
        p: `Service providers for payment, shipping, hosting and email, under contracts limiting their use of it, and regulators where the law requires.`,
      },
      { h: 'No advertising trackers' },
      {
        p: `The site uses no advertising trackers or third-party cookies.`,
      },
      { h: 'Your choices' },
      {
        p: `To access, correct, export or delete what is held about you, call {phone}, {hours}, or write to the address in the policy.`,
      },
    ],
  },

  // The second set of ten, added 2026-11-03.
  {
    slug: 'why-we-do-not-ask-for-bottles-back',
    title: 'Why we don’t ask for unopened bottles back',
    description:
      'Quell refunds unopened bottles without asking for them to be posted back. The reasoning behind that policy, and what it means for you.',
    category: 'returns',
    body: [
      {
        p: `Because a bottle that comes back could never be sold again, so posting it would cost you a trip and cost the shop postage, all to end with the bottle in the trash. Refunding without the parcel skips the waste.`,
      },
      { h: 'Why a sealed bottle still cannot be resold' },
      {
        p: `Quell’s label sets a storage range: {storage}. Once a bottle has left the shop, nobody can confirm it stayed inside that range, whether it sat in a hot car or a cold mailbox on the way back. A drug whose storage cannot be vouched for is not something to put in the next customer’s hands.`,
      },
      { h: 'What it means for you' },
      {
        list: [
          'Change your mind about an unopened bottle within {returnDays} days of delivery and the product price is refunded.',
          'No label to print, no parcel to post, no trip to a drop-off point.',
          'Original shipping is not refunded.',
          'Opened bottles are not refundable, for health and safety reasons.',
        ],
      },
      { h: 'It runs on trust' },
      {
        p: `Nothing comes back to prove a bottle was unopened, so the policy relies on customers telling the truth. That is a trade the shop has chosen to make, because the alternative was making every honest customer pay for a trip to the post office.`,
      },
      { h: 'What to do with the bottle' },
      {
        p: `It is yours. Keep it sealed and in range if you may use it later, or see [how to dispose of eye drops](/guides/how-to-dispose-of-eye-drops). To ask for a refund, call {phone}, {hours}, with your order number.`,
      },
    ],
  },
]
