import type { Guide } from '@/lib/guide-types'
export const DAILY_20261119_D: Guide[] = [
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-yuba-city-ca:
   * - https://data.rcc-acis.org/StnData, sid MYV, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/MYV.json and .daily-job/d/MYV-extra.json).
   *   MARYSVILLE AIRPORT (ASOS), elev 62 ft. Annual precip 20.07 in (sum of
   *   months); Jan 3.81, Feb 3.65, Dec 3.68; Jun 0.28, Jul 0.00, Aug 0.05,
   *   Sep 0.11. Normal highs Jun 90.1 F, Jul 96.2 F, Aug 94.5 F, Sep 89.6 F,
   *   Dec 55.4 F, Jan 55.5 F; normal lows Jul 60.7 F, Dec 37.7 F, Jan 38.2 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-yuba-city-ca',
    title: 'Dry eye relief in Yuba City, California',
    description:
      'July highs near 96°F and a normal July rainfall of zero inches. What Yuba City’s dry season does to your eyes, and practical relief through the year.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Yuba City means planning around a long, rainless summer. NOAA’s normals for the airport across the Feather River put July’s rainfall at zero and its average high near 96°F, so eyes lose moisture quickly outdoors and in air-conditioned rooms. Wear wraparound sunglasses in the orchards, keep vents off your face, blink fully at screens and use a lubricating drop as its label directs.`,
      },
      { h: 'Yuba City weather by the numbers' },
      {
        p: `Yuba City has no first-order weather station of its own. The closest long record is NOAA’s 1991–2020 climate normals for Marysville Airport, the ASOS station at about 62 feet on the Yuba County side of the Feather River, as published through the National Weather Service’s NOWData. The two towns share a valley floor, so the record describes Yuba City’s seasons well:`,
      },
      {
        list: [
          `About 20 inches of precipitation in a normal year, nearly all of it between November and March.`,
          `January is the wettest month at 3.81 inches, with December (3.68) and February (3.65) close behind.`,
          `July’s normal rainfall is 0.00 inches, August’s is 0.05 and September’s 0.11.`,
          `Average highs reach 90.1°F in June, 96.2°F in July, 94.5°F in August and 89.6°F in September.`,
          `Winter highs hover around 55°F, and normal lows bottom out near 38°F in December and January.`,
        ],
      },
      { h: 'Four months with almost no rain' },
      {
        p: `From June through September the normals add up to less than half an inch of rain. That matters for your eyes because the tear film is thin to begin with: a layer of oil over water over mucus, renewed every time you blink. Hot, dry air pulls water out of it between blinks, and a valley summer offers months of that air in a row. The drying doesn’t let up after a storm the way it might somewhere with summer thunderstorms, because there usually isn’t one.`,
      },
      {
        p: `July nights cool to about 61°F while afternoons run near 96°F, a swing of roughly 35 degrees. Early mornings are the gentlest time to be outside, whether you’re walking the levee path, coaching a youth game or running errands on Colusa Avenue before the heat builds.`,
      },
      { h: 'Orchards, harvest dust and the drive to work' },
      {
        p: `Sutter County’s orchards and rice fields put plenty of people outside or on farm roads during the driest months. Late-summer harvest stirs up dust, and an open tractor cab or a pickup with the windows down sends warm air straight across the eyes. If your job keeps you in the rows:`,
      },
      {
        list: [
          `Wear close-fitting safety glasses or wraparound sunglasses, which block both dust and moving air.`,
          `Rinse dusty hands before touching your face or opening an eye drop bottle.`,
          `Point the truck’s vents at your chest or the floor, not your face.`,
          `Take short breaks in the shade and give your eyes a few slow, complete blinks.`,
          `Keep a clean cloth in the cab for sunglasses so you aren’t tempted to rub your eyes.`,
        ],
      },
      {
        p: `Commuters crossing the Fifth Street or Tenth Street bridge to Marysville, or driving to Sacramento, face the same air from the dashboard. Long highway drives also slow blinking, since your eyes stay fixed on the road. [Why your eyes feel dry in the car](/guides/why-do-my-eyes-feel-dry-in-the-car) explains what the car’s climate system does.`,
      },
      { h: 'Air conditioning from late spring into fall' },
      {
        p: `With highs at or near 90°F from June to September, air conditioners run for a third of the year. Cooled air holds less water, and a vent blowing toward a desk, a couch or a pillow speeds evaporation from the eye’s surface. Angle the louvers away from where you sit, keep ceiling fans on low in bedrooms, and consider a small humidifier in the room where you spend the most time. If you work at a computer, a few deliberate full blinks each time you finish a task help spread the tear film evenly again. [Screens and your tear film](/guides/screens-and-your-tear-film) has more on why screens slow the blink.`,
      },
      { h: 'Rainy winters and heated rooms' },
      {
        p: `Winter turns the pattern around. December through February bring most of the year’s rain, and highs only reach the mid-50s. The outdoor air is damper, but heaters run on cool mornings, and warming air indoors without adding moisture lowers its relative humidity. A space heater aimed at your feet rather than your face, and a humidifier in the bedroom, cover most of it.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. For dosing it says: {directions}. While using it: {tip}.`,
      },
      {
        p: `The label also carries a caution: {warnings}. Storage reads: {storage}. A truck cab parked in a July orchard can climb far past that upper limit, so carry the bottle in a lunch cooler or bring it inside. The [Drug Facts page](/drug-facts) shows the whole panel.`,
      },
      { h: 'Ordering Quell in Yuba City' },
      {
        p: `We ship from Brentwood, Tennessee, to Yuba City, Live Oak, Sutter and every other US address. You check out as a guest, standard shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so reorder before the bottle is empty. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Local details are on the [Yuba City page](/eye-drops/yuba-city-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop and a cooler room don’t explain everything. {stopUse} An eye doctor can find the cause of dryness that keeps coming back and decide what to do about it. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Does it rain in Yuba City in the summer?',
        a: 'Hardly at all. NOAA’s 1991–2020 normals for nearby Marysville Airport list July rainfall at 0.00 inches, August at 0.05 and September at 0.11.',
      },
      {
        q: 'How hot does Yuba City get in July?',
        a: 'The normal July high at Marysville Airport, the closest NOAA station, is 96.2°F, with normal lows near 61°F. August averages 94.5°F.',
      },
      {
        q: 'Why do my eyes feel dry working in a Sutter County orchard?',
        a: 'Hot, dry air, harvest dust and wind from an open cab all speed evaporation from the tear film. Close-fitting eyewear and vents aimed away from your face help, and dryness that persists is worth an eye doctor’s visit.',
      },
      {
        q: 'Can I get Quell shipped to Yuba City?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Yuba City and the rest of Sutter County, with tracking by email.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-longview-tx:
   * - https://data.rcc-acis.org/StnData, sid GGG, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/GGG.json and .daily-job/d/GGG-extra.json).
   *   LONGVIEW E TX RGNL AP, elev 352 ft. Annual precip 45.31 in (sum of
   *   months); May 4.77 (wettest), Dec 4.52, Mar 4.45; Jul 2.46 (driest),
   *   Aug 2.64. Normal highs Jul 94.4 F, Aug 94.7 F, Jun 90.6 F, Jan 58.3 F;
   *   normal lows Jan 36.7 F, Dec 38.5 F, Jul 73.5 F, Aug 72.8 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-longview-tx',
    title: 'Dry eye relief in Longview, Texas',
    description:
      'Longview’s August highs average 94.7°F and nights stay near 73°F. Why East Texas air still dries your eyes indoors, and what helps day to day.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Longview has less to do with the outdoor air than with the air you live in. NOAA’s normals show humid, rainy weather, about 45 inches a year, yet August highs near 95°F keep air conditioners running for months, and plant floors, trucks and offices blow cooled air across the eyes. Redirect vents, blink fully at screens, wear eye protection outdoors and use a lubricating drop exactly as labeled.`,
      },
      { h: 'Longview’s climate in NOAA’s record' },
      {
        p: `NOAA’s 1991–2020 climate normals for East Texas Regional Airport, at about 352 feet in Gregg County and published through the National Weather Service’s NOWData, describe a wet, warm Piney Woods climate:`,
      },
      {
        list: [
          `About 45.3 inches of precipitation in a normal year.`,
          `May is the wettest month at 4.77 inches, followed by December at 4.52 and March at 4.45.`,
          `July is the driest at 2.46 inches, with August at 2.64.`,
          `Normal highs reach 94.4°F in July and 94.7°F in August, and the June average is 90.6°F.`,
          `Summer nights stay warm, with normal lows near 73.5°F in July.`,
          `January is the coolest month, with highs near 58°F and lows near 37°F.`,
        ],
      },
      { h: 'Why are my eyes dry if East Texas is so humid?' },
      {
        p: `Muggy air outside doesn’t reach your eyes for most of a Longview summer day. When the high is 94°F and the low barely drops under 74°F, you spend the hours in cooled air: the house, the truck, the store, the shift. An air conditioner pulls water out of the air as it cools it, and a vent pointed at your face moves that drier air across the tear film all afternoon. The effect is the same as a breezy desert day, only it comes out of a dashboard. [Why your eyes can be dry when it’s humid](/guides/why-are-my-eyes-dry-when-it-is-humid) walks through it.`,
      },
      {
        list: [
          `Aim the car’s vents at your chest and hands, and use the recirculate setting less on long drives.`,
          `Point office and bedroom vents away from where your head rests.`,
          `Run ceiling fans on a low setting at night, or turn them off once the room has cooled.`,
          `Step outside for a few minutes in the morning before the heat builds; the air is easier on your eyes than the vent.`,
        ],
      },
      { h: 'Plant floors, rail yards and shift work' },
      {
        p: `Longview has long been a manufacturing town, with chemical production, metal fabrication and rail work alongside the oil and gas trade that grew up around the East Texas field. Many of those jobs mean hours under big fans or in climate-controlled control rooms, sometimes on rotating shifts. Concentration on gauges, screens or fine work slows blinking, and fans add moving air on top of it.`,
      },
      {
        list: [
          `Wear the safety glasses your site requires; side shields block fan air as well as debris.`,
          `Position a personal fan to blow on your body rather than across your face.`,
          `On night shifts, pause at each break to close your eyes for a few seconds and blink slowly before going back to the screen.`,
          `Wash your hands before touching an eye drop bottle on a dusty or greasy floor.`,
        ],
      },
      { h: 'Weekends on the lakes and the Sabine' },
      {
        p: `Lake Cherokee, Lake O’ the Pines and the Sabine River draw boats and anglers from Longview most of the year. Wind across open water speeds evaporation from the eye, and glare off the surface makes people squint, which cuts down on full blinks. Polarized wraparound sunglasses cut both. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers the rest, including where to keep a bottle on board.`,
      },
      { h: 'Winter heat and campus study' },
      {
        p: `December is Longview’s second-wettest month, but it’s also when furnaces and space heaters come on during cold snaps, with lows near 37°F in January. Heated indoor air loses relative humidity fast. Students at LeTourneau University and Kilgore College’s Longview campus meet that air during late-fall finals, often at a laptop for hours. Keep heat vents off your face and take short screen breaks.`,
      },
      { h: 'Quell’s label, through the panel' },
      {
        p: `Quell is a preservative-free lubricating drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section says: {uses}. The directions read: {directions}. One handling instruction: {tip}.`,
      },
      {
        p: `The panel’s caution is worth reading before a first order: {warnings}. Store it as printed: {storage}. A truck parked in an August lot gets far hotter than that, so keep the bottle in a lunch bag or inside with you. The complete label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Longview' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Longview, White Oak, Hallsville and anywhere else in the US. Guest checkout is available, shipping is {shipping}, and an order of {freeBottles} or more bottles ships free. You’ll get tracking by email, though we don’t promise a delivery date. Unopened bottles are refundable within {returnDays} days of delivery, and you keep them. The [Longview page](/eye-drops/longview-tx) and the [Texas page](/eye-drops/state/texas) have more.`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `{stopUse} Dryness that keeps returning even after you’ve changed the vents and the habits deserves a proper exam; an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What is the wettest month in Longview, Texas?',
        a: 'May, at 4.77 inches in NOAA’s 1991–2020 normals for East Texas Regional Airport. December follows at 4.52 inches, and July is the driest month at 2.46.',
      },
      {
        q: 'How hot are summer nights in Longview?',
        a: 'Warm. Normal July lows at East Texas Regional Airport are about 73.5°F, which is why air conditioning in Longview often runs around the clock in summer.',
      },
      {
        q: 'Can plant fans dry out your eyes on a shift?',
        a: 'Yes, moving air speeds evaporation from the tear film, and focused work slows blinking. Aim fans at your body, wear the safety glasses with side shields your site requires, and blink fully at breaks.',
      },
      {
        q: 'Does Quell ship to Longview, Texas?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Longview and every other US address, and tracking arrives by email.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-tyler-tx:
   * - https://data.rcc-acis.org/StnData, sid TYR, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/TYR.json and .daily-job/d/TYR-extra.json).
   *   TYLER POUNDS FIELD, elev 523 ft. Annual precip 42.10 in (sum of months);
   *   Jun 4.38 (wettest), Oct 4.31, May 4.07, Dec 4.03; Jul 2.10 (driest),
   *   Aug 2.61. Normal highs Mar 69.9 F, Apr 76.6 F, Jul 94.4 F, Aug 94.9 F,
   *   Oct 78.9 F, Jan 57.9 F; normal lows Jan 37.4 F, Aug 73.8 F, Oct 56.5 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-tyler-tx',
    title: 'Dry eye relief in Tyler, Texas',
    description:
      'Tyler’s gardens, rose fields and long hospital shifts meet 94.9°F August highs. NOAA’s Tyler numbers and day-to-day dry eye relief through the year.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Tyler follows the gardening calendar as much as the weather. NOAA’s normals put August highs near 95°F and July rainfall at about 2 inches, the year’s low, so summer eyes contend with sun, glare and air-conditioned rooms. Garden in the early morning with sunglasses on, keep vents and fans off your face, blink fully during long shifts and screen work, and use a lubricating drop as its label directs.`,
      },
      { h: 'What NOAA’s Tyler record shows' },
      {
        p: `The figures below are NOAA’s 1991–2020 climate normals for Tyler Pounds Regional Airport, west of downtown at about 523 feet, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `About 42.1 inches of precipitation in a normal year.`,
          `June is the wettest month at 4.38 inches, and October is nearly as wet at 4.31.`,
          `July is the driest at 2.10 inches, then August at 2.61.`,
          `Normal highs climb from 69.9°F in March to 94.4°F in July and 94.9°F in August.`,
          `October cools to a normal high near 79°F, with lows around 56.5°F.`,
          `January highs average near 58°F and lows near 37°F.`,
        ],
      },
      { h: 'Azalea season and spring wind' },
      {
        p: `Tyler’s spring brings the azalea trails through the older neighborhoods and plenty of yard work, with March highs near 70°F and April’s near 77°F. Days spent outdoors in the sun and breeze mean more evaporation from the eye than a day at a desk. Raking, mowing and blowing leaves also kick debris into the air, and the instinct to rub a gritty eye only adds irritation. Close-fitting sunglasses and a hat brim cut both wind and glare, and a hand wash before you touch your face keeps garden dirt out.`,
      },
      { h: 'Rose fields in the heat' },
      {
        p: `The city has called itself the Rose Capital, and rose growing, nursery work and the Tyler Rose Garden all keep people outside through the hottest months. A July afternoon at 94°F in an open field brings sun from above and glare from bright paths and greenhouse roofs. Squinting into that light narrows the eyes and shortens blinks.`,
      },
      {
        list: [
          `Do the heaviest field or garden work before about ten in the morning, when it’s cooler.`,
          `Wear wraparound sunglasses, or safety glasses with tinted lenses if your job requires eye protection.`,
          `Keep a clean, dry cloth for sweaty hands before you touch your eyes.`,
          `Go indoors for breaks, but sit away from the air conditioner’s outlet.`,
        ],
      },
      { h: 'Long shifts in a medical town' },
      {
        p: `Tyler is one of East Texas’s main medical centers, and a large share of the city works long clinical and office shifts in buildings that are climate controlled year-round. Charting at a workstation, reading monitors and working under bright lights all reduce blinking. Twelve-hour nights in particular stretch the time between rests for the eyes.`,
      },
      {
        list: [
          `After each round of charting, look across the room for a moment and blink slowly a few times.`,
          `Lower monitor brightness to match the room, and set the screen slightly below eye level so your lids cover more of the eye.`,
          `Keep a bottle in your locker or bag rather than your car, where summer heat builds.`,
          `On a break, close your eyes for twenty or thirty seconds instead of scrolling a phone.`,
        ],
      },
      { h: 'October’s festival and the fall rains' },
      {
        p: `October is both the Texas Rose Festival month and Tyler’s second-wettest, with highs near 79°F. Parade crowds and outdoor events mean hours in the sun, though the air is milder than in August. Students at UT Tyler and Tyler Junior College are deep into midterms at the same time, and studying at a screen reduces blinking no matter the weather. [Dry eyes while studying](/guides/dry-eyes-while-studying) has a routine for long sessions.`,
      },
      { h: 'Reading Quell’s label' },
      {
        p: `Quell is a preservative-free lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, the Uses are: {uses}. As for dosing: {directions}. And for handling: {tip}.`,
      },
      {
        p: `Before ordering, read the caution: {warnings}. The storage line is {storage}, which a car parked at a rose farm in August can exceed, so keep the bottle in the shade or bring it along. All of it appears on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Tyler' },
      {
        p: `We ship from Brentwood, Tennessee, to Tyler, Whitehouse, Lindale and every other US address. Checkout works as a guest, shipping is {shipping}, and {freeBottles} bottles or more ship free. Tracking arrives by email; no arrival date is promised, so order before you run out. An unopened bottle is refundable within {returnDays} days of delivery, with nothing to mail back. See the [Tyler page](/eye-drops/tyler-tx) and the [Texas page](/eye-drops/state/texas) for local details.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `{stopUse} If your eyes stay dry after a season of adjusting fans, sunglasses and screen habits, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Tyler, Texas?',
        a: 'July, with 2.10 inches of precipitation in NOAA’s 1991–2020 normals for Tyler Pounds Regional Airport. June is the wettest at 4.38 inches.',
      },
      {
        q: 'How do I protect my eyes while gardening in Tyler in summer?',
        a: 'Work early in the morning, wear wraparound sunglasses or tinted safety glasses, and wash your hands before touching your eyes. August highs average near 95°F at the airport.',
      },
      {
        q: 'Why do my eyes get dry during hospital shifts?',
        a: 'Charting and reading monitors slow your blinking, and climate-controlled air dries the tear film between blinks. Short breaks to look away and blink slowly help, and lasting dryness belongs with an eye doctor.',
      },
      {
        q: 'Can I order Quell to Tyler, Texas?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Tyler and the rest of Smith County, and to any US address, with tracking by email.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-iowa-city-ia:
   * - https://data.rcc-acis.org/StnData, sid IOW, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/IOW.json and .daily-job/d/IOW-extra.json).
   *   IOWA CITY MUNICIPAL AP, elev 652 ft. Annual precip 35.68 in (sum of
   *   months); Jan 1.04 (driest), Feb 1.21, Dec 1.45; Jun 5.29 (wettest),
   *   May 4.48. Normal highs Jan 30.9 F, Feb 35.5 F, Jul 85.8 F, Sep 77.5 F,
   *   Oct 64.1 F, Nov 49.2 F; normal lows Jan 14.6 F, Feb 18.5 F, Dec 20.1 F,
   *   Nov 30.4 F, Jul 65.8 F. Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-iowa-city-ia',
    title: 'Dry eye relief in Iowa City, Iowa',
    description:
      'Iowa City’s January lows average 14.6°F, and the heat runs from fall into spring. Dry eye relief for campus, hospital and home, with NOAA’s numbers.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Iowa City is mostly about the heating season. NOAA’s normals put January lows near 15°F and January precipitation at about an inch, the year’s smallest, so furnaces dry the indoor air for months. Keep a humidifier running at home, sit away from heat registers in libraries and lecture halls, blink fully during long reading or screen sessions, and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'Iowa City’s seasons in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Iowa City Municipal Airport, on the south side of town at about 652 feet and published through the National Weather Service’s NOWData, track a full four-season year:`,
      },
      {
        list: [
          `About 35.7 inches of precipitation in a normal year.`,
          `January is the driest month at 1.04 inches, with February at 1.21 and December at 1.45.`,
          `June is the wettest at 5.29 inches, and May brings 4.48.`,
          `Normal January highs are 30.9°F and lows 14.6°F; February lows average 18.5°F.`,
          `Summer peaks in July, with highs near 86°F and lows near 66°F.`,
          `By November, normal highs are down to about 49°F and lows to about 30°F.`,
        ],
      },
      { h: 'Why do my eyes feel so dry in an Iowa City winter?' },
      {
        p: `Cold air can’t hold much water to begin with. When a furnace warms 15°F outdoor air to 70°F indoors without adding moisture, its relative humidity drops steeply, and the tear film evaporates faster between blinks. Iowa City’s driest months for precipitation, December through February, line up with the months the heat runs hardest. Older houses and apartments near downtown often have radiators or forced-air registers right under a window seat or desk, exactly where people sit to read.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Move your chair or bed a few feet away from registers and radiators.`,
          `Turn the thermostat down a few degrees at night; cooler rooms lose less moisture from the eye.`,
          `Use a scarf or neck gaiter pulled up on windy walks so cold air isn’t driven across your face.`,
        ],
      },
      { h: 'Libraries, the workshop tradition and long reading' },
      {
        p: `Iowa City is a UNESCO City of Literature and the home of the University of Iowa, so a lot of its population reads for a living: students, faculty, writers and editors. Reading, whether on paper or a screen, cuts blinking sharply, and incomplete blinks leave the lower part of the eye uncovered. In a warm, dry reading room the effect builds over an afternoon.`,
      },
      {
        list: [
          `At the end of each chapter or section, close your eyes gently for a few seconds.`,
          `Hold books and tablets slightly below eye level, so your lids cover more of the eye.`,
          `Choose a seat away from the room’s supply vents.`,
          `During finals in December, schedule screen breaks the way you schedule study blocks.`,
        ],
      },
      {
        p: `[Dry eyes during finals week](/guides/dry-eyes-during-finals-week) has a fuller plan for the December crunch, and [Dry eyes from an e-reader or tablet](/guides/dry-eyes-from-an-e-reader) helps with long reading on a device.`,
      },
      { h: 'Hospital and clinic shifts' },
      {
        p: `The university’s hospitals and clinics make health care one of Iowa City’s largest lines of work. Clinical staff spend long hours under bright lights, at charting screens and in buildings with tightly controlled ventilation. If that’s your job, give your eyes the same breaks you’d give your back: look up and across the room between patients, blink slowly, and keep your eye drop bottle in a clean pocket or locker rather than loose in a scrub pocket full of pens.`,
      },
      { h: 'Game days at Kinnick and fall on the river' },
      {
        p: `Hawkeye football fills Kinnick Stadium on fall Saturdays, and by November normal highs are near 49°F with lows around 30°F. Hours in an open stadium in cold, moving air dry the eyes, and so does tailgating beside a grill or fire pit. Sunglasses or clear glasses help on bright or windy days. Earlier in the fall, trails along the Iowa River and around Coralville Lake are easier on the eyes in the morning, when the wind is often lighter. [Dry eyes at an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) has more for late-season games.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its panel lists the Uses as: {uses}. Directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `Note the label’s caution: {warnings}. Store it as the panel states: {storage}. A car left outside through a January night in Iowa City gets far colder than that range, so keep the bottle in your bag or coat and bring it in. Our [Drug Facts page](/drug-facts) has every line.`,
      },
      { h: 'Ordering Quell in Iowa City' },
      {
        p: `We ship from Brentwood, Tennessee, to Iowa City, Coralville, North Liberty and anywhere else in the US. No account is needed; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised, so winter orders are worth placing early. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Iowa City page](/eye-drops/iowa-city-ia) and the [Iowa page](/eye-drops/state/iowa) have more.`,
      },
      { h: 'When to book an eye exam' },
      {
        p: `{stopUse} Dryness that comes back every winter despite a humidifier and better habits is worth an appointment; an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Iowa City get in January?',
        a: 'NOAA’s 1991–2020 normals for Iowa City Municipal Airport put January highs at 30.9°F and lows at 14.6°F, the coldest month of the year.',
      },
      {
        q: 'Why do my eyes dry out in University of Iowa libraries?',
        a: 'Reading cuts your blink rate, and heated indoor air in winter has low relative humidity. Sitting away from vents, holding material below eye level and pausing to blink at each section break all help.',
      },
      {
        q: 'Do eye drops freeze in a car in Iowa City?',
        a: 'Iowa City’s January nights average near 15°F, below Quell’s printed storage range. Keep the bottle with you or indoors rather than in a parked car.',
      },
      {
        q: 'Can I get Quell delivered to Coralville or North Liberty?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Coralville, North Liberty and Iowa City, with tracking by email.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-kalamazoo-mi:
   * - https://data.rcc-acis.org/StnData, sid AZO, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/AZO.json and .daily-job/d/AZO-extra.json).
   *   KALAMAZOO BATTLE CREEK INTL AP, elev 864 ft. Annual precip 33.23 in
   *   (sum of months); Feb 1.34 (driest), Dec 1.68, Jan 1.70; Oct 3.74
   *   (wettest), May 3.70, Aug 3.66. Normal highs Jan 31.5 F, Feb 34.7 F,
   *   Jul 83.1 F, Oct 61.3 F; normal lows Jan 18.1 F, Feb 19.5 F, Dec 24.2 F,
   *   Jul 62.0 F. Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-kalamazoo-mi',
    title: 'Dry eye relief in Kalamazoo, Michigan',
    description:
      'Kalamazoo winters average lows near 18°F, and February is the year’s driest month. NOAA’s figures and practical dry eye relief for home, campus and work.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Kalamazoo depends on getting through a long, gray heating season. NOAA’s normals put January lows near 18°F and February precipitation at 1.34 inches, the year’s lowest, so furnaces dry indoor air from fall to spring. Add moisture to the rooms you use most, keep heat off your face in the car and at your desk, blink fully at screens and use a lubricating drop as its label directs.`,
      },
      { h: 'Kalamazoo weather from the airport record' },
      {
        p: `NOAA’s 1991–2020 climate normals for Kalamazoo/Battle Creek International Airport, at about 864 feet on the city’s south side and published through the National Weather Service’s NOWData, show a climate shaped by the Great Lakes:`,
      },
      {
        list: [
          `About 33.2 inches of precipitation in a normal year.`,
          `February is the driest month at 1.34 inches, with December at 1.68 and January at 1.70.`,
          `October is the wettest at 3.74 inches, just ahead of May at 3.70.`,
          `January highs average 31.5°F and lows 18.1°F; February lows are about 19.5°F.`,
          `July is the warmest month, with highs near 83°F and lows near 62°F.`,
        ],
      },
      { h: 'Lake-effect gray and the long furnace season' },
      {
        p: `Southwest Michigan sits downwind of Lake Michigan, and winter often brings cloudy skies and lake-effect snow showers. Those clouds don’t make indoor air damp. With outdoor lows below 25°F from December through February, heat runs constantly, and air warmed from that cold has a low relative humidity once it’s inside. Many people notice dryness most first thing in the morning after a night beside a register, or at the end of a workday under a ceiling vent.`,
      },
      {
        list: [
          `Run a cool-mist or warm-mist humidifier in the bedroom, and empty and clean it often.`,
          `Close or redirect registers that blow toward a bed, a couch or a desk chair.`,
          `Set the car heater to the floor and windshield rather than the face vents.`,
          `If you use a space heater, aim it at your feet.`,
        ],
      },
      {
        p: `[Waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) has a fuller bedroom checklist.`,
      },
      { h: 'Lab benches, clean rooms and plant floors' },
      {
        p: `Kalamazoo and neighboring Portage have long been home to pharmaceutical and medical device manufacturing. That kind of work often happens in labs and clean rooms with steady, filtered airflow, in safety glasses or under a hood, with close attention to small details. Concentrated work slows the blink, and constant airflow carries moisture away from the eye.`,
      },
      {
        list: [
          `Follow your site’s rules on eye protection and on bringing personal items like drops into controlled areas.`,
          `Use breaks out of the gowning area to blink slowly and close your eyes for a few seconds.`,
          `Keep the bottle in a clean, sealed spot in your locker rather than in a lab coat pocket.`,
          `Wash your hands before using a drop, especially after handling chemicals or gloves.`,
        ],
      },
      { h: 'Students at Western and K College' },
      {
        p: `Western Michigan University and Kalamazoo College put thousands of students in heated residence halls and libraries from September to April. Dorm rooms are often small and warm, with the heat controlled centrally. A small humidifier, if housing rules allow it, and a desk set up so the screen sits slightly below eye level both help during finals. [Dry eyes in a dorm room in winter](/guides/dry-eyes-in-a-dorm-room-in-winter) goes through the room setup.`,
      },
      { h: 'Summer trails and the Kalamazoo River' },
      {
        p: `Warmer months are milder on the eyes, with July highs near 83°F. The Kalamazoo River Valley Trail, local lakes and the area’s many golf courses still mean hours of sun and breeze. Wraparound sunglasses help with glare off water, and on a bike ride along the trail, glasses that seal at the sides keep the breeze off.`,
      },
      { h: 'Quell and its Drug Facts panel' },
      {
        p: `Quell is a preservative-free lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses: {uses}. Directions, as printed: {directions}. The handling note: {tip}.`,
      },
      {
        p: `Read the caution first: {warnings}. Storage on the panel: {storage}. A Kalamazoo winter car falls well below that range, so bring the bottle inside instead of leaving it in the glove box. The whole label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Kalamazoo' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Kalamazoo, Portage, Parchment and every other US address. Guest checkout is available, standard shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, and winter storms can slow any package, so order before you run low. Unopened bottles are refundable within {returnDays} days of delivery without being sent back. More is on the [Kalamazoo page](/eye-drops/kalamazoo-mi) and the [Michigan page](/eye-drops/state/michigan).`,
      },
      { h: 'Know when it’s more than winter air' },
      {
        p: `{stopUse} If your eyes stay dry well into spring, after the heat is off, that’s a sign to book an exam; an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Kalamazoo?',
        a: 'February, at 1.34 inches of precipitation in NOAA’s 1991–2020 normals for Kalamazoo/Battle Creek International Airport. October is the wettest at 3.74 inches.',
      },
      {
        q: 'Why are my eyes dry in a Kalamazoo winter when it’s so cloudy?',
        a: 'Clouds and snow outside don’t humidify the air indoors. Furnace-heated air has low relative humidity, which speeds evaporation from the tear film, so a humidifier and vents aimed away from your face help.',
      },
      {
        q: 'Can I bring eye drops into a clean room at work?',
        a: 'That depends on your employer’s rules for controlled areas, so ask your supervisor. Keeping the bottle sealed in your locker and using it on breaks is a common approach.',
      },
      {
        q: 'Does Quell ship to Portage, Michigan?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Portage, Kalamazoo and any other US address, with tracking sent by email.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-dothan-al:
   * - https://data.rcc-acis.org/StnData, sid DHN, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/DHN.json and .daily-job/d/DHN-extra.json).
   *   DOTHAN REGIONAL AP, elev 368 ft. Annual precip 53.85 in (sum of months);
   *   Aug 6.17 (wettest), Jul 5.95, Jun 5.08; Oct 2.70 (driest), May 2.92,
   *   Sep 3.27. Normal highs Jun 91.3 F, Jul 93.3 F, Aug 92.0 F, Sep 88.4 F,
   *   Oct 80.8 F, Jan 61.7 F; normal lows Jan 39.8 F, Oct 56.9 F, Jul 72.7 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-dothan-al',
    title: 'Dry eye relief in Dothan, Alabama',
    description:
      'October is Dothan’s driest month, right in peanut harvest season. NOAA’s Wiregrass numbers and practical ways to ease dry eyes through the year.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Dothan comes down to two seasons: a long, air-conditioned summer and a dusty fall harvest. NOAA’s normals make October the driest month, at 2.70 inches, just as peanut fields are dug and picked. Wear close-fitting eyewear in the fields, keep air conditioning vents off your face from May to September, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'The Wiregrass climate, from NOAA' },
      {
        p: `These figures are NOAA’s 1991–2020 climate normals for Dothan Regional Airport, northwest of the city at about 368 feet, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `About 53.9 inches of precipitation in a normal year.`,
          `August is the wettest month at 6.17 inches, with July at 5.95 and June at 5.08.`,
          `October is the driest at 2.70 inches, and May is the second driest at 2.92.`,
          `Normal highs are 91.3°F in June, 93.3°F in July and 92.0°F in August.`,
          `October still averages a high near 81°F, with lows near 57°F.`,
          `January is mild, with highs near 62°F and lows near 40°F.`,
        ],
      },
      { h: 'Peanut harvest and a dry October' },
      {
        p: `Dothan calls itself the Peanut Capital of the World, and the farms around it dig, invert and combine peanuts in early fall. Digging lifts dry soil and plant debris into the air, and combines and wagons kick up more along field roads. That dust lands in October, the month with the least rain in NOAA’s record, so it doesn’t get washed out of the air as often. Afternoons near 81°F with sun on the fields add evaporation to the mix.`,
      },
      {
        list: [
          `Wear wraparound safety glasses or goggles when you’re on or near a digger or combine.`,
          `Keep the cab door closed and the cab filter clean if your equipment has one.`,
          `Rinse your hands and face before touching your eyes or opening a bottle.`,
          `Resist rubbing; blink several times, and if grit stays, rinse with clean water.`,
        ],
      },
      {
        p: `Folks who don’t farm still feel harvest season on Ross Clark Circle and the county roads, and at the National Peanut Festival each fall, where afternoons at the fairgrounds mean sun and dust. [Dry eyes for farmers](/guides/dry-eyes-for-farmers) covers the rest of the working year on the land.`,
      },
      { h: 'Why do my eyes feel dry in a humid Alabama summer?' },
      {
        p: `June through August are both the wettest and the hottest months in Dothan, with highs in the low 90s and frequent afternoon storms. The air outside is heavy, yet people spend most of a summer day in air-conditioned houses, trucks, schools and stores. Air conditioners remove moisture as they cool, and their vents move that air steadily. When a vent points at your face, evaporation from the eye speeds up whatever the weather outside is doing.`,
      },
      {
        list: [
          `Turn dashboard vents toward the windows or your chest.`,
          `Move your recliner or desk out of the path of a wall unit or ceiling vent.`,
          `Keep ceiling fans low in bedrooms at night.`,
          `Clean or replace air conditioning filters on the schedule the system’s maker sets, so dust isn’t recirculated.`,
        ],
      },
      { h: 'Flight lines and long shifts' },
      {
        p: `The Army’s aviation center sits northwest of Dothan, and many families in the area work around helicopters, flight simulators and maintenance hangars. Rotor wash and hangar fans move a lot of air, while simulators and instrument panels keep the eyes fixed and blinking less. Wear the eye protection your unit or employer requires, and use breaks to close your eyes for a few seconds. Dothan’s hospitals and distribution centers add their own long shifts under bright lights and steady ventilation.`,
      },
      { h: 'Quell’s label, as printed' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. On the Drug Facts panel, the Uses read: {uses}. Directions: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `There’s a caution to read before anyone in the family uses it: {warnings}. Storage: {storage}. A truck parked at the edge of a peanut field in September can heat up well beyond that range, so keep the bottle in a cooler or in the house. Our [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Ordering Quell in Dothan' },
      {
        p: `We ship from Brentwood, Tennessee, to Dothan, Headland, Ozark and every other US address. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email; we don’t promise a delivery date, so reorder with some room to spare. Unopened bottles are refundable within {returnDays} days of delivery, and you don’t ship them back. The [Dothan page](/eye-drops/dothan-al) and the [Alabama page](/eye-drops/state/alabama) have more.`,
      },
      { h: 'When a drop isn’t enough' },
      {
        p: `{stopUse} Dust that seems stuck in the eye after rinsing, or dryness that lingers after harvest is over, is a reason to see an eye doctor, who can find the cause and decide what to do. Read [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Dothan, Alabama?',
        a: 'October, with 2.70 inches of precipitation in NOAA’s 1991–2020 normals for Dothan Regional Airport. August is the wettest at 6.17 inches.',
      },
      {
        q: 'How do I keep peanut harvest dust out of my eyes?',
        a: 'Wear wraparound safety glasses or goggles near diggers and combines, keep the cab closed, and wash your hands before touching your eyes. Grit that won’t rinse out needs an eye doctor.',
      },
      {
        q: 'How hot does Dothan get in summer?',
        a: 'NOAA’s normals for Dothan Regional Airport put July highs at 93.3°F, with June at 91.3°F and August at 92.0°F. Summer nights stay near 73°F.',
      },
      {
        q: 'Does Quell ship to Dothan and the Wiregrass?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Dothan, Ozark, Headland and any other US address, with tracking by email.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-jackson-tn:
   * - https://data.rcc-acis.org/StnData, sid MKL, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/MKL.json and .daily-job/d/MKL-extra.json).
   *   JACKSON MCKELLAR-SIPES AP, elev 424 ft. Annual precip 53.93 in (sum of
   *   months); May 5.58 (wettest), Mar 5.55, Apr 5.12, Dec 5.01; Aug 3.53
   *   (driest), Sep 3.58, Oct 3.63. Normal highs Jul 90.0 F, Aug 89.5 F,
   *   Sep 83.9 F, Jan 48.7 F; normal lows Jan 29.3 F, Feb 32.5 F, Dec 32.2 F,
   *   Jul 69.0 F. Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-jackson-tn',
    title: 'Dry eye relief in Jackson, Tennessee',
    description:
      'Jackson’s driest stretch runs August through October, and January nights average 29°F. NOAA’s West Tennessee numbers and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Jackson starts in late summer. NOAA’s normals make August, September and October the driest months, each near 3.5 inches, as row-crop harvest and long drives on I-40 fill the calendar. Winter brings freezing nights and furnace heat. Keep vents off your face, wear eye protection in the fields, blink fully at screens and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'West Tennessee weather in NOAA’s record' },
      {
        p: `NOAA’s 1991–2020 climate normals for McKellar-Sipes Regional Airport, northwest of downtown Jackson at about 424 feet and published through the National Weather Service’s NOWData, show plenty of rain with a clear late-summer dip:`,
      },
      {
        list: [
          `About 53.9 inches of precipitation in a normal year.`,
          `May (5.58 inches) and March (5.55) are the wettest months, followed by April at 5.12 and December at 5.01.`,
          `August is the driest at 3.53 inches, then September at 3.58 and October at 3.63.`,
          `July highs average 90.0°F and August’s 89.5°F.`,
          `January is the coldest month, with highs near 49°F and lows near 29°F.`,
        ],
      },
      { h: 'Harvest season in cotton and soybean country' },
      {
        p: `Madison County and the counties around it grow cotton, soybeans and corn, and the harvest lands in the same months NOAA lists as Jackson’s driest. Combines and cotton pickers throw dust and plant fiber into warm, dry September air, and highs still average near 84°F. A cab with a blower aimed at your face does the rest.`,
      },
      {
        list: [
          `Close-fitting safety glasses or goggles keep chaff and lint out better than regular sunglasses.`,
          `Keep cab filters clean and the door shut while the machine is running.`,
          `Turn the cab blower toward your chest or the floor.`,
          `Carry a clean cloth and bottled water in the cab to rinse dusty hands before touching your eyes.`,
        ],
      },
      {
        p: `Gardeners, landscapers and anyone mowing a big yard in late summer can borrow the same habits on a smaller scale.`,
      },
      { h: 'Halfway between Memphis and Nashville' },
      {
        p: `Jackson sits on I-40 about midway between Memphis and Nashville, and a lot of its people drive one direction or the other for work, family or a game. Long interstate miles fix the eyes on the road and slow blinking, and the car’s climate system blows conditioned air the whole way. Pull off at a rest area or a gas stop every hour or two, close your eyes for a few seconds, and look into the distance before getting back on the road. Point dashboard vents away from your face, and keep sunglasses in the car for the westbound drive late in the afternoon. [Why your eyes feel dry in the car](/guides/why-do-my-eyes-feel-dry-in-the-car) goes into more detail.`,
      },
      { h: 'Factory floors and distribution work' },
      {
        p: `Manufacturing and distribution centers are major employers in Jackson, and many run around the clock. Big floor fans in summer and heaters in winter move a lot of air, and shift work at a scanner, a line or an inspection station keeps your eyes busy. Wear the safety glasses with side shields that your site requires, aim personal fans at your body, and blink deliberately each time you finish a task or a pallet.`,
      },
      { h: 'Winter nights below freezing' },
      {
        p: `January lows near 29°F and December and February lows close to 32°F mean the heat runs most nights from December to February. Indoor heated air has a low relative humidity, and a bed or recliner near a register keeps that air moving across your face. Students at Union University and Lane College meet the same air in residence halls during winter finals. A humidifier in the bedroom and vents turned away from the bed help most. [Dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) covers the setup.`,
      },
      { h: 'What the Quell label tells you' },
      {
        p: `Quell is a preservative-free lubricating drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its panel: {uses}. The directions: {directions}. And a handling instruction: {tip}.`,
      },
      {
        p: `The label’s caution reads: {warnings}. For storage it says: {storage}. A combine cab or a car on a summer lot runs hotter than that, so keep the bottle in a lunch cooler or carry it with you. Our [Drug Facts page](/drug-facts) has the rest.`,
      },
      { h: 'Ordering Quell in Jackson' },
      {
        p: `Quell ships from Brentwood, Tennessee, about two hours east, to Jackson, Medina, Humboldt and every other US address. Guest checkout is available, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but there’s no promised delivery date, so order before the bottle runs out. Unopened bottles can be refunded within {returnDays} days of delivery with nothing sent back. The [Jackson page](/eye-drops/jackson-tn) and the [Tennessee page](/eye-drops/state/tennessee) have local details.`,
      },
      { h: 'When to see an eye doctor in Jackson' },
      {
        p: `{stopUse} Chaff or dust that won’t rinse out, or dryness that continues after harvest and heating season have passed, is a reason to book an exam. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What are the driest months in Jackson, Tennessee?',
        a: 'August, September and October. NOAA’s 1991–2020 normals for McKellar-Sipes Regional Airport list 3.53, 3.58 and 3.63 inches for those months, against 5.58 inches in May.',
      },
      {
        q: 'How cold does it get in Jackson, TN in winter?',
        a: 'January is the coldest month at McKellar-Sipes Regional Airport, with normal highs near 49°F and lows near 29°F. December and February lows sit close to freezing.',
      },
      {
        q: 'How do I keep my eyes from drying out on a long I-40 drive?',
        a: 'Aim the vents away from your face, stop every hour or two to close your eyes and look into the distance, and wear sunglasses when driving into the sun.',
      },
      {
        q: 'Where does Quell ship from to reach Jackson, TN?',
        a: 'Quell ships from Brentwood, Tennessee, in Middle Tennessee, to Jackson and every other US address. Tracking comes by email, though no delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-reading-pa:
   * - https://data.rcc-acis.org/StnData, sid RDG, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/RDG.json and .daily-job/d/RDG-extra.json).
   *   READING REGIONAL AIRPORT, elev 332 ft. Annual precip 45.21 in (sum of
   *   months); Feb 2.61 (driest), Jan 2.97, Nov 3.02; Sep 4.88 (wettest), Jun
   *   4.77, Jul 4.77. Normal highs Jan 38.6 F, Jul 86.5 F, Oct 65.4 F; normal
   *   lows Jan 23.0 F, Feb 24.4 F, Dec 28.0 F, Mar 31.9 F, Jul 65.8 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-reading-pa',
    title: 'Dry eye relief in Reading, Pennsylvania',
    description:
      'Reading’s January lows average 23°F and radiators run for months. NOAA’s Berks County numbers, plus everyday dry eye relief at home and outdoors.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Reading mostly happens indoors. NOAA’s normals put January lows near 23°F and February’s precipitation at 2.61 inches, the year’s lowest, so radiators and furnaces run from November into March and dry the air in rowhouses, offices and classrooms. Add moisture to the rooms you use, keep heat off your face, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Berks County weather in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Reading Regional Airport, northwest of the city at about 332 feet, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `About 45.2 inches of precipitation in a normal year, spread fairly evenly.`,
          `February is the driest month at 2.61 inches, then January at 2.97 and November at 3.02.`,
          `September is the wettest at 4.88 inches, with June and July each at 4.77.`,
          `January highs average 38.6°F, with lows of 23.0°F; February lows average 24.4°F.`,
          `July is the warmest month, with highs near 86.5°F and lows near 66°F.`,
          `Normal lows stay below freezing from December through March.`,
        ],
      },
      { h: 'Rowhouse radiators and dry winter rooms' },
      {
        p: `Much of Reading lives in brick rowhouses, many of them heated by radiators or older forced-air systems. Radiators are often tucked under windows, right where a reading chair or a desk ends up, and they warm the air around them first. When outdoor air near 23°F is heated to room temperature, its relative humidity falls sharply, and the tear film evaporates faster between blinks.`,
      },
      {
        list: [
          `Set a humidifier in the bedroom and the room where you spend evenings.`,
          `Pull chairs and beds a few feet away from radiators.`,
          `On forced-air systems, angle register covers so the flow runs along the floor.`,
          `Turn the heat down at night; cooler bedrooms are easier on the eyes.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through each part of the house.`,
      },
      { h: 'Up to the Pagoda and out on the Schuylkill' },
      {
        p: `Hiking up Mount Penn to the Pagoda, running the Schuylkill River Trail or riding the roads toward Blue Marsh Lake keeps people outdoors through the colder months. Climbing into cold, moving air dries the eyes quickly, and winter sun low in the sky brings glare. Wraparound sunglasses cover more of the eye than flat lenses, and a buff or scarf pulled over the cheeks keeps cold air from rising into your face. On the coldest mornings, start with the wind at your back when you can.`,
      },
      { h: 'Farm markets and long days outside' },
      {
        p: `Berks County’s farms and farm markets keep many people on their feet outdoors from spring through fall. September, the wettest month in the record, still has plenty of sunny harvest days, and July averages near 86.5°F. For anyone working in fields or at an outdoor market stand, a hat with a brim and close-fitting sunglasses help, and stepping into shade for a few slow blinks breaks up a long stretch in the sun.`,
      },
      { h: 'Screens, classrooms and the commute' },
      {
        p: `Students at Albright College, Alvernia University, Penn State Berks and Reading Area Community College spend winter semesters in heated classrooms and libraries. Office workers drive Route 422 and Route 222 in cars with the heat on high. In both cases the fix is similar:`,
      },
      {
        list: [
          `Every time you finish a page, a slide or an email, take one full, slow blink.`,
          `Lower your monitor slightly so your lids cover more of the eye.`,
          `Point car vents toward the windshield and floor, not your face.`,
          `Take a real break away from screens at lunch.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking slows at a screen.`,
      },
      { h: 'Reading the Quell label' },
      {
        p: `Quell is a preservative-free lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Here are the Uses from its panel: {uses}. Dosing directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The caution on the label: {warnings}. Storage, as printed: {storage}. A car on a Reading street in January drops below that range, so keep the bottle in your coat or bag. Every line is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Reading' },
      {
        p: `We ship from Brentwood, Tennessee, to Reading, Wyomissing, West Reading, Shillington and everywhere else in the US. Checkout doesn’t require an account, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email; there’s no delivery date promised, and winter weather can slow packages, so order early. Unopened bottles are refundable within {returnDays} days of delivery without being returned. The [Reading page](/eye-drops/reading-pa) and the [Pennsylvania page](/eye-drops/state/pennsylvania) have more.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `{stopUse} If your eyes stay dry into spring, after the radiators go quiet, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to act on quickly.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Reading, PA get in winter?',
        a: 'NOAA’s 1991–2020 normals for Reading Regional Airport put January highs at 38.6°F and lows at 23.0°F. Normal lows stay below freezing from December through March.',
      },
      {
        q: 'Do radiators dry out your eyes?',
        a: 'Radiators warm the air without adding moisture, which lowers its relative humidity and speeds evaporation from the tear film. Sitting a few feet away and running a humidifier both help.',
      },
      {
        q: 'What is the wettest month in Reading, Pennsylvania?',
        a: 'September, at 4.88 inches in NOAA’s normals for Reading Regional Airport. February is the driest at 2.61 inches.',
      },
      {
        q: 'Can I order Quell to Wyomissing or West Reading?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Wyomissing, West Reading, Reading and any other US address, with tracking by email.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-oshkosh-wi:
   * - https://data.rcc-acis.org/StnData, sid OSH, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/OSH.json and .daily-job/d/OSH-extra.json).
   *   OSHKOSH WITTMAN REGIONAL AP, elev 785 ft. Annual precip 30.56 in (sum
   *   of months); Feb 0.83 (driest), Jan 1.11, Dec 1.27; Jun 4.65 (wettest).
   *   Normal highs Jan 26.0 F, Dec 31.7 F, Jul 81.3 F; normal lows Jan 11.1 F,
   *   Feb 13.5 F, Dec 17.9 F, Jul 61.2 F. Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-oshkosh-wi',
    title: 'Dry eye relief in Oshkosh, Wisconsin',
    description:
      'Oshkosh’s February brings 0.83 inches of precipitation and lows near 13°F. NOAA’s numbers and dry eye relief from the furnace to the flight line.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Oshkosh runs on the calendar. NOAA’s normals make February the driest month, at 0.83 inches, with January lows near 11°F, so furnace heat dries indoor air for much of the year. Summer brings sun, wind off Lake Winnebago and AirVenture week on the airfield. Humidify the rooms you use most, keep vents off your face, wear sunglasses outdoors and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'Oshkosh weather at Wittman Field' },
      {
        p: `The numbers below are NOAA’s 1991–2020 climate normals for Wittman Regional Airport, on the south side of Oshkosh at about 785 feet, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `About 30.6 inches of precipitation in a normal year.`,
          `February is the driest month at 0.83 inches, followed by January at 1.11 and December at 1.27.`,
          `June is the wettest at 4.65 inches.`,
          `January highs average 26.0°F and lows 11.1°F; February lows are about 13.5°F.`,
          `December highs reach only about 32°F.`,
          `July highs average near 81°F, with lows near 61°F.`,
        ],
      },
      { h: 'Why are my eyes so dry in an Oshkosh winter?' },
      {
        p: `Air that starts near 11°F outside holds very little water. Once a furnace heats it to room temperature, its relative humidity is low, and the eyes lose moisture faster between blinks. Oshkosh’s three driest months for precipitation, December through February, are also the three coldest, so the house stays sealed and the heat runs nearly nonstop. The result tends to show up as tired, scratchy eyes by evening or on waking.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it regularly.`,
          `Point floor registers away from beds and couches.`,
          `Let the car warm up with the vents on the windshield before you switch any to your face.`,
          `Take screen breaks in the evening, when indoor air has been heated for hours.`,
        ],
      },
      { h: 'Sturgeon season on Lake Winnebago' },
      {
        p: `Each February, spearers set up shanties on Lake Winnebago for the sturgeon season, and plenty of others ice fish the lake all winter. Shanty heaters dry the air in a small space, and you spend hours staring down through a hole into dark water, blinking less than usual. Out on the ice, wind crosses miles of open lake with nothing to slow it. Crack the shanty door now and then, keep the heater pointed away from your face, and wear goggles or wraparound glasses for the walk or ride out. [Dry eyes while ice fishing](/guides/dry-eyes-while-ice-fishing) has more, including keeping a bottle from freezing.`,
      },
      { h: 'AirVenture week on the airfield' },
      {
        p: `In late July, the EAA’s AirVenture fly-in brings huge crowds to Wittman Regional Airport, the same field where the weather record above is kept. Days on open pavement and grass mean full sun, July highs near 81°F, prop wash and wind across the flight line, and hours of looking up at bright sky.`,
      },
      {
        list: [
          `Wear wraparound sunglasses and a brimmed hat during the air shows.`,
          `Turn away from propeller and rotor wash when aircraft taxi past.`,
          `Pause for slow, full blinks after long stretches of watching the sky.`,
          `Keep a bottle in a shaded bag rather than a hot car in the parking lots.`,
        ],
      },
      { h: 'Truck plants, campus and long shifts' },
      {
        p: `Oshkosh builds heavy trucks and specialty vehicles, and plant work often means welding light, grinding dust, big fans and close inspection, all of which call for eye protection. Wear what your site requires, aim fans at your body and wash your hands before using a drop. Students at UW Oshkosh spend heated winter semesters in residence halls and libraries; there, the advice is to keep a humidifier in the room if housing allows and take regular screen breaks.`,
      },
      { h: 'What Quell’s Drug Facts say' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses it lists: {uses}. Its directions: {directions}. Its handling note: {tip}.`,
      },
      {
        p: `The panel’s caution: {warnings}. Storage: {storage}. A shanty on the lake or a car in a January lot drops well below that range, so keep the bottle in an inside pocket. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Oshkosh' },
      {
        p: `We ship from Brentwood, Tennessee, to Oshkosh, Neenah, Omro and every other US address. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, and winter weather can slow a package, so order with time to spare. Unopened bottles are refundable within {returnDays} days of delivery without sending them back. See the [Oshkosh page](/eye-drops/oshkosh-wi) and the [Wisconsin page](/eye-drops/state/wisconsin).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `{stopUse} Dryness that sticks around into spring, after the furnace quiets down, is worth an exam; an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the urgent ones.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Oshkosh, Wisconsin?',
        a: 'February, with 0.83 inches of precipitation in NOAA’s 1991–2020 normals for Wittman Regional Airport. June is the wettest month at 4.65 inches.',
      },
      {
        q: 'How can I keep my eyes comfortable at EAA AirVenture?',
        a: 'Wear wraparound sunglasses and a brimmed hat, turn away from prop wash, and stop for slow blinks after long stretches of watching the sky. Keep eye drops in a shaded bag, not a hot car.',
      },
      {
        q: 'Do shanty heaters dry your eyes during sturgeon season?',
        a: 'They can. A heater dries the air in a small shanty, and staring into the spearing hole cuts down on blinking. Venting the shanty and aiming the heater away from your face both help.',
      },
      {
        q: 'Does Quell ship to Oshkosh?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Oshkosh, Neenah, Omro and any other US address, with tracking by email.',
      },
    ],
  },

  {
    slug: 'dry-eyes-when-fly-fishing',
    title: 'Dry eyes when fly fishing',
    description:
      'Wind on the river, glare off moving water and hours watching a tiny fly all dry the eyes. What helps on the stream, at the vise, and in your vest.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Fly fishing dries the eyes in three ways at once: wind moving across open water, glare that makes you squint, and long stretches of staring at a small fly drifting on the current, which slows your blinking. Wear polarized wraparound glasses, break your gaze between drifts with a few full blinks, keep a clean bottle of lubricating drops in a dry vest pocket, and use them only as the label directs.`,
      },
      { h: 'Why your eyes dry out on the river' },
      {
        p: `The tear film is a thin layer of oil, water and mucus that a blink spreads across the eye. Between blinks it slowly evaporates, and anything that speeds evaporation or stretches the time between blinks leaves the surface drier. A day on a trout stream does both. Valleys funnel wind along the water, the air over a river in summer can be warm and dry by afternoon, and the activity itself rewards unbroken attention.`,
      },
      { h: 'Staring at a dry fly' },
      {
        p: `Following a size 18 dry fly through a riffle is close work at a distance. You lock your eyes on one small speck, track it as it drifts, and wait for a rise. People hold their blinks while concentrating like that, often without knowing it, and an eye that blinks less is an eye that dries faster. Nymphing under an indicator is similar, and watching a streamer swing is only a little better.`,
      },
      {
        list: [
          `At the end of each drift, as you pick up line, take two slow, complete blinks before the next cast.`,
          `Look up at the far bank or the treeline for a few seconds every few casts.`,
          `When you change flies, close your eyes for a moment before you start tying.`,
          `Rest the water and your eyes together: a five-minute sit on the bank does both.`,
        ],
      },
      { h: 'Glare off moving water' },
      {
        p: `Sun on a riffle throws bright, shifting reflections that make you squint. Squinting narrows the eye and turns blinks into half-blinks that don’t spread the tear film fully. Polarized lenses cut much of that reflected light, which is why anglers wear them to see into the water, and they also mean you squint less.`,
      },
      {
        list: [
          `Choose a wraparound frame or one with side shields so wind can’t get behind the lenses.`,
          `A long-billed cap shades the lenses from overhead sun and adds more shelter from wind.`,
          `Amber or copper tints suit low light on overcast days and early mornings; gray suits bright sun.`,
          `Keep a lens cloth in a sealed bag so you aren’t wiping lenses with a wet sleeve and then rubbing an eye.`,
        ],
      },
      { h: 'Casting into the wind' },
      {
        p: `Wind is a fact of fly fishing, and casting into it puts the breeze right in your face. Glasses do double duty here: they block moving air and they protect your eyes from a fly on a gusty backcast, which is reason enough to wear them every time you fish. If the wind is strong, try positioning yourself so it comes across your casting shoulder or from behind rather than head-on, both for the cast and for your eyes.`,
      },
      { h: 'Cold mornings and tailwater fog' },
      {
        p: `Early starts on a cold tailwater or a fall steelhead river mean cold air moving over water, and cold wind makes eyes sting and water. That watering can be the eye reacting to dryness rather than a sign it has plenty of moisture. A buff pulled up over the cheeks keeps the cold off your face, and glasses keep it off your eyes. Our guide on [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more for shoulder-season trips.`,
      },
      { h: 'Tying flies at the vise' },
      {
        p: `A lot of fly fishing happens indoors in winter, at a tying bench under a bright lamp, often with a magnifier. That’s the same close, concentrated work that slows blinking at a screen, sometimes for hours. Set a timer if you lose track: after each fly, look across the room and blink. Keep the lamp aimed at the vise and not toward your face, and if the bench sits near a heat register, move it or redirect the vent. [Why your eyes get dry when you focus](/guides/why-do-my-eyes-get-dry-when-i-focus) explains what concentration does to the blink.`,
      },
      { h: 'Using drops on the water' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label gives the Uses: {uses}. The directions say: {directions}. Its handling instruction matters on a riverbank: {tip}.`,
      },
      {
        list: [
          `Wade to the bank and stand on dry ground before opening the bottle.`,
          `Rinse or wipe fish slime, sunscreen and fly floatant off your fingers first.`,
          `Tilt your head back, pull down the lower lid and keep the tip clear of lashes, skin and everything else.`,
          `Cap it right away so it can’t take on river water or grit.`,
        ],
      },
      { h: 'Keeping a bottle in your vest or sling pack' },
      {
        p: `A chest pocket with a zipper keeps the bottle dry if you stumble in a riffle, and a small sealed bag adds a second layer. The label’s storage line is {storage}, so don’t leave the bottle on the dashboard of a truck parked at the access in July, or in the truck through a freezing November night. Read the caution before your first bottle, too: {warnings}. The full panel is on our [Drug Facts page](/drug-facts), and [carrying eye drops in a purse or pocket](/guides/carrying-eye-drops-in-a-purse-or-pocket) has more on keeping a bottle with you.`,
      },
      { h: 'How fly fishing differs from a day on a boat' },
      {
        p: `Fishing from a boat means more open wind and spray, and our [dry eyes on a boat](/guides/dry-eyes-on-a-boat) guide covers that. Wading a stream is quieter, but you’re closer to the water’s glare, you’re staring at a much smaller target, and you’re often alone and miles from the truck. Plan for it: keep the bottle on you rather than in the truck, and know the walk back.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} A hook or fly that strikes the eye, or anything that scratches it, needs prompt medical care rather than a drop. For dryness that returns after every trip, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs. If you need a bottle before the season, you can [order Quell here](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when fly fishing?',
        a: 'Wind over the water speeds evaporation from the tear film, glare makes you squint, and watching a small fly drift slows your blinking. All three leave the eye’s surface drier.',
      },
      {
        q: 'Do polarized sunglasses help your eyes when fly fishing?',
        a: 'They cut glare off the water, so you squint less, and wraparound frames block wind and protect your eyes from a fly on the backcast.',
      },
      {
        q: 'Where should I keep eye drops when wading a river?',
        a: 'In a zippered chest pocket of your vest or sling, ideally in a sealed bag. Keep the bottle out of a hot or freezing truck, within the label’s storage range.',
      },
      {
        q: 'Why do my eyes get tired tying flies?',
        a: 'Close work under a bright lamp slows blinking, so the tear film thins between blinks. Look away and blink after each fly, and keep heat vents away from the bench.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-rowers',
    title: 'Dry eyes for rowers',
    description:
      'Cold dawn practices, wind on the water and erg sessions under a fan can all dry a rower’s eyes. Practical habits for the boat, the erg and race day.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Rowers get dry eyes from moving air. On the water it’s wind plus the boat’s own speed, often on cold early mornings; on an indoor rowing machine it’s a fan or the flywheel’s draft aimed at your face. Wear wraparound glasses on the water, angle fans at your body on the erg, blink fully between pieces, and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'Why rowing dries your eyes' },
      {
        p: `The tear film is a thin layer of oil, water and mucus that each blink spreads over the eye. Moving air carries moisture off it between blinks. A rowing shell moves steadily through still air, so even on a calm morning the crew sits in a constant breeze, and a headwind adds to it. Hard effort also changes how you blink: many athletes blink less during a hard piece, especially when they’re watching the stroke seat or the coxswain’s calls.`,
      },
      { h: 'Dawn practices on cold water' },
      {
        p: `Many crews practice at first light, before the wind picks up and before school or work. In fall and spring that means cold air, sometimes fog over the water, and a long stretch of rowing with the breeze in your face as you pass through it. Cold wind often makes eyes sting and water, which can be the eye’s reflex to dryness.`,
      },
      {
        list: [
          `Wear close-fitting sport glasses with a wraparound shape; clear or light lenses work in the dark before sunrise.`,
          `Choose a frame that stays put when you sweat and doesn’t touch your eyelashes.`,
          `Pull a buff up over your cheeks on the warmup row on cold mornings.`,
          `Bring a dry spare cloth in a zip bag for fogged or splashed lenses.`,
        ],
      },
      { h: 'Glare and long pieces' },
      {
        p: `Once the sun is up, it bounces off flat water, and a row facing east in the morning or west in the evening puts glare right in your eyes. Rowers facing the stern can’t turn away from it. Polarized lenses reduce glare off the water and make squinting less necessary. During steady-state pieces, rowers often fix their eyes on the back of the rower in front for many minutes; a deliberate blink on the recovery every so often keeps the tear film spread.`,
      },
      { h: 'The erg and the fan in front of it' },
      {
        p: `Indoor rowing machines have their own breeze. The flywheel draws air through its housing, and most people set a fan in front of the erg to stay cool during a hard test. That fan blows straight across your face at head height, and the monitor in front of you holds your gaze on split times and meters remaining.`,
      },
      {
        list: [
          `Set the fan lower and aim it at your chest and legs instead of your face.`,
          `Look away from the monitor during the paddle between intervals and blink slowly a few times.`,
          `Wipe sweat from your brow with a clean towel so it doesn’t run into your eyes.`,
          `In a crowded erg room with ceiling fans running, choose a machine away from the direct flow.`,
        ],
      },
      {
        p: `[Dry eyes at the gym](/guides/dry-eyes-at-the-gym) covers fans and treadmills more generally.`,
      },
      { h: 'Spray, river water and bottles in the boat' },
      {
        p: `Splash from blades and wakes is part of rowing, and so is river or lake water on your hands. Don’t put in drops with hands you’ve just used to grip a wet oar handle. The label’s handling instruction applies: {tip}. Wait until you’re on the dock, rinse or dry your hands, and then use the drop.`,
      },
      {
        p: `There’s nowhere secure to keep a bottle in a shell, so leave it in your bag in the boathouse, in a spot that stays within the label’s storage range: {storage}. A car on a regatta lot in summer can get hotter than that. On race days, a zip pocket in a team jacket works well.`,
      },
      { h: 'Race day: waiting, warming up and racing' },
      {
        p: `Regattas mean long waits under a tent, a warmup on open water, and a few minutes of very hard work. Windy courses are common. Put on your glasses for the warmup and leave them on; changing out of them right before the start means racing with bare eyes in a headwind. Between races, sit in the shade with your eyes closed for a few minutes rather than scrolling your phone. If you plan to use a drop, do it on land, before you launch, with clean hands.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its panel: {uses}. Directions: {directions}. The panel’s caution is worth reading before a teammate borrows it, and a bottle shouldn’t be shared anyway: {warnings}.`,
      },
      {
        p: `The label doesn’t give directions for contact lens wearers or for use with other eye drops, so ask your eye doctor or pharmacist about either. Our [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Coaches, coxswains and juniors' },
      {
        p: `Coaches spend hours in a launch with the wind in their faces, often scanning several boats and shouting calls, and coxswains spend whole pieces watching their rowers and the course ahead. Both face the same wind as the crew without the work to keep them warm, so glasses and a buff matter even more. For junior rowers, the label doesn’t give directions for children, so parents should ask a pharmacist or eye doctor first.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} A blade, an oar handle or a cox box antenna to the eye calls for prompt medical care rather than a drop. Dryness that bothers you after every practice is worth an exam; an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor), or [order Quell](/#buy) if you’re ready.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when I row in the morning?',
        a: 'Cold wind on the water, plus the boat’s own speed, dries the eye’s surface, and watering can be the eye’s reflex to that. Wraparound glasses and a buff over the cheeks help.',
      },
      {
        q: 'Should rowers wear sunglasses?',
        a: 'Many do. Wraparound sport glasses block wind and splash, and polarized lenses reduce glare off flat water, which matters when you can’t turn away from the sun.',
      },
      {
        q: 'Why do my eyes get dry on a rowing machine?',
        a: 'The fan in front of the erg and the draft from the flywheel blow air across your face while you stare at the monitor. Aim the fan at your body and blink during the rests.',
      },
      {
        q: 'Can I keep eye drops in a rowing shell?',
        a: 'There isn’t a secure dry spot in most shells, so keep the bottle in your bag in the boathouse or a jacket pocket and use it on land with clean, dry hands.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-chess-players',
    title: 'Dry eyes for chess players',
    description:
      'Long games, intense focus and few blinks dry a chess player’s eyes, over the board and online. Habits for tournament halls, blitz on screens and study.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Chess players get dry eyes because deep calculation suppresses blinking. Over a long classical game you may stare at the board for minutes without a full blink, often in a climate-controlled tournament hall, and online blitz adds a bright screen. Build blinks into your routine (after each move you make, while your opponent thinks), keep vents off your face, rest your eyes between rounds, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why chess dries your eyes' },
      {
        p: `A blink spreads a fresh layer of tears, oil on top of water on top of mucus, across the front of the eye. When you concentrate, blinks get fewer and shallower, and the tear film has longer to thin and evaporate. Chess may be one of the purest examples of that: hours of near-total stillness with your gaze fixed on a small area. Players often notice it as tired, scratchy or burning eyes late in a long game, or a blurry board that clears after a few blinks.`,
      },
      { h: 'Over the board: classical games and long rounds' },
      {
        p: `A classical game can run four or five hours, and a weekend open might mean two or three of them a day. Your eyes need a routine as much as your clock management does.`,
      },
      {
        list: [
          `After you press the clock, take one slow, complete blink before you start thinking about their reply.`,
          `When it’s your opponent’s move and you’ve finished your own analysis, look up and across the room for a few seconds.`,
          `Get up and walk during your opponent’s long thinks, if the event allows it; looking at distant walls and other boards rests your focus.`,
          `Close your eyes for a few seconds while you calculate a line in your head; many players visualize better that way anyway.`,
        ],
      },
      { h: 'Tournament halls, hotel ballrooms and the air' },
      {
        p: `Big opens are often held in hotel ballrooms and convention spaces, with strong air conditioning in summer and forced-air heat in winter. A table under a ceiling vent can put a steady draft across your face for the whole round. You can’t move your board, but you can do a few things before the round starts:`,
      },
      {
        list: [
          `Notice where the vents are when you arrive; if your board is directly under one, ask the arbiter or tournament director politely whether anything can be done.`,
          `Dress in layers so you’re not tempted to sit hunched toward the board to stay warm.`,
          `Bring water and a snack so you don’t leave the hall in a rush, and spend part of your break outside the playing room.`,
          `Between rounds, rest with your eyes closed rather than reviewing the game on your phone right away.`,
        ],
      },
      {
        p: `Hotel rooms dry out while you sleep with the heat or air on; turning it down before you sleep helps you start the next round more comfortably. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more on that.`,
      },
      { h: 'Using a drop at a tournament' },
      {
        p: `Tournament rules vary on what you can have at the board, and electronic devices are usually banned. A small bottle of eye drops in your pocket or bag is a personal item, but if you’re unsure, check with the tournament director before the event. The simplest approach is to step out of the playing hall during a long think by your opponent or between rounds.`,
      },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses: {uses}. Directions: {directions}. While using it: {tip}. Read the caution before using it the first time: {warnings}.`,
      },
      { h: 'Online chess: blitz, bullet and screens' },
      {
        p: `Playing online adds a bright screen and a much faster pace. Blitz and bullet leave no time to look away, and players often play game after game with no break at all. Screens already reduce how often people blink, and fast time controls reduce it further.`,
      },
      {
        list: [
          `Set a game limit per session, and after each game, look away from the screen for twenty seconds or so.`,
          `Lower screen brightness to match the room, and use the site’s darker board themes in the evening if you prefer them.`,
          `Position the monitor slightly below eye level so your lids cover more of the eye.`,
          `Keep a desk fan or a heat vent from blowing across your face.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why screens slow blinking, and the habits there apply to puzzle rush and opening prep as well.`,
      },
      { h: 'Study, prep and engine analysis' },
      {
        p: `Opening preparation and engine analysis can run longer than any game, often late at night. That combination of a screen, deep focus and a tired body is hard on the eyes. Work in blocks: analyze one line, then stand up. Study from a physical book or a real board for part of the session; it doesn’t remove the focus problem, but it changes the distance and the light.`,
      },
      { h: 'Coaches, arbiters and parents' },
      {
        p: `Arbiters walk the hall and watch boards for hours under the same air. Coaches review games on laptops between rounds. Parents of scholastic players often spend the day in a skittles room on a phone. All of them benefit from the same breaks. For young players, the label doesn’t give directions for children, so ask a pharmacist or eye doctor before using any drop.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Eyes that stay dry or uncomfortable after you’ve changed your habits deserve a proper exam, and an eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs not to wait on. Everything on Quell’s label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long chess game?',
        a: 'Deep concentration cuts down on blinking, so the tear film thins between blinks over hours of play. A planned blink after each move, and looking away during your opponent’s thinks, both help.',
      },
      {
        q: 'Can I use eye drops during a chess tournament?',
        a: 'A small bottle is a personal item, but rules differ by event, so ask the tournament director if you’re unsure. Using drops outside the playing hall, between rounds or during a long think, is simplest.',
      },
      {
        q: 'Does online blitz dry out your eyes?',
        a: 'It can. Screens already reduce blinking, and fast time controls leave no time to look away. Setting a game limit and looking away for a few seconds after each game helps.',
      },
      {
        q: 'How do I rest my eyes between chess rounds?',
        a: 'Leave the playing hall, close your eyes for a few minutes or look at something far away, and put off reviewing the game on your phone until you’ve had a short break.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-your-boss',
    title: 'Christmas gifts for your boss',
    description:
      'Gifting up is tricky. How to pick a Christmas gift for your boss that’s modest and thoughtful, and when a practical gift like eye drops fits.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `A good Christmas gift for your boss is modest, impersonal enough to give in front of coworkers, and tied to something they’ve actually mentioned. A group gift from the team is often the safest route. Practical desk items, a book or a nice food gift usually fit. Eye drops only make sense if your boss has talked about dry, tired eyes at their desk, and even then they work as part of a bigger gift.`,
      },
      { h: 'Should you buy your boss a Christmas gift at all?' },
      {
        p: `Many workplaces lean toward gifts flowing down rather than up, and some have written policies on gifts between employees and managers. Check before you shop. If there’s no policy, a card with a short, specific note of thanks is always appropriate. If you want to give something more, the most comfortable options are a gift from the whole team, or a small, inexpensive one from you that doesn’t look like an attempt to win favor.`,
      },
      { h: 'Gift ideas that suit most bosses' },
      {
        list: [
          `A book connected to something they’ve talked about, like a hobby, a trip they’re planning or a favorite author.`,
          `Good coffee or tea for someone who keeps a mug at their desk.`,
          `A small desk plant that doesn’t need much light.`,
          `A quality notebook or pen for someone who still writes things down.`,
          `Something local: a jar of honey from a nearby farm, or a tin of cookies from a bakery in town.`,
          `For a boss who travels, a toiletry bag or cable organizer.`,
        ],
      },
      { h: 'For the boss who lives at a screen' },
      {
        p: `Managers often spend their days in back-to-back video calls, spreadsheets and email. If yours has mentioned tired or dry eyes, a gift built around that can be thoughtful without being personal: a small desk humidifier for a dry office, a screen-cleaning kit, a laptop stand that raises the screen to a better height, or a good desk lamp that reduces glare on the screen. For a boss who rubs their eyes at the end of the day, a bottle of lubricating eye drops can sit alongside one of these.`,
      },
      { h: 'Is it okay to give your boss eye drops?' },
      {
        p: `It depends on what they’ve said. Eye drops are a personal-care product, and handing one to someone who never mentioned their eyes can read like a comment on how they look. If your boss has said their eyes feel dry in the office, or that they keep forgetting to buy drops, a bottle tucked in with a book or coffee shows you were listening. As a stand-alone present from one employee, it can feel odd; as one part of a team gift, it’s practical.`,
      },
      {
        p: `There’s one thing to check first. Quell’s label carries this caution: {warnings}. If you don’t know whether your boss has an egg or bird allergy, skip the drops or ask someone who would know. Our [egg or bird allergy guide](/guides/egg-or-bird-allergy-and-quell) explains the wording.`,
      },
      { h: 'What to know if you include Quell' },
      {
        list: [
          `It’s a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
          `The label lists its Uses: {uses}.`,
          `The solution looks unusual, which is worth a line on the card: {milky}.`,
          `If they wear contact lenses or use prescription drops, the label doesn’t cover that, so they should ask their eye doctor first.`,
        ],
      },
      {
        p: `The rest of the label, including directions and storage, is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Organizing a team gift' },
      {
        p: `A team gift takes pressure off individuals and lets the group give something a bit nicer. Have one person collect ideas and contributions, set a modest amount everyone can manage, and make contributing optional and anonymous. Sign one card from everyone. If the team wants to include a practical item like eye drops, pair it with something more festive so the gift reads as a whole.`,
      },
      { h: 'Ordering and timing' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses only, and buyers must be 18 or older. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free, which can help if the team is buying for more than one person. Tracking comes by email, but no delivery date is promised, so order well before your office party. Ship it to yourself and wrap it with the rest of the gift rather than sending it to your boss’s home address. [Ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) has more on timing, or you can [see prices and order](/#buy).`,
      },
      { h: 'Gifts to steer clear of' },
      {
        list: [
          `Anything about appearance, weight or age.`,
          `Alcohol, unless you know the person well and your workplace is fine with it.`,
          `Expensive items, which can make your boss uncomfortable and coworkers awkward.`,
          `Jokes that rely on office gossip.`,
          `Health products for a condition they haven’t mentioned to you.`,
        ],
      },
      { h: 'If they don’t use it' },
      {
        p: `Not every gift lands. An unopened bottle of Quell can be refunded within {returnDays} days of delivery, without sending it back, if you bought it and it went unused. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) covers what to do.`,
      },
    ],
    faq: [
      {
        q: 'What is an appropriate Christmas gift for a boss?',
        a: 'Something modest and impersonal: a book tied to their interests, good coffee or tea, a desk plant or a local food gift. A group gift from the team is often the most comfortable option.',
      },
      {
        q: 'Should I buy my boss a Christmas present?',
        a: 'It isn’t expected in most workplaces, and some have policies against gifts to managers. A card with a sincere thank-you is always fine, and a team gift is a good alternative.',
      },
      {
        q: 'Is it weird to give your boss eye drops for Christmas?',
        a: 'It can be if they’ve never mentioned their eyes. If your boss has talked about dry eyes at the desk, a bottle paired with a book or coffee shows you listened. Check the egg or bird allergy caution first.',
      },
      {
        q: 'How much should a team spend on a gift for the boss?',
        a: 'Keep it modest and set an amount everyone can manage, with contributions optional. The note on the card usually matters more than the price of the gift.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-neighbor',
    title: 'Christmas gifts for a neighbor',
    description:
      'Small, useful Christmas gifts for neighbors, from baked goods to winter helpers, and when a bottle of eye drops suits the neighbor who’s mentioned dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The nicest Christmas gifts for a neighbor are small, useful and handed over in person: homemade cookies, a poinsettia, a bag of ice melt for the steps, or a local food gift. Match the gift to what you know about them. For an older neighbor who has mentioned dry eyes in the heated months, a bottle of lubricating eye drops alongside something festive can be a kind, practical touch.`,
      },
      { h: 'Why small gifts suit neighbors' },
      {
        p: `Neighbor gifts are about goodwill rather than value. A plate of something homemade on a doorstep says more than anything you could order. If you’re giving to several houses on your street, choose one simple thing and make or buy it in quantity, so nobody compares and you’re not spending more than you’d like.`,
      },
      { h: 'Easy gifts for the whole street' },
      {
        list: [
          `Cookies, fudge or a quick bread wrapped in a tin or on a paper plate.`,
          `A small poinsettia or a potted herb for a sunny kitchen window.`,
          `Hot cocoa mix or a bag of coffee from a local roaster.`,
          `A candle or a set of nice hand towels.`,
          `A card with a handwritten note and your phone number, which matters more for newer neighbors.`,
        ],
      },
      { h: 'Winter helpers for the neighbor who does it all' },
      {
        p: `Some of the most welcome neighbor gifts are things that help with winter chores:`,
      },
      {
        list: [
          `A bag of pet-friendly ice melt for their steps and walk.`,
          `A sturdy ice scraper and snow brush for the car.`,
          `Warm gloves or a hat for the neighbor who walks a dog every morning.`,
          `A battery lantern or flashlight for power outages.`,
          `An offer, written on a card, to shovel their walk on the next snowy morning.`,
        ],
      },
      { h: 'For the neighbor who has mentioned dry eyes' },
      {
        p: `Neighbors talk over fences and at mailboxes, and sometimes that includes how the furnace dries out their eyes, or how screens or a long drive leave their eyes tired and scratchy. If your neighbor has said something like that, a small bottle of lubricating eye drops tucked into a basket with cookies or cocoa shows you remembered. A neighbor who has never brought it up is better off with the cookies alone, since a health product out of nowhere can feel like a remark.`,
      },
      {
        p: `Indoor heating is a good reason to think of it this time of year: heated air holds less moisture, and the tear film evaporates faster in a dry room. A small room humidifier can be a good pairing for a neighbor who spends winter evenings by the fire or the TV. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains why indoor air feels so dry.`,
      },
      { h: 'Check the label before you give it' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses: {uses}. Before giving it to anyone, read the caution: {warnings}. If you don’t know whether your neighbor has an egg or bird allergy, ask casually or choose a different gift.`,
      },
      {
        list: [
          `Mention the look of it on your card: {milky}.`,
          `If they use prescription eye drops or contact lenses, the label doesn’t cover either; suggest they ask their eye doctor or pharmacist.`,
          `For a neighbor with young kids, the label doesn’t give directions for children, so the bottle is for the adults.`,
        ],
      },
      {
        p: `Every line of the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering and handing it over' },
      {
        p: `The easiest way is to order to your own address and deliver it with the rest of the gift, since you live a few doors away. Quell ships from Brentwood, Tennessee, to US addresses; buyers must be 18 or older, and checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which helps if you’re buying for a couple of neighbors and yourself. Tracking comes by email, but no delivery date is promised, so order early in December. [Buying Quell for several people](/guides/buying-quell-for-several-people) has more, or you can [order here](/#buy).`,
      },
      { h: 'Neighbors who are older or living alone' },
      {
        p: `For an older neighbor who lives alone, the visit is often the real gift. Bring the cookies, stay for a cup of coffee, and offer practical help: changing a high light bulb, bringing in packages, or a ride to an appointment. If eyes come up in conversation, encourage them to see an eye doctor for dryness that keeps coming back, since a doctor can find the cause and decide what to do. [Giving eye drops to a parent or grandparent](/guides/eye-drops-for-a-parent-or-grandparent) has tips that apply to older neighbors too.`,
      },
      { h: 'If the gift isn’t used' },
      {
        p: `If you bought a bottle and your neighbor would rather not use it, an unopened bottle can be refunded within {returnDays} days of delivery, and you don’t send it back.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a neighbor?',
        a: 'Something small and useful: homemade cookies, a poinsettia, cocoa or coffee, or a bag of ice melt for their steps. A handwritten card makes any of them more personal.',
      },
      {
        q: 'Should I give gifts to all my neighbors?',
        a: 'You don’t have to. If you do give to several houses, pick one simple gift and make it in quantity so nobody feels compared and the cost stays manageable.',
      },
      {
        q: 'Is it okay to give a neighbor eye drops as a Christmas gift?',
        a: 'If they’ve mentioned dry or tired eyes, a bottle tucked in with cookies or cocoa can be thoughtful. Check the label’s egg or bird allergy caution first, and skip it if they’ve never brought it up.',
      },
      {
        q: 'What can I give an elderly neighbor for Christmas?',
        a: 'A visit, something homemade and practical help often mean the most. Useful items like ice melt, a flashlight or a small humidifier also suit someone living alone.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-mother-in-law',
    title: 'Christmas gifts for a mother-in-law',
    description:
      'How to choose a Christmas gift your mother-in-law will use, with ideas for readers, gardeners and crafters, and when eye drops make a thoughtful extra.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The easiest Christmas gift for a mother-in-law is one your spouse helps you pick, tied to something she does every week: reading, gardening, cooking, quilting or keeping up with the grandkids on a tablet. Give it from both of you. A practical extra like lubricating eye drops only fits if she has mentioned dry or tired eyes, and it belongs alongside the main gift rather than in place of it.`,
      },
      { h: 'Start with your spouse' },
      {
        p: `Nobody knows her habits, tastes and sore spots better than her own child. Ask what she’s mentioned wanting this year, what she already has too many of, and whether any subject is touchy. A mother-in-law gift that misses tends to miss because it says something unintended, such as a cookbook for someone proud of her cooking, or an age-related gadget for someone who doesn’t feel old. Signing the card from both of you also keeps the gift from feeling like it’s only from you.`,
      },
      { h: 'Ideas by what she enjoys' },
      {
        list: [
          `For a reader: a novel by an author she loves, a book light, or a subscription to a magazine she buys at the store.`,
          `For a gardener: good gloves, a kneeling pad, seed packets for spring, or a wide-brimmed sun hat.`,
          `For a cook or baker: a nice serving dish, a framed copy of a family recipe in her handwriting, or specialty spices.`,
          `For a quilter or knitter: quality thread or yarn, a bright task lamp, or a project bag.`,
          `For a grandmother far away: a photo book of the year, or a framed print of the grandkids.`,
          `For someone who has everything: an experience together, like a concert, a class or a lunch out with her.`,
        ],
      },
      { h: 'Close work, screens and tired eyes' },
      {
        p: `Many of the hobbies above are close work. Reading, sewing, crossword puzzles and tablet video calls with the grandkids all slow blinking, and an evening of them in a heated living room can leave eyes feeling dry or tired. If your mother-in-law has said something like that, a gift built around comfort shows you listened: a warm task lamp that cuts glare, a tablet stand that brings the screen down to a comfortable height, or a small humidifier for the room where she reads. [Christmas gifts for someone who reads a lot](/guides/christmas-gifts-for-someone-who-reads-a-lot) has more ideas for readers.`,
      },
      { h: 'Is it okay to give your mother-in-law eye drops?' },
      {
        p: `Only if she brought it up. A personal-care product from a son- or daughter-in-law can be misread more easily than one from her own children, so it helps if your spouse confirms she’d appreciate it. If she has mentioned dry eyes in winter, or that she keeps forgetting to pick up drops, a bottle tucked in with a book or a reading lamp turns into a thoughtful, practical extra. On its own, wrapped as the main gift, it can feel like a hint.`,
      },
      { h: 'Read the label first' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses: {uses}. Before buying it for anyone, read the caution: {warnings}. If you’re unsure whether she has an egg or bird allergy, ask your spouse. Our [egg or bird allergy guide](/guides/egg-or-bird-allergy-and-quell) explains the wording.`,
      },
      {
        list: [
          `If she uses prescription eye drops or has an eye doctor managing her eyes, she should check with them before adding a new product.`,
          `The label doesn’t give directions for contact lens wearers, so lens wearers should ask their eye doctor.`,
          `Add a line on the card about how the drop looks, so it doesn’t surprise her: {milky}.`,
          `The label’s directions read: {directions}.`,
        ],
      },
      {
        p: `Everything else on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'If you’re visiting her for Christmas' },
      {
        p: `Staying in her house for the holidays means sleeping in her guest room, often with the heat turned up for visitors. If your own eyes get dry in heated rooms, pack your bottle in your carry-on or handbag rather than a checked bag, and ask whether there’s a humidifier you can use in the guest room. [Visiting family with eye drops](/guides/visiting-family-with-eye-drops) covers travel and storage.`,
      },
      { h: 'Ordering and shipping' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, and buyers must be 18 or older. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which can make sense if you’re also buying for your own household. Tracking arrives by email, but no delivery date is promised, so order in early December at the latest. Shipping to your own address lets you wrap it with the main gift; if you send it straight to her, tell her a package is coming so she doesn’t think it’s a mistake. You can [see prices and order here](/#buy).`,
      },
      { h: 'If it isn’t her thing' },
      {
        p: `If she’d rather not use it, an unopened bottle can be refunded within {returnDays} days of delivery, and you keep it rather than mailing it back. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) walks through it. And if dryness is something she deals with all the time, encourage her to see an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What do you buy a mother-in-law for Christmas?',
        a: 'Something tied to what she does every week: a book for a reader, gloves or seeds for a gardener, thread or a task lamp for a quilter, or a photo book of the grandkids. Ask your spouse to help choose.',
      },
      {
        q: 'Should a Christmas gift for my mother-in-law come from both of us?',
        a: 'Usually, yes. A gift signed by you and your spouse feels like it comes from the family and takes the pressure off you getting it exactly right.',
      },
      {
        q: 'Are eye drops a good gift for a mother-in-law?',
        a: 'Only if she has mentioned dry or tired eyes, and then as an extra alongside a main gift. Read the label’s egg or bird allergy caution and confirm with your spouse first.',
      },
      {
        q: 'What gift helps a mother-in-law who reads or sews a lot?',
        a: 'A good task lamp, a book light, a tablet stand or a small humidifier for her reading room. Close work slows blinking, so comfort-focused gifts tend to get used.',
      },
    ],
  },

  {
    slug: 'are-all-dry-eye-drops-the-same',
    title: 'Are all dry eye drops the same?',
    description:
      'No. Dry eye drops differ in active ingredients, preservatives, oils, thickness and packaging. How to compare them using the Drug Facts panel.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `No. Over-the-counter dry eye drops differ in their active ingredients, whether they contain preservatives, whether they include oils, how thick they are, and whether they come in a multi-dose bottle or single-use vials. Those differences show up on the Drug Facts panel: the Uses, the active and inactive ingredients, the directions and the warnings. An eye doctor can tell you which kind suits your eyes.`,
      },
      { h: 'What all lubricating drops have in common' },
      {
        p: `Lubricating eye drops sold over the counter carry a Drug Facts panel with the same sections in the same order: active ingredients and their purpose, uses, warnings, directions, other information and inactive ingredients. They are made to add moisture or a protective layer to the surface of the eye. That shared format is what makes them easy to compare side by side, as long as you know what to look for in each section.`,
      },
      { h: 'Difference 1: the active ingredients' },
      {
        p: `Each lubricating drop lists one or more active ingredients, and products use different ones. Some rely on a single ingredient that thickens the water layer; others combine several. Quell lists three: {actives}. The panel shows each active ingredient’s purpose next to it. [What are lubricating eye drops?](/guides/what-are-lubricating-eye-drops) explains the terms.`,
      },
      { h: 'Difference 2: preservatives or none' },
      {
        p: `Multi-dose bottles usually contain a preservative to keep the solution from spoiling once opened. Single-use vials, and some bottles designed to stay clean without one, are preservative-free. Some people who use drops several times a day prefer preservative-free products. Quell is preservative-free in a multi-dose bottle. [Are preservative-free eye drops worth it?](/guides/are-preservative-free-eye-drops-worth-it) goes further into the trade-offs.`,
      },
      { h: 'Difference 3: water-based or with oils' },
      {
        p: `The tear film has three layers: mucus against the eye, water in the middle, and a thin layer of oil on top that slows evaporation. Many drops focus on the water layer. Others include oils meant to support the outer layer, and those often look cloudy or milky in the bottle rather than clear. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its panel says: {milky}.`,
      },
      { h: 'Difference 4: thickness and how they feel' },
      {
        p: `Drops range from thin, watery solutions to thicker gels, and ointments are thicker still. A thicker product tends to stay on the eye longer but can blur vision for a while, which is why many people save gels and ointments for bedtime. A drop may cause brief blurring too. Our guides to [eye drops vs. eye gel](/guides/eye-drops-vs-eye-gel) and [eye drops vs. eye ointment](/guides/eye-drops-vs-eye-ointment) compare them.`,
      },
      { h: 'Difference 5: the bottle' },
      {
        list: [
          `Multi-dose bottles hold many doses and are easy to carry, but the tip must stay clean.`,
          `Single-use vials are opened, used and thrown away, so there’s nothing to keep clean, but they create more packaging and cost more per dose.`,
          `Bottle sizes vary; Quell comes in a {size} bottle.`,
          `Some bottles are designed to release one drop at a time more easily than others.`,
        ],
      },
      { h: 'Difference 6: inactive ingredients and allergens' },
      {
        p: `Inactive ingredients make up most of what’s in the bottle, and they differ widely. They can include buffers, salts, thickeners, oils and plant or animal ingredients. If you have allergies, read this section carefully. Quell’s inactive ingredients are: {inactives}. Because it contains emu oil, its warnings include: {warnings}.`,
      },
      { h: 'Difference 7: directions and other drops' },
      {
        p: `Directions differ by product, so follow the panel on the bottle you’re using rather than a habit from a previous one. Quell’s says: {directions}. Some labels mention contact lenses and some don’t. Quell’s label doesn’t give directions for contact lens wearers, children or use alongside other eye drops, so ask your eye doctor or pharmacist about those.`,
      },
      { h: 'Drops that aren’t for dryness' },
      {
        p: `Not every eye drop on the shelf is a lubricant. Some are made for itching, some to make the whites of the eyes look clearer, and some are prescription-only medicines. Their Uses section will say something different from a lubricant’s, so read it before buying. If you’re not sure what a drop is for, a pharmacist can tell you. Our guide on [artificial tears vs. lubricating eye drops](/guides/artificial-tears-vs-lubricating-eye-drops) explains how those two terms overlap.`,
      },
      { h: 'How to compare two dry eye drops' },
      {
        list: [
          `Read the Uses line first to make sure both are lubricants.`,
          `Compare the active ingredients and their listed purposes.`,
          `Check whether each contains a preservative.`,
          `Look at the inactive ingredients for anything you’re allergic to.`,
          `Compare the directions, including how many times a day.`,
          `Read the warnings and the storage line.`,
          `Compare price per bottle including shipping, and how many days a bottle lasts at the labeled dose.`,
        ],
      },
      {
        p: `Quell’s full panel is on our [Drug Facts page](/drug-facts), which makes a side-by-side comparison easy.`,
      },
      { h: 'When the label can’t answer the question' },
      {
        p: `A label tells you what’s in a drop and how to use it, not which drop your eyes need. If you’ve tried a couple of lubricating drops and your eyes still feel dry, an eye doctor can find the cause and decide what to do. {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Are all lubricating eye drops the same?',
        a: 'No. They differ in active ingredients, preservatives, oils, thickness and packaging. The Drug Facts panel on each product lists those details so you can compare them.',
      },
      {
        q: 'What is the difference between clear and milky eye drops?',
        a: 'Milky drops usually contain oils meant to support the tear film’s outer oil layer, while clear drops are typically water-based. Quell’s panel says: {milky}.',
      },
      {
        q: 'Does it matter which dry eye drops I buy?',
        a: 'It can. Ingredients, preservatives and thickness vary, and some people react to specific inactive ingredients. Read the panel, and ask an eye doctor if one product doesn’t help.',
      },
      {
        q: 'How do I compare dry eye drops on the label?',
        a: 'Check the Uses, active ingredients, preservatives, inactive ingredients, directions and warnings on each Drug Facts panel, then compare cost per bottle including shipping.',
      },
    ],
  },

  {
    slug: 'what-to-avoid-if-you-have-dry-eyes',
    title: 'What should you avoid if you have dry eyes?',
    description:
      'Air blowing at your face, unbroken screen time, rubbing your eyes, smoke and a dirty dropper tip. Everyday things to avoid when your eyes run dry.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `If you have dry eyes, avoid moving air aimed at your face (car vents, fans, hair dryers), long screen sessions without breaks, rubbing your eyes, smoke, and sleeping in a hot, dry room. With eye drops, avoid touching the tip to anything, using a bottle that has changed color, and using more than the label directs. Dryness that persists needs an eye doctor rather than more avoidance.`,
      },
      { h: 'Avoid air blowing across your eyes' },
      {
        p: `Moving air carries moisture away from the tear film between blinks. It’s the most common and most fixable cause of dry-feeling eyes in everyday life.`,
      },
      {
        list: [
          `Car vents aimed at your face. Point them at your chest, hands or the windshield.`,
          `Ceiling or box fans running all night over the bed. Use a lower speed, or turn them to face away. [Sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) has more.`,
          `Hair dryers pointed upward near your face. Keep the airflow below eye level and close your eyes when drying your bangs.`,
          `Desks under a heating or air conditioning vent. Move the desk or redirect the louvers.`,
          `Wind without eyewear on bikes, boats and motorcycles. Wraparound glasses block most of it.`,
        ],
      },
      { h: 'Avoid long, unbroken screen sessions' },
      {
        p: `People blink much less while looking at screens, and many blinks become partial ones that don’t cover the whole eye. A few hours of that leaves the tear film patchy. You don’t have to avoid screens, only the uninterrupted stretches: look away every so often, blink fully, and get up between tasks. Position monitors slightly below eye level rather than above it. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'Avoid rubbing your eyes' },
      {
        p: `When eyes feel gritty, rubbing is instinctive, but it can irritate the surface further and moves whatever is on your fingers into the eye. Try a few slow, complete blinks instead, or close your eyes for half a minute. If something feels stuck in the eye, rinse with clean water rather than rubbing, and see an eye doctor if the feeling doesn’t clear.`,
      },
      { h: 'Avoid smoke and fumes' },
      {
        p: `Smoke from cigarettes, fireplaces, campfires and grills irritates the eyes and dries the air around you. Sit upwind of a fire or grill, keep fireplace doors closed when you can, and step away when smoke drifts toward you. Strong cleaning fumes in a closed room have a similar effect, so open a window when you clean. [Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers the indoor side.`,
      },
      { h: 'Avoid hot, dry bedrooms' },
      {
        p: `Many people notice dryness most on waking. A bedroom with the heat turned up and no added moisture can dry the eyes during the night, especially if a vent or fan blows toward the bed. Turn the thermostat down at night, move the bed out of any airflow, and consider a humidifier, kept clean as its maker directs.`,
      },
      { h: 'Avoid these mistakes with eye drops' },
      {
        p: `Drops help most when they’re used the way the label says. With Quell, the panel’s instructions include:`,
      },
      {
        list: [
          `Directions: {directions}. Don’t assume more drops means more comfort.`,
          `Handling: {tip}.`,
          `The do-not-use line, worth checking before each use: {doNotUse}.`,
          `Storage: {storage}. Don’t leave the bottle in a hot or freezing car.`,
          `Caution: {warnings}.`,
        ],
      },
      {
        p: `Don’t share a bottle with someone else, and don’t keep using a drop that seems to make your eyes feel worse. Quell’s label doesn’t give directions for use with contact lenses, in children or alongside other eye drops; for any of those, ask an eye doctor or pharmacist first. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Avoid ignoring warning signs' },
      {
        p: `Avoiding triggers helps with everyday dryness, but some symptoms shouldn’t be managed at home. {stopUse} Sudden changes, a lot of pain, or dryness that keeps returning despite good habits are reasons to see an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists them.`,
      },
      { h: 'What you don’t need to avoid' },
      {
        p: `Dry eyes don’t mean giving up screens, reading, driving or time outdoors. They mean adjusting how you do them: glasses on windy days, breaks during long screen sessions, vents pointed elsewhere and a humidifier in winter. Most of the changes above take a few seconds once they become habits. If you want a quick sense of how your eyes are doing, our [dry eye self-check](/self-check) asks a few questions; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What should I avoid if I have dry eyes?',
        a: 'Avoid air blowing at your face, long screen sessions without breaks, rubbing your eyes, smoke and hot, dry bedrooms. With drops, avoid touching the tip and using more than the label directs.',
      },
      {
        q: 'Is it bad to rub dry eyes?',
        a: 'Rubbing can irritate the surface of the eye and move dirt from your fingers into it. Slow, full blinks or closing your eyes for a short while are gentler alternatives.',
      },
      {
        q: 'Should I avoid fans if I have dry eyes?',
        a: 'Not entirely, but avoid fans blowing straight at your face, especially while you sleep. A lower speed or aiming the fan elsewhere keeps the air moving without drying your eyes.',
      },
      {
        q: 'Do I need to stop using screens if my eyes are dry?',
        a: 'No. Break up long sessions, blink fully, look into the distance every so often and set the monitor slightly below eye level. Those changes address most screen-related dryness.',
      },
    ],
  },

  {
    slug: 'what-makes-dry-eyes-worse',
    title: 'What makes dry eyes worse?',
    description:
      'Dry eyes get worse when the tear film evaporates faster or you blink less. The air, tasks, times of day and seasons that do it, and what to change.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eyes get worse when something speeds evaporation from the tear film or reduces how often you blink. Low humidity, wind, heated or air-conditioned air, and airplane cabins do the first; screens, reading, driving and intense focus do the second. Combining them, such as a laptop in a heated room, makes it worse still. Time of day, the season and how much you’ve slept can also tip the balance.`,
      },
      { h: 'How the tear film loses ground' },
      {
        p: `The front of your eye is covered by a thin film with three layers: mucus that holds it to the eye, water in the middle, and a thin oil layer on top that slows evaporation. Every blink renews that film. Two things make dryness worse: the film evaporates faster than usual, or it gets renewed less often because blinks slow down or don’t close fully. Almost every trigger below works through one of those two.`,
      },
      { h: 'Dry air' },
      {
        p: `The lower the humidity, the faster water leaves the eye. Indoor air is often the driest air people breathe. In winter, heating warms cold outdoor air that started with little moisture, so its relative humidity falls. In summer, air conditioning removes moisture as it cools. Desert climates, high altitude and airplane cabins all add to it. [What humidity is good for dry eyes?](/guides/what-humidity-is-good-for-dry-eyes) gives the range people aim for indoors.`,
      },
      { h: 'Moving air' },
      {
        p: `Even moderately humid air dries the eye faster when it moves. Wind outdoors, a ceiling fan, a car’s vents, a hair dryer or a gym fan all strip moisture from the tear film between blinks. A gentle breeze over many hours can matter as much as a strong gust over a few minutes, which is why a fan left running through the night is such a common culprit.`,
      },
      { h: 'Tasks that reduce blinking' },
      {
        list: [
          `Screens: computers, phones and tablets all lower the blink rate, and many blinks during screen use are incomplete.`,
          `Reading on paper: less than a screen for some people, but still a big reduction over hours.`,
          `Driving, especially long highway drives and night driving.`,
          `Close, precise work: sewing, model-building, lab work, fly tying and similar.`,
          `Watching something intently: a game, a movie, a chessboard.`,
        ],
      },
      {
        p: `[Why do my eyes get dry when I focus?](/guides/why-do-my-eyes-get-dry-when-i-focus) explains why concentration and blinking are linked.`,
      },
      { h: 'Combinations make it worse' },
      {
        p: `Most bad days involve two triggers at once. Working at a laptop under an air conditioning vent, reading in bed with the heat on, driving into the wind with the window down, or gaming in a small room with a space heater all combine fewer blinks with faster evaporation. Fixing either half usually helps, and fixing both helps more.`,
      },
      { h: 'Time of day' },
      {
        p: `Many people find their eyes are more comfortable in the morning and drier by evening, after a day of screens and indoor air. Others notice dryness most on waking, often from a fan, a heater or a bedroom that dries out during the night. Noticing which pattern you have points to the trigger: evening dryness usually traces back to daytime habits, morning dryness to the bedroom.`,
      },
      { h: 'The season' },
      {
        p: `Winter heating season is the classic time for dry eyes in much of the country, but summer air conditioning, spring wind and dry fall days all play a part depending on where you live. [Are dry eyes worse in summer or winter?](/guides/are-dry-eyes-worse-in-summer-or-winter) compares the two.`,
      },
      { h: 'Short sleep and long days' },
      {
        p: `Tired eyes and dry eyes often go together. After a short night, people tend to feel their eyes more, and long days of screen work stack on top of it. Getting enough sleep isn’t an eye drop, but it’s part of the picture.`,
      },
      { h: 'What you can change first' },
      {
        list: [
          `Turn vents and fans away from your face.`,
          `Add moisture to the room where you spend the most time.`,
          `Break up screen and reading sessions with full blinks and distance gazing.`,
          `Wear wraparound glasses in wind.`,
          `Turn the bedroom heat down at night.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `A lubricating drop adds to the tear film rather than removing the trigger. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses: {uses}. Directions: {directions}. Read the caution before first use: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than the environment' },
      {
        p: `If your eyes stay dry after you’ve changed the air, the habits and the season has turned, something else may be going on. An eye doctor can find the cause and decide what to do. {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What makes dry eyes worse?',
        a: 'Anything that speeds evaporation from the tear film, like dry or moving air, or that reduces blinking, like screens, reading and driving. Combining the two makes it worse still.',
      },
      {
        q: 'Why are my dry eyes worse at night?',
        a: 'A day of screens and indoor air often leaves the tear film thinner by evening. If dryness is worst on waking instead, check the bedroom for fans, vents or dry heated air.',
      },
      {
        q: 'Does air conditioning make dry eyes worse?',
        a: 'It can. Air conditioning removes moisture as it cools the air, and vents move that air across the eyes. Aiming vents away from your face helps.',
      },
      {
        q: 'Can lack of sleep make dry eyes worse?',
        a: 'Many people notice their eyes more after a short night, and long screen days on little sleep add up. Sleep is part of the picture, alongside the air and your habits.',
      },
    ],
  },

  {
    slug: 'can-dry-eyes-go-away-on-their-own',
    title: 'Can dry eyes go away on their own?',
    description:
      'Dryness from a flight, a windy day or a long screen session often eases once the situation ends. When dry eyes ease on their own, and when they need a doctor.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Often, yes, when the dryness comes from a passing situation. Eyes that feel dry after a flight, a windy day, a long drive or a marathon screen session usually feel better once you’re out of that air and blinking normally again. Dryness tied to a season tends to ease when the season changes. Dryness that keeps coming back, lingers for weeks or comes with pain or vision changes needs an eye doctor.`,
      },
      { h: 'Why some dryness fades by itself' },
      {
        p: `The tear film is renewed every time you blink. When dryness comes from the environment, such as dry cabin air, wind or a vent blowing on your face, or from a task that slows blinking, the film recovers once the trigger is gone. Your eyes don’t need to be fixed so much as given normal conditions again. That’s why many people feel fine an hour after leaving a dry office or getting off a plane.`,
      },
      { h: 'Situations that usually pass' },
      {
        list: [
          `A flight: cabin air is very dry, and eyes often feel better soon after landing.`,
          `A windy day outdoors, especially without eyewear.`,
          `A long drive with the vents on your face.`,
          `A night in a dry hotel room or a house with the heat turned up.`,
          `A deadline week at the computer.`,
          `A smoky evening at a campfire or barbecue.`,
        ],
      },
      {
        p: `In each case, changing the situation is the main fix: getting out of the moving air, taking breaks, adding humidity or simply finishing the task. [Dry eyes after flying](/guides/dry-eyes-after-flying) covers one of the most common.`,
      },
      { h: 'Dryness that follows the seasons' },
      {
        p: `Some people only notice dry eyes in winter, when heating dries indoor air, or in summer, when air conditioning runs constantly. That kind of dryness tends to ease when the season turns, then return the following year. Since it comes back, it’s worth setting up habits for it: a humidifier ready for the first cold snap, vents redirected before summer, screen breaks scheduled year-round.`,
      },
      { h: 'How long should dry eyes take to get better?' },
      {
        p: `There’s no single timeline, since it depends on what caused the dryness. Situational dryness often eases within hours of leaving the trigger. Seasonal dryness lasts as long as the season’s air does. What matters more is the pattern: dryness that improves when you change your surroundings is likely tied to them, while dryness that doesn’t improve with any change is a reason to see an eye doctor.`,
      },
      {
        p: `Quell’s label also sets a limit for its own use. {stopUse} That 72-hour line is a good marker: if a lubricating drop and better habits haven’t made a difference in a few days, it’s time for an exam.`,
      },
      { h: 'Helping it along' },
      {
        list: [
          `Leave or change the situation: move away from the vent, get out of the wind, end the screen session.`,
          `Blink slowly and fully a few times, or close your eyes for a minute.`,
          `Add humidity to the room you’re in.`,
          `Use a lubricating drop as the label directs.`,
          `Get a good night’s sleep in a bedroom without a fan or heater blowing toward you.`,
        ],
      },
      { h: 'What a lubricating drop does and doesn’t do' },
      {
        p: `A lubricating drop adds to the tear film while your eyes recover from a dry stretch. It doesn’t remove the cause. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its panel lists the Uses: {uses}. Directions: {directions}. Read the caution before first use: {warnings}. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Dryness that doesn’t go away' },
      {
        p: `Some dry eyes don’t ease with a change of scenery. If yours feel dry most days whatever the season, keep returning after you’ve fixed vents and screens, or bother you enough to change what you do, an eye doctor can find the cause and decide what to do. The sooner you go, the sooner you know what you’re dealing with. [Dry eyes for two weeks: what should you do?](/guides/dry-eyes-for-two-weeks) and [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) cover when to book.`,
      },
      { h: 'Signs not to wait out' },
      {
        list: [
          `Eye pain, rather than mild discomfort.`,
          `Changes in your vision that don’t clear with blinking.`,
          `Irritation that continues or gets worse.`,
          `Something in the eye that won’t rinse out.`,
          `Any injury to the eye.`,
        ],
      },
      {
        p: `For a quick look at how your eyes are doing in daily life, our [dry eye self-check](/self-check) takes a few minutes; it’s not a diagnosis, but it can help you describe things to a doctor.`,
      },
    ],
    faq: [
      {
        q: 'Can dry eyes go away on their own?',
        a: 'Dryness from a passing situation, like a flight, wind or a long screen session, usually eases once you’re out of it. Dryness that keeps returning or comes with pain or vision changes needs an eye doctor.',
      },
      {
        q: 'How long do dry eyes take to go away?',
        a: 'It depends on the cause. Situational dryness often eases within hours of leaving the trigger, while seasonal dryness can last as long as the heating or cooling season does.',
      },
      {
        q: 'Do dry eyes from flying go away?',
        a: 'Usually. Cabin air is very dry, and most people feel better soon after landing once they’re in normal indoor air and blinking normally again.',
      },
      {
        q: 'When should I stop waiting for dry eyes to get better?',
        a: 'If dryness hasn’t improved after you’ve changed your surroundings and habits, or it comes with pain, vision changes or worsening irritation, see an eye doctor rather than waiting.',
      },
    ],
  },

  {
    slug: 'dry-eyes-vs-normal-eyes',
    title: 'Dry eyes vs. normal eyes: what’s different?',
    description:
      'Comfortable eyes keep an even tear film you never notice. Dry eyes make themselves felt. How the two differ, day to day, and what to do about it.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The biggest difference between dry eyes and normal eyes is that you don’t notice normal eyes. A comfortable eye keeps an even tear film between blinks, so vision stays clear and the surface feels like nothing at all. Dry eyes make themselves felt: gritty, burning, tired or watery, with vision that blurs and clears as you blink. Occasional dryness in dry air is common; frequent dryness deserves attention.`,
      },
      { h: 'What a normal eye does from blink to blink' },
      {
        p: `In a comfortable eye, each blink spreads a fresh tear film over the front surface: mucus against the eye, water in the middle, oil on top. The film stays smooth and intact until the next blink a few seconds later. Excess tears drain through small openings at the inner corner of the eyelids. You blink without thinking about it, and you rarely feel your eyes at all.`,
      },
      { h: 'What changes when eyes are dry' },
      {
        p: `In a dry eye, the tear film thins or breaks up before the next blink. Patches of the surface go uncovered for a moment. That shows up as sensations and as small changes in vision:`,
      },
      {
        list: [
          `A gritty or sandy feeling, as if something is in the eye.`,
          `Burning or stinging, especially by evening.`,
          `Tired, heavy eyes after reading or screen work.`,
          `Watering, which can be the eye’s reflex response to dryness.`,
          `Vision that blurs slightly and clears when you blink.`,
          `Discomfort in wind, air conditioning or smoke that other people seem not to notice.`,
        ],
      },
      {
        p: `Our guides on [why eyes feel gritty](/guides/why-do-my-eyes-feel-gritty) and [watery eyes that are dry](/guides/why-are-my-eyes-watery-if-they-are-dry) go into two of these.`,
      },
      { h: 'Normal eyes get dry too' },
      {
        p: `Everyone’s eyes can feel dry in the right conditions. A long flight, a windy hike, a day staring at spreadsheets or a night in a hot hotel room can make healthy eyes uncomfortable for a while. That’s ordinary. The difference is that normal eyes recover quickly once the conditions change. Eyes that feel dry in ordinary conditions, or stay dry long after the trigger is gone, are the ones worth paying attention to.`,
      },
      { h: 'A simple comparison' },
      {
        list: [
          `Normal eyes: you don’t notice them during a typical day. Dry eyes: you’re aware of them often.`,
          `Normal eyes: comfortable through a few hours of screen work with breaks. Dry eyes: uncomfortable within an hour or so.`,
          `Normal eyes: windy days are briefly annoying. Dry eyes: wind makes them sting or water heavily.`,
          `Normal eyes: you rarely reach for eye drops. Dry eyes: you use them often, or wish you had some.`,
          `Normal eyes: vision stays steady. Dry eyes: it blurs and clears with blinking.`,
        ],
      },
      { h: 'Checking where you fall' },
      {
        p: `If you’re not sure which side you’re on, start by noticing patterns for a week: when your eyes feel dry, what you were doing, and where. Our [dry eye self-check](/self-check) asks a few questions about daily life and gives you a score; it’s not a diagnosis, but it puts words to what you’re feeling. An eye doctor can look at the tear film directly, find the cause and decide what to do.`,
      },
      { h: 'Making dry eyes feel more like normal eyes' },
      {
        list: [
          `Turn vents and fans away from your face, at home, at work and in the car.`,
          `Add humidity to rooms that feel dry, particularly in heating season.`,
          `Blink fully and look into the distance during screen work and reading.`,
          `Wear wraparound sunglasses in wind and bright sun.`,
          `Keep smoke away from your face.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `A lubricating drop adds to the tear film so the surface stays covered between blinks. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its panel lists the Uses: {uses}. The directions are: {directions}. Read the caution first: {warnings}. Its label doesn’t give directions for contact lens wearers or children, so ask your eye doctor or pharmacist about those. The rest is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When the difference needs a doctor' },
      {
        p: `{stopUse} Dryness that keeps returning in ordinary conditions, or that changes how you work or sleep, is worth an exam. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs to act on quickly.`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between dry eyes and normal eyes?',
        a: 'Normal eyes keep an even tear film between blinks, so you rarely notice them. Dry eyes feel gritty, burning, tired or watery, and vision may blur and clear as you blink.',
      },
      {
        q: 'Is it normal for eyes to feel dry sometimes?',
        a: 'Yes. Dry air, wind, flights and long screen sessions can make healthy eyes feel dry for a while. It’s more of a concern when dryness happens in ordinary conditions or doesn’t pass.',
      },
      {
        q: 'How do normal eyes stay moist?',
        a: 'Each blink spreads a fresh tear film of mucus, water and oil across the eye. The oil layer slows evaporation until the next blink renews the film.',
      },
      {
        q: 'Can you tell if you have dry eyes by looking in the mirror?',
        a: 'Not reliably. Dryness is mostly felt rather than seen. Noticing when your eyes feel uncomfortable, and seeing an eye doctor if it keeps happening, tells you more.',
      },
    ],
  },
]
