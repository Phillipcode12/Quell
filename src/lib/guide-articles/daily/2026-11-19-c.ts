import type { Guide } from '@/lib/guide-types'
export const DAILY_20261119_C: Guide[] = [
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-napa-ca:
   * - NOAA 1991-2020 monthly normals through ACIS (data.rcc-acis.org StnData, sid APC),
   *   saved at .daily-job/acis1119/APC.json and .daily-job/c/mint_APC.json
   *   (NAPA COUNTY AIRPORT, elev 16 ft: annual precip 20.23 in; Jan 4.17, Feb 3.95,
   *   Mar 3.01, Nov 1.97, Dec 3.82 (Nov-Mar 16.92); Jun 0.22, Jul 0.01, Aug 0.02,
   *   Sep 0.07 (Jun-Sep 0.32); Sep high 80.3 F, Aug 80.0, Jul 78.7; Jan high 56.9;
   *   Sep low 51.0; Dec low 37.6, Jan 38.2; snowfall M, not used)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-napa-ca',
    title: 'Dry eye relief in Napa, California',
    description:
      'Napa’s summers bring almost no rain and 80-degree afternoons, then heaters run all winter. NOAA’s numbers for Napa and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Napa comes down to two seasons. NOAA’s normals for Napa County Airport show almost no rain from June through September and afternoons near 80°F, while about 17 of the year’s 20 inches fall from November through March, when heaters run indoors. Keep wind and vents off your eyes, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'How much rain does Napa get?' },
      {
        p: `NOAA’s 1991–2020 climate normals for Napa County Airport, as published through the National Weather Service’s NOWData, put a normal year at 20.23 inches of precipitation. The airport sits south of the city at about 16 feet, near the marshes where the Napa River reaches San Pablo Bay, so its numbers describe the bay end of the valley. Yountville, St. Helena and Calistoga, farther up Highway 29, can run differently.`,
      },
      {
        list: [
          `January is the wettest month at 4.17 inches, followed by February (3.95) and December (3.82).`,
          `July normally records 0.01 inch and August 0.02. June through September together come to about a third of an inch.`,
          `Normal highs peak in September at 80.3°F, a touch above August (80.0°F) and July (78.7°F).`,
          `December has the coldest normal low, 37.6°F, with January close behind at 38.2°F.`,
        ],
      },
      { h: 'A dry season with almost no rain' },
      {
        p: `At the south end of the valley, a normal summer goes months without meaningful rain. Dust from dirt vineyard roads, dry grass on the hills above the Silverado Trail and grit thrown up by tractors and trucks hangs around, because nothing washes it out of the air until fall. A tear film that’s already thinning in warm afternoon air has less to work with when a speck lands on it.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the Napa Valley Vine Trail or a walk through the rows; they cut breeze and grit together.`,
          `Wash dust off your face and lids with clean water after a day outside, and keep your hands away from your eyes until they’re washed.`,
          `Point the car’s vents at your chest on Highway 29, not at your face.`,
          `Keep a spare pair of sunglasses in the glove box for the late-afternoon drive west.`,
        ],
      },
      { h: 'Cool mornings, warm afternoons' },
      {
        p: `The daily swing is wide here. In September, the normal low is 51.0°F and the normal high 80.3°F, a difference of about 29 degrees between dawn and mid-afternoon. That calm, cool start is why the valley’s hot-air balloon rides launch at first light, and the warm finish is why one day can begin in a jacket and end with the car’s air conditioning on high. Each move, from cool morning air to a heated car to an air-conditioned tasting room, changes how quickly the tear film evaporates. Dress in layers instead of leaning on the heater or the AC, and give your eyes a few slow, complete blinks after each change of room.`,
      },
      { h: 'Tasting rooms, kitchens and long shifts' },
      {
        p: `Napa’s working life runs on hospitality. Pourers spend hours under bright lights, line cooks stand beside grills and ovens, and hotel staff go from hot laundry rooms to cool lobbies. Harvest adds long days outside in the driest stretch of the year. Hot, dry kitchen air and a fan or vent blowing across the face both speed evaporation. [Dry eyes for line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs) and [dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace) take those settings one at a time.`,
      },
      { h: 'Commuting toward the Bay Area' },
      {
        p: `Plenty of Napa residents drive south toward Vallejo or west on Highway 12 and 121 toward Sonoma and the rest of the Bay Area. A long drive means a fixed stare at the road, fewer blinks and, for much of the year, air conditioning aimed somewhere near your face.`,
      },
      {
        list: [
          `Set the vents to the floor or the windshield and angle the dash vents away from your eyes.`,
          `Use recirculate on dusty days, and fresh air when the cabin starts to feel stuffy.`,
          `At a stoplight, close your eyes for a couple of seconds and then blink fully a few times.`,
          `Don’t put drops in while you’re driving; wait until you’re parked.`,
        ],
      },
      { h: 'Winter: rain outside, heaters inside' },
      {
        p: `November through March brings almost all of Napa’s rain, close to 17 of the year’s 20 inches. The outdoor air feels damp then, yet the house is heated, and warming cool air without adding moisture lowers its relative humidity. Wall heaters, space heaters and forced-air vents all push that warm, dry air across a room. Move your chair out of the airflow, turn the thermostat down at night and think about a humidifier for the bedroom. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers what to look for.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. Its directions read: {directions}. Read this caution before opening a bottle: {warnings}. The panel also says to keep the dropper clean: {tip}.`,
      },
      {
        p: `For storage, the panel says: {storage}. A car parked at a winery on a September afternoon can get hotter than that, so carry the bottle in a bag that comes inside with you. Under Do not use, the panel says: {doNotUse}. The drops start out milky brown, so judge any change against that. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Napa' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Napa, American Canyon, Yountville and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so reorder before the last bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Napa page](/eye-drops/napa-ca) and the [California page](/eye-drops/state/california) have local details, or you can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for everyday dryness. The label says when to stop: {stopUse} Pain, a change in vision, or dryness that keeps coming back after you’ve dealt with the obvious triggers belongs with an optometrist or ophthalmologist, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the ones not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Does it rain in Napa in the summer?',
        a: 'Very little. NOAA’s 1991–2020 normals for Napa County Airport list 0.22 inch in June, 0.01 in July, 0.02 in August and 0.07 in September, about a third of an inch across all four months.',
      },
      {
        q: 'What is the hottest month in Napa?',
        a: 'September, by a small margin. The normal high at Napa County Airport is 80.3°F in September, against 80.0°F in August and 78.7°F in July, in NOAA’s 1991–2020 climate normals.',
      },
      {
        q: 'Why do my eyes get dry wine tasting in Napa?',
        a: 'Dry-season afternoons are warm and rainless, vineyard roads are dusty, and tasting rooms run air conditioning, so the tear film loses water on both sides of the door. Sunglasses outside and a seat away from the vents inside both help.',
      },
      {
        q: 'Does Quell ship to Napa, CA?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Napa and the rest of Napa County, with tracking by email and no promised delivery date.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-champaign-il:
   * - NOAA 1991-2020 monthly normals through ACIS (sid CMI), saved at
   *   .daily-job/acis1119/CMI.json and .daily-job/c/mint_CMI.json
   *   (CHAMPAIGN URBANA WILLARD AP, elev 743 ft: annual precip 36.97 in; May 4.39,
   *   Jun 4.35, Feb 1.80; Jan high 34.1 F, low 17.9; Feb low 21.7; Mar low 31.1;
   *   Dec low 23.6; Nov low 32.2; Jul high 85.0, low 64.4; Aug high 83.5; snowfall M)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-champaign-il',
    title: 'Dry eye relief in Champaign, Illinois',
    description:
      'Champaign’s January lows average 17.9°F, so furnaces run for months, and prairie wind never stops. NOAA’s numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Champaign means getting through a long heating season and a windy, open landscape. NOAA’s normals for Willard Airport put January’s high at 34.1°F and its low at 17.9°F, and lows stay below freezing from December through March. Keep vents and wind off your eyes, take real breaks from screens, use a lubricating drop as its label directs, and see an eye doctor if the dryness doesn’t settle.`,
      },
      { h: 'Champaign’s weather in NOAA’s records' },
      {
        p: `NOAA’s 1991–2020 climate normals for University of Illinois Willard Airport, published through the National Weather Service’s NOWData, describe a four-season prairie climate. The airport sits at about 743 feet near Savoy, a few miles southwest of downtown Champaign, surrounded by flat farmland.`,
      },
      {
        list: [
          `About 36.97 inches of precipitation falls in a normal year.`,
          `May (4.39 inches) and June (4.35) are the wettest months; February (1.80) is the driest.`,
          `January’s normal high is 34.1°F and its normal low 17.9°F.`,
          `July’s normal high is 85.0°F, with a normal low of 64.4°F.`,
          `Normal lows sit below freezing in December (23.6°F), January, February (21.7°F) and March (31.1°F).`,
        ],
      },
      { h: 'Why winter is the hard season' },
      {
        p: `Four months of below-freezing normal lows means furnaces and boilers carry the house from late fall into spring. Cold air holds very little water, and heating it without adding moisture drops its relative humidity, so a dorm room, apartment or office can feel parched on a gray, snowy day. Radiators in older campus buildings and forced-air vents in newer ones do the same thing to the air.`,
      },
      {
        list: [
          `Keep the thermostat a few degrees lower, especially at night.`,
          `Turn the desk or the bed so a vent or radiator isn’t blowing warm air across your face.`,
          `Run a small humidifier in the bedroom and clean it the way its maker directs.`,
          `Pull a scarf or neck gaiter up for the walk across the Quad when the wind picks up.`,
        ],
      },
      {
        p: `[Dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) has more for older buildings with steam or hot-water heat.`,
      },
      { h: 'Wind across open farmland' },
      {
        p: `Champaign-Urbana is ringed by corn and soybean fields with few trees to break the wind. NOAA’s wind table doesn’t include this station, so there’s no figure to quote, but anyone who has waited for a bus on a January morning knows what a crosswind does to the eyes. Moving air pulls water off the eye’s surface faster, and stinging or watering in the wind is a common result. Wraparound glasses or a hat brim help, and so does ducking inside for a few slow, complete blinks.`,
      },
      { h: 'Libraries, labs and finals week' },
      {
        p: `The University of Illinois puts a lot of people in front of screens: students in the libraries, staff in offices, engineers and researchers at the Research Park. Fall finals land in December, deep in heating season. People blink less while they concentrate on a screen, and dry, heated air takes water from the tear film faster between blinks. The combination is why exam weeks are often when dry eyes get noticed.`,
      },
      {
        list: [
          `Every 20 minutes or so, look at something across the room for a few seconds.`,
          `Set the monitor slightly below eye level, so your eyes aren’t opened as wide.`,
          `Finish each blink; half-blinks leave the lower part of the eye uncovered.`,
          `Get up between chapters or problem sets, even for a minute.`,
        ],
      },
      {
        p: `[Dry eyes while studying for exams](/guides/dry-eyes-while-studying) and [screens and your tear film](/guides/screens-and-your-tear-film) go further.`,
      },
      { h: 'Summer: humid outside, cold air inside' },
      {
        p: `July and August highs in the mid-80s and the year’s wettest weeks in May and June make central Illinois summers sticky. Inside, though, air conditioning pulls moisture out as it cools, and a car vent blowing at your face on I-57 or I-74 has the same effect as a winter heater. Football Saturdays at Memorial Stadium begin while it’s still warm, with hours of sun and wind in the stands, so sunglasses and a cap are worth packing along with the tickets.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, as printed on the Drug Facts panel: {uses}. Directions: {directions}. The panel’s caution reads: {warnings}. It also says: {tip}.`,
      },
      {
        p: `Storage, from the panel: {storage}. A bottle left in a car through a January night falls below that range, so keep it in a coat pocket or bring it inside. The full panel is on the [Drug Facts page](/drug-facts), and the label doesn’t give directions for contact lenses or for use with other drops; ask your eye doctor or pharmacist about either.`,
      },
      { h: 'Ordering Quell in Champaign-Urbana' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Champaign, Urbana, Savoy, Mahomet and every other US address. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. For a residence hall address, read [shipping eye drops to a college dorm](/guides/shipping-eye-drops-to-a-college-dorm) first. The [Champaign page](/eye-drops/champaign-il) and the [Illinois page](/eye-drops/state/illinois) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If drops and changes at home aren’t enough, the next step is an eye exam. The label puts it this way: {stopUse} An optometrist or ophthalmologist can find what’s behind the dryness and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Champaign get in winter?',
        a: 'NOAA’s 1991–2020 normals for Willard Airport put January’s normal low at 17.9°F and its normal high at 34.1°F. Normal lows stay below freezing from December through March.',
      },
      {
        q: 'How hot does Champaign get in July?',
        a: 'July’s normal high at Willard Airport is 85.0°F, with a normal low of 64.4°F, in NOAA’s 1991–2020 normals. August runs slightly cooler, with a normal high of 83.5°F.',
      },
      {
        q: 'What is the wettest month in Champaign, Illinois?',
        a: 'May, at 4.39 inches in NOAA’s 1991–2020 normals for Willard Airport, with June close behind at 4.35 inches. February is the driest month at 1.80 inches.',
      },
      {
        q: 'Does Quell ship to Champaign-Urbana?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Champaign, Urbana and every other US address, with email tracking. No delivery date is promised, so order before you run out.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-conroe-tx:
   * - NOAA 1991-2020 monthly normals through ACIS (sid CXO), saved at
   *   .daily-job/acis1119/CXO.json and .daily-job/c/mint_CXO.json
   *   (CONROE MONTGOMERY COUNTY AP, elev 228 ft: annual precip 47.65 in; Oct 5.52,
   *   Nov 5.13, May 4.79, Feb 2.94; Jun high 91.3 F, Jul 93.6, Aug 94.5, Sep 89.6;
   *   Jan high 62.3, low 39.3; Dec low 40.9; snowfall M)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-conroe-tx',
    title: 'Dry eye relief in Conroe, Texas',
    description:
      'Conroe’s August highs average 94.5°F, so air conditioning runs for months, and Lake Conroe adds sun and wind. NOAA’s numbers and dry eye tips.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Conroe is mostly about air conditioning, sun and wind on the water. NOAA’s normals for the county airport show highs above 90°F from June through August, so homes, cars and offices run cold air for months, and Lake Conroe adds glare and breeze. Aim vents away from your face, wear sunglasses on the lake, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Conroe’s climate in NOAA’s records' },
      {
        p: `NOAA’s 1991–2020 climate normals for Conroe-North Houston Regional Airport, the Montgomery County airport just outside the city at about 228 feet, give the numbers below. They’re the same normals the National Weather Service publishes through NOWData.`,
      },
      {
        list: [
          `About 47.65 inches of precipitation in a normal year.`,
          `October is the wettest month at 5.52 inches, followed by November (5.13) and May (4.79).`,
          `February is the driest month, at 2.94 inches.`,
          `Normal highs reach 91.3°F in June, 93.6°F in July and 94.5°F in August, the hottest month.`,
          `January’s normal low of 39.3°F is the coldest of the year.`,
        ],
      },
      { h: 'Three months above 90 degrees' },
      {
        p: `With normal highs above 90°F from June through August and 89.6°F in September, air conditioning in Montgomery County runs for much of the year. An air conditioner pulls moisture out of the air as it cools it, and a vent blowing across your face keeps that dried air moving over the eye. The muggy air outside doesn’t help your eyes once you’re indoors, which is why people in humid places still get dry eyes. [Why are my eyes dry when it’s humid?](/guides/why-are-my-eyes-dry-when-it-is-humid) explains the paradox.`,
      },
      {
        list: [
          `At home, close or redirect a vent that blows onto the couch, desk or pillow.`,
          `A ceiling fan running all night over the bed dries the eyes too; turn it down or off. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) has more.`,
          `In the office, ask to have a diffuser angled away from your workstation.`,
          `Step outside for a few minutes now and then, out of the moving air.`,
        ],
      },
      { h: 'A day on Lake Conroe' },
      {
        p: `Lake Conroe pulls people out on weekends from spring through fall: pontoon boats, wakeboarding, fishing from the bank or a dock. Out on open water there’s nothing to block the wind, and the speed of a boat adds its own. Sunlight bouncing off the surface makes you squint, and the long afternoons are when the summer highs peak.`,
      },
      {
        list: [
          `Wear wraparound sunglasses with a strap, so they stay on when the boat picks up speed.`,
          `Turn your back to the spray and wind when you can, and blink fully during breaks.`,
          `Keep eye drops in a shaded bag, not on the dash or a seat in the sun.`,
          `Rinse lake water off your face with clean water rather than rubbing your eyes.`,
        ],
      },
      {
        p: `[Dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers wind, glare and spray in more detail.`,
      },
      { h: 'The I-45 commute' },
      {
        p: `A lot of Conroe residents drive I-45 south toward The Woodlands, Spring and Houston every weekday. Long stretches of stop-and-go traffic mean a fixed gaze and fewer blinks, and the car’s air conditioning is usually on high from late spring into fall. Point the dash vents at your chest or the windshield instead of your face, close your eyes for a second or two when traffic stops, and keep a pair of sunglasses within reach for the drive home into the western sun. Never put in drops while you’re driving.`,
      },
      { h: 'Fall rain and mild winters' },
      {
        p: `At this station, the wettest months are October and November, not midsummer. A rainy fall means more time indoors, and that usually means more time at screens. Winters are mild, with January lows near 39°F, so heaters run less often than in much of the country. When a cold front pushes through, though, furnaces, space heaters and fireplaces come on, and warmed indoor air dries quickly. [Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) is worth a read before the first chilly weekend.`,
      },
      { h: 'Trails in the pines' },
      {
        p: `Sam Houston National Forest, north and east of town, draws hikers, cyclists and riders onto its trails. Shade from the pines helps with glare, but summer heat and dusty trail sections dry the eyes on a long ride. Glasses with side coverage keep grit out, and a mid-ride stop in the shade gives you a chance to blink properly.`,
      },
      { h: 'Quell’s label, in plain terms' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. Directions: {directions}. Read this before you open it: {warnings}. And keep the dropper clean: {tip}.`,
      },
      {
        p: `The panel’s storage line reads: {storage}. A parked car in a Conroe August goes well past that, so carry the bottle with you or keep it in an insulated bag. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why. The complete panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Conroe' },
      {
        p: `We ship from Brentwood, Tennessee, to Conroe, Willis, Montgomery, The Woodlands and every other US address. Checkout is as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t ship them back. See the [Conroe page](/eye-drops/conroe-tx) and the [Texas page](/eye-drops/state/texas) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Some eye problems need an exam, not a drop. The label says: {stopUse} An optometrist or ophthalmologist can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Conroe, Texas?',
        a: 'August. NOAA’s 1991–2020 normals for Conroe-North Houston Regional Airport put the normal August high at 94.5°F, ahead of July at 93.6°F and June at 91.3°F.',
      },
      {
        q: 'When is the rainy season in Conroe?',
        a: 'Fall brings the most rain at the county airport: 5.52 inches in October and 5.13 in November, in NOAA’s normals. May is next at 4.79 inches, and February is the driest month.',
      },
      {
        q: 'Why do my eyes feel dry after a day on Lake Conroe?',
        a: 'Wind across open water, the extra breeze from a moving boat and glare off the surface all speed evaporation from the eye. Wraparound sunglasses and breaks in the shade help.',
      },
      {
        q: 'Does Quell ship to Conroe, TX?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Conroe and the rest of Montgomery County, like every other US address. Tracking comes by email, and no delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-scranton-pa:
   * - NOAA 1991-2020 monthly normals through ACIS (sid AVP), saved at
   *   .daily-job/acis1119/AVP.json and .daily-job/c/mint_AVP.json
   *   (WILKES-BARRE/SCRANTON INTERNATIONAL AIRPORT, elev 951 ft: annual precip
   *   38.72 in; Sep 4.15, Feb 2.07; snowfall 45.1 in: Jan 11.7, Feb 10.9, Mar 10.1,
   *   Apr 0.8, Oct 0.7, Nov 3.2, Dec 7.7; Jan high 35.7 F, low 20.3; Feb low 21.9;
   *   Mar low 28.9; Dec low 26.3; Nov low 34.3; Jul high 84.6, low 62.7)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-scranton-pa',
    title: 'Dry eye relief in Scranton, Pennsylvania',
    description:
      'About 45 inches of snow a year and January lows near 20°F keep Scranton’s heat on for months. NOAA’s numbers and dry eye relief for the valley.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Scranton is mostly a winter job. NOAA’s normals for Wilkes-Barre/Scranton International Airport show about 45 inches of snow a year and January lows near 20°F, so radiators, furnaces and space heaters dry indoor air for months. Turn the heat down a little, keep vents and defrosters off your face, use a lubricating drop as its label directs, and see an eye doctor if the dryness won’t settle.`,
      },
      { h: 'How much snow does Scranton get?' },
      {
        p: `NOAA’s 1991–2020 climate normals for Wilkes-Barre/Scranton International Airport, also published through the National Weather Service’s NOWData, are the closest official record. The airport sits at about 951 feet near Avoca, between Scranton and Wilkes-Barre, so it’s shared by both ends of the valley.`,
      },
      {
        list: [
          `Normal seasonal snowfall is 45.1 inches.`,
          `January leads at 11.7 inches, then February (10.9), March (10.1), December (7.7) and November (3.2).`,
          `March normally brings more snow than December.`,
          `Total precipitation, rain and melted snow together, is 38.72 inches; September is the wettest month at 4.15 inches and February the driest at 2.07.`,
          `January’s normal high is 35.7°F and its normal low 20.3°F. July peaks at 84.6°F.`,
        ],
      },
      { h: 'Radiators, furnaces and dry rooms' },
      {
        p: `Normal lows stay below freezing from December through March, and November’s sits just above it at 34.3°F. That keeps the heat on for a long stretch, whether it comes from a boiler and radiators in an older double-block house or from forced air in a newer home up the hill. Either way, heating cold air without adding water drops the relative humidity indoors, and that dry air takes water from the tear film between blinks.`,
      },
      {
        list: [
          `Keep a chair or bed a few feet from a radiator, and don’t sleep with your face toward one.`,
          `A pan of water on a radiator adds very little; a humidifier in the bedroom does more.`,
          `Lower the thermostat at night, when you’re under blankets anyway.`,
          `Close or angle the floor register beside your desk.`,
        ],
      },
      {
        p: `[Dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) goes deeper on steam and hot-water systems.`,
      },
      { h: 'Shoveling, scraping and cold wind' },
      {
        p: `Forty-five inches of snow means a lot of time outside with a shovel, a scraper or a snowblower. Cold wind makes the eyes sting and water, and bright sun off fresh snow makes you squint. A hat with a brim and wraparound sunglasses help on clear days; ski goggles work well behind a snowblower that throws snow back at you. Weekends at Montage Mountain add speed and altitude to the same wind. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) and [ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) have more.`,
      },
      { h: 'Winter driving on I-81 and the turnpike' },
      {
        p: `The defroster is the culprit on a winter drive. It blows hot, dry air up the windshield, and much of it ends up across your face. Commutes on I-81, I-84 and the Northeast Extension of the turnpike can mean an hour or more of it.`,
      },
      {
        list: [
          `Switch to defrost only until the glass clears, then move the air to the floor.`,
          `Angle the dash vents away from your eyes.`,
          `Don’t leave eye drops in the car through a January night. The label’s storage range starts at 59°F; [can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) explains.`,
          `Use drops before you leave or after you park, not while driving.`,
        ],
      },
      { h: 'Summer and fall in the valley' },
      {
        p: `July highs average 84.6°F, and summer here is green and warm rather than dry. Air conditioning still runs, and long walks on the Lackawanna River Heritage Trail or the loop around Lake Scranton put you in sun and breeze. Fall brings the wettest month of the year, September, and then foliage drives on country roads with the windows down. Sunglasses help in every one of those settings, and so does pointing car vents away from your eyes.`,
      },
      { h: 'Campus, office and screen time' },
      {
        p: `The University of Scranton, Marywood University and a long list of offices downtown and in the business parks off the interstates mean plenty of screen hours. People blink less while they read a screen, and a heated office in January makes each unblinked second count for more. Take a break every 20 minutes or so to look across the room, and finish each blink. [Dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) has a fuller checklist.`,
      },
      { h: 'What the label on Quell says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. The caution reads: {warnings}. And the panel says: {tip}.`,
      },
      {
        p: `Storage is printed as: {storage}. The label doesn’t give directions for contact lenses, children or use with other drops, so ask your eye doctor or pharmacist before combining them. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Scranton' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Scranton, Dunmore, Clarks Summit, Wilkes-Barre and every other US address. Checkout is as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but there’s no promised delivery date, and winter storms can slow any package, so order early. Unopened bottles can be refunded within {returnDays} days of delivery without being returned. The [Scranton page](/eye-drops/scranton-pa) and the [Pennsylvania page](/eye-drops/state/pennsylvania) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes hurt, your vision changes, or the dryness keeps coming back after you’ve dealt with heat and wind, book an exam. The label’s own words: {stopUse} An optometrist or ophthalmologist can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the urgent ones.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Scranton, PA get a year?',
        a: 'About 45 inches. NOAA’s 1991–2020 normals for Wilkes-Barre/Scranton International Airport put normal seasonal snowfall at 45.1 inches, with January the snowiest month at 11.7.',
      },
      {
        q: 'What is the coldest month in Scranton?',
        a: 'January. The normal high at the Wilkes-Barre/Scranton airport is 35.7°F and the normal low 20.3°F, in NOAA’s climate normals. February runs only slightly warmer.',
      },
      {
        q: 'Does Scranton get more snow in March or December?',
        a: 'March, in a normal year. NOAA’s normals for the Wilkes-Barre/Scranton airport list 10.1 inches of snow in March against 7.7 inches in December.',
      },
      {
        q: 'Does Quell ship to Scranton, Pennsylvania?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Scranton and the rest of Lackawanna and Luzerne counties, with email tracking. There’s no promised delivery date, so order ahead in winter.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-bowling-green-ky:
   * - NOAA 1991-2020 monthly normals through ACIS (sid BWG), saved at
   *   .daily-job/acis1119/BWG.json and .daily-job/c/mint_BWG.json
   *   (BOWLING GREEN WARREN COUNTY AP, elev 523 ft: annual precip 50.10 in;
   *   May 5.03, Apr 4.81, Mar 4.54, Dec 4.35; Oct 3.63, Sep 3.64; snowfall 8.5 in:
   *   Jan 3.2, Feb 2.9, Mar 1.4, Apr 0.1, Nov 0.1, Dec 0.8; Jul high 89.7 F,
   *   Aug 89.3; Jan high 46.2, low 28.3; Feb low 31.1; Dec low 31.6; Jul low 69.7)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-bowling-green-ky',
    title: 'Dry eye relief in Bowling Green, Kentucky',
    description:
      'Bowling Green gets about 50 inches of rain a year, yet summer air conditioning and winter heat still dry the eyes. NOAA’s numbers and what helps.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Bowling Green has less to do with the weather outside than with the air indoors. NOAA’s normals for the city’s airport show about 50 inches of rain a year, but July and August highs near 90°F keep air conditioning running, and furnaces take over from December to February. Keep vents off your face, take screen breaks, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Bowling Green’s weather by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Bowling Green-Warren County Airport, at about 523 feet, describe a wet, warm climate with a short winter. The National Weather Service publishes the same normals through NOWData.`,
      },
      {
        list: [
          `About 50.10 inches of precipitation in a normal year.`,
          `May is the wettest month at 5.03 inches, with April (4.81) and March (4.54) close behind.`,
          `October (3.63 inches) and September (3.64) are the driest.`,
          `Normal snowfall is 8.5 inches a season, mostly in January (3.2) and February (2.9).`,
          `July’s normal high is 89.7°F and August’s 89.3°F; January’s normal low is 28.3°F.`,
        ],
      },
      { h: 'A wet climate that still dries your eyes' },
      {
        p: `Fifty inches of rain doesn’t reach the inside of a house, a car or an office. With summer highs near 90°F and normal July lows around 70°F, air conditioning runs day and night from late spring into September, and an air conditioner dries the air as it cools it. In winter, normal lows dip below freezing in December, January and February, and the furnace takes over the job. The moist air outside is one thing; the dry air inside, blowing from a vent toward your face, is what your eyes actually live in.`,
      },
      {
        list: [
          `Redirect the vent nearest your bed, couch or desk.`,
          `Keep the thermostat moderate rather than cranking it in either season.`,
          `Turn a ceiling fan down at night if you wake with dry, scratchy eyes.`,
          `Consider a humidifier for the bedroom in winter, and keep it clean.`,
        ],
      },
      { h: 'Plant floors and warehouses along I-65' },
      {
        p: `Bowling Green builds the Corvette, and the industrial parks along I-65 employ a lot of people in manufacturing and distribution. Big buildings mean big air handlers, ventilation fans and, on some lines, heat from machinery. Long shifts of close inspection work slow blinking too. If your eyes feel dry by the end of a shift, notice whether you work under a fan or beside a vent, and ask whether it can be angled away. Workplace eye protection is a question for your employer’s safety guidance. [Dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) and [dry eyes for warehouse workers](/guides/dry-eyes-for-warehouse-workers) go into more detail.`,
      },
      { h: 'The Hill and Barren River Lake' },
      {
        p: `Western Kentucky University sits on the Hill above downtown, and the walk up it in a January wind or an August afternoon is a small lesson in how weather affects the eyes. Students also spend long hours in libraries and at laptops, where blinking slows. On weekends, Barren River Lake to the east brings boating, fishing and sun reflecting off the water. Wraparound sunglasses help on the lake, and a few slow, full blinks help after a long stretch of reading.`,
      },
      { h: 'Driving to Nashville and back' },
      {
        p: `Plenty of Bowling Green residents drive I-65 south to Nashville for work, flights, games and concerts. That’s a long interstate stretch with the AC or heater running and your eyes fixed on the road.`,
      },
      {
        list: [
          `Aim the dash vents at your chest or the windshield.`,
          `Wear sunglasses on bright days, especially driving west late in the day.`,
          `Stop at a rest area, close your eyes for a minute and blink fully before you set off again.`,
          `Put drops in before you leave or after you park, never while driving.`,
        ],
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Uses, as printed: {uses}. Directions: {directions}. The caution on the panel: {warnings}. Keep the tip clean, too: {tip}.`,
      },
      {
        p: `For storage, the panel says: {storage}. A truck cab in a Kentucky July runs past that, so keep the bottle with you. The label doesn’t cover contact lenses or using it with other drops; an eye doctor or pharmacist can help with those. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Bowling Green' },
      {
        p: `Quell ships from Brentwood, Tennessee, just south of Nashville, to Bowling Green, Glasgow, Franklin, Scottsville and every other US address. Checkout is as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Bowling Green page](/eye-drops/bowling-green-ky) and the [Kentucky page](/eye-drops/state/kentucky) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop isn’t the answer to every eye problem. The label says: {stopUse} Pain, a change in your vision, or dryness that keeps returning should go to an optometrist or ophthalmologist, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the ones to act on quickly.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Bowling Green, KY get?',
        a: 'Not much. NOAA’s 1991–2020 normals for the Bowling Green-Warren County airport put normal seasonal snowfall at 8.5 inches, mostly in January (3.2 inches) and February (2.9).',
      },
      {
        q: 'What is the rainiest month in Bowling Green, Kentucky?',
        a: 'May, at 5.03 inches in NOAA’s normals for the city’s airport, followed by April at 4.81 inches. September and October are the driest months, at about 3.6 inches each.',
      },
      {
        q: 'How hot does Bowling Green get in the summer?',
        a: 'July’s normal high is 89.7°F and August’s 89.3°F at the Bowling Green-Warren County airport, and normal July lows sit near 70°F, according to NOAA’s 1991–2020 normals.',
      },
      {
        q: 'Does Quell ship to Bowling Green, Kentucky?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Bowling Green and every other US address, with tracking by email. No delivery date is promised, so reorder before you run out.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-greenville-sc:
   * - NOAA 1991-2020 monthly normals through ACIS (sid GSP), saved at
   *   .daily-job/acis1119/GSP.json and .daily-job/c/mint_GSP.json
   *   (GRNVL SPART INTL AP, elev 966 ft: annual precip 49.67 in; Jul 4.82, Aug 4.66,
   *   Dec 4.58, Oct 3.59; snowfall 3.9 in: Jan 1.6, Feb 1.0, Mar 0.6, Nov 0.1, Dec 0.6;
   *   Jul high 90.3 F, Aug 88.5, Jun 87.2; Jan high 52.8, low 32.1; Feb low 34.8)
   * - .daily-job/relhum23.txt (NOAA relative humidity table, GREENVILLE-SPARTANBURG, SC,
   *   WBAN 03870, 1962-2018, morning/afternoon: Jan 76/53, Mar 75/49, Apr 76/47,
   *   Jul 85/55, Aug 87/57, Sep 87/57; annual 81/53)
   * - .daily-job/wndspd23.txt (GREENVILLE-SPARTANBURG: Mar and Apr highest of the year,
   *   Aug lowest; no speed stated in the guide)
   */
  {
    slug: 'dry-eye-relief-greenville-sc',
    title: 'Dry eye relief in Greenville, South Carolina',
    description:
      'In Greenville, April afternoons are the driest of the year at about 47 percent humidity, and spring is the windiest season. NOAA’s numbers and tips.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Greenville starts in spring. NOAA’s humidity table for the Greenville-Spartanburg airport puts April afternoons at about 47 percent, the year’s lowest, and March and April are the windiest months there. Summer brings heat and air conditioning, winter brings furnace heat. Wear wraparound glasses outdoors in spring, keep vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Where Greenville’s numbers come from' },
      {
        p: `The official record for the Upstate comes from Greenville-Spartanburg International Airport in Greer, at about 966 feet, between the two cities. NOAA’s 1991–2020 climate normals for the station, published through the National Weather Service’s NOWData, give these figures:`,
      },
      {
        list: [
          `About 49.67 inches of precipitation in a normal year.`,
          `July is the wettest month at 4.82 inches; October is the driest at 3.59.`,
          `Normal snowfall is 3.9 inches a season, led by January at 1.6.`,
          `July’s normal high is 90.3°F; January’s is 52.8°F, with a normal low of 32.1°F.`,
        ],
      },
      {
        p: `NOAA also publishes a separate relative humidity table, built from the station’s 1962–2018 observations, and a wind table that ranks its months. Both are used below.`,
      },
      { h: 'Spring: the driest afternoons and the windiest months' },
      {
        p: `In that humidity table, Greenville-Spartanburg’s afternoon readings fall from 53 percent in January to 49 percent in March and 47 percent in April, the lowest of the year. The wind table shows March and April as the windiest months at the station. So spring, when azaleas bloom and everyone heads outdoors, pairs the driest afternoon air with the most wind. That’s the combination that thins the tear film fastest.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the Swamp Rabbit Trail; on a bike, the wind you make adds to the wind that’s blowing.`,
          `On Paris Mountain or Table Rock trails, take short stops in the shade to blink fully.`,
          `Rinse pollen and dust off your face and lids with clean water when you come in.`,
          `Keep the car’s windows up and vents low on gusty days.`,
        ],
      },
      { h: 'Muggy summers and cold air inside' },
      {
        p: `By late summer the numbers flip. August and September mornings average 87 percent humidity and afternoons 57 percent, the most humid of the year, with July highs at 90.3°F. Few people spend those afternoons outside if they can help it. They’re in offices, cars and homes running air conditioning, which dries the air as it cools. A vent blowing straight at your face at a desk downtown or on I-85 can dry the eyes as much as spring wind does. Aim vents at your chest, turn ceiling fans down at night and take breaks from the screen.`,
      },
      { h: 'Plant floors and long shifts' },
      {
        p: `Greer’s BMW plant and the Upstate’s many other manufacturers and distribution centers put a lot of people on long shifts under big ventilation systems and fans. Close visual work, like inspection or assembly, slows blinking. If dryness builds through a shift, notice where the air is coming from and whether a fan can be turned. Eye protection on the floor follows your employer’s safety guidance. [Dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) goes further.`,
      },
      { h: 'Winter heat in the foothills' },
      {
        p: `Greenville’s winters are short, but January’s normal low still sits at 32.1°F, and heat runs from late fall into March. Warming air without adding water lowers its relative humidity, so indoor rooms feel drier than the 53 percent January afternoons outside. Keep the thermostat moderate, move chairs away from floor registers, and consider a bedroom humidifier. [Dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) explains furnace settings that help.`,
      },
      { h: 'Downtown, Falls Park and screens' },
      {
        p: `Greenville’s downtown, from Main Street to Falls Park on the Reedy, draws people out walking year-round, and its offices, hospitals and campuses keep many of them at screens the rest of the day. Furman and Clemson students study through the same December heating season as everyone else. Look across the room every 20 minutes or so, finish every blink, and set the monitor slightly below eye level. [Screens and your tear film](/guides/screens-and-your-tear-film) has the reasoning.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. Directions: {directions}. Read this caution first: {warnings}. The panel also says: {tip}.`,
      },
      {
        p: `Storage, from the panel: {storage}. A car parked at a trailhead in July gets far hotter, so keep the bottle in a bag you carry. The label doesn’t give directions for contact lenses or for using it with other drops; ask your eye doctor or pharmacist. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Greenville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Greenville, Greer, Simpsonville, Mauldin, Travelers Rest and every other US address. Checkout is as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Greenville page](/eye-drops/greenville-sc) and the [South Carolina page](/eye-drops/state/south-carolina) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes hurt or your vision changes, don’t wait on a drop. The label says: {stopUse} An optometrist or ophthalmologist can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to act on.`,
      },
    ],
    faq: [
      {
        q: 'What is the least humid month in Greenville, SC?',
        a: 'April, by afternoon readings. NOAA’s relative humidity table for the Greenville-Spartanburg airport puts April afternoons at about 47 percent, against 57 percent in August and September.',
      },
      {
        q: 'What is the windiest month in Greenville, South Carolina?',
        a: 'March and April share the top spot in NOAA’s wind table for the Greenville-Spartanburg airport, and August is the calmest month there.',
      },
      {
        q: 'How much snow does Greenville, SC get?',
        a: 'Very little. NOAA’s 1991–2020 normals for Greenville-Spartanburg International Airport put normal seasonal snowfall at 3.9 inches, with January the snowiest month at 1.6 inches.',
      },
      {
        q: 'Does Quell ship to Greenville, South Carolina?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Greenville and the rest of the Upstate, like every other US address. Tracking comes by email, and no delivery date is promised.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-lawrence-ks:
   * - NOAA 1991-2020 monthly normals through ACIS (sid LWC), saved at
   *   .daily-job/acis1119/LWC.json and .daily-job/c/mint_LWC.json
   *   (LAWRENCE ASOS, elev 827 ft: annual precip 35.58 in; Jan 0.87, Feb 1.30,
   *   Dec 1.38 (Dec-Feb 3.55); May 4.74, Jun 4.77; Jul high 90.6 F, Aug 89.9;
   *   Jan high 40.7, low 17.9; Feb low 22.4; Dec low 22.4; Nov low 31.2;
   *   Mar low 32.4; snowfall M)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-lawrence-ks',
    title: 'Dry eye relief in Lawrence, Kansas',
    description:
      'Lawrence’s January brings just 0.87 inch of precipitation and lows near 18°F, so winter air indoors gets very dry. NOAA’s numbers and what helps.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Lawrence matters most in winter. NOAA’s normals for the Lawrence airport show January with just 0.87 inch of precipitation and a normal low of 17.9°F, and December through February together bring only about 3.5 inches. Heating that cold, dry air indoors dries the eyes. Lower the thermostat, keep vents off your face, use a lubricating drop as its label directs, and see an eye doctor if the dryness doesn’t ease.`,
      },
      { h: 'Lawrence’s weather in NOAA’s normals' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Lawrence Municipal Airport weather station, at about 827 feet just north of downtown, are the official numbers for the city. The National Weather Service publishes the same normals through NOWData.`,
      },
      {
        list: [
          `About 35.58 inches of precipitation in a normal year.`,
          `June (4.77 inches) and May (4.74) are the wettest months.`,
          `January is the driest at 0.87 inch, followed by February (1.30) and December (1.38).`,
          `Normal lows fall below freezing from November (31.2°F) through February; January’s is 17.9°F.`,
          `July’s normal high is 90.6°F and August’s 89.9°F.`,
        ],
      },
      { h: 'Why winter is the dry season here' },
      {
        p: `Most of Lawrence’s precipitation comes in the warm half of the year. December, January and February together bring about 3.55 inches, roughly a tenth of the annual total, and the air in those months is cold as well as dry. Cold air holds little water to begin with. When a furnace warms it to room temperature without adding any, the relative humidity indoors drops a long way. That’s why an apartment near campus or a house in Old West Lawrence can feel parched in January even with snow on the ground.`,
      },
      {
        list: [
          `Keep the thermostat a little lower, especially at night.`,
          `Close or deflect a floor register that blows toward your bed or desk.`,
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Read [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) before you buy one.`,
        ],
      },
      { h: 'Mount Oread, wind and the walk to class' },
      {
        p: `The University of Kansas sits on Mount Oread, and the walk along Jayhawk Boulevard in a January wind is enough to make anyone’s eyes water. NOAA’s wind table doesn’t include this station, so there’s no number to quote, but open hilltops and wide streets let the wind through. Moving air pulls water off the eye faster. A hat brim and glasses or sunglasses cut some of it, and a scarf pulled up over the nose keeps your own warm breath from fogging lenses.`,
      },
      { h: 'Allen Fieldhouse, libraries and long screens' },
      {
        p: `Winter in Lawrence also means basketball. Packed games at Allen Fieldhouse keep people’s eyes fixed on the court for two hours, and they blink less while they concentrate. The same thing happens in Watson and Anschutz libraries during December finals, at a laptop in a heated room. Take short breaks to look across the room, and make each blink a complete one. [Dry eyes while studying for exams](/guides/dry-eyes-while-studying) has more.`,
      },
      { h: 'The K-10 commute' },
      {
        p: `Plenty of Lawrence residents drive K-10 to Olathe, Lenexa and the rest of the Kansas City area, or the turnpike to Topeka. Half an hour or more with the heater or AC running, and a defroster aimed at the glass in winter, is a long time for dry air to move across the eyes.`,
      },
      {
        list: [
          `Use defrost only until the windshield clears, then move the air to the floor.`,
          `Angle dash vents away from your face.`,
          `Keep sunglasses handy for the low winter sun on the drive east in the morning.`,
          `Never put drops in while driving; do it before you leave or after you park.`,
        ],
      },
      { h: 'Summer on Clinton Lake and the Kaw' },
      {
        p: `Summer turns things around: the wettest months are May and June, and July highs reach 90.6°F. Air conditioning runs at home and work, and weekends at Clinton Lake or along the Kansas River levee trail mean sun, glare off the water and breeze. Wear sunglasses that wrap around, and don’t leave your eye drops in a parked car. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains the label’s storage range.`,
      },
      { h: 'What the label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Directions: {directions}. The caution on the panel: {warnings}. And to keep the bottle clean: {tip}.`,
      },
      {
        p: `The panel’s storage line: {storage}. A car left outside through a Lawrence January night drops well below that. The label doesn’t give directions for contact lenses or use with other drops, so ask your eye doctor or pharmacist about those. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Lawrence' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Lawrence, Eudora, Baldwin City and every other US address. Checkout is as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. The [Lawrence page](/eye-drops/lawrence-ks) and the [Kansas page](/eye-drops/state/kansas) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Pain, blurred or changed vision, or dryness that won’t quit after you’ve fixed the heat and the screens are reasons to see an optometrist or ophthalmologist. The label adds: {stopUse} A doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Lawrence, Kansas?',
        a: 'January, with 0.87 inch of precipitation in NOAA’s 1991–2020 normals for the Lawrence airport. February (1.30 inches) and December (1.38) are the next driest.',
      },
      {
        q: 'How cold does Lawrence, KS get in January?',
        a: 'January’s normal low at the Lawrence airport is 17.9°F, and its normal high is 40.7°F, according to NOAA’s 1991–2020 climate normals.',
      },
      {
        q: 'Why do my eyes get dry at basketball games?',
        a: 'You stare at the court for long stretches and blink less, and a packed arena in winter is heated. Look away during timeouts and blink fully to spread a fresh tear film.',
      },
      {
        q: 'Does Quell ship to Lawrence, KS?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Lawrence and the rest of Douglas County, with email tracking. No delivery date is promised, so order before you run out.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-tuscaloosa-al:
   * - NOAA 1991-2020 monthly normals through ACIS (sid TCL), saved at
   *   .daily-job/acis1119/TCL.json and .daily-job/c/mint_TCL.json
   *   (TUSCALOOSA ARPT ASOS, elev 148 ft: annual precip 53.52 in; Feb 5.37,
   *   Dec 5.06, Apr 5.00, Jan 4.97; Sep 3.40, Oct 3.54; Jul high 91.6 F, Aug 91.2,
   *   Jun 89.2, Sep 87.0; Jan high 55.7, low 35.7; Jul low 72.3; snowfall M)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-tuscaloosa-al',
    title: 'Dry eye relief in Tuscaloosa, Alabama',
    description:
      'Tuscaloosa’s driest month is September, when highs still average 87°F and game days fill the stands. NOAA’s numbers and dry eye relief that fits.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Tuscaloosa means handling long, hot summers indoors and sunny fall Saturdays outdoors. NOAA’s normals for Tuscaloosa Regional Airport show July and August highs above 91°F, and September, when football season starts, is both the driest month and still 87°F. Point vents away from your face, wear sunglasses in the stands, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Tuscaloosa’s climate by NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Tuscaloosa Regional Airport, at about 148 feet across the Black Warrior River from downtown, are the official record. The National Weather Service publishes the same normals through NOWData.`,
      },
      {
        list: [
          `About 53.52 inches of precipitation in a normal year.`,
          `February is the wettest month at 5.37 inches, followed by December (5.06), April (5.00) and January (4.97).`,
          `September is the driest at 3.40 inches, with October close behind at 3.54.`,
          `Normal highs reach 91.6°F in July and 91.2°F in August; September’s is 87.0°F.`,
          `January’s normal high is 55.7°F and its normal low 35.7°F.`,
        ],
      },
      { h: 'Wet winters, dry early fall' },
      {
        p: `The calendar here runs against what many people expect. Winter is the wet season at this station, with three of the four wettest months falling in December, January and February, and early fall is the driest stretch. That matters for the eyes in two ways. In winter, the rain outside does nothing for the air inside, where heat runs on cold nights. In September and October, drier air and still-warm sun meet the busiest outdoor weekends of the year.`,
      },
      { h: 'Game day at Bryant-Denny' },
      {
        p: `Football Saturdays in Tuscaloosa mean a long day outside: tailgating on the Quad, then hours in the stands at Bryant-Denny Stadium. Early-season games come in the driest, still-hot part of the year, with sun overhead, breeze in the upper decks and grills smoking nearby. Watching the field for three-plus hours also slows blinking.`,
      },
      {
        list: [
          `Wear wraparound sunglasses and a cap, especially for day games.`,
          `Pick a tailgate spot upwind of the grill when you can.`,
          `Look away from the field during breaks and blink fully a few times.`,
          `Keep eye drops in a bag in the shade, not in a hot car, and check stadium rules on what you can carry in.`,
        ],
      },
      { h: 'Summer: heat outside, cold air inside' },
      {
        p: `With normal July lows of 72.3°F, summer nights hardly cool off, so air conditioning runs day and night from late spring into September. An air conditioner pulls water from the air as it cools it. Sitting under a vent at work, sleeping under a ceiling fan, or driving with the dash vents aimed at your face all move that dried air across the eye. Redirect the vents, turn the fan down at night, and take breaks from close work. [Why are my eyes dry when it’s humid?](/guides/why-are-my-eyes-dry-when-it-is-humid) explains why muggy weather outside doesn’t help.`,
      },
      { h: 'On the river and the lake' },
      {
        p: `The Black Warrior River runs right past downtown, with a riverwalk along its bank, and Lake Tuscaloosa north of the city draws boaters and anglers. Open water means wind, and sunlight bouncing off the surface means squinting. Wraparound sunglasses, a hat and shade breaks all help. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers spray and speed.`,
      },
      { h: 'Plant shifts and campus screens' },
      {
        p: `The Mercedes-Benz plant in Vance and its suppliers put many people on long shifts under ventilation fans, and the University of Alabama and the medical centers put many more at screens. Both settings slow blinking and keep air moving across the face. On the line, ask whether a fan can be angled differently; eye protection there follows your employer’s safety guidance. At a desk, look up every 20 minutes or so and finish each blink. [Dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) has more.`,
      },
      { h: 'Quell’s label, in its own words' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. Read the caution first: {warnings}. The panel also says: {tip}.`,
      },
      {
        p: `Storage, as printed: {storage}. A car parked for a game in September or a July afternoon at the lake runs hotter, so keep the bottle with you. The label doesn’t give directions for contact lenses, children or use with other drops; ask your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Tuscaloosa' },
      {
        p: `We ship from Brentwood, Tennessee, to Tuscaloosa, Northport, Cottondale, Vance and every other US address. Checkout is as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Tuscaloosa page](/eye-drops/tuscaloosa-al) and the [Alabama page](/eye-drops/state/alabama) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for ordinary dryness, not for pain or vision changes. The label says: {stopUse} An optometrist or ophthalmologist can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Tuscaloosa, Alabama?',
        a: 'September, at 3.40 inches in NOAA’s 1991–2020 normals for Tuscaloosa Regional Airport. October is close behind at 3.54 inches.',
      },
      {
        q: 'What is the wettest month in Tuscaloosa?',
        a: 'February, at 5.37 inches in NOAA’s normals for the airport, followed by December at 5.06 and April at 5.00. Winter is the wet season here.',
      },
      {
        q: 'Why do my eyes get dry at a football game?',
        a: 'Hours of watching the field slow blinking, and day games add sun, breeze and smoke from tailgate grills. Sunglasses, a cap and a few full blinks during breaks all help.',
      },
      {
        q: 'Does Quell ship to Tuscaloosa, AL?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Tuscaloosa and the rest of Tuscaloosa County, with email tracking and no promised delivery date.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-kennewick-wa:
   * - NOAA 1991-2020 monthly normals through ACIS (sid PSC), saved at
   *   .daily-job/acis1119/PSC.json and .daily-job/c/mint_PSC.json
   *   (PASCO TRI CITIES AIRPORT, elev 400 ft: annual precip 7.62 in; Jul 0.15,
   *   Aug 0.27, Sep 0.31 (Jul-Sep 0.73); Jan 1.03, Dec 1.03, Nov 0.87; Jul high
   *   92.5 F, Aug 90.7, Jun 83.1; Jan high 41.4, low 27.8; Dec high 41.0, low 27.3;
   *   Feb low 28.2; Nov low 31.9; snowfall M)
   * - No relhum23.txt or wndspd23.txt row for this station: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-kennewick-wa',
    title: 'Dry eye relief in Kennewick, Washington',
    description:
      'The Tri-Cities get about 7.6 inches of precipitation a year, and July highs average 92.5°F. NOAA’s numbers for Kennewick and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Kennewick starts with how little water falls there. NOAA’s normals for the Tri-Cities Airport in Pasco list about 7.6 inches of precipitation a year, with July, August and September together under an inch, and July highs of 92.5°F. Wear wraparound sunglasses outdoors, keep vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'How dry is Kennewick?' },
      {
        p: `NOAA’s 1991–2020 climate normals for Tri-Cities Airport, across the Columbia River in Pasco at about 400 feet, are the official numbers for the area. The National Weather Service publishes them through NOWData.`,
      },
      {
        list: [
          `About 7.62 inches of precipitation in a normal year.`,
          `July brings 0.15 inch, August 0.27 and September 0.31, under three-quarters of an inch for the three months.`,
          `December and January are the wettest months, at 1.03 inches each.`,
          `July’s normal high is 92.5°F and August’s 90.7°F.`,
          `Normal lows dip below freezing from November (31.9°F) through February; December’s is 27.3°F.`,
        ],
      },
      {
        p: `Those numbers describe shrub-steppe country. The Columbia, Snake and Yakima rivers meet here, and irrigation keeps lawns and orchards green, but the sage-covered hills around Kennewick show what the climate does on its own.`,
      },
      { h: 'Summer: hot, bright and almost rainless' },
      {
        p: `Late summer is the hardest stretch for the eyes. July and August bring the hottest afternoons of the year and almost no rain, so dust settles on everything and the sun is strong. A tear film evaporates faster in warm, dry air, and squinting into glare makes it harder to blink fully.`,
      },
      {
        list: [
          `Plan walks on the riverside trail through Columbia Park for the morning.`,
          `Wear wraparound sunglasses; they block glare and dust together.`,
          `On windy, dusty days, close the car’s fresh-air intake and use recirculate.`,
          `Rinse dust off your face and lids with clean water when you come in, rather than rubbing your eyes.`,
        ],
      },
      { h: 'On the Columbia' },
      {
        p: `Boating, waterskiing and fishing on the Columbia fill summer weekends, and the river is wide open to wind and sun. A boat’s speed adds its own breeze, and reflected light comes from below as well as above. Sunglasses with a strap, a cap and shade breaks keep the day comfortable. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) has a longer list.`,
      },
      { h: 'Labs, offices and long screen days' },
      {
        p: `Much of the Tri-Cities’ work happens indoors: at the Hanford Site and the national laboratory in Richland, in engineering firms, hospitals and offices. That means air-conditioned buildings in summer, heated ones in winter, and hours at screens in both. People blink less while they read or work on a monitor, and dry indoor air takes water from the tear film between blinks.`,
      },
      {
        list: [
          `Look across the room every 20 minutes or so.`,
          `Set the monitor a little below eye level.`,
          `Make each blink a full one, especially when you notice you’ve been staring.`,
          `Move your desk out of a vent’s path if you can.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why this helps.`,
      },
      { h: 'Gray winters and heated houses' },
      {
        p: `Winter is cooler and grayer, with normal highs near 41°F in December and January and lows below freezing for four months. December and January are also the wettest months, though at about an inch each, they aren’t wet by most standards. Furnaces run through the season, and heated indoor air loses relative humidity fast. Lower the thermostat at night, move away from floor registers and consider a bedroom humidifier. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through each room.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses, from its Drug Facts panel: {uses}. Directions: {directions}. The panel’s caution: {warnings}. To keep the bottle clean: {tip}.`,
      },
      {
        p: `The panel’s storage line: {storage}. A car in a Kennewick parking lot in July runs well past that, and one left out in December falls below it, so carry the bottle with you. The label doesn’t give directions for contact lenses or for using it with other drops; ask your eye doctor or pharmacist. Everything on the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Kennewick' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Kennewick, Pasco, Richland, West Richland and every other US address. Checkout is as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Kennewick page](/eye-drops/kennewick-wa) and the [Washington page](/eye-drops/state/washington) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps returning, eye pain, or a change in vision should go to an optometrist or ophthalmologist, who can find the cause and decide what to do. The label is specific: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does the Tri-Cities get a year?',
        a: 'About 7.6 inches. NOAA’s 1991–2020 normals for Tri-Cities Airport in Pasco put normal annual precipitation at 7.62 inches, with July the driest month at 0.15 inch.',
      },
      {
        q: 'How hot does Kennewick get in the summer?',
        a: 'July’s normal high at Tri-Cities Airport is 92.5°F and August’s is 90.7°F, according to NOAA’s 1991–2020 climate normals.',
      },
      {
        q: 'Is Kennewick, Washington a desert?',
        a: 'It’s semi-arid shrub-steppe country. NOAA’s normals for the nearby Tri-Cities Airport show about 7.6 inches of precipitation a year, and irrigation from the area’s rivers keeps lawns and farms green.',
      },
      {
        q: 'Does Quell ship to Kennewick, WA?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Kennewick, Pasco, Richland and every other US address, with email tracking and no promised delivery date.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-home-inspectors',
    title: 'Dry eyes for home inspectors',
    description:
      'Attic heat, crawl space dust, a flashlight beam and a long report at the screen all dry a home inspector’s eyes. What helps through an inspection day.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Home inspectors get dry eyes because one inspection packs in several drying conditions: hot, dusty attics, cramped crawl spaces, close focus behind a flashlight beam, wind and sun on the roof, then a long, photo-heavy report at a screen. Keep dust out with glasses, take blink breaks between areas, write the report in short blocks, use a lubricating drop as its label directs, and see an eye doctor if it persists.`,
      },
      { h: 'Why inspection work dries your eyes' },
      {
        p: `The tear film has an oil layer on top, a water layer in the middle and a mucus layer against the eye. It holds up when you blink often and fully, in air that isn’t too dry or fast-moving. An inspection works against all of that. You stare hard at things (a junction box, a joist, a water stain) and blink less. You move through spaces with very different air: a hot attic, a cool crawl space, an air-conditioned living room, a windy roof. And the job ends at a laptop, where blinking slows again.`,
      },
      { h: 'In the attic' },
      {
        p: `A summer attic holds the hottest, driest air in the house, and every step across the joists stirs up insulation fibers and dust. Your eyes are working hard too, tracking a flashlight beam across rafters and sheathing in the dark.`,
      },
      {
        list: [
          `Put on glasses or goggles before you go up the ladder. Which kind to wear is a question for your safety guidance or your eye doctor.`,
          `Keep attic time short in the heat of the afternoon, and book attic-heavy inspections for mornings when you can.`,
          `Stop at the hatch on the way down, close your eyes for a few seconds, then blink slowly several times.`,
          `Don’t rub your eyes with dusty gloves. Wash your hands and face first.`,
        ],
      },
      {
        p: `If something gets in your eye, rinse it with clean water and don’t rub. If it still hurts or your vision isn’t right, get medical care rather than reaching for a lubricating drop.`,
      },
      { h: 'Crawl spaces and basements' },
      {
        p: `Crawl spaces trade heat for dirt, cobwebs and tight quarters. Lying on your back to look at a subfloor puts you face up under whatever falls, and a headlamp a foot from a beam forces your eyes to focus close for minutes at a time. That kind of close work slows blinking as much as a screen does. When you crawl back out, give your eyes a minute: look at something far away across the yard and blink fully.`,
      },
      { h: 'Flashlights and close focus' },
      {
        p: `A bright flashlight in a dark space makes you squint, and squinting narrows the eye opening and cuts down on full blinks. Bounce the beam off a surface rather than looking straight into its reflection on shiny pipes, foil-faced insulation or wet concrete. Between rooms, switch the light off for a moment and let your eyes rest. If you use a moisture meter or a thermal camera, you spend even more time staring at a small display, so build the same short breaks into that work.`,
      },
      { h: 'On the roof' },
      {
        p: `Walking a roof or scanning it from a ladder puts you in full sun and wind, with glare off metal flashing and light-colored shingles. Wraparound sunglasses cut both glare and wind. If you inspect from the ground with binoculars or by flying a drone, you’re staring through a lens or at a small screen in bright light, which is hard on the tear film in a different way. [Dry eyes for drone pilots](/guides/dry-eyes-for-drone-pilots) covers that case.`,
      },
      { h: 'Writing the report' },
      {
        p: `The report is where many inspectors notice their eyes. After a day of dust and heat, you sit down to sort and caption a hundred or more photos and write findings on a laptop or tablet, often in the evening. Screen work cuts blinking, and the eyes are already tired.`,
      },
      {
        list: [
          `Work in blocks: write up one system (roof, electrical, plumbing), then stand and look out a window.`,
          `Set the screen slightly below eye level and match its brightness to the room.`,
          `Point the desk fan, or the truck’s vents if you write in the cab, away from your face.`,
          `Finish each blink deliberately when you notice you’ve been staring at a photo.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why breaks matter more than any single trick.`,
      },
      { h: 'Using a lubricating drop between jobs' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions are: {directions}. Three times a day fits around an inspection schedule: before the first job, at lunch, and before the report.`,
      },
      {
        list: [
          `Wash your hands before using it. After an attic or crawl space, that matters.`,
          `The label says: {tip}. A dusty truck console is exactly the surface to avoid.`,
          `Storage, from the panel: {storage}. A truck parked in the sun runs hotter; keep the bottle in a bag that comes inside with you.`,
          `The caution reads: {warnings}.`,
          `The label doesn’t give directions for contact lenses or for use with other drops; ask your eye doctor or pharmacist.`,
        ],
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Debris that won’t rinse out, eye pain, light sensitivity or changes in vision need an eye doctor, not a drop. The label says: {stopUse} An optometrist or ophthalmologist can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the urgent signs. If you also walk homes with agents, [dry eyes for real estate agents](/guides/dry-eyes-for-real-estate-agents) covers their side of the day, and [ordering is on the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry after a home inspection?',
        a: 'An inspection combines hot, dusty attics, close focus behind a flashlight, wind and sun on the roof, and a long report at a screen. Each one slows blinking or speeds evaporation from the eye.',
      },
      {
        q: 'What should I do if attic dust gets in my eye?',
        a: 'Rinse the eye with clean water and don’t rub it. If it still hurts, feels like something is stuck, or your vision changes, get medical care.',
      },
      {
        q: 'Can a flashlight make your eyes dry?',
        a: 'Indirectly. Staring at a bright beam in a dark space makes you squint and blink less, and close focus slows blinking too. Short breaks with the light off help.',
      },
      {
        q: 'When should a home inspector use eye drops?',
        a: 'Quell’s directions read: {directions}. On an inspection day, that fits before the first job, at lunch and before writing reports. Wash your hands first, especially after an attic or crawl space.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-potters-and-ceramic-artists',
    title: 'Dry eyes for potters and ceramic artists',
    description:
      'Kiln heat, dry clay dust and long stretches of close focus at the wheel all dry a potter’s eyes. What helps in the studio, and what the label covers.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Potters get dry eyes from three things the studio supplies in quantity: dry heat from kilns, fine dust from trimming, sanding and mixing dry materials, and long minutes of close focus at the wheel, when blinking slows. Keep dust down with wet cleanup, step away from a hot kiln, take blink breaks between pots, wash clay off your hands before touching your eyes, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why pottery dries your eyes' },
      {
        p: `The tear film is a thin layer with oil on top, water in the middle and mucus against the eye. Blinking spreads it, and dry or moving air pulls water from it between blinks. A ceramics studio does both. When you’re centering or pulling a wall, your eyes lock onto the clay and you blink less. Meanwhile a kiln may be warming the room, a fan may be drying greenware on the shelves, and dust from yesterday’s trimming is still settling.`,
      },
      { h: 'Close focus at the wheel' },
      {
        p: `Throwing asks for steady attention: watching the rim run true, reading the wall’s thickness, judging when to stop. People tend to blink less while they concentrate on fine work, and the eyes are often cast slightly downward and forward over the wheel head. Trimming is the same, with the extra wrinkle that leather-hard clay throws off curls and fine bits toward your face.`,
      },
      {
        list: [
          `Between pots, lift your eyes to something across the room for a few seconds.`,
          `Finish each blink; a half-blink while you watch the rim leaves part of the eye uncovered.`,
          `Adjust the stool and wheel height so you aren’t hunched with your face right over the splash pan.`,
          `If slip or clay splashes near your eye, stop and rinse with clean water rather than wiping with a clay-covered hand.`,
        ],
      },
      { h: 'Dry clay dust' },
      {
        p: `Dry clay is the studio’s main dust: from sanding bone-dry greenware, scraping the wheel, sweeping, and weighing out dry materials to mix clay bodies or glazes. Fine particles hang in the air and land on the eye, and an eye that’s already dry has less tear film to carry them away. Wet cleaning, sponging and mopping rather than sweeping, keeps settled dust from going back into the air. Ask your studio manager or the safety guidance for your materials about masks, ventilation and eye protection when you mix or sand.`,
      },
      {
        list: [
          `Sponge and mop instead of sweeping or blowing dust off surfaces.`,
          `Sand greenware outdoors or in a well-ventilated corner, away from your face.`,
          `Wash your hands and face before you touch your eyes, every time.`,
          `Keep your eye drops away from the work table, in a closed bag.`,
        ],
      },
      { h: 'Kiln heat and peeking in' },
      {
        p: `An electric kiln at full temperature turns a small studio into a warm, dry room, and a gas kiln adds flame and exhaust. Opening a lid or a door to check a load sends a blast of hot air toward your face. Looking into a firing kiln through a peephole is a question for the kiln maker’s instructions and your safety guidance: they cover what to wear for the glow, which this guide doesn’t. For dryness, the practical steps are simple.`,
      },
      {
        list: [
          `Turn your face away when you open a lid or door, and let the first rush of heat pass.`,
          `Don’t sit and work right beside a kiln during a firing; move the wheel or the glazing table if you can.`,
          `After unloading, step outside or into a cooler room for a few slow blinks.`,
          `If you fire raku or wood outdoors, stand upwind of the smoke and flames.`,
        ],
      },
      { h: 'Fans, drying rooms and winter studios' },
      {
        p: `Many studios use fans or dehumidifiers to dry greenware evenly, and those move dry air across the room, including across your face. In winter, a garage or basement studio may also run a space heater. Keep fans pointed at the shelves, not at the wheel, and set a heater so it doesn’t blow toward where you sit. [Dry eyes in a heated garage or workshop](/guides/dry-eyes-in-a-heated-garage-workshop) covers home studios in more detail.`,
      },
      { h: 'Glazing and decorating' },
      {
        p: `Glazing and painting underglaze bring the eyes even closer to the work, often under a bright lamp. Fine brushwork, sgraffito and carving can hold your focus for an hour without a real break. Set a timer if you lose track, and look up and blink fully when it goes off. A spray booth adds moving air; stand to the side of the airflow rather than in front of it.`,
      },
      { h: 'Using a lubricating drop in the studio' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. Directions: {directions}. For a studio day, that might mean one before you start throwing, one after lunch and one when you clean up.`,
      },
      {
        list: [
          `Wash clay and glaze off your hands first. Dry clay on a fingertip near the eye is what you’re trying to avoid.`,
          `The label says: {tip}. A dusty shelf or wedging table counts as a surface.`,
          `Storage, from the panel: {storage}. Kiln rooms get much warmer than that, so keep the bottle in another room or a bag by the door.`,
          `The caution reads: {warnings}.`,
          `The label doesn’t give directions for contact lenses or for use with other drops. Ask your eye doctor or pharmacist about either.`,
        ],
      },
      {
        p: `The full panel is on the [Drug Facts page](/drug-facts), and [why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains the dropper rule.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop isn’t for something stuck in the eye, a scratch or a splash of glaze. Rinse with clean water and get medical care if pain, a feeling of something stuck, or a change in vision continues. For ongoing dryness, the label says: {stopUse} An optometrist or ophthalmologist can find the cause and decide what to do, and can answer questions about eye protection for kiln work. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to act on.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after throwing pottery?',
        a: 'Close focus at the wheel slows blinking, and studios often have dry air from kilns, fans and heaters plus fine clay dust. Breaks to look up and blink fully, and wet cleanup, both help.',
      },
      {
        q: 'Can clay dust get in your eyes?',
        a: 'Yes. Sanding greenware, scraping and sweeping put fine clay particles in the air, and they can land on the eye. Rinse with clean water rather than rubbing, and ask your studio about eye protection for dusty jobs.',
      },
      {
        q: 'Should you look into a kiln while it’s firing?',
        a: 'Ask your kiln maker’s instructions and your safety guidance, which cover what to wear when looking at a firing. For comfort, turn your face away from the heat when you open a lid or door.',
      },
      {
        q: 'Can I use eye drops in a pottery studio?',
        a: 'Yes, as the label directs, once your hands are washed. Keep the bottle in a closed bag away from the kiln, since the label’s storage line reads: {storage}.',
      },
    ],
  },

  {
    slug: 'dry-eyes-for-glassblowers',
    title: 'Dry eyes for glassblowers',
    description:
      'Furnace and glory-hole heat, bright glowing glass and hot-shop fans all dry a glassblower’s eyes. What helps at the bench, and what to ask a doctor.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Glassblowers get dry eyes because a hot shop pulls water from the tear film from every direction: radiant heat from the furnace and glory hole, fans moving hot air, and long stares at bright, glowing glass that slow blinking. Shield your face when you reheat, step out of the hot shop on breaks, blink fully between gathers, keep your eye drops out of the heat, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why the hot shop is hard on the eyes' },
      {
        p: `The tear film’s oil layer slows evaporation from the water layer beneath it, and blinking spreads a fresh film every few seconds. Heat speeds evaporation, and so does air blowing across the face. A glassblowing studio combines both. The furnace holds molten glass around the clock, the glory hole roars every time you reheat a piece, and the ventilation fans that make the room bearable keep hot, dry air moving. Add the focus the work demands, and the eyes get fewer blinks in harsher air than almost anywhere else.`,
      },
      { h: 'At the furnace and the glory hole' },
      {
        p: `Gathering from the furnace and reheating at the glory hole put your face closest to the heat. Glassblowers turn the pipe and watch the glass the whole time, so the eyes take radiant heat directly.`,
      },
      {
        list: [
          `Use the hand shield or face shield your studio provides at the glory hole, and keep the opening between you and the heat as small as the work allows.`,
          `Turn your face slightly away between rotations rather than staring straight in.`,
          `Step back from the opening as soon as the piece is up to temperature.`,
          `Close your eyes for a second or two when you walk back to the bench, then blink slowly.`,
        ],
      },
      {
        p: `Glassworking eyewear (what tint, what it filters, when to wear it) is a question for your studio’s safety guidance and your eye doctor. This guide is only about comfort and dryness, and a lubricating drop isn’t protection from heat or light.`,
      },
      { h: 'Bright glass and long stares' },
      {
        p: `Hot glass glows, and reading its color tells you when it’s ready to shape. That means long, steady looks at a bright object, often from close range at the bench while you work jacks, blocks or paddles. People blink less while they concentrate, and squinting against the glow narrows the eye and cuts down on full blinks. Build a rhythm: each time the piece goes back into the glory hole, take one deliberate, complete blink. It costs nothing and becomes habit within a few sessions.`,
      },
      { h: 'Fans, heat and long sessions' },
      {
        p: `Big fans keep a hot shop workable, but they also blow across the bench and your face. Where you can, position the bench so the fan hits your body rather than your eyes. Long sessions without a break are the hardest; the room may reach temperatures well above what you’d choose anywhere else. Step outside or into the cold shop between pieces, and give your eyes a few minutes in cooler, still air.`,
      },
      { h: 'Flameworking and the cold shop' },
      {
        p: `Torchwork at a lampworking bench brings the flame closer to your face and the work closer to your eyes, often with beads or small sculptures a hand’s width away. Close focus slows blinking even more than at the furnace, and a ventilation hood pulls air past you. Take a break every bead or two to look across the room. In the cold shop, grinding and polishing can throw water spray and fine glass particles; ask your studio about eye protection there, and never rub your eyes with hands that have handled ground glass. Rinse with clean water if anything gets in.`,
      },
      { h: 'Keeping eye drops out of the heat' },
      {
        p: `Quell’s label says: {storage}. A hot shop can run far past the top of that range, and the area near the annealer is no better. Keep the bottle in a bag in the cold shop, an office or a car parked in the shade, and never on a shelf near the furnace. If the drops have been somewhere hot or look different, check them against the label: {doNotUse}. Quell starts out milky brown, so compare against that. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why heat matters for a bottle.`,
      },
      { h: 'Using a lubricating drop around glasswork' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `Use it on a break outside the hot shop, with clean hands, not at the bench.`,
          `Before the session, at a midday break and after cleanup is an easy way to spread three across a studio day.`,
          `The label also says: {tip}.`,
          `Read the caution before the first use: {warnings}.`,
          `The label doesn’t give directions for contact lenses or for use with other drops; ask your eye doctor or pharmacist.`,
        ],
      },
      {
        p: `The complete panel is on the [Drug Facts page](/drug-facts), and [dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace) covers other jobs with radiant heat.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Pain, light sensitivity, a change in vision, or a feeling that something is stuck after cold-shop work all need an eye doctor, not a drop. For ongoing dryness, the label says: {stopUse} Glassblowers who work for years in front of furnaces have good reason to keep regular eye exams and to raise their eyewear questions there. An optometrist or ophthalmologist can find the cause of any problem and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry glassblowing?',
        a: 'Radiant heat from the furnace and glory hole speeds evaporation from the eye, hot-shop fans keep dry air moving across your face, and long stares at glowing glass slow blinking.',
      },
      {
        q: 'What glasses should a glassblower wear?',
        a: 'Ask your studio’s safety guidance and your eye doctor, who can match eyewear to the kind of glasswork you do. Eye drops aren’t a substitute for eye protection.',
      },
      {
        q: 'Where should I keep eye drops in a glass studio?',
        a: 'Away from the hot shop. Quell’s storage line reads: {storage}. A bag in the cold shop or an office is a better spot than a shelf near the furnace.',
      },
      {
        q: 'How can I keep my eyes from drying out at the glory hole?',
        a: 'Use the shield your studio provides, keep your face turned slightly away between rotations, step back once the piece is hot, and take one full blink each time you reheat.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-real-estate-agent',
    title: 'Christmas gifts for a real estate agent',
    description:
      'Christmas gift ideas for a real estate agent who lives in the car and on the phone: driving gear, open-house helpers, desk comforts and eye-friendly extras.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Good Christmas gifts for a real estate agent make a day of driving, showing and paperwork easier: a sturdy phone mount and car charger, an insulated tumbler, a compact umbrella, comfortable shoes for open houses, or a well-made notebook for showing notes. If they’ve mentioned dry, tired eyes from screens and long drives, a bottle of lubricating eye drops can go in the stocking. Ask about allergies first, and order early.`,
      },
      { h: 'What an agent’s days actually look like' },
      {
        p: `A real estate agent’s office is often the front seat. Showings are spread across town, clients call and text between them, and contracts, disclosures and listing photos fill the evenings on a laptop. Gifts that make the car, the phone and the late screen session easier get used every day. So do small comforts for long weekends at open houses.`,
      },
      { h: 'Gifts for the car' },
      {
        list: [
          `A phone mount that holds steady on rough roads, plus a fast car charger and a spare cable.`,
          `A seat-back or trunk organizer for lockbox keys, flyers, booties and water bottles.`,
          `An insulated tumbler that fits the cupholder and keeps coffee hot between appointments.`,
          `A good ice scraper and snow brush, if they work somewhere winter means business.`,
          `A small trash bin or bag that keeps the car presentable for clients.`,
          `A sunshade for the windshield, so the car isn’t an oven after a long showing.`,
        ],
      },
      { h: 'Gifts for showings and open houses' },
      {
        list: [
          `A compact umbrella that opens fast for walking clients to the door.`,
          `Comfortable, polished shoes or quality insoles for a full Saturday on their feet.`,
          `A portable power bank, because phones die halfway through busy days.`,
          `A tote or bag that holds a tablet, a folder and a sign-in sheet without looking like a backpack.`,
          `A bright, rechargeable flashlight for vacant homes where the power is off.`,
        ],
      },
      { h: 'Gifts for the desk and the late paperwork' },
      {
        p: `Many agents finish their day at a kitchen table, writing offers and editing listing photos after the last client goes home. A laptop stand that raises the screen, a wireless keyboard and mouse, or a desk lamp with warm, adjustable light make those hours easier. A comfortable chair cushion and a pair of noise-canceling headphones help when the house is busy. If they keep paper notes, a quality notebook and pen they enjoy using will get carried to every showing.`,
      },
      { h: 'Are eye drops a good gift for a real estate agent?' },
      {
        p: `For an agent who has said their eyes feel dry or tired, they can be. Long drives with the vents running and late nights reading contracts on a screen are both hard on the tear film; [dry eyes for real estate agents](/guides/dry-eyes-for-real-estate-agents) goes through why. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, in a {size} bottle small enough for a bag or console. Before you give it, check a few things.`,
      },
      {
        list: [
          `The label warning reads: {warnings}. Ask quietly about egg or bird allergies if you don’t know.`,
          `The directions are: {directions}.`,
          `The label doesn’t give directions for contact lenses or for use with other eye drops, so anyone who wears lenses or already uses another drop should ask their eye doctor or pharmacist first.`,
          `The panel’s storage range is {storage}. A car parked in summer sun or a winter lot can go past either end, so suggest keeping the bottle in a bag rather than the glove box.`,
        ],
      },
      { h: 'Gifts from a client after closing' },
      {
        p: `If you’re a buyer or seller thanking your agent, a handwritten card that names something specific (the offer they negotiated, the inspection they talked you through) means a lot, and many agents keep those cards for years. A review on the platforms they use and a referral to a friend are gifts that help their business directly. If you want to add something, keep it modest: a gift card for coffee near their office, a local bakery box for their team, or a plant for their desk.`,
      },
      { h: 'Gifts from a brokerage or team leader' },
      {
        p: `Brokers and team leads buying for a whole office tend to choose practical, branded or shareable gifts: quality tumblers, power banks, notebooks, or a team lunch in December. A stocking-stuffer bundle of small useful items (a lens cloth, a charging cable, lip balm, hand warmers and a bottle of drops for anyone who’s asked) fits a budget across many agents. [Stocking stuffers for people who use eye drops](/guides/stocking-stuffers-for-eye-drop-users) has more ideas.`,
      },
      { h: 'Ordering in time for Christmas' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a different address from your own, so you can send it straight to the agent or their office. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, and December is a busy month for every package, so [order early](/guides/ordering-eye-drops-early-for-the-holidays). Unopened bottles can be refunded within {returnDays} days of delivery. [Buy from the home page](/#buy) when you’re ready.`,
      },
      { h: 'A note to include' },
      {
        p: `If drops are part of the gift, a line on the card helps them land well: that the drops are milky brown by design, that the directions are on the box, and that they can check the warning about egg or bird allergies. Anyone whose eyes hurt or whose vision changes should see an eye doctor rather than rely on a drop.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a real estate agent for Christmas?',
        a: 'Practical things for the car, showings and late paperwork: a phone mount and charger, an insulated tumbler, a compact umbrella, comfortable shoes or insoles, a power bank, or a laptop stand.',
      },
      {
        q: 'What is a good gift for a realtor from a client?',
        a: 'A handwritten thank-you card that names something specific, a review, or a referral to a friend. If you add something, keep it modest, like a coffee gift card or a bakery box for their office.',
      },
      {
        q: 'Should I leave eye drops in a real estate agent’s car as a gift?',
        a: 'It’s better to hand them over. Quell’s label says to store it this way: {storage}. A parked car can get hotter or colder than that. A bag that comes inside is a better place.',
      },
      {
        q: 'Can I ship Quell directly to my real estate agent’s office?',
        a: 'Yes. Quell ships to any US address, so you can enter the office address at checkout. Tracking comes by email, and no delivery date is promised, so order well ahead of Christmas.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-night-shift-worker',
    title: 'Christmas gifts for a night shift worker',
    description:
      'Gifts for someone who works nights: better daytime sleep, easier meals at 3 a.m., comfort on the drive home and small extras for tired, dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The most useful Christmas gifts for a night shift worker protect their daytime sleep and make the shift itself easier: blackout curtains, a contoured sleep mask, a white noise machine, an insulated lunch bag, a quality thermos, and comfortable shoes. Time is a gift too, like quiet mornings or handling an errand. If they’ve mentioned dry, tired eyes after shifts, lubricating eye drops can go in the stocking once you’ve asked about allergies.`,
      },
      { h: 'Gifts for daytime sleep' },
      {
        p: `People who work nights sleep while the rest of the house is awake and the sun is up. Anything that makes their bedroom darker, quieter and cooler during the day is a gift they’ll feel every morning.`,
      },
      {
        list: [
          `Blackout curtains or blackout liners for the bedroom windows, measured to fit.`,
          `A contoured sleep mask that doesn’t press on the eyes.`,
          `A white noise machine or a small fan for steady background sound.`,
          `Soft earplugs in a multi-pack.`,
          `A “sleeping, please don’t knock” sign for the front door, with a note to delivery drivers to leave packages.`,
          `Quality sheets and a pillow they choose themselves.`,
        ],
      },
      { h: 'Gifts for the shift itself' },
      {
        list: [
          `An insulated lunch bag and a set of leak-proof containers for a full meal at 3 a.m.`,
          `A thermos or travel mug that keeps coffee or tea hot for hours.`,
          `Supportive shoes or compression socks, if they’re on their feet.`,
          `A warm layer for cold break rooms and late-night walks across a parking lot.`,
          `A small, rechargeable reading light or headlamp for dark break areas.`,
          `A refill of their favorite snacks, the kind vending machines don’t carry.`,
        ],
      },
      { h: 'Gifts for the drive home' },
      {
        p: `The commute after a night shift happens just as the sun comes up, when they’re most tired. Good sunglasses for the morning glare are a thoughtful gift, and so is a car phone mount for navigation or a new podcast subscription to keep them alert. If you live with them, the biggest gift may be simple: have the house quiet, the coffee off, and the curtains drawn when they walk in. Our guide to [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the drive in the other direction.`,
      },
      { h: 'Gifts of time' },
      {
        p: `Night shift workers lose a lot of ordinary daytime life: appointments, errands and family events all collide with sleep. A coupon book you make yourself, offering to take the car in for service, pick up groceries or handle a school run, gives them back hours. So does planning the family celebration around their schedule. If they work on Christmas Eve or Christmas night, hold the gift opening for when they’ve slept.`,
      },
      { h: 'Are eye drops a good gift for someone who works nights?' },
      {
        p: `They can be, for someone who already talks about dry, gritty eyes at the end of a shift. Long hours under artificial light, at screens or in dry, heated or air-conditioned buildings, plus less sleep, all show up in the eyes. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) explains the timing questions. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. A few things to know before you wrap it up with the rest:`,
      },
      {
        list: [
          `Its caution reads: {warnings}. Ask about egg or bird allergies first.`,
          `Its directions: {directions}. Three spaced through a long night is easy to remember.`,
          `The label doesn’t give directions for contact lenses or for use with other eye drops; anyone who wears lenses or uses another drop should ask an eye doctor or pharmacist.`,
          `Each bottle is {size}, small enough for a scrub pocket, lunch bag or locker.`,
        ],
      },
      {
        p: `Pair it with the sleep mask and a lens cloth, and you’ve covered the eyes from both ends of the day.`,
      },
      { h: 'Gifts from coworkers on the same shift' },
      {
        p: `If you work nights alongside them, the gifts that land are the ones only another night worker would think of: a shared breakfast after the last shift before Christmas, a new coffee maker for the break room, or a box of good snacks for the unit. Keep individual gifts small. [Gifts for a coworker who works on screens](/guides/gifts-for-a-coworker-who-works-on-screens) has more ideas for people at monitors.`,
      },
      { h: 'Ordering and shipping' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including theirs if you’re sending it directly. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order early in December. A package left on the porch during their sleeping hours is one more reason for that sign on the door. Unopened bottles can be refunded within {returnDays} days of delivery. [Order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'What do you get someone who works night shift for Christmas?',
        a: 'Things that protect daytime sleep and ease the shift: blackout curtains, a contoured sleep mask, a white noise machine, an insulated lunch bag, a good thermos, and comfortable shoes.',
      },
      {
        q: 'What is a good gift for a night nurse or night worker who is always tired?',
        a: 'Time and quiet. Offer to run their daytime errands, keep the house quiet during their sleep, and plan family events around their schedule. Pair that with a sleep mask or blackout curtains.',
      },
      {
        q: 'Are eye drops a good stocking stuffer for a night shift worker?',
        a: 'For someone who already mentions dry, tired eyes after shifts, yes. Check the label’s caution about egg or bird allergies first, and skip it for contact lens wearers unless their eye doctor says otherwise.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-social-worker',
    title: 'Christmas gifts for a social worker',
    description:
      'Christmas gifts for a social worker who drives to visits, writes case notes for hours and carries a heavy load: practical, restful and eye-friendly ideas.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Good Christmas gifts for a social worker make the job’s long drives, long case notes and heavy days easier: an insulated tumbler, a sturdy bag for files and a laptop, a car phone mount, a comfortable desk setup, or something purely restful, like a massage or a quiet day off covered. If they’ve said their eyes feel dry or tired from screens and driving, lubricating eye drops can go in the stocking once you’ve asked about allergies.`,
      },
      { h: 'What social work asks of people' },
      {
        p: `Social workers work in hospitals, schools, child welfare, hospice, mental health clinics, courts and community agencies, and many of them split their time between home visits and a desk. A typical week can include hours on the road, meetings with families, and a pile of documentation that has to be entered on a computer, often after the visits are done. The emotional weight of the work comes home with them. Good gifts tend to address either the logistics or the rest.`,
      },
      { h: 'Gifts for the road and home visits' },
      {
        list: [
          `A car phone mount and charger for navigation between visits.`,
          `An insulated tumbler or thermos that fits the cupholder.`,
          `A durable, professional-looking bag that holds a laptop, folders and a water bottle.`,
          `A seat organizer for forms, pens, hand sanitizer and snacks.`,
          `A compact umbrella and a warm, packable layer for doorsteps in bad weather.`,
          `Sunglasses for long drives on bright winter days.`,
        ],
      },
      { h: 'Gifts for the documentation' },
      {
        p: `Case notes, assessments and reports pile up, and much of that work happens in a cubicle or at the kitchen table. A laptop stand that brings the screen up to eye level, a separate keyboard, or a desk lamp with warm, adjustable light make long writing sessions easier on the neck and eyes. Noise-canceling headphones help in a shared office. A well-made planner can be welcome too, for someone juggling many schedules besides their own.`,
      },
      { h: 'Gifts that help them rest' },
      {
        p: `Many social workers are better at caring for others than at stepping back themselves. Gifts that create real downtime are often the most valued: a massage or spa gift card, a class they’ve wanted to take, tickets to a show, a cozy blanket and a good book that has nothing to do with work. If you live with them, quietly taking over a chore for the month of December is a gift too. Our guide to [dry eyes for caregivers](/guides/dry-eyes-for-caregivers) touches on the same long days from a different angle.`,
      },
      { h: 'Are eye drops a good gift for a social worker?' },
      {
        p: `For someone who has mentioned dry, tired eyes after a day of driving and typing notes, they can be. Hours at a screen reduce blinking, and car vents and heated offices dry the air around the eyes. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, and each bottle is {size}, small enough for a work bag. Before giving it:`,
      },
      {
        list: [
          `Read its caution: {warnings}. Ask about egg or bird allergies if you aren’t sure.`,
          `The directions are: {directions}.`,
          `The label doesn’t give directions for contact lenses or for use with other eye drops, so anyone who wears lenses or already uses a drop should check with an eye doctor or pharmacist.`,
          `The storage range is {storage}, so suggest a bag or desk drawer rather than a car that sits outside during visits.`,
        ],
      },
      { h: 'Gifts from clients and families' },
      {
        p: `If you’re a client or a family member a social worker has helped, know that many agencies have policies on gifts, and some don’t allow staff to accept them at all. A handwritten card describing what their help meant is always welcome and is usually the right choice. If you’d like to do more, a note to their supervisor praising their work, or a donation of food or toys to their agency’s holiday drive, says thanks without putting them in an awkward position.`,
      },
      { h: 'Gifts from coworkers and supervisors' },
      {
        p: `Within a team, shared gifts often work well: a catered lunch, good coffee for the office, or a small stocking for each person with a lens cloth, lip balm, hand warmers and a bottle of drops for anyone who has mentioned dry eyes. [Stocking stuffers for people who use eye drops](/guides/stocking-stuffers-for-eye-drop-users) has more ideas in that range.`,
      },
      { h: 'Ordering ahead of the holidays' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so give December some room and [order early](/guides/ordering-eye-drops-early-for-the-holidays). Unopened bottles can be refunded within {returnDays} days of delivery. You can [buy from the home page](/#buy). Anyone whose eyes hurt or whose vision changes should see an eye doctor rather than rely on drops.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a social worker?',
        a: 'Something that eases long drives and documentation, like an insulated tumbler, a sturdy laptop bag or a laptop stand, or something restful, like a massage gift card or a class they’ve wanted to take.',
      },
      {
        q: 'Can social workers accept gifts from clients?',
        a: 'It depends on the agency, and many have policies limiting or banning gifts from clients. A handwritten card, or a note to their supervisor praising their work, is usually the right choice.',
      },
      {
        q: 'What do you give a social worker who is burned out?',
        a: 'Real rest: a massage or spa gift card, tickets to something fun, or taking a chore off their plate for a month. Practical items that shorten the workday help too.',
      },
    ],
  },

  {
    slug: 'how-do-lubricating-eye-drops-work',
    title: 'How do lubricating eye drops work?',
    description:
      'Lubricating eye drops add slick, water-holding ingredients and sometimes oil to the tear film, and blinking spreads them. What each part does, step by step.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Lubricating eye drops work by adding to the tear film, the thin layer that coats the front of the eye. Their lubricant ingredients make the surface slicker and help hold water there, and some drops also add oil to the top layer to slow evaporation. Each blink spreads the drop across the eye. They support the tear film for a while; they don’t change why it was drying out in the first place.`,
      },
      { h: 'Start with the tear film' },
      {
        p: `To see what a drop does, it helps to know what it lands on. The tear film has three layers. Closest to the eye is a mucus layer that helps tears cling to the surface. The middle, and thickest, is water. On top sits a thin oil layer that slows the water underneath from evaporating. Every blink sweeps the lids down and up, smoothing the layers into a fresh, even coat. When the air is dry or moving, when you stare at a screen and blink less, or when the oil layer is thin, the water evaporates faster than it’s replaced, and the eye feels dry, gritty or tired. [What is the tear film?](/guides/what-is-the-tear-film) goes into each layer.`,
      },
      { h: 'What happens in the first few seconds' },
      {
        list: [
          `The drop lands on the eye and pools briefly along the lower lid.`,
          `Your first blinks spread it from the inner corner across the whole surface.`,
          `Its ingredients mix with the tears already there, rather than replacing them.`,
          `Some of the liquid drains through the tiny openings near the inner corner of the lids, which is why you can sometimes taste a drop.`,
          `What stays behind adds slickness and moisture to the surface, so the lids glide more easily on the next blinks.`,
        ],
      },
      {
        p: `A brief blur while the drop spreads is common with thicker or oil-containing drops. [Should you blink after putting in eye drops?](/guides/should-you-blink-after-putting-in-eye-drops) covers what to do in those first moments.`,
      },
      { h: 'What the lubricant ingredients do' },
      {
        p: `On a Drug Facts label, each active ingredient has a Purpose printed beside it. In a lubricating drop, the Purpose is usually “Lubricant.” Ingredients in this group are typically water-loving: they thicken the drop slightly, make the eye’s surface slicker, and help hold water against it. That’s why a lubricating drop feels different from plain water or saline, which simply rinse and drain. Quell’s actives are {actives}. The first two are listed as lubricants; [the active ingredients on an eye drop label](/guides/the-active-ingredients-section) explains how to read that section on any box.`,
      },
      { h: 'What oil adds' },
      {
        p: `Some lubricating drops also contain an ingredient listed with the Purpose “Emollient,” usually an oil. Rather than working in the water layer, an emollient supports the oil layer on top, the part of the tear film that slows evaporation. Drops that combine water and oil are emulsions, and they often look milky rather than clear. Quell is one: it’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label says: {milky}. Its emollient is {mineralOil}, and its inactive ingredients include emu oil. [What are emulsion eye drops?](/guides/what-are-emulsion-eye-drops) covers the format.`,
      },
      { h: 'Why blinking matters as much as the drop' },
      {
        p: `A drop sitting on the eye does little until blinking spreads it. Each full blink pulls a fresh layer across the surface and squeezes a little oil from glands along the lid margins into the top layer. Partial blinks, the kind people make while reading a screen, leave the lower part of the eye uncovered. That’s why most advice about dry eyes includes looking away from the screen and finishing each blink. A lubricating drop works with your blinks, not instead of them. [How blinking spreads tears across the eye](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      { h: 'Why the effect wears off' },
      {
        p: `Tears are constantly made, spread, evaporated and drained, and a drop joins that flow. Over time the added ingredients drain away or thin out with fresh tears, and dry air keeps pulling water from the surface. That’s why labels give a schedule rather than a single dose. Quell’s directions read: {directions}. If you find yourself wanting drops far more often than the label says, that’s worth raising with an eye doctor rather than solving with more drops; [can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers the question.`,
      },
      { h: 'What lubricating drops don’t do' },
      {
        list: [
          `They don’t change what’s drying your eyes. A vent blowing on your face, a long screen session or a dry room will still be there after the drop.`,
          `They aren’t the same as drops sold for itching or other purposes, which contain different active ingredients for different jobs.`,
          `They aren’t a wash for flushing out debris or chemicals; that’s what clean water or an eyewash is for.`,
          `They aren’t a substitute for an eye exam when something is wrong. Pain, a change in vision, or dryness that keeps coming back are reasons to see an eye doctor.`,
        ],
      },
      { h: 'Making a drop more useful' },
      {
        p: `The same drop does more when the conditions around it are better. Point vents away from your face, take regular screen breaks, use a humidifier in dry rooms, and put the drop in properly so it lands in the eye, not on the lid. [How to make eye drops work better](/guides/how-to-make-eye-drops-work-better) has a checklist, and [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the technique.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell’s Uses read: {uses}. Before using it, read the caution: {warnings}. The label also says: {tip}. It doesn’t give directions for contact lenses, children or use with other drops; ask an eye doctor or pharmacist about those. And it says when to stop: {stopUse} The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How do lubricating eye drops work?',
        a: 'They add to the tear film. Lubricant ingredients make the eye’s surface slicker and help hold water there, oil-containing drops support the top layer that slows evaporation, and blinking spreads the drop across the eye.',
      },
      {
        q: 'Why do lubricating eye drops wear off?',
        a: 'Tears are always being made, spread, drained and evaporated, and a drop joins that flow. Its ingredients thin out and drain away, and dry air keeps pulling water from the eye, which is why labels give a schedule.',
      },
      {
        q: 'Do lubricating eye drops add moisture to your eyes?',
        a: 'They add liquid and ingredients that help hold water on the eye’s surface, and some also support the oil layer that slows evaporation. They don’t make your eyes produce more tears.',
      },
      {
        q: 'Why does it matter if an eye drop has oil in it?',
        a: 'The tear film’s top layer is oil, and it slows evaporation of the water beneath. An oil-containing drop, labeled with an Emollient purpose, is meant to support that layer rather than only the water.',
      },
    ],
  },

  {
    slug: 'types-of-lubricating-eye-drops',
    title: 'Types of lubricating eye drops, explained',
    description:
      'Lubricating eye drops come as thin solutions, gels, oil-containing emulsions and ointments, with or without preservatives. How each type differs.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Lubricating eye drops come in a few main types: thin water-based solutions, thicker gels, oil-containing emulsions, and ointments, which are technically a separate form. Each type can be preserved or preservative-free, and packaged in a multi-dose bottle or single-use vials. The differences are thickness, how long the drop stays on the eye, how much it blurs, and which layer of the tear film it targets.`,
      },
      { h: 'Why there are so many kinds' },
      {
        p: `Dryness has different everyday triggers, and people have different tolerances. Someone who needs clear vision at a screen may want a thin drop that blurs only briefly, while someone using a drop before bed may not care about blur at all. Some people react to preservatives; others want a bottle that travels well. The variety on the shelf is mostly a range of tradeoffs between thickness, convenience and what’s in the bottle.`,
      },
      { h: 'Thin solutions' },
      {
        p: `The most common type is a clear, water-based solution with one or more lubricant ingredients. These are the drops people usually picture: they spread easily, blur very little, and feel close to natural tears. The tradeoff is that thin drops drain and evaporate relatively quickly, so some people use them more often. [Artificial tears vs. lubricating eye drops](/guides/artificial-tears-vs-lubricating-eye-drops) explains why those two names usually describe the same product.`,
      },
      { h: 'Gels' },
      {
        p: `Gel drops are thicker, with a higher concentration of thickening lubricants. They sit on the eye longer and can blur vision for a few minutes after use, so many people use them when they don’t need sharp vision right away, like before sleep. They still come out of a dropper bottle. [Eye drops vs. eye gel](/guides/eye-drops-vs-eye-gel) compares the two directly.`,
      },
      { h: 'Emulsions: drops with oil' },
      {
        p: `Emulsion drops mix water and oil, which usually makes them look milky or cloudy instead of clear. They include an ingredient with the Purpose “Emollient” on the Drug Facts label, often an oil, meant to support the tear film’s top oil layer and slow evaporation. Quell is in this group. Its actives are {actives}, and the label says: {milky}. Some emulsions need shaking; follow the label on the box. [What are emulsion eye drops?](/guides/what-are-emulsion-eye-drops) and [are oil-based eye drops better for dry eyes?](/guides/are-oil-based-eye-drops-better-for-dry-eyes) go further.`,
      },
      { h: 'Ointments' },
      {
        p: `Ointments aren’t drops at all. They’re greasy, usually oil- or petrolatum-based, and squeezed from a small tube as a ribbon along the lower lid. They stay on the eye the longest and blur vision the most, which is why they’re typically used at night. If you’re weighing an ointment, [eye drops vs. eye ointment](/guides/eye-drops-vs-eye-ointment) lays out the differences.`,
      },
      { h: 'Preserved vs. preservative-free' },
      {
        p: `Any of these types can contain a preservative or not. Preservatives keep microbes from growing in a bottle that’s opened again and again. Preservative-free drops skip them and keep the contents clean in other ways: single-use vials that are thrown away after one use, or bottles built to keep contamination out. Some people who use drops several times a day prefer preservative-free. Quell is preservative-free. [What does preservative-free mean on eye drops?](/guides/what-does-preservative-free-mean) and [are preservative-free eye drops worth it?](/guides/are-preservative-free-eye-drops-worth-it) cover the details.`,
      },
      { h: 'Bottles vs. single-use vials' },
      {
        list: [
          `Multi-dose bottles hold many doses and are easy to carry; keep the tip clean, because every use is another chance for contamination.`,
          `Single-use vials hold one or two doses each and are thrown away after opening, which suits travel and people who prefer a fresh dose every time.`,
          `Quell comes in a {size} multi-dose bottle; its label says: {tip}.`,
        ],
      },
      {
        p: `[Single-use vials vs. multi-dose eye drop bottles](/guides/single-use-vials-vs-multi-dose-bottles) compares the two.`,
      },
      { h: 'Drops that aren’t lubricating drops' },
      {
        p: `Eye-care shelves also hold drops sold for other jobs: itching, contact lens rewetting, and drops with active ingredients meant for something other than dryness. Those aren’t types of lubricating drops, even when the box sits next to one. The Purpose column on the Drug Facts panel is the fastest way to tell. A lubricating drop lists Lubricant (and sometimes Emollient) there. [What does Purpose mean on a Drug Facts label?](/guides/what-does-purpose-mean-on-a-drug-facts-label) shows where to look.`,
      },
      { h: 'How to choose among the types' },
      {
        list: [
          `For daytime use when you need clear vision, thinner drops blur the least.`,
          `If dryness is worse in dry air or at screens and you want the oil layer supported, an emulsion is one option to consider.`,
          `For use before sleep, a gel or an ointment may suit, if the label or your doctor says it’s appropriate.`,
          `If you use drops several times a day, compare preservative-free options.`,
          `If you wear contact lenses, use other eye drops, or are choosing for a child, ask your eye doctor or pharmacist first; many labels, including Quell’s, don’t give directions for those.`,
        ],
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell’s Uses read: {uses}. Directions: {directions}. Read the caution first: {warnings}. If symptoms don’t settle, the label is clear: {stopUse} An eye doctor can find the cause and decide what to do. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What are the different types of lubricating eye drops?',
        a: 'Thin water-based solutions, thicker gels, and oil-containing emulsions, plus ointments, which are a separate form. Each can be preserved or preservative-free, in a bottle or single-use vials.',
      },
      {
        q: 'Which type of lubricating eye drop blurs vision the least?',
        a: 'Thin, clear solutions usually blur the least and the most briefly. Gels, emulsions and especially ointments are thicker and can blur vision for longer after use.',
      },
      {
        q: 'Is a milky eye drop a different type of lubricant?',
        a: 'Usually it’s an emulsion, a drop that mixes water and oil. Quell is one; its label says: {milky}.',
      },
      {
        q: 'How can I tell what type of eye drop I have?',
        a: 'Check the Drug Facts panel. The Purpose column shows whether it’s a Lubricant or Emollient, the actives show whether it contains oil, and the box tells you whether it’s preservative-free.',
      },
    ],
  },

  {
    slug: 'why-are-my-eyes-dry-after-a-nap',
    title: 'Why are my eyes dry after a nap?',
    description:
      'Half-closed lids, a nearby vent or fan, car or cabin air and the phone you grab on waking can all leave eyes gritty after a nap. What helps.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Eyes often feel dry after a nap because daytime sleep is light and short, and the lids may not close all the way while you doze on a couch, in a recliner or in a car seat. Air from a nearby vent, fan, space heater or cabin nozzle reaches whatever part of the eye is left uncovered. Reaching for your phone the moment you wake adds a stretch of reading with few full blinks.`,
      },
      { h: 'Why a nap is different from a night’s sleep' },
      {
        p: `At night you lie flat in a dark room, sink into deep sleep and stay put for hours. A nap usually happens somewhere else: propped against a couch arm, tipped back in a recliner, slumped against a car window or upright in an airline seat. Daytime sleep is lighter, and many people nap with the TV or a podcast still going, so they drift up toward waking several times. Each of those half-wakes can come with the eyes cracked open for a moment, looking at nothing, without a proper blink.`,
      },
      {
        p: `Posture plays a part too. With your head tipped back, the upper lids have farther to travel to meet the lower ones, and with a cheek pressed into a cushion, one lid can be nudged slightly up. People who wake with one eye drier than the other often find it was the side facing the room or the side mashed against the pillow.`,
      },
      { h: 'Lids that don’t fully close during light daytime sleep' },
      {
        p: `Nobody watches their own eyes while asleep, so the clues are indirect: a sandy feeling in a band across the middle of the eye, dryness that’s worse after naps in a reclined position, or someone in the house mentioning that they could see a sliver of white while you dozed. Lids can rest a hair apart during light sleep without your knowing. When that gap meets moving air, the exposed strip dries much faster than the parts tucked under the lids.`,
      },
      {
        list: [
          `Nap lying down when you can, with your head supported so it doesn’t tip far back.`,
          `Wear a soft sleep mask, or lay a folded, clean cloth lightly across your eyes. Either one shields them from moving air without pressing on the lids.`,
          `Turn your face away from the room’s airflow instead of toward it.`,
          `If the same eye is dry after every nap, mention it to an eye doctor, who can check how your lids close.`,
        ],
      },
      { h: 'Napping on the couch near a vent, fan or space heater' },
      {
        p: `Couches tend to sit against walls, and walls are where floor registers, baseboard heaters and window units live. Forty minutes with a warm register blowing up past the cushions puts dry air right where your face is. A space heater set beside the sofa for comfort, a ceiling fan still running from earlier in the day, or a tower fan aimed at the couch does the same thing. Before you lie down, hold a hand where your head will go. If you can feel air moving, your eyes will too.`,
      },
      {
        list: [
          `Lie with your head at the end of the couch farthest from the register or heater.`,
          `Swing the space heater toward your feet; [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) has more on placement.`,
          `Switch the ceiling fan off for the nap, or drop it to its lowest setting.`,
        ],
      },
      { h: 'Napping in a car or on a plane' },
      {
        p: `Dozing in the passenger seat or on a flight puts your face in a deliberate stream of air. Dashboard vents and the overhead nozzle above an airline seat are built to blow toward the person sitting there, and when your eyes are partly open and you aren’t blinking, that stream lands on the eye itself. Before you lean back, twist the airline nozzle closed or aim it at the window, and in a car point the dash vents at your chest or the windshield. [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) and [why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) go further into each setting.`,
      },
      { h: 'Screens right before, and the phone right after' },
      {
        p: `What happens on either side of the nap counts as much as the nap. Scrolling until your eyes close means starting the nap with a thinned tear film, because people blink less often and less completely while reading a screen. The nap then adds its own time without blinking. Plenty of people wake, grab the phone to check the time, and keep reading, which stretches the low-blink period a few more minutes before the eye has had any chance to recover. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side.`,
      },
      {
        list: [
          `Put the phone face down, out of arm’s reach, before you close your eyes.`,
          `Use a watch, a wall clock or a spoken alarm for the time, so waking doesn’t begin with a screen.`,
        ],
      },
      { h: 'What to do when you wake up from a nap' },
      {
        list: [
          `Keep your eyes shut for a few breaths, then open them slowly.`,
          `Blink fully and slowly about ten times, letting the lids meet each time.`,
          `Look across the room or out a window for a moment instead of at something close.`,
          `Wash your hands before touching your face, and resist rubbing, which drags the lids over a surface that’s already short on moisture.`,
          `If the room’s air was the problem, change the fan, heater or vent before your next nap.`,
        ],
      },
      { h: 'Using a lubricating drop after a nap' },
      {
        p: `Quell’s Uses read: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions read: {directions}. A drop after an afternoon nap is one of those three, not an extra, so if you already use one in the morning and one in the evening, fit the nap into that plan instead of adding to it. The handling rule matters when you’re groggy: {tip}. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you’re new to Quell, read the caution first: {warnings}. The label gives no directions for using a drop while asleep, with contact lenses, or alongside another eye drop; ask your eye doctor or pharmacist about any of those.`,
      },
      { h: 'How it compares with waking up dry in the morning' },
      {
        p: `Morning dryness reflects a whole night of bedroom air, and the fixes are about the bedroom; [dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up) walks through them. After a nap, the cause is usually one spot (the couch, the recliner or the seat), so moving a single fan or vent shows quickly whether it was the culprit. If naps leave your eyes dry and mornings do too, the common thread may be how your lids close rather than the room.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Mild grittiness that fades after some blinking is the usual pattern. Make an appointment if:`,
      },
      {
        list: [
          `Your eyes hurt after naps, rather than just feeling dry.`,
          `Someone has noticed your eyes stay partly open when you sleep.`,
          `One eye is reliably drier, or your vision stays blurry after blinking.`,
          `Dryness after naps keeps getting worse over a few weeks.`,
        ],
      },
      {
        p: `The label draws its own line: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel gritty after a nap?',
        a: `Light daytime sleep can leave the lids slightly apart, and a vent, fan, heater or car vent nearby dries the uncovered strip of eye. Picking up a phone the moment you wake adds more time without full blinks.`,
      },
      {
        q: 'Can your eyes be open while you nap?',
        a: `They can rest partly open during light sleep without your knowing, especially with your head tipped back in a recliner or seat. If someone notices it often, bring it up with an eye doctor.`,
      },
      {
        q: 'Should I use eye drops after a nap?',
        a: `You can if your eyes still feel dry after a minute of slow blinking. Quell’s directions read: {directions}. A post-nap drop counts as one of those three.`,
      },
      {
        q: 'Is it bad to nap on a plane with the air vent on?',
        a: `It makes dry eyes more likely, since the nozzle aims air at your face while you aren’t blinking. Close it or turn it toward the window before you lean back, and wear a soft sleep mask if you have one.`,
      },
    ],
  },

  {
    slug: 'should-i-switch-eye-drops',
    title: 'Should I switch eye drops if mine aren’t helping?',
    description:
      'Before switching eye drops, check how you use them and what’s drying your eyes. When a different drop makes sense, how to compare, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Switching eye drops can make sense, but check three things first: that you’re using your current drop as its label directs, that something around you (a vent, a screen, dry heat) isn’t undoing it, and that the label’s stop-use signs don’t apply. If those check out and the drop still doesn’t suit you, compare labels before you switch. If dryness lasts or worsens, see an eye doctor instead.`,
      },
      { h: 'Good reasons to try a different drop' },
      {
        list: [
          `It stings every time, not just for a moment, and you’ve ruled out a dirty tip or an expired bottle.`,
          `It blurs your vision longer than you can work with during the day.`,
          `It leaves a film or crust on your lashes that bothers you.`,
          `Its preservative bothers you, or you use drops often enough to want a preservative-free one.`,
          `Its format doesn’t fit your life, such as single-use vials you keep losing or a bottle you can’t squeeze easily.`,
          `Its label carries a caution that applies to you. Quell’s, for example, reads: {warnings}.`,
        ],
      },
      { h: 'Reasons that point somewhere other than a new drop' },
      {
        p: `A lot of “this drop doesn’t work” turns out to be about the setting. A different bottle won’t fix a heater blowing on your face, six hours at a screen without a break, or a ceiling fan running all night. Check those first. It’s also worth confirming the drop is landing in the eye; a drop that runs down your cheek hasn’t had a chance. [Why do my eyes still feel dry after eye drops?](/guides/why-do-my-eyes-still-feel-dry-after-eye-drops) walks through the common reasons, and [how to make eye drops work better](/guides/how-to-make-eye-drops-work-better) has the fixes.`,
      },
      { h: 'Signs to stop and see a doctor instead' },
      {
        p: `Some situations call for an exam, not a different bottle. Quell’s label puts it this way: {stopUse} Other lubricating drop labels carry similar wording. If your eyes hurt, your vision changes, or the dryness keeps worsening, switching products only delays finding the cause. An optometrist or ophthalmologist can find what’s behind it and decide what to do. [Why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) explains that number.`,
      },
      { h: 'How to compare your old drop with a new one' },
      {
        p: `Put the two Drug Facts panels side by side. You’re looking for real differences, not new packaging.`,
      },
      {
        list: [
          `Active ingredients and their Purpose: Lubricant, Emollient, or something else entirely.`,
          `Whether either contains oil, which usually makes a drop milky instead of clear.`,
          `Preservatives in the inactive ingredients, or a preservative-free claim on the box.`,
          `The directions: how many drops, how often.`,
          `Warnings and cautions, including allergy notes.`,
          `What the label says, or doesn’t say, about contact lenses and other drops.`,
        ],
      },
      {
        p: `If the actives and inactives are nearly identical, a switch may not change much. If one is a thin water-based drop and the other an oil-containing emulsion, they work on different layers of the tear film and may feel quite different. [How to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) explains each section.`,
      },
      { h: 'Don’t stack two drops without asking' },
      {
        p: `When people switch, they sometimes keep using the old drop too. Using two products together is something labels usually don’t address; Quell’s doesn’t give directions for use with other drops. Ask your eye doctor or pharmacist before combining them, and tell them every drop you use, including any prescription ones. If a doctor prescribed your current drop, check with them before changing anything. [Can I use Quell with other eye drops?](/guides/using-quell-with-other-eye-drops) covers this in more detail.`,
      },
      { h: 'Giving a new drop a fair trial' },
      {
        list: [
          `Use it exactly as its label directs, not more often.`,
          `Change one thing at a time; if you also start a humidifier the same week, you won’t know which helped.`,
          `Write down when you use it and how your eyes feel morning and evening. [Keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) shows an easy format.`,
          `Watch for anything that gets worse, and stop if the label’s stop-use signs appear.`,
        ],
      },
      { h: 'Don’t switch to a drop made for something else' },
      {
        p: `When a lubricating drop doesn’t seem to help, it’s tempting to grab whatever else is on the shelf. Drops sold for itching or other purposes have different active ingredients for different jobs, and they aren’t a stronger version of a lubricating drop. Read the Purpose column before you buy. A pharmacist can help you sort the shelf; [questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) lists useful ones.`,
      },
      { h: 'If you’re switching to Quell' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Directions: {directions}. It looks different from clear drops, and the label says: {milky}. The full panel is on the [Drug Facts page](/drug-facts). If it doesn’t suit you, unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
      },
    ],
    faq: [
      {
        q: 'How do I know if I should change my eye drops?',
        a: 'Consider it if your drop stings every time, blurs too long, leaves a film, or carries a caution that applies to you, after you’ve checked your technique and surroundings. If dryness persists or worsens, see an eye doctor instead.',
      },
      {
        q: 'Is it OK to switch between different eye drops?',
        a: 'Switching from one lubricating drop to another is common, but compare the Drug Facts panels first. Don’t combine two products without asking your eye doctor or pharmacist, and check with your doctor before changing a prescribed drop.',
      },
      {
        q: 'Do I need to stop my old eye drops before starting new ones?',
        a: 'Labels usually don’t cover using two drops together, and Quell’s doesn’t. Ask your eye doctor or pharmacist how to make the change, especially if one of the drops is prescribed.',
      },
      {
        q: 'How long should I try a new eye drop before deciding?',
        a: 'Use it as the label directs and watch how your eyes feel. Quell’s label says: {stopUse} Don’t keep trying new products past that point.',
      },
    ],
  },

  {
    slug: 'store-brand-vs-name-brand-eye-drops',
    title: 'Are store-brand eye drops as good as name brands?',
    description:
      'A store-brand eye drop can match a name brand’s active ingredients, but the inactives, preservatives and bottle may differ. How to compare the labels.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `A store-brand eye drop can have the same active ingredients, at the same strengths, as the name brand it sits beside, and when it does, the two are meant to do the same job. They can still differ in inactive ingredients, preservatives, thickness and bottle design. Compare the Drug Facts panels side by side. If the actives match and the rest suits you, the store brand may be all you need.`,
      },
      { h: 'What “store brand” means' },
      {
        p: `Pharmacies, grocery chains and warehouse clubs sell eye drops under their own labels. Many are designed to match a specific name-brand product, sometimes with a line on the box inviting you to compare. Over-the-counter eye drops in the US carry a standard Drug Facts panel, so the same sections appear on both boxes: active ingredients, purpose, uses, warnings, directions, other information and inactive ingredients. That makes a real comparison possible.`,
      },
      { h: 'What to compare first: the actives' },
      {
        p: `The active ingredients section lists each active, its percentage and its Purpose. If the store brand lists the same actives at the same percentages with the same purposes, it’s built to do the same thing. If any differ, it’s a different product, even if the box looks similar. [The active ingredients on an eye drop label](/guides/the-active-ingredients-section) and [what the percentages on eye drop labels mean](/guides/what-the-percentages-on-the-label-mean) explain how to read them.`,
      },
      { h: 'Where they can still differ' },
      {
        list: [
          `Inactive ingredients: buffers, salts, thickeners and preservatives can differ even when the actives match.`,
          `Preservatives: one may be preserved and the other preservative-free, which matters to people who use drops often or who react to a preservative.`,
          `Thickness and feel: two drops with the same actives can feel different on the eye if their other ingredients differ.`,
          `Packaging: dropper design, bottle size, and whether it comes in single-use vials.`,
          `Labeling details: whether it gives directions for contact lenses, and what cautions it carries.`,
        ],
      },
      {
        p: `[The inactive ingredients on an eye drop label](/guides/the-inactive-ingredients-section) covers that half of the panel.`,
      },
      { h: 'When a store brand is a reasonable choice' },
      {
        p: `If you already use a name-brand lubricating drop that suits you, and a store brand lists the same actives at the same strengths, the same preservative status and no inactive ingredient you know you react to, it’s a reasonable thing to try. Use it exactly as its own label directs. If it feels different, or your eyes are less comfortable, go back. A pharmacist can confirm whether two products match; it takes them a few seconds with both boxes in hand.`,
      },
      { h: 'When there’s no store-brand equivalent' },
      {
        p: `Not every drop has a store-brand version. Products with unusual formulas or distinctive ingredients often don’t, because there’s nothing standard to match. Quell is an example. Its actives are {actives}, and its inactive ingredients are {inactives}. It’s a preservative-free emulsion designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the label says: {milky}. A store-brand drop with the same actives would still differ in what else is in the bottle. [The natural ingredients in Quell](/guides/natural-ingredients-in-quell) explains them.`,
      },
      { h: 'Price isn’t the only difference' },
      {
        p: `Store brands are usually sold to cost less, and for many people that’s reason enough. When you compare, look at the cost per bottle size and how long a bottle lasts at the labeled directions, not only the shelf price. Online, add shipping. [Comparing eye drop prices? Count the shipping](/guides/comparing-eye-drop-prices-with-shipping) and [how long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) help with the math. Quell ships for {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
      { h: 'Questions to settle before you switch' },
      {
        list: [
          `Is my current drop prescribed? If so, ask the prescriber before swapping anything.`,
          `Do I wear contact lenses? Check that both labels give directions for lenses, or ask your eye doctor.`,
          `Do I have any allergies? Read every caution. Quell’s reads: {warnings}.`,
          `Am I using any other eye drops? Labels usually don’t cover combinations; ask a pharmacist.`,
        ],
      },
      { h: 'When neither brand is the answer' },
      {
        p: `If no lubricating drop, name brand or store brand, is helping, the problem may not be the bottle. Quell’s label says: {stopUse} An optometrist or ophthalmologist can find the cause and decide what to do. [Should I see a doctor or try eye drops first?](/guides/should-i-see-a-doctor-or-try-eye-drops-first) helps with that decision, and the full Quell panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Are store-brand eye drops the same as name brands?',
        a: 'Some have the same active ingredients at the same strengths, which means they’re meant to do the same job. Inactive ingredients, preservatives and bottle design can still differ, so compare the Drug Facts panels.',
      },
      {
        q: 'How do I compare a store-brand eye drop with a name brand?',
        a: 'Put the two Drug Facts panels side by side. Match the active ingredients, their percentages and purposes, then check the inactive ingredients, preservative status, directions and warnings.',
      },
      {
        q: 'Is there a store-brand version of Quell?',
        a: 'Quell is sold under its own name. Its formula combines its labeled actives with emu oil, manuka honey and other inactive ingredients, so a drop with the same actives would still have a different formula.',
      },
    ],
  },
]
