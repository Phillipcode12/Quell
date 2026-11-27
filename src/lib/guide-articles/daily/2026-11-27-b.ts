import type { Guide } from '@/lib/guide-types'
export const DAILY_20261127_B: Guide[] = [
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-watauga-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals, SID USW00053909 = FORT WORTH ALLIANCE AP, TX, elev 707 ft
   *   (raw JSON: .daily-job/acis1127/USW00053909.json). Rows used, as
   *   [normal max F, precip in, normal min F]: Jan 57.4/1.94/35.9; Feb 61.6/2.23/39.6;
   *   Mar 69.2/2.87/47.5; Apr 76.5/3.98/55.1; May 84.1/4.10/64.4; Jun 92.7/4.05/72.8;
   *   Jul 96.9/2.42/76.4; Aug 96.9/2.80/76.0; Sep 89.2/3.17/67.6; Oct 78.9/4.06/56.4;
   *   Nov 67.4/2.51/45.9; Dec 58.5/2.48/38.0. Snowfall missing (M), left out.
   *   Monthly precip normals sum to 36.61 in.
   * Alliance Airport is north of Watauga; Watauga has no station of its own.
   * County (Tarrant) from src/lib/locations.generated.ts.
   */
  {
    slug: 'dry-eye-relief-watauga-tx',
    title: 'Dry eye relief in Watauga, Texas',
    description:
      'Near Watauga, NOAA’s Alliance Airport normals show July and August highs of 96.9°F. Everyday dry eye relief, the label, and when to see an eye doctor.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Watauga comes down to managing the air you spend the most time in: cooled air from late spring into fall, and heated air on winter mornings in the 30s. NOAA’s normals for nearby Fort Worth Alliance Airport put July and August highs at 96.9°F. Keep vents off your face, blink fully at screens, use a lubricating drop as labeled, and leave finding the cause to an eye doctor.`,
      },
      { h: 'Watauga’s weather, from the Alliance Airport station' },
      {
        p: `Watauga, in northeast Tarrant County, has no weather station of its own. The nearest long-record station is Fort Worth Alliance Airport, north of Watauga, at about 707 feet. NOAA’s 1991–2020 climate normals for Fort Worth Alliance Airport, as published through the National Weather Service’s NOWData, describe a long, hot summer and a short, mild winter:`,
      },
      {
        list: [
          `Normal highs of 96.9°F in both July and August, with June at 92.7°F and September at 89.2°F.`,
          `Warm summer nights: normal lows of 76.4°F in July and 76.0°F in August.`,
          `January is the coolest month, with a normal high of 57.4°F and a low of 35.9°F.`,
          `Two wet peaks. May (4.10 inches), October (4.06) and June (4.05) are the wettest months; January is the driest at 1.94 inches.`,
          `The twelve monthly precipitation normals add up to about 36.6 inches.`,
        ],
      },
      {
        p: `What those numbers mean for your eyes is simple. For four months of the year, highs sit near or above 90°F, so almost every hour is spent in cooled air. Then for a few months in winter, mornings drop into the 30s and the furnace takes over. Both are dry ways to live.`,
      },
      { h: 'Looking for dry eye help in Watauga?' },
      {
        p: `If you searched for dry eye help in Watauga, you may be hoping for a clinic. This page isn’t one, and it makes no claims about any local practice. What it can do is separate two jobs. Everyday relief is something you manage at home and at work: the air, your screen habits and a lubricating drop used as its label says. Finding the cause of dryness and deciding what to do about it belong to an eye doctor, who can look at the eye’s surface, the eyelids and the tear film in ways no drop or website can.`,
      },
      {
        p: `A short record makes that appointment more useful. Before you go, jot down:`,
      },
      {
        list: [
          `When it’s worse: first thing in the morning, mid-afternoon at a desk, or on the drive home.`,
          `Whether one eye bothers you more than the other.`,
          `Roughly how many hours a day you spend at screens.`,
          `Every drop you’ve tried, with the bottle or a photo of its label.`,
          `Whether you wear contact lenses. Quell’s label doesn’t cover them, so that’s a question for the eye doctor.`,
        ],
      },
      {
        p: `Our [self-check](/self-check) can help you put symptoms into words; it’s not a diagnosis. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
      { h: 'July and August: living between the car and the house' },
      {
        p: `In a suburb like Watauga, a summer day is often a chain of air-conditioned rooms: the house, the car, the store, the office and back again. Air conditioning cools by pulling moisture out of the air, and a vent pointed at your face speeds evaporation from the tear film between blinks. The car is usually the worst offender, because the dash vents sit a foot or two from your eyes.`,
      },
      {
        list: [
          `Aim the dash vents at your chest or the footwell instead of your face.`,
          `Turn the fan down once the cabin has cooled; the blast you need in a parked car isn’t the one you need ten minutes later.`,
          `Wear sunglasses on the drive. Low afternoon sun in the west makes you squint and blink less.`,
          `Don’t leave a bottle of drops in the car. Quell’s label says: {storage}. A parked car in a Texas summer climbs far past that.`,
        ],
      },
      { h: 'Yard work, ballfields and the backyard' },
      {
        p: `Mowing, edging and running a leaf blower throw dust and clippings into the air at face height. Close-fitting sunglasses or safety glasses keep most of it out. If grit does get into your eye, rinse it with clean water and don’t rub; anything that stays stuck, scratches or blurs your vision is for an eye doctor or urgent care, not for drops.`,
      },
      {
        p: `Evening games and practices run late in summer because the nights stay warm, with July lows near 76°F. Sitting in bleachers facing a low sun, or squinting at a scoreboard, cuts down on blinking. A hat brim and sunglasses help, and so does looking away from the field for a few slow blinks between innings or quarters.`,
      },
      { h: 'Fall’s second rainy season' },
      {
        p: `October is nearly as wet as May at the Alliance station, with 4.06 inches in a normal year. Rain outside doesn’t do much for your eyes indoors, though. October highs still average 78.9°F, so the air conditioning often keeps running through rainy weeks, and by late November the heat comes on. There may be only a short stretch in fall when the windows are open and neither system is drying the air.`,
      },
      { h: 'Winter mornings in the 30s' },
      {
        p: `Normal lows reach 38.0°F in December and 35.9°F in January. Heating cold air without adding moisture lowers its relative humidity, which is why a warm house can still leave eyes scratchy by morning. A few changes help:`,
      },
      {
        list: [
          `Run a clean humidifier in the bedroom, and change its water as the maker directs.`,
          `Close or deflect a floor or ceiling register that blows toward your bed or desk.`,
          `Keep the thermostat a little lower at night.`,
          `Switch off a ceiling fan in winter if it pushes heated air across your face.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. The directions say: {directions}. Keep the bottle clean as you use it: {tip}.`,
      },
      {
        p: `The panel also cautions: {warnings}. And it says not to use it in one case: {doNotUse}. The whole panel is on our [Drug Facts page](/drug-facts). The label doesn’t give directions for children, contact lenses, or use alongside other eye drops; ask your eye doctor or pharmacist about those.`,
      },
      { h: 'Getting Quell in Watauga' },
      {
        p: `We ship from Brentwood, Tennessee, to Watauga and to neighbors like [Keller](/eye-drops/keller-tx) and [North Richland Hills](/eye-drops/north-richland-hills-tx). Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows when the order ships; we don’t promise a delivery date, so reorder before you’re down to the last few drops. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
      },
      {
        p: `The [Watauga page](/eye-drops/watauga-tx) and the [Texas page](/eye-drops/state/texas) have local details, and our [Fort Worth guide](/guides/dry-eye-relief-fort-worth-tx) covers the city next door. You can also [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for everyday dryness. It isn’t a way to find out why your eyes keep feeling dry, and it isn’t meant to cover symptoms that need a look. The label draws the line: {stopUse} Sudden pain, light sensitivity, a change in vision, or something stuck in the eye needs prompt care rather than another bottle.`,
      },
    ],
    faq: [
      {
        q: 'Where can I find dry eye relief in Watauga, TX?',
        a: `Day to day, relief comes from keeping vent air off your face, taking blink breaks at screens and using a lubricating drop as its label directs. An eye doctor is the one to find the cause and decide what to do if dryness keeps returning.`,
      },
      {
        q: 'How hot does it get in Watauga, Texas?',
        a: `NOAA’s 1991–2020 normals for Fort Worth Alliance Airport, the nearest station, put normal highs at 96.9°F in both July and August, with July lows around 76°F.`,
      },
      {
        q: 'What is the coldest month in Watauga?',
        a: `January, going by NOAA’s normals for Fort Worth Alliance Airport: a normal high of 57.4°F and a low of 35.9°F. December is close behind, with lows near 38°F.`,
      },
      {
        q: 'Does Quell ship to Watauga, Texas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to any US address, including Watauga. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and tracking comes by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-palm-bay-fl:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals, SID USC00086761 = PALM BAY, FL, elev 27 ft
   *   (raw JSON: .daily-job/acis1127/USC00086761.json). Rows used, as
   *   [normal max F, precip in, normal min F]: Jan 72.9/2.64/49.0; Feb 75.4/2.42/51.5;
   *   Mar 78.5/3.04/54.5; Apr 82.8/2.81/60.0; May 86.6/4.37/65.4; Jun 89.9/7.62/70.7;
   *   Jul 91.3/6.58/72.6; Aug 91.8/7.11/72.8; Sep 89.2/7.95/71.5; Oct 84.9/5.60/66.5;
   *   Nov 79.0/2.95/58.5; Dec 74.6/2.46/52.3. Snowfall M, left out.
   *   Monthly precip normals sum to 55.55 in; Jun–Sep sum 29.26 in.
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers.
   * County (Brevard) from src/lib/locations.generated.ts.
   */
  {
    slug: 'dry-eye-relief-palm-bay-fl',
    title: 'Dry eye relief in Palm Bay, Florida',
    description:
      'Palm Bay gets more than half its rain from June through September, and highs stay above 72°F all winter. NOAA’s numbers and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Palm Bay is mostly about the air indoors. NOAA’s normals for the city’s own weather station show highs from 72.9°F in January to 91.8°F in August, so air conditioning runs for most of the year. Keep cold air off your face, blink fully at screens, wear sunglasses outside, use a lubricating drop as its label directs, and see an eye doctor to find the cause of dryness that keeps returning.`,
      },
      { h: 'Palm Bay’s climate, from its own station' },
      {
        p: `Palm Bay has a cooperative weather station of its own, at about 27 feet above sea level. NOAA’s 1991–2020 climate normals for the Palm Bay station describe a sharp split between a wet summer and a drier rest of the year:`,
      },
      {
        list: [
          `September is the wettest month at 7.95 inches, followed by June (7.62), August (7.11) and July (6.58).`,
          `Those four months add up to about 29.3 inches, more than half of the roughly 55.6 inches the twelve monthly normals total.`,
          `February is the driest month at 2.42 inches, with December close behind at 2.46.`,
          `August has the highest normal high, 91.8°F, and summer lows sit near 72°F.`,
          `January is the coolest month: a normal high of 72.9°F and a low of 49.0°F.`,
        ],
      },
      {
        p: `NOAA’s morning and afternoon humidity tables don’t include this station, so this page doesn’t guess at Palm Bay’s humidity. What the temperatures alone show is enough: there’s no month when most homes, cars and offices can do without cooling for long.`,
      },
      { h: 'The wet summer and the drier half-year' },
      {
        p: `From November through May, each month averages between about 2.4 and 4.4 inches of rain, a fraction of what September brings. Those are the months many people spend more time outdoors, with yard projects, walks and weekends outside. The sun doesn’t take the winter off this far south, either. Highs in the 70s with a bright sky still mean glare, squinting and less blinking.`,
      },
      {
        p: `Summer flips the routine. Afternoon storms in the wet months push people indoors at the hottest part of the day, often into rooms where the air conditioning has been running since morning.`,
      },
      { h: 'Air conditioning, nearly year-round' },
      {
        p: `Even December averages a high of 74.6°F at the Palm Bay station, so the thermostat in many homes stays on cooling well into winter. Air conditioning removes moisture as it cools, and a vent blowing straight at you speeds up how fast the tear film thins between blinks. Small changes help in every room:`,
      },
      {
        list: [
          `Point the car’s dash vents at your chest or feet, not your eyes, and lower the fan once the cabin cools.`,
          `Move a desk or recliner out of the path of a ceiling register.`,
          `Keep a bedroom ceiling fan on a low setting, or off, if you wake with scratchy eyes.`,
          `Change the system’s air filter on the schedule its maker recommends, so less dust circulates.`,
        ],
      },
      { h: 'Cool January mornings' },
      {
        p: `Normal lows reach 49.0°F in January and 51.5°F in February. That’s mild by most of the country’s standards, but it’s cool enough that some households switch on the heat for a few weeks or plug in a space heater by the couch. Heated air dries the eyes too. Keep a space heater pointed at your legs rather than your face, and don’t sit with it blowing at you through a long evening of television.`,
      },
      { h: 'Yards, lawns and open-sky glare' },
      {
        p: `Much of Palm Bay is residential neighborhoods with yards, and yard work is a year-round job here. Mowing and blowing kick up dust, pollen and clippings at eye level. Wraparound sunglasses or safety glasses keep most of that out and cut glare off pavement and water. If something gets in your eye, rinse it with clean water and don’t rub it. Anything that stays stuck, scratches or blurs your vision needs an eye doctor or urgent care.`,
      },
      {
        p: `Keep drops out of the hot car and the garage. Quell’s label says: {storage}. A truck bed, a glove box or a garage shelf in a Florida August can run well past that.`,
      },
      { h: 'Working at a screen' },
      {
        p: `Whether you work from a home office or a cooled cubicle, long stretches at a screen lower how often you blink, and air conditioning dries the tear film faster between blinks. Put the monitor slightly below eye level, look away across the room every so often, and finish each blink instead of half-closing your eyes. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has a fuller routine.`,
      },
      { h: 'What’s on Quell’s Drug Facts panel' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions are: {directions}. The panel’s caution reads: {warnings}. While using it: {tip}. Every section is on our [Drug Facts page](/drug-facts). The label doesn’t cover contact lenses, children or use with other eye drops; your eye doctor or pharmacist can help with those.`,
      },
      { h: 'Ordering Quell to Palm Bay' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Palm Bay and the rest of Brevard County, including [West Melbourne](/eye-drops/west-melbourne-fl). Check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email once it ships, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
      {
        p: `See the [Palm Bay page](/eye-drops/palm-bay-fl) and the [Florida page](/eye-drops/state/florida) for more, or read our [Melbourne guide](/guides/dry-eye-relief-melbourne-fl) for the coast just to the north.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back no matter how you set up your rooms, that’s worth an appointment. An eye doctor can find the cause and decide what to do; a drop can only help with everyday dryness. The label is specific about when to stop: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainiest month in Palm Bay, Florida?',
        a: `September, at 7.95 inches in NOAA’s 1991–2020 normals for the Palm Bay station. June, August and July follow, and together those four months bring more than half the year’s rain.`,
      },
      {
        q: 'How cold does Palm Bay get in winter?',
        a: `Not very. NOAA’s normals for the Palm Bay station put January’s normal low at 49.0°F and its normal high at 72.9°F, the coolest month of the year.`,
      },
      {
        q: 'Why are my eyes dry in Palm Bay when it rains so much?',
        a: `Most of the rain falls from June through September, and indoors the air conditioning runs most of the year, removing moisture as it cools. A vent aimed at your face dries the tear film whatever the weather outside.`,
      },
      {
        q: 'Does Quell ship to Palm Bay, Florida?',
        a: `Yes. We ship from Brentwood, Tennessee, to any US address, including Palm Bay. Orders of {freeBottles} or more bottles ship free, and a tracking email follows when it ships.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-fremont-ca:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals, SID USC00043244 = FREMONT, CA, elev 38 ft
   *   (raw JSON: .daily-job/acis1127/USC00043244.json). Rows used, as
   *   [normal max F, precip in, normal min F]: Jan 58.6/3.00/42.6; Feb 61.4/3.17/44.4;
   *   Mar 65.1/2.52/46.4; Apr 67.7/1.22/48.3; May 71.1/0.50/51.9; Jun 75.3/0.16/54.7;
   *   Jul 77.9/0.00/56.8; Aug 78.2/0.02/57.1; Sep 78.3/0.10/56.0; Oct 73.3/0.69/52.0;
   *   Nov 64.6/1.59/46.2; Dec 58.4/2.97/42.5. Snowfall 0.0 at a California
   *   station: left out per brief. Monthly precip normals sum to 15.94 in;
   *   Jun–Sep sum 0.28 in; Nov–Mar sum 13.25 in.
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers.
   */
  {
    slug: 'dry-eye-relief-fremont-ca',
    title: 'Dry eye relief in Fremont, California',
    description:
      'Fremont’s station records almost no rain from June to September, and September is its warmest month. NOAA’s normals and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Fremont starts with the long dry season. NOAA’s normals for the Fremont station show barely a quarter inch of rain from June through September combined, and September, not July, is the warmest month at 78.3°F. Keep car and office vents off your face, blink fully at screens, wear sunglasses outdoors, use a lubricating drop as labeled, and let an eye doctor find the cause if dryness keeps returning.`,
      },
      { h: 'Fremont’s numbers, from the city’s own station' },
      {
        p: `Fremont has its own cooperative weather station, at about 38 feet above sea level near the southern end of the bay. NOAA’s 1991–2020 climate normals for the Fremont station show a place with mild temperatures and a very uneven rain calendar:`,
      },
      {
        list: [
          `July’s normal precipitation is 0.00 inches, August’s 0.02 and September’s 0.10.`,
          `June through September together add up to about 0.28 inches.`,
          `February is the wettest month at 3.17 inches, with January at 3.00 and December at 2.97.`,
          `The twelve monthly normals total about 15.9 inches, and November through March supplies more than 13 of them.`,
          `Highs peak in late summer: 77.9°F in July, 78.2°F in August and 78.3°F in September.`,
          `December and January are the coolest months, with highs near 58°F and lows near 42°F.`,
        ],
      },
      { h: 'A dry season that runs half the year' },
      {
        p: `From May through October, every month at the Fremont station averages under an inch of rain. Ground, lawns and hillsides dry out, and a breeze lifts dust that a wet winter keeps down. Dusty, rainless air outside isn’t automatically dry air for the tear film, and NOAA’s humidity tables don’t cover this station, so this page doesn’t put a number on it. What you can control is how much of that dust and moving air reaches your eyes.`,
      },
      {
        list: [
          `Wraparound sunglasses on walks, trail runs and bike rides block wind and dust together.`,
          `A hat brim cuts the glare that makes you squint and blink less.`,
          `Rinse grit out with clean water rather than rubbing. Something that stays stuck or scratches is for an eye doctor or urgent care.`,
        ],
      },
      { h: 'Why September deserves attention' },
      {
        p: `Many people expect July to be the hardest month, but September edges it out at the Fremont station on both counts that matter here: the highest normal high of the year and almost no rain. It’s also when school and work schedules fill back up after summer. Longer days at a desk, more screen time and cars and offices still cooling for the afternoon can make late summer the stretch when eyes feel scratchiest. Plan your screen breaks around it rather than waiting for October.`,
      },
      { h: 'Labs, workshops and long screen shifts' },
      {
        p: `Plenty of jobs in and around the southern bay keep people at monitors, lab benches or assembly stations for hours. Close, careful work slows blinking, and the filtered, ventilated air of a lab or clean room can move steadily across your face. Workplace eye protection comes first wherever it’s required. Within that:`,
      },
      {
        list: [
          `Set monitors a little below eye level, so your lids cover more of each eye.`,
          `Every so often, look across the room and take a few slow, complete blinks.`,
          `Ask whether a vent or fan blowing at your station can be redirected.`,
          `Wash your hands before using a drop, especially after handling materials at work.`,
        ],
      },
      {
        p: `[Eye drops for computer users](/guides/eye-drops-for-computer-users) covers the screen side in more depth.`,
      },
      { h: 'The rainy months, from the inside' },
      {
        p: `December lows average 42.5°F and January’s 42.6°F. That’s mild compared with much of the country, but it’s cool enough that furnaces and heat pumps run through the evening. Warming cool air without adding moisture lowers its relative humidity, so a heated living room can feel drier on the eyes during a rainy January than an open window did in August.`,
      },
      {
        list: [
          `Run a clean humidifier in the bedroom on heating nights.`,
          `Turn the thermostat down a little before bed.`,
          `Keep a space heater aimed at your feet, not your face.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more.`,
      },
      { h: 'How Quell’s label says to use it' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions say: {directions}. Its caution reads: {warnings}. For storage: {storage}. A car parked in the sun on a September afternoon can exceed that range, so carry the bottle with you. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `The label doesn’t give directions for children, contact lenses or using it alongside other eye drops. Your eye doctor or pharmacist is the right person to ask.`,
      },
      { h: 'Ordering Quell to Fremont' },
      {
        p: `We ship from Brentwood, Tennessee, to Fremont and neighboring cities such as [Newark](/eye-drops/newark-ca) and [Union City](/eye-drops/union-city-ca). Checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get a tracking email when the order ships; we don’t promise a delivery date. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back.`,
      },
      {
        p: `More is on the [Fremont page](/eye-drops/fremont-ca) and the [California page](/eye-drops/state/california). Our [Hayward guide](/guides/dry-eye-relief-hayward-ca) looks at the shoreline just to the north.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop helps with everyday dryness; it doesn’t tell you why your eyes keep drying out. An eye doctor can examine the eye and find the cause. The label lists the signs that mean stopping: {stopUse} Pain, light sensitivity or blurred vision that doesn’t clear with blinking shouldn’t wait for the next appointment slot. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list.`,
      },
    ],
    faq: [
      {
        q: 'Does it ever rain in Fremont in the summer?',
        a: `Very little. NOAA’s 1991–2020 normals for the Fremont station show 0.00 inches in July, 0.02 in August and 0.10 in September, about 0.28 inches from June through September combined.`,
      },
      {
        q: 'What is the hottest month in Fremont, California?',
        a: `September, by a hair. The Fremont station’s normal high is 78.3°F in September, 78.2°F in August and 77.9°F in July.`,
      },
      {
        q: 'What is the wettest month in Fremont?',
        a: `February, at 3.17 inches in NOAA’s normals for the Fremont station. January and December are close behind, and November through March brings most of the year’s rain.`,
      },
      {
        q: 'Does Quell ship to Fremont, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, Fremont included. Shipping is {shipping}, or free on {freeBottles} or more bottles, with tracking by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-27 for dry-eye-relief-cary-nc:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals, SID USC00311535 = CARY, NC, elev 390 ft
   *   (raw JSON: .daily-job/acis1127/USC00311535.json). Rows used, as
   *   [normal max F, precip in, normal min F]: Jan 50.2/3.54/31.2; Feb 54.0/2.90/32.6;
   *   Mar 61.4/4.04/38.5; Apr 71.1/3.73/46.8; May 78.1/3.74/56.3; Jun 84.9/4.59/64.6;
   *   Jul 88.2/5.31/69.0; Aug 86.0/4.81/67.9; Sep 80.3/5.57/61.5; Oct 71.1/3.54/49.7;
   *   Nov 61.5/3.50/39.2; Dec 53.3/3.53/34.1. Snowfall M, left out.
   *   Monthly precip normals sum to 48.80 in.
   * Station not in relhum23.txt or wndspd23.txt: no humidity or wind numbers.
   */
  {
    slug: 'dry-eye-relief-cary-nc',
    title: 'Dry eye relief in Cary, North Carolina',
    description:
      'Cary’s January mornings average 31°F and its summers reach 88°F, so heat and A/C take turns drying the air. NOAA’s numbers and daily dry eye relief.',
    category: 'local',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Dry eye relief in Cary means planning for two kinds of indoor air: furnace heat on winter mornings that dip to about 31°F, and air conditioning through summers with highs near 88°F, according to NOAA’s normals for the Cary station. Keep vents off your face, take blink breaks at screens, use a lubricating drop as its label directs, and see an eye doctor to find the cause of dryness that persists.`,
      },
      { h: 'Cary’s climate, from its own weather station' },
      {
        p: `Cary has a cooperative weather station of its own, at about 390 feet. NOAA’s 1991–2020 climate normals for the Cary station describe real seasons and rain spread through the whole year:`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 50.2°F and a low of 31.2°F. February’s low is 32.6°F.`,
          `July is the warmest, with a normal high of 88.2°F and a low of 69.0°F.`,
          `September is the wettest month at 5.57 inches, followed by July at 5.31.`,
          `February is the driest at 2.90 inches, and no month averages less than that.`,
          `The twelve monthly precipitation normals add up to about 48.8 inches.`,
        ],
      },
      { h: 'No dry season outside, plenty of dry air inside' },
      {
        p: `Every month at the Cary station averages between about 2.9 and 5.6 inches of rain, so there’s no long rainless stretch like the ones western cities get. That doesn’t mean Cary is easy on the eyes. The air most people breathe for most of the day is indoor air, and in Cary it’s heated from roughly November into March and cooled from late spring into fall. Both remove moisture from the air in a room, and both blow it around through vents.`,
      },
      {
        p: `The fix is the same in either season: keep the moving air off your face and give your eyes regular breaks from staring.`,
      },
      { h: 'Freezing mornings and the furnace' },
      {
        p: `Normal lows sit at or below freezing in January and February and reach 34.1°F in December. Heating that cold air without adding moisture drops its relative humidity, which is why eyes can feel gritty on waking in a warm house. Some practical steps:`,
      },
      {
        list: [
          `Use a clean humidifier in the bedroom during heating season, refilled as its maker directs.`,
          `Don’t sleep with a heat register or a heat pump’s air handler blowing toward your pillow.`,
          `Set the thermostat a few degrees lower at bedtime.`,
          `Warm the car up before you leave, then turn the defroster fan down and aim the dash vents away from your eyes.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers more of the house.`,
      },
      { h: 'Working from a home office' },
      {
        p: `A home office often gets less attention than a workplace desk: a laptop on the kitchen table, a chair under the ceiling vent, a window that throws glare across the screen at certain hours. Looking at a screen for long stretches lowers how often you blink, and dry indoor air thins the tear film faster between blinks.`,
      },
      {
        list: [
          `Put the screen slightly below eye level; raising the laptop and adding a keyboard helps.`,
          `Turn the desk so a window is beside you rather than behind the screen or behind you.`,
          `Get up between calls and look out a window for a minute.`,
          `Keep the desk out of the stream from a floor or ceiling vent.`,
        ],
      },
      {
        p: `[Eye drops for computer users](/guides/eye-drops-for-computer-users) has a full routine for screen days.`,
      },
      { h: 'Summer evenings outside' },
      {
        p: `July lows average 69.0°F, so summer evenings stay warm enough for games, practices and the neighborhood pool. Bright sun low in the sky makes people squint, which cuts blinking. Sunglasses and a hat brim help. Pool water can sting; if it does, rinse with clean tap water and give it time. Stinging that doesn’t settle, or blurred vision afterward, is for an eye doctor.`,
      },
      {
        p: `After a day outside, the drive home and the house are both air-conditioned again, so keep the dash vents low and away from your face.`,
      },
      { h: 'Leaves, mowing and yard days' },
      {
        p: `Fall leaf cleanup and spring mowing put dust, pollen and debris at face height, especially with a leaf blower. Safety glasses or close-fitting sunglasses keep most of it out. If something gets in your eye, rinse it with clean water and don’t rub. Anything still stuck, scratching or blurring your vision needs an eye doctor or urgent care, not drops.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. The directions are: {directions}. Keep the dropper clean: {tip}. The panel’s caution: {warnings}. Store it as the panel says: {storage}. That matters in a car on a July afternoon and in a cold garage in January alike. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `The label doesn’t give directions for children, contact lenses or use with other eye drops. Ask your eye doctor or pharmacist before combining it with anything else.`,
      },
      { h: 'Ordering Quell to Cary' },
      {
        p: `We ship from Brentwood, Tennessee, to Cary and nearby towns like [Apex](/eye-drops/apex-nc) and [Morrisville](/eye-drops/morrisville-nc). Checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get a tracking email when it ships; there’s no promised delivery date, so reorder before you run out. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t need to send them back.`,
      },
      {
        p: `The [Cary page](/eye-drops/cary-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have more local details. Our [Raleigh guide](/guides/dry-eye-relief-raleigh-nc) uses the airport station shared by the wider Triangle.`,
      },
      { h: 'When to see an eye doctor in Cary' },
      {
        p: `Searching for local dry eye help usually means the dryness has been around a while. A drop is for everyday relief; finding the cause and deciding what to do belong to an eye doctor. The label sets out when to stop: {stopUse} Pain, sensitivity to light, or a change in how you see is a reason to call promptly. Our [self-check](/self-check) can help you describe your symptoms, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Cary, NC get in winter?',
        a: `NOAA’s 1991–2020 normals for the Cary station put January’s normal low at 31.2°F and its high at 50.2°F. February’s normal low is 32.6°F and December’s is 34.1°F.`,
      },
      {
        q: 'What is the wettest month in Cary, North Carolina?',
        a: `September, at 5.57 inches in NOAA’s normals for the Cary station, with July next at 5.31 inches. February is the driest month at 2.90 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Cary if it rains every month?',
        a: `Rain falls outside; most of the day is spent in heated or air-conditioned rooms, and both remove moisture from indoor air. Vents blowing toward your face speed evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Cary, NC?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Cary. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and tracking arrives by email.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-beekeepers',
    title: 'Dry eyes for beekeepers',
    description:
      'Sun through a veil, smoker smoke, close frame inspections and hot suits all wear on a beekeeper’s eyes. What helps in the bee yard, and when to see a doctor.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Beekeepers’ eyes dry out from a mix of things: bright sun and glare through the veil, smoke drifting back from the smoker, wind across an open bee yard, and long minutes staring at frames without blinking. Work with the wind at your back, take blink breaks between hives, use any eye drop only after the suit is off and your hands are clean, and get a sting near the eye seen by a doctor.`,
      },
      { h: 'Why beekeeping is hard on the eyes' },
      {
        p: `An inspection asks a lot of your eyes. You’re looking for eggs, larvae and capped cells on a frame held at arm’s length, often in full sun, and close, careful looking is exactly the kind of work that slows blinking. Meanwhile the air around you is moving: a breeze across the yard, smoke from the smoker and the heat rising off your own suit. Blinking spreads the tear film across the eye, and every stretch without a blink gives it more time to thin out.`,
      },
      {
        p: `Add the veil. Mesh in front of your face doesn’t block much light, so on a bright day you’re squinting through it, and squinting is another way of blinking less. A veil also keeps your hands away from your face for the length of an inspection, which is good for the bees and frustrating when an eye starts to itch or feel gritty.`,
      },
      { h: 'Smoke from the smoker' },
      {
        p: `Smoke calms the colony, but it doesn’t do your eyes any favors. It stings and makes eyes water, and when the wind shifts it can blow straight back through the veil. A few habits keep more of it away from your face:`,
      },
      {
        list: [
          `Stand so the breeze carries smoke from you toward the hive entrance, not the other way around.`,
          `Use short puffs, and hold the smoker low and away from your face.`,
          `Set the smoker down downwind of where you’re standing between puffs.`,
          `Use fuel that burns cool and steady, so you need fewer puffs.`,
        ],
      },
      {
        p: `If smoke does get in your eyes, step away from the hive, close them briefly and let them water. Once you’re out of the suit with clean hands, rinsing with clean water can help. Stinging, blurring or pain that doesn’t settle after a little while is for a doctor.`,
      },
      { h: 'A sting near the eye is for a doctor' },
      {
        p: `A sting on the eyelid, the brow or anywhere close to the eye is not a job for eye drops. Leave the yard, get the veil off once you’re clear of the bees, and get medical care promptly. Swelling around the eye can make it hard to see what’s going on, and only a doctor can check the eye properly. If you have any trouble breathing, swelling of the face or throat, or feel faint after a sting, call 911.`,
      },
      {
        p: `Bees that get inside a veil tend to head for the face. A veil that seals well at the neck and a suit zipped all the way are the first protection for your eyes, before anything else on this page.`,
      },
      { h: 'Sun, glare and the bee yard' },
      {
        p: `Many beekeepers inspect on warm, sunny middle-of-the-day hours, when foragers are out and the colony is calmer. That’s also when the sun is highest and glare off pale hive bodies and frames is strongest. Some ways to ease it:`,
      },
      {
        list: [
          `Wear a veil with a brim that shades your eyes, and a darker mesh if your veil style offers one.`,
          `Position yourself so the sun is behind you or to one side while you hold up a frame.`,
          `Between hives, look off into the distance or into shade and take several slow, full blinks.`,
          `Keep your inspection list short on very hot, windy days, and come back later for the rest.`,
        ],
      },
      { h: 'Heat inside the suit' },
      {
        p: `A full suit in summer is hot, and sweat runs from your forehead into your eyes with no way to wipe it until you’re done. A sweatband or a cap under the veil catches most of it. If sweat stings your eyes, finish the hive you’re on, walk away from the yard and take the veil off before you touch your face. Pat the area dry with a clean towel rather than rubbing.`,
      },
      { h: 'Extracting honey indoors' },
      {
        p: `Harvest day moves the work inside: uncapping, spinning frames and bottling, often in a warm garage or kitchen with fans running to keep the room bearable. Fans blowing across your face dry the eyes, and hours of focused work at the uncapping tank slow blinking just like an inspection does. Aim fans at your body rather than your face, and stop now and then to look across the room. Honey, wax and propolis on your hands are another reason to wash well before touching anywhere near your eyes.`,
      },
      { h: 'Using eye drops around the bees' },
      {
        p: `Never lift a veil in the bee yard to put in a drop. Wait until you’re well away from the hives, out of the suit, and your hands are washed. Quell’s directions say: {directions}. And as you use it: {tip}. A drop applied after the inspection, rather than during it, is the only practical option anyway.`,
      },
      {
        p: `Don’t leave the bottle in the truck while you work the yard. The label says: {storage}. A truck cab or a toolbox in summer sun can get far hotter than that. A pocket in the bag you keep in the shade is better.`,
      },
      {
        p: `Beekeepers sometimes ask about one of Quell’s inactive ingredients. The full list is {inactives}. If you have an allergy to any of them, or questions about honey allergies in particular, our page on [honey allergy and manuka honey](/guides/honey-allergy-and-manuka-honey-eye-drops) covers what the label does and doesn’t say. The panel’s own caution reads: {warnings}.`,
      },
      { h: 'What the label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses are: {uses}. It isn’t a rinse for smoke, a remedy for stings or anything else that gets into the eye. The label doesn’t give directions for children, contact lenses or using it with other eye drops; an eye doctor or pharmacist can help with those. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Persistent dryness is worth an appointment. An eye doctor can find the cause and decide what to do. The label lists when to stop using a drop: {stopUse} Anything that gets into the eye and stays, a scratch, a sting, or a change in vision needs care first. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list, and our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) helps on blustery fall and winter hive checks.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I work my bees?',
        a: `Inspecting frames means close, focused looking that slows blinking, usually in bright sun with a breeze and smoke drifting around the veil. All of that speeds evaporation from the tear film between blinks.`,
      },
      {
        q: 'Can I put in eye drops while wearing a bee veil?',
        a: `Not in the bee yard. Walk well away from the hives, take off the veil and wash your hands first, then use the drop as its label directs. Lifting a veil near the colony invites stings to the face.`,
      },
      {
        q: 'What should I do if a bee stings me near the eye?',
        a: `Leave the bee yard, remove your veil once you’re clear of the bees, and get medical care promptly; a sting close to the eye is for a doctor, not drops. Call 911 for trouble breathing, throat swelling or feeling faint.`,
      },
      {
        q: 'Does smoke from a bee smoker irritate your eyes?',
        a: `It can. Smoke stings and makes eyes water, especially when the wind blows it back through the veil. Keep the breeze at your back, use short puffs and set the smoker down downwind of you.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-military-service-members-in-the-field',
    title: 'Dry eyes for service members in the field',
    description:
      'Wind, sand, dust, rotor wash and long watches dry out eyes in the field. Practical habits, carrying drops in your kit, and when to see a medic or eye doctor.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `In the field, eyes dry out from wind, blowing sand and dust, rotor wash, vehicle convoys and long hours of watching without blinking much. Wear the eye protection your unit issues, take slow, full blinks whenever the mission allows, keep your hands clean before touching your eyes, and see a medic or corpsman for anything stuck in the eye, pain, or blurred vision. A lubricating drop is for everyday dryness only.`,
      },
      { h: 'What field conditions do to the tear film' },
      {
        p: `The tear film is a thin layer of oil, water and mucus that every blink spreads across the eye. Moving air pulls the water layer away faster, and dry, dusty air does it faster still. Field work stacks those conditions: open terrain with steady wind, dust kicked up by boots and vehicles, cold air at altitude or at night, and hot air in the desert. Long periods of focus, whether on a sector, a screen or a map, slow blinking at the same time.`,
      },
      {
        p: `The result is the familiar end-of-day feeling of gritty, scratchy eyes, or eyes that water hard every time the wind picks up. Neither is something to push through for weeks on end; the last section of this page covers when to get it looked at.`,
      },
      { h: 'Wind, sand and rotor wash' },
      {
        p: `Nothing dries eyes like air moving fast, and rotor wash from a helicopter or the blast behind a vehicle is air moving very fast, full of grit. Eye protection your unit issues and requires is the first line, and the rules for when and how you wear it belong to your unit, not to this page. Within those rules, a few habits help:`,
      },
      {
        list: [
          `Turn your face away from rotor wash and blowing sand when you can, and keep your eye protection seated, not pushed up on a helmet.`,
          `Keep lenses clean, so you aren’t tempted to pull them off to see.`,
          `Blink deliberately after a gust passes, a few slow, complete blinks rather than rapid ones.`,
          `Shield a vehicle’s vents or open windows from your face when you’re riding for long stretches.`,
        ],
      },
      { h: 'Something in your eye' },
      {
        p: `Sand, dust, metal fragments, splinters and chemicals in the eye are not a dryness problem. Don’t rub. Flush with clean water if you can, and get to a medic, corpsman or other medical provider for anything that doesn’t clear quickly, anything that hit the eye with force, any splash of fuel or chemicals, or any change in vision. A lubricating drop isn’t a rinse and won’t remove debris.`,
      },
      { h: 'Long watches and staring at a sector' },
      {
        p: `Guard duty, observation posts and long shifts on a screen all ask you to keep your eyes open and moving across a field of view for hours. Concentration lowers blink rate. You can’t always look away, but you can work blinks into a scan pattern: finish a sweep, then blink fully twice before the next one. Shifting focus between near and far points during a scan gives your eyes something to do other than stare.`,
      },
      {
        p: `Screens in a command post or vehicle add their own glare at night. Dim them as far as your procedures allow, and keep them a little below eye level when you can set them up yourself.`,
      },
      { h: 'Heat, cold and the desert’s dry air' },
      {
        p: `Hot, dry climates and cold ones are both hard on the tear film. In the heat, sweat running into the eyes stings and tempts you to wipe them with dirty hands. In the cold, wind and dry air make eyes water and then dry out. Some practical points:`,
      },
      {
        list: [
          `A sweatband or the right headgear catches sweat before it reaches your eyes.`,
          `Pat sweat away from around the eyes with a clean cloth rather than a glove.`,
          `In cold wind, wraparound protection does more than flat lenses.`,
          `Sleep with your face out of the direct stream from a heater or vent when you have a choice of where to lie down.`,
        ],
      },
      { h: 'Hands, gloves and hygiene' },
      {
        p: `Field hygiene is hard, and eyes are where dirty hands do the most damage. Gloves carry fuel, oil, dust and gun-cleaning solvents. Before touching your eyes or using any drop, wash your hands or use what your kit allows to clean them. Keep a dropper tip clean too: Quell’s label says {tip}. A bottle tip that touches a dusty sleeve, a glove or the edge of an eyelid is no longer clean.`,
      },
      { h: 'Carrying eye drops in your kit' },
      {
        p: `Personal items you can carry, including over-the-counter medicines, are a matter for your unit and your medical staff; check with them before adding anything to your kit. If drops are allowed, a few practical points apply:`,
      },
      {
        list: [
          `The label says: {storage}. A bottle carried in a chest or inner pocket stays closer to that range than one left in a vehicle or a pack in direct sun or freezing cold.`,
          `Keep it in a sealed bag so the tip stays clean.`,
          `Use it during a break, not while you’re moving or on watch, so your vision has a moment to settle.`,
          `Tell your medic what you’re using, especially if you’re also using any prescribed eye drops. Quell’s label doesn’t give directions for use alongside other drops.`,
        ],
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. Directions: {directions}. The panel’s caution reads: {warnings}. The label doesn’t cover contact lenses, children or use with other drops. Read every section on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell before or after a field rotation' },
      {
        p: `We ship only to addresses in the United States, from Brentwood, Tennessee. Orders are placed as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. There’s no promised delivery date, so order well before you leave or have it sent to a home address you’ll be back at. For any question about where an order can be sent, [contact us](/about#contact) or call {phone} ({hours}) before you place it. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back.`,
      },
      { h: 'When to see a medic or eye doctor' },
      {
        p: `Dryness that keeps coming back between deployments or field exercises is worth a visit to your medical provider or an eye doctor, who can find the cause and decide what to do. The label lists the signs to stop: {stopUse} Any injury, debris that won’t flush, light sensitivity or vision changes should be seen right away. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has a wider list.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry in the field?',
        a: `Wind, blowing sand and dust, rotor wash, and hot or cold dry air all speed up how fast the tear film evaporates. Long watches and screen work slow blinking at the same time, so the eye’s surface dries between blinks.`,
      },
      {
        q: 'What should I do if sand gets in my eye during training?',
        a: `Don’t rub it. Flush with clean water if you can, and see a medic or corpsman if it doesn’t clear quickly, if it hurts, or if your vision changes. Eye drops aren’t a way to remove sand.`,
      },
      {
        q: 'Can I carry eye drops in my ruck?',
        a: `Check with your unit and medical staff about what personal medicines you may carry. If drops are allowed, keep them in an inner pocket in a sealed bag, since Quell’s label says: {storage}.`,
      },
      {
        q: 'How can I keep my eyes from drying out on guard duty?',
        a: `Build blinks into your scan: finish a sweep, then blink fully twice. Shift focus between near and far points, keep your eye protection on in wind, and use any drop during a break rather than while on watch.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-valet-attendants',
    title: 'Dry eyes for valet attendants',
    description:
      'Cold curbside wind, idling exhaust, headlights at night and hot car heaters wear on a valet’s eyes. What helps on a long shift at the stand.',
    category: 'using',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Valet attendants get dry eyes from a shift full of fast changes: cold wind at the curb, exhaust from idling cars, headlights in your face after dark, and a blast of heater air every time you climb into a guest’s car. Turn the car’s fan down for the short drive, keep your back to the wind at the stand, blink fully between cars, and keep a drop in your pocket, not the key box.`,
      },
      { h: 'Why valet work dries out your eyes' },
      {
        p: `A valet shift is a loop. You stand at the curb in whatever the weather is doing, jog or walk briskly to a car, drive it a short distance with its owner’s climate settings, park, run back, and do it again, sometimes dozens of times in a night. Each stage dries the tear film in a different way: moving outdoor air at the stand, fast air across your face as you run, and heater or air-conditioning vents set for someone else inside the car.`,
      },
      {
        p: `Watching for arrivals adds to it. Scanning the street for turn signals and headlights is steady, focused looking, and focus lowers how often you blink.`,
      },
      { h: 'Climbing into a car with the heat on high' },
      {
        p: `In winter, a guest who just drove across town often leaves the heater on full with the vents aimed at the driver’s face. You climb in and get that blast from a foot away. On a short drive to the lot or garage, it’s fine to turn the fan down or aim the vents away from your face; just put the settings back exactly as you found them if your stand’s rules call for that. The same goes for summer air conditioning on full.`,
      },
      {
        list: [
          `Tilt the center vents down toward the console before you pull away.`,
          `Lower the fan speed rather than turning the system off.`,
          `Crack the window only if it’s allowed and the weather permits.`,
          `Note the original settings so you can restore them when you bring the car back.`,
        ],
      },
      { h: 'Standing at the curb in winter wind' },
      {
        p: `Hotel entrances, restaurants and event venues often sit right on a street where wind funnels between buildings. Cold, moving air dries the eyes and often makes them water at the same time. Where you stand makes a difference:`,
      },
      {
        list: [
          `Stand with your back or side to the wind, close to the building or a column that blocks it.`,
          `Wear wraparound glasses on bright winter days if your uniform allows; they cut both glare and wind.`,
          `A cap with a brim, where permitted, shades your eyes from low sun and rain.`,
          `Don’t stand directly under a heater above the entrance for long; it trades a cold wind for a hot, dry one.`,
        ],
      },
      {
        p: `Our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more on winter air.`,
      },
      { h: 'Exhaust from idling cars' },
      {
        p: `During a rush, several cars may idle at the curb while you work through the line. Exhaust stings and makes eyes water, and it collects in covered drop-off areas and parking structures. Stand to the side of tailpipes rather than behind them, ask drivers to switch off once you have the keys if your stand’s procedures allow it, and step out of a covered area for fresher air between runs when the line clears. Eyes that burn, blur or stay irritated after a shift need an eye doctor.`,
      },
      { h: 'Headlights at night' },
      {
        p: `After dark, arriving cars pull up with headlights pointed straight at the stand. Bright light in your eyes makes you squint and stare, and both reduce blinking. Look slightly to the side of oncoming headlights, toward the curb line, until the car stops. Then blink a few times before you walk over. Driving guests’ cars at night has the same challenge from other traffic, plus a dashboard you don’t know. Take a second before pulling away to dim a bright display if you can find the control easily.`,
      },
      { h: 'Heated lobbies and back again' },
      {
        p: `Many valets run keys into a heated lobby or wait inside between cars on the coldest nights. Going from freezing wind to warm, dry indoor air and back again, over and over, keeps the eyes adjusting. You can’t avoid the swing, but you can avoid standing right next to the lobby’s heat vents or the warm air that rushes out when the doors open.`,
      },
      { h: 'Keys, hands and drops on a shift' },
      {
        p: `Valets handle keys, door handles and steering wheels from dozens of cars a night. Wash your hands, or at least use the hand sanitizer at the stand and let it dry fully, before you touch your eyes. A few points about carrying drops:`,
      },
      {
        list: [
          `Keep the bottle in your own jacket or pants pocket, never in the key box or a guest’s car.`,
          `Quell’s label says: {storage}. A podium drawer outside on a freezing night, or a car in summer sun, can fall outside that range.`,
          `Use a drop on a break, out of the wind, not right before you drive a guest’s car. Give your vision a moment to settle.`,
          `As you use it: {tip}.`,
        ],
      },
      { h: 'What the label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions are: {directions}. The panel cautions: {warnings}. The label doesn’t give directions for contact lenses, children or use with other drops; ask your eye doctor or pharmacist. See every section on our [Drug Facts page](/drug-facts). For more on parking work generally, our guide for [parking attendants](/guides/dry-eyes-for-parking-attendants) covers booths and open lots.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that follows you home after every shift, or keeps getting worse through the winter, is worth an eye doctor’s look. They can find the cause and decide what to do. The label lists when to stop: {stopUse} Grit or exhaust soot that won’t rinse out, pain, or blurred vision needs care promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working valet?',
        a: `Valets move between cold or hot outdoor air, fast walks and car interiors with heaters or air conditioning aimed at the driver’s face. Each one speeds evaporation from the tear film, and scanning for arrivals slows blinking.`,
      },
      {
        q: 'Can I turn down the heater when I valet a car?',
        a: `On a short drive, lowering the fan or aiming the vents away from your face is reasonable if your stand’s rules allow it. Note the original settings and put them back before you return the car.`,
      },
      {
        q: 'How do valets deal with headlight glare at night?',
        a: `Look slightly to the side of oncoming headlights, toward the curb, until the car stops, then blink a few times before walking over. Squinting into the light makes you stare and blink less.`,
      },
      {
        q: 'Where should a valet keep eye drops during a shift?',
        a: `In your own pocket, not the key box or a guest’s car. Keep it close to your body so it stays near the label’s storage range, and use it on a break before you drive again.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-chef',
    title: 'Christmas gifts for a chef',
    description:
      'Gift ideas for a chef who works long shifts in a hot, smoky kitchen: gear for the line, comfort for days off, and what to know before giving eye drops.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Good Christmas gifts for a chef make long shifts on a hot line a little easier: clear safety glasses for the grill and fryer, cushioned insoles, quality kitchen towels, a sweatband for under the cap, and something restful for their rare days off. If they’ve mentioned dry or scratchy eyes after service, a lubricating eye drop can fit in, as long as you check its label first.`,
      },
      { h: 'What a professional kitchen does to a chef’s eyes' },
      {
        p: `A restaurant line is a tough place for eyes. Burners, grills and ovens throw radiant heat at face height, hood fans pull air past the cook all night, and smoke and steam roll off the flat-top. Plating and ticket reading mean close, focused looking, which cuts down on blinking. By the end of a double, plenty of chefs feel it: gritty, stinging or watery eyes and a strong urge to rub them with hands that just handled onions.`,
      },
      {
        p: `A useful gift takes that into account without turning the present into a lecture. Most of the ideas below help with the job generally and happen to be kind to the eyes too. For the habits that help during a shift, see our guide on [dry eyes for line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs).`,
      },
      { h: 'Gifts for the line' },
      {
        list: [
          `Clear, anti-fog safety glasses. Splatter from a fryer or a hot pan is a real hazard, and a comfortable pair that sits well under a cap is more likely to get worn.`,
          `A stack of good kitchen towels. Chefs go through them fast, and a clean one for wiping sweat away from the eyes beats a sleeve.`,
          `Sweatbands or moisture-wicking skull caps, to stop sweat running into the eyes under heat lamps.`,
          `A heat-resistant, comfortable apron with deep pockets.`,
          `A knife roll or a professional sharpening service, if they don’t already have a favorite.`,
        ],
      },
      {
        p: `Ask what they already use before buying knives or pans. Chefs tend to be particular, and a gift that duplicates their gear is less welcome than something they didn’t know they needed.`,
      },
      { h: 'Gifts for tired feet and long doubles' },
      {
        p: `Twelve-hour days standing on tile are hard on the whole body. Cushioned insoles, compression socks and a pair of comfortable non-slip shoes in their size (only if you’re sure of it) are practical. A foot massager or a gift card for a massage is the kind of thing a chef rarely buys for themselves.`,
      },
      { h: 'Gifts for the day off' },
      {
        p: `Many chefs spend their days off recovering from the week, often at home with the heat on. A few thoughtful ideas:`,
      },
      {
        list: [
          `A cool-mist humidifier for the bedroom. Winter heating dries the air at home, and a chef who spends nights next to a grill and days in a heated house might appreciate it.`,
          `A reservation or gift certificate somewhere they’ve wanted to try, so someone else cooks for once.`,
          `A cookbook or food-history book from a cuisine they love.`,
          `A comfortable reading lamp, if they read recipes and food writing at home on screens all evening.`,
        ],
      },
      { h: 'Are eye drops a good gift for a chef?' },
      {
        p: `They can be, but only for someone who has actually mentioned dry or scratchy eyes. Eye drops given out of the blue can read as a comment on how tired someone looks. If they have brought it up, a bottle tucked in with one of the gifts above is practical rather than odd.`,
      },
      {
        p: `Read the label first. Quell’s Drug Facts panel cautions: {warnings}. A chef handles eggs constantly and will notice that line, and if they have an egg allergy this isn’t the drop to give. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses read: {uses}. The label doesn’t cover contact lenses or use with other drops, so if they wear contacts, let them ask their eye doctor first.`,
      },
      {
        p: `A practical tip to pass along: eye drops go in with clean hands, not between tickets. After a shift, wash up first. The panel’s directions are: {directions}.`,
      },
      { h: 'Where they should keep the bottle' },
      {
        p: `Not on the line, and not above the dish machine. The label says: {storage}. A kitchen near the ranges runs far hotter than that during service. A locker, a backpack in the office or a coat pocket in the break room keeps it in range. The [Drug Facts page](/drug-facts) has the full panel to share.`,
      },
      { h: 'Stocking stuffers for a chef' },
      {
        list: [
          `A box of sharp-tipped, fine-point markers for labeling deli containers.`,
          `A small tin of lip balm, which a hot, dry kitchen goes through quickly.`,
          `A pocket thermometer case or a new set of tongs in their preferred length.`,
          `A single bottle of eye drops, only if they’ve said their eyes bother them.`,
        ],
      },
      { h: 'Shipping a gift to a chef' },
      {
        p: `Restaurants receive deliveries constantly, but a personal package can get lost in the produce boxes. Shipping to their home is usually safer. If you order Quell for them, put their name and home address in the shipping fields and your own email on the order. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order early and follow the tracking email. Our page on [whether the recipient sees the price](/guides/will-the-gift-recipient-see-the-price) explains what arrives with the package, and [sending Quell as a gift](/guides/sending-quell-as-a-gift) walks through the steps.`,
      },
      {
        p: `If they’d rather not keep it, an unopened bottle can be refunded within {returnDays} days of delivery, and it doesn’t need to be sent back. More gift ideas for people who cook are in our guide to [Christmas gifts for a home cook](/guides/christmas-gifts-for-a-home-cook), and the rest of our holiday guides are under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'If their eyes bother them a lot' },
      {
        p: `A gift isn’t a substitute for an appointment. If a chef’s eyes burn after every shift, or smoke and heat have left them irritated for days, encourage a visit to an eye doctor, who can find the cause and decide what to do. Anything splashed into the eye, like hot oil, cleaning chemicals or chili, needs flushing and prompt medical care, not drops.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a chef?',
        a: `Practical gear that makes long shifts easier: anti-fog safety glasses for the fryer, good kitchen towels, sweatbands, cushioned insoles and something restful for days off, like a dinner out where someone else cooks.`,
      },
      {
        q: 'Should I give a chef eye drops for Christmas?',
        a: `Only if they’ve mentioned dry or scratchy eyes, and only after reading the label. Quell’s panel cautions: {warnings}. Pair it with a kitchen gift rather than giving it alone.`,
      },
      {
        q: 'What do professional chefs want for Christmas?',
        a: `Many chefs want things for their feet and their downtime more than more gear: insoles, compression socks, a massage, or a reservation somewhere they’ve wanted to try. Ask before buying knives, since most have strong preferences.`,
      },
      {
        q: 'Can I ship a Christmas gift to a chef at their restaurant?',
        a: `You can, but a personal package may get mixed in with deliveries. Shipping to their home is usually safer. Quell ships to any US address, with tracking by email and no promised delivery date.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-pharmacist',
    title: 'Christmas gifts for a pharmacist',
    description:
      'Thoughtful gifts for a pharmacist who stands, reads small print and watches screens for long shifts: comfort, better light at home, and time off.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Good Christmas gifts for a pharmacist ease long shifts on their feet and long hours reading tiny print on screens and labels: supportive insoles, compression socks, a good reading lamp for home, an insulated tumbler with a spill-proof lid, and something that buys them real rest. Eye drops fit only if they’ve said their eyes bother them, and a pharmacist will read the label more carefully than anyone.`,
      },
      { h: 'What a pharmacy shift asks of the eyes' },
      {
        p: `Pharmacists spend much of a shift checking: names, doses and directions on a verification screen, then the same details on a printed label and a stock bottle. That kind of close, careful looking slows blinking, and store air from heating and cooling systems keeps the tear film drying between blinks. Add bright overhead lighting, a drive-through window letting in cold air, and shifts that run into evenings and weekends, and plenty of pharmacists finish the day with tired, scratchy eyes. Our guide on [dry eyes for pharmacists](/guides/dry-eyes-for-pharmacists) covers the workday habits.`,
      },
      {
        p: `A gift can’t change the job, but it can make the hours around it easier.`,
      },
      { h: 'Gifts for long hours standing' },
      {
        list: [
          `Supportive insoles or compression socks for shifts behind the counter.`,
          `An anti-fatigue mat for the kitchen at home, where they stand again after work.`,
          `A foot massager or a massage gift card.`,
          `Comfortable shoes, but only if you know their size and style exactly.`,
        ],
      },
      { h: 'Gifts for the eyes after work' },
      {
        p: `Most of a pharmacist’s reading happens at work, but many keep reading at home, whether that’s continuing education, journals or a novel on a tablet. A few gifts that make that easier:`,
      },
      {
        list: [
          `A warm-toned reading lamp with adjustable brightness for the chair they read in.`,
          `A tablet or e-reader stand, so the screen sits a little below eye level instead of in their lap.`,
          `A cool-mist humidifier for the bedroom, since winter heating dries the air at home.`,
          `Large-print puzzle books or a paper book instead of another screen.`,
        ],
      },
      {
        p: `Blue-light gadgets and “eye health” supplements are worth leaving out of a pharmacist’s stocking. They’ll have opinions, and the gift should be about rest rather than products they evaluate for a living.`,
      },
      { h: 'Gifts for the counter and the break room' },
      {
        list: [
          `An insulated tumbler with a spill-proof lid. Open drinks don’t belong near a dispensing counter, and a sealed one can sit in the break room.`,
          `A quality pen, since many pharmacists still sign and initial all shift.`,
          `A lanyard or badge reel in a design they’ll like.`,
          `Good hand cream. Frequent handwashing dries the skin.`,
        ],
      },
      { h: 'Should you give a pharmacist eye drops?' },
      {
        p: `Only if they’ve told you their eyes are dry or scratchy after work. A pharmacist knows the over-the-counter aisle better than most people, so a bottle given without that conversation can come across as advice. If they have mentioned it, Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. It’s preservative-free, and its milky look is normal; the label says {milky}.`,
      },
      {
        p: `Expect them to read every line. The Uses: {uses}. The directions: {directions}. The caution: {warnings}. Its active ingredients are {actives}, and the inactive list is {inactives}. The full panel is on our [Drug Facts page](/drug-facts) if they want to read it before opening the bottle. As with any drop, the label doesn’t give directions for contact lenses or use with other eye drops.`,
      },
      {
        p: `Don’t present it as something it isn’t. A gift bottle is a small comfort for dryness, not a remedy for anything, and a pharmacist will appreciate that you didn’t oversell it.`,
      },
      { h: 'Gifts that give them time' },
      {
        p: `Pharmacies stay open evenings, weekends and many holidays, so time is often the scarcest thing a pharmacist has. Offering to cover a chore, cooking a meal on a day they work late, or booking an outing on a day you know they’re off can mean more than anything wrapped. A weekend away, planned around their schedule rather than yours, is a bigger version of the same idea.`,
      },
      { h: 'Ordering and shipping a gift' },
      {
        p: `Ship a personal gift to their home rather than the pharmacy, where packages arrive constantly and may be mistaken for stock. If you order Quell for them, put their name and address in the shipping fields and use your own email. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order early and watch for the tracking email. [Sending Quell as a gift](/guides/sending-quell-as-a-gift) has the details, and unopened bottles can be refunded within {returnDays} days of delivery without being sent back.`,
      },
      {
        p: `For other health-care workers on your list, see [Christmas gifts for a nurse with dry eyes](/guides/christmas-gifts-for-a-nurse-with-dry-eyes), and browse the rest under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'If their eyes really bother them' },
      {
        p: `A pharmacist is used to telling other people when to see a doctor, and less used to taking the advice. If their eyes stay irritated or keep getting worse, an eye doctor is the one to find the cause and decide what to do. The label is clear about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a pharmacist?',
        a: `Something for long shifts and the hours after them: supportive insoles or compression socks, a spill-proof insulated tumbler, a good reading lamp for home, hand cream, or time off they can actually enjoy.`,
      },
      {
        q: 'Are eye drops a good gift for a pharmacist?',
        a: `Only if they’ve said their eyes feel dry after work. Otherwise a bottle can read as advice to someone who gives advice for a living. If you do give one, expect them to read the whole label first.`,
      },
      {
        q: 'Should I send a pharmacist’s gift to their pharmacy?',
        a: `Home is usually better. Pharmacies receive deliveries throughout the day, and a personal package can get mixed up with stock. Quell ships to any US address, with tracking by email and no promised delivery date.`,
      },
      {
        q: 'What can I give a pharmacist who works on Christmas?',
        a: `Time and comfort: a meal ready when they get home, a chore taken off their list, or an outing booked for the first day they have free. A spill-proof tumbler or a massage gift card works as something to unwrap.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-holiday-basketball-tournament',
    title: 'Dry eyes at a holiday basketball tournament',
    description:
      'Forced-air heat, bright gym lights, a scoreboard and game after game from the bleachers: how to keep your eyes comfortable at a holiday tournament.',
    category: 'seasonal',
    addedOn: '2026-11-27',
    body: [
      {
        p: `A holiday basketball tournament dries your eyes because you sit for hours in a big gym full of heated, moving air, staring at a bright court and scoreboard and rarely looking away. Sit away from heater vents and doorways, look off the court during timeouts and between games, take slow, full blinks, keep any drops in your bag rather than the car, and use them with clean hands.`,
      },
      { h: 'Why your eyes feel dry in the bleachers' },
      {
        p: `December tournaments pack a lot of watching into a few days. You might see three, four or more games in a day, back to back, from a hard bleacher seat. A gym that size needs a lot of heat in winter, and forced-air systems blow warm, dry air through the space. Warming cold air lowers its relative humidity, so a full gym can feel stuffy and still be dry on the eyes.`,
      },
      {
        p: `Then there’s the watching itself. Following a fast game means tracking the ball without looking away, and focusing hard like that slows how often you blink. The tear film thins between blinks, especially in moving air, and by the third game your eyes may feel gritty or tired.`,
      },
      { h: 'Picking a seat' },
      {
        p: `Where you sit makes a real difference over a long day. Look up before you settle in:`,
      },
      {
        list: [
          `Avoid seats right under or in front of a ceiling heater or a wall vent.`,
          `Stay away from the doors to the parking lot, where a blast of cold air rolls in every time someone walks through.`,
          `Higher rows can be warmer, since heat rises in a tall gym. If you’re uncomfortable, try moving lower.`,
          `Pick a seat where you don’t have to look up steeply at a hanging scoreboard all game.`,
        ],
      },
      { h: 'Gym lights and the scoreboard' },
      {
        p: `Bright overhead lights and a glossy hardwood floor bounce glare back toward the stands, and an LED scoreboard is the brightest thing in the building. You can’t dim any of it, but you can take your eyes off it. During timeouts, free throws and halftime, look at something nearby and dim, like your program or the person next to you, and blink slowly a few times. Between games, step out to the lobby or hallway for a few minutes.`,
      },
      { h: 'Filming and following scores on your phone' },
      {
        p: `Recording a player’s game, checking the bracket and streaming another court all mean staring at a small, bright screen in between watching the real thing. That’s two kinds of close focus, one after the other, with little blinking in either. Record a few key minutes rather than whole games, and put the phone face down during breaks in play. Turning screen brightness down to match the gym helps too.`,
      },
      { h: 'Long days and the drive between gyms' },
      {
        p: `Holiday tournaments often spread across more than one site, so a day can include driving between schools with the car heater running hard. Aim the vents at your feet or chest instead of your face, and turn the fan down once the car warms up. Wear sunglasses if you’re driving into a low winter sun between games. If you’re driving home after the last game of the night, rest your eyes for a few minutes before you leave the lot.`,
      },
      { h: 'For players and coaches' },
      {
        p: `Players and coaches deal with the same dry air, plus sweat. Sweat running into the eyes stings; a headband and a clean towel on the bench help. A ball, finger or elbow to the eye is for a doctor or athletic trainer to check, not for drops, especially if vision blurs, the eye hurts, or light bothers it. Coaches on their feet for game after game can borrow the spectator habits: look away during timeouts and blink fully. Our guide for [referees and coaches](/guides/dry-eyes-for-referees-and-coaches) has more for the people on the floor.`,
      },
      {
        p: `Quell’s label doesn’t give directions for children, so for a young player with dry or irritated eyes, ask their doctor or pharmacist rather than sharing your drops.`,
      },
      { h: 'Keeping drops in your bag, not the car' },
      {
        p: `On a winter day, a parked car can get colder than the label allows for, and on a sunny one, the dashboard can get warm. Quell’s label says: {storage}. Keep the bottle in a coat pocket or the bag you carry into the gym. Use it in the lobby or restroom after washing your hands, not with fingers that just handled concession snacks. The directions say: {directions}. And as you use it: {tip}.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses are: {uses}. The panel’s caution reads: {warnings}. The label doesn’t cover contact lenses or use with other eye drops; ask an eye doctor or pharmacist about those. Every section is on our [Drug Facts page](/drug-facts), and you can [order from the home page](/#buy). For working out rather than watching, our guide to [dry eyes at the gym](/guides/dry-eyes-at-the-gym) covers fans, treadmills and sweat.`,
      },
      { h: 'When it’s more than a long day' },
      {
        p: `Dry, tired eyes after a long tournament usually settle with rest. If they don’t, or if dryness keeps coming back through the winter, an eye doctor can find the cause and decide what to do. The label is specific: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait. More winter guides are under [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at basketball tournaments?',
        a: `A big gym in winter is full of heated, moving air, which dries the tear film, and following game after game means focused watching with little blinking. Several games in a row add up.`,
      },
      {
        q: 'Where should I sit in a gym if my eyes get dry?',
        a: `Away from heater vents, ceiling heaters and the doors to the parking lot. A seat where you don’t have to look up steeply at the scoreboard is easier on the eyes over a long day.`,
      },
      {
        q: 'Can I leave eye drops in the car during a winter tournament?',
        a: `Better not. Quell’s label says: {storage}. A car parked for hours on a winter day can fall below that, so keep the bottle in a coat pocket or the bag you carry inside.`,
      },
      {
        q: 'What should I do if a player gets hit in the eye?',
        a: `Have a doctor or athletic trainer check it, especially if vision blurs, the eye hurts or light bothers it. Eye drops aren’t for injuries, and Quell’s label doesn’t give directions for children.`,
      },
    ],
  },
  {
    slug: 'is-it-normal-to-blink-a-lot',
    title: 'Is it normal to blink a lot?',
    description:
      'Blinking more than usual is often your eyes reacting to dry air, wind, screens or fatigue. What makes people blink a lot, and when it’s worth an eye exam.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Blinking a lot is usually normal. Your eyes blink more when they feel dry or irritated, in wind, smoke or bright light, when you’re tired, and sometimes when you’re nervous. Each blink spreads a fresh layer of tears, so extra blinking is often the eye doing its job. See an eye doctor if it starts suddenly, keeps up for weeks, or comes with pain, light sensitivity or blurred vision.`,
      },
      { h: 'What blinking does for your eyes' },
      {
        p: `Every blink wipes a thin tear film across the front of the eye. That film has three layers: an oily outer layer that slows evaporation, a watery middle layer, and a mucus layer that helps it cling to the eye’s surface. Between blinks the film slowly thins as it evaporates. Blinking rebuilds it. When the surface starts to feel dry or scratchy, blinking more often is a natural response, the same way you might swallow more when your mouth feels dry.`,
      },
      {
        p: `So noticing that you’re blinking a lot is a clue rather than a problem in itself. The useful question is what’s making your eyes want more tears.`,
      },
      { h: 'Why do I blink so much?' },
      {
        p: `The most common reasons are everyday ones:`,
      },
      {
        list: [
          `Dry air. Heated rooms in winter and air conditioning in summer both pull moisture from the air, and the tear film evaporates faster.`,
          `Moving air. A fan, a car vent, wind or a ceiling register blowing across your face speeds evaporation.`,
          `Irritants. Smoke, dust, pollen, strong cleaning fumes and chlorinated pool water can all make the eyes blink and water.`,
          `Bright light and glare, which make many people blink and squint.`,
          `Something small on the eye, like an eyelash or a speck of dust.`,
          `Long days. Many people notice they blink more in the evening, after hours of work.`,
        ],
      },
      { h: 'Is it normal to blink a lot when tired?' },
      {
        p: `Yes, it’s common. After a long day, especially one spent concentrating, eyes often feel heavy, scratchy or dry, and you may blink harder and more often to clear them. A night’s rest usually settles it. If you notice it most in the late afternoon, look at what your day looks like: hours at a screen, a dry office, a long drive with the heater on. Those are the parts you can change.`,
      },
      { h: 'Blinking more after screen time' },
      {
        p: `Focusing on a screen tends to lower how often you blink while you’re looking at it, and blinks during screen work are often incomplete. Some people then notice a burst of blinking when they finally look away. Building breaks into screen work helps more than trying to force extra blinks:`,
      },
      {
        list: [
          `Every so often, look across the room or out a window and take a few slow, complete blinks.`,
          `Set the screen slightly below eye level so your eyelids cover more of the eye.`,
          `Keep vents and desk fans from blowing toward your face.`,
          `Turn screen brightness down to match the room.`,
        ],
      },
      {
        p: `Our guide on [eye drops for computer users](/guides/eye-drops-for-computer-users) goes further.`,
      },
      { h: 'Is it normal to blink a lot when nervous?' },
      {
        p: `Plenty of people blink more when they’re anxious, speaking in public, or under bright lights on a stage or on camera. It’s usually temporary and fades as the moment passes. If blinking is so frequent or forceful that it’s hard to keep your eyes open, or it doesn’t ease once you relax, mention it to a doctor.`,
      },
      { h: 'Blinking a lot vs. an eyelid twitch' },
      {
        p: `A twitch is different from blinking. It’s a small, involuntary flutter in the upper or lower lid that you can feel but can’t stop, and it often comes and goes over a few days. A twitch that keeps up for weeks, spreads to other parts of the face, or makes the eye close completely is worth an appointment.`,
      },
      { h: 'Can eye drops help if I blink a lot?' },
      {
        p: `If your blinking comes from dry, scratchy eyes, a lubricating drop may help with that dryness. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}.`,
      },
      {
        p: `A drop can’t do anything for blinking caused by something else, such as glare, nerves or a twitch, and it isn’t a rinse for something stuck in the eye. Read the caution before you buy: {warnings}. The label doesn’t give directions for contact lenses, children or use with other drops. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When frequent blinking needs an eye doctor' },
      {
        p: `Blinking that you can trace to dry air or a long day is ordinary. Get it checked if:`,
      },
      {
        list: [
          `It started suddenly and you can’t link it to anything.`,
          `It has gone on for weeks despite changing your environment.`,
          `It comes with pain, light sensitivity, discharge, blurred vision or a feeling that something is in the eye.`,
          `Your eyelids close forcefully or you have trouble keeping your eyes open.`,
          `It affects one eye much more than the other.`,
        ],
      },
      {
        p: `An eye doctor can find the cause and decide what to do. If you’re using a drop and things aren’t settling, the label sets the limit: {stopUse} Our [self-check](/self-check) can help you describe what you’re noticing before an appointment; it’s not a diagnosis. For other warning signs, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do I keep blinking so much?',
        a: `Most often your eyes feel dry or irritated, from heated or air-conditioned air, wind, screens, smoke or a long day. Blinking spreads fresh tears across the eye. If it doesn’t settle or comes with pain or vision changes, see an eye doctor.`,
      },
      {
        q: 'Is it normal to blink a lot when you’re tired?',
        a: `Yes. Tired eyes often feel dry or heavy at the end of a long day, and many people blink harder and more often to clear them. Rest usually settles it.`,
      },
      {
        q: 'Is blinking a lot a sign of dry eyes?',
        a: `It can be one sign. Dry or scratchy eyes often prompt more blinking, but glare, nerves and irritants do too. An eye doctor can find the actual cause if it keeps happening.`,
      },
      {
        q: 'What is the difference between blinking a lot and an eye twitch?',
        a: `A blink closes the whole eye and you can control it. A twitch is a small flutter in part of one eyelid that you can’t stop. A twitch that keeps up for weeks or spreads across the face should be checked.`,
      },
    ],
  },
  {
    slug: 'is-it-normal-to-squint-in-the-sun',
    title: 'Is it normal to squint in the sun?',
    description:
      'Squinting in bright sun is a normal reaction to glare, but it means fewer blinks and tired, dry eyes. How sunglasses and a brim help, and when to get checked.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Yes, squinting in the sun is normal. Narrowing your eyelids cuts down the light and glare reaching your eyes. The downside is that long stretches of squinting tire the face and mean fewer full blinks, so eyes can feel dry and strained afterward. Sunglasses and a hat brim do the same job without the effort. If you squint indoors too, or at things in the distance, have an eye doctor check your vision.`,
      },
      { h: 'Why we squint in bright light' },
      {
        p: `Squinting is a reflex. When light is uncomfortably bright, the muscles around the eye pull the lids partway closed and narrow the opening light comes through. It works quickly and you rarely notice you’re doing it. Glare is the usual trigger: sunlight bouncing off water, snow, sand, pale concrete, car windshields or a white page.`,
      },
      {
        p: `People also squint when they’re trying to make out a distant sign or small print. That’s a different situation from glare, and it’s covered further down.`,
      },
      { h: 'Is it bad to squint your eyes?' },
      {
        p: `A little squinting does no harm. Hours of it can leave you with a few uncomfortable effects:`,
      },
      {
        list: [
          `Tired muscles around the eyes and forehead, and sometimes a headache by the end of the day.`,
          `Fewer complete blinks. Eyelids held partway closed don’t sweep the full tear film across the eye as often.`,
          `Dryness on windy days, when moving air and fewer blinks combine.`,
          `Eyes that feel strained after you go back indoors.`,
        ],
      },
      {
        p: `None of that means squinting is dangerous. It means your eyes are working harder than they need to, and there are easy ways to give them a break.`,
      },
      { h: 'How to stop squinting in the sun' },
      {
        p: `The goal is to cut glare before it reaches you, so the reflex doesn’t need to kick in:`,
      },
      {
        list: [
          `Wear sunglasses whenever you’re out in bright light, not just in summer. Winter sun sits lower and can glare straight into your eyes on a drive.`,
          `Wraparound frames block light and wind from the sides as well as the front.`,
          `Polarized lenses cut reflected glare from water, roads and windshields; check whether they make phone or dashboard screens hard to read for you.`,
          `Add a hat with a brim, which shades the eyes from overhead sun.`,
          `Park the car facing away from the sun on a bright afternoon so you don’t start the drive home squinting.`,
        ],
      },
      { h: 'Squinting outside and dry eyes' },
      {
        p: `Squinting often goes along with other conditions that dry the eyes. Bright days at the beach, on a boat, on the ski slopes or in an open field usually come with wind, and wind speeds up evaporation from the tear film. Put the two together and eyes can feel gritty or sore by mid-afternoon. Sunglasses help with both at once. Every so often, look into shade and take a few slow, complete blinks.`,
      },
      {
        p: `If dryness lingers after a day outside, a lubricating eye drop may help. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. The directions: {directions}. Store it as its label says: {storage}. A beach bag or a car in the sun can get hotter than that, so keep the bottle in a shaded bag or your pocket.`,
      },
      { h: 'Is it normal to squint all the time?' },
      {
        p: `Squinting in bright sun is normal. Squinting all the time, including indoors, at screens or to see things far away, is a sign worth paying attention to. Squinting to see clearly, often without realizing it, can be a sign that your vision has changed. An eye exam is the way to find out. Don’t try to work around it with drops; a drop doesn’t change how well you see.`,
      },
      { h: 'Squinting with new glasses' },
      {
        p: `Some people find themselves squinting during the first days with new glasses or a new prescription while they get used to them. If that doesn’t settle, or new glasses seem worse than the old ones, go back to the eye doctor or optician who fitted them. They can check the prescription and the fit.`,
      },
      { h: 'Squinting at screens' },
      {
        p: `A screen that’s too bright for the room, too far away or covered in window glare makes many people squint at it, and squinting at a screen means even fewer blinks than screen work already causes. Move the screen out of window glare, match its brightness to the room, increase the text size, and take regular breaks to look into the distance. Our guide on [eye drops for computer users](/guides/eye-drops-for-computer-users) covers the rest of a screen-day routine.`,
      },
      { h: 'What a drop can and can’t do' },
      {
        p: `A lubricating drop can help with dryness. It won’t reduce glare, change your prescription or fix squinting caused by vision changes. Read the caution before using it: {warnings}. The label doesn’t give directions for contact lenses, children or use with other drops; ask your eye doctor or pharmacist. All of it is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Make an appointment if you squint to see clearly, if light suddenly feels painfully bright, if you have pain in the eye, or if vision in one or both eyes has changed. An eye doctor can find the cause and decide what to do. For dryness that won’t settle, the label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Why do I squint so much in the sun?',
        a: `Squinting is a reflex that cuts down bright light and glare, especially off water, snow, pavement and windshields. Sunglasses and a brimmed hat reduce the glare so you don’t need to squint as much.`,
      },
      {
        q: 'Is it bad to squint all the time?',
        a: `Squinting now and then is harmless, but squinting constantly, especially indoors or to see far away, can mean your vision has changed. An eye exam is the way to find out.`,
      },
      {
        q: 'Can squinting make your eyes dry?',
        a: `It can contribute. Squinting means fewer full blinks, and bright days often come with wind. Together they let the tear film dry out faster.`,
      },
      {
        q: 'Do sunglasses help with squinting?',
        a: `Yes. Sunglasses cut light and glare so your eyes don’t need to narrow as much. Wraparound frames also block wind from the sides, and polarized lenses reduce reflected glare.`,
      },
    ],
  },
  {
    slug: 'is-it-bad-to-keep-your-eyes-open-for-too-long',
    title: 'Is it bad to keep your eyes open for too long?',
    description:
      'Holding your eyes open without blinking dries the eye’s surface, so it starts to sting and water. What staring does, where it happens, and simple fixes.',
    category: 'choosing',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Keeping your eyes open without blinking for too long isn’t dangerous in short bursts, but it does dry the eye’s surface. The tear film thins between blinks, so the longer you stare, the more your eyes sting, burn or water. A few full blinks rebuild it. The bigger issue is staring for hours at screens, roads or work, which leaves eyes dry and tired. Take breaks and blink completely.`,
      },
      { h: 'What happens when you don’t blink' },
      {
        p: `Each blink spreads a fresh tear film over the eye: an oily outer layer, a watery middle and a mucus layer next to the eye. As soon as your lids open, the film starts thinning through evaporation. If you keep your eyes open on purpose, as in a staring contest, you’ll feel the result: a stinging or burning feeling that gets more urgent, then watering, and finally a blink you can’t hold back. That urge is your eye asking for its tear film back.`,
      },
      {
        p: `Once you blink, the discomfort fades quickly. Holding your eyes open for a short time, then, isn’t harmful. What matters more is how often, and for how long, ordinary life asks you to stare.`,
      },
      { h: 'Is it bad to keep your eyes open in a staring contest?' },
      {
        p: `A staring contest ends when someone blinks, and that’s the safety valve. Your eyes will sting and water, and they recover within moments of blinking. Don’t hold your lids open with your fingers to win, and don’t do it in wind, smoke or near a heater. If an eye still stings or feels scratchy a while afterward, rest your eyes; if it doesn’t settle, see an eye doctor.`,
      },
      { h: 'Where everyday staring happens' },
      {
        p: `Most people never hold their eyes open deliberately. They do it without noticing, during tasks that hold their attention:`,
      },
      {
        list: [
          `Screens. Concentrating on a computer, phone or game slows blinking, and many blinks become incomplete.`,
          `Driving, especially at night, in heavy traffic or on a long highway stretch.`,
          `Reading, sewing, model building, painting and other close work.`,
          `Watching a game, a movie or a performance you don’t want to miss.`,
          `Jobs that require scanning: security monitors, inspection lines, lifeguarding.`,
        ],
      },
      {
        p: `Add dry air, like a heated room, a car vent or air conditioning, and the tear film thins even faster between those rare blinks.`,
      },
      { h: 'Can keeping your eyes open too long cause dry eyes?' },
      {
        p: `Long stretches of reduced blinking are one of the everyday reasons eyes feel dry, gritty or tired by evening. The feeling usually improves with rest and better habits. If it keeps coming back no matter what you change, an eye doctor can find the cause and decide what to do; it isn’t something a website or a drop can sort out.`,
      },
      { h: 'How to stop staring without blinking' },
      {
        p: `You can’t think about blinking all the time, so build it into what you’re already doing:`,
      },
      {
        list: [
          `Pair blinks with natural pauses: the end of an email, a red light, a page turn, a commercial break.`,
          `Every so often, look at something far away and blink slowly and completely a few times.`,
          `Lower your screen slightly below eye level so the lids cover more of the eye.`,
          `Point car and desk vents away from your face.`,
          `On long drives, take breaks and rest your eyes.`,
          `Try a full blink drill: close your eyes gently, pause, then open. A half-blink doesn’t rebuild the whole film.`,
        ],
      },
      {
        p: `Our guide on whether [blinking more can replace eye drops](/guides/can-blinking-more-replace-eye-drops) looks at how far habits alone can go.`,
      },
      { h: 'Is it bad to keep your eyes open when they feel dry?' },
      {
        p: `If your eyes already feel dry, closing them for a few seconds is more comfortable than forcing them open. Rest them with your eyes gently closed for a minute or two between tasks. Don’t rub them, which can irritate the surface further. If dryness is the main problem, a lubricating drop may help. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}. The panel’s caution: {warnings}.`,
      },
      {
        p: `The label doesn’t cover contact lenses, children, or using it with other drops; ask your eye doctor or pharmacist about those. See the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When your eyes don’t close fully' },
      {
        p: `Some people find their eyes don’t close all the way during sleep, or someone else notices it, and they wake with dry, sore eyes. That isn’t a staring habit you can change by trying harder. Mention it to an eye doctor, who can check how your lids close and decide what to do.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Stinging that disappears when you blink is normal. See an eye doctor if your eyes stay dry or sore after rest, if you notice pain, light sensitivity or changes in your vision, or if one eye is much worse than the other. If you use a drop, the label sets the limit: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more, and our [self-check](/self-check) can help you put symptoms into words.`,
      },
    ],
    faq: [
      {
        q: 'What happens if you don’t blink for a long time?',
        a: `The tear film thins as it evaporates, so the eye starts to sting or burn, then waters, and finally you blink without meaning to. The discomfort fades within moments once you blink.`,
      },
      {
        q: 'Is it bad to win a staring contest?',
        a: `Not in itself. Your eyes will sting and water, and they recover once you blink. Don’t hold your eyelids open with your fingers, and rest your eyes if they still feel scratchy afterward.`,
      },
      {
        q: 'Why do my eyes burn when I keep them open?',
        a: `Without blinking, the tear film dries out and the eye’s surface is left less protected, which feels like burning or stinging. A few slow, complete blinks rebuild the film.`,
      },
      {
        q: 'How can I remember to blink at the computer?',
        a: `Tie blinks to natural pauses, like sending an email or finishing a page, and take regular breaks to look far away and blink fully. Setting the screen a little below eye level helps too.`,
      },
    ],
  },
  {
    slug: 'reading-eye-drop-drug-facts-before-you-buy',
    title: 'Reading eye drop Drug Facts before you buy',
    description:
      'What to look for on an eye drop’s Drug Facts panel before you buy it: uses, warnings, directions, storage and ingredients, and where to read Quell’s online.',
    category: 'label',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Before you buy eye drops, read the Drug Facts panel: it’s on the back or side of the carton in a store, and many sites show it online; Quell’s is on our Drug Facts page. Check the Uses for what the drop is for, the Warnings for allergies, the Directions for whether the schedule fits your day, the storage line, and the inactive ingredients for anything you avoid.`,
      },
      { h: 'Where to find the Drug Facts before buying' },
      {
        p: `Every over-the-counter eye drop carries a Drug Facts panel in the same order of sections, so once you know where to look, you can read any brand’s panel in a minute or two.`,
      },
      {
        list: [
          `In a store, it’s printed on the carton, usually on the back or a side panel. You can read it in the aisle before you take the box to the register.`,
          `Online, look for a Drug Facts image or a written copy on the product page. If a site doesn’t show it, that’s worth noticing.`,
          `For Quell, the full panel is on our [Drug Facts page](/drug-facts), transcribed from the carton.`,
        ],
      },
      {
        p: `Our [terms](/terms) say that the panel printed on the product you receive controls if it ever differs from this website. Our guide on [what to do if the label and website differ](/guides/if-the-label-and-website-differ) explains that further.`,
      },
      { h: 'Step 1: Read the Uses' },
      {
        p: `The Uses section says what the product is for, in a sentence or two. It’s the first check because it tells you whether you’re looking at the right kind of drop at all. A lubricating drop for dryness, for example, is a different product from one made for a different purpose. Quell’s Uses read: {uses}.`,
      },
      { h: 'Step 2: Read the Warnings for anything that rules it out' },
      {
        p: `Warnings is where a panel tells you who should be careful and when to stop. Before buying, look especially for allergy lines. Quell’s caution reads: {warnings}. If you have one of those allergies, this isn’t the drop for you, and the time to find out is before you pay. Two more lines sit in the same part of the panel:`,
      },
      {
        list: [
          `When to stop and ask a doctor. For Quell: {stopUse}`,
          `When not to use the product at all. For Quell: {doNotUse}.`,
          `What to do if it’s swallowed. For Quell: {swallowed}.`,
        ],
      },
      { h: 'Step 3: Check the Directions against your day' },
      {
        p: `The Directions tell you how much and how often. Picture your own routine and see whether it fits. Quell’s directions are: {directions}. That’s a morning, midday and evening rhythm for most people; if you work nights or long shifts, our guide on [“3 times per day” for night workers](/guides/what-3-times-per-day-means-if-you-work-nights) helps you map it onto your hours.`,
      },
      {
        p: `If the directions don’t mention something you need to know, such as contact lenses, children or using it with other drops, the label isn’t telling you it’s fine. It’s telling you it doesn’t cover it. Ask an eye doctor or pharmacist before buying for any of those.`,
      },
      { h: 'Step 4: Look at storage before it goes in your bag' },
      {
        p: `Storage appears under Other information. It matters most if you plan to keep drops in a car, a gym bag, a desk near a heater or a work truck. Quell’s panel says: {storage}. If the only place you’d keep it routinely runs hotter or colder than that, plan another spot before you buy.`,
      },
      {
        p: `The same section can include what the product looks like. Quell’s says: {milky}. Knowing that before you open it saves a worried phone call later.`,
      },
      { h: 'Step 5: Scan the ingredients' },
      {
        p: `Active ingredients are listed with their purpose. Quell’s are {actives}. The inactive ingredients follow, and that’s where to look if there’s something you avoid. Quell’s inactive ingredients are {inactives}. If any ingredient on any panel is unfamiliar, a pharmacist can tell you what it is.`,
      },
      { h: 'What to compare between two panels' },
      {
        p: `If you’re choosing between two drops, read the two panels side by side rather than the front of the boxes. Fronts are designed to sell; the panels follow the same format, which makes them easier to compare. Note the size, how often each is used, any allergy lines, and the storage range. Our guide on [comparing two eye drop labels](/guides/how-to-compare-two-eye-drop-labels) goes into detail.`,
      },
      { h: 'What the panel can’t tell you' },
      {
        p: `A Drug Facts panel describes the product. It doesn’t know your eyes. It can’t tell you why they feel dry, whether a drop is the right approach, or what to do if symptoms keep returning. An eye doctor can find the cause and decide what to do. Our [self-check](/self-check) can help you describe symptoms before an appointment, though it’s not a diagnosis.`,
      },
      { h: 'Questions before you buy Quell' },
      {
        p: `If you’ve read the panel and still have a question about the product or an order, call {phone} ({hours}) or use our [contact details](/about#contact). Unopened bottles can be refunded within {returnDays} days of delivery without sending them back, so if you read the carton when it arrives and decide it isn’t for you, you have that option.`,
      },
    ],
    faq: [
      {
        q: 'Can I read the Drug Facts on eye drops before buying?',
        a: `Yes. In stores the panel is printed on the carton, and many product pages show it online. Quell’s full panel is on our Drug Facts page.`,
      },
      {
        q: 'What should I check first on an eye drop label?',
        a: `Start with Uses, to confirm it’s the kind of drop you want, then Warnings for allergy lines. Quell’s caution reads: {warnings}.`,
      },
      {
        q: 'Where is the storage temperature on an eye drop label?',
        a: `It’s under Other information on the Drug Facts panel. Quell’s reads: {storage}.`,
      },
      {
        q: 'What if an eye drop label doesn’t mention contact lenses?',
        a: `Then it doesn’t give directions for them. Quell’s label doesn’t, so ask your eye doctor or pharmacist before using it with contacts.`,
      },
    ],
  },
  {
    slug: 'emollient-eye-drops-vs-emollient-creams',
    title: 'Emollient eye drops vs. emollient creams',
    description:
      'The same word appears on eye drops and skin creams, but they aren’t interchangeable. What “emollient” means on each, and why a cream never goes in the eye.',
    category: 'formula',
    addedOn: '2026-11-27',
    body: [
      {
        p: `“Emollient” describes an ingredient that softens and smooths, so it shows up on both eye drops and skin creams, but the products aren’t interchangeable. An emollient eye drop is made to go in the eye; a skin cream or lotion is made for skin and should never be put in the eye. Quell’s Drug Facts panel lists light mineral oil as its emollient, and its warnings say it’s for the eyes only.`,
      },
      { h: 'What “emollient” means' },
      {
        p: `In everyday use, an emollient is something that softens, smooths and helps hold moisture in. On a skin cream it usually means oils or waxy ingredients that coat the skin and slow water loss. On an eye drop label, the word shows up in the Purpose column next to an active ingredient, telling you that ingredient’s role in the formula.`,
      },
      {
        p: `Quell’s Drug Facts panel lists three active ingredients: {actives}. Two are listed with the purpose Lubricant, and {mineralOil} is listed as the Emollient. Our guide on [emollient eye drops](/guides/emollient-eye-drops) covers the word on its own; this page is about why the same word on two very different products doesn’t make them substitutes.`,
      },
      { h: 'Why the same word shows up on both' },
      {
        p: `The word describes what an ingredient does, not where it goes. Oils and similar ingredients behave the same basic way whether they’re on the skin or in a drop: they help slow the loss of water from a surface. On skin that surface is the outer layer of skin. On the eye it’s the tear film, whose outer oil layer normally slows evaporation from the water layer beneath. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `So the word is accurate on both labels. Everything else about the products is different: what they’re made for, how they’re packaged, and what they contain alongside the emollient.`,
      },
      { h: 'Can you put an emollient cream in your eye?' },
      {
        p: `No. Skin creams, lotions, balms and body oils are made for skin. Many contain fragrance, preservatives, thickeners or other ingredients that sting or irritate the eye, and their containers aren’t made to deliver a single clean drop. This applies to “gentle,” “sensitive skin” and baby products too. If it isn’t labeled for use in the eye, it doesn’t go in the eye.`,
      },
      {
        p: `That includes eye creams. A cream sold for the skin around the eyes is meant for the eyelid area and under-eye skin, not the eye itself. Apply it carefully and keep it away from the lash line if it tends to migrate into your eyes.`,
      },
      { h: 'What if cream gets in your eye?' },
      {
        p: `It happens with moisturizer, sunscreen and eye cream, especially with sweat or tears. Rinse the eye gently with plenty of clean, lukewarm water, and don’t rub it. Mild stinging usually fades. If the stinging, blurring or pain doesn’t settle, or if the product label says to get help, contact a doctor or Poison Control. A lubricating drop isn’t a rinse and isn’t the right first step.`,
      },
      { h: 'Can you use emollient eye drops on your skin?' },
      {
        p: `An eye drop isn’t made for skin either. Quell’s panel cautions: {warnings}. That last line, for use in the eyes only, is the label’s direction, and it’s the reason not to use the bottle as a spot moisturizer, on lips, or anywhere else. Our guide on [what “for use in the eyes only” means](/guides/what-does-for-use-in-the-eyes-only-mean) explains the line.`,
      },
      { h: 'Emollient eye drops vs. eye ointments' },
      {
        p: `An ointment made for the eye is a third kind of product: thicker, often used at night, and typically blurrier for a while after it goes in. It’s still an eye product, labeled for the eye. Our guide on [eye drops vs. eye ointment](/guides/eye-drops-vs-eye-ointment) compares the two. Quell is a drop, not an ointment, and its directions are: {directions}.`,
      },
      { h: 'Reading the emollient on a label' },
      {
        p: `To find the emollient in any eye drop, look at the Active ingredients section of the Drug Facts panel and read the Purpose column. On a skin product, the ingredient list works differently and usually doesn’t name a purpose for each ingredient. A few things to keep straight:`,
      },
      {
        list: [
          `On an eye drop, “emollient” is tied to a specific active ingredient and its amount on the panel.`,
          `On a skin cream, “emollient” is often a marketing word for the product as a whole.`,
          `Inactive ingredients in an eye drop are listed separately. Quell’s are {inactives}.`,
          `The look of a product can differ too. Quell’s panel notes: {milky}.`,
        ],
      },
      { h: 'Using skin products and eye drops together' },
      {
        p: `If you use both, keep them apart. Wash your hands after applying cream or sunscreen and before using an eye drop, so nothing from your fingers ends up near the bottle tip or your eye. Quell’s label adds: {tip}. Let face products settle before putting in a drop, so they’re less likely to run into your eye with it. Our guide to [eye drops before or after skincare](/guides/eye-drops-before-or-after-skincare) has a routine.`,
      },
      { h: 'When to ask a doctor' },
      {
        p: `If your eyes feel dry often enough that you’re tempted to reach for whatever is in the cabinet, that’s worth an appointment. An eye doctor can find the cause and decide what to do. If you use an eye drop and things don’t improve, the label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Is an emollient eye drop the same as an emollient cream?',
        a: `No. Both use an ingredient that softens and helps slow moisture loss, but an eye drop is made to go in the eye and a skin cream is made for skin. Never put a cream or lotion in your eye.`,
      },
      {
        q: 'Can I put moisturizer in my eye for dryness?',
        a: `No. Moisturizers and lotions are made for skin and can sting or irritate the eye. Use only products labeled for use in the eye, and ask an eye doctor if dryness keeps coming back.`,
      },
      {
        q: 'What should I do if lotion gets in my eye?',
        a: `Rinse the eye gently with plenty of clean, lukewarm water and don’t rub. If stinging, blurring or pain doesn’t settle, contact a doctor or Poison Control.`,
      },
      {
        q: 'Which ingredient is the emollient in Quell?',
        a: `Quell’s Drug Facts panel lists {mineralOil} with the purpose Emollient. Its other two active ingredients are listed as lubricants.`,
      },
    ],
  },
  {
    slug: 'can-i-order-eye-drops-on-christmas-day',
    title: 'Can I order eye drops on Christmas Day?',
    description:
      'Yes: Quell’s site takes orders on Christmas Eve and Christmas Day like any other day. What happens after you order on the holiday, and what to expect.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `Yes. You can order Quell on Christmas Eve, Christmas Day or any day of the holidays; the site takes orders around the clock, and your confirmation email arrives right after checkout. In 2026, Christmas Eve is Thursday, December 24, and Christmas Day is Friday, December 25. We don’t promise a ship or delivery date, so a holiday order arrives in the days after, not on the day.`,
      },
      { h: 'What happens when you order on Christmas Day' },
      {
        p: `Checkout doesn’t close for holidays. Ordering on Christmas morning works exactly the way it does on a Tuesday:`,
      },
      {
        list: [
          `Pick a quantity and check out as a guest. No account is needed.`,
          `Enter the shipping name, address and a phone number, then pay on a secure payment page.`,
          `A confirmation email with your order number arrives at the address you entered.`,
          `When the order ships from Brentwood, Tennessee, a second email arrives with tracking.`,
        ],
      },
      {
        p: `The only difference is timing. Christmas Day falls on a Friday this year, so a holiday order is followed by a weekend before the ordinary workweek starts again on Monday, December 28. Our phone line’s listed hours are {hours}. If you call on Christmas Eve afternoon or Christmas Day, you may need to try again during those hours.`,
      },
      { h: 'Ran out of drops at a relative’s house?' },
      {
        p: `It’s a common holiday story: you packed for three days, stayed for five, and the bottle is empty or still at home on the bathroom counter. Ordering on the holiday won’t put a bottle in your hand that afternoon. A few things help in the meantime:`,
      },
      {
        list: [
          `Sit away from the fireplace, space heaters and floor registers.`,
          `Point the car’s vents away from your face on the drive between houses.`,
          `Take screen breaks during long stretches on a phone or a new tablet.`,
          `Close your eyes gently for a minute now and then, especially in a warm, dry room.`,
        ],
      },
      {
        p: `If dryness turns into pain, blurred vision or light sensitivity, that’s not a wait-until-the-package-comes situation. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what shouldn’t wait.`,
      },
      { h: 'Where to have a holiday order sent' },
      {
        p: `Think about where you’ll be when it arrives, not where you are when you order. If you’re heading home on December 27, send it home. If you’re staying with family through New Year’s, you could send it there, with your name on the shipping line and your host’s address. Our guide on [shipping to a holiday address](/guides/shipping-to-a-holiday-address) covers that choice.`,
      },
      {
        p: `Be careful with autofill on a relative’s computer. It can drop their address into the shipping fields without you noticing, so read the address once more before you pay.`,
      },
      { h: 'Ordering after unwrapping a gift of Quell' },
      {
        p: `If someone gave you Quell for Christmas and you want more, you can order from the [home page](/#buy) any time. Before you open the gift, read the carton’s Drug Facts. The caution reads: {warnings}. The directions say: {directions}. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its milky look is expected: {milky}.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses, children, or use with other eye drops. If any of those apply, ask your eye doctor or pharmacist before you start.`,
      },
      { h: 'Is there a Christmas Day sale?' },
      {
        p: `No. Quell has no promo codes, holiday prices or day-after-Christmas sale, and there’s no subscription to sign up for. The price per bottle comes down as you add bottles, because shipping is {shipping} on smaller orders and free on {freeBottles} or more. Our guide on [the saving in your cart](/guides/what-the-cart-saving-means) shows how that works.`,
      },
      { h: 'Ordering for someone else on the holiday' },
      {
        p: `Christmas dinner is often when you hear that a parent’s eyes have been bothering them. If you decide to order for them, put their name and address in the shipping fields and your own email on the order, so the confirmation and tracking come to you. Ask first whether they use any other eye drops or wear contacts, since the label doesn’t cover either. Our guide on [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) walks through it.`,
      },
      { h: 'If something goes wrong with a holiday order' },
      {
        p: `If your confirmation email doesn’t arrive, check spam first, then see [no order confirmation email](/guides/no-order-confirmation-email). Once the order ships, tracking is the way to follow it. If it arrives damaged, incorrect or with a broken seal, we replace it within {returnDays} days. If you change your mind about an unopened bottle, we refund it within {returnDays} days of delivery, and you don’t send it back. Call {phone} with your order number during listed hours, or use our [contact page](/about#contact).`,
      },
    ],
    faq: [
      {
        q: 'Is Quell open on Christmas Day?',
        a: `The website takes orders on Christmas Day like any other day, and the confirmation email arrives right away. The phone line’s listed hours are {hours}, so calls may need to wait for a regular weekday.`,
      },
      {
        q: 'Can I order eye drops on Christmas Eve?',
        a: `Yes. Christmas Eve 2026 is Thursday, December 24, and checkout works normally. There’s no promised delivery date, so don’t count on a Christmas Eve order arriving by Christmas.`,
      },
      {
        q: 'Will an eye drop order placed on Christmas Day ship that day?',
        a: `We don’t state ship or delivery dates, so plan on it arriving in the days after the holiday. You’ll get a tracking email when it ships.`,
      },
      {
        q: 'Are there after-Christmas sales on Quell?',
        a: `No. There are no promo codes or holiday sales. The cost per bottle drops as you add bottles, since orders of {freeBottles} or more ship free.`,
      },
    ],
  },
  {
    slug: 'should-i-wait-for-cyber-monday-to-buy-eye-drops',
    title: 'Should I wait for Cyber Monday to buy eye drops?',
    description:
      'Not for Quell: there’s no Cyber Monday sale, so waiting only risks running out. How to judge a holiday eye drop deal elsewhere before you buy.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If you’re buying Quell, there’s no reason to wait for Cyber Monday on November 30, 2026. There are no promo codes or holiday sales, and the price is the same every day. The lower cost per bottle that comes with ordering {freeBottles} or more applies any day of the year. If you’re running low, ordering now gets the bottle on its way sooner.`,
      },
      { h: 'What waiting would change for a Quell order' },
      {
        p: `Nothing about the price. Black Friday this year is November 27, and the cart works the same that day as it does on Cyber Monday:`,
      },
      {
        list: [
          `The bottle price doesn’t change for holidays.`,
          `Shipping is {shipping} on smaller orders and free on {freeBottles} or more bottles, every day.`,
          `There are no codes to enter at checkout, so there’s no code to miss.`,
          `There’s no subscription, so you aren’t signing up for anything by ordering now.`,
        ],
      },
      {
        p: `What waiting does change is the calendar. We don’t promise a delivery date, so four days of waiting can turn into four extra days without drops if you’re close to the bottom of a bottle. Our page on [Black Friday deals](/guides/quell-black-friday-and-holiday-deals) explains why there’s no sale to hold out for.`,
      },
      { h: 'How the cart saving works instead' },
      {
        p: `The cost per bottle goes down as you add bottles, mainly because shipping is charged once per order and disappears at {freeBottles} bottles. The cart shows that saving against buying single bottles. Our guide to [what the cart saving means](/guides/what-the-cart-saving-means) shows the arithmetic, and it reads the same on Cyber Monday as it does in March.`,
      },
      {
        p: `That makes the honest strategy simple: if you’ll use {freeBottles} bottles before their expiration dates, buying them together costs less per bottle than buying them one at a time. If you won’t, a smaller order is fine.`,
      },
      { h: 'Is a Cyber Monday eye drop deal worth it elsewhere?' },
      {
        p: `If you’re comparing a holiday deal on another eye drop, check a few things before calling it a bargain:`,
      },
      {
        list: [
          `The size. A lower price on a smaller bottle can cost more per milliliter. Quell is {size}.`,
          `Shipping. A discount that disappears at checkout once shipping is added isn’t much of one. See [counting the shipping](/guides/comparing-eye-drop-prices-with-shipping).`,
          `The seller. Make sure you’re on the brand’s own site or a retailer you know, not a lookalike shop from an ad.`,
          `The label. A bargain on the wrong kind of drop is no bargain. Read the Uses and Warnings on the Drug Facts panel first.`,
          `The expiration dates, if you’re buying several bottles at once.`,
        ],
      },
      { h: 'Don’t stock up past what you’ll use' },
      {
        p: `A big holiday deal can tempt people to buy a year of anything. With eye drops, each bottle carries an expiration date on its carton, and bottles kept longer have more chances to sit in a hot car or a cold mailbox. Quell’s label says: {storage}. Buy what you’ll realistically use. Our guide on [how many bottles to order](/guides/how-many-bottles-to-order) can help you work out a number, and [do eye drops expire](/guides/do-eye-drops-expire) covers dates.`,
      },
      { h: 'If you’re buying for someone else' },
      {
        p: `Cyber Monday is a popular day for gift shopping. If you’re ordering Quell as a present, the timing question is about delivery, not price. Since there’s no promised delivery date, ordering earlier simply gives it more time. Put the recipient’s name and address in the shipping fields and your own email on the order. Before you give it, check the caution on the label: {warnings}. [Sending Quell as a gift](/guides/sending-quell-as-a-gift) covers the steps.`,
      },
      { h: 'Ordering now, the short version' },
      {
        list: [
          `Check out as a guest from the [home page](/#buy).`,
          `Choose your quantity; {freeBottles} or more bottles ship free.`,
          `Enter your shipping details and pay on the secure payment page.`,
          `Watch for the confirmation email, then the shipping email with tracking.`,
        ],
      },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
      },
      { h: 'What a deal can’t fix' },
      {
        p: `Whatever you pay, a lubricating drop is for everyday dryness. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses read: {uses}. If dryness keeps returning, an eye doctor can find the cause and decide what to do. The label is specific about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Is Quell cheaper on Cyber Monday?',
        a: `No. The price is the same every day, and there are no promo codes or holiday sales. Orders of {freeBottles} or more bottles ship free on any day, which is what lowers the cost per bottle.`,
      },
      {
        q: 'When is Cyber Monday 2026 for eye drop shopping?',
        a: `Monday, November 30, 2026. For Quell, ordering that day costs the same as ordering on Black Friday or any other day.`,
      },
      {
        q: 'Is it worth stocking up on eye drops during holiday sales?',
        a: `Only as far as you’ll use them before their expiration dates and can store them as labeled. A deal on bottles that expire or overheat in a car isn’t a saving.`,
      },
      {
        q: 'How do I compare eye drop deals online?',
        a: `Compare the cost per milliliter including shipping, check that you’re buying from the brand or a retailer you know, and read the Drug Facts panel to make sure it’s the kind of drop you want.`,
      },
    ],
  },
  {
    slug: 'is-there-a-christmas-shipping-cutoff-for-quell',
    title: 'Is there a Christmas shipping cutoff for Quell?',
    description:
      'Quell doesn’t publish a Christmas cutoff, because it doesn’t promise delivery dates. How to plan a holiday order, follow it, and what to do if it’s late.',
    category: 'ordering',
    addedOn: '2026-11-27',
    body: [
      {
        p: `No. Quell doesn’t publish a Christmas shipping cutoff, because we don’t promise delivery dates at any time of year. A cutoff would be a promise that an order placed before it arrives by December 25, and we can’t make that promise. The reliable plan is to order as early as you can, watch the tracking email, and have a backup if it’s still on its way on Christmas Eve.`,
      },
      { h: 'Why there’s no “order by” date' },
      {
        p: `Many stores post a last day to order for Christmas delivery. That date is a commitment about how fast their orders move and how fast the carrier delivers them. Quell’s [terms](/terms) say delivery estimates are only estimates, and that we’re not responsible for delays caused by the carrier. In December, with weather and holiday volume in play, a date we posted could easily turn out wrong. Rather than give a date that sounds firm and isn’t, we say plainly that there isn’t one.`,
      },
      { h: 'How early should I order Quell for Christmas?' },
      {
        p: `As early as you can. This guide was written on Black Friday, November 27, 2026, four weeks before Christmas on Friday, December 25. Ordering in late November or the first days of December gives a package far more room than ordering in the final week. Think about the recipient’s calendar too:`,
      },
      {
        list: [
          `Will they be home, or traveling for the holidays?`,
          `Does their building hold packages, or do they sit on a porch?`,
          `Is the address a workplace that closes between Christmas and New Year’s?`,
          `Would they rather open it on the day, or have it in hand beforehand to use?`,
        ],
      },
      {
        p: `If the gift is for someone who’ll be away, our guide on [shipping to a holiday address](/guides/shipping-to-a-holiday-address) covers sending it where they’ll be.`,
      },
      { h: 'What you’ll see after ordering' },
      {
        p: `Two emails tell you where an order stands. The confirmation arrives right after checkout with your order number. The shipping email comes later, when the order leaves Brentwood, Tennessee, and includes tracking. From that point, tracking is the most accurate picture of where the package is; our guide on [how to track your order](/guides/how-to-track-your-order) explains the steps, and [order status](/orders) lets you look it up.`,
      },
      {
        p: `If you’re sending a gift, use your own email on the order so the tracking comes to you, not to the person you’re surprising.`,
      },
      { h: 'Can I choose a Christmas delivery date?' },
      {
        p: `No. Checkout doesn’t offer a delivery date, and we can’t hold an order to arrive on a particular day. Our guide on [choosing a delivery date](/guides/can-i-choose-a-delivery-date-for-eye-drops) explains why. If you want it to arrive close to Christmas but not before, the safer choice is still to order early and keep it wrapped until the day.`,
      },
      {
        p: `Store it as the label says while you wait: {storage}. A gift in a garage, a car trunk or on a cold porch can fall outside that range.`,
      },
      { h: 'If it isn’t there by Christmas Eve' },
      {
        p: `Check the tracking first. Weather and December volume can slow packages, and tracking that’s still moving usually means it’s on its way. If you planned to give the bottle as a gift, give a note or a card that says it’s coming, and let it arrive after the day. Our guide on [Quell as a last-minute gift](/guides/quell-as-a-last-minute-gift) has more on that.`,
      },
      {
        p: `If tracking hasn’t changed for a while, see [tracking not updating](/guides/eye-drop-tracking-not-updating) for what to check. For anything else, call {phone} ({hours}) with your order number, or use our [contact page](/about#contact).`,
      },
      { h: 'If a late gift isn’t wanted anymore' },
      {
        p: `If a bottle arrives after the holiday and the person doesn’t want it, an unopened bottle can be refunded within {returnDays} days of delivery, and it doesn’t need to be sent back. If an order arrives damaged, incorrect or with a broken seal, we replace it within {returnDays} days. Our terms say original shipping isn’t refunded on an unopened-bottle refund.`,
      },
      { h: 'Before it’s opened' },
      {
        p: `Whoever opens the gift should read the carton’s Drug Facts first. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The caution reads: {warnings}. The directions say: {directions}. The label doesn’t give directions for contact lenses, children or use with other eye drops. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What is the last day to order Quell for Christmas?',
        a: `There isn’t one, because we don’t promise delivery dates. Order as early as you can and follow the tracking email; a package ordered in late November has far more room than one ordered the week of Christmas.`,
      },
      {
        q: 'Can Quell promise delivery by Christmas?',
        a: `No. Our terms say delivery estimates are estimates, and we don’t promise arrival by any date, including December 25. Ordering early is the only way to give a gift more time.`,
      },
      {
        q: 'What do I do if my Quell gift won’t arrive by Christmas?',
        a: `Check tracking first. If it’s still on its way, give a note saying it’s coming. If tracking hasn’t moved for a while, call {phone} ({hours}) with your order number.`,
      },
      {
        q: 'Can I have a Christmas gift tracked to my email instead of the recipient’s?',
        a: `Yes. Put the recipient’s name and address in the shipping fields and your own email on the order. The confirmation and tracking emails go to you.`,
      },
    ],
  },
  {
    slug: 'what-does-in-transit-mean-for-an-eye-drop-order',
    title: 'What does ‘in transit’ mean for an eye drop order?',
    description:
      '“In transit” means the carrier has your eye drops and they’re moving between facilities. What the status tells you, what it doesn’t, and when to call.',
    category: 'shipping',
    addedOn: '2026-11-27',
    body: [
      {
        p: `“In transit” on your eye drop tracking means the carrier has the package and it’s on its way between their facilities toward your area. It doesn’t give an arrival day. Quell’s own order page will show the order as Shipped during this stage. Tracking can sit on “in transit” for a while without anything being wrong; call us if it stops changing for several days or the address looks wrong.`,
      },
      { h: 'Where you’ll see “in transit”' },
      {
        p: `There are two places to follow a Quell order, and they use different words:`,
      },
      {
        list: [
          `Our [order status page](/orders), where you enter your order number and the email you checked out with. It shows our own statuses: Awaiting payment, Paid and preparing, Shipped, or Canceled.`,
          `The carrier’s tracking page, reached from the tracking number in your shipping email. That’s where “in transit” appears, along with the carrier’s other scans.`,
        ],
      },
      {
        p: `So once an order reads Shipped on our page, the detail about where it is lives on the carrier’s page. Our guide on [what your order status means](/guides/what-your-order-status-means) covers our side, and [how to track your order](/guides/how-to-track-your-order) covers finding the tracking link.`,
      },
      { h: 'What “in transit” tells you' },
      {
        p: `It tells you three useful things. The package left Brentwood, Tennessee, and the carrier has it. It’s been scanned at least once along the way. And it’s moving through the carrier’s network, usually from one sorting facility to another, toward a facility near you. That’s the long middle part of the trip, between “label created” or an acceptance scan and “out for delivery.”`,
      },
      {
        p: `If your tracking still says label created, our guide on [what “label created” means](/guides/what-does-label-created-mean-on-tracking) explains that earlier step. For the last step, see [what “out for delivery” means](/guides/what-out-for-delivery-means-for-an-eye-drop-order).`,
      },
      { h: 'What it doesn’t tell you' },
      {
        list: [
          `When the package will arrive. We don’t promise a delivery date, and an in-transit scan isn’t one either.`,
          `Exactly where the package is right now. Scans happen at facilities, not on the road between them.`,
          `Whether the package is late. A gap between scans is normal on a longer trip.`,
          `Anything about the condition of what’s inside.`,
        ],
      },
      { h: 'Why tracking can say “in transit” for days' },
      {
        p: `A package can travel a long way between scans, especially to an address far from Tennessee or a rural one. Weekends, holidays and winter weather add time, and in December the carriers handle far more packages than usual. Our [terms](/terms) say delivery estimates are estimates and that we’re not responsible for delays caused by the carrier, which is why we don’t put a date on it.`,
      },
      {
        p: `Seeing the same “in transit” line for a day or two usually means the package is between facilities. Our guide on [tracking that isn’t updating](/guides/eye-drop-tracking-not-updating) explains what to do when it stays put longer than that.`,
      },
      { h: 'What does “in transit, arriving late” mean?' },
      {
        p: `Some carriers add a note such as “arriving late” or “delayed” to an in-transit status. That’s the carrier telling you its own estimate has slipped, often because of weather, volume or a missed connection. The package is usually still moving. Keep an eye on the tracking, and if it hasn’t changed for several days after a delay notice, call us.`,
      },
      { h: 'Is my eye drop order okay while it’s in transit?' },
      {
        p: `Packages in transit spend time in trucks and sorting facilities, which can be hot in summer and cold in winter. Quell’s label says: {storage}. When the package arrives, bring it inside promptly and let it come to room temperature if it’s been sitting somewhere cold. Before you use a bottle, check the seal and look at the drops. The label describes the normal look: {milky}. And it lists one case not to use it: {doNotUse}. Our guide on [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) has more.`,
      },
      { h: 'When to contact us' },
      {
        p: `Call {phone} ({hours}) with your order number, or use our [contact page](/about#contact), if:`,
      },
      {
        list: [
          `Tracking hasn’t changed for several days and there’s no delay notice.`,
          `The tracking shows a city or state that doesn’t match your address.`,
          `You notice a mistake in the shipping address on your confirmation email.`,
          `The carrier marks it delivered but you can’t find it.`,
        ],
      },
      {
        p: `If it arrives damaged, incorrect or with a broken tamper seal, we replace it within {returnDays} days. If you no longer want an unopened bottle, we refund it within {returnDays} days of delivery, and you don’t have to send it back.`,
      },
      { h: 'While you wait for it' },
      {
        p: `If you’re waiting on a first bottle, a few habits help with dryness in the meantime: point car and desk vents away from your face, take regular screen breaks, and run a humidifier where you sleep in heating season. When the bottle arrives, read the carton’s Drug Facts before first use. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions are: {directions}. The caution reads: {warnings}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Next time, order before you’re down to the last few drops; with no promised delivery date, an early order is the simplest way to avoid a gap.`,
      },
    ],
    faq: [
      {
        q: 'What does in transit mean on my eye drop tracking?',
        a: `The carrier has the package and it’s moving through their network toward your area, usually between sorting facilities. It doesn’t give an arrival date.`,
      },
      {
        q: 'How long can a package stay in transit?',
        a: `It varies with distance, weekends, holidays and weather, and a day or two without a new scan is common. If tracking hasn’t changed for several days, call us with your order number.`,
      },
      {
        q: 'Why does Quell’s order page say Shipped when tracking says in transit?',
        a: `Our page shows our own statuses, and Shipped means the order has left us. The carrier’s tracking page shows where it is along the way, including in transit.`,
      },
      {
        q: 'Are eye drops okay sitting in a truck in transit?',
        a: `Quell’s label says: {storage}. Bring the package inside promptly when it arrives, let it reach room temperature if it’s been cold, and check the seal and appearance before first use.`,
      },
    ],
  },
  {
    slug: 'bought-the-wrong-eye-drops',
    title: 'Bought the wrong eye drops? What you can do',
    description:
      'Ordered Quell and realized it isn’t the drop you meant to buy? How refunds work for an unopened bottle, what counts as opened, and what to check first.',
    category: 'returns',
    addedOn: '2026-11-27',
    body: [
      {
        p: `If you bought Quell and it turns out to be the wrong eye drop for you, don’t open it. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t send it back; call {phone} with your order number. Opened bottles can’t be refunded. If we sent the wrong item, that’s different: we replace it at no charge within {returnDays} days.`,
      },
      { h: 'First, check whether it really is the wrong drop' },
      {
        p: `“Wrong” can mean a few different things, and the fix depends on which one it is. Before you request a refund, read the carton’s Drug Facts panel, which you can do without breaking the seal. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Compare that with what you were looking for.`,
      },
      {
        list: [
          `You wanted a drop for a different purpose. If the Uses line doesn’t match what you need, Quell isn’t that product, and an unopened bottle can be refunded.`,
          `You wear contact lenses. Quell’s label doesn’t give directions for contacts; ask your eye doctor before using it, and request a refund if they say not to.`,
          `You noticed the caution after ordering. It reads: {warnings}. If that applies to you, don’t open it.`,
          `A doctor or pharmacist gave you different advice. Follow it, and keep the bottle sealed if you’ll be asking for a refund.`,
          `The drop’s look surprised you. The label says {milky}, so a milky brown color is expected, not a sign of a wrong product.`,
        ],
      },
      { h: 'Our mistake or yours?' },
      {
        p: `Our [terms](/terms) handle these two situations differently. If you change your mind about an unopened bottle, including because you ordered the wrong kind of drop, we refund the product price within {returnDays} days of delivery, and original shipping isn’t refunded. If the order that arrived is incorrect, damaged, or has a broken tamper seal, we replace it at no charge if you contact us within {returnDays} days. Our guide on [what to do if your order is wrong](/guides/if-your-order-is-wrong) covers the second case.`,
      },
      { h: 'How to get a refund for an unopened bottle' },
      {
        list: [
          `Leave the bottle sealed. Reading the carton is fine; breaking the bottle’s seal makes it an opened bottle.`,
          `Find your order number in the confirmation email, or look it up on our [order status page](/orders).`,
          `Call {phone} ({hours}) within {returnDays} days of delivery and say which bottles you’d like refunded.`,
          `Keep the bottle. You don’t send it back, because a bottle that has left our control can’t be resold.`,
        ],
      },
      {
        p: `Our guide on [how to return an unopened bottle](/guides/how-to-return-an-unopened-bottle) has more on the steps, and [when the refund window starts](/guides/when-does-the-eye-drop-refund-window-start) explains how the {returnDays} days are counted.`,
      },
      { h: 'What if I already opened it?' },
      {
        p: `For health and safety reasons, opened eye drops can’t be refunded, returned or resold, according to our terms. That applies even if you only used it once. If you opened a bottle and it isn’t right for you, stop using it. If it caused discomfort, the label says: {stopUse} Our guide for when you’ve [opened Quell and didn’t like it](/guides/opened-quell-and-didnt-like-it) covers that situation.`,
      },
      { h: 'Ordered several bottles?' },
      {
        p: `If you ordered more than one and opened only one, the unopened bottles can still be refunded within {returnDays} days of delivery. Our guide on [returning the rest after opening one](/guides/opened-one-bottle-can-i-return-the-rest) has the details. If the problem was the number of bottles rather than the kind of drop, see [ordered too many bottles](/guides/ordered-too-many-bottles-of-eye-drops).`,
      },
      { h: 'If you bought it for someone else' },
      {
        p: `Gifts and orders for family are a common source of “wrong drop” calls: a parent turns out to use a prescribed drop, or wears contacts, or has an egg allergy. As long as the bottle is unopened and it’s within {returnDays} days of delivery, the person who placed the order can call with the order number. Our guide for when a [parent can’t use the eye drops you sent](/guides/parent-cant-use-the-eye-drops-i-sent) goes into that case.`,
      },
      { h: 'Finding the right drop next time' },
      {
        p: `Before buying any eye drop, read its Drug Facts panel. Quell’s is on our [Drug Facts page](/drug-facts). Check the Uses, the Warnings, the Directions and the inactive ingredients. Quell’s directions are: {directions}. If you’re unsure what kind of drop fits your eyes, an eye doctor can find the cause of the dryness and decide what to do, which is a better starting point than trial and error. A pharmacist can also explain the differences between products on the shelf.`,
      },
      {
        p: `If you have questions about Quell before ordering again, call {phone} ({hours}) or use our [contact page](/about#contact).`,
      },
    ],
    faq: [
      {
        q: 'Can I return eye drops if I bought the wrong kind?',
        a: `For Quell, yes, if the bottle is unopened. We refund the product price within {returnDays} days of delivery, and you don’t send it back. Original shipping isn’t refunded, and opened bottles can’t be refunded.`,
      },
      {
        q: 'Does reading the box count as opening eye drops?',
        a: `No. You can read the carton and its Drug Facts panel without opening the bottle. Breaking the bottle’s seal is what makes it an opened bottle.`,
      },
      {
        q: 'What if Quell sent me the wrong item?',
        a: `That’s an incorrect order, and we replace it at no charge if you contact us within {returnDays} days. Call {phone} with your order number.`,
      },
      {
        q: 'Who can request a refund on eye drops bought as a gift?',
        a: `The person who placed the order, with the order number, as long as the bottle is unopened and it’s within {returnDays} days of delivery.`,
      },
    ],
  },
]
