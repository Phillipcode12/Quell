import type { Guide } from '@/lib/guide-types'
export const DAILY_20261121_D: Guide[] = [
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-new-braunfels-tx:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID BAZ, 1991-2020 monthly normals
   *   (NEW BRAUNFELS MUNICIPAL AP, elev 648 ft: maxt Jan 64.2, Jul 96.3, Aug 97.5,
   *   Dec 65.4 F; pcpn May 3.63, Jun 3.44, Sep 3.45, Oct 3.30, Feb 1.72 in;
   *   annual sum 31.27 in; snowfall M). Saved: .daily-job/acis1121/BAZ.json
   * - Same service, mint normals (Jan 40.3, Jul 72.7, Aug 72.7, Dec 41.6 F).
   *   Saved: .daily-job/d/BAZ-mint.json
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-new-braunfels-tx',
    title: 'Dry eye relief in New Braunfels, Texas',
    description:
      'NOAA’s normals for New Braunfels: August highs of 97.5°F and about 31 inches of rain a year. What that does to your eyes, and what helps day to day.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in New Braunfels is mostly about heat and the air conditioning it brings. NOAA’s 1991 to 2020 normals for the city’s municipal airport show August highs of 97.5°F and about 31 inches of rain a year, so summer days swing between hard sun and chilled indoor air. Keep vents off your face, blink fully at screens, use a lubricating drop exactly as its label directs, and see an eye doctor if the dryness doesn’t settle.`,
      },
      { h: 'New Braunfels weather, by the numbers' },
      {
        p: `The figures here come from NOAA’s 1991 to 2020 climate normals for New Braunfels Municipal Airport, as published through the National Weather Service’s NOWData. The station sits at about 650 feet. Here is what a normal year looks like there:`,
      },
      {
        list: [
          `Normal highs climb from 64.2°F in January to 97.5°F in August, the hottest month, with July close behind at 96.3°F.`,
          `Summer nights stay warm. The normal low in both July and August is 72.7°F.`,
          `January brings the coolest mornings, with a normal low of 40.3°F, and December is nearly the same at 41.6°F.`,
          `Precipitation adds up to about 31.27 inches a year. May is the wettest month at 3.63 inches, with September (3.45) and June (3.44) next.`,
          `February is the driest month at 1.72 inches.`,
        ],
      },
      {
        p: `NOAA’s published humidity and wind tables don’t cover this station, so this page gives no humidity or wind number for New Braunfels. The temperatures and the rain pattern tell most of the story anyway: a long, hot season from May into September, two wetter stretches in late spring and early fall, and a short, mild winter.`,
      },
      { h: 'Why eyes dry out in a Central Texas summer' },
      {
        p: `Your tear film has three layers. A thin oil layer on top slows evaporation from the watery layer underneath, and a mucus layer helps the tears cling to the eye. Every blink spreads a fresh coat. Anything that moves air across your eyes, or dries that air, makes the water layer evaporate faster between blinks.`,
      },
      {
        p: `In New Braunfels, the heat itself is rarely what dries your eyes. It’s the response to the heat. When normal highs sit in the mid-90s for three months, you spend much of your day in air-conditioned rooms and cars, and cooled air blowing toward your face is one of the most reliable ways to speed evaporation. A few habits help:`,
      },
      {
        list: [
          `Angle dashboard vents toward your chest or the windshield, never straight at your eyes.`,
          `Run a bedroom ceiling fan on its lowest speed, or point a box fan at the wall instead of the bed.`,
          `At a desk, check where the supply register sits and move the chair out of its stream if you can.`,
          `Change the system’s air filter on schedule so dust isn’t recirculating through the house.`,
        ],
      },
      { h: 'Long days outside: rivers, ballfields and backyards' },
      {
        p: `Summer weekends here often mean hours outdoors, whether you’re floating a river, coaching a ballgame or tending a smoker in the backyard. Sun and glare make you squint, and squinting tends to shorten blinks. Water reflects light back up at you too. Wraparound sunglasses block both glare and moving air, and a hat brim cuts overhead light.`,
      },
      {
        p: `Take a minute in the shade every so often to close your eyes and blink slowly a few times. If you carry eye drops, keep them in a bag in the shade rather than on a sunny dock or a car dash. The label sets a storage range, and an August car interior can run well past it. Our guide on [leaving eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains why.`,
      },
      { h: 'Spring storms, fall rain and the mild months' },
      {
        p: `The normals show two wet peaks: May and June, then September and October. Rainy days themselves are kind to the eyes, but they also keep people indoors with screens, and screen time is when blinking slows the most. If a stormy week turns into a week of streaming and scrolling, set a reminder to look away from the screen every 20 minutes or so and blink fully.`,
      },
      {
        p: `From November into March the highs drop into the 60s and low 70s, and many households turn the air conditioning off and open windows. That break is welcome. Cold fronts still push through, though, and with January mornings near 40°F the heater comes on for at least part of the day. Warming cool air without adding moisture lowers its relative humidity, which is why a heated room can feel dry even after a rainy week. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the indoor side in detail.`,
      },
      { h: 'Highway commutes and screen-heavy workdays' },
      {
        p: `New Braunfels sits between San Antonio and Austin, and plenty of residents drive toward one or the other for work. An hour in a car with the climate control on is an hour of steady airflow. Recirculate mode, lower fan speeds and vents aimed low all help. At work, a monitor set slightly below eye level means your lids cover more of the eye while you read, so less of the surface is exposed.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. One line under the warnings is worth building into habit: {tip}.`,
      },
      {
        p: `The panel’s main caution is: {warnings}. Its storage line is: {storage}. That upper limit matters in a Texas summer, so a purse, a desk drawer or an insulated lunch bag is a better home for the bottle than a parked car. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to New Braunfels' },
      {
        p: `We ship from Brentwood, Tennessee, to any US address, including homes across New Braunfels and the surrounding towns. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows once the order ships, but no delivery date is promised, so reorder before you run out. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [New Braunfels page](/eye-drops/new-braunfels-tx), the [Texas page](/eye-drops/state/texas), or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for ordinary dryness and irritation. The label draws the line clearly: {stopUse} Pain, light sensitivity or a change in vision should go to an eye doctor promptly, and so should dryness that keeps returning no matter what you change at home. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a good place to start.`,
      },
    ],
    faq: [
      {
        q: 'How hot does New Braunfels get in the summer?',
        a: 'NOAA’s 1991 to 2020 normals for New Braunfels Municipal Airport put the normal August high at 97.5°F and July at 96.3°F. Summer nights stay warm, with normal lows of 72.7°F in both months.',
      },
      {
        q: 'How much rain does New Braunfels get a year?',
        a: 'About 31.27 inches in a normal year, according to NOAA’s normals for the municipal airport. May is the wettest month at 3.63 inches, and February is the driest at 1.72 inches.',
      },
      {
        q: 'Why do my eyes feel dry in New Braunfels?',
        a: 'Most often it’s the air conditioning that months of mid-90s heat require, plus car vents and long screen sessions. Cooled, moving air speeds evaporation from the tear film between blinks.',
      },
      {
        q: 'Does Quell ship to New Braunfels, Texas?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, with guest checkout and tracking by email. No delivery date is promised, so order before your current bottle runs out.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-new-iberia-la:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID ARA, 1991-2020 monthly normals
   *   (NEW IBERIA AIRPORT - ACADIANA REGIONAL, elev 16 ft: maxt Jan 62.7, Jul 91.5,
   *   Aug 92.4 F; pcpn Jan 5.36, Feb 3.54, Mar 2.91, Jun 6.46, Jul 6.71, Aug 6.37 in;
   *   annual sum 59.69 in; snowfall M). Saved: .daily-job/acis1121/ARA.json
   * - Same service, mint normals (Jan 43.1, Jul 74.3, Dec 44.9 F).
   *   Saved: .daily-job/d/ARA-mint.json
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-new-iberia-la',
    title: 'Dry eye relief in New Iberia, Louisiana',
    description:
      'New Iberia gets nearly 60 inches of rain a year in NOAA’s normals, yet eyes still dry out there. Why indoor air is the culprit, and what helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `New Iberia is a wet place, with about 59.69 inches of precipitation a year in NOAA’s normals for Acadiana Regional Airport, yet your eyes can still feel dry there. The reason is mostly indoors: air conditioning runs for much of the year, and screens slow blinking. Aim vents away from your face, take regular blink breaks, use a lubricating drop as its label directs, and see an eye doctor if it persists.`,
      },
      { h: 'What NOAA’s normals say about New Iberia' },
      {
        p: `The station behind these numbers is New Iberia Airport, which ACIS lists as Acadiana Regional, at about 16 feet above sea level. NOAA’s 1991 to 2020 climate normals for it, the same data the National Weather Service publishes through NOWData, show:`,
      },
      {
        list: [
          `About 59.69 inches of precipitation in a normal year, and no month below 2.9 inches.`,
          `A summer peak: June gets 6.46 inches, July 6.71 (the wettest month) and August 6.37.`,
          `March is the driest month at 2.91 inches, with February next at 3.54.`,
          `August has the hottest normal high at 92.4°F, and July nights average a low of 74.3°F.`,
          `January is the coolest month, with a normal high of 62.7°F and a low of 43.1°F.`,
        ],
      },
      {
        p: `NOAA’s relative humidity and wind tables don’t include this airport, so you won’t find a humidity percentage or a wind figure on this page. What the rain totals do show is how rarely the outdoor air here could be called dry.`,
      },
      { h: 'Rain outside, dry air inside' },
      {
        p: `If the air outside is this moist, why do your eyes burn by evening? Because you probably spent most of the day somewhere else. An air conditioner cools the air and pulls moisture out of it as it runs, and the cooled air comes out of vents at a speed that carries water off the eye’s surface. The tear film’s thin oil layer is there to slow that evaporation, but steady airflow still thins the water layer between blinks.`,
      },
      {
        p: `With July nights averaging 74.3°F, many New Iberia homes keep the system running around the clock from May into October. That makes the bedroom one of the places worth fixing first:`,
      },
      {
        list: [
          `Point the bed away from the supply register, or add a deflector so air sweeps along the ceiling.`,
          `Turn the ceiling fan down, or off, once the room has cooled.`,
          `Set the thermostat a degree or two higher at night so the system cycles less.`,
          `Keep the return filter clean, since dust adds to irritation.`,
        ],
      },
      { h: 'The wettest months, June through August' },
      {
        p: `Three summer months bring close to 20 inches between them. A typical day can start steamy, turn hot by midday and end with a shower, which means you move between muggy porches, chilled stores and air-conditioned cars again and again. Each switch into cold, fast-moving air is a fresh chance for the eyes to dry out.`,
      },
      {
        p: `When you get in the car, give the cabin a minute with the windows cracked before the air conditioning blasts, and aim the vents low. In stores and offices, notice which seats sit under the vents and choose another when you can. After a wet commute, wipe rain off glasses with a clean cloth rather than rubbing your eyes.`,
      },
      { h: 'Fishing, boats and bright water' },
      {
        p: `If your weekends happen on the water, the wind you make while the boat is moving counts as wind on your eyes. So does glare off flat water on a bright afternoon. Wraparound sunglasses with a snug fit do two jobs at once, blocking moving air and cutting reflected light. Close your eyes for a few seconds now and then on a long run between spots.`,
      },
      {
        p: `A tackle box on a sunny deck is not a good home for eye drops. Keep the bottle in a shaded bag or a dry box below deck, and bring it in when you get home rather than leaving it in the truck.`,
      },
      { h: 'Short winters and the space heater' },
      {
        p: `December and January lows average in the mid-40s at the airport, which means heat for only part of the season, often in short bursts when a front passes. Short bursts are where space heaters come in, and a small heater blowing at a recliner or a desk dries the air right where your face is. Aim it at your feet, keep a few feet of distance, and turn it off once the room is warm. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) has more.`,
      },
      { h: 'Quell’s Drug Facts, briefly' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Under Uses, the panel reads: {uses}. Under Directions: {directions}. Under Warnings: {warnings}. Before you use it, check that the bottle looks right; the panel says to skip it for this reason: {doNotUse}.`,
      },
      {
        p: `Keep the dropper tip clean, as the label says: {tip}. For storage, the panel reads: {storage}. You can read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering from New Iberia' },
      {
        p: `Quell ships from Brentwood, Tennessee, to New Iberia and every other US address. There’s no account needed, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email when it ships, though no arrival date is promised. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back. Local details are on the [New Iberia page](/eye-drops/new-iberia-la) and the [Louisiana page](/eye-drops/state/louisiana).`,
      },
      { h: 'Seeing an eye doctor' },
      {
        p: `Eye drops don’t replace an exam. The label’s own stop rule is: {stopUse} Sudden pain, blurred vision that doesn’t clear with blinking, or dryness that keeps coming back are all reasons to book an appointment. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for a fuller list.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does New Iberia, Louisiana get a year?',
        a: 'About 59.69 inches in a normal year, based on NOAA’s 1991 to 2020 normals for New Iberia’s Acadiana Regional airport. Every month averages more than 2.9 inches.',
      },
      {
        q: 'What is the wettest month in New Iberia?',
        a: 'July, at 6.71 inches in NOAA’s normals for the airport, with June (6.46) and August (6.37) close behind. March is the driest month at 2.91 inches.',
      },
      {
        q: 'Why are my eyes dry in Louisiana when it’s so humid?',
        a: 'Because much of the day is spent in air-conditioned homes, cars and offices. Air conditioning removes moisture as it cools, and air blowing toward your face speeds evaporation from the tear film.',
      },
      {
        q: 'Does Quell ship to New Iberia?',
        a: 'Yes. Orders ship from Brentwood, Tennessee, to any US address, with guest checkout and a tracking email once the order ships. No delivery date is promised.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-north-las-vegas-nv:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID VGT, 1991-2020 monthly normals
   *   (LAS VEGAS AIR TERMINAL, the North Las Vegas airport per the job brief,
   *   elev 2189 ft: maxt Jun 98.6, Jul 103.8, Aug 102.1, Dec 56.3 F; pcpn Feb 0.82,
   *   Apr 0.23, May 0.08, Jun 0.01 in; annual sum 3.99 in; snowfall M).
   *   Saved: .daily-job/acis1121/VGT.json
   * - Same service, mint normals (Jan 39.4, Jul 79.8, Aug 77.5, Dec 38.0 F).
   *   Saved: .daily-job/d/VGT-mint.json
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-north-las-vegas-nv',
    title: 'Dry eye relief in North Las Vegas, Nevada',
    description:
      'North Las Vegas gets about 4 inches of rain a year and July highs near 104°F, by NOAA’s normals. How desert air dries your eyes, and what to do.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `In North Las Vegas the outdoor air itself is dry. NOAA’s 1991 to 2020 normals for the North Las Vegas airport, which NOAA lists as Las Vegas Air Terminal, show only about 3.99 inches of precipitation a year and July highs of 103.8°F. Shield your eyes from sun, dust and vents, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for dryness that lingers.`,
      },
      { h: 'The station and its numbers' },
      {
        p: `The airport station sits at about 2,190 feet. Its normals, as published through the National Weather Service’s NOWData, describe a year with almost no rain and a long stretch of extreme heat:`,
      },
      {
        list: [
          `About 3.99 inches of precipitation in a normal year.`,
          `February is the wettest month, and it gets only 0.82 inch.`,
          `April, May and June together total about a third of an inch; June’s normal is 0.01 inch.`,
          `July’s normal high is 103.8°F and August’s is 102.1°F, with June at 98.6°F.`,
          `Midsummer nights barely cool off: July’s normal low is 79.8°F.`,
          `December is the coolest month, with a high of 56.3°F and a low of 38.0°F.`,
        ],
      },
      {
        p: `The station isn’t among those in NOAA’s published humidity and wind tables, so this page offers no humidity or wind figure for it. With rain that scarce, though, you can expect dry air for most of the year.`,
      },
      { h: 'Why desert air pulls at your tears' },
      {
        p: `Tears aren’t just water. A thin oil layer sits on top and slows evaporation, a watery layer does most of the work, and a mucus layer helps the whole film stick to the eye. Blinking refreshes all three. In dry air, the watery layer evaporates faster between blinks, so the surface can start to feel gritty or tight before the next blink arrives. Heat, moving air and focused tasks that slow blinking all make that gap longer.`,
      },
      { h: 'Summer: life between air-conditioned boxes' },
      {
        p: `With normal highs above 100°F in July and August and lows near 80°F, cooling rarely shuts off. You go from an air-conditioned house to an air-conditioned car to an air-conditioned workplace, and in each one air is blowing somewhere near your face. That airflow, more than the heat outside, is what most people feel in their eyes by late afternoon.`,
      },
      {
        list: [
          `In the car, close the face-level vents and use the floor and windshield settings once the cabin cools.`,
          `At home, sleep out of the path of the bedroom register and keep the ceiling fan low.`,
          `If your home uses an evaporative cooler, notice whether its airflow points at the couch or the bed, and adjust it.`,
          `Run errands early in the morning, when it’s coolest and you need the car’s air less.`,
        ],
      },
      { h: 'Garages, warehouses and yard work' },
      {
        p: `A lot of daily work here happens in places that are hot, dusty and breezy at once. If you spend shifts in a warehouse or on a loading dock, big fans keep people cool and keep dust moving. If you work on cars in a garage or do yard work before the heat peaks, grit and blowing air come with the job. Wraparound glasses help with both. Step out of the airflow for a minute now and then and blink slowly, and wash your hands before you touch your eyes or a dropper bottle.`,
      },
      {
        p: `Don’t leave eye drops in a work truck or a car parked outside. The label’s storage range tops out far below a July cab temperature. An insulated lunch bag works, as long as the bottle doesn’t sit directly on an ice pack. Our guide to [storing eye drops](/guides/how-to-store-eye-drops) covers the details.`,
      },
      { h: 'Winter: cool, still dry' },
      {
        p: `December and January bring lows near 38°F and 39°F, so heating takes over from cooling. The air was already dry; heating it lowers the relative humidity further. Many people notice their eyes most on winter mornings, after a night with the heat on. A bedroom humidifier, cleaned as its maker directs, adds moisture where you sleep. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) walks through how to use one.`,
      },
      { h: 'The label, in Quell’s words' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states its Uses as: {uses}. The directions are: {directions}. Its warning line reads: {warnings}.`,
      },
      {
        p: `The storage line reads: {storage}. Keep the dropper away from surfaces too, because the label says: {tip}. If a bottle has been somewhere very hot, look at it before use, since the label adds: {doNotUse}.`,
      },
      { h: 'Ordering to North Las Vegas' },
      {
        p: `We ship from Brentwood, Tennessee, to North Las Vegas and the rest of the US. Checkout is guest-friendly, shipping costs {shipping}, and {freeBottles} or more bottles ship free. A tracking email arrives after the order ships, but there’s no promised delivery date. If a box will sit on a sunny doorstep, consider having it sent to a work address. Unopened bottles can be refunded within {returnDays} days of delivery, no return needed. See the [North Las Vegas page](/eye-drops/north-las-vegas-nv) and the [Nevada page](/eye-drops/state/nevada).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Desert dryness is common, but some symptoms aren’t about the weather. The label tells you when to stop: {stopUse} Light sensitivity, discharge, or vision that changes are reasons to see an eye doctor without waiting. An eye doctor can find the cause and decide what to do. Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) guide explains more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does North Las Vegas get a year?',
        a: 'About 3.99 inches, according to NOAA’s 1991 to 2020 normals for the North Las Vegas airport station. February is the wettest month at 0.82 inch, and June averages just 0.01 inch.',
      },
      {
        q: 'How hot does North Las Vegas stay at night in the summer?',
        a: 'NOAA’s normals for the airport put July’s normal low at 79.8°F and August’s at 77.5°F. Daytime highs average 103.8°F in July and 102.1°F in August.',
      },
      {
        q: 'Can I keep eye drops in my car in North Las Vegas?',
        a: 'Not in summer. Quell’s label gives a storage range, and a parked car in July can run far above it. Carry the bottle with you or keep it indoors.',
      },
      {
        q: 'Does Quell ship to North Las Vegas?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, with guest checkout and tracking by email. No delivery date is promised, so order ahead.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-odessa-tx:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID ODO, 1991-2020 monthly normals
   *   (ODESSA SCHLEMEYER FIELD, elev 2983 ft: maxt Jan 58.1, Apr 79.5, Jun 94.5,
   *   Jul 95.3, Aug 94.2 F; pcpn Jan 0.61, Feb 0.57, Mar 0.73, Apr 0.65, May 1.62,
   *   Jul 1.53, Sep 1.94, Dec 0.56 in; annual sum 12.93 in; snowfall M).
   *   Saved: .daily-job/acis1121/ODO.json
   * - Same service, mint normals (Jan 31.7, Feb 35.4, Jul 71.5, Nov 40.4,
   *   Dec 32.4 F). Saved: .daily-job/d/ODO-mint.json
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-odessa-tx',
    title: 'Dry eye relief in Odessa, Texas',
    description:
      'Odessa gets about 13 inches of rain a year and winter nights near freezing, by NOAA’s normals for Schlemeyer Field. What it means for dry eyes.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Odessa’s air is dry for most of the year. NOAA’s 1991 to 2020 normals for Odessa Schlemeyer Field show about 12.93 inches of precipitation annually, and December and January nights average right around freezing, so the heater adds to the dryness in winter. Protect your eyes from wind and vents, keep blinking at screens, use a lubricating drop as directed, and see an eye doctor if the dryness persists.`,
      },
      { h: 'Odessa’s climate, from Schlemeyer Field' },
      {
        p: `Schlemeyer Field sits at about 2,980 feet. The numbers below are NOAA’s 1991 to 2020 climate normals for that station, as the National Weather Service publishes them through NOWData:`,
      },
      {
        list: [
          `About 12.93 inches of precipitation in a normal year.`,
          `September is the wettest month at 1.94 inches, followed by May (1.62) and July (1.53).`,
          `December (0.56) and February (0.57) are the driest months, with January at 0.61.`,
          `Normal highs peak at 95.3°F in July; June (94.5°F) and August (94.2°F) are nearly as hot.`,
          `January’s normal low is 31.7°F, the only monthly normal below freezing, and December’s is 32.4°F.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables don’t list this station, so you won’t see humidity or wind numbers here. The rain totals are telling on their own: the three driest months are December, February and January, exactly when homes and vehicles are heated.`,
      },
      { h: 'Cold, dry winter mornings' },
      {
        p: `From December through February, Odessa mornings start near or below freezing and afternoons warm into the high 50s and low 60s. That daily swing means heat runs at night and early in the day, then cuts back. Heating already-dry air lowers its relative humidity even more, and a forced-air furnace moves that air around the house.`,
      },
      {
        p: `The car is its own problem. On a frosty morning the defroster and heater run on high, often with vents pointed straight at the driver. Once the windshield clears, switch the airflow to the floor and turn the fan down. At home, close or redirect the register nearest your bed, and keep the thermostat a little lower at night. [Dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) goes deeper on furnaces.`,
      },
      { h: 'Spring: warming fast, still little rain' },
      {
        p: `March and April are dry in Odessa, at 0.73 and 0.65 inches, while normal highs jump from 71.2°F in March to 79.5°F in April. Those are pleasant days to be outside, and also days when dust can blow. If you spend a spring afternoon outdoors, wraparound sunglasses keep moving air and grit off your eyes better than flat lenses do. When you come inside, wash your face and hands before touching your eyes.`,
      },
      { h: 'Long drives, long shifts' },
      {
        p: `Many jobs around Odessa involve hours on the road across West Texas, early starts, or rotating shifts. Each one tends to reduce blinking. Drivers stare at the road, and tired eyes blink less completely. A few habits make a difference on a long day:`,
      },
      {
        list: [
          `Keep the climate control on the floor or windshield setting after the cab warms or cools.`,
          `Use stops to close your eyes for half a minute and blink slowly several times.`,
          `Clean your windshield inside and out, since haze adds glare.`,
          `If you work nights, see [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) for more.`,
        ],
      },
      { h: 'Summer heat and late-summer rain' },
      {
        p: `June through August average highs in the mid-90s, so summer brings air conditioning in every building and vehicle. Late summer is also the wettest time of year, peaking in September at 1.94 inches. Indoors, keep air conditioner vents off your face the same way you would the heater’s in winter. Outdoors, sunglasses and a hat brim help in the afternoon glare.`,
      },
      { h: 'Using a lubricating drop the way the label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its panel reads: {uses}. The directions say: {directions}. And the panel cautions: {warnings}.`,
      },
      {
        p: `Two habits keep a bottle in good shape. First, the tip: {tip}. Second, the temperature: {storage}. A truck cab in January can drop below that range on a cold night, and in July it climbs far above it, so carry the bottle inside with you. The whole label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Odessa' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Odessa and everywhere else in the US. Guest checkout is the default, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email after shipping, and no delivery date is promised. Unopened bottles are refundable within {returnDays} days of delivery, and you keep them. Visit the [Odessa page](/eye-drops/odessa-tx) or the [Texas page](/eye-drops/state/texas) for more.`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `If drops and habit changes aren’t making a difference, or something feels wrong, stop and get checked. The label says: {stopUse} Pain, sudden changes in vision, or an eye that keeps getting worse are reasons to see an eye doctor promptly. An eye doctor can find the cause and decide what to do. Our [self-check](/self-check) can help you decide whether to book a visit, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Odessa, Texas get a year?',
        a: 'About 12.93 inches in a normal year, according to NOAA’s 1991 to 2020 normals for Odessa Schlemeyer Field. September is the wettest month at 1.94 inches.',
      },
      {
        q: 'How cold does Odessa, Texas get in winter?',
        a: 'January’s normal low at Schlemeyer Field is 31.7°F and December’s is 32.4°F, according to NOAA’s normals. Afternoon highs in those months average about 58°F.',
      },
      {
        q: 'Why are my eyes so dry in West Texas in the winter?',
        a: 'Winter is the driest season around Odessa, and heaters lower indoor humidity further. Car defrosters aimed at your face add to it, so the tear film evaporates faster between blinks.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-oxnard-ca:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID OXR, 1991-2020 monthly normals
   *   (OXNARD VENTURA COUNTY AP, elev 39 ft: maxt Jan 65.9, Feb 65.4, Aug 73.5,
   *   Sep 73.5, Oct 73.5 F; pcpn Jan 2.92, Feb 3.26, Mar 2.30, Jun 0.06, Jul 0.02,
   *   Aug 0.01, Sep 0.08, Dec 2.08 in; annual sum 12.93 in; snowfall M).
   *   Saved: .daily-job/acis1121/OXR.json
   * - Same service, mint normals (Jan 46.1, Jul 60.6, Aug 60.6 F).
   *   Saved: .daily-job/d/OXR-mint.json
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-oxnard-ca',
    title: 'Dry eye relief in Oxnard, California',
    description:
      'Oxnard’s highs stay between 65°F and 74°F all year, and summer gets almost no rain. NOAA’s numbers, plus everyday dry eye relief on the coast.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Oxnard’s weather is mild, but it has a long dry season. NOAA’s 1991 to 2020 normals for the Oxnard airport show June through September totaling less than a fifth of an inch of rain, with highs between 65°F and 74°F all year. Screens, car vents and steady breezes do most of the drying. Blink fully, shield your eyes outdoors, use a lubricating drop as labeled, and see an eye doctor if it continues.`,
      },
      { h: 'Oxnard’s numbers from the airport station' },
      {
        p: `NOAA lists the station as Oxnard Ventura County Airport, at about 39 feet above sea level. Its 1991 to 2020 normals, the same figures the National Weather Service shows in NOWData, describe one of the steadiest temperature records you’ll find:`,
      },
      {
        list: [
          `Normal highs run from 65.4°F in February to 73.5°F in August, September and October, a spread of only about 8 degrees across the year.`,
          `Normal lows range from 46.1°F in January to 60.6°F in July and August.`,
          `About 12.93 inches of precipitation fall in a normal year, most of it from December through March.`,
          `February is the wettest month at 3.26 inches, then January (2.92), March (2.30) and December (2.08).`,
          `June gets 0.06 inch, July 0.02, August 0.01 and September 0.08.`,
        ],
      },
      {
        p: `This station isn’t in NOAA’s published humidity or wind tables, so this page doesn’t quote humidity or wind numbers for Oxnard. The rainfall split is the key fact: a wet winter, then a summer and early fall with almost nothing.`,
      },
      { h: 'Why do my eyes feel dry in Oxnard if it’s so mild?' },
      {
        p: `Comfortable weather and comfortable eyes aren’t the same thing. Your tear film depends on a thin oil layer that slows evaporation and on regular, complete blinks that spread fresh tears. Steady breezes, long hours at screens and air from a car’s vents all work against that, whatever the thermometer says. Mild weather can even hide the cause, because nothing feels harsh enough to blame.`,
      },
      {
        p: `Open windows are a good example. In a place where highs barely move all year, many homes go without heat or cooling for weeks at a time, and that’s pleasant. A constant cross-breeze through the living room still moves air across your eyes for hours. If your eyes feel tight in the evening, try closing the window nearest where you sit.`,
      },
      { h: 'The long dry season, June to October' },
      {
        p: `From June through September, the normals add up to less than a fifth of an inch of rain. Dust builds on roads, fields and car windshields, and every breeze can lift some of it. October is warm too, tied with August and September for the highest normal high at 73.5°F, and on the occasional fall day when a dry wind blows from inland, the air feels different almost right away.`,
      },
      {
        list: [
          `Keep wraparound sunglasses in the car, so you have them for dusty or windy afternoons.`,
          `Run the car’s air on recirculate when traffic or dust is heavy.`,
          `Wipe dust off your glasses with a clean, damp cloth rather than your shirt.`,
          `Rinse your face after time outdoors, and wash your hands before touching your eyes.`,
        ],
      },
      { h: 'Fields, harbors and outdoor work' },
      {
        p: `If you work outdoors around Oxnard, whether in fields, at a harbor or on a job site, the dry months bring dust, sun and glare from water or pale ground. Protective eyewear that wraps around the sides blocks more moving air than flat lenses. Short breaks out of the wind, with a few slow blinks, help the tear film recover. Keep eye drops in a shaded bag rather than on a dashboard or a tailgate.`,
      },
      { h: 'Winter rain and cool nights' },
      {
        p: `The rainy months bring nights in the mid-40s, which is enough to switch on a wall heater or a space heater in many homes. Short bursts of heat right next to where you sit can dry the air at face level. Aim a space heater at your feet, not your face, and turn it off when the room is warm. Rainy weekends also tend to mean more TV and phone time, so look away and blink every so often. [Dry eyes when binge-watching TV](/guides/dry-eyes-when-binge-watching-tv) has ideas for screen-heavy days.`,
      },
      { h: 'What Quell’s Drug Facts say' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel gives its Uses as: {uses}. Directions: {directions}. Warnings: {warnings}.`,
      },
      {
        p: `Oxnard’s mild temperatures make storage easy indoors. The label’s line is: {storage}. A car parked in the sun on a warm October day is the exception, so bring the bottle inside. The label also says: {tip}. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Oxnard' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Oxnard and any other US address. You can check out as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows once it ships, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. More is on the [Oxnard page](/eye-drops/oxnard-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `A lubricating drop is for everyday dryness, not for symptoms that point to something else. The label’s stop rule is: {stopUse} If one eye hurts, your vision changes, or the dryness keeps returning, see an eye doctor. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'What is the warmest month in Oxnard?',
        a: 'August, September and October tie for the highest normal high, 73.5°F, in NOAA’s 1991 to 2020 normals for the Oxnard airport. The coolest highs come in February at 65.4°F.',
      },
      {
        q: 'How much rain does Oxnard get a year?',
        a: 'About 12.93 inches in a normal year at the Oxnard airport, according to NOAA. Most falls from December through March, and June through September totals less than a fifth of an inch.',
      },
      {
        q: 'Why do my eyes feel dry in Oxnard when the weather is so mild?',
        a: 'Mild weather still comes with breezes, months of nearly rainless air, car vents and screen time. Each speeds evaporation from the tear film or slows blinking, even when the temperature feels perfect.',
      },
      {
        q: 'Does Quell ship to Oxnard, California?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address with guest checkout and a tracking email. No delivery date is promised, so order before you run low.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-pearland-tx:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID LVJ, 1991-2020 monthly normals
   *   (HOUSTON CLOVER FIELD, elev 39 ft: maxt Jan 64.6, Jul 93.3, Aug 94.0,
   *   Nov 73.3 F; pcpn Mar 2.84, May 5.13, Jun 5.21, Jul 4.21, Aug 5.63,
   *   Sep 5.40, Oct 5.77 in; annual sum 53.32 in; snowfall M).
   *   Saved: .daily-job/acis1121/LVJ.json
   * - Same service, mint normals (Jan 46.0, Jul 76.2, Aug 76.2, Dec 47.9 F).
   *   Saved: .daily-job/d/LVJ-mint.json
   * - Atlantic hurricane season dates (June 1 to November 30): NOAA's standard
   *   season, general public fact.
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-pearland-tx',
    title: 'Dry eye relief in Pearland, Texas',
    description:
      'Pearland’s wettest month is October and its summer nights stay near 76°F, by NOAA’s normals for Clover Field. Why eyes dry out, and what helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `In Pearland, dry eyes usually come from the air you breathe indoors and in the car, not from the weather. NOAA’s 1991 to 2020 normals for nearby Clover Field show about 53 inches of rain a year and summer nights that only cool to about 76°F, so air conditioning runs most of the year. Keep vents off your face, rest your eyes on the commute and at screens, and use drops as labeled.`,
      },
      { h: 'Pearland’s year in NOAA’s numbers' },
      {
        p: `NOAA’s closest long-record station is the one it lists as Houston Clover Field, at about 39 feet. These are its 1991 to 2020 climate normals, the same data the National Weather Service publishes through NOWData:`,
      },
      {
        list: [
          `About 53.32 inches of precipitation in a normal year.`,
          `October is the wettest month at 5.77 inches, with August (5.63), September (5.40), June (5.21) and May (5.13) not far behind.`,
          `March is the driest at 2.84 inches.`,
          `Highs reach 94.0°F in August and 93.3°F in July, and the normal low in both months is 76.2°F.`,
          `January is the coolest month, with a high of 64.6°F and a low of 46.0°F.`,
        ],
      },
      {
        p: `This station doesn’t appear in NOAA’s published humidity and wind tables, so this guide gives no humidity percentage or wind figure. The pattern is still clear: warm, wet and long summers that stretch into fall.`,
      },
      { h: 'Why air conditioning is the main culprit' },
      {
        p: `The tear film is a thin coat of oil, water and mucus that each blink renews. The oil on top slows evaporation of the water beneath it. Cool air blowing across the eye speeds that evaporation, and an air conditioner also takes moisture out of the air as it runs. When nights stay in the mid-70s from June through August, home systems rarely rest, and your eyes spend hours in that airflow, often while you sleep.`,
      },
      {
        list: [
          `Turn the bed so the supply vent isn’t aimed at your pillow, or fit a simple deflector.`,
          `Use the ceiling fan on low, or not at all, once the room is cool.`,
          `Raise the thermostat a degree at bedtime so the system cycles less often.`,
          `Change the return filter on schedule.`,
        ],
      },
      { h: 'The drive into Houston' },
      {
        p: `A lot of Pearland residents spend real time on the freeway every weekday. Stop-and-go traffic with the air on high and a vent pointed at your face is a recipe for dry, scratchy eyes by the time you park. Set the airflow to the floor and windshield once the cabin cools, use recirculate in heavy traffic, and keep sunglasses in the car for low sun on the morning or evening drive. At red lights or in a standstill, close your eyes for a few seconds. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has more on car air.`,
      },
      { h: 'Fall is the wettest season here' },
      {
        p: `Many people expect summer to be the soggiest time of year on the Gulf Coast. At Clover Field, October tops the list. Wet weeks push kids’ games, yard work and errands indoors, where screens take over. Screen time slows blinking, and half-blinks leave part of the eye uncovered. Every 20 minutes or so, look at something across the room for a moment and blink fully a few times.`,
      },
      { h: 'Ballfields and summer evenings' },
      {
        p: `Evening practices and weekend tournaments are part of life in a growing suburb, and in July and August the sun is still strong at six o’clock. Sitting in the bleachers means glare and heat, and coaching from the sideline adds dust and breeze. A wide-brimmed hat and wraparound sunglasses help, and so does a spot in the shade between games. Keep eye drops in a cooler bag in the shade rather than in a car baking in the parking lot.`,
      },
      { h: 'Hurricane season and a spare bottle' },
      {
        p: `NOAA’s Atlantic hurricane season runs from June 1 to November 30, which covers most of Pearland’s wettest months. If a storm knocks out power, there’s no air conditioning, and a house can heat up past the range on the label. Keep a spare bottle in your storm supplies, check its storage temperature when you rotate supplies, and move it to the coolest room in the house during an outage. [Eye drops for a home first aid kit](/guides/eye-drops-for-a-home-first-aid-kit) covers what else to check.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line reads: {uses}. The directions read: {directions}. The warning reads: {warnings}.`,
      },
      {
        p: `For storage, the panel says: {storage}. It also says to keep the tip clean: {tip}. And if the color of the liquid changes, the label is clear: {doNotUse}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Pearland' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Pearland and every other US address. There’s no account required, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a tracking email once it’s on its way, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Pearland page](/eye-drops/pearland-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Some symptoms need more than drops and better vents. The label says: {stopUse} Eye pain, changes in vision, or dryness that returns week after week deserve an exam. An eye doctor can find the cause and decide what to do. Read [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) if you’re unsure.`,
      },
    ],
    faq: [
      {
        q: 'What is the wettest month in Pearland, Texas?',
        a: 'October, at 5.77 inches, in NOAA’s 1991 to 2020 normals for Clover Field, the station closest to Pearland. August (5.63) and September (5.40) are next, and March is the driest month.',
      },
      {
        q: 'How hot does Pearland get in the summer?',
        a: 'Normal highs at Clover Field reach 94.0°F in August and 93.3°F in July, and the normal low in both months is 76.2°F, according to NOAA’s normals.',
      },
      {
        q: 'Should I keep eye drops in a hurricane kit?',
        a: 'A spare bottle is reasonable to keep with storm supplies. Check that it stays within the storage range on its label, and move it to the coolest room if the power goes out.',
      },
      {
        q: 'Does Quell ship to Pearland?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, with guest checkout and a tracking email after shipping. No delivery date is promised.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-pine-bluff-ar:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID PBF, 1991-2020 monthly normals
   *   (PINE BLUFF GRIDER FIELD, elev 204 ft: maxt Jan 51.8, Jul 91.7, Aug 91.3,
   *   Sep 85.9, Dec 54.0 F; pcpn Mar 5.29, Apr 5.35, May 4.80, Sep 3.09,
   *   Dec 5.30 in; annual sum 50.81 in; snowfall M). Saved: .daily-job/acis1121/PBF.json
   * - Same service, mint normals (Jan 33.8, Jul 72.1, Dec 36.0 F).
   *   Saved: .daily-job/d/PBF-mint.json
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-pine-bluff-ar',
    title: 'Dry eye relief in Pine Bluff, Arkansas',
    description:
      'Pine Bluff’s coldest months are also among its wettest, by NOAA’s normals for Grider Field. Why eyes still dry out in winter, and what helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Pine Bluff’s winters are damp outside and dry inside. NOAA’s 1991 to 2020 normals for Grider Field put December among the wettest months, at 5.30 inches, yet January nights average 33.8°F, so the heat runs for weeks. Heated indoor air is what usually dries the eyes. Keep heat vents off your face, add moisture to the bedroom, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Pine Bluff’s weather record' },
      {
        p: `The station is Pine Bluff Grider Field, at about 200 feet. Its 1991 to 2020 normals, which the National Weather Service publishes through NOWData, show a year with plenty of rain and a real winter:`,
      },
      {
        list: [
          `About 50.81 inches of precipitation in a normal year.`,
          `April is the wettest month at 5.35 inches, with December (5.30) and March (5.29) almost tied.`,
          `September is the driest month at 3.09 inches.`,
          `January is the coldest month, with a normal high of 51.8°F and a low of 33.8°F; December’s low is 36.0°F.`,
          `July’s normal high is 91.7°F, and August’s is 91.3°F.`,
        ],
      },
      {
        p: `NOAA’s published humidity and wind tables don’t include Grider Field, so there are no humidity or wind numbers on this page. Rain and temperature are enough to see the shape of the year: cold, wet winters, a stormy spring, and a hot summer that dries out a little by September.`,
      },
      { h: 'A wet winter that still dries your eyes' },
      {
        p: `Rain on the roof doesn’t mean moist air in the den. When cold outdoor air comes inside and gets heated, its relative humidity drops, and a furnace or heat pump blows that drier air through the house. Your tear film’s oil layer slows evaporation, but warm, moving, dry air still thins the watery layer between blinks. That’s why many people notice gritty eyes on a January morning even after a rainy week.`,
      },
      {
        list: [
          `Close or redirect the register nearest your bed or your favorite chair.`,
          `Run a bedroom humidifier and clean it as its maker directs.`,
          `Lower the thermostat a couple of degrees at night.`,
          `Keep space heaters aimed at your feet rather than your face.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains what a humidifier can and can’t do.`,
      },
      { h: 'Cold mornings outdoors' },
      {
        p: `With winter lows in the mid-30s, a sunrise outside, whether you’re in a duck blind, a deer stand or just scraping a windshield, means cold air on your eyes. Cold wind tends to make eyes water, and the watering doesn’t mean they’re well lubricated. Wraparound glasses or a face covering that stops below the eyes help. Keep a bottle of drops in an inside pocket, close to your body, so it stays within its labeled range. Our guide to [dry eyes on a hunting trip](/guides/dry-eyes-on-a-hunting-trip) covers more of the outdoor side.`,
      },
      { h: 'Spring storms and yard work' },
      {
        p: `March, April and May together bring more than 15 inches at Grider Field. Between storms, windows go up and yard work starts again, and blowing dust and pollen can leave eyes feeling scratchy. Rinsing your face and washing your hands after time outside, and keeping fingers away from your eyes, help. If itching is the main thing you notice, ask a pharmacist or eye doctor what fits, since a lubricating drop’s label describes its own uses and nothing more.`,
      },
      { h: 'Summer air conditioning, and a drier September' },
      {
        p: `By July, highs average above 91°F and lows above 72°F, so air conditioning runs at home, at work and in the car. Aim vents low, sit out of the path of office registers, and take blink breaks at screens. September is the driest month of the year at 3.09 inches, with highs still near 86°F, so outdoor dust and indoor cooling overlap. Sunglasses help on bright afternoons.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel gives its Uses as: {uses}. The directions say: {directions}. The warning line says: {warnings}.`,
      },
      {
        p: `Keep the bottle within its range, as the label says: {storage}. A truck left outside on a January night, or in the sun in July, can move past either end. The panel also says: {tip}. Everything is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Pine Bluff' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Pine Bluff and the rest of the country. Guest checkout is standard, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows after shipping, with no promised delivery date. Unopened bottles are refundable within {returnDays} days of delivery, and nothing has to be returned. See the [Pine Bluff page](/eye-drops/pine-bluff-ar) or the [Arkansas page](/eye-drops/state/arkansas).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If your eyes hurt, your vision changes, or the dryness doesn’t ease after a couple of weeks of changes, it’s time for an exam. The label puts it this way: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Pine Bluff, Arkansas get in winter?',
        a: 'January’s normal low at Pine Bluff Grider Field is 33.8°F, with a normal high of 51.8°F, according to NOAA’s 1991 to 2020 normals. December’s normal low is 36.0°F.',
      },
      {
        q: 'What is the driest month in Pine Bluff?',
        a: 'September, at 3.09 inches, in NOAA’s normals for Grider Field. The wettest month is April at 5.35 inches, with December and March close behind.',
      },
      {
        q: 'How much rain does Pine Bluff get a year?',
        a: 'About 50.81 inches in a normal year at Grider Field, according to NOAA. Every month averages more than 3 inches of precipitation.',
      },
      {
        q: 'Does Quell ship to Pine Bluff, Arkansas?',
        a: 'Yes. Orders go out from Brentwood, Tennessee, to Pine Bluff and every other US address, and a tracking email follows once the box ships. There’s no promised delivery date.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for flying-home-for-christmas-with-eye-drops:
   * - https://www.tsa.gov/travel/security-screening/liquids-aerosols-gels-rule
   *   (3.4 ounces / 100 milliliters per item, quart-sized bag, larger containers
   *   in checked baggage, medications listed as an exemption)
   * - https://www.tsa.gov/travel/security-screening/whatcanibring/items/medications-liquid
   *   (larger amounts of medically necessary liquids in reasonable quantities,
   *   declare to officers at the checkpoint; final decision rests with the officer)
   * - https://www.tsa.gov/travel/travel-tips (tell the officer at the start of
   *   screening; medically required liquids need not go in a zip-top bag; gift
   *   bags encouraged over fully wrapped presents; snow globes in checked bags)
   * - Christmas 2026 falls on a Friday (job brief).
   */
  {
    slug: 'flying-home-for-christmas-with-eye-drops',
    title: 'Flying home for Christmas with eye drops',
    description:
      'Packing eye drops for a Christmas flight: TSA’s liquids rule, gifts in your carry-on, and how to keep your eyes comfortable on a long travel day.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `You can fly home for Christmas with eye drops in your carry-on. TSA limits carry-on liquids to containers of 3.4 ounces (100 milliliters) or less, packed in a quart-sized bag, and a bottle of Quell holds {size}. TSA also allows larger amounts of medically necessary liquids if you declare them at the checkpoint. Keep the bottle where you can reach it, because crowded terminals, delays and cabin air all wear on tired eyes.`,
      },
      { h: 'What TSA’s liquids rule says' },
      {
        p: `TSA’s liquids, aerosols and gels rule allows travel-sized containers of 3.4 ounces (100 milliliters) or less per item in a quart-sized bag in your carry-on. Anything in a larger container belongs in a checked bag. The rule lists medications as an exemption, and TSA’s page on liquid medications says it allows larger amounts of medically necessary liquids in reasonable quantities for your trip, as long as you declare them to officers at the checkpoint.`,
      },
      {
        p: `TSA’s travel tips add two practical points: tell the officer about medically necessary liquids at the start of screening, and those liquids don’t have to go in a zip-top bag. TSA also says the final decision on any item rests with the officer at the checkpoint. A single small bottle of eye drops usually just rides in the liquids bag with your toothpaste. Our guide [are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) goes through the rule in more detail.`,
      },
      { h: 'Bringing eye drops as a Christmas gift in your carry-on' },
      {
        p: `If you’re flying with bottles to hand out as gifts, pack them like any other liquid. Each bottle is a container that counts toward your quart-sized bag, and the bag has to hold your own toiletries too. Several small bottles take little room, but it’s easy to overfill the bag once shampoo, contact solution and a few gift bottles are in it.`,
      },
      {
        p: `Wrapping is the other question. TSA’s travel tips encourage people traveling with gifts to use gift bags, which are easy to open, so officers can avoid opening fully wrapped presents. With liquids, the easy route is to pack the bottles unwrapped in your liquids bag and wrap them after you land. Snow globes, if you’re bringing one, are a different matter: TSA’s tips say they belong in checked bags because of the liquid inside.`,
      },
      {
        list: [
          `Pack gift bottles in their cartons inside the quart-sized bag.`,
          `Bring tape, paper or a gift bag and wrap at your destination.`,
          `Or skip the airport entirely and ship the gift straight to the person, which our [holiday address guide](/guides/shipping-to-a-holiday-address) explains.`,
        ],
      },
      { h: 'Carry-on or checked bag?' },
      {
        p: `TSA allows liquid medications in checked bags too. The carry-on is still the better place for drops you plan to use on the trip. You can reach them during a long delay, and they don’t vanish if your suitcase misses the connection, which is a real risk on the busiest travel days of the year. You also can’t control what temperature a checked bag sits in on a cold ramp or in a hot car at the other end, and the label sets a range: {storage}.`,
      },
      { h: 'A long holiday travel day' },
      {
        p: `Christmas falls on a Friday in 2026, so the days before it will likely mean full flights and long lines. An early alarm, hours at the gate looking at a phone, de-icing waits and dry cabin air all add up. Tired eyes tend to blink less completely, screens slow blinking further, and moving air speeds evaporation from the tear film. A few habits help across the whole day:`,
      },
      {
        list: [
          `At the gate, pick a seat away from overhead vents and look up from your screen every few minutes.`,
          `On board, close the air nozzle above your seat or turn it so it doesn’t blow on your face.`,
          `If you sleep on the flight, an eye mask keeps cabin air off your eyes.`,
          `Keep to the label’s schedule rather than adding extra doses because the day is long. The directions say: {directions}.`,
        ],
      },
      {
        p: `More on cabin air is in [dry eyes on a plane](/guides/dry-eyes-on-a-plane).`,
      },
      { h: 'Using eye drops in your seat' },
      {
        p: `Turbulence and a cramped seat make drops harder to place. Clean your hands first, with soap in the restroom or a hand sanitizer that has fully dried. Tilt your head back against the headrest, look up, pull the lower lid down gently and squeeze one drop in. Keep the dropper from touching your eye, your fingers or the tray table, since the label says: {tip}. If a bump makes you miss, wait a moment and try again.`,
      },
      { h: 'When you land: someone else’s house' },
      {
        p: `The trip doesn’t end at baggage claim. A relative’s home may run warmer than yours, with a register by the guest bed or a fire going in the evening. Our guide to [dry eyes in a relative’s guest room](/guides/dry-eyes-in-a-relatives-guest-room) covers what a guest can change. If there are small children in the house, keep your drops up high in a toiletry bag; the label says: {swallowed}.`,
      },
      { h: 'Order before you go' },
      {
        p: `Check how much is left in your bottle a couple of weeks before the trip. Quell ships from Brentwood, Tennessee, to any US address with guest checkout, and shipping is {shipping}, free for {freeBottles} or more bottles. No delivery date is promised, so ordering early in December is safer than ordering the week of your flight. You can [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Can I bring eye drops as a gift on a plane?',
        a: 'Yes, as long as each bottle is 3.4 ounces (100 milliliters) or less and they fit in your quart-sized liquids bag with your other liquids. Gift bottles count toward that bag like anything else.',
      },
      {
        q: 'Should I wrap presents before flying at Christmas?',
        a: 'TSA’s travel tips encourage gift bags, which officers can open easily, so they can avoid opening fully wrapped presents. Many travelers wrap at their destination instead.',
      },
      {
        q: 'Do I have to tell TSA about my eye drops?',
        a: 'A small bottle packed in your quart-sized liquids bag goes through like other liquids. If you carry medically necessary liquids larger than 3.4 ounces, TSA says to declare them to the officer at the start of screening.',
      },
      {
        q: 'When should I order eye drops before a Christmas trip?',
        a: 'Early in December is safer than the week you leave. Quell ships from Brentwood, Tennessee, to any US address, but no delivery date is promised.',
      },
    ],
  },
  {
    slug: 'dry-eyes-in-a-relatives-guest-room',
    title: 'Dry eyes in a relative’s guest room over Christmas',
    description:
      'Staying with family for Christmas? A warm house, a vent beside the air mattress or a fire next door can dry your eyes. What a guest can change.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `A relative’s guest room can leave your eyes dry for reasons you don’t face at home: a thermostat set warmer than yours, a heat register next to the air mattress, a fire going in the next room, or a sofa bed under a ceiling fan. Move the bed out of the airflow where you can, ask about a humidifier, keep taking blink breaks, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why someone else’s house can feel drier than yours' },
      {
        p: `Your eyes get used to your own home. Its heating system, its thermostat setting and the spot where you sleep all shape how much moving, dry air reaches your face. Change all three at once and your tear film has to adjust. Its oil layer slows evaporation from the watery layer underneath, but warm, moving air thins that water between blinks, and heated winter air has a low relative humidity to begin with.`,
      },
      {
        p: `Some differences are common in holiday houses. Older relatives often keep the heat higher. A finished basement guest room may sit close to the furnace. A house full of guests stays warm because the heat runs longer to keep up with doors opening. And a room that’s usually closed off can be stuffy and dusty when it suddenly gets used.`,
      },
      { h: 'Air mattresses, sofa beds and bunk rooms' },
      {
        p: `Where you sleep matters more than which house you’re in. Floor registers sit at exactly the height of an air mattress, so warm air can blow across your face all night. A sofa bed in the living room may be under a ceiling fan, near the fireplace or in front of a TV that stays on late. Kids sharing a bunk room tend to crank the heat or the fan. Look around the room before bed:`,
      },
      {
        list: [
          `Find the heat register and turn the mattress so your head is at the far end.`,
          `Check whether a ceiling fan is running, and ask if you can switch it off.`,
          `If the room has a door, close it so the hallway thermostat doesn’t push extra heat your way.`,
          `Pack a soft eye mask, which keeps moving air off your eyes while you sleep.`,
        ],
      },
      { h: 'How to ask your host without making it awkward' },
      {
        p: `Most hosts would rather fix a vent than have a guest wake up with sore eyes. Keep the request small and specific. “Would you mind if I closed the vent in my room?” is easier to agree to than “Can you turn the heat down?” If they’re happy to lower the thermostat a degree or two at night, great; if not, the register in your room is usually yours to adjust.`,
      },
      {
        p: `A small travel humidifier is another option, and asking first is polite because it needs an outlet and a spot where a little moisture won’t harm furniture. Clean and dry it as its maker directs before you pack it to go home. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains what to expect from one.`,
      },
      { h: 'Days by the fire and in front of the game' },
      {
        p: `Holiday days at a relative’s house tend to happen in one warm room. A wood fire, a gas fireplace and a row of candles each add heat, and smoke irritates eyes on top of that. Hours of football, movies and phone photos mean long stretches of staring with fewer blinks. Choose a seat a little away from the hearth, look away from the screen during commercials, and give your eyes a few slow, full blinks now and then. [Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) has more on the hearth.`,
      },
      { h: 'Keeping your drops safe in a full house' },
      {
        p: `A house full of cousins means curious hands. Keep your bottle in a zipped toiletry bag on a high shelf rather than on the guest-room nightstand. The label is direct about this: {swallowed}. Don’t share an opened bottle with anyone, even family, since the label says: {tip}. Our guide to [visiting family with eye drops](/guides/visiting-family-with-eye-drops) covers more of the house-guest routine.`,
      },
      {
        p: `Storage matters too. A guest room next to the fireplace, a windowsill over a radiator or a car parked outside on a freezing night can push a bottle past its range. The label says: {storage}. If you’re not sure the bottle stayed in range, look at it before use; the label adds: {doNotUse}.`,
      },
      { h: 'If you forgot your eye drops' },
      {
        p: `It happens. A pharmacy near your relative’s house is the fastest fix. You can also order Quell to their address: it ships from Brentwood, Tennessee, to any US address, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so it works better for a long stay than a weekend. What you shouldn’t do is borrow someone’s opened bottle.`,
      },
      { h: 'When it’s more than a dry room' },
      {
        p: `If your eyes hurt, your vision blurs and doesn’t clear with blinking, or the irritation lasts after you get home, don’t chalk it up to the guest room. The label says: {stopUse} An eye doctor can find the cause and decide what to do, and our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon to go.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I stay at someone else’s house?',
        a: 'Their heating, thermostat setting and the spot where you sleep may all put more warm, moving air on your face than you’re used to. A register beside an air mattress is a common culprit.',
      },
      {
        q: 'Is it rude to ask a host to turn down the heat?',
        a: 'Usually not, if the request is small. Asking to close the vent in your own room, or to lower the thermostat a degree at night, is easier for a host to agree to than a big change.',
      },
      {
        q: 'Can I bring a humidifier when staying with family?',
        a: 'A small travel humidifier is fine to bring, though asking your host first is polite. Set it where moisture won’t harm furniture, and clean and dry it as its maker directs.',
      },
    ],
  },
  {
    slug: 'dry-eyes-on-a-christmas-cruise',
    title: 'Dry eyes on a Christmas or New Year’s cruise',
    description:
      'Holiday cruises trade winter air for sea wind, bright decks and cold cabin air. Why eyes dry out at sea in December, and how to stay comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `On a Christmas or New Year’s cruise, eyes dry out from a mix of things: wind across the open deck, sun reflecting off water and white decks, air-conditioned cabins and theaters, and late nights of shows and countdowns. Wear wraparound sunglasses outside, turn the cabin vent away from the bed, take blink breaks, and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'From a winter coat to a sea breeze in a day' },
      {
        p: `A holiday cruise often starts in a heated house, continues through a dry airport and an airplane cabin, and ends on a warm, windy deck. Each step asks your tear film to adjust. That film is a thin layer of oil over water over mucus, and the oil’s job is to slow evaporation. Heated air, cabin air and wind all speed that evaporation in different ways, so the first day or two of a trip is often when eyes feel scratchy.`,
      },
      {
        p: `If you fly to the port, see [flying home for Christmas with eye drops](/guides/flying-home-for-christmas-with-eye-drops) for the TSA side, which applies to any December flight.`,
      },
      { h: 'Wind on the open deck' },
      {
        p: `A ship moving through the water makes its own wind, so the top deck can feel breezy on a calm day. Higher decks and the bow catch the most. Sitting by the pool for an afternoon means hours of air moving across your eyes, and you may not notice it because the breeze feels pleasant.`,
      },
      {
        list: [
          `Choose a lounger on the sheltered side of the ship, or behind a glass windbreak.`,
          `Wear wraparound sunglasses; flat lenses let wind in at the sides.`,
          `Use a hat with a chin strap or a snug fit so you aren’t squinting to hold it on.`,
          `Go inside for a while if your eyes start to water or burn.`,
        ],
      },
      { h: 'Sun and glare in December' },
      {
        p: `Many December itineraries head somewhere warm and bright, and the light at sea comes at you from two directions: straight down and reflected up off the water and the pale deck. Squinting against glare shortens blinks. Polarized sunglasses cut reflected light, and a shaded spot gives your eyes a real break. Midday is the brightest stretch, so it’s a good time for an indoor lunch or a nap.`,
      },
      { h: 'Cabin air and late nights' },
      {
        p: `Cruise cabins are cooled around the clock, and the vent is often right above the bed. Point the louvers toward the wall, or set the thermostat a little warmer at night so it blows less. Inside cabins have no window to open, so the vent is the main thing to adjust. An eye mask also keeps air off your eyes while you sleep.`,
      },
      {
        p: `Holiday sailings tend to pack the evenings: Christmas dinners, shows in a chilly theater, a late visit to the casino and, on a New Year’s cruise, a midnight countdown on a breezy deck. Staying up late means tired eyes, and tired eyes blink less completely. If you’ll be out late, give your eyes a calm hour beforehand, away from screens. Areas where smoking is allowed, if your ship has them, add irritation, so sit away from them. [New Year’s Eve and dry eyes](/guides/new-years-eve-and-dry-eyes) has more on long nights out.`,
      },
      { h: 'Shore days' },
      {
        p: `Beach days bring their own mix of sun, sand and wind. Blowing sand is the main thing to keep out of your eyes, and rubbing makes grit worse. Rinse your face with clean water after swimming or a sandy afternoon, wash your hands before you touch your eyes, and keep your sunglasses on in the tender boat as well as on the beach.`,
      },
      { h: 'Where to keep your drops on board' },
      {
        p: `Keep a bottle in your day bag rather than leaving it in the suitcase you hand over at the pier. In the cabin, a drawer is better than a sunny balcony table; the label says: {storage}. The same goes for a beach bag on hot sand. Practical packing details are in [packing eye drops for a cruise](/guides/packing-eye-drops-for-a-cruise).`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions read: {directions}. Keep the dropper clean; the label says: {tip}. Its full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Order before you sail' },
      {
        p: `Quell ships only within the US, from Brentwood, Tennessee, so order to your home address well before you leave. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, and December is a busy month, so leave extra time. Pack one more bottle than you think you’ll need.`,
      },
      { h: 'If your eyes don’t settle down' },
      {
        p: `Most dryness eases once you’re out of the wind and rested. Some symptoms aren’t about the trip at all. The label says: {stopUse} Pain, light sensitivity or a change in vision at sea is a reason to visit the ship’s medical center, and once you’re home, an eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry on a cruise ship?',
        a: 'Wind on the open deck, glare off the water, cabins cooled around the clock and late nights all speed evaporation from the tear film or cut down on full blinks.',
      },
      {
        q: 'Is it windy on a cruise ship deck?',
        a: 'Often, yes. A moving ship creates its own breeze, so upper decks and the bow can feel windy even on a calm day. Sheltered sides and glass windbreaks help.',
      },
      {
        q: 'Can I leave eye drops on a cruise ship balcony?',
        a: 'It’s better not to. A sunny balcony table can get hot, and Quell’s label gives a storage range. A drawer inside the cabin, or your day bag, is a safer spot.',
      },
      {
        q: 'Should I bring sunglasses on a winter cruise?',
        a: 'Yes. December itineraries to warm places mean bright sun and glare off the water and decks. Wraparound or polarized sunglasses also block wind at the sides.',
      },
    ],
  },
  {
    slug: 'dry-eyes-under-a-patio-heater',
    title: 'Dry eyes under a patio heater',
    description:
      'Patio heaters keep winter evenings outside comfortable, but radiant heat on your face plus a cold breeze can dry your eyes. Where to sit, and what helps.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `A patio heater can dry your eyes because it aims heat at whatever it faces, often your face, while cold outdoor air keeps moving past. Both speed evaporation from the tear film. Sit so the heat reaches your shoulders and body rather than your eyes, stay out of the direct breeze, take a few slow blinks now and then, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why a patio heater can dry your eyes' },
      {
        p: `Your tear film has three layers: mucus against the eye, a watery middle, and a thin oil layer on top that slows evaporation. Every blink spreads a fresh coat. Warmth on the surface of the eye and air moving across it both make the watery layer evaporate faster between blinks. A patio heater gives you both at once. The heat lands on your face, and the open air around a patio is rarely still.`,
      },
      {
        p: `Winter air outdoors usually holds little moisture, too. The heater doesn’t add any; it only warms what’s in front of it. That’s why an hour under a heater on a December evening can leave your eyes feeling tight and gritty, even though you felt cozy the whole time.`,
      },
      { h: 'Types of patio heaters and how they feel' },
      {
        list: [
          `Tall propane “mushroom” heaters spread heat downward from a reflector overhead, so people sitting closest get the strongest heat on the tops of their heads and faces.`,
          `Wall-mounted or ceiling-mounted electric heaters beam heat across a space, and the side of your face that faces them gets most of it.`,
          `Tabletop heaters sit at about eye level when you’re seated, which puts the heat right in your line of sight.`,
          `Fire pits and chimineas add smoke to the heat, which irritates eyes on its own.`,
        ],
      },
      {
        p: `Whatever the type, the closer you are, the more heat reaches your eyes. A seat that feels a little warm is easier on them than a seat that feels roasting.`,
      },
      { h: 'Where to sit near a patio heater' },
      {
        list: [
          `Sit so the heater is beside or behind you rather than directly in front of your face.`,
          `Under a tall heater, choose a seat toward the edge of its circle rather than right beneath it.`,
          `Put your back to the wind, using a wall, a fence or a patio screen as a break.`,
          `Move a tabletop heater to the side of the table rather than the middle.`,
          `If a fire pit is part of the setup, watch which way the smoke drifts and sit upwind.`,
        ],
      },
      {
        p: `A blanket over your legs and a warm hat keep you comfortable at a little more distance from the heat. Your eyes benefit from that extra foot or two.`,
      },
      { h: 'Restaurant patios in winter' },
      {
        p: `Many restaurants heat their outdoor tables through the cold months, and you rarely get to choose where the heaters are. Ask for a table that isn’t directly under a heater, or one near the wall where the breeze is weaker. If the server can turn a heater down or angle it, that helps too. A long dinner under a heater adds up, so look away from the flame or the glowing element now and then and give your eyes a few complete blinks.`,
      },
      { h: 'Your own patio or deck at home' },
      {
        p: `At home you control the setup. Place the heater so it warms the seating area from the side, put chairs in a half circle facing away from the wind, and turn the heater down once everyone is warm. A propane heater burns fuel, and on a still evening its exhaust can linger around the people closest to it, so use it in open air as its maker directs and never on a closed-in porch. Most heaters carry their own manufacturer’s distance guidance; follow it.`,
      },
      {
        p: `If your eyes bother you on cold nights outdoors in general, our guides on [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) and [dry eyes at a winter bonfire](/guides/dry-eyes-at-a-winter-bonfire) cover the wind and smoke side.`,
      },
      { h: 'Screens and late evenings outside' },
      {
        p: `Patio evenings often include a game on an outdoor TV or a phone passed around with photos. Screens slow your blink rate, and in heated, moving air that matters more than it would indoors. Glance away from the screen during breaks, and close your eyes for a few seconds every so often. Late nights matter too: tired eyes tend to blink less completely.`,
      },
      { h: 'Using a lubricating drop outdoors' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions say: {directions}. Wash or sanitize your hands first, and keep the tip clean, since the label says: {tip}.`,
      },
      {
        p: `Don’t set the bottle on a table next to the heater or leave it out on a cold patio after everyone heads inside. The label’s storage line reads: {storage}. A coat pocket close to your body keeps it within range on a cold evening. The full panel is on our [Drug Facts page](/drug-facts), and you can [order Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Brief dryness after an evening outside usually eases once you’re indoors. If it doesn’t, or if something else is going on, the label is clear: {stopUse} Pain, light sensitivity or any change in vision means it’s time for an exam. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Can a patio heater dry out your eyes?',
        a: 'It can. A patio heater warms whatever it faces, often your face, while cold outdoor air keeps moving past. Warmth and moving air both speed evaporation from the tear film.',
      },
      {
        q: 'Where should I sit near a patio heater?',
        a: 'Beside the heater or with it behind you, toward the edge of its warm circle, with your back to the wind. That keeps you warm without putting the strongest heat on your eyes.',
      },
      {
        q: 'Is it bad to sit right under a patio heater?',
        a: 'It isn’t ideal for your eyes. Directly under a tall heater is where the heat on your face is strongest. A seat a little farther out is warm enough and easier on the tear film.',
      },
    ],
  },
  {
    slug: 'dry-eyes-from-a-mini-split',
    title: 'Dry eyes from a mini-split heat pump',
    description:
      'A wall-mounted mini-split blows heated or cooled air from high on the wall, often toward a bed or couch. How to aim it, set it, and keep your eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `A ductless mini-split can dry your eyes because its indoor unit pushes a steady stream of heated or cooled air from one spot high on the wall, often straight toward the bed, the couch or a desk. Moving air speeds evaporation from the tear film. Aim the vanes away from where you sit and sleep, use a lower fan speed, keep the filters clean, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why a mini-split can bother your eyes' },
      {
        p: `Your tear film is three thin layers: mucus against the eye, a watery middle, and an oil layer on top that slows evaporation. Each blink lays down a fresh coat. When air moves across the eye, the watery layer evaporates faster between blinks, and the surface can start to feel gritty, tight or tired.`,
      },
      {
        p: `A central system spreads its air through several registers around a room, usually near the floor or in the ceiling. A mini-split does it from one head mounted near the ceiling, so all of the room’s airflow leaves from a single point and travels across the room in a band. If your favorite chair or your pillow sits in that band, your eyes get the full stream for hours. In heating mode, the air is also warm and low in relative humidity, and in cooling mode the unit pulls moisture out as it runs.`,
      },
      { h: 'Where the air goes, and how to check' },
      {
        p: `Before changing any settings, find out where the stream actually lands. Stand where you usually sit or lie down and feel for air on your face. A light ribbon or a strip of tissue held at head height shows the flow clearly. Many people discover that the unit installed above a doorway or a window points directly at the headboard or the end of the sofa.`,
      },
      { h: 'Aiming the vanes' },
      {
        p: `Most indoor units have a horizontal vane that tilts the air up or down, and many also have vertical louvers that steer it left or right. Your remote or the unit’s app usually controls them. A few adjustments help:`,
      },
      {
        list: [
          `In heating mode, angle the air downward toward the floor and away from seating. Warm air rises on its own, so the room still heats.`,
          `In cooling mode, angle it up toward the ceiling so the cool air falls gently instead of blowing across faces.`,
          `Steer the side louvers toward an empty wall or the middle of the room rather than the bed or the couch.`,
          `Turn off swing mode if it sweeps the air back and forth across where you sit; a fixed position you’ve chosen is easier on your eyes.`,
        ],
      },
      { h: 'Fan speed and settings' },
      {
        list: [
          `Choose a low or quiet fan speed once the room reaches temperature. Auto settings can run at high speed for long stretches.`,
          `Avoid “turbo” or “powerful” modes except for a quick warm-up or cool-down.`,
          `Use the sleep setting at night if your unit has one, since it typically lowers fan speed.`,
          `Set the temperature a degree or two closer to the outdoor temperature so the unit doesn’t need to blow as hard.`,
          `Read your unit’s manual for what each button does; names and features vary between brands and models.`,
        ],
      },
      { h: 'Bedrooms and home offices' },
      {
        p: `A mini-split in a bedroom often hangs on the wall facing the bed, and that’s the setup most likely to leave you waking with dry, uncomfortable eyes. If you can’t move the bed, aim the vane well away from the pillow, run the fan on its lowest speed or its sleep setting, and consider turning the unit off once the room is comfortable. A soft eye mask keeps moving air off your eyes while you sleep. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers the same problem from a box fan.`,
      },
      {
        p: `In a home office or a converted garage, a mini-split is often the only heat or cooling. Screen work already slows blinking, and air blowing across a desk makes it worse. Turn the desk so the airflow passes behind you or to the side, and look away from the screen every 20 minutes or so to blink fully a few times.`,
      },
      { h: 'Winter heating mode' },
      {
        p: `When a heat pump warms cold outdoor air for the room, it doesn’t add any moisture, so the relative humidity indoors drops. That’s the same reason any heated house feels dry in winter. A room humidifier, cleaned as its maker directs, adds moisture back where you spend the most time. Keep it out of the mini-split’s airflow so it doesn’t blow mist toward the unit. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains what to expect, and [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the rest of the house.`,
      },
      { h: 'Clean filters and a clean unit' },
      {
        p: `The indoor head has washable filters behind its front panel, and dust that builds up on them can be blown back into the room. Clean them on the schedule in your owner’s manual, and more often if you have pets or the unit runs most of the day. If you notice a musty smell or visible dust when the unit starts, have it serviced by a qualified technician.`,
      },
      { h: 'Using a lubricating drop' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions say: {directions}. Its caution reads: {warnings}.`,
      },
      {
        p: `Don’t keep the bottle on a shelf directly under or in front of the unit, where it sits in warm or cold moving air. The label’s storage line is: {storage}. Keep the dropper clean, as the label also says: {tip}. You can read the whole panel on our [Drug Facts page](/drug-facts) or [order Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes still feel dry after you’ve moved the airflow and turned the fan down, or if something else seems wrong, the label is clear: {stopUse} Pain, light sensitivity or a change in vision means it’s time for an exam. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Can a mini-split dry out your eyes?',
        a: 'It can. The indoor unit sends all of a room’s airflow from one spot high on the wall, and if that stream crosses your face for hours, it speeds evaporation from the tear film.',
      },
      {
        q: 'Which way should I point my mini-split in winter?',
        a: 'In heating mode, angle the vane down toward the floor and away from where people sit or sleep. Warm air rises on its own, so the room still heats evenly.',
      },
      {
        q: 'Should I turn off swing mode on a mini-split?',
        a: 'If the sweeping air passes across your bed or chair, a fixed vane position aimed away from you is usually more comfortable for your eyes. Check your manual for how to set it.',
      },
      {
        q: 'How often should I clean my mini-split filters?',
        a: 'Follow the schedule in your owner’s manual, and clean them more often if you have pets or the unit runs most of the day. Dusty filters can blow dust back into the room.',
      },
    ],
  },
  {
    slug: 'dry-eyes-when-building-models',
    title: 'Dry eyes when building models or painting minis',
    description:
      'Scale models and miniature painting mean close focus, magnifiers, hot lamps and glue fumes. Why eyes dry out at the hobby desk, and how to set up.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Building scale models or painting miniatures dries your eyes because the work demands long, close focus that slows blinking, often under a hot lamp or behind a magnifier. Glue, paint and solvent fumes can irritate eyes on top of that. Ventilate the room, light the desk without heat on your face, take regular breaks, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why hobby work dries your eyes' },
      {
        p: `The tear film is a thin coat of mucus, water and oil. Blinking spreads it, and the oil on top slows evaporation of the water underneath. When you’re painting an eye on a figure the size of your thumb or lining up a tiny part, you hold your breath and your blinks, and the blinks you do make are often partial. The surface dries between them. A session that runs all evening gives that dryness hours to build.`,
      },
      { h: 'Magnifiers, visors and lamps' },
      {
        p: `Magnification helps you see detail without leaning in, which is good for your neck and your eyes. A few setup choices make it easier on the tear film:`,
      },
      {
        list: [
          `Use a magnifier at the working distance its maker recommends rather than pushing your face closer.`,
          `Choose an LED lamp or a ring light that runs cool; a hot bulb near your face dries the air you’re breathing and blinking in.`,
          `Position light to the side or behind the work so it doesn’t reflect off gloss paint or clear parts into your eyes.`,
          `Light the whole room, so your eyes don’t constantly readjust between a bright desk and a dark corner.`,
        ],
      },
      { h: 'Glue, paint and solvent fumes' },
      {
        p: `Plastic cement, superglue, enamel thinners and some primers give off vapors that many people find irritating to the eyes and nose. Fast-drying glues can be especially sharp up close. Read each product’s label for its ventilation and protective-eyewear directions, and follow them. In general, keep a window open or a fan drawing air away from your desk toward the outside, cap bottles between uses, and lean back from the part while glue sets rather than watching it closely.`,
      },
      {
        p: `Airbrushing adds fine overspray. A spray booth that exhausts to the outdoors keeps mist away from your face, and safety glasses keep it out of your eyes. If any paint, glue or solvent gets in your eye, a lubricating drop isn’t the answer: follow that product’s first-aid directions and get medical help.`,
      },
      { h: 'Breaks that fit the hobby' },
      {
        p: `Drying times give you natural pauses. Use them. While a coat of paint dries or glue sets, look up from the desk at something across the room, blink fully a few times, and close your eyes for a few seconds. Every hour, get up and walk away from the bench. These breaks also help your hands steady for the next round of detail work.`,
      },
      { h: 'The hobby room itself' },
      {
        p: `Many hobby desks live in a spare room, a basement or a garage. Each has its own issues. A spare room next to a furnace register can be warm and dry; aim the register away from the desk or close it partway. A basement may be dusty, and dust on freshly painted figures isn’t the only problem, since it ends up in your eyes too. A garage can swing from cold to hot, which matters for your paints and for any eye drops you keep on the bench. [Dry eyes in a heated garage or workshop](/guides/dry-eyes-in-a-heated-garage-workshop) goes into that setup.`,
      },
      { h: 'Screens, reference photos and tutorials' },
      {
        p: `A lot of hobby time now involves a screen: reference photos, painting tutorials, instructions on a tablet. Moving your eyes between a bright screen and a tiny part slows blinking further. Set the screen at eye level and a comfortable distance, and match its brightness to the room. [Dry eyes when sewing or knitting](/guides/dry-eyes-when-sewing-or-knitting) covers similar close-work habits for a different craft.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel gives its Uses as: {uses}. Its directions: {directions}. Its warning: {warnings}.`,
      },
      {
        p: `Clean your hands of paint, glue and solvent before you touch your eyes or the bottle. The label says: {tip}. Keep the bottle off a hot lamp base and out of an unheated garage in winter, since its storage line reads: {storage}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to stop and see an eye doctor' },
      {
        p: `If your eyes burn after fumes and the burning doesn’t fade in fresh air, if your vision changes, or if one eye hurts, stop working and get help. For ongoing dryness, the label’s rule is: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for a list worth knowing.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when painting miniatures?',
        a: 'Fine detail work makes you stare and hold your blinks, and the blinks you make are often partial. A hot lamp, a magnifier held close and a warm room add to the drying.',
      },
      {
        q: 'Can model glue fumes irritate your eyes?',
        a: 'Many people find glue and solvent vapors irritating to the eyes and nose. Follow each product’s ventilation directions, keep air moving away from your desk, and cap bottles between uses.',
      },
      {
        q: 'What if paint or glue gets in my eye while building models?',
        a: 'Don’t reach for a lubricating drop. Follow the first-aid directions on that product’s label and get medical help, especially if pain or blurred vision continues.',
      },
    ],
  },
  {
    slug: 'moisturizing-vs-lubricating-eye-drops',
    title: 'Moisturizing vs. lubricating eye drops',
    description:
      '“Moisturizing” is packaging language; “Lubricant” is what a Drug Facts panel prints. What each term means, and how to compare eye drops by the label instead.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Moisturizing and lubricating eye drops usually describe the same kind of product. “Lubricant” is a word printed in the Purpose column of a Drug Facts panel, next to an active ingredient. “Moisturizing” is a description used on boxes and in ads, not a panel heading. To compare drops, look past the front of the box and read the active ingredients, their purposes, the Uses line and the directions.`,
      },
      { h: 'What “lubricating” means on a label' },
      {
        p: `Every over-the-counter eye drop carries a Drug Facts panel. Its first section lists each active ingredient with a purpose beside it. For a drop meant for dryness, the purpose is often “Lubricant.” That word tells you what job the ingredient does on the eye’s surface: it helps the eye and lids move over each other more smoothly and supports the tear film.`,
      },
      {
        p: `Quell’s active ingredients are {actives}. On its panel, the first two are listed as Lubricant and the third as Emollient. Our guides to [lubricant vs. lubricating eye drops](/guides/lubricant-vs-lubricating-eye-drops) and [demulcent vs. emollient eye drops](/guides/demulcent-vs-emollient-eye-drops) explain those panel words further.`,
      },
      { h: 'Where “moisturizing” comes from' },
      {
        p: `“Moisturizing” isn’t a heading or a purpose you’ll find in the Drug Facts box. It’s a marketing description, borrowed from skin care, that suggests comfort. A box might call the same product moisturizing, hydrating, soothing or comforting. None of those words tells you what’s in the bottle or what the label says it’s for.`,
      },
      {
        p: `There’s also a real difference between adding moisture and keeping it. Quell’s approved description is that it’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. That’s about slowing evaporation of the tears you already have, which is a different idea from pouring water onto the eye. [How do lubricating eye drops work?](/guides/how-do-lubricating-eye-drops-work) goes into the tear film side.`,
      },
      { h: 'Other words you’ll see on eye drop boxes' },
      {
        list: [
          `Artificial tears: a common name for lubricating drops in general. See [artificial tears vs. lubricating eye drops](/guides/artificial-tears-vs-lubricating-eye-drops).`,
          `Hydrating: like moisturizing, a description rather than a panel term.`,
          `Rewetting: usually used on drops meant for contact lens wearers. This site doesn’t give contact lens directions; ask your eye doctor which drops fit your lenses.`,
          `Preservative-free: a description of what the formula leaves out, which you can confirm in the inactive ingredients list.`,
          `Emollient: a panel Purpose word for an ingredient, often an oil, that softens and spreads.`,
        ],
      },
      { h: 'How to compare two eye drops in the store' },
      {
        list: [
          `Turn the box over and find the Drug Facts panel.`,
          `Read the active ingredients and the purpose printed beside each one.`,
          `Read the Uses line: it says what the product is for, in the maker’s required wording.`,
          `Compare the directions: how many drops, how often.`,
          `Check the warnings, especially any “Do not use” or allergy lines.`,
          `Scan the inactive ingredients for anything you know you react to.`,
          `Then, and only then, look at the front-of-box words.`,
        ],
      },
      {
        p: `Our guide to [comparing eye drops online](/guides/comparing-eye-drops-online) covers the same idea for shopping on a website.`,
      },
      { h: 'Is a moisturizing drop the same as an emollient drop?' },
      {
        p: `Not necessarily. “Emollient” is a specific Purpose word on a panel, usually tied to an oil ingredient. “Moisturizing” could describe a drop with no emollient at all. If an oil-based formula matters to you, check the active ingredients for one listed as Emollient. In Quell’s case, that’s {mineralOil}.`,
      },
      { h: 'Why the box and the panel use different words' },
      {
        p: `The front of a box is where a brand gets to describe its product in its own voice, within the limits of what the label supports. The Drug Facts panel on the back follows a fixed format, with the same headings in the same order on every over-the-counter drug, so shoppers can compare like with like. That’s why the panel says “Lubricant” while the front might say “moisturizing relief.” When the two seem to disagree, the panel is the part to trust. [What the front of an eye drop box tells you](/guides/what-the-front-of-an-eye-drop-box-tells-you) breaks down the front panel.`,
      },
      { h: 'Questions to ask a pharmacist' },
      {
        list: [
          `Do these two drops have the same active ingredients, or only similar names?`,
          `Is one of them meant for contact lens wearers?`,
          `Does either one contain a preservative, and does that matter for how often I use it?`,
          `Is it okay to use alongside anything else I take or put in my eyes?`,
        ],
      },
      {
        p: `A pharmacist can answer questions the label leaves open, including the last one, which Quell’s label doesn’t cover.`,
      },
      { h: 'What Quell’s panel says' },
      {
        p: `The Uses line reads: {uses}. The directions read: {directions}. The warning reads: {warnings}. The panel also notes: {milky}. That look comes from the oils in the formula, and {appearance} The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When the wording doesn’t matter' },
      {
        p: `No label word can tell you why your eyes are dry. If they hurt, your vision changes, or dryness keeps returning, see an eye doctor, who can find the cause and decide what to do. The label’s own stop rule is: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Are moisturizing eye drops the same as lubricating eye drops?',
        a: 'Usually, yes. “Lubricant” is the Purpose word printed on a Drug Facts panel, while “moisturizing” is a description on packaging. Compare drops by their active ingredients, Uses and directions.',
      },
      {
        q: 'Is moisturizing an official term on eye drop labels?',
        a: 'No. It doesn’t appear as a heading or a Purpose in the Drug Facts box. It’s front-of-box language, like “hydrating” or “soothing.”',
      },
      {
        q: 'What does hydrating mean on eye drops?',
        a: 'It’s a marketing description rather than a label term. To learn what a hydrating drop actually contains and is for, read its Drug Facts panel.',
      },
    ],
  },
  {
    slug: 'eye-drops-vs-water-for-dry-eyes',
    title: 'Eye drops vs. water for dry eyes',
    description:
      'Splashing water on dry eyes feels good for a moment, but it isn’t a lubricating drop. How the two differ, and when rinsing with water does make sense.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Water and lubricating eye drops do different jobs. A splash of tap water rinses the eye’s surface and can feel refreshing, but it has no oil or mucus to rebuild the tear film, it drains away within moments, and tap water isn’t sterile. A lubricating drop is a labeled product made for the eye. Quell, for example, is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      { h: 'What your tear film is made of' },
      {
        p: `Tears aren’t plain water. The tear film has three layers: a mucus layer that helps tears cling to the eye, a watery middle layer, and a thin oil layer on top that slows evaporation. Blinking spreads all three in one smooth coat. When eyes feel dry, the watery layer is usually evaporating faster than it’s replaced, often because of dry or moving air, screens that slow blinking, or heat.`,
      },
      { h: 'What water does on the eye' },
      {
        p: `Splashing water on your eyes can wash away dust and give a quick, cool sensation. What it can’t do is supply the oil and mucus that hold tears in place. Once the splash drains off or evaporates, the surface is back where it started, and if a lot of water flushed across the eye, the tear film may need a few blinks to rebuild itself.`,
      },
      {
        p: `That’s why water can feel good in the moment and do little for dryness an hour later. A cool washcloth over closed eyes is soothing for the same reason: it’s comfort, not lubrication.`,
      },
      { h: 'Why tap water isn’t meant for your eyes' },
      {
        p: `Tap water is made safe to drink, which isn’t the same thing as being sterile. Drops made for the eye come in sealed, labeled bottles with a Drug Facts panel that lists every ingredient. Water from a faucet, a water bottle or a pitcher has none of that. If you’re thinking of putting water into your eyes on purpose, a pharmacist can tell you what product fits instead.`,
      },
      { h: 'When rinsing with water makes sense' },
      {
        p: `There are times when water is exactly right. If something gets into your eye, whether grit, a household product, or anything that stings, flushing with clean water, or using an eyewash station at work, is often the first step. Follow the first-aid directions on the product’s own label, and get medical help if pain, burning or blurry vision continues. A lubricating drop isn’t a substitute for flushing out something harmful. [Eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains how eyewash products differ from drops.`,
      },
      { h: 'Water vs. saline vs. lubricating drops' },
      {
        list: [
          `Tap water: rinses, but isn’t sterile and doesn’t match tears.`,
          `Saline solution: salt water made for rinsing, often used with contact lenses; see [eye drops vs. saline solution](/guides/eye-drops-vs-saline-solution).`,
          `Lubricating eye drops: labeled for dryness or irritation, with active ingredients listed on a Drug Facts panel.`,
        ],
      },
      { h: 'What a lubricating drop adds' },
      {
        p: `A lubricating drop is built around active ingredients chosen for the eye’s surface. Quell’s are {actives}, and the panel lists its Uses as: {uses}. Its directions are: {directions}. Its inactive ingredients are {inactives}.`,
      },
      {
        p: `Because a multi-dose bottle is opened again and again, keeping it clean matters. The label says: {tip}. It also says: {warnings}. Read the whole panel on our [Drug Facts page](/drug-facts) before you use it.`,
      },
      { h: 'Washing your face when your eyes are dry' },
      {
        p: `Washing your face is fine; just close your eyes while you do it, and pat dry with a clean towel rather than rubbing your lids. If your eyes feel dry after a shower, the cause may be the hot, then dry, air in the bathroom, which [why do my eyes feel dry after a shower?](/guides/why-do-my-eyes-feel-dry-after-a-shower) explains. Apply a drop afterward if that fits the label’s schedule.`,
      },
      { h: 'When neither water nor drops is enough' },
      {
        p: `If your eyes keep feeling dry despite changes to your routine, or if they hurt, look different or affect your vision, see an eye doctor. The label puts the line here: {stopUse} An eye doctor can find the cause and decide what to do. Our [self-check](/self-check) can help you decide whether to make an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can I use water instead of eye drops?',
        a: 'Not as a replacement. Water rinses the eye but has no oil or mucus to rebuild the tear film, and tap water isn’t sterile. A lubricating drop is a labeled product made for the eye.',
      },
      {
        q: 'Is it okay to rinse your eyes with tap water?',
        a: 'Flushing with clean water is a common first step when something gets in your eye. For everyday dryness, though, plain water drains away quickly and isn’t made for the eye.',
      },
      {
        q: 'Does splashing cold water on your eyes help dry eyes?',
        a: 'It can feel refreshing for a moment, but the effect fades as the water drains or evaporates. It doesn’t add the oil and mucus that help tears stay on the eye.',
      },
    ],
  },
  /*
   * Sources read 2026-11-21 for order-lookup-says-no-order-found (site code, read-only):
   * - src/app/orders/page.tsx, src/components/OrderLookup.tsx (order number + checkout
   *   email; status labels and notes; shipping address shown)
   * - src/app/api/orders/lookup/route.ts (trim + uppercase number, trim + lowercase
   *   email; same "No order found..." message for any miss; 10 lookups per 10
   *   minutes per location, then "Too many lookups. Please wait and try again.")
   * - src/lib/order-number.ts (format Q- plus 8 characters, e.g. Q-7F3K9M2A)
   * - src/lib/email.ts (confirmation shows "Order #Q-...", Track your order button
   *   links /orders?number=...; footer "Questions? Call ...")
   */
  {
    slug: 'order-lookup-says-no-order-found',
    title: 'Order lookup says “No order found”? What to check',
    description:
      'If the Quell order page says no order was found, the number or the email doesn’t match what checkout saved. What to check, in order, and when to call us.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `The order page says “No order found” when the order number and the email you typed don’t both match what checkout saved. Use the full number including the “Q-” but not the “#”, and the exact email you checked out with. The easiest fix is the “Track your order” button in your confirmation email, which fills in the number for you. Still stuck? Call {phone}, {hours}.`,
      },
      { h: 'What the order page needs' },
      {
        p: `The [order page](/orders) asks for two things: your order number and the email address you used at checkout. Both are in your confirmation email. There’s no password and no account involved, which is what lets guests check an order. In exchange, both pieces have to match the order exactly, and the page won’t tell you which one is wrong.`,
      },
      {
        p: `That last part is deliberate. If the page said “that email is wrong” for a real order number, anyone could use it to test which order numbers exist. So a mistyped number, a different email, and an order that doesn’t exist all get the same message: “No order found with that number and email. Check both against your confirmation email.”`,
      },
      { h: 'Check the order number' },
      {
        list: [
          `Quell order numbers start with “Q-” followed by eight letters and numbers, like Q-7F3K9M2A. Include the Q and the hyphen.`,
          `Leave out the “#”. The confirmation email writes “Order #Q-…”, and the pound sign isn’t part of the number.`,
          `Capital or lowercase letters both work, and spaces at the ends are trimmed, so you don’t need to worry about those.`,
          `The numbers never use I, L, O, U, zero or one, so if you think you see one of those, look again. [Why Quell order numbers skip some letters](/guides/why-quell-order-numbers-skip-some-letters) explains why.`,
          `Copy and paste from the email if you can, rather than retyping.`,
        ],
      },
      { h: 'Check the email address' },
      {
        p: `The email has to be the one typed at checkout, not the one you usually use or the one tied to an account somewhere else. If you have more than one address, try each. Capitalization doesn’t matter. The confirmation email itself was sent to that address, so whichever inbox it landed in is the address to use.`,
      },
      {
        p: `If there’s no confirmation email anywhere, including spam and promotions folders, the address may have been mistyped at checkout. [What if I mistype my email at checkout?](/guides/mistyped-email-at-checkout) and [didn’t get an order confirmation email?](/guides/no-order-confirmation-email) cover that situation.`,
      },
      { h: 'Use the button in your confirmation email' },
      {
        p: `The confirmation email has a “Track your order” button. It opens the order page with your order number already filled in, so all that’s left is to type your email. That avoids most typing mistakes with the number. It works from a phone, a tablet or a computer, and it doesn’t matter which device you ordered on.`,
      },
      { h: '“Too many lookups. Please wait and try again.”' },
      {
        p: `The order page allows 10 lookups in 10 minutes from the same location. After that it pauses and shows this message. It’s there to stop anyone from guessing order numbers. If you see it, wait about ten minutes, then try again carefully, with the number copied straight from the email. A shared network, like an office or a dorm, can reach the limit faster because everyone on it counts as one location.`,
      },
      { h: 'What you’ll see when it works' },
      {
        p: `A successful lookup shows the order’s status, the date, what you ordered, the subtotal, shipping and total, and the address it’s shipping to. The status will be one of four: Awaiting payment, Paid and being prepared, Shipped, or Canceled. [What your Quell order status means](/guides/what-your-order-status-means) explains each one.`,
      },
      {
        list: [
          `If it says Awaiting payment and you just paid, give it a moment and look again.`,
          `If it says Shipped, your shipping email has the tracking details.`,
          `If the shipping address looks wrong, call right away, since speed matters.`,
        ],
      },
      { h: 'When it still won’t find your order' },
      {
        p: `Sometimes the order didn’t go through at all. If checkout was closed before payment finished, no order was placed, and you wouldn’t have received a confirmation. In that case you may get one email saying your cart is waiting. [What happens if you don’t finish checkout?](/guides/what-happens-if-you-dont-finish-checkout) explains it.`,
      },
      {
        p: `If you’re sure you paid, call {phone} during business hours, {hours}. Have the name and shipping address you used, the approximate date, and the email you think you used. With those details, we can try to find the order and the email it was placed under.`,
      },
      { h: 'Ordering again in the meantime' },
      {
        p: `Don’t place a second order just because the lookup failed. If the first order went through, you’d end up with two. Confirm with us first. If it turns out no order was placed, you can [order from the home page](/#buy) as a guest.`,
      },
    ],
    faq: [
      {
        q: 'Why does my Quell order say no order found?',
        a: 'The order number and email must both match what checkout saved. Include “Q-” in the number, leave out the “#”, and use the exact email you checked out with.',
      },
      {
        q: 'Do I include the pound sign when I look up my order?',
        a: 'No. The confirmation email shows “Order #Q-…”, but the number itself starts with Q. Type it as Q followed by a hyphen and eight characters.',
      },
      {
        q: 'What does too many lookups mean on the order page?',
        a: 'The page allows 10 lookups in 10 minutes from one location to stop number guessing. Wait about ten minutes and try again with the number copied from your email.',
      },
      {
        q: 'Can I look up my order without the email I used?',
        a: 'Not on the order page, which needs both. Call {phone}, {hours}, with your name, shipping address and order date, and we can look for it.',
      },
    ],
  },
  /*
   * Sources read 2026-11-21 for when-does-the-reorder-reminder-email-come (site code):
   * - src/lib/reorder.ts (35 days per bottle estimate at the labeled dose, times
   *   bottles on the order; paid or shipped only; once per order; skipped if a later
   *   paid/shipped order exists; given up 45 days after the estimated date)
   * - src/app/api/cron/reorder/route.ts (runs daily via vercel.json; later order
   *   matched by the same email address, not by account)
   * - src/lib/email.ts sendReorderReminderEmail (subject "Running low on Quell?",
   *   order date, Reorder button to /#buy, invites a reply, "only reminder")
   */
  {
    slug: 'when-does-the-reorder-reminder-email-come',
    title: 'When does Quell’s reorder reminder email come?',
    description:
      'Quell sends one “Running low?” email, timed to how many bottles you bought. When it arrives, why it sometimes doesn’t, and what it will and won’t do.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Quell’s reorder reminder is timed to the bottles on your order. The site estimates about 35 days per bottle at the labeled dose, so a one-bottle order is due around five weeks after you ordered, two bottles around ten, and three around fifteen. The reminder goes out once, only for paid orders, and not at all if you’ve already ordered again with the same email.`,
      },
      { h: 'How the timing is worked out' },
      {
        p: `The label’s directions are: {directions}. That’s six drops a day. The site uses that dose to estimate that a bottle of {size} lasts about 35 days, then multiplies by the number of bottles on the order. The clock starts on the day the order was placed.`,
      },
      {
        list: [
          `1 bottle: due about 35 days after ordering.`,
          `2 bottles: about 70 days.`,
          `3 bottles: about 105 days.`,
          `Each extra bottle adds about 35 more days.`,
        ],
      },
      {
        p: `It’s an estimate, not a measurement. People use fewer drops some days, skip days, or share a bottle with a partner. That’s why the email asks whether you’re running low instead of telling you that you are.`,
      },
      { h: 'What the email looks like' },
      {
        p: `The subject line is “Running low on Quell?” The message greets you by the first name on the shipping address, reminds you of the date you ordered, and has a button that takes you to the buy panel on the home page. It invites you to reply if you’ve stopped using it or if something wasn’t right, and it ends with your order number and a line saying it’s the only reminder you’ll get. [Is this eye drop order email real?](/guides/is-this-eye-drop-order-email-real) explains how to check any email that claims to be from us.`,
      },
      { h: 'Why didn’t I get a reorder reminder?' },
      {
        p: `There are a handful of reasons the email doesn’t go out, and most of them are by design:`,
      },
      {
        list: [
          `You already reordered. If a later paid order exists under the same email address, the reminder is skipped.`,
          `It isn’t due yet. A three-bottle order won’t get a reminder until roughly fifteen weeks have passed.`,
          `The order never completed. Only orders that were paid or shipped get one; canceled or unpaid orders don’t.`,
          `It was already sent. Each order gets one reminder, ever.`,
          `Too much time passed. If the estimated date is more than 45 days behind, the reminder is no longer sent.`,
          `The email went somewhere else: a spam folder, a promotions tab, or a mistyped address from checkout.`,
        ],
      },
      { h: 'Reordered with a different email?' },
      {
        p: `The check for a later order is matched by email address, not by name or account, because most people check out as guests. If you placed your second order with a different email from the first, the reminder for the first order may still arrive even though you’ve already bought more. You can safely ignore it.`,
      },
      { h: 'It isn’t a subscription' },
      {
        p: `Nothing renews and nothing is charged when the reminder arrives. Reordering means placing a brand-new order whenever you’re ready, with the same guest checkout as the first time. There are no promo codes, and the reminder doesn’t carry a discount. [Is Quell a subscription?](/guides/is-quell-a-subscription) has the details.`,
      },
      { h: 'Planning your own reorder' },
      {
        p: `If you don’t want to wait for the reminder, a simple rule works: reorder when about a week is left in your last bottle. No delivery date is promised, so that buffer matters. Ordering {freeBottles} or more bottles at once ships free, and also pushes the reminder out further. [How many bottles of eye drops should I order?](/guides/how-many-bottles-to-order) helps you choose, and you can [reorder from the home page](/#buy) any time.`,
      },
      { h: 'Bought Quell for someone else?' },
      {
        p: `The reminder goes to the email address typed at checkout, but its greeting uses the first name on the shipping address. So if you sent bottles to a parent or a friend, you’ll get an email that says “Hi” followed by their name. That isn’t a mix-up. It simply means the bottles you sent them are probably getting low, and you can decide whether to send more or let them know. [Ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) covers the rest of that setup.`,
      },
      { h: 'What the reminder leaves out' },
      {
        p: `The email talks only about the order and the bottles. It doesn’t say anything about your eyes, make claims about the product, or offer a discount, and it doesn’t sign you up for anything. It also isn’t part of a mailing list, so there’s no series of follow-ups behind it. One order, one reminder, then nothing more about that order.`,
      },
      { h: 'Replying to the reminder' },
      {
        p: `The reply goes to a person. If you stopped because something didn’t feel right, that’s worth hearing. If your eyes are bothering you, though, a reply isn’t the place for medical advice; the label says: {stopUse} An eye doctor can find the cause and decide what to do. For order questions, you can also call {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'How long after ordering does the Quell reorder reminder come?',
        a: 'About 35 days per bottle on the order, counted from the order date. One bottle means about five weeks, two about ten, and three about fifteen.',
      },
      {
        q: 'Why didn’t I get a reorder reminder email?',
        a: 'Common reasons: you already reordered with the same email, it isn’t due yet, the order wasn’t paid, the reminder already went out once, or it landed in a spam folder.',
      },
      {
        q: 'Will Quell send me a reminder for every order?',
        a: 'Each paid order can get one reminder, but it’s skipped if you’ve already placed a newer order with the same email address. It’s never sent twice for the same order.',
      },
    ],
  },
  {
    slug: 'what-temperature-should-eye-drops-be-stored-at',
    title: 'What temperature should eye drops be stored at?',
    description:
      'Store eye drops at the temperature range printed on the label. What Quell’s storage line says, which spots at home run too hot or cold, and what to do.',
    category: 'label',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Store eye drops within the range printed on the label. Quell’s panel says: {storage}. In practice that’s ordinary room temperature: a drawer or cabinet in a lived-in room, away from heaters, sunny windowsills, a steamy shower and parked cars. Other eye drops can list a different range or extra instructions, so read the Other information section on each box.`,
      },
      { h: 'Where the storage line is on the label' },
      {
        p: `On a Drug Facts panel, storage instructions sit under the heading “Other information,” after the directions and before the list of inactive ingredients. Quell’s Other information section has two lines. One describes the liquid: {milky}. The other is the storage line quoted above. Our guide to the [Other information section](/guides/other-information-section-eye-drop-label) covers the whole section.`,
      },
      { h: 'How to read the two temperature scales' },
      {
        p: `The storage line gives the range twice: first in degrees Celsius, then in degrees Fahrenheit in parentheses. They describe the same range, so you can use whichever scale your thermometer shows. The bottle should stay at or above the lower number and at or below the upper one. There’s no separate “ideal” temperature inside the range; anywhere between the two ends is what the label asks for.`,
      },
      { h: 'Is room temperature inside the range?' },
      {
        p: `For most homes, yes. A thermostat set anywhere in the 60s or 70s Fahrenheit keeps the living areas comfortably inside it. The trouble spots are the places that don’t follow the thermostat: rooms you close off, surfaces that sit next to something hot, and anywhere outside the conditioned part of the house.`,
      },
      { h: 'Spots at home that run too hot or too cold' },
      {
        list: [
          `A windowsill in afternoon sun, which can get much warmer than the room.`,
          `The top of the refrigerator, where warm air from the appliance rises.`,
          `Next to a radiator, a floor register, a space heater or a stove.`,
          `A bathroom shelf right beside the shower, during long hot showers.`,
          `An unheated garage, porch or sunroom in winter.`,
          `A car’s glovebox or console, in any season.`,
          `A mailbox or doorstep where a package sits in summer sun.`,
        ],
      },
      {
        p: `A drawer in the bedroom or kitchen, a medicine cabinet away from the shower, or a purse that stays with you are all easy places to stay in range. [Is it bad to keep eye drops in the bathroom?](/guides/eye-drops-before-or-after-a-shower) touches on the shower question.`,
      },
      { h: 'Checking with a thermometer' },
      {
        p: `If you’re not sure about a spot, put an inexpensive indoor thermometer where you plan to keep the bottle and check it at different times of day, especially on the hottest afternoon and the coldest night of the season. A closet against an outside wall or a cabinet above the oven can surprise you.`,
      },
      { h: 'Should eye drops be refrigerated?' },
      {
        p: `Quell’s label doesn’t say to refrigerate it, and a refrigerator runs far colder than the bottom of the range on the storage line. Some other eye drops do ask for refrigeration, which is another reason to read each label rather than assuming. [Should eye drops be refrigerated?](/guides/should-eye-drops-be-refrigerated) goes into more detail.`,
      },
      { h: 'What if the bottle went outside the range?' },
      {
        p: `The label doesn’t list exceptions for a short trip outside the range. What it does give you is a check: {doNotUse}. The expected look is described by the panel and on our product page: {appearance} If the color has changed, don’t use it. If it looks normal but you’re unsure, ask a pharmacist, or call {company} at {phone}, {hours}. Guides on [hot cars](/guides/eye-drops-in-a-hot-car) and [freezing temperatures](/guides/can-eye-drops-freeze-in-a-cold-car) cover the two most common cases.`,
      },
      { h: 'Storage on the way to you' },
      {
        p: `Shipping is the one stretch you don’t control. Quell ships from Brentwood, Tennessee, and if a box will sit outside on a very hot or very cold day, have it sent somewhere a person can bring it inside, like a workplace. [Eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) explains what to look for when it arrives.`,
      },
      { h: 'At work, school and the gym' },
      {
        p: `A bottle you carry every day spends time in places with no thermostat you control. A desk drawer away from the window is usually fine. A locker beside a heater, a gym bag left in the car, or a backpack that sits on a sunny bus seat can all warm up more than you’d think. In winter, an outer coat pocket on a long walk can get cold. An inside pocket, close to your body, keeps it steadier. If you keep a second bottle at the office, check that spot with a thermometer once, on a hot afternoon and a cold morning.`,
      },
      { h: 'Traveling with eye drops' },
      {
        p: `In transit, the bottle should go where you go. A carry-on bag, a coat pocket or a purse keeps it close to the temperature you’re comfortable at. A checked suitcase, a car trunk or a cooler with ice packs touching the bottle can all push it out of range. The label also says: {tip}.`,
      },
    ],
    faq: [
      {
        q: 'What is room temperature for eye drops?',
        a: 'Quell’s label gives a range: {storage}. A home kept in the 60s or 70s Fahrenheit is inside it. Check each product’s own label, since ranges vary.',
      },
      {
        q: 'What does the temperature range on an eye drop box mean?',
        a: 'It’s the span the bottle should be kept within, given in Celsius and then Fahrenheit. Anywhere between the lower and upper numbers is what the label asks for.',
      },
      {
        q: 'Can I keep eye drops on top of the refrigerator?',
        a: 'It’s better not to. Warm air rises from the back of the appliance, so the top can run warmer than the room. A drawer or cabinet away from heat sources is a steadier spot.',
      },
    ],
  },
  /*
   * Sources read 2026-11-21 for who-to-call-with-questions-about-eye-drops:
   * - src/app/drug-facts/page.tsx ("Questions about this product?" note below the
   *   panel with COMPANY.phone and COMPANY.hours)
   * - src/lib/email.ts layout() footer ("Questions? Call {phone} ({hours})")
   * - src/app/terms/page.tsx section 1 (not medical advice; emergency care for
   *   sudden vision loss, eye pain or injury) and section 7 (call with order number
   *   for a refund or replacement)
   * - src/components/DrugFactsPanel.tsx (the transcribed panel ends with Inactive
   *   Ingredients; no Questions row is transcribed, so the guide doesn't claim one)
   */
  {
    slug: 'who-to-call-with-questions-about-eye-drops',
    title: 'Who to call with questions about eye drops',
    description:
      'Product questions go to the company on the box; medical questions go to a pharmacist or eye doctor. Who to call for what, and what to have ready.',
    category: 'label',
    addedOn: '2026-11-21',
    body: [
      {
        p: `For a question about a specific eye drop, call the company named on its box; many Drug Facts panels end with a “Questions?” line and a phone number. For Quell, that’s {company} at {phone}, {hours}. Questions about your own eyes belong with a pharmacist or eye doctor. If someone swallows eye drops, the label says to act at once: {swallowed}.`,
      },
      { h: 'Where the questions line sits on a label' },
      {
        p: `On many over-the-counter products, the last line of the Drug Facts panel is a short “Questions?” or “Questions or comments?” followed by a phone number, sometimes with hours or a website. It comes after the inactive ingredients. Not every label carries one, and some boxes put contact details elsewhere, near the “Distributed by” or “Manufactured by” line. [What does “distributed by” mean on a drug label?](/guides/what-does-distributed-by-mean-on-a-label) explains that line.`,
      },
      {
        p: `For Quell, our [Drug Facts page](/drug-facts) shows the full panel and, beneath it, a “Questions about this product?” note with the phone number and hours. Every order email we send ends with the same number in its footer.`,
      },
      { h: 'What the company can help with' },
      {
        list: [
          `What an ingredient on the panel is, or how a label line should be read.`,
          `Whether the bottle’s look matches what the label describes: {milky}.`,
          `Storage questions, including what to do if a bottle sat somewhere hot or cold.`,
          `A damaged, leaking or wrong product, or a broken seal.`,
          `Lot numbers and expiration dates printed on the bottle or box.`,
          `Orders, tracking and refunds on unopened bottles.`,
        ],
      },
      { h: 'What the company can’t do' },
      {
        p: `A phone line can’t examine your eyes. Our [terms](/terms) say plainly that nothing on this site is medical advice, and the same goes for a phone call. If you’re asking whether a symptom is serious, whether a drop suits your situation, or whether it’s okay with contact lenses, other drops or a child, the person to ask is a pharmacist or an eye doctor. Quell’s label doesn’t give directions for those situations. [Order questions vs. medical questions](/guides/order-questions-vs-medical-questions) sorts out which is which.`,
      },
      { h: 'Who to call instead' },
      {
        list: [
          `A pharmacist: questions about combining products, contact lenses, children, or which drop fits a need.`,
          `An eye doctor: symptoms that persist or worsen. The label’s rule is: {stopUse}`,
          `Poison Control: if a drop is swallowed. [What to do if someone swallows eye drops](/guides/what-to-do-if-someone-swallows-eye-drops) has the steps.`,
          `Emergency care: sudden vision loss, eye pain or an eye injury, as our terms also say.`,
        ],
      },
      { h: 'What to have ready when you call' },
      {
        p: `A call goes faster with the box in hand. Before you dial, find:`,
      },
      {
        list: [
          `The product name and size, which for Quell is {size}.`,
          `The lot number and expiration date. [What the lot number on eye drops means](/guides/what-the-lot-number-on-eye-drops-means) shows where to look.`,
          `Your order number, if you bought online. It starts with “Q-” on Quell orders.`,
          `When and where you bought it.`,
          `A short description of what you noticed, and when.`,
        ],
      },
      { h: 'Calling hours and time zones' },
      {
        p: `Quell’s line is open {hours}. That’s Central time, so in winter it works out to 10 a.m. to 6 p.m. Eastern, 8 a.m. to 4 p.m. Mountain, and 7 a.m. to 3 p.m. Pacific. If you’re calling from Alaska or Hawaii, the window is earlier still. Outside those hours, write down your question and the details above so you’re ready when the line opens.`,
      },
      { h: 'Questions about an order, not the product' },
      {
        p: `Order questions use the same number. Whether it’s a package that hasn’t arrived, a refund on an unopened bottle within {returnDays} days of delivery, or an address that looks wrong, the order number is the first thing you’ll be asked for. You can check status yourself first on our [order page](/orders) with the order number and the email you used at checkout. Our cart and reorder emails also invite you to reply, and a person reads those replies, so answering one of them works for order questions too.`,
      },
      { h: 'Questions before you buy' },
      {
        p: `If you haven’t bought anything yet and just want to know what’s in the bottle, the answer is already printed. The Drug Facts page lists the active ingredients, {actives}, and the inactive ones too. Our [guides](/guides) cover each label section in plain language. A call is still welcome if something on the panel is unclear, but reading it first makes the conversation shorter and lets you ask a sharper question.`,
      },
      { h: 'Reporting a problem with a product' },
      {
        p: `If a product seemed wrong, made your eyes worse, or arrived damaged, tell the company, and keep the bottle and box. That record helps. [How to report a problem with eye drops](/guides/how-to-report-a-problem-with-eye-drops) covers the steps, and for Quell orders, damaged, incorrect or broken-seal shipments are replaced within {returnDays} days when you call with your order number.`,
      },
    ],
    faq: [
      {
        q: 'Is there a phone number on eye drop boxes?',
        a: 'Many Drug Facts panels end with a “Questions?” line and a phone number. If yours doesn’t, look near the “Distributed by” line. For Quell, call {phone}.',
      },
      {
        q: 'What time can I call about Quell eye drops?',
        a: 'The line is open {hours}. That’s Central time, which in winter is 10 a.m. to 6 p.m. Eastern and 7 a.m. to 3 p.m. Pacific.',
      },
      {
        q: 'Can an eye drop company give medical advice?',
        a: 'Not about your eyes. A company can explain its label and product, but symptoms and fit questions belong with a pharmacist or eye doctor.',
      },
    ],
  },
  /*
   * Sources read 2026-11-21 for eye-drop-package-stolen:
   * - src/app/terms/page.tsx section 6 ("Risk of loss passes on delivery to the
   *   address you provide"; not responsible for delays caused by the carrier or an
   *   incorrect address) and section 7 (damaged, incorrect or broken-seal orders
   *   replaced within 30 days; call with order number)
   * - src/lib/email.ts (confirmation and shipping emails show "Shipping to"; tracking
   *   number and link are optional on the shipping email)
   * - src/components/OrderLookup.tsx (order page shows the shipping address)
   */
  {
    slug: 'eye-drop-package-stolen',
    title: 'Eye drop package stolen? What to do next',
    description:
      'If your eye drops were taken from the porch, rule out a misdelivery, contact the carrier, then call us. What the terms say, and how to protect the next box.',
    category: 'shipping',
    addedOn: '2026-11-21',
    body: [
      {
        p: `If your eye drop package seems to have been stolen, first rule out a misdelivery: check the tracking details, the address on your confirmation email, your neighbors and any mailroom. Then contact the carrier through the tracking link in your shipping email and call us at {phone}, {hours}, with your order number. Our terms say risk of loss passes on delivery, so the carrier’s records matter.`,
      },
      { h: 'Stolen, misdelivered, or not there yet?' },
      {
        p: `A missing box isn’t always a stolen one. Before deciding, work through the likelier explanations:`,
      },
      {
        list: [
          `Tracking may show “delivered” a little before the package actually arrives. Give it until the end of the day.`,
          `It may be at a side door, behind a planter, in a package locker or with a building manager.`,
          `A neighbor may have taken it in, or it may have gone to a similar address on your street.`,
          `The carrier’s page sometimes shows a delivery photo or a location note.`,
          `In an apartment building, the front office or mailroom may be holding it. See [getting eye drops delivered to an apartment](/guides/eye-drops-delivered-to-an-apartment).`,
        ],
      },
      { h: 'Check the address on the order' },
      {
        p: `Your confirmation email has a “Shipping to” block showing the exact address the order was sent to. You can also see it by looking up the order on our [order page](/orders) with your order number and checkout email. A missing apartment number or a wrong digit is far more common than theft, and it changes who you need to talk to.`,
      },
      {
        p: `If the address is wrong, [what if I entered the wrong shipping address?](/guides/wrong-shipping-address) explains what can still be done.`,
      },
      { h: 'Contact the carrier first' },
      {
        p: `When your shipping email includes a tracking number, it links to the carrier’s own tracking page. That page usually has the delivery scan, sometimes a photo, and a way to open a claim or report a missing package. The carrier is the one with the driver’s records and GPS scan, so start there. Write down any claim or reference number they give you.`,
      },
      { h: 'Then call us' },
      {
        p: `Call {phone}, {hours}. Have your order number, the tracking status, and what the carrier told you. We can confirm what was shipped, to which address, and when. That information is also useful if you file a report with the carrier or the police.`,
      },
      { h: 'What the terms say' },
      {
        p: `Section 6 of our [terms](/terms) says that risk of loss passes on delivery to the address you provide, and that the shop isn’t responsible for delays caused by the carrier or by an incorrect address. Section 7 lists what is replaced: orders that arrive damaged, incorrect or with a broken tamper seal, within {returnDays} days. A package taken after it was delivered isn’t on that list, so we can’t promise a replacement for it. Call anyway, so we know what happened and can help you with the details.`,
      },
      { h: 'Reporting a stolen package' },
      {
        list: [
          `File a missing-package report or claim with the carrier.`,
          `Report the theft to your local police non-emergency line if your area takes reports, especially if a doorbell camera caught it.`,
          `Check with neighbors who have cameras.`,
          `Ask your building manager or HOA whether other packages have gone missing.`,
        ],
      },
      { h: 'If the box turns up later, opened' },
      {
        p: `Sometimes a “stolen” package reappears, tossed back on the porch or left with a neighbor, and it may have been opened. Look at the bottle before you use it. If the tamper seal is broken or the bottle is damaged, don’t use it; call {phone} within {returnDays} days, since damaged and broken-seal orders are replaced. [What if the tamper seal is broken?](/guides/broken-tamper-seal) explains what to look for.`,
      },
      { h: 'A gift that never reached the recipient' },
      {
        p: `If you sent Quell to someone else and it went missing from their door, you’re the one with the order number and the emails, so you’ll need to make the calls. Ask the recipient to look around and check with their neighbors first, then follow the same steps: the carrier, then us. Next time, ask them for an address where a package won’t sit outside.`,
      },
      { h: 'Don’t go without your drops' },
      {
        p: `If you’re running low, don’t wait on a claim to restock. A pharmacy can tide you over, or you can place a new order from the [home page](/#buy) with guest checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order with some buffer.`,
      },
      { h: 'Protecting the next delivery' },
      {
        p: `December is a busy month for packages, and a box on the porch is easy to see from the street. A few options make the next one safer:`,
      },
      {
        list: [
          `Ship to your workplace, where someone can sign or bring it inside. [Can I ship eye drops to my work address?](/guides/shipping-eye-drops-to-your-work-address) covers it.`,
          `Use your apartment’s front office or package room.`,
          `Ship to a relative or neighbor who’s home during the day.`,
          `Use the carrier’s delivery options from the tracking page, if they offer them, to hold a package or leave instructions.`,
          `Watch your shipping email so you know when to look for the box. [What if no one is home when eye drops arrive?](/guides/what-if-no-one-is-home-when-eye-drops-arrive) has more ideas.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What should I do if my eye drops were stolen from my porch?',
        a: 'Check the tracking details and the address on your confirmation email, look around and ask neighbors, then contact the carrier and call {phone} with your order number.',
      },
      {
        q: 'Will Quell replace a stolen package?',
        a: 'The terms say risk of loss passes on delivery, and replacements cover damaged, incorrect or broken-seal orders. A package taken after delivery isn’t on that list, but call us so we can help with the details.',
      },
      {
        q: 'Where can I ship eye drops so they aren’t left on the porch?',
        a: 'A workplace, an apartment front office, or a relative who’s home during the day are all options. Quell ships to any US address you enter at checkout.',
      },
    ],
  },
]
