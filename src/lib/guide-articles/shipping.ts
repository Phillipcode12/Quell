import type { Guide } from '@/lib/guide-types'

/**
 * Shipping and delivery. See `lib/guides.ts`.
 *
 * No carrier is named and no delivery window is given anywhere in this file,
 * for the reason `lib/shipping.ts` records: either one in promotional copy is
 * a promise the shop would have to keep.
 */
export const SHIPPING_GUIDES: Guide[] = [
  {
    slug: 'how-much-is-shipping',
    title: 'How much is shipping on Quell?',
    description:
      'Shipping is a flat rate below three bottles and free at three or more. How the charge is worked out, and where you see it before paying.',
    category: 'shipping',
    body: [
      {
        p: `A flat {shipping} on orders under {freeBottles} bottles, and free on {freeBottles} or more — that is, on orders of {freeThreshold} and up. That is the whole rule. It does not change with your state, your city or the size of the parcel.`,
      },
      { h: 'Where you see it' },
      {
        p: `The buy panel shows the delivered price for whatever quantity you choose, and the cart has its own shipping line before you go to pay. The confirmation email repeats it, and reads “Free” when nothing was charged.`,
      },
      { h: 'Charged once per order' },
      {
        p: `Shipping is worked out on the order as a whole, not per bottle, so two bottles in one order pay one charge. [Why shipping is charged once](/guides/why-shipping-is-charged-once-per-order) explains.`,
      },
      { h: 'Where it goes' },
      {
        p: `Anywhere in the United States, posted from Brentwood, Tennessee. The site does not ship outside the U.S.`,
      },
      { h: 'What it does not include' },
      {
        p: `A delivery date. The site does not promise one, and the [terms](/terms) describe delivery estimates as estimates only. Every shipped order gets an email, with tracking where a number is available.`,
      },
      {
        p: `Shipping is also not refunded if you change your mind about an unopened bottle; the refund covers the product price, and there is nothing to send back.`,
      },
    ],
  },

  {
    slug: 'how-to-get-free-shipping',
    title: 'How to get free shipping on Quell',
    description:
      'Order three bottles or more and shipping is free. Why the threshold is counted in bottles, and whether three is right for you.',
    category: 'shipping',
    body: [
      {
        p: `Order {freeBottles} bottles or more. Shipping is then free to any U.S. address. Below that, it is a flat {shipping}.`,
      },
      { h: 'Why it is counted in bottles' },
      {
        p: `Strictly, the rule is a subtotal of {freeThreshold}. Saying “{freeBottles} bottles” is simpler than asking you to divide, and at the current price {freeBottles} bottles is what clears it.`,
      },
      { h: 'The panel tells you how close you are' },
      {
        p: `Below the threshold, the buy panel and the cart both say how far off free shipping you are. Going from two bottles to three removes the shipping line entirely.`,
      },
      { h: 'It counts per order' },
      {
        p: `Free shipping is worked out on each order, so three bottles in one order ship free, while three single-bottle orders each pay {shipping}. If you want three, order them together.`,
      },
      { h: 'Is three right for you?' },
      {
        p: `Three bottles is a longer supply than many people buy at once. Keep the spares sealed and in range: {storage}. If you overestimate, unopened bottles can be refunded within {returnDays} days of delivery, without sending them back.`,
      },
      { h: 'No code needed' },
      {
        p: `Free shipping applies by itself; there are no [promo codes](/guides/quell-coupons-and-promo-codes) to find or enter. Start on the [buy panel](/#buy).`,
      },
    ],
  },

  {
    slug: 'where-quell-ships-from',
    title: 'Where does Quell ship from?',
    description:
      'Quell is posted from Brentwood, Tennessee, where Aurora Pharmaceuticals is based. What that means for ordering from anywhere in the U.S.',
    category: 'shipping',
    body: [
      {
        p: `Brentwood, Tennessee. That is where {company}, the company that sells Quell, is based, and orders are packed and posted from there.`,
      },
      { h: 'The same from everywhere' },
      {
        p: `Whether you are in Tennessee or across the country, the price and the shipping charge are the same: {shipping} below {freeBottles} bottles, free at {freeBottles} or more. There is no regional pricing and no local warehouse.`,
      },
      { h: 'Delivery time' },
      {
        p: `Distance from Brentwood affects how long a parcel takes, but the site does not publish delivery windows for any destination. The shipping email arrives when your parcel leaves, with tracking where available.`,
      },
      {
        p: `Because no date is promised, it pays to order before you run out, and a little earlier still if you live a long way from Tennessee.`,
      },
      { h: 'The address on the carton' },
      {
        p: `The carton and the site’s footer show the company’s mailing address: {address}. Nothing there is a shop you can walk into.`,
      },
      { h: 'Where is my order?' },
      {
        p: `Look it up on the [track your order](/orders) page with your order number and email, or call {phone}, {hours}.`,
      },
    ],
  },

  {
    slug: 'does-quell-ship-outside-the-us',
    title: 'Does Quell ship outside the United States?',
    description:
      'No. Quell ships within the United States only, and checkout accepts U.S. addresses. What to do if you are abroad, or traveling soon.',
    category: 'shipping',
    body: [
      {
        p: `No. The site ships within the United States only, and checkout accepts only U.S. shipping addresses. The [terms](/terms) say the same.`,
      },
      { h: 'If you are about to travel abroad' },
      {
        p: `Order before you leave, with time to spare, and take the bottle with you. [Traveling with eye drops](/guides/traveling-with-eye-drops) covers packing and the temperature range on the label.`,
      },
      { h: 'If you live outside the U.S.' },
      {
        p: `Quell is not sold internationally through this site. Rules on importing an over-the-counter drug differ from country to country, so a forwarding service is not something we can advise on.`,
      },
      { h: 'Prices and payment' },
      {
        p: `Prices are in U.S. dollars, and the charge is made in U.S. dollars on the payment provider’s page.`,
      },
      { h: 'Sending to the U.S. from overseas' },
      {
        p: `What matters is the shipping address, not where you are when you order. You can send Quell to someone in the United States from abroad, provided the payment goes through and you are at least 18.`,
      },
      { h: 'Inside the U.S.' },
      {
        p: `Any U.S. address can order, whoever is paying, as long as the buyer is at least 18. Shipping is {shipping} below {freeBottles} bottles and free at {freeBottles} or more. [Does Quell ship to every state?](/guides/does-quell-ship-to-every-state) covers the domestic side.`,
      },
    ],
  },

  {
    slug: 'does-quell-ship-to-every-state',
    title: 'Does Quell ship to every state?',
    description:
      'Quell ships anywhere in the United States from Brentwood, Tennessee, at the same price and shipping charge wherever the order is going.',
    category: 'shipping',
    body: [
      {
        p: `Yes. Quell ships anywhere in the United States, at the same price and with the same shipping charge wherever the order goes.`,
      },
      { h: 'Same price everywhere' },
      {
        p: `There is no regional pricing. Shipping is {shipping} below {freeBottles} bottles and free from {freeBottles} up, whether the address is in the next county or across the country.`,
      },
      {
        p: `Nor is there a surcharge for rural or remote addresses. The flat rate is the flat rate, and the cart shows it before you pay.`,
      },
      { h: 'The city and state pages' },
      {
        p: `[Where we ship](/eye-drops) lists states and cities with a page of their own, each answering “can I get these eye drops here?” for one place. An address that is not listed can order just the same.`,
      },
      { h: 'Delivery' },
      {
        p: `Parcels are posted from Brentwood, Tennessee. Farther destinations can take longer, and the site does not publish delivery windows; the shipping email arrives when the parcel leaves.`,
      },
      { h: 'What cannot be shipped to' },
      {
        p: `Addresses outside the United States. Checkout accepts U.S. addresses only.`,
      },
      {
        p: `To order, [choose a quantity](/#buy), enter a U.S. address at checkout, and pay on the payment provider’s secure page.`,
      },
    ],
  },

  {
    slug: 'how-long-does-delivery-take',
    title: 'How long does Quell take to arrive?',
    description:
      'Why the site does not promise a delivery date, what it does tell you, and how to follow a parcel once the shipping email arrives.',
    category: 'shipping',
    body: [
      {
        p: `The site does not promise a delivery date, and that is deliberate. A date printed here would be a commitment, and delivery depends on the carrier and the distance from Brentwood, Tennessee. The [terms](/terms) put it plainly: delivery estimates are estimates.`,
      },
      { h: 'What you will know' },
      {
        p: `Two emails. The first confirms the order once payment goes through. The second says it has shipped and, when a number is available, gives the tracking number with a link to the carrier’s own page. From then on, the carrier’s estimate is the most current one there is.`,
      },
      { h: 'Order with room to spare' },
      {
        p: `If you are near the end of a bottle, order before you run out, not on the day. Used as directed, a bottle goes quicker than people expect, so keeping one sealed bottle in reserve is the easy way to never be caught short.`,
      },
      { h: 'If it seems slow' },
      {
        p: `Check the tracking link in your shipping email, or look the order up on the [track your order](/orders) page. If it still looks stuck, call {phone}, {hours}, with your order number.`,
      },
      { h: 'If it arrives damaged' },
      {
        p: `Contact us within {returnDays} days and a damaged, incorrect or broken-seal order is replaced at no charge.`,
      },
    ],
  },

  {
    slug: 'how-to-track-your-order',
    title: 'How to track your Quell order',
    description:
      'Two ways to follow an order: the tracking link in your shipping email, and the order lookup page, which needs your order number and email.',
    category: 'shipping',
    body: [
      {
        p: `There are two ways. The shipping email has the tracking number and, for the carriers the shop links to, a direct link to the carrier’s tracking page. Or use the [track your order](/orders) page on this site whenever you like.`,
      },
      { h: 'The order lookup page' },
      {
        p: `Enter your order number and the email address you used at checkout. Both are in your confirmation email, and the order number starts with Q-. If you have an account, signing in shows all your orders instead.`,
      },
      { h: 'Before it ships' },
      {
        p: `Until the parcel leaves, there is no tracking number to follow. The lookup page still finds the order, and the shipping email arrives the moment it goes.`,
      },
      { h: 'What the carrier’s page shows' },
      {
        p: `The latest scans and the carrier’s own estimate. That is more current than anything this site could show, so once the parcel is moving, the carrier’s page is the one to watch.`,
      },
      { h: 'A number but no link' },
      {
        p: `Now and then an order goes out with a carrier the site does not link to. You still get the tracking number in the email; enter it on that carrier’s website.`,
      },
      { h: 'Help' },
      {
        p: `Lost the confirmation email? See [finding your order number](/guides/finding-your-order-number). Otherwise, call {phone}, {hours}.`,
      },
    ],
  },

  {
    slug: 'finding-your-order-number',
    title: 'Where to find your order number',
    description:
      'Your Quell order number is in the subject line of your confirmation email. What it looks like, and what to do if you cannot find it.',
    category: 'shipping',
    body: [
      {
        p: `In the subject line of your confirmation email, and again in its body. It also appears in the shipping email, and in the “Running low?” reminder if you get one.`,
      },
      { h: 'What it looks like' },
      {
        p: `Q- followed by eight letters and digits. The characters most easily confused when read aloud — I, L, O, U, zero and one — are never used, so it reads out cleanly over the phone.`,
      },
      { h: 'What it is for' },
      {
        p: `Together with your email address, it finds your order on the [track your order](/orders) page. It is also the first thing to give when you call about an order, and quicker to read out than an email address. Keep the confirmation email somewhere you can find it; it doubles as your receipt.`,
      },
      { h: 'If you cannot find it' },
      {
        p: `Search your inbox for “Quell,” and check spam or junk. If the email never arrived, the address may have been mistyped at checkout; [what to do about a mistyped email](/guides/mistyped-email-at-checkout) covers that.`,
      },
      {
        p: `If you have an account, signing in lists your orders with their numbers. Failing all that, call {phone}, {hours}, with the name, address and date of the order.`,
      },
    ],
  },

  {
    slug: 'wrong-shipping-address',
    title: 'What if I entered the wrong shipping address?',
    description:
      'Spotted a mistake in your shipping address after ordering? Call as soon as you can. Why speed matters, and how to catch it next time.',
    category: 'shipping',
    body: [
      {
        p: `Call {phone} as soon as you notice, during business hours ({hours}), with your order number ready. The earlier it is raised, the better the chance of catching it before the parcel leaves.`,
      },
      { h: 'Why speed matters' },
      {
        p: `Once a parcel is with the carrier, it goes where the label says. The [terms](/terms) are clear that the shop is not responsible for delays caused by an incorrect address, and that risk of loss passes on delivery to the address you provide.`,
      },
      { h: 'Read the confirmation email' },
      {
        p: `The confirmation email shows the address the order is going to. Reading it as soon as it lands is the quickest way to catch a slip.`,
      },
      { h: 'Next time' },
      {
        p: `Guest details are remembered in your browser, so an old or mistyped address will be offered again. Look it over before paying. [Getting the address right](/guides/getting-the-address-right) covers apartment numbers and work addresses.`,
      },
      { h: 'If it has already gone' },
      {
        p: `Follow it with the tracking link in your shipping email, and contact the carrier through its own tracking page. Then let us know what happened, so we can see what can be done.`,
      },
    ],
  },

  {
    slug: 'getting-the-address-right',
    title: 'Getting the shipping address right',
    description:
      'Apartment numbers, suites, offices and remembered addresses: the details that keep a Quell parcel from going astray.',
    category: 'shipping',
    body: [
      {
        p: `A parcel can only go where its address sends it, so a minute spent on the details at checkout is well spent. Checkout has a separate, optional line for an apartment, suite or unit number. Use it whenever there is one.`,
      },
      { h: 'Apartments and shared buildings' },
      {
        p: `Put the unit number on the apartment or suite line rather than squeezing it onto the end of the street address, so it reads clearly on the label.`,
      },
      { h: 'Work addresses' },
      {
        p: `In a building with several tenants, add the company name on the suite line next to the suite number. A parcel with only a street address can sit in a lobby or a mailroom without anyone knowing whose it is.`,
      },
      { h: 'State and ZIP' },
      {
        p: `Checkout asks for the state and ZIP code separately. Check the ZIP against the city; a mismatch can send a parcel the wrong way.`,
      },
      { h: 'Remembered addresses' },
      {
        p: `If you have ordered as a guest from this browser before, the last address you used is filled in for you. Moved since? Change it before paying.`,
      },
      { h: 'Whose name goes on it' },
      {
        p: `The name you enter is the name on the parcel. Ordering for someone else? Use their name and address with your own email; [ordering for someone else](/guides/ordering-eye-drops-for-someone-else) has more.`,
      },
    ],
  },

  {
    slug: 'eye-drops-shipped-in-hot-or-cold-weather',
    title: 'Eye drops shipped in hot or cold weather',
    description:
      'What to do when a Quell parcel arrives on a very hot or freezing day: the storage range on the label, and what to check before using a bottle.',
    category: 'shipping',
    body: [
      {
        p: `Bring the parcel inside promptly, let the bottle come to room temperature, and look at it before use. Quell’s label gives a storage range — {storage} — and a parcel left on a hot porch or a frozen step can spend a while outside it.`,
      },
      { h: 'What to look at' },
      {
        p: `The color. {milky}, and that is normal. The Do not use line reads: {doNotUse}. Compare it with the appearance described on the [Drug Facts](/drug-facts) page, and if it looks different, do not use it; call {phone} instead.`,
      },
      { h: 'Timing an order' },
      {
        p: `If you will be away, or the weather is extreme, try to order so the parcel arrives when someone is home to bring it in. The site does not publish delivery dates, but the shipping email tells you when it has left, and the tracking link shows its progress.`,
      },
      { h: 'A damaged parcel' },
      {
        p: `If an order arrives damaged, incorrect or with a broken tamper seal, contact us within {returnDays} days and it is replaced at no charge.`,
      },
      { h: 'Once it is inside' },
      {
        p: `Keep it in range from then on. [How to store eye drops](/guides/how-to-store-eye-drops) covers where.`,
      },
    ],
  },

  {
    slug: 'what-to-check-when-your-order-arrives',
    title: 'What to check when your Quell order arrives',
    description:
      'A quick check when a Quell parcel arrives: the right number of bottles, an intact tamper seal, the carton, and the milky brown color that is normal.',
    category: 'shipping',
    body: [
      {
        p: `A minute spent checking the parcel on arrival saves trouble later, because the window for reporting a problem is {returnDays} days.`,
      },
      { h: 'The contents' },
      {
        p: `Compare what is in the box with your confirmation email. The number of bottles should match.`,
      },
      { h: 'The tamper seal' },
      {
        p: `Check that each seal is intact. An order that arrives with a broken tamper seal is replaced at no charge if you report it within {returnDays} days.`,
      },
      { h: 'The carton' },
      {
        p: `Read the Drug Facts panel on the carton before your first dose. It is the version that applies to the bottle you received, should it ever differ from the website.`,
      },
      { h: 'The color' },
      {
        p: `{appearance} The label puts it this way: {milky}.`,
      },
      { h: 'Spares' },
      {
        p: `Bottles you will not open yet can stay in their original packaging. Unopened, they can be refunded within {returnDays} days of delivery if you do not need them, and you do not have to send them back.`,
      },
      { h: 'If something is wrong' },
      {
        p: `Call {phone}, {hours}, with your order number. [Damaged orders](/guides/damaged-order) covers what happens next.`,
      },
    ],
  },

  {
    slug: 'tracking-says-delivered-but-no-parcel',
    title: 'Tracking says delivered, but no parcel?',
    description:
      'When tracking shows your Quell order as delivered and nothing is there: where to look, who to contact first, and what the terms say about delivery.',
    category: 'shipping',
    body: [
      {
        p: `Look around before anything else: porches, side doors, mailrooms, parcel lockers, and the neighbors. Carriers occasionally mark a parcel delivered shortly before it turns up, so it is also worth giving it until the end of the day.`,
      },
      { h: 'Check the address' },
      {
        p: `Your confirmation email shows the address the order went to. If there is a mistake in it, that is the likely explanation.`,
      },
      { h: 'Contact the carrier' },
      {
        p: `The tracking link in your shipping email goes to the carrier’s own page, which usually has delivery details and a way to raise a query about a missing parcel.`,
      },
      { h: 'Let us know' },
      {
        p: `Then call {phone}, {hours}, with your order number, and tell us what the tracking shows and what the carrier said.`,
      },
      { h: 'What the terms say' },
      {
        p: `The [terms](/terms) say that risk of loss passes on delivery to the address you provide, and that the shop is not responsible for delays caused by the carrier or by an incorrect address. That is why the carrier is the first call when tracking says a parcel arrived and it has not.`,
      },
    ],
  },

  {
    slug: 'why-shipping-is-charged-once-per-order',
    title: 'Why shipping is charged once per order',
    description:
      'Quell’s shipping is worked out on the whole order, not per bottle, so several bottles in one order share one charge, or ship free from three.',
    category: 'shipping',
    body: [
      {
        p: `Because it is calculated on the order’s subtotal, not on each bottle or each line in the cart. Two bottles in one order share a single {shipping} charge; {freeBottles} or more pay nothing.`,
      },
      { h: 'One order, not two' },
      {
        p: `Place two separate one-bottle orders and each is charged shipping. Put both bottles in one order and the charge is shared between them.`,
      },
      {
        p: `The same goes for adding to an order you have already placed. Each checkout is its own order, so bottles bought later carry their own shipping, unless that new order reaches {freeBottles} bottles by itself.`,
      },
      { h: 'The same figure everywhere' },
      {
        p: `Checkout charges shipping on the whole basket, and the cart, the payment page and the confirmation email all show that same figure, so what you see is what you pay.`,
      },
      { h: 'Where the free threshold comes from' },
      {
        p: `Free shipping starts at {freeThreshold} of bottles, which at the current price is {freeBottles} bottles. [How to get free shipping](/guides/how-to-get-free-shipping) explains why it is described in bottles.`,
      },
      { h: 'The saving you see' },
      {
        p: `The cart shows how much less your order costs than the same bottles bought one at a time. All of that difference is shipping, shared or waived.`,
      },
    ],
  },

  {
    slug: 'the-shipping-email',
    title: 'What the shipping email tells you',
    description:
      'When your Quell order leaves Brentwood, an email says so, with a tracking number and link when one is available. What else is in it.',
    category: 'shipping',
    body: [
      {
        p: `It tells you the order has shipped, and gives the tracking number with a link to the carrier’s tracking page when a number is available. The subject line reads “Your Quell order #… has shipped.”`,
      },
      { h: 'What is in it' },
      {
        list: [
          'Your order number.',
          'The tracking number, and for the carriers the shop links to, a link to follow the parcel.',
          'The address the parcel is going to.',
          'A reminder of the directions: {directions}.',
        ],
      },
      { h: 'No tracking number?' },
      {
        p: `Occasionally an order is marked shipped before its number is to hand. The email still confirms it has left, and the order can be looked up on the [track your order](/orders) page.`,
      },
      { h: 'No link?' },
      {
        p: `A few carriers are not linked. Copy the number into the carrier’s own website instead.`,
      },
      { h: 'Keep it until the parcel arrives' },
      {
        p: `The tracking link in it is the quickest answer to “where is it?”, and the order number at the top is what to give if you need to call.`,
      },
      { h: 'If it never arrives' },
      {
        p: `Check spam and junk. If the confirmation email reached you but no shipping email has followed after a reasonable wait, call {phone}, {hours}.`,
      },
    ],
  },
]
