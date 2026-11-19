import type { Guide } from '@/lib/guide-types'
export const DAILY_20261119_B: Guide[] = [
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-warren-mi:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid MTC: MT. CLEMENS ANG BASE (Selfridge Air National Guard Base), MI,
   *   elev 580 ft. Saved: .daily-job/acis1119/MTC.json, .daily-job/b/mint_MTC.json
   *   (normal max Jan 31.6 F, Jul 82.2 F; normal min Jan 17.9 F, Feb 18.5 F;
   *   precip Jan 2.22, Feb 1.75, Jul 3.82 (wettest), annual 34.96 in;
   *   snowfall Jan 10.6, Feb 8.5, Mar 5.2, Dec 5.9, Nov 1.3, Apr 0.7, annual 32.2 in)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-warren-mi',
    title: 'Dry eye relief in Warren, Michigan',
    description:
      'Warren winters average January lows near 18°F at nearby Selfridge, so furnaces run for months. NOAA’s numbers and practical dry eye relief for Macomb County.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Warren mostly means managing indoor air. NOAA’s normals for nearby Selfridge Air National Guard Base put January lows near 18°F and about 32 inches of snow a year, so furnaces, defrosters and space heaters run from November into April. Keep vents off your face, blink fully at design screens, and use a lubricating drop as its label directs. Pain or vision changes call for an eye doctor.`,
      },
      { h: 'The weather station behind these numbers' },
      {
        p: `Warren doesn’t have its own long-running NOAA station in the climate normals, so this guide uses the closest one with a full record: Mt. Clemens ANG Base, better known as Selfridge Air National Guard Base, about 580 feet above sea level on the shore of Lake St. Clair, northeast of Warren in Harrison Township. It sits right on the water, which can make its readings a little different from a neighborhood off Van Dyke or Mound Road. Read the figures below as the climate of southern Macomb County rather than of one street.`,
      },
      {
        p: `NOAA’s 1991–2020 climate normals for Selfridge, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `About 34.96 inches of precipitation in a normal year, with July the wettest month at 3.82 inches and February the driest at 1.75.`,
          `About 32.2 inches of normal snowfall, led by January at 10.6 inches, then February at 8.5 and December at 5.9.`,
          `A normal January high of 31.6°F and a normal January low of 17.9°F. February’s low is 18.5°F.`,
          `A normal July high of 82.2°F, with July lows near 61.9°F.`,
        ],
      },
      { h: 'Why a Macomb County winter dries your eyes' },
      {
        p: `Cold air holds very little water. When a furnace pulls 18-degree air inside and warms it to 70, the amount of moisture stays the same while the air’s capacity to hold it jumps, so the relative humidity indoors drops. That parched, heated air is what speeds evaporation from the tear film, the thin layer of oil, water and mucus that keeps the front of your eye smooth. Warren’s housing stock includes plenty of postwar ranch homes with forced-air heat, and a register under the couch or beside the bed blows that dry air straight across the room.`,
      },
      {
        list: [
          `Point floor registers and space heaters away from where you sit and sleep.`,
          `Run a cleaned humidifier in the bedroom from the first hard freeze until spring.`,
          `Turn the thermostat down a few degrees at night; cooler air dries less.`,
          `Keep a reading lamp and chair away from the furnace closet and the register under the window.`,
        ],
      },
      {
        p: `For a room-by-room plan in a ranch house with forced air, see [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes); a [humidifier guide](/guides/does-a-humidifier-help-dry-eyes) covers sizing and cleaning.`,
      },
      { h: 'Engineering offices, test labs and long screen days' },
      {
        p: `Warren is a city of design and engineering work. The General Motors Technical Center fills a large campus off Mound Road, and the Detroit Arsenal, home to Army vehicle research and program offices, is here too. Much of that work happens at monitors: CAD models, simulation results, spreadsheets and video calls. Concentrating on a screen slows your blink rate, and many blinks during focused work only close partway, so the tear film thins between them. Add a building’s winter heat, and eyes can feel gritty well before quitting time.`,
      },
      {
        list: [
          `Set the top of your monitor at or slightly below eye level, so your lids cover more of the eye.`,
          `Every so often, look away from the model and blink slowly and completely several times.`,
          `If a ceiling diffuser blows on your desk, ask facilities whether it can be redirected, or move the chair.`,
          `Keep a bottle in your bag rather than a desk drawer next to the window, so it stays in the label’s storage range.`,
        ],
      },
      {
        p: `Engineers who spend whole shifts in CAD can find a fuller desk routine in [screens and your tear film](/guides/screens-and-your-tear-film).`,
      },
      { h: 'Snow, wind and the drive on Mound and Van Dyke' },
      {
        p: `January brings Warren’s heaviest snow in the Selfridge record, and the morning drive in a cold car means the defroster runs on high with vents aimed at the windshield and, often, at your face. Angle the side vents toward your hands and torso, use the floor setting once the glass clears, and wear sunglasses on bright mornings after fresh snow, when glare makes many people squint and blink less. Clearing a driveway in wind off the lake is easier on the eyes with wraparound glasses.`,
      },
      { h: 'Summer by Lake St. Clair' },
      {
        p: `Summer is the gentler season here. Normal July highs near 82°F and the year’s wettest month mean the outside air is rarely the problem. Air conditioning is the more likely culprit: a cold vent in the car on I-696 or an office chilled for a long afternoon dries the tear film the same way a furnace does. Boating or fishing on Lake St. Clair adds wind and glare off the water, so sunglasses that wrap around do double duty.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits the heated-air problem a Michigan winter creates. Its Drug Facts panel lists the use as: {uses}. The directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `Before a first use, read the caution: {warnings}. Quell contains emu oil, so anyone with an egg or bird allergy should check with a doctor first. For storage, the label says: {storage}. A bottle left in a car parked outside a plant on a January night will fall well below that, so carry it inside. The [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Ordering Quell to Warren' },
      {
        p: `We ship from Brentwood, Tennessee, to Warren, Sterling Heights, Roseville, Center Line and any other US address. Checkout works as a guest, shipping is {shipping}, and an order of {freeBottles} or more bottles ships free. Tracking arrives by email, but no delivery date is promised, so order before you run low, especially in December. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. The [Warren page](/eye-drops/warren-mi) and the [Michigan page](/eye-drops/state/michigan) have local details, and readers across Eight Mile can compare the [Detroit guide](/guides/dry-eye-relief-detroit-mi).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop isn’t the answer for everything. The label’s stop-use list: {stopUse} Dryness that comes back every winter, or that heated air alone doesn’t explain, deserves an exam, where an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Warren in the winter?',
        a: `Warren’s winters are cold, with January lows near 18°F in NOAA’s Selfridge normals, so furnaces run for months. Warming cold air lowers its relative humidity indoors, and that dry air speeds evaporation from the tear film.`,
      },
      {
        q: 'How much snow does Warren, Michigan get?',
        a: `NOAA’s 1991–2020 normals for Selfridge Air National Guard Base, the nearest station with a full record, show about 32.2 inches of snow a year, with January the snowiest month at 10.6 inches.`,
      },
      {
        q: 'Which weather station is closest to Warren, MI?',
        a: `For long-term climate normals, the nearest full-record station is Mt. Clemens ANG Base, at Selfridge Air National Guard Base on Lake St. Clair, northeast of Warren. Its lakeside spot can read a little differently from inland neighborhoods.`,
      },
      {
        q: 'Can I get Quell eye drops delivered to Warren?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Warren and the rest of Macomb County. Shipping is {shipping}, and {freeBottles} or more bottles ship free.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-merced-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid MCE: MERCED MUNICIPAL AP, CA, elev 152 ft.
   *   Saved: .daily-job/acis1119/MCE.json, .daily-job/b/mint_MCE.json
   *   (normal max Jul 96.3 F, Aug 95.1, Jun 90.7, Sep 90.5, Jan 55.6, Dec 56.0;
   *   normal min Dec 36.0 F, Jan 37.0; precip Jan 2.37, Feb 2.20, Dec 1.91,
   *   Jun 0.12, Jul 0.00, Aug 0.00, Sep 0.05, annual 11.80 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-merced-ca',
    title: 'Dry eye relief in Merced, California',
    description:
      'Merced’s July and August normals show zero inches of rain and highs near 96°F. NOAA’s figures and everyday dry eye relief for Merced and UC Merced.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Merced means getting through a rainless summer. NOAA’s normals for Merced’s airport show 0.00 inches of rain in July and August, with highs near 96°F, and only about 11.8 inches a year. Shade your eyes from sun and wind, keep car and office vents off your face, blink fully at screens, and use a lubricating drop as its label directs. Lasting pain or vision changes need an eye doctor.`,
      },
      { h: 'Merced’s climate in NOAA’s records' },
      {
        p: `NOAA’s 1991–2020 climate normals for Merced Municipal Airport, at about 152 feet on the valley floor just southwest of downtown, describe a long dry season and a short wet one:`,
      },
      {
        list: [
          `About 11.80 inches of precipitation in a normal year.`,
          `January is the wettest month at 2.37 inches, followed by February at 2.20 and December at 1.91.`,
          `June averages 0.12 inches, July and August 0.00, and September 0.05.`,
          `Normal highs reach 96.3°F in July and 95.1°F in August, and stay above 90°F from June through September.`,
          `December has the coolest normal lows, about 36.0°F.`,
        ],
      },
      {
        p: `Four months of normal highs above 90 and almost no rain from June to September is the core of Merced’s dry-eye story. The rest of the year is milder, and winter brings most of the rain.`,
      },
      { h: 'A summer with no rain at all' },
      {
        p: `A month whose normal rainfall rounds to zero means the ground, the fields and the air dry out together. Hot, dry air pulls water from the tear film faster, and wind across open farmland adds to it. Merced County is farm country, with orchards, dairies, row crops and sweet potato fields on every side of town, and summer field work, harvest dust and long drives on Highway 99 and Highway 59 are part of daily life for many people here.`,
      },
      {
        list: [
          `Wear close-fitting sunglasses or safety glasses outdoors; they block wind and dust as well as glare.`,
          `Do outdoor chores in the early morning, when normal lows sit around 60°F in July and the sun is lower.`,
          `In a tractor cab or truck, aim the air conditioning at your chest instead of your eyes.`,
          `Rinse your face and closed eyelids with clean water after a dusty shift, and wash your hands before touching your eyes.`,
        ],
      },
      { h: 'Air conditioning through a valley summer' },
      {
        p: `When highs run in the mid-90s for weeks, air conditioning runs almost constantly in homes, cars, offices and classrooms. Cooled air is also dry air, and a vent blowing toward your face does to the tear film what a desert breeze does. Close or redirect the dashboard vents nearest you, move your desk chair out from under a ceiling diffuser, and keep a fan pointed at your body rather than your head at night. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) covers the dashboard side, and [leaving eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains why the bottle shouldn’t ride in the glove box.`,
      },
      { h: 'Studying at UC Merced' },
      {
        p: `UC Merced brings thousands of students to the northeast edge of town, and much of their day happens at a laptop. When you focus on a screen, you blink less, and many blinks close only part of the way, so tears evaporate between them. Long library sessions in late spring, just as the dry season sets in, combine both problems.`,
      },
      {
        list: [
          `Every 20 minutes or so, look out a window or down a hallway and blink slowly a few times.`,
          `Lower the laptop screen or raise your chair, so you look slightly down at it.`,
          `Turn down screen brightness to match the room instead of squinting into it.`,
          `Keep the bottle in a backpack pocket, not a car parked in a sunny lot.`,
        ],
      },
      { h: 'Winter fog and heated rooms' },
      {
        p: `Winter turns the picture around. From December through February, Merced gets most of its rain, and the San Joaquin Valley often fills with low winter fog, so the outside air feels damp. Indoors, heaters warm that cool air and lower its relative humidity, so eyes can still feel dry in a heated classroom or office. A bedroom humidifier and a seat away from heating vents help through the cooler months.`,
      },
      { h: 'Heading up to Yosemite' },
      {
        p: `Merced is a gateway to Yosemite, with Highway 140 running east through Mariposa toward the park. A day trip means hours of car air, then thinner, cooler mountain air with bright sun and wind at the overlooks. Pack sunglasses, keep the dashboard vents aimed away, and stop now and then to give your eyes a rest from the road.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the problem that hot, dry air speeds up. Its Drug Facts panel lists its use as: {uses}. The directions say: {directions}. Read the caution first: {warnings}.`,
      },
      {
        p: `Storage matters in a place with 96-degree summer normals. The label says: {storage}. A glove box or a backpack left in a parked car in July can climb far above that, so keep the bottle with you or inside. The panel adds: {milky}. The [Drug Facts page](/drug-facts) shows everything printed on the carton.`,
      },
      { h: 'Ordering eye drops to Merced' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Merced, Atwater, Los Banos, Livingston and every other US address. You can check out as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order before your bottle runs low; in summer, ask a neighbor to bring the box in if you’ll be out. See the [Merced page](/eye-drops/merced-ca) and the [California page](/eye-drops/state/california) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label is clear about where a drop stops: {stopUse} If dryness keeps returning every summer, or something more than heat and dust seems to be going on, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Merced in the summer?',
        a: `Merced’s summers are hot and almost rainless. NOAA’s normals for the Merced airport show 0.00 inches of rain in July and August and highs near 96°F, and that hot, dry air plus constant air conditioning speed evaporation from the tear film.`,
      },
      {
        q: 'How much rain does Merced, CA get a year?',
        a: `About 11.80 inches in a normal year, according to NOAA’s 1991–2020 normals for Merced Municipal Airport. January is the wettest month at 2.37 inches, and July and August average none.`,
      },
      {
        q: 'What is the hottest month in Merced?',
        a: `July, with a normal high of 96.3°F at Merced Municipal Airport in NOAA’s 1991–2020 normals. August is close behind at 95.1°F.`,
      },
      {
        q: 'Does Quell ship to Merced and UC Merced students?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Merced and student housing near campus. Buyers must be 18 or older, and shipping is {shipping}, free on {freeBottles} or more bottles.`,
      },
    ],
  },


  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-mckinney-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid TKI: MCKINNEY MUNICIPAL AP, TX, elev 569 ft.
   *   Saved: .daily-job/acis1119/TKI.json, .daily-job/b/mint_TKI.json
   *   (normal max Aug 95.5 F, Jul 95.0, Jun 90.7, Jan 55.5; normal min Jan 33.9 F,
   *   Dec 35.8, Jul 73.8, Aug 73.1; precip May 4.77 (wettest), Oct 4.41, Mar 3.51,
   *   Jul 1.96, Aug 1.73 (driest), annual 38.30 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-mckinney-tx',
    title: 'Dry eye relief in McKinney, Texas',
    description:
      'McKinney’s August is its hottest and driest month in NOAA’s records, at 95.5°F and 1.73 inches. What it means for your eyes, and everyday relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In McKinney, dry eyes peak when August does. NOAA’s normals for the McKinney airport make August both the hottest month, with highs near 95.5°F, and the driest, at 1.73 inches of rain, so air conditioning runs nonstop. Keep vents off your face, wear sunglasses outdoors, blink fully at screens, and use a lubricating drop as its label directs. See an eye doctor for pain, vision changes or dryness that won’t settle.`,
      },
      { h: 'McKinney’s climate, by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the McKinney airport, listed as McKinney Municipal Airport and sitting about 569 feet above sea level on the city’s southeast side, show a year with two wet seasons and a hot, dry stretch between them:`,
      },
      {
        list: [
          `About 38.30 inches of precipitation in a normal year.`,
          `May is the wettest month at 4.77 inches, with a second peak in October at 4.41.`,
          `July (1.96 inches) and August (1.73) are the driest months.`,
          `Normal highs are 95.0°F in July and 95.5°F in August, and nights stay warm, with lows near 74°F.`,
          `January’s normal high is 55.5°F and its normal low 33.9°F, right around freezing.`,
        ],
      },
      { h: 'Why late summer is the hard stretch' },
      {
        p: `The rain falls off just as the heat peaks. Between early July and late August, the ground dries, lawns go dormant, and nearly everyone spends the hottest hours inside a cooled building or car. Air conditioners work partly by pulling moisture out of the air, and a vent blowing toward your face speeds evaporation from the tear film the way a dry breeze does. Warm nights mean the AC keeps going after dark too, often blowing across a bed or a sofa.`,
      },
      {
        list: [
          `Aim ceiling fans and bedroom vents away from your pillow.`,
          `Set the thermostat a couple of degrees higher at night, so the system cycles less.`,
          `Close or angle the dashboard vents closest to the driver’s face.`,
          `Change the home’s air filter on schedule; a clogged filter makes the system blow harder for longer.`,
        ],
      },
      { h: 'Commuting on 75 and the Sam Rayburn Tollway' },
      {
        p: `Many McKinney residents drive south every weekday on US 75 or west on the Sam Rayburn Tollway toward jobs in Plano, Frisco, Richardson and Dallas. An hour a day in a cooled car, with the sun low and bright on the morning or evening leg, adds up. Glare makes people squint, and squinting tends to cut blinks short. Polarized sunglasses help, and so does a habit of a few slow, deliberate blinks at each long light. Never put drops in while driving; do it before you leave or once you’re parked. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has more on the drive.`,
      },
      { h: 'Spring storms, fall rain and a brief winter' },
      {
        p: `May and October bring McKinney’s heaviest rain, and those months tend to be kinder to the eyes outdoors. Spring here is also windy and pollen-heavy, so a gusty day at a youth soccer field or on the trails at the Heard Natural Science Museum can leave eyes feeling scratchy even when the air isn’t especially dry. Wraparound sunglasses and washing your face after time outside help.`,
      },
      {
        p: `Winter is short but real. With January lows near 34°F, the furnace runs on cold mornings, and heated indoor air lowers relative humidity. A small humidifier in the bedroom and a seat away from floor or ceiling vents are worth it from December into February.`,
      },
      { h: 'Around the square and on Lake Lavon' },
      {
        p: `An evening on McKinney’s historic downtown square in summer means heat coming off brick and pavement, and a trip out to Lavon Lake on the city’s east side adds wind and glare off the water. Sunglasses that wrap around the sides block both. On the boat, keep the bottle in a shaded bag, not on a sun-baked seat.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem that cooled, dry air makes worse. The Drug Facts panel lists the use as: {uses}. The directions say: {directions}. Read the caution before first use: {warnings}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car parked in a McKinney lot on an August afternoon goes well past that upper limit, so carry the bottle in a bag or keep it indoors. The panel also asks: {tip}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in McKinney' },
      {
        p: `Quell ships from Brentwood, Tennessee, to McKinney, Allen, Prosper, Melissa, Princeton and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, and in summer a box shouldn’t sit on a hot porch, so have it held or brought in if you’re away. The [McKinney page](/eye-drops/mckinney-tx) and the [Texas page](/eye-drops/state/texas) have more, and Dallas readers have their own [Dallas guide](/guides/dry-eye-relief-dallas-tx).`,
      },
      { h: 'When it’s time for an eye doctor' },
      {
        p: `The label draws the line: {stopUse} Dryness that comes back every summer, or that still bothers you after you’ve dealt with the vents and the screens, deserves an exam, where an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to act on quickly.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in McKinney, Texas?',
        a: `August, narrowly. NOAA’s 1991–2020 normals for the McKinney airport give August a normal high of 95.5°F and July 95.0°F.`,
      },
      {
        q: 'What is the rainiest month in McKinney, TX?',
        a: `May, with 4.77 inches in NOAA’s 1991–2020 normals for the McKinney airport. October is a close second at 4.41 inches, and August is the driest month at 1.73.`,
      },
      {
        q: 'Why do my eyes feel dry in McKinney in the summer?',
        a: `Late summer is McKinney’s hottest and driest stretch, so air conditioning runs in homes and cars nearly around the clock. Cooled air blowing toward your face speeds evaporation from the tear film.`,
      },
      {
        q: 'Can Quell be shipped to McKinney or Prosper?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including McKinney, Prosper and the rest of Collin County. Shipping is {shipping}, and {freeBottles} or more bottles ship free.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-ames-ia:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid AMW: AMES MUNICIPAL AP, IA, elev 923 ft.
   *   Saved: .daily-job/acis1119/AMW.json, .daily-job/b/mint_AMW.json
   *   (normal max Jan 28.7 F, Feb 33.4, Dec 33.9, Jul 83.9; normal min Jan 10.9 F,
   *   Feb 15.4, Dec 16.5, Jul 62.8; precip Jan 0.61 (driest), Feb 0.78, Dec 1.05,
   *   May 5.16, Jun 5.22 (wettest), Aug 4.85, annual 35.91 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-ames-ia',
    title: 'Dry eye relief in Ames, Iowa',
    description:
      'Ames averages January lows near 11°F and only 0.61 inches of precipitation that month. NOAA’s figures and dry eye relief for Iowa State students and residents.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In Ames, dry eyes are mostly a winter problem. NOAA’s normals for the Ames airport show January lows near 11°F and just 0.61 inches of precipitation that month, so furnaces and dorm heaters run hard against cold, dry air. Humidify bedrooms, keep vents off your face, wear goggles or wraparound glasses in the wind, blink fully at screens, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Ames airport record shows' },
      {
        p: `NOAA’s 1991–2020 climate normals for Ames Municipal Airport, about 923 feet above sea level on the south edge of town near US 30, describe a classic central Iowa year with a dry winter and a wet early summer:`,
      },
      {
        list: [
          `About 35.91 inches of precipitation in a normal year.`,
          `January is the driest month at 0.61 inches, followed by February at 0.78 and December at 1.05.`,
          `June is the wettest at 5.22 inches, with May close behind at 5.16.`,
          `January’s normal high is 28.7°F and its normal low 10.9°F; February’s low is 15.4°F.`,
          `July peaks at a normal high of 83.9°F.`,
        ],
      },
      {
        p: `Three months in a row with normal highs at or below about 34°F, and the least precipitation of the year in those same months, set up the conditions people feel indoors from December through February.`,
      },
      { h: 'Single-digit nights and furnace air' },
      {
        p: `Very cold air can carry only a small amount of water vapor. Warm that 11-degree January air to room temperature and its relative humidity drops sharply, because the moisture didn’t increase but the air’s capacity did. That’s why a heated apartment on Lincoln Way or a house in north Ames can feel parched by February. Dry indoor air speeds evaporation from the tear film, the layer of oil, water and mucus that keeps the eye’s surface smooth between blinks.`,
      },
      {
        list: [
          `Run a cleaned humidifier in the bedroom, and empty and dry it as the maker directs.`,
          `Point baseboard heaters, space heaters and floor registers away from beds and desks.`,
          `Keep thermostats moderate; every extra degree means drier air.`,
          `In a car, use the floor heat setting once the windshield is clear.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) goes into sizes and upkeep.`,
      },
      { h: 'Dorms, labs and Parks Library' },
      {
        p: `Iowa State University shapes daily life in Ames, and most students spend long hours at screens in heated buildings through the coldest months. Residence hall rooms often have a radiator or heating unit right beside the desk or bed. Engineering and design students can spend whole evenings in CAD or coding sessions, and focused screen work cuts the blink rate. Fewer, shallower blinks give the tear film more time to thin.`,
      },
      {
        list: [
          `Move the desk or bed a foot or two away from the heater if the room allows it.`,
          `Lower the screen so your eyes look slightly down; more of the eye stays covered.`,
          `Take a short break each hour during finals week and blink slowly a few times while you look across the room.`,
          `Keep your bottle in a backpack, not in a car left in a commuter lot through a January night.`,
        ],
      },
      {
        p: `[Dry eyes while studying for exams](/guides/dry-eyes-while-studying) has a fuller routine for long study stretches.`,
      },
      { h: 'Wind across open farmland' },
      {
        p: `Ames sits among wide, flat fields, and winter wind crossing open ground hits the face directly on a walk across central campus or while scraping a windshield. Cold wind dries the eyes and makes them water at the same time, which can feel confusing. Wraparound sunglasses or ski goggles help on bitter days, and so does a scarf pulled up so your breath doesn’t fog your glasses. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains why cold, windy days are hard on the tear film.`,
      },
      { h: 'Game days at Jack Trice and Hilton' },
      {
        p: `A late-fall football game at Jack Trice Stadium means hours in cold wind, then a crowded car with the heater blasting. A winter basketball game at Hilton Coliseum swaps that for warm, dry arena air. Sunglasses for the day game, a few deliberate blinks during timeouts, and the car vents aimed at your hands on the drive home all help.`,
      },
      { h: 'Summer in Story County' },
      {
        p: `June and May are the wettest months in the Ames record, and July highs near 84°F are moderate. Outside, summer is usually the easiest season on the eyes. The exceptions are dusty field work, mowing and long hours in air-conditioned labs and offices, where cooled air blows across a desk all afternoon.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem dry, heated air creates. The Drug Facts panel gives the use as: {uses}. The directions read: {directions}. Before a first use, read this: {warnings}.`,
      },
      {
        p: `On storage, the label says: {storage}. A car on an Ames street on a January night drops well below that lower limit, so bring the bottle inside. The label also says: {milky}, so the color isn’t a surprise. Everything is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered to Ames' },
      {
        p: `We ship from Brentwood, Tennessee, to Ames, Gilbert, Nevada, Huxley and every other US address, including student housing. Buyers must be 18 or older, and checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order ahead of finals or a winter break trip. See the [Ames page](/eye-drops/ames-ia) and the [Iowa page](/eye-drops/state/iowa) for more.`,
      },
      { h: 'Signs you need an eye doctor' },
      {
        p: `A drop has limits, and the label names them: {stopUse} If dryness keeps returning even with a humidifier and better screen habits, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Ames, Iowa get in the winter?',
        a: `NOAA’s 1991–2020 normals for Ames Municipal Airport give January a normal high of 28.7°F and a normal low of 10.9°F. February’s normal low is 15.4°F.`,
      },
      {
        q: 'What is the driest month in Ames, Iowa?',
        a: `January, with 0.61 inches of precipitation in NOAA’s 1991–2020 normals for the Ames airport. February is next at 0.78 inches, and June is the wettest month at 5.22.`,
      },
      {
        q: 'Why do my eyes get so dry in Iowa State dorms?',
        a: `In winter, dorm heating warms very cold, dry outside air, which drops its relative humidity indoors. Add long hours at a screen, which cuts blinking, and the tear film evaporates faster.`,
      },
      {
        q: 'Can I get eye drops shipped to Ames?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Ames homes and student housing. Shipping is {shipping}, free on {freeBottles} or more bottles, and buyers must be 18 or older.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-bloomington-in:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid BMG: BLOOMINGTON MONROE COUNTY AP, IN, elev 831 ft.
   *   Saved: .daily-job/acis1119/BMG.json, .daily-job/b/mint_BMG.json
   *   (normal max Jan 38.7 F, Jul 85.0, Aug 84.4; normal min Jan 21.9 F, Feb 24.6,
   *   Jul 64.3; precip Jun 5.09 (wettest), Apr 4.94, Jul 4.89, Feb 2.67 (driest),
   *   annual 46.92 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-bloomington-in',
    title: 'Dry eye relief in Bloomington, Indiana',
    description:
      'Bloomington gets nearly 47 inches of rain a year, yet eyes still feel dry in heated lecture halls and cooled summer rooms. NOAA’s numbers and relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Bloomington is a wet place, with about 46.92 inches of precipitation a year in NOAA’s normals for Monroe County Airport, so dry eyes here usually come from indoor air and screens rather than the weather. Furnace heat from December through February and air conditioning in humid summers both dry the tear film. Keep vents off your face, blink fully when studying, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Bloomington’s weather in NOAA’s normals' },
      {
        p: `The figures here come from NOAA’s 1991–2020 climate normals for Bloomington Monroe County Airport, about 831 feet above sea level southwest of the city:`,
      },
      {
        list: [
          `About 46.92 inches of precipitation in a normal year, spread fairly evenly across the calendar.`,
          `June is the wettest month at 5.09 inches, with April at 4.94 and July at 4.89.`,
          `February is the driest month, and even it averages 2.67 inches.`,
          `Normal highs are 38.7°F in January and 85.0°F in July.`,
          `January’s normal low is 21.9°F, and July’s is 64.3°F.`,
        ],
      },
      {
        p: `No month in the record averages less than about two and a half inches. That rules out the long rainless stretch other regions deal with, and it points the finger indoors.`,
      },
      { h: 'Why a rainy town still has dry eyes' },
      {
        p: `Relative humidity describes how full the air is compared with what it could hold at its temperature. A January morning near 22°F holds very little water even when it feels damp. Once a furnace warms that air to 70 degrees, the same moisture spread across warmer air makes the room dry. The tear film, a thin layer of oil, water and mucus, loses water faster in that air, and eyes can start to feel scratchy or tired by evening.`,
      },
      {
        list: [
          `Keep a humidifier in the bedroom from the first cold snap through March.`,
          `Rearrange so your desk or reading chair isn’t in the stream of a heating vent.`,
          `Older rental houses near campus often have radiators or baseboard heat; don’t sleep with your head right beside them.`,
          `Turn the heat down a little at night and use an extra blanket instead.`,
        ],
      },
      { h: 'Lecture halls, libraries and finals week' },
      {
        p: `Indiana University fills Bloomington with students, and many of them spend long winter days in heated lecture halls, the Wells Library and practice rooms, then go home to study at a laptop. Concentration slows blinking, and many blinks during reading only close partway. Over a few hours, that leaves the tear film thin and uneven, and vision may flicker until a full blink resets it.`,
      },
      {
        list: [
          `At each page break or scroll, finish a full blink; it sounds small and it adds up.`,
          `Look out a window or across the room for a moment between assignments.`,
          `Keep the laptop below eye level instead of propping it on a stack of books.`,
          `Dim screen brightness at night to match the room.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why focused screen work leaves eyes drier.`,
      },
      { h: 'Humid summers and air conditioning' },
      {
        p: `Bloomington summers bring July highs near 85°F and plenty of rain, so the outdoor air is rarely what dries the eyes. Air conditioning is a different story. A window unit in an apartment, a car’s dashboard vents, or a cold office in July all blow dry, cooled air across the face. Aim vents away from your eyes, and give your eyes a few slow blinks after stepping from the heat into a cold room.`,
      },
      { h: 'Lake Monroe, quarries and the Little 500' },
      {
        p: `Lake Monroe, south of town, is the largest lake entirely in Indiana, and a breezy afternoon on a boat means wind and glare off the water. Wraparound sunglasses block both. The limestone country around Bloomington adds another hazard for people who work in the quarries or cut stone: dust. Safety glasses are the first line there, followed by rinsing your face and washing your hands before touching your eyes. Spring brings the Little 500 bicycle race, and riders and fans alike spend hours in wind and sun; sunglasses and a bottle kept in a shaded bag make the day easier.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the use as: {uses}. The directions say: {directions}. The label also cautions: {warnings}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car parked through a January night or a closed car in a sunny July lot can move past either end of that range, so carry the bottle with you. Don’t let the dropper touch your eye, fingers or anything else; the label’s wording is: {tip}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Bloomington' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Bloomington, Ellettsville, Nashville in Brown County and every other US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order before you run low, and leave enough time before a break if you’re heading home. The [Bloomington page](/eye-drops/bloomington-in) and the [Indiana page](/eye-drops/state/indiana) have more, and [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) helps parents sending a bottle to campus.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says when to stop: {stopUse} If dryness keeps coming back through the school year, or you aren’t sure dryness is what you’re feeling, book an exam. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Bloomington, Indiana get?',
        a: `About 46.92 inches in a normal year, according to NOAA’s 1991–2020 normals for Bloomington Monroe County Airport. June is the wettest month at 5.09 inches, and February the driest at 2.67.`,
      },
      {
        q: 'Why do my eyes feel dry at IU in the winter?',
        a: `Heated classrooms, libraries and dorms warm cold winter air, which lowers its relative humidity indoors. Long study sessions at a screen also cut blinking, so the tear film evaporates faster.`,
      },
      {
        q: 'How cold does Bloomington, IN get in January?',
        a: `NOAA’s 1991–2020 normals for the Monroe County Airport give January a normal high of 38.7°F and a normal low of 21.9°F.`,
      },
      {
        q: 'Can I send eye drops to a student at Indiana University?',
        a: `Yes. Quell ships to any US address, including Bloomington apartments and campus housing. Use the student’s name and address at checkout and your own email to follow the tracking.`,
      },
    ],
  },


  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-gulfport-ms:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid GPT: GULFPORT - BILOXI AIRPORT, MS, elev 16 ft.
   *   Saved: .daily-job/acis1119/GPT.json, .daily-job/b/mint_GPT.json
   *   (normal max Jul 90.4 F, Aug 90.7, Jan 61.3; normal min Jan 42.4 F, Jul 74.9,
   *   Aug 74.6; precip Jul 7.21 (wettest), Jun 6.89, Aug 6.53, Oct 3.71 (driest),
   *   annual 62.82 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-gulfport-ms',
    title: 'Dry eye relief in Gulfport, Mississippi',
    description:
      'Gulfport averages nearly 63 inches of rain a year, so dry eyes there usually come from air conditioning, beach wind and glare. NOAA’s numbers and relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Gulfport’s air is rarely dry outside. NOAA’s normals for Gulfport–Biloxi Airport show about 62.82 inches of rain a year and summer highs near 90°F, so dry eyes on the Coast usually come from air conditioning that runs most of the year, wind and sand on the beach, and glare off the Sound. Keep vents off your face, wear wraparound sunglasses, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'The Coast’s climate in NOAA’s records' },
      {
        p: `NOAA’s 1991–2020 climate normals for Gulfport–Biloxi Airport, only about 16 feet above sea level and a few miles inland from the beach, show a very wet, warm year:`,
      },
      {
        list: [
          `About 62.82 inches of precipitation in a normal year.`,
          `July is the wettest month at 7.21 inches, with June at 6.89 and August at 6.53.`,
          `October is the driest month, and it still averages 3.71 inches.`,
          `Normal highs reach 90.4°F in July and 90.7°F in August, with summer lows near 75°F.`,
          `January is mild, with a normal high of 61.3°F and a normal low of 42.4°F.`,
        ],
      },
      { h: 'Why eyes feel dry in such a humid place' },
      {
        p: `If you live in Gulfport, the outdoor air in July feels heavy, not dry. The problem is the other side of the door. Air conditioning in homes, cars, stores and offices runs from spring well into fall, and it cools air partly by pulling water out of it. A vent blowing at your face sends that drier air straight across the tear film, the thin layer of oil, water and mucus that covers the eye, and the water in it evaporates faster. Going back and forth between steamy outdoor air and a cold building from morning to evening can leave eyes feeling scratchy by evening.`,
      },
      {
        list: [
          `Close or redirect the dashboard vents nearest your face, and use the lower vents once the car cools.`,
          `Move a desk or recliner out of the direct path of a ceiling vent or window unit.`,
          `Point the bedroom fan at your body rather than your face.`,
          `Set the thermostat a little higher at night, so the system cycles less.`,
        ],
      },
      {
        p: `[Why are my eyes dry when it’s humid?](/guides/why-are-my-eyes-dry-when-it-is-humid) explains the humidity puzzle in more detail.`,
      },
      { h: 'Beach wind, sand and the Mississippi Sound' },
      {
        p: `Harrison County’s long sand beach runs along US 90 right in front of Gulfport, and an afternoon there means sea breeze, blowing sand and sun reflecting off water and pale sand at once. Glare makes people squint, and squinting shortens blinks. Wind speeds evaporation, and a grain of sand can scratch at an eye already running low on tears.`,
      },
      {
        list: [
          `Wear wraparound sunglasses that block wind from the sides.`,
          `Sit with your back to the breeze when you can.`,
          `Don’t rub your eyes with sandy fingers; rinse your hands with clean water first.`,
          `Keep your bottle in a shaded bag, not on a towel in the sun.`,
        ],
      },
      { h: 'Fishing, boating and the Ship Island run' },
      {
        p: `The harbor in Gulfport is the jumping-off point for the ferry to Ship Island, and charter and pier fishing are part of life on the Coast. Hours on the water mean steady wind and bright reflected light, often with salt spray. Polarized sunglasses cut glare, and a brimmed hat helps. On a long day, step into the cabin or shade now and then and give your eyes a few slow, full blinks.`,
      },
      { h: 'Casino floors, the port and shift work' },
      {
        p: `Gulfport’s casinos, the Port of Gulfport and the Naval Construction Battalion Center all keep people working long or late shifts. Casino floors and offices are cooled and ventilated around the clock, and dealers and security staff spend hours under bright light while focusing on cards, chips or monitors, which cuts blinking. Port and base work outside brings sun, heat and wind instead. In both cases, the habits are similar: glasses outdoors, vents redirected indoors, and deliberate full blinks during focused work.`,
      },
      { h: 'October, and the short winter' },
      {
        p: `October is the driest month in the airport record and one of the most pleasant times to be outside, which is when festivals and outdoor events pick up. Less air conditioning means less dry indoor air, though breezy days still call for sunglasses. Winter is brief, with January lows in the low 40s, but on cold snaps people switch on heat pumps and space heaters, and that warmed air can feel dry at night. Keep space heaters pointed away from the bed.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the issue in cold, dry indoor air. Its Drug Facts panel lists the use as: {uses}. The directions say: {directions}. Read the caution before first use: {warnings}.`,
      },
      {
        p: `Heat is the bigger storage risk on the Coast. The label says: {storage}. A car parked at the beach or the casino lot in August can get far hotter than that inside, so keep the bottle with you or indoors. Under “Do not use,” the panel lists: {doNotUse}. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering Quell in Gulfport' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Gulfport, Long Beach, Pass Christian, Biloxi and every other US address. Check out as a guest, pay {shipping} for shipping, or get free shipping on {freeBottles} or more bottles. We don’t promise a delivery date, so order before you run out, and if a storm is in the forecast, wait until the mail is moving normally. The [Gulfport page](/eye-drops/gulfport-ms) and the [Mississippi page](/eye-drops/state/mississippi) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop only goes so far, and the label says where: {stopUse} If dryness keeps coming back despite redirecting the AC and wearing sunglasses, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Gulfport, Mississippi get a year?',
        a: `About 62.82 inches in a normal year, according to NOAA’s 1991–2020 normals for Gulfport–Biloxi Airport. July is the wettest month at 7.21 inches, and October the driest at 3.71.`,
      },
      {
        q: 'Why do my eyes feel dry on the Mississippi Gulf Coast?',
        a: `The outdoor air is humid, but air conditioning runs most of the year, and cooled air blowing toward your face speeds evaporation from the tear film. Beach wind, sand and glare off the water add to it.`,
      },
      {
        q: 'How hot does Gulfport get in the summer?',
        a: `NOAA’s 1991–2020 normals for Gulfport–Biloxi Airport give July a normal high of 90.4°F and August 90.7°F, with lows near 75°F.`,
      },
      {
        q: 'Can I get Quell delivered in Gulfport or Biloxi?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Gulfport and Biloxi. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-ogden-ut:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid OGD: OGDEN HINKLEY AIRPORT, UT, elev 4449 ft.
   *   Saved: .daily-job/acis1119/OGD.json, .daily-job/b/mint_OGD.json
   *   (normal max Jul 91.3 F, Aug 88.7, Jan 35.7; normal min Jan 21.2 F, Dec 22.4,
   *   Jul 64.8; precip May 2.17 (wettest), Apr 1.97, Jul 0.35 (driest), Aug 0.72,
   *   Sep 1.06, Jun 1.12, annual 16.36 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-ogden-ut',
    title: 'Dry eye relief in Ogden, Utah',
    description:
      'Ogden sits near 4,450 feet, with July highs above 91°F and just 0.35 inches of rain that month. NOAA’s figures and day-to-day dry eye relief in Weber County.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Ogden’s dry eyes come from altitude and a parched July. NOAA’s normals for Ogden-Hinckley Airport, at about 4,450 feet, show July highs near 91°F with only 0.35 inches of rain, and about 16 inches of precipitation a year. Wear sunglasses or goggles outdoors, keep heater and AC vents off your face, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Ogden’s climate at Hinckley Airport' },
      {
        p: `NOAA’s 1991–2020 climate normals for Ogden-Hinckley Airport, on the valley floor southwest of downtown at about 4,449 feet, describe a semi-arid city at the foot of the Wasatch:`,
      },
      {
        list: [
          `About 16.36 inches of precipitation in a normal year.`,
          `May is the wettest month at 2.17 inches, and April follows at 1.97.`,
          `July is by far the driest at 0.35 inches, with August at 0.72.`,
          `Normal highs reach 91.3°F in July and 88.7°F in August.`,
          `January’s normal high is 35.7°F and its normal low 21.2°F.`,
        ],
      },
      { h: 'A dry city, nearly a mile up' },
      {
        p: `At about 4,450 feet, Ogden’s air is thinner and the sun stronger than at sea level, and the low annual precipitation keeps the air dry for much of the year. Dry air pulls water from the tear film faster, the thin layer of oil, water and mucus that keeps the eye’s surface smooth. Strong sun leads to squinting, and squinting shortens blinks. People who move here from wetter places often notice their eyes, lips and skin all feel drier within a few weeks.`,
      },
      { h: 'July, the year’s dry peak' },
      {
        p: `The jump from May’s 2.17 inches to July’s 0.35 is the sharpest swing in Ogden’s record. By mid-summer, foothill grass is brown, afternoon heat runs past 90, and air conditioning or evaporative coolers run in many homes. Both blow air across the face. A hike up Waterfall Canyon or the bench trails above Weber State adds direct sun and dry wind.`,
      },
      {
        list: [
          `Hike or ride early, before the afternoon heat and glare build.`,
          `Wear wraparound sunglasses with side coverage on trails and on the water at Pineview Reservoir.`,
          `Aim car and home vents away from your eyes.`,
          `Carry the bottle in a shaded pack pocket; a hot trailhead lot is no place for it.`,
        ],
      },
      { h: 'Ski days at Snowbasin and Powder Mountain' },
      {
        p: `Snowbasin, Powder Mountain and Nordic Valley sit within a short drive up Ogden Canyon, and winter weekends bring cold wind on the lifts, bright sun off the snow and even thinner air at the top. Goggles cover more of the eye than sunglasses and block the wind that dries the tear film. In the canyon, wind funnels through the narrow walls, so keep goggles on until you’re inside the lodge. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers the mountain side in more detail.`,
      },
      { h: 'Winter in the valley: furnaces and inversions' },
      {
        p: `Back in town, January lows near 21°F mean furnaces run for months, and warmed indoor air is dry air. Winter inversions on the Wasatch Front can also trap haze in the valley for days at a stretch, which keeps many people indoors with the heat on. A bedroom humidifier, registers pointed away from beds and a lower thermostat at night help through the season.`,
      },
      { h: 'Hill Air Force Base and the flight line' },
      {
        p: `Hill Air Force Base, just south of Ogden, is a major employer in northern Utah, and many residents work there or at the aerospace and defense contractors nearby. Flight line and hangar work brings wind, exhaust and engine wash, plus open sun on the ramp in summer. Inside, maintenance planning, engineering and logistics jobs are long screen days. The protective eyewear your job requires comes first; in an office, blink fully and step away from the monitor now and then.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the main problem in dry, high-altitude air. The Drug Facts panel lists the use as: {uses}. The directions say: {directions}. Read the caution before a first use: {warnings}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car at a trailhead in July can get hotter than that inside, and one parked at the Snowbasin lot in January gets colder, so keep the bottle in an inside pocket. The panel also says: {milky}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered to Ogden' },
      {
        p: `We ship from Brentwood, Tennessee, to Ogden, North Ogden, Roy, South Ogden and every other US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order before your bottle runs low. See the [Ogden page](/eye-drops/ogden-ut) and the [Utah page](/eye-drops/state/utah), or compare the [Provo guide](/guides/dry-eye-relief-provo-ut) for Utah County.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Here’s what the label says about stopping: {stopUse} If your eyes stay dry after you’ve covered the vents, the sun and the screens, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that need prompt care.`,
      },
    ],
    faq: [
      {
        q: 'What is the elevation of Ogden, Utah?',
        a: `Ogden-Hinckley Airport, the city’s NOAA climate station, sits at about 4,449 feet. Neighborhoods on the east bench toward the mountains are higher.`,
      },
      {
        q: 'Why are my eyes so dry in Ogden?',
        a: `Ogden is dry and high, with about 16 inches of precipitation a year and almost none in July in NOAA’s normals. Dry air, strong sun and months of furnace or AC use all speed evaporation from the tear film.`,
      },
      {
        q: 'What is the driest month in Ogden, UT?',
        a: `July, with 0.35 inches of precipitation in NOAA’s 1991–2020 normals for Ogden-Hinckley Airport. May is the wettest month at 2.17 inches.`,
      },
      {
        q: 'Should I wear goggles skiing at Snowbasin if my eyes get dry?',
        a: `Goggles cover more of the eye than sunglasses and block the cold, dry wind on lifts and runs, which helps the tear film. Keep them on until you’re indoors.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-danbury-ct:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid DXR: DANBURY MUNICIPAL AP, CT, elev 453 ft.
   *   Saved: .daily-job/acis1119/DXR.json, .daily-job/b/mint_DXR.json
   *   (normal max Jan 35.9 F, Jul 82.4; normal min Jan 18.1 F, Feb 19.7, Dec 23.9,
   *   Jul 61.6; precip Sep 4.81 (wettest), Aug 4.62, Feb 2.69 (driest),
   *   annual 48.03 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-danbury-ct',
    title: 'Dry eye relief in Danbury, Connecticut',
    description:
      'Danbury averages January lows near 18°F, so heat runs for months even with 48 inches of rain a year. NOAA’s numbers and dry eye relief for Hat City.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Danbury is mostly about winter heat and long commutes. NOAA’s normals for Danbury Municipal Airport show about 48 inches of precipitation a year but January lows near 18°F, so furnaces and car heaters run for months. Use a bedroom humidifier, keep vents off your face, blink fully on the train and at screens, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Danbury’s climate in NOAA’s records' },
      {
        p: `NOAA’s 1991–2020 climate normals for Danbury Municipal Airport, about 453 feet above sea level near I-84 on the city’s west side, show a wet, four-season inland climate:`,
      },
      {
        list: [
          `About 48.03 inches of precipitation in a normal year.`,
          `September is the wettest month at 4.81 inches, with August at 4.62.`,
          `February is the driest at 2.69 inches.`,
          `January’s normal high is 35.9°F and its normal low 18.1°F; February’s low is 19.7°F.`,
          `July’s normal high is 82.4°F, with lows near 62°F.`,
        ],
      },
      {
        p: `Inland and higher than the Sound shore towns, Danbury runs colder at night in winter. That matters more for dry eyes than rainfall does.`,
      },
      { h: 'Why cold nights mean dry indoor air' },
      {
        p: `Cold air holds very little moisture. When a furnace or boiler warms 18-degree January air to room temperature, the water in it stays the same while its capacity rises, so the room’s relative humidity drops. That dry air pulls water from the tear film, the layer of oil, water and mucus over the eye. Many older homes in Danbury’s neighborhoods have radiators or baseboard heat, and a chair or bed right next to one gets the driest air in the room.`,
      },
      {
        list: [
          `Run a cleaned humidifier in the bedroom from November into March.`,
          `Move reading chairs and beds away from radiators and baseboard units.`,
          `Lower the thermostat a few degrees at night.`,
          `Keep a pan of water or a humidifier near a wood stove or pellet stove if you have one.`,
        ],
      },
      { h: 'The commute: I-84, Route 7 and Metro-North' },
      {
        p: `Danbury is a commuter city. Plenty of people drive I-84 toward Waterbury and Hartford or across the New York line, take Route 7 south toward Norwalk, or ride the Metro-North Danbury Branch toward the coast and New York. A winter car with the defroster on high, or a heated train car with a laptop open the whole way, both dry the eyes.`,
      },
      {
        list: [
          `In the car, send heat to the floor and windshield, not the face vents.`,
          `On the train, look up from the screen at each station and blink slowly a few times.`,
          `Sit away from the heater vents along the wall of the train car if seats allow.`,
          `Wear sunglasses for the low winter sun on I-84 at rush hour.`,
        ],
      },
      { h: 'Office, lab and hospital shifts' },
      {
        p: `Danbury’s employers include hospital, research and corporate offices, and many of those jobs mean hours at a monitor in sealed, heated buildings. Focused screen work cuts the blink rate, and partial blinks leave the lower part of the eye drier. Set the monitor slightly below eye level, take short breaks to look across the room, and keep any desk fan or heater from blowing toward your face. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has a desk checklist.`,
      },
      { h: 'Candlewood Lake and summer' },
      {
        p: `Candlewood Lake, the largest lake in Connecticut, sits just north of the city, and summer weekends bring boating, swimming and long afternoons in sun and wind. Glare off the water and steady breeze both dry the eyes, so wraparound sunglasses are worth packing. Summer here is wet, with August and September the rainiest months, and air conditioning indoors is the bigger cause of dry eyes than the weather.`,
      },
      { h: 'Fall foliage and the Hat City’s trails' },
      {
        p: `Fall is a favorite season in Danbury, the old Hat City, and leaf-peeping drives through the hills and hikes at Tarrywile Park bring cool wind and the first heated mornings. Leaf blowers stir up dust and debris in October and November; glasses help when you’re clearing the yard.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits the heated-air problem a Connecticut winter creates. The Drug Facts panel lists the use as: {uses}. The directions read: {directions}. Before first use, note the caution: {warnings}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car at the Danbury train station through a January day can drop well below that, so carry the bottle in a coat pocket. And because the label says: {tip}, keep the cap on between uses. The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Ordering Quell to Danbury' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Danbury, Bethel, Brookfield, New Fairfield, Ridgefield and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order before you run low. The [Danbury page](/eye-drops/danbury-ct) and the [Connecticut page](/eye-drops/state/connecticut) have more local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label sets clear limits: {stopUse} If your eyes stay dry through the heating season, even with a humidifier and better habits on the commute, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Danbury, CT get in the winter?',
        a: `NOAA’s 1991–2020 normals for Danbury Municipal Airport give January a normal high of 35.9°F and a normal low of 18.1°F.`,
      },
      {
        q: 'How much rain does Danbury get a year?',
        a: `About 48.03 inches in a normal year, according to NOAA’s 1991–2020 normals for Danbury Municipal Airport. September is the wettest month at 4.81 inches, and February the driest at 2.69.`,
      },
      {
        q: 'Why do my eyes get dry on the Metro-North train?',
        a: `Train cars are heated in winter, and most riders spend the trip reading a phone or laptop, which cuts blinking. Dry, warm air plus fewer blinks lets the tear film evaporate faster.`,
      },
      {
        q: 'Does Quell ship to Danbury, Connecticut?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Danbury and nearby towns. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-kenosha-wi:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org StnData),
   *   sid ENW: KENOSHA REGIONAL AP, WI, elev 733 ft.
   *   Saved: .daily-job/acis1119/ENW.json, .daily-job/b/mint_ENW.json
   *   (normal max Jan 31.3 F, Feb 34.8, Dec 36.6, Jul 83.8; normal min Jan 16.4 F,
   *   Feb 18.9, Jul 61.7; precip Feb 1.07 (driest), Jan 1.19, Dec 1.53,
   *   Jun 3.69 (wettest), Apr 3.63, annual 31.88 in; snowfall missing)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers used.
   */
  {
    slug: 'dry-eye-relief-kenosha-wi',
    title: 'Dry eye relief in Kenosha, Wisconsin',
    description:
      'Kenosha’s winter brings January lows near 16°F and its driest months, so heated air dries eyes indoors. NOAA’s numbers and practical relief for Kenosha.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `In Kenosha, dry eyes track the heating season. NOAA’s normals for Kenosha Regional Airport show January lows near 16°F, and December through February are the driest months, with February at just 1.07 inches. Heated homes, warehouses and train cars dry the tear film. Humidify the bedroom, keep vents off your face, wear glasses in lake wind, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Kenosha’s weather, from the regional airport' },
      {
        p: `NOAA’s 1991–2020 climate normals for Kenosha Regional Airport, about 733 feet above sea level on the city’s west side near I-94, a few miles inland from the lake, show:`,
      },
      {
        list: [
          `About 31.88 inches of precipitation in a normal year.`,
          `February is the driest month at 1.07 inches, then January at 1.19 and December at 1.53.`,
          `June is the wettest month at 3.69 inches, with April at 3.63.`,
          `January’s normal high is 31.3°F and its normal low 16.4°F.`,
          `July’s normal high is 83.8°F, with lows near 62°F.`,
        ],
      },
      {
        p: `The cold months and the dry months line up. From December through February, the outside air is cold and carries little water, and that’s the air furnaces warm and blow through every building in town.`,
      },
      { h: 'Heated air from December to March' },
      {
        p: `Warming cold air without adding water lowers its relative humidity, so a house heated against a 16-degree night ends up with very dry indoor air. That air speeds evaporation from the tear film, the oil, water and mucus layers that keep the eye comfortable between blinks. Eyes may feel scratchy at bedtime, or tired after an evening of TV with the furnace cycling.`,
      },
      {
        list: [
          `Run a clean humidifier in the bedroom through the heating season.`,
          `Keep beds, couches and desks out of the stream from floor registers.`,
          `Turn the thermostat down at night and add a blanket.`,
          `Change furnace filters on schedule so the system isn’t straining.`,
        ],
      },
      { h: 'Warehouse and distribution work along I-94' },
      {
        p: `The I-94 corridor through Kenosha County and Pleasant Prairie is lined with distribution centers and manufacturing plants, and many residents work long shifts inside them. Those buildings are huge and often drafty, with overhead heaters, dock doors opening to cold wind, and cardboard dust in the air. Scanning labels and reading handheld screens also cuts blinking. Safety glasses required on the floor also shield the eyes from drafts and dust. On breaks, step away from heaters, blink slowly a few times, and wash your hands before touching your eyes. [Dry eyes for warehouse workers](/guides/dry-eyes-for-warehouse-workers) has more for shift work.`,
      },
      { h: 'The Metra ride to Chicago' },
      {
        p: `Kenosha is the northern end of Metra’s Union Pacific North Line, and a lot of people ride it toward Chicago. That’s well over an hour each way in a heated car in winter, often reading or working on a laptop. Look up at each stop and finish a few slow blinks, pick a seat away from the heater vents if you can, and dim your screen to match the light in the car.`,
      },
      { h: 'Lake Michigan wind on the harbor and beaches' },
      {
        p: `Kenosha’s lakefront, from the harbor and the streetcar line downtown to Simmons Island Beach and the Carthage College shoreline, gets wind straight off Lake Michigan. Cold lake wind in late fall and early spring dries the eyes and makes them water at the same time. Wraparound sunglasses or a hat with a brim block much of it, and turning your back to a strong gust helps more than you’d expect. In summer, the lake breeze is gentler, but glare off the water calls for sunglasses.`,
      },
      { h: 'Students at Parkside and Carthage' },
      {
        p: `Students at UW-Parkside and Carthage College spend winter evenings at laptops in heated rooms, often next to a radiator or a heating unit under the window. Move the desk away from it if you can, keep the screen slightly below eye level, and take short breaks to look across the room.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem dry, heated air creates. The Drug Facts panel lists the use as: {uses}. The directions say: {directions}. The panel cautions: {warnings}.`,
      },
      {
        p: `On storage, the label says: {storage}. A car parked at the Metra lot on a January day falls well below that, so keep the bottle in an inside pocket or a bag you carry. If the solution ever changes from how the label describes it ({milky}), the label’s “Do not use” line applies: {doNotUse}. The [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Ordering Quell to Kenosha' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Kenosha, Pleasant Prairie, Somers, Bristol, Paddock Lake and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order before you run low. The [Kenosha page](/eye-drops/kenosha-wi) and the [Wisconsin page](/eye-drops/state/wisconsin) have local details, and readers to the north can see the [Milwaukee guide](/guides/dry-eye-relief-milwaukee-wi).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label’s stop-use list: {stopUse} If dryness lingers after you’ve fixed the vents and added a humidifier, an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Kenosha, Wisconsin get in January?',
        a: `NOAA’s 1991–2020 normals for Kenosha Regional Airport give January a normal high of 31.3°F and a normal low of 16.4°F.`,
      },
      {
        q: 'What is the driest month in Kenosha?',
        a: `February, with 1.07 inches of precipitation in NOAA’s 1991–2020 normals for Kenosha Regional Airport. June is the wettest month at 3.69 inches.`,
      },
      {
        q: 'Why do my eyes get dry working in a warehouse in Kenosha?',
        a: `Big distribution buildings use overhead heaters in winter, dock doors let in cold wind, and cardboard dust fills the air. Reading scanners and screens also cuts blinking, so the tear film dries faster.`,
      },
      {
        q: 'Can I order Quell to Kenosha or Pleasant Prairie?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Kenosha and Pleasant Prairie. Shipping is {shipping}, and {freeBottles} or more bottles ship free.`,
      },
    ],
  },


  {
    slug: 'dry-eyes-for-plumbers',
    title: 'Dry eyes for plumbers',
    description:
      'Crawl space dust, attic heat, torch work and headlamp focus all dry a plumber’s eyes. Practical habits for the job, and where a lubricating drop fits.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Plumbers get dry eyes from the places the work happens: dusty crawl spaces, hot attics, drafty basements, torch heat near water heaters, and long stretches staring into a dark cabinet under a headlamp, which cuts blinking. Wear safety glasses, keep the torch and van vents away from your face, take blink breaks between fittings, and use a lubricating drop as its label directs, away from the work area and with clean hands.`,
      },
      { h: 'Why plumbing is hard on the eyes' },
      {
        p: `The tear film, a thin layer of oil, water and mucus, keeps the front of the eye smooth and comfortable, and each blink spreads a fresh coat. Anything that speeds evaporation or slows blinking leaves the eye drier. A plumber’s day stacks up several of those at once: dry or dusty air, heat on the face, cold drafts, and focused close work where you forget to blink. None of it is unusual on its own. The trouble is the number of hours, and doing it day after day.`,
      },
      { h: 'Crawl spaces' },
      {
        p: `Crawling under a house to reach a supply line or a drain stack puts your face inches from dirt, old insulation, cobwebs and whatever has settled on the joists. Every movement knocks something loose, and a lot of it falls toward your eyes when you look up. The air is often still and stale, and you may be working on your back for a long time.`,
      },
      {
        list: [
          `Wear sealed safety glasses or goggles, not just regular glasses; dust gets in around the sides.`,
          `Shine the headlamp a little ahead of your hands so you’re not staring into a bright spot.`,
          `When something falls in your eye, don’t rub. Get out, clean your hands, and rinse with clean water.`,
          `Brush off your hair and collar before you take your glasses off outside the crawl space.`,
        ],
      },
      { h: 'Attics and second-floor runs' },
      {
        p: `Attic work for plumbers usually means vent stacks, supply lines in cold climates, or a water heater or tank placed up there. In summer, attic air is hot and dry, and loose-fill insulation drifts up with every step. A face mask that fits well helps your lungs; it can also push warm breath up behind your glasses, so check that the top seals or the lenses will fog and you’ll be wiping them with dirty gloves. Keep attic jobs short where you can, and come down for air and a few slow blinks.`,
      },
      { h: 'Basements, mechanical rooms and water heaters' },
      {
        p: `Basements are often damp, but a furnace room in winter can be the driest air in the house. Swapping a water heater or working on a boiler puts you right next to the heat source and the draft it creates. When the burner fires or the flue is open, warm air rises past your face.`,
      },
      {
        list: [
          `Shut off the appliance and let it cool before you open it up whenever the job allows.`,
          `Stand to the side of a draft hood or open flue, not over it.`,
          `If the basement has a dehumidifier running, keep its exhaust from blowing at your face while you work.`,
        ],
      },
      { h: 'Soldering, brazing and cutting' },
      {
        p: `Sweating copper fittings puts a torch flame close to your face, with radiant heat and flux fumes rising off the joint. Brazing runs hotter and brighter. Cutting cast iron or old galvanized pipe throws grit, and cutting PVC sends plastic shavings in every direction. Each one is a reason to wear eye protection, and your employer’s or local safety requirements come first. For comfort, angle your face away from the rising heat, take a breath and a few blinks between joints, and let the fitting cool before leaning in to inspect it.`,
      },
      { h: 'Under the sink with a headlamp' },
      {
        p: `Some of the hardest work on the eyes is the quiet kind: lying in a cabinet, focused on a compression nut or a faucet connection a foot from your face, holding still. When people concentrate like that, they blink less, and many blinks only close partway. The tear film thins, and by the time the job is done your eyes may feel gritty or tired. Put down the wrench every few minutes, look out of the cabinet at something across the room, and blink fully a few times.`,
      },
      { h: 'Drain cleaning and chemicals' },
      {
        p: `Snaking a drain or jetting a line can splash dirty water, and some jobs involve drain cleaners or other chemicals. Wear eye protection whenever there’s a chance of splash. If any chemical gets in your eye, follow the product’s label and get medical help right away. A lubricating drop is not for that; it’s for ordinary dryness. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what needs urgent care.`,
      },
      { h: 'The van between calls' },
      {
        p: `Hours of driving between jobs add heater or AC air on the face. Aim dashboard vents at your hands and chest, and use the floor setting in winter once the windshield is clear. Glare on bright days makes you squint, so keep sunglasses in the van. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) covers the drive in more detail.`,
      },
      { h: 'Using a lubricating drop on the job' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the use as: {uses}. The directions say: {directions}. That rhythm fits a work day: before the first call, at lunch and at the end of the shift.`,
      },
      {
        list: [
          `Wash your hands with soap and water first; pipe dope, flux and drain gunk shouldn’t go anywhere near your eyes.`,
          `Use drops in the cab or a clean room, not in a crawl space or next to an open drain.`,
          `Follow the label: {tip}.`,
          `Read the caution before first use: {warnings}.`,
        ],
      },
      { h: 'Where to keep the bottle' },
      {
        p: `The label’s storage line: {storage}. A van in July or January can go well past that range, especially a bottle tossed on the dashboard or left in a toolbox. Keep it in a jacket pocket or a lunch bag you bring inside. If you wear contact lenses on the job, Quell’s label doesn’t cover lenses, so ask your eye doctor first. You can order as a guest and have it shipped to your home or shop; shipping is {shipping} and orders of {freeBottles} or more bottles ship free. [Buy Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop isn’t the answer for something stuck in the eye, a chemical splash or an injury. The label is clear about stopping: {stopUse} If dryness keeps returning even after you’ve changed how you work, an eye doctor can find the cause and decide what to do. Electricians face many of the same tight spaces; [dry eyes for electricians](/guides/dry-eyes-for-electricians) has their version.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in crawl spaces?',
        a: `Crawl spaces are dusty and still, and you often work face-up with debris falling toward you. Dust irritates the eye, and focused work under a headlamp cuts blinking, so the tear film dries faster.`,
      },
      {
        q: 'Should plumbers wear safety glasses when soldering?',
        a: `Yes. Sweating copper and brazing put heat, flux fumes and the chance of spatter near your face, so eye protection is the first step. Follow any safety rules your employer or jurisdiction sets.`,
      },
      {
        q: 'When can a plumber use eye drops on the job?',
        a: `Between calls, with clean hands, in the van or a clean room rather than in a crawl space or near an open drain. Quell’s label directions are: {directions}.`,
      },
      {
        q: 'What should I do if drain cleaner splashes in my eye?',
        a: `Follow the first aid directions on the product’s label and get medical help right away. A lubricating eye drop is for everyday dryness, not chemical splashes.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-veterinarians-and-vet-techs',
    title: 'Dry eyes for veterinarians and vet techs',
    description:
      'Surgery lights, microscope work, dental cleanings, kennel air and late charting all dry the eyes of vets and vet techs. Habits that help through a shift.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Veterinarians and veterinary technicians get dry eyes from close, focused work that cuts blinking, such as surgery, dental cleanings, microscope slides and records, plus heated or air-conditioned clinic air and dusty barns on farm calls. Wear eye protection for dental and splash work, build full blinks into procedures, keep vents off your face, and use a lubricating drop for your own eyes as its label directs, with clean hands and away from patients.`,
      },
      { h: 'Why clinic work dries your eyes' },
      {
        p: `Blinking spreads the tear film, the thin layer of oil, water and mucus over the eye, and anything that slows blinking or speeds evaporation leaves the eye drier. In a busy practice, people hold their focus on small, moving targets for long stretches: a vein for a catheter, a suture line, a slide, a patient chart. Concentration like that cuts blink rate, and many blinks during focused work only close halfway. Then there’s the air: heated or cooled clinics, a surgery suite kept cool, and kennels with exhaust fans running.`,
      },
      { h: 'Surgery, masks and bright lights' },
      {
        p: `Spays, neuters and longer soft-tissue cases keep you under a bright overhead light with a mask on and your eyes fixed on a small field. A mask that isn’t sealed at the nose sends warm, moist breath upward, which fogs glasses or loupes and tempts you to touch your face. Pinch the nose wire snugly, and use the moment between closing layers or while waiting for the next instrument to blink slowly and completely a few times.`,
      },
      { h: 'Dental cleanings and splash' },
      {
        p: `Veterinary dentistry is some of the messiest work in the building. Ultrasonic scalers and polishers throw a fine spray of water and debris, and the techs who do most cleanings may run several in a day. Wear protective eyewear or a face shield for every dental, as your practice’s safety rules require. Glasses also block the airflow from suction and the room’s vents. If something does splash into your eye, rinse it at the eyewash station and follow your clinic’s protocol.`,
      },
      { h: 'Microscope work and lab reads' },
      {
        p: `Cytology, blood smears, fecal floats and ear swabs all mean time at the microscope, often squeezed in between appointments. Staring into an eyepiece cuts blinking further. Look up after each slide, focus across the room for a moment, and blink fully before the next one. Adjust the eyepieces and the stool height so you’re not leaning in hard, which tends to make people hold their eyes wide open. [Dry eyes from looking through a microscope](/guides/dry-eyes-from-looking-through-a-microscope) has more on lab setups.`,
      },
      { h: 'Kennels, grooming and cleaning' },
      {
        p: `Kennel wards and grooming areas fill with hair, dander and dust from bedding, and dryers blow that air around. Cleaning brings disinfectant fumes into an enclosed room. Keep your face out of the stream from a high-velocity dryer, step out to the hallway for clean air when you can, and wash your hands well before touching your face. If you’re sensitive to a cleaning product, ask about ventilation or a mask; that’s a workplace question as much as an eye one.`,
      },
      { h: 'Records, imaging and the end of the day' },
      {
        p: `Medical records, radiograph review, estimates and client callbacks keep many vets at a screen after the last appointment. Screens cut blinking much like a microscope does. Lower the monitor slightly below eye level, take a short break between charts, and dim the brightness at night if you’re charting from home. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why it matters.`,
      },
      { h: 'Farm calls and large-animal work' },
      {
        p: `Large-animal and mixed-practice vets add barns full of hay dust, open pens in the wind and long drives between farms. Wraparound safety glasses keep dust and wind out, and they protect against a swinging tail or head at the chute. In the truck, aim the heater or AC at your hands instead of your face.`,
      },
      { h: 'Emergency shifts and late-night fatigue' },
      {
        p: `Emergency and specialty hospitals run late shifts, and tired people blink less completely. Late nights also mean hours in conditioned air with fewer breaks. If your eyes feel scratchy at 3 a.m., step away from the ward, close your eyes for a moment, and finish a few full blinks before going back in.`,
      },
      { h: 'Using a lubricating drop at work' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its use as: {uses}. The directions say: {directions}. That rhythm fits a clinic day: before appointments start, at lunch and at the end of the shift.`,
      },
      {
        list: [
          `Use it in the break room or office, away from patients, surgery and cleaning chemicals.`,
          `Wash your hands first, then follow the label: {tip}.`,
          `Read the caution before first use: {warnings}.`,
          `Keep your bottle with your own things, labeled with your name, so it doesn’t end up mixed in with clinic supplies.`,
        ],
      },
      {
        p: `For storage, the label says: {storage}. A truck on farm calls can run past that range in summer or winter, so keep the bottle in a jacket or bag rather than the dash. If you wear contact lenses at work, Quell’s label doesn’t cover lenses, so ask your eye doctor before using it. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label is direct: {stopUse} A splash, a scratch from a patient or something stuck in the eye calls for prompt care, not a lubricating drop. If dryness keeps returning even after you’ve changed your routine, an eye doctor can find the cause and decide what to do. Shopping for a vet in your life? [Christmas gifts for a veterinarian](/guides/christmas-gifts-for-a-veterinarian) has ideas.`,
      },
    ],
    faq: [
      {
        q: 'Why do vet techs get dry eyes?',
        a: `Vet techs spend hours on close, focused tasks such as dental cleanings, catheter placement and lab slides, and that kind of concentration cuts blinking. Heated or cooled clinic air and kennel dust add to the problem.`,
      },
      {
        q: 'Should vet techs wear eye protection during dental cleanings?',
        a: `Yes. Ultrasonic scalers and polishers throw a spray of water and debris, so protective eyewear or a face shield belongs on for every dental, following your practice’s safety rules.`,
      },
      {
        q: 'Can a veterinarian use eye drops during a shift?',
        a: `For their own eyes, yes, between appointments and with clean hands, in a break room or office rather than near patients. Quell’s directions read: {directions}.`,
      },
      {
        q: 'How can vets reduce eye strain from microscope work?',
        a: `Look up after each slide and focus across the room for a moment, blink fully before the next one, and set the eyepieces and stool so you aren’t leaning hard into the scope.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-translators',
    title: 'Dry eyes for translators',
    description:
      'Two-pane CAT tools, dense source PDFs, terminology lookups and deadline weeks dry a translator’s eyes. Desk setups and habits that help, and where drops fit.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Translators get dry eyes from hours of close reading on screens: comparing source and target segments side by side, searching glossaries and term bases, and squinting at scanned PDFs, all of which cut blinking. Set screens slightly below eye level, enlarge small text, break after each batch of segments, keep heater and AC vents off your face, and use a lubricating drop as its label directs. See an eye doctor if dryness keeps returning.`,
      },
      { h: 'Why translation is hard on the eyes' },
      {
        p: `Written translation is reading twice. You read the source closely, hold its meaning, then read your own target text back to check it, often several times. Eyes move constantly between two columns or two windows, and each pass demands concentration. When people concentrate on a screen, they blink less, and many of those blinks close only partway. The tear film, the thin layer of oil, water and mucus that keeps the eye’s surface smooth, gets less chance to renew. After a full day of segments, eyes can feel gritty, tired or hot.`,
      },
      { h: 'Working in a CAT tool' },
      {
        p: `Most professional translation happens in computer-assisted translation tools, which split the screen into source and target columns, with translation memory matches, term base hits and QA warnings crowded around them. That layout invites a fixed, forward stare and lots of small text.`,
      },
      {
        list: [
          `Raise the editor’s font size; most tools let you set it apart from the system font.`,
          `Use a second monitor for reference material instead of shrinking windows side by side on one.`,
          `Place both monitors so their tops sit at or slightly below eye level; looking a little down covers more of the eye with the lid.`,
          `At the end of each batch of segments, look away from the screen and blink slowly and fully a few times.`,
        ],
      },
      { h: 'Scanned PDFs and poor source files' },
      {
        p: `Not every job arrives as clean, editable text. Scanned contracts, faxed certificates and photographed handwritten forms make you peer at blurry characters, and people tend to widen their eyes and stop blinking when they strain to read. Zoom in rather than leaning toward the screen. If the source is very hard to read, it’s fair to ask the client for a better copy, which helps accuracy as much as comfort.`,
      },
      { h: 'Terminology research and reference reading' },
      {
        p: `Specialized work in legal, medical, financial or technical fields means a lot of time in dictionaries, term bases, parallel texts and manufacturer documentation. That reading is often done in short, intense bursts between segments, and the constant switching between tabs keeps the eyes moving and focused. Grouping lookups, and pausing between them, gives your eyes small breaks without slowing the job.`,
      },
      { h: 'Localization, subtitles and review' },
      {
        p: `Localization adds its own screens: software strings in a spreadsheet, website content in a CMS, or subtitles where you watch the same few seconds of video again and again to time a line. Subtitle work in particular holds the eyes on a moving image with frequent pauses and replays. Review and proofreading passes mean reading someone else’s text at a slow, deliberate pace. Each of these pulls the same trigger: steady focus, fewer blinks.`,
      },
      {
        list: [
          `Turn screen brightness down to match the room, and avoid a bright window behind the monitor.`,
          `Use dark mode or a warmer background in the evening if it’s easier for you to read.`,
          `In subtitle work, take a short break after each scene, not just each hour.`,
          `If you proof on paper, light the page well so you aren’t squinting.`,
        ],
      },
      { h: 'Deadline weeks and time zones' },
      {
        p: `Freelance translators often work for clients several time zones away, which can mean late nights or early mornings to deliver by the client’s morning. Rush jobs push long sessions with no real breaks. Tired eyes blink less completely. Plan breaks into the estimate when you quote the timeline, and if a job runs late into the night, stop for a few minutes each hour to close your eyes and rest them.`,
      },
      { h: 'The home office' },
      {
        p: `Most translators work from home, and the room matters. A desk under a ceiling vent or beside a space heater blows dry air across the eyes for hours at a time. In winter, heated indoor air has low relative humidity. Move the desk out of the airflow, use a humidifier in the room during heating season, and keep fans pointed at your body rather than your face. [Dry eyes for remote workers](/guides/dry-eyes-for-remote-workers) has more home-office setup ideas.`,
      },
      { h: 'How this differs from interpreting' },
      {
        p: `Interpreters work live, watching speakers or signers in real time, often on video. Translators work with text, at their own pace but for many more hours at a stretch. The eye load is different: less visual tracking of people, more sustained close reading. Sign language interpreters have their own guide at [dry eyes for sign language interpreters](/guides/dry-eyes-for-sign-language-interpreters).`,
      },
      { h: 'Using a lubricating drop at the desk' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its use as: {uses}. The directions say: {directions}. Many translators pair that with natural breaks: before the first job, at lunch and at the end of the working day.`,
      },
      {
        list: [
          `Wash your hands before using it, and follow the label: {tip}.`,
          `Read the caution before your first bottle: {warnings}.`,
          `The label notes: {milky}. A brief blur after a drop is a cue to wait a moment before going back to small text.`,
          `If you wear contact lenses, the label doesn’t cover lenses; ask your eye doctor first.`,
        ],
      },
      {
        p: `Ordering is simple: check out as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. [See the bottle and order](/#buy), or read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes tire quickly or text looks blurry even after rest, you may need an eye exam, and glasses set for screen distance are a question for your eye doctor. The label’s stop-use advice: {stopUse} An eye doctor can find the cause of lasting dryness and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired when translating?',
        a: `Translation means reading source and target text closely, back and forth, for hours. Concentrated screen reading cuts blinking, so the tear film thins and eyes start to feel tired, dry or gritty.`,
      },
      {
        q: 'How should translators set up their screens?',
        a: `Put monitor tops at or slightly below eye level, enlarge the editor font, use a second monitor for references, and match screen brightness to the room. Take a short break after each batch of segments.`,
      },
      {
        q: 'Is subtitle translation harder on the eyes?',
        a: `It can be, because you watch the same few seconds of video repeatedly while timing lines, which holds your focus with few blinks. Short breaks after each scene help.`,
      },
      {
        q: 'Can translators use eye drops while working?',
        a: `Yes, during breaks and with clean hands. Quell’s label directions are: {directions}. If you wear contact lenses, check with your eye doctor first, since the label doesn’t cover lenses.`,
      },
    ],
  },


  {
    slug: 'christmas-gifts-for-grandpa',
    title: 'Christmas gifts for grandpa',
    description:
      'Christmas gifts a grandpa will use: things for his chair, his workbench, his reading and his time with the grandkids, plus when eye drops make sense.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The Christmas gifts grandpas use most fit the way they already spend their days: a warm flannel or slippers for his chair, a good reading lamp, a photo book or calendar of the grandkids, tools or supplies for his hobby, and help with the tablet for video calls. If he’s mentioned dry, scratchy eyes from reading or TV, a bottle of lubricating drops can go in his stocking once you’ve checked the label’s allergy caution.`,
      },
      { h: 'Start with how he spends his day' },
      {
        p: `The easiest way to pick a gift for a grandpa is to picture an ordinary Tuesday for him. Where does he sit? What does he read or watch? Is he out in the garage, on a lake, at the golf course, or in the kitchen? A gift that slots into that routine gets used. One that asks him to start a new hobby often sits in its box. Ask his spouse or whoever sees him most what he complains about running out of, or what he’s been making do with. That answer is usually the gift.`,
      },
      { h: 'For his chair and his reading' },
      {
        list: [
          `A reading lamp with a bright, warm light that clamps or stands right beside his chair.`,
          `A subscription to the paper or magazine he likes, in print if that’s what he prefers.`,
          `A thick, soft blanket or a flannel shirt for winter evenings.`,
          `Slippers with a firm sole that are easy to get on and off.`,
          `Large-print crossword or puzzle books, if small print has started to bother him.`,
        ],
      },
      {
        p: `Good light matters for comfort. Reading in dim light can make people squint and lean in, and long stretches with the paper or a book are exactly the kind of focused time when people blink less.`,
      },
      { h: 'For the workbench, the garden or the lake' },
      {
        list: [
          `A quality set of the hand tool he uses most, or a magnetic tray that keeps screws from rolling away.`,
          `Clear safety glasses that fit over his regular glasses, for sawing, grinding or mowing.`,
          `A headlamp or work light for the garage and the basement.`,
          `Seed catalogs, a new pair of pruners, or kneeling pads for the garden.`,
          `Polarized sunglasses for fishing and boating, which cut glare off the water.`,
        ],
      },
      { h: 'Gifts from the grandkids' },
      {
        p: `For most grandfathers, the gift that matters most comes with the grandkids’ fingerprints on it. A photo book from the past year, a calendar with a picture for each month, a framed drawing, or a card where each grandchild writes one memory with him all land well. If the kids are old enough, a coupon for a fishing trip, a puzzle night or help in the yard gives him time with them, which is what many grandparents want most.`,
      },
      { h: 'Video calls and the tablet' },
      {
        p: `If grandpa lives far away, setting up a tablet or a digital photo frame that family can send pictures to can be the gift of the year. Plan to set it up with him in person or on a call, and write simple steps on a card. Long video calls and evenings scrolling photos are screen time, though, and screens cut blinking. A stand that holds the tablet at a comfortable height, a little below eye level, helps him look slightly down instead of holding it up to his face.`,
      },
      { h: 'When eye drops make sense in his stocking' },
      {
        p: `Eye drops are a practical gift, not a surprise one. They make sense when grandpa has mentioned that his eyes feel dry or scratchy, say after a long drive, an afternoon of football or the evening paper, or when you’ve seen him reach for drops already. Quell is a lubricating eye drop whose Drug Facts panel lists its use as: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits heated winter rooms and long hours reading.`,
      },
      {
        p: `Before buying, ask about two things, which [giving eye drops to a parent or grandparent](/guides/eye-drops-for-a-parent-or-grandparent) explains in more detail:`,
      },
      {
        list: [
          `Allergies. The label cautions: {warnings}. Quell contains emu oil.`,
          `Other eye drops. The label doesn’t cover using it with other drops, so if he uses anything prescribed, he should check with his eye doctor or pharmacist first.`,
        ],
      },
      {
        p: `Tuck a note in with it. The label says: {milky}, so a word that the color is normal saves him a worry. The directions, {directions}, are worth writing on the card in large print, along with a pointer to the [Drug Facts page](/drug-facts), which he can zoom in on a screen.`,
      },
      { h: 'Ordering a gift of Quell' },
      {
        p: `You can ship straight to his house: enter his name and address at checkout and your own email, so the tracking comes to you. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which can make sense if you’re buying one for him and one for yourself. We ship from Brentwood, Tennessee, and don’t promise a delivery date, so order in early December. If he lives alone, let him know a box is coming so it doesn’t sit on a cold porch; the label’s storage range is {storage}. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [See the bottle and order](/#buy).`,
      },
      { h: 'Small extras for the stocking' },
      {
        list: [
          `A soft cleaning cloth for his glasses, and a spare glasses case for the car.`,
          `Hand warmers for cold mornings outside.`,
          `His favorite candy, coffee or hot sauce.`,
          `A pocket notebook and a good pen.`,
        ],
      },
      {
        p: `If his eyes bother him more than dryness from a dim room would explain, or anything about his vision has changed, the gift that matters is a nudge toward an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth acting on.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a grandpa who has everything?',
        a: `Time and memories usually beat more things: a photo book of the grandkids, a planned outing with them, or a calendar with family pictures. Consumables he already uses, like coffee, a magazine subscription or eye drops if he mentions dry eyes, also get used.`,
      },
      {
        q: 'What can grandkids make for grandpa for Christmas?',
        a: `A framed drawing, a card where each grandchild writes a favorite memory with him, or coupons for a fishing trip, a puzzle night or help in the yard. Gifts that promise time together tend to mean the most.`,
      },
      {
        q: 'Are eye drops a good stocking stuffer for grandpa?',
        a: `They can be if he’s mentioned dry or scratchy eyes. Check first whether he has an egg or bird allergy, since Quell contains emu oil, and whether he uses prescribed drops, which the label doesn’t cover combining.`,
      },
      {
        q: 'Can I ship a Christmas gift straight to my grandpa’s house?',
        a: `Yes. Put his name and address at checkout and your email for tracking. Quell ships from Brentwood, Tennessee, to any US address, with no delivery date promised, so order early.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-bus-driver',
    title: 'Christmas gifts for a bus driver',
    description:
      'Thoughtful Christmas gifts for a school or city bus driver: cards from the kids, warm gear, coffee, comfort for the seat, and when eye drops fit.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Good Christmas gifts for a bus driver are small and practical: a card signed by the kids, a coffee shop gift card, hand warmers or warm gloves, an insulated travel mug that fits the cupholder, lip balm and hand cream for dry winter air, or a seat cushion. If they’ve mentioned dry, tired eyes from heater air and glare, a bottle of lubricating drops can join the bundle for use between runs, never while driving.`,
      },
      { h: 'School bus drivers and city transit drivers' },
      {
        p: `A school bus driver is often the first adult your child sees each morning and the last one at school each afternoon, and many families like to say thanks at Christmas. City and regional transit drivers are thanked less often, but riders who see the same driver every day sometimes want to. The gifts below suit both, though the delivery differs: a school driver can be handed a gift by a child on the last run before break, while a transit driver may have rules about accepting things on the bus. If your district or the transit agency has a policy on gifts to staff, follow it, and keep the value modest.`,
      },
      { h: 'Gifts the kids can give' },
      {
        list: [
          `A card signed by every kid on the route, or a drawing of the bus with the driver at the wheel.`,
          `A thank-you note from a parent that names something specific, like the way they wait for a slow walker.`,
          `A small box of cookies or candy wrapped well, since it may sit on the dash until the route is done.`,
          `A group gift card collected from several families on the same stop.`,
        ],
      },
      {
        p: `For a lot of drivers, the card means more than whatever comes with it.`,
      },
      { h: 'For cold mornings on the route' },
      {
        list: [
          `Hand warmers or rechargeable warmers for pre-trip inspections in the dark.`,
          `Warm, thin gloves that still allow a good grip on the wheel.`,
          `A knit hat or a neck gaiter for bus yard mornings and walk-around checks.`,
          `Wool socks for long days with the door opening at every stop.`,
        ],
      },
      { h: 'Coffee, the cupholder and the split shift' },
      {
        p: `School drivers often run a morning route, then a long gap, then an afternoon route; transit drivers may work split shifts too. Coffee and snacks fill those gaps. A coffee shop gift card is always used. An insulated, spill-proof travel mug is a better gift if you know it fits the cupholder or the spot they keep their drink, so ask another driver or look on the next ride. A small pouch of snacks for the layover rounds it out.`,
      },
      { h: 'Comfort in the driver’s seat' },
      {
        list: [
          `A lumbar pillow or seat cushion for hours of sitting.`,
          `Lip balm and hand cream, since heater air dries skin through the winter.`,
          `Polarized sunglasses for low morning and afternoon sun, if they don’t already have a pair they like.`,
          `A small gift card for a massage, if your group is pooling for something bigger.`,
        ],
      },
      { h: 'When eye drops fit the gift' },
      {
        p: `Driving a bus in winter means hours with the heater or defroster running, a door that opens to cold wind at every stop, and glare from low sun or headlights. All of that is hard on the tear film. If a driver has told you their eyes feel dry or tired by the end of a route, a bottle of lubricating drops is a useful addition. Quell’s Drug Facts panel lists its use as: {uses}, and it is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `A few points to pass along on the card or in person:`,
      },
      {
        list: [
          `Use it between runs, parked, never with the bus moving. [Dry eyes for bus drivers](/guides/dry-eyes-for-bus-drivers) explains timing and where to keep it on a shift.`,
          `The directions read: {directions}.`,
          `The label cautions: {warnings}. Quell contains emu oil, so ask about an egg or bird allergy first if you can.`,
          `The label’s storage range is {storage}, and a bus parked in the yard on a winter night or a summer afternoon can go past it, so the bottle belongs in a jacket or bag.`,
        ],
      },
      {
        p: `If the driver wears contact lenses, Quell’s label doesn’t cover lenses, so another gift may be the better choice.`,
      },
      { h: 'Ordering in time for the last day before break' },
      {
        p: `The last school day before winter break is the natural moment to give a school bus driver a gift, so order early. Quell ships from Brentwood, Tennessee, and we don’t promise a delivery date. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which helps if several families pool for gifts for a few drivers, or a parent buys one for the driver and one for a teacher. [See the bottle](/#buy) and the full label on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'What not to give' },
      {
        list: [
          `Anything that could distract on the road, like a gadget for the dashboard.`,
          `Scented items for the bus itself; air fresheners can bother riders.`,
          `Something that needs to be kept cold or hot until the route ends.`,
          `A big-ticket gift from one family, which can feel awkward to accept.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a school bus driver?',
        a: `A card signed by the kids, a coffee shop gift card, hand warmers or warm gloves, a travel mug that fits the cupholder, or lip balm and hand cream for winter heater air. Keep it modest and follow any district policy on gifts to staff.`,
      },
      {
        q: 'How much should you spend on a bus driver gift?',
        a: `Keep it modest. A card and a small gift card or a practical item are typical, and pooling with other families on the route lets you give something nicer together. Follow any district rule on staff gifts.`,
      },
      {
        q: 'Are eye drops a good gift for a bus driver?',
        a: `They can be if the driver has mentioned dry or tired eyes from heater air and glare. Remind them to use drops only when parked, and check about egg or bird allergies, since Quell contains emu oil.`,
      },
      {
        q: 'When should I give the bus driver a Christmas gift?',
        a: `The last ride before winter break is the usual moment for a school bus driver. Hand it over at the stop, or have your child give it when they get on the bus.`,
      },
    ],
  },

  {
    slug: 'are-eye-drops-a-good-white-elephant-gift',
    title: 'Are eye drops a good white elephant gift?',
    description:
      'Usually not on their own: white elephant gifts get stolen and swapped. When eye drops can work in a bundle, what to pair them with, and better picks.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Usually not on their own. In a white elephant exchange, gifts get opened in front of everyone and stolen back and forth, so a bottle could end up with someone who wears contact lenses, has an egg or bird allergy, or simply doesn’t want it. Eye drops can work as one useful item inside a bigger themed bundle, with the sealed carton and a note pointing to the label.`,
      },
      { h: 'How a white elephant exchange works' },
      {
        p: `Rules vary by group, but the core is the same: everyone brings one wrapped gift under an agreed spending limit, players draw numbers, and each person either opens a new gift from the pile or steals one already opened. Stolen gifts often get a limit on how many times they can change hands. Some groups lean toward funny gifts, some toward useful ones, and some toward both. The point is the game, not the match between giver and receiver.`,
      },
      {
        p: `That’s the opposite of a Secret Santa, where you shop for one person you drew. [Eye drops as a Secret Santa gift](/guides/eye-drops-as-a-secret-santa-gift) covers that situation; this guide is about the game.`,
      },
      { h: 'Why a bottle of eye drops is a weak pick on its own' },
      {
        list: [
          `You don’t pick the recipient. The bottle goes to whoever opens it or steals it last.`,
          `Opened in front of everyone, a health product can read as a joke about someone looking tired.`,
          `It doesn’t get stolen. Gifts in a white elephant are judged by whether people fight over them, and a single bottle rarely sparks a steal.`,
          `Quell’s label carries a caution: {warnings}. Quell contains emu oil, and you can’t check allergies for a room full of people.`,
          `Its label doesn’t cover use with contact lenses, so a lens wearer may not be able to use it without asking an eye doctor.`,
        ],
      },
      { h: 'When eye drops can work in a white elephant' },
      {
        p: `There are groups where a practical bundle does well. A white elephant at an office where everyone stares at screens, a “useful gifts only” round, or a family exchange where most people are adults you know can all make room for a bottle, as long as it’s part of something more fun. The key is that the bundle has to be worth stealing even for someone who never opens the eye drops.`,
      },
      {
        list: [
          `A “winter survival kit”: a fleece blanket, hand warmers, lip balm, cocoa mix and a bottle of eye drops for heated-room days.`,
          `A “screen break kit”: a desk plant, a funny mug, a microfiber cloth for glasses and a bottle of drops.`,
          `A “road trip kit”: snacks, a car phone mount, a sunglasses case and a bottle of drops, with a note to use them only when parked.`,
        ],
      },
      {
        p: `Whoever ends up with the bundle can pass the bottle along to someone who wants it if it isn’t for them, and the rest of the gift still stands.`,
      },
      { h: 'How to include drops the right way' },
      {
        list: [
          `Leave the carton sealed, so the label and the [Drug Facts](/drug-facts) panel are there to read.`,
          `Add a note with the essentials: what it’s for, that it contains emu oil, and that the label doesn’t cover contact lenses.`,
          `Mention the color. The label says: {milky}, which surprises people who expect clear drops.`,
          `Keep the gift at room temperature until the party; the label says: {storage}. A car trunk on a December afternoon can drop below that.`,
        ],
      },
      { h: 'Staying under the spending limit' },
      {
        p: `White elephant limits are usually low, so a bundle has to be planned. Check the current price of a {size} bottle on the [product page](/#buy) against your limit, and remember that shipping is {shipping} per order unless you buy {freeBottles} or more bottles. If you’re ordering for several exchanges, or adding a bottle for yourself, buying together can bring the per-bottle cost down. There are no promo codes, so the price you see is the price.`,
      },
      { h: 'Better white elephant gifts for a dry-eye crowd' },
      {
        p: `If your group is full of people who complain about dry offices and long screen days, these tend to get stolen more than a bottle of drops:`,
      },
      {
        list: [
          `A small cool-mist humidifier for a desk.`,
          `A heated throw blanket or a weighted lap blanket.`,
          `A sleep mask and a pair of cozy socks.`,
          `A desk lamp with adjustable warm light.`,
          `A good pair of wraparound sunglasses for winter glare.`,
        ],
      },
      { h: 'Ordering before the party' },
      {
        p: `Quell ships from Brentwood, Tennessee, and no delivery date is promised, so order well before the exchange. Ship to your own address so you can build the bundle. Checkout works as a guest for buyers 18 and older. An unopened bottle that ends up unwanted can be refunded within {returnDays} days of delivery without sending it back, so keep your order email until the exchange is over. [Are eye drops a good gift?](/guides/are-eye-drops-a-good-gift) covers giving drops to someone you choose.`,
      },
    ],
    faq: [
      {
        q: 'What makes a good white elephant gift?',
        a: `Something a lot of people in the room would want, so it gets stolen: cozy, useful or funny things that fit the spending limit. Items that only suit one person, like health products, tend to fall flat on their own.`,
      },
      {
        q: 'Can I put eye drops in a white elephant gift basket?',
        a: `Yes, as one item among several. Leave the carton sealed, add a note that it contains emu oil and that the label doesn’t cover contact lenses, and make sure the rest of the basket is worth stealing on its own.`,
      },
      {
        q: 'What is the difference between white elephant and Secret Santa?',
        a: `In Secret Santa you draw one person’s name and shop for them. In a white elephant, everyone brings a gift for the pile, and gifts are opened and stolen in a game, so you don’t know who will end up with yours.`,
      },
      {
        q: 'Are personal care items good for a white elephant?',
        a: `Usually only in a themed bundle. A single personal care item can feel like a comment on the person who opens it, and it may not suit them, while a kit with a blanket, cocoa and small extras appeals to almost anyone.`,
      },
    ],
  },


  {
    slug: 'how-do-i-know-which-eye-drops-to-use',
    title: 'How do I know which eye drops to use?',
    description:
      'Start with what your eyes feel, then match it to the Uses line on the Drug Facts label. A step-by-step way to pick an eye drop, and when to skip the aisle.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `You know which eye drops to use by matching what your eyes feel to the Uses line on each product’s Drug Facts label. For everyday dryness or mild irritation from screens, wind or heated air, look for a lubricating drop whose Uses cover dryness. Then check the warnings for allergies, whether it covers contact lenses, and directions that fit your day. Pain, vision changes or an injury mean an eye doctor first.`,
      },
      { h: 'Step 1: Name what you’re actually feeling' },
      {
        p: `“My eyes bother me” can mean a dozen different things, and eye drops are made for different jobs. Before reading any box, put the feeling into words. Does it feel dry, sandy or scratchy? Does it burn after a long day at a screen? Is it itchy? Is there pain, light sensitivity or blurred vision that doesn’t clear with blinking? Did something get into your eye? Write down when it happens too: only at work, only outdoors, only at night, or all the time.`,
      },
      {
        p: `That one sentence does most of the choosing for you, because the label on every over-the-counter drop is organized to answer the same question: what is this for?`,
      },
      { h: 'Step 2: Rule out the problems a drop shouldn’t handle' },
      {
        p: `Some symptoms aren’t a shopping question at all. Eye pain, sudden changes in vision, a chemical splash, an injury, or something stuck in the eye need prompt care. So does anything that keeps getting worse. Quell’s label puts its own stop-use rule this way: {stopUse} The same logic applies before you ever buy a bottle. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on.`,
      },
      { h: 'Step 3: Read the Uses line on the Drug Facts label' },
      {
        p: `Every over-the-counter eye drop sold in the US carries a Drug Facts panel in the same order: active ingredients, uses, warnings, directions, other information and inactive ingredients. The Uses line is the product’s job description, and it’s the fastest way to sort the shelf. If your eyes feel dry, look for a product whose Uses mention dryness. If they itch, look for one whose Uses mention itching, and so on.`,
      },
      {
        p: `Quell’s Uses line reads: {uses}. That makes it a lubricating drop, aimed at dryness and at protecting against further irritation. It doesn’t claim to do anything else, and a drop shouldn’t be used for something its label doesn’t list. [What are lubricating eye drops?](/guides/what-are-lubricating-eye-drops) explains what that category covers.`,
      },
      { h: 'Step 4: Check the warnings against your own situation' },
      {
        p: `After Uses, read Warnings closely, because this is where a product rules itself out for some people. For Quell, the panel says: {warnings}. The formula contains emu oil, so anyone with an egg or bird allergy should talk to a doctor before using it. Other drops have their own cautions about ingredients or conditions; read each one.`,
      },
      {
        list: [
          `Do you wear contact lenses? Check whether the label gives directions for lenses. Quell’s does not, so lens wearers should ask their eye doctor.`,
          `Do you use another eye drop, especially a prescribed one? Most labels, Quell’s included, don’t cover combining drops; ask the doctor who prescribed yours or a pharmacist.`,
          `Are you choosing for a child? Quell’s label doesn’t give directions for children, so that’s a question for a pediatrician or eye doctor.`,
        ],
      },
      { h: 'Step 5: Look at the directions and how they fit your day' },
      {
        p: `The directions tell you how often to use a drop and how much. Quell’s read: {directions}. Ask yourself whether that schedule fits your life. Someone who works a long shift might take a dose before work, at lunch and in the evening. Directions also tell you how quickly you’ll use a bottle, which matters when you compare prices: [comparing eye drop prices with shipping](/guides/comparing-eye-drop-prices-with-shipping) shows how to work it out.`,
      },
      { h: 'Step 6: Decide what matters to you in the ingredients' },
      {
        p: `Once a few products pass the label test, the ingredient lists help you choose between them. Some people prefer a preservative-free drop, especially if they’ll use it several times a day. Some want to know what the active ingredients do. Quell’s actives are {actives}, and its inactive ingredients are {inactives}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer that slows evaporation. [Are preservative-free eye drops worth it?](/guides/are-preservative-free-eye-drops-worth-it) covers that part of the decision.`,
      },
      { h: 'Step 7: Buy from a seller you can reach' },
      {
        p: `An honest label is only as good as the seller behind it. Buy from a store or site that lists a company name, an address and a way to contact a person. Quell is made by {company}, which can be reached at {phone} ({hours}). The site ships within the US only, checkout is as a guest for buyers 18 and older, and unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
      { h: 'A quick example' },
      {
        p: `Say your eyes feel gritty and tired every afternoon at the office, better on weekends, with no pain and clear vision once you blink. You don’t wear contacts and don’t use other drops. That pattern points to dryness from screen work and indoor air, which matches a lubricating drop’s Uses. You’d then check the allergy warning, read the directions, and pick the one whose ingredients and price suit you. You’d also move the desk out of the vent’s path and take screen breaks, because no drop changes the air you sit in.`,
      },
      { h: 'If nothing on the shelf seems right' },
      {
        p: `If you can’t find a drop whose Uses match what you feel, or you’re not sure what you’re feeling, that’s useful information in itself. An eye doctor can find the cause and decide what to do, and you can bring the labels of anything you’ve tried. The [dry eye self-check](/self-check) can help you organize what you’ve noticed first; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How do I choose the right eye drops for me?',
        a: `Name what you feel, rule out anything that needs a doctor, then read the Uses line on each Drug Facts label and pick a product whose Uses match. Check the warnings for allergies and contact lenses before you buy.`,
      },
      {
        q: 'Where do I find what an eye drop is for?',
        a: `On the Drug Facts panel, under “Uses.” Quell’s reads: {uses}.`,
      },
      {
        q: 'Should I ask a pharmacist which eye drops to use?',
        a: `A pharmacist is a good person to ask, especially if you take other medicines or use other eye drops. Bring the labels of anything you already use.`,
      },
      {
        q: 'What if I don’t know whether my eyes are dry or something else?',
        a: `Then see an eye doctor before choosing a drop, particularly if you have pain, vision changes or symptoms that keep coming back. An eye doctor can find the cause and decide what to do.`,
      },
    ],
  },

  {
    slug: 'how-often-should-i-take-a-break-from-screens',
    title: 'How often should I take a break from screens?',
    description:
      'Short, frequent breaks help your eyes more than one long one. How often to look away, what to do in the break, and how to make breaks stick at work.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `For your eyes, short and frequent beats long and rare. A common rule of thumb is the 20-20-20 rule: every 20 minutes, look at something about 20 feet away for about 20 seconds and blink fully. Add a longer break away from the screen every hour or two. Screens cut blinking, so the breaks are when your tear film catches up. If your eyes stay dry or blurry despite breaks, see an eye doctor.`,
      },
      { h: 'Why screens make breaks matter' },
      {
        p: `Each blink spreads a fresh coat of tears across the eye. The tear film is thin, with an oil layer on top, a watery layer in the middle and a mucus layer against the eye, and it starts to evaporate as soon as it’s spread. When you concentrate on a screen, you blink less often, and many of the blinks you do make close only partway. The tear film thins between blinks, and the eye’s surface starts to feel dry, gritty or tired ([how blinking spreads tears](/guides/how-blinking-spreads-tears) shows the mechanics). Your eyes also hold one close focus distance for a long time. A break deals with both: you blink more, and your eyes relax their focus.`,
      },
      { h: 'How often: the short break' },
      {
        p: `The 20-20-20 rule is easy to remember, and most people find it realistic once it’s habit. It isn’t a law of nature; it’s a reminder to look up regularly. If 20 minutes feels too often for the work you do, try every half hour, and adjust from there. What matters is that the breaks happen many times through a session, not once at the end.`,
      },
      {
        list: [
          `Look at something far away: out a window, down a hallway, or across the room.`,
          `While you look, blink slowly and completely several times, so the lids meet.`,
          `If you can, close your eyes gently for a few seconds.`,
          `Then go back to the screen.`,
        ],
      },
      { h: 'How often: the longer break' },
      {
        p: `Once every hour or two, stand up and leave the screen entirely for a few minutes. Walk to get water, step outside, or do a task that doesn’t involve a display. Phones don’t count as a break from screens; scrolling on your phone gives you the same close focus with the same reduced blinking. Longer breaks help the rest of your body too, which makes them easier to defend on a busy day.`,
      },
      { h: 'How to make breaks actually happen' },
      {
        p: `Almost everyone agrees with screen breaks and almost no one remembers to take them. Tie them to something that already happens:`,
      },
      {
        list: [
          `Set a quiet, repeating timer on your computer or watch.`,
          `Take a short break each time you send an email, finish a ticket or save a file.`,
          `Look away and blink while a file uploads, a page loads or a meeting is starting.`,
          `In video calls, look away from the screen for a moment when someone else is presenting.`,
          `Put a sticky note that says “blink” on the edge of your monitor; it works better than you’d think.`,
        ],
      },
      { h: 'Breaks for different kinds of screen work' },
      {
        p: `Work that holds your eyes very still, like reading dense documents, coding, spreadsheets or detailed design, tends to cut blinking the most, so breaks matter more there. Gaming and video editing add fast-moving images and long sessions. People who switch between screens and paper, or who are on their feet part of the day, may get natural breaks without trying. Notice how your eyes feel at the end of different kinds of days, and plan more breaks into the hard ones. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has desk setup advice that pairs well with breaks.`,
      },
      { h: 'Set up the screen so breaks go further' },
      {
        list: [
          `Place the screen slightly below eye level, so your eyelids cover more of the eye.`,
          `Match screen brightness to the room, and avoid a bright window behind or right next to the monitor.`,
          `Increase text size so you aren’t leaning in or squinting.`,
          `Move out of the direct airflow from heating or air-conditioning vents and desk fans.`,
          `In heated or air-conditioned rooms, consider a humidifier; dry air speeds evaporation from the tear film.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Breaks and a good setup come first, because they deal with why the eyes are drying. A lubricating drop can help with the dryness itself. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its use as: {uses}. The directions say: {directions}, so it fits a workday as a morning, midday and evening routine, not a replacement for breaks. Read the caution before first use: {warnings}. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the connection in more detail.`,
      },
      { h: 'When breaks aren’t enough' },
      {
        p: `If your eyes still feel dry, tired or blurry after you’ve built in breaks and fixed your setup, the cause may be something breaks can’t touch, like an out-of-date glasses prescription or something else an exam would find. An eye doctor can find the cause and decide what to do, and [optometrist or ophthalmologist](/guides/optometrist-or-ophthalmologist) explains which kind to book. Quell’s label also lists when to stop and ask a doctor: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How often should I look away from my computer screen?',
        a: `A common rule of thumb is every 20 minutes, for about 20 seconds, at something about 20 feet away. Blink fully while you look, and take a longer break every hour or two.`,
      },
      {
        q: 'Does looking at my phone count as a screen break?',
        a: `No. Your phone holds your eyes at a close focus distance and cuts blinking just like a computer screen. Look at something far away, or leave screens altogether for the break.`,
      },
      {
        q: 'How long should a screen break be?',
        a: `Short breaks of about 20 seconds many times an hour help the most for the eyes, plus a longer break of a few minutes away from all screens every hour or two.`,
      },
      {
        q: 'Do screen breaks help dry eyes?',
        a: `They help with the dryness screens cause, because you blink more often and more fully during a break. If dryness continues despite breaks, see an eye doctor.`,
      },
    ],
  },


  {
    slug: 'how-do-i-know-if-my-eyes-are-dry-or-tired',
    title: 'How do I know if my eyes are dry or just tired?',
    description:
      'Dry eyes feel gritty or burning and ease with blinking; tired eyes ache and ease with rest. A simple way to tell them apart, and what helps each one.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eyes usually feel gritty, sandy, burning or scratchy, and they ease for a moment when you blink fully or step out of dry or moving air. Tired eyes more often ache, feel heavy or struggle to refocus, and they ease with sleep or a break from close work. Many people have both at once after a long screen day. Pain, vision changes or symptoms that won’t settle need an eye doctor.`,
      },
      { h: 'Why the two get mixed up' },
      {
        p: `Both feelings tend to show up at the same time of day, after the same kinds of activity: long stretches at a computer, an evening of reading, a long drive. Focused close work makes your eyes hold one focusing distance for hours, and it also cuts blinking, which lets the tear film thin. So the same afternoon can leave you with tired focusing muscles and a dry eye surface together. Pulling them apart matters because the fixes are different: a lubricating drop speaks to dryness, while rest and breaks speak to eye fatigue.`,
      },
      { h: 'What dry eyes tend to feel like' },
      {
        list: [
          `Gritty or sandy, as if something small is in the eye.`,
          `Burning or stinging, often worse in heated, air-conditioned or windy air.`,
          `Scratchy when you blink.`,
          `Vision that blurs for a moment and clears after a few full blinks.`,
          `Watering that seems odd for eyes that feel dry; irritated eyes can make extra tears.`,
        ],
      },
      { h: 'What tired eyes tend to feel like' },
      {
        list: [
          `Heavy lids, or a wish to close your eyes.`,
          `A dull ache in or around the eyes, sometimes with a tension feeling across the forehead.`,
          `Slow refocusing when you look up from close work to something far away.`,
          `Difficulty concentrating on text that was easy to read in the morning.`,
          `Better after a night’s sleep, worse after a short one.`,
        ],
      },
      { h: 'A simple at-home test' },
      {
        p: `Next time your eyes bother you, try this in order, and notice what helps:`,
      },
      {
        list: [
          `Blink slowly and completely ten times. If your eyes feel noticeably better for a little while, dryness is likely part of it.`,
          `Look at something far away, out a window or across the room, for half a minute. If the ache eases and focusing gets easier, eye fatigue from close work is likely part of it.`,
          `Move away from any vent, fan or heater blowing toward your face. If that helps within a few minutes, dry or moving air was adding to it.`,
          `Think about last night. If you slept poorly, eye fatigue is a strong suspect, though lack of sleep can leave eyes feeling dry too.`,
        ],
      },
      {
        p: `This isn’t a medical test. It’s a way to notice patterns, which is useful in its own right and helpful to an eye doctor if you end up seeing one.`,
      },
      { h: 'Where and when it happens tells you a lot' },
      {
        p: `Keep track for a few days. Dryness tends to follow the air: it shows up in heated rooms in winter, under air conditioning in summer, in the car with the vents on high, on windy days, in airplane cabins. Eye fatigue tends to follow the work: it shows up after hours of focus no matter where you are, and fades on days with less close work. If your eyes feel fine on a weekend outdoors and bad every weekday afternoon at a desk, both may be at play. [Do eye drops help tired eyes?](/guides/do-eye-drops-help-tired-eyes) and [do eye drops help with eye strain?](/guides/do-eye-drops-help-with-eye-strain) go deeper on each side.`,
      },
      { h: 'What helps dry eyes' },
      {
        list: [
          `Blink fully, especially during screen work, where blinks tend to be partial.`,
          `Get out of the airflow: redirect vents and fans, and use a humidifier in dry, heated rooms.`,
          `Wear wraparound sunglasses outside on windy days.`,
          `Use a lubricating drop as its label directs.`,
        ],
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its use as: {uses}. The directions say: {directions}. Read the caution first: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'What helps tired eyes' },
      {
        list: [
          `Take frequent short breaks from close work and look at something far away.`,
          `Make text bigger and lighting better, so you aren’t leaning in or squinting.`,
          `Get enough sleep.`,
          `Have your eyes checked if you haven’t in a while; an out-of-date prescription makes eyes work harder.`,
        ],
      },
      {
        p: `A lubricating drop doesn’t change how hard your eyes work to focus. If what you feel is mostly ache and heaviness, breaks and rest will do more than drops. [How often should I take a break from screens?](/guides/how-often-should-i-take-a-break-from-screens) covers the timing.`,
      },
      { h: 'When it’s neither, and you need an eye doctor' },
      {
        p: `Some feelings aren’t dryness or eye fatigue. Real pain in the eye, light that hurts, vision that stays blurry after blinking and rest, sudden changes in vision, or an eye that looks or feels very different from the other one all need an eye doctor. Quell’s label lists when to stop and ask a doctor: {stopUse} An exam is how to find the cause, and an eye doctor can decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the urgent ones.`,
      },
    ],
    faq: [
      {
        q: 'How can I tell if my eyes are dry or strained?',
        a: `Dryness tends to feel gritty or burning and eases briefly with full blinks or getting out of dry air. Strain or eye fatigue tends to feel like an ache or heaviness and eases with rest and looking into the distance.`,
      },
      {
        q: 'Do dry eyes feel tired?',
        a: `They can. A dry eye surface often makes people feel their eyes are tired or heavy, especially late in the day, which is one reason the two get confused. Blinking fully and getting out of dry air helps you tell which is which.`,
      },
      {
        q: 'Why do my eyes feel tired but not sleepy?',
        a: `Eyes can feel tired from hours of close focus or from a dry surface even when you aren’t sleepy. Breaks that let you look far away help focusing fatigue, and blinking and moving out of dry air help dryness.`,
      },
      {
        q: 'Will eye drops help if my eyes are just tired?',
        a: `A lubricating drop speaks to dryness, not focusing fatigue. Quell’s label lists its use as: {uses}. If your eyes ache rather than feel dry, rest and breaks will help more.`,
      },
    ],
  },

  {
    slug: 'how-do-i-know-if-my-eyesight-is-getting-worse',
    title: 'How do I know if my eyesight is getting worse?',
    description:
      'Blur that clears when you blink is often a dry tear film; blur that stays, or a steady slide in what you can see, needs an eye exam. How to tell the difference.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Your eyesight may be getting worse if blur stays even after you blink and rest, if you need more light or longer arm’s length to read, if road signs or faces get harder to make out, or if one eye sees differently than the other. Blur that clears after a few full blinks is often a dry tear film instead. Only an eye exam can tell, and sudden changes need care right away.`,
      },
      { h: 'Blur that clears with blinking vs. blur that stays' },
      {
        p: `The front of the eye focuses light through a smooth layer of tears. When that layer dries and thins between blinks, as it does during screen work or in dry, heated air, the surface becomes uneven and vision can soften or flicker. A few full blinks spread a fresh, even coat, and the picture sharpens again. That kind of blur comes and goes with the conditions.`,
      },
      {
        p: `Blur that doesn’t clear with blinking, rest or a change of room is different. If it’s there in the morning after a good night’s sleep, in a humid bathroom and in the car, and it isn’t going away, it’s a reason to book an eye exam.`,
      },
      { h: 'Signs people commonly notice' },
      {
        list: [
          `Holding a phone, book or menu farther away to read it.`,
          `Needing brighter light to read than you used to.`,
          `Squinting to read road signs, TV captions or a whiteboard.`,
          `Trouble driving at night, or more trouble with glare from headlights.`,
          `Closing one eye to see something more clearly, or noticing that one eye sees differently than the other.`,
          `Eyes that tire quickly during close work you used to manage easily.`,
        ],
      },
      {
        p: `None of these tells you why your vision has changed. They tell you it’s time for an exam, where an eye doctor can measure your vision and look at the health of your eyes.`,
      },
      { h: 'Changes that need care right away' },
      {
        p: `Some changes shouldn’t wait for a routine appointment. Sudden loss of vision, eye pain, an eye injury, or a sudden change in how you see all call for prompt care. For an emergency, call your local emergency number. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more on what can’t wait.`,
      },
      { h: 'How dry eyes can feel like worse vision' },
      {
        p: `Dryness can fool people into thinking their eyesight is slipping. Late in a screen day, text looks soft. In a heated room in winter, the TV seems blurry by evening. On a long drive with the vents on, road signs look fuzzier. In each case, a few deliberate blinks often bring things back into focus for a while. If your vision is fine in the morning and only softens after hours of screen work or dry air, dryness is a likely part of it, though an exam is still the way to be sure.`,
      },
      {
        list: [
          `Notice whether blinking fully sharpens things, even briefly.`,
          `Notice whether it’s worse in heated or air-conditioned rooms, the car, or on a plane.`,
          `Notice whether it’s worse late in the day than early.`,
        ],
      },
      {
        p: `If the answers are yes, the habits that help dry eyes, like breaks, getting out of the airflow and a humidifier, may help. A lubricating drop may help with the dryness itself. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label lists its use as: {uses}. The directions read: {directions}. Note that a drop can blur vision briefly right after you put it in; [is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains why.`,
      },
      { h: 'What the label says about vision changes' },
      {
        p: `Quell’s label is clear that a lubricating drop isn’t for changes in vision: {stopUse} That applies to any drop you use. If you’re using drops and your vision isn’t clearing, or is getting worse, stop and see an eye doctor.`,
      },
      { h: 'Keep track before your appointment' },
      {
        p: `A few days of notes make an exam more useful. Write down when you notice blurry or changed vision, which eye, what you were doing, the room you were in, and whether blinking helped. List any eye drops or other products you use, and bring their labels; Quell’s full panel is on the [Drug Facts page](/drug-facts). Bring your current glasses too, even if you don’t think they’re the problem.`,
      },
      { h: 'Which kind of eye doctor to see' },
      {
        p: `For a gradual change, an optometrist can check your vision and update a glasses prescription, and refer you on if needed. For sudden changes or eye pain, seek prompt care. [Optometrist or ophthalmologist: which to see?](/guides/optometrist-or-ophthalmologist) explains the difference.`,
      },
    ],
    faq: [
      {
        q: 'Can dry eyes make your vision blurry?',
        a: `Yes, often briefly. When the tear film dries and thins, the eye’s surface becomes uneven and vision softens; a few full blinks usually sharpen it again. Blur that doesn’t clear with blinking needs an eye exam.`,
      },
      {
        q: 'How do I know if I need glasses?',
        a: `Common signs include holding things farther away to read, squinting at signs or captions, and needing more light. Only an eye exam can tell, so book one if you notice any of these.`,
      },
      {
        q: 'When is a change in eyesight an emergency?',
        a: `Sudden vision loss, eye pain, an eye injury, or any sudden change in how you see needs prompt care. Call your local emergency number for an emergency.`,
      },
      {
        q: 'Should I keep using eye drops if my vision is changing?',
        a: `No. Quell’s label says to stop and ask a doctor if you notice changes in your vision. A lubricating drop is for dryness, not for vision changes.`,
      },
    ],
  },

  {
    slug: 'how-often-should-i-see-an-eye-doctor-for-dry-eyes',
    title: 'How often should I see an eye doctor for dry eyes?',
    description:
      'There’s no single schedule: your eye doctor sets follow-ups for you. When to go sooner, how to make visits count, and what to bring along.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `There’s no single schedule for dry eyes; your eye doctor sets follow-up visits based on what they find and how you respond. Go on that schedule, and book sooner if dryness keeps coming back, gets worse, or comes with pain, light sensitivity or vision changes. If you’ve never had dry eyes checked and they bother you most days, that first exam is the place to start.`,
      },
      { h: 'Why no one can give you a single number' },
      {
        p: `Dry, gritty or scratchy eyes can have many causes, from screens and heated air to things only an exam would find. The right follow-up depends on which of those applies to you, how much the dryness affects your day, and what your eye doctor suggests trying. Two people with the same symptoms can end up with very different plans. That’s why the honest answer to “how often” is: as often as your eye doctor recommends for you, and sooner if something changes.`,
      },
      { h: 'If you haven’t been checked yet' },
      {
        p: `Many people manage occasional dryness with better habits and an over-the-counter lubricating drop. An exam makes sense when dryness is frequent, when it’s getting in the way of work, reading or driving, or when you aren’t sure dryness is what you’re feeling. [Should I see a doctor or try eye drops first?](/guides/should-i-see-a-doctor-or-try-eye-drops-first) walks through that choice.`,
      },
      {
        list: [
          `Your eyes feel dry most days, not only after a long screen session or a flight.`,
          `Habits like breaks, humidifiers and redirecting vents haven’t helped enough.`,
          `You find yourself wanting drops more often than the label directs.`,
          `You’re not sure whether it’s dryness, eye fatigue or something else.`,
        ],
      },
      { h: 'Reasons to go sooner than your next visit' },
      {
        p: `Some changes are reasons to book early or seek prompt care, whatever your schedule says:`,
      },
      {
        list: [
          `Eye pain, or light that hurts.`,
          `Changes in vision, or blur that doesn’t clear with blinking.`,
          `Dryness or irritation that gets worse instead of better.`,
          `Symptoms in one eye that are very different from the other.`,
          `Anything that got into the eye, or an injury.`,
        ],
      },
      {
        p: `Quell’s label lists its own stop-use signs: {stopUse} Those are a sensible line for any lubricating drop. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the emergencies.`,
      },
      { h: 'Seasons and life changes worth a check-in' },
      {
        p: `Dryness often changes with the calendar and with your routine. It’s worth mentioning to your eye doctor, or booking a visit, when:`,
      },
      {
        list: [
          `Winter heating season starts and your eyes are much worse than in summer.`,
          `You start a new job with more screen time, night shifts or a dusty workplace.`,
          `You move to a drier or higher place.`,
          `Your eyes start feeling different after a long trip or a stretch of late nights, and the change doesn’t settle.`,
        ],
      },
      { h: 'Making each visit count' },
      {
        p: `A visit is more useful when you bring information. Keep a short log for a week or two before: when your eyes felt dry, what you were doing, where you were, and what helped. Write down every product you put in your eyes and how often you use it. Bring the boxes, or for Quell, a printout or screenshot of the [Drug Facts page](/drug-facts). If you’ve tried the [dry eye self-check](/self-check), bring your answers; it’s not a diagnosis, but it organizes what you’ve noticed. [Questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) has a list to bring.`,
      },
      { h: 'Between visits' },
      {
        p: `Follow what your eye doctor suggested, and keep up the habits that help dry eyes in general: full blinks and regular breaks at screens, vents and fans aimed away from your face, a humidifier in dry, heated rooms, and sunglasses in wind. If you use a lubricating drop, follow its label. Quell’s directions are: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. If you use other eye drops, especially prescribed ones, ask your eye doctor before adding Quell, since its label doesn’t cover combining drops.`,
      },
      { h: 'Paying for eye care' },
      {
        p: `Eye exams and eye drops may be eligible expenses under a health savings account or flexible spending account, depending on your plan. [Can you use your HSA for vision care?](/guides/can-you-use-hsa-for-vision-care) covers the basics, and your plan administrator has the final word.`,
      },
    ],
    faq: [
      {
        q: 'Should I see an optometrist or ophthalmologist for dry eyes?',
        a: `Either can be a starting point for dry eyes. An optometrist can examine your eyes and refer you on if needed; for eye pain or sudden vision changes, seek prompt care.`,
      },
      {
        q: 'Can an eye doctor help with dry eyes?',
        a: `Yes. An exam is how to find what is behind frequent dryness, and an eye doctor can find the cause and decide what to do. Go right away for pain, light sensitivity or vision changes.`,
      },
      {
        q: 'What should I bring to a dry eye appointment?',
        a: `A short log of when your eyes felt dry and what you were doing, a list of every eye product you use and how often, the product labels, and your current glasses.`,
      },
      {
        q: 'How often do I need follow-up visits for dry eyes?',
        a: `Your eye doctor sets that based on what they find and how you respond. Book sooner if symptoms get worse or new ones appear.`,
      },
    ],
  },
]
