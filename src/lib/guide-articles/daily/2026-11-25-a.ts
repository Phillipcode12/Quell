import type { Guide } from '@/lib/guide-types'

export const DAILY_20261125_A: Guide[] = [
  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-georgetown-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for GEORGETOWN LAKE, TX (GHCN USC00413507, cooperative station),
   *   elev 874 ft; raw JSON at .daily-job/acis1125/USC00413507.json
   *   (normal highs: Jan 60.3 F, Jun 92.0, Jul 95.9, Aug 96.8, Sep 90.1, Dec 61.7;
   *   normal lows: Jan 36.2 F, Feb 40.1, Jul 72.2, Aug 72.0, Dec 38.2;
   *   precipitation: May 4.25 in (wettest), Jun 3.97, Sep 3.96, Oct 3.92,
   *   Jul 2.19 (driest), Feb 2.24, Jan 2.50, Dec 2.59, Nov 2.71; twelve months
   *   sum to 37.08 in; snowfall 0.0 every month, not stated)
   * - No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   * - Neighbor guides read first: dry-eye-relief-austin-tx (Camp Mabry, offices,
   *   festivals) and dry-eye-relief-san-marcos-tx (tubing, corridor commutes).
   *   This one is built on the Georgetown Lake station and on home life: fans,
   *   patios, yards, and the switch between heat and air conditioning.
   */
  {
    slug: 'dry-eye-relief-georgetown-tx',
    title: 'Dry eye relief in Georgetown, Texas',
    description:
      'Georgetown’s August highs average 96.8°F and July is its driest month. NOAA’s normals for the Georgetown Lake station and how to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Georgetown, Texas, means planning around a long, hot summer and a winter of sudden cold mornings. NOAA’s normals for the Georgetown Lake station put August highs near 97°F, and July is the driest month of the year. Keep fans and car vents off your face, rest your eyes during screen work, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Georgetown weather, from the Georgetown Lake station' },
      {
        p: `The figures here come from NOAA’s 1991–2020 climate normals for the Georgetown Lake cooperative station, which sits at about 874 feet, as published through the National Weather Service’s NOWData pages. Normals are thirty-year averages, so any single year runs hotter, cooler, wetter or drier, but they show the shape of a typical Georgetown year:`,
      },
      {
        list: [
          `Normal highs reach 90°F or more in four months: June (92.0°F), July (95.9°F), August (96.8°F) and September (90.1°F).`,
          `July is the driest month, at 2.19 inches of precipitation. February (2.24 inches) is a close second.`,
          `May is the wettest, at 4.25 inches, followed by June (3.97), September (3.96) and October (3.92).`,
          `The twelve monthly precipitation normals add up to about 37.1 inches.`,
          `January brings the coldest nights, with a normal low of 36.2°F, and December follows at 38.2°F.`,
        ],
      },
      { h: 'Why July and August are hardest on your eyes' },
      {
        p: `Midsummer stacks two things against the tear film at once. July gets less rain than any other month at the station, and its normal high is close to 96°F. August is a little wetter and a little hotter. Hot, dry air pulls moisture off the surface of the eye faster, and the tear film’s thin oil layer is what slows that loss. Then you go inside, where air conditioning has been running for months, and the air that keeps the house cool is drying your eyes too.`,
      },
      {
        p: `Nights don’t give much of a break. July and August lows average about 72°F, so the AC rarely shuts off, even after dark. Small habits add up over a Georgetown summer:`,
      },
      {
        list: [
          `Run errands, walk the dog and do yard work early, before the afternoon heat builds.`,
          `Wear wraparound sunglasses outdoors. They block glare and the breeze that sweeps across your eyes.`,
          `Point car vents at your chest or the floor, not your face, especially on short trips when the AC runs on high.`,
          `Close your eyes for a few seconds now and then, and make each blink a full one.`,
        ],
      },
      { h: 'Ceiling fans, patios and long evenings' },
      {
        p: `A summer evening in Georgetown often means a fan overhead, whether that’s on the back porch, in the living room or above the bed. Moving air feels good on hot skin, but it also speeds evaporation from the eyes, and it does that whether you notice it or not. If your eyes feel scratchy in the morning, look at the fan first.`,
      },
      {
        list: [
          `Turn bedroom fans to a lower speed, or angle a floor fan toward your feet instead of your face.`,
          `On the patio, sit beside the fan’s path rather than directly under it.`,
          `Our guide to [sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers bedroom setups in more detail.`,
        ],
      },
      { h: 'Winter: mild afternoons, cold mornings' },
      {
        p: `Georgetown winters swing. January’s normal high is 60.3°F, which makes for comfortable afternoons, but the normal low of 36.2°F means the heat clicks on in the small hours and early in the morning. Many households switch between heating and cooling within the same week as fronts come and go. Warming cold air indoors lowers its relative humidity, so the furnace or heat pump dries the air even though the outdoors may feel damp.`,
      },
      {
        p: `A small humidifier in the bedroom, a slightly lower thermostat at night and a reading chair moved away from the floor vent all help. If you use a space heater on the coldest mornings, keep it pointed at your legs. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through the house room by room.`,
      },
      { h: 'Wet months still have dry days' },
      {
        p: `May, June, September and October each average close to four inches of rain at the station, but that rain tends to come in storms rather than as steady drizzle. Between them, days are often sunny, warm and breezy, and that’s when most people are outside mowing, edging, blowing leaves or working in the garden. Wind and sun dry the eyes, and yard equipment throws grit around. Sunglasses or safety glasses help with both. If dirt, grass or debris actually gets into your eye and won’t blink out, that is a job for an eye doctor or urgent care, not for lubricating drops.`,
      },
      { h: 'Screens at home and at work' },
      {
        p: `Whatever the weather, much of the day happens in front of a screen. People blink less while reading or scrolling, and each partial blink leaves part of the eye’s surface uncovered for longer. In an air-conditioned home office in August or a heated one in January, that adds up quickly. Raise your eyes from the screen every so often, look across the room, and blink slowly a few times. Keep the monitor a little below eye level, so your lids cover more of the eye.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its uses as: {uses}. The directions read: {directions}. To keep the dropper clean: {tip}.`,
      },
      {
        p: `The panel’s warning reads: {warnings}. Storage is printed as: {storage}. A car parked in a sunny Georgetown lot in August can get far hotter than that range, so carry the bottle in a bag you bring inside. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Georgetown' },
      {
        p: `We ship from Brentwood, Tennessee, to Georgetown and every other US address. Checkout works as a guest, shipping is {shipping} per order, and orders of {freeBottles} or more bottles ship free. You get tracking by email, but no delivery date is promised, so reorder before you run out. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Georgetown page](/eye-drops/georgetown-tx) and the [Texas page](/eye-drops/state/texas) for local details. Neighbors to the south have their own guides for [Austin](/guides/dry-eye-relief-austin-tx) and [San Marcos](/guides/dry-eye-relief-san-marcos-tx).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label is plain about when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Sensitivity to light, discharge, or dryness that keeps coming back despite changes at home are also reasons to book a visit. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Georgetown, Texas?',
        a: 'July, at 2.19 inches of precipitation in NOAA’s 1991–2020 normals for the Georgetown Lake station. February is close behind at 2.24 inches, and May is the wettest month at 4.25 inches.',
      },
      {
        q: 'How hot does Georgetown, Texas get in summer?',
        a: 'Normal highs at the Georgetown Lake station are 92.0°F in June, 95.9°F in July, 96.8°F in August and 90.1°F in September. July and August lows average about 72°F.',
      },
      {
        q: 'How cold does Georgetown, Texas get in winter?',
        a: 'January is the coldest month, with a normal high of 60.3°F and a normal low of 36.2°F at the Georgetown Lake station. December’s normal low is 38.2°F.',
      },
      {
        q: 'Does Quell ship to Georgetown, Texas?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Georgetown and every US address, for {shipping} per order or free on {freeBottles} or more bottles. Tracking comes by email, and no delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-lakeland-fl:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for LAKELAND 2, FL (GHCN USC00084802, cooperative station), elev
   *   139 ft; raw JSON at .daily-job/acis1125/USC00084802.json
   *   (precipitation: Jun 8.69 in, Jul 8.85, Aug 9.08 (wettest), Sep 7.62;
   *   Jun–Sep sum 34.24 in; Oct 3.04, Nov 1.93 (driest), Dec 2.61, Jan 2.99,
   *   Feb 2.33, Mar 3.06, Apr 2.82, May 3.80; Oct–May sum 22.58 in; twelve months
   *   sum to 56.82 in, so Jun–Sep is about 60 percent of the year;
   *   normal highs: Jan 73.7 F, Jul 92.1, Aug 92.2, Nov 79.8, Dec 75.6, May 89.5;
   *   normal lows: Jan 50.6 F, Feb 53.3, Dec 53.9, Jul 74.2, Aug 74.4;
   *   snowfall 0.0, not stated)
   * - No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   * - Neighbor guides read first: dry-eye-relief-winter-haven-fl (lakes, yard
   *   work, Thanksgiving) and dry-eye-relief-tampa-fl (spring dry season,
   *   beaches). This one is built on Lakeland 2's split between a wet four
   *   months and a dry eight, winter mornings and the AC calendar.
   */
  {
    slug: 'dry-eye-relief-lakeland-fl',
    title: 'Dry eye relief in Lakeland, Florida',
    description:
      'About 60 percent of Lakeland’s rain falls June through September, and November is the driest month. NOAA’s normals and what helps dry eyes year-round.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Lakeland, Florida, depends on the half of the year you’re in. NOAA’s normals for the Lakeland 2 station put about 60 percent of the year’s rain in June through September, and November is the driest month. In the dry half, sun, breeze and heating dry the eyes. In the wet half, it’s air conditioning. Blink fully, keep vents off your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Lakeland’s year in two parts' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Lakeland 2 station, a cooperative weather station at about 139 feet, describe a city with a very lopsided rain calendar. The twelve monthly precipitation normals add up to about 56.8 inches, but they aren’t spread evenly:`,
      },
      {
        list: [
          `June through September average 34.24 inches together: June 8.69, July 8.85, August 9.08 and September 7.62.`,
          `The other eight months, October through May, add up to about 22.6 inches.`,
          `November is the driest month, at 1.93 inches. February follows at 2.33 inches.`,
          `August is the wettest month, and also the warmest, with a normal high of 92.2°F.`,
        ],
      },
      {
        p: `A wet place on paper can still be hard on eyes. What matters for the tear film is the air right in front of your face, and in Lakeland that air changes with the season and with whether you’re indoors.`,
      },
      { h: 'October to May: the dry half' },
      {
        p: `By late October the afternoon storms fade, and November brings the least rain of the year. This is when most people want to be outside: evening walks, youth soccer and softball, weekends on a boat or a bike. Sunny days with a steady breeze are pleasant, but they also pull moisture off the eyes quickly. Normal highs stay in the upper 70s to low 80s through much of the stretch, so the sun is strong even in December.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on bright, breezy days. They cut glare and wind together.`,
          `On a boat or a bike, your own speed adds wind. Glasses with a closer fit help more than a visor alone.`,
          `Take short indoor breaks on long outdoor afternoons and give your eyes a few slow blinks.`,
        ],
      },
      { h: 'Cool mornings and the brief heating season' },
      {
        p: `Lakeland doesn’t get much winter, but it does get cool mornings. January’s normal low at the station is 50.6°F, and February and December average about 53°F to 54°F. On those mornings, heat pumps come on for an hour or two, car heaters run during the commute, and some households bring out a space heater. Heated air dries the eyes quickly, and because the heating season is so short, many people don’t think of it as a cause.`,
      },
      {
        p: `If your eyes feel scratchy on cool mornings, check where the warm air is blowing. Aim car vents low, and keep space heaters pointed at your legs. Our guide to [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) has more on that.`,
      },
      { h: 'June to September: the air-conditioning months' },
      {
        p: `Summer is humid outside, and nobody stays outside for long. July and August highs average about 92°F, and lows stay around 74°F, so air conditioning runs day and night for months. Cooling air also removes moisture from it, and cold air blowing across your face speeds evaporation from the tear film. Offices, stores and cars are often kept cold, and the trip between them and the parking lot swings your eyes from humid heat to dry chill several times a day.`,
      },
      {
        list: [
          `At a desk, check whether a ceiling vent blows straight down on you. A simple deflector or a moved chair can help.`,
          `In the car, angle vents toward your chest or the windshield.`,
          `At home, set the thermostat a degree or two warmer at night, and keep bedroom fans off your face.`,
        ],
      },
      { h: 'Screens, late afternoons and long drives' },
      {
        p: `Screens slow your blink rate in every season. Long stretches on a laptop in a chilled room are one of the most common reasons eyes feel dry by late afternoon. Look away from the screen every so often, close your eyes for a moment, and finish each blink. Longer drives add steady vent air and the glare of a low afternoon sun in the dry months, so sunglasses belong in the car year-round.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}. One habit matters with any dropper bottle: {tip}.`,
      },
      {
        p: `The warning on the panel is: {warnings}. Storage is listed as: {storage}. Florida cars get hot even in the cool season, so keep the bottle in a bag that comes inside with you. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Lakeland' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Lakeland and every US address. Checkout works as a guest, shipping is {shipping} per order, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Lakeland page](/eye-drops/lakeland-fl) and the [Florida page](/eye-drops/state/florida) for local details, or read our guides for nearby [Winter Haven](/guides/dry-eye-relief-winter-haven-fl) and [Tampa](/guides/dry-eye-relief-tampa-fl).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The panel sets out when to stop: {stopUse} Dryness that keeps returning through both halves of the year, light sensitivity or discharge are reasons to see an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Lakeland, Florida?',
        a: 'November, at 1.93 inches of precipitation in NOAA’s 1991–2020 normals for the Lakeland 2 station. February is next at 2.33 inches.',
      },
      {
        q: 'When is the rainy season in Lakeland, Florida?',
        a: 'June through September. Those four months average 34.24 inches together at the Lakeland 2 station, about 60 percent of the year’s 56.8 inches, with August the wettest at 9.08 inches.',
      },
      {
        q: 'Why do my eyes feel dry in Lakeland in the summer?',
        a: 'Mostly because of air conditioning. With July and August lows around 74°F, the AC runs day and night, and cool, dry air blowing across your face speeds evaporation from the tear film.',
      },
      {
        q: 'Can I get Quell shipped to Lakeland, Florida?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Lakeland and every US address, for {shipping} per order or free on {freeBottles} or more bottles. No delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-palmdale-ca:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for PALMDALE AP, CA (GHCN USW00023182, Palmdale Regional Airport),
   *   elev 2,509 ft; raw JSON at .daily-job/acis1125/USW00023182.json
   *   (precipitation: Feb 1.49 in (wettest), Dec 1.02, Jan 0.98, Mar 0.87,
   *   Oct 0.47, Nov 0.36, Apr 0.26, Sep 0.16, May 0.13, Jul 0.11, Aug 0.03,
   *   Jun 0.02 (driest); May–Sep sum 0.45 in; twelve months sum to 5.90 in;
   *   normal highs: Jan 58.9 F, Jun 91.0, Jul 97.6, Aug 97.7, Sep 91.6, Dec 57.7;
   *   normal lows: Jan 32.8 F, Feb 36.1, Jul 67.4, Aug 66.0, Dec 31.6;
   *   Jul high-low gap 30.2 F, Aug 31.7 F; snowfall "M", left out)
   * - No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   * - Neighbor guide read first: dry-eye-relief-lancaster-ca (Fox Field station;
   *   wind, aerospace work, Highway 14 commute, poppy season). This one uses the
   *   Palmdale airport station and is built on the near-rainless summer, the
   *   winter mornings near freezing, and home life in a high desert.
   */
  {
    slug: 'dry-eye-relief-palmdale-ca',
    title: 'Dry eye relief in Palmdale, California',
    description:
      'Palmdale averages under half an inch of rain from May through September. NOAA’s normals for its airport station and practical dry eye relief in the desert.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Palmdale, California, starts with how little water the air holds. NOAA’s normals for Palmdale Regional Airport give the whole year about 5.9 inches of precipitation, and May through September together get less than half an inch. Shade your eyes from sun and wind, keep heater and AC vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Palmdale’s climate in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Palmdale Regional Airport (the Palmdale AP station), at about 2,510 feet on the floor of the high desert, show a place with almost no summer rain and real winter cold:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals add up to about 5.9 inches.`,
          `June averages 0.02 inches and August 0.03. May through September together come to 0.45 inches.`,
          `February is the wettest month, at 1.49 inches, followed by December (1.02) and January (0.98).`,
          `July and August highs average 97.6°F and 97.7°F.`,
          `December’s normal low is 31.6°F, and January’s is 32.8°F.`,
        ],
      },
      { h: 'Five nearly rainless months' },
      {
        p: `From May to September the desert gets close to no rain at all. Days are hot, the sun is strong at this elevation, and the air has little moisture to offer the eye. The tear film’s water layer evaporates faster in dry heat, and the oil layer on top is what slows that down. When summer drags on, many people notice their eyes feel gritty by midafternoon, or that they’re blinking hard to clear their vision.`,
      },
      {
        list: [
          `Save outdoor chores and exercise for early morning, when it’s cooler and the sun is lower.`,
          `Wear sunglasses that wrap around the sides. They cut glare off pavement and pale ground and block crosswinds too.`,
          `A wide-brimmed hat adds shade to your eyes on long afternoons outside.`,
          `Keep a bottle of your eye drops in a bag that stays out of direct sun.`,
        ],
      },
      { h: 'Thirty-degree evenings' },
      {
        p: `The high desert cools off fast after sunset. In July the normal low is 67.4°F, about 30 degrees below the normal high, and August’s gap is close to 32 degrees. Evenings on the back patio or at a ball field are often the most pleasant part of a summer day. They’re also when people sit outside for hours, often with a breeze moving across the yard. Bring the sunglasses for the last of the light and keep blinking fully during a long game or conversation.`,
      },
      { h: 'Winter mornings near freezing' },
      {
        p: `Palmdale gets real winter nights. December and January lows average about 32°F to 33°F, and highs stay in the upper 50s. That means months of heating indoors, from the first cold mornings of fall into spring. Heating dry desert air dries it further, so the inside of a Palmdale house in January can be very hard on eyes.`,
      },
      {
        list: [
          `A cool-mist humidifier in the bedroom can make the biggest difference, since you spend hours there.`,
          `Keep chairs, beds and couches out of the direct path of heating vents.`,
          `Turn the thermostat down a little at night.`,
          `In the car on a cold morning, send the defrost air to the windshield and keep the face vents closed or angled away.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes into more detail about the house.`,
      },
      { h: 'The wettest months are still dry' },
      {
        p: `Even Palmdale’s rainy season is light. February, the wettest month, averages under an inch and a half. Winter storms bring wind and cold along with whatever rain they carry, and on gusty days the air is full of dust. If sand or grit gets into your eye and stays there, see an eye doctor or go to urgent care. That isn’t something to rinse out with lubricating drops.`,
      },
      { h: 'Screens and long hours inside' },
      {
        p: `Desert summers and cold winters both push life indoors, often in front of a screen. People blink less while focusing, and partial blinks leave part of the eye exposed. In a room with dry air, that shows up fast. Every so often, look away from the screen at something across the room, close your eyes for a few seconds, and set the monitor a little below eye level.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its uses as: {uses}. The directions read: {directions}. Keep the dropper clean: {tip}.`,
      },
      {
        p: `The label’s warning reads: {warnings}. It gives storage as: {storage}. A closed car in a Palmdale summer can get much hotter than that, and a cold car on a December night can drop below it, so don’t leave the bottle in the glove box. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Palmdale' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Palmdale and every US address. Check out as a guest, pay {shipping} per order, or get free shipping on {freeBottles} or more bottles. Tracking comes by email, though no delivery date is promised, so reorder with time to spare. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. The [Palmdale page](/eye-drops/palmdale-ca) and the [California page](/eye-drops/state/california) have local details, and our [Lancaster guide](/guides/dry-eye-relief-lancaster-ca) covers the other end of the valley.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label tells you when to stop: {stopUse} An eye doctor can find the cause and decide what to do. If light starts to bother you, or dryness keeps coming back however you adjust the house, don’t wait. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to take seriously.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Palmdale, California get a year?',
        a: 'About 5.9 inches, adding up the monthly 1991–2020 normals for Palmdale Regional Airport. February is the wettest month at 1.49 inches, and May through September together average 0.45 inches.',
      },
      {
        q: 'How cold does Palmdale get in winter?',
        a: 'December’s normal low at Palmdale Regional Airport is 31.6°F and January’s is 32.8°F, with highs in the upper 50s. Heating runs for months, which dries the air indoors.',
      },
      {
        q: 'Why do my eyes feel gritty in the desert?',
        a: 'Dry, hot air speeds evaporation from the tear film, and wind adds to it. In Palmdale, May through September get almost no rain, so the outdoor air offers little moisture. Sunglasses, shade and full blinks help.',
      },
      {
        q: 'Does Quell deliver to Palmdale, California?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Palmdale and every US address, for {shipping} per order or free on {freeBottles} or more bottles. Tracking comes by email, without a promised delivery date.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-wilson-nc:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for WILSON 3 SW, NC (GHCN USC00319476, cooperative station, about
   *   three miles southwest of town), elev 110 ft; raw JSON at
   *   .daily-job/acis1125/USC00319476.json
   *   (precipitation: Sep 6.08 in (wettest), Jul 5.75, Aug 5.33, Jun 4.14,
   *   Mar 4.16, May 3.92, Apr 3.88, Jan 3.75, Dec 3.60, Oct 3.36, Nov 3.29,
   *   Feb 3.04 (driest); twelve months sum to 50.30 in;
   *   normal highs: Jan 52.1 F, Feb 55.4, Jul 90.2, Aug 88.2, Nov 63.5, Dec 55.5;
   *   normal lows: Jan 32.7 F, Feb 34.3, Mar 40.4, Jul 71.1, Nov 41.1, Dec 35.4;
   *   snowfall: Jan 0.8 in, Feb 0.4, Mar 0.1, Dec 0.6, others 0.0; sum 1.9 in)
   * - No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   * - Neighbor guides read first: dry-eye-relief-rocky-mount-nc (ROCKY MOUNT
   *   WILSON AP station, season-by-season, Tar River) and dry-eye-relief-raleigh-nc.
   *   This one uses the Wilson 3 SW station and is built on why a place where
   *   every month gets 3 inches still dries eyes: heating, cooling, cars, screens.
   */
  {
    slug: 'dry-eye-relief-wilson-nc',
    title: 'Dry eye relief in Wilson, North Carolina',
    description:
      'Every month in Wilson averages at least 3 inches of rain, yet dry eyes are common. NOAA’s normals for Wilson 3 SW and what dries eyes indoors.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Wilson, North Carolina, is mostly about indoor air. NOAA’s normals for the Wilson 3 SW station show every month averaging at least three inches of rain, so the outdoors is rarely parched. What dries eyes here is heating from November to March, air conditioning through a hot summer, car vents and long screen time. Adjust those, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What NOAA’s Wilson station records' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Wilson 3 SW cooperative station, about three miles southwest of town at roughly 110 feet, show a well-watered year with hot summers and cool winters:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals add up to about 50.3 inches.`,
          `February is the driest month, and even it averages 3.04 inches.`,
          `September is the wettest, at 6.08 inches, with July (5.75) and August (5.33) close behind.`,
          `July’s normal high is 90.2°F, and its normal low is 71.1°F.`,
          `January’s normal low is 32.7°F, and normal snowfall for the whole year is about 1.9 inches.`,
        ],
      },
      {
        p: `NOAA has another station nearby: our [Rocky Mount guide](/guides/dry-eye-relief-rocky-mount-nc) uses the airport between the two cities. Stations a few miles apart can differ, which is why this guide sticks to the one named for Wilson.`,
      },
      { h: 'Why your eyes dry out in a wet place' },
      {
        p: `Rain outside doesn’t set the air inside. A house with the windows closed has its own climate, made by the furnace or heat pump in winter and the air conditioner in summer. Both lower the moisture in the air you breathe and blink in, and both push moving air across rooms. The tear film depends on a thin oil layer to slow evaporation. Moving, dry air works against it, whatever the rain gauge says.`,
      },
      { h: 'November through March: the heat is on' },
      {
        p: `Normal lows at the station fall to about 41°F in November and stay below 41°F until March, with January near freezing. That’s five months of heating. Warming cold air without adding water lowers its relative humidity, so a cozy room can feel like a desert to your eyes. People often notice it first in the morning, after hours in a heated bedroom, or in the evening after a long stretch on the couch near a vent.`,
      },
      {
        list: [
          `Run a cool-mist humidifier in the bedroom and clean it as its maker directs.`,
          `Close or redirect the vent nearest your bed or favorite chair.`,
          `Lower the thermostat a few degrees at night.`,
          `If you use a space heater, keep it pointed at your feet, not your face.`,
        ],
      },
      {
        p: `A light snow is possible from December through March, but the station’s normals add up to under two inches for the year. Winter in Wilson is mostly cold, gray and damp outside and dry inside.`,
      },
      { h: 'June through September: long air-conditioned months' },
      {
        p: `Summer flips the problem. July highs average about 90°F, and nights stay near 71°F, so air conditioning runs for weeks without a break. Cooled air carries less moisture, and the cold stream from a ceiling vent at work or a car dash vent dries the eye surface quickly. Hot, humid days outside, then cold, dry rooms inside, is a pattern many people in eastern North Carolina know well.`,
      },
      {
        list: [
          `Move your desk chair out from under a ceiling vent, or ask about a deflector.`,
          `Angle dashboard vents toward your chest or the windshield.`,
          `Set the house a degree or two warmer at night.`,
          `Keep bedroom fans on a low setting and pointed away from the bed.`,
        ],
      },
      { h: 'Outdoor work, yards and fields' },
      {
        p: `Wilson sits in farm country, and many people spend time outside for work or around the house: mowing, blowing leaves, hauling and loading. Sun and wind dry the eyes, and machinery kicks up dust and plant debris. Sunglasses or safety glasses help with all of it. If something gets into your eye and doesn’t blink out, that calls for an eye doctor or urgent care, not lubricating drops. Our guide on [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more about long days outside.`,
      },
      { h: 'Screens and long drives' },
      {
        p: `Screens slow blinking, and partial blinks leave part of the eye exposed. Long drives add vent air and, in winter, a low sun at commute time. Glance away from the screen now and then, close your eyes for a few seconds, and keep sunglasses in the car.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `For a Wilson household that runs the heat for five months, Quell is one option: a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its uses as: {uses}. The directions are: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `The warning on the panel is: {warnings}. The storage line reads: {storage}. A car in a Wilson parking lot can pass that range in July or drop below it on a January night, so carry the bottle with you. You can read every line on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Wilson' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Wilson and every US address. Check out as a guest; shipping is {shipping} per order, or free on {freeBottles} or more bottles. Tracking comes by email, but no delivery date is promised, so order before you run low. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Wilson page](/eye-drops/wilson-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have local details, and our [Raleigh guide](/guides/dry-eye-relief-raleigh-nc) covers the city to the west.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Light sensitivity, discharge, or dryness that keeps coming back once you’ve fixed the vents and the humidity are also reasons to go. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list of warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Wilson, NC?',
        a: 'February, at 3.04 inches of precipitation in NOAA’s 1991–2020 normals for the Wilson 3 SW station. September is the wettest month at 6.08 inches.',
      },
      {
        q: 'Does Wilson, NC get snow?',
        a: 'A little. The Wilson 3 SW station’s normals add up to about 1.9 inches of snow a year, from December through March, with January the snowiest month at 0.8 inches.',
      },
      {
        q: 'Why are my eyes dry in North Carolina when it rains so much?',
        a: 'Because indoor air sets the conditions your eyes live in. Heating from November through March and air conditioning through the summer both dry the air and move it across your face, whatever the rain outside.',
      },
      {
        q: 'Can I order Quell to Wilson, North Carolina?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Wilson and every US address, for {shipping} per order or free on {freeBottles} or more bottles. Tracking comes by email, and no delivery date is promised.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-snowboarders',
    title: 'Dry eyes for snowboarders',
    description:
      'Snowboarding dries eyes with cold wind, glare, fogged goggles and lodge heat. How riders can keep their eyes comfortable from first chair to the drive home.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Snowboarders get dry eyes from cold wind created by their own speed, from bright glare off snow, and from goggles that fog and get pushed up onto the helmet. Riding sideways also turns one side of the face into the wind. Keep goggles sealed and on your face, rest your eyes on the lift, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why do my eyes get dry snowboarding?' },
      {
        p: `Mountain air in winter is cold and holds little moisture, and you add your own wind every time you point the board downhill. Moving air speeds evaporation from the tear film, and the thin oil layer on top is what slows that loss. Squinting into glare narrows the opening of your eyes but also makes blinks shorter and less complete, so the surface of each eye stays uncovered longer between them.`,
      },
      {
        p: `Snowboarding has a few habits of its own that skiing guides don’t cover. Riders spend time sitting in the snow to strap in, put goggles up while they wait, then pull them back down with snow on the foam. Park and halfpipe laps mean short bursts of speed and lots of standing around in the sun. And because you ride with one shoulder forward, the lead side of your face takes more of the wind and spray.`,
      },
      { h: 'Your stance and the wind' },
      {
        p: `Whether you ride regular or goofy, your lead eye faces downhill and catches the wind first. Many riders notice that one eye waters or stings more than the other by the end of a run. That isn’t unusual. Goggles that seal evenly on both sides matter more for a snowboarder than for a skier, since a small gap on the lead side gets wind pushed straight into it on every turn.`,
      },
      {
        list: [
          `Check the seal in a mirror before your first run. There should be no gap at the temples or the nose.`,
          `Make sure your helmet doesn’t press the goggle frame down and open a gap below it.`,
          `If one eye always feels worse, look at that side of the frame first.`,
        ],
      },
      { h: 'Goggles up, goggles down' },
      {
        p: `The goggles-on-the-helmet habit is one of the main reasons riders’ eyes dry out. With goggles up, you’re riding or standing in cold wind with nothing in front of your eyes. When you pull them down, warm breath and sweat from your forehead fog the lens, and you push them up again. That loop leaves your eyes uncovered for much of the day.`,
      },
      {
        list: [
          `Keep goggles on your face, including on the lift, unless you need to wipe them.`,
          `Don’t tuck a neck gaiter up over your nose under the goggles. Breath heads straight for the lens.`,
          `Wipe the inside of the lens only with the soft bag or cloth it came with, and only when it’s dry.`,
          `If snow gets packed into the foam after a fall, knock it out before you put the goggles back on.`,
        ],
      },
      {
        p: `Our guide to [dry eyes under ski goggles](/guides/dry-eyes-under-ski-goggles) covers fit, vents and fogging in more detail. Everything there applies to a board as well.`,
      },
      { h: 'Glare in the park and on bluebird days' },
      {
        p: `Snow reflects a lot of light, and terrain parks often sit in open sun. On a clear day, you can spend hours squinting at features and at the landing. The right lens tint for the conditions helps you stop squinting, which lets your eyes blink normally. Many riders carry a darker lens for sun and a lighter one for flat light, since a dark lens in fog makes you strain to read the snow.`,
      },
      { h: 'Falls, spray and something in the eye' },
      {
        p: `Snowboarders fall more often than they’d like, and a face-first slam can push snow inside the goggles. Clean snow melts and runs out. But snow near lifts, groomers and parking areas can carry grit, and edges spray ice chips. If something stays in your eye, scrapes, or makes it hard to keep the eye open, stop riding and get it checked by ski patrol, urgent care or an eye doctor. Lubricating drops aren’t for flushing out debris.`,
      },
      { h: 'On the lift and in the lodge' },
      {
        p: `The chairlift is your rest stop. Close your eyes for a few seconds, then blink slowly several times. The gondola or a long lift line is a good time to check that your goggles are clear and sealed.`,
      },
      {
        p: `The lodge is a different kind of dry. Heated indoor air, often from vents up high or a fireplace, dries the eyes quickly after a cold morning. Sit away from the heat source, take your goggles off so they can dry, and give your eyes a few minutes of rest before you head back out. Hand dryers in restrooms are worth a step back from too.`,
      },
      { h: 'Carrying eye drops on the mountain' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. Directions: {directions}. Use clean, dry hands, which means taking off your gloves first, and follow the label: {tip}.`,
      },
      {
        p: `Storage matters in the cold. The label says: {storage}. An inside jacket pocket, close to your body, keeps the bottle far warmer than a pants pocket or a pack on a cold chair. Don’t leave it in the car through a cold night at a trailhead or a resort lot. If it’s been very cold, read the label line on color too: {doNotUse}. Our guide on whether [eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) has more.`,
      },
      { h: 'The drive home' },
      {
        p: `After a day on the mountain, your eyes are already tired, and the car heater is about to blow hot, dry air at you for an hour or more. Point the vents at the windshield and your feet, keep sunglasses handy for low winter sun on the way down, and take a break if your eyes start to sting. The full Drug Facts panel is on our [Drug Facts page](/drug-facts), and our guide to [ski trips and dry eyes](/guides/ski-trips-and-dry-eyes) covers the rest of a mountain weekend.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label is clear about when to stop: {stopUse} After a bad fall, an eye that hurts, a scratchy feeling that doesn’t ease, or any change in vision needs an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why does one eye water more than the other when I snowboard?',
        a: 'Riding sideways puts your lead eye into the wind and spray first. If one eye always feels worse, check that side of your goggle seal, since a small gap at the temple lets wind straight in.',
      },
      {
        q: 'Should snowboarders keep goggles on in the lift line?',
        a: 'Yes, where you can. Pushing goggles up onto the helmet leaves your eyes in the cold wind, and pulling them back down tends to fog the lens. Keep them on and only lift them to clear snow or wipe them.',
      },
      {
        q: 'What should I do if snow or ice gets in my eye snowboarding?',
        a: 'Clean snow usually melts and runs out. If something stays in your eye, scratches, or makes it hard to keep the eye open, stop riding and have ski patrol, urgent care or an eye doctor check it. Lubricating drops aren’t for flushing debris.',
      },
      {
        q: 'Where should snowboarders carry eye drops?',
        a: 'In an inside jacket pocket close to your body, where the bottle stays warmer. Quell’s label says: {storage}. Take your gloves off and use clean hands when you put drops in.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-ski-instructors',
    title: 'Dry eyes for ski instructors',
    description:
      'Ski instructors spend long shifts facing wind and glare, often with goggles off to talk to students. Practical ways to keep your eyes comfortable all season.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Ski instructors get dry eyes from long shifts in cold, dry mountain air, from facing into the wind and sun while students ski toward them, and from taking goggles off to make eye contact. Talking fogs lenses, and lodge breaks bring dry heat. Keep goggles on where you can, switch to sunglasses when standing still, rest your eyes between lessons, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why ski instructors get dry eyes' },
      {
        p: `An instructor’s day isn’t like a guest’s day. Guests ski with the wind behind them for half the run and take a break when they want. Instructors stand on the slope for long stretches, often facing uphill toward a line of students, which puts the sun and the wind in front of them. They talk constantly, which pushes warm, moist breath up into the goggles. And they repeat that, lesson after lesson, for a whole season.`,
      },
      {
        p: `Cold air holds little moisture, and moving air pulls more of it off the eye. The tear film’s oil layer slows that loss, but long exposure to wind and glare, plus fewer complete blinks while you concentrate on students, wears the eyes down by the end of a shift.`,
      },
      { h: 'Goggles off to teach: the eye-contact problem' },
      {
        p: `Many instructors push their goggles up to talk to a group so students can see their eyes, especially young or nervous beginners. That’s good teaching and hard on your eyes. While the goggles are up, the wind hits your eyes directly, and when they come down again, warm breath and forehead sweat can fog the lens.`,
      },
      {
        list: [
          `For standing explanations, try sunglasses with a close wrap instead of bare eyes. Students can still see you through a lighter tint.`,
          `Keep a second pair in a chest pocket so switching takes seconds.`,
          `Turn your back to the wind when you stop to talk, if the terrain allows. Students will then face away from it too.`,
          `Put goggles back on before you ski, not partway down.`,
        ],
      },
      { h: 'Facing the sun while students come toward you' },
      {
        p: `When you set up below a group and call students down one at a time, you’re often looking uphill into bright sky and sunlit snow for several minutes. Squinting shortens blinks and leaves the eye surface exposed longer. Choose a lens or sunglasses dark enough for a bright day so you can keep your eyes relaxed, and change position now and then so the sun is to your side rather than straight ahead.`,
      },
      { h: 'Skiing backward and watching students' },
      {
        p: `Skiing backward or sideslipping in front of a beginner keeps your attention locked on them. People blink less while focused, the same way they do at a screen. Make a habit of closing your eyes for a second or two whenever the group stops, and take a few slow, full blinks on the lift. It sounds small, but over a long day it adds up.`,
      },
      { h: 'Talking, breath and fogged goggles' },
      {
        p: `Instructing means talking, and every sentence sends warm air up behind the lens. A neck gaiter pulled over your nose makes it worse by funneling breath upward. Keep the gaiter below your nose while you teach, keep vents clear of snow, and let fogged goggles clear before you rely on them. Our guide to [dry eyes under ski goggles](/guides/dry-eyes-under-ski-goggles) explains fit and venting in more detail.`,
      },
      { h: 'Lodge breaks, locker rooms and the staff room' },
      {
        p: `Between lessons, instructors duck into heated buildings for lunch, gear changes and paperwork. Heated air dries the eyes, and so do hand dryers and boot dryers blowing warm air in a small room. The quick swing from the cold slope to a hot room is uncomfortable for many people.`,
      },
      {
        list: [
          `Sit away from heaters and vents during lunch.`,
          `Take your goggles off indoors so they can dry, and close your eyes for a minute before heading back out.`,
          `Step away from boot and glove dryers while they run.`,
          `If you finish the day with paperwork or scheduling on a phone, take breaks from the screen too.`,
        ],
      },
      { h: 'Using a lubricating drop during a season' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. The directions are: {directions}. With three doses a day, many instructors fit them into the start of the shift, the lunch break and the end of the day, indoors where hands can be clean and dry.`,
      },
      {
        p: `Follow the bottle-tip rule on the label: {tip}. That’s easier at a table than on a chairlift with gloves on. Keep the bottle in an inside pocket, since the label says: {storage}. If it’s been left somewhere very cold, check it against this line before use: {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Something in the eye on the hill' },
      {
        p: `Ice chips from edges, wind-blown grit near lifts and snow kicked up during a fall can all get into an eye. If something stays in, scratches, or makes it hard to keep the eye open, stop teaching and have ski patrol, a clinic or an eye doctor look at it. That isn’t what lubricating drops are for. Our guide for [ski patrol](/guides/dry-eyes-for-ski-patrol) covers more about working the mountain in cold and glare.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says: {stopUse} An eye doctor can find the cause and decide what to do, and that matters more when you depend on clear vision for your job. Light sensitivity or dryness that gets worse as the season goes on is worth a visit before it costs you lessons. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do ski instructors get dry eyes?',
        a: 'They spend long shifts facing into wind and sun while students ski toward them, take goggles off to talk, and fog their lenses by talking. Lodge heat between lessons dries the eyes further.',
      },
      {
        q: 'Should ski instructors take their goggles off when teaching kids?',
        a: 'Many do, so students can see their eyes. It leaves your eyes in the wind, though. A pair of close-fitting sunglasses with a lighter tint is a middle ground for standing explanations.',
      },
      {
        q: 'When should a ski instructor use eye drops during the day?',
        a: 'Quell’s directions are {directions}. Many instructors use them at the start of the shift, at lunch and at the end of the day, indoors with clean, dry hands, rather than on the lift.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-snowcat-operators',
    title: 'Dry eyes for snowcat operators',
    description:
      'Snowcat operators groom through the night in a heated cab, staring at lit snow for hours. Why the job dries the eyes and what helps from shift start to sleep.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Snowcat operators get dry eyes from long night shifts in a heated cab with the defrost running, hours of staring at bright snow under work lights, and the cold blast when they climb out to check a run. Daytime sleep after a shift is often short. Keep cab vents off your face, dim the dash, blink fully on every turnaround, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why grooming dries the eyes' },
      {
        p: `Grooming happens while the mountain is closed, so most of the work is at night, often for many hours at a stretch. The cab is a small, sealed space with heat and defrost blowing to keep the windows clear in freezing air. Warm, moving, dry air speeds evaporation from the tear film, and the thin oil layer that slows that loss can only do so much when the air in front of your face never stops moving.`,
      },
      {
        p: `The other half is concentration. Operators watch the snow surface ahead, the edge of the run, the blade and the tiller behind them, and any skiers or crews still on the hill. People blink less when they focus hard, much as they do at a screen, and partial blinks leave part of the eye uncovered between them.`,
      },
      { h: 'The heated cab and the defrost' },
      {
        list: [
          `Send defrost air up the glass and keep the face-level vents closed or turned toward the side windows.`,
          `Use the lowest fan setting that keeps the windshield clear.`,
          `Dress in layers so you can run the cab a little cooler without being cold.`,
          `If the cab has a heater near your feet, use that rather than more air at chest height.`,
        ],
      },
      { h: 'Work lights on white snow' },
      {
        p: `Snow reflects light, and a snowcat’s work lights make a bright patch in front of the machine that stands out sharply against the dark. Hours of looking at that brightness, then glancing at a darker dash or a mirror, keep your eyes adjusting all night. Squinting into glare also shortens blinks.`,
      },
      {
        list: [
          `Dim the dash display and any cab screens to the lowest setting you can read.`,
          `Keep the inside of the windshield clean. A film on the glass scatters light and makes glare worse.`,
          `Don’t wear tinted lenses at night. If you need protection from flying snow when you step out, use clear safety glasses.`,
        ],
      },
      { h: 'Turnarounds are blink breaks' },
      {
        p: `A grooming shift has natural pauses: the turn at the top or bottom of a run, waiting for another machine to pass, a radio call. Use them. Close your eyes for a couple of seconds, then blink slowly and fully a few times. It’s a small habit, but over a long shift it gives the tear film a chance to spread again, since blinking is what spreads tears across the eye.`,
      },
      { h: 'Climbing out into the cold' },
      {
        p: `When you get out to check a cut, look at a winch anchor or clear snow from the lights, the air outside is cold and often windy, and it hits eyes that have been in a warm cab for hours. Spindrift and ice chips blow around the machine. A pair of clear safety glasses or goggles by the door makes those trips easier. If snow, grit or ice gets into your eye and stays, or the eye hurts or blurs, have it checked at a clinic or by an eye doctor. Lubricating drops are for dryness, not for flushing out debris.`,
      },
      { h: 'Sleeping in the daytime' },
      {
        p: `Night work means sleeping while the sun is up, often for fewer hours than you need. Eyes tend to feel drier after short sleep. A dark, cool bedroom helps, and so does keeping heat vents and fans pointed away from the bed. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more about working nights, and [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) covers short-sleep mornings.`,
      },
      { h: 'Using eye drops on a grooming shift' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. The directions say: {directions}. For a night shift, many operators use one dose before going out, one on a mid-shift break with the machine parked, and one after the shift. Never put drops in while the machine is moving.`,
      },
      {
        p: `Hands that have handled a winch cable or diesel fuel need a wash before they go near your eyes, and the label adds: {tip}. A cab can be warm while the machine runs and freezing once it’s parked, so carry the bottle in an inside pocket. The storage line says: {storage}. If a bottle spent the night in a cold machine, check this line before you use it: {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'The rest of the mountain crew' },
      {
        p: `Daytime staff deal with the same cold, dry air in a different way. Our guides for [ski patrol](/guides/dry-eyes-for-ski-patrol) and [ski instructors](/guides/dry-eyes-for-ski-instructors) cover wind, glare and goggles on the open slope.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Because the job depends on judging distance and terrain in the dark, don’t wait on blurry vision, halos that are new to you, or an eye that hurts. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to take seriously.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry driving a snowcat?',
        a: 'Long night shifts in a sealed, heated cab with the defrost running dry the air around your face, and hours of staring at lit snow slow your blinking. Keep vents off your face and blink fully on every turnaround.',
      },
      {
        q: 'How can I reduce glare from work lights on snow at night?',
        a: 'Dim the dash and cab screens, keep the inside of the windshield clean, and don’t wear tinted lenses at night. Clear safety glasses are better for trips outside the cab.',
      },
      {
        q: 'Can I use eye drops in the middle of a night shift?',
        a: 'Yes, as long as the machine is parked and your hands are clean. Quell’s directions are {directions}, so a dose before, during and after a shift fits a night schedule.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-boyfriend',
    title: 'Christmas gifts for a boyfriend',
    description:
      'Thoughtful Christmas gifts for a boyfriend who works at a screen, plays games, drives a lot or loves the outdoors, plus a practical idea for tired, dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Good Christmas gifts for a boyfriend fit how he spends his days: gear for a hobby, something that makes his desk or car more comfortable, or a plan you’ll do together. If he stares at screens, drives a lot or works outside and complains his eyes feel dry, a pair of good sunglasses, a desk lamp or a lubricating eye drop can be a useful add-on. Christmas is Friday, December 25, so plan shipping early.`,
      },
      { h: 'Start with how he actually spends his time' },
      {
        p: `The gifts that land are usually the ones that show you’ve noticed his routine. Before you shop, think through a normal week for him: where he works, what he does on weekends, what he complains about. A gift that fixes a small daily annoyance is often remembered longer than something flashy.`,
      },
      {
        list: [
          `Does he work at a computer most of the day, or on his feet?`,
          `Does he drive long distances for work or to see you?`,
          `Is he outside a lot, skiing, fishing, hiking or working on a truck?`,
          `Does he game late, read before bed or watch a lot of sports?`,
        ],
      },
      { h: 'For a boyfriend at a desk or a screen' },
      {
        p: `People who spend hours at screens blink less, and partial blinks leave the eyes drying between them. A gift that makes the setup more comfortable helps him whether or not he ever thinks about his eyes.`,
      },
      {
        list: [
          `A monitor arm or laptop stand, so the screen sits a little below eye level.`,
          `A warm, dimmable desk lamp to cut harsh contrast in a dark room.`,
          `A small humidifier for his desk or bedroom, if his place runs dry in winter.`,
          `A good pair of over-ear headphones for long work calls or gaming sessions.`,
        ],
      },
      { h: 'For a boyfriend who drives a lot' },
      {
        p: `Long drives mean hours of vent air and, in winter, a low sun at commute time. Practical gifts for the car get used daily: a pair of polarized sunglasses he’ll keep in the console, a sunshade, a phone mount that keeps the map at a glance, or a thermos for early starts. If he drives home from your place late at night, a warm hat and gloves for scraping the windshield count too.`,
      },
      { h: 'For a boyfriend who loves the outdoors' },
      {
        p: `Wind and cold dry the eyes, and glare off snow or water makes people squint for hours. Gear that fits his sport is a safe bet. Think goggles with a lens for flat light if he skis or snowboards, wraparound sunglasses if he fishes or cycles, a good neck gaiter, or hand warmers. Our guide to [Christmas gifts for a skier](/guides/christmas-gifts-for-a-skier) has more ideas for the mountain.`,
      },
      { h: 'Experiences you’ll share' },
      {
        p: `Plenty of couples would rather have a plan than a package. A concert, a cooking class, tickets to a game, a weekend away or a reservation at a place he’s mentioned all make good gifts. Write the plan on a card and put it under the tree. If the trip involves flying, a long drive or a ski weekend, that’s a natural moment to pack eye-friendly basics too.`,
      },
      { h: 'Are eye drops a weird gift for a boyfriend?' },
      {
        p: `As the main gift, probably. As a small add-on for someone who has mentioned dry, scratchy or tired eyes, it’s practical and thoughtful. Tuck a bottle in his stocking, or pair it with sunglasses or a desk lamp so the gift is about comfort rather than a complaint. If he hasn’t mentioned his eyes, skip it, and choose something else on this list.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. Before you give it, read the warning: {warnings}. Emu oil is one of its ingredients, so if he has an egg or bird allergy, choose a different gift. If he wears contacts or already uses other drops, the label doesn’t cover that. He should ask his eye doctor or pharmacist. Our guide on [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution.`,
      },
      { h: 'One bottle each, even if you live together' },
      {
        p: `If you both like the idea, order a bottle for each of you rather than sharing one. The label says: {tip}, and that’s easier to keep when each person has a bottle. Our guide to [whether couples can share a bottle](/guides/can-couples-use-the-same-bottle-of-eye-drops) explains why. One order can include both, and orders of {freeBottles} or more bottles ship free.`,
      },
      { h: 'Ordering in time for Christmas' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses only. Checkout is as a guest, shipping is {shipping} per order, and you can ship to his address while keeping the confirmation email with you. We don’t promise a delivery date, so order early in December rather than counting on a particular week. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Our guide to [whether the recipient sees the price](/guides/will-the-gift-recipient-see-the-price) covers what’s in the box, and more holiday ideas are under [Gifts and the holidays](/guides/topic/seasonal). You can see Christmas gifts for [a husband](/guides/christmas-gifts-for-your-husband) too.`,
      },
    ],
    faq: [
      {
        q: 'What should I get my boyfriend for Christmas?',
        a: 'Something that fits how he spends his days: gear for a hobby, a practical upgrade for his desk or car, or a plan you’ll do together. Gifts that fix a small daily annoyance tend to be remembered.',
      },
      {
        q: 'Is it weird to give my boyfriend eye drops for Christmas?',
        a: 'As the main gift, it might be. As a small stocking add-on for someone who has mentioned dry or tired eyes, it’s practical. Pair it with sunglasses or a desk lamp, and skip it if he has an egg or bird allergy.',
      },
      {
        q: 'What is a good Christmas gift for a boyfriend who games all night?',
        a: 'Comfort upgrades for his setup work well: over-ear headphones, a monitor arm, a warm desk lamp or a small humidifier. Long sessions at a screen slow blinking, so anything that makes the room easier on his eyes helps.',
      },
      {
        q: 'Can I ship a Christmas gift straight to my boyfriend’s apartment?',
        a: 'Yes. Put his name and address in the shipping details and your own email at checkout, so the confirmation comes to you. Quell ships within the US only and doesn’t promise a delivery date, so order early.',
      },
    ],
  },

  {
    slug: 'dry-eyes-on-christmas-morning',
    title: 'Dry eyes on Christmas morning',
    description:
      'An early start after a late night, a heated house, the fireplace and hours of photos and video calls. Why eyes feel dry on Christmas morning and what helps.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Eyes often feel dry on Christmas morning because the day starts early after a late night, the house is heated and full, and you spend hours looking at a phone for photos and video calls. A fireplace or space heater adds dry, moving air. Get what sleep you can, keep heat off your face, take screen breaks, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why do my eyes feel so dry on Christmas morning?' },
      {
        p: `Christmas Day falls on a Friday this year, December 25, 2026, and for many households it starts before sunrise. Christmas Eve often runs late with wrapping, assembling or a late service. Short sleep leaves many people with eyes that feel gritty and heavy before the first present is open. Then the morning stacks up several things that dry the eyes at once.`,
      },
      {
        list: [
          `The heat has been running all night in a house that may be full of guests.`,
          `A fireplace, wood stove or space heater warms the room where everyone gathers.`,
          `You hold a phone up for photos and video for an hour or more, often without blinking much.`,
          `The oven and stovetop run for hours as breakfast turns into dinner prep.`,
        ],
      },
      { h: 'Short sleep and an early start' },
      {
        p: `Eyes that haven’t had enough rest tend to feel drier and more tired when they open. There isn’t much you can do about an early wake-up on Christmas, but you can make the night before easier on your eyes. Finish wrapping at a table with good light, not on the floor in a dim room. Turn the bedroom heat down a little and keep vents and fans off the bed. Our guide to [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) has more about rough nights, and [assembling gifts on Christmas Eve](/guides/dry-eyes-assembling-gifts-on-christmas-eve) covers the late-night part.`,
      },
      { h: 'Fireplace mornings and space heaters' },
      {
        p: `A fire in the living room is part of Christmas morning for many families, and so is a space heater in a drafty room. Both warm the air and move it, and warm, moving air speeds evaporation from the tear film. Sitting right in front of either one dries your eyes faster than the rest of the room.`,
      },
      {
        list: [
          `Choose a seat to the side of the fireplace rather than straight in front of it.`,
          `Point space heaters at legs and feet, never at faces.`,
          `If smoke drifts into the room, open a window briefly and move away from it.`,
          `Our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers the rest of the season.`,
        ],
      },
      { h: 'Wrapping paper, boxes and ribbon' },
      {
        p: `Tearing open presents fills the room with paper, cardboard and tissue, and people end up digging through piles of it on the floor. Most of it is harmless, but a corner of a box or a flicked ribbon can catch an eye. If something scratches your eye or leaves it hurting or blurry, that’s for an eye doctor or urgent care, not for drops, even on a holiday.`,
      },
      { h: 'Photos, video and video calls' },
      {
        p: `Christmas morning may be the longest stretch of phone-watching in your year. You film the kids or grandkids, take pictures of every gift, then join a video call with family in another state. Focusing on a screen slows blinking, and partial blinks leave the eye uncovered for longer.`,
      },
      {
        list: [
          `Hand the camera job around so nobody films for an hour straight.`,
          `During a video call, set the phone or laptop down at a distance instead of holding it close to your face.`,
          `Look away from the screen every few minutes and blink slowly a few times.`,
          `Turn screen brightness to match the room, especially in the early-morning dark.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from video calls](/guides/dry-eyes-from-video-calls) has more ideas for a long call.`,
      },
      { h: 'The kitchen through the afternoon' },
      {
        p: `Christmas breakfast often runs straight into dinner preparation. Opening a hot oven sends a blast of dry air at your face, and a stovetop running for hours warms the kitchen. Step back when you open the oven door, and take breaks in a cooler room.`,
      },
      { h: 'Using a lubricating drop on Christmas Day' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. The directions are: {directions}. Many people find it easy to use first thing in the morning, after the presents and before bed. Wash your hands first, which matters after handling wrapping and food, and follow the label: {tip}.`,
      },
      {
        p: `Keep the bottle somewhere other than the mantel or a windowsill near a heater. The storage line reads: {storage}. The full panel is on our [Drug Facts page](/drug-facts). If someone at the gathering wants to try yours, the label’s tip rule is a good reason to say no and point them to their own bottle.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Holidays are an easy time to put off a doctor, but the label is clear: {stopUse} An eye doctor can find the cause and decide what to do. If something hit your eye, or your vision changes, use urgent care rather than waiting for the holiday weekend to pass. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What day is Christmas in 2026?',
        a: 'Christmas Day 2026 falls on Friday, December 25. Christmas Eve is Thursday, December 24.',
      },
      {
        q: 'Why do my eyes feel gritty when I wake up early on Christmas?',
        a: 'Short sleep after a late Christmas Eve often leaves eyes feeling dry and heavy, and a house heated all night adds to it. Turning the bedroom heat down a little and keeping vents off the bed can help.',
      },
      {
        q: 'Can taking photos on my phone dry out my eyes?',
        a: 'Focusing on a screen slows blinking, so an hour of filming or photos can leave eyes feeling dry. Pass the camera around, look away every few minutes and blink slowly a few times.',
      },
      {
        q: 'Where should I sit near a fireplace with dry eyes?',
        a: 'To the side of the fireplace rather than straight in front of it, where warm, moving air hits your face most. Point space heaters at legs and feet, too.',
      },
    ],
  },

  {
    slug: 'dry-eyes-driving-home-after-thanksgiving',
    title: 'Dry eyes driving home after Thanksgiving',
    description:
      'The long Sunday drive home after Thanksgiving means heater air, low sun and tired eyes. How to set the vents, plan stops and keep your eyes comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Eyes get dry on the drive home after Thanksgiving because the car heater blows warm, dry air for hours, a low late-November sun forces you to squint, and a long weekend of short sleep leaves eyes tired before you start. Aim vents at the windshield and floor, wear sunglasses, stop every couple of hours to rest your eyes, and use lubricating drops only when you’re parked.`,
      },
      { h: 'Why the drive home is harder than the drive there' },
      {
        p: `Thanksgiving is Thursday, November 26, 2026, and for many families the return trip is Sunday, November 29. By then you’ve had several late nights, a full house and probably a few hours of football on a big screen. Eyes start the drive drier and more tired than they were on Wednesday. Traffic is often heavy, which means more time in the car and more attention fixed on the road ahead.`,
      },
      {
        p: `Focused driving slows blinking, much like reading or screen work. Heater air passing across your face speeds evaporation from the tear film, and the thin oil layer that slows that loss has a harder time when blinks are few and the air is dry.`,
      },
      { h: 'Set the car up before you leave' },
      {
        list: [
          `Point the dash vents at the windshield, your chest or the floor, never at your eyes.`,
          `Use the lowest fan speed that keeps the windows clear.`,
          `Use seat heat or a lower cabin temperature instead of blasting hot air, if your car allows it.`,
          `Clean the inside of the windshield. A hazy film makes glare worse in low sun.`,
          `Keep sunglasses where you can reach them without looking away from the road.`,
        ],
      },
      { h: 'Low sun in late November' },
      {
        p: `In late November the sun stays low in the sky, so in the morning and the late afternoon it can sit right in your line of sight for long stretches of road. Squinting into it shortens your blinks. Polarized sunglasses help with glare off wet pavement and other cars, and the sun visor can block the worst of it. If you can choose your departure time, leaving earlier in the day may put the sun behind you for part of the drive, depending on your direction.`,
      },
      { h: 'After dark: headlights and brake lights' },
      {
        p: `Sunset comes early in late November, so many people finish the drive in the dark, in heavy traffic, staring at headlights and brake lights. Tired, dry eyes tend to find glare harder after dark. Keep the dash display dim, and don’t wear tinted sunglasses at night. Our guide to [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has more on night glare.`,
      },
      { h: 'Plan stops for your eyes, not just for gas' },
      {
        p: `Stopping every two hours or so gives your eyes the break that focused driving doesn’t. At each stop:`,
      },
      {
        list: [
          `Close your eyes for half a minute, then blink slowly a few times.`,
          `Look at something far away, such as a tree line or the end of the parking lot.`,
          `Step into fresh air for a few minutes rather than sitting in the warm car.`,
          `Switch drivers if someone else is rested and willing.`,
        ],
      },
      {
        p: `If your eyes are so tired you’re struggling to keep them open, that’s about safety as well as comfort. Pull over somewhere safe and rest.`,
      },
      { h: 'Using eye drops on a road trip' },
      {
        p: `Never put in drops while the car is moving. Pull into a parking spot, put the car in park, wash or sanitize your hands, and give your vision a moment to settle before you drive. Our guide [can you drive after putting in eye drops?](/guides/can-you-drive-after-putting-in-eye-drops) explains why waiting helps.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. The directions are: {directions}. Many drivers fit one dose into a mid-trip stop. The label also says: {tip}. Keep the bottle in a bag in the cabin rather than the trunk, since the storage line reads: {storage}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Passengers get dry eyes too' },
      {
        p: `Passengers who spend the trip on a phone or tablet blink even less than the driver. Encourage breaks to look out the window, and keep the back-seat vents pointed away from faces. If someone in the back is cold, a blanket does less harm to everyone’s eyes than turning the heat up another few degrees.`,
      },
      { h: 'Back home on Sunday night' },
      {
        p: `When you get home, the house has probably been cold for days, and the heat will run hard to catch up. Turn it up gradually rather than all at once, and keep vents off the couch and bed. A humidifier in the bedroom can help the first night back. For the rest of a winter trip, our guide to [eye drops for a winter road trip](/guides/eye-drops-for-a-winter-road-trip) covers packing and cold cars.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label is clear: {stopUse} An eye doctor can find the cause and decide what to do. If your vision is blurry and doesn’t clear with blinking, or your eyes hurt, don’t keep driving. Get somewhere safe and get help. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'When is the Sunday after Thanksgiving in 2026?',
        a: 'Thanksgiving is Thursday, November 26, 2026, so the Sunday after Thanksgiving is November 29.',
      },
      {
        q: 'Why do my eyes get dry on long drives?',
        a: 'Focused driving slows blinking, and heater or AC air moving across your face speeds evaporation from the tear film. Aim vents away from your eyes, wear sunglasses in glare, and stop every couple of hours.',
      },
      {
        q: 'Can I put in eye drops while driving?',
        a: 'No. Pull into a parking spot, put the car in park and use clean hands. Give your vision a moment to settle before you start driving again.',
      },
      {
        q: 'How do I keep the low sun out of my eyes when driving in November?',
        a: 'Wear polarized sunglasses, use the visor, and keep the inside of the windshield clean, since a hazy film makes glare worse. Timing your trip so the sun is behind you can also help.',
      },
    ],
  },

  {
    slug: 'is-it-bad-to-use-eye-drops-often',
    title: 'Is it bad to use eye drops often?',
    description:
      'Using a lubricating drop as often as its label says is what it’s for. Needing it far more often is a signal. What the label allows and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Using a lubricating eye drop as often as its label directs isn’t bad. That’s the use it was made for. Quell’s directions are: {directions}. What deserves attention is wanting drops far more often than the label says, or still feeling uncomfortable after several days. That points to something an eye doctor should look at, and the label sets a 72-hour line for stopping and asking.`,
      },
      { h: 'What “often” means on an eye drop label' },
      {
        p: `Every over-the-counter drug carries a Drug Facts panel, and the Directions line on it is the answer to “how often.” It isn’t a suggestion or a minimum. It’s the schedule the product is meant to be used on without a doctor’s order. Different eye drops carry different directions, so the right frequency for one bottle doesn’t carry over to another.`,
      },
      {
        p: `For Quell, the schedule is a drop in each eye three times a day. Using it that often, every day, is what the label describes. Our guide to [using eye drops every day](/guides/is-it-okay-to-use-eye-drops-every-day) goes into the daily side of the question. This guide is about the other side: what it means when three times doesn’t feel like enough.`,
      },
      { h: 'Is it bad to use more drops than the label says?' },
      {
        p: `More than the label says isn’t covered by the label, so it isn’t something to decide on your own. If you find yourself wanting a fourth or fifth dose, that’s a question for an eye doctor or pharmacist, who can look at the reason you need it. Our guide [can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) explains this in more detail.`,
      },
      {
        p: `More drops at once doesn’t help either. One drop is what the directions call for, and the eye can only hold so much liquid. Extra runs down your cheek.`,
      },
      { h: 'Why some people reach for drops every hour' },
      {
        p: `Wanting drops very often is usually a sign of what’s happening around your eyes, not a flaw in the drop. Common reasons include:`,
      },
      {
        list: [
          `Long screen sessions, which slow blinking and leave the eye uncovered between partial blinks.`,
          `Heated air in winter or air conditioning in summer, especially from a vent aimed at your face.`,
          `Wind, sun and cold outdoors, or a car heater on a long drive.`,
          `Short sleep, which leaves eyes feeling drier and heavier.`,
          `Air travel, with cabin air that’s drier than most homes.`,
        ],
      },
      { h: 'What needing drops often can be telling you' },
      {
        p: `If you change the air around you and still want drops constantly, that’s useful information. The label gives specific reasons to stop: {stopUse} Outside those, dryness that keeps coming back week after week, eyes that feel worse at the same time every day, or discomfort that wakes you up are good reasons to book an eye exam. An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'Cut the need, not just the drops' },
      {
        p: `The most effective way to use drops less often is to make your eyes need them less. A few changes do the most:`,
      },
      {
        list: [
          `Move vents, fans and space heaters so they don’t blow across your face.`,
          `Set screens slightly below eye level, so your lids cover more of each eye.`,
          `Look away from a screen every so often and blink slowly a few times.`,
          `Run a humidifier in the bedroom during heating season.`,
          `Wear wraparound sunglasses outdoors on windy or bright days.`,
        ],
      },
      {
        p: `Our guide to [what makes dry eyes worse](/guides/what-makes-dry-eyes-worse) lists more triggers to check around the house and at work.`,
      },
      { h: 'Keep a one-week log before you see a doctor' },
      {
        p: `If you’re heading to an eye doctor because you use drops often, a simple log helps them help you. For a week, jot down each time you use a drop or want one:`,
      },
      {
        list: [
          `The time of day.`,
          `Where you were: at a desk, in the car, outside, in bed.`,
          `What you were doing, such as reading, driving or working on a laptop.`,
          `How your eyes felt before and after.`,
          `The name of the drop and how many times you used it that day.`,
        ],
      },
      {
        p: `Patterns tend to show up quickly. Bring the log and the bottle, or a photo of its label, to the appointment.`,
      },
      { h: 'Make each dose count' },
      {
        p: `If you’re using a drop on the label’s schedule, a few habits help each dose do its job. Wash your hands. Follow the label: {tip}. Tilt your head back, place one drop, then close your eyes gently for a moment rather than blinking hard. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and blinking is what spreads tears across the eye. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'What the label leaves to your eye doctor' },
      {
        p: `Quell’s label doesn’t give directions for contact lenses, children, or use alongside other eye drops. If any of those apply, ask an eye doctor or pharmacist before you use it. The same goes for how often to use drops if you’ve had eye surgery or take medicines for your eyes. Our [dry eye self-check](/self-check) can help you organize what you’ve noticed, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Is it bad to use eye drops a lot?',
        a: 'Using a lubricating drop as often as its label says isn’t bad. Wanting drops much more often than that is worth raising with an eye doctor or pharmacist, rather than adding doses on your own.',
      },
      {
        q: 'Why do I need eye drops so often?',
        a: 'Often it’s the air around you: screens, heated or air-conditioned rooms, wind, or short sleep. If you change those and still want drops constantly, see an eye doctor, who can find the cause.',
      },
      {
        q: 'Can I use lubricating eye drops every hour?',
        a: 'Only if that drop’s label says so. Quell’s directions are {directions}. If that schedule doesn’t keep you comfortable, ask an eye doctor or pharmacist instead of adding doses.',
      },
      {
        q: 'What should I write down before an eye appointment for dry eyes?',
        a: 'For a week, note each time you use or want a drop, where you were, what you were doing and how your eyes felt. Bring that log and the bottle or a photo of its label.',
      },
    ],
  },

  {
    slug: 'how-often-should-you-use-eye-drops',
    title: 'How often should you use eye drops?',
    description:
      'As often as that drop’s own label says. How to find the schedule on any eye drop, how to space Quell’s three daily doses, and when to ask a doctor.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Use eye drops as often as their own label says, because the schedule is set product by product. Quell’s directions are: {directions}. Find the Directions line on any drop you buy, space the doses through your waking hours, and ask an eye doctor if that schedule doesn’t keep you comfortable or you’re no better after a few days.`,
      },
      { h: 'Where the answer is printed' },
      {
        p: `The Drug Facts panel on every over-the-counter drug has a section headed Directions. For eye drops, it tells you how many drops to use, in which eye or eyes, and how many times a day. That line is the instruction for using the product without a doctor’s order. If you’re standing in a store or shopping online, read it before you buy, so you know what you’re signing up for. Our guide to [the Directions section](/guides/directions-section-eye-drop-label) walks through how to read it.`,
      },
      { h: 'Why eye drops have different schedules' },
      {
        p: `Eye drops aren’t all the same product with different labels. They contain different ingredients in different amounts, and each label’s directions were written for that formula. So a friend’s routine with their drop, or the schedule on an old bottle you used years ago, doesn’t tell you how often to use a new one. Read the label on the bottle in your hand.`,
      },
      {
        p: `Prescription eye drops come with directions from the prescriber and the pharmacy, which may be very different from anything on an over-the-counter box. If you use prescription drops, ask your eye doctor or pharmacist before adding any other drop, including a lubricating one. Quell’s label doesn’t cover use alongside other drops.`,
      },
      { h: 'What Quell’s schedule means in practice' },
      {
        p: `Quell’s directions say one drop, three times a day, in each eye. In plain terms:`,
      },
      {
        list: [
          `One drop per eye per dose, not two or three.`,
          `Both eyes each time, as the directions say.`,
          `Three doses spread across the day, not three drops in a row.`,
        ],
      },
      {
        p: `Our guide on [why the label says 1 drop 3 times a day](/guides/why-does-the-label-say-1-drop-3-times-a-day) explains the wording in more detail.`,
      },
      { h: 'Spacing three doses through your day' },
      {
        p: `The label doesn’t name times of day, so you can fit the three doses around your routine. It helps to tie each one to something you already do, so you don’t have to think about it:`,
      },
      {
        list: [
          `Office worker: after you get to your desk, after lunch, and in the evening at home.`,
          `Early shift: before you leave the house, on your midday break, and after the shift.`,
          `Lots of driving: before you set off, at a parked midday stop, and after you get home. Never while the car is moving.`,
          `Evening person: late morning, late afternoon, and before bed.`,
        ],
      },
      {
        p: `If you work nights, our guide to [what “3 times per day” means if you work nights](/guides/what-3-times-per-day-means-if-you-work-nights) adapts the schedule. If you’re crossing time zones, see [timing eye drops across time zones](/guides/eye-drops-and-time-zone-changes).`,
      },
      { h: 'Time your doses around your hardest hours' },
      {
        p: `Within the label’s three doses, you can choose when they land. Many people place one before the part of the day that’s hardest on their eyes: a long block of screen work, a drive into low sun, an afternoon outdoors in wind, or a flight. Planning that way makes the same three doses more useful than spending them all in the morning.`,
      },
      { h: 'If you miss a dose' },
      {
        p: `Missing one now and then is common. The label doesn’t say to double up, so don’t. Use the next dose when it comes around. Our guide [what if I miss a dose of eye drops?](/guides/what-if-i-miss-a-dose-of-eye-drops) has more on this, and [how to remember to use eye drops](/guides/how-to-remember-to-use-eye-drops) suggests reminders.`,
      },
      { h: 'If the label’s schedule isn’t enough' },
      {
        p: `Sometimes three doses don’t keep eyes comfortable. That’s not a reason to start a fourth on your own. Ask an eye doctor or pharmacist, who can look at why. The label also sets specific points to stop: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'How long to keep going' },
      {
        p: `Frequency and duration are separate questions. The label tells you how often, and our guide to [how long you should use eye drops for dry eyes](/guides/how-long-should-you-use-eye-drops-for-dry-eyes) covers how many days or weeks. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its full label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How often should you use eye drops for dry eyes?',
        a: 'As often as that drop’s label says. Each product sets its own schedule in the Directions section. Quell’s directions are {directions}.',
      },
      {
        q: 'Should I use eye drops at the same times every day?',
        a: 'The label doesn’t name times, but tying each dose to something you already do, like arriving at work, lunch and the evening, makes them easier to remember and spaces them through the day.',
      },
      {
        q: 'Do I need to use eye drops more often in winter?',
        a: 'The label’s schedule doesn’t change with the season. Heated air can make eyes feel drier, so adjust vents and add a humidifier. If the label’s doses still aren’t enough, ask an eye doctor.',
      },
      {
        q: 'Is it okay to put two drops in each eye at once?',
        a: 'Quell’s directions call for one drop per eye per dose. A second drop at the same time mostly runs out of the eye, and the label doesn’t call for it.',
      },
    ],
  },

  {
    slug: 'is-it-bad-to-use-expired-eye-drops',
    title: 'Is it bad to use expired eye drops?',
    description:
      'An expiration date marks the end of the period a drop is meant to be used in. Why to replace expired eye drops, what to check, and how to avoid expired spares.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes, it’s better not to use eye drops past their expiration date. The date marks the end of the period the maker has tested the product to hold up when it’s stored as the label says, so a bottle past it is outside that window. Check the date on the carton and the bottle, read the label’s do-not-use line, replace an expired bottle, and ask a pharmacist if you’re unsure.`,
      },
      { h: 'What the expiration date is for' },
      {
        p: `An expiration date isn’t a guess. It comes from testing the finished product in its own bottle over time and checking that it still meets its standards. The printed date is the end of that tested period. Past it, nobody has checked how the drop holds up, which is why “probably fine” isn’t a good enough answer for something you put in your eyes. Our guide to [how expiration dates are set](/guides/how-eye-drop-expiration-dates-are-set) explains the testing in more detail.`,
      },
      { h: 'Where to find the date' },
      {
        p: `Check the carton and the bottle for a printed expiration date. The print is small, so good light helps. If you can’t find it on either, our guide on [where the expiration date is](/guides/where-is-the-expiration-date-on-eye-drops) shows where to look.`,
      },
      { h: '“It still looks fine” isn’t a test' },
      {
        p: `You can’t see whether a drop still works as intended. Quell, for example, is supposed to look milky. Its label notes: {milky}. And the site adds: {appearance} So appearance alone tells you little about an expired bottle. The label does give one visual rule that applies at any age: {doNotUse}. If a bottle has changed color, don’t use it, whatever the date says.`,
      },
      {
        p: `Storage history matters too. The label says: {storage}. A bottle that’s spent time in a hot car or a freezing garage may not have been stored as the label requires, and that’s another reason not to stretch it past its date.`,
      },
      { h: 'Opened bottles and the date' },
      {
        p: `The expiration date applies to the product as it was made and sealed. Quell’s label doesn’t give a separate use-within period after opening. If you’re unsure how long to keep using an opened bottle, ask a pharmacist or your eye doctor. Whatever they say, a bottle past its printed date should be replaced.`,
      },
      { h: 'What if I already used expired eye drops?' },
      {
        p: `Stop using the bottle and replace it. If your eyes feel normal, there’s nothing else the label asks you to do. If they don’t, the label’s stop-use guidance applies: {stopUse} An eye doctor can find the cause and decide what to do. For anything that seems urgent, such as sudden pain or vision changes, don’t wait.`,
      },
      { h: 'What to do with expired bottles' },
      {
        list: [
          `Don’t keep them “just in case.” It’s easy to grab the wrong bottle later.`,
          `Follow local guidance for disposing of medicines. Our guide on [how to dispose of eye drops](/guides/how-to-dispose-of-eye-drops) covers the options.`,
          `Recycle the carton if your area accepts it, after checking the date and lot number are no longer needed.`,
        ],
      },
      { h: 'How to avoid ending up with expired spares' },
      {
        p: `Expired bottles usually come from buying more than you’ll use, or from spares tucked in a travel bag and forgotten. A few habits help:`,
      },
      {
        list: [
          `Work out how long a bottle lasts you before you stock up. Quell’s bottle is {size}, and our guide to [how long a bottle lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) helps with the math.`,
          `Write the expiration month on the bottle cap or carton in large print.`,
          `Use the oldest bottle first, and put new ones at the back of the drawer.`,
          `Check spares in your car, gym bag and travel kit twice a year.`,
        ],
      },
      { h: 'If a new order arrives close to or past its date' },
      {
        p: `Check the dates when a Quell order arrives. If anything looks wrong, call {phone} during {hours} with your order number before you open the bottle. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The full label, including directions and warnings, is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is it bad to use eye drops that are expired?',
        a: 'It’s better not to. The expiration date marks the end of the period the product was tested to hold up when stored as labeled, so replace a bottle that’s past its date rather than finishing it.',
      },
      {
        q: 'What happens if you use expired eye drops?',
        a: 'Stop using the bottle and replace it. If your eyes feel normal, nothing else is needed. If you have eye pain, vision changes or irritation that continues, stop and ask a doctor, as the label says.',
      },
      {
        q: 'How long are eye drops good for after the expiration date?',
        a: 'They aren’t meant to be used after it. The printed date is the end of the tested period, so there’s no grace period to count on. Replace the bottle.',
      },
      {
        q: 'Can I tell if eye drops are expired by how they look?',
        a: 'Not reliably. Quell is meant to look milky brown, so appearance tells you little. Check the printed date, and don’t use any bottle that has changed color, whatever the date.',
      },
    ],
  },

  {
    slug: 'can-i-order-eye-drops-for-my-boyfriend-or-girlfriend',
    title: 'Can I order eye drops for my boyfriend or girlfriend?',
    description:
      'Yes. Put their name and address in the shipping details and your own email and card at checkout. What they’ll see, what to ask first, and how to track it.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. Put your boyfriend’s or girlfriend’s name and address in the shipping details, use your own email so the confirmation and tracking come to you, and pay with your own card. The billing and shipping addresses don’t have to match. You must be 18 or older to order, the address must be in the US, and it’s worth asking about an egg or bird allergy before you buy.`,
      },
      { h: 'How to fill in checkout for a partner' },
      {
        list: [
          `Add the bottles you want to your [cart](/cart). There’s no account to create; checkout works as a guest.`,
          `In the “Ship to” details, enter your partner’s first and last name, street address, any apartment or unit number, city, two-letter state code and ZIP code.`,
          `Enter a phone number for the shipment. Use theirs if you want them reachable about delivery, or yours if it’s a surprise.`,
          `Use your own email address, so the confirmation and shipping emails come to you.`,
          `On the secure payment page, enter your card and its billing address.`,
        ],
      },
      {
        p: `Our guide to [shipping to a different address than billing](/guides/can-i-ship-to-a-different-address-than-billing) shows where each address goes.`,
      },
      { h: 'If you live apart' },
      {
        p: `Many couples order for each other across town or across the country. Quell ships to any US address from Brentwood, Tennessee, so a partner in another state is no different from one down the street. Shipping is {shipping} per order, or free on {freeBottles} or more bottles. No delivery date is promised, so if you’re timing it around a visit or a holiday, order early. Our guide to [ordering for someone in another state](/guides/order-eye-drops-for-someone-in-another-state) has more.`,
      },
      { h: 'If you live together' },
      {
        p: `If you both have dry eyes, one order can hold a bottle for each of you. It’s better not to share a single bottle. The label says: {tip}, and a bottle used by one person is easier to keep clean. Mark your bottles so you can tell them apart on a shared nightstand. Our guide on [whether couples can share a bottle](/guides/can-couples-use-the-same-bottle-of-eye-drops) explains why.`,
      },
      { h: 'Ask first, or surprise them?' },
      {
        p: `A surprise can be sweet, but eye drops are a medicine, so a few questions come first. Quell’s label carries this warning: {warnings}. It contains emu oil, so if your partner has an egg or bird allergy, don’t order it for them. If they wear contact lenses or already use other eye drops, the label doesn’t cover that, and they should ask their eye doctor or pharmacist. Our guide to [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution.`,
      },
      {
        p: `It also helps to ask whether they want drops at all. Someone who has mentioned dry, tired eyes after work will probably appreciate it. Someone who hasn’t may wonder why you bought it.`,
      },
      { h: 'What your partner will see' },
      {
        p: `The order confirmation, which lists prices and the total, goes to the email used at checkout. If that’s yours, your partner won’t get it. Our guide on [whether a gift recipient sees the price](/guides/will-the-gift-recipient-see-the-price) explains which emails show what. If you need a detail checked before ordering, call {phone} during {hours}.`,
      },
      { h: 'Using an HSA or FSA for a partner' },
      {
        p: `Whether a health account can pay for a partner’s eye drops depends on the account type and your relationship, and plan rules vary. Our guide to [using an FSA for a partner’s eye drops](/guides/can-i-use-my-fsa-for-my-partners-eye-drops) covers the questions to ask, and your plan administrator has the final word.`,
      },
      { h: 'Tracking the order' },
      {
        p: `Because the emails come to you, so does the tracking. You can also look the order up any time on the [track your order](/orders) page with the order number and the email you used. Forward the shipping email to your partner if you want them to watch for the box.`,
      },
      { h: 'If they don’t want it' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery, and they don’t need to be sent back. Opened bottles can’t be refunded. Since you placed the order, you’re the one to call {phone} with the order number. Before your partner uses a bottle, point them to the [Drug Facts page](/drug-facts), which has the directions: {directions}.`,
      },
    ],
    faq: [
      {
        q: 'Can I buy eye drops for my girlfriend online?',
        a: 'Yes. Enter her name and address as the shipping details, use your own email and card, and the order ships to her. Quell ships to US addresses only, and buyers must be 18 or older.',
      },
      {
        q: 'Can I send eye drops to my boyfriend in another state?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, for {shipping} per order or free on {freeBottles} or more bottles. No delivery date is promised, so order early if you’re timing it.',
      },
      {
        q: 'Will my partner get the order confirmation email?',
        a: 'Only if their email is the one used at checkout. Use your own email and the confirmation, with prices, comes to you. You can forward the shipping email if you want them to track the box.',
      },
      {
        q: 'What should I ask my partner before buying them eye drops?',
        a: 'Ask about egg or bird allergies, since Quell contains emu oil, and whether they wear contacts or use other drops, which the label doesn’t cover. It’s also worth asking whether they want drops at all.',
      },
    ],
  },

  {
    slug: 'how-do-i-know-my-eye-drop-order-went-through',
    title: 'How do I know my eye drop order went through?',
    description:
      'Your Quell order went through when the confirmation email arrives and the lookup shows Paid. What each sign means, and what to check before ordering again.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Your Quell order went through when the confirmation email arrives with your order number and the order lookup shows it as Paid. The “Thanks for your order” page alone isn’t proof, because it says payment is still being confirmed. If no email comes, check spam, look the order up with your order number and email, and check your card before you order again.`,
      },
      { h: 'The signs, in order' },
      {
        p: `After you submit payment, four things happen, roughly in this order. Each one tells you a little more:`,
      },
      {
        list: [
          `The “Thanks for your order” page appears, with your order number in large type.`,
          `A confirmation email arrives with the subject “Your Quell order #… is confirmed.”`,
          `The order lookup shows the order as Paid, with a note that it’s being prepared.`,
          `A charge or pending authorization shows on your card account.`,
        ],
      },
      {
        p: `The confirmation email and the Paid status are the two signs that the payment has cleared. The thanks page and a pending card authorization are good signs, but not the final word.`,
      },
      { h: 'What the thanks page does and doesn’t tell you' },
      {
        p: `The page you land on after paying says “We’re confirming your payment now.” That wording is deliberate. Getting back to the shop’s page shows you finished the payment steps, but the payment itself is confirmed separately by the payment processor, and that confirmation can take a moment to arrive. The page promises a receipt by email once payment clears, and another message when your order ships.`,
      },
      {
        p: `Write down the order number on that page, or take a screenshot. It’s what you need to look the order up, and it helps if the email goes astray. The page also has a button that takes you straight to tracking.`,
      },
      { h: 'Reading the order status' },
      {
        p: `The [track your order](/orders) page finds an order by its order number and the email you checked out with. It shows one of four statuses:`,
      },
      {
        list: [
          `Awaiting payment: the payment hasn’t been received yet. If you just paid, it can take a moment to update, so refresh after a short wait.`,
          `Paid: payment was received and the order is being prepared.`,
          `Shipped: the order is on its way, and the shipping email has tracking details.`,
          `Canceled: the order was canceled, and you were either not charged or refunded.`,
        ],
      },
      {
        p: `Our guide to [what your order status means](/guides/what-your-order-status-means) explains each one in more detail.`,
      },
      { h: 'What the confirmation email should show' },
      {
        p: `When the confirmation arrives, open it and check the details rather than just the subject line. It lists each item with its price, the subtotal, the shipping charge (or “Free” on {freeBottles} or more bottles), the total and the shipping address. If the address has a typo, or the quantity isn’t what you meant, call {phone} as soon as you can, with the order number in hand. The sooner a mistake is reported, the better the chance of catching it before the order is packed.`,
      },
      {
        p: `Keep the email. It’s your receipt, it holds the order number, and it’s the easiest way to find the tracking link later.`,
      },
      { h: 'If the confirmation email doesn’t arrive' },
      {
        list: [
          `Check spam, junk and promotions folders, and search your inbox for “Quell order.”`,
          `Look the order up using the email you think you typed. If the lookup works, the order exists and the email went astray.`,
          `If the lookup says no order was found, try any other email you might have used. Our guide to [a mistyped email at checkout](/guides/mistyped-email-at-checkout) covers what to do.`,
        ],
      },
      {
        p: `Our guide on a [missing confirmation email](/guides/no-order-confirmation-email) goes through more of these checks.`,
      },
      { h: 'Don’t order twice by accident' },
      {
        p: `If you’re unsure whether an order went through, check before you try again. Look up the order, then check your card account for a charge or pending authorization. Placing a second order while the first is still being confirmed is the usual way people end up with two orders. If that’s happened, see [charged twice for one order?](/guides/charged-twice-for-one-eye-drop-order).`,
      },
      { h: 'If your card was declined' },
      {
        p: `A declined card means the order didn’t go through. The payment page tells you when a card is declined, and no confirmation email is sent. Our guide to [why a card is declined](/guides/why-was-my-card-declined-buying-eye-drops) lists the usual reasons and what to try.`,
      },
      { h: 'When to call' },
      {
        p: `If the lookup and your card account still don’t give a clear answer, call {phone} during {hours}. Have the name and ZIP code you used, roughly when you ordered and, if you have it, the order number from the thanks page. Once it’s confirmed, the reorder process is simple, and you’ll get one reorder reminder email later. There’s no subscription, so nothing else is charged automatically.`,
      },
    ],
    faq: [
      {
        q: 'What does “We’re confirming your payment now” mean after checkout?',
        a: 'It means you finished the payment steps and the shop is waiting for the payment processor to confirm the charge. A confirmation email follows once it clears, and the order lookup changes to Paid.',
      },
      {
        q: 'Does “Awaiting payment” mean my eye drop order failed?',
        a: 'Not necessarily. Right after you pay it can take a moment to update. If it stays at Awaiting payment after a few refreshes and there’s no charge on your card, the payment likely didn’t finish.',
      },
      {
        q: 'What do I need to look up my Quell order?',
        a: 'Your order number and the email address you used at checkout. Both appear in the confirmation email, and the order number is shown on the page you see right after paying.',
      },
      {
        q: 'Should I place my eye drop order again if I didn’t get an email?',
        a: 'Not until you’ve checked. Look the order up, search your spam folder, and check your card for a charge. Ordering again too soon is the usual way people end up with two orders.',
      },
    ],
  },

  {
    slug: 'can-i-order-eye-drops-for-a-coworker',
    title: 'Can I order eye drops for a coworker?',
    description:
      'Yes. Ship to their home or to the office, use your own email and card, and check a few label questions with them first. How office orders and group buys work.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. Enter your coworker’s name and either their home address or the office address as the shipping details, and pay with your own card and email. Ask them first about egg or bird allergies, contact lenses and other drops, since the label doesn’t cover those. If several people at work want a bottle, one order to the office can hold them all, and {freeBottles} or more bottles ship free.`,
      },
      { h: 'Home or office: where to send it' },
      {
        p: `Both work. The choice depends on your workplace and on how private your coworker wants it to be.`,
      },
      {
        list: [
          `Office: easy if your building has a front desk or mailroom that accepts packages. Put your coworker’s name on the first line and the company name, floor or suite on the second.`,
          `Home: better if the office mailroom is unreliable, if they work remotely some days, or if they’d rather not have a medicine box land on their desk.`,
          `Either way, the address must be in the US. Quell ships from Brentwood, Tennessee, within the United States only.`,
        ],
      },
      {
        p: `Our guide to [shipping eye drops to a work address](/guides/shipping-eye-drops-to-your-work-address) covers office deliveries in detail. If your office closes between Christmas and New Year’s, see [shipping to an office closed for the holidays](/guides/shipping-eye-drops-to-an-office-closed-for-holidays).`,
      },
      { h: 'Ask your coworker a few questions first' },
      {
        p: `A bottle of eye drops is a small, practical thing to buy someone who keeps rubbing their eyes at the next desk. Still, it’s a medicine, and some questions belong to them:`,
      },
      {
        list: [
          `Allergies: Quell’s warning reads: {warnings}. It contains emu oil, so skip it for anyone with an egg or bird allergy.`,
          `Contact lenses: the label doesn’t give directions for wearing lenses, so a coworker who wears them should ask their eye doctor first.`,
          `Other drops: the label doesn’t cover use alongside other eye drops. Their eye doctor or pharmacist can answer that.`,
          `Interest: some people would rather not be bought eye drops at all. A quick “would this help?” avoids an awkward moment.`,
        ],
      },
      { h: 'Ordering for a group at work' },
      {
        p: `Open offices, call centers and shared workrooms often have several people with dry, tired eyes by afternoon, especially in winter when the heat is running. If a few coworkers each want a bottle, one person can order for everyone:`,
      },
      {
        list: [
          `Collect how many bottles each person wants before you order.`,
          `Ship the whole order to the office in one box, addressed to you.`,
          `Orders of {freeBottles} or more bottles ship free; smaller orders pay {shipping}.`,
          `Hand out the bottles in person, sealed, so each person opens their own.`,
          `Share the confirmation email, which shows the items, shipping and total, so everyone can see what they owe.`,
        ],
      },
      {
        p: `Checkout takes one card per order, so the person ordering pays and collects from the others. If someone wants to use their own HSA or FSA, it’s simpler for them to place their own order so the receipt is in their name. Plan rules vary, and their plan administrator has the details.`,
      },
      { h: 'Buying for coworkers vs. buying as an employer' },
      {
        p: `Ordering as a colleague is a personal purchase. If you’re a manager buying for a team out of a business budget, our guide to [buying eye drops for your employees](/guides/buying-eye-drops-for-your-employees) and the one on [using a company card](/guides/buying-eye-drops-with-a-company-card) are a better fit. Either way, there’s no business pricing or invoicing; checkout works the same for everyone.`,
      },
      { h: 'Don’t share one bottle at the office' },
      {
        p: `It can be tempting to keep one bottle in the break room for anyone who needs it. The label’s instruction is: {tip}. A bottle passed between people can’t keep to that, so one bottle per person is the way to go. Our guide on whether you [can share eye drops](/guides/can-you-share-eye-drops) explains more.`,
      },
      { h: 'As a holiday gift for a coworker' },
      {
        p: `Eye drops can be a thoughtful add-on for a coworker who has mentioned dry eyes, but they’re a modest main gift. Our guide to [gifts for a coworker who works on screens](/guides/gifts-for-a-coworker-who-works-on-screens) pairs them with other ideas. Checkout has no gift message option, so if you want a card with it, ship to yourself and hand it over.`,
      },
      { h: 'Tracking, problems and refunds' },
      {
        p: `The confirmation and shipping emails go to the email used at checkout, so you can track the order on the [track your order](/orders) page with the order number and that email. If a coworker changes their mind, unopened bottles can be refunded within {returnDays} days of delivery without sending them back; opened ones can’t. Since you placed the order, you’re the one to call {phone} during {hours}. Before anyone uses a bottle, the directions are: {directions}, and the full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can I buy eye drops for a coworker and ship them to the office?',
        a: 'Yes, if your office accepts packages. Put your coworker’s name on the first line and the company name, floor or suite on the second, and use your own email so the confirmation comes to you.',
      },
      {
        q: 'Can I order eye drops for several coworkers at once?',
        a: 'Yes. One order to the office can hold everyone’s bottles, and orders of {freeBottles} or more bottles ship free. Hand them out sealed so each person opens their own.',
      },
      {
        q: 'Can coworkers split the cost of an eye drop order?',
        a: 'Checkout takes one card per order, so the person ordering pays and collects from the others. The confirmation email shows the items, shipping and total, which makes splitting it easy.',
      },
      {
        q: 'Should we keep one bottle of eye drops in the break room?',
        a: 'It’s better not to. The label says not to touch the tip to any surface, and a shared bottle can’t keep to that. Each person should have their own.',
      },
    ],
  },

  {
    slug: 'can-i-ship-eye-drops-to-a-ski-resort',
    title: 'Can I ship eye drops to a ski resort?',
    description:
      'Yes, if the resort, lodge or condo has a US street address and will accept packages. What to ask first, how to address it, and why cold mailrooms matter.',
    category: 'shipping',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. Quell ships to any US street address, and that includes a ski resort hotel, lodge or condo. Ask the property first whether it accepts guest packages and how to address them, put your unit number on the second address line, and order well before your trip, since no delivery date is promised. Packing a bottle from home is often simpler, because a cold mailroom or porch can push a bottle outside its storage range.`,
      },
      { h: 'Ask the property before you order' },
      {
        p: `Mountain lodging varies a lot. A big resort hotel may have a front desk that holds packages for arriving guests. A condo complex may have a mailroom with limited hours. A rented cabin may have only a porch or a roadside box. Call or email the property and ask:`,
      },
      {
        list: [
          `Do you accept packages for guests who haven’t arrived yet?`,
          `How should the package be addressed: your name, the building, the unit number?`,
          `Where are packages kept, and is that space heated?`,
          `What happens to a package if it arrives after you’ve checked out?`,
        ],
      },
      {
        p: `Their answers decide whether shipping there makes sense. If they don’t take guest packages, ship to your home instead and pack the bottle.`,
      },
      { h: 'How to fill in the address' },
      {
        p: `Checkout asks for a name, street address, an optional apartment or suite line, city, two-letter state code, ZIP code and a phone number. For a resort stay:`,
      },
      {
        list: [
          `Use your own name exactly as it appears on the reservation.`,
          `Put the property’s street address, not just the resort name, on the first line.`,
          `Use the second line for the building and unit or room number, if the property gave you one.`,
          `Give your mobile number, so you’re the one reachable about the delivery.`,
        ],
      },
      {
        p: `Getting the address right matters more than usual. Our [terms](/terms) say risk of loss passes on delivery to the address you provide, and that we aren’t responsible for delays caused by an incorrect address.`,
      },
      { h: 'Timing: order well ahead' },
      {
        p: `We don’t promise a delivery date for any order, and mountain areas in winter can see weather delays. Order with plenty of time before you arrive, and watch the shipping email for tracking. If your trip is coming up fast, buy before you leave and pack the bottle. Our guide on whether to [pack eye drops or ship them ahead](/guides/pack-or-ship-eye-drops-for-holiday-travel) walks through the choice.`,
      },
      { h: 'Cold mailrooms, porches and lockers' },
      {
        p: `This is the part that’s specific to ski country. A package can sit for hours or days in an unheated storage room, a porch or an outdoor locker at a mountain address. Quell’s label gives its storage range as: {storage}. A box sitting in freezing air can drop below that.`,
      },
      {
        list: [
          `Ask the property to keep your package somewhere heated, if they can.`,
          `Pick it up as soon as you arrive rather than leaving it in the mailroom.`,
          `Before using a bottle that may have frozen, check the label’s rule: {doNotUse}.`,
          `If anything about the bottle or seal looks wrong, don’t use it. Call {phone} with your order number.`,
        ],
      },
      {
        p: `Our guide to [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) has more about temperatures in transit, and [what to check when your order arrives](/guides/what-to-check-when-your-order-arrives) covers the box and the seal.`,
      },
      { h: 'If you’ve checked out before it arrives' },
      {
        p: `If the package arrives after you’ve left, it’s up to the property what they do with it. Some will forward it or hold it for a return visit, and some won’t. That’s why asking first matters. Once tracking shows it delivered to the address you gave, it’s in the property’s hands.`,
      },
      { h: 'Why people ship drops to the mountains' },
      {
        p: `Cold, dry mountain air, wind, glare off snow and heated lodges are all hard on the eyes. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions are: {directions}. Our guide to [ski trips and dry eyes](/guides/ski-trips-and-dry-eyes) covers the rest of the trip, and [Shipping eye drops to a vacation rental](/guides/shipping-eye-drops-to-a-vacation-rental) covers rentals elsewhere.`,
      },
      { h: 'The basics for any ship-to address' },
      {
        list: [
          `Quell ships within the United States only, from Brentwood, Tennessee.`,
          `Shipping is {shipping} per order, or free on {freeBottles} or more bottles.`,
          `Checkout works as a guest, and tracking arrives by email.`,
          `Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Can I have eye drops delivered to a ski lodge?',
        a: 'Yes, if the lodge has a US street address and accepts guest packages. Ask them first how to address it and where packages are kept, and order well ahead, since no delivery date is promised.',
      },
      {
        q: 'Can eye drops freeze in a ski resort mailroom?',
        a: 'An unheated mailroom, porch or locker in the mountains can drop below the label’s storage range. Ask the property to keep it somewhere heated, pick it up soon after you arrive, and check the bottle before use.',
      },
      {
        q: 'What happens if my package arrives after I leave the resort?',
        a: 'Once it’s delivered to the address you gave, it’s up to the property. Some forward or hold packages and some don’t, so ask before you order.',
      },
      {
        q: 'Should I pack eye drops or ship them to the mountains?',
        a: 'If your trip is soon or the property doesn’t take guest packages, pack them. Shipping works when you have time and the lodge will hold the box somewhere heated.',
      },
    ],
  },

  {
    slug: 'can-i-return-eye-drops-if-my-trip-was-canceled',
    title: 'Can I return eye drops if my trip was canceled?',
    description:
      'If the bottles are unopened and it’s within 30 days of delivery, yes, with nothing to send back. What to do if the order went to your trip address instead.',
    category: 'returns',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes, if the bottles are unopened and it’s within {returnDays} days of delivery. Quell refunds the product price on unopened bottles, and you don’t send them back. Original shipping isn’t refunded, and opened bottles can’t be refunded. Call {phone} during {hours} with your order number. If the order was shipped to the trip address and never reached you, the steps are different, so check tracking first.`,
      },
      { h: 'Why people stock up before a trip' },
      {
        p: `Long flights, ski weekends, cruises and holiday visits are all hard on the eyes, so it’s common to order a few bottles before you go. Then the trip falls through: a canceled flight, a family change of plans, a storm, a work conflict. You’re left with bottles you bought for a reason that no longer exists. If you still want them for everyday use, keep them. If not, the refund rules below apply.`,
      },
      { h: 'Case 1: the bottles came to your home' },
      {
        p: `This is the simple one. Our [terms](/terms) say that if you change your mind about an unopened bottle, you can contact us within {returnDays} days of delivery for a refund of the product price, and you don’t need to send it back. A canceled trip is a change of mind like any other; you don’t need to explain it.`,
      },
      {
        list: [
          `Leave the tamper seals intact on any bottle you want refunded.`,
          `Find the order number in your confirmation email.`,
          `Call {phone} during {hours} and say how many unopened bottles you’d like refunded.`,
          `Keep the bottles until the call is done, in case you’re asked about them.`,
        ],
      },
      {
        p: `Our guide to [refunds on unopened bottles](/guides/how-to-return-an-unopened-bottle) has more, and [what is refunded on a Quell order](/guides/what-is-refunded-on-a-return) explains why shipping isn’t included.`,
      },
      { h: 'Case 2: you shipped it to the trip address' },
      {
        p: `Some people ship ahead to a hotel, vacation rental, relative’s house or ski lodge. If the trip is canceled, check tracking first:`,
      },
      {
        list: [
          `Not yet delivered: call {phone} with your order number as soon as you can. Our [terms](/terms) say risk of loss passes on delivery to the address you provide, so it helps to sort things out before then.`,
          `Delivered, and someone there can mail it to you: once it’s back in your hands, unopened, the normal refund rule applies, as long as you call within {returnDays} days of the delivery date.`,
          `Delivered, and you can’t get it back: call {phone} with your order number and explain. We can look at the order with you, but we can’t promise a refund for a package delivered where you asked us to send it.`,
          `Sent back to us by the carrier: see [package returned to sender](/guides/eye-drop-package-returned-to-sender).`,
        ],
      },
      { h: 'The window starts at delivery' },
      {
        p: `The {returnDays} days count from the day the order was delivered, not the day you ordered or the day the trip was canceled. If you ordered well ahead and the trip was canceled later, check the delivery date in your tracking email before you call. Our guide to [when the refund window starts](/guides/when-does-the-eye-drop-refund-window-start) explains how it’s counted.`,
      },
      { h: 'Opened one for the trip already?' },
      {
        p: `If you opened one bottle to try it before you left, that bottle can’t be refunded, since opened eye drops can’t be refunded, returned or resold. The sealed ones in the same order are still covered. Our guide [opened one bottle: can I return the rest?](/guides/opened-one-bottle-can-i-return-the-rest) covers that case.`,
      },
      { h: 'Keeping the bottles instead' },
      {
        p: `Plenty of people keep a canceled trip’s bottles for winter at home, since heated air is hard on eyes too. If you do, store them the way the label says: {storage}. Check the expiration date on the carton, use the oldest bottle first, and keep them out of a cold car or a hot cabinet. Our guide to [keeping spare bottles](/guides/keeping-spare-bottles) has tips. A bottle meant for the plane can just as easily live in a desk drawer at work or on the nightstand, where heated winter air tends to bother eyes most.`,
      },
      { h: 'If the trip is rescheduled' },
      {
        p: `If the trip is only moved, consider keeping the sealed bottles for the new date rather than asking for a refund and reordering. Bottles you already have don’t depend on a delivery date, and no delivery date is ever promised on a new order. Pack them in your carry-on: Quell’s bottle is {size}, which is well under the 3.4-ounce limit in TSA’s liquids rule for carry-on bags.`,
      },
      { h: 'Before anyone uses them' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions read: {directions}. The full panel, including warnings, is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can I get a refund on eye drops I bought for a canceled vacation?',
        a: 'Yes, for unopened bottles within {returnDays} days of delivery, and you don’t send them back. Original shipping isn’t refunded, and opened bottles can’t be refunded.',
      },
      {
        q: 'What if I shipped eye drops to a hotel and then canceled my trip?',
        a: 'Check tracking first. If it hasn’t been delivered, call {phone} with your order number right away. Once it’s delivered to the address you gave, getting it back depends on the hotel.',
      },
      {
        q: 'Does the eye drop refund window start when I cancel my trip?',
        a: 'No. The {returnDays} days count from the day the order was delivered, whatever happened to the trip. Check the delivery date in your tracking before you call.',
      },
    ],
  },

  {
    slug: 'does-quell-contain-lanolin',
    title: 'Does Quell contain lanolin?',
    description:
      'No. Lanolin isn’t on Quell’s ingredient list. Its oils are light mineral oil and emu oil. How to check any eye product for lanolin and what to ask if unsure.',
    category: 'formula',
    addedOn: '2026-11-25',
    body: [
      {
        p: `No. Lanolin isn’t on Quell’s ingredient list. Quell is a liquid eye drop, and the only oils its label names are light mineral oil, one of the three active ingredients, and emu oil, one of the inactive ones. If you’re checking because of a wool or lanolin sensitivity, read the full list on the carton or our Drug Facts page, and ask a pharmacist about anything the label doesn’t spell out.`,
      },
      { h: 'Quell’s complete ingredient list' },
      {
        p: `The Drug Facts panel lists every ingredient. The active ingredients are {actives}. The inactive ingredients, in alphabetical order, are {inactives}. Lanolin isn’t among them, under that name or as “wool fat” or “wool wax.” Our guide to [Quell’s full ingredient list](/guides/quell-eye-drops-ingredients-list) explains each one.`,
      },
      { h: 'Why people look for lanolin on eye products' },
      {
        p: `Lanolin is a wax that comes from sheep’s wool. It shows up in some skin creams, lip balms and thicker eye products such as ointments, so people with a known sensitivity to it learn to check labels. Eye drops and eye ointments are different kinds of products, and our guide to [eye drops vs. eye ointment](/guides/eye-drops-vs-eye-ointment) explains the difference. Quell is a drop, not an ointment.`,
      },
      { h: 'The oils Quell does contain' },
      {
        list: [
          `Light mineral oil, an active ingredient. The label gives its purpose as Emollient. See [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops).`,
          `Emu oil, an inactive ingredient. The carton describes it this way: {emuOil}`,
        ],
      },
      {
        p: `Emu oil comes from a bird, not from sheep, and it isn’t lanolin. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and these two oils are part of how the formula is built. Our guide to [emu oil and light mineral oil in Quell](/guides/emu-oil-and-light-mineral-oil-in-quell) covers why it has both.`,
      },
      { h: 'Animal-derived ingredients in Quell' },
      {
        p: `If your question about lanolin is really about animal products, emu oil is the one to know about. That’s also why Quell carries this warning: {warnings}. Our guide [is Quell vegan?](/guides/is-quell-vegan) goes into animal-derived ingredients, and [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution. Manuka honey, also on the inactive list, comes from bees.`,
      },
      { h: 'How to check any eye product for lanolin' },
      {
        list: [
          `Read the full Drug Facts panel, both active and inactive ingredients, not just the front of the box.`,
          `Look for “lanolin,” and for related wording such as “wool fat” or “wool wax.”`,
          `For ointments and gels, check especially carefully, since lanolin is more common in thicker products.`,
          `If an ingredient has a chemical name you don’t recognize, ask a pharmacist what it is before you buy.`,
        ],
      },
      {
        p: `Our guide to [the inactive ingredients on an eye drop label](/guides/the-inactive-ingredients-section) explains how that section is laid out.`,
      },
      { h: 'What an ingredient list can’t tell you' },
      {
        p: `A label names each ingredient but doesn’t say where each one was sourced or how it was processed. Several of Quell’s inactive ingredients have chemical names, and the label doesn’t describe their origin. If you have a strong sensitivity, that’s a fair question to ask before you use any new drop. Call {phone} during {hours}, or take the label to a pharmacist, who can look at the list with you.`,
      },
      { h: 'Quell’s milky look isn’t from wax' },
      {
        p: `Some people expect a creamy-looking drop to contain a wax or cream base. The label notes: {milky}. And the site adds: {appearance} That look comes from the formula as a whole, including its oils, not from lanolin. Our guide to [oil-based eye drops](/guides/oil-based-eye-drops-what-that-means) explains more.`,
      },
      { h: 'Trying a new drop with sensitive skin or eyes' },
      {
        p: `People who react to lanolin often have other sensitivities too. If that’s you, talk to your eye doctor or pharmacist before trying any new eye drop, and bring the label. If you do try Quell and notice irritation, the label’s stop-use line applies: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'Reading the rest of the label' },
      {
        p: `The directions read: {directions}. The storage line says: {storage}. Everything on the panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is there lanolin in Quell eye drops?',
        a: 'No. Lanolin isn’t on Quell’s ingredient list. The oils it lists are light mineral oil, an active ingredient, and emu oil, an inactive ingredient.',
      },
      {
        q: 'Is emu oil the same as lanolin?',
        a: 'No. Lanolin comes from sheep’s wool, while emu oil comes from a bird. Emu oil is the reason Quell’s label carries a caution about egg and bird allergies.',
      },
      {
        q: 'How do I know if an eye product contains lanolin?',
        a: 'Read the full Drug Facts panel, both active and inactive ingredients, and look for lanolin, wool fat or wool wax. Check ointments especially carefully, and ask a pharmacist about unfamiliar names.',
      },
    ],
  },

  {
    slug: 'what-counts-as-any-surface-on-an-eye-drop-label',
    title: 'What counts as “any surface” on an eye drop label?',
    description:
      'The label says not to touch the bottle tip to any surface. In practice that means your eye, lashes, fingers and the counter too. How to keep the tip clear.',
    category: 'label',
    addedOn: '2026-11-25',
    body: [
      {
        p: `“Any surface” means exactly that: the label lists no exceptions. Quell’s panel says: {tip}. In practice that includes your eye, eyelid and lashes, your fingertips, a tissue, the counter, the inside of the cap and the bottom of a bag. Hold the bottle just above the eye, let the drop fall, and cap it right away.`,
      },
      { h: 'Where the line appears' },
      {
        p: `The tip rule sits in the “When using this product” section of the Drug Facts panel. That section collects instructions for the moments you’re actually using the drop. Our guide to [what “When using this product” means](/guides/what-does-when-using-this-product-mean) explains the section, and [why you should never touch the bottle tip](/guides/do-not-touch-the-tip) covers the reason behind the rule.`,
      },
      { h: 'Surfaces people don’t think of as surfaces' },
      {
        p: `Most people know not to set an open bottle tip-down on a bathroom counter. The surfaces that catch people out are the ones on their own body and the ones that seem clean:`,
      },
      {
        list: [
          `Your eye itself. Touching the tip to the eye’s surface is still touching a surface.`,
          `Eyelashes and the rim of the eyelid, which the tip often brushes when the bottle is held too close.`,
          `Your fingertip, used to pull down the lower lid or to steady the bottle.`,
          `The inside of the cap, if you set the cap down open-side-down or touch it.`,
          `A tissue or towel used to blot a drop that missed.`,
          `Your cheek or nose, when you rest the bottle against your face to steady it.`,
          `Pockets, bags and car cup holders, if the cap isn’t on.`,
        ],
      },
      { h: 'Why the label doesn’t list exceptions' },
      {
        p: `The rule is written plainly for a reason. A multi-dose bottle is opened again and again, and the tip is the part that sits closest to what goes into your eye. Anything it touches can end up near the opening. “Any surface” is easier to follow than a list of what’s allowed, and it doesn’t leave room for “it was only my eyelash.”`,
      },
      { h: 'How to keep the tip clear' },
      {
        list: [
          `Wash and dry your hands first.`,
          `Take the cap off and hold it in your other hand, or set it on its side on a clean surface.`,
          `Tilt your head back and look up.`,
          `Gently pull down your lower lid with a clean finger of your free hand.`,
          `Hold the bottle a little above the eye, not touching anything, and squeeze one drop into the pocket made by the lower lid.`,
          `Close your eye gently for a moment.`,
          `Put the cap back on right away.`,
        ],
      },
      {
        p: `If your hands are unsteady, rest the wrist of the hand holding the bottle on your forehead rather than resting the bottle on your face. Our guides to [eye drops with shaky hands](/guides/eye-drops-with-shaky-hands) and [using a mirror](/guides/how-to-put-in-eye-drops-using-a-mirror) have more techniques.`,
      },
      { h: 'What if the tip touched something?' },
      {
        p: `The label tells you not to let it happen, but it doesn’t say what to do if it does. If the tip brushed your lashes or a finger, or the open bottle fell on the floor, ask a pharmacist how they’d handle it. Don’t try to wipe or rinse the tip, since that means touching it again. Our guide on [leaving the cap off](/guides/left-the-cap-off-eye-drops) covers a related slip.`,
      },
      { h: 'Surfaces on the move: cold days, cars and bags' },
      {
        p: `Most tip slips happen away from the bathroom mirror. Outdoors in winter, gloves come off in a hurry and the cap ends up in a pocket full of lint. In a parked car, the bottle gets balanced on a knee or the console while you tilt your head back. At a desk, it’s set down next to a keyboard or a coffee mug. A few habits help wherever you are:`,
      },
      {
        list: [
          `Keep the cap in your closed hand while the bottle is open, rather than setting it down.`,
          `Carry the bottle in a small, clean zip bag or case, so the capped tip isn’t rubbing against keys and coins.`,
          `Put drops in only while the car is parked, with both hands free.`,
          `If you can’t wash your hands, wait until you can rather than using the bottle with dirty fingers nearby.`,
        ],
      },
      { h: 'One bottle, one person' },
      {
        p: `“Any surface” includes someone else’s eye. A bottle that’s been close to one person’s lashes and lids shouldn’t be used by another, which is one reason not to share eye drops even with a partner. If you’re putting drops in for someone else, keep the bottle for them only.`,
      },
      { h: 'The rest of Quell’s label' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. The panel also says: {doNotUse}. Storage is given as: {storage}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Does touching your eyelash with the eye drop bottle count as touching a surface?',
        a: 'Yes. The label says not to touch the tip to any surface and lists no exceptions, so lashes, eyelids and the eye itself all count. Hold the bottle just above the eye instead.',
      },
      {
        q: 'Can I use my finger to steady an eye drop bottle tip?',
        a: 'Not on the tip. A fingertip is a surface too. Hold the bottle by its body, and rest your wrist on your forehead if you need to steady it.',
      },
      {
        q: 'What should I do if my eye drop bottle tip touched my eye?',
        a: 'The label doesn’t say, so ask a pharmacist how they’d handle it. Don’t wipe or rinse the tip, since that means touching it again.',
      },
    ],
  },
]
