import type { Guide } from '@/lib/guide-types'
export const DAILY_20261122_C: Guide[] = [
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-broken-arrow-ok:
   * - NOAA Regional Climate Centers ACIS, https://data.rcc-acis.org/StnData,
   *   sid RVS, 1991-2020 monthly normals (raw: .daily-job/acis1122/RVS.json and
   *   .daily-job/c/RVS-extra.json)
   *   (TULSA RICHARD L JONES JR AP, elev 620 ft. Normal max: Jan 49.7, Feb 54.7,
   *   Jun 89.0, Jul 94.0, Aug 93.5, Dec 51.7 F. Normal min: Jan 28.1, Jul 72.5,
   *   Aug 70.7, Dec 30.8 F. Precip: May 6.08 (wettest), Apr 4.46, Jun 4.82,
   *   Jan 1.59 (driest), Feb 1.80, Dec 2.51; annual sum 42.09 in. Snowfall M.)
   * - relhum23.txt and wndspd23.txt have no row for WBAN 53908, so no humidity
   *   or wind figure is given.
   */
  {
    slug: 'dry-eye-relief-broken-arrow-ok',
    title: 'Dry eye relief in Broken Arrow, Oklahoma',
    description:
      'Broken Arrow’s nearest NOAA station logs 94°F July highs and a stormy, 6-inch May. What the seasons do to your tear film, and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Broken Arrow is mostly about the air you spend your hours in: air conditioning from May into September, when July highs near the Tulsa area’s Jones Jr. Airport average 94°F, and heated rooms through the short winter. Keep vents off your face, blink fully at screens, wear sunglasses on windy days, and use a lubricating drop as its label directs. Pain or vision changes belong with an eye doctor.`,
      },
      { h: 'Broken Arrow weather in NOAA’s records' },
      {
        p: `Broken Arrow has no long-running NOAA station of its own, so the closest full set of 1991 to 2020 normals comes from a station outside the city limits that NOAA lists as Tulsa Richard L. Jones Jr. Airport, at about 620 feet. Its averages give a fair picture of the southeast side of the metro:`,
      },
      {
        list: [
          `About 42 inches of precipitation in a normal year.`,
          `May is the wettest month at 6.08 inches, with June (4.82) and April (4.46) close behind.`,
          `January is the driest at 1.59 inches, followed by February at 1.80.`,
          `July highs average 94.0°F and August 93.5°F, with summer lows around 71 to 73°F.`,
          `January runs from a normal low of 28.1°F to a high of 49.7°F.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables don’t include this station, so this page doesn’t quote a humidity or wind figure for it. The rain totals and temperatures are enough to show the pattern: a wet, stormy spring, a long hot stretch, and a cool, fairly dry winter.`,
      },
      { h: 'Why do my eyes feel dry when it’s humid outside?' },
      {
        p: `Plenty of Broken Arrow residents ask this in June. The outdoor air may feel thick, but most of a summer day happens indoors or in a car, where air conditioning pulls moisture out of the air as it cools it. A vent aimed at your face then moves that drier air across the eye’s surface, and the tear film’s water layer evaporates faster. Your eyes can feel scratchy at a desk while the yard outside feels like a sauna.`,
      },
      {
        list: [
          `Point dashboard vents at your chest or the windshield on the drive into Tulsa, not at your eyes.`,
          `At home, check where the supply registers blow and move a recliner or desk chair out of the stream.`,
          `Set the thermostat a few degrees warmer so the system cycles less often.`,
          `If you work in a big-box store or warehouse with strong airflow overhead, take short breaks somewhere the air is still.`,
        ],
      },
      { h: 'Storm season and spring wind' },
      {
        p: `April through June brings Broken Arrow’s wettest stretch, and with it the gusty days before and after a front. Wind on its own speeds evaporation from the eye, and a fast-moving storm line can kick up grit from fields, construction lots and freshly mowed lawns. Wraparound sunglasses do more here than flat lenses because they block air from the sides. If something gets in your eye, rinse it rather than rubbing, and save the lubricating drop for the dry, scratchy feeling afterward. Pollen season overlaps with all of this, and itching is a different complaint from dryness; our guide on [eye drops for itchy eyes](/guides/eye-drops-for-itchy-eyes) explains what a lubricating label does and doesn’t cover.`,
      },
      { h: 'Summer evenings at the ballfield' },
      {
        p: `Youth baseball, soccer and softball fill Broken Arrow’s summer evenings, and with July lows staying above 70°F the heat hangs on well after sunset. Sitting in the bleachers for a doubleheader means hours of squinting into low sun, often with a fan or a breeze in your face. A brimmed cap and sunglasses cut the glare. Look away from the field between innings and close your eyes for a few seconds; a deliberate full blink spreads tears across the surface again.`,
      },
      { h: 'Short winters, heated rooms' },
      {
        p: `Broken Arrow’s winter is brief compared with places farther north, but December through February still brings normal lows below freezing and the driest months of the year on NOAA’s chart. That’s when furnaces run most. Heating cold air without adding moisture lowers its relative humidity, so a house can feel dry even on a gray, drizzly day. A humidifier in the bedroom, kept clean as its maker directs, and a chair moved away from the floor register both help. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on this.`,
      },
      { h: 'Screens at home and work' },
      {
        p: `Many Broken Arrow households run on a commute, a desk and a phone. Concentrating on a screen slows your blink rate and leaves blinks half finished, which lets the tear film thin between them. Every so often, look across the room or out a window and blink fully. Keep the monitor slightly below eye level so your lids cover more of the eye. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why this matters.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its use as: {uses}. The directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `Storage matters in an Oklahoma summer. The label says: {storage}. A car parked at a sunny lot in July gets far hotter than that inside, so carry the bottle in a bag or pocket rather than leaving it in the console. The label’s caution reads: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Broken Arrow' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Broken Arrow and every other US address. You can check out as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so reorder with a few days’ supply left. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Broken Arrow page](/eye-drops/broken-arrow-ok) and the [Oklahoma page](/eye-drops/state/oklahoma), or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor in Broken Arrow' },
      {
        p: `A lubricating drop is for everyday dryness. It doesn’t explain why your eyes feel the way they do, and an eye doctor can find the cause and decide what to do. The label is clear about when to stop: {stopUse} Sudden blurry vision, light that hurts, or one eye that’s much worse than the other are reasons to book a visit. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the rest.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainiest month in Broken Arrow?',
        a: `May, going by NOAA’s 1991 to 2020 normals for the nearby Tulsa Richard L. Jones Jr. Airport station, at 6.08 inches. June and April follow at 4.82 and 4.46 inches.`,
      },
      {
        q: 'How hot does Broken Arrow get in the summer?',
        a: `The nearest NOAA station averages a July high of 94.0°F and an August high of 93.5°F, with normal lows staying above 70°F in both months. Long hours of air conditioning follow.`,
      },
      {
        q: 'Why do my eyes get dry in my car in Oklahoma?',
        a: `Air conditioning dries the air as it cools it, and a vent pointed at your face pushes that air across your eyes. Aim vents at your chest or the windshield instead.`,
      },
      {
        q: 'Can I get Quell delivered in Broken Arrow, Oklahoma?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Broken Arrow with guest checkout and email tracking. No arrival date is promised, so it’s smart to reorder before the bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-edmond-ok:
   * - NOAA Regional Climate Centers ACIS, https://data.rcc-acis.org/StnData,
   *   sid PWA, 1991-2020 monthly normals (raw: .daily-job/acis1122/PWA.json and
   *   .daily-job/c/PWA-extra.json)
   *   (OKLAHOMA CITY WILEY POST AP, elev 1280 ft. Normal max: Jan 50.5, Jul 94.7,
   *   Aug 93.5, Dec 51.4 F. Normal min: Jan 27.8, Feb 31.3, Jul 73.1, Dec 30.3 F.
   *   Precip: Jan 0.78, Feb 0.98, Nov 1.47, Dec 1.27, Mar 2.04, May 4.26,
   *   Jun 4.83 (wettest), Jul 2.88; annual sum 30.72 in; Nov-Feb sum 4.50 in.
   *   Snowfall M.)
   * - relhum23.txt and wndspd23.txt have no row for WBAN 03954; no humidity or
   *   wind figure is given.
   */
  {
    slug: 'dry-eye-relief-edmond-ok',
    title: 'Dry eye relief in Edmond, Oklahoma',
    description:
      'Edmond’s nearest NOAA station gets just 4.5 inches of precipitation from November through February. Why winter dries your eyes there, and what helps.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `In Edmond, dry eyes tend to peak in the cold months. NOAA’s normals for nearby Wiley Post Airport show only about 4.5 inches of precipitation from November through February, and those are the months the furnace runs hardest. Keep heat registers off your face, add moisture to the bedroom air, take blink breaks at screens, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'The station behind Edmond’s numbers' },
      {
        p: `Edmond doesn’t have its own long-term NOAA normals. The nearest station with a full 1991 to 2020 record is Wiley Post Airport, in Oklahoma City to the southwest, at about 1,280 feet. Here is what NOAA’s climate normals for that station show:`,
      },
      {
        list: [
          `About 30.7 inches of precipitation in a normal year.`,
          `January is the driest month at 0.78 inches, then February at 0.98 and December at 1.27.`,
          `June is the wettest at 4.83 inches, ahead of May at 4.26.`,
          `July highs average 94.7°F, with normal July lows of 73.1°F.`,
          `December and January normal lows sit near 30°F and 28°F.`,
        ],
      },
      {
        p: `For a sense of how much the metro varies, the Tulsa-area Jones Jr. Airport station that serves Broken Arrow logs about 42 inches a year in the same set of normals, roughly 11 more than Wiley Post. NOAA’s humidity and wind tables don’t cover Wiley Post, so this page gives no humidity or wind number for Edmond.`,
      },
      { h: 'Why are my eyes so dry in the winter in Edmond?' },
      {
        p: `Two things stack up. Outdoors, the cold season is the dry season on NOAA’s chart: November through February together average about 4.5 inches, less than June alone. Indoors, the furnace warms cold air without adding water, which drops its relative humidity even further. Your tear film has three layers, an outer oil layer over a watery middle and a mucus layer against the eye, and the water evaporates faster when the room is dry and the air is moving.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Turn the thermostat down a couple of degrees at night so the heat cycles less.`,
          `Close or redirect the register nearest your bed or favorite chair.`,
          `In the car, send the heat to the floor and the windshield, not toward your face.`,
        ],
      },
      { h: 'North winds and the morning commute' },
      {
        p: `Winter fronts sweep down across central Oklahoma with a sharp wind shift, and Edmond commuters feel it at the gas pump, in parking lots and on the walk into the office. Cold, moving air pulls moisture from an exposed eye quickly, and a squint against the wind doesn’t protect it much. Wraparound sunglasses or glasses with wider frames block air from the sides. When you get inside, give yourself a minute of slow, complete blinks before starting on a screen.`,
      },
      { h: 'Campus semesters and finals' },
      {
        p: `Edmond is a college town, and the fall semester ends in December, deep in heating season. Studying for exams usually means hours of reading on a laptop in a library, apartment or coffee shop with forced-air heat. Concentration lowers your blink rate and leaves blinks unfinished. Set a timer to look up every so often, sit so the vent isn’t blowing on you, and keep the screen a little below eye level. [Dry eyes while studying](/guides/dry-eyes-while-studying) has a fuller study routine.`,
      },
      { h: 'Summer: a different kind of dry' },
      {
        p: `June is Edmond’s wettest month at the station, and then the heat takes over. July and August both average highs near 94°F, so air conditioning runs nearly nonstop in homes, offices and cars. Cooled air loses moisture, and ceiling fans keep it moving across your face. If your eyes feel scratchy during a summer evening on a patio or at a pool, glare off concrete and water adds to the strain. A brimmed hat and sunglasses help, and so does turning a fan so it blows past you rather than at you.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its use: {uses}. For dosing, it says: {directions}.`,
      },
      {
        list: [
          `Keep the bottle clean, as the panel warns: {tip}.`,
          `Read the caution before the first use: {warnings}.`,
          `Store it as directed: {storage}. A car left in a lot in January can drop below that range, and one parked in July can climb above it.`,
          `{doNotUse}: that line is the panel’s own check before each use.`,
        ],
      },
      {
        p: `Everything printed on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Edmond' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Edmond and the rest of the US. Guest checkout works, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, though no delivery date is promised, so order before you’re down to the last few days. Unopened bottles can be refunded within {returnDays} days of delivery, and there’s nothing to mail back. Local details are on the [Edmond page](/eye-drops/edmond-ok) and the [Oklahoma page](/eye-drops/state/oklahoma).`,
      },
      { h: 'When dryness needs a professional' },
      {
        p: `If drops and changes to your rooms don’t help, an eye doctor can find the cause and decide what to do. The label sets the line: {stopUse} Light that hurts, vision that stays blurry after blinking, or a sudden change in one eye should be seen soon. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Edmond, Oklahoma?',
        a: `January, based on NOAA’s 1991 to 2020 normals for nearby Wiley Post Airport, at 0.78 inches of precipitation. February follows at 0.98 inches and December at 1.27.`,
      },
      {
        q: 'How much rain does Edmond get a year?',
        a: `About 30.7 inches in a normal year at Wiley Post Airport, the closest NOAA station with full 1991 to 2020 normals. June is the wettest month at 4.83 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in the winter in Oklahoma?',
        a: `Winter brings little precipitation in central Oklahoma, and furnaces heat cold air without adding moisture. Dry, moving indoor air pulls water from the tear film faster.`,
      },
      {
        q: 'Does Quell ship to Edmond?',
        a: `Yes. Orders go out from Brentwood, Tennessee, to Edmond with guest checkout and email tracking. Shipping is {shipping}, and {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Facts for can-you-buy-eye-drops-with-a-prepaid-card, read 2026-11-22 from:
   * - src/lib/authorizenet.ts (hosted payment page: showCreditCard true,
   *   cardCodeRequired true, billing address show + required; one
   *   authCaptureTransaction per order)
   * - src/app/terms/page.tsx §5 (payment processed by Authorize.net; you
   *   authorize the charge when you submit; if an order can't be filled the
   *   authorization is released or refunded in full)
   * - src/app/api/checkout/route.ts (shipping address gathered by the site)
   * Nothing in the code names accepted card brands or prepaid rules, so the
   * guide says whether a prepaid card works depends on the card and its issuer.
   */
  {
    slug: 'can-you-buy-eye-drops-with-a-prepaid-card',
    title: 'Can you buy eye drops with a prepaid card?',
    description:
      'Often, yes, if the card is registered with a billing address and holds enough for the full total. Why prepaid cards get declined and what to do next.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Often, yes. Quell’s payment page takes a card number, its security code and a billing address, and many prepaid cards can be used that way once they’re registered with the issuer under your name and address. The card also needs enough balance to cover the whole order, shipping included, because the page charges one card per order. If it’s declined, the card issuer can usually tell you why.`,
      },
      { h: 'How payment works on quelldrop.com' },
      {
        p: `When you check out, the site collects your shipping address first. You then move to a secure payment page run by Authorize.net, the processor named in our [terms](/terms). That page asks for:`,
      },
      {
        list: [
          `The card number and expiration date.`,
          `The card’s security code, which the page requires.`,
          `A billing address, which the page also requires, because it belongs to the card rather than to the shipment.`,
        ],
      },
      {
        p: `There is no separate gift card or store credit system on the site, and no way to split one order across two cards. The charge is authorized when you submit, for the full delivered total the cart showed. Our guide to [how payment works](/guides/how-payment-works) walks through the rest of the flow.`,
      },
      { h: 'Why prepaid cards get declined online' },
      {
        p: `Prepaid cards work differently from a bank debit card, and a few common snags explain most declines. The specific reason lives with the card issuer, not with us, but these are the usual suspects:`,
      },
      {
        list: [
          `The card isn’t registered. Many prepaid and gift-style cards arrive with no name or address on file. When a payment page checks the billing address, an unregistered card has nothing to match against.`,
          `The billing address doesn’t match. If you registered the card at an old address, or typed the ZIP code differently from what the issuer has, the check can fail.`,
          `The balance is short. A card with less than the full total, including shipping, can’t cover the order, and the page can’t take the difference on a second card.`,
          `The card is limited to certain uses. Some prepaid cards are restricted to in-person purchases, to one country, or to particular kinds of merchants.`,
          `The card hasn’t been activated, or it has expired.`,
        ],
      },
      { h: 'How to register a prepaid card for online shopping' },
      {
        p: `The exact steps depend on the issuer, so look at the back of the card or the paperwork it came with. In general:`,
      },
      {
        list: [
          `Visit the website or call the number printed on the card.`,
          `Enter your name and the address where you’ll say the card is billed.`,
          `Check the available balance while you’re there.`,
          `At checkout, type that same address on the payment page, exactly as you registered it.`,
        ],
      },
      {
        p: `The billing address doesn’t have to be the shipping address. You can register a card at your home and still send the order to someone else; our guide on [shipping to a different address than billing](/guides/can-i-ship-to-a-different-address-than-billing) explains how the two fields work.`,
      },
      { h: 'Does the balance need to cover shipping?' },
      {
        p: `Yes. The amount charged is the bottles plus shipping: {shipping} on smaller orders, and nothing once the cart reaches {freeBottles} or more bottles. The cart shows the delivered total before you pay. If your card balance is close, compare it with that total first. Adding bottles to reach free shipping changes the total too, so check again after any change.`,
      },
      { h: 'What to do if your prepaid card is declined' },
      {
        list: [
          `Read the message on the payment page; it sometimes says what failed, such as the security code or the address.`,
          `Check the balance with the issuer and confirm the card is registered with a name and address.`,
          `Try again, typing the billing address and ZIP exactly as the issuer has them.`,
          `Call the issuer if it still fails. They can see the reason for the decline and whether online purchases are allowed on that card.`,
          `Use a different card if the prepaid one can’t cover the order.`,
        ],
      },
      {
        p: `If you leave the payment page without finishing, nothing is charged. Our guide to [checkout error messages](/guides/checkout-error-messages-explained) covers the messages the site itself shows before you reach payment.`,
      },
      { h: 'Prepaid cards, HSA cards and gift cards' },
      {
        p: `People use “prepaid card” for several different things. A general-purpose prepaid card loaded with your own money is the most likely to work, once registered. A gift card for a single store only works at that store. An HSA or FSA card is a benefits card, and whether a plan pays for an over-the-counter eye drop is a question for your plan; [HSA and FSA funds for eye drops](/guides/hsa-fsa-and-eye-drops) explains what the IRS rules allow and why plans differ. Government benefit cards follow their own program rules.`,
      },
      { h: 'Refunds to a prepaid card' },
      {
        p: `If you later request a refund on an unopened bottle within {returnDays} days of delivery, it goes back to the card you paid with, and you don’t mail the bottle back. If that prepaid card has since been closed or thrown away, call us at {phone} ({hours}) with your order number and we’ll talk through what can be done; your card issuer may also need to be involved.`,
      },
      { h: 'Who to call' },
      {
        p: `For a decline, the card issuer is the right first call, because only they can see why. For anything about the order itself, call {phone} during {hours} with your order number, or use [the contact page](/about#contact). Never send card numbers by email or text to anyone, including us.`,
      },
    ],
    faq: [
      {
        q: 'Can I use a prepaid Visa to buy eye drops online?',
        a: `Many general-purpose prepaid cards can work on Quell’s payment page once they’re registered with your name and billing address and carry enough balance for the full order with shipping. If one is declined, the issuer can tell you why.`,
      },
      {
        q: 'Why was my prepaid card declined online?',
        a: `The usual reasons are an unregistered card, a billing address or ZIP that doesn’t match the issuer’s records, a balance short of the total, or a card limited to in-person use. The issuer can confirm which one applies.`,
      },
      {
        q: 'Can I split an eye drop order between two cards?',
        a: `No. The payment page charges one card for the full delivered total. If a prepaid card can’t cover it all, use a different card for the order.`,
      },
      {
        q: 'Do prepaid cards need a billing address?',
        a: `For Quell’s checkout, yes. The payment page requires a billing address, so register the prepaid card with the issuer first and type that same address at checkout.`,
      },
    ],
  },
  /*
   * Facts for charged-twice-for-one-eye-drop-order, read 2026-11-22 from:
   * - src/lib/authorizenet.ts (authCaptureTransaction: one charge per hosted
   *   payment page submission; invoice number = order number)
   * - src/app/terms/page.tsx §5 (authorize the charge on submit; authorization
   *   released or refunded in full if an order can't be filled), §7
   * - src/app/orders/page.tsx (lookup by order number + checkout email)
   * Pending vs. posted holds described in general terms only; no timing given.
   */
  {
    slug: 'charged-twice-for-one-eye-drop-order',
    title: 'Charged twice for one eye drop order?',
    description:
      'Two charges for one order are often a pending hold beside the posted charge, or two separate orders. How to tell which, and when to call us.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Two charges for one eye drop order usually mean one of three things: a pending authorization shown next to the posted charge, a declined attempt your bank briefly displays, or a second order placed by accident. Compare the amounts and dates, look up your order at the order page, and check your email for a second confirmation. If you still see two posted charges, call us at {phone} with your order number.`,
      },
      { h: 'Pending vs. posted charges' },
      {
        p: `Card statements and banking apps often show two kinds of entries. A pending item is a hold the bank has placed while a payment is being settled. A posted item is the settled charge. Many banks show a pending entry and then replace it with the posted one, and for a while it can look like both exist. Banks set their own timing for this, and some display it differently in the app than on the monthly statement.`,
      },
      {
        list: [
          `Look at the labels: “pending,” “processing” or “authorization” versus “posted” or a settled date.`,
          `Check whether the two amounts match exactly.`,
          `Refresh later and see whether the pending one drops off on its own.`,
        ],
      },
      { h: 'How Quell charges your card' },
      {
        p: `When you submit payment on the secure page, run by Authorize.net, the order total is authorized and captured in one step. Our [terms](/terms) say you authorize the charge when you submit the order. That total is the bottles plus shipping, as the cart showed it. There’s no separate deposit, no subscription and no later charge for the same order, so a single completed checkout produces one charge.`,
      },
      { h: 'Did I place two orders by mistake?' },
      {
        p: `This happens more than people expect: a slow connection, a tap on Pay that didn’t seem to register, a back button, and a second checkout. Each completed checkout is a separate order with its own order number. To find out:`,
      },
      {
        list: [
          `Search your inbox, including spam, for confirmation emails from the shop. Two emails with two different order numbers mean two orders.`,
          `Open the [order lookup](/orders) and enter each order number with the email you used at checkout.`,
          `Compare what each order contains and where it’s going.`,
        ],
      },
      {
        p: `If you did place a duplicate and the bottles from one order arrive unopened, they can be refunded within {returnDays} days of delivery, and you don’t send them back. Call {phone} with the order number you want refunded. Note that original shipping isn’t refunded under the terms, which is one more reason to call as soon as you spot a duplicate.`,
      },
      { h: 'A declined attempt that shows up anyway' },
      {
        p: `If your first try was declined, perhaps for a mistyped security code or billing ZIP, and the second try went through, some banks briefly display the failed attempt as a pending item. It isn’t a completed payment, and the bank removes it on its own schedule. Your bank can confirm whether an entry is a real charge or a released hold. Only the attempt that completed has an order confirmation email behind it.`,
      },
      { h: 'Two different amounts' },
      {
        p: `If the two charges don’t match, it’s worth looking at each separately before assuming a double charge:`,
      },
      {
        list: [
          `One may include shipping ({shipping}) and the other not, if you placed one smaller order and one of {freeBottles} or more bottles.`,
          `One may be a different purchase from another merchant with a similar name on the statement.`,
          `A refund appears as a credit, not a charge, and may show up separately from the original.`,
        ],
      },
      { h: 'What to have ready before you call' },
      {
        list: [
          `Your order number or numbers, from the confirmation email.`,
          `The email address used at checkout.`,
          `The date and exact amount of each charge as your bank shows it, and whether each is pending or posted.`,
          `The last four digits of the card, if asked. Never share the full card number by email or text.`,
        ],
      },
      {
        p: `Then call {phone}, {hours}, or reach us through [the contact page](/about#contact). Our guide on [what to have ready before you call](/guides/before-you-call-about-an-order) has more.`,
      },
      { h: 'When to call your bank instead' },
      {
        p: `If you see a charge you don’t recognize at all, with no order confirmation and no order you placed, call the number on the back of your card. Your bank handles suspected fraud and can tell you exactly what each entry is. For questions about a real order, we can look up what was charged on our side and fix a genuine duplicate. Please contact us before filing a dispute, since a dispute can slow down a simple refund.`,
      },
    ],
    faq: [
      {
        q: 'Why does my bank show two charges for one online order?',
        a: `Often one is a pending hold and the other the posted charge, and the hold drops off once the payment settles. Banks set that timing themselves. If both are posted, check whether you placed two orders.`,
      },
      {
        q: 'How do I know if I placed a duplicate eye drop order?',
        a: `Look for two confirmation emails with two different order numbers, then enter each at the order lookup page with your checkout email. Each completed checkout creates its own order.`,
      },
      {
        q: 'Can I get a refund on a duplicate eye drop order?',
        a: `Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Call {phone} with the order number of the duplicate.`,
      },
      {
        q: 'Will a declined card attempt show up as a charge?',
        a: `Some banks briefly show a declined attempt as a pending item, but it isn’t a completed payment and the bank removes it. Only a completed checkout has an order confirmation email behind it.`,
      },
    ],
  },
  /*
   * Facts for shipping-eye-drops-to-a-second-home, read 2026-11-22 from:
   * - src/app/api/checkout/route.ts (shipping address per order: name, line1,
   *   optional line2, city, state = any two letters, ZIP 5 or ZIP+4, country
   *   enum US, phone required)
   * - src/lib/shipping.ts (SHIPPABLE_COUNTRIES = ['US'])
   * - src/app/terms/page.tsx §3 (US only), §6 (risk of loss passes on
   *   delivery to the address you provide), §7
   * Assigned topic was "Does Quell ship to Puerto Rico?". The state field takes
   * any two letters and the code has no list of states or territories, so
   * whether a territory address ships could not be confirmed from the code;
   * this replacement topic was written instead, as the brief directs.
   */
  {
    slug: 'shipping-eye-drops-to-a-second-home',
    title: 'Shipping eye drops to a vacation home or second address',
    description:
      'Each Quell order takes its own US shipping address, so you can send drops to a lake house or winter home. What to check before you do.',
    category: 'shipping',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Yes. Each Quell order takes its own US shipping address at checkout, so you can send eye drops to a lake house, a winter home or a relative’s place you’re staying at for a season. Type the full street address, add the unit or lot number if there is one, and give a phone number you’ll answer. Plan for someone to be there, because no delivery date is promised.`,
      },
      { h: 'How the shipping address works at checkout' },
      {
        p: `Checkout asks for a shipping address on every order. It doesn’t have to match your billing address or any address you used before. The fields are:`,
      },
      {
        list: [
          `First and last name of the person receiving it.`,
          `Street address, plus an optional second line for a unit, lot or suite.`,
          `City, the two-letter state code and a ZIP code.`,
          `A phone number, which is required.`,
        ],
      },
      {
        p: `Orders ship only within the United States, from Brentwood, Tennessee. If you have a home outside the country, the bottle has to travel with you instead. Our guide to [what checkout asks for](/guides/what-checkout-asks-for) explains each field.`,
      },
      { h: 'Can I ship to an address where I don’t live full time?' },
      {
        p: `Yes. The site doesn’t ask whether an address is your primary home. What matters is that the address is complete and that a package left there will be safe and found. Under our [terms](/terms), risk of loss passes on delivery to the address you provide, so a box left on the porch of an empty cabin for a week is a real concern. Some second homes are easier than others:`,
      },
      {
        list: [
          `A house in a regular neighborhood with a street address usually works like any delivery.`,
          `A home in a gated community may need the gate code or a front-office arrangement; check how your community handles packages.`,
          `A seasonal RV lot or park model should include the lot or site number on the second address line.`,
          `A rural cabin with no house number or a long private drive may be hard to find; ask a neighbor or caretaker how packages usually arrive there.`,
        ],
      },
      { h: 'Timing a delivery for your arrival' },
      {
        p: `No arrival date is promised, so don’t order for the day you arrive and hope it lines up. A few ways to handle it:`,
      },
      {
        list: [
          `Pack enough drops for the first stretch of your stay, and order the rest to arrive after you’re there.`,
          `Ship to your main home before you leave and carry the bottles with you.`,
          `If a caretaker, neighbor or relative is at the second home, put their name on the order and their phone number in the phone field.`,
        ],
      },
      {
        p: `Tracking arrives by email after the order ships, so you can see when it’s close. Our guide on [how to track your order](/guides/how-to-track-your-order) shows where to look.`,
      },
      { h: 'Heat and cold at an empty house' },
      {
        p: `The label’s storage line reads: {storage}. A package that sits on a sunny porch in an Arizona spring, or in a mailbox at a closed-up northern cabin, can move past that range. If the drops will arrive before you do, a neighbor who can bring the box inside is worth arranging. When you open it, check the liquid against the panel: {milky}. The label also says: {doNotUse}. Our guide to [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) has more.`,
      },
      { h: 'Switching addresses between orders' },
      {
        p: `There’s no saved shipping profile to update. Each checkout uses the address you type, and the site may remember details on that device to save you typing next time. Before you pay, read the address over once more, especially if you go back and forth between two homes. An order that goes to the wrong one is hard to redirect; see [what to do if you entered the wrong address](/guides/wrong-shipping-address).`,
      },
      { h: 'Your reorder reminder' },
      {
        p: `Quell isn’t a subscription. The site sends one reorder reminder email after an order, so you decide when to buy again and where it should go. If you split the year between two places, set your own reminder a few weeks before a move so the next bottles land where you’ll be.`,
      },
      { h: 'Cost and refunds' },
      {
        p: `Shipping is {shipping} per order, and {freeBottles} or more bottles ship free. If you order a season’s supply for the second home and end up with extra unopened bottles, they can be refunded within {returnDays} days of delivery without sending them back. Original shipping isn’t refunded. If an order arrives damaged, incorrect or with a broken seal, call {phone} within {returnDays} days and it will be replaced.`,
      },
    ],
    faq: [
      {
        q: 'Can I ship eye drops to my vacation home?',
        a: `Yes. Each order takes its own US shipping address, so you can send it to a vacation home. Include the full street address, any unit or lot number and a phone number you’ll answer.`,
      },
      {
        q: 'What if my package arrives before I get to my second home?',
        a: `It will be left as the carrier normally would, and risk of loss passes on delivery under our terms. Ask a neighbor or caretaker to bring it inside, or ship it so it arrives after you do.`,
      },
      {
        q: 'Does my shipping address have to match my billing address?',
        a: `No. The billing address belongs to the card and is entered on the payment page, while the shipping address is wherever you want the bottles to go in the US.`,
      },
      {
        q: 'Can I ship eye drops to an RV park lot?',
        a: `You can enter the park’s street address with your lot or site number on the second address line. Check with the park office how they handle packages for guests before you order.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-kansas-city-ks:
   * - NOAA Regional Climate Centers ACIS, https://data.rcc-acis.org/StnData,
   *   sid MKC, 1991-2020 monthly normals (raw: .daily-job/acis1122/MKC.json and
   *   .daily-job/c/MKC-extra.json)
   *   (KANSAS CITY DOWNTOWN AP, state MO in ACIS meta, elev 742 ft. Normal max:
   *   Jan 39.9, Feb 45.1, Jul 90.2, Aug 88.6, Dec 43.9 F. Normal min: Jan 22.2,
   *   Feb 26.4, Jul 71.9, Dec 26.7 F. Precip: Jun 5.33 (wettest), May 5.10,
   *   Jan 1.02 (driest), Dec 1.30; annual sum 38.13 in. Snowfall: Dec 3.5,
   *   Jan 3.4, Feb 3.2, Mar 0.4, Oct 0.3, Apr 0.1, Nov 0.1; annual 11.0 in.)
   * - relhum23.txt and wndspd23.txt have no row for WBAN 13988 (the Kansas
   *   City rows there are WBAN 03947, a different station), so no humidity or
   *   wind figure is given.
   */
  {
    slug: 'dry-eye-relief-kansas-city-ks',
    title: 'Dry eye relief in Kansas City, Kansas',
    description:
      'NOAA’s downtown Kansas City station logs January lows near 22°F and about 11 inches of snow a year. How a KCK winter dries your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `In Kansas City, Kansas, dry eyes are mostly a winter problem. NOAA’s normals for the downtown airport just across the state line put January lows near 22°F, and about 11 inches of snow falls in a normal year, so furnaces run for months. Keep heated air off your face, protect your eyes from cold wind, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'What NOAA’s downtown station shows' },
      {
        p: `The nearest NOAA station with full 1991 to 2020 normals is Kansas City Downtown Airport, which sits on the Missouri side of the line at about 742 feet. NOAA’s climate normals for that station include:`,
      },
      {
        list: [
          `About 38 inches of precipitation in a normal year, wettest in June (5.33 inches) and May (5.10).`,
          `January is the driest month at 1.02 inches, with December at 1.30.`,
          `About 11 inches of snow a year: 3.5 in December, 3.4 in January and 3.2 in February.`,
          `January runs from a normal low of 22.2°F to a high of 39.9°F.`,
          `July highs average 90.2°F, with lows near 72°F.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables carry a Kansas City row, but for a different station, so this page doesn’t borrow its numbers. The temperatures tell the main story: three months where the normal low stays well below freezing.`,
      },
      { h: 'Furnace season, November to March' },
      {
        p: `From late fall through early spring, most of the day in KCK is spent in heated air: at home, in the car, at work and in stores. Warming cold air without adding water lowers its relative humidity, and forced-air systems keep that dry air moving. The tear film’s watery layer evaporates faster in those conditions, and the eyes can start to feel gritty or tired by evening.`,
      },
      {
        list: [
          `Use a humidifier in the room where you sleep, and clean it as its maker says.`,
          `Turn the bedroom register down or angle it away from the bed.`,
          `Lower the thermostat a little at night so the heat cycles less often.`,
          `Keep space heaters pointed at your legs, not your face.`,
        ],
      },
      { h: 'Snow days and wind chill' },
      {
        p: `December through February brings most of the year’s snow, and with it scraping windshields, shoveling driveways and walking across icy lots. Cold wind on an open eye pulls moisture away quickly, and squinting into it doesn’t help much. Glasses or sunglasses with wide frames block more of the air. Snow cover also bounces sunlight back up, so a bright morning after a storm adds glare. If your eyes water outdoors and then feel dry once you’re inside, that’s a common pattern in cold weather; our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains it.`,
      },
      { h: 'Shift work, warehouses and long drives' },
      {
        p: `Plenty of jobs around Kansas City, Kansas, happen in big buildings with loading docks, high ceilings and blowers, or behind the wheel. Air from dock doors, overhead heaters and fans dries the eyes, and so does hours of watching the road with the heat on. A few habits help across all of these:`,
      },
      {
        list: [
          `Aim car and truck vents at your chest or the windshield.`,
          `Take a short break away from the airflow when you can, and blink slowly a few times.`,
          `On night shifts, notice that eyes often feel drier late in the shift; plan your break then.`,
          `Keep the eye drop bottle in an inside pocket, not on the dashboard or in a cold cab.`,
        ],
      },
      { h: 'Summer air conditioning' },
      {
        p: `June is the wettest month at the station, and July and August highs sit around 89 to 90°F. Summer dryness in KCK comes mostly from the indoors again: air conditioning cools the air and removes moisture, and ceiling fans move it across your face. If you’re at a desk under a supply vent, move the chair or ask about a deflector. Evenings outdoors at a ballgame or a backyard grill are often easier on the eyes than the office, apart from smoke and glare.`,
      },
      { h: 'Screens, winter evenings and blinking' },
      {
        p: `Early winter sunsets push more of the day onto screens. Concentrating on a screen slows the blink rate, and many blinks don’t fully close. Look away every so often, finish each blink, and keep the monitor slightly below eye level. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why a full blink matters.`,
      },
      { h: 'Quell and its label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the use this way: {uses}. The directions read: {directions}. It also says: {tip}.`,
      },
      {
        p: `The storage line is worth remembering in a Kansas City January: {storage}. A bottle left in a car through a 20-degree night falls well below that range. Read the caution too: {warnings}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Kansas City, Kansas' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Kansas City, Kansas, and the rest of the US. Guest checkout works, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised, so reorder before the bottle runs out, especially around the holidays. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Kansas City, Kansas page](/eye-drops/kansas-city-ks) and the [Kansas page](/eye-drops/state/kansas).`,
      },
      { h: 'When it’s a question for an eye doctor' },
      {
        p: `A lubricating drop doesn’t tell you why your eyes feel dry; an eye doctor can find the cause and decide what to do. The label says when to stop and ask a doctor: {stopUse} Light that hurts, vision that doesn’t clear with blinking, or one eye much worse than the other should be checked. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Kansas City, Kansas get?',
        a: `About 11 inches in a normal year at Kansas City Downtown Airport, the nearest NOAA station, using 1991 to 2020 normals. December, January and February each average a little over 3 inches.`,
      },
      {
        q: 'How cold does it get in Kansas City, Kansas in January?',
        a: `NOAA’s normals for the downtown airport station put the average January low at 22.2°F and the average high at 39.9°F, the coldest month of the year.`,
      },
      {
        q: 'Why are my eyes dry in the winter in Kansas City?',
        a: `Furnaces warm cold air without adding moisture, so indoor air turns dry, and forced air keeps it moving across your eyes. Cold outdoor wind adds to it.`,
      },
      {
        q: 'Does Quell ship to Kansas City, Kansas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Kansas City, Kansas, with guest checkout and tracking by email. No arrival date is promised, so order before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-centennial-co:
   * - NOAA Regional Climate Centers ACIS, https://data.rcc-acis.org/StnData,
   *   sid APA, 1991-2020 monthly normals (raw: .daily-job/acis1122/APA.json and
   *   .daily-job/c/APA-extra.json)
   *   (DENVER CENTENNIAL AP, elev 5870 ft. Normal max: Jan 44.6, Feb 45.7,
   *   Jun 81.2, Jul 87.3, Aug 84.5, Dec 44.0 F. Normal min: Jan 19.0, Jun 52.2,
   *   Jul 58.6, Dec 18.8 F (Jul swing 28.7, Jan 25.6). Precip: Dec 0.35
   *   (driest), Jan 0.41, Feb 0.43, Nov 0.53, Apr 1.94, May 2.04, Jun 1.98,
   *   Aug 2.25 (wettest); annual sum 15.02 in. Snowfall M.)
   * - Kansas City Downtown (MKC, same ACIS set): annual 38.13 in.
   * - relhum23.txt and wndspd23.txt have no row for WBAN 93067 (the Denver row
   *   is WBAN 03017), so no humidity or wind figure is given.
   */
  {
    slug: 'dry-eye-relief-centennial-co',
    title: 'Dry eye relief in Centennial, Colorado',
    description:
      'Centennial Airport sits near 5,870 feet and gets about 15 inches of precipitation a year. How altitude and big daily temperature swings dry your eyes.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Centennial’s air is dry for most of the year. NOAA’s normals for Centennial Airport, at about 5,870 feet, show roughly 15 inches of precipitation a year, and winter months that each get less than half an inch. Add strong sun and furnace heat from fall to spring, and the tear film loses water fast. Shield your eyes from wind and vents, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Centennial Airport’s climate normals' },
      {
        p: `NOAA lists the station as Denver Centennial Airport, and it’s the one closest to Centennial’s neighborhoods. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `About 15 inches of precipitation in a normal year.`,
          `December is the driest month at 0.35 inches, then January at 0.41 and February at 0.43.`,
          `August is the wettest at 2.25 inches, with May at 2.04 and June at 1.98.`,
          `July runs from a normal low of 58.6°F to a high of 87.3°F.`,
          `January runs from 19.0°F to 44.6°F.`,
        ],
      },
      {
        p: `For contrast, NOAA’s downtown Kansas City station gets about 38 inches a year in the same normals, around two and a half times Centennial’s total. NOAA’s humidity and wind tables don’t include Centennial Airport, so this page gives no humidity or wind number for it.`,
      },
      { h: 'Does altitude make your eyes drier?' },
      {
        p: `People moving to the south metro often ask this. Altitude matters mainly because of what comes with it here: low precipitation, intense sunshine and frequent wind. Dry, moving air speeds evaporation from the eye’s surface, and bright light makes people squint and blink less fully. Newcomers tend to notice it in the first weeks; long-time residents notice it on windy days and in heated rooms. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains the tear film side of this.`,
      },
      { h: 'A 29-degree swing between morning and afternoon' },
      {
        p: `One thing sets Centennial’s numbers apart: the daily range. In July the normal low and high sit almost 29 degrees apart, and in January about 26. That means a cold start, a warm afternoon and another cold evening, and usually a heater in the morning and air conditioning or open windows by mid-afternoon, sometimes within a single spring or fall day. Each switch changes the air around your eyes.`,
      },
      {
        list: [
          `Dress in layers so you can turn the car heat down sooner on the morning drive.`,
          `Keep dashboard vents aimed away from your face whether they’re blowing warm or cool.`,
          `Wear sunglasses on the afternoon drive home, when the sun is lower and brighter.`,
          `Notice when your eyes feel worst; for many people here it’s late afternoon after a day indoors.`,
        ],
      },
      { h: 'Winter: the driest months indoors and out' },
      {
        p: `December through February at the station average less than half an inch of precipitation each, and normal lows sit near 19°F. Snow comes and goes, but the air stays dry, and indoor heating makes it drier. A bedroom humidifier, kept clean, and a lower thermostat at night help. Keep a heat register from blowing toward your bed or desk. If you drive up to the mountains for skiing, cold wind and glare off snow add to it; goggles cover more of the eye than sunglasses. See [ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes).`,
      },
      { h: 'Trails, parks and summer afternoons' },
      {
        p: `Summer is when Centennial gets most of its rain, often in short afternoon storms, with dry, sunny mornings before them. A run, bike ride or dog walk on an open trail means sun, breeze and sometimes dust. Wraparound sunglasses and a brimmed hat cut glare and block wind from the sides. If grit gets in your eye, rinse rather than rub.`,
      },
      { h: 'Office parks and long screen days' },
      {
        p: `Many Centennial residents work at a desk, whether in an office building or at home. Screens slow the blink rate, and the dry air means the tear film thins faster between blinks than it would in a humid place. Look away from the screen often, blink fully, and keep the monitor slightly below eye level. A small desk humidifier can help in a dry office. [Screens and your tear film](/guides/screens-and-your-tear-film) has more.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its use: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `Handling: {tip}.`,
          `Caution: {warnings}.`,
          `Storage: {storage}. A car parked at a trailhead on a summer afternoon, or outside on a January night, can move outside that range.`,
          `Appearance: {milky}. {doNotUse}.`,
        ],
      },
      {
        p: `The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Centennial' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Centennial and every other US address. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order with some supply left. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Local details are on the [Centennial page](/eye-drops/centennial-co) and the [Colorado page](/eye-drops/state/colorado).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back despite changes to your rooms and routine, an eye doctor can find the cause and decide what to do. The label lists when to stop: {stopUse} Light that hurts, blurry vision that doesn’t clear, or a sudden change in one eye should be checked soon. The [self-check](/self-check) can help you put symptoms into words before a visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much precipitation does Centennial, Colorado get?',
        a: `About 15 inches in a normal year at Centennial Airport, using NOAA’s 1991 to 2020 normals. August is the wettest month at 2.25 inches and December the driest at 0.35.`,
      },
      {
        q: 'What is the elevation of Centennial Airport?',
        a: `NOAA lists the Centennial Airport weather station at about 5,870 feet above sea level, in its 1991 to 2020 climate normals.`,
      },
      {
        q: 'Why do my eyes feel dry after moving to the Denver suburbs?',
        a: `The south metro gets little precipitation, with strong sun, frequent wind and long heating seasons. Dry, moving air speeds evaporation from the eye, and many newcomers notice it within weeks.`,
      },
      {
        q: 'Can I order Quell to Centennial, Colorado?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Centennial with guest checkout and email tracking. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
    ],
  },
  /*
   * Facts for do-i-have-to-send-eye-drops-back-for-a-refund, read 2026-11-22:
   * - src/app/terms/page.tsx §7 (unopened: contact within 30 days of delivery,
   *   product price refunded, no need to send it back, can't be resold,
   *   original shipping not refunded; opened: no refund, return or resale;
   *   damaged/incorrect/broken seal: replaced at no charge within 30 days;
   *   call the phone line with the order number)
   * - src/lib/product-content.ts RETURNS_SUMMARY ({returns} token)
   */
  {
    slug: 'do-i-have-to-send-eye-drops-back-for-a-refund',
    title: 'Do I have to send eye drops back for a refund?',
    description:
      'No. Unopened Quell bottles are refunded within 30 days of delivery without being mailed back. What qualifies, how to ask, and what to do with the bottle.',
    category: 'returns',
    addedOn: '2026-11-22',
    body: [
      {
        p: `No. For an unopened bottle of Quell, you call within {returnDays} days of delivery with your order number, and the product price is refunded without the bottle being mailed back. Opened bottles can’t be refunded. If an order arrives damaged, incorrect or with a broken seal, it’s replaced instead, and again there’s nothing to send. The bottle you keep is yours.`,
      },
      { h: 'The three cases in Quell’s refund policy' },
      {
        p: `Our [terms](/terms) split everything into three situations. Which one you’re in decides what happens:`,
      },
      {
        list: [
          `Unopened, and you’ve changed your mind: the product price is refunded if you contact us within {returnDays} days of delivery. You don’t send it back. Original shipping isn’t refunded.`,
          `Opened: eye drops that have been opened can’t be refunded, returned or resold.`,
          `Damaged, incorrect, or a broken tamper seal on arrival: contact us within {returnDays} days and the order is replaced at no charge.`,
        ],
      },
      {
        p: `The short version, as it appears at checkout, is: {returns}.`,
      },
      { h: 'How to ask for a refund, step by step' },
      {
        list: [
          `Find your order number in the confirmation email. If you can’t, our guide to [finding past orders](/guides/finding-past-orders) shows where to look.`,
          `Count the unopened bottles you want refunded and check the date the order was delivered.`,
          `Call {phone} during {hours}. The terms name the phone line as the way to request a refund or replacement.`,
          `Give the order number and say how many unopened bottles you’re asking about.`,
        ],
      },
      {
        p: `There’s no return label to print, no box to tape up and no trip to drop anything off.`,
      },
      { h: 'Why don’t I have to mail it back?' },
      {
        p: `Once a bottle has left our hands, there’s no way to confirm it was stored the way its label requires. The label’s storage line is {storage}, and a box that sat in a hot mailbox or a cold car can’t be checked from the outside. Since a returned bottle couldn’t be resold anyway, collecting it would only add postage and a trip for you. Our guide on [why we don’t ask for unopened bottles back](/guides/why-we-do-not-ask-for-bottles-back) has the background.`,
      },
      { h: 'What should I do with the bottle I keep?' },
      {
        p: `It’s yours to keep. If you plan to use it later, store it as the label says and check it before the first use. The panel’s Do not use line reads: {doNotUse}. The normal look, per the panel: {milky}. If you don’t want it, a few sensible options:`,
      },
      {
        list: [
          `Keep it unopened in a cool, dry cupboard for later.`,
          `Give it to an adult in your household who uses lubricating drops, after they’ve read the label’s caution: {warnings}.`,
          `Discard it the way you handle other unused medicines in your area.`,
        ],
      },
      {
        p: `Wherever it goes, keep it where children can’t reach it.`,
      },
      { h: 'What counts as unopened?' },
      {
        p: `An unopened bottle is one with its tamper seal intact that hasn’t been used. If you broke the seal to check the liquid and didn’t put a drop in your eye, it’s still opened. If the seal was already broken when the package arrived, that’s the third case, a broken-seal order, and it’s replaced rather than refunded. Our guide to [a broken tamper seal](/guides/broken-tamper-seal) explains what to look for.`,
      },
      { h: 'Partial refunds on multi-bottle orders' },
      {
        p: `If you ordered several bottles and opened one, the rest can still be refunded as long as they’re unopened and you call within {returnDays} days of delivery. The refund covers the product price of those bottles. Shipping isn’t refunded. If you ordered {freeBottles} or more to get free shipping, there was no shipping charge to begin with.`,
      },
      { h: 'Refunds on gifts and orders for someone else' },
      {
        p: `The person who placed the order has the order number and the card that was charged, so they’re the one who should call. A refund goes back to the card used, not to the recipient. If you’re the recipient and don’t need the drops, let the buyer know within the {returnDays} days so they can call.`,
      },
      { h: 'When the {returnDays} days have passed' },
      {
        p: `The window is counted from delivery, not from the order date. If it has passed, the terms don’t provide for a refund on an unopened bottle, so check the delivery date in your tracking email before you call. Questions about an unusual situation can still go to {phone} or through [the contact page](/about#contact).`,
      },
    ],
    faq: [
      {
        q: 'Do I need to return eye drops to get my money back?',
        a: `Not for Quell. Unopened bottles are refunded within {returnDays} days of delivery without being sent back. Call {phone} with your order number.`,
      },
      {
        q: 'What do I do with eye drops after I get a refund?',
        a: `The bottle is yours to keep. Store it as the label directs if you’ll use it later, give it to an adult who uses lubricating drops, or discard it as you would other unused medicines.`,
      },
      {
        q: 'Is shipping refunded when I return unopened eye drops?',
        a: `No. The terms refund the product price of unopened bottles, and original shipping isn’t refunded. Orders of {freeBottles} or more bottles had no shipping charge.`,
      },
      {
        q: 'Can I get a refund if I broke the seal but didn’t use the drops?',
        a: `No. A bottle with a broken seal counts as opened, and opened eye drops can’t be refunded. A seal that arrived broken is different: that order is replaced.`,
      },
    ],
  },
  /*
   * Facts for what-does-the-poison-control-line-on-eye-drops-mean, 2026-11-22:
   * - src/lib/product-content.ts DRUG_FACTS.keepOutOfReach ({swallowed} token)
   * - src/components/DrugFactsPanel.tsx (row heading "KEEP OUT OF REACH OF
   *   CHILDREN")
   * - https://poisoncenters.org/ fetched 2026-11-22: America's Poison Centers,
   *   Poison Help line 1-800-222-1222, member centers give expert advice
   *   24/7/365 at no cost. (poisonhelp.hrsa.gov returned 403.)
   * No directions for children are given; the guide sends readers to Poison
   * Help, 911 or a doctor.
   */
  {
    slug: 'what-does-the-poison-control-line-on-eye-drops-mean',
    title: 'What does the Poison Control line on eye drops mean?',
    description:
      'The “if swallowed” line on an eye drop label tells you what to do if the drops end up in someone’s mouth. What each part means and how to be ready.',
    category: 'label',
    addedOn: '2026-11-22',
    body: [
      {
        p: `The Poison Control line on an eye drop label tells you what to do if the drops are swallowed instead of used in the eye. On Quell’s Drug Facts panel it reads: {swallowed}. It sits under the heading about keeping the product out of reach of children. In the US, Poison Help is 1-800-222-1222, which America’s Poison Centers lists as free and answered around the clock.`,
      },
      { h: 'Where the line appears on the panel' },
      {
        p: `Drug Facts panels follow a set order, and near the end comes a row headed “Keep out of reach of children.” On Quell’s panel, the instruction in that row is the swallowing line. It’s short on purpose, because it’s written to be read quickly by someone who is worried. You can see it in place on our [Drug Facts page](/drug-facts), and our guide on [how to read a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) shows where it fits among the other sections.`,
      },
      { h: 'What each part of the sentence means' },
      {
        list: [
          `“If swallowed”: the line is about the drops going in by mouth, by accident or otherwise. It isn’t about the small amount that drains from the eye into the nose and throat after normal use, which some people notice as a taste.`,
          `“Get medical help”: talk to a medical professional, which can mean calling a doctor, going to urgent care or, in an emergency, calling 911.`,
          `“Or contact a Poison Control Center”: poison centers give advice by phone about what was swallowed and what to do next.`,
          `“Immediately”: don’t wait to see whether symptoms show up before calling.`,
        ],
      },
      { h: 'What is a Poison Control Center?' },
      {
        p: `Poison centers are services staffed to answer questions about possible poisonings. America’s Poison Centers, the national association for US poison centers, lists the Poison Help line as 1-800-222-1222 and says its member centers give expert advice 24/7/365 at no cost. Calling that number connects you with a center, and the person on the line will ask what was swallowed, how much, and by whom.`,
      },
      { h: 'Why is a poison warning on eye drops at all?' },
      {
        p: `An eye drop is a drug made for one place: the surface of the eye. The label’s caution states this: {warnings}. Anything made for the eye isn’t meant to be swallowed, and a small bottle with a twist cap can end up in a mouth, especially a child’s. The line isn’t a statement that the drops are especially dangerous; it’s the standard instruction for what to do if a product meant for outside use goes inside.`,
      },
      { h: 'What to have ready if you call' },
      {
        p: `The person answering will want details, so keep the bottle and carton with you when you call. Useful things to read out:`,
      },
      {
        list: [
          `The product name and the full ingredient list. The active ingredients are {actives}, and the inactive ingredients are {inactives}.`,
          `The size of the bottle, {size}, and roughly how much is missing.`,
          `When it happened, and the age and approximate weight of the person.`,
          `Any allergies, especially to eggs or birds, since the label cautions about those.`,
        ],
      },
      {
        p: `Call 911 instead if the person has collapsed, is having a seizure, has trouble breathing or can’t be woken. Our guide on [what to do if someone swallows eye drops](/guides/what-to-do-if-someone-swallows-eye-drops) covers the next steps in more detail.`,
      },
      { h: 'Where to keep the bottle' },
      {
        p: `The row heading is the first line of defense. A few habits make it easier to follow:`,
      },
      {
        list: [
          `Keep the bottle in a high cabinet or a closed drawer, not on a nightstand or bathroom counter.`,
          `In a purse or work bag, use a zipped inside pocket.`,
          `Put the cap back on right after each use.`,
          `Store it where the label says: {storage}.`,
          `When visiting a home with children, keep the bottle in your own bag.`,
        ],
      },
      {
        p: `More ideas are in our guide to [keeping eye drops out of children’s reach](/guides/keep-out-of-reach-of-children).`,
      },
      { h: 'Does the label tell you how to use drops on a child?' },
      {
        p: `No. Quell’s label doesn’t give directions for children, and this page doesn’t either. If you’re wondering whether a child should use any eye drop, ask the child’s doctor or a pharmacist. The label’s directions, {directions}, are the only dosing it gives.`,
      },
      { h: 'Save the number before you need it' },
      {
        p: `Add 1-800-222-1222 to your phone’s contacts under “Poison Help.” It’s faster than searching for it when you’re worried. For questions about your order, not about health, call us at {phone} during {hours}; for anything about a swallowed product, call Poison Help or a doctor, not a shop.`,
      },
    ],
    faq: [
      {
        q: 'What does “if swallowed, get medical help” mean on eye drops?',
        a: `It means that if the drops go in by mouth, you should contact a medical professional or a poison center right away, without waiting for symptoms. In the US, Poison Help is 1-800-222-1222.`,
      },
      {
        q: 'Is Poison Control free to call?',
        a: `America’s Poison Centers says its member centers give expert advice at no cost, 24/7/365, through the Poison Help line at 1-800-222-1222.`,
      },
      {
        q: 'Why do eye drops say keep out of reach of children?',
        a: `Drug Facts panels carry that heading. Eye drops are made for the surface of the eye, not for swallowing, and a small bottle is easy for a child to pick up and open.`,
      },
      {
        q: 'What should I tell Poison Control about swallowed eye drops?',
        a: `Read out the product name and ingredient list from the carton, the bottle size and roughly how much is missing, when it happened, and the person’s age and weight.`,
      },
    ],
  },
  /*
   * Facts for are-there-dyes-or-fragrance-in-quell-eye-drops, read 2026-11-22:
   * - src/lib/product-content.ts DRUG_FACTS.activeIngredients ({actives}),
   *   inactiveIngredients ({inactives}, {inactiveCount}), otherInformation
   *   ({milky}, {storage}), doNotUse, APPEARANCE_NOTE ({appearance}).
   * The panel lists no dye, colorant, fragrance or perfume; the guide says only
   * that none appears on the list and makes no claim about scent.
   * Assigned topic was "Is polysorbate 80 a preservative?". The inventory
   * already answers it (FAQ "Is polysorbate 80 a preservative in eye drops?"
   * under is-polysorbate-80-in-eye-drops-safe, plus three more polysorbate 80
   * guides), so this fresh formula topic replaced it.
   */
  {
    slug: 'are-there-dyes-or-fragrance-in-quell-eye-drops',
    title: 'Are there dyes or fragrance in Quell eye drops?',
    description:
      'No dye or fragrance appears on Quell’s ingredient list. Where the milky brown color comes from, and how to read the label for added colors or scents.',
    category: 'formula',
    addedOn: '2026-11-22',
    body: [
      {
        p: `No dye, colorant or fragrance appears on Quell’s Drug Facts panel, which lists three active ingredients and {inactiveCount} inactive ones. The milky brown look is described by the company as natural to the formula, not added color. If you react to dyes or perfumes, bring the full list to your doctor or pharmacist before using any new eye drop.`,
      },
      { h: 'How to check any eye drop for dyes and fragrance' },
      {
        p: `Every over-the-counter eye drop carries a Drug Facts panel, and the inactive ingredients section is where added colors or scents would be named. The steps are the same for any bottle:`,
      },
      {
        list: [
          `Find the “Inactive ingredients” section on the carton or the Drug Facts panel.`,
          `Read each name. Colorants often appear as a color name with a number; fragrance may appear as “fragrance,” “perfume” or a named scent.`,
          `Look at the active ingredients too, so you know the whole formula.`,
          `If a name is unfamiliar, ask a pharmacist what it is rather than guessing.`,
        ],
      },
      {
        p: `Our guide to [the inactive ingredients section](/guides/the-inactive-ingredients-section) explains how that part of the panel is laid out.`,
      },
      { h: 'Quell’s ingredient list, read for added colors' },
      {
        p: `Here is the full list as printed. The active ingredients, the ones that do the lubricating work, are {actives}. The inactive ingredients are {inactives}. None of these is a dye, colorant, perfume or fragrance. Several, such as the emu oil and the honey, are natural ingredients described in our [natural ingredients guide](/guides/natural-ingredients-in-quell). Every one of them is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'So why is Quell milky brown?' },
      {
        p: `The Other information section of the panel says: {milky}. The site adds this note beside the buy button: {appearance} In other words, the color is part of how the formula looks, not something added to make it look a certain way. Many lubricating drops are clear, so a brown, milky drop surprises people the first time. Our guide on [why Quell is milky brown](/guides/why-is-quell-milky-brown) goes further into what customers notice.`,
      },
      { h: 'When color is a warning sign' },
      {
        p: `Because the normal color is described on the label, a change from it matters. The Do not use section says: {doNotUse}. If a bottle looks different from earlier ones, for example much darker, separated in an unusual way or with particles in it, don’t put it in your eye. Call us at {phone} ({hours}) with your order number and a description of what you see.`,
      },
      { h: 'Does Quell have a smell?' },
      {
        p: `The label doesn’t describe a scent, and no fragrance is listed. Some natural ingredients have a faint smell of their own, and noses differ, so we won’t promise that the drops have no odor. What the panel does tell you is that no fragrance was added. If a bottle smells clearly wrong or very different from the last one, handle it like a color change: set it aside and call.`,
      },
      { h: 'If you’re sensitive to perfumes, dyes or other ingredients' },
      {
        p: `An ingredient list can tell you what isn’t there. It can’t tell you how your eyes will react to what is. A few points to weigh:`,
      },
      {
        list: [
          `The label carries this caution: {warnings}. The bird allergy part refers to the emu oil.`,
          `The list includes honey; if you react to honey or bee products, ask your doctor first.`,
          `Bring the full list to an eye doctor, allergist or pharmacist if you’ve had reactions to eye drops before.`,
          `If irritation follows any drop, the label’s guidance applies: {stopUse}`,
        ],
      },
      { h: 'Dyes, fragrance and preservatives are different questions' },
      {
        p: `People sometimes use “additive-free” loosely to mean no dyes, no fragrance and no preservatives at once. They’re separate. Quell is preservative-free, which is a statement about one kind of ingredient used to keep bottles from growing microbes; our guide on [what preservative-free means](/guides/what-does-preservative-free-mean) covers that. The absence of dyes and fragrance is simply what you see when you read the inactive ingredients list.`,
      },
      { h: 'Ordering and questions' },
      {
        p: `Quell comes in a {size} bottle and ships from Brentwood, Tennessee, to US addresses. For a question about the ingredient list or a bottle that looks wrong, call {phone} during {hours}, or [contact us](/about#contact). Medical questions about whether a drop suits your eyes belong with your eye doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'Do Quell eye drops have fragrance?',
        a: `No fragrance or perfume appears on Quell’s ingredient list. The label doesn’t describe a scent, and natural ingredients may have a faint smell of their own.`,
      },
      {
        q: 'Are there dyes in Quell eye drops?',
        a: `No dye or colorant appears on the Drug Facts panel. The milky brown color is described by the company as natural to the formula, and the label notes the appearance in its Other information section.`,
      },
      {
        q: 'How can I tell if eye drops contain fragrance or dye?',
        a: `Read the inactive ingredients section of the Drug Facts panel. Added colors usually appear as a color name with a number, and fragrance as “fragrance,” “perfume” or a named scent.`,
      },
      {
        q: 'Why are my eye drops brown instead of clear?',
        a: `If they’re Quell, that’s expected. The label says: {milky}. If a bottle looks different from that, follow the panel’s line, “{doNotUse},” and call {phone}.`,
      },
    ],
  },
  /*
   * Facts for why-do-eye-drops-feel-so-good, 2026-11-22: label tokens only,
   * plus the site's general tear-film facts (three layers; blinking spreads
   * tears; screens slow blinking; dry or moving air speeds evaporation).
   * Assigned topic was "Can I use eye drops after a long flight?". The
   * inventory already covers it (dry-eyes-after-flying with FAQ "What helps
   * dry eyes after a long flight?", plus dry-eyes-on-a-plane and
   * flying-home-for-christmas-with-eye-drops), so this fresh choosing
   * question, from keyword-suggest "why do eye drops", replaced it.
   */
  {
    slug: 'why-do-eye-drops-feel-so-good',
    title: 'Why do eye drops feel so good?',
    description:
      'A drop adds liquid to a dry eye surface, and your next blinks spread it. Why that feels like relief, why it fades, and when the feeling is a signal.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Eye drops feel good mostly because a dry eye is uncomfortable, and a lubricating drop puts liquid back on the surface. Your next few blinks spread it, so the lids glide more smoothly and the scratchy feeling eases. Part of it is simply the pause: you stop, look up and close your eyes for a moment. If you crave drops far more often than the label’s directions, that’s worth asking an eye doctor about.`,
      },
      { h: 'What a dry eye surface feels like' },
      {
        p: `The front of your eye is covered by the tear film, a thin coating with three layers: an outer oil layer, a watery middle and a mucus layer against the eye. When the watery part evaporates faster than it’s replaced, patches of the surface thin out. People describe that in different ways: gritty, sandy, tight, burning, heavy or just tired-feeling. The lids also drag a little more with each blink. That low-level discomfort is easy to stop noticing until something takes it away.`,
      },
      { h: 'What happens in the seconds after a drop' },
      {
        list: [
          `The drop lands on the eye and pools along the lower lid.`,
          `Your first blinks spread it across the surface, filling in thin spots.`,
          `The lids slide over a wetter surface, so blinking feels smoother.`,
          `Extra liquid drains toward the inner corner and down into the nose, which is why some people taste drops afterward.`,
        ],
      },
      {
        p: `That sequence is why the feeling arrives fast and then settles. Our guide on [how blinking spreads tears](/guides/how-blinking-spreads-tears) explains the blink’s part in more detail.`,
      },
      { h: 'Why the pause itself helps' },
      {
        p: `Putting in a drop forces a break. You look away from the screen, tip your head back, close your eyes and wait a moment. Screens slow your blink rate and leave blinks half finished, so even thirty seconds with your eyes closed lets the tear film recover a little. Some of the good feeling of a drop is the good feeling of resting your eyes, which you can also get without a bottle by looking across the room and blinking fully a few times. [Screens and your tear film](/guides/screens-and-your-tear-film) covers this.`,
      },
      { h: 'Why do eye drops feel cool?' },
      {
        p: `A bottle kept at room temperature is usually a bit cooler than the surface of your eye, so the drop can feel cool as it lands. That sensation fades as the liquid warms. Don’t chase the feeling by keeping drops cold unless the label allows it. Quell’s label gives a range: {storage}. Our guide on [using cold eye drops](/guides/can-you-use-cold-eye-drops) says more.`,
      },
      { h: 'Why the good feeling fades' },
      {
        p: `The conditions that dried your eyes are usually still there after the drop: the heater vent, the car’s air, the long document, the windy walk. Liquid on the surface keeps evaporating in dry or moving air. That’s why the most useful changes are often to the room and the habit, not just the bottle:`,
      },
      {
        list: [
          `Turn vents and fans so they don’t blow across your face.`,
          `Run a humidifier where you spend the most time, kept clean.`,
          `Take short breaks from close work and blink fully.`,
          `Wear wraparound sunglasses in wind.`,
        ],
      },
      { h: 'How Quell is designed to work' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the layer that slows evaporation from the surface. Its active ingredients are {actives}. The label’s stated use is: {uses}. Its directions are: {directions}. You can read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Is it bad to want eye drops all the time?' },
      {
        p: `Wanting a drop isn’t harmful in itself, but how often you reach for one is useful information. If you find yourself wanting drops much more often than the label’s directions, or if relief disappears within minutes every time, the drop isn’t solving the underlying problem. An eye doctor can find the cause and decide what to do. The label doesn’t cover using more than its directions, so ask a pharmacist or doctor before going beyond them.`,
      },
      { h: 'When a drop feels bad instead' },
      {
        p: `A drop that stings sharply, makes your vision stay blurry, or leaves your eye more uncomfortable than before isn’t doing what you want. Stop and look at the label: {stopUse} Also check the bottle against the panel before each use: {doNotUse}. Pain, light that hurts, or a sudden change in vision should go to an eye doctor soon. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
      { h: 'Getting more from each drop' },
      {
        list: [
          `Wash your hands, and follow the label: {tip}.`,
          `Tilt your head back, pull down the lower lid and let one drop fall into the pocket.`,
          `Close your eyes gently for a moment instead of blinking hard, so less drains away.`,
          `Use it when your eyes start to feel dry, not only when they’re already sore.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Why do eye drops feel so refreshing?',
        a: `A lubricating drop puts liquid back on a surface that has started to dry, and blinking spreads it so the lids glide more easily. The short pause with your eyes closed helps too.`,
      },
      {
        q: 'Why does the relief from eye drops wear off?',
        a: `The air and habits that dried your eyes are usually still there, so the liquid keeps evaporating. Changing vents, humidity and screen breaks often matters as much as the drop.`,
      },
      {
        q: 'Why do eye drops feel cold going in?',
        a: `A bottle at room temperature is usually cooler than the eye’s surface, so the drop can feel cool for a moment until it warms. Store drops in the range the label gives.`,
      },
      {
        q: 'Should I worry if I want eye drops constantly?',
        a: `If you want drops much more often than the label directs, or relief fades within minutes each time, see an eye doctor. They can find the cause and decide what to do.`,
      },
    ],
  },
  /*
   * Facts for can-i-use-eye-drops-after-a-lash-lift, 2026-11-22: label tokens
   * only ({warnings}, {tip}, {stopUse}, {directions}, {doNotUse}). The label
   * says nothing about cosmetic lash services, so the guide defers to the
   * technician's aftercare and to an eye doctor or pharmacist, and gives no
   * waiting period of its own. Replaces "Why do my eyes still feel dry after
   * eye drops?", already a guide (why-do-my-eyes-still-feel-dry-after-eye-drops).
   * Phrase from keyword-suggest "can i use eye drops after".
   */
  {
    slug: 'can-i-use-eye-drops-after-a-lash-lift',
    title: 'Can I use eye drops after a lash lift?',
    description:
      'The label doesn’t cover lash lifts, so follow your technician’s aftercare and ask your eye doctor. How to put in a drop without disturbing the lift.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Quell’s label doesn’t mention lash lifts, so it neither approves nor rules out using drops afterward. Follow the aftercare your lash technician gives you, especially any advice about keeping lashes dry for a while, and ask your eye doctor or a pharmacist if you’re unsure. If your eyes sting, ache or blur after the appointment, skip the drops and call a doctor.`,
      },
      { h: 'What a lash lift involves' },
      {
        p: `A lash lift curls your natural lashes upward using a setting solution applied close to the lash line, usually while your eyes stay closed for much of the appointment. Some lifts include a tint. Unlike extensions, nothing is glued to the lashes; the shape of your own lashes is changed. That means the question after a lift is mostly about the first hours and days, while the lashes are setting, and about what got near your eyes during the service.`,
      },
      { h: 'What the eye drop label says, and doesn’t' },
      {
        p: `Quell’s Drug Facts panel covers how to use the drop and when to stop. It doesn’t cover cosmetic services of any kind. The parts that do apply:`,
      },
      {
        list: [
          `Directions: {directions}.`,
          `Handling: {tip}.`,
          `Caution: {warnings}.`,
          `Before each use: {doNotUse}.`,
        ],
      },
      {
        p: `Nothing on the panel says how soon after a lift you can use it, so this page doesn’t set a waiting time. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ask your technician first' },
      {
        p: `Lash technicians usually send clients home with aftercare instructions, and those instructions differ by product and salon. Many cover water, steam, makeup and rubbing. Before you book, or before you leave, ask:`,
      },
      {
        list: [
          `How long should my lashes stay dry?`,
          `Does a liquid drop near the lash line count as getting them wet?`,
          `Which products were used near my eyes, including any tint?`,
          `What should I do if my eyes feel irritated tonight?`,
        ],
      },
      {
        p: `If the answer to the second question is “yes, avoid it,” and your eyes feel dry, ask your eye doctor or a pharmacist what to do in the meantime.`,
      },
      { h: 'Dry eyes after a lash lift' },
      {
        p: `Plenty of people notice their eyes feel dry or tired after the appointment. Lying back with your eyes closed for a long time, under a bright lamp, with a fan or air vent nearby, can leave the surface feeling dry when you open them. A few easy steps help without touching the lashes: blink fully a few times, look away from your phone, and keep car vents off your face on the drive home. Our guide on [how blinking spreads tears](/guides/how-blinking-spreads-tears) explains why a slow, complete blink matters.`,
      },
      { h: 'When irritation means stop' },
      {
        p: `Dryness is one thing; a reaction is another. If your eyes sting, burn, water heavily, swell or hurt after a lash lift, or if your vision changes, don’t reach for a lubricating drop to cover it. Rinse as your technician or a doctor directs and get medical advice. The drop’s own label lists when to stop: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
      { h: 'If you get the go-ahead to use drops' },
      {
        p: `Once your technician’s dry period is over, or your doctor has said drops are fine, a careful technique keeps the drop on the eye and off the lashes as much as possible:`,
      },
      {
        list: [
          `Wash your hands and keep the bottle tip from touching your lashes or skin.`,
          `Tilt your head back and look up toward the ceiling.`,
          `Gently pull down the lower lid, below the lashes, to make a small pocket.`,
          `Let one drop fall into the pocket, not onto the upper lashes.`,
          `Close your eyes gently. Dab any overflow from the cheek with a clean tissue instead of wiping across the lashes.`,
        ],
      },
      {
        p: `Our guide on [how to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) has more tips if aiming is hard.`,
      },
      { h: 'Lash lifts, extensions and serums are different' },
      {
        p: `Each cosmetic lash service raises its own questions. Extensions involve adhesive and a long wear period, which our guide on [eye drops with eyelash extensions](/guides/can-you-use-eye-drops-with-eyelash-extensions) covers. Lash serums are products you apply yourself each day. A lift is a single salon appointment that reshapes your own lashes, but the eye drop label doesn’t address any of the three, so the technician and your eye doctor are the people to ask.`,
      },
      { h: 'Egg or bird allergies' },
      {
        p: `Quell contains emu oil, which is why its label carries the egg and bird allergy caution. If you have either allergy, ask your doctor before using it at any time, lash lift or not. The full ingredient list, {inactives}, is worth bringing along.`,
      },
    ],
    faq: [
      {
        q: 'How long after a lash lift can I use eye drops?',
        a: `The eye drop label doesn’t say, and aftercare varies by salon and product. Ask your lash technician how long to keep lashes dry, and check with your eye doctor or a pharmacist if your eyes feel dry before then.`,
      },
      {
        q: 'Do eye drops ruin a lash lift?',
        a: `The label doesn’t address it. Technicians often ask clients to keep lashes dry for a while after a lift, so follow their aftercare, and aim drops into the lower lid pocket rather than onto the lashes.`,
      },
      {
        q: 'Why do my eyes feel dry after a lash lift?',
        a: `Lying with your eyes closed under a bright lamp, often near a fan or vent, can leave the surface feeling dry afterward. Full blinks and keeping air off your face help. Stinging or pain needs a doctor.`,
      },
      {
        q: 'What should I do if my eyes burn after a lash lift?',
        a: `Don’t cover it with a lubricating drop. Contact your technician and get medical advice, especially if your eyes hurt, swell or your vision changes.`,
      },
    ],
  },
  /*
   * Facts for eye-drops-before-or-after-a-warm-compress, 2026-11-22: label
   * tokens only. The label is silent on compresses, so no order or timing is
   * recommended; readers are sent to the doctor who suggested the compress.
   * Replaces "What happens if you use too many eye drops?", already a guide
   * (too-many-eye-drops-at-once, with FAQ "What happens if you use too much
   * eye drops?"). Phrase from keyword-suggest "eye drops before": "eye drops
   * before or after warm compress".
   */
  {
    slug: 'eye-drops-before-or-after-a-warm-compress',
    title: 'Eye drops before or after a warm compress?',
    description:
      'The eye drop label doesn’t give an order, so ask whoever suggested the compress. How to fit both into one routine without mixing them up.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Quell’s label doesn’t mention warm compresses, so it doesn’t set an order. If an eye doctor suggested the compress, ask them whether the drop should come before or after, and how long to wait between. Without that advice, keep the two steps separate: finish the compress, dry the skin around your eyes, wash your hands, then use the drop as its label directs.`,
      },
      { h: 'What the label covers' },
      {
        p: `A Drug Facts panel tells you how to use that one product. Quell’s says:`,
      },
      {
        list: [
          `Use: {uses}.`,
          `Directions: {directions}.`,
          `Handling: {tip}.`,
          `Caution: {warnings}.`,
        ],
      },
      {
        p: `It says nothing about heat, compresses, masks or lid routines, so any order you follow comes from your doctor, not the label. Our [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Why the order is a question for your doctor' },
      {
        p: `People use warm compresses for different reasons, and an eye doctor who recommends one usually has a specific routine in mind: how warm, how long, how often, and what comes after. That routine may include a drop at a particular point or not. Because the compress and the drop are being used together for your eyes in particular, the person who suggested the compress is the right one to fit the drop around it. If you’re putting a routine together yourself, a pharmacist can also answer questions about the drop.`,
      },
      { h: 'Questions to ask at your appointment' },
      {
        list: [
          `Should I use the eye drop before the compress, after it, or at a different time of day?`,
          `How long should I wait between the two?`,
          `How warm should the compress be, and for how long?`,
          `Is there anything I should stop doing if my eyes feel worse?`,
        ],
      },
      {
        p: `Our guide to [questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) has a longer list to bring along.`,
      },
      { h: 'Keeping the two steps from interfering' },
      {
        p: `Whatever order you’re given, a few practical points keep each step clean and make the drop easier to place:`,
      },
      {
        list: [
          `Use a clean washcloth or mask each time, and wash reusable ones as their maker directs.`,
          `Keep the eye drop bottle away from the sink and the warm water, and capped while you use the compress.`,
          `Pat the skin around your eyes dry before a drop, so it doesn’t mix with water on your lids and run down your cheek.`,
          `Wash your hands after handling the compress and before touching the bottle.`,
          `Keep the tip clean, as the label says.`,
        ],
      },
      { h: 'How warm is too warm?' },
      {
        p: `The skin of the eyelids is thin. A compress should feel comfortably warm, never hot. Microwavable eye masks and heated pads come with their own instructions, and those are the ones to follow for heating time. Test the temperature on the inside of your wrist first. If the skin turns sore or blisters, stop and call a doctor. None of this is on the eye drop label, which covers only the drop.`,
      },
      { h: 'Heat and the bottle' },
      {
        p: `Don’t warm the eye drop bottle itself in water or a microwave to match the compress. The label gives a storage range: {storage}. Heating a bottle can push it outside that range. A room-temperature drop is how the label expects it to be used. Our guide on [the temperature to store eye drops at](/guides/what-temperature-should-eye-drops-be-stored-at) explains the range.`,
      },
      { h: 'A sample evening routine to discuss with your doctor' },
      {
        p: `If you want something concrete to show your doctor, here is a routine with no order assumed; they can fill in the gaps:`,
      },
      {
        list: [
          `Wash your hands and face, and remove eye makeup gently.`,
          `Use the warm compress as your doctor directed.`,
          `Pat your lids dry and wash your hands again.`,
          `Use the drop at the point your doctor chose, following the label’s directions.`,
          `Note how your eyes feel the next morning, so you can report back.`,
        ],
      },
      { h: 'When to stop both and get advice' },
      {
        p: `If your eyes hurt, your vision changes, or irritation keeps going, stop the routine and call your eye doctor. The drop’s label is specific: {stopUse} A compress is a comfort measure; it isn’t a way to work out the cause of symptoms. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Should I use eye drops before or after a warm compress?',
        a: `The eye drop label doesn’t say. Ask the eye doctor who suggested the compress which order they want and how long to wait between the two.`,
      },
      {
        q: 'How long should I wait after a warm compress to use eye drops?',
        a: `There’s no waiting time on the Quell label. Your eye doctor can set one; in the meantime, dry your lids and wash your hands before using the drop.`,
      },
      {
        q: 'Can I warm up my eye drops before using them?',
        a: `Don’t heat the bottle. The label gives a storage range, and warming it in water or a microwave can push it outside that range.`,
      },
      {
        q: 'Is it okay to do a warm compress every night with dry eyes?',
        a: `That’s a question for your eye doctor, who can set how warm, how long and how often. Stop and call them if your lids get sore or your eyes feel worse.`,
      },
    ],
  },
  /*
   * Facts for dry-eyes-for-museum-guards-and-docents, 2026-11-22: label tokens
   * and the site's general tear-film facts. Work conditions described in
   * general terms only (standing in galleries, controlled indoor air,
   * spotlit objects in dim rooms, watching crowds, talking on tours, outdoor
   * grounds). No humidity figures, rules or statistics. Nearest existing
   * guides read: dry-eyes-for-security-guards (patrols, cameras, night
   * shifts) and dry-eyes-for-librarians; this one covers galleries and tours.
   */
  {
    slug: 'dry-eyes-for-museum-guards-and-docents',
    title: 'Dry eyes for museum guards and docents',
    description:
      'Dim galleries, bright spotlights, steady air handling and hours of watching crowds all dry the eyes. Practical habits for guards and docents.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Museum guards and docents spend long shifts in dim galleries lit by bright spotlights, in air that’s heated, cooled and kept moving by the building, while watching people and objects closely. Watching hard slows blinking, and moving air dries the tear film faster. Stand out of vents, blink fully between groups, use breaks to rest your eyes, and keep a lubricating drop for breaks, used as its label directs.`,
      },
      { h: 'What gallery work does to your eyes' },
      {
        p: `A gallery shift looks calm from the outside, but your eyes are busy the whole time. The main pressures:`,
      },
      {
        list: [
          `Vigilance: watching visitors near objects means a fixed, alert gaze, and people blink less when they concentrate.`,
          `Contrast: dark walls and spotlit works mean your eyes keep adjusting between bright and dim.`,
          `Air: big buildings move a lot of conditioned air, and a post near a supply grille sits in a steady stream.`,
          `Standing in one place: you can’t step outside or change rooms when your eyes feel dry.`,
          `Long days: many shifts run the whole time the doors are open, plus setup and closing.`,
        ],
      },
      { h: 'Find the air before it finds you' },
      {
        p: `When you get a new post, take a minute to notice where the air comes from. A ribbon or a tissue held up near the ceiling grilles shows it. If you can choose where to stand within the post, pick a spot outside the stream. Facilities staff usually set the building’s climate for the collection, so the air itself may not change, but where you stand can. Glasses, even plain ones, block some of the air from reaching the eye’s surface. The tear film’s watery layer evaporates faster in moving air, which our guide to [the tear film’s water layer](/guides/the-tear-films-water-layer) explains.`,
      },
      { h: 'Blinking on watch' },
      {
        p: `Guards are trained to keep their eyes on the room, and that’s exactly the habit that thins the tear film. A few ways to blink more without losing attention:`,
      },
      {
        list: [
          `Blink fully every time a group moves on or a new visitor enters.`,
          `Shift your gaze across the room in a slow sweep rather than staring at one point.`,
          `Look at something far away, such as a doorway at the end of the gallery, every so often.`,
          `On a break, close your eyes for half a minute before picking up your phone.`,
        ],
      },
      { h: 'For docents: talking, walking and spotlights' },
      {
        p: `Docents face a slightly different mix. A tour means talking for an hour or more while turning between visitors and objects, often facing spotlit works with the light angled toward you. Squinting into a spotlight cuts blinking short. Stand slightly to the side of a lit object rather than facing straight into its light, and pause between stops to blink and look down the gallery. If you hold a tablet or notes, raise them less and look at your group more; reading in dim light is tiring for the eyes too.`,
      },
      { h: 'Screens in the galleries and the back office' },
      {
        p: `Many museums now include video installations and touchscreen kiosks, and guards near them spend hours facing a glowing screen at the edge of their view. Docents often prepare tours on a laptop. Long screen time slows blinking in the same way watching a room does. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) covers set-up and breaks.`,
      },
      { h: 'Sculpture gardens and outdoor posts' },
      {
        p: `An outdoor post brings sun, wind and glare off stone and pavement. Sunglasses are worth asking about if your uniform rules allow them, and wraparound frames block wind from the sides. In winter, moving between a cold courtyard and a heated lobby all shift long dries the eyes on both ends.`,
      },
      { h: 'Using an eye drop on the job' },
      {
        p: `Most guards can’t step away from a post at will, so scheduled breaks are the natural time for a drop. Keep the bottle in a pocket or locker, not on a radiator or in a hot car. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label says:`,
      },
      {
        list: [
          `Use: {uses}.`,
          `Directions: {directions}. Plan the doses around your break schedule.`,
          `Handling: {tip}.`,
          `Storage: {storage}.`,
          `Caution: {warnings}.`,
        ],
      },
      {
        p: `Wash your hands before using it, especially after handling railings, doors and visitor maps. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'After the shift' },
      {
        p: `Eyes that have been on watch for hours often feel driest in the evening. Keep car vents off your face on the drive home, give your eyes a break before turning to a phone or TV, and keep the bedroom air comfortable. Our guide for [security guards](/guides/dry-eyes-for-security-guards) has more on night shifts and camera monitoring if your work includes them.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes feel dry most workdays despite these changes, an eye doctor can find the cause and decide what to do. The label also lists when to stop: {stopUse} Vision changes matter in a job that depends on watching closely, so don’t put off an appointment if things look blurred or light starts to hurt. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a museum?',
        a: `Gallery work combines a fixed, watchful gaze, which slows blinking, with conditioned air the building keeps moving and bright spotlights in dim rooms. Moving air and fewer blinks let the tear film thin.`,
      },
      {
        q: 'Can museum guards wear sunglasses at outdoor posts?',
        a: `That depends on your employer’s uniform rules, so ask your supervisor. Where they’re allowed, wraparound sunglasses cut glare and block wind from the sides.`,
      },
      {
        q: 'How can a docent keep their eyes comfortable during long tours?',
        a: `Stand to the side of spotlit objects instead of facing their light, pause between stops to blink and look down the gallery, and rest your eyes between tours.`,
      },
      {
        q: 'When can a museum guard use eye drops on shift?',
        a: `Usually on scheduled breaks, since posts can’t be left at will. Keep the bottle in a pocket or locker and follow the label’s directions for how often to use it.`,
      },
    ],
  },
  /*
   * Facts for dry-eyes-for-pianists-and-church-musicians, 2026-11-22: label
   * tokens and the site's general tear-film facts. Work conditions in general
   * terms (reading music at a fixed distance, dim lofts and sanctuaries,
   * seasonal heating, long holiday services, practice rooms, tablets for
   * scores). Christmas is Friday, Dec 25, 2026 (brief). Nearest existing
   * guide read: dry-eyes-for-musicians-and-performers (stage lights, haze,
   * touring); this one stays with the keyboard, the score and the church.
   */
  {
    slug: 'dry-eyes-for-pianists-and-church-musicians',
    title: 'Dry eyes for pianists and church musicians',
    description:
      'Reading a score for hours slows blinking, and church buildings swing from cold to heated. Habits for pianists, organ players and choir directors.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Pianists and church musicians read music at a fixed distance for long stretches, often in dim lofts or sanctuaries where the heat comes on just before a service. Steady reading slows blinking, and heated or moving air dries the tear film. Light the music well, blink fully at page turns and rests, keep vents off the bench, and use a lubricating drop as its label directs between rehearsals or services.`,
      },
      { h: 'Why reading music dries the eyes' },
      {
        p: `Sight-reading and following a score take steady concentration. When you focus that hard, you blink less often and many blinks don’t fully close. The tear film, a thin coating of oil over water over mucus, then thins between blinks, and the eyes start to feel gritty or tired. A pianist practicing a difficult passage for an hour, or someone at the organ through a long service, is in that state the whole time. Our guide to [why eyes get dry when you focus](/guides/why-do-my-eyes-get-dry-when-i-focus) explains the blink side of this.`,
      },
      { h: 'Build blinks into the music' },
      {
        list: [
          `Use page turns as a cue for a full, slow blink.`,
          `During rests, long held chords or the sermon, look away from the score toward the back of the room.`,
          `Practice in shorter blocks with a break between them, instead of one long session.`,
          `When memorizing, close your eyes for a phrase or two; it rests the eyes and tests your memory.`,
        ],
      },
      { h: 'Light on the music, not in your eyes' },
      {
        p: `Dim lofts and sanctuaries make you squint at the page, and squinting shortens blinks. A good music light makes a difference:`,
      },
      {
        list: [
          `Aim the lamp at the music desk so the page is evenly lit without glare off the paper.`,
          `Keep bare bulbs and bright windows out of your line of sight.`,
          `If the sanctuary dims for a candlelight service, check your stand light at rehearsal so there are no surprises.`,
          `Enlarge photocopies of small print where your church’s or publisher’s permissions allow.`,
        ],
      },
      { h: 'Church buildings and the heat cycle' },
      {
        p: `Many churches heat the building only for services and rehearsals to save on fuel. That means a cold room on arrival, then a burst of hot, dry air from registers or blowers as the heat climbs. Organ consoles and pianos are sometimes placed near a wall register or under a supply vent. Notice where the air comes from and turn the bench or adjust the vent if you can. A small humidifier in a practice room or choir room, kept clean, can help, but check with whoever cares for the instruments first, since pianos and organs have their own needs.`,
      },
      { h: 'Tablets and digital scores' },
      {
        p: `Many pianists now read from a tablet with a page-turn pedal. A screen held at the same distance for hours has the same effect on blinking as paper, and a bright screen in a dim room adds glare. Turn the brightness down to match the room, use a warm display setting in the evening, and keep the tablet slightly below eye level so your lids cover more of the eye. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) has more.`,
      },
      { h: 'The Christmas season' },
      {
        p: `December is the busiest month for most church musicians. This year Christmas falls on a Friday, so many services will cluster on Thursday evening, Christmas Eve, and the weekend around it. Back-to-back rehearsals, a cantata, candlelight services and a full Sunday can mean many hours of reading in a heated building. Plan breaks between services, keep the eye drop bottle in your music bag, and get some daylight between events if you can. Our guide on [flying home for Christmas with eye drops](/guides/flying-home-for-christmas-with-eye-drops) is useful if you’re playing away from home.`,
      },
      { h: 'Choir directors and conductors' },
      {
        p: `Directing means watching singers, the score and the accompanist at once, often while facing bright stage or chancel lighting. Look up and around between phrases, and give your eyes a break during the sermon or readings. The same lighting and air advice applies to the choir loft.`,
      },
      { h: 'Using an eye drop between services' },
      {
        p: `A drop works more easily before a rehearsal or in a gap between services, not mid-piece. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label says:`,
      },
      {
        list: [
          `Use: {uses}.`,
          `Directions: {directions}.`,
          `Handling: {tip}. Wash your hands first, especially after handling hymnals and shared music.`,
          `Storage: {storage}. A car in a church lot in winter can drop below that range.`,
          `Caution: {warnings}.`,
        ],
      },
      {
        p: `The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If the notes look blurry even after blinking, if you need more and more light to read, or if your eyes feel dry most days, an eye doctor can find the cause and decide what to do. Changes in near vision are common with age, and a check can also sort out whether you need reading or computer glasses set to your music stand’s distance. The drop’s label lists when to stop: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired reading sheet music?',
        a: `Concentrating on a score slows blinking, so the tear film thins between blinks, and dim lighting makes you squint. Good light on the page and full blinks at page turns help.`,
      },
      {
        q: 'How should I light my piano music?',
        a: `Aim a lamp at the music desk so the page is evenly lit without glare off the paper, and keep bare bulbs and bright windows out of your line of sight.`,
      },
      {
        q: 'Why are my eyes dry in church in the winter?',
        a: `Many churches heat the building only for services, so warm, dry air blows in quickly from registers or blowers. Sitting near a vent dries the eyes faster.`,
      },
      {
        q: 'Can a church organ player use eye drops during a service?',
        a: `It’s easier between pieces or during a long reading than mid-piece. Keep the bottle in your music bag and follow the label’s directions for how often to use it.`,
      },
    ],
  },
  /*
   * Facts for dry-eyes-for-dog-groomers, 2026-11-22: label tokens and the
   * site's general tear-film facts. Work conditions in general terms (forced-
   * air pet dryers, loose hair and dander, shampoo and spray, bright task
   * lights, close detail work). No safety-gear rules or statistics. The label
   * is for people; no directions for animals (readers sent to a vet).
   * Replaces "Dry eyes for CAD drafters": dry-eyes-for-architects-and-drafters
   * already covers drafting and CAD (FAQ "Why do my eyes hurt after a long day
   * of CAD work?"), so a profession with no guide yet was chosen.
   */
  {
    slug: 'dry-eyes-for-dog-groomers',
    title: 'Dry eyes for dog groomers',
    description:
      'Forced-air dryers, flying hair, shampoo spray and close clipper work all wear on a groomer’s eyes. Habits that help through a full appointment book.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dog groomers work in a stream of moving air from pet dryers, with loose hair, dander and shampoo spray in the room and close, careful clipper and scissor work that slows blinking. All of that dries and irritates the eyes. Angle the dryer away from your face, wear glasses or a face shield where your shop uses them, blink fully between dogs, and use a lubricating drop on breaks as its label directs.`,
      },
      { h: 'What a grooming shift does to your eyes' },
      {
        list: [
          `Dryers: high-powered forced-air and stand dryers push a lot of warm air, and some of it comes back toward your face.`,
          `Airborne hair and dander: undercoats come loose during drying and brushing and drift at eye level.`,
          `Water, shampoo and spray: rinsing and finishing sprays put fine droplets in the air.`,
          `Close detail work: trimming around faces and paws takes steady focus, which cuts down blinking.`,
          `Long days on your feet: a full book of appointments leaves little time to step away.`,
        ],
      },
      {
        p: `The tear film, the thin layer of oil, water and mucus that covers the eye, loses water faster in warm moving air, and every half-finished blink leaves part of it thinner. Our guide on [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why moving air matters so much.`,
      },
      { h: 'Dryer habits that spare your eyes' },
      {
        list: [
          `Work so the nozzle points away from you and the air blows toward the back of the coat.`,
          `Stand to the side of the stream rather than behind the dog where hair blows back.`,
          `Lower the force for faces and heads when the dog and the coat allow.`,
          `Turn off the dryer while you pause to check the coat, rather than letting it blow into the room.`,
          `If your shop has a dedicated drying area, keep the door closed so the rest of the room stays calmer.`,
        ],
      },
      { h: 'Hair, dander and what to do when something gets in' },
      {
        p: `A stray hair or a fleck of dander in the eye is part of the job, and rubbing makes it worse. Rinse with clean water or an eye wash from your shop’s first aid supplies, and blink gently. A lubricating drop isn’t a rinse. If shampoo, a finishing spray or a cleaning product splashes in your eye, rinse right away as the product’s own label directs and get medical advice if it still hurts. Quell’s label doesn’t cover splashes, and they’re a question for a doctor. Glasses, goggles or a face shield block a lot of what flies around, and many groomers wear them during drying.`,
      },
      { h: 'Close work: faces, paws and blinking' },
      {
        p: `Scissoring around a dog’s eyes and ears takes concentration, and people blink less when they focus. Build in pauses. When you set the scissors down to reposition the dog, take a full blink or two and look across the room. Keep your task light aimed at the dog, not at your own eyes, and avoid working in your own shadow, which makes you lean in and squint. Our guide on [why eyes get dry when you focus](/guides/why-do-my-eyes-get-dry-when-i-focus) explains the blink part of this.`,
      },
      { h: 'Mobile groomers and grooming vans' },
      {
        p: `A van puts the dryer, the tub and you in a small space, so air and hair concentrate quickly. Crack a door or run the vent fan between dogs if you can, and keep the van’s climate control blowing at the floor rather than at your face while you drive between stops. Keep the eye drop bottle in a cabinet or bag away from the water heater and out of a sunny dashboard, since the label gives a storage range: {storage}.`,
      },
      { h: 'Eye drops are for you, not the dogs' },
      {
        p: `Quell is a human eye drop. Its label gives directions for people only, and this page doesn’t give any for animals. If a dog’s eyes look dry, irritated or goopy, the owner should ask a veterinarian. Keep your own bottle in a closed drawer or bag, separate from grooming supplies, so it never ends up used on a dog by mistake.`,
      },
      { h: 'Using a lubricating drop on breaks' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label says:`,
      },
      {
        list: [
          `Use: {uses}.`,
          `Directions: {directions}. A morning dose, one at lunch and one after the last dog works for many schedules.`,
          `Handling: {tip}. Wash your hands well first, since they’ve been in coats, shampoo and ear cleaner.`,
          `Caution: {warnings}.`,
        ],
      },
      {
        p: `Step out of the grooming room to use it, away from airborne hair. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'After the last appointment' },
      {
        p: `Eyes often feel driest at the end of a long grooming day. Wash your face and hands, change out of hair-covered clothes before driving home if you can, and keep car vents off your face. Give your eyes a screen break before scrolling through tomorrow’s bookings. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) covers the evening side.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay itchy, watery or scratchy most days, or a particle feels stuck after rinsing, an eye doctor can find the cause and decide what to do. The label lists when to stop: {stopUse} Pain or vision changes after something got in your eye shouldn’t wait. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry from grooming dogs?',
        a: `Pet dryers blow warm, fast air that speeds evaporation from the eye, loose hair and dander drift at eye level, and close trimming work slows your blinking.`,
      },
      {
        q: 'What should a groomer do if dog hair gets in their eye?',
        a: `Don’t rub. Rinse with clean water or an eye wash and blink gently. If it still feels stuck or hurts, see a doctor.`,
      },
      {
        q: 'Can I use my eye drops on a dog?',
        a: `Quell’s label gives directions for people only. If a dog’s eyes look irritated or dry, the owner should ask a veterinarian.`,
      },
      {
        q: 'Should dog groomers wear eye protection?',
        a: `Many wear glasses, goggles or a face shield during drying, since they block flying hair and spray. Your shop or a safety supplier can help you choose what fits your work.`,
      },
    ],
  },
  /*
   * Facts for dry-eyes-for-nannies-and-babysitters, 2026-11-22: label tokens
   * and the site's general tear-film facts. Adult worker only; no directions
   * for children (label silent; readers sent to the child's doctor). Nearest
   * existing guide read: dry-eyes-for-caregivers (care of adults/relatives);
   * this one covers childcare in other families' homes, playgrounds, car
   * rides, naps and evening sitting.
   */
  {
    slug: 'dry-eyes-for-nannies-and-babysitters',
    title: 'Dry eyes for nannies and babysitters',
    description:
      'Playground wind, car rides, other people’s thermostats and late nights all dry a nanny’s eyes. Habits that help, and keeping your drops away from kids.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Nannies and babysitters spend long days in other families’ homes, on windy playgrounds and in cars, often ending with late evenings in front of a screen once the kids are asleep. Heated or air-conditioned rooms, outdoor wind and short sleep all dry the eyes. Wear sunglasses outside, keep vents off your face, rest your eyes at nap time, and keep your eye drops in your own bag, out of children’s reach.`,
      },
      { h: 'Why childcare is hard on the eyes' },
      {
        list: [
          `Someone else’s thermostat: you work in air set by the family, which may be warmer or drier than you’d choose.`,
          `Outdoor time: playgrounds, parks and school pickups mean sun, wind and glare off pavement and sand.`,
          `Driving: car seats, errands and activities mean time behind the wheel with the climate control running.`,
          `Watching closely: keeping eyes on a toddler at the playground is steady, alert watching, and people blink less when they concentrate.`,
          `Long or late hours: early starts, evening sitting jobs and the drive home after.`,
        ],
      },
      { h: 'On the playground' },
      {
        p: `Wind speeds evaporation from the eye, and squinting into sun shortens blinks. Wraparound sunglasses cover more of the eye than flat lenses and block wind from the sides, and a brimmed hat cuts overhead glare. Pick a bench where the sun is behind you and you can still see every child. If sand or grit gets in your eye, rinse rather than rub, and finish the rinse before you go back to watching. In winter, cold wind does the same as summer sun; see our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind).`,
      },
      { h: 'In the family’s car' },
      {
        list: [
          `Aim the vents at your chest or the windshield, not your face, and check the rear vents are set for the kids’ comfort, not blowing forward at you.`,
          `Keep sunglasses in the car for afternoon pickups when the sun is low.`,
          `Don’t store your eye drops in the glove box or console; car interiors get hotter and colder than the label allows.`,
        ],
      },
      { h: 'Working in someone else’s home' },
      {
        p: `You can’t always change the heat, but you can change where you sit. Notice where the floor registers and ceiling vents blow and set up the play area or your chair outside the stream. If the family runs a humidifier in a child’s room, that’s their call, but it’s fair to mention it if the home feels very dry in winter. A short, friendly conversation about room temperature is part of many nanny-family arrangements anyway.`,
      },
      { h: 'Nap time is eye time' },
      {
        p: `Nap time is often the only quiet stretch in a nanny’s day, and many people use it for a phone or laptop. That keeps the eyes working at close range with little blinking. Before checking messages, close your eyes for a minute or look out a window at something far away. If you use nap time for a drop, it’s a good moment: the kids are asleep, your hands can be washed, and the bottle goes straight back in your bag afterward. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) has more on breaks.`,
      },
      { h: 'Evening babysitting and short sleep' },
      {
        p: `Sitting jobs often run late, and a night with little sleep leaves eyes feeling gritty the next morning. After bedtime, a dim room lit mostly by a TV or phone makes it worse. Turn on a lamp, lower screen brightness to match the room, and blink fully during long shows. If you drive home late, keep the heater pointed away from your face. Our guide on [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) covers how the following morning feels.`,
      },
      { h: 'Your eye drops and the children' },
      {
        p: `Quell’s label gives directions for adults using it themselves. It doesn’t give directions for children, and neither does this page. Never use your drops on a child in your care; questions about a child’s eyes go to the parents and the child’s doctor. Keep your bottle where children can’t reach it:`,
      },
      {
        list: [
          `A zipped inside pocket of your own bag, kept up high, not on the floor or a low hook.`,
          `Never in a diaper bag, a stroller basket or a play area.`,
          `Cap it right after use and put it away before turning back to the kids.`,
        ],
      },
      {
        p: `The label’s line for an accident reads: {swallowed}. Our guide on [keeping eye drops out of children’s reach](/guides/keep-out-of-reach-of-children) has more.`,
      },
      { h: 'What the label says for you' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its use: {uses}. Directions: {directions}. Handling: {tip}. Wash your hands first, since childcare hands have usually just touched snacks, toys and faces. Storage: {storage}. Caution: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes feel dry most days despite these changes, an eye doctor can find the cause and decide what to do. Childcare workers are around a lot of shared germs, so eyes that become sticky, painful or sensitive to light need a doctor rather than a lubricating drop. The label lists when to stop: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after a day of nannying?',
        a: `A nanny’s day mixes other people’s heated or cooled homes, playground wind and sun, driving with the vents on and close watching that slows blinking. Each speeds up evaporation from the eye.`,
      },
      {
        q: 'Can a nanny use eye drops at work?',
        a: `Yes, for your own eyes, as the label directs. Nap time is a practical moment, and the bottle should go straight back into your bag, out of children’s reach.`,
      },
      {
        q: 'Can I use my eye drops on the kids I babysit?',
        a: `No. Quell’s label doesn’t give directions for children. Questions about a child’s eyes belong with the parents and the child’s doctor.`,
      },
      {
        q: 'Where should a babysitter keep eye drops?',
        a: `In a zipped inside pocket of your own bag, kept up high, never in a diaper bag, stroller or play area. Cap it right after use.`,
      },
    ],
  },
  /*
   * Facts for christmas-gifts-for-a-cousin, 2026-11-22: site facts (no gift
   * message, gift wrap or gift receipt at checkout, per 2026-11-21-b sources;
   * order confirmation goes to the buyer's email; shipping email has no
   * prices; US-only shipping; no delivery date promised; buyers 18+), label
   * tokens. Christmas is Friday, Dec 25, 2026 (brief). Adult recipient only.
   */
  {
    slug: 'christmas-gifts-for-a-cousin',
    title: 'Christmas gifts for a cousin',
    description:
      'Thoughtful, useful Christmas gifts for an adult cousin, including ideas for one who stares at screens or fights dry, tired-feeling eyes all winter.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A good Christmas gift for a grown cousin is something useful they wouldn’t buy for themselves, sized to how close you are. For a cousin who works on screens, drives a lot or complains about dry, tired-feeling eyes in winter, think comfort: wraparound sunglasses, a good lamp, a small humidifier, or a bottle of lubricating eye drops alongside something more festive.`,
      },
      { h: 'Start with how close you are' },
      {
        p: `Cousins cover a wide range, from the one you grew up with like a sibling to the one you see once a year at a family gathering. Match the gift to that:`,
      },
      {
        list: [
          `Close cousin: something personal and practical, like a piece of gear for a hobby or a better version of something they use every day.`,
          `Holiday-only cousin: a small, useful gift that doesn’t need a lot of knowledge about their life.`,
          `Cousin exchange or gift draw: stick to the agreed limit and pick something anyone could use.`,
        ],
      },
      { h: 'Gifts for a cousin who lives on screens' },
      {
        p: `If your cousin works at a computer, games for hours or edits photos at night, their eyes are probably working hard. Screens slow blinking, which lets the tear film thin. A few gifts that make that easier:`,
      },
      {
        list: [
          `A monitor stand or laptop riser, so the screen sits slightly below eye level.`,
          `A warm, dimmable desk lamp to cut the contrast between a bright screen and a dark room.`,
          `A small desk humidifier for a dry office or bedroom.`,
          `A timer or smart watch they can set for short screen breaks.`,
        ],
      },
      {
        p: `Our guide to [gifts for a coworker who works on screens](/guides/gifts-for-a-coworker-who-works-on-screens) has more ideas at different budgets.`,
      },
      { h: 'Gifts for a cousin who’s always outdoors' },
      {
        list: [
          `Wraparound sunglasses, which block wind from the sides as well as glare.`,
          `A brimmed hat for hiking, fishing or yard work.`,
          `Ski or snowboard goggles if they head to the mountains.`,
          `Gloves with touchscreen fingertips, so they don’t pull them off in the wind.`,
        ],
      },
      { h: 'Is it weird to give a cousin eye drops?' },
      {
        p: `Not if they’ve mentioned dry eyes. A bottle of lubricating drops can be a thoughtful addition when it goes with something else, such as a cozy throw and a book, or sunglasses for a skier. It reads as “I listened,” not “your eyes look bad.” If you’re not sure, skip it, or ask a mutual relative first. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, in a {size} bottle. Before you give it, check one thing on the label: {warnings}. If your cousin has an egg or bird allergy, choose a different gift. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Gifts for a cousin far away' },
      {
        p: `If your cousin lives across the country, a shipped gift saves you a trip to the post office. Some practical points if you send Quell directly:`,
      },
      {
        list: [
          `Orders ship within the United States only, from Brentwood, Tennessee.`,
          `Checkout has no gift message, gift wrap or gift receipt option. Send a card or text separately so they know who it’s from.`,
          `The order confirmation, which lists the prices, goes to the email you enter at checkout, so use your own. Our guide on [whether the recipient sees the price](/guides/will-the-gift-recipient-see-the-price) explains what they can see.`,
          `No delivery date is promised. With Christmas on a Friday this year, order well ahead rather than in the final week.`,
        ],
      },
      { h: 'Cousin gift exchanges and budgets' },
      {
        p: `Many families with lots of cousins draw names or set a dollar limit so nobody overspends. Stick to whatever the family agreed. Quell has no promo codes or coupons, and shipping is {shipping}, or free on orders of {freeBottles} or more bottles. If several cousins all use eye drops, one combined order can reach the free-shipping level, then you hand the bottles out at the gathering.`,
      },
      { h: 'Experience gifts for adult cousins' },
      {
        p: `Sometimes the most welcome gift is time together. A plan for a concert, a game, a cooking class or a long lunch in January, when the holidays are over, gives you both something to look forward to. Write it on a card, add a small item to open on Christmas morning, and pick a date before the holiday rush ends.`,
      },
      { h: 'If the gift isn’t needed' },
      {
        p: `If you send Quell and it turns out your cousin doesn’t need it, unopened bottles can be refunded within {returnDays} days of delivery, and they don’t have to be mailed back. As the buyer, you’re the one who calls {phone} with the order number. More gift ideas are in our [gifts and holidays guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What should I get my adult cousin for Christmas?',
        a: `Something useful they wouldn’t buy themselves, sized to how close you are. For a cousin who works on screens or spends time outdoors, a desk lamp, monitor riser or wraparound sunglasses are practical choices.`,
      },
      {
        q: 'How much should you spend on a cousin for Christmas?',
        a: `There’s no rule. Many families with lots of cousins set a limit or draw names; if yours does, stick to it. Otherwise, match the gift to how close you are.`,
      },
      {
        q: 'Is it okay to give a cousin eye drops for Christmas?',
        a: `If they’ve mentioned dry eyes, it can be thoughtful, especially paired with another gift. Check the label’s egg and bird allergy caution first.`,
      },
      {
        q: 'Can I ship eye drops straight to my cousin?',
        a: `Yes, to any US address. Checkout has no gift message, so send a note separately, and use your own email so the priced confirmation comes to you.`,
      },
    ],
  },
  /*
   * Facts for christmas-gifts-for-a-godparent, 2026-11-22: site facts (no gift
   * message/wrap/receipt at checkout; confirmation to buyer's email; US-only
   * shipping; no delivery date), label tokens. Christmas is Friday, Dec 25,
   * 2026. Adult recipient; the giver may be the godchild (adult) or the
   * godchild's parents.
   */
  {
    slug: 'christmas-gifts-for-a-godparent',
    title: 'Christmas gifts for a godparent',
    description:
      'Christmas gifts for a godmother or godfather that say thank you: keepsakes, time together and comfort gifts for a godparent with dry, tired-feeling eyes.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `The most welcome Christmas gifts for a godparent say thank you for being part of the family: a photo keepsake, a handwritten letter, or a plan to spend time together. If your godmother or godfather reads a lot, does needlework or mentions dry, tired-feeling eyes, add something for comfort, like a bright reading lamp, a large-print book or a bottle of lubricating eye drops.`,
      },
      { h: 'What makes a godparent gift different' },
      {
        p: `A godparent isn’t just a relative or a friend. They were chosen, often at a christening, baptism or naming ceremony, to stay close to a child as they grow. Gifts to a godparent tend to honor that bond. They might come from the godchild, now an adult, or from the parents who asked them. Either way, the gift that lands is usually the one that shows the relationship still matters.`,
      },
      { h: 'Keepsake gifts' },
      {
        list: [
          `A framed photo from the ceremony, or one of you together now.`,
          `A small photo book covering the years since, with short captions.`,
          `A handwritten letter about something they did that you remember.`,
          `An ornament with the year of the ceremony or this Christmas.`,
        ],
      },
      {
        p: `For an older godparent, print photo books and letters in a larger type size and pick a matte finish. Glossy pages bounce lamp light back into the eyes, which makes them harder to read.`,
      },
      { h: 'Gifts that give time together' },
      {
        p: `Many godparents say what they want most is to see their godchild. A planned visit, a standing lunch, tickets to a performance, or a video call scheduled for Christmas afternoon can mean more than anything wrapped. If you live far apart, a printed calendar with a few dates already filled in makes the plan real.`,
      },
      { h: 'Comfort gifts for a godparent with tired eyes' },
      {
        p: `If your godparent spends evenings reading, doing puzzles, knitting or on a tablet, their eyes may feel the strain, especially in a heated house in winter. Heated indoor air speeds evaporation from the tear film, and close work slows blinking. Gifts that help:`,
      },
      {
        list: [
          `A bright, adjustable reading lamp to put light on the page, not in their eyes.`,
          `A tablet stand, so the screen sits lower and they don’t hold it up close.`,
          `A small humidifier for the room where they read.`,
          `Large-print editions of a favorite author.`,
          `Wraparound sunglasses for winter walks, which block wind from the sides.`,
        ],
      },
      { h: 'Giving lubricating eye drops to a godparent' },
      {
        p: `A bottle of eye drops works as a gift when your godparent has mentioned dry eyes and it sits beside something more personal. Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label says: {uses}. Two things to check before giving it:`,
      },
      {
        list: [
          `The allergy caution: {warnings}. If they have an egg or bird allergy, choose something else.`,
          `Other eye drops or eye care: the label doesn’t cover use alongside other drops. If they already use eye drops from their eye doctor, suggest they ask the doctor or a pharmacist first.`,
        ],
      },
      {
        p: `The full label is on our [Drug Facts page](/drug-facts), and our guide to [Christmas gifts for grandpa](/guides/christmas-gifts-for-grandpa) has more ideas for older recipients.`,
      },
      { h: 'Gifts from parents to their child’s godparent' },
      {
        p: `If you’re the parents, a gift often comes with a card or drawing from the godchild. A family photo, a small framed print of the child’s artwork, or an invitation to a holiday meal are common choices. Anything practical, like eye drops, is better as an extra than the main gift, unless you know they’d appreciate it.`,
      },
      { h: 'Shipping a gift to a godparent' },
      {
        list: [
          `Quell ships to US addresses only, from Brentwood, Tennessee.`,
          `Checkout has no gift message or gift wrap option, so mail a card separately or send a note that it’s coming.`,
          `Use your own email at checkout. The order confirmation lists prices; the shipping email doesn’t.`,
          `No arrival date is promised. Christmas falls on a Friday this year, so order early in December.`,
          `Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
        ],
      },
      {
        p: `If the bottle goes unused, unopened bottles can be refunded within {returnDays} days of delivery without sending them back; the buyer calls {phone}. More holiday ideas are in our [gifts and holidays guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you give a godparent for Christmas?',
        a: `A gift that honors the relationship works well: a photo keepsake, a handwritten letter or a plan to spend time together. A practical comfort item can go alongside it.`,
      },
      {
        q: 'Do godchildren give gifts to godparents?',
        a: `Many do, especially as adults, and parents often send something on a young godchild’s behalf. A card or drawing from the godchild usually means the most.`,
      },
      {
        q: 'What is a good gift for an older godmother?',
        a: `A bright reading lamp, a large-print book, a photo book printed in larger type on matte pages, or a visit. If she mentions dry eyes, lubricating drops can be a thoughtful extra.`,
      },
      {
        q: 'Can I send eye drops to my godparent as a gift?',
        a: `Yes, to any US address. There’s no gift message at checkout, so send a note separately, and check the label’s egg and bird allergy caution first.`,
      },
    ],
  },
  /*
   * Facts for christmas-gifts-for-a-nanny-or-babysitter, 2026-11-22: site
   * facts (no gift message/wrap/receipt; confirmation to buyer's email; US
   * shipping; no delivery date; no promo codes), label tokens. Christmas is
   * Friday, Dec 25, 2026. Adult recipient; no figures for holiday bonuses
   * (no official source), and no tax advice.
   */
  {
    slug: 'christmas-gifts-for-a-nanny-or-babysitter',
    title: 'Christmas gifts for a nanny or babysitter',
    description:
      'What to give your nanny or babysitter for Christmas: thank-you gifts, practical gear for playground days, and comfort gifts for tired, dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `For a nanny or regular babysitter, the most appreciated Christmas gifts usually pair a thank-you, often money or extra paid time off, with something personal. Practical additions fit the job: good sunglasses for playground days, a warm insulated bottle, comfortable gloves, or for someone who mentions dry, tired-feeling eyes, a small humidifier or a bottle of lubricating eye drops.`,
      },
      { h: 'Money and time off first' },
      {
        p: `Many families give their nanny a holiday bonus or extra paid days off, and many give a regular babysitter a gift card or an extra night’s pay. How much is a personal decision based on how long they’ve worked with you, how many hours, and your budget. If your nanny is employed by your household, ask a tax professional how a bonus is handled. Whatever you give, a handwritten card from the parents, plus a drawing or note from the kids, is often what a nanny keeps.`,
      },
      { h: 'Gifts that fit a nanny’s day' },
      {
        p: `A nanny’s day runs from playgrounds and school pickups to car rides and nap-time quiet. Gear that makes that easier:`,
      },
      {
        list: [
          `Wraparound sunglasses that block wind and glare at the park.`,
          `A brimmed hat or a warm hat for winter outings.`,
          `Touchscreen gloves, so they can answer your texts without pulling them off.`,
          `An insulated travel mug or bottle that fits a stroller cup holder.`,
          `A roomy, washable tote with an inside zip pocket for their own things.`,
        ],
      },
      { h: 'Comfort gifts for tired eyes' },
      {
        p: `Childcare is hard on the eyes: outdoor wind and sun, heated or cooled homes, driving with vents on and evenings on a phone after bedtime. Our guide to [dry eyes for nannies and babysitters](/guides/dry-eyes-for-nannies-and-babysitters) explains why. Gifts that help include a small humidifier for their bedroom, a dimmable bedside lamp, and a sleep mask for a nanny who works early mornings.`,
      },
      { h: 'Can you give a nanny eye drops?' },
      {
        p: `Only if they’ve mentioned dry eyes, and as an extra beside the main gift. Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, in a {size} bottle. A few points matter because of the job:`,
      },
      {
        list: [
          `The label gives directions for adults using it themselves, not for children, so it’s for the nanny’s own eyes only.`,
          `The label’s allergy caution reads: {warnings}. If your nanny has an egg or bird allergy, pick another gift.`,
          `Suggest they keep the bottle in their own zipped bag, out of the kids’ reach. The label’s line for an accident is: {swallowed}.`,
        ],
      },
      {
        p: `The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Gifts from the kids' },
      {
        p: `Children often want to give their nanny something themselves. A framed drawing, a photo of them together, a homemade ornament or a short video message all work, and they cost little. Let the kids pick the wrapping paper and sign the card in their own handwriting, however wobbly.`,
      },
      { h: 'Babysitters you see now and then' },
      {
        p: `For an occasional babysitter, keep it simple: a gift card to a coffee shop or bookstore, a box of good chocolates, or an extra amount on their next pay with a note. A practical item like sunglasses or a warm hat suits a sitter who takes the kids outside. Teen sitters get a lot of these pages; this one is about adults, and the eye drop ideas here are for adult sitters only.`,
      },
      { h: 'Timing and ordering' },
      {
        p: `Give the gift before your nanny’s last day before the holiday, since many take time off around Christmas, which falls on a Friday this year. If you order Quell, allow time: no delivery date is promised. Checkout has no gift message or gift wrap option, so ship it to yourself and wrap it, or ship it to them with a note sent separately. Shipping is {shipping}, or free on {freeBottles} or more bottles, and there are no promo codes. Use your own email at checkout so the priced confirmation goes to you; see [will the gift recipient see the price?](/guides/will-the-gift-recipient-see-the-price)`,
      },
      { h: 'If the gift goes unused' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The buyer calls {phone} with the order number. For more holiday ideas, browse our [gifts and holidays guides](/guides/topic/seasonal) or [Christmas gifts for new parents](/guides/christmas-gifts-for-new-parents).`,
      },
    ],
    faq: [
      {
        q: 'What do you give a nanny for Christmas?',
        a: `Many families give a holiday bonus or extra paid time off, plus a personal gift and a card or drawing from the kids. Practical extras like good sunglasses or a warm mug suit the job.`,
      },
      {
        q: 'What is a good Christmas gift for a babysitter?',
        a: `For an occasional sitter, a gift card, good chocolates or an extra amount on their next pay with a note. Sunglasses or a warm hat suit a sitter who takes the kids outside.`,
      },
      {
        q: 'Is it okay to give a nanny eye drops as a gift?',
        a: `If they’ve mentioned dry eyes, as an extra beside the main gift. The label is for adults using it themselves, so it’s for the nanny’s own eyes, kept in their bag out of the kids’ reach.`,
      },
      {
        q: 'When should I give my nanny a Christmas gift?',
        a: `Before their last workday ahead of the holiday, since many nannies take time off around Christmas. Order anything shipped early, because no delivery date is promised.`,
      },
    ],
  },
]
