import type { Guide } from '@/lib/guide-types'
export const DAILY_20261123_C: Guide[] = [
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-sterling-heights-mi:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid DET; saved at .daily-job/acis1123/DET.json and .daily-job/c/mint_DET.json)
   *   (DETROIT CITY AP, elev 623 ft: normal highs Jan 32.4 F, Feb 35.0, Mar 44.9,
   *   Nov 48.2, Dec 37.2, Jul 83.5, Aug 81.4; normal lows Jan 19.8, Feb 21.0,
   *   Mar 28.4, Nov 34.4, Dec 25.8, Jul 64.9; precip Feb 1.41 in (driest), Jan 1.45,
   *   May 3.49 (wettest), Jul 3.22; twelve monthly normals sum to 29.89 in;
   *   snowfall "M" (missing), not quoted)
   * - relhum23.txt / wndspd23.txt have no row for this station (WBAN 14822): no
   *   humidity or wind figure used.
   * - Kept apart from the Warren guide (Selfridge station, Lake St. Clair, engineering
   *   offices, Mound and Van Dyke) and the Detroit guide (Metro Airport, plant floors,
   *   freeway commute): built on the Detroit City Airport record, below-freezing
   *   nights, family homes, errands and the long gray stretch from December to March.
   */
  {
    slug: 'dry-eye-relief-sterling-heights-mi',
    title: 'Dry eye relief in Sterling Heights, Michigan',
    description:
      'Normal lows sit below freezing from December through March near Sterling Heights. NOAA numbers and everyday steps for dry, heated Michigan air.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Dry eye relief in Sterling Heights is mostly about the furnace. NOAA’s normals for Detroit City Airport, the nearest long-record station, put January lows near 20°F and keep nights below freezing from December through March, so heated, dry indoor air surrounds you for months. Turn vents away from your face, run a humidifier, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes belong with an eye doctor.`,
      },
      { h: 'Which weather station speaks for Sterling Heights?' },
      {
        p: `Sterling Heights has no long-running NOAA station of its own. The closest one with a full set of 1991–2020 climate normals is Detroit City Airport, south of the city inside Detroit, at about 620 feet. Its readings come from a paved airfield in a dense city, so a backyard in Sterling Heights can read a little differently on a clear winter night. Read the numbers as the shape of the year rather than a forecast for your street.`,
      },
      {
        p: `NOAA’s 1991–2020 climate normals for Detroit City Airport, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `January: normal high 32.4°F, normal low 19.8°F.`,
          `February: high 35.0°F, low 21.0°F, and the least precipitation of any month at 1.41 inches.`,
          `March: the high reaches 44.9°F, but the normal low is still 28.4°F.`,
          `May: the wettest month, at 3.49 inches.`,
          `July: high 83.5°F, low 64.9°F.`,
          `About 29.89 inches of precipitation across the twelve monthly normals.`,
        ],
      },
      {
        p: `The station’s snowfall normal is missing from the record, so this page gives no snow total for it.`,
      },
      { h: 'Four months of below-freezing nights' },
      {
        p: `Look at the lows rather than the highs. December’s normal low is 25.8°F, January’s 19.8°F, February’s 21.0°F and March’s 28.4°F. That is four straight months in which an ordinary night drops below freezing, and the furnace answers every one of them. Cold air holds little water to begin with. Once a furnace warms it to 68°F or 70°F, its relative humidity falls a long way, and the tear film on the front of your eye loses water to that air faster between blinks.`,
      },
      {
        p: `November is the warning month. Its normal low of 34.4°F sits just above freezing, so the heat comes on in the evenings and the first gritty mornings often arrive around Thanksgiving. If your eyes felt fine in October and not in late November, the change in the air is a likely reason.`,
      },
      { h: 'Inside a Sterling Heights house in January' },
      {
        p: `If your house has forced-air heat, warm, dry air comes up through floor registers and out across the room. A few small changes make a real difference:`,
      },
      {
        list: [
          `Find the register nearest your bed and your favorite chair, and turn its louvers so air doesn’t stream across your face.`,
          `Run a cool-mist humidifier in the bedroom, cleaned as its maker directs. Our guide to [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers placement.`,
          `Lower the thermostat a few degrees at night. Warmer air is drier air at the same moisture content.`,
          `Change the furnace filter on schedule, which keeps dust from blowing around the room.`,
          `If someone works from a finished basement, check where the ducts blow; a vent over a desk aims straight at the eyes for hours.`,
        ],
      },
      { h: 'Errands, parking lots and store heat' },
      {
        p: `A Saturday of errands in February is a run of temperature changes: a cold driveway, a car heater on high, a windy parking lot, then a big store with its heat running hard. Each switch from cold wind to warm, dry indoor air pulls at the tear film. Wear glasses or sunglasses across open lots on windy days, point the car’s vents at your hands or the windshield instead of your face, and give your eyes a few slow, full blinks once you’re inside. Short trips back to back are harder on the eyes than one longer stop.`,
      },
      { h: 'Family gatherings and a full house' },
      {
        p: `Holidays in Macomb County often mean a packed house: ovens running for hours, the furnace cycling, candles on the table and screens in every corner for the game. Crack a window in the kitchen if the room gets stuffy, keep candles away from where people sit, and step outside for a minute of cooler air. Hosts and cooks take the brunt of it, since they move between a hot oven and the rest of the house all afternoon.`,
      },
      { h: 'Spring rain and summer air conditioning' },
      {
        p: `By May the furnace is off and the wettest month of the year arrives, with 3.49 inches in the Detroit City Airport normals. July highs average 83.5°F, and central air conditioning dries a room in a different way: it removes moisture as it cools. Aim car and home vents away from your face in summer too, and take breaks from long screen sessions in a chilled office.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. The label also says: {tip}. It is a lubricating drop, not a fix for the air, so pair it with the steps above. The full panel, including {warnings}, is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Storage matters in a Michigan winter. The label reads: {storage}. A bottle left in a car through a January night can drop well below that range, so keep it in a coat pocket or bring it inside.`,
      },
      { h: 'Ordering Quell to Sterling Heights' },
      {
        p: `Orders ship from Brentwood, Tennessee, to any US address, including Sterling Heights, Utica, Shelby Township and the rest of Macomb County. You can check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles. The tracking link arrives by email; no delivery date is promised, so order before your last bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Sterling Heights page](/eye-drops/sterling-heights-mi) and the [Michigan page](/eye-drops/state/michigan), or read about nearby [Warren](/guides/dry-eye-relief-warren-mi).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop can help with dryness. It can’t tell you why your eyes feel the way they do. The label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the rest. An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Sterling Heights get at night in winter?',
        a: `NOAA’s 1991–2020 normals for Detroit City Airport, the nearest full-record station, put the normal January low at 19.8°F. Normal lows stay below freezing from December through March.`,
      },
      {
        q: 'Why do my eyes feel drier in Sterling Heights after Thanksgiving?',
        a: `Late November is when furnaces start running every night. November’s normal low near Detroit is 34.4°F and December’s is 25.8°F, and heating that cold air lowers its relative humidity indoors, which speeds evaporation from the tear film.`,
      },
      {
        q: 'What is the driest month near Sterling Heights, Michigan?',
        a: `February, with 1.41 inches of precipitation in NOAA’s 1991–2020 normals for Detroit City Airport. January is close behind at 1.45 inches, and May is the wettest month at 3.49 inches.`,
      },
      {
        q: 'Does Quell ship to Sterling Heights, MI?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to addresses across Macomb County with guest checkout and an emailed tracking link. No delivery date is promised, so order ahead of need.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-kingsville-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid NQI; saved at .daily-job/acis1123/NQI.json and .daily-job/c/mint_NQI.json)
   *   (KINGSVILLE NAAS, elev 44 ft: normal highs Jan 68.8 F, Feb 73.2, Apr 84.3,
   *   May 89.2, Jun 94.0, Jul 95.9, Aug 97.2 (hottest), Sep 92.3, Oct 86.1, Dec 70.8;
   *   normal lows Jan 46.6, Feb 50.6, Jul 75.5, Aug 75.5, Dec 48.0; precip Jan 1.16 in
   *   (driest), Feb 1.17, May 3.50, Jun 3.18, Jul 1.37, Aug 2.30, Sep 4.75 (wettest),
   *   Oct 2.91, Nov 1.43; twelve monthly normals sum to 27.01 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no row for this station (WBAN 12928): no
   *   humidity or wind figure used.
   * - Kept apart from the Corpus Christi guide (humidity table, bay wind, plant shifts):
   *   built on the NAS Kingsville record, the long hot season, the July dry spell,
   *   ranch-country driving and mild winters.
   */
  {
    slug: 'dry-eye-relief-kingsville-tx',
    title: 'Dry eye relief in Kingsville, Texas',
    description:
      'Kingsville’s August highs average 97°F and air conditioning runs most of the year. NOAA’s numbers for South Texas and steps for drier-feeling eyes.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `In Kingsville, dry-feeling eyes usually come from air conditioning and heat rather than from dry weather. NOAA’s normals for the station at Naval Air Station Kingsville put August highs at 97.2°F and keep highs above 84°F from April through October, so cooled, dehumidified air and vent drafts are a daily fact. Keep vents off your face, wear sunglasses outdoors, blink fully at screens, and use a lubricating drop as labeled.`,
      },
      { h: 'The record from Naval Air Station Kingsville' },
      {
        p: `Kingsville’s long-term weather record comes from the station at Naval Air Station Kingsville, about 44 feet above sea level on the coastal plain. NOAA’s 1991–2020 climate normals for it, as published through the National Weather Service’s NOWData, describe a long hot season and a short, mild winter:`,
      },
      {
        list: [
          `August is the hottest month, with a normal high of 97.2°F. July follows at 95.9°F and June at 94.0°F.`,
          `May already averages 89.2°F, and September still reaches 92.3°F.`,
          `January is the coolest month: a normal high of 68.8°F and a low of 46.6°F.`,
          `About 27.01 inches of precipitation fall across the twelve monthly normals.`,
          `September is the wettest month at 4.75 inches; January (1.16) and February (1.17) are the driest.`,
        ],
      },
      { h: 'Why do my eyes feel dry in Kingsville when it’s so humid?' },
      {
        p: `Sticky outdoor air doesn’t follow you inside. An air conditioner cools air and pulls water out of it at the same time, so the room you spend most of a South Texas summer in is drier than the porch. Add a vent blowing across your desk, the dashboard vents in a truck, and long hours at a screen with fewer blinks, and the tear film thins faster than you notice. The humid air outside isn’t doing your eyes harm; the steady flow of cooled air indoors is what to manage.`,
      },
      {
        list: [
          `Close or angle the dashboard vents so they blow at your chest or the windshield, never straight at your eyes.`,
          `Move a desk or recliner out of the path of a ceiling vent or window unit.`,
          `Set the thermostat a little warmer at night; a colder room means the system runs longer.`,
          `Look away from your phone or laptop every so often and finish each blink.`,
        ],
      },
      { h: 'The July dry spell and the September rains' },
      {
        p: `Kingsville’s rainfall doesn’t climb steadily through summer. The normals show 3.50 inches in May and 3.18 in June, then a drop to 1.37 inches in July, before August (2.30) and a wet September (4.75). That July lull lines up with some of the hottest days of the year. Outdoor work in July tends to mean bright sun, dust kicked up from dry ground and long stretches in air-conditioned cabs. Sunglasses with a close, wraparound fit help with glare and blowing grit at once.`,
      },
      { h: 'Ranch roads, trucks and long drives' },
      {
        p: `Life in Kleberg County involves a lot of driving: to work, to Corpus Christi, to a lease or a ranch gate down an unpaved road. Hours behind the wheel bring three things your eyes notice. You stare at the road and blink less. The air conditioning blows constantly. And dust from dirt roads finds its way in through the vents. Set the system to recirculate on dusty stretches, keep the vents low, and stop now and then to rest your eyes. If grit or anything else gets into an eye and stays, that is a job for an eye doctor or urgent care, not a lubricating drop.`,
      },
      { h: 'Mild winters with cool mornings' },
      {
        p: `December and January highs near 70°F make winter here easy on most people, but mornings are cooler than the afternoons suggest. January’s normal low is 46.6°F and December’s is 48.0°F, so heaters switch on for an hour or two at dawn and the house dries out while you get ready. Hunters heading out before sunrise on a cold front meet wind and low sun on the drive back. A pair of glasses and a bottle in a jacket pocket are worth bringing.`,
      },
      { h: 'Where Quell fits in a Kingsville day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions: {directions}. Plan the three doses around your day: before the morning drive, at lunch out of the sun, and in the evening after time in air conditioning. The label also notes: {tip}.`,
      },
      {
        p: `Heat is the storage problem here. The label says: {storage}. A truck cab in an August parking lot can climb far past the top of that range, so keep the bottle on you or indoors rather than in the console. You can read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Kingsville' },
      {
        p: `We ship from Brentwood, Tennessee, to Kingsville and every other US address. There’s no account to create; check out as a guest. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, though no arrival date is promised. If a package might sit on a hot porch, have it sent to a workplace where someone can bring it inside. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. Local details are on the [Kingsville page](/eye-drops/kingsville-tx) and the [Texas page](/eye-drops/state/texas). Down the road, our [Corpus Christi guide](/guides/dry-eye-relief-corpus-christi-tx) looks at the coast.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Dryness that keeps coming back deserves a proper exam. The label is direct about when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [symptoms that need a doctor, not a drop](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Kingsville, Texas?',
        a: `August, with a normal high of 97.2°F in NOAA’s 1991–2020 normals for the Naval Air Station Kingsville station. July averages 95.9°F and June 94.0°F.`,
      },
      {
        q: 'What is the rainiest month in Kingsville, TX?',
        a: `September, at 4.75 inches in NOAA’s normals for the station at Naval Air Station Kingsville. July is unusually dry for midsummer at 1.37 inches, and January is the driest month at 1.16.`,
      },
      {
        q: 'Why do my eyes feel dry in South Texas air conditioning?',
        a: `Air conditioners take moisture out of the air as they cool it, and vents often blow straight across a desk or a driver’s face. That moving, drier air speeds evaporation from the tear film even when it’s humid outdoors.`,
      },
      {
        q: 'Can I get Quell eye drops shipped to Kingsville?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Kingsville and the rest of Kleberg County, with guest checkout and email tracking. No delivery date is promised, so reorder before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-danville-va:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid DAN; saved at .daily-job/acis1123/DAN.json and .daily-job/c/mint_DAN.json)
   *   (DANVILLE REGIONAL AIRPORT, elev 552 ft: normal highs Jan 48.9 F, Feb 52.7,
   *   Mar 61.1, Jun 85.2, Jul 88.8, Aug 87.2, Oct 71.3, Nov 60.7, Dec 51.7; normal lows
   *   Jan 28.1, Feb 30.2, Mar 36.8, Jul 67.0, Oct 46.2, Nov 35.5, Dec 30.4; precip
   *   Feb 2.73 in (driest), May 4.13, Jul 4.88 (wettest), Sep 4.25; twelve monthly
   *   normals sum to 43.73 in; snowfall Jan 2.5, Feb 2.5, Mar 1.5, Dec 1.1, other
   *   months 0.0, sum 7.6 in)
   * - relhum23.txt / wndspd23.txt have no row for this station (WBAN 13728): no
   *   humidity or wind figure used.
   * - Kept apart from the Lynchburg guide (spring humidity, James River, Blue Ridge,
   *   campus) and Greensboro (campuses, greenways, golf): built on Danville's wide
   *   day-to-night swings, heat pumps, humid rainy summers and light snow.
   */
  {
    slug: 'dry-eye-relief-danville-va',
    title: 'Dry eye relief in Danville, Virginia',
    description:
      'Danville’s fall days swing about 25 degrees from dawn to afternoon, so heat and open windows trade places. NOAA numbers and steps for dry eyes.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Danville’s air changes a lot within a single day. NOAA’s normals for Danville Regional Airport show November running from a 35.5°F morning to a 60.7°F afternoon, so the heat runs at dawn and windows open by lunch, and winter nights dip below freezing from December through February. Keep heat and air-conditioning vents off your face, run a humidifier in winter, blink fully at screens, and use a lubricating drop as directed.`,
      },
      { h: 'Danville’s climate at the regional airport' },
      {
        p: `NOAA’s 1991–2020 climate normals for Danville Regional Airport, at about 550 feet near the North Carolina line, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `January: normal high 48.9°F, low 28.1°F.`,
          `July: high 88.8°F, low 67.0°F, and the wettest month at 4.88 inches.`,
          `February: the driest month, at 2.73 inches.`,
          `About 43.73 inches of precipitation across the twelve monthly normals.`,
          `About 7.6 inches of snow in a normal year: 2.5 in January, 2.5 in February, 1.5 in March and 1.1 in December.`,
        ],
      },
      { h: 'Twenty-five-degree days in fall and spring' },
      {
        p: `The gap between morning and afternoon is the thing to watch here. In October the normal low is 46.2°F and the high 71.3°F. In November it’s 35.5°F to 60.7°F, and in March 36.8°F to 61.1°F. That is roughly a 25-degree climb on an ordinary day. Many households run the heat at breakfast, shut it off by noon, then switch it back on after dark. Each heating cycle pushes warm, dry air through the vents, and your eyes meet it first thing in the morning, when they already feel dry after a night of sleep.`,
      },
      {
        list: [
          `Set a slightly lower morning temperature so the system runs in shorter bursts.`,
          `Point vents away from the breakfast table, your favorite chair and the side of the bed.`,
          `On mild afternoons, open a window for fresh air instead of running the system longer.`,
          `Keep a humidifier going in the bedroom from late fall until spring.`,
        ],
      },
      { h: 'Heat pumps and cold, still mornings' },
      {
        p: `If your home has a heat pump, it heats by moving a lot of air at a moderate temperature for long stretches. That steady stream across a room is easy to ignore and hard on the tear film when it reaches your face. Winter lows here average 28.1°F in January, 30.2°F in February and 30.4°F in December, so a heat pump may run for hours before dawn. If you have a wall-mounted unit, our guide to [dry eyes from a mini-split heat pump](/guides/dry-eyes-from-a-mini-split) covers louver settings and placement.`,
      },
      { h: 'Humid, rainy summers that still dry your eyes' },
      {
        p: `July brings the most rain of the year and highs near 89°F, which sounds like the opposite of dry. The catch is indoors. Air conditioning pulls moisture out as it cools, and summer work in Danville often means long hours in a chilled office, warehouse or vehicle. Keep the car’s vents aimed at your chest, avoid sitting under a supply vent at work, and take short screen breaks. Outdoors, sunglasses help with glare off wet pavement after the afternoon storms.`,
      },
      { h: 'A little snow, plenty of cold' },
      {
        p: `Danville gets only about 7.6 inches of snow in a normal year, most of it in January and February, but the cold is steady. When snow does fall, the bright glare and cold wind on a shoveling morning are followed by a warm, dry kitchen, and that swing is what many people feel. Wear glasses outside, step indoors for breaks, and keep your eyes out of the warm air rushing from a register. Our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) has more.`,
      },
      { h: 'Night shifts, long drives and screens' },
      {
        p: `If you work shifts or commute across the state line, a late shift often means artificial light, a screen or a control panel, and a drive home in the dark with the heater blowing. Use the floor setting once the windshield clears, blink deliberately at red lights, and keep a bottle where you can reach it between shifts rather than in a hot or frozen glove box.`,
      },
      { h: 'Quell’s label in plain words' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. Directions: {directions}. The panel adds: {tip}. On storage it reads: {storage}. All of it is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Danville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Danville, Pittsylvania County and any other US address. Guest checkout means no account. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get a tracking link by email, and because no delivery date is promised, it’s worth ordering a little early. Unopened bottles are refundable within {returnDays} days of delivery, without sending them back. See the [Danville page](/eye-drops/danville-va), the [Virginia page](/eye-drops/state/virginia), or our [Lynchburg guide](/guides/dry-eye-relief-in-lynchburg).`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `If dryness keeps returning, or something else seems wrong, an exam is the right step. From the label: {stopUse} Read our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor). An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Danville, Virginia get?',
        a: `About 7.6 inches in a normal year, according to NOAA’s 1991–2020 normals for Danville Regional Airport. January and February average 2.5 inches each, March 1.5 and December 1.1.`,
      },
      {
        q: 'What is the wettest month in Danville, VA?',
        a: `July, with 4.88 inches in NOAA’s normals for Danville Regional Airport. February is the driest month at 2.73 inches, and the year adds up to about 43.73 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in the morning in Danville in the fall?',
        a: `Fall mornings are cold enough to run the heat even when afternoons are mild. November’s normal low near Danville is 35.5°F against a 60.7°F high, so the heat pump or furnace blows warm, dry air just as you wake up.`,
      },
      {
        q: 'Can Quell be shipped to Danville, Virginia?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Danville and surrounding Pittsylvania County. You can check out as a guest and follow the package by email, though no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-naperville-il:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid ARR; saved at .daily-job/acis1123/ARR.json and .daily-job/c/mint_ARR.json)
   *   (CHICAGO AURORA MUNICIPAL AP, elev 701 ft: normal highs Jan 30.5 F, Mar 47.5,
   *   Apr 60.4, Jul 84.4, Sep 76.2, Oct 63.3, Nov 48.1, Dec 35.8; normal lows Jan 14.7,
   *   Feb 18.0, Mar 28.1, Apr 37.2, Oct 40.6, Nov 29.2, Dec 20.6; precip Apr 3.60 in,
   *   May 4.06, Sep 3.01, Oct 3.23, Nov 2.30; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no row for this station: no humidity or wind
   *   figure used.
   * - Same station as the Aurora guide (2026-11-19-a), so this one avoids its angles
   *   (Fox River, Metra, I-88 warehouses, Jan/May/Dec figures as headline) and is built
   *   on the October-to-November drop, five months of below-freezing lows, newer tight
   *   houses, home offices and indoor youth sports.
   */
  {
    slug: 'dry-eye-relief-naperville-il',
    title: 'Dry eye relief in Naperville, Illinois',
    description:
      'Normal highs near Naperville fall 15 degrees from October to November, and lows stay below freezing into March. NOAA numbers and dry-eye steps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `In Naperville, dry-feeling eyes tend to arrive with November. NOAA’s normals for Chicago Aurora Municipal Airport, the nearest full-record station, show the normal high dropping from 63.3°F in October to 48.1°F in November, with lows below freezing from November through March. That’s five months of furnace air. Angle vents away from your face, humidify the bedroom, take real screen breaks, and use a lubricating drop exactly as labeled.`,
      },
      { h: 'The station west of town' },
      {
        p: `Naperville doesn’t have its own long-term NOAA station. The closest with complete 1991–2020 normals is Chicago Aurora Municipal Airport, out in the farmland west of Naperville past Aurora, at about 700 feet. Open fields around an airport can run a bit colder on still nights than a neighborhood full of houses and trees, so read these figures as the pattern of the far-west suburbs. From NOAA’s normals for that station, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `October: normal high 63.3°F, low 40.6°F.`,
          `November: high 48.1°F, low 29.2°F.`,
          `December: high 35.8°F, low 20.6°F.`,
          `January: high 30.5°F, low 14.7°F, the coldest month.`,
          `March: high 47.5°F, but the low is still 28.1°F.`,
          `April: high 60.4°F, with 3.60 inches of precipitation.`,
        ],
      },
      {
        p: `The snowfall normal for this station is missing, so we don’t quote one.`,
      },
      { h: 'The November drop' },
      {
        p: `A 15-degree fall in the normal high from one month to the next is a big step, and it happens right as Thanksgiving week arrives. Homes that ran on open windows in October switch to the furnace within days, and the first week of steady heat is when many people first feel scratchy, tired-feeling eyes at the end of the day. If that sounds familiar, the air in the house changed more than your eyes did.`,
      },
      { h: 'Five months of below-freezing nights' },
      {
        p: `Normal lows sit under 32°F in November (29.2°F), December (20.6°F), January (14.7°F), February (18.0°F) and March (28.1°F). Heating that much cold air leaves the indoor air dry for nearly half the year. Here’s where to start:`,
      },
      {
        list: [
          `Run a humidifier where you sleep, and clean it as its manufacturer directs.`,
          `Keep beds, desks and couches out of the stream from floor or ceiling registers.`,
          `Set the thermostat a couple of degrees lower at night.`,
          `In newer, tightly sealed houses, run the bathroom fan only as long as it’s needed; it pulls out the shower’s moisture with the steam.`,
        ],
      },
      {
        p: `Our longer guide to [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) goes into furnace settings and filters.`,
      },
      { h: 'Home offices and long video days' },
      {
        p: `A Naperville home office is often a spare bedroom or finished basement with a single register blowing warm air into a small room. Eight hours of spreadsheets and video calls cuts the blink rate, and the small room dries quickly. Put the monitor slightly below eye level, so your lids cover more of the eye, follow a regular break schedule, and redirect that vent. Our guide for [remote workers](/guides/dry-eyes-for-remote-workers) has a fuller desk setup.`,
      },
      { h: 'Indoor practices and cold Saturday games' },
      {
        p: `Winter in the western suburbs means youth sports move indoors: heated gyms, ice rinks and field houses where parents sit for hours under big air handlers. Fall Saturdays bring the opposite, cold wind on open fields. On the bleachers, sit away from blowers. On the sideline, wear sunglasses or clear glasses against the wind, and step into the car for a few minutes of still air between games.`,
      },
      { h: 'What the label says about Quell' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. The directions are: {directions}. Keep the tip clean, as the panel says: {tip}. The label also notes: {milky}. Read everything, including the caution about egg or bird allergies, on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `For storage the panel reads: {storage}. A January night in a car in the driveway can fall far below that range, so keep a bottle in your bag and bring it in.`,
      },
      { h: 'Ordering Quell to Naperville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Naperville and the rest of DuPage and Will counties. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. The tracking link comes by email. We don’t promise a delivery date, so order before you run low, especially near the holidays. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. Visit the [Naperville page](/eye-drops/naperville-il) or the [Illinois page](/eye-drops/state/illinois), or compare notes with our [Aurora guide](/guides/dry-eye-relief-aurora-il).`,
      },
      { h: 'When to book an eye exam' },
      {
        p: `Dry eyes that don’t settle with better air and a lubricating drop deserve a professional look. The label puts it this way: {stopUse} Our guide to [symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists others. An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Naperville get in November?',
        a: `NOAA’s 1991–2020 normals for Chicago Aurora Municipal Airport, west of Naperville, put November’s normal high at 48.1°F and its normal low at 29.2°F, down from 63.3°F and 40.6°F in October.`,
      },
      {
        q: 'Which months have below-freezing nights in Naperville?',
        a: `November through March. Normal lows at the nearest full-record station run 29.2°F in November, 20.6°F in December, 14.7°F in January, 18.0°F in February and 28.1°F in March.`,
      },
      {
        q: 'Why are my eyes so dry in my Naperville home office?',
        a: `A small room with one heating register warms up fast and dries out, and long screen sessions cut your blink rate. Redirect the vent, lower the monitor a little, take regular breaks and consider a humidifier.`,
      },
      {
        q: 'Does Quell deliver to Naperville, IL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Naperville addresses in both DuPage and Will counties. Checkout is as a guest, and the tracking link arrives by email; no delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-online-tutors',
    title: 'Dry eyes for online tutors',
    description:
      'Back-to-back video sessions, shared whiteboards and evening hours dry out a tutor’s eyes. Session-by-session habits and what the drop label covers.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Online tutors get dry eyes because the job stacks long stretches of focused screen time with almost no gaps. You watch a student’s face, read their work on a shared whiteboard and talk at once, and your blink rate drops through all of it. Build a two-minute buffer between sessions, keep the camera and screen at the right height, enlarge small text, keep heating vents off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why tutoring on video is hard on the eyes' },
      {
        p: `Tutoring asks for a kind of attention that ordinary office work doesn’t. You’re reading a student’s expression for confusion, following their pen on a digital whiteboard, checking an answer in another tab and keeping the conversation going. When the eyes are locked on something that demanding, blinking slows and many blinks stop halfway. Each full blink spreads a fresh layer of tears across the eye; partial ones leave the lower part of the surface exposed. Our explainer on [how blinking spreads tears](/guides/how-blinking-spreads-tears) shows what that means for the tear film.`,
      },
      {
        p: `Then there’s the schedule. Many tutors work after school lets out and into the evening, often after a day job or classes of their own. By the 7 p.m. session, your eyes may already have had eight hours of screens.`,
      },
      { h: 'Back-to-back sessions: build in a gap' },
      {
        p: `The platform may let one session end at 4:00 and the next begin at 4:00. Your eyes do better with even a short pause. Try this between every session:`,
      },
      {
        list: [
          `End each session two or three minutes early, or book on the 5s (4:05, 5:05).`,
          `Stand up, look out a window or across the room at something at least 20 feet away, and blink slowly ten times.`,
          `If you use eye drops, this is the moment to put one in, not mid-lesson with a student watching.`,
          `Write your session notes after the break, not before it, so your eyes rest first.`,
        ],
      },
      { h: 'Should you look at the camera or the screen?' },
      {
        p: `Looking into the lens gives a student the feeling of eye contact, but staring at a small black dot is tiring and almost nobody blinks normally while doing it. Look at the camera when you’re explaining something important or giving encouragement, then let your gaze return to the student’s face on screen. Placing the video window right under the camera keeps the two close together, so you aren’t straining between them.`,
      },
      { h: 'Setting up your desk for teaching from home' },
      {
        list: [
          `Put the top of the screen at or slightly below eye level. Looking a little down covers more of the eye with the lids.`,
          `Zoom the shared whiteboard or document so handwriting and equations are easy to read; squinting at tiny text slows your blinks further.`,
          `Light your face from the front with a soft lamp instead of sitting in a dark room lit only by the monitor.`,
          `Turn heating or air-conditioning vents so they don’t blow across your desk, and keep a desk fan pointed away from your face.`,
          `If you use two monitors, keep the student on the one directly in front of you. Our guide to [multiple monitors](/guides/dry-eyes-with-multiple-monitors) covers layouts.`,
        ],
      },
      { h: 'Test-prep season and longer sessions' },
      {
        p: `Before big exams, sessions get longer and more frequent, and you may spend free time making practice sets. That is when dry, scratchy eyes tend to show up for tutors. Schedule your own prep in the morning, when your eyes are fresher, and keep the evening for live sessions. A 90-minute session deserves a short break in the middle; most students welcome a stretch too.`,
      },
      { h: 'Using a lubricating drop around your schedule' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions read: {directions}. For a tutor, that might mean one dose before the first session, one at a mid-afternoon break and one before the evening block. The panel also says: {tip}. Keep the bottle in a drawer by the desk rather than on a sunny windowsill; the label’s storage line is: {storage}.`,
      },
      {
        p: `Expect a moment of softer focus right after a drop of this kind, since the label notes: {milky}. That’s one more reason to put it in between sessions rather than while a student is sharing a problem. If you wear contact lenses, the label doesn’t give directions for using it with them, so ask your eye doctor or pharmacist first. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When dry eyes need more than a break' },
      {
        p: `Screen habits explain a lot, but not everything. The label says: {stopUse} If your eyes ache, your vision blurs and doesn’t clear with blinking, or dryness keeps coming back despite breaks, book an eye exam. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a useful check, and if you also teach in a classroom, see our guide for [teachers](/guides/dry-eyes-for-teachers).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry after tutoring online?',
        a: `Concentrating on a student’s face, a shared whiteboard and your own notes at once slows your blinking, and many blinks become partial. Back-to-back sessions leave no time for the tear film to recover.`,
      },
      {
        q: 'How long should an online tutor rest their eyes between sessions?',
        a: `Even two or three minutes helps. Stand up, look at something far away, and blink slowly and fully several times before the next student joins.`,
      },
      {
        q: 'Should online tutors look at the camera or the student?',
        a: `Look at the camera for key moments, then return to the student’s face on screen. Placing the video window just under the camera keeps the shift small and lets you blink normally.`,
      },
      {
        q: 'Can I put in eye drops between video lessons?',
        a: `Yes, the gap between sessions is a good time. Quell’s label directions are: {directions}. Give your vision a moment to settle before the next lesson starts.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-actuaries',
    title: 'Dry eyes for actuaries',
    description:
      'Spreadsheet models, dense tables and months of exam study keep actuaries staring at screens. Desk, study and break habits for drier-feeling eyes.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Actuaries tend to get dry eyes from long, intense reading of numbers: pricing and reserving models, dense tables, and evenings of exam study on top of the workday. Concentration slows blinking, and small spreadsheet text makes it worse. Enlarge your view, use model runs as break time, plan study sessions in blocks, keep vents off your face, and use a lubricating drop as its label directs. Lasting discomfort is for an eye doctor.`,
      },
      { h: 'Why number-heavy work dries the eyes' },
      {
        p: `Checking a reserve triangle or tracing a formula through six linked tabs takes a fixed, close gaze. The eyes move in small jumps from cell to cell, the lids stay open, and blinks come less often and less completely. Between those blinks, the water in the tear film evaporates, and the surface starts to feel gritty or hot. Dry office air in winter speeds that up. Our page on [screens and your tear film](/guides/screens-and-your-tear-film) explains the mechanics.`,
      },
      { h: 'Make the spreadsheet easier to read' },
      {
        list: [
          `Zoom the workbook to a size you can read without leaning in (try 110 to 130 on the zoom slider for dense models).`,
          `Use a larger default font for working files and save the small print for final exhibits.`,
          `Turn on light banding or gridlines so your eyes don’t hunt along a row.`,
          `Freeze header rows and columns so you aren’t scrolling back to check labels.`,
          `Lower screen brightness to match the room; a glaring white sheet in a dim office invites squinting.`,
        ],
      },
      { h: 'Use model runs as eye breaks' },
      {
        p: `Actuarial work has built-in pauses: a projection runs, a query pulls, a large workbook recalculates. Instead of switching to email, look out a window or across the office for the length of the run and blink slowly. If runs take several minutes, stand up. These small, regular breaks add up to more rest than one long lunch.`,
      },
      { h: 'Two monitors, a calculator and a lot of paper' },
      {
        p: `A typical desk has the model on one screen, documentation or a database on another, and printed exhibits to the side. Put the screen you use most directly in front of you, with its top at or just below eye level. Keep paper on a stand at the same distance as the monitor so your focus isn’t changing all the time. Point any heating or air-conditioning vent away from your chair.`,
      },
      { h: 'Studying for actuarial exams' },
      {
        p: `Exam study usually happens after work: practice problems, manuals and online question banks on the same kind of screen you’ve been staring at all afternoon. That’s a second shift for your eyes. A few habits help:`,
      },
      {
        list: [
          `Study in timed blocks, such as 50 minutes on and 10 off, and leave the desk during the break.`,
          `Work some practice problems on paper under a good lamp to change what your eyes are doing.`,
          `Do the hardest sets earlier in the day on weekends, when your eyes are fresher.`,
          `Keep the bedroom for sleep; reading a manual in bed with a phone light adds more screen time.`,
          `On a computer-based exam, the testing center sets its own rules on personal items. Check them ahead of time rather than assuming you can bring a bottle into the room.`,
        ],
      },
      {
        p: `Our guide to [dry eyes during finals week](/guides/dry-eyes-during-finals-week) has more on long study stretches.`,
      },
      { h: 'Valuation season and year-end crunches' },
      {
        p: `Year-end and quarter-end work bring long hours just when buildings are running the heat hardest. That combination of dry air and long screen days is often when actuaries first notice their eyes. If your office is dry, ask about a small desk humidifier where policy allows, and keep the heater under your desk aimed at your feet, not upward. Colleagues in finance have similar seasons; see our guide for [accountants during tax season](/guides/dry-eyes-for-accountants).`,
      },
      { h: 'How a lubricating drop fits in' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions are: {directions}. On a long workday, that could mean one before you sit down, one after lunch and one before the evening study block. The panel also says: {tip}. It ships in a {size} bottle that fits in a desk drawer; the label’s storage line is: {storage}.`,
      },
      {
        p: `The label also carries a caution: {warnings}. If you wear contacts, the label doesn’t cover using it with them; ask your eye doctor or pharmacist. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Breaks and better settings help with ordinary screen dryness. They aren’t the answer to everything. The label says: {stopUse} An eye doctor can find the cause and decide what to do, and our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in spreadsheets?',
        a: `Reading dense numbers takes a fixed, close gaze, so you blink less often and less fully. Small text and dry office air make the tear film evaporate faster between blinks.`,
      },
      {
        q: 'How can actuaries rest their eyes during the workday?',
        a: `Use every model run or recalculation as a short break: look across the room or out a window and blink slowly. Enlarging the spreadsheet and lowering screen brightness also reduce strain.`,
      },
      {
        q: 'How do I keep my eyes comfortable while studying for actuarial exams?',
        a: `Study in timed blocks with real breaks away from the desk, mix in paper practice problems, and do the hardest sets when your eyes are fresh rather than late at night.`,
      },
      {
        q: 'Can I bring eye drops into a computer-based exam?',
        a: `That depends on the testing center’s rules for personal items, so check them before exam day. Using a drop just before you go in may be simpler than asking during the exam.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-butchers-and-meat-cutters',
    title: 'Dry eyes for butchers and meat cutters',
    description:
      'Walk-in coolers, cold-to-warm moves and close knife work dry out a meat cutter’s eyes. Shift habits, cooler tips and where to keep eye drops.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Butchers and meat cutters often get dry eyes from cold, moving air: walk-in coolers with fans blowing, cutting rooms kept chilled, and constant trips between cold and warm spaces. Close knife and saw work slows blinking. Wear glasses that fit close, take short breaks away from the fans, wash your hands well before touching your eyes, store drops outside the cooler, and see an eye doctor or urgent care for anything stuck in an eye.`,
      },
      { h: 'Why cold rooms dry your eyes' },
      {
        p: `Cold air holds very little moisture, and the coils in a walk-in cooler pull even more water out as they chill. Fans keep that cold, dry air moving across everything in the room, including your face. Moving air is what speeds evaporation from the tear film, so a few hours of breaking down cases in the cooler can leave your eyes stinging or watery by midmorning.`,
      },
      { h: 'Cold to warm and back again' },
      {
        p: `A meat department is a cycle of temperatures: cooler, cutting room, warm sales floor, back to the cooler. Each move changes how your eyes and glasses behave.`,
      },
      {
        list: [
          `Stand out of the direct path of the cooler fans when you’re working in there for more than a minute or two.`,
          `Glasses fog when you step from a cold room into warm air. Give them a moment rather than wiping them repeatedly with a dirty glove.`,
          `When you come out of a freezer, blink slowly a few times before going back to close work.`,
          `Wear a cap with a brim; it blocks some of the air coming down from ceiling units.`,
        ],
      },
      { h: 'Close knife work and the band saw' },
      {
        p: `Trimming, deboning and portioning take steady, fixed attention, and that slows blinking just as screen work does. The band saw adds fine bone dust and small fragments that can fly toward the face. Your shop sets its own rules for eye protection, so follow them. Glasses that wrap close to the face also block some of the cold air from the cooler fans. If a fragment, bone dust or anything else gets into an eye and doesn’t wash out with blinking, stop and get it looked at by an eye doctor or urgent care. A lubricating drop is not for that.`,
      },
      { h: 'Hands, gloves and eyes' },
      {
        p: `Raw meat, cleaning chemicals and cold, wet gloves all end up near your face if you rub your eyes on the line. Before you touch your eyes or put in a drop:`,
      },
      {
        list: [
          `Take off gloves and wash your hands thoroughly with soap and warm water.`,
          `Dry them on a clean paper towel, not an apron or a shop towel.`,
          `Step away from the cutting area into a break room.`,
          `Put the drop in, recap the bottle, and wash again before going back to work.`,
        ],
      },
      { h: 'Early starts and the holiday rush' },
      {
        p: `Many meat departments start before dawn, and the weeks around Thanksgiving and Christmas bring long days of turkeys, hams, roasts and special orders. Long shifts in cold rooms mean more time in drying air and less time to rest. Plan your breaks so at least some are spent in a warm, still room, and keep your eyes away from the heater blowing in the break room. If you drive home in the dark after a long holiday shift, point the car’s vents at your hands rather than your face.`,
      },
      { h: 'Don’t keep your eye drops in the cooler' },
      {
        p: `It’s tempting to leave a bottle on a shelf in the walk-in or in your apron pocket while you work. Quell’s label gives a storage range: {storage}. A walk-in cooler runs colder than the bottom of that range, so keep the bottle in your locker, a jacket in the break room or your car on a mild day. The label also says: {tip}. A bottle that’s been knocked around a cutting room is worth looking at closely; the panel lists this under Do not use: {doNotUse}.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states its Uses: {uses}. Directions: {directions}. On a cutting shift, that might mean one at the start, one at lunch and one when you get home. The panel also notes: {warnings}. The label doesn’t give directions for contact lenses, so ask your eye doctor or a pharmacist if you wear them. See everything on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Other cold, busy kitchens raise similar problems; our guide for [line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs) covers the hot side of the building, and [cold air and dry eyes](/guides/dry-eyes-from-cold-air) looks at cold air in general.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Some things are beyond a drop. From the label: {stopUse} Anything stuck in the eye, a chemical splash, or pain after a fragment hits needs prompt care. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is worth a read.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after working in a walk-in cooler?',
        a: `A walk-in cooler’s coils pull moisture out of the air, and its fans keep that cold, dry air moving across your face. That speeds evaporation from the tear film, which can leave eyes stinging or watery.`,
      },
      {
        q: 'Can I keep eye drops in the meat cooler at work?',
        a: `It’s better not to. Quell’s storage line reads: {storage}. A walk-in cooler runs colder than that, so keep the bottle in your locker or a jacket in the break room.`,
      },
      {
        q: 'What should a butcher do if bone dust gets in their eye?',
        a: `Stop work. If blinking doesn’t clear it, get it checked by an eye doctor or urgent care. A lubricating drop is not meant for removing something stuck in the eye.`,
      },
      {
        q: 'Why do my glasses fog when I leave the cooler?',
        a: `Warm, moist air hits the cold lenses and condenses on them. Give the lenses a moment to warm up instead of wiping them with a dirty glove, which can smear grease or bits of meat near your eyes.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-estheticians',
    title: 'Dry eyes for estheticians',
    description:
      'Bright magnifier lamps, facial steamers and hours of close work leave many estheticians with dry eyes. Room, lamp and between-client habits.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Estheticians often get dry eyes from the work itself: hours of close focus under a bright magnifier lamp, warm mist from a facial steamer followed by dry room air, and back-to-back clients with little break. Position the lamp so it isn’t glaring at you, keep the steamer aimed away from your own face, rest your eyes between clients, and use a lubricating drop as its label directs. Splashes and lasting pain need an eye doctor.`,
      },
      { h: 'Close focus under the magnifier lamp' },
      {
        p: `Extractions, brow shaping and lash work keep your eyes fixed on a small area from a short distance, often through a magnifier. That kind of focus slows blinking, and the bright light on the client’s skin reflects back toward you. After a few hours, your eyes may feel scratchy, warm or watery. A few changes help:`,
      },
      {
        list: [
          `Adjust the magnifier so you’re looking slightly down through it, with your back and neck straight.`,
          `Angle the lamp so its light falls on the client, not into your eyes, and lower the brightness if your lamp allows.`,
          `Every few minutes of detailed work, lift your gaze to the far wall and blink slowly two or three times.`,
          `Keep overhead lights on at a comfortable level so the lamp isn’t the only bright thing in a dark room.`,
        ],
      },
      { h: 'The facial steamer, then dry air' },
      {
        p: `Steam feels like moisture, and for the client’s skin it is. For you, standing near the steamer for a few minutes and then stepping back into a heated or air-conditioned room means your eyes go from warm mist to drier air quickly. Point the steamer’s nozzle at the client’s face and away from where you lean. When the steamer is running, work from the side rather than directly over the stream. Once you switch it off, give your eyes a moment and a few full blinks.`,
      },
      { h: 'Small rooms, heat and airflow' },
      {
        p: `Facial rooms are usually small and kept warm for client comfort. A space heater, a ceiling vent over the bed, or a warmer cabinet for towels all add warm, moving air in a closed space. Check where your heat comes from and make sure it isn’t blowing across your workstation. A small humidifier in the room, cleaned as directed, can keep the air from getting too dry during a long day.`,
      },
      { h: 'Products, sprays and splashes' },
      {
        p: `Toners, peels, masks and setting sprays are part of the job, and some are applied close to your face as well as the client’s. Mist sprays away from yourself, keep lids on bottles, and wear eyewear if your salon or the product’s label calls for it. If a product gets into your eye, follow that product’s own label for what to do, rinse as it directs, and call a doctor or Poison Control if it says to or if pain continues. A lubricating drop isn’t for washing chemicals out of an eye.`,
      },
      { h: 'Between clients' },
      {
        p: `A full book leaves little time, but even a few minutes between clients makes a difference to your eyes:`,
      },
      {
        list: [
          `Step out of the room, ideally somewhere with a window or a longer view.`,
          `Wash your hands thoroughly before touching your face or eyes. You’ve been handling products since your first client.`,
          `If you use eye drops, this is when to put one in, not with a client on the bed.`,
          `Turn the lamp off while you set up for the next client rather than leaving it glaring.`,
        ],
      },
      { h: 'Your clients’ eyes are a different question' },
      {
        p: `Clients sometimes ask whether they can use eye drops after a facial. That’s their decision to make with their own eye doctor, and you shouldn’t put drops in a client’s eyes. Our guide on [eye drops after a facial](/guides/can-you-use-eye-drops-after-a-facial) answers the question from their side. Colleagues in nearby fields deal with similar close work; see our guides for [nail technicians](/guides/dry-eyes-for-nail-technicians) and [hairstylists](/guides/dry-eyes-for-hairstylists).`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses: {uses}. The directions say: {directions}. That fits around a workday: one before your first client, one at lunch, one at the end of the day. The panel adds: {tip}, and its storage line reads: {storage}. Keep the bottle in your bag rather than on a warm towel cabinet. The label doesn’t cover contact lenses, so ask your eye doctor or pharmacist if you wear them. Everything is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable even on days off, or something else seems wrong, have them checked. The label is clear: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent ones.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as an esthetician?',
        a: `Hours of close focus under a bright magnifier lamp slow your blinking, and moving between steamer mist and warm, dry room air dries the tear film. Small heated rooms add to it.`,
      },
      {
        q: 'Can a magnifier lamp make your eyes tired?',
        a: `It can if it’s too bright or angled toward you. Aim the light at the client’s skin, look slightly down through the lens, and look away and blink every few minutes during detailed work.`,
      },
      {
        q: 'What should an esthetician do if a peel splashes in their eye?',
        a: `Follow the product’s own label for what to do, rinse as it directs, and call a doctor or Poison Control if it says to or if pain or blurriness continues. Don’t rely on a lubricating drop for it.`,
      },
      {
        q: 'Should estheticians put eye drops in a client’s eyes?',
        a: `No. Whether a client uses eye drops is their choice to make with their own eye doctor. Estheticians can point them to their doctor or pharmacist instead.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-florists',
    title: 'Dry eyes for florists',
    description:
      'Flower coolers, wire and ribbon close work, holiday rushes and delivery driving dry out a florist’s eyes. Shop habits and how a drop fits in.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Florists get dry eyes from a mix of cold storage, close handwork and long rush seasons. Flower coolers move chilled, dry air; wiring, taping and ribbon work keep your eyes fixed at arm’s length; and holidays stack long days at the bench with hours of delivery driving. Work out of the cooler fans, rest your eyes between arrangements, keep sprays away from your face, and use a lubricating drop as labeled.`,
      },
      { h: 'The flower cooler' },
      {
        p: `Cut flowers live in a cooler, and you spend part of every day in or next to it pulling stems, processing deliveries and checking orders. The cooler’s fans move cold air constantly, and cold air carries little moisture. Stand out of the fan’s direct path when you can, especially while stripping stems or reading order tickets in there. Come out to process large deliveries at the bench rather than working in the cooler doorway, where cold air spills across your face.`,
      },
      { h: 'Wire, tape and ribbon: close work at the bench' },
      {
        p: `Boutonnieres, corsages and wired wreaths take fine, steady handwork, and that kind of focus slows blinking. You may notice your eyes feel dry after a stack of corsages more than after a large arrangement. Some habits help:`,
      },
      {
        list: [
          `Light the bench well from the side so you aren’t squinting at small stems.`,
          `Raise your work slightly on a block or a tilted stand so you aren’t hunched over it.`,
          `After each piece, look across the shop or out the front window and blink fully a few times.`,
          `Use reading glasses if you need them; straining to focus slows blinking further.`,
        ],
      },
      { h: 'Sprays, glitter, dried materials and sap' },
      {
        p: `Floral paint, tints, leaf shine and finishing sprays create mist near the bench. Dried flowers and grasses shed fine particles. Glitter gets everywhere in December. Spray away from your face in a ventilated area, ideally in a spray booth or by an open back door. If sap from a cut stem, a spray, glitter or a bit of plant material gets into your eye and doesn’t clear with blinking, rinse it as the product label directs where there is one and get it checked by an eye doctor or urgent care. A lubricating drop isn’t meant for removing something from the eye.`,
      },
      { h: 'Holiday rush: Thanksgiving to Christmas' },
      {
        p: `This is the busiest stretch of the year for many shops: Thanksgiving centerpieces, then fresh wreaths, garlands, poinsettias and holiday parties until Christmas, which falls on a Friday this year. Days are long, the shop’s heat runs as customers come and go, and the back room fills with cut greenery and boxes. Plan breaks at fixed times so they don’t disappear, and spend at least part of each one away from the bench, the cooler and screens.`,
      },
      { h: 'Delivery days in the van' },
      {
        p: `Delivery driving adds hours of staring at the road with the heater or air conditioning blowing. Point the vents at your hands or the windshield, not your face. Keep sunglasses in the van for low winter sun. Between stops, take a moment to blink and look around before getting back on the road. The van is not a good place to store a bottle of eye drops long-term, since it can get very cold or very hot.`,
      },
      { h: 'Keeping your eye drops at the shop' },
      {
        p: `The cooler isn’t the place for a bottle of drops, and neither is a sunny window ledge or the van’s dashboard. Quell’s storage line reads: {storage}. A purse, a jacket hanging in the back room or a drawer at the front counter all usually stay within that range. Before putting a drop in, wash plant sap, floral foam dust and spray residue off your hands. The label also reminds you: {tip}.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses: {uses}. Directions: {directions}. On a busy day, that could mean one before the shop opens, one at lunch and one after the last delivery. The panel’s caution reads: {warnings}. If you wear contact lenses, the label doesn’t cover them; ask your eye doctor or pharmacist. Read the full panel on our [Drug Facts page](/drug-facts), and see our guides on [sewing and knitting](/guides/dry-eyes-when-sewing-or-knitting) for more on close handwork and on [driving in winter](/guides/dry-eyes-when-driving-in-winter) for the van.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Ongoing discomfort, or anything that doesn’t feel like simple dryness, deserves an exam. From the label: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a flower shop?',
        a: `Florists spend time in coolers with fans moving cold, dry air, then do close handwork that slows blinking. Long holiday rushes and delivery driving with the heater on add to it.`,
      },
      {
        q: 'Can I keep eye drops in the flower cooler?',
        a: `Keep it somewhere warmer. The label’s storage line is: {storage}. Flower coolers usually run colder than that, so a drawer at the counter or a jacket in the back room makes more sense.`,
      },
      {
        q: 'What should I do if plant sap gets in my eye?',
        a: `If it doesn’t clear with blinking, rinse your eye and get it checked by an eye doctor or urgent care. A lubricating eye drop is not meant for washing out sap or plant material.`,
      },
      {
        q: 'How can florists rest their eyes during wreath season?',
        a: `Take breaks at set times away from the bench, the cooler and screens. After each wired piece, look across the shop and blink fully a few times before starting the next one.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-caregiver',
    title: 'Christmas gifts for a caregiver',
    description:
      'Thoughtful Christmas gifts for someone caring for a parent or partner: time off, comfort for long days, and small things for tired, dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `The most welcome Christmas gift for a family caregiver is usually time: an afternoon off, a meal handled, an errand done. After that, practical comfort wins over decoration, things that make long days at a bedside, in waiting rooms and on the phone with insurers easier. Many caregivers also deal with late nights, screens and dry, heated rooms, so a small comfort for dry-feeling eyes can be a kind, useful addition.`,
      },
      { h: 'Who this guide is for' },
      {
        p: `These ideas are for an adult who looks after someone at home: a daughter caring for her father, a husband helping his wife after surgery, a grandson who moved back in with his grandmother. They may not call themselves a caregiver at all. What they share is a schedule that bends around someone else’s needs, and very little time for their own.`,
      },
      { h: 'The gift of time' },
      {
        p: `If you can give only one thing, give a few hours. Make it specific so it’s easy to accept:`,
      },
      {
        list: [
          `A written card for a set afternoon in January when you’ll stay with their person so they can leave the house.`,
          `A standing offer to drive to one regular appointment each month.`,
          `Grocery runs or pharmacy pickups for a set number of weeks.`,
          `A meal you cook and deliver, labeled with reheating instructions.`,
          `An hour of yard work or snow shoveling, done without being asked.`,
        ],
      },
      { h: 'Comfort for long days and waiting rooms' },
      {
        p: `Caregivers spend a lot of time sitting in places that weren’t designed for comfort: a hard chair beside a hospital bed, an exam room, the car outside a pharmacy. Useful gifts here include a soft travel blanket, a good-quality tote that holds a folder of medical paperwork, a long phone charging cable or a portable battery, and a small reading light for a dim bedside. A planner or wall calendar with big squares for appointments helps people who juggle schedules for two.`,
      },
      { h: 'Small comforts for tired, dry eyes' },
      {
        p: `Long nights, hours of paperwork on a laptop and the dry, heated air of hospitals and homes in winter leave many caregivers with eyes that feel gritty by evening. Our guide on [dry eyes for caregivers](/guides/dry-eyes-for-caregivers) explains why. A few gifts speak to that directly:`,
      },
      {
        list: [
          `A soft, adjustable sleep mask for daytime rest after a hard night.`,
          `A tablet stand, so reading and video calls happen at a comfortable angle instead of looking down at a phone.`,
          `A cool-mist humidifier for their bedroom, from a maker they can find replacement parts for easily.`,
          `A bottle of lubricating eye drops for the nightstand or their bag.`,
        ],
      },
      { h: 'Is it okay to give eye drops as a gift?' },
      {
        p: `It can be, if you know the person mentions dry eyes or would welcome the help. Tuck it inside a larger gift so it feels like care rather than a hint. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. It comes in a {size} bottle that fits a coat pocket or a hospital tote. Before you give it, check the caution on the label: {warnings}. If your caregiver wears contact lenses, the label doesn’t cover that use, so it’s a question for their eye doctor or pharmacist. Also note: {milky}. Our [Drug Facts page](/drug-facts) has the full panel.`,
      },
      {
        p: `Eye drops are personal, so this should be their own bottle, not one shared with the person they care for. Our page on [giving eye drops to a parent or grandparent](/guides/eye-drops-for-a-parent-or-grandparent) covers the other side of that household.`,
      },
      { h: 'Gifts that ask nothing of them' },
      {
        p: `Avoid gifts that create work: a plant that needs daily watering, a class that requires a weekly commitment, a complicated gadget to set up. Avoid anything that requires a babysitter for their person, unless you’re providing one. Gift cards for things they already use, a prepaid meal service or a house cleaning visit tend to be more welcome than an experience they can’t schedule.`,
      },
      { h: 'Sending a gift to a caregiver’s home' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, so you can send it straight to the caregiver. You check out as a guest, enter their name and address in the shipping fields, and the tracking link goes to your email. Shipping is {shipping}, or free for {freeBottles} or more bottles. No delivery date is promised, and Christmas falls on a Friday this year, so order in early December. If they don’t want it and the bottle is unopened, a refund is available within {returnDays} days of delivery, and nothing needs to be mailed back. Our guide to [sending Quell as a gift](/guides/sending-quell-as-a-gift) walks through checkout.`,
      },
      {
        p: `More ideas are on our [gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes) page and in all our [holiday guides](/guides/topic/seasonal).`,
      },
      { h: 'The card matters too' },
      {
        p: `Many caregivers rarely hear that the work is seen. A short note naming one specific thing you’ve noticed, like how they keep the medication schedule straight or stay patient at 2 a.m., often means more than the gift. If their own eyes, sleep or health are suffering, gently encourage them to book their own appointments too. For eyes, our list of [symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a good start, and an eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What is an appropriate gift for a caregiver?',
        a: `Time is usually the most welcome: a specific afternoon off, a ride to an appointment, or a cooked meal. Practical comforts for long days, like a travel blanket, a long charging cable or a reading light, come next.`,
      },
      {
        q: 'What do you get a family caregiver for Christmas?',
        a: `Pick something that makes their days easier and asks nothing of them, such as an offer of respite, a meal service, a planner for appointments, or comforts for tired, dry eyes like a sleep mask and lubricating eye drops.`,
      },
      {
        q: 'Are eye drops a thoughtful gift for a caregiver?',
        a: `They can be, if the caregiver mentions dry eyes from late nights and heated rooms. Check the label’s caution about egg or bird allergies first, and put the bottle inside a larger, caring gift.`,
      },
      {
        q: 'Can I ship a caregiver gift straight to their house?',
        a: `Yes. At Quell’s checkout you enter the caregiver’s name and address for shipping, and the tracking email comes to you. No delivery date is promised, so order well before Christmas.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-on-the-first-snow-day',
    title: 'Dry eyes on the first snow day',
    description:
      'Cold wind, bright snow, then a hot, dry house: why the first snow day of winter is rough on eyes, and an hour-by-hour plan to keep them comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `The first snow day is hard on eyes because it packs every winter stress into a few hours: cold wind while you shovel or sled, bright light reflecting off fresh snow, then a house with the furnace running hard and everyone home on screens. Wear sunglasses or goggles outside, take short breaks out of the wind, keep heating vents off your face indoors, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why the first snow day feels different' },
      {
        p: `Later in winter, your routine has adjusted. The first real snowfall arrives before it has. The furnace hasn’t had to run this hard yet, the humidifier may still be in the closet, and the sunglasses are packed away with summer things. Schools close, offices go remote, and a whole household ends up indoors together, with outdoor bursts of cold, bright, windy work in between.`,
      },
      { h: 'Morning: shoveling the driveway' },
      {
        p: `Shoveling means bending into a cold wind, often with the low winter sun coming off a white surface. Cold air carries little moisture, and wind across the face speeds evaporation from the tear film. Many people also squint against the glare, and squinting goes along with fewer, shallower blinks.`,
      },
      {
        list: [
          `Wear sunglasses, even on a gray morning; fresh snow reflects much more light than bare ground.`,
          `Shovel with the wind at your back when you can.`,
          `Take a break every 15 minutes or so, turn out of the wind and blink slowly.`,
          `A scarf pulled up and a hat with a brim block some of the wind and light.`,
        ],
      },
      {
        p: `Our guide to [dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) goes further on technique and gear.`,
      },
      { h: 'Midday: sledding, snowballs and walking the dog' },
      {
        p: `Sledding puts cold air straight into your face at speed, and kids and adults both forget to blink on the way down. Ski or sledding goggles cover more of the eye than sunglasses do. When you come in for lunch, give your eyes a few minutes before switching to a phone. See [dry eyes when sledding](/guides/dry-eyes-when-sledding) for more. If snow, ice or grit hits an eye and something still feels stuck afterward, get it checked by an eye doctor or urgent care rather than reaching for drops.`,
      },
      { h: 'Afternoon: the furnace and a full house' },
      {
        p: `Back inside, the house is warm and dry. When cold outdoor air is heated, its relative humidity drops sharply, and a furnace running hard all afternoon dries every room. Add the fireplace, the oven baking cookies and a laptop on the couch for remote work, and your eyes may feel worse indoors than they did outside.`,
      },
      {
        list: [
          `Get the humidifier out today rather than next week, and clean it before running it.`,
          `Close or angle the register nearest the couch where everyone is watching movies.`,
          `Keep the thermostat at a moderate setting instead of turning it up to make up for the cold outside.`,
          `If you’re working from the kitchen table, sit away from the oven and the vent.`,
        ],
      },
      { h: 'Evening: a snow-day screen marathon' },
      {
        p: `By evening, a snow day often turns into hours of movies, games and scrolling. Screens slow blinking, and the room may be dim except for the TV. Turn on a lamp, sit farther from the screen, and pause between episodes to look away. If the roads are icy tomorrow too, plan some screen-free time for tomorrow as well.`,
      },
      { h: 'Driving in the first snow' },
      {
        p: `If you have to drive, the first snow usually means a cold car, a defroster on high and a lot of concentration on slick roads. Point the vents at the windshield and your hands, not your face, and switch to the floor setting once the glass is clear. Wear sunglasses against glare if the sun comes out. Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) covers longer trips.`,
      },
      { h: 'Your eye drops on a snow day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. On a snow day, a sensible rhythm is one in the morning before you shovel, one after you come in at midday, and one in the evening. The panel also says: {tip}.`,
      },
      {
        p: `Don’t leave the bottle in the car or an unheated garage today. The label’s storage line reads: {storage}. Keep it in an inside coat pocket outside and on a counter away from the fireplace or heater indoors. All the label details are on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Snow-day dryness usually eases once you’re back to a normal routine. If it doesn’t, or if something feels wrong, follow the label: {stopUse} Pain after something hits the eye needs prompt care. An eye doctor can find the cause and decide what to do. See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel so dry on a snow day?',
        a: `A snow day mixes cold wind and bright reflected light outdoors with a furnace running hard indoors. Both speed evaporation from the tear film, and long screen time at home slows blinking on top of that.`,
      },
      {
        q: 'Should I wear sunglasses to shovel snow?',
        a: `It helps. Fresh snow reflects a lot of light, which makes many people squint and blink less, and sunglasses also block some of the cold wind. Wraparound frames or goggles cover more of the eye.`,
      },
      {
        q: 'Why do my eyes feel worse inside after playing in the snow?',
        a: `Heating cold air lowers its relative humidity, so a house with the furnace running all afternoon is very dry. Moving from cold wind to that warm, dry air is hard on the tear film.`,
      },
      {
        q: 'Where should I keep eye drops on a snow day?',
        a: `Inside with you, not in the car or an unheated garage. Quell’s label gives this range: {storage}. An inside coat pocket works outdoors.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-while-christmas-caroling',
    title: 'Dry eyes while Christmas caroling',
    description:
      'Cold night air, candle smoke, reading song sheets in the dark, then warm, dry houses: how to keep your eyes comfortable on a night of caroling.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Caroling can leave your eyes dry and watery at once: you stand in cold night air, often in wind, holding a candle near your face and squinting at a song sheet by flashlight, then step into warm, dry houses between stops. Use battery candles or hold flames low, print large-type lyrics, wear glasses against the wind, blink often between songs, and keep a lubricating drop in an inside pocket.`,
      },
      { h: 'Why caroling is hard on the eyes' },
      {
        p: `Four things come together on a caroling night. The air is cold, and cold air holds little moisture. There’s usually some breeze, and moving air speeds evaporation from the tear film. You’re reading in poor light, which makes many people squint and blink less. And when a neighbor invites the group in for cider, you go from cold wind to a heated room in seconds. None of these is unusual on its own; together, over two or three hours, they add up.`,
      },
      { h: 'Candles near your face' },
      {
        p: `Real candles in paper cups look lovely, but a flame held at chest height sends warm air and a thin trail of smoke straight up toward your eyes. Battery-powered candles give the same glow without smoke. If your group uses real flames, hold them lower and a little away from your body, and step back when someone near you lights theirs. Our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers smoke indoors.`,
      },
      { h: 'Reading lyrics in the dark' },
      {
        p: `Most carolers know the first verse and need the sheet for the rest. Squinting at small type under a streetlight is a recipe for a few dozen half-blinks per song.`,
      },
      {
        list: [
          `Print the song sheets in large type, one or two songs per page.`,
          `Use a small clip light or a headlamp on its lowest setting aimed at the page, not a phone screen at full brightness.`,
          `If you read from your phone, turn the brightness down and the text size up.`,
          `Look up from the page between verses and blink slowly a couple of times.`,
        ],
      },
      { h: 'Dressing for wind and cold' },
      {
        p: `Choose glasses over nothing on a windy night. Even clear lenses block some of the air moving across your eyes. A hat with a brim and a scarf you can pull up help too. Stand with your back to the wind when the group stops at a house, and let the taller people take the windward side if they don’t mind.`,
      },
      { h: 'Warm houses and hot cider between stops' },
      {
        p: `Being invited in is part of the fun. The trouble for your eyes is the sudden switch from cold, damp night air to a warm room with the furnace or fireplace running. Steam from mugs of cider or cocoa feels soothing, but the room itself may be quite dry. Stand away from the fireplace and floor vents, and when you head back out, give your eyes a few slow blinks before the next song. If you wear glasses, expect them to fog as you come inside; wait a minute rather than wiping them with a cold, damp glove.`,
      },
      { h: 'Caroling with a church, school or neighborhood group' },
      {
        p: `Group caroling often runs late and covers a lot of ground. If you’re organizing, plan a route with a break indoors halfway through, set out a box of tissues and battery candles, and print songs in large type for everyone. Older singers and anyone with dry eyes will appreciate the brighter sheets. If your group also sings indoors at a service or concert, see our guide to [dry eyes at a holiday concert or show](/guides/dry-eyes-at-a-holiday-concert-or-show).`,
      },
      { h: 'Bringing eye drops along' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses: {uses}. The directions are: {directions}. If you plan to use a dose during the evening, put it in during the indoor break rather than outside in the wind with cold hands. Wash or sanitize your hands first, and follow the panel: {tip}.`,
      },
      {
        p: `Cold matters for the bottle too. The label says: {storage}. A December night can be well below that, so carry the bottle in an inside pocket close to your body instead of in a purse or a car. The full label is on our [Drug Facts page](/drug-facts), and our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more for windy nights.`,
      },
      { h: 'If your eyes still bother you a day later' },
      {
        p: `A little scratchiness after a long night outside usually eases with rest. If it doesn’t, or if smoke or something else got into an eye and it still hurts, have it checked. The label puts it plainly: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) helps you judge how soon.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when I go caroling?',
        a: `Cold wind, candle smoke and squinting at song sheets in low light all dry the tear film quickly, and your eyes may water in response. Glasses, battery candles and large-print lyrics help.`,
      },
      {
        q: 'Are battery candles better than real candles for caroling?',
        a: `For your eyes, usually yes. A real flame held at chest height sends warm air and smoke up toward your face, and battery candles give the same glow without either.`,
      },
      {
        q: 'How do I read song sheets while caroling at night?',
        a: `Print lyrics in large type, light the page with a small clip light or a dimmed headlamp, and look up between verses to blink. A phone screen works if you turn brightness down and text size up.`,
      },
      {
        q: 'Where should I keep eye drops when caroling outside?',
        a: `In an inside pocket close to your body. Quell’s label says: {storage}. A winter night outdoors can be colder than that.`,
      },
    ],
  },
  {
    slug: 'why-eye-drop-labels-show-celsius-and-fahrenheit',
    title: 'Why eye drop labels show Celsius and Fahrenheit',
    description:
      'Quell’s storage line gives a range in both Celsius and Fahrenheit. What each number means, how to convert them, and how to use the range at home.',
    category: 'label',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Quell’s label gives its storage temperatures in both Celsius and Fahrenheit, so you can read the range without converting. The Other information section says: {storage}. The two scales describe the same range: 15°C is 59°F and 30°C is 86°F. In the US, the Fahrenheit numbers in parentheses are the ones that match your thermostat and weather app.`,
      },
      { h: 'What the storage line actually says' },
      {
        p: `The line sits in the Other information section of the Drug Facts panel, next to this note: {milky}. It gives a lower and an upper limit in degrees Celsius, then the same two limits in degrees Fahrenheit inside parentheses. There is one range, written two ways, not two different rules. You can see the panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Why both scales appear' },
      {
        p: `Celsius is the scale used in science and in most countries, while most Americans read temperatures in Fahrenheit day to day. Printing both on the same line means a reader in either habit gets the answer without doing arithmetic, and a pharmacist, a caregiver or a traveler abroad reads the same box the same way. For you, it means you can ignore the scale you don’t use.`,
      },
      { h: 'How to convert Celsius to Fahrenheit' },
      {
        p: `If you ever need to check a label that prints only Celsius, the conversion is simple:`,
      },
      {
        list: [
          `Multiply the Celsius number by 9.`,
          `Divide the result by 5.`,
          `Add 32.`,
          `Example: 15 × 9 = 135; 135 ÷ 5 = 27; 27 + 32 = 59°F.`,
          `Example: 30 × 9 = 270; 270 ÷ 5 = 54; 54 + 32 = 86°F.`,
        ],
      },
      {
        p: `To go the other way, subtract 32 from the Fahrenheit number, multiply by 5 and divide by 9. A quick mental shortcut, doubling the Celsius figure and adding 30, gets close (15 becomes 60, 30 becomes 90) but runs a few degrees high at the top of this range, so use the exact Fahrenheit numbers printed on the label rather than the shortcut.`,
      },
      { h: 'What 59°F to 86°F means around the house' },
      {
        p: `Most living spaces that people find comfortable fall inside that range. The trouble spots are the places that swing with the weather or sit next to heat or cold:`,
      },
      {
        list: [
          `Below 59°F: a car in winter, an unheated garage or porch, a mailbox in January, a refrigerator.`,
          `Above 86°F: a car in summer, a sunny windowsill, the top of a radiator or a space heater, a bag left in direct sun.`,
          `Usually inside the range: a kitchen drawer away from the stove, a nightstand, a desk drawer, a purse or coat pocket you keep with you.`,
        ],
      },
      {
        p: `Our guides on [what temperature eye drops should be stored at](/guides/what-temperature-should-eye-drops-be-stored-at) and [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) go into specific places.`,
      },
      { h: 'Checking the temperature where you keep your drops' },
      {
        p: `If you aren’t sure whether a spot stays in range, an inexpensive indoor thermometer left there for a day tells you. Thermostats and many weather apps show Fahrenheit by default in the US, which lines up with the numbers in the label’s parentheses. If your device shows Celsius, use the first pair of numbers instead. Either way, look for the lowest and highest readings over a full day, not just the reading when you check.`,
      },
      { h: 'What if the bottle got too hot or too cold?' },
      {
        p: `The storage line gives the range but doesn’t say what to do after a bottle has been outside it. Look at the drop before using it. Our product page says this about its look: {appearance} The label also tells you when not to use it: {doNotUse}. If you’re unsure about a bottle that spent a night in a freezing car or an afternoon on a hot dashboard, ask a pharmacist or call us at {phone} ({hours}) before using it. Our guide to [whether eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) covers winter.`,
      },
      { h: 'The rest of the Other information section' },
      {
        p: `The section holds just two lines, the appearance note and the storage range, and both are about the bottle rather than your eyes. For what the drop is for, read the Uses section: {uses}. For how to use it: {directions}. Our walkthrough of the [Other information section](/guides/other-information-section-eye-drop-label) explains the panel’s layout. If your eyes hurt or your vision changes, the label’s advice is: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is 15 to 30 degrees Celsius in Fahrenheit?',
        a: `15°C is 59°F and 30°C is 86°F, so a storage range of 15 to 30°C is the same as 59 to 86°F. Quell’s label prints both versions on one line.`,
      },
      {
        q: 'Why does the eye drop label list Celsius first?',
        a: `On Quell’s label, the Celsius range comes first and the Fahrenheit range follows in parentheses. They are the same range written in two scales, so use whichever one matches your thermometer.`,
      },
      {
        q: 'How do I convert a storage temperature on a drug label to Fahrenheit?',
        a: `Multiply the Celsius number by 9, divide by 5 and add 32. For example, 30°C times 9 is 270, divided by 5 is 54, and adding 32 gives 86°F.`,
      },
      {
        q: 'Is 86 degrees Fahrenheit too warm for eye drops?',
        a: `For Quell, 86°F is the top of the label’s storage range: {storage}. Places that get hotter, like a car in summer or a sunny windowsill, are outside it.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-a-gated-community',
    title: 'Shipping eye drops to a gated community',
    description:
      'Ordering eye drops to a gated neighborhood: how to write the address, what checkout does and doesn’t ask, gate access, and tracking a package.',
    category: 'shipping',
    addedOn: '2026-11-23',
    body: [
      {
        p: `You can ship Quell to a gated community like any other US address. Enter the full street address the way your community’s own mail uses it, add a unit or lot number in the second address line, and give a phone number you’ll answer. Checkout has no separate gate-code or delivery-note field, so arrange carrier access through your community’s usual method, and watch the emailed tracking link.`,
      },
      { h: 'What checkout asks for' },
      {
        p: `Quell’s checkout is guest-only, so there’s no account to set up. The shipping section asks for:`,
      },
      {
        list: [
          `First and last name.`,
          `Street address.`,
          `Apt, suite (optional).`,
          `City, a two-letter state code and ZIP code.`,
          `Phone number, which is required; the form explains it’s for delivery updates because the carrier asks for one.`,
        ],
      },
      {
        p: `Before that, you enter an email address, where your receipt and tracking go. Card details are entered afterward on our payment provider’s secure page. There is no field for a gate code, a guard-house note or delivery instructions.`,
      },
      { h: 'Writing a gated-community address correctly' },
      {
        p: `Many gated communities have private street names, building numbers and lot or unit numbers that matter for finding the door. To give the package the clearest path:`,
      },
      {
        list: [
          `Use the street address your community uses for mail, not the main entrance address, unless that’s what management tells residents to use.`,
          `Put a unit, villa, building or lot number in the optional second line.`,
          `Spell the street exactly, including Court, Circle or Lane; several streets inside one development can share a first name.`,
          `Use your full ZIP code if you know the extra four digits.`,
          `Double-check the phone number. A wrong digit means no call if the driver needs help.`,
        ],
      },
      { h: 'Gate codes and guard houses' },
      {
        p: `Each community handles delivery access its own way. Some keep a guard house that logs packages or calls residents, some use a call box at the gate, and others hold packages at a clubhouse, management office or package locker. Since our checkout doesn’t carry a gate code, ask your management office or HOA how carriers get in, and whether packages are held at the gate. Don’t type a private gate code into an address line; addresses get printed on labels that many people handle.`,
      },
      { h: 'Using the tracking link' },
      {
        p: `Once your order ships, the tracking link arrives at the email you entered. We don’t promise a delivery date, so use tracking to watch for the day the package is out for delivery. If you know it’s coming, it helps to tell the guard house or front office to expect it, and to check the package area that evening.`,
      },
      { h: 'If tracking says delivered but you don’t have it' },
      {
        p: `Gated communities add a few places a package can end up. Before you worry:`,
      },
      {
        list: [
          `Check the guard house, clubhouse, mail kiosk or management office.`,
          `Look in package lockers and ask neighbors with similar house numbers on nearby streets.`,
          `Read the tracking details for a delivery note or photo.`,
          `Give it until tomorrow; packages are sometimes marked delivered a little early.`,
        ],
      },
      {
        p: `Then call us at {phone} ({hours}) with your order number. Our [Terms](/terms) say risk of loss passes on delivery to the address you provide, and that we aren’t responsible for delays caused by the carrier or an incorrect address, so getting the address right at checkout matters. Our guide for when [tracking says delivered but there’s no package](/guides/tracking-says-delivered-but-no-parcel) has more steps.`,
      },
      { h: 'Heat and cold at the gate' },
      {
        p: `A package that sits in a sunny guard house in summer or a cold package locker in winter is sitting outside the label’s storage range: {storage}. Pick it up as soon as you can. If the bottle arrives damaged, incorrect or with a broken tamper seal, contact us within {returnDays} days and we’ll replace it. About its color, our product page notes: {appearance}`,
      },
      { h: 'Another option: ship it to work' },
      {
        p: `If your community’s gate is hard for carriers or packages often go missing, consider shipping to a workplace with a mailroom or a front desk, or to a relative’s address. Our guides on [delivery to an apartment](/guides/eye-drops-delivered-to-an-apartment) and to a [rural address](/guides/eye-drops-delivered-to-a-rural-address) cover similar situations.`,
      },
      { h: 'Shipping costs and refunds' },
      {
        p: `Shipping is {shipping} per order, and {freeBottles} or more bottles ship free. Orders go out from Brentwood, Tennessee, to addresses in the US only. If you change your mind about an unopened bottle, contact us within {returnDays} days of delivery for a refund, and you don’t need to send it back. You can look up an order on our [orders page](/orders).`,
      },
    ],
    faq: [
      {
        q: 'Where do I put my gate code when ordering online?',
        a: `On Quell’s checkout there is no gate-code or delivery-note field. Ask your management office or HOA how carriers get in, and avoid typing a private code into an address line that will be printed on a label.`,
      },
      {
        q: 'Can I ship eye drops to a gated community?',
        a: `Yes. Use the full street address your community uses for mail, add a unit or lot number in the optional second line, and give a phone number you answer. Tracking comes by email.`,
      },
      {
        q: 'What if my package was left at the guard house?',
        a: `Pick it up as soon as you can, especially in very hot or cold weather, since Quell’s label says: {storage}. If it’s not there, check the clubhouse or lockers, then call us.`,
      },
      {
        q: 'Does Quell checkout have a delivery instructions box?',
        a: `No. Checkout asks for a name, street address, an optional apartment or suite line, city, state, ZIP code and a required phone number, which is used for delivery updates.`,
      },
    ],
  },
  {
    slug: 'why-have-my-eyes-been-so-dry-lately',
    title: 'Why have my eyes been so dry lately?',
    description:
      'Eyes drier over the past few weeks than usual? A checklist of what may have changed, from heating season to screen habits, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `When eyes have felt drier over the past few weeks, something in your surroundings or routine has usually changed: the heat came on, evenings got darker and longer on screens, a new desk or job moved you under a vent, or travel and late nights piled up. Working through those changes often explains it. If dryness keeps building, or comes with pain or vision changes, an eye doctor should take a look.`,
      },
      { h: '“Lately” is a clue' },
      {
        p: `Dryness that crept up over weeks is different from dryness that started all at once. A gradual change usually tracks a gradual change in your life: the season, your schedule, your workspace. Our guide to [eyes that feel dry all of a sudden](/guides/why-are-my-eyes-dry-all-of-a-sudden) covers the abrupt kind. This one is about the slow build, and the most useful question is: what’s different from a month or two ago?`,
      },
      { h: 'Did the heat come on?' },
      {
        p: `In much of the country, late October and November are when furnaces, heat pumps and space heaters start running every day. Heating cold outdoor air lowers its relative humidity, and that drier air pulls water from the tear film faster between blinks. If your eyes felt fine in early fall and not now, this is the first thing to check. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room.`,
      },
      { h: 'Have your evenings changed?' },
      {
        p: `Daylight saving time ended on Sunday, November 1, 2026, and evenings have been dark early ever since. For many people that means more hours under lamps and on screens: TV, phones, laptops. Screens slow blinking. Holiday planning, online shopping and end-of-year work add more of the same. Ask yourself how many screen hours you’re putting in after dinner compared with September.`,
      },
      { h: 'A checklist of other recent changes' },
      {
        p: `Go down this list and note anything that changed in the past month or two:`,
      },
      {
        list: [
          `A new desk, office or seat that puts you under or beside a vent.`,
          `A new monitor, a second screen, or more hours on a laptop.`,
          `A new job, new shift or longer hours.`,
          `Travel: flights, hotel rooms, long drives with the heater on.`,
          `Less sleep, or more late nights.`,
          `A ceiling fan, space heater, fireplace or wood stove you started using.`,
          `New makeup, skin care or eye-area products.`,
          `A move to a new home or a drier place.`,
          `Starting or changing contact lenses; ask your eye doctor about that.`,
        ],
      },
      { h: 'Keep a short dryness diary' },
      {
        p: `For a week, jot down when your eyes feel worst and where you were. Patterns jump out quickly: worse every afternoon at the office, worse after evening TV, worse on mornings after the heat ran all night. That record helps you make targeted changes, and it’s exactly what an eye doctor will want to hear about if you book a visit. Our list of [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) can help you prepare.`,
      },
      { h: 'Changes to try first' },
      {
        list: [
          `Run a humidifier in the bedroom and, if you can, at your desk.`,
          `Turn vents, fans and heaters so they don’t blow across your face.`,
          `Take regular screen breaks: look far away and blink slowly and fully.`,
          `Lower screen brightness in the evening and sit a little farther back.`,
          `Wear glasses or sunglasses outside on windy days.`,
          `Keep the bedroom slightly cooler at night.`,
        ],
      },
      { h: 'Where a lubricating eye drop fits' },
      {
        p: `A drop doesn’t change the air, but it can help with dryness while you work on the causes. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. Directions: {directions}. The panel also says: {tip}. Before your first bottle, read the caution: {warnings}. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When “lately” means it’s time for a doctor' },
      {
        p: `Gradual dryness that improves with better air and habits is common. Dryness that keeps building despite those changes, or that comes with other symptoms, is a different matter. The label is clear about when to stop and ask: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists others. An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes always dry lately?',
        a: `Dryness that built up over weeks usually follows a change in your surroundings or routine, such as the heat turning on, darker evenings with more screen time, a new workspace or travel. Look at what changed in the past month or two.`,
      },
      {
        q: 'Can the heat turning on make my eyes dry?',
        a: `Yes. Heating cold outdoor air lowers its relative humidity, and drier air pulls water from the tear film faster between blinks. A humidifier and vents aimed away from your face can help.`,
      },
      {
        q: 'Does the end of daylight saving time make eyes feel drier?',
        a: `Not directly, but darker evenings often mean more hours on screens and under lamps. Screens slow blinking, which lets the tear film evaporate between blinks.`,
      },
      {
        q: 'When should I see a doctor about eyes that have been dry lately?',
        a: `If dryness keeps building despite better air and screen habits, book an eye exam. The label also says: {stopUse}`,
      },
    ],
  },
  {
    slug: 'moving-to-a-dry-climate-with-dry-eyes',
    title: 'Moving to a dry climate with dry eyes',
    description:
      'Moving somewhere drier, sunnier or higher? What changes for your eyes in the first months, how to set up your new home, and what to pack for the trip.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Moving to a dry climate can make your eyes feel drier at first, because lower humidity, more wind and strong sun all speed evaporation from the tear film. Set up a humidifier and vent-free spots in the new home early, wear wraparound sunglasses outside, keep screen habits in check during the move, pack eye drops where the temperature stays in the label’s range, and find a local eye doctor before you need one.`,
      },
      { h: 'What changes for your eyes in a drier place' },
      {
        p: `The tear film has three layers: an oil layer on top, a water layer in the middle and a mucus layer against the eye. Blinking spreads it, and dry, windy or heated air speeds the loss of its water. In a dry climate, that drying force is present more of the time, outdoors and in. Air conditioning in summer and heating in winter take more moisture out of air that didn’t have much to begin with. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains each factor.`,
      },
      { h: 'How to read your new city’s climate' },
      {
        p: `Before you move, look up the official climate normals for your new city. The National Weather Service’s NOWData pages publish NOAA’s 1991–2020 normals for each station: monthly highs and lows, precipitation and, for many stations, snowfall. Compare the precipitation totals and the months with the least rain. Many of our [local guides](/guides/topic/local) quote those numbers for specific cities, and they’re a good start for planning which months to watch.`,
      },
      { h: 'The first weeks: what to expect' },
      {
        p: `Many people notice the change most during the move itself and the first few weeks after. You’re outside more, loading and unloading in sun and wind. You’re sleeping in a new room with unfamiliar vents. You’re on screens late at night setting up utilities and changing addresses. That combination is a lot for your eyes at once, so plan for it:`,
      },
      {
        list: [
          `Unpack a humidifier on the first night, not after everything else is put away.`,
          `Find every vent in the bedroom and office and adjust the louvers before you place furniture.`,
          `Wear sunglasses while carrying boxes in the sun; dust and grit blow around a moving truck.`,
          `Set screen breaks during the address-change marathon.`,
        ],
      },
      { h: 'Setting up your new home' },
      {
        p: `In a dry climate, how you arrange a room matters more. Keep beds, desks and favorite chairs out of the stream from supply vents. If the home has evaporative cooling or a swamp cooler, its air feels different from refrigerated air conditioning; ask the previous owner or landlord how it’s maintained. A hygrometer, an inexpensive gauge of indoor humidity, tells you when a humidifier is worth running. Our page on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers settings.`,
      },
      { h: 'Higher, sunnier, windier: outdoor habits' },
      {
        p: `Dry places are often sunny and sometimes high and windy. Wraparound sunglasses cut glare and block wind together. A brimmed hat helps. Hiking, cycling and golf in a new place may mean more hours in sun and breeze than you’re used to. Start with shorter outings and add time as you learn how your eyes handle the air.`,
      },
      { h: 'Packing eye drops for the move' },
      {
        p: `A moving truck or a car packed for a long drive can get very hot or very cold. Quell’s label gives a storage range: {storage}. Pack your bottle in a bag that rides in the cab with you, not in a box in the back of a truck or a storage pod. If you’re flying, check TSA’s current rules for liquids in carry-on bags before you pack. Keep a spare bottle with you so you aren’t without one while boxes are lost or unpacked.`,
      },
      { h: 'Ordering to your new address' },
      {
        p: `Once you’ve moved, enter the new address at checkout; it’s a guest checkout, so there’s no saved account to update. Shipping is {shipping}, or free for {freeBottles} or more bottles, and we ship to US addresses only. Tracking arrives by email, and no delivery date is promised, so order a week or two before you expect to run out. Our guide to [ordering eye drops after you move](/guides/ordering-eye-drops-after-you-move) covers details like unit numbers and forwarding.`,
      },
      { h: 'Using a lubricating drop in a new climate' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses: {uses}. The directions are: {directions}. The panel adds: {tip}. If you wear contact lenses, the label doesn’t cover using it with them; ask your new eye doctor or a pharmacist. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Find a local eye doctor early' },
      {
        p: `Don’t wait until your eyes bother you to look for an eye doctor in the new city. Transferring records and getting a first appointment can take time. If dryness doesn’t settle after a few weeks of adjusting your home and habits, or you have other symptoms, the label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) helps you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'Will moving to a dry climate make my eyes drier?',
        a: `It may, at least at first. Lower humidity, wind and strong sun all speed evaporation from the tear film, and indoor heating and cooling dry the air further. Setting up your home and habits early helps.`,
      },
      {
        q: 'How do I prepare my eyes for moving to a desert?',
        a: `Pack a humidifier to unpack on day one, plan wraparound sunglasses for outdoor time, adjust vents before placing furniture, and look up the new city’s climate normals on the National Weather Service’s NOWData pages.`,
      },
      {
        q: 'Where should I pack eye drops when moving?',
        a: `In a bag that rides with you, not in a truck or storage pod. Quell’s storage line reads: {storage}. A moving truck can get far hotter or colder than that.`,
      },
      {
        q: 'How long does it take eyes to adjust to a dry climate?',
        a: `It varies from person to person, and there is no set timeline. If dryness hasn’t settled after a few weeks of adjusting your home and habits, see an eye doctor.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-in-the-basement',
    title: 'Why do my eyes feel dry in the basement?',
    description:
      'Basements can feel damp yet leave your eyes dry. Dehumidifiers, heat sources, screens and short sightlines explain why, plus what to change.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eyes often feel dry in a basement even though basements have a damp reputation. A dehumidifier running nonstop, a space heater or furnace nearby, forced-air vents in a finished room, long screen sessions and the lack of windows to look out of all play a part. Check what’s pulling moisture or blowing air, take real screen breaks, and use a lubricating drop as labeled if dryness lingers.`,
      },
      { h: 'Isn’t a basement supposed to be damp?' },
      {
        p: `Unfinished basements can be damp, and that’s exactly why so many of them run a dehumidifier much of the year. Once a dehumidifier does its job, the air may end up drier than the rooms upstairs. In winter, a finished basement with its own heat, especially a space heater or electric baseboard in a small room, dries out quickly. So a basement’s air can swing from muggy to dry depending on the season and the equipment running down there.`,
      },
      { h: 'The equipment usually involved' },
      {
        list: [
          `A dehumidifier set too low or left running in a finished room. Our guide to [whether a dehumidifier can cause dry eyes](/guides/can-a-dehumidifier-cause-dry-eyes) explains settings.`,
          `A space heater warming a small room. See [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater).`,
          `The furnace itself, often in the next room, and supply vents low on the wall or in the ceiling of a finished space.`,
          `A ceiling fan or box fan moving air in a room with no windows to open.`,
          `A dryer vent or laundry area adding heat and lint to the air.`,
        ],
      },
      { h: 'Screens in a room with no view' },
      {
        p: `Basements are where many households put the home office, the gaming setup, the media room or the home gym with a TV. Screens slow blinking, and a basement room adds a second problem: there’s nowhere far to look. Upstairs, a break might mean glancing out a window at the end of the street. Downstairs, the far wall may be 12 feet away. Make breaks count by walking upstairs or outside for a minute, or at least looking down a hallway or across the largest open space you have.`,
      },
      { h: 'Low light and glare' },
      {
        p: `Small window wells and dim overhead lights mean the screen is often the brightest thing in a basement room. That contrast makes many people squint, and squinting goes along with fewer full blinks. Add a lamp behind or beside the screen so the room isn’t dark around it, and lower the screen brightness to match.`,
      },
      { h: 'Dust and storage areas' },
      {
        p: `Basements hold boxes, holiday decorations, tools and laundry. Sorting through old storage stirs up dust, and an unfinished area near a finished one can send it drifting into the room where you sit. Run the furnace filter on schedule, vacuum the finished space regularly, and wear glasses when sorting dusty boxes. If dust or grit gets into an eye and doesn’t clear with blinking, have it checked by an eye doctor or urgent care.`,
      },
      { h: 'What to change first' },
      {
        list: [
          `Check the dehumidifier’s setting and whether it needs to run in a finished room at all in winter.`,
          `Move your chair out of the airflow from vents, fans and heaters.`,
          `Use a hygrometer to see the room’s humidity before deciding on a humidifier.`,
          `Add lighting so the screen isn’t the only bright spot.`,
          `Take breaks outside the basement, not just away from the desk.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `If your eyes still feel dry after changing the room, a lubricating drop can help. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. The directions say: {directions}. Keep the bottle upstairs or in a warm basement room rather than in a cold storage area; its storage line is: {storage}. The panel also says: {tip}. Everything is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it isn’t just the basement' },
      {
        p: `If your eyes feel dry everywhere, not just downstairs, the basement probably isn’t the whole story. Our guide to [eyes that feel dry all the time](/guides/why-do-my-eyes-feel-dry-all-the-time) looks at broader causes. And whenever dryness comes with other symptoms, the label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Can a basement make your eyes dry?',
        a: `It can. A dehumidifier, a space heater, furnace vents in a finished room and long screen sessions with nowhere far to look all dry the tear film, even though basements have a damp reputation.`,
      },
      {
        q: 'Why are my eyes dry in my basement office?',
        a: `Basement offices often combine a small heated room, a dehumidifier or vent nearby, dim light and a screen with no window to look out of. Adjust airflow, add a lamp and take breaks upstairs.`,
      },
      {
        q: 'Should I run a dehumidifier in a finished basement in winter?',
        a: `Check the room’s humidity with a hygrometer before deciding. Heated rooms in winter are often already dry, and a dehumidifier running then can make the air drier than you need.`,
      },
      {
        q: 'Is it okay to store eye drops in the basement?',
        a: `Only in a part that stays within the label’s range: {storage}. Unheated storage areas and spots near the furnace can fall outside it, so a warm, finished room or upstairs is better.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-on-sunny-winter-days',
    title: 'Why do my eyes feel dry on sunny winter days?',
    description:
      'Clear, cold winter days bring low sun, glare and dry air at once. Why your eyes feel it, and how sunglasses, driving habits and indoor fixes help.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Sunny winter days often bring cold, dry air and a sun that sits low in the sky, so light comes in at eye level instead of from above. You squint more, blink less fully, and the cold, often windy air dries the tear film faster. Then you go inside to heated air. Wear sunglasses even in winter, lower car visors, keep vents off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'The low winter sun' },
      {
        p: `In winter, the sun stays lower in the sky from sunrise to sunset across the US, and it rises and sets well to the south of east and west. That puts it closer to eye level for much of the morning and afternoon. A hat brim that shades your eyes in July may not help at all in January. Driving east in the morning or west in the late afternoon means looking almost straight into it.`,
      },
      { h: 'Squinting and half-blinks' },
      {
        p: `Bright light from in front makes most people narrow their eyes. Squinting and partial blinks tend to go together: the lids move, but not all the way, so tears aren’t spread over the whole surface. Over an hour of driving or walking, that adds up to a drier, scratchier feeling. Our explainer on [how blinking spreads tears](/guides/how-blinking-spreads-tears) shows why a full blink matters.`,
      },
      { h: 'Clear skies, cold and wind' },
      {
        p: `Clear winter days often come after a cold front, with dry air and a steady breeze. Cold air holds very little moisture, and wind moves it across the eye. Even if it’s been gray and damp all week, the first bright, cold day can feel noticeably harsher on your eyes. Our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the cold itself, and [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers the breeze.`,
      },
      { h: 'Sunglasses in winter: yes, really' },
      {
        list: [
          `Keep a pair in the car and another in your coat; winter glare doesn’t wait for summer clothes.`,
          `Wraparound frames block light and wind from the sides.`,
          `Choose lenses dark enough that you stop squinting.`,
          `If you wear prescription glasses, ask your eye doctor about prescription sunglasses or clip-ons.`,
        ],
      },
      { h: 'Driving into the sun' },
      {
        p: `Commutes in December and January often happen in the low-sun hours. Lower the visor before you need it, and slide it to the side window when the sun is off to one side. Keep the windshield clean inside and out, since a film of grime scatters low sunlight into glare. Point the heater vents at your hands or the windshield, not your face. Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more.`,
      },
      { h: 'Clear-day outings: walks, rinks and slopes' },
      {
        p: `Bright winter days pull people outdoors after a gray week, and the activities that come with them add their own strain. A brisk walk into the wind, an outdoor rink, a ski hill or a sledding slope all pair cold moving air with light bouncing off ice or snow. Goggles cover more of the eye than sunglasses on the slopes. On a walk, turn your back to the wind when you stop to talk, and on a rink, take breaks off the ice where the air is still.`,
      },
      { h: 'Sunny rooms and window glare indoors' },
      {
        p: `Low sun also reaches deep into south-facing rooms and offices, sometimes right across your screen. Adjust blinds in the afternoon, angle the monitor so the window is to the side rather than behind it, and turn up the screen only as much as you need. A sunny room can also get warm and dry with the heat running, so watch where the vents point.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. Its storage line reads: {storage}. A car parked in the sun on a cold day can still be cold inside, so carry the bottle with you. The panel also says: {tip}. See the full label on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When bright light means something else' },
      {
        p: `Discomfort that’s clearly worse in bright light, eye pain in sunlight, or changes in your vision aren’t things a lubricating drop answers. The label is direct: {stopUse} Light sensitivity that’s new or getting worse should be checked by an eye doctor, who can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why does the winter sun bother my eyes more than summer sun?',
        a: `In winter the sun stays low in the sky, so its light comes in close to eye level instead of from overhead. That makes many people squint and blink less fully, and a hat brim blocks less of it.`,
      },
      {
        q: 'Should I wear sunglasses in the winter?',
        a: `Yes, on bright days. Low winter sun and glare make many people squint, and wraparound sunglasses also block cold wind. Keep a pair in the car and one in your coat.`,
      },
      {
        q: 'Why do my eyes feel dry on cold, clear days?',
        a: `Clear winter days often bring cold, dry air and wind, which speed evaporation from the tear film. Squinting into low sun adds partial blinks, and heated indoor air dries your eyes again when you go inside.`,
      },
    ],
  },
  {
    slug: 'can-i-order-eye-drops-for-my-roommate',
    title: 'Can I order eye drops for my roommate?',
    description:
      'Yes. How to order Quell for a roommate at a shared address, whose name to use, settling up, keeping bottles separate, and who handles a refund.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Yes, you can order Quell for a roommate. Check out as a guest, put their name or yours on the shipping address you share, and pay with your own card; the receipt and tracking go to the email you enter. Settling up is between the two of you. Each person should use their own bottle, and your roommate should read the label’s caution about egg or bird allergies before using it.`,
      },
      { h: 'How to place the order' },
      {
        list: [
          `Add the number of bottles to the cart. If you both want one, ordering together can reach the free-shipping level of {freeBottles} bottles.`,
          `Enter your own email address. That’s where the receipt and tracking link go.`,
          `In the Ship to section, enter the name of whoever will be home to receive it, and your shared address, with the apartment or unit number in the second line.`,
          `Enter a phone number you’ll answer for delivery updates.`,
          `Pay on our payment provider’s secure page with your card and its billing address.`,
        ],
      },
      { h: 'Whose name should go on the package?' },
      {
        p: `Either works, as long as the name matches someone who lives there. If your building’s package room or front desk checks names against a resident list, use the name that’s on the lease. The order confirmation email greets the person named in the shipping address, so if you put your roommate’s name there, the email you receive will say their name. That’s expected. Our guide to [shipping to a different address than billing](/guides/can-i-ship-to-a-different-address-than-billing) covers how the two sets of details are kept apart.`,
      },
      { h: 'Settling up between roommates' },
      {
        p: `Each order is paid on one card, so if you’re covering your roommate’s bottle, you’ll sort out repayment between yourselves however you usually split shared costs. We don’t offer promo codes or a subscription, so the price you see in the cart is the same whoever orders. Keep the confirmation email so you both have the total.`,
      },
      { h: 'Paying with HSA or FSA money' },
      {
        p: `Health accounts have their own rules about whose expenses they can cover, and a roommate is a different situation from a spouse or dependent. Read our guide on [whether family members can use your HSA card](/guides/can-family-members-use-your-hsa-card) and check with your plan administrator before using your account for someone else’s bottle.`,
      },
      { h: 'One bottle each, kept apart' },
      {
        p: `Eye drops shouldn’t be shared, even between people who share everything else. The label says: {tip}, and a bottle that touches one person’s eye or lashes isn’t clean for another’s. Our guide to [sharing eye drops](/guides/can-you-share-eye-drops) explains more. A few household habits help:`,
      },
      {
        list: [
          `Write each person’s initials on their bottle and its box with a marker.`,
          `Keep bottles in your own rooms, not side by side on a shared bathroom shelf.`,
          `Store them away from a steamy shower or a sunny window; the label’s storage line reads: {storage}.`,
          `Don’t borrow a roommate’s bottle when yours runs out; reorder a little early instead.`,
        ],
      },
      { h: 'What your roommate should read first' },
      {
        p: `Even if you picked it out, the person using it should read the Drug Facts panel themselves. The label’s caution reads: {warnings}. The Uses are: {uses}. The directions: {directions}. If they wear contact lenses, the label doesn’t cover that use, so they should ask their eye doctor or a pharmacist. They’ll also want to know this about the look of the drop: {milky}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Refunds and problems with the order' },
      {
        p: `The person who placed the order handles any refund, since it goes back to the card that paid. An unopened bottle can be refunded within {returnDays} days of delivery, and it doesn’t need to be sent back. If the package arrives damaged, incorrect or with a broken tamper seal, contact us within the same {returnDays} days for a replacement. Call {phone} ({hours}) with the order number, or look it up on our [orders page](/orders).`,
      },
      { h: 'Reorders and reminder emails' },
      {
        p: `Because the order is under your email, the single reorder reminder email we send will come to you, not your roommate. If they’ll be buying their own from now on, they can place the next order with their own email and card. Shipping is {shipping} per order, or free at {freeBottles} or more bottles, so ordering together again is one way to share the shipping. No delivery date is promised.`,
      },
    ],
    faq: [
      {
        q: 'Can I buy eye drops for someone I live with?',
        a: `Yes. Check out as a guest, ship to your shared address with either name, and pay with your own card. The receipt and tracking go to the email address you enter.`,
      },
      {
        q: 'Whose name should I put on a package for my roommate?',
        a: `Use the name of whoever will receive it, as long as that person lives there. If your building checks packages against a lease, use the name on the lease.`,
      },
      {
        q: 'Can roommates order eye drops together to get free shipping?',
        a: `Yes, one order can include bottles for both of you. Orders of {freeBottles} or more bottles ship free, but each person should still use only their own bottle.`,
      },
      {
        q: 'Who gets the refund if I return my roommate’s eye drops?',
        a: `The refund goes back to the card that paid for the order, so the person who placed it calls us. Unopened bottles qualify within {returnDays} days of delivery, without sending them back.`,
      },
    ],
  },
  {
    slug: 'name-on-card-does-not-match-shipping-name',
    title: 'Name on the card doesn’t match the shipping name?',
    description:
      'Paying with a card in one name and shipping to another is normal on Quell. How checkout separates the two, what to enter where, and who to call.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `That’s fine. On Quell’s checkout, the shipping name is simply who the package is addressed to, and it doesn’t have to match the card. The card’s billing address is entered separately on our payment provider’s secure page, and that’s the part that should match what your card issuer has on file. Gifts, nicknames, married names and spouses’ cards all work this way.`,
      },
      { h: 'How checkout keeps the two apart' },
      {
        p: `Checkout happens in two steps. On our site, you enter an email address and a Ship to section: first name, last name, street address, an optional apartment or suite line, city, state, ZIP code and a phone number. Then you continue to payment, where the card number and the card’s billing address are entered on our payment provider’s secure page. The shipping details tell us where to send the bottles. The billing details belong to the card.`,
      },
      { h: 'Common reasons the names differ' },
      {
        list: [
          `You’re sending a gift and putting the recipient’s name on the package.`,
          `You go by a nickname or middle name, and the card shows your legal name.`,
          `You recently married or changed your name, and the card hasn’t caught up.`,
          `You’re using a card in a spouse’s or partner’s name, with their permission.`,
          `It’s a company card issued in the business’s name.`,
          `Someone at home will sign for it or pick it up from a front desk.`,
        ],
      },
      {
        p: `None of these needs any special step on our side. Enter the shipping name that will get the package to the right door.`,
      },
      { h: 'What to enter on the payment page' },
      {
        p: `On the secure payment page, enter the billing address exactly as your card issuer has it, which is usually where the card’s statements go. If you recently moved, that may still be your old address. A billing address that doesn’t match the issuer’s records can be a reason a card is turned down, and only your bank can tell you what it has on file. Our guide on [why the payment page uses a secure page](/guides/why-checkout-uses-a-secure-payment-page) explains why billing details are entered there.`,
      },
      { h: 'Why your confirmation email uses a different name' },
      {
        p: `The order confirmation greets the person named in the shipping address, because that’s the name stored with the order. If you ship to your partner, the email that arrives in your inbox will say their name. The receipt and tracking still go to the email address you entered at the start of checkout. For gifts in particular, our guide to [shipping to a different address than billing](/guides/can-i-ship-to-a-different-address-than-billing) covers it step by step.`,
      },
      { h: 'A shared computer may fill in someone else’s name' },
      {
        p: `If you order from a family or shared computer, checkout may already show the last person’s name and address, because a guest checkout can remember details on that device. When the form has been filled in for you, a link reading “Not you? Clear details” appears beside the Contact heading. Use it, or simply type over the name, so the package and the confirmation go where you intend.`,
      },
      { h: 'Company, prepaid and shared cards' },
      {
        p: `Business cards often carry the company name and a different billing address from your home. Use the billing address your company’s card program lists; your finance or accounts payable team can tell you. Prepaid cards may need a registered address before they’ll work online, which our guide to [buying eye drops with a prepaid card](/guides/can-you-buy-eye-drops-with-a-prepaid-card) explains. For a card in someone else’s name, make sure they’ve agreed to the purchase.`,
      },
      { h: 'Making sure the package still arrives' },
      {
        p: `The shipping name matters more for delivery than for payment. A few checks:`,
      },
      {
        list: [
          `Use the name the building, front desk or mailroom knows, especially in apartments and dorms.`,
          `Put unit or suite numbers in the optional second line.`,
          `Enter a phone number that the recipient or you will answer for delivery updates.`,
          `Watch for the tracking link at your email; no delivery date is promised.`,
        ],
      },
      { h: 'If your payment was declined' },
      {
        p: `If the payment page turns your card down, recheck the billing address, ZIP code, expiration date and security code first. If those are right, your card issuer is the one to call; they can see why a charge was declined. You can then place the order again, or call us at {phone} ({hours}). Never send card numbers by email.`,
      },
      { h: 'Refunds go back to the card' },
      {
        p: `Whatever name is on the package, a refund goes to the card that paid. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back, and orders that arrive damaged, incorrect or with a broken seal are replaced. Our [Terms](/terms) have the full policy, and you can look up any order on our [orders page](/orders).`,
      },
    ],
    faq: [
      {
        q: 'Does the shipping name have to match the credit card name?',
        a: `No. On Quell’s checkout the shipping name is who the package is addressed to. The card’s billing address is entered separately on the payment provider’s secure page and should match your card issuer’s records.`,
      },
      {
        q: 'Can I use my spouse’s card to order eye drops in my name?',
        a: `Yes, with their permission. Put your name in the shipping section and enter the card’s billing address exactly as the issuer has it on the payment page.`,
      },
      {
        q: 'Why was my card declined when the names didn’t match?',
        a: `A different shipping name isn’t the usual cause. Check the billing address, ZIP code, expiration date and security code against your card issuer’s records, then call the issuer if it still fails.`,
      },
      {
        q: 'Whose name appears on the Quell order confirmation?',
        a: `The confirmation greets the person named in the shipping address, since that’s the name stored with the order. It is still sent to the email address entered at checkout.`,
      },
    ],
  },
]
