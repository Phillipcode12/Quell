import type { Guide } from '@/lib/guide-types'
export const DAILY_20261116_B: Guide[] = [
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-birmingham-al:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013876.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013876.csv
   *   (BIRMINGHAM AP, elev 187.5 m: annual precip 56.62 in; Mar 5.66 wettest,
   *   Oct 3.34 driest; annual snow 1.4 in; Jul high 91.0 F, Aug 90.6 F; Jan high
   *   54.5 F, Jan low 34.9 F; 65.0 days at or above 90 F; 47.0 nights at or below
   *   32 F; 1.2 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BIRMINGHAM, AL, WBAN 13876: Apr 83/50, Mar 80/52, Oct 86/52, Aug 88/57,
   *   Jan 81/60, annual 84/55, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BIRMINGHAM: Mar 3.4 highest, Feb 3.3, Aug 2.1 lowest; Huntsville and
   *   Mobile higher in Jan to Apr)
   * Elevation is the NOAA station elevation, converted (187.5 m is about 615 ft).
   */
  {
    slug: 'dry-eye-relief-birmingham-al',
    title: 'Dry eye relief in Birmingham, Alabama',
    description:
      'Birmingham gets over 56 inches of rain a year, yet April afternoons fall to 50 percent humidity. What NOAA’s numbers mean for dry eyes, season by season.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Birmingham means watching two seasons more than the rain gauge. Spring afternoons dip to about 50 percent humidity in NOAA’s records, and some 65 days a year reach 90°F, so air conditioning runs for months. Keep vents off your face, blink fully at screens, use a lubricating drop exactly as its label says, and see an eye doctor if dryness keeps returning or comes with pain.`,
      },
      { h: 'What NOAA’s numbers say about Birmingham' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for the Birmingham airport station, at about 615 feet on the east side of the city, describe one of the wetter places in the country:`,
      },
      {
        list: [
          `About 56.62 inches of precipitation in a normal year, with March the wettest month at 5.66 inches.`,
          `October is the driest month, at 3.34 inches.`,
          `Normal July highs reach 91.0°F, and about 65 days a year hit 90°F or more.`,
          `January highs average 54.5°F, with lows near 34.9°F; roughly 47 nights a year reach freezing.`,
          `Snow is rare: about 1.4 inches in a normal year, and only about one day a year stays at or below freezing.`,
        ],
      },
      {
        p: `With that much rain, it’s fair to ask why anyone in Jefferson County would have dry eyes at all. The answer sits in the hours of the day and in the buildings people spend them in.`,
      },
      { h: 'Why are my eyes dry in Birmingham if it’s so humid?' },
      {
        p: `Humidity in Birmingham swings hard between dawn and mid-afternoon. NOAA’s relative humidity table puts April mornings at 83 percent and April afternoons at 50, the lowest afternoon figure of the year. March (52) and October (52) come close behind. Those are the afternoons when a walk around Railroad Park or a climb to Vulcan on Red Mountain feels pleasant, and they’re also when the air pulls moisture from the surface of the eye fastest.`,
      },
      {
        p: `Your tears sit in three thin layers: an oily outer film, a watery middle and a mucus layer against the eye. Dry, moving air speeds evaporation from that outer film, and blinking is what spreads a fresh coat. A breezy spring afternoon does both jobs against you, because the wind dries the film and squinting into it makes blinks shallower. NOAA’s wind table shows March as Birmingham’s breeziest month and August its calmest.`,
      },
      { h: 'Sixty-five days of air conditioning' },
      {
        p: `From June into September, the outdoor air is anything but dry. August mornings average 88 percent humidity. The dryness moves indoors, where air conditioning pulls moisture out of the air as it cools it and blows the result across desks, car seats and hospital hallways. Birmingham’s medical centers, offices downtown and long commutes on I-459 and US-280 all keep people in that cooled air for most of the day.`,
      },
      {
        list: [
          `Angle car vents toward your chest or the windshield, not your face.`,
          `At a desk, check where the supply register blows; a small deflector or a moved chair can keep the stream off your eyes.`,
          `Set a timer to look away from the screen now and then and finish a few slow, complete blinks.`,
          `Keep the bottle out of a parked car on a 91°F afternoon. The label’s storage line is below.`,
        ],
      },
      { h: 'Mild winters, still a heating season' },
      {
        p: `Birmingham winters are short, but the furnace or heat pump still runs. About 47 nights a year fall to freezing, and warming cold air indoors lowers its relative humidity. A bedroom humidifier helps on the coldest weeks of December and January, and so does keeping the thermostat a few degrees lower at night. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the indoor side in more detail.`,
      },
      { h: 'Game days, trails and yard work' },
      {
        p: `Fall football at Legion Field or a Saturday at Oak Mountain State Park lands in October, the driest month on the rain gauge and one of the lowest for afternoon humidity. Wraparound sunglasses cut wind and glare together. Pollen season in spring brings its own itch and watering; if your eyes itch more than they feel dry, that’s worth mentioning to an eye doctor rather than guessing. Leaf blowers and mowers throw dust in the same months, so wear safety glasses for the yard.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Its directions read: {directions}. And to keep the tip clean: {tip}.`,
      },
      {
        p: `The panel also says: {warnings}. For storage: {storage}. A glove box in a Birmingham July can run well past the top of that range, so carry the bottle in a bag that comes inside with you. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Birmingham' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Birmingham, Hoover, Homewood, Vestavia Hills and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so reorder before you run low. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Birmingham page](/eye-drops/birmingham-al) and the [Alabama page](/eye-drops/state/alabama) for local details.`,
      },
      { h: 'When to see an eye doctor in Birmingham' },
      {
        p: `A drop is for everyday dryness, not for working out what’s wrong. The panel’s stop-use guidance reads: {stopUse} Eye pain, a change in vision, light sensitivity, or dryness that doesn’t ease all belong with an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which signs shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the least humid month in Birmingham, Alabama?',
        a: `In NOAA’s relative humidity table for the Birmingham airport, April has the lowest afternoon average at 50 percent. March and October follow at 52, while August mornings run as high as 88.`,
      },
      {
        q: 'Does it snow much in Birmingham?',
        a: `Not much. NOAA’s 1991 to 2020 normals put Birmingham’s yearly snowfall at about 1.4 inches, and only about one day a year has a high that never gets above freezing.`,
      },
      {
        q: 'Why do my eyes feel dry in Birmingham offices in summer?',
        a: `Air conditioning dries the air as it cools it, and a vent blowing toward your face speeds evaporation from the tear film. Long screen sessions slow your blinking on top of that, so redirect the airflow and take regular breaks.`,
      },
      {
        q: 'Can I get Quell delivered in Birmingham, AL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Birmingham and its suburbs, with tracking by email. No delivery date is promised, so order before your current bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-little-rock-ar:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013963.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013963.csv
   *   (LITTLE ROCK AP ADAMS FLD, elev 78.6 m: annual precip 50.42 in; Apr 5.59
   *   wettest, Sep 3.01 driest, Aug 3.16, Jul 3.33; annual snow 3.8 in, Feb 1.6;
   *   Jul high 91.7 F, Aug 91.5 F; Jan high 50.5 F, Jan low 30.9 F; 76.4 days at
   *   or above 90 F; 50.1 nights at or below 32 F; 3.1 days with a high at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LITTLE ROCK, AR, WBAN 13963: Oct 86/53, Apr 82/55, Mar 79/56, Aug 88/55,
   *   Jan 80/61, Dec 81/61, annual 84/57)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LITTLE ROCK: Mar 3.8 highest, Apr 3.7, Aug 2.5 lowest)
   * Elevation is the NOAA station elevation, converted (78.6 m is about 258 ft).
   */
  {
    slug: 'dry-eye-relief-little-rock-ar',
    title: 'Dry eye relief in Little Rock, Arkansas',
    description:
      'Little Rock tops 90°F on about 76 days a year, and October afternoons drop to 53 percent humidity. A season-by-season guide to dry eyes in central Arkansas.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Little Rock, dry eyes usually come from air conditioning in a long, hot summer, a breezy March, and a dry stretch in early fall. NOAA’s records show about 76 days a year at 90°F or above, and October afternoons averaging 53 percent humidity. Keep vents and wind off your eyes, blink fully at screens, follow your drop’s label, and take lasting dryness or any pain to an eye doctor.`,
      },
      { h: 'Little Rock’s climate in numbers' },
      {
        p: `The figures here come from NOAA’s 1991 to 2020 normals for Little Rock’s Adams Field airport station, which sits at about 258 feet beside the Arkansas River, east of downtown.`,
      },
      {
        list: [
          `Normal yearly precipitation is 50.42 inches. April is wettest at 5.59 inches, and September driest at 3.01.`,
          `July and August are close to the same heat: normal highs of 91.7°F and 91.5°F.`,
          `Around 76 days a year reach 90°F or more.`,
          `January highs average 50.5°F and lows 30.9°F, with about 50 freezing nights a year.`,
          `Normal snowfall is 3.8 inches, most of it in February (1.6 inches).`,
        ],
      },
      { h: 'Late summer and early fall: the dry stretch' },
      {
        p: `Rainfall in Little Rock falls off after spring. July (3.33 inches), August (3.16) and September (3.01) are the three driest months of the year on the rain gauge. Afternoon humidity bottoms out a little later: NOAA’s table puts October at 53 percent in the afternoon, against 86 percent at dawn. That’s the window for a run on the Arkansas River Trail, a ride across the Big Dam Bridge or a hike up Pinnacle Mountain, and the window when your eyes lose moisture fastest outside.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the bridge and the summit, where wind and glare off the river come together.`,
          `Take the long walk or ride in the morning, when humidity runs much higher.`,
          `Pause in the shade for a few slow, full blinks; squinting into the sun keeps them shallow.`,
        ],
      },
      { h: 'Why are my eyes dry at work in Little Rock?' },
      {
        p: `Seventy-six days of 90°F heat means the air conditioner rarely rests from late May into September. Cooling pulls water out of indoor air, and a vent aimed at your desk or your driver’s seat moves that drier air across the eye. Long hours at a screen add to it, since people blink less often while they concentrate. The tear film’s outer oil layer slows evaporation from the watery layer below it; dry, moving air works against that from both directions.`,
      },
      {
        list: [
          `Point the car’s vents at the windshield or your chest for the drive on I-630 or I-430.`,
          `At the office, move your chair or add a deflector if a ceiling register blows on you.`,
          `Every so often, look across the room for a moment and blink completely.`,
          `If you work outdoors and come into air conditioning, the switch from humid air to cold, dry air is when your eyes may feel it most.`,
        ],
      },
      { h: 'March winds and winter heat' },
      {
        p: `NOAA’s wind table shows March as Little Rock’s windiest month, with April close behind and August the calmest. Spring wind carries pollen and dust, and if your eyes itch rather than feel dry, ask an eye doctor what’s going on. Winter is mild by northern standards, but about 50 freezing nights a year keep the furnace running from December into February. Heated indoor air is drier, so a humidifier in the bedroom and a slightly lower thermostat at night are easy fixes. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why moving air matters so much.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to the Drug Facts panel, its Uses are: {uses}. The directions: {directions}. One handling line matters every time: {tip}.`,
      },
      {
        p: `The warnings section reads: {warnings}. Storage: {storage}. A car parked at the River Market on an August afternoon heats well beyond that, so keep the bottle in a bag you carry inside. You can read the whole panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Little Rock' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Little Rock, North Little Rock, Conway, Benton and anywhere else in the US. There’s no account needed, shipping is {shipping}, and it’s free on {freeBottles} or more bottles. You’ll get tracking by email, but delivery dates aren’t promised, so order while you still have some left. Unopened bottles are refundable within {returnDays} days of delivery without sending them back. The [Little Rock page](/eye-drops/little-rock-ar) and the [Arkansas page](/eye-drops/state/arkansas) have more.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `Persistent dryness has more than one possible cause, and only an eye exam sorts them out. The panel’s stop-use guidance: {stopUse} Pain, blurred vision that doesn’t clear, or sensitivity to light should go to an eye doctor promptly. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Little Rock?',
        a: `By rainfall, September is driest in NOAA’s 1991 to 2020 normals, at 3.01 inches. By afternoon humidity, October is lowest, averaging 53 percent.`,
      },
      {
        q: 'How many 90 degree days does Little Rock get?',
        a: `NOAA’s normals for the Adams Field station count about 76 days a year at 90°F or higher, with normal July highs of 91.7°F.`,
      },
      {
        q: 'Is Little Rock windy in the spring?',
        a: `March is Little Rock’s windiest month in NOAA’s wind table, with April close behind. August is the calmest month of the year.`,
      },
      {
        q: 'Does Quell ship to Little Rock, Arkansas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Little Rock and every other US address, with tracking sent by email. Delivery dates aren’t promised, so leave some time before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-jackson-ms:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003940.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003940.csv
   *   (JACKSON INTL AP, elev 90.2 m: annual precip 57.35 in; Apr 5.84 wettest,
   *   Sep 3.48 driest, Oct 3.80; annual snow 1.0 in; Jul high 92.1 F, Aug 92.2 F;
   *   Jan high 57.4 F, Jan low 36.6 F; 84.7 days at or above 90 F; 39.6 nights at
   *   or below 32 F; 0.8 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (JACKSON, MS, WBAN 03940: Jul/Aug/Sep mornings 93; Oct 92/53, Apr 89/54,
   *   Jan 85/62, annual 90/57)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (JACKSON, MS: Feb and Mar 3.4 highest, Aug 2.0 lowest)
   * Elevation is the NOAA station elevation, converted (90.2 m is about 296 ft).
   * The station is the international airport east of the city, across the Pearl
   * River in Rankin County.
   */
  {
    slug: 'dry-eye-relief-jackson-ms',
    title: 'Dry eye relief in Jackson, Mississippi',
    description:
      'Jackson mornings average 93 percent humidity in late summer, yet eyes still dry out. How air conditioning, fall afternoons and screens affect your tear film.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Jackson’s outdoor air is humid for much of the year, so dry eyes there are mostly an indoor story. About 85 days a year reach 90°F, which keeps air conditioning running from spring well into fall, and October afternoons drop to 53 percent humidity. Aim vents away from your face, blink fully during screen work, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'How humid is Jackson, Mississippi?' },
      {
        p: `NOAA’s relative humidity table for the Jackson airport station puts July, August and September mornings at 93 percent, and the yearly morning average at 90. Afternoons are lower but still moist by most standards, averaging 57 percent over the year. The station is Jackson’s international airport, at about 296 feet on the Rankin County side of the Pearl River, east of the city.`,
      },
      {
        list: [
          `Normal yearly precipitation: 57.35 inches, the wettest month April (5.84 inches).`,
          `Driest months: September (3.48 inches) and October (3.80).`,
          `Normal highs of 92.1°F in July and 92.2°F in August.`,
          `About 84.7 days a year at 90°F or above.`,
          `January highs near 57.4°F; about 40 nights a year reach freezing, and snow averages around an inch.`,
        ],
      },
      { h: 'Why do my eyes feel dry when it’s so humid?' },
      {
        p: `Because most of a Jackson summer day is spent out of that humid air. Homes, offices, stores and cars are cooled for months, and air conditioning removes moisture as it lowers the temperature. Step from a 93 percent morning into an office with a vent over your desk, and your eyes go from soaked air to dry, moving air in seconds. The tear film’s oily outer layer slows evaporation, but a steady draft and a screen that slows your blinking both work against it.`,
      },
      {
        list: [
          `Turn car vents toward the windshield or your hands on the commute along I-55 or I-20.`,
          `Ask facilities about a deflector if an office register blows straight down on your chair.`,
          `Put the monitor slightly below eye level so your lids cover more of the eye.`,
          `Give your eyes a short break from close work every so often and finish each blink.`,
        ],
      },
      { h: 'October and April: the drier afternoons' },
      {
        p: `Jackson’s lowest afternoon humidity comes in October (53 percent) and April (54). Those are the months people get outside: the State Fair in October, walks at LeFleur’s Bluff, fishing and boating on the Ross Barnett Reservoir, or a drive up the Natchez Trace Parkway with the windows down. Wind off open water and an open car window both speed evaporation. Sunglasses that wrap around the sides help on the reservoir, and a window cracked partway beats one wide open on the Trace.`,
      },
      {
        p: `NOAA’s wind table also shows February and March as Jackson’s windiest months, and August as its calmest, so the breezy months come right before the spring dip in humidity.`,
      },
      { h: 'Short winters with the heat still on' },
      {
        p: `Freezing nights average about 40 a year, and almost every winter day climbs above freezing. Even so, heating systems run through December and January, and heated air holds less relative humidity. A small humidifier in the bedroom, a thermostat set a few degrees lower at night and a fan that isn’t aimed at the bed all help. [Waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) has a fuller bedroom routine.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, as printed: {uses}. The directions: {directions}. Before each use, remember this line: {tip}.`,
      },
      {
        p: `Warnings: {warnings}. Storage: {storage}. A car on a sunny August afternoon in Jackson gets much hotter than that range, so keep the bottle with you rather than in the console. The complete panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Jackson' },
      {
        p: `We ship from Brentwood, Tennessee, to Jackson, Ridgeland, Madison, Brandon, Clinton and any other US address. Check out as a guest; shipping is {shipping}, or free with {freeBottles} or more bottles. Tracking arrives by email, though there’s no promised delivery date, so reorder before you’re out. An unopened bottle can be refunded within {returnDays} days of delivery, and you keep it. Visit the [Jackson page](/eye-drops/jackson-ms) or the [Mississippi page](/eye-drops/state/mississippi) for more.`,
      },
      { h: 'When to have your eyes checked' },
      {
        p: `If drops and a better-aimed vent don’t make a difference, the cause may be something only an eye exam finds. Quell’s panel says: {stopUse} Pain, vision changes and sensitivity to light should be seen soon. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through each one.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Mississippi when it’s so humid?',
        a: `Most of the day is spent in air-conditioned rooms and cars, and air conditioning dries the air as it cools it. A vent blowing across your face and long screen sessions add to the evaporation.`,
      },
      {
        q: 'How hot does Jackson, MS get in summer?',
        a: `NOAA’s 1991 to 2020 normals for the Jackson airport show normal highs of 92.1°F in July and 92.2°F in August, with about 85 days a year at 90°F or above.`,
      },
      {
        q: 'What is the least humid month in Jackson, Mississippi?',
        a: `October has the lowest afternoon humidity in NOAA’s table for the Jackson airport, at 53 percent, with April close behind at 54.`,
      },
      {
        q: 'Can I order Quell eye drops in Jackson, MS?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Jackson and the surrounding area, with tracking by email and guest checkout. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-cincinnati-oh:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093814.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093814.csv
   *   (CINCINNATI NORTHERN KY AP, KY, elev 264.9 m: annual precip 45.26 in; Jun
   *   4.75 wettest, Sep 3.11 driest; annual snow 23.3 in, Jan 7.7, Feb 6.7; Jan
   *   high 39.6 F, Jan low 23.1 F; Jul high 86.0 F; 22.1 days at or above 90 F;
   *   99.8 nights at or below 32 F; 22.3 days with a high at or below 32 F; 2.5
   *   nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (CINCINNATI, OH, WBAN 93814: Jan 80/68, Dec 81/68, Apr 75/53, May 79/55,
   *   Sep 87/55, annual 81/59)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (CINCINNATI: Mar 4.5 highest, Feb 4.4, Aug 2.8 lowest; Dayton higher,
   *   Columbus lower in every month)
   * Elevation is the NOAA station elevation, converted (264.9 m is about 869 ft).
   * The station is the Cincinnati/Northern Kentucky airport in Boone County,
   * Kentucky, across the Ohio River from the city; the guide says so.
   */
  {
    slug: 'dry-eye-relief-cincinnati-oh',
    title: 'Dry eye relief in Cincinnati, Ohio',
    description:
      'About 100 freezing nights a year keep Cincinnati’s furnaces busy, and April afternoons fall to 53 percent humidity. NOAA’s numbers and dry eye tips.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Cincinnati, dry eyes follow the furnace and the spring wind. NOAA’s records show about 100 nights a year at or below freezing, so heating runs from November into March, and April afternoons fall to 53 percent humidity in the breeziest stretch of the year. Keep heated air and wind off your eyes, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or lasting dryness.`,
      },
      { h: 'A note on where the numbers come from' },
      {
        p: `NOAA’s official weather station for Cincinnati isn’t in Ohio. It’s at the Cincinnati/Northern Kentucky airport, in Boone County, Kentucky, southwest of downtown across the Ohio River, at about 869 feet. The figures below are NOAA’s 1991 to 2020 normals for that station, and the river valley in town can run a little different, especially on still winter mornings.`,
      },
      {
        list: [
          `Normal yearly precipitation is 45.26 inches, with June wettest (4.75) and September driest (3.11).`,
          `Snowfall averages 23.3 inches, with January (7.7) and February (6.7) the snowiest months.`,
          `January highs average 39.6°F and lows 23.1°F.`,
          `About 22 days a year never climb above freezing, and two or three nights a year fall to zero or lower.`,
          `Summer is warm rather than scorching: normal July highs of 86.0°F, and about 22 days a year at 90°F.`,
        ],
      },
      { h: 'Why are my eyes so dry in Cincinnati in winter?' },
      {
        p: `Outdoors, a Cincinnati winter is damp. NOAA’s humidity table puts January at 80 percent in the morning and 68 in the afternoon. The trouble starts when that cold air is pulled inside and warmed to 70°F. Warm air can hold much more water than cold air, so heating it without adding moisture drops its relative humidity sharply. Forced-air heat in older homes in Clifton, Price Hill or Northside, and in offices downtown, then blows that air around the room.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Turn the thermostat down a few degrees at night.`,
          `Move a chair or desk away from floor registers and space heaters.`,
          `If your eyes feel driest on waking, check whether a ceiling fan or vent runs over the bed.`,
        ],
      },
      { h: 'March winds and Opening Day' },
      {
        p: `NOAA’s wind table shows March as the windiest month at the airport station, with February and April close behind, while August is the calmest. That puts the breezy season right on top of the Reds’ Opening Day parade and the first games on the riverfront. April afternoons, at 53 percent humidity, are also the driest of the year. Wind across the river and open seating at the ballpark speed evaporation from the tear film’s outer oil layer, and squinting into the wind keeps blinks shallow. Wraparound sunglasses and a brimmed cap make a real difference on those days.`,
      },
      { h: 'Hills, river walks and game days' },
      {
        p: `A climb up the Mount Adams steps, a walk through Eden Park or a loop across the Roebling Suspension Bridge and back through Smale Riverfront Park all put your face into the wind off the Ohio. Late-season football on the riverfront brings cold wind and stadium lights for hours. Carry the bottle in an inside pocket at a December game; the label’s storage range is printed below. [Dry eyes at an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) covers the stadium side in detail.`,
      },
      { h: 'Screens at work, all winter long' },
      {
        p: `Cincinnati’s big office employers keep a lot of people at desks through the heating season. Concentrating on a screen cuts blinking, and each skipped blink leaves the tear film to thin in heated air. Set the monitor a little below eye level, take short breaks to look across the room, and finish each blink rather than half-closing your eyes.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, from the Drug Facts panel: {uses}. Directions: {directions}. And a handling note: {tip}.`,
      },
      {
        p: `The panel’s warning: {warnings}. Storage: {storage}. A car at a Northern Kentucky park-and-ride on a January morning can drop well below that range, so keep the bottle in a pocket or bag that comes inside. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Cincinnati' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Cincinnati, Mason, West Chester, Covington, Florence and anywhere else in the US. Checkout is guest-only, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email; there’s no promised delivery date, so order before your bottle runs dry. Unopened bottles can be refunded within {returnDays} days of delivery without being returned. The [Cincinnati page](/eye-drops/cincinnati-oh) and the [Ohio page](/eye-drops/state/ohio) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps coming back, or that drops don’t touch, deserves an exam. The panel says: {stopUse} Pain, vision changes or sensitivity to light shouldn’t wait. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains why.`,
      },
    ],
    faq: [
      {
        q: 'Is the Cincinnati airport weather station in Kentucky?',
        a: `Yes. NOAA’s climate normals for Cincinnati come from the Cincinnati/Northern Kentucky airport in Boone County, Kentucky, across the Ohio River from the city, at about 869 feet.`,
      },
      {
        q: 'How cold does Cincinnati get in January?',
        a: `NOAA’s 1991 to 2020 normals put January highs at 39.6°F and lows at 23.1°F, with about 100 freezing nights over a whole year.`,
      },
      {
        q: 'What is the windiest month in Cincinnati?',
        a: `March, in NOAA’s wind table for the airport station, with February and April close behind. August is the calmest month.`,
      },
      {
        q: 'Can I get Quell delivered to Cincinnati or Northern Kentucky?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Cincinnati and to Northern Kentucky addresses alike, with tracking by email. Delivery dates aren’t promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-toledo-oh:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094830.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094830.csv
   *   (TOLEDO EXPRESS AP, OH, elev 203.9 m: annual precip 35.01 in; May 3.82
   *   wettest, Feb 2.28 driest; annual snow 37.4 in, Jan 12.3, Feb 10.2, Dec 6.5;
   *   Jan high 34.7 F, Jan low 20.3 F; Jul high 86.5 F; 18.7 days at or above
   *   90 F; 123.1 nights at or below 32 F; 41.2 days with a high at or below
   *   32 F; 5.5 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (TOLEDO, OH, WBAN 94830: May 78/52, Apr 78/53, Jan 81/70, Dec 83/72,
   *   annual 83/59)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (TOLEDO: Jan 4.6 highest; Feb, Mar, Apr 4.5; Aug 2.7 lowest)
   * Elevation is the NOAA station elevation, converted (203.9 m is about 669 ft).
   * The station is Toledo Express Airport, west of the city near Swanton.
   */
  {
    slug: 'dry-eye-relief-toledo-oh',
    title: 'Dry eye relief in Toledo, Ohio',
    description:
      'Toledo averages 37 inches of snow and about 41 days that never top freezing. How Lake Erie winters, spring wind and furnace heat dry out your eyes.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `For dry eye relief in Toledo, plan around a long heating season and windy months on the lake plain. NOAA’s records show about 123 freezing nights and 41 days that never get above 32°F, and January as the windiest month. Humidify the bedroom, keep vents and wind off your face, blink fully at screens, follow your drop’s label, and see an eye doctor if dryness persists or hurts.`,
      },
      { h: 'Toledo’s weather by the numbers' },
      {
        p: `The figures come from NOAA’s 1991 to 2020 normals for Toledo Express Airport, which sits at about 669 feet west of the city near Swanton, closer to the Oak Openings than to Lake Erie. Lakeside neighborhoods can be a bit milder or windier than the airport on a given day.`,
      },
      {
        list: [
          `Yearly precipitation: about 35.01 inches, with May wettest (3.82) and February driest (2.28).`,
          `Normal snowfall: 37.4 inches, led by January at 12.3 and February at 10.2.`,
          `January highs average 34.7°F and lows 20.3°F.`,
          `About 123 nights a year reach freezing, and five or six fall to zero or below.`,
          `Normal July highs are 86.5°F, with about 19 days a year at 90°F.`,
        ],
      },
      { h: 'Why do Toledo winters dry out your eyes?' },
      {
        p: `Not because the outside air is dry. NOAA’s humidity table has December afternoons at 72 percent and January at 70, among the dampest afternoons of the year. The dryness is made indoors. When freezing air leaks into a house and the furnace warms it to room temperature, its relative humidity drops a long way, and forced-air vents blow it across the room. Forty-one days a year that stay below freezing means a furnace that hardly shuts off from December through February.`,
      },
      {
        list: [
          `Run a humidifier in the room where you sleep, and keep it clean.`,
          `Lower the thermostat a few degrees while you sleep.`,
          `Point floor registers away from the couch and the bed.`,
          `Skip the space heater aimed at your feet and face while you work.`,
        ],
      },
      { h: 'Wind off the lake plain' },
      {
        p: `Toledo’s land is flat, and NOAA’s wind table shows it: January is the windiest month at the airport, February through April are nearly as breezy, and August is the calmest. Waiting for a bus downtown, walking across the University of Toledo campus or clearing a driveway in January means cold wind straight into the eyes. Cold wind tends to make eyes water at first, and once you’re back in heated air they can feel dry and gritty. Wraparound glasses or ski goggles for snow clearing cut the wind more than you’d expect. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains the watering-then-dry pattern.`,
      },
      { h: 'Spring on the Maumee' },
      {
        p: `The driest afternoons of the year arrive in spring, not winter: May averages 52 percent and April 53. That’s also when anglers line the Maumee River for the spring walleye run, standing in moving water with wind and glare off the surface for hours. Polarized wraparound sunglasses help with both. Keep the bottle in an inner pocket rather than a tackle box sitting in the sun or the cold, and wash or wipe your hands before using it.`,
      },
      { h: 'Screens, shifts and the drive home' },
      {
        p: `Toledo’s factory floors, hospitals and offices run long shifts, many of them through the darkest months. Staring at a screen or a line slows blinking. Look away now and then and finish a few full blinks. On the drive home on I-475 or the Anthony Wayne Trail, aim the heater at the windshield, not at your face; [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more on car heat.`,
      },
      { h: 'Quell’s label, as printed' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. Directions: {directions}. Also printed: {tip}.`,
      },
      {
        p: `There’s a warning to read before you start: {warnings}. On storage: {storage}. A car left at the airport lot on a January night falls far below that range, so carry the bottle inside with you. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Toledo' },
      {
        p: `We ship from Brentwood, Tennessee, to Toledo, Sylvania, Perrysburg, Maumee, Oregon and every other US address. You check out as a guest, pay {shipping} for shipping, or nothing on {freeBottles} or more bottles. Tracking comes by email, though no delivery date is promised, so reorder with some left. Unopened bottles are refundable within {returnDays} days of delivery, and you don’t send them back. See the [Toledo page](/eye-drops/toledo-oh) and the [Ohio page](/eye-drops/state/ohio).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Lubricating drops are for ordinary dryness. If yours keeps coming back, an eye doctor can find out why. The panel’s stop-use guidance: {stopUse} Pain, vision changes and light sensitivity need prompt attention; our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the rest.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Toledo get a year?',
        a: `About 37.4 inches in NOAA’s 1991 to 2020 normals for Toledo Express Airport, with January the snowiest month at 12.3 inches.`,
      },
      {
        q: 'What is the windiest month in Toledo, Ohio?',
        a: `January, in NOAA’s wind table for the airport station, with February through April close behind. August is the calmest month of the year.`,
      },
      {
        q: 'Why do my eyes feel dry in Toledo when it’s damp outside?',
        a: `Winter air outside is damp, but heating it indoors lowers its relative humidity sharply. Forced-air vents then blow that dry air across your face, which speeds evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Toledo, Ohio?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Toledo and nearby towns like Perrysburg and Sylvania, with tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-grand-rapids-mi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094860.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094860.csv
   *   (GRAND RAPIDS, MI, elev 237.1 m: annual precip 39.40 in; Oct 4.02 and May
   *   4.00 wettest, Feb 2.12 driest; annual snow 77.6 in, Jan 22.6, Dec 20.8,
   *   Feb 17.2, Nov 7.1; Jan high 31.0 F, Jan low 18.6 F; Jul high 83.1 F; 9.9
   *   days at or above 90 F; 133.1 nights at or below 32 F; 50.5 days with a
   *   high at or below 32 F; 4.4 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (GRAND RAPIDS, MI, WBAN 94860: Dec 83/74, Jan 82/73, May 77/53, Apr 77/55,
   *   annual 82/62)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (GRAND RAPIDS: Jan, Feb, Apr 4.8 highest; Aug 3.3 lowest)
   * Elevation is the NOAA station elevation, converted (237.1 m is about 778 ft).
   * The station is the city's international airport, southeast of downtown.
   */
  {
    slug: 'dry-eye-relief-grand-rapids-mi',
    title: 'Dry eye relief in Grand Rapids, Michigan',
    description:
      'Grand Rapids averages nearly 78 inches of snow and gray, damp winters, yet eyes still dry out indoors. NOAA’s numbers and a practical routine for relief.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Grand Rapids, dry eyes come mostly from what the snow belt does to indoor air. NOAA’s records show about 78 inches of snow and 50 days a year that stay below freezing, so furnaces run for months, while May afternoons drop to 53 percent humidity. Humidify where you sleep, keep heat and wind off your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor if it persists.`,
      },
      { h: 'Grand Rapids weather, from NOAA' },
      {
        p: `These are NOAA’s 1991 to 2020 normals for the Grand Rapids airport station, southeast of downtown at about 778 feet. Lake Michigan lies a short drive to the west, and its moisture shapes the winters here.`,
      },
      {
        list: [
          `About 77.6 inches of snow in a normal year: 22.6 in January, 20.8 in December and 17.2 in February.`,
          `Yearly precipitation of 39.40 inches, with October (4.02) and May (4.00) the wettest months and February (2.12) the driest.`,
          `January highs average 31.0°F, below freezing, and lows 18.6°F.`,
          `About 133 freezing nights and 50 days a year when the high stays at or below 32°F.`,
          `Summers are mild: normal July highs of 83.1°F and about ten days a year at 90°F.`,
        ],
      },
      { h: 'Lake-effect winters: damp outside, dry inside' },
      {
        p: `December and January in Grand Rapids are gray and moist. NOAA’s humidity table puts December afternoons at 74 percent and January at 73, the dampest afternoons of the year, as cold air crossing Lake Michigan picks up moisture and drops it as snow. None of that helps indoors. Warm that air from 20°F to 70°F and its relative humidity falls steeply, and the furnace blows the result through every room. A January high below freezing means the heat rarely cycles off.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom through the snow months and clean it as directed.`,
          `Keep the thermostat a little lower at night.`,
          `Close or redirect registers that blow toward your pillow or your desk chair.`,
          `If you burn a fireplace in the evening, sit to the side of it rather than facing the heat.`,
        ],
      },
      { h: 'Snow clearing and winter wind' },
      {
        p: `NOAA’s wind table lists January, February and April as the breeziest months at the airport, tied, with August the calmest. A morning of snow blowing, shoveling or scraping the car in January puts cold, moving air and fine snow straight into the eyes. Most people find their eyes stream in the cold and feel scratchy once they’re back inside. Ski goggles or wraparound safety glasses for the snow blower help more than a hat brim. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains why cold wind does both.`,
      },
      { h: 'May, the driest-feeling month' },
      {
        p: `Spring is when the outdoor air finally dries out. May afternoons average 53 percent humidity and April 55, against 82 percent or more at dawn. That’s the season for walks along the Grand River and across the Blue Bridge, bike rides on the trail network out of town, and the first beach days at the lakeshore. Wind off the big lake is steady even on warm days, so wraparound sunglasses earn their place in the beach bag.`,
      },
      { h: 'Long days at a screen' },
      {
        p: `Grand Rapids has a large health care and office workforce, from the hospitals along Michigan Street’s Medical Mile to the design and furniture companies around town. Many of those jobs mean hours at a monitor in heated or cooled air. Concentration slows blinking, and each missed blink leaves the tear film to thin. Lower the screen slightly, take short breaks to look out a window, and make a point of closing your eyes fully when you blink. Our guide to [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) goes desk by desk.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions on the panel: {directions}. And on handling: {tip}.`,
      },
      {
        p: `There’s one warning to read first: {warnings}. The storage line says: {storage}. A car in a Grand Rapids driveway on a January night drops far below that, so keep the bottle in a bag or pocket that comes indoors. See the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Grand Rapids' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Grand Rapids, Wyoming, Kentwood, Walker, Grandville and every other US address. There’s guest checkout, {shipping} shipping, and free shipping on {freeBottles} or more bottles. Tracking comes by email; delivery dates aren’t promised, so order with a few days of drops still in hand. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Grand Rapids page](/eye-drops/grand-rapids-mi) and the [Michigan page](/eye-drops/state/michigan) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A humidifier and a drop handle ordinary winter dryness. If your eyes stay uncomfortable anyway, see an eye doctor. Quell’s panel says: {stopUse} Pain, vision changes and sensitivity to light shouldn’t wait; [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists them.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Grand Rapids get a year?',
        a: `About 77.6 inches in NOAA’s 1991 to 2020 normals for the Grand Rapids airport, with January the snowiest month at 22.6 inches and December close behind at 20.8.`,
      },
      {
        q: 'Is Grand Rapids humid in winter?',
        a: `Outdoors, yes: NOAA’s table puts December afternoons at 74 percent humidity. Indoors is different, because heating cold air lowers its relative humidity sharply.`,
      },
      {
        q: 'Why do my eyes feel dry in Grand Rapids in the spring?',
        a: `May and April have the lowest afternoon humidity of the year in Grand Rapids, at 53 and 55 percent, and April is one of the windiest months. Dry, moving air speeds evaporation from the tear film.`,
      },
      {
        q: 'Can I get Quell shipped to Grand Rapids, MI?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Grand Rapids and the surrounding cities, with tracking by email and no account needed. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-lansing-mi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014836.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014836.csv
   *   (LANSING CAPITAL CITY AP, MI, elev 256.3 m: annual precip 33.33 in; Jun 3.76
   *   wettest, Feb 1.71 driest, Dec 1.90; annual snow 50.2 in, Jan 14.3, Feb 12.9,
   *   Dec 11.3; Jan high 30.6 F, Jan low 17.2 F; Jul high 82.8 F; 9.0 days at or
   *   above 90 F; 142.5 nights at or below 32 F; 52.6 days with a high at or
   *   below 32 F; 8.4 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LANSING, MI, WBAN 14836: Dec 84/74, Jan 83/73, May 77/54, Apr 78/56,
   *   annual 83/62)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LANSING: Jan and Feb 4.6 highest, Aug 3.0 lowest)
   * Elevation is the NOAA station elevation, converted (256.3 m is about 841 ft).
   * The station is Capital Region International Airport, northwest of downtown.
   */
  {
    slug: 'dry-eye-relief-lansing-mi',
    title: 'Dry eye relief in Lansing, Michigan',
    description:
      'Lansing sees about 142 freezing nights a year and January highs near 31°F. How the heating season, campus life and office screens dry your eyes.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Lansing’s dry-eye season is its heating season, and it runs long. NOAA’s normals show about 142 nights a year at or below freezing and January highs near 31°F, so furnaces work from November into April. Add campus libraries and state office screens, and eyes dry fast. Humidify, keep vents off your face, take screen breaks, follow your drop’s label, and see an eye doctor if dryness persists or hurts.`,
      },
      { h: 'Lansing’s numbers' },
      {
        p: `NOAA keeps its 1991 to 2020 normals for the Lansing area at the Capital City airport station, northwest of downtown at about 841 feet. Here’s what they show:`,
      },
      {
        list: [
          `Precipitation of 33.33 inches a year, with June wettest (3.76) and February driest (1.71).`,
          `Snowfall of 50.2 inches, including 14.3 in January, 12.9 in February and 11.3 in December.`,
          `January highs of 30.6°F and lows of 17.2°F.`,
          `About 142 freezing nights, 53 days that stay at or below 32°F, and eight or so nights a year at zero or colder.`,
          `July highs of 82.8°F, with only about nine days a year at 90°F.`,
        ],
      },
      { h: 'Why are my eyes so dry in Lansing in the winter?' },
      {
        p: `Lansing’s winter air isn’t dry outdoors. December afternoons average 74 percent humidity in NOAA’s table, and January 73. It turns dry once it’s heated. Cold air carries little water in absolute terms, and warming it to room temperature leaves the relative humidity low. Forced-air systems then move it across the room, and the tear film’s outer oil layer has to work harder to slow evaporation from the watery layer underneath.`,
      },
      {
        list: [
          `Run a humidifier where you sleep from November on.`,
          `Set the thermostat a few degrees lower at bedtime.`,
          `Turn floor registers away from the bed and the couch.`,
          `In a rental with radiators, a humidifier in the bedroom matters even more, since you can’t easily redirect the heat.`,
        ],
      },
      { h: 'Campus life in East Lansing' },
      {
        p: `Michigan State’s fall semester ends in December, with finals in the coldest, darkest weeks of the term. Hours in a heated library or dorm room, a laptop close to the face, and late nights all slow blinking and leave eyes feeling scratchy. Dorm rooms often have heat you can’t control. Put the screen a little below eye level, look up and across the room every so often, and blink completely. [Dry eyes in a dorm room in winter](/guides/dry-eyes-in-a-dorm-room-in-winter) has more on dorm heat. November football at Spartan Stadium adds cold wind and hours outdoors, so pack sunglasses or goggles for the walk and keep the bottle in an inner pocket.`,
      },
      { h: 'Dry eyes at work at the Capitol' },
      {
        p: `As the state capital, Lansing has thousands of people working at desks in state buildings, insurance offices and the hospitals. During legislative session, long hours in heated committee rooms and offices mean long stretches of reading on screens. The fix is mostly habit: keep the monitor at arm’s length and slightly low, aim any desk fan away from your face, and give your eyes a short break from the screen regularly. On the walk between buildings downtown in a January wind, glasses help.`,
      },
      { h: 'Spring on the river trail' },
      {
        p: `May is Lansing’s lowest-humidity month in the afternoon, at 54 percent, with April close at 56. That’s when the Lansing River Trail along the Grand and Red Cedar rivers fills up with walkers and cyclists. NOAA’s wind table shows January and February as the windiest months and August the calmest, so spring breezes are gentler than winter’s, but the drier afternoons still speed evaporation. Sunglasses that wrap around help on a bike.`,
      },
      { h: 'Quell’s Drug Facts, through the tokens' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its panel lists the Uses as: {uses}. Directions: {directions}. And for handling: {tip}.`,
      },
      {
        p: `The warning on the panel: {warnings}. On storage: {storage}. A backpack left in a car at a commuter lot on a below-zero morning is far outside that range, so bring it inside. The complete panel lives on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Lansing' },
      {
        p: `We ship from Brentwood, Tennessee, to Lansing, East Lansing, Okemos, Holt, DeWitt and every other US address, including dorms (buyers must be 18 or older). Checkout needs no account; shipping is {shipping}, or free on {freeBottles} or more bottles. You’ll get tracking by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. See the [Lansing page](/eye-drops/lansing-mi) and the [Michigan page](/eye-drops/state/michigan).`,
      },
      { h: 'When to see an eye doctor in Lansing' },
      {
        p: `Dryness that lasts through every season, or comes with pain, needs an exam rather than another bottle. The panel says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers which signs to take seriously.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Lansing, Michigan get in January?',
        a: `NOAA’s 1991 to 2020 normals for the Capital City airport put January highs at 30.6°F and lows at 17.2°F, with about eight nights a year at zero or colder.`,
      },
      {
        q: 'How much snow does Lansing get?',
        a: `About 50.2 inches a year in NOAA’s normals, with January the snowiest month at 14.3 inches, followed by February and December.`,
      },
      {
        q: 'Why do my eyes get dry studying at MSU in winter?',
        a: `Heated libraries and dorm rooms have low relative humidity, and long screen sessions slow your blinking. Take regular breaks, keep the laptop a bit below eye level, and humidify your room if you can.`,
      },
      {
        q: 'Can I order Quell to East Lansing?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to East Lansing and Lansing addresses, including dorms, for buyers 18 and older. Tracking comes by email; delivery dates aren’t promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-madison-wi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014837.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014837.csv
   *   (MADISON DANE RGNL AP, WI, elev 264.0 m: annual precip 37.13 in; Jun 5.28
   *   wettest, Jan 1.47 driest, Feb 1.52; annual snow 51.8 in, Jan 13.7, Feb 12.8,
   *   Dec 12.0; Jan high 27.0 F, Jan low 11.8 F; Jul high 82.1 F; 8.6 days at or
   *   above 90 F; 146.9 nights at or below 32 F; 58.7 days with a high at or
   *   below 32 F; 15.8 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MADISON, WI, WBAN 14837: Apr 80/53, May 80/54, Jan 79/69, Dec 82/71,
   *   annual 83/60)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (MADISON: Apr 4.3 highest, Mar 4.1, Aug 2.8 lowest; Milwaukee higher
   *   every month)
   * Elevation is the NOAA station elevation, converted (264.0 m is about 866 ft).
   * The station is Dane County Regional Airport, on the northeast side.
   */
  {
    slug: 'dry-eye-relief-madison-wi',
    title: 'Dry eye relief in Madison, Wisconsin',
    description:
      'Madison has about 16 nights a year below zero and its windiest, driest afternoons in April. NOAA’s figures and how to keep your eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Madison’s eyes face two dry seasons: a deep-cold winter indoors and a windy April outdoors. NOAA’s normals show about 59 days a year that stay below freezing and some 16 nights below zero, while April has both the strongest winds and the lowest afternoon humidity. Humidify at home, shield your eyes outside, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor if dryness keeps up.`,
      },
      { h: 'Madison weather in NOAA’s normals' },
      {
        p: `NOAA’s 1991 to 2020 normals for Dane County Regional Airport, on the city’s northeast side at about 866 feet, describe a deep winter and a blustery spring:`,
      },
      {
        list: [
          `Precipitation averages 37.13 inches a year. June is wettest at 5.28 inches; January (1.47) and February (1.52) are driest.`,
          `Snowfall is 51.8 inches, with January at 13.7, February 12.8 and December 12.0.`,
          `January highs average 27.0°F and lows 11.8°F.`,
          `About 147 freezing nights, 59 days with a high at or below freezing, and close to 16 nights a year at zero or below.`,
          `July highs are 82.1°F, with about nine days a year at 90°F.`,
        ],
      },
      { h: 'Below-zero nights and heated air' },
      {
        p: `When the air outside is 0°F, it holds very little water. Heat it to 68°F in a house on the near east side or a UW lecture hall, and its relative humidity drops very low unless something adds moisture back. NOAA’s figures for outdoor air look damp, around 69 percent on January afternoons, but that number doesn’t survive the trip through a furnace. That’s why Madison eyes often feel scratchy in January even on snowy, gray days.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom on the coldest weeks, and keep it clean.`,
          `Turn the thermostat down a few degrees at bedtime.`,
          `Keep space heaters off to the side, not aimed at your face.`,
          `Watch your eyes most during cold snaps, when the furnace runs nearly nonstop.`,
        ],
      },
      { h: 'Ice on Mendota and Monona' },
      {
        p: `Madison sits on an isthmus between two lakes that freeze most winters, and the ice draws people out: ice fishing, skating, skiing and walks across Lake Monona. Open ice has nothing to stop the wind, and glare off snow and ice makes people squint. Squinting means shallower blinks, and moving cold air dries the eye’s surface. Goggles or wraparound sunglasses help with both. Keep the bottle in an inside pocket, not a bucket on the ice; the storage line on the label is below.`,
      },
      { h: 'April: windy and dry' },
      {
        p: `NOAA’s wind table puts April at the top for Madison, with March just behind and August the calmest month. April also has the lowest afternoon humidity of the year, 53 percent, with May at 54. That’s when the outdoor season starts again: runs around Lake Wingra, bike commutes on the Capital City Trail, and Saturday mornings on the Capitol Square when the farmers’ market moves back outdoors. A breezy, dry spring afternoon pulls moisture from the tear film quickly, so sunglasses for the bike and a few extra full blinks matter more than you’d think.`,
      },
      { h: 'Screens on campus and in the Capitol' },
      {
        p: `Between the university, state government and a large tech and health care workforce, a big share of Madison spends the winter at screens. Concentration lowers the blink rate, and heated air thins the tear film between blinks. Look away regularly, keep the monitor a little low, and point desk fans away. [Dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) covers wide setups.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. On the Drug Facts panel, its Uses are: {uses}. The directions: {directions}. Also printed there: {tip}.`,
      },
      {
        p: `The warning: {warnings}. Storage: {storage}. On a below-zero night, a car on the street in Madison sits far outside that range, so keep the bottle indoors. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Madison' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Madison, Middleton, Fitchburg, Sun Prairie, Verona and every other US address. Use guest checkout; shipping is {shipping}, and orders with {freeBottles} or more bottles ship free. You’ll get tracking by email, but there’s no promised delivery date, so reorder ahead. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. More on the [Madison page](/eye-drops/madison-wi) and the [Wisconsin page](/eye-drops/state/wisconsin).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after a humidifier, screen breaks and a few weeks of following the label, it’s time to have them examined. Quell’s panel says: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the ones that need prompt care.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Madison, WI get in winter?',
        a: `NOAA’s 1991 to 2020 normals put January highs at 27.0°F and lows at 11.8°F in Madison, with close to 16 nights a year at zero or below.`,
      },
      {
        q: 'What is the windiest month in Madison, Wisconsin?',
        a: `April, in NOAA’s wind table for Dane County Regional Airport, with March close behind. August is the calmest month.`,
      },
      {
        q: 'Why do my eyes hurt on the frozen lake?',
        a: `Wind crosses open ice with nothing to slow it, and glare off snow makes you squint and blink less fully. If your eyes hurt rather than just feel dry, see an eye doctor.`,
      },
      {
        q: 'Does Quell ship to Madison, Wisconsin?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Madison and the surrounding towns, with tracking by email. Delivery dates aren’t promised, so order ahead.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-green-bay-wi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014898.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014898.csv
   *   (GREEN BAY, WI, elev 207.9 m: annual precip 31.61 in; Jun 4.10 wettest, Feb
   *   1.20 driest, Jan 1.39; annual snow 55.6 in, Jan 14.3, Dec 13.1, Feb 12.0,
   *   Mar 8.1, Apr 4.7; Jan high 25.5 F, Jan low 11.1 F; Jul high 81.0 F; 5.5
   *   days at or above 90 F; 152.3 nights at or below 32 F; 66.3 days with a
   *   high at or below 32 F; 19.2 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (GREEN BAY, WI, WBAN 14898: May 79/55, Apr 79/57, Jan 78/70, Dec 81/72,
   *   annual 83/63)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (GREEN BAY: Apr 4.6 highest; Jan, Feb, Mar 4.3; Aug 2.9 lowest)
   * Elevation is the NOAA station elevation, converted (207.9 m is about 682 ft).
   * The station is the city's airport, southwest of downtown.
   */
  {
    slug: 'dry-eye-relief-green-bay-wi',
    title: 'Dry eye relief in Green Bay, Wisconsin',
    description:
      'Green Bay has about 66 days a year below freezing and 19 nights below zero. What that does to indoor air and your eyes, from Lambeau to the bay ice.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Green Bay, dry eyes are a winter-long indoor problem with a few outdoor extremes. NOAA’s normals count about 66 days a year that never climb above freezing and 19 nights at or below zero, so furnaces run hard for months. Humidify your home, keep heat and wind off your face, blink fully at screens, use a lubricating drop exactly as labeled, and see an eye doctor for lasting dryness or pain.`,
      },
      { h: 'Green Bay’s climate at a glance' },
      {
        p: `NOAA’s 1991 to 2020 normals for the Green Bay airport station, at about 682 feet southwest of downtown, describe long, hard winters:`,
      },
      {
        list: [
          `January highs average 25.5°F and lows 11.1°F.`,
          `About 152 freezing nights a year and 66 days that stay at or below 32°F.`,
          `About 19 nights a year at zero or below.`,
          `Snowfall of 55.6 inches: 14.3 in January, 13.1 in December, and still 4.7 in April.`,
          `Precipitation of 31.61 inches, with February the driest month (1.20) and June the wettest (4.10).`,
          `July highs of 81.0°F and only five or six days a year at 90°F.`,
        ],
      },
      { h: 'Why are my eyes so dry in Green Bay in the winter?' },
      {
        p: `Outdoors, Green Bay’s winter air reads as humid: NOAA’s table shows December afternoons at 72 percent and January at 70. But a below-zero morning carries almost no water in absolute terms. Bring that air indoors and heat it, and its relative humidity collapses. Weeks of furnace heat with no break, because the high doesn’t clear freezing, leave homes and offices very dry by February. The tear film’s outer oil layer is what slows evaporation, and dry, moving indoor air keeps pulling against it.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom from the first hard freeze to spring.`,
          `Keep thermostats a little lower at night and sleep away from registers.`,
          `Check for drafts from the furnace blower aimed at a recliner or desk.`,
          `In the car, send the defroster to the windshield and keep the face vents closed.`,
        ],
      },
      { h: 'Game days at Lambeau' },
      {
        p: `A December or January game at Lambeau Field means hours outside in the cold, often in wind, under bright lights, and tailgating in a parking lot beforehand. Cold wind makes eyes water at first and leaves them gritty later. Goggles or wraparound glasses, a hat with a brim and a scarf pulled up help. Keep eye drops in an inside pocket close to your body; the storage range on the label is printed below, and a pocket against a coat lining stays far warmer than a cooler in the lot. [Dry eyes at an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) goes deeper on the stadium.`,
      },
      { h: 'Ice on the bay, wind in April' },
      {
        p: `When the bay of Green Bay freezes, shanties go out for ice fishing, and the wind across that open ice is relentless. NOAA’s wind table makes April the windiest month, with January through March just behind and August the calmest. April and May also have the lowest afternoon humidity of the year, 57 and 55 percent. So the spring thaw, with walks along the Fox River trail, brings breezy, drier afternoons right as people spend more time outside. Sunglasses that wrap around block the wind and the low spring sun together.`,
      },
      { h: 'Mill shifts, offices and long screens' },
      {
        p: `Paper mills, hospitals, trucking offices and the warehouses around Green Bay all run long shifts through the dark months. Screens and close work slow your blinking, and plant or warehouse heaters blow warm, dry air. Take short breaks to look across the room and finish each blink. Safety glasses on the floor do double duty against dust and air from fans. Our guide for [outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers jobs in the wind.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel states its Uses: {uses}. Directions: {directions}. Handling: {tip}.`,
      },
      {
        p: `Read the warning before you start: {warnings}. And the storage line: {storage}. Nineteen below-zero nights a year means a bottle left in a truck will sit far below that range. Keep it in the house. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Green Bay' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Green Bay, De Pere, Ashwaubenon, Howard, Allouez and every other US address. Guest checkout, {shipping} shipping, or free with {freeBottles} or more bottles. Tracking arrives by email; no delivery date is promised, so order early. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Green Bay page](/eye-drops/green-bay-wi) and the [Wisconsin page](/eye-drops/state/wisconsin).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness continues through a whole winter despite a humidifier and following the directions, an eye doctor can look for the cause. Quell’s panel: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Green Bay get in January?',
        a: `NOAA’s 1991 to 2020 normals for the Green Bay airport show January highs of 25.5°F and lows of 11.1°F, with about 19 nights a year at zero or colder.`,
      },
      {
        q: 'What is the windiest month in Green Bay?',
        a: `April, according to NOAA’s wind table for the Green Bay airport station. January through March come close behind, and August is the calmest month.`,
      },
      {
        q: 'How do I protect my eyes at a cold Packers game?',
        a: `Wear goggles or wraparound glasses against the wind, keep a brimmed hat on, and blink fully when you can. Keep eye drops in an inside pocket rather than a cooler, since the label’s storage range is far above a below-freezing night.`,
      },
      {
        q: 'Can Quell be shipped to Green Bay, WI?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Green Bay and nearby towns like De Pere and Ashwaubenon, with tracking by email. Delivery dates aren’t promised, so order early in winter.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-golfer',
    title: 'Christmas gifts for a golfer',
    description:
      'Gift ideas for golfers who play through winter: glare, wind on open courses, warm-weather golf trips, and how a small bottle of eye drops fits the bag.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Good Christmas gifts for a golfer solve the problems of winter rounds and warm-weather golf trips: wind across open fairways, low sun, cold hands and long travel days. Think wraparound sunglasses, a brimmed cap, hand warmers, a weatherproof pouch for the bag, and, for a golfer whose eyes feel dry on the course, a bottle of lubricating eye drops to keep in that pouch.`,
      },
      { h: 'Why winter golf is hard on the eyes' },
      {
        p: `Golf in December and January isn’t the summer game with a jacket on. Courses in the north that stay open play in cold, steady wind, with the sun sitting low enough to shine straight into the eyes on half the holes. Down south and out west, a golf trip trades cold for desert air or a breezy coastline. Either way, the golfer spends four or five hours facing moving air, and moving air speeds evaporation from the tear film. We cover the round itself in [dry eyes on the golf course](/guides/dry-eyes-on-the-golf-course); this guide is about what to put under the tree.`,
      },
      { h: 'Gift ideas for the cold-weather golfer' },
      {
        list: [
          `Winter golf mitts or cart mittens that slide on between shots.`,
          `Rechargeable or disposable hand warmers for the pockets.`,
          `A thermal beanie or a fleece-lined cap with a brim, which shades the eyes when the sun is low.`,
          `A windproof quarter-zip or vest that doesn’t restrict the swing.`,
          `Low-compression balls meant for cold days, if your golfer is the type who notices.`,
          `A small weatherproof pouch for the bag, sized for keys, a phone, a lip balm and a bottle of drops.`,
        ],
      },
      { h: 'Gifts for a winter golf trip' },
      {
        p: `Plenty of golfers spend part of the winter chasing warm weather: Arizona and Nevada courses in dry desert air, Florida and the Carolina coast in steady ocean breezes. Gifts that travel well make sense here.`,
      },
      {
        list: [
          `A padded travel bag or a hard-shell case for clubs.`,
          `A packable rain shell for coastal courses.`,
          `Polarized wraparound sunglasses, which help with glare off water hazards and white sand and block side wind.`,
          `A carry-on toiletry bag that meets the TSA’s liquids rule: containers of 3.4 ounces (100 milliliters) or less, packed in one quart-size bag.`,
          `A tee time at a course on their trip, booked in their name, if you know the dates.`,
        ],
      },
      {
        p: `A bottle of Quell holds {size}, well under the TSA’s 3.4-ounce limit for carry-on liquids, so it fits the quart bag with room to spare. Desert golf in particular pairs low humidity with afternoon wind, and a golfer who goes from the dry course to an air-conditioned clubhouse and then to a plane cabin will feel it by the end of the trip.`,
      },
      { h: 'Are eye drops a good gift for a golfer?' },
      {
        p: `They are when you know the person mentions dry or gritty eyes after a round. On their own, eye drops can feel like a medicine-cabinet gift, so tuck a bottle into a stocking or bundle it with sunglasses, a cap and a pouch for the bag. That turns it into an on-course kit rather than a hint. If you’re not sure your golfer would want them, stick to the gear.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions are: {directions}. Read the warning before giving it, especially to someone you don’t know well: {warnings}.`,
      },
      { h: 'Where the golfer should keep the bottle' },
      {
        list: [
          `During the round, in an inside pocket of the bag or a jacket, out of direct sun.`,
          `Not in the trunk between rounds. The label’s storage line reads: {storage}. A winter trunk falls below that and a summer one climbs past it.`,
          `Not left in a cart basket or cup holder while they walk to a green.`,
          `With the cap closed, and with this handling line in mind: {tip}.`,
        ],
      },
      {
        p: `Drops are easiest to use at the turn or after the round, with clean hands, rather than mid-hole. The full panel is on the [Drug Facts page](/drug-facts) if they want to read it before opening.`,
      },
      { h: 'Ordering a golfer’s gift so it arrives' },
      {
        p: `To send Quell straight to the golfer, put their name and address in the shipping fields and your own email in the email field. The confirmation and tracking come to you, so the surprise stays intact. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Orders ship from Brentwood, Tennessee, to US addresses only, and buyers must be 18 or older.`,
      },
      {
        p: `We don’t promise a delivery date, and December is the busiest month for every shipper, so order early in the month rather than the week before Christmas. If a bottle arrives damaged or the seal is broken, we replace it. An unopened bottle can be refunded within {returnDays} days of delivery without being sent back. [Holiday gift guides](/guides/topic/seasonal) has more ideas by person.`,
      },
      { h: 'When a golfer’s eyes need more than a gift' },
      {
        p: `If your golfer complains of eye pain, blurred vision that doesn’t clear, or dryness that never lets up, an eye doctor visit is the gift that matters. The label says: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a golfer for Christmas who plays in winter?',
        a: `Cold-weather gear that keeps the swing free: golf mitts, hand warmers, a windproof vest and a brimmed thermal cap. Add a weatherproof pouch for small items, and eye drops if they mention dry eyes on the course.`,
      },
      {
        q: 'What are good stocking stuffers for golfers?',
        a: `Hand warmers, a ball marker, a divot tool, a pack of cold-weather balls, lip balm with sunscreen, and a small bottle of lubricating eye drops for someone whose eyes feel dry after a round.`,
      },
      {
        q: 'Can I pack eye drops for a golf trip in my carry-on?',
        a: `Yes, within the TSA’s liquids rule of 3.4 ounces (100 milliliters) or less per container, packed in a quart-size bag. A bottle of Quell holds {size}.`,
      },
      {
        q: 'Should golfers keep eye drops in the car?',
        a: `Not between rounds. Quell’s label gives a storage range, and a car in winter or summer moves outside it, so bring the bottle inside with you.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-january',
    title: 'Dry eyes in January',
    description:
      'January brings the deepest heating season, cold snaps and the return to office screens. Why eyes feel driest now, and what to do at home, at work and outside.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eyes in January usually come from the coldest weeks of the heating season, sudden cold snaps, and the return to long days at office screens after the holidays. Run a humidifier where you sleep, keep heater vents off your face, take regular screen breaks, guard your eyes against cold wind, and use a lubricating drop as its label directs. See an eye doctor for pain or dryness that won’t ease.`,
      },
      { h: 'Why January, more than December' },
      {
        p: `December has the holidays; January has the cold. In NOAA’s normals for cities from Birmingham to Green Bay, January is the coldest month of the year, so heating systems run longer than in any other month. NOAA’s 1991 to 2020 normals show January highs below freezing in places like Green Bay (25.5°F) and Grand Rapids (31.0°F), and even Birmingham averages a January high of only 54.5°F. Our [December guide](/guides/dry-eyes-in-december) covers holiday travel and parties. January is about the long haul of winter, with nothing festive to distract from it.`,
      },
      { h: 'Eye drops for dry eyes in winter' },
      {
        p: `Heated indoor air is the main reason eyes feel drier in winter. Cold outdoor air carries little water. Warm it to room temperature and its relative humidity drops, and a forced-air system then blows it across the room. The tear film’s outer oil layer slows evaporation from the watery layer beneath; dry, moving air pulls against that layer for hours at a time, at home and at work.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions: {directions}. You don’t need a different drop for January, and the label doesn’t change by season; follow the same directions year-round. [Do you need different eye drops in winter?](/guides/do-you-need-different-eye-drops-in-winter) explains why.`,
      },
      { h: 'Cold snaps' },
      {
        p: `A January cold snap makes everything worse at once. The furnace barely cycles off, the air outside is at its driest in absolute terms, and the wind chill makes every walk to the car feel longer. During a cold stretch:`,
      },
      {
        list: [
          `Turn the thermostat down a couple of degrees at bedtime and let the humidifier run.`,
          `Keep a scarf high and wear glasses or goggles when clearing snow.`,
          `Send the car heater to the windshield, not your face, especially during the warm-up.`,
          `Bring the bottle of drops inside from the car. The label’s storage line reads: {storage}.`,
        ],
      },
      { h: 'Dry eyes at work after the holidays' },
      {
        p: `The first week of January often means a full inbox, year-end reports and planning meetings, all on screens, in buildings heated to keep everyone comfortable in coats-off weather. Concentrating on a screen slows blinking, and fewer blinks in dry air leave the eye’s surface exposed longer between fresh coats of tears.`,
      },
      {
        list: [
          `Put the monitor at arm’s length and slightly below eye level.`,
          `Every so often, look out a window or across the room and blink fully a few times.`,
          `Find out where the heating vent over your desk points, and ask about a deflector if it hits your face.`,
          `Keep a small humidifier at your desk if your workplace allows one.`,
        ],
      },
      {
        p: `If you’re back to commuting after working from home over the holidays, the car or train adds another hour of heated air. [Dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) has a full desk routine.`,
      },
      { h: 'Dry eyes when tired' },
      {
        p: `Short days and early dark can push people into later nights and less sleep, and eyes that are tired often feel dry and gritty too. Long screen sessions in the evening slow blinking at the time of day when eyes already feel worn. A screen-free half hour before bed, a cooler bedroom and a humidifier running while you sleep are simple changes worth trying. If you wake with eyes that feel dry every morning, check whether a ceiling fan or vent runs over the bed.`,
      },
      { h: 'How to keep eyes moist in January' },
      {
        list: [
          `Add moisture to the air you breathe longest: the bedroom, then the office.`,
          `Move your seat out of the path of vents, fans and space heaters.`,
          `Blink fully, not halfway, during screen work and reading.`,
          `Wear wraparound glasses outside in wind and when shoveling.`,
          `Use a lubricating drop as its label directs, and keep this in mind: {tip}.`,
        ],
      },
      { h: 'A new plan year for your FSA or HSA' },
      {
        p: `For many people, January 1 is when a new health FSA or HSA plan year starts. Under rules the IRS has applied since the CARES Act, over-the-counter medicines bought after December 31, 2019, count as qualified medical expenses without a prescription. Lubricating eye drops like Quell are over-the-counter drugs, so they generally qualify. Your plan’s own rules still apply, and the order confirmation email works as your receipt. [How to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) walks through it.`,
      },
      { h: 'Restocking for the rest of winter' },
      {
        p: `February and March can be just as cold, so January is a good time to count bottles. Quell ships from Brentwood, Tennessee, to US addresses, as a guest, for {shipping}, or free with {freeBottles} or more bottles. There’s no subscription; you’ll get one reminder email when you might be running low. We don’t promise a delivery date, so order before you’re down to the last bottle. You can [order on the home page](/#buy).`,
      },
      { h: 'When January dryness needs a doctor' },
      {
        p: `If your eyes still feel dry after you’ve fixed the air at home and work, or if there’s pain, light sensitivity or a change in vision, see an eye doctor. Quell’s label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in January?',
        a: `January is usually the coldest month, so heating systems run the most, and heated indoor air has low relative humidity. Returning to long screen days after the holidays slows blinking too.`,
      },
      {
        q: 'Are eye drops for dry eyes in winter different from summer drops?',
        a: `Not for Quell. The label and its directions are the same in every season; what changes is the air around you, so humidity and vents matter more in winter.`,
      },
      {
        q: 'Can I use my new FSA money on eye drops in January?',
        a: `Generally yes. Since the CARES Act, the IRS counts over-the-counter medicines as qualified expenses without a prescription, so OTC eye drops usually count. Check your plan’s rules and keep the receipt.`,
      },
      {
        q: 'Why do my eyes feel worse during a cold snap?',
        a: `The furnace runs almost nonstop, so indoor air dries out further, and outdoor wind chill pulls moisture from the eye during every trip outside. A humidifier and wraparound glasses both help.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-christmas-tree-farm',
    title: 'Dry eyes at a Christmas tree farm',
    description:
      'Cutting your own Christmas tree means cold wind across open fields, sawdust and needles. How to protect your eyes there, and once the tree is inside.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `A trip to a Christmas tree farm can leave eyes dry or irritated from cold wind across open rows, sawdust from cutting the trunk, and needles brushing your face. Wear glasses or sunglasses while you hunt and cut, keep your face out of the sawdust, and blink fully once you’re out of the wind. At home, keep the tree and your favorite chair away from heat sources.`,
      },
      { h: 'Why a tree farm dries your eyes' },
      {
        p: `Tree farms are open land. Rows of evergreens stand on hillsides and fields with little to slow the wind, and families walk them for an hour or more in late November or December looking for the right tree. Cold air holds little moisture, and a steady breeze speeds evaporation from the tear film’s outer oil layer. Bright low sun on frost or snow adds glare, and squinting makes blinks shallow.`,
      },
      {
        list: [
          `Pick a calmer day if you can; the wind matters more than the temperature.`,
          `Wear sunglasses or clear safety glasses, especially ones that wrap around the sides.`,
          `A brimmed hat shades your eyes from the low sun.`,
          `Turn your back to the wind when you stop to look over a tree.`,
        ],
      },
      { h: 'Sawdust and needles' },
      {
        p: `Cutting your own tree usually means lying on the ground with a bow saw, close to the trunk. Sawdust flies, and a gust can carry it straight into your eyes. Needles and small branches can poke or scratch.`,
      },
      {
        list: [
          `Wear safety glasses or your regular glasses while sawing; sunglasses work too if it’s bright.`,
          `Let one person saw while another holds the tree, both turned so the dust blows away from faces.`,
          `Keep your face back from the cut, and stop and step away if the wind shifts toward you.`,
          `Don’t rub your eyes with gloved hands; gloves carry sap and grit.`,
        ],
      },
      {
        p: `If sawdust gets in your eye, don’t rub it. Blink, and rinse gently with clean water if you can. If it still feels like something is in there, or if your eye hurts, waters heavily or your vision changes, see an eye doctor or urgent care promptly. A lubricating drop isn’t for washing debris out, and Quell’s label doesn’t cover that use. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which signs mean go now.`,
      },
      { h: 'The wagon ride, the baler and the bonfire' },
      {
        p: `Many farms run a hayride or tractor wagon out to the fields, and riding in an open wagon is a moving breeze to the face on top of the wind. Sit facing backward if it’s cold and windy. The netting or baling machine that wraps your tree can throw needles and bark, so stand back while it runs. A fire pit near the cocoa stand is welcome in the cold, but wood smoke irritates eyes; sit upwind of it.`,
      },
      { h: 'Bringing the tree inside' },
      {
        p: `The tree changes the indoor air very little; the heating system is what dries your eyes in December. But where you put the tree often decides where the furniture goes, and people end up sitting in new spots, sometimes right over a floor register or next to the fireplace. Christmas tree care advice also calls for keeping a cut tree away from heat sources, which helps both the tree and your eyes.`,
      },
      {
        list: [
          `Place the tree and the chairs around it away from vents, radiators and the fireplace.`,
          `Run a humidifier in the room where you sit in the evening.`,
          `If you string lights for an hour on a ladder, take breaks to blink and look away from the bright bulbs.`,
          `Turn the thermostat down a little at night and use an extra blanket.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on the indoor side of the season.`,
      },
      { h: 'Using a lubricating drop after a day outside' },
      {
        p: `Once you’re home, out of the wind, with clean hands, is the easier time to use a drop than in a cold field. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. Directions: {directions}. Handling: {tip}.`,
      },
      {
        p: `If you bring the bottle along, keep it in an inner pocket rather than the car. The storage line reads: {storage}. A car parked at the farm on a frosty morning can drop below that. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Kids and tree farms' },
      {
        p: `Children love cutting the tree, and their faces are closer to the saw and the low branches. Sunglasses or child-size safety glasses are worth packing. Quell’s label doesn’t give directions for children, so if a child’s eyes are bothered after the trip, ask their pediatrician or eye doctor rather than reaching for an adult’s bottle.`,
      },
      { h: 'Ordering Quell before the holidays' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout, {shipping} shipping, and free shipping on {freeBottles} or more bottles. There’s no promised delivery date, and December is busy, so order early. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See more seasonal topics in [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water at the Christmas tree farm?',
        a: `Cold wind across open fields makes eyes water and then feel dry once you’re back inside. Wraparound glasses and turning your back to the wind both help.`,
      },
      {
        q: 'Should I wear safety glasses to cut down a Christmas tree?',
        a: `Yes. Sawing near the ground sends sawdust and bark toward your face, and branches can poke your eyes. Regular glasses or sunglasses are better than nothing if you don’t own safety glasses.`,
      },
      {
        q: 'What should I do if a pine needle pokes my eye?',
        a: `Don’t rub it. If your eye hurts, keeps watering, feels like something is still in it, or your vision changes, see an eye doctor or urgent care promptly.`,
      },
      {
        q: 'Does a real Christmas tree dry out the air in the house?',
        a: `Not noticeably. The heating system is what dries the air, but keeping the tree and your seating away from vents and fireplaces helps your eyes and the tree.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-mail-carriers',
    title: 'Dry eyes for mail carriers',
    description:
      'Walking routes in wind and cold, a truck heater between stops, and sun on summer pavement: why mail carriers get dry eyes, and simple fixes for the route.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Mail carriers get dry eyes because the job swings between extremes: hours on foot in wind, cold or summer sun, then a vehicle with the heater or a fan blowing in a small cab. Wraparound glasses, a brimmed cap, vents aimed away from your face and full blinks while sorting help. Use a lubricating drop as its label directs on a break with clean hands, never while driving.`,
      },
      { h: 'Why do mail carriers get dry eyes?' },
      {
        p: `Few jobs put the eyes through as much moving air. On a walking route, you’re outside for hours in whatever the season brings. On a driving or mounted route, the window stays open at each box, so every stop lets in a blast of cold or hot air, and the heater or fan runs in between.`,
      },
      {
        list: [
          `Wind. Walking into it street after street speeds evaporation from the tear film.`,
          `Cold. Winter air holds little moisture, and it makes eyes water and then feel dry.`,
          `Sun and glare. Summer pavement, snow and white siding reflect light and make you squint.`,
          `Heater and fan air. A small cab with vents a foot from your face dries the eye’s surface fast.`,
          `Close work. Sorting mail and reading a scanner screen slow your blinking.`,
        ],
      },
      { h: 'Walking routes in winter' },
      {
        p: `Winter wind does the most damage. A walking carrier on a January route faces the cold for most of the shift, and the wind chill is what the eyes feel. Wraparound safety glasses or sunglasses block a surprising amount of wind. A cap with a brim keeps blowing snow and low sun out of your eyes. A neck gaiter pulled up stops your own breath from fogging glasses if you keep it below the nose. At each long break inside the truck, close your eyes for a few seconds and then blink fully several times.`,
      },
      { h: 'The truck heater and the open window' },
      {
        p: `A delivery vehicle may not have the vent options of a family car. Do what you can with what you have:`,
      },
      {
        list: [
          `Send the heat to the windshield and floor, not the face vents.`,
          `If there’s a fan clipped to the dash, angle it at your chest or away from you.`,
          `On a mounted route, lean back from the window as you reach for the box rather than putting your face into the opening.`,
          `In summer, a cooling fan aimed at the face is tempting; point it at the neck instead.`,
        ],
      },
      {
        p: `Our guide to [dry eyes for delivery drivers](/guides/dry-eyes-for-delivery-drivers) covers van work and package routes, which overlap with yours.`,
      },
      { h: 'Summer routes and sun' },
      {
        p: `In July, the problem is sun and heat. Squinting into bright light keeps blinks shallow, and hot, dry afternoons in the West or Southwest pull moisture from the eye. Polarized wraparound sunglasses help with glare off cars and windows. Sweat and sunscreen running into the eyes sting; a sweatband under the cap helps.`,
      },
      { h: 'Dry eyes at work in the sorting area' },
      {
        p: `Casing mail at the start of the shift means an hour or more of reading addresses up close, often under bright lights with ventilation fans running. That kind of focus slows blinking. Look up from the case every so often, look at something far away, and finish a few slow, complete blinks. The same goes for long stretches on the handheld scanner.`,
      },
      { h: 'Where to keep eye drops on a route' },
      {
        p: `Quell’s label says: {storage}. A delivery vehicle sits outside that range in both summer and winter, so the bottle should ride in an inner jacket pocket or a bag that comes into the building with you at the end of the day.`,
      },
      {
        list: [
          `Keep it in a zipped inner pocket, not the satchel’s outer flap or the dashboard.`,
          `Take it home at the end of the shift instead of leaving it in the vehicle.`,
          `Keep the cap on, and remember: {tip}.`,
        ],
      },
      { h: 'When to use drops during a shift' },
      {
        p: `Never while driving, and never at the box with the vehicle moving. Use a drop when you’re parked for lunch or a break, with clean hands. Quell is milky, and vision can blur briefly after a drop, so wait until it’s clear before you drive. The label notes: {milky}.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, from the Drug Facts panel: {uses}. Directions: {directions}. The label also warns: {warnings}. All of it is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'If you wear contact lenses on the route' },
      {
        p: `Quell’s label doesn’t give directions for use with contact lenses. If you wear them for work and your eyes feel dry, ask your eye doctor what to use and when.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind and dust can scratch an eye, and dryness that never lets up has causes a drop won’t fix. The label says: {stopUse} For anything that feels like something in your eye, pain or vision changes, see an eye doctor. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs. Quell ships from Brentwood, Tennessee, to any US address; see the [home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry on my mail route?',
        a: `Wind, cold and sun on the walking part of the route, plus heater or fan air in a small vehicle, all speed evaporation from the tear film. Close work while sorting slows your blinking too.`,
      },
      {
        q: 'Should mail carriers wear sunglasses in winter?',
        a: `Wraparound sunglasses or clear safety glasses block cold wind and glare off snow, which both dry the eyes. A brimmed cap helps too.`,
      },
      {
        q: 'Can I keep eye drops in my mail truck?',
        a: `Not for the long term. Quell’s label gives a storage range, and a vehicle in summer or winter moves outside it, so keep the bottle in a pocket and take it home.`,
      },
      {
        q: 'When can a mail carrier use eye drops?',
        a: `On a break with the vehicle parked and your hands clean. Wait for any brief blur to clear before driving again.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-crane-operators',
    title: 'Dry eyes for crane operators',
    description:
      'Hours of staring up at a load, a small cab with the heater or AC running, and wind at height: why crane operators get dry eyes, and fixes that fit the job.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Crane operators get dry eyes from a combination few jobs share: long, fixed gazes upward at a load, a small cab with heater or air conditioning blowing close to the face, and wind at height. Aim cab vents away from your eyes, use tinted glass or sunglasses against sky glare, blink fully between lifts, and use a lubricating drop as labeled only when the crane is at rest.`,
      },
      { h: 'Why crane work dries the eyes' },
      {
        list: [
          `Fixed attention. Watching a hook, a load or a signal person for minutes at a time slows blinking.`,
          `Looking up. Tilting the gaze upward opens the eyes wider, leaving more of the surface exposed to air.`,
          `Sky glare. A bright sky behind the load makes you squint, and squinting keeps blinks shallow.`,
          `Cab air. A heater or air conditioner in a small cab blows dry air within a few feet of your face.`,
          `Wind. At the top of a tower crane, or in an open mobile crane cab, moving air hits your eyes directly.`,
          `Dust. Job sites throw up concrete dust, sand and grit that can reach the cab.`,
        ],
      },
      { h: 'The long stare upward' },
      {
        p: `Concentration is what slows the blink, and crane work is pure concentration. You’re watching a load through a lift, judging swing and following radio calls or hand signals. Every few lifts, when the load is landed and the hook is clear, take a moment to close your eyes completely, open them and blink fully a few times. If you can, glance down at the cab floor or the controls between picks, which relaxes the lids. A visor or tinted overhead glass cuts the glare that makes you squint.`,
      },
      { h: 'Cab heat and air conditioning' },
      {
        p: `A tower crane cab is small, and the heater or AC unit is often close to the seat. Tilt or close any vent pointed at your face. In winter, a small cab heater blasting for hours dries the air fast; keep it at the lowest setting that keeps your hands working. In summer, air conditioning dries the air while it cools, so the same rule applies: air at your chest or feet, not your eyes. The tear film’s outer oil layer slows evaporation, but dry air moving straight across the eye works against it.`,
      },
      { h: 'Wind at height' },
      {
        p: `Wind speeds up with height, and operators feel it on the climb, on the walkway and through an open window. Wraparound safety glasses stay on during the climb and on any walkway. If your cab window opens for signals or communication, keep your face back from the opening. Wind also carries dust from the site below, so a cab kept clean and closed when possible helps.`,
      },
      { h: 'Dust, safety glasses and drops' },
      {
        p: `Safety glasses are protection. Eye drops aren’t. If grit or dust gets in your eye, don’t rub it, and rinse with clean water or use the site’s eyewash station. If the feeling of something in the eye lasts, or your eye hurts or vision changes, get it checked that day. A lubricating drop isn’t an eyewash, and Quell’s label doesn’t cover rinsing out debris.`,
      },
      { h: 'When to use drops on a crane job' },
      {
        p: `Never during a lift or while you’re responsible for a suspended load. Use a drop on a break, with the crane secured and your hands clean, and give your vision a moment to clear before you go back to the controls. Quell is milky; the label notes: {milky}.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists the Uses as: {uses}. The directions say: {directions}. And keep this in mind with gloves on and grit around: {tip}.`,
      },
      { h: 'Where to keep the bottle' },
      {
        p: `The label’s storage line reads: {storage}. A cab in direct summer sun or a winter morning at height can fall outside that range, as can a truck on site. Keep the bottle in an inside pocket of your jacket or a lunch bag you carry up and take home. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Long hours and tired eyes' },
      {
        p: `Early starts, long days and hours of concentration leave eyes tired and dry by the end of a shift. Screen time afterward on a phone adds to it. Some simple habits help:`,
      },
      {
        list: [
          `Keep a pair of tinted and a pair of clear safety glasses in the cab for changing light.`,
          `Use the time between picks to rest your eyes and blink fully.`,
          `Keep the cab window clean so you’re not straining through grime.`,
          `Run a humidifier at home in winter, where you spend the hours you’re asleep.`,
        ],
      },
      {
        p: `[Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers more job-site habits, and [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why moving air dries the eye.`,
      },
      { h: 'Contact lenses in the cab' },
      {
        p: `Quell’s label doesn’t give directions for use with contact lenses. If you wear them at work, ask your eye doctor what to use and when.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Clear vision is part of a crane operator’s job, so don’t sit on symptoms. The label says: {stopUse} Eye pain, blurred vision that doesn’t clear and light sensitivity need an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry operating a crane?',
        a: `Long, fixed stares at a load slow your blinking, looking up exposes more of the eye, and cab heat or air conditioning blows dry air close to your face. Wind at height adds to it.`,
      },
      {
        q: 'Can crane operators use eye drops on the job?',
        a: `Only when the crane is secured and no load is suspended, with clean hands. Wait for your vision to clear before going back to the controls.`,
      },
      {
        q: 'How do I keep glare from making my eyes tired in a crane cab?',
        a: `Use the cab’s tinted glass or a visor, wear sunglasses or tinted safety glasses on bright days, and keep the windows clean so you aren’t squinting through grime.`,
      },
      {
        q: 'Should I use eye drops if dust gets in my eye on site?',
        a: `No. Rinse with clean water or use the site’s eyewash station, and don’t rub. If it still hurts or feels like something is in your eye, get it checked that day.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-oil-field-workers',
    title: 'Dry eyes for oil field workers',
    description:
      'Dust on lease roads, wind across open pads, heat, cold and long hitches far from a store: why oil field work dries the eyes, and how to plan your supply.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Oil field workers get dry eyes from dust on lease roads, steady wind across open pads, summer heat, winter cold and long hours in a truck cab with the vents running. Safety glasses and goggles protect the eyes; drops don’t. Keep vents off your face, blink fully during close work, use a lubricating drop as labeled on breaks, and bring enough for the whole hitch, because the nearest store may be hours away.`,
      },
      { h: 'Why oil field work dries your eyes' },
      {
        p: `Most oil and gas country is open, dry and windy: the Permian Basin, the Bakken, the Eagle Ford, the Anadarko. Work happens outside on pads with no windbreak, and getting there means miles of dirt and caliche roads.`,
      },
      {
        list: [
          `Dust. Every truck on a lease road throws a cloud, and wind carries it across the pad.`,
          `Wind. Open country lets it run, and it speeds evaporation from the tear film.`,
          `Heat. A summer pad radiates heat, and dry, hot air pulls moisture from the eye.`,
          `Cold. Winter in North Dakota means air with almost no moisture, and a heater blasting in the cab.`,
          `Glare. Sun off metal tanks, white trucks and pale ground keeps you squinting.`,
          `Fumes and smoke. Flares and engines add irritants on top of everything else.`,
        ],
      },
      { h: 'Safety glasses are protection; drops aren’t' },
      {
        p: `On location, your PPE is what keeps dust, sand, chemicals and flying debris out of your eyes. Wear safety glasses or goggles as your site requires, and goggles or a face shield where splash is possible. A lubricating drop doesn’t shield the eye, doesn’t wash out grit and isn’t an eyewash. If something gets in your eye, use the eyewash station, don’t rub, and get it looked at if it still hurts or feels like something’s there. Chemical exposure needs the site’s emergency plan right away.`,
      },
      { h: 'The truck cab, hour after hour' },
      {
        p: `Pumpers, hot-shot drivers, roustabouts and company men can spend half the shift driving between locations. A truck heater or air conditioner aimed at your face dries the eye’s surface quickly.`,
      },
      {
        list: [
          `Point vents at your chest or the windshield.`,
          `Use recirculate on dusty lease roads to keep dust out of the cab.`,
          `Keep the windows up behind another truck’s dust cloud.`,
          `Wipe down the dash now and then; dust in the cab gets blown around by the vents.`,
        ],
      },
      { h: 'Night shifts and tired eyes' },
      {
        p: `Twelve-hour shifts, night tours on a rig and early starts leave eyes tired, and tired eyes often feel dry and gritty. Watching gauges, screens in the doghouse or a tablet in the truck slows your blinking. Between tasks, close your eyes for a few seconds, open them and blink fully a few times. In the man camp or the motel, keep the room cooler, aim the wall unit away from the bed, and give your eyes a break from the phone before sleep.`,
      },
      { h: 'Planning eye drops for a long hitch' },
      {
        p: `A hitch of two or three weeks far from town means you can’t run out and grab another bottle. Read the directions and count the days.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. Its directions: {directions}. Each bottle holds {size}. Bring at least one spare for the hitch, in case a bottle is dropped, lost or left at the house.`,
      },
      {
        list: [
          `Order before the hitch, not on the way out. We don’t promise a delivery date.`,
          `Orders of {freeBottles} or more bottles ship free; otherwise shipping is {shipping}.`,
          `There’s no subscription. You’ll get one reminder email when you may be running low.`,
          `If you’d rather ship to a camp or yard, check first that someone there accepts packages. [Shipping eye drops to a job site](/guides/shipping-eye-drops-to-a-job-site) explains how.`,
        ],
      },
      { h: 'Where to keep the bottle in the field' },
      {
        p: `The label’s storage line: {storage}. A truck parked on a West Texas pad in July, or a Bakken pickup on a January night, sits far outside that. Keep the bottle in a jacket pocket or lunch bag that goes with you, and take it into the camp at the end of the shift. With dust everywhere, this handling line matters: {tip}. Wash your hands or use a clean wipe before you use a drop, and keep the cap on tight.`,
      },
      { h: 'When to use drops on location' },
      {
        p: `On a break, away from the dust, with clean hands and PPE in place for anyone working nearby. Not while driving, and not while running equipment. Quell is milky, and vision can blur for a moment after a drop; wait until it clears before you drive or climb. The label notes: {milky}. Read the warning too: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Contact lenses in the patch' },
      {
        p: `Quell’s label doesn’t give directions for contact lens wearers. Dust and contacts don’t mix well, so ask your eye doctor what to use, and whether glasses make more sense on location.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness on its own is common in dusty, windy work, but a scratch or a foreign body can feel similar. The label says: {stopUse} For pain, vision changes or the feeling of something stuck in your eye, see an eye doctor or urgent care; don’t wait for the end of the hitch. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs, and [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more for field jobs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry working in the oil field?',
        a: `Dust from lease roads, constant wind on open pads, summer heat and winter cold all speed evaporation from the tear film. Long hours in a truck with vents blowing add to it.`,
      },
      {
        q: 'How many bottles of eye drops should I take on a hitch?',
        a: `Read the directions, count your days on location and bring at least one spare. Each Quell bottle holds {size}, and the label’s directions tell you how often to use it.`,
      },
      {
        q: 'Can eye drops wash dust out of my eyes?',
        a: `A lubricating drop isn’t an eyewash. Use clean water or the site’s eyewash station, don’t rub, and get your eye checked if it still hurts or feels like something is in it.`,
      },
      {
        q: 'Can I leave eye drops in my work truck on the pad?',
        a: `Not for long. Quell’s label gives a storage range, and a truck on a summer or winter pad goes outside it. Keep the bottle in a pocket or lunch bag you carry.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-landscapers',
    title: 'Dry eyes for landscapers',
    description:
      'Leaf blowers, mowers, string trimmers, dust, sun and wind: why landscapers get dry, gritty eyes, why safety glasses come first, and where drops fit in.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Landscapers get dry, gritty eyes from leaf blowers, mowers and string trimmers throwing dust and debris, hours of sun and glare, and wind across open lawns. Impact-rated safety glasses are your protection; eye drops aren’t. Wear glasses for every machine, keep the blower’s exhaust and dust away from your face, blink fully, and use a lubricating drop as labeled on breaks with clean hands.`,
      },
      { h: 'What landscaping does to your eyes' },
      {
        list: [
          `Blowers move huge volumes of air, dust and fine debris, often at face height when wind gusts back.`,
          `Mowers and trimmers throw grass, sand and small stones.`,
          `Edging along driveways and sidewalks kicks up concrete and soil dust.`,
          `Mulch, topsoil and gravel deliveries send dust up with every shovel load.`,
          `Sun and glare off concrete, water features and white rock make you squint for hours.`,
          `Wind across open lawns speeds evaporation from the tear film.`,
        ],
      },
      {
        p: `None of that is unusual on a single job. Stacked over a full season of eight or ten yards a day, it adds up.`,
      },
      { h: 'Safety glasses first, every time' },
      {
        p: `A lubricating drop doesn’t stop a rock from a string trimmer or sand from a blower. Impact-rated safety glasses do. Ask your employer or supplier which impact rating the work calls for. Wraparound styles also block side wind and dust. On bright days, tinted safety glasses cut glare. If you wear prescription glasses, ask about prescription safety glasses or fit-over styles. Goggles are worth it for heavy blower work and dusty demolition.`,
      },
      { h: 'Blowers: the biggest source of dust' },
      {
        p: `Leaf season in the fall means hours behind a backpack blower. A few habits keep the dust cloud out of your face:`,
      },
      {
        list: [
          `Work with the wind at your back, not in your face.`,
          `Point the nozzle low and away, and don’t blow toward walls or corners that bounce dust back.`,
          `Keep an eye on coworkers’ blowers too; a crew blowing toward each other doubles the dust.`,
          `Take the glasses off only after the blower is off and the air has settled.`,
        ],
      },
      { h: 'Sun, heat and long summer days' },
      {
        p: `Summer days start early and run long. Squinting into the sun keeps blinks shallow, and hot, dry afternoons in much of the country pull moisture from the eyes. A cap or wide-brimmed hat helps, along with tinted safety glasses. Sweat and sunscreen running into your eyes sting; a sweatband under the cap is cheap and effective.`,
      },
      { h: 'Dry eyes in the truck between jobs' },
      {
        p: `The ride between yards is the time your eyes could recover, but the truck AC or heater aimed at your face does the opposite. Point vents at your chest or the windshield, and shake dust off your hat and shirt before you climb in, since vents blow any dust in the cab right back at you. If you plow snow in winter, the same goes for the plow truck’s heater; [dry eyes for snowplow drivers](/guides/dry-eyes-for-snowplow-drivers) covers that season.`,
      },
      { h: 'If something gets in your eye' },
      {
        p: `Stop the machine, don’t rub, and rinse with clean water. Many trucks carry an eyewash bottle in the first aid kit. If it still hurts, waters heavily, feels like something is stuck, or your vision changes, see an eye doctor or urgent care that day. Rubbing can drag grit across the surface of the eye. A lubricating drop isn’t for flushing debris, and Quell’s label doesn’t cover that.`,
      },
      { h: 'Using a lubricating drop on the crew' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. The directions: {directions}. And with dirt on everything, this matters: {tip}.`,
      },
      {
        list: [
          `Use it on a break, not mid-job, after washing your hands or using a clean wipe.`,
          `Do it in the truck with the doors closed, away from blowing dust.`,
          `Wait for any brief blur to clear before you drive or run equipment.`,
          `Read the warning before first use: {warnings}.`,
        ],
      },
      { h: 'Where to keep the bottle' },
      {
        p: `The label’s storage line: {storage}. A truck dashboard in July or a trailer toolbox in January is well outside that. Carry the bottle in a shirt or jacket pocket, or a lunch cooler that comes home with you. All of the label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Pollen season' },
      {
        p: `Spring and fall mowing stir up pollen along with dust. If your eyes itch more than they feel dry, or the itch comes back every spring, that’s a question for an eye doctor or pharmacist rather than something to guess at. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers more jobs that keep you outside.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says: {stopUse} Landscapers are around flying debris every day, so take eye pain, light sensitivity and blurry vision seriously. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor). Quell ships from Brentwood, Tennessee, to any US address; [order on the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel gritty after landscaping?',
        a: `Blowers, mowers and trimmers throw fine dust and debris, and wind and sun dry the eye’s surface. Impact-rated safety glasses, working with the wind at your back and breaks out of the dust all help.`,
      },
      {
        q: 'What safety glasses should landscapers wear?',
        a: `Impact-rated glasses marked Z87+, in a wraparound style that blocks side wind and dust. Tinted versions help on sunny days, and goggles help for heavy blower work.`,
      },
      {
        q: 'Can I use eye drops instead of safety glasses when mowing?',
        a: `No. A lubricating drop doesn’t protect your eye from debris. Safety glasses do, and drops are for dryness on a break with clean hands.`,
      },
      {
        q: 'Do leaf blowers dry out your eyes?',
        a: `They can. A blower moves fast air and fine dust, and wind gusting back puts both in your face. Work with the wind behind you and wear wraparound safety glasses.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-hvac-technicians',
    title: 'Dry eyes for HVAC technicians',
    description:
      'Hot attics, dusty furnace rooms, insulation fibers and wind on the roof: why HVAC technicians get dry eyes, and habits that help from job to job.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `HVAC technicians get dry eyes because the job moves between some of the driest, dustiest places in a building: superheated summer attics, furnace rooms, crawlspaces full of insulation and rooftop units in wind and sun. Wear safety glasses or goggles in dust and on the roof, keep the van’s vents off your face, blink fully during close work, and use a lubricating drop as labeled on breaks.`,
      },
      { h: 'Why HVAC work dries the eyes' },
      {
        list: [
          `Attics. Summer attics are hot and dry, and insulation fibers and dust float in the air.`,
          `Furnace and boiler rooms. Warm, moving air around running equipment speeds evaporation from the eye.`,
          `Filters and ductwork. Pulling a dirty filter or opening a duct sends dust everywhere.`,
          `Rooftops. Wind, sun and glare off white or silver roof membranes.`,
          `The service van. Hours between calls with the heater or AC blowing.`,
          `Close work. Reading gauges, wiring diagrams and a tablet slow your blinking.`,
        ],
      },
      { h: 'In the attic' },
      {
        p: `A summer attic is the harshest place on a tech’s eyes. The heat is intense, the air is dry, and every step on blown-in insulation stirs fibers that can make eyes itch and sting. Sweat running into your eyes adds to it.`,
      },
      {
        list: [
          `Wear sealed goggles or wraparound safety glasses in insulation; a dust mask or respirator too.`,
          `Use a headlamp so you aren’t squinting into a dim corner.`,
          `A sweatband under your cap keeps sweat out of your eyes.`,
          `Take breaks outside the attic, and don’t rub your eyes with gloves full of fibers.`,
          `Wash your face and hands before you touch your eyes after attic work.`,
        ],
      },
      { h: 'Furnace rooms and the heating season' },
      {
        p: `In winter, service calls stack up in basements and utility closets where furnaces run hot. The air near the equipment is warm and dry, and any air leak or blower will move it across your face. Work to the side of the airflow when you can, and keep safety glasses on while you clean burners or vacuum a cabinet. You’ll also be in customers’ homes, many of them already dry from weeks of heat. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains why heated air feels so dry, which is useful when customers ask about humidifiers too.`,
      },
      { h: 'On the roof' },
      {
        p: `Rooftop units mean wind with nothing to block it, sun from above and glare bouncing off reflective roofing. Wraparound tinted safety glasses help with all three. Stand upwind of a condenser fan when you open a unit; it throws air and dust straight out. In winter, the roof is colder and windier than the parking lot, and cold wind tends to make eyes water first and feel dry later.`,
      },
      { h: 'Refrigerant and chemicals' },
      {
        p: `Refrigerant, coil cleaners and other chemicals can injure the eye. Wear goggles when connecting gauges or using cleaners, and follow your company’s safety training. If anything splashes or sprays into an eye, flush it with water right away and get emergency care. A lubricating drop is not a substitute for flushing, and Quell’s label doesn’t cover that situation.`,
      },
      { h: 'The van between calls' },
      {
        p: `After an attic, the van’s air conditioning feels great, but aimed at your face it dries your eyes further. Point the vents at your chest or the windshield. Shake insulation and dust off your clothes before you climb in, since the vents will blow whatever’s on the seat back at you. Keep your eyes off the tablet while driving, and use the time between calls to blink fully.`,
      },
      { h: 'Using a lubricating drop on the job' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. Handling: {tip}.`,
      },
      {
        list: [
          `Use it in the van between calls, parked, with clean hands.`,
          `Not in a dusty attic or next to running equipment.`,
          `Wait a moment for any blur to clear before driving.`,
          `Read the warning on the panel: {warnings}.`,
        ],
      },
      { h: 'Where to keep eye drops in the van' },
      {
        p: `The label’s storage line reads: {storage}. A service van in summer heat or a winter night falls outside that range. Carry the bottle in a shirt or jacket pocket during the day, and take it inside at night. The full label is on the [Drug Facts page](/drug-facts). [Can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) covers the winter side.`,
      },
      { h: 'Contact lenses on the job' },
      {
        p: `Quell’s label doesn’t give directions for use with contact lenses. If you wear them in attics and dusty spaces, ask your eye doctor what makes sense for your work.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Insulation fibers and dust can scratch the eye, and the feeling can be similar to dryness. The label says: {stopUse} For pain, light sensitivity, vision changes or the sense of something stuck in your eye, see a doctor that day. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in attics?',
        a: `Summer attics are hot and dry, and insulation fibers and dust float in the air. Sweat and rubbing your eyes with dirty gloves make it worse; goggles and breaks outside help.`,
      },
      {
        q: 'Can insulation get in your eyes?',
        a: `Yes. Fibers from blown-in insulation can float into the eyes and sting or itch. Wear sealed goggles in insulation, don’t rub, and rinse with clean water if fibers get in.`,
      },
      {
        q: 'What should I do if refrigerant sprays in my eye?',
        a: `Flush it with water right away and get emergency care. Eye drops are not a substitute, and goggles are the protection when connecting gauges.`,
      },
      {
        q: 'Where should an HVAC tech keep eye drops?',
        a: `In a shirt or jacket pocket during the day, and inside at night. Quell’s label gives a storage range that a van in summer or winter goes outside of.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-stock-traders',
    title: 'Dry eyes for stock traders',
    description:
      'Six screens, a fixed stare from the opening bell to the close, and cold office air: why traders get dry eyes, and how to fit eye breaks into market hours.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Stock traders get dry eyes from hours of fixed, focused staring at several screens, especially in the busiest minutes after the open and before the close, when nobody wants to look away. Focus slows blinking, and office air conditioning or heat dries the eye between blinks. Schedule eye breaks in the quieter midday, blink fully, keep vents off your face, and use a lubricating drop as labeled.`,
      },
      { h: 'Why trading is hard on the eyes' },
      {
        p: `The core of trading is watching numbers move. Price ladders, charts, news feeds and order tickets all compete for attention, and the eyes jump between them for hours. Intense concentration lowers your blink rate, and incomplete blinks don’t spread a full fresh layer of tears. The tear film’s outer oil layer slows evaporation, but each long gap between blinks gives the air more time to dry the surface.`,
      },
      {
        list: [
          `Concentration. Watching fast-moving prices is when people blink least.`,
          `Wide gaze. Several monitors keep your eyes moving and your head turning.`,
          `Office air. Trading floors and offices are kept cool for packed rooms full of computers.`,
          `Long hours. Pre-market prep, the regular session and after-hours news stretch the day.`,
        ],
      },
      { h: 'Dry eyes at work during market hours' },
      {
        p: `Regular trading on the major US stock exchanges runs from 9:30 a.m. to 4:00 p.m. Eastern time. For most traders, the first hour and the last hour are the busiest, and the middle of the day is calmer. Use that rhythm.`,
      },
      {
        list: [
          `Before the open: check that no vent is blowing on your face, adjust screens, and use a drop if you use one, as the label directs.`,
          `The open: no breaks, but make a conscious effort to blink fully.`,
          `Midday: step away from the desk, look out a window or across the room for a minute, and close your eyes for a few seconds.`,
          `The close: same as the open, focus and full blinks.`,
          `After the close: give your eyes real time away from screens before evening reading or charts.`,
        ],
      },
      { h: 'Multiple monitors, briefly' },
      {
        p: `How you arrange a wall of screens affects how wide your eyes open and how much you turn your head. Our guide to [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) goes through layout in detail. For traders, the short version: put the screen you watch most directly in front of you and slightly low, and move news feeds and secondary charts to the sides, so the long stare happens with your gaze slightly downward.`,
      },
      { h: 'Dry eyes when tired' },
      {
        p: `Many traders start before dawn to catch overseas markets and pre-market news, and some follow futures or crypto into the night. Short sleep leaves eyes feeling tired, heavy and dry. Watching screens late at night compounds it. Protect a set amount of sleep, and give your eyes a screen-free stretch before bed. [Dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) explains the connection.`,
      },
      { h: 'Home trading desks' },
      {
        p: `Plenty of traders work from home now. A home office brings its own issues: a space heater under the desk, a ceiling fan running over your chair, or a window unit blowing across the room. Point all of them away from your face, and consider a small humidifier near the desk in winter. A desk in a basement or spare room can be dry in the heating season.`,
      },
      { h: 'How to keep eyes moist during a long session' },
      {
        list: [
          `Blink fully. A half-blink doesn’t spread tears across the whole surface.`,
          `Keep the main screen slightly below eye level.`,
          `Turn down overly bright screens; brightness matching the room is easier on the eyes.`,
          `Add moisture to the air in winter, at home or at the desk if allowed.`,
          `Step away at midday, even for a minute.`,
        ],
      },
      { h: 'Using a lubricating drop at the desk' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. The directions: {directions}. Spacing the doses across the day fits a trading day well: before the open, midday and after the close. Keep the cap clean: {tip}.`,
      },
      {
        p: `Quell is milky, and vision can blur briefly after a drop, so don’t put one in seconds before you need to read a fast ticket. The label notes: {milky}. Read the warning too: {warnings}. The full panel is on the [Drug Facts page](/drug-facts). Store the bottle in a desk drawer; the label says: {storage}.`,
      },
      { h: 'Is it bad to use eye drops regularly?' },
      {
        p: `Follow the label’s directions. If you find yourself wanting drops much more often than it says, or the dryness doesn’t ease, that’s a sign to see an eye doctor rather than to use more. [Is it okay to use eye drops every day?](/guides/is-it-okay-to-use-eye-drops-every-day) covers daily use in more detail.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label says: {stopUse} Eye pain, blurry vision that doesn’t clear with blinking, and light sensitivity are reasons to book an exam, not to push through another session. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I trade stocks?',
        a: `Concentrating on fast-moving prices lowers your blink rate, and office air dries the eye between blinks. Several screens keep your eyes busy for hours with few natural breaks.`,
      },
      {
        q: 'When should a day trader take eye breaks?',
        a: `The midday session is usually calmer than the open and the close, so it’s a good time to step away for a minute, look into the distance and blink fully.`,
      },
      {
        q: 'How should a trader arrange screens to reduce eye strain?',
        a: `Put the screen you watch most directly in front of you and slightly below eye level, with news and secondary charts to the sides. Keep brightness close to the room’s light.`,
      },
      {
        q: 'Can I use eye drops at my trading desk?',
        a: `Yes, as the label directs, ideally before the open, at midday and after the close. Quell can blur vision briefly, so avoid using it right before you need to read a ticket.`,
      },
    ],
  },
  {
    slug: 'letter-of-medical-necessity-for-eye-drops',
    title: 'Letter of medical necessity for eye drops',
    description:
      'Do you need a letter of medical necessity to buy eye drops with HSA or FSA money? Usually not for OTC drops. What the IRS says and what plans may still ask.',
    category: 'ordering',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Usually not. Since the CARES Act, the IRS has counted over-the-counter medicines bought after December 31, 2019, as qualified medical expenses for HSAs, health FSAs, HRAs and Archer MSAs without a prescription. Lubricating eye drops sold as OTC drugs generally fall under that rule, so no letter is needed. Your plan can still ask for an itemized receipt, and a few administrators set their own extra requirements.`,
      },
      { h: 'What a letter of medical necessity is' },
      {
        p: `A letter of medical necessity, often shortened to LMN, is a note from a doctor or other licensed provider explaining why you need a particular product or service for a medical reason. Benefits administrators typically ask for one when an item could be used for general health or personal purposes as well as medical ones, so the purchase alone doesn’t show it’s a medical expense. Over-the-counter drugs with a Drug Facts panel are a different category.`,
      },
      { h: 'What the CARES Act changed' },
      {
        p: `Before 2020, over-the-counter medicines generally needed a prescription to be paid for with HSA or FSA money. The Coronavirus Aid, Relief, and Economic Security Act changed that. In the IRS’s summary of the change, over-the-counter products and medications became reimbursable without a prescription for amounts paid after December 31, 2019. The rule covers health savings accounts, Archer MSAs, health flexible spending arrangements and health reimbursement arrangements.`,
      },
      {
        p: `Quell is an over-the-counter drug with a Drug Facts panel. Its Uses, as printed: {uses}. That’s the kind of product the CARES Act rule was written for. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) goes into the history.`,
      },
      { h: 'When a plan might still ask for more' },
      {
        p: `The IRS sets what counts as a qualified expense; your employer’s plan and its administrator set the paperwork. That’s why your experience can differ from a coworker’s at another company.`,
      },
      {
        list: [
          `A health FSA must substantiate claims. IRS Publication 969 says the FSA needs a written statement from an independent third party showing the expense was incurred and the amount, plus your statement that it hasn’t been paid by other coverage.`,
          `An HSA usually doesn’t ask for receipts up front, but IRS Publication 969 says you must keep records showing distributions went to qualified medical expenses.`,
          `An administrator might ask for more information on an unusual or unclear receipt.`,
          `A limited-purpose FSA, often paired with an HSA, may cover only dental and vision expenses, and its plan decides what fits.`,
        ],
      },
      {
        p: `If your administrator asks for a letter for over-the-counter eye drops, ask which rule requires it. Sometimes the request comes from an automated review that didn’t recognize the item on the receipt, and a clear, itemized receipt answers it.`,
      },
      { h: 'If you do need a letter' },
      {
        list: [
          `Ask your administrator for their form; many have a standard one.`,
          `Bring it to your eye doctor or primary care provider at your next visit, or ask the office how they handle letter requests.`,
          `The provider fills in why you need the product and for how long.`,
          `Submit the letter with your claim or keep it on file, as the plan directs.`,
          `Keep a copy with your receipts.`,
        ],
      },
      { h: 'What your receipt needs to show' },
      {
        p: `For an online order, the confirmation email is the receipt. When you order Quell, it shows the order number, the product, the date, the subtotal, shipping and the total, and it names the seller, {company}. Keep it, or save it as a PDF. You can look up the order later on the [order lookup page](/orders), and [getting a receipt for your order](/guides/getting-a-receipt-for-your-order) explains what to do if you lose it.`,
      },
      {
        p: `Shipping, which is {shipping} (or free on {freeBottles} or more bottles), shows as a separate line. Whether your plan reimburses shipping is the plan’s call.`,
      },
      { h: 'Paying with an HSA or FSA card' },
      {
        p: `Payment is taken by card on the payment provider’s secure page. Whether a particular HSA or FSA debit card goes through depends on the card and the plan, and we can’t check that in advance. If it’s declined, pay with another card and submit a claim afterward, if your plan allows reimbursement. [How to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) walks through the steps.`,
      },
      { h: 'Checking the rule yourself' },
      {
        p: `The IRS publishes its HSA and FSA rules in Publication 969 and its medical expense rules in Publication 502, both on irs.gov. Your plan’s summary plan description and your administrator’s website list what they accept and what documentation they want. If those two disagree with what you’ve read online, the plan document wins for your account.`,
      },
      { h: 'What this page can’t tell you' },
      {
        p: `We can’t say whether your specific plan will reimburse a specific order, and this isn’t tax advice. For anything about your eyes rather than your account, such as whether a drop is right for you, the label is the guide, and an eye doctor or pharmacist is the person to ask. [Questions to ask a pharmacist](/guides/questions-to-ask-your-pharmacist) can help.`,
      },
    ],
    faq: [
      {
        q: 'Do I need a letter of medical necessity for over-the-counter eye drops?',
        a: `Usually not. Since the CARES Act, OTC medicines bought after December 31, 2019, count as qualified expenses for HSAs, FSAs and HRAs without a prescription. Your plan may still ask for an itemized receipt.`,
      },
      {
        q: 'What is a letter of medical necessity for an FSA?',
        a: `A note from a licensed provider explaining why you need a product or service for a medical reason. Administrators usually ask for one when an item could also be used for general or personal purposes.`,
      },
      {
        q: 'Why is my FSA asking for more information about eye drops?',
        a: `FSAs must substantiate claims, so an administrator may ask for an itemized receipt showing what you bought, the date and the amount. Ask what they need; a clear receipt often settles it.`,
      },
      {
        q: 'Who writes a letter of medical necessity?',
        a: `A doctor or other licensed health care provider, often on a form from your benefits administrator. For eye-related items, your eye doctor is the usual choice.`,
      },
    ],
  },
  {
    slug: 'can-you-get-addicted-to-eye-drops',
    title: 'Can you get addicted to eye drops?',
    description:
      'Can you get addicted to lubricating eye drops? What Quell’s label says about how often to use it, what it doesn’t say, and when to ask a pharmacist.',
    category: 'label',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Quell’s Drug Facts panel doesn’t mention dependence or addiction at all. What it does give is clear directions for how often to use it and a point at which to stop and ask a doctor. Most worries about getting hooked on eye drops come up around other kinds of drops with different active ingredients. If you have a specific concern, a pharmacist or eye doctor can answer it.`,
      },
      { h: 'What the label actually says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Every OTC drug sold in the US carries a Drug Facts panel in the format the FDA requires, and that panel is where you should look first. For Quell:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Warnings: {warnings}.`,
        ],
      },
      {
        p: `There is no line about dependence, tolerance or using the drop less over time. The label doesn’t say it’s habit-forming, and it doesn’t say it isn’t. It simply gives directions and a stop point. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Where the worry comes from' },
      {
        p: `People read online that eye drops can stop working or make eyes worse after a while. Those stories are usually about other kinds of drops: ones with different active ingredients made for purposes other than lubrication. This page won’t try to describe them, because the label of each of those products is where its own warnings live, and a pharmacist can explain how they differ.`,
      },
      {
        p: `What matters for any bottle in your cabinet is what its label says. If you aren’t sure what kind of drop you’ve been using, bring the bottle to a pharmacy counter and ask. [Questions to ask a pharmacist](/guides/questions-to-ask-your-pharmacist) gives you a starting list.`,
      },
      { h: 'Is it bad to use eye drops too much?' },
      {
        p: `The label’s directions set how often to use Quell: {directions}. Using more than that isn’t covered by the label. Putting several drops in at once mostly means extra liquid running down your cheek; [what happens if you put too many eye drops in](/guides/too-many-eye-drops-at-once) explains. If you swallow it, the label says: {swallowed}.`,
      },
      {
        p: `Feeling like you need drops much more often than the directions say is worth paying attention to. It usually means something about the dryness needs looking at, whether that’s the air where you spend your day or something an eye doctor should examine. Using more drops isn’t the answer the label gives; asking a doctor is.`,
      },
      { h: 'Is it bad to use eye drops regularly?' },
      {
        p: `Using a lubricating drop every day, as its label directs, is how many people use one. Quell’s directions are written as a daily schedule. [Is it okay to use eye drops every day?](/guides/is-it-okay-to-use-eye-drops-every-day) covers that question on its own page. The panel’s stop-use guidance sets the limit, and it’s quoted in full in the next section.`,
      },
      { h: 'Signs to stop and ask a doctor' },
      {
        p: `This is the part of the panel that answers the “how long is too long” question. In its own words: {stopUse} And on the bottle itself, the panel’s do-not-use line reads: {doNotUse}.`,
      },
      {
        p: `None of that is about habit or dependence; it’s about noticing when dryness isn’t ordinary and handing it to a professional. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) adds more context on what an eye doctor looks for.`,
      },
      { h: 'Why your eyes may feel dry when you stop' },
      {
        p: `If you stop using a lubricating drop and your eyes feel dry again, the most likely explanation is that whatever made them dry is still there: heated or air-conditioned air, wind, long screen sessions, or something an eye doctor needs to check. Blinking spreads the tear film, and screens slow blinking; dry, moving air speeds evaporation. A drop doesn’t change those conditions. Fixing the air around you and taking screen breaks sometimes helps more than people expect.`,
      },
      { h: 'How to keep eyes moist without relying on drops alone' },
      {
        list: [
          `Run a humidifier in the bedroom during the heating season.`,
          `Point vents and fans away from your face at home, at work and in the car.`,
          `Take regular breaks from screens and blink fully.`,
          `Wear wraparound glasses outdoors in wind.`,
        ],
      },
      { h: 'Questions the label leaves to a professional' },
      {
        p: `The label doesn’t give directions for contact lens wearers, for children, or for using Quell with other eye drops. For any of those, ask your eye doctor or pharmacist. The same goes for any concern about how long you’ve been using drops or how much. You can also reach us at {phone} ({hours}) with questions about the product or your order, though we can’t give medical advice.`,
      },
    ],
    faq: [
      {
        q: 'Can you become dependent on lubricating eye drops?',
        a: `Quell’s label doesn’t mention dependence either way. It gives directions for how often to use the drop, and its stop-use guidance reads: {stopUse}`,
      },
      {
        q: 'Is it bad to use eye drops too much?',
        a: `Use them as the label directs. Wanting drops much more often than the directions say is a reason to see an eye doctor, not to use more.`,
      },
      {
        q: 'Why do my eyes feel dry again when I stop using eye drops?',
        a: `Usually because whatever dried them is still there, such as heated air, wind or long screen time. If dryness keeps returning, an eye doctor can look for the cause.`,
      },
      {
        q: 'Who can I ask about eye drop overuse?',
        a: `A pharmacist or an eye doctor. Bring the bottle so they can see exactly what you’ve been using and how often.`,
      },
    ],
  },
]
