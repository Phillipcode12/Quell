import type { Guide } from '@/lib/guide-types'
export const DAILY_20261121_A: Guide[] = [
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-battle-creek-mi:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid BTL; saved at .daily-job/acis1121/BTL.json and .daily-job/a/1121/BTL-extra.json)
   *   (BATTLE CREEK KELLOGG AP, elev 927 ft: Jan max 31.3 F, min 17.3 F; Feb max
   *   34.1, min 18.7; Mar max 45.4, min 27.1; Apr max 58.6, min 37.3; Jul max 83.0,
   *   min 62.0; Oct max 61.2, min 42.0; Nov max 47.3, min 32.2; Dec max 36.3, min
   *   23.6; precip May 3.72 in (wettest), Oct 3.55, Feb 1.21 (driest), Dec 1.43,
   *   Jan 1.58; twelve monthly precip normals sum to 31.52 in; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Battle Creek row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-battle-creek-mi',
    title: 'Dry eye relief in Battle Creek, Michigan',
    description:
      'Battle Creek’s January highs average about 31°F, and February is its driest month in NOAA’s normals. What that air does to your eyes, and how to ease it.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Battle Creek is mostly a winter project. NOAA’s normals for the city’s Kellogg airport put January highs near 31°F and make December through February the three lightest months for precipitation, so cold outdoor air meets furnace heat for months. Keep vents and wind off your face, blink fully at screens, use a lubricating drop exactly as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Battle Creek’s weather, by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Battle Creek Kellogg Airport, a station at about 927 feet on the west side of the city, as published through the National Weather Service’s NOWData, sketch a year with a long cold season and a mild, wetter summer:`,
      },
      {
        list: [
          `January is the coldest month, with an average high of 31.3°F and an average low of 17.3°F. It’s the only month whose normal high sits below freezing.`,
          `December (36.3°F high, 23.6°F low) and February (34.1°F high, 18.7°F low) are close behind.`,
          `July is the warmest month, at 83.0°F in the afternoon and 62.0°F at night.`,
          `May is the wettest month at 3.72 inches, with October next at 3.55. February is the driest at 1.21 inches.`,
          `The twelve monthly precipitation normals add up to about 31.5 inches.`,
        ],
      },
      {
        p: `The station’s snowfall normals came back missing in NOAA’s data service, so this page leaves snow totals out rather than guess.`,
      },
      { h: 'Why the driest months on the gauge are the cold ones' },
      {
        p: `A light precipitation total in winter isn’t a coincidence. Air near 18°F, the normal February low, can hold very little water vapor, so there’s less moisture around to fall and less moisture in what you breathe. When that same air is pulled into a house and warmed to 68°F by a furnace, nothing adds water to it, and its relative humidity drops sharply. That’s why a Battle Creek kitchen in February can feel parched even on a gray, damp-looking day.`,
      },
      {
        p: `Your tear film has three layers: mucus against the eye, water in the middle, and a thin oil layer on top that slows evaporation. Warm, dry indoor air pulls on the water layer between blinks. The result many people describe is a gritty or burning feeling by evening, or eyes that water as a reflex and still feel dry.`,
      },
      { h: 'Frosty mornings: the windshield and the bus stop' },
      {
        p: `With normal lows below freezing from December through March, a lot of Battle Creek mornings start with scraping glass. Then the car heater goes to full blast, often pointed straight at the driver. A few changes help on the commute:`,
      },
      {
        list: [
          `Aim the dash vents at your chest or the windshield, not your face, once the glass is clear.`,
          `Use recirculate only briefly; fresh air with the heat turned down a notch dries the cabin less.`,
          `At a bus stop or on a walk to the plant entrance, glasses or wraparound sunglasses block cold wind from hitting the eye directly.`,
          `Blink deliberately a few times once you’re inside, before you start reading a screen.`,
        ],
      },
      {
        p: `Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) covers defrost settings and long drives in more detail.`,
      },
      { h: 'Shift work and long hours under building heat' },
      {
        p: `Plenty of people in Calhoun County work shifts in large buildings, offices, warehouses and plants, where heat runs from October to April and the air is moved hard by fans and blowers. Night and rotating shifts stack on another factor: tired eyes tend to blink less completely. If your station sits under a ceiling heater or beside a door that opens to the cold, ask whether it can be angled away, and keep a bottle of drops in a locker rather than a vehicle that drops into the teens.`,
      },
      { h: 'Spring and fall swings in the house' },
      {
        p: `April’s normal high is 58.6°F with a low of 37.3°F, and October runs 61.2°F by day and 42.0°F at night. Those are the months when the furnace cycles on in the morning, the windows open by afternoon, and the air inside changes several times a day. Some people notice their eyes most in these in-between weeks, because the house never settles. A small room humidifier set near where you sit in the evening, and a thermostat a degree or two lower at night, are simple places to start. Clean a humidifier the way its maker says to.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. One line covers handling: {tip}.`,
      },
      {
        p: `The panel also gives this caution: {warnings}. And for storage: {storage}. A car parked outside a Battle Creek workplace in January can sit well below the low end of that range, so carry the bottle in an inside pocket or bring it indoors. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Battle Creek' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Battle Creek, Springfield, Marshall and any other US address. You check out as a guest, shipping is {shipping}, and an order of {freeBottles} or more bottles ships free. Tracking comes by email, though we don’t promise a delivery date, so order before you run low. If you change your mind, unopened bottles are refunded within {returnDays} days of delivery and you don’t mail them back. Local details are on the [Battle Creek page](/eye-drops/battle-creek-mi) and the [Michigan page](/eye-drops/state/michigan).`,
      },
      { h: 'When dryness is a reason to see an eye doctor' },
      {
        p: `Furnace season explains a lot, but not everything. The label puts it this way: {stopUse} Dryness that keeps coming back once the heat goes off in spring, light sensitivity, or a feeling that something is stuck in the eye also deserve a visit. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge how soon.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Battle Creek get in January?',
        a: 'NOAA’s 1991–2020 normals for Battle Creek Kellogg Airport put January’s average high at 31.3°F and its average low at 17.3°F. January is the only month whose normal high is below freezing.',
      },
      {
        q: 'What is the driest month in Battle Creek, Michigan?',
        a: 'February, at 1.21 inches of precipitation in NOAA’s normals for the Kellogg airport. December and January are also among the lightest months, while May is the wettest at 3.72 inches.',
      },
      {
        q: 'Why do my eyes feel drier in the house in a Michigan winter?',
        a: 'Cold outdoor air holds little moisture, and when a furnace warms it without adding water, its relative humidity falls. That dry indoor air speeds evaporation from the tear film between blinks.',
      },
      {
        q: 'Can I order Quell to Battle Creek, MI?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Battle Creek. Shipping is {shipping}, or free on {freeBottles} or more bottles, and tracking arrives by email.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-altoona-pa:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid AOO; saved at .daily-job/acis1121/AOO.json and .daily-job/a/1121/AOO-extra.json)
   *   (ALTOONA BLAIR COUNTY AP, elev 1465 ft: Jan max 35.5 F, min 21.3 F; Feb max
   *   38.6, min 22.7; Mar max 47.7, min 29.8; Jul max 82.9, min 61.8; Aug max 81.1,
   *   min 60.0; Nov max 50.5, min 34.1; Dec max 39.9, min 26.2; precip Sep 3.96 in
   *   (wettest), May 3.72, Feb 1.95 (driest), Jan 2.23; twelve monthly precip
   *   normals sum to 36.65 in; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Altoona row: no humidity or wind figure.
   * - The airport is in Blair County outside the city; named as NOAA names it.
   */
  {
    slug: 'dry-eye-relief-altoona-pa',
    title: 'Dry eye relief in Altoona, Pennsylvania',
    description:
      'NOAA’s normals for Blair County’s airport, at about 1,465 feet, show four months of freezing nights. Here’s how Altoona’s seasons dry your eyes and what helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `In Altoona, dry eyes usually follow the heating season. NOAA’s normals for the Blair County airport, about 1,465 feet up, show average lows below freezing from December through March, so furnaces, boilers and wood stoves run for a third of the year. Keep heat and wind off your face, take screen breaks, use a lubricating drop as its label directs, and see an eye doctor for pain, vision changes or dryness that won’t quit.`,
      },
      { h: 'What NOAA’s records say about Altoona' },
      {
        p: `The weather station closest to the city sits at Altoona Blair County Airport, outside Altoona itself. NOAA’s 1991–2020 climate normals for that station, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `January highs averaging 35.5°F and lows of 21.3°F.`,
          `Average lows below freezing in four months: December (26.2°F), January, February (22.7°F) and March (29.8°F).`,
          `A mild summer, with July highs of 82.9°F and nights near 61.8°F.`,
          `September as the wettest month, at 3.96 inches, and February as the driest, at 1.95 inches.`,
          `About 36.7 inches of precipitation across the twelve monthly normals.`,
        ],
      },
      {
        p: `Snowfall normals for the station came back missing, so they aren’t quoted here.`,
      },
      { h: 'Four months of freezing nights' },
      {
        p: `A November low of 34.1°F is the warning shot. By December the average night is well below freezing, and it stays there until April. Every one of those nights, a house in Altoona is warming outside air that holds very little water. Whether the heat comes from a forced-air furnace, baseboard units, radiators or a stove in the living room, the effect on your eyes is similar: the warmer and drier the room, the faster the water layer of the tear film thins between blinks.`,
      },
      {
        p: `Some signs that the house is part of the problem: your eyes feel better at work or outdoors and worse after an evening on the couch; you wake with eyes that feel sticky or scratchy; the feeling eases in late spring when the heat shuts off.`,
      },
      { h: 'Wood stoves, space heaters and older houses' },
      {
        p: `Radiant heat sources dry the air close to them and throw warmth straight at your face. If you sit near a wood stove, pellet stove or space heater, a few feet of distance and a different angle make a real difference:`,
      },
      {
        list: [
          `Turn your chair so the heat reaches your side or back, not your eyes.`,
          `Keep a humidifier in the room you spend evenings in, and clean it as its maker directs.`,
          `Close the stove door when you aren’t tending it, so ash and smoke stay inside.`,
          `Lower the thermostat a little at night. A cooler bedroom is easier on the tear film than a hot, dry one.`,
        ],
      },
      {
        p: `Our page on [dry eyes from a wood stove](/guides/dry-eyes-from-a-wood-stove) goes further on smoke and radiant heat.`,
      },
      { h: 'Winter driving with the defrost on' },
      {
        p: `Hills mean grades, and grades in January mean you watch the road closely, sometimes in low sun or blowing snow, with the defroster roaring. Concentration cuts blinking, and the defrost setting sends a stream of warm, dry air up the windshield and into your eyes. Once the glass clears, split the airflow toward the floor, and give yourself a few long blinks at each stop. Sunglasses help on bright days after fresh snow, when glare makes many people squint.`,
      },
      { h: 'September rain and short, cool summers' },
      {
        p: `Altoona’s wettest month in the normals is September, and summer nights average around 60°F. For many people that makes June through September the easiest stretch of the year for their eyes. The exceptions tend to be indoor ones: a desk under an air-conditioning vent, a car with the air on high, or long hours of reading and screens. Air conditioning removes moisture from the air as it cools, so the same vent rules apply in July as in January.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. It also carries a handling note: {tip}.`,
      },
      {
        p: `Read the caution line before you start: {warnings}. The storage line reads: {storage}. A glove box on a January night in Blair County is colder than that, so keep the bottle in your bag or coat. Everything on the carton is reproduced on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Altoona' },
      {
        p: `We ship from Brentwood, Tennessee, to Altoona, Hollidaysburg, Duncansville and every other US address. Checkout works as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Your tracking link arrives by email, but there’s no promised delivery date, so reorder with some room to spare. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Altoona page](/eye-drops/altoona-pa) and the [Pennsylvania page](/eye-drops/state/pennsylvania) for more.`,
      },
      { h: 'Signs it’s time for an eye exam' },
      {
        p: `A dry house explains a lot of winter discomfort, but some symptoms aren’t about the air. The label’s stop-use guidance: {stopUse} Sudden changes, one eye much worse than the other, discharge or sensitivity to light are worth a call to an eye doctor, who can find the cause and decide what to do. Our [self-check](/self-check) can help you organize what you’ve noticed, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Altoona, PA get in winter?',
        a: 'NOAA’s 1991–2020 normals for Altoona Blair County Airport give January an average high of 35.5°F and an average low of 21.3°F. Average lows stay below freezing from December through March.',
      },
      {
        q: 'What is the wettest month in Altoona?',
        a: 'September, at 3.96 inches of precipitation in NOAA’s normals for the Blair County airport. February is the driest month at 1.95 inches.',
      },
      {
        q: 'Can a wood stove make my eyes dry?',
        a: 'It can add to it. A stove dries the air close by and sends radiant heat toward your face, which speeds evaporation from the tear film. Sitting farther away, angling your chair and running a humidifier in the room can help.',
      },
      {
        q: 'Does Quell ship to Altoona, Pennsylvania?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Altoona and every other US address. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and tracking comes by email.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-anniston-al:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid ANB; saved at .daily-job/acis1121/ANB.json and .daily-job/a/1121/ANB-extra.json)
   *   (ANNISTON METROPOLITAN AP, elev 597 ft: Jan max 54.7 F, min 34.0 F; Jun max
   *   87.6, min 67.2; Jul max 90.2, min 70.6; Aug max 89.8, min 70.0; Sep max 85.2,
   *   min 64.0; Oct max 75.6, min 52.2; Dec max 57.0, min 36.6; precip Mar 5.37 in
   *   (wettest), Feb 5.08, Jan 4.84, Sep 3.11 (driest), Oct 3.25, Aug 3.51; twelve
   *   monthly precip normals sum to 52.12 in; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Anniston row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-anniston-al',
    title: 'Dry eye relief in Anniston, Alabama',
    description:
      'Anniston averages over 52 inches of rain a year, yet September and October are its driest months. How heat, AC and dry fall days affect your eyes.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Anniston gets plenty of rain, about 52 inches a year in NOAA’s normals, so dry eyes there usually come from air conditioning in summer and from the drier days of September and October. Keep vents off your face, wear sunglasses outdoors, blink fully during screen work, use a lubricating drop exactly as its label directs, and see an eye doctor for pain, vision changes or dryness that keeps returning.`,
      },
      { h: 'Anniston’s climate in NOAA’s records' },
      {
        p: `NOAA’s 1991–2020 climate normals for Anniston Metropolitan Airport, a station at about 597 feet, as published through the National Weather Service’s NOWData, describe a long, hot summer and short, mild winters:`,
      },
      {
        list: [
          `July averages a high of 90.2°F and a low of 70.6°F; August is nearly identical at 89.8°F and 70.0°F.`,
          `June (87.6°F) and September (85.2°F) are hot too, so the air conditioning season runs about four months at full strength.`,
          `January highs average 54.7°F, with lows of 34.0°F, just above freezing.`,
          `March is the wettest month at 5.37 inches. September is the driest at 3.11, followed by October at 3.25.`,
          `The twelve monthly normals add up to about 52.1 inches of precipitation.`,
        ],
      },
      { h: 'Four months of air conditioning' },
      {
        p: `When July nights stay near 71°F, the AC rarely gets a break. Cooling air also pulls water out of it, which is why a window unit drips outside and a central system has a drain line. The room ends up cooler and drier, and a vent pointed at your desk, couch or pillow pushes that dry air across your eyes for hours. Many people in hot, humid places are surprised that their eyes feel driest indoors in midsummer. The air outside is muggy; the air inside is not.`,
      },
      {
        list: [
          `Close or redirect any vent that blows on your face, especially over a bed.`,
          `In the car, angle the dash vents toward your chest and use a lower fan speed once the cabin cools.`,
          `Run a ceiling fan at a gentler setting if you sleep under it.`,
          `Step outside now and then on long workdays; a few minutes away from the vent and the screen gives your eyes a rest.`,
        ],
      },
      { h: 'September and October: the dry stretch' },
      {
        p: `Early fall is the driest time of year on Anniston’s rain gauge, and it’s also the time people spend most hours outdoors. Football games, yard work, hunting season prep and long weekend drives all fall in these weeks, with afternoons still in the 80s in September and the mid 70s in October. Glare, dust from dry ground and gravel roads, and wind from leaf blowers and mowers all reach the eye more easily when the ground is dry.`,
      },
      {
        p: `Wraparound sunglasses do two jobs at once, cutting glare and blocking moving air. If you’re mowing or blowing leaves, wear the eye protection the equipment’s manual calls for. For a long afternoon in the stands, a cap brim and sunglasses beat squinting into the sun for three hours.`,
      },
      { h: 'Short winters and heat pumps' },
      {
        p: `With January lows averaging 34.0°F and December at 36.6°F, Anniston winters are mild by national standards, but the heat still runs. Heat pumps and gas furnaces both warm air without adding water to it. The effect is smaller than in a northern winter, yet people who spend evenings next to a floor register or a space heater often notice it. Moving your chair or turning a register’s louvers away from where you sit costs nothing.`,
      },
      { h: 'Screens at home and at work' },
      {
        p: `Whatever the season, close work is a factor. Blinking slows when you concentrate on a phone, a laptop or a spreadsheet, and the tear film has more time to thin between blinks. Put the screen a little below eye level so your lids cover more of the eye, and look across the room every so often. Our guide to [eye drops for computer users](/guides/eye-drops-for-computer-users) has more on desk setup.`,
      },
      { h: 'Using Quell as the label directs' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, the Uses are: {uses}. The directions say: {directions}. Keep the tip clean, as the panel says: {tip}.`,
      },
      {
        p: `There’s a caution line too: {warnings}. The storage line is {storage}, which matters in an Alabama summer: a closed car in a sunny lot in July gets far hotter than that, so carry the bottle with you. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Anniston' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Anniston, Oxford, Jacksonville and any other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but we don’t promise a delivery date, so order ahead. Unopened bottles are refunded within {returnDays} days of delivery and don’t need to be returned. The [Anniston page](/eye-drops/anniston-al) and the [Alabama page](/eye-drops/state/alabama) have more local detail.`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `A drop is for everyday dryness, not for warning signs. The label’s stop-use list: {stopUse} Also book a visit for anything that came on suddenly, an injury, something in the eye that won’t rinse out, or dryness that persists even when you’ve changed your vents and habits. An eye doctor can find the cause and decide what to do; see our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How hot does Anniston, Alabama get in summer?',
        a: 'NOAA’s 1991–2020 normals for Anniston Metropolitan Airport put July’s average high at 90.2°F and August’s at 89.8°F, with nights near 70°F in both months.',
      },
      {
        q: 'What is the driest month in Anniston?',
        a: 'September, at 3.11 inches of precipitation in NOAA’s normals, with October close behind at 3.25 inches. March is the wettest month at 5.37 inches.',
      },
      {
        q: 'Why are my eyes dry indoors in an Alabama summer?',
        a: 'Air conditioning removes moisture as it cools, so indoor air ends up drier than the muggy air outside. A vent blowing on your face moves that dry air across your eyes and speeds evaporation from the tear film.',
      },
      {
        q: 'Can I get Quell delivered in Anniston, AL?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Anniston, Oxford and Jacksonville. Shipping is {shipping}, or free on {freeBottles} or more bottles.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-carlsbad-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid CRQ; saved at .daily-job/acis1121/CRQ.json and .daily-job/a/1121/CRQ-extra.json)
   *   (CARLSBAD MCCLELLAN PALOMAR AP, elev 313 ft: Jan max 65.0 F, min 47.8 F; Feb
   *   max 64.0 (coolest), min 48.5; Aug max 75.8 (warmest), min 65.3; Sep max 75.7;
   *   Dec max 64.6, min 47.3; precip Feb 2.64 in (wettest), Jan 2.49, Dec 1.72,
   *   Mar 1.61, Apr 0.88, May 0.28, Jun 0.06, Jul 0.08, Aug 0.03 (driest), Sep 0.11,
   *   Oct 0.50, Nov 0.99; twelve monthly precip normals sum to 11.39 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Carlsbad row: no humidity or wind figure
   *   (the San Diego row is a different station and is not used).
   * - Neighbor guide dry-eye-relief-san-diego-ca uses the marine layer, Santa Ana
   *   winds and bases; this one is built on the rain calendar and the narrow
   *   temperature range instead.
   */
  {
    slug: 'dry-eye-relief-carlsbad-ca',
    title: 'Dry eye relief in Carlsbad, California',
    description:
      'Carlsbad’s airport averages under an inch of rain in every month from April to November. What a long dry season means for your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Carlsbad’s mild weather hides a long dry season. NOAA’s normals for McClellan-Palomar Airport show less than an inch of rain in every month from April through November, and only hundredths of an inch in midsummer. Sun, glare and breezes then do most of the drying. Wear sunglasses outdoors, keep car and office vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Carlsbad’s weather in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Carlsbad McClellan-Palomar Airport, about 313 feet above sea level, as published through the National Weather Service’s NOWData, show one of the narrowest temperature ranges you’ll find anywhere:`,
      },
      {
        list: [
          `The coolest month by average high is February, at 64.0°F. The warmest is August, at 75.8°F, with September right behind at 75.7°F.`,
          `Average lows run from 47.3°F in December to 65.3°F in August.`,
          `February is the wettest month at 2.64 inches, followed by January at 2.49.`,
          `August averages just 0.03 inches, June 0.06 and July 0.08.`,
          `All twelve monthly normals together come to about 11.4 inches.`,
        ],
      },
      {
        p: `In other words, about two thirds of the year’s rain falls from December through February, and the rest of the calendar is close to bone dry on the gauge.`,
      },
      { h: 'Eight months under an inch of rain' },
      {
        p: `From April (0.88 inches) to November (0.99), no month in the normals reaches an inch. Through those months, landscaping depends on irrigation, hillsides turn tan, and dust from dry soil, construction and roads stays in the air longer. A dusty breeze is one of the more common reasons eyes feel scratchy, and it’s the reason a quick rinse of the face and a pair of wraparound sunglasses do more than people expect.`,
      },
      {
        p: `Rainfall isn’t humidity, and coastal air can feel damp even in a dry month. What matters for the eye is what happens at its surface: sun, moving air and long stretches without blinking all speed evaporation from the tear film, whatever the humidity reads.`,
      },
      { h: 'A dozen degrees of difference: life with the windows open' },
      {
        p: `With only about 12 degrees separating the coolest month’s average high from the warmest month’s, many Carlsbad households run neither heat nor air conditioning for long stretches. Windows stay open, and so do patio doors. That’s pleasant, and it also means the air in the house is the air outside, breezes and dust included. A few habits help:`,
      },
      {
        list: [
          `Don’t set your desk or bed directly in the path of a window breeze or a fan.`,
          `On a windy afternoon, close the windows on the side the wind is coming from.`,
          `Wipe down window sills and screens now and then; that fine dust is what blows in.`,
          `In the car, keep the fan pointed at your chest even on mild days when you run it for fresh air.`,
        ],
      },
      { h: 'Sun and glare on the coast' },
      {
        p: `Bright light off the ocean, wet sand and white concrete makes people squint, and squinting tends to come with incomplete blinks. Walking the coast in the late afternoon, when the sun is low over the water, is when glare is strongest. Polarized sunglasses cut reflected light, and a hat brim keeps overhead sun off your eyes. If you surf or swim, rinse salt water off your face with fresh water afterward, and don’t rub your eyes with sandy hands.`,
      },
      { h: 'Screens, commutes and the office' },
      {
        p: `Plenty of Carlsbad workdays are spent at a desk or behind a wheel. Office buildings with sealed windows run their air systems year-round, and a long drive with the vent on high dries the eye the same way a heater would. Screen work slows blinking, so set a reminder to look away every so often, and finish each blink. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'Quell and its Drug Facts panel' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. Here are the directions as printed: {directions}. And a hygiene line: {tip}.`,
      },
      {
        p: `The caution on the panel reads: {warnings}. For storage it says: {storage}. Carlsbad rarely strays outside that range outdoors, but a dashboard in the August sun can, so keep the bottle in a bag or pocket. The complete text is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Carlsbad' },
      {
        p: `We ship from Brentwood, Tennessee, to Carlsbad, Oceanside, Vista, Encinitas and any other US address. You can check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll receive tracking by email, though we don’t promise a delivery date. Unopened bottles are refundable within {returnDays} days of delivery, with nothing to send back. More on the [Carlsbad page](/eye-drops/carlsbad-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to book an eye doctor' },
      {
        p: `Sun and dry months are ordinary reasons for dry eyes. Some symptoms aren’t ordinary, and the label lists them: {stopUse} Sand or grit that won’t rinse out, a scratch from a branch or board, sudden blurry vision or a lot of light sensitivity also call for an eye doctor, who can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Carlsbad, California get?',
        a: 'About 11.4 inches a year, adding up NOAA’s 1991–2020 monthly normals for McClellan-Palomar Airport. February is the wettest month at 2.64 inches, and August the driest at 0.03 inches.',
      },
      {
        q: 'What is the warmest month in Carlsbad?',
        a: 'August, with an average high of 75.8°F in NOAA’s normals for McClellan-Palomar Airport. September is nearly the same at 75.7°F, and February is the coolest at 64.0°F.',
      },
      {
        q: 'Why does coastal sun make my eyes feel dry?',
        a: 'Sun, glare and steady breezes all speed evaporation from the tear film, and squinting into bright light tends to shorten blinks. Polarized wraparound sunglasses and a hat brim help, and rinsing salt water off your face afterward keeps it out of your eyes.',
      },
      {
        q: 'Does Quell ship to Carlsbad, CA?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Carlsbad and every other US address. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and tracking arrives by email.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-greenville-ms:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid GLH; saved at .daily-job/acis1121/GLH.json and .daily-job/a/1121/GLH-extra.json)
   *   (GREENVILLE ASOS, elev 124 ft: Jan max 53.0 F, min 35.1 F; Jun max 89.4, min
   *   69.3; Jul max 92.5 (warmest), min 72.4; Aug max 92.3, min 70.9; Sep max 88.0,
   *   min 64.0; Oct max 77.2; Dec max 55.2, min 37.1; precip Dec 5.10 in (wettest),
   *   Apr 5.01, Aug 2.83 (driest), Jul 3.18, Jun 3.32; twelve monthly precip normals
   *   sum to 49.00 in; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Greenville MS row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-greenville-ms',
    title: 'Dry eye relief in Greenville, Mississippi',
    description:
      'Greenville’s July and August highs top 92°F, and August is its driest month in NOAA’s normals. How Delta heat, dust and AC dry your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `For dry eyes in Greenville, the hard months are July and August. NOAA’s normals for the Greenville airport station put both months’ highs above 92°F, and August is the driest month of the year, so field dust, bright sun and air conditioning all arrive together. Wear sunglasses or safety glasses outdoors, keep cab and house vents off your face, use a lubricating drop exactly as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Greenville weather from the airport station' },
      {
        p: `NOAA lists the station as Greenville ASOS, at about 124 feet. Its 1991–2020 climate normals, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `July as the hottest month, averaging 92.5°F by day and 72.4°F at night. August is almost the same, at 92.3°F and 70.9°F.`,
          `June (89.4°F) and September (88.0°F) highs close to 90°F as well.`,
          `January highs of 53.0°F and lows of 35.1°F.`,
          `December as the wettest month, with 5.10 inches, and April close behind at 5.01.`,
          `August as the driest month at 2.83 inches, followed by July at 3.18.`,
          `About 49 inches of precipitation in the twelve monthly normals combined.`,
        ],
      },
      { h: 'Hot, dry late summer on flat ground' },
      {
        p: `The Delta is flat and open, and in late summer it’s at its hottest and driest at the same time. Dry fields, gravel turn rows and unpaved shortcuts send up dust with every truck that passes, and with little in the landscape to break a breeze, that dust travels. Bright sun reflecting off pale ground adds glare. Eyes respond to all of it the same way: the tear film thins faster, and grit that lands on the eye makes it feel scratchy.`,
      },
      {
        list: [
          `Wear wraparound sunglasses, or the safety glasses your work calls for, whenever you’re outside on dusty days.`,
          `Roll the truck windows up on gravel roads and set the air to recirculate until you’re back on pavement.`,
          `Wash your hands and face before touching your eyes at the end of a dusty day.`,
          `If grit lands in your eye, blink and rinse with clean water rather than rubbing.`,
        ],
      },
      { h: 'Long days in a cab, a shop or a field office' },
      {
        p: `Farm work, grain handling, trucking and shop jobs keep a lot of people around Greenville outdoors or in a vehicle for most of the day in late summer and fall. An air-conditioned cab is a relief from 92°F heat, but the vents are inches from your face and the air coming out of them is dry. Point them at your chest, and step out of the cab now and then on long days. Watching a row, a monitor or the road for hours also slows blinking, so make a habit of a few slow, full blinks at the end of each pass or each stop. Our guide on [dry eyes for farmers](/guides/dry-eyes-for-farmers) covers harvest work in more detail.`,
      },
      { h: 'Air conditioning at home through September' },
      {
        p: `With nights still near 71°F to 72°F in July and August, the air conditioning runs around the clock for months. It pulls moisture out as it cools, so the house ends up much drier than the muggy air outdoors. Keep bedroom vents and ceiling fans from blowing straight over your pillow, and avoid sitting under a supply vent while you read or watch TV. If your eyes feel worst first thing in the morning, the bedroom air is a good place to start looking.`,
      },
      { h: 'Mild, wet winters' },
      {
        p: `December is Greenville’s wettest month in the normals, and January lows average a little above freezing. Heat runs on cold nights, though less than in places farther north. The usual winter advice applies on a smaller scale: keep floor registers and space heaters from blowing at your face, and turn the thermostat down a little at night. Many people find winter the easiest season for their eyes here.`,
      },
      { h: 'What the label on Quell says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses statement on its Drug Facts panel reads: {uses}. The panel’s directions are: {directions}. It also says: {tip}.`,
      },
      {
        p: `Note the caution line: {warnings}. The storage line reads: {storage}. A truck parked in a Delta field in August gets far hotter inside than 86°F, so keep the bottle in a cooler bag or carry it into the house. Read the whole label on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Greenville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Greenville, Leland, Indianola and every other US address. Checkout works as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, though we don’t promise a delivery date, so plan ahead before harvest gets busy. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. More on the [Greenville page](/eye-drops/greenville-ms) and the [Mississippi page](/eye-drops/state/mississippi).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Dust and heat cause plenty of ordinary discomfort, but a drop isn’t the answer to an eye injury or to symptoms like these from the label: {stopUse} Chaff, a metal sliver or anything that won’t rinse out needs prompt care. An eye doctor can find the cause and decide what to do. If you’re unsure, our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) page can help.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Greenville, Mississippi get?',
        a: 'NOAA’s 1991–2020 normals for the Greenville airport station put July’s average high at 92.5°F and August’s at 92.3°F. June and September highs are close to 90°F as well.',
      },
      {
        q: 'What is the driest month in Greenville, MS?',
        a: 'August, at 2.83 inches of precipitation in NOAA’s normals. December is the wettest month at 5.10 inches, with April close behind at 5.01.',
      },
      {
        q: 'How do I keep Delta field dust out of my eyes?',
        a: 'Wear wraparound sunglasses or the safety glasses your work calls for, keep vehicle windows up on gravel roads, and wash your hands and face before touching your eyes. If grit gets in, blink and rinse with clean water instead of rubbing.',
      },
      {
        q: 'Does Quell ship to Greenville, Mississippi?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Greenville and every other US address. Shipping is {shipping}, or free on {freeBottles} or more bottles, and you’ll get tracking by email.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-hampton-va:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid LFI; saved at .daily-job/acis1121/LFI.json and .daily-job/a/1121/LFI-extra.json)
   *   (LANGLEY AIR FORCE BASE, elev 10 ft: Jan max 49.0 F, min 32.1 F; Feb max 51.5,
   *   min 33.8; Jul max 87.3 (warmest), min 71.2; Aug max 85.1, min 70.5; Dec max
   *   52.2, min 35.5; precip Jul 5.33 in (wettest), Aug 4.94, Sep 4.77, Feb 2.88
   *   (driest); twelve monthly precip normals sum to 47.83 in; snowfall Jan 2.4 in,
   *   Feb 0.1, Mar 0.1, Dec 0.1, all other months 0.0, total 2.7 in)
   * - relhum23.txt / wndspd23.txt have no Hampton/Langley row: no humidity or wind
   *   figure (the Norfolk row is a different station and is not used).
   * - The installation's current official name was not verified today, so the
   *   prose names only the station as NOAA lists it.
   * - Neighbor guides norfolk-va and virginia-beach-va use wind, spring dryness,
   *   piers, shipyards, tunnels, the oceanfront and flight lines; this one is built
   *   on July rain plus air conditioning, the near-absence of snow, and the bay.
   */
  {
    slug: 'dry-eye-relief-hampton-va',
    title: 'Dry eye relief in Hampton, Virginia',
    description:
      'In Hampton, July is both the hottest and the wettest month in NOAA’s normals, and snow averages under 3 inches a year. What that means for dry eyes.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Hampton’s dry-eye season is summer indoors, not winter outdoors. NOAA’s normals for the station at Langley put July at 87°F and 5.33 inches of rain, the hottest and wettest month at once, so homes and offices run air conditioning hard while the air outside stays muggy. Keep vents off your face, wear sunglasses on the water, use a lubricating drop exactly as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Is Hampton’s climate hard on your eyes?' },
      {
        p: `Not in the way a desert is. NOAA’s 1991–2020 climate normals for the station it lists as Langley Air Force Base, about 10 feet above sea level, as published through the National Weather Service’s NOWData, describe a warm, wet place:`,
      },
      {
        list: [
          `July’s average high is 87.3°F, with nights near 71.2°F. August follows at 85.1°F and 70.5°F.`,
          `January’s average high is 49.0°F and its average low 32.1°F, right at freezing. No month’s average low falls below it.`,
          `July is the wettest month at 5.33 inches, then August at 4.94 and September at 4.77.`,
          `February is the driest month at 2.88 inches.`,
          `The twelve monthly normals add up to about 47.8 inches of precipitation.`,
        ],
      },
      {
        p: `So the trouble for eyes in Hampton mostly comes from what people do about the weather: cool the house for five months, heat it lightly for a few, and spend summer weekends in the sun and wind on the water.`,
      },
      { h: 'Why the rainiest month can still dry your eyes' },
      {
        p: `July rain in Hampton tends to come as heavy bursts rather than steady soakers, and the hours between are hot and sticky. That keeps the air conditioning running nearly nonstop. An AC system cools air by passing it over cold coils, where water condenses and drains away, so the air coming out of the vent is drier than the air outside. Sit in that stream for a workday, then sleep under it, and your tear film spends hours losing water faster than usual.`,
      },
      {
        list: [
          `Redirect supply vents above your desk, your couch and especially your bed.`,
          `Set the thermostat a degree or two warmer at night; the system cycles less and moves less air.`,
          `If you use a fan for sleep, point it at your body or the wall, not your face. Our guide to [dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) explains why.`,
          `In the car, a lower fan speed once the cabin cools is easier on the eyes than full blast.`,
        ],
      },
      { h: 'Does it snow in Hampton?' },
      {
        p: `Barely. NOAA’s snowfall normals for the station total about 2.7 inches a year, and almost all of it, 2.4 inches, falls in January. February, March and December each average a tenth of an inch, and the rest of the year is zero. Winters here are short and mild, and the heat pump or furnace runs less than in most of the country. When it does, the same rule applies as with AC: keep the airflow off your face, and don’t park your chair over a floor register on a cold evening.`,
      },
      { h: 'Out on the bay and the creeks' },
      {
        p: `Hampton sits on the water, and a lot of its free time happens there: fishing from a small boat, paddling a creek, or a long afternoon on a dock. Open water lets a breeze reach you without anything in the way, and sunlight reflects up off the surface as well as down from the sky. Both speed evaporation from the eye and invite squinting.`,
      },
      {
        list: [
          `Wear polarized wraparound sunglasses; they cut reflected glare and block wind at the sides.`,
          `A brimmed hat shades your eyes from overhead sun during midday trips.`,
          `Rinse salt spray off your face with fresh water rather than wiping it with your hand.`,
          `Keep a bottle of drops in a shaded bag, not on a sunny deck or console.`,
        ],
      },
      {
        p: `There’s more in our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat).`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses: {uses}. Its directions: {directions}. It adds: {tip}.`,
      },
      {
        p: `The caution on the carton reads: {warnings}. On storage: {storage}. A boat console or a car in a sunny lot in July can run well above that, so keep the bottle in shade. You can read every line on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Hampton' },
      {
        p: `We ship from Brentwood, Tennessee, to Hampton, Poquoson and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but we don’t promise a delivery date, so order before your bottle is nearly empty. Unopened bottles are refunded within {returnDays} days of delivery, and you don’t send them back. The [Hampton page](/eye-drops/hampton-va) and the [Virginia page](/eye-drops/state/virginia) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Air conditioning and sun explain a lot of summer discomfort. They don’t explain the symptoms on the label’s stop-use list: {stopUse} A fishhook, a splash of fuel or cleaner, or anything that scratches the eye needs care right away. For dryness that hangs on, an eye doctor can find the cause and decide what to do. Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) page lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Does it snow in Hampton, Virginia?',
        a: 'Very little. NOAA’s 1991–2020 snowfall normals for the station at Langley total about 2.7 inches a year, with 2.4 of those inches in January.',
      },
      {
        q: 'What is the hottest month in Hampton, VA?',
        a: 'July, with an average high of 87.3°F and an average low of 71.2°F in NOAA’s normals for the Langley station. It is also the wettest month, at 5.33 inches.',
      },
      {
        q: 'Why do my eyes feel dry in a humid summer?',
        a: 'Indoor air is the usual reason. Air conditioning removes moisture as it cools, and a vent blowing on your face moves that drier air across your eyes for hours.',
      },
      {
        q: 'Can I order Quell to Hampton, VA?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Hampton and any other US address. Shipping is {shipping}, or free on {freeBottles} or more bottles, with tracking by email.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-newport-news-va:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid PHF; saved at .daily-job/acis1121/PHF.json and .daily-job/a/1121/PHF-extra.json)
   *   (NEWPORT NEWS INTL AP, elev 36 ft: Jan max 49.0 F, min 30.6 F; Feb max 52.5,
   *   min 31.8; Mar max 59.1, min 38.0; May max 77.2, min 56.1; Jul max 88.2
   *   (warmest), min 70.3; Aug max 86.6, min 68.1; Oct max 71.3, min 51.4; Nov max
   *   61.2, min 40.2; Dec max 53.3, min 33.5; precip Aug 5.36 in (wettest), Sep 4.95,
   *   Jul 4.69, Feb 2.58 (driest); twelve monthly precip normals sum to 45.14 in;
   *   snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Newport News row: no humidity or wind figure.
   * - TSA liquids rule (3.4 oz / 100 mL containers, one quart-size bag) as TSA states it.
   */
  {
    slug: 'dry-eye-relief-newport-news-va',
    title: 'Dry eye relief in Newport News, Virginia',
    description:
      'Newport News has freezing nights in January and February and an 88°F July, per NOAA. A season-by-season guide to dry eyes on the Peninsula.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Newport News gives your eyes a different challenge each season. NOAA’s normals for its international airport show freezing nights in January and February, a fast spring warm-up, an 88°F July and an August that’s the wettest month of the year. Heat in winter and air conditioning in summer do most of the drying indoors. Manage the vents, take screen breaks, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The airport record for Newport News' },
      {
        p: `The figures here are NOAA’s 1991–2020 climate normals for Newport News International Airport, a station about 36 feet above sea level, as published through the National Weather Service’s NOWData. Precipitation across the twelve monthly normals totals about 45.1 inches, with August the wettest month (5.36 inches) and February the driest (2.58). Snowfall normals came back missing for this station, so they aren’t given here. The rest of the numbers are easiest to read season by season.`,
      },
      { h: 'Winter: the only freezing nights of the year' },
      {
        p: `January averages 49.0°F in the afternoon and 30.6°F at night; February runs 52.5°F and 31.8°F. Those are the only two months whose average low is below freezing, and they’re when the heat runs longest. December’s low of 33.5°F is close behind.`,
      },
      {
        list: [
          `Turn floor registers and space heaters so they warm your legs, not your face.`,
          `Keep the bedroom a little cooler than the living room.`,
          `A small humidifier near your favorite chair helps; clean it as directed so it doesn’t become a problem of its own.`,
          `Scraping a windshield on a 30°F morning means cold air on your eyes, then a hot defroster. Split the airflow toward the floor once the glass clears.`,
        ],
      },
      { h: 'Spring: an 18-degree climb in two months' },
      {
        p: `March averages 59.1°F by day. By May it’s 77.2°F. In between, the house swings from heat in the morning to open windows in the afternoon, and by May the air conditioning starts its season. Those switches are when many people notice their eyes, because the indoor air keeps changing. It helps to be deliberate: when you turn the AC on for the first time, check where each vent points before you settle in at your desk or in bed.`,
      },
      { h: 'Summer: August brings the most rain' },
      {
        p: `July is the hottest month in the normals, at 88.2°F with nights near 70°F, and August is the wettest, followed by September and July. Summer storms don’t make indoor air humid, though. With the AC removing moisture as it cools, an office or bedroom can feel dry to the eyes even on a stormy day. Wraparound sunglasses help outdoors, where the sun is high and bright pavement and water add glare. Indoors, the same vent habits from winter apply in reverse.`,
      },
      { h: 'Fall: the comfortable stretch' },
      {
        p: `October averages 71.3°F by day and 51.4°F at night, and November 61.2°F and 40.2°F. For many people these are the easiest weeks of the year: windows open, neither heat nor AC running much. If your eyes still bother you in October, the cause may be something other than the air, such as long hours at a screen or a habit of reading in bed. Our guide to [how often to take a break from screens](/guides/how-often-should-i-take-a-break-from-screens) covers the screen side.`,
      },
      { h: 'Flying out of the airport' },
      {
        p: `The weather station behind these numbers sits at the airport, and many Peninsula residents fly from there. Airplane cabin air is famously dry, and a long flight spent reading or watching a seatback screen cuts blinking. TSA’s liquids rule allows containers of 3.4 ounces (100 milliliters) or less in a carry-on, all in one quart-size bag; a bottle of Quell is {size}. Put it in the bag with your other liquids and keep it with you rather than in checked luggage. Our [traveling with eye drops](/guides/traveling-with-eye-drops) guide has more.`,
      },
      { h: 'Commuting up and down the Peninsula' },
      {
        p: `Newport News is a long, narrow city, and plenty of people drive its length every day, often with the vents on high. Aim the dash vents at your chest, use a moderate fan speed, and keep sunglasses in the car for the morning drive into the low sun.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses this way: {uses}. Directions: {directions}. Also printed: {tip}.`,
      },
      {
        p: `Before using it, read this caution: {warnings}. The storage line: {storage}. A car left in the airport lot for a week in July, or in January, can go past either end of that range. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Buying Quell in Newport News' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Newport News, Williamsburg, Yorktown and any other US address. You can check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. Visit the [Newport News page](/eye-drops/newport-news-va) or the [Virginia page](/eye-drops/state/virginia) for more.`,
      },
      { h: 'Getting an eye exam' },
      {
        p: `No season explains every symptom. The label says to stop and ask a doctor in these cases: {stopUse} Sudden blurring, a scratch, or one eye that suddenly feels much worse than the other also need an eye doctor, who can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for a fuller list.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Newport News get in winter?',
        a: 'NOAA’s 1991–2020 normals for Newport News International Airport put January’s average high at 49.0°F and average low at 30.6°F. January and February are the only months with average lows below freezing.',
      },
      {
        q: 'What is the wettest month in Newport News, VA?',
        a: 'August, at 5.36 inches of precipitation in NOAA’s normals for the airport. February is the driest month, at 2.58 inches.',
      },
      {
        q: 'Can I bring Quell on a flight from Newport News?',
        a: 'TSA’s liquids rule allows containers of 3.4 ounces (100 milliliters) or less in a carry-on, packed in one quart-size bag. A bottle of Quell is {size}, so it fits within that limit.',
      },
      {
        q: 'Does Quell ship to Newport News, Virginia?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Newport News and every other US address. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and tracking comes by email.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-grandma',
    title: 'Christmas gifts for grandma',
    description:
      'Christmas gift ideas for grandma, from reading-chair comforts to grandkid-made gifts, plus how to give eye drops thoughtfully if her eyes feel dry.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `The Christmas gifts grandma enjoys most usually fit the way she already spends her days: something for her reading chair, her kitchen or her garden, something the grandkids made, or time spent together. If she mentions dry or scratchy eyes in a heated house, a small comfort like a humidifier or a bottle of lubricating eye drops can sit alongside the main gift, as long as you read the label with her in mind.`,
      },
      { h: 'Start with an ordinary Tuesday' },
      {
        p: `Picture her day. Does she start with a crossword and coffee? Spend the afternoon at a sewing machine or in the garden? Call the family on a tablet every Sunday? A gift that fits into a routine she already loves gets used, and a gift that asks her to start a new hobby often ends up in a closet. Ask a parent or sibling what she’s mentioned needing lately; grandmothers tend to tell someone.`,
      },
      { h: 'For her reading chair and puzzles' },
      {
        list: [
          `A good adjustable lamp with a warm, bright light for reading, puzzles or needlework.`,
          `A large-print edition of a book by an author she likes, or a subscription to a puzzle magazine.`,
          `A soft throw blanket for the chair she always sits in.`,
          `A lap desk or tray for puzzles, cards and letters.`,
          `A magnifier for small print on recipe cards and medicine labels.`,
        ],
      },
      {
        p: `Reading and fine handwork mean long stretches of looking closely, and people blink less when they concentrate. Good light and a break every so often to look across the room are easy gifts to pair with the book.`,
      },
      { h: 'For the kitchen and the garden' },
      {
        p: `If her kitchen is the center of the house at Christmas, consider a framed copy of a family recipe in her handwriting, new oven mitts, or a set of measuring cups that aren’t chipped. For a gardener, think about spring: seeds she likes, a kneeling pad, good gloves, or a wide-brimmed hat and a pair of sunglasses for bright days outdoors. Our [Christmas gifts for a gardener](/guides/christmas-gifts-for-a-gardener) list has more ideas.`,
      },
      { h: 'Gifts the grandkids can make or give' },
      {
        list: [
          `A photo calendar for 2027 with a picture of the grandkids for each month.`,
          `A handwritten letter from each grandchild, bound together with ribbon.`,
          `A recorded video message she can replay, loaded onto her phone or tablet.`,
          `Coupons for a lunch date, a ride to the store, or an afternoon of help with chores.`,
          `A drawing or painting in a simple frame.`,
        ],
      },
      { h: 'Comfort for winter evenings' },
      {
        p: `Many grandmothers spend December in a warm house with the heat running and the TV or a tablet on. Heated air holds less moisture, which can leave eyes feeling dry or gritty by evening. A small room humidifier for the living room or bedroom, cozy socks, or a heating pad are practical gifts that make the season easier. If she has a space heater by her chair, gently suggest turning it so it doesn’t blow at her face.`,
      },
      { h: 'Is it okay to give grandma eye drops?' },
      {
        p: `It can be, if you know her eyes bother her and she’d welcome it. Frame it as a comfort item tucked into the stocking, not as a comment on her age. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses statement reads: {uses}. The directions on the panel say: {directions}.`,
      },
      {
        p: `Read the label with her in mind before you buy. Its caution line is: {warnings}. If she uses prescription eye drops or other drops, wears contact lenses, or has recently had eye surgery, the label doesn’t cover those situations; suggest she ask her eye doctor or pharmacist first. Our page on [eye drops for older adults](/guides/eye-drops-for-older-adults) covers what to check, and the full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Sending it to her house, or to a care community' },
      {
        p: `At checkout, put her name and address in the shipping fields and your own email, so the tracking emails come to you. Buyers must be 18 or older and check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles, which can make sense if you’re sending one to her and keeping one yourself. If she lives in assisted living or a nursing home, ask the staff how packages and over-the-counter products are handled before you order; our guide to [ordering eye drops for someone in a nursing home](/guides/ordering-eye-drops-for-someone-in-a-nursing-home) walks through it.`,
      },
      { h: 'Timing for Christmas' },
      {
        p: `Christmas falls on a Friday this year, December 25, 2026. We ship from Brentwood, Tennessee, but don’t promise delivery dates, so order in the first part of December rather than the last week. If she lives somewhere cold, let her know a package is coming so it doesn’t sit on the porch; the label’s storage line is {storage}. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back.`,
      },
      { h: 'The gift of a check-in' },
      {
        p: `If grandma’s eyes have been bothering her a lot, or she mentions blurry vision, pain or a change in how she sees, the most useful gift may be a ride to an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide whether to bring it up.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a grandma who has everything?',
        a: 'Something personal or something she’ll use up. A photo calendar of the grandkids, a framed family recipe, letters from each grandchild, or comfort items like a throw blanket or room humidifier tend to be welcome even when she has plenty.',
      },
      {
        q: 'What can grandkids give grandma for Christmas?',
        a: 'Homemade and personal gifts go over well: a drawing in a frame, a recorded video message, a bundle of handwritten letters, or coupons for a lunch date or help with chores.',
      },
      {
        q: 'Are eye drops a good gift for grandma?',
        a: 'They can be a thoughtful add-on if she has mentioned dry eyes and would welcome them. Read the label first, and if she uses other eye drops, wears contacts or has had recent eye surgery, have her check with her eye doctor or pharmacist.',
      },
      {
        q: 'Can I ship a Christmas gift directly to grandma?',
        a: 'Yes. Enter her name and address as the shipping address and your own email for tracking. Quell ships from Brentwood, Tennessee, to any US address, and shipping is {shipping}, or free on {freeBottles} or more bottles.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-father-in-law',
    title: 'Christmas gifts for a father-in-law',
    description:
      'Gift ideas for a father-in-law who’s hard to shop for: hobby gear, things for the truck or the recliner, and how to give eye drops without it being awkward.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `A good Christmas gift for a father-in-law is usually practical and tied to something he already does: his workshop, his truck, his grill, the game on TV or his morning routine. Ask your spouse what he’s been grumbling about lately, and buy the fix. If he complains about dry, tired-feeling eyes from the heater or long drives, a bottle of lubricating eye drops can be a sensible small add-on.`,
      },
      { h: 'Your spouse knows things you don’t' },
      {
        p: `Most people are guessing when they shop for a father-in-law. Your spouse isn’t. Ask three questions: What has he mentioned wanting? What does he use until it falls apart? What does he never buy for himself? The answer to the last one is often the winner, whether it’s a new pair of work gloves, a decent flashlight or good coffee.`,
      },
      {
        p: `It also helps to decide early whether the gift comes from both of you. A joint gift avoids doubling up and lets you spend on one better item instead of two smaller ones.`,
      },
      { h: 'Ideas by what he does with his time' },
      {
        list: [
          `The workshop or garage: a headlamp, a magnetic parts tray, a shop stool, or a good set of safety glasses that actually fit.`,
          `The grill or smoker: a meat thermometer, heat-resistant gloves, or a rub from a regional barbecue shop.`,
          `Game day: a cozy blanket for the recliner, a new team cap, or a snack box for the big game.`,
          `The lake or the woods: polarized sunglasses, a warm hat, or hand warmers for cold mornings.`,
          `The garden: a sturdy kneeling pad, pruning shears, or seeds for spring.`,
        ],
      },
      {
        p: `If he’s into one of these deeply, we have fuller lists for [someone who fishes](/guides/christmas-gifts-for-someone-who-fishes) and [a hunter](/guides/christmas-gifts-for-a-hunter).`,
      },
      { h: 'Gifts for the truck and the drive' },
      {
        p: `Plenty of fathers-in-law spend a lot of time behind the wheel, whether commuting, running errands or driving to see the grandkids. Useful gifts include a phone mount, an ice scraper with a brush, a good pair of driving sunglasses, or a car organizer for the back seat. Long drives with the heater or air conditioning blowing can leave eyes feeling dry, so a tip worth passing along with the gift: aim the vents at your chest, not your face.`,
      },
      { h: 'Is it weird to give a father-in-law eye drops?' },
      {
        p: `Not if he’s brought it up. Plenty of men won’t buy themselves anything for comfort, but will use it if someone hands it to them. Keep it low-key: tuck a bottle into a stocking or a gift bag next to the main present, with a note like “for the drive” or “for the shop heater.” Don’t present it as a health intervention.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. It comes as a {size} bottle, and the directions say: {directions}.`,
      },
      { h: 'Check the label before you wrap it' },
      {
        p: `A few things on the Drug Facts panel matter for a gift. The caution line reads: {warnings}. And one handling instruction: {tip}. If he uses prescription eye drops or any other drops, or wears contact lenses, the label doesn’t give directions for those situations, so he should check with his eye doctor or pharmacist before adding something new. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering and shipping to your in-laws' },
      {
        p: `If you won’t see him before Christmas, ship it straight to his house: put his name and address in the shipping fields and your email for tracking. Checkout is as a guest, for buyers 18 and up. Shipping is {shipping}, and {freeBottles} or more bottles ship free, which works out if your mother-in-law or your own household wants one too. We ship from Brentwood, Tennessee, and can’t promise a delivery date, so with Christmas on Friday, December 25, order in early December. Unopened bottles can be refunded within {returnDays} days of delivery, and nothing needs to be sent back. [Order from the home page](/#buy).`,
      },
      { h: 'When he’s truly impossible to shop for' },
      {
        list: [
          `Plan a day together: breakfast out, a ball game, or a trip to the hardware store with a gift card in hand.`,
          `Frame an old family photo, especially one from before your spouse was born.`,
          `Do a project for him: clean out the gutters, set up his new phone, or fix the squeaky door he’s ignored for a year.`,
          `Give a consumable he likes, such as good coffee, jerky or a favorite snack.`,
        ],
      },
      {
        p: `And if his eyes seem to bother him more than he admits, or he mentions vision changes or eye pain, nudge him toward an eye doctor. The label’s own advice: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get a father-in-law who has everything?',
        a: 'Time or a consumable. A day out together, a framed old family photo, a project you do for him, or good coffee and snacks are welcome even when his shelves are full.',
      },
      {
        q: 'Should a gift for my father-in-law come from both of us?',
        a: 'Often that works out well. A joint gift avoids doubling up, and your spouse knows what he actually needs. You can still add a small personal item from you.',
      },
      {
        q: 'Is it okay to give my father-in-law eye drops for Christmas?',
        a: 'Yes, if he’s mentioned dry or tired-feeling eyes. Keep it low-key as a stocking add-on, and if he uses other eye drops or wears contacts, suggest he check with his eye doctor or pharmacist first.',
      },
      {
        q: 'Can I ship a Christmas gift to my in-laws’ house?',
        a: 'Yes. Enter their address as the shipping address and your email for tracking. Quell ships from Brentwood, Tennessee, to any US address; shipping is {shipping}, or free on {freeBottles} or more bottles.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-an-aunt',
    title: 'Christmas gifts for an aunt',
    description:
      'Christmas gift ideas for an aunt, from nieces and nephews or for an aunt and uncle together, plus when eye drops make sense as a small extra.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Good Christmas gifts for an aunt match her life right now: something for her travels, her hobbies, her workday or her home, often with a personal touch from a niece or nephew. If she spends long hours at a screen or in a heated office and mentions dry eyes, a bottle of lubricating eye drops can be a thoughtful extra, as long as you check the label first.`,
      },
      { h: 'Think about which aunt she is' },
      {
        p: `Aunts come in every variety. There’s the aunt who travels, the one who hosts every holiday, the one with a demanding job, the crafty one, the one who spoils the kids. Knowing which one you’re buying for narrows the list fast. If you’re not sure, ask a cousin or your parent what she’s been up to this year.`,
      },
      { h: 'For the aunt who travels' },
      {
        list: [
          `A soft eye mask and travel pillow for long flights.`,
          `A clear, quart-size toiletry bag for carry-on liquids.`,
          `A portable charger and a short cable.`,
          `A luggage tag with a family photo on the back.`,
        ],
      },
      {
        p: `Airplane cabins are dry, and long flights spent reading or watching a screen can leave eyes feeling scratchy. TSA’s liquids rule allows containers of 3.4 ounces (100 milliliters) or less in a carry-on, all in one quart-size bag. A bottle of Quell is {size}, small enough for that bag. Our guide to [traveling with eye drops](/guides/traveling-with-eye-drops) has more.`,
      },
      { h: 'For the aunt who reads, crafts or bakes' },
      {
        list: [
          `A clip-on book light or a bright craft lamp.`,
          `Quality yarn, thread or fabric from a local shop.`,
          `A new cookbook and a nice apron.`,
          `A subscription to a magazine about her hobby.`,
        ],
      },
      {
        p: `Close work keeps the eyes focused on one spot and slows blinking. A good light and a reminder to look up every so often help. If she quilts or knits, our [Christmas gifts for a knitter or quilter](/guides/christmas-gifts-for-a-knitter-or-quilter) list goes deeper.`,
      },
      { h: 'For the aunt with a demanding job' },
      {
        p: `If she spends her days in meetings and on spreadsheets, think about desk comforts: a monitor stand to bring the screen to the right height, a small desk humidifier, a good water bottle or a cozy cardigan for a cold office. Offices often run heat hard in winter, and that dry, moving air can make eyes feel gritty by afternoon. A bottle of drops for her desk drawer could be a practical addition.`,
      },
      { h: 'Gifts from a niece or nephew' },
      {
        p: `From a younger niece or nephew, homemade still wins: a drawing, a photo of the two of you in a frame, or a letter about a favorite memory together. From an adult niece or nephew, an experience can mean more than an object: a dinner out, a concert, a museum day or a cooking class you do together.`,
      },
      { h: 'One gift for an aunt and uncle together' },
      {
        p: `For a couple, a shared gift is often easier. A board game, a restaurant gift card, a nice candle for the house or a framed family photo works for both. If both of them have mentioned dry eyes, two bottles of eye drops can be part of it, one for each of them; sharing a bottle isn’t a great idea, since each person touching it adds a chance of contamination.`,
      },
      { h: 'Giving eye drops: what to check' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its label: {uses}. The directions: {directions}. Before gifting, read the caution line: {warnings}. If she uses other eye drops, wears contacts, or has an eye condition she sees a doctor for, the label doesn’t cover those, so she should ask her eye doctor or pharmacist first. The complete label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Shipping to her house' },
      {
        p: `If she lives in another state, enter her name and address as the shipping address at checkout, with your email for tracking. We ship from Brentwood, Tennessee, to any US address. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Checkout is as a guest for buyers 18 and older. We don’t promise delivery dates, and Christmas is on Friday, December 25 this year, so order well before the last week. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [See the bottle](/#buy).`,
      },
      {
        p: `If she mentions eye pain, vision changes or dryness that won’t go away, that’s a conversation for her eye doctor, not a gift. The label’s guidance: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get an aunt for Christmas?',
        a: 'Something tied to her life right now: travel gear for an aunt who flies a lot, a craft lamp or yarn for one who makes things, desk comforts for one with a busy job, or a shared experience together.',
      },
      {
        q: 'What can a niece give her aunt for Christmas?',
        a: 'A personal gift works well: a framed photo of the two of you, a letter about a favorite memory, or an outing you do together like dinner, a concert or a class.',
      },
      {
        q: 'What is a good Christmas gift for an aunt and uncle together?',
        a: 'Something both can use, like a board game, a restaurant gift card, a candle or a framed family photo. If both have mentioned dry eyes, give each of them their own bottle of drops rather than one to share.',
      },
      {
        q: 'Can I send eye drops to my aunt in another state?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address. Put her address in the shipping fields and your email for tracking; shipping is {shipping}, or free on {freeBottles} or more bottles.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-drywall-finishers',
    title: 'Dry eyes for drywall installers and finishers',
    description:
      'Sanding joint compound overhead, unheated winter sites and bright work lights all dry out eyes. A practical guide for drywall hangers and tapers.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Drywall work is hard on the eyes because it combines fine sanding dust, overhead work, raw jobsite air and long stretches of staring at seams under bright light. Wear the eye protection your job requires, keep dust off your face and hands before touching your eyes, take short breaks from close inspection, use a lubricating drop exactly as its label directs on a clean break, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why drywall work dries your eyes' },
      {
        p: `Your tear film is a thin coat of mucus, water and oil that keeps the front of the eye smooth and wet. Three things speed up how fast it thins: moving air, dry air and fewer blinks. A drywall job tends to bring all three at once. Fans run to dry mud, temporary heaters push hot air through empty rooms in winter, and the work itself, tracking a joint or feathering an edge, holds your gaze steady for minutes at a time. Dust that settles on the eye adds a gritty feeling on top.`,
      },
      { h: 'Sanding overhead: where the dust goes' },
      {
        p: `Ceilings are the worst of it. When you sand above your head, dust falls straight down toward your face, and looking up tends to open the eyes wider than looking straight ahead, which leaves more of the surface exposed. A few habits help:`,
      },
      {
        list: [
          `Wear safety glasses or goggles that seal well enough at the sides and top for overhead work; your employer or the tool’s manual will say what’s required.`,
          `Use a pole sander so your face is farther from the surface.`,
          `Work with dust extraction or a vacuum sander where the job allows.`,
          `Step out of the room between passes to let the air clear before you take your glasses off.`,
          `Brush or blow dust off your cap brim and shoulders before you lift your eyewear; otherwise it falls right into your eyes.`,
        ],
      },
      { h: 'Hanging board and taping: the dust you don’t see' },
      {
        p: `Even before anyone sands, scoring and snapping board throws off gypsum dust, and cutting outlet holes with a rotary tool sends it flying. Mixing a fresh bucket of compound puts a puff of powder in the air. None of it seems like much at the time, but by afternoon your eyes can feel scratchy. Keep a habit of washing your hands and face at lunch and before you rub your eyes, and never touch your eyes with gloves you’ve been working in.`,
      },
      { h: 'Winter sites with temporary heat' },
      {
        p: `New construction often isn’t heated by its own system yet. Crews bring in portable heaters to keep the space warm enough for compound to dry, and those heaters blow hot, dry air across the room. Standing in that stream for hours dries the tear film fast. Set up so the heater blows across the room rather than at your work area, and don’t stand in front of it to warm up and then go right back to staring at a seam. If your eyes burn in a room with a fuel-burning heater, step outside, let the crew lead know, and make sure the space is ventilated as the heater’s manufacturer directs.`,
      },
      { h: 'Bright work lights and staring at seams' },
      {
        p: `Finishers often use a work light held low against the wall to throw shadows across the joint and reveal ridges and dips. It works, but it means staring into bright, glancing light for long stretches. Concentration lowers your blink rate, and glare makes people squint. Every few minutes, look away from the wall, across the room or out a window, and give yourself a few slow, complete blinks. It costs seconds and helps your eyes keep up.`,
      },
      { h: 'Using a lubricating drop on the job' },
      {
        p: `Drops are for dryness, not for dust or debris. If something is in your eye, rinse it out first with clean water or an eyewash station, as described below. For ordinary dryness, Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label’s Uses read: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `Wash your hands and face before you open the bottle. Gypsum dust on your fingers ends up in your eyes.`,
          `Use it on a break, sitting down, away from active sanding.`,
          `Follow the hygiene line on the label: {tip}.`,
          `Keep the bottle in a closed pocket or your lunch bag, not open on a bucket lid. The label’s storage line is {storage}, so don’t leave it in a truck on a cold site or a hot summer day.`,
        ],
      },
      {
        p: `The panel’s caution reads: {warnings}. See the whole label on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'If dust or a chip gets in your eye' },
      {
        p: `Don’t rub. Rubbing can drag a hard particle across the surface of the eye. Blink, then rinse with clean water or the site’s eyewash. If it still feels like something is there, if your vision is blurry, or if pain continues, get it looked at that day. Something that sticks or scratches is not a job for an eye drop. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains when it’s urgent.`,
      },
      { h: 'Getting drops to you' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a job trailer or a shop, though it’s often simpler to ship home. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, so a crew can split an order with each person keeping their own bottle. We don’t promise delivery dates, so order before you run out. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. If you’re thinking about a crew order, see [shipping eye drops to a job site](/guides/shipping-eye-drops-to-a-job-site).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness from dusty, heated job sites is common, and it tends to ease on days off. If it doesn’t, or if you notice anything on the label’s list, it’s time for an exam: {stopUse} An eye doctor can find the cause and decide what to do. Related trades have their own guides: [construction workers](/guides/dry-eyes-for-construction-workers) and [house painters](/guides/dry-eyes-for-house-painters).`,
      },
    ],
    faq: [
      {
        q: 'Can drywall dust cause dry eyes?',
        a: 'Dust that lands on the eye can make it feel gritty and irritated, and drywall jobs often add fans, temporary heaters and long stretches of concentration that speed evaporation from the tear film. Eye protection and clean hands help.',
      },
      {
        q: 'What should I do if drywall dust gets in my eye?',
        a: 'Don’t rub. Blink and rinse with clean water or an eyewash station. If it still feels like something is in the eye, or there is pain or blurry vision, get it checked that day.',
      },
      {
        q: 'Why do my eyes burn when sanding ceilings?',
        a: 'Dust falls toward your face when you sand overhead, and looking up tends to open the eyes wider. Well-fitting eye protection, a pole sander and dust extraction keep more of it away from your eyes.',
      },
      {
        q: 'Can I use eye drops on a drywall job?',
        a: 'Yes, for dryness, on a clean break away from active sanding. Wash your hands and face first, follow the label’s directions, and rinse out any dust before using a drop.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-flooring-installers',
    title: 'Dry eyes for flooring and tile installers',
    description:
      'Cutting tile, sanding hardwood and kneeling close to the floor all affect your eyes. How flooring and tile installers can keep dry, gritty eyes in check.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Flooring and tile installers get dry, gritty eyes from cutting dust, floor sanding, empty houses with the heat or air blasting, and hours of looking down at close work with few full blinks. Wear the eye protection your job and your saw’s manual call for, keep your face out of the dust stream, look up and blink every so often, use a lubricating drop as its label directs on a clean break, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the work does to your tear film' },
      {
        p: `The tear film’s three layers, mucus, water and oil, keep the surface of the eye smooth. Each blink spreads a fresh coat. Anything that cuts blinks short or moves air across the eye lets that coat thin faster. Flooring work has plenty of both: focused, close work that makes you stare, and saws, sanders, fans and HVAC systems that keep air and dust moving around the room.`,
      },
      { h: 'Cutting tile, stone and laminate' },
      {
        p: `A wet saw throws a fine mist, and a dry cut on tile, stone or laminate throws dust. Either can end up on your face. Cutting near the floor puts that spray at roughly eye level when you lean over to watch the blade.`,
      },
      {
        list: [
          `Set up the saw outside or in a separate area when you can, so dust and spray don’t fill the room you’re working in.`,
          `Wear the safety glasses or goggles your saw’s manual and your employer specify, and keep them on until you’ve walked away from the cut.`,
          `Stand to the side of the blade’s spray path rather than directly behind it.`,
          `Wipe your eyewear with a clean cloth instead of your shirt, which usually carries more dust.`,
        ],
      },
      { h: 'Sanding and refinishing hardwood' },
      {
        p: `Floor sanding puts out a lot of fine wood dust, even with a dust bag or vacuum attached. The work is slow and steady, and you’re watching the floor surface closely for scratches and swirl marks. Keep eye protection on through the whole pass, and empty bags outdoors. When you switch to finish coats, the room usually needs ventilation, and fans can push air across your face. If fumes make your eyes sting or water, step outside and air the room out as the product’s label directs.`,
      },
      { h: 'Kneeling with your face close to the floor' },
      {
        p: `Setting tile or clicking planks together means hours on your knees, eyes a foot or two from the surface. Looking down narrows the eye opening a bit, which is one reason the advice for desk work puts screens slightly below eye level. The bigger issue for installers is concentration. Lining up grout joints and checking for lippage holds your gaze steady, and the longer you stare, the fewer complete blinks you make.`,
      },
      {
        p: `A simple rhythm helps: each time you finish a row or mix a new batch, sit back, look across the room for a few seconds and blink slowly a few times. Our guide to [why eyes get dry when you focus](/guides/why-do-my-eyes-get-dry-when-i-focus) explains the blink side of this.`,
      },
      { h: 'Grout haze, thinset and cleanup' },
      {
        p: `Mixing thinset or grout releases a puff of powder, and wiping haze off tile means bending over a wet, gritty surface for a long time. Mix outside or near an open door and pour the powder gently. Wear gloves, and wash your hands before touching your face. Never rub your eyes with a hand that’s been in mortar or grout; rinse first.`,
      },
      { h: 'Empty houses and new construction' },
      {
        p: `Many floors go in before anyone moves in, which often means the house is either cold and unheated or running its HVAC hard to bring the space up to temperature for adhesives and materials. Supply vents in a bare room blow straight across the floor where you’re kneeling. In winter, portable heaters add hot, dry air. If you can, close the vent nearest to where you’re working or turn the heater so it isn’t blowing at your face, and take your breaks somewhere the air is calmer.`,
      },
      { h: 'Using an eye drop on the job' },
      {
        p: `If something is in your eye, rinse first; a drop won’t wash out grit. For dryness on its own, Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, the Uses are: {uses}. The directions say: {directions}. One more line from the label: {tip}.`,
      },
      {
        p: `Wash up before you use it, sit down somewhere away from the saw, and keep the bottle closed in a pocket or bag between uses. The caution on the label reads: {warnings}. The storage line, {storage}, matters if you keep tools in a truck through a winter or summer. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When something gets in your eye' },
      {
        p: `Tile chips, sand from grout and wood slivers can scratch. Don’t rub. Blink, rinse with clean water, and if it still feels like something is there, or if your eye hurts or your vision blurs, get care that day. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
      { h: 'Ordering' },
      {
        p: `We ship from Brentwood, Tennessee, to any US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which makes it easy to keep one bottle in the truck’s cab and one at home. We don’t promise a delivery date, so reorder ahead. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. If your eyes keep bothering you on and off the job, the label’s advice is plain: {stopUse} An eye doctor can find the cause and decide what to do. Woodworkers and roofers have their own pages too: [dry eyes for woodworkers](/guides/dry-eyes-for-woodworkers).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry laying tile?',
        a: 'Cutting and mixing put fine dust in the air, and long stretches of close, focused work cut down on full blinks. Bare rooms with HVAC or heaters blowing across the floor add moving, dry air.',
      },
      {
        q: 'Can tile dust get in your eyes and cause irritation?',
        a: 'Yes. Dust from cutting tile, stone or laminate and powder from thinset or grout can land on the eye and make it feel gritty. Eye protection and cutting outside or in a separate area help.',
      },
      {
        q: 'How can flooring installers rest their eyes on the job?',
        a: 'Build in short pauses: after each row or batch, sit back, look across the room and blink slowly a few times. Take breaks away from saws and vents.',
      },
      {
        q: 'Should I keep eye drops in my work truck?',
        a: 'Only if the cab stays within the label’s storage range, {storage}. A truck in winter or summer often doesn’t, so a jacket pocket or lunch bag is usually better.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-auto-body-technicians',
    title: 'Dry eyes for auto body and collision techs',
    description:
      'Sanding filler, paint booth airflow and inspection lights all dry out eyes. A guide for auto body and collision repair technicians.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Auto body and collision technicians deal with sanding dust from filler and paint, strong airflow in paint booths and prep stations, heat from curing lamps, and long stretches of staring at reflections to find dents and color mismatches. Wear the eye and face protection your shop requires, wash up before touching your eyes, look away and blink between tasks, use a lubricating drop as its label directs on a clean break, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'How body work differs from mechanical work' },
      {
        p: `Mechanics deal with grease, fluids and looking up under vehicles; our guide for [auto mechanics](/guides/dry-eyes-for-mechanics) covers that. Body work brings a different set of eye stressors: abrasive dust, high-volume airflow, heat lamps, solvents and very bright, very detailed visual inspection. The tear film, the thin layer of mucus, water and oil over each eye, thins faster with every one of them.`,
      },
      { h: 'Sanding filler and primer' },
      {
        p: `Shaping body filler and sanding primer throws off fine dust, a lot of it right at chest and face height when you’re working a door or quarter panel. Dual-action sanders spread it in every direction.`,
      },
      {
        list: [
          `Keep eye protection on through every sanding step, including the final passes by hand.`,
          `Use a sander hooked up to dust extraction where the shop has it.`,
          `Blow off or vacuum the panel before you lean in to inspect it, not after.`,
          `Wash your hands and face before breaks, so dust doesn’t go from your fingers to your eyes.`,
        ],
      },
      { h: 'Paint booths and prep stations' },
      {
        p: `Booths and prep decks are designed to move a large volume of air to carry overspray away. That steady airflow passes across your face the whole time you’re inside. Add a hood or mask that changes how you breathe and blink, and a long session of spraying or blending can leave eyes dry and stinging afterward. Follow your shop’s rules for respirators and face protection, and take a few minutes outside the booth between coats when you can. If your eyes sting during spraying, stop and check your gear and the booth’s airflow with your supervisor.`,
      },
      { h: 'Curing lamps and heat' },
      {
        p: `Infrared and heat lamps speed up curing, and they also dry the air and warm the skin around your eyes. Avoid standing close in front of a running lamp to check a panel. Inspect once the lamp is off or moved away.`,
      },
      { h: 'Reading reflections for dents and color match' },
      {
        p: `A lot of body work is looking: sighting down a panel to see where a reflection waves, checking metallic color under a color-matching light, or comparing a blend at different angles. That kind of staring keeps your eyes open and still, and blinks drop off. Make a habit of a short reset every few minutes: look across the shop at something far away and blink slowly and fully a few times. It also gives you a fresher look when you turn back to the panel.`,
      },
      { h: 'Solvents, cleaners and fumes' },
      {
        p: `Wax and grease removers, reducers and cleaners give off vapors that can make eyes sting or water, especially in a closed bay. Use them where the shop’s ventilation is working, keep containers closed, and follow each product’s label. If a solvent splashes in your eye, it’s an emergency: flush at an eyewash station for as long as the station’s instructions say and get medical care. Don’t use a lubricating drop in place of flushing.`,
      },
      { h: 'Using a drop at work' },
      {
        p: `For ordinary dryness from dust and airflow, Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `Use it on a break, away from the booth and the sanding area.`,
          `Wash your hands first; filler dust and solvent residue shouldn’t go near your eyes.`,
          `Keep the tip clean, as the label says: {tip}.`,
          `Store it in your locker or bag, not on a cart near heat lamps. The label’s range is {storage}.`,
        ],
      },
      {
        p: `There is also a caution printed on the panel: {warnings}. Read the full label on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'If something gets in your eye' },
      {
        p: `A speck of filler, a metal fragment from grinding or a splash of chemical needs rinsing, not a drop. Flush with clean water or the shop eyewash, don’t rub, and get medical care if anything remains, if you feel pain, or if your vision is blurry. Metal from grinding can embed in the eye and needs prompt attention. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains when not to wait.`,
      },
      { h: 'Getting Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, home or shop. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise delivery dates, so order before your last bottle runs out. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
      { h: 'When dryness needs a professional' },
      {
        p: `Shop dryness usually eases on days off. If yours doesn’t, or if you have symptoms from the label’s list, make an appointment: {stopUse} An eye doctor can find the cause and decide what to do. [Welders](/guides/dry-eyes-for-welders) and [house painters](/guides/dry-eyes-for-house-painters) share some of the same exposures and have their own guides.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a body shop?',
        a: 'Sanding dust, the strong airflow in paint booths and prep stations, heat from curing lamps and long periods of focused inspection all speed evaporation from the tear film or irritate the eye surface.',
      },
      {
        q: 'Can paint booth air dry out your eyes?',
        a: 'It can add to dryness. Booths move a large volume of air to carry overspray away, and that steady airflow passes across your face. Breaks outside the booth and the face protection your shop requires help.',
      },
      {
        q: 'What should I do if body filler dust gets in my eye?',
        a: 'Don’t rub. Blink and rinse with clean water or an eyewash station. If something still feels stuck, or there is pain or blurry vision, get it checked promptly.',
      },
      {
        q: 'Can I use eye drops after a solvent splash?',
        a: 'No. A chemical splash needs immediate flushing at an eyewash station and medical care. A lubricating drop is for ordinary dryness, not for washing out chemicals.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for what-happens-to-unused-fsa-money:
   * - IRS Publication 969 (https://www.irs.gov/publications/p969), "For use in
   *   preparing 2025 Returns": "FSAs are generally 'use-it-or-lose-it' plans";
   *   amounts at the end of the plan year "can't generally be carried over";
   *   grace period "of up to 2 1/2 months after the end of the plan year";
   *   carryover of a capped amount (figure in the publication, not typed here,
   *   since prices/dollar figures are never typed); "any unused amounts in excess
   *   of the carryover amount are forfeited"; "A plan adopting a carryover
   *   provision is not permitted to also provide a grace period with respect to
   *   health FSAs"; "Your employer isn't permitted to refund any part of the
   *   balance to you"; OTC medicine "whether or not prescribed" is covered;
   *   "The FSA can't make advance reimbursements of future or projected expenses."
   * - fsafeds.gov returned 403 today; nothing from it is stated.
   */
  {
    slug: 'what-happens-to-unused-fsa-money',
    title: 'What happens to unused FSA money?',
    description:
      'IRS Publication 969 calls FSAs use-it-or-lose-it plans. What happens to leftover money at year end, and how to check your plan before you buy eye drops.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Unused money in a health FSA is generally forfeited at the end of the plan year. IRS Publication 969 calls FSAs “use-it-or-lose-it” plans, but lets an employer add either a grace period of up to 2½ months or a limited carryover, not both. Your employer can’t refund the leftover balance to you. Check your plan’s deadline now, and spend on eligible items, such as over-the-counter eye drops, before it passes.`,
      },
      { h: 'Do FSA funds expire December 31?' },
      {
        p: `Only if your plan year ends December 31. Many do, because they follow the calendar, but some employers run a plan year that starts in July or another month. The rule in Publication 969 is tied to “the end of the plan year,” not to a date on the calendar. Find your plan year in your benefits portal, your enrollment confirmation or the summary plan description, or ask your plan administrator.`,
      },
      { h: 'The three ways a plan can handle leftovers' },
      {
        p: `Publication 969 describes what a plan may do with money left at year end. Your employer chooses one approach:`,
      },
      {
        list: [
          `No grace period and no carryover: anything unspent when the plan year ends is forfeited.`,
          `A grace period: up to 2½ extra months after the plan year ends to incur new expenses and pay them from last year’s balance.`,
          `A carryover: a capped amount, set each year by the IRS and listed in Publication 969, can roll into the next plan year. Anything above the cap is forfeited. The plan may set a lower cap.`,
        ],
      },
      {
        p: `The publication is explicit that a health FSA can’t offer both a carryover and a grace period. Our guide to [FSA carryover and grace periods](/guides/fsa-carryover-and-grace-period-for-eye-drops) goes into how each works for an eye drop purchase.`,
      },
      { h: 'Can you get unused FSA money back?' },
      {
        p: `No. Publication 969 says your employer isn’t permitted to refund any part of the balance to you. That’s the core difference from an HSA, where the money is yours and stays in the account from year to year. If you have both kinds of accounts or are deciding between them, see [FSA vs. HSA for eye drops](/guides/fsa-vs-hsa-for-eye-drops).`,
      },
      { h: 'Where does forfeited FSA money go?' },
      {
        p: `It stays with the plan rather than coming back to you. How the employer handles forfeited amounts is a plan matter; if you’re curious, the summary plan description or your benefits office can explain it. What matters for you is the practical point: a balance you don’t use, or carry over within your plan’s limit, is gone.`,
      },
      { h: 'How to check your balance and deadline' },
      {
        list: [
          `Log in to your FSA administrator’s website or app and find your current balance.`,
          `Look for the plan year end date, and whether your plan has a grace period or a carryover.`,
          `Check the claim filing deadline too. Many plans give extra time after the plan year to submit claims for expenses you already had, which is separate from a grace period.`,
          `Ask your plan administrator if any of this is unclear. Plans vary, and theirs is the answer that counts.`,
        ],
      },
      { h: 'Do eye drops count for FSA money?' },
      {
        p: `Publication 969 lists over-the-counter medicine, “whether or not prescribed,” among expenses a health FSA can cover. Lubricating eye drops sold over the counter fall into that group, though your plan’s own rules and documentation requirements still apply. Some cards approve purchases automatically; other times you pay and submit a claim with an itemized receipt. Our guide on [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains the background.`,
      },
      { h: 'Spending down a balance without waste' },
      {
        p: `Publication 969 also says an FSA can’t make advance reimbursements of future or projected expenses, so the purchase has to be a real expense incurred during the coverage period. A sensible approach is to buy what you’ll actually use. Quell comes in a {size} bottle, and its label directs: {directions}. Use that to estimate how many bottles you’ll go through over the next few months, and keep in mind the storage line: {storage}. Our page on [how many bottles to order](/guides/how-many-bottles-to-order) can help.`,
      },
      { h: 'Ordering Quell with FSA money' },
      {
        p: `Checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We ship from Brentwood, Tennessee, and don’t promise a delivery date, so if your plan year ends December 31, don’t leave the order for the last days of the month; confirm with your administrator which date your plan uses for a purchase. Your order confirmation email serves as your receipt. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back; if you paid with FSA money, check with your administrator about how to handle a refund. [Order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Do FSA funds expire December 31?',
        a: 'Only if your plan year ends on December 31. IRS Publication 969 ties the deadline to the end of the plan year, and some plans also allow a grace period of up to 2½ months or a limited carryover. Check your plan’s documents or ask the administrator.',
      },
      {
        q: 'Can my employer give me back my unused FSA money?',
        a: 'No. IRS Publication 969 says the employer isn’t permitted to refund any part of the balance to you. Unused money is forfeited unless your plan has a grace period or a carryover.',
      },
      {
        q: 'Can an FSA have a grace period and a carryover?',
        a: 'Not for a health FSA. Publication 969 says a plan that adopts a carryover isn’t permitted to also provide a grace period. Your plan documents say which one, if either, applies.',
      },
      {
        q: 'Can I use leftover FSA money on eye drops?',
        a: 'Over-the-counter medicine is listed in Publication 969 as a health FSA expense, whether or not it is prescribed. Your plan’s rules and receipt requirements still apply, so check with the administrator if a card purchase is declined.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for can-you-add-to-your-hsa-after-december-31:
   * - IRS Publication 969 (https://www.irs.gov/publications/p969), "For use in
   *   preparing 2025 Returns": "You can make contributions to your HSA for 2025
   *   through April 15, 2026." "Your employer must notify you and the trustee of
   *   your HSA that the contribution is for 2025." Tax-free distributions "to pay
   *   or be reimbursed for qualified medical expenses you incur after you establish
   *   the HSA." "You don't have to make withdrawals from your HSA each year."
   *   "Amounts that remain at the end of the year are generally carried over to the
   *   next year." Eligibility: covered under an HDHP "on the first day of the month."
   * - The 2026 deadline is not stated as a date; the guide says to check the
   *   edition for the tax year.
   */
  {
    slug: 'can-you-add-to-your-hsa-after-december-31',
    title: 'Can you add to your HSA after December 31?',
    description:
      'IRS Publication 969 lets you contribute to an HSA for a tax year until the April filing deadline. What that means for year-end eye drop purchases.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Yes. IRS Publication 969 lets you make HSA contributions for a tax year after December 31, up to the April tax-filing deadline; its current edition says 2025 contributions could be made through April 15, 2026. Your HSA money also doesn’t expire at year end. So a December eye drop purchase doesn’t have to be rushed, and you can reimburse yourself later, as long as the expense came after your HSA was established.`,
      },
      { h: 'The HSA contribution deadline' },
      {
        p: `The current edition of Publication 969, written for 2025 returns, says you can make contributions to your HSA for 2025 through April 15, 2026. In practice, that means the window for a given tax year stays open into the following spring. The IRS updates the publication each year, so check the edition for the tax year you’re contributing for, and confirm the date with your HSA custodian.`,
      },
      {
        p: `If you make a contribution between January 1 and the deadline, tell your HSA custodian which year it’s for. Custodians usually ask when you contribute online. Publication 969 also notes that when an employer makes a contribution for the prior year, the employer must notify you and the trustee that it’s for that year.`,
      },
      { h: 'Who can still contribute for the year' },
      {
        p: `Contributing for a past year doesn’t change who was eligible during it. Publication 969 ties eligibility to being covered by a high deductible health plan on the first day of a month, along with other conditions, and has its own rules for people who were eligible for only part of the year. If your coverage changed during the year, read the publication’s section on contribution limits or ask a tax professional before adding money for that year.`,
      },
      { h: 'Does HSA money expire at the end of the year?' },
      {
        p: `No. Publication 969 says amounts that remain at the end of the year are generally carried over to the next year. Unlike a health FSA, there’s no use-it-or-lose-it deadline on December 31. Our guide on [whether HSA money rolls over](/guides/does-hsa-money-roll-over) covers this in more depth, and [what happens to unused FSA money](/guides/what-happens-to-unused-fsa-money) explains the FSA side.`,
      },
      { h: 'Buying eye drops in December with an HSA' },
      {
        p: `Because the money carries over, there’s no reason to stock up just because the year is ending. Buy what you’ll use. A stash of extra bottles bought in a December rush still has to be stored within the label’s range, {storage}, and each carton carries its own expiration date, so a supply sized to the next few months usually makes more sense than a year’s worth. If you’re short in your HSA today, you have options:`,
      },
      {
        list: [
          `Wait until your next contribution lands, then pay with the HSA card. Checkout here charges one card for the whole order, so you can’t split it between cards.`,
          `Pay with a personal card now, keep the receipt, and reimburse yourself from the HSA later.`,
          `Add a contribution for the current tax year before the April deadline, then reimburse yourself.`,
        ],
      },
      { h: 'Reimbursing yourself later' },
      {
        p: `Publication 969 says you can receive tax-free distributions to pay or be reimbursed for qualified medical expenses you incur after you establish the HSA, and that you don’t have to make withdrawals each year. That combination is what makes paying out of pocket and reimbursing later work. The key limit is the start date: an expense from before the account was established doesn’t qualify. Our guide on [reimbursing yourself from an HSA](/guides/reimburse-yourself-from-hsa-for-eye-drops) walks through the steps.`,
      },
      { h: 'Keeping records' },
      {
        list: [
          `Save your order confirmation email; it shows the item, the date and the amount.`,
          `Note which purchases you paid for personally and plan to reimburse later.`,
          `Keep the records with your tax papers, since the IRS may ask you to show that a distribution paid for a qualified expense.`,
        ],
      },
      {
        p: `See [do I need to keep receipts for HSA eye drops](/guides/do-i-need-to-keep-receipts-for-hsa-eye-drops) for more on what to save.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell is a {size} bottle of lubricating eye drops, and the label directs: {directions}. Checkout is as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. We ship from Brentwood, Tennessee, without a promised delivery date. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Rules for HSAs come from the IRS and from your custodian, and neither is something we can decide for you, so check with your custodian or a tax professional if you’re unsure. [Order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Can I contribute to my HSA for last year in January?',
        a: 'Yes, up to the tax-filing deadline. IRS Publication 969’s current edition says 2025 contributions could be made through April 15, 2026. Tell your HSA custodian which year the contribution is for.',
      },
      {
        q: 'What is the HSA contribution deadline?',
        a: 'Publication 969 ties it to the April tax-filing date for the year. The edition for 2025 returns gives April 15, 2026 for 2025 contributions. Check the edition for your tax year and confirm with your custodian.',
      },
      {
        q: 'Should I spend my HSA before December 31?',
        a: 'There’s no need to. Publication 969 says HSA amounts left at the end of the year are generally carried over, so buy eye drops when you need them rather than stocking up.',
      },
      {
        q: 'Can I pay for eye drops now and use my HSA later?',
        a: 'Generally yes, if the purchase came after your HSA was established. Publication 969 allows tax-free reimbursement for qualified expenses incurred after the account was set up, and you don’t have to take withdrawals every year. Keep the receipt.',
      },
    ],
  },
  {
    slug: 'how-can-i-tell-whats-making-my-eyes-dry',
    title: 'How can I tell what’s making my eyes dry?',
    description:
      'Track when, where and what you were doing each time your eyes feel dry. A simple two-week log that points to the culprit and helps your eye doctor.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `The most reliable way to tell what’s drying your eyes is to keep a short log for a week or two: each time your eyes feel dry, note the time, the place, what you were doing, the air around you and how long it lasted. Patterns show up quickly, such as screens, a heater vent, the car or the bedroom. Change one thing at a time, and bring the log to an eye doctor if the dryness persists or worries you.`,
      },
      { h: 'Why guessing doesn’t work well' },
      {
        p: `Dry eyes usually have more than one contributor, and they overlap. You might spend the morning at a laptop under an office vent, drive home with the heater on, then read on your phone in bed. By evening your eyes feel gritty, and it’s hard to say which part of the day did it. Memory is also unreliable; people tend to blame whatever they did last. A written record, even a few words per entry, beats recollection.`,
      },
      { h: 'What to write down each time' },
      {
        p: `Keep it short enough that you’ll actually do it. A notes app, a pocket notebook or a calendar entry works. For each episode, jot down:`,
      },
      {
        list: [
          `The time of day, and how long the feeling lasted.`,
          `Where you were: desk, car, kitchen, bedroom, outdoors, a store.`,
          `What you were doing: screen work, reading, driving, cooking, exercising, sleeping.`,
          `The air: heat or AC running, a fan on, a vent nearby, windy outside, a fireplace or space heater.`,
          `What it felt like: gritty, burning, tired, watery, itchy, blurry.`,
          `What you did about it, and whether it helped: a break, blinking, moving away from a vent, a drop.`,
        ],
      },
      {
        p: `Also note anything unusual that day: a late night, a long flight, a new makeup or face product, a dusty chore.`,
      },
      { h: 'Patterns to look for after a week' },
      {
        list: [
          `Mostly at the end of screen sessions: blinking is likely a big factor. Screens reduce how often and how completely people blink.`,
          `Mostly in one room or one car: that space’s airflow is the suspect. Look for vents, fans and heaters aimed at your face.`,
          `Worst on waking: bedroom air, a ceiling fan or a vent over the bed may be involved. See [dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up).`,
          `Mostly outdoors on windy or bright days: wind and glare speed evaporation and make you squint.`,
          `Worse on weekdays than weekends, or the reverse: compare what changes between them.`,
          `No pattern at all, or getting steadily worse: that’s a reason to see an eye doctor sooner.`,
        ],
      },
      { h: 'Test one change at a time' },
      {
        p: `Once you have a suspect, change just that one thing for several days and keep logging. Point the car vents at your chest. Move your desk chair out of the vent’s path. Set a reminder to look away from the screen every so often. Run a humidifier in the bedroom. If you change four things at once and feel better, you won’t know which one mattered, and you may keep doing three you don’t need.`,
      },
      { h: 'How the tear film explains most of what you’ll find' },
      {
        p: `The front of your eye is covered by a thin tear film with three layers: mucus against the eye, water in the middle and oil on top that slows evaporation. Blinking spreads a fresh coat. Anything that dries the air, moves air across the eye or cuts down on blinking lets the film thin faster between blinks. That’s why the usual suspects in a log are so consistent: screens, heat, air conditioning, wind, fans and long periods of concentration. Our guide to [what makes dry eyes worse](/guides/what-makes-dry-eyes-worse) lists more.`,
      },
      { h: 'Where a drop fits in' },
      {
        p: `A lubricating drop doesn’t replace the detective work, but it can sit alongside it. If you use one, log it like anything else: when you used it and how your eyes felt afterward. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions: {directions}. Follow that schedule rather than adding drops whenever you feel something, and the log will show you whether your routine is helping. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Bring the log to your eye doctor' },
      {
        p: `A week or two of notes is exactly the kind of information an eye doctor can use. It shows when symptoms happen, what seems to set them off, and what you’ve already tried. Bring the names of any drops or products you use, too. An eye doctor can find the cause and decide what to do; your log just makes the conversation faster and more specific. Our list of [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) pairs well with it.`,
      },
      { h: 'Signs that don’t need a log' },
      {
        p: `Some symptoms call for prompt care rather than a week of notes: sudden vision changes, eye pain, an injury, something stuck in the eye, or one eye suddenly much worse than the other. The label’s own stop-use list reads: {stopUse} Our [self-check](/self-check) can help you organize what you’ve noticed, though it’s not a diagnosis, and [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains when not to wait.`,
      },
    ],
    faq: [
      {
        q: 'How do I figure out what is causing my dry eyes?',
        a: 'Keep a short log for one to two weeks: note the time, place, activity, air conditions and how your eyes felt each time. Look for patterns, change one thing at a time, and bring the log to an eye doctor if dryness persists.',
      },
      {
        q: 'What should I write in a dry eye diary?',
        a: 'For each episode, write the time and duration, where you were, what you were doing, whether heat, AC, a fan or wind was involved, what it felt like, and what you did about it.',
      },
      {
        q: 'How long should I track my dry eye symptoms?',
        a: 'A week or two is usually enough to see patterns. If symptoms are severe, sudden, painful or affect your vision, see an eye doctor promptly instead of waiting to collect notes.',
      },
      {
        q: 'Should I bring notes about my dry eyes to the eye doctor?',
        a: 'Yes. A record of when symptoms happen, what seems to trigger them and what you’ve tried gives the doctor specific information to work with. Bring the names of any drops you use as well.',
      },
    ],
  },
  {
    slug: 'eye-drops-for-sensitive-eyes',
    title: 'Eye drops for sensitive eyes: what to check',
    description:
      '“Sensitive eyes” can mean stinging, ingredient worries or light sensitivity. What to check on an eye drop label, and when sensitivity is a doctor question.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `If your eyes are sensitive, start by naming what that means for you. Stinging when drops go in, worry about specific ingredients, and sensitivity to light are different problems. For the first two, read the Drug Facts panel closely: the active and inactive ingredients, the warnings, and whether the product is preservative-free. Light sensitivity, or eyes that react to everything, is a reason to see an eye doctor before buying more drops.`,
      },
      { h: 'What do people mean by “sensitive eyes”?' },
      {
        p: `The phrase gets used for several things, and each points in a different direction:`,
      },
      {
        list: [
          `Drops sting or burn when they go in.`,
          `You’ve reacted to a product before and want to avoid certain ingredients.`,
          `Your eyes water, itch or feel irritated easily in wind, smoke or dry air.`,
          `Bright light bothers you more than it used to.`,
          `Your eyes feel uncomfortable much of the time without an obvious reason.`,
        ],
      },
      {
        p: `The first three are often about the product or the environment. The last two deserve a professional opinion, because a drop doesn’t address them and they can have causes that need an exam.`,
      },
      { h: 'Read the whole Drug Facts panel' },
      {
        p: `Every over-the-counter eye drop has a Drug Facts panel. For a sensitive reader, every section matters. The active ingredients list what the product is for. The inactive ingredients list everything else in the bottle. The warnings say who should be careful and when to stop. Our walk-through of [the active ingredients section](/guides/the-active-ingredients-section) and [the inactive ingredients section](/guides/the-inactive-ingredients-section) explains how to read them.`,
      },
      {
        p: `As an example, Quell’s panel lists its active ingredients as {actives}, and its inactive ingredients as {inactives}. Its warning line reads: {warnings}. If you know you react to any listed ingredient, or you have an allergy the warning mentions, that’s a reason to skip a product or ask a pharmacist first.`,
      },
      { h: 'Preservatives and sensitive eyes' },
      {
        p: `Many multi-dose bottles include a preservative to keep the contents from becoming contaminated once opened. Some people prefer to avoid preservatives altogether, and whether that matters for your eyes is a fair question for an eye doctor or pharmacist. Quell is sold as a preservative-free lubricating eye drop. Our guide to [what preservative-free means](/guides/what-does-preservative-free-mean) explains the term, and [are preservative-free eye drops worth it?](/guides/are-preservative-free-eye-drops-worth-it) covers the trade-offs.`,
      },
      { h: 'When drops sting' },
      {
        p: `A drop that stings can be telling you several things: the product may not agree with you, the eye surface may already be irritated, or the drop may be colder than your eye. It’s worth knowing which it is. If stinging is mild and fades within moments, that’s different from burning that lingers or comes with lasting discomfort. Our guide on [why eye drops sting](/guides/why-do-eye-drops-sting) goes further. Persistent irritation after a drop is a reason to stop and check with a doctor, as the label’s stop-use list says: {stopUse}`,
      },
      { h: 'Ask a pharmacist before you buy' },
      {
        p: `If you’re unsure, a pharmacist can look at a label with you for free. Bring a list of anything you’ve reacted to before and any eye drops or medicines you use. Our [questions to ask a pharmacist](/guides/questions-to-ask-your-pharmacist) page has a list to bring. Some situations aren’t covered by an over-the-counter label at all: contact lens wear, children, using one drop with another, or recent eye surgery. In those cases, ask your eye doctor or pharmacist what fits.`,
      },
      { h: 'Gentle habits for easily irritated eyes' },
      {
        list: [
          `Keep heat and air-conditioning vents, fans and car vents from blowing on your face.`,
          `Wear wraparound sunglasses outdoors in wind and bright sun.`,
          `Wash your hands before touching your eyes or using drops.`,
          `Don’t share eye drops or eye makeup with anyone.`,
          `Follow the label’s handling line: {tip}.`,
          `Stop using any product that changes color, as the panel says: {doNotUse}.`,
        ],
      },
      { h: 'When sensitivity means see a doctor' },
      {
        p: `Light sensitivity, pain, a change in vision, discharge, or irritation that doesn’t settle aren’t things to manage by trying one drop after another. An eye doctor can find the cause and decide what to do. Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) list covers the signs to act on, and the [self-check](/self-check) can help you organize your symptoms, though it’s not a diagnosis.`,
      },
      { h: 'If you decide to try Quell' },
      {
        p: `Read the full panel on our [Drug Facts page](/drug-facts) first. The directions say: {directions}. The label also notes: {milky}. That look is expected. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. If you buy a bottle and decide not to open it, unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
    ],
    faq: [
      {
        q: 'What should I look for in eye drops if I have sensitive eyes?',
        a: 'Read the whole Drug Facts panel: active and inactive ingredients, warnings and whether the product is preservative-free. Skip anything with an ingredient you’ve reacted to, and ask a pharmacist if you’re unsure.',
      },
      {
        q: 'Are preservative-free eye drops better for sensitive eyes?',
        a: 'Some people prefer them, especially if they use drops regularly. Whether they’re right for your eyes is a question for your eye doctor or pharmacist.',
      },
      {
        q: 'What does it mean if my eyes are sensitive to light?',
        a: 'Light sensitivity can have many causes, and it isn’t something an over-the-counter lubricating drop addresses. If it’s new, worsening or comes with pain or vision changes, see an eye doctor.',
      },
      {
        q: 'Can a pharmacist help me choose eye drops for sensitive eyes?',
        a: 'Yes. Bring a list of anything you’ve reacted to and any eye drops or medicines you use. A pharmacist can read labels with you and tell you when a question belongs with your eye doctor.',
      },
    ],
  },
  {
    slug: 'can-blinking-more-replace-eye-drops',
    title: 'Can I blink more instead of using eye drops?',
    description:
      'Blinking spreads the tear film, and screens cut how often you do it. What better blinking habits can and can’t do, and where a lubricating drop fits.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Blinking more often and more completely can help when your eyes feel dry from screens or concentration, because each blink spreads a fresh coat of tears across the eye. But blinking can’t change dry, heated or windy air, and it isn’t a substitute for an eye exam. For many people the answer is both: better blinking habits plus a lubricating drop used as its label directs, and a doctor visit if dryness persists.`,
      },
      { h: 'What a blink actually does' },
      {
        p: `The tear film has three layers: mucus against the eye, water in the middle and a thin layer of oil on top that slows evaporation. Each blink sweeps the lids across the eye, spreading the layers out again and refreshing the surface. Between blinks, the film slowly thins. If the gap between blinks is long, or the blink doesn’t close all the way, parts of the surface can start to feel dry. Our guide to [how blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      { h: 'Why screens change how you blink' },
      {
        p: `When you concentrate on a screen, a book, a spreadsheet or a road, you tend to blink less often. Many blinks also become partial, with the lids not fully meeting. Both leave the tear film more time to thin. That’s why screen-heavy days so often end with gritty, tired-feeling eyes, and why blinking habits get so much attention in advice for desk workers. More on this in [screens and your tear film](/guides/screens-and-your-tear-film).`,
      },
      { h: 'Blinking habits worth trying' },
      {
        list: [
          `Every so often during screen work, look away at something across the room and blink slowly and fully a few times.`,
          `Make a full blink a deliberate act now and then: close gently until the lids meet, pause, then open.`,
          `Set a timer or app reminder for the first week or two until the habit sticks.`,
          `Put your screen slightly below eye level so your eyes aren’t opened as wide.`,
          `Use natural break points, like sending an email or finishing a page, as cues to blink and look away.`,
        ],
      },
      {
        p: `These habits cost nothing, and you’ll know within days whether they make a difference for you. Our guide to [how often to take a break from screens](/guides/how-often-should-i-take-a-break-from-screens) has more ideas.`,
      },
      { h: 'What blinking can’t do' },
      {
        p: `Blinking refreshes the tear film you have; it doesn’t change the air around you. If your eyes dry out because a heater vent blows across your desk, the car’s fan is aimed at your face, or you sleep under a ceiling fan, more blinking only partly keeps up. Those need the source fixed: redirect the vent, turn down the fan, or add a humidifier. And blinking won’t address eye pain, vision changes or dryness with an underlying cause. Those belong with an eye doctor.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `It doesn’t have to be one or the other. A lubricating drop adds to the tear film from outside, while blinking spreads and refreshes it. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions read: {directions}. Some people find a regular routine with a drop plus better blinking habits works for them, while others find that habits and fixing the air are enough. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Should you blink after putting in a drop?' },
      {
        p: `It’s a common question, and it has its own guide: [should you blink after putting in eye drops?](/guides/should-you-blink-after-putting-in-eye-drops) Whatever you do right after, follow the label’s handling line: {tip}.`,
      },
      { h: 'How to tell which approach is helping' },
      {
        p: `Try the blinking habits on their own for several days and notice how your eyes feel at the end of the day. If you use a drop, use it as the label directs rather than whenever you remember. Writing down how your eyes feel each evening makes it easier to see what’s working. If nothing changes after a couple of weeks, or things get worse, it’s time for an exam rather than more experiments. Our guide on [dry eyes for two weeks](/guides/dry-eyes-for-two-weeks) covers that point.`,
      },
      { h: 'When neither is enough' },
      {
        p: `Blinking and drops are for everyday dryness. The label says to stop and ask a doctor in these cases: {stopUse} Light sensitivity, a feeling that something is stuck in the eye, or one eye much worse than the other also call for an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Can blinking replace eye drops?',
        a: 'It can help when dryness comes from screens or concentration, since each full blink spreads a fresh coat of tears across the eye. It doesn’t change dry or windy air, and it isn’t a substitute for an eye exam.',
      },
      {
        q: 'What is a full blink?',
        a: 'A blink where the upper and lower lids fully meet before opening again. During focused screen work many blinks become partial, so a slow, deliberate full blink now and then helps refresh the tear film.',
      },
      {
        q: 'Can I use blinking habits and eye drops together?',
        a: 'Yes. They work differently: blinking spreads and refreshes the tear film, and a lubricating drop adds to it. If you use a drop, follow the label’s directions.',
      },
      {
        q: 'Why do I blink less when I look at a screen?',
        a: 'Concentrating on a screen, a book or the road tends to lower how often you blink, and many blinks become partial. Regular breaks to look away and blink fully help counter it.',
      },
    ],
  },
  {
    slug: 'quell-eye-drops-ingredients-list',
    title: 'Quell eye drops ingredients: the full list',
    description:
      'Every ingredient in Quell, as printed on its Drug Facts panel: three actives with their stated purposes, the full inactive list, and what each tells you.',
    category: 'formula',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Quell’s Drug Facts panel lists three active ingredients, {actives}, and {inactiveCount} inactive ingredients: {inactives}. The actives carry a stated purpose on the label, and the inactives are listed in alphabetical order. The bottle holds {size}. Everything below comes from the printed panel, which is reproduced on our Drug Facts page.`,
      },
      { h: 'Where the ingredient list lives on the box' },
      {
        p: `Over-the-counter drugs carry a standard Drug Facts panel, and ingredients appear in two places on it. The active ingredients sit at the top, each with its strength and its Purpose. The inactive ingredients sit near the bottom, after the directions and other information. Quell’s full panel, word for word, is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'The three active ingredients' },
      {
        p: `The panel lists {actives}. The figures in parentheses are the strengths printed on the carton. Each active also has a Purpose: on Quell’s label, the first two are listed as Lubricant and the third as Emollient. Those Purpose words describe the role each active plays as the label states it, and the label’s Uses statement, {uses}, describes what the product as a whole is for.`,
      },
      {
        p: `Each active has its own explainer: [glycerol](/guides/glycerol-in-eye-drops), [polysorbate 80](/guides/polysorbate-80-in-eye-drops) and [light mineral oil](/guides/light-mineral-oil-in-eye-drops). If the Purpose words are unfamiliar, [what Purpose means on a Drug Facts label](/guides/what-does-purpose-mean-on-a-drug-facts-label) covers them.`,
      },
      { h: 'The inactive ingredients' },
      {
        p: `The inactive list reads: {inactives}. That’s {inactiveCount} ingredients, set out alphabetically, which is why sterile water appears near the end rather than first even though it’s the base of a liquid drop. “Inactive” doesn’t mean unimportant. It means the ingredient isn’t one of the ones the label lists as active for the product’s stated use.`,
      },
      {
        p: `Several of them have their own guides on this site, including [emu oil](/guides/emu-oil-in-eye-drops), [manuka honey](/guides/manuka-honey-in-eye-drops), [Dead Sea salt](/guides/dead-sea-salt-in-eye-drops), [caprylyl glycol](/guides/caprylyl-glycol-in-eye-drops) and [sterile water](/guides/sterile-water-in-eye-drops).`,
      },
      { h: 'Reading the list on a small carton' },
      {
        p: `A {size} carton has a lot of text in a small space, and the ingredient lists are in fine print. If it’s hard to read, our Drug Facts page shows the same wording at a size you can zoom, or a pharmacist can read it with you at the counter. When you compare Quell’s ingredients with another product’s, go by each printed panel rather than a summary or a listing on a shopping site.`,
      },
      { h: 'Natural and oil-based ingredients' },
      {
        p: `Several inactives come from natural sources, and two of the ingredients, emu oil and light mineral oil, are oils. That mix of oil and water is part of why the label says: {milky}. The site adds: {appearance} Our guide to [the natural ingredients in Quell](/guides/natural-ingredients-in-quell) goes through the naturally derived ones.`,
      },
      { h: 'Ingredients and allergies' },
      {
        p: `The panel carries one caution about allergies: {warnings}. That line is the label’s own guidance. If you have an allergy to any ingredient on either list, or to something the warning mentions, check with a pharmacist or your doctor before using the product. Our guide for people with an [egg or bird allergy](/guides/egg-or-bird-allergy-and-quell) explains that warning in more detail.`,
      },
      { h: 'What the ingredient list doesn’t tell you' },
      {
        list: [
          `It doesn’t say whether the product is right for your eyes. That’s a question for an eye doctor.`,
          `It doesn’t give directions for contact lenses, children or use with other drops. Ask your eye doctor or pharmacist.`,
          `It doesn’t list amounts for the inactive ingredients. Only the actives carry printed strengths.`,
          `It doesn’t replace the warnings and stop-use sections, which say when to stop: {stopUse}`,
        ],
      },
      { h: 'How the ingredients relate to what Quell is for' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The tear film has an oil layer on top of a water layer, and the oil slows evaporation between blinks. Our guide to [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains that structure. The label’s directions for using it are: {directions}.`,
      },
      { h: 'Where to buy and read more' },
      {
        p: `Quell is sold online as a {size} bottle. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Storage, per the panel: {storage}. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. For a broader look at eye drop formulas in general, see [what eye drops are made of](/guides/what-are-eye-drops-made-of).`,
      },
    ],
    faq: [
      {
        q: 'What are the ingredients in Quell eye drops?',
        a: 'The active ingredients are {actives}. The inactive ingredients are {inactives}.',
      },
      {
        q: 'How many inactive ingredients does Quell have?',
        a: 'The Drug Facts panel lists {inactiveCount} inactive ingredients, in alphabetical order: {inactives}.',
      },
      {
        q: 'What is the purpose of each active ingredient in Quell?',
        a: 'On Quell’s Drug Facts panel, the first two active ingredients are listed with the Purpose Lubricant and the third with the Purpose Emollient. The actives are {actives}.',
      },
      {
        q: 'Does Quell contain oil?',
        a: 'Yes. Light mineral oil is one of the active ingredients and emu oil is one of the inactive ones. The label notes: {milky}. That look fits an oil-and-water formula.',
      },
    ],
  },
  {
    slug: 'the-before-and-after-picture-on-the-quell-box',
    title: 'The before-and-after picture on the Quell box',
    description:
      'The side of the Quell carton shows the tear film before and after, with terms like aqueous layer and meibum. What each caption and term means.',
    category: 'formula',
    addedOn: '2026-11-21',
    body: [
      {
        p: `The side of the Quell carton has a small before-and-after illustration of the tear film. The “before” caption reads: {oilBefore}. The “after” caption reads: {oilAfter}. Together they show what Quell is designed to do: reinforce the tear film’s oil layer to help reduce moisture loss. The terms in the captions, aqueous layer and meibum, are explained below.`,
      },
      { h: 'Where the picture is' },
      {
        p: `The illustration sits on the carton’s emu oil panel, separate from the Drug Facts panel on the back. The Drug Facts panel is the regulated part of the label, with the Uses, warnings and directions. The side panel is explanatory: it shows the idea behind the formula in a picture and a few words. When the two differ in level of detail, the Drug Facts panel is the one to follow for how to use the product. That panel is reproduced on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'The “before” caption, word by word' },
      {
        p: `The caption reads: {oilBefore}. It packs several terms into one line:`,
      },
      {
        list: [
          `“Water (Aqueous) Layer”: the middle layer of the tear film, the watery part. “Aqueous” simply means watery. Our guide to [the tear film’s water layer](/guides/the-tear-films-water-layer) explains what it does.`,
          `“evaporates”: water leaves the surface of the eye into the air between blinks.`,
          `“thin, unhealthy oil (Meibum) layer”: the outermost layer of the tear film is a thin film of oil. The carton uses “meibum” for that oil. Our guide [what is meibum?](/guides/what-is-meibum) covers the word.`,
        ],
      },
      {
        p: `Put together, the “before” side shows the problem the carton is addressing: when the oil layer on top is thin, it does a poorer job of slowing evaporation, and the water layer beneath it loses moisture.`,
      },
      { h: 'The “after” caption' },
      {
        p: `The “after” side reads: {oilAfter}. It matches the approved description used across this site: Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Note the careful wording. It says “help reduce,” and it’s about moisture loss from the tear film. It doesn’t promise how much or for how long, and it isn’t a statement about any eye condition.`,
      },
      { h: 'Why the oil layer gets the spotlight' },
      {
        p: `The tear film has three layers: mucus against the eye, water in the middle and oil on top. The oil layer is the thinnest, but it sits at the surface, where the tear film meets the air. That’s where evaporation happens. Dry, windy, heated or air-conditioned air speeds evaporation, and so do long stretches without blinking, like screen work. A picture that focuses on the oil layer is focusing on that exposed surface. Our guide to [the tear film’s oil layer](/guides/the-tear-films-oil-layer) goes deeper.`,
      },
      { h: 'The emu oil text beside it' },
      {
        p: `The same side panel carries a short paragraph about emu oil, one of Quell’s inactive ingredients: {emuOil} That text connects the ingredient to the picture: the panel describes emu oil in terms of the tear film’s oil layer. For the ingredient itself, see [emu oil in eye drops](/guides/emu-oil-in-eye-drops), and for every ingredient in one place, [Quell eye drops ingredients: the full list](/guides/quell-eye-drops-ingredients-list).`,
      },
      { h: 'How the picture relates to the Uses statement' },
      {
        p: `The Drug Facts panel states Quell’s Uses as: {uses}. The before-and-after picture explains the thinking behind the formula; the Uses statement is what the product is labeled for. Both point in the same direction, but if you’re deciding whether and how to use Quell, start with the Uses, the directions ({directions}) and the warnings ({warnings}).`,
      },
      { h: 'What the picture doesn’t show' },
      {
        list: [
          `It isn’t a picture of your eye, and it can’t tell you why your eyes feel dry. An eye doctor can find the cause and decide what to do.`,
          `It doesn’t cover contact lenses, children or using Quell with other drops. The label doesn’t give directions for those; ask your eye doctor or pharmacist.`,
          `It doesn’t replace the stop-use guidance: {stopUse}`,
        ],
      },
      { h: 'Seeing it for yourself' },
      {
        p: `If you have a carton, the illustration is on the side panel with the emu oil text. If you don’t, you can order a bottle: checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. The label also notes: {milky}. The site adds: {appearance} Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [See the bottle and order](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'What does the picture on the side of the Quell box mean?',
        a: 'It shows the tear film before and after. The before caption reads: {oilBefore}. The after caption reads: {oilAfter}.',
      },
      {
        q: 'What does aqueous layer mean on an eye drop box?',
        a: 'Aqueous means watery. The aqueous layer is the middle, watery layer of the tear film, between the mucus layer against the eye and the thin oil layer on top.',
      },
      {
        q: 'Is the side panel of the Quell box part of the Drug Facts?',
        a: 'No. The Drug Facts panel is on the back, with the Uses, warnings and directions. The side panel carries the emu oil text and the before-and-after illustration, which explain the idea behind the formula.',
      },
    ],
  },
]
