import type { Guide } from '@/lib/guide-types'
export const DAILY_20261121_E: Guide[] = [
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-punta-gorda-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid PGD; saved at .daily-job/acis1121/PGD.json and .daily-job/e1121/mint_PGD.json)
   *   (PUNTA GORDA CHARLOTTE COUNTY AP, elev 20 ft: Jan max 75.3 F, min 50.5 F;
   *   Jul and Aug max 92.5; Aug min 74.5; Dec precip 1.99 in (driest), Nov 2.12,
   *   Jan 2.32, Feb 2.47, Mar 2.28, Apr 2.23; Jun 9.24 (wettest), Jul 8.06,
   *   Aug 9.11, Sep 6.87; twelve monthly precip normals sum to 52.97 in;
   *   snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Punta Gorda row: no humidity or wind figure.
   * - Charlotte Harbor named as general geography, not a checked landmark.
   */
  {
    slug: 'dry-eye-relief-punta-gorda-fl',
    title: 'Dry eye relief in Punta Gorda, Florida',
    description:
      'Punta Gorda gets about 53 inches of rain a year, yet December averages under 2. NOAA’s numbers and day-to-day dry eye relief on Charlotte Harbor.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Punta Gorda depends on the month. NOAA’s 1991–2020 normals for the Punta Gorda airport show six lean months, November through April, at roughly 2 to 2.5 inches of rain each, then a soaking summer spent under air conditioning. Guard your eyes from wind and glare on the water, blink fully, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Punta Gorda airport record shows' },
      {
        p: `The figures below are NOAA’s 1991–2020 climate normals for Punta Gorda’s Charlotte County Airport, as published through the National Weather Service’s NOWData. The station sits about 20 feet above sea level, which is to say barely above the harbor.`,
      },
      {
        list: [
          `January: a normal high of 75.3°F and a low of 50.5°F.`,
          `July and August: highs of 92.5°F, with August nights holding near 74.5°F.`,
          `December is the driest month at 1.99 inches; November follows at 2.12.`,
          `June is the wettest at 9.24 inches, and August is close behind at 9.11.`,
          `The twelve monthly normals add up to about 53 inches of rain a year.`,
        ],
      },
      {
        p: `The station has no snowfall normal, which nobody here will miss. The spread between the two halves of the year is the useful part: June alone brings more rain than December, January and February put together.`,
      },
      { h: 'Six lean months on a wet coast' },
      {
        p: `People are often surprised that a city with 53 inches of annual rain can feel dry on the eyes. The total hides the timing. From November into April, fronts pass through, skies clear, and the breeze off the Gulf carries less moisture than it does in July. Bright, open days with a steady wind pull water from the tear film between blinks, and the eye answers with grit, burning or a tired, heavy feeling by late afternoon.`,
      },
      {
        p: `The tear film has an outer oil layer that slows evaporation, a watery middle and a mucus layer against the eye. When the oil layer is thin, or the air moving across the eye is dry and fast, the water underneath goes faster. That is why the same person can feel fine in a muggy August and scratchy on a crisp, sunny March afternoon. [Why eyes feel dry when it’s humid](/guides/why-are-my-eyes-dry-when-it-is-humid) covers the other half of that puzzle.`,
      },
      { h: 'On Charlotte Harbor: wind, spray and glare' },
      {
        p: `Time on the water is a big part of life here, whether it’s a flats boat at dawn, a kayak in the mangroves or a sunset cruise. Each one stacks three things against the eyes: moving air, salt spray and light bouncing off the surface. A few habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses with side coverage; the shape blocks wind as well as glare.`,
          `Add a brimmed hat so the sun isn’t landing straight in your eyes from above.`,
          `Rinse and dry your hands before touching your face or a dropper bottle after handling bait, lines or salt-wet rails.`,
          `When the boat is running, turn your face out of the wind for a few slow, complete blinks.`,
          `Keep eye drops in a shaded dry bag or a pocket, never on a sunny console.`,
        ],
      },
      {
        p: `That last point matters more on a summer boat than people think. Quell’s storage line reads: {storage}. A dark console in August sun can run far past the top of that range, so a bottle belongs in the cooler’s dry compartment or a shaded cabin, not baking in a cup holder.`,
      },
      { h: 'June through September, indoors' },
      {
        p: `When normal highs stay above 90°F for months, most of the day happens in conditioned air. Air conditioning pulls moisture out of a room as it cools it, and vents push that drier air across the face. In a car, aim the vents at your chest. At home, check that a ceiling fan isn’t blowing directly over the couch or the bed. At a desk, slide the monitor a little below eye level so your lids cover more of the eye while you work.`,
      },
      { h: 'After a storm: cleanup dust and long days' },
      {
        p: `Summer and early fall are also storm season on this coast, and the days after a big storm bring their own eye trouble: drywall dust, sawdust, insulation fibers, generator exhaust and hours spent outside in heat. Safety glasses or goggles keep debris out far better than any drop can put it right afterward. If something lodges in the eye, don’t rub it; a lubricating drop is not an eye wash, and a particle that won’t come out needs medical care.`,
      },
      { h: 'Cool mornings in January' },
      {
        p: `A normal January low of about 50°F means some mornings call for a jacket on the harbor walk and a heat pump running for an hour or two. That brief burst of heated air can leave a bedroom drier than it feels. If you wake with sticky, scratchy eyes on those mornings, try a lower heat setting, a closed vent near the bed, or a small humidifier. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) walks through sizing and cleaning one.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. The directions read: {directions}. And one rule keeps the bottle clean: {tip}.`,
      },
      {
        p: `Before a first bottle, read the caution: {warnings}. The panel also says: {doNotUse}. {stopUse} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Punta Gorda' },
      {
        p: `Orders ship from Brentwood, Tennessee, to addresses anywhere in the United States, including Punta Gorda, Port Charlotte and the rest of Charlotte County. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order before you run low. Our [Punta Gorda page](/eye-drops/punta-gorda-fl) and the [Florida page](/eye-drops/state/florida) have local notes.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop can ease dryness; it can’t tell you why it’s happening. Pain, a change in vision, light that suddenly hurts, or irritation that keeps returning are reasons to book a visit, and an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the ones not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Punta Gorda?',
        a: 'December, at 1.99 inches of rain in NOAA’s 1991–2020 normals for the Punta Gorda airport. November is close at 2.12 inches, and every month from November through April stays under about 2.5 inches.',
      },
      {
        q: 'How hot does Punta Gorda get in the summer?',
        a: 'NOAA’s normals put July and August highs at 92.5°F, with August lows near 74.5°F. Most summer hours are spent in air conditioning, which dries indoor air as it cools it.',
      },
      {
        q: 'Can I keep eye drops on my boat in Punta Gorda?',
        a: 'Only somewhere shaded. Quell’s label says to store it between 59° and 86°F, and a sunny console on a summer day runs well past that, so keep the bottle in a dry bag, a cabin or a pocket.',
      },
      {
        q: 'Does Quell ship to Punta Gorda, Florida?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Punta Gorda and Port Charlotte. No delivery date is promised, so order before your current bottle runs out.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-racine-wi:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid RAC; saved at .daily-job/acis1121/RAC.json and .daily-job/e1121/mint_RAC.json)
   *   (RACINE BATTEN AIRPORT, elev 668 ft: Jan max 30.5 F, min 16.0 F; Feb max
   *   33.6, min 18.5; Mar min 27.5; Nov min 32.2; Dec max 35.5, min 22.2; Jul max
   *   81.4, min 63.1; Feb precip 1.10 in (driest), Jan 1.25; Jun 3.99 (wettest),
   *   Apr 3.70; twelve monthly precip normals sum to 31.77 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Racine row: no humidity or wind figure.
   * - Lake Michigan named as general geography.
   */
  {
    slug: 'dry-eye-relief-racine-wi',
    title: 'Dry eye relief in Racine, Wisconsin',
    description:
      'Racine’s January lows average 16°F and February is its driest month. NOAA’s Batten Airport numbers and practical dry eye relief for a long heating season.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Racine is mostly a winter project. NOAA’s 1991–2020 normals for Racine’s Batten Airport put January lows near 16°F and make February the driest month, and from November to March the furnace runs hard. Add moisture back indoors, keep vents and defrosters off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Batten Airport’s record, month by month' },
      {
        p: `NOAA’s 1991–2020 climate normals for Racine’s Batten Airport, the data behind the National Weather Service’s NOWData pages, list the station at about 670 feet, a short distance in from the Lake Michigan shore. The months that matter most for dry eyes:`,
      },
      {
        list: [
          `January: normal high 30.5°F, normal low 16.0°F.`,
          `February: high 33.6°F, low 18.5°F, and the year’s smallest precipitation normal at 1.10 inches.`,
          `December: high 35.5°F, low 22.2°F.`,
          `November’s normal low is 32.2°F and March’s is 27.5°F, so freezing nights bracket five months.`,
          `July: high 81.4°F, low 63.1°F.`,
          `June is the wettest month at 3.99 inches, and the year totals about 31.8 inches.`,
        ],
      },
      {
        p: `NOAA’s record for this station has no snowfall normal, so this page doesn’t quote one.`,
      },
      { h: 'Why February feels driest on the eyes' },
      {
        p: `Cold air can’t hold much water to begin with. When a furnace takes 16-degree air and warms it to 70, the amount of moisture stays the same while the room’s relative humidity drops sharply. By February, a house has been sealed and heated for three months, and the low precipitation normal fits what many people notice: cracked lips, static shocks, and eyes that sting by evening. The tear film’s watery layer evaporates faster in that air, and the outer oil layer has more work to do.`,
      },
      { h: 'Inside a Racine house in winter' },
      {
        list: [
          `Run a humidifier in the bedroom and clean it on the schedule its manual gives.`,
          `Close or deflect the floor register nearest the bed or your favorite chair.`,
          `Turn the thermostat down a few degrees at night; cooler air dries the eyes less.`,
          `Keep a fireplace or space heater from blowing toward where you sit.`,
          `Take breaks from the TV or tablet during long winter evenings, and finish each blink.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains forced air, radiators and space heaters one at a time, if your house has a mix.`,
      },
      { h: 'The car: remote starts and the defroster' },
      {
        p: `A January morning in Racine usually starts with a frosted windshield. The defroster blasts hot, dry air upward, and on a short drive it often stays on high the whole way. Point the dash vents down and away from your face, use the floor setting once the glass clears, and switch to recirculate only as long as the windows stay clear. On a longer drive up to Milwaukee or down to Chicago, a few deliberate blinks at red lights help more than you’d think.`,
      },
      { h: 'Lakefront wind in the shoulder seasons' },
      {
        p: `Spring and fall walks along Lake Michigan bring cold wind that makes eyes water, which seems like the opposite of dry. Watering is often the eye’s reflex response to irritation, and those reflex tears don’t have the same balance as the steady tear film. Sunglasses, or clear glasses on a gray day, shield the eyes from the wind directly. [Protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more on frames and fit.`,
      },
      { h: 'Summer is a break, mostly' },
      {
        p: `July’s normal high of about 81°F is mild by national standards, and many homes in town lean on window units or central air only part of the summer. Air conditioning dries air as well, though, and a fan in the bedroom aimed at the pillow can leave eyes sticky in the morning. If summer still brings trouble, look at the airflow first.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses: {uses}. Directions: {directions}. The panel also carries this caution, worth reading before your first bottle: {warnings}.`,
      },
      {
        p: `For storage the label says: {storage}. A bottle left in a car through a Wisconsin January will fall well below that, and a bottle left on a glove box in July can rise above it, so keep it in a coat pocket or bag. The panel’s stop-use line: {stopUse} Everything printed on the carton is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered to Racine' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including Racine, Mount Pleasant, Caledonia and Sturtevant. Shipping is {shipping}, and free on {freeBottles} or more bottles. No delivery date is promised. If a package might sit on a porch in a deep freeze, have it sent to a workplace or ask a neighbor to bring it in. See our [Racine page](/eye-drops/racine-wi) and the [Wisconsin page](/eye-drops/state/wisconsin).`,
      },
      { h: 'When a doctor should look' },
      {
        p: `If eyes hurt, vision blurs and doesn’t clear with blinking, or irritation keeps coming back after the furnace season ends, it’s time for an eye doctor. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Racine, Wisconsin get in January?',
        a: 'NOAA’s 1991–2020 normals for Racine’s Batten Airport put the January high at 30.5°F and the low at 16.0°F. December and February are only a few degrees warmer, so heating runs for months.',
      },
      {
        q: 'What is the driest month in Racine?',
        a: 'February, with a precipitation normal of 1.10 inches at Batten Airport. It also comes after three months of sealed, heated houses, which is when many people notice their eyes feel driest.',
      },
      {
        q: 'Does a car defroster dry out your eyes?',
        a: 'It can. A defroster pushes hot, dry air upward toward the windshield and your face. Aim the vents down, switch to the floor setting once the glass is clear, and blink fully on longer drives.',
      },
      {
        q: 'Does Quell ship to Racine, WI?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Racine and Mount Pleasant. No delivery date is promised, so order early and have the box brought inside in very cold weather.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-sanford-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid SFB; saved at .daily-job/acis1121/SFB.json and .daily-job/e1121/mint_SFB.json)
   *   (ORLANDO SANFORD AP, elev 49 ft: Jan max 71.3 F, min 49.6 F; Dec max 73.4,
   *   min 52.7; Apr max 83.4, precip 2.35; May max 88.5; Jul max 92.7; Aug max 92.5,
   *   min 74.6; Nov precip 1.88 in (driest); Feb 2.25; Jun 8.19 (wettest), Jul 7.29;
   *   twelve monthly precip normals sum to 49.63 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Sanford row: no humidity or wind figure.
   * - Station named honestly: Orlando Sanford airport. St. Johns River and Lake
   *   Monroe named as general geography.
   */
  {
    slug: 'dry-eye-relief-sanford-fl',
    title: 'Dry eye relief in Sanford, Florida',
    description:
      'November is the driest month at the Orlando Sanford airport, and spring heats up fast. NOAA’s numbers and everyday dry eye relief for Sanford.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Sanford means paying attention in the cool months and the spring warm-up. NOAA’s 1991–2020 normals for the Orlando Sanford airport make November the driest month, at 1.88 inches, and April and May bring heat before the summer rains return. Protect your eyes from wind and glare on the river, limit vents blowing at your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Sanford’s weather station is the airport' },
      {
        p: `The numbers here are NOAA’s 1991–2020 climate normals for the Orlando Sanford airport, the official station in town, as published through the National Weather Service’s NOWData. Despite the Orlando in its name, the field is in Sanford itself, about 49 feet above sea level.`,
      },
      {
        list: [
          `November: 1.88 inches of rain, the smallest normal of the year.`,
          `February: 2.25 inches; April: 2.35 inches.`,
          `January: high 71.3°F, low 49.6°F, the coolest month.`,
          `April’s normal high reaches 83.4°F and May’s 88.5°F, before the rainy season starts.`,
          `June is the wettest month at 8.19 inches; July brings 7.29 and a high of 92.7°F.`,
          `August nights stay near 74.6°F, and the year adds up to about 49.6 inches.`,
        ],
      },
      { h: 'The spring squeeze: heat before the rain' },
      {
        p: `Many Central Florida guides focus on winter as the dry season, and the November figure supports that. Sanford’s record shows a second stretch worth watching: April and May. Highs climb into the upper 80s while monthly rain stays around 2.3 to 3.3 inches, so the sun is strong, the ground is dry, and the breeze carries pollen and dust. Eyes lose water faster on warm, bright, breezy days, and that combination peaks just before June’s storms arrive.`,
      },
      {
        list: [
          `Do yard work and long walks early, before the afternoon heat and breeze build.`,
          `Wear sunglasses that wrap at the sides when mowing or using a blower.`,
          `Wash your face and hands after yard work before touching your eyes.`,
          `Watch for squinting at screens after a long day outside; it often means the eyes need a break.`,
        ],
      },
      { h: 'On the St. Johns River and Lake Monroe' },
      {
        p: `Sanford’s waterfront is a draw for walking, fishing and boating. Water reflects sunlight back up under the brim of a hat, and wind across open water speeds evaporation from the tear film. Polarized sunglasses cut that reflected glare, and a wraparound shape blocks the side breeze. Take a few slow, complete blinks every so often when you’re watching a line or the horizon, because steady staring slows blinking.`,
      },
      { h: 'Flying out of Sanford' },
      {
        p: `With the airport right in town, plenty of residents start trips here. Airplane cabins are known for dry air, and a long flight of reading or watching a screen keeps the eyes open longer than usual. Keep a bottle in your personal item, set the overhead air vent away from your face, and close your eyes for a few minutes now and then. [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) covers cabin air in detail, and [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) explains the screening side.`,
      },
      { h: 'Cool nights and the first heater of the season' },
      {
        p: `January’s normal low is just under 50°F. On those mornings, heat pumps and space heaters switch on, often for the first time in months, and the dust they burn off can irritate eyes for a day or two. Change the system’s filter in the fall, keep a space heater pointed away from the bed, and open a window for a few minutes once the house warms up.`,
      },
      { h: 'Summer: living in conditioned air' },
      {
        p: `From June through September, the outdoors is humid but most time is spent inside. Air conditioning removes moisture and moving air from vents dries the eye surface. Point car vents toward your chest, keep desk fans off your face, and use the 20-20-20 idea at work: every 20 minutes, look about 20 feet away for about 20 seconds.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Here is the Uses line from the Drug Facts panel: {uses}. And the directions: {directions}. Keep the dropper tip clean, because the panel says: {tip}.`,
      },
      {
        p: `The first caution on the panel: {warnings}. The storage line is worth remembering in a parked car here: {storage}. The stop-use line reads: {stopUse} See the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Sanford' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including Sanford, Lake Mary and the rest of Seminole County. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. There’s no promised delivery date, so reorder before the last bottle is half gone. Local notes are on the [Sanford page](/eye-drops/sanford-fl) and the [Florida page](/eye-drops/state/florida).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps returning, eye pain, or vision changes are reasons to see an eye doctor rather than reach for another bottle. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which signs are urgent.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Sanford, Florida?',
        a: 'November, at 1.88 inches in NOAA’s 1991–2020 normals for the Orlando Sanford airport. February and April are also lean, at 2.25 and 2.35 inches.',
      },
      {
        q: 'Is the Orlando Sanford airport in Orlando?',
        a: 'No. Despite the name, the airport and its weather station are in Sanford, in Seminole County. That makes its NOAA normals the right ones to use for Sanford’s climate.',
      },
      {
        q: 'Why do my eyes feel dry in Florida in the spring?',
        a: 'In Sanford, April and May bring highs in the 80s with only about 2.3 to 3.3 inches of rain a month, plus breeze and pollen. Warm, bright, breezy air pulls water from the tear film faster.',
      },
      {
        q: 'Can I order Quell to Sanford or Lake Mary?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address in Seminole County and beyond. Shipping costs and the free-shipping bottle count are shown at checkout, and no delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-texarkana-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid TXK; saved at .daily-job/acis1121/TXK.json and .daily-job/e1121/mint_TXK.json)
   *   (TEXARKANA WEBB FIELD, state AR, elev 380 ft: Jan max 54.0 F, min 35.1 F;
   *   Jul max 92.7, min 72.3; Aug max 92.8, min 71.3; Aug precip 2.98 in (driest),
   *   Jul 3.37; May 5.10 (wettest); Dec 4.68; Oct 4.51; twelve monthly precip
   *   normals sum to 48.87 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Texarkana row: no humidity or wind figure.
   * - Station named honestly: ACIS lists Webb Field under Arkansas.
   */
  {
    slug: 'dry-eye-relief-texarkana-tx',
    title: 'Dry eye relief in Texarkana, Texas',
    description:
      'August is both the hottest and driest month at Texarkana’s Webb Field. NOAA’s numbers and practical ways to ease dry eyes on either side of State Line Avenue.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Texarkana peaks in late summer. NOAA’s 1991–2020 normals for Webb Field make August both the hottest month, at a 92.8°F high, and the driest, at 2.98 inches, so days pass in air conditioning and car vents. Keep cold air off your face, rest your eyes on long drives, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'One weather station for a two-state city' },
      {
        p: `Texarkana’s official weather records come from Webb Field, the regional airport. NOAA’s system files that station under Arkansas, since the field sits on that side of the line, but it serves the Texas side just as well; the two downtowns are minutes apart. The figures here are NOAA’s 1991–2020 climate normals for the station, the same data the National Weather Service publishes through NOWData. The station is about 380 feet above sea level.`,
      },
      {
        list: [
          `August: high 92.8°F, low 71.3°F, and 2.98 inches of rain, the least of any month.`,
          `July: high 92.7°F, low 72.3°F, and 3.37 inches.`,
          `May is the wettest month at 5.10 inches.`,
          `December brings 4.68 inches with a high of 55.7°F.`,
          `January: high 54.0°F, low 35.1°F.`,
          `All twelve months together come to about 48.9 inches.`,
        ],
      },
      { h: 'August: heat plus the lightest rain of the year' },
      {
        p: `In much of the country, the hottest month is also a stormy one. In Texarkana’s record, the hottest stretch lines up with the lightest rainfall, and that pushes almost everyone indoors or into a car with the air on high. Air conditioning dries the air as it cools, and a vent blowing toward the face speeds evaporation from the tear film. By evening, eyes can feel gritty, hot or heavy even though the air outside feels thick.`,
      },
      {
        list: [
          `Angle car vents toward your chest or the floor instead of your eyes.`,
          `Raise the thermostat a degree or two at night; a colder room means more air movement over the bed.`,
          `Keep a box fan from blowing straight across the pillow.`,
          `Step outside into the shade for a few minutes on breaks; it’s a change of air, not just of scenery.`,
        ],
      },
      { h: 'Highway hours on I-30' },
      {
        p: `Texarkana sits on Interstate 30, and plenty of residents drive it regularly for work, family or shopping. Long highway stretches in the sun mean steady staring at the road, slower blinking, and dashboard air in your face the whole time. Wear sunglasses for glare, stop every couple of hours, close your eyes for a minute at the rest stop, and keep a bottle in a console or bag rather than on the dashboard. Quell’s label says: {storage}. A parked car in a Texarkana August can climb far past that.`,
      },
      { h: 'Wet winters, dry rooms' },
      {
        p: `December and January aren’t dry outside here; December’s normal is 4.68 inches, more than August’s. But January lows near 35°F mean heaters run, and heated indoor air has low relative humidity even when it’s raining outside. A bedroom humidifier and a vent closed near the bed are simple fixes. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more.`,
      },
      { h: 'Fall in the woods and fields' },
      {
        p: `Autumn brings deer stands, football bleachers and yard cleanup across Bowie and Miller counties. Wind on an open field, leaf dust from a blower and long, focused watching all dry the eyes. Wear glasses outside, keep your hands clean before touching your face, and blink fully when you catch yourself staring. Treestands in late fall can be cold and breezy; a buff or a hat brim helps block wind from your eyes.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel describes its Uses this way: {uses}. Directions are printed as: {directions}. The panel also includes this caution: {warnings}.`,
      },
      {
        p: `One line about appearance: {milky}. {appearance} And this rule applies to the bottle: {doNotUse}. When to stop: {stopUse} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Texarkana, Texas or Arkansas' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, so both Texarkanas, Nash, Wake Village and the surrounding towns are covered. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Delivery dates aren’t promised. Our [Texarkana page](/eye-drops/texarkana-tx) and the [Texas page](/eye-drops/state/texas) have more.`,
      },
      { h: 'When an eye doctor should look' },
      {
        p: `Eye pain, vision that changes, or dryness that keeps returning are signs to see an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the ones to act on quickly.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Texarkana?',
        a: 'August, by a hair. NOAA’s 1991–2020 normals for Webb Field put the August high at 92.8°F and July’s at 92.7°F. August is also the driest month there, at 2.98 inches.',
      },
      {
        q: 'Is the Texarkana weather station in Texas or Arkansas?',
        a: 'NOAA files Webb Field, the regional airport and official station, under Arkansas. The two cities are next to each other, so its normals describe the climate on both sides of the state line.',
      },
      {
        q: 'Why are my eyes dry in Texarkana in the summer?',
        a: 'Most of a Texarkana summer is spent in air conditioning, which dries the air as it cools. Vents blowing at the face speed evaporation from the tear film, especially in August.',
      },
      {
        q: 'Does Quell ship to Texarkana?',
        a: 'Yes, to both Texarkana, Texas and Texarkana, Arkansas. Quell ships from Brentwood, Tennessee, to any US address, and no delivery date is promised, so order ahead.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-vancouver-wa:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid VUO; saved at .daily-job/acis1121/VUO.json and .daily-job/e1121/mint_VUO.json)
   *   (VANCOUVER PEARSON AP, elev 21 ft: Jan max 47.0 F, min 34.4 F; Dec max 46.5,
   *   min 35.0, precip 6.07 in (wettest); Nov 5.51; Jan 5.34; Jun 1.61; Jul 0.42
   *   (driest), max 80.9, min 57.1; Aug 0.52, max 81.6, min 57.2; Sep 1.43;
   *   twelve monthly precip normals sum to 37.47 in; Nov+Dec+Jan = 16.92 in;
   *   snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Vancouver WA row: no humidity or wind figure.
   * - Columbia River named as general geography.
   */
  {
    slug: 'dry-eye-relief-vancouver-wa',
    title: 'Dry eye relief in Vancouver, Washington',
    description:
      'Vancouver’s Pearson Field gets 6 inches of rain in December and under half an inch in July. NOAA’s numbers and how to ease dry eyes in both halves of the year.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Vancouver, Washington, changes with its two seasons. NOAA’s 1991–2020 normals for Pearson Field show July averaging 0.42 inches of rain against 6.07 in December, so summer eyes face sun and dry breezes while winter eyes face furnaces and screens. Adjust indoor air, take screen breaks, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Pearson Field’s numbers' },
      {
        p: `Vancouver’s station is Pearson Field, near the Columbia River, at about 21 feet above sea level. These are NOAA’s 1991–2020 climate normals for it, as published through the National Weather Service’s NOWData.`,
      },
      {
        list: [
          `December is the wettest month at 6.07 inches, with a high of 46.5°F and a low of 35.0°F.`,
          `November (5.51 inches) and January (5.34) round out the three wettest months.`,
          `July is the driest month at 0.42 inches, with a high of 80.9°F.`,
          `August brings 0.52 inches, a high of 81.6°F and a low of 57.2°F.`,
          `The year totals about 37.5 inches.`,
        ],
      },
      {
        p: `Those three wet months together account for almost 17 of the year’s roughly 37.5 inches, close to half. The record has no snowfall normal, so none is given here.`,
      },
      { h: 'Two halves of the year' },
      {
        p: `It helps to think of Vancouver as two different climates for the eyes. From late fall through early spring, the air outside is damp and cool, and the drying happens indoors: heat runs, windows stay shut, and days are short, so more hours go to screens. From late June to mid-September, the outdoors itself turns dry, with long sunny afternoons and very little rain. A routine that works in January may not work in August, and that’s normal.`,
      },
      { h: 'The gray months: heat, screens and short days' },
      {
        list: [
          `Run a humidifier in the room where you spend evenings, and keep it clean.`,
          `Lower the thermostat at night and keep heat registers from blowing at the bed.`,
          `Use the 20-20-20 habit at the computer: every 20 minutes, look about 20 feet away for 20 seconds.`,
          `Turn screen brightness down to match a dim room so you don’t squint.`,
          `Finish your blinks; partial blinks leave the lower part of the eye exposed.`,
        ],
      },
      {
        p: `Remote and hybrid workers spend a lot of the wet season at home desks. [Dry eyes for remote workers](/guides/dry-eyes-for-remote-workers) covers home office setup in more depth.`,
      },
      { h: 'Crossing the river every day' },
      {
        p: `Many Vancouver residents commute across the Columbia into Portland. Bridge traffic means stop-and-go driving, a heater or air conditioner running the whole time, and plenty of staring at brake lights. Point the vents away from your face, use the floor setting on the heater, and rest your eyes while stopped instead of checking your phone. A bottle kept in a bag rather than the glove box stays nearer the label’s range: {storage}.`,
      },
      { h: 'July and August: the dry half' },
      {
        p: `With normal highs in the low 80s and rain nearly absent, summer is pleasant but drying. Long days at the waterfront, on trails or in a backyard expose the eyes to sun and breeze for hours. August nights cool to the upper 50s, so many homes open windows instead of running air conditioning, which helps. During the day, sunglasses with good side coverage and a hat brim reduce exposure. If a fan runs at night, keep it off your face.`,
      },
      { h: 'June: the hinge month' },
      {
        p: `June sits between the two halves, at 1.61 inches. Many people stop running the furnace and haven’t yet adjusted to the drier air outside. If your eyes start to feel scratchy in late June, that may be the switch in seasons. Look at time outdoors, glare, and airflow rather than assuming the cause is the same as in winter.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. From the Drug Facts panel, the Uses: {uses}. Directions: {directions}. And a hygiene note: {tip}.`,
      },
      {
        p: `Read this caution first: {warnings}. The stop-use line: {stopUse} The full panel, including inactive ingredients, is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Vancouver' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including Vancouver, Camas, Battle Ground and the rest of Clark County. Shipping is {shipping}, free on {freeBottles} or more bottles, with no promised delivery date. Our [Vancouver page](/eye-drops/vancouver-wa) and the [Washington page](/eye-drops/state/washington) have more on the area.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If eye pain, vision changes or ongoing irritation show up, see an eye doctor. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Vancouver, Washington?',
        a: 'July, at 0.42 inches of rain in NOAA’s 1991–2020 normals for Pearson Field. August is close behind at 0.52 inches.',
      },
      {
        q: 'How much rain does Vancouver, WA get in December?',
        a: 'About 6.07 inches at Pearson Field, the wettest month of the year. November and January add about 5.5 and 5.3 inches, so those three months bring close to half the yearly total.',
      },
      {
        q: 'Why do my eyes feel dry in Vancouver when it rains all winter?',
        a: 'In the wet months, the drying happens indoors. Heated air has low relative humidity, windows stay shut, and short days mean more screen time, which slows blinking.',
      },
      {
        q: 'Does Quell ship to Vancouver, Washington?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Vancouver and Camas. Shipping cost is shown at checkout, and no delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-vineland-nj:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid MIV; saved at .daily-job/acis1121/MIV.json and .daily-job/e1121/mint_MIV.json)
   *   (MILLVILLE MUNICIPAL AIRPORT, elev 58 ft: Jan max 42.2 F, min 23.8 F; Feb
   *   max 44.6, min 24.6, precip 2.63 in (driest); Mar min 31.4; Dec max 46.7, min
   *   27.9; Jul max 86.1, min 66.2, precip 4.26; Aug max 84.3, precip 4.61 (wettest);
   *   every month between 2.63 and 4.61 in; twelve monthly precip normals sum to
   *   43.37 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Millville row: no humidity or wind figure.
   * - Station named honestly: Vineland has no NOAA normals station; Millville's
   *   airport is the nearest. Route 55 and Cumberland County named as general geography.
   */
  {
    slug: 'dry-eye-relief-vineland-nj',
    title: 'Dry eye relief in Vineland, New Jersey',
    description:
      'Vineland has no real dry season: every month averages 2.6 to 4.6 inches of rain. Where dry eyes come from in South Jersey instead, and what helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Vineland has less to do with rainfall than with heat and wind. NOAA’s 1991–2020 normals for nearby Millville’s airport show steady precipitation all year, yet January lows near 24°F keep furnaces running for months, and open farmland lets the wind sweep across. Humidify heated rooms, block wind outdoors, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why the numbers come from Millville' },
      {
        p: `Vineland doesn’t have its own long-term NOAA normals station, so the nearest one is the Millville Municipal Airport, a short drive south in Cumberland County at about 58 feet above sea level. The figures here are NOAA’s 1991–2020 climate normals for that airport, the data behind the National Weather Service’s NOWData pages. Both cities share the same flat, low-lying stretch of South Jersey, so the station is a fair stand-in.`,
      },
      {
        list: [
          `January: a normal high of 42.2°F and a low of 23.8°F.`,
          `February: high 44.6°F, low 24.6°F, and the lowest precipitation normal, 2.63 inches.`,
          `December: high 46.7°F, low 27.9°F.`,
          `July: high 86.1°F, low 66.2°F.`,
          `August is the wettest month at 4.61 inches.`,
          `The year adds up to about 43.4 inches, with no month below 2.6 or above 4.7.`,
        ],
      },
      { h: 'No dry season, so what dries the eyes?' },
      {
        p: `Look at those monthly totals and there’s no obvious dry stretch: rain and snow arrive fairly evenly through the year. That points to the real culprits being things people control or can shield against, rather than weather alone. In Vineland, three show up again and again: heated air through a long winter, wind across open ground, and the hours spent looking at a screen or a windshield.`,
      },
      { h: 'Four months of furnace air' },
      {
        p: `From December through March, normal lows sit below freezing at the Millville station, with January and February under 25°F. Heating cold outdoor air without adding water drops indoor humidity, and that’s when eyes start to sting by evening. A few changes help:`,
      },
      {
        list: [
          `Put a humidifier in the bedroom and keep it clean as the manual says.`,
          `Point heat registers or baseboard deflectors away from beds and chairs.`,
          `Keep the thermostat a few degrees lower at night.`,
          `Hang wet laundry indoors on a rack now and then; it adds a little moisture.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas by type of heat.`,
      },
      { h: 'Wind across the fields' },
      {
        p: `The country around Vineland is flat and open, with farms, nurseries and long roads between them. Without hills or tall buildings to break it, wind moves freely, and wind speeds evaporation from the tear film. Anyone working outdoors here, whether picking, packing at a loading dock, or doing yard work, can feel it by mid-afternoon. Wraparound glasses, clear on cloudy days, do more than any drop to keep moving air off the eye. A hat with a brim helps when the sun is low in fall and winter.`,
      },
      { h: 'Route 55 and other long drives' },
      {
        p: `Plenty of people in Vineland drive Route 55 toward the Philadelphia area or out to the shore. On long drives, blinking slows as you focus on the road, and dashboard vents push air across the face. Aim vents toward your chest, use the floor setting for heat, and pull over to rest your eyes on longer trips. Keep a bottle in your bag, not the glove box: {storage}. A car parked outside on a January night or a July afternoon can move outside that range.`,
      },
      { h: 'Summer humidity and air conditioning' },
      {
        p: `July highs in the mid-80s with steady rain make for muggy South Jersey summers, and most people retreat into air conditioning. Cooling dries indoor air too, and a fan or vent blowing at the face does the most harm. If eyes feel worse in summer, check where the air is moving first.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions: {directions}. And a caution to read first: {warnings}.`,
      },
      {
        p: `Two more lines from the panel: {tip}. And: {doNotUse}. The stop-use line reads: {stopUse} See the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Vineland' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including Vineland, Millville, Bridgeton and the rest of Cumberland County. Shipping is {shipping}, free on {freeBottles} or more bottles. No delivery date is promised. More local notes are on our [Vineland page](/eye-drops/vineland-nj) and the [New Jersey page](/eye-drops/state/new-jersey).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Pain, vision changes, or irritation that keeps coming back are reasons to see an eye doctor. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains the signs not to ignore.`,
      },
    ],
    faq: [
      {
        q: 'Where is the closest weather station to Vineland, NJ?',
        a: 'The Millville Municipal Airport, a short drive south in Cumberland County. NOAA’s 1991–2020 normals for that airport are the long-term record nearest Vineland.',
      },
      {
        q: 'How cold does Vineland get in the winter?',
        a: 'NOAA’s normals for the Millville airport put January’s low at 23.8°F and February’s at 24.6°F. Normal lows stay below freezing from December through March.',
      },
      {
        q: 'What is the rainiest month in South Jersey?',
        a: 'At the Millville airport, August has the highest precipitation normal at 4.61 inches. February is the lowest at 2.63, so the difference across the year is small.',
      },
      {
        q: 'Does Quell ship to Vineland, New Jersey?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Vineland, Millville and Bridgeton. No delivery date is promised, so order before you run out.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-winter-haven-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid GIF; saved at .daily-job/acis1121/GIF.json and .daily-job/e1121/mint_GIF.json)
   *   (WINTER HAVEN GILBERT AP, elev 143 ft: Jan max 72.5 F, min 51.9 F; Jul max
   *   92.9, min 75.4, precip 7.44 in (wettest); Jun 7.36; Aug max 92.7, min 75.6;
   *   Sep 5.31; Oct 2.22; Nov 1.45 (driest), max 79.5, min 60.0; Dec 2.68;
   *   May 2.67, max 89.7; twelve monthly precip normals sum to 46.12 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Winter Haven row: no humidity or wind figure.
   * - Thanksgiving date from the brief (Thursday, November 26, 2026).
   */
  {
    slug: 'dry-eye-relief-winter-haven-fl',
    title: 'Dry eye relief in Winter Haven, Florida',
    description:
      'Rain at Winter Haven’s airport drops from 5.3 inches in September to 1.45 in November. NOAA’s numbers and how to keep your eyes comfortable as fall dries out.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Winter Haven matters most in the fall. NOAA’s 1991–2020 normals for Winter Haven’s Gilbert Airport show rain falling from 5.31 inches in September to 1.45 in November, the driest month, while highs stay near 80°F. Shade your eyes outdoors, keep fans and vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Gilbert Airport, in numbers' },
      {
        p: `These figures are NOAA’s 1991–2020 climate normals for Winter Haven’s Gilbert Airport, as published through the National Weather Service’s NOWData. The station sits at about 143 feet, higher than most of Florida’s coastal stations but still low ground in the middle of a landscape of lakes.`,
      },
      {
        list: [
          `November: 1.45 inches of rain, the lowest of the year, with a high of 79.5°F and a low of 60.0°F.`,
          `October: 2.22 inches, already well down from September’s 5.31.`,
          `July is the wettest month at 7.44 inches, with a high of 92.9°F.`,
          `August nights stay near 75.6°F.`,
          `January: high 72.5°F, low 51.9°F.`,
          `The year totals about 46.1 inches.`,
        ],
      },
      { h: 'The fall drop-off' },
      {
        p: `What stands out in Winter Haven’s record is how quickly the rain shuts off. September still brings more than 5 inches; two months later, November brings less than a third of that. The air turns clearer and drier while days stay warm and bright. For eyes that have spent the summer in steady humidity, that change can bring a scratchy, gritty feeling by afternoon, especially outdoors in the sun and breeze. If your eyes started bothering you around Halloween, the calendar may be part of the reason.`,
      },
      { h: 'Days on the lakes' },
      {
        p: `Water is everywhere around Winter Haven, and fall is a pleasant time to be on it. Open water adds glare from below and wind from every side. Polarized, wraparound sunglasses handle both. Keep a bottle in a shaded bag rather than a hot boat seat. Quell’s label says: {storage}. Even a November afternoon in direct sun can heat a dark surface beyond that.`,
      },
      { h: 'Yard work and fall cleanup' },
      {
        list: [
          `Wear safety glasses when using a leaf blower, string trimmer or mower; debris and dust fly at eye level.`,
          `Work with the wind at your back so dust moves away from your face.`,
          `Wash your hands and face before touching your eyes afterward.`,
          `Take a break indoors and blink slowly a few times if your eyes start to burn.`,
        ],
      },
      { h: 'Thanksgiving in the driest month' },
      {
        p: `This year Thanksgiving falls on Thursday, November 26, right in Winter Haven’s driest month. A long day of cooking means oven heat, stovetop steam that comes and goes, and a lot of close focus on recipes and timers. Football on TV and phones at the table add screen time. Step away from the oven when you open it, rest your eyes between tasks, and keep a bottle in a cabinet away from the stove. [Dry eyes when cooking holiday dinner](/guides/dry-eyes-when-cooking-holiday-dinner) has more kitchen tips.`,
      },
      { h: 'Summer in the air conditioning' },
      {
        p: `From June through September, normal highs near 93°F and warm nights mean most hours are spent inside with the air conditioning on. Cooling dries the air, and vents and ceiling fans keep it moving across your face. Angle car vents toward your chest, keep ceiling fans off over the bed, and take short breaks from screens during long indoor afternoons.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. Its directions are: {directions}. A caution to check before ordering: {warnings}.`,
      },
      {
        p: `About the look of it: {appearance} The panel also says: {doNotUse}. And when to stop: {stopUse} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Winter Haven' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including Winter Haven, Auburndale, Lake Alfred and the rest of Polk County. Shipping is {shipping}, free on {freeBottles} or more bottles. No delivery date is promised, so order well before Thanksgiving if you want a bottle on hand for the holiday. See our [Winter Haven page](/eye-drops/winter-haven-fl) and the [Florida page](/eye-drops/state/florida).`,
      },
      { h: 'When an eye doctor should look' },
      {
        p: `Eye pain, vision changes or dryness that won’t settle are reasons to see an eye doctor. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that need attention soon.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Winter Haven, Florida?',
        a: 'November, at 1.45 inches of rain in NOAA’s 1991–2020 normals for Winter Haven’s Gilbert Airport. October is also lean at 2.22 inches.',
      },
      {
        q: 'When does the rainy season end in Winter Haven?',
        a: 'NOAA’s normals show rain dropping sharply after September, from 5.31 inches to 2.22 in October and 1.45 in November. The wettest months are June and July.',
      },
      {
        q: 'Why do my eyes feel dry in Florida in the fall?',
        a: 'In Winter Haven, rainfall falls off quickly from September to November while days stay warm and sunny. Drier, breezier air pulls water from the tear film faster, especially outdoors.',
      },
      {
        q: 'Does Quell ship to Winter Haven or Polk County?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Winter Haven and the rest of Polk County. No delivery date is promised, so order ahead.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-ranchers',
    title: 'Dry eyes for ranchers',
    description:
      'Pen dust, open wind, hay and long days in the saddle or the truck. Why ranch work dries the eyes and what helps, from gate to feed bunk.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Ranch work dries the eyes because it combines dust, wind, sun and long hours of focused watching. Moving cattle stirs up pens, open country never stops blowing, and feeding hay throws fine particles at face height. Wear wraparound glasses, keep your hands clean before touching your eyes, blink on purpose, use a lubricating drop as its label directs, and see an eye doctor for pain, vision changes or lasting irritation.`,
      },
      { h: 'Why ranchers get dry, gritty eyes' },
      {
        p: `The tear film has an oily outer layer, a watery middle and a mucus layer against the eye. Wind and dry air speed up evaporation from that film, and dust adds irritation on top. Ranching stacks those factors day after day, often from before sunrise to after sunset. There’s also the way you look at things: watching a herd for a limping calf, reading a fence line or scanning a draw for strays involves long, steady gazing, and steady gazing slows blinking. By evening, eyes can feel hot, sandy or heavy.`,
      },
      { h: 'Working cattle in the pens' },
      {
        p: `Sorting, vaccinating and loading kick up dry manure and soil, and on a breezy day that dust drifts right across the alley. A few things help:`,
      },
      {
        list: [
          `Wear wraparound glasses or safety glasses with side shields, even on cloudy days.`,
          `Stand upwind of the chute when you can, so dust moves away from you.`,
          `Wet down a dry alley or pen before a big working day if you have water handy.`,
          `Pull a bandana or buff up over your nose and the tops of your cheeks to block some of the drift.`,
          `Don’t rub your eyes with dusty gloves; take them off and use a clean knuckle or a tissue.`,
        ],
      },
      { h: 'Hay, feed and the barn' },
      {
        p: `Breaking open bales and pitching hay releases fine leaf and stem particles, and the dust from a ground feed or mineral mix can drift too. Feeding in a closed barn traps it. Open the doors for airflow when it’s not too cold, turn your face away when you break a bale, and keep glasses on in the loft. If you feel a particle in your eye, don’t rub it in. Blink, and if it doesn’t clear, get medical help; a lubricating drop is not an eye wash. [Eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains the difference.`,
      },
      { h: 'Open country wind and sun' },
      {
        p: `Checking pasture on horseback or an ATV means hours of moving air in your face. Add a low sun at dawn and dusk, and the eyes get both glare and wind at once. A hat brim pulled low helps with sun from above. Wraparound sunglasses help with glare and wind from the sides. When you stop to open a gate or check water, take a few slow, complete blinks. For riders, [dry eyes when horseback riding](/guides/dry-eyes-when-horseback-riding) covers the saddle-specific side.`,
      },
      { h: 'Calving season, cold mornings and the truck' },
      {
        list: [
          `Late-winter calving often means night checks in a barn with a heater running; keep it from blowing at your face while you work.`,
          `On cold feeding mornings, the truck heater and defroster push dry air upward; aim vents low once the windshield clears.`,
          `Bumping along gravel roads with the windows down in summer fills the cab with dust; roll them up or slow down.`,
          `Long drives to the sale barn mean hours of steady staring; stop to rest your eyes.`,
        ],
      },
      { h: 'Where to keep eye drops on a ranch' },
      {
        p: `A dashboard or saddlebag in summer sun gets hot, and a truck left out through a January night gets cold. Quell’s label gives its storage range: {storage}. An inside jacket pocket or a small pouch kept in the house and brought out each morning stays closer to that. Whatever you carry, keep the dropper clean: {tip}.`,
      },
      {
        p: `Putting in a drop outdoors with dirty hands brings dust to the eye. If you can’t wash, use a wet wipe on your fingers first, then tip your head back, pull down the lower lid and let one drop fall without touching the tip to anything. Do it with your back to the wind.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses as: {uses}. The directions: {directions}. And a caution for anyone with allergies: {warnings}.`,
      },
      {
        p: `The panel also says: {doNotUse}. When to stop: {stopUse} You can read the whole thing on our [Drug Facts page](/drug-facts). If you wear contact lenses, the label doesn’t cover using it with lenses, so ask your eye doctor or pharmacist first.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A scratch from a branch, a particle that won’t come out, eye pain, vision changes, or eyes that stay irritated for days need an eye doctor, not more drops. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs. Ranch work overlaps with farm work in plenty of ways; [dry eyes for farmers](/guides/dry-eyes-for-farmers) covers harvest dust and machinery.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working cattle?',
        a: 'Working cattle stirs up pen dust, often in wind and sun, and watching the herd closely slows your blinking. Dust irritates the eye while moving air pulls water from the tear film.',
      },
      {
        q: 'Where should a rancher keep eye drops?',
        a: 'Somewhere that stays within the label’s storage range of 59° to 86°F, such as an inside jacket pocket. A dashboard in summer or a truck left out on a winter night can go well outside that.',
      },
      {
        q: 'How do I put in eye drops out in a pasture?',
        a: 'Clean your fingers with a wet wipe if you can’t wash, turn your back to the wind, tip your head back, pull down the lower lid and let one drop fall without the tip touching anything.',
      },
      {
        q: 'Do sunglasses help with dust when working cattle?',
        a: 'Wraparound sunglasses or safety glasses with side shields block much of the dust and wind that reach the eyes. Standing upwind of the chute helps too.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-arborists-and-tree-trimmers',
    title: 'Dry eyes for arborists and tree trimmers',
    description:
      'Looking up into the canopy, falling sawdust, chipper spray and bucket-truck wind. Why tree work dries the eyes and how to stay comfortable on the job.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Tree work dries the eyes because so much of it happens looking up. Tilting your head back opens the eyes wider, while sawdust, bark and leaf bits fall from above and wind moves freely at height. Keep eye protection on, look away from falling debris, rest your eyes between cuts, use a lubricating drop as its label directs, and see an eye doctor for anything stuck in the eye, pain or vision changes.`,
      },
      { h: 'Why looking up dries the eyes' },
      {
        p: `When you look down, as you do when reading, your upper lids cover more of the eye. When you look up into a canopy, the lids lift and more of the eye’s surface meets the air. Evaporation from the tear film depends partly on how much surface is exposed, so long stretches of overhead work leave the eyes more exposed than usual. Concentrating on a cut also tends to slow blinking. Put those together for an eight-hour day and many climbers and ground crew finish with eyes that feel sandy or tired.`,
      },
      { h: 'Sawdust and debris from above' },
      {
        p: `Gravity is the biggest difference between tree work and most other dusty jobs. Chips, sawdust, bark flakes, old leaves and whatever has collected in a crotch fall straight toward a face that’s looking up. The eye protection your crew requires does most of the work here. Beyond that:`,
      },
      {
        list: [
          `Glance away or tilt your head when a cut is about to release debris.`,
          `Choose glasses or a face screen that wraps at the sides, since debris drifts in from every angle.`,
          `Keep a clean cloth in a pocket so you can wipe dust from your brow before it runs into your eyes.`,
          `Brush off your hat brim and helmet before tilting your head back again.`,
          `Never rub an eye with a gloved hand covered in sawdust.`,
        ],
      },
      {
        p: `If something lands in the eye and won’t blink out, stop working and get medical care. A lubricating drop is not meant for flushing out particles. [Eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains what each is for.`,
      },
      { h: 'The chipper and the stump grinder' },
      {
        p: `Feeding a chipper puts you close to a machine that throws fine dust and chips, and a stump grinder sends soil and wood flying low. The discharge chute and the wind decide where it goes. Stand where the wind carries the spray away from you, keep your face shield or glasses on even for one quick load, and take a short break away from the machine to blink and rest your eyes after a long run of brush.`,
      },
      { h: 'Wind in the bucket and on the climb' },
      {
        p: `Up in a bucket truck or tied in at the top of a tree, there’s often a steady breeze that you don’t feel on the ground. Moving air speeds evaporation from the tear film. Wraparound glasses cut the wind as well as the debris. Between cuts, take a few slow blinks rather than staring at the next limb.`,
      },
      { h: 'Sun, shade and flicker' },
      {
        p: `Working under leaves means constant changes between bright sun and shade. Looking up through gaps in the canopy toward a bright sky makes most people squint and stare. Tinted safety glasses help on sunny days, and clear ones on overcast days. On storm cleanup jobs, with long hours and no shade from downed trees, glare from wet surfaces adds to it.`,
      },
      { h: 'Eye drops in a climbing kit' },
      {
        p: `A truck cab in summer or a gear bag left in winter cold can move outside the label’s storage range: {storage}. A small zip pouch in a jacket pocket keeps the bottle closer to body temperature. Clean your hands before you use a drop, especially after handling sap or saw oil, and don’t let the tip touch anything. The panel puts it this way: {tip}.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. Directions: {directions}. And the first caution on the panel: {warnings}.`,
      },
      {
        p: `The panel also tells you when to stop: {stopUse} It’s all on our [Drug Facts page](/drug-facts). The label doesn’t give directions for contact lenses, so ask your eye doctor or pharmacist before using it with lenses.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A poke from a twig, a chip that won’t come out, pain, light sensitivity or a change in vision all need an eye doctor promptly. So does irritation that keeps coming back. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs. If you also run a crew that does landscaping, [dry eyes for landscapers](/guides/dry-eyes-for-landscapers) covers mowers and blowers.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when trimming trees?',
        a: 'Looking up lifts the eyelids and exposes more of the eye, and focusing on a cut slows blinking. Falling sawdust and wind at height add irritation and speed evaporation from the tear film.',
      },
      {
        q: 'What should I do if sawdust falls in my eye?',
        a: 'Stop, don’t rub it, and try blinking to clear it. If it doesn’t come out or the eye hurts, get medical care, since a lubricating drop is not meant for flushing particles out.',
      },
      {
        q: 'Can arborists keep eye drops in the truck?',
        a: 'Not for long in hot or freezing weather. Quell’s label says to store it between 59° and 86°F, so a jacket pocket or a pouch you bring inside is a better home than the cab.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-land-surveyors',
    title: 'Dry eyes for land surveyors',
    description:
      'Hours at an instrument eyepiece, glare on the data collector, roadside dust and office days at CAD. Why surveying dries the eyes and what helps.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Surveying dries the eyes because it pairs long, unblinking looks through an instrument with wind, sun and dust in the field, then hands you a CAD screen back at the office. Staring through an eyepiece slows blinking, and a squinting second eye doesn’t rest either. Shield your eyes outside, build in blink breaks, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The eyepiece problem' },
      {
        p: `Sighting through a total station, level or theodolite asks one eye to hold a very still, focused gaze while the other is closed or squinted. Concentration of that kind slows the blink rate, and the sighting eye can go many seconds without a full blink while you line up a prism or read a rod. Over a day of shots, the tear film breaks up between blinks more often, and the eye starts to feel scratchy or tired.`,
      },
      {
        list: [
          `After each shot, look away from the eyepiece and blink slowly two or three times.`,
          `Switch eyes now and then if you’re able to sight comfortably with either.`,
          `Relax the closed eye rather than squeezing it hard shut.`,
          `Adjust the eyepiece focus for your eye at the start of the day so you’re not straining.`,
          `Keep the eyepiece clean and wipe it with a lens cloth, not a dusty sleeve.`,
        ],
      },
      { h: 'Sun on the data collector' },
      {
        p: `In bright sun, a data collector or tablet screen is hard to read, so most people turn brightness up and lean in. That means more staring and more squinting. Shade the screen with your body or a hood, tilt it away from the sun, and look up at the horizon between entries. Polarized sunglasses can make some screens look dim or blotchy, so test yours with the device before buying.`,
      },
      { h: 'Roadside, construction and open-field dust' },
      {
        p: `Survey crews spend a lot of time along roads and on job sites, where passing traffic and equipment kick up dust. Open fields bring wind with nothing to stop it. Wraparound safety glasses with side protection block much of both. Stand upwind of the dust source when you can. Keep a small pack of wet wipes so you can clean your hands before touching your eyes, and never rub an eye with grit on your fingers.`,
      },
      { h: 'Seasons in the field' },
      {
        p: `Summer surveying means heat and glare, and the truck’s air conditioning blowing in your face between setups. Winter means cold wind that makes eyes water, then a heated cab on the drive to the next site. In both cases, point vents away from your face and give your eyes a few minutes to adjust. Wearing clear glasses on gray winter days helps block wind even when sunglasses would be too dark. [Protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more on that.`,
      },
      { h: 'Office days at the CAD screen' },
      {
        p: `Field data turns into drawings at a desk, often on large monitors for hours at a time. Screen work slows blinking just as the eyepiece does. Put the top of the monitor at or slightly below eye level, set text large enough to read without leaning in, and follow the 20-20-20 habit: every 20 minutes, look about 20 feet away for about 20 seconds. [How often should I take a break from screens?](/guides/how-often-should-i-take-a-break-from-screens) goes into more detail.`,
      },
      { h: 'Keeping eye drops in the field kit' },
      {
        p: `A truck dashboard in summer or an instrument case left in a cold vehicle until morning can push a bottle past the label’s storage range: {storage}. A jacket or vest pocket is a better spot. Use clean hands, and don’t let the tip touch anything, as the label says: {tip}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Here’s the Uses line from the Drug Facts panel: {uses}. Directions: {directions}. A caution to read before a first bottle: {warnings}.`,
      },
      {
        p: `The panel’s stop-use line: {stopUse} Find the complete panel on our [Drug Facts page](/drug-facts). The label doesn’t cover contact lenses, so if you wear them in the field, ask your eye doctor or pharmacist before using it.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eye pain, a change in vision, a particle you can’t clear, or irritation that keeps coming back are reasons to see an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for. For more on outdoor jobs in general, see [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired looking through a total station?',
        a: 'Sighting through an eyepiece holds one eye in a steady, focused gaze, which slows blinking, while the other eye stays squinted. Looking away and blinking slowly after each shot gives both a rest.',
      },
      {
        q: 'Do polarized sunglasses work with a surveying data collector?',
        a: 'Sometimes not. Polarized lenses can make certain screens look dim or patchy, so check yours with the device before relying on them in the field.',
      },
      {
        q: 'How can surveyors reduce eye strain at the office?',
        a: 'Set the monitor at or slightly below eye level, enlarge text so you don’t lean in, and every 20 minutes look about 20 feet away for about 20 seconds.',
      },
    ],
  },

  {
    slug: 'new-year-dry-eye-routine',
    title: 'A fresh-start dry eye routine for the new year',
    description:
      'January is a natural time to reset how you care for dry eyes. A short, realistic routine built from what December taught you, the label and your own spaces.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `A fresh-start dry eye routine for the new year has four parts: notice when your eyes felt worst in December, fix the air in the rooms where you spend the most hours, follow your drop’s label directions on a schedule you can keep, and book the eye doctor visit you’ve been putting off. Keep it small enough that you’re still doing it in March.`,
      },
      { h: 'Start with what December taught you' },
      {
        p: `The holidays are a stress test for eyes. Travel, late nights, heated houses full of guests, long hours at screens finishing year-end work, and wind at outdoor events all show up in the same few weeks. Before you set any resolution, spend five minutes writing down when your eyes bothered you most. Was it in the car? At your desk after lunch? Waking up in a guest room? Answers like these point to the changes that will make a difference, which is better than a long list of general advice you won’t follow.`,
      },
      {
        list: [
          `Time of day: mornings, mid-afternoon, or late evening.`,
          `Place: bedroom, office, car, a relative’s house, outdoors.`,
          `Activity: reading, screens, driving, cooking, being out in the wind.`,
          `What helped, even a little: a break, a humidifier, glasses, closing your eyes.`,
        ],
      },
      {
        p: `If you want to keep track going forward, [keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) shows a format that takes seconds a day.`,
      },
      { h: 'Reset the three places you spend the most time' },
      {
        p: `Most people spend the bulk of their week in three spots: bed, a desk or couch, and a car. Small changes in each tend to do more than any single big change.`,
      },
      {
        list: [
          `Bedroom: aim heat registers and fans away from the bed, lower the thermostat at night, and consider a clean humidifier.`,
          `Desk or couch: set the screen slightly below eye level, keep vents and space heaters off your face, and put a sticky note on the monitor that just says “blink.”`,
          `Car: point dash vents toward your chest, use the floor heat setting once the windshield clears, and keep sunglasses within reach for low winter sun.`,
        ],
      },
      { h: 'Set a routine that matches the label' },
      {
        p: `A routine you can repeat beats a perfect one you forget. If you use Quell, the directions on its Drug Facts panel are short: {directions}. Many people anchor those three times to things they already do: breakfast, lunch and the evening wind-down. Phone reminders work too. [When to use eye drops during the day](/guides/when-to-use-eye-drops-during-the-day) has ideas for spacing.`,
      },
      {
        p: `Each time, wash your hands first and follow this line from the panel: {tip}. If your eye doctor has given you different instructions, follow theirs.`,
      },
      { h: 'Check what’s already in the cabinet' },
      {
        p: `January is a good time to look at the bottles you already have. Toss anything that’s been rattling around in a coat pocket for months or that has been stored in a hot car or a freezing garage. For Quell, the label’s storage line reads: {storage}. Another line to check: {doNotUse}. Then count what you have left and order before you run out, because no delivery date is promised. [Planning your eye drop supply for the new year](/guides/planning-your-eye-drop-supply-for-the-new-year) covers how many bottles a year takes.`,
      },
      { h: 'Make the appointment you put off' },
      {
        p: `If your eyes bothered you on and off all fall, or a drop isn’t making much difference, the new year is a good moment to book an eye exam. An eye doctor can find the cause and decide what to do. The stop-use line on Quell’s panel says when not to wait: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that need prompt attention.`,
      },
      { h: 'Add one screen habit, not five' },
      {
        p: `Screens slow blinking, and January brings a return to work and school. Pick one habit and stick with it, such as the 20-20-20 rule (every 20 minutes, look about 20 feet away for 20 seconds) or closing your eyes for a slow count of five when a video call ends. For a full screen plan, [a screen-time New Year’s resolution](/guides/screen-time-new-years-resolution) goes further.`,
      },
      { h: 'Keep it small enough to stick' },
      {
        p: `Most resolutions fade by February because they ask for too much. A dry eye routine doesn’t need to: one airflow fix in each room, drops on the label’s schedule, one screen habit and one appointment. Write those four on a card. In March, look back at your notes and see what changed.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. It also carries a caution to read before starting: {warnings}. You can see the full panel on our [Drug Facts page](/drug-facts), and [order from the home page](/#buy) if you need a bottle for the new routine.`,
      },
    ],
    faq: [
      {
        q: 'How do I start a dry eye routine?',
        a: 'Begin by noting when and where your eyes feel worst, then fix the airflow in those places, use your drop on the schedule its label gives, and see an eye doctor if dryness keeps returning.',
      },
      {
        q: 'What is a realistic eye care resolution for the new year?',
        a: 'Pick four small things: one airflow change in each room you use most, drops on the label’s schedule, one screen habit such as 20-20-20, and booking an eye exam if you’ve been putting it off.',
      },
      {
        q: 'Should I throw out old eye drops in January?',
        a: 'Check them. Bottles kept outside their label’s storage range, like in a hot car, or that look different from when you bought them are worth replacing. Quell’s label says not to use it if the color changes.',
      },
    ],
  },

  {
    slug: 'dry-eyes-back-at-work-after-the-holidays',
    title: 'Dry eyes back at work after the holidays',
    description:
      'The first week back in January often brings sore, dry eyes: a full inbox, a cold building warming up and dark commutes. What causes it and what helps.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Eyes often feel drier the first week back at work after the holidays because everything changes at once: long catch-up sessions at a screen, a building whose heat was turned down over the break and is now running hard, and dark, cold commutes. Ease back into screen time, fix the air around your desk, blink on purpose, use a lubricating drop as its label directs, and see an eye doctor if it doesn’t settle.`,
      },
      { h: 'Why the first week back is rough on the eyes' },
      {
        p: `During the holidays, most people’s days are looser. You’re up and moving, looking across rooms and out windows, talking with people rather than staring at text. Then the first Monday back arrives, which in 2027 is January 4, and the day becomes eight or nine hours of email, spreadsheets and meetings. Screen focus slows blinking, and fewer full blinks mean the tear film breaks up between them. Add winter heat and you have a recipe for eyes that burn by mid-afternoon.`,
      },
      { h: 'The inbox marathon' },
      {
        p: `Catching up on two weeks of messages is the kind of task that keeps you locked on a screen. A few ways to break it up:`,
      },
      {
        list: [
          `Sort by sender or subject first, then answer in batches with a short break between each.`,
          `Stand up and look out a window when a batch is done.`,
          `Use a timer for the 20-20-20 habit: every 20 minutes, look about 20 feet away for about 20 seconds.`,
          `Make calls instead of writing long replies where you can.`,
          `Turn up text size so you aren’t leaning in.`,
        ],
      },
      { h: 'A building that’s been cold for days' },
      {
        p: `Many offices and schools lower the heat during a holiday closure. When everyone returns, the system often runs hard to warm the space back up. Warming cold air lowers its relative humidity, so the first days back can feel especially dry. Check where the vents are around your desk. If one blows at your face, ask facilities whether it can be redirected, or move your chair. A small desk humidifier may be allowed in some workplaces; ask before you bring one.`,
      },
      { h: 'Your desk after two weeks away' },
      {
        p: `Before diving in, spend a few minutes on setup. Wipe the dust off your monitor; a dusty screen makes you squint. Check that the top of the screen is at or a little below eye level. If a bottle of eye drops sat in a desk drawer in a cold building for two weeks, look at it before using it. For Quell, the label’s storage line reads: {storage}. And another line: {doNotUse}. When in doubt, start a fresh bottle.`,
      },
      { h: 'Dark commutes in January' },
      {
        p: `Early January has some of the shortest days of the year, so many people drive to and from work in the dark. Headlight glare and heaters running at full blast both make eyes feel worse. Point dashboard vents away from your face, use the floor setting once the windshield is clear, and keep your windshield clean inside and out to reduce glare. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers night driving in more detail.`,
      },
      { h: 'Meetings and video calls' },
      {
        p: `The first week back is often packed with planning meetings. On video calls, people tend to stare at the camera or their own tile without blinking much. Turn off self-view if your software allows it, look away from the screen while someone else is presenting slides you’ve already seen, and close your eyes for a slow count of five when a call ends. For in-person meetings, sit away from ceiling vents if you can choose your seat.`,
      },
      { h: 'Back to school, too' },
      {
        p: `Teachers and students face the same transition: classrooms that were cold over break, long days of grading or studying, and early mornings. Keep the routine simple: a short break every class period to look away from screens or papers, and drops on the label’s schedule if you use them.`,
      },
      { h: 'Using drops at work' },
      {
        p: `If you use Quell, follow its directions: {directions}. A desk-friendly schedule might be one dose before you start, one after lunch and one before your commute home. Wash your hands first, especially after handling shared keyboards or door handles, and follow this line from the panel: {tip}. Keep the bottle in a bag or drawer away from heaters and sunny windows.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses: {uses}. Read the caution first: {warnings}. The full panel is on our [Drug Facts page](/drug-facts), and if you’re out, you can [order a bottle](/#buy).`,
      },
      { h: 'When it doesn’t settle' },
      {
        p: `Most people adjust within a week or two once they’ve fixed their setup. If your eyes stay irritated, hurt, or your vision changes, see an eye doctor; they can find the cause and decide what to do. The stop-use line on the panel reads: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that need attention soon.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after going back to work after vacation?',
        a: 'The first days back usually mean long screen sessions, which slow blinking, in a building whose heat may be running hard after a holiday closure. Breaks, redirected vents and blinking on purpose help.',
      },
      {
        q: 'When is the first Monday back to work in January 2027?',
        a: 'Monday, January 4, 2027. New Year’s Day falls on a Friday, so many workplaces return the following Monday.',
      },
      {
        q: 'Are eye drops left in a cold office still good?',
        a: 'Check the label’s storage range. Quell’s says to store it between 59° and 86°F. If a bottle sat in a cold building or looks different, the safer choice is to start a fresh bottle.',
      },
    ],
  },

  {
    slug: 'eye-drops-before-or-after-computer-work',
    title: 'Eye drops before or after computer work?',
    description:
      'Should you put eye drops in before a long screen session or after it? How to fit drops into a computer day, using the label’s directions and a few breaks.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `For most people, it works well to use a lubricating drop before a long stretch of computer work and again at a natural break, rather than waiting until your eyes already burn. The label’s schedule sets how many times a day; screen habits decide when. Pair each dose with a short break, keep vents off your face, and see an eye doctor if dryness keeps returning.`,
      },
      { h: 'Why screens dry the eyes' },
      {
        p: `When you focus on a screen, you blink less often, and many of the blinks you do make are partial, with the lids not closing all the way. Each full blink spreads a fresh layer of tears across the eye. Fewer and shallower blinks mean the tear film thins and breaks up between them. Office air, which is often heated or air-conditioned, speeds that up. By the end of a long session, eyes can feel gritty, hot or tired.`,
      },
      { h: 'Before: starting with a fresh layer' },
      {
        p: `A drop before you sit down puts lubrication on the eye at the start, when you’re about to blink less. It also builds the drop into a routine you’ll actually remember, since sitting down to work is a fixed event. A few minutes after the drop, once any temporary blur clears, you’re ready to start.`,
      },
      { h: 'After: easing eyes that already feel it' },
      {
        p: `A drop after a long session can help if your eyes feel dry at that point. The problem with only using drops after is that you’ve already spent hours with a thinning tear film, and the discomfort may stick around longer. If you notice you need drops after every session, that’s a sign to look at the session itself: its length, your setup and the air around you.`,
      },
      { h: 'A screen-day schedule that fits the label' },
      {
        p: `Quell’s Drug Facts panel gives its directions as: {directions}. Three doses fit a typical screen day without much thought:`,
      },
      {
        list: [
          `Before your first long stretch of the morning.`,
          `At lunch, away from your desk.`,
          `Mid-afternoon or before the commute home, when screen fatigue tends to build.`,
        ],
      },
      {
        p: `If your eye doctor has given you different timing, use theirs. And if you use another product, its own label sets its schedule. The Quell label doesn’t cover combining it with other eye drops, so ask a pharmacist or eye doctor about that.`,
      },
      { h: 'Pair each drop with a break' },
      {
        p: `Putting in a drop means taking your eyes off the screen anyway. Make it a proper break: close your eyes for a few seconds after the drop, then look at something far away, like a window or the far end of the room, for 20 seconds or so. That pause matters as much as the drop. [How often should I take a break from screens?](/guides/how-often-should-i-take-a-break-from-screens) explains the 20-20-20 habit and other options.`,
      },
      { h: 'Fix the setup, too' },
      {
        list: [
          `Lower the monitor so its top edge is at or slightly below eye level; looking down a little lets your lids cover more of the eye.`,
          `Enlarge text so you aren’t leaning in or squinting.`,
          `Keep heating and cooling vents and desk fans from blowing at your face.`,
          `Match screen brightness to the room so you’re not staring into a bright panel in a dim space.`,
          `Clean the screen; smudges and dust make you strain.`,
        ],
      },
      { h: 'Laptops, phones and second screens' },
      {
        p: `A laptop on a desk puts the screen low, which is good for your lids but often bad for your neck; a stand plus an external keyboard gives you both. Phones are the opposite problem: held close and read in short, intense bursts that add up. If you use two monitors, put the one you look at most directly in front of you so you aren’t holding your eyes to one side for hours. None of these change what the label says about dosing; they change how hard your eyes work between doses.`,
      },
      { h: 'Handling drops at a desk' },
      {
        p: `Wash your hands before a drop, especially after typing on a shared keyboard. Follow the panel’s hygiene line: {tip}. Keep the bottle in a drawer or bag, not on a sunny windowsill or next to a space heater; the label says: {storage}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. One caution to read before a first bottle: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When screen dryness needs an eye doctor' },
      {
        p: `If your eyes stay irritated even with breaks and drops, hurt, or your vision blurs and doesn’t clear when you blink, see an eye doctor. They can find the cause and decide what to do. The label’s stop-use line: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'Should I use eye drops before or after using the computer?',
        a: 'Many people do well with a drop before a long screen session and another at a natural break, within the number of daily doses their drop’s label gives. Waiting until eyes burn means hours with a thin tear film.',
      },
      {
        q: 'Do I need to wait after eye drops before looking at a screen?',
        a: 'Give it a minute or two. Close your eyes briefly after the drop and wait for any temporary blur to clear before you start reading again.',
      },
      {
        q: 'How many times a day can I use Quell at work?',
        a: 'Quell’s label directions are to apply 1 drop 3 times per day in each eye. A workday schedule could be before you start, at lunch and mid-afternoon.',
      },
    ],
  },

  {
    slug: 'how-do-i-know-if-my-eye-drops-are-working',
    title: 'How do I know if my eye drops are working?',
    description:
      'How to tell whether a lubricating eye drop is making a difference: what to watch, how to track it for a couple of weeks, and when to see an eye doctor instead.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `You can tell eye drops are working when the discomfort that sent you to them, such as grit, burning or tired eyes at the end of the day, shows up less often or eases more quickly after a dose. The clearest way to judge is to use the drop as its label directs for a couple of weeks and write down how your eyes feel. If nothing changes or things get worse, see an eye doctor.`,
      },
      { h: 'What “working” looks like' },
      {
        p: `A lubricating drop isn’t a switch that turns dryness off. What people tend to notice instead is a pattern: fewer moments of scratchiness during a screen session, less burning by evening, or less of an urge to rub their eyes. The change is usually gradual and depends a lot on what else is going on, like heated air, long drives or a busy work week.`,
      },
      {
        list: [
          `Fewer times each day when your eyes feel gritty, sandy or hot.`,
          `Discomfort that settles more quickly after a dose.`,
          `Getting further into the afternoon before your eyes feel tired.`,
          `Less blinking hard or rubbing to get comfortable.`,
        ],
      },
      { h: 'Use it the way the label says first' },
      {
        p: `It’s hard to judge a drop you use irregularly. Before deciding, follow the label consistently. Quell’s Drug Facts panel gives its directions: {directions}. Missing doses, or only reaching for the bottle when your eyes are already very uncomfortable, makes the results hard to read. So does a dropper that’s been contaminated; follow this line: {tip}.`,
      },
      { h: 'Track it for two weeks' },
      {
        p: `Memory is a poor guide here, because the worst days stick out. A quick note each evening gives you something real to look at.`,
      },
      {
        list: [
          `Rate your eyes from 1 to 5 at the end of each day.`,
          `Note the doses you actually took.`,
          `Jot down anything unusual: a long drive, a windy day, a late night, a new heater.`,
          `After two weeks, compare the first few days with the last few.`,
        ],
      },
      {
        p: `[Keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) has a template. A log is also handy to bring to an eye appointment.`,
      },
      { h: 'Rule out what the drop can’t fix' },
      {
        p: `If you’re still sitting under a vent, staring at a screen for hours without breaks, or sleeping with a fan blowing on your face, any drop has a harder job. Before you judge the drop, check the setup around it. Point vents away from your face, take screen breaks, and run a humidifier in a heated bedroom. Those changes often make the difference between a drop seeming to work and not.`,
      },
      { h: 'Signs it isn’t helping, or something else is going on' },
      {
        p: `A drop that doesn’t seem to help may not be the right fit, or the cause of the discomfort may be something a lubricating drop isn’t meant for. The stop-use line on Quell’s panel describes when to stop and get help: {stopUse} [Why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) explains that time frame.`,
      },
      {
        p: `Pain, a change in vision, sensitivity to light, discharge, or one eye suddenly much worse than the other are reasons to see an eye doctor promptly. An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'How long to give it' },
      {
        p: `There’s no fixed number of days that applies to everyone, and the label doesn’t set a trial period. What it does set is a limit for when to stop and ask a doctor, covered below. A couple of weeks of consistent use, with notes, is usually enough to see whether your bad days are getting less frequent. If you switch products, give each one its own stretch rather than changing several things at once, so you can tell what made the difference.`,
      },
      { h: 'Brief blur is normal, discomfort isn’t' },
      {
        p: `Many lubricating drops blur vision for a moment after they go in, and that usually clears with a few blinks. Quell is milky; the label notes: {milky}. Lasting stinging, burning or irritation after a dose is different. If that happens, stop and ask a doctor or pharmacist. [Side effects of lubricating eye drops](/guides/side-effects-of-lubricating-eye-drops) covers what’s expected and what isn’t.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. It also carries this caution: {warnings}. See the full panel on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How can I tell if lubricating eye drops are helping?',
        a: 'Look for gritty or burning moments happening less often, or easing faster after a dose. Use the drop as the label directs for a couple of weeks and rate your eyes each evening so you can compare.',
      },
      {
        q: 'What should I do if eye drops are not helping my dry eyes?',
        a: 'Check that you are using them as the label directs and fix airflow and screen habits. If dryness continues, or there is pain or vision change, see an eye doctor to find the cause.',
      },
      {
        q: 'Is blurry vision after eye drops a sign they are working?',
        a: 'No. Brief blur after a drop is common and usually clears with a few blinks, but it says nothing about whether the drop helps. Blur that does not clear is a reason to see an eye doctor.',
      },
    ],
  },

  {
    slug: 'eye-drops-and-time-zone-changes',
    title: 'How do I time eye drops when I change time zones?',
    description:
      'Flying across the country or abroad? How to space three daily eye drop doses across a travel day and switch to local time, plus where to keep the bottle.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `When you change time zones, switch your eye drop schedule to local waking hours as soon as you arrive. For a lubricating drop like Quell, whose label calls for 1 drop 3 times a day in each eye, spread the doses across the hours you’re awake on the travel day, then fall into morning, midday and evening on local time. If a prescriber set your timing, ask them first.`,
      },
      { h: 'Why time zones confuse a drop routine' },
      {
        p: `Most people tie their drops to daily anchors: breakfast, lunch, the evening routine. A trip across time zones breaks those anchors. A cross-country flight can stretch or shrink your day by three hours, and a trip abroad can add or remove a whole night’s sleep. It’s easy to double up or skip doses without noticing. The goal isn’t clockwork precision; it’s keeping doses spread out across the hours you’re awake.`,
      },
      { h: 'What the label says, and what it doesn’t' },
      {
        p: `Quell’s Drug Facts panel gives its directions: {directions}. It doesn’t mention time zones or travel, and it doesn’t say the doses have to be a set number of hours apart. That leaves the practical choice to you. For a prescription drop, or any drop where timing has been set by a doctor, ask them or a pharmacist how to adjust before you travel.`,
      },
      { h: 'Flying east' },
      {
        p: `Going east shortens your day. Flying from Los Angeles to New York, for example, you lose three hours.`,
      },
      {
        list: [
          `Take your morning dose at home as usual.`,
          `Take the second around the middle of your travel day, on the plane or at a layover.`,
          `Take the third before bed at your destination, on local time.`,
          `From the next morning, follow local breakfast, lunch and evening.`,
        ],
      },
      { h: 'Flying west' },
      {
        p: `Going west lengthens your day, so you’re awake more hours. That makes spacing easier: keep your usual morning dose, take the second midway through the trip, and the third in the evening at your destination, even if it feels later than usual. Don’t add a fourth dose just because the day was long; stick with what the label says.`,
      },
      { h: 'Long flights abroad' },
      {
        p: `On a long-haul flight that crosses many time zones, some of your awake hours happen at night by one clock or the other. Use your waking hours as the guide: spread three doses across the time you’re awake, including on the plane. Once you land, switch to local time with the first morning. Airplane cabins are known for dry air, so the in-flight dose is a useful one. [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) covers cabin air in more detail.`,
      },
      { h: 'Daylight saving time and short trips' },
      {
        p: `The same logic covers the twice-yearly clock change and short hops of one time zone. A one-hour shift barely matters: keep your usual anchors, like breakfast and bedtime, and the doses follow. For a weekend trip one or two zones away, many people simply keep their meal-based anchors on local time and don’t think about it further. Bigger shifts are where it pays to plan the travel day on purpose.`,
      },
      { h: 'Tricks that make it easier' },
      {
        list: [
          `Set phone reminders by local time; most phones adjust automatically when you land.`,
          `Tie the first dose at your destination to the first local meal.`,
          `Keep a note of doses on travel days, since it’s easy to lose track.`,
          `Don’t put a dose off until you’re in a dark hotel room late at night; it’s easy to skip.`,
        ],
      },
      { h: 'Where to keep the bottle while traveling' },
      {
        p: `Keep the bottle in your personal item or carry-on, not in checked luggage, so you can reach it during the flight and always know where it is. TSA says liquids in carry-on bags must be in containers of 3.4 ounces (100 milliliters) or less, in a quart-sized bag. A bottle of Quell is {size}. [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) has the details. For temperature, the label says: {storage}.`,
      },
      {
        p: `Hand hygiene is harder on the road. Use hand sanitizer and let it dry fully, or wash in the airport restroom before a dose. Follow the panel’s line: {tip}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line: {uses}. A caution to read first: {warnings}. The full panel is on our [Drug Facts page](/drug-facts). If your eyes hurt, your vision changes, or irritation doesn’t settle after the trip, see an eye doctor; [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Should I use eye drops on home time or local time when traveling?',
        a: 'Switch to local time as soon as you can. On the travel day, spread doses across the hours you are awake, then switch to local morning, midday and evening once your first full day there begins.',
      },
      {
        q: 'Do I need to take an extra eye drop dose on a long travel day?',
        a: 'Not because of the clock. Quell’s label says 1 drop 3 times per day in each eye, so spread three doses across your waking hours rather than adding more because the day felt long.',
      },
      {
        q: 'Should I pack eye drops in my carry-on for an international flight?',
        a: 'Yes, so you can use them in flight and keep track of them the whole trip. TSA allows liquids in carry-ons in containers of 3.4 ounces (100 milliliters) or less in a quart-sized bag.',
      },
    ],
  },

  {
    slug: 'what-does-emu-oil-do-in-eye-drops',
    title: 'What does emu oil do in eye drops?',
    description:
      'Emu oil is one of the natural inactive ingredients in Quell. What the carton says it does, how that relates to the tear film’s oil layer, and the bird caution.',
    category: 'formula',
    addedOn: '2026-11-21',
    body: [
      {
        p: `In Quell, emu oil is an inactive ingredient chosen to support the tear film’s oil layer. The carton’s emu oil panel says that in artificial tears it provides soothing support of that layer to reduce moisture loss. It isn’t one of the three active ingredients, and because it comes from a bird, the label opens its warnings with an egg and bird allergy caution.`,
      },
      { h: 'What the carton says, word for word' },
      {
        p: `Quell’s carton has a side panel about emu oil. Rather than paraphrase it, here it is as printed:`,
      },
      { p: `{emuOil}` },
      {
        p: `That panel is the source for everything this page says about what emu oil is there to do. It doesn’t make claims beyond the oil layer and moisture loss, and neither do we.`,
      },
      { h: 'Active or inactive?' },
      {
        p: `On a Drug Facts panel, the active ingredients are the ones that carry the product’s stated purpose. Quell’s actives are {actives}. Emu oil appears in the separate inactive list, which reads in full: {inactives}. Inactive doesn’t mean useless. It means the ingredient isn’t one of those listed with a purpose on the panel; inactive ingredients can shape a formula’s texture, look and feel, and the carton explains why emu oil is in this one. [The inactive ingredients on an eye drop label](/guides/the-inactive-ingredients-section) explains the section itself.`,
      },
      { h: 'The oil layer it’s meant to support' },
      {
        p: `The tear film has three layers. Closest to the eye is a mucus layer that helps tears cling. In the middle is the watery layer, most of the tear’s volume. On the outside is a thin oil layer, made by small glands along the lid margins, that slows the water underneath from evaporating. When that oil layer is thin, the water evaporates faster between blinks, and eyes start to feel dry or gritty.`,
      },
      {
        p: `The carton shows that idea as a before-and-after. Before: {oilBefore}. After: {oilAfter}. Quell as a whole is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and emu oil is one of the ingredients selected with that goal. [The tear film’s oil layer, explained](/guides/the-tear-films-oil-layer) goes deeper.`,
      },
      { h: 'Why put an oil in an eye drop at all?' },
      {
        p: `Many lubricating drops are clear and water-based. Formulas aimed at the oil layer include oils, which is why they look cloudy or milky rather than clear. Quell’s actives already include {mineralOil}, listed with the purpose Emollient. Emu oil sits alongside it among the inactives. Together with the other natural ingredients, these oils are part of why the drop looks the way it does. {appearance}`,
      },
      { h: 'The egg and bird allergy caution' },
      {
        p: `Emu oil comes from the emu, a large flightless bird, and that’s the reason for the first line of the label’s warnings: {warnings}. If you have an egg or bird allergy, or aren’t sure, ask your doctor before using Quell. [Egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell) covers that caution on its own.`,
      },
      { h: 'Is emu oil from a jar the same thing?' },
      {
        p: `No. Emu oil is sold in jars and bottles for skin and hair, and those products aren’t made or labeled for the eye. An eye drop is made and packaged for use in the eye, and its label tells you how to use it. Never put an oil, cream or homemade mixture in your eyes that wasn’t made for them. When Quell’s warnings limit it to use in the eyes, that describes the drop itself, not other emu oil products.`,
      },
      { h: 'What the label leaves to your doctor' },
      {
        list: [
          `Contact lenses: the label doesn’t cover using Quell with lenses; ask your eye doctor.`,
          `Children: the label doesn’t give directions for children; ask a pediatrician or pharmacist.`,
          `Other eye drops: the label doesn’t address combining products; ask your eye doctor or pharmacist.`,
          `Other allergies: check the full inactive list with a doctor or pharmacist.`,
        ],
      },
      { h: 'Using Quell' },
      {
        p: `The Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. And the panel says when to stop: {stopUse} The full panel is on our [Drug Facts page](/drug-facts). If emu oil means Quell isn’t vegan for you, [Is Quell vegan?](/guides/is-quell-vegan) answers that directly.`,
      },
    ],
    faq: [
      {
        q: 'Why is emu oil in eye drops?',
        a: 'Quell’s carton says emu oil provides soothing support of the tear film’s oil layer to reduce moisture loss. It is one of the formula’s natural inactive ingredients.',
      },
      {
        q: 'Is emu oil an active ingredient in Quell?',
        a: 'No. Quell’s active ingredients are glycerol, polysorbate 80 and light mineral oil. Emu oil is listed with the inactive ingredients on the Drug Facts panel.',
      },
      {
        q: 'Can I use emu oil eye drops if I am allergic to eggs?',
        a: 'Quell’s label says caution should be used in those with egg or bird allergies, and the formula contains emu oil. Ask your doctor before using it if that applies to you.',
      },
      {
        q: 'Can I put regular emu oil in my eyes?',
        a: 'No. Emu oil sold for skin or hair is not made or labeled for the eyes. Only use products made for the eye, as their labels direct.',
      },
    ],
  },

  {
    slug: 'honey-allergy-and-manuka-honey-eye-drops',
    title: 'Allergic to honey? Manuka honey in eye drops',
    description:
      'Quell lists manuka honey among its inactive ingredients. What the label says about allergies, and who to ask if honey or bee products bother you.',
    category: 'formula',
    addedOn: '2026-11-21',
    body: [
      {
        p: `If you’re allergic to honey or bee products, ask your doctor or pharmacist before using Quell. Manuka honey is one of its inactive ingredients. The label’s allergy caution names egg and bird allergies, because of the emu oil, but it doesn’t mention honey either way, so the label alone can’t tell you whether Quell is a fit for you.`,
      },
      { h: 'Where manuka honey appears on the label' },
      {
        p: `Manuka honey is in the inactive ingredient list on Quell’s Drug Facts panel. The list reads in full: {inactives}. The active ingredients, the ones listed with a purpose, are {actives}. Being inactive doesn’t make an ingredient irrelevant to allergies. If you react to something, what matters is whether it’s in the bottle, active or not.`,
      },
      { h: 'What the label’s caution covers' },
      {
        p: `The first line of the warnings reads: {warnings}. That caution is there because the formula includes emu oil, which comes from a bird. It’s specific: it names eggs and birds. It says nothing about honey, bees, pollen or any other allergy. Silence on the label isn’t a green light, and it isn’t a warning either. It just means the label doesn’t address it.`,
      },
      { h: 'Questions to bring to a doctor or pharmacist' },
      {
        p: `A pharmacist can look at the full ingredient list with you in a few minutes, and your doctor knows your allergy history. Bring the bottle, a photo of the panel, or our [Drug Facts page](/drug-facts) on your phone. Useful things to mention:`,
      },
      {
        list: [
          `What you react to: honey you eat, bee stings, propolis or other bee products, or pollen.`,
          `What the reaction is usually like, and how severe it has been.`,
          `Any other allergies, including eggs or birds, since the label cautions about those.`,
          `Other eye drops or eye medicines you use, since the label doesn’t cover combining products.`,
          `Whether you wear contact lenses, which the label also doesn’t cover.`,
        ],
      },
      { h: 'Why manuka honey is in the formula' },
      {
        p: `Manuka honey is one of the natural ingredients Quell lists alongside emu oil, Dead Sea salt and Terminalia Chubula. Together they’re part of a formula designed to reinforce the tear film’s oil layer to help reduce moisture loss, and they contribute to its look. The label puts it this way: {milky}. Our [manuka honey in eye drops](/guides/manuka-honey-in-eye-drops) guide covers the ingredient itself, and [the natural ingredients in Quell](/guides/natural-ingredients-in-quell) covers the group.`,
      },
      { h: 'If you try it and react' },
      {
        p: `Stop using the drop if your eyes feel worse after it. The panel spells out when to stop and get help: {stopUse} Swelling of the lids or face, hives, or trouble breathing are emergencies; get medical help right away. Keep the bottle and carton so whoever helps you can see the full ingredient list.`,
      },
      { h: 'Testing a drop yourself isn’t a shortcut' },
      {
        p: `It can be tempting to put in one drop and see what happens. With a known allergy, that puts the test in the most sensitive place you could pick, and it leaves the person who knows your history out of the decision. A short call to a pharmacist before you open the bottle costs a few minutes. If they suggest skipping it, an unopened bottle can be refunded under the site’s policy: {returns}, within {returnDays} days of delivery.`,
      },
      { h: 'Buying for someone else' },
      {
        p: `If you’re ordering Quell as a gift or for a parent, ask about allergies before you buy, not after it arrives. Mention both the egg and bird caution on the label and the manuka honey in the ingredient list, since the label only covers the first. A gift that comes with a quick heads-up about ingredients is easier to accept, and easier to set aside if it isn’t a fit.`,
      },
      { h: 'Honey, bees and vegan diets' },
      {
        p: `Some people avoid honey for reasons other than allergy, such as a vegan diet. Quell contains both manuka honey, made by bees, and emu oil, from a bird. [Is Quell vegan?](/guides/is-quell-vegan) answers that question directly, so you don’t have to work it out from the ingredient list.`,
      },
      { h: 'Reading any eye drop label for allergens' },
      {
        list: [
          `Read both the active and inactive ingredient lists; allergens can be in either.`,
          `Read the Warnings section for any named allergy cautions.`,
          `If an ingredient name is unfamiliar, ask a pharmacist what it is.`,
          `If the label is silent on your allergy, ask before using.`,
        ],
      },
      { h: 'Using Quell once you’ve checked' },
      {
        p: `If your doctor or pharmacist says it’s fine for you, the panel’s directions are: {directions}. Keep the tip clean: {tip}. Store it as the label says: {storage}. You can [buy Quell on the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Can you use manuka honey eye drops if you are allergic to honey?',
        a: 'Ask your doctor or pharmacist first. Quell lists manuka honey as an inactive ingredient, and its label does not address honey allergies either way.',
      },
      {
        q: 'Does Quell have a honey allergy warning?',
        a: 'No. Quell’s allergy caution names egg and bird allergies, because of the emu oil. It does not mention honey or bee products, so ask a doctor or pharmacist if those affect you.',
      },
      {
        q: 'Is manuka honey an allergen in eye drops?',
        a: 'It can matter to someone with a honey or bee-product allergy. Inactive ingredients still count, so anyone with that allergy should check with a doctor or pharmacist before using a drop that contains it.',
      },
    ],
  },

  {
    slug: 'fake-delivery-texts-and-eye-drop-orders',
    title: 'Fake delivery texts and your eye drop order',
    description:
      'Got a text about a package fee or a failed delivery? How a real Quell order is charged and tracked, and how to check a delivery text without tapping its link.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `If a text says your eye drop package needs a fee, an address update or a redelivery payment, don’t tap the link. On Quell, shipping is paid at checkout, before anything ships, and order updates from Quell come by email. Check your order with the tracking link in the shipping email or on the site’s order lookup page instead, and delete the text.`,
      },
      { h: 'How a real Quell order is charged' },
      {
        p: `Everything is charged once, at checkout, on the payment page. Shipping is {shipping}, or free on {freeBottles} or more bottles, and it’s added to the total before you pay. Quell ships only within the United States, from Brentwood, Tennessee, so there’s no customs step either. A message asking for more money to release or redeliver a Quell order doesn’t match how the site charges.`,
      },
      { h: 'What Quell actually sends you' },
      {
        p: `Quell’s order messages arrive by email, at the address you entered at checkout:`,
      },
      {
        list: [
          `An order confirmation, with your order number.`,
          `A shipping email when the package leaves, with a tracking link.`,
          `If you started checkout and didn’t finish, possibly an email that your cart is waiting.`,
          `Later, one reorder reminder email.`,
        ],
      },
      {
        p: `The site itself doesn’t send text messages about orders. [Is this eye drop order email real?](/guides/is-this-eye-drop-order-email-real) covers how to check the emails themselves.`,
      },
      { h: 'Why checkout asks for your phone number' },
      {
        p: `Checkout requires a phone number, and the note under the field explains why: it’s for delivery updates, because the shipping carrier asks for a number. That means a real delivery notice from the carrier could arrive by text. It also means scammers can count on many people expecting a package text around the holidays. A text arriving proves nothing either way; what it asks you to do is the tell.`,
      },
      { h: 'Signs a delivery text is fake' },
      {
        list: [
          `It asks for a payment, however small, to deliver or release a package.`,
          `It asks you to “confirm” or “update” your address or card through a link.`,
          `The link goes to a web address that doesn’t match the company it claims to be, or uses odd spelling.`,
          `It pushes urgency: the package will be returned or destroyed within hours.`,
          `It doesn’t mention any detail you’d recognize from your order.`,
          `It arrives when you haven’t ordered anything at all.`,
        ],
      },
      { h: 'How to check without tapping the link' },
      {
        list: [
          `Open the shipping email from your Quell order and use its tracking link.`,
          `Or go to the [order lookup page](/orders) by typing the site’s address yourself, and enter your order number and checkout email.`,
          `If tracking looks normal, ignore the text.`,
          `If you can’t find the shipping email, check spam and promotions folders first.`,
        ],
      },
      {
        p: `[How to track your Quell order](/guides/how-to-track-your-order) walks through tracking in more detail.`,
      },
      { h: 'If you already tapped the link' },
      {
        p: `Don’t enter anything else. If you typed card details into a page reached from a text, call the number on the back of your card and tell them. If you entered a password, change it wherever you use it. Quell’s checkout takes card details only on the payment page during checkout, so a request for card details any other way didn’t come from the order process.`,
      },
      { h: 'If something really is wrong with your order' },
      {
        p: `Call Quell at {phone} ({hours}). Damaged, incorrect or broken-seal orders are replaced. Unopened bottles are covered by this policy: {returns}, within {returnDays} days of delivery. You can also reach the company through the [contact details on the About page](/about#contact).`,
      },
      { h: 'Fake emails about the same order' },
      {
        p: `The same tricks show up by email: a message that looks like a shipping notice but asks you to log in, pay, or download an attachment to see your tracking. Compare it with the real emails from your order. Quell’s confirmation and shipping emails carry your order number, and the subject lines name the brand and that number. If the sender, the link or the request looks off, don’t act on it; use the order lookup page instead.`,
      },
      { h: 'Helping an older relative spot fakes' },
      {
        p: `If you order eye drops for a parent or grandparent and ship them to their home, tell them a package is coming and that it’s already paid for. A simple rule helps: no real delivery of that order will ask them for money. Put your own email on the order so the shipping notice comes to you, and they can call you before tapping anything they aren’t sure about.`,
      },
      { h: 'Holiday season, extra caution' },
      {
        p: `Fake delivery texts rise when people expect packages, which makes late November and December prime time. If you order eye drops as a gift or for yourself before a trip, keep the confirmation and shipping emails handy so you have something real to compare against. [How to spot a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) covers the shopping side.`,
      },
    ],
    faq: [
      {
        q: 'Does Quell send text messages about orders?',
        a: 'No. Quell sends order updates by email: a confirmation, a shipping email with tracking, and later one reorder reminder. The shipping carrier may use the phone number you give at checkout for delivery updates.',
      },
      {
        q: 'Why did I get a text asking me to pay a fee for my package?',
        a: 'For a Quell order, shipping is paid in full at checkout, so a text asking for an extra delivery fee does not match how the site charges. Do not tap its link; check tracking from your shipping email instead.',
      },
      {
        q: 'How do I check if a package text is real without clicking the link?',
        a: 'Use the tracking link in your order’s shipping email, or type the store’s web address yourself and use its order lookup. If the tracking looks normal, ignore the text.',
      },
      {
        q: 'Why does Quell ask for my phone number at checkout?',
        a: 'The note under the field says it is for delivery updates, because the shipping carrier asks for a number. Quell does not ask for card details by phone or text as part of an order.',
      },
    ],
  },

  {
    slug: 'ordering-eye-drops-on-a-shared-computer',
    title: 'Ordering eye drops on a shared computer',
    description:
      'Buying eye drops on a family, library or work computer? What the Quell site remembers on that device, how to clear it, and where your card details go.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `You can order Quell on a shared computer, but clear what the browser keeps afterward. Guest checkout saves your name, address, email and phone in that browser for next time, and the cart page has a “Not you? Clear details” link to erase them. Card details are entered on the payment provider’s page and never saved on the site. If you signed in, sign out before you leave.`,
      },
      { h: 'What the site remembers on the device' },
      {
        p: `Quell’s [privacy policy](/privacy) spells this out. If you check out as a guest, your name, address, email and phone number are saved in your own browser so you don’t have to type them again. That saved copy stays on the device; the company doesn’t receive it. Your cart is stored in the browser too. That’s convenient on your own laptop and not what you want on a library computer or the family desktop.`,
      },
      { h: 'Clearing your details after checkout' },
      {
        list: [
          `Go back to the [cart page](/cart).`,
          `Look for the “Not you? Clear details” link near the saved details.`,
          `Click it, and the saved name, address, email and phone are removed from that browser.`,
          `Or clear the browser’s site data for the store, which does the same.`,
        ],
      },
      { h: 'Where your card number goes' },
      {
        p: `When you press the button to continue to payment, you’re taken to the payment provider’s secure page to enter your card. According to the privacy policy, card details never pass through or rest on the site’s servers, and they’re never saved anywhere on the site. On a computer you don’t control, also say no when the browser offers to save the card. [Why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains that step.`,
      },
      { h: 'Guest checkout or an account?' },
      {
        p: `You don’t need an account to order; guest checkout works fine. If you do sign in on a shared computer, the site uses a cookie to keep you signed in, so use the sign-out button when you’re done, and never let the browser remember your password. [Do I need an account to order Quell?](/guides/do-i-need-an-account-to-order) covers the choice in more detail.`,
      },
      { h: 'A careful routine on any shared device' },
      {
        list: [
          `Use a private or incognito window if the browser offers one, then close it when you’re done.`,
          `Decline any prompt to save passwords, addresses or cards.`,
          `Check the address bar shows the store’s real address before typing anything.`,
          `After paying, wait for the confirmation page, then close the tab.`,
          `Clear saved details from the cart page, and sign out if you signed in.`,
          `Check your own email on your own phone for the order confirmation.`,
        ],
      },
      { h: 'Public Wi-Fi and kiosks' },
      {
        p: `A hotel business center, a library terminal or a public kiosk is a computer many strangers have used before you. You can’t see what’s installed on it, so keep what you type to the minimum the order needs. On your own phone over public Wi-Fi, check that the address bar shows the store’s real address and a secure connection before entering anything. If the network or the computer feels questionable, wait and order later from your own device.`,
      },
      { h: 'Work computers' },
      {
        p: `A work computer may be monitored or managed by your employer, and your browsing may be visible to IT. Ordering personal items there is a judgment call; many people prefer their own phone. If you do order at work and ship to the office, use your personal email so the order emails come to you. [Can I ship eye drops to my work address?](/guides/shipping-eye-drops-to-your-work-address) covers the delivery side.`,
      },
      { h: 'Ordering for someone else on their computer' },
      {
        p: `If you’re helping a parent or friend order on their computer, decide whose email goes on the order; that’s where the confirmation, shipping email and reorder reminder will go. If they’ll be reordering themselves, use their email and leave their details saved on their own computer. If it’s a one-time favor done on your own device, clear the details afterward.`,
      },
      { h: 'Checking on the order later' },
      {
        p: `The confirmation email has your order number, and the [order lookup page](/orders) shows status using that number and your checkout email, from any device. You don’t need to come back to the shared computer to check on it. If anything goes wrong, call {phone} ({hours}).`,
      },
      { h: 'Phones and tablets shared in a household' },
      {
        p: `The same saving applies on a family tablet or a phone someone else also uses: the browser keeps your guest details for next time. If you don’t want the next person to see your address or email prefilled, use the same “Not you? Clear details” link after ordering. On a device that’s only yours, leaving them saved simply makes your next reorder faster.`,
      },
    ],
    faq: [
      {
        q: 'Is it safe to buy eye drops on a library computer?',
        a: 'It can be done carefully. Use a private window, decline prompts to save anything, and after paying use the cart page’s Not you? Clear details link so your saved name, address, email and phone are removed.',
      },
      {
        q: 'Does the Quell site save my card on the computer?',
        a: 'No. Card details are entered on the payment provider’s page and are never saved anywhere on the site. Do not let the browser itself save the card on a shared device.',
      },
      {
        q: 'How do I remove my address from the Quell checkout?',
        a: 'Open the cart page and click Not you? Clear details. That removes the guest details saved in that browser. Clearing the browser’s site data does the same.',
      },
    ],
  },

  {
    slug: 'pack-or-ship-eye-drops-for-holiday-travel',
    title: 'Pack eye drops or ship them ahead for the holidays?',
    description:
      'Traveling for Christmas or New Year’s? When it makes sense to pack eye drops in your bag and when to ship a bottle to where you’ll be staying instead.',
    category: 'shipping',
    addedOn: '2026-11-21',
    body: [
      {
        p: `For most holiday trips, packing eye drops in your carry-on or personal item is simplest: a bottle of Quell is well under TSA’s liquids limit, and it stays with you. Shipping ahead makes more sense for a long stay, a road trip where you might forget it, or when you need more bottles than you’d like to carry. No delivery date is promised, so order early.`,
      },
      { h: 'Packing: the case for keeping it with you' },
      {
        p: `A bottle in your bag is under your control the whole trip. You can use it on the plane or in the car, and you know it hasn’t sat on a cold porch. TSA says carry-on liquids must be in containers of 3.4 ounces (100 milliliters) or less, carried in a quart-sized bag. A bottle of Quell is {size}, comfortably under that. [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) has the screening details.`,
      },
      {
        list: [
          `Pack it in your personal item, not checked luggage, so you can reach it in flight.`,
          `Bring one more bottle than you think you’ll need on a longer trip.`,
          `Keep it out of the glove box or trunk on a road trip; temperatures there swing.`,
        ],
      },
      { h: 'Shipping ahead: when it makes sense' },
      {
        list: [
          `You’re staying a few weeks, such as a long visit with family or a winter rental.`,
          `You’re ordering several bottles, and {freeBottles} or more ship free.`,
          `You’ve forgotten drops on past trips and want one waiting.`,
          `You want a bottle at the destination and one at home.`,
        ],
      },
      {
        p: `Quell ships to any address in the United States, from Brentwood, Tennessee. It doesn’t ship outside the US, so for a trip abroad, pack it.`,
      },
      { h: 'Where to send it' },
      {
        p: `At a relative’s house, put your name on the order with the address where you’ll be. If the household might not recognize your name, add “c/o” and the host’s name on the apartment or suite line. [Shipping Quell to a holiday address](/guides/shipping-to-a-holiday-address) covers that in more detail. For a hotel, check with the front desk first; [Can you ship eye drops to a hotel?](/guides/shipping-eye-drops-to-a-hotel) explains. For a rental home, [shipping eye drops to a vacation rental](/guides/shipping-eye-drops-to-a-vacation-rental) covers what to ask the host.`,
      },
      { h: 'Timing without a promised date' },
      {
        p: `The site doesn’t promise delivery dates, and the weeks before Christmas are busy for every shipper. If you’re shipping ahead, order well before you leave, and ask your host to watch for the box. If it hasn’t arrived when you get there, a bottle in your bag as a backup means you don’t go without.`,
      },
      { h: 'Cold porches and storage' },
      {
        p: `A box left on a step in December can get very cold. Quell’s storage line is: {storage}. Ask your host to bring the package in when it arrives and keep it in a drawer at room temperature. If you’re worried about a cold porch, [what if no one is home when eye drops arrive?](/guides/what-if-no-one-is-home-when-eye-drops-arrive) has more ideas.`,
      },
      { h: 'Driving instead of flying' },
      {
        p: `Road trips change the math. There’s no liquids limit in a car, but there is heat and cold: a bottle left in a parked car while you visit or shop can drift outside the label’s storage range. Keep it in a bag that comes inside with you, and keep a second bottle at home so you’re never relying on the one in the car. If several family members will gather at one house, shipping a bottle there ahead of time can also save one more thing to pack in a crowded trunk.`,
      },
      { h: 'Following the package' },
      {
        p: `The shipping email goes to the email address on the order, with a tracking link. Use your own email, even when shipping to someone else’s house, so you can see where it is. You can also check status on the [order lookup page](/orders) with your order number and checkout email.`,
      },
      { h: 'After the trip: reset the address' },
      {
        p: `If you checked out as a guest, your details, including the shipping address, are saved in that browser for next time. Before your next order, make sure the address is back to home, or the next bottle goes to the holiday house. If you typed the wrong address after paying, call {phone} ({hours}) quickly; [what if I entered the wrong shipping address?](/guides/wrong-shipping-address) explains why speed matters.`,
      },
      { h: 'If a bottle arrives damaged' },
      {
        p: `Damaged, incorrect or broken-seal orders are replaced. Separately, the returns policy reads: {returns}, within {returnDays} days of delivery. Call {phone} during {hours} to arrange either.`,
      },
      { h: 'What the label says while you travel' },
      {
        p: `Travel doesn’t change the directions: {directions}. Wash your hands, or use sanitizer and let it dry, before each dose, and follow the panel: {tip}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Should I pack my eye drops or ship them to my holiday destination?',
        a: 'For most trips, pack them in your carry-on or personal item so they stay with you. Shipping ahead makes sense for long stays, several bottles, or when you want a bottle waiting, but order early since no delivery date is promised.',
      },
      {
        q: 'Can I ship eye drops to a family member’s house for Christmas?',
        a: 'Yes. Quell ships to any US address. Put your own name and email on the order, add c/o and the host’s name on the second address line if needed, and ask them to bring the box inside.',
      },
      {
        q: 'Can Quell be shipped to me abroad for the holidays?',
        a: 'No. Quell ships only within the United States, so for an international trip, pack your bottles in your carry-on.',
      },
    ],
  },
]
