import type { Guide } from '@/lib/guide-types'

export const DAILY_20261125_B: Guide[] = [
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-weslaco-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USC00419588, WESLACO, TX, elev 75 ft. Raw JSON saved at
   *   .daily-job/acis1125/USC00419588.json.
   *   (Normal max/min F and precip in: Jan 71.3/50.0, 1.02; Feb 75.4/53.5, 0.95;
   *   Mar 80.7/60.1, 1.45; Apr 86.3/65.1, 1.46; May 90.3/71.5, 2.61; Jun 94.6/75.5,
   *   2.79; Jul 95.7/76.5, 2.24; Aug 97.3/76.4, 1.87; Sep 92.0/72.8, 5.64;
   *   Oct 87.2/66.0, 2.84; Nov 79.9/58.4, 1.61; Dec 72.0/51.6, 1.25. Monthly precip
   *   sums to 25.73 in. Snowfall normals missing, left out.)
   * - County (Hidalgo) from src/lib/locations.generated.ts.
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-weslaco-tx',
    title: 'Dry eye relief in Weslaco, Texas',
    description:
      'Weslaco averages 90°F or hotter from May through September, so cooled air runs most of the year. NOAA’s numbers and plain steps for dry, tired eyes.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `In Weslaco, dry eyes usually come from the long hot season and the air conditioning it demands, not from dry weather. NOAA’s 1991–2020 normals for the Weslaco station put average highs at 90°F or above from May through September, with nights in the mid-70s. Aim vents and fans away from your face, give your eyes screen breaks, use a lubricating drop exactly as its label directs, and see an eye doctor if the discomfort keeps returning.`,
      },
      { h: 'A Weslaco year, month by month' },
      {
        p: `The figures below come from NOAA’s 1991–2020 climate normals for the Weslaco cooperative station, which sits at about 75 feet above sea level in Hidalgo County. Read them as a calendar of what your eyes are up against:`,
      },
      {
        list: [
          `January: average high 71.3°F, low 50.0°F, about 1.02 inches of rain. Windows can stay open on many days.`,
          `February: the driest month on the record at 0.95 inches, with highs of 75.4°F.`,
          `March and April: highs climb from 80.7°F to 86.3°F, and the air conditioner starts earning its keep again.`,
          `May through August: highs of 90.3°F, 94.6°F, 95.7°F and then 97.3°F, the hottest month of the year.`,
          `September: the wet month, at 5.64 inches, roughly double October’s 2.84 inches, with highs still at 92.0°F.`,
          `October through December: highs ease from 87.2°F to 72.0°F, and rain drops back near an inch and a half or less by November and December.`,
        ],
      },
      {
        p: `Added together, the monthly normals come to about 25.7 inches of rain a year. That’s modest, but the real story for your eyes is the number of months the house, the car and the office spend sealed up and cooled.`,
      },
      { h: 'Warm nights keep the air conditioner running' },
      {
        p: `Weslaco’s summer lows barely dip. NOAA’s normals put June nights at 75.5°F, July at 76.5°F and August at 76.4°F, so the cooling doesn’t switch off when the sun goes down. Air conditioning pulls moisture out of the room as it cools it, and a ceiling fan over the bed keeps that drier air moving across your face for hours. Many people notice the result as eyes that feel dry or scratchy on waking.`,
      },
      {
        list: [
          `Point bedroom vents toward the wall or floor, not the pillow.`,
          `Set the ceiling fan to its lowest speed at night, or angle a box fan at your feet instead of your head.`,
          `Keep a few degrees of difference between day and night settings so the system cycles less.`,
          `If you use a lubricating drop in the morning, put it in after you’ve washed up and before you start a screen session.`,
        ],
      },
      { h: 'Why humid September air doesn’t settle it' },
      {
        p: `It’s easy to assume a wet month means comfortable eyes. September brings Weslaco more rain than any other month, yet its average high is still 92.0°F, so most of the day is spent indoors with the cooling on. Outdoor humidity doesn’t reach you in a chilled office. Between blinks, the tear film’s watery layer evaporates faster in that cooled, moving air, and the thin oil layer on top is what slows the loss. Keep cold air off your face during the wet season as carefully as you would in August.`,
      },
      { h: 'The mild months: December through February' },
      {
        p: `Winter in Weslaco is the gentlest stretch of the year for indoor air. January’s normal low is 50.0°F and December’s is 51.6°F, so heat runs only on the cooler mornings, and on many days you can switch the system off and open a window. Those months are also the driest on the record, about an inch of rain apiece, which tends to bring dust on breezy days and more time outdoors in bright sun. Sunglasses with wide lenses or a wraparound shape block both glare and moving air. A brimmed hat helps on long errands and yard work.`,
      },
      { h: 'Outdoor work in the Valley heat' },
      {
        p: `Fieldwork, construction, landscaping, deliveries and school pickup duty all keep people outside through the hot months. The early start is the kindest hour: summer mornings in Weslaco begin in the mid-70s, while afternoons run into the mid-90s. A few habits help on a long outdoor shift:`,
      },
      {
        list: [
          `Wear the eye protection your job requires, and choose a tinted or wraparound pair when the work allows.`,
          `Use a sweatband or a hat with a band to keep sweat and sunscreen out of your eyes.`,
          `Rest your eyes in shade during breaks: close them for a few seconds, then blink fully several times.`,
          `When you climb into a truck that’s been sitting in the sun, start the AC with the vents pointed at your chest.`,
          `If grit, a chemical or anything else gets into your eye and doesn’t clear, stop and get it looked at. A lubricating drop isn’t for that.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `For a Weslaco household running the AC from spring to fall, Quell is one piece of the routine: a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. For how often, the panel says: {directions}. Keep the dropper clean, because the label warns: {tip}.`,
      },
      {
        p: `The storage line matters in South Texas: {storage}. A bottle left on a dashboard in August will go far past that range, so keep it in a bag or pocket that comes inside with you. The label also notes: {milky}. You can read the whole panel on our [Drug Facts page](/drug-facts). It doesn’t give directions for contact lenses, children or use with other drops; ask your eye doctor or pharmacist about those.`,
      },
      { h: 'Getting Quell in Weslaco' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Weslaco and the rest of Hidalgo County. Check out as a guest, and shipping is {shipping}, or free on {freeBottles} or more bottles. We don’t promise a delivery date, so it helps to reorder before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. The [Weslaco page](/eye-drops/weslaco-tx) and the [Texas page](/eye-drops/state/texas) have local details. Nearby, our guides for [McAllen](/guides/dry-eye-relief-mcallen-tx) and [Harlingen](/guides/dry-eye-relief-harlingen-tx) look at the same Valley heat from other stations.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry, uncomfortable eyes have more than one possible cause, and an eye doctor can find the cause and decide what to do. The label is specific about when to stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs, and the [self-check](/self-check) can help you put your symptoms into words before an appointment. It’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Weslaco, Texas get?',
        a: 'NOAA’s 1991–2020 normals for the Weslaco station put the average August high at 97.3°F, the hottest month of the year. Highs average 90°F or more from May through September.',
      },
      {
        q: 'What is the rainiest month in Weslaco?',
        a: 'September, at 5.64 inches in NOAA’s normals for the Weslaco station. February is the driest month, at 0.95 inches.',
      },
      {
        q: 'Does it get cold in Weslaco in the winter?',
        a: 'Not often. January’s normal low at the Weslaco station is 50.0°F and its normal high is 71.3°F, so heating runs only on cooler mornings and windows can stay open on many winter days.',
      },
      {
        q: 'Can I get Quell shipped to Hidalgo County, Texas?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Weslaco and the rest of Hidalgo County. Orders of {freeBottles} or more bottles ship free, and no delivery date is promised.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-palm-coast-fl:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USC00086767, PALM COAST 6NE, FL, elev 5 ft. Raw JSON saved
   *   at .daily-job/acis1125/USC00086767.json.
   *   (Normal max/min F and precip in: Jan 65.2/49.2, 3.34; Feb 67.9/52.1, 3.60;
   *   Mar 72.4/56.0, 3.09; Apr 77.8/62.3, 2.51; May 82.8/69.5, 2.79; Jun 86.2/75.5,
   *   5.92; Jul 87.8/76.5, 6.27; Aug 87.8/76.7, 6.41; Sep 86.0/75.6, 7.67;
   *   Oct 80.8/69.4, 4.45; Nov 73.7/60.4, 2.46; Dec 68.5/53.1, 2.93. Monthly precip
   *   sums to 51.44 in. Snowfall "M", left out.)
   * - County (Flagler) from src/lib/locations.generated.ts.
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-palm-coast-fl',
    title: 'Dry eye relief in Palm Coast, Florida',
    description:
      'Palm Coast is humid, yet sea breeze, sun on the sand and months of air conditioning still dry the eyes. NOAA’s local numbers and day-to-day relief.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Palm Coast’s air is damp for most of the year, so dry eyes here usually come from wind off the ocean, bright sun on sand and water, and air conditioning from late spring into fall. NOAA’s normals for a coastal station just northeast of town show four wet summer months and a drier November. Wear wraparound sunglasses outdoors, keep vents off your face, use a lubricating drop as its label directs, and see an eye doctor if it lingers.`,
      },
      { h: 'What the Palm Coast 6NE station records' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Palm Coast 6NE cooperative station, about six miles northeast of town and roughly 5 feet above sea level, give a clear picture of the year:`,
      },
      {
        list: [
          `Coolest month: January, with an average high of 65.2°F and an average low of 49.2°F.`,
          `Warmest months: July and August, both averaging 87.8°F, with August nights at 76.7°F.`,
          `Wettest month: September, at 7.67 inches, the peak of a June-through-September run in which every month tops 5.9 inches.`,
          `Driest month: November, at 2.46 inches, followed closely by April at 2.51 inches.`,
          `Yearly total: the monthly normals add up to about 51.4 inches.`,
        ],
      },
      {
        p: `None of that describes a dry place. What it does describe is a coast where people spend a lot of time outdoors in wind and sun, then come inside to cooled air for half the year.`,
      },
      { h: 'Why your eyes feel dry at the beach' },
      {
        p: `A walk on the sand in Flagler County puts your eyes in steady, moving air with nothing to break it. Wind speeds evaporation from the tear film between blinks, and bright light off the water makes you squint, which can turn full blinks into half ones. Salt spray dries on your skin and hands and can sting if you rub your eyes. You don’t need a dry day for any of this: a humid sea breeze still moves air across the eye’s surface.`,
      },
      {
        list: [
          `Wear wraparound or close-fitting sunglasses; polarized lenses cut glare off wet sand and water.`,
          `Walk with the wind at your back on the way out when you can, so your face takes it only once.`,
          `Rinse salt and sunscreen off your hands with fresh water before you touch your eyes or a dropper.`,
          `Keep the bottle in a shaded bag, not on a hot towel or a car seat in the sun.`,
        ],
      },
      { h: 'Four wet months, and the cooling that comes with them' },
      {
        p: `From June through September, Palm Coast’s normal highs sit between 86°F and 88°F and the lows stay above 75°F, so air conditioning runs around the clock. Indoor air in a sealed, cooled house is far drier than the muggy air outside the door, and a vent or ceiling fan aimed at a couch or bed pushes that dry air straight across your eyes. A few adjustments help: point vents at the floor, keep fans on low near where you sit or sleep, and step away from a screen every 20 minutes or so to blink fully.`,
      },
      { h: 'Cool, breezy winter mornings' },
      {
        p: `January mornings at the 6NE station average 49.2°F and December’s average 53.1°F. That’s cool enough for the heat to come on briefly, and for a sharp breeze to sting on an early walk, bike ride or round of golf. Your own speed on a bicycle or golf cart adds to the wind, so glasses help even on cloudy days. A short burst of heat in the morning followed by an open window by noon is typical, and the eyes usually notice the heated part most: keep the thermostat modest and don’t sit in front of a space heater.`,
      },
      { h: 'November and the holiday weeks' },
      {
        p: `November is the driest month on the record, and the holiday stretch brings its own habits: ovens running for hours, guests in the house, long drives up and down the coast and late nights catching up on screens. None of these is unique to Palm Coast, but together they add up. Keep the car’s vents low on long trips, take breaks from phones and tablets, and remember that a lubricating drop works alongside those habits rather than in place of them.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `On the coast, a lubricating drop belongs alongside sunglasses and lower vents, not in place of them. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. How often to use it: {directions}. The label also carries a caution worth reading before the first drop: {warnings}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car parked at the beach in July can run far hotter than that, so carry the bottle with you. If the bottle ever looks different from usual, the label is plain about it. Do not use: {doNotUse}. The panel doesn’t cover contact lenses, children or other drops, so ask an eye doctor or pharmacist about those. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Palm Coast' },
      {
        p: `We ship from Brentwood, Tennessee, to Palm Coast, the rest of Flagler County and every other US address. Guest checkout takes a few minutes, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. See the [Palm Coast page](/eye-drops/palm-coast-fl) and the [Florida page](/eye-drops/state/florida), or read our guide to [Daytona Beach](/guides/dry-eye-relief-daytona-beach-fl) just down the coast.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for ordinary dryness and irritation. Anything beyond that is for an eye doctor, who can find the cause and decide what to do. The label puts it this way: {stopUse} Sand or a shell fragment that you can’t blink out also needs a professional, not a drop. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to watch for.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Palm Coast, Florida?',
        a: 'November, with 2.46 inches of rain in NOAA’s 1991–2020 normals for the Palm Coast 6NE station. April is close behind at 2.51 inches.',
      },
      {
        q: 'How cold does Palm Coast get in the winter?',
        a: 'January is the coolest month at the Palm Coast 6NE station, with an average low of 49.2°F and an average high of 65.2°F.',
      },
      {
        q: 'Why do my eyes feel dry at the beach in Palm Coast?',
        a: 'Steady wind off the ocean speeds evaporation from the tear film, and glare off sand and water makes you squint and blink less fully. Wraparound sunglasses and clean hands before touching your eyes both help.',
      },
      {
        q: 'Does Quell ship to Flagler County, Florida?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Palm Coast and the rest of Flagler County. Shipping is {shipping}, or free on {freeBottles} or more bottles.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-palm-springs-ca:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USW00093138, PALM SPRINGS ASOS, CA (airport, FAA PSP),
   *   elev 409 ft. Raw JSON saved at .daily-job/acis1125/USW00093138.json.
   *   (Normal max/min F and precip in: Jan 70.5/47.6, 1.14; Feb 73.7/49.7, 1.11;
   *   Mar 80.6/54.4, 0.51; Apr 86.7/59.1, 0.09; May 94.7/65.9, 0.02; Jun 103.6/72.7,
   *   0.00; Jul 108.6/79.4, 0.25; Aug 108.1/79.8, 0.14; Sep 101.8/74.4, 0.24;
   *   Oct 91.1/64.5, 0.20; Nov 78.7/53.4, 0.23; Dec 69.2/46.2, 0.68. Monthly precip
   *   sums to 4.61 in. Snowfall "M", left out.)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-palm-springs-ca',
    title: 'Dry eye relief in Palm Springs, California',
    description:
      'Palm Springs gets about 4.6 inches of rain a year and summer nights near 80°F. NOAA’s airport numbers, plus practical relief for dry desert eyes.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Palm Springs is true desert, so dry eyes there come from the climate itself and from the cooling needed to live in it. NOAA’s 1991–2020 normals for the airport station add up to about 4.6 inches of rain a year, and summer nights average close to 80°F. Wear wraparound sunglasses outside, keep air conditioning off your face, rest your eyes at screens, use a lubricating drop as labeled, and see an eye doctor if symptoms persist.`,
      },
      { h: 'Palm Springs weather in NOAA’s numbers' },
      {
        p: `The normals below come from the Palm Springs ASOS station at the city’s airport, about 409 feet above sea level:`,
      },
      {
        list: [
          `July averages a high of 108.6°F and August 108.1°F. June, July, August and September all average above 100°F.`,
          `June’s normal rainfall is 0.00 inches. April through November each average a quarter inch or less.`,
          `The wettest months are January (1.14 inches) and February (1.11 inches).`,
          `December is the coolest month, with an average high of 69.2°F and a low of 46.2°F.`,
          `The monthly normals total about 4.61 inches of rain a year.`,
        ],
      },
      { h: 'Summer nights that never cool off' },
      {
        p: `The nighttime numbers explain why air conditioning in Palm Springs runs without a break from late spring into fall. NOAA’s normal lows are 79.4°F in July and 79.8°F in August, warmer than a winter afternoon. That means the bedroom is cooled for hours every night, and cooled air is dry air. If you wake with eyes that feel stuck or scratchy, look first at where the vent or ceiling fan is pointed. Aim the airflow at the foot of the bed, keep the fan on its lowest speed, and consider a room humidifier sized for the space, cleaned as its maker directs.`,
      },
      { h: 'Pools, patios and glare' },
      {
        p: `Much of Palm Springs life happens by the water. Sun reflecting off a pool deck or the water itself makes you squint, and squinting cuts blinks short. Pool water can sting if it gets in your eyes, and the breeze across a lounge chair keeps evaporating the tear film while you read or nap. A few things help:`,
      },
      {
        list: [
          `Swim goggles keep pool water out; sunglasses go back on as soon as you’re out.`,
          `Sit under an umbrella or a shade sail with your back to the breeze.`,
          `Put your phone or e-reader down every so often and look across the yard for a while, blinking fully.`,
          `Keep eye drops in a bag in the shade, never on a sunny table or a car dashboard.`,
          `If pool water or a chemical gets into your eye and the stinging doesn’t stop, get it checked rather than reaching for a lubricating drop.`,
        ],
      },
      { h: 'The winter season outdoors' },
      {
        p: `From November through March, Palm Springs is at its most comfortable, with average highs between about 69°F and 81°F. Those are the months for golf, tennis, hiking and long lunches outside, which means long hours in bright sun with little moisture in the air. On a course or a trail, wear wraparound sunglasses and a brim, and take a moment at each stop to close your eyes and rest them. Evening temperatures can drop into the 40s from December through February, so a patio heater or a fire pit may come out after sunset. Sit beside the heat rather than facing it.`,
      },
      { h: 'Flying in and out of the desert' },
      {
        p: `The weather station sits at the airport, and plenty of residents and visitors use it. A flight adds cabin air on top of the desert’s own dryness, and many people arrive with eyes already feeling it. Pack drops in your carry-on, turn the overhead vent away from your face, and take a break from the screen on the seatback. Our guide to [dry eyes on a plane](/guides/dry-eyes-on-a-plane) covers the cabin in more detail.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `In a place this dry, it helps to know exactly what a drop is for. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the Drug Facts panel lists its Uses as: {uses}. The directions on the carton say: {directions}. Poolside or on the patio, keep the tip off tables and towels; the label puts it this way: {tip}.`,
      },
      {
        p: `Storage needs real attention in the Coachella Valley. The label reads: {storage}. A summer afternoon here runs well past the top of that range, so the bottle belongs inside, in a cool cabinet or a bag that travels with you, not in the car. The panel doesn’t give directions for contact lenses, children or other drops; ask an eye doctor or pharmacist. See the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Palm Springs' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Palm Springs and anywhere else in the United States. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and no delivery date is promised. During the hottest months, bring the package inside soon after it arrives. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Palm Springs page](/eye-drops/palm-springs-ca) and the [California page](/eye-drops/state/california) have more, and our [Indio guide](/guides/dry-eye-relief-indio-ca) covers the eastern end of the valley.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eyes that stay uncomfortable despite shade, sunglasses and careful use of a lubricating drop deserve an exam. The label says: {stopUse} Blowing sand or grit that won’t blink out also needs a professional. An eye doctor can find the cause and decide what to do, and our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Palm Springs get at night in the summer?',
        a: 'NOAA’s 1991–2020 normals for the Palm Springs airport station put average lows at 79.4°F in July and 79.8°F in August, so cooling usually runs through the night.',
      },
      {
        q: 'How much rain does Palm Springs get a year?',
        a: 'About 4.6 inches, adding up NOAA’s monthly normals for the Palm Springs ASOS station. June averages none, and January and February are the wettest months at a little over an inch each.',
      },
      {
        q: 'Why do my eyes sting by the pool in Palm Springs?',
        a: 'Glare off the water and deck makes you squint, dry air and breeze evaporate the tear film, and pool water can irritate if it splashes in. Goggles, sunglasses and shade help. Stinging that doesn’t stop needs an eye doctor.',
      },
      {
        q: 'Can I get Quell delivered in Palm Springs, California?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Palm Springs and every other US address. Bring the package inside promptly in hot weather, since the label gives a storage range.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-montrose-co:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USW00093013, MONTROSE REGIONAL AP, CO, elev 5707 ft. Raw
   *   JSON saved at .daily-job/acis1125/USW00093013.json.
   *   (Normal max/min F and precip in: Jan 38.5/15.8, 0.41; Feb 45.3/22.2, 0.42;
   *   Mar 55.4/28.7, 0.62; Apr 63.2/35.1, 0.78; May 73.7/43.4, 0.82; Jun 85.5/51.9,
   *   0.36; Jul 90.0/58.0, 0.80; Aug 86.7/56.1, 0.90; Sep 78.6/47.9, 1.17;
   *   Oct 65.2/36.2, 0.98; Nov 50.9/25.3, 0.56; Dec 38.6/16.1, 0.46. Monthly precip
   *   sums to 8.28 in. Snowfall "M", left out.)
   * - County (Montrose) from src/lib/locations.generated.ts.
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-montrose-co',
    title: 'Dry eye relief in Montrose, Colorado',
    description:
      'Montrose sits near 5,700 feet with about 8.3 inches of precipitation a year and January lows near 16°F. NOAA’s numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Montrose is high, dry and cold in winter. NOAA’s 1991–2020 normals for Montrose Regional Airport, at about 5,700 feet, add up to roughly 8.3 inches of precipitation a year, with January lows near 16°F and July highs of 90°F. Furnace-dried rooms in winter and bright, dry afternoons in summer both thin the tear film. Keep heat and vents off your face, wear sunglasses outside, use a lubricating drop as labeled, and see an eye doctor if it persists.`,
      },
      { h: 'Montrose by the numbers' },
      {
        p: `These figures come from NOAA’s 1991–2020 climate normals for the Montrose Regional Airport station, about 5,707 feet above sea level:`,
      },
      {
        list: [
          `January: average high 38.5°F, average low 15.8°F. December is nearly the same, at 38.6°F and 16.1°F.`,
          `July: average high 90.0°F, average low 58.0°F, the warmest month.`,
          `June: the driest month, at 0.36 inches.`,
          `September: the wettest month, at 1.17 inches, with October close behind at 0.98.`,
          `No month averages more than about an inch and a fifth, and the monthly normals total about 8.28 inches.`,
        ],
      },
      { h: 'Five months of freezing nights' },
      {
        p: `From November through March, Montrose’s average lows sit below freezing: 25.3°F in November, 16.1°F in December, 15.8°F in January, 22.2°F in February and 28.7°F in March. October and April lows hover in the mid-30s. That’s a long heating season. Cold outdoor air holds very little water, and when a furnace, a wood stove or a pellet stove warms it, the relative humidity indoors drops further. People often feel it first in their eyes, especially in the evening after hours in a warm room.`,
      },
      {
        list: [
          `Keep the thermostat moderate; the warmer the room, the drier it feels.`,
          `Don’t sit facing a wood stove, a fireplace insert or a forced-air register.`,
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Turn the heat down at night instead of leaving it high while you sleep.`,
        ],
      },
      {
        p: `From the woodstove in the living room to the furnace vent by the bed, our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through what helps in a Montrose-style heating season.`,
      },
      { h: 'A 30-degree swing from morning to afternoon' },
      {
        p: `High, dry air cools off fast at night and warms quickly in the sun. In July, NOAA’s normals put Montrose’s average low at 58.0°F and its high at 90.0°F. June’s gap is wider still, about 34 degrees. So a summer day can start with the car heater on and end with the air conditioning running, both blowing at your face if the vents are left where they were. Point them at your chest or the windshield, and keep a pair of sunglasses in the car for the bright afternoon drive home.`,
      },
      { h: 'June: dry, bright and long' },
      {
        p: `June averages only 0.36 inches of precipitation at the airport, the least of any month, and highs climb to 85.5°F. That’s the season for long days on trails, on the water and in the garden, under strong sun and with little moisture in the air. Afternoon storms later in the summer bring more rain, with August at 0.90 inches and September at 1.17, but June is the stretch when your eyes have the least help from the weather.`,
      },
      {
        list: [
          `Wear wraparound sunglasses and a brimmed hat outdoors.`,
          `Turn your back to gusts on open ground when you stop to rest.`,
          `Take short breaks to close your eyes for a few seconds and blink fully.`,
          `If dust or grit gets in your eye and won’t clear, have it looked at instead of rubbing.`,
        ],
      },
      { h: 'Winter driving and mountain trips' },
      {
        p: `Winter in Montrose means early dark, icy mornings and drives over the passes or out to the slopes. A defroster set to full blast at face level dries the eyes quickly, and long stretches of concentrated driving slow your blink rate. Aim the airflow at the windshield and feet, stop to rest your eyes on long drives, and wear goggles rather than sunglasses on the ski hill, since they block more of the wind. If you fly out of the regional airport, cabin air adds its own dryness.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Through a long Western Slope heating season, a lubricating drop can sit beside the humidifier as part of the routine. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions on the box read: {directions}. With gloves coming on and off all winter, mind the dropper; the panel says: {tip}.`,
      },
      {
        p: `Cold matters for storage too. The label says: {storage}. A bottle left in a truck on a January night in Montrose will fall far below that range, so bring it in with you. The label adds a caution: {warnings}. It doesn’t give directions for contact lenses, children or use with other drops; ask an eye doctor or pharmacist about those. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Montrose' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Montrose, the rest of Montrose County and everywhere else in the United States. Shipping is {shipping}, or free on {freeBottles} or more bottles, and checkout works without an account. We don’t promise a delivery date, so reorder with time to spare, particularly before winter storms. Unopened bottles can be refunded within {returnDays} days of delivery, no return needed. See the [Montrose page](/eye-drops/montrose-co), the [Colorado page](/eye-drops/state/colorado), or our guide to [Grand Junction](/guides/dry-eye-relief-grand-junction-co), down the valley.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `If your eyes stay uncomfortable through the winter despite a cooler, more humid house, an eye doctor can find the cause and decide what to do. Follow the label: {stopUse} The [self-check](/self-check) can help you describe what you’re noticing before an appointment, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Montrose, Colorado get in the winter?',
        a: 'NOAA’s 1991–2020 normals for Montrose Regional Airport put the average January low at 15.8°F and the average high at 38.5°F. December is nearly as cold.',
      },
      {
        q: 'How much precipitation does Montrose, CO get?',
        a: 'The monthly normals at Montrose Regional Airport add up to about 8.3 inches a year. September is the wettest month at 1.17 inches, and June the driest at 0.36.',
      },
      {
        q: 'Why are my eyes so dry in Montrose in the winter?',
        a: 'Cold outdoor air holds little moisture, and heating it indoors drops the humidity further. With average lows below freezing from November through March, that heated air surrounds you for months.',
      },
      {
        q: 'Does Quell ship to Montrose County, Colorado?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Montrose County and every other US address. Orders of {freeBottles} or more bottles ship free, and no delivery date is promised.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-zookeepers',
    title: 'Dry eyes for zookeepers',
    description:
      'Winter rounds in the wind, heated animal houses, hay and bedding dust: why zookeepers’ eyes dry out, what helps on shift, and when to see a doctor.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Zookeepers’ eyes dry out because the job moves between cold wind on outdoor rounds, warm heated animal buildings, and dust from hay, straw, shavings and feed. Each one speeds evaporation from the tear film or irritates the eye’s surface. Wear the eye protection your facility issues, turn away from wind and dust when you can, wash your hands before touching your face, and use a lubricating drop on breaks as its label directs.`,
      },
      { h: 'What a keeper’s day does to the eyes' },
      {
        p: `Few jobs change air as often as animal care. A winter shift might start in a dark, cold service yard, move through a building kept warm for animals from hot climates, head back out to open exhibits in the wind, and finish at a desk entering notes. Your eyes adjust to each change by blinking and producing tears, but rapid swings, moving air and airborne particles all thin the tear film faster than it can keep up. By the afternoon, many keepers notice a dry, scratchy or tired feeling that eases on days off.`,
      },
      { h: 'Outdoor rounds in winter wind' },
      {
        p: `Hoofstock yards, bird exhibits and open habitats don’t close because it’s cold. Wind across an open yard pulls moisture off the eye between blinks, and the cold makes you squint and tear up, which can leave the eyes feeling drier once you’re back inside. Low winter sun also sits right at eye level for much of the day.`,
      },
      {
        list: [
          `Wear the glasses your facility provides; a wraparound or close-fitting pair blocks more side wind.`,
          `Work with your back to the wind when the task and the animals allow it.`,
          `A brimmed cap cuts low-angle glare during morning checks.`,
          `When you step into a building after a long stretch outside, give your eyes a minute of slow, full blinks before reading charts or screens.`,
        ],
      },
      { h: 'Heated animal houses and holding areas' },
      {
        p: `Buildings for reptiles, primates, tropical birds or big cats are often kept much warmer than the outdoors in winter. Some are humid; others are heated with forced air that runs dry. Heat lamps and radiant heaters warm the face directly, and fans that move air for the animals move it across your eyes too. If a building feels dry, pick your work position so that vents and heaters are beside you rather than in front of you, and keep your water bottle and eye drops away from heat lamps.`,
      },
      { h: 'Hay, bedding and feed dust' },
      {
        p: `Shaking out a bale, spreading shavings, sweeping a barn or pouring pellets puts fine dust into the air at face height. That dust can make dry eyes feel gritty and irritated. Work at arm’s length from the bale, let dust settle before you lean in, and keep the protective glasses on through the whole task, not just the start of it. A lubricating drop is for dryness and irritation, not for flushing out debris.`,
      },
      {
        p: `If a piece of hay, a chip of bedding, sand, feed or anything else gets into your eye and won’t blink out, stop working and follow your facility’s first-aid procedure, then get it looked at by an eye doctor or urgent care. Don’t keep rubbing, and don’t try to wash it out with drops.`,
      },
      { h: 'Hoses, disinfectants and cleaning days' },
      {
        p: `Keepers spend a lot of time hosing exhibits and scrubbing with disinfectants. Spray bounces, and cleaning fumes can sting. Follow the label and your facility’s rules for every cleaning product, including the eye protection they call for. If a cleaning chemical splashes into your eye, use the eyewash station and call Poison Control or get to urgent care as the product’s label directs. A lubricating eye drop isn’t a substitute for any of that.`,
      },
      { h: 'Keeper talks, records and screens' },
      {
        p: `Public talks put you in front of a crowd, often facing into the sun so visitors don’t have to. Between shifts there are diet sheets, behavioral notes, enrichment logs and training records, much of it on a tablet or a computer in a heated office. Focusing on a screen slows the blink rate. Look up from the screen every 20 minutes or so, finish each blink, and lower the monitor slightly so your eyes aren’t opened as wide.`,
      },
      { h: 'Using a drop on shift' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses on the Drug Facts panel read: {uses}. Directions: {directions}. Hands that have handled animals, food or bedding need washing first, and the label adds: {tip}. Use a drop on a break in a clean area, not inside an enclosure or holding room.`,
      },
      {
        p: `Keep the bottle in your locker or a bag that stays in a staff area. The label says: {storage}. That rules out a truck cab in summer, a heat lamp ledge or a freezing outdoor shed in winter. The panel’s warning reads: {warnings}. It doesn’t give directions for contact lenses, children or other drops, so ask an eye doctor or pharmacist about those. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Related jobs and ordering' },
      {
        p: `Plenty of the same advice applies to [animal control officers](/guides/dry-eyes-for-animal-control-officers) and [veterinarians and vet techs](/guides/dry-eyes-for-veterinarians-and-vet-techs), and our guide to [outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers winter weather in general. Quell ships from Brentwood, Tennessee, to any US address, including a work address. Shipping is {shipping}, or free on {freeBottles} or more bottles. [Order from the home page](/#buy) as a guest.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Work around animals means eye injuries are always possible: a scratch, a peck, a tail flick, a splash. Any injury belongs with an eye doctor or urgent care right away. For ordinary dryness, the label sets the limit: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do zookeepers get dry eyes?',
        a: 'The work moves between cold wind outdoors, warm and sometimes dry heated animal buildings, and dust from hay, bedding and feed. Each speeds evaporation from the tear film or irritates the eye.',
      },
      {
        q: 'What should a zookeeper do if hay or bedding gets in their eye?',
        a: 'Stop, follow your facility’s first-aid procedure and have it checked by an eye doctor or urgent care if it doesn’t blink out. Don’t rub, and don’t use a lubricating drop to try to wash it out.',
      },
      {
        q: 'Where can zookeepers keep eye drops at work?',
        a: 'In a locker or a bag in a clean staff area, away from heat lamps and freezing sheds. Quell’s label says: {storage}.',
      },
      {
        q: 'Do heated reptile and primate houses dry out your eyes?',
        a: 'Some do. Buildings heated with forced air or radiant heaters can be dry, and fans move that air across your face. Standing beside vents and heaters rather than in front of them helps.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-tour-guides',
    title: 'Dry eyes for tour guides',
    description:
      'Hours of walking, talking and pointing in sun and wind, then a bus with the vents on: why tour guides’ eyes dry out and how to get through the season.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Tour guides’ eyes dry out because the job means hours outdoors in sun and wind, long stretches looking at faces and landmarks without blinking much, and climate-controlled buses blowing air at the front seat. Each speeds evaporation from the tear film. Position your group so you aren’t staring into the sun, wear sunglasses when you can, aim bus vents away from your face, and use a lubricating drop between tours as its label directs.`,
      },
      { h: 'Why guiding is hard on the eyes' },
      {
        p: `A walking tour asks a lot of your eyes at once. You’re watching the group so nobody drifts, scanning traffic at crossings, pointing out details on buildings, and holding eye contact while you tell a story. Concentration slows the blink rate, and every incomplete blink lets the tear film thin a little more. Add outdoor air that’s often moving, and a day of back-to-back tours can leave your eyes dry, scratchy or tired by the last group.`,
      },
      { h: 'Standing so the sun isn’t in your eyes' },
      {
        p: `Guides usually arrange a group so visitors can see the sight behind them, which often means the guide faces the sun. Squinting into bright light cuts blinks short and makes eyes water and then dry out. With a little planning, you can share the glare more fairly:`,
      },
      {
        list: [
          `Scout each stop at the times you’ll be there, and note where the sun sits.`,
          `Stand at an angle to the group instead of straight on, so neither side looks directly into the light.`,
          `Use shade from an awning, a tree or a doorway for longer talks.`,
          `In winter, low afternoon sun sits right at eye level; plan the stops where it’s behind a building.`,
        ],
      },
      { h: 'Can tour guides wear sunglasses?' },
      {
        p: `Many guides worry that sunglasses make them seem distant. Eye contact matters to a good tour, but so does being able to see without squinting. A common compromise is to wear sunglasses while walking between stops and slip them up onto your head while you talk in shade. Lightly tinted lenses let a group see your eyes and still cut some glare. If your company has a uniform policy, check it, and ask about a brimmed hat as part of the kit.`,
      },
      { h: 'Wind on rooftops, waterfronts and open squares' },
      {
        p: `Waterfront promenades, bridges, rooftop terraces and open plazas tend to be breezy, and you may stand there talking for ten minutes at a time. Wind pulls moisture off the eye between blinks. Turn so the wind is at your back or your side when you stop, keep the stop short if it’s gusty, and let visitors take photos while you step into a sheltered spot. On boat or open-top bus tours, wraparound sunglasses block both wind and spray.`,
      },
      { h: 'Buses, vans and microphones' },
      {
        p: `On a coach or van tour, the guide often sits or stands at the front, right under the vents and near the windshield. Air conditioning in summer and heat in winter both dry the air, and a vent aimed at your face pushes that air straight across your eyes for the length of the drive. Ask the driver to close or redirect the vent above your seat. Between commentary, look out the side windows at distant scenery and blink fully rather than reading notes or a phone.`,
      },
      { h: 'Holiday and evening tours' },
      {
        p: `Many cities run evening tours in December: light displays, historic districts after dark, food tours through crowded markets. Cold night air is dry, wind still blows, and bright lights against a dark sky encourage long stares. Dress warmly, keep the bottle in an inside pocket so it doesn’t freeze, and give your eyes a break by looking into the darker areas between displays. Our guide to [dry eyes at a holiday light show](/guides/dry-eyes-at-a-holiday-light-show) covers the visitor’s side.`,
      },
      { h: 'Between tours: screens and bookings' },
      {
        p: `Much of the job happens off the street: checking bookings, answering messages, studying new material and posting photos. If your breaks are spent on a phone, your eyes never really rest. Use part of each break to close your eyes for a minute, then look at something far away. If you study scripts on a laptop, raise the text size and lower the screen a little.`,
      },
      { h: 'Using a drop between groups' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Put a drop in after a tour rather than in front of a group, wash or sanitize your hands first, and remember the label’s note: {tip}. The label also says: {warnings}.`,
      },
      {
        p: `A guide’s bag spends hours in the sun and the cold. The label’s storage line is: {storage}. Keep the bottle in an inside pocket in winter and out of a hot bus luggage bay in summer. The panel doesn’t give directions for contact lenses, children or use with other drops; ask an eye doctor or pharmacist. Read everything on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering, and when to see a doctor' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Shipping is {shipping}, or free on {freeBottles} or more bottles, so it can make sense to stock up before a busy season. [Order from the home page](/#buy) without creating an account. Guides with similar days include [museum guards and docents](/guides/dry-eyes-for-museum-guards-and-docents) and [public speakers](/guides/dry-eyes-for-public-speakers).`,
      },
      {
        p: `A lubricating drop is for ordinary dryness. Dust, grit or anything else in the eye that won’t blink out needs an eye doctor or urgent care. For everything else the label is clear: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry giving tours?',
        a: 'Hours outdoors in sun and wind, long stretches of concentrated looking with fewer full blinks, and bus vents blowing at the front seat all speed evaporation from the tear film.',
      },
      {
        q: 'Is it rude for a tour guide to wear sunglasses?',
        a: 'Not if you handle it thoughtfully. Many guides wear them while walking and lift them up while talking in shade, or choose a light tint that lets the group see their eyes. Check any uniform policy first.',
      },
      {
        q: 'How should a tour guide stand to avoid sun glare?',
        a: 'Stand at an angle to the group rather than facing it head on, so nobody looks straight into the sun, and use shade from awnings or trees for longer talks.',
      },
      {
        q: 'Can I use eye drops in front of a tour group?',
        a: 'You can, but it’s easier between tours with clean hands. Follow the label’s directions and keep the tip from touching anything, since the label says: {tip}.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-port-and-dock-workers',
    title: 'Dry eyes for port and dock workers',
    description:
      'Wind off the water, diesel exhaust, cargo dust and long nights under floodlights: why dockworkers’ eyes dry out and what helps on a long shift.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Port and dock workers get dry, irritated eyes from steady wind off the water, diesel exhaust from trucks and yard equipment, dust from bulk cargo, and long night shifts under bright floodlights. All of it speeds evaporation from the tear film or irritates the eye. Wear the eye protection your employer requires, keep your back to wind and exhaust when you can, rest your eyes on breaks, and use a lubricating drop only as its label directs.`,
      },
      { h: 'Why the waterfront dries your eyes' },
      {
        p: `A marine terminal is open ground beside open water, and there’s usually nothing to slow the wind. Moving air pulls moisture off the eye between blinks, salt spray dries on your face and hands, and the job rarely lets you stop and turn away. Add exhaust, dust and glare, and dry eyes become part of many longshore workers’ shifts, especially in winter when the wind is cold.`,
      },
      { h: 'Wind on the berth and the apron' },
      {
        p: `Lashing containers, handling lines, guiding loads and checking boxes all happen in the open. When the wind picks up, your eyes take it head on.`,
      },
      {
        list: [
          `Wear the safety glasses or goggles your employer specifies; a close-fitting or wraparound style blocks more side wind.`,
          `Position yourself with the wind at your back or side when the work allows.`,
          `Keep a hood or the brim of a hard-hat cap low against spray.`,
          `On breaks, get behind a container stack or into a shelter and give your eyes a minute of slow, full blinks.`,
        ],
      },
      { h: 'Diesel, dust and cargo' },
      {
        p: `Trucks queue at the gate, yard tractors shuttle chassis, and ship engines and generators run at the berth. Exhaust can sting. Bulk cargo such as grain, minerals, cement or scrap throws fine dust into the air when it’s loaded or unloaded, and ordinary terminal grit blows around on dry days. Dust on a dry eye feels gritty and uncomfortable. Stand upwind of exhaust and loading points when you can, and keep your protective eyewear on for the whole job.`,
      },
      {
        p: `If dust, a metal fleck, a splinter, rust or anything else gets into your eye and doesn’t clear with blinking, stop and report it, use your site’s first-aid procedure, and get to an eye doctor or urgent care. If a chemical or fuel splashes in, use the eyewash and follow the product’s safety instructions or call Poison Control. A lubricating drop is not for any of these.`,
      },
      { h: 'Nights under the floodlights' },
      {
        p: `Many ports work around the clock. A night shift under high-mast lighting means looking from bright pools of light into dark gaps between stacks and back, often for twelve hours. That kind of focused, careful looking slows your blink rate. Make a habit of a few deliberate full blinks whenever you finish a task. When you get home, keep the bedroom cool, dark and free of a fan blowing on your face so your eyes can rest while you sleep through the day.`,
      },
      { h: 'Cabs, checker booths and handhelds' },
      {
        p: `Not everyone on the dock works in the open. Equipment operators sit in cabs with heaters or air conditioning aimed at them, and clerks and checkers spend hours on handheld scanners, tablets and booth screens. Aim cab vents at your chest or the glass, not your face. Our guides for [crane operators](/guides/dry-eyes-for-crane-operators) and [forklift operators](/guides/dry-eyes-for-forklift-operators) go deeper on cab work. In a booth, lower the screen slightly and look out the window every so often.`,
      },
      { h: 'Using a drop on a break' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Dock hands are rarely clean, so wash up before you touch your eyes; the label says: {tip}.`,
      },
      {
        p: `A pickup bed or an unheated container office can get very cold or very hot. The label’s storage line reads: {storage}. Keep the bottle in an inside pocket in winter and in your locker in summer. The panel doesn’t cover contact lenses, children or other drops, so ask an eye doctor or pharmacist. See the [Drug Facts page](/drug-facts) for the complete text.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a home near the port or a work address where someone signs for mail. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order before your bottle runs low. You can check out as a guest from the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Waterfront work carries a real risk of eye injury. Any blow, scratch, splash or embedded particle needs an eye doctor or urgent care right away. For ordinary dryness, follow the label: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs, and [commercial fishermen](/guides/dry-eyes-for-commercial-fishermen) face a lot of the same wind and spray.`,
      },
    ],
    faq: [
      {
        q: 'Why do dock workers get dry eyes?',
        a: 'Steady wind off the water, diesel exhaust, cargo dust and long shifts under bright lights all dry or irritate the eye’s surface. Winter wind on an open terminal makes it worse.',
      },
      {
        q: 'What should a longshore worker do if something gets in their eye?',
        a: 'Stop, report it and use the site’s first-aid procedure, then get to an eye doctor or urgent care if it doesn’t clear. A chemical or fuel splash calls for the eyewash and Poison Control. Lubricating drops aren’t for this.',
      },
      {
        q: 'Do night shifts at the port make dry eyes worse?',
        a: 'They can. Focused work under floodlights slows blinking, and sleeping through the day with a fan blowing on your face dries the eyes further. Deliberate full blinks and a calm bedroom both help.',
      },
      {
        q: 'Can I keep eye drops in my truck at the terminal?',
        a: 'Only if the cab stays within the label’s range, which reads: {storage}. A locker or an inside pocket is usually safer through the hottest and coldest months.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-girlfriend',
    title: 'Christmas gifts for a girlfriend',
    description:
      'Christmas gift ideas for a girlfriend, whether you’ve been dating a few months or a few years, plus when eye drops make a thoughtful extra.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `The Christmas gifts girlfriends appreciate most usually prove you pay attention: something she mentioned wanting, an experience planned around what she enjoys, or an upgrade to something she uses every day. How long you’ve been together shapes how big to go. If she often says her eyes feel dry from screens or winter heat, lubricating eye drops can be a small, practical extra, after you check the label for anything that rules them out.`,
      },
      { h: 'Start with what she’s already told you' },
      {
        p: `Most people drop hints without meaning to. Think back over the last few months: a coat she tried on and put back, a restaurant she keeps mentioning, a hobby she wants to try, a book series she’s halfway through, a complaint about her old headphones. Write those down now, while there’s time to act on them. Christmas falls on a Friday this year, December 25, so a list made the week after Thanksgiving leaves room to plan.`,
      },
      { h: 'If you’ve only been dating a few months' },
      {
        p: `Early in a relationship, a gift that’s thoughtful but not too heavy usually lands well. Good options include:`,
      },
      {
        list: [
          `Tickets to something you can do together, like a concert, a show or a holiday market.`,
          `A nicer version of something she uses daily: a travel mug, a scarf, a phone stand, a candle she likes.`,
          `A book or record connected to a conversation you’ve had.`,
          `A small, specific thing that shows you remembered, wrapped with a card that says why.`,
        ],
      },
      { h: 'If you’ve been together for years' },
      {
        p: `A longer relationship gives you more to work with, and often more permission to be practical. Think about what would make her week easier or more enjoyable:`,
      },
      {
        list: [
          `A planned day or weekend away, with the bookings already done.`,
          `A class or lesson in something she’s talked about learning.`,
          `Comfort for the long winter: good slippers, a heavier blanket, a humidifier for the bedroom.`,
          `Something to replace a worn-out favorite, chosen to match what she already loves.`,
          `A framed photo or printed album from the past year together.`,
        ],
      },
      { h: 'Gifts for the way she spends her days' },
      {
        p: `If she works long hours on a computer, studies late, drives a lot or works outdoors, a gift can make those hours more comfortable. A desk lamp with warm light, a monitor stand, a pair of quality sunglasses, warm gloves that work with a touchscreen, or a reusable heat pack all fit here. If she often rubs her eyes in the evening or says they feel dry, that’s worth noticing too.`,
      },
      { h: 'Are eye drops a good gift for a girlfriend?' },
      {
        p: `On their own, eye drops can feel more like a pharmacy run than a present. Tucked into a stocking or added to a bigger gift, they read as care: you noticed she’s uncomfortable and did something about it. They make the most sense when she’s already said her eyes feel dry, so the gift answers something she told you rather than pointing out a problem. Our guide to [whether eye drops are a good gift](/guides/are-eye-drops-a-good-gift) talks through when they work.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The bottle is {size}, and it looks different from clear drops. As our product page puts it: {appearance}`,
      },
      { h: 'Check the label before you buy' },
      {
        p: `A gift that goes in someone’s eyes needs a quick look at the Drug Facts panel first. Its Uses read: {uses}. The warnings say: {warnings}. If she has an egg or bird allergy, skip this gift; our [egg or bird allergy guide](/guides/egg-or-bird-allergy-and-quell) explains why the label says so. The panel doesn’t give directions for contact lenses, so if she wears them, she should ask her eye doctor before using it. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering so it stays a surprise' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Shipping is {shipping}, or free on {freeBottles} or more bottles. Order it to your own address if you live apart, or to a time when you’ll be the one at home. The receipt and tracking go to the email you enter at checkout, so use your own. We can’t promise a delivery date, so order early. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. [Sending Quell as a gift](/guides/sending-quell-as-a-gift) covers the rest.`,
      },
      { h: 'More gift guides' },
      {
        p: `Browse every holiday guide under [gifts and the holidays](/guides/topic/seasonal). If you’re further along, [Christmas gifts for your wife](/guides/christmas-gifts-for-your-wife) has ideas for a longer partnership, and [gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes) gathers comfort gifts that go beyond a bottle.`,
      },
      {
        p: `One last point: if she has eye pain, vision changes or dryness that won’t go away, that’s a reason to encourage an eye doctor visit, not a reason to buy drops. The label puts it plainly: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What should I get my girlfriend for Christmas?',
        a: 'Start with something she has mentioned wanting, then think about an experience you can share or an upgrade to something she uses every day. A card that says why you chose it matters as much as the price.',
      },
      {
        q: 'What do you get a girlfriend you just started dating for Christmas?',
        a: 'Keep it thoughtful but light: tickets to something you can do together, a nicer version of an everyday item, or a book tied to a conversation you’ve had.',
      },
      {
        q: 'Are eye drops a weird Christmas gift for a girlfriend?',
        a: 'Alone they can feel clinical, but in a stocking or alongside a bigger gift they show you noticed her eyes feel dry. Check the label first, including its egg and bird allergy caution.',
      },
      {
        q: 'How do I ship a Christmas gift to my girlfriend without her seeing the price?',
        a: 'Ship it to your own address and wrap it yourself, and use your own email at checkout so the receipt and tracking come to you.',
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-christmas-tree-lighting',
    title: 'Dry eyes at a Christmas tree lighting ceremony',
    description:
      'Standing in the cold after dark, a packed crowd, bright lights and cocoa steam: why tree lightings leave eyes dry and how to enjoy the countdown.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `A Christmas tree lighting ceremony can leave your eyes dry because you stand outdoors in cold evening air for an hour or more, often in a breeze between buildings, staring at a stage and then at a tree full of bright lights while blinking less. Dress for the cold, find a spot out of the wind, wear clear or lightly tinted glasses, look away from the lights now and then, and carry a lubricating drop in an inside pocket.`,
      },
      { h: 'Why a tree lighting is hard on your eyes' },
      {
        p: `Most tree lightings follow the same pattern. People arrive early to claim a good spot, stand through music and speeches on a lit stage, count down together, then watch the tree glow before heading home. That’s a long time outside after sunset, when the air is cold and dry, and much of it spent watching one point intently. Concentration slows blinking, cold air and wind speed evaporation from the tear film, and by the time the lights come on, your eyes may sting, water or feel scratchy.`,
      },
      { h: 'Picking your spot in the crowd' },
      {
        p: `Where you stand makes more difference than people expect. Town squares and plazas often funnel wind between buildings, and the edge of an open lawn takes the full breeze.`,
      },
      {
        list: [
          `Stand on the side of the square sheltered by a building or a row of trees.`,
          `Keep your back to the wind if you can still see the stage.`,
          `Avoid standing directly beside a propane heater or a food-truck exhaust fan.`,
          `If you’re there with family, take turns holding the spot so each person can step into a shop doorway to warm up.`,
        ],
      },
      { h: 'Cocoa steam, cold air and wet eyes' },
      {
        p: `A cup of hot cocoa or cider warms your hands, and the steam feels pleasant on your face. Then a gust hits, and the warm, damp skin around your eyes feels colder than before. Cold air can also make the eyes water, and the extra tears tend to spill rather than spread, so the eyes can feel watery and dry at once. Sip with your head turned slightly away from the wind, and don’t rub your eyes with gloves that have touched railings, programs and sticky cups. Our guide to [why eyes can be watery and dry](/guides/why-are-my-eyes-watery-if-they-are-dry) explains the effect.`,
      },
      { h: 'The countdown, the lights and your phone' },
      {
        p: `The moment the tree lights up, most people do the same two things: stare at it, and raise a phone to record it. Both slow blinking. Looking at a bright display against a dark sky, people tend to hold their eyes wide open, and filming means watching a small bright screen at arm’s length. Enjoy the moment, then let your eyes rest: look into a darker area for a few seconds, blink fully several times, and put the phone away after the first minute.`,
      },
      { h: 'What to wear and carry' },
      {
        list: [
          `Glasses with clear or light lenses block wind without darkening the lights; wraparound frames block more.`,
          `A hat with a brim and a scarf you can pull up cut side drafts around the eyes.`,
          `Gloves that let you handle a phone without taking them off, so your hands stay clean and warm.`,
          `Hand sanitizer or wipes, for before you touch your eyes.`,
          `Your eye drops, in an inside pocket where body heat keeps the bottle from getting too cold.`,
        ],
      },
      { h: 'Using a drop at an outdoor event' },
      {
        p: `If your eyes start to feel dry while you wait, step out of the crush to somewhere you can stand still. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. Directions: {directions}. Clean your hands, tip your head back, and keep the bottle from touching anything; the label says: {tip}.`,
      },
      {
        p: `Cold matters. The label’s storage range is: {storage}. A bottle in an outside coat pocket on a freezing night can fall below that, so keep it close to your body. If a bottle ever looks different from its usual appearance, the label says not to use it: {doNotUse}. The panel doesn’t give directions for contact lenses, children or other drops; ask an eye doctor or pharmacist. All of it is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'The drive or walk home' },
      {
        p: `After an hour in the cold, the first thing most people do is crank the car heater. Aim the vents at your feet and the windshield instead of your face, and let the car warm gradually. If you’re heading on to a holiday light show, our guide to [driving to see Christmas lights](/guides/driving-to-see-christmas-lights-with-dry-eyes) has tips for the slow crawl past displays. At home, a humidifier in the bedroom helps your eyes recover from an evening of cold, dry air.`,
      },
      { h: 'More holiday outings' },
      {
        p: `Tree lightings often kick off a season of evenings outdoors. Our [Thanksgiving parade guide](/guides/dry-eyes-at-a-thanksgiving-parade) covers early-morning crowds, and the full list is under [gifts and the holidays](/guides/topic/seasonal). Quell ships from Brentwood, Tennessee, to any US address; shipping is {shipping}, or free on {freeBottles} or more bottles, and we don’t promise a delivery date.`,
      },
      {
        p: `If something blows into your eye, like a piece of confetti, grit or a stray bit of tinsel, and it doesn’t blink out, get it looked at rather than reaching for drops. Ongoing eye pain or changes in vision need an eye doctor too. The label’s rule: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water at a Christmas tree lighting?',
        a: 'Cold evening air and wind can make the eyes water, and the extra tears tend to spill rather than spread over the eye. Staring at the stage and the lights also slows blinking, so the eyes can feel watery and dry at the same time.',
      },
      {
        q: 'What should I wear to a tree lighting ceremony?',
        a: 'Dress for standing still in the cold: layers, a hat with a brim, a scarf, touchscreen gloves and clear or lightly tinted glasses to block the wind without dimming the lights.',
      },
      {
        q: 'Can I bring eye drops to an outdoor holiday event?',
        a: 'Yes. Keep them in an inside pocket so the bottle stays within the label’s storage range, and use them somewhere you can stand still with clean hands.',
      },
      {
        q: 'Is it bad to stare at bright Christmas lights?',
        a: 'For dry eyes, the bigger factor is the staring: watching any bright display slows your blink rate. Look into a darker area and blink fully every so often.',
      },
    ],
  },
  {
    slug: 'dry-eyes-at-an-outdoor-bowl-game',
    title: 'Dry eyes at an outdoor bowl game',
    description:
      'A bowl trip means a travel day, a hotel room, hours in cold stands and a late trip home. How to keep your eyes comfortable from kickoff to the drive back.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `An outdoor bowl game can leave your eyes dry because the trip stacks several drying conditions into one weekend: a flight or long drive, a heated hotel room, hours in cold, windy stands, a bright halftime show and a late trip home. Plan the travel day as carefully as the game: keep vents off your face, wear glasses in the stands, rest your eyes between quarters, and pack a lubricating drop where it won’t freeze or overheat.`,
      },
      { h: 'Why a bowl trip is different from a home game' },
      {
        p: `A regular-season game usually means a familiar drive, your own seats and your own bed that night. A bowl game during the holiday season often means traveling to another city, sleeping somewhere new and spending a long day away from your routine. Each step adds a little dryness: cabin air, a hotel heater, wind in an open stadium, and then the long trip back. Some bowls are played in warm-weather cities or under a roof; this guide is for the open-air ones where it’s cold enough to see your breath.`,
      },
      { h: 'Travel day: the flight or the drive' },
      {
        list: [
          `On a plane, turn the overhead vent away from your face and keep your eye drops in your carry-on, not your checked bag.`,
          `On a long drive, aim the heater at your feet and the windshield and take a break every couple of hours to look at something far away.`,
          `Pack sunglasses where you can reach them; a westbound afternoon drive in winter puts low sun right in your eyes.`,
          `If you’re in a bus with other fans, ask to adjust or close the vent above your seat.`,
        ],
      },
      {
        p: `Our guide to [dry eyes on a plane](/guides/dry-eyes-on-a-plane) covers the cabin in more detail.`,
      },
      { h: 'The hotel room the night before' },
      {
        p: `Hotel heating and cooling units often sit right under the window and blow across the room, and a room shared by several fans can get warm and stuffy. Before bed, set the thermostat a few degrees lower than you might at home and point the unit’s vanes toward the wall. If the hotel offers a humidifier on request, it’s worth asking. Late-night phone scrolling about the matchup does your eyes no favors either; put the screen down at a reasonable hour so they get a proper rest before a long day.`,
      },
      { h: 'Game day in the stands' },
      {
        p: `An open stadium is a bowl of moving air, and the upper rows catch the most wind. Bowl games often kick off in the afternoon or evening, so you may sit through the sunset and well into the cold of the night. Hours of watching the ball, the scoreboard and the replay screen slow your blinking, and the wind does the rest.`,
      },
      {
        list: [
          `Wear wraparound sunglasses for the daylight part of the game and switch to clear glasses after dark.`,
          `Pull a hat brim low and a scarf or neck gaiter up to cut drafts across your face.`,
          `During timeouts and commercial breaks, close your eyes for a few seconds, then blink fully.`,
          `If your seats are high up and exposed, take a walk to the concourse at halftime to get out of the wind for a while.`,
        ],
      },
      { h: 'Halftime shows, fireworks and big screens' },
      {
        p: `Bowl games tend to bring extra spectacle: marching bands under bright lights, video boards, sometimes fireworks before kickoff or after a score. Watching bright displays against a dark sky, people tend to hold their eyes wide and blink less. Enjoy the show, then look down at the field or your program for a moment to let your eyes rest. If smoke from fireworks or tailgate grills drifts into the stands and stings, turn away from it. Anything that lands in your eye and won’t blink out needs a first-aid station or an eye doctor, not a drop.`,
      },
      { h: 'Packing eye drops for the trip' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Use a drop where you can stand still with clean hands, like the concourse at halftime, and keep the tip from touching anything, since the label says: {tip}.`,
      },
      {
        p: `Temperature is the main packing concern. The label says: {storage}. On a freezing night, keep the bottle in an inside pocket, not in a bag under your seat or in a car parked for six hours. Stadium bag rules vary, so check the venue’s policy before you go. The panel doesn’t give directions for contact lenses, children or other drops; ask an eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'The trip home' },
      {
        p: `After the final whistle comes the slow exit from the parking lot, often late at night, with the car heater running hard. Aim the vents low, keep the defroster on the windshield rather than your face, and switch drivers if your eyes feel heavy or dry. If you’re flying out the next morning, a short night and an early flight add up; give your eyes a break from screens in the airport. Our guides to [a cold-weather tailgate](/guides/dry-eyes-at-a-cold-weather-tailgate) and [an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) cover more of the game-day details.`,
      },
      { h: 'Order before you go' },
      {
        p: `If you’re running low, order before the trip rather than counting on finding drops in a strange city. Quell ships from Brentwood, Tennessee, to any US address; shipping is {shipping}, or free on {freeBottles} or more bottles. We don’t promise a delivery date, so leave time. Browse more winter outings under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      {
        p: `Eye pain, changes in vision or dryness that sticks around after the trip are for an eye doctor, who can find the cause and decide what to do. The label puts it this way: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at bowl games?',
        a: 'An outdoor bowl trip combines travel, a heated hotel room and hours in a cold, windy stadium, and watching the game slows your blinking. Each step speeds evaporation from the tear film.',
      },
      {
        q: 'What should I bring to a cold bowl game for my eyes?',
        a: 'Wraparound sunglasses for daylight, clear glasses for after dark, a hat with a brim, a scarf or neck gaiter, hand sanitizer and eye drops in an inside pocket.',
      },
      {
        q: 'Can I pack eye drops for a bowl game trip?',
        a: 'Yes. Keep them in your carry-on if you fly, and in an inside pocket at the stadium so the bottle stays within the label’s storage range. Check the venue’s bag policy before you go.',
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-tight',
    title: 'Why do my eyes feel tight?',
    description:
      'Eyes that feel tight are often drying out between blinks, from screens, heated air or wind. What a tight feeling can mean, what helps and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Eyes often feel tight when the tear film is drying out between blinks, so the lids and the eye’s surface lose some of their smooth glide. Long screen sessions, heated or air-conditioned rooms, wind and short sleep are common triggers. Blink fully, rest your eyes, move away from vents, and try a lubricating drop as its label directs. A tight feeling with pain, headache, vision changes or pain when you move your eyes needs an eye doctor promptly.`,
      },
      { h: 'What people mean by tight eyes' },
      {
        p: `“Tight” is a word people reach for when no other one fits. Some mean the eyelids feel stiff or stretched, as if they don’t want to close all the way. Others mean the eyeball itself feels pulled or strained, or that the skin around the eyes feels taut. Those can have different causes, so it helps to notice which one you have, when it starts and what eases it. That’s the kind of detail an eye doctor will ask about.`,
      },
      { h: 'Why do my eyes feel tight and dry?' },
      {
        p: `When tight comes with dry, scratchy or burning, the tear film is the first suspect. Tears coat the eye in a thin layer of oil, water and mucus, and each blink spreads a fresh coat. If the water evaporates faster than it’s replaced, the surface dries in patches, and the lids drag a little instead of gliding. Many people describe that drag as tightness. Situations that tend to cause it:`,
      },
      {
        list: [
          `Hours at a computer or phone, which cut the blink rate and leave many blinks incomplete.`,
          `Heated air in winter or air conditioning in summer, especially with a vent aimed at your face.`,
          `Wind, cold or your own speed on a bike, a run or a ski slope.`,
          `A flight, where cabin air is dry and the trip is long.`,
          `A short or restless night.`,
        ],
      },
      { h: 'Why do my eyes feel tight when I wake up?' },
      {
        p: `A tight, stuck feeling first thing in the morning is common in dry bedrooms. A ceiling fan or a heating vent blowing toward the bed dries the air around your face for hours, and you don’t blink while you sleep. Try turning the fan down, redirecting the vent, running a humidifier and keeping the thermostat a little cooler at night. If mornings stay rough despite those changes, mention it to an eye doctor; our guide to [dry eyes in the morning](/guides/dry-eyes-in-the-morning-when-you-wake-up) has more on the bedroom.`,
      },
      { h: 'Why do my eyes feel tight and tired?' },
      {
        p: `Tight and tired together often follow long stretches of close work. Focusing up close for hours keeps the eye’s focusing muscles busy, and the slowed blinking that comes with concentration dries the surface. The result can feel like pressure or strain around the eyes. Breaks help both: every 20 minutes, look at something about 20 feet away for 20 seconds, and close your eyes for a moment between tasks. Our guide to [whether eye drops help with eye strain](/guides/do-eye-drops-help-with-eye-strain) separates the two.`,
      },
      { h: 'When tight eyes need a doctor, not a drop' },
      {
        p: `Some tight feelings aren’t about dryness at all. See an eye doctor promptly, or get urgent care, if a tight or pressured feeling comes with any of these:`,
      },
      {
        list: [
          `Eye pain, or pain when you move your eyes.`,
          `Blurred vision that doesn’t clear when you blink, halos around lights or any other change in vision.`,
          `A headache, nausea or a feeling of pressure behind the eye.`,
          `Swelling of the lids or around the eye.`,
          `Sensitivity to light, or a feeling that something is stuck in the eye.`,
          `Tightness that started after an injury.`,
        ],
      },
      {
        p: `Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes into more detail. An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'What helps when it’s dryness' },
      {
        list: [
          `Blink on purpose: close your eyes gently all the way, pause, then open. Do it several times.`,
          `Lower your screen so you look slightly down; your eyes don’t open as wide.`,
          `Move out of the path of vents, fans and space heaters.`,
          `Wear wraparound glasses outdoors in wind.`,
          `Use a humidifier in the room where you spend the most time.`,
        ],
      },
      { h: 'Can eye drops help tight eyes?' },
      {
        p: `If the tight feeling comes from dryness, a lubricating drop may help the surface feel smoother. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. Read the warning first: {warnings}. The label stops there: it doesn’t address headaches, pressure or vision changes, and it gives no directions for contact lenses or other drops.`,
      },
      {
        p: `The label also sets a clear limit: {stopUse} You can read the full panel on our [Drug Facts page](/drug-facts), or [order Quell](/#buy) as a guest.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel tight and dry?',
        a: 'Usually because the tear film is drying out between blinks, often from screens, heated or cooled air, wind or a flight. The lids drag instead of gliding, and many people describe that as tightness.',
      },
      {
        q: 'Why do my eyes feel tight when I wake up?',
        a: 'A fan or heating vent blowing toward the bed can dry the air around your face for hours while you sleep. Redirecting vents, lowering the fan and using a humidifier often help.',
      },
      {
        q: 'Why do my eyes feel tight when I move them?',
        a: 'That isn’t a typical dryness symptom. Pain or tightness when you move your eyes should be checked by an eye doctor promptly.',
      },
      {
        q: 'Can eye drops help with tight eyes?',
        a: 'If the tightness comes from dryness, a lubricating drop used as labeled may help. Pain, pressure, headache or vision changes need an eye doctor instead.',
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-cold',
    title: 'Why do my eyes feel cold?',
    description:
      'Eyes can feel cold in wind, outdoors in winter or when they’re drying out. Why it happens, why they may water too, and what to do about it.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Eyes usually feel cold because cold air or wind is moving across the surface, which also speeds evaporation from the tear film. Many people notice it outdoors in winter, on a bike or in front of a fan, often with watering or a dry, stinging feeling. Shield your eyes from wind, step into still air, blink fully and use a lubricating drop as labeled if they also feel dry. Pain, vision changes or a cold feeling that won’t go away need an eye doctor.`,
      },
      { h: 'The eye is one of the few uncovered surfaces' },
      {
        p: `In winter you can bundle up almost everything but your eyes. The front of the eye is covered only by the thin tear film and, between blinks, it’s open to whatever air is moving past. The eye’s surface is sensitive, so cold, moving air is something you notice there right away. That’s why a bitter wind can make your eyes ache or sting while your face, under a scarf, feels fine.`,
      },
      { h: 'Why do my eyes feel cold when I blink?' },
      {
        p: `When the surface has been drying in the air and you blink, the lid spreads a fresh layer of tears across it. People sometimes notice that moment as a cool or slightly chilly feeling, especially outdoors in winter or right after time in front of a fan. A strong sense of cold with every blink can also go along with a surface that’s drying out quickly, which is worth paying attention to if it happens indoors too.`,
      },
      { h: 'Why do my eyes feel cold and watery?' },
      {
        p: `Cold air and wind often make the eyes water. That reflex sends a rush of tears, but they’re not always well spread by your blinks, so they spill over the lid and run down your cheek. The eyes can feel cold, wet and dry all at once. Indoors again, the watering stops and the dryness may stay. Our guide to [why eyes water if they’re dry](/guides/why-are-my-eyes-watery-if-they-are-dry) explains the effect in more depth.`,
      },
      { h: 'Common situations' },
      {
        list: [
          `Walking or waiting for a bus on a windy winter day.`,
          `Cycling, running or skiing, where your own speed adds to the wind.`,
          `Sitting under a ceiling fan or in front of an air conditioner.`,
          `Riding in a car with the vents aimed at your face.`,
          `Working in cold storage, a walk-in freezer or an unheated garage.`,
          `Standing outside for a long event, like a parade or a game.`,
        ],
      },
      { h: 'What helps cold, uncomfortable eyes' },
      {
        list: [
          `Put a barrier between your eyes and the wind: wraparound sunglasses, clear safety glasses or ski goggles.`,
          `Pull a hat brim low and turn your back to gusts when you stop.`,
          `Move fans and air conditioners so they don’t blow toward your face.`,
          `When you come inside, close your eyes for a few seconds and let them warm up before reading or using a screen.`,
          `Resist rubbing, especially with cold gloves.`,
        ],
      },
      {
        p: `Our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more on glasses and goggles.`,
      },
      { h: 'Do eye drops feel cold going in?' },
      {
        p: `Sometimes. A drop from a bottle kept in a cool room is cooler than the eye’s surface, so the first moment can feel chilly. Either way, the label sets the storage range. Quell’s reads: {storage}. If a bottle was left somewhere colder than that, such as a car on a winter night, check it before using it; our guide to [using cold eye drops](/guides/can-you-use-cold-eye-drops) walks through what to look for.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `If your eyes feel cold and dry after time in the wind, a lubricating drop used as labeled may help with the dryness. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Put it in somewhere sheltered, with clean hands; the label adds: {tip}. It gives no directions for contact lenses, children or use with other drops, so ask an eye doctor or pharmacist about those.`,
      },
      { h: 'When a cold feeling is a reason to see a doctor' },
      {
        p: `Cold, watery eyes in wind usually settle once you’re indoors. See an eye doctor if the feeling comes with pain, changes in vision, sensitivity to light, a feeling that something is in the eye, or if your eyes feel cold or numb indoors without an obvious reason. The label’s own limit reads: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs, and the [Drug Facts page](/drug-facts) has the full label.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel cold when I blink?',
        a: 'Each blink spreads fresh tears over a surface that’s been exposed to the air, and some people feel that as a cool sensation, especially outdoors in winter or under a fan. If it happens constantly indoors, mention it to an eye doctor.',
      },
      {
        q: 'Why do my eyes feel cold and watery outside?',
        a: 'Cold wind triggers reflex watering, and those tears tend to spill rather than spread. The eyes can feel cold, wet and dry at the same time.',
      },
      {
        q: 'Why do my eyes feel cold and dry?',
        a: 'Cold, moving air speeds evaporation from the tear film, so the surface dries while it’s chilled. Wraparound glasses, getting out of the wind and a lubricating drop used as labeled can help.',
      },
      {
        q: 'Should I see a doctor if my eyes feel cold?',
        a: 'Yes, if it comes with pain, vision changes, light sensitivity or a feeling that something is in the eye, or if your eyes feel cold or numb indoors for no clear reason.',
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-scratchy',
    title: 'Why do my eyes feel scratchy?',
    description:
      'A scratchy eye with nothing in it is often a dry surface between blinks. How to tell dryness from something real in the eye, and when it’s a doctor’s job.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Eyes usually feel scratchy because the tear film has thinned and the lids are wiping across a surface that isn’t fully wet, which can feel like a lash or a speck when nothing is there. Dry indoor air, screens, wind and long days are common triggers. Blink fully, rest your eyes and try a lubricating drop as labeled. If something may really be in the eye, or there’s pain or blurred vision, see an eye doctor.`,
      },
      { h: 'Why does my eye feel scratchy but nothing is in it?' },
      {
        p: `It’s one of the most common puzzles people bring to a mirror. You pull the lid down, look carefully in good light, and find nothing. The scratchy feeling can still be real. The eye’s surface is sensitive, and when the tear film breaks up in patches between blinks, the inside of the lid rubs against those drier spots. Your brain reads that friction as something foreign. It often moves around, comes and goes with blinking, and eases for a moment after a long, slow blink, which is part of what separates it from an actual speck.`,
      },
      { h: 'Scratchy, gritty or sandy: one family of feelings' },
      {
        p: `People describe the same underlying dryness in different ways. “Gritty” and “sandy” usually mean a rough feeling across the whole eye. “Scratchy” more often means a smaller spot, sometimes under the upper lid or in one corner. “Burning” tends to come with a tired, hot feeling late in the day. None of these words on its own tells you the cause, but noticing which one fits, and when, helps an eye doctor. Our guide to [why eyes feel gritty](/guides/why-do-my-eyes-feel-gritty) covers that end of the range.`,
      },
      { h: 'Why do my eyes feel scratchy after work?' },
      {
        p: `A scratchy feeling that builds through the day and peaks on the drive home usually tracks your environment. Office air is heated or cooled, screens slow your blinking, and many blinks become half-blinks that don’t spread tears over the lower part of the eye. Contact with dust, a warehouse floor, a kitchen or a job site adds particles that a dry eye feels more. Small changes help:`,
      },
      {
        list: [
          `Every 20 minutes, look about 20 feet away for 20 seconds and finish a few full blinks.`,
          `Move your chair so vents and desk fans don’t blow across your face.`,
          `Set your monitor slightly below eye level.`,
          `Keep hands away from your eyes, especially after handling paper, cardboard or tools.`,
        ],
      },
      { h: 'Scratchy eyes in winter' },
      {
        p: `In cold months, the pattern often flips: eyes feel fine outdoors and scratchy inside. Heating warms cold outdoor air without adding moisture, so indoor humidity drops, and evaporation from the tear film speeds up. A humidifier in the bedroom or office, a lower thermostat and keeping space heaters pointed away from you can make a noticeable difference. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes into detail.`,
      },
      { h: 'How to tell if something is really in your eye' },
      {
        p: `Sometimes the scratchy feeling is a real eyelash, a bit of grit or a flake of mascara. Signs that point that way include a feeling that stays in exactly one spot, that started suddenly at a known moment (a gust of wind, sawing, sweeping, a car window down), or that gets sharper rather than easing with blinking. Tearing that won’t stop, light sensitivity or a visible speck all count too.`,
      },
      {
        list: [
          `Don’t rub. Rubbing can drag a particle across the eye.`,
          `Don’t try to dig anything out with a fingertip, tissue or cotton swab.`,
          `If it doesn’t clear with gentle blinking, see an eye doctor or go to urgent care.`,
          `Anything from metal, glass, wood, a chemical or a blow to the eye needs prompt care, not drops.`,
        ],
      },
      { h: 'When a scratchy eye needs a doctor' },
      {
        p: `Make an appointment, or get urgent care, if a scratchy eye comes with pain, blurred vision that doesn’t clear, sensitivity to light, discharge, swelling, or if it follows an injury. Scratchiness that keeps returning for weeks also deserves an exam, even if it’s mild. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through the warning signs, and the [self-check](/self-check) can help you describe what you’re feeling. It’s not a diagnosis.`,
      },
      { h: 'Can a lubricating drop help a scratchy eye?' },
      {
        p: `If the scratchiness comes from dryness, a lubricating drop may help the lids glide more smoothly. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions say: {directions}. The panel adds a caution: {warnings}. It isn’t for flushing out a particle, and it gives no directions for contact lenses or other drops; ask an eye doctor or pharmacist about those.`,
      },
      {
        p: `The label sets its own stopping point: {stopUse} Read the full panel on our [Drug Facts page](/drug-facts) before you [order](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why does my eye feel scratchy but nothing is in it?',
        a: 'When the tear film breaks up in patches, the inside of the lid rubs against drier spots, and that friction can feel like a speck. If the feeling stays in one spot, gets sharper or won’t clear, see an eye doctor.',
      },
      {
        q: 'Why do my eyes feel scratchy and dry at the end of the day?',
        a: 'Hours in heated or cooled air, slowed blinking at screens and dust from the workday all thin the tear film. Breaks, full blinks and moving away from vents usually help.',
      },
      {
        q: 'Is a scratchy eye an emergency?',
        a: 'Usually not, but get prompt care if it follows an injury, involves metal, glass, wood or a chemical, or comes with pain, vision changes or light sensitivity.',
      },
      {
        q: 'Should I use eye drops if my eye feels scratchy?',
        a: 'If the cause is dryness, a lubricating drop used as labeled may help. Don’t use drops to try to wash out a particle; that needs an eye doctor or urgent care.',
      },
    ],
  },
  {
    slug: 'where-can-i-buy-preservative-free-eye-drops-online',
    title: 'Where can I buy preservative-free eye drops online?',
    description:
      'Preservative-free eye drops are sold online by pharmacies, retailers and makers. What to check on the label and seller first, and where Quell is sold.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `You can buy preservative-free eye drops online from pharmacy websites, large retailers and some makers who sell direct. Quell, a preservative-free lubricating eye drop, is sold on quelldrop.com and shipped anywhere in the United States. Wherever you shop, check that the label actually says preservative-free, read the inactive ingredients, confirm who the seller is, and look at the seal and expiration date when the package arrives.`,
      },
      { h: 'Who sells preservative-free eye drops online' },
      {
        p: `Preservative-free drops aren’t hard to find. Most online pharmacies and large general retailers carry several, and some brands sell from their own sites. Quell takes the last route: it’s sold by {company}, which owns the trademark, through this site, and it ships from Brentwood, Tennessee. There’s no store to walk into and no regional pricing. Our guide to [where to buy Quell](/guides/where-to-buy-quell) covers that in more detail.`,
      },
      { h: 'Check the label says preservative-free' },
      {
        p: `“Preservative-free” is a description printed on the package, not a category the search box always gets right. Search results can mix in drops that contain a preservative, especially when listings are bundled or the photo shows a different version. Before you add anything to a cart:`,
      },
      {
        list: [
          `Look for the words “preservative-free” on the front of the box in the product photo, not just in the listing title.`,
          `Read the inactive ingredients list on the Drug Facts panel. If the seller won’t show it, that’s a reason to shop elsewhere.`,
          `Note whether the drops come in single-use vials or a multi-dose bottle, since handling differs.`,
          `Check the size, so you can compare price per milliliter rather than per box.`,
        ],
      },
      {
        p: `Our guide to [how to know if your eye drops are preservative-free](/guides/how-do-i-know-if-my-eye-drops-are-preservative-free) walks through the label section by section, and [what preservative-free means](/guides/what-does-preservative-free-mean) explains the term.`,
      },
      { h: 'Check the seller' },
      {
        p: `Eye drops go in your eyes, so who sold them matters as much as what’s on the label. A trustworthy listing names a real company with a physical address and a phone number, shows the full Drug Facts panel and ships from somewhere it states. Marketplace listings from unnamed third-party sellers, prices far below everyone else’s and sites that only take unusual payment methods are reasons to pause. Our guides to [spotting a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) and [buying eye drops online safely](/guides/how-to-buy-eye-drops-online-safely) have a fuller checklist.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is sold as Preservative-Free Lubricating Eye Drops, in a {size} bottle. Its active ingredients are {actives}, and the inactive list reads: {inactives}. The Uses line on the Drug Facts panel reads: {uses}. Directions: {directions}. The whole panel is published on our [Drug Facts page](/drug-facts), so you can read it before you buy, not after.`,
      },
      {
        p: `A preservative-free multi-dose bottle still needs careful handling. The label says: {tip}. It also carries a caution: {warnings}. It doesn’t give directions for contact lenses, children or use with other drops; ask your eye doctor or pharmacist about those.`,
      },
      { h: 'How ordering Quell online works' },
      {
        list: [
          `Choose a quantity on the [buy panel](/#buy). Shipping is {shipping}, or free on {freeBottles} or more bottles.`,
          `Check out as a guest. You don’t need an account, and you must be 18 or older.`,
          `Enter a US shipping address and pay on the payment provider’s secure page.`,
          `Your receipt arrives by email, followed by tracking once the order ships.`,
          `There are no promo codes and no subscription. One reorder reminder email is sent later, and you can simply ignore it.`,
        ],
      },
      { h: 'When the package arrives' },
      {
        p: `Whatever you bought and wherever it came from, look it over before the first drop. Is the tamper seal intact? Does the expiration date leave you enough time? Does the bottle match the label’s description? For Quell, the panel notes: {milky}. If a Quell order arrives damaged, incorrect or with a broken seal, contact us within {returnDays} days and it’s replaced. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [What to check when your order arrives](/guides/what-to-check-when-your-order-arrives) has the details.`,
      },
      { h: 'Single-use vials or a bottle?' },
      {
        p: `Online listings for preservative-free drops come in two main forms. Single-use vials are opened, used and thrown away, so a box holds many small doses. Multi-dose bottles, like Quell’s, hold more and are reused, which makes clean handling of the tip important. Neither is automatically right for everyone; it comes down to how often you use drops, where you use them and what your eye doctor suggests. When comparing prices online, count doses or milliliters, not boxes, and add shipping. Our comparison of [single-use vials and multi-dose bottles](/guides/single-use-vials-vs-multi-dose-bottles) goes further.`,
      },
      { h: 'Heat and cold on the way to you' },
      {
        p: `Any eye drop ordered online spends time in a truck and on a doorstep. Quell’s storage line reads: {storage}. Bring a package inside soon after it’s delivered, especially in summer heat or a hard freeze, and let a cold bottle come to room temperature before using it. Our guide to [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers what to check.`,
      },
      { h: 'Is preservative-free right for you?' },
      {
        p: `That depends on how often you use drops and what your eye doctor recommends for you. Our guide to [whether preservative-free drops are worth it](/guides/are-preservative-free-eye-drops-worth-it) lays out the trade-offs. If you have pain, vision changes or dryness that keeps coming back, see an eye doctor before buying anything; they can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Can you buy preservative-free eye drops online?',
        a: 'Yes. Online pharmacies, large retailers and some makers sell them. Check the product photo and the inactive ingredients to confirm the version you’re buying is labeled preservative-free.',
      },
      {
        q: 'Is it safe to buy preservative-free eye drops from a marketplace seller?',
        a: 'Be careful with unnamed third-party sellers. Look for a company name, an address, a phone number and the full Drug Facts panel, and check the seal and expiration date when the package arrives.',
      },
      {
        q: 'Where is Quell sold online?',
        a: 'Quell is sold on quelldrop.com by {company} and shipped from Brentwood, Tennessee, to any US address. Guest checkout is available.',
      },
    ],
  },
  {
    slug: 'what-if-eye-drops-are-out-of-stock-online',
    title: 'What if eye drops are out of stock online?',
    description:
      'What “Only 3 left” and “Out of stock” mean on Quell’s buy panel, why checkout won’t charge you for bottles that aren’t there, and what to do next.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `If Quell is out of stock, the buy panel says so and won’t let you check out, so you can’t be charged for bottles that aren’t there. When stock is low, the panel shows how many are left, and checkout stops you if you ask for more than that. Order what’s available, check back later, or call us at {phone} during {hours} to ask about timing. Don’t wait until your current bottle is empty.`,
      },
      { h: 'What the stock labels on the buy panel mean' },
      {
        p: `Quell’s product listing shows one of three states, read from the stock count at the moment the page loads:`,
      },
      {
        list: [
          `In stock: bottles are available and you can choose a quantity.`,
          `Only a few left: a badge shows the exact number remaining, such as “Only 4 left,” once stock falls to a low level.`,
          `Out of stock: there are none to sell right now, and the buy panel shows “Currently out of stock” in place of the quantity menu.`,
        ],
      },
      {
        p: `The quantity menu itself only offers as many bottles as are available, up to ten at a time. If you need more than that, our guide to [whether there’s a limit on bottles](/guides/is-there-a-limit-on-how-many-bottles-you-can-order) explains.`,
      },
      { h: 'Can I be charged for eye drops that are out of stock?' },
      {
        p: `No. Stock is checked when you start checkout, before you reach the payment page. If the bottles in your cart are no longer available, checkout stops with a message, either that the product is out of stock or how many are left, and you’re never sent to pay. Stock is checked again when payment completes. The [terms](/terms) also say that if an order can’t be filled, the authorization is released or refunded in full.`,
      },
      { h: 'If your cart says fewer are left than you wanted' },
      {
        p: `Carts are saved on your device, so a cart you filled days ago can ask for more bottles than are now available. If checkout says only a few are left:`,
      },
      {
        list: [
          `Open the [cart](/cart) and lower the quantity to the number available.`,
          `Check the shipping line: {freeBottles} or more bottles ship free, and fewer than that ship for {shipping}.`,
          `Finish checkout for what’s available, and come back for the rest later if you need it.`,
        ],
      },
      { h: 'What to do while you wait' },
      {
        p: `The buy panel says to check back soon, and the page always shows the current stock when it loads, so refreshing later is the simplest way to see if bottles are back. To ask about timing, call {phone} during {hours}, or use the [contact details](/about#contact) on the About page. The site has no waiting list or back-in-stock alert to sign up for.`,
      },
      {
        p: `In the meantime, take care of the basics that help any dry eye: keep vents and fans off your face, take breaks from screens, wear wraparound glasses in the wind and use a humidifier at home. If your eyes feel worse without drops, or you have pain or vision changes, see an eye doctor rather than waiting for a restock.`,
      },
      { h: 'Avoiding the empty-bottle scramble' },
      {
        p: `The easiest way to avoid a stock problem is to reorder with time to spare. A few habits help:`,
      },
      {
        list: [
          `Write the date on a new bottle when you open it, so you learn how long one lasts you.`,
          `Keep one unopened bottle in reserve. Store it as the label says: {storage}.`,
          `Watch for the single reorder reminder email, which comes once after your order; there’s no subscription.`,
          `Order before a trip or a busy season, not the day you run out.`,
        ],
      },
      {
        p: `Our guide on [how many bottles to order](/guides/how-many-bottles-to-order) helps you size an order, and [what to do when you run out](/guides/what-to-do-when-you-run-out-of-eye-drops) covers the gap if it happens.`,
      },
      { h: 'Should I buy from another site if it’s sold out here?' },
      {
        p: `Quell is sold by {company} through this site. If you see listings elsewhere claiming to sell it while it’s out of stock here, be cautious, and check the seller carefully. Our guide to [spotting a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) lists what to look for. If you decide to try a different product in the meantime, read its label and ask a pharmacist if you have questions.`,
      },
      { h: 'What the label says while you’re between bottles' },
      {
        p: `If your current bottle is nearly empty, keep using it only as the panel directs: {directions}. Don’t borrow someone else’s open bottle to fill the gap. If the drops ever look different from usual, the label says: {doNotUse}. For anything beyond ordinary dryness, the label is clear: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can I order eye drops that are out of stock?',
        a: 'Not on quelldrop.com. When Quell is out of stock, the buy panel shows “Currently out of stock” instead of a quantity menu, and checkout won’t take an order for bottles that aren’t available.',
      },
      {
        q: 'Will I be charged if eye drops sell out while I’m checking out?',
        a: 'No. Stock is checked before you reach the payment page and again when payment completes. If an order can’t be filled, the terms say the authorization is released or refunded in full.',
      },
      {
        q: 'What does “Only 3 left” mean when buying eye drops online?',
        a: 'On Quell’s buy panel, it means stock has dropped to a low level, and the badge shows the exact number of bottles remaining. You can order up to that number.',
      },
      {
        q: 'How do I find out when Quell is back in stock?',
        a: 'Check the buy panel again later, since it shows current stock each time the page loads, or call {phone} during {hours} to ask about timing.',
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-in-care-of-someone-else',
    title: 'Shipping eye drops in care of someone else (c/o)',
    description:
      'Sending eye drops to a person staying at someone else’s address? Where the name and the “c/o” go on Quell’s checkout form, field by field.',
    category: 'shipping',
    addedOn: '2026-11-25',
    body: [
      {
        p: `To ship eye drops to someone staying at another person’s address, put the recipient’s own name in the First name and Last name fields, the street address in Street address, and “c/o” plus the household’s name on the “Apt, suite (optional)” line. Quell’s checkout has no separate c/o field, so that second address line is where it goes. Add a phone number someone can answer about the delivery, and use your own email for the receipt.`,
      },
      { h: 'When a c/o address makes sense' },
      {
        p: `“Care of” tells whoever handles the package that the person named on it doesn’t usually live there, but the household does expect it. It’s useful any time a name and an address don’t obviously match:`,
      },
      {
        list: [
          `A parent staying with an adult child over the holidays.`,
          `A college student spending winter break at a friend’s or relative’s house.`,
          `Someone recovering at a family member’s home after time in the hospital.`,
          `A traveling worker renting a room in a private home.`,
          `You, sending a bottle to yourself at a house you’ll be visiting.`,
        ],
      },
      { h: 'Filling in Quell’s checkout, field by field' },
      {
        p: `Quell’s “Ship to” section asks for the following. The limits come from the form itself:`,
      },
      {
        list: [
          `First name and Last name (required, up to 50 characters each): the person the package is for, not the homeowner.`,
          `Street address (required, up to 60 characters): the house number and street.`,
          `Apt, suite (optional, up to 60 characters): the place for “c/o” and the household’s name, plus any apartment or unit number.`,
          `City (required, up to 40 characters).`,
          `State (required): the two-letter abbreviation, such as TX or FL.`,
          `ZIP (required): five digits, or ZIP+4 in the form 12345-6789.`,
          `Phone (required): the form notes that the carrier asks for a number, for delivery updates.`,
        ],
      },
      {
        p: `A finished address might read: “Jordan Lee” in the name fields, “418 Maple Street” as the street address, “c/o Rivera” on the second line, then the city, state and ZIP. If the house also has a unit number, fit both on the second line, such as “Unit B, c/o Rivera,” within the 60 characters.`,
      },
      { h: 'Which phone number and email to use' },
      {
        p: `The phone number goes with the shipment, so choose one that will reach someone who can answer about the delivery: the recipient’s mobile, or the host’s if the recipient is hard to reach. The email is different. Your receipt and tracking are sent to the email entered at checkout, so if you’re paying, use your own. You can forward the tracking link to the recipient or the household. Our guide to [which email to use when ordering](/guides/which-email-to-use-when-ordering-eye-drops) has more on that choice.`,
      },
      { h: 'Paying from a different address' },
      {
        p: `The shipping address and the card’s billing address don’t have to match. You can pay with your own card and send the order anywhere in the United States, which is what makes a c/o shipment possible in the first place. [Shipping to a different address than billing](/guides/can-i-ship-to-a-different-address-than-billing) explains how that works at checkout.`,
      },
      { h: 'Tell the household it’s coming' },
      {
        p: `A package addressed to a name the household doesn’t expect is easy to set aside or mark as unknown. A quick message helps: who it’s for, roughly when to expect it, and that it’s a small box of eye drops that should come inside rather than sit on a hot or freezing porch. Quell’s label gives a storage range: {storage}. We don’t promise a delivery date, so send the order with a few days to spare, and share the tracking link once it arrives in your inbox. If the recipient will be gone before it arrives, ship to wherever they’ll be next instead.`,
      },
      { h: 'Business and campus addresses' },
      {
        p: `For an office, “Attn:” plus the person’s name or department on the second line does the same job as c/o does for a home, and our guide to [shipping eye drops to a work address](/guides/shipping-eye-drops-to-your-work-address) covers mailrooms. Students living off campus with a host family can use c/o the family’s name; for a dorm, see [shipping eye drops to a college dorm](/guides/shipping-eye-drops-to-a-college-dorm).`,
      },
      { h: 'Common mistakes' },
      {
        list: [
          `Putting the homeowner’s name in the name fields and the recipient on the second line. The person the box is for goes in the name fields.`,
          `Writing the full state name instead of the two-letter abbreviation.`,
          `Leaving off the unit number when the house is split into apartments.`,
          `Using the recipient’s email when you want the receipt yourself.`,
          `Shipping outside the United States: Quell ships to US addresses only.`,
        ],
      },
      {
        p: `If you notice a mistake after placing the order, call {phone} during {hours} as soon as you can; our guide to [entering the wrong shipping address](/guides/wrong-shipping-address) explains what can and can’t be changed.`,
      },
      { h: 'What ships, and what it costs' },
      {
        p: `Every order ships from Brentwood, Tennessee. Shipping is {shipping}, or free on {freeBottles} or more bottles, charged once per order. Each bottle is {size}. If the box arrives damaged, incorrect or with a broken seal, contact us within {returnDays} days and it’s replaced; unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Ready to send? [Start on the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'How do I write a c/o address when ordering online?',
        a: 'Put the recipient’s name in the name fields, the street address on the first line and “c/o” with the household’s name on the second address line. On Quell’s checkout that line is labeled “Apt, suite (optional).”',
      },
      {
        q: 'Whose name goes first on a care of address?',
        a: 'The person the package is for goes in the name fields. The household or person whose address it is goes after “c/o” on the second address line.',
      },
      {
        q: 'Does Quell’s checkout have a c/o field?',
        a: 'No separate one. Use the optional second address line, which allows up to 60 characters, for “c/o” and the household’s name along with any unit number.',
      },
      {
        q: 'Which phone number should I use when shipping to someone else’s house?',
        a: 'One that reaches someone who can answer about the delivery, usually the recipient’s mobile. The receipt and tracking go to the email you enter, so use your own email if you’re paying.',
      },
    ],
  },
  {
    slug: 'can-i-return-eye-drops-if-im-allergic',
    title: 'Can I return eye drops if I’m allergic?',
    description:
      'Bought Quell, then saw the egg and bird allergy caution? Unopened bottles can be refunded within {returnDays} days of delivery. What happens if one is opened.',
    category: 'returns',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes, if the bottle is unopened. If you bought Quell and then realized its egg and bird allergy caution applies to you, an unopened bottle can be refunded within {returnDays} days of delivery, and you don’t need to send it back. Opened bottles can’t be refunded, returned or resold, for health and safety reasons. Call {phone} during {hours} with your order number. If you used it and had a reaction, stop and contact a doctor.`,
      },
      { h: 'Why the label mentions allergies' },
      {
        p: `Quell’s Drug Facts panel carries this caution: {warnings}. The reason is in the formula. One of the inactive ingredients is emu oil, and people with egg or bird allergies are asked to use caution. The full inactive list reads: {inactives}. Our guide to [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution, and [what “caution should be used” means](/guides/what-does-caution-should-be-used-mean) looks at the wording itself.`,
      },
      {
        p: `People sometimes notice the caution only after the box arrives, especially if a friend recommended the drops or someone else placed the order. That’s exactly what the refund on unopened bottles is for.`,
      },
      { h: 'If the bottle is still sealed' },
      {
        p: `Section 7 of our [terms](/terms) covers this. If you change your mind about an unopened bottle, contact us within {returnDays} days of delivery and we’ll refund the product price. You don’t send it back. Steps:`,
      },
      {
        list: [
          `Leave the bottle sealed. Don’t open it to check the smell or color first.`,
          `Find your order number in your confirmation email or with the [order lookup](/orders).`,
          `Call {phone} during {hours} and say which bottles are unopened.`,
          `Keep the sealed bottle. Nothing needs to be mailed back to us.`,
        ],
      },
      {
        p: `The refund covers the product price. Under the terms, original shipping isn’t refunded. Our guide to [what is refunded](/guides/what-is-refunded-on-a-return) goes through the details, and [when the refund window starts](/guides/when-does-the-eye-drop-refund-window-start) explains how the {returnDays} days are counted.`,
      },
      { h: 'If you already opened it' },
      {
        p: `The terms are plain: opened eye drops can’t be refunded, returned or resold, for health and safety reasons. A bottle that has been opened can’t be confirmed to be untouched, so it can’t go back to anyone else. If you ordered several bottles and opened one, the others can still be refunded while they’re sealed and within {returnDays} days of delivery; see [opened one bottle: can I return the rest?](/guides/opened-one-bottle-can-i-return-the-rest).`,
      },
      { h: 'If you had a reaction' },
      {
        p: `Stop using the drops. Any reaction after using an eye drop is a reason to call a doctor, and severe symptoms such as trouble breathing or swelling of the face or lips need emergency care right away. The label’s own stopping rule reads: {stopUse} If you swallowed any, or a child did, the label says: {swallowed}. Bring the carton or a photo of the Drug Facts panel to the appointment so the doctor can see every ingredient.`,
      },
      {
        p: `Once you’re taken care of, you’re welcome to call us about the order. We can’t give medical advice by phone, but we can answer questions about the order itself; our guide to [order questions vs. medical questions](/guides/order-questions-vs-medical-questions) explains the difference.`,
      },
      { h: 'If the drops were a gift' },
      {
        p: `When someone else ordered the drops for you, the order belongs to the buyer, so the buyer usually needs to make the call with their order number. If you’re the buyer and the recipient tells you about an allergy, call while the bottles are still sealed. Our guide to [calling about an order for someone else](/guides/calling-about-an-eye-drop-order-for-someone-else) covers what to have ready. If the order was paid with HSA or FSA money, see [refunds on eye drops bought with HSA or FSA money](/guides/refunds-on-eye-drops-bought-with-hsa-or-fsa).`,
      },
      { h: 'Checking the label before you order' },
      {
        p: `The simplest way to avoid this is to read the label before buying. The whole panel, including the caution and every ingredient, is published on our [Drug Facts page](/drug-facts). If you have allergies to anything on it, or you aren’t sure, ask a pharmacist or your doctor first. Allergic to honey? Manuka honey is also on the inactive list; [this guide](/guides/honey-allergy-and-manuka-honey-eye-drops) covers what the label does and doesn’t say about it.`,
      },
      { h: 'Damaged or wrong orders are different' },
      {
        p: `An allergy is a change-of-mind refund on unopened bottles. Orders that arrive damaged, incorrect or with a broken tamper seal are handled differently: contact us within {returnDays} days and we’ll replace them at no charge. Either way, the number to call is {phone}, during {hours}. Our general guide to [returning eye drops](/guides/can-you-return-eye-drops) lays out every case.`,
      },
    ],
    faq: [
      {
        q: 'Can I get a refund on eye drops if I’m allergic to an ingredient?',
        a: 'Yes, if the bottle is unopened and it’s within {returnDays} days of delivery. Call {phone} with your order number; you don’t need to send the bottle back. Opened bottles can’t be refunded.',
      },
      {
        q: 'Why does Quell have an egg and bird allergy warning?',
        a: 'The formula includes emu oil as an inactive ingredient, and the label asks people with egg or bird allergies to use caution. The exact wording is: {warnings}.',
      },
      {
        q: 'What should I do if I have a reaction to eye drops?',
        a: 'Stop using them and contact a doctor. Trouble breathing or swelling of the face or lips needs emergency care right away. Bring the carton or a photo of the label.',
      },
      {
        q: 'Do I have to send back eye drops I’m allergic to?',
        a: 'No. Unopened Quell bottles are refunded within {returnDays} days of delivery without being sent back. You keep the sealed bottle.',
      },
    ],
  },
  {
    slug: 'eye-drops-without-propylene-glycol-or-boric-acid',
    title: 'Eye drops without propylene glycol or boric acid',
    description:
      'Looking for eye drops without propylene glycol or boric acid? Neither is on Quell’s ingredient list. How to check any label for an ingredient you avoid.',
    category: 'formula',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Quell’s Drug Facts panel lists neither propylene glycol nor boric acid. Its active ingredients are {actives}, and none of its {inactiveCount} inactive ingredients is either one. If you’re avoiding a particular ingredient, check the Drug Facts panel of any eye drop, where actives and inactives are both listed. If an ingredient has bothered your eyes before, ask an eye doctor or pharmacist which drops to try.`,
      },
      { h: 'Why people look for drops without certain ingredients' },
      {
        p: `Searches like “eye drops without propylene glycol” or “eye drops without boric acid” usually come from someone who already knows what they want to avoid. Maybe an eye doctor or pharmacist suggested skipping something, maybe a drop they tried didn’t agree with them, or maybe they simply prefer a shorter or different list. The reason is personal. What matters is reading the full ingredient list of whatever you buy, because two drops with similar names can have quite different formulas.`,
      },
      { h: 'What Quell’s label lists' },
      {
        p: `The Drug Facts panel on the carton names three active ingredients, each with its purpose: glycerol and polysorbate 80 are listed as lubricants, and light mineral oil as an emollient. The inactive ingredients, printed in alphabetical order, number {inactiveCount}. Here they are exactly as the label gives them: {inactives}.`,
      },
      {
        p: `Propylene glycol and boric acid don’t appear in either list. Neither do borate compounds or sodium borate, names that sometimes show up on other labels. Quell is sold as a preservative-free lubricating eye drop. Our page with [the full Quell ingredient list](/guides/quell-eye-drops-ingredients-list) walks through each entry.`,
      },
      { h: 'Eye drops without glycerin' },
      {
        p: `Another common search is for drops without glycerin. Quell isn’t one of those: its first active ingredient is glycerol, which is another name for glycerin. If you’re avoiding glycerin, read past the brand name to the active ingredients section, and remember that the same substance can be listed under more than one name. Our guide to [glycerin vs. glycerol in eye drops](/guides/glycerin-vs-glycerol-in-eye-drops) explains the naming.`,
      },
      { h: 'Eye drops without preservatives' },
      {
        p: `Many people who check for one ingredient are also checking for preservatives. Quell’s inactive list contains no benzalkonium chloride, a preservative that appears on some other eye drop labels. Our guides to [benzalkonium chloride](/guides/benzalkonium-chloride-in-eye-drops) and [why some eye drops have preservatives](/guides/why-do-some-eye-drops-have-preservatives) cover the background. A preservative-free bottle still needs clean handling; the label says: {tip}.`,
      },
      { h: 'How to check any eye drop label for an ingredient' },
      {
        list: [
          `Find the Drug Facts panel. It’s on the carton, and many sellers show it in their product photos.`,
          `Read the Active ingredients section first. It lists each active with its strength and purpose.`,
          `Then read the Inactive ingredients section. On a Drug Facts panel these are usually in alphabetical order, so scan for the first letter of what you’re avoiding.`,
          `Watch for other names: glycerin and glycerol are the same substance, and an ingredient may be listed in a longer chemical form.`,
          `Make sure you’re reading the right version. Brands often sell several formulas under similar names, and the ingredients can differ.`,
          `When in doubt, ask a pharmacist. They can read a label with you and compare it to the one that bothered you.`,
        ],
      },
      {
        p: `Our guide to [why inactive ingredients are listed alphabetically](/guides/why-are-inactive-ingredients-listed-alphabetically) explains how that section is organized.`,
      },
      { h: 'What the list can’t tell you' },
      {
        p: `An ingredient list tells you what’s in a drop. It doesn’t tell you how your own eyes will respond to it. If a past drop stung, blurred your vision for a long time or made your eyes feel worse, that’s worth raising with an eye doctor before you try another. Bring the box or a photo of its label; our guide to [taking your eye drop label to a doctor visit](/guides/taking-your-eye-drop-label-to-a-doctor-visit) covers what to show. If a reaction happens, stop using the drop and contact a doctor.`,
      },
      { h: 'Ordering after you’ve checked the list' },
      {
        p: `If Quell’s ingredients suit you, ordering is simple: guest checkout on the [home page](/#buy), shipping of {shipping}, or free on {freeBottles} or more bottles, sent from Brentwood, Tennessee, to any US address. If you order and then spot something on the panel you’d rather avoid, an unopened bottle can be refunded within {returnDays} days of delivery without sending it back. Opened bottles can’t be refunded, so it pays to read the list first, which is why the whole panel is published online.`,
      },
      { h: 'Other things Quell’s label covers' },
      {
        p: `Ingredient lists aren’t the only part of the label to read before trying a new drop. Quell’s Uses read: {uses}. Its directions: {directions}. It carries this caution: {warnings}. That caution relates to emu oil, one of the inactive ingredients; our guide to [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains it. The label also notes: {milky}.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses, children or use with other drops. Ask an eye doctor or pharmacist about those. And it sets a limit for everyone: {stopUse} The full panel is published on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Does Quell contain propylene glycol?',
        a: 'No. Propylene glycol isn’t among Quell’s active or inactive ingredients on its Drug Facts panel. The actives are {actives}.',
      },
      {
        q: 'Does Quell contain boric acid?',
        a: 'No. Boric acid, and borate compounds, aren’t on Quell’s ingredient list. The inactive ingredients are {inactives}.',
      },
      {
        q: 'How can I tell if eye drops contain boric acid?',
        a: 'Read the Inactive ingredients section of the Drug Facts panel, which is usually alphabetical. Check the exact version you’re buying, since formulas can differ under similar names.',
      },
      {
        q: 'Is there glycerin in Quell eye drops?',
        a: 'Yes. Glycerol, another name for glycerin, is the first of Quell’s three active ingredients, listed with the purpose Lubricant.',
      },
    ],
  },
  {
    slug: 'can-you-use-eye-drops-as-needed',
    title: 'Can you use eye drops as needed?',
    description:
      'Some eye drop labels say “as needed.” Quell’s gives a set count instead. What each wording means, how to follow it, and who to ask about using more.',
    category: 'label',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Only if your eye drop’s label says so. Some lubricating drops are labeled to use as needed, but many give a set number of drops and times a day, and that number is the limit. Quell’s directions read: {directions}. That’s a schedule, not an “as needed” instruction. If you feel you need drops more often than your label allows, ask an eye doctor or pharmacist rather than adding extra doses yourself.`,
      },
      { h: 'What “as needed” means on a label' },
      {
        p: `When a label’s directions say a product may be used “as needed,” it’s telling you to use it when you notice symptoms rather than on a clock. Even then, it rarely means unlimited. Labels with that wording often pair it with a dose (how many drops at a time) and sometimes a ceiling on how often. And the rest of the label still applies: the warnings, the stop-use rules and the storage line don’t change because the timing is flexible.`,
      },
      {
        p: `Since every product sets its own directions, “as needed” on one bottle tells you nothing about another. Read the Directions section of the specific drop you’re holding, every time you switch products. Our guide to [the Directions section of an eye drop label](/guides/directions-section-eye-drop-label) shows where to find it.`,
      },
      { h: 'What Quell’s directions say' },
      {
        p: `Quell’s Drug Facts panel gives one direction for use: {directions}. Read it in three parts:`,
      },
      {
        list: [
          `“1 drop”: one drop per eye at each use, not two or three.`,
          `“3 times per day”: three uses spread through the day.`,
          `“in each eye”: both eyes at each of those times. Our guide to [putting eye drops in both eyes](/guides/do-you-put-eye-drops-in-both-eyes) covers this part.`,
        ],
      },
      {
        p: `There’s no “as needed” wording on the panel. The label sets the count, and the panel’s Uses line explains the purpose: {uses}. For more on why the label is written this way, see [why the label says 1 drop 3 times a day](/guides/why-does-the-label-say-1-drop-3-times-a-day).`,
      },
      { h: 'Fitting three times a day into a routine' },
      {
        p: `Many people find a fixed schedule easier to keep when it’s tied to things they already do. For example, one use after washing up in the morning, one around lunch, and one in the evening before winding down. A schedule like that also spaces the drops through the hours when screens, heated air or wind are most likely to dry your eyes. If your days are unusual, such as rotating or night shifts, our guide to [what “3 times per day” means if you work nights](/guides/what-3-times-per-day-means-if-you-work-nights) helps.`,
      },
      {
        p: `If you forget one, don’t double up at the next time. Our guide to [missing a dose of eye drops](/guides/what-if-i-miss-a-dose-of-eye-drops) explains what to do instead.`,
      },
      { h: 'What if three times a day doesn’t feel like enough?' },
      {
        p: `That’s a question for an eye doctor or a pharmacist, not something to settle by adding drops on your own. Feeling that you need drops more often can mean your surroundings are drier than usual, that something about your routine has changed, or that there’s something an eye doctor should look at. Meanwhile, work on the conditions around you:`,
      },
      {
        list: [
          `Move vents, fans and heaters so they don’t blow across your face.`,
          `Take regular screen breaks and blink fully.`,
          `Wear wraparound glasses outdoors in wind.`,
          `Run a humidifier in the room where you spend the most time.`,
        ],
      },
      {
        p: `Our guide to [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) covers this question in more depth.`,
      },
      { h: 'The limit that applies either way' },
      {
        p: `Whether a label says “as needed” or gives a fixed count, the stop-use section still governs. Quell’s says: {stopUse} That 72-hour line matters most for people tempted to keep using drops and wait: if things are getting worse or haven’t improved, it’s time to stop and ask a doctor. Our guide to [what “worsens or persists” means](/guides/what-worsens-or-persists-means-on-eye-drops) explains the wording.`,
      },
      { h: 'Questions worth asking a pharmacist' },
      {
        p: `A pharmacist can read your labels with you at the counter, often without an appointment. If you use more than one eye product, or you’re unsure how a label’s wording applies to your day, it helps to arrive with specific questions:`,
      },
      {
        list: [
          `“This label gives a set count. Is there a reason I keep wanting more than that?”`,
          `“My other drop says ‘as needed.’ Can I use both in one day?” The Quell label doesn’t cover use with other drops, so this is their call.`,
          `“I wear contact lenses. Does this label apply to me?”`,
          `“How long should I wait before I see an eye doctor about this?”`,
        ],
      },
      {
        p: `Bring the cartons, or photos of the Drug Facts panels, so they can see the exact directions and ingredients.`,
      },
      { h: 'Other directions on the panel' },
      {
        p: `A few more lines on the panel shape how you use the drops at each of those three times. The label says: {tip}. It says not to use it in one case: {doNotUse}. For storage: {storage}. It doesn’t give directions for contact lenses, children or use with other drops; ask your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What does “as needed” mean on eye drops?',
        a: 'It means the label lets you use the drop when you notice symptoms rather than on a set schedule. It applies only to products whose own labels say it, and the other directions and warnings still apply.',
      },
      {
        q: 'Does Quell say to use it as needed?',
        a: 'No. Quell’s directions give a set count: {directions}. If that doesn’t feel like enough, ask an eye doctor or pharmacist.',
      },
      {
        q: 'Is it okay to use eye drops whenever my eyes feel dry?',
        a: 'Only if your drop’s label says it can be used as needed. Otherwise follow its count, and talk to an eye doctor or pharmacist if you keep wanting more.',
      },
    ],
  },
  {
    slug: 'what-to-check-on-an-eye-drop-label-before-first-use',
    title: 'What to check on an eye drop label before first use',
    description:
      'A new bottle of eye drops? Read these parts of the label first: warnings, do not use, directions, storage and the seal. A checklist for Quell.',
    category: 'label',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Before the first drop from a new bottle, check the label’s warnings for anything that applies to you, the “Do not use” line, the directions, the storage range and the stop-use rules, then look at the bottle itself: an intact seal, an expiration date that hasn’t passed and drops that look the way the label describes. For Quell, the whole panel takes a few minutes to read and is also published online.`,
      },
      { h: 'Why read the label before the first drop' },
      {
        p: `It’s tempting to open a new bottle and use it right away, especially if your eyes already feel dry. But the label is the only place that tells you who shouldn’t use the product, what it should look like and how to use it. A few minutes with the carton the first time saves guessing later. Keep the box, too; our guide to [whether you should keep the box](/guides/should-you-keep-the-box-your-eye-drops-came-in) explains why it’s handy.`,
      },
      { h: '1. The warnings' },
      {
        p: `Start with the section that could rule the product out for you. Quell’s warnings read: {warnings}. If you have an egg or bird allergy, stop here and talk to a doctor or pharmacist before using it; our guide to [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution. If you aren’t sure whether the caution applies, the same advice holds.`,
      },
      { h: '2. The ingredients' },
      {
        p: `Next, scan both ingredient lists for anything you know you react to. Quell’s actives are {actives}. Its inactive ingredients are {inactives}. If an ingredient has given you trouble before, check with a pharmacist first.`,
      },
      { h: '3. The “Do not use” line' },
      {
        p: `Quell’s panel has one: {doNotUse}. To use that line, you need to know what the drops normally look like, and the label tells you: {milky}. Our product page adds: {appearance} So a milky brown look is expected. A change from that appearance is what the label is warning about. Our guide to [what “do not use if it changes color” means](/guides/do-not-use-if-the-color-changes) goes further.`,
      },
      { h: '4. The seal and the dates' },
      {
        list: [
          `Check that the tamper-evident seal is intact before you open the bottle. If it’s broken on arrival, don’t use it; contact us within {returnDays} days for a replacement. See [why eye drops have a tamper-evident seal](/guides/why-eye-drops-have-a-tamper-evident-seal).`,
          `Find the expiration date and make sure it hasn’t passed. Our guide to [where the expiration date is](/guides/where-is-the-expiration-date-on-eye-drops) shows where to look.`,
          `Note the lot number, in case you ever need to report a problem; [what the lot number means](/guides/what-the-lot-number-on-eye-drops-means) explains it.`,
          `Consider writing the date you open the bottle on the label, so you know how long a bottle lasts you.`,
        ],
      },
      { h: '5. The directions and the dropper' },
      {
        p: `Quell’s directions read: {directions}. That’s one drop per eye, three times a day. The panel’s “When using this product” line adds: {tip}. Wash your hands first, tilt your head back, pull the lower lid down gently and squeeze one drop into the pocket without touching the tip to your eye, lashes or fingers. Recap it right away.`,
      },
      { h: '6. Storage' },
      {
        p: `Before you put the bottle away, read the storage line: {storage}. That rules out a hot car, a sunny windowsill and a freezing garage. A purse, nightstand or desk drawer at room temperature is usually fine. If you’ve just received the bottle on a very hot or cold day, let it sit at room temperature before using it.`,
      },
      { h: '7. When to stop, and the emergency line' },
      {
        p: `Two last sections are worth reading before you need them. The stop-use rule: {stopUse} And the keep-out-of-reach line: {swallowed}. Store the bottle where children can’t get to it. Our guide to [the Poison Control line on eye drops](/guides/what-does-the-poison-control-line-on-eye-drops-mean) explains that part.`,
      },
      { h: 'What the label won’t tell you' },
      {
        p: `Quell’s panel doesn’t give directions for contact lenses, for children or for using it with other drops. It also doesn’t list a discard date after opening. If any of those questions apply to you, ask your eye doctor or pharmacist. Our guide to [what an eye drop label doesn’t tell you](/guides/what-an-eye-drop-label-does-not-tell-you) covers the gaps in more detail.`,
      },
      { h: 'Read it online first' },
      {
        p: `You don’t have to wait for the carton. The complete panel is on our [Drug Facts page](/drug-facts), and our guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) explains each section in order. If you’d like to talk it through, call {phone} during {hours} for order questions, and ask a pharmacist or eye doctor for medical ones.`,
      },
    ],
    faq: [
      {
        q: 'What should I check before using a new bottle of eye drops?',
        a: 'Read the warnings, ingredients, “Do not use” line, directions, storage and stop-use sections, then check the seal, the expiration date and that the drops look as the label describes.',
      },
      {
        q: 'Should I read the eye drop label every time I buy a new bottle?',
        a: 'It’s a good habit when you switch brands or versions, since formulas and directions can differ. For a repeat bottle of the same product, at least check the seal, the expiration date and the appearance.',
      },
      {
        q: 'What should a new bottle of Quell look like?',
        a: 'The label says: {milky}. A milky brown appearance is normal. The label says not to use it if the product changes color.',
      },
      {
        q: 'What if the seal on a new eye drop bottle is broken when it arrives?',
        a: 'Don’t use it. For a Quell order, contact us within {returnDays} days of delivery and a bottle that arrives with a broken tamper seal is replaced at no charge.',
      },
    ],
  },
]
