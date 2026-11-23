import type { Guide } from '@/lib/guide-types'
export const DAILY_20261123_D: Guide[] = [
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-elgin-il:
   * - https://data.rcc-acis.org/StnData, sid DPA, NOAA 1991-2020 monthly
   *   normals (raw: .daily-job/acis1123/DPA.json; lows from
   *   .daily-job/d/DPA-1123-extra.json). CHICAGO WEST CHICAGO DUPAGE AP, IL,
   *   elev 749 ft. Max: Jan 30.5, Feb 34.9, Mar 47.0, Apr 59.6, Jul 84.0
   *   (highest), Aug 82.0, Nov 47.7, Dec 35.4. Min: Jan 16.1, Feb 19.0, Mar
   *   28.3, Jul 63.3, Oct 42.0, Nov 31.1, Dec 21.4. Precip: Jan 1.27, Feb 1.24
   *   (driest), Dec 1.67, Apr 3.44, May 4.34 (wettest), Aug 3.84; Dec-Feb sum
   *   4.18; twelve monthly normals sum to 33.23 in. Snowfall "M", not used.
   * - The station is DuPage Airport in West Chicago, south of Elgin; named as such.
   * - relhum23.txt and wndspd23.txt have no row for this station: no humidity
   *   or wind figure. Aurora, IL (2026-11-19-a) uses a different station.
   */
  {
    slug: 'dry-eye-relief-elgin-il',
    title: 'Dry eye relief in Elgin, Illinois',
    description:
      'Near Elgin, NOAA’s normals show five months of freezing nights and a February that averages 1.24 inches. What that means for dry eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `In Elgin, dry-feeling eyes usually peak from November through March, when NOAA’s normals for the nearby DuPage Airport show lows below freezing and the furnace runs most hours. Cold air carries little moisture, and heating it dries it further. Steer vents and the car defroster away from your face, add a bedroom humidifier, take screen breaks, and use a lubricating drop as its label directs. Pain or vision changes go to an eye doctor.`,
      },
      { h: 'Where Elgin’s weather numbers come from' },
      {
        p: `Elgin has no station of its own in the federal normals set used here, so this page uses NOAA’s 1991–2020 climate normals for DuPage Airport in West Chicago, south of Elgin, as published through the National Weather Service’s NOWData pages. The airport sits about 750 feet above sea level, in the same band of far-west suburbs as Elgin. Read the figures as the climate of the area, not of your street.`,
      },
      {
        list: [
          `January’s normal high is 30.5°F, the only month that averages below freezing in the afternoon.`,
          `January’s normal low is 16.1°F, and December’s is 21.4°F.`,
          `November, December, January, February and March all have normal lows below 32°F.`,
          `July is the warmest month, with a normal high of 84.0°F.`,
          `February is the driest month at 1.24 inches of precipitation; May is the wettest at 4.34 inches.`,
          `The twelve monthly precipitation normals add up to about 33.2 inches.`,
        ],
      },
      { h: 'Five months of freezing nights' },
      {
        p: `The number that matters most for eyes in Elgin isn’t the January high. It’s that the normal low sits below freezing for five straight months, from November into March. That’s five months of the furnace cycling through the night, five months of scraping a windshield and running the defroster, and five months when the air outside holds so little water that warming it indoors leaves rooms parched. December through February together average only about 4.2 inches of precipitation at the airport.`,
      },
      {
        p: `None of that is unusual for northern Illinois, but it adds up. People often notice that their eyes feel fine in October and then gritty or tired by the second week of December, without anything else in their routine having changed. The change is the air.`,
      },
      { h: 'The morning routine in a cold house' },
      {
        list: [
          `Before bed, check where the bedroom register points. A vent aimed at the pillow blows warm, dry air across your face for hours.`,
          `Run a cool-mist humidifier in the bedroom, cleaned as its maker directs, and keep it out of the direct path of the vent.`,
          `If you wake with eyes that feel stuck or scratchy, give them a few minutes and some deliberate blinks before you reach for your phone.`,
          `Keep your bottle of drops in a drawer away from the window and the register, so it stays within the storage range on its label.`,
        ],
      },
      { h: 'Defroster season in the driveway' },
      {
        p: `A January morning in the low teens means the car’s defrost is usually on full for the first few minutes of any drive, blowing hot air up the glass and back into your face. Once the windshield is clear, switch to the floor setting and aim the dash vents at your chest. If you drive to work in the dark from November onward, the dashboard lights and oncoming headlights add another reason to keep your eyes comfortable. Put drops in before you leave or after you park, never while the car is moving.`,
      },
      { h: 'Spring brings the wet months' },
      {
        p: `From April into August, the airport’s normals show 3.4 to 4.3 inches of rain a month, with May the wettest. Outdoor air in those months carries far more moisture than winter air, and many people find their eyes are least bothersome then. The exceptions are windy days at a ballfield, long afternoons mowing, and the first warm weeks when the air conditioning comes on at work and home.`,
      },
      { h: 'Summer air conditioning' },
      {
        p: `July’s normal high of 84°F is mild by national standards, but it’s warm enough that central air runs through most of the summer in Elgin homes, offices and warehouses. Air conditioning removes moisture as it cools, and a desk under a ceiling diffuser gets a steady stream of that drier air. If your eyes bother you more at work than at home in July, look up before you look anywhere else: the vent may be the reason.`,
      },
      { h: 'Screens on long winter evenings' },
      {
        p: `By December, it’s dark in Elgin before most people leave work, and evenings move indoors to the couch and the laptop. Staring at a screen lowers how often you blink, and blinking is what spreads tears across the eye. Combine that with furnace air, and the evening is often when eyes feel worst. Every 20 minutes or so, look across the room for a few seconds and blink fully. A reading lamp that lights the room, not just the page, also keeps you from leaning in toward the screen.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its Drug Facts panel lists its uses: {uses}. The directions say: {directions}. Its active ingredients are {actives}, and it’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. One caution matters before you order: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `{appearance} The label also notes: {milky}. Store the bottle as directed: {storage}, which matters in a car glovebox in an Illinois January.`,
      },
      { h: 'Ordering Quell to Elgin' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, Elgin included, with guest checkout and no subscription. Shipping is {shipping}, or free on orders of {freeBottles} or more bottles. No delivery date is promised, so order before the winter weeks rather than during them. Prices and the cart are on the [home page](/#buy), and the [Elgin page](/eye-drops/elgin-il) and the [Illinois page](/eye-drops/state/illinois) collect local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for dryness and irritation, not for every eye complaint. The label says: {stopUse} Eye pain, a sudden change in vision, or discomfort that keeps coming back are reasons to book an appointment, where an eye doctor can find the cause and decide what to do. The guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Elgin, Illinois in winter?',
        a: `NOAA’s 1991–2020 normals for DuPage Airport, the station used here, put January’s normal high at 30.5°F and its normal low at 16.1°F. Lows average below freezing from November through March.`,
      },
      {
        q: 'What is the driest month in Elgin, IL?',
        a: `At DuPage Airport, February is the driest month in NOAA’s normals, at 1.24 inches of precipitation, with January close behind at 1.27 inches. May is the wettest at 4.34 inches.`,
      },
      {
        q: 'Why do my eyes feel drier in December than in October?',
        a: `In northern Illinois, December brings freezing nights and steady furnace use, and heating cold outdoor air leaves indoor air very dry. Dry, moving air speeds evaporation from the tear film, so the same routine can feel very different by midwinter.`,
      },
      {
        q: 'Can I get Quell delivered to Elgin, IL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to addresses across the US, including Elgin, with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-stephenville-tx:
   * - https://data.rcc-acis.org/StnData, sid SEP, NOAA 1991-2020 monthly
   *   normals (raw: .daily-job/acis1123/SEP.json; lows from
   *   .daily-job/d/SEP-1123-extra.json). STEPHENVILLE 9NNE, TX, a cooperative
   *   station 9 miles north-northeast of town, elev 1161 ft. Max: Jan 59.1,
   *   Feb 63.1, Apr 78.6, May 85.6, Jun 93.1, Jul 97.3, Aug 97.6 (highest),
   *   Sep 90.2, Oct 80.5, Nov 68.8, Dec 60.5. Min: Jan 30.9 (only month below
   *   32), Feb 34.9, Jul 70.6, Aug 69.6, Oct 51.5, Dec 33.1. Swings (max-min):
   *   Jan 28.2, Apr 28.4, Aug 28.0, Oct 29.0, Nov 27.7. Precip: Jan 1.84
   *   (driest), Jul 1.99, May 4.97 (wettest), Sep 3.32, Oct 3.32; twelve
   *   monthly normals sum to 34.13 in. Snowfall: Jan 0.4, Dec 0.3, all other
   *   months 0.0 (sum 0.7 in).
   * - relhum23.txt and wndspd23.txt have no row for this station: no humidity
   *   or wind figure. Weatherford (2026-11-12-b) and Fort Worth use other stations.
   */
  {
    slug: 'dry-eye-relief-stephenville-tx',
    title: 'Dry eye relief in Stephenville, Texas',
    description:
      'Stephenville averages a 28-degree daily temperature swing and four months above 90°F. NOAA’s numbers, and dry eye relief for ranch, road and home.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Stephenville’s dry-eye stretches are the hot months, when NOAA’s normals show highs above 90°F from June through September and July is one of the driest months, and the cool season, when furnaces and space heaters run against cold mornings. A wide daily temperature swing means switching between outdoor heat, truck AC and indoor air. Wear wraparound sunglasses outside, aim vents away from your face, and use a lubricating drop as labeled. See an eye doctor for pain or vision changes.`,
      },
      { h: 'The station north of town' },
      {
        p: `The figures on this page come from NOAA’s 1991–2020 climate normals for the Stephenville 9NNE cooperative station, which sits 9 miles north-northeast of Stephenville at about 1,160 feet above sea level. The numbers are published through the National Weather Service’s NOWData pages. A cooperative station is run by a trained volunteer or partner rather than at an airport, so it reads the open countryside around Stephenville more than the streets in town.`,
      },
      {
        list: [
          `August is the hottest month, with a normal high of 97.6°F; July is close at 97.3°F.`,
          `June, July, August and September all have normal highs at or above 90°F.`,
          `January’s normal high is 59.1°F and its normal low is 30.9°F, the only month that averages below freezing at night.`,
          `May is the wettest month, at 4.97 inches of precipitation.`,
          `January is the driest at 1.84 inches, and July is next at 1.99 inches.`,
          `The monthly precipitation normals add up to about 34.1 inches, and normal snowfall totals well under an inch a year.`,
        ],
      },
      { h: 'A 28-degree swing, most of the year' },
      {
        p: `At this station, the gap between the normal high and the normal low runs about 28 degrees in almost every month: 28.2 in January, 28.4 in April, 28.0 in August and 29.0 in October. In practice, that means mornings and afternoons feel like two different seasons. An October morning near 51°F calls for the truck heater; the afternoon near 80°F calls for the air conditioning. Eyes go from heated air to dry outdoor wind to cold vent air within a few hours, and every switch is another round of air moving across the tear film.`,
      },
      {
        list: [
          `Set the truck’s vents to the floor or the side windows, not the center vents aimed at your face.`,
          `Keep sunglasses on the dash so they go on as soon as you step out, morning or afternoon.`,
          `On a day with a big swing, a drop at lunch can be easier on your eyes than waiting until evening, as long as you stay within the label’s directions.`,
        ],
      },
      { h: 'June through September: heat and dry spells' },
      {
        p: `Four months of normal highs at or above 90°F put the summer in a different league from the rest of the year. July is the hottest month to work outside and, at 1.99 inches, also among the driest. Hot, dry, moving air is about as hard on the tear film as weather gets. People who spend long hours outdoors, feeding livestock, hauling hay, fixing fence or coaching an evening practice, often notice their eyes feeling scratchy by late afternoon.`,
      },
      {
        list: [
          `Wraparound sunglasses block more wind and dust than flat lenses.`,
          `A brimmed hat cuts glare from above and shades the eyes on a long job.`,
          `Turn your back to the wind when you stop to rest or drink.`,
          `When you come inside, step away from the AC vent for a minute rather than standing in front of it.`,
          `If dust, chaff or a bit of grit gets in your eye, don’t rub it. Rinse with clean water and see an eye doctor or urgent care if it’s still there or your eye hurts; a lubricating drop isn’t for that.`,
        ],
      },
      { h: 'Can you leave eye drops in a hot cab?' },
      {
        p: `Not on a Stephenville summer afternoon. Quell’s label gives its storage range: {storage}. A closed truck parked in the sun runs hotter than the air around it, and that air alone averages a 97.6°F high in August. Carry the bottle in a pocket or a lunch cooler and bring it in with you at the end of the day. In January, when nights dip to about 31°F, don’t leave it in the cab through the night either. More on keeping a bottle in your vehicle is in [can you leave eye drops in a hot car](/guides/eye-drops-in-a-hot-car).`,
      },
      { h: 'The cool season indoors' },
      {
        p: `Winter here is short, with highs near 60°F, but January still averages a freezing night, and December and February aren’t far behind. That’s enough to keep a furnace or a space heater going in the mornings. Heated air is dry air, especially when a space heater sits a few feet from your recliner or your desk and blows straight at you. Turn it to face your legs, not your face, and give your eyes a break from the screen every half hour.`,
      },
      { h: 'May storms and the wetter months' },
      {
        p: `May is the wettest month at the station, nearly 5 inches, and September and October each average over 3 inches. Moist outdoor air is usually easier on eyes than the dry stretches. Even in a wet month, though, the indoor air in an air-conditioned classroom, office or clinic can be dry enough to notice by the end of a shift.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a preservative-free lubricating eye drop made with {actives} as its active ingredients and natural ingredients including emu oil and manuka honey. Its uses: {uses}. Directions: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Read the caution first: {warnings}. The complete panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Stephenville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Stephenville and the rest of Erath County like any other US address, with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised. The [Stephenville page](/eye-drops/stephenville-tx) and the [Texas page](/eye-drops/state/texas) have local details, and the cart is on the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label is plain about when a drop isn’t the answer: {stopUse} Something stuck in the eye, a scratch, or eye pain after work outdoors belongs with an eye doctor or urgent care. An eye doctor can find the cause of dryness that keeps coming back and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How hot does Stephenville, Texas get in summer?',
        a: `NOAA’s 1991–2020 normals for the Stephenville 9NNE station put August’s normal high at 97.6°F and July’s at 97.3°F. June through September all average highs at or above 90°F.`,
      },
      {
        q: 'Does it snow in Stephenville, TX?',
        a: `Rarely, and not much. The station 9 miles north-northeast of town averages 0.4 inches of snow in January and 0.3 inches in December, and none in the other months, in NOAA’s normals.`,
      },
      {
        q: 'Why do my eyes feel dry when the weather changes from morning to afternoon?',
        a: `Around Stephenville, highs and lows are about 28 degrees apart in most months, so a day often moves from heater air to warm outdoor wind to air conditioning. Each kind of moving, dry air speeds evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Stephenville, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to addresses in Stephenville and across the US. Shipping is {shipping}, or free on {freeBottles} or more bottles, with no delivery date promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-greenwood-sc:
   * - https://data.rcc-acis.org/StnData, sid GRD, NOAA 1991-2020 monthly
   *   normals (raw: .daily-job/acis1123/GRD.json; lows from
   *   .daily-job/d/GRD-1123-extra.json). GREENWOOD COUNTY AP, SC, elev 617 ft.
   *   Max: Jan 53.4, Feb 57.3, Mar 65.0, Apr 73.4, May 80.5, Jun 86.8, Jul 90.2
   *   (highest, only month at 90+), Aug 88.7, Oct 73.5, Nov 63.2, Dec 55.5.
   *   Min: Jan 31.8 (only month below 32), Feb 34.8, Apr 48.3, Jul 68.5, Oct
   *   49.1, Nov 38.8, Dec 33.8. Swings: Apr 25.1 (widest), Oct 24.4, Nov 24.4,
   *   Jan 21.6, Jul 21.7. Precip: Apr 2.79 (driest), May 2.99, Mar 4.17
   *   (wettest), Dec 4.04, Jan 3.91, Feb 3.61; Dec-Mar sum 15.73; twelve
   *   monthly normals sum to 42.01 in. Snowfall "M", not used.
   * - relhum23.txt and wndspd23.txt have no row for this station: no humidity
   *   or wind figure. Greenville SC, Columbia SC and Augusta GA guides use
   *   other stations.
   */
  {
    slug: 'dry-eye-relief-greenwood-sc',
    title: 'Dry eye relief in Greenwood, South Carolina',
    description:
      'In Greenwood, April is both the driest month and the one with the widest daily temperature swing. NOAA’s numbers and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Greenwood’s rainiest stretch is winter, yet that’s when many people’s eyes feel driest, because heated indoor air is dry no matter what falls outside. April is the other one to watch: NOAA’s normals for Greenwood County Airport make it the driest month, with the widest gap between morning and afternoon. Point heat and AC vents away from your face, wear sunglasses for yard work, and use a lubricating drop as labeled. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Greenwood County Airport’s climate normals' },
      {
        p: `The numbers here are NOAA’s 1991–2020 climate normals for Greenwood County Airport, about 620 feet above sea level, as published through the National Weather Service’s NOWData pages. They describe a typical year at the airport, averaged over three decades, not any one season you remember.`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 42 inches a year.`,
          `March is the wettest month at 4.17 inches, followed by December at 4.04 and January at 3.91.`,
          `April is the driest at 2.79 inches, and May is next at 2.99.`,
          `July is the only month with a normal high at or above 90°F, at 90.2°F; August follows at 88.7°F.`,
          `January’s normal high is 53.4°F and its normal low 31.8°F, the only month that averages below freezing at night.`,
        ],
      },
      { h: 'Wet winters, dry rooms' },
      {
        p: `From December through March, the airport averages nearly 16 inches of precipitation, more than any other four-month stretch of the year. That surprises people whose eyes feel worst in those same months. The explanation is indoors. Cool outdoor air holds less moisture than warm air, and when a heat pump or furnace warms it to room temperature, its relative humidity falls. Dry, moving air from a register speeds evaporation from the tear film, rain or no rain outside the window.`,
      },
      {
        list: [
          `Look at where the supply vents point in the rooms where you sit longest, and angle the louvers down or away.`,
          `A heat pump often runs long, gentle cycles. If a vent blows across your bed or chair, that gentle stream can still dry your eyes over hours.`,
          `A bedroom humidifier, cleaned as directed, adds moisture where you spend the most hours.`,
          `Lower the thermostat a couple of degrees at night if you can sleep comfortably that way.`,
        ],
      },
      { h: 'April: the driest month and the widest swing' },
      {
        p: `April stands out in Greenwood’s numbers. It has the least precipitation of any month, 2.79 inches, and the biggest daily range: a normal high of 73.4°F against a normal low of 48.3°F, a gap of about 25 degrees. Spring mornings often start with the heat on and end with windows open or the AC running. It’s also when most people get back outside for long stretches of yard work, garden planting and weekend sports.`,
      },
      {
        list: [
          `Wear sunglasses, ideally wraparound, while mowing, edging or running a leaf blower.`,
          `Keep the blower’s exhaust pointed away from your face and work with the wind at your back.`,
          `If grass clippings, dirt or debris get in your eye, don’t rub it. Rinse with clean water, and see an eye doctor or urgent care if it still feels stuck or hurts.`,
          `When you come in, wash your hands before touching your eyes or the bottle.`,
        ],
      },
      { h: 'July, the one 90-degree month' },
      {
        p: `Greenwood summers are hot, with July averaging a 90.2°F high and the nights staying in the upper 60s. Rain comes regularly, 3.2 to 3.8 inches a month from June through August. Outdoors, the air rarely feels dry in summer. Indoors is different: air conditioning removes moisture as it cools, and an office, classroom, store or car with the AC on high can leave your eyes feeling scratchy by afternoon. Aim car vents at your chest and take short breaks outside if your eyes bother you at a desk under a ceiling vent.`,
      },
      { h: 'Fall and the switch back to heat' },
      {
        p: `October and November have the second-widest daily swings in the record, about 24 degrees each. November’s normal low of 38.8°F is usually when heat starts running in the mornings for good. If your eyes changed with the season last year, this is the time to adjust vents, set up a humidifier and make sure you have a spare bottle of drops before the cold months start.`,
      },
      { h: 'Screens and blinking' },
      {
        p: `Whatever the month, screens play a part. People blink less while they read or watch a screen, and blinking is how the eye spreads a fresh layer of tears. A phone held close, a laptop on the couch in the evening, or a long day of email all lower the blink rate. Look away every 20 minutes or so and blink fully a few times.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its label lists these uses: {uses}. The directions: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, with {actives} as active ingredients. Before ordering, read this caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts), and storage is {storage}.`,
      },
      { h: 'Ordering Quell in Greenwood' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Greenwood and anywhere else in the US, with guest checkout and no subscription. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order before you run out. See the [Greenwood page](/eye-drops/greenwood-sc), the [South Carolina page](/eye-drops/state/south-carolina), or go straight to the [cart](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops are for dryness and mild irritation. The label says when to stop: {stopUse} An eye doctor can find the cause of eyes that keep feeling dry and decide what to do. For a list of warning signs, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Greenwood, SC?',
        a: `April, at 2.79 inches of precipitation in NOAA’s 1991–2020 normals for Greenwood County Airport. May is next at 2.99 inches, and March is the wettest at 4.17 inches.`,
      },
      {
        q: 'How hot does Greenwood, South Carolina get in July?',
        a: `July’s normal high at Greenwood County Airport is 90.2°F, the only month that averages 90 or above, with a normal low of 68.5°F. August’s normal high is 88.7°F.`,
      },
      {
        q: 'Why are my eyes dry in winter when it rains so much?',
        a: `Rain outside doesn’t reach the air in a heated room. Warming cool air lowers its relative humidity, and vents move that dry air across your face, which speeds evaporation from the tear film.`,
      },
      {
        q: 'Can I order Quell to Greenwood, SC?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Greenwood addresses with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles; no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-overland-park-ks:
   * - https://data.rcc-acis.org/StnData, sid OJC, NOAA 1991-2020 monthly
   *   normals (raw: .daily-job/acis1123/OJC.json; lows from
   *   .daily-job/d/OJC-1123-extra.json). OLATHE JOHNSON COUNTY EXECUTIVE AP,
   *   KS, elev 1074 ft (the station for Overland Park in today's brief; it is
   *   in Olathe and named as such). Max: Oct 66.5, Nov 53.1, Dec 42.2, Jan
   *   38.7, Feb 43.8, Mar 55.1, Jul 87.5. Min: Oct 46.9, Nov 34.8, Dec 25.4,
   *   Jan 21.2, Feb 25.3, Mar 35.1, Jul 68.9. Precip: Nov 2.03, Dec 1.42, Jan
   *   1.06, Feb 1.41, Mar 2.27 (Nov-Mar sum 8.19); Apr 3.87, May 5.38, Jun
   *   5.15, Jul 4.22, Aug 4.38, Sep 3.54, Oct 3.01 (Apr-Oct sum 29.55); twelve
   *   monthly normals sum to 37.74 in. Snowfall "M", not used.
   * - Same station as the Olathe guide (2026-11-18-b); this page is built on
   *   the Nov-Mar vs Apr-Oct split, the October-to-November drop and the
   *   night lows instead of that guide's angles.
   * - relhum23.txt and wndspd23.txt have no row for this station: no humidity
   *   or wind figure.
   */
  {
    slug: 'dry-eye-relief-overland-park-ks',
    title: 'Dry eye relief in Overland Park, Kansas',
    description:
      'Around Overland Park, November through March brings only about 8 inches of precipitation. How that dry half of the year affects eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Overland Park’s year splits in two. NOAA’s normals for the nearby Johnson County Executive Airport show about 8 inches of precipitation from November through March against nearly 30 from April through October, and the dry half is also furnace season. That’s when eyes tend to feel gritty. Keep heat vents off your face, add humidity at home, give your eyes screen breaks, and use a lubricating drop as labeled. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Which weather station this page uses' },
      {
        p: `Overland Park’s figures here come from NOAA’s 1991–2020 climate normals for Johnson County Executive Airport, which is in Olathe, a short drive southwest, at about 1,070 feet above sea level. They’re published through the National Weather Service’s NOWData pages. It’s the same station behind the [Olathe guide](/guides/dry-eye-relief-olathe-ks), and it reads Johnson County’s climate better than an airport across the state line would. Read it as the county’s typical year, not a forecast.`,
      },
      { h: 'The dry half and the wet half' },
      {
        p: `Add up the monthly normals and the pattern is plain. November, December, January, February and March together average about 8.2 inches of precipitation. April through October averages about 29.6 inches. Nearly four of every five inches of the year’s rain falls in the warm seven months.`,
      },
      {
        list: [
          `January is the driest month, at 1.06 inches.`,
          `February and December each average about 1.4 inches.`,
          `November averages 2.03 inches and March 2.27.`,
          `May is the wettest at 5.38 inches, with June at 5.15.`,
        ],
      },
      {
        p: `The dry half lines up with the cold half. Air that holds little moisture to begin with is warmed by a furnace to 68 or 70 degrees, and its relative humidity falls further. For the tear film, that’s two strikes at once.`,
      },
      { h: 'November: the month everything changes' },
      {
        p: `Between October and November, the normal high at the airport falls from 66.5°F to 53.1°F, and the normal low drops from 46.9°F to 34.8°F. That’s the steepest month-to-month drop in the year at this station, and it’s when most Overland Park homes switch to steady heat. It also happens to be the month of Thanksgiving travel, Black Friday shopping on November 27 this year, and the first long, dark evenings since daylight saving time ended on November 1. If your eyes start to bother you around then, the timing isn’t a coincidence.`,
      },
      {
        list: [
          `Before the furnace runs for the season, replace the filter so it isn’t pushing dust along with the warm air.`,
          `Walk through the rooms you use most and note which registers blow toward a chair, desk or bed.`,
          `Set up a humidifier in the bedroom now, rather than after the first dry week.`,
          `Check how many bottles of drops you have, since no delivery date is promised.`,
        ],
      },
      { h: 'December to February nights in the 20s' },
      {
        p: `Normal lows sit at 25.4°F in December, 21.2°F in January and 25.3°F in February. On nights like that, the furnace cycles on through the dark hours, and many people wake with eyes that feel dry or stuck. Turning the thermostat down a few degrees at night means less heated air moving through the room. If you sleep with a fan running for white noise, point it away from the bed in winter.`,
      },
      { h: 'Office floors and screen-heavy days' },
      {
        p: `A lot of Overland Park’s working day happens in office buildings, from large corporate floors to small suites, and the air in those rooms is managed for the whole building, not for your desk. A ceiling diffuser right above a workstation sends a steady stream of air down across the face, winter or summer. Combine that with hours of screen work, when blinking slows, and the end of the day can feel rough.`,
      },
      {
        list: [
          `If you can, move your monitor or chair out of the direct path of a vent, or ask facilities whether a diffuser can be redirected.`,
          `Set the top of the screen at or slightly below eye level, so your eyes aren’t opened wide looking up.`,
          `Every 20 minutes, look at something across the room for 20 seconds and blink fully.`,
          `Keep your bottle in a desk drawer, not on a sunny windowsill or next to a space heater.`,
        ],
      },
      { h: 'Holiday errands: cold lots and warm stores' },
      {
        p: `December shopping in Johnson County means a lot of quick trips: a parking lot near freezing, a blast of warm air at the store entrance, a dry, heated aisle, and back out to a car with the defroster on. Every switch moves dry air across your eyes. Keep the car’s heat on the floor setting once the glass clears, wear sunglasses on bright winter afternoons, and put drops in before you leave home rather than in the car.`,
      },
      { h: 'The wet months still have dry spots' },
      {
        p: `From April through October, outdoor air is far moister, and many people get a break. Indoors, central air conditioning removes moisture as it cools, so a July office or a car with the AC blasting can still dry your eyes. The same vent habits that help in January help in July.`,
      },
      { h: 'Quell and its label' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its uses: {uses}. Its directions: {directions}. Active ingredients: {actives}. One caution comes first: {warnings}. You can read every line on the [Drug Facts page](/drug-facts). {appearance}`,
      },
      { h: 'Ordering Quell to Overland Park' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Overland Park and the rest of Johnson County with guest checkout. Shipping is {shipping}, or free on orders of {freeBottles} or more bottles, and no delivery date is promised. The [Overland Park page](/eye-drops/overland-park-ks) and the [Kansas page](/eye-drops/state/kansas) cover local details; the cart is on the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for dryness and mild irritation, and the label is specific about when to stop: {stopUse} Dryness that comes back every winter despite changes at home is worth an appointment too. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What are the driest months in Overland Park, Kansas?',
        a: `In NOAA’s 1991–2020 normals for Johnson County Executive Airport, January is the driest month at 1.06 inches, and February and December each average about 1.4 inches. November through March together average about 8.2 inches.`,
      },
      {
        q: 'How cold does Overland Park get at night in winter?',
        a: `Normal lows at the Johnson County Executive Airport station are 25.4°F in December, 21.2°F in January and 25.3°F in February, so the furnace usually runs through the night in those months.`,
      },
      {
        q: 'Why do my eyes start feeling dry in November?',
        a: `Around Overland Park, normal highs drop about 13 degrees from October to November and steady furnace heat begins. Heated winter air is dry, and dry, moving air speeds evaporation from the tear film.`,
      },
      {
        q: 'Does Quell deliver to Overland Park, KS?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Overland Park addresses with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-massage-therapists',
    title: 'Dry eyes for massage therapists',
    description:
      'Warm, dim massage rooms, heated tables and oily hands all affect a massage therapist’s eyes. Practical habits for the room, the day and using drops.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Massage therapists often end the day with dry-feeling eyes because massage rooms are kept warm, often with a space heater or heated table, and that dry, moving air works on the tear film session after session. Long stretches of focused attention lower blinking, and oily hands make it hard to touch your eyes cleanly. Keep heat sources aimed low, wash your hands before touching your eyes or a bottle, and use a lubricating drop between clients as its label directs.`,
      },
      { h: 'Why a massage room dries your eyes' },
      {
        p: `A massage room is set up for a client lying still under a sheet, not for the person standing and working. Clients get cold quickly, so therapists keep the room warm, sometimes with central heat turned up, sometimes with a small space heater on the floor, and often with a heated pad on the table. Warming air lowers its relative humidity, and a heater with a fan pushes that air around the room. You spend an hour, then another, bent over the table in that air.`,
      },
      {
        list: [
          `Space heaters with fans move dry air in a steady stream. Point the heater at the client’s side of the table and low, not at your working position.`,
          `Rooms are often small and closed, so the same air recirculates for hours.`,
          `A diffuser or tabletop fountain adds scent or sound, not reliable moisture. If you use a diffuser, keep its mist away from your face and the client’s.`,
          `Linens shed lint when they’re shaken out between sessions. Shake sheets away from your face, or fold them rather than snapping them open.`,
        ],
      },
      { h: 'Dim light and long focus' },
      {
        p: `Low light is part of the work, but it changes how you use your eyes. When you’re reading a client’s tissue through your hands, you may stare at a fixed point on the wall or the table for minutes at a time without blinking fully. People blink less when they concentrate, and blinking is what spreads a fresh layer of tears across the eye. Between strokes or as you move to the other side of the table, close your eyes gently for a second and blink a few full blinks. It’s easy to build into the rhythm of a session.`,
      },
      { h: 'Oil, lotion and your eyes' },
      {
        p: `The biggest practical problem is your hands. Massage oil, lotion and gel stay on the skin through the session, and the urge to rub a dry eye with the back of an oily wrist is strong. Oil or lotion in the eye can sting and blur your vision, and rubbing makes irritation worse.`,
      },
      {
        list: [
          `Keep a clean towel at your station just for your face, separate from the client’s linens.`,
          `Wash your hands with soap and water before touching your eyes or a bottle of drops. A quick wipe doesn’t remove oil well.`,
          `If oil or lotion gets in your eye, rinse it with clean water. If it still stings, burns or blurs after rinsing, see an eye doctor or urgent care.`,
          `Don’t keep your bottle of drops on the same shelf as open oil bottles, where it can pick up residue on the cap.`,
        ],
      },
      { h: 'Back-to-back sessions and charting' },
      {
        p: `A full schedule might mean five or six hour-long sessions with 15 minutes between them. That short gap is when you flip the room, wash up, change the linens, greet the next client and update notes, often on a tablet or phone. So your eyes go from a dim room to a bright screen at close range, with fewer blinks, and then straight back to work. On a busy day, use one of those gaps for a short screen-free minute: look out a window or down a hallway and blink.`,
      },
      { h: 'Using drops between clients' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its label lists these uses: {uses}. The directions are: {directions}. That schedule fits a working day more easily than you’d expect: once before your first client, once at lunch or a midday gap, and once at the end of the day. Wash your hands first, tilt your head back, apply the drop, and blink a few times. {tip}, which matters in a room full of oils and linens.`,
      },
      {
        p: `Give your eyes a minute before you start the next session, especially since an oil-containing drop can blur briefly. {appearance} The caution on the label is worth reading before you buy: {warnings}. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Mobile and spa settings' },
      {
        p: `Therapists who travel to clients spend part of the day in a car, often with the heater or air conditioning on, and set up in rooms they can’t control. Point dash vents away from your face and pack the bottle in a pocket of your bag, not in a hot trunk. Its label storage range is {storage}. Spa therapists face a different mix: steam rooms, saunas and hot tubs nearby, then cool, dry hallways. That swing from humid to dry air is often when eyes feel driest. [Carrying eye drops in a purse or pocket](/guides/carrying-eye-drops-in-a-purse-or-pocket) has tips on keeping a bottle with you.`,
      },
      { h: 'Your own rest and recovery' },
      {
        p: `Long weeks of bodywork are physically tiring, and late evenings at home with a phone or a TV add screen time on top. Some therapists find that a lower thermostat at night, a bedroom humidifier and keeping the phone out of bed help their eyes feel better in the morning. If you also wear contact lenses at work, Quell’s label doesn’t give directions for lenses, so ask your eye doctor what to use.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for dryness and mild irritation. The label lists when to stop and ask a doctor: {stopUse} Eyes that feel dry every working day, or that sting after oil gets in them even after rinsing, are worth an exam. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry doing massage?',
        a: `Massage rooms are kept warm for clients, often with a space heater or heated table, and heated, moving air speeds evaporation from the tear film. Focused work lowers blinking, which adds to it over several sessions.`,
      },
      {
        q: 'What should I do if massage oil gets in my eye?',
        a: `Don’t rub it. Rinse the eye with clean water, and if it still stings, burns or blurs after rinsing, see an eye doctor or urgent care. Wash the oil off your hands before touching your eyes again.`,
      },
      {
        q: 'Can massage therapists use eye drops between clients?',
        a: `Yes, within the label’s directions: {directions}. Wash your hands first, since oil and lotion on your fingers shouldn’t reach your eyes or the bottle tip, and give your eyes a minute before the next session.`,
      },
      {
        q: 'Should a space heater point at the massage table?',
        a: `Aim it low and toward the client’s side, not at the spot where you stand and work. A fan heater blows a steady stream of dry air, and keeping it off your face helps your eyes through a long day.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-physical-therapists',
    title: 'Dry eyes for physical therapists',
    description:
      'Bright clinic lights, fans in the gym, hours of documentation on a screen: why physical therapists’ eyes feel dry by afternoon, and what helps.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Physical therapists’ eyes tend to feel dry by mid-afternoon because the day combines climate-controlled clinic air, fans running over exercise areas, bright overhead lighting and a lot of screen time for documentation. Concentrating on a screen lowers blinking, and moving air speeds evaporation from the tear film. Get out of vent and fan paths, break up charting time, and use a lubricating drop on a schedule that fits your caseload, following its label.`,
      },
      { h: 'Where the dryness comes from in a clinic' },
      {
        p: `Outpatient clinics are usually big, open rooms: padded tables along one wall, a gym area with bikes, treadmills and mats, and desks or computer carts for notes. Air handling has to cool a room full of people exercising, so the air conditioning works hard much of the year, and in winter the heat does the same. Air conditioning removes moisture as it cools; heating cold air lowers its relative humidity. Either way, the air in the room is often drier than outside.`,
      },
      {
        list: [
          `Floor fans or wall fans pointed at the exercise area keep patients cool, and they blow on you too when you stand beside a treadmill or bike to coach.`,
          `Ceiling diffusers above documentation stations send air straight down onto whoever is sitting there.`,
          `Hot pack heaters and warm, damp towels make one corner of the room feel humid, so the rest can feel drier by contrast.`,
        ],
      },
      { h: 'Documentation and the screen' },
      {
        p: `Much of a therapist’s day is spent writing notes, entering flow sheets and updating plans of care. Often it’s done in short bursts between patients, sometimes at the end of the day, and sometimes at home after dinner. That’s hours of focused screen time, and people blink less when they look at screens. A partial blink doesn’t spread tears as well as a full one, so the surface of the eye dries a little faster with each minute of charting.`,
      },
      {
        list: [
          `Set the monitor so its top edge is at or slightly below eye level. Looking slightly down keeps your eyes less wide open than looking up.`,
          `Turn the screen brightness to match the room rather than leaving it at full.`,
          `After each note, look across the gym for a few seconds and blink fully before you get up.`,
          `If you chart at home, do it at a table with a lamp, not on the couch with the laptop close to your face.`,
        ],
      },
      { h: 'Bright lights and glare' },
      {
        p: `Clinics are lit brightly for safety and so you can watch movement closely. Glare from overhead lights off glossy floors, mirrors and computer screens makes people squint, and a squint changes how fully you blink. If a light reflects off your screen, tilt the screen or move it rather than leaning in. Some clinics have windows that let afternoon sun across the floor; position your documentation station so the sun isn’t behind the screen or in your eyes.`,
      },
      { h: 'Long days on your feet' },
      {
        p: `Ten-hour days, back-to-back patients, and running late make it easy to forget anything that isn’t on the schedule. That’s why a drop habit works better when it’s tied to something you already do. Quell’s directions read: {directions}. A practical pattern for a clinic day is one drop in each eye before your first patient, one at lunch, and one at the end of the day before the drive home. Wash your hands first, since you’ve been touching patients, equipment and gel.`,
      },
      { h: 'Home health and hospital therapists' },
      {
        p: `Home health therapists drive between visits, which means time in a car with the heater or air conditioning blowing, followed by houses with every kind of climate: hot, overheated apartments in winter, cold, air-conditioned homes in summer, wood stoves, fans. Keep the car vents aimed at your chest and keep your bottle in a bag, not in the glovebox, since the label storage range is {storage}. Hospital-based therapists move between patient rooms, hallways and units, all on the building’s air system, and often spend more time at a workstation on wheels. For the screen side of that, [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) has more on afternoon slumps.`,
      },
      { h: 'Aquatic therapy' },
      {
        p: `Therapists who work in pools trade dry air for humid, warm pool rooms, then walk out into an air-conditioned building or a cold parking lot. The switch from humid to dry air often makes eyes feel drier than either room alone. Splashed pool water can also sting. Rinse your face with clean tap water after a pool session and give your eyes a minute before you go back to the screen. The guide on [dry eyes after swimming](/guides/dry-eyes-after-swimming) covers the pool side in detail.`,
      },
      { h: 'What Quell is and isn’t for' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its uses are: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, with {actives} as active ingredients. Before using it, read the caution: {warnings}. The label doesn’t give directions for contact lenses or for use with other drops; ask your eye doctor or pharmacist about either. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Physical therapists know better than most that a symptom that keeps coming back needs a proper evaluation. The same goes for eyes. The label says: {stopUse} An eye doctor can find the cause of dryness that persists and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a physical therapy clinic?',
        a: `Clinics run heating and air conditioning hard for a room full of people exercising, and fans often blow over exercise areas. Dry, moving air plus hours of documentation on a screen, when blinking slows, adds up by the afternoon.`,
      },
      {
        q: 'How can physical therapists cut down on eye strain from charting?',
        a: `Set the monitor slightly below eye level, match its brightness to the room, and look across the gym and blink fully after each note. Charting at a table with a lamp, rather than on the couch, helps at home too.`,
      },
      {
        q: 'When should a physical therapist use eye drops during a clinic day?',
        a: `Quell’s directions are {directions}. Many therapists tie those to fixed points: before the first patient, at lunch, and at the end of the day, washing their hands first each time.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-machinists',
    title: 'Dry eyes for machinists',
    description:
      'Shop air, coolant mist, chips and long stares at a CNC control screen dry a machinist’s eyes. What helps on the floor, and what needs a doctor.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Machinists’ eyes feel dry because a machine shop combines moving air from fans, heaters and compressed-air blowoffs with long, focused stares at control screens, dial readouts and parts under inspection, which lowers blinking. A lubricating drop can help with dryness between jobs, used as labeled with clean hands. A chip, splinter of metal or coolant splash in the eye is different: don’t rub it, and go to an eye doctor or urgent care.`,
      },
      { h: 'What shop air does to your eyes' },
      {
        p: `Most machine shops are big, open buildings with high ceilings. Keeping them comfortable takes a lot of moving air: big fans in summer, overhead unit heaters or radiant heaters in winter, and exhaust systems pulling fumes and mist out of the room. Air conditioning in a climate-controlled shop removes moisture as it cools, and heating cold air lowers its relative humidity. Moving dry air across your face speeds evaporation from the tear film, and a shift is a long time to stand in it.`,
      },
      {
        list: [
          `A fan aimed at your machine to keep you cool is also aimed at your eyes. Angle it at your chest or torso.`,
          `Overhead heaters blow warm air down. If one sits right above your station, a slight shift in where you stand can help.`,
          `Doors opening to the shipping dock bring in gusts of cold or dusty air. Turn away when they open if you can.`,
        ],
      },
      { h: 'Staring at the control and the part' },
      {
        p: `CNC work means long periods watching a control screen, reading offsets, checking a program, or watching the spindle through the machine window as it cuts. Manual work means watching a cut, a dial or a readout. Inspection means staring through a loupe, at a micrometer’s thimble, or at a coordinate measuring screen. In every case, your attention locks on a point and your blink rate drops. People blink less when they concentrate on a screen or close task, and blinking is what spreads a fresh tear layer across the eye.`,
      },
      {
        list: [
          `When a cycle is running and you don’t need to watch every second, look across the shop for a moment and blink fully.`,
          `Between parts, close your eyes for two or three seconds before you load the next one.`,
          `Keep the control screen clean. A screen fogged with mist and fingerprints makes you lean in and stare harder.`,
          `If you spend part of the day writing or editing programs at a computer, set the monitor slightly below eye level and take a short look-away break every 20 minutes or so.`,
        ],
      },
      { h: 'Coolant mist, chips and compressed air' },
      {
        p: `Machining throws things into the air: a fine mist from flood coolant, chips flung off the tool, and dust from grinding or deburring. Compressed air used to clear chips from a part or fixture can send them flying toward your face. Wear the eye protection your shop requires, and never point a blowgun toward yourself or anyone else. Keep the machine doors closed while it’s cutting.`,
      },
      {
        p: `A lubricating drop isn’t for any of that. If a chip, a sliver of metal, grit or coolant gets in your eye:`,
      },
      {
        list: [
          `Don’t rub. Rubbing can drag a sharp particle across the eye.`,
          `Don’t try to pick it out with a fingertip, a tool, a magnet or a cotton swab.`,
          `Rinse with clean water or the eyewash station your shop provides.`,
          `If anything is still there, the eye hurts, it feels like something is stuck, or your vision has changed, go to an eye doctor or urgent care the same shift. Metal in the eye is a medical problem, not a dryness problem.`,
        ],
      },
      { h: 'Clean hands, clean bottle' },
      {
        p: `Machinists’ hands carry cutting oil, coolant, metal fines and grease. Before you touch your eyes or a bottle of drops, wash your hands with soap and water and dry them on a clean paper towel, not a shop rag. Quell’s label says: {tip}. That rule matters more in a shop than almost anywhere. Keep the cap on whenever the bottle isn’t in your hand, and keep the bottle in a clean pocket or a lunch bag, not on the machine or the workbench.`,
      },
      { h: 'Using drops on a shift' },
      {
        p: `Quell is a preservative-free lubricating eye drop. The label lists its uses: {uses}. The directions: {directions}. On an eight- or ten-hour shift, a natural pattern is a drop in each eye before you clock in, one at lunch, and one at the end of the shift. Use them at break time, away from the machines, after washing up. An oil-containing drop can blur briefly, so don’t run a machine, measure a part or drive until your vision is clear.`,
      },
      {
        p: `Read the label’s caution before you order: {warnings}. The [Drug Facts page](/drug-facts) has the whole panel. Storage on the label is {storage}, which rules out a toolbox in an unheated corner of the shop in January or a truck in July. If you’re on the floor and struggling with tired eyes on nights, [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more.`,
      },
      { h: 'Seasons in the shop' },
      {
        p: `Winter is often the hardest season. Heaters run through the whole shift, outside doors bring in cold gusts, and the air indoors gets very dry. Summer brings big fans and, in some shops, heat from the machines themselves. Neither season is easy on the tear film, but the fixes are the same: get out of the direct path of moving air, break up long stares, and keep your hands clean before touching your face. Many machinists find their eyes feel better on weekends and vacations, which points to the shop as part of the picture.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Anything that got into your eye, eye pain, or a change in vision should be seen, not managed with drops. The label says: {stopUse} For dryness that keeps coming back, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list of warning signs, and [construction workers’ eyes](/guides/dry-eyes-for-construction-workers) if you also work in the field.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a machine shop?',
        a: `Shops move a lot of air with fans, heaters and exhaust systems, and that dry, moving air speeds evaporation from the tear film. Long stares at a control screen or a part lower your blink rate, which adds to it.`,
      },
      {
        q: 'What should I do if a metal chip gets in my eye?',
        a: `Don’t rub it or try to remove it yourself. Rinse with clean water or an eyewash station, and if anything remains, it hurts, or your vision changes, go to an eye doctor or urgent care right away. Eye drops aren’t for this.`,
      },
      {
        q: 'Can coolant mist make my eyes feel dry or irritated?',
        a: `Mist and splashes can irritate eyes, and a splash in the eye should be rinsed right away with clean water. If it still stings or your vision isn’t clear after rinsing, see an eye doctor or urgent care.`,
      },
      {
        q: 'Can machinists use eye drops on the shop floor?',
        a: `Use them on a break, away from the machines, after washing cutting oil and fines off your hands. Keep the cap on and the tip clean, and wait until any brief blur clears before you run a machine.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-carpenters',
    title: 'Dry eyes for carpenters',
    description:
      'Wind on open framing, sawdust, cold mornings and jobsite heaters: why carpenters’ eyes feel dry, how to work around it, and when to see a doctor.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Carpenters’ eyes feel dry because the work moves between wind on open framing, cold mornings, jobsite heaters inside closed-in houses, and fine sawdust from cutting, all while staring at a line, a mark or a level. Each of those either dries the tear film or lowers blinking. Wear eye protection, keep heaters and saw exhaust away from your face, and use a lubricating drop on breaks as labeled. Anything stuck in your eye goes to an eye doctor or urgent care.`,
      },
      { h: 'Framing: wind with nothing to stop it' },
      {
        p: `During framing there are no walls to block the wind. On a second-floor deck or a roof, it moves across your face for the whole shift. Wind speeds evaporation from the tear film, and so does dry winter air. The higher you work, the less shelter there is. Many carpenters notice their eyes feel worse on framing days than on trim days for exactly this reason.`,
      },
      {
        list: [
          `Wraparound safety glasses cut wind across the eye better than flat lenses.`,
          `Work with your back to the wind when the job allows it, such as setting up the saw on the sheltered side of the house.`,
          `Take breaks out of the wind, in the truck or behind a wall, rather than on an open deck.`,
        ],
      },
      { h: 'Sawdust from cutting, drilling and sanding' },
      {
        p: `A circular saw, miter saw or table saw throws dust and chips into the air, and much of the fine dust stays in the air for a while. Drilling overhead drops dust down toward your face, and sanding makes a fine cloud. Dust on the surface of the eye feels gritty and makes you want to rub, and rubbing makes irritation worse. Set up the saw so the dust port or chute points away from you and downwind, and use the dust bag or a shop vacuum where you can.`,
      },
      {
        p: `If sawdust, a wood chip or a splinter gets in your eye, don’t rub it and don’t try to pick it out. Rinse with clean water. If it’s still there, it hurts, or your vision has changed, go to an eye doctor or urgent care. Eye drops aren’t a way to wash debris out.`,
      },
      { h: 'Cold mornings and jobsite heaters' },
      {
        p: `Winter work starts cold. Once a house is closed in and drywall goes up, crews often run portable heaters to keep the space workable and help materials acclimate. Heaters with fans push hot, dry air through the rooms, and the air inside a heated shell can get very dry. Keep heaters aimed away from where you’re cutting or measuring, and don’t stand in front of one to warm up with your face in the stream. If you also deal with drywall dust from other trades, the guide for [flooring and tile installers](/guides/dry-eyes-for-flooring-installers) covers working in a dusty finished room.`,
      },
      { h: 'Trim and finish work: staring at the line' },
      {
        p: `Finish carpentry is precise work. Reading a tape, marking a cut, scribing a piece to an uneven wall, or holding a level to a door jamb all mean long, steady looks at a fine line. People blink less when they concentrate on close work, and less blinking means the tear film dries between blinks. Make a habit of blinking fully a few times after each cut and looking across the room before you measure the next piece. A good work light on the area also keeps you from squinting.`,
      },
      { h: 'Summer sites and sun' },
      {
        p: `In summer, glare off light-colored lumber, concrete and roofing makes people squint for hours, and hot, dry wind does the same thing to the tear film that cold wind does. Tinted safety glasses give shade and protection together. Bring a cooler with water and lunch, and keep your bottle of drops in it or in a pocket, not on the dashboard. Its storage range is {storage}.`,
      },
      { h: 'Using drops on the job' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its uses on the label: {uses}. Its directions: {directions}. On a jobsite, the usual pattern is a drop in each eye before work, one at lunch, and one when you get home. Wash your hands first. Carpenters’ hands carry dust, glue and finish, and none of that should reach your eye or the tip of the bottle. {tip}.`,
      },
      {
        p: `Put drops in sitting down in the truck or a quiet room, not on a ladder, roof or scaffold, and wait for any brief blur to clear before you cut, nail or drive. Read the caution before you buy: {warnings}. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Shop days and home projects' },
      {
        p: `Many carpenters also spend time in a shop, building cabinets, stairs or trim pieces. Shop work has its own conditions: dust collection, shop heaters and long stretches at a machine. The [woodworkers guide](/guides/dry-eyes-for-woodworkers) covers that setting. Evenings at home add screen time, often after a long day of wind and dust. Keeping the phone out of bed and a humidifier in the bedroom in winter can make mornings easier.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for dryness and mild irritation. The label says: {stopUse} Anything in the eye, a scratch, or eye pain after a day on site needs an eye doctor or urgent care. Dryness that keeps coming back is worth an exam, where an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do carpenters get dry eyes?',
        a: `Carpentry mixes wind on open framing, cold mornings, jobsite heaters and sawdust with long, close looks at marks and lines, which lowers blinking. Dry, moving air speeds evaporation from the tear film.`,
      },
      {
        q: 'What should I do if I get a splinter in my eye?',
        a: `Don’t rub it or try to remove it. Rinse with clean water, and if it’s still there, hurts, or your vision changes, go to an eye doctor or urgent care right away. A lubricating drop isn’t meant to wash out debris.`,
      },
      {
        q: 'Do jobsite heaters dry out your eyes?',
        a: `Heaters with fans push hot, dry air through a closed-in house, and that moving air speeds evaporation from the tear film. Keep them aimed away from where you work and don’t stand with your face in the stream.`,
      },
      {
        q: 'When should carpenters put in eye drops on the job?',
        a: `Quell’s directions are {directions}. Many carpenters use one before work, one at lunch and one at home, sitting in the truck or indoors with clean hands, never on a ladder or roof.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-with-a-ceiling-fan-in-winter',
    title: 'Dry eyes with a ceiling fan running in winter',
    description:
      'A ceiling fan left on through winter keeps furnace-dried air moving across your face. How to set it, when to switch it off, and what else helps.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Yes, a ceiling fan running in winter can make your eyes feel drier. Heated winter air already holds little moisture, and a fan blowing down keeps that dry air moving across your face, which speeds evaporation from the tear film. If you want the fan on, run it on low with the blades set to pull air upward, keep it off over the bed and the couch, and add a humidifier. A lubricating drop used as labeled helps with dryness that remains.`,
      },
      { h: 'Why people leave the fan on in winter' },
      {
        p: `Warm air rises, so in a heated room the ceiling can be noticeably warmer than the floor, especially under high or vaulted ceilings. Running a ceiling fan gently mixes that warm air back down. Others keep the fan on for white noise at night, out of habit from summer, or because a room with a wood stove or a fireplace gets stuffy. Each reason makes sense. The trouble starts when the fan is still on its summer setting, blowing straight down at full speed onto the bed or a favorite chair.`,
      },
      { h: 'How a fan affects the tear film' },
      {
        p: `The surface of the eye is covered by a thin tear film with three layers: an oily outer layer, a watery middle and a mucus layer next to the eye. The oil layer slows evaporation of the water underneath. Moving air across the eye speeds that evaporation, and dry air speeds it more. A ceiling fan in winter supplies both: furnace-heated air with low relative humidity, kept in steady motion across your face for hours.`,
      },
      {
        p: `That’s why many people notice it most in the morning. Hours of fan air over the bed while you sleep, and you wake with eyes that feel gritty or stuck. The guide to [dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers the bedroom side in more detail, including box fans and white-noise machines.`,
      },
      { h: 'Change the direction and the speed' },
      {
        p: `Most ceiling fans have a small direction switch on the motor housing, and some remotes or wall controls have a reverse button. One direction pushes air down onto the room, which feels cooling in summer. The other pulls air up toward the ceiling, where it spreads out and comes back down along the walls, so you feel little or no breeze. Check your fan’s manual for which setting is which.`,
      },
      {
        list: [
          `Turn the fan off and let it stop completely before flipping the switch.`,
          `Set it to the upward direction and the lowest speed.`,
          `Stand under it. If you still feel a breeze on your face, the speed is too high or the direction is still set for summer.`,
          `If you can’t reach the switch safely, use a sturdy stepladder with someone nearby, or leave the fan off for the season.`,
        ],
      },
      { h: 'Where it matters most: bed, couch and desk' },
      {
        p: `The rooms where you sit or lie still for long stretches matter more than hallways or kitchens. Over the bed, a fan runs for seven or eight hours while your eyes may not stay fully closed. Over the couch, it runs during the evening hours when you’re watching TV or scrolling on a phone and blinking less. Over a home desk, it pairs with screen time. In those three spots, consider turning the fan off entirely for winter, or at least setting a timer so it shuts off after you fall asleep.`,
      },
      { h: 'Fan plus vent: a double dose' },
      {
        p: `A ceiling fan is rarely the only thing moving air in winter. A furnace register under a window, a baseboard heater, or a space heater with a fan all push warm, dry air too. A ceiling fan on top of those spreads it further and faster. Look at the whole room: if the register points at the bed and the fan is on high above it, both are drying the air around your face. Redirect the register, slow the fan, or turn one of them off.`,
      },
      { h: 'Adding moisture back' },
      {
        p: `A humidifier in the bedroom adds moisture to the air you breathe and the air that passes over your eyes. Clean and refill it as its maker directs, since a dirty tank isn’t something you want blown around the room. Place it where it won’t blow mist straight at the bed or soak a wall. A fan on its lowest upward setting can actually help spread humidified air through the room rather than leaving it concentrated near the unit. The guide [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) has more on placement and care.`,
      },
      { h: 'Using drops on fan-heavy days' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its label lists these uses: {uses}. The directions are: {directions}. On winter days when the fan has been running, many people use their first drop after waking and the last one before bed, with one in the middle of the day. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer that moving air works against. Before ordering, read the caution: {warnings}.`,
      },
      {
        p: `Keep the bottle in a drawer by the bed rather than in the direct path of a fan, heater or sunny window. Its label storage range is {storage}. You can see the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'A short winter checklist' },
      {
        list: [
          `Set the fan to the upward direction and the lowest speed, or turn it off.`,
          `No fan breeze over the bed, the couch or the desk.`,
          `Point heat registers and space heaters away from where you sit and sleep.`,
          `Run a clean humidifier in the bedroom.`,
          `Take short screen breaks in the evening and blink fully.`,
          `Keep a bottle of drops within reach, with a spare before the coldest weeks.`,
        ],
      },
      { h: 'When it’s more than the fan' },
      {
        p: `If turning off the fan and adding moisture don’t change anything, the fan probably isn’t the whole story. The label says: {stopUse} An eye doctor can find the cause of dryness that persists and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Can a ceiling fan dry out your eyes in winter?',
        a: `It can. Heated winter air is dry, and a fan blowing down keeps it moving across your face, which speeds evaporation from the tear film. Many people notice it most after sleeping under a fan.`,
      },
      {
        q: 'Which way should a ceiling fan turn in winter for dry eyes?',
        a: `Use the setting that pulls air up toward the ceiling, on the lowest speed, so you don’t feel a breeze below it. Your fan’s manual shows which switch position does that.`,
      },
      {
        q: 'Is it better to turn off the ceiling fan at night in winter?',
        a: `If your eyes feel dry in the morning, try a few nights with the fan off or on a timer. Hours of moving, heated air over the bed can leave eyes feeling gritty when you wake up.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-an-air-purifier-in-winter',
    title: 'Dry eyes from running an air purifier all winter',
    description:
      'An air purifier moves room air through a fan, and in winter that air is dry. Where to put one so its airflow isn’t aimed at your eyes while you rest.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `An air purifier doesn’t remove moisture from the air, but it does keep air moving with a fan, and in winter the air it moves is already dry from the heat. If its outlet blows across your face while you sleep or work, that steady stream speeds evaporation from the tear film. Place the purifier so its airflow points away from your bed and desk, run a humidifier separately, and use a lubricating drop as labeled for dryness that remains.`,
      },
      { h: 'Does an air purifier dry out the air?' },
      {
        p: `A standard air purifier pulls room air in through a filter and pushes it back out. It doesn’t heat the air or condense water out of it the way an air conditioner or dehumidifier does, so it isn’t a drying machine in that sense. What it does is circulate. Run on high, many units move a noticeable breeze out of the top or front, and in a small room that breeze reaches whoever is sitting or lying nearby. Some units also have extra features, such as heating, cooling or misting, so check the manual for yours.`,
      },
      { h: 'Why winter makes it noticeable' },
      {
        p: `In summer, a purifier’s breeze might feel pleasant, and the air it moves holds more moisture. In winter, the air in a heated house is dry. When cold outdoor air is warmed by a furnace, its relative humidity drops, and that dry air is what the purifier is moving across your face for hours. People often start running a purifier more in winter, too, because windows stay closed. So the same machine can feel fine in September and leave eyes feeling scratchy by January.`,
      },
      { h: 'Where to put it' },
      {
        list: [
          `Keep it out of the line between the outlet and your face. If the air comes out the top, place it where that column of air doesn’t hit the bed’s pillow end.`,
          `If it blows out the front, turn it to face a wall or an open part of the room, leaving the clearance its manual asks for.`,
          `In a bedroom, put it across the room or at the foot of the bed rather than on the nightstand.`,
          `At a desk, put it behind or beside you, not between you and the screen.`,
          `Keep it out of the path of the heating register so you’re not stacking two air streams.`,
        ],
      },
      { h: 'Fan speed and timing' },
      {
        p: `Many people run a purifier on its highest setting all the time, when a lower setting would do for a bedroom at night. A lower speed moves less air past your face and is usually quieter. Some units have a sleep or night mode that slows the fan. Another option is to run the purifier on high while you’re out of the room, then turn it down when you come back to sleep, read or work. Your eyes care most about the hours when you’re sitting still close to it.`,
      },
      { h: 'Purifier and humidifier together' },
      {
        p: `A purifier cleans and circulates; a humidifier adds water to the air. They do different jobs, and in winter many households use both. If you do, give each its own space. A humidifier placed right next to a purifier may have its mist pulled into the purifier’s intake, which can dampen the filter. Put them on opposite sides of the room. Keep the humidifier clean and refill it as its maker directs. Our guide [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers setup and care.`,
      },
      { h: 'The rest of the room' },
      {
        p: `Purifiers often sit in rooms that already have plenty of moving air: a ceiling fan left on from summer, a box fan for white noise, a space heater. Each one adds to the drying effect on your eyes. A quick walk-through helps. Stand or sit where you spend the most time and feel for any breeze on your face. Then turn things off, slow them down, or redirect them until the air around your face is still. The guide on [dry eyes with a ceiling fan running in winter](/guides/dry-eyes-with-a-ceiling-fan-in-winter) covers that fan specifically.`,
      },
      { h: 'Working from home next to a purifier' },
      {
        p: `Home offices are often small rooms, and a purifier in one can create a steady breeze at desk level. Screen work also lowers your blink rate, which means the tear film is spread less often while that breeze works on it. Move the unit behind your chair, lower the speed while you’re working, and look away from the screen every 20 minutes or so to blink fully.`,
      },
      { h: 'Using eye drops in winter' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its uses: {uses}. Its directions: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. A drop at waking, midday and bedtime fits many winter routines. Keep the bottle in a drawer, not on top of the purifier or near the heat; the label storage range is {storage}. Read the caution before ordering: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'If something feels wrong' },
      {
        p: `A purifier won’t cause eye pain or change your vision. If you notice either, or dryness that doesn’t ease after you’ve rearranged the room, the label says: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Can an air purifier cause dry eyes?',
        a: `A standard purifier doesn’t remove moisture, but its fan keeps air moving, and in winter that air is dry. If the outlet blows on your face for hours, it can speed evaporation from the tear film.`,
      },
      {
        q: 'Where should I put an air purifier in my bedroom?',
        a: `Across the room or at the foot of the bed, with its outlet pointed away from your pillow and the clearance its manual asks for. Avoid the nightstand, where the airflow is closest to your face.`,
      },
      {
        q: 'Can I run an air purifier and a humidifier in the same room?',
        a: `Yes, but on opposite sides of the room, so the purifier’s intake doesn’t pull in the humidifier’s mist. Each does a different job, and many homes use both in winter.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-stepparent',
    title: 'Christmas gifts for a stepparent',
    description:
      'Gift ideas for a stepmom or stepdad from an adult stepchild: thoughtful, not too personal, and practical if their eyes feel dry from screens or winter air.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `A good Christmas gift for a stepparent shows you’ve noticed how they actually spend their days, without trying too hard. Think about their hobbies, their routines and what they complain about lightly: cold hands, a long commute, tired or dry-feeling eyes after hours of reading or screens. A useful, well-chosen item and a short, sincere card usually land better than something expensive. If dry eyes come up, a bottle of lubricating eye drops can be part of the gift.`,
      },
      { h: 'Start with what you know about them' },
      {
        p: `Stepfamilies come in every shape. You might have grown up with your stepmom since you were six, or met your stepdad as an adult when your parent remarried. The right gift depends on how close you are. If you’re not sure, a practical gift tied to something they enjoy is the safe middle ground: personal enough to show attention, not so personal that it feels like a statement.`,
      },
      {
        list: [
          `What do they do on a weekend morning? Read, garden, golf, woodwork, bake, watch football?`,
          `What do they use every day that’s worn out or cheap?`,
          `Have they mentioned a small daily annoyance, like a cold car, a dim reading spot or eyes that feel dry by evening?`,
          `What does your parent say they’d like? Ask quietly; they usually know.`,
        ],
      },
      { h: 'Ideas by what they enjoy' },
      {
        list: [
          `The reader: a good reading lamp that lights the whole page, a book stand, or a gift card to a local bookstore.`,
          `The gardener: quality gloves, a kneeling pad, seeds for spring, and wraparound sunglasses for long days outside.`,
          `The cook: a cookbook from a cuisine they love, good oven mitts, or a set of sharp knives if you know their taste.`,
          `The driver: an ice scraper with a brush, a car organizer, or a phone mount for the dashboard.`,
          `The screen worker: a laptop stand that raises the screen, a desk humidifier, or a puzzle book for screen-free evenings.`,
          `The handy one: a headlamp, a good tape measure, or safety glasses that actually fit.`,
        ],
      },
      { h: 'Is it okay to give a stepparent eye drops?' },
      {
        p: `It can be, if they’ve mentioned their eyes. A stepdad who rubs his eyes after an evening of TV, or a stepmom who keeps a bottle of drops on her nightstand, might be glad to have a supply they didn’t have to buy. If they’ve never brought it up, eye drops on their own can feel like a comment, so pair them with something else or skip them. Quell, a preservative-free lubricating eye drop, has this on its label for uses: {uses}.`,
      },
      {
        p: `One check comes before buying any product with natural ingredients for someone else. Quell’s label carries this caution: {warnings}. If you don’t know whether your stepparent has an egg or bird allergy, ask your parent first. The guide [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains why. If they use prescription eye drops or wear contact lenses, the label doesn’t cover combining drops or lenses, so it’s a gift to leave for their eye doctor to weigh in on.`,
      },
      { h: 'Making it from both of you, or just you' },
      {
        p: `If you’re close with your parent, a joint gift from you and your siblings or partner can take pressure off. It also avoids the awkward comparison between what you give your parent and what you give their spouse. Many adult stepchildren give one gift to the couple, such as a dinner out, a framed family photo or a plant for the house, plus something small and individual for each of them. There’s no rule. What matters is that it feels considered.`,
      },
      { h: 'Writing the card' },
      {
        p: `The card often matters more than the gift. A line or two about something specific they did this year, such as helping you move, showing up to your kid’s game or taking care of your parent through a tough stretch, will be remembered longer than the box. Keep it honest. You don’t have to call them “Mom” or “Dad” if that isn’t your relationship; “Thank you for everything this year” says plenty.`,
      },
      { h: 'Ordering and shipping' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses with guest checkout, and you can send it to your own address to wrap or straight to theirs. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order well before Christmas, which falls on a Friday this year. Checkout has no gift-wrap or gift-message option. If they decide they don’t want it, the buyer can ask about a refund on an unopened bottle within {returnDays} days of delivery, without sending it back; see [returns and refunds](/guides/can-you-return-eye-drops).`,
      },
      { h: 'If you’re visiting for the holidays' },
      {
        p: `If you’ll be at their house for Christmas, you’ll see how they live day to day: which chair they read in, whether the house runs warm and dry, how much time they spend on a tablet. That can be a good time to notice a gift for next year, or for a birthday. For more ideas for adults on your list, see [practical Christmas gifts for adults](/guides/practical-christmas-gifts-for-adults), or the full set of [holiday guides](/guides/topic/seasonal).`,
      },
      { h: 'A gift isn’t medical advice' },
      {
        p: `If your stepparent has mentioned eye pain, vision changes or eyes that feel dry every day, the kind thing is to encourage them to see an eye doctor, not just to buy a bottle. The label itself says: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for what shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a stepmom for Christmas?',
        a: `Something tied to what she enjoys or uses every day, such as a reading lamp, garden gear or a cookbook, plus a short, specific card. If she’s mentioned dry-feeling eyes, a bottle of lubricating drops can be part of it.`,
      },
      {
        q: 'What is a good Christmas gift for a stepdad?',
        a: `A practical gift linked to his routines: an ice scraper and car organizer for a commuter, a headlamp or tape measure for a handy one, or a laptop stand for someone who works on screens.`,
      },
      {
        q: 'Should I give my stepparent the same gift as my parent?',
        a: `There’s no rule. Many adult stepchildren give one shared gift to the couple and a small individual gift to each, which avoids comparisons and still feels personal.`,
      },
      {
        q: 'Are eye drops a thoughtful gift for a stepparent?',
        a: `They can be if your stepparent has mentioned dry-feeling eyes, ideally alongside something else. Check first about an egg or bird allergy, since Quell’s label carries a caution about both.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-a-hair-dryer-in-winter',
    title: 'Dry eyes from a hair dryer in winter',
    description:
      'A hair dryer blows hot, dry air right past your eyes, and winter air is already dry. How to dry your hair without drying your eyes as much.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `A hair dryer can leave your eyes feeling dry because it blows a strong stream of heated air right beside your face, and heating air lowers its relative humidity. In winter, the bathroom air is often dry before you even turn it on. Use the cool or low-heat setting near your face, point the nozzle down and away from your eyes, keep your eyes relaxed or briefly closed while drying the front, and use a lubricating drop as labeled if dryness remains.`,
      },
      { h: 'Why winter makes it worse' },
      {
        p: `In summer, a hair dryer heats humid air. In winter, it heats air that’s already dry from the furnace. Cold outdoor air holds little moisture, and the heating system warms it to room temperature, lowering its relative humidity. The hair dryer then heats that air again, to a much higher temperature, and blows it at speed. Moving, hot, dry air is about as hard on the tear film as an ordinary household appliance gets, and it’s a few inches from your eyes.`,
      },
      {
        p: `Timing adds to it. A hot shower fills the bathroom with steam, and then a vent fan clears it while you dry your hair, so your eyes go from humid to very dry in a few minutes. [Why do my eyes feel dry after a shower?](/guides/why-do-my-eyes-feel-dry-after-a-shower) covers the shower side of that routine.`,
      },
      { h: 'Use the right setting' },
      {
        list: [
          `Use low heat or the cool setting for the hair around your face and bangs. Save high heat for the back and underneath, where the stream points away from your eyes.`,
          `Use a lower fan speed near the face. A gentler stream is easier to aim.`,
          `Finish with the cool shot button, if your dryer has one, rather than more hot air.`,
          `Let hair air-dry partway first, so the dryer runs for fewer minutes.`,
        ],
      },
      { h: 'Aim it away from your eyes' },
      {
        p: `How you hold the dryer matters as much as the setting. Point the nozzle down the hair shaft, from roots to ends, rather than straight at your head. When you dry the front, tilt your head down so the air flows over the top of your head and away from your face, not up into it. A concentrator nozzle narrows the stream so less of it spreads across your face. Many people close their eyes for a few seconds when drying hair right at the hairline, then blink a few full blinks afterward.`,
      },
      { h: 'Flip your routine around' },
      {
        list: [
          `Dry the back and sides first while you’re still fresh, then do the front last, quickly, on a cool setting.`,
          `Sit rather than stand, if that lets you hold the dryer at a better angle.`,
          `Don’t lean in toward the mirror to check your hair with the dryer running. Turn it off first.`,
          `Use a towel or a microfiber wrap to remove more water before you start.`,
        ],
      },
      { h: 'Makeup, mirrors and the bathroom' },
      {
        p: `Many people dry their hair right before doing their makeup or shaving in front of a lighted mirror. Bright mirror lights and close focus on your own reflection both make you blink less, right after the dryer has worked on your eyes. Give yourself a minute between the two: look out a window or across the room, and blink. If the bathroom vent fan is still running, you can switch it off once the steam is gone.`,
      },
      { h: 'Using eye drops in a morning routine' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its label lists these uses: {uses}. Directions: {directions}. If your eyes feel dry after drying your hair, one of those daily drops can go after the dryer and before makeup. Wash and dry your hands first, especially after styling products. {tip}. The label also notes: {milky}, and the drop can blur for a moment, so give it a minute before close-up work like eyeliner.`,
      },
      {
        p: `Bathrooms swing between steamy and dry and can get warm, so it’s better to keep the bottle in a bedroom drawer than on the sink. Its storage range is {storage}. Read the caution before you buy: {warnings}. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Hair spray and products' },
      {
        p: `Hair spray, dry shampoo and other aerosol products can drift into your eyes. Close your eyes while you spray, hold the can at arm’s length, and spray away from your face. If product gets in your eye and still stings after rinsing with clean water, see an eye doctor or urgent care. Hairstylists who do this for a living face a bigger version of the same problem; [dry eyes for hairstylists](/guides/dry-eyes-for-hairstylists) covers the salon side.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes feel dry most of the day and changing your routine doesn’t help, a hair dryer isn’t the main cause. The label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after blow-drying my hair?',
        a: `A hair dryer blows heated air right beside your face, and heated air is dry. In winter, the bathroom air is often dry already, so a few minutes of hot, moving air can speed evaporation from the tear film.`,
      },
      {
        q: 'What hair dryer setting is easiest on dry eyes?',
        a: `Use low heat or the cool setting near your face, and a lower fan speed. Save high heat for the back of your head, where the air points away from your eyes.`,
      },
      {
        q: 'Should I put in eye drops before or after drying my hair?',
        a: `After drying is usually more practical, so the hot air isn’t working on your eyes right after the drop. Wash your hands first, and give any brief blur a minute to clear before makeup.`,
      },
    ],
  },
  {
    slug: 'can-stress-make-your-eyes-feel-dry',
    title: 'Can stress make your eyes feel dry?',
    description:
      'Stressful weeks often bring longer screen hours, short sleep and more eye rubbing. How those habits affect dry-feeling eyes, and what you can change.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Many people notice their eyes feel drier during stressful stretches, but the clearest links run through what stress changes in a day: longer hours at a screen with fewer blinks, shorter sleep, late nights in heated or air-conditioned rooms, and more rubbing. Those habits all affect the tear film. Easing them helps, and a lubricating drop used as labeled can help with the dryness itself. If it persists or comes with pain or vision changes, see an eye doctor.`,
      },
      { h: 'What we can and can’t say' },
      {
        p: `This site doesn’t make claims about what stress does inside the body, and an eye drop label doesn’t either. What’s well established, and what this page sticks to, is how the tear film works and how ordinary habits affect it. The tear film has three layers: an oily outer layer, a watery middle and a mucus layer against the eye. Blinking spreads it, and dry or moving air speeds its evaporation. A stressful week tends to push nearly every one of those factors the wrong way.`,
      },
      { h: 'Does stress make dry eyes worse?' },
      {
        p: `Look at what a hard week usually looks like. A deadline means more hours at a computer. A family worry means late nights on a phone, reading or texting. A big exam means studying under a desk lamp until midnight. In each case, your eyes are fixed on a screen or a page for long periods, and people blink less while they concentrate. Each partial or skipped blink leaves the tear film to evaporate a bit longer before it’s refreshed. Add the dry air of an office or a heated house, and eyes that felt fine last month can feel gritty by Thursday.`,
      },
      { h: 'Sleep, late nights and morning eyes' },
      {
        p: `Stress often cuts into sleep. Fewer hours in bed means more hours awake with your eyes open, in whatever air the room has. Many people also fall asleep with a phone in hand, or wake at 3 a.m. and scroll in the dark. In the morning, eyes may feel sticky or sore. Keeping the phone out of bed, turning off fans and space heaters aimed at the bed, and running a clean bedroom humidifier in winter are small changes that help the morning feel better. [Dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) goes further into that side.`,
      },
      { h: 'Rubbing and touching your eyes' },
      {
        p: `Many people rub their eyes or press on them when they’re tired, frustrated or thinking hard, often without noticing. Rubbing doesn’t add moisture, and it can irritate the eye surface and the lids and bring whatever is on your fingers to your eyes. If you catch yourself doing it, try closing your eyes gently for a few seconds instead, or rest your face on clean palms without pressing. [Why do I feel like rubbing my eyes?](/guides/why-do-i-feel-like-rubbing-my-eyes) looks at that urge on its own.`,
      },
      { h: 'A short reset for a stressful workday' },
      {
        list: [
          `Every 20 minutes or so, look at something across the room for 20 seconds and blink fully a few times.`,
          `Lower the screen slightly so you’re looking a little down at it, not straight across or up.`,
          `Move out of the path of a desk fan, a heater or an overhead vent if you can.`,
          `Get up between tasks, even for a minute, and look out a window.`,
          `Put your phone face down during focused work so you aren’t switching between two screens.`,
          `Stop work on screens a little before bed, if the deadline allows.`,
        ],
      },
      { h: 'Can eye drops help on stressful days?' },
      {
        p: `A lubricating drop doesn’t do anything about the stress itself, and it isn’t meant to. What it can do is help with the dryness. Quell is a preservative-free lubricating eye drop. Its label lists its uses: {uses}. The directions: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. On a long workday, one drop in the morning, one at lunch and one in the evening is a pattern many people can remember even when everything else is busy. Read the caution first: {warnings}.`,
      },
      {
        p: `If you’re not sure whether your eyes would benefit, the [self-check](/self-check) asks a few questions about how your eyes feel and when. It’s not a diagnosis, but it can help you think about what to mention to an eye doctor.`,
      },
      { h: 'When it isn’t just a rough week' },
      {
        p: `If your eyes still feel dry long after the stressful stretch ends, or the dryness comes with pain, blurred vision that doesn’t clear, or sensitivity to light, the cause may have nothing to do with your schedule. The label is clear: {stopUse} An eye doctor can find the cause and decide what to do. Stress can also be a lot to carry on your own; if it’s affecting your sleep and daily life, your primary care doctor is a good place to start that conversation. For eyes specifically, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Can stress cause dry eyes?',
        a: `This site doesn’t make claims about what stress does inside the body. Stressful periods often bring longer screen hours, fewer blinks, short sleep and more eye rubbing, and each of those can leave eyes feeling drier.`,
      },
      {
        q: 'Why do my eyes feel dry during a busy week at work?',
        a: `Long stretches of focused screen work lower your blink rate, so the tear film is spread less often, and office air is often dry. Short look-away breaks and moving out of vent paths help.`,
      },
      {
        q: 'Should I see a doctor if my eyes stay dry after a stressful time ends?',
        a: `Yes, if dryness lasts, or comes with pain, vision changes or light sensitivity. An eye doctor can find the cause, which may have nothing to do with the stressful stretch.`,
      },
    ],
  },
  {
    slug: 'is-it-normal-for-eye-drops-to-feel-oily',
    title: 'Is it normal for eye drops to feel oily?',
    description:
      'An oily or slick feeling can be expected with a drop that contains oil, like Quell. What causes it, how long a brief blur is normal, and when to stop.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `With an eye drop that contains oil, a slightly slick or oily feeling right after the drop goes in is expected, and so is a moment of blur while you blink it across the eye. Quell lists {mineralOil} among its active ingredients, along with natural oils such as emu oil, so it isn’t a watery drop. A feeling that turns into pain, lasting blur or irritation that continues is not expected; stop and ask a doctor, as the label directs.`,
      },
      { h: 'Why some eye drops feel oily' },
      {
        p: `Not all lubricating eye drops are built the same way. Some are mostly water with ingredients that thicken it. Others include oils on purpose, because the outer layer of the natural tear film is oily too: it sits on top of the watery layer and slows evaporation. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}, and its inactive ingredients include emu oil, manuka honey and others. The full list is {inactives}.`,
      },
      {
        p: `That oil content is the reason a drop of Quell can feel smoother or heavier on the eye than a plain watery drop. It’s also why the label describes its look: {milky}. Oil and water mixed together look milky, not clear.`,
      },
      { h: 'What the oily feeling is like' },
      {
        list: [
          `A cool, slick sensation as the drop spreads across the eye.`,
          `A brief film or haze over your vision for a few blinks.`,
          `A slightly smoother feeling when you blink, rather than a gritty one.`,
          `Sometimes a little residue on the lashes or the skin at the corner of the eye, which you can blot with a clean tissue.`,
        ],
      },
      { h: 'Is blurry vision normal after an oily eye drop?' },
      {
        p: `A short blur is common with drops that contain oil, because the oil spreads across the front of the eye before it settles into the tear film. Blink gently a few times and give it a minute. That’s why it makes sense not to drive, read fine print or put on eyeliner right after a drop. Blur that doesn’t clear after a few minutes is different. The label lists changes in vision among the reasons to stop: {stopUse}`,
      },
      { h: 'Oily feeling on the eyelids' },
      {
        p: `If a drop runs onto the lid or the skin at the corner of the eye, it can leave a slick or tacky spot as it dries. Blot it gently with a clean tissue rather than rubbing. Use one drop at a time, as the directions say: {directions}. Extra drops mostly run out onto the skin. [Why do my eyelids feel sticky after eye drops?](/guides/why-do-my-eyelids-feel-sticky-after-eye-drops) covers the lids in more detail.`,
      },
      { h: 'When an oily drop isn’t a good fit' },
      {
        p: `Some people simply prefer a lighter feeling, and that’s a matter of taste, not a problem. Others have reasons to check before using any drop. The label doesn’t give directions for contact lenses, so if you wear them, ask your eye doctor before using Quell. The same goes for using it with other eye drops or prescription drops. And there’s one caution to read before your first bottle: {warnings}. The guide [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) explains that ingredient on its own.`,
      },
      { h: 'Signs to stop and call a doctor' },
      {
        list: [
          `Eye pain, not just an oily or slick feeling.`,
          `Vision that stays blurred or changed after a few minutes of blinking.`,
          `Irritation that continues or gets worse with each use.`,
          `Dryness or irritation that persists for 72 hours, as the label states.`,
        ],
      },
      {
        p: `Under “Do not use,” the label lists: {doNotUse}. If the liquid in your bottle looks different from the milky brown described on the label, don’t use it and contact [Quell](/about#contact).`,
      },
      { h: 'Getting used to it' },
      {
        p: `People switching from a watery drop sometimes find the first few days feel different. Using the drop at times when a moment of blur doesn’t matter, such as after you’ve parked, before you start a screen session, or just before bed, makes the change easier. {appearance} If the feeling stays uncomfortable rather than simply different, stop and ask your eye doctor or pharmacist. An eye doctor can also find the cause of dryness that persists and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eye drops feel greasy?',
        a: `Drops that contain oil, such as Quell with {mineralOil} and emu oil, can feel slick as they spread. That’s expected; pain, lasting blur or irritation that continues is not, and means stop and ask a doctor.`,
      },
      {
        q: 'How long should blur last after oil-based eye drops?',
        a: `A short blur that clears after a few gentle blinks is common. Blur that doesn’t clear after a few minutes is a change in vision, which the label lists as a reason to stop and ask a doctor.`,
      },
      {
        q: 'Why does Quell look milky instead of clear?',
        a: `Because it mixes oils and water, it isn’t clear. The label says: {milky}. A different color is a reason not to use the bottle.`,
      },
    ],
  },
  {
    slug: 'can-couples-use-the-same-bottle-of-eye-drops',
    title: 'Can couples use the same bottle of eye drops?',
    description:
      'Couples are better off with one bottle each. How to keep two bottles apart on a shared nightstand, in one bathroom and on trips, and how to order for two.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `It’s better for couples to use separate bottles. A multi-dose bottle can pick up whatever its tip touches, and close as you are, your eyes, lashes and hands aren’t your partner’s. Each person should have their own bottle, marked so you can tell them apart on a shared nightstand or bathroom counter. One order can hold bottles for both of you, and the label’s directions and warnings apply to each person.`,
      },
      { h: 'Why one bottle each' },
      {
        p: `Quell’s label says: {tip}. The tip of a dropper bottle is the part most likely to touch an eyelash, a lid or a fingertip, and anything it touches can end up back in the bottle. When one person uses a bottle, that risk stays with them. When two people use it, whatever is on one person’s lashes or lids can travel to the other’s eyes. Couples share plenty. This is one thing to keep separate. The broader guide [can you share eye drops?](/guides/can-you-share-eye-drops) covers sharing in general.`,
      },
      { h: 'Telling two identical bottles apart' },
      {
        p: `The real-world problem for couples isn’t deciding to use separate bottles. It’s grabbing the right one at 6 a.m. Two of the same bottle look identical. A few simple ways to tell them apart:`,
      },
      {
        list: [
          `Write an initial on the carton and the bottle label with a permanent marker, without covering the Drug Facts or the lot number.`,
          `Wrap a small piece of colored tape or a hair tie around one bottle’s body, not near the tip or cap.`,
          `Keep them in two different places: one in each nightstand drawer, or one on each side of the sink.`,
          `Open new bottles at different times so the cartons look different, then write the opening date on each.`,
        ],
      },
      { h: 'Nightstand habits' },
      {
        p: `If you both use drops at bedtime, the nightstand is where mix-ups happen. Keep each bottle on its owner’s side. A drawer is better than the top of the nightstand: it keeps the bottle out of the light and away from the reading lamp’s warmth. If you use drops in the dark, put the bottle in the same spot every night so you can find it by touch. [Keeping eye drops on your nightstand](/guides/keeping-eye-drops-on-your-nightstand) has more on that setup.`,
      },
      { h: 'One bathroom, two routines' },
      {
        p: `In a shared bathroom, bottles end up in a cup with toothbrushes, or knocked onto the floor. A small labeled tray or two separate drawers works better. Bathrooms also swing between steamy and dry and can get warm near a heated mirror or a vent. Quell’s storage range is {storage}, so a bedroom drawer is often the steadier spot.`,
      },
      { h: 'Traveling together' },
      {
        p: `On a trip, it’s tempting to pack one bottle for both of you. Pack two. Each bottle is {size}, small enough to go in a carry-on toiletry bag or a pocket. Put each person’s bottle in their own bag, so if bags get separated, neither of you is without drops. In a hotel room with one small bathroom counter, the colored tape or initials earn their keep.`,
      },
      { h: 'Ordering for two' },
      {
        p: `One order can include bottles for both of you, shipped to one address. Shipping is charged once per order: {shipping}, or free on {freeBottles} or more bottles. Two people using drops as directed will each go through bottles, so buying enough for both at once can be simpler than two separate orders. The [cart](/#buy) shows the price for the number of bottles you choose. There’s no subscription; you’ll get one reorder reminder email.`,
      },
      { h: 'If only one of you should use it' },
      {
        p: `Before ordering for your partner, read the caution: {warnings}. If one of you has an egg or bird allergy, that person should ask a doctor before using Quell. The label doesn’t give directions for contact lenses or for use with other eye drops, so if your partner wears lenses or uses prescription drops, they should ask their eye doctor first.`,
      },
      { h: 'If one of you used the wrong bottle' },
      {
        p: `It happens. If the tip touched your eye or lashes, the safest choice is for the bottle’s owner to start a fresh one. If the tip didn’t touch anything, many people simply carry on, but if you’re unsure, a new bottle is the clean answer. Either way, if you have eye pain, irritation that continues or a change in vision afterward, the label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can my husband and I use the same eye drops?',
        a: `It’s better to have one bottle each. The tip can touch lashes or lids, and whatever it picks up can reach the next person who uses the bottle. Mark the bottles so you can tell them apart.`,
      },
      {
        q: 'How do I tell my eye drop bottle apart from my partner’s?',
        a: `Write an initial on each bottle and carton, add a band of colored tape away from the tip, or keep the bottles in separate drawers. Don’t cover the Drug Facts or the lot number.`,
      },
      {
        q: 'What if I accidentally used my partner’s eye drops?',
        a: `If the tip touched your eye or lashes, your partner should start a new bottle. If you have pain, continuing irritation or vision changes afterward, stop and ask a doctor, as the label says.`,
      },
    ],
  },
  {
    slug: 'dropped-eye-drop-bottle-on-the-floor',
    title: 'What do I do if I drop my eye drop bottle?',
    description:
      'Dropped your eye drop bottle on the floor? What to check: was the cap on, did the tip touch anything, is the bottle cracked, and when to open a new one.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `If you drop an eye drop bottle with the cap on, check it for cracks or leaks, wipe the outside with a clean tissue, and keep using it if it looks normal. If the cap was off and the tip hit the floor, sink or counter, don’t use that bottle in your eyes; open a new one. The label tells you not to touch the tip to any surface, and a floor is a surface. When in doubt, use a fresh bottle.`,
      },
      { h: 'First question: was the cap on?' },
      {
        p: `This is the one that decides most cases. A capped bottle that falls off a nightstand or out of a bag usually comes through fine, because the cap covers the tip. An uncapped bottle that slips from your fingers while you’re tilting your head back is a different story. The tip, the part that gets closest to your eye, may have touched tile, carpet, a bathroom sink or the floor of a car.`,
      },
      { h: 'If the cap was on' },
      {
        list: [
          `Pick it up and look at the bottle. Check for cracks, dents or a split at the seam.`,
          `Squeeze it gently over a tissue, pointed away from you, to see if it leaks anywhere other than the tip.`,
          `Check that the cap still closes firmly.`,
          `Wipe the outside of the bottle and cap with a clean, dry tissue.`,
          `Look at the liquid. The label says: {milky}. If it looks different, don’t use it.`,
          `If everything looks normal, carry on using it as directed.`,
        ],
      },
      { h: 'If the cap was off and the tip hit something' },
      {
        p: `Quell’s label says: {tip}. Once the tip has touched the floor or any other surface, you can’t know what it picked up, and a preservative-free drop has no preservative in the bottle. Don’t try to rinse, wipe or sanitize the tip; that can push material into the opening, and wipes or alcohol aren’t meant for your eyes. Set that bottle aside and open a new one.`,
      },
      {
        p: `If you’re not sure whether the tip touched anything, assume it did. That rule can feel wasteful for a {size} bottle, but opening a new one is a small step next to putting something from the bathroom floor into your eye.`,
      },
      { h: 'If the tip didn’t touch anything' },
      {
        p: `Sometimes a bottle falls cap-off but lands on its side or base, and you can see the tip never made contact. If you’re confident of that, cap it right away and check it as you would a capped bottle. If there’s any doubt, a new bottle is the safer choice. The related guide [left the cap off your eye drops?](/guides/left-the-cap-off-eye-drops) walks through a similar decision for a bottle left uncapped on a counter.`,
      },
      { h: 'If the bottle cracked or leaked' },
      {
        p: `A crack in the bottle means the contents are no longer sealed from the outside. Don’t use it, even if most of the liquid is still inside. If a bottle arrives cracked, broken or leaking in its box, that’s a different case: damaged orders are replaced within {returnDays} days of delivery. See [what to do if your Quell order arrives damaged](/guides/damaged-order). A bottle you dropped yourself isn’t covered by that, but it’s still worth replacing.`,
      },
      { h: 'If you already used drops from it' },
      {
        p: `If you dropped the bottle uncapped, picked it up and used it before thinking it through, don’t panic. Stop using that bottle and switch to a fresh one. Watch how your eyes feel over the following day or two. The label says: {stopUse} If any of that happens, see an eye doctor, and tell them what happened.`,
      },
      { h: 'How to drop it less often' },
      {
        list: [
          `Sit down to put in drops, rather than standing over a sink or a hard floor.`,
          `Keep the cap in your other hand or on a clean tissue, not on the counter.`,
          `Lay a clean hand towel on the counter so a fumbled bottle lands soft.`,
          `Dry your hands well first, since wet or lotion-covered fingers slip.`,
          `Recap the bottle as soon as the drop is in, before you blink or reach for anything else.`,
          `Keep a spare bottle on hand so replacing one isn’t a problem. [Keeping spare bottles](/guides/keeping-spare-bottles) has tips.`,
        ],
      },
      { h: 'What not to do' },
      {
        list: [
          `Don’t blow on the tip or wipe it with your shirt.`,
          `Don’t run the tip under the tap.`,
          `Don’t share the bottle afterward or pass it to someone else as a backup.`,
          `Don’t keep using a bottle that looks different, smells different or has changed color. Under “Do not use,” the label lists: {doNotUse}.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Can I still use eye drops that fell on the floor?',
        a: `If the cap was on and the bottle isn’t cracked or leaking, yes, after wiping the outside. If the cap was off and the tip touched the floor, open a new bottle instead.`,
      },
      {
        q: 'Should I clean the tip of an eye drop bottle after dropping it?',
        a: `No. Rinsing or wiping the tip can push dirt or cleaning products into the opening. If the tip touched the floor, set that bottle aside and use a fresh one.`,
      },
      {
        q: 'What if my eye drop bottle cracked when I dropped it?',
        a: `Don’t use it, even if most of the liquid is still inside, because the contents are no longer sealed. Open a new bottle and dispose of the cracked one.`,
      },
    ],
  },
  {
    slug: 'can-i-place-two-separate-eye-drop-orders',
    title: 'Can I place two separate eye drop orders?',
    description:
      'Yes, you can place two Quell orders, for example to two addresses or on two cards. How shipping, order numbers and refunds work for each one.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Yes. You can place more than one Quell order, for example one shipped to you and one to a parent, or one paid with an HSA card and one with a personal card. Each order is its own checkout, with its own order number, confirmation email, shipping charge and tracking. Shipping is {shipping} per order, or free on any order of {freeBottles} or more bottles, so splitting one purchase into two can cost more.`,
      },
      { h: 'Good reasons to split an order' },
      {
        list: [
          `Two addresses. Each order ships to one address, so a gift for your mother in another state and a bottle for you at home are two orders.`,
          `Two payment methods. If part of the purchase goes on an HSA or FSA card and part on a personal card, separate orders keep each receipt clean for your plan administrator.`,
          `Two people paying. Roommates or family members who want their own receipts can each order.`,
          `Over the per-order limit. Checkout caps an order at 10 bottles; the guide [is there a limit on how many bottles you can order?](/guides/is-there-a-limit-on-how-many-bottles-you-can-order) explains why and what to do for more.`,
        ],
      },
      { h: 'When one order is the better choice' },
      {
        p: `If everything is going to the same address and on the same card, one order is usually simpler. Shipping is charged once per order, so two orders to the same place pay shipping twice, unless each one reaches {freeBottles} bottles on its own. You also get one box, one order number and one email thread to keep track of. [Why shipping is charged once per order](/guides/why-shipping-is-charged-once-per-order) explains how the charge is worked out.`,
      },
      { h: 'How to place the second order' },
      {
        list: [
          `Finish the first order completely, through the payment page, and note its order number from the confirmation page.`,
          `Go back to the [cart](/#buy) and add the bottles for the second order.`,
          `Enter the second shipping address. If you check out as a guest on the same browser, checkout may fill in your last details, so change the name and address before you continue.`,
          `Choose the payment method for this order on the payment page.`,
          `Keep both order numbers. Each one is needed to look up that order.`,
        ],
      },
      {
        p: `The step people miss is the address. Because checkout remembers your details on that browser, it’s easy to send the second order to the first order’s address by mistake. Read the shipping details on screen before you continue to payment.`,
      },
      { h: 'Will two orders arrive together?' },
      {
        p: `There’s no way to promise that. Each order is packed and shipped on its own, and no delivery date is promised for either. Two orders to the same address may arrive together or apart. Each will have its own shipping email and tracking once it ships, and you can check either one at [order lookup](/orders) with its order number and the email used at checkout.`,
      },
      { h: 'Can two orders be combined after you’ve paid?' },
      {
        p: `The site has no button to merge orders. If you placed two orders by mistake, for example by checking out twice, call {phone} ({hours}) with both order numbers as soon as you notice. The guide [charged twice for one eye drop order?](/guides/charged-twice-for-one-eye-drop-order) covers what to check first, since a pending authorization can look like a second charge.`,
      },
      { h: 'Refunds and replacements are per order' },
      {
        p: `Because each order is separate, so is each refund or replacement. Unopened bottles can be refunded within {returnDays} days of delivery of that order, without sending them back. Damaged, incorrect or broken-seal orders are replaced within the same window. The clock for each order starts with its own delivery, so two orders delivered on different days have different deadlines. Have the right order number ready when you call. The full policy is in the [terms](/terms).`,
      },
      { h: 'Two orders as a gift and a refill' },
      {
        p: `December is when split orders are most common. A typical case: two bottles for yourself, and a bottle sent straight to a parent or sibling as a Christmas gift. Checkout has no gift-wrap or gift-message option, so the gift arrives in the same plain packaging as any order. If you want to add a note or wrap it, ship it to yourself instead, as part of your own order, and hand it over. That also turns two orders into one, with one shipping charge. Remember that a refund on a gift order goes to the person who paid, not the recipient, and that Christmas falls on a Friday this year, so order early, since no delivery date is promised.`,
      },
      { h: 'HSA and FSA receipts' },
      {
        p: `If you split an order to keep HSA or FSA purchases apart from personal ones, keep each order’s confirmation email. Your plan administrator may ask for a receipt that shows what was bought, when, and for how much. Plan rules vary, so check with yours. [Getting a receipt for your Quell order](/guides/getting-a-receipt-for-your-order) shows where to find one.`,
      },
      { h: 'A quick check before each order' },
      {
        list: [
          `Is this order going to the right address?`,
          `Is the right card or account being used for it?`,
          `Would one larger order to the same place save a shipping charge?`,
          `Have you written down the order number from the last one?`,
        ],
      },
    ],
    faq: [
      {
        q: 'Can I place more than one Quell order?',
        a: `Yes. Each order is its own checkout with its own order number, confirmation email, shipping charge and tracking. Place each one when you need it.`,
      },
      {
        q: 'Can I ship one eye drop order to two addresses?',
        a: `No. Each order ships to one address, so sending bottles to two places takes two orders, each with its own shipping charge unless it reaches {freeBottles} bottles.`,
      },
      {
        q: 'Can Quell combine two orders I already paid for?',
        a: `The site has no way to merge orders. If you ordered twice by mistake, call {phone} ({hours}) with both order numbers as soon as you can.`,
      },
      {
        q: 'Do two separate orders ship together?',
        a: `Not necessarily. Each order is packed and shipped on its own, with its own tracking, and no delivery date is promised for either.`,
      },
    ],
  },
  {
    slug: 'checking-out-on-a-slow-connection',
    title: 'Checking out on a slow connection',
    description:
      'Spotty Wi-Fi or weak cell signal during checkout? What the button does while it waits, how to tell whether you were charged, and how to try again.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `On a slow connection, start checkout once and wait. After you press the payment button, it changes to “Redirecting…” and can’t be pressed again while the site prepares a secure payment page. Your card isn’t charged until you submit your card on that payment page. If the connection drops before then, nothing was charged. If it drops after you submit payment, check for a confirmation email or look the order up before trying again.`,
      },
      { h: 'How checkout works, in two stages' },
      {
        p: `Quell’s checkout has two parts. First, on this site, you enter your email, shipping address and phone number. When you press the button to continue, the site checks those details, creates your order and sends you to a secure payment page run by the payment processor. Second, on that page, you enter your card and submit. The [terms](/terms) say you authorize the charge when you submit an order, and the payment is recorded only when the processor confirms it. [Why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains the reason for the handoff.`,
      },
      {
        p: `Knowing which stage you were in when the connection failed tells you what happened.`,
      },
      { h: 'If it stalls before the payment page' },
      {
        list: [
          `The button reads “Redirecting…” and is grayed out. That means the site is still waiting for a response. Give it a moment before doing anything.`,
          `If an error message appears above the form, the request didn’t go through. Your card hasn’t been touched, because you never reached the payment page.`,
          `Your cart is saved on that device, so you can try again once your signal improves without rebuilding it.`,
          `On a guest checkout, the details you typed may be filled in again on that browser, so you won’t have to retype your address.`,
        ],
      },
      { h: 'If it stalls on the payment page' },
      {
        p: `If the payment page itself is loading slowly, wait for it to finish before you type your card details. If it fails to load at all, you haven’t been charged. Close it, go back to the [cart](/cart) when your connection is better, and start checkout again. A new attempt may create a new order number; an earlier attempt that never reached payment stays unpaid, and you may get an email saying your cart is waiting. You can ignore it if you’ve since finished the order.`,
      },
      { h: 'If it stalls after you submit your card' },
      {
        p: `This is the case to slow down for. You may have paid even if you never saw the confirmation page. Before you try again:`,
      },
      {
        list: [
          `Check your email, including spam and promotions folders, for a receipt. It’s sent once payment clears.`,
          `If you have the order number, look it up at [order lookup](/orders) with the email you used. A status that starts with “Paid” means the payment went through. “Awaiting payment” means it hasn’t been received yet; if you just paid, it can take a moment to update.`,
          `Check your card account or banking app for a pending charge from the order.`,
          `If you can’t tell, call {phone} ({hours}) before placing a second order.`,
        ],
      },
      {
        p: `Placing a second order while the first is still processing is how people end up with two. If that happens, see [charged twice for one eye drop order?](/guides/charged-twice-for-one-eye-drop-order).`,
      },
      { h: 'If you’re not sure the order exists' },
      {
        p: `Sometimes you can’t remember whether you made it to the payment page at all. Work through it in order. Search your inbox for a message from Quell with an order number. If there’s none, check your card account for a pending charge. If neither shows anything, the safest assumption is that no payment was taken, and you can start again from the cart. If you do find a charge but no email, the email may simply have been mistyped or filtered; [didn’t get an order confirmation email?](/guides/no-order-confirmation-email) walks through that case. Either way, a short call to {phone} during {hours} settles it faster than a second order.`,
      },
      { h: 'Why the button locks while it waits' },
      {
        p: `The payment button is disabled while the site is waiting so a second tap on a slow connection doesn’t send a second request. On a phone, that grayed-out button is easy to mistake for a frozen page. It isn’t. It’s a sign the first tap was received and the site is working on it. If you’re patient for that moment, you avoid the most common way people end up starting checkout twice.`,
      },
      { h: 'Tips for a weak signal' },
      {
        list: [
          `Fill in the form while connected, but wait to press the button until you have a steady signal.`,
          `On a phone, stay in one place rather than walking between rooms or getting in an elevator.`,
          `Switch from weak Wi-Fi to cellular data, or the other way around, before you start, not in the middle.`,
          `Don’t press the browser’s back button or refresh while the payment page is loading or after you submit.`,
          `Avoid shared or public Wi-Fi for entering card details if you have a better option.`,
          `Keep the page open until you see the confirmation page with your order number.`,
        ],
      },
      { h: 'Rural and on-the-road ordering' },
      {
        p: `Plenty of customers order from places with patchy coverage: a farm, a truck stop, a cabin. If your connection is often unreliable, it helps to order well before you run out, so there’s no pressure to finish checkout on one bar of signal. No delivery date is promised, and [ordering eye drops on your phone](/guides/ordering-eye-drops-on-your-phone) has more tips for small screens. Quell ships from Brentwood, Tennessee, to US addresses only.`,
      },
    ],
    faq: [
      {
        q: 'What happens if my internet cuts out during checkout?',
        a: `If it cuts out before you submit your card on the payment page, you haven’t been charged. If it cuts out after you submit, check your email for a receipt or look up the order before trying again.`,
      },
      {
        q: 'Was I charged if the checkout page never loaded?',
        a: `Not if you never submitted your card on the secure payment page. Your cart stays saved on that device, so you can start checkout again when your connection improves.`,
      },
      {
        q: 'Should I refresh the page if checkout is stuck on “Redirecting”?',
        a: `Give it a moment first. Refreshing or pressing back can leave you unsure whether an order went through. If an error appears, nothing was charged, and you can try again.`,
      },
    ],
  },
  {
    slug: 'opened-one-bottle-can-i-return-the-rest',
    title: 'Opened one bottle: can I return the rest?',
    description:
      'Opened one bottle from your order and decided Quell isn’t for you? Unopened bottles from the same order can still be refunded within the window.',
    category: 'returns',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Yes. If you opened one bottle from a multi-bottle order and decided not to keep going, the bottles that are still unopened can be refunded if you ask within {returnDays} days of delivery, and you don’t need to send them back. The opened bottle can’t be refunded. Call {phone} ({hours}) with your order number and say how many bottles are still sealed.`,
      },
      { h: 'What the terms say' },
      {
        p: `The [terms](/terms) look at bottles one at a time, by whether they’re opened. In plain terms: an unopened bottle can be refunded within {returnDays} days of delivery, for the product price, and you keep it rather than mailing it back. An opened bottle can’t be refunded, returned or resold. Original shipping isn’t refunded. The site’s short version: {returns}.`,
      },
      {
        p: `So an order of three bottles where you opened one is, for refund purposes, two refundable bottles and one that isn’t. Nothing in the terms requires you to return a whole order or none of it.`,
      },
      { h: 'Why the opened bottle is different' },
      {
        p: `Once a bottle’s seal is broken, there’s no way to confirm what happened to it afterward: where it was stored, whether the tip touched anything, whether it was kept within the label’s storage range of {storage}. Eye drops go in eyes, so an opened bottle can never go back into stock. [Why opened eye drops can’t be returned](/guides/why-opened-eye-drops-cannot-be-returned) explains this in full.`,
      },
      { h: 'How to ask, step by step' },
      {
        list: [
          `Find your order number in your confirmation email. [How to find a past Quell order](/guides/finding-past-orders) helps if you can’t.`,
          `Count the bottles that are still sealed. Check that the tamper seal on each is intact.`,
          `Note the delivery date, since the {returnDays} days run from delivery.`,
          `Call {phone} during {hours} and say you’d like a refund on the unopened bottles from that order.`,
          `Keep the sealed bottles. You aren’t asked to send them back.`,
        ],
      },
      { h: 'If you opened it and it didn’t feel right' },
      {
        p: `People open a first bottle and stop for different reasons. Some don’t like a drop that feels slick or blurs for a moment. Some find the milky brown color unexpected, though the label describes it: {milky}. Others simply find it isn’t what they wanted. Those are all fine reasons to stop, and the unopened bottles are still refundable.`,
      },
      {
        p: `If you stopped because of eye pain, a change in vision, or irritation that continued, that’s a different matter from preference. The label says: {stopUse} Please don’t just switch to another product and move on; see a doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to wait on.`,
      },
      { h: 'If the opened bottle had a problem' },
      {
        p: `A bottle that arrived with a broken tamper seal, a crack, a leak, or contents that don’t match the label’s description falls under a different rule. Damaged, incorrect and broken-seal orders are replaced within {returnDays} days of delivery. Don’t use a bottle like that. Call with your order number and describe what you found. See [what if the tamper seal is broken?](/guides/broken-tamper-seal) for what to look for.`,
      },
      { h: 'Gift orders' },
      {
        p: `If you bought several bottles as a gift and the recipient opened one, the refund on the rest still goes to the person who paid, to the original payment method. The recipient can let you know how many bottles are sealed, and you call with the order number.`,
      },
      { h: 'Keeping the sealed bottles' },
      {
        p: `Since you aren’t asked to send the sealed bottles back, they stay with you after the refund. You can keep them in case you want to try again later, or give one to a friend or relative who uses lubricating eye drops, with the carton so they can read the caution: {warnings}. If you keep them, store them as the label directs and check the expiration date before using one. Don’t keep using the opened bottle if you’ve decided against it; set it aside rather than leaving it in a bag or car.`,
      },
      { h: 'What the refund covers' },
      {
        p: `The refund is the product price of each unopened bottle. Shipping on the original order isn’t refunded, so if your order shipped free because it reached {freeBottles} bottles, nothing changes on the shipping side. If you paid {shipping} for shipping, that amount stays with the order. [What is refunded on a Quell order?](/guides/what-is-refunded-on-a-return) breaks this down.`,
      },
      { h: 'Watch the window' },
      {
        p: `The window is {returnDays} days from delivery, not from when you opened the first bottle. If you ordered several bottles and plan to try one before deciding about the rest, open the first one soon after the box arrives, so you have time to decide. [When does the refund window on eye drops start?](/guides/when-does-the-eye-drop-refund-window-start) covers the timing.`,
      },
    ],
    faq: [
      {
        q: 'Can I return unopened eye drops if I opened one bottle?',
        a: `Yes. Each unopened bottle from the order can be refunded if you ask within {returnDays} days of delivery, and you don’t have to send them back. The opened bottle isn’t refundable.`,
      },
      {
        q: 'Do I have to return the whole eye drop order to get a refund?',
        a: `No. The terms look at each bottle by whether it’s opened, so you can ask for a refund on just the sealed bottles. Original shipping isn’t refunded.`,
      },
      {
        q: 'Who do I call to get a refund on sealed Quell bottles?',
        a: `Call {phone} during {hours} with your order number and the number of sealed bottles. Ask within {returnDays} days of delivery.`,
      },
    ],
  },
  {
    slug: 'can-i-exchange-eye-drops',
    title: 'Can I exchange eye drops?',
    description:
      'Quell doesn’t list exchanges or store credit. What it does offer: refunds on unopened bottles and replacements for damaged or incorrect orders.',
    category: 'returns',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Quell’s terms don’t describe exchanges or store credit. They describe two things: a refund of the product price on unopened bottles if you ask within {returnDays} days of delivery, with no need to send them back, and a replacement at no charge if an order arrives damaged, incorrect or with a broken tamper seal. Quell is one product in one size, so most “exchange” questions end up as one of those two. Call {phone} with your order number.`,
      },
      { h: 'Why there’s no exchange in the usual sense' },
      {
        p: `In a store, an exchange usually means trading one item for a different size, color or version. Quell comes in one product: a {size} bottle of preservative-free lubricating eye drops. There’s no other size or formula to swap to. That leaves two real situations, and the [terms](/terms) cover both.`,
      },
      { h: 'If something is wrong with the order' },
      {
        p: `If your order arrives damaged, incorrect, or with a broken tamper seal, contact Quell within {returnDays} days of delivery and it will be replaced at no charge. That is the closest thing to an exchange the site offers: you get a good bottle in place of a bad one.`,
      },
      {
        list: [
          `Damaged: a cracked or crushed bottle, a leak, or a box that arrived in pieces.`,
          `Incorrect: the wrong number of bottles, or something other than what you ordered.`,
          `Broken seal: a tamper-evident seal that’s missing, torn or already open. Don’t use that bottle.`,
        ],
      },
      {
        p: `Take a photo of what you received, keep the packaging, and call {phone} ({hours}) with your order number. [What if my Quell order is wrong?](/guides/if-your-order-is-wrong) and [what to do if your Quell order arrives damaged](/guides/damaged-order) go through each case.`,
      },
      { h: 'If you changed your mind' },
      {
        p: `If you don’t want the bottles anymore, the option is a refund, not an exchange. Unopened bottles can be refunded for the product price within {returnDays} days of delivery, and you keep them. Opened bottles can’t be refunded. Original shipping isn’t refunded. In the site’s words: {returns}.`,
      },
      { h: 'Exchanging for more or fewer bottles' },
      {
        p: `Sometimes “exchange” means “I ordered the wrong quantity.” If you ordered too many, you can ask for a refund on the unopened extras; see [ordered too many bottles of eye drops?](/guides/ordered-too-many-bottles-of-eye-drops). If you ordered too few, the answer is a second order. The site has no option to add bottles to an order once it’s paid. Shipping is charged per order, at {shipping}, or free on {freeBottles} or more bottles.`,
      },
      { h: 'What about store credit or a gift card?' },
      {
        p: `The terms don’t mention store credit, and the site doesn’t sell gift cards or take promo codes. A refund goes back to the original payment method. If you paid with an HSA or FSA card, the refund goes back to that card, and your plan administrator may have its own rules about it; check with them.`,
      },
      { h: 'Exchanging a gift' },
      {
        p: `If you received Quell as a gift and it isn’t for you, there’s nothing to exchange it for. The person who bought it can ask for a refund on unopened bottles within {returnDays} days of delivery. Or, if the bottle is sealed and you know someone who uses lubricating eye drops, you can pass it along. Hand over the carton too, so they have the Drug Facts and the caution: {warnings}.`,
      },
      { h: 'If the label or the bottle surprised you' },
      {
        p: `Some exchange questions come from a surprise on opening the box: the drops are milky brown rather than clear, or the bottle is smaller than expected. Both are on the label and the site. The label says: {milky}, and the size is {size}. A bottle that looks like that is normal. One whose contents look different from that description, or have changed color, isn’t: the label’s do-not-use line reads {doNotUse}. That bottle should not be used, and you should call so it can be looked at as an incorrect or damaged order. The [Drug Facts page](/drug-facts) shows the panel as printed.`,
      },
      { h: 'Exchanging after the window' },
      {
        p: `Both the refund on unopened bottles and the replacement of damaged or incorrect orders are tied to the {returnDays} days after delivery. The terms don’t describe what happens after that. If you find a problem later, call anyway and explain, but don’t count on a refund or a replacement. Checking the box when it arrives is the simple way to stay inside the window; [what to check when your Quell order arrives](/guides/what-to-check-when-your-order-arrives) lists what to look at.`,
      },
      { h: 'Before you call' },
      {
        list: [
          `Your order number, from the confirmation email.`,
          `The delivery date, to check you’re inside the {returnDays} days.`,
          `How many bottles are unopened.`,
          `For a damaged or incorrect order, a description and a photo.`,
        ],
      },
      {
        p: `Calls are answered during {hours}. If you have a question about your eyes rather than your order, that’s one for your eye doctor or pharmacist; [order questions vs. medical questions](/guides/order-questions-vs-medical-questions) explains the difference.`,
      },
    ],
    faq: [
      {
        q: 'Does Quell do exchanges?',
        a: `The terms don’t list exchanges. They offer a refund of the product price on unopened bottles within {returnDays} days of delivery, and a replacement at no charge for damaged, incorrect or broken-seal orders.`,
      },
      {
        q: 'Can I get store credit instead of a refund for eye drops?',
        a: `Quell’s terms don’t describe store credit. A refund on unopened bottles goes back to the original payment method.`,
      },
      {
        q: 'Can I swap my eye drop order for a different quantity?',
        a: `Not as an exchange. You can ask for a refund on unopened extras within {returnDays} days of delivery, or place a second order if you need more bottles.`,
      },
    ],
  },
]
