import type { Guide } from '@/lib/guide-types'
export const DAILY_20261122_E: Guide[] = [
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-paterson-nj:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid TEB; saved at .daily-job/acis1122/TEB.json and .daily-job/e/TEB-extra.json)
   *   (TETERBORO AIRPORT, NJ, elev 3 ft: Jan max 39.9 F, min 25.7 F; Jul max 87.0,
   *   min 68.9; Oct max 66.8, min 47.9; Apr max 62.5, min 43.7; May min 53.3;
   *   monthly normal lows below 50 F from Oct through Apr; Feb precip 2.82 in
   *   (driest), Jul 4.45 (wettest); twelve monthly precip normals sum to 46.29 in;
   *   snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Teterboro row: no humidity or wind figure.
   * - Teterboro is east of Paterson (stated as given in the job's city list). No
   *   landmarks, rivers or employers named.
   */
  {
    slug: 'dry-eye-relief-paterson-nj',
    title: 'Dry eye relief in Paterson, New Jersey',
    description:
      'Paterson’s nights stay below 50°F from October through April, so the heat runs for months. NOAA’s numbers and everyday dry eye relief for the city.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Paterson comes down to the heating calendar. NOAA’s 1991–2020 normals for Teterboro Airport, east of the city, put January lows near 26°F and keep normal lows under 50°F from October through April, so furnaces and boilers run for seven months. Keep heated air off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Teterboro record says about Paterson' },
      {
        p: `The figures in this guide are NOAA’s 1991–2020 climate normals for Teterboro Airport, as published through the National Weather Service’s NOWData. The airport sits east of Paterson at about 3 feet above sea level. It isn’t a thermometer on your block, but it’s a long, official record from a few miles away, and the seasons it describes are the ones Paterson lives through.`,
      },
      {
        list: [
          `January: a normal high of 39.9°F and a normal low of 25.7°F.`,
          `July: a normal high of 87.0°F, with nights holding near 68.9°F.`,
          `October and April, the swing months: highs of 66.8°F and 62.5°F, lows of 47.9°F and 43.7°F.`,
          `February is the driest month at 2.82 inches of precipitation; July is the wettest at 4.45.`,
          `The twelve monthly normals add up to about 46 inches a year.`,
        ],
      },
      {
        p: `The station publishes no snowfall normal, so none is quoted here. Look instead at how evenly the precipitation spreads: no month falls much below 3 inches. Paterson’s dry-eye trouble rarely starts with parched outdoor air. It starts with what people do to indoor air for more than half the year.`,
      },
      { h: 'Seven months of heated air' },
      {
        p: `Heating warms cold outdoor air without adding water to it, so the warmer the room gets, the lower its relative humidity falls. With normal lows below 50°F in every month from October through April, that describes most Paterson homes, classrooms, shops and offices for the colder half of the year. The tear film’s watery middle layer evaporates faster into that air, and the eyes tend to report it as grit, burning, or a heavy, worn-out feeling by evening.`,
      },
      {
        list: [
          `Find where warm air enters the rooms you sit in longest, whether it’s a floor register, a baseboard unit or a radiator under the window, and move the chair, the couch end or the bed out of its path.`,
          `Angle or partly close a register that blows straight at a desk or a pillow.`,
          `Run a small humidifier in the bedroom, and clean it as often as its manual asks.`,
          `Lower the thermostat a little at night; the system cycles less, and less hot air moves across your face while you sleep.`,
        ],
      },
      {
        p: `[Dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) goes deeper on vents and furnace fans if your building has ductwork.`,
      },
      { h: 'October and April: the on-again, off-again months' },
      {
        p: `The swing months bring a different problem. A normal October day in the Teterboro record climbs to about 67°F and drops to about 48°F, and April runs only a few degrees cooler. So the heat clicks on before dawn, shuts off by noon, and starts again after dark. Windows open in the afternoon and close at night. Your eyes get a new kind of air several times a day, and the driest hours land at the edges of the day, when you’re getting ready for work or reading in bed.`,
      },
      {
        p: `Plenty of people find these months harder than January, simply because winter habits haven’t started yet. A few that pay off early:`,
      },
      {
        list: [
          `On the first cold night of fall, stand where you sleep and feel for moving warm air.`,
          `Keep sunglasses in the car; low October and April sun on the morning drive makes people squint, and squinting with dry eyes is uncomfortable.`,
          `Set a screen reminder to look away and blink every 20 minutes, since a morning of heat plus a screen is a double hit.`,
        ],
      },
      { h: 'Summer nights near 69°F' },
      {
        p: `July’s normal low at Teterboro is 68.9°F, so summer nights don’t cool off much, and window units and box fans run late. Air conditioning pulls moisture out of a room as it cools it, and a fan aimed at the bed moves air across your face for hours. If you wake with sticky, scratchy eyes in July, turn the fan toward the ceiling or the foot of the bed, and set the air conditioner’s louvers so they don’t point at your pillow. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) has more on placement.`,
      },
      { h: 'Kitchens, shop floors and screens' },
      {
        p: `Paterson works in every kind of setting, and each one dries the eyes a little differently. A few general patterns are worth knowing:`,
      },
      {
        list: [
          `Restaurant kitchens: hot ranges and strong exhaust hoods pull air past your face all shift. Step out of the line for a few slow blinks when you can.`,
          `Workshops and production floors: dust and big fans are the usual culprits. Safety glasses keep particles out far better than a drop can wash them away afterward, and something stuck in the eye needs medical care, not a lubricant.`,
          `Offices, call centers and home desks: people blink less while they concentrate on a screen. Set the monitor slightly below eye level so the lids cover more of the eye.`,
          `Driving for work: aim the heater at your chest or feet, not your face, and use the fresh-air setting now and then.`,
        ],
      },
      { h: 'Using Quell through a Paterson winter' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses: {uses}. The directions read: {directions}. One rule keeps the bottle clean: {tip}.`,
      },
      {
        p: `Storage matters in a place with January lows in the mid-20s. The panel says: {storage}. A car parked outside through a January night can fall well below that range, and a windowsill above a hot radiator can climb past it. A coat pocket, a bag that comes inside with you, or a drawer away from the heat keeps the bottle where it should be.`,
      },
      {
        p: `Read the caution before a first bottle: {warnings}. The panel also says: {doNotUse}. {stopUse} The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Paterson' },
      {
        p: `Orders ship from Brentwood, Tennessee, to addresses in the United States, Paterson included. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so reorder before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Our [Paterson page](/eye-drops/paterson-nj) and the [New Jersey page](/eye-drops/state/new-jersey) have more local notes.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop can ease dryness. It can’t tell you why your eyes feel the way they do. Pain, a change in vision, light that suddenly hurts, or irritation that keeps coming back are reasons to book a visit, and an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the ones not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Paterson, NJ get in January?',
        a: 'NOAA’s 1991–2020 normals for Teterboro Airport, east of Paterson, give January a normal high of 39.9°F and a normal low of 25.7°F.',
      },
      {
        q: 'Why do my eyes feel dry in the fall in Paterson?',
        a: 'From October on, normal lows at Teterboro drop below 50°F, so heating starts running at night and in the morning. Warmed indoor air holds proportionally less moisture, and the tear film evaporates faster into it.',
      },
      {
        q: 'What is the wettest month in Paterson, New Jersey?',
        a: 'In NOAA’s 1991–2020 normals for Teterboro Airport, July is the wettest month at 4.45 inches, and February is the driest at 2.82 inches.',
      },
      {
        q: 'Does Quell ship to Paterson, New Jersey?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to addresses anywhere in the United States, including Paterson. Shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-white-plains-ny:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid HPN; saved at .daily-job/acis1122/HPN.json and .daily-job/e/HPN-extra.json)
   *   (WESTCHESTER CO AP, NY, elev 370 ft: Jan max 37.3 F, min 22.4 F; Feb min 23.7;
   *   Mar max 47.6, min 30.5; Apr min 40.1; Jul max 83.2, min 64.9; Sep max 74.2;
   *   Oct max 63.0, min 45.5; Nov max 52.2, min 36.2; Sep precip 4.94 in (wettest),
   *   Feb 2.53 (driest); Oct 4.33; twelve monthly precip normals sum to 47.75 in;
   *   snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Westchester County row: no humidity or
   *   wind figure.
   * - No landmarks, parkways by name, employers or rivers named.
   */
  {
    slug: 'dry-eye-relief-white-plains-ny',
    title: 'Dry eye relief in White Plains, New York',
    description:
      'White Plains’ airport station sits about 370 feet up, with March nights still near 30°F. NOAA’s numbers and practical dry eye relief for Westchester days.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in White Plains means planning for a long heating season. NOAA’s 1991–2020 normals for Westchester County Airport, about 370 feet above sea level, show March nights still averaging about 30°F, so furnaces run well into spring. Keep car and office vents off your face, wear glasses for fall yard work, use a lubricating drop exactly as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'NOAA’s numbers for Westchester County Airport' },
      {
        p: `The station behind this guide is Westchester County Airport. Its figures are NOAA’s 1991–2020 climate normals, as published through the National Weather Service’s NOWData, and NOAA lists the station at about 370 feet above sea level. Here is what three decades of readings settle into:`,
      },
      {
        list: [
          `January: a normal high of 37.3°F and a normal low of 22.4°F.`,
          `March: a high of 47.6°F, with nights still near 30.5°F.`,
          `July: a high of 83.2°F and a low of 64.9°F.`,
          `September is the wettest month at 4.94 inches; February is the driest at 2.53.`,
          `Taken together, the twelve monthly normals come to roughly 48 inches of precipitation a year.`,
        ],
      },
      {
        p: `The station has no published snowfall normal, so this guide leaves snow totals out. Two things in the list matter most for your eyes. Winter nights in the low 20s mean the heat works hard from late fall on, and the slow climb out of March means it keeps working long after the calendar says spring.`,
      },
      { h: 'A heating season that stretches into April' },
      {
        p: `Normal lows at the airport sit at 36.2°F in November, 22.4°F in January, 23.7°F in February, 30.5°F in March and 40.1°F in April. That’s five months or more in which a home’s heat runs hardest at night and in the early morning. Warming cold air lowers its relative humidity, so a bedroom can be at its driest exactly while you sleep. People often notice it first on waking: lids that feel stuck, a gritty first blink, eyes that take a while to settle.`,
      },
      {
        list: [
          `Feel for moving air at the head of the bed. A register blowing across the pillow is worth closing partway or redirecting with a cheap deflector.`,
          `Program the thermostat a few degrees cooler for sleeping hours, so the furnace cycles less often.`,
          `Try a small bedroom humidifier, cleaned on the schedule its manual gives. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers sizing and upkeep.`,
          `Give your eyes a few minutes after waking before you reach for a screen; the first blinks of the day spread a fresh layer of tears.`,
        ],
      },
      { h: 'Driving in Westchester with the defroster on' },
      {
        p: `Much of daily life in and around White Plains happens in a car: school runs, errands, the drive to an office or a train station. On a January morning, the first thing most drivers do is run the defroster on high. That air is hot and dry, and some of it rolls off the windshield straight back at your face. Once the glass clears, switch the airflow to the floor or the lower vents, and point the dash vents at your chest. Mixing in fresh outside air from time to time also helps, since recirculated cabin air keeps getting drier. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) walks through each setting.`,
      },
      {
        p: `If your commute ends on a train platform, the problem flips. Cold wind on an open platform makes the eyes water, and then a heated train car dries them out again. Wraparound sunglasses or clear glasses cut the wind, and a few slow, deliberate blinks after you sit down help spread the tear film back over the eye.`,
      },
      { h: 'Fall yard work: leaves, blowers and dust' },
      {
        p: `October in the airport record runs to about 63°F by day and 45.5°F at night, which makes it prime yard-work season. Raking, bagging and leaf blowers throw up dust, bits of dried leaf and grit at face height, and a breeze carries it right into your eyes. A pair of wraparound safety glasses costs little and keeps most of it out.`,
      },
      {
        list: [
          `Wear the glasses before you start the blower, not after something lands in your eye.`,
          `Work with the wind at your back when you can.`,
          `If a particle gets in, don’t rub. Blink, and if it won’t come out or the eye hurts, get medical help; a lubricating drop isn’t an eye wash.`,
          `Wash your hands before you touch your face or a dropper bottle afterward.`,
        ],
      },
      { h: 'Office days and long screen sessions' },
      {
        p: `Offices in winter combine sealed windows, heated air from ceiling vents and hours of screen work. People blink less while they concentrate, so the tear film thins between blinks faster than usual. Put the monitor a little below eye level, keep a ceiling vent from blowing at your desk if you can change seats, and look at something across the room for 20 seconds every 20 minutes. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why that small habit helps.`,
      },
      { h: 'July: 83°F afternoons and air-conditioned evenings' },
      {
        p: `Summer here is warm rather than brutal, with July highs near 83°F and nights near 65°F. Even so, most summer days pass in air-conditioned offices, stores and cars, and air conditioning removes moisture as it cools. The same rules apply: vents away from your face, breaks from the screen, and sunglasses for glare on the drive home.`,
      },
      { h: 'Quell and what its label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. For dosing, the panel says: {directions}. To keep the solution clean, it adds: {tip}.`,
      },
      {
        p: `In a Westchester winter, the storage line is the one people forget. It reads: {storage}. A glove box after a January night in the driveway is colder than that, so carry the bottle in a pocket or bag that comes indoors with you. Check the caution before a first bottle: {warnings}. Also on the panel: {doNotUse}. {stopUse} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to White Plains' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any address in the United States, including White Plains and the rest of Westchester County. Shipping is {shipping} per order, or free with {freeBottles} or more bottles. We don’t promise a delivery date, so order a bottle ahead of when you need it. More local notes are on the [White Plains page](/eye-drops/white-plains-ny) and the [New York page](/eye-drops/state/new-york).`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `Dryness that eases with a few habit changes and a drop is one thing. Eye pain, blurred or changed vision, sensitivity to light, or irritation that keeps returning is another, and those are reasons to see an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does White Plains, NY get in winter?',
        a: 'NOAA’s 1991–2020 normals for Westchester County Airport give January a normal high of 37.3°F and a normal low of 22.4°F, and March nights still average about 30.5°F.',
      },
      {
        q: 'What is the rainiest month in White Plains?',
        a: 'September, at 4.94 inches in NOAA’s 1991–2020 normals for Westchester County Airport. February is the driest month at 2.53 inches.',
      },
      {
        q: 'Why do my eyes feel dry after raking leaves?',
        a: 'Raking and leaf blowers lift dust and dried leaf bits to face height, and a breeze carries them into the eyes. Wraparound safety glasses keep most of it out, and anything that stays stuck in the eye needs medical help.',
      },
      {
        q: 'Does Quell deliver to White Plains, New York?',
        a: 'Yes. Orders ship from Brentwood, Tennessee, to addresses across the United States, White Plains included, for {shipping} or free with {freeBottles} or more bottles. No delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-lindenhurst-ny:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid FRG; saved at .daily-job/acis1122/FRG.json and .daily-job/e/FRG-extra.json)
   *   (FARMINGDALE REPUBLIC AP, NY, elev 75 ft: Jan max 38.9 F, min 25.1 F; Feb
   *   min 26.4; Apr max 58.4, min 41.9; May max 68.1, min 51.4; Jul max 82.8, min
   *   67.8; Oct min 48.3; Nov max 53.4, min 38.4; Dec max 44.2, min 30.8; Feb precip
   *   2.03 in (driest), Sep 3.66 (wettest); Jul 3.05; twelve monthly precip normals
   *   sum to 38.28 in; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Republic Airport row: no humidity or
   *   wind figure.
   * - Republic Airport is in Farmingdale, a few miles north of Lindenhurst
   *   (station coordinates vs. village location). No bay, beach, rail line or
   *   employer named.
   */
  {
    slug: 'dry-eye-relief-lindenhurst-ny',
    title: 'Dry eye relief in Lindenhurst, New York',
    description:
      'Lindenhurst’s nearest NOAA station logs about 38 inches of precipitation a year and February nights near 26°F. Dry eye relief for South Shore life.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Lindenhurst starts with two kinds of air: wind off open water in the warm months and heated indoor air from November into April. NOAA’s 1991–2020 normals for Republic Airport in Farmingdale, a few miles north, put January nights near 25°F and February as the driest month. Wear wraparound glasses outdoors, keep vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The Republic Airport record' },
      {
        p: `Lindenhurst doesn’t have its own long-term NOAA station, so this guide uses Republic Airport in Farmingdale, a short drive north, at about 75 feet above sea level. The numbers are NOAA’s 1991–2020 climate normals for that station, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `January: a normal high of 38.9°F and a low of 25.1°F.`,
          `July: a high of 82.8°F and a low of 67.8°F.`,
          `December stays milder than January, with a high of 44.2°F and a low of 30.8°F.`,
          `February is the driest month at 2.03 inches; September is the wettest at 3.66.`,
          `The monthly normals total about 38 inches of precipitation a year.`,
        ],
      },
      {
        p: `No snowfall normal is published for the station, so none appears here. The summer highs in the low 80s and a December that lags behind January mean the cold arrives a little late and leaves a little late.`,
      },
      { h: 'Wind off the water' },
      {
        p: `South Shore life pulls people toward the water: boats, docks, fishing piers, beach walks, the drive along the shore on a clear day. Open water gives wind a long, unbroken run, and moving air is one of the fastest ways to thin the tear film between blinks. Add salt spray and sun bouncing off the surface, and it’s easy to come home from an afternoon outside with eyes that sting or feel sandy.`,
      },
      {
        list: [
          `Wraparound sunglasses with side coverage block wind and reflected glare at once; a plain pair with flat lenses leaves gaps at the sides.`,
          `A brimmed hat cuts the light coming in from above.`,
          `When the boat is running, turn out of the wind for a few slow, complete blinks.`,
          `Rinse and dry your hands before touching your eyes after handling bait, lines or a salty rail.`,
          `Keep your eye drops in a shaded bag, not on a sunny deck or dashboard.`,
        ],
      },
      { h: 'Beach days and summer glare' },
      {
        p: `July afternoons near 83°F bring beach and pool days, and with them hours of bright light. Squinting against glare off sand and water is tiring on its own, and dry eyes make it worse. Sunglasses help, so does a beach umbrella that keeps you out of direct sun for part of the day. Chlorinated pool water is a separate irritant; [Dry eyes after swimming in a pool](/guides/dry-eyes-after-swimming) covers it.`,
      },
      {
        p: `Summer evenings also bring air conditioning, at home and in the car. Cooling removes moisture from the air, and vents that point at your face speed up evaporation. Aim them at your chest instead.`,
      },
      { h: 'November to April: houses with the heat on' },
      {
        p: `Normal lows at Republic Airport drop to 38.4°F in November and stay at or below about 42°F through April, bottoming out near 25°F in January. Through those months the heat runs in nearly every house, whether it comes from baseboards, radiators or a forced-air system. Warmed air holds proportionally less moisture than it did outdoors, and eyes feel it most in the rooms where you sit still: the bedroom, the couch, the desk.`,
      },
      {
        list: [
          `Keep the bed, the couch and the desk out of the direct path of baseboard heat or a floor register.`,
          `Run a small humidifier in the bedroom and clean it as its manual directs.`,
          `Turn the heat down a notch at night so it cycles less.`,
          `Watch for space heaters aimed at your legs and face during long evenings on the couch.`,
        ],
      },
      {
        p: `[Dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) is worth reading if your house has older hot-water or steam heat.`,
      },
      { h: 'The commute and the workday' },
      {
        p: `If your workday starts with a train ride or a long drive west and ends at a screen, both halves are drying. On a train, heated cars in winter and cold air-conditioned ones in summer move air across your face for the whole ride, and reading a phone cuts your blink rate on top of that. In the car, the heater or the air conditioning does the same. At a desk, the screen is the main factor.`,
      },
      {
        list: [
          `On the train, look up and out the window every few minutes, and blink fully.`,
          `In the car, set the vents low and use the fresh-air setting now and then.`,
          `At the desk, keep the top of the monitor at or slightly below eye level.`,
          `Follow the 20-20-20 habit: every 20 minutes, look 20 feet away for 20 seconds.`,
        ],
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. On its Drug Facts panel, the Uses section says: {uses}. Directions: {directions}. And a hygiene rule: {tip}.`,
      },
      {
        p: `The storage line is worth remembering on a boat in August or in a car in January: {storage}. Before trying it, read the caution: {warnings}. The panel also says: {doNotUse}. {stopUse} You can read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Lindenhurst' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses throughout the United States, including Lindenhurst and the rest of Long Island. Shipping is {shipping}, or free on {freeBottles} or more bottles, and there’s no promised delivery date, so order before you run out. Unopened bottles are refundable within {returnDays} days of delivery, and you don’t send them back. See the [Lindenhurst page](/eye-drops/lindenhurst-ny) and the [New York page](/eye-drops/state/new-york) for more.`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `Seek care for eye pain, any change in your vision, eyes that become sensitive to light, or irritation that hangs on or keeps returning. A drop won’t explain those; an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Lindenhurst, NY get in winter?',
        a: 'NOAA’s 1991–2020 normals for Republic Airport in Farmingdale, a few miles north, give January a normal high of 38.9°F and a low of 25.1°F.',
      },
      {
        q: 'What is the driest month on Long Island’s South Shore?',
        a: 'At Republic Airport, the closest NOAA station to Lindenhurst, February is the driest month at 2.03 inches in the 1991–2020 normals, and September is the wettest at 3.66 inches.',
      },
      {
        q: 'Why do my eyes sting after a day on a boat?',
        a: 'Wind across open water, salt spray and glare off the surface all dry and irritate the eyes. Wraparound sunglasses, a brimmed hat and turning out of the wind to blink help; stinging that lasts or comes with pain needs an eye doctor.',
      },
      {
        q: 'Can I get Quell shipped to Lindenhurst, New York?',
        a: 'Yes. Quell ships to US addresses, Lindenhurst included, for {shipping} per order or free on {freeBottles} or more bottles. It ships from Brentwood, Tennessee, with no promised delivery date.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-joliet-il:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid LOT; saved at .daily-job/acis1122/LOT.json and .daily-job/e/LOT-extra.json)
   *   (ROMEOVILLE WFO, IL, elev 660 ft: Jan max 31.7 F, min 16.1 F; Feb max 36.3,
   *   min 19.7; Mar min 29.7; Jul max 84.7, min 64.5; Nov min 31.9; Dec max 36.8,
   *   min 22.0; snowfall Jan 10.6 in, Feb 8.7, Dec 7.5, Mar 4.2, Nov 1.2, Apr 0.9,
   *   Oct 0.1, May-Sep 0.0, twelve monthly snow normals sum to 33.2 in; precip May
   *   4.81 in (wettest), Jun 4.68, Feb 1.98 (driest), Dec 2.15, Jan 2.19; twelve
   *   monthly precip normals sum to 41.14 in)
   * - The station is the National Weather Service Chicago office's station in
   *   Romeoville, north of Joliet (as given in the job's city list).
   * - relhum23.txt / wndspd23.txt have no Romeoville row: no humidity or wind figure.
   * - No landmarks, rivers, highways by number or employers named.
   */
  {
    slug: 'dry-eye-relief-joliet-il',
    title: 'Dry eye relief in Joliet, Illinois',
    description:
      'Joliet averages about 33 inches of snow a year and January nights near 16°F, per NOAA. How snow, wind and furnace air dry your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Joliet means getting through snow season. NOAA’s 1991–2020 normals for the National Weather Service station in Romeoville, just north of Joliet, show about 33 inches of snow a year and January nights near 16°F, so the furnace runs hard while wind and glare work on your eyes outdoors. Wear goggles or wraparound glasses to clear snow, keep heater vents off your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The Romeoville weather station' },
      {
        p: `Joliet’s official climate numbers here come from a station in Romeoville, north of the city, run at the National Weather Service’s Chicago office. NOAA lists it at about 660 feet above sea level, and its 1991–2020 climate normals, as published through the National Weather Service’s NOWData, include snowfall, which many stations don’t:`,
      },
      {
        list: [
          `Snowfall: about 33 inches in a normal year, led by January at 10.6 inches, February at 8.7 and December at 7.5.`,
          `March still averages 4.2 inches of snow, and even April has 0.9.`,
          `January: a normal high of 31.7°F and a low of 16.1°F.`,
          `July: a high of 84.7°F and a low of 64.5°F.`,
          `May is the wettest month at 4.81 inches of precipitation; February is the driest at 1.98.`,
        ],
      },
      {
        p: `Add the monthly precipitation normals and you get about 41 inches a year. Most of that falls from April through September. The cold months are both the driest on paper and the months when you spend the most time in heated air.`,
      },
      { h: 'Shoveling, snowblowers and blowing snow' },
      {
        p: `A 10-inch January is a lot of shoveling. Clearing a driveway puts you face-first into cold wind for half an hour or more, and a snowblower throws fine, icy powder back at you whenever the breeze shifts. Cold, moving air makes eyes water at first and then leaves them dry and stinging once you’re back inside. Bright sun on fresh snow adds glare, and squinting for a long stretch is tiring for already dry eyes.`,
      },
      {
        list: [
          `Wear ski goggles or close-fitting wraparound glasses for big snowfalls; they keep blown snow and wind off the eye surface.`,
          `Point the snowblower chute downwind before you start.`,
          `Take a break inside every so often and blink slowly a few times.`,
          `Pull a scarf or gaiter over your nose, and make sure it doesn’t push your breath up under the lenses.`,
        ],
      },
      {
        p: `[Dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) has more on goggles and fogging.`,
      },
      { h: 'Furnace season, November to March' },
      {
        p: `Romeoville’s normal lows sit below freezing from November (31.9°F) through March (29.7°F), with January bottoming out near 16°F. A furnace keeping a house at 68°F against air that cold is running almost constantly, and the air it delivers is warm and dry. In a home with forced-air heat, registers blow that air into every room.`,
      },
      {
        list: [
          `Check the register nearest your bed, your recliner and your desk chair. Redirect or close any that blow straight at your face.`,
          `Set the furnace fan to auto rather than on, so it isn’t pushing air through the house between heating cycles.`,
          `Use a humidifier in the bedroom, cleaned regularly.`,
          `In the garage workshop, keep a space heater pointed at your legs, not your face.`,
        ],
      },
      {
        p: `[Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers placement for garages and basements.`,
      },
      { h: 'Dark commutes in December' },
      {
        p: `By December, many people drive to work and back in the dark, often on busy highways with heavy truck traffic. That means hours of a heater blowing in a closed car, headlights in your eyes, and the focused stare that cuts down on blinking. Set the vents to the floor once the windshield clears, crack the fresh-air setting, and keep your glasses or windshield clean, since smudges scatter headlight glare. If you need eye drops on the road, pull over first; your vision may blur for a moment after a drop.`,
      },
      { h: 'May storms and summer heat' },
      {
        p: `May is Romeoville’s wettest month, and June is close behind at 4.68 inches. Spring storms bring wind and dust ahead of the rain, and yard work and youth sports fill the drier days. By July, highs reach about 85°F. Mowing throws grass clippings and dust, so the same wraparound glasses you used for snow are useful again. Indoors, air conditioning and fans take over from the furnace as the main drying force; keep the airflow off your face.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions say: {directions}. Keep the dropper clean, too: {tip}.`,
      },
      {
        p: `Cold matters for the bottle as well as your eyes. The label says: {storage}. A truck cab or a detached garage on a 16°F night is far below that, so keep the bottle inside your coat or in the house. Read the caution before using it: {warnings}. The panel also says: {doNotUse}. {stopUse} The full text is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered to Joliet' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, including Joliet and the surrounding towns of Will County. Shipping is {shipping}, or free when you order {freeBottles} or more bottles. No delivery date is promised, so build in time before a snowstorm or the holidays. Our [Joliet page](/eye-drops/joliet-il) and the [Illinois page](/eye-drops/state/illinois) have more on the area.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Snow, wind and furnace air explain a lot, but not everything. Pain, a change in vision, eyes that suddenly can’t handle light, or irritation that doesn’t settle are reasons to book an appointment, where an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Joliet, Illinois get a year?',
        a: 'About 33 inches in a normal year, according to NOAA’s 1991–2020 normals for the National Weather Service station in Romeoville, just north of Joliet. January is the snowiest month at 10.6 inches.',
      },
      {
        q: 'How cold does Joliet get in January?',
        a: 'The Romeoville station’s 1991–2020 normals give January a high of 31.7°F and a low of 16.1°F.',
      },
      {
        q: 'Should I wear goggles when using a snowblower?',
        a: 'Goggles or close-fitting wraparound glasses keep blown snow and cold wind off your eyes, which is where much of the stinging and dryness after snow clearing comes from. Aim the chute downwind as well.',
      },
      {
        q: 'Can I order Quell to Joliet?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to US addresses including Joliet, for {shipping} per order or free on {freeBottles} or more bottles. No delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-waukegan-il:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid UGN; saved at .daily-job/acis1122/UGN.json and .daily-job/e/UGN-extra.json)
   *   (CHICAGO WAUKEGAN REGIONAL AP, IL, elev 710 ft: Jan max 30.9 F, min 16.0 F;
   *   Feb max 34.1, min 18.4; Mar max 44.3, min 26.9; Apr max 55.5, min 36.0; May
   *   max 66.6, min 45.9; Jun max 76.6; Jul max 81.3, min 61.9; Aug min 61.1; Dec
   *   max 35.9, min 21.8; precip Jan 1.41 in (driest), Feb 1.52, Dec 1.86, Jun 4.45
   *   (wettest); twelve monthly precip normals sum to 35.30 in; snowfall "M", not
   *   quoted)
   * - relhum23.txt / wndspd23.txt have no Waukegan row: no humidity or wind figure.
   * - Lake Michigan named as general geography (Waukegan's lakefront), not as a
   *   checked landmark; no harbor, park, employer or base named.
   */
  {
    slug: 'dry-eye-relief-waukegan-il',
    title: 'Dry eye relief in Waukegan, Illinois',
    description:
      'In Waukegan, December through February are the coldest and driest months on NOAA’s record. Why winter dries your eyes there, and what to do about it.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Waukegan is mostly a winter job. NOAA’s 1991–2020 normals for Waukegan’s regional airport show December, January and February as both the coldest and the driest months, with January lows near 16°F and under 1.5 inches of precipitation. Heated indoor air does the rest. Keep vents and heaters off your face, shield your eyes from lake wind, use a lubricating drop exactly as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Waukegan airport record shows' },
      {
        p: `The station is the Waukegan regional airport, listed by NOAA at about 710 feet above sea level. The figures are its 1991–2020 climate normals, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `January: a normal high of 30.9°F and a low of 16.0°F.`,
          `January is also the driest month, at 1.41 inches of precipitation; February follows at 1.52 and December at 1.86.`,
          `June is the wettest month at 4.45 inches.`,
          `July: a high of 81.3°F and a low of 61.9°F.`,
          `The twelve monthly normals total about 35 inches a year.`,
        ],
      },
      {
        p: `The station has no published snowfall normal, so none is given here. The pattern worth noticing is that the dry months and the cold months are the same months. Outdoor winter air here holds very little water to begin with, and heating it indoors stretches what little there is even thinner.`,
      },
      { h: 'Why winter is the dry season here' },
      {
        p: `Cold air can’t hold much moisture. When a furnace pulls in 16°F air and warms it to room temperature, its relative humidity drops sharply, because the same small amount of water is now spread through much warmer air. That’s the air your eyes sit in through a Waukegan winter, at home, at work and in the car. The watery layer of the tear film evaporates faster into it, and the eyes may feel scratchy, hot or tired by evening.`,
      },
      {
        list: [
          `Run a humidifier in the room where you sleep, and clean it as its manual says.`,
          `Keep furnace registers and baseboard heat from blowing toward your face.`,
          `Lower the thermostat slightly at night.`,
          `Blink fully and often when reading or watching TV, since long, focused viewing cuts blinking down.`,
        ],
      },
      { h: 'A cold, slow spring' },
      {
        p: `Spring takes its time in the airport record. March highs reach only 44.3°F, April lows average 36°F, and even May’s normal high is 66.6°F with nights near 46°F. For many households, that means the heat keeps running into May. It also means a long stretch of chilly, breezy days outdoors. If your eyes still feel dry in April and May, the extended heating season is a likely reason.`,
      },
      { h: 'Wind along the lakefront' },
      {
        p: `Waukegan sits on the shore of Lake Michigan, and time along the lakefront is time in the wind. Open water lets wind build with nothing to slow it, and cold wind in particular makes eyes water at first, then sting and feel dry. A walk, a run or fishing along the shore in winter or early spring is when it bites hardest.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or clear wind-blocking glasses outdoors.`,
          `Walk with the wind at your back on the return leg if you can plan the route.`,
          `When your eyes water in the cold, blot the skin around them gently instead of rubbing the eyes.`,
          `Warm up indoors before reaching for a drop, so your hands are steady and clean.`,
        ],
      },
      {
        p: `[How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) goes further on eyewear.`,
      },
      { h: 'June rain and summer nights near 62°F' },
      {
        p: `June is the wettest month, and summer here is comparatively mild: July highs of about 81°F and nights near 62°F. On nights like that, plenty of people open windows and run fans instead of air conditioning. A fan blowing across the bed for hours can still dry the eyes, so point it at the ceiling or your feet. In offices and stores, air conditioning removes moisture as it cools, so the vent-placement habits from winter still apply.`,
      },
      { h: 'Shift work and long winter evenings' },
      {
        p: `If you work early, late or rotating shifts, winter darkness stretches those hours further. Long shifts under bright indoor lights, screens on breaks, and a drive home in a heated car with headlights in your face all add up. Keep a bottle in your bag, take short breaks to look away from close work, and use the fresh-air setting in the car.`,
      },
      { h: 'Using Quell in a Waukegan winter' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, it is: {uses}. How to use it: {directions}. A rule worth following every time: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A car sitting outside at 16°F is far colder than that, so carry the bottle in an inside pocket or a bag you bring indoors. Read the caution first: {warnings}. Another line on the panel: {doNotUse}. {stopUse} The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering Quell to Waukegan' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses in the United States, Waukegan and the rest of Lake County included. Shipping is {shipping} per order, or free on {freeBottles} or more bottles. No delivery date is promised, so order ahead of winter storms and holiday weeks. The [Waukegan page](/eye-drops/waukegan-il) and the [Illinois page](/eye-drops/state/illinois) have more local information.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If your eyes hurt, your vision changes, light starts to bother you, or irritation keeps returning despite changes at home, see an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Waukegan, Illinois?',
        a: 'January, at 1.41 inches of precipitation in NOAA’s 1991–2020 normals for the Waukegan airport. February (1.52 inches) and December (1.86 inches) are close behind, and June is the wettest at 4.45 inches.',
      },
      {
        q: 'How cold does Waukegan get in winter?',
        a: 'The Waukegan airport’s 1991–2020 normals give January a high of 30.9°F and a low of 16.0°F, and December a high of 35.9°F and a low of 21.8°F.',
      },
      {
        q: 'Why are my eyes still dry in May?',
        a: 'Where spring stays cool, the heat often keeps running well into May. In Waukegan, May nights average about 46°F, so heated indoor air can keep drying your eyes later than you’d expect.',
      },
      {
        q: 'Does Quell ship to Waukegan?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to addresses across the US, including Waukegan, for {shipping} per order or free on {freeBottles} or more bottles. No delivery date is promised.',
      },
    ],
  },

  {
    slug: 'can-i-order-eye-drops-on-a-weekend',
    title: 'Can I order eye drops on a weekend?',
    description:
      'Yes. Quell’s checkout takes orders on Saturdays, Sundays and holidays. What happens after you pay, and when a person can pick up the phone.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Yes. Quell’s checkout is online and open every day, Saturdays, Sundays and holidays included, so you can order whenever you notice the bottle is getting low. You authorize the payment when you submit the order, and a confirmation email follows. Orders are packed by hand at our office in Brentwood, Tennessee, and the phone line is staffed {hours}, so weekend questions wait for a weekday.`,
      },
      { h: 'What happens the moment you place a weekend order' },
      {
        p: `Nothing about checkout changes on a weekend. The steps run the same at 2 p.m. on a Tuesday and 11 p.m. on a Sunday:`,
      },
      {
        list: [
          `Add bottles to your [cart](/cart) and check out as a guest. There’s no account to create.`,
          `Enter your email, then the shipping name, street address, an optional apartment or suite line, city, two-letter state code, ZIP and a phone number.`,
          `Enter your card. Our [terms](/terms) say payment is processed by Authorize.net and that you authorize the charge when you submit the order.`,
          `Once payment goes through, a confirmation email arrives with your order number, what you ordered, the shipping address and a link to track the order.`,
        ],
      },
      {
        p: `The confirmation email says the order is paid and being prepared, and that a second email will come when it ships. Those two emails bracket everything that happens in between, whether you ordered on a weekday or a weekend.`,
      },
      { h: 'Will a weekend order ship on Saturday or Sunday?' },
      {
        p: `We don’t promise a ship day or a delivery date for any order, weekday or weekend. Orders are picked and packed by hand at the office rather than by a warehouse system, and the site tells you when a package leaves rather than predicting it. The order sits at Paid while it’s being prepared. The next change you’ll see is Shipped, along with a shipping email that includes a tracking number when one is attached.`,
      },
      {
        p: `The practical takeaway: if you’ll need a bottle by a certain day, order well ahead of it. A weekend order is a perfectly good order; it just doesn’t come with a timetable. [How long does Quell take to arrive?](/guides/how-long-does-delivery-take) explains why the site doesn’t give one.`,
      },
      { h: 'Checking on your order over the weekend' },
      {
        p: `You don’t need to wait for Monday to see where things stand. The [track your order](/orders) page looks an order up by its order number and the email you checked out with, and it works any day of the week. It shows one of four statuses: Awaiting payment, Paid, Shipped or Canceled. [What your Quell order status means](/guides/what-your-order-status-means) explains each one.`,
      },
      {
        list: [
          `Paid on a Saturday morning and still Paid on Sunday night is normal; it means the order is waiting to be prepared.`,
          `Awaiting payment that doesn’t change after a refresh or two usually means the payment didn’t finish. Check your card statement before ordering again, so you don’t place two orders.`,
          `If the lookup says no order was found, check the order number in your confirmation email and make sure the email matches the one you typed at checkout.`,
        ],
      },
      { h: 'Need to fix something before Monday?' },
      {
        p: `The most common weekend worry is a typo in the address, noticed an hour after ordering. The phone line is staffed {hours}, so the earliest a person can look at it is the next weekday. Call {phone} as soon as the line opens, with your order number ready. We can’t promise a change once an order is in, but the sooner we hear about it, the better the odds of catching it before it’s packed. [What if I entered the wrong shipping address?](/guides/wrong-shipping-address) covers this in detail.`,
      },
      {
        p: `If it’s easier to write than to call, the details for reaching us are on the [About page](/about#contact). A message sent on Saturday is read once the office is open again.`,
      },
      { h: 'Didn’t get a confirmation email?' },
      {
        list: [
          `Look in spam, junk and promotions folders first; the message comes from the shop, with your order number in the subject.`,
          `Check the order page using the email you think you entered. If the lookup works, the order exists, and the email simply went astray.`,
          `If neither turns anything up, look at your card account for a charge or a pending authorization before you try again.`,
          `Still unsure? Call {phone} during {hours}. Have the name and ZIP code you used, plus the approximate time you ordered.`,
        ],
      },
      { h: 'Holiday weekends: Thanksgiving, Black Friday and Christmas' },
      {
        p: `Holiday weekends work the same way as any other. Thanksgiving falls on Thursday, November 26, 2026, Black Friday on November 27 and Cyber Monday on November 30, and the checkout stays open through all of it. There are no promo codes on the site and no special holiday pricing to wait for, so there’s no advantage in holding off until a particular day. Christmas Day is a Friday this year. If a bottle is meant as a gift or you’ll be traveling, order early rather than counting on any particular week.`,
      },
      { h: 'Who can order, on any day of the week' },
      {
        list: [
          `Buyers must be 18 or older.`,
          `Orders ship only to addresses in the United States, from Brentwood, Tennessee.`,
          `Shipping is {shipping} per order, or free on {freeBottles} or more bottles.`,
          `There’s no subscription. You reorder when you want to, and the shop sends one reorder reminder email.`,
          `Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t need to send them back.`,
        ],
      },
      { h: 'Before your first bottle' },
      {
        p: `Whatever day you order, read the caution on the label first: {warnings}. The directions are: {directions}. The full panel is on the [Drug Facts page](/drug-facts), and you can read it before you buy.`,
      },
    ],
    faq: [
      {
        q: 'Does Quell take orders on Sundays?',
        a: 'Yes. Checkout is online and open every day, including Sundays and holidays. A confirmation email follows as soon as payment goes through.',
      },
      {
        q: 'Is Quell customer service open on weekends?',
        a: 'The phone line is staffed {hours}, so it isn’t answered on weekends. Call {phone} on the next weekday with your order number, or use the contact details on the About page.',
      },
      {
        q: 'Will my eye drops ship faster if I order on a Friday?',
        a: 'The site doesn’t promise a ship day or delivery date for any order. Orders are packed by hand at the office, and you get a shipping email when the package leaves.',
      },
      {
        q: 'Can I change a weekend order before Monday?',
        a: 'Call {phone} as soon as the line opens on the next weekday, with your order number. A change can’t be promised, but calling early improves the odds of catching the order before it’s packed.',
      },
    ],
  },

  {
    slug: 'shipping-eye-drops-to-someone-who-is-moving',
    title: 'Shipping eye drops to someone who is moving',
    description:
      'Sending eye drops to a friend or relative in the middle of a move? Which address to use, what checkout asks for, and what to do if it goes astray.',
    category: 'shipping',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Send it to an address where they’ll be when it arrives. Because Quell promises no delivery date, the new address is the safer pick only once they’ve moved in; until then, use a steady address such as their workplace or a relative’s home. Ask for the exact street, unit and ZIP, put their name on the order, and tell them it’s coming.`,
      },
      { h: 'Old address, new address or somewhere else?' },
      {
        p: `A move rarely happens on one clean day. There’s the week of packing, the day the truck comes, a few nights at a friend’s place, and the first weeks in a home where the mailbox label is still blank. Each address has a catch:`,
      },
      {
        list: [
          `The old address works only if they’ll still be there for a while. A box that lands after they’ve handed over the keys is out of their hands.`,
          `The new address works once they’re actually living there. Before that, a package may sit on an empty porch or in a building lobby with nobody to collect it.`,
          `A workplace, if their employer accepts personal packages, stays the same through the whole move. [Can I ship eye drops to my work address?](/guides/shipping-eye-drops-to-your-work-address) covers the questions to ask first.`,
          `A relative or friend who isn’t moving can hold it for them. Put the recipient’s name on the order and the host’s address in the address fields.`,
        ],
      },
      { h: 'Get the exact new address from them' },
      {
        p: `People in the middle of a move often give an address from memory, and new addresses are easy to get slightly wrong. Ask them to text it, then check it against what checkout needs:`,
      },
      {
        list: [
          `First and last name, as they’d like it on the package.`,
          `The street address, with the house number spelled out exactly.`,
          `The apartment, suite or unit number, which goes in the optional second line. New buildings sometimes use letters as well as numbers.`,
          `The city and the two-letter state code. Checkout rejects anything else in the state box.`,
          `A five-digit ZIP code, or ZIP+4 if they have it.`,
        ],
      },
      {
        p: `A missing unit number is the classic moving mistake, and it’s the one most likely to strand a package in a mailroom. [Getting the shipping address right](/guides/getting-the-address-right) has more.`,
      },
      { h: 'Whose name, phone and email go on the order' },
      {
        p: `The name in the shipping fields should be theirs, since that’s who the package is for. The phone number travels with the shipping address because carriers ask for one, so many senders put the recipient’s number there. [Why do you need a phone number to ship eye drops?](/guides/why-do-you-need-a-phone-number-to-ship) explains the field.`,
      },
      {
        p: `The email address is yours. The confirmation email and the shipping email both go to the address entered at checkout, so you’ll have the order number and, once it ships, any tracking number. Forward the shipping email to them, or text them the tracking number, so they can watch for the box at the right door.`,
      },
      { h: 'Your browser may remember their address' },
      {
        p: `Quell’s checkout saves the details you type in your own browser so the next order is quicker. After you’ve sent a bottle to someone else, that browser may suggest their address the next time you order for yourself. Check the shipping fields before you pay, or use the “Not you? Clear details” link on the cart page to start fresh.`,
      },
      { h: 'Moving to another state, or out of the country' },
      {
        p: `A move from one state to another doesn’t change anything: Quell ships to addresses across the United States, and shipping is {shipping} per order, or free on {freeBottles} or more bottles, wherever the box is headed. A move abroad is different. The shop ships within the US only, so a bottle has to reach them before they leave, or travel with them. If it’s going in a carry-on, [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) is worth a look.`,
      },
      { h: 'If the package ends up at the old address' },
      {
        p: `Our [terms](/terms) say risk of loss passes on delivery to the address you provide, and that the shop isn’t responsible for delays caused by an incorrect address. So the address you type is the one that counts. If you realize after ordering that it’s going to the wrong place, call {phone} during {hours} with the order number right away. A change can’t be promised once an order is in, but an early call gives it the most time.`,
      },
      {
        p: `If the box has already been delivered to their old place, the new residents or the landlord may be the fastest route to it. Ask your friend to reach out; they know the building and the people.`,
      },
      { h: 'Why a bottle helps during moving week' },
      {
        p: `Moving is rough on eyes. Dust rises from closets and cardboard, long drives run with the heater or air conditioning blowing, and late nights of unpacking end in front of a phone screen. Someone who already uses eye drops may find their usual bottle packed in a box they can’t find. A new bottle that shows up at the right address solves that. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label gives the Uses as: {uses}.`,
      },
      {
        p: `Two label points to pass along: {warnings}. And for storage: {storage}. A bottle left in a hot moving truck or a freezing garage can fall outside that range, so it belongs in the bag that rides in the car.`,
      },
      { h: 'Adding a note' },
      {
        p: `Checkout has no gift message or gift-wrap option, so the package arrives as a plain order. Send a text letting them know it’s on the way and what it is, so they don’t mistake it for something the previous residents ordered. If they’d rather not keep it, unopened bottles can be refunded within {returnDays} days of delivery without being sent back; [how to send Quell as a gift](/guides/sending-quell-as-a-gift) explains who calls.`,
      },
    ],
    faq: [
      {
        q: 'Should I send a package to someone’s old or new address?',
        a: 'Send it to wherever they’ll be when it arrives. Since no delivery date is promised, use the new address only once they’ve moved in, or a steady address such as a workplace or a relative’s home in between.',
      },
      {
        q: 'What happens if a package goes to someone’s old address?',
        a: 'Quell’s terms say risk of loss passes on delivery to the address provided. Call {phone} during {hours} as soon as you notice the wrong address; a change can’t be promised, but an early call gives it the most time.',
      },
      {
        q: 'Can the tracking email go to the person receiving the eye drops?',
        a: 'The confirmation and shipping emails go to the email address entered at checkout. If you’re ordering for someone else, forward the shipping email or text them the tracking number.',
      },
      {
        q: 'Can I ship eye drops to someone who is moving abroad?',
        a: 'No. Quell ships only to addresses in the United States, so the bottle needs to reach them before they leave or go with them in their luggage.',
      },
    ],
  },

  {
    slug: 'box-arrived-crushed-but-bottles-look-fine',
    title: 'Box arrived crushed but the bottles look fine?',
    description:
      'A crushed shipping box doesn’t always mean damaged eye drops. What to check on each bottle, when an order is replaced, and who to call first.',
    category: 'returns',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Check every bottle before deciding anything: look for cracks, leaks, a wet or stained carton and an intact tamper seal. If a bottle or seal is damaged, our terms say the order is replaced at no charge when you contact us within {returnDays} days. If only the outer shipping box took the hit and every bottle is sealed and whole, call {phone} and talk it through before you use them.`,
      },
      { h: 'Check in this order' },
      {
        list: [
          `Before unpacking, take a quick photo of the shipping box from a couple of angles. It isn’t required, but it makes the damage easy to describe later.`,
          `Open the box and look at each retail carton. Dents are common; dampness, stains or a sticky feel are not, and they can point to a leak.`,
          `Take each bottle out and look it over in good light. Check the body and the tip for cracks, and look for dried residue around the cap.`,
          `Check the tamper seal on every bottle. It should be whole, with no tears or gaps.`,
          `Look at the solution through the bottle. The label describes it this way: {milky}.`,
          `Count the bottles against your confirmation email, since a crushed box sometimes spills its contents.`,
        ],
      },
      {
        p: `The color point is worth a sentence of its own. The label says: {doNotUse}. A bottle that looks noticeably different from the description, or from its companions in the same order, should be set aside whatever the box looks like.`,
      },
      { h: 'When the order counts as damaged' },
      {
        p: `Section 7 of our [terms](/terms) covers this plainly: if your order arrives damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days and it will be replaced at no charge. A cracked bottle, a leak, a broken seal or a missing bottle all fall clearly inside that. So does a carton soaked through by a leaking neighbor. Don’t use a damaged bottle while you wait; the label’s hygiene rule, {tip}, exists to keep the solution clean, and a cracked bottle can’t be relied on to have stayed that way.`,
      },
      {
        p: `[What to do if your Quell order arrives damaged](/guides/damaged-order) walks through the call itself.`,
      },
      { h: 'When only the shipping box took the hit' },
      {
        p: `Shipping boxes exist to absorb knocks, and a crushed corner often means the box did its job. If every carton is dry, every bottle is whole, every seal is intact and the solution looks right, the product inside very likely came through fine. Still, you don’t have to make that judgment on your own. Call {phone} during {hours}, describe what you see, and decide together what makes sense. Whether that leads to a replacement depends on what’s actually damaged, so we won’t promise one here for a box alone.`,
      },
      { h: 'Can I still use the bottles?' },
      {
        p: `If a bottle’s seal is intact, it isn’t leaking or cracked, and the solution matches the label’s description, nothing in the terms or on the label says to throw it away because the outer box was crushed. Use it as the label directs: {directions}.`,
      },
      {
        p: `If anything about a bottle gives you pause, set it aside and call before opening it. Once a seal is broken by you, that bottle can no longer be refunded as unopened, so it’s worth asking first.`,
      },
      { h: 'If you’d rather not keep them' },
      {
        p: `There’s a second route that doesn’t depend on damage at all. Any unopened bottle can be refunded if you contact us within {returnDays} days of delivery, and you don’t send it back. In the words of the policy summary: {returns}. The refund covers the product price; original shipping isn’t refunded. So if a crushed box has simply left you uneasy, you can ask for a refund on the unopened bottles instead.`,
      },
      { h: 'What to have ready when you call' },
      {
        list: [
          `Your order number, from the confirmation email. [Where to find your order number](/guides/finding-your-order-number) helps if it’s buried.`,
          `How many bottles arrived and how many look affected.`,
          `What you saw: a crushed corner, a wet carton, a torn seal, a cracked tip.`,
          `Your photos, if you took any, in case they’re useful.`,
          `The delivery date, since the {returnDays}-day window counts from delivery.`,
        ],
      },
      {
        p: `The number is {phone}, and the line is staffed {hours}. If you’d rather write, the contact details are on the [About page](/about#contact).`,
      },
      { h: 'Don’t wait to open the package' },
      {
        p: `The {returnDays}-day window runs whether or not you’ve opened the box. If you order spares and set the package aside, a damaged bottle may only turn up weeks later, when the window is closing or closed. Open every order soon after it arrives and look at each bottle, even the ones you won’t use for a while.`,
      },
      { h: 'After the check: storing the bottles' },
      {
        p: `Once you know the bottles are sound, store them as the label says: {storage}. A crushed box sometimes means a rough trip, so if a package sat out on a very hot or very cold porch as well, [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) is worth a read.`,
      },
    ],
    faq: [
      {
        q: 'Should I use eye drops if the shipping box was crushed?',
        a: 'If the seal is intact, the bottle isn’t cracked or leaking and the solution matches the label’s description, the outer box alone isn’t a reason to discard it. If anything looks off, set it aside and call {phone} first.',
      },
      {
        q: 'What counts as a damaged eye drop order?',
        a: 'Quell’s terms replace an order at no charge if it arrives damaged, incorrect or with a broken tamper seal, when you contact us within {returnDays} days. Cracked or leaking bottles and broken seals are clear examples.',
      },
      {
        q: 'Can I get a refund instead of a replacement?',
        a: 'Damaged, incorrect or broken-seal orders are replaced. Separately, any unopened bottle can be refunded within {returnDays} days of delivery without sending it back; original shipping isn’t refunded.',
      },
    ],
  },

  {
    slug: 'what-does-continued-irritation-mean-on-eye-drops',
    title: 'What does “continued irritation” mean on eye drops?',
    description:
      'On an eye drop label, “continued irritation” means discomfort that doesn’t settle after use. What counts, how it differs from a brief sting, and what to do.',
    category: 'label',
    addedOn: '2026-11-22',
    body: [
      {
        p: `“Continued irritation” means discomfort that keeps going instead of settling: burning, stinging, grittiness or a scratchy feeling that persists while you’re using the drops. It’s one of the reasons a label tells you to stop. Quell’s reads: {stopUse} A quick sting as a drop lands is not the same thing.`,
      },
      { h: 'Where the phrase sits on the panel' },
      {
        p: `Quell’s carton carries a Drug Facts panel divided into labeled sections. The warning about continued irritation lives in the section headed “Stop use and ask a doctor if.” On Quell’s carton, that section lists several triggers together, and the sentence above gives all of them in the label’s own words. You can see the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `The word “irritation” also appears higher up, in the Uses section: {uses}. Those two mentions point in opposite directions. The Uses line describes what the product is for. The stop-use line describes what to do if, instead, the irritation carries on. [What “protectant against further irritation” means](/guides/what-does-protectant-mean-on-eye-drops) unpacks the first one.`,
      },
      { h: 'What counts as irritation' },
      {
        p: `Labels use the word broadly, and people describe it in many ways. Any of these could be what you’re feeling:`,
      },
      {
        list: [
          `Burning or stinging on the surface of the eye.`,
          `A gritty or sandy feeling, as if something small is under the lid.`,
          `Scratchiness when you blink.`,
          `Eyes that water a lot or feel raw.`,
          `A constant awareness of your eyes that you didn’t have before.`,
        ],
      },
      {
        p: `None of those is a label term by itself. The label doesn’t try to name every sensation; it asks you to notice whether irritation, however it shows up for you, keeps going.`,
      },
      { h: 'What “continued” adds' },
      {
        p: `The key word is the adjective. Plenty of people feel a brief sting the moment a drop goes in, especially if the eye was already dry or the drop was cold. That kind of sting fades within moments and isn’t what the warning is about. [Why do eye drops sting?](/guides/why-do-eye-drops-sting) covers that short-lived feeling.`,
      },
      {
        p: `Continued irritation is different in two ways. It lasts beyond the moment of putting the drop in, and it doesn’t get better over the following days of use. If your eyes feel the same or worse while you keep using a drop, the label is asking you to stop rather than push on.`,
      },
      { h: 'How it fits with the 72-hour line' },
      {
        p: `The stop-use section also mentions a time frame: when the condition worsens or persists for 72 hours. Read together, the two lines cover irritation that carries on and dryness that doesn’t improve over about three days. They aren’t a waiting period, though. Pain and changes in vision appear in the same sentence, and those are reasons to stop and call right away, without counting days. [Why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) goes further.`,
      },
      { h: 'What to do when you stop' },
      {
        list: [
          `Stop using the drops. Don’t switch to a different bottle of the same product to see if that one is better.`,
          `Write down what you felt, when it started, whether it’s one eye or both, and whether it changes during the day.`,
          `Keep the carton. It lists the active and inactive ingredients, which an eye doctor or pharmacist may want to see.`,
          `Call an eye doctor and describe what’s happening. Bring the carton if you go in.`,
          `If you used any other eye products at the same time, tell the doctor about those too.`,
        ],
      },
      {
        p: `You don’t have to know whether the drop, the air, a screen or something else is behind it. Sorting that out is the eye doctor’s job, and they can find the cause and decide what to do.`,
      },
      { h: 'Irritation from the room versus from the drop' },
      {
        p: `People sometimes ask how to tell whether ongoing irritation comes from dry air or from the drops themselves. On your own, you often can’t, and the label doesn’t ask you to work it out. It handles both the same way: if irritation continues, stop and ask a doctor. That keeps the decision simple when you’re uncomfortable and unsure.`,
      },
      {
        p: `One label line is worth checking before you even start: {warnings}. Quell contains emu oil, so anyone with an egg or bird allergy should read [this guide](/guides/egg-or-bird-allergy-and-quell) before trying it.`,
      },
      { h: 'Reading the rest of the panel in the same spirit' },
      {
        p: `The stop-use section isn’t the only safety line on the carton. The panel also says: {doNotUse}. And for accidental swallowing: {swallowed}. Each line is short because each one is meant to be acted on, not interpreted. [How to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through every section in order.`,
      },
    ],
    faq: [
      {
        q: 'What does continued irritation mean on an eye drop label?',
        a: 'It means discomfort such as burning, stinging, grittiness or scratchiness that keeps going rather than settling while you use the drops. The label lists it as a reason to stop use and ask a doctor.',
      },
      {
        q: 'Is a little stinging when eye drops go in a reason to stop?',
        a: 'A brief sting that fades within moments is common and isn’t what the continued irritation warning describes. Stinging or burning that lasts, gets worse or comes with pain is a reason to stop and call an eye doctor.',
      },
      {
        q: 'What should I do if eye drops keep irritating my eyes?',
        a: 'Stop using them, note what you felt and when, keep the carton, and call an eye doctor. Quell’s label says to stop use and ask a doctor if irritation continues.',
      },
    ],
  },

  {
    slug: 'do-blue-light-glasses-help-dry-eyes',
    title: 'Do blue light glasses help dry eyes?',
    description:
      'Blue light glasses filter part of a screen’s light; they don’t add moisture or make you blink more. What actually dries eyes at a screen, and what helps.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Blue light glasses are designed to filter part of the light a screen gives off. They don’t add moisture to the eye, and they don’t make you blink more, which are the two things that matter most for dry eyes at a screen: people blink less while they concentrate, and dry or moving air speeds evaporation. Blinking habits, room air and a lubricating drop speak to that; an eye doctor can advise on glasses.`,
      },
      { h: 'What blue light glasses are designed to do' },
      {
        p: `Blue light glasses use a tint or a coating meant to reduce how much blue-wavelength light passes through the lens. They’re sold with and without a prescription, and they’re usually marketed for comfort during long screen sessions. Quell doesn’t make or sell glasses, and this guide doesn’t rate them. It sets out what is known on this site about why eyes feel dry at a screen, so you can decide where glasses fit.`,
      },
      { h: 'Why screens leave your eyes feeling dry' },
      {
        p: `The tear film has three layers: an outer oil layer that slows evaporation, a watery middle and a mucus layer against the eye. Blinking spreads a fresh coat across the surface each time. When you focus on a screen, you blink less often, so the film has longer to thin between blinks. Air from a heating vent, an air conditioner or a desk fan speeds that up. The result can be eyes that feel dry, gritty or worn out by late afternoon. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the mechanics.`,
      },
      {
        p: `Notice what’s missing from that chain: the color of the light. The drying parts of screen time are the reduced blinking and the air around you. A lens that changes the light doesn’t change either one.`,
      },
      { h: 'Can blue light glasses cause dry eyes?' },
      {
        p: `The glasses themselves don’t pull moisture from the eye. What people sometimes notice with any new pair is that their eyes feel tired or uncomfortable, and the reasons are usually practical: a prescription that isn’t quite right, frames that sit at an odd angle, or lenses that collect smudges and glare. If a new pair of glasses of any kind leaves your eyes uncomfortable, have an eye doctor or optician check the prescription and fit.`,
      },
      { h: 'What glasses of any kind can do' },
      {
        p: `There is one way glasses can help dry eyes, and it has nothing to do with blue light: they block some of the air moving toward your eyes. A larger lens or a wraparound frame shields the eye from a vent or a breeze better than a small, flat lens does. That’s why wraparound sunglasses help outdoors in the wind. [Eye drops vs. glasses for dry eyes](/guides/eye-drops-vs-glasses-for-dry-eyes) compares the two approaches.`,
      },
      { h: 'A screen setup that does more for dry eyes' },
      {
        list: [
          `Follow the 20-20-20 habit: every 20 minutes, look at something about 20 feet away for 20 seconds, and blink fully while you do.`,
          `Set the top of the monitor at or slightly below eye level, so your lids cover more of the eye while you read.`,
          `Turn or block any vent, fan or space heater that blows across your face.`,
          `Run a humidifier near the desk in winter if the room is dry.`,
          `Make complete blinks a habit, closing the lids all the way each time.`,
          `Step away from the screen for a few minutes each hour.`,
        ],
      },
      {
        p: `Each of those works on the blinking or the air, which is where screen dryness comes from. [How often should I take a break from screens?](/guides/how-often-should-i-take-a-break-from-screens) has more on spacing breaks.`,
      },
      { h: 'Blue light glasses or eye drops?' },
      {
        p: `They aren’t really alternatives, because they’re aimed at different things. Glasses change the light reaching your eye. A lubricating drop adds to the tear film. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Drug Facts panel describes it this way: {uses}. The directions are: {directions}.`,
      },
      {
        p: `If you wear glasses of any kind, putting in a drop is simple: take them off, use the drop, and give your eyes a moment before putting them back on. [Can you use eye drops if you wear glasses?](/guides/can-you-use-eye-drops-if-you-wear-glasses) covers the details. Before a first bottle of Quell, read this caution: {warnings}.`,
      },
      { h: 'When to ask an eye doctor instead' },
      {
        p: `If screen work leaves you with blurred vision that doesn’t clear when you blink, eye pain, or eyes that feel worse week after week, that’s for an eye doctor rather than a new pair of glasses or another bottle. The same goes for any change in your vision. An eye doctor can find the cause and decide what to do, including whether any type of computer glasses makes sense for you. Quell’s label also says: {stopUse}`,
      },
      { h: 'Questions to bring to an eye exam' },
      {
        list: [
          `Is my current prescription right for the distance I sit from my screen?`,
          `Would a separate pair of computer glasses help with how I work?`,
          `What can I change in my workspace for dry eyes?`,
          `Is a lubricating eye drop reasonable for me, and how should I use it alongside anything else you recommend?`,
        ],
      },
      {
        p: `[Questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) has a longer list to take along.`,
      },
    ],
    faq: [
      {
        q: 'Can blue light glasses cause dry eyes?',
        a: 'The glasses don’t pull moisture from the eye. If any new pair leaves your eyes uncomfortable, the prescription or fit may be off, so have an eye doctor or optician check them.',
      },
      {
        q: 'Should I use blue light glasses or eye drops for screen dryness?',
        a: 'They do different jobs. Blue light glasses change the light reaching your eye, while a lubricating drop adds to the tear film. For dryness at a screen, blinking habits, room air and a drop used as labeled speak more directly to the cause.',
      },
      {
        q: 'Do computer glasses help with dry eyes?',
        a: 'Glasses don’t add moisture, but larger or wraparound frames can block some of the air blowing toward your eyes. Whether a separate computer prescription would help is a question for an eye doctor.',
      },
    ],
  },

  {
    slug: 'should-you-keep-eye-drops-in-the-bathroom',
    title: 'Should you keep eye drops in the bathroom?',
    description:
      'A bathroom can work for eye drops if it stays within the label’s storage range and the bottle stays clean and dry. Where it goes wrong, and better spots.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `You can, as long as the room stays within the label’s storage range and the bottle stays clean and dry. Quell’s label says: {storage}. A bathroom that heats up with long hot showers, sits next to a sunny window or turns cold in winter can drift outside that range, and splashes near the sink put the tip at risk. A cool, dry drawer or shelf in another room is often the easier choice.`,
      },
      { h: 'What the label actually asks for' },
      {
        p: `Two lines on the Drug Facts panel decide where a bottle belongs. The first is the storage range above, given in both Celsius and Fahrenheit. The second is a hygiene rule: {tip}. Neither line names a room. They describe conditions, and any spot in the house that meets them is fine. The question is whether your bathroom does.`,
      },
      { h: 'Why bathrooms are tricky for eye drops' },
      {
        list: [
          `Heat: a long hot shower warms a small, closed room quickly, and a cabinet right next to the shower gets the brunt of it.`,
          `Steam: moisture settles on every surface, including the bottle and its cap, and drips down into a drawer or cabinet.`,
          `Splashes: the area around the sink gets wet from handwashing, toothbrushing and shaving, and a bottle left on the counter catches it.`,
          `Clutter: bathroom counters hold toothbrushes, razors, makeup brushes and cotton pads, all things you don’t want touching a dropper tip.`,
          `Cold: a bathroom on an outside wall, or one with a window cracked for ventilation, can get chilly on a winter night.`,
        ],
      },
      {
        p: `None of these is a problem every day in every home. They add up, though, and they’re why many people move their eye drops out of the bathroom once they think about it.`,
      },
      { h: 'Is the medicine cabinet any better?' },
      {
        p: `A medicine cabinet keeps the bottle off a wet counter and out of the way of brushes and razors, which helps with the hygiene side. It doesn’t help with temperature. A cabinet mounted beside or above a shower can be one of the warmest, steamiest spots in the house while the water runs. If you use it, pick the shelf farthest from the shower, keep the cap tightly closed, and wipe the bottle dry if it’s damp.`,
      },
      { h: 'How to check whether your bathroom stays in range' },
      {
        p: `If you want the bottle in the bathroom, a cheap indoor thermometer settles the question. Leave one on the shelf where the bottle would live for a few days, and look at it right after the longest shower in the house and on the coldest morning of the week. If the reading stays inside the range on the label, the room works. If it climbs above or drops below it, find another spot.`,
      },
      { h: 'Better places for everyday eye drops' },
      {
        list: [
          `A bedroom dresser drawer, away from a heating vent or radiator.`,
          `A kitchen cabinet that isn’t above the stove, the toaster or the dishwasher vent.`,
          `A desk drawer in a home office, which also puts the bottle where you use your eyes hardest.`,
          `A small lidded box or pouch on a hallway shelf, out of direct sun.`,
        ],
      },
      {
        p: `Wherever you settle, keep the bottle out of sunny windowsills and away from anything that runs hot. [Carrying eye drops in a purse or pocket](/guides/carrying-eye-drops-in-a-purse-or-pocket) covers the bottle you take out of the house.`,
      },
      { h: 'If you use your drops in the bathroom anyway' },
      {
        p: `Plenty of people like to put in eye drops at the bathroom mirror, because the light is good and the mirror helps them aim. That’s fine. Storing the bottle somewhere else and bringing it in when you need it gets you the mirror without the steam. A few habits help:`,
      },
      {
        list: [
          `Wash and dry your hands first, and make sure the counter you set the cap on is dry and clean.`,
          `Put the cap on a clean tissue, top side down, rather than on a wet sink edge.`,
          `Don’t let the tip touch your eye, your lashes, your fingers or the counter.`,
          `Recap the bottle right after use and take it back out with you.`,
          `If you shower first, wait until the steam has cleared from the mirror before you put drops in.`,
        ],
      },
      {
        p: `[Eye drops before or after a shower?](/guides/eye-drops-before-or-after-a-shower) has more on timing drops around a shower.`,
      },
      { h: 'Bathrooms on the road' },
      {
        p: `Hotel and guest bathrooms raise the same questions, with one more: they’re often where you set things down while you unpack, and a bottle on a hotel counter is easy to leave behind. Keep it in your toiletry bag between uses, zipped, so it stays clean and comes home with you. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) covers the rest of the room.`,
      },
      { h: 'When a bottle has been stored badly' },
      {
        p: `If a bottle sat somewhere hot or cold for a long stretch, look at it before using it. The label describes the solution this way: {milky}. It also says: {doNotUse}. If it looks different from usual, set it aside and ask a pharmacist. And if your eyes feel worse after using it, the label is clear: {stopUse}`,
      },
      {
        p: `One more line belongs in any storage decision: {swallowed} Store the bottle where nobody will mistake it for something else. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can steam from the shower affect eye drops?',
        a: 'Steam warms a small bathroom and leaves moisture on the bottle and cap. Quell’s label gives a storage range of {storage}, so a cabinet next to a hot shower may not be a good spot.',
      },
      {
        q: 'Is a medicine cabinet a good place to store eye drops?',
        a: 'It keeps the bottle off a wet counter, but a cabinet beside a shower can get warm and steamy. Pick the shelf farthest from the shower, or keep the bottle in a cooler, drier room.',
      },
      {
        q: 'Where should I keep my eye drops at home?',
        a: 'Anywhere that stays within the label’s storage range and keeps the bottle clean and dry: a dresser drawer, a desk drawer or a kitchen cabinet away from the stove all work.',
      },
    ],
  },

  {
    slug: 'keeping-eye-drops-on-your-nightstand',
    title: 'Keeping eye drops on your nightstand',
    description:
      'A nightstand is a handy spot for eye drops if it’s away from heaters, sun and clutter. How to set it up, and how to use drops at night without fumbling.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A nightstand is a fine place for eye drops if the spot stays within the label’s storage range and the bottle stays clean. Quell’s label says: {storage}. Keep it away from a radiator, a space heater, a sunny window and a hot lamp base, park it in a small dish or drawer so the cap doesn’t roll away, and switch on a light before you use it.`,
      },
      { h: 'Why the nightstand makes sense' },
      {
        p: `People who use eye drops before bed, or who wake with dry, sticky eyes, want the bottle within reach. A nightstand puts it there. It also makes the bottle part of a routine you already have, next to your glasses, your phone and your book, which is one of the simplest ways to remember it. [How to remember to use eye drops](/guides/how-to-remember-to-use-eye-drops) has more on building habits around a dose.`,
      },
      { h: 'Check what’s around the nightstand' },
      {
        p: `A bedroom often has more heat sources than people notice. Before the bottle settles in, look at what’s nearby:`,
      },
      {
        list: [
          `A radiator, baseboard heater or floor register beside the bed. The warm air rising off it can push the nightstand top past the label’s range in winter.`,
          `A space heater aimed at the bed. Move the bottle well out of its path.`,
          `A window. Afternoon sun on a nightstand can heat a small bottle quickly in summer, and the same spot can turn cold on a winter night.`,
          `A lamp. Some bulbs and lamp bases run warm; don’t keep the bottle pressed against one.`,
          `A charging phone or tablet. They get warm while charging, so give the bottle a little space.`,
        ],
      },
      {
        p: `A drawer solves most of this. It shields the bottle from sun and keeps it out of direct airflow, while leaving it within arm’s reach.`,
      },
      { h: 'Keeping the bottle and cap clean' },
      {
        p: `The label’s hygiene rule reads: {tip}. A nightstand top collects dust, hand lotion, lip balm and whatever falls out of your pockets, and a cap set down on it in the dark can land anywhere. A small ceramic dish, a clean jar lid or a lidded box gives the bottle its own spot. When you open it, set the cap top-down on a clean tissue rather than on the nightstand itself.`,
      },
      { h: 'Using eye drops at night without fumbling' },
      {
        list: [
          `Turn on a lamp. Putting in drops in the dark makes it much easier to touch the tip to your eye or lashes.`,
          `Sit up rather than lying flat, at least until you get used to it.`,
          `Wash your hands first if you can, or at least make sure they’re clean and dry.`,
          `Tilt your head back, pull the lower lid down gently and let one drop fall into the pocket.`,
          `Close your eyes for a moment, recap the bottle and put it back in its dish.`,
        ],
      },
      {
        p: `The directions on the label are: {directions}. If one of those three doses lands at bedtime, the nightstand is where it happens. [Can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed) talks through evening timing.`,
      },
      { h: 'Waking in the night with dry eyes' },
      {
        p: `If your eyes wake you up in the night, the bottle on the nightstand is tempting. Before you use it, think about why they feel dry. A fan blowing across the bed, a heating vent near the pillow, or a room that’s very warm and dry can all leave eyes uncomfortable by 3 a.m. Changing the room may help more than a drop. [Dry eyes in the middle of the night](/guides/dry-eyes-in-the-middle-of-the-night) looks at the common reasons. Stick to the label’s directions, and if waking with sore eyes becomes a pattern, mention it to an eye doctor.`,
      },
      { h: 'Glasses, cases and other things on the nightstand' },
      {
        p: `If you wear glasses, the nightstand probably holds them too. Take them off before putting in drops and give your eyes a moment before putting them back on, so the lenses don’t smear. If you use any other eye products, keep them clearly apart so you don’t grab the wrong bottle half-asleep. Quell’s label doesn’t give directions for use with other drops, so ask your pharmacist or eye doctor how to space them.`,
      },
      { h: 'Shared bedrooms and guests' },
      {
        p: `If you share a nightstand, a labeled dish or a drawer of your own keeps your bottle from being moved or used by someone else. Eye drop bottles are personal: one person’s dropper tip shouldn’t touch another person’s eye. And if you have houseguests or you’re staying somewhere else, take the bottle with you rather than leaving it on a guest-room table.`,
      },
      {
        p: `Keep the swallowing line in mind too: {swallowed} A nightstand that a curious visitor can reach is a reason to choose a drawer over the top.`,
      },
      { h: 'Before you settle on a spot' },
      {
        p: `Read the caution on the panel before a first bottle: {warnings}. Check the solution looks the way the label describes it, {milky}, and remember the color rule: {doNotUse}. The complete panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is it OK to keep eye drops next to my bed?',
        a: 'Yes, if the spot stays within the label’s storage range and away from a heater, a sunny window or a hot lamp. Quell’s label says: {storage}.',
      },
      {
        q: 'Can you put in eye drops with the lights off?',
        a: 'It’s easier not to. Turn on a lamp, sit up, and make sure the tip doesn’t touch your eye, lashes or fingers. Recap the bottle right away.',
      },
      {
        q: 'Should eye drops go in a drawer or on top of the nightstand?',
        a: 'A drawer shields the bottle from sun and warm air and keeps the cap from rolling away. If you prefer the top, give the bottle a small dish of its own.',
      },
    ],
  },

  {
    slug: 'putting-in-eye-drops-with-gloves-on-in-the-cold',
    title: 'Putting in eye drops with gloves on in the cold',
    description:
      'Gloves make eye drops awkward and can dirty the tip. When to take one off, how to keep the bottle warm enough, and how to use drops outside in winter.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Take one glove off. A gloved hand can’t feel how hard it’s squeezing, and the glove itself may carry dirt, salt or fibers right next to the dropper tip. Pull off the glove on the hand that holds the bottle, keep the other on to steady your face, turn your back to the wind, and put in one drop as the label directs. Then recap and glove up again.`,
      },
      { h: 'Why gloves and eye drops don’t mix' },
      {
        list: [
          `Feel: thick gloves and mittens dull your sense of how hard you’re pressing, so it’s easy to squeeze out two or three drops instead of one.`,
          `Grip: a small bottle slides in a smooth or wet glove and can drop into snow or slush.`,
          `Cleanliness: gloves pick up road salt, snow, dirt from a car door, lint and whatever was on the shovel handle. All of it ends up close to the tip.`,
          `Fibers: wool and fleece shed, and stray fibers near the eye are irritating.`,
        ],
      },
      {
        p: `Quell’s label has a hygiene rule that matters here: {tip}. A glove is one more surface the tip can brush against.`,
      },
      { h: 'Step by step: eye drops outside in the cold' },
      {
        list: [
          `Find shelter from the wind if you can: inside a car, a doorway, the lee side of a building or a parked truck.`,
          `Take the bottle from an inside pocket, where body heat has kept it warmer.`,
          `Pull off the glove on the hand that holds the bottle. If your hands are dirty, wipe them on a clean cloth or use hand sanitizer and wait until it has dried completely.`,
          `Keep the other glove on and rest that hand lightly on your cheekbone to steady things.`,
          `Tilt your head back, pull the lower lid down with a bare finger, and let one drop fall into the pocket.`,
          `Close your eyes for a moment. Recap the bottle, put it back in the inside pocket, and pull your glove back on.`,
        ],
      },
      {
        p: `The directions on the label are: {directions}. Being outdoors doesn’t change that, so there’s no need for extra drops because it’s cold.`,
      },
      { h: 'Thin liner gloves and touchscreen gloves' },
      {
        p: `Some people try to work around the problem with thin liner gloves or touchscreen gloves, which keep more feeling in the fingertips. They help with grip and feel compared with heavy gloves, but they still pick up dirt and lint, and they still sit next to the tip. If you wear liners under heavier gloves, take off the outer glove and the liner on the bottle hand. Clean bare skin is the simplest way to keep the tip clean.`,
      },
      { h: 'Keeping the bottle in range' },
      {
        p: `Cold is a concern for the bottle as well as for your hands. The storage line reads: {storage}. On a winter day, a bottle in an outer pocket, a backpack side pouch or a car door can drop below that range. An inside chest pocket, close to your body, is the warmest place you’re likely to have. If a bottle has been left somewhere very cold, look at it before you use it; the label describes the solution as {milky}, and says: {doNotUse}. [Eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers more on temperature.`,
      },
      { h: 'Why your eyes water in the cold, then feel dry' },
      {
        p: `Cold wind tends to make eyes water, which can seem strange for someone with dry eyes. Moving air speeds evaporation from the tear film, and the eye responds with a flood of watery tears that don’t stay put. Once you go back indoors into heated air, the eyes can feel dry and gritty. Wraparound glasses or goggles cut the wind and the watering together. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) goes further.`,
      },
      { h: 'Wait for steady hands' },
      {
        p: `Cold fingers shake. If your hands are numb or trembling, it’s often easier to step inside for a few minutes and warm up first. Rubbing your hands together, holding them under your arms, or sitting in a warmed car for a moment makes the drop easier to aim. [Using eye drops with shaky hands](/guides/eye-drops-with-shaky-hands) has more tricks for steadying the bottle.`,
      },
      { h: 'Who this comes up for' },
      {
        list: [
          `Outdoor workers: delivery drivers, road crews, utility workers and anyone on a job site through the winter.`,
          `Winter sports: skiers, snowshoers, ice anglers and skaters.`,
          `Everyday chores: shoveling, scraping a windshield, walking the dog.`,
          `Spectators: people in the stands at outdoor games or waiting on a parade route.`,
        ],
      },
      {
        p: `For all of them, the order is the same: shelter, one bare clean hand, one drop, recap, glove back on.`,
      },
      { h: 'What the label covers and what it doesn’t' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. It doesn’t give directions for contact lens wearers, so if you wear contacts outdoors in winter, ask your eye doctor. Read the caution before a first bottle: {warnings}. And the stop-use line: {stopUse} The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can I put in eye drops with gloves on?',
        a: 'It’s better to take off the glove on the hand that holds the bottle. Gloves dull your feel, so it’s easy to squeeze out too much, and they can carry dirt or fibers close to the dropper tip.',
      },
      {
        q: 'Do touchscreen gloves work for putting in eye drops?',
        a: 'They give better grip and feel than heavy gloves, but they still pick up dirt and lint near the tip. Clean bare skin on the bottle hand is the simplest way to keep the tip clean.',
      },
      {
        q: 'Where should I keep eye drops in winter when I’m outside?',
        a: 'In an inside chest pocket, close to your body. Quell’s label gives a storage range of {storage}, and outer pockets or a car door can fall below it in winter.',
      },
    ],
  },

  {
    slug: 'dry-eyes-under-ski-goggles',
    title: 'Dry eyes under ski goggles',
    description:
      'Goggles block wind and glare, yet eyes can still feel dry on the slopes. How fit, vents, fogging and breath affect your eyes, and when to use drops.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Ski goggles block most of the wind and glare, but your eyes can still feel dry under them. Gaps at the edges let cold air stream in, vents move air across the eye, and fogged lenses tempt you to push the goggles up, which leaves your eyes bare in the wind. A snug fit, a face mask that sends your breath down, and drops used in the lodge as the label directs all help.`,
      },
      { h: 'Why eyes still dry out under goggles' },
      {
        p: `Goggles do a lot. They stop most of the wind at speed, keep snow out, and cut the glare off a white slope. Yet many skiers end the day with eyes that feel gritty, scratchy or tired. Several things can be going on at once:`,
      },
      {
        list: [
          `Air leaking around the edges of goggles that don’t seal against your face.`,
          `Vents that are doing their job of moving air to stop fog, and moving some of it across your eyes.`,
          `Goggles pushed up onto the helmet on the lift or in line, which leaves your eyes bare in cold wind.`,
          `Long stretches of focusing hard on the terrain ahead, which tends to cut down on blinking.`,
          `Hours in a heated lodge, car or condo afterward, where the air is warm and dry.`,
        ],
      },
      { h: 'Fit: the seal against your face' },
      {
        p: `Goggles do their job only when the foam sits evenly against your face all the way around. A gap at the cheekbones or the bridge of the nose lets a stream of cold air shoot straight at your eye once you’re moving. When you try goggles on, wear the helmet you ski in, since the two have to fit together. Look for a gap between the top of the goggles and the helmet’s brim too; that gap lets cold air hit your forehead and can push the goggles out of position.`,
      },
      {
        list: [
          `Run a fingertip around the foam while wearing them. You should feel even contact, without spots of pressure or air.`,
          `Check the strap. A loose strap lets the goggles shift on bumps, opening gaps.`,
          `If you wear glasses, look for goggles made to fit over them, so the frame doesn’t hold the foam away from your face.`,
          `Replace goggles whose foam has gone flat or started to peel.`,
        ],
      },
      { h: 'Vents and fogging' },
      {
        p: `Goggle vents let warm, moist air escape so the lens doesn’t fog. That airflow is a trade-off for dry eyes: more ventilation keeps the lens clear but moves more air past the eye. If your goggles have adjustable vents, try closing them partway on very cold, windy days, and open them on warmer days or when you’re working hard and sweating.`,
      },
      {
        p: `Fog is the bigger enemy for most skiers, because it’s the main reason goggles end up on the helmet. A few habits keep lenses clearer:`,
      },
      {
        list: [
          `Don’t wipe the inside of the lens with a glove; many lenses have an anti-fog coating that rubbing can damage.`,
          `Keep goggles on your face or in their case rather than on your forehead, where they collect heat and sweat.`,
          `Keep moving; on many goggles, airflow through the vents is what clears the fog.`,
          `Carry a spare lens or a spare pair for storm days if you tend to fog up.`,
        ],
      },
      { h: 'Breath and face masks' },
      {
        p: `A face mask, balaclava or neck gaiter keeps your face warm, but it can also send warm, wet breath straight up under the goggles. That’s a common cause of fog, and fog leads to goggles on the helmet. Pull the mask up only to your nose, not over the bottom of the foam, and look for masks with a breathable panel or a shape that directs breath downward.`,
      },
      { h: 'On the lift and in line' },
      {
        p: `Chairlifts are where many skiers lift their goggles, to see better, clear fog or talk. The lift ride is also often the windiest, coldest part of the day, with nothing to block the breeze. If you need to clear the lens, do it quickly and put the goggles back down. Keep a second pair of glasses or sunglasses for the lodge so you aren’t tempted to ride the lift barefaced.`,
      },
      { h: 'Using eye drops on a ski day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses: {uses}. The directions are: {directions}. On a ski day, that might mean a drop at breakfast, one at lunch in the lodge and one back at home. The label doesn’t call for extra drops in the cold.`,
      },
      {
        list: [
          `Put drops in indoors, with clean, bare hands and steady fingers, not on a chairlift.`,
          `Keep the bottle in an inside chest pocket, not in a pack or an outer pocket. The label’s storage line reads: {storage}.`,
          `Take off your goggles, use the drop, close your eyes for a moment, then put the goggles back on.`,
          `Don’t let the tip touch your eye, your fingers or your gloves. The label says: {tip}.`,
        ],
      },
      { h: 'Après-ski: the lodge and the drive home' },
      {
        p: `The hours after skiing can be harder on your eyes than the slopes. A heated lodge, a fireplace, a car heater on the drive home and a warm condo all dry the air. Sit away from the fireplace and heating vents, aim the car vents at your chest, and run a humidifier in the bedroom if you’re staying a few nights. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers the wider trip, and [Christmas gifts for a skier](/guides/christmas-gifts-for-a-skier) has ideas if someone on your list hits the slopes.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes hurt after a day on the snow, if your vision changes, if light is painful, or if irritation lasts beyond the trip, see an eye doctor, who can find the cause and decide what to do. The label lists when to stop: {stopUse} Before a first bottle, read the caution: {warnings}. More is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry even with ski goggles on?',
        a: 'Air can leak around goggles that don’t seal against your face, vents move air past the eyes, and goggles pushed up on the lift leave your eyes bare in the wind. A snug fit and keeping them on helps.',
      },
      {
        q: 'Should ski goggle vents be open or closed?',
        a: 'More ventilation keeps lenses clearer but moves more air past your eyes. On very cold, windy days, try closing adjustable vents partway; open them when it’s warmer or you’re working hard.',
      },
      {
        q: 'Does a face mask make ski goggles fog?',
        a: 'It can, if it sends warm breath up under the goggles. Pull the mask only to your nose and choose one with a breathable panel or a shape that directs breath downward.',
      },
      {
        q: 'When should I use eye drops on a ski trip?',
        a: 'Indoors, with clean bare hands, following the label’s directions: {directions}. Keep the bottle in an inside pocket so it stays within the storage range.',
      },
    ],
  },

  {
    slug: 'driving-to-see-christmas-lights-with-dry-eyes',
    title: 'Driving to see Christmas lights with dry eyes',
    description:
      'A slow drive past holiday displays means a heater blowing, bright lights and a long stare. How to set the car up and plan a route that’s easier on dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A slow drive past Christmas lights dries the eyes in three ways: the heater blows warm, dry air for an hour or more, bright displays and headlights invite a long, unblinking stare, and cold air rushes in every time a window comes down. Aim the vents low, use fresh air, plan short stops to get out and walk, and let a passenger handle the looking while the driver drives.`,
      },
      { h: 'Why a lights drive is hard on dry eyes' },
      {
        p: `A neighborhood lights tour isn’t like a normal drive. You crawl along at walking pace, sometimes for an hour or more, with the heater running the whole time because it’s a December evening. You’re looking at displays packed with bright points of light, then at the dark road, then at a car’s brake lights a few feet ahead. And people tend to stare at something beautiful without blinking much. Each of those pulls moisture from the tear film, and together they can leave eyes stinging by the time you get home.`,
      },
      { h: 'Set up the car before you go' },
      {
        list: [
          `Once the windshield is clear, switch the airflow from defrost to the floor or lower vents. Defrost air bounces off the glass toward your face.`,
          `Point the dash vents at your chest or away from you, not at your eyes.`,
          `Use the fresh-air setting rather than recirculate for part of the drive; recirculated air keeps drying out.`,
          `Turn the temperature down a notch once everyone is warm. Bundled-up passengers don’t need a blasting heater.`,
          `Clean the inside of the windshield and your glasses. Smudges scatter light and make bright displays harder to look at.`,
        ],
      },
      {
        p: `[Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has more on car settings.`,
      },
      { h: 'Windows down for the view' },
      {
        p: `Half the fun is rolling the window down to hear the music or take a photo without glare on the glass. On a cold night, that brings a blast of frigid air across your face, followed by more hot air from the heater as it tries to catch up. If your eyes are dry, keep windows-down moments short, let the passenger side do it, and turn your face away from the incoming air. A clear pair of glasses blocks some of the cold rush as well.`,
      },
      { h: 'Who drives, who looks' },
      {
        p: `The driver has the hardest job for dry eyes: watching the road, the pedestrians and the car ahead, while bright displays compete for attention on both sides. If you have a choice, let the person whose eyes are most comfortable drive, and let the person with dry eyes ride as a passenger, where they can look away, close their eyes for a moment, or put in a drop. A driver should never use eye drops while the car is moving; pull over and park first, since vision can blur briefly after a drop.`,
      },
      { h: 'Plan a route with breaks' },
      {
        list: [
          `Pick a route that takes 30 to 45 minutes rather than two hours, or split a long tour into two nights.`,
          `Choose one or two streets where you can park and walk a block. Stepping out of the car gets you out of the heater’s airflow and gives your eyes a change of focus.`,
          `Turn off the engine for a few minutes at a stop if you can do so safely, which gives the cabin air a rest.`,
          `Bring a thermos of something warm instead of turning the heater up.`,
        ],
      },
      { h: 'Bright displays and oncoming headlights' },
      {
        p: `Big displays with thousands of lights, flashing patterns or bright white bulbs make many people squint, and squinting with dry eyes is uncomfortable. Oncoming headlights on a dark street add glare. Look at displays in short glances rather than long stares, and blink fully and deliberately now and then. The driver should keep eyes on the road and look at displays only when the car is stopped. If glare at night bothers you a lot, or seems to be getting worse year to year, that’s worth mentioning to an eye doctor. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers glare on the road.`,
      },
      { h: 'Walk-through and drive-through shows' },
      {
        p: `Organized light shows are a different outing from a neighborhood drive: a ticketed drive-through route or a walk-through park display. [Dry eyes at a holiday light show](/guides/dry-eyes-at-a-holiday-light-show) covers those. This guide is about the do-it-yourself version: your own car, your own route, and the streets in your town that go all out every year.`,
      },
      { h: 'Bringing eye drops along' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses are: {uses}. Directions: {directions}. If one of your doses falls in the evening, it can happen in the car, as long as the car is parked.`,
      },
      {
        list: [
          `Carry the bottle in a coat pocket rather than the glove box. The storage line reads: {storage}, and a car left parked on a cold December night can drop below that.`,
          `Use clean hands. Wipe them before you handle the bottle if you’ve been eating snacks in the car.`,
          `Turn on the dome light so you can see the tip and avoid touching it. The label says: {tip}.`,
        ],
      },
      { h: 'When it’s more than dry air' },
      {
        p: `If your eyes hurt, your vision changes or blurs and doesn’t clear, or lights start to look different than they used to, see an eye doctor, who can find the cause and decide what to do. The label is clear about when to stop: {stopUse} Before a first bottle, read the caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How do I keep my eyes from drying out when driving around to see Christmas lights?',
        a: 'Switch the airflow off defrost once the glass clears, point vents away from your face, use fresh air, keep windows-down moments short, and park for a short walk partway through the route.',
      },
      {
        q: 'Should the driver or a passenger use eye drops on a lights drive?',
        a: 'Either can, but a driver should pull over and park first, since vision can blur briefly after a drop. A passenger can use a drop at any point, following the label’s directions.',
      },
      {
        q: 'How long should a Christmas lights drive be if my eyes get dry?',
        a: 'Shorter is easier: a 30 to 45 minute route, or a long tour split over two nights, with a stop or two to get out and walk.',
      },
    ],
  },

  {
    slug: 'do-eye-drops-help-with-floaters',
    title: 'Do eye drops help with floaters?',
    description:
      'Lubricating eye drops are for dryness, not the specks and threads that drift across your vision. What floaters are to a label, and why they go to a doctor.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `No. A lubricating eye drop adds to the tear film on the front of the eye, and its label covers dryness and irritation. Floaters, the specks, threads or cobwebs that drift across what you see, are a change in your vision, and Quell’s label sends changes in vision to a doctor. If you notice new floaters or a sudden change in them, call an eye doctor rather than reaching for a bottle.`,
      },
      { h: 'What people mean by floaters' },
      {
        p: `People describe floaters in many ways. You might notice:`,
      },
      {
        list: [
          `Small dots or specks that drift when you move your eyes.`,
          `Squiggly threads, rings or strands.`,
          `Faint cobweb shapes, easiest to see against a bright sky, a white wall or a blank screen.`,
          `Spots that seem to dart away when you try to look straight at them.`,
        ],
      },
      {
        p: `Those descriptions come from what people see, not from a label. Nothing on an over-the-counter lubricating drop names them, and this guide doesn’t try to explain what causes them. That’s an eye doctor’s question.`,
      },
      { h: 'What a lubricating drop is actually for' },
      {
        p: `The tear film is a thin coating on the front of the eye with three layers: oil on the outside to slow evaporation, water in the middle and mucus against the eye. Blinking spreads it across the surface. When it thins out, from dry air, wind, screens or long stretches of concentration, the eye can feel dry, gritty, burning or tired. A lubricating drop is meant for that surface.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses: {uses}. That sentence is about dryness and irritation. Specks drifting through your vision aren’t part of it.`,
      },
      { h: 'Floaters, smears and the blur after a drop' },
      {
        p: `Three things can get mixed up when someone asks whether drops help with floaters:`,
      },
      {
        list: [
          `A brief smear right after a drop goes in. Many drops, especially oil-containing ones like Quell, can blur vision for a few moments until you blink a few times. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) covers it.`,
          `A smudgy, filmy look on a dry day that clears when you blink. That behaves like something on the surface of the eye.`,
          `A spot or thread that keeps drifting across your view no matter how often you blink. That is the kind of thing people call a floater, and it’s the kind of thing to describe to an eye doctor.`,
        ],
      },
      {
        p: `If you’re not sure which one you’re seeing, don’t try to settle it by adding more drops. Using extra drops won’t answer the question, and the label’s directions don’t change: {directions}.`,
      },
      { h: 'Why the label sends vision changes to a doctor' },
      {
        p: `Quell’s stop-use section is short and direct: {stopUse} A new floater, more floaters than you used to have, or any other change in how things look counts as a change in vision for this purpose. Only someone who can look inside the eye can say what it means, and a bottle can’t do that. An eye doctor can find the cause and decide what to do.`,
      },
      {
        p: `[Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists other signs that call for a visit rather than a drop.`,
      },
      { h: 'What to tell the eye doctor' },
      {
        p: `A clear description helps the appointment. Before you call, jot down:`,
      },
      {
        list: [
          `When you first noticed the floaters, and whether they appeared gradually or all at once.`,
          `Whether they’re in one eye or both. Cover each eye in turn to check.`,
          `Roughly how many you see, and whether that has changed.`,
          `Anything else you’ve noticed with them, such as flashes of light or part of your view looking shaded.`,
          `Any eye drops or other eye products you use, including how often. Bring the carton if you can.`,
        ],
      },
      {
        p: `If you aren’t sure how urgent it is, say so when you call, describe exactly what you’re seeing, and let the office tell you how soon to come in.`,
      },
      { h: 'When dryness and floaters show up together' },
      {
        p: `Nothing stops someone from having dry eyes and floaters at the same time. The two are simply handled separately. Dryness on the surface of the eye is what a lubricating drop is for, used as the label directs. Floaters go to an eye doctor. If you already use a drop for dryness, tell the doctor, and ask whether there’s anything to change while they look into the floaters.`,
      },
      {
        p: `The online [self-check](/self-check) asks about dryness symptoms and can help you put them into words before a visit. It’s not a diagnosis, and it isn’t designed to assess floaters at all.`,
      },
      { h: 'Choosing a drop for dryness' },
      {
        p: `If the dryness is what you want help with, the usual questions apply: what the label covers, whether it’s preservative-free, and whether anything on the warnings rules it out for you. For Quell, start with the caution: {warnings}. [Eye drops for dry eyes: what to look for](/guides/eye-drops-for-dry-eyes) walks through the rest, and the full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops get rid of floaters?',
        a: 'Lubricating eye drops are made for dryness and irritation on the surface of the eye, and their labels don’t list floaters. A new floater or a change in floaters is a change in vision, which belongs with an eye doctor.',
      },
      {
        q: 'Are floaters a sign of dry eyes?',
        a: 'Nothing on a lubricating drop’s label connects the two. Dryness tends to feel gritty or burning, while floaters are something you see drifting, so describe them to an eye doctor.',
      },
      {
        q: 'Should I see an eye doctor for new floaters?',
        a: 'Yes. Quell’s label says to stop use and ask a doctor if you notice changes in your vision, and new floaters count. Describe what you see when you call and let the office tell you how soon to come in.',
      },
    ],
  },

  {
    slug: 'why-are-my-eyes-dry-at-work-but-fine-at-home',
    title: 'Why are my eyes dry at work but fine at home?',
    description:
      'Eyes that feel dry at work and fine at home are a clue. How office air, screens and long focus differ from home, and what you can change at your desk.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Usually because the air and the task are different. Workplaces tend to have sealed windows and ceiling vents moving heated or cooled air all the time, and many jobs mean hours of focused screen or close work, which cuts down on blinking. At home you move around more and look farther away. Compare the two places point by point, change what you can at work, and mention the pattern to an eye doctor.`,
      },
      { h: 'The pattern is useful information' },
      {
        p: `Eyes that feel scratchy by 3 p.m. on a Wednesday and fine by Saturday morning are telling you something. Whatever is drying them is probably at work, not in your eyes’ basic makeup or the weather alone. That narrows the search. [How can I tell what’s making my eyes dry?](/guides/how-can-i-tell-whats-making-my-eyes-dry) has a general tracking method; this guide focuses on the work-versus-home comparison.`,
      },
      { h: 'Compare the air in both places' },
      {
        list: [
          `Vents: is there a ceiling diffuser or floor vent blowing near your desk at work? At home, is your favorite chair out of any airflow?`,
          `Windows: many offices and shops have windows that don’t open, so the same conditioned air circulates through every working hour. At home, you may open a window or step outside.`,
          `Heating and cooling: workplaces often run the system harder and longer, especially in big buildings.`,
          `Fans and heaters: a coworker’s desk fan or a space heater under the next desk can send a steady stream of air past you.`,
          `Humidifiers: some people run one at home but have nothing at work.`,
        ],
      },
      {
        p: `Dry or moving air speeds evaporation from the tear film. Sitting in a vent’s path for eight hours is a very different exposure from an evening on the couch.`,
      },
      { h: 'Compare the task' },
      {
        p: `Then look at what your eyes are doing. People blink less while they concentrate on a screen or on close work, so the tear film has longer to thin between blinks. A workday might mean hours at a monitor, reading fine print, inspecting parts, or doing detailed work under bright lights. At home, the same person may be cooking, walking around, talking or watching TV across the room, which keeps the eyes moving and blinking. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side.`,
      },
      { h: 'Compare your workstation' },
      {
        list: [
          `Monitor height: a screen set above eye level makes you open your eyes wider, exposing more of the surface. At home, you may look down at a laptop or phone.`,
          `Distance: a monitor too close or too far can make you lean in and stare.`,
          `Lighting: glare on the screen from a window or overhead light makes people squint.`,
          `Breaks: do you get up at work, or sit for hours? At home, you probably move more without noticing.`,
        ],
      },
      { h: 'Don’t forget the commute' },
      {
        p: `Sometimes the drying starts before you reach your desk. A car heater blowing at your face for 40 minutes, a cold platform followed by a hot train, or a bus with blasting air can leave your eyes dry before the workday begins. If your eyes already feel off when you sit down, look at the drive in. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has settings to try.`,
      },
      { h: 'What you can change at work' },
      {
        list: [
          `Move your chair or desk out of a vent’s direct stream, or ask whoever manages the building whether a diffuser can be adjusted.`,
          `Lower the monitor so its top sits at or slightly below eye level.`,
          `Follow the 20-20-20 habit: every 20 minutes, look about 20 feet away for 20 seconds, and blink fully.`,
          `Get up once an hour, even for a minute, and look out a window if there is one.`,
          `Turn your own desk fan away from your face, and ask a neighbor to angle a space heater away from you.`,
          `Ask your workplace whether a small humidifier at your desk is acceptable.`,
        ],
      },
      {
        p: `[Dry eyes in a heated office in winter](/guides/dry-eyes-in-a-heated-office) covers the cold-season version in more detail.`,
      },
      { h: 'Keeping eye drops at work' },
      {
        p: `If you use a lubricating drop, work is where you may want it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions are: {directions}. For many people, one of those three doses naturally falls in the middle of the workday.`,
      },
      {
        p: `Keep the bottle in a desk drawer away from a heater, a sunny window or a hot piece of equipment. The storage line reads: {storage}. Wash your hands before using it, and remember: {tip}. If you share an office, keep the bottle to yourself.`,
      },
      { h: 'Jobs where the work itself is drying' },
      {
        p: `Some workplaces add more than office air: commercial kitchens with hot exhaust hoods, warehouses with big doors opening to the weather, labs and clean rooms with strong ventilation, cold storage, or jobs outdoors in the wind. The same comparison applies. If your eyes improve on days off, the workplace is the place to look. Protective eyewear your employer provides for a task does double duty as a shield against moving air.`,
      },
      { h: 'Why this matters to an eye doctor' },
      {
        p: `If your eyes stay dry at work after you’ve changed what you can, or if you notice pain, vision changes or irritation that doesn’t settle, see an eye doctor, who can find the cause and decide what to do. Telling them your eyes are fine at home but dry at work gives them a useful starting point. The label is clear on when to stop: {stopUse} Before a first bottle, read the caution: {warnings}.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel better on weekends?',
        a: 'If your eyes improve on days off, something at work is likely drying them: vents, sealed-window air, long screen sessions or a drying commute. Comparing work and home point by point usually points to the cause.',
      },
      {
        q: 'Can office air conditioning make your eyes dry?',
        a: 'Air conditioning removes moisture as it cools, and vents move that drier air across your face. Moving out of a vent’s path and taking regular screen breaks can help.',
      },
      {
        q: 'Should I tell my eye doctor my eyes only get dry at work?',
        a: 'Yes. The pattern is a useful clue, and an eye doctor can use it along with an exam to find the cause and decide what to do.',
      },
    ],
  },

  {
    slug: 'dry-eyes-during-a-christmas-wrapping-marathon',
    title: 'Dry eyes during a Christmas wrapping marathon',
    description:
      'Hours of wrapping gifts means looking down, focusing hard and sitting near heat. Why your eyes feel it afterward, and how to set up a gentler wrapping night.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A long wrapping session dries the eyes the same way a long screen session does: you focus hard on close work and blink less, often late at night in a warm, dry room near a fireplace or heater. Set up at a well-lit table away from heat, take a short break every 20 minutes or so, keep glitter away from your face, and wash your hands before you touch your eyes or a dropper.`,
      },
      { h: 'Why wrapping leaves your eyes tired and dry' },
      {
        p: `Wrapping looks relaxing, but for your eyes it’s focused close work. You’re lining up seams, cutting straight edges, finding the end of the tape and writing small tags. People blink less while they concentrate, so the tear film thins between blinks. Add a few more things common to wrapping night, and eyes can feel gritty or sore by the end:`,
      },
      {
        list: [
          `The hour: wrapping often happens late, after everything else is done, when eyes are already worn out from the day.`,
          `The setting: a cozy spot near the fireplace, the tree or a heating vent, in a room the heat has dried out.`,
          `The lighting: a dim living room or a single lamp that leaves you squinting at seams and labels.`,
          `The posture: hunched over a coffee table or sitting on the floor, looking down for hours.`,
        ],
      },
      { h: 'Set up a better wrapping station' },
      {
        list: [
          `Use a table at a comfortable height rather than the floor, so you’re not bending low over the work.`,
          `Put a good lamp right over the work area. Even, bright light means less squinting.`,
          `Choose a spot away from the fireplace, a space heater or a floor register.`,
          `If the room is dry, run a humidifier nearby.`,
          `Lay out supplies before you start, so you aren’t searching under paper for scissors.`,
        ],
      },
      {
        p: `[Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) explains why a seat by the fire is harder on your eyes than it feels.`,
      },
      { h: 'Take breaks between gifts' },
      {
        p: `Wrapping comes in natural chunks, so use them. After every few gifts, or about every 20 minutes, look up and across the room at something far away for 20 seconds, and blink slowly and fully a few times. Stand up, stretch, refill your drink. It also gives you a chance to check whether the heater has kicked on and is now blowing right at you.`,
      },
      { h: 'Glitter, ribbon and other hazards' },
      {
        p: `Glitter paper, glitter tags and glitter ribbon shed tiny flecks that end up on your hands and face. Rubbing your eyes with glittery fingers can put one right on the eye. Curling ribbon with scissors can also send the ribbon end springing toward your face.`,
      },
      {
        list: [
          `Keep your hands away from your eyes while you work, and wash them before you touch your face.`,
          `If a fleck gets in your eye, don’t rub. Blink, and if it doesn’t come out or the eye hurts, get medical help. A lubricating drop is not an eye wash.`,
          `Curl ribbon with the blade pointing away from you, at arm’s length.`,
          `Wipe glitter off the table before you put anything on it that will touch your face.`,
        ],
      },
      { h: 'Wrapping while watching a movie' },
      {
        p: `Plenty of people wrap in front of a holiday movie. That means switching between close work in your lap and a screen across the room, often in low light. The change of focus can be good for your eyes, but a dark room makes the close work harder. Keep a lamp on over your work, and let the movie be the far-away view you look up at between gifts. [Holiday screen time and dry eyes](/guides/holiday-screen-time-and-dry-eyes) covers the screen side of the season.`,
      },
      { h: 'Using eye drops after a wrapping session' },
      {
        p: `If your eyes feel dry afterward, Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label describes its Uses: {uses}. The directions say: {directions}. Wash the glitter and adhesive off your hands before you open the bottle, and follow the label’s hygiene rule: {tip}.`,
      },
      { h: 'Wrapping a bottle of Quell' },
      {
        p: `If Quell is one of the gifts on the table, it’s easy to wrap: the bottle comes in a small carton. A few things to know first:`,
      },
      {
        list: [
          `Check the label caution before you give it: {warnings}. Quell contains emu oil.`,
          `The label describes the solution as {milky}; a note in the card saves the recipient a surprise.`,
          `Store it in range until it’s opened: {storage}. A gift pile beside the fireplace is not the place for it.`,
          `Checkout has no gift-wrap option, so wrapping is up to you.`,
        ],
      },
      {
        p: `[Gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes) has ideas to pair with it, and all the holiday guides are under [Gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'When your eyes don’t recover' },
      {
        p: `Tired, dry eyes after a long night usually settle with sleep and a break from close work. If they don’t, or if you notice pain, vision changes or irritation that lingers, see an eye doctor, who can find the cause and decide what to do. Quell’s label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after wrapping presents?',
        a: 'Wrapping is focused close work, so you blink less, and it often happens late at night in a warm, dry room. Better light, a spot away from heat and short breaks every 20 minutes can help.',
      },
      {
        q: 'Can glitter from wrapping paper get in your eyes?',
        a: 'Yes. Glitter flecks travel from paper and ribbon to your hands and face. If one lands in your eye, don’t rub; blink, and if it doesn’t come out or the eye hurts, get medical help.',
      },
      {
        q: 'Can I wrap a bottle of eye drops as a gift?',
        a: 'Yes. Quell comes in a small carton that wraps easily. Check the label caution first, {warnings}, and keep the gift away from the fireplace so it stays within the storage range.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-holiday-bell-ringers-and-volunteers',
    title: 'Dry eyes for holiday bell ringers and volunteers',
    description:
      'Hours outside a store entrance or at a toy drive mean cold wind, glare and warm air from the doors. How outdoor holiday volunteers can look after dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Holiday bell ringers and outdoor volunteers stand still in cold wind for hours, often beside doors that puff out warm, dry indoor air every time they open. That swing dries the tear film. Stand with your back to the wind, wear wraparound glasses and a brimmed hat, take short breaks indoors, keep eye drops in an inside pocket, and use them with a bare, clean hand as the label directs.`,
      },
      { h: 'What a volunteer shift does to your eyes' },
      {
        p: `A volunteer shift outside a store, a church, a toy drive collection point or a holiday market has a few things in common: you stand in one place, you’re outdoors in December, and you’re looking at people and traffic for hours. Your eyes deal with several things at once:`,
      },
      {
        list: [
          `Cold wind, which makes eyes water at first and then leaves them feeling dry and stinging.`,
          `Doors opening beside you, sending out bursts of warm indoor air, then the cold rushing back.`,
          `Low winter sun, which shines straight into your face at certain hours.`,
          `Car exhaust and dust from a busy parking lot.`,
          `Hours of watching passersby without much chance to rest your eyes.`,
        ],
      },
      { h: 'Where to stand' },
      {
        p: `You often don’t get to choose your spot, but small adjustments help. If you can, stand where the building blocks the wind, and keep your back to the breeze. Step a little to one side of the doors rather than right in front of them, so the blast of indoor air doesn’t hit your face each time they open. If the sun is low and in your eyes, turn slightly or let a brimmed hat do the work.`,
      },
      { h: 'What to wear for your eyes' },
      {
        list: [
          `Wraparound sunglasses on bright days, or clear wraparound glasses on gray ones. Both cut the wind.`,
          `A hat with a brim to shade your eyes from low sun.`,
          `A scarf or gaiter that covers your nose and mouth, pulled so it doesn’t push your breath up into your glasses.`,
          `Warm gloves, plus a plan for taking one off when you need to use a drop.`,
        ],
      },
      {
        p: `[How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) goes further on eyewear choices.`,
      },
      { h: 'Breaks: warm up, blink, reset' },
      {
        p: `Shifts often run a couple of hours, and many groups build in breaks. Use them. Step inside, away from the entrance heaters, and give your eyes a few minutes out of the wind. Close them for a moment, blink slowly several times, and look at something across the room. If there’s no break built in, ask whether you can swap with another volunteer for ten minutes.`,
      },
      { h: 'Using eye drops on a cold shift' },
      {
        p: `Gloves and eye drops don’t mix well. A gloved hand can’t feel how hard it’s squeezing, and gloves carry dirt and lint. Take off the glove on the hand that holds the bottle, steady the other hand on your cheek, and put the drop in, ideally indoors or out of the wind. [Putting in eye drops with gloves on in the cold](/guides/putting-in-eye-drops-with-gloves-on-in-the-cold) walks through it step by step.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses: {uses}. The directions read: {directions}. Wash or sanitize your hands first, letting sanitizer dry completely, since you’ve been handling coins, bills, a bell and a donation kettle. Keep the tip clean: {tip}.`,
      },
      { h: 'Keeping the bottle in range' },
      {
        p: `A bottle in an outer pocket or a bag at your feet on a frozen sidewalk can get very cold. The label’s storage line reads: {storage}. Keep it in an inside chest pocket, close to your body. If it has been left somewhere cold for a long time, check its appearance before using it; the label describes the solution as {milky}.`,
      },
      { h: 'Other outdoor holiday volunteer jobs' },
      {
        list: [
          `Parking lot attendants at holiday services and events, directing cars in the dark with headlights in their faces.`,
          `Christmas tree lot volunteers, handling trees in the cold with needles and sap flying.`,
          `Parade volunteers and marshals, standing along a route in the wind. [Dry eyes at a Thanksgiving parade](/guides/dry-eyes-at-a-thanksgiving-parade) covers that crowd.`,
          `Food and coat drive collectors at outdoor drop-off points.`,
          `Holiday market and festival helpers, often near food stalls with smoke and heat.`,
        ],
      },
      {
        p: `For all of them, the habits are the same: shield your eyes from wind, step out of drafts, take breaks, and handle drops with clean, bare hands.`,
      },
      { h: 'After the shift' },
      {
        p: `Coming home from a cold shift into a heated house can make your eyes feel worse for a while, as the warm, dry indoor air takes over. Sit away from the fireplace or heating vents while you warm up, and give your eyes some rest from screens. If someone in your volunteer group deals with dry eyes too, [Gifts for someone who works outdoors in winter](/guides/gifts-for-someone-who-works-outdoors-in-winter) has thank-you gift ideas.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind and cold explain a lot of discomfort. They don’t explain pain, vision changes or irritation that hangs on for days. Those are reasons to see an eye doctor, who can find the cause and decide what to do. Quell’s label says: {stopUse} Before a first bottle, read the caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How can bell ringers keep their eyes from drying out?',
        a: 'Stand with your back to the wind and to one side of the store doors, wear wraparound glasses and a brimmed hat, take short breaks indoors, and use eye drops with a clean, bare hand as the label directs.',
      },
      {
        q: 'Why do store doors make my eyes feel dry when I stand outside?',
        a: 'Every time the doors open, warm, dry indoor air rushes out, and then the cold returns. Standing a little to one side of the entrance keeps those bursts out of your face.',
      },
      {
        q: 'Can I use eye drops during an outdoor volunteer shift?',
        a: 'Yes, following the label’s directions. Step out of the wind if you can, take off the glove on the bottle hand, clean your hands, and keep the bottle in an inside pocket between uses.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-veteran',
    title: 'Christmas gifts for a veteran',
    description:
      'Thoughtful Christmas gifts for a veteran, from practical everyday comforts to gifts that honor their service, plus when eye drops make sense on the list.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Good gifts for a veteran fit the person they are now: something useful for how they spend their days, something that honors their service if they’d welcome it, or time spent together. If they’ve mentioned dry or tired-feeling eyes, practical comforts like a bedroom humidifier, wraparound sunglasses or a good reading lamp suit the list, and a bottle of eye drops can join them once you’ve checked the label’s caution.`,
      },
      { h: 'Start with how they spend their days' },
      {
        p: `“Veteran” covers a 25-year-old back in college, a 50-year-old running a business and an 80-year-old who spends mornings in the garden. The service is shared; the daily life isn’t. Before you pick anything, think about where your veteran actually spends time:`,
      },
      {
        list: [
          `Outdoors: hunting, fishing, hiking, golf or yard work.`,
          `In a workshop or garage, building and fixing things.`,
          `Behind the wheel, for work or for long road trips.`,
          `Reading, writing, puzzles or long hours at a screen.`,
          `With family and friends, or with the people they served alongside.`,
        ],
      },
      {
        p: `The gift ideas below follow those lines. Pick the section that sounds like them.`,
      },
      { h: 'Gifts that honor their service' },
      {
        p: `Some veterans love a gift connected to their service. Others would rather leave it in the past. If you aren’t sure, ask a spouse, a sibling or a friend who knows them well before you buy. If the answer is yes, consider:`,
      },
      {
        list: [
          `A shadow box to display medals, patches, insignia or a folded flag they already have.`,
          `A framed photo from their service years, restored or enlarged.`,
          `A well-reviewed history of their branch, unit or the era they served in.`,
          `A notebook or a simple voice recorder, with an offer to sit down and record their stories for the family.`,
          `A donation in their name to a cause they choose themselves.`,
          `Help planning a trip to a reunion with the people they served with.`,
        ],
      },
      { h: 'Everyday comforts for dry, tired-feeling eyes' },
      {
        p: `If your veteran has said their eyes feel dry, scratchy or worn out by evening, a few gifts work on the everyday causes. Dry, heated or air-conditioned air speeds evaporation from the tear film, wind does the same, and long screen or reading sessions cut down on blinking.`,
      },
      {
        list: [
          `A small humidifier for the bedroom or den, with a note that it needs regular cleaning.`,
          `Wraparound sunglasses that block wind as well as glare, for drives and time outdoors.`,
          `A brimmed hat for sunny days on the water or the course.`,
          `A good reading lamp that puts even light on the page, so there’s less squinting.`,
          `An e-reader with adjustable text size and lighting.`,
          `A simple desk timer to nudge screen breaks every 20 minutes.`,
        ],
      },
      {
        p: `[Gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes) has more ideas in the same spirit.`,
      },
      { h: 'For the outdoors veteran' },
      {
        p: `Outdoor gifts that also look after the eyes are easy to find: shooting or fishing glasses with side coverage, a neck gaiter that pulls up against the wind, quality gloves, hand warmers, or goggles for shoveling snow. If they hunt or fish, [Christmas gifts for a hunter](/guides/christmas-gifts-for-a-hunter) and [Christmas gifts for someone who fishes](/guides/christmas-gifts-for-someone-who-fishes) go deeper.`,
      },
      { h: 'For the workshop and garage' },
      {
        list: [
          `Safety glasses that fit comfortably, so they actually get worn.`,
          `A bright LED shop light or headlamp for close work.`,
          `A magnifying lamp for small parts and fine detail.`,
          `An organizer for hardware, so less time goes into hunting for the right screw.`,
        ],
      },
      { h: 'Experiences and time together' },
      {
        p: `For many people, time beats things. Tickets to a ballgame, a meal at their favorite restaurant, a day helping with a project they’ve been putting off, or a weekend trip can mean more than anything in a box. If you’re planning an outing for a veteran with dry eyes, a few small choices help: seats out of the wind at a stadium, a table away from the fireplace, and sunglasses in the glove box.`,
      },
      { h: 'Where a bottle of eye drops fits' },
      {
        p: `Eye drops make a sensible gift only for someone who has already mentioned their eyes; for anyone else, a bottle can read as a comment rather than a present. If your veteran is that person, Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses: {uses}. It’s preservative-free and made with natural ingredients, including emu oil and manuka honey.`,
      },
      {
        list: [
          `Check the caution first: {warnings}. If you don’t know whether they have an egg or bird allergy, ask before you order.`,
          `If an eye doctor prescribes their eye drops, they should ask that doctor before adding another product.`,
          `The label doesn’t give directions for contact lens wearers, so a lens wearer should ask their eye doctor first.`,
          `The label describes the solution as {milky}, so a word in the card about the color saves them a surprise.`,
        ],
      },
      { h: 'Ordering before Christmas' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses in the United States. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, and Christmas Day falls on a Friday this year, so order well ahead. Checkout has no gift message or gift-wrap option; ship to yourself if you want to wrap it, or send a note separately. If the gift isn’t wanted, unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) covers the details, and if you’re shopping for someone still serving overseas, read [Can I ship eye drops to an APO or FPO address?](/guides/shipping-eye-drops-to-an-apo-or-fpo-address) first.`,
      },
      { h: 'A gift isn’t a substitute for an eye doctor' },
      {
        p: `If your veteran mentions eye pain, changes in their vision or irritation that won’t go away, encourage them to see an eye doctor, who can find the cause and decide what to do. The label says: {stopUse} More holiday ideas are collected under [Gifts and the holidays](/guides/topic/seasonal), including [Christmas gifts for a police officer](/guides/christmas-gifts-for-a-police-officer) and [Christmas gifts for a new retiree](/guides/christmas-gifts-for-a-new-retiree).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a veteran for Christmas?',
        a: 'Think about how they spend their days now: outdoor gear, workshop tools, books or time together. Gifts tied to their service, like a shadow box or a restored photo, work well for veterans who welcome them.',
      },
      {
        q: 'What is a meaningful gift for a veteran?',
        a: 'Something personal: a shadow box for medals they already have, a restored photo from their service years, an offer to record their stories, or help getting to a reunion. Ask someone close to them first if you’re unsure they’d welcome it.',
      },
      {
        q: 'Are eye drops a good Christmas gift for a veteran?',
        a: 'Only if they’ve mentioned dry eyes. Check the label caution first, {warnings}, and if an eye doctor prescribes their drops, they should ask that doctor before adding another product.',
      },
    ],
  },
]
