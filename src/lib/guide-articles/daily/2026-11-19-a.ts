import type { Guide } from '@/lib/guide-types'
export const DAILY_20261119_A: Guide[] = [
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-aurora-il:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid ARR; saved at .daily-job/acis1119/ARR.json and .daily-job/a/mint_ARR.json)
   *   (CHICAGO AURORA MUNICIPAL AP, elev 701 ft: Jan max 30.5 F, min 14.7 F;
   *   Feb max 34.9; Dec max 35.8, min 20.6; Jul max 84.4, min 61.8; precip Jan
   *   1.30 in (driest), May 4.06 (wettest), Jun 3.98; twelve monthly precip
   *   normals sum to 33.84 in; snowfall normal missing ("M"), not quoted)
   * - relhum23.txt / wndspd23.txt have no Aurora row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-aurora-il',
    title: 'Dry eye relief in Aurora, Illinois',
    description:
      'Aurora’s January highs average 30.5°F, so furnaces run for months. NOAA numbers for the Fox Valley and practical ways to keep dry eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Aurora mostly means managing heated indoor air. NOAA’s normals for the city’s municipal airport put January highs at 30.5°F, so furnaces run from late fall into spring, and the open fields west of town let wind reach your face. Keep vents off your eyes, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Aurora’s weather record' },
      {
        p: `The closest official record is NOAA’s 1991–2020 climate normals for Chicago Aurora Municipal Airport, as published through the National Weather Service’s NOWData. The airport is in Sugar Grove, a few miles west of the city, at about 700 feet, and it sits among the kind of flat cropland that surrounds the far-west suburbs. Its numbers:`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 30.5°F and a normal low of 14.7°F.`,
          `December averages a 35.8°F high and a 20.6°F low, and February a 34.9°F high.`,
          `July is the warmest month: a normal high of 84.4°F and a low of 61.8°F.`,
          `The twelve monthly precipitation normals add up to about 33.8 inches a year.`,
          `January is the driest month at 1.30 inches; May is the wettest at 4.06, with June close at 3.98.`,
        ],
      },
      {
        p: `The station’s record doesn’t include a snowfall normal, so this page doesn’t quote one. What matters most for eyes is the long stretch of cold months, because cold outdoor air is what your furnace has to warm.`,
      },
      { h: 'Winter in the Fox Valley: heat on, moisture down' },
      {
        p: `Air at 15°F holds very little water. When a furnace warms it to 70°F without adding moisture, its relative humidity drops sharply, and that drier air pulls water out of the tear film between blinks. That’s why so many people in Aurora notice scratchy, tired eyes in January and February even though nothing outdoors looks dry. The effect builds at night, when the heat runs and you aren’t blinking at all.`,
      },
      {
        list: [
          `Run a bedroom humidifier through the heating months and clean it as its manual directs.`,
          `Close or angle the floor register nearest your bed or desk chair.`,
          `Lower the thermostat a few degrees at night; cooler air from a furnace is a little less drying.`,
          `Point the car’s defroster at the windshield, not the cabin vents at your face.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room, and [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers sizing and placement.`,
      },
      { h: 'Open fields and wind west of town' },
      {
        p: `Head west past Orchard Road or out I-88 toward the county line and the subdivisions thin into corn and soybean ground. Flat, open land gives wind a long run with little to slow it, and in winter there’s no crop or leaf cover to break it. A walk across a big parking lot in February, a youth soccer game on an open field in April, or a bike ride on a farm road all put steady moving air across the eye’s surface, which speeds evaporation.`,
      },
      {
        p: `Wraparound sunglasses help more than flat lenses because they block wind from the sides. In colder months, a hat brim and a scarf pulled up to the cheekbones cut the airflow further. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas for the walk to the car.`,
      },
      { h: 'The Metra ride and long screen days' },
      {
        p: `Aurora is the end of the line for Metra’s BNSF route into Chicago, so plenty of residents spend a good part of the day on a heated train with a phone in hand, then at a desk. Concentrating on a screen slows the blink rate, and the blinks that do happen tend to be partial. Each full blink spreads a fresh layer of tears; a half-blink leaves the lower part of the eye exposed.`,
      },
      {
        list: [
          `Put the phone down at each station stop and look out the window for a few seconds.`,
          `At the desk, set the monitor slightly below eye level so your lids cover more of each eye.`,
          `Every so often, close your eyes gently for two seconds, then open them slowly.`,
        ],
      },
      {
        p: `[How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why a complete blink matters more than a fast one.`,
      },
      { h: 'Warehouse floors and plant shifts along I-88' },
      {
        p: `Distribution centers and manufacturing plants line the I-88 corridor through Aurora and its neighbors. Many are heated with overhead forced-air units in winter, and dock doors open and close all shift, swapping warm dry air for cold gusts. Dust from cardboard and pallets adds to it. If your station sits under a heater, ask whether it can be angled away, and keep a bottle in a jacket or locker rather than an unheated truck cab. Eye protection questions belong to your employer’s safety program.`,
      },
      { h: 'Summer along the Fox River' },
      {
        p: `July’s normal high of 84.4°F is warm rather than extreme, and summer is the wettest stretch of Aurora’s year. The drying in summer mostly happens indoors, in air-conditioned offices, stores and cars. Outdoors, the Fox River Trail and a paddle on the river bring glare off the water and a breeze. Sunglasses handle both, and moving the dashboard vents to aim at your chest keeps cold air off your face on the drive home.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Its directions are short: {directions}. One habit from the panel keeps the bottle clean: {tip}.`,
      },
      {
        p: `For storage the label says: {storage}. A car left in a commuter lot on a January day sits well below that range, so carry the bottle in an inside coat pocket or a bag that comes indoors with you. The full panel, including {actives} as the active ingredients, is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Aurora' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Aurora, Naperville, North Aurora, Montgomery and anywhere else in the US. You can check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles, and tracking arrives by email. We don’t promise a delivery date, so it’s worth reordering before you run low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Aurora page](/eye-drops/aurora-il) and the [Illinois page](/eye-drops/state/illinois) collect the local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness. The label draws the line: {stopUse} Sudden blurring, light sensitivity, or one eye far worse than the other is a reason to book an appointment, and an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth taking seriously.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Aurora, Illinois get in January?',
        a: `NOAA’s 1991–2020 normals for Chicago Aurora Municipal Airport give January a normal high of 30.5°F and a normal low of 14.7°F, making it the coldest month of the year there.`,
      },
      {
        q: 'What is the wettest month in Aurora, IL?',
        a: `May, with a normal of 4.06 inches at the municipal airport in Sugar Grove. June is close behind at 3.98 inches, while January is the driest month at 1.30.`,
      },
      {
        q: 'Why are my eyes so dry in Aurora in the winter?',
        a: `Furnaces warm very cold outdoor air without adding much moisture, so indoor relative humidity drops and tears evaporate faster. A humidifier and keeping vents off your face usually help more than anything outdoors.`,
      },
      {
        q: 'Does Quell ship to Aurora, Illinois?',
        a: `Yes. Orders go out from Brentwood, Tennessee, to Aurora and every other US address, with guest checkout and email tracking. No delivery date is promised, so order before your bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-modesto-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid MOD; saved at .daily-job/acis1119/MOD.json and .daily-job/a/mint_MOD.json)
   *   (MODESTO AP, elev 87 ft: Jul max 95.0 F, min 62.7 F; Aug max 93.5; Jun max
   *   89.7; Sep 89.1; Jan max 56.1, min 38.8; Dec max 56.2, min 38.6; precip Jan
   *   2.57 in (wettest), Dec 2.21, Feb 2.22; May 0.65, Jun 0.15, Jul 0.00, Aug
   *   0.01, Sep 0.06; May-Sep sum 0.87; twelve monthly normals sum to 12.27 in;
   *   snowfall missing, not quoted)
   * - relhum23.txt / wndspd23.txt have no Modesto row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-modesto-ca',
    title: 'Dry eye relief in Modesto, California',
    description:
      'Modesto’s July rainfall normal is 0.00 inches and its highs reach 95°F. NOAA’s numbers, orchard-season dust and everyday ways to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In Modesto, dry eyes follow the rainless half of the year. NOAA’s normals for Modesto Airport show 0.00 inches of rain in July and less than an inch from May through September combined, with July highs of 95°F. Add orchard-harvest dust and air-conditioned cars, and tears evaporate fast. Wear wraparound sunglasses, aim vents away from your face, use a lubricating drop as labeled, and see an eye doctor if symptoms persist.`,
      },
      { h: 'What the Modesto Airport record shows' },
      {
        p: `NOAA’s 1991–2020 climate normals for Modesto Airport, as published through the National Weather Service’s NOWData, describe a long dry season and a short wet one. The station sits on the city’s east side at about 87 feet above sea level, on the flat floor of the northern San Joaquin Valley.`,
      },
      {
        list: [
          `July’s normal precipitation is 0.00 inches, August’s is 0.01 and September’s 0.06.`,
          `May through September together normally get about 0.87 inches.`,
          `January is the wettest month at 2.57 inches, ahead of February (2.22) and December (2.21).`,
          `The twelve monthly normals add up to about 12.3 inches a year.`,
          `July has the hottest normal high at 95.0°F, with August at 93.5°F and June at 89.7°F.`,
          `January and December highs both sit near 56°F, with lows just under 39°F.`,
        ],
      },
      {
        p: `There’s no snowfall normal in the station’s record, which is unsurprising for a valley floor this low. For your eyes, the striking figure is how little rain falls for five straight months.`,
      },
      { h: 'Five dry months in a row' },
      {
        p: `From late spring to early fall, a Modesto day usually means bright sun, high heat in the afternoon and dry ground everywhere that isn’t irrigated. Normal highs stay at or above 89°F from June through September. Heat and sun speed evaporation from the eye’s surface, and glare makes people squint, which shortens and weakens each blink.`,
      },
      {
        list: [
          `Schedule yard work, runs and dog walks for the early morning, when the air is coolest.`,
          `Choose sunglasses that wrap around the sides of the face, so breeze and glare both stay out.`,
          `In the car, close or redirect the vents that point at your eyes and use recirculate on dusty days.`,
          `Indoors, keep the AC at a steady setting rather than blasting it cold, and keep fans from blowing across your face.`,
        ],
      },
      {
        p: `A bottle of drops left on the dashboard in this heat is a different matter. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why the glove box isn’t a good home in summer.`,
      },
      { h: 'Almond harvest and orchard dust' },
      {
        p: `Stanislaus County is orchard country, and much of the ground around Modesto is planted in almonds and walnuts. Late summer into fall, harvest crews shake nuts from the trees and sweep them up from orchard floors that have been kept dry for the job, which lifts fine dust into the air. Anyone who lives on the edge of town, drives the farm roads, or works the harvest notices it. Dust particles irritate the eye and give the tear film more to clear away.`,
      },
      {
        p: `Keep the car windows up when you pass a working orchard. If you work outdoors during harvest, wraparound protective eyewear does more than sunglasses, and your employer’s safety program sets what’s required. [Dry eyes for farmers](/guides/dry-eyes-for-farmers) covers field days in more detail.`,
      },
      { h: 'Along the Tuolumne and out to the foothills' },
      {
        p: `The Tuolumne River runs along the south side of downtown, and Modesto residents head east on weekends toward the foothill reservoirs and the Sierra. Water, wind on an open lake and higher elevation all add to what your eyes go through. A boat ride creates its own constant breeze, and glare comes off the water from below as well as from the sky. Bring sunglasses with side coverage and give your eyes short breaks in the shade.`,
      },
      { h: 'Winter in the valley' },
      {
        p: `The rain returns from November through March, and January highs near 56°F mean the heat comes on at night. Homes here use less heating than in colder climates, but space heaters and forced-air systems still dry a bedroom. Keep heaters pointed away from the bed, and keep the house from getting overheated. A small humidifier is worth trying if you wake with dry eyes in winter.`,
      },
      { h: 'Highway 99 and long commutes' },
      {
        p: `Highway 99 carries traffic north to Stockton and Sacramento and south to Turlock and Merced, and some Modesto drivers commute west toward the Bay Area. Long drives combine air conditioning, sun through the windshield and a fixed stare at the road. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the late commute home.`,
      },
      { h: 'Quell’s directions and storage' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes its use as: {uses}. {directions}. The panel also says: {tip}.`,
      },
      {
        p: `The label’s storage line matters in a Modesto summer: {storage}. A parked car passes the top of that range quickly in July, so keep the bottle in a bag that comes inside with you. You can read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Modesto' },
      {
        p: `We ship from Brentwood, Tennessee, to Modesto, Ceres, Riverbank, Salida and every other US address. Guest checkout is available, shipping costs {shipping}, and an order of {freeBottles} or more bottles ships free. Tracking comes by email, though we don’t promise an arrival date. If you change your mind, unopened bottles are refunded within {returnDays} days of delivery, and you keep them. See the [Modesto page](/eye-drops/modesto-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'Signs that call for an eye doctor' },
      {
        p: `Dryness from heat and dust should ease when the conditions do. If it doesn’t, the label is clear: {stopUse} An eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you put your symptoms into words before the visit, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Does it rain in Modesto in the summer?',
        a: `Barely. NOAA’s 1991–2020 normals for Modesto Airport list July at 0.00 inches and August at 0.01, and May through September together normally get less than an inch.`,
      },
      {
        q: 'How hot does Modesto get in July?',
        a: `July’s normal high at Modesto Airport is 95.0°F, the hottest month of the year, with a normal low of about 62.7°F. August follows at 93.5°F.`,
      },
      {
        q: 'Can almond harvest dust bother your eyes?',
        a: `It can. Shaking and sweeping orchards lifts fine dust, and particles in the air irritate the eye’s surface. Keeping car windows up near working orchards and wearing wraparound eyewear outdoors both help.`,
      },
      {
        q: 'Can I get Quell delivered in Modesto, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Modesto and the rest of Stanislaus County, with guest checkout and email tracking. There’s no promised arrival date, so order ahead.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-denton-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid DTO; saved at .daily-job/acis1119/DTO.json and .daily-job/a/mint_DTO.json)
   *   (DENTON MUNICPAL AP, elev 639 ft: Jul max 95.7 F, min 73.2 F; Aug max 95.6,
   *   min 72.5; Jun max 91.3; Jan max 55.7, min 32.2; Dec min 34.2; Feb min 36.4;
   *   precip May 4.52 in (wettest), Oct 4.17, Jul 1.77 (driest), Jan 1.94;
   *   twelve monthly normals sum to 35.60 in; snowfall missing, not quoted)
   * - relhum23.txt / wndspd23.txt have no Denton row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-denton-tx',
    title: 'Dry eye relief in Denton, Texas',
    description:
      'Denton’s July and August highs average about 95.6°F, and July is its driest month. NOAA’s figures and practical dry eye relief for North Texas days.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In Denton, dry eyes peak in July and August, when NOAA’s normal highs at Denton’s municipal airport reach about 95.6°F and July is the driest month of the year. Long hours in air conditioning, campus screens and wind on the lakes add to it. Keep cold air off your face, take screen breaks, wear sunglasses outdoors, and use a lubricating drop as labeled. Persistent symptoms belong with an eye doctor.`,
      },
      { h: 'Denton’s numbers from NOAA' },
      {
        p: `Denton has its own weather station at Denton Municipal Airport, west of downtown at about 640 feet. NOAA’s 1991–2020 climate normals for that station, as published through the National Weather Service’s NOWData, give Denton its own figures rather than borrowing Dallas’s or Fort Worth’s:`,
      },
      {
        list: [
          `July has a normal high of 95.7°F and August 95.6°F; June averages 91.3°F.`,
          `July is the driest month at 1.77 inches of precipitation.`,
          `May is the wettest month at 4.52 inches, and October is second at 4.17.`,
          `The monthly normals add up to about 35.6 inches a year.`,
          `January’s normal low is 32.2°F, right at freezing, with a normal high of 55.7°F.`,
        ],
      },
      {
        p: `The record doesn’t carry a snowfall normal for this station, so none is given here. The pattern that matters is simple: two wet peaks in spring and fall, and a hot, drier middle of summer.`,
      },
      { h: 'High summer: 95-degree afternoons' },
      {
        p: `By July, Denton afternoons are hot and July’s rain total is the lowest of the year. Most people respond by staying indoors in air conditioning, which dries the air further as it cools it. Cars are the worst offenders, because the vents sit a couple of feet from your face and run at full blast after the car has baked in a parking lot.`,
      },
      {
        list: [
          `Aim dashboard vents at your chest or the ceiling, not your eyes.`,
          `Use a sunshade in the windshield so the cabin starts cooler and the AC runs less hard.`,
          `At home, keep ceiling fans on a low setting over the bed or couch.`,
          `If you work outside, plan heavy tasks for the morning, and step into shade for a few slow blinks.`,
        ],
      },
      { h: 'Two campuses and a lot of screens' },
      {
        p: `Denton is home to the University of North Texas and Texas Woman’s University, so a large share of the city spends its days reading, writing and studying on screens. The blink rate falls when you concentrate, and studying late in a dorm or library with the AC humming leaves the tear film exposed longer between blinks. The fall semester ends in early December, and the spring semester’s finals arrive just as the AC season starts again.`,
      },
      {
        p: `Look up from the screen every so often, blink fully a few times, and set the laptop on a stand so you look slightly down. [Dry eyes while studying for exams](/guides/dry-eyes-while-studying) lays out a routine for long sessions.`,
      },
      { h: 'Ray Roberts, Lewisville Lake and the open water' },
      {
        p: `Lake Ray Roberts sits north of the city and Lewisville Lake stretches along its southeast side, and both pull Denton residents out on boats, paddleboards and fishing trips. Open water means wind with nothing to slow it and sunlight reflected up from the surface. Sunglasses that wrap around the sides block both, and a brimmed hat cuts the glare from above. On a boat, the breeze from moving at speed is constant, so give your eyes a rest in the shade of the canopy when you can.`,
      },
      { h: 'The Square, music nights and smoky air' },
      {
        p: `The courthouse square downtown is the center of Denton’s evenings, and the city is known for live music. Venues and patios can mean smoke from grills, fire pits or smokers, and a long night in a loud, crowded room usually means fewer blinks and later bedtimes. Tired eyes after a short night feel drier the next morning. If your eyes sting by the end of a show, step outside for a few minutes, close your eyes for a moment, and blink slowly.`,
      },
      { h: 'Freezing nights and the heater' },
      {
        p: `Denton winters are short, but a January normal low of 32.2°F means the heater runs most nights from December through February. Central heat dries the air in a bedroom while you sleep, and many people wake with eyes that feel scratchy. Keep the vent nearest your pillow closed or deflected, and try a humidifier for the colder months. [Dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up) explains the morning pattern.`,
      },
      { h: 'What Quell’s Drug Facts say' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its active ingredients are {actives}. The label gives its use as: {uses}. It directs: {directions}.`,
      },
      {
        p: `Storage matters in a Texas summer: {storage}. Don’t leave the bottle in a truck at the lake or in a car on the Square in August. The label also says: {doNotUse}. The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Ordering Quell in Denton' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Denton, Corinth, Sanger, Argyle and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, though there’s no promised delivery date, so order while you still have some left. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Denton page](/eye-drops/denton-tx) and the [Texas page](/eye-drops/state/texas) have the details.`,
      },
      { h: 'When it’s time to see a doctor' },
      {
        p: `Dryness that comes and goes with the heat is common. Dryness that won’t settle is a different matter, and the label says so: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Denton, Texas?',
        a: `July, with a normal of 1.77 inches at Denton Municipal Airport in NOAA’s 1991–2020 normals. It’s also the hottest month, with a normal high of 95.7°F.`,
      },
      {
        q: 'How hot does Denton get in the summer?',
        a: `Normal highs at Denton Municipal Airport reach 95.7°F in July and 95.6°F in August, and June averages 91.3°F, according to NOAA’s 1991–2020 normals.`,
      },
      {
        q: 'Why do my eyes get dry studying at UNT or TWU?',
        a: `Concentrating on a screen cuts your blink rate, and air-conditioned libraries and dorms dry the air. Regular breaks to look away and blink fully usually help.`,
      },
      {
        q: 'Does Quell ship to Denton, Texas?',
        a: `Yes. We ship from Brentwood, Tennessee, to Denton and anywhere else in the US, with guest checkout and tracking by email. There’s no promised arrival date, so order early.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-albany-ga:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid ABY; saved at .daily-job/acis1119/ABY.json and .daily-job/a/mint_ABY.json)
   *   (ALBANY SW GEORGIA REGIONAL AP, elev 191 ft: Jul max 93.2 F, min 73.0 F;
   *   Aug max 92.4; Jun max 91.2; May max 87.5; Jan max 62.0, min 39.1; precip
   *   Jul 5.12 in (wettest), Jun 5.06, Aug 4.83; Oct 2.30 (driest), May 2.41;
   *   twelve monthly normals sum to 46.63 in; snowfall missing, not quoted)
   * - relhum23.txt / wndspd23.txt have no Albany GA row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-albany-ga',
    title: 'Dry eye relief in Albany, Georgia',
    description:
      'Albany, Georgia gets about 46.6 inches of rain a year, yet October and May run dry. NOAA’s numbers, harvest dust and simple ways to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Albany, Georgia is wet overall, so dry eyes there usually come from indoor air and two dry stretches. NOAA’s normals for Southwest Georgia Regional Airport put October (2.30 inches) and May (2.41) as the driest months, while summer’s 93°F highs keep air conditioning running. Keep cold air off your face, wear sunglasses in the fields, use a lubricating drop as labeled, and see an eye doctor for lasting symptoms.`,
      },
      { h: 'Albany’s weather record' },
      {
        p: `NOAA’s 1991–2020 climate normals for Southwest Georgia Regional Airport, as published through the National Weather Service’s NOWData, describe Albany’s year. The airport is on the southwest side of the city at about 190 feet.`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 46.6 inches a year.`,
          `July is the wettest month at 5.12 inches, with June at 5.06 and August at 4.83.`,
          `October is the driest month at 2.30 inches, and May is next at 2.41.`,
          `July’s normal high is 93.2°F and its normal low 73.0°F.`,
          `January has a normal high of 62.0°F and a normal low of 39.1°F.`,
        ],
      },
      {
        p: `There’s no snowfall normal in the station’s record, so none is quoted. The useful point is that Albany’s rain comes mostly in summer thunderstorms, and the two driest months land in late spring and mid-fall.`,
      },
      { h: 'Why eyes feel dry in a humid place' },
      {
        p: `Summer in Albany is hot and sticky, and that makes dry eyes feel like a contradiction. The answer is that most people spend summer indoors. Air conditioning pulls moisture from the air as it cools it, and an office, a classroom or a truck cab with the AC on high can be far drier than the yard outside. Air moving across your face from a vent or a fan speeds evaporation from the tear film no matter how humid it is outdoors.`,
      },
      {
        p: `[Why are my eyes dry when it’s humid?](/guides/why-are-my-eyes-dry-when-it-is-humid) goes into the details. The short version: control the airflow near your face, and don’t set the thermostat colder than you need.`,
      },
      { h: 'Peanut and pecan harvest in the fall' },
      {
        p: `Dougherty County and the counties around it grow peanuts, cotton and pecans, and fall is harvest season. Peanuts are dug and turned to dry in the field before they’re picked up, and pecans are shaken from the trees and swept from the orchard floor. Both lift dust into the air, and they overlap with October, Albany’s driest month. If you work the harvest or live near the fields, you’ll feel it in your eyes by the end of the day.`,
      },
      {
        list: [
          `Wear wraparound eyewear outdoors during harvest; your employer’s safety program decides what protection the job requires.`,
          `Keep the cab windows closed and set the AC to recirculate when the dust is heavy.`,
          `Rinse your face and wash your hands before touching your eyes at the end of a shift.`,
          `Don’t rub your eyes when grit gets in; blink and let tears carry it out.`,
        ],
      },
      {
        p: `[Dry eyes for farmers](/guides/dry-eyes-for-farmers) covers long days in the field.`,
      },
      { h: 'On the Flint River' },
      {
        p: `The Flint River runs through the middle of Albany, and residents fish, paddle and walk along it. Sun reflecting off the water and a steady breeze along the river both dry the eye’s surface, and people tend to squint in glare, which means shallower blinks. Polarized sunglasses cut reflected glare, and a hat with a brim helps with the sun overhead.`,
      },
      { h: 'Base jobs, plants and long shifts' },
      {
        p: `Marine Corps Logistics Base Albany and the area’s plants and warehouses employ a lot of people in large buildings with industrial heating, cooling and ventilation. Long shifts in moving air, dust from stock and packaging, and hours at a computer or scanner all add up. If your workstation sits under a vent, ask whether it can be moved or angled. Keep a bottle of drops in your locker or bag, not a vehicle parked in the sun all afternoon.`,
      },
      { h: 'Mild winters and the heater' },
      {
        p: `January lows near 39°F are mild by most standards, but the heat still comes on at night from December into February. A space heater beside the bed or a vent blowing across the pillow can dry your eyes while you sleep. Turn the heater away from your face and keep the bedroom on the cool side.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses as: {uses}. {directions}. Before buying, check the caution printed on the panel: {warnings}. [Egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains that line.`,
      },
      {
        p: `Albany summers also matter for storage, since the label says: {storage}. A truck in a peanut field in September can get far hotter than that. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Albany' },
      {
        p: `We ship from Brentwood, Tennessee, to Albany, Leesburg, Lee County and every other US address. Checkout is available as a guest, shipping is {shipping}, and an order of {freeBottles} or more bottles ships free. Tracking arrives by email, and no delivery date is promised, so reorder before you run out. Unopened bottles are refunded within {returnDays} days of delivery, and you keep them. Local details are on the [Albany page](/eye-drops/albany-ga) and the [Georgia page](/eye-drops/state/georgia).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust and AC can make anyone’s eyes feel dry, but symptoms that keep coming back need a professional look. The label says: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Albany, Georgia?',
        a: `October, with a normal of 2.30 inches at Southwest Georgia Regional Airport in NOAA’s 1991–2020 normals. May is close behind at 2.41 inches.`,
      },
      {
        q: 'How much rain does Albany, GA get a year?',
        a: `The monthly normals at Southwest Georgia Regional Airport add up to about 46.6 inches. July is the wettest month at 5.12 inches.`,
      },
      {
        q: 'Why do my eyes get dry during peanut harvest?',
        a: `Digging, turning and picking up peanuts puts fine dust into the air, and harvest overlaps with Albany’s driest month. Wraparound eyewear and a closed cab with the AC on recirculate cut down on what reaches your eyes.`,
      },
      {
        q: 'Can Quell be shipped to Albany, Georgia?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Albany and the rest of Southwest Georgia with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-ann-arbor-mi:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid ARB; saved at .daily-job/acis1119/ARB.json and .daily-job/a/mint_ARB.json)
   *   (ANN ARBOR MUNICIPAL AP, elev 822 ft: Jan max 31.8 F, min 15.2 F; Feb max
   *   34.6, min 16.0; Dec max 36.4, min 21.5; Nov max 47.9, min 29.5; Jul max
   *   83.8, min 57.2; precip Feb 1.51 in (driest), Jan 1.68, Dec 1.69; Jun 3.61
   *   (wettest), May 3.35; twelve monthly normals sum to 29.78 in; snowfall
   *   missing, not quoted)
   * - relhum23.txt / wndspd23.txt have no Ann Arbor row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-ann-arbor-mi',
    title: 'Dry eye relief in Ann Arbor, Michigan',
    description:
      'Ann Arbor’s January highs average 31.8°F and February is its driest month. NOAA’s numbers, campus screen time and ways to ease dry eyes indoors and out.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In Ann Arbor, dry eyes are mostly a winter problem. NOAA’s normals for Ann Arbor Municipal Airport put January highs at 31.8°F and February as the driest month, so the heat runs for months in houses, labs and lecture halls. Long screen hours on campus add to it. Use a humidifier, keep vents off your face, blink fully, use a lubricating drop as labeled, and see an eye doctor for symptoms that persist.`,
      },
      { h: 'Ann Arbor’s weather record' },
      {
        p: `Ann Arbor Municipal Airport, on the south side of the city at about 820 feet, has its own NOAA record. Its 1991–2020 climate normals, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `January’s normal high is 31.8°F and its normal low 15.2°F.`,
          `February is nearly as cold: a 34.6°F high and a 16.0°F low.`,
          `February is the driest month at 1.51 inches of precipitation, followed by January (1.68) and December (1.69).`,
          `June is the wettest month at 3.61 inches.`,
          `July’s normal high is 83.8°F, with a cool normal low of 57.2°F.`,
          `The monthly normals add up to about 29.8 inches a year.`,
        ],
      },
      {
        p: `The station’s snowfall normal is missing from the record, so this page doesn’t give one. The three driest months are also the three coldest, which tells you where Ann Arbor’s dry-eye season sits.`,
      },
      { h: 'From November to March, the heat stays on' },
      {
        p: `November’s normal low is 29.5°F, and from then until March the furnace or boiler does most of the work in an Ann Arbor home. Old houses near downtown and in the Old West Side often have radiators; newer homes and apartments mostly use forced air. Either way, warming cold air lowers its relative humidity, and drier indoor air pulls more water from the tear film. Forced air adds the second problem of air blowing across the room.`,
      },
      {
        list: [
          `Keep a humidifier in the bedroom and clean it as the manual directs.`,
          `Don’t sleep or work with a register or radiator blowing toward your face.`,
          `Keep the thermostat moderate; a hotter room is usually a drier room.`,
          `Step outside for a few minutes on a calm day; winter air outdoors usually feels gentler on the eyes than a heated room.`,
        ],
      },
      {
        p: `[Dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) covers the older houses specifically.`,
      },
      { h: 'Lectures, labs and late-night studying' },
      {
        p: `The University of Michigan shapes the city’s schedule, and so does its hospital and research work. Students, researchers, clinicians and office staff spend long hours reading on screens, and concentration lowers the blink rate. Libraries and lecture halls are heated and ventilated for crowds, which means steady, dry air. The fall semester’s exams fall in December, deep into the heating season.`,
      },
      {
        list: [
          `Set the laptop on a stand or books so your gaze points slightly down.`,
          `Take a short break to look across the room every so often.`,
          `Make a few slow, complete blinks whenever you switch tasks.`,
          `Sit away from the vents in a lecture hall when you have a choice of seats.`,
        ],
      },
      {
        p: `[Dry eyes while studying](/guides/dry-eyes-while-studying) has a fuller routine for exam weeks.`,
      },
      { h: 'Football Saturdays in the cold' },
      {
        p: `Late-season games at Michigan Stadium can mean hours in cold, moving air, followed by a crowded, overheated restaurant or bar. Sitting high in the stands exposes you to the wind, and people in a crowd tend to stare at the field and forget to blink. Sunglasses help on a bright afternoon, a hat with a brim and a scarf help on a cold one, and closing your eyes for a few seconds during timeouts gives the tear film a chance to recover.`,
      },
      { h: 'The Huron River and the Arb in summer' },
      {
        p: `Summer is Ann Arbor’s mild season, with July lows in the 50s. People kayak and tube the Huron River and walk the trails of Nichols Arboretum. The breeze on the water, the glare off it and pollen in the air can all bother eyes. Sunglasses with side coverage help on the river. Indoors, air conditioning dries the air in summer the way the heat does in winter, so keep vents pointed away from your face.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. Directions: {directions}. To keep the dropper clean, the panel adds: {tip}.`,
      },
      {
        p: `Its storage instruction is: {storage}. That rules out a car left parked on a January street all night, so keep the bottle in a backpack or coat that comes inside. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Ann Arbor' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Ann Arbor, Ypsilanti, Saline, Dexter and any other US address. You can check out as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Ann Arbor page](/eye-drops/ann-arbor-mi) and the [Michigan page](/eye-drops/state/michigan) have local information.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Winter dryness that clears up when you change rooms or take a break is common. When symptoms stay, the label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Ann Arbor get in the winter?',
        a: `January is the coldest month at Ann Arbor Municipal Airport, with a normal high of 31.8°F and a normal low of 15.2°F in NOAA’s 1991–2020 normals. February’s low is about 16°F.`,
      },
      {
        q: 'What is the driest month in Ann Arbor?',
        a: `February, with a normal of 1.51 inches of precipitation at Ann Arbor Municipal Airport. January and December follow at 1.68 and 1.69 inches.`,
      },
      {
        q: 'Why do my eyes get dry in University of Michigan libraries?',
        a: `Long reading sessions lower your blink rate, and heated, ventilated buildings keep the air dry in winter. Sitting away from vents and taking regular breaks to blink fully both help.`,
      },
      {
        q: 'Can I get Quell delivered in Ann Arbor?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Ann Arbor and anywhere else in the US. Checkout works as a guest, and tracking comes by email, though no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-bellingham-wa:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid BLI; saved at .daily-job/acis1119/BLI.json and .daily-job/a/mint_BLI.json)
   *   (BELLINGHAM INTL AP, elev 150 ft: Jul max 72.7 F, min 55.0; Aug max 73.1,
   *   min 54.7; Jan max 46.3, min 34.0; Dec max 45.5, min 34.1; Feb min 34.5;
   *   precip Nov 5.20 in (wettest), Jan 4.49, Dec 4.33, Oct 3.85; Jul 0.88
   *   (driest), Aug 1.13, Jun 1.61; twelve monthly normals sum to 34.71 in;
   *   snowfall missing, not quoted)
   * - relhum23.txt / wndspd23.txt have no Bellingham row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-bellingham-wa',
    title: 'Dry eye relief in Bellingham, Washington',
    description:
      'Bellingham gets 5.20 inches of rain in November but only 0.88 in July. NOAA’s numbers and how to handle dry eyes through a damp winter and a dry summer.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Bellingham’s dry eyes come from two directions. Winter is wet outdoors, with NOAA’s normals at Bellingham International Airport showing 5.20 inches of rain in November, but heated homes dry the air for months. Summer flips it: July averages just 0.88 inches. Keep heater air off your face in winter, wear sunglasses on the water in summer, use a lubricating drop as labeled, and see an eye doctor for lasting symptoms.`,
      },
      { h: 'Bellingham’s weather record' },
      {
        p: `NOAA’s 1991–2020 climate normals for Bellingham International Airport, as published through the National Weather Service’s NOWData, are the city’s official record. The airport is northwest of downtown near the shore of Bellingham Bay, at about 150 feet.`,
      },
      {
        list: [
          `November is the wettest month at 5.20 inches, followed by January (4.49) and December (4.33).`,
          `July is the driest at 0.88 inches, then August (1.13) and June (1.61).`,
          `The monthly normals add up to about 34.7 inches a year.`,
          `August is the warmest month by its normal high of 73.1°F; July averages 72.7°F.`,
          `December and January highs sit near 46°F, and their normal lows are about 34°F.`,
        ],
      },
      {
        p: `The station has no snowfall normal in the record, so none is quoted here. Lows around 34°F in the coldest months mean winter in Bellingham is long and chilly rather than bitterly cold, and that shapes how its homes are heated.`,
      },
      { h: 'A wet winter outside, a dry one inside' },
      {
        p: `From October through March, Bellingham is gray and damp, and the heat runs most of the day and night because highs stay in the 40s. Heated air feels dry because warming it lowers its relative humidity, even when the air outside is full of drizzle. Many people here also lean on electric baseboard heaters, space heaters or a wood or pellet stove, and each of those can put dry, warm air right beside a couch or bed.`,
      },
      {
        list: [
          `Run a humidifier in the room where you sleep, and clean it as its manual directs.`,
          `Keep space heaters and stoves aimed away from where you sit and sleep.`,
          `Open a window for a few minutes on a mild day; the outdoor air is usually far damper.`,
          `Keep the thermostat moderate instead of warming the house past comfortable.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains what to look for.`,
      },
      { h: 'Short days and long screen hours' },
      {
        p: `December days in Bellingham are short and often overcast, so more of life moves indoors and onto screens. Western Washington University students, remote workers and anyone reading through a rainy weekend tend to blink less when focused. A partial blink leaves the lower part of the eye exposed. Every so often, look out a window at something far away and finish a few full blinks before going back to the page or screen.`,
      },
      {
        p: `[Dry eyes while studying](/guides/dry-eyes-while-studying) has more ideas for exam season, which lands in the darkest weeks of the year.`,
      },
      { h: 'Clear, cold, windy days' },
      {
        p: `On a clear, cold winter day, a steady wind along the waterfront in Fairhaven or across the open fields toward Ferndale can sting more than any drizzle. Moving cold air pulls water from the tear film quickly. A scarf pulled up high, a hat brim, and wraparound sunglasses or goggles make the walk more comfortable. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers the basics.`,
      },
      { h: 'Mount Baker ski days' },
      {
        p: `Mount Baker draws Bellingham skiers and snowboarders all winter. Cold air, speed on the run, wind on the lift and sun reflecting from the snow all dry the eyes, and goggles cover more of the eye than sunglasses do. Bring a bottle of drops in an inside pocket rather than leaving it in the car at the lot, where it can get colder than the label allows. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) has a packing list.`,
      },
      { h: 'July and August on the bay' },
      {
        p: `Bellingham’s dry season is short but real. July and August together normally get only about two inches of rain, and those are the months people spend on the bay, the lakes and Chuckanut Drive. Breeze on the water and reflected glare speed evaporation from the eye’s surface. Polarized sunglasses help with the glare, and a brimmed hat helps with sun from above.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists its Uses as: {uses}. {directions}. Its warnings section says: {warnings}.`,
      },
      {
        p: `For storage, the panel says: {storage}. A car at the Mount Baker lot or parked through a cold January night can drop below that, so carry the bottle inside. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Bellingham' },
      {
        p: `We ship from Brentwood, Tennessee, to Bellingham, Ferndale, Lynden, Blaine and every other US address. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, so order before you run out. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Bellingham page](/eye-drops/bellingham-wa) and the [Washington page](/eye-drops/state/washington) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after you’ve fixed the heater and the screen habits, a professional should look. The label says: {stopUse} An eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you prepare for the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainiest month in Bellingham, WA?',
        a: `November, with a normal of 5.20 inches at Bellingham International Airport in NOAA’s 1991–2020 normals. January (4.49) and December (4.33) follow.`,
      },
      {
        q: 'Does Bellingham have a dry season?',
        a: `Yes, a short one. July normally gets 0.88 inches of rain and August 1.13 at Bellingham International Airport, compared with more than five inches in November.`,
      },
      {
        q: 'Why are my eyes dry in Bellingham when it rains all winter?',
        a: `The dryness is indoors. Heating cold, damp air lowers its relative humidity, and baseboard heaters, space heaters and stoves put warm, dry air close to your face.`,
      },
      {
        q: 'Does Quell ship to Bellingham, Washington?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Bellingham and the rest of Whatcom County with guest checkout and email tracking. No arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-lafayette-la:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid LFT; saved at .daily-job/acis1119/LFT.json and .daily-job/a/mint_LFT.json)
   *   (LAFAYETTE REGIONAL AP, elev 35 ft: Aug max 92.3 F, min 74.7; Jul max 91.5,
   *   min 75.1; Jun max 90.2; Jan max 62.2, min 43.5; Dec min 45.3; precip Jun
   *   7.09 in (wettest), Jul 6.27, Aug 6.26, Jan 5.92; Mar 3.72 (driest), Feb
   *   4.07; every month above 3.7 in; twelve monthly normals sum to 62.81 in;
   *   snowfall missing, not quoted)
   * - relhum23.txt / wndspd23.txt have no Lafayette row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-lafayette-la',
    title: 'Dry eye relief in Lafayette, Louisiana',
    description:
      'Lafayette gets about 62.8 inches of rain a year, yet dry eyes are common. NOAA’s numbers, cane-season smoke, AC and simple everyday relief in Acadiana.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Lafayette gets about 62.8 inches of rain a year by NOAA’s records, so dry eyes there come from what people do indoors and nearby. Air conditioning runs most of the year, and smoke from sugarcane field burning drifts in during harvest. Aim vents away from your face, avoid smoky air, use a lubricating drop as its label directs, and see an eye doctor for lasting symptoms.`,
      },
      { h: 'Lafayette’s weather record' },
      {
        p: `NOAA’s 1991–2020 climate normals for Lafayette Regional Airport, as published through the National Weather Service’s NOWData, describe the city’s climate. The airport is on the southeast side of town at about 35 feet above sea level.`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 62.8 inches a year.`,
          `June is the wettest month at 7.09 inches; July (6.27) and August (6.26) follow.`,
          `March is the driest month, and even it averages 3.72 inches.`,
          `August has the hottest normal high at 92.3°F, and July’s normal low is 75.1°F.`,
          `January’s normal high is 62.2°F and its normal low 43.5°F.`,
        ],
      },
      {
        p: `The record carries no snowfall normal for the station, so none is given. Every month gets well over three inches of rain, so there’s no true dry season outdoors in Acadiana.`,
      },
      { h: 'Air conditioning, most of the year' },
      {
        p: `With normal highs above 85°F from May through September and warm nights into October, Lafayette homes, offices, cars and churches run air conditioning for much of the year. An AC system cools air by pulling water out of it, and the cold, dry stream from a vent dries the tear film quickly when it blows across your face. The outdoor air may be thick and humid while the air at your desk is the driest you’ll breathe all week.`,
      },
      {
        list: [
          `Point dashboard and ceiling vents away from your face.`,
          `Set the thermostat to comfortable rather than cold.`,
          `Don’t sit directly under an air return or vent at work if you can move.`,
          `Run a ceiling fan on low over the bed, or turn it off once the room cools.`,
        ],
      },
      {
        p: `[Why are my eyes dry when it’s humid?](/guides/why-are-my-eyes-dry-when-it-is-humid) explains why the outdoor humidity doesn’t protect your eyes indoors.`,
      },
      { h: 'Cane-burning season' },
      {
        p: `Sugarcane fields surround Lafayette, especially to the south and east, and the grinding season runs through fall into winter. Farmers burn cane fields to clear leaves, and the smoke can drift across roads and neighborhoods. Smoke particles irritate the eye’s surface and make the tear film work harder. If you drive past a burning field, close the windows and set the AC to recirculate. On smoky days, keep windows shut at home and limit time outdoors.`,
      },
      { h: 'Oilfield shifts and offshore schedules' },
      {
        p: `Lafayette has long been a service hub for the oil and gas industry, and many residents work shifts offshore or at plants and yards around the region. Long hours in wind, sun and salt air, followed by air-conditioned quarters, are hard on eyes. Your employer’s safety program sets the eye protection the job requires. Off the job, sunglasses with side coverage help on the water. [Dry eyes for oil field workers](/guides/dry-eyes-for-oil-field-workers) covers shift work in more detail.`,
      },
      { h: 'Festivals, crawfish boils and late nights' },
      {
        p: `Spring in Lafayette means Festival International downtown, crawfish boils in backyards, and plenty of dance halls and music on weekends. Outdoor festivals bring sun, crowds and fewer blinks while you watch a stage, and a night of dancing means late bedtimes and tired eyes the next morning. Wear sunglasses during daytime sets, take breaks in the shade, and get some sleep before Monday.`,
      },
      { h: 'The Vermilion River and the swamps' },
      {
        p: `The Vermilion River winds through Lafayette, and the Atchafalaya Basin is a short drive east. Paddling, fishing and boating bring glare off the water and a breeze, both of which dry the eye’s surface. Polarized sunglasses cut reflected glare, and a hat brim cuts the sun overhead.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions read: {directions}.`,
      },
      {
        p: `Lafayette summers make storage worth a note. The label says: {storage}. A car parked in the sun at a festival or a boat launch in August gets far hotter than that. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Lafayette' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Lafayette, Broussard, Youngsville, Scott, Carencro and every other US address. Checkout is available as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised, so order ahead. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. The [Lafayette page](/eye-drops/lafayette-la) and the [Louisiana page](/eye-drops/state/louisiana) have local details.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Smoke and AC can irritate anyone’s eyes, but symptoms that don’t ease belong with a professional. The label says: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Lafayette, Louisiana get?',
        a: `About 62.8 inches a year, adding up NOAA’s 1991–2020 monthly normals for Lafayette Regional Airport. June is the wettest month at 7.09 inches.`,
      },
      {
        q: 'Can sugarcane burning smoke bother your eyes?',
        a: `Yes. Smoke particles irritate the eye’s surface. Closing car and house windows and setting the AC to recirculate when fields are burning cuts down on what reaches your eyes.`,
      },
      {
        q: 'Why are my eyes dry in Lafayette when it’s so humid?',
        a: `Most of the drying happens indoors. Air conditioning removes moisture as it cools, and a vent blowing on your face speeds evaporation from the tear film.`,
      },
      {
        q: 'Can I get Quell delivered in Lafayette, LA?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Lafayette and the rest of Acadiana, with guest checkout and email tracking. There’s no promised delivery date.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-manchester-nh:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid MHT; saved at .daily-job/acis1119/MHT.json and .daily-job/a/mint_MHT.json)
   *   (MANCHESTER AIRPORT, elev 229 ft: Jan max 34.1 F, min 17.1; Feb max 37.4,
   *   min 19.0; Dec max 39.3, min 23.5; Jul max 84.1, min 63.6; precip Jan 2.44 in
   *   (driest), Feb 2.73; Jun 4.04 (wettest), Oct 3.88; every month 2.44 to 4.04;
   *   twelve monthly normals sum to 40.39 in; snowfall missing, not quoted)
   * - relhum23.txt / wndspd23.txt have no Manchester row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-manchester-nh',
    title: 'Dry eye relief in Manchester, New Hampshire',
    description:
      'Manchester’s January highs average 34.1°F, and the heat runs for months. NOAA’s numbers, Millyard offices, commutes and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In Manchester, dry eyes track the heating season. NOAA’s normals for Manchester Airport put January highs at 34.1°F and lows at 17.1°F, so furnaces and boilers run from fall into spring and indoor air dries out, even though rain and snow fall steadily all year. Use a humidifier, keep heat and car vents off your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for symptoms that persist.`,
      },
      { h: 'Manchester’s weather record' },
      {
        p: `NOAA’s 1991–2020 climate normals for Manchester Airport, as published through the National Weather Service’s NOWData, are the official record for the city. The airport is on the south side, along the Londonderry line, at about 230 feet.`,
      },
      {
        list: [
          `January is the coldest month: a normal high of 34.1°F and a low of 17.1°F.`,
          `February averages a 37.4°F high and a 19.0°F low; December a 39.3°F high.`,
          `July’s normal high is 84.1°F and its low 63.6°F.`,
          `Precipitation is spread evenly: every month falls between 2.44 and 4.04 inches.`,
          `January is the driest month (2.44 inches) and June the wettest (4.04).`,
          `The monthly normals add up to about 40.4 inches a year.`,
        ],
      },
      {
        p: `The station’s snowfall normal is missing in the record, so this page doesn’t give a number. With no real dry month outdoors, the dryness Manchester residents feel comes from inside.`,
      },
      { h: 'Why eyes dry out in a New Hampshire winter' },
      {
        p: `A January low of 17°F means the air outside holds little moisture. Heat that air to 68°F indoors and its relative humidity falls sharply, so the air in a Manchester apartment in February can feel parched while snow piles up outside. Dry air speeds evaporation from the tear film, and it’s worst at night, when the heat runs and your eyes are closed but not always fully.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and empty and clean it as the manual directs.`,
          `Don’t sleep with a radiator or register blowing toward the bed.`,
          `Lower the thermostat at night; cooler heated air is a bit less drying.`,
          `On the drive, set the heat to the floor and windshield, not the face vents.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more detail.`,
      },
      { h: 'Offices in the Millyard' },
      {
        p: `The old Amoskeag mill buildings along the Merrimack River now hold tech companies, offices and classrooms. Big brick rooms with high ceilings are heated and cooled by large ventilation systems, which means steady air movement and dry winter air. Long days in front of monitors cut the blink rate, and a vent over the desk speeds evaporation. If you can, move your desk out of the direct airflow, set your monitor a little below eye level, and take short breaks to look out the window at the river.`,
      },
      { h: 'Remote work and online classes' },
      {
        p: `Southern New Hampshire University has a large online program, and many Manchester residents also work from home for employers in Boston. Home offices in a spare room often sit right next to a radiator or baseboard heater, with a laptop screen as the main view. Long video calls are hard on the eyes because people stare at the screen and forget to blink. Turn the camera off between calls, look away from the screen now and then, and finish each blink.`,
      },
      { h: 'The commute down I-93 and Route 3' },
      {
        p: `Plenty of Manchester drivers commute south toward Nashua, the Massachusetts line and Boston. A long drive in winter means the heat running in a closed car and a fixed stare at the road, often in low winter sun. Point the vents at the windshield and floor, keep sunglasses in the car for the low sun, and take breaks on longer trips. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the late commute home.`,
      },
      { h: 'Rinks, ballparks and the river' },
      {
        p: `Manchester winters bring hockey and skating, and rink air is cold and dry. Summers bring Fisher Cats games downtown and paddling on the Merrimack, with sun and glare. Sunglasses help in summer, and taking a few slow blinks during breaks in play helps in any season.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses are listed as: {uses}. Directions: {directions}. And to keep the tip clean: {tip}.`,
      },
      {
        p: `The label’s storage line is: {storage}. A car in a parking lot in January is colder than that, so keep the bottle in a coat pocket or bag that comes indoors. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Manchester' },
      {
        p: `We ship from Brentwood, Tennessee, to Manchester, Bedford, Goffstown, Hooksett and every other US address. You can check out as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but there’s no promised delivery date. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Manchester page](/eye-drops/manchester-nh) and the [New Hampshire page](/eye-drops/state/new-hampshire) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry eyes from heating usually ease in spring. If yours don’t, or if anything feels worse than dryness, the label says: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Manchester, NH get in the winter?',
        a: `January is the coldest month at Manchester Airport, with a normal high of 34.1°F and a normal low of 17.1°F, according to NOAA’s 1991–2020 normals.`,
      },
      {
        q: 'What is the driest month in Manchester, New Hampshire?',
        a: `January, with a normal of 2.44 inches of precipitation at Manchester Airport. Every month gets between about 2.4 and 4 inches, so there’s no long dry season.`,
      },
      {
        q: 'Why do my eyes get dry working in the Millyard?',
        a: `Large old mill buildings are heated and ventilated with powerful systems, so the air is dry and moving in winter. Long screen work cuts your blink rate on top of that.`,
      },
      {
        q: 'Can Quell be delivered in Manchester, New Hampshire?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Manchester and anywhere else in the US. Checkout works as a guest, and tracking arrives by email, though no date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-st-cloud-mn:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid STC; saved at .daily-job/acis1119/STC.json and .daily-job/a/mint_STC.json)
   *   (ST. CLOUD REGIONAL AIRPORT, elev 1,018 ft: Jan max 20.7 F, min 2.9; Feb
   *   max 25.7, min 6.5; Dec max 25.8, min 9.8; Jul max 81.6, min 58.9; precip
   *   Jan 0.67 in (driest), Feb 0.76, Dec 0.88; Aug 4.00 (wettest); twelve
   *   monthly normals sum to 28.49 in; snowfall Dec 9.3, Feb 8.9, Jan 8.8, Mar
   *   8.2, Nov 6.9, Apr 4.7, Oct 1.0, May 0.1; monthly snow sums to 47.9 in)
   * - relhum23.txt / wndspd23.txt have no St. Cloud row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-st-cloud-mn',
    title: 'Dry eye relief in St. Cloud, Minnesota',
    description:
      'St. Cloud’s January lows average 2.9°F and its snow normals add up to about 48 inches. NOAA’s numbers and practical relief for winter-dry eyes.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In St. Cloud, dry eyes come with a long, deep-cold winter. NOAA’s normals for St. Cloud Regional Airport put January lows at 2.9°F and January as the driest month, with about 48 inches of snow a year. Heated indoor air, cold wind and glare off snow all dry the eyes. Use a humidifier, cover your eyes outdoors, keep vents off your face, use a lubricating drop as labeled, and see an eye doctor for lasting symptoms.`,
      },
      { h: 'St. Cloud’s weather record' },
      {
        p: `NOAA’s 1991–2020 climate normals for St. Cloud Regional Airport, as published through the National Weather Service’s NOWData, are the city’s official record. The airport is east of the Mississippi River and southeast of downtown, at about 1,020 feet.`,
      },
      {
        list: [
          `January’s normal high is 20.7°F and its normal low 2.9°F.`,
          `February averages a 25.7°F high and a 6.5°F low; December a 25.8°F high and a 9.8°F low.`,
          `July’s normal high is 81.6°F.`,
          `January is the driest month at 0.67 inches of precipitation; August is the wettest at 4.00.`,
          `The monthly precipitation normals add up to about 28.5 inches a year.`,
          `Snowfall normals add up to about 47.9 inches, led by December (9.3), February (8.9), January (8.8) and March (8.2).`,
        ],
      },
      {
        p: `Snow can fall from October through April, with a trace in May. The coldest months are also the driest, which means the air your furnace starts with in January holds very little water.`,
      },
      { h: 'When the air outside is near zero' },
      {
        p: `At a few degrees above zero, outdoor air holds almost no moisture. When a furnace heats it to room temperature, its relative humidity drops to very low levels, which is why a St. Cloud house in January can feel parched even with snow piled against the walls. Dry air pulls water from the tear film between blinks, which is why scratchy, tired eyes are common from December through March.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as directed so it doesn’t grow anything.`,
          `Keep heat registers and space heaters from blowing toward your face.`,
          `If frost or water builds up on the inside of the windows, turn the humidifier down a notch.`,
          `Keep the thermostat moderate rather than hot.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) goes into setup.`,
      },
      { h: 'Snow glare and cold wind' },
      {
        p: `With snow on the ground most of the winter, sunlight bounces up from below as well as down from the sky. People squint against the glare, and squinting shortens and weakens blinks. Cold wind across open fields, parking lots and the river adds to it. Sunglasses that wrap around the sides help with both, and a hat brim and a scarf pulled up to the cheekbones cut the wind further. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more.`,
      },
      { h: 'Ice fishing and snowmobile trails' },
      {
        p: `The lakes around St. Cloud fill with ice houses once the ice is safe, and snowmobile trails run through Stearns, Benton and Sherburne counties. On the ice, wind crosses a wide flat surface with nothing to break it, and inside a heated fish house the air turns dry. On a snowmobile, the speed adds wind straight into your face. A full-face helmet or goggles cover the eyes better than sunglasses. [Dry eyes while ice fishing](/guides/dry-eyes-while-ice-fishing) and [dry eyes on a snowmobile](/guides/dry-eyes-on-a-snowmobile) cover each.`,
      },
      { h: 'Campus and the Granite City at work' },
      {
        p: `St. Cloud State University students and staff spend winter in heated lecture halls and libraries, and the city’s hospital, plants and offices keep thousands of people indoors on long shifts. Hours at screens cut your blink rate. Sit away from vents when you can, set your screen slightly below eye level, and look away from it now and then. [Dry eyes while studying](/guides/dry-eyes-while-studying) has an exam-week routine.`,
      },
      { h: 'Summer on the Mississippi' },
      {
        p: `Summer is mild and wetter, with July highs near 82°F and August the wettest month. People bike the Lake Wobegon Trail, paddle the Mississippi and spend weekends at the lake. Glare off the water and wind on the lake dry the eyes even in humid weather, so sunglasses still help.`,
      },
      { h: 'Quell’s label in short' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label’s Uses read: {uses}. The directions say: {directions}.`,
      },
      {
        p: `Cold matters for storage in St. Cloud, since the label says: {storage}. A car, a garage or an ice house in January will be colder than that, so keep the bottle in an inside pocket. If the drops ever look different from usual, the label says: {doNotUse}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in St. Cloud' },
      {
        p: `Quell ships from Brentwood, Tennessee, to St. Cloud, Sartell, Sauk Rapids, Waite Park and every other US address. Checkout is open to guests, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email; no delivery date is promised, so order before your bottle runs low. A package left on a porch in January can get very cold, so bring it inside promptly. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [St. Cloud page](/eye-drops/st-cloud-mn) and the [Minnesota page](/eye-drops/state/minnesota).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Winter dryness that keeps coming back, or anything beyond dryness, deserves a professional look. The label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much snow does St. Cloud, MN get a year?',
        a: `NOAA’s 1991–2020 monthly snowfall normals for St. Cloud Regional Airport add up to about 47.9 inches, with December the snowiest month at 9.3 inches.`,
      },
      {
        q: 'How cold does St. Cloud get in January?',
        a: `January’s normal low at St. Cloud Regional Airport is 2.9°F and its normal high 20.7°F, according to NOAA’s 1991–2020 normals.`,
      },
      {
        q: 'Why are my eyes so dry in a Minnesota winter?',
        a: `Air near zero degrees holds very little water, and heating it indoors drops its relative humidity sharply. Dry indoor air pulls water from the tear film between blinks.`,
      },
      {
        q: 'Does Quell ship to St. Cloud, Minnesota?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to St. Cloud and anywhere else in the US, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-indio-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid TRM; saved at .daily-job/acis1119/TRM.json and .daily-job/a/mint_TRM.json)
   *   (DESERT RESORTS REGIONAL AP, Thermal, elev -118 ft: Jul max 106.9 F, min
   *   75.6; Aug max 106.2, min 74.9; Jun max 103.0; Sep max 101.5; Oct 90.9;
   *   Jan max 71.0, min 39.0; Dec max 69.3, min 37.7; precip Jan 0.64 in
   *   (wettest), Feb 0.61; Apr 0.08, May 0.01, Jun 0.01; twelve monthly normals
   *   sum to 2.96 in; snowfall 0.0 every month)
   * - relhum23.txt / wndspd23.txt have no Thermal/Indio row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-indio-ca',
    title: 'Dry eye relief in Indio, California',
    description:
      'Indio’s nearest NOAA station sits 118 feet below sea level and gets about 3 inches of rain a year. Desert numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Indio is true desert, so dry eyes there are a year-round matter. NOAA’s normals for the airport at Thermal, just southeast of the city and 118 feet below sea level, show about 3 inches of rain a year and July highs of 106.9°F. Wear wraparound sunglasses, keep AC vents off your face, avoid blowing sand, use a lubricating drop as labeled, and see an eye doctor if symptoms last.`,
      },
      { h: 'The Coachella Valley’s weather record' },
      {
        p: `The closest NOAA station with 1991–2020 normals is at Desert Resorts Regional Airport in Thermal, a few miles southeast of Indio. Its elevation is about 118 feet below sea level, on the low floor of the Coachella Valley. NOAA’s climate normals for the station, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 2.96 inches a year.`,
          `January is the wettest month at 0.64 inches, and February is next at 0.61.`,
          `May and June each average 0.01 inches, and April 0.08.`,
          `Normal highs top 100°F in four months: June (103.0°F), July (106.9°F), August (106.2°F) and September (101.5°F).`,
          `July’s normal low is 75.6°F, so nights stay warm.`,
          `January’s normal high is 71.0°F and its low 39.0°F; snowfall normals are zero.`,
        ],
      },
      {
        p: `By these figures, even the wettest month gets well under an inch of rain. The air is dry nearly every day of the year.`,
      },
      { h: 'Summer: 100-degree months and air conditioning' },
      {
        p: `From June through September, Indio’s daily routine shifts indoors during the heat of the day. The air outside is hot and dry, and the air inside is cooled by AC systems working hard. Both pull water from the tear film. Cars are the hardest part: a car parked in the sun becomes an oven, and the vents blast cold air toward your face once you start driving.`,
      },
      {
        list: [
          `Run errands early in the morning or after sunset.`,
          `Use a windshield sunshade and aim dashboard vents at your chest.`,
          `Keep ceiling fans on low in rooms where you sit for a long time.`,
          `Step out of direct sun for a few slow blinks when you’re working outdoors.`,
        ],
      },
      {
        p: `Never leave your drops in the car in summer. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why.`,
      },
      { h: 'Wind and blowing sand' },
      {
        p: `The Coachella Valley sees windy days, especially in spring, when wind lifts sand and dust off open ground and vacant lots. Sand in the air scratches at the eye’s surface and makes it water and sting. On windy days, wear wraparound sunglasses or goggles outdoors, keep car windows up and the AC on recirculate, and avoid rubbing your eyes if grit gets in; blink and let tears carry it out. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) covers the general pattern.`,
      },
      { h: 'Festival season at the polo grounds' },
      {
        p: `Each April, the big music festivals bring crowds to the polo grounds in Indio. Long days outdoors in sun, dust and crowds mean squinting, fewer blinks and late nights. Wear sunglasses with side coverage, step into shade between sets, and give your eyes a rest at night. The Riverside County Fair and Date Festival in February is gentler, but still a long day in the desert sun.`,
      },
      { h: 'Date palms, fields and outdoor work' },
      {
        p: `The eastern Coachella Valley grows dates, citrus, grapes and vegetables, and many Indio residents work outdoors in the fields or on golf courses and landscaping crews. Long hours in sun, dust and heat are hard on eyes. Your employer’s safety program sets the protection the job requires. Off the clock, wraparound sunglasses and a hat with a brim help. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more.`,
      },
      { h: 'Winter in the desert' },
      {
        p: `Winter is when people come to Indio, with January highs near 71°F. But the air stays dry, and nights in the high 30s mean heaters run in homes and RVs. A heater blowing near the bed dries the eyes while you sleep. Point it away from the bed, and consider a small humidifier.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. {directions}. The warnings read: {warnings}.`,
      },
      {
        p: `In Indio, storage is a real concern. The label says: {storage}. Summer days pass the top of that range easily, and a car or patio gets much hotter. Keep the bottle indoors or in a bag that stays with you. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Indio' },
      {
        p: `We ship from Brentwood, Tennessee, to Indio, La Quinta, Coachella, Palm Desert and every other US address. Checkout is available as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, and no delivery date is promised. In summer, bring the package inside as soon as it arrives. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Indio page](/eye-drops/indio-ca) and the [California page](/eye-drops/state/california) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Desert air can make anyone’s eyes dry, but symptoms that don’t ease need a professional look. The label says: {stopUse} An eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you prepare; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Indio get in the summer?',
        a: `NOAA’s 1991–2020 normals for the airport in nearby Thermal give July a normal high of 106.9°F and August 106.2°F. June and September also average above 100°F.`,
      },
      {
        q: 'How much rain does Indio, California get?',
        a: `About 3 inches a year, adding up the monthly normals at Desert Resorts Regional Airport in Thermal. January is the wettest month at 0.64 inches.`,
      },
      {
        q: 'Is the Coachella Valley below sea level?',
        a: `Parts of it are. The NOAA weather station nearest Indio, at the airport in Thermal, sits about 118 feet below sea level on the valley floor.`,
      },
      {
        q: 'Can I get Quell shipped to Indio, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Indio and the rest of the Coachella Valley with guest checkout and email tracking. There’s no promised arrival date.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-welders',
    title: 'Dry eyes for welders',
    description:
      'Heat under the hood, fume extraction, grinding dust and long stares at the puddle all dry a welder’s eyes. What helps, and what belongs to safety and a doctor.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Welders get dry eyes from heat trapped under the hood, air from fume extraction and fans, grinding dust, and long, unblinking focus on the puddle. Between jobs, wash your hands, blink fully and keep moving air off your face; a lubricating drop used as its label directs can ease everyday dryness. Eye protection itself is a question for your employer’s safety program and an eye doctor, and no eye drop protects against an arc.`,
      },
      { h: 'Why welding dries your eyes' },
      {
        p: `The tear film is thin: an oil layer on the outside, a watery layer in the middle and a mucus layer against the eye. Heat, moving air and dust all speed up how fast it breaks down, and a welding booth or fabrication floor has all three. Welding also asks for intense, steady focus. When you watch a bead form, you blink far less than usual, and each long gap between blinks leaves the surface of the eye exposed to warm, dry air.`,
      },
      {
        list: [
          `Heat from the work and the hood itself warms the air right in front of your eyes.`,
          `Fume extraction arms, booth fans and shop ventilation keep air moving across your face.`,
          `Grinding, cutting and chipping slag put fine particles into the air.`,
          `Long runs of concentration cut your blink rate.`,
          `In winter, overhead heaters in a large shop dry the air further.`,
        ],
      },
      { h: 'Under the hood' },
      {
        p: `A welding helmet blocks the arc’s light, but it also creates a small, warm pocket of air around your face. On long passes, that air gets hot and stale. When you flip the hood up between welds, you often get a blast of air from a fan or extraction arm. That swing from hot and still to cool and moving is hard on the tear film.`,
      },
      {
        p: `If you use a powered air-purifying respirator or a hood with airflow, the air flows down across your face constantly, and steady airflow over the eye speeds evaporation. Questions about which hood, lens shade or respirator is right for a job belong to your employer’s safety program and, for your eyes specifically, to your eye doctor. Don’t change your protection to make your eyes more comfortable without asking.`,
      },
      { h: 'Fume extraction and shop fans' },
      {
        p: `Fume extraction is there for a reason, and it shouldn’t be turned off or moved away from the work to spare your eyes. What you can change is your position relative to fans and vents that aren’t part of the extraction setup. A floor fan pointed at your station in summer, or an overhead heater blowing down in winter, can usually be redirected. When you take a break, step away from the airflow rather than standing in front of the fan to cool off.`,
      },
      { h: 'Grinding dust and grit in the eye' },
      {
        p: `Grinding and cutting throw particles, and some of them reach your eyes even when you’re careful. A gritty feeling after grinding is common. What you do next matters:`,
      },
      {
        list: [
          `Don’t rub. Rubbing can drag a particle across the surface of the eye.`,
          `Blink several times and let your tears try to carry it out.`,
          `If it stays, or if anything metal may have hit your eye, stop and get medical help. A lubricating drop isn’t for removing debris.`,
          `Follow your shop’s procedure for eye injuries and eyewash stations; your safety program sets it.`,
        ],
      },
      {
        p: `Eye pain after a job, especially if you were near an arc without full protection, belongs with a doctor promptly, not with a drop. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs not to wait on.`,
      },
      { h: 'Using drops on a welding shift' },
      {
        p: `If you use a lubricating drop for everyday dryness, timing and clean hands matter more on a weld floor than in an office. Gloves and hands are covered in dust, oil and metal particles. Wash your hands with soap and water before you touch your eyes or the bottle, and do it away from the booth.`,
      },
      {
        list: [
          `Use drops at the start of a shift, on a break and after work, not between welds.`,
          `Wash your hands first, every time.`,
          `Step out of the booth or work area to a clean spot.`,
          `Keep the bottle capped and stored in a clean place, like a locker or lunch bag.`,
        ],
      },
      {
        p: `Quell’s label gives the directions: {directions}. It adds: {tip}. For storage, the panel says: {storage}. A shop in July or a truck cab in January can go outside that range, so keep the bottle in a locker or lunch box that stays at room temperature.`,
      },
      { h: 'What Quell is and isn’t' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. That’s comfort for everyday dryness. It isn’t protection from arc light, sparks, fumes or particles, and it isn’t a substitute for a helmet, safety glasses or a face shield. The label also includes this caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Off the clock' },
      {
        p: `Your eyes recover between shifts. Get enough sleep, keep the bedroom air from getting too dry in winter, and take breaks from screens at home. If you also work on cars or in a home shop on weekends, the same habits apply there. [Dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) and [dry eyes for mechanics](/guides/dry-eyes-for-mechanics) cover related work.`,
      },
      { h: 'Ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a shop or job site if someone there can receive packages. Checkout is open to guests, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which suits a crew splitting an order. Tracking arrives by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order from the home page](/#buy).`,
      },
      { h: 'When it’s a doctor’s call' },
      {
        p: `The label says: {stopUse} For welders, pain, light sensitivity or blurred vision after work are reasons to see a doctor quickly. An eye doctor can find the cause and decide what to do, and can also talk through the eye protection that fits your work.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I weld?',
        a: `Heat under the hood, moving air from fans and extraction, grinding dust and long stretches of focus that cut your blink rate all speed evaporation from the tear film.`,
      },
      {
        q: 'Can eye drops protect my eyes from welding?',
        a: `No. A lubricating drop is for everyday dryness. It doesn’t protect against arc light, sparks or particles. Protection is a question for your employer’s safety program and your eye doctor.`,
      },
      {
        q: 'What should I do if grinding dust gets in my eye?',
        a: `Don’t rub. Blink and let tears try to carry it out. If it stays, or if metal may have hit your eye, stop work and get medical help.`,
      },
      {
        q: 'When can a welder use eye drops on the job?',
        a: `On a break, away from the booth, after washing your hands with soap and water. Keep the bottle capped and stored somewhere clean and at room temperature.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-flight-attendants',
    title: 'Dry eyes for flight attendants',
    description:
      'Dry cabin air, galley ovens, early report times and back-to-back legs wear on a flight attendant’s eyes. A working-day guide to keeping them comfortable.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Flight attendants get dry eyes from dry cabin air, hours on their feet in moving air, galley heat, early report times and short sleep across time zones. Blink fully during service, keep overhead vents off your face on the jump seat, use breaks between legs to rest your eyes, and use a lubricating drop as its label directs. Dryness that keeps coming back belongs with an eye doctor.`,
      },
      { h: 'A trip, from report to release' },
      {
        p: `A flight attendant’s day can start before dawn and run through several legs, each with boarding, service, cleanup and turn. Your eyes go from a hotel room to a jet bridge, to a cabin, to a galley, to a terminal and back again, with little time to recover between. The dry air passengers notice for one flight, you work in for most of the trip. [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) explains the cabin itself; this guide follows your working day.`,
      },
      { h: 'Boarding and the open door' },
      {
        p: `During boarding, the aircraft door is open, the jet bridge may be cold or hot, and air flows through the cabin as ground air conditioning runs. Standing at the door greeting passengers means a steady draft in your face. Turn your head slightly out of the airflow when you can, and blink fully between passengers.`,
      },
      { h: 'Service in the aisle' },
      {
        p: `Once you’re at cruise, the cabin air is dry and you’re moving up and down the aisle under the overhead vents. Pushing a cart means looking down at trays and cups, and focusing on orders cuts your blink rate. Make a habit of a few slow, full blinks each time you reach the galley.`,
      },
      {
        list: [
          `Turn off or redirect the crew-area vents near your face when you can.`,
          `Blink fully a few times at the end of each row or cart run.`,
          `Look up and across the cabin now and then to rest your focus.`,
          `If you can, keep your eyes closed for a few seconds during quiet moments.`,
        ],
      },
      { h: 'The galley' },
      {
        p: `Galley ovens heat meals and give off hot, dry air when the doors open. Coffee makers and hot water add steam, then the area cools quickly. Standing at the galley counter while the ovens run puts heat right at face level. Step back when you open an oven, and turn your face away from the first blast of heat.`,
      },
      { h: 'On the jump seat' },
      {
        p: `During takeoff, landing and quiet times, you sit on a jump seat, often near a door or galley with air flowing past. If there’s a vent you can redirect, point it away from your face. Use the quiet time to close your eyes briefly, not to scroll your phone, which cuts your blink rate further.`,
      },
      { h: 'Turns, sits and layovers' },
      {
        p: `Quick turns leave little time for anything but cleaning and boarding. Longer sits in a terminal or crew room are your chance to rest your eyes away from the cabin air. On a layover, hotel rooms often have strong heating or air conditioning. Set the thermostat to moderate, point the unit away from the bed, and consider running the shower briefly with the bathroom door open to add some moisture. Sleep matters most: short nights leave eyes feeling drier the next morning.`,
      },
      { h: 'Makeup, uniform standards and your eyes' },
      {
        p: `Many crew members wear makeup for work. Eye makeup near the lash line can flake into the eye during a long trip, and removing it late at night in a hotel bathroom is easy to rush. Keep products away from the inner rim of the lid, and take everything off gently before sleep. If your airline’s uniform standards require certain looks, choose products you can remove fully at night.`,
      },
      { h: 'Using drops on a trip' },
      {
        p: `Quell’s directions are: {directions}. On a trip, that can fit around report time, a long sit or layover and bedtime at the hotel. Before you open the bottle, wash your hands in the lav or crew room; hands that have handled trash, cups and money aren’t clean enough. The label says: {tip}. For storage: {storage}. Keep the bottle in your tote or crew bag in the cabin, not in a checked bag or a hot car at the employee lot.`,
      },
      {
        p: `If your airline has rules about medications on duty, follow them, and ask your own doctor about anything you use. [Eye drops for pilots and flight crews](/guides/eye-drops-for-pilots-and-flight-crews) covers questions for pilots and medical examiners.`,
      },
      { h: 'What Quell is' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. It’s a milky brown solution, which is normal for this formula: {appearance} The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering around a trip schedule' },
      {
        p: `We ship from Brentwood, Tennessee, to any US address, so order to home or wherever you’ll be between trips. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order well before a long trip. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says: {stopUse} For crew, anything that affects your vision on duty is worth a visit right away. An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'How do flight attendants keep their eyes from drying out?',
        a: `By blinking fully during service, keeping vents off their faces on the jump seat, resting their eyes on long sits and layovers, and getting enough sleep between trips.`,
      },
      {
        q: 'Do galley ovens dry out your eyes?',
        a: `Opening a galley oven releases a burst of hot, dry air at face level. Stepping back and turning your face away when you open the door helps.`,
      },
      {
        q: 'When should a flight attendant use eye drops on a trip?',
        a: `Around natural breaks: before report, on a long sit or layover and at bedtime. Wash your hands first, and follow your airline’s rules on medications.`,
      },
      {
        q: 'Why are my eyes dry after a layover?',
        a: `Hotel rooms often have strong heating or air conditioning, and short sleep between trips leaves eyes feeling drier. A moderate thermostat and the unit aimed away from the bed help.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-barbers',
    title: 'Dry eyes for barbers',
    description:
      'Flying clippings, close fade work, disinfectant sprays and long Saturdays at the chair. Why barbers’ eyes dry out and practical ways to keep them comfortable.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Barbers’ eyes dry out from close, focused clipper work that cuts the blink rate, tiny hair clippings in the air, disinfectant and cooling sprays near the face, and long days at the chair under bright lights. Blink fully between cuts, keep sprays and blowers aimed away, brush clippings off before touching your face, use a lubricating drop as labeled, and see an eye doctor for symptoms that last.`,
      },
      { h: 'What makes barbering different' },
      {
        p: `Stylists and barbers share some problems, like blow dryers and long hours. [Dry eyes for hairstylists](/guides/dry-eyes-for-hairstylists) covers the salon side. Barbering adds its own: short, sharp clippings, close detail work on fades and lines, and tools that throw hair and spray right at eye level.`,
      },
      { h: 'Fades, lines and the blink rate' },
      {
        p: `A clean fade or a sharp line-up takes intense, close focus. When you concentrate on fine detail, you blink less, and your eyes stay open longer between blinks. That leaves the tear film exposed to the shop air. By the end of a busy day, many barbers notice tired, scratchy eyes.`,
      },
      {
        list: [
          `Step back between sections and look across the shop to change your focus.`,
          `Take a few full, slow blinks before you start detail work.`,
          `Keep good lighting on the client so you don’t lean in too close.`,
          `Rest your eyes for a minute between clients.`,
        ],
      },
      { h: 'Clippings in the air' },
      {
        p: `Short clippings from a fade or beard trim are tiny and sharp, and they fly. They land on your face, your lashes and sometimes your eyes. A clipping in the eye can feel gritty and make it water.`,
      },
      {
        list: [
          `Don’t rub. Blink several times and let your tears carry the clipping out.`,
          `Brush clippings off your face and hands before touching your eyes.`,
          `Wash your hands before using drops or adjusting your eyes.`,
          `If something stays in your eye or it keeps hurting, see a doctor.`,
        ],
      },
      { h: 'Sprays, powders and the neck duster' },
      {
        p: `Barbershops use disinfectant and cooling sprays on clippers, and many barbers spray them close to their face. A mist of disinfectant can sting and irritate the eyes. Spray clippers away from your face, ideally while holding them down at your side. Neck powder on a duster can also go airborne when you brush it on. Turn your face away as you brush, and keep powder away from your eyes.`,
      },
      { h: 'Blowers and the cleanup' },
      {
        p: `Many barbers use a blower or blow dryer to clear clippings from a client’s neck and shoulders. Air blows hair back toward you. Point the blower away from your face, and stand to the side when you use it.`,
      },
      { h: 'Hot towels and steam' },
      {
        p: `Hot towel shaves and steam add warmth and moisture near the face, which feels good, but the switch from steam to dry shop air afterward can make eyes feel drier. Close your eyes briefly while you lift the towel off the client, and step away from the steam before going back to detail work.`,
      },
      { h: 'Long Saturdays at the chair' },
      {
        p: `Saturdays and the weeks before holidays are busy, with back-to-back clients and short breaks. Fatigue cuts your blink rate further, and the shop’s heat or air conditioning runs from open to close. Build a short pause between clients into the book when you can, and protect your sleep before a big Saturday. Bright lights for photos and videos can add glare; position ring lights or other bright lights so they don’t shine straight into your eyes.`,
      },
      { h: 'Using drops between clients' },
      {
        p: `Quell’s directions are: {directions}. That fits around opening, lunch and closing. Wash your hands first to clear clippings and product. The label also says: {tip}. For storage, it says: {storage}. Keep the bottle in a drawer or bag at your station, away from heat tools and the window.`,
      },
      { h: 'What Quell is' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The panel carries this caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering for a shop' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a barbershop. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which suits a shop where several barbers want a bottle. Tracking comes by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says: {stopUse} A clipping or splash that won’t clear, or pain that lasts, needs a doctor. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I cut hair?',
        a: `Close detail work on fades and lines cuts your blink rate, and the shop’s air, sprays and blowers speed evaporation from the tear film.`,
      },
      {
        q: 'What should I do if a hair clipping gets in my eye?',
        a: `Don’t rub. Blink several times and let your tears carry it out. Brush clippings off your face and hands first. If it stays or keeps hurting, see a doctor.`,
      },
      {
        q: 'Can clipper disinfectant spray irritate your eyes?',
        a: `Yes, a mist of disinfectant near your face can sting and irritate the eyes. Spray clippers away from your face, holding them down at your side.`,
      },
      {
        q: 'Can I keep eye drops at my barber station?',
        a: `Yes, in a drawer or bag away from heat tools and sunny windows. The label’s storage line reads: {storage}.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-barista',
    title: 'Christmas gifts for a barista',
    description:
      'Gift ideas for the barista in your life or behind your counter: things for early shifts, busy hands, steam and screens, plus when a bottle of Quell fits.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `A good Christmas gift for a barista helps with the job’s real demands: early shifts, hours on their feet, hands that stay wet and warm, and steam from the espresso machine. Think warm socks, a rich hand cream, a thermos for their own drink, a gift card to a restaurant or a handwritten thank-you. If they’ve mentioned dry eyes, a bottle of lubricating eye drops can fit too.`,
      },
      { h: 'Start with their day' },
      {
        p: `Baristas often open before sunrise, stand behind a counter for hours, steam milk, wash dishes and handle a steady line of customers. The café is warm near the machine and cool near the door. Their hands go from hot water to cold milk to a card reader, over and over. A thoughtful gift answers one part of that day.`,
      },
      { h: 'Gifts for long shifts on their feet' },
      {
        list: [
          `Warm, cushioned socks in a few colors.`,
          `A comfortable pair of slip-on shoes for after work.`,
          `A heated blanket or throw for the couch at home.`,
          `A gift card for a massage or a pedicure, if you know them well.`,
        ],
      },
      { h: 'Gifts for hard-working hands' },
      {
        p: `Hands that are washed dozens of times a shift and handle hot cups get dry and rough. A rich hand cream for after work, a pair of soft gloves for the walk home, and a lip balm make a practical bundle. Unscented products are a safe bet for anyone who works around food and coffee aromas.`,
      },
      { h: 'Coffee gifts, carefully' },
      {
        p: `A barista may love coffee, or may want a break from it. If they talk about coffee outside work, consider a bag from a roaster they haven’t tried, a hand grinder or a nice mug. If they don’t, choose something else entirely. A gift card to a favorite restaurant, bookstore or movie theater gives them a break from the counter.`,
      },
      { h: 'Gifts for early mornings' },
      {
        p: `Early shifts mean dark commutes and short nights. A thermos keeps their own drink warm. A sleep mask helps after a late night out. A soft scarf and hat help on a cold walk to an opening shift. Sunglasses that wrap around the sides help on the drive home into a bright winter sun.`,
      },
      { h: 'Eye-friendly gifts for the café floor' },
      {
        p: `Steam from the milk wand, heat from the machine and the café’s heating or air conditioning can dry the eyes. Long shifts and early mornings add to it. If your barista has said their eyes feel dry, scratchy or tired by the end of a shift, an eye-friendly gift can be welcome:`,
      },
      {
        list: [
          `A small humidifier for the bedroom, for dry winter nights.`,
          `A sleep mask for daytime naps after an opening shift.`,
          `Wraparound sunglasses for the drive home.`,
          `A bottle of Quell, if they’ve mentioned dry eyes.`,
        ],
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. It’s a practical add-on for someone who already uses eye drops, not a whole gift by itself. Before giving it, check the caution on the label: {warnings}. If you don’t know whether they have an egg or bird allergy, ask, or pick something else. [Egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the wording.`,
      },
      {
        p: `It’s also a milky brown solution, which is normal for this formula. A note on the card saves surprise: {appearance} [Are eye drops a good gift?](/guides/are-eye-drops-a-good-gift) talks through when it works.`,
      },
      { h: 'Gifts for your regular barista' },
      {
        p: `If the barista is someone who makes your drink every morning rather than a friend or family member, keep the gift simple. A card with a note and a gift card is common and appreciated. Some cafés have rules about gifts or pool tips, so a card signed to the whole team works well. A bottle of eye drops for someone you don’t know well can feel personal, so save it for a barista you’re close to.`,
      },
      { h: 'Ordering Quell as a gift' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. You can check out as a guest and ship to your own address, then hand it over in person. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order early in December. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [See prices and order](/#buy).`,
      },
      { h: 'What a gift doesn’t replace' },
      {
        p: `If your barista’s eyes are bothering them often, a bottle isn’t the answer. The label says: {stopUse} An eye doctor can find the cause and decide what to do. [Gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes) has more ideas.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a barista?',
        a: `Something for their workday: warm cushioned socks, a rich hand cream, a thermos, or a gift card to a restaurant. A handwritten thank-you card is welcome too.`,
      },
      {
        q: 'Is it okay to give your barista a Christmas gift?',
        a: `Yes. A card with a note and a gift card is common. Some cafés pool tips or have rules about gifts, so a card for the whole team is an easy option.`,
      },
      {
        q: 'Should I give a barista coffee for Christmas?',
        a: `Only if they talk about coffee outside work. Some baristas love trying new roasters; others want a break. A gift card for something else is a safe alternative.`,
      },
      {
        q: 'Are eye drops a good gift for a barista?',
        a: `For a barista who has mentioned dry eyes, a bottle can be a practical add-on. Check the label’s egg and bird allergy caution first, and pair it with something else.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-pastor',
    title: 'Christmas gifts for a pastor',
    description:
      'Christmas gift ideas for a pastor during the busiest season of their year: reading, writing, rest, cold graveside visits, and where eye drops fit.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `A good Christmas gift for a pastor speaks to a demanding season: Advent preparation, extra services, hospital and home visits, and long nights writing sermons. Thoughtful choices include a heartfelt note, a book they’ve mentioned, a good pen and journal, a meal delivered after Christmas, or warm gloves for winter visits. If they’ve said their eyes feel dry from reading and screens, eye drops can be a practical add-on.`,
      },
      { h: 'Think about their December' },
      {
        p: `For many pastors, December is the busiest month of the year. There are Advent services, choir and pageant rehearsals, Christmas Eve services that may run late, visits to people who are sick or grieving, and sermons to write every week. Many spend hours reading and writing at a desk late into the night. A gift that adds rest, comfort or encouragement fits the season.`,
      },
      { h: 'Words of thanks' },
      {
        p: `A note can outlast almost any other gift. A specific, handwritten message about a sermon that mattered, a visit that helped or a moment in the life of the congregation means more than most things you can buy. It costs nothing and can sit on a desk for years.`,
      },
      { h: 'Gifts for reading and writing' },
      {
        list: [
          `A book they’ve mentioned wanting, or a new title by an author they quote.`,
          `A good pen and a quality notebook or journal.`,
          `A desk lamp that lights the page well.`,
          `A comfortable chair cushion or footrest for long desk hours.`,
        ],
      },
      {
        p: `If you’re not sure what they read, a gift card to a bookstore lets them choose.`,
      },
      { h: 'Gifts for rest' },
      {
        p: `After Christmas, many pastors are worn out. A meal delivered the week after Christmas, a gift card to a restaurant, or a gift that encourages a day off can be welcome. A congregation might give a pastor a weekend away, but that’s a decision for church leaders to plan together.`,
      },
      { h: 'Gifts for winter visits' },
      {
        p: `Pastors visit hospitals, homes and graveside services in all weather. Warm gloves, a scarf and a good hat help on a cold day at the cemetery. A travel mug keeps coffee warm between visits. Wraparound sunglasses help on a bright winter drive or in cold wind.`,
      },
      { h: 'Eye-friendly gifts for long nights' },
      {
        p: `Hours reading commentaries, writing on a laptop and looking at screens cut the blink rate. Candlelight services add smoke, and bright stage lights in a sanctuary add glare. Heated church offices and fellowship halls dry the air in winter. If your pastor has mentioned tired or dry eyes, consider:`,
      },
      {
        list: [
          `A small humidifier for the study or office.`,
          `A desk lamp that reduces glare on the page.`,
          `A bottle of Quell, if they’ve said their eyes feel dry.`,
        ],
      },
      {
        p: `[Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) explains why candle-lit rooms can bother the eyes.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Slip it in beside a book or a card rather than giving it alone. One line on the panel needs checking first: {warnings}. Because the formula includes emu oil, find out about egg or bird allergies before you buy, and pick a different gift if you can’t ask. The milky brown color is normal for this formula; a note on the card avoids surprise.`,
      },
      { h: 'Giving as a congregation' },
      {
        p: `Many churches collect a group gift for the pastor at Christmas. Church leaders usually decide how that works, and some churches have their own policies. A group gift paired with notes from members can mean more than the gift itself. A bottle of eye drops is a personal item, so it fits better as a gift from a friend or family member than from a whole congregation.`,
      },
      { h: 'Ordering Quell as a gift' },
      {
        p: `The simplest route is to have the bottle sent to your own house and bring it to church tucked inside a card. Orders leave Brentwood, Tennessee, for any address in the US, guest checkout is fine, and the shipping charge is {shipping} unless the order reaches {freeBottles} bottles, when it’s free. You’ll get a tracking email, though we can’t name the day it lands, so place it before the Advent rush. If the bottle stays sealed, you can ask for a refund within {returnDays} days of delivery and keep it. [Prices and checkout are on the home page](/#buy).`,
      },
      { h: 'What a gift doesn’t replace' },
      {
        p: `Pastors spend much of December looking after other people and can be slow to book their own appointments. If yours mentions sore or irritated eyes week after week, the kindest nudge is toward an eye doctor, who can find the cause and decide what to do. Quell’s panel sets the same limit in its own words: {stopUse} For more ways to help a friend whose eyes bother them, see [gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a pastor for Christmas?',
        a: `A heartfelt note, a book they’ve mentioned, a good pen and journal, a meal after Christmas, or warm gloves for winter visits. A specific thank-you means more than most things you can buy.`,
      },
      {
        q: 'Should a church give the pastor a Christmas gift?',
        a: `Many churches collect a group gift at Christmas. Church leaders usually decide how it works, and short notes from members tucked in with it make it personal.`,
      },
      {
        q: 'Why do pastors get tired eyes in December?',
        a: `Long nights reading and writing, extra services, candlelight and stage lights, and heated church buildings all add up during the busiest month of their year.`,
      },
      {
        q: 'Is it okay to give a pastor eye drops?',
        a: `If they’ve mentioned dry eyes, a bottle can be a practical add-on from a friend or family member. Check the label’s egg and bird allergy caution first.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-sledding',
    title: 'Dry eyes when sledding',
    description:
      'Cold wind at speed, snow spray, glare and a hot car heater all dry the eyes on a sledding day. How to keep them comfortable from hilltop to home.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Sledding dries the eyes because every run pushes cold air straight into your face, snow sprays up from the runners, and sunlight bounces off the hill from below. Wear goggles or wraparound sunglasses, blink fully on the walk back up, don’t rub when snow gets in, and keep the car heater off your face on the way home. A lubricating drop used as its label directs can help with leftover dryness.`,
      },
      { h: 'Why a sled run is hard on your eyes' },
      {
        p: `The tear film is a thin layer of oil, water and mucus, and moving air speeds up how fast it evaporates. On a sled, you create your own wind: the faster the hill, the stronger the air across your eyes. Cold air also holds little moisture, so the air hitting your eyes on a run is both fast and dry. Most people squint into it, which shortens blinks, and your eyes water as a reflex. That watering doesn’t mean your eyes are moist; it’s a response to irritation, and the tears run off quickly.`,
      },
      { h: 'Snow spray and powder in the face' },
      {
        p: `Fresh powder kicks up from the front of the sled and blows back into your face, especially on a sled with a curled front or a saucer that spins. Ice crystals on the eye feel sharp and cold. When snow gets in your eye:`,
      },
      {
        list: [
          `Don’t rub with a wet, snowy mitten.`,
          `Blink several times and let the snow melt and wash out.`,
          `Take off the mitten and use a clean, dry hand or tissue to dab around, not on, the eye.`,
          `If something still feels stuck or it hurts after a few minutes, get it checked.`,
        ],
      },
      { h: 'Goggles or sunglasses?' },
      {
        p: `Goggles cover more of the eye and seal against wind and spray, so they’re the stronger choice for a fast hill or a windy day. Ski goggles work fine for sledding. Wraparound sunglasses block wind from the sides and cut glare, and they’re easier to wear on a gentle hill or for a parent watching from the bottom. Flat lenses let wind in around the edges. A knit hat pulled down to the brow and a scarf or neck gaiter up to the cheekbones fill the gaps.`,
      },
      {
        p: `Goggles can fog when you climb back up the hill breathing hard. Push them up onto your hat on the climb and pull them down before the next run. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers goggles in more detail.`,
      },
      { h: 'Glare off the snow' },
      {
        p: `A snowy hill on a sunny day is bright from every direction. Sunlight reflects up from the snow as well as down from the sky, and people squint to cut the glare. Squinting reduces the size and completeness of each blink, and that leaves more of the eye exposed. Tinted goggles or sunglasses make the glare easier on the eyes, and a hat brim helps too.`,
      },
      { h: 'The climb back up' },
      {
        p: `The walk up the hill is your recovery time. Turn your back to the wind, take a few slow, full blinks, and give your eyes a few seconds closed when you reach the top. If you’re out for a long session, take breaks in the car or a warming hut.`,
      },
      { h: 'Sledding with kids' },
      {
        p: `Many sledding days are family outings. Goggles and hats help children’s eyes the same way they help yours. Quell’s label doesn’t give directions for children, so for a child’s dry or irritated eyes, ask their pediatrician or eye doctor rather than reaching for your bottle. Snow in a child’s eye gets the same first step: no rubbing, plenty of blinking.`,
      },
      { h: 'The drive home' },
      {
        p: `After an hour in the cold, everyone wants the car heater on high. Hot, dry air blasting from the dashboard vents straight into cold, tired eyes is one of the harshest parts of the day. Point the vents at the windshield and floor, and let the car warm up gradually. Hot cocoa at home is fine, but sitting right next to a fireplace or space heater dries the eyes further. [Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) explains why.`,
      },
      { h: 'Using drops after sledding' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions read: {directions}. Use it once you’re indoors, with warm, clean, dry hands, not on the hill with wet mittens. The label also says: {tip}.`,
      },
      {
        p: `Cold matters for storage. The label says: {storage}. A bottle left in the car while you sled can drop below that range, so keep it at home, or in an inside coat pocket close to your body. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering before the snow' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order before winter storms. Bring the package inside promptly on a cold day. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order from the home page](/#buy).`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Cold and wind usually leave eyes feeling dry for a short while. If yours stay uncomfortable, the label says: {stopUse} An eye doctor can find the cause and decide what to do. If you hit something or got hit near the eye on the hill, get it checked. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more tips for winter outings.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when sledding?',
        a: `Cold, fast-moving air across the eye irritates it, and the eye responds with reflex tears. Those tears run off quickly and don’t keep the surface moist, so your eyes can feel dry afterward.`,
      },
      {
        q: 'Should you wear goggles when sledding?',
        a: `Goggles block wind and snow spray better than anything else. Wraparound sunglasses are a lighter option for gentle hills; flat lenses let wind in around the edges.`,
      },
      {
        q: 'What should I do if snow gets in my eye?',
        a: `Don’t rub, especially with a wet mitten. Blink several times and let the snow melt and wash out. If something still feels stuck or it hurts, get it checked.`,
      },
      {
        q: 'Can I keep eye drops in my coat while sledding?',
        a: `An inside pocket close to your body is better than a car, which can get colder than the label’s storage range. Use drops indoors with clean, dry hands.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-heavy',
    title: 'Why do my eyes feel heavy?',
    description:
      'Heavy eyes usually mean tired eyes: long screen focus, short sleep and dry air. What causes the feeling, what helps, and when heaviness needs an eye doctor.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Eyes usually feel heavy because they’re tired: long hours of close focus, short sleep, dry air and fewer blinks all leave the lids and the eye’s surface feeling weighed down. Rest, full blinks, breaks from screens and moister air often help, and a lubricating drop can ease dryness that comes with it. Heaviness with a drooping lid, vision changes, pain or headache needs an eye doctor.`,
      },
      { h: 'What heavy eyes usually mean' },
      {
        p: `“Heavy” is how many people describe the feeling of wanting to close their eyes. Lids feel weighted, the eyes feel tired, and it can be hard to keep them open. In most cases, that comes from a combination of fatigue and a dry eye surface, not from anything wrong with the lids themselves.`,
      },
      { h: 'Why do my eyes feel heavy and tired?' },
      {
        p: `Fatigue and heaviness tend to arrive together. When you’re sleepy, your blink rate changes and your lids feel harder to hold up. Long close focus, like reading or screen work, also tires the eyes. The muscles that focus the eye work hard at close range, and you blink less while concentrating. The surface of the eye dries between blinks, and that dryness adds to the heavy, scratchy feeling.`,
      },
      {
        list: [
          `Short or broken sleep.`,
          `Hours at a screen or reading without breaks.`,
          `Driving long distances, especially at night.`,
          `Dry indoor air from heating or air conditioning.`,
          `Wind, sun or smoke outdoors.`,
        ],
      },
      { h: 'Why do my eyes feel heavy when I wake up?' },
      {
        p: `Heavy eyes in the morning often come from dry air in the bedroom, a fan or vent blowing on the bed, or lids that don’t close completely during sleep. The eye surface dries during the night, and it can take a few minutes after waking for blinking to spread a fresh tear film. Short sleep makes it worse. [Dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up) covers the bedroom side.`,
      },
      { h: 'Can dry eyes make your eyes feel heavy?' },
      {
        p: `Yes. When the tear film breaks down, the eye’s surface can feel gritty, tired and heavy, and some people describe it as wanting to keep their eyes closed. Dry, heated or air-conditioned air, wind and long screen sessions all speed evaporation. Blinking spreads the tear film, so fewer blinks mean a drier surface. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains how it works.`,
      },
      { h: 'What helps heavy eyes' },
      {
        list: [
          `Close your eyes gently for a minute, then blink slowly a few times.`,
          `Take regular breaks from close work: look at something far away and blink fully.`,
          `Keep vents and fans off your face, and add moisture to dry rooms with a humidifier.`,
          `Get enough sleep, and don’t push through long drives when your eyes feel heavy.`,
          `Set your screen slightly below eye level so your lids cover more of the eye.`,
        ],
      },
      {
        p: `If your eyes feel heavy behind the wheel, pull over and rest. Heavy eyes while driving are a sign of fatigue, and drops won’t fix being tired.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `A lubricating drop can ease the dry part of the feeling. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions are: {directions}. It won’t make you less tired, and it isn’t meant to. [Do eye drops help tired eyes?](/guides/do-eye-drops-help-tired-eyes) covers what drops can and can’t do.`,
      },
      { h: 'When heavy eyes need a doctor' },
      {
        p: `Some heaviness isn’t about being tired. See an eye doctor if:`,
      },
      {
        list: [
          `An eyelid visibly droops, or one lid sits lower than the other.`,
          `The heaviness comes with blurred or double vision.`,
          `You have eye pain, a headache with the heaviness, or sensitivity to light.`,
          `It comes on suddenly or keeps getting worse.`,
          `It doesn’t improve with rest and sleep.`,
        ],
      },
      {
        p: `Sudden drooping, double vision or weakness elsewhere in the face or body needs emergency care, not an appointment. The label also says: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list.`,
      },
      { h: 'If you decide to try Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Read the [Drug Facts](/drug-facts) first, including this caution: {warnings}.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel heavy and tired?',
        a: `Usually from fatigue combined with a dry eye surface. Short sleep, long close focus, fewer blinks and dry indoor air all add to the heavy feeling.`,
      },
      {
        q: 'Why do my eyes feel heavy when I wake up?',
        a: `Dry bedroom air, a fan or vent blowing on the bed, or lids that don’t close fully can leave the eye surface dry by morning. Short sleep makes it worse.`,
      },
      {
        q: 'Can dry eyes make your eyes feel heavy?',
        a: `Yes. When the tear film breaks down, the eye’s surface can feel tired, gritty and heavy. Blinking fully and adding moisture to dry rooms often helps.`,
      },
      {
        q: 'When should I worry about heavy eyes?',
        a: `See an eye doctor if a lid droops, vision blurs or doubles, you have pain or a headache, or it comes on suddenly. Sudden drooping with facial weakness needs emergency care.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-hot',
    title: 'Why do my eyes feel hot?',
    description:
      'Eyes that feel hot or warm are often dry, tired or near a heat source. What causes the feeling, what to try at home, and when hot eyes need a doctor.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Eyes often feel hot when their surface is drying out: the tear film breaks down, and the exposed surface can feel warm or burning. Heaters, sun, screens, short sleep and rubbing add to it. Cool down the air around your face, close your eyes for a minute, blink fully and use a lubricating drop as its label directs. Hot eyes with pain, fever, vision changes or discharge need a doctor.`,
      },
      { h: 'What a hot feeling in the eyes usually means' },
      {
        p: `“Hot eyes” is a common way to describe a warm, burning or stinging sensation. The eye doesn’t usually change temperature much; what changes is how the surface feels. When tears evaporate faster than they’re replaced, nerves on the surface send signals that many people describe as heat. That’s why hot and dry often come together.`,
      },
      { h: 'Why do my eyes feel hot and tired?' },
      {
        p: `After a long day, especially one spent on screens, your eyes have been open longer between blinks, and the tear film has thinned. The focusing muscles have worked hard too. The combination feels like warm, tired eyes. A short rest with your eyes closed usually takes the edge off.`,
      },
      { h: 'Heat sources near your face' },
      {
        list: [
          `Space heaters, fireplaces and wood stoves put dry, warm air near your face.`,
          `Car heaters and dashboard vents blow hot air straight at your eyes.`,
          `Hair dryers and kitchen ovens release bursts of hot air at face level.`,
          `Sun and glare make you squint, which shortens blinks.`,
          `A hot, crowded room with poor ventilation dries the air.`,
        ],
      },
      {
        p: `Moving away from the source, or pointing it elsewhere, often helps quickly. [Why are my eyes dry and burning?](/guides/why-are-my-eyes-dry-and-burning) covers the burning side of the same feeling.`,
      },
      { h: 'Screens and hot eyes' },
      {
        p: `Screens don’t heat your eyes, but they cut your blink rate. Fewer blinks mean a drier surface, and a drier surface can feel warm. Look away from the screen every so often, blink fully a few times, and set your screen slightly below eye level so your lids cover more of the eye.`,
      },
      { h: 'Rubbing, crying and short sleep' },
      {
        p: `Rubbing tired eyes can make them feel hotter. It irritates the surface and the lids. Crying leaves the eyes feeling warm and puffy for a while too. Short sleep leaves the eye surface less refreshed in the morning. Each of these usually settles with rest.`,
      },
      { h: 'What to try at home' },
      {
        list: [
          `Close your eyes for a minute or two in a cool room.`,
          `Turn heaters and vents away from your face.`,
          `Take regular breaks from screens and close work.`,
          `Run a humidifier in a dry room.`,
          `Use a lubricating drop as its label directs.`,
        ],
      },
      { h: 'Hot eyes in summer and in winter' },
      {
        p: `The season changes the cause. In summer, sun, glare and air conditioning set on cold are the usual suspects: you squint outdoors, then sit in a car or office where chilled, dry air blows across your face. In winter, the source is more often a furnace, a space heater or a car heater pushing hot air through the dashboard vents. Both seasons end in the same place, a tear film that thins faster than blinking can rebuild it. Sunglasses handle the summer half; aiming vents elsewhere and running a humidifier handle the winter half.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. {directions}. Keep the bottle somewhere moderate, since the label says: {storage}. A bottle that sits by a heater or in a hot car isn’t stored as directed. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains more.`,
      },
      { h: 'When hot eyes need a doctor' },
      {
        p: `A hot feeling from dry air or a long day should ease with rest. See a doctor if:`,
      },
      {
        list: [
          `You have eye pain, not just discomfort.`,
          `Your vision blurs or changes.`,
          `There’s discharge, crusting or swelling.`,
          `You have a fever or feel unwell along with hot eyes.`,
          `Light hurts your eyes.`,
          `It doesn’t improve after a day or two of rest.`,
        ],
      },
      {
        p: `The label also says: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more detail.`,
      },
      { h: 'If you decide to try Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Check the [Drug Facts](/drug-facts) first, including the egg and bird allergy caution.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel hot and tired?',
        a: `Long days, especially on screens, cut your blink rate and thin the tear film. The dry surface can feel warm, and tired focusing muscles add to it. Rest with your eyes closed usually helps.`,
      },
      {
        q: 'Can dry eyes feel hot?',
        a: `Yes. When the tear film breaks down, the exposed surface can feel warm, burning or stinging. Blinking fully and moving away from heaters and vents often helps.`,
      },
      {
        q: 'When should I see a doctor for hot eyes?',
        a: `If you have eye pain, vision changes, discharge, swelling, fever, light sensitivity, or if it doesn’t improve after a day or two of rest.`,
      },
      {
        q: 'Why do my eyes feel hot after looking at a screen?',
        a: `Screens cut your blink rate, so the tear film thins between blinks and the surface can feel warm. Regular breaks and full blinks help.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-sore',
    title: 'Why do my eyes feel sore?',
    description:
      'Sore eyes usually come from long close focus, a dry eye surface, rubbing or wind and sun. What causes soreness, what helps, and when soreness means a doctor.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Eyes usually feel sore after long close focus, when the surface dries out, or after rubbing, wind, sun or smoke. The ache often comes from tired focusing muscles, while a scratchy soreness comes from a dry surface. Rest your eyes, look into the distance, blink fully, keep air off your face and use a lubricating drop as labeled. Real pain, vision changes or soreness that lingers need an eye doctor.`,
      },
      { h: 'Two kinds of sore' },
      {
        p: `People mean different things by sore eyes. One is an ache, often around or behind the eyes, after reading, screen work or driving. The other is a scratchy, raw feeling on the surface of the eye. They often come together, and the causes overlap.`,
      },
      { h: 'Sore eyes after a long day at the computer' },
      {
        p: `When you look at something close, small muscles inside the eye work to keep it in focus. Hours of close work tire them, which can feel like an ache. At the same time, concentrating on a screen cuts your blink rate, and the surface dries. The result is the familiar end-of-day soreness.`,
      },
      {
        list: [
          `Look at something at least across the room every so often.`,
          `Blink fully a few times when you switch tasks.`,
          `Keep the screen at arm’s length, slightly below eye level.`,
          `Turn up the room lighting so it isn’t much dimmer than the screen.`,
        ],
      },
      {
        p: `[Do eye drops help with eye strain?](/guides/do-eye-drops-help-with-eye-strain) explains why drops help with the dry part, not the focusing part.`,
      },
      { h: 'Scratchy soreness from a dry surface' },
      {
        p: `When the tear film breaks down, the eye’s surface loses its smooth, moist coating. Each blink can feel rough, and the eye can feel sore and gritty. Dry indoor air, wind, air conditioning and heating speed evaporation. [Why do my eyes feel gritty?](/guides/why-do-my-eyes-feel-gritty) covers the gritty side in more detail.`,
      },
      { h: 'Rubbing, wind, sun and smoke' },
      {
        list: [
          `Rubbing presses on the eye and irritates the lids and surface.`,
          `Wind dries the surface quickly, especially at speed on a bike or boat.`,
          `Bright sun and glare make you squint for hours.`,
          `Smoke from fires, grills and candles irritates the eye.`,
          `Chlorinated pools can leave eyes feeling sore after swimming.`,
        ],
      },
      { h: 'Sore eyes in the morning' },
      {
        p: `Waking with sore eyes often points to dry bedroom air, a fan or vent on the bed, or lids that don’t close fully during sleep. Short sleep adds to it. Turn vents away from the bed and consider a humidifier in winter.`,
      },
      { h: 'Sore eyes after a drive or a day outdoors' },
      {
        p: `A long drive asks for the same steady focus as a screen, often with the heater or AC running and sun through the windshield. A day of skiing, boating or yard work adds wind, glare and dust. Either way, the soreness tends to show up in the evening, once you’ve stopped. Sunglasses, vents aimed away from your face and a break every couple of hours on the road make the following morning easier. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the late drive home.`,
      },
      { h: 'What helps sore eyes' },
      {
        list: [
          `Close your eyes for a few minutes in a dim, quiet room.`,
          `Take regular breaks from screens, reading and driving.`,
          `Wear sunglasses outdoors, wraparound ones in wind.`,
          `Don’t rub. If your eyes itch or feel gritty, blink instead.`,
          `Use a lubricating drop as labeled for the dry part.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Directions: {directions}. It can ease dryness; it doesn’t rest tired focusing muscles. The label also says: {tip}.`,
      },
      { h: 'Sore or painful?' },
      {
        p: `Soreness from a long day fades with rest. Pain is different. Quell’s label lists eye pain among the reasons to stop: {stopUse} See an eye doctor if:`,
      },
      {
        list: [
          `The soreness is sharp, deep or getting worse.`,
          `Your vision blurs or changes.`,
          `Light hurts your eyes.`,
          `One eye is much worse than the other.`,
          `You had something hit or get into your eye.`,
          `It doesn’t improve after a few days of rest.`,
        ],
      },
      {
        p: `An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list.`,
      },
      { h: 'If you decide to try Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Read the [Drug Facts](/drug-facts) first.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel sore after looking at a screen?',
        a: `Close focus tires the muscles that focus the eye, and concentrating cuts your blink rate so the surface dries. Breaks, distance focus and full blinks help.`,
      },
      {
        q: 'Is it normal for eyes to feel sore at the end of the day?',
        a: `Mild soreness after long close work or a day in dry air is common and usually eases with rest. Soreness that lingers, or real pain, needs an eye doctor.`,
      },
      {
        q: 'What is the difference between sore eyes and eye pain?',
        a: `Soreness is an ache or scratchiness that fades with rest. Pain is sharp, deep or worsening, and the label lists eye pain as a reason to stop use and ask a doctor.`,
      },
      {
        q: 'Why do I wake up with sore eyes?',
        a: `Dry bedroom air, a fan or vent on the bed, lids that don’t close fully or short sleep can leave the eye’s surface dry and sore by morning.`,
      },
    ],
  },
  {
    slug: 'why-do-i-feel-like-rubbing-my-eyes',
    title: 'Why do I feel like rubbing my eyes?',
    description:
      'The urge to rub your eyes usually comes from dryness, fatigue or irritants. Why it happens, why rubbing makes things worse, and what to do instead.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The urge to rub your eyes usually comes from a dry, gritty surface, fatigue, or irritants like dust, smoke and pollen. Rubbing feels good for a moment but irritates the eye further. Instead, close your eyes and blink slowly, wash your hands, cool the air around your face and use a lubricating drop as labeled. Itching that keeps coming back, or rubbing you can’t stop, is worth asking an eye doctor about.`,
      },
      { h: 'Why you want to rub' },
      {
        p: `The surface of the eye is very sensitive. When something feels off, whether dryness, a speck of dust or fatigue, the reflex is to rub. Rubbing presses on the eye and stimulates tear production, which brings brief relief. That’s why it feels so satisfying, and why the urge comes back.`,
      },
      { h: 'Dryness and grit' },
      {
        p: `When the tear film breaks down, the eye can feel scratchy or as if something is in it. That gritty feeling triggers the urge to rub. Dry indoor air, wind, screens and short sleep all contribute. [Why do my eyes feel gritty?](/guides/why-do-my-eyes-feel-gritty) explains the gritty feeling.`,
      },
      { h: 'Being tired' },
      {
        p: `People often rub their eyes when they’re sleepy. Tired eyes blink less fully, the surface dries, and rubbing feels like a way to wake up. If you notice yourself rubbing your eyes at the end of the day, that’s often a sign to rest your eyes or go to bed.`,
      },
      { h: 'Itching and irritants' },
      {
        p: `Dust, smoke, pet dander, pollen and chemical fumes can make the eyes itch. Cosmetics near the lash line can too. Itching is a strong urge to rub. If itching comes back with the seasons or around certain things, an eye doctor or your regular doctor can help find out why.`,
      },
      { h: 'Is rubbing your eyes bad?' },
      {
        p: `An occasional gentle rub isn’t usually a problem, but frequent or hard rubbing can irritate the eye and the skin around it. Rubbing can also move dirt and germs from your hands to your eyes, and it can drag a particle across the eye’s surface. If something is in your eye, rubbing is the wrong move.`,
      },
      { h: 'Rubbing at the desk, in bed and on waking' },
      {
        p: `The urge tends to cluster around a few moments. At a desk, it shows up after a long stretch of reading, once the surface has dried between half-blinks. At night, it arrives as you get sleepy and your lids start to droop. On waking, it follows hours in dry bedroom air. Knowing your moments helps you get ahead of them: a screen break before the itch builds, an earlier bedtime, a humidifier, or a vent turned away from the pillow. [Can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed) covers the evening routine.`,
      },
      { h: 'What to do instead of rubbing' },
      {
        list: [
          `Close your eyes and blink slowly several times.`,
          `Wash your hands before touching your eyes at all.`,
          `If something is in your eye, blink and let your tears carry it out.`,
          `Move away from vents, fans, smoke and dust.`,
          `Rest your eyes with a short break from screens.`,
          `Use a lubricating drop as its label directs.`,
        ],
      },
      { h: 'How to stop rubbing your eyes' },
      {
        p: `Rubbing is often a habit. A few changes can make it less automatic:`,
      },
      {
        list: [
          `Notice when you do it: tired, stressed, at the screen, waking up.`,
          `Keep your hands busy, or rest them away from your face while you read or work.`,
          `Address the dryness behind the urge: humidity, screen breaks, sleep.`,
          `If you wear eye makeup, remove it fully at night.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `If dryness is behind the urge, a lubricating drop can help. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions say: {directions}. Wash your hands first, and follow the label: {tip}.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `See an eye doctor if itching or the urge to rub keeps coming back, if your eyes look swollen, if there’s discharge, or if your vision changes. The label also says: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
      { h: 'If you decide to try Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Read the [Drug Facts](/drug-facts) first, including the caution: {warnings}.`,
      },
    ],
    faq: [
      {
        q: 'Why do I keep rubbing my eyes?',
        a: `Usually because they feel dry, gritty, tired or itchy. Rubbing brings brief relief, which is why the urge comes back. Addressing the dryness or irritant behind it helps.`,
      },
      {
        q: 'Is rubbing your eyes bad for them?',
        a: `An occasional gentle rub isn’t usually a problem, but frequent or hard rubbing irritates the eye and can move dirt from your hands to your eyes.`,
      },
      {
        q: 'What can I do instead of rubbing my eyes?',
        a: `Close your eyes and blink slowly, wash your hands, move away from vents and smoke, rest from screens, and use a lubricating drop as its label directs.`,
      },
      {
        q: 'How do I stop rubbing my eyes when I’m tired?',
        a: `Notice when you do it, keep your hands away from your face while you work, and take the urge as a sign to rest your eyes or go to bed.`,
      },
    ],
  },
]
