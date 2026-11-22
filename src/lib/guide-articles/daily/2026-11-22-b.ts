import type { Guide } from '@/lib/guide-types'
export const DAILY_20261122_B: Guide[] = [
  /*
   * Sources checked 2026-11-22 for dry-eye-relief-kent-wa:
   * - NOAA RCC ACIS StnData, SID RNT (RENTON MUNICIPAL AP, WA, elev 18 ft),
   *   1991-2020 monthly normals, raw JSON in .daily-job/acis1122/RNT.json and
   *   .daily-job/b/RNT-extra.json (normal lows).
   *   Precip: Jan 4.93, Feb 3.21, Mar 3.74, Apr 2.83, May 1.86, Jun 1.47,
   *   Jul 0.60, Aug 0.89, Sep 1.53, Oct 3.49, Nov 5.61, Dec 4.53 (annual 34.69).
   *   Max: Jan 48.0, Jul 77.2, Aug 77.6, Dec 47.0. Min: Jan 37.1, Jul 57.5,
   *   Aug 57.4, Dec 36.6. Snowfall missing (left out).
   * - https://www.rentonwa.gov/airport (City of Renton: the airport is on the
   *   south shore of Lake Washington).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   */
  {
    slug: 'dry-eye-relief-kent-wa',
    title: 'Dry eye relief in Kent, Washington',
    description:
      'Kent’s nearest NOAA station logs about 34.7 inches of rain a year, yet July averages just 0.60 inch. The numbers, and what helps dry eyes in each season.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Kent comes down to two seasons. NOAA’s normals for nearby Renton Municipal Airport show a soaking November of 5.61 inches and a July of just 0.60, so your eyes spend half the year in heated indoor air and the other half in dry, bright afternoons. Keep vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor if dryness lingers.`,
      },
      { h: 'Where Kent’s numbers come from' },
      {
        p: `This guide draws on NOAA’s 1991–2020 climate normals for Renton Municipal Airport, as published through the National Weather Service’s NOWData. The City of Renton describes the airport as sitting on the south shore of Lake Washington, a short drive north of Kent, and the station stands about 18 feet above sea level. Read the figures as a close neighbor’s record rather than a reading from your own street:`,
      },
      {
        list: [
          `About 34.7 inches of precipitation in a normal year.`,
          `November is the wettest month at 5.61 inches, followed by January at 4.93 and December at 4.53.`,
          `July is the driest month at 0.60 inch, with August close behind at 0.89.`,
          `Normal highs range from 47.0°F in December to 77.6°F in August.`,
          `Normal lows bottom out at 36.6°F in December and peak near 57.5°F in July.`,
        ],
      },
      { h: 'November through January: the heater does the drying' },
      {
        p: `Those three wet months bring roughly 15 inches between them, and the days barely warm up. In January the normal high of 48.0°F sits only about 11 degrees above the normal low of 37.1°F, so the furnace or heat pump runs at breakfast, through the afternoon and again at night. Heating cool, damp air without adding water lowers its relative humidity, which is how a Kent living room can feel parched while rain streaks the windows. The water layer of the tear film evaporates faster in that air, and you notice it most after hours in one room.`,
      },
      {
        list: [
          `Turn floor registers and space heaters so they blow along the wall, not toward the couch or the bed.`,
          `Set the thermostat a little lower at night; air that’s heated less doesn’t lose as much relative humidity.`,
          `Run a clean room humidifier in the bedroom or home office, and follow its manual for cleaning.`,
          `Get up and look out a window now and then. Focusing on something far off breaks a long, unblinking stare.`,
        ],
      },
      {
        p: `For Kent houses that run the heat from October into spring, [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers each room, from the bedroom to the home office.`,
      },
      { h: 'July and August: the short, dry summer' },
      {
        p: `Summer turns the pattern around. June brings 1.47 inches, July 0.60 and August 0.89, so just under three inches fall across those three months combined. Highs in the upper 70s and lows in the upper 50s make for pleasant days, which is exactly why people spend them outside: mowing, coaching weekend games, riding a valley trail, washing the car. Hours in sun and moving air dry the eye’s surface, and glare makes you squint, which shortens each blink.`,
      },
      {
        list: [
          `Wraparound sunglasses block both breeze and glare at a ballfield or on a bike.`,
          `Mowing and leaf blowing throw up dust and bits of grass, so wear glasses and keep your face out of the discharge.`,
          `In the car, aim the air conditioning at your chest rather than your eyes.`,
          `Keep your eye drops in a bag that comes inside with you, not in a glove box parked in the sun.`,
        ],
      },
      { h: 'Long shifts under big ceilings' },
      {
        p: `If your job is on a warehouse, plant or distribution floor, the air is usually heated or cooled for the whole building and pushed around by large fans, and dock doors open to the weather in every season. Scanners and pick screens pull your eyes down and in, and people blink less while they concentrate. Stand so a fan blows across your back, not your face, and take a few slow, complete blinks whenever a task changes. Our guide to [dry eyes for warehouse workers](/guides/dry-eyes-for-warehouse-workers) covers dust, forklifts and freezer rooms in more detail.`,
      },
      {
        p: `Office and remote work raise the same issue in a quieter way. A monitor set slightly below eye level lets your lids cover more of the eye, and a reminder to look away every so often costs nothing.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. One line covers handling: {tip}.`,
      },
      {
        p: `The panel also carries this caution: {warnings}. For storage it says: {storage}. A car parked outside on a December night sits well below the bottom of that range, and a dashboard on a sunny August afternoon can climb past the top of it, so keep the bottle indoors or in a pocket. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Kent' },
      {
        p: `We ship from Brentwood, Tennessee, to Kent and every other US address. You can check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised, so order before your current bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to send them back. See the [Kent page](/eye-drops/kent-wa) and the [Washington page](/eye-drops/state/washington) for local details, or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop can ease dryness, but it can’t tell you why your eyes feel the way they do. Quell’s label is direct about when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Kent, Washington get?',
        a: 'NOAA’s 1991–2020 normals for Renton Municipal Airport, a few miles north of Kent, show about 34.7 inches a year. November is the wettest month at 5.61 inches and July the driest at 0.60 inch.',
      },
      {
        q: 'Why do my eyes feel dry in Kent when it rains so often?',
        a: 'The rain stays outdoors. Indoors, heating cool, damp air lowers its relative humidity, so tears evaporate faster during the months when the furnace runs most.',
      },
      {
        q: 'What is the driest month in Kent, Washington?',
        a: 'July, at 0.60 inch in NOAA’s 1991–2020 normals for Renton Municipal Airport. August follows at 0.89 inch, and June brings 1.47 inches.',
      },
      {
        q: 'Does Quell ship to Kent, Washington?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Kent. Shipping is {shipping}, or free on {freeBottles} or more bottles, and tracking arrives by email.',
      },
    ],
  },

  /*
   * Sources checked 2026-11-22 for dry-eye-relief-gresham-or:
   * - NOAA RCC ACIS StnData, SID TTD (PORTLAND TROUTDALE AP, OR, elev 25 ft),
   *   1991-2020 monthly normals, raw JSON in .daily-job/acis1122/TTD.json and
   *   .daily-job/b/TTD-extra.json (normal lows).
   *   Precip: Jan 5.01, Feb 3.71, Mar 4.41, Apr 3.58, May 2.91, Jun 2.11,
   *   Jul 0.55, Aug 0.63, Sep 1.75, Oct 4.02, Nov 5.83, Dec 6.15 (annual 40.66).
   *   Max: Jan 46.7, Jul 81.6, Aug 82.3, Dec 46.0. Min: Jan 37.3, Feb 37.7,
   *   Jul 56.8, Aug 56.9, Dec 37.2. Snowfall missing (left out).
   * - https://portofportland.com/TTD (Port of Portland owns the airport;
   *   "gateway to the Columbia River Gorge").
   * - Oregon Aviation Plan 2023, Portland-Troutdale Airport (about a mile north
   *   of Troutdale).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   */
  {
    slug: 'dry-eye-relief-gresham-or',
    title: 'Dry eye relief in Gresham, Oregon',
    description:
      'Gresham’s nearest NOAA station logs 6.15 inches of rain in December and 0.55 in July. What each season does to dry eyes, and what helps all year.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `In Gresham, dry eyes tend to follow the furnace in winter and the sun in summer. NOAA’s normals for Portland-Troutdale Airport, just north of Troutdale, put December’s rain at 6.15 inches and July’s at 0.55. Keep heater vents and car fans off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor if the dryness doesn’t settle.`,
      },
      { h: 'The station at the mouth of the Gorge' },
      {
        p: `The numbers here are NOAA’s 1991–2020 climate normals for Portland-Troutdale Airport, as published through the National Weather Service’s NOWData. The Port of Portland, which owns the field, calls it the gateway to the Columbia River Gorge, and Oregon’s aviation plan places it about a mile north of Troutdale. The station sits about 25 feet above sea level on low ground near the Columbia, with Gresham spreading out to the southwest, so these are a near neighbor’s figures, not your backyard’s:`,
      },
      {
        list: [
          `About 40.7 inches of precipitation in a normal year.`,
          `December is the wettest month at 6.15 inches; November brings 5.83 and January 5.01.`,
          `July is the driest month at 0.55 inch, and August adds only 0.63.`,
          `August has the warmest normal high, 82.3°F, just ahead of July’s 81.6°F.`,
          `Normal lows hover near 37°F from December through February.`,
        ],
      },
      { h: 'December, the wettest and grayest month' },
      {
        p: `Rain builds from 4.02 inches in October to 5.83 in November, then peaks at 6.15 in December. With normal highs of 46.0°F and lows of 37.2°F, December is a raw month spent mostly indoors, and it lands right on top of the holidays. Windows stay shut, the heat runs, the oven goes for hours, and families gather around a fireplace or wood stove. Warming cold, wet air without adding water drops its relative humidity, and sitting near a heat source puts that warm, dry air right across your face.`,
      },
      {
        list: [
          `Pick a chair a few feet back from the fireplace or stove, and turn it so the heat reaches your side rather than your eyes.`,
          `If you’re hosting, crack a kitchen window while the oven runs; it clears heat and cooking haze.`,
          `A clean humidifier in the room where you sleep helps more than one in a hallway.`,
          `Wrapping gifts, writing cards and reading recipes are all close-up tasks, so pause now and then to blink and look across the room.`,
        ],
      },
      { h: 'Hoods up outside, defroster on inside' },
      {
        p: `Gresham’s wet months set up a daily back-and-forth. Walking to the car or a bus stop, your eyes meet cold, damp wind. Then the defroster comes on, blowing warm, dry air at the windshield, and the side vents often catch your face too. Set the defroster to the glass only, angle the dash vents down, and let the cabin warm a few minutes before you crank the fan. A brimmed hat under a rain hood keeps drizzle and wind off your eyes better than a hood alone. Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more for the commute.`,
      },
      { h: 'July and August: warm and nearly rainless' },
      {
        p: `The summer turn is sharp. July and August together bring only about 1.2 inches of rain, against more than 17 inches in the three wettest months. Normal highs reach the low 80s, while lows settle in the mid 50s, so a summer day swings about 25 degrees. Gardens, yard projects, hikes and evenings on the patio fill those weeks, and the afternoons are when your eyes feel the sun, glare and moving air most.`,
      },
      {
        list: [
          `Schedule the heavy weeding or the long hike for the morning, while it’s cooler.`,
          `Wear sunglasses that wrap around the sides when you’re out in the open.`,
          `Point a box fan or the air conditioner across the room, not at the couch or pillow.`,
          `Bring the bottle inside after a car trip; a parked car on an August afternoon gets far warmer than the label allows.`,
        ],
      },
      { h: 'Short days and long screen time' },
      {
        p: `From November through January, daylight is short and many evenings move indoors to a laptop, a phone or the TV. People blink less while they focus on a screen, and partial blinks leave part of the eye uncovered. Lower your monitor so you look slightly down, finish each blink, and look away now and then. If you work from home in a heated spare room, that room deserves the humidifier. Read [how blinking spreads tears](/guides/how-blinking-spreads-tears) for why full blinks matter.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. For directions, the panel says: {directions}. It also says: {tip}.`,
      },
      {
        p: `Before you buy, read this caution from the panel: {warnings}. The storage line reads: {storage}. Gresham’s December nights fall below the bottom of that range, and a car in August sun climbs above the top, so the house is the right place for the bottle. Everything printed on the carton is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Gresham' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Gresham and anywhere else in the United States. Guest checkout works, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but we don’t promise a delivery date, so reorder with a few doses left. Unopened bottles are refundable within {returnDays} days of delivery, with nothing to mail back. The [Gresham page](/eye-drops/gresham-or) and the [Oregon page](/eye-drops/state/oregon) have local details, or you can [buy Quell here](/#buy).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Dryness that comes and goes with the heater is common. Pain, changes in vision, or dryness that keeps coming back is a different matter. The label says: {stopUse} An eye doctor can find the cause and decide what to do; see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What is the wettest month in Gresham, Oregon?',
        a: 'December. NOAA’s 1991–2020 normals for Portland-Troutdale Airport, just north of Troutdale, list 6.15 inches for December, ahead of November at 5.83 and January at 5.01.',
      },
      {
        q: 'How much rain does Gresham, Oregon get?',
        a: 'About 40.7 inches in a normal year at Portland-Troutdale Airport, the NOAA station nearest Gresham used here. July is the driest month at 0.55 inch.',
      },
      {
        q: 'Why do my eyes feel dry in Gresham in winter?',
        a: 'Most of the winter is spent in heated rooms and cars. Warming cold, wet air lowers its relative humidity, and a defroster or heater vent aimed at your face dries the tear film faster.',
      },
      {
        q: 'Does Quell ship to Gresham, Oregon?',
        a: 'Yes. Orders ship from Brentwood, Tennessee, to any US address, Gresham included, with tracking by email. Shipping is {shipping}, and {freeBottles} or more bottles ship free.',
      },
    ],
  },

  /*
   * Sources checked 2026-11-22 for dry-eye-relief-spokane-valley-wa:
   * - NOAA RCC ACIS StnData, SID SFF (SPOKANE FELTS FIELD, WA, elev 1951 ft),
   *   1991-2020 monthly normals, raw JSON in .daily-job/acis1122/SFF.json and
   *   .daily-job/b/SFF-extra.json (normal lows).
   *   Precip: Jan 2.00, Feb 1.32, Mar 1.82, Apr 1.50, May 1.70, Jun 1.48,
   *   Jul 0.67, Aug 0.54, Sep 0.68, Oct 1.46, Nov 2.01, Dec 2.18 (annual 17.36).
   *   Max: Jan 37.8, Jul 87.1, Aug 86.2, Dec 36.9. Min: Jan 25.8, Feb 26.7,
   *   Mar 31.7, Jul 56.0, Aug 54.5, Nov 30.7, Dec 25.7. Snowfall missing.
   * - Felts Field on the south bank of the Spokane River, east side of Spokane:
   *   National Park Service, Felts Field Historic District article.
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   */
  {
    slug: 'dry-eye-relief-spokane-valley-wa',
    title: 'Dry eye relief in Spokane Valley, Washington',
    description:
      'Spokane Valley summers swing about 31 degrees from dawn to afternoon, and winter nights stay below freezing. Felts Field’s NOAA normals and dry eye tips.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Spokane Valley’s air dries eyes in two ways: hot, nearly rainless afternoons from July through September, and months of furnace heat while normal lows sit below freezing. NOAA’s normals for nearby Felts Field show both. Wear wraparound sunglasses outdoors, keep heat vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for dryness that persists.`,
      },
      { h: 'What Felts Field records' },
      {
        p: `The figures below are NOAA’s 1991–2020 climate normals for Spokane Felts Field, as published through the National Weather Service’s NOWData. The National Park Service places the field on the south bank of the Spokane River on Spokane’s east side, a short drive from Spokane Valley, and the station sits at about 1,950 feet. Our Spokane guide uses the international airport west of the city; Felts Field is the closer station for the Valley:`,
      },
      {
        list: [
          `About 17.4 inches of precipitation in a normal year.`,
          `December is the wettest month at 2.18 inches, with November at 2.01 and January at 2.00.`,
          `July (0.67 inch), August (0.54) and September (0.68) are the three driest months in a row.`,
          `The normal July high is 87.1°F; the normal July low is 56.0°F.`,
          `Normal lows stay below freezing from November (30.7°F) through March (31.7°F).`,
        ],
      },
      { h: 'Summer: get the outdoor work done early' },
      {
        p: `A July day at Felts Field runs from a normal low of 56.0°F to a high of 87.1°F, a climb of about 31 degrees, and August’s spread is a little wider. That shape rewards an early start. Mornings are cool and comfortable, but by mid-afternoon the sun is high, the air is hot, and the ground has had weeks with little rain. Three straight months under seven-tenths of an inch means dry lawns, dusty gravel driveways and loose soil on every construction site, and any breeze carries some of it.`,
      },
      {
        list: [
          `Mow, trim and haul yard waste before lunch, and wear glasses while you do it.`,
          `On a bike or a long walk by the river, wraparound sunglasses keep wind and grit off your eyes.`,
          `Inside, aim the air conditioner or fan across the room instead of at your chair.`,
          `On a hazy or smoky day, plan more of your time indoors and keep the car on recirculate.`,
        ],
      },
      { h: 'Five months of freezing nights' },
      {
        p: `From November through March, normal lows at Felts Field sit below 32°F, bottoming out at 25.7°F in December. December’s normal high is only 36.9°F and January’s 37.8°F, so the furnace runs around the clock for weeks at a time. Cold outdoor air holds very little water, and once it’s pulled indoors and heated, its relative humidity drops sharply. That’s why lips crack, static snaps off doorknobs and eyes feel scratchy by evening in a Valley house in January.`,
      },
      {
        list: [
          `Keep forced-air registers from blowing straight at the bed, the couch or your desk chair.`,
          `Run a humidifier in the bedroom and clean it on the schedule its manual sets.`,
          `A slightly cooler house at night keeps indoor air from drying out as much.`,
          `Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers placement and cleaning.`,
        ],
      },
      { h: 'Scraping windshields and the cold-to-hot car' },
      {
        p: `A winter morning in Spokane Valley often starts with a few minutes of scraping in the driveway, face into the cold, then a car heater that roars on as soon as the engine warms. Going straight from freezing wind to hot, dry cabin air is hard on the tear film. Wear sunglasses or clear glasses while you scrape, start the defroster on the windshield setting, and keep the dash vents pointed at your hands. On a bright morning after snow, sunglasses also cut the glare that makes you squint behind the wheel.`,
      },
      { h: 'Screens through the long evenings' },
      {
        p: `December evenings get dark early, and much of the day moves to laptops, phones and TVs. People blink less while they read or game, and a half blink leaves the lower part of the eye uncovered. Set the screen a little below eye level, take a short look out the window every so often, and close your eyes fully for a few seconds when they start to sting. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has a fuller desk routine.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions are: {directions}. The panel adds: {tip}.`,
      },
      {
        p: `Read this caution before you order: {warnings}. The storage line says: {storage}. Spokane Valley pushes past both ends of that range, below it on any winter night in a parked car and above it in a summer one, so the bottle belongs in your coat pocket or the house. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Spokane Valley' },
      {
        p: `We ship from Brentwood, Tennessee, to Spokane Valley, Liberty Lake, Millwood and every other US address. Check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised, so order ahead of the holidays and the first hard freeze. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Spokane Valley page](/eye-drops/spokane-valley-wa) and the [Washington page](/eye-drops/state/washington) have local details, or [order Quell now](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Seasonal dryness that eases with a humidifier and better habits is one thing. Pain, blurred or changed vision, or dryness that won’t quit is another, and Quell’s label is plain about it: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes further.`,
      },
    ],
    faq: [
      {
        q: 'How dry is Spokane Valley, Washington?',
        a: 'NOAA’s 1991–2020 normals for Felts Field, the station nearest Spokane Valley, show about 17.4 inches of precipitation a year. July, August and September each bring less than seven-tenths of an inch.',
      },
      {
        q: 'How hot does Spokane Valley get in summer?',
        a: 'At Felts Field the normal July high is 87.1°F and the normal August high is 86.2°F. Normal summer lows fall to the mid 50s, so afternoons run about 31 degrees warmer than dawn.',
      },
      {
        q: 'Why do my eyes feel dry in winter in Spokane Valley?',
        a: 'Normal lows stay below freezing from November through March, so the furnace runs for months. Heating cold outdoor air lowers its relative humidity, and tears evaporate faster in it.',
      },
      {
        q: 'Does Quell ship to Spokane Valley, Washington?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Spokane Valley and the rest of the US, with tracking by email. Shipping is {shipping}, or free on {freeBottles} or more bottles.',
      },
    ],
  },

  /*
   * Sources checked 2026-11-22 for dry-eye-relief-livermore-ca:
   * - NOAA RCC ACIS StnData, SID LVK (LIVERMORE MUNICIPAL AP, CA, elev 393 ft),
   *   1991-2020 monthly normals, raw JSON in .daily-job/acis1122/LVK.json and
   *   .daily-job/b/LVK-extra.json (normal lows).
   *   Precip: Jan 2.83, Feb 2.92, Mar 2.25, Apr 1.08, May 0.56, Jun 0.14,
   *   Jul 0.00, Aug 0.09, Sep 0.08, Oct 0.75, Nov 1.68, Dec 2.80 (annual 15.18).
   *   Max: Jan 57.4, Jun 82.6, Jul 87.7, Aug 87.5, Sep 85.4, Oct 77.9.
   *   Min: Jan 37.8, Jul 56.6, Aug 56.7. Snowfall missing (left out).
   * - https://www.faa.gov/lvk (three miles northwest of downtown Livermore,
   *   about two miles east of Pleasanton); https://livermoreca.gov airport
   *   page (serves the Tri-Valley).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   */
  {
    slug: 'dry-eye-relief-livermore-ca',
    title: 'Dry eye relief in Livermore, California',
    description:
      'Livermore’s July rain normal is 0.00 inches, and September still averages 85°F. NOAA’s airport normals and how to ease dry eyes through the year.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Livermore’s dry season is long and almost rainless: NOAA’s normals for Livermore Municipal Airport list July precipitation as 0.00 inches and only 0.31 inch from June through September. Add months of air conditioning and heat on cool winter mornings, and eyes dry out. Shade them outdoors, aim vents away, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor if dryness lasts.`,
      },
      { h: 'The airport behind the numbers' },
      {
        p: `These figures are NOAA’s 1991–2020 climate normals for Livermore Municipal Airport, as published through the National Weather Service’s NOWData. The FAA describes the field as three miles northwest of downtown Livermore and about two miles east of Pleasanton, and the city calls it the airport for the Tri-Valley. The station sits at about 390 feet:`,
      },
      {
        list: [
          `About 15.2 inches of precipitation in a normal year.`,
          `February is the wettest month at 2.92 inches, followed by January at 2.83 and December at 2.80.`,
          `July’s normal is 0.00 inch, and June (0.14), August (0.09) and September (0.08) add very little.`,
          `The normal July high is 87.7°F, and September still reaches 85.4°F.`,
          `January’s normal low of 37.8°F is the coldest of the year.`,
        ],
      },
      { h: 'A summer that runs into October' },
      {
        p: `Normal highs pass 82°F in June and stay there through September, and October still averages 77.9°F with only 0.75 inch of rain. That means close to five months of warm, dry afternoons, with air conditioning running in homes, offices and cars for most of it. Cooled air is drier air: an air conditioner pulls water out as it chills, and a vent blowing across your face speeds evaporation from the eye’s surface on top of that.`,
      },
      {
        list: [
          `Angle wall and ceiling vents so the stream misses your desk chair and the couch.`,
          `In the car, close the center vents nearest your face and open the ones by your knees.`,
          `If your office runs cold and dry, a small desk humidifier, kept clean, adds a little moisture where you sit.`,
          `Start a long drive with the bottle in your bag, not on the dash.`,
        ],
      },
      { h: 'Cool nights, open windows and fans' },
      {
        p: `July and August nights cool to a normal low near 56.6°F, about 31 degrees below the afternoon high. Plenty of Livermore households take advantage of it: windows open after dark, a box fan or whole-house fan pulling in cool air, and everything shut up again by mid-morning. It’s a smart way to cool a house, but a steady breeze across your pillow can leave your eyes dry and gritty when you wake. Turn the fan so it moves air along the wall or toward your feet. Our guide to [dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) has more.`,
      },
      { h: 'Yard work, trails and dust on dry ground' },
      {
        p: `After four months with almost no rain, the ground is bare and loose by late summer. Mowing dry grass, sweeping a patio, riding a dusty trail or working on a construction site sends fine grit into the air, and the afternoon breeze delivers it. Wraparound sunglasses or safety glasses keep most of it out of your eyes. If something does get in, blink and let your tears wash it toward the corner, and don’t rub. Rinse with clean water if it stays, and see a doctor if it still hurts or your vision changes.`,
      },
      { h: 'Winter: frosty mornings, mild afternoons' },
      {
        p: `Livermore’s rain comes mostly in winter. December, January and February bring about 8.5 inches together, more than half the normal year’s total. In January, the normal high of 57.4°F sits nearly 20 degrees above the 37.8°F low, so the heat comes on at breakfast, shuts off by early afternoon and starts again after sunset. Each round of heating dries the indoor air, and that’s when people notice scratchy eyes in the evening, even with rain outside.`,
      },
      {
        p: `Keep the thermostat moderate, steer floor and wall registers away from where you sit, and read [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) for a room-by-room plan.`,
      },
      { h: 'What the label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. The directions say: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `There’s a caution to read first: {warnings}. The storage line reads: {storage}. A car parked in a July lot in Livermore gets far hotter than 86°F, so carry the bottle with you instead of leaving it in the cup holder. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Livermore' },
      {
        p: `Orders go out from Brentwood, Tennessee, to Livermore and every other US address. You can check out without an account; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so reorder while you still have some left. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them rather than mailing them back. See the [Livermore page](/eye-drops/livermore-ca) and the [California page](/eye-drops/state/california), or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If eyes stay dry after the season changes, or you feel pain or see differently, stop guessing. The label says: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth a call.`,
      },
    ],
    faq: [
      {
        q: 'Does it rain in Livermore in the summer?',
        a: 'Hardly at all. NOAA’s 1991–2020 normals for Livermore Municipal Airport list July at 0.00 inch and only 0.31 inch for June through September combined.',
      },
      {
        q: 'What is the wettest month in Livermore, California?',
        a: 'February, at 2.92 inches in NOAA’s normals for Livermore Municipal Airport. January brings 2.83 inches and December 2.80, so those three months hold more than half the year’s rain.',
      },
      {
        q: 'Why do my eyes feel dry in Livermore?',
        a: 'Livermore has close to five months of warm, nearly rainless weather, with air conditioning running for much of it, and heated rooms on cool winter mornings. Both conditions speed evaporation from the tear film.',
      },
      {
        q: 'Does Quell ship to Livermore, California?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Livermore and the rest of the United States, with tracking by email. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.',
      },
    ],
  },

  {
    slug: 'order-eye-drops-for-someone-in-another-state',
    title: 'Can I order eye drops for someone in another state?',
    description:
      'Yes. Quell ships to any US address, so you can pay with your own card and send bottles to family in another state. How checkout handles it, step by step.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Yes. Quell ships anywhere in the United States, so you can pay with your own card and send bottles to a parent, friend or grown child in another state. Type their name, street address, two-letter state code, ZIP and a phone number under “Ship to,” then enter your own billing address on the secure payment page. The shipping charge is the same whichever state it goes to.`,
      },
      { h: 'Step by step: sending eye drops across state lines' },
      {
        list: [
          `Add the bottles to your cart. One order holds up to 10 bottles.`,
          `If you’re checking out as a guest, enter your own email. The receipt and tracking go there.`,
          `Under “Ship to,” enter the recipient’s first and last name, street address, apartment or suite if there is one, and city.`,
          `Type the state as its two-letter code (OR, AZ, FL) and the ZIP as five digits or ZIP+4.`,
          `Add a phone number. The form explains that the carrier asks for one for delivery updates.`,
          `Press “Continue to payment.” On the payment provider’s secure page, enter your card, its security code and your billing address.`,
          `Pay, then watch your inbox for the receipt.`,
        ],
      },
      {
        p: `Nothing on the form asks you to explain why the address differs from the card’s. The shipping address belongs to the order, and the billing address belongs to the card. Our guide on [shipping to a different address than billing](/guides/can-i-ship-to-a-different-address-than-billing) covers how the two stay separate.`,
      },
      { h: 'Does shipping cost more to a different state?' },
      {
        p: `No. Shipping is figured from the order total, not the destination. It’s {shipping} below {freeThreshold}, and free at or above it; in practice, {freeBottles} or more bottles ship free. A bottle going to Maine costs the same to send as one going to the next town over. Every order ships from Brentwood, Tennessee, and the site doesn’t promise a delivery date to any state, so if the bottles are meant for a birthday or a visit, order with time to spare.`,
      },
      { h: 'State codes and ZIPs that trip people up' },
      {
        p: `Checkout wants the two-letter postal code, and several states share a first letter. These are the mix-ups worth a second look before you press continue:`,
      },
      {
        list: [
          `MI is Michigan, MN is Minnesota, MS is Mississippi and MO is Missouri.`,
          `MA is Massachusetts, MD is Maryland and ME is Maine.`,
          `AK is Alaska, AL is Alabama, AR is Arkansas and AZ is Arizona.`,
          `IA is Iowa, ID is Idaho, IL is Illinois and IN is Indiana.`,
          `NE is Nebraska, NV is Nevada, and NH, NJ, NM and NY each start the same way.`,
        ],
      },
      {
        p: `A ZIP that belongs to a different city is the other common slip, especially if you’re copying an address from an old card or a text. Ask the recipient to confirm it, or check it against a recent letter they’ve sent you. If you spot a mistake after paying, call right away; [what to do about a wrong shipping address](/guides/wrong-shipping-address) explains the steps.`,
      },
      { h: 'Whose phone number should you use?' },
      {
        p: `Use the number of the person who should hear about the delivery, which is usually the recipient. If the bottles are a surprise, or the recipient doesn’t answer unknown calls, you can enter your own number instead and pass along any message yourself. Either way, the receipt and tracking email still go to the email address entered at checkout, so you’ll be the one who sees when the box ships. Forward the tracking to the recipient if they’d like to watch for it.`,
      },
      { h: 'Calling us from another time zone' },
      {
        p: `Our phone is {phone}, and the hours are {hours}, which is Central time. If you or the recipient live on the West Coast, that line closes at 3 p.m. Pacific; on the East Coast, it closes at 6 p.m. Eastern. Since you placed the order, you’re the one to call about it, with the order number from your receipt. You can also check its status any time on the [order lookup page](/orders) with that order number and the email you used.`,
      },
      { h: 'What the person receiving it should know' },
      {
        p: `A bottle sent to someone else is still a medicine they’ll put in their eyes, so make sure it suits them. Quell’s label carries this caution: {warnings}. If they have an egg or bird allergy, or you aren’t sure, ask before you order. The directions read: {directions}. If they wear contact lenses or use other eye drops, the label doesn’t cover that, so they should ask their eye doctor or pharmacist first.`,
      },
      {
        p: `It also helps to mention the color. {appearance} A note saying so saves a worried phone call. For more on the gifting side, see [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else).`,
      },
      { h: 'If something goes wrong when you’re states apart' },
      {
        p: `Distance doesn’t change the policy. If the box arrives damaged, has the wrong item, or a bottle’s seal is broken, the order is replaced within {returnDays} days; ask the recipient to tell you, then call with your order number. If they decide they don’t want the bottles, unopened ones can be refunded within {returnDays} days of delivery, and they don’t have to mail anything back. The refund goes to the card you paid with, not to the recipient. Opened bottles can’t be refunded.`,
      },
    ],
    faq: [
      {
        q: 'Can I buy eye drops online and have them shipped to my mom in another state?',
        a: 'Yes. Enter her name and address under “Ship to” at checkout and your own billing address on the payment page. Quell ships to any US address, and the receipt and tracking come to your email.',
      },
      {
        q: 'Does shipping cost more to a different state?',
        a: 'No. Quell’s shipping charge depends only on the order total: {shipping} below {freeThreshold}, and free at or above it. The destination state doesn’t change it.',
      },
      {
        q: 'Whose phone number should I put when shipping eye drops to someone else?',
        a: 'Usually the recipient’s, since the carrier uses it for delivery updates. If it’s a surprise, you can use your own number and pass messages along.',
      },
      {
        q: 'Who gets the refund if a gift recipient doesn’t want the eye drops?',
        a: 'The buyer. Unopened bottles can be refunded within {returnDays} days of delivery, and the money goes back to the card used for the order. Call {phone} with the order number.',
      },
    ],
  },

  {
    slug: 'can-i-cancel-an-eye-drop-order',
    title: 'Can I cancel an eye drop order?',
    description:
      'There’s no cancel button on Quell orders. Call quickly with your order number; if it has already shipped, unopened bottles can still be refunded.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `There’s no cancel button for a Quell order, and our terms don’t promise that a placed order can be called back. The fastest route is to call {phone} ({hours}) right away with your order number. If the order hasn’t shipped, we’ll tell you whether it can still be stopped. If it has, you still have a way out: unopened bottles can be refunded within {returnDays} days of delivery.`,
      },
      { h: 'How to ask for a cancellation' },
      {
        list: [
          `Find your order number. It’s on the receipt emailed right after you paid.`,
          `Call {phone} during {hours}. Speed matters more than anything else here, because orders are packed and shipped from Brentwood, Tennessee, after payment.`,
          `Give the order number, the name on the order and the email you checked out with.`,
          `Say what you want: the whole order stopped, or a problem fixed, such as a wrong address or a duplicate order.`,
          `Check the result later on the [order lookup page](/orders).`,
        ],
      },
      {
        p: `Outside office hours, you can still reach us through the [contact page](/about#contact), but a phone call during the day is the quickest route to someone who can look at the order.`,
      },
      { h: 'What our terms say, and what they don’t' },
      {
        p: `Our [terms](/terms) describe a few situations where an order ends early, but none of them is a customer-requested cancellation:`,
      },
      {
        list: [
          `If we can’t fulfill an order, the card authorization is released or the charge is refunded in full.`,
          `If a listing was wrong (a price or a description, say), we may correct it, or cancel the order and refund you in full, before it ships.`,
          `Closing your account doesn’t cancel an order already placed, and we still owe you the order or a refund.`,
        ],
      },
      {
        p: `That silence is why nobody can promise you a cancellation in advance. What the terms do spell out clearly is the refund on unopened bottles, which works whether or not the order could be stopped.`,
      },
      { h: 'Reading your order status' },
      {
        p: `The order lookup page shows one of four statuses, and each one tells you what a call can still do:`,
      },
      {
        list: [
          `Awaiting payment: the payment hasn’t gone through. If you left the payment page without paying, you weren’t charged.`,
          `Paid and being prepared: the money arrived and the order is getting ready to ship. This is the window when a quick call has the most chance.`,
          `Shipped: it’s on its way, with tracking in your email. A shipped box can’t be called back.`,
          `Canceled: the order was stopped. The page says you were either not charged or refunded.`,
        ],
      },
      { h: 'If the order has already shipped' },
      {
        p: `Let it arrive and leave the bottles sealed. Then call within {returnDays} days of delivery, and we’ll refund the product price for every unopened bottle. You don’t send them back; a bottle that has left our hands can’t be confirmed as stored the way its label requires, so it couldn’t be resold anyway. Two limits apply: original shipping isn’t refunded, and opened bottles can’t be refunded at all. Our guide to [refunds on unopened bottles](/guides/how-to-return-an-unopened-bottle) has the details.`,
      },
      { h: 'Common reasons people want to cancel' },
      {
        list: [
          `A duplicate order. If you clicked through twice, call with both order numbers so the right one is looked at.`,
          `The wrong address. Call before it ships; after that, [what to do about a wrong shipping address](/guides/wrong-shipping-address) explains the options.`,
          `Too many bottles. Unopened extras can be refunded after delivery, even if part of the order is kept.`,
          `A gift that’s no longer needed. The buyer calls, and unopened bottles are refunded to the buyer’s card.`,
          `A worry about the ingredients. Read the caution first: {warnings}. If the drops aren’t right for you, leave the bottles sealed and ask for the refund.`,
        ],
      },
      { h: 'Things you never need to cancel' },
      {
        p: `There’s no subscription on this site, so nothing renews and no future charge is waiting. The one reorder reminder email some customers get is only a message; it doesn’t place an order. And if you started checkout but never paid, there’s nothing to cancel, because no charge was made. [What happens if you don’t finish checkout](/guides/what-happens-if-you-dont-finish-checkout) covers that case.`,
      },
      { h: 'Changing an order instead of canceling it' },
      {
        p: `Sometimes the real goal is a different quantity or address, not a canceled order. The same rule applies: call quickly, before it ships, and we’ll say what’s possible. If it’s too late, the simplest fix is often a second order for what you need plus a refund on the unopened bottles you don’t.`,
      },
    ],
    faq: [
      {
        q: 'How do I cancel my Quell order?',
        a: 'Call {phone} during {hours} with your order number as soon as you can. There’s no cancel button, and a cancellation isn’t promised, but an order that hasn’t shipped may still be stoppable.',
      },
      {
        q: 'Can I cancel an eye drop order after it ships?',
        a: 'A shipped box can’t be called back. Leave the bottles sealed when they arrive and call within {returnDays} days of delivery for a refund of the product price, with nothing to send back.',
      },
      {
        q: 'Will I be charged if my eye drop order is canceled?',
        a: 'The order lookup page says a canceled order was either never charged or refunded. If the payment was only authorized, the hold is released rather than refunded.',
      },
      {
        q: 'Is there a Quell subscription I need to cancel?',
        a: 'No. Quell has no subscription, so nothing renews. Each order is a one-time purchase, and the occasional reorder reminder email doesn’t place an order.',
      },
    ],
  },

  {
    slug: 'can-eye-drops-be-left-in-a-mailbox',
    title: 'Can eye drops be left in a mailbox?',
    description:
      'A small box of eye drops may fit in your mailbox, but a mailbox in sun or frost can push past the label’s storage range. What to do about it.',
    category: 'shipping',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A small box of eye drops can end up in a mailbox, depending on its size and the carrier’s choice. The concern is temperature. Quell’s label says: {storage}. A metal box in summer sun or a January freeze can pass either end of that range, so collect the package soon after delivery and bring it straight indoors.`,
      },
      { h: 'Will a box of eye drops fit in a mailbox?' },
      {
        p: `Each bottle holds {size}, so a box with one or two bottles is small. Whether it goes in your mailbox, on the porch or to a package locker is up to the carrier on the day, based on the box size and what your mailbox can hold. We don’t choose where it’s left and don’t promise a delivery date, but the tracking email that comes when your order ships tells you when to start watching for it.`,
      },
      { h: 'What the storage line means for a mailbox' },
      {
        p: `In Fahrenheit, the label’s range runs from 59°F to 86°F. A mailbox has no insulation, and a dark metal one standing in direct sun on a summer afternoon can get much hotter than the air around it. In winter, it sits at the outdoor temperature all night. So the question isn’t really the mailbox; it’s how long the box sits there and what the weather is doing.`,
      },
      {
        list: [
          `Summer: a box left from late morning to evening in a sunny mailbox can bake well past 86°F.`,
          `Winter: a delivery that waits out a freezing night is well below 59°F.`,
          `Spring and fall: a short wait on a mild day is often within range.`,
        ],
      },
      { h: 'How to keep a delivery out of a hot or cold mailbox' },
      {
        list: [
          `Watch the tracking email and check the mailbox on the afternoon it shows delivered.`,
          `Ship to an address where someone is around during the day, such as your workplace; see [shipping eye drops to your work address](/guides/shipping-eye-drops-to-your-work-address).`,
          `Ask a neighbor who’s home to pick it up and bring it inside.`,
          `For a long rural driveway, our guide to [rural delivery](/guides/eye-drops-delivered-to-a-rural-address) covers road-side mailboxes in more depth.`,
          `If you’re away, time the order so it arrives after you’re back.`,
        ],
      },
      { h: 'If the box sat in the heat or cold' },
      {
        p: `Bring it inside and let it settle to room temperature before opening it. Then look at the bottle. The label lists one plain reason not to use it: {doNotUse}. Keep in mind that Quell is meant to look a certain way: {milky}. {appearance} A milky brown liquid is expected; a color that differs from that is the signal to set it aside.`,
      },
      {
        p: `If you aren’t sure whether a bottle is still fine after a long stretch outside, a pharmacist can help you decide. Don’t use a bottle you have doubts about.`,
      },
      { h: 'Is a mailbox-weather problem covered?' },
      {
        p: `Our terms replace orders that arrive damaged, incorrect, or with a broken tamper seal, within {returnDays} days. Weather in a mailbox isn’t on that list, so we can’t promise a replacement for it. There is another route, though: any unopened bottle can be refunded within {returnDays} days of delivery, and you don’t send it back. If a delivery worries you, keep the bottles sealed and call {phone} ({hours}) with your order number to talk it through.`,
      },
      { h: 'Check the seal when you pick it up' },
      {
        p: `Before you open a bottle for the first time, make sure its tamper-evident seal is intact. A box crushed by the mailbox door or a bent flag is worth a look too. A broken seal is covered by the replacement policy, so call with your order number rather than using that bottle.`,
      },
      { h: 'Apartment mailrooms, lockers and cluster boxes' },
      {
        p: `In apartment buildings and newer neighborhoods, small boxes often go into a cluster mailbox, a locked package compartment or a mailroom. A climate-controlled mailroom is usually fine for a short wait. An outdoor cluster box on a pole behaves like any other metal mailbox, and a package locker in an unheated lobby or garage can run cold in January. If a key or code for a package compartment shows up in your regular mailbox, use it soon, since the box behind that door is sitting at whatever temperature the compartment is.`,
      },
      { h: 'Once it’s inside' },
      {
        p: `Store it where the house stays inside the label’s range: a bedroom drawer or a kitchen cabinet away from the stove, not a windowsill or a car. The label also says: {tip}. Everything else printed on the carton is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is it okay if eye drops sit in a freezing mailbox all night?',
        a: 'A freezing night puts the bottle well below the label’s 59°F floor. Bring it inside, let it reach room temperature, check that the color still looks right, and ask a pharmacist if you’re unsure.',
      },
      {
        q: 'Will an eye drop package fit in my mailbox?',
        a: 'Often, because a {size} bottle comes in a small box, but the carrier decides on the day whether it goes in the mailbox, on the porch or in a locker.',
      },
      {
        q: 'What should I do if my eye drops were left in a hot mailbox?',
        a: 'Bring them indoors and look at the bottle. The label says not to use the product if it changes color. If you have doubts, keep it sealed and call {phone} to ask about a refund on unopened bottles.',
      },
      {
        q: 'Can I get a refund if my eye drops sat in a mailbox too long?',
        a: 'Weather isn’t part of the replacement policy, but unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Call with your order number.',
      },
    ],
  },

  {
    slug: 'when-will-my-eye-drop-refund-show-up',
    title: 'When will my eye drop refund show up?',
    description:
      'Quell refunds go back to the card you paid with, and your bank decides when the credit posts. How to spot it, and what to do if you can’t find it.',
    category: 'returns',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A Quell refund goes back to the card you paid with, and from there your bank or card issuer decides when the credit appears on your account. We can’t name a day for that part, because each bank posts refunds on its own schedule. If you can’t find it after a reasonable wait, check for a pending credit, call your bank, then call us at {phone}.`,
      },
      { h: 'How a refund moves, step by step' },
      {
        list: [
          `You call {phone} ({hours}) within {returnDays} days of delivery with your order number and say which unopened bottles you want refunded.`,
          `We issue the refund through our payment processor to the card used on the order.`,
          `The processor sends it to your card network and your bank.`,
          `Your bank posts the credit to your account, first as pending at some banks, then as a completed credit.`,
        ],
      },
      {
        p: `Only the last step belongs to your bank, and it’s the one people wait on. Our [terms](/terms) name Authorize.net as the payment processor, so that’s the system the refund leaves through.`,
      },
      { h: 'What the refund covers' },
      {
        p: `For unopened bottles, it’s the product price. Original shipping isn’t refunded, and opened bottles can’t be refunded at all. You don’t send the bottles back. If you expected a different amount, [what is refunded on a Quell order](/guides/what-is-refunded-on-a-return) breaks down each case, including an order we couldn’t fill.`,
      },
      { h: 'The clock that matters is the request, not the posting' },
      {
        p: `The {returnDays}-day window in our terms counts from delivery, and it’s the window for asking, not for the money to land. Call within it and your request is in time, even if your bank takes a while to post the credit afterward. Waiting to see whether you’ll need the extra bottles is fine, as long as they stay sealed and you call before the window closes. If you aren’t sure when the box was delivered, the tracking link in your shipping email shows the date.`,
      },
      { h: 'Why your refund isn’t showing on your card yet' },
      {
        list: [
          `It may be listed as a pending credit rather than in your posted transactions. Check both views in your banking app.`,
          `It may appear under the merchant name on the original charge rather than the word “Quell.” Compare it with the line where you were charged.`,
          `Debit cards and credit cards can show refunds differently; on a debit card, the money returns to the checking account.`,
          `A statement that closed before the refund posted won’t list it. Look at the current period instead.`,
          `If several refunds or orders are on the same card, the amounts can be easy to mix up.`,
        ],
      },
      { h: 'A canceled order looks different from a refund' },
      {
        p: `If an order was stopped before the charge was completed, our terms say the authorization is released rather than refunded. In that case you won’t see a new credit line at all. The pending charge simply drops off, and the available balance goes back up. The order lookup page shows such an order as canceled, with a note that you were either not charged or refunded.`,
      },
      { h: 'If the card you paid with is closed or replaced' },
      {
        p: `A refund is sent to the original card. If that card was canceled, lost or reissued with a new number, your bank decides where the credit goes, so ask them. Tell us too when you call, so we know to look for any problem on our side.`,
      },
      { h: 'Refunds on HSA and FSA cards' },
      {
        p: `A refund on a health savings or flexible spending card goes back to that account, not to your checking account. If you reimbursed yourself from the account before the refund, the plan may need to know. Plan rules vary, so check with your plan administrator. Our guide to [refunds on eye drops bought with HSA or FSA money](/guides/refunds-on-eye-drops-bought-with-hsa-or-fsa) goes through the common situations.`,
      },
      { h: 'Gifts: the buyer gets the money' },
      {
        p: `If someone sent you Quell as a gift, the refund on unopened bottles goes to the card the buyer used, not to you. The buyer should make the call with the order number from their receipt.`,
      },
      { h: 'What to have ready if you need to follow up' },
      {
        list: [
          `Your order number, from the receipt email.`,
          `The date you asked for the refund and how many bottles were refunded.`,
          `The last four digits of the card used, so the right transaction can be matched.`,
          `What your bank told you, if you’ve already asked them.`,
        ],
      },
      {
        p: `With those details, we can confirm whether the refund was issued and for how much. You can also check the order’s status any time on the [order lookup page](/orders).`,
      },
    ],
    faq: [
      {
        q: 'Where does my Quell refund go?',
        a: 'Back to the card used for the order, through the same payment processor that took the payment. There’s no store credit on this site.',
      },
      {
        q: 'Why is my eye drop refund not showing on my card?',
        a: 'Your bank posts refunds on its own schedule, and some list them as pending first or under the original merchant name. Check pending items and the current statement period, ask your bank, then call {phone} with your order number.',
      },
      {
        q: 'What happens to my refund if the card I paid with is closed?',
        a: 'The refund still goes to the original card account, and your bank decides where the credit lands. Ask your bank, and mention it when you call us.',
      },
      {
        q: 'Do I get a refund line if my order was canceled before it was charged?',
        a: 'Usually not. Our terms say an unfulfilled order’s authorization is released, so the pending charge drops off instead of a separate credit appearing.',
      },
    ],
  },

  {
    slug: 'why-does-the-label-say-1-drop-3-times-a-day',
    title: 'Why does the label say 1 drop 3 times a day?',
    description:
      'Quell’s directions read “1 drop 3 times per day in each eye.” What each part means, how to spread the doses, and what the label leaves to a pharmacist.',
    category: 'label',
    addedOn: '2026-11-22',
    body: [
      {
        p: `The directions on Quell’s label read: {directions}. Each part has a job. “1 drop” is the amount per dose, because the eye holds only a little liquid at once. “3 times per day” is how often. “In each eye” means both eyes get a drop every time, so a full day uses six drops. Using it more often isn’t covered, so ask a pharmacist first.`,
      },
      { h: 'One drop: why not two?' },
      {
        p: `The front of the eye can only hold a small amount of liquid before the extra spills over the lid or drains through the tear ducts in the inner corner. A second drop right after the first mostly runs down your cheek. That’s why the dose is written as a single drop. If a drop misses, lands on your lashes or rolls off, it’s reasonable to try again, since that drop never reached the eye. Our guide on [how to tell if the drop went in](/guides/how-do-i-know-if-the-eye-drop-went-in) covers the signs.`,
      },
      { h: '3 times per day: spreading the doses' },
      {
        p: `The label gives a number, not a clock. It doesn’t say morning, noon and night, and it doesn’t ask for exact intervals. Most people find it easiest to tie each dose to something they already do. A few patterns that fit an ordinary day:`,
      },
      {
        list: [
          `After washing up in the morning, at lunch, and an hour or so before bed.`,
          `Before the commute, mid-afternoon at the desk, and after dinner.`,
          `For shift workers: once early in your shift, once in the middle, and once before you sleep, counting your own waking day.`,
          `Before a known dry stretch, such as a long drive, a flight or an afternoon at a screen, with the others spaced around it.`,
        ],
      },
      {
        p: `More ideas are in [when to use eye drops during the day](/guides/when-to-use-eye-drops-during-the-day).`,
      },
      { h: 'In each eye: both eyes, every time' },
      {
        p: `“In each eye” puts the count per eye. One drop in the right eye and one in the left is one dose, and three of those make the day. If only one eye feels dry, the label still says each eye; it doesn’t give a one-eye version. Dryness that stays in one eye is worth mentioning to an eye doctor.`,
      },
      { h: 'If you miss a dose' },
      {
        p: `The label doesn’t address a missed dose. The plain reading is to take the next one when you remember or at your next usual time, and not to double up to make up for it, since a second drop on top of the first mostly runs out of the eye. [What if I miss a dose of eye drops?](/guides/what-if-i-miss-a-dose-of-eye-drops) goes into more detail.`,
      },
      { h: 'Can you use it more than 3 times a day?' },
      {
        p: `The directions stop at three. They don’t say four or five times is fine, and they don’t say it isn’t, so the answer is outside what the label covers. If three times doesn’t feel like enough, that’s useful information to take to a pharmacist or eye doctor, who can look at the whole picture, including other drops or medicines you use. The label is also clear about when to stop and get help: {stopUse}`,
      },
      { h: 'Other lines on the panel that go with the directions' },
      {
        list: [
          `Handling: {tip}.`,
          `When not to use it: {doNotUse}.`,
          `The caution: {warnings}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `The full panel, including the active ingredients and the inactive list, is on our [Drug Facts page](/drug-facts), and [the Directions section on an eye drop label](/guides/directions-section-eye-drop-label) explains where that part sits on any OTC panel.`,
      },
      { h: 'Getting one drop into each eye' },
      {
        list: [
          `Wash your hands, then remove the cap and set it down open side up.`,
          `Tilt your head back or lie down, and look up toward the ceiling.`,
          `Gently pull the lower lid down to make a small pocket.`,
          `Hold the bottle above the eye without letting the tip touch your eye, lashes or fingers, and squeeze once.`,
          `Close the eye gently for a moment without squeezing the lids, then repeat on the other side.`,
          `Recap the bottle right away.`,
        ],
      },
      { h: 'What the directions don’t cover' },
      {
        p: `The directions are written for adults using the drop on its own. They don’t give instructions for contact lenses, for children, or for use alongside other eye drops. If any of those apply, ask your eye doctor or pharmacist before you start, and bring the bottle or a photo of the panel so they can read the exact wording.`,
      },
    ],
    faq: [
      {
        q: 'Does 1 drop 3 times a day mean in both eyes?',
        a: 'Yes. Quell’s label says each eye, so every dose is one drop in the right eye and one in the left, three times a day.',
      },
      {
        q: 'Why do eye drop directions say only one drop?',
        a: 'The eye can hold only a small amount of liquid. A second drop right after the first mostly spills over the lid or drains away, so one drop is the dose.',
      },
      {
        q: 'What does 3 times per day mean if I work nights?',
        a: 'The label gives a count, not clock times, so many night workers spread the three doses across their own waking hours. A pharmacist can help if your schedule is unusual.',
      },
      {
        q: 'Is it okay to use eye drops 4 times a day if 3 isn’t enough?',
        a: 'Quell’s directions say three times per day and don’t cover more. Ask a pharmacist or eye doctor before using it more often, and mention that three doses don’t feel like enough.',
      },
    ],
  },

  {
    slug: 'lubricant-vs-emollient-eye-drops',
    title: 'Lubricant vs. emollient eye drops',
    description:
      'Lubricant and emollient are two Purpose words on eye drop labels. How to tell which a box contains, how they differ, and why Quell lists both.',
    category: 'formula',
    addedOn: '2026-11-22',
    body: [
      {
        p: `“Lubricant” and “emollient” are both Purpose words on an eye drop’s Drug Facts panel. A lubricant ingredient makes the eye’s surface slicker and wetter; an emollient is an oily ingredient aimed at softening and supporting the tear film’s oil layer. Many drops contain only lubricants. Quell lists both: {glycerol} and {polysorbate} as lubricants, and {mineralOil} as its emollient.`,
      },
      { h: 'Where you’ll see the two words' },
      {
        p: `Turn any OTC eye drop box over and find the Drug Facts panel. Under “Active ingredients” each ingredient has a Purpose beside it, and that column is where these words live. They describe what each active ingredient is there to do, in short, standard terms. The words don’t appear in the brand name or the big print on the front, which is why two boxes can look alike in the aisle and still carry different kinds of ingredients. Our guide to [what Purpose means on a Drug Facts label](/guides/what-does-purpose-mean-on-a-drug-facts-label) explains the column itself.`,
      },
      { h: 'What a lubricant does' },
      {
        p: `A lubricant ingredient works on the watery side of the eye’s surface. It helps the lids glide over the eye with less friction and holds moisture against the surface for a while. Glycerol and polysorbate 80, two of Quell’s actives, are listed this way. Lubricant ingredients usually dissolve in water, which is why many lubricant-only drops look clear in the bottle.`,
      },
      { h: 'What an emollient does' },
      {
        p: `An emollient is an oil or oily substance. In skin products the word means something that softens; in an eye drop, the emollient’s role is tied to the tear film’s outer oil layer, the thin film that slows evaporation of the water beneath it. Light mineral oil is Quell’s emollient. Because oil and water don’t mix on their own, a drop with an emollient is often made as an emulsion, and that’s part of why such drops can look milky. Quell’s label says: {milky}.`,
      },
      { h: 'Lubricant vs. emollient, side by side' },
      {
        list: [
          `Where it works: lubricants on the watery surface; emollients on the oil layer on top.`,
          `What it is: lubricants are often water-soluble; emollients are oils.`,
          `How the bottle looks: lubricant-only drops are often clear; drops with an emollient are often milky.`,
          `How it can feel: an oil-containing drop may blur your vision briefly while it spreads, so blink a few times and wait before driving or reading fine print.`,
          `On the label: both appear in the Purpose column next to the active ingredient they describe.`,
        ],
      },
      { h: 'Why Quell lists both' },
      {
        p: `The tear film has an oil layer, a water layer and a mucus layer, and dryness can involve more than one of them. A formula with two lubricants and one emollient addresses the watery surface and the oil layer in the same drop. That’s the thinking behind Quell, which is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its inactive list adds emu oil and other natural ingredients, but those aren’t active ingredients and don’t carry a Purpose word. The Uses line covers the whole product: {uses}.`,
      },
      {
        p: `For more on that outer layer, read [the tear film’s oil layer, explained](/guides/the-tear-films-oil-layer).`,
      },
      { h: 'How to tell which one a box contains' },
      {
        list: [
          `Read the Purpose column. If every active says “Lubricant,” the drop has no listed emollient.`,
          `Look for an oil among the actives, such as light mineral oil, which Quell’s panel marks “Emollient.”`,
          `Check “Other information” for a description of the liquid; a milky or cloudy appearance often signals oil.`,
          `Don’t rely on front-of-box words like “moisturizing” or “soothing.” They’re marketing language, not Purpose words.`,
        ],
      },
      { h: 'Is one type better than the other?' },
      {
        p: `Neither word means stronger or gentler. They describe different jobs, and which kind of drop suits you depends on what’s behind your dryness, which a label can’t tell you. An eye doctor can look at your tear film, find the cause and decide what to do. If you’re choosing on your own, a pharmacist can compare panels with you. Bring a list of other drops you use, since a label like Quell’s doesn’t give directions for combining products. [Questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) is a good starting list.`,
      },
      { h: 'Before you try a drop with an emollient' },
      {
        p: `Read the whole panel, not just the Purpose column. Quell’s caution reads: {warnings}. Its directions say: {directions}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Which is better, lubricant or emollient eye drops?',
        a: 'Neither word means better. A lubricant works on the eye’s watery surface and an emollient on the oil layer, and an eye doctor can tell you which matters for your eyes.',
      },
      {
        q: 'How do I know if my eye drops have an emollient?',
        a: 'Check the Purpose column under Active ingredients on the Drug Facts panel. An emollient is labeled “Emollient,” and it’s usually an oil such as light mineral oil.',
      },
      {
        q: 'Does Quell have a lubricant or an emollient?',
        a: 'Both. Its label lists glycerol and polysorbate 80 as lubricants and light mineral oil as an emollient.',
      },
      {
        q: 'Do emollient eye drops blur your vision more than lubricant drops?',
        a: 'A drop that contains oil can blur vision briefly while it spreads over the eye. Blink a few times and wait until your vision is clear before you drive.',
      },
    ],
  },

  {
    slug: 'why-does-my-eye-feel-dry-in-the-corner',
    title: 'Why does my eye feel dry in the corner?',
    description:
      'A dry, scratchy feeling in the inner or outer corner of the eye often comes from air flow, makeup, a lash or how you sleep. When it’s a doctor’s question.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A dry or scratchy corner usually comes down to where air, debris or tears collect. The inner corner is where tears drain and dust or mucus gathers; the outer corner is more exposed to wind, vents and makeup on the lash line. A stray lash, a fan aimed from one side or sleeping face-down can all do it. A corner that hurts, swells or stays irritated needs an eye doctor.`,
      },
      { h: 'Inner corner vs. outer corner' },
      {
        p: `The two corners of the eye are built differently, and that changes what tends to bother each one. Near the nose, the inner corner holds the small openings in the upper and lower lids where tears drain away, plus a small pink mound of tissue. Each blink sweeps tears, dust and mucus toward that spot. The outer corner, toward the ear, is where the lids meet at an angle, and it sits more in the open. Knowing which corner feels dry is the first clue.`,
      },
      { h: 'Common reasons the inner corner feels dry or gritty' },
      {
        list: [
          `Debris collecting. Dust, makeup flakes or dried mucus ride the tear film toward the inner corner and can sit there after you wake up.`,
          `Rubbing. People tend to rub the inner corner with a knuckle when eyes are tired, which can leave it feeling raw.`,
          `Glasses. Nose pads and frames sit close to the inner corner, and a smudge or a gap that funnels air can make that side feel dry.`,
          `Drops that drain fast. A drop placed near the inner corner can head straight for the drain; placing it in the pocket of the lower lid keeps it on the eye longer.`,
        ],
      },
      { h: 'Common reasons the outer corner feels dry' },
      {
        list: [
          `Air from the side. A car vent, a desk fan or a heater aimed at the side of your face hits the outer corner first.`,
          `Makeup on the lash line. Eyeliner, mascara flakes or shimmer along the outer edge can work their way in. Our guide to [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) covers the order of steps.`,
          `A lash. A loose eyelash often settles in the outer corner and feels like dryness or grit before you can see it.`,
          `Squinting. Sun, glare or a bright screen make you narrow your eyes, and the outer corners take the strain.`,
          `Wind. Walking or riding into a breeze dries the exposed edges of the eye fastest.`,
        ],
      },
      { h: 'Why it might be just one eye’s corner' },
      {
        p: `If the feeling is always on the same side, look at your setup. A screen placed off to one side keeps that eye turned and more exposed. Sleeping on one side can push the pillow against one eye or leave the upper eye partly open, and a ceiling fan or window may blow across only one side of the bed. Moving a fan, centering a monitor or switching which side the vent points can tell you a lot in a few days. Our guide on [why one eye feels drier than the other](/guides/why-does-one-eye-feel-drier-than-the-other) goes further into one-sided dryness.`,
      },
      { h: 'What you can try at home' },
      {
        list: [
          `Wash your hands, then look in a mirror in good light and check the corner for a lash or a speck.`,
          `Blink several times; tears often move a small particle toward the inner corner, where you can lift it off the skin with a clean tissue.`,
          `Don’t rub. Rubbing can scratch the eye if something is caught there.`,
          `Turn vents and fans away from your face and take regular breaks from screens.`,
          `Remove eye makeup fully at night, working outward from the inner corner rather than scrubbing.`,
        ],
      },
      { h: 'Using a lubricating drop for a dry corner' },
      {
        p: `A drop spreads across the whole eye with each blink, so you don’t need to aim at the corner. Put it in the small pocket you make by pulling the lower lid down, then close your eyes gently. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label gives the Uses as: {uses}. The directions say: {directions}. The panel also says: {tip}. Before you try it, read the caution: {warnings}. See the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When a dry corner needs an eye doctor' },
      {
        p: `Some corner symptoms aren’t about dryness at all. See an eye doctor if you notice a bump, swelling or tenderness at the corner or along the lid, discharge, a corner that keeps feeling like something is stuck in it after you’ve checked, or any change in your vision. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes into more detail.`,
      },
    ],
    faq: [
      {
        q: 'Why does the inner corner of my eye feel dry?',
        a: 'Tears drain at the inner corner, and dust, makeup and mucus collect there. Rubbing, glasses frames and drops placed too close to the nose can add to it.',
      },
      {
        q: 'Why does the outer corner of my eye feel scratchy?',
        a: 'The outer corner is more exposed to vents, wind and eye makeup, and a loose eyelash often lodges there. Check it in a mirror, blink, and avoid rubbing.',
      },
      {
        q: 'Should I put eye drops in the corner of my eye?',
        a: 'Place the drop in the pocket of the pulled-down lower lid instead. A drop in the inner corner tends to drain away quickly, and blinking spreads it across the whole eye anyway.',
      },
      {
        q: 'When should I see a doctor about the corner of my eye?',
        a: 'If there’s a bump, swelling, tenderness, discharge, pain or a change in vision, or a gritty feeling that stays after you’ve checked for a lash, see an eye doctor.',
      },
    ],
  },

  {
    slug: 'why-do-my-eyes-feel-dry-when-i-blink',
    title: 'Why do my eyes feel dry when I blink?',
    description:
      'If blinking feels scratchy or sticky, the lid may be gliding over a surface that has dried out. Why it happens, what helps, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Blinking usually feels like nothing at all, because the lid glides over a smooth, wet tear film. When that film thins or breaks up, the lid drags over a drier surface, and each blink can feel scratchy, sticky or gritty. Dry indoor air, long screen sessions, wind and partial blinks are common causes. A lubricating drop can help; pain or changes in vision need an eye doctor.`,
      },
      { h: 'What a blink is supposed to do' },
      {
        p: `Each blink spreads a fresh layer of tears across the front of the eye. That layer has three parts: a mucus layer that helps it cling, a water layer in the middle, and a thin oil layer on top that slows evaporation. The lid acts like a wiper moving over a wet windshield. When there’s enough fluid, you don’t feel it. When the surface has dried in patches between blinks, the wiper meets resistance. Our guide to [how blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics in more detail.`,
      },
      { h: 'Why blinking can feel scratchy or sticky' },
      {
        list: [
          `The surface dried between blinks. If you stared at a screen or a book, the gaps between blinks grew longer and the film had more time to break up.`,
          `Evaporation is fast. Heated, air-conditioned or windy air pulls water off the eye quickly.`,
          `The lid edge is dry too. When the lid margin and lashes feel dry, they don’t glide as smoothly.`,
          `Something is on the surface. A lash, a speck of dust or a flake of makeup can feel like a dry, rough spot every time you blink.`,
          `You just woke up. Eyes that weren’t fully closed during sleep, or sat in a fan’s path, can feel sticky for the first blinks of the morning.`,
        ],
      },
      { h: 'Partial blinks and screens' },
      {
        p: `People blink less often while they concentrate, and many of those blinks don’t close all the way. A half blink wets the top of the eye but leaves a strip near the lower lid exposed, so that area dries faster. Then, when you finally take a full blink, the lid crosses the dry strip and you feel it. Practicing a few slow, complete blinks every so often, where the upper lid meets the lower one, helps spread tears over the whole surface. [Can blinking more replace eye drops?](/guides/can-blinking-more-replace-eye-drops) looks at what blinking alone can and can’t do.`,
      },
      { h: 'When it’s worse in the morning or at night' },
      {
        p: `If blinking feels sticky right after you wake, look at the bedroom. A ceiling fan, a heater vent or a dry winter room can dry the eyes during sleep, especially if the lids don’t seal completely. If it’s worse at night, the cause is usually the day itself: hours of screens, contact with dry office air and tired, slower blinking by evening. A humidifier in the bedroom and turning a fan away from the bed are easy changes to test.`,
      },
      { h: 'Habits that make blinking feel smoother' },
      {
        list: [
          `Take a short break from a screen every so often and look across the room or out a window.`,
          `Set your monitor slightly below eye level, so the lids cover more of the eye while you work.`,
          `Point car vents, desk fans and space heaters away from your face.`,
          `Wear wraparound sunglasses on windy or bright days.`,
          `Clean your eyelid area gently when you wash your face, and remove eye makeup fully at night.`,
          `Avoid rubbing; it can scratch an eye that already feels rough.`,
        ],
      },
      { h: 'Can eye drops help when blinking feels dry?' },
      {
        p: `A lubricating drop adds moisture to the surface and helps the lid glide. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the evaporation that leaves the surface dry between blinks. Its label lists the Uses as: {uses}. The directions say: {directions}. Read the caution first: {warnings}. After a drop, close your eyes gently for a moment rather than blinking hard, so it spreads instead of squeezing out. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A scratchy blink that settles once you change your setup is usually about air and habits. Pain, sensitivity to light, a feeling that something is stuck under the lid that won’t clear, discharge or any change in vision are reasons to get checked. The label is direct: {stopUse} An eye doctor can find the cause and decide what to do; see our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel scratchy when I blink?',
        a: 'The lid may be gliding over a surface that dried out between blinks, or over a lash or speck of dust. Dry air, screens and wind make it more likely.',
      },
      {
        q: 'Why do my eyelids feel sticky when I blink in the morning?',
        a: 'Eyes can dry during sleep if a fan or vent blows on them or the lids don’t close completely. Moving the fan and adding a bedroom humidifier are easy first steps.',
      },
      {
        q: 'Is it normal to feel your eyelids when you blink?',
        a: 'Most of the time you shouldn’t notice blinking at all. If you feel every blink, the tear film may be thin. If it doesn’t settle, or it hurts, see an eye doctor.',
      },
      {
        q: 'Do partial blinks make your eyes feel dry when you blink?',
        a: 'They can. A half blink leaves a strip of the eye near the lower lid exposed, and when a full blink finally crosses that dry strip, you notice it.',
      },
    ],
  },

  {
    slug: 'eye-drops-before-or-after-skincare',
    title: 'Eye drops before or after skincare?',
    description:
      'Put eye drops in before your skincare, on a clean face with clean hands, so creams and serums don’t ride into your eye. Morning and night routines.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Put eye drops in before your skincare. Wash your face, dry it, wash your hands again, then use the drops and give them a minute to settle. After that, apply serums, moisturizer, eye cream and sunscreen. Doing it in this order keeps lotion off your fingertips and away from the bottle tip, and keeps fresh product near your lashes from being carried into your eye by the drop.`,
      },
      { h: 'Why drops come first' },
      {
        list: [
          `Clean fingers. Drops are easiest to put in when your hands have nothing on them. Moisturizer or oil on a fingertip can end up on the lower lid you’re holding down, or on the bottle.`,
          `A clean bottle tip. Quell’s label says: {tip}. A tip brushed against a cream-covered cheek has touched a surface.`,
          `Less runoff. A drop that overflows runs down the cheek. If you’ve just applied a product there, the drop can pick it up, and you’ll wipe the mix near your eye.`,
          `Nothing carried in. Product applied right up to the lash line can migrate into the eye. A drop placed afterward can help it along.`,
        ],
      },
      { h: 'A morning routine, step by step' },
      {
        list: [
          `Wash your face with your usual cleanser and pat dry.`,
          `Wash and dry your hands.`,
          `Put in your eye drops: one pocket in the lower lid, one drop, eyes closed gently for a moment.`,
          `Blot any overflow from your cheek with a clean tissue.`,
          `Wait a minute or two, then apply serum and moisturizer.`,
          `Finish with sunscreen, keeping it a little away from the lash line.`,
          `If you wear makeup, it goes on last. Our guide to [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) covers that part.`,
        ],
      },
      { h: 'A night routine, step by step' },
      {
        list: [
          `Remove makeup first, working gently around the eyes.`,
          `Cleanse, rinse and pat your face dry.`,
          `Wash your hands, then use your eye drops.`,
          `Give them a moment, then apply your night products.`,
          `Apply eye cream with a ring finger on the bone around the eye, not on the lid edge.`,
        ],
      },
      {
        p: `If you shower at night, the same order works after you step out of the bathroom steam. [Eye drops before or after a shower?](/guides/eye-drops-before-or-after-a-shower) explains the timing around washing up.`,
      },
      { h: 'Eye cream, retinol and products near the eyes' },
      {
        p: `Products meant for the face often say to avoid the eye area, and some can sting if they reach the eye. Read each product’s own label for where it should and shouldn’t go. Quell’s label doesn’t give directions for use with skincare products, so if you use something strong around the eyes and wonder about putting drops in on the same night, ask a pharmacist. As a habit, keep eye cream on the orbital bone, the firm ridge around the eye, and let it spread on its own rather than pushing it toward the lashes.`,
      },
      { h: 'If skincare gets in your eye' },
      {
        p: `If sunscreen, a serum or a cleanser gets into your eye, rinse it with plenty of clean, lukewarm water and follow the first-aid wording on that product’s label. Don’t reach for eye drops as a rinse; a lubricating drop isn’t made for flushing something out. If stinging, pain or blurred vision continues after rinsing, get medical help.`,
      },
      { h: 'Do I need to wait after eye drops before moisturizer?' },
      {
        p: `Not long. A minute or two lets the drop spread and any overflow be blotted away. Wiping your cheek with a tissue before you start on serum keeps the two from mixing. If your eyes still feel watery, wait a little longer; there’s no benefit to rushing a cream into a wet area right beside the eye.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}. Read the caution before using it: {warnings}. The bottle belongs in a drawer or cabinet rather than beside a steamy sink, since the label says: {storage}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When skincare isn’t the problem' },
      {
        p: `If your eyes feel dry no matter how you order your routine, look at the room and your day: heated or air-conditioned air, long screen sessions and fans all speed evaporation. Pain, ongoing irritation or a change in vision belong with an eye doctor, who can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs.`,
      },
    ],
    faq: [
      {
        q: 'Should I put eye drops in before or after moisturizer?',
        a: 'Before. Use the drops on a clean face with clean hands, blot any overflow, then apply moisturizer a minute or two later.',
      },
      {
        q: 'Can I use eye drops before eye cream?',
        a: 'Yes, drops first and eye cream after. Keep the cream on the bone around the eye rather than on the lid edge, so it doesn’t migrate into the eye.',
      },
      {
        q: 'What should I do if sunscreen gets in my eye?',
        a: 'Rinse with plenty of clean, lukewarm water and follow the first-aid wording on the sunscreen’s label. If stinging, pain or blurry vision continues, get medical help.',
      },
      {
        q: 'Can I use eye drops with retinol skincare?',
        a: 'Quell’s label doesn’t cover use with skincare products. Keep retinol away from the eye area as its own label directs, and ask a pharmacist if you have questions.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-receptionists',
    title: 'Dry eyes for receptionists and front desk staff',
    description:
      'Screens, a door that keeps opening, overhead vents and constant switching between faces and monitors. Dry eye habits for receptionists at any front desk.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Receptionists get dry eyes from a mix of screen work and the spot where the desk sits. Scheduling software keeps your eyes on a monitor, the front door lets in a draft with every visitor, and overhead vents often blow straight at the desk. Turn vents away, set the screen slightly low, blink fully when you look up at a visitor, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why the front desk is hard on your eyes' },
      {
        p: `A front desk is designed for welcome, not comfort. It sits near the entrance, often in the path of a heating or cooling vent, with a window or glass door somewhere behind it. Your job is split between a monitor, a phone, a sign-in sheet and a steady stream of faces, and every switch means refocusing. Our guide for [hotel front desk workers](/guides/dry-eyes-for-hotel-front-desk-workers) covers lobbies and night audits; this one is for the medical office, dental practice, salon, law firm or corporate lobby.`,
      },
      { h: 'Scheduling screens and the long stare' },
      {
        p: `Booking appointments, checking insurance cards, updating records and answering email keep your eyes on a screen for most of the shift. People blink less while concentrating, and partial blinks leave part of the eye exposed. A few changes help at almost any desk:`,
      },
      {
        list: [
          `Set the top of the monitor at or a little below eye level, so you look slightly down.`,
          `Bump the text size up a step so you aren’t leaning in to read small fields.`,
          `Use each visitor or call as a cue: look up, take one full blink, then greet them.`,
          `Turn a second monitor so you face it straight on rather than twisting toward it.`,
          `Clean the screen; smudges make you squint.`,
        ],
      },
      { h: 'The door that never stays closed' },
      {
        p: `Every time the front door opens, a gust of outdoor air crosses the desk, hot and dry in summer or cold in winter. Then the building’s heating or cooling works to make up for it. If you can, angle the desk so the door is to one side rather than straight ahead, and ask facilities whether an overhead diffuser can be turned or partly closed. A small desk fan aimed away from your face can move the draft along rather than into it.`,
      },
      { h: 'Glare from windows and glass' },
      {
        p: `A window behind the people you greet means you look into bright light for hours, and glass partitions or sliding windows add reflections on the screen. Squinting narrows the eyes and slows blinking. Close a blind partway during the brightest hours, tilt the monitor to dodge reflections, and lower the screen brightness to match the room.`,
      },
      { h: 'Talking and typing at the same time' },
      {
        p: `Receptionists often type while on the phone or speaking with someone at the counter. That divided attention is when blinking slows the most. A headset keeps your head up and level rather than tucked against a handset, which helps you look at the screen without peering. Between calls, close your eyes for a few seconds; it’s a quick reset that nobody notices.`,
      },
      { h: 'Using eye drops at the front desk' },
      {
        p: `A drop takes under a minute, and lunch or a quiet moment between appointments is enough. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}, which many receptionists fit around opening, lunch and the end of the day. The label adds: {tip}. Wash your hands first, especially after handling cards, pens and the sign-in clipboard.`,
      },
      {
        p: `Read the caution before you start: {warnings}. For storage, the label says: {storage}. A desk drawer away from a sunny window or space heater works better than a car parked outside. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Small changes worth asking for' },
      {
        list: [
          `A desk humidifier, kept clean, if the building’s air feels dry in winter.`,
          `A monitor arm, so the screen height can be set properly.`,
          `A blind or film for the window that faces the desk.`,
          `A redirected vent if one blows on the desk.`,
          `A short break away from the desk now and then, so you can look at something farther away.`,
        ],
      },
      { h: 'After the shift' },
      {
        p: `If you scroll on your phone on the way home, your eyes get no break. Give them a few minutes of looking at the road ahead, the sky or anything farther than arm’s length. At home, keep heater and fan vents off the couch. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has more for the screen part of the job.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after you’ve changed the desk, or you notice pain or blurred vision, have them checked. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'Why do receptionists get dry eyes?',
        a: 'Most of the shift is screen work, which slows blinking, and front desks often sit near an entrance and under a vent. Drafts and glare add to it.',
      },
      {
        q: 'How can I stop the front door draft from drying my eyes?',
        a: 'Angle the desk so the door is to the side, ask facilities about the nearest vent, and use a small fan aimed away from your face to carry the draft along.',
      },
      {
        q: 'When can a receptionist put in eye drops during the day?',
        a: 'Quell’s label says one drop three times a day in each eye, so many receptionists use it at opening, at lunch and at the end of the day, after washing their hands.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-custodians-on-night-shifts',
    title: 'Dry eyes for custodians on night cleaning shifts',
    description:
      'Floor machines, empty buildings with the air set for after hours, cleaning fumes and a drive home at sunrise. Dry eye habits for night custodians.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Night custodians face dry eyes from several directions: floor machines that move air and dust, buildings whose heating or cooling may run differently after hours, cleaning fumes in small rooms, and a drive home into the morning sun. Keep machine exhaust away from your face, rinse eyes after a splash, protect your sleep, and use a lubricating drop as its label directs.`,
      },
      { h: 'An empty building at night' },
      {
        p: `In many offices, schools and stores, the heating and cooling are set for the daytime crowd. After hours, rooms can feel colder, warmer or stuffier than they do at noon, and the air may move less. A building that has been heated since morning in winter can be very dry by the time you arrive. You can’t change the thermostat schedule, but you can notice which areas bother your eyes most and plan your route so you aren’t in the driest rooms for hours at a stretch.`,
      },
      { h: 'Floor machines, vacuums and dust' },
      {
        p: `Burnishers, scrubbers and backpack vacuums push air and fine dust out at floor or shoulder level. A burnisher pad spinning on a hard floor sends up a light haze, and a vacuum’s exhaust can blow straight past your face if the outlet points the wrong way.`,
      },
      {
        list: [
          `Check where each machine vents and keep that stream away from your head.`,
          `Empty vacuum bags and canisters outdoors or over a bin, holding them at arm’s length.`,
          `Dust high ledges and vents before you vacuum, so falling dust lands where you’ll pick it up.`,
          `Wear glasses or safety glasses if dust or grit tends to get in your eyes.`,
        ],
      },
      { h: 'Restrooms, break rooms and cleaning fumes' },
      {
        p: `Small rooms with closed doors trap fumes from bowl cleaners, degreasers and disinfectants. Strong vapors can sting the eyes, and that stinging often leads to rubbing. Prop the door open while you work, follow each product’s label for mixing and use, and never mix products. If a chemical splashes in your eye, rinse it right away with plenty of clean water at an eyewash station or sink, follow the first-aid instructions on that product’s label, and get medical help. Our guide for [housekeepers and cleaners](/guides/dry-eyes-for-housekeepers-and-cleaners) covers more about sprays and dust.`,
      },
      { h: 'Bright lights, dark halls' },
      {
        p: `Night cleaning often means moving from a dim hallway into a room with every light on, or working under one bank of lights in a dark building. Your eyes adjust each time, and glare off freshly polished floors makes you squint. Narrowed eyes blink less fully. Turn on enough lights to see evenly in the area you’re cleaning, and take a few slow, full blinks when you move between rooms.`,
      },
      { h: 'Working alone and forgetting breaks' },
      {
        p: `With nobody around, it’s easy to work straight through without a pause. Short breaks matter for your eyes, too. Close them for a few seconds, look down a long corridor or out a window, and use your meal break to step outside if you can. The change in light and distance gives your blinking a reset.`,
      },
      { h: 'The drive home into the sunrise' },
      {
        p: `Ending a shift at dawn means driving when your eyes are tired, often with the low sun in your face. Wear sunglasses, keep the windshield clean inside and out, and point the car’s vents at your chest, not your eyes. If your eyes feel too dry or tired to drive comfortably, pull over and rest. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more about daytime sleep and the commute.`,
      },
      { h: 'Sleeping during the day' },
      {
        list: [
          `Darken the bedroom with blackout curtains or a sleep mask, which also blocks a fan’s breeze.`,
          `Turn the fan or air conditioner so it doesn’t blow across the pillow.`,
          `Run a clean humidifier if the house is heated and dry.`,
          `Put the phone down before you lie down; scrolling in a dark room keeps your eyes open and staring.`,
        ],
      },
      { h: 'Eye drops on a night cleaning shift' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}; spread those across your own waking day, such as at the start of your shift, at your meal break and before you sleep. The label also says: {tip}. Wash your hands well first, since they’ve touched cleaning products all night, and never put in drops with chemical residue on your fingers.`,
      },
      {
        p: `Read this caution before you start: {warnings}. For storage, the label says: {storage}. A locker or a bag inside the building is a steadier spot than a car parked in a cold lot. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that eases after sleep and a day off is common with night work. Eye pain, vision changes, or dryness that keeps returning are not. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the signs to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry cleaning offices at night?',
        a: 'After-hours buildings can have dry, still air, and floor machines and vacuums push dust and air around at face level. Long hours without breaks slow blinking, too.',
      },
      {
        q: 'What should a custodian do if cleaner splashes in their eye?',
        a: 'Rinse right away with plenty of clean water at an eyewash station or sink, follow the first-aid wording on that product’s label, and get medical help.',
      },
      {
        q: 'When should I use eye drops if I clean buildings at night?',
        a: 'Quell’s label says one drop three times a day in each eye. Many night workers spread those doses across their own waking day, with clean hands each time.',
      },
      {
        q: 'How can I protect my eyes on the drive home after a night cleaning shift?',
        a: 'Wear sunglasses against the low morning sun, keep the windshield clean, aim vents away from your face, and pull over to rest if your eyes feel too tired to drive.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-dairy-farmers-in-winter',
    title: 'Dry eyes for dairy farmers in winter barns',
    description:
      'Closed-up barns, ammonia, hay and bedding dust, steamy parlors and cold wind between buildings. Dry eye habits for dairy farmers through the winter.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dairy farmers’ eyes take a beating in winter because the barn is closed up against the cold. Ammonia from manure, dust from hay and bedding, and steam from the parlor build up indoors, and every trip outside means cold wind. Keep air moving where you can, wear glasses for dusty chores, rinse with clean water after a splash, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why winter barns are harder on the eyes' },
      {
        p: `In summer, curtains and doors stand open and fans pull fresh air through. In a cold snap, many farms close the barn to keep the herd and the water lines from freezing. That keeps warmth in, but it also keeps in what the animals and the work produce: moisture, manure gases and dust. Your eyes are exposed to all of it for every hour of chores. The spring and harvest side of farm work is covered in our guide to [dry eyes for farmers](/guides/dry-eyes-for-farmers); this one stays in the barn from December to March.`,
      },
      { h: 'Ammonia when the barn is shut tight' },
      {
        p: `The sharp smell that hits you when you open a closed barn in the morning is ammonia from manure and urine. It builds up when air isn’t moving, and it can make eyes sting and water. Watery eyes in that air aren’t a sign of plenty of tears; they’re a reaction to the irritant. A few habits help:`,
      },
      {
        list: [
          `Open a door or vent for a few minutes before starting work, if the weather allows.`,
          `Scrape and clean alleys regularly so manure doesn’t pile up under the herd.`,
          `Check that fans and inlets are clear of frost, cobwebs and dust, so they move air as designed.`,
          `Step outside for a breath of fresh air if your eyes start to burn.`,
        ],
      },
      { h: 'Hay, bedding and feed dust' },
      {
        p: `Dropping bales from the loft, spreading sawdust or straw, mixing feed and sweeping all throw fine dust into still winter air, and it hangs there longer than it would with the doors open. Dust on the eye’s surface feels gritty and dry, and the urge is to rub with a glove that’s already dirty.`,
      },
      {
        list: [
          `Wear glasses or safety glasses when you open bales or bed stalls.`,
          `Work upwind of the dust when there’s any air movement at all.`,
          `Keep a clean rag or paper towels somewhere dry for wiping your face, not your gloves.`,
          `If a particle gets in, blink and let tears move it, or rinse with clean water. Don’t rub.`,
        ],
      },
      { h: 'Steam, hot water and the milking parlor' },
      {
        p: `The parlor is often the warmest, wettest place on the farm in January, with hot wash water and steam from the pipeline and equipment. Moving from that warm, steamy room to a cold barn or an icy yard is a big swing for your eyes several times a shift. Sanitizers and cleaners used on equipment and in the wash routine can also irritate if they splash. Read each product’s label for handling, and if anything splashes into your eye, rinse right away with plenty of clean water, follow that label’s first-aid instructions and get medical help.`,
      },
      { h: 'Cold wind between buildings' },
      {
        p: `Walking from the house to the barn, scraping the yard or hauling feed means facing winter wind with eyes that may already be irritated. Cold wind dries the tear film fast and makes eyes water. A cap with a brim, a scarf or neck gaiter pulled up, and glasses or wraparound sunglasses on bright snowy days cut most of it. Our guide on [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas.`,
      },
      { h: 'Early milkings and late checks' },
      {
        p: `Milking before dawn and checking on cows late at night means a lot of hours under artificial light and headlamps, plus tired eyes that blink less. Bright lamps pointed toward you make you squint, so aim lights at the work, not at eye level. If you keep records or watch herd software on a phone or tablet in the office, take short breaks to look across the barn.`,
      },
      { h: 'Using eye drops on a dairy farm' },
      {
        p: `Clean hands matter more on a farm than almost anywhere. Wash and dry your hands well, away from the parlor chemicals, before you touch your eyes. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}; many farmers tie the doses to the morning milking, the midday meal and evening chores. The label adds: {tip}.`,
      },
      {
        p: `Read the caution before starting: {warnings}. For storage, the label says: {storage}. A truck cab or an unheated barn in January will be far colder than that range, so keep the bottle in the house or an inside jacket pocket. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to the farm' },
      {
        p: `Quell ships from Brentwood, Tennessee, to rural addresses across the US, with tracking by email. Shipping is {shipping}, and {freeBottles} or more bottles ship free. A box left in a roadside mailbox in winter will get cold, so check it soon after it’s delivered. [Getting eye drops delivered to a rural address](/guides/eye-drops-delivered-to-a-rural-address) covers driveways and route numbers.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Irritation that fades after you leave the barn is one thing. Pain, a change in vision, or an eye that stays irritated after rinsing needs attention. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn in the dairy barn in winter?',
        a: 'Closed barns trap ammonia from manure and dust from hay, bedding and feed. Both can make eyes sting and water, especially first thing in the morning.',
      },
      {
        q: 'Can ammonia in a barn make your eyes water?',
        a: 'Yes. Ammonia builds up in still air and can make eyes sting and water. Opening a door or vent for a few minutes and keeping alleys clean can help.',
      },
      {
        q: 'Where should a dairy farmer keep eye drops in winter?',
        a: 'In the house or an inside jacket pocket. Quell’s label says to store it between 59°F and 86°F, so a truck cab or an unheated barn in winter is too cold.',
      },
      {
        q: 'What should I do if parlor cleaner splashes in my eye?',
        a: 'Rinse right away with plenty of clean water, follow the first-aid wording on that product’s label, and get medical help.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-sailors-and-boaters-in-winter',
    title: 'Dry eyes for sailors and boaters in winter',
    description:
      'Cold wind, spray, low sun glare and a heated cabin make winter on the water hard on eyes. How sailors and boaters can protect them, from dock to deck.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Winter boating dries eyes from every side. Cold wind and spray pull moisture off the eye, the low sun reflects off the water at eye level, and a heated cabin dries the air below deck. Wear wraparound sunglasses or goggles, rinse salt off your hands before touching your face, keep your eye drops in an inside pocket, and use them as the label directs.`,
      },
      { h: 'Why winter water is different' },
      {
        p: `Summer boating is mostly sun and warm breeze. In winter, the wind is colder and often stronger, the boat moves through spray that feels like ice, and the sun sits low even at midday. Fewer hours of daylight also mean more trips start or end in dim light. Our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers the basics of glare and spray in general; this one is about the cold months, when people still race, deliver boats, fish or simply enjoy an empty harbor.`,
      },
      { h: 'Cold wind and apparent wind' },
      {
        p: `On a moving boat the wind you feel combines the true wind and the boat’s own speed. Beating into a breeze or running a powerboat at speed puts a strong, cold flow straight onto your face. Cold, moving air strips moisture from the tear film quickly and makes eyes water, which blurs your view of the water.`,
      },
      {
        list: [
          `Wear wraparound sunglasses with a snug fit, or goggles if you’re in an open boat at speed.`,
          `Pull a neck gaiter or balaclava up, but leave room so glasses don’t fog.`,
          `A brimmed cap under a hood helps keep spray and wind off your eyes.`,
          `Turn your head away during gusts instead of squinting into them.`,
        ],
      },
      { h: 'Spray and salt' },
      {
        p: `In winter, spray coming over the bow can sting like sleet. On salt water, it leaves salt on your face, gloves and lashes, and wiping your eyes with a salty glove only adds to the irritation. Keep a small bottle of fresh water and a clean, dry cloth somewhere you can reach. Rinse your hands and face with fresh water before you touch your eyes. If spray hits your eyes directly, blink and let tears clear it, then rinse with fresh water if they keep stinging.`,
      },
      { h: 'Low sun and glare off the water' },
      {
        p: `A winter sun stays low over the horizon, so glare off the water comes straight at eye level for much of the day. Squinting narrows the eyes, slows blinking and tires them quickly. Polarized sunglasses cut reflected glare from the water’s surface, and a cap brim blocks light from above. Wipe salt off your lenses with fresh water and a soft cloth; dry-wiping salt crystals can scratch them.`,
      },
      { h: 'The heated cabin' },
      {
        p: `Below deck, a cabin heater can turn the space warm and dry within minutes, especially on a small boat. Moving between cold, wet wind on deck and warm, dry cabin air several times a trip is hard on your eyes. Keep the heater pointed away from your bunk and the chart table, crack a hatch or vent for fresh air when you can, and close your eyes for a few seconds when you come down from the cockpit.`,
      },
      { h: 'Winter boat work in the yard' },
      {
        p: `Plenty of winter boating happens on land. Sanding hulls, scraping bottom paint, grinding fiberglass and varnishing brightwork throw dust and fumes into the air, and shrink-wrapped boats trap both inside. Read each product’s label for handling, wear the eye protection it calls for, work with air moving away from your face, and take breaks outside the wrap.`,
      },
      { h: 'Putting in eye drops on a boat in the cold' },
      {
        list: [
          `Do it in the cabin or a sheltered corner of the cockpit, out of the wind.`,
          `Rinse salt off your hands with fresh water and dry them before you start.`,
          `Brace yourself against something solid; even a calm harbor has motion.`,
          `Sit, tilt your head back, pull the lower lid down, and squeeze one drop.`,
          `Recap the bottle right away so spray can’t reach the tip.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}. The panel also says: {tip}. Read this caution first: {warnings}.`,
      },
      {
        p: `For storage, the label says: {storage}. A cockpit locker in winter is often colder than 59°F, and a cabin near the heater can be warmer than 86°F. An inside jacket pocket, close to your body, keeps the bottle in range on deck. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'After the trip' },
      {
        p: `Once you’re back on the dock, rinse your face, gloves and sunglasses with fresh water. In the car, aim the heater vents at your feet and hands, not your face. If your eyes still feel dry at home, a humidifier in the bedroom and a break from screens help them recover. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more for raw winter days.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Stinging that settles after a rinse and a rest is common after a cold sail. Pain, sensitivity to light, or a change in vision isn’t, and neither is irritation that keeps returning. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when sailing in the cold?',
        a: 'Cold wind on a moving boat dries the tear film quickly, and eyes often respond by watering. Wraparound sunglasses or goggles and a brimmed cap cut most of the wind.',
      },
      {
        q: 'How do I protect my eyes from spray when boating in winter?',
        a: 'Wear snug wraparound sunglasses or goggles, keep a brimmed cap under your hood, and rinse salt off your hands and face with fresh water before touching your eyes.',
      },
      {
        q: 'Where should I keep eye drops on a boat in winter?',
        a: 'In an inside jacket pocket. Quell’s label says to store it between 59°F and 86°F, and a winter cockpit locker can be colder than that while a spot near the cabin heater can be warmer.',
      },
      {
        q: 'Can a boat cabin heater dry out your eyes?',
        a: 'Yes. A heater warms a small cabin fast and dries the air. Point it away from your bunk and chart table, and crack a hatch or vent for fresh air when you can.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-daughter-in-law',
    title: 'Christmas gifts for a daughter-in-law',
    description:
      'Thoughtful Christmas gifts for a daughter-in-law: how to choose, what to ask your son or daughter, and when a practical gift for dry eyes fits.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A good Christmas gift for a daughter-in-law reflects her own interests, not just her role in the family. Ask your son or daughter what she’s mentioned wanting, think about her work and daily routine, and choose something useful or personal. If she’s said her eyes feel dry from screens, travel or winter heat, a practical eye comfort gift can fit, but only if she’s brought it up.`,
      },
      { h: 'Start with what your son or daughter knows' },
      {
        p: `Your child sees her daily life up close: what she complains about, what she keeps meaning to buy, what she already owns three of. A quick, private question works better than guessing. Ask about something specific rather than “What does she want?” For example: “Is there anything she’s been putting off buying?” or “What does she do to relax on weekends?” Those answers lead to gifts that feel personal rather than generic.`,
      },
      { h: 'Gifts that show you know her' },
      {
        list: [
          `A book by an author she’s mentioned, with a note about why you chose it.`,
          `Something for her hobby: good garden gloves, a set of brushes, a cookbook from a cuisine she loves.`,
          `A framed photo of a moment she’ll remember, rather than one of you.`,
          `A class or experience in something she’s curious about, booked for a date that suits her.`,
          `Something from her hometown or a place she loves, if she’s far from it.`,
        ],
      },
      { h: 'Practical gifts for her daily routine' },
      {
        p: `Practical gifts work well when they solve a small, real problem. Think about where she spends her days:`,
      },
      {
        list: [
          `A long commute: an insulated travel mug, a comfortable neck pillow if she takes the train, or sunglasses that wrap around for bright mornings.`,
          `Screen-heavy work: a monitor stand, a soft desk lamp or a small desk humidifier for a dry office.`,
          `Shift work: a sleep mask and blackout curtains for daytime rest.`,
          `Travel: a clear zip pouch for liquids and a soft eye mask for flights.`,
          `Winter at home: a bedroom humidifier for heated rooms, with a note that it needs regular cleaning.`,
        ],
      },
      { h: 'Is it okay to give a daughter-in-law eye drops?' },
      {
        p: `Only if she’s already told you her eyes feel dry or tired and she’s the kind of person who appreciates practical gifts. Eye drops as a surprise can feel like a comment on her health, which isn’t the message you want. If she has mentioned it, a bottle of Quell can be a small, useful extra tucked in with a larger gift, not the main present. Quell’s label gives its Uses as: {uses}. It’s preservative-free and comes in a {size} bottle.`,
      },
      { h: 'Check one thing before you buy' },
      {
        p: `Quell’s label carries this caution: {warnings}. The formula contains emu oil, so if you don’t know whether she has an egg or bird allergy, ask your son or daughter first. If she wears contact lenses or uses other eye drops, the label doesn’t cover that, and she should ask her eye doctor or pharmacist. It also helps to mention the color in a card: {appearance}`,
      },
      { h: 'A gift from both of you, or just you?' },
      {
        p: `If you usually sign gifts from both parents-in-law, keep doing that. If one of you has a closer relationship with her, a small personal gift from that person on top of the joint gift can mean a lot. Avoid gifts that compare her to anyone else in the family, and skip anything that hints at change: diet books, cleaning gadgets or parenting advice.`,
      },
      { h: 'Shipping it to their house' },
      {
        p: `If you won’t see them in person, you can ship Quell directly to their address. Checkout lets you enter a different shipping address from your billing address, and the receipt and tracking come to your email. Shipping is {shipping}, or free on {freeBottles} or more bottles. We don’t promise a delivery date, and Christmas falls on a Friday this year, so order well before mid-December. Checkout doesn’t offer gift wrap or a gift message, so send a card separately. [Sending Quell as a gift](/guides/sending-quell-as-a-gift) walks through the steps.`,
      },
      { h: 'More ideas for the family' },
      {
        p: `If your own in-laws are on the list too, [Christmas gifts for a mother-in-law](/guides/christmas-gifts-for-a-mother-in-law) looks at the same relationship from the other direction. All of our holiday guides are on the [gifts and holidays page](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a daughter-in-law for Christmas?',
        a: 'Something tied to her own interests or daily routine: a book, a hobby item, an experience or a practical gift for her commute or workspace. Ask your son or daughter for specifics.',
      },
      {
        q: 'How do I find out what my daughter-in-law wants for Christmas?',
        a: 'Ask your son or daughter a specific question, such as what she’s been putting off buying or how she spends weekends. Those answers lead to more personal gifts.',
      },
      {
        q: 'Is it okay to give my daughter-in-law eye drops?',
        a: 'Only if she’s mentioned dry or tired eyes and appreciates practical gifts. Check the egg and bird allergy caution first, and make it a small extra rather than the main present.',
      },
      {
        q: 'Can I ship a Christmas gift straight to my son and daughter-in-law?',
        a: 'Yes. Enter their address under “Ship to” at checkout and your billing address on the payment page. The receipt and tracking go to your email, and no delivery date is promised, so order early.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-grown-nephew',
    title: 'Christmas gifts for a grown nephew',
    description:
      'Christmas gifts for an adult nephew, by stage of life: just starting out, deep in a career, gaming late, working outdoors, or starting a family.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `The easiest way to shop for a grown nephew is by stage of life. A nephew just out of school needs things for a first place; one deep into a career may want comfort for long hours; a gamer, a tradesman or a new dad each has different days. Pick something that makes his routine easier, and add a note that sounds like you.`,
      },
      { h: 'Just starting out' },
      {
        p: `A nephew in his first job and first apartment usually has a long list of things he hasn’t gotten around to buying. Practical gifts land well here:`,
      },
      {
        list: [
          `A good knife and cutting board, or a cast iron pan.`,
          `A toolkit with the basics: screwdrivers, a tape measure, a level and a hammer.`,
          `Quality bedding or blackout curtains if he works odd hours.`,
          `A desk lamp and a monitor stand for a home workspace.`,
          `A gift card to a hardware store or grocery delivery service.`,
        ],
      },
      { h: 'Deep in a demanding career' },
      {
        p: `A nephew who works long hours at a desk, in a hospital or on the road probably values comfort and time. Think about what he’d never buy himself: a good pair of noise-canceling headphones, a quality travel bag, a massage gift card, or a subscription to something he enjoys. If he spends hours on screens and has mentioned tired eyes, a small desk humidifier or an adjustable monitor arm makes a sensible addition.`,
      },
      { h: 'For the gamer or night owl' },
      {
        p: `Long gaming sessions mean hours of focus and fewer blinks. Gifts that suit a late-night setup include a comfortable chair cushion, a headset stand, a desk mat or LED bias lighting behind the monitor. A sleep mask helps when the session ends at dawn. Our guide to [Christmas gifts for a gamer](/guides/christmas-gifts-for-a-gamer) has more along these lines.`,
      },
      { h: 'For the nephew who works outdoors' },
      {
        list: [
          `Wraparound sunglasses for bright days and wind.`,
          `Insulated gloves that still let him use a phone.`,
          `A neck gaiter or balaclava for cold mornings.`,
          `A heated jacket or vest for job sites in winter.`,
          `A thermos that keeps coffee hot through a long shift.`,
        ],
      },
      { h: 'For a new dad' },
      {
        p: `If your nephew just became a father, gifts that ease the first year are welcome: a meal delivery gift card, a coffee subscription, a comfortable robe or an offer of a babysitting night. Gifts for the baby are lovely, but something just for him says you noticed he’s in the middle of a big change too. [Christmas gifts for new parents](/guides/christmas-gifts-for-new-parents) has more ideas for the household.`,
      },
      { h: 'Can you give a nephew eye drops?' },
      {
        p: `If he’s told you his eyes feel dry from screens, travel or winter air, a bottle of Quell can be a practical extra alongside something bigger. Without that, skip it; a medicine he didn’t ask for rarely feels like a gift. Quell’s label gives its Uses as: {uses}, and its directions say: {directions}. Before you buy, check this caution with him or his partner: {warnings}. If he wears contact lenses or uses other eye drops, the label doesn’t cover that, so he should check with his eye doctor or pharmacist.`,
      },
      { h: 'Shipping to his apartment' },
      {
        p: `You can ship straight to his address by entering it under “Ship to” at checkout and your own billing address on the payment page. If he lives in an apartment with package lockers or a mailroom, include the unit number. Shipping is {shipping}, and {freeBottles} or more bottles ship free. There’s no gift wrap or gift message at checkout, so send a text or card so he knows the box is from you. No delivery date is promised, so order early in December.`,
      },
      { h: 'Time together instead of a thing' },
      {
        p: `For a lot of grown nephews, the gift they remember is an afternoon, not an object. Tickets to a game you can go to together, a round of golf, a day of fishing in the spring, or a standing offer to buy lunch the next time he’s in town all say you want to keep up with him as an adult. If he lives far away, a gift card for a meal near his place plus a promise to call while he uses it is a practical stand-in. Put the plan in writing inside the card, with a date if you can, so it doesn’t drift into “someday.”`,
      },
      { h: 'A note goes a long way' },
      {
        p: `Grown nephews often say they don’t need anything, and many mean it. A short handwritten note about a memory you share, or something you’re proud of him for, can matter more than the gift itself. Browse more holiday ideas on the [gifts and holidays page](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a grown nephew for Christmas?',
        a: 'Think about his stage of life: practical home items for a first apartment, comfort gifts for a demanding career, gaming gear, outdoor work gear or something for a new dad.',
      },
      {
        q: 'What is a good Christmas gift for a nephew in his twenties?',
        a: 'Useful items for a first place, such as a toolkit, a good pan or bedding, or a gift card to a hardware or grocery store. Add a note that sounds like you.',
      },
      {
        q: 'Can I give my nephew eye drops for Christmas?',
        a: 'Only if he’s mentioned dry or tired eyes. Check the egg and bird allergy caution with him first, and if he wears contacts or uses other drops, he should ask his eye doctor or pharmacist.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-grown-niece',
    title: 'Christmas gifts for a grown niece',
    description:
      'Christmas gifts for an adult niece, whether you see her every week or once a year. Ideas by how well you know her now, plus shipping across the country.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `For a grown niece, the right gift depends on how well you know her life right now. If you see her often, choose something tied to a current interest or routine. If you only see her at holidays, ask a parent or sibling what she’s into, or pick a quality everyday item with a personal note. A practical eye comfort gift fits only if she’s mentioned dry eyes.`,
      },
      { h: 'If you see her often' },
      {
        p: `You probably know what she’s working on, what she complains about and what makes her laugh. Use that. If she’s training for a race, get gear for it. If she just started a new job in an office with dry air, a desk humidifier or a monitor stand helps. If she mentioned a restaurant she wants to try, a gift card there shows you listened.`,
      },
      { h: 'If you only see her at holidays' },
      {
        p: `It’s easy to shop for the niece you remember rather than the woman she is now. Ask her parent or a sibling one or two specific questions: what she does on weekends, where she’s living, whether she has a new job. Then choose from that rather than guessing. When in doubt, a high-quality version of something everyone uses, like a good umbrella, a cozy throw or a set of nice pens, is better than a novelty item.`,
      },
      { h: 'Ideas by what her days look like' },
      {
        list: [
          `Graduate school or long study hours: a reading lamp, a comfortable desk chair cushion or a quality backpack.`,
          `Healthcare or shift work: compression socks, a sleep mask and blackout curtains for daytime rest.`,
          `A creative job or hobby: art supplies, a sketchbook or a class in something new.`,
          `A lot of travel: a sturdy carry-on, a clear pouch for liquids or a neck pillow.`,
          `Working from home: a monitor arm, a small humidifier for winter, or a mug warmer.`,
          `Outdoors in all weather: wraparound sunglasses, a warm hat or gloves that work with a phone.`,
        ],
      },
      { h: 'For the niece far away' },
      {
        p: `If she lives across the country, a gift that arrives by mail with a phone call or video chat on Christmas Day can mean as much as a visit. Some families start a tradition: the same book for both of you so you can talk about it, or a recipe you both cook and compare. Small, lightweight gifts are easier to ship and less likely to be damaged.`,
      },
      { h: 'Is it okay to give a niece eye drops?' },
      {
        p: `Only if she’s told you her eyes feel dry from screens, heated rooms or travel. Then a bottle of Quell can be a small, practical addition to a bigger gift. Its label gives the Uses as: {uses}, and it comes in a {size} bottle that fits in a stocking. If she wears contact lenses, the label doesn’t give directions for them, so she should ask her eye doctor before using any drop with lenses.`,
      },
      { h: 'Check the label first' },
      {
        p: `Quell’s label carries this caution: {warnings}. If you don’t know whether she has an egg or bird allergy, ask. If she uses other eye drops, the label doesn’t cover combining them, so she should ask her pharmacist. It also helps to mention in a card that the drops look milky brown on purpose. Our guide on [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution.`,
      },
      { h: 'Shipping a gift to her' },
      {
        p: `Enter her name and address under “Ship to” at checkout and your own billing address on the payment page. Include her unit number if she lives in an apartment. Shipping is {shipping}, or free on {freeBottles} or more bottles, and the tracking email comes to you. No delivery date is promised, so order early in December, especially if she lives far from Tennessee. Checkout has no gift wrap or message option, so text her that something is on the way. [Ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) has more.`,
      },
      { h: 'If you’re the aunt or uncle she calls' },
      {
        p: `Some aunts and uncles are the relative a niece turns to for advice. For that relationship, an experience together, like a concert, a cooking class or a day trip, may be the gift she remembers. For more family ideas, see [Christmas gifts for an aunt](/guides/christmas-gifts-for-an-aunt) and the full [gifts and holidays page](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a grown niece for Christmas?',
        a: 'Choose something tied to her current life, such as her job, hobby or living situation. If you don’t know her well right now, ask a parent or sibling a specific question first.',
      },
      {
        q: 'What do you buy a niece you only see at holidays?',
        a: 'Ask her parent or a sibling what she does on weekends or where she’s working now, then pick from that. A quality everyday item with a personal note is a good fallback.',
      },
      {
        q: 'Can I send my niece eye drops for Christmas?',
        a: 'If she’s mentioned dry eyes, yes. Check the egg and bird allergy caution with her first, and if she wears contact lenses or uses other drops, she should ask her eye doctor or pharmacist.',
      },
      {
        q: 'How early should I order a Christmas gift for my niece in another state?',
        a: 'Early in December or sooner. Quell doesn’t promise a delivery date, and Christmas falls on Friday, December 25, 2026, so leave extra time.',
      },
    ],
  },
]
