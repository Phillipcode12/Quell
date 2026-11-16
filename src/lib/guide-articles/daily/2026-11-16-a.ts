import type { Guide } from '@/lib/guide-types'
export const DAILY_20261116_A: Guide[] = [
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-pocatello-id:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024156.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024156.csv
   *   (POCATELLO RGNL AP, elev 1364.9 m: annual precip 11.82 in; May 1.40 wettest;
   *   Jul 0.51, Aug 0.53 driest; annual snow 38.5 in, Dec 10.1, Jan 8.5; Jul high
   *   89.3 F; Dec high 34.3 F, Jan 34.2 F; 39.1 days at or above 90 F; 167.4 nights
   *   at or below 32 F; 35.8 days with a high at or below 32 F; 8.1 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (POCATELLO, ID, WBAN 24156: Jul 56/23, Aug 55/22, Mar 73/51, Dec 80/74,
   *   Jan 79/73, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (POCATELLO annual 4.3, above Boise 3.4 and Lewiston 2.6; Apr 5.1 highest
   *   month, Sep 3.7 lowest)
   * Elevation is the NOAA station elevation, converted (1364.9 m is about 4,480 ft).
   */
  {
    slug: 'dry-eye-relief-pocatello-id',
    title: 'Dry eye relief in Pocatello, Idaho',
    description:
      'Pocatello’s July and August afternoons average 22 to 23 percent humidity, and April brings the most wind. NOAA’s numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Pocatello depends on the season. NOAA’s table puts July and August afternoons at the regional airport at 22 to 23 percent humidity, and spring brings the windiest weeks of the year. Winter air outside is damp, but furnaces dry it indoors. Block wind with wraparound sunglasses, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Pocatello’s air in NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Pocatello Regional Airport, which sits outside the city at about 1,365 meters (roughly 4,480 feet) on the edge of the Snake River Plain, describe a high and mostly dry climate:`,
      },
      {
        list: [
          `About 11.82 inches of precipitation in a normal year, less than a foot.`,
          `May is the wettest month at 1.40 inches; July (0.51) and August (0.53) are the driest.`,
          `Snowfall averages 38.5 inches, with December (10.1) and January (8.5) the snowiest months.`,
          `July highs average 89.3°F, and about 39 days a year reach 90°F.`,
          `Roughly 167 nights a year drop to 32°F or below, and about 8 reach zero or colder.`,
        ],
      },
      {
        p: `Less than a foot of precipitation is a thin water budget for any city. What shifts from month to month is where the dryness comes from: sun and low humidity in summer, wind in spring, and heated indoor air in winter.`,
      },
      { h: 'Why are my eyes dry in Pocatello in July and August?' },
      {
        p: `NOAA’s relative humidity table gives Pocatello’s July afternoons an average of 23 percent and August afternoons 22 percent, against mornings in the mid-50s. Those are the lowest afternoon readings of the year, and they arrive with the least rain. At that humidity the watery part of the tear film evaporates quickly between blinks, and eyes can start to feel gritty by mid-afternoon, especially after time outside.`,
      },
      {
        list: [
          `Walk or ride the Portneuf Greenway early, while the air holds more than twice the afternoon humidity.`,
          `Wraparound sunglasses cut both glare and moving air; a brimmed hat helps on open ground.`,
          `In the car, point the air conditioning vents at your chest or the floor rather than your face.`,
          `Give your eyes a few slow, full blinks when you come in from the heat.`,
        ],
      },
      { h: 'Spring wind on the Snake River Plain' },
      {
        p: `NOAA’s wind table gives Pocatello a higher yearly average than Boise or Lewiston, and April is its windiest month, with September the calmest. Spring wind across open ground carries dust and speeds evaporation from the eye’s surface, even on days when humidity looks moderate (March afternoons average 51 percent). Commuters on Interstate 15 and Interstate 86, students crossing the Idaho State campus and anyone working outdoors feel it first.`,
      },
      {
        p: `Wind is why sunglasses that wrap around the sides do more than flat lenses. Keep a pair in the truck, and add a brimmed cap on gusty days so the visor breaks the air coming over your brow. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why moving air matters so much.`,
      },
      { h: 'Winter: snowy outside, dry indoors' },
      {
        p: `December and January reverse the summer picture. Afternoons average 74 and 73 percent humidity, normal highs hover around 34°F, and about 36 days a year never get above freezing. Inside, the furnace warms that cold air without adding water, so the relative humidity in a heated room falls far below the outdoor figure. Eyes that were fine in a snow squall can feel dry an hour later in a warm office.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Move your chair or bed out of the path of floor registers and space heaters.`,
          `At Pebble Creek or on a snowmobile trail, goggles block cold wind better than sunglasses.`,
          `Turn the car’s heat toward the floor once the windshield clears.`,
        ],
      },
      { h: 'Dry eyes at work and at the end of the day' },
      {
        p: `Plenty of Pocatello days end in front of a screen: coursework at Idaho State, a shift at the hospital or the rail yard, evening email after a day outdoors. Screens slow your blink rate, and a heated or air-conditioned room dries the tear film between blinks, so dryness often peaks late in the day. Look away from the screen regularly and finish each blink. [Why eyes feel dry at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) covers the pattern in more detail.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions read: {directions}. The Do not use line says: {doNotUse}.`,
      },
      {
        p: `In a Pocatello winter the storage line deserves attention too: {storage}. A bottle left in a truck at the trailhead in January can fall well below that range, so keep it in an inside pocket. Every line of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Pocatello' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Pocatello, Chubbuck, Inkom and the rest of the United States. You check out as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so order before you’re down to the last bottle. The [Pocatello page](/eye-drops/pocatello-id) and the [Idaho page](/eye-drops/state/idaho) have local details, or you can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop eases everyday dryness; it doesn’t explain why symptoms keep returning. The label draws the line here: {stopUse} Pain, blurred vision that doesn’t clear or new sensitivity to light calls for an eye doctor, and our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more. The [self-check](/self-check) can help you put words to what you feel; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Pocatello?',
        a: `July and August afternoons at Pocatello Regional Airport average 22 to 23 percent humidity in NOAA’s table, spring is windy, and winter heating dries indoor air. Each one speeds evaporation from the tear film.`,
      },
      {
        q: 'How windy is Pocatello?',
        a: `NOAA’s wind table shows Pocatello with a higher annual average than Boise or Lewiston, with April the windiest month and September the calmest. It’s a comparison among Idaho stations, not a national ranking.`,
      },
      {
        q: 'How much snow does Pocatello get?',
        a: `About 38.5 inches a year at the regional airport, according to NOAA’s 1991 to 2020 normals. December averages 10.1 inches and January 8.5.`,
      },
      {
        q: 'Can I order Quell eye drops in Pocatello?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Pocatello and every other US address, with guest checkout and email tracking. No delivery date is promised, so reorder with time to spare.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-roswell-nm:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023009.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023009.csv
   *   (ROSWELL IND AIR PK, elev 1112.2 m: annual precip 11.63 in; Jan 0.36, Feb 0.35
   *   driest; Jul 1.82, Aug 1.68 wettest; annual snow 9.6 in, Dec 3.8; Jun high 96.2 F,
   *   Jul 96.5 F; Dec high 56.5 F, Jan 57.3 F; 110.1 days at or above 90 F; 25.9 days
   *   at or above 100 F; 87.4 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ROSWELL, NM, WBAN 23009: afternoons Mar 25, Apr 22, May 23, Jun 24, Jul 31,
   *   Aug 34, Sep 38, Dec 43; annual 58/32 morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ROSWELL: Apr 4.7 highest month, Dec 3.2 lowest)
   * Elevation is the NOAA station elevation, converted (1112.2 m is about 3,650 ft).
   */
  {
    slug: 'dry-eye-relief-roswell-nm',
    title: 'Dry eye relief in Roswell, New Mexico',
    description:
      'Roswell’s April afternoons average 22 percent humidity, and about 110 days a year top 90°F. What NOAA’s records mean for dry eyes, season by season.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Roswell means planning around spring. NOAA’s table puts April afternoons at the Roswell airport at 22 percent humidity, with March through June all in the low to mid 20s, and April is also the windiest month. Summer heat tops 90°F on about 110 days a year. Shade your eyes from wind and sun, blink fully at screens, follow your drop’s label, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Roswell’s climate by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals come from Roswell Air Center south of the city, which NOAA lists as Roswell Industrial Air Park, at about 1,112 meters (roughly 3,650 feet) in the Pecos Valley:`,
      },
      {
        list: [
          `About 11.63 inches of precipitation a year.`,
          `January (0.36 inches) and February (0.35) are the driest months; July is the wettest at 1.82 inches, followed by August at 1.68.`,
          `Normal snowfall is 9.6 inches, led by December at 3.8.`,
          `June and July highs average about 96°F; about 110 days a year reach 90°F, and about 26 reach 100°F.`,
          `About 87 nights a year fall to 32°F or below.`,
        ],
      },
      { h: 'Why spring is hardest on your eyes' },
      {
        p: `The afternoon humidity column in NOAA’s table tells the story. Roswell afternoons average 25 percent in March, 22 in April, 23 in May and 24 in June, the four lowest months of the year. Rain stays scarce until July, and NOAA’s wind table shows April as Roswell’s windiest month and December its calmest. Dry, moving air carrying dust from fields and open range is a tough mix for the tear film: its watery layer thins faster than blinking can restore it.`,
      },
      {
        list: [
          `Check the wind forecast before a long afternoon outside, and save errands with a lot of walking for the morning.`,
          `Wraparound sunglasses help on gusty days; a pair with a foam seal helps more if you work outside.`,
          `Switch the car to recirculate when dust is blowing, and aim the vents low.`,
          `Wipe dust off your face with a damp cloth before touching anywhere near your eyes.`,
        ],
      },
      { h: 'The summer storm season' },
      {
        p: `July through September bring most of Roswell’s rain, and afternoon humidity climbs into the 30s (31 percent in July, 34 in August, 38 in September). That’s still dry by most measures, and it comes with the year’s greatest heat, an average July high of 96.5°F. Air conditioning runs hard in homes, offices and cars, and conditioned air is dry air. A day at Bottomless Lakes State Park or the Bitter Lake National Wildlife Refuge adds glare off the water with the sun nearly overhead.`,
      },
      {
        p: `Shade and timing do more than anything you can carry. Get outdoor chores done by midmorning when you can, wear sunglasses that cover the sides, and keep the dashboard vents pointed away from your eyes on the drive home.`,
      },
      { h: 'Winter mornings and heated rooms' },
      {
        p: `Roswell afternoons stay mild in winter, with December and January highs near 57°F, but nights freeze about 87 times a year. December afternoons are the most humid of the year at 43 percent. The drying moves indoors: a furnace or space heater runs through cold mornings, and air near a vent gets especially dry. A bedroom humidifier and a chair moved away from the heat both help. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room.`,
      },
      { h: 'Working outdoors in the Pecos Valley' },
      {
        p: `Farm and dairy work, oil field jobs and construction keep many Roswell residents outside for full shifts. Wind, dust and long hours of sun are the main strains on their eyes. Safety eyewear required on a job is what guards against flying debris; a lubricating drop is for dryness only. Our guide to [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers drops and shift routines.`,
      },
      { h: 'Using Quell as the label directs' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters in air that pulls water away quickly. Its directions read: {directions}. When using it: {tip}. The panel’s caution reads: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `For storage the label says: {storage}. A June afternoon in a parked car in Roswell can push well past that, so carry the bottle in a bag that comes inside with you.`,
      },
      { h: 'Getting Quell in Roswell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, Roswell, Dexter and Hagerman included. Checkout doesn’t require an account; shipping is {shipping}, or free on {freeBottles} bottles or more. You’ll get tracking by email. No delivery date is promised, so order ahead. Local details are on the [Roswell page](/eye-drops/roswell-nm) and the [New Mexico page](/eye-drops/state/new-mexico).`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `{stopUse} Those limits come straight from the Drug Facts panel. Sudden pain, a change in vision or symptoms in only one eye belong with an eye doctor rather than another bottle; see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What is the humidity in Roswell, New Mexico?',
        a: `NOAA’s table averages 58 percent in the morning and 32 percent in the afternoon across the year. April afternoons are lowest at 22 percent, and December afternoons are highest at 43.`,
      },
      {
        q: 'When is the rainy season in Roswell?',
        a: `July through September. July is the wettest month at 1.82 inches in NOAA’s 1991 to 2020 normals, while January and February each get only about a third of an inch.`,
      },
      {
        q: 'How many 100 degree days does Roswell get?',
        a: `About 26 a year at the Roswell Air Center station, according to NOAA’s normals, and about 110 days reach 90°F or higher.`,
      },
      {
        q: 'Does Quell deliver to Roswell, NM?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Roswell and the rest of the US with guest checkout and tracking by email. There’s no promised delivery date, so leave yourself some time.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-abilene-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013962.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013962.csv
   *   (ABILENE RGNL AP, elev 545.6 m: annual precip 25.24 in; Jun 3.44, May 3.21
   *   wettest; Jan 1.10, Dec 1.26, Feb 1.29 driest; annual snow 3.7 in; Jul high
   *   96.4 F, Aug 96.0 F; Jan high 58.8 F, Dec 59.4 F; 102.4 days at or above 90 F;
   *   18.5 days at or above 100 F; 47.7 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ABILENE, TX, WBAN 13962: afternoons 45 to 52 every month, Aug 45 lowest)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ABILENE annual 4.9; Dallas 4.2, San Antonio 3.7, Austin 2.9, Midland-Odessa 4.9;
   *   Apr 5.8 highest month, Aug 4.0 lowest)
   * Elevation is the NOAA station elevation, converted (545.6 m is about 1,790 ft).
   */
  {
    slug: 'dry-eye-relief-abilene-tx',
    title: 'Dry eye relief in Abilene, Texas',
    description:
      'Abilene is windier than Dallas, Austin or San Antonio in NOAA’s records, with about 102 days a year at 90°F. How wind, heat and A/C dry your eyes.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Abilene is mostly about wind and heat. NOAA’s wind table shows Abilene breezier through the year than Dallas, Austin or San Antonio, with April the windiest month, and about 102 days a year reach 90°F. Afternoon humidity runs from the mid-40s to the low 50s. Shield your eyes outside, keep car and office vents off your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Abilene’s weather in NOAA’s records' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Abilene Regional Airport, on the southeast side of the city at about 546 meters (roughly 1,790 feet), give this outline:`,
      },
      {
        list: [
          `About 25.24 inches of precipitation a year, with June (3.44 inches) and May (3.21) the wettest months.`,
          `January is the driest month at 1.10 inches, with December (1.26) and February (1.29) close behind.`,
          `July highs average 96.4°F and August 96.0°F; about 102 days a year reach 90°F and about 18 reach 100°F.`,
          `About 48 nights a year fall to 32°F or below, and normal snowfall is 3.7 inches.`,
        ],
      },
      { h: 'Is Abilene windy?' },
      {
        p: `Compared with the big cities to the east and south, yes. In NOAA’s station wind table, Abilene’s annual average beats Dallas, San Antonio and Austin and matches Midland-Odessa. April leads the year, and August is the calmest month. Wind matters to your eyes because moving air carries water off the tear film faster, and the rolling open country around Abilene has little to break it.`,
      },
      {
        list: [
          `Wraparound sunglasses beat flat lenses on a gusty day.`,
          `At a ballgame or outdoor event, sit with your back to the wind when you can.`,
          `Spring wind lifts dust from fields and building sites; rinse your face before touching your eyes.`,
          `Keep the truck windows up on windy highway stretches and point the vents low.`,
        ],
      },
      { h: 'Summer heat and air conditioning' },
      {
        p: `Abilene’s afternoon humidity isn’t desert-low. NOAA’s table shows afternoons between 45 and 52 percent every month, with August lowest at 45. The bigger summer problem is indoors. With highs in the mid-90s from June through August, air conditioning runs from morning to night in houses, offices, classrooms at Abilene Christian, Hardin-Simmons and McMurry, and every vehicle on the road. Cooling pulls moisture out of the air, and a vent blowing toward your face dries the eye’s surface quickly.`,
      },
      {
        list: [
          `Angle dashboard and ceiling vents away from your face.`,
          `Every so often, look up from the screen to the far side of the room and blink fully.`,
          `Keep a bottle at work so a dry afternoon doesn’t mean waiting until you get home, and use it as the label directs.`,
        ],
      },
      { h: 'The flight line, the ranch and the oil patch' },
      {
        p: `Dyess Air Force Base, ranching and the oil and gas trade keep a good share of Abilene’s workforce in open air, around engines, wind and dust. The protective eyewear on those jobs is set by the employer, and it’s what does the protecting; a lubricating drop is only for dryness. Our guide on [dry eyes for farmers](/guides/dry-eyes-for-farmers) covers long days around livestock, feed and field dust.`,
      },
      { h: 'Winter: mild days, heated nights' },
      {
        p: `December and January highs average near 59°F, and the year’s driest months by rainfall arrive then. Nights fall below freezing about 48 times a year, and the heat comes on. A heated bedroom on a dry January night can leave eyes scratchy in the morning. A humidifier, a slightly lower thermostat and a ceiling fan that doesn’t blow across the bed all help; our guide to [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) explains why.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, it’s labeled for this use: {uses}. Directions: {directions}. The Do not use line reads: {doNotUse}.`,
      },
      {
        p: `Keep it out of a hot truck as well. The label says: {storage}. On a 96°F August afternoon, a closed cab gets far hotter than that. The [Drug Facts page](/drug-facts) has the rest, including the egg and bird caution.`,
      },
      { h: 'Ordering in Abilene' },
      {
        p: `Abilene orders ship from Brentwood, Tennessee, like every other US order. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. A tracking email follows, but there’s no promised arrival date. See the [Abilene page](/eye-drops/abilene-tx) and the [Texas page](/eye-drops/state/texas), or [order here](/#buy).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Dryness that keeps coming back, or anything beyond dryness, is for an eye doctor to sort out. The label says: {stopUse} Our [self-check](/self-check) can help you describe symptoms before an appointment, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in Abilene?',
        a: `Steady wind, about 102 days a year at 90°F or above, and long hours of air conditioning all pull moisture from the tear film. NOAA’s wind table shows Abilene breezier than Dallas, Austin or San Antonio.`,
      },
      {
        q: 'Is Abilene, Texas windy?',
        a: `On the windy side for Texas. NOAA’s station table gives Abilene a higher annual average than Dallas, San Antonio and Austin, level with Midland-Odessa, and April is its windiest month.`,
      },
      {
        q: 'How hot does Abilene get in the summer?',
        a: `NOAA’s 1991 to 2020 normals put July highs at 96.4°F and August highs at 96.0°F, with about 18 days a year reaching 100°F.`,
      },
      {
        q: 'Can I get eye drops shipped to Abilene?',
        a: `Yes. Quell ships to Abilene from Brentwood, Tennessee, with guest checkout and email tracking, and orders of {freeBottles} or more bottles ship free. No arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-san-angelo-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023034.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023034.csv
   *   (SAN ANGELO, TX, elev 576.1 m: annual precip 20.93 in; May 3.05 wettest;
   *   Dec 0.89, Jan 0.92 driest; Jul 1.10, Aug 2.42; Jul high 97.4 F; 118.9 days at or
   *   above 90 F; 29.9 days at or above 100 F; 48.8 nights at or below 32 F; snowfall
   *   normals blank at this station, so not used)
   * - Abilene comparison from USW00013962 (25.24 in; 102.4 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SAN ANGELO, TX, WBAN 23034: mornings 72 to 82; afternoons Mar 44, Apr 43,
   *   Jul 43, Aug 44; annual 77/48)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SAN ANGELO: Apr 5.0 highest month, Sep 3.5 lowest)
   * Elevation is the NOAA station elevation, converted (576.1 m is about 1,890 ft).
   */
  {
    slug: 'dry-eye-relief-san-angelo-tx',
    title: 'Dry eye relief in San Angelo, Texas',
    description:
      'About 119 days a year reach 90°F in San Angelo, and April and July afternoons average 43 percent humidity. NOAA’s data and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in San Angelo starts with heat and sun. NOAA’s normals count about 119 days a year at 90°F or hotter at the San Angelo airport, and afternoons in April and July average just 43 percent humidity. Keep vents and wind off your eyes, take screen breaks, use a lubricating drop exactly as labeled, and see an eye doctor for pain, vision changes or dryness that won’t quit.`,
      },
      { h: 'San Angelo’s climate at a glance' },
      {
        p: `NOAA’s 1991 to 2020 normals for San Angelo come from Mathis Field, south of the city, at about 576 meters (roughly 1,890 feet). Next to Abilene’s figures from up the road, the numbers run hotter and drier:`,
      },
      {
        list: [
          `About 20.93 inches of precipitation a year, roughly 4 inches less than Abilene’s 25.24.`,
          `May is the wettest month at 3.05 inches; December (0.89) and January (0.92) are the driest.`,
          `July rain dips to 1.10 inches, between wetter months on either side.`,
          `July highs average 97.4°F; about 119 days reach 90°F and about 30 reach 100°F.`,
          `About 49 nights a year drop to 32°F or below.`,
        ],
      },
      { h: 'Is San Angelo humid?' },
      {
        p: `Mornings, somewhat; afternoons, not very. NOAA’s relative humidity table puts San Angelo’s mornings between 72 and 82 percent, but afternoons fall to 43 percent in April and July and 44 in March and August. Across the year the afternoon average is 48 percent. Sunny afternoons in the 40s draw water from the eye’s surface steadily, and the effect builds over a long day on Lake Nasworthy or along the Concho River.`,
      },
      { h: 'Spring wind meets falling humidity' },
      {
        p: `NOAA’s wind table shows April as San Angelo’s windiest month and September its calmest. Spring wind peaks just as afternoon humidity sinks toward its low point, so March and April combine moving air, little moisture and stronger sun. Wraparound sunglasses and a brimmed hat help, and so does turning away from the gusts when you’re standing still at a ball field, a parade route or a stock show pen.`,
      },
      { h: 'July: the heat peak and the rain gap' },
      {
        p: `July is the month to plan for. Highs average 97.4°F, afternoon humidity sits at 43 percent, and rainfall drops to 1.10 inches, less than half of May or August. The hottest hours get spent indoors under air conditioning, which dries the air further. If your eyes feel worst in midsummer, that combination is the likely reason, and a few habits help:`,
      },
      {
        list: [
          `Run errands and yard work before noon.`,
          `Aim car and office vents at your hands or the floor.`,
          `Break up screen time by looking across the room and blinking fully.`,
          `Store your drops away from the dashboard; the label’s storage line is below.`,
        ],
      },
      {
        p: `July nights stay warm too, with lows averaging 72.3°F, so many homes run air conditioning around the clock. A window unit or ceiling fan blowing toward the pillow can leave eyes dry on waking; turn the fan to low and aim it at your feet instead.`,
      },
      { h: 'Classrooms, Goodfellow and the job site' },
      {
        p: `Students at Angelo State and people training at Goodfellow Air Force Base spend long hours in classrooms and at screens, where blink rates fall and cooled air dries the room. Outdoor workers on ranches, oil leases and building sites get the other half: wind, dust and sun. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains the screen side.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its use this way: {uses}. Directions on the panel: {directions}. It also says: {tip}.`,
      },
      {
        p: `For a San Angelo summer, the storage line matters most: {storage}. A parked car passes that easily, so carry the bottle in with you. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to San Angelo' },
      {
        p: `Quell ships to San Angelo, Wall, Christoval and every other US address from Brentwood, Tennessee. There’s no account to create; you check out as a guest. Shipping is {shipping}, free with {freeBottles} or more bottles, and tracking comes by email, though no delivery date is promised. The [San Angelo page](/eye-drops/san-angelo-tx) and [Texas page](/eye-drops/state/texas) have more.`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `The label is specific about when to stop: {stopUse} An eye doctor is also the right call for pain, light sensitivity, or blurred vision that doesn’t clear after blinking. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How many days over 90 degrees does San Angelo get?',
        a: `About 119 a year at Mathis Field, according to NOAA’s 1991 to 2020 normals. About 30 of those reach 100°F.`,
      },
      {
        q: 'What is the driest month in San Angelo?',
        a: `December, at 0.89 inches of precipitation in NOAA’s normals, with January close behind at 0.92. For humidity, April and July afternoons are lowest at 43 percent.`,
      },
      {
        q: 'Is San Angelo drier than Abilene?',
        a: `By rainfall, yes: NOAA’s normals give San Angelo about 20.93 inches a year and Abilene about 25.24. San Angelo also logs more 90°F days, about 119 against Abilene’s 102.`,
      },
      {
        q: 'Does Quell ship to San Angelo, Texas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to San Angelo with guest checkout and tracking by email. Delivery dates aren’t promised, so order before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-corpus-christi-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012924.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012924.csv
   *   (CORPUS CHRISTI, TX, elev 13.7 m: annual precip 31.74 in; Sep 5.42 wettest;
   *   Feb 1.29, Jan 1.39 driest; Aug high 95.0 F; Jun 91.6, Sep 90.8; Jan high 67.9 F;
   *   122.9 days at or above 90 F; 3.7 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (CORPUS CHRISTI, TX, WBAN 12924: annual 89/61; afternoons Jul 57, Aug 56,
   *   Jan 66, Feb 64, Dec 63)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (CORPUS CHRISTI annual 5.2; among Texas rows only Amarillo 5.8 and Lubbock 5.3
   *   are higher; Houston 3.4; Apr 6.2 highest month, Sep 4.3 lowest)
   * Elevation is the NOAA station elevation, converted (13.7 m is about 45 ft).
   */
  {
    slug: 'dry-eye-relief-corpus-christi-tx',
    title: 'Dry eye relief in Corpus Christi, Texas',
    description:
      'Corpus Christi is humid, yet eyes still dry out. NOAA’s wind and heat records show why, and what helps on the bay, at work and under the A/C.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Corpus Christi isn’t about dry outdoor air: NOAA’s table puts mornings near 90 percent humidity. The trouble is wind, sun and air conditioning. Among Texas stations in NOAA’s wind table, only Amarillo and Lubbock average more wind, about 123 days a year reach 90°F, and cooled indoor air is dry air. Block the breeze, angle vents away, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Corpus Christi’s weather in NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for Corpus Christi come from the international airport west of downtown, about 14 meters (roughly 45 feet) above sea level:`,
      },
      {
        list: [
          `About 31.74 inches of precipitation a year. September is by far the wettest month at 5.42 inches.`,
          `February (1.29 inches) and January (1.39) are the driest.`,
          `August highs average 95.0°F, and about 123 days a year reach 90°F.`,
          `Freezing nights are rare, about 4 a year.`,
        ],
      },
      { h: 'Why do my eyes feel dry when it’s this humid?' },
      {
        p: `NOAA’s relative humidity table gives Corpus Christi an average of 89 percent in the morning and 61 percent in the afternoon across the year. The lowest afternoons come in August (56 percent) and July (57), the same weeks as the strongest heat. Humid air slows evaporation from the eye, but it doesn’t stop it. Three things around the bay speed it back up: steady wind, strong sun with glare off the water, and long stretches indoors under air conditioning.`,
      },
      { h: 'The wind off the bay' },
      {
        p: `Corpus Christi’s yearly wind average in NOAA’s table runs well ahead of Houston’s, and April is its windiest month, with September the calmest. Moving air peels water off the tear film between blinks, and along Ocean Drive, on the seawall or out on a pier at Padre Island there’s nothing between your eyes and the breeze.`,
      },
      {
        list: [
          `Wraparound sunglasses with side coverage handle wind and water glare together.`,
          `On a boat or pier, a brimmed hat breaks the wind coming over your forehead.`,
          `Rinse salt spray off your face with fresh water before touching your eyes.`,
          `For kiteboarding or windsurfing, sport goggles cover more of the eye than sunglasses.`,
        ],
      },
      { h: 'Air conditioning, offices and the plant shift' },
      {
        p: `With highs above 90°F from June through September, air conditioning runs almost constantly in Corpus Christi homes, offices, classrooms at Texas A&M University-Corpus Christi and cars. Cooling strips moisture from the air, and a vent aimed at your face pushes that dry air straight across your eyes. Shift workers at the port, the refineries and Naval Air Station Corpus Christi move between hot, humid outdoors and cold control rooms many times a day.`,
      },
      {
        list: [
          `Point vents at your chest or the floor, at your desk and in the car.`,
          `During long screen stretches, look away regularly and blink completely; our guide on [eye drops for computer users](/guides/eye-drops-for-computer-users) has a routine.`,
          `Keep a bottle in your bag or locker so a dry shift doesn’t mean waiting until home. [Dry eyes in a hot workplace](/guides/dry-eyes-in-a-hot-workplace) covers the plant side.`,
        ],
      },
      { h: 'Winter on the coast' },
      {
        p: `December through February bring cooler afternoons (January highs average 67.9°F) and the year’s lightest rain, yet afternoon humidity stays in the 60s, at 66 percent in January. Heating runs mainly during cold snaps, so the long indoor drying of northern winters is brief here. For most people in Corpus Christi, the eye-drying season is summer, not winter.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions on its Drug Facts panel read: {directions}. Its Do not use line says: {doNotUse}.`,
      },
      {
        p: `Because a car parked in an August lot can climb past the storage range, keep this line in mind too: {storage}. Everything else, including the egg and bird caution, is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Corpus Christi' },
      {
        p: `We ship from Brentwood, Tennessee, to Corpus Christi, Portland, Robstown, North Padre Island and anywhere else in the US. Checkout is as a guest, shipping costs {shipping}, and orders of {freeBottles} bottles or more ship free. You’ll get tracking by email; there’s no promised delivery date. The [Corpus Christi page](/eye-drops/corpus-christi-tx) and the [Texas page](/eye-drops/state/texas) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Ongoing dryness can have causes a drop won’t sort out. The Drug Facts panel says: {stopUse} Pain, sand or grit that won’t wash out, or blurred vision are reasons to see an eye doctor promptly. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in Corpus Christi if it’s so humid?',
        a: `Humidity slows evaporation, but wind, sun and air conditioning speed it back up. NOAA’s wind table shows Corpus Christi among the windiest stations in Texas, and indoor cooling dries the air you spend most of your hours in.`,
      },
      {
        q: 'Is Corpus Christi windy?',
        a: `Yes. Among the Texas stations in NOAA’s wind table, only Amarillo and Lubbock have a higher yearly average, and April is Corpus Christi’s windiest month.`,
      },
      {
        q: 'What is the rainiest month in Corpus Christi?',
        a: `September, at 5.42 inches in NOAA’s 1991 to 2020 normals. February is the driest at 1.29 inches.`,
      },
      {
        q: 'Can I order Quell eye drops to Corpus Christi?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, Corpus Christi included, with guest checkout and email tracking. No arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-jacksonville-fl:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013889.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013889.csv
   *   (JACKSONVILLE, FL, elev 10.1 m: annual precip 53.40 in; Jun 7.60, Sep 7.56
   *   wettest; Nov 2.00, Dec 2.78, Feb 2.86 driest; Jul high 91.9 F; May high 85.9 F,
   *   Sep 87.2 F; Jan high 65.5 F, low 42.9 F; 80.1 days at or above 90 F; 14.3 nights
   *   at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (JACKSONVILLE, FL, WBAN 13889: mornings 85 to 92; afternoons Mar 50, Apr 48,
   *   May 51, Jun to Dec 57 to 63)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (JACKSONVILLE: Mar 3.5 highest month, Aug 2.5 lowest)
   * Elevation is the NOAA station elevation, converted (10.1 m is about 33 ft).
   */
  {
    slug: 'dry-eye-relief-jacksonville-fl',
    title: 'Dry eye relief in Jacksonville, Florida',
    description:
      'Jacksonville is humid, but April afternoons drop to 48 percent and A/C runs for months. NOAA’s numbers on when eyes dry out, and what helps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Jacksonville starts with an honest look at the humidity: NOAA’s table puts mornings in the mid-80s or higher all year. The drier stretch is spring, when April afternoons average 48 percent, and November is the least rainy month. Indoors, air conditioning and winter heat do the drying. Keep vents off your face, wear wraparound sunglasses at the beach, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Jacksonville’s climate in NOAA’s records' },
      {
        p: `NOAA’s 1991 to 2020 normals for Jacksonville come from Jacksonville International Airport, north of downtown, about 10 meters (roughly 33 feet) above sea level. On paper it’s a wet, warm climate:`,
      },
      {
        list: [
          `About 53.40 inches of precipitation in a normal year.`,
          `June (7.60 inches) and September (7.56) are the wettest months.`,
          `November is the driest at 2.00 inches, followed by December (2.78) and February (2.86).`,
          `July highs average 91.9°F, and about 80 days a year reach 90°F.`,
          `About 14 nights a year fall to 32°F or below, and January lows average 42.9°F.`,
        ],
      },
      { h: 'What is the least humid month in Jacksonville?' },
      {
        p: `April. NOAA’s relative humidity table gives Jacksonville’s April afternoons an average of 48 percent, with March at 50 and May at 51. Mornings stay between 85 and 92 percent all year, and from June through December afternoons sit between 57 and 63 percent. So when Jacksonville air feels dry, it’s usually a spring afternoon, often a breezy one: NOAA’s wind table shows March as the windiest month and August the calmest.`,
      },
      {
        list: [
          `Spring yard work, tee times and Little League games land in the driest afternoons; sunglasses that wrap around help.`,
          `On breezy beach days, set the chair with your back to the wind.`,
          `Take a few slow, complete blinks whenever you come in out of the wind.`,
        ],
      },
      { h: 'The beaches and the river' },
      {
        p: `From Mayport south through Atlantic, Neptune and Jacksonville Beach, the ocean breeze rarely lets up. Wind across the eye’s surface carries away moisture even when the air is damp, and sun reflecting off sand and water makes you squint, which cuts down on full blinks. A boat on the St. Johns River or the Intracoastal Waterway does the same. Our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers time on the water.`,
      },
      {
        list: [
          `Wraparound sunglasses with polarized lenses cut glare and block wind from the sides.`,
          `A brimmed hat shades your eyes so you squint less.`,
          `Rinse salt and sand off your face with fresh water instead of rubbing your eyes.`,
        ],
      },
      { h: 'Air conditioning from May to October' },
      {
        p: `Highs average 85.9°F in May and stay above 87°F from June through September. That adds up to months of air conditioning at home, in the office, on the Navy bases and on long commutes over the Dames Point, Buckman and Mathews bridges. Cooling pulls water out of indoor air, and a dashboard vent aimed at your face blows that dry air straight across your eyes. Angle vents toward your chest, and take screen breaks at work so you blink fully.`,
      },
      { h: 'Winter: a short heating season' },
      {
        p: `Jacksonville winters are short, but not frost-free. January highs average 65.5°F, and about 14 nights a year reach freezing. On those cold snaps, heat pumps and space heaters run and indoor air dries quickly. A humidifier in the bedroom, a space heater aimed at your feet instead of your face, and a little distance from vents all help. Our guide on [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers the details.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes the use as: {uses}. Directions: {directions}. The panel also cautions: {warnings}.`,
      },
      {
        p: `Florida heat makes the storage line worth knowing: {storage}. A car in a beach lot in July gets far hotter than that, so keep the bottle in a bag you carry. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Jacksonville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Jacksonville, Orange Park, Fernandina Beach, Ponte Vedra Beach and the rest of the country. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order before you run out. See the [Jacksonville page](/eye-drops/jacksonville-fl) and the [Florida page](/eye-drops/state/florida).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps returning or comes with other symptoms, an eye doctor should take a look. The label puts it this way: {stopUse} Sand or grit that stays after rinsing, pain, or a change in vision shouldn’t wait. The [self-check](/self-check) can help you organize what you’re noticing; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the least humid month in Jacksonville?',
        a: `April. NOAA’s table gives Jacksonville’s April afternoons an average of 48 percent relative humidity, with March at 50 and May at 51. Mornings run in the mid-80s or higher all year.`,
      },
      {
        q: 'What is the driest month in Jacksonville, Florida?',
        a: `November, with 2.00 inches of precipitation in NOAA’s 1991 to 2020 normals. June is the wettest at 7.60 inches.`,
      },
      {
        q: 'Does it freeze in Jacksonville?',
        a: `Sometimes. NOAA’s normals count about 14 nights a year at 32°F or below at Jacksonville International Airport, during winter cold snaps.`,
      },
      {
        q: 'Can I buy Quell in Jacksonville?',
        a: `You can order it online and have it shipped from Brentwood, Tennessee, to any Jacksonville address, with guest checkout and email tracking. No arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-orlando-fl:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012815.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012815.csv
   *   (ORLANDO INTL AP, elev 27.4 m: annual precip 51.45 in; Jun 8.05 wettest;
   *   Jun-Sep total 29.57; Nov 1.79, Feb 2.04 driest; Nov-Apr each under 3.1; Jul high
   *   92.0 F; Jan high 71.8 F, low 49.5 F; 109.9 days at or above 90 F; 1.6 nights at
   *   or below 32 F)
   * - Jacksonville comparison from USW00013889 (80.1 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ORLANDO, FL, WBAN 12815: mornings 85 to 91; afternoons Apr 47, May 49,
   *   Jun to Sep 58 to 61)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ORLANDO: Mar 4.0 highest month, Jul and Aug 2.8 lowest)
   * Elevation is the NOAA station elevation, converted (27.4 m is about 90 ft).
   */
  {
    slug: 'dry-eye-relief-orlando-fl',
    title: 'Dry eye relief in Orlando, Florida',
    description:
      'Orlando’s air is humid, but about 110 days a year reach 90°F and A/C runs nonstop. NOAA’s data on Orlando’s driest months, plus theme park tips.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Orlando is mostly about what happens indoors and under the sun. Outdoor air is humid, with NOAA’s table showing mornings between 85 and 91 percent, though April afternoons drop to 47 percent. About 110 days a year reach 90°F, so air conditioning runs most of the year. Keep cold vents off your face, wear sunglasses in the parks, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Orlando’s climate by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for Orlando come from Orlando International Airport, southeast of downtown, about 27 meters (roughly 90 feet) above sea level:`,
      },
      {
        list: [
          `About 51.45 inches of precipitation a year, more than half of it from June through September.`,
          `June is the wettest month at 8.05 inches; November is the driest at 1.79, with February at 2.04.`,
          `July highs average 92.0°F, and about 110 days a year reach 90°F, against about 80 at Jacksonville’s airport.`,
          `Freezing nights are rare, fewer than 2 a year.`,
        ],
      },
      { h: 'When is Orlando’s driest season?' },
      {
        p: `By rainfall, November through April are the light months, each under about 3 inches, and November itself averages just 1.79. By humidity, spring is driest: NOAA’s table gives April afternoons 47 percent and May 49, the two lowest of the year, while afternoons from June to September run 58 to 61. Spring is also when NOAA’s wind table shows Orlando at its breeziest, with March highest and July and August calmest. If your eyes feel dry outdoors here, it’s most likely a sunny spring afternoon.`,
      },
      { h: 'A day at the theme parks' },
      {
        p: `A park day stacks several eye stressors into one trip: hours of sun and glare off pavement, wind on open rides, and repeated trips between hot outdoor lines and chilled indoor ones. Late in the day, when people tend to rub tired eyes with hands that have touched railings and ride bars, the risk of irritation goes up too.`,
      },
      {
        list: [
          `Wear sunglasses that fit snugly or have a strap, and take them off where a ride’s rules say to.`,
          `A brimmed hat cuts glare in long outdoor lines.`,
          `Carry your drops in a bag that stays with you, not in a locker in the sun or a hot car in the lot.`,
          `Use drops before or after a ride, never on a moving one, and follow the label’s directions.`,
          `During indoor shows and long waits, look into the distance and blink fully.`,
        ],
      },
      { h: 'Hotels, convention halls and the I-4 commute' },
      {
        p: `Orlando fills a lot of hotel rooms and convention halls, where air conditioning runs constantly and thermostats are set low. A room unit can blow straight across the bed. Set the fan to low or auto at night, aim the louvers away from your pillow, and see [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) for more. For residents, the drying happens on I-4 and in offices: point car vents at your chest, and take regular screen breaks at work.`,
      },
      { h: 'Winter in Central Florida' },
      {
        p: `December through February are mild, with January highs averaging 71.8°F and lows 49.5°F, and NOAA counts fewer than 2 freezing nights a year at the airport. Heating runs only on the coldest mornings. For visitors escaping a heated northern house, the winter air here is a change of pace; the year-round factor in Orlando is air conditioning instead. Our guide to [snowbird travel with eye drops](/guides/snowbird-travel-with-eye-drops) covers the trip itself.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Directions from the Drug Facts panel: {directions}. While using it: {tip}. The Do not use section reads: {doNotUse}.`,
      },
      {
        p: `Orlando summers make storage the line to remember: {storage}. A rental car in a theme park lot can blow past that. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Orlando' },
      {
        p: `Quell ships from Brentwood, Tennessee, to homes in Orlando, Kissimmee, Winter Park and Sanford, and to any other US address. Visitors can ship to where they’re staying, after checking that the hotel or rental holds packages for guests. Shipping is {shipping}, free on {freeBottles} or more bottles, and checkout is as a guest with tracking by email. No delivery date is promised. The [Orlando page](/eye-drops/orlando-fl) and [Florida page](/eye-drops/state/florida) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops help with ordinary dryness; symptoms that persist or get worse need an eye doctor. From the label: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what shouldn’t wait, including pain and sudden vision changes.`,
      },
    ],
    faq: [
      {
        q: 'When is the dry season in Orlando?',
        a: `By rainfall, November through April; November averages 1.79 inches in NOAA’s 1991 to 2020 normals. By humidity, April and May afternoons are the lowest of the year at 47 and 49 percent.`,
      },
      {
        q: 'How many 90 degree days does Orlando get?',
        a: `About 110 a year at Orlando International Airport, according to NOAA’s 1991 to 2020 normals, with July highs averaging 92.0°F.`,
      },
      {
        q: 'Why do my eyes feel dry after a day at a theme park?',
        a: `Hours of sun and glare, wind on open rides, and repeated swings between hot outdoor lines and cold indoor ones all speed evaporation from the tear film. Sunglasses, a hat and regular full blinks help.`,
      },
      {
        q: 'Can I ship eye drops to my Orlando hotel?',
        a: `Quell ships to any US address, a hotel included, but confirm first that the hotel accepts and holds guest packages. No delivery date is promised, so order well before your trip if you can.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-savannah-ga:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003822.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003822.csv
   *   (SAVANNAH INTL AP, elev 14.0 m: annual precip 48.12 in; Jun 6.65 wettest;
   *   Nov 2.39, Feb 2.80 driest; Jul high 92.3 F; Jan high 61.4 F, low 40.0 F;
   *   80.5 days at or above 90 F; 21.4 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SAVANNAH, GA, WBAN 03822: mornings 83 to 90; afternoons Feb 51, Mar 49,
   *   Apr 47, Nov 52, Aug 60, Sep 60; annual 86/54)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SAVANNAH annual 3.1, above Augusta 2.4 and Macon 2.6; Mar 3.7 highest month,
   *   Aug 2.7 lowest)
   * Elevation is the NOAA station elevation, converted (14.0 m is about 46 ft).
   */
  {
    slug: 'dry-eye-relief-savannah-ga',
    title: 'Dry eye relief in Savannah, Georgia',
    description:
      'Savannah mornings average 86 percent humidity, yet April afternoons fall to 47 and winter heat dries old houses. When eyes dry out, and what helps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Savannah begins with the humidity, which NOAA’s table averages at 86 percent in the morning across the year. Dry stretches still come. April afternoons average 47 percent, November is the least rainy month, and about 21 nights a year freeze, so the heat comes on. Keep vents and wind off your eyes, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Savannah’s weather in NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for Savannah come from Savannah/Hilton Head International Airport, northwest of downtown, about 14 meters (roughly 46 feet) above sea level:`,
      },
      {
        list: [
          `About 48.12 inches of precipitation in a normal year.`,
          `June is the wettest month at 6.65 inches; November is the driest at 2.39, then February at 2.80.`,
          `July highs average 92.3°F, and about 81 days a year reach 90°F.`,
          `January highs average 61.4°F and lows 40.0°F, and about 21 nights a year reach 32°F or below.`,
        ],
      },
      { h: 'Is Savannah humid all year?' },
      {
        p: `Mornings are, at 83 to 90 percent every month in NOAA’s table. Afternoons vary more. In August and September they average 60 percent, but they fall to 49 in March and 47 in April, with February (51) and November (52) close behind. Those spring and late-fall afternoons are when Savannah air actually feels dry. March is also the windiest month in NOAA’s wind table and August the calmest, and Savannah’s yearly wind average runs above Augusta’s and Macon’s.`,
      },
      { h: 'Walking the squares and the riverfront' },
      {
        p: `Savannah is a walking city. An April afternoon moving between the squares, River Street and Forsyth Park means hours of sun, glare and moving air at the driest time of year, and visitors and tour guides alike can finish the day with gritty, tired eyes. A brimmed hat, sunglasses and stops in the shade under the live oaks help more than anything you can carry.`,
      },
      {
        p: `Out on Tybee Island, the ocean breeze and sun off the sand dry the eye’s surface even on humid days. Wraparound sunglasses block wind at the sides, and rinsing salt off your face beats rubbing your eyes.`,
      },
      {
        p: `Summer brings the opposite problem. With July highs averaging 92.3°F and about 81 days a year at 90°F or above, air conditioning runs in homes, shops and cars for months, and cooled air is dry air. Point dashboard and ceiling vents away from your face, and give your eyes regular breaks from screens.`,
      },
      { h: 'Winter mornings and the heat coming on' },
      {
        p: `Savannah’s winters are short, but about 21 freezing nights a year mean heat pumps, furnaces and space heaters get real use from December through February. Warming air lowers its relative humidity, and the air right next to a heater or vent is driest of all. Place space heaters so they warm your feet rather than your face, keep the bed out of a register’s path, and run a humidifier in the bedroom. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes further.`,
      },
      { h: 'Studios, docks and plant floors' },
      {
        p: `Students at SCAD spend long hours at drawing tables and screens, where concentration slows blinking. Port of Savannah crews work in wind and sun on the docks, and manufacturing floors around the city run strong ventilation. Each pulls water from the tear film in its own way. See [dry eyes for graphic designers](/guides/dry-eyes-for-graphic-designers) for studio habits and [dry eyes for warehouse workers](/guides/dry-eyes-for-warehouse-workers) for shift work.`,
      },
      { h: 'Quell’s Drug Facts, briefly' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel gives its use as: {uses}. Directions: {directions}. It also says: {tip}. For storage: {storage}. Read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Savannah' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Savannah, Pooler, Richmond Hill, Tybee Island and anywhere else in the US. No account is needed. Shipping is {shipping}, or free when you order {freeBottles} or more bottles, and a tracking email follows, though there’s no promised delivery date. The [Savannah page](/eye-drops/savannah-ga) and the [Georgia page](/eye-drops/state/georgia) have more local detail.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness. Here’s where the label stops: {stopUse} Pain, vision that stays blurry, or symptoms in one eye only belong with an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through them.`,
      },
    ],
    faq: [
      {
        q: 'Is Savannah humid all year?',
        a: `Mornings are, averaging 83 to 90 percent every month in NOAA’s table. Afternoons dip to 47 percent in April and 49 in March, the closest Savannah comes to dry air.`,
      },
      {
        q: 'What month has the lowest humidity in Savannah?',
        a: `April, with afternoons averaging 47 percent relative humidity in NOAA’s table. For rain, November is the driest month at 2.39 inches.`,
      },
      {
        q: 'How cold does Savannah get in winter?',
        a: `January lows average 40.0°F at the airport in NOAA’s 1991 to 2020 normals, and about 21 nights a year reach 32°F or below.`,
      },
      {
        q: 'Does Quell ship to Savannah, Georgia?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Savannah and every other US address, with guest checkout and tracking by email. Order ahead, since no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-charleston-wv:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013866.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013866.csv
   *   (CHARLESTON YEAGER AP, elev 277.4 m: annual precip 46.24 in; Jul 5.38 wettest;
   *   Oct 2.91 driest; annual snow 31.5 in, Jan 10.3, Feb 7.7; Jan high 43.9 F, low
   *   26.1 F; Jul high 86.0 F; 23.6 days at or above 90 F; 94.3 nights at or below
   *   32 F; 15.1 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (CHARLESTON, WV, WBAN 13866: afternoons Mar 53, Apr 47, May 52, Jul 58, Aug 58,
   *   Dec 62, Jan 62; mornings Jul 89, Aug 92)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (CHARLESTON annual 2.0, lowest of the four WV rows: Elkins 2.2, Huntington 2.6,
   *   Beckley 3.2; Jan to Apr 2.5 to 2.6 highest, Aug and Sep 1.4 lowest)
   * Elevation is the NOAA station elevation, converted (277.4 m is about 910 ft).
   */
  {
    slug: 'dry-eye-relief-charleston-wv',
    title: 'Dry eye relief in Charleston, West Virginia',
    description:
      'Charleston, WV, sees about 94 freezing nights a year, so the furnace runs for months. NOAA’s numbers on when the Kanawha Valley dries your eyes.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Charleston, West Virginia, is mostly a winter job. Summer air in the Kanawha Valley is humid and calm, but about 94 nights a year freeze at Yeager Airport, and the furnace runs from fall into spring. Outdoors, April afternoons are the driest at 47 percent. Run a humidifier, keep heat vents off your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Charleston’s climate in NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for Charleston come from Yeager Airport, on high ground above the Kanawha Valley northeast of downtown, at about 277 meters (roughly 910 feet):`,
      },
      {
        list: [
          `About 46.24 inches of precipitation a year, spread fairly evenly; July is wettest at 5.38 inches and October driest at 2.91.`,
          `Snowfall averages 31.5 inches, led by January at 10.3 and February at 7.7.`,
          `January highs average 43.9°F and lows 26.1°F, and about 15 days a year never climb above freezing.`,
          `July highs average 86.0°F, and about 24 days a year reach 90°F.`,
          `About 94 nights a year fall to 32°F or below.`,
        ],
      },
      { h: 'Why are eyes so dry in a Charleston winter?' },
      {
        p: `Outdoor air isn’t the culprit: NOAA’s table puts December and January afternoons at 62 percent. The long heating season is. With about 94 freezing nights, furnaces and heat pumps run from roughly November into March, and warming cold air without adding water drops its relative humidity sharply. In an older house, an office in the Capitol complex or a classroom with radiators, the air near the heat source can get very dry.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom during heating season, and clean it as its maker directs.`,
          `Turn the thermostat down a few degrees at night.`,
          `Keep your face out of the path of floor registers, baseboard heaters and the car’s defroster.`,
          `Take regular screen breaks; a warm, dry office and a monitor together cut blinking and speed evaporation.`,
        ],
      },
      {
        p: `Our guide to [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) has more on the workday side of winter.`,
      },
      { h: 'April: the driest afternoons of the year' },
      {
        p: `NOAA’s relative humidity table shows a short dry window in spring. April afternoons average 47 percent, March 53 and May 52, against 58 in July and August. NOAA’s wind table also shows January through April as Charleston’s breeziest months. Spring hikes in Kanawha State Forest, yard work and the first rounds of golf all fall in that window, and sunglasses with side coverage plus a brimmed hat go a long way.`,
      },
      { h: 'Calm valley air' },
      {
        p: `Charleston has the lowest yearly wind average of the four West Virginia stations in NOAA’s wind table, below Elkins, Huntington and Beckley, and August and September are its calmest months. Still air is easier on the eyes outdoors. That leaves the indoor factors, heat in winter and air conditioning in summer, as the main ones for most people here.`,
      },
      { h: 'Summer: humid outside, cooled inside' },
      {
        p: `Summers are muggy, with afternoons at 58 percent in July and August and mornings near 90. Air conditioning dries indoor air, and long hours at a desk in a cooled office add the slower blinking that comes with screens. Point vents away from your face, look up from the monitor regularly, and see [eye drops for computer users](/guides/eye-drops-for-computer-users) for a routine.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Directions: {directions}. The Do not use section reads: {doNotUse}. The caution line says: {warnings}.`,
      },
      {
        p: `In winter, mind the storage line: {storage}. A bottle left in a truck on a January night, when Yeager’s average low is 26.1°F, would fall far below that range. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering in Charleston, West Virginia' },
      {
        p: `We ship from Brentwood, Tennessee, to Charleston, South Charleston, St. Albans, Dunbar and every other US address. Checkout takes no account; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email. No delivery date is promised, so order before winter weather can slow things down. The [Charleston page](/eye-drops/charleston-wv) and the [West Virginia page](/eye-drops/state/west-virginia) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps coming back deserves an eye doctor’s attention. The label’s own limit: {stopUse} Pain or a sudden change in how you see shouldn’t wait at all. The [self-check](/self-check) can help you describe your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Charleston, West Virginia get?',
        a: `About 31.5 inches a year at Yeager Airport, according to NOAA’s 1991 to 2020 normals. January is the snowiest month at 10.3 inches.`,
      },
      {
        q: 'Why are my eyes dry in Charleston, WV in the winter?',
        a: `Heated indoor air. Outdoor winter afternoons average about 62 percent humidity in NOAA’s table, but with about 94 freezing nights a year the heat runs for months, and warming cold air lowers its relative humidity.`,
      },
      {
        q: 'Is Charleston, WV humid?',
        a: `In summer, yes: July and August mornings average 89 and 92 percent in NOAA’s table, with afternoons at 58. April afternoons are the year’s driest at 47 percent.`,
      },
      {
        q: 'Can I get Quell delivered in Charleston, WV?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Charleston and the rest of the US with guest checkout and tracking by email. No delivery date is promised, so leave some margin.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-runner',
    title: 'Christmas gifts for a runner',
    description:
      'Gift ideas for a runner who heads out on cold, windy, dark mornings: eyewear, gaiters, lights, and a lubricating eye drop, plus what to check first.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Good Christmas gifts for a runner solve winter problems: dark mornings, cold wind and dry eyes. Wraparound running sunglasses, a neck gaiter, a headlamp or reflective vest, and thin wind-blocking gloves all fit. A lubricating eye drop like Quell can go in the stocking for use before or after a run, once you’ve checked the label’s egg and bird caution. Skip shoes unless you know the exact model.`,
      },
      { h: 'Why winter running is hard on the eyes' },
      {
        p: `Runners know the feeling even if they’ve never named it. Running pushes air across the eyes at pace, winter air holds little moisture, and a headwind on an open road or riverfront path adds more. With daylight saving time over since early November, many runners head out in the dark before or after work, squinting into headlights. Our guide to [dry eyes when running](/guides/dry-eyes-when-running) covers what happens on the run itself; this page is about gifts that help.`,
      },
      { h: 'Eyewear gifts' },
      {
        list: [
          `Wraparound running sunglasses with a close fit that doesn’t bounce, and side coverage that blocks wind.`,
          `A clear or light-tint pair for dark mornings, so your runner can block wind without losing sight of the path.`,
          `Frames with interchangeable lenses, if you can’t decide between the two.`,
          `A hard case and a microfiber cloth, small add-ons that round out the gift.`,
        ],
      },
      {
        p: `Prescription sport glasses are harder to give, because the lenses need your runner’s current prescription from their eye doctor. A gift card to their optical shop, or an offer to cover part of the cost, works better than guessing.`,
      },
      { h: 'Gear for wind and cold' },
      {
        list: [
          `A neck gaiter that pulls up over the nose and mouth on the coldest days.`,
          `A brimmed running cap, fleece-lined for winter, which breaks wind and sleet coming over the forehead.`,
          `A thin beanie or ear band for runners who overheat in a full hat.`,
          `Lightweight running gloves or mittens with a wind-blocking shell.`,
          `A wind jacket that packs into its own pocket.`,
        ],
      },
      { h: 'Gifts for dark miles' },
      {
        list: [
          `A rechargeable headlamp or chest light.`,
          `A reflective vest or clip-on lights so drivers see them sooner.`,
          `Reflective bands for the ankles, where movement catches headlights.`,
        ],
      },
      { h: 'Eye drops in the stocking' },
      {
        p: `A bottle of lubricating eye drops is a small, practical add-on for a runner whose eyes feel dry after cold or windy miles. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists this use: {uses}. The directions say: {directions}. Putting drops in before a run or after it, rather than on the move, is the practical approach.`,
      },
      {
        p: `Check one thing before you wrap it. The label carries this caution: {warnings}. If you don’t know whether your runner has an egg or bird allergy, ask, or choose a different gift. Our guide to [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) explains the line.`,
      },
      {
        p: `Plenty of runners wear contact lenses. Quell’s label doesn’t give directions for use with contacts, so a runner who wears them should ask their eye doctor first. Mention storage as well: {storage}. A bottle kept in the car between runs in January can drop below that range.`,
      },
      { h: 'Gift ideas by kind of runner' },
      {
        list: [
          `The dawn road runner: clear-lens wraparound glasses, a headlamp and reflective ankle bands.`,
          `The trail runner: a brimmed cap, a packable wind shell and a small zip pouch for keys and a bottle of drops.`,
          `The race traveler: a race-day bag with a zip pocket for small items; our guide on [traveling with eye drops](/guides/traveling-with-eye-drops) covers carrying them on a plane.`,
          `The treadmill regular: a sweatband or cap, since gym fans and heated air dry eyes indoors too; see [dry eyes at the gym](/guides/dry-eyes-at-the-gym).`,
        ],
      },
      { h: 'Sending Quell as a gift' },
      {
        p: `You can order Quell and ship it straight to your runner’s address anywhere in the US, checking out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles, which makes it simple to send one to a running partner and keep one for yourself. There are no promo codes. No delivery date is promised, so order well before December 25 if it’s going under the tree. If it isn’t wanted, unopened bottles can be refunded within {returnDays} days of delivery without being sent back. More in [sending Quell as a gift](/guides/sending-quell-as-a-gift).`,
      },
      { h: 'What a gift can’t do' },
      {
        p: `Gear and drops help with everyday dryness from wind and cold. They don’t replace an eye doctor. If your runner mentions eye pain, vision that stays blurry after a run, or dryness that won’t settle, the label’s advice applies: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get a runner for Christmas?',
        a: `Gifts that solve winter problems: wraparound running sunglasses, a neck gaiter, a headlamp or reflective vest, wind-blocking gloves, and stocking stuffers like a bottle of lubricating eye drops.`,
      },
      {
        q: 'Are running sunglasses a good gift?',
        a: `They’re useful in winter as well as summer, because wraparound frames block wind from the sides. A clear or light-tint pair suits dark mornings. Fit is personal, so include a gift receipt.`,
      },
      {
        q: 'Can I give eye drops to a runner who wears contacts?',
        a: `Quell’s label doesn’t give directions for use with contact lenses, so a runner who wears them should check with their eye doctor before using it. Say so on the gift tag.`,
      },
      {
        q: 'When should I order a Christmas gift for a runner?',
        a: `Early. Quell ships from Brentwood, Tennessee, without a promised delivery date, so ordering in late November or early December leaves room before December 25.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-november',
    title: 'Dry eyes in November',
    description:
      'Why eyes dry out in November: the first steady furnace weeks, darker evenings after the clocks change, and Thanksgiving travel and cooking.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eyes in November usually come from three changes landing within a few weeks: the furnace starts running every day, daylight saving time ends and evenings move indoors under lamps and screens, and Thanksgiving brings travel, a hot kitchen and late nights. Run a humidifier once the heat is on, aim vents away from your face, take screen breaks, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What changes in November' },
      {
        p: `October usually brings the heat on for a cold morning here and there. In much of the country, November is when it starts running daily, and that’s the first big shift. The second is the clock: daylight saving time ended on Sunday, November 1, 2026, so dark comes before dinner. The third is the calendar, with Thanksgiving on Thursday, November 26, 2026. Each one, on its own, speeds evaporation from the tear film or cuts down on blinking.`,
      },
      {
        p: `If you’ve read our guide to [dry eyes in fall](/guides/dry-eyes-in-fall), this is the narrower version: the four weeks between the first frost and the start of December.`,
      },
      { h: 'The first furnace weeks' },
      {
        p: `The first weeks of steady heat catch people off guard because the change is invisible. Cold outdoor air holds little water, and warming it indoors without adding any lowers its relative humidity. Forced-air systems then blow that air across beds, couches and desk chairs. Eyes that felt fine in October can feel scratchy by mid-November, and mornings are often the worst. A short setup list helps:`,
      },
      {
        list: [
          `Change the furnace filter if it’s due, on the schedule printed on the filter.`,
          `Clean the humidifier before its first use of the season, following its maker’s directions.`,
          `Walk through the house and note where vents blow: over the bed, across the couch, at the desk.`,
          `Set the thermostat a few degrees lower at night.`,
        ],
      },
      {
        p: `Our guide to [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers the details of choosing and placing one.`,
      },
      { h: 'Dry eyes when tired: the darker evenings' },
      {
        p: `With the clocks back, the sun sets in the late afternoon across most of the country (Hawaii and most of Arizona don’t change their clocks). Evenings shift indoors, to TVs, laptops and phones in a heated living room. Screens slow blinking, and the longer the evening runs, the more the tear film thins. Eyes that feel dry when you’re tired, late in the day, are often the end result of hours of that.`,
      },
      {
        list: [
          `Turn on a room lamp instead of watching a screen in the dark.`,
          `During a long show, look away from the screen now and then and blink fully.`,
          `Put the phone down for the last half hour before bed.`,
        ],
      },
      {
        p: `See [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) if late nights are part of the pattern.`,
      },
      { h: 'Thanksgiving week' },
      {
        p: `The days around Thanksgiving pack a lot into a short stretch: airports, long drives, a hot kitchen and late nights with family. Rather than repeat the travel details, here’s where each one is covered:`,
      },
      {
        list: [
          `Flying or driving, including what TSA allows in a carry-on: [Thanksgiving travel with eye drops](/guides/thanksgiving-travel-with-eye-drops).`,
          `Oven heat, steam and smoke while cooking: [dry eyes when cooking holiday dinner](/guides/dry-eyes-when-cooking-holiday-dinner).`,
          `Hosting guests: point guest room vents away from the bed, and offer a humidifier if you have a spare.`,
          `The drive home on Sunday: aim the defroster at the glass, not at your face.`,
        ],
      },
      { h: 'November outdoors' },
      {
        p: `November is raking, football and, in many states, deer season. Cold fronts arrive with gusty wind, and cold air carries little moisture. Wraparound sunglasses and a brimmed cap block much of the wind, and on a long morning in a tree stand, goggles or glasses with side coverage do more. Our guide to [dry eyes on a hunting trip](/guides/dry-eyes-on-a-hunting-trip) has more for early mornings in the field.`,
      },
      { h: 'A November routine with Quell' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the moisture heated air pulls away. Its label lists this use: {uses}. The directions read: {directions}. The label also cautions: {warnings}.`,
      },
      {
        p: `If you’ll be traveling for Thanksgiving, order before the holiday week, since no delivery date is promised. Shipping is {shipping}, or free on {freeBottles} or more bottles, and you can [order from the home page](/#buy) as a guest.`,
      },
      { h: 'November dryness that needs a doctor' },
      {
        p: `Seasonal dryness tends to track the weather and the furnace. Dryness that doesn’t, or that comes with pain or a change in vision, is for an eye doctor. The label is clear: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes further. When the month turns, [dry eyes in December](/guides/dry-eyes-in-december) picks up where this leaves off.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in November?',
        a: `In much of the US, November is when the heat starts running daily, and heated air holds less relative humidity. Darker evenings after daylight saving time ends add screen hours, and Thanksgiving brings travel and late nights.`,
      },
      {
        q: 'Does the end of daylight saving time affect your eyes?',
        a: `Indirectly. Earlier sunsets move evenings indoors under lights and in front of screens, and screens slow blinking. That can make dryness more noticeable in the evening.`,
      },
      {
        q: 'Why do my eyes feel dry when I’m tired?',
        a: `By late in the day you’ve usually spent hours blinking less at screens and sitting in heated or cooled air, so the tear film has had longer to thin. Screen breaks and full blinks help, and dryness that persists is worth raising with an eye doctor.`,
      },
      {
        q: 'When is Thanksgiving in 2026?',
        a: `Thursday, November 26, 2026. If you’ll be traveling, order eye drops early in the month, since Quell doesn’t promise a delivery date.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-thanksgiving-parade',
    title: 'Dry eyes at a Thanksgiving parade',
    description:
      'Standing at a Thanksgiving parade means hours of cold wind between buildings. How to pick a spot, what to wear, and how to use eye drops at the curb.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `A Thanksgiving parade puts you outdoors early on a late-November morning, often standing still for hours while wind funnels between buildings. That cold, moving air dries the eye’s surface quickly. Wear wraparound sunglasses or clear glasses, pick a spot out of the wind, keep your back to gusts, and carry a lubricating drop in an inside pocket to use as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Why parade mornings dry your eyes' },
      {
        p: `Thanksgiving falls on Thursday, November 26, 2026, and most parades step off in the morning. Spectators often arrive well before the start to claim a spot, so the time outside runs long. Several things stack up at the curb:`,
      },
      {
        list: [
          `Cold air holds little moisture, so it pulls water from the tear film quickly.`,
          `Downtown routes run between tall buildings, where wind speeds up as it’s squeezed down the street.`,
          `Standing in one place means the same gusts hit your face for hours.`,
          `A low late-November sun can shine straight down the street, and squinting cuts down on full blinks.`,
          `Looking up at balloons against a bright sky adds glare.`,
        ],
      },
      { h: 'Picking a spot out of the wind' },
      {
        list: [
          `Skip street corners and open plazas, where wind tends to pick up; a spot partway down a block is usually calmer.`,
          `Stand with a building wall at your back to break gusts from behind.`,
          `If you can, choose the side of the street where the sun will be behind you rather than in your eyes.`,
          `Bring a folding stool; sitting lower puts you a little below the worst of the wind.`,
        ],
      },
      { h: 'What to wear and bring' },
      {
        list: [
          `Wraparound sunglasses, or clear glasses if the morning is gray; frames that curve around the sides block more wind.`,
          `A hat with a brim to shade your eyes and break wind over your forehead.`,
          `A scarf or neck gaiter you can pull up, leaving a gap so your glasses don’t fog.`,
          `Gloves, plus hand warmers kept in pockets, not near your face.`,
          `Tissues, and your eye drops in an inside pocket where body heat keeps them from getting too cold.`,
        ],
      },
      { h: 'Using a drop at the curb' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits a long stretch in cold wind. The label directions read: {directions}. Before you use it outside, a few practical points:`,
      },
      {
        list: [
          `Use a drop before you leave home or the car, and again during a lull, rather than in a pressing crowd.`,
          `Take off your gloves and clean your hands first; parade hands have touched railings and programs.`,
          `Keep the tip clean, as the label says: {tip}.`,
          `Turn your back to the wind while you put it in.`,
        ],
      },
      {
        p: `Cold is the storage concern on parade day. The label says: {storage}. A bottle left in a car through a cold morning can fall below that range, so keep it on you. The rest of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Bringing kids to the parade' },
      {
        p: `Children feel the wind too, and a hat with a brim and kid-size sunglasses do the same job for them as for adults. Quell’s label doesn’t give directions for children, so ask your child’s doctor or a pharmacist before using any eye drop on them. Our guide to [eye drops and children](/guides/eye-drops-and-children) explains what the label leaves out.`,
      },
      { h: 'If you’re marching or volunteering' },
      {
        p: `Band members, balloon handlers and float crews face the wind for the whole route and can’t stop to fix anything. Put a drop in before you step off, not while marching, and wear sunglasses if the uniform allows them. Dancers and performers can see [dry eyes for musicians and performers](/guides/dry-eyes-for-musicians-and-performers) for working under lights and in costume.`,
      },
      { h: 'After the parade' },
      {
        p: `Most people head from the cold street to a warm kitchen, where the oven and stovetop dry the air again, and then to an afternoon of football on TV. Give your eyes a break between the two, step out of the kitchen’s heat now and then, and look away from the screen during commercials. Our guide to [dry eyes in November](/guides/dry-eyes-in-november) covers the rest of the month.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind can blow grit into an eye. If something feels stuck after blinking, or your eye hurts, don’t keep using drops; see a doctor. The label says: {stopUse} For more, read [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What should I wear to a Thanksgiving parade?',
        a: `Layers, gloves and a hat with a brim, plus wraparound sunglasses or clear glasses to block wind from your eyes. A scarf or gaiter helps, as long as it leaves room so your glasses don’t fog.`,
      },
      {
        q: 'Can I bring eye drops to a parade?',
        a: `Usually, yes; a small bottle fits in a pocket. Large parades sometimes post rules about bags, so check the organizer’s site before you go, and keep the bottle in an inside pocket so it doesn’t get too cold.`,
      },
      {
        q: 'Why do my eyes water when I stand outside in the cold?',
        a: `Cold wind dries the eye’s surface, and the eye can answer with a rush of watery tears that run off rather than staying spread across the eye. Blocking the wind with glasses tends to help more than wiping.`,
      },
      {
        q: 'Is it okay to use eye drops in the cold?',
        a: `Yes, if the bottle has stayed within the label’s storage range: {storage}. Keep it in an inside pocket, clean your hands first and use it as the label directs.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-lawyers-and-paralegals',
    title: 'Dry eyes for lawyers and paralegals',
    description:
      'Document review, long court days and late filings dry the eyes. Practical habits for lawyers and paralegals, and how to use eye drops at the office.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Lawyers and paralegals get dry eyes from long stretches of focused reading: document review on screens, briefs late at night, and full days in heated or air-conditioned courtrooms where you can’t easily look away. Focus slows blinking, and dry office air speeds evaporation. Build blink breaks into review sessions, enlarge small text, keep a lubricating drop at your desk to use as labeled, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why legal work is hard on the eyes' },
      {
        p: `Few jobs ask for as much close reading as law. A single matter can mean thousands of pages on a review platform, side-by-side redlines of contract drafts, scanned exhibits with faint type, and footnotes in small fonts. Concentration reduces how often you blink, and the blinks you do make are often incomplete, so the tear film isn’t spread back across the eye as often. Billing in tenths of an hour can make breaks feel expensive, which keeps eyes on the screen even longer.`,
      },
      { h: 'Dry eyes at work during document review' },
      {
        list: [
          `Zoom the document until you read it without leaning in; squinting cuts blinking further.`,
          `At the end of each batch, look out a window or down the hall for a few seconds and blink fully.`,
          `Alternate review with calls or drafting so your eyes get a change of distance.`,
          `Lower the screen slightly so your eyelids cover more of the eye while you read.`,
          `Point the desk fan and HVAC vents away from your face.`,
          `Print the handful of key exhibits you return to most, so you aren’t toggling back and forth on screen.`,
        ],
      },
      {
        p: `If you work across two or three monitors, see [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) for setup ideas.`,
      },
      { h: 'Court days' },
      {
        p: `Court days add a different set of problems. Courtrooms are often in large, older buildings with strong heating and cooling, and you can’t step out whenever your eyes feel dry. Hearings run long, the bench sets the breaks, and you’re watching a witness, the judge and your notes at once. Plan for it:`,
      },
      {
        list: [
          `Use a drop before you go in and during recesses, in the hallway or a restroom.`,
          `Carry the bottle in your bag or jacket, not in a car parked in summer sun or winter cold.`,
          `Bring printed outlines in a larger font so you aren’t straining at small type at counsel table.`,
          `Blink deliberately while listening; it’s easy to stare during testimony.`,
        ],
      },
      { h: 'Late filings and dry eyes at end of day' },
      {
        p: `Filing deadlines push work late into the night, and those are the hours when eyes already feel driest. By evening you’ve spent the day blinking less in conditioned air, and fatigue adds to it. If a deadline means a late night, take a real break every hour or so, turn on a room light rather than reading in the dark, and get to bed as soon as the filing is in. [Dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) explains the connection.`,
      },
      { h: 'For paralegals: the long screen day' },
      {
        p: `Paralegals often carry the heaviest screen load in the office: coding documents in e-discovery, cite-checking briefs, building trial binders, scanning and bates-stamping productions. The work is detailed and repetitive, which is exactly when blinking drops off. Change tasks every so often, and use the printer or scanner trip as a break to look at something far away. Court reporters face a similar problem, covered in [dry eyes for court reporters and transcriptionists](/guides/dry-eyes-for-court-reporters-and-transcriptionists).`,
      },
      { h: 'Using Quell at the office' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the use as: {uses}. The directions read: {directions}. It also says: {tip}.`,
      },
      {
        list: [
          `A desk drawer works for storage; the label says: {storage}.`,
          `Read the caution before your first use: {warnings}.`,
          `If you wear contact lenses, the label doesn’t cover using it with them; ask your eye doctor.`,
          `Don’t share your bottle with a colleague; each person should have their own.`,
        ],
      },
      { h: 'Ordering for yourself or the office' },
      {
        p: `Quell can ship to a home or firm address anywhere in the US; see [shipping eye drops to your work address](/guides/shipping-eye-drops-to-your-work-address). Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Over-the-counter drops can count as an HSA or FSA expense; our guide to [HSA, FSA and eye drops](/guides/hsa-fsa-and-eye-drops) explains how.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for ordinary dryness. If your eyes hurt, your vision blurs and doesn’t clear when you blink, or dryness keeps coming back despite breaks, book an eye exam. The label puts it plainly: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry during document review?',
        a: `Concentrating on a screen slows and shortens your blinks, so the tear film isn’t refreshed as often, and office heating or cooling speeds evaporation. Regular short breaks and full blinks help.`,
      },
      {
        q: 'Can I use eye drops in a courtroom?',
        a: `Nothing on Quell’s label rules it out, but courtroom etiquette varies by judge. Most people use drops before going in or during a recess, out in the hallway or a restroom.`,
      },
      {
        q: 'How do lawyers reduce eye strain?',
        a: `Enlarge text instead of leaning in, take a brief look into the distance between tasks, keep vents off the face, and print the documents you return to most. Persistent strain is worth an eye exam.`,
      },
      {
        q: 'Can a law firm stock eye drops for staff?',
        a: `A firm can order bottles for the office, and Quell ships to any US business address with guest checkout. Each person should read the label first, including the egg and bird caution, and use their own bottle.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-librarians',
    title: 'Dry eyes for librarians',
    description:
      'Stack dust, catalog screens, close reading and heated old buildings: why librarians get dry eyes, and simple habits that help through a shift.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Librarians get dry eyes from a mix of things most people don’t link to the job: dust in the stacks, hours at catalog and circulation screens, close reading, and heated air in older buildings. Each one either speeds evaporation or slows blinking. Wash dust off your hands before touching your face, take screen breaks, keep vents off your desk, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why library work dries the eyes' },
      {
        p: `A library shift moves between very different tasks: shelving, weeding, answering questions at the desk, cataloging, running programs and reading reviews to plan purchases. The common thread is close, careful looking, which cuts blinking. Add dust from older materials and dry heated air in winter, and the tear film has a harder time keeping up.`,
      },
      { h: 'Dust in the stacks and archives' },
      {
        p: `Books and shelves gather dust, especially in low-use stacks, storage rooms and special collections. Weeding projects and shelf shifts stir it up. Dust can irritate the eye’s surface, and the bigger risk is carrying it there on your fingers when you rub tired eyes.`,
      },
      {
        list: [
          `Wash your hands after a session in the stacks and before touching your face.`,
          `Wear the gloves your library provides for dusty or fragile materials.`,
          `Keep a pack of tissues at the desk so you aren’t reaching for your eyes with dusty fingers.`,
          `If dust gets in your eye, rinse it with clean water and don’t rub; see a doctor if it still hurts.`,
        ],
      },
      { h: 'Screens at the desk' },
      {
        p: `Cataloging records, checking items in and out, chat reference and email all happen on screens, often a small monitor at a public desk where you’re also watching the room. Blinking slows at screens, and blinks get shallower. Raise the font size in the catalog and circulation software if it allows, lower the monitor a little so you look slightly down, and look up across the room between patrons. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains why it matters.`,
      },
      { h: 'Reading for a living' },
      {
        p: `Collection development means reading reviews, publisher catalogs and plenty of the books themselves. Story time prep, book club picks and readers’ advisory add more. Paper is easier on blinking than a backlit screen for many readers, but long, focused reading still cuts it. Look up at the end of each chapter, keep good light on the page, and hold the book at a comfortable distance. See [dry eyes when reading](/guides/dry-eyes-when-reading) for more.`,
      },
      { h: 'Heated old buildings' },
      {
        p: `Many libraries are in older buildings with radiators, forced-air systems or both, and branch staff often can’t adjust the thermostat. Warm, dry air in winter speeds evaporation from the eye. Where you can, move your work area out of the path of vents, keep a small humidifier at your desk if your library allows one, and take short breaks outside or in a cooler part of the building.`,
      },
      { h: 'Dry eyes at the end of a shift' },
      {
        p: `Evening and closing shifts come after hours of screens and dry air, and they’re when eyes often feel driest. If you drive a bookmobile or commute home in the dark, glare from headlights adds to it. Take a minute before you leave to close your eyes and rest them, and aim the car’s heater at the floor once the windshield is clear. [Why eyes feel dry at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) has more on the pattern.`,
      },
      { h: 'Using Quell at the library' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists this use: {uses}. The directions read: {directions}. The label also says: {tip}. In the back office, wash your hands after handling materials before you use it.`,
      },
      {
        p: `A staff room drawer or bag is a good place for the bottle. The storage line reads: {storage}. Read the egg and bird caution first: {warnings}. The label doesn’t give directions for use with contact lenses; ask your eye doctor if you wear them.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships anywhere in the US from Brentwood, Tennessee, to a home or work address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which helps if a few colleagues want their own. No delivery date is promised. You can [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that lasts beyond a shift, or comes with pain or blurred vision, is for an eye doctor. The label says: {stopUse} Our [self-check](/self-check) can help you describe what you feel; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do librarians get dry eyes?',
        a: `The job combines close reading, hours at catalog and circulation screens, dusty materials and often dry, heated buildings. Focus slows blinking, and dry air speeds evaporation from the tear film.`,
      },
      {
        q: 'Can old books make your eyes dry?',
        a: `Dust that settles on old books and shelves can irritate the eyes, especially if you rub them after handling materials. Washing your hands and keeping your fingers away from your eyes helps.`,
      },
      {
        q: 'Is it okay to keep eye drops at the circulation desk?',
        a: `A drawer is fine as long as it stays within the label’s storage range: {storage}. Keep your bottle out of patron reach and use only your own.`,
      },
      {
        q: 'How do librarians reduce screen strain?',
        a: `Enlarge the text in catalog software, lower the monitor slightly, and look up across the room between patrons. Short breaks away from the desk help too.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-construction-workers',
    title: 'Dry eyes for construction workers',
    description:
      'Dust, wind on open decks and cold job sites dry the eyes. What helps construction workers, and why an eye drop is never a substitute for safety glasses.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Construction workers get dry eyes from dust, wind on open decks and roofs, cold winter sites and hot summer ones. Moving air and fine particles pull moisture from the eye’s surface. Wear the safety eyewear your site requires; an eye drop isn’t protection. Use a lubricating drop on breaks with clean hands, as the label directs, and see an eye doctor for pain, vision changes or anything stuck in the eye.`,
      },
      { h: 'Why job sites dry your eyes' },
      {
        list: [
          `Dust from cutting concrete and block, sanding drywall, and sweeping out a floor.`,
          `Wind across open decks, roofs and steel, with nothing to break it at height.`,
          `Cold, dry air on winter sites and blasts of heat from temporary heaters in enclosed floors.`,
          `Sun and glare on summer slabs, plus a truck cab with the air conditioning on high between tasks.`,
          `Long stretches of focus on a level, a layout line or a cut, when you blink less.`,
        ],
      },
      { h: 'Safety eyewear comes first' },
      {
        p: `A lubricating eye drop eases dryness. It doesn’t block dust, chips or splashes, and it’s no substitute for safety glasses, goggles or a face shield. Your site’s safety plan says what eye protection each task calls for. Wear it whenever the work calls for it, even for a quick cut.`,
      },
      {
        p: `There’s an eye benefit beyond safety, too. Glasses with side shields and sealed goggles also block much of the wind and dust that dry the eyes. If your site allows a choice, ask your foreman or safety lead about wraparound styles or goggles with a foam seal for dusty, windy work.`,
      },
      { h: 'Dry eyes at work on open decks and roofs' },
      {
        p: `Wind picks up with height, and an open deck or roof has nothing to slow it. A full shift up there dries the tear film faster than the same hours on the ground. Approved safety glasses with a close, wraparound fit help, and so does a hard hat with a brim if your site allows one. Turn your back to gusts during a break, and take a few slow blinks before you get back to work.`,
      },
      { h: 'Winter sites' },
      {
        list: [
          `Cold wind and dry air: approved goggles cover more of the eye than glasses on the worst days.`,
          `Temporary heaters in enclosed floors push out hot, dry air; don’t stand with your face in the blast.`,
          `Keep your drops in an inside pocket, since a frozen truck cab falls outside the label’s storage range.`,
          `Warm up in the trailer or truck with the heat aimed at your feet, not your face.`,
        ],
      },
      { h: 'Summer sites' },
      {
        p: `Summer brings sun, glare off concrete and sweat running into your eyes. Tinted safety glasses, where approved, cut glare without giving up protection. A sweatband under the hard hat keeps salty sweat out, and wiping with a clean cloth beats rubbing with dirty gloves. Between tasks, a truck cab with the air conditioning on high dries the eyes again; aim the vents low.`,
      },
      { h: 'Using a drop on a break' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. The label also says: {tip}. On a job site, that means a few extra steps:`,
      },
      {
        list: [
          `Use drops on a break, never while operating tools or equipment, or while working at height.`,
          `Wash your hands, or at least clean them well; site dust on your fingers ends up in your eye.`,
          `Step out of the wind and away from cutting or sweeping.`,
          `Read the caution first: {warnings}.`,
          `If you wear contact lenses, the label doesn’t cover them; ask your eye doctor.`,
        ],
      },
      {
        p: `A drop isn’t for flushing debris. If something gets in your eye, follow your site’s first aid procedure, which usually means the eyewash station, and get medical help if it doesn’t clear.`,
      },
      { h: 'Getting drops to the site' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Many crews ship to home rather than a site without a mailroom; our guide on [shipping eye drops to a job site](/guides/shipping-eye-drops-to-a-job-site) covers both. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. For more on full shifts outside, see [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Get medical help right away for anything stuck in the eye, a chemical splash, or an injury. For dryness, the label’s limit applies: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops replace safety glasses?',
        a: `No. A lubricating drop eases dryness and does nothing to stop dust or debris. Wear the eye protection your site requires whenever the work calls for it.`,
      },
      {
        q: 'What should I do if dust gets in my eye on a job site?',
        a: `Follow your site’s first aid procedure, which usually means the eyewash station, and don’t rub. If something stays in the eye, or pain or blurred vision continues, get medical help. Quell’s label doesn’t cover flushing debris.`,
      },
      {
        q: 'Why do my eyes feel dry after a day on a windy job site?',
        a: `Wind and fine dust pull moisture from the eye’s surface, and focusing on detailed work slows blinking. Wraparound safety glasses or sealed goggles, where your site approves them, block much of the wind.`,
      },
      {
        q: 'Can I keep eye drops in my truck on a job site?',
        a: `Only when the cab stays within the label’s storage range: {storage}. A truck in summer sun or on a freezing morning goes outside it, so an inside pocket or lunch bag is safer.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-bartenders-and-servers',
    title: 'Dry eyes for bartenders and servers',
    description:
      'Late shifts, blowing HVAC, kitchen heat and dim rooms dry the eyes. Practical habits for bartenders and servers, and how to use drops on a break.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Bartenders and servers get dry eyes from late shifts, strong HVAC blowing over the bar and dining room, heat from the kitchen pass, and dim light that has them squinting at tickets and POS screens. Smoke from grills and patio heaters adds to it. Step out of vent paths when you can, blink fully during lulls, keep a lubricating drop in your locker to use on breaks as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why restaurant and bar shifts dry the eyes' },
      {
        list: [
          `Ceiling vents and fans keep a crowded room comfortable by moving a lot of air, much of it across the bar and service stations.`,
          `The pass and the expo line throw heat from the kitchen at anyone picking up plates.`,
          `Dim dining rooms and bars mean squinting at handwritten tickets, small menus and card readers.`,
          `A bright POS screen in a dark room is hard to look at, and you look at it hundreds of times a night.`,
          `Patio heaters, fire pits and wood grills add dry heat and smoke.`,
          `Shifts end late, when eyes are already tired.`,
        ],
      },
      { h: 'Behind the bar' },
      {
        p: `Bartending is close, fast work with your eyes on the pour, the ticket printer and the guests at once. Citrus oils from peels and twists can sting if they reach your eyes, and so can the spray from cutting limes.`,
      },
      {
        list: [
          `Wash your hands after cutting fruit and before touching your face.`,
          `Cut garnishes with the fruit angled away from you.`,
          `Ask whether a vent that blows straight down the bar can be redirected.`,
          `Take a few slow, full blinks between rushes, while you restock or polish glassware.`,
        ],
      },
      { h: 'On the floor' },
      {
        p: `Servers cross the building dozens of times a shift: from the cooled dining room to the hot kitchen and back, out to a heated patio in November, then to a dim corner booth to read a check. Each change of air hits the eyes, and none of them is humid. Comfortable glasses help if you need them for reading small print, and a little extra light at the service station makes a difference too, since squinting cuts down on blinking.`,
      },
      { h: 'Dry eyes when tired at the end of a double' },
      {
        p: `By the end of a double or a close, you’ve spent many hours in conditioned air, and fatigue makes eyes feel drier still. Then comes the drive home in the dark, with oncoming headlights and the heater blowing. Aim the vents at your feet or chest, and give your eyes a minute with the lids closed before you start the car. Our guide on [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers sleeping during the day after late work.`,
      },
      { h: 'Kitchen heat and smoke' },
      {
        p: `If you also work the line or run food from a wood-fired oven, the kitchen adds its own dry heat and smoke. [Dry eyes for line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs) covers the back of house in detail, so it isn’t repeated here.`,
      },
      { h: 'Using Quell on a break' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. The label adds: {tip}. In a restaurant, that turns into a few habits:`,
      },
      {
        list: [
          `Use drops on a break, away from food and the bar, and wash your hands first.`,
          `Keep the bottle in your locker or bag, not next to the dish machine or the hot line. The label’s storage line reads: {storage}.`,
          `Read the caution before the first use: {warnings}.`,
          `If you wear contact lenses, the label doesn’t cover using it with them; ask your eye doctor.`,
          `Keep your bottle to yourself; coworkers should have their own.`,
        ],
      },
      { h: 'Ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, and most people ship to home rather than the restaurant. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery. You can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If juice, sanitizer or a cleaning chemical splashes into your eye, follow your workplace’s first aid steps, rinse with plenty of clean water, and get medical help if it still hurts or your vision blurs. A lubricating drop isn’t meant for flushing. For ongoing dryness, the label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working at a bar?',
        a: `Vents and fans move a lot of dry air across the bar, dim light makes you squint at tickets and screens, and late shifts add fatigue. Squinting and close focus both cut down on full blinks.`,
      },
      {
        q: 'What should I do if lime juice gets in my eye?',
        a: `Rinse with plenty of clean, cool water and don’t rub. If it still stings or hurts, or your vision blurs after rinsing, get medical help. A lubricating eye drop isn’t meant for flushing.`,
      },
      {
        q: 'Can servers use eye drops during a shift?',
        a: `On a break, away from food, with clean hands. Quell’s label gives the directions as: {directions}. Use your own bottle and keep it in a locker or bag.`,
      },
      {
        q: 'Why are my eyes so dry after a late shift?',
        a: `Hours of conditioned air, squinting in dim light and fatigue all add up by closing time. Aim the car vents away from your face on the drive home, and see an eye doctor if dryness keeps returning.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-airport-ground-crews',
    title: 'Dry eyes for airport ground crews',
    description:
      'Open-ramp wind, jet exhaust, de-icing season and night shifts dry the eyes. What helps ground crews, and why eye drops don’t replace eye protection.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Airport ground crews get dry eyes from wind across the open ramp, hot exhaust from engines and auxiliary power units, cold de-icing seasons, and night shifts under bright apron lights. Each speeds evaporation from the tear film. Wear the eye protection your employer issues, keep your back to blast and wind when procedures allow, use a lubricating drop on breaks as its label directs, and see an eye doctor for pain, vision changes or debris in the eye.`,
      },
      { h: 'Why the ramp is hard on the eyes' },
      {
        list: [
          `An airport is a wide, flat, open space, and the ramp gets the full force of the wind.`,
          `Engine exhaust and APU exhaust blow hot, dry air across the work area.`,
          `Propeller wash on regional aircraft and jet blast can lift grit off the pavement.`,
          `De-icing season brings cold wind and fluid spray.`,
          `Sun on concrete and on a wet ramp throws glare from below.`,
          `Night and early shifts mean bright floodlights against the dark and long hours awake.`,
        ],
      },
      { h: 'Eye protection is your employer’s call' },
      {
        p: `Airlines and ground handling companies set the eye protection each task requires and supply it, and their procedures say when and where to wear it. Follow them. A lubricating eye drop eases dryness; it does nothing to keep out grit, fluid or debris and is no substitute for safety glasses or goggles. Approved eyewear with a close, wraparound fit also happens to block wind, which helps with dryness on long turns.`,
      },
      { h: 'Wind and blast on the ramp' },
      {
        p: `Your procedures already keep you clear of engine danger areas. Within those rules, a few habits reduce the drying:`,
      },
      {
        list: [
          `Turn your back to the wind while waiting for an aircraft to block in.`,
          `Take slow, full blinks after a gusty stretch; people tend to squint and stare in the wind.`,
          `Keep your hands off your eyes on the ramp; gloves pick up grease, fuel and grit.`,
          `In the tug or belt loader cab, point any heater or fan at your body rather than your face.`,
        ],
      },
      { h: 'De-icing season' },
      {
        p: `Winter turns add cold, dry air, spray and long periods outside. Cold air holds little water, so the tear film thins faster in a stiff north wind. If de-icing fluid gets into your eyes, follow your employer’s first aid procedure and the product’s safety data sheet, use the eyewash station, and get medical help if irritation continues. Quell’s label doesn’t cover rinsing out chemicals. In the break room, warm up with the heater aimed away from your face.`,
      },
      { h: 'Night shifts and long turns' },
      {
        p: `Late-night work on the ramp and in bag rooms means hours awake against the body’s clock, under floodlights, often with screens in the operations office between flights. Tired eyes feel drier. When you get home, sleep in a dark room with any fan aimed away from the bed. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers daytime sleep.`,
      },
      {
        p: `Flight crews and controllers deal with their own versions of airport air; see [eye drops for pilots and flight crews](/guides/eye-drops-for-pilots-and-flight-crews) and [dry eyes for air traffic controllers](/guides/dry-eyes-for-air-traffic-controllers).`,
      },
      { h: 'Using Quell on a break' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the use as: {uses}. The directions read: {directions}. The label also says: {tip}.`,
      },
      {
        list: [
          `Use drops in the break room, not on the ramp, and wash fuel, grease and fluid residue off your hands first.`,
          `Keep the bottle in your bag or locker, not a tug cab in July or January. The storage line reads: {storage}.`,
          `Read the caution first: {warnings}.`,
          `If you wear contact lenses, the label doesn’t cover them; ask your eye doctor.`,
        ],
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US home address, which is usually simpler than an airport workplace. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised. You can [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Grit blown into the eye that doesn’t rinse out, a chemical splash, pain or a change in vision all need medical attention, not another drop. For everyday dryness, the label’s limit applies: {stopUse} Our [self-check](/self-check) can help you describe symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes dry out working on the airport ramp?',
        a: `The open ramp is windy, engine and APU exhaust blow hot dry air, and winter brings cold wind and de-icing spray. Long night shifts add fatigue, which makes dryness more noticeable.`,
      },
      {
        q: 'What should I do if de-icing fluid gets in my eyes?',
        a: `Follow your employer’s first aid procedure and the fluid’s safety data sheet, use the eyewash station, and get medical help if irritation, pain or blurred vision continues. Quell’s label doesn’t cover flushing chemicals.`,
      },
      {
        q: 'Do ramp workers need eye protection?',
        a: `Your employer decides what eye protection each task requires and supplies it, so follow those rules. A lubricating drop is for dryness and doesn’t stand in for any of it.`,
      },
      {
        q: 'Where should ground crew keep eye drops?',
        a: `In a bag or locker that stays within the label’s storage range, {storage}, rather than a vehicle cab exposed to summer heat or winter cold.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-park-rangers',
    title: 'Dry eyes for park rangers',
    description:
      'Sun, wind, altitude and dusty roads dry the eyes on long patrols. Practical habits for park rangers, plus carrying and using eye drops in the field.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Park rangers get dry eyes from long days in sun and wind, thin dry air at altitude in many western parks, dust on trails and unpaved roads, and glare off snow, rock and water. Patrols and long drives mean hours of scanning into the distance with fewer full blinks. Wear wraparound sunglasses where your uniform rules allow, use a lubricating drop at stops as its label directs, keep it within its storage range, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why ranger work dries the eyes' },
      {
        list: [
          `Sun and glare from open sky, snowfields, water and pale rock.`,
          `Wind at overlooks, on ridges and across open grassland.`,
          `Altitude: air in high country is often dry, and it’s frequently windy too.`,
          `Dust from unpaved roads, campgrounds and trail work.`,
          `Smoke during fire season.`,
          `Long drives with dashboard vents blowing, plus hours at a visitor center desk.`,
        ],
      },
      {
        p: `Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why each of these speeds evaporation from the tear film.`,
      },
      { h: 'Sun and glare' },
      {
        p: `Bright light makes you squint, and squinting cuts down on full blinks. Glare reflected from snow, water or slickrock comes from below as well as above. Polarized wraparound sunglasses handle both, and the brim of a campaign hat or ball cap shades the eyes from overhead sun. On snow, goggles cover more than glasses. Check your agency’s uniform rules on eyewear and hats before buying.`,
      },
      { h: 'Wind, dust and smoke' },
      {
        p: `Wind at an overlook or on a ridge can feel constant, and dust rides with it on dry days. Close-fitting sunglasses block much of both. On dirt roads, keep the patrol vehicle’s windows up and the air on recirculate when following another vehicle. Fire season smoke can irritate the eyes; follow your agency’s guidance on exposure, and step away from smoke when you can. Wash dust off your face and hands at the end of a patrol before touching your eyes.`,
      },
      { h: 'Long patrols and drives' },
      {
        p: `A patrol can mean hours behind the wheel or on foot, scanning for wildlife, visitors in trouble or fire. Steady scanning tends to reduce blinking. Use pullouts and trailheads as reminders: stop, close your eyes for a moment, then blink fully a few times. In the vehicle, aim vents at your chest or the floor. Snow patrols on sleds bring their own wind; [dry eyes on a snowmobile](/guides/dry-eyes-on-a-snowmobile) covers that.`,
      },
      { h: 'Visitor centers and the office' },
      {
        p: `Interpretive and front-desk days trade wind for screens and building air. Answering questions, issuing permits and writing reports keeps your eyes on monitors, and visitor centers in hot or cold places run their heating and cooling hard. Take a break outside between tours, and set the monitor slightly below eye level.`,
      },
      { h: 'Using Quell in the field' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which fits work in dry, moving air. Its label lists this use: {uses}. The directions read: {directions}. The label also says: {tip}.`,
      },
      {
        list: [
          `Clean your hands first. If you’re using hand sanitizer with no water, let it dry fully before going near your eyes.`,
          `Stand with your back to the wind and out of the dust.`,
          `Carry the bottle in a pack or inside pocket rather than a glove box; the label says: {storage}. A patrol truck parked in desert sun or a winter lot goes outside that range.`,
          `Read the caution first: {warnings}.`,
          `If you wear contact lenses, the label doesn’t cover them; ask your eye doctor.`,
        ],
      },
      { h: 'Getting drops at a remote station' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Remote park housing can make delivery slower and less predictable, and no delivery date is promised, so order well before you run out; our guide on [eye drops delivered to a rural address](/guides/eye-drops-delivered-to-a-rural-address) has tips. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which helps a seasonal crew order together.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `In the backcountry, an eye problem can be far from help. Get medical attention for anything stuck in the eye, an injury, pain or a sudden change in vision, using your agency’s medical procedures. For everyday dryness, the label says: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Why do park rangers get dry eyes?',
        a: `Long days in sun, wind and dust, often at altitude, plus hours of scanning that reduce blinking. Dry indoor air at visitor centers and patrol vehicle vents add to it.`,
      },
      {
        q: 'Can wildfire smoke make your eyes feel gritty?',
        a: `Smoke can irritate the eyes and make them feel gritty or dry. Follow your agency’s smoke guidance, move away from it when you can, and see a doctor if pain or vision changes come with it.`,
      },
      {
        q: 'How should I store eye drops in a patrol vehicle?',
        a: `Don’t leave them in the vehicle if it will get hot or freezing. Quell’s label says: {storage}. A pack or an inside pocket keeps the bottle closer to that range.`,
      },
      {
        q: 'What sunglasses help with dry eyes on long patrols?',
        a: `Wraparound frames that sit close to the face block wind from the sides, and polarized lenses cut glare from water and snow. Check your agency’s uniform rules before buying.`,
      },
    ],
  },
  {
    slug: 'can-i-use-my-hsa-for-my-parents-eye-drops',
    title: 'Can I use my HSA for my parents’ eye drops?',
    description:
      'Only if your parent is, or could be, your dependent. How IRS Publications 969 and 501 decide whether an HSA can pay for a parent’s eye drops.',
    category: 'ordering',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Sometimes. IRS Publication 969 lets HSA money pay qualified medical expenses for you, your spouse and your dependents. A parent counts if you claim them as a dependent, or could have claimed them except that they had too much gross income or filed a joint return. The test that usually decides it is support: you generally must provide more than half of your parent’s total support for the year. OTC eye drops count as a medical expense.`,
      },
      { h: 'Who an HSA can pay for' },
      {
        p: `Publication 969 (2025), the IRS guide to health savings accounts, lists whose medical expenses an HSA can cover:`,
      },
      {
        list: [
          `You and your spouse.`,
          `All dependents you claim on your tax return.`,
          `Any person you could have claimed as a dependent, except that the person filed a joint return, had gross income at or above the exemption amount, or you (or your spouse, if filing jointly) could be claimed as a dependent on someone else’s return.`,
        ],
      },
      {
        p: `A parent isn’t on that list automatically. They get there through the dependent rules, which live in a different publication.`,
      },
      { h: 'When does a parent count as your dependent?' },
      {
        p: `IRS Publication 501 (2025) sets out the tests for a qualifying relative, the category a parent usually falls into. In plain terms:`,
      },
      {
        list: [
          `Relationship: your father, mother, grandparent or other direct ancestor, or a stepparent, counts. Publication 501 says these relatives don’t have to live with you.`,
          `Support: you must generally provide more than half of the person’s total support for the year, counting what they spend on themselves from their own money.`,
          `Gross income: their gross income must be under a yearly limit that Publication 501 states.`,
          `Not anyone’s qualifying child, plus the citizen or resident test and the joint return test in Publication 501.`,
        ],
      },
      { h: 'Why the income test matters less for an HSA' },
      {
        p: `This is the part people miss. For HSA spending, Publication 969 counts a person you could have claimed except that their gross income was at or above the limit, or they filed a joint return. So a parent with a pension or other income above the qualifying-relative limit can still be someone your HSA pays for, as long as the other tests, especially support, are met.`,
      },
      {
        p: `The support test doesn’t get that pass. If your parent pays most of their own housing, food and bills, your HSA generally can’t cover their eye drops, even if you pick up a few costs here and there.`,
      },
      { h: 'Brothers and sisters sharing a parent’s support' },
      {
        p: `Families often split a parent’s costs. Publication 501 covers this with a multiple support agreement: when no one person provides more than half, but together you do, one of you who provides more than 10 percent can claim the parent, and the others sign a statement agreeing not to. Form 2120, Multiple Support Declaration, can be used for it.`,
      },
      {
        p: `Only the person claiming the parent as a dependent under that agreement fits the dependent route. For the others, or for anything uncertain, ask your HSA administrator or a tax professional before paying from the account.`,
      },
      { h: 'If your parent has their own HSA' },
      {
        p: `A parent with an HSA of their own can use it for their own qualified medical expenses. Publication 969 sets the contribution limit to zero starting with the first month a person is enrolled in Medicare, so many retirees stop adding money; how they use a remaining balance is a question for their account’s administrator.`,
      },
      { h: 'Do OTC eye drops qualify?' },
      {
        p: `Yes. Since the CARES Act, over-the-counter medicines bought after December 31, 2019 count as HSA expenses without a prescription. Quell is an OTC lubricating eye drop, and its label gives this use: {uses}. Our guides on [HSA, FSA and eye drops](/guides/hsa-fsa-and-eye-drops) and [using an HSA for a spouse’s eye drops](/guides/can-i-use-my-hsa-for-my-spouses-eye-drops) cover the general rules, so they aren’t repeated here.`,
      },
      { h: 'Buying eye drops for a parent, step by step' },
      {
        list: [
          `Work out support first. Publication 501 includes a worksheet for comparing what you provide with your parent’s total support.`,
          `Have your parent read the label’s caution before you order: {warnings}.`,
          `Order as a guest and ship to your parent’s address anywhere in the US; see [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else).`,
          `Pay with the HSA card, or pay another way and reimburse yourself if your plan allows it.`,
          `Save the order confirmation, note that it was for your parent, and keep your support records with it.`,
          `Don’t also claim the purchase through your parent’s FSA or as an itemized deduction.`,
        ],
      },
      { h: 'What the label says for an older parent' },
      {
        p: `The directions on Quell’s panel are the same for every adult: {directions}. The label doesn’t carry special directions for older adults, so questions about other eye drops or medicines your parent uses belong with their eye doctor or pharmacist. Our guide to [eye drops for older adults](/guides/eye-drops-for-older-adults) covers practical things like grip and aim.`,
      },
      {
        p: `This page summarizes IRS Publications 969 and 501; it isn’t tax advice. Dependency can turn on details, so for your situation, ask your HSA administrator or a tax professional.`,
      },
    ],
    faq: [
      {
        q: 'Can I use my HSA for a parent who isn’t my dependent?',
        a: `Generally not. Publication 969 limits HSA spending to you, your spouse, your dependents and people you could have claimed but for a joint return, their gross income, or your being someone else’s dependent. If you don’t provide more than half of your parent’s support, those exceptions won’t help.`,
      },
      {
        q: 'Does my parent have to live with me to be my dependent?',
        a: `No. IRS Publication 501 lists a father, mother, grandparent or other direct ancestor, and a stepparent, among relatives who don’t have to live with you. The support and other tests still apply.`,
      },
      {
        q: 'Can I use my HSA for my parents if their income is too high to claim them?',
        a: `Possibly. Publication 969 counts someone you could have claimed except for their gross income, so income alone doesn’t rule a parent out. You still generally need to provide more than half of their total support.`,
      },
      {
        q: 'What is a multiple support agreement?',
        a: `Under IRS Publication 501, when relatives together provide more than half of a person’s support but no one does alone, one who provides more than 10 percent can claim the person and the others sign statements agreeing not to. Form 2120 can be used.`,
      },
    ],
  },
  {
    slug: 'are-eye-drops-bad-for-you',
    title: 'Are eye drops bad for you?',
    description:
      'What an eye drop’s label says about who should be careful, when not to use it and when to stop, and what it leaves to your eye doctor.',
    category: 'label',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Whether eye drops are bad for you depends on the drop, how you use it and your own eyes, so the honest answer comes from the label and your eye doctor rather than a blanket yes or no. An OTC drop’s Drug Facts panel tells you how to use it, when not to use it, who should be cautious and when to stop and ask a doctor. Follow it exactly, and bring anything beyond everyday dryness to an eye doctor.`,
      },
      { h: 'Are eye drops safe? What a label can and can’t tell you' },
      {
        p: `FDA rules give over-the-counter drugs a standard Drug Facts format, with the same sections in the same order on every box: active ingredients, purpose, uses, warnings, directions, other information and inactive ingredients. The point is that you can find the limits on any OTC drop in seconds. What a label can’t do is know your history: your allergies, the other drops and medicines you use, or what’s actually causing your symptoms. That part belongs with your eye doctor or pharmacist.`,
      },
      {
        p: `Quell is an OTC lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives this use: {uses}. Here’s what the rest of its panel says, section by section. Everything is also on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'The Warnings section' },
      {
        p: `Quell’s panel says: {warnings}. The egg and bird caution is there because of an ingredient that comes from a bird; our guide to [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) explains it, and if you have either allergy, talk to your doctor before using it. The second half means the drop goes in the eyes and nowhere else; see [what “for use in the eyes only” means](/guides/what-does-for-use-in-the-eyes-only-mean).`,
      },
      { h: 'The Do not use line' },
      {
        p: `Quell’s Do not use line reads: {doNotUse}. Normally the label describes the liquid this way: {milky}. If a bottle looks different from that, set it aside and don’t use it. Our guide on [what to do if the color changes](/guides/do-not-use-if-the-color-changes) covers what to do next.`,
      },
      { h: 'When using this product' },
      {
        p: `This section is about keeping the bottle clean. Quell’s says: {tip}. A tip that touches an eyelash, a finger or a countertop can carry germs back into the bottle. The same logic is why a bottle shouldn’t be shared, even within a family.`,
      },
      { h: 'The Stop use section' },
      {
        p: `This is the section that answers “when is it bad for me?” most directly. In Quell’s case it says: {stopUse} Those signs mean the drop isn’t the right answer for what’s going on, and an eye doctor should look. Our guides on [when to stop using eye drops](/guides/when-to-stop-using-eye-drops) and [why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) go into each part.`,
      },
      { h: 'Is it bad to use eye drops every day?' },
      {
        p: `The directions on Quell’s panel describe daily use: {directions}. Using it that way, every day, is what the label lays out. Using more than the directions say isn’t covered by the label; if you find you want drops more often than it directs, that’s a reason to see an eye doctor rather than to use more. Our guide on [using eye drops every day](/guides/is-it-okay-to-use-eye-drops-every-day) answers the daily-use question in full, and [too many eye drops at once](/guides/too-many-eye-drops-at-once) covers the occasional extra squeeze.`,
      },
      { h: 'Are eye drops bad for your eyes if they don’t help?' },
      {
        p: `A drop that doesn’t seem to help is telling you something. Dryness can have causes that a lubricating drop won’t reach, and some symptoms that feel like dryness are something else. If your eyes feel worse, or the trouble hangs on past the point the Stop use section describes, stop and get an exam rather than switching from one bottle to the next. See [can eye drops make dry eyes worse](/guides/can-eye-drops-make-dry-eyes-worse) for the details.`,
      },
      { h: 'If swallowed' },
      {
        p: `Eye drops are made for the eye, not the mouth. Quell’s panel says: {swallowed}. Keep bottles where children can’t reach them, and see [what to do if someone swallows eye drops](/guides/what-to-do-if-someone-swallows-eye-drops) for the steps.`,
      },
      { h: 'What the label leaves to your doctor' },
      {
        p: `Some common questions aren’t answered on Quell’s panel at all: using it with contact lenses, using it on children, and using it alongside other eye drops. The label gives no directions for those situations, so ask your eye doctor or pharmacist. Our list of [questions to ask your pharmacist](/guides/questions-to-ask-your-pharmacist) is a good starting point.`,
      },
      { h: 'Storage and the bottle itself' },
      {
        p: `The Other information section adds storage: {storage}. A drop kept too hot or too cold, or past its expiration date, isn’t one to rely on. Check the date on the box and bottle, and don’t use a bottle whose tamper-evident seal was broken when it arrived; we replace broken-seal orders.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops bad for your eyes?',
        a: `The label is where that answer starts. Its Warnings, Do not use and Stop use sections set the limits for using the drop, and anything outside them, or any doubt about your own eyes, is a question for your eye doctor.`,
      },
      {
        q: 'Are eye drops safe?',
        a: `Start with the label: it lists who should be cautious, when not to use the drop and when to stop. Quell’s panel, for example, cautions people with egg or bird allergies. Whether a drop suits your eyes is a question for your eye doctor.`,
      },
      {
        q: 'What are the side effects of lubricating eye drops?',
        a: `Quell’s label doesn’t list side effects. Its Stop use section says: {stopUse}`,
      },
      {
        q: 'What does the Warnings section on eye drops mean?',
        a: `It names the people who should be cautious and any limits on how the product is used. On Quell’s panel it reads: {warnings}.`,
      },
    ],
  },
]
