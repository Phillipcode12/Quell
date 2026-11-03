import type { Guide } from '@/lib/guide-types'

/**
 * Returns, damaged parcels, refunds and contact. See `lib/guides.ts`.
 *
 * Everything here restates /terms §5–§7 and the privacy policy. **Who pays
 * return postage is deliberately never said**, because the terms do not say
 * it — the same gap `structured-data.ts` leaves in the return-policy markup.
 */
export const RETURNS_GUIDES: Guide[] = [
  {
    slug: 'can-you-return-eye-drops',
    title: 'Can you return eye drops?',
    description:
      'Unopened Quell can be returned within {returnDays} days of delivery; opened bottles cannot. The full rule, and what happens with damaged parcels.',
    category: 'returns',
    body: [
      {
        p: `Unopened ones, yes. Quell in its original packaging can be returned within {returnDays} days of delivery for a refund of the product price. Opened bottles cannot be returned.`,
      },
      { h: 'The rule in full' },
      {
        list: [
          'Unopened, in the original packaging.',
          'Within {returnDays} days of delivery.',
          'A refund of the product price. Original shipping is not refunded.',
        ],
      },
      { h: 'Why opened bottles are excluded' },
      {
        p: `For health and safety reasons. A bottle that has left the shop’s control cannot be confirmed sterile, so it cannot be resold, and so it cannot be taken back. [Why opened eye drops cannot be returned](/guides/why-opened-eye-drops-cannot-be-returned) goes into it.`,
      },
      { h: 'Damaged, wrong, or with a broken seal' },
      {
        p: `That is a separate rule from returns. If an order arrives damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days and it is replaced at no charge. Returns are for unopened bottles you no longer want; when something is wrong with the order itself, the replacement rule is the one to use.`,
      },
      { h: 'Starting a return' },
      {
        p: `Call {phone}, {hours}, with your order number. The [terms](/terms) hold the authoritative wording. If you are buying several bottles, leaving the spares sealed until you need them keeps the option open.`,
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
          'Return unopened bottles in their original packaging within {returnDays} days of delivery.',
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
    title: 'How to return an unopened bottle of Quell',
    description:
      'Returning unopened Quell: the conditions, the time limit, what is refunded, and the phone call that starts it.',
    category: 'returns',
    body: [
      {
        p: `Call {phone}, {hours}, with your order number, and say you would like to return unopened bottles. They need to be unopened, in their original packaging, and within {returnDays} days of delivery.`,
      },
      { h: 'Have this ready' },
      {
        list: [
          'The order number, from your confirmation email.',
          'How many bottles you want to return.',
          'That they are unopened and still in their packaging.',
        ],
      },
      { h: 'What is refunded' },
      {
        p: `The product price of the bottles you send back. Original shipping is not refunded. [What is refunded](/guides/what-is-refunded-on-a-return) sets out each case side by side.`,
      },
      { h: 'When the clock starts' },
      {
        p: `The {returnDays} days count from delivery, not from the day you ordered, so a parcel that took a while to arrive does not eat into your time to decide.`,
      },
      { h: 'Keep them sealed in the meantime' },
      {
        p: `Store them the way the label says while the return is arranged — {storage} — and resist opening one to check.`,
      },
      { h: 'Not a return: a replacement' },
      {
        p: `If what you received was damaged, incorrect, or had a broken tamper seal, that is not a return. It is replaced at no charge if you report it within {returnDays} days, so mention it when you call.`,
      },
    ],
  },

  {
    slug: 'what-is-refunded-on-a-return',
    title: 'What is refunded when you return Quell?',
    description:
      'What you get back in each case: unopened returns, orders that cannot be filled, listing mistakes, damaged parcels and opened bottles.',
    category: 'returns',
    body: [
      {
        p: `It depends on why the money is coming back. The terms cover five situations, and each works differently.`,
      },
      { h: 'Unopened bottles you return' },
      {
        p: `A refund of the product price. Original shipping is not refunded. The bottles must be unopened, in their original packaging, and within {returnDays} days of delivery.`,
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
        p: `Keep your confirmation email. It shows the product price and the shipping on separate lines, which is how the amount for an unopened return is worked out. Questions about a refund: {phone}, {hours}, with your order number.`,
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
        p: `The buy panel starts at two bottles. If you meant to order one and two arrived, look at the confirmation email: it shows the quantity that was paid for. If it says two, that is what was ordered, and the unopened extra can be returned within {returnDays} days of delivery.`,
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
          'Orders: tracking, damaged parcels and returns of unopened bottles.',
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
          'What the problem is: missing, damaged, incorrect, a broken seal, or a return.',
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
          'Returning unopened bottles.',
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
]
