import type { Guide } from '@/lib/guide-types'

export const DAILY_20261125_C: Guide[] = [
  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-paris-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for PARIS, TX (GHCN USC00416794, cooperative station), elev
   *   542 ft; raw JSON at .daily-job/acis1125/USC00416794.json
   *   (normal highs: Jan 53.5 F, Jun 91.2, Jul 95.8, Aug 96.2, Sep 88.7, Dec 55.8;
   *   normal lows: Jan 33.2, Feb 37.0, Jul 74.8, Aug 74.1, Dec 35.8;
   *   precipitation: May 5.63, Apr 4.70, Oct 4.62, Jan 3.08, Aug 2.95; twelve
   *   months sum to 48.88 in; snowfall "M" in every month, so none is stated)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-paris-tx',
    title: 'Dry eye relief in Paris, Texas',
    description:
      'Paris, Texas gets about 49 inches of rain a year, yet August is its hottest and driest month. NOAA’s station numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Paris, Texas means planning around August. NOAA’s normals for the Paris station make it both the hottest month, with a normal high of 96.2°F, and the driest, at 2.95 inches of rain. Keep air-conditioner vents off your face, blink fully at screens, use a lubricating drop exactly as its label directs, and see an eye doctor for eye pain or any change in your vision.`,
      },
      { h: 'A wet town with a dry August' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Paris cooperative station, which sits at about 540 feet, are the same figures the National Weather Service publishes through its NOWData pages. They describe a place that gets plenty of rain over a year, spread unevenly:`,
      },
      {
        list: [
          `The twelve monthly normals add up to about 48.9 inches of precipitation.`,
          `May is the wettest month at 5.63 inches, with April (4.70) and October (4.62) next.`,
          `August is the driest month at 2.95 inches, and January comes close at 3.08.`,
          `Normal highs pass 90°F in June (91.2), July (95.8) and August (96.2), and September still reaches 88.7.`,
          `January’s normal low is 33.2°F, and December’s is 35.8°F.`,
          `The station has no snowfall normals, so this page gives no snowfall figure.`,
        ],
      },
      {
        p: `A big yearly total doesn’t mean comfortable eyes. Rain comes in storms with dry stretches between them, and most of your hours are spent indoors, where a thermostat decides what the air is like. The kind of air you sit in, and for how long, matters more than the gauge in the backyard.`,
      },
      { h: 'Why are my eyes dry in Paris in late summer?' },
      {
        p: `Late summer stacks three things at once. The heat peaks, and the normal August low of 74.1°F means the house barely cools after dark, so air conditioning runs from morning into the night. Less rain falls than in any other month. And an air conditioner pulls moisture out of the air as it chills it, then pushes that air across whatever is in front of the vent. The tear film is a thin layer of oil over water over mucus, and a steady stream of cool, dry air thins the water layer between blinks.`,
      },
      {
        list: [
          `Close or turn the dashboard vent nearest your face, and aim the rest at your chest or the floor.`,
          `Set a bedroom ceiling fan to its lowest speed, or point a box fan at the wall instead of the bed.`,
          `Do outdoor chores early. The August normal low sits about 22 degrees under the afternoon high.`,
          `Raise the thermostat a degree or two when you’re sitting still and reading; you’ll need less cold air moving past you.`,
        ],
      },
      { h: 'Mowing, gravel roads and outdoor work' },
      {
        p: `Paris is a small city in northeast Texas, and plenty of weeks around it include big yards, pasture fence, a gravel drive, or a truck bed full of feed. Mowers, leaf blowers and tires on dry roads all throw fine dust. Dust makes people squint, and a squint shortens each blink, so more of the eye’s surface stays exposed. Wraparound sunglasses or clear safety glasses do two jobs: they block the dust and they cut glare off a pale road.`,
      },
      {
        p: `In the truck, roll the windows up on dirt roads and set the fan to recirculate until you’re back on pavement. If grit, a grass clipping or anything else actually lands in your eye and the stinging doesn’t settle after a few blinks, that’s for urgent care or an eye doctor, not for a lubricating drop. Rubbing can make it worse.`,
      },
      { h: 'Winter: mild afternoons, cold nights, dry rooms' },
      {
        p: `A Paris winter is short but real. January afternoons reach about 53.5°F, and the nights fall to a normal 33.2°F, so the heat comes on in the evening and stays on until morning from December through February. Warming cold air without adding moisture lowers its relative humidity, which is why a heated bedroom can leave your eyes scratchy at sunrise even after a rainy week.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and keep the door closed so it isn’t trying to humidify the whole house.`,
          `Aim a space heater at your legs and feet, never at the couch where your face will be.`,
          `Sit a few feet back from a wood stove or fireplace rather than right in front of it.`,
          `Turn the thermostat down at night; a cooler bedroom feels less parched.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through each kind of heat in more detail.`,
      },
      { h: 'Long drives and screen hours' },
      {
        p: `Plenty of Paris households log highway miles for work, shopping or family. A long drive means a fixed stare at the road, a vent running the whole time, and in winter a low sun straight through the windshield. Blink deliberately at stop signs and lights, keep sunglasses in the console, and stop every hour or two to rest your eyes. If your week takes you west or east, our pages on [Sherman](/guides/dry-eye-relief-sherman-tx) and [Texarkana](/guides/dry-eye-relief-texarkana-tx) look at their own weather stations.`,
      },
      {
        p: `Office work, school and an evening phone add another layer. People blink less while reading a screen, and many blinks turn into half-blinks that never close the lid. Every 20 minutes, look across the room for a few seconds and close your eyes fully two or three times.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. The directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `For storage, the label says: {storage}. A pickup cab parked in a Paris August climbs well past the top of that range, so carry the bottle in a pocket or a bag that comes inside with you. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Paris' },
      {
        p: `We ship from Brentwood, Tennessee, to Paris and to every other US address. You check out as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You get a tracking email once the box leaves, but no arrival date is promised, so order while you still have some left. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t mail them back. The [Paris page](/eye-drops/paris-tx) and our [Texas page](/eye-drops/state/texas) have more local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness. It can’t tell you why your eyes keep bothering you. The label sets the limit: {stopUse} One eye much worse than the other, light that suddenly hurts, or blur that doesn’t clear with blinking are reasons to call an eye doctor now. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers what shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Paris, Texas get a year?',
        a: `About 48.9 inches, adding up the twelve monthly normals for the Paris station in NOAA’s 1991–2020 records. May is the wettest month at 5.63 inches, and August the driest at 2.95.`,
      },
      {
        q: 'What is the hottest month in Paris, TX?',
        a: `August, by a nose. NOAA’s normal high for the Paris station is 96.2°F in August and 95.8°F in July, and August nights only fall to about 74°F.`,
      },
      {
        q: 'Does it freeze in Paris, Texas in winter?',
        a: `January’s normal low at the Paris station is 33.2°F, so a typical January night hovers just above freezing and colder nights dip below it. December and February nights average a few degrees warmer.`,
      },
      {
        q: 'Can I get Quell eye drops delivered in Paris, Texas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Paris addresses with guest checkout and an emailed tracking link. Because no delivery date is promised, it’s smart to reorder before your last bottle is nearly empty.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-titusville-fl:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for TITUSVILLE, FL (GHCN USC00088942, cooperative station), elev
   *   16 ft; raw JSON at .daily-job/acis1125/USC00088942.json
   *   (normal highs: Jan 68.8 F, Jul 89.9, Aug 89.3, Dec 71.2; normal lows:
   *   Jan 50.4, Jul 74.3, Aug 74.8; precipitation: Jun 7.87, Jul 6.77, Aug 7.80,
   *   Sep 7.46 (Jun–Sep 29.90), Oct 5.06, Nov 2.51, Dec 2.35, Feb 2.56, Apr 2.69;
   *   Nov–Apr sum 16.53; twelve months sum to 55.20 in; snowfall 0.0 every month)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-titusville-fl',
    title: 'Dry eye relief in Titusville, Florida',
    description:
      'Titusville gets over half its 55 inches of rain from June to September, then turns dry. NOAA’s station numbers and dry eye relief for each season.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Titusville follows a two-season year. NOAA’s normals for the Titusville station show June through September bringing almost 30 of its roughly 55 inches of rain, while November through April stays far drier and sunnier. Keep air conditioning off your face in summer, shade your eyes from glare in winter, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Titusville’s wet and dry halves' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Titusville cooperative station, at about 16 feet above sea level, split the calendar cleanly. These are the same normals the National Weather Service shows in NOWData:`,
      },
      {
        list: [
          `The twelve monthly normals total about 55.2 inches of rain.`,
          `June (7.87 inches), July (6.77), August (7.80) and September (7.46) add up to 29.9 inches, more than half the year.`,
          `November through April together bring about 16.5 inches, with December the driest month at 2.35.`,
          `Normal highs peak at 89.9°F in July, and no month’s normal high reaches 90.`,
          `January is the coolest month, with a normal high of 68.8°F and a normal low of 50.4°F.`,
          `Normal snowfall is zero in every month.`,
        ],
      },
      {
        p: `So Titusville’s eyes face two different problems. From late spring to early fall it’s heat, storms and air conditioning. From late fall into spring it’s clear skies, steady sun and more time outdoors.`,
      },
      { h: 'The wet season happens indoors' },
      {
        p: `Afternoon storms don’t moisten the air in your living room. August nights hold a normal low of 74.8°F, so central air rarely gets a break, and every compressor cycle dries the air as it cools it. The car is worse: a small cabin, vents a foot or two from your eyes, and a blast of cold air the moment you start it after the car has sat in a lot.`,
      },
      {
        list: [
          `Aim dashboard vents at your hands or chest and shut the one closest to your face.`,
          `In a home office, move the chair out from under a ceiling register or turn the diffuser’s vanes toward a wall.`,
          `Keep the thermostat a little higher at night instead of sleeping in a cold draft.`,
          `Watch a storm through the window, not a screen, for a few minutes. Looking far away lets you blink normally again.`,
        ],
      },
      { h: 'The dry season: bright, breezy and outdoors' },
      {
        p: `When the rain drops off in November, Titusville spends more time outside. Normal highs from December through March run from about 71°F to 75°F, which is the time of year for fishing, paddling, walking the trails and sitting outside in the evening. Clear skies and a low winter sun put a lot of glare on open water and pale sand, and a breeze across a marsh or a boat deck pulls at the tear film the same way a fan does.`,
      },
      {
        list: [
          `Wear polarized wraparound sunglasses on the water; they cut glare and block wind together.`,
          `Add a brimmed hat when the sun is low and straight in front of you.`,
          `On a moving boat, turn your face away from the wind when you can and close your eyes for a few seconds now and then.`,
          `Keep sunscreen above the brow line. When sweat carries it into the eyes it stings, and rubbing makes it worse.`,
        ],
      },
      {
        p: `Something actually in the eye, whether salt spray, sand or a stray insect, is a different matter. If rinsing with clean water and blinking don’t settle it, see urgent care or an eye doctor rather than reaching for a lubricating drop.`,
      },
      { h: 'Cool mornings and short heating spells' },
      {
        p: `January nights average 50.4°F, and a cold front can drop them lower for a few days. That’s when a heat pump switches to heating or a space heater comes out of the closet. The air it warms has less relative humidity, and people tend to sit close to a space heater with it aimed at their face. Point it at your feet instead, keep a few feet of distance, and turn it off when the room is comfortable. Our guide to [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) has more on placement.`,
      },
      { h: 'Heading to Melbourne or Orlando?' },
      {
        p: `Plenty of Titusville residents drive south along the coast or west toward Orlando for work, shopping and appointments. Highway miles mean a steady stare, a vent running the whole way, and afternoon sun through the windshield. Blink on purpose at red lights, and keep sunglasses where you can reach them. Our pages on [Melbourne](/guides/dry-eye-relief-melbourne-fl) and [Orlando](/guides/dry-eye-relief-orlando-fl) cover the weather at their own stations.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists these Uses: {uses}. Directions: {directions}. Before each use, the panel reminds you: {tip}.`,
      },
      {
        p: `Heat is the storage risk here. The label says: {storage}. A car parked in a Titusville lot in July passes that ceiling quickly, so the bottle belongs in a bag that comes inside with you, not in the glove box or a boat’s dry box in full sun. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Titusville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Titusville and anywhere else in the US. Guest checkout is the only kind there is, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a tracking email when it goes out, though we don’t promise a delivery date. If a box will sit on a hot porch, have it delivered where someone can bring it inside. Unopened bottles can be refunded within {returnDays} days of delivery without mailing them back. See the [Titusville page](/eye-drops/titusville-fl) and the [Florida page](/eye-drops/state/florida) for more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Weather explains a lot of dryness, but not all of it. The label is clear about when to stop: {stopUse} Pain, sudden sensitivity to light, or vision that stays blurry after blinking needs an eye doctor. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainy season in Titusville, Florida?',
        a: `June through September. NOAA’s 1991–2020 normals for the Titusville station put those four months at about 29.9 inches combined, more than half of the roughly 55.2 inches the station gets in a year.`,
      },
      {
        q: 'What is the driest month in Titusville?',
        a: `December, with a normal of 2.35 inches at the Titusville station. November (2.51) and February (2.56) are nearly as dry.`,
      },
      {
        q: 'Why do my eyes feel dry in Titusville when it’s so humid?',
        a: `Because most of the day is spent in air-conditioned rooms and cars, and air conditioning dries the air as it cools it. Vents blowing toward your face speed up evaporation from the tear film, whatever the humidity is outside.`,
      },
      {
        q: 'Does Quell ship to Titusville, FL?',
        a: `It does. Quell goes out from Brentwood, Tennessee, to Titusville addresses, and you’ll get a tracking email once it ships. No arrival date is promised, so order a little ahead of need.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-davis-ca:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for DAVIS 2 WSW EXP FARM, CA (GHCN USC00042294, cooperative
   *   station), elev 60 ft; raw JSON at .daily-job/acis1125/USC00042294.json
   *   (normal highs: Jan 55.5 F, Jun 88.6, Jul 93.3, Aug 92.8, Sep 89.8, Dec 56.0;
   *   normal lows: Jan 38.4, Jul 57.3, Dec 37.9; precipitation: Jan 4.02, Feb 3.90,
   *   Dec 3.74, Mar 2.70, Nov 1.78, Apr 1.15, May 0.73, Oct 0.75, Jun 0.25,
   *   Jul 0.01, Aug 0.04, Sep 0.09 (Jun–Sep 0.39); Nov–Mar 16.14; twelve months
   *   sum to 19.16 in; snowfall 0.0 every month)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-davis-ca',
    title: 'Dry eye relief in Davis, California',
    description:
      'Davis gets under half an inch of rain from June to September, and July days swing 36 degrees. NOAA’s farm-station numbers and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Davis starts with the summer, which is close to rainless. NOAA’s normals for the Davis 2 WSW Experimental Farm station show just 0.39 inches from June through September, with July highs of 93.3°F. Wear wraparound sunglasses on the bike and in the fields, keep fans and vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'A farm station’s view of the year' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Davis 2 WSW Experimental Farm station, a cooperative station about two miles west-southwest of town at roughly 60 feet, read like a calendar with two settings. The National Weather Service publishes the same figures through NOWData:`,
      },
      {
        list: [
          `The twelve monthly normals add up to about 19.2 inches of precipitation.`,
          `November through March bring about 16.1 inches of that, more than four-fifths of the year.`,
          `June gets 0.25 inches, July 0.01, August 0.04 and September 0.09.`,
          `Normal highs reach 88.6°F in June, 93.3°F in July, 92.8°F in August and 89.8°F in September.`,
          `July’s normal low is 57.3°F, about 36 degrees under its normal high.`,
          `December’s normal low is 37.9°F, the coldest of the year, and normal snowfall is zero.`,
        ],
      },
      { h: 'The big summer swing' },
      {
        p: `That 36-degree gap between a July morning and a July afternoon shapes the whole day. Mornings start cool enough for a jacket on the bike, then the afternoon climbs into the 90s, and for months there’s essentially no rain to break it up. Hot, dry afternoon air pulls water out of the tear film quickly, and the evening often means switching between a warm patio and a cooled house.`,
      },
      {
        list: [
          `Put outdoor errands, runs and garden work in the first hours after sunrise, while the air is still cool.`,
          `Close blinds on the west side in the afternoon so the AC doesn’t have to run as hard or as long.`,
          `When the evening cools, opening windows and switching off the compressor gives your eyes a break from vent air.`,
          `Point a bedroom fan at the wall or the foot of the bed rather than across your pillow.`,
        ],
      },
      { h: 'Bikes, wind and open fields' },
      {
        p: `Davis is flat, and if you get around by bicycle, keep in mind that riding makes its own wind, even on a still day, and that air moves straight across your eyes for the whole ride. On the edges of town, farm fields take over, and plowing, harvest and dry roads put fine dust into the air in the summer and fall. Wraparound sunglasses with a close fit block both the wind and the dust; clear lenses do the same job after dark.`,
      },
      {
        p: `If a speck of dust, a seed or a bug hits your eye on the ride, stop rather than rubbing while you pedal. If blinking and clean water don’t clear it, or it keeps hurting, see urgent care or an eye doctor. A lubricating drop isn’t meant to flush something out.`,
      },
      { h: 'Rainy winters and heated rooms' },
      {
        p: `The rain does come, mostly from December to February: 3.74 inches in December, 4.02 in January and 3.90 in February. Outdoors, those are the dampest months. Indoors is another story. With nights near 38°F, furnaces and heat pumps run through the evening, and warming cool air lowers its relative humidity. A dry bedroom on a rainy night is common.`,
      },
      {
        p: `A small humidifier in the bedroom helps, as does keeping a space heater pointed at your feet. Long study or work sessions in a heated room add one more factor, since people blink less while they focus. Our guide to [dry eyes while studying for exams](/guides/dry-eyes-while-studying) has a routine for long screen sessions.`,
      },
      { h: 'Smoke and air quality alerts' },
      {
        p: `On a day when wildfire smoke reaches town and an air quality alert is issued, the smoke adds irritation on top of the dry heat. On those days, follow local air quality guidance, keep windows closed, and use a recirculate setting in the car. Stinging that continues after you’re back in clean air is a reason to call an eye doctor. Our [Sacramento guide](/guides/dry-eye-relief-sacramento-ca) looks at the city station a few miles east.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses: {uses}. The directions: {directions}. And from the warnings: {tip}.`,
      },
      {
        p: `Bike bags and car trunks get hot here. The label says: {storage}. A pannier in full July sun can pass that range, so keep the bottle in a shaded pocket or bring it inside. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Davis' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Davis and every other US address, apartments and student housing included. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows when it ships, but there’s no promised delivery date. Unopened bottles are refundable within {returnDays} days of delivery, and you don’t send them back. More local details are on the [Davis page](/eye-drops/davis-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back once the weather changes, or something else is going on, a drop isn’t the answer. The label says: {stopUse} Pain, light sensitivity or blur that doesn’t clear should be seen promptly. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Davis, California get in summer?',
        a: `Almost none. NOAA’s 1991–2020 normals for the Davis 2 WSW Experimental Farm station put June through September at a combined 0.39 inches, with July at just 0.01.`,
      },
      {
        q: 'How hot does Davis get in July?',
        a: `The normal July high at the Davis farm station is 93.3°F. The normal July low is 57.3°F, so a summer day often swings about 36 degrees from dawn to late afternoon.`,
      },
      {
        q: 'Where is the Davis weather station?',
        a: `The station NOAA uses is Davis 2 WSW Experimental Farm, a cooperative station about two miles west-southwest of town at roughly 60 feet above sea level.`,
      },
      {
        q: 'Can I order Quell to an apartment in Davis?',
        a: `Yes. Put the unit number in the apartment or suite line at checkout so the box reaches the right door. Orders ship from Brentwood, Tennessee, with a tracking email, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-25 for dry-eye-relief-statesville-nc:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for STATESVILLE 2 NNE, NC (GHCN USC00318292, cooperative station),
   *   elev 803 ft; raw JSON at .daily-job/acis1125/USC00318292.json
   *   (normal highs: Jan 48.8 F, Jul 87.3, Dec 51.6; normal lows: Jan 26.4,
   *   Feb 28.4, Mar 34.7, Nov 34.3, Dec 28.9, Jul 66.8; precipitation: Aug 4.91,
   *   Jul 4.42, Feb 3.18, Oct 3.23; twelve months sum to 46.65 in; snowfall:
   *   Jan 2.4, Feb 0.8, Mar 0.4, Dec 1.3, 0.0 Apr–Nov, sum 4.9 in)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-statesville-nc',
    title: 'Dry eye relief in Statesville, North Carolina',
    description:
      'Statesville nights average below freezing from December to February, so heated rooms dry the eyes. NOAA’s station numbers and practical relief.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Statesville is mostly a winter job. NOAA’s normals for the Statesville 2 NNE station put average lows below freezing in December, January and February, so furnaces and heat pumps run for months and indoor air turns dry. Keep heat and vents off your face, run a bedroom humidifier, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Statesville’s weather by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Statesville 2 NNE cooperative station, about two miles north-northeast of town at roughly 800 feet, describe rain in every season and real winter cold. The same figures appear in the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `The twelve monthly normals add up to about 46.7 inches of precipitation, and no month gets less than 3.18 inches.`,
          `August is the wettest month at 4.91 inches; February is the driest at 3.18, with October close at 3.23.`,
          `Normal lows are 28.9°F in December, 26.4°F in January and 28.4°F in February.`,
          `January’s normal high is 48.8°F; July’s is 87.3°F.`,
          `Normal snowfall adds up to about 4.9 inches, mostly in January (2.4) and December (1.3).`,
        ],
      },
      {
        p: `With rain that steady, outdoor dryness isn’t the main story. The trouble comes from what happens to the air once it’s brought indoors and heated.`,
      },
      { h: 'Frosty mornings and heated houses' },
      {
        p: `A January night at 26°F means the heat runs from evening until well after breakfast. Cold air holds little water to begin with, and warming it to 68°F inside drops its relative humidity sharply. A bedroom with a register near the bed, or a heat pump blowing across the pillow, can leave your eyes stiff and scratchy when you wake. Mornings bring a second blast: the car heater on high while you wait for the windshield to clear.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Close or redirect a floor register that blows toward the bed.`,
          `Set the car to defrost the windshield, not to blow on your face, and lower the fan once the glass clears.`,
          `Keep a space heater aimed at your feet and a few feet away from where you sit.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers forced air, heat pumps, radiators and wood stoves one at a time.`,
      },
      { h: 'Snow days indoors' },
      {
        p: `Statesville doesn’t get much snow, about 4.9 inches in a normal year, but a few inches is enough to close schools and keep people home. A snow day tends to mean the heat turned up, everyone in one room, and hours of streaming, games and phones. Long screen sessions slow blinking, and a warm, closed house dries the tear film between blinks. Every half hour or so, look out the window at the snow for a minute and blink slowly and fully. Getting outside for a walk once the roads are safe helps too, with sunglasses for the glare.`,
      },
      { h: 'Leaf season in the yard' },
      {
        p: `October is one of the drier months here at 3.23 inches, and it’s when yards fill with leaves. A leaf blower throws a stream of dust, dried leaf bits and grit, much of it at face height. Wear wraparound safety glasses while you blow or mulch, and keep the nozzle low and aimed away from you. If anything lands in your eye and the stinging doesn’t stop after blinking, have urgent care or an eye doctor look at it rather than using a lubricating drop.`,
      },
      { h: 'Humid summers and air conditioning' },
      {
        p: `July and August bring the year’s heaviest rain and normal highs in the upper 80s. People respond by closing the windows and running the air conditioning, which removes moisture from the air as it cools. Vents in a car or an office that blow across your face speed evaporation from the tear film, so the same habit applies year round: move the air away from your eyes.`,
      },
      {
        p: `Long drives on the interstates around town and screen-heavy jobs add the same pattern: a fixed stare and fewer blinks. Take breaks, look far away, and finish each blink. If you also spend time near Hickory, our [Hickory guide](/guides/dry-eye-relief-hickory-nc) looks at its own station.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. The directions say: {directions}. The panel adds: {tip}.`,
      },
      {
        p: `Storage cuts both ways in Statesville. The label says: {storage}. A car parked on a 26°F January night falls below that range, and a dashboard in July climbs above it, so bring the bottle in with you. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Statesville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Statesville and to every US address. You check out as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email comes once it’s on its way, though no delivery date is promised. In the cold months, bring a delivered box inside promptly. Unopened bottles are refundable within {returnDays} days of delivery, with nothing to send back. The [Statesville page](/eye-drops/statesville-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have more.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Heated air explains a lot of winter dryness, but it’s not the only cause. The label sets the limit: {stopUse} Pain, a sudden change in how you see, or dryness that lasts well past heating season belongs with an eye doctor. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Statesville, NC?',
        a: `NOAA’s 1991–2020 normals for the Statesville 2 NNE station put the January normal low at 26.4°F, the coldest of the year. December (28.9°F) and February (28.4°F) also average below freezing at night.`,
      },
      {
        q: 'How much snow does Statesville get?',
        a: `About 4.9 inches in a normal year at the Statesville 2 NNE station, led by January at 2.4 inches and December at 1.3. April through November average no snow at all.`,
      },
      {
        q: 'Why are my eyes so dry in the winter in Statesville?',
        a: `Because heating cold air lowers its relative humidity. With nights averaging below freezing for three months, the heat runs for long stretches, and the dry indoor air speeds up evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Statesville, North Carolina?',
        a: `Yes. Orders leave Brentwood, Tennessee, for Statesville addresses with guest checkout and a tracking email. No arrival date is promised, so reorder before the bottle runs low.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-field-geologists',
    title: 'Dry eyes for field geologists',
    description:
      'Wind on an outcrop, sun glare off pale rock, dusty roads, then nights mapping on a laptop: why fieldwork dries a geologist’s eyes and what helps.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Field geologists get dry eyes because the job moves between two hard settings: long days on exposed outcrops in wind, sun and dust, then evenings and office weeks staring at maps, logs and screens. Glasses that block wind and glare, deliberate blinking at the hand lens and the laptop, keeping truck vents off your face, and a lubricating drop used as its label directs all help. Grit in the eye needs a doctor.`,
      },
      { h: 'Why fieldwork is hard on the tear film' },
      {
        p: `The tear film has three layers: mucus against the eye, water in the middle and a thin film of oil on top that slows evaporation. Each blink spreads a fresh coat. Anything that speeds evaporation or slows blinking leaves the surface drier, and a field day stacks several of those at once:`,
      },
      {
        list: [
          `Wind across ridgelines, road cuts and open basins, often stronger than in town.`,
          `Bright sun reflected off pale limestone, sandstone, playas and snowfields, which makes you squint.`,
          `Dust from dirt roads, talus slopes and your own hammer.`,
          `Hours of close focus: a hand lens, a compass-clinometer, a field notebook or a tablet in the sun.`,
          `Dry, cold air at elevation on many projects. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why thin, dry air pulls water from the eyes faster.`,
        ],
      },
      { h: 'On the outcrop: wind, glare and dust' },
      {
        p: `Squinting is the hidden problem. When the light is harsh you narrow your eyes, and narrow eyes make short, incomplete blinks that don’t spread tears across the whole surface. Wraparound sunglasses, or polarized lenses with side coverage, reduce both the glare that makes you squint and the wind that dries the eye. A brimmed hat helps when you’re facing into the sun to measure a bedding plane.`,
      },
      {
        list: [
          `Turn your back to the wind while you write notes or sketch, so your face isn’t in the airflow for minutes at a time.`,
          `After a long look through the hand lens, look at the far horizon for a few seconds and close your eyes fully twice.`,
          `Keep sunscreen high on the forehead. Sweat carries it down into the eyes on a climb, and it stings.`,
          `Wipe dust off your sunglasses before you rub your eyes, never after. Better yet, don’t rub them.`,
        ],
      },
      { h: 'Rock chips and grit: not a job for eye drops' },
      {
        p: `Sampling with a rock hammer sends small chips flying, and wind can throw sand from a dry wash straight at your face. Many geologists wear clear glasses while hammering for exactly that reason. If a chip, a grain of sand or anything else gets into your eye and doesn’t clear with blinking or clean water, stop working and get to urgent care or an eye doctor. Don’t try to wash it out with a lubricating drop, and don’t rub. A scratchy feeling that stays after the object seems to be gone also deserves a look by a professional, especially when you’re far from town.`,
      },
      { h: 'In the truck and at camp' },
      {
        p: `Field vehicles add their own dry air. Long drives on dirt roads with the windows up and the fan on high, or the heater running on a cold morning, push dry air across your face for an hour or more. Point the vents at the windshield and your hands, use recirculate on dusty stretches, and let the passenger take the glare-heavy afternoon leg when you can.`,
      },
      {
        p: `Camp nights in dry country are cool and often breezy. A campfire adds smoke and radiant heat; sit upwind and a few feet back. Inside a tent, a small fan or a heater pointed at your sleeping bag dries the eyes while you sleep.`,
      },
      { h: 'Back in the office: maps, logs and screens' },
      {
        p: `The second half of the job is just as dry. Digitizing field maps, building cross sections, logging core or writing a report keeps your eyes locked on a monitor, and screen work cuts how often you blink. Many offices also run heat or air conditioning hard. If your work includes a microscope for thin sections, the eyepieces add more of the same close, unbroken focus.`,
      },
      {
        list: [
          `Every 20 minutes, look across the room or out a window for about 20 seconds.`,
          `Put the monitor slightly below eye level, so your lids cover more of each eye.`,
          `Stand up between map layers or core boxes; a short walk resets your blink pattern.`,
          `Move your desk out of the path of a ceiling vent if you can.`,
        ],
      },
      {
        p: `Land surveyors face a similar mix of open ground and instrument focus; our guide on [dry eyes for land surveyors](/guides/dry-eyes-for-land-surveyors) covers the tripod side.`,
      },
      { h: 'Carrying eye drops in a field vest' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}. Spread over a field day, that might be a drop before you leave the truck, one at lunch and one back at camp.`,
      },
      {
        list: [
          `Wash or wipe your hands first; rock dust and sunscreen on your fingers end up in the eye.`,
          `The label says: {tip}. Keep the cap on in a dusty pocket.`,
          `Storage: {storage}. A dashboard in the desert passes that range, and so does a vest left on a truck seat in a winter field camp, so carry the bottle in an inside pocket.`,
          `The label doesn’t give directions for contact lenses or for use with other drops; ask your eye doctor or pharmacist about those.`,
        ],
      },
      {
        p: `Field seasons run long, so pack enough. We ship from Brentwood, Tennessee, to US addresses only, and no delivery date is promised, so order before you head out rather than to a remote field station. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry eyes after a windy week on the outcrop usually ease once you’re back indoors. If they don’t, the label tells you when to stop: {stopUse} Pain, sensitivity to light or blurred vision that doesn’t clear need a professional. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry during geology fieldwork?',
        a: `Wind, bright sun and dust speed evaporation from the tear film, and squinting at glare shortens your blinks. Long stretches of close focus through a hand lens make it worse.`,
      },
      {
        q: 'What should I do if a rock chip gets in my eye?',
        a: `Stop hammering and don’t rub. If blinking or clean water doesn’t clear it, go to urgent care or an eye doctor; a lubricating drop isn’t made to remove something from the eye.`,
      },
      {
        q: 'Do sunglasses help dry eyes in the field?',
        a: `Wraparound or side-shielded sunglasses cut both the wind across your eyes and the glare that makes you squint. A brimmed hat adds shade when you’re facing the sun.`,
      },
      {
        q: 'Where should a geologist keep eye drops on a field day?',
        a: `In an inside pocket of a vest or jacket, close to your body. The label gives a storage range, and a hot dashboard or a freezing truck cab can fall outside it.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-archaeologists',
    title: 'Dry eyes for archaeologists',
    description:
      'Troweling in the sun, sifting dust through screens, then hours at a lab microscope or catalog: how dig work dries an archaeologist’s eyes and what helps.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Archaeologists get dry eyes from both halves of the work. On a dig, sun, wind and the fine dust that rises from troweling and screening soil pull moisture from the tear film, and kneeling close to the ground keeps you squinting. In the lab, microscopes, cataloging and photo editing slow your blinking. Shield your eyes outdoors, take blink breaks indoors, use a lubricating drop as labeled, and see a doctor for anything in the eye.`,
      },
      { h: 'What a dig season does to your eyes' },
      {
        p: `A field season can mean weeks of early starts and full days in an open unit with little shade. The tear film, a thin layer of oil over water over mucus, loses water faster in moving, dry air, and each blink is what spreads a fresh layer. On a site, several things work against it at once:`,
      },
      {
        list: [
          `Sun overhead and glare off pale soil, sand or a white screen frame, which makes you squint.`,
          `Wind across an open field or a hillside, often picking up loose spoil.`,
          `Dust from troweling, shoveling, brushing and pouring buckets through a screen.`,
          `Close, careful focus on a few inches of soil for long stretches.`,
        ],
      },
      { h: 'Screening and sifting: the dustiest job on site' },
      {
        p: `Shaking dirt through a quarter-inch or eighth-inch screen sends a cloud of fine particles up toward the person holding the frame. In dry soil, that cloud is right at face level for hours. A few habits help:`,
      },
      {
        list: [
          `Stand so the wind carries the dust away from you, and swap sides when it shifts.`,
          `Shake low and steady rather than hard and high.`,
          `Wear close-fitting sunglasses or clear wraparound glasses. Many crews keep them at the screens for this reason.`,
          `Rotate off the screens now and then, so one person isn’t in the dust the whole shift.`,
        ],
      },
      {
        p: `If dust or grit gets into your eye and blinking or clean water doesn’t clear it, stop and get it seen at urgent care or by an eye doctor. Don’t rub, and don’t count on a lubricating drop to flush it out; that isn’t what the drop is for.`,
      },
      { h: 'In the unit: kneeling, troweling and glare' },
      {
        p: `Excavating means hours bent over a small area, reading subtle color changes in the soil. That kind of attention slows blinking, much as reading does. Sun on the side wall of a unit and on pale backdirt adds glare. A brimmed hat and a shade canopy over the unit help, as does a short break every so often to stand, stretch and look at the horizon. Close your eyes fully a few times before you kneel back down.`,
      },
      {
        p: `Sunscreen is the other irritant. Sweat carries it into the eyes on hot afternoons. Keep it off the eyelids, and apply it with a stick on the forehead so it doesn’t run as easily.`,
      },
      { h: 'Back at the lab: microscopes and catalog screens' },
      {
        p: `Lab work brings a different kind of strain. Washing and sorting artifacts, studying small finds under a microscope, entering records into a database, and processing hundreds of site photographs all mean long periods of close focus. People blink less while they concentrate, and many lab rooms are heated or air-conditioned.`,
      },
      {
        list: [
          `Look up from the eyepieces and across the room every 20 minutes or so.`,
          `Adjust the microscope so you aren’t straining forward into it.`,
          `Lower the monitor slightly, and turn screen brightness to match the room.`,
          `Keep a desk fan or a vent from blowing across your face.`,
        ],
      },
      {
        p: `If you spend more of your week in the lab than in the field, our guide to [screens and your tear film](/guides/screens-and-your-tear-film) has more on monitor setup.`,
      },
      { h: 'Using Quell around a dig schedule' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses: {uses}. Its directions: {directions}. For a dig day, that can mean one dose before you head to site, one at the lunch break, and one in the evening.`,
      },
      {
        list: [
          `Clean your hands first. Soil and sunscreen on your fingers can end up in your eye.`,
          `The panel warns: {tip}. Site dust gets everywhere, so recap the bottle right away.`,
          `The storage line reads: {storage}. A field vehicle or a tool tent in summer sun can climb past that, so keep the bottle in a shaded pocket or a cooler bag with no ice touching it.`,
          `The label doesn’t cover contact lenses or using another drop alongside it; ask an eye doctor or pharmacist.`,
        ],
      },
      {
        p: `If your season takes you to a remote site, buy before you go. Quell ships only to US addresses and no delivery date is promised. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to stop and see an eye doctor' },
      {
        p: `Gritty, tired eyes at the end of a dusty day usually settle with rest. The label lists when to stop using a drop: {stopUse} An eye that hurts, keeps watering or blurs after a day on site should be checked, since something small may still be in it. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry on an archaeological dig?',
        a: `Sun, wind and dust on an open site speed evaporation from the tear film, and long close focus on the soil slows your blinking. Screening dirt adds a cloud of fine particles at face level.`,
      },
      {
        q: 'How do I keep dust out of my eyes when screening soil?',
        a: `Stand upwind of the screen, shake low and steady, and wear close-fitting glasses. Rotating off the screens during a shift also limits how long you’re in the dust.`,
      },
      {
        q: 'Can archaeologists use eye drops in the field?',
        a: `A lubricating drop can be used on site as its label directs, after cleaning your hands. If something is actually in your eye, get it seen rather than using a drop.`,
      },
      {
        q: 'Why do my eyes hurt after looking through a microscope?',
        a: `Close focus at the eyepieces slows blinking, so the eye’s surface dries between blinks. Regular breaks help; actual pain is a reason to stop and see an eye doctor.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-vineyard-workers-in-winter',
    title: 'Dry eyes for vineyard workers in winter',
    description:
      'Winter pruning means cold wind down the rows, low sun in your face and canes at eye level. How vineyard crews can keep their eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Vineyard workers often get dry, stinging eyes in winter because pruning puts them in cold wind for hours, facing a low sun that glares off bare ground and wires. Cold air carries little moisture, wind thins the tear film, and squinting shortens blinks. Wraparound glasses, short breaks with your back to the wind, a vehicle heater aimed away from your face, and a lubricating drop used as labeled all help.`,
      },
      { h: 'Why winter pruning dries the eyes' },
      {
        p: `In many vineyards, winter is when crews cut back last year’s growth while the vines are bare. The work is steady and repetitive, row after row, and the weather is whatever the day brings. Several things combine:`,
      },
      {
        list: [
          `Cold air holds little water, so it pulls moisture from the eye’s surface quickly.`,
          `Wind funnels down open rows, and on a slope it can hit you head-on for a whole row.`,
          `The sun stays low in winter, so it shines almost straight into your eyes on rows that run toward it.`,
          `Close focus on buds, spurs and cut points keeps your eyes fixed and your blinks shallow.`,
        ],
      },
      {
        p: `The tear film is a thin layer of oil over water over mucus, and every full blink spreads it again. Wind and cold speed up the water loss; a narrow squint means each blink covers less of the eye.`,
      },
      { h: 'Why do my eyes water in the cold if they’re dry?' },
      {
        p: `Watering eyes in a cold wind are common, and they can come from the same surface that feels dry. When the eye’s surface gets irritated, it can respond with a rush of reflex tears that run down your cheeks without settling the dryness. Wiping them with a cold, dirty glove adds grit. Turning your back to the wind for a few seconds and blinking slowly often does more than wiping.`,
      },
      { h: 'Canes, wires and things that hit the eye' },
      {
        p: `Pruning means pulling and cutting canes, and a cane can spring back toward your face. Trellis wires, clips and the tips of cut spurs sit at eye height in many systems. Glasses with side coverage are worth the small trouble of fogging, and many crews wear them for this reason. If a cane, a bark flake or anything else strikes or lands in your eye, stop work. If it hurts, feels like something is still there, or your vision changes, go to urgent care or an eye doctor. A lubricating drop isn’t meant for an injury or for washing debris out.`,
      },
      { h: 'Glare and the low winter sun' },
      {
        p: `A clear winter morning can be the hardest light of the year to work in. Polarized or tinted wraparound lenses cut the glare off wet ground, frost and wires. A brimmed hat or cap helps when the row points into the sun. If you can, work the rows that face the sun later in the day, when it has moved, or at least alternate so you aren’t squinting into it for hours.`,
      },
      {
        list: [
          `Keep a clear pair for gray, foggy mornings and a tinted pair for sun.`,
          `An anti-fog wipe on the inside of the lenses keeps people from pushing glasses up onto their heads.`,
          `Stop at the end of a row, close your eyes for a few seconds and take a couple of full blinks.`,
        ],
      },
      { h: 'Warming up in the truck or the shop' },
      {
        p: `Breaks bring a different kind of dry air. The heater in a truck or a heated shop pushes warm, dry air, and after a cold row it’s tempting to put your face right into it. Aim the vents at your hands and feet. Going back and forth between cold wind and a hot cab many times a day is part of why eyes feel worn out by evening. Our guide to [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers more for outdoor winter work, and [dry eyes for farmers](/guides/dry-eyes-for-farmers) looks at the rest of the farm year.`,
      },
      { h: 'Using eye drops in the vineyard' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives these Uses: {uses}. Directions: {directions}. A practical pattern is a dose before the first row, one at a midday break and one after work.`,
      },
      {
        list: [
          `Take gloves off and clean your hands first; sap, soil and sprays stay on gloves and fingers.`,
          `The label says: {tip}. Recap the bottle before you put it back in a pocket.`,
          `Storage reads: {storage}. On a freezing morning, a truck seat can drop below that range, so carry the bottle in an inside chest pocket.`,
          `If you wear contact lenses or use another drop, the label doesn’t give directions; ask an eye doctor or a pharmacist.`,
        ],
      },
      {
        p: `If a crew lead wants bottles on hand for the season, it’s easier to order before pruning starts. We ship to US addresses from Brentwood, Tennessee, and don’t promise a delivery date. See the full label on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `Dry, tired eyes after a cold day usually improve indoors. The label is clear about when to stop using a drop: {stopUse} Pain after a cane strike, light sensitivity or blurred vision that doesn’t clear are reasons to see an eye doctor promptly. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when I prune vines in winter?',
        a: `Cold wind irritates the eye’s surface, and the eye can answer with a rush of reflex tears that run down your face without relieving the dryness. Turning away from the wind and blinking slowly helps more than wiping.`,
      },
      {
        q: 'What should I do if a grapevine cane hits my eye?',
        a: `Stop work and don’t rub. If the eye hurts, feels like something is in it, or your vision changes, go to urgent care or an eye doctor rather than using an eye drop.`,
      },
      {
        q: 'What sunglasses work for vineyard pruning in winter?',
        a: `Wraparound lenses with side coverage cut glare from the low sun and block the wind and flying bits of cane. Many crews keep a clear pair for foggy days.`,
      },
      {
        q: 'Can eye drops freeze in a vineyard truck?',
        a: `The label gives a storage range, and an unheated truck on a freezing morning can drop below it. Keep the bottle in an inside pocket close to your body instead.`,
      },
    ],
  },
  {
    slug: 'got-eye-drops-as-a-gift-read-the-label',
    title: 'Got eye drops as a gift? What to read on the label',
    description:
      'Unwrapped a bottle of eye drops? The label lines to read before the first drop: the warnings, the color check, directions, storage and when to stop.',
    category: 'label',
    addedOn: '2026-11-25',
    body: [
      {
        p: `If someone gave you eye drops, read the Drug Facts panel before the first use, just as you would if you’d bought them. For Quell, check the egg and bird allergy caution, look at the color, read the directions, and note when to stop and ask a doctor. Also confirm the tamper seal is intact. The label, not the giver, decides how the drops are used.`,
      },
      { h: 'Why a gift bottle still needs a careful read' },
      {
        p: `A gift skips the moment in the store when you’d normally turn the box over. The person who chose it may have bought it because it helped them, or because they’ve seen you rubbing your eyes at your desk. Either way, they didn’t read it for you. Over-the-counter drops come with a Drug Facts panel so every user can decide for themselves, and a few of its lines matter more than the rest. Our [step-by-step guide to the Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) covers every section; this page covers the ones a gift recipient should read first.`,
      },
      { h: 'Step 1: the warnings' },
      {
        p: `Quell’s warnings line reads: {warnings}. The allergy part matters because of an ingredient most people wouldn’t guess: the inactive ingredients include emu oil. If you have an egg or bird allergy, talk with your doctor before using it. Our guide on [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution. The full inactive list is: {inactives}.`,
      },
      { h: 'Step 2: the seal and the color' },
      {
        list: [
          `Check the tamper-evident seal before you open the bottle. If it’s broken or missing on a bottle that came from us, the giver can call {phone}; broken-seal orders are replaced within {returnDays} days of delivery.`,
          `Look at the drops. The label says: {milky}.`,
          `The site adds: {appearance}`,
          `The panel also says: {doNotUse}. If the drops look different from that milky brown, don’t use them.`,
        ],
      },
      {
        p: `People who have only used clear drops are sometimes surprised by the color. It comes from the oils in the formula, which is why the label describes it. Our guide to [why Quell is milky brown](/guides/why-is-quell-milky-brown) has more.`,
      },
      { h: 'Step 3: the Uses and directions' },
      {
        p: `The Uses section tells you what the product is for: {uses}. That’s worth reading before deciding whether a gift fits what you’re feeling. If your eyes hurt, look different, or you notice changes in your vision, a lubricating drop is not the place to start.`,
      },
      {
        p: `The directions read: {directions}. Follow those rather than how the giver uses theirs. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it’s meant to be used as the directions say, not more often because the bottle was free.`,
      },
      { h: 'Step 4: handling and storage' },
      {
        list: [
          `When using it: {tip}.`,
          `Storage: {storage}. If the gift sat in a cold car or under a sunny window before it reached you, our page on [the storage temperature for eye drops](/guides/what-temperature-should-eye-drops-be-stored-at) explains the range.`,
          `Children: {swallowed}. Keep it out of reach of children in the house.`,
        ],
      },
      { h: 'Step 5: when to stop' },
      {
        p: `Every lubricating drop label has a stop-use section. Here it is in Quell’s words, as the site’s FAQ puts it: {stopUse} That holds whether you bought the bottle or unwrapped it. An eye doctor can find the cause and decide what to do if your eyes don’t settle.`,
      },
      { h: 'What the label doesn’t answer' },
      {
        p: `A Drug Facts panel can’t cover everyone. Quell’s doesn’t give directions for contact lens wearers, for children, or for using it alongside another eye drop or a prescription. If any of those apply, ask your eye doctor or pharmacist before the first drop. Taking the box with you helps; they can read the same panel you did. The full panel is always on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'If the gift doesn’t suit you' },
      {
        p: `If you decide not to use an unopened bottle, the person who ordered it can ask for a refund within {returnDays} days of delivery, and the bottle doesn’t need to be mailed back. The refund goes to whoever paid, so you’d need to let them know. Opened bottles can’t be refunded. Questions go to {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'Should I read the label on eye drops someone gave me?',
        a: `Yes. A gift bottle comes with the same Drug Facts panel as one you buy, and the warnings, directions and stop-use lines apply to you, not to the person who chose it.`,
      },
      {
        q: 'Why are the eye drops I got as a gift brown?',
        a: `Quell’s label describes it as a milky brown solution, so that color is expected. A bottle that looks different from that shouldn’t be used, since the label says not to use it if the color changes.`,
      },
      {
        q: 'Can I use gifted eye drops if I’m allergic to eggs?',
        a: `Quell’s label carries a caution for people with egg or bird allergies, linked to the emu oil among its inactive ingredients. Talk with your doctor before using it.`,
      },
      {
        q: 'Can I get a refund for eye drops I received as a gift?',
        a: `An unopened bottle can be refunded within the refund window, without mailing it back, but the refund goes to the person who paid. They can call the number on the site with the order number.`,
      },
    ],
  },
  {
    slug: 'can-you-put-mineral-oil-in-your-eyes',
    title: 'Can you put mineral oil in your eyes?',
    description:
      'Light mineral oil is an active ingredient in some eye drops, but a bottle from the pantry or bathroom isn’t an eye product. What the difference is.',
    category: 'formula',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Don’t put mineral oil from a household, cosmetic or pharmacy-shelf bottle in your eyes. Light mineral oil is an active ingredient in some eye drops, including Quell, but there it’s one part of a finished product made, packaged and labeled for the eye. A bottle meant for skin, cooking or other uses isn’t labeled for the eye, so it isn’t one. Use drops whose label says they’re for the eyes.`,
      },
      { h: 'Why people ask' },
      {
        p: `The question usually comes from reading an eye drop box. Quell lists three active ingredients: {actives}. Seeing “mineral oil” there, it’s natural to wonder whether the bottle under the bathroom sink would do the same thing. It won’t, and the reason isn’t the oil itself so much as everything around it.`,
      },
      { h: 'What makes an eye drop different from a bottle of oil' },
      {
        list: [
          `It’s labeled for the eye. Quell’s warnings say: {warnings}. A bottle of oil from the kitchen or the skin-care aisle carries no such line and no eye directions.`,
          `It comes with eye directions: {directions}. A household bottle has no dose for the eye.`,
          `It has a set strength. The label lists the amount of each active next to its name, and the oil is mixed with other ingredients in a measured way.`,
          `It has a dropper tip and a tamper seal, and the label tells you how to keep the tip clean: {tip}.`,
          `It comes with a stop-use list and storage instructions, which a jar or pump bottle of oil doesn’t.`,
        ],
      },
      {
        p: `Put simply, the light mineral oil in Quell isn’t on its own. It sits alongside two lubricants and a list of inactive ingredients: {inactives}. The product as a whole is what the label covers.`,
      },
      { h: 'Why an eye drop contains oil at all' },
      {
        p: `The tear film has three layers: mucus on the eye’s surface, a water layer, and a thin oil layer on top that slows evaporation. Dry, windy, heated or air-conditioned air speeds water loss from the middle layer. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is why oils such as light mineral oil and emu oil appear in it. The panel lists light mineral oil’s Purpose as Emollient, a word for an oil that softens and protects. Our guide to [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) explains the ingredient on its own, and [light mineral oil vs. mineral oil](/guides/light-mineral-oil-vs-mineral-oil) covers the two grades.`,
      },
      { h: 'Baby oil, castor oil and other home oils' },
      {
        p: `Online home remedies suggest all sorts of oils for dry eyes. Baby oil, coconut oil, castor oil and olive oil are sold for the skin, the hair or the kitchen. Some contain fragrance; none of them comes with eye directions or a label that says it’s for the eye. The same goes for oils sold to remove eye makeup: those are meant for the lids and lashes, and their labels say how to use them. If you want an oil-containing drop, choose one sold as an eye drop and read its Drug Facts panel. Our page on [whether natural eye drops are better](/guides/are-natural-eye-drops-better) looks at homemade drops more broadly.`,
      },
      { h: 'If you already put oil in your eye' },
      {
        p: `Blurry vision from a smear of oil often clears with blinking, but don’t assume. If your eye stings, hurts, stays blurry or looks different afterward, call an eye doctor or go to urgent care, and take the bottle with you so they can see what it was. If someone swallowed an oil or a product they shouldn’t have, Poison Control is the right call, and the same goes for eye drops: {swallowed}.`,
      },
      { h: 'Reading the oil on an eye drop label' },
      {
        list: [
          `Active ingredients: the oil’s name and strength, with its Purpose next to it.`,
          `Other information: an oil-containing drop may look cloudy, and Quell’s label says: {milky}.`,
          `Do not use: {doNotUse}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `If you’re unsure whether an oil-based drop fits you, especially with contact lenses, other drops or an eye condition your doctor is watching, ask your eye doctor or pharmacist first. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `No oil, in a bottle or a drop, settles every kind of eye trouble. The label says when to stop and get help: {stopUse} Pain, light sensitivity or vision that doesn’t clear needs a professional. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Is it safe to put mineral oil in your eyes?',
        a: `Not from a household, cosmetic or kitchen bottle, which isn’t labeled for the eye. Light mineral oil appears in some eye drops only as part of a finished product with eye directions on its label.`,
      },
      {
        q: 'Can I use baby oil for dry eyes?',
        a: `No. Baby oil is sold for the skin, may contain fragrance, and has no directions for the eye. Use a drop that is labeled for the eyes and follow its directions.`,
      },
      {
        q: 'Why is mineral oil in eye drops?',
        a: `The tear film’s thin oil layer slows evaporation. Light mineral oil is listed on Quell’s panel as an emollient, and Quell is designed to reinforce that oil layer to help reduce moisture loss.`,
      },
      {
        q: 'What should I do if I got oil in my eye?',
        a: `Blink and rinse with clean water. If it still stings, hurts or stays blurry, call an eye doctor or go to urgent care and bring the bottle so they know what it was.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-someone-who-has-everything',
    title: 'Christmas gifts for someone who has everything',
    description:
      'For the adult who owns it all: gifts that get used up, replaced or experienced, from winter comfort to time together, plus how to ship one directly.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `The easiest Christmas gifts for someone who has everything are things that get used up, worn out or experienced, rather than one more object to store. Think of a refill of something they already rely on, an upgrade to an item they use daily, comfort for winter, or time spent together. Ask what they’ve run out of lately; that answer is usually the gift.`,
      },
      { h: 'Why “has everything” is really a storage problem' },
      {
        p: `People who say they don’t need anything usually mean they don’t want anything else to find a place for. Their closets are full, their kitchen is set up the way they like it, and they’ve already bought the gadget you were about to buy. So the useful question isn’t “What don’t they own?” but “What do they keep running out of, wearing out or wishing they had time for?” Gifts that answer it get used instead of regifted.`,
      },
      { h: 'Gifts that get used up' },
      {
        p: `Consumables don’t add clutter. They disappear, and the person remembers who gave them. A few kinds work for nearly anyone:`,
      },
      {
        list: [
          `A pantry favorite they buy for themselves: good coffee, a tea they talk about, a local honey or hot sauce.`,
          `A refill of a hobby supply, such as film, yarn, golf balls, seeds, fishing line or sketchbooks. Ask a partner or friend which brand they use.`,
          `Something for the bath or shower that they’d never splurge on.`,
          `Stationery, stamps and nice cards for the person who still writes letters.`,
          `A bottle of the lubricating eye drops they already use, if they’ve mentioned dry eyes. It’s a refill, not a hint.`,
        ],
      },
      { h: 'Upgrades to things they already use daily' },
      {
        p: `Look at what they handle every day and find the weak spot. A worn wallet, a phone charger that only works at an angle, a mug that doesn’t keep coffee hot on the drive, a pair of sunglasses held together with a screw that keeps coming loose. Replacing one with a better version is a gift they’ll notice every time they reach for it. If you’re not sure, take a photo of the old one so you can match the size or model.`,
      },
      { h: 'Comfort for the winter months' },
      {
        p: `December and January bring heated houses, cold wind and low sun, and most people put up with the discomfort rather than shopping for it. That makes winter comfort a good category for someone who owns plenty:`,
      },
      {
        list: [
          `A small bedroom humidifier for a house that feels parched once the heat comes on.`,
          `Wraparound sunglasses for winter driving into a low sun.`,
          `A soft scarf or a neck gaiter that can pull up against the wind.`,
          `Warm, lined gloves that still work a phone screen.`,
          `A blanket for the couch so they can keep the thermostat lower.`,
        ],
      },
      {
        p: `Our guide to [practical Christmas gifts for adults](/guides/practical-christmas-gifts-for-adults) has more everyday ideas, and the [gifts and holidays topic](/guides/topic/seasonal) collects guides by recipient.`,
      },
      { h: 'Experiences and time together' },
      {
        p: `For someone who truly has every object they want, the gift can be a day. A class they’ve mentioned, tickets to a show or game, a dinner you cook for them, a drive to see holiday lights, or an afternoon helping with a project they keep putting off. Write it on a card with a specific date so it actually happens. Adults who live alone or far from family often value a planned visit more than anything you could wrap.`,
      },
      { h: 'Are eye drops a good gift for someone who has everything?' },
      {
        p: `Only if they’ve told you their eyes bother them, or you’ve heard them say they keep running out. Then a bottle of the drop they already use is like buying their favorite coffee: practical, used up, and personal. Don’t buy a new product for someone as a suggestion about their health, and remember that they should read the label themselves before using any drop. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss; its Uses read: {uses}. The label also carries this caution: {warnings}. Anyone with an egg or bird allergy should check with their doctor first.`,
      },
      {
        p: `Pairing works well. A bottle next to a humidifier or a pair of driving sunglasses reads as a winter comfort kit, not a medical gift. For more on how this lands, see [eye drops as a Secret Santa gift](/guides/eye-drops-as-a-secret-santa-gift).`,
      },
      { h: 'Shipping a gift straight to them' },
      {
        list: [
          `Enter their name and address in the Ship to section at checkout. The phone number is used for delivery updates, so many people enter the recipient’s.`,
          `Use your own email; the receipt and tracking come to you.`,
          `Each bottle is {size}. Orders of {freeBottles} or more ship free; otherwise shipping is {shipping}.`,
          `We ship from Brentwood, Tennessee, to US addresses only, and no delivery date is promised, so order early in December rather than late.`,
          `If they’d rather not keep an unopened bottle, the buyer can ask for a refund within {returnDays} days of delivery, and nothing needs to be sent back.`,
        ],
      },
      {
        p: `Our guide on [how to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through the order step by step. Questions go to {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'What do you buy someone who has everything for Christmas?',
        a: `Something that gets used up, replaced or experienced: a refill of a favorite consumable, a better version of an item they use daily, winter comfort, or a planned day together.`,
      },
      {
        q: 'Are consumable gifts a good idea for adults?',
        a: `Yes, for people with full homes. A consumable gets used instead of stored, and choosing one they already buy shows you’ve paid attention to what they like.`,
      },
      {
        q: 'Is it rude to give eye drops to someone who has everything?',
        a: `Not if they’ve mentioned dry eyes or keep running out of a drop they use. Without that, a health product can read as a hint, so pick something else.`,
      },
      {
        q: 'Can I ship a Christmas gift of eye drops straight to the recipient?',
        a: `Yes. Put their name and address in the shipping section at checkout and use your own email for the receipt and tracking. Order early, since no delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-an-office-friendsgiving-potluck',
    title: 'Dry eyes at an office Friendsgiving potluck',
    description:
      'Slow cookers, chafing fuel, a crowded break room, then back to your screen: why an office Friendsgiving lunch can dry your eyes and what to do.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `An office Friendsgiving potluck can leave your eyes dry because it packs heat, steam, small flames and a crowd into a break room, then sends everyone straight back to their screens. Stand away from warming trays and chafing fuel, step out of the crush for a few minutes, take a real screen break after lunch, and use a lubricating drop as its label directs if you rely on one.`,
      },
      { h: 'What makes a workplace potluck different' },
      {
        p: `A Friendsgiving at someone’s apartment runs into the evening. The office version is squeezed into a lunch hour or a long afternoon break in a room built for a dozen people, and nobody can open a window. Office buildings in late November usually run the heat, and that air is already dry before the first slow cooker is plugged in. Our guide to [dry eyes at Friendsgiving](/guides/dry-eyes-at-friendsgiving) covers the evening party at home; this one is about the workday kind.`,
      },
      { h: 'Slow cookers, warming trays and chafing fuel' },
      {
        p: `Potluck tables are lined with heat sources. Slow cookers release steam every time someone lifts the lid. Warming trays push dry heat up at face level when you lean over them. Chafing dishes are often heated by small cans of fuel with open flames, which add heat and a little smoke right where people bend to serve themselves.`,
      },
      {
        list: [
          `Serve yourself, then step back from the table to eat rather than lingering over the dishes.`,
          `Lift slow cooker lids away from your face, so the burst of steam goes past you.`,
          `If you’re setting up, put chafing dishes at the end of the table near a doorway or return vent, not under a low shelf where heat collects.`,
          `Keep fuel cans and their lids away from where people stand to talk.`,
        ],
      },
      { h: 'A full break room and the building’s heat' },
      {
        p: `Twenty or thirty people in a small room warm it fast, and the building’s system keeps adding heat on top. Warm, dry, moving air speeds evaporation from the tear film, the thin layer of oil, water and mucus that covers the eye. You also blink less when you’re focused on a conversation or a phone camera. If your eyes start to sting, walk to the hallway or a window for five minutes; the change of air and a few slow blinks help.`,
      },
      {
        p: `Some offices run a ceiling fan or a portable fan to cool the crowded room. Don’t sit directly under or in front of it, especially with a plate in your lap and no easy way to move.`,
      },
      { h: 'Back at your desk after lunch' },
      {
        p: `The hardest part for many people comes afterward. A big lunch, a warm room and a full afternoon of email can leave you staring at the screen with heavy lids and half-blinks. Before you dive back in:`,
      },
      {
        list: [
          `Close your eyes fully for a few seconds, then blink slowly ten times.`,
          `Look out a window or down a long hallway for 20 seconds.`,
          `Turn a desk fan or a space heater so it doesn’t blow across your face.`,
          `Take the next video call with the camera off if you can, and rest your eyes on something far away while you listen.`,
        ],
      },
      {
        p: `Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why focus lowers your blink rate.`,
      },
      { h: 'Bringing a dish on the commute' },
      {
        p: `If you’re carrying a hot casserole in the car, it’s tempting to crank the heater so it doesn’t cool. Aim the vents at the dish on the floor or the seat, not at your face. On a cold morning, give the windshield time to clear before you drive rather than squinting through fog with the fan on high.`,
      },
      { h: 'Cleanup: dish soap and spray cleaner' },
      {
        p: `Washing up in a break-room sink means hot water, steam and cleaning products at close range. Rinse your hands well before you touch your eyes. If dish soap, a spray cleaner or anything else splashes into an eye, rinse with clean water and call Poison Control or go to urgent care, following the product’s own label. That’s not something a lubricating drop is for.`,
      },
      { h: 'Using Quell at work' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions read: {directions}. If you keep a bottle at your desk, a dose after lunch can fit within that pattern.`,
      },
      {
        list: [
          `Wash your hands after eating; gravy, spices and butter on fingertips sting.`,
          `{tip}.`,
          `Storage: {storage}. A desk drawer is fine; a sunny windowsill or a car in a parking lot may not be.`,
          `The label doesn’t cover contact lenses or using it with another drop. Ask your eye doctor or pharmacist.`,
        ],
      },
      {
        p: `Running low before the holiday? We ship from Brentwood, Tennessee, to home or work addresses in the US, but no delivery date is promised, so order before you need it. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it isn’t the party' },
      {
        p: `If your eyes keep bothering you after the potluck is long cleaned up, look past the break room. The label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at office potlucks?',
        a: `A crowded break room, the building’s heat, steam from slow cookers and flames under chafing dishes all add warm, dry air, and focusing on conversation means you blink less.`,
      },
      {
        q: 'Do chafing dish burners irritate your eyes?',
        a: `The small flames add heat and a little smoke at face level when you lean in to serve. Step back from the table to eat, and set the dishes near a doorway or vent.`,
      },
      {
        q: 'How do I keep my eyes comfortable at my desk after a big lunch?',
        a: `Close your eyes for a few seconds, blink slowly several times, and look at something far away before going back to the screen. Keep fans and heaters from blowing across your face.`,
      },
      {
        q: 'What should I do if cleaning spray gets in my eye at work?',
        a: `Rinse with clean water and call Poison Control or go to urgent care, following the product’s label. Don’t reach for a lubricating eye drop instead.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-playing-a-new-video-game-over-christmas-break',
    title: 'Dry eyes playing a new video game over Christmas break',
    description:
      'A new game, a week off and nothing scheduled: why holiday gaming marathons leave eyes dry and scratchy, and how to keep playing comfortably.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `A new video game over Christmas break dries your eyes because the holiday removes every natural stopping point. With no work or classes, sessions stretch for hours, often late at night in a dark, heated room, and intense focus cuts your blink rate. Set a break timer, keep a lamp on, push the furnace vent away from your chair, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why the holiday binge is different' },
      {
        p: `On a normal week, a commute, a meeting or dinner breaks up your screen time. Christmas break takes those away. Christmas Day falls on Friday, December 25, 2026, and New Year’s Day on Friday, January 1, 2027, so many adults with time off get a long run of unscheduled days. A new game, a new console or a long-awaited sequel fills them easily. Our general guide to [eye drops for gamers](/guides/eye-drops-for-gamers) covers everyday setups; this page is about the week when the usual limits disappear.`,
      },
      { h: 'What a gaming marathon does to the tear film' },
      {
        p: `The tear film is a thin layer of oil over water over mucus, and each blink spreads it fresh. When you concentrate on a fast game, you blink less, and many blinks don’t fully close. Between blinks, the water layer evaporates. Add the dry air of a house heated for winter, and the eye’s surface dries faster than usual. Hours later, it can feel scratchy, heavy or tired.`,
      },
      {
        list: [
          `Learning a new game takes more concentration than a familiar one, so the first few days are the hardest on the eyes.`,
          `Menus, maps and inventories mean reading small text.`,
          `Late nights shorten sleep, and tired eyes blink less fully.`,
        ],
      },
      { h: 'Setting up the room for a long break' },
      {
        list: [
          `Turn on a lamp behind or beside the screen. A bright screen in a dark room makes you stare harder.`,
          `Sit back from the TV. For a monitor, keep it about an arm’s length away and slightly below eye level.`,
          `Lower the screen’s brightness to match the room after sunset.`,
          `Close or redirect a heating vent that blows toward your chair, and keep a space heater pointed at your feet.`,
          `Run a humidifier in the room if the house feels dry.`,
        ],
      },
      {
        p: `A handheld or a phone game brings the screen much closer, so the same habits matter even more. Hold it a bit farther away and look up often.`,
      },
      { h: 'Building breaks into the game' },
      {
        p: `Games are designed to keep you playing, so let something outside the game call the break. A few approaches that work over a long holiday:`,
      },
      {
        list: [
          `Use a timer on your phone or watch for every 30 to 45 minutes, and actually stand up when it goes off.`,
          `Use loading screens, cutscenes and save points as blink breaks: close your eyes for two seconds and look across the room.`,
          `Stop at a save point an hour before bed, not at the end of “one more” mission.`,
          `Take one daylight walk each day of the break, even a short one.`,
        ],
      },
      {
        p: `Our guide to [holiday screen time and dry eyes](/guides/holiday-screen-time-and-dry-eyes) has more for the rest of the season’s streaming and scrolling.`,
      },
      { h: 'Playing with family in the room' },
      {
        p: `Christmas break gaming often happens in a shared living room with the tree lit, the fireplace going and relatives coming and going. Sit away from the fireplace, and don’t take the seat right in front of the heating register. If younger family members are playing too, Quell’s label doesn’t give directions for children, so any eye questions for them go to their own doctor.`,
      },
      { h: 'Using Quell during the break' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}. Spread over a gaming day, that might be once in the morning, once in the afternoon and once in the evening, not every time a level gets hard.`,
      },
      {
        list: [
          `Wash your hands first; controller grime and snack crumbs shouldn’t go near your eyes.`,
          `The label says: {tip}.`,
          `Storage: {storage}. Keep the bottle off a hot console vent or a radiator shelf.`,
        ],
      },
      {
        p: `If a new console or game was a gift, a bottle of drops makes a sensible addition next time; see [Christmas gifts for a gamer](/guides/christmas-gifts-for-a-gamer). We ship to US addresses only, with no promised delivery date. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to put the controller down for good' },
      {
        p: `Dry, tired eyes after a marathon usually feel better after sleep and a day of shorter sessions. The label is clear about when to stop: {stopUse} Pain, headaches with eye discomfort, or vision that stays blurry after you stop playing are reasons to see an eye doctor. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after gaming all break?',
        a: `Long, focused sessions lower your blink rate, so the tear film dries between blinks, and a heated winter house dries it faster. Late nights add tired eyes on top.`,
      },
      {
        q: 'How long should I play video games without a break?',
        a: `Many people set a timer for every 30 to 45 minutes and stand up, blink and look across the room. Loading screens and cutscenes are good moments for short blink breaks too.`,
      },
      {
        q: 'Is it bad to play video games in the dark?',
        a: `A bright screen in a dark room makes you stare harder. A lamp behind or beside the screen and lower brightness at night make long sessions easier on the eyes.`,
      },
      {
        q: 'When is Christmas break in 2026?',
        a: `It depends on your job or school, but Christmas Day is Friday, December 25, 2026, and New Year’s Day is Friday, January 1, 2027, so many breaks span that week.`,
      },
    ],
  },
  {
    slug: 'do-eye-drops-actually-help-dry-eyes',
    title: 'Do eye drops actually help dry eyes?',
    description:
      'Lubricating eye drops are labeled to relieve dryness of the eye. What that means in practice, why they sometimes seem not to help, and when to get checked.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes, lubricating eye drops are made for exactly this: their labels list relief of dryness as a use. Quell’s reads: {uses}. What they can’t do is change what’s drying your eyes, such as a vent, a screen or wind, or answer a cause that isn’t dryness. Used as directed alongside a few habits, they help many people feel more comfortable. If they don’t, see an eye doctor.`,
      },
      { h: 'What the label says they do' },
      {
        p: `The Uses section of a Drug Facts panel is where an over-the-counter drop states its job. Quell’s Uses line, quoted above, has two parts: a protectant against further irritation, and relief of dryness of the eye. That’s the claim the product makes, and it’s narrower than people sometimes expect. It isn’t a promise to fix vision, settle pain or change why your eyes are dry. Our guide to [the Uses section](/guides/the-uses-section) goes through the wording.`,
      },
      { h: 'What a lubricating drop actually adds' },
      {
        p: `The tear film has three layers: mucus on the surface of the eye, water in the middle, and a thin oil layer on top that slows evaporation. A lubricating drop adds lubricating ingredients to that surface. Quell’s actives are {actives}, and it’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Blinking spreads the drop the same way it spreads natural tears. Our page on [how lubricating eye drops work](/guides/how-do-lubricating-eye-drops-work) explains the mechanics.`,
      },
      { h: 'Why drops sometimes seem not to help' },
      {
        p: `When people say drops did nothing, one of a handful of things is usually going on:`,
      },
      {
        list: [
          `The drop missed. A drop that lands on the lid or the cheek never reaches the eye’s surface.`,
          `The source never changed. A vent still blowing across your face or eight more hours at a screen undoes comfort quickly.`,
          `The directions weren’t followed. Quell’s are: {directions}. Using it now and then, or far more often, isn’t what the label describes.`,
          `It isn’t dryness. Pain, light sensitivity, or something in the eye are different problems, and a lubricating drop isn’t meant for them.`,
          `Expectations are off. A drop is meant to relieve dryness, not to make your eyes feel brand new for good.`,
        ],
      },
      {
        p: `Our guides on [why your eyes may still feel dry after drops](/guides/why-do-my-eyes-still-feel-dry-after-eye-drops) and [how to make eye drops work better](/guides/how-to-make-eye-drops-work-better) take each of these further.`,
      },
      { h: 'Drops plus habits: what actually makes the difference' },
      {
        p: `A drop works on the surface; habits work on the air and the blinking. The two together usually matter more than either one:`,
      },
      {
        list: [
          `Aim car and office vents, fans and space heaters away from your face.`,
          `Take a screen break every 20 minutes: look far away and blink fully a few times.`,
          `Run a humidifier in the bedroom during heating season.`,
          `Wear wraparound sunglasses outdoors on windy or bright days.`,
          `Lower the monitor slightly so your lids cover more of each eye.`,
        ],
      },
      { h: 'How to tell if they’re helping' },
      {
        p: `There’s no test to run at home, but you can watch your own pattern. Note when your eyes bother you, what you were doing, and how they feel after a dose taken as directed. If the scratchy, dry feeling eases and the bad days get fewer once you also change the air around you, that’s a useful sign. If nothing changes, or it gets worse, that’s useful information too, and it belongs with an eye doctor. Our [dry eye self-check](/self-check) can help you put your symptoms into words before a visit; it’s not a diagnosis.`,
      },
      { h: 'When a drop is the wrong answer' },
      {
        p: `Some eye trouble needs a professional from the start. The label sets out when to stop and get help: {stopUse} Eye pain, sudden changes in vision, an injury, or something stuck in the eye shouldn’t be managed with drops at all. If you’re torn, our guide to [whether to see a doctor or try eye drops first](/guides/should-i-see-a-doctor-or-try-eye-drops-first) walks through the decision, and [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
      { h: 'Choosing a drop to try' },
      {
        p: `If you’re trying a lubricating drop, read the label before you buy: the active ingredients, the warnings and the directions. Quell carries a caution worth reading first: {warnings}. The label doesn’t give directions for contact lenses, children or use with other drops, so ask your eye doctor or pharmacist if any of those apply. The full panel is on our [Drug Facts page](/drug-facts), and unopened bottles can be refunded within {returnDays} days of delivery if you change your mind before opening.`,
      },
    ],
    faq: [
      {
        q: 'Do lubricating eye drops really work for dry eyes?',
        a: `They’re labeled to relieve dryness of the eye, and many people find them more comfortable when they also change what dries their eyes. If they don’t help when used as directed, see an eye doctor.`,
      },
      {
        q: 'Why don’t eye drops help my dry eyes?',
        a: `Common reasons are a drop that missed the eye, a vent or screen still drying the surface, not following the directions, or a problem that isn’t dryness at all.`,
      },
      {
        q: 'How do I know if eye drops are working?',
        a: `Watch your pattern: note when your eyes bother you and how they feel after a dose taken as directed. Fewer bad days is a good sign; no change is a reason to see an eye doctor.`,
      },
      {
        q: 'Can eye drops fix the cause of dry eyes?',
        a: `A lubricating drop relieves dryness on the eye’s surface but doesn’t change what’s causing it. An eye doctor can find the cause and decide what to do.`,
      },
    ],
  },
  {
    slug: 'will-eye-drops-help-a-scratched-eye',
    title: 'Will eye drops help a scratched eye?',
    description:
      'A scratched eye is an injury, and lubricating eye drops are labeled for dryness. What to do instead, why not to wait it out, and when drops fit later.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `No, don’t count on eye drops for a scratched eye. A scratch is an injury, and lubricating drops are labeled to relieve dryness, not to look after a hurt eye. Quell’s label tells you to stop and ask a doctor if you feel eye pain. If you think you’ve scratched your eye, don’t rub it, and see an eye doctor or urgent care promptly.`,
      },
      { h: 'Why a scratch isn’t a dryness problem' },
      {
        p: `Dryness and a scratch can both feel gritty, which is why people reach for the same bottle. They aren’t the same thing. Dryness is the tear film drying out between blinks. A scratch is damage to the surface of the eye, often from a fingernail, a tree branch, a makeup brush, a paper edge, a pet’s paw or a speck of grit that got rubbed in. Quell’s label gives its Uses as: {uses}. Injuries aren’t on that list.`,
      },
      {
        p: `Our own [terms](/terms) say it plainly: if you have sudden vision loss, eye pain or an eye injury, seek emergency care immediately.`,
      },
      { h: 'Signs that point to more than dryness' },
      {
        p: `Only an eye doctor can tell what’s going on, but some signs suggest you’re dealing with something other than dryness:`,
      },
      {
        list: [
          `It started at a specific moment: a poke, a swipe, a gust of grit.`,
          `It hurts, rather than just feeling dry or tired.`,
          `It feels like something is still in the eye, even after blinking and rinsing.`,
          `The eye keeps watering, or light suddenly bothers you.`,
          `Your vision in that eye is blurry and doesn’t clear when you blink.`,
          `Only one eye is affected.`,
        ],
      },
      {
        p: `Each of these is a reason to call an eye doctor or go to urgent care rather than wait. The label’s own stop-use list says the same: {stopUse}`,
      },
      { h: 'What to do right now' },
      {
        list: [
          `Don’t rub the eye. Rubbing can make a scratch worse or grind in whatever caused it.`,
          `If something may be in the eye, blink gently and rinse with clean water. Don’t dig at it with a finger or a cotton swab.`,
          `If you wear contact lenses, ask the eye doctor or urgent care what to do with them; the drop label doesn’t cover contacts.`,
          `Don’t use leftover prescription drops from a past problem, or someone else’s drops.`,
          `Call an eye doctor’s office, or go to urgent care or an emergency room if it’s after hours, the pain is bad, or vision has changed.`,
        ],
      },
      { h: 'Why not just try a drop and wait?' },
      {
        p: `Because waiting with a lubricating drop can feel like progress while the actual problem goes unchecked. A drop may make an injured eye feel a little less scratchy for a while, which can make it easy to put off getting it seen. An eye doctor can look at the surface of the eye with tools you don’t have at home, find what’s causing the pain, and decide what it needs. That might or might not include a lubricating drop. Our page on [eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) covers what to reach for when something lands in the eye.`,
      },
      { h: 'Using a lubricating drop after you’ve been seen' },
      {
        p: `Once an eye doctor has looked at the eye, ask directly whether a lubricating drop fits during recovery, and when to start. If they say yes, follow their instructions and the drop’s label. Quell’s directions read: {directions}. The panel also says: {tip}. That matters more than ever with an eye that’s been hurt, so keep the tip off your lashes, fingers and every surface.`,
      },
      {
        p: `If the doctor has prescribed drops of their own, ask whether, and how, to use a lubricating drop alongside them. The Quell label doesn’t give directions for use with other drops.`,
      },
      { h: 'Avoiding the next scratch' },
      {
        list: [
          `Wear glasses or sunglasses when you’re trimming branches, working in the garden or walking through brush.`,
          `Keep fingernails short or smooth if you put in contact lenses or eye drops.`,
          `Replace old mascara wands and brushes that have gone stiff.`,
          `Look away and close your eyes when wind kicks up dust or sand.`,
        ],
      },
      {
        p: `For dryness itself, as opposed to an injury, see our guide to [eye drops for dry eyes](/guides/eye-drops-for-dry-eyes) and the full [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can you put eye drops in a scratched eye?',
        a: `Not on your own. A scratch is an injury that an eye doctor should look at, and lubricating drops are labeled for dryness. Ask the doctor whether and when a lubricating drop fits.`,
      },
      {
        q: 'How do I know if I scratched my eye?',
        a: `Pain that starts at a specific moment, a feeling that something is still in the eye, watering, light sensitivity or blurry vision suggest more than dryness. Only an eye doctor can tell for sure.`,
      },
      {
        q: 'Should I go to urgent care for a scratched eye?',
        a: `If you can’t reach an eye doctor promptly, yes. Go to an emergency room if the pain is severe or your vision has changed.`,
      },
      {
        q: 'Why does my eye feel scratchy if nothing is in it?',
        a: `Dryness can feel gritty, but so can a small scratch after the cause is gone. If it started suddenly or hurts, have an eye doctor check it instead of using drops.`,
      },
    ],
  },
  {
    slug: 'do-eye-drops-help-a-swollen-eyelid',
    title: 'Do eye drops help a swollen eyelid?',
    description:
      'Lubricating eye drops are labeled for dryness of the eye, not a swollen lid. What swelling may call for, when it’s urgent, and what drops can and can’t do.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Lubricating eye drops aren’t made for a swollen eyelid. Their labels cover the eye’s surface, and Quell’s Uses read: {uses}. Swelling of the lid is a different problem with many possible causes, from a bump on the lid to a reaction to something you used. Don’t press or squeeze it, stop any new product, and ask a doctor, urgently if it comes with pain, spreading or vision changes.`,
      },
      { h: 'What eye drops are labeled to do' },
      {
        p: `An over-the-counter drop states its job in the Uses section of its Drug Facts panel. For a lubricating drop, that job is the surface of the eye: relieving dryness and protecting against further irritation. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its directions are: {directions}. Nothing on the panel mentions the eyelid itself, swelling, lumps or puffiness. A drop placed in the eye doesn’t stay on the lid, and it isn’t meant to change what’s going on in the lid’s tissue.`,
      },
      { h: 'Why lids swell' },
      {
        p: `Eyelid swelling has a long list of possible causes, and only someone who examines it can tell which one you have. Some are minor and some aren’t. Common situations people describe include:`,
      },
      {
        list: [
          `A tender bump along the lid edge or under the skin of the lid.`,
          `Puffiness after crying, a salty meal or a short night.`,
          `Swelling after trying a new eye makeup, skin cream, face wash or eye drop.`,
          `Swelling after a bug bite, a bump to the face or a scratch near the eye.`,
          `Swelling that comes with an itchy, watery eye in certain seasons.`,
        ],
      },
      {
        p: `Those causes don’t all call for the same response, which is why a single bottle can’t cover them. Puffiness after crying is its own question; our guide on [whether to use eye drops after crying](/guides/should-i-use-eye-drops-after-crying) covers it.`,
      },
      { h: 'If the swelling started after a new drop or product' },
      {
        p: `Stop using it, and don’t start anything else in its place until you’ve talked to a doctor or pharmacist. Bring the box or bottle so they can read the ingredients. Quell’s label carries this caution: {warnings}. People with an egg or bird allergy should talk with a doctor before trying it, as our guide on [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains. For a broader look at reactions, see [side effects of lubricating eye drops](/guides/side-effects-of-lubricating-eye-drops).`,
      },
      { h: 'When a swollen eyelid is urgent' },
      {
        p: `Some signs mean you shouldn’t wait for a routine appointment. Get prompt care from an eye doctor, urgent care or an emergency room if swelling comes with any of these:`,
      },
      {
        list: [
          `Eye pain, or pain when you move your eye.`,
          `Blurred or double vision, or any change in how you see.`,
          `Swelling that spreads quickly, or skin around the eye that’s hot and getting worse.`,
          `Trouble opening the eye, or the eye itself bulging.`,
          `Swelling after an injury to the face or eye.`,
          `Swelling of the lips, tongue or throat, or trouble breathing, which calls for emergency services right away.`,
        ],
      },
      {
        p: `The label’s stop-use list points the same way: {stopUse}`,
      },
      { h: 'What to do while you wait to be seen' },
      {
        list: [
          `Don’t squeeze, pop or press on a lump on the lid.`,
          `Don’t rub the eye, and wash your hands before touching your face.`,
          `Leave off eye makeup, and gently remove any that’s already on.`,
          `Ask the doctor’s office what you can do at home before your visit, rather than guessing.`,
          `Don’t borrow someone else’s eye drops or reuse an old prescription.`,
        ],
      },
      { h: 'Can you still use a lubricating drop?' },
      {
        p: `Ask the doctor who looks at your lid. If the eye also feels dry, they can tell you whether a lubricating drop fits while the lid settles, and how it fits with anything they prescribe. Quell’s label doesn’t give directions for use with other drops, for contact lenses or for children. If you do use it, the panel’s handling line matters: {tip}. Keep the tip away from a swollen lid and lashes.`,
      },
      {
        p: `For dryness itself, our guide to [eye drops for dry eyes](/guides/eye-drops-for-dry-eyes) covers what to look for on a label, and the [Drug Facts page](/drug-facts) has Quell’s whole panel. If you’re trying to decide whether something needs an appointment, [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops reduce eyelid swelling?',
        a: `Lubricating eye drops aren’t labeled for that. Their Uses cover dryness and irritation of the eye’s surface, so a swollen lid should be looked at by a doctor.`,
      },
      {
        q: 'When should I worry about a swollen eyelid?',
        a: `Get prompt care if swelling comes with eye pain, vision changes, fast spreading, warm skin, trouble opening the eye or a recent injury. Swelling of the lips or throat, or trouble breathing, needs emergency services.`,
      },
      {
        q: 'What if my eyelid swelled up after using eye drops?',
        a: `Stop using them and contact a doctor or pharmacist, and bring the bottle so they can see the ingredients. Don’t switch to another drop until you’ve been advised.`,
      },
      {
        q: 'Can I wear eye makeup with a swollen eyelid?',
        a: `It’s wiser to leave it off until a doctor has looked at the lid, and to remove any that’s already on gently. Makeup and its brushes can add irritation to an eye that’s already swollen.`,
      },
    ],
  },
  {
    slug: 'can-i-buy-eye-drops-without-a-doctors-note',
    title: 'Can I buy eye drops without a doctor’s note?',
    description:
      'Over-the-counter lubricating eye drops need no prescription or doctor’s note. What checkout asks for instead, and when a note might still come up.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. Over-the-counter lubricating eye drops such as Quell need no prescription and no doctor’s note to buy. On quelldrop.com, checkout asks for your email, a shipping name and address, and a phone number for delivery updates, then takes payment on a secure page. You must be 18 or older. A note only comes up in a few side situations, such as some benefit plans.`,
      },
      { h: 'What over-the-counter means for buying' },
      {
        p: `An over-the-counter drug can be sold directly to the person who’ll use it, with a Drug Facts panel on the box in place of a doctor’s instructions. You decide whether it fits by reading that panel. Quell is an over-the-counter lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses read: {uses}. Our guide to [what over-the-counter means](/guides/what-over-the-counter-means) explains the category, and [do you need a prescription for eye drops?](/guides/do-you-need-a-prescription-for-eye-drops) covers which drops do need one.`,
      },
      { h: 'What checkout actually asks for' },
      {
        p: `There’s no field for a doctor’s name, a prescription number or a note, and no health questions. The order form asks for:`,
      },
      {
        list: [
          `Your email address, where the receipt and tracking go. No account is needed.`,
          `First and last name for the shipping label.`,
          `Street address, an optional apartment or suite line, city, state and ZIP.`,
          `A phone number, used for delivery updates.`,
        ],
      },
      {
        p: `Then you continue to a secure payment page to enter your card. [What checkout asks for, and why](/guides/what-checkout-asks-for) goes through each field.`,
      },
      { h: 'The rules that do apply' },
      {
        list: [
          `Age: you must be at least 18 to buy from this site.`,
          `Location: orders ship within the United States only.`,
          `Quantity: you choose how many bottles; each is {size}.`,
          `Price and shipping: shipping is {shipping}, or free on {freeBottles} or more bottles. There are no promo codes.`,
        ],
      },
      { h: 'When a doctor’s note might still come up' },
      {
        p: `A store or website doesn’t need one, but a few other parties sometimes ask for paperwork:`,
      },
      {
        list: [
          `Benefit accounts. HSA and FSA rules for over-the-counter medicines come from the IRS, but each plan sets its own paperwork. Some ask only for a receipt; a few may ask for more. Our guides to [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) and [letters of medical necessity](/guides/letter-of-medical-necessity-for-eye-drops) explain the background. Your plan administrator has the final word.`,
          `Your workplace. If an employer reimburses supplies, its policy decides what it needs. Usually that’s a receipt; your confirmation email serves as one.`,
          `Your own doctor. If you’re already under an eye doctor’s care, it’s worth asking before you add an over-the-counter drop to anything they’ve prescribed.`,
        ],
      },
      {
        p: `Air travel doesn’t call for a note either. TSA’s liquids rule lets you carry containers of 3.4 ounces (100 milliliters) or less in a carry-on, and a bottle of Quell is {size}, well under that. Our guide to [Thanksgiving travel with eye drops](/guides/thanksgiving-travel-with-eye-drops) covers packing it.`,
      },
      { h: 'No note needed doesn’t mean no reading' },
      {
        p: `Skipping the doctor’s office for the purchase puts the label in your hands. Before the first drop, read the warnings: {warnings}. Check that the drops look as described: {milky}. Do not use: {doNotUse}. And know when to stop: {stopUse} Quell’s label doesn’t give directions for contact lenses, children or use with other drops, so ask an eye doctor or pharmacist if any apply. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When you should see a doctor instead of buying a drop' },
      {
        p: `Being able to buy a drop without a note doesn’t make it the right first step for every eye problem. Pain, an injury, something stuck in the eye, a sudden change in vision, or symptoms in one eye only call for an eye doctor first. If you’re unsure, our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
      { h: 'After you order' },
      {
        p: `You’ll get an order confirmation by email, then a tracking email once the order ships from Brentwood, Tennessee. No delivery date is promised. If you change your mind before opening, unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Questions about an order go to {phone}, {hours}. You can [start an order on the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Do I need a doctor’s note to buy eye drops online?',
        a: `Not for over-the-counter lubricating drops. Checkout on quelldrop.com asks for an email, a shipping address and a phone number, with no prescription or doctor information.`,
      },
      {
        q: 'Does checkout ask any health questions when buying eye drops?',
        a: `No. The form covers contact and shipping details only, and payment happens on a secure page. Reading the Drug Facts label before use is up to you.`,
      },
      {
        q: 'Will my FSA ask for a doctor’s note for eye drops?',
        a: `It depends on your plan. Many accept a receipt for over-the-counter medicines, but each plan sets its own paperwork, so ask your plan administrator.`,
      },
      {
        q: 'Is there an age limit to buy eye drops on quelldrop.com?',
        a: `Yes. You must be at least 18 to buy from the site, and orders ship within the United States only.`,
      },
    ],
  },
  {
    slug: 'is-it-safe-to-order-eye-drops-on-public-wifi',
    title: 'Is it safe to order eye drops on public Wi-Fi?',
    description:
      'Ordering from a café, hotel or airport network? How Quell’s checkout handles your card, what to check on public Wi-Fi, and when to switch to mobile data.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `You can order Quell on public Wi-Fi, but take a few precautions. Your card number is typed on Authorize.net’s hosted payment page, not on quelldrop.com, and card details never pass through this site’s servers. On a café, hotel or airport network, check the address bar on both pages, use a network you can identify, and switch to your phone’s mobile data for the payment step if you’re unsure.`,
      },
      { h: 'Why people ask' },
      {
        p: `Holiday travel puts a lot of shopping on borrowed networks: a hotel lobby, an airport gate, a relative’s guest network or a coffee shop on the drive. If you notice at the gate that your eye drop bottle is almost empty, ordering then and there is tempting. The worry is reasonable. On a network you don’t control, you can’t see who else is connected or who set it up.`,
      },
      { h: 'How Quell’s checkout handles your card' },
      {
        list: [
          `On the cart page you enter your email, shipping name and address, and a phone number for delivery updates. No account or password is needed.`,
          `When you continue to payment, your browser goes to a page hosted by Authorize.net, the card processor. Its address starts with accept.authorize.net.`,
          `You type your card details there. The [privacy policy](/privacy) says card details are entered directly with Authorize.net and never pass through or rest on this site’s servers.`,
          `You come back to Quell afterward, and a confirmation email follows.`,
        ],
      },
      {
        p: `Our guide to [why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains each step in more detail.`,
      },
      {
        p: `On the shop’s side, the order record holds your contact and shipping details, a payment reference and whether the charge went through. The card number itself stays with the processor. So even on a network you don’t trust, the part worth protecting most is the moment you type the card, which is why the payment page’s address deserves a second look.`,
      },
      { h: 'What to check before you pay on public Wi-Fi' },
      {
        list: [
          `Join the network the business actually offers. Ask staff for its exact name rather than picking an open network that looks close.`,
          `Type quelldrop.com yourself or use a bookmark, instead of following a link from an ad, a text or a pop-up.`,
          `Look at the address bar on the cart page (quelldrop.com) and on the payment page (accept.authorize.net). Anything else is a reason to stop.`,
          `If the browser warns about a certificate or an insecure connection, close the page. Don’t click through the warning.`,
          `Turn off automatic joining of open networks on your phone or laptop, so it doesn’t connect on its own later.`,
        ],
      },
      { h: 'When to switch to mobile data' },
      {
        p: `Your phone’s cellular connection is a network only you are using, so it’s a simple way around any doubt about public Wi-Fi. You can fill your cart on the café network, then turn Wi-Fi off before you continue to payment. If you’re on a laptop, your phone’s hotspot does the same job. Checkout works on a phone; our guide to [ordering eye drops on your phone](/guides/ordering-eye-drops-on-your-phone) covers the small-screen details.`,
      },
      { h: 'On a shared or public computer' },
      {
        p: `Public Wi-Fi is one question; a public computer is another. A hotel business center or library machine can remember what you type. If the checkout form ever shows someone else’s details prefilled, there’s a “Not you? Clear details” link to wipe them. When you’re done, close the browser fully. Our guide to [ordering eye drops on a shared computer](/guides/ordering-eye-drops-on-a-shared-computer) goes further.`,
      },
      { h: 'Watching for fake sites and messages' },
      {
        p: `Travel is also when fake delivery texts and lookalike shopping sites show up. On Quell, shipping is paid at checkout and order updates come by email, so a text asking for a delivery fee or a card number isn’t part of your order. Don’t tap its link. Our guides to [spotting a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) and [fake delivery texts](/guides/fake-delivery-texts-and-eye-drop-orders) show what to look for.`,
      },
      { h: 'After you order from the road' },
      {
        p: `The confirmation and tracking go to the email you entered. Orders ship from Brentwood, Tennessee, to US addresses only, and no delivery date is promised, so ship to where you’ll be once it arrives, which may be home rather than a hotel. Shipping is {shipping}, or free on {freeBottles} or more bottles. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. Questions go to {phone}, {hours}.`,
      },
      {
        p: `Until the new bottle arrives, use what you have as the label directs: {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss; the whole label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is it safe to buy things online on hotel Wi-Fi?',
        a: `It can be, with care: join the hotel’s real network, check the address bar, and don’t click through browser security warnings. Switching to mobile data for the payment step removes most of the doubt.`,
      },
      {
        q: 'Does quelldrop.com see my card number?',
        a: `No. Card details are typed on Authorize.net’s hosted payment page, and the privacy policy says they never pass through or rest on this site’s servers.`,
      },
      {
        q: 'Should I use mobile data instead of public Wi-Fi to pay?',
        a: `If you have any doubt about a network, yes. Your phone’s cellular connection or hotspot is used only by you, and checkout works on a phone.`,
      },
      {
        q: 'What address should the payment page show when I buy Quell?',
        a: `The cart is on quelldrop.com, and the card page’s address starts with accept.authorize.net. Any other address on the payment step is a reason to stop.`,
      },
    ],
  },
  {
    slug: 'can-i-order-eye-drops-for-a-friend',
    title: 'Can I order eye drops for a friend?',
    description:
      'Yes, you can order Quell for a friend and ship it to them. Whose email, phone and card to use, how tracking and refunds work, and what they should read.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. You can order Quell for a friend by putting their name and address in the shipping section at checkout. Use your own email, since the receipt and tracking go there, and give the phone number of whoever should get delivery updates. You pay, so any refund comes back to your card. Your friend should read the label before using it, as anyone would.`,
      },
      { h: 'Why people order for a friend' },
      {
        p: `It happens more than you’d think. A friend mentions their eyes have been dry since the heat came on and you say you’ll grab them a bottle. A friend without a card handy asks you to order and pays you back. Someone just moved and doesn’t know their own ZIP code yet. Or a friend is busy with a new baby, a sick parent or a long work stretch, and an errand off their list is the favor. None of these needs anything special from checkout.`,
      },
      { h: 'Filling in checkout for someone else' },
      {
        list: [
          `Email: yours. The receipt and tracking go to the email entered, and no account is needed.`,
          `Name and address: your friend’s, exactly as their mail is addressed, with an apartment or unit number in the optional second line.`,
          `Phone: the number is used for delivery updates. Use your friend’s if they want those updates, or yours if you’d rather handle them.`,
          `Payment: your card on the secure payment page. The billing address doesn’t have to match the shipping address; see [can I ship to a different address than billing?](/guides/can-i-ship-to-a-different-address-than-billing)`,
        ],
      },
      { h: 'Keeping your friend in the loop' },
      {
        p: `Since the emails come to you, forward the tracking email when it arrives, or text your friend the link. We ship from Brentwood, Tennessee, to US addresses only, and no delivery date is promised, so tell them it’s on the way rather than naming a day. If they’ll be away, ask whether a neighbor can bring the box in; drops left on a porch in a heat wave or a freeze can fall outside the label’s storage range: {storage}.`,
      },
      { h: 'Who can do what after the order' },
      {
        p: `Because the order is in your name and email, questions are easiest coming from you. Have the order number ready when you call {phone}, {hours}. If your friend calls instead, our guide to [calling about an order for someone else](/guides/calling-about-an-eye-drop-order-for-someone-else) explains what helps.`,
      },
      {
        list: [
          `Refunds: unopened bottles can be refunded within {returnDays} days of delivery, without mailing them back. The refund returns to the card you paid with.`,
          `Damage: if the box arrives damaged, incorrect or with a broken seal, it’s replaced within the same window. Your friend can send you a photo to pass along.`,
          `Opened bottles can’t be refunded, so ask your friend not to open one they’re unsure about.`,
        ],
      },
      { h: 'Who can place the order' },
      {
        p: `You must be at least 18 to buy from the site. The rule is about the buyer; it doesn’t make the order a gift of medical advice. If your friend is under 18, Quell’s label doesn’t give directions for children, so their own doctor is the right person to ask. Our page on [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) covers other relatives and situations.`,
      },
      { h: 'What your friend should read first' },
      {
        p: `Ordering for a friend doesn’t decide whether the drop suits them. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Point them to a few lines on the panel:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Warnings: {warnings}. A friend with an egg or bird allergy should talk to a doctor first.`,
          `Directions: {directions}.`,
          `Appearance: {appearance}`,
          `When to stop: {stopUse}`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses or for use with other drops, so a friend who wears lenses or uses another drop should ask an eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts). When you’re ready, [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Can I buy eye drops for a friend online?',
        a: `Yes. Put your friend’s name and address in the shipping section and pay with your own card. The receipt and tracking come to the email you enter.`,
      },
      {
        q: 'Whose phone number should I use when ordering for a friend?',
        a: `The phone number is used for delivery updates, so use your friend’s if they want those updates directly, or your own if you’d rather keep track yourself.`,
      },
      {
        q: 'If I order eye drops for a friend, who gets the refund?',
        a: `The person who paid. An unopened bottle can be refunded within the refund window without sending it back, and the money returns to the card used for the order.`,
      },
      {
        q: 'Can my friend pay me back for eye drops I ordered for them?',
        a: `That’s between the two of you; the order and receipt are in your name. If your friend wants their own receipt for an HSA or FSA, it may be simpler for them to order themselves.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-a-duplex-or-back-unit',
    title: 'Shipping eye drops to a duplex or back unit',
    description:
      'Live in a duplex, a garage apartment or a back cottage? How to fill in the address line so your eye drops reach your door, not the house in front.',
    category: 'shipping',
    addedOn: '2026-11-25',
    body: [
      {
        p: `To ship eye drops to a duplex or back unit, enter the street address your mail uses, then put the unit in the optional “Apt, suite” line at checkout exactly as your mail shows it, such as “Unit B,” “Rear” or “Upper.” Use the name on your mailbox and a phone number you’ll answer. That gives the driver what they need to pass the front door and find yours.`,
      },
      { h: 'Why small multi-unit homes trip up deliveries' },
      {
        p: `A large apartment building looks like apartments, so drivers expect unit numbers. A duplex, a converted house, a garage apartment or a cottage behind the main house often looks like one home from the street. If the box shows only the street number, it tends to land at the front door, the house that’s most visible, even when you live around the back. Getting the second line right is most of the fix. Our guide to [getting eye drops delivered to an apartment](/guides/eye-drops-delivered-to-an-apartment) covers bigger buildings with package rooms and lockers.`,
      },
      { h: 'What to put in each address field' },
      {
        list: [
          `Street address: the number and street your mail uses. Some duplexes have two street numbers (for example, 1210 and 1212); use yours.`,
          `Apt, suite (optional): the unit as your mail carrier knows it, such as “Unit B,” “Apt 2,” “Rear,” “Upper,” “Lower” or “Back House.” Don’t leave it blank if the property has more than one home.`,
          `City, state and ZIP: as usual. Checkout asks for the two-letter state code.`,
          `Name: the name on your mailbox or door, so a driver or the front tenant can match it.`,
          `Phone: the number is used for delivery updates. Use one you’ll actually answer or read.`,
        ],
      },
      {
        p: `If you aren’t sure what your unit is officially called, look at a recent bill or a piece of mail that reached you without trouble, and copy that format.`,
      },
      { h: 'Sharing a lot with family or a landlord' },
      {
        p: `Plenty of back units sit behind a relative’s or a landlord’s house, and packages for both homes end up in one place. That works if everyone knows the plan. Agree on a spot, such as a bench by the side door or a bin on the back porch, and tell the front household when you have something coming. Forward them the tracking email if you’ll be away, so they know to bring a box in rather than leave it in the sun or the cold.`,
      },
      { h: 'Labeling your door' },
      {
        p: `The address on the box is only half of it; the driver also has to see where to go. A unit letter or number on your door or mailbox, visible from the walkway, makes a real difference. For a back unit, a small sign at the gate or the driveway pointing to the rear helps too. If the front house and the back unit share a porch or a mailbox area, agree with your neighbor on where packages for each home go.`,
      },
      { h: 'If the box goes to the wrong door' },
      {
        list: [
          `Check the tracking email for the delivery status and any note about where it was left.`,
          `Ask the other unit, front house or landlord; boxes for a back unit often end up on the front porch.`,
          `Look in shared spots: a side gate, a carport, a laundry room or behind a planter.`,
          `If it still hasn’t turned up, call {phone}, {hours}, with your order number.`,
        ],
      },
      {
        p: `Our guides to [eye drops delivered to a neighbor by mistake](/guides/eye-drops-delivered-to-a-neighbor-by-mistake) and [tracking that says delivered with no package](/guides/tracking-says-delivered-but-no-parcel) go further.`,
      },
      { h: 'Heat, cold and a box on the wrong porch' },
      {
        p: `A package that sits a day on a sunny front step, or a freezing one, can move outside the label’s storage range: {storage}. Bring it inside soon after delivery, and if a neighbor finds it, ask them to bring it in rather than leave it out. If a box arrives damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days of delivery and it will be replaced.`,
      },
      { h: 'Shipping basics for any address' },
      {
        list: [
          `We ship from Brentwood, Tennessee, to US addresses only.`,
          `Shipping is {shipping}, or free on {freeBottles} or more bottles of {size}.`,
          `A tracking email comes once the order ships. No delivery date is promised.`,
          `Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back.`,
        ],
      },
      { h: 'If you just moved into the unit' },
      {
        p: `New tenants in a back unit sometimes find that deliveries keep going to the front house for a while. Use your full unit designation on every order, label your door, and check with the front neighbor for the first few weeks. Before you place the order, double-check the address autofill didn’t drop the second line; our page on [what to do if you entered the wrong shipping address](/guides/wrong-shipping-address) explains what to do if it did. Once the box arrives, Quell’s full label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How do I write a duplex address on a package?',
        a: `Enter the street number your mail uses, then put the unit, such as “Unit B” or “Upper,” in the apartment or suite line. Use the name on your mailbox.`,
      },
      {
        q: 'What do I put in the apartment line for a back house?',
        a: `Use the designation your mail already arrives with, often “Rear,” “Back House” or a unit letter. If you’re not sure, copy it from a bill that reached you without trouble.`,
      },
      {
        q: 'What if my package went to the other side of the duplex?',
        a: `Check the tracking email, then ask the other unit or the front house. If it doesn’t turn up, call with your order number.`,
      },
      {
        q: 'Do I need a unit number to ship to a garage apartment?',
        a: `If the property has more than one home, yes. Without a unit line, boxes tend to land at the main house’s front door.`,
      },
    ],
  },
  {
    slug: 'eye-drops-arrived-too-late-refund-options',
    title: 'Eye drops arrived too late? Your refund options',
    description:
      'Needed the drops for a trip or a gift and they came after? Unopened bottles can still be refunded within the window, and you don’t mail them back.',
    category: 'returns',
    addedOn: '2026-11-25',
    body: [
      {
        p: `If your Quell order arrived after you needed it, you can still get a refund on any bottle you haven’t opened. Contact us within {returnDays} days of delivery and the product price is refunded; you don’t send the bottle back. Original shipping isn’t refunded. Opened bottles can’t be refunded. Call {phone}, {hours}, with your order number, or simply keep the bottles for later.`,
      },
      { h: 'Why orders sometimes miss a date' },
      {
        p: `We don’t promise a delivery date on any order, and our [terms](/terms) say delivery estimates are estimates. Orders ship from Brentwood, Tennessee, and the time in transit depends on the distance, the weather and how busy the carriers are, which is never more true than between Thanksgiving and New Year’s. So a box can land after the trip you ordered it for, after the gift exchange, or after you gave up and bought a bottle somewhere else.`,
      },
      { h: 'What a late order qualifies for' },
      {
        list: [
          `Unopened bottles: refundable within {returnDays} days of delivery, whatever the reason, lateness included.`,
          `The refund covers the product price. Original shipping isn’t refunded.`,
          `You keep the bottle. There’s no return label and nothing to mail.`,
          `Opened bottles can’t be refunded, returned or resold, for health and safety reasons.`,
        ],
      },
      {
        p: `In the policy’s own short form: {returns}. Our page on [what is refunded on a Quell order](/guides/what-is-refunded-on-a-return) spells out the amounts.`,
      },
      { h: 'A gift that arrived after the holiday' },
      {
        p: `If the late box was a gift you shipped straight to someone, the decision is shared. The recipient may be happy to have it a few days late; a bottle of drops isn’t tied to December 25. If they’d rather not keep it, they shouldn’t open it, and you, as the buyer, call for the refund, which goes back to your card. Our guide to [returning a Quell gift after Christmas](/guides/returning-a-quell-gift-after-christmas) covers that side.`,
      },
      { h: 'The window starts at delivery, not at the order' },
      {
        p: `Because the {returnDays} days count from delivery, a late box doesn’t eat into your time to decide. If an order you placed in early December arrives after Christmas, the clock starts the day it was delivered. Your tracking email shows that date. Our guide on [when the refund window starts](/guides/when-does-the-eye-drop-refund-window-start) explains how to find it.`,
      },
      { h: 'Should you refund it or keep it?' },
      {
        p: `Before you call, think about whether you’ll want the drops later. A few situations where keeping them makes sense:`,
      },
      {
        list: [
          `You use a lubricating drop regularly, and the late bottle simply becomes your next one.`,
          `The trip is over, but winter heating season is just starting.`,
          `The gift was for someone you’ll see again soon.`,
        ],
      },
      {
        p: `And a few where a refund makes more sense: you bought a bottle elsewhere that you’d rather keep using, the gift recipient already has some, or you ordered several bottles you won’t get through. If you keep it, store it as the label says: {storage}. A box that sat on a porch should come inside promptly.`,
      },
      { h: 'If the late box also arrived damaged' },
      {
        p: `Lateness and damage are handled differently. If the box arrives damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days of delivery and we replace it at no charge. Check the seal before you decide anything; see [what to check when your Quell order arrives](/guides/what-to-check-when-your-order-arrives). A bottle whose drops look different from the label’s description shouldn’t be used either: {doNotUse}.`,
      },
      { h: 'How to ask for the refund' },
      {
        list: [
          `Find your order number in the confirmation or tracking email, or on the [orders page](/orders).`,
          `Count the bottles that are still sealed.`,
          `Call {phone} during {hours} and ask for a refund on the unopened bottles.`,
          `The refund goes back to the card you paid with. [When will my eye drop refund show up?](/guides/when-will-my-eye-drop-refund-show-up) covers the timing on your statement.`,
        ],
      },
      { h: 'Planning the next order' },
      {
        p: `The simplest fix for a late box is ordering earlier. If you use drops regularly, reorder when you open your last bottle, not when it runs dry; the site sends one reminder email after an order to help with timing. For a trip, ship to your home address well before you leave and pack the bottle, rather than shipping to a hotel. For gifts, order in early December. Our guide to [ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) has more on timing.`,
      },
      {
        p: `While you wait for a new bottle, use what you have as the label directs: {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its full label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can I get a refund if my eye drops arrived after I needed them?',
        a: `Yes, for bottles you haven’t opened, within the refund window after delivery. The product price is refunded and you don’t mail anything back; original shipping isn’t refunded.`,
      },
      {
        q: 'Does a late delivery shorten my refund window?',
        a: `No. The window counts from the delivery date, so it starts when the box arrives, however long that took.`,
      },
      {
        q: 'Is shipping refunded if my eye drop order was late?',
        a: `No. Quell doesn’t promise a delivery date, and the refund on unopened bottles covers the product price but not the original shipping.`,
      },
      {
        q: 'Can I keep late eye drops instead of getting a refund?',
        a: `Of course. Many people keep a late bottle as their next one. Store it within the label’s temperature range and check the seal before first use.`,
      },
    ],
  },
]
