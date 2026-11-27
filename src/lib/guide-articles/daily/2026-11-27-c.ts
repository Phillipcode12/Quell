import type { Guide } from '@/lib/guide-types'
export const DAILY_20261127_C: Guide[] = [
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-bonney-lake-wa:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for BUCKLEY 1 NE, WA (GHCN USC00450945, cooperative station about a
   *   mile northeast of Buckley, the town east of Bonney Lake; there is no station
   *   in Bonney Lake itself), elev 685 ft; raw JSON at .daily-job/acis1127/USC00450945.json
   *   (normal highs: Jan 47.1 F, Jul 76.6, Aug 76.9, Dec 46.0; normal lows: Jan 33.9,
   *   Jul 51.8, Aug 51.5, Dec 33.3; precipitation: Nov 6.82, Jan 5.91, Dec 5.64,
   *   Mar 5.22, Jul 1.08, Aug 1.21; twelve months sum to 48.31 in; snowfall Jan 0.2,
   *   Feb 1.3, Mar 0.2, Nov 1.5, Dec 1.1, other months 0.0, summing to 4.3 in)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-bonney-lake-wa',
    title: 'Dry eye relief in Bonney Lake, Washington',
    description:
      'Bonney Lake gets about 48 inches of rain a year, yet July brings barely an inch. NOAA’s nearby numbers, and dry eye relief for each season.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Bonney Lake comes down to two seasons. From November to March the rain is outside and the furnace is inside, drying the air you breathe at home; in July and August the rain nearly stops. Keep heat and car vents off your face, blink fully at screens, and use a lubricating drop as its label directs. Finding the cause and deciding what to do belong to an eye doctor.`,
      },
      { h: 'The station behind the numbers' },
      {
        p: `Bonney Lake has no weather station of its own in NOAA’s records. The closest long-running one is the Buckley 1 NE cooperative station, about a mile northeast of Buckley, the neighboring town to the east, at about 685 feet. Its 1991–2020 climate normals, the same figures the National Weather Service publishes through NOWData, are a fair guide to the neighborhoods up the hill and the valley roads below:`,
      },
      {
        list: [
          `The twelve monthly normals add up to about 48.3 inches of precipitation.`,
          `November is the wettest month at 6.82 inches, followed by January (5.91) and December (5.64).`,
          `July is the driest at 1.08 inches, with August close behind at 1.21.`,
          `Normal highs peak at 76.9°F in August and bottom out at 46.0°F in December.`,
          `Normal lows sit near 33°F to 34°F from December through January.`,
          `Snowfall is light: the monthly normals total about 4.3 inches, most of it in November, December and February.`,
        ],
      },
      { h: 'Why do my eyes feel dry in Bonney Lake when it rains so much?' },
      {
        p: `Because the dryness that reaches your eyes is usually the air in the room, not the weather outside. With December lows around 33°F, a furnace or heat pump runs for months. Warming cold, damp outdoor air without adding moisture lowers its relative humidity, and a tear film exposed to that air thins faster between blinks. Your eyes can feel gritty by evening in a house that has been closed up since October.`,
      },
      {
        list: [
          `Point floor registers and ceiling vents away from the couch and the bed.`,
          `Run a clean humidifier in the bedroom; our guide to [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers settings and care.`,
          `Turn the thermostat down a few degrees at night.`,
          `Keep a wood stove or space heater from blowing straight at a chair you sit in for hours.`,
        ],
      },
      { h: 'The commute off the plateau' },
      {
        p: `Many Bonney Lake residents drive down to the valley and on toward Puyallup, Auburn, Kent or Tacoma for work. On a cold, wet morning the car does two things to your eyes at once: the defroster blasts warm, dry air at the windshield, and the dash vents tend to aim it straight at your face. Set the airflow to the floor and windshield, close the center vents, and keep the fan a step lower once the glass clears. On a long drive home in the dark, rain and oncoming headlights make you stare harder and blink less; a deliberate full blink at each stop helps.`,
      },
      {
        p: `If you work in Kent or Tacoma, our [Kent guide](/guides/dry-eye-relief-kent-wa) and [Tacoma guide](/guides/dry-eye-relief-tacoma-wa) look at those cities’ own stations and workplaces.`,
      },
      { h: 'July and August: the dry stretch' },
      {
        p: `The Buckley normals show July and August together bringing about 2.3 inches of rain, a third of what November brings alone. Highs in the mid-70s don’t sound harsh, but a few weeks of dry weather, sun and breeze on a lake, a trail or a ballfield all speed evaporation from the eye’s surface. Summer is also when people spend long afternoons outside without thinking about their eyes at all.`,
      },
      {
        list: [
          `Wraparound sunglasses cut wind and glare together on the water or a bike.`,
          `Sit out of the breeze from a fan or a boat’s speed when you can.`,
          `Use the car’s air conditioning on the recirculate setting with the vents angled down.`,
          `Bring the bottle inside after a hot day in the car; the storage line on the label gives the range.`,
        ],
      },
      { h: 'Screen days in a gray winter' },
      {
        p: `Short, dark days push more of life onto screens: remote work, homework, evenings of streaming. Looking at a screen slows the blink rate, and a half-finished blink doesn’t spread the tear film fully. Look away from the screen every so often, close your eyes completely for a second, and keep the monitor a little below eye level so your lids cover more of the eye. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the mechanics.`,
      },
      { h: 'Using Quell, by its label' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. {directions}. The label also says: {tip}.`,
      },
      {
        p: `There’s a caution as well: {warnings}. For storage the label says: {storage}. A bottle left in a car on a cold January night at the plateau or in a hot parking lot in August can move outside that range, so keep it in a pocket or bag. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered to Bonney Lake' },
      {
        p: `We ship from Brentwood, Tennessee, to Bonney Lake, Buckley, Sumner and every other US address. Checkout is as a guest, standard shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, so order before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Local details are on the [Bonney Lake page](/eye-drops/bonney-lake-wa) and the [Washington page](/eye-drops/state/washington).`,
      },
      { h: 'Seeing a doctor about dry eyes in Bonney Lake' },
      {
        p: `A drop can relieve dryness. It can’t tell you why your eyes are dry. If dryness keeps returning, gets worse, or comes with pain or blurred vision, an eye doctor can find the cause and decide what to do. The label is specific: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Bonney Lake, Washington get?',
        a: 'Bonney Lake has no station of its own. NOAA’s 1991–2020 normals for the Buckley 1 NE station, just east, add up to about 48.3 inches a year, with November the wettest month at 6.82 inches.',
      },
      {
        q: 'What is the driest month near Bonney Lake?',
        a: 'July. The Buckley 1 NE normals give July 1.08 inches of precipitation and August 1.21, compared with 6.82 inches in November.',
      },
      {
        q: 'Does it snow much in Bonney Lake?',
        a: 'Not much at the nearest station. The Buckley 1 NE normals list about 4.3 inches of snowfall in a year, mostly in November, December and February.',
      },
      {
        q: 'Who should I see for dry eyes in Bonney Lake?',
        a: 'Finding the cause of dry eyes and deciding what to do is an eye doctor’s job, so start with an optometrist or ophthalmologist near you. A lubricating drop like Quell is for relieving dryness as its label directs, not a replacement for that visit.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-baytown-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for BAYTOWN, TX (GHCN USC00410586, cooperative station), elev 26 ft;
   *   raw JSON at .daily-job/acis1127/USC00410586.json
   *   (normal highs: Jan 62.9 F, Jun 89.2, Jul 91.5, Aug 92.3, Sep 88.5, Dec 64.5;
   *   normal lows: Jan 41.4, Jul 74.6, Aug 74.3, Dec 43.6; precipitation: Jun 7.08,
   *   Aug 6.82, Sep 6.41, Oct 6.13, May 6.01, Feb 3.78, Mar 3.94; twelve months sum
   *   to 64.73 in; snowfall 0.0 in every month, so no snowfall is stated)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-baytown-tx',
    title: 'Dry eye relief in Baytown, Texas',
    description:
      'Baytown gets about 65 inches of rain and August highs above 92°F, so most dryness comes from air conditioning. NOAA’s numbers and practical relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Baytown starts indoors. NOAA’s normals give the town about 65 inches of rain a year and August highs of 92.3°F, so the air outside is rarely dry; the dryness comes from air conditioning that runs from spring into fall. Angle vents away from your face, blink fully at screens, and use a lubricating drop as its label directs. An eye doctor finds the cause and decides what to do.`,
      },
      { h: 'Baytown by NOAA’s numbers' },
      {
        p: `The Baytown cooperative station sits near sea level, at about 26 feet. NOAA’s 1991–2020 climate normals for it, the same records the National Weather Service serves through NOWData, show a hot, wet year with no real dry season:`,
      },
      {
        list: [
          `The monthly normals add up to about 64.7 inches of precipitation.`,
          `June is the wettest month at 7.08 inches, and August (6.82), September (6.41), October (6.13) and May (6.01) each pass six.`,
          `February is the driest month, and even it brings 3.78 inches.`,
          `Normal highs reach 91.5°F in July and 92.3°F in August.`,
          `Summer nights stay warm, with normal lows of about 74°F in July and August.`,
          `January is mild: a normal high of 62.9°F and a low of 41.4°F.`,
        ],
      },
      { h: 'Why are my eyes dry in a humid place like Baytown?' },
      {
        p: `Air conditioning cools air by pulling water out of it, which is what makes a humid day bearable indoors. That drier, moving air then passes over your eyes for hours. When summer lows stay near 74°F, the system barely rests even at night. A bedroom vent aimed at the pillow, an office supply register over your desk, or a car vent at eye level can all leave your eyes scratchy while the air outside feels thick. Our [Houston guide](/guides/dry-eye-relief-houston-tx) looks at the same pattern across the city to the west.`,
      },
      { h: 'Plant shifts, turnarounds and long hours' },
      {
        p: `If you work shifts at an industrial site, in a control room or at the docks, the conditions vary, but some show up often: air-conditioned control rooms with wall screens and monitors, hot outdoor work in a hard hat and safety glasses, and twelve-hour rotations that push sleep around. A few habits travel with you:`,
      },
      {
        list: [
          `In a control room, set screens slightly below eye level and look across the room every so often.`,
          `Outside, wraparound safety eyewear that fits well cuts both wind and dust.`,
          `Moving from a hot unit into a cold trailer and back is hard on the eyes; give them a few slow blinks when you step in.`,
          `Wash your hands before touching your eyes or the dropper, especially after handling tools or chemicals.`,
        ],
      },
      {
        p: `If any chemical, dust or debris gets in your eye at work, a lubricating drop is the wrong response. Use the site’s eyewash and follow your site’s procedures, then get medical care; for a chemical, Poison Control (1-800-222-1222) can tell you what to do next.`,
      },
      { h: 'Fall rain and mild winters' },
      {
        p: `October still averages 6.13 inches, so fall in Baytown doesn’t bring the dry spell that it does farther north and west. Winter does change one thing: on the few cold nights, when lows drop into the low 40s, the heat comes on, and a house that has been on air conditioning since April suddenly runs on dry, warm air. Those first heating nights are often when people notice their eyes on waking. Keep the bedroom a few degrees cooler and the vents pointed down.`,
      },
      { h: 'Out on the water and at the ballfield' },
      {
        p: `Baytown is close to the water, and summer weekends mean boats, fishing and outdoor games in strong sun. Glare off the water makes you squint, and wind at speed dries the eye’s surface even in humid air. Polarized wraparound sunglasses help on both counts, and a cap brim shades the eyes from overhead sun. Our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more for a day on the water.`,
      },
      { h: 'The Quell label, in its own words' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line: {uses}. Its directions: {directions}. And when using it: {tip}.`,
      },
      {
        p: `Two more lines matter in a Gulf Coast summer. The warning: {warnings}. Storage: {storage}. A Baytown car in August easily passes the top of that range, so carry the bottle with you rather than leaving it in the console. See the [Drug Facts page](/drug-facts) for the full panel.`,
      },
      { h: 'Ordering from Baytown' },
      {
        p: `We ship from Brentwood, Tennessee, to any US address, including Baytown, Mont Belvieu and Highlands. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. Local pages: [Baytown](/eye-drops/baytown-tx) and [Texas](/eye-drops/state/texas).`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `Drops relieve dryness; they don’t explain it. An eye doctor can find the cause and decide what to do, especially when dryness is constant or worse each week. Per the label: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Baytown, Texas get a year?',
        a: 'NOAA’s 1991–2020 normals for the Baytown station add up to about 64.7 inches a year. June is the wettest month at 7.08 inches and February the driest at 3.78.',
      },
      {
        q: 'How hot does Baytown get in the summer?',
        a: 'The Baytown station’s normal high is 91.5°F in July and 92.3°F in August, and normal lows in those months stay near 74°F, so air conditioning runs day and night.',
      },
      {
        q: 'Why do my eyes burn in the air conditioning in Baytown?',
        a: 'Air conditioning pulls moisture out of the air as it cools it, and a vent blowing toward your face speeds evaporation from the tear film. Aim vents down, blink fully, and see an eye doctor if burning keeps up.',
      },
      {
        q: 'Where can I get help for dry eyes in Baytown?',
        a: 'Start with an optometrist or ophthalmologist near you, since finding the cause and deciding what to do is their job. Quell is a lubricating drop that relieves dryness as its label directs.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-kissimmee-fl:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for KISSIMMEE 2, FL (GHCN USC00084625, cooperative station; "2" is a
   *   station number, not a distance), elev 60 ft; raw JSON at
   *   .daily-job/acis1127/USC00084625.json
   *   (normal highs: Jan 71.8 F, Jun 90.0, Jul 91.5, Aug 91.4, Sep 89.5, Dec 73.5;
   *   normal lows: Jan 48.3, Feb 50.7, Jul 73.5, Aug 74.1, Dec 51.5; precipitation:
   *   Jun 9.18, Aug 8.38, Jul 7.21, Sep 5.88, Nov 1.99, Dec 2.15, Feb 2.37, Apr 2.43,
   *   Jan 2.67; twelve months sum to 52.57 in; Jun–Sep sum 30.65; Nov–Feb sum 9.18;
   *   snowfall 0.0 in every month, so no snowfall is stated)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-kissimmee-fl',
    title: 'Dry eye relief in Kissimmee, Florida',
    description:
      'In Kissimmee, November through February together get as much rain as June alone. NOAA’s numbers, the dry season, and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Kissimmee depends on the season. NOAA’s normals show November through February together bringing about 9.2 inches of rain, the same as June alone, so winter is the dry stretch; summer’s dryness comes from air conditioning. Keep vents off your face, wear sunglasses outside, and use a lubricating drop as its label directs. Finding the cause belongs to an eye doctor.`,
      },
      { h: 'What the Kissimmee station shows' },
      {
        p: `NOAA keeps 1991–2020 climate normals for the Kissimmee 2 cooperative station (the 2 is a station number, not a distance), at about 60 feet. These are the same figures the National Weather Service shows through NOWData:`,
      },
      {
        list: [
          `The twelve months add up to about 52.6 inches of precipitation.`,
          `June is the wettest month at 9.18 inches, then August (8.38), July (7.21) and September (5.88).`,
          `Those four months bring about 30.7 inches, more than half the year.`,
          `November is the driest month at 1.99 inches, with December at 2.15 and February at 2.37.`,
          `Normal highs run about 91.5°F in July and August; January’s normal high is 71.8°F.`,
          `January’s normal low is 48.3°F, the coolest of the year.`,
        ],
      },
      { h: 'Kissimmee’s dry season, November to April' },
      {
        p: `People picture Central Florida as damp all year, but the station tells a split story. From November into April, monthly rain mostly stays between about 2 and 3 inches, and the cool, clear mornings that make winter pleasant also mean drier air. April is dry too, at 2.43 inches, and by then highs are back to 83°F. Long afternoons outside in sun and breeze, with less moisture in the air, are when the tear film thins fastest between blinks.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on bright, breezy winter afternoons.`,
          `Take a few slow, complete blinks when you step into shade.`,
          `On cool mornings, a car heater aimed at your face dries your eyes fast; point it at the floor.`,
          `Open the windows on mild days instead of running the heat.`,
        ],
      },
      { h: 'Summer: wet outside, dry inside' },
      {
        p: `June to September flips it. Afternoon storms soak the area, and highs in the low 90s keep air conditioning on nearly around the clock, since August lows stay near 74°F. That cooled air has had water pulled from it, and a vent that blows across your face at the kitchen table or the steering wheel dries the eye’s surface while the air outside feels heavy. Close or redirect the vent nearest the spot where you sit longest.`,
      },
      { h: 'Working in hospitality and vacation homes' },
      {
        p: `If you work in a hotel, a vacation home or an attraction, the job probably shares some of these conditions: long shifts moving between hot parking lots and cold lobbies, cleaning rooms with fans and AC running, outdoor attraction work in strong sun, and front-desk screens. Each step from heat into chilled air is a change your eyes notice. Keep a bottle in a bag rather than a hot car, wash your hands before touching your eyes, and take short breaks from bright screens. If a cleaning product splashes in your eye, rinse with water and call Poison Control at 1-800-222-1222 or get medical care. A drop isn’t for that.`,
      },
      {
        p: `Visiting rather than living here? Our [Orlando guide](/guides/dry-eye-relief-orlando-fl) covers the hotel and convention side of the region, and [shipping eye drops to a vacation rental](/guides/shipping-eye-drops-to-a-vacation-rental) explains what to put on the label.`,
      },
      { h: 'Lake days and fishing' },
      {
        p: `With lakes all around the area, a morning on the water means glare from below and wind at speed. Polarized sunglasses cut the reflected light, and a hat brim takes some of the overhead sun. Keep the bottle in a shaded, dry pocket of the boat bag, and wipe salt or sunscreen off your fingers before you use it.`,
      },
      { h: 'What the Quell label tells you' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Uses: {uses}. Directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The warning reads: {warnings}. The storage line reads: {storage}. A parked car in a Kissimmee summer gets far hotter than that, so the bottle belongs in your bag. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Kissimmee' },
      {
        p: `We ship from Brentwood, Tennessee, to Kissimmee, St. Cloud, Celebration and any other US address. Checkout is as a guest. Shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, though no delivery date is promised. Unopened bottles are refundable within {returnDays} days of delivery without sending them back. See the [Kissimmee page](/eye-drops/kissimmee-fl) and the [Florida page](/eye-drops/state/florida).`,
      },
      { h: 'Dry eye care in Kissimmee starts with an exam' },
      {
        p: `Lubricating drops relieve dryness; finding out why your eyes are dry takes an eye doctor, who can find the cause and decide what to do. The label says: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'What is the dry season in Kissimmee, Florida?',
        a: 'Roughly November through April. NOAA’s 1991–2020 normals for the Kissimmee 2 station give November 1.99 inches, December 2.15 and February 2.37, against 9.18 inches in June.',
      },
      {
        q: 'How much rain does Kissimmee get a year?',
        a: 'The Kissimmee 2 station’s monthly normals add up to about 52.6 inches, and June through September bring more than half of it.',
      },
      {
        q: 'Why do my eyes feel dry in Kissimmee in the summer?',
        a: 'Mostly the air conditioning. With August highs near 91°F and lows near 74°F, it runs nearly nonstop, and the cooled, drier air speeds evaporation from your eyes when a vent points at you.',
      },
      {
        q: 'Who can check my dry eyes in Kissimmee?',
        a: 'An optometrist or ophthalmologist is the person to find the cause and decide what to do. A lubricating drop like Quell relieves dryness as its label directs, and doesn’t replace that visit.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-longmont-co:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for LONGMONT 2 ESE, CO (GHCN USC00055116, cooperative station about two
   *   miles east-southeast of town), elev 4950 ft; raw JSON at
   *   .daily-job/acis1127/USC00055116.json
   *   (normal highs: Jan 44.5 F, Jul 90.8, Aug 87.8, Dec 44.8; normal lows: Jan 14.4,
   *   Feb 17.1, Jul 55.4, Dec 14.5; precipitation: Apr 2.04, May 1.97, Aug 1.95,
   *   Jun 1.75, Dec 0.46, Jan 0.56, Feb 0.57, Nov 0.75; twelve months sum to
   *   15.21 in; Nov–Feb sum 2.34; snowfall "M" in every month, so none is stated)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-longmont-co',
    title: 'Dry eye relief in Longmont, Colorado',
    description:
      'Longmont gets about 15 inches of precipitation a year and January nights near 14°F. NOAA’s numbers for the station, and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Longmont means dealing with dry air most of the year. NOAA’s normals for the station just outside town total about 15 inches of precipitation, and December brings less than half an inch, while January nights near 14°F keep the furnace running. Humidify the bedroom, keep vents off your face, and use a lubricating drop as its label directs. An eye doctor finds the cause and decides what to do.`,
      },
      { h: 'Where the Longmont numbers come from' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Longmont 2 ESE cooperative station, about two miles east-southeast of town at about 4,950 feet, are the source here; the National Weather Service publishes the same figures through NOWData. The station has no snowfall normals, so this page gives none.`,
      },
      {
        list: [
          `The twelve monthly normals add up to about 15.2 inches of precipitation.`,
          `April is the wettest month at 2.04 inches, with May (1.97) and August (1.95) close behind.`,
          `December is the driest at 0.46 inches, then January (0.56) and February (0.57).`,
          `November through February together bring only about 2.3 inches.`,
          `July’s normal high is 90.8°F; its normal low is 55.4°F.`,
          `January’s normal high is 44.5°F and its normal low is 14.4°F.`,
        ],
      },
      { h: 'A thirty-degree swing every day' },
      {
        p: `The most telling Longmont number isn’t rain. It’s the gap between day and night. In January the normal high and low are about 30 degrees apart; in July the gap is about 35. That swing shapes how the house runs: the furnace kicks on hard before dawn in winter, and a summer evening can cool off enough to open every window. Each time cold, dry outdoor air is warmed indoors, its relative humidity falls further. Expect your eyes to feel it first thing in the morning in winter, after hours of heated air in a closed bedroom.`,
      },
      {
        list: [
          `Run a clean humidifier in the bedroom from November through March.`,
          `Lower the thermostat at night instead of letting the furnace cycle all night.`,
          `Keep the bed away from a floor register.`,
          `In the morning, blink slowly a few times before you reach for a screen.`,
        ],
      },
      { h: 'Winter driving on the Front Range' },
      {
        p: `A commute toward Boulder, Denver or anywhere else on the northern Front Range starts in the cold for half the year. With lows in the teens, the car’s heater runs hot, and its air is about as dry as air gets. Send it to the windshield and floor, close the center vents, and let a seat heater do more of the warming. Low winter sun in the morning or evening also makes you squint; good sunglasses in the car help.`,
      },
      {
        p: `Our [Boulder guide](/guides/dry-eye-relief-boulder-co) covers that city’s own station and its trail life, and the [Greeley guide](/guides/dry-eye-relief-greeley-co) covers the plains to the east.`,
      },
      { h: 'Spring storms, then a hot dry July' },
      {
        p: `April and May bring the year’s most moisture, about four inches between them, often as wet spring storms. Then July heat arrives: a normal high just over 90°F with low humidity, sun at about 4,950 feet, and long evenings at a park, a reservoir or a backyard grill. Wind and sun on a bike ride or at a ballgame dry the eye’s surface quickly. A hat, wraparound sunglasses and some time in the shade help, and evening is a gentler time for long outdoor plans than mid-afternoon.`,
      },
      { h: 'Labs, offices and long screen days' },
      {
        p: `Plenty of Longmont jobs are indoor work at desks and benches, and much of the Front Range works on screens. Dry outdoor air becomes even drier once it’s heated or cooled for an office, and staring at a monitor slows your blink rate. Put the monitor slightly below eye level, look across the room every so often, and finish each blink. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has a full workday routine.`,
      },
      { h: 'Quell’s label at a glance' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. What the panel says it’s for: {uses}. How to use it: {directions}. A handling note: {tip}.`,
      },
      {
        p: `It also warns: {warnings}. And for storage: {storage}. A car parked at a trailhead on a January morning can drop well below that range, so don’t leave the bottle in the glove box. Everything else is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Longmont' },
      {
        p: `We ship from Brentwood, Tennessee, to Longmont, Niwot, Firestone and every other US address. Checkout is as a guest. Shipping is {shipping}, with free shipping on {freeBottles} or more bottles. Tracking arrives by email, and no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. More on the [Longmont page](/eye-drops/longmont-co) and the [Colorado page](/eye-drops/state/colorado).`,
      },
      { h: 'When the air isn’t the whole story' },
      {
        p: `If dryness keeps returning even with a humidifier and good habits, or if it comes with pain or vision changes, see an eye doctor; they can find the cause and decide what to do. The label puts it this way: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'How much precipitation does Longmont, Colorado get?',
        a: 'NOAA’s 1991–2020 normals for the Longmont 2 ESE station add up to about 15.2 inches a year, with April the wettest month at 2.04 inches.',
      },
      {
        q: 'What is the driest month in Longmont?',
        a: 'December, at 0.46 inches in the Longmont 2 ESE normals. January (0.56) and February (0.57) are nearly as dry.',
      },
      {
        q: 'How cold does Longmont get at night in winter?',
        a: 'The station’s normal January low is 14.4°F and December’s is 14.5°F. Nights that cold keep the furnace running, which dries the air indoors.',
      },
      {
        q: 'Where do I go for dry eyes in Longmont?',
        a: 'For a cause and a plan, see an optometrist or ophthalmologist in the area. Quell is an over-the-counter lubricating drop for relieving dryness as its label directs, not a substitute for an exam.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-poultry-farm-workers',
    title: 'Dry eyes for poultry farm workers',
    description:
      'Litter dust, ammonia and heated houses in winter wear on the eyes in poultry work. What helps on a shift, and when fumes call for a doctor, not drops.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Poultry farm workers get dry, irritated eyes from three things: fine dust from litter, feed and feathers; ammonia that builds up when houses are closed against the cold; and long shifts in heated or fan-driven air. Wear close-fitting eyewear, wash before touching your eyes, and use a lubricating drop as its label directs. Eyes that burn from fumes need fresh air, a rinse and medical advice, not drops.`,
      },
      { h: 'Why poultry houses are hard on the eyes' },
      {
        p: `A poultry house is built to keep birds comfortable, which isn’t the same as keeping people comfortable. Thousands of birds, bedding on the floor and constant ventilation mean the air is always moving and always carrying something. Every time birds flap or a worker walks a row, dust lifts from the litter. Fans pull it across the house, and some of it lands on the surface of your eyes, where it can make them feel gritty and dry even when the air itself isn’t especially dry.`,
      },
      {
        list: [
          `Litter dust: fine particles from bedding, droppings and feathers, stirred up by every movement.`,
          `Feed dust: released when bins are filled, lines run, or feed is spilled and walked on.`,
          `Ammonia: a sharp-smelling gas given off by litter, strongest when ventilation is turned down.`,
          `Moving air: tunnel fans and side inlets keep a steady breeze across the house.`,
          `Heat: brooders and furnaces run hard for young birds and in cold months.`,
        ],
      },
      { h: 'Winter: closed houses and ammonia' },
      {
        p: `Cold weather changes the air inside. To hold heat, ventilation is often turned down to minimum, and furnaces or brooders warm the house. Two things follow. Heated air carries less relative humidity, so the tear film evaporates faster between blinks. And with less fresh air coming in, ammonia from the litter can build up, which many workers notice as stinging, watering eyes the moment they walk in on a cold morning.`,
      },
      {
        p: `Watery eyes from ammonia aren’t a sign your eyes are well lubricated; they’re a sign something is irritating them. Tell whoever runs the farm if the air smells sharp or makes your eyes sting, since ventilation settings are their call. If the fumes make your eyes burn and it doesn’t ease once you’re outside, rinse them with clean water, call Poison Control at 1-800-222-1222, or get medical care. A lubricating drop isn’t for chemical exposure.`,
      },
      { h: 'Summer: tunnel fans and heat' },
      {
        p: `Hot months bring the opposite setup: big fans at one end of the house pull air through at speed to cool the birds. Walking into that breeze for hours dries the eyes the way wind does outside, and the air carries dust straight at your face as you walk the rows toward the fans. Some habits help:`,
      },
      {
        list: [
          `Walk with the airflow when you can, so it hits the back of your head rather than your eyes.`,
          `Wear wraparound glasses or goggles if the farm provides them; side coverage matters more than tint.`,
          `Step into the control room or out of the house for a break, close your eyes for a few seconds, and blink fully.`,
          `Rinse your face with clean water at the end of the shift before you rub your eyes.`,
        ],
      },
      { h: 'Catching, cleanout and other dusty jobs' },
      {
        p: `Some tasks put far more dust in the air than daily walks do. Loading birds, cleaning out litter between flocks, scraping, and washing down a house with a pressure washer all throw particles and spray around at face height. These are the times to wear the most protection the farm offers and to stay out of the thickest air when it isn’t your turn. If grit, litter or wash water gets into your eye and doesn’t rinse out with clean water, or if your eye hurts, stays scratchy, or your vision changes, get it looked at. Our guide to [why eyes feel gritty](/guides/why-do-my-eyes-feel-gritty) explains the difference between dryness and something actually in the eye.`,
      },
      { h: 'Hands, gloves and the bottle' },
      {
        p: `Poultry work keeps your hands dirty, and a dropper bottle is easy to contaminate. Before you use any eye drop, take off your gloves, wash your hands with soap and water, and dry them. Quell’s label is direct on this point: {tip}. Keep the bottle in a clean pocket or a bag in the truck’s cab, not on a ledge in the house where dust settles. Don’t share it with coworkers, and don’t set it down on a feed bin or a work surface.`,
      },
      {
        p: `Temperature matters too. The label’s storage line reads: {storage}. A truck parked by the houses in summer or left in an unheated shed in January can move past either end, so carry the bottle with you or keep it in the farm office.`,
      },
      { h: 'Using a lubricating drop around shifts' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label gives its Uses as: {uses}. {directions}. One way to fit that into a working day: once before going in, once at a break after washing up, and once after the shift. Read the warning before you start too: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `A drop doesn’t clean dust out of an eye or neutralize ammonia. It’s for the dryness that builds over hours in moving, heated air.`,
      },
      { h: 'After work and on days off' },
      {
        p: `Many poultry workers live on or near the farm, so the dry air doesn’t stop at the house door. A wood stove or furnace at home in winter dries the air again, and a long evening on the phone or TV slows your blinking. Point heat vents away from the couch, run a humidifier in the bedroom, and take short screen breaks. Our [dairy farmers in winter](/guides/dry-eyes-for-dairy-farmers-in-winter) guide covers barn work with cattle, and [dry eyes for farmers](/guides/dry-eyes-for-farmers) covers field work.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps coming back, pain, light sensitivity, or blurred vision that doesn’t clear with blinking all mean it’s time for an exam. An eye doctor can find the cause and decide what to do. The label’s rule: {stopUse}`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including rural routes. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You can [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn in the chicken house?',
        a: 'Ammonia from the litter and fine dust are the usual suspects, especially in winter when ventilation is turned down. Get to fresh air, rinse with clean water, and call Poison Control or get medical care if the burning doesn’t ease.',
      },
      {
        q: 'Can poultry dust cause dry eyes?',
        a: 'Dust on the eye’s surface can make eyes feel gritty and dry, and the moving, heated air in a poultry house speeds evaporation from the tear film. Close-fitting eyewear and washing your face after a shift both help.',
      },
      {
        q: 'Should I use eye drops if ammonia gets in my eyes?',
        a: 'No. A lubricating drop isn’t for chemical exposure. Move to fresh air, rinse your eyes with clean water, and call Poison Control at 1-800-222-1222 or get medical care.',
      },
      {
        q: 'When should a poultry worker use eye drops during a shift?',
        a: 'Quell’s label says: {directions}. One way to fit that into a day is a drop before the shift, one at a break after washing your hands, and one after work.',
      },
    ],
  },
  {
    slug: 'dry-eyes-driving-with-the-top-down',
    title: 'Dry eyes driving with the top down',
    description:
      'Wind over the windshield, sun and highway speed dry the eyes fast in a convertible or an open-top SUV. How to set up the car, and what to wear.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Driving with the top down dries your eyes because air spilling over the windshield hits your face for the whole drive, and speed makes it stronger. Wraparound sunglasses, a wind deflector, the windows up and lower speeds all cut the airflow. Use a lubricating drop as its label directs before you set out or at a stop, never while driving, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why your eyes dry out in an open car' },
      {
        p: `With a roof on, the air around your face barely moves. Take the roof off and the windshield becomes a ramp: air rushes up and over it and curls back toward the seats. The faster you go, the harder that curl hits your face, and moving air pulls water from the tear film between blinks. Add sun, which makes you squint, and road grit carried in the airflow, and a pleasant drive can leave your eyes stinging by the time you park.`,
      },
      {
        list: [
          `Speed: the airflow over a windshield gets stronger as you go faster, so highway miles dry the eyes far more than town driving.`,
          `Seating: tall drivers sit higher in the stream of air coming over the glass.`,
          `Sun: direct sun with no roof shade means more glare and more squinting.`,
          `Heat or cold: in cool weather the heater runs on high, and in summer you may run the air conditioning with the top down, both drying air aimed at your face.`,
        ],
      },
      { h: 'Convertibles vs. doors-off and roof-off SUVs' },
      {
        p: `A convertible and an open-top SUV dry the eyes in different ways. In a convertible, the steeply raked windshield sends air over your head, and the strongest gusts hit the back of the cabin. Raising the side windows makes a real difference, because it closes off the air that would otherwise rush in from the sides. An SUV with the roof panels and doors off has an upright windshield and open sides, so air comes in from every direction at once, along with more dust from the road. Gravel roads and trails make that much worse.`,
      },
      { h: 'Setting up the car for drier eyes' },
      {
        list: [
          `Put the side windows up. In most convertibles this calms the cabin more than anything else.`,
          `Use a wind deflector or wind blocker if your car takes one; it sits behind the seats and breaks up the air that curls back toward you.`,
          `Keep the dash vents closed or pointed at your chest when the heater or air conditioning is on.`,
          `Lower the seat a notch if you can still see well, so your eyes sit lower in the airflow.`,
          `Put the top up for long highway stretches and drop it again for slower roads.`,
        ],
      },
      { h: 'Sunglasses, hats and what to wear' },
      {
        p: `Sunglasses do two jobs in an open car: they cut glare and they block wind. Wraparound frames that sit close to your face block much more air than flat lenses that leave gaps at the sides. A brimmed hat shades the eyes from overhead sun, though a loose one won’t stay on at speed; a snug cap or one with a strap does better. Sunscreen is worth applying carefully around the eyes, and well before you drive, because sweat and wind can carry it into your eyes on a hot day. Our guide to [dry eyes riding a motorcycle](/guides/dry-eyes-when-riding-a-motorcycle) covers eyewear for full exposure to the wind.`,
      },
      { h: 'Using eye drops on a top-down drive' },
      {
        p: `Don’t put in eye drops while the car is moving. A drop can blur your vision for a moment, and you need both hands and both eyes on the road. Pull over or wait for a stop, put the car in park, and then use the drop. If you’re planning a long drive, use one before you leave, and plan the next for a rest stop.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The directions: {directions}. Also: {tip}. Read the warning before first use: {warnings}. The whole label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Keeping the bottle in an open car' },
      {
        p: `A car with the top down is exposed to full sun, and the cabin of a parked convertible can get hot quickly. The label’s storage line: {storage}. Keep the bottle in a bag or pocket instead of a cup holder or the door bin, and take it with you when you park. Our guide on [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains what to do if it’s been left out.`,
      },
      { h: 'Grit, bugs and something in your eye' },
      {
        p: `With the top down, a bug, a speck of grit or a bit of leaf can land in your eye at speed. If it happens, pull over safely before you try to deal with it. Blink, let your eyes water, and rinse with clean water if you have it. Don’t rub. If the feeling of something in your eye doesn’t clear, or your eye hurts, waters constantly, or your vision changes, get it checked by an eye doctor or urgent care. A lubricating drop isn’t the way to get something out.`,
      },
      { h: 'Top down in cool weather' },
      {
        p: `Plenty of drivers keep the top down on crisp fall and winter days, with the heater and heated seats running. That combination is hard on the eyes: cold, dry outdoor air from above and hot, dry air from the vents. Point the vents at your feet, rely on the seat heater, and wear eyewear that blocks the wind. For the roof-on version of the problem, see [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter), and for evening drives, [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night).`,
      },
      { h: 'When it’s more than wind' },
      {
        p: `Dryness that goes away soon after you park is ordinary. Dryness that stays for days, or eyes that feel dry even when you haven’t been driving, deserve a look from an eye doctor, who can find the cause and decide what to do. The label’s own rule: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water in a convertible?',
        a: 'Wind spilling over the windshield hits your face, and the eyes often water in response to that dryness and irritation. Raising the side windows, using a wind deflector and wearing wraparound sunglasses all reduce it.',
      },
      {
        q: 'Do wind deflectors help with dry eyes in a convertible?',
        a: 'They can help. A deflector behind the seats breaks up the air that curls back over the windshield toward your face, which is the airflow that dries your eyes.',
      },
      {
        q: 'Is it OK to use eye drops at a stoplight with the top down?',
        a: 'It’s better to wait until you’re parked. A drop can blur your vision for a moment, a light can change before it clears, and you need your hands and eyes for the road.',
      },
      {
        q: 'What sunglasses are good for driving with the top down?',
        a: 'Wraparound frames that sit close to your face, since they block wind from the sides as well as glare. Flat lenses with gaps let air reach your eyes.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-combine-and-tractor-operators',
    title: 'Dry eyes for combine and tractor operators',
    description:
      'Fourteen-hour harvest days, chaff, cab fans and screens dry an operator’s eyes. How to get through harvest and planting with less eye strain.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Combine and tractor operators get dry eyes from long hours of staring: at the header, the row, the guidance screen and the grain tank, with cab fans moving dry air the whole time. Blink on purpose, aim vents away from your face, keep chaff out of the cab, and use a lubricating drop as its label directs at fuel and unloading stops. Chaff or grit stuck in an eye needs a doctor, not drops.`,
      },
      { h: 'Why operators blink less' },
      {
        p: `Running a combine is close, steady watching. You track the header height, the reel, the crop coming in and the monitor readings, often for hours without a break. People blink less when they concentrate, and blinks get shallower too. Each partial blink leaves part of the eye uncovered, so the tear film breaks up faster. The same thing happens on a planter or sprayer when you’re watching rows and a guidance line. By evening, eyes that felt fine at sunrise can feel sandy and heavy.`,
      },
      {
        list: [
          `Every time you turn at the end of the field, close your eyes fully for a second or two.`,
          `Look out the side window at the far tree line now and then, instead of only at the header or the screen.`,
          `When auto-steer is doing the driving, use that time for a few slow, complete blinks.`,
          `Dim a bright monitor at night so it isn’t the brightest thing in the cab.`,
        ],
      },
      { h: 'Cab air through a long day' },
      {
        p: `Harvest days swing in temperature. A cool morning has the heater on, a hot afternoon has the air conditioning on high, and both blow dry air from vents that often face the seat. Instead of adjusting the fan once and forgetting it, check it when the weather turns. Most of the year, the air is moving across your face for twelve or fourteen hours at a stretch, which matters more than any single setting.`,
      },
      {
        p: `Our [farmers guide](/guides/dry-eyes-for-farmers) covers cab filters and vent angles. What it doesn’t cover is what happens when the door opens.`,
      },
      { h: 'Chaff and dust at the door' },
      {
        p: `Most of the dust that reaches an operator’s eyes comes in during the moments the cab is open: climbing in and out next to a dusty machine, unloading into a grain cart with the window open to talk to the driver, checking the sieves or the chopper, or blowing off a radiator screen with compressed air or a leaf blower. These jobs put chaff and fine dust at face height.`,
      },
      {
        list: [
          `Close the door behind you right away, and stand upwind when you climb out.`,
          `Wear close-fitting safety glasses or goggles when you clean the machine with air.`,
          `Keep the window shut during unloading if you can talk by radio or phone instead.`,
          `Wipe your face with a clean, damp cloth before you touch your eyes.`,
        ],
      },
      {
        p: `If chaff, a beard of grain, or a speck of grit gets into your eye, don’t rub it. Blink and rinse with clean water. If it doesn’t come out, if your eye hurts or waters constantly, or if your vision blurs, stop and get it seen by an eye doctor or urgent care. Plant material and grit can scratch the eye, and a lubricating drop won’t remove them.`,
      },
      { h: 'Running into the night' },
      {
        p: `Harvest often runs well after dark. Field lights, a bright monitor and the headlights of trucks on the field road all add glare, and tired eyes blink less fully. Keep the windshield clean inside and out; a dusty windshield scatters light and makes you strain more. If your eyes start to feel heavy, take a break at the truck rather than pushing through. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has more on glare from oncoming lights on the road home.`,
      },
      { h: 'Older tractors without a cab' },
      {
        p: `Open-station tractors put the operator in the wind and sun from the first pass to the last, with dust from the implement blowing back. Wraparound glasses with side coverage, a brimmed cap and a bandana over the nose and mouth are common choices. Plan the dustiest jobs for calmer days when you can, and work with the wind at your back where the field allows.`,
      },
      { h: 'Spraying season' },
      {
        p: `Mixing and loading crop protection products is a different matter. Every product label lists its own eye protection and first-aid steps, and those come first. If any product splashes in your eye, follow the first-aid section of that product’s label, rinse with clean water, and call Poison Control at 1-800-222-1222 or get medical care. Don’t use a lubricating drop instead.`,
      },
      { h: 'Using Quell in the field' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its label: {uses}. The directions: {directions}. Unloading stops, fuel stops and the lunch break are natural times, since you’re stopped and can wash your hands first. The label adds: {tip}.`,
      },
      {
        p: `A cab in the sun or a pickup parked at the field edge gets hot, so mind the label’s storage line: {storage}. Keep the bottle in a lunch cooler’s outer pocket or a jacket rather than on the dash. The label also warns: {warnings}. See the [Drug Facts page](/drug-facts) for the rest.`,
      },
      { h: 'When harvest is over and your eyes aren’t' },
      {
        p: `Most harvest dryness eases within days of the last load. If yours doesn’t, or if you have pain, light sensitivity or vision changes, an eye doctor can find the cause and decide what to do. The label says: {stopUse} Quell ships to rural addresses anywhere in the US, and orders of {freeBottles} or more bottles ship free; you can [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry running a combine?',
        a: 'Hours of close watching slow your blinking, and cab fans blow dry heated or cooled air across your face. Deliberate full blinks at each turn and vents aimed away from your face both help.',
      },
      {
        q: 'What should I do if chaff gets in my eye?',
        a: 'Don’t rub it. Blink and rinse with clean water, and if it doesn’t come out or your eye hurts or your vision blurs, get it seen by an eye doctor or urgent care.',
      },
      {
        q: 'When should a tractor operator use eye drops?',
        a: 'At a stop, after washing your hands, and never while the machine is moving. Quell’s directions read: {directions}. Fuel stops, unloading and lunch are natural times.',
      },
      {
        q: 'How do I keep my eyes from getting tired during harvest?',
        a: 'Close your eyes fully at each headland turn, look out at the far edge of the field now and then, dim the monitor at night, and take real breaks out of the cab when your eyes feel heavy.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-sailor-or-boater',
    title: 'Christmas gifts for a sailor or boater',
    description:
      'Useful Christmas gifts for someone who sails, cruises or fishes from a boat: gear for glare, wind, spray and cold hands, plus a pocket bottle of eye drops.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Good Christmas gifts for a sailor or boater deal with what the water does to them: glare, wind, spray, sun and cold. Polarized wraparound sunglasses with a floating strap, a snug brimmed hat, a dry bag, warm sailing gloves and a headlamp with a red-light setting all get used. A pocket bottle of lubricating eye drops is a small, practical extra for someone whose eyes feel dry after a day on deck.`,
      },
      { h: 'What do you get a sailor for Christmas?' },
      {
        p: `Start with what they complain about after a day out. Most boaters come home sunburned, windblown and squinting, with a phone that nearly went overboard. Gifts that fix one of those problems get used every trip, while decorative nautical items tend to end up on a shelf. If you don’t know their boat well, stick to personal gear that works on any boat, from a small dinghy to a cruiser.`,
      },
      { h: 'Gifts for glare and sun' },
      {
        list: [
          `Polarized sunglasses in a wraparound shape. Polarized lenses cut the glare bouncing off the water, and a curved frame blocks wind from the sides.`,
          `A floating sunglasses strap. A pair that goes over the side is gone; a strap keeps them on and lets them float if they fall.`,
          `A brimmed hat with a chin cord or clip, so it stays on in a gust.`,
          `A neck gaiter or sun hood for long days on open water.`,
          `Lip balm with sunscreen, which disappears from every boat bag by midsummer.`,
        ],
      },
      { h: 'Gifts for wind, spray and cold' },
      {
        p: `Winter sailors and anyone who keeps boating into the fall need help with cold, wet wind. Our guide to [dry eyes for sailors and boaters in winter](/guides/dry-eyes-for-sailors-and-boaters-in-winter) describes what cold spray and apparent wind do; gifts can take the edge off:`,
      },
      {
        list: [
          `Sailing gloves, either fingerless for line handling in summer or insulated for cold-weather days.`,
          `A fleece-lined beanie that fits under a jacket hood.`,
          `Clear or lightly tinted wraparound glasses for gray, windy days when dark lenses are too much.`,
          `A thermos that keeps coffee hot through a long morning on the water.`,
          `Microfiber lens cloths, since salt spray dries into spots on every lens.`,
        ],
      },
      { h: 'Gifts for the gear bag' },
      {
        list: [
          `A roll-top dry bag for phones, keys, wallets and anything that can’t get wet.`,
          `A waterproof phone pouch with a lanyard.`,
          `A headlamp with a red-light mode, which is easier on the eyes when moving around a dark cockpit or dock.`,
          `A small waterproof logbook for trips, weather and fuel.`,
          `A quality knife or multi-tool made for marine use.`,
        ],
      },
      { h: 'Adding eye drops to a boater’s gift' },
      {
        p: `Hours of sun and wind on the water speed evaporation from the tear film, and many boaters come in with eyes that feel dry and gritty. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. It comes in a {size} bottle that slips into a dry bag or a jacket pocket. Its label gives its Uses as: {uses}.`,
      },
      {
        p: `If you tuck a bottle into a gift, include a card pointing to the label, since that’s where the directions, warnings and storage limits are. In particular, the label’s caution reads: {warnings}. And the storage line, which matters on a hot deck or in a cold cockpit: {storage}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'What eye drops can’t do on a boat' },
      {
        p: `A lubricating drop is for dryness. It isn’t a way to rinse salt water, fuel or a cleaning product out of an eye; for that, the answer is clean water and, if it keeps stinging or vision changes, medical care. It doesn’t replace sunglasses, either. And anyone whose eyes stay dry or painful after the boating season should see an eye doctor, who can find the cause and decide what to do. The label’s own rule: {stopUse}`,
      },
      { h: 'Gifts for a fishing boater' },
      {
        p: `If the boater in your life mostly fishes, polarized glasses matter even more, since they help with seeing into the water as well as cutting glare. A rod holder, a good cooler bag or a new tackle box are also safe bets. Our list of [Christmas gifts for someone who fishes](/guides/christmas-gifts-for-someone-who-fishes) covers more of that ground.`,
      },
      { h: 'Shipping a gift to a sailor' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, so you can send it straight to the boater or to yourself to wrap. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. The site doesn’t promise a delivery date, so order with time to spare before Christmas. If you’re sending it directly, see [will the gift recipient see the price?](/guides/will-the-gift-recipient-see-the-price) first. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. More holiday ideas are in [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a sailor?',
        a: 'Practical gear that handles sun, wind and water: polarized wraparound sunglasses with a floating strap, sailing gloves, a dry bag or a hat that stays on in a gust.',
      },
      {
        q: 'What do boaters need that they don’t buy themselves?',
        a: 'Small replacements that go missing on every boat: a floating sunglasses strap, lens cloths, lip balm with sunscreen, a waterproof phone pouch, or a headlamp with a red-light setting.',
      },
      {
        q: 'Are eye drops a useful gift for someone who boats?',
        a: 'They can be a practical extra for someone whose eyes feel dry after sun and wind on the water. Include a note to read the label, since it carries the directions, warnings and storage range.',
      },
      {
        q: 'Do polarized sunglasses help on a boat?',
        a: 'Yes. Polarized lenses cut the glare that reflects off the water’s surface, which means less squinting, and a wraparound frame also blocks wind from the sides.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-scientist',
    title: 'Christmas gifts for a scientist',
    description:
      'Christmas gifts a scientist will actually use, at the bench, in the field or at the screen: lighting, desk setup, field gear and small eye-comfort extras.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `The most useful Christmas gifts for a scientist fit how they work: at a bench, in the field, or on long days of data at a screen. A good desk lamp, a monitor riser, a waterproof field notebook, warm field gloves or a quality thermos all get daily use. For a scientist whose eyes feel dry from screens, microscopes or field wind, a bottle of lubricating eye drops is a small, practical addition.`,
      },
      { h: 'Start with where they work' },
      {
        p: `“Scientist” covers a lot of jobs. A chemist at a fume hood, a biologist at a microscope, a data scientist at three monitors and a geologist on a windy ridge have different days. Ask yourself one question before shopping: where does this person spend most of their hours? The answer sorts the list below. If you’re unsure, gifts for screen time are a safe bet, because nearly every scientist ends up writing, analyzing and reading for hours.`,
      },
      { h: 'Gifts for the lab scientist' },
      {
        p: `Lab work means bright overhead light, close focus and safety glasses for much of the day. Gifts should work around lab rules rather than against them; anything worn or used at the bench has to fit the lab’s own safety requirements, which the scientist knows better than you.`,
      },
      {
        list: [
          `A comfortable pair of anti-fatigue shoes or insoles for long standing shifts.`,
          `A personalized lab notebook or a set of good waterproof pens.`,
          `A desk plant or a small humidifier for the office side of the job.`,
          `A quality insulated water bottle or mug for the break room, since drinks stay out of the lab.`,
          `A book about their field written for a general audience; scientists like reading those too.`,
        ],
      },
      {
        p: `Our [dry eyes for lab workers](/guides/dry-eyes-for-lab-workers) guide explains why fume hoods and microscopes wear on the eyes.`,
      },
      { h: 'Gifts for the field scientist' },
      {
        list: [
          `Wraparound sunglasses with side coverage for wind, dust and glare.`,
          `A brimmed hat that packs flat.`,
          `Insulated gloves with touchscreen fingertips for winter fieldwork.`,
          `A waterproof field notebook and an all-weather pen.`,
          `A headlamp, a hand lens or a small dry bag for samples and phones.`,
          `A thermos that survives being dropped on a rock.`,
        ],
      },
      { h: 'Gifts for the screen-bound scientist' },
      {
        p: `Analysis, modeling, coding and writing papers all mean long sessions at a monitor, and people blink less often and less completely when they concentrate on a screen. Desk gifts make those hours easier:`,
      },
      {
        list: [
          `A monitor riser or arm so the top of the screen sits at or slightly below eye level.`,
          `A desk lamp that lights the paper and keyboard without glare on the screen.`,
          `A small desk humidifier if their office runs on dry heated air in winter.`,
          `A good keyboard or a document holder that keeps papers near the screen.`,
          `A simple timer or a break-reminder app subscription to prompt them to look away now and then.`,
        ],
      },
      {
        p: `[Eye drops for computer users](/guides/eye-drops-for-computer-users) explains the 20-20-20 habit and other screen routines.`,
      },
      { h: 'Adding eye drops to the gift' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives its Uses as: {uses}. It comes in a {size} bottle that fits in a desk drawer or a field pack. If you include one, add a note to read the label first: its caution reads, {warnings}, and its storage line reads, {storage}. A field truck in summer or an unheated sample shed in winter can both pass that range.`,
      },
      {
        p: `Scientists tend to read ingredient lists. Quell’s active ingredients are {actives}, and its inactive ingredients are {inactives}. The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'What eye drops are not for in a lab' },
      {
        p: `A lubricating drop is for dryness. If a chemical, solvent or sample splashes into an eye, the answer is the lab’s eyewash station and the lab’s emergency procedure, followed by medical care, with Poison Control (1-800-222-1222) for advice on a chemical. Drops are not a substitute for an eyewash, and they shouldn’t be used at the bench if lab rules keep personal items out. Dryness that persists, or any pain or change in vision, belongs with an eye doctor, who can find the cause and decide what to do.`,
      },
      { h: 'Ordering a gift for a scientist' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, whether that’s their home, a university department or a field station with a street address. Checkout is as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order early for Christmas. Unopened bottles can be refunded within {returnDays} days of delivery. For more ideas, see [Christmas gifts for an engineer](/guides/christmas-gifts-for-an-engineer) and the rest of [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a scientist?',
        a: 'Something that fits where they work: a monitor riser or good desk lamp for screen work, comfortable insoles for bench work, or a waterproof field notebook and warm gloves for fieldwork.',
      },
      {
        q: 'What do you get a lab scientist who has everything?',
        a: 'Comfort gifts for long lab days tend to land well: supportive shoes or insoles, a good insulated mug for the break room, a desk humidifier for the office, or a popular science book in their field.',
      },
      {
        q: 'Are eye drops a good gift for a scientist?',
        a: 'For someone who spends long hours at a microscope or a screen and mentions dry eyes, a bottle of lubricating drops is a practical add-on. Include a note to read the label before use.',
      },
      {
        q: 'Can eye drops be used instead of an eyewash station?',
        a: 'No. A splash of a chemical or sample calls for the eyewash station and the lab’s emergency procedure, then medical care. Lubricating drops are only for dryness.',
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-nutcracker-performance',
    title: 'Dry eyes at a Nutcracker or holiday ballet',
    description:
      'A dim, warm, full theater and two hours of watching dancers dry the eyes. How to sit, watch and plan a holiday ballet so your eyes stay comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Your eyes get dry at a Nutcracker or holiday ballet because you watch without a break: a dim, warm, crowded hall, bright stage light and long stretches of fast movement you don’t want to miss. Blink fully between scenes, choose a seat away from vents, look away from the stage during applause, and use a lubricating drop as its label directs before the show or at intermission, not during it.`,
      },
      { h: 'Why a ballet is harder on your eyes than a play' },
      {
        p: `At a play, you listen as much as you watch, and your eyes rest a little between lines. A ballet has no dialogue. The story is entirely in the movement, so your eyes track dancers across the stage for most of the performance. People blink less when they’re absorbed in something visual, and blinks get shallower. Each incomplete blink leaves part of the eye’s surface uncovered, and the tear film thins in the warm, still air of a full house. Our broader guide to [dry eyes at a holiday concert or show](/guides/dry-eyes-at-a-holiday-concert-or-show) covers choirs and concerts; this one is about watching dance.`,
      },
      { h: 'Moments that make you stare' },
      {
        list: [
          `The opening party scene, with a crowded stage and lots to follow at once.`,
          `The battle scene, which moves fast and is often staged in low light.`,
          `The snow scene, with falling snow and bright white light on stage.`,
          `The long run of solo and group dances in the second act, one after another.`,
          `The grand finale, when everyone is on stage at once.`,
        ],
      },
      {
        p: `Applause between dances is your chance. Close your eyes for a second or two, blink slowly a few times, and look at something that isn’t lit, like the dark ceiling or your lap.`,
      },
      { h: 'Opera glasses and binoculars' },
      {
        p: `Many people bring opera glasses or small binoculars to a ballet to see the dancers’ faces from upper seats. Looking through them tends to make you hold still and stare even harder. Use them for a moment at a time instead of for a whole dance, lower them during applause, and blink fully every time you take them away from your eyes. If you need them all evening, a seat closer to the stage may be easier on your eyes next year.`,
      },
      { h: 'Choosing a seat for dry eyes' },
      {
        p: `Theaters are built to move a lot of air for a full house, and seats near supply vents or under ceiling outlets can get a steady breeze. If you feel air on your face before the curtain rises, ask an usher whether there’s another seat available. Upper levels often feel warmer than the orchestra, since warm air rises. Aisle seats let you step out at intermission without climbing over a row, which makes it easier to get to a restroom and wash your hands before using a drop.`,
      },
      { h: 'Matinee or evening show?' },
      {
        p: `If your eyes tend to feel worse late in the day, a matinee may be more comfortable than an evening performance. You arrive with eyes that have had less screen time and heated air, and you’re not driving home tired and in the dark. An evening show stacks a full day, two hours in the theater and a night drive. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has tips for the trip home.`,
      },
      { h: 'Dressing up, makeup and glitter' },
      {
        p: `A holiday ballet is a dressy outing for many families, and that often means eye makeup, glitter and hairspray. Glitter and flakes of mascara can land in the eye during the evening. Keep shimmer away from the lash line, apply hairspray before eye makeup with your eyes closed, and take everything off before bed. If a flake or speck in your eye won’t rinse out with clean water, or your eye hurts, don’t keep rubbing; see a doctor.`,
      },
      { h: 'Using eye drops at the ballet' },
      {
        p: `Don’t put in drops during the performance. A theater is too dark to see the bottle tip, and it’s easy to touch the tip to your eyelid. Use a drop before you leave home or at intermission, after washing your hands. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The directions: {directions}. Handling: {tip}. The [Drug Facts page](/drug-facts) has the warnings and storage line.`,
      },
      {
        p: `If you’re bringing children, the label doesn’t give directions for them; ask their doctor or a pharmacist before using any eye drop on a child.`,
      },
      { h: 'The walk out into December' },
      {
        p: `After two hours in a warm hall, stepping out into a cold, windy December night is a sharp change, and the car heater makes it worse once it kicks in. Point the vents at the floor and windshield, not your face, and give your eyes a few slow blinks before you pull out of the garage. If you want to pack a bottle in a coat pocket for the night, keep in mind the label’s storage line: {storage}.`,
      },
      { h: 'If your eyes stay dry after the show' },
      {
        p: `Dryness that fades by morning is part of a long night out. If it keeps coming back, or comes with pain, light sensitivity or blurred vision, an eye doctor can find the cause and decide what to do. The label’s rule: {stopUse} Quell ships to any US address, and orders of {freeBottles} or more bottles ship free. More December ideas are in [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry watching a ballet?',
        a: 'A ballet has no dialogue, so you watch the stage almost without a break, and people blink less when they’re absorbed. The warm, still air of a full theater speeds evaporation between those blinks.',
      },
      {
        q: 'Can I use eye drops during the Nutcracker?',
        a: 'It’s easier and cleaner to use them before the show or at intermission. A dark theater makes it hard to see the bottle tip, and the label warns against touching it to any surface.',
      },
      {
        q: 'Do opera glasses make dry eyes worse?',
        a: 'Looking through them tends to make you stare harder and blink less. Use them for short moments, lower them during applause, and blink fully each time.',
      },
      {
        q: 'Is a matinee easier on dry eyes than an evening show?',
        a: 'Often, if your eyes feel worse late in the day. A matinee comes before a full day of screens and heated air, and you skip the night drive home.',
      },
    ],
  },
  {
    slug: 'otc-vs-prescription-eye-drops',
    title: 'OTC vs. prescription eye drops: what’s the difference?',
    description:
      'Over-the-counter eye drops carry a Drug Facts panel you follow yourself; prescription drops come with a doctor’s instructions. What else differs.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `The difference between OTC and prescription eye drops is who decides how you use them. Over-the-counter drops carry a Drug Facts panel with uses, directions and warnings written for you to follow on your own. Prescription drops are chosen by a doctor for your eyes, dispensed by a pharmacy, and used exactly as the prescription says. If you’re unsure which you need, an eye doctor can find the cause and decide.`,
      },
      { h: 'What over-the-counter means on an eye drop' },
      {
        p: `An OTC eye drop is sold without a prescription, so its label has to do the job a doctor would otherwise do. That’s why every one carries a standardized Drug Facts panel: active ingredients with their purpose, uses, warnings, directions, other information and inactive ingredients, in a set order. You read it, decide whether the product fits, and follow it. Our guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section.`,
      },
      {
        p: `Quell is an OTC lubricating drop. Its panel lists its Uses as: {uses}. And its directions: {directions}. You don’t need a doctor’s order to buy it or to follow those directions.`,
      },
      { h: 'What prescription means on an eye drop' },
      {
        p: `A prescription eye drop is one a licensed prescriber orders for you after deciding it fits your eyes. The pharmacy fills it and prints a label with your name, the prescriber’s name, the dose and how often to use it. It often comes with a separate printed information sheet. The instructions are yours, not general ones. Two people using the same prescription drop might be told to use it differently.`,
      },
      { h: 'Side by side: how they differ' },
      {
        list: [
          `Who chooses it: you, for an OTC drop; a prescriber, for a prescription drop.`,
          `Where the directions come from: the Drug Facts panel for OTC; the prescription and pharmacy label for prescription.`,
          `Where you buy it: OTC drops are sold on store shelves and online; prescription drops come from a pharmacy filling an order.`,
          `Refills: you simply buy more OTC drops; a prescription has a set number of refills, or needs a new order.`,
          `Questions: for OTC drops, the label, a pharmacist or the maker; for prescription drops, the prescriber or the pharmacist who filled it.`,
          `When to stop: the OTC label tells you; for a prescription, ask the prescriber before stopping.`,
        ],
      },
      { h: 'Are prescription eye drops stronger than OTC drops?' },
      {
        p: `“Stronger” isn’t really the right comparison. Prescription drops often contain ingredients that aren’t sold over the counter at all, and they’re used for problems a doctor has identified. An OTC lubricating drop like Quell does something narrower: Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label covers relieving dryness. The question isn’t which is stronger but which fits the reason your eyes feel the way they do, and that’s an eye doctor’s question.`,
      },
      { h: 'Can you use OTC drops with prescription drops?' },
      {
        p: `Quell’s label doesn’t give directions for using it alongside other eye drops, and neither do most OTC labels. If you already use a prescription drop, ask the doctor who prescribed it or your pharmacist before adding any OTC drop, including how far apart to space them. Bring both bottles, or a photo of the OTC panel, so they can see the ingredients. The full Quell panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Paying for each kind' },
      {
        p: `IRS Publication 969 lists over-the-counter medicine, whether or not prescribed, as an expense a health FSA can cover, and OTC medicine counts for HSA purposes too. That means an OTC lubricating drop doesn’t need a prescription to be paid with those funds, though plan rules and receipt requirements vary; check with your plan administrator. Our guide to [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) has the details. Prescription drops are usually billed through insurance at the pharmacy, which is a separate process.`,
      },
      { h: 'Buying each kind online' },
      {
        p: `An OTC drop can be ordered online like any other product. Quell’s checkout is as a guest, for buyers 18 and over, with shipping from Brentwood, Tennessee, to US addresses only: {shipping}, or free on {freeBottles} or more bottles. A prescription drop ordered online has to go through a licensed pharmacy that receives and verifies the prescription. Our guide on [whether it’s legal to buy eye drops online](/guides/is-it-legal-to-buy-eye-drops-online) explains more.`,
      },
      { h: 'When an OTC drop isn’t the answer' },
      {
        p: `Over-the-counter drops are for the everyday dryness their label describes. Any of these mean it’s time to see an eye doctor instead of choosing another bottle:`,
      },
      {
        list: [
          `Eye pain, or a change in your vision.`,
          `Dryness that keeps coming back or gets worse each week.`,
          `Discharge, crusting, or sensitivity to light.`,
          `An injury, or something in your eye that won’t rinse out.`,
          `Symptoms after a chemical or other substance got in your eye.`,
        ],
      },
      {
        p: `Quell’s label says it plainly: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers more.`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between OTC and prescription eye drops?',
        a: 'OTC drops are sold without a prescription and come with a Drug Facts panel you follow yourself. Prescription drops are chosen for you by a prescriber, filled by a pharmacy and used exactly as prescribed.',
      },
      {
        q: 'Are prescription eye drops stronger than over-the-counter ones?',
        a: 'They aren’t simply stronger versions. Prescription drops often contain ingredients not sold over the counter and are used for problems a doctor has identified. Which kind fits your eyes is a question for an eye doctor.',
      },
      {
        q: 'Can I use over-the-counter eye drops with my prescription eye drops?',
        a: 'Ask the doctor who prescribed your drop or your pharmacist first. Quell’s label doesn’t give directions for use with other eye drops.',
      },
      {
        q: 'Do OTC eye drops need a prescription for FSA or HSA?',
        a: 'IRS Publication 969 lists over-the-counter medicine, whether or not prescribed, as a health FSA expense. Plan rules and receipt requirements vary, so check with your plan administrator.',
      },
    ],
  },
  {
    slug: 'daytime-vs-nighttime-eye-drops',
    title: 'Daytime vs. nighttime eye drops: what’s the difference?',
    description:
      'Some eye products are made for daytime and some for bedtime, and the label is how you tell. What differs, and where a lubricating drop like Quell fits.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Daytime eye drops are thin enough to use while you’re awake and seeing clearly, while nighttime products such as gels and ointments are usually thicker and can blur vision, so they’re often used before sleep. The product’s own label tells you when and how often to use it. Quell is a lubricating drop with one set of directions and no day or night split; a doctor decides whether you need a separate bedtime product.`,
      },
      { h: 'What makes a product “nighttime”' },
      {
        p: `Eye products come in different forms: watery drops, thicker gel drops, gels, and ointments. As a rule, the thicker the product, the more it can blur your vision for a while after you use it. A thick product is awkward when you need to read, drive or work, so thicker products are often used at bedtime, when blurring doesn’t matter. That’s the basic split. Packaging varies, and some boxes say “nighttime” or “PM” on the front, but the label’s directions are what count, not a word on the box. Our guide on [eye drops vs. eye ointment](/guides/eye-drops-vs-eye-ointment) and [eye drops vs. eye gel](/guides/eye-drops-vs-eye-gel) cover the forms themselves.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives its Uses as {uses}, and one set of directions: {directions}. The label doesn’t divide those uses into daytime and nighttime, and it doesn’t name a time of day. It also notes how the product looks: {milky}. That look comes from its natural oil-based ingredients and doesn’t mean it’s a gel or ointment.`,
      },
      {
        p: `So the practical question with Quell isn’t whether it’s a day drop or a night drop, but how to spread three uses over your waking hours. Our guide on [when to use eye drops during the day](/guides/when-to-use-eye-drops-during-the-day) has some schedules.`,
      },
      { h: 'Why your eyes may feel different at night and in the morning' },
      {
        p: `Many people notice dryness most at two times: late in the day, after hours of screens and heated or cooled air, and first thing in the morning. During the day, slowed blinking at screens and moving air speed evaporation from the tear film. At night the eyes are closed, but a ceiling fan, a vent blowing on the bed or very dry bedroom air can still make them feel dry on waking. Guides to [morning dryness](/guides/dry-eyes-in-the-morning-when-you-wake-up) and [waking in the night with dry eyes](/guides/dry-eyes-in-the-middle-of-the-night) go into each.`,
      },
      { h: 'Is it OK to use a daytime drop at bedtime?' },
      {
        p: `If the label doesn’t limit the time of day, a bedtime use can be one of the times it allows. For Quell, that means one of the three daily uses can come just before bed, as long as you stay within {directions}. If you’re wondering whether you need something thicker for the night on top of that, the label doesn’t cover combining products, so ask an eye doctor or pharmacist.`,
      },
      { h: 'Using a daytime drop and a nighttime product together' },
      {
        p: `Some people are told by their eye doctor to use a lubricating drop during the day and a gel or ointment at night. That combination is a doctor’s plan, and the doctor or pharmacist is the one to say which goes first, how long to wait between them and how often. Quell’s label gives no directions for use with other eye products. If you already have a bedtime product, take both boxes to your next appointment.`,
      },
      { h: 'How to tell which kind you’re holding' },
      {
        list: [
          `Read the directions on the label. They say how often and, sometimes, when to use it.`,
          `Look at the form: a drop, a gel or an ointment. The label or the front of the box usually says.`,
          `Check the warnings for anything about blurred vision or driving.`,
          `Check the Uses line to confirm what it’s for.`,
          `If the box says “nighttime” but the directions don’t, follow the directions.`,
        ],
      },
      {
        p: `Comparing two products? [How to compare two eye drop labels](/guides/how-to-compare-two-eye-drop-labels) lays out what to check side by side.`,
      },
      { h: 'Bedside habits that matter more than the product' },
      {
        list: [
          `Turn off a ceiling fan over the bed, or set it low.`,
          `Point heating and cooling vents away from the bed.`,
          `Run a clean humidifier in winter if your bedroom air is very dry.`,
          `Stop scrolling a few minutes before you close your eyes, and give them a few full blinks.`,
          `Keep the bottle where you can reach it with clean hands; the label adds, {tip}.`,
        ],
      },
      { h: 'When nighttime dryness needs an eye doctor' },
      {
        p: `If you wake with eyes that feel dry or painful most mornings, if your eyes don’t seem to close fully when you sleep, or if dryness is getting worse, an eye doctor can find the cause and decide what to do, including whether a separate nighttime product makes sense. Quell’s label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between daytime and nighttime eye drops?',
        a: 'Daytime drops are thin enough to use while you need clear vision. Nighttime products are usually thicker gels or ointments that can blur vision, so they’re often used before sleep. The product’s label gives its own timing.',
      },
      {
        q: 'Is Quell a daytime or nighttime eye drop?',
        a: 'Its label doesn’t make that split. It gives one set of directions for use through the day, and one of those uses can come at bedtime.',
      },
      {
        q: 'Why do nighttime eye products blur your vision?',
        a: 'They’re thicker than watery drops, so they spread across the eye more slowly and can leave a film for a while. That’s why many are used right before sleep.',
      },
      {
        q: 'Can I use a nighttime eye gel and a daytime eye drop together?',
        a: 'Some people do on an eye doctor’s advice, but the order, spacing and timing are a question for the doctor or a pharmacist. Quell’s label doesn’t give directions for use with other eye products.',
      },
    ],
  },
  {
    slug: 'dry-eye-drops-vs-regular-eye-drops',
    title: 'Dry eye drops vs. regular eye drops',
    description:
      'Not every eye drop on the shelf is for dryness. How to tell a lubricating dry eye drop from other kinds by reading the Uses line and the active ingredients.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye drops are lubricating drops made to relieve dryness, and their label says so in the Uses line. “Regular” eye drops can mean many different products with different jobs, from itching drops to eye washes, each with its own active ingredients. Read the Uses line and the Purpose column before you buy. If you aren’t sure your eyes are dry rather than something else, an eye doctor can find the cause and decide.`,
      },
      { h: 'There is no “regular” eye drop' },
      {
        p: `On a store shelf, eye products sit side by side in similar small boxes, which makes them look interchangeable. They aren’t. Each one is made for a particular job, and the label is where that job is stated. A lubricating drop for dryness, a drop for itchy eyes, an eye wash for rinsing and a drop sold for a particular symptom can all look alike from the aisle. Choosing by the box color or the price tag is how people end up with the wrong product.`,
      },
      { h: 'Read the Uses line first' },
      {
        p: `Every OTC eye drop has a Uses line on its Drug Facts panel. It tells you, in a sentence, what the product is for. A lubricating dry eye drop’s Uses will talk about dryness, or about protecting the eye from irritation. Quell’s reads: {uses}. If a product’s Uses line is about something else, it isn’t a dry eye drop, however it’s marketed. Our guide to [the Uses section](/guides/the-uses-section) explains the wording you’ll see.`,
      },
      { h: 'Then check the Purpose column' },
      {
        p: `Next to each active ingredient, the Drug Facts panel names its purpose. Lubricating drops list purposes like “Lubricant” or “Emollient.” Other kinds of drops list different purposes, which tells you they work differently. Quell’s active ingredients are {actives}. The panel lists the first two as lubricants and the light mineral oil as an emollient. [What Purpose means on a Drug Facts label](/guides/what-does-purpose-mean-on-a-drug-facts-label) covers the column.`,
      },
      { h: 'What else is on the shelf' },
      {
        list: [
          `Lubricating drops: for dryness. Their Uses line mentions dryness or irritation, and their actives are lubricants or emollients.`,
          `Drops for itchy eyes: their Uses line names itching, and their active ingredients are different from a lubricant’s.`,
          `Eye washes: for rinsing the eye, usually used in larger amounts and with their own directions.`,
          `Other symptom drops: products whose Uses line names another symptom and whose actives match that job.`,
          `Prescription drops: dispensed by a pharmacy for a reason a doctor identified, and not on the open shelf at all.`,
        ],
      },
      {
        p: `If you’re looking at a product that isn’t a lubricant, ask the pharmacist what it’s for and whether it fits your situation. The pharmacist can read its label with you.`,
      },
      { h: 'Is a dry eye drop the same as artificial tears?' },
      {
        p: `Mostly, yes. “Artificial tears” is an everyday name for lubricating drops, and many lubricating products use it on the box. Our guide to [artificial tears vs. lubricating eye drops](/guides/artificial-tears-vs-lubricating-eye-drops) explains the overlap. Within that group, products still differ in their actives and inactives, in whether they contain a preservative, and in which part of the tear film they’re built around. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it’s preservative-free.`,
      },
      { h: 'Why using the wrong kind matters' },
      {
        p: `A drop made for a different job may simply do nothing for dryness. Some kinds of drops also carry their own warnings about how often or how long they can be used, which matter if you were reaching for them several times a day thinking they were lubricants. That’s why the label, not the shelf location, should decide. If you’ve been using a product for weeks without knowing what kind it is, check the label now, and ask a pharmacist if anything is unclear.`,
      },
      { h: 'How to use a dry eye drop as labeled' },
      {
        p: `Once you have a lubricating drop, follow its directions. Quell’s: {directions}. Its warning: {warnings}. And for handling: {tip}. Everything is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When a dry eye drop isn’t the right choice' },
      {
        p: `Choosing a dry eye drop assumes dryness is the problem. If your eyes itch intensely, hurt, produce discharge, are sensitive to light, or your vision has changed, the right next step is an eye doctor, who can find the cause and decide what to do. Quell’s label is explicit: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Are dry eye drops different from regular eye drops?',
        a: 'Yes. Dry eye drops are lubricating drops whose Uses line is about dryness. Other drops on the shelf are made for other jobs and have different active ingredients, so read the Uses line before you buy.',
      },
      {
        q: 'How can I tell if an eye drop is for dry eyes?',
        a: 'Look at the Drug Facts panel. A dry eye drop’s Uses line mentions dryness, and its active ingredients are listed with purposes such as Lubricant or Emollient.',
      },
      {
        q: 'Can I use any eye drop for dry eyes?',
        a: 'No. A drop made for itching or another symptom may not help dryness and may carry its own limits. Use a product whose label says it’s for dryness, and ask a pharmacist if you’re unsure.',
      },
      {
        q: 'Is Quell a dry eye drop?',
        a: 'Yes. It’s an over-the-counter lubricating drop, and its Uses line covers relieving dryness of the eye and protecting against further irritation.',
      },
    ],
  },
  {
    slug: 'fsa-eye-drop-order-in-the-last-week-of-december',
    title: 'FSA eye drop order in the last week of December',
    description:
      'Spending FSA money on eye drops between Christmas and December 31? What IRS Publication 969 says, what your plan decides, and a checklist before you order.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If you’re using FSA money on eye drops in the last week of December, check three things first: whether your plan year really ends December 31, whether your plan counts the order date or the delivery date, and whether it has a grace period or a carryover. IRS Publication 969 calls FSAs generally “use-it-or-lose-it,” but each plan sets its own deadlines. Order early in the week and save your confirmation email.`,
      },
      { h: 'Why the last week is different' },
      {
        p: `The days between Christmas and New Year’s Eve are when many people log in to their FSA and find money left. This year, Christmas falls on Friday, December 25, and New Year’s Eve on Thursday, December 31, which leaves a short working week in between. Benefits offices and plan administrators may keep holiday hours, so a question you’d normally answer with a quick call can take longer. That’s why it pays to sort out your plan’s rules before you place an order, not after.`,
      },
      { h: 'What IRS Publication 969 says about year end' },
      {
        list: [
          `FSAs are generally “use-it-or-lose-it” plans: money left at the end of the plan year can’t generally carry over.`,
          `A plan may offer a grace period of up to 2½ months after the plan year ends, during which new expenses can be paid from last year’s balance.`,
          `Or a plan may allow a limited carryover of unused money into the next plan year, up to a cap the publication lists; a plan can set a lower cap.`,
          `A health FSA can’t offer both a carryover and a grace period.`,
          `Over-the-counter medicine, whether or not prescribed, is listed among expenses a health FSA can cover.`,
        ],
      },
      {
        p: `Our guide to [what happens to unused FSA money](/guides/what-happens-to-unused-fsa-money) covers the forfeiture rule in full. The rest of this page is about the practical side of an order placed in the last days of the year.`,
      },
      { h: 'Order date or delivery date?' },
      {
        p: `This is the question that matters most in late December, and Publication 969 doesn’t settle it for you. It says an FSA reimburses expenses incurred during the period of coverage, and that qualified medical expenses are those specified in the plan. How your plan dates an online purchase (by the day you paid, the day it shipped or the day it arrived) is a plan rule. Ask your plan administrator, or look in the summary plan description, before you rely on a December 31 order. If your plan has a grace period, the timing pressure is lower, since expenses incurred in that window can still be paid from this year’s balance.`,
      },
      { h: 'A checklist before you order' },
      {
        list: [
          `Log in to your FSA account and note the balance and the plan year end date.`,
          `Check whether the plan has a grace period, a carryover, or neither.`,
          `Find the claims deadline, which is usually separate from the plan year end.`,
          `Ask how the plan dates online orders if you’re ordering in the final days.`,
          `Decide how many bottles you’ll actually use; Quell’s label directs {directions}.`,
          `Place the order early in the week rather than on the 31st.`,
          `Keep your order confirmation email; it’s the itemized record most claims ask for.`,
        ],
      },
      { h: 'Paying with an FSA card at checkout' },
      {
        p: `Publication 969 says debit cards and similar cards given to you by your employer can be used to reimburse health FSA expenses. Whether a particular card is accepted for a particular online purchase depends on the card and the plan, and the site can’t confirm that in advance. If your FSA card is declined at the payment page, you can pay with another card and then submit a claim with your receipt, if your plan allows it. Our guide to [filing an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) walks through it.`,
      },
      { h: 'What your receipt shows' },
      {
        p: `A Quell order confirmation email lists the order number, each item and its price, the subtotal, shipping and the total, and names {company} as the seller. That’s the kind of itemized record an FSA usually asks for. Keep it with your FSA records, and if your plan asks for more, see [FSA asked for a receipt for eye drops?](/guides/fsa-asked-for-receipt-for-eye-drops).`,
      },
      { h: 'Shipping in the holiday stretch' },
      {
        p: `We ship from Brentwood, Tennessee, to US addresses. Shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, and the holiday weeks are busy for every carrier. If your plan goes by delivery date, that’s one more reason to order earlier in December, or to ask whether a grace period applies. Checkout is as a guest; [order from the home page](/#buy).`,
      },
      { h: 'If you order too much' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. If the order was paid with FSA money, a refund can affect what your plan counts as spent, so tell your administrator. [Refunds on eye drops bought with HSA or FSA money](/guides/refunds-on-eye-drops-bought-with-hsa-or-fsa) explains how that usually works.`,
      },
      { h: 'Buy for use, not just to spend' },
      {
        p: `Publication 969 also says an FSA can’t make advance reimbursements of future or projected expenses. An order you place is a real expense, but buying far more than you’ll use just to empty the account is a poor trade. Check the label’s storage line, {storage}, and the expiration date on each bottle, and buy what you can reasonably use. If your eyes need more than everyday relief, that’s a reason to see an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Can I use my FSA on December 31?',
        a: 'If your plan year ends December 31, a purchase that day may count, but how your plan dates an online order is a plan rule. Ask your administrator before relying on a last-day order.',
      },
      {
        q: 'Does an FSA purchase count by the order date or the delivery date?',
        a: 'IRS Publication 969 says an FSA pays expenses incurred during the coverage period but leaves the details to the plan. Your plan administrator or summary plan description says which date it uses.',
      },
      {
        q: 'What should I do if my FSA card is declined for eye drops online?',
        a: 'Pay another way and submit a claim with your itemized receipt, if your plan allows it. Whether a card works for an online purchase depends on the card and the plan.',
      },
      {
        q: 'Is it too late to spend FSA money on eye drops after Christmas?',
        a: 'Not necessarily, but check your plan year end date and whether you have a grace period or a carryover. Order early in the week, since the site promises no delivery date.',
      },
    ],
  },
  {
    slug: 'can-i-use-my-fsa-to-buy-eye-drops-as-a-gift',
    title: 'Can I use my FSA to buy eye drops as a gift?',
    description:
      'An FSA pays for your own medical expenses and those of certain family members, not gifts for friends. What IRS Publication 969 says, with examples.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Generally no, unless the person receiving the eye drops is someone whose medical expenses your FSA can cover. IRS Publication 969 lists you, your spouse, dependents you claim on your tax return, and your child under age 27 at the end of your tax year. Eye drops for a friend, coworker or neighbor don’t fit. Your plan’s rules decide the rest, so check with the plan administrator.`,
      },
      { h: 'Whose expenses an FSA can pay' },
      {
        p: `Publication 969 lists the people whose qualified medical expenses a health FSA can reimburse. The short version:`,
      },
      {
        list: [
          `You.`,
          `Your spouse.`,
          `All dependents you claim on your tax return.`,
          `Your child under age 27 at the end of your tax year.`,
          `Certain other people you could have claimed as a dependent, under conditions the publication spells out.`,
        ],
      },
      {
        p: `An FSA is a tax-advantaged account for medical expenses in your household, not a general spending account. A purchase for someone outside that list is a personal purchase, even when the item itself is eligible.`,
      },
      { h: 'Christmas gift examples' },
      {
        list: [
          `Eye drops for your spouse’s stocking: your spouse is on the list, so this can fit, subject to your plan’s rules.`,
          `A bottle for your 24-year-old who’s home for the holidays: your child under 27 at the end of your tax year is on the list.`,
          `Drops for your mother: only if she qualifies under the dependent rules. Our guide on [using an HSA for a parent’s eye drops](/guides/can-i-use-my-hsa-for-my-parents-eye-drops) explains how those rules work for the similar HSA question.`,
          `A Secret Santa gift for a coworker: not a household medical expense, so use your own money.`,
          `A bottle for a friend or a neighbor: same answer.`,
        ],
      },
      { h: 'Why the item being eligible isn’t enough' },
      {
        p: `People sometimes reason that because over-the-counter eye drops are an eligible FSA expense, any eye drop purchase is fine. Publication 969 does list over-the-counter medicine, whether or not prescribed, as something a health FSA can cover. But eligibility has two parts: the item, and the person it’s for. The drops can be eligible while the purchase isn’t, if they’re for someone your plan doesn’t cover. Some plans also ask you to certify that a claimed expense is for an eligible person.`,
      },
      { h: 'Partners, roommates and grown children' },
      {
        p: `An unmarried partner is a common gray area, and so is an adult child past 27 or a roommate. These turn on dependent status, not on how close you are. Our guide to [using an FSA for a partner’s eye drops](/guides/can-i-use-my-fsa-for-my-partners-eye-drops) goes through the partner question. If you’re unsure, ask the plan administrator before you pay with the FSA card, rather than trying to sort it out afterward.`,
      },
      { h: 'If you already paid with the FSA card' },
      {
        p: `Mistakes happen, especially in a busy December. If you used FSA money on eye drops for someone your plan doesn’t cover, contact your plan administrator and ask how to correct it; plans usually have a way to repay the account. Don’t simply leave it. For Quell, an unopened bottle can also be refunded within {returnDays} days of delivery, without sending it back, which may help depending on what your plan prefers. See [refunds on eye drops bought with HSA or FSA money](/guides/refunds-on-eye-drops-bought-with-hsa-or-fsa).`,
      },
      { h: 'Giving eye drops as a gift the simple way' },
      {
        p: `If the recipient isn’t on your FSA, just pay with a regular card. Quell checks out as a guest, ships from Brentwood, Tennessee, to any US address, and costs {shipping} to ship, or nothing on {freeBottles} or more bottles. You can ship to a different address than your billing address; see [shipping to a different address](/guides/can-i-ship-to-a-different-address-than-billing). The site promises no delivery date, so order early for Christmas.`,
      },
      {
        p: `A gift note helps: point the recipient to the label. Quell’s Uses line reads, {uses}, and its caution reads, {warnings}. Someone with an egg or bird allergy should read that caution before using it. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'What about an HSA?' },
      {
        p: `An HSA follows a similar idea: it pays qualified medical expenses for you, your spouse and your dependents, not gifts for anyone else. The details differ from an FSA, so check our guide to [buying a gift with HSA money](/guides/can-you-buy-a-gift-with-hsa-money). For either account, the plan administrator or the HSA trustee is the one who can answer a specific case.`,
      },
      { h: 'A note on the eye drops themselves' },
      {
        p: `Whoever it’s for, a lubricating drop relieves dryness; it doesn’t explain it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. If the person you’re buying for has eyes that stay dry, hurt, or see differently, an eye doctor can find the cause and decide what to do. The label’s rule: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can I use FSA money to buy a gift for someone else?',
        a: 'Generally not, unless the person is someone whose medical expenses your FSA covers. IRS Publication 969 lists you, your spouse, dependents you claim and your child under 27 at the end of your tax year.',
      },
      {
        q: 'Can I use my FSA for my spouse’s eye drops at Christmas?',
        a: 'Your spouse is one of the people Publication 969 lists, so eye drops for your spouse can be an FSA expense, subject to your plan’s rules and receipt requirements.',
      },
      {
        q: 'What if I bought a gift with my FSA card by mistake?',
        a: 'Contact your plan administrator and ask how to correct it; plans usually have a way to repay the account. An unopened Quell bottle can also be refunded within the refund window.',
      },
      {
        q: 'Can I use my FSA for a Secret Santa gift?',
        a: 'No. A gift for a coworker or friend isn’t a medical expense for anyone your FSA covers, even if the item itself, like eye drops, is FSA eligible.',
      },
    ],
  },
  {
    slug: 'can-i-stock-up-on-eye-drops-with-fsa-money',
    title: 'Can I stock up on eye drops with FSA money?',
    description:
      'Buying several bottles of eye drops with leftover FSA money? What IRS Publication 969 allows, what your plan decides, and how many bottles make sense.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `You can usually buy several bottles of over-the-counter eye drops with FSA money, since IRS Publication 969 lists OTC medicine, whether or not prescribed, as a health FSA expense. Publication 969 doesn’t set a bottle limit, but plans can have their own rules, so check with your administrator. Buy what you’ll use before the bottles expire, and keep the itemized receipt.`,
      },
      { h: 'What IRS Publication 969 allows' },
      {
        list: [
          `Over-the-counter medicine, whether or not prescribed, is an expense a health FSA can cover.`,
          `Qualified medical expenses are those specified in the plan, so your plan document has the final word.`,
          `An FSA can’t make advance reimbursements of future or projected expenses. You have to actually buy the item first.`,
          `The full amount you elected for the year is available at any time during the coverage period, regardless of how much you’ve contributed so far.`,
        ],
      },
      {
        p: `None of that limits the number of bottles directly. What it does mean is that the purchase has to be a real expense during your coverage period, and your plan’s rules apply on top. Some plans may ask questions about unusually large quantities. If you’re planning a big order, a short call to the administrator first saves trouble later.`,
      },
      { h: 'Is stocking up a good idea?' },
      {
        p: `It can be, within reason. If you use lubricating drops regularly and your FSA has money you’d otherwise forfeit, buying a few months’ supply is a sensible use of it. Where it goes wrong is buying far more than you’ll get through, and ending up with bottles that pass their expiration date in a drawer. The goal is to turn money you’d lose into things you’ll use, not just to empty the account.`,
      },
      { h: 'How many bottles make sense' },
      {
        p: `Work from the label and your own habits rather than a guess. Quell comes in a {size} bottle, and its directions read: {directions}. To estimate how many bottles you need:`,
      },
      {
        list: [
          `Look at how long your last bottle took you to finish, using it as directed.`,
          `Count the months until you’d next have FSA money, such as the start of a new plan year or the end of a grace period.`,
          `Check the expiration date printed on the bottles you receive, and don’t plan to use any past it.`,
          `Think about where you’ll keep them; the label’s storage line reads: {storage}.`,
        ],
      },
      {
        p: `Our guide to [where the expiration date is on eye drops](/guides/where-is-the-expiration-date-on-eye-drops) shows where to look.`,
      },
      { h: 'Storing a supply' },
      {
        p: `A stock of bottles should live somewhere that stays within the label’s storage range: a closet or a cabinet away from a heater, not a garage, a car or a sunny windowsill. Keep unopened bottles sealed until you need them, and use the oldest first. If a bottle ever looks different from what the label describes, check the label first: {doNotUse}. The label also describes its normal look: {milky}.`,
      },
      { h: 'Grace periods and carryovers change the math' },
      {
        p: `If your plan has a grace period, Publication 969 lets you incur expenses for up to 2½ months after the plan year ends and pay them from last year’s balance. If it has a carryover, a capped amount moves into next year. Either one reduces the pressure to buy everything in December. Our guide to [FSA carryover and grace periods](/guides/fsa-carryover-and-grace-period-for-eye-drops) explains each. With neither, unused money is forfeited, which is when a measured stock-up makes the most sense.`,
      },
      { h: 'Ordering a supply of Quell' },
      {
        p: `Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which suits a stock-up order. We ship from Brentwood, Tennessee, to US addresses, checkout is as a guest, and there are no promo codes or subscriptions; one reminder email goes out when it may be time to reorder. No delivery date is promised. Your order confirmation email is the itemized receipt most plans ask for. See [how to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) if your card isn’t accepted and you need to claim afterward.`,
      },
      { h: 'If you overbuy' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. If FSA money paid for them, tell your plan administrator about the refund, since it changes what you spent. [Ordered too many bottles of eye drops?](/guides/ordered-too-many-bottles-of-eye-drops) covers the steps.`,
      },
      { h: 'A supply isn’t a substitute for an exam' },
      {
        p: `If you find yourself needing drops more and more, or your eyes feel worse even with regular use, that’s worth more than another bottle. An eye doctor can find the cause and decide what to do. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Is there a limit on how many eye drops I can buy with an FSA?',
        a: 'IRS Publication 969 doesn’t set a quantity limit for over-the-counter medicine, but plans can have their own rules. Check with your plan administrator before a large order.',
      },
      {
        q: 'Can I buy a year’s supply of eye drops with my FSA?',
        a: 'Possibly, if your plan allows it and you’ll use the bottles before they expire. Publication 969 requires a real purchase, not an advance reimbursement, and your plan’s rules apply on top.',
      },
      {
        q: 'How many bottles of eye drops should I buy with leftover FSA money?',
        a: 'Estimate from how long a bottle lasts you when used as the label directs, the months until your next FSA money, and the expiration dates on the bottles.',
      },
      {
        q: 'Where should I store extra bottles of eye drops?',
        a: 'Somewhere that stays within the label’s storage range, such as a closet away from heaters, not a car or garage. Use the oldest bottle first.',
      },
    ],
  },
  {
    slug: 'using-a-package-lockbox-for-eye-drop-deliveries',
    title: 'Using a package lockbox for eye drop deliveries',
    description:
      'A porch lockbox can keep an eye drop delivery away from porch thieves, but sun and cold reach inside it. How to use one, and what the terms cover.',
    category: 'shipping',
    addedOn: '2026-11-27',
    body: [
      {
        p: `A locking package box on your porch can keep an eye drop delivery out of sight of porch thieves, and a {size} bottle in its carton fits easily. The catch is temperature: a box in full sun or a freezing night can push the bottle past the label’s storage range. Put the box in shade, watch your tracking email, bring the package in promptly, and know that theft isn’t one of the replacement cases in our terms.`,
      },
      { h: 'Why people add a lockbox in December' },
      {
        p: `Package theft tends to get attention in the holiday weeks, when porches fill with boxes and many people are at work or traveling. A lockable delivery box gives the driver somewhere to put a package other than the doormat. Most work the same way: the driver drops the package through a slot or into an unlocked compartment, and once it closes, only someone with a key or code can open it. For a small package like an eye drop order, even a compact box is big enough.`,
      },
      { h: 'Will an eye drop order fit?' },
      {
        p: `Almost certainly. Quell comes in a {size} bottle, packed in a carton, and even a multi-bottle order ships in a small box. If your lockbox has a drop slot rather than a door, check the slot size against a small shipping box, since a slot sized only for envelopes won’t take it. A bigger concern is whether the driver uses the box at all; some lockboxes come with a sign or label for the lid, and a box that sits right next to the door is easier to notice than one at the end of the driveway.`,
      },
      { h: 'Sun, cold and the storage line' },
      {
        p: `Quell’s label gives a storage range: {storage}. A lockbox is a closed container sitting outdoors, so its inside temperature follows the weather and the sun. A dark metal or plastic box in direct afternoon sun can get much hotter than the air around it, and on a winter night it’s as cold as the porch. A package that sits in the box for an hour is one thing; a package that sits there all weekend while you’re away is another.`,
      },
      {
        list: [
          `Put the box in the shadiest spot that still looks obvious to a driver, such as under a porch roof.`,
          `Choose a light-colored box if you’re buying one for a sunny spot.`,
          `Watch for the tracking email so you know when the package lands.`,
          `Ask a neighbor with a code or key to bring it in if you’re away.`,
          `In the coldest weeks, bring the package inside as soon as you can and let it come to room temperature before you open it.`,
        ],
      },
      {
        p: `If a bottle has been through a heat wave or a hard freeze, look at it before use. The label says: {doNotUse}. For more on cold, see [what if no one is home when eye drops arrive?](/guides/what-if-no-one-is-home-when-eye-drops-arrive).`,
      },
      { h: 'Other ways to keep a package off the porch' },
      {
        list: [
          `Ship to your workplace, if your employer allows personal deliveries.`,
          `Ship to a trusted neighbor, friend or relative who’s home during the day.`,
          `In an apartment building, use the front office or a package room. See [getting eye drops delivered to an apartment](/guides/eye-drops-delivered-to-an-apartment).`,
          `Check the carrier’s own tracking page; carriers sometimes offer delivery options once a package is on its way.`,
        ],
      },
      {
        p: `Whatever you choose, put the full address, with any unit or suite number, in the shipping fields at checkout, and use the name of the person who’ll be there to receive it.`,
      },
      { h: 'Watching the tracking email' },
      {
        p: `When your order ships, you get an email with tracking. The site doesn’t promise a delivery date, so the tracking updates are your guide to when a package will reach the box. If tracking says delivered and the box is empty, check around the porch, with neighbors and in the mailbox before assuming the worst; [tracking says delivered but no package?](/guides/tracking-says-delivered-but-no-parcel) has a fuller checklist.`,
      },
      { h: 'What if it’s stolen anyway?' },
      {
        p: `A lockbox lowers the odds but doesn’t make a package impossible to take. Section 6 of our [terms](/terms) says risk of loss passes on delivery to the address you provide. Section 7 says orders that arrive damaged, incorrect or with a broken tamper seal are replaced within {returnDays} days of delivery; theft isn’t on that list. If a package disappears, contact the carrier first, then call us at {phone}, {hours}, with your order number. Our guide to an [eye drop package stolen](/guides/eye-drop-package-stolen) walks through each step.`,
      },
      { h: 'Check the box when you open it' },
      {
        p: `When you bring a package in, look it over before you put the bottle away. If the carton is crushed, the bottle is damaged or the tamper seal is broken, don’t use it; those are replacement cases under our terms, so call {phone} within {returnDays} days of delivery. If the bottle looks fine, the label describes its normal look: {appearance}`,
      },
      { h: 'Ordering with a lockbox in mind' },
      {
        p: `We ship from Brentwood, Tennessee, to US addresses only. Checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which also means one delivery to watch for instead of several. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. When you’re ready, [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Do package lockboxes stop porch theft?',
        a: 'They make a package much harder to grab, because it’s out of sight and locked once the lid closes. They don’t make theft impossible, so watching your tracking and bringing packages in promptly still helps.',
      },
      {
        q: 'Can eye drops get too hot in a porch lockbox?',
        a: 'They can if the box sits in direct sun for long. Quell’s label gives a storage range, so place the box in shade and bring the package in soon after delivery.',
      },
      {
        q: 'Will a driver put my package in a lockbox?',
        a: 'Many will if the box is easy to see by the door and clearly marked for deliveries. The carrier’s tracking page may also offer delivery options once your package is on its way.',
      },
      {
        q: 'Does Quell replace a package stolen from a lockbox?',
        a: 'Our terms replace orders that arrive damaged, incorrect or with a broken tamper seal; theft isn’t one of those cases. Contact the carrier, then call us with your order number.',
      },
    ],
  },
  {
    slug: 'refund-if-your-eye-doctor-says-to-stop-using-the-drops',
    title: 'Refund if your eye doctor says to stop the drops?',
    description:
      'If an eye doctor tells you to stop using Quell or to use something else, unopened bottles can be refunded. What happens with an opened one, and what to do.',
    category: 'returns',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If your eye doctor tells you to stop using Quell, any unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. Opened bottles can’t be refunded, for health and safety reasons. Call {phone}, {hours}, with your order number. Follow your doctor’s advice about the drops in your eyes first; the refund can wait a day.`,
      },
      { h: 'Your doctor’s advice comes first' },
      {
        p: `An eye doctor who has examined you knows things a label can’t: what’s causing your symptoms and what fits your eyes. If they’ve told you to stop a lubricating drop, switch to something else, or pause all drops for now, follow that. The label itself sends you to a doctor in some situations: {stopUse} Our guide to [what “ask a doctor” means on an eye drop label](/guides/what-ask-a-doctor-means-on-an-eye-drop-label) explains that line. The order questions are simple by comparison.`,
      },
      { h: 'Unopened bottles: what the terms say' },
      {
        p: `Section 7 of our [terms](/terms) covers this. If you change your mind about an unopened bottle, you can contact us within {returnDays} days of delivery for a refund of the product price, and you don’t need to send the bottle back. The reason doesn’t have to be a doctor’s advice; it applies whatever the reason. Original shipping isn’t refunded.`,
      },
      {
        list: [
          `Find your order number in the confirmation email, or look the order up on the [order page](/orders).`,
          `Count the sealed bottles you still have.`,
          `Call {phone}, {hours}, and say which bottles are unopened.`,
          `Keep the sealed bottles; you don’t need to mail them anywhere.`,
        ],
      },
      { h: 'Opened bottles' },
      {
        p: `Opened eye drops can’t be refunded, returned or resold, for health and safety reasons. That’s true even when a doctor asked you to stop, because the issue is the bottle, not the reason. Once a bottle has been opened, nobody can confirm how it was handled or stored. Our guide to [why opened eye drops can’t be returned](/guides/why-opened-eye-drops-cannot-be-returned) explains the reasoning.`,
      },
      { h: 'When the 30 days start' },
      {
        p: `The {returnDays}-day window runs from delivery, not from the order date or from your doctor visit. If you bought a supply a while ago and your appointment comes later, check the delivery date in your tracking email. [When does the refund window start?](/guides/when-does-the-eye-drop-refund-window-start) has examples. If the window has passed, call anyway and explain; we can tell you what applies.`,
      },
      { h: 'If the doctor said to stop because of a reaction' },
      {
        p: `If you stopped because your eyes reacted, such as stinging, swelling or pain after using the drops, the medical side matters more than the refund. Keep the bottle and its carton so your doctor or pharmacist can see the ingredients. Quell’s active ingredients are {actives}; its inactive ingredients are {inactives}. The label also cautions: {warnings}. If you think you’re having an allergic reaction, get medical care. Our guide on [returns if you’re allergic](/guides/can-i-return-eye-drops-if-im-allergic) covers the order side of that case.`,
      },
      { h: 'If the doctor wants you to use a different product' },
      {
        p: `Sometimes a doctor suggests a different kind of drop, a prescription, or a product to use at night. That’s their call, and the label doesn’t cover using Quell alongside other eye drops, so ask them before combining anything. For the bottles you no longer need, the refund rules above apply. If you still have questions about what Quell contains, our [Drug Facts page](/drug-facts) shows the full panel you can take to the appointment.`,
      },
      { h: 'Damaged or wrong orders are separate' },
      {
        p: `If any bottle arrived damaged, incorrect or with a broken tamper seal, that’s a replacement case under our terms, not a refund case, and it applies within {returnDays} days of delivery. Mention it on the same call.`,
      },
      { h: 'Medical questions go to the doctor, not us' },
      {
        p: `When you call, we can help with the order: what was bought, when it was delivered and which bottles qualify. We can’t give medical advice about whether to keep using the drops, how to taper off or what to use instead. That belongs with your eye doctor or pharmacist. [Order questions vs. medical questions](/guides/order-questions-vs-medical-questions) sorts out which is which.`,
      },
      { h: 'If you start again later' },
      {
        p: `If your doctor later says a lubricating drop is fine again, you can reorder any time. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Quell ships from Brentwood, Tennessee, to US addresses.`,
      },
    ],
    faq: [
      {
        q: 'Can I return eye drops if my doctor says not to use them?',
        a: 'Unopened bottles can be refunded within the refund window, counted from delivery, and you don’t send them back. Opened bottles can’t be refunded. Call us with your order number.',
      },
      {
        q: 'Do I need a doctor’s note to get a refund on unopened eye drops?',
        a: 'No. The refund on unopened bottles applies whatever the reason, as long as you contact us within the window after delivery.',
      },
      {
        q: 'What should I do with an opened bottle my doctor told me to stop?',
        a: 'Stop using it as your doctor advised. Keep the bottle and carton if your doctor or pharmacist wants to see the ingredients. Opened bottles can’t be refunded.',
      },
      {
        q: 'Can Quell tell me what to use instead?',
        a: 'No. We can help with the order, but what to use instead is a medical question for your eye doctor or pharmacist.',
      },
    ],
  },
  {
    slug: 'how-much-light-mineral-oil-is-in-quell',
    title: 'How much light mineral oil is in Quell?',
    description:
      'Quell’s label gives light mineral oil’s strength next to its name. Where to find the figure, how it compares with the other actives, and what it can’t tell you.',
    category: 'formula',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Quell’s Drug Facts panel lists light mineral oil as an active ingredient with its strength printed beside it: {mineralOil}. That’s the smallest figure of the three active ingredients, which are {actives}. The panel names its purpose as an emollient. The figure tells you the oil’s share of the formula, not how much reaches your eye in each drop.`,
      },
      { h: 'Where to find the figure on the box' },
      {
        p: `The strength of each active ingredient is printed in the first section of the Drug Facts panel, under “Active ingredients,” right next to its name. The panel then lists each one’s purpose. On Quell, that section reads as {actives}, with light mineral oil last. The inactive ingredients, listed further down, come without any figures at all. You can read the whole panel on our [Drug Facts page](/drug-facts), and [the active ingredients section](/guides/the-active-ingredients-section) explains how that part of any label is laid out.`,
      },
      { h: 'How it compares with the other two actives' },
      {
        list: [
          `Glycerol is listed as {glycerol}, with the purpose Lubricant.`,
          `Polysorbate 80 is listed as {polysorbate}, also a Lubricant.`,
          `Light mineral oil is listed as {mineralOil}, the only active named an Emollient.`,
        ],
      },
      {
        p: `Put side by side, light mineral oil’s figure is half of each of the other two. That doesn’t make it a minor ingredient in what it does. It’s the one active the panel lists as an emollient, and the only oil among the three actives. Our guide to [lubricant vs. emollient eye drops](/guides/lubricant-vs-emollient-eye-drops) explains the two words.`,
      },
      { h: 'Why an oil is measured as a small share' },
      {
        p: `The three actives are small shares of the whole, and sterile water is among Quell’s inactive ingredients. For an oil in particular, a small share makes sense: the tear film’s own oil layer is a very thin film on the surface of the watery layer beneath it, and an eye drop built to support that layer doesn’t need to be mostly oil. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Our guide to [the tear film’s oil layer](/guides/the-tear-films-oil-layer) describes that layer.`,
      },
      { h: 'Light mineral oil isn’t the only oil in the bottle' },
      {
        p: `Emu oil is also in Quell, but it’s listed with the inactive ingredients, so the panel gives it no figure. The carton’s side panel describes it this way: {emuOil} Light mineral oil is the oil the panel counts as an active ingredient; emu oil is one the carton describes separately. [Emu oil and light mineral oil: why Quell has both](/guides/emu-oil-and-light-mineral-oil-in-quell) goes into the pairing.`,
      },
      { h: 'What the figure can’t tell you' },
      {
        list: [
          `How much oil is in a single drop. The label counts drops, not milliliters, and the size of a drop can vary.`,
          `How the oil compares with other products. Formulas differ in many ways, and a higher or lower figure isn’t a ranking.`,
          `Whether it suits your eyes. That depends on why your eyes are dry, which is an eye doctor’s question.`,
          `How it feels or looks. The label describes the look separately: {milky}.`,
        ],
      },
      { h: 'Why the oil shows in the bottle’s look' },
      {
        p: `Oil and water don’t mix on their own, so a drop that carries an oil alongside water tends to look cloudy rather than clear. That’s part of why Quell has the look its label describes. The site adds: {appearance} Our guide to [why Quell is milky brown](/guides/why-is-quell-milky-brown) covers the rest of the color.`,
      },
      { h: 'What the label says about using it' },
      {
        p: `The figure is fixed by the formula; how much you use is set by the directions: {directions}. Using more than directed isn’t something the label covers. The panel also cautions: {warnings}. And it asks you to store it like this: {storage}.`,
      },
      { h: 'Questions about mineral oil and your eyes' },
      {
        p: `If you’ve been told to avoid oils in your eyes, or you’ve had a reaction to an eye product before, show the label to your eye doctor or pharmacist before you use Quell. The label’s stop-use rule applies to any reaction: {stopUse} You can [order Quell from the home page](/#buy) once you know it’s right for you; it ships from Brentwood, Tennessee, to US addresses.`,
      },
    ],
    faq: [
      {
        q: 'What percentage of Quell is light mineral oil?',
        a: 'The Drug Facts panel prints it next to the ingredient’s name: {mineralOil}. It’s the smallest of the three active ingredient figures on the label.',
      },
      {
        q: 'Why is there less mineral oil than glycerol in Quell?',
        a: 'The formula sets each share, and the label shows them. The tear film’s own oil layer is a very thin film, so an oil doesn’t need to be a large share of a drop built to support it.',
      },
      {
        q: 'Does the label show how much emu oil is in Quell?',
        a: 'No. Emu oil is listed with the inactive ingredients, and inactive ingredients are listed without figures.',
      },
      {
        q: 'Is more mineral oil in an eye drop better?',
        a: 'Not necessarily. A figure on one label isn’t a ranking against another product, and which kind of drop suits your eyes is a question for an eye doctor.',
      },
    ],
  },
  {
    slug: 'what-if-a-doctor-gives-different-eye-drop-directions',
    title: 'Doctor’s directions differ from the eye drop label?',
    description:
      'If your eye doctor tells you to use eye drops differently from the label’s directions, here is how to handle it, what to ask, and what to write down.',
    category: 'label',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If your eye doctor gives you directions that differ from the eye drop label, follow the doctor’s instructions for your eyes, since they’re based on an exam. The label’s directions are written for general use without a doctor. Ask the doctor to write the new directions down, keep them with the bottle, and check with them or a pharmacist if the two seem to conflict on anything important.`,
      },
      { h: 'Why the label and the doctor can differ' },
      {
        p: `An over-the-counter label has to work for everyone who picks it up without seeing anyone first. Its directions are general, and written to be followed on your own. Quell’s say: {directions}. A doctor who has examined you is giving individual advice for your eyes and situation. That might mean a different number of uses a day, a set time of day, using it only in one eye, or pausing it for a while. Neither is wrong. They’re written for different situations.`,
      },
      { h: 'Which directions should I follow?' },
      {
        p: `For your own eyes, follow the doctor who examined you. The label itself expects that: its stop-use line sends you to a doctor, and doctors can and do give their own instructions. If something about the doctor’s directions worries you, ask them about it rather than quietly going back to the label. Our guide to [what “ask a doctor” means on an eye drop label](/guides/what-ask-a-doctor-means-on-an-eye-drop-label) explains how the label hands off to a doctor.`,
      },
      { h: 'What to ask the doctor' },
      {
        list: [
          `How many times a day, and in which eye or both?`,
          `Is there a time of day that matters, like before bed or before screens?`,
          `How long should I use it this way before checking back?`,
          `Should I space it from any other drops I use, and in what order?`,
          `What should make me stop and call?`,
        ],
      },
      {
        p: `Bring the bottle or a photo of the label to the appointment, so the doctor sees exactly what you’re using. [Taking your eye drop label to a doctor visit](/guides/taking-your-eye-drop-label-to-a-doctor-visit) has a short checklist.`,
      },
      { h: 'Write the new directions down' },
      {
        p: `It’s easy to forget a spoken instruction by the time you get home, and easier still to fall back on the label printed in front of you. Ask for the directions on paper or in your patient portal, or write them on a sticky note inside the carton. If you share a home with others who use the same kind of drops, label your bottle so nobody follows your instructions by mistake.`,
      },
      { h: 'If the doctor says to use it more often' },
      {
        p: `If a doctor advises using a lubricating drop more often than the label’s directions, that’s their individual advice. The label’s directions don’t change, and we can’t tell you to go beyond them. Make sure you’ve understood the doctor correctly, ask whether there’s a limit, and plan your supply. A {size} bottle used more often runs out sooner. Our guide to [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) explains what the label covers.`,
      },
      { h: 'If the doctor says to use it less, or stop' },
      {
        p: `Follow that too. Using a drop less often than the label allows is always within the label. If a doctor tells you to stop entirely, set the bottle aside and keep it if they might want to see it. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back; opened bottles can’t be refunded.`,
      },
      { h: 'Lines the doctor doesn’t change' },
      {
        p: `Some label lines are about the product, not your eyes, and still apply whatever the dose. Handling: {tip}. Storage: {storage}. Do not use: {doNotUse}. And the caution: {warnings}. If the doctor didn’t know about an egg or bird allergy, tell them. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Contact lenses, children and other drops' },
      {
        p: `The label doesn’t give directions for use with contact lenses, for children, or with other eye drops. If any of those apply, your eye doctor or pharmacist is the one to give directions, and theirs are the ones to write down and follow.`,
      },
      { h: 'If the two still seem to conflict' },
      {
        p: `If the doctor’s directions and the label’s warnings seem to clash, for example on a symptom the label says to stop for, call the doctor’s office or ask a pharmacist before going on. The label’s stop-use rule: {stopUse} When symptoms like pain or changes in vision appear, don’t wait for the next appointment. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Should I follow the eye drop label or my doctor?',
        a: 'For your own eyes, follow the doctor who examined you. The label’s directions are general; the doctor’s are for your situation. Ask them if anything seems to conflict.',
      },
      {
        q: 'Can my doctor tell me to use eye drops more than the label says?',
        a: 'A doctor can give individual advice that differs from the label. Make sure you understand it, ask whether there’s a limit, and write it down.',
      },
      {
        q: 'What should I bring to an appointment about eye drop directions?',
        a: 'The bottle or a clear photo of its Drug Facts panel, a list of any other drops you use, and your questions about how often, when and for how long.',
      },
      {
        q: 'Do the label’s warnings still apply if my doctor changes the dose?',
        a: 'Yes. Lines about handling, storage, appearance and allergies are about the product itself, so they still apply. Tell your doctor about any allergy the label mentions.',
      },
    ],
  },
]
