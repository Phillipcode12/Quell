import type { Guide } from '@/lib/guide-types'
export const DAILY_20261127_E: Guide[] = [
  /*
   * Sources checked 2026-11-27 for dry-eye-relief-waxahachie-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00419522, raw JSON at .daily-job/acis1127/USC00419522.json
   *   (WAXAHACHIE, TX, elev 626 ft. Normal max/min F and precip in: Jan 56.5/33.9,
   *   2.61; Feb 60.0/37.5, 2.72; Mar 67.4/44.9, 3.99; Apr 75.3/52.8, 3.48; May
   *   82.3/62.9, 4.31; Jun 90.4/70.8, 4.22; Jul 94.7/73.9, 2.48; Aug 95.3/73.7,
   *   2.91; Sep 88.4/66.8, 3.27; Oct 78.3/55.0, 4.73; Nov 66.3/44.3, 2.93; Dec
   *   57.7/36.1, 3.15. Monthly precip sums to 40.80 in. Snowfall normals are 0.0
   *   at a Texas station and are left out, per the brief.)
   * - County (Ellis) from src/lib/locations.generated.ts.
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-waxahachie-tx',
    title: 'Dry eye relief in Waxahachie, Texas',
    description:
      'Waxahachie’s August highs average 95.3°F and January lows 33.9°F, so AC and heat both run long. NOAA’s numbers and daily dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Waxahachie mostly comes down to managing indoor air. NOAA’s 1991–2020 normals for the Waxahachie station put August highs at 95.3°F and January lows at 33.9°F, so the air conditioner and the furnace each get a long season. Keep vents off your face, take blink breaks at screens, use a lubricating drop as its label directs, and let an eye doctor find the cause if dryness keeps returning.`,
      },
      { h: 'The Waxahachie station’s year in numbers' },
      {
        p: `The cooperative weather station in Waxahachie sits at about 626 feet in Ellis County, south of Dallas. Its 1991–2020 normals, as published through the National Weather Service’s NOWData pages, read like this:`,
      },
      {
        list: [
          `January: highs of 56.5°F, lows of 33.9°F, 2.61 inches of precipitation.`,
          `April: 75.3°F by afternoon, 52.8°F at dawn, 3.48 inches.`,
          `May: 82.3°F and 4.31 inches, the first of two wet peaks.`,
          `July: 94.7°F, with nights near 73.9°F and only 2.48 inches, the driest month on the chart.`,
          `August: 95.3°F, the hottest month, with 2.91 inches.`,
          `October: 78.3°F and 4.73 inches, the wettest month of the year.`,
          `December: 57.7°F highs and 36.1°F lows, with 3.15 inches.`,
        ],
      },
      {
        p: `The twelve monthly figures add up to about 40.8 inches of precipitation a year. That is a fair amount of water, yet most of the dryness people notice here happens inside, where the air has been cooled or heated before it reaches your eyes.`,
      },
      { h: 'Four months at 88°F or hotter' },
      {
        p: `From June through September, normal highs at the station run 90.4°F, 94.7°F, 95.3°F and 88.4°F. Nights barely relieve it: July and August lows stay near 74°F. Homes, trucks, offices and stores run their cooling hard for that whole stretch, and an air conditioner pulls moisture out of the air as it chills it. A dash vent aimed at your face, or a ceiling fan turning above the couch, moves that drier air across the eye surface and thins the tear film between blinks.`,
      },
      {
        list: [
          `Point the car’s center vents at your chest or the windshield, not at your eyes.`,
          `Slow the ceiling fan over the bed, or turn it off once the room cools.`,
          `Park in shade when you can, so the cabin needs less blasting when you climb in.`,
          `Wear wraparound sunglasses outside; they cut glare and block hot breeze at the same time.`,
        ],
      },
      { h: 'December through February: furnace season' },
      {
        p: `Winter here is short but real. January mornings average 33.9°F, February 37.5°F and December 36.1°F, so the heat comes on most nights for three months. Warming cold air without adding water drops its relative humidity, which is why a living room can feel parched even on a gray, drizzly day. Sitting beside a floor register, or sleeping with a space heater pointed at the bed, makes it worse.`,
      },
      {
        p: `A small humidifier in the bedroom, a thermostat set a few degrees lower at night and a chair moved out of the heater’s path all help. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through the house room by room.`,
      },
      { h: 'The in-between weeks of spring and fall' },
      {
        p: `March, April, late October and November are the months when Waxahachie homes can often run neither system for days at a time, with highs between the mid-60s and upper 70s. Those are good weeks to open windows and give your eyes a break from conditioned air. They are also the wettest stretches: May and October together bring more than 9 inches. Storm days push people indoors toward screens, and a cold front can flip the house from cooling to heating within a week, so keep an eye on which vent is blowing where.`,
      },
      { h: 'Commutes north and errands across Ellis County' },
      {
        p: `Plenty of Waxahachie residents drive to work in Dallas or elsewhere in the Metroplex, and long drives quietly dry the eyes. Concentrating on traffic slows your blink rate, the climate control runs the whole way, and morning or evening sun can flare off windshields. On a long trip, blink fully at red lights, keep a pair of sunglasses within reach and crack the window for a minute of outside air when it’s mild. If you’re heading into the city, the [Dallas guide](/guides/dry-eye-relief-dallas-tx) covers office towers and highway time from that end of the drive.`,
      },
      { h: 'Screens, school nights and home offices' },
      {
        p: `A fixed stare at a phone, laptop or monitor can cut blinking sharply, and the blinks you do make are often partial. Put the screen a little below eye level so your lids cover more of the eye, look across the room every 20 minutes, and close your eyes fully for a few seconds now and then. That routine matters most in July and January, when the house is sealed against the weather.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these uses: {uses}. Its directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `For storage, the label gives this range: {storage}. A closed car in a Waxahachie August can run far hotter than that, so the bottle belongs in a bag you carry inside, not the glove box. The panel’s warnings read: {warnings}. The full text is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Waxahachie' },
      {
        p: `Orders ship from Brentwood, Tennessee, to any address in the United States, including Waxahachie, Red Oak, Midlothian and the rest of Ellis County. You can check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. We don’t promise a delivery date, so reorder before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Waxahachie page](/eye-drops/waxahachie-tx) and the [Texas page](/eye-drops/state/texas) have more, or you can [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Indoor air explains a lot, but not everything. Finding the cause of persistent dryness and deciding what to do about it is an eye doctor’s job, and it’s worth booking a visit if the feeling keeps coming back in every season. The label sets its own limit: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Waxahachie get in August?',
        a: `NOAA’s 1991–2020 normals for the Waxahachie station put the average August high at 95.3°F, the warmest month of the year, with nights near 73.7°F.`,
      },
      {
        q: 'What is the rainiest month in Waxahachie, Texas?',
        a: `October, at 4.73 inches in the station’s normals, followed by May at 4.31 inches. July is the driest month at 2.48 inches.`,
      },
      {
        q: 'Where can I find dry eye relief in Waxahachie?',
        a: `An eye doctor is the right person to find the cause of ongoing dryness and decide what to do. For day-to-day comfort, keep vents and fans off your face, take screen breaks, and use a lubricating drop such as Quell exactly as its label directs.`,
      },
      {
        q: 'Does Quell ship to Waxahachie, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Waxahachie and every other US address, with guest checkout and free shipping on {freeBottles} or more bottles. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-27 for dry-eye-relief-edinburg-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00412758, raw JSON at .daily-job/acis1127/USC00412758.json
   *   (EDINBURG, TX, elev 96 ft. Normal max/min F and precip in: Jan 70.2/48.9,
   *   1.30; Feb 75.2/53.5, 0.95; Mar 80.0/58.2, 1.39; Apr 86.0/64.7, 1.43; May
   *   92.3/71.1, 2.57; Jun 94.7/75.3, 2.84; Jul 96.7/76.6, 2.55; Aug 97.5/76.6,
   *   1.81; Sep 93.3/73.4, 4.28; Oct 88.6/66.4, 2.54; Nov 78.9/57.7, 1.31; Dec
   *   72.9/50.6, 1.09. Monthly precip sums to 24.06 in; Nov-Apr 7.47 in, May-Oct
   *   16.59 in. Snowfall normals missing ("M"), left out.)
   * - Comparison figures for Weslaco come from the sourced comment on
   *   dry-eye-relief-weslaco-tx (2026-11-25-b.ts): WESLACO, about 75 ft, monthly
   *   precip summing to 25.73 in, Aug high 97.3 F.
   * - County (Hidalgo) from src/lib/locations.generated.ts.
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-edinburg-tx',
    title: 'Dry eye relief in Edinburg, Texas',
    description:
      'Edinburg gets about 7.5 inches of rain from November to April and highs of 80°F or more from March to October. NOAA’s numbers and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `For dry eye relief in Edinburg, plan around a very long cooling season and a dry winter half of the year. NOAA’s 1991–2020 normals for the Edinburg station show highs of 80°F or more from March through October and only about 7.5 inches of rain from November to April. Keep fans and vents off your eyes, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor if dryness persists.`,
      },
      { h: 'Two halves of the Edinburg year' },
      {
        p: `The cooperative station in Edinburg sits at about 96 feet in Hidalgo County, in the Rio Grande Valley. Its monthly precipitation normals add up to about 24.1 inches a year, and they split cleanly into a drier half and a wetter half:`,
      },
      {
        list: [
          `November through April: 1.31, 1.09, 1.30, 0.95, 1.39 and 1.43 inches, about 7.5 inches across six months.`,
          `May through October: 2.57, 2.84, 2.55, 1.81, 4.28 and 2.54 inches, about 16.6 inches.`,
          `February is the driest month at 0.95 inch; September is the wettest at 4.28 inches.`,
          `August is the hottest month, with normal highs of 97.5°F and lows of 76.6°F.`,
          `January is the coolest, at 70.2°F by afternoon and 48.9°F before dawn.`,
        ],
      },
      {
        p: `Those numbers are close to the ones in our [Weslaco guide](/guides/dry-eye-relief-weslaco-tx), a few miles to the east, which is what you’d expect for two towns on the same flat stretch of the Valley. The day-to-day advice below is built around Edinburg’s calendar rather than repeated from there.`,
      },
      { h: 'November to April: the dry, pleasant half' },
      {
        p: `Winter is the season most people in Edinburg enjoy, with December highs near 72.9°F and February near 75.2°F. It is also when rain is scarcest. Mild weather draws people outdoors for long stretches: yard work, youth sports, walks after dinner, weekend markets and patio meals. Dry air and a breeze across the face speed evaporation from the tear film, and bright winter sun adds glare. None of that is dramatic on its own, but hours of it can leave the eyes gritty by evening.`,
      },
      {
        list: [
          `Wear sunglasses with wide lenses or a wraparound frame outdoors, even on cool afternoons.`,
          `Take a few slow, complete blinks whenever you step back inside.`,
          `Keep dust down when you mow or blow off the driveway: work with the breeze at your back.`,
          `On the few cold nights, a space heater aimed at your chair dries the air in a small room quickly; angle it toward your feet.`,
        ],
      },
      { h: 'May to October: rain outside, cold air inside' },
      {
        p: `From May on, highs climb past 92°F and stay above 88°F through October, and nights from June through August sit in the mid-70s. The air outdoors carries more moisture in these months, and September brings the year’s heaviest rain, yet your eyes spend most of the season in rooms and cars cooled by air conditioning. Cooling removes moisture as it chills the air, and the vents and fans that make a 97°F afternoon bearable push that drier air straight across the eye.`,
      },
      {
        p: `Set the car vents low and toward your chest, keep a desk fan behind you rather than in front, and if a bedroom unit blows across your pillow, turn its louvers or move the bed. Leaving the thermostat a degree or two warmer also means the system runs less often.`,
      },
      { h: 'Eight months of afternoons at 80°F or above' },
      {
        p: `That stretch from March through October is longer than many Texans are used to, and it changes routines. Errands, exercise and outdoor jobs shift toward early morning, when lows run 58°F to 77°F depending on the month. Early starts are easier on the eyes too: lower sun, less heat shimmer off pavement and fewer hours of air conditioning. If you work outdoors in the afternoon, a brimmed hat and sunglasses together cut more glare than either one alone. For tips aimed at the bridges and long drives across the county, see our [McAllen guide](/guides/dry-eye-relief-mcallen-tx).`,
      },
      { h: 'Screens on campus and at home' },
      {
        p: `Edinburg is home to plenty of students, teachers and office workers, and screen time has the same effect anywhere: concentration slows the blink rate, and many blinks stop halfway. In a classroom or office cooled to the low 70s while it’s 95°F outside, that combination dries eyes faster. Lower the monitor slightly, look away at something across the room every 20 minutes, and make a point of closing your eyes fully for a moment between tasks.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its uses as: {uses}. The directions say: {directions}. Keep the dropper tip clean, as the label puts it: {tip}.`,
      },
      {
        p: `Storage matters in the Valley. The label says: {storage}. A car parked in an Edinburg lot in August can climb well past 86°F inside, so carry the bottle with you. The panel’s warnings read: {warnings}. Everything printed on the carton is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Edinburg' },
      {
        p: `We ship from Brentwood, Tennessee, to Edinburg and every other address in the United States. Guest checkout works fine; shipping is {shipping}, or free on {freeBottles} or more bottles. Tracking comes by email, though no delivery date is promised, so order before you run out. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t have to mail it back. The [Edinburg page](/eye-drops/edinburg-tx) and the [Texas page](/eye-drops/state/texas) have local details, and you can [order from the home page](/#buy).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `A drop and better habits can make day-to-day life more comfortable, but they don’t explain why your eyes are dry. An eye doctor can find the cause and decide what to do, and dryness that returns season after season is reason enough to go. The label’s own line: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to act on quickly.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Edinburg, Texas?',
        a: `February, with a normal of 0.95 inch in NOAA’s 1991–2020 records for the Edinburg station. December, at 1.09 inches, is close behind.`,
      },
      {
        q: 'How much rain does Edinburg get in a year?',
        a: `About 24.1 inches, adding up the station’s monthly normals. Roughly 16.6 inches of that falls from May through October, with September the wettest month at 4.28 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Edinburg in the summer?',
        a: `Summer days in Edinburg are spent mostly in air-conditioned rooms and cars, and cooled air that blows across the eyes speeds evaporation from the tear film. Moving vents away from your face and blinking fully at screens both help.`,
      },
      {
        q: 'Can I get Quell delivered to Edinburg, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Edinburg and anywhere else in the US. Shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-27 for dry-eye-relief-greenville-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00413734, raw JSON at .daily-job/acis1127/USC00413734.json
   *   (GREENVILLE KGVL RADIO, TX, a cooperative station named for a local radio
   *   station, elev 545 ft. Normal max/min F and precip in: Jan 57.8/33.3, 3.16;
   *   Feb 61.7/37.2, 3.46; Mar 69.3/44.2, 4.42; Apr 77.4/52.2, 4.12; May
   *   84.6/61.9, 5.79; Jun 92.6/70.2, 4.16; Jul 97.1/74.1, 3.15; Aug 98.3/73.3,
   *   2.39; Sep 91.3/65.6, 3.84; Oct 80.7/54.0, 4.96; Nov 68.3/43.4, 3.58; Dec
   *   59.5/35.5, 3.98. Monthly precip sums to 47.01 in. Snowfall normals are 0.0
   *   or 0.1 at a Texas station and are left out, per the brief.)
   * - County (Hunt) from src/lib/locations.generated.ts.
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-greenville-tx',
    title: 'Dry eye relief in Greenville, Texas',
    description:
      'In Greenville, August is both the hottest month (98.3°F) and the driest (2.39 inches). NOAA’s figures and practical dry eye relief, season by season.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Greenville means paying closest attention in August, when NOAA’s 1991–2020 normals for the local station show the year’s hottest highs (98.3°F) and its lightest rain (2.39 inches) at once. Keep air conditioning and fans off your face, shield your eyes outdoors, blink fully at screens, and use a lubricating drop as its label directs. If dryness keeps coming back, an eye doctor can find out why.`,
      },
      { h: 'Greenville’s weather station and what it records' },
      {
        p: `Greenville’s long-running cooperative station carries the name GREENVILLE KGVL RADIO, after the local radio station where it was set up. It sits at about 545 feet in Hunt County, northeast of Dallas. Over a normal year its monthly totals add up to about 47 inches of precipitation, a wet figure for North Texas, but the months are uneven:`,
      },
      {
        list: [
          `May: 5.79 inches, the wettest month, with highs of 84.6°F.`,
          `October: 4.96 inches, the second wet peak.`,
          `July: 97.1°F highs and 3.15 inches.`,
          `August: 98.3°F highs, 73.3°F lows and 2.39 inches, the driest month.`,
          `December: 59.5°F by afternoon, 35.5°F at dawn, 3.98 inches.`,
          `January: 57.8°F highs and 33.3°F lows, the coldest month.`,
        ],
      },
      { h: 'Why August is the month to watch' },
      {
        p: `In most places the hottest month and the driest month land at different points in the year. Here they coincide. Three months after May’s soaking, August brings the least rain of the year and highs that average within two degrees of 100°F. Lawns brown, dirt roads and ball fields turn to dust, and every building, car and tractor cab runs its air conditioning flat out. Your eyes get the dry, dusty outdoor air and the dried-out indoor air in the same afternoon.`,
      },
      {
        list: [
          `Do outdoor chores before 9 a.m., when the station’s August lows near 73°F still hold.`,
          `Wear wraparound sunglasses for mowing, gravel driving and anything that kicks up dust.`,
          `Rinse dust from your face and hands before you touch your eyes or the dropper.`,
          `Turn the dash vents toward the roof or your chest once the cab has cooled.`,
        ],
      },
      { h: 'The wet months: May and October' },
      {
        p: `Spring and fall storms give Greenville most of its rain, and humid, cloudy days are generally easier on the tear film than August’s. Rain days still keep people inside, though, and that usually means more phone and TV time. Long stretches of staring reduce blinking whatever the weather, so the habit of looking up and blinking fully every so often matters as much on a stormy May evening as on a hot afternoon.`,
      },
      { h: 'Heated air from December to February' },
      {
        p: `With January lows of 33.3°F and December’s at 35.5°F, Greenville homes run the heat most nights for a few months. December’s 3.98 inches of rain don’t help indoors: a furnace warms outside air without adding water, so the humidity inside drops even when it’s drizzling. A bedroom humidifier, a lower night setting and keeping chairs and beds out of a register’s airflow make the biggest difference. Our guide to [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) helps if you warm one room at a time.`,
      },
      { h: 'Highway driving toward Dallas and back' },
      {
        p: `A lot of Hunt County life involves long drives, whether to work in the Metroplex or across rural roads to the next town. On a drive, people stare ahead and blink less, and the climate control blows steadily for the whole trip. Keep the airflow off your face, blink deliberately when you stop, wear sunglasses against low morning and evening sun, and pull over rather than putting in drops at the wheel. Our guide to [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the trip home after dark.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its uses: {uses}. Directions: {directions}. And on handling: {tip}.`,
      },
      {
        p: `For storage the panel reads: {storage}. A truck in a Greenville lot in August can exceed that range by midday, so keep the bottle in a pocket or bag that comes inside with you. The warnings are short: {warnings}. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Greenville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Greenville, Commerce, Caddo Mills and every other US address. There’s no account required: check out as a guest. Shipping is {shipping}; orders of {freeBottles} or more bottles ship free. No arrival date is promised, so it’s wise to reorder with some of the last bottle left. Unopened bottles can be refunded within {returnDays} days of delivery, without sending anything back. For local details, see the [Greenville page](/eye-drops/greenville-tx) and the [Texas page](/eye-drops/state/texas), or [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness follows you through the wet months as well as August, that pattern is worth bringing to an eye doctor, who can find the cause and decide what to do. The label also says: {stopUse} The signs that call for prompt care are listed in [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Greenville, Texas?',
        a: `August. NOAA’s 1991–2020 normals for the Greenville station put the average August high at 98.3°F, just ahead of July’s 97.1°F.`,
      },
      {
        q: 'How much rain does Greenville, TX get a year?',
        a: `About 47 inches, adding up the station’s monthly normals. May is the wettest month at 5.79 inches and August the driest at 2.39 inches.`,
      },
      {
        q: 'Why are my eyes so dry in August in Hunt County?',
        a: `August combines the year’s lightest rain with highs near 98°F, so outdoor air is dusty and indoor air is cooled hard. Both speed evaporation from the tear film, especially when a vent or fan blows across your face.`,
      },
      {
        q: 'Does Quell deliver to Greenville, Texas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Greenville and every other US address, with guest checkout. Orders of {freeBottles} or more bottles ship free, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-27 for dry-eye-relief-redlands-ca:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00047306, raw JSON at .daily-job/acis1127/USC00047306.json
   *   (REDLANDS, CA, elev 1410 ft. Normal max/min F and precip in: Jan 66.6/41.1,
   *   2.76; Feb 67.4/42.3, 2.99; Mar 70.9/44.6, 2.01; Apr 75.6/47.7, 0.91; May
   *   80.3/52.4, 0.35; Jun 88.5/56.4, 0.10; Jul 95.4/62.5, 0.10; Aug 96.2/62.9,
   *   0.09; Sep 92.3/59.6, 0.13; Oct 82.9/52.9, 0.53; Nov 75.0/45.3, 0.89; Dec
   *   66.5/40.1, 2.01. Monthly precip sums to 12.87 in; Jun-Sep 0.42 in; Dec-Mar
   *   9.77 in. Daily range Jun 32.1, Jul 32.9, Aug 33.3, Sep 32.7 F. Snowfall
   *   normals are 0.0 and are left out, per the brief.)
   * - County (San Bernardino) from src/lib/locations.generated.ts.
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-redlands-ca',
    title: 'Dry eye relief in Redlands, California',
    description:
      'Redlands gets about 0.4 inch of rain from June through September, and summer days swing 33°F from dawn to afternoon. NOAA’s data and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Redlands starts with the long dry summer. NOAA’s 1991–2020 normals for the Redlands station show about 0.4 inch of rain from June through September combined, with August highs of 96.2°F and mornings more than 30 degrees cooler. Shield your eyes outdoors, keep air conditioning off your face, blink fully at screens and use a lubricating drop as its label directs. Ongoing dryness is a question for an eye doctor.`,
      },
      { h: 'Redlands in NOAA’s normals' },
      {
        p: `The Redlands cooperative station sits at about 1,410 feet in San Bernardino County, on the eastern side of the Inland Empire. Its monthly normals add up to roughly 12.9 inches of precipitation a year, and nearly all of it comes in a few winter months:`,
      },
      {
        list: [
          `December through March: 2.01, 2.76, 2.99 and 2.01 inches, about 9.8 inches in all.`,
          `April and May taper off to 0.91 and 0.35 inch.`,
          `June, July, August and September: 0.10, 0.10, 0.09 and 0.13 inch.`,
          `August is the hottest month, at 96.2°F by afternoon and 62.9°F at dawn.`,
          `December is the coolest, with highs of 66.5°F and lows of 40.1°F.`,
        ],
      },
      { h: 'A 30-degree swing between dawn and afternoon' },
      {
        p: `One detail in the Redlands numbers stands out: the gap between the morning low and the afternoon high. In June it averages about 32 degrees, and in August about 33 (62.9°F at dawn, 96.2°F by mid-afternoon). A summer day here starts with open windows and cool air and ends with the house sealed and the air conditioning running hard. Your eyes cope with both in a single day, and the second half is the tougher one.`,
      },
      {
        list: [
          `Get walks, runs and yard work done in the first hours after sunrise, while it is still in the 60s.`,
          `Close the house before the heat builds rather than cooling it down later with the system on high.`,
          `Aim the car’s vents low; a cabin that sat in an afternoon lot needs a hard blast, but not into your face.`,
          `Keep a desk or ceiling fan off your line of sight in the evening, when the AC and fan often run together.`,
        ],
      },
      { h: 'Four months with almost no rain' },
      {
        p: `From June through September, the station’s normals total about 0.42 inch of rain, less than half an inch for a third of the year. By late summer, hillsides and vacant lots are dry and dusty, and any breeze carries fine grit. That matters most outdoors: for gardening, hiking the foothills, working on a site or simply spending a long afternoon at a park. Wraparound sunglasses block both glare and blowing dust, and a hat brim cuts the overhead sun. Wash your hands before touching your eyes, especially after yard work.`,
      },
      { h: 'The short wet season, and heaters at night' },
      {
        p: `Winter in Redlands is mild by daytime, with highs near 66°F from December through February, but mornings fall to around 40°F to 42°F. Many homes run the heat in the early morning and evening, and heated air tends to be dry air even in the rainy months. Point registers and space heaters away from the bed and the couch, and consider a small humidifier in the bedroom. When the rain does come, open the windows on a mild afternoon and let some of that moist air in.`,
      },
      { h: 'Commutes, campuses and screens' },
      {
        p: `Plenty of Redlands residents drive to jobs elsewhere in the region, study, teach or work long hours at a desk. Screen work reduces blinking, and many blinks stop halfway; a car’s climate control blowing for an hour on the freeway adds to it. Set your monitor slightly below eye level, look away every 20 minutes or so, and blink fully at each red light. If you also spend time in Riverside, our [Riverside guide](/guides/dry-eye-relief-riverside-ca) covers that city’s climate and its windy days.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives these uses: {uses}. Directions: {directions}. It also advises: {tip}.`,
      },
      {
        p: `Heat is the storage issue in Redlands. The label says: {storage}. A parked car on an August afternoon will easily exceed that, so carry the bottle in a bag and don’t leave it on the dashboard. Warnings: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell shipped to Redlands' },
      {
        p: `We ship from Brentwood, Tennessee, to Redlands, Loma Linda, Yucaipa, Mentone and every other address in the US. Checkout doesn’t require an account; shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised, so allow time and reorder before you run low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Redlands page](/eye-drops/redlands-ca) and the [California page](/eye-drops/state/california), or [order now](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry well into the rainy season, or the discomfort is getting worse, see an eye doctor, who can find the cause and decide what to do. The label puts a firm limit on self-care: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that need prompt attention.`,
      },
    ],
    faq: [
      {
        q: 'How much does it rain in Redlands in the summer?',
        a: `Very little. NOAA’s 1991–2020 normals for the Redlands station total about 0.42 inch for June through September combined, with August the driest month at 0.09 inch.`,
      },
      {
        q: 'How hot does Redlands, CA get in August?',
        a: `The station’s normal August high is 96.2°F, the hottest of the year, with mornings near 62.9°F. July is close behind at 95.4°F.`,
      },
      {
        q: 'Why do my eyes get dry in the Inland Empire?',
        a: `Summers are long, hot and almost rainless, so outdoor air turns dusty and indoor air is cooled hard for months. Both speed evaporation from the tear film, especially when vents or fans blow across your face.`,
      },
      {
        q: 'Does Quell ship to Redlands, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Redlands and every other US address, with guest checkout and free shipping on {freeBottles} or more bottles. No delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-art-restorers-and-conservators',
    title: 'Dry eyes for art restorers and conservators',
    description:
      'Microscope work, bright task lights, fume extraction and long sessions of close focus dry a conservator’s eyes. Studio habits and what the label covers.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Art restorers and conservators get dry eyes from hours of close, unblinking focus under bright task lights and magnifiers, often with fume extraction pulling air past the face. Plan short breaks to look away and blink fully, keep lamps and extraction arms out of your line of airflow, and use a lubricating drop only during breaks with clean hands. A solvent splash is never a job for eye drops: call Poison Control or get medical care.`,
      },
      { h: 'Why conservation work is hard on the tear film' },
      {
        p: `The tear film needs regular, complete blinks to spread its oil, water and mucus layers across the eye. Conservation work asks for the opposite: long stretches of steady attention on a square centimeter of paint, paper, textile or gilt. Retouching a loss with a fine brush, cleaning a varnish layer swab by swab, or consolidating flaking paint under a stereo microscope can all go on for an hour without your noticing how rarely you have blinked. When you do blink during fine work, the blink is often partial, so the lower part of the eye dries first.`,
      },
      {
        p: `Add bright light, moving air and sometimes a cool, controlled room, and the surface of the eye loses moisture faster between blinks. The result tends to show up late in the session as grittiness, a gauzy blur that clears when you blink, or eyes that water on their own.`,
      },
      { h: 'Microscopes, loupes and head magnifiers' },
      {
        p: `Optical aids are central to the job and they change how you use your eyes. With a stereo microscope, you lean into the eyepieces and hold still; with a head-mounted magnifier or loupe, you work at a short, fixed distance for long periods. Both keep the gaze locked in one place.`,
      },
      {
        list: [
          `Set a timer for every 20 to 30 minutes and look up from the eyepieces at something across the room for 20 seconds.`,
          `Close your eyes fully two or three times before you go back to the work.`,
          `Adjust the microscope height so you sit upright; craning forward tends to open the eyes wider.`,
          `Clean eyepieces and loupe lenses with the tool’s own cleaning method, and wash your hands before touching anything near your eyes.`,
        ],
      },
      { h: 'Task lights and examination lighting' },
      {
        p: `Bright, even light is essential for color matching and for seeing surface detail, so conservators often work under strong task lamps or ring lights placed close to the object. Light reflecting off a glossy varnish or a gilded frame can make you squint, and a lamp head that runs warm sits right beside your face. Angle the lamp so you see the surface without a hot spot of glare, and keep the lamp head off to the side rather than straight ahead of your eyes.`,
      },
      {
        p: `Examination under ultraviolet light usually happens in a darkened room, and the eyes do a lot of searching while the rest of you stays still. Take the same breaks: turn your gaze away from the object, blink, and give your eyes a moment before resuming.`,
      },
      { h: 'Fume extraction, solvents and dust' },
      {
        p: `Snorkel-style extraction arms and ventilated benches pull air steadily across the work area to carry vapors away. That airflow is part of working safely, and it also moves dry air across your face for as long as you stay at the bench. Position the intake as your studio’s procedures direct, then shift your seat or the object so the stream passes below your eye line rather than across it.`,
      },
      {
        p: `If a solvent or any other chemical splashes into your eye, eye drops are not the answer. Follow your workplace’s emergency procedure, call Poison Control or seek medical care right away, and take the product’s name with you. The same goes for vapors that make your eyes burn and don’t settle when you step away, and for dust or grit from sanding or cleaning that you can’t blink out. A lubricating drop is for ordinary dryness, not for something in the eye.`,
      },
      { h: 'Climate-controlled studios and storage areas' },
      {
        p: `Many conservation spaces control temperature and humidity for the sake of the objects, and the setting that protects a panel painting is not necessarily the most comfortable one for your eyes. Cool rooms, steady air handling and long winter days in a heated building all add up. You can’t change a room set for the collection, but you can change your position within it: sit out of the path of supply vents, avoid placing a personal fan where it blows across your face, and take your breaks outside the room when you can.`,
      },
      { h: 'Fitting an eye drop into a conservation day' },
      {
        p: `Plan drops for the start of a break, never in the middle of a cleaning or retouching pass. Step away from the bench, wash solvents, pigments and adhesive residue off your hands, and only then open the bottle. Keep the bottle off the work table entirely, both to protect the object and to keep it clean. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its uses: {uses}. The directions are: {directions}.`,
      },
      {
        list: [
          `The label’s handling rule applies with extra force in a studio full of materials: {tip}.`,
          `Its storage range is: {storage}. A bench under hot lamps can run warm, so keep the bottle in a bag or drawer away from them.`,
          `Its warnings read: {warnings}.`,
          `Under “Do not use,” the panel lists: {doNotUse}. Glance at the solution before each use.`,
        ],
      },
      {
        p: `The label does not cover contact lenses or using Quell alongside other eye drops. If either applies, ask your eye doctor or pharmacist before you start. The full panel is on our [Drug Facts page](/drug-facts), and our guide to [dry eyes when sewing or knitting](/guides/dry-eyes-when-sewing-or-knitting) covers other long sessions of fine handwork.`,
      },
      { h: 'Habits that help over a long project' },
      {
        list: [
          `Alternate fine work with tasks at a normal distance: documentation, photography setup, condition notes.`,
          `Keep computer screens for reports slightly below eye level so your lids cover more of the eye.`,
          `Use the [dry eye self-check](/self-check) to notice patterns, such as worse days during long varnish removals.`,
          `Wear the eye protection your studio requires for the task; it also keeps stray airflow off the eyes.`,
        ],
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes are dry most working days, or the blur stops clearing with a blink, an eye doctor can find the cause and decide what to do, and can also advise on lenses for working distance. The label itself says: {stopUse} For other warning signs, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry doing restoration work?',
        a: `Fine work under a microscope or magnifier keeps your gaze fixed for long periods, which cuts blinking, and bright lamps and fume extraction add light and moving air. Together they let the tear film evaporate between blinks.`,
      },
      {
        q: 'How often should a conservator take eye breaks at the microscope?',
        a: `A practical rhythm is every 20 to 30 minutes: look up at something across the room for about 20 seconds and blink fully a few times before going back to the eyepieces.`,
      },
      {
        q: 'What should I do if solvent splashes in my eye at work?',
        a: `Follow your workplace’s emergency procedure and call Poison Control or seek medical care right away, bringing the product name. Don’t use a lubricating eye drop for a chemical splash.`,
      },
      {
        q: 'Can I keep eye drops on my conservation bench?',
        a: `It’s better not to. Keep the bottle in a bag or drawer away from hot lamps and materials, and use it on a break after washing your hands, so neither the object nor the dropper gets contaminated.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-orchestra-musicians',
    title: 'Dry eyes for orchestra musicians',
    description:
      'Reading a part while tracking the conductor, stand lights in a dim pit and heated halls in winter dry an orchestra player’s eyes. Rehearsal habits that help.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Orchestra musicians get dry eyes from reading a part and tracking the conductor at the same time, often for two and a half hours, under stand lights or bright stage wash in halls that are heated hard in winter. Use rests and tacet passages to blink fully, set your stand light so it lights the page and not your eyes, sit out of vent drafts, and save drops for breaks.`,
      },
      { h: 'Two targets, one pair of eyes' },
      {
        p: `An orchestral player’s eyes do a job that a soloist’s don’t. They read dense notation at about arm’s length, then flick up to the podium for a cue, then back to the exact bar, again and again. Every glance is a refocus, and both targets demand attention, so the natural blink rate drops. In a fast passage or an exposed solo, players often hold their eyes open almost without blinking until the phrase ends. The tear film thins in those stretches, and by the second half of a long rehearsal the page can look slightly smeared until you blink it clear.`,
      },
      {
        p: `String sections add their own pattern: you share a stand, so the music may sit off to one side and slightly farther away than you’d like, which encourages leaning and staring. Wind and brass players watch the conductor closely for breath cues and entries. Percussionists move between instruments and parts spread across the back of the stage. The details differ, but the common factor is long, focused looking with few full blinks.`,
      },
      { h: 'Using rests on purpose' },
      {
        p: `A part is full of natural breaks, and they make ideal blink breaks. Counting a 40-bar rest, waiting through a tacet movement or sitting while another section rehearses a passage are all chances to close your eyes for a second or two and let the lids spread fresh tears.`,
      },
      {
        list: [
          `Mark one or two long rests per movement with a small pencil symbol as a reminder to blink and look into the hall.`,
          `During a repeated passage in rehearsal, glance at something far away while you listen for the conductor’s comments.`,
          `At a page turn, finish the turn, then give one deliberate full blink before you find your place.`,
          `Between pieces, look up from the stand entirely and let your focus relax on the back of the hall.`,
        ],
      },
      { h: 'Stand lights, pits and stage lighting' },
      {
        p: `In an orchestra pit for opera, ballet or musicals, the only light on your part may be a small clip-on or stand-mounted lamp in an otherwise dark space. Glare off glossy paper or a tablet screen makes you squint, and a bulb angled toward your face sits in the edge of your vision for the whole show. Aim the light down onto the page from above, use a diffuser if the music shines, and keep the lamp head below your eye line.`,
      },
      {
        p: `On stage, bright overhead lighting does the opposite job: plenty of light on the page, but heat and glare from above, especially for players near the front edge. Matte paper or a slightly tilted stand cuts reflections. If you read from a tablet, turn the brightness down to match the stage rather than leaving it at full.`,
      },
      { h: 'Winter halls, rehearsal rooms and December concerts' },
      {
        p: `December is a crowded month for orchestras, with holiday pops programs, choral collaborations and ballet runs packed into a few weeks. That means double services, extra rehearsals and a lot of hours in buildings whose heating runs hard against the cold outside. Heated air holds less moisture relative to its temperature, and supply vents above or beside the stage blow steadily over the players. Ask the personnel manager or stage crew whether a vent can be angled away from your section, and avoid placing a space heater near your chair backstage.`,
      },
      {
        p: `Rehearsal rooms and school band rooms are often smaller and stuffier, with the same forced-air heat. A short walk outside at the break, even into a cold hallway, gives your eyes a change of air.`,
      },
      { h: 'Glasses, distance and the music on your stand' },
      {
        p: `Many musicians find that the distance to the stand is neither reading distance nor far distance, and squinting to see small notes adds strain. An eye doctor can check your vision at your actual playing distance (bring a measurement from your eyes to the stand) and decide whether lenses for that range would help. Larger part prints or a tablet with zoom can also make a difference for long programs.`,
      },
      { h: 'Using an eye drop around rehearsals and concerts' },
      {
        p: `The intermission, the break in a rehearsal and the time before you go on are the practical moments. Wash or wipe rosin, valve oil and cork grease off your fingers first, and keep the bottle in your case pocket rather than on the stand. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its uses: {uses}. Its directions read: {directions}. And on handling the bottle: {tip}.`,
      },
      {
        p: `Instrument cases left in cars and cold loading docks can stray outside the label’s storage range ({storage}), so keep the bottle in a jacket or gig bag that comes inside with you. The label also says: {warnings}. It does not give directions for contact lenses or for combining Quell with other eye drops; ask your eye doctor or pharmacist about either. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Other musicians, other angles' },
      {
        p: `If you also play in bands or under heavy stage effects, our guide for [musicians and stage performers](/guides/dry-eyes-for-musicians-and-performers) covers haze, fog and touring. For church keyboard players, pianists and choirs, see [dry eyes for pianists and church musicians](/guides/dry-eyes-for-pianists-and-church-musicians). The [dry eye self-check](/self-check) can help you notice whether the pattern follows rehearsal weeks.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that lingers after every service, blur that doesn’t clear with blinking, or a change in how well you see your part are all reasons to book an eye doctor, who can find the cause and decide what to do. The label is clear about its limits: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry during orchestra rehearsals?',
        a: `Reading a part while watching the conductor keeps your eyes busy refocusing for long stretches, and people blink less when they concentrate. Heated halls and vents blowing over the stage speed evaporation from the tear film.`,
      },
      {
        q: 'How should I set up a stand light in an orchestra pit?',
        a: `Aim it down onto the page from above, keep the lamp head below your eye line, and use a diffuser or matte paper if the music reflects. The goal is light on the notes, not in your eyes.`,
      },
      {
        q: 'When can an orchestra musician use eye drops?',
        a: `At intermission, rehearsal breaks or before you go on, after cleaning rosin or oil from your fingers. Keep the bottle in your case or bag rather than on the stand.`,
      },
      {
        q: 'Can an eye doctor check my vision at music stand distance?',
        a: `You can ask. Measure the distance from your eyes to your stand and bring it to the appointment; an eye doctor can test your vision at that range and decide whether different lenses make sense.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-sim-racing-and-flight-simulators',
    title: 'Dry eyes from sim racing and flight simulators',
    description:
      'Endurance stints, triple screens, VR and rig fans blowing in your face dry the eyes during sim racing and flight sim sessions. Setup and break tips.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Sim racing and flight simulators dry the eyes because you stare at a fixed point for long stretches, often in a dark room, with immersion fans or a cooling fan blowing at your face. Aim fans at your chest, set screens slightly below eye level, use pit stops and cruise phases as blink breaks, and keep a lubricating drop for breaks between stints rather than mid-race.`,
      },
      { h: 'Why a simulator is harder on the eyes than most games' },
      {
        p: `Racing and flying sims reward a kind of looking that ordinary games don’t. In a race you fix on braking markers, apexes and the car ahead, and in a busy corner sequence you may go many seconds without blinking at all. In a flight sim, approaches and landings demand the same lock-on focus, while the instrument scan keeps your eyes moving between small gauges on the panel. Sessions are long: an endurance race can run for hours, and a long-haul flight in real time can fill an evening.`,
      },
      {
        p: `Concentration lowers the blink rate, and the blinks you do make are often incomplete, so the lower part of the eye dries first. The usual signs show up late in a session: grittiness, a stinging feeling, or text on the dash and gauges that looks soft until you blink.`,
      },
      { h: 'Triple screens, ultrawides and where to put them' },
      {
        p: `Wide setups wrap the view around you, which is great for immersion and means your eyes and head turn more often. Monitors set at or above eye level make you look straight ahead or up, and that opens the eyes wider and exposes more surface to the air.`,
      },
      {
        list: [
          `Place the center screen so its middle sits a little below eye level, with side screens angled in to match.`,
          `Turn brightness down to suit the room; a dazzling sky texture in a dark room makes you squint.`,
          `Use a soft bias light behind the screens so the room isn’t pitch black.`,
          `Keep the screens at a comfortable distance for reading the HUD without leaning forward.`,
        ],
      },
      { h: 'Wind fans and rig cooling' },
      {
        p: `Many sim rigs include fans that blow harder as your virtual speed rises, and plenty of drivers run a desk fan simply to stay cool in a long stint. Either way, a stream of air straight into your face for an hour is about the quickest way to dry the tear film. If you like the wind effect, mount the fans lower so the air hits your chest and neck, or cap the top speed. A wraparound pair of glasses or plain lenses can block some of the airflow without changing what you see.`,
      },
      { h: 'VR headsets in the cockpit' },
      {
        p: `VR puts the screen centimeters from your eyes and seals the space around them. Some players find the headset’s own fan or the warm air inside dries their eyes; others notice they blink less because the view feels so real. Clean the lenses, take the headset off at every real break, and look around the room before you put it back on. Our guide to [dry eyes from a VR headset](/guides/dry-eyes-from-a-vr-headset) covers fit, fogging and session length in more detail.`,
      },
      { h: 'Breaks built into the sim' },
      {
        p: `Both kinds of sim offer natural pauses if you plan for them. Make the pause a habit and your eyes get regular resets without costing you a lap or a checkride.`,
      },
      {
        list: [
          `In practice and qualifying, look away and blink fully on the cool-down lap.`,
          `In an endurance race, use driver swaps or mandatory stops as real breaks: stand up, look out a window, close your eyes for a few seconds.`,
          `In a flight sim, engage the autopilot in cruise and step away from the screens for a few minutes.`,
          `Between league races, set a timer so a long online evening includes breaks you didn’t have to remember.`,
        ],
      },
      { h: 'Using an eye drop between stints' },
      {
        p: `Don’t try to put in drops at speed or on approach; do it while parked, paused or in cruise with time to spare. Wash your hands first, since wheel rims and joysticks collect skin oil and grime. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes its uses: {uses}. The directions are: {directions}.`,
      },
      {
        list: [
          `Handling, as the label puts it: {tip}.`,
          `Storage: {storage}. A shelf beside a PC exhaust or a sunny window can run warm, so keep the bottle in a drawer.`,
          `Warnings: {warnings}.`,
          `Contact lenses and other eye drops aren’t covered by the label; ask your eye doctor or pharmacist first.`,
        ],
      },
      {
        p: `The full panel is on our [Drug Facts page](/drug-facts). For general console and PC play, our guide to [eye drops for gamers](/guides/eye-drops-for-gamers) covers more of the basics.`,
      },
      { h: 'Room air during winter league season' },
      {
        p: `A lot of sim racing and flying happens in winter evenings in a small room with the door shut and the heat on. A gaming PC adds warmth, the furnace dries the air, and the rig fan moves it across your face. A small humidifier in the room, a cooler thermostat setting and a fan that points anywhere but at your eyes all help. You can also run the [dry eye self-check](/self-check) after a few long sessions to see how your eyes respond.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness or blur keeps showing up after short sessions, or you notice it away from the rig too, see an eye doctor, who can find the cause and decide what to do. The label sets the limit for any drop: {stopUse} Signs that need prompt care are in [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry during sim racing?',
        a: `Racing focus cuts your blink rate, sessions run long, and many rigs use fans that blow straight at your face. Together they let the tear film evaporate between blinks.`,
      },
      {
        q: 'Do sim rig wind fans dry out your eyes?',
        a: `Air blowing directly at your face speeds evaporation from the tear film. Mount the fans lower so they hit your chest, cap their top speed, or wear glasses that block some of the stream.`,
      },
      {
        q: 'How do I take eye breaks during a long flight sim session?',
        a: `Use cruise on autopilot to step away from the screens for a few minutes, look at something far away and blink fully a few times before you sit back down.`,
      },
      {
        q: 'Where should triple monitors sit for a sim rig?',
        a: `Put the middle of the center screen slightly below eye level and angle the side screens in to match, at a distance where you can read the HUD without leaning forward.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-roommate',
    title: 'Christmas gifts for a roommate',
    description:
      'Useful, low-key Christmas gifts for an adult roommate: things for their room, the shared kitchen and winter comfort, plus when eye drops make sense.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Good Christmas gifts for a roommate are small, useful and easy to live with: something that makes their room more comfortable in winter, an upgrade to a shared space you both use, or a small indulgence that fits a budget you’ve roughly agreed on. If your roommate has mentioned dry, scratchy eyes during heating season, a bottle of lubricating eye drops is a practical add-on, not the whole gift.`,
      },
      { h: 'Agree on a budget, or at least a range' },
      {
        p: `Roommate gifts go wrong when one person spends far more than the other. A quick conversation in early December settles it: a firm number, a range, or an agreement to do one shared gift for the apartment instead of exchanging. If you share the bills, a gift for the home can feel fairer than two separate presents.`,
      },
      { h: 'Gifts for their room in winter' },
      {
        p: `Heating season changes how a bedroom feels, especially in older buildings where the radiator or vent is right beside the bed. Gifts that make that room more comfortable get used every night.`,
      },
      {
        list: [
          `A small, quiet humidifier sized for one room, with a spare filter if the model takes one.`,
          `A warm, dimmable bedside lamp for reading without the overhead light.`,
          `A heavier throw or a flannel sheet set for a drafty room.`,
          `Blackout curtains or an eye mask for a roommate who works late shifts.`,
          `A slipper pair or warm socks for cold floors.`,
        ],
      },
      { h: 'Upgrades to the shared spaces' },
      {
        p: `A gift for the common areas is a gift for both of you, which is part of the appeal. Think about the irritations you both notice: the dull kitchen knife, the wobbly lamp, the TV area lit only by the screen.`,
      },
      {
        list: [
          `A good chef’s knife or a cutting board to replace the warped one.`,
          `A bias light kit behind the TV so movie nights aren’t in a pitch-dark room.`,
          `A plant that tolerates low light, with a pot that drains properly.`,
          `A board game or puzzle for nights in.`,
          `A shared streaming month or a coffee maker upgrade, if that’s a running joke.`,
        ],
      },
      { h: 'For the roommate who studies or works from home' },
      {
        p: `If your roommate spends long hours at a laptop, desk comfort counts. A laptop stand raises the screen to a better height, a wireless keyboard makes that setup usable, and a desk lamp with a warm setting cuts glare in the evening. Staring at a screen reduces blinking, and that, plus dry heated air, is why many people notice their eyes feel dry by the end of a long day. Our guide to [gifts for a coworker who works on screens](/guides/gifts-for-a-coworker-who-works-on-screens) has more desk ideas.`,
      },
      { h: 'Is it weird to give a roommate eye drops?' },
      {
        p: `Only if it comes out of nowhere. Eye drops are a personal-care item, so they make sense when your roommate has mentioned dry eyes, keeps rubbing their eyes during heating season, or already uses drops. In that case a bottle tucked in with a humidifier or a cozy throw says you were listening. If they haven’t brought it up, choose something else.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. The directions say: {directions}. It also carries this warning: {warnings}. If your roommate has an egg or bird allergy, skip it; if they wear contact lenses or use other drops, the label doesn’t cover that, so they should ask an eye doctor or pharmacist first. Each person should use their own bottle.`,
      },
      { h: 'Ordering a gift you’ll both receive at the same address' },
      {
        p: `When you share a mailbox, a package can give the surprise away. Checkout is as a guest, buyers must be 18 or older, and the order ships from Brentwood, Tennessee, to any US address. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order early in December and keep an eye on the tracking email so you can collect the box yourself. Our guide to [ordering eye drops for a roommate](/guides/can-i-order-eye-drops-for-my-roommate) covers whose name to put on the label.`,
      },
      {
        p: `If the gift isn’t wanted, an unopened bottle can be refunded within {returnDays} days of delivery without sending it back. Opened bottles can’t be refunded.`,
      },
      { h: 'Small gifts that cost little' },
      {
        list: [
          `Doing their least favorite chore for a month, written on a card.`,
          `A batch of homemade cookies or a favorite meal cooked on a night they work late.`,
          `A framed photo from a trip or night out you both remember.`,
          `A playlist, a mixtape-style card or a handwritten note.`,
        ],
      },
      {
        p: `For more ideas across every budget, browse our [holiday and gift guides](/guides/topic/seasonal), including [practical Christmas gifts for adults](/guides/practical-christmas-gifts-for-adults).`,
      },
      { h: 'Storing a gift until Christmas' },
      {
        p: `If you buy early, hide the gift somewhere inside the apartment rather than in a cold car or a hot closet next to a heater. For eye drops, the label’s range is: {storage}.`,
      },
    ],
    faq: [
      {
        q: 'What should I get my roommate for Christmas?',
        a: `Something small and useful: a humidifier or lamp for their room, an upgrade for the shared kitchen or living room, or a small indulgence that fits a budget you’ve agreed on together.`,
      },
      {
        q: 'How much should you spend on a roommate Christmas gift?',
        a: `Whatever you both agree on. A short conversation in early December about a number or a range keeps one person from spending far more than the other, and some roommates choose one shared gift for the apartment instead.`,
      },
      {
        q: 'Are eye drops a good gift for a roommate?',
        a: `They can be, if your roommate has mentioned dry eyes or already uses drops. Pair a bottle with something like a humidifier or a throw rather than giving it alone, and skip it if they have an egg or bird allergy.`,
      },
      {
        q: 'How do I keep a roommate from seeing their Christmas package?',
        a: `Watch the tracking email and collect the box yourself when it arrives. Since no delivery date is promised, ordering early in December gives you more time to intercept it.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-mentor',
    title: 'Christmas gifts for a mentor',
    description:
      'Thoughtful Christmas gifts for a mentor: a specific thank-you note, gifts tied to what they taught you, comfort for long workdays, and modest budgets.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `The most valued Christmas gift for a mentor is a specific, handwritten thank-you that names what they taught you and what changed because of it. Pair it with something modest and personal: a book linked to your conversations, a useful item for their desk or workshop, or a comfort for long winter workdays. Keep the cost low enough that it reads as gratitude, not obligation.`,
      },
      { h: 'Start with the note' },
      {
        p: `Mentors rarely hear how their time paid off. A note that says “thank you for everything” is kind; a note that says “your advice about pricing my first contract is why I took the job I have now” is something people keep for years. Name one or two concrete moments, describe what you did with the advice, and say where you are now. If you’re early in the relationship, describe what you’re working toward and how their guidance shapes it.`,
      },
      { h: 'Gifts tied to what they taught you' },
      {
        list: [
          `A book by an author they quoted, or a new one in the field you talk about most.`,
          `A print, map or photo from a place connected to a story they told you.`,
          `A tool of their trade in a better version: a good pen for a writer, a quality level for a carpenter, a notebook for someone who sketches ideas.`,
          `Something from your own work: a copy of the article you published, a photo of the project you finished, a sample of what you now make.`,
        ],
      },
      { h: 'Comfort for long workdays' },
      {
        p: `Many mentors are senior people with full calendars, long hours at a screen or a bench, and buildings heated hard all winter. Comfort gifts are welcome because they get used.`,
      },
      {
        list: [
          `A desk lamp with a warm, dimmable setting for late reading.`,
          `A small humidifier for an office where the heat runs dry.`,
          `A heavy mug that keeps coffee warm through a meeting.`,
          `A laptop stand that lifts the screen to a better height.`,
          `Good wool socks or a scarf for someone who walks to work.`,
        ],
      },
      { h: 'Are eye drops an appropriate gift for a mentor?' },
      {
        p: `Usually not on their own. A mentor relationship is professional or semi-professional, and personal-care items can feel too intimate. The exception is a mentor who has mentioned their eyes: someone who jokes about squinting at spreadsheets every December, or who keeps a bottle of drops on the desk. Then a bottle tucked into a desk-comfort gift shows you paid attention to what they said.`,
      },
      {
        p: `If you include it, know what the label says. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Drug Facts panel lists these uses: {uses}. Directions: {directions}. Warnings: {warnings}. A mentor who wears contact lenses or uses other drops should check with their eye doctor or pharmacist, since the label doesn’t cover either. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'How much to spend' },
      {
        p: `Spending a lot on a mentor can backfire. It can embarrass someone who gave their time freely, and in many workplaces it can run up against gift rules. A thoughtful gift that costs about what you’d spend on a nice lunch is plenty. If your mentor is also your manager, or works for an organization with a gift policy, a card and a shared coffee is often the safest choice. Our guide to [Christmas gifts for your boss](/guides/christmas-gifts-for-your-boss) covers that situation.`,
      },
      { h: 'Mentors outside the office' },
      {
        p: `Not every mentor is a work contact. The coach who taught you to lead a team, the retired tradesperson who let you shadow them, the professor who wrote your recommendation or the older friend who talked you through a hard year all count. For them, an experience can mean more than an object: invite them to a meal, a game or a show, and use the time to tell them how things turned out. Our guide to [Christmas gifts for a college professor](/guides/christmas-gifts-for-a-college-professor) has ideas for academic mentors.`,
      },
      { h: 'Ordering and delivering the gift' },
      {
        p: `Handing a gift over in person, at a holiday coffee or the last meeting before the break, is often the nicest way. If you need to ship it, Quell orders go to any US address from Brentwood, Tennessee, with guest checkout. Buyers must be 18 or older, shipping is {shipping} or free on {freeBottles} or more bottles, and no delivery date is promised, so order early. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back.`,
      },
      {
        p: `Browse more ideas in our [holiday gift guides](/guides/topic/seasonal).`,
      },
      { h: 'If you can’t give a gift at all' },
      {
        p: `Some workplaces don’t allow gifts between staff, and some mentors would rather you didn’t. In that case, the note is the gift. You can also pay it forward: tell them you’ve started mentoring someone yourself, or recommend them publicly for an award or a talk. Most mentors find that more rewarding than anything in a box.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a mentor?',
        a: `A specific, handwritten thank-you note that names what they taught you, paired with something modest and personal, such as a book linked to your conversations or a comfort item for their desk.`,
      },
      {
        q: 'How much should I spend on a gift for my mentor?',
        a: `Keep it modest, around what a nice lunch costs. Expensive gifts can embarrass someone who gave their time freely and may run against workplace gift rules.`,
      },
      {
        q: 'Is it appropriate to give a mentor eye drops?',
        a: `Only if they’ve mentioned dry or tired-feeling eyes, and then as part of a desk-comfort gift rather than on its own. Otherwise choose something less personal.`,
      },
      {
        q: 'What do you write in a thank-you card to a mentor?',
        a: `Name one or two concrete moments where their advice helped, describe what you did with it, and say where it led. Specific details mean far more than general thanks.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-live-nativity',
    title: 'Dry eyes at a live nativity',
    description:
      'Standing still for hours on a cold night, spotlights, hay, animals and heaters make a live nativity hard on the eyes. Tips for cast, volunteers and visitors.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `A live nativity is hard on dry eyes because cast members stand nearly still for an hour or more on a cold December night, facing bright spotlights, with hay, straw and animals close by and a heater or fire pit nearby. Shift your gaze and blink fully between visitors, angle lights and heaters away from faces, rotate roles in short shifts, and use any eye drops during breaks with clean hands.`,
      },
      { h: 'Why the stable scene dries your eyes' },
      {
        p: `Most live nativities run after dark in December, outdoors or in an open-sided shed, and the roles ask you to hold a pose. Holding still with your eyes fixed on the manger, the crowd or a point in the distance cuts the blink rate. Cold air holds very little moisture, and even a light breeze moves it across the eye surface. Spotlights aimed at the scene so visitors can see it shine straight at the cast. Put those together for a two- or three-hour evening and many people end up with gritty, watering eyes by the last shift.`,
      },
      { h: 'Spotlights and how to place them' },
      {
        p: `Lighting is often set up by whoever has the floodlights, and it tends to point straight at the faces in the scene. A few adjustments help the cast without spoiling the view for visitors.`,
      },
      {
        list: [
          `Mount lights higher and to the sides, so they rake across the scene instead of shining level into eyes.`,
          `Use warm, lower-wattage bulbs and add more of them rather than one bright flood.`,
          `Light the manger and the backdrop more than the faces; the scene reads well with soft light on the people.`,
          `Let cast members look slightly down or to the side, toward the manger, rather than out into the beam.`,
        ],
      },
      { h: 'Hay, straw and the animals' },
      {
        p: `Bales of straw, loose hay and borrowed animals give the scene its character, and they also fill the air with fine dust and bits of chaff, especially when the animals shift around or the wind picks up. Lay fresh straw shortly before opening rather than days ahead so less of it has broken into dust, keep loose hay away from where the cast stands, and position actors upwind of the animal pen when you can.`,
      },
      {
        p: `If a piece of straw, grit or anything else gets into your eye, step out of the scene. Don’t rub it. Blink gently and let tears work, and if it won’t come out, hurts, or your vision changes, get medical care rather than reaching for drops. A lubricating drop is for ordinary dryness, not for something stuck in the eye. Wash your hands after handling the animals before you touch your face.`,
      },
      { h: 'Heaters, fire pits and warming tents' },
      {
        p: `Groups often keep the cast warm with a propane heater behind the scene, a fire pit for visitors or a heated tent for breaks. All of them help with comfort, and all of them dry the air close by. Keep heaters aimed at legs and backs, not faces, keep fire pits downwind of the scene, and don’t stand right in the smoke. In a warming tent, sit away from the heater’s outlet and give your eyes a minute with the lids closed before going back out.`,
      },
      { h: 'Short shifts for the cast' },
      {
        p: `Rotating roles is the simplest fix. Twenty or thirty minutes in the scene, then a break, keeps people warmer and gives eyes regular rest. Volunteers directing parking or greeting visitors face the same cold wind and headlights, so include them in the rotation too.`,
      },
      {
        list: [
          `Build a schedule so no one holds a pose for more than about half an hour at a time.`,
          `On breaks, look at something far away and close your eyes fully a few times.`,
          `Wear glasses under a headdress if you normally wear them; they block some wind.`,
          `Keep a pack of tissues in the warming tent for watering eyes.`,
        ],
      },
      { h: 'Visitors walking through' },
      {
        p: `Drive-through nativities mean headlights and car heaters; walk-through ones mean standing in the cold. If you drive, point the heater vents at your feet and the windshield rather than your face, and dim your own headlights where the organizers ask. Walking visitors can wear sunglasses with clear or light lenses against the wind and should keep a few steps back from fire pits. For other December outings in the cold, see [dry eyes from cold air](/guides/dry-eyes-from-cold-air) and [dry eyes at a winter bonfire](/guides/dry-eyes-at-a-winter-bonfire).`,
      },
      { h: 'Eye drops during the evening' },
      {
        p: `Use drops before your first shift and during breaks in the tent, never in costume in the middle of the scene with cold, dusty hands. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes its uses: {uses}. Directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `Cold matters for the bottle too. The storage line reads: {storage}. A bottle in a costume pocket or a truck parked by the barn on a freezing night can fall below that, so keep it in an inside layer or in the heated tent. The label’s warnings read: {warnings}. Contact lenses and other eye drops are outside what the label covers; ask your eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering before the event' },
      {
        p: `If your church or group needs drops on hand for a weekend of performances, order early in December. Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout; shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised. Each person should use their own bottle. More winter guides are collected under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'When it’s more than the cold' },
      {
        p: `Eyes that water in the wind and settle once you’re warm are reacting normally. If dryness stays with you on ordinary days, or comes back every winter, an eye doctor can find the cause and decide what to do. The label also sets a limit: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt standing in a live nativity?',
        a: `You’re holding still in cold night air, often facing bright spotlights, with straw dust and heaters nearby. Fewer blinks plus dry, moving air let the tear film evaporate.`,
      },
      {
        q: 'How long should cast members stand in a live nativity at a time?',
        a: `Rotating every 20 to 30 minutes is a practical rhythm. It keeps people warmer and gives eyes a regular break from the cold and the lights.`,
      },
      {
        q: 'What should I do if straw or hay gets in my eye?',
        a: `Step out of the scene, don’t rub, and blink gently. If it won’t come out, hurts, or your vision changes, get medical care instead of using eye drops.`,
      },
      {
        q: 'Where should spotlights go for a live nativity?',
        a: `Higher and off to the sides, raking across the scene rather than shining level into the cast’s eyes, with softer light on faces and more on the manger and backdrop.`,
      },
    ],
  },
  {
    slug: 'can-i-use-eye-drops-before-an-mri',
    title: 'Can I use eye drops before an MRI?',
    description:
      'Quell’s label doesn’t mention MRI scans, so the imaging team decides. What to tell them, where the bottle goes, and how to stay comfortable in the scanner.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Quell’s label doesn’t mention MRI scans, so it can’t tell you whether to use drops beforehand; the imaging center can. List your eye drops on the screening form, ask the staff whether to use them before the scan, and leave the bottle with your belongings. If you’re allowed, a drop before you go in may make lying still with your eyes open more comfortable.`,
      },
      { h: 'What the label does and doesn’t cover' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these uses: {uses}. Its directions: {directions}. The panel says nothing about scans, imaging or procedures of any kind. Where a label is silent, the right move is to ask the people running the test rather than guess.`,
      },
      { h: 'Tell the imaging center about your eye drops' },
      {
        p: `Before an MRI, you’ll usually fill out a screening form about your health, implants and anything you’re taking. It’s worth listing over-the-counter eye drops there too, along with any other drops you use. If you’re unsure what to write, take a photo of the Drug Facts panel on the box, or open our [Drug Facts page](/drug-facts) on your phone, so the staff can see the ingredients: {actives} as active ingredients, and {inactives} as inactive ones.`,
      },
      {
        list: [
          `Write the product name and how often you use it.`,
          `Mention any other eye drops, prescription or not, separately.`,
          `Ask directly: should I use my eye drops on the day of the scan, and if so, when?`,
          `If your scan involves the head or eyes, ask whether anything should be different for that.`,
        ],
      },
      { h: 'Where the bottle goes during the scan' },
      {
        p: `Imaging centers ask you to leave personal items outside the scanner room, usually in a locker or with a companion. Handle your eye drop bottle the way you handle your phone and keys: it goes with your belongings unless the staff tell you otherwise. Don’t carry it in a pocket into the room. Before you hand things over, check the bottle is capped; the label’s own rule is {tip}.`,
      },
      { h: 'If the staff say yes: timing a drop' },
      {
        p: `If you’re cleared to use your drops, the most useful moment is shortly before you go in, after you’ve changed and washed your hands. That way your eyes start the scan comfortable. Keep to the label’s schedule rather than adding extra drops because of the appointment. If the center gives you a different instruction, follow theirs.`,
      },
      {
        p: `If you’re told not to use them before the scan, you can usually plan the dose for afterward. Ask when that’s fine, especially if you’re given any other medicine or contrast during the visit.`,
      },
      { h: 'Staying comfortable inside the scanner' },
      {
        p: `An MRI asks you to lie still, sometimes for a long time, often looking up at the inside of the machine. People tend to stare when they’re trying not to move, and staring cuts blinking. Many scanners also move air through the space you lie in. Here are a few things that help:`,
      },
      {
        list: [
          `Ask whether it’s fine to keep your eyes closed; for many scans it is, and it saves your eyes from drying.`,
          `If the airflow bothers your eyes, tell the technologist; they may be able to adjust it.`,
          `Blink slowly and fully every so often if you keep your eyes open.`,
          `Mention dry eyes when you arrive, so the staff know why you might ask for a pause.`,
        ],
      },
      { h: 'Makeup, lenses and other things to ask about' },
      {
        p: `Imaging centers often have their own rules about makeup, glasses and contact lenses, and they will tell you in their preparation instructions. Follow those. Quell’s label does not give directions for contact lenses, so if you wear them, ask your eye doctor separately how to fit drops around your lenses on the day.`,
      },
      { h: 'If your eyes are uncomfortable after the scan' },
      {
        p: `Some people notice dry, scratchy eyes after a long scan simply from lying still with their eyes open. That usually settles with normal blinking. If you notice pain, a change in vision or discomfort that doesn’t pass, contact the imaging center or your doctor. The label’s own guidance is: {stopUse} For other warning signs, see our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
      { h: 'Related questions' },
      {
        p: `For other appointments, our guide to [using eye drops before an eye exam](/guides/using-eye-drops-before-an-eye-exam) covers what to tell the eye doctor, and [can you use eye drops while fasting](/guides/can-you-use-eye-drops-while-fasting) covers fasting instructions before procedures. If you’re trying to understand your own dryness, the [dry eye self-check](/self-check) is a starting point, not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Should I tell the MRI technician I use eye drops?',
        a: `Yes. List them on the screening form and mention them when you check in, along with any other drops you use, and ask whether to use them before the scan.`,
      },
      {
        q: 'Can I take my eye drops into the MRI room?',
        a: `Leave the bottle with your belongings, in the locker or with a companion, unless the staff tell you otherwise. Imaging centers ask you to bring nothing into the scanner room.`,
      },
      {
        q: 'Why do my eyes feel dry during an MRI?',
        a: `Lying still often means staring, which reduces blinking, and many scanners move air through the space. Closing your eyes, if the staff say that’s fine, usually helps.`,
      },
      {
        q: 'Does Quell’s label say anything about MRI scans?',
        a: `No. The Drug Facts panel covers uses, directions, warnings and storage, and doesn’t mention imaging, so ask the imaging center what they want you to do.`,
      },
    ],
  },
  {
    slug: 'can-i-use-eye-drops-before-allergy-testing',
    title: 'Can I use eye drops before allergy testing?',
    description:
      'Quell’s label doesn’t mention allergy testing, so your allergist decides. Why its egg and bird caution matters, and what to bring to the appointment.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Quell’s label doesn’t mention allergy testing, so whether to use it beforehand is your allergist’s call. Tell the clinic about every eye drop you use, show them the ingredient list, and follow their preparation instructions. If you’re being tested because you suspect an egg or bird allergy, ask before using Quell at all: its label carries a caution for exactly those allergies.`,
      },
      { h: 'What Quell’s label says, and doesn’t' },
      {
        p: `Quell’s Drug Facts panel lists these uses: {uses}. And the directions: {directions}. The panel doesn’t address skin tests, blood tests for allergies, or any other appointment, which means the label can’t tell you whether to skip a dose. That decision belongs to the clinic running the test.`,
      },
      { h: 'The caution that matters most here' },
      {
        p: `Quell’s warnings begin with this: {warnings}. That line is the reason allergy testing and this product belong in the same conversation. If you’re being tested because of a suspected egg or bird allergy, or you already know you react to either, ask your allergist whether Quell is suitable for you before you use it, and certainly before the test. Our guide to [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution in more detail.`,
      },
      { h: 'Bring the ingredient list to the appointment' },
      {
        p: `Allergists want to know about everything you put on or in your body, and eye drops are easy to forget. The simplest approach is to bring the box or a photo of its Drug Facts panel. You can also show the clinic our [Drug Facts page](/drug-facts). For reference, here is what the label lists:`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `Inactive ingredients: {inactives}.`,
          `If honey is one of your concerns, note that the inactive list includes manuka honey; our guide to [manuka honey in eye drops](/guides/honey-allergy-and-manuka-honey-eye-drops) covers that.`,
          `Emu oil is on the inactive list too, which is relevant to the bird caution.`,
        ],
      },
      { h: 'Questions to ask the allergy clinic' },
      {
        p: `Clinics send preparation instructions before testing, often a list of medicines to pause and for how long. Eye drops may or may not be on that list. If they aren’t mentioned, call and ask rather than assuming either way.`,
      },
      {
        list: [
          `Should I keep using my lubricating eye drops before the test?`,
          `If not, how many days before should I stop, and when can I start again?`,
          `Does it matter that the drops have egg- or bird-related cautions on the label?`,
          `Should I bring the bottle with me?`,
          `I use other eye drops too; do the instructions differ for those?`,
        ],
      },
      { h: 'If you’re told to pause your drops' },
      {
        p: `A few days without drops can feel uncomfortable if you rely on them. You can make that stretch easier without adding anything new: keep fans and heating vents off your face, take regular breaks from screens to blink fully, wear glasses outdoors to block wind, and run a humidifier at night if the heat is on. Our guide to [what to do for dry eyes besides eye drops](/guides/what-to-do-for-dry-eyes-besides-eye-drops) has more ideas.`,
      },
      {
        p: `When the clinic says you can resume, go back to the label’s directions rather than catching up with extra doses.`,
      },
      { h: 'If you react to eye drops' },
      {
        p: `If your eyes or eyelids sting, itch or swell after using any drop, stop using it and contact your doctor. The label’s stop-use guidance reads: {stopUse} Bring the bottle to the appointment so the doctor can see exactly what you used. If a reaction comes with trouble breathing or swelling of the face or throat, that is an emergency.`,
      },
      { h: 'Keep your eye doctor in the loop' },
      {
        p: `Allergy results can matter to your eye doctor as well as your allergist, especially if you’ve been dealing with itchy or watery eyes alongside dryness. After testing, share the results with whoever looks after your eyes, and mention every drop you use, including how often. If dryness continues whether or not you’re using drops, an eye doctor can find the cause and decide what to do.`,
      },
      { h: 'Returns if testing changes your plans' },
      {
        p: `If the results mean you shouldn’t use Quell, an unopened bottle can be refunded within {returnDays} days of delivery, and you don’t have to send it back. Opened bottles can’t be refunded. Our guide to [returning eye drops if you’re allergic](/guides/can-i-return-eye-drops-if-im-allergic) explains the details, or call {phone} ({hours}).`,
      },
    ],
    faq: [
      {
        q: 'Should I stop using eye drops before an allergy test?',
        a: `Ask the allergy clinic. Quell’s label doesn’t mention allergy testing, so follow the clinic’s preparation instructions and call them if eye drops aren’t on their list.`,
      },
      {
        q: 'Do I need to tell my allergist about my eye drops?',
        a: `Yes. Bring the box or a photo of the Drug Facts panel so they can see the full ingredient list, including the label’s caution for people with egg or bird allergies.`,
      },
      {
        q: 'Can I use Quell if I’m being tested for an egg allergy?',
        a: `Ask your allergist first. Quell’s label says caution should be used in those with egg or bird allergies, so it’s a question to settle before you use it, not after.`,
      },
      {
        q: 'What can I do for dry eyes if I have to pause my drops?',
        a: `Keep vents and fans off your face, take screen breaks to blink fully, wear glasses in the wind, and use a humidifier at night. Resume the label’s directions when the clinic says you can.`,
      },
    ],
  },
  {
    slug: 'bought-eye-drops-from-a-fake-website',
    title: 'Bought eye drops from a fake website? What to do',
    description:
      'If you think you paid a fake eye drop site, call your card issuer, don’t use the drops, save your records and change any reused password. Step by step.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If you think you bought eye drops from a fake website, call the number on the back of your card and tell your bank or card issuer, save every email and screenshot, change any password you reused there, and don’t put anything that arrives into your eyes until you’ve checked it. The card issuer decides on disputes and replacement cards; your job is to act quickly and keep records.`,
      },
      { h: 'Signs you may have used a fake site' },
      {
        p: `People usually realize afterward. Common clues are a confirmation email from an address that doesn’t match the site, a charge in a different currency or under an unfamiliar name, a tracking number that never updates, or a site that has disappeared. Sometimes a package does arrive, but with a label you can’t read, a missing Drug Facts panel or no company address. Our guide to [spotting a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) covers the warning signs before you buy; this one is about what to do after.`,
      },
      { h: 'Step 1: call your card issuer' },
      {
        list: [
          `Use the phone number printed on the back of your card, not one from an email or the website.`,
          `Explain that you think the merchant was fraudulent and give the date and amount.`,
          `Ask whether the card should be replaced, and whether you should dispute the charge.`,
          `Write down the date, the person you spoke to and any reference number.`,
        ],
      },
      {
        p: `Card issuers set their own rules and timelines for disputes, so ask them what they need from you. If you paid with a payment app or bank transfer instead of a card, contact that provider the same way.`,
      },
      { h: 'Step 2: keep the evidence' },
      {
        p: `Save the order confirmation, any shipping emails, the website address, screenshots of the product page and the amount charged. If you still have the browser tab open, screenshot it before it vanishes. If a package arrived, keep the box, the label and the bottle, unopened if possible. Your card issuer may ask for any of it.`,
      },
      { h: 'Step 3: secure your accounts' },
      {
        p: `If you created an account on the site with a password you use anywhere else, change that password everywhere it’s used, starting with your email. Watch for messages that refer to the order; fake sellers sometimes follow up with “delivery problem” texts or emails asking for more money or card details. Our guide to [fake delivery texts](/guides/fake-delivery-texts-and-eye-drop-orders) shows what those look like.`,
      },
      { h: 'Step 4: don’t use drops you can’t trust' },
      {
        p: `Eye drops go straight onto the surface of the eye, so a bottle from an unknown source isn’t worth the risk. Don’t use drops from a site you think was fake, even if the bottle looks normal. Signs that make it more obvious include a broken or missing seal, a label with spelling mistakes or missing sections, no lot number or expiration date, or drops that don’t match the label’s description.`,
      },
      {
        p: `If you already used drops from a suspicious bottle and your eyes hurt, look different or your vision changes, stop and contact your doctor or an eye doctor, and bring the bottle. If anyone swallowed some, call Poison Control.`,
      },
      { h: 'If you meant to buy Quell' },
      {
        p: `Quell is sold on quelldrop.com, by {company}, {address}. A genuine Quell product page shows the full Drug Facts panel (it’s also on our [Drug Facts page](/drug-facts)), and the label describes the drops this way: {milky}. Payment happens on a secure page run by Authorize.net, and card details never pass through Quell’s own servers. If you’re unsure whether a site or a bottle is really ours, call {phone} ({hours}) before you use it or pay again.`,
      },
      {
        p: `If you’d like to check a box you received, our guide on [how to tell if eye drops are counterfeit](/guides/how-to-tell-if-eye-drops-are-counterfeit) goes through the seal, the panel and the bottle.`,
      },
      { h: 'Tell the platform where you found the site' },
      {
        p: `If you reached the fake store through a social media ad, a search ad or a marketplace listing, report the ad or listing to that platform using its own reporting tool. That won’t get your money back, but it can get the ad pulled before someone else pays. Tell friends or family members who might have seen the same offer, especially if it was shared in a group chat. Keep your own copy of everything you report.`,
      },
      { h: 'Buying again, safely' },
      {
        list: [
          `Type the address yourself or use a bookmark, instead of clicking an ad or a link in a message.`,
          `Read the full Drug Facts panel before paying.`,
          `Find a company name, street address and a phone number you can call.`,
          `Read the refund terms. On Quell: {returns}.`,
          `Pay by card, which gives you a route to dispute a charge through your issuer.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What should I do if I bought eye drops from a scam website?',
        a: `Call the number on the back of your card to report it, save your order emails and screenshots, change any reused password, and don’t use the drops. Your card issuer will tell you what it needs.`,
      },
      {
        q: 'Can I get my money back from a fake eye drop website?',
        a: `That depends on your card issuer or payment provider, which sets its own dispute rules. Contact them quickly and keep every record of the order.`,
      },
      {
        q: 'Should I use eye drops from a website I think was fake?',
        a: `No. You can’t confirm what’s in the bottle or how it was stored, and drops go directly onto the eye. If you already used them and your eyes hurt or your vision changes, contact a doctor.`,
      },
      {
        q: 'How do I know if I bought real Quell?',
        a: `Quell is sold on quelldrop.com by {company}. Compare the box with the Drug Facts on the site, and if you’re unsure, call {phone} ({hours}) before using it.`,
      },
    ],
  },
  {
    slug: 'free-trial-eye-drop-offers',
    title: 'Free trial eye drop offers: what to check first',
    description:
      'A “free trial” of eye drops can mean a recurring charge hidden in the terms. What to check before paying for shipping, and how Quell’s checkout differs.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Before you accept a “free trial” of eye drops, find out what you’re agreeing to after the trial ends. Many online trial offers ask only for a small shipping fee, then start charging the full price on a schedule unless you cancel in time. Read the terms beside the payment button, look for the words “subscription,” “auto-ship” or “membership,” and check who the seller is. Quell has no trial and no subscription.`,
      },
      { h: 'How trial offers usually work' },
      {
        p: `A typical trial offer is a bottle for “just the cost of shipping.” The catch, when there is one, sits in the small print: the order enrolls you in a recurring plan that bills the full price every few weeks, sometimes starting soon after the trial bottle ships. Canceling may require a phone call within a short window. Some of these are honest programs with clear terms; others are designed so people don’t notice the enrollment until several charges appear.`,
      },
      { h: 'What to read before you pay' },
      {
        list: [
          `The text right next to the payment button or checkbox, which is often where the recurring charge is disclosed.`,
          `Words like “subscription,” “auto-ship,” “membership,” “renews” or “billed every.”`,
          `The trial length, and whether it starts when you order or when the bottle arrives.`,
          `How to cancel: online, by phone, or only by email, and the deadline.`,
          `The total you’ll pay if you forget to cancel.`,
        ],
      },
      {
        p: `If any of that isn’t stated plainly, close the page. A seller that won’t tell you what you’ll be charged isn’t one to trust with eye drops either.`,
      },
      { h: 'Check the seller and the product' },
      {
        p: `Trial offers often appear in social media ads or pop-ups and lead to a one-page site with no real company behind it. Look for a company name, street address and a phone number you can call. Look for the full Drug Facts panel, which every over-the-counter eye drop carries. And be wary of claims that no label could make, such as promises to restore your vision or make glasses unnecessary. Our guide to [buying eye drops from a social media ad](/guides/is-it-safe-to-buy-eye-drops-from-a-social-media-ad) covers that route in more detail.`,
      },
      { h: 'How Quell’s checkout works instead' },
      {
        p: `Quell has no free trial, no subscription and no auto-ship. Every order is a one-time purchase: you choose how many bottles, check out as a guest, and pay once on a secure payment page run by Authorize.net. Shipping is {shipping} per order, or free on {freeBottles} or more bottles. There are no promo codes. After an order, you may get one reorder reminder email; it’s a reminder, not a charge. Our guide to [whether Quell is a subscription](/guides/is-quell-a-subscription) explains the reminder.`,
      },
      {
        p: `If you change your mind about an unopened bottle, the policy is simple: {returns}, within {returnDays} days of delivery. Opened bottles can’t be refunded. Damaged, incorrect or broken-seal orders are replaced.`,
      },
      { h: 'If you already signed up for a trial' },
      {
        list: [
          `Find the confirmation email and look for the cancellation steps and deadline.`,
          `Cancel in the way the terms describe, and save the confirmation.`,
          `If you can’t reach the seller, or charges continue after canceling, call the number on the back of your card.`,
          `Watch your statement for a few months for repeat charges under unfamiliar names.`,
        ],
      },
      {
        p: `Before using a trial bottle, read its label. If there’s no Drug Facts panel, no company name or the seal is broken, don’t put it in your eyes. Our guide to [what to do if you bought from a fake website](/guides/bought-eye-drops-from-a-fake-website) covers the steps if the seller turns out not to be real.`,
      },
      { h: 'Offers that arrive by text or email' },
      {
        p: `Some trial offers come as unexpected texts or emails, sometimes made to look like a message from a store you’ve used. Don’t tap the link. If you’re interested, type the store’s address into your browser yourself and look for the offer there. Quell doesn’t run trial offers, so a message offering a free Quell trial isn’t from us. Our guides to [fake delivery texts](/guides/fake-delivery-texts-and-eye-drop-orders) and [checking whether an order email is real](/guides/is-this-eye-drop-order-email-real) show what to look for.`,
      },
      { h: 'Is a trial worth it for dry eyes at all?' },
      {
        p: `A single trial bottle won’t tell you why your eyes feel dry. If dryness is ongoing, an eye doctor can find the cause and decide what to do, and that’s worth more than any sample. For a quick look at your own pattern, try the [dry eye self-check](/self-check), which is not a diagnosis but can help you describe your symptoms at an appointment.`,
      },
      {
        p: `Whatever drop you try, follow its label. Quell’s says: {directions}. And it lists when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Are free trial eye drops a scam?',
        a: `Not always, but many trial offers enroll you in a recurring charge unless you cancel in time. Read the terms beside the payment button and check who the seller is before paying for shipping.`,
      },
      {
        q: 'Does Quell offer a free trial?',
        a: `No. Quell has no trial, subscription or auto-ship. Each order is a single purchase, and unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
      {
        q: 'How do I cancel an eye drop free trial subscription?',
        a: `Follow the cancellation steps in your confirmation email or the seller’s terms, and save proof. If you can’t reach the seller or charges keep coming, call the number on the back of your card.`,
      },
      {
        q: 'Why did I get charged after an eye drop free trial?',
        a: `Many trial offers include a recurring plan that starts billing the full price after the trial period. Check the confirmation email for the terms, cancel if you don’t want it, and contact your card issuer if charges continue.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-during-the-december-holiday-rush',
    title: 'Shipping eye drops during the December holiday rush',
    description:
      'December is the busiest shipping month. How the rush affects an eye drop order, which address to choose, and how to keep a gift or your supply on track.',
    category: 'shipping',
    addedOn: '2026-11-27',
    body: [
      {
        p: `In December, an eye drop order still ships the usual way, but it joins the heaviest package traffic of the year, so build in extra time. Order as early as you can, send it to an address where someone will be home, watch the tracking email, and bring the box inside promptly. Quell doesn’t promise a delivery date, and delivery estimates are only estimates, so don’t count on a specific day.`,
      },
      { h: 'What the holiday rush changes' },
      {
        p: `Nothing about checkout changes in December: you pick your bottles, enter one US shipping address, pay, and get a confirmation email. What changes is everything after the package leaves Brentwood, Tennessee. Carriers handle far more packages between Thanksgiving and Christmas than at any other time, and winter weather can hit any part of the route. Our terms put it plainly: delivery estimates are estimates, not promises, and delays caused by the carrier are outside our control.`,
      },
      {
        list: [
          `Tracking may go quiet for a day or two between scans; that usually means the package is moving through a busy hub.`,
          `More packages sit on porches and in lobbies, which raises the chance of a mix-up or theft.`,
          `A winter storm anywhere between Tennessee and your door can add time.`,
        ],
      },
      { h: 'Order earlier than you think you need to' },
      {
        p: `For your own supply, reorder while the current bottle still has some left rather than when it runs dry; in December, that margin matters more. For gifts, order as soon as you know what you’re giving. Ordering on Black Friday weekend or Cyber Monday (November 30 this year) costs nothing extra compared with mid-December, since there are no holiday deals or promo codes to wait for. The price ladder in the cart is the same all year: {freeBottles} or more bottles ship free, otherwise shipping is {shipping}.`,
      },
      { h: 'Pick an address where the box won’t sit' },
      {
        p: `During the rush, where a package lands matters as much as when. Risk of loss passes to you once a package is delivered to the address you gave, so choose a place where someone can bring it in.`,
      },
      {
        list: [
          `A home where someone is usually in during the day.`,
          `A work address with a front desk that accepts packages, if your workplace allows personal deliveries.`,
          `A relative’s house you’ll be staying at, if they know a box is coming.`,
          `For apartments, a building with a package room or locker you check daily.`,
        ],
      },
      {
        p: `Our guides to [shipping to a work address](/guides/shipping-eye-drops-to-your-work-address) and [shipping to an office closed for the holidays](/guides/shipping-eye-drops-to-an-office-closed-for-holidays) cover the details of workplace deliveries in late December.`,
      },
      { h: 'Several gifts, several orders' },
      {
        p: `Each order ships to a single address, so sending bottles to three people means three orders, each paying its own shipping unless it reaches {freeBottles} bottles. If you’re visiting everyone anyway, it can make more sense to ship one larger order to yourself and hand the bottles out. That also means you can check each box before it becomes a gift.`,
      },
      { h: 'Keeping an eye on the package' },
      {
        p: `When your order ships, you get an email with tracking. In December, check it once a day rather than once a week. If it says delivered and you don’t see the box, look around the porch and with neighbors first, then follow our guide to [tracking that says delivered but no package](/guides/tracking-says-delivered-but-no-parcel). If tracking stops updating for several days, our guide to [tracking that isn’t updating](/guides/eye-drop-tracking-not-updating) explains what to check before you call.`,
      },
      { h: 'Cold porches and cold trucks' },
      {
        p: `The label’s storage range is {storage}. A package that rides in an unheated truck or sits on a frozen porch through a cold night can go below that. Bring boxes in as soon as you can, and let a cold bottle come to room temperature before use. Before using it, look at the solution. The site’s note on appearance reads: {appearance} The label’s Do not use line reads: {doNotUse}. If the bottle has changed color, don’t use it, and call {phone}.`,
      },
      { h: 'If something goes wrong' },
      {
        p: `If an order arrives damaged, incorrect or with a broken tamper seal, contact us within {returnDays} days and it will be replaced at no charge. If a gift turns up after the day you wanted, an unopened bottle can still be refunded within {returnDays} days of delivery without sending it back. Call {phone} ({hours}) with your order number. Our office keeps weekday hours, so plan calls around the holidays.`,
      },
      { h: 'A December checklist' },
      {
        list: [
          `Order now rather than later in the month.`,
          `Use an address where someone will bring the box in.`,
          `Double-check the street address and unit number before you pay.`,
          `Watch the tracking email daily.`,
          `Bring the package indoors the day it arrives.`,
          `Keep your order number handy in case you need to call.`,
        ],
      },
      {
        p: `More holiday ordering and gift guides are under [gifts and the holidays](/guides/topic/seasonal), and you can [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Do holiday shipping delays affect eye drop orders?',
        a: `They can. December has the heaviest package traffic of the year, and Quell doesn’t promise a delivery date, so order early and watch the tracking email.`,
      },
      {
        q: 'When should I order eye drops to have them for Christmas?',
        a: `As early as you can. No delivery date is promised, so the earlier you order, the more room you leave for holiday delays and winter weather along the route.`,
      },
      {
        q: 'Can I ship eye drops to several people in one order?',
        a: `No, each order goes to one address. Place a separate order for each person, or ship one larger order to yourself and hand the bottles out.`,
      },
      {
        q: 'What if my eye drop package sits on a cold porch in December?',
        a: `Bring it in as soon as you can and let the bottle reach room temperature. Check the solution before use, and if it has changed color, don’t use it and call {phone}.`,
      },
    ],
  },
  {
    slug: 'what-else-is-in-preservative-free-eye-drops',
    title: 'What else is in preservative-free eye drops?',
    description:
      'Preservative-free doesn’t mean ingredient-free. What a preservative-free drop like Quell still contains, from actives to the inactive list, read in plain terms.',
    category: 'formula',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Preservative-free eye drops still contain several ingredients; they just leave out an added preservative. Quell, for example, lists three active ingredients ({actives}) and {inactiveCount} inactive ones, including water, salt, a buffer, a thickening agent and natural ingredients such as emu oil and manuka honey. “Preservative-free” tells you what’s missing, not that the bottle is plain water.`,
      },
      { h: 'Preservative-free describes an absence' },
      {
        p: `When a label or carton says preservative-free, it means no preservative has been added to keep the multi-use solution in good condition between doses. It isn’t a statement about how many other ingredients there are, how natural they are, or how gentle the drop is. Some preservative-free drops are short lists; others, like Quell, have a longer list because they include ingredients aimed at the tear film’s oil layer.`,
      },
      {
        p: `Our guide to [what preservative-free means](/guides/what-does-preservative-free-mean) covers the term itself. This one is about everything that’s still on the list.`,
      },
      { h: 'The active ingredients' },
      {
        p: `Active ingredients are the ones that do the job named in the Uses section, and on a Drug Facts panel they are listed with their amounts and a Purpose. Quell’s are: {actives}. The panel gives glycerol and polysorbate 80 the purpose “Lubricant” and light mineral oil the purpose “Emollient.” Its uses read: {uses}.`,
      },
      {
        list: [
          `{glycerol}: listed on the panel with the purpose Lubricant.`,
          `{polysorbate}: also a Lubricant on the panel, and a common emulsifier, the kind of ingredient that lets oil and water stay mixed.`,
          `{mineralOil}: the Emollient, an oil, which fits a drop designed around the tear film’s outer oil layer.`,
        ],
      },
      { h: 'The inactive ingredients' },
      {
        p: `Inactive ingredients are everything else in the bottle. On Quell’s panel they’re listed alphabetically: {inactives}. Grouped loosely by role, in plain terms:`,
      },
      {
        list: [
          `The base: sterile water, and Dead Sea salt (sodium chloride) to balance the saltiness of the solution.`,
          `pH and texture: tromethamine as a buffer, and Polaxamer 188, which helps the ingredients stay evenly mixed.`,
          `Oil-layer and natural ingredients: emu oil, manuka honey and Terminalia Chubula.`,
          `Supporting ingredients: caprylyl glycol, glyceryl laurate and glyceryl undecylenate.`,
        ],
      },
      {
        p: `The carton also carries a panel about emu oil, which reads: {emuOil} For more on individual ingredients, see our guides to [Dead Sea salt in eye drops](/guides/dead-sea-salt-in-eye-drops) and [poloxamer 188 and tromethamine](/guides/poloxamer-188-and-tromethamine-in-eye-drops).`,
      },
      { h: 'Why a preservative-free drop can look milky' },
      {
        p: `Because Quell contains oils mixed into a water base, it doesn’t look like a clear saline. The label says: {milky}. The site adds: {appearance} Color is still worth watching, though; the panel’s Do not use line reads: {doNotUse}.`,
      },
      { h: 'Does more ingredients mean less gentle?' },
      {
        p: `Not necessarily, and not necessarily the reverse either. A list’s length doesn’t say how any one person’s eyes will respond. What matters for you is whether any single ingredient is a problem. Quell’s label carries one caution in that direction: {warnings}. Emu oil comes from a bird, and the honey on the list may matter to anyone with a honey allergy. If you have allergies or sensitivities, show the full list to your eye doctor or pharmacist before you start.`,
      },
      { h: 'Handling a preservative-free bottle' },
      {
        p: `With no preservative in the solution, how you handle the bottle matters. The label’s own instruction is {tip}. Keep the cap on between uses, wash your hands first, and don’t share the bottle. Store it as the label directs: {storage}.`,
      },
      { h: 'Reading any preservative-free label' },
      {
        list: [
          `Find “preservative-free” on the carton, then check the inactive list to see what’s included.`,
          `Look at the active ingredients and their Purpose to see what kind of drop it is.`,
          `Read the Warnings for any allergy cautions that apply to you.`,
          `Check the Directions for how many drops and how often.`,
        ],
      },
      {
        p: `Our [Drug Facts page](/drug-facts) shows Quell’s full panel, and our guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section. If your eyes stay dry despite drops, an eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Do preservative-free eye drops have other ingredients?',
        a: `Yes. Preservative-free means no added preservative, not no ingredients. Quell lists three active ingredients and {inactiveCount} inactive ones, including sterile water, salt, a buffer and natural ingredients.`,
      },
      {
        q: 'What are the inactive ingredients in preservative-free eye drops?',
        a: `It varies by product. Quell’s inactive ingredients are: {inactives}.`,
      },
      {
        q: 'Are preservative-free eye drops just saline?',
        a: `No. Saline is salt water, while a preservative-free lubricating drop like Quell adds lubricant and emollient active ingredients and several inactive ones, which is why it looks milky rather than clear.`,
      },
      {
        q: 'Why do preservative-free eye drops need careful handling?',
        a: `With no preservative in the solution, keeping the tip clean matters. Quell’s label says not to touch the tip to any surface, and the cap should stay on between uses.`,
      },
    ],
  },
  {
    slug: 'what-does-tm-mean-on-an-eye-drop-box',
    title: 'What does ™ mean on an eye drop box?',
    description:
      'The ™ next to an eye drop name is a trademark notice about the brand name, not a claim about the drops. What it tells you, and where the real facts are.',
    category: 'label',
    addedOn: '2026-11-27',
    body: [
      {
        p: `The ™ symbol after an eye drop’s name, as in Quell™, is a trademark notice: the company is claiming the name as its brand. It says who owns the name, nothing about what’s in the bottle, how well it works, or whether anyone has reviewed it. For those facts, read the Drug Facts panel, which lists the uses, ingredients, directions and warnings.`,
      },
      { h: 'What a trademark is' },
      {
        p: `A trademark is a name, word, logo or slogan that identifies who a product comes from. It lets you pick out one brand on a shelf or a search page and know you’re getting the same maker’s product each time. The ™ symbol tells others that the company regards the mark as its own. Quell’s terms of service say that the Quell™ name, its tagline, the eye mark and the site content belong to {company}.`,
      },
      { h: '™ vs. ®' },
      {
        p: `You’ll see two symbols on packaging. ™ can be used by anyone claiming a mark, registered or not. ® is used for marks registered with the U.S. Patent and Trademark Office. Either way, the symbol is about the name and logo, not the drops. A ® doesn’t make one eye drop better than a ™ does, and a brand name with no symbol at all is no less legitimate a product.`,
      },
      { h: 'What the ™ doesn’t tell you' },
      {
        list: [
          `It doesn’t mean the product has been tested, approved or endorsed by anyone.`,
          `It doesn’t describe the ingredients or their amounts.`,
          `It doesn’t say anything about safety, strength or how long relief lasts.`,
          `It doesn’t tell you who manufactured the product, only who claims the brand.`,
        ],
      },
      {
        p: `If a seller points to a trademark symbol as proof of quality, that’s a sales line, not a fact about the product.`,
      },
      { h: 'Where the real product facts are' },
      {
        p: `Every over-the-counter eye drop carries a Drug Facts panel, and that’s where the information you need lives. On Quell’s panel:`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `Uses: {uses}.`,
          `Warnings: {warnings}.`,
          `Directions: {directions}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `You can read the full panel on our [Drug Facts page](/drug-facts), and our guide to [reading an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) explains each section in order.`,
      },
      { h: 'Brand name, product type and the rest of the front panel' },
      {
        p: `The front of an eye drop box usually carries three different kinds of text: the brand name (with its ™ or ®), a description of the product type, and the size. For Quell, the type is preservative-free lubricating eye drops, and the size is {size}. The brand name is the company’s choice; the product type and size describe what you’re buying. Our guide to [what the front of an eye drop box tells you](/guides/what-the-front-of-an-eye-drop-box-tells-you) covers the whole front panel.`,
      },
      { h: 'Who the company behind the name is' },
      {
        p: `The trademark points to a brand owner, and the box and website should tell you who that is and how to reach them. Quell is sold by {company}, {address}, and you can call {phone} ({hours}). A product with a brand name but no company name, address or phone number anywhere is worth questioning. See our guide to [“distributed by” on a drug label](/guides/what-does-distributed-by-mean-on-a-label) for how the company line works.`,
      },
      { h: 'Why brands use it on eye drops at all' },
      {
        p: `Trademarks protect buyers as much as companies. When you reorder, the name helps you find the same product rather than one with a similar-looking box. If you ever see a product using a familiar brand name with a different company listed, a label that doesn’t match, or a site you don’t recognize, our guide to [telling if eye drops are counterfeit](/guides/how-to-tell-if-eye-drops-are-counterfeit) explains what to check.`,
      },
      { h: 'Reordering by ingredients, not just the name' },
      {
        p: `Brand names sometimes cover more than one product, and boxes from different brands can look alike. When you find a drop that suits you, note its active ingredients and size as well as its name. For Quell, that’s {actives}, in a {size} bottle. Then, when you reorder or compare products, you can check the Drug Facts panel rather than relying on the name or the symbol beside it. Our guide on [comparing two eye drop labels](/guides/how-to-compare-two-eye-drop-labels) shows how.`,
      },
      { h: 'Using the drops, whatever the name' },
      {
        p: `However a product is branded, follow its label. Quell’s handling instruction reads: {tip}. And the panel lists when to stop: {stopUse} Ongoing dryness is a question for an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What does the TM symbol mean on a product?',
        a: `It’s a trademark notice. The company is claiming the name or logo as its brand. It doesn’t describe the product’s ingredients, quality or approval.`,
      },
      {
        q: 'What is the difference between TM and R on packaging?',
        a: `™ can be used for any claimed trademark, registered or not. ® is used for marks registered with the U.S. Patent and Trademark Office. Both are about the brand name, not the product inside.`,
      },
      {
        q: 'Who owns the Quell trademark?',
        a: `Quell’s terms of service say the Quell™ name, its tagline, the eye mark and the site content are owned by {company}.`,
      },
      {
        q: 'Does a trademark mean eye drops are safe?',
        a: `No. A trademark only identifies the brand owner. To judge whether a drop suits you, read its Drug Facts panel and ask your eye doctor or pharmacist.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-a-marina-or-liveaboard-boat',
    title: 'Shipping eye drops to a marina or liveaboard boat',
    description:
      'Live aboard or cruising the coast? How to ship eye drops to a marina office, what goes on the Apt, suite line, and keeping the bottle out of a hot dock box.',
    category: 'shipping',
    addedOn: '2026-11-27',
    body: [
      {
        p: `You can ship eye drops to a marina in the United States if the marina accepts packages for boaters. Ask the office first, then use the marina’s street address, put your name and boat name on the order, and add your slip or dock number on the Apt, suite line. Collect the box promptly, because dock boxes and cockpits get hot, and the label gives a storage range.`,
      },
      { h: 'Ask the marina office first' },
      {
        p: `Marinas handle mail for boaters in very different ways. Some have a staffed office that signs for packages and holds them; some have a locker or mail room; some don’t accept personal deliveries at all, especially for transient boaters. A quick call or a question at the fuel dock settles it, and it’s the only way to know how they want packages addressed.`,
      },
      {
        list: [
          `Do you accept packages for liveaboards and transient boaters?`,
          `Should the package go to the office’s street address or a separate one?`,
          `What should I put on the second address line: slip number, dock letter or boat name?`,
          `How long will you hold a package, and where is it kept?`,
          `Is the office open on the days a delivery might come?`,
        ],
      },
      { h: 'How to fill in the address at checkout' },
      {
        p: `Quell’s checkout asks for a first and last name, a street address, an optional “Apt, suite” line, city, state, ZIP and a phone number. Each order ships to one US address. For a marina, the street address is the marina’s, and the second line is where the detail that gets the box to you belongs.`,
      },
      {
        list: [
          `Name: your own name, as the marina staff know you.`,
          `Street address: the marina’s mailing or delivery address, exactly as the office gives it.`,
          `Apt, suite line: something like “Slip C-14, S/V Halcyon,” using the format the office asked for.`,
          `Phone: a number you answer on the water, in case there’s a question about the delivery.`,
        ],
      },
      {
        p: `Double-check the ZIP and spelling before you pay. Our guide to [getting the shipping address right](/guides/getting-the-address-right) covers common slips, and [what to do about a wrong shipping address](/guides/wrong-shipping-address) explains the options if one gets through.`,
      },
      { h: 'Timing a delivery when you’re cruising' },
      {
        p: `Quell doesn’t promise a delivery date, and that matters when you’re moving between harbors. Ship only to a marina where you’ll be for a while after the order, or where the office will hold the package until you arrive. If your plans depend on weather, give yourself a wide margin and order {freeBottles} bottles at a time, which ships free and means fewer deliveries to chase. Tracking comes by email, so keep an eye on it from your phone and pick the box up as soon as it shows delivered.`,
      },
      { h: 'Heat, cold and the dock box' },
      {
        p: `A bottle left in a sealed dock box in summer sun, a closed cabin or a car in the marina lot can get far hotter than the label allows, and a winter night on the water can push it below. The storage line reads: {storage}. Collect deliveries promptly and keep the bottle in the cabin, out of direct sun and away from the engine compartment or heater.`,
      },
      {
        p: `If a package sat in heat or cold for a long time, look at the solution before use. The label’s note reads: {milky}. Its Do not use line reads: {doNotUse}. If the color looks wrong, don’t use it, and call {phone}.`,
      },
      { h: 'Keeping drops comfortable on the water' },
      {
        p: `Sun, wind and glare off the water dry the eyes, and salt spray adds a sting. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions are: {directions}. Its handling rule is especially relevant with salty hands: {tip}. Rinse and dry your hands before using it. Our guides to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) and [dry eyes for sailors and boaters in winter](/guides/dry-eyes-for-sailors-and-boaters-in-winter) cover the eye side of life afloat.`,
      },
      { h: 'Outside the United States' },
      {
        p: `Quell ships only to addresses in the United States. If you’re heading to a foreign port, take enough with you before you leave. Our guide on [shipping outside the US](/guides/does-quell-ship-outside-the-us) explains why. If a package for you arrives at a US marina after you’ve sailed, ask the office to hold it or arrange its forwarding with them; an unopened bottle can still be refunded within {returnDays} days of delivery without sending it back.`,
      },
      { h: 'Cost and problems with the order' },
      {
        p: `Shipping is {shipping} per order, or free on {freeBottles} or more bottles, and checkout doesn’t require an account. If an order arrives damaged, incorrect or with a broken tamper seal, contact us within {returnDays} days and it will be replaced at no charge. Delivery estimates are estimates, and once a package is delivered to the address you gave, it’s in your hands, so a marina office that holds packages is a better choice than an unattended dock. Call {phone} ({hours}) with your order number for anything else, or [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Can I ship a package to a marina?',
        a: `Often, yes, but it depends on the marina. Ask the office whether it accepts packages for boaters, how to address them and how long it holds them before you order.`,
      },
      {
        q: 'How do I address a package to my boat slip?',
        a: `Use your own name and the marina’s street address, then put your slip number and boat name on the second address line in the format the marina office asks for.`,
      },
      {
        q: 'Can eye drops be left in a dock box?',
        a: `It’s wiser not to. A dock box in the sun can get far hotter than the label’s storage range, so collect the package promptly and keep the bottle in the cabin out of direct sun.`,
      },
      {
        q: 'Does Quell ship to boats in foreign ports?',
        a: `No. Quell ships only to addresses in the United States, so take enough with you before leaving US waters.`,
      },
    ],
  },
  {
    slug: 'returning-eye-drops-after-a-loved-one-passes-away',
    title: 'Returning eye drops after a loved one passes away',
    description:
      'Unopened bottles ordered for someone who has died can be refunded within the usual window. How to ask, what to have ready, and what to do with opened drops.',
    category: 'returns',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If someone you’ve lost had unopened bottles of Quell, those bottles can be refunded under the usual policy: within {returnDays} days of delivery, without sending them back. Call {phone} ({hours}) with the order number and explain the situation. Opened bottles can’t be refunded. There is no rush to sort everything at once, but the refund window does count from the delivery date.`,
      },
      { h: 'What the policy covers' },
      {
        p: `Quell’s terms allow a refund on any unopened bottle within {returnDays} days of delivery, and you don’t need to send it back. That applies whether the order was placed by the person who died or by a family member on their behalf. The terms note that original shipping isn’t refunded, and that opened eye drops can’t be refunded, returned or resold for health and safety reasons. In short: {returns}.`,
      },
      { h: 'Finding the order details' },
      {
        p: `Going through someone’s email and papers is hard work at a hard time. You don’t need much to make the call:`,
      },
      {
        list: [
          `The order number, which starts with Q- and appears in the confirmation and shipping emails.`,
          `The delivery date, from the shipping email or the tracking page.`,
          `How many bottles are unopened.`,
          `The name on the order and the shipping address it went to.`,
        ],
      },
      {
        p: `If you can’t find the email, our guide to [finding a past Quell order](/guides/finding-past-orders) explains where to look, and you can still call and describe what you know. If you placed the order yourself for your parent or partner, the confirmation will be in your own inbox.`,
      },
      { h: 'Where the refund goes' },
      {
        p: `A refund goes back to the card used for the order. If that card has since been closed, the bank decides where the credit lands, so mention it when you call, and ask the bank or whoever is handling the estate. Our guide to [when an eye drop refund shows up](/guides/when-will-my-eye-drop-refund-show-up) explains the timing on the bank’s side.`,
      },
      { h: 'If the bottles arrived more than 30 days ago' },
      {
        p: `The refund window is {returnDays} days from delivery, and the terms don’t describe exceptions. If the bottles arrived earlier than that, it’s still fine to call and ask; just know what the written policy says. Unopened bottles that can’t be refunded can be given to someone who uses the same drops, as long as the seal is intact and they read the label first.`,
      },
      { h: 'What to do with opened bottles' },
      {
        p: `An opened bottle shouldn’t be passed on to anyone else, even a family member, because eye drop bottles are personal and the label is clear about contamination: {tip}. Quell’s label doesn’t give disposal instructions, so ask a pharmacist about local take-back options or what your community recommends. Keep any bottles out of children’s reach in the meantime, and remember the label’s line: {swallowed}.`,
      },
      { h: 'Reminder emails and the account' },
      {
        p: `Quell has no subscription, so nothing will ship again on its own. After an order, the buyer may get one reorder reminder email. If that arrives in an inbox you’re managing, it’s a single reminder, not a charge. If the person had an account on the site, the terms say an account can be closed at any time by contacting us, and the privacy policy says non-essential account data is deleted on request; order records are kept as long as the law requires for tax and product safety reasons. Call {phone} and we’ll explain what can be removed.`,
      },
      { h: 'If you’re calling for someone else' },
      {
        p: `You may be a son or daughter, a spouse, a friend or a caregiver making this call. Say who you are and what you need; having the order number makes it simpler. Our guide to [calling about an order for someone else](/guides/calling-about-an-eye-drop-order-for-someone-else) has more on what to have ready. Hours are {hours}, and the address on file for letters is {address}.`,
      },
      { h: 'Taking care of yourself' },
      {
        p: `Grief can bring long, sleepless nights, crying and hours on the phone or at a screen sorting out accounts, all of which can leave eyes feeling dry and sore. If you use drops yourself, follow your own label. For Quell, the directions are: {directions}. If your eyes stay uncomfortable, an eye doctor can find the cause and decide what to do. And there’s no deadline on asking a question: call whenever you’re ready, or reach us through the [contact page](/about#contact).`,
      },
    ],
    faq: [
      {
        q: 'Can I return eye drops after someone dies?',
        a: `Unopened bottles of Quell can be refunded within {returnDays} days of delivery without being sent back, whoever placed the order. Call {phone} with the order number. Opened bottles can’t be refunded.`,
      },
      {
        q: 'Where does a refund go if the card holder has died?',
        a: `Back to the card used for the order. If that account has been closed, the bank decides where the credit lands, so check with the bank or the estate’s representative and mention it when you call.`,
      },
      {
        q: 'What should I do with a loved one’s opened eye drops?',
        a: `Don’t pass them on to anyone, since eye drop bottles are personal. The label doesn’t give disposal instructions, so ask a pharmacist about local take-back options, and keep the bottles out of children’s reach meanwhile.`,
      },
      {
        q: 'Will Quell keep sending eye drops after someone passes away?',
        a: `No. Quell has no subscription, so nothing ships unless someone places a new order. The buyer may receive one reorder reminder email after an order.`,
      },
    ],
  },
  {
    slug: 'lost-the-box-your-eye-drops-came-in',
    title: 'Lost the box your eye drops came in? What to do',
    description:
      'Threw out the carton with the Drug Facts? Where to read Quell’s full label again, what you lose with the box, and how to note the lot number next time.',
    category: 'label',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If you’ve lost the box your eye drops came in, you can read Quell’s full Drug Facts panel again on our Drug Facts page, which shows the same uses, directions, warnings and storage range printed on the carton. What you can’t recover online is the lot number and expiration date printed on your packaging, so check the bottle itself, and keep the next box until the bottle is finished.`,
      },
      { h: 'Why the box matters more than it looks' },
      {
        p: `An eye drop bottle is small, and the full Drug Facts panel doesn’t fit on it. The carton carries the complete label, with the uses, directions, warnings, storage line and the ingredient list, plus the codes that identify which batch you have. That’s why our guide on [keeping the box](/guides/should-you-keep-the-box-your-eye-drops-came-in) suggests holding on to it until the bottle is empty. This guide is for when it’s already gone.`,
      },
      { h: 'Where to read the label again' },
      {
        p: `Our [Drug Facts page](/drug-facts) shows Quell’s panel. The key lines are below, so you don’t have to guess any of them:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Warnings: {warnings}.`,
          `When using this product: {tip}.`,
          `Do not use: {doNotUse}.`,
          `Storage: {storage}.`,
          `Out of reach of children: {swallowed}.`,
        ],
      },
      {
        p: `The label also lists when to stop: {stopUse} Our terms say the panel printed on the product you received controls if it ever differs from the website, so if you still have any piece of the carton, it’s worth comparing.`,
      },
      { h: 'What you lose with the box' },
      {
        p: `Two things can’t be looked up online, because they belong to your specific package:`,
      },
      {
        list: [
          `The lot number, which identifies the batch your bottle came from.`,
          `The expiration date for that batch.`,
        ],
      },
      {
        p: `Look closely at the bottle label in good light; some of this information may be printed there in small type. If you can’t find it and need it, for example because you want to check a recall or report a problem, call {phone} ({hours}) with your order number and ask whether it can be traced from your order. Our guides to the [lot number](/guides/what-the-lot-number-on-eye-drops-means) and [where the expiration date is](/guides/where-is-the-expiration-date-on-eye-drops) explain what those codes mean.`,
      },
      { h: 'If you’re not sure which drops you have' },
      {
        p: `Without a box, a bottle from the back of a drawer can be hard to identify. Don’t use drops you can’t identify. Quell’s label describes the drops as follows: {milky}. The site’s note adds: {appearance} If the bottle doesn’t match that description, or you can’t tell which product it is, set it aside, and if you need help, ask a pharmacist or call us.`,
      },
      { h: 'Make a note before you recycle the next one' },
      {
        list: [
          `Take a photo of each panel of the carton on your phone, including the lot number and expiration date.`,
          `Write the expiration date on the bottle cap or label with a fine marker.`,
          `Bookmark our Drug Facts page so the full label is always a tap away.`,
          `Keep the box in the drawer or bag where you store the bottle.`,
        ],
      },
      { h: 'Showing the label to a doctor or pharmacist' },
      {
        p: `If you need to show an eye doctor or pharmacist what you’re using and the box is gone, the Drug Facts page on your phone works. They’ll want the active ingredients ({actives}) and the inactive ones ({inactives}). Our guide to [taking your eye drop label to a doctor visit](/guides/taking-your-eye-drop-label-to-a-doctor-visit) explains what else to bring.`,
      },
      { h: 'Lost the box before giving a gift?' },
      {
        p: `If you bought Quell as a gift and the carton got damaged or lost before you handed it over, the recipient will still need the label. Print the Drug Facts page or send them the link, and tell them about the egg and bird caution in the warnings. If the bottle’s seal is intact, it’s still an unopened bottle; a gift that isn’t wanted can be refunded within {returnDays} days of delivery without sending it back.`,
      },
    ],
    faq: [
      {
        q: 'Where can I read the Drug Facts if I threw away the eye drop box?',
        a: `For Quell, the full panel is on the quelldrop.com Drug Facts page, with the same uses, directions, warnings and storage range as the carton.`,
      },
      {
        q: 'How do I find the lot number if I lost the eye drop box?',
        a: `Check the bottle label closely in good light. If it isn’t there and you need it, call {phone} with your order number and ask what can be found from the order record.`,
      },
      {
        q: 'Can I still use eye drops if I lost the box?',
        a: `Yes, if you know exactly which product it is and can read its full label online. Don’t use a bottle you can’t identify, and check that the solution matches the label’s description.`,
      },
      {
        q: 'How can I keep track of my eye drop expiration date?',
        a: `Photograph the carton before recycling it, and write the expiration date on the bottle with a fine marker so it stays with the drops.`,
      },
    ],
  },
]
