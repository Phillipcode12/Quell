import type { Guide } from '@/lib/guide-types'
export const DAILY_20261122_D: Guide[] = [
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-chula-vista-ca:
   * - ACIS StnData (data.rcc-acis.org), SID SDM, NOAA 1991-2020 monthly normals
   *   (SAN DIEGO BROWN FIELD, elev 521 ft): normal max Jan 67.0, Feb 66.4,
   *   Jun 74.3, Jul 78.3, Aug 80.6, Sep 79.8, Dec 66.7 F; normal min Dec 43.8,
   *   Jan 44.4, Aug 63.0 F; precip Jan 1.83, Feb 2.39, Mar 1.52, Apr 0.80,
   *   May 0.27, Jun 0.10, Jul 0.04, Aug 0.01, Sep 0.18, Oct 0.44, Nov 0.83,
   *   Dec 1.82 in (monthly sum 10.23; May-Sep 0.60). Snowfall "M": not used.
   *   Raw: .daily-job/acis1122/SDM.json, .daily-job/d/SDM-extra.json
   * - https://www.sandiego.gov/airports/brown (Brown Field is in Otay Mesa,
   *   City of San Diego, 1.5 miles north of the U.S.-Mexico border)
   * Brown Field is not in relhum23/wndspd23, so no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-chula-vista-ca',
    title: 'Dry eye relief in Chula Vista, California',
    description:
      'Chula Vista’s nearest NOAA station logs 0.60 inches of rain from May through September. What that dry stretch does to your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Chula Vista comes down to the long rainless half of the year. NOAA’s normals for nearby Brown Field add up to just 0.60 inches of rain from May through September, and the air conditioning that runs through those warm months dries eyes further. Keep air off your face, blink fully at screens, use a lubricating drop exactly as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Which weather station speaks for Chula Vista?' },
      {
        p: `The closest NOAA station with a full set of 1991 to 2020 normals is at Brown Field Municipal Airport. It isn’t in Chula Vista itself: the City of San Diego says the airport sits in its Otay Mesa community, 1.5 miles north of the U.S.-Mexico border, which puts it a short drive southeast of the eastern Chula Vista neighborhoods. The station stands at about 521 feet. Homes near the bay sit lower and closer to the ocean, so read these numbers as a fair picture of the inland, eastern side of the city and a rougher one for the waterfront.`,
      },
      { h: 'Chula Vista’s year in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for San Diego Brown Field, as published through the National Weather Service’s NOWData, describe a mild place with a sharp wet and dry split:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals add up to about 10.2 inches a year.`,
          `February is the wettest month at 2.39 inches, followed by January (1.83) and December (1.82).`,
          `August averages 0.01 inches and July 0.04, so midsummer is close to rainless.`,
          `Normal highs run from about 66 to 67°F in winter to 80.6°F in August.`,
          `The coldest normal lows, 43.8°F in December and 44.4°F in January, stay well above freezing.`,
        ],
      },
      {
        p: `There’s no snow to speak of and no deep cold, so Chula Vista never gets the furnace-dry winter that dries eyes in colder states. The dryness here comes from a different direction: months on end without rain.`,
      },
      { h: 'Five months, six-tenths of an inch' },
      {
        p: `From May through September the station’s rain normals add up to 0.60 inches combined. Ground, plants and pavement dry out, and dust from yards, ball fields and construction stays loose because nothing settles it. A gritty, scratchy feeling after an afternoon at a youth soccer game or an evening in the backyard is common in that stretch. Some easy habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses outdoors; they cut breeze, dust and glare together.`,
          `Rinse your face and hands after yard work before you touch your eyes.`,
          `Run the car’s air on recirculate when traffic ahead is kicking up dust.`,
          `Change a dusty furnace or air conditioner filter on schedule, since it’s moving the same air you breathe at home.`,
        ],
      },
      { h: 'Air conditioning from June to October' },
      {
        p: `Brown Field’s normal highs stay near or above 78°F from July through September, and September (79.8°F) is nearly as warm as August. That keeps air conditioners running at home, at work and in the car well into fall. Cooled air holds little moisture, and a vent pointed at your face pushes it straight across the eye’s surface, which speeds evaporation from the tear film. Point dashboard vents at your chest, move your desk chair out of a ceiling vent’s path, and give the bedroom unit a lower fan speed at night.`,
      },
      { h: 'Waiting in traffic with the engine running' },
      {
        p: `Many Chula Vista residents spend real time in a car: freeway commutes north, school runs, and for some, waits in line at the border crossings. A long idle with the air on high is a small dry room. Turn the fan down once the cabin cools, keep sunglasses in the door pocket, and look away from your phone every few minutes for a few complete blinks. A bottle of eye drops shouldn’t live in the glove box through summer, since a parked car can climb past the label’s storage range; carry it in a bag you bring inside.`,
      },
      { h: 'Screens at home and at work' },
      {
        p: `Screens slow blinking, and half-finished blinks leave part of the eye exposed. Whether it’s a home office cooled by a window unit or a long shift at a monitor, set the screen a little below eye level so your lids cover more of the eye, and break up long sessions. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking matters so much.`,
      },
      { h: 'Using a lubricating drop in Chula Vista' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. Keep the dropper clean as the label asks: {tip}.`,
      },
      {
        p: `For storage the panel says: {storage}. On a hot afternoon, a car parked in the sun at the bayfront or a shopping center lot can pass the top of that range, so the bottle belongs in a pocket or bag. The full panel, warnings included, is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Chula Vista' },
      {
        p: `We ship from Brentwood, Tennessee, to Chula Vista, Bonita, Otay Ranch, Eastlake and any other US address. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows once the order ships, but we don’t promise a delivery date, so reorder before you run out. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Chula Vista page](/eye-drops/chula-vista-ca) and the [California page](/eye-drops/state/california) have more local detail.`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `A drop is for ordinary dryness. The label’s stop-use line is clear: {stopUse} Dust or grit that won’t rinse out, an eye that hurts, or vision that stays blurry after blinking all belong with an eye doctor, who can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Chula Vista get in summer?',
        a: 'Very little. NOAA’s 1991–2020 normals for Brown Field, the nearest full station, add up to 0.60 inches from May through September, with August at 0.01 inches.',
      },
      {
        q: 'Where is the weather station closest to Chula Vista?',
        a: 'NOAA’s nearest full normals come from Brown Field Municipal Airport in San Diego’s Otay Mesa community, about 1.5 miles north of the border and at roughly 521 feet.',
      },
      {
        q: 'Does it ever freeze in Chula Vista?',
        a: 'Not by the averages. The coldest normal lows at Brown Field are 43.8°F in December and 44.4°F in January, well above freezing.',
      },
      {
        q: 'Can I get Quell delivered to Otay Ranch or Eastlake?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including every Chula Vista neighborhood, with tracking by email and no promised delivery date.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-escondido-ca:
   * - ACIS StnData (data.rcc-acis.org), SID RNM, NOAA 1991-2020 monthly normals
   *   (RAMONA AIRPORT, elev 1385 ft): normal max Jan 66.2, Feb 65.9, Jun 82.9,
   *   Jul 88.9, Aug 90.8, Sep 87.4, Oct 80.0, Dec 65.6 F; normal min Jan 36.5,
   *   Feb 37.9, Jul 57.5, Aug 58.7, Dec 35.6 F; precip Jan 3.10, Feb 3.66,
   *   Mar 2.30, Apr 1.00, May 0.41, Jun 0.06, Jul 0.10, Aug 0.04, Sep 0.15,
   *   Oct 0.69, Nov 1.06, Dec 2.08 in (monthly sum 14.65; Jun-Sep 0.35).
   *   Snowfall "M": not used. Raw: .daily-job/acis1122/RNM.json,
   *   .daily-job/d/RNM-extra.json
   * Ramona is a separate community east of Escondido (job brief); the station
   * is not in relhum23/wndspd23, so no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-escondido-ca',
    title: 'Dry eye relief in Escondido, California',
    description:
      'Near Escondido, August days reach about 91°F and nights fall near 59°F. How inland North County’s big daily swings dry the eyes, and what to do.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `For dry eye relief in Escondido, plan around inland heat and big daily temperature swings. At Ramona Airport, the nearest NOAA station with full normals, August afternoons average 90.8°F and nights 58.7°F, and June through September bring only 0.35 inches of rain combined. Shade your eyes outdoors, keep cooled air off your face, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'A note on the station: Ramona, not Escondido' },
      {
        p: `NOAA doesn’t publish a full 1991 to 2020 normals set from a station inside Escondido. The closest one is at Ramona Airport, in Ramona, a separate community to the east. Its elevation is about 1,385 feet, which is higher than most of Escondido, so Ramona’s nights likely run a little cooler than yours. The pattern is what matters here, and both places share it: hot, rainless summers and cool, damp winters a fair distance from the coast.`,
      },
      { h: 'How hot does it get near Escondido?' },
      {
        p: `NOAA’s 1991–2020 climate normals for Ramona Airport show summer heat that builds late and lingers:`,
      },
      {
        list: [
          `June’s normal high is 82.9°F, July’s is 88.9°F and August peaks at 90.8°F.`,
          `September still averages 87.4°F, and October 80.0°F.`,
          `Winter highs settle near 66°F, with December at 65.6°F.`,
          `December nights average 35.6°F and January 36.5°F, the coldest of the year.`,
        ],
      },
      {
        p: `That last line surprises newcomers. A clear winter night inland can come close to freezing, while the afternoon that follows is pleasant enough for short sleeves.`,
      },
      { h: 'Thirty-degree days' },
      {
        p: `The gap between a normal high and a normal low at Ramona is about 32 degrees in August and close to 30 in January. Your eyes feel that spread twice. In summer the afternoon is hot and parched, and the house or car is cooled hard to match, so you go from dry heat outdoors to dry, chilled air inside. In winter the heater comes on at dawn and is off by lunch, which means a bedroom that starts the day dry from the furnace. A few habits fit the swing:`,
      },
      {
        list: [
          `Do outdoor errands, yard work and dog walks in the morning in summer, before the heat and glare peak.`,
          `On winter mornings, set the thermostat a little lower and keep the bed away from the heating register.`,
          `Dress in layers so you aren’t blasting the car heater at 7 a.m. and the air conditioning at 3 p.m.`,
          `Keep sunglasses with you year-round; the afternoon sun is strong in every season.`,
        ],
      },
      { h: 'The dry months: June through September' },
      {
        p: `Ramona’s rain normals for June through September add up to 0.35 inches, and August averages just 0.04. With that little moisture, dust from dirt roads, trails, nurseries and new construction stays in the air on breezy days. Wraparound sunglasses cut wind and grit together. Washing your hands before you touch your face after gardening is a small step that keeps fine dust away from your eyes.`,
      },
      { h: 'The wet months bring some relief' },
      {
        p: `Inland North County gets more rain than the coast. Ramona’s monthly normals add up to about 14.65 inches a year, led by February at 3.66 inches and January at 3.10, with March at 2.30. Damp winter weeks often feel easier on the eyes outdoors. Indoors is another story when the heat runs on cold mornings, and our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has room-by-room ideas.`,
      },
      { h: 'Screens, school and the drive down the 15' },
      {
        p: `Plenty of Escondido residents spend their workday at a monitor, whether at home or after a commute. Long screen sessions slow blinking, and a cooled office pushes evaporation along. Put the monitor slightly below eye level, take short breaks to look across the room, and turn the car’s vents away from your face for the drive. A pharmacist or eye doctor can also help sort out whether screen strain or dry air is the bigger factor for you.`,
      },
      { h: 'Quell and its label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, it is: {uses}. Directions: {directions}. The panel’s storage line reads: {storage}. A car left in a sunny lot on an August afternoon can easily pass the upper end of that range, so carry the bottle in a bag instead of the console. The rest of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Escondido' },
      {
        p: `We send orders from Brentwood, Tennessee, to Escondido, San Marcos, Valley Center and the rest of the country. You can check out as a guest, shipping is {shipping}, and orders of {freeBottles} bottles or more ship free. You’ll get tracking by email, though there’s no promised delivery date. If you change your mind about an unopened bottle, it can be refunded within {returnDays} days of delivery without sending it back. See the [Escondido page](/eye-drops/escondido-ca) and the [California page](/eye-drops/state/california) for more.`,
      },
      { h: 'Signs that call for an eye doctor' },
      {
        p: `Dry air explains a lot, but not everything. The label says: {stopUse} Pain, light sensitivity, a change in how you see, or dryness that returns week after week deserve an eye doctor’s look, so they can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How hot is Escondido in August?',
        a: 'Hot by San Diego County standards. At Ramona Airport, the nearest full NOAA station, August’s normal high is 90.8°F and its normal low is 58.7°F.',
      },
      {
        q: 'Does Escondido get cold at night in winter?',
        a: 'It can feel that way. NOAA’s normal lows at Ramona Airport are 35.6°F in December and 36.5°F in January, though Escondido sits lower and may run a bit milder.',
      },
      {
        q: 'What is the rainiest month near Escondido?',
        a: 'February. Ramona Airport’s 1991–2020 normal for February is 3.66 inches, ahead of January at 3.10 inches.',
      },
      {
        q: 'Why do my eyes feel drier in the afternoon in inland San Diego County?',
        a: 'Afternoons are the hottest and driest part of an inland day, and air conditioning is usually running hardest then. Keeping vents off your face and taking screen breaks helps.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-chino-ca:
   * - ACIS StnData (data.rcc-acis.org), SID CNO, NOAA 1991-2020 monthly normals
   *   (CHINO AP, elev 636 ft): normal max Jan 69.5, Feb 69.8, Mar 72.5,
   *   Apr 77.0, May 81.1, Jun 87.6, Jul 93.7, Aug 96.3, Sep 92.7, Oct 84.5,
   *   Nov 76.3, Dec 68.7 F; normal min Dec 40.4, Jan 41.7, Jul 62.9,
   *   Aug 63.2 F; precip Jan 2.17, Feb 2.68, Mar 1.43, Apr 0.55, May 0.17,
   *   Jun 0.02, Jul 0.08, Aug 0.01, Sep 0.06, Oct 0.53, Nov 0.59, Dec 1.69 in
   *   (monthly sum 9.98; Jun-Sep 0.17). Snowfall "M": not used.
   *   Raw: .daily-job/acis1122/CNO.json, .daily-job/d/CNO-extra.json
   * Chino AP is not in relhum23/wndspd23, so no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-chino-ca',
    title: 'Dry eye relief in Chino, California',
    description:
      'Chino Airport averages 96.3°F in August and gets 0.17 inches of rain from June through September. Everyday ways to ease dry eyes in that heat.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Chino means working around a long, hot, almost rainless summer. NOAA’s normals for Chino Airport show August highs of 96.3°F and only 0.17 inches of rain from June through September. Get outdoor chores done early, keep cooled air off your face, blink fully at screens, and use a lubricating drop as labeled. Pain or changes in vision need an eye doctor.`,
      },
      { h: 'Chino’s climate at the airport' },
      {
        p: `NOAA’s 1991–2020 climate normals for Chino Airport, at about 636 feet, come from a station in the city itself, so these numbers fit Chino more closely than most suburban guides can manage:`,
      },
      {
        list: [
          `Normal highs climb from 69.5°F in January to 87.6°F in June, 93.7°F in July and 96.3°F in August.`,
          `September stays hot at 92.7°F, and October still averages 84.5°F.`,
          `The twelve monthly rain normals add up to just under 10 inches, about 9.98.`,
          `February is the wettest month at 2.68 inches; August averages 0.01.`,
          `The coldest normal lows are 40.4°F in December and 41.7°F in January.`,
        ],
      },
      { h: 'Four months with almost no rain' },
      {
        p: `June, July, August and September together average 0.17 inches at the airport. May adds 0.17 more and October 0.53, so for roughly half the year the ground barely sees water. Dry soil and dry air mean dust that lifts with every breeze, truck and leaf blower. If your eyes feel sandy by evening in late summer, that’s a common complaint in a place this dry, and a few small changes add up:`,
      },
      {
        list: [
          `Wear wraparound sunglasses for yard work, and rinse your face afterward.`,
          `Keep windows closed on breezy, dusty afternoons and air the house out in the cool early morning instead.`,
          `Swap the air conditioner filter on its schedule; a clogged one recirculates dust.`,
          `Rest your eyes with a few slow, complete blinks after time outside.`,
        ],
      },
      { h: 'September heat and the school calendar' },
      {
        p: `In many places September brings relief. In Chino it averages 92.7°F, warmer than June. That means school pickups, after-school practices and weekend games in full heat and glare, often on dusty fields. Parents on the sidelines get the same dry air the players do. A brimmed hat and sunglasses help, and a seat in the shade is worth walking for. If you carry eye drops in a sports bag, keep the bag out of the trunk; a parked car in September sun can run well past the label’s storage range.`,
      },
      { h: 'Hot days, warm nights, cold mornings' },
      {
        p: `August nights at the airport average 63.2°F, so summer air conditioning often runs late into the evening and through the night in bedrooms. Point the bedroom vent away from the bed, use a lower fan speed after dark, and don’t sleep with a fan blowing across your face. Winter turns the pattern around: nights near 40°F mean the furnace kicks on early in the morning, and a dry bedroom at dawn can leave your eyes feeling stiff when you wake. A lower thermostat and a humidifier in the bedroom can both help, and our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas.`,
      },
      { h: 'Garages, workshops and long drives' },
      {
        p: `A lot of Chino life happens in garages, on patios and in cars. An attached garage on an August afternoon can run hotter than the outdoors, so it isn’t the place to keep medicines or eye drops. Commutes in heavy traffic with the air conditioning on high dry the eyes too. Turn the fan down once the car cools, aim it at your chest, and keep your sunglasses handy for the low sun on the drive home.`,
      },
      { h: 'Using Quell' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as: {uses}. Directions on the panel: {directions}. To keep the dropper clean, the panel also says: {tip}. And for storage: {storage}. Chino’s normal highs sit above the top of that range from June through September, so the bottle belongs indoors or in a bag you carry, not the car or garage. Read every line on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Chino and Chino Hills' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Chino, Chino Hills and every other US address. Check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We email tracking once a box ships but don’t promise a delivery date, so order before you’re down to the last few drops. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. The [Chino page](/eye-drops/chino-ca) and the [California page](/eye-drops/state/california) have more.`,
      },
      { h: 'When dryness isn’t just the weather' },
      {
        p: `If your eyes stay uncomfortable even in cooler months, or something feels wrong rather than dry, see an eye doctor, who can find the cause and decide what to do. The label’s stop-use line: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Chino, California get in summer?',
        a: 'NOAA’s 1991–2020 normals for Chino Airport put the August high at 96.3°F, July at 93.7°F and September at 92.7°F.',
      },
      {
        q: 'How much rain does Chino get a year?',
        a: 'The twelve monthly normals at Chino Airport add up to about 9.98 inches, with February the wettest month at 2.68 inches and June through September at 0.17 inches combined.',
      },
      {
        q: 'Can I keep eye drops in my garage in Chino?',
        a: 'It isn’t a good spot. Quell’s label says: {storage}. A Chino garage in summer can run hotter than that, so keep the bottle inside the house.',
      },
      {
        q: 'Does Quell ship to Chino Hills?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Chino Hills and any other US address, with tracking emailed after shipment and no promised delivery date.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-lowell-ma:
   * - ACIS StnData (data.rcc-acis.org), SID LWM, NOAA 1991-2020 monthly normals
   *   (LAWRENCE MUNICIPAL AP, elev 136 ft; in North Andover, northeast of
   *   Lowell): normal max Jan 34.8, Feb 37.5, Mar 45.3, Apr 57.7, Jul 83.2,
   *   Aug 81.6, Nov 50.6, Dec 40.1 F; normal min Jan 19.3, Feb 20.6, Mar 28.1,
   *   Apr 37.6, Jul 63.2, Oct 42.7, Nov 33.9, Dec 25.2 F; precip Jan 2.86,
   *   Feb 2.44, Mar 3.42, Apr 3.60, May 3.39, Jun 3.99, Jul 3.48, Aug 3.04,
   *   Sep 3.75, Oct 4.10, Nov 3.52, Dec 3.32 in (monthly sum 40.91).
   *   Snowfall "M": not used. Raw: .daily-job/acis1122/LWM.json,
   *   .daily-job/d/LWM-extra.json
   * - https://www.nps.gov/lowe/index.htm (Lowell National Historical Park:
   *   water-powered textile mills; canals and power systems; Boott Cotton
   *   Mills Museum with a working weave room)
   * LWM is not in relhum23/wndspd23, so no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-lowell-ma',
    title: 'Dry eye relief in Lowell, Massachusetts',
    description:
      'Lowell gets rain or snow every month, yet four months of freezing nights keep the heat on and indoor air dry. NOAA’s numbers and what helps your eyes.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Dry eye relief in Lowell is mostly about the heating season. The nearest NOAA station, in North Andover, averages lows below freezing from December through March, so furnaces and boilers run for months and indoor air turns dry even though precipitation arrives every month. Keep heated air off your face, add moisture to the bedroom, blink fully at screens, and use a lubricating drop exactly as labeled.`,
      },
      { h: 'Where Lowell’s weather numbers come from' },
      {
        p: `NOAA’s nearest full 1991 to 2020 normals come from Lawrence Municipal Airport. Despite the name, the airport is in North Andover, northeast of Lowell, at about 136 feet. It’s close enough that the seasons line up with Lowell’s, though a given storm can land differently in the two places.`,
      },
      { h: 'Lowell’s seasons, month by month' },
      {
        p: `NOAA’s 1991–2020 climate normals for Lawrence Municipal Airport, as published through the National Weather Service’s NOWData, sketch a full four-season year:`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 34.8°F and a normal low of 19.3°F.`,
          `Normal lows stay below freezing from December (25.2°F) through March (28.1°F).`,
          `July is the warmest month, at 83.2°F by day and 63.2°F at night.`,
          `The twelve monthly precipitation normals add up to about 40.9 inches.`,
          `October is the wettest month at 4.10 inches; February is the driest at 2.44.`,
        ],
      },
      { h: 'A wet climate with dry rooms' },
      {
        p: `No month at the station averages less than 2.4 inches of precipitation, so Lowell is not a dry place outdoors. The trouble is what happens to that air once it’s inside. Cold air holds little water to begin with, and heating it to room temperature drops its relative humidity sharply. A living room at 70°F on a 20-degree January morning can feel parched, and the tear film’s water evaporates faster in it. That’s why eyes often feel worst here in midwinter, not in the drier-seeming days of summer.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Lower the thermostat a few degrees at night; cooler rooms dry the eyes less.`,
          `Keep beds, couches and desks out of the direct path of forced-air registers and away from baseboard heaters.`,
          `Turn down a radiator that runs hot in a small room instead of cracking a window in the cold.`,
        ],
      },
      { h: 'The heat runs from fall into April' },
      {
        p: `Heating season in Lowell is long. November’s normal low is 33.9°F and April’s is still 37.6°F, so most homes run heat for a good half of the year. Spring can catch people off guard: the days warm up, but the furnace keeps cycling on cold nights and mornings well into April. If your eyes still feel dry in spring, look at what the thermostat is doing before you blame pollen or screens. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes into the details.`,
      },
      { h: 'Mill buildings, canals and cold wind' },
      {
        p: `The National Park Service’s Lowell National Historical Park tells the story of the city’s water-powered textile mills and the canals and power systems that ran them, and the Boott Cotton Mills Museum keeps a working weave room. Walks along the canals draw people in every season, and a winter walk with wind on your face dries the eye’s surface quickly. Wraparound glasses or sunglasses block more wind than regular frames, and a few slow blinks when you step back indoors help spread the tear film again.`,
      },
      { h: 'Defrosters, commutes and screens' },
      {
        p: `A car’s defroster blows hot, dry air up the windshield and often straight into the driver’s eyes. Once the glass clears, switch to the floor vents or lower the fan. At work and at home, screens cut blink rates, and a heated office makes it worse. Set your monitor slightly below eye level and take regular breaks to look across the room. [Dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) has a desk-by-desk plan.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. Storage: {storage}. In a Lowell winter, that means not leaving the bottle in a parked car through a freezing night or on a windowsill above a radiator. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering Quell to Lowell' },
      {
        p: `We ship from Brentwood, Tennessee, to Lowell, Dracut, Chelmsford, Tewksbury and every other US address. Guest checkout is fine; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking is emailed when the box ships, but no delivery date is promised, and winter storms can slow any package, so reorder early. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. The [Lowell page](/eye-drops/lowell-ma) and the [Massachusetts page](/eye-drops/state/massachusetts) have more.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Dry indoor air is common; pain and vision changes are not something to blame on the furnace. The panel’s stop-use line reads: {stopUse} If dryness keeps returning even after the heat is off for the season, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How cold does Lowell, Massachusetts get in January?',
        a: 'NOAA’s 1991–2020 normals for nearby Lawrence Municipal Airport put January’s average high at 34.8°F and its average low at 19.3°F.',
      },
      {
        q: 'What is the wettest month in Lowell, MA?',
        a: 'October, at 4.10 inches in the Lawrence Municipal Airport normals, with June close behind at 3.99 inches. February is the driest month at 2.44 inches.',
      },
      {
        q: 'Why do my eyes feel dry in a Lowell winter when it’s damp outside?',
        a: 'The damp air is outdoors; the dry air is inside. Heating cold winter air lowers its relative humidity, so heated rooms dry the tear film faster.',
      },
      {
        q: 'Can I order Quell to Dracut or Chelmsford?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Dracut, Chelmsford and any other US address. Tracking arrives by email, and no delivery date is promised.',
      },
    ],
  },
  {
    slug: 'does-quell-sell-my-data',
    title: 'Does Quell sell my data?',
    description:
      'No. Quell’s privacy policy says it does not sell your personal information. Here’s what it collects, who it shares it with, and how to ask for deletion.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `No. Quell’s [privacy policy](/privacy) states plainly that it does not sell your personal information. It collects what it needs to take payment, ship your order and answer your questions, shares it only with the service providers that do that work (and regulators where the law requires), and lets you ask to see, correct, export or delete what it holds by calling {phone}.`,
      },
      { h: 'What the privacy policy actually says' },
      {
        p: `The answer above isn’t a summary of good intentions. Section 2 of the policy, “How we use your information,” ends with a single sentence: we do not sell your personal information. Everything below comes from the same page, which was last updated August 18, 2026. If anything here ever differs from the policy, the policy is the one that counts, and any material change to it will be emailed to customers before it takes effect.`,
      },
      { h: 'What information Quell collects' },
      {
        p: `The policy splits what it collects into what you hand over and what gets recorded on its own. The first group:`,
      },
      {
        list: [
          `Account details, if you make an account: your name, email address and password. Passwords are stored only as a salted hash, never as readable text.`,
          `Order and shipping details: what you bought and where it’s going.`,
          `Anything you send: questions you ask by phone or email about the product.`,
        ],
      },
      {
        p: `The second group is smaller. Your IP address, device and browser show up in the hosting provider’s server logs, and that record is used to limit repeated sign-in and checkout attempts. There’s also a cookie that keeps you signed in.`,
      },
      { h: 'What stays on your own device' },
      {
        p: `Some details you might expect the store to keep stay with you instead. If you check out as a guest, your name, address, email and phone number are saved in your own browser so you don’t have to type them next time. According to the policy, Quell never receives a copy of those saved details, and you can wipe them with “Not you? Clear details” on the cart page or by clearing your browser’s data for the site. On a computer other people use, that button is worth pressing; our guide to [ordering on a shared computer](/guides/ordering-eye-drops-on-a-shared-computer) explains when it matters.`,
      },
      { h: 'Does Quell keep my card number?' },
      {
        p: `No. Card details are typed directly into the payment provider’s form, which the policy names as Authorize.net, and they never pass through or rest on Quell’s servers. The store keeps only a payment reference and whether the charge went through. Card details are never saved anywhere on the site, either, including in the guest details your browser remembers. Payment questions about the processor itself fall under Authorize.net’s own privacy policy.`,
      },
      { h: 'Who Quell shares your information with' },
      {
        p: `“Not sold” isn’t the same as “never shared,” so it helps to know who does see it. The policy lists three groups:`,
      },
      {
        list: [
          `Service providers that handle payment processing, shipping, hosting and email, under contracts that limit what they can do with the data.`,
          `Regulators, where the law requires it.`,
          `A successor company if the business is ever acquired, still bound by the same policy.`,
        ],
      },
      {
        p: `Your address goes to the shipping side because a box can’t be delivered without it, and your email goes to the email service so you can get a receipt, a shipping notice and a tracking link. That’s the extent of it under the policy.`,
      },
      { h: 'Does Quell use ad trackers or third-party cookies?' },
      {
        p: `The policy says the site doesn’t use advertising trackers or third-party cookies. The one cookie it describes is the one that keeps you signed in. Your browser’s privacy settings still work as usual, and clearing site data removes saved guest details along with that cookie.`,
      },
      { h: 'Why some records are kept for years' },
      {
        p: `The privacy policy gives three reasons Quell uses your information beyond payment and shipping: answering your questions, catching fraud and keeping accounts secure, and meeting recordkeeping obligations that apply to over-the-counter drug sales. Order records are kept as long as they’re needed for tax, accounting and product safety recordkeeping. Data that isn’t essential, such as account details beyond those records, is deleted on request.`,
      },
      { h: 'How to see, fix or delete your information' },
      {
        p: `The policy gives you these choices, with a note that some states and countries add rights of their own:`,
      },
      {
        list: [
          `Access, correct or export the information Quell holds about you.`,
          `Ask for deletion of anything Quell isn’t legally required to keep.`,
          `Use any extra rights your state or country’s privacy law gives you.`,
        ],
      },
      {
        p: `To make any of these requests, call {phone} ({hours}) or write to {company} at {address}. Have the email address you ordered with ready so the right records can be found. You can also look up an existing order yourself on the [order lookup page](/orders).`,
      },
      { h: 'Security, breaches and adults-only shopping' },
      {
        p: `Quell says it uses encryption in transit, hashed passwords and access controls, while admitting no system is perfectly secure. If a breach affects your data, the policy commits to telling you and the relevant regulators as the law requires. The site is meant for adults; buyers must be 18 or older, and the policy says Quell doesn’t knowingly create accounts for anyone younger.`,
      },
    ],
    faq: [
      {
        q: 'Does Quell share my email address with advertisers?',
        a: 'Its privacy policy says it doesn’t sell personal information and doesn’t use advertising trackers or third-party cookies. Your email goes only to the service providers that send receipts and shipping notices.',
      },
      {
        q: 'Can I ask Quell to delete my information?',
        a: 'Yes. Call {phone} ({hours}) or write to the company address. Quell deletes anything it isn’t legally required to keep, though order records are retained for tax, accounting and product safety recordkeeping.',
      },
      {
        q: 'Where does Quell store my guest checkout details?',
        a: 'In your own browser. The privacy policy says the site never receives a copy, and “Not you? Clear details” on the cart page removes them.',
      },
      {
        q: 'Who processes card payments for Quell?',
        a: 'Authorize.net. Card details go straight to its payment form and never pass through or rest on Quell’s servers; Quell keeps only a payment reference and the outcome.',
      },
    ],
  },
  {
    slug: 'can-i-pick-up-my-quell-order',
    title: 'Can I pick up a Quell order instead of shipping?',
    description:
      'Quell’s checkout has no pickup option: every order ships from Brentwood, Tennessee. What that means if you live nearby or need the drops soon.',
    category: 'shipping',
    addedOn: '2026-11-22',
    body: [
      {
        p: `No. Quell’s online checkout offers one way to get your order: it ships from Brentwood, Tennessee, to the US address you enter. There’s no in-store or curbside pickup choice in the cart, even for people who live nearby. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and you get a tracking email once the box is on its way.`,
      },
      { h: 'What the cart and checkout offer' },
      {
        p: `When you open the [cart](/cart), the shipping line shows one of two things: standard shipping at {shipping}, or free shipping once you reach {freeBottles} bottles. There’s no menu of delivery speeds and no box to tick for pickup. Checkout then asks for a shipping address, and that’s where the order goes. The setup is simple on purpose: one method, one price, the same for every state the store ships to.`,
      },
      { h: 'Why every order ships' },
      {
        p: `Orders are packed by hand and sent from the office in Brentwood, Tennessee. Shipping every order the same way keeps each one on the same path: it gets packed, a tracking number gets attached, and you get a shipping email you can follow. A pickup counter would need staffed hours, ID checks and a different way to mark orders complete. If that ever changes, the cart is where it would appear, so the cart is the place to check rather than any page that’s been cached or shared.`,
      },
      { h: 'I live near Brentwood. Can I still come by?' },
      {
        p: `The site doesn’t list a pickup option or walk-in hours for orders, so don’t plan a trip around one. If you’re local and have a question about an order, call {phone} during {hours}. The person who answers can tell you what’s possible for your order; this page can only describe what the website does, and the website ships.`,
      },
      { h: 'Ways to make shipping work for you' },
      {
        p: `If pickup appealed because you’re rarely home or worried about a box sitting on the porch, there are other ways to solve that:`,
      },
      {
        list: [
          `Ship to your workplace, if your employer accepts personal deliveries. [Shipping eye drops to your work address](/guides/shipping-eye-drops-to-your-work-address) covers what to ask first.`,
          `Ship to a relative or neighbor who’s home during the day. Your billing address doesn’t have to match the shipping address.`,
          `Use the tracking email to see when the box is moving, then plan to be around or ask someone to bring it in.`,
          `If you live in an apartment, add the unit number and any building name so the box doesn’t end up at the front office by mistake.`,
        ],
      },
      { h: 'If you need eye drops right away' },
      {
        p: `Shipping takes time, and Quell doesn’t promise a delivery date. If you’re out of drops and uncomfortable today, the quickest step is whatever your local pharmacy carries, chosen with a pharmacist’s help. Then order Quell for the weeks ahead. To avoid that gap next time, reorder when the bottle is about half used, or keep a spare unopened bottle. Quell sends one reorder reminder email after a purchase, and there’s no subscription to set up or cancel.`,
      },
      { h: 'Sending Quell to someone else instead' },
      {
        p: `Some people ask about pickup because they want to hand a bottle to a friend or parent in person. Shipping straight to that person often works better: enter their address as the shipping address and your own card and billing details at payment. They get the box, you get the receipt and tracking, and nobody has to make a trip. Around Thanksgiving (Thursday, November 26, 2026) and the weeks before Christmas, packages everywhere move through busier networks, so order early if the timing matters. No delivery date is promised at any time of year.`,
      },
      { h: 'One price, one method, everywhere' },
      {
        p: `Because there’s only one shipping method, there’s nothing to compare at checkout. A buyer in Brentwood pays the same {shipping} as a buyer in Alaska, and both ship free at {freeBottles} bottles. That keeps the math simple: if you were going to drive over to save on shipping, ordering {freeBottles} bottles at once does the same job.`,
      },
      { h: 'How to follow your shipment' },
      {
        p: `Once the box ships, the shipping email gives the tracking number and link. You can also look up an order on the [order lookup page](/orders) with the details from your confirmation. If tracking stops moving for a long while, or something looks wrong, call {phone} with your order number.`,
      },
      { h: 'Checking the box when it arrives' },
      {
        p: `Because nobody hands you the order in person, take a minute when it arrives. Make sure the carton and bottle look intact and the tamper seal isn’t broken. Damaged, incorrect or broken-seal orders are replaced if you call within {returnDays} days. Unopened bottles you decide you don’t want can be refunded within {returnDays} days of delivery, and you don’t send them back. Before first use, read the panel on the carton, including this line: {doNotUse}. The same text is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Does Quell have a store I can visit?',
        a: 'The website doesn’t list a store or walk-in pickup. Orders are placed online and shipped from Brentwood, Tennessee, to the address you enter.',
      },
      {
        q: 'Is there local pickup for Quell in Brentwood, Tennessee?',
        a: 'Not through the website. The cart offers standard or free shipping only. If you’re nearby and have a question about an order, call {phone} during {hours}.',
      },
      {
        q: 'Can I choose faster shipping on Quell?',
        a: 'No. The cart shows a single shipping method, standard shipping at a flat rate or free shipping on larger orders, and no delivery date is promised.',
      },
    ],
  },
  {
    slug: 'eye-drop-package-returned-to-sender',
    title: 'Package returned to sender: what happens to my order?',
    description:
      'If tracking says your eye drops are going back to the sender, call Quell with your order number. Why packages bounce back and what to do next.',
    category: 'returns',
    addedOn: '2026-11-22',
    body: [
      {
        p: `If tracking shows your Quell order being returned to the sender, it’s on its way back to Brentwood, Tennessee, not lost. Call {phone} during {hours} with your order number. Quell’s terms don’t spell out a fixed outcome for returned packages, so the team will look at why it came back and work out with you whether to send it again to a corrected address or settle it another way.`,
      },
      { h: 'What “returned to sender” means' },
      {
        p: `The phrase means the delivery service tried, or decided it couldn’t try, and is sending the box back to where it started. For a Quell order that’s the office in Brentwood. The package isn’t destroyed or discarded at that point, and the bottles inside are still sealed. What it does mean is that your order won’t reach you on this trip, so it’s worth acting quickly rather than waiting to see what happens.`,
      },
      { h: 'Common reasons a package comes back' },
      {
        p: `The tracking page usually gives a short reason. The usual ones:`,
      },
      {
        list: [
          `The address was incomplete: a missing apartment, suite or unit number, or a street number off by a digit.`,
          `The address couldn’t be matched to a delivery point, which happens with brand-new streets and some rural routes.`,
          `Nobody was available to accept it after more than one attempt, and it sat unclaimed at a pickup location.`,
          `Someone at the address refused it, which happens with gifts sent to a recipient who wasn’t expecting a box.`,
          `The recipient’s name didn’t match anyone at a business or building mailroom.`,
        ],
      },
      { h: 'What to do right now' },
      {
        list: [
          `Open your shipping email or the [order lookup page](/orders) and note what the tracking says, including any reason code.`,
          `Find your order number; it’s in the confirmation email and the shipping email.`,
          `Check the shipping address on your confirmation against your real address, unit number included.`,
          `Call {phone} during {hours}, explain what tracking shows, and give the corrected address if one was wrong.`,
        ],
      },
      {
        p: `Don’t place a second order to replace it until you’ve talked to someone. Otherwise you may end up paying twice while the first box is still on its way back.`,
      },
      { h: 'What Quell’s terms say' },
      {
        p: `Section 6 of the [terms](/terms) covers shipping. Delivery estimates are estimates, risk of loss passes to you on delivery to the address you provide, and Quell isn’t responsible for delays caused by the carrier or by an incorrect address. A returned package was never delivered to you, so it hasn’t reached that point. Beyond that, the terms don’t describe a set procedure for packages that bounce back. They do say that a refund or replacement is arranged by calling with your order number, so the phone is the way to sort this out. This page can’t promise a particular result, and nobody should promise you one before looking at your order.`,
      },
      { h: 'How a wrong address happens' },
      {
        p: `Browsers fill in saved addresses from an old apartment. Gift buyers type the recipient’s street from memory. A guest checkout may remember details from a previous order on that device. If any of that sounds familiar, our guides to [getting the shipping address right](/guides/getting-the-address-right) and [entering the wrong shipping address](/guides/wrong-shipping-address) walk through how to avoid it next time.`,
      },
      { h: 'Refund windows and a box that never arrived' },
      {
        p: `Quell refunds unopened bottles within {returnDays} days of delivery, and replaces damaged, incorrect or broken-seal orders within the same window. A package that went back to Brentwood was never delivered to you, so those rules don’t map neatly onto it. Rather than guessing how the clock applies, raise it on the call and let the team look at the dates on your order. The [shipping email guide](/guides/the-shipping-email) explains what each notice tells you.`,
      },
      { h: 'Gifts that come back' },
      {
        p: `When a gift is refused or goes unclaimed, the recipient may not know a box was ever on its way. Before calling, check with them quietly if you can: confirm the address, whether their building takes packages, and whether they’ll be away. Then call with the corrected details. If you no longer want the gift sent, say so on the call.`,
      },
      { h: 'Avoiding a repeat' },
      {
        list: [
          `Include unit, suite or apartment numbers every time, even if the building is small.`,
          `For a business address, add the company name and the recipient’s full name.`,
          `If you’ll be away, ship to someone who will be home.`,
          `Watch the tracking email so you can act on a delivery notice before a package is sent back.`,
        ],
      },
      {
        p: `Once the order does arrive, check the seal and the bottle. Damaged, incorrect or broken-seal orders are replaced within {returnDays} days, and an unopened bottle you don’t want can be refunded within {returnDays} days of delivery without sending it back.`,
      },
    ],
    faq: [
      {
        q: 'Why was my eye drop package returned to sender?',
        a: 'Usually an incomplete or incorrect address, a missing unit number, a refused delivery, or a package left unclaimed after delivery attempts. The tracking page normally shows the reason.',
      },
      {
        q: 'Will Quell reship a package that was returned?',
        a: 'Call {phone} with your order number. The terms don’t set a fixed outcome for returned packages, so the team will look at what happened and work out the next step with you.',
      },
      {
        q: 'Should I reorder if my package is going back to the sender?',
        a: 'Not yet. Call first with your order number so you don’t pay for a second order while the first box is still in transit back to Brentwood.',
      },
    ],
  },
  {
    slug: 'eye-drop-label-too-small-to-read',
    title: 'Eye drop label too small to read? What to do',
    description:
      'Drug Facts print is small. How to read Quell’s label comfortably: the online Drug Facts page, zoom, magnifiers, a pharmacist, or a phone call.',
    category: 'label',
    addedOn: '2026-11-22',
    body: [
      {
        p: `If the print on an eye drop carton is too small to read, open the same panel online and enlarge it, use a magnifier and bright light, or ask a pharmacist to read it with you. For Quell, every line of the Drug Facts panel is on our [Drug Facts page](/drug-facts), where your browser’s zoom can make it as large as you need. You can also call {phone} during {hours}.`,
      },
      { h: 'Why drug labels use such small type' },
      {
        p: `A small bottle and carton have to carry a lot: the active ingredients with their amounts, the purpose of each, uses, warnings, directions, storage and a full inactive list. Quell’s panel lists {inactiveCount} inactive ingredients alone. Fitting that on a carton sized for a {size} bottle means tight type, which is hard on anyone, and harder still with dry eyes, older eyes, or a dim bathroom.`,
      },
      { h: 'Read it on a screen instead' },
      {
        p: `The online panel is the easiest fix. Our Drug Facts page shows the same sections in the same order, set as regular web text, so you can enlarge it without it turning blurry:`,
      },
      {
        list: [
          `On a computer, hold Ctrl (Cmd on a Mac) and press the plus key to zoom in; Ctrl or Cmd with zero resets it.`,
          `On a phone, pinch outward with two fingers, or turn on your phone’s text-size or zoom setting.`,
          `Use your browser’s reader view or your phone’s built-in read-aloud feature to hear the text.`,
          `Bookmark the page so it’s there the next time you have a question.`,
        ],
      },
      {
        p: `The [terms](/terms) make one point worth knowing: the panel printed on the product you receive controls if it ever differs from the website. Use the screen version for comfort, and glance at the carton itself before first use.`,
      },
      { h: 'Reading the printed carton' },
      {
        list: [
          `Use daylight from a window or a bright desk lamp; overhead bathroom light is often too dim and casts glare.`,
          `Try a handheld magnifier or a lighted one; many drugstores sell them.`,
          `Use your phone’s camera zoom or magnifier feature, and take a photo you can enlarge later.`,
          `Put on your reading glasses if you use them; small print is a common reason people reach for them.`,
          `Keep the carton after opening. The bottle alone has far less room for text.`,
        ],
      },
      { h: 'Which lines matter most' },
      {
        p: `If you can only manage a few lines at a time, start with these. The Uses: {uses}. The directions: {directions}. The warning line: {warnings}. The stop-use list, which our site gives as a sentence: {stopUse}`,
      },
      {
        p: `Then the practical ones. Before each use: {doNotUse}. While using: {tip}. For storage: {storage}. And if the product is ever swallowed: {swallowed}. Our guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) explains what each section is for.`,
      },
      { h: 'Ask a pharmacist or call us' },
      {
        p: `Pharmacists read labels with customers every day and can answer questions the panel leaves open, such as whether a drop fits alongside other things you use. If you have a question about Quell’s label specifically, call {company} at {phone} during {hours}. Questions about your own eyes belong with an eye doctor.`,
      },
      { h: 'If small print is getting harder every year' },
      {
        p: `Needing more light or holding things farther away to read is something many people notice with age. It’s worth bringing up at your next eye exam, especially if it’s changed quickly. A sudden change in vision is different: the label’s stop-use list names changes in vision, and that calls for an eye doctor promptly. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
      { h: 'Make a large-print copy' },
      {
        p: `If you read the label often, print the Drug Facts page at a larger scale from your browser’s print settings, or copy the directions in big letters onto an index card. Keep it with the carton in a drawer or medicine cabinet, out of children’s reach. A printed copy is handy for anyone who doesn’t use a phone or computer, and it’s easier to read in the morning before your eyes feel fully awake.`,
      },
      { h: 'Helping someone else read their label' },
      {
        p: `If you’re helping a parent or friend, read the panel aloud with them rather than summarizing it, so they hear the exact wording. Write the directions in large print on a card, set the bottle somewhere they’ll see it, and make sure they know where to find the carton or the online page later.`,
      },
    ],
    faq: [
      {
        q: 'How can I read the small print on eye drop boxes?',
        a: 'Use bright light, a magnifier or your phone’s camera zoom, or read the same panel online. Quell’s Drug Facts page can be enlarged as much as you need with your browser’s zoom.',
      },
      {
        q: 'Is the online Drug Facts panel the same as the one on the box?',
        a: 'It shows the same sections and wording. Quell’s terms say the panel printed on the product you receive controls if the two ever differ, so check the carton before first use.',
      },
      {
        q: 'Who can read an eye drop label to me?',
        a: 'A pharmacist can go through it with you, or you can call Quell at {phone} with questions about its label. Phone read-aloud features also work on the online Drug Facts page.',
      },
    ],
  },
  {
    slug: 'preservative-free-glycerin-eye-drops',
    title: 'Preservative-free glycerin eye drops: what that means',
    description:
      'A preservative-free glycerin eye drop has glycerin as a lubricant and no added preservative. What that means for Quell, the bottle, and how you handle it.',
    category: 'formula',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A preservative-free glycerin eye drop uses glycerin (also called glycerol) as a lubricating ingredient and contains no added preservative to keep germs from growing in the bottle once it’s opened. Quell is one: {glycerol} is one of its three active ingredients, and it is preservative-free. Without a preservative, keeping the bottle clean is up to you, which is why the label says: {tip}.`,
      },
      { h: 'Two phrases in one search' },
      {
        p: `“Glycerin eye drops” and “preservative-free” describe two separate things. Glycerin is about what the drop contains to do its job: it’s a lubricant. Preservative-free is about what the drop leaves out: an ingredient whose job is to protect the liquid in the bottle after the seal is broken. A product can have one without the other, so it’s worth checking both on the label rather than assuming.`,
      },
      { h: 'Glycerin and glycerol are the same ingredient' },
      {
        p: `Labels use both names. Quell’s panel prints it as {glycerol}, listed with the Purpose “Lubricant.” Our guide on [glycerin vs. glycerol](/guides/glycerin-vs-glycerol-in-eye-drops) covers the naming, and [what glycerin does in eye drops](/guides/what-does-glycerin-do-in-eye-drops) explains its role. In Quell it works alongside {polysorbate} and {mineralOil}; the full active list reads: {actives}.`,
      },
      { h: 'What a preservative does, and what leaving it out changes' },
      {
        p: `Multi-dose bottles get opened again and again, and every time the cap comes off, the tip is exposed to air, fingers and surfaces. Many eye drops add a preservative to keep the liquid from becoming a place for microbes to grow. Our page on [benzalkonium chloride](/guides/benzalkonium-chloride-in-eye-drops) describes one common example. A preservative-free drop skips that ingredient, so it leans on clean handling instead. Some preservative-free products come in single-use vials for that reason; Quell comes in a {size} bottle, so the habits below matter.`,
      },
      { h: 'Handling a preservative-free bottle' },
      {
        list: [
          `Wash and dry your hands before each use.`,
          `Never let the tip touch your eye, lashes, fingers, a counter or anything else.`,
          `Put the cap back on right after use, and don’t set the open cap face-down on a sink.`,
          `Use your own bottle; sharing passes it between more hands and faces.`,
          `Keep it within the label’s storage range: {storage}.`,
        ],
      },
      {
        p: `If the cap has been left off or the tip has touched something, our guide to a [cap left off](/guides/left-the-cap-off-eye-drops) talks through what to consider.`,
      },
      { h: 'How to tell whether a glycerin drop is preservative-free' },
      {
        p: `Front-of-box wording helps, but the Drug Facts panel is where to confirm it. Read the inactive ingredients list for anything described as a preservative. On Quell’s panel the inactive ingredients are: {inactives}. Our label guide on [checking whether drops are preservative-free](/guides/how-do-i-know-if-my-eye-drops-are-preservative-free) goes through the steps for any product.`,
      },
      { h: 'Why Quell looks different from clear glycerin drops' },
      {
        p: `Many glycerin drops are clear. Quell isn’t, because it also carries oils meant for the tear film’s outer layer: Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel says: {milky}. {appearance} One line on the panel applies before every use: {doNotUse}.`,
      },
      { h: 'Directions and what the label doesn’t cover' },
      {
        p: `Preservative-free doesn’t change the dose. Quell’s directions are: {directions}. The label doesn’t give directions for contact lenses, for children, or for using it with other eye drops; ask your eye doctor or pharmacist about any of those. The caution on the panel reads: {warnings}. And the stop-use list, given on our site as a sentence: {stopUse}`,
      },
      { h: 'Traveling with a preservative-free bottle' },
      {
        p: `A trip is where clean-handling habits slip. Keep the bottle in a small zip pouch rather than loose in a bag, recap it every time, and wash or sanitize your hands before using it in an airport or car. TSA’s liquids rule allows containers of 3.4 ounces (100 milliliters) or less in a carry-on bag, and a {size} bottle is well under that. Keep it out of a hot car or a checked bag left on a cold tarmac, since the label’s storage range still applies.`,
      },
      { h: 'Is preservative-free the right choice for you?' },
      {
        p: `That depends on your eyes and how often you use drops, which is a conversation for an eye doctor or pharmacist. What the label can tell you is what’s in the bottle and how to use it. Our [Drug Facts page](/drug-facts) shows Quell’s complete panel if you want to compare it with what you’re using now.`,
      },
    ],
    faq: [
      {
        q: 'What does preservative-free glycerin eye drops mean?',
        a: 'It means the drop uses glycerin (glycerol) as a lubricant and has no added preservative ingredient. Quell is one example: glycerol is one of its three actives and it contains no preservative.',
      },
      {
        q: 'Do preservative-free glycerin drops need special care?',
        a: 'Yes, mainly clean handling. Wash your hands, never let the tip touch anything, recap right away and keep the bottle to yourself, since there’s no preservative in the liquid.',
      },
      {
        q: 'Where do I check if a glycerin eye drop has a preservative?',
        a: 'Read the inactive ingredients on the Drug Facts panel for anything described as a preservative, rather than relying on the front of the box alone.',
      },
    ],
  },
  {
    slug: 'can-you-use-eye-drops-with-eyelash-serum',
    title: 'Can I use eye drops with eyelash serum?',
    description:
      'Eye drop labels don’t cover lash serums. What Quell’s label does say, how to keep the two apart, and when to ask a pharmacist or eye doctor.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Quell’s label doesn’t say anything about eyelash serums, so it can’t tell you how the two fit together. Ask a pharmacist or your eye doctor, and bring both products with you. What you can do on your own is keep them physically apart: use the drop exactly as labeled, keep the serum’s applicator away from the dropper tip, and follow the serum’s own instructions for the lash line.`,
      },
      { h: 'Why the eye drop label is silent' },
      {
        p: `A Drug Facts panel covers the product it’s printed on. Quell’s Uses read: {uses}. Its directions read: {directions}. There’s nothing about cosmetics, serums or other products used near the eyes, and the label doesn’t give directions for using it with other eye drops either. When a label is silent, the honest answer is to ask someone who can look at both products and your eyes, rather than guess.`,
      },
      { h: 'Questions to bring to a pharmacist' },
      {
        list: [
          `Should I space the eye drop and the lash serum apart, and in which order?`,
          `Is there anything in this serum I should watch for, given I use a lubricating eye drop?`,
          `What should I do if the serum gets into my eye?`,
          `Should I stop either product if my eyes feel different after I start the serum?`,
        ],
      },
      {
        p: `Bring the serum’s box and Quell’s carton, or open our [Drug Facts page](/drug-facts) on your phone. Ingredient lists are easier to compare side by side than from memory.`,
      },
      { h: 'Keep the products physically apart' },
      {
        p: `Whatever timing your pharmacist suggests, a few habits keep a lash product from ending up where it doesn’t belong. Quell is preservative-free, so the dropper tip needs extra care. The label says: {tip}.`,
      },
      {
        list: [
          `Wash your hands after applying serum and before handling the eye drop bottle.`,
          `Keep the serum brush and the dropper tip from touching each other or the same towel.`,
          `Store the two separately so a leaking serum tube can’t coat the dropper bottle.`,
          `Don’t apply serum with the same fingertip you use to pull down your lower lid for a drop.`,
        ],
      },
      { h: 'If lash serum gets in your eye' },
      {
        p: `Lash serums are meant for the lash line, not the eye itself. If some gets into your eye, follow the serum maker’s instructions on its packaging, and contact a pharmacist or eye doctor if they say to or if you’re unsure. An eye drop isn’t a rinse for a cosmetic splash, and Quell’s label doesn’t describe that use. If the eye hurts, stays irritated or your vision changes, the label’s stop-use list applies: {stopUse}`,
      },
      { h: 'Serums, makeup and dry eyes' },
      {
        p: `Many people who use lash serums also wear eye makeup, and both put products close to the eye’s surface. Our guide on [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) covers the order of a morning routine, and [eye drops with lash extensions](/guides/can-you-use-eye-drops-with-eyelash-extensions) covers adhesives and extensions. For serums, the timing question is one to settle with a pharmacist, because the right answer depends on the specific product.`,
      },
      { h: 'Night routines' },
      {
        p: `Many lash serums are applied at night. If you also use a drop near bedtime, think about the order in which you do things at the sink: drops first or serum first is what you’ll ask the pharmacist, but either way, wash your hands between steps and recap the drop bottle before opening the serum. Quell’s panel says: {doNotUse}. Check the color before each use and store it as directed: {storage}.`,
      },
      { h: 'Contact lenses and lash products' },
      {
        p: `If you also wear contact lenses, that’s one more product near your eye, and Quell’s label gives no directions for use with contacts. Ask your eye doctor how lenses, serum and drops fit into your routine. At your next exam, mention every product you use around your eyes, cosmetic or not, so the doctor has the full picture.`,
      },
      { h: 'Signs to stop and see an eye doctor' },
      {
        p: `Starting any new product near your eyes is a reason to pay attention for a few weeks. If your eyes feel worse, sting more than usual, look different, or your vision changes, stop the new product and talk to an eye doctor, who can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'Can I use lubricating eye drops if I use a lash growth serum?',
        a: 'Quell’s label doesn’t cover lash serums, so ask a pharmacist or eye doctor with both products in hand. Keep the serum brush and dropper tip apart, and use the drop exactly as labeled.',
      },
      {
        q: 'Should I put in eye drops before or after eyelash serum?',
        a: 'The eye drop label doesn’t address it, and the answer can depend on the serum. A pharmacist can tell you the order and spacing; wash your hands between the two either way.',
      },
      {
        q: 'Can eye drops rinse out eyelash serum?',
        a: 'Quell’s label doesn’t describe rinsing out cosmetics. Follow the serum maker’s instructions if it gets in your eye, and contact a pharmacist or eye doctor if your eye hurts or stays irritated.',
      },
    ],
  },
  {
    slug: 'can-you-use-eye-drops-after-a-facial',
    title: 'Can you use eye drops after a facial?',
    description:
      'Eye drop labels don’t mention facials. How to plan drops around steam, masks and skin products near your eyes, and when to ask a pharmacist.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Quell’s label doesn’t mention facials, so it neither allows nor rules out using drops afterward. What matters is keeping skin products out of your eyes and off the dropper. Wash your hands, make sure creams and serums around your eyes have been wiped from the lid area, and use the drop as labeled: {directions}. If a product got into your eye during the facial, ask a pharmacist first.`,
      },
      { h: 'What happens to your eyes during a facial' },
      {
        p: `A facial puts a lot of activity close to the eyes. There’s usually warm steam, cleansers and exfoliants worked around the brow and cheekbones, masks that dry on the skin, and creams or serums pressed into the under-eye area. Many people keep their eyes closed for long stretches, sometimes under pads. Eyes can feel a little odd afterward simply from being closed and still for an hour, and some people notice a gritty feeling if a bit of product drifted toward the lash line.`,
      },
      { h: 'Before your appointment' },
      {
        list: [
          `Tell the esthetician that your eyes run dry, so they can keep steam and products farther from your eyes.`,
          `Ask for eye pads or covers during steaming and masks.`,
          `If you wear contact lenses, ask your eye doctor ahead of time whether to wear them to a facial; Quell’s label gives no contact-lens directions.`,
          `Bring your own bottle if you usually use drops at that time of day, rather than borrowing one.`,
        ],
      },
      { h: 'Using drops afterward: a simple order' },
      {
        list: [
          `Wash and dry your hands, since your fingers have likely touched freshly cleansed skin.`,
          `Gently wipe the eyelid and lash area with a clean, damp tissue if there’s cream or oil on it, keeping the tissue out of the eye itself.`,
          `Check the bottle: {doNotUse}.`,
          `Tilt your head back, pull the lower lid down with a clean finger, and add the drop without letting the tip touch your lashes or skin.`,
          `Recap the bottle right away. The label says: {tip}.`,
        ],
      },
      {
        p: `The tip rule matters more than usual on facial day. Skin products on your lashes or cheek can transfer to the dropper if it brushes your face, and Quell is preservative-free, so you want the tip to stay clean.`,
      },
      { h: 'If something from the facial got into your eye' },
      {
        p: `Peels, masks and exfoliants aren’t meant for the eye. If any got in and your eye stings or feels irritated, tell the spa and follow the product’s instructions, and call a pharmacist or eye doctor if you’re unsure what to do. An eye drop isn’t a substitute for that advice, and Quell’s label doesn’t describe rinsing cosmetics out of the eye. Pain or vision changes call for medical help. The label’s stop-use list: {stopUse}`,
      },
      { h: 'Steam, heat and how your eyes feel later' },
      {
        p: `Some people find their eyes feel comfortable right after a warm, steamy room and drier a few hours later, especially once they’re back in a heated home or air-conditioned car. That pattern has more to do with the air around you than the facial itself. Keep vents off your face on the drive home and take a break from screens for a bit if you can. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains why staring slows blinking.`,
      },
      { h: 'Eye creams and serums at home' },
      {
        p: `A facial often comes with home-care products for the eye area. Apply those as their packaging says, keep them to the skin around the eye rather than the lid margin, and wash your hands before you pick up your eye drops. If you’re also using makeup, our guide on [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) covers the order. The question of how long to wait between a skin product and an eye drop is one for a pharmacist, who can look at the specific product.`,
      },
      { h: 'What Quell is, and what the label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. The panel’s caution: {warnings}. For storage: {storage}. If you bring the bottle to a spa, keep it in your bag rather than near a steam room or a sunny car window. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to skip the facial and see an eye doctor' },
      {
        p: `If your eyes are already sore, sticky, swollen or sensitive to light, put off the facial and talk to an eye doctor first, who can find the cause and decide what to do. The same goes for eyes that stay uncomfortable for days after an appointment. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs.`,
      },
    ],
    faq: [
      {
        q: 'Is it okay to put in eye drops right after a facial?',
        a: 'Quell’s label doesn’t address facials. Wash your hands, wipe any product off the lid area, and use the drop as labeled without letting the tip touch your skin or lashes.',
      },
      {
        q: 'Why do my eyes feel dry after a facial?',
        a: 'Often it’s the air afterward, such as a heated home or car, plus time spent with your eyes closed and still. Product drifting toward the lash line can also feel gritty.',
      },
      {
        q: 'Should I tell my esthetician I have dry eyes?',
        a: 'Yes. They can keep steam and products farther from your eyes and use eye pads during masks and steaming.',
      },
      {
        q: 'What should I do if facial mask gets in my eye?',
        a: 'Tell the spa, follow the product’s instructions, and call a pharmacist or eye doctor if your eye stings, hurts or your vision changes.',
      },
    ],
  },
  {
    slug: 'eye-drops-after-brow-waxing-or-tinting',
    title: 'Can you use eye drops after brow waxing or tinting?',
    description:
      'Brow appointments put wax and dye inches from your eyes. What Quell’s label covers, how to keep tint away from the dropper, and when to call a doctor.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Eye drop labels don’t cover brow waxing or tinting, including Quell’s, so there’s no labeled waiting time either way. The practical steps are to keep wax and dye away from your eyes and away from the bottle tip: let the brow area settle, wash your hands, and use the drop exactly as the label says. If tint or wax got into your eye, talk to a pharmacist or eye doctor first.`,
      },
      { h: 'Why brow work is different from other beauty appointments' },
      {
        p: `Brow services happen just above the eye. Waxing uses warm wax and strips along the brow bone, sometimes followed by a soothing lotion. Tinting brushes dye onto the brow hairs and leaves it there for a few minutes before it’s wiped off. Lamination adds solutions that set the hairs in place. You’re usually lying back with your eyes closed, and the main risk to the eye is a drip, smear or rub of product sliding down toward the lashes.`,
      },
      { h: 'At the appointment' },
      {
        list: [
          `Mention that your eyes run dry, and ask the technician to keep products well above the lash line.`,
          `Keep your eyes closed while tint is on, and say so right away if anything stings.`,
          `Don’t rub your eyes during or after; tint and wax residue can travel on your fingers.`,
          `If you wear contact lenses, ask your eye doctor beforehand how to handle a tint appointment; Quell’s label doesn’t give contact-lens directions.`,
        ],
      },
      { h: 'Putting in drops after the appointment' },
      {
        p: `Once you’re home, give the brow area a little time and get anything sticky or tinted off your fingers before you reach for the bottle. Then go step by step:`,
      },
      {
        list: [
          `Wash and dry your hands thoroughly; tint stains skin and can stain a bottle, too.`,
          `Look in a mirror to make sure there’s no wax or tint on your lashes or lids.`,
          `Before you open the bottle, check this line on the panel: {doNotUse}.`,
          `Tilt your head back and pull the lower lid down, keeping your fingers away from the freshly waxed brow.`,
          `Use the drop as the panel directs: {directions}.`,
          `Keep the tip clear of your skin and lashes. The panel says: {tip}.`,
        ],
      },
      { h: 'If tint or wax reached your eye' },
      {
        p: `Brow dye and wax aren’t made for the eye. If either got in and your eye burns, waters heavily or feels scratchy, tell the salon, follow the product maker’s instructions, and call a pharmacist or eye doctor for advice. Quell’s label doesn’t describe using it to wash anything out, so don’t count on it for that. Pain, light sensitivity or any change in vision means getting medical help. The label’s stop-use list: {stopUse}`,
      },
      { h: 'Tender skin and dry-feeling eyes afterward' },
      {
        p: `Freshly waxed skin is often pink and tender for a while. That’s about the skin, not your eyes, but tender brows can make you squint or rub, and both leave the eye feeling drier. A cool, clean cloth on the brow (not on the eye) can make the area more comfortable. Indoors, keep heater or air conditioner vents off your face, and if you spend the evening on a screen, take breaks to blink fully.`,
      },
      { h: 'Brow products at home' },
      {
        p: `Brow gels, pencils, serums and aftercare creams all sit close to the eye. Apply them after your eye drops so you aren’t handling the bottle with product on your fingers, and keep the bottle in a separate pouch from your makeup. Our guide to [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) covers a morning routine, and [eye drops with lash serum](/guides/can-you-use-eye-drops-with-eyelash-serum) covers products used on the lash line.`,
      },
      { h: 'What the Quell label does cover' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The panel also says: {warnings}. The label doesn’t give directions for children, contact lenses or use with other drops, and it doesn’t mention cosmetic services. For anything outside the label, ask a pharmacist. Every section is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Signs your eyes need a doctor, not a drop' },
      {
        p: `Discomfort that lasts past the day of the appointment, swelling of the lids, discharge, pain or blurred vision that doesn’t clear with blinking should go to an eye doctor, who can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the details.`,
      },
    ],
    faq: [
      {
        q: 'How long after a brow tint can I use eye drops?',
        a: 'Quell’s label doesn’t set a waiting time for brow services. Make sure tint is off your lids and fingers, wash your hands, and ask a pharmacist if you want specific timing advice.',
      },
      {
        q: 'What should I do if brow tint gets in my eye?',
        a: 'Tell the salon, follow the product maker’s instructions, and call a pharmacist or eye doctor. Seek medical help for pain, light sensitivity or changes in vision.',
      },
      {
        q: 'Can eyebrow waxing make your eyes feel dry?',
        a: 'Tender skin can lead to squinting or rubbing, which leaves eyes feeling drier, and a heated or air-conditioned room adds to it. Discomfort that lasts should be checked by an eye doctor.',
      },
    ],
  },
  {
    slug: 'dry-eyes-swimming-indoor-pools-in-winter',
    title: 'Dry eyes for swimmers in indoor pools in winter',
    description:
      'Winter lap swimmers go from warm pool air to cold wind with wet faces. How goggles, locker room habits and the walk out help eyes that feel dry.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Winter swimmers often feel dry eyes less from the pool itself than from what surrounds it: chlorinated water during laps, hot dry air from locker room hair dryers, then cold wind on a damp face on the way to the car. Wear well-fitted goggles, dry your face before going outside, keep heater vents off your eyes on the drive, and use a lubricating drop as labeled.`,
      },
      { h: 'A winter swim, start to finish' },
      {
        p: `Think through a typical early-morning lap session in January. You leave a heated house, walk across a freezing parking lot, change in a warm locker room, then swim for 45 minutes with your face in chlorinated water. Afterward come a hot shower, a blow dryer, a heated car and, often, a full day at a screen. Each step pulls moisture from the eye’s surface in a different way, which is why swimmers can feel fine in the water and scratchy by midmorning.`,
      },
      { h: 'In the water: goggles do the most' },
      {
        list: [
          `Choose goggles that seal without pressing hard; a leak lets pool water sit against the eye for the whole set.`,
          `Adjust the strap and nose bridge before you start, not at the wall mid-workout.`,
          `If your goggles fog, use an anti-fog product made for them rather than rubbing the inside with a finger.`,
          `Rinse your goggles in fresh water after each swim and let them dry so they aren’t grimy next time.`,
        ],
      },
      {
        p: `Our guide on [dry eyes after swimming](/guides/dry-eyes-after-swimming) covers the pool side in more depth. In winter, the bigger changes come after you climb out.`,
      },
      { h: 'Locker rooms, showers and hair dryers' },
      {
        p: `A quick rinse of your face in the shower helps clear pool water from your lashes and lids. Keep your eyes closed under the spray, then pat your face dry with a clean towel. Wall-mounted dryers and hand-held blow dryers blast hot, dry air, and it’s easy to point one straight across your face while drying your hair. Aim the nozzle down and away, and keep your eyes closed when drying near your forehead.`,
      },
      { h: 'The walk to the car' },
      {
        p: `Stepping into winter air with wet hair and a damp face is uncomfortable for the whole body, and cold wind across the eye speeds evaporation from the tear film. Dry your face and hair as well as you can before leaving, pull a hat low, and wear glasses or sunglasses for the walk if it’s windy or bright off snow. Once you’re in the car, set the heat to the floor or windshield instead of blowing at your face, and give your eyes a few slow, complete blinks while the cabin warms up.`,
      },
      { h: 'Early sessions and screen days' },
      {
        p: `Many lap swimmers go before work, which means a day of screens follows a pool session. Screens slow blinking, so the eye surface spends more time exposed. Set your monitor a little below eye level, take short breaks to look across the room, and keep the office heater or vent from blowing on you. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers home and office.`,
      },
      { h: 'Where Quell fits for swimmers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. The label doesn’t say anything about swimming or goggles, so it doesn’t set a time before or after laps. Its directions read: {directions}. Many swimmers find it simplest to use a dose after they’ve showered and dried off rather than on the pool deck.`,
      },
      {
        list: [
          `Wash and dry your hands first; pool water and locker room surfaces aren’t clean.`,
          `Keep the tip off your eye, lashes and fingers. The label says: {tip}.`,
          `Store the bottle in your bag, not on a wet bench or in a cold car through the day. Storage, per the panel: {storage}.`,
          `If you wear contact lenses for swimming or after, ask your eye doctor; Quell’s label gives no contact-lens directions.`,
        ],
      },
      { h: 'Masters swimmers, lifeguards and swim parents' },
      {
        p: `People who spend hours on a pool deck, such as coaches, lifeguards and parents at winter meets, breathe the same air without getting in. Bleachers near the ceiling can be warm and stuffy, and the trip out to the parking lot is just as cold. Sunglasses for the drive home, a water-resistant pouch for your bottle, and screen breaks during long meet days all help.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Discomfort that fades within an hour of a swim is common. Eyes that hurt, stay irritated, become sensitive to light or blur after swimming need an eye doctor, who can find the cause and decide what to do. The label’s stop-use line: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) and the full panel on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after swimming in winter?',
        a: 'In winter the pool is only part of it. Hot locker room dryers, cold wind on a damp face and a heated car afterward all speed evaporation from the tear film.',
      },
      {
        q: 'Should I use eye drops before or after swimming laps?',
        a: 'Quell’s label doesn’t set a time around swimming. Many swimmers use their dose after showering and drying off, with clean hands, so pool water isn’t on their fingers or lashes.',
      },
      {
        q: 'Do swim goggles help dry eyes?',
        a: 'Goggles that seal well keep pool water off your eyes during laps. Rinse and dry them after each swim so they stay clean and comfortable.',
      },
    ],
  },
  {
    slug: 'how-to-put-in-eye-drops-with-long-nails',
    title: 'How to put in eye drops with long nails',
    description:
      'Long or acrylic nails make it hard to pull down a lid or squeeze a dropper. Grips and steps that keep nails away from your eye and the bottle tip.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `With long nails, use the pads of your fingers and your knuckles instead of your fingertips. Pull the lower lid down with the flat pad of a finger or a clean tissue, hold the bottle across your fingers so the nails point away from your eye, rest that hand on your forehead or cheek for control, and squeeze with the side of your thumb. Then follow the label: {directions}.`,
      },
      { h: 'Why nails get in the way' },
      {
        p: `Most eye drop instructions assume short nails: pinch the lid with a fingertip, hold the bottle near the tip, press with the pad of the thumb. Long natural nails, acrylics, gels and press-ons put a hard edge exactly where the eye is softest. They also make it tempting to hold the bottle by its tip or to press the lower lid with a nail edge. Neither is a good idea near the eye, and the first can contaminate the dropper. The label is specific about that: {tip}.`,
      },
      { h: 'Step by step' },
      {
        list: [
          `Wash your hands, including under the nails, and dry them well.`,
          `Check the bottle before you start: {doNotUse}.`,
          `Hold the bottle sideways across the middle segments of your fingers, with the tip pointing out past your index finger and your nails curled away from your face.`,
          `Tilt your head back, or lie down if that’s easier.`,
          `With your other hand, lay the flat pad of your index finger (not the nail) on your cheek just below the lower lid and draw the lid down gently to make a small pocket.`,
          `Rest the bottle hand on your forehead or the bridge of your nose so it’s steady.`,
          `Squeeze with the side of your thumb or the flat of a knuckle until one drop falls into the pocket.`,
          `Let go of the lid, close your eye gently, and recap the bottle.`,
        ],
      },
      { h: 'Grips that work with acrylics and gels' },
      {
        p: `People settle on different holds, and it’s worth trying a couple:`,
      },
      {
        list: [
          `The knuckle press: hold the bottle in a loose fist with the tip out past your thumb and squeeze by tightening your fist.`,
          `The two-hand hold: hold the bottle in one hand and press its side with a knuckle of the other.`,
          `The tissue lid-pull: fold a clean tissue over your fingertip and use it to draw the lower lid down, so no nail edge meets skin.`,
          `The cheek rest: plant the heel of your hand on your cheekbone and let the bottle hang above the eye from there.`,
        ],
      },
      {
        p: `If a squeeze sends out more than one drop, our guide to [how hard to squeeze an eye drop bottle](/guides/how-hard-to-squeeze-an-eye-drop-bottle) covers control. [Putting in eye drops lying down](/guides/is-it-better-to-put-eye-drops-in-lying-down) is another option when your hands feel clumsy.`,
      },
      { h: 'Keep nails away from the eye and the tip' },
      {
        p: `A nail can scratch the surface of the eye or the lid without much force. If your nails are very long, go slowly and keep them pointed away from your face the whole time. Clean under them before every dose: whatever sits under a nail can end up on the dropper if the two touch. Quell is preservative-free, so a clean tip matters.`,
      },
      { h: 'After a new set of nails' },
      {
        p: `The first few days with a new length are the clumsiest. Practice the grip in front of a mirror with the cap on before you need a dose. If you’re at a salon, wash your hands afterward before handling eye drops, since dust from filing and residue from products can sit on your fingers and around the nail. Wait until polish or gel has fully set and dried.`,
      },
      { h: 'If you still can’t manage it' },
      {
        p: `Some people find it easier to have someone else put in their drops for a while. Our guide on [putting eye drops in someone else’s eyes](/guides/how-to-put-eye-drops-in-someone-elses-eyes) walks a helper through it. If you flinch or blink as the drop falls, [putting in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) has tips.`,
      },
      { h: 'What the label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. For storage: {storage}. The label doesn’t give directions for contact lenses, children or use with other drops. If you scratch your eye with a nail, or your eye hurts or your vision changes afterward, stop and get it checked; the stop-use list says: {stopUse} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How do you pull down your eyelid with long nails?',
        a: 'Use the flat pad of a finger on your cheek just below the lid, or fold a clean tissue over your fingertip, and draw the lid down gently. Keep the nail edge pointed away from your eye.',
      },
      {
        q: 'Can acrylic nails scratch your eye when putting in drops?',
        a: 'Yes, a nail edge can scratch the eye or lid. Go slowly, keep nails pointed away from your face, and see an eye doctor if your eye hurts or your vision changes after a scratch.',
      },
      {
        q: 'How do you squeeze an eye drop bottle with long nails?',
        a: 'Hold the bottle across your fingers and press with the side of your thumb or a knuckle instead of a fingertip. A two-hand hold, pressing with the other hand’s knuckle, also works.',
      },
    ],
  },
  {
    slug: 'how-to-put-in-eye-drops-using-a-mirror',
    title: 'How to put in eye drops using a mirror',
    description:
      'A mirror helps you aim, but it flips everything. How to set one up, which way to look, and how to land one drop in the lower lid pocket.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `To put in eye drops with a mirror, set a mirror at eye level in good light, pull your lower lid down to make a small pocket, and use the reflection to bring the bottle tip above the pocket without touching it. Then look up slightly and squeeze one drop. Go slowly, since a mirror reverses left and right. Follow the label’s directions: {directions}.`,
      },
      { h: 'Why a mirror helps, and where it trips people up' },
      {
        p: `A mirror lets you see where the bottle tip is relative to your eye and lashes, which takes the guesswork out of aiming. The catch is that it reverses left and right, so moving your hand toward the mirror’s “left” feels backward at first. Most people adjust after a few tries. The other catch is that you can’t look up at the ceiling and watch the mirror at the same time, so you’ll use the mirror to line up, then shift your gaze for the drop itself.`,
      },
      { h: 'Setting up' },
      {
        list: [
          `Use a mirror at eye level: a bathroom mirror while standing, or a tabletop mirror while sitting.`,
          `Light your face from the front, not from behind you; a window or a lamp beside the mirror works.`,
          `A magnifying mirror can help if your near vision isn’t sharp, but keep it at its focal distance so the image is clear.`,
          `Clear the counter and put the cap somewhere clean, upside up.`,
          `Wash and dry your hands.`,
        ],
      },
      { h: 'Step by step with a mirror' },
      {
        list: [
          `Check the bottle first: {doNotUse}.`,
          `Stand or sit close enough to see your eye clearly in the mirror.`,
          `Tilt your head back a little while still keeping the mirror in view.`,
          `Pull the lower lid down gently with a clean finger to make a small pocket; you’ll see the pink inner lid in the reflection.`,
          `Bring the bottle up and watch the tip move into position above the pocket, about an inch away, not touching anything.`,
          `Rest your bottle hand on your forehead to keep it steady.`,
          `Shift your gaze upward, past the top of the mirror, and squeeze gently so one drop falls into the pocket.`,
          `Release the lid, close your eye softly for a moment, and recap the bottle.`,
        ],
      },
      { h: 'Getting used to the mirror image' },
      {
        p: `If you keep missing to one side, practice with the cap on. Bring the capped bottle into position over each eye a few times and watch how your hand moves in the reflection. Some people find it easier to angle the mirror slightly so they’re looking at their eye from below, which matches the head-back position. Others look at the mirror only to place the tip and then close the other eye so they aren’t distracted.`,
      },
      { h: 'Keep the tip off your eye' },
      {
        p: `The mirror makes it easy to see when the tip is too close. Keep a small gap between the tip and your lashes. The label is clear on this: {tip}. Quell is preservative-free, so a tip that touches an eyelash or the counter needs attention. Our guide to a [cap left off](/guides/left-the-cap-off-eye-drops) covers what to think about if the tip has touched something.`,
      },
      { h: 'How to do it without a mirror' },
      {
        p: `A mirror isn’t always available, and some people do better without one. Lie down on a bed with your head flat, or lean your head against a wall, and use the same lower-lid pocket. You can also rest the bottle hand’s knuckle on your nose or forehead to set the distance by feel. Our guides on [putting in drops lying down](/guides/is-it-better-to-put-eye-drops-in-lying-down) and [using eye drops with shaky hands](/guides/eye-drops-with-shaky-hands) have more options.`,
      },
      { h: 'Did the drop go in?' },
      {
        p: `In the mirror, you may see the drop land in the pocket or feel it as a cool spot. If it hit your cheek or lid instead, wipe it away and try once more. Quell has a distinctive look, and the panel says: {milky}. A trace on your lashes or lid can be a hint that the drop landed outside the eye.`,
      },
      { h: 'Label notes' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. The label gives no directions for contact lenses, children or use with other drops, so ask your eye doctor or pharmacist about those. If your eye hurts or your vision changes, stop: {stopUse} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why is it hard to put in eye drops while looking in a mirror?',
        a: 'A mirror reverses left and right, so hand movements feel backward at first, and you can’t look up and watch the reflection at the same time. Practice with the cap on to get used to it.',
      },
      {
        q: 'Should I look in the mirror or up when putting in eye drops?',
        a: 'Use the mirror to bring the tip into place above the lower lid pocket, then shift your gaze slightly upward and squeeze one drop.',
      },
      {
        q: 'Does a magnifying mirror help with eye drops?',
        a: 'It can if your near vision isn’t sharp. Hold it at the distance where the image is clear, and light your face from the front.',
      },
    ],
  },
  {
    slug: 'how-hard-to-squeeze-an-eye-drop-bottle',
    title: 'How hard should you squeeze an eye drop bottle?',
    description:
      'Gently. Steady, light pressure until a single drop forms and falls. How to hold the bottle, what to do if nothing comes out, and why more isn’t better.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Squeeze an eye drop bottle gently and steadily, just until one drop forms at the tip and falls. A hard, quick squeeze tends to push out a stream or two drops at once, and the extra simply runs out of the eye. Hold the bottle upside down above the lower lid pocket, press the sides lightly, and pause as soon as the drop lets go. Quell’s directions: {directions}.`,
      },
      { h: 'One drop is the goal' },
      {
        p: `The directions count drops, and the eye can only hold a small amount at once. When a second drop lands on top of the first, most of it spills over the lid and down the cheek. That isn’t harmful in itself, but it wastes product and means the bottle runs out sooner. Our guide on [what happens if you put too many eye drops in](/guides/too-many-eye-drops-at-once) explains where the extra goes. A light squeeze gives you control over that single drop.`,
      },
      { h: 'How to hold the bottle' },
      {
        list: [
          `Wash and dry your hands first.`,
          `Hold the bottle between your thumb and the first two fingers, pressing on the sides of the bottle rather than near the tip.`,
          `Turn it fully upside down, tip pointing straight down toward the eye, not at an angle.`,
          `Rest the edge of that hand on your forehead or the bridge of your nose so the bottle stays steady.`,
          `Keep the tip a short distance above the eye. The label says: {tip}.`,
        ],
      },
      { h: 'The squeeze itself, step by step' },
      {
        list: [
          `Tilt your head back and pull the lower lid down to make a small pocket.`,
          `Press the sides of the bottle slowly, as if testing a ripe piece of fruit.`,
          `Watch for the drop to bead at the tip; keep the same light pressure.`,
          `Stop pressing the moment the drop falls.`,
          `Ease off before you pull the bottle away, so a second drop doesn’t follow.`,
          `Close your eye gently and recap the bottle.`,
        ],
      },
      { h: 'If nothing comes out' },
      {
        p: `A drop that won’t form is usually about angle or patience. Make sure the bottle is pointing straight down and give the liquid a second to reach the tip before pressing harder. If it’s a brand-new bottle, check that the cap is off completely and that the seal was opened the way the packaging shows. Avoid poking the opening with a pin, needle or toothpick: it can damage the tip and carry germs into a preservative-free bottle. If a new bottle truly won’t dispense, call {phone} during {hours}; the store replaces damaged, incorrect or broken-seal orders within {returnDays} days.`,
      },
      { h: 'If too much comes out' },
      {
        p: `A burst of drops usually means you squeezed fast or pressed near the tip. Blot the overflow from your cheek with a clean tissue, keeping the tissue off the eye itself. Next time, press more slowly and move your fingers back toward the middle of the bottle. There’s no need to put in another drop to “make up” for a messy one if a drop clearly landed in the eye.`,
      },
      { h: 'When squeezing is hard for your hands' },
      {
        p: `Arthritis, weak grip or tremor can make a gentle, controlled squeeze tricky. Pressing with the pads of two fingers on opposite sides spreads the effort, and a two-handed grip, one hand steadying and one pressing, gives more control. Our guide to [using eye drops with shaky hands](/guides/eye-drops-with-shaky-hands) has more holds, and [putting in eye drops with long nails](/guides/how-to-put-in-eye-drops-with-long-nails) covers grips that use knuckles instead of fingertips.`,
      },
      { h: 'Quell’s bottle in particular' },
      {
        p: `Quell comes in a {size} bottle. The panel notes: {milky}. {appearance} Before each use, check the panel’s line: {doNotUse}. Store it as the label says: {storage}. Keeping the bottle in that range matters for more than comfort, so it doesn’t ride in a hot car or sit on a cold windowsill. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Common squeezing mistakes' },
      {
        list: [
          `Squeezing before the tip is lined up over the eye, so the drop lands on your cheek.`,
          `Pressing right next to the tip, which makes the flow hard to control.`,
          `Holding the bottle at a slant, which lets drops run down the side.`,
          `Pulling the bottle away while still pressing, which drips a second drop on your lashes.`,
          `Touching the tip to the lashes to “feel” the distance.`,
        ],
      },
      { h: 'When to ask for help' },
      {
        p: `If you can’t get the hang of it, a pharmacist can show you in person. If your eye hurts, stays irritated or your vision changes after using drops, stop and see an eye doctor; the label’s stop-use line reads: {stopUse} Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do two drops come out when I squeeze my eye drops?',
        a: 'Usually the squeeze was quick or close to the tip, or the bottle kept being pressed as it was pulled away. Press slowly on the sides of the bottle and ease off as soon as one drop falls.',
      },
      {
        q: 'Why won’t my eye drop bottle drip?',
        a: 'Check that the bottle is pointing straight down, the cap is fully off and the seal is opened as the packaging shows, then give it a moment. Don’t poke the tip; call the seller if a new bottle won’t dispense.',
      },
      {
        q: 'Is it bad to squeeze an eye drop bottle hard?',
        a: 'It isn’t dangerous, but a hard squeeze usually sends out more than one drop, and the extra runs out of the eye. Gentle, steady pressure gives you control.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-someone-who-works-from-home',
    title: 'Christmas gifts for someone who works from home',
    description:
      'Gift ideas for people who work from home: better light, screen setup, air at the desk, and small comforts for eyes that spend the day on a monitor.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Good Christmas gifts for someone who works from home improve the hours they spend at a desk: a monitor stand or arm, a soft desk lamp, a small humidifier, a comfortable chair cushion, or a lubricating eye drop like Quell for eyes that feel dry after long screen days. Pick something that fixes a problem you’ve actually heard them mention, and ship it straight to their door.`,
      },
      { h: 'Start with what their day looks like' },
      {
        p: `Home offices range from a dedicated room to a corner of the kitchen table. Before you shop, think about what you’ve seen on video calls or heard in passing. Do they squint at a laptop screen? Complain about the heater blowing on them? Work in a dim spare room? Rub their eyes by late afternoon? The most welcome gifts answer a complaint like that, rather than adding another gadget to the desk.`,
      },
      { h: 'Gifts that raise the screen or improve the light' },
      {
        list: [
          `A laptop stand or monitor arm, so the screen sits at a comfortable height and distance instead of flat on the table.`,
          `An external monitor for someone still working on a small laptop screen for hours on end.`,
          `A desk lamp with adjustable brightness, placed to the side so it lights the desk without glaring off the screen.`,
          `Light-filtering curtains or a shade for a window that throws glare across the monitor in the afternoon.`,
          `A document holder that sits beside the screen, so papers are at the same height and distance.`,
        ],
      },
      {
        p: `Screen setup affects blinking, too. When the top of the screen sits a little below eye level, the lids cover more of the eye, which leaves less of the surface exposed to dry air. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'Gifts for the air around the desk' },
      {
        p: `Working from home in winter often means sitting near a heating vent or a space heater for hours. Dry, moving air across the face speeds evaporation from the tear film. A small desk or room humidifier, a vent deflector that redirects a floor or ceiling register, or a quiet heater that warms the feet instead of the face can make a real difference. If you buy a humidifier, add a note to clean it as its maker directs.`,
      },
      { h: 'Small comforts that get used' },
      {
        list: [
          `A soft eye mask for screen breaks or for sleeping in on the weekend.`,
          `A timer or an app subscription they already wanted, to make breaks easier to remember.`,
          `A good mug that keeps coffee warm through a long meeting.`,
          `A throw blanket or foot warmer, so the thermostat can stay a little lower.`,
          `A plant for the desk, if they like caring for one.`,
        ],
      },
      { h: 'Is a bottle of eye drops a thoughtful gift?' },
      {
        p: `It can be, if they’ve mentioned dry or uncomfortable eyes. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label gives the Uses as: {uses}. Pair it with something from the lists above so the gift reads as care, not a comment. The directions on the panel are: {directions}. The label doesn’t give directions for contact lenses, so a contact lens wearer should check with their eye doctor first. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Shipping a gift to a home office' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, so you can send it directly to them and use your own card and billing address. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which works well if you’re splitting a gift between a couple of people at the same address. Christmas falls on a Friday this year, December 25, 2026, and no delivery date is promised, so order well ahead. An unopened bottle can be refunded within {returnDays} days of delivery by calling {phone}, and nothing has to be sent back.`,
      },
      { h: 'A gift of time away from the screen' },
      {
        p: `Sometimes the most useful present for a remote worker gets them out of the chair: tickets to something on a weekend afternoon, a standing lunch date, or an invitation for a walk once a week. Breaks away from the screen give the eyes a rest as well as the back. For more on the work itself, see our guide to [dry eyes for remote workers](/guides/dry-eyes-for-remote-workers), and for a colleague you see on screen every day, [gifts for a coworker who works on screens](/guides/gifts-for-a-coworker-who-works-on-screens).`,
      },
      { h: 'When eyes need more than a gift' },
      {
        p: `If they mention eye pain, blurry vision that doesn’t clear, or dryness that never lets up, nudge them toward an eye doctor, who can find the cause and decide what to do. Quell’s label says: {stopUse} More gift ideas are under [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you get someone who works from home for Christmas?',
        a: 'Something that improves their desk hours: a laptop stand or monitor arm, a side-placed desk lamp, a small humidifier, a foot warmer, or eye drops if they’ve mentioned dry eyes.',
      },
      {
        q: 'Are eye drops a good gift for someone who works from home?',
        a: 'They can be if the person has mentioned dry or uncomfortable eyes after screen days. Pair them with a desk gift so the present feels thoughtful, and let contact lens wearers check with their eye doctor.',
      },
      {
        q: 'Can I send a Christmas gift of Quell straight to someone’s home?',
        a: 'Yes. Enter their address as the shipping address and pay with your own card. Quell ships to US addresses only and doesn’t promise a delivery date, so order early.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-woodworker',
    title: 'Christmas gifts for a woodworker',
    description:
      'Gifts woodworkers use: better shop light, dust control, comfortable eye protection, hand care, and a bottle of eye drops kept in the house, not the shop.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Good Christmas gifts for a woodworker are things that make long shop hours easier: brighter task lighting, dust collection upgrades, comfortable safety glasses they’ll actually keep on, a good hand cream, and shop organization. If they come in from the garage rubbing their eyes, a lubricating eye drop like Quell is a thoughtful extra, kept in the house rather than out in the cold or hot shop.`,
      },
      { h: 'Ask before you buy tools' },
      {
        p: `Woodworkers tend to be particular about their tools: brand, size, the exact chisel width. Unless you know precisely what they want, a gift card to their usual supplier beats guessing. The ideas below avoid that problem by focusing on the shop around the tools: light, air, comfort and protection, which serious and weekend woodworkers alike can use.`,
      },
      { h: 'Light for the bench' },
      {
        list: [
          `A bright, adjustable task lamp that clamps to the bench and puts light right on the work.`,
          `Overhead shop lights to replace a single dim bulb in a garage.`,
          `A headlamp for working inside cabinets and under tables.`,
          `A magnifying lamp for fine joinery, carving or inlay.`,
        ],
      },
      {
        p: `Good light means less squinting and leaning in, and less staring at a single spot for minutes without blinking. That’s a small comfort over a long Saturday in the shop.`,
      },
      { h: 'Dust control' },
      {
        p: `Sanding and cutting fill the air with fine dust that settles on everything, including the face. Gifts that cut down the dust are welcome in nearly any shop: dust collection fittings or hoses for their existing system, an air filtration unit that hangs from the ceiling, a shop vacuum attachment set, or a comfortable dust mask or respirator they’ll choose to wear. Our guide to [dry eyes for woodworkers](/guides/dry-eyes-for-woodworkers) talks about dust and the eyes in more detail.`,
      },
      { h: 'Eye and face protection they’ll keep on' },
      {
        p: `Many woodworkers own safety glasses that pinch, fog or slide, so they pull them off. A pair that fits well is a gift they’ll notice. Look at wraparound styles that block dust from the sides, anti-fog lenses, or over-glasses designs for people who wear prescription frames. A full face shield for the lathe is another idea. Let them pick if they have strong preferences, and include a gift receipt.`,
      },
      { h: 'Comfort in a cold or hot shop' },
      {
        list: [
          `A heater made for workshops, placed so it warms the body and doesn’t blow across the face.`,
          `A fan for summer that moves air around the shop rather than straight at them.`,
          `An anti-fatigue mat for long stretches at the bench.`,
          `Work gloves and a heavy-duty hand cleaner and cream for dry, cracked winter hands.`,
          `A shop apron with pockets for pencils, rules and a small notebook.`,
        ],
      },
      { h: 'Where eye drops fit in' },
      {
        p: `If the woodworker in your life mentions dry, gritty-feeling eyes at the end of a shop day, a bottle of Quell could be part of the gift. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Two label lines matter in a workshop. Storage: {storage}. Unheated garages in winter and closed shops in summer can fall outside that range, so the bottle belongs in the house or a jacket pocket. And the panel says: {tip}. Sawdust on a bench is exactly the kind of surface to keep the tip away from.`,
      },
      {
        p: `Eye drops are not for getting debris out of an eye, and Quell’s label doesn’t describe that use. Wood chips, splinters or dust that won’t blink out, or an eye that hurts after something hits it, should be seen by an eye doctor or urgent care right away. The label’s stop-use line is: {stopUse}`,
      },
      { h: 'Ordering a gift' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a shop or business address if the recipient prefers that. Shipping is {shipping}, and {freeBottles} or more bottles ship free, handy if you’re buying for a woodworking group or a couple of relatives. Christmas is Friday, December 25, 2026; no delivery date is promised, so order early. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'More gift guides' },
      {
        p: `For people who work with their hands, try [Christmas gifts for a mechanic](/guides/christmas-gifts-for-a-mechanic), and for crafters who do close work, [Christmas gifts for a knitter or quilter](/guides/christmas-gifts-for-a-knitter-or-quilter). Everything else is under [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do woodworkers want for Christmas?',
        a: 'Things that make shop time easier: bright task lighting, dust collection fittings or an air filter, comfortable safety glasses, an anti-fatigue mat, or a gift card if you don’t know their exact tools.',
      },
      {
        q: 'Are eye drops a good gift for a woodworker?',
        a: 'They can be if the person mentions dry eyes after shop days, paired with a shop gift. Keep them in the house, since a cold or hot shop can fall outside the label’s storage range.',
      },
      {
        q: 'Can you use eye drops to get sawdust out of your eye?',
        a: 'Quell’s label doesn’t describe that use. Dust or chips that won’t blink out, or an eye that hurts after something hits it, should be seen by an eye doctor or urgent care.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-musician',
    title: 'Christmas gifts for a musician',
    description:
      'Gift ideas musicians will use: stand lights, gig bag organizers, room and instrument humidifiers, and small comforts for eyes under stage lights.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Thoughtful Christmas gifts for a musician support the hours around the music: a good stand light, a gig bag organizer, a room humidifier for winter practice, a comfortable stool, or lessons and tickets. For someone who reads charts under hot stage lights or plays late gigs in dry winter rooms, a lubricating eye drop like Quell tucked into a stocking can be a practical extra.`,
      },
      { h: 'What a musician’s week can look like' },
      {
        p: `Many musicians juggle rehearsals, lessons, gigs, church services and studio time, often with a day job on top. That can mean reading music in dim rooms, staring at a tablet full of charts, sitting under hot lights, and driving home late. Holiday season is often their busiest stretch of the year, with concerts, parties and services stacked into December. Gifts that make that schedule easier get used.`,
      },
      { h: 'Gifts for reading music' },
      {
        list: [
          `A clip-on stand light with adjustable brightness, so charts are easy to read in dark venues.`,
          `A tablet stand or a page-turning pedal for someone who reads music on a screen.`,
          `Large-print or spiral-bound editions of music they play often.`,
          `Reading glasses set at music-stand distance, if they’ve mentioned struggling with it (they’ll need their own eye exam for a prescription pair).`,
        ],
      },
      {
        p: `Reading in poor light means squinting and fewer blinks, which leaves the eyes feeling dry by the end of a long rehearsal. Better light and larger print take some of that strain away.`,
      },
      { h: 'Gifts for winter air and instruments' },
      {
        p: `Winter heat dries out practice rooms, and many instruments, especially wooden ones, are affected by dry air too. A room humidifier for the practice space is a gift both the musician and the instrument benefit from. Instrument humidifiers made for guitars, violins and other wooden instruments are another idea; check which type suits their instrument. A small hygrometer that shows the room’s humidity rounds out the gift.`,
      },
      { h: 'Gig bag and travel gifts' },
      {
        list: [
          `A gig bag organizer or accessory pouch for cables, picks, reeds, rosin or mutes.`,
          `A small, bright flashlight for dark stages and load-ins.`,
          `Musician’s earplugs, if they don’t already have a pair they like.`,
          `An insulated bottle or mug for long rehearsal nights.`,
          `A comfortable, adjustable stool or a padded bench cushion.`,
        ],
      },
      { h: 'Stage lights, smoke and long nights' },
      {
        p: `Stage lights throw heat, and haze machines and fog are common at concerts. Fans and air conditioning in venues move a lot of air across the stage. Add a late-night drive with the heater running, and a musician can come home with eyes that feel dry and gritty. Our guide to [dry eyes for musicians and stage performers](/guides/dry-eyes-for-musicians-and-performers) covers the working side of it in detail.`,
      },
      { h: 'Is Quell a good stocking stuffer for a musician?' },
      {
        p: `If they’ve mentioned dry eyes, it can be. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label gives its Uses as: {uses}. The directions say: {directions}. For a gig bag, one line on the panel is worth passing on: {storage}. A bag left in a van through a winter night, or in a hot car in summer, can fall outside that range, so the bottle should come inside with them. Use it before a performance rather than mid-song. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Church musicians and choir directors' },
      {
        p: `Church pianists, organ players and choir directors often play more services in December than in any other month, sometimes several on Christmas Eve alone. Many sanctuaries are dim in the balcony or loft, and heating systems run hard for evening services. A focused lamp for the console, a cushion for the bench, or a gift card for a meal between services can make a long week easier. A thank-you note from the congregation goes a long way, too.`,
      },
      { h: 'Experiences instead of things' },
      {
        p: `Musicians often value time and learning over gear. A block of lessons with a teacher they admire, studio time, a workshop, tickets to see an artist they love, or an offer to help haul equipment to a December gig can mean more than another accessory.`,
      },
      { h: 'Ordering and timing' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Shipping is {shipping}, and {freeBottles} or more bottles ship free, which works if you’re buying for several members of a band or choir. Christmas is on Friday, December 25, 2026, and no delivery date is promised, so order early. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back.`,
      },
      { h: 'When dry eyes need a doctor' },
      {
        p: `If a musician mentions eye pain, light sensitivity under stage lights that doesn’t ease, or vision that changes, encourage an eye exam; an eye doctor can find the cause and decide what to do. The label’s stop-use line: {stopUse} For more ideas, browse [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a musician?',
        a: 'Something that supports their playing life: a clip-on stand light, a gig bag organizer, a humidifier for the practice room or instrument, musician’s earplugs, or lessons and tickets.',
      },
      {
        q: 'Why do musicians get dry eyes on stage?',
        a: 'Hot stage lights, haze or fog, fans and air conditioning all move dry air across the face, and reading charts in dim light reduces blinking.',
      },
      {
        q: 'Can musicians keep eye drops in a gig bag?',
        a: 'Yes, as long as the bag comes inside with them. Quell’s label gives a storage range, and a van or car left out in winter or summer can fall outside it.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-an-engineer',
    title: 'Christmas gifts for an engineer',
    description:
      'Gift ideas for engineers who split time between screens and job sites: monitor setups, good light, site-day sunglasses, and comfort for tired-feeling eyes.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Good Christmas gifts for an engineer fit how they actually work: a monitor arm or second screen for long design days, a quality desk lamp, wraparound sunglasses for site visits, a sturdy notebook and pens, or a well-made tool they’ve mentioned. If they come home with eyes that feel dry after hours of drawings and spreadsheets, a lubricating eye drop like Quell is a practical stocking stuffer.`,
      },
      { h: 'Engineers work in very different places' },
      {
        p: `“Engineer” covers a lot of jobs. A civil engineer might split the week between a desk and a muddy construction site. A software or electrical engineer may spend almost every hour on screens. Mechanical and manufacturing engineers walk plant floors. Field engineers drive long distances between sites. Before buying, think about where your engineer spends most of their day, and choose for that setting.`,
      },
      { h: 'For the desk-heavy engineer' },
      {
        list: [
          `A monitor arm that lets them set screen height and distance precisely.`,
          `A second monitor, if they’re still flipping between windows on one screen.`,
          `A desk lamp with adjustable color and brightness, positioned to the side to avoid screen glare.`,
          `A quality keyboard or mouse they’ve been eyeing.`,
          `A small humidifier for an office that runs dry in winter.`,
        ],
      },
      {
        p: `Long sessions of close focus slow blinking, and the eye surface dries a bit between each blink. Placing the top of the monitor slightly below eye level and taking short breaks to look across the room both help. Our guide on [eye drops for computer users](/guides/eye-drops-for-computer-users) has more on screen days.`,
      },
      { h: 'For the engineer who goes out on site' },
      {
        list: [
          `Wraparound sunglasses for site walks; they block wind, dust and glare together.`,
          `A weatherproof field notebook and pens that write in cold or damp conditions.`,
          `Insulated, waterproof boots or warm socks for winter site visits.`,
          `A good thermos for long days between sites.`,
          `A headlamp or compact flashlight for inspections in dark spaces.`,
        ],
      },
      {
        p: `If their employer supplies required safety gear, let them handle that themselves; a gift doesn’t need to replace it. Comfortable extras for the drive and the walk are easier wins.`,
      },
      { h: 'For the engineer on a plant floor' },
      {
        p: `Manufacturing and process engineers spend part of the day on production floors and part at a desk reviewing data. Floors can be loud, brightly lit and warm in one area, drafty near loading doors in another. Comfortable work shoes with good insoles, a small clipboard or rugged tablet case, and a jacket that layers easily over work clothes are practical choices. Back at the desk, the same screen and lighting gifts apply.`,
      },
      { h: 'Gifts that feed curiosity' },
      {
        p: `Many engineers love knowing how things work. A book about a big infrastructure project, a model kit, a puzzle that takes days, a museum membership, or tickets to a science center lecture all fit. If they read a lot on screens, a paper book is a pleasant break for the eyes as well as the mind.`,
      },
      { h: 'Is Quell a good gift for an engineer?' },
      {
        p: `For someone who mentions dry, tired-feeling eyes after long screen days or windy site visits, yes. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions read: {directions}. One practical point for a field engineer: the label’s storage line reads: {storage}. A truck cab in summer or winter can fall outside that, so the bottle should ride in a jacket or bag that comes inside. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Grit or metal shavings in the eye are a different matter. Eye drops are not for flushing debris, and Quell’s label doesn’t describe that use. Anything that won’t blink out, or an eye that hurts after something hit it, needs an eye doctor or urgent care.`,
      },
      { h: 'Ordering a gift of Quell' },
      {
        p: `We ship from Brentwood, Tennessee, to any US address. Pay with your card and send it straight to them. Shipping is {shipping}, and {freeBottles} or more bottles ship free, which is easy to reach if you’re buying for a whole engineering team. Christmas is on Friday, December 25, 2026; no delivery date is promised, so order early. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
      { h: 'When an eye doctor should see them' },
      {
        p: `Persistent dryness, eye pain or vision that changes needs a professional; an eye doctor can find the cause and decide what to do. Quell’s label says: {stopUse} For other people who spend most of the workday on screens, see [Christmas gifts for a software developer](/guides/christmas-gifts-for-a-software-developer), or browse all of [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you get an engineer for Christmas?',
        a: 'Match the gift to where they work: a monitor arm, desk lamp or keyboard for desk days, or wraparound sunglasses, a field notebook and a thermos for site visits. Books and puzzles suit curious minds.',
      },
      {
        q: 'Are eye drops a good gift for an engineer who works on screens?',
        a: 'They can be if the engineer mentions dry eyes after long screen days. Pair them with something for the desk, and keep the bottle within the label’s storage range.',
      },
      {
        q: 'What should I get a civil engineer who goes to job sites?',
        a: 'Comfortable site-day extras: wraparound sunglasses, a weatherproof notebook and pens, warm waterproof boots or socks, and a good thermos. Leave required safety gear to their employer.',
      },
    ],
  },
]
