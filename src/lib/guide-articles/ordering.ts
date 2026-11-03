import type { Guide } from '@/lib/guide-types'

/** Checkout, payment, quantities and reordering. See `lib/guides.ts`. */
export const ORDERING_GUIDES: Guide[] = [
  {
    slug: 'do-i-need-an-account-to-order',
    title: 'Do I need an account to order Quell?',
    description:
      'No. Checkout on this site is guest checkout by design. What you enter instead, how to find an order later, and what an account adds.',
    category: 'ordering',
    body: [
      {
        p: `No. Checkout here is guest-only by design. You enter an email address, a name, a shipping address and a phone number, pay on the payment provider’s secure page, and that is the whole of it. Nobody is asked to make up a password at the moment they are about to pay, because that step adds friction and nothing else.`,
      },
      { h: 'Finding an order without an account' },
      {
        p: `Everything you need arrives by email. The confirmation email carries your order number, and the [track your order](/orders) page finds the order from that number plus the email address you used at checkout.`,
      },
      { h: 'What the site remembers instead' },
      {
        p: `When you check out as a guest, your name, address, email and phone number are saved in your own browser so you do not have to type them next time. According to the [privacy policy](/privacy), they stay on your device and the shop never receives a copy. A “Not you? Clear details” link on the cart page removes them.`,
      },
      { h: 'What an account adds' },
      {
        p: `An account lets you sign in and see all your orders in one place. It is not needed to buy, to track a parcel, or to get a refund on an unopened bottle.`,
      },
      {
        p: `Ready? [See prices and buy](/#buy), or follow the [step-by-step ordering guide](/guides/how-to-order-quell-step-by-step) for a look at each screen first.`,
      },
    ],
  },

  {
    slug: 'what-checkout-asks-for',
    title: 'What checkout asks for, and why',
    description:
      'The details Quell’s checkout asks for — email, name, address and phone — what each one is used for, and the things it never asks for.',
    category: 'ordering',
    body: [
      {
        p: `Five things: an email address, your name, a shipping address, a phone number, and payment. The card is the only part not entered on this site.`,
      },
      { h: 'Email' },
      {
        p: `The confirmation email and the shipping email go here, and together with your order number it is how the [order lookup page](/orders) finds your order. If an address looks mistyped, checkout suggests a correction, because a receipt sent to a misspelled inbox is one you cannot easily get back.`,
      },
      { h: 'Name and shipping address' },
      {
        p: `Street address, an optional apartment or suite line, city, state and ZIP code. The site ships within the United States only, so the address has to be a U.S. one.`,
      },
      { h: 'Phone number' },
      {
        p: `A phone number is required. The privacy policy lists order and shipping details among what the shop collects, and says they are used to take payment and ship your order.`,
      },
      { h: 'Payment' },
      {
        p: `Card details are entered directly with the payment provider, Authorize.net, on its own secure page. The [privacy policy](/privacy) says they never pass through or rest on this site’s servers.`,
      },
      { h: 'What it never asks for' },
      {
        p: `No password, no account and no prescription. Quell is an over-the-counter drug, so there is nothing to upload and no pharmacy to name.`,
      },
    ],
  },

  {
    slug: 'how-payment-works',
    title: 'How payment works when you order Quell',
    description:
      'Card details go straight to Authorize.net on its own secure page. Why the card form lives elsewhere, and what this site does and does not keep.',
    category: 'ordering',
    body: [
      {
        p: `You pay by card on the payment provider’s secure page, not on a form belonging to this site. Quell’s payments are processed by Authorize.net.`,
      },
      { h: 'Why the card form is somewhere else' },
      {
        p: `Handing card entry to a payment processor means the shop never handles your card number. The privacy policy states that card details never pass through or rest on this site’s servers, and that the shop keeps only a payment reference and the outcome of the charge.`,
      },
      { h: 'What your browser remembers, and what it does not' },
      {
        p: `For guests, the browser remembers your name, address, email and phone so you do not have to retype them. Card details are not among them; they are never saved anywhere on this site. On a shared computer, use “Not you? Clear details” on the cart page.`,
      },
      { h: 'Checking you are on the right page' },
      {
        p: `The payment page belongs to the processor, so its web address will not be quelldrop.com, and that is expected. You reach it from this site’s checkout button. If a payment page ever turns up some other way, by email or text, close it.`,
      },
      { h: 'Questions' },
      {
        p: `For anything about your order’s payment, call {phone}, {hours}. The full account of what is collected is in the [privacy policy](/privacy).`,
      },
    ],
  },

  {
    slug: 'when-is-my-card-charged',
    title: 'When is my card charged?',
    description:
      'You authorize the charge when you submit the order. What the amount is made of, what happens if an order cannot be filled, and price changes.',
    category: 'ordering',
    body: [
      {
        p: `When you submit the order on the payment page. That is the moment the [terms](/terms) name, and it fixes the amount: the bottles plus shipping, in U.S. dollars, as the cart showed it.`,
      },
      { h: 'What the amount is made of' },
      {
        p: `The bottles, plus shipping — a flat {shipping} below {freeBottles} bottles and nothing at {freeBottles} or more. The cart shows the delivered total before you pay, and the confirmation email repeats the subtotal, shipping and total afterward.`,
      },
      { h: 'If the order cannot be filled' },
      {
        p: `If the shop cannot fill an order, the authorization is released or refunded in full. You are not left paying for something that is not coming.`,
      },
      { h: 'If a listing was wrong' },
      {
        p: `Prices, stock levels and descriptions can occasionally be wrong. Where a listing is wrong, the terms allow the shop to correct it, or to cancel the order and refund you in full, before it ships.`,
      },
      { h: 'Price changes' },
      {
        p: `Prices may change without notice. A change made after you order does not alter the amount you authorized. The [buy panel](/#buy) always shows the current price.`,
      },
      {
        p: `Questions about a charge: {phone}, {hours}, with the order number from your confirmation email.`,
      },
    ],
  },

  {
    slug: 'mistyped-email-at-checkout',
    title: 'What if I mistype my email at checkout?',
    description:
      'Checkout suggests a fix when an email address looks mistyped. What to do if one slips through anyway and your confirmation never arrives.',
    category: 'ordering',
    body: [
      {
        p: `Checkout tries to catch it first. When an address looks like a common slip, such as a misspelled email provider, it suggests the likely correction before you pay. It is worth a second look; the suggestion is there because a receipt sent to the wrong address is hard to recover.`,
      },
      { h: 'Why the address matters' },
      {
        p: `It receives the confirmation email, with your order number, and later the shipping email with tracking. The [order lookup page](/orders) also needs the email used at checkout together with the order number.`,
      },
      { h: 'If no confirmation arrives' },
      {
        p: `Look in your spam or junk folder first, then in any other inboxes you use. If it is in none of them, the address may have been typed wrong.`,
      },
      { h: 'What to do next' },
      {
        p: `Call {phone}, {hours}. Have the name and shipping address you used ready, and the day you ordered, since without the email you will not have an order number to give.`,
      },
      { h: 'Next time' },
      {
        p: `As a guest, your details are remembered in the browser, so a saved typo will be offered again. Check the email field before paying, or use “Not you? Clear details” on the [cart](/cart) page to start fresh.`,
      },
    ],
  },

  {
    slug: 'checkout-remembers-your-details',
    title: 'Why checkout remembers your details',
    description:
      'Guest details are saved in your own browser so you do not retype them. What is kept, what never is, and how to clear it on a shared computer.',
    category: 'ordering',
    body: [
      {
        p: `To save you typing them again. When you check out as a guest, your name, address, email and phone number are saved in your own browser, on your own device. Order again from the same browser and checkout fills them in.`,
      },
      { h: 'Where it is kept' },
      {
        p: `On your device and nowhere else. The [privacy policy](/privacy) says the shop never receives a copy of what is stored there. Card details are never saved anywhere on this site, so they are not part of it.`,
      },
      { h: 'Shared and family computers' },
      {
        p: `Whoever uses the same browser after you will see your details offered. That is why a “Not you? Clear details” link appears on the cart page whenever the form has been filled from an earlier visit. Clearing your browser’s site data does the same job.`,
      },
      { h: 'Different devices' },
      {
        p: `Because nothing is stored on the shop’s side, your phone and your laptop each remember separately. Ordering from a new device means typing the details once more, after which that device remembers them too.`,
      },
      { h: 'Before you pay' },
      {
        p: `Remembered details are only as good as the last time you entered them. If you have moved, or the order is going somewhere else, change the address before paying. [How to reorder](/guides/how-to-reorder-quell) covers the rest.`,
      },
    ],
  },

  {
    slug: 'how-many-bottles-to-order',
    title: 'How many bottles of eye drops should I order?',
    description:
      'Working out how many bottles to order: the dose on Quell’s label, how fast that uses a bottle, and where free shipping starts.',
    category: 'ordering',
    body: [
      {
        p: `Start from the directions: {directions}. That is six drops a day. Exactly how long a bottle lasts depends on drop size, which varies, but at that dose a {size} bottle runs out in weeks rather than months.`,
      },
      { h: 'The shipping side' },
      {
        p: `Shipping is a flat {shipping} for one or two bottles and free on {freeBottles} or more, so the cost of getting each bottle to you falls as the quantity rises. The buy panel starts at two bottles; that is a default, not a minimum.`,
      },
      { h: 'A rough way to decide' },
      {
        list: [
          'One bottle if you are trying Quell for the first time.',
          'Two if you already know you will keep using it for the next month or two.',
          'Three or more if you use it daily and want free shipping.',
        ],
      },
      { h: 'Do not overbuy' },
      {
        p: `Spare bottles need the same conditions as the one in use: {storage}. Only unopened bottles can be refunded, within {returnDays} days of delivery. If you are torn, two is a sensible middle.`,
      },
      {
        p: `The [buy panel](/#buy) shows the delivered price at every quantity, and [how long a bottle lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) goes through the arithmetic.`,
      },
    ],
  },

  {
    slug: 'ordering-a-single-bottle',
    title: 'Can I order just one bottle of Quell?',
    description:
      'Yes. The buy panel defaults to two bottles, but one is always available. What one bottle costs to ship, and when two or three make more sense.',
    category: 'ordering',
    body: [
      {
        p: `Yes. The buy panel starts with two bottles selected, but that is a default, not a minimum. Choose 1 from the quantity menu and it adds one.`,
      },
      { h: 'Why the default is two' },
      {
        p: `At one bottle, the flat {shipping} shipping charge is carried by a single bottle. At two, the same charge is shared, so each bottle costs less to reach your door. The panel shows that difference as a saving against buying bottles one at a time.`,
      },
      { h: 'What a single bottle costs' },
      {
        p: `The bottle price plus {shipping} shipping. The panel shows the delivered figure before anything goes in the cart, and the cart repeats it before you pay.`,
      },
      { h: 'When one is the right call' },
      {
        p: `If you have never used Quell and want to see how it suits you, one bottle is a reasonable start. If it does suit you, [reordering](/guides/how-to-reorder-quell) takes a couple of clicks and your details are remembered in the browser.`,
      },
      {
        p: `One thing to know first: the drop is milky brown, not clear. {appearance}`,
      },
    ],
  },

  {
    slug: 'ordering-eye-drops-for-someone-else',
    title: 'Ordering eye drops for someone else',
    description:
      'Sending Quell to a parent, partner or friend: entering their address, what they should read before using it, and the allergy caution to check first.',
    category: 'ordering',
    body: [
      {
        p: `Enter their name and address as the shipping details at checkout and your own email address, so the confirmation and tracking come to you. Nothing else changes.`,
      },
      { h: 'Check one thing before you send it' },
      {
        p: `Quell’s warnings open with: {warnings}. The formula contains emu oil. If the person you are buying for has an egg or bird allergy, talk to them, and ideally to their doctor, before ordering.`,
      },
      { h: 'What they should read' },
      {
        p: `Over-the-counter drugs are meant to be used by following the label, so make sure they read it, on the carton or on the [Drug Facts](/drug-facts) page. The directions read “{directions},” and the stop-use section tells them when to get advice.`,
      },
      { h: 'If they use other drops or wear lenses' },
      {
        p: `Quell’s label does not cover use alongside contact lenses or other eye drops. If either applies, they should ask their eye doctor or pharmacist first.`,
      },
      { h: 'Who can buy, and where it goes' },
      {
        p: `The person paying must be at least 18, and the site ships within the United States only. A parcel that arrives damaged or incorrect is replaced at no charge if reported within {returnDays} days, so ask them to open it and check soon after it arrives.`,
      },
    ],
  },

  {
    slug: 'what-the-cart-saving-means',
    title: 'What the saving in your cart means',
    description:
      'The saving shown in your Quell cart compares your order with buying the same bottles one at a time. It is a comparison, not a discount code.',
    category: 'ordering',
    body: [
      {
        p: `It compares what you are about to pay with what the same bottles would cost bought one at a time, each with its own shipping. It is not a discount and nothing is deducted. It is the difference shipping makes.`,
      },
      { h: 'Why single bottles are the comparison' },
      {
        p: `One bottle on its own carries a flat {shipping} shipping charge. Two bottles share the same charge, and {freeBottles} or more ship free. So the more bottles in one order, the less shipping each one carries.`,
      },
      { h: 'Why not the shelf price?' },
      {
        p: `Measuring against the bottle price alone would make a multi-bottle order look like a markup, because a shelf price does not include getting the bottle to you. One bottle, delivered, is the fair reference, so that is the one used.`,
      },
      { h: 'Where you see it' },
      {
        p: `The buy panel on the [home page](/#buy) shows the delivered price and the saving as you change the quantity. The cart repeats it, naming the number of bottles it is comparing against.`,
      },
      { h: 'What you actually pay' },
      {
        p: `The cart’s delivered total: subtotal plus shipping. That is the figure on the payment page and in your confirmation email. There are no codes to apply on top; [promo codes](/guides/quell-coupons-and-promo-codes) explains why.`,
      },
    ],
  },

  {
    slug: 'is-quell-a-subscription',
    title: 'Is Quell a subscription?',
    description:
      'No. Every Quell order is a one-time purchase. Nothing renews, nothing is charged later, and you reorder only if and when you want to.',
    category: 'ordering',
    body: [
      {
        p: `No. Every order is a one-time purchase. The buy panel says so, and there is no recurring billing on this site: you are charged once, for the order you place, and not again unless you place another.`,
      },
      { h: 'What that means for you' },
      {
        p: `Nothing to cancel, no renewal date to remember, and no card left on file to be charged later. Card details are entered on the payment provider’s page and never saved on this site.`,
      },
      { h: 'What you might hear afterward' },
      {
        p: `Some weeks after an order you may get one email asking whether you are running low. It is a single reminder, timed to the number of bottles you ordered, and it says it is the only one. Ignoring it costs nothing. [The reorder reminder](/guides/the-reorder-reminder-email) explains how it works.`,
      },
      { h: 'The nearest thing to a standing order' },
      {
        p: `Ordering several bottles at once. {freeBottles} or more ship free, and unopened bottles keep in the same conditions as the one you are using: {storage}.`,
      },
      {
        p: `When you want more, order the same way as the first time. [How to reorder](/guides/how-to-reorder-quell) covers the quickest route.`,
      },
    ],
  },

  {
    slug: 'how-to-reorder-quell',
    title: 'How to reorder Quell',
    description:
      'Reordering takes a couple of clicks: the buy panel, your remembered details, and the payment page. Plus how to look up what you ordered last time.',
    category: 'ordering',
    body: [
      {
        p: `Go to the [buy panel](/#buy), choose a quantity, and check out. If you use the same browser as last time and checked out as a guest, your name, address, email and phone will already be filled in.`,
      },
      { h: 'Checking what you ordered before' },
      {
        p: `Your last confirmation email lists it. The [track your order](/orders) page will also find a past order from its number and the email used, and if you have an account, signing in shows every order.`,
      },
      { h: 'Before you pay' },
      {
        p: `Look over the remembered details. If you have moved, or the order is going somewhere else this time, change the address before paying. A saved typo in the email field will be offered again too.`,
      },
      { h: 'How many this time' },
      {
        p: `{freeBottles} bottles or more ship free; below that it is a flat {shipping}. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back, so adding a spare carries little risk.`,
      },
      { h: 'If the reminder brought you here' },
      {
        p: `The “Running low?” email links straight to the buy panel. It is the only reminder sent for an order, and whether to reorder is entirely up to you.`,
      },
    ],
  },

  {
    slug: 'the-reorder-reminder-email',
    title: 'Why did I get a “Running low?” email?',
    description:
      'After an order, Quell sends one reminder timed to the bottles you bought. What it is, why it comes only once, and why no subscription is behind it.',
    category: 'ordering',
    body: [
      {
        p: `Because you ordered Quell a while ago, and the reminder is timed to when the bottles you bought may be getting low. It is sent once per order, and it says so at the bottom: it is the only reminder you will get for that order.`,
      },
      { h: 'How the timing works' },
      {
        p: `The estimate scales with how many bottles you ordered, since two bottles last twice as long as one at the labeled dose. Only orders that were paid or shipped get one, so a canceled or unfinished order will not.`,
      },
      { h: 'It asks rather than assumes' },
      {
        p: `The email says “if you’re getting near the end.” People use drops at different rates, share a bottle, or stop, so it is written as a question. If you still have plenty, there is nothing to do.`,
      },
      { h: 'Replying' },
      {
        p: `The email invites a reply if something was not right, or if you stopped using it. That reply is read by a person, and it is genuinely useful to hear.`,
      },
      { h: 'No subscription' },
      {
        p: `Nothing is charged by the reminder and nothing renews. Reordering means placing a new order, from the [buy panel](/#buy), whenever you choose. [Is Quell a subscription?](/guides/is-quell-a-subscription) has more.`,
      },
    ],
  },

  {
    slug: 'do-you-have-to-be-18-to-order',
    title: 'Do you have to be 18 to order Quell?',
    description:
      'Yes. The terms require buyers to be at least 18. What that means for families, and the label’s instruction about keeping drops from children.',
    category: 'ordering',
    body: [
      {
        p: `Yes. The [terms](/terms) say you must be at least 18 years old to buy from this site, and the privacy policy says the site does not knowingly create accounts for anyone younger.`,
      },
      { h: 'Buying for a household' },
      {
        p: `An adult can order for anyone at home, and the shipping address can be anywhere in the United States. The age rule applies to the person paying.`,
      },
      {
        p: `What the label covers, though, is use by the person following it. Quell’s label does not give separate directions for children, so if you are thinking of using it for a child, ask a pediatrician or eye doctor first.`,
      },
      { h: 'Keeping it away from children' },
      {
        p: `Every bottle carries the same instruction to keep it out of reach of children, and Quell’s label adds: {swallowed}. A closed cabinet or a high shelf does the job at home; in a bag, an inside pocket.`,
      },
      { h: 'Where to read more' },
      {
        p: `[Eye drops and children](/guides/eye-drops-and-children) covers what the label does and does not say. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
  },

  {
    slug: 'buying-eye-drops-online-vs-in-store',
    title: 'Buying eye drops online vs. in a store',
    description:
      'What changes when you order eye drops online instead of in a store: reading the label first, delivery, returns, and no pharmacy counter.',
    category: 'ordering',
    body: [
      {
        p: `The drop is the same; what surrounds it is different. Online you can read the whole label at leisure before buying, but you wait for delivery and sort out refunds or problems by phone. Quell is sold online and posted to you, so this is the route for it.`,
      },
      { h: 'You read the label first, not in an aisle' },
      {
        p: `In a store you read the box standing up. Online, a listing should show the full Drug Facts panel before you pay, and Quell’s is on the [Drug Facts](/drug-facts) page word for word. Take your time with it; that is the advantage of buying this way.`,
      },
      { h: 'There is no counter to ask at' },
      {
        p: `For Quell there is no pharmacy counter and no prescription: it is ordered here and posted to you. That also means no pharmacist at the point of sale, so if you want to know whether it suits you, ask your own pharmacist or eye doctor before ordering.`,
      },
      { h: 'Delivery instead of pickup' },
      {
        p: `Orders are posted from Brentwood, Tennessee, and shipping is a flat {shipping} unless you order {freeBottles} or more. There is no delivery promise, so order before you run out rather than on the day you do.`,
      },
      { h: 'Returns work differently' },
      {
        p: `Change your mind about an unopened bottle within {returnDays} days of delivery and it is refunded without being sent back; opened ones are not refundable. A parcel that arrives damaged is replaced at no charge if you report it within the same window.`,
      },
    ],
  },

  {
    slug: 'where-to-buy-quell',
    title: 'Where can I buy Quell?',
    description:
      'Quell is sold on this site and shipped anywhere in the United States. Why there is no local stock to pick up, and how ordering works wherever you live.',
    category: 'ordering',
    body: [
      {
        p: `Right here. Quell is ordered online and posted from Brentwood, Tennessee, to anywhere in the United States.`,
      },
      { h: 'Is there a store near me?' },
      {
        p: `There is no local stock, and nothing here is a shop you can walk into. The bottle, the price and the shipping are the same wherever the order goes. [Where we ship](/eye-drops) lists the cities and states with a page of their own, but any U.S. address can order.`,
      },
      { h: 'Who sells it' },
      {
        p: `Quell is sold by {company}, which owns the Quell trademark. The company’s address and phone number are on [About us](/about) and in the footer of every page.`,
      },
      { h: 'How ordering works' },
      {
        p: `Choose a quantity on the [buy panel](/#buy), check out as a guest, and pay on the payment provider’s secure page. Shipping is {shipping} for one or two bottles and free on {freeBottles} or more.`,
      },
      { h: 'The same price wherever you are' },
      {
        p: `There is no city pricing and no regional stock, so the delivered price on the buy panel is the same whether the address is around the corner from Brentwood or across the country.`,
      },
      { h: 'Before you order' },
      {
        p: `The full label and the [dry eye self-check](/self-check) are both free to read first. The site ships within the United States only.`,
      },
    ],
  },

  {
    slug: 'is-quelldrop-the-official-quell-site',
    title: 'Is quelldrop.com the official Quell site?',
    description:
      'Yes. quelldrop.com is run by Aurora Pharmaceuticals, LLC, which sells Quell and owns the trademark. How to check that for yourself.',
    category: 'ordering',
    body: [
      {
        p: `Yes. This site is operated by {company}, which sells Quell and owns the Quell trademark, the “Quiet the Storm” tagline and the eye mark. The [terms](/terms) and the [privacy policy](/privacy) both name the company.`,
      },
      { h: 'How to check' },
      {
        list: [
          'The company name, mailing address and phone number are in the footer of every page: {address}, {phone}.',
          'The panel on the Drug Facts page matches the carton.',
          'Card payments are handled by Authorize.net on its own secure page.',
          'The terms and privacy policy name the same company and give the same address.',
        ],
      },
      {
        p: `A genuine shop is consistent about who it is. If the name on a site, the name on its policies and the name on the carton do not match, that is the moment to stop and check.`,
      },
      { h: 'The manufacturer' },
      {
        p: `The bottle names its manufacturer, Aurora Pharmaceuticals, Inc, also of Brentwood, Tennessee.`,
      },
      { h: 'meibum.com' },
      {
        p: `The footer links to meibum.com, the company’s website, which is listed on [About us](/about) as the place to find it online.`,
      },
      { h: 'If something looks wrong' },
      {
        p: `If you find Quell offered somewhere with claims its label does not support, or a page that looks like this one at a different address, call {phone}, {hours}, and say where you saw it.`,
      },
    ],
  },

  {
    slug: 'quell-coupons-and-promo-codes',
    title: 'Are there Quell coupons or promo codes?',
    description:
      'Quell does not use promo codes. How an order costs less instead: shipping shared across bottles, and free shipping at three or more.',
    category: 'ordering',
    body: [
      {
        p: `No. There is no promo code box at checkout and no coupon scheme. The price on the buy panel is the price for everyone.`,
      },
      { h: 'How an order costs less' },
      {
        p: `Through shipping. One bottle carries a flat {shipping} charge; two bottles share the same charge; {freeBottles} or more ship free. The buy panel and the cart show the saving against buying the same bottles one at a time.`,
      },
      { h: 'Be wary of coupon sites' },
      {
        p: `Coupon sites list codes for shops that have never issued one. A Quell code from one of them will not work here, and it is not worth handing over an email address to find that out.`,
      },
      { h: 'No subscribe-and-save price either' },
      {
        p: `Every order is a one-time purchase, so there is no subscription discount to look for. [Is Quell a subscription?](/guides/is-quell-a-subscription) explains.`,
      },
      { h: 'Health account funds' },
      {
        p: `If you have an HSA or FSA, over-the-counter medicines can be paid for with those funds without a prescription. See [HSA, FSA and eye drops](/guides/hsa-fsa-and-eye-drops).`,
      },
      { h: 'Checking the current price' },
      {
        p: `Prices may change without notice, as the [terms](/terms) say, so the [buy panel](/#buy) is always the place to see the current one.`,
      },
    ],
  },

  {
    slug: 'hsa-fsa-and-eye-drops',
    title: 'Can I use HSA or FSA funds for eye drops?',
    description:
      'Since 2020, over-the-counter medicines like Quell can be paid for with HSA and FSA funds without a prescription. What to check with your plan.',
    category: 'ordering',
    body: [
      {
        p: `Generally, yes. Since 2020, over-the-counter medicines can be bought with health savings account (HSA) and flexible spending account (FSA) funds without a prescription; the CARES Act made that change. Quell is an over-the-counter drug.`,
      },
      { h: 'Check with your plan' },
      {
        p: `Each plan administrator decides what it reimburses and what records it wants. Ask yours before relying on it, especially if the plan keeps its own list of eligible products.`,
      },
      { h: 'Paying with an HSA or FSA card' },
      {
        p: `Payment is taken by card on the payment provider’s secure page. Whether a particular HSA or FSA card is accepted depends on the card and the plan, and this site cannot tell you in advance. If one is declined, you can pay another way and claim reimbursement afterward, where your plan allows it.`,
      },
      { h: 'Keep the receipt' },
      {
        p: `The confirmation email is your receipt: order number, product, subtotal, shipping and total. [Getting a receipt](/guides/getting-a-receipt-for-your-order) covers what to do if you have lost it.`,
      },
      { h: 'Shipping' },
      {
        p: `Whether shipping is reimbursable is a question for your plan. {freeBottles} bottles or more ship free, which takes the question away.`,
      },
    ],
  },

  {
    slug: 'editing-your-cart',
    title: 'How to change the quantity in your cart',
    description:
      'Changing how many bottles are in your Quell cart, removing an item, and how the shipping and the saving update as you go.',
    category: 'ordering',
    body: [
      {
        p: `Open the [cart](/cart). Each line has a quantity control and a remove button. Change the number and the subtotal, shipping and delivered total update straight away.`,
      },
      { h: 'Watch the shipping line' },
      {
        p: `Shipping is a flat {shipping} below {freeBottles} bottles and free from {freeBottles} up, so going from two to three removes the shipping charge entirely. Below the threshold, the cart tells you how far off free shipping you are.`,
      },
      { h: 'The saving moves too' },
      {
        p: `With more than one bottle in the cart, it shows a saving against buying the same bottles one at a time, and that figure changes with the quantity. [What the cart saving means](/guides/what-the-cart-saving-means) explains it.`,
      },
      { h: 'Nothing is final until you pay' },
      {
        p: `No charge is made until you submit the order on the payment page, so you can change your mind as often as you like before then.`,
      },
      { h: 'Emptying it' },
      {
        p: `Remove the last item and the cart is empty. The cart lives in your browser, so changes you make are still there if you close the tab and come back later.`,
      },
    ],
  },

  {
    slug: 'your-cart-is-saved-on-this-device',
    title: 'Is my cart saved if I leave the site?',
    description:
      'Your Quell cart is stored in your own browser, so it is still there when you come back. Why it does not follow you to another device.',
    category: 'ordering',
    body: [
      {
        p: `Yes, in that browser. The cart is stored in your own browser on your own device, so closing the tab, or coming back tomorrow, leaves it as you left it. You do not need an account for that.`,
      },
      { h: 'Why it does not follow you' },
      {
        p: `The [privacy policy](/privacy) is specific: the cart is stored in your browser and never sent to the shop. That keeps it private, and it also means a cart started on your phone will not appear on your laptop.`,
      },
      { h: 'Private browsing' },
      {
        p: `Private or incognito windows usually clear site storage when they close, so a cart started in one is likely to be gone next time.`,
      },
      { h: 'When it empties' },
      {
        p: `The cart clears after a completed order. You can remove items yourself on the [cart](/cart) page, and clearing your browser’s site data removes it, along with any checkout details the browser remembered.`,
      },
      { h: 'Picking up where you left off' },
      {
        p: `Open the cart, check the quantity, and carry on to checkout. If anything about the order has changed since you started — the address, how many bottles — adjust it before you pay.`,
      },
    ],
  },

  {
    slug: 'how-to-order-quell-step-by-step',
    title: 'How to order Quell online, step by step',
    description:
      'Ordering Quell from start to finish: choosing a quantity, the cart, guest checkout, paying on the secure page, and the emails that follow.',
    category: 'ordering',
    body: [
      {
        p: `Ordering takes a few minutes and needs no account and no prescription. Here is each step in order.`,
      },
      { h: '1. Choose a quantity' },
      {
        p: `On the [buy panel](/#buy), pick how many bottles you want. Two are selected to begin with, and anything from one to ten is available from the menu. The panel shows the delivered price, and any saving, as you change it.`,
      },
      { h: '2. Review the cart' },
      {
        p: `The cart lists the bottles, the subtotal, shipping and the delivered total. Shipping is {shipping} below {freeBottles} bottles and free at {freeBottles} or more.`,
      },
      { h: '3. Enter your details' },
      {
        p: `Email, name, a U.S. shipping address and a phone number. If an email address looks mistyped, checkout suggests a correction. If you have ordered from this browser before as a guest, the fields are already filled.`,
      },
      { h: '4. Pay' },
      {
        p: `The checkout button takes you to the payment provider’s secure page, where you enter your card. Card details never pass through this site.`,
      },
      { h: '5. Watch your inbox' },
      {
        p: `A confirmation email arrives with your order number and a link to track the order, and a second email follows when it ships. Before you start, it is worth reading the label on the [Drug Facts](/drug-facts) page.`,
      },
    ],
  },
]
