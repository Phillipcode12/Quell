import type { Guide } from '@/lib/guide-types'
export const DAILY_20261116_C: Guide[] = [
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-peoria-il:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014842.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014842.csv
   *   (PEORIA GTR PEORIA AP, IL, elev 198.1 m, lat 40.6675 lon -89.6839: annual precip
   *   37.55 in; May 4.69, Jan 2.06, Feb 1.99; annual snow 26.2 in, Jan 7.7, Feb 6.9,
   *   Dec 6.2; Jul high 86.3 F; Jan high 33.6 F, low 17.6 F; 23.2 days at or above
   *   90 F; 117.7 nights at or below 32 F; 36.8 days with a high at or below 32 F;
   *   6.4 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (PEORIA, IL, WBAN 14842: Jan 80/70, Apr 78/54, May 80/56, Dec 83/71,
   *   annual 83/61, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (PEORIA annual 3.7; Mar and Apr 4.4 windiest, Aug 2.7 calmest; Chicago 4.4,
   *   Springfield IL 4.2, Rockford 4.1, Moline 3.8: Peoria lowest of the five)
   * Elevation is the NOAA station elevation, converted (198.1 m is about 650 ft).
   */
  {
    slug: 'dry-eye-relief-peoria-il',
    title: 'Dry eye relief in Peoria, Illinois',
    description:
      'Peoria’s April afternoons drop to 54 percent humidity and about 118 nights a year freeze. NOAA’s numbers and practical dry eye relief for the river city.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Peoria means planning for two dry stretches: April, when NOAA’s records put afternoon humidity at its yearly low of 54 percent, and the long heating season, when about 118 nights a year fall to freezing. Keep warm air off your face, blink fully at screens, and use a lubricating drop the way its label says. Pain or vision changes belong with an eye doctor.`,
      },
      { h: 'What NOAA’s Peoria numbers show' },
      {
        p: `The weather station behind Peoria’s official record sits at the airport west of downtown, which NOAA lists as Greater Peoria Airport, at about 650 feet above sea level on the upland above the Illinois River valley. Its 1991 to 2020 climate normals sketch a city with real seasons on both ends:`,
      },
      {
        list: [
          `About 37.55 inches of precipitation in a normal year, peaking in May at 4.69 inches.`,
          `January (2.06 inches) and February (1.99) are the driest months, the same weeks the furnace works hardest.`,
          `About 26.2 inches of snow, mostly in January (7.7), February (6.9) and December (6.2).`,
          `Roughly 118 nights at or below 32°F, about 37 days that never get above freezing, and around 6 nights that reach zero.`,
          `About 23 days a year at 90°F or hotter, with a normal July high of 86.3°F.`,
        ],
      },
      { h: 'Why your eyes feel dry in a Peoria winter' },
      {
        p: `Outdoor air in a Peoria January isn’t especially dry on paper. NOAA’s humidity table gives the airport 80 percent in the morning and 70 in the afternoon that month. The catch is temperature. The normal January low is 17.6°F, and when air that cold is pulled inside and warmed to 70, its relative humidity falls to a small fraction of what it was outdoors. That warmed, thin air is what your tear film sits in for most of a winter day, at home, in the office along Water Street, or in a classroom at Bradley.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and keep it clean; our [humidifier guide](/guides/does-a-humidifier-help-dry-eyes) covers placement.`,
          `Close or redirect a floor register that blows straight at your favorite chair or the head of the bed.`,
          `Turn the thermostat down a few degrees at night. Cooler indoor air holds its relative humidity better than hot air.`,
          `In the car, send the defroster to the windshield and the heat to your feet rather than the dash vents.`,
        ],
      },
      { h: 'Spring wind along the Illinois River' },
      {
        p: `By April the furnace is mostly off, but the air itself has turned dry. Afternoon humidity at the airport averages 54 percent in April, the lowest of any month, and 56 in May. NOAA’s wind table also lists March and April as Peoria’s windiest months. Put those together and a spring afternoon on the Rock Island Greenway or the riverfront can leave your eyes stinging faster than a cold day in January.`,
      },
      {
        p: `Peoria is calmer than much of the state. Of the Illinois stations in the same wind table (Chicago, Rockford, Moline, Springfield and Peoria), Peoria’s yearly average is the lowest. Calm is relative, though: a gust off the open water at the riverfront still pulls moisture from the eye’s surface, and wraparound sunglasses help more than you’d expect on a bright, breezy day.`,
      },
      { h: 'Dry eyes from screen time at work' },
      {
        p: `Plenty of Peoria jobs mean long hours at a monitor, from hospital charting along the medical campus near downtown to engineering and office work. Focusing on a screen slows the blink rate, and the blinks you do make are often incomplete, so the tear film thins between them. A few habits help:`,
      },
      {
        list: [
          `Every 20 minutes or so, look out a window or down a hallway for a few seconds and blink slowly and completely.`,
          `Set the monitor slightly below eye level so your eyelids cover more of the eye’s surface.`,
          `Keep a desk fan or space heater from aiming at your face.`,
        ],
      },
      {
        p: `Our guide to [screens and the tear film](/guides/screens-and-your-tear-film) explains the blink side in more depth.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts list the Uses as: {uses}. Directions read: {directions}. The panel adds: {tip}.`,
      },
      {
        p: `Two more lines matter in central Illinois. Storage: {storage}. A car parked outside a Peoria Heights shop on a zero-degree January morning, or a dashboard on a 90-degree July afternoon, can push past either end of that, so keep the bottle in a coat pocket or bag instead. And the warning: {warnings}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Peoria' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Peoria, East Peoria, Pekin, Morton and anywhere else in the US. There’s no account to make; checkout works as a guest. Shipping is {shipping}, or free on orders of {freeBottles} or more bottles. A tracking email follows, but no arrival date is promised, so order before the last bottle runs dry. Local details are on the [Peoria page](/eye-drops/peoria-il) and the [Illinois page](/eye-drops/state/illinois).`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `Lubricating drops are for everyday dryness. They aren’t a way to find out why your eyes hurt. The label’s own limit: {stopUse} Sudden blurring, light that suddenly bothers you, or discomfort in only one eye are all reasons to book an exam. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through them.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Peoria in the winter?',
        a: `Peoria’s January nights normally fall to about 17.6°F at the airport. Heating air that cold to room temperature drops its relative humidity sharply, so the tear film evaporates faster indoors even though the outdoor humidity reading looks high.`,
      },
      {
        q: 'What is the driest month in Peoria?',
        a: `For precipitation, February is driest at 1.99 inches in NOAA’s 1991 to 2020 normals, with January close behind. For afternoon humidity, April is lowest at about 54 percent.`,
      },
      {
        q: 'How much snow does Peoria get a year?',
        a: `NOAA’s 1991 to 2020 normals put Peoria’s airport at about 26.2 inches of snow a year, with January the snowiest month at 7.7 inches.`,
      },
      {
        q: 'Can I get Quell shipped to Peoria, Illinois?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Peoria and the surrounding towns, with guest checkout and tracking by email. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-springfield-il:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093822.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093822.csv
   *   (SPRINGFIELD CAPITAL AP, IL, elev 181.1 m: annual precip 38.04 in; Jun 4.61,
   *   May 4.52, Feb 1.93; annual snow 21.8 in, Jan 6.7, Feb 6.1, Dec 4.3; Jul high
   *   86.8 F, Aug 85.4 F; Jan high 35.9 F, low 19.9 F; 28.2 days at or above 90 F;
   *   110.8 nights at or below 32 F; 29.6 days with a high at or below 32 F; 4.8
   *   nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SPRINGFIELD, IL, WBAN 93822: Apr 79/55, May 81/54, Sep 88/53, Oct 84/54,
   *   Dec 82/70, Jan 80/69, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SPRINGFIELD, IL annual 4.2; Mar and Apr 5.1 windiest, Aug 2.8 calmest;
   *   Peoria 3.7, Chicago 4.4)
   * Elevation is the NOAA station elevation, converted (181.1 m is about 595 ft).
   */
  {
    slug: 'dry-eye-relief-springfield-il',
    title: 'Dry eye relief in Springfield, Illinois',
    description:
      'September afternoons in Springfield, Illinois, average 53 percent humidity, the year’s low. What NOAA’s records mean for dry eyes, season by season.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Springfield, Illinois, dry eyes tend to flare in three seasons: windy March and April, early fall, when September afternoons at the capital’s airport average 53 percent humidity (NOAA’s lowest month), and winter, when furnaces dry indoor air. Cut drafts at your face, take screen breaks, and use a lubricating drop exactly as labeled. See an eye doctor for pain or blurred vision.`,
      },
      { h: 'Springfield’s climate in NOAA’s records' },
      {
        p: `NOAA keeps Springfield’s official normals at Abraham Lincoln Capital Airport, on the north edge of the city, at about 595 feet. The 1991 to 2020 averages describe flat, open prairie weather:`,
      },
      {
        list: [
          `38.04 inches of precipitation in a normal year. June is wettest at 4.61 inches, February driest at 1.93.`,
          `About 21.8 inches of snow, with January (6.7 inches) and February (6.1) carrying most of it.`,
          `A July high of 86.8°F and roughly 28 days a year at 90°F or above.`,
          `About 111 nights at or below freezing and close to 30 days when the high stays at 32°F or lower.`,
        ],
      },
      { h: 'The surprise: dry eyes in September' },
      {
        p: `Most people blame winter, but the capital’s driest afternoons by humidity come in early fall. NOAA’s table lists September at 88 percent in the morning and 53 in the afternoon, the widest daily swing of the year. October (54) and May (54) are close behind. A September morning can be foggy over Lake Springfield and still leave your eyes scratchy by four o’clock.`,
      },
      {
        p: `That timing lines up with harvest across Sangamon County, high school football under the lights, and long afternoons outdoors. Combine harvesters and grain trucks raise dust on the county roads, and dry chaff hangs in the air near the fields. If you’re working or driving through it:`,
      },
      {
        list: [
          `Keep the car’s recirculate setting on when you pass a field being cut.`,
          `Wear close-fitting glasses or safety glasses around grain bins and augers.`,
          `Rinse dust from your face and lids with clean water before touching your eyes.`,
          `Plan the walk around the lake or the Lost Bridge Trail for morning, when humidity runs much higher.`,
        ],
      },
      { h: 'Prairie wind in March and April' },
      {
        p: `There are few hills or tree lines to slow the wind across central Illinois. In NOAA’s wind table, Springfield averages a breezier year than Peoria, and March and April are its windiest months, while August is the calmest. April afternoons drop to 55 percent humidity as well. Wind speeds evaporation from the tear film, so a gusty spring day on an open sidewalk downtown can feel harsher on the eyes than a still, cold one.`,
      },
      {
        p: `Wraparound sunglasses block a surprising amount of that. So does turning your back to the wind while you wait at a crosswalk. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why moving air matters so much.`,
      },
      { h: 'Statehouse screens and winter offices' },
      {
        p: `Springfield is a government town: state agencies, the legislature, courts and the offices that serve them. That means a lot of people reading screens for hours in buildings with forced-air heat. NOAA’s normal January low of 19.9°F tells you how hard those heating systems are working. Warmed winter air holds far less relative humidity than it did outdoors, and staring at a monitor cuts your blink rate at the same time.`,
      },
      {
        list: [
          `Lower the monitor so you look slightly down at it.`,
          `Set a reminder to look away and blink fully a few times each half hour.`,
          `Ask facilities to angle a ceiling diffuser if it blows right onto your desk.`,
          `Keep a small humidifier at your desk if your office allows one.`,
        ],
      },
      {
        p: `Long sessions on the floor or in committee rooms during the spring session add late nights to the mix. Tired eyes blink less fully, which our guide to [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) covers.`,
      },
      { h: 'Reading Quell’s Drug Facts' },
      {
        p: `Quell is a lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its label reads: {uses}. Its directions: {directions}. And from the When using section: {tip}.`,
      },
      {
        p: `For storage the panel says: {storage}. A bottle left in a glove box at the State Fairgrounds lot in August, or in a car through a January night, can drift outside that range, so carry it with you. The label also notes: {warnings}. You can read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering for a Springfield address' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Springfield, Chatham, Rochester, Sherman and every other US address, including state office mailrooms if that’s where you’d rather receive it. Checkout takes a guest order with no account. Shipping costs {shipping}; {freeBottles} or more bottles ship free. You’ll get tracking by email, though we don’t promise a delivery date. The [Springfield, Illinois page](/eye-drops/springfield-il) and [Illinois page](/eye-drops/state/illinois) have more local information.`,
      },
      { h: 'Signs it’s time for an eye exam' },
      {
        p: `If drops and better habits aren’t enough, that’s worth a visit, not a bigger bottle. Quell’s panel says: {stopUse} Pain, vision that stays blurred after blinking, or dryness on only one side should go to an optometrist or ophthalmologist. The [self-check](/self-check) can help you organize what you’ve noticed first; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What month is the least humid in Springfield, Illinois?',
        a: `In NOAA’s relative humidity table for the Springfield airport, September afternoons are lowest at about 53 percent, with May and October close behind at 54.`,
      },
      {
        q: 'Is Springfield, Illinois windy?',
        a: `It’s breezier than Peoria in NOAA’s wind records, and March and April are its windiest months. August is usually the calmest.`,
      },
      {
        q: 'How cold does Springfield, Illinois get in winter?',
        a: `NOAA’s 1991 to 2020 normals give January a high of 35.9°F and a low of 19.9°F at the capital’s airport, with about 111 nights a year at or below freezing.`,
      },
      {
        q: 'Does Quell deliver to Springfield, Illinois?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to any US address, and Springfield is included. Checkout is as a guest, and a tracking email follows once the order ships.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-springfield-mo:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013995.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013995.csv
   *   (SPRINGFIELD, MO, elev 389.5 m, lat 37.2353 lon -93.4003: annual precip
   *   44.71 in; May 5.56, Apr 4.71, Feb 2.40, Jan 2.54; annual snow 13.7 in, Jan
   *   4.4; Jul high 89.6 F, Aug 89.1 F; Jan high 44.3 F, low 24.2 F; 39.7 days at
   *   or above 90 F; 95.2 nights at or below 32 F; 14.8 days with a high at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SPRINGFIELD, MO, WBAN 13995: Apr 79/55, Aug 88/55, Oct 83/55, Jul 87/57,
   *   Dec 80/64, Jan 79/63, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SPRINGFIELD, MO annual 4.1; Mar 4.9 windiest; Jul and Aug 3.3 calmest;
   *   Kansas City 4.6, Columbia 4.2, St. Louis 4.0)
   * Elevation is the NOAA station elevation, converted (389.5 m is about 1,280 ft).
   */
  {
    slug: 'dry-eye-relief-springfield-mo',
    title: 'Dry eye relief in Springfield, Missouri',
    description:
      'Springfield, Missouri, sits about 1,280 feet up on the Ozark Plateau with roughly 40 days a year at 90°F. NOAA’s figures and everyday steps for dry eyes.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Springfield, Missouri, is humid for much of the year, so dry eyes there usually come from what people do indoors and on the water: air conditioning through about 40 days of 90-degree heat, gas-furnace winters, wind on the lakes, and long screen hours. Aim vents away from your face, blink fully, and follow a lubricating drop’s label. Pain or vision changes go to an eye doctor.`,
      },
      { h: 'The Queen City’s weather, by the numbers' },
      {
        p: `NOAA’s official Springfield station is at Springfield-Branson National Airport on the northwest side, at about 1,280 feet on the Ozark Plateau. Its 1991 to 2020 normals show:`,
      },
      {
        list: [
          `About 44.71 inches of precipitation a year, with May the wettest month at 5.56 inches.`,
          `Only about 13.7 inches of snow, and roughly 15 days a year when the high stays at or below freezing.`,
          `Summer highs of 89.6°F in July and 89.1°F in August, with close to 40 days a year at 90°F or more.`,
          `About 95 nights a year at or below 32°F, and January lows near 24°F.`,
        ],
      },
      { h: 'Air conditioning through Ozarks summers' },
      {
        p: `NOAA’s humidity table gives Springfield August mornings of 88 percent. That sticky outdoor air is exactly why buildings, cars and homes run their air conditioners hard from June into September. An AC system pulls moisture out as it cools, and the cold, dry stream from a dashboard or ceiling vent lands right on the eyes. Many people notice their eyes feel worse at a desk or behind the wheel than they do outside.`,
      },
      {
        list: [
          `Turn the car’s center vents toward your chest or the side window on the drive down US 65.`,
          `Move a desk away from a supply vent, or ask for a deflector on it.`,
          `Use the AC’s fan on a lower speed at night so it isn’t blowing across the bed.`,
          `Take a real break outdoors at lunch; the shade on the Jordan Valley Park lawn beats the office air for a few minutes.`,
        ],
      },
      { h: 'Lake days and wind on the water' },
      {
        p: `Weekends at Table Rock Lake, Stockton Lake or a float trip on the James River bring their own trouble for the eyes: steady breeze across open water, sun glare bouncing off it, and spray from the boat. Afternoon humidity in July (57 percent) and August (55) is lower than the morning numbers suggest. NOAA’s wind records list July and August as Springfield’s calmest months, but wind on a lake isn’t the airport’s wind, and a boat at speed makes its own.`,
      },
      {
        p: `Polarized wraparound sunglasses help with both the breeze and the glare. Keep the drop bottle in a shaded dry bag rather than on the console in direct sun. Our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more ideas for a day on the water.`,
      },
      { h: 'Winter here is milder, but indoors is still dry' },
      {
        p: `Springfield’s January high of 44.3°F is mild for the Midwest, and NOAA’s numbers show only about 15 days a year when the high fails to climb past freezing. Even so, the furnace runs from November through March, and the normal January low near 24°F means cold air comes indoors every time a door opens and gets heated. December afternoons average 64 percent humidity outside, but the heated air inside a house or a lecture hall at Missouri State holds much less.`,
      },
      {
        p: `March, Springfield’s windiest month in NOAA’s table, sits right at the end of heating season, so the drafty, dry part of the year runs straight into the breezy one. Keep a humidifier going until the furnace really shuts off, and don’t sleep with a ceiling fan on high aimed at your face.`,
      },
      { h: 'Dry eyes from staring at a screen' },
      {
        p: `Call centers, hospitals, university offices and remote workers all put Springfield residents in front of monitors for hours. People blink less when they concentrate on a screen, and the tear film thins between those blinks. Our [eye drops for computer users](/guides/eye-drops-for-computer-users) guide has a fuller routine, but the basics are simple: look away every 20 minutes, blink all the way, and keep air from blowing on your face.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its label, the Uses are: {uses}. Follow the directions as printed: {directions}. To keep the solution clean: {tip}.`,
      },
      {
        p: `Storage on the label reads: {storage}. A truck bed at the lake, or a car parked in a sunny lot in August, can get far hotter than that, so the bottle belongs in your pocket or a cooler bag. The panel’s warning: {warnings}. See our [Drug Facts page](/drug-facts) for every section.`,
      },
      { h: 'Ordering Quell in Springfield, Missouri' },
      {
        p: `Quell is sent from Brentwood, Tennessee, to Springfield, Nixa, Ozark, Republic, Battlefield and the rest of the country. You can order as a guest, shipping is {shipping} per order, and {freeBottles} bottles or more ship at no charge. Tracking comes by email, though no specific delivery day is promised. Local notes are on the [Springfield, Missouri page](/eye-drops/springfield-mo) and the [Missouri page](/eye-drops/state/missouri).`,
      },
      { h: 'When drops aren’t the answer' },
      {
        p: `Eye drops can ease ordinary dryness, but they can’t explain symptoms. The label says: {stopUse} Anything sudden, painful or one-sided, or any change in how well you see, is a reason to call an eye doctor in town rather than wait. Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) page lists the common warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How hot does it get in Springfield, Missouri?',
        a: `NOAA’s 1991 to 2020 normals give Springfield’s airport a July high of 89.6°F and close to 40 days a year at 90°F or warmer.`,
      },
      {
        q: 'Does Springfield, Missouri get much snow?',
        a: `Not much by Midwest standards. NOAA’s normals put the yearly total at about 13.7 inches, with January the snowiest month at 4.4 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in an air-conditioned car?',
        a: `Air conditioning removes moisture as it cools, and dashboard vents often blow that dry air straight at the face. Pointing the vents toward your chest or the window reduces how fast the tear film evaporates.`,
      },
      {
        q: 'Can I order Quell to Springfield, Missouri?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to every US state, Springfield and the Ozarks included. There’s guest checkout and an emailed tracking link, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-lincoln-ne:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014939.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014939.csv
   *   (LINCOLN MUNI AP, NE, elev 362.7 m: annual precip 29.34 in; Jan 0.73, Feb
   *   0.89, Dec 1.18, May 4.91, Jun 4.48; annual snow 26.0 in, Feb 7.1, Jan 6.5,
   *   Dec 5.3; Jul high 89.4 F; Jan high 35.6 F, low 14.4 F; 41.8 days at or above
   *   90 F; 142.8 nights at or below 32 F; 36.8 days with a high at or below 32 F;
   *   10.1 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LINCOLN, NE, WBAN 14939: Apr 79/52, Oct 81/52, Sep 85/53, Jan 79/65,
   *   Dec 80/64, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LINCOLN, NE annual 4.4; Apr 5.4 windiest, Aug 3.8 calmest; Omaha 4.5,
   *   Grand Island 5.0, Norfolk 4.7)
   * Elevation is the NOAA station elevation, converted (362.7 m is about 1,190 ft).
   */
  {
    slug: 'dry-eye-relief-lincoln-ne',
    title: 'Dry eye relief in Lincoln, Nebraska',
    description:
      'Lincoln’s January brings only 0.73 inches of precipitation, and April and October afternoons fall to 52 percent humidity. NOAA data and dry eye tips.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Lincoln, Nebraska, starts with knowing the dry spells. NOAA’s normals give the city about 29 inches of precipitation a year, under an inch in each of January and February, and April and October afternoons near 52 percent humidity. Add plains wind and roughly 143 freezing nights of furnace heat. Shield your eyes, blink fully, follow a drop’s label, and see an eye doctor for pain.`,
      },
      { h: 'Lincoln’s climate from the airport record' },
      {
        p: `Lincoln’s official weather comes from Lincoln Municipal Airport, northwest of downtown, at about 1,190 feet. Here is what its 1991 to 2020 normals say about a typical year:`,
      },
      {
        list: [
          `29.34 inches of precipitation in total, much of it from May (4.91 inches) through August.`,
          `Very little in midwinter: 0.73 inches in January, 0.89 in February and 1.18 in December.`,
          `About 26 inches of snow, with February the snowiest month at 7.1 inches.`,
          `Roughly 42 days a year at 90°F or above, and a July high of 89.4°F.`,
          `About 143 nights at or below freezing, roughly 37 days that never climb above it, and around 10 nights that reach zero.`,
        ],
      },
      {
        p: `Those last numbers are the ones your eyes feel. A January low of 14.4°F means heating systems in Lincoln run hard for months, and cold air that gets warmed indoors loses most of its relative humidity on the way.`,
      },
      { h: 'Plains wind and April afternoons' },
      {
        p: `Lincoln sits on open prairie, and NOAA’s wind table shows it. April is the windiest month, August the calmest, and the yearly average is close to Omaha’s. April is also when afternoon humidity bottoms out at 52 percent. A walk around Holmes Lake or a ride on the MoPac Trail on a bright April afternoon combines both, and the tear film loses water faster in moving, dry air.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or a brimmed hat when the forecast calls for gusts.`,
          `Ride or run in the morning in spring, when humidity is far higher.`,
          `On windy days, keep the car window up and the vents low.`,
          `Turn away from a gust and close your eyes briefly instead of squinting into it.`,
        ],
      },
      { h: 'Fall Saturdays at Memorial Stadium' },
      {
        p: `October matches April for Lincoln’s lowest afternoon humidity, and NOAA’s September figure is barely higher at 53 percent. That puts football season right in a dry stretch. Hours in the stands with wind across the bowl, sun glare off the bleachers, and eyes fixed on the field all add up. Tailgate grills and smoke don’t help either.`,
      },
      {
        p: `Before a game day, pack sunglasses and the eye drop bottle in a jacket pocket where it stays at a steady temperature. Look away from the field and blink slowly during timeouts. Our guide to [dry eyes at an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) covers the cold late-season games.`,
      },
      { h: 'How to keep eyes moist in a Lincoln winter' },
      {
        p: `Indoor dryness is the main problem from November to March. Between the State Capitol, university offices and the state agencies downtown, many people spend the cold months at a desk in heated air.`,
      },
      {
        list: [
          `Run a cool-mist humidifier in the bedroom and clean it on the schedule the maker gives.`,
          `Lower the thermostat at night; warmer air dries the eyes faster.`,
          `Keep a space heater pointed at your legs, not your face.`,
          `Stand up from the screen every 20 to 30 minutes and look out a window to reset your blink.`,
          `Wear glasses rather than nothing on a windy walk between buildings.`,
        ],
      },
      {
        p: `There’s more about home heat in our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section says: {uses}. The directions are: {directions}. One more instruction from the panel: {tip}.`,
      },
      {
        p: `On storage the label says: {storage}. With about 10 nights a year at zero or below, a bottle left in a parked car can easily get colder than that, so bring it inside. Before first use, also read this warning: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Lincoln' },
      {
        p: `We ship from Brentwood, Tennessee, to Lincoln, Waverly, Hickman and all of Lancaster County, along with the rest of the US. Guest checkout means no account is needed. Shipping is {shipping}, with free shipping on {freeBottles} or more bottles. An emailed tracking link follows shipment; no exact delivery date is promised. See the [Lincoln page](/eye-drops/lincoln-ne) or the [Nebraska page](/eye-drops/state/nebraska) for local information.`,
      },
      { h: 'Knowing when to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable despite good habits, the label sets the line: {stopUse} An optometrist or ophthalmologist can examine what a drop can’t. Before the appointment, our [self-check](/self-check) can help you describe your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why is the air so dry in Lincoln, Nebraska in winter?',
        a: `January brings only 0.73 inches of precipitation at Lincoln’s airport in NOAA’s normals, and lows near 14°F mean heaters run constantly. Warming that cold air indoors drops its relative humidity sharply.`,
      },
      {
        q: 'What is the windiest month in Lincoln, Nebraska?',
        a: `April, according to NOAA’s average wind speed table for the Lincoln airport. August is usually the calmest month.`,
      },
      {
        q: 'How many days a year are over 90 degrees in Lincoln?',
        a: `About 42 days a year reach 90°F or more at Lincoln Municipal Airport, based on NOAA’s 1991 to 2020 climate normals.`,
      },
      {
        q: 'Can Quell be delivered to Lincoln, Nebraska?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to addresses across Nebraska, including Lincoln. Order as a guest; shipping is {shipping}, or free on {freeBottles} or more bottles.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-topeka-ks:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013996.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013996.csv
   *   (TOPEKA MUNI AP, KS, elev 267.0 m, lat 39.0725 lon -95.6261: annual precip
   *   36.53 in; Jan 0.89, Feb 1.31, May 5.17, Jun 4.92, Aug 4.55; annual snow
   *   17.1 in, Feb 5.2, Jan 4.6, Dec 4.1; Jul high 90.2 F, Aug 88.9 F; Jan high
   *   40.4 F, low 20.0 F; 49.6 days at or above 90 F; 113.9 nights at or below
   *   32 F; 21.8 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (TOPEKA, KS, WBAN 13996: Apr 80/53, Oct 83/53, Sep 88/55, Jul 86/58,
   *   Feb 78/60, Dec 80/63, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (TOPEKA annual 3.6, lowest of the Kansas rows: Wichita 5.1, Dodge City 5.8,
   *   Goodland 5.4, Concordia 4.9; Apr 4.4 windiest, Aug 2.8 calmest)
   * Elevation is the NOAA station elevation, converted (267.0 m is about 875 ft).
   */
  {
    slug: 'dry-eye-relief-topeka-ks',
    title: 'Dry eye relief in Topeka, Kansas',
    description:
      'Topeka averages about 50 days a year at 90°F and the calmest wind of any Kansas station NOAA lists. What that means for dry eyes, with simple steps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Topeka, dry eyes are mostly a summer air-conditioning problem and a winter heating one. NOAA’s normals count about 50 days a year at 90°F or hotter, and around 114 nights at freezing or below. Topeka is less windy than western Kansas, but April and October afternoons still dip to 53 percent humidity. Point vents away, take screen breaks, use drops as labeled, and see an eye doctor for pain.`,
      },
      { h: 'Topeka’s weather station and its numbers' },
      {
        p: `NOAA’s Topeka normals come from the municipal airport, Philip Billard, which sits just north of the Kansas River, northeast of downtown, at about 875 feet. A few figures from the 1991 to 2020 record stand out:`,
      },
      {
        list: [
          `About 49.6 days a year at 90°F or above, with a normal July high of 90.2°F.`,
          `36.53 inches of precipitation, with May (5.17 inches) the wettest month and January (0.89) the driest.`,
          `Roughly 17 inches of snow, February the snowiest at 5.2.`,
          `Around 114 nights at or below freezing and about 22 days when the high stays there.`,
        ],
      },
      { h: 'Calmer than the rest of Kansas' },
      {
        p: `Kansas has a windy reputation, and NOAA’s wind table backs it up for Dodge City, Goodland and Wichita. Topeka is the exception: its yearly average is the lowest of the Kansas stations listed, well below Wichita’s and Dodge City’s. The trees and river bottoms of northeast Kansas break the wind in a way the open High Plains can’t.`,
      },
      {
        p: `That doesn’t mean still air. April is Topeka’s windiest month, and its afternoons drop to 53 percent humidity. A spring walk on the Shunga Trail or a round of disc golf at Lake Shawnee will still dry the eyes faster than a still day. Sunglasses that wrap around the sides cut both breeze and glare.`,
      },
      { h: 'Summer: almost 50 days of 90-degree heat' },
      {
        p: `That near-50-day count is what drives Topeka’s eye dryness from June to September. Every building, car and home runs its air conditioner, and AC dries air as it chills it. July mornings average 86 percent humidity outdoors, but the air pouring from a dashboard vent is a different thing entirely.`,
      },
      {
        list: [
          `Aim the car’s vents at your chest or the side windows, not your eyes.`,
          `At work, move your chair out of the direct path of a ceiling diffuser.`,
          `Turn a box fan so it moves air around the room rather than across your face while you sleep.`,
          `On the hottest days, keep the eye drop bottle out of the car entirely; it shouldn’t ride in a closed vehicle in the sun.`,
        ],
      },
      { h: 'October dryness and harvest dust' },
      {
        p: `NOAA’s humidity table puts October afternoons at 53 percent, the same as April. Fall in Shawnee County also brings harvest dust from soybean and corn fields, falling leaves to rake, and the first cold fronts. A dusty drive on a gravel county road can leave grit on the lids; rinse your face with clean water before touching your eyes, and close the car’s outside-air intake when you’re behind a truck.`,
      },
      { h: 'Statehouse, offices and dry eyes from screen time' },
      {
        p: `As the capital, Topeka has a large share of state workers, plus hospital staff and university staff at Washburn, many of them at monitors for most of the day. Screen focus lowers the blink rate, and partial blinks leave part of the eye’s surface uncovered. In winter, heated office air compounds it: January lows average 20°F at the airport, so heating systems run steadily.`,
      },
      {
        list: [
          `Use the 20-20-20 habit: every 20 minutes, look about 20 feet away for 20 seconds.`,
          `Put a sticky note on the monitor that just says “blink.”`,
          `Drop the monitor height a little so you aren’t looking up into it.`,
        ],
      },
      {
        p: `For more on desk work, see [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office).`,
      },
      { h: 'Quell’s label, section by section' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. It gives these directions: {directions}. Its When using section says: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A July afternoon in a parked car in Topeka can easily exceed that, so keep the bottle with you. The panel’s warning says: {warnings}. Every line of the label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Shipping Quell to Topeka' },
      {
        p: `Quell is shipped from Brentwood, Tennessee, to Topeka, Auburn, Silver Lake, Tecumseh and anywhere in the US. Checkout is guest-only, so there’s no password to remember. Shipping runs {shipping}; orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but we don’t promise a delivery date, so reorder with time to spare. More local details are on the [Topeka page](/eye-drops/topeka-ks) and the [Kansas page](/eye-drops/state/kansas).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `A lubricating drop is meant for everyday dryness. The label is clear about its limits: {stopUse} Eye pain, sudden blur, or a sore or swollen lid should be seen by a professional. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'Is Topeka windy compared with the rest of Kansas?',
        a: `No. In NOAA’s average wind speed table, Topeka has the lowest yearly average of the Kansas stations listed, well below Wichita and Dodge City. April is its windiest month.`,
      },
      {
        q: 'How many 90 degree days does Topeka get?',
        a: `About 50. NOAA’s 1991 to 2020 normals count 49.6 days a year at 90°F or above at Topeka’s municipal airport.`,
      },
      {
        q: 'When is Topeka the least humid?',
        a: `April and October afternoons are lowest in NOAA’s relative humidity table, both at about 53 percent. Mornings in those months are much damper, near 80 percent or more.`,
      },
      {
        q: 'Does Quell ship to Topeka, Kansas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Topeka and every other US address. You check out as a guest and get tracking by email, and {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-hartford-ct:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014740.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014740.csv
   *   (HARTFORD BRADLEY INTL AP, CT, elev 57.9 m, Windsor Locks: annual precip
   *   47.05 in; every month 3.13 (Feb) to 4.52 (Oct); annual snow 51.7 in, Feb
   *   14.8, Jan 14.2, Dec 10.1, Mar 9.4; Jul high 85.2 F; Jan high 35.3 F, low
   *   18.8 F; 19.6 days at or above 90 F; 125.8 nights at or below 32 F; 28.4 days
   *   with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (HARTFORD, CT, WBAN 14740: Apr 69/45, May 73/48, Mar 71/50, Jan 73/57,
   *   Dec 77/59, annual 76/53, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (HARTFORD, CT annual 3.5; Mar 4.2 windiest, Aug 2.8 calmest; Bridgeport 4.2)
   * Elevation is the NOAA station elevation, converted (57.9 m is about 190 ft).
   */
  {
    slug: 'dry-eye-relief-hartford-ct',
    title: 'Dry eye relief in Hartford, Connecticut',
    description:
      'Hartford’s April afternoons average just 45 percent humidity, and winters bring about 52 inches of snow. NOAA’s Bradley Airport data and dry eye steps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `For dry eye relief in Hartford, watch April as closely as January. NOAA’s records at Bradley International Airport put April afternoons at 45 percent humidity, the region’s driest time of year, while about 126 freezing nights keep furnaces running from fall into spring. Block drafts and wind, blink fully at screens, use a lubricating drop exactly as labeled, and take pain or vision changes to an eye doctor.`,
      },
      { h: 'Where Hartford’s weather is measured' },
      {
        p: `Hartford’s official climate record doesn’t come from the city itself. NOAA’s station is at Bradley International Airport in Windsor Locks, about a dozen miles north along the Connecticut River valley, at roughly 190 feet. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `47.05 inches of precipitation a year, spread unusually evenly. No month averages less than about 3.1 inches.`,
          `About 51.7 inches of snow, led by February (14.8 inches) and January (14.2).`,
          `A July high of 85.2°F and around 20 days a year at 90°F or above.`,
          `Roughly 126 nights at or below freezing, and about 28 days when the high never gets past 32°F.`,
        ],
      },
      {
        p: `Because the rain and snow are so even, Hartford’s dry spells don’t show up in the precipitation totals. They show up in the humidity.`,
      },
      { h: 'April: the valley’s driest air' },
      {
        p: `Bradley’s April afternoons average 45 percent relative humidity in NOAA’s table, against 69 percent in the morning. May (48) and March (50) aren’t far behind. Spring sun warms the valley floor in the afternoon and the relative humidity drops with it. That’s when yard work in West Hartford, a walk through Elizabeth Park’s gardens, or a run along the Riverfront trails can leave eyes gritty, especially with pollen and dust in the air.`,
      },
      {
        list: [
          `Schedule outdoor chores and runs for mornings in spring.`,
          `Wear sunglasses with side coverage on bright days; they block air movement as well as light.`,
          `Rinse your face and lids with clean water after raking or mulching.`,
          `Keep car windows up on I-91 and I-84 and set the air to recirculate when traffic is heavy.`,
        ],
      },
      { h: 'Snow, cold and the heating season' },
      {
        p: `A Hartford winter means January lows of 18.8°F and more than four feet of snow in a normal year. The air outdoors stays fairly moist (57 percent on January afternoons), but heating it to room temperature drops its relative humidity steeply. Older apartments with steam radiators can run especially warm and dry, and many people just open a window to cool off, which lets in more cold air to be heated.`,
      },
      {
        list: [
          `A bedroom humidifier helps most at night, when you aren’t blinking at all.`,
          `If a radiator overheats a room, bleed or adjust it rather than sitting beside it.`,
          `Shoveling into a stiff wind is hard on the eyes; goggles or wraparound glasses help.`,
          `Point the car heater at your feet on the drive in.`,
        ],
      },
      {
        p: `Our guide to [dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) covers the storm side of a Hartford winter.`,
      },
      { h: 'Insurance towers and dry eyes from screen time' },
      {
        p: `Hartford’s downtown runs on office work: insurance, finance, state government at the Capitol and the Legislative Office Building, and the hospitals. Long spreadsheet and claims sessions mean long stretches of steady focus, which slows blinking. Many large office buildings also run forced-air heating and cooling year-round, with ceiling vents that can blow onto a desk.`,
      },
      {
        list: [
          `Every 20 minutes, look away from the screen and blink slowly a few times.`,
          `Set the top of the monitor at or slightly below eye level.`,
          `Ask building services to adjust or deflect a vent above your desk.`,
          `Keep a pair of glasses at work; they reduce air movement across the eye.`,
        ],
      },
      {
        p: `See [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) for more workplace ideas.`,
      },
      { h: 'Quell’s Drug Facts, word for word' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Directions on the panel: {directions}. And a hygiene note: {tip}.`,
      },
      {
        p: `Storage, as printed: {storage}. On a single-digit January morning in a commuter lot, a car gets colder than that, so carry the bottle inside with you. The label also says: {warnings}. The [Drug Facts page](/drug-facts) has the entire panel.`,
      },
      { h: 'Ordering Quell in the Hartford area' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Hartford, West Hartford, Wethersfield, Windsor and the rest of the country. Guest checkout keeps it quick. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; we don’t promise a specific delivery date. For local details, see the [Hartford page](/eye-drops/hartford-ct) and the [Connecticut page](/eye-drops/state/connecticut).`,
      },
      { h: 'When to see a Hartford eye doctor' },
      {
        p: `If your eyes don’t settle down, don’t keep adding drops. The label’s rule: {stopUse} Severe pain, sudden blur, or symptoms after something hit the eye need prompt care. The [self-check](/self-check) can help you put symptoms into words before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Where is Hartford’s official weather station?',
        a: `NOAA’s climate normals for Hartford come from Bradley International Airport in Windsor Locks, about a dozen miles north of downtown in the Connecticut River valley.`,
      },
      {
        q: 'What is the least humid month in Hartford?',
        a: `April. NOAA’s relative humidity table for Bradley Airport lists April afternoons at about 45 percent, the lowest of the year, with May close behind at 48.`,
      },
      {
        q: 'How much snow does Hartford, CT get?',
        a: `About 51.7 inches in a normal year at Bradley International Airport, according to NOAA’s 1991 to 2020 normals. February is usually the snowiest month.`,
      },
      {
        q: 'Can I order Quell to Hartford, Connecticut?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Hartford and its suburbs. Check out as a guest; shipping is {shipping}, or free on {freeBottles} or more bottles.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-providence-ri:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014765.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014765.csv
   *   (PROVIDENCE T F GREEN AP, RI, elev 18.3 m, Warwick: annual precip 47.54 in;
   *   Mar 4.90, Dec 4.65, Jul 2.91; annual snow 36.6 in, Feb 10.5, Jan 10.3, Dec
   *   7.6; Jul high 83.6 F; Jan high 38.3 F, low 22.1 F; 11.9 days at or above
   *   90 F; 109.0 nights at or below 32 F; 20.1 days with a high at or below
   *   32 F; 0.8 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (PROVIDENCE, RI, WBAN 14765: Apr 69/49, Mar 70/52, Feb 71/54, Jan 71/57,
   *   Sep 82/57, annual 75/55, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (PROVIDENCE annual 4.1; Mar 4.8 windiest, Aug and Sep 3.6 calmest;
   *   Boston 5.1, Hartford 3.5)
   * Elevation is the NOAA station elevation, converted (18.3 m is about 60 ft).
   */
  {
    slug: 'dry-eye-relief-providence-ri',
    title: 'Dry eye relief in Providence, Rhode Island',
    description:
      'Providence gets bay breezes, a windy March and April afternoons near 49 percent humidity. NOAA’s T. F. Green data and practical steps for dry eyes.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Providence means handling wind off Narragansett Bay and dry heated air indoors. NOAA’s records at T. F. Green Airport show March as the windiest month and April afternoons averaging 49 percent humidity, the year’s low. Wear wraparound glasses outside, keep radiators and vents off your face, blink fully at screens, use drops as labeled, and see an eye doctor for pain or blurred vision.`,
      },
      { h: 'Providence weather from T. F. Green Airport' },
      {
        p: `NOAA’s Providence station is at Rhode Island T. F. Green International Airport in Warwick, about seven miles south of downtown and close to the upper bay, at about 60 feet. Its 1991 to 2020 normals reflect a coastal climate:`,
      },
      {
        list: [
          `47.54 inches of precipitation a year. March is wettest at 4.90 inches and July driest at 2.91.`,
          `About 36.6 inches of snow, with February (10.5 inches) and January (10.3) the snowiest months.`,
          `A July high of 83.6°F and only about 12 days a year at 90°F or above.`,
          `About 109 nights at or below freezing, but less than one night a year reaching zero.`,
        ],
      },
      {
        p: `The bay keeps winters milder than inland New England. Its January low of 22.1°F is about three degrees warmer than NOAA’s figure for Hartford’s Bradley Airport, inland in the Connecticut River valley.`,
      },
      { h: 'Wind off Narragansett Bay' },
      {
        p: `In NOAA’s wind table, Providence is breezier on average than Hartford but calmer than Boston’s harbor station. March is the windiest month, and the late-summer months of August and September are the calmest. Anyone who has crossed the Point Street Bridge or walked India Point Park on a raw March afternoon knows how sharp that air can feel. Moving air pulls water out of the tear film faster, and cold wind often makes the eyes water and then sting.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or clear safety glasses near the water when it’s gusty.`,
          `On the East Bay Bike Path, ride with the wind at your back on the way out when you can.`,
          `A scarf or high collar keeps cold air from funneling up toward the eyes.`,
          `Pause in a sheltered doorway and blink slowly if your eyes start to burn.`,
        ],
      },
      { h: 'Spring dryness, March through May' },
      {
        p: `April afternoons average 49 percent relative humidity at the airport, and March (52) and February (54) aren’t much higher. The wettest month by precipitation is also March, which sounds like a contradiction until you remember that a rainy day and a dry, sunny one alternate quickly in a coastal spring. On the sunny ones, the afternoon air dries out, and that’s when eyes notice it.`,
      },
      { h: 'Radiators, triple-deckers and indoor heat' },
      {
        p: `Much of Providence’s housing stock is older: triple-deckers in Federal Hill and the West End, Victorians on the East Side, and dorms on College Hill. Many still have steam or hot-water radiators, which can push a room well past comfortable while the outdoor air sits near freezing. Heat drops the relative humidity of that air, and your eyes sit in it for hours.`,
      },
      {
        list: [
          `Turn radiator valves down instead of opening a window to cool off.`,
          `Run a humidifier in the bedroom; empty and dry it regularly.`,
          `Move a reading chair or desk away from a radiator.`,
          `At night, keep a fan or heater from aiming at the bed.`,
        ],
      },
      {
        p: `Students at Brown, RISD, Providence College and Johnson & Wales spending finals week in heated libraries get a double dose. Our guide to [dry eyes in a dorm room in winter](/guides/dry-eyes-in-a-dorm-room-in-winter) has more.`,
      },
      { h: 'Smoke, screens and late nights' },
      {
        p: `Summer and fall WaterFire nights downtown put wood smoke over the rivers, and smoke irritates the eye’s surface. Standing upwind helps. Hospital shifts, design studios and office work bring the other big factor, long hours of screen focus with fewer blinks. A short break every 20 minutes, with a look out a window and a few full blinks, resets the tear film. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Under Uses, the label says: {uses}. Directions: {directions}. And to keep the bottle clean: {tip}.`,
      },
      {
        p: `The storage line: {storage}. That’s easy to keep indoors in Rhode Island, but a car at the beach in July or in a frozen lot in February can move out of range, so carry it with you. The label also states: {warnings}. Read the entire panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Rhode Island' },
      {
        p: `We ship from Brentwood, Tennessee, to Providence, Cranston, Pawtucket, East Providence, Warwick and everywhere else in the US. No account is needed; checkout works as a guest. Shipping is {shipping}, and {freeBottles} or more bottles ship free. An email with tracking follows, but delivery dates aren’t promised. Local notes are on the [Providence page](/eye-drops/providence-ri) and the [Rhode Island page](/eye-drops/state/rhode-island).`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `If dryness comes with pain, blurred vision that doesn’t clear, or one eye much worse than the other, a drop isn’t the next step. The label says: {stopUse} Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) guide covers what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Where is the official weather station for Providence?',
        a: `NOAA’s climate normals for Providence are recorded at Rhode Island T. F. Green International Airport in Warwick, about seven miles south of downtown near the upper bay.`,
      },
      {
        q: 'What is the windiest month in Providence, RI?',
        a: `March. NOAA’s average wind speed table lists March as Providence’s windiest month, with August and September the calmest.`,
      },
      {
        q: 'Does Providence get a lot of snow?',
        a: `NOAA’s 1991 to 2020 normals put the airport at about 36.6 inches a year, with February and January each averaging a little over 10 inches.`,
      },
      {
        q: 'Does Quell ship to Providence, Rhode Island?',
        a: `Yes. Orders go from Brentwood, Tennessee, to Providence and all of Rhode Island, with guest checkout and tracking sent by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-albany-ny:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014735.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014735.csv
   *   (ALBANY AP, NY, elev 95.1 m, lat 42.7431 lon -73.8092 (Colonie): annual
   *   precip 40.68 in; Jul 4.55, Feb 2.28; annual snow 59.2 in, Jan 15.6, Feb
   *   13.7, Dec 13.3, Mar 12.0; Jul high 83.9 F; Jan high 32.8 F, low 15.9 F;
   *   9.6 days at or above 90 F; 135.7 nights at or below 32 F; 41.1 days with a
   *   high at or below 32 F; 6.8 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ALBANY, NY, WBAN 14735: Apr 71/48, May 73/51, Mar 75/54, Jan 77/63,
   *   Dec 79/65, Sep 87/57, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ALBANY annual 3.5; Mar 4.3 windiest, Aug 2.7 calmest; Buffalo 4.6,
   *   Binghamton 3.9, Syracuse 3.7)
   * Elevation is the NOAA station elevation, converted (95.1 m is about 310 ft).
   */
  {
    slug: 'dry-eye-relief-albany-ny',
    title: 'Dry eye relief in Albany, New York',
    description:
      'Albany averages about 59 inches of snow and 41 days that stay below freezing, then April afternoons near 48 percent humidity. NOAA data and dry eye steps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Albany’s dry-eye season is long. NOAA’s normals list about 41 days a year that never rise above freezing and roughly 136 freezing nights, so heating systems run from fall well into spring, and then April afternoons dry out to about 48 percent humidity. Humidify the bedroom, keep heat off your face, blink fully at screens, follow a drop’s label, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Albany’s climate at a glance' },
      {
        p: `The Capital Region’s official station is at Albany International Airport in Colonie, northwest of the city, at about 310 feet above the Hudson. NOAA’s 1991 to 2020 normals there:`,
      },
      {
        list: [
          `Around 59.2 inches of snow a year: 15.6 in January, 13.7 in February, 13.3 in December and 12.0 in March.`,
          `40.68 inches of total precipitation, July the wettest month at 4.55 and February the driest at 2.28.`,
          `A January high of 32.8°F and low of 15.9°F, with almost 7 nights a year reaching zero.`,
          `Under 10 days a year at 90°F or above, and a July high of 83.9°F.`,
        ],
      },
      { h: 'Five months of furnace air' },
      {
        p: `When the high stays at or below freezing about 41 days a year and the low drops under 32°F about 136 nights, the heat in Albany’s homes and offices is on most of the time from late fall to spring. Outdoor air in December and January is fairly humid (65 and 63 percent in the afternoon). Once that cold air is warmed indoors, though, its relative humidity falls sharply, and the eye’s surface loses water faster between blinks.`,
      },
      {
        list: [
          `Keep a humidifier in the room where you sleep, and wash it out often.`,
          `Turn the thermostat down at night and add a blanket instead.`,
          `Keep baseboard heaters and vents from pointing at a desk or the bed.`,
          `Put a pair of glasses on for the walk to the car on windy, snowy mornings.`,
        ],
      },
      {
        p: `Our guide to [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) goes deeper on the bedroom side.`,
      },
      { h: 'Session days at the Capitol and dry eyes from staring at a screen' },
      {
        p: `New York’s legislative session begins in January, the coldest month in NOAA’s table, and it brings long days at the Capitol, the Legislative Office Building and state agencies around Empire State Plaza. Many people walk the Plaza’s underground concourse between buildings to avoid the cold, which means most of the workday is spent in heated indoor air. Add hours of documents and email on a monitor, and blinking slows.`,
      },
      {
        list: [
          `Every 20 minutes, look across the room or out a window for a few seconds.`,
          `Make each blink a full one; half-blinks leave the lower part of the eye uncovered.`,
          `Lower the screen so your gaze tilts slightly down.`,
          `Step outside for even a few minutes at midday.`,
        ],
      },
      {
        p: `The universities and hospitals across the Capital Region follow a similar pattern, with long screen days in heated buildings. For a fuller desk routine, see [eye drops for computer users](/guides/eye-drops-for-computer-users).`,
      },
      { h: 'Spring wind and April’s low humidity' },
      {
        p: `NOAA’s wind table lists March as Albany’s windiest month and August as its calmest. April afternoons average 48 percent humidity, the lowest of the year, and May (51) and March (54) follow. As the snow melts and the sand and salt on the roads dry out, wind carries fine grit across parking lots and sidewalks. Wraparound sunglasses on a bright, breezy day at the Corning Preserve or in Washington Park block both the dust and the air movement.`,
      },
      { h: 'Summer at the track and the lakes' },
      {
        p: `Albany summers are mild by NOAA’s numbers, with fewer than 10 days a year at 90°F. Even so, a day at the Saratoga race meet, on Lake George or along the Mohawk-Hudson Bike-Hike Trail means sun glare and moving air. Air-conditioned cars and offices dry the air too. A brimmed hat and sunglasses cut glare, and pointing the car vents toward your chest helps on the drive up the Northway.`,
      },
      { h: 'Quell’s label, as printed' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. On its Drug Facts panel, the Uses are: {uses}. The directions say: {directions}. Also on the panel: {tip}.`,
      },
      {
        p: `Storage reads: {storage}. Nearly seven nights a year at zero or below means a bottle left in a car in Colonie or Clifton Park can get far too cold, so bring it inside. The label warns: {warnings}. Our [Drug Facts page](/drug-facts) shows the whole label.`,
      },
      { h: 'Ordering Quell in the Capital Region' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Albany, Troy, Schenectady, Colonie, Delmar and every other US address. There’s no account to create. Shipping is {shipping}, or free when you order {freeBottles} or more bottles. Tracking arrives by email after shipment, but no delivery date is promised, so give yourself a cushion before a storm. See the [Albany page](/eye-drops/albany-ny) and the [New York page](/eye-drops/state/new-york) for local details.`,
      },
      { h: 'When dryness needs an eye exam' },
      {
        p: `Drops help with everyday dryness, not with symptoms that point to something else. Quell’s label states: {stopUse} If you have pain, vision changes, or dryness that keeps returning despite good habits, see an optometrist or ophthalmologist. Our [self-check](/self-check) can help you note symptoms first; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Albany, NY get a year?',
        a: `About 59.2 inches at Albany International Airport, according to NOAA’s 1991 to 2020 normals. January is the snowiest month at 15.6 inches.`,
      },
      {
        q: 'Why are my eyes so dry in Albany in the winter?',
        a: `Albany’s heat runs most of the time from late fall into spring, with about 136 nights a year at or below freezing. Warming cold outdoor air indoors lowers its relative humidity a great deal, so the tear film evaporates faster.`,
      },
      {
        q: 'What is the driest month in Albany?',
        a: `By precipitation, February is driest at 2.28 inches. By afternoon humidity, April is lowest at about 48 percent in NOAA’s relative humidity table.`,
      },
      {
        q: 'Can I get Quell delivered in Albany, New York?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Albany and anywhere else in the US, with guest checkout and an emailed tracking link. Orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-concord-nh:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014745.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014745.csv
   *   (CONCORD MUNI AP, NH, elev 105.5 m, lat 43.1953 lon -71.5011: annual precip
   *   41.95 in; Oct 4.43, Feb 2.75; annual snow 67.7 in, Jan 17.1, Feb 16.9, Dec
   *   14.3, Mar 13.6, Apr 2.5, Nov 2.5; Jul high 83.0 F; Jan high 31.6 F, low
   *   12.9 F; 13.7 days at or above 90 F; 164.8 nights at or below 32 F; 43.5
   *   days with a high at or below 32 F; 12.8 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (CONCORD, NH, WBAN 14745: Apr 73/45, May 74/47, Sep 88/54, Aug 85/52,
   *   Jan 76/58, Dec 80/61, annual 80/53, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (CONCORD, NH annual 2.7; Mar 3.4 windiest, Aug and Sep 2.1 calmest;
   *   Boston 5.1)
   * Elevation is the NOAA station elevation, converted (105.5 m is about 345 ft).
   */
  {
    slug: 'dry-eye-relief-concord-nh',
    title: 'Dry eye relief in Concord, New Hampshire',
    description:
      'Concord has about 165 freezing nights a year and April afternoons near 45 percent humidity. What NOAA’s records mean for dry eyes in the capital.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Concord, New Hampshire, dry eyes follow the heating season, and it’s a long one: NOAA counts about 165 nights a year at or below freezing at the city’s airport, with nearly 13 reaching zero. Then April afternoons fall to 45 percent humidity. Humidify where you sleep, keep stove and vent heat off your face, blink fully, use drops as labeled, and see an eye doctor for pain.`,
      },
      { h: 'Concord’s weather record' },
      {
        p: `NOAA’s Concord station is at Concord Municipal Airport, on the east side of the Merrimack River from downtown, at about 345 feet. Its 1991 to 2020 normals describe a long, snowy cold season:`,
      },
      {
        list: [
          `About 67.7 inches of snow in a normal year: 17.1 in January, 16.9 in February, 14.3 in December and 13.6 in March, with a few inches each in November and April.`,
          `A January high of 31.6°F and a low of 12.9°F.`,
          `About 165 nights at or below freezing, close to 44 days that stay at or below 32°F, and almost 13 nights at zero or colder.`,
          `41.95 inches of precipitation a year, with October the wettest month at 4.43 inches.`,
          `About 14 days a year at 90°F or above and a July high of 83.0°F.`,
        ],
      },
      { h: 'A calm valley with a long winter' },
      {
        p: `One number sets Concord apart. In NOAA’s wind table, its yearly average is just over half of Boston’s, and August and September are its stillest months. The Merrimack valley shelters the city, so wind isn’t the main thing drying your eyes here. Cold is. With the high at or below freezing on roughly 44 days and a long freeze season on either side, homes and offices are heated from fall to late spring.`,
      },
      {
        p: `Heated air is the problem. On a January afternoon outdoors the humidity averages 58 percent, but bring that 13-degree night air inside and warm it to the 60s or 70s and its relative humidity falls to a fraction of that.`,
      },
      { h: 'Wood stoves, pellet stoves and dry eyes at night' },
      {
        p: `Plenty of homes around Concord, Bow, Hopkinton and Loudon heat with a wood or pellet stove, at least part of the time. A stove puts out strong radiant heat, and the air near it gets very dry. Smoke from loading or a downdraft can sting too. Since your eyes are closed but still losing moisture while you sleep, the bedroom matters most.`,
      },
      {
        list: [
          `Don’t set a reading chair right beside the stove; move a few feet back.`,
          `Run a humidifier in the bedroom, and clean it often.`,
          `Open the stove door slowly so smoke doesn’t puff into your face.`,
          `Keep bedroom doors closed if the stove room runs much hotter than the rest of the house.`,
        ],
      },
      {
        p: `Our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) has more on indoor smoke and heat.`,
      },
      { h: 'Mud season brings the driest afternoons' },
      {
        p: `April is the least humid month in NOAA’s table, at 45 percent in the afternoon, with May close behind at 47. That’s the stretch when snow is melting, sand from the winter roads dries and blows, and the first warm days pull people outdoors. A walk at White Park or along the river trails on a sunny April afternoon can leave your eyes gritty even without much wind.`,
      },
      {
        list: [
          `Wear sunglasses on bright spring days to cut glare from the last of the snow.`,
          `Rinse your face and closed lids with clean water after yard cleanup.`,
          `Schedule long walks and runs for mornings, when humidity is much higher.`,
        ],
      },
      { h: 'State House days and screen time' },
      {
        p: `Concord is a capital city, and a lot of its work happens at a desk: the State House, state agencies, courts and the hospital. Steady concentration on a screen slows blinking. When you add heated winter air, the tear film thins quickly between blinks. Look away every 20 minutes, blink completely a few times, and keep a desk heater aimed at your feet. [Dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) has more on why eyes feel worse by evening.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts give the Uses as: {uses}. The directions are: {directions}. The When using section adds: {tip}.`,
      },
      {
        p: `The storage line says: {storage}. With almost 13 nights a year at or below zero, a bottle left in a truck or a cold mudroom can freeze, so keep it in the heated part of the house. The panel also warns: {warnings}. All of it is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Concord' },
      {
        p: `We ship from Brentwood, Tennessee, to Concord, Bow, Pembroke, Penacook and the rest of the US. Guest checkout means no account. Shipping is {shipping}; orders of {freeBottles} or more bottles ship free. Tracking comes by email, but there’s no promised delivery date, so order ahead of a snowstorm. See the [Concord page](/eye-drops/concord-nh) and the [New Hampshire page](/eye-drops/state/new-hampshire) for local details.`,
      },
      { h: 'When to see an eye doctor in Concord' },
      {
        p: `Drops are for everyday dryness. The label says to stop when: {stopUse} Pain, vision changes, or symptoms that keep returning are reasons to book an exam with an optometrist or ophthalmologist. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Concord, NH get?',
        a: `NOAA’s 1991 to 2020 normals put January’s average low at 12.9°F at Concord Municipal Airport, with almost 13 nights a year at zero or colder.`,
      },
      {
        q: 'How much snow does Concord, New Hampshire get?',
        a: `About 67.7 inches a year in NOAA’s normals, with January (17.1 inches) and February (16.9) the snowiest months.`,
      },
      {
        q: 'Is Concord, NH windy?',
        a: `Not by New England standards. NOAA’s wind table gives Concord a yearly average just over half of Boston’s, with August and September the calmest months and March the windiest.`,
      },
      {
        q: 'Does a wood stove dry out your eyes?',
        a: `A wood or pellet stove gives off strong, dry heat, and the air close to it holds little moisture, which speeds evaporation from the tear film. Sitting farther back and humidifying the bedroom help.`,
      },
      {
        q: 'Can Quell ship to Concord, New Hampshire?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Concord and every other US address. Order as a guest, and tracking arrives by email.`,
      },
    ],
  },
  /*
   * Source checked 2026-11-16 for gifts-for-a-frequent-business-traveler:
   * - https://www.tsa.gov/travel/security-screening/liquids-rule
   *   (travel-sized containers 3.4 ounces / 100 milliliters or less per item;
   *   a quart-sized bag of liquids in the carry-on; medications listed as an
   *   exemption)
   */
  {
    slug: 'gifts-for-a-frequent-business-traveler',
    title: 'Gifts for a frequent business traveler',
    description:
      'Gift ideas for someone always on the road for work: what dries their eyes on planes and in hotels, and small, carry-on-friendly gifts that help.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `A good gift for a frequent business traveler fits in a carry-on and makes the road less tiring. Think noise-canceling earbuds, a soft sleep mask, a compact travel humidifier, a sturdy toiletry pouch, wraparound sunglasses, and a lubricating eye drop like Quell. Its {size} bottle sits well under TSA’s 3.4-ounce limit, and it answers the dry eyes that cabin air, hotel heat and laptop work bring.`,
      },
      { h: 'Why road warriors end up with dry eyes' },
      {
        p: `Someone who flies every week spends a lot of time in the three kinds of air hardest on the tear film. There’s the cabin at altitude, the hotel room with its wall unit running, and the conference room or rental car with vents blowing. On top of that comes screen work: slide decks on the flight, email at the gate, spreadsheets in the hotel at night. People blink less when they concentrate on a screen, so the eyes dry between blinks.`,
      },
      {
        p: `We’ve already covered the details of [dry eyes on a plane](/guides/dry-eyes-on-a-plane) and [traveling with eye drops](/guides/traveling-with-eye-drops), so this guide sticks to the gift side: what to give, and why each item earns its spot in a bag that’s already full.`,
      },
      { h: 'Gift ideas that fit a carry-on' },
      {
        list: [
          `A contoured sleep mask. Late flights and bright hotel rooms make one useful, and a mask that doesn’t press on the eyelids is more comfortable for long stretches.`,
          `Noise-canceling earbuds or headphones, for sleep on planes and focus in loud lobbies.`,
          `A compact USB humidifier for hotel nightstands. Choose one that’s easy to empty and dry, since it will sit in a suitcase between trips.`,
          `Wraparound sunglasses for airport curbside waits, rental-car glare and windy tarmacs.`,
          `A clear, sturdy zip pouch for liquids that holds its shape better than a disposable bag.`,
          `A glasses case with a microfiber cloth, for anyone who switches between glasses and sunglasses all trip.`,
          `A refillable water bottle, empty through security and filled on the other side.`,
          `A few bottles of Quell, so there’s one in the laptop bag, one in the toiletry kit and one at home.`,
        ],
      },
      { h: 'Does the 3.4-ounce TSA rule matter for eye drops?' },
      {
        p: `TSA’s liquids page says travel-sized containers of 3.4 ounces (100 milliliters) or less are allowed in a carry-on, in a quart-sized bag. A bottle of Quell holds {size}, a small fraction of that limit. The same TSA page lists medications among its exemptions. For a traveler who already carries a quart bag of toiletries, a bottle this small slips in without crowding out anything else.`,
      },
      { h: 'Hotel rooms: the part of the trip no one plans for' },
      {
        p: `A business traveler may sleep in a different hotel three nights a week. Many rooms have a through-the-wall heating and cooling unit or a ceiling vent aimed near the bed, and it runs all night unless someone turns it down. Waking with gritty eyes in a hotel is common for exactly that reason. Gifts that help there:`,
      },
      {
        list: [
          `A travel humidifier, as above, or simply a reminder to set the room’s fan to low instead of auto.`,
          `A small clip-on or folding travel fan, so they can shut off the noisy unit and still move air.`,
          `A sleep mask, which also keeps air from moving across closed lids.`,
        ],
      },
      {
        p: `Our page on [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more room-by-room tips if your traveler asks.`,
      },
      { h: 'Why eye drops make a practical gift' },
      {
        p: `Eye drops don’t sound glamorous, but they’re the kind of thing a traveler runs out of at the wrong moment, in a hotel without a pharmacy nearby. Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts give the Uses as: {uses}. The directions: {directions}.`,
      },
      {
        p: `Two label lines matter for someone living out of a suitcase. Storage says: {storage}. That means a checked bag in a cold cargo hold in winter, or a rental car baking in a summer parking lot, isn’t the place for it. Keeping it in the personal item under the seat is easier. The other: {tip}. A bottle tossed loose into a laptop bag picks up crumbs and lint, so a small pouch is worth adding to the gift. Before you buy, check the label’s caution as well: {warnings}.`,
      },
      { h: 'Ordering Quell as a gift' },
      {
        list: [
          `Order as a guest; there’s no account to create. Buyers must be 18 or older.`,
          `Ship to your address or theirs, anywhere in the US. Our guide to [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) covers the address details.`,
          `Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which makes a several-bottle gift practical.`,
          `A tracking email follows, but no delivery date is promised, so order well before a send-off dinner or holiday.`,
          `Unopened bottles can be refunded within {returnDays} days of delivery, without being sent back.`,
        ],
      },
      {
        p: `If your traveler is on the road more than at home, shipping to their office may be the safest bet. See [shipping eye drops to your work address](/guides/shipping-eye-drops-to-your-work-address).`,
      },
      { h: 'What the gift can’t do' },
      {
        p: `Lubricating drops are for everyday dryness. If your traveler mentions pain, blurred vision that doesn’t clear, or one eye that’s much worse than the other, an eye doctor is the right stop, not another bottle. The label puts it this way: {stopUse} Quell’s label doesn’t give directions for contact lenses or for using it alongside other eye drops, so a lens wearer should ask an eye doctor or pharmacist before adding it.`,
      },
    ],
    faq: [
      {
        q: 'What is a good gift for someone who travels for work?',
        a: `Small, practical things that fit a carry-on work well: noise-canceling earbuds, a sleep mask, a travel humidifier, a sturdy liquids pouch, and a few bottles of lubricating eye drops for dry cabin and hotel air.`,
      },
      {
        q: 'What size eye drops can you take through TSA?',
        a: `TSA’s liquids page allows travel-sized containers of 3.4 ounces (100 milliliters) or less in a quart-sized carry-on bag, and it lists medications among its exemptions. A bottle of Quell is {size}.`,
      },
      {
        q: 'Why do business travelers get dry eyes?',
        a: `They spend long hours in dry cabin air, heated or air-conditioned hotel rooms and meeting rooms, often while working on a laptop, which slows blinking. All of that speeds evaporation from the tear film.`,
      },
      {
        q: 'Can I ship Quell straight to a traveler’s office?',
        a: `Yes. Quell ships to any US address, including a workplace. Use the full company name and suite number so the package reaches them, and expect tracking by email.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-while-decorating-for-christmas',
    title: 'Dry eyes while decorating for Christmas',
    description:
      'Dusty attic boxes, ladders, glitter and late nights near the tree can leave eyes dry and gritty. How to decorate for Christmas without the sting.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Decorating for Christmas dries and irritates the eyes because it stacks several things at once: dust from boxes that sat in an attic or basement all year, heated indoor air, fine glitter and flocking, focus on tiny light strands, and late nights. Open boxes in a ventilated spot, wear glasses, wipe ornaments before hanging them, keep the tree away from heat, and take breaks to blink.`,
      },
      { h: 'Dust from attic and basement boxes' },
      {
        p: `Bins of decorations collect a year’s worth of dust, insulation fibers in some attics, and the stale grit of a basement or garage. The moment you lift the lid or shake out a tree section, it all goes airborne at face height. Particles that land on the eye make it water, then feel dry and scratchy once the tears evaporate.`,
      },
      {
        list: [
          `Carry boxes down and open them in the garage or on a porch, not in the living room.`,
          `Wipe the lid with a damp cloth before you open it.`,
          `Wear safety glasses or plain glasses while you unpack the dustiest bins.`,
          `Fluff an artificial tree outdoors or near an open door, and shake each branch section away from you.`,
          `Wash your hands before you touch your face or eyes.`,
        ],
      },
      { h: 'Glitter, flocking and spray snow' },
      {
        p: `Glittered ornaments shed. A stray fleck on a fingertip ends up in an eye the first time you rub it. Artificial snow sprays and flocking kits put fine particles and propellant into the air, and some say right on the can what to do if the spray gets into the eyes.`,
      },
      {
        list: [
          `Read the spray can’s label before you start, and follow its first-aid instructions exactly if spray reaches your eyes. That label, not an eye drop, is the instruction to follow.`,
          `Spray outdoors or in a garage with the door open, pointing away from your face.`,
          `Handle glittered pieces with gloves and keep your hands away from your eyes until you’ve washed them.`,
          `If a particle stays stuck, blink gently and don’t rub. If it won’t come out, or the eye hurts afterward, call an eye doctor.`,
        ],
      },
      { h: 'Ladders and eye drops don’t mix' },
      {
        p: `Hanging lights along the gutters, topping the tree with a star, or reaching high garland means time on a ladder. Putting in an eye drop involves tilting your head back and briefly blurring your vision, which is the wrong combination at the top of a stepladder. If your eyes start to sting while you’re up there, climb down first.`,
      },
      {
        list: [
          `Use drops before you climb, not halfway up.`,
          `Wear sunglasses for outdoor light hanging on bright days; the roofline often faces straight into the low winter sun.`,
          `Work on outdoor decorations during the warmest, least windy part of the day.`,
          `Keep a spare pair of work gloves in your pocket so you don’t wipe your eyes with dirty hands.`,
        ],
      },
      { h: 'Where to put the tree (and your chair)' },
      {
        p: `A live tree near a fireplace, radiator, wood stove or floor vent dries out faster, and so do the people sitting beside it. Keeping a tree away from heat is sensible for the tree, and it helps your eyes too: the coziest spot next to the fire is also where the air is driest. Pick a corner away from vents for the tree, and put the armchairs where heat doesn’t blow across your face.`,
      },
      {
        p: `More on that is in our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes), and [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the rest of the house.`,
      },
      { h: 'Untangling lights and dry eyes at night' },
      {
        p: `Testing bulb by bulb, threading tiny hooks through ornament loops, and untangling a ball of lights all require close, steady focus, the same kind that slows blinking at a screen. Many people decorate after work or after the kids are asleep, so the session often runs late, when tired eyes already feel dry.`,
      },
      {
        list: [
          `Set a timer for every 20 minutes and look across the room for a few seconds.`,
          `Blink fully and slowly a few times before you go back to the strand.`,
          `Work under good light so you aren’t squinting.`,
          `Stop before you’re exhausted; the last box can wait until tomorrow.`,
        ],
      },
      {
        p: `If you wake up with dry, gritty eyes after a long decorating night, our guide to [dry eyes in the middle of the night](/guides/dry-eyes-in-the-middle-of-the-night) may help.`,
      },
      { h: 'Using a lubricating drop during the holidays' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions are: {directions}. It also says: {tip}. That last point matters when your hands have been in dusty boxes, so wash them first.`,
      },
      {
        p: `Keep the bottle away from the decorating mess, ideally in a bathroom drawer. The storage line says: {storage}, so a cold garage or a bin of outdoor decorations isn’t the place for it. The label also notes: {warnings}. And as on any medicine: {swallowed}. With children around the tree, put it up high.`,
      },
      { h: 'When it’s more than dryness' },
      {
        p: `A drop helps with ordinary dryness; it isn’t for chemical splashes or injuries. If a spray, cleaner or something sharp gets into your eye, follow that product’s label and get medical help. For lasting symptoms, the label says: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains when to call.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after putting up Christmas decorations?',
        a: `Dust from stored boxes, glitter and flocking particles, warm indoor air and long stretches of close focus all dry and irritate the eyes. If an eye actually hurts, or something feels stuck, see an eye doctor.`,
      },
      {
        q: 'How do you get dust off Christmas decorations?',
        a: `Open storage bins outdoors or in a garage, wipe ornaments with a damp cloth, and shake artificial tree sections away from your face before bringing them inside.`,
      },
      {
        q: 'What should I do if fake snow spray gets in my eyes?',
        a: `Follow the first-aid instructions printed on that can’s own label, and contact Poison Control or a doctor as it directs. A lubricating eye drop isn’t meant for chemical exposure.`,
      },
      {
        q: 'Where should I put my Christmas tree to avoid dry air?',
        a: `Away from fireplaces, radiators, stoves and floor vents. Heat dries a live tree and the air around it, and seats near those spots are where eyes dry fastest.`,
      },
    ],
  },
  {
    slug: 'gifts-for-a-long-distance-commuter',
    title: 'Gifts for a long-distance commuter',
    description:
      'Gift ideas for someone with a long drive, train or bus ride to work: what dries their eyes in the dark winter commute, and small gifts that help.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `The gifts a long-distance commuter actually uses make hours in a car, train or bus more comfortable. Good picks include polarized sunglasses for low winter sun, a dash vent deflector, an audiobook credit, an insulated travel mug, a neck pillow for the train, and lubricating eye drops for eyes dried by heater vents and screens. Keep it practical: something used every single trip.`,
      },
      { h: 'Why commuters’ eyes feel dry' },
      {
        p: `A long commute adds up to many hours a week in air that pulls moisture from the tear film. In a car, the heater blows warm, dry air through dashboard vents toward the face. On a train or commuter bus, a heated cabin and long screen sessions do the same. In winter, much of the trip happens in the dark, so eyes work harder against headlights and glare.`,
      },
      {
        p: `If your commuter drives, our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) explains the car side in detail. Here we stick to gifts, organized by how they get to work.`,
      },
      { h: 'Gifts for someone who drives an hour or more' },
      {
        list: [
          `A pair of polarized sunglasses for the low sun of a winter morning or late afternoon.`,
          `Clip-on vent deflectors, which redirect dashboard air away from the face.`,
          `A heated seat cushion or steering wheel cover, so they can run the dash heater lower.`,
          `An insulated travel mug that fits the cup holder.`,
          `An audiobook or podcast subscription to make the miles go faster.`,
          `A windshield cleaning kit; a hazy inside windshield adds glare after dark.`,
          `A small pouch for the console that holds lip balm, tissues and a bottle of eye drops.`,
        ],
      },
      {
        p: `One rule worth putting in a card: eye drops go in before the drive or at a stop, never while the car is moving. A drop blurs vision for a moment, and the label directions assume you’re standing or sitting still.`,
      },
      { h: 'Gifts for train and bus commuters' },
      {
        p: `People who ride commuter rail or an express bus often use the time to read, work or watch something, which keeps their eyes fixed on a screen for an hour or more. Cabin heat in winter, and air conditioning in summer, keeps the air dry.`,
      },
      {
        list: [
          `A neck pillow that packs flat, for naps on the way home.`,
          `A sleep mask, which also blocks air from the overhead vents while they rest.`,
          `A phone or tablet stand so they can hold the screen lower and blink more fully.`,
          `Noise-canceling earbuds for loud cars and stations.`,
          `A slim bag organizer with a small pocket for eye drops.`,
        ],
      },
      {
        p: `See [dry eyes on a long train ride](/guides/dry-eyes-on-a-long-train-ride) for more on rail travel.`,
      },
      { h: 'The dark-commute months' },
      {
        p: `Around the winter solstice, many commuters leave home before sunrise and come back after sunset. Night driving means oncoming headlights, glare on wet roads, and staring hard at the lane lines, which reduces blinking. Tired eyes at the end of a workday feel drier already. Gifts that brighten the trip help:`,
      },
      {
        list: [
          `A microfiber cloth for glasses, since smudges scatter headlight glare.`,
          `A gift card for a windshield-wiper replacement before winter storms.`,
          `A thermos of their favorite coffee or tea for the early drive.`,
        ],
      },
      { h: 'Why eye drops belong in the gift bag' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts give the Uses as: {uses}. The directions are: {directions}.`,
      },
      {
        p: `For a commuter, storage is the line to mention. The label says: {storage}. A car parked through a workday in an open lot in January or July can go far outside that, so the glove box isn’t a good home for it. A coat pocket, work bag or desk drawer is better. Also from the label: {tip}. And check this caution before giving: {warnings}.`,
      },
      { h: 'How to order Quell as a gift' },
      {
        list: [
          `Checkout is as a guest, and buyers need to be 18 or older.`,
          `Ship to your home or straight to theirs anywhere in the US.`,
          `Shipping is {shipping}; orders of {freeBottles} or more bottles ship free, enough for one at home, one at work and one in the bag.`,
          `You’ll get tracking by email, though no delivery date is promised. Order early in December.`,
          `If it isn’t wanted, unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
        ],
      },
      {
        p: `For more gift ideas, browse our list of [gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes).`,
      },
      { h: 'When a gift isn’t the answer' },
      {
        p: `If your commuter mentions trouble seeing at night that’s getting worse, eye pain, or vision that stays blurry, they need an eye exam, not drops. The label says: {stopUse} Quell’s label doesn’t cover use with contact lenses, so lens wearers should ask an eye doctor or pharmacist first.`,
      },
    ],
    faq: [
      {
        q: 'What do you get someone who has a long commute?',
        a: `Practical things they’ll use on every trip: polarized sunglasses, vent deflectors, a good travel mug, an audiobook subscription, a neck pillow for the train, and lubricating eye drops for dry car or cabin air.`,
      },
      {
        q: 'Why do my eyes get dry on my drive to work?',
        a: `Car heaters and air conditioners blow dry air through dashboard vents, often toward the face, and focusing on the road lowers your blink rate. Aiming vents at your chest or feet helps.`,
      },
      {
        q: 'Is it okay to put in eye drops while driving?',
        a: `No. Put drops in before you leave or when you’re safely stopped. A drop can blur your vision for a moment.`,
      },
      {
        q: 'Can I keep eye drops in my car for my commute?',
        a: `Quell’s label says: {storage}. A parked car often goes outside that range. Keep the bottle in a coat pocket or bag that comes inside with you.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-reading-medical-images',
    title: 'Dry eyes from reading medical images',
    description:
      'Radiologists and imaging staff spend hours in dim reading rooms staring at high-resolution screens. Why the eyes dry out, and what helps through a shift.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Reading medical images dries the eyes because it combines nearly every factor that lowers blinking: dim rooms, intense focus on fine detail, several large monitors, long uninterrupted reading lists, and often steady ventilation for equipment. Schedule short breaks to look away and blink fully, set screens at the right height, keep air off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'Dry eyes from staring at screen detail' },
      {
        p: `Looking for a subtle change on a high-resolution image is about as demanding a visual task as there is. When the eye concentrates, the blink rate drops, and the blinks that do come are often incomplete. Between those blinks, the tear film thins and breaks up, and the eye’s surface starts to feel dry, gritty or tired. The more detailed and important the task, the less a reader tends to blink, and imaging work is both.`,
      },
      {
        p: `The basics of this are covered in [screens and your tear film](/guides/screens-and-your-tear-film). What’s different for a reader is the scale: hours a day, often in multiple sessions, with very little natural interruption.`,
      },
      { h: 'Dim reading rooms' },
      {
        p: `Reading rooms are kept dim so screen contrast is high and reflections are low. That’s good for the work, but in a dark room the pupils widen and the eyes tend to open wider, exposing more of the surface. There’s also less to look at besides the monitor, so the eyes rarely shift focus to something farther away.`,
      },
      {
        list: [
          `Keep a small, indirect light behind the monitors, so the room isn’t completely dark.`,
          `Look at a far wall or doorway between studies, not just at the next image.`,
          `Blink fully, closing the lids gently all the way, several times between cases.`,
          `If the room allows, set a soft light at the edge of the desk to reduce the contrast between screen and surroundings.`,
        ],
      },
      { h: 'Multiple monitors and screen height' },
      {
        p: `Most reading stations use two or more large high-resolution reading displays, plus a worklist or dictation screen. A setup that has you looking up, or turning your head side to side all shift, keeps the eyes open wide. Placing the top of the main displays at or slightly below eye level helps the upper lids cover more of the eye. Our guide on [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) goes through arrangement in more depth.`,
      },
      {
        list: [
          `Center the display you use most directly in front of you.`,
          `Angle side monitors inward so you turn your eyes, not your whole head.`,
          `Sit at a comfortable distance; leaning toward a screen to see detail usually means the zoom or chair position needs adjusting.`,
          `Clean screens regularly so you aren’t straining through smudges.`,
        ],
      },
      { h: 'Air flow and room climate' },
      {
        p: `Workstations, servers and displays give off heat, and many imaging departments run steady ventilation or air conditioning to keep rooms comfortable. A supply vent above a desk can put a constant stream of dry air across the face. In winter, heated hospital air adds to it.`,
      },
      {
        list: [
          `Check where the nearest vent is blowing, and ask facilities whether it can be redirected or deflected.`,
          `Keep personal fans and space heaters aimed below the face.`,
          `If your department allows it, a small desk humidifier can help in the driest months.`,
        ],
      },
      { h: 'Building breaks into a reading list' },
      {
        p: `Long reading lists don’t break themselves up, and there’s pressure to keep the queue moving. A few habits fit without slowing things much:`,
      },
      {
        list: [
          `Use the moment a study loads, or the end of a dictation, as a cue to look away and blink.`,
          `Every 20 minutes or so, look at something across the room for about 20 seconds.`,
          `Stand up between batches, even briefly.`,
          `Take a real break outside the reading room during a long shift; daylight and a change of focus help the eyes reset.`,
        ],
      },
      { h: 'Night shifts and reading from home' },
      {
        p: `Late-night coverage and remote reading stations bring their own issues. Late hours mean tired eyes that already blink less fully, and a home office may have its own dry air from a furnace or a vent. If you read from home, set up the room as carefully as the hospital station: monitor height, vent placement and a dim but not dark room. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more on sleep and timing.`,
      },
      { h: 'Using a lubricating drop between cases' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts list its Uses as: {uses}. Its directions are: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `A drop can briefly blur your vision, so put it in at the start of a break rather than right before opening the next study. Keep the bottle in a drawer or pocket, since the label says: {storage}. And note the caution on the label: {warnings}. The complete label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to get your own eyes checked' },
      {
        p: `Readers depend on their own vision, so dryness that keeps coming back, blurring that doesn’t clear with blinking, or any eye pain deserves an exam by an optometrist or ophthalmologist. The label also sets limits: {stopUse} Quell’s label doesn’t cover contact lens wear, so lens wearers should ask an eye doctor or pharmacist first.`,
      },
    ],
    faq: [
      {
        q: 'Why do radiologists get dry eyes?',
        a: `They spend long hours focused on fine detail on high-resolution monitors in dim rooms, which lowers the blink rate, and reading rooms often have steady ventilation. Together those dry the tear film between blinks.`,
      },
      {
        q: 'How can I reduce eye strain in a dark reading room?',
        a: `Add soft indirect light behind the monitors, set the main display at or slightly below eye level, look across the room between studies, and blink fully several times before opening the next case.`,
      },
      {
        q: 'Do eye drops blur vision while reading scans?',
        a: `A drop can blur vision briefly as it spreads. Put it in at the start of a break, not just before reading the next image, and give your vision a moment to clear.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-housekeepers-and-cleaners',
    title: 'Dry eyes for housekeepers and cleaners',
    description:
      'Dust, cleaning sprays and hot, dry rooms make eyes sore for housekeepers and cleaners. Simple habits that help, and what to do if a chemical splashes.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Housekeepers and cleaners get dry, irritated eyes from dust stirred up by beds and vacuums, mist from cleaning sprays, heated or air-conditioned rooms, and steam from laundry. Wear safety glasses, spray into cloths instead of the air, and shake linens away from your face. A lubricating drop helps with dryness only. A chemical splash is a matter for the product’s label and Poison Control.`,
      },
      { h: 'Dust: beds, vacuums and high shelves' },
      {
        p: `Housekeeping work stirs up dust all shift long. Pulling sheets and shaking out comforters releases lint and dust at face height. Vacuums blow exhaust air, and an old bag or a full canister sends fine dust back into the room. Dusting high shelves, fans and vents drops debris straight down toward the eyes. That fine material makes eyes water at first, then feel dry and gritty as the tears evaporate.`,
      },
      {
        list: [
          `Pull bedding off in a slow roll instead of a snap, and turn your face away.`,
          `Empty and change vacuum bags or filters before they’re overfull.`,
          `Dust from the top down using a damp microfiber cloth so less goes airborne.`,
          `Wear wraparound safety glasses for overhead dusting and ceiling fans.`,
          `Wash your hands before touching your face.`,
        ],
      },
      { h: 'Cleaning sprays and fumes' },
      {
        p: `Trigger sprays create a fine mist that hangs in the air of a small bathroom or shower. Bleach, ammonia, oven and glass cleaners can irritate the eyes from fumes alone, even without a splash. Closed rooms without ventilation make it worse.`,
      },
      {
        list: [
          `Spray the product into a cloth or onto the surface at close range, not into the air.`,
          `Turn on the bathroom exhaust fan or open a window while you work.`,
          `Never mix cleaning products; read each label’s warnings.`,
          `Wear goggles or safety glasses when the product’s label calls for eye protection.`,
          `Keep spray nozzles pointed down and away when you carry bottles on a cart.`,
        ],
      },
      { h: 'If a cleaning chemical gets in your eye' },
      {
        p: `This is not a job for lubricating eye drops. Every cleaning product’s label has its own first-aid instructions for eye contact. Follow those instructions exactly, then call Poison Control or get medical help as the label directs. Many workplaces also have an eyewash station; know where it is before you need it. Bring the product container with you so whoever helps you knows what it was. Quell’s own label carries this warning: {warnings}. It’s a lubricating drop, not a rinse for chemicals.`,
      },
      { h: 'Hotel rooms and their heat' },
      {
        p: `Hotel housekeepers often clean rooms that guests left with the heat or air conditioning turned high. Wall units blow dry air, and closed windows hold it in. A housekeeper can move through a dozen of those rooms in a shift, plus hot laundry rooms with dryers and steam. Our guide to [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) explains why those rooms dry the eyes.`,
      },
      {
        list: [
          `Set the room’s fan to low while you work, if your hotel allows it.`,
          `Keep your face out of the direct path of the wall unit.`,
          `In the laundry room, step back when you open a dryer; the burst of hot air is very dry.`,
          `Take short breaks in a hallway or cooler room when you can.`,
        ],
      },
      { h: 'Home cleaners and seasonal work' },
      {
        p: `If you clean homes, each house has its own climate. Winter homes are often heated to the 70s with forced air. Move-out and deep cleans throw up construction dust, pet hair and old grime. Spring and fall cleanings mean windows, blinds and baseboards, all dusty work close to your face. Packing safety glasses in your supply bag is the simplest step.`,
      },
      { h: 'Using a lubricating drop at work' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts give the Uses as: {uses}. The directions say: {directions}. The panel also says: {tip}.`,
      },
      {
        list: [
          `Wash your hands thoroughly before using drops; cleaning residue on fingers shouldn’t go near your eyes.`,
          `Keep the bottle in a clean pocket or your personal bag, not on the cleaning cart with sprays and rags.`,
          `The label says: {storage}. A hot car between jobs in summer can go above that.`,
          `Another label line applies to everyone: {swallowed}. Keep it away from children in the homes you clean.`,
        ],
      },
      {
        p: `The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Dryness from dust and dry air usually settles with breaks and better habits. Pain, vision changes, or an eye that stays sore after a chemical exposure need medical attention. The label says: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs to take seriously.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after cleaning the bathroom?',
        a: `Spray mist and fumes from cleaners collect in small, closed bathrooms and irritate the eyes. Spray into a cloth, run the exhaust fan, and wear eye protection when the product label calls for it.`,
      },
      {
        q: 'What should I do if cleaner splashes in my eye?',
        a: `Follow the first-aid instructions on that cleaner’s label, then call Poison Control or get medical help as the label directs. Lubricating eye drops are not for chemical splashes.`,
      },
      {
        q: 'Should housekeepers wear safety glasses?',
        a: `They help a great deal for dusting overhead, handling sprays and emptying vacuums. Many cleaning product labels also call for eye protection; follow what each label says.`,
      },
      {
        q: 'Can I keep eye drops on my cleaning cart?',
        a: `It’s better to keep the bottle in a clean pocket or personal bag. A cart holds sprays, rags and chemicals, and the label asks you not to touch the tip to any surface.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-kayaking',
    title: 'Dry eyes when kayaking',
    description:
      'Wind across open water, sun glare and spray can leave a kayaker’s eyes dry and stinging. How to protect them on the water and keep drops dry.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Kayaking dries the eyes because you sit low on open water with nothing to block the wind, the sun hits you twice (from above and off the surface), and paddle spray adds salt or grit. Wear wraparound polarized sunglasses on a retainer strap, paddle with the wind behind you when you can, keep drops in a dry box, and put them in on shore with clean hands.`,
      },
      { h: 'Why open water dries your eyes' },
      {
        p: `On land, trees, buildings and hills break up the wind. On a lake, bay or wide river there’s nothing in the way, and the breeze runs straight across the water at eye level for someone sitting in a kayak. Moving air speeds evaporation from the tear film, so a steady headwind for an hour can leave eyes stinging even on a cool, damp day. Paddling effort adds to it: you squint into the wind and blink less while you concentrate on a line or a crossing.`,
      },
      {
        list: [
          `Check the forecast wind direction and plan the first leg into the wind, so the tiring return trip has it at your back.`,
          `Hug the shoreline on gusty days, where trees and banks give shelter.`,
          `Take short rests in coves or behind points to blink and let your eyes recover.`,
        ],
      },
      { h: 'Glare off the water' },
      {
        p: `Sunlight reflecting from the water’s surface reaches your eyes from below the brim of a hat, and on bright days that glare makes you squint for hours. Squinting narrows the eyes but doesn’t protect them from wind, and it’s tiring.`,
      },
      {
        list: [
          `Polarized lenses cut reflected glare from water better than plain tinted ones.`,
          `Wraparound frames block wind from the sides as well.`,
          `A retainer strap or floating cord keeps sunglasses from sinking if you capsize or take them off.`,
          `A brimmed hat or cap with a dark underside reduces glare from above.`,
        ],
      },
      { h: 'Spray, salt and lake water' },
      {
        p: `Every stroke flicks a little water toward the face, and in chop or surf it’s more than a little. Seawater leaves salt on the lids and lashes as it dries. Lake and river water can carry silt or algae. Wiping your eyes with a wet, salty hand or a damp sleeve just moves that grit around.`,
      },
      {
        list: [
          `Keep a small, clean, dry cloth in a sealed bag for wiping your face.`,
          `Rinse your face with fresh water from your bottle at breaks.`,
          `Don’t rub your eyes with wet gloves or hands.`,
          `If something in the water gets into your eye and it keeps hurting, head in and have it checked.`,
        ],
      },
      {
        p: `Our guide to [dry eyes after swimming](/guides/dry-eyes-after-swimming) has more on what water does to the tear film.`,
      },
      { h: 'Storing eye drops in a kayak' },
      {
        p: `A kayak isn’t kind to small bottles. Hatches leak, deck bags get soaked, and the cockpit floor collects water. A bottle that rolls around loose can end up with lake water on the tip. Quell’s label says: {tip}. It also gives storage limits: {storage}. A dark deck bag in full summer sun can get hot, so shade matters.`,
      },
      {
        list: [
          `Keep the bottle in a small waterproof case or zip bag inside a dry bag.`,
          `Store it in the day hatch or a PFD pocket that stays out of direct sun.`,
          `Bring a small bottle of hand sanitizer or fresh water to clean your hands before using drops.`,
          `Don’t leave the bottle in a hot car while you’re on the water. See [eye drops in a hot car](/guides/eye-drops-in-a-hot-car).`,
        ],
      },
      { h: 'When and where to put in drops' },
      {
        p: `Putting in an eye drop means tipping your head back and briefly blurring your vision. That isn’t something to do while drifting near rocks, in current, or with boat traffic around. The safer plan is to use drops before you launch and again on shore at a lunch stop, with dry, clean hands.`,
      },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions are: {directions}. The label warning also reads: {warnings}. You can read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Cold-water and shoulder-season paddling' },
      {
        p: `Spring and fall paddlers face cold air, which holds little moisture, on top of the wind. Cold wind often makes the eyes water heavily, and then they feel dry once the watering stops. Clear or lightly tinted wraparound glasses help on gray days when sunglasses are too dark. A neck gaiter pulled up keeps cold air from rising toward the face. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains why.`,
      },
      { h: 'After a long day on the water' },
      {
        list: [
          `Rinse your face with clean fresh water as soon as you’re off the water.`,
          `Point the car’s air vents away from your face on the drive home.`,
          `Rest your eyes; skip the hour of phone scrolling right after.`,
          `If one eye stays sore, blurry or sensitive to light, see an eye doctor.`,
        ],
      },
      {
        p: `The label is clear about when drops aren’t enough: {stopUse} Quell’s label doesn’t give directions for contact lenses, so if you paddle in lenses, ask your eye doctor or pharmacist before adding a drop. For more on boating in general, see [dry eyes on a boat](/guides/dry-eyes-on-a-boat).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after kayaking?',
        a: `Wind across open water speeds evaporation from the tear film, glare makes you squint and blink less, and spray can leave salt or grit on the lids. Wraparound polarized sunglasses and rinsing with fresh water help.`,
      },
      {
        q: 'What sunglasses are good for kayaking?',
        a: `Polarized lenses reduce glare off the water, and wraparound frames block wind from the sides. Add a floating retainer strap so a dropped pair doesn’t sink.`,
      },
      {
        q: 'How do I keep eye drops dry in a kayak?',
        a: `Put the bottle in a small waterproof case or zip bag inside a dry bag, and store it in a shaded hatch or PFD pocket. Clean your hands before using it.`,
      },
      {
        q: 'Can I put eye drops in while paddling?',
        a: `It’s better to wait until you’re on shore or stable in calm water away from hazards. A drop briefly blurs your vision, and you want both hands and clear eyes for paddling.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-drone-pilots',
    title: 'Dry eyes for drone pilots',
    description:
      'Drone pilots stare at a controller screen or the sky for whole flights, often in wind and sun. Why the eyes dry out and how to fly more comfortably.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Drone pilots get dry eyes because each flight means intense, unblinking focus on a small screen or on a tiny aircraft against the sky, usually outdoors in wind and bright light. Plan breaks at every battery swap, blink fully between maneuvers, wear wraparound eyewear that keeps the screen readable, and put in lubricating drops only when the aircraft is on the ground.`,
      },
      { h: 'Dry eyes from staring at the controller screen' },
      {
        p: `Flying a drone means watching a live video feed, telemetry and warnings on a phone, tablet or built-in screen. Like any screen work, that focus lowers the blink rate, but with an extra edge: you’re steering something expensive in real time, so you’re even less likely to look away. In a 20-minute flight, your eyes may barely leave the screen, and that’s a long time for the tear film to go without a proper blink.`,
      },
      {
        list: [
          `Before takeoff, blink slowly and completely a few times.`,
          `During a steady hover or straight transit, make a deliberate full blink.`,
          `Hold the controller at or a bit below eye level so the lids cover more of the eye.`,
          `Use a sunshade hood on the screen so you aren’t straining to see it.`,
        ],
      },
      { h: 'Watching the sky without blinking' },
      {
        p: `Tracking a small drone against a bright sky is just as demanding. The eyes widen, you stop blinking to avoid losing sight of it, and the sky’s glare makes you squint. Switching back and forth between the bright sky and the screen also takes effort.`,
      },
      {
        list: [
          `A brimmed cap cuts glare from overhead.`,
          `Stand with the sun behind or beside you, not in front, when the site allows.`,
          `Try to land before your eyes are burning, not after.`,
        ],
      },
      { h: 'Wind, sun and cold at the launch site' },
      {
        p: `Drones are often flown in open places: fields, beaches, rooftops and job sites, which are exactly where the wind blows unimpeded. Moving air speeds evaporation from the tear film. Many photography flights happen at sunrise or sunset, adding low-angle glare, and winter flying adds cold air that holds little moisture. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) covers how weather affects the eyes.`,
      },
      { h: 'Picking eyewear that works with a screen' },
      {
        p: `Wraparound sunglasses are the obvious answer for wind and glare, but there’s a catch. Polarized lenses can make some screens look dark or uneven at certain angles, which is the last thing you want mid-flight. Test your sunglasses with your controller at home before you rely on them.`,
      },
      {
        list: [
          `If polarized lenses black out your screen, try a non-polarized tinted wraparound pair.`,
          `Clear safety glasses block wind on overcast days without dimming the screen.`,
          `Keep a microfiber cloth in the case for dust and fingerprints.`,
        ],
      },
      { h: 'FPV goggles' },
      {
        p: `First-person-view pilots wear goggles that put the screen inches from the eyes. Many goggles have small fans to clear fog, which move air across the eyes. Inside, there’s nothing else to look at, so blinking drops. Taking the goggles off between packs, looking at something far away, and closing your eyes for a few seconds gives the tear film a chance to recover. If the goggles allow it, adjust the fan to a lower setting.`,
      },
      { h: 'Using battery swaps as breaks' },
      {
        p: `Batteries create a natural rhythm: fly, land, swap, fly again. That swap is the moment for your eyes too.`,
      },
      {
        list: [
          `Look at the horizon or something far away for 20 seconds.`,
          `Close your eyes and blink slowly a few times.`,
          `Put in an eye drop if you use one, with the aircraft safely landed and powered down.`,
          `Turn your back to the wind while you’re resting.`,
          `Check how your eyes feel before the next pack, and call it a day if they’re burning.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts give the Uses as: {uses}. The directions: {directions}. The label also says: {tip}. A bottle tossed into a gear case with props and cables shouldn’t have its tip touching anything.`,
      },
      {
        p: `For storage: {storage}. A drone case left in a car on a sunny day, or a backpack on a cold winter shoot, can push past that, so keep the bottle in an inside pocket. The label warning reads: {warnings}. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Editing the footage afterward' },
      {
        p: `Many pilots go straight from the field to the editing desk and spend hours more reviewing footage frame by frame. That’s another long session of focused screen time. Our guides to [dry eyes for video editors](/guides/dry-eyes-for-video-editors) and [screens and your tear film](/guides/screens-and-your-tear-film) cover the desk side.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay sore, your vision blurs and doesn’t clear, or one eye feels much worse, an eye doctor should take a look. The label says: {stopUse} If you wear contact lenses, Quell’s label doesn’t give directions for that, so ask an eye doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after flying a drone?',
        a: `Watching the screen or the aircraft takes such steady focus that you blink much less, and flights are usually outdoors in wind and bright light. Both dry the tear film.`,
      },
      {
        q: 'Can you wear polarized sunglasses when flying a drone?',
        a: `Sometimes. Polarized lenses can make some screens look dark at certain angles, so test your pair with your controller first, and switch to a non-polarized tinted pair if the screen dims.`,
      },
      {
        q: 'Do FPV goggles cause dry eyes?',
        a: `They can contribute. The screen sits close to the eyes, blinking drops, and goggle fans move air across the eyes. Taking them off between packs and blinking fully helps.`,
      },
      {
        q: 'When should a drone pilot use eye drops?',
        a: `Only with the aircraft landed and powered down, such as during a battery swap. A drop briefly blurs your vision, and you need clear sight while flying.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-birdwatching',
    title: 'Dry eyes when birdwatching',
    description:
      'Long stares through binoculars and scopes, cold dawns and wind can leave birders’ eyes dry. Practical ways to stay comfortable in the field.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Birdwatching dries the eyes because you hold binoculars or a spotting scope steady for long stretches without blinking, often at cold dawns and in open wind at marshes, shorelines and ridges. Blink fully every time you lower the optics, rest with both eyes closed between birds, block the wind with a hat and glasses, and use a lubricating drop as its label directs.`,
      },
      { h: 'Binoculars, scopes and the blink rate' },
      {
        p: `When a warbler is moving through the leaves or a distant shorebird is almost identifiable, the last thing you want to do is blink. So you don’t. Holding steady focus through optics drops the blink rate just as screens do, and a careful look can last much longer than you realize. The tear film thins with every second the eye stays open.`,
      },
      {
        list: [
          `Each time you lower your binoculars, close your eyes gently and blink slowly two or three times.`,
          `Don’t squint the other eye shut hard when using a scope; try a scope eyecup or a hand over the free eye instead.`,
          `Rest your eyes on the horizon between birds instead of scanning nonstop.`,
          `Adjust the eyecups and diopter properly so you aren’t straining to get a clear image.`,
        ],
      },
      { h: 'Cold dawns and early starts' },
      {
        p: `Much of birding happens at dawn, when birds are most active. In fall, winter and early spring, that means cold air, which holds very little moisture. Cold wind also triggers watery eyes, which blur the view and then leave the eyes feeling dry once they stop. Winter outings, including bird counts and waterfowl surveys, can mean hours outdoors in freezing air.`,
      },
      {
        list: [
          `Wear a hat with a brim and a neck gaiter you can pull up over your nose and cheeks.`,
          `Clear-lens glasses block wind without darkening the low early light.`,
          `Warm the car up before the drive, but point the heater vents at your feet.`,
          `Keep a thermos of something warm; a few minutes in the car between stops gives your eyes a break from the wind.`,
        ],
      },
      {
        p: `See [dry eyes from cold air](/guides/dry-eyes-from-cold-air) for why cold air affects the tear film.`,
      },
      { h: 'Wind at shorelines, marshes and hawk watches' },
      {
        p: `Many of the most productive birding spots are open and exposed: beaches, mudflats, marsh boardwalks, lakeshores and ridgetop hawk watches. There’s nothing to stop the wind there, and a long session at a hawk watch means scanning the sky into the breeze for hours. Glare off water and sand adds to it.`,
      },
      {
        list: [
          `Stand with your back to the wind when you can, and turn to look.`,
          `Use a blind, a building or a tree line as a windbreak.`,
          `Polarized sunglasses help at the beach, but test them with your binoculars first; some combinations make the view darker.`,
          `Wipe salt spray from your glasses and lenses with a clean cloth.`,
        ],
      },
      { h: 'Dry eyes at home after the field' },
      {
        p: `A birding day often ends at a screen: uploading photos, sorting through hundreds of frames, entering checklists and looking up field marks. After hours of open-eyed scanning in the field, that’s more of the same. Take a break before you start editing, and use the 20-20-20 habit: every 20 minutes, look about 20 feet away for 20 seconds. Our guide to [dry eyes for photographers](/guides/dry-eyes-for-photographers) covers the camera side in more detail.`,
      },
      { h: 'Packing eye drops for a birding trip' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions are: {directions}. One more line from the label: {tip}.`,
      },
      {
        list: [
          `Storage on the label reads: {storage}. On a freezing dawn, keep the bottle in an inside chest pocket, not a vest pocket.`,
          `Use drops before you set out and during a break, not while tracking a bird, since a drop blurs vision briefly.`,
          `Clean your hands first; field guides, scopes and car doors carry dirt.`,
          `The label also says: {warnings}. Read the full panel on our [Drug Facts page](/drug-facts).`,
        ],
      },
      { h: 'Long trips and festivals' },
      {
        p: `Birding festivals, migration trips and multi-day tours pack in long days: early starts, hours in the field, a drive to the next site and evenings reviewing the day’s list. Bring enough drops for the whole trip, keep a spare bottle in a different bag, and don’t leave them in a hot or freezing car between stops. Our guide to [traveling with eye drops](/guides/traveling-with-eye-drops) has packing tips.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If a speck or insect gets into your eye in the field and the eye stays sore, or your vision changes, have it checked. The label adds: {stopUse} Quell’s label doesn’t give directions for contact lenses, so lens wearers should ask an eye doctor or pharmacist first.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry after birding?',
        a: `Long, steady looks through binoculars or a scope lower your blink rate, and birding often happens at cold dawns and in open wind. Together those speed evaporation from the tear film.`,
      },
      {
        q: 'How do I stop my eyes watering in the cold when birdwatching?',
        a: `Block the wind with clear wraparound glasses, a brimmed hat and a neck gaiter, stand with your back to the wind, and take short breaks somewhere sheltered. Cold wind often triggers watering and then dryness.`,
      },
      {
        q: 'Can I use a spotting scope with both eyes open?',
        a: `Many birders do, which avoids hard squinting of the free eye. An eyecup or a hand held loosely over the other eye makes it easier, and it relaxes the face during long looks.`,
      },
      {
        q: 'Where should I carry eye drops when birding in winter?',
        a: `In an inside chest pocket, close to your body. Quell’s label says: {storage}. A cold outer pocket on a freezing morning can fall below that.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-stargazing',
    title: 'Dry eyes when stargazing',
    description:
      'Cold night air, long unblinking looks through an eyepiece, dew and red flashlights. How to keep your eyes comfortable on a long stargazing night.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Stargazing dries the eyes because you stare at faint objects for minutes without blinking, often in cold night air with a breeze, then press one eye to an eyepiece. Bundle up around the face, close both eyes and blink between targets, keep dew off your optics and glasses, and use lubricating drops under red light with clean hands, as the label directs.`,
      },
      { h: 'Why your eyes dry out under the stars' },
      {
        p: `Watching for a meteor or trying to tease out a faint galaxy means holding your gaze still for a long time. You don’t want to blink and miss something. Every second the eye stays open without a blink, the tear film thins. Add cold night air, which carries very little moisture, and any breeze across an open field or hilltop, and eyes can feel gritty within an hour.`,
      },
      {
        list: [
          `Blink deliberately every few seconds while waiting for meteors; you’ll still catch them.`,
          `Rest your eyes closed for a few moments between objects.`,
          `Lie back on a reclining chair rather than craning your neck, which keeps the eyes more relaxed.`,
        ],
      },
      { h: 'Dry eyes at night: the eyepiece effect' },
      {
        p: `Looking through a telescope eyepiece concentrates everything on one eye. Many people squeeze the other eye shut, which tires the face, and hold the observing eye wide open. Experienced observers often keep both eyes open and cover the free one with an eye patch or a hand.`,
      },
      {
        list: [
          `Try an eye patch over the non-observing eye instead of squinting it closed.`,
          `Switch observing eyes during a long session.`,
          `Don’t touch the eyepiece glass with your lashes; oil and moisture smear it.`,
          `Step back from the scope every few minutes and blink fully.`,
        ],
      },
      { h: 'Cold nights and wind' },
      {
        p: `Dark-sky sites are often open fields, hilltops or deserts, and some of the clearest nights come after a cold front, with dry air and wind. Winter nights are especially cold. Cold wind stings and makes the eyes water, then feel dry.`,
      },
      {
        list: [
          `Wear a warm hat and a neck gaiter or scarf pulled up to the cheeks.`,
          `Set up behind a car, a wall or a windbreak.`,
          `Clear glasses or wraparound eyewear block the breeze when you’re not at the eyepiece.`,
          `Sit inside a warm car for a break, but don’t point the heater vents at your face.`,
        ],
      },
      {
        p: `More on how temperature affects the eyes is in [dry eyes from cold air](/guides/dry-eyes-from-cold-air).`,
      },
      { h: 'Dew on optics, glasses and bottles' },
      {
        p: `As the night cools, dew forms on everything: telescope lenses, binoculars, eyeglasses, and the outside of an eye drop bottle. Dewy glasses tempt you to wipe your eyes with a damp sleeve. A wet bottle cap can transfer moisture and grit to the tip.`,
      },
      {
        list: [
          `Keep a dew shield or dew heater on the telescope, if you have one.`,
          `Store glasses and the eye drop bottle in an inside pocket when not in use.`,
          `Wipe your hands dry before handling the bottle.`,
          `Keep a clean, dry cloth in a sealed bag for your glasses.`,
        ],
      },
      { h: 'Red flashlights and putting in drops in the dark' },
      {
        p: `Stargazers use dim red lights so their eyes stay adapted to the dark. That makes reading a star chart possible, and it also helps when putting in eye drops. You can see the bottle without a bright white light ruining your night vision. Clean your hands, tip your head back, and use the red light to find the bottle, not to aim the drop. A drop briefly blurs your vision anyway, so wait a minute before going back to the eyepiece.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts list its Uses as: {uses}. Its directions are: {directions}. The label also says: {tip}. That matters in the dark, when it’s easy to bump the tip on a lash or finger.`,
      },
      {
        p: `Storage on the label: {storage}. On a winter night at a dark site, a bottle in an outer jacket pocket or a car can drop below that, so keep it close to your body. The label warning reads: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'After the session' },
      {
        list: [
          `Give your eyes a rest before scrolling through astrophotos on a screen.`,
          `If you wake with gritty eyes after a late session, see [dry eyes in the middle of the night](/guides/dry-eyes-in-the-middle-of-the-night).`,
          `For camping trips under the stars, [dry eyes on a winter camping trip](/guides/dry-eyes-on-a-winter-camping-trip) has more ideas.`,
        ],
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Never look at the sun through a telescope or binoculars without a proper solar filter. If you notice vision changes, pain, or flashes of light that aren’t in the sky, see an eye doctor promptly. The label adds: {stopUse} Quell’s label doesn’t cover contact lenses, so if you observe in lenses, ask your eye doctor or pharmacist before adding a drop.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when stargazing?',
        a: `You hold your gaze still on faint objects and blink much less, and night air is often cold and breezy. Both speed evaporation from the tear film.`,
      },
      {
        q: 'Should I close one eye when looking through a telescope?',
        a: `Many observers keep both eyes open and cover the free one with a patch or a hand. It’s less tiring than squeezing one eye shut, and you can switch eyes during a long session.`,
      },
      {
        q: 'How do I put in eye drops in the dark?',
        a: `Clean and dry your hands, use a dim red light to find the bottle, tip your head back and put in the drop. Wait a moment for any blur to clear before returning to the eyepiece.`,
      },
      {
        q: 'Can eye drops get too cold on a winter night outside?',
        a: `They can. Quell’s label says: {storage}. Keep the bottle in an inside pocket close to your body rather than in the car or an outer pocket.`,
      },
    ],
  },
  {
    slug: 'eye-drops-for-a-home-first-aid-kit',
    title: 'Eye drops for a home first aid kit',
    description:
      'Adding lubricating eye drops to a home first aid kit? Where to store the kit, how to check expiration dates, and keeping drops away from children.',
    category: 'ordering',
    addedOn: '2026-11-16',
    body: [
      {
        p: `A sealed bottle of lubricating eye drops is a sensible addition to a home first aid kit, for gritty, dry eyes after yard work, travel or a long screen day. Keep the kit somewhere with a steady temperature that matches the label’s storage line, check expiration dates twice a year, and store it high, away from children. Drops aren’t for chemical splashes or injuries.`,
      },
      { h: 'What eye drops are for in a home kit' },
      {
        p: `A home first aid kit is mostly for small, everyday problems: a cut, a splinter, a headache, a bug bite. Dry, irritated eyes fit that pattern. A lubricating drop can help after mowing on a windy day, a long drive with the heater on, or an evening of reading in a heated house. Quell’s label gives its Uses as: {uses}.`,
      },
      {
        p: `What a lubricating drop isn’t for matters just as much. If a household cleaner, garden chemical or other product splashes into an eye, follow that product’s own label for first aid and call Poison Control or get medical help. If something strikes the eye, or a particle won’t come out, see a doctor. Write those two rules on a card and tape it inside the kit lid.`,
      },
      { h: 'Where to keep the kit' },
      {
        p: `The bathroom medicine cabinet is the classic spot, but it’s often the warmest and steamiest room in the house. Quell’s label says: {storage}. A hall closet, a linen shelf or a high kitchen cabinet away from the stove keeps a steadier temperature for most homes.`,
      },
      {
        list: [
          `Choose a cabinet away from the shower, the stove, heat registers and sunny windows.`,
          `Avoid the garage, attic, basement in winter, or any space without climate control.`,
          `Keep the kit in the same place every time so everyone in the house knows where it is.`,
          `A car first aid kit is a different matter. Cars get far hotter and colder than the label range, so carry eye drops in a bag instead.`,
        ],
      },
      {
        p: `For more on temperature, see [how to store eye drops](/guides/how-to-store-eye-drops).`,
      },
      { h: 'Keep it out of reach of children' },
      {
        p: `Eye drops are medicine, and Quell’s label is direct about it: {swallowed}. A first aid kit on a low shelf or in an unlocked drawer is easy for curious kids to reach. Store it high, or use a kit with a latch. If you have grandchildren visiting for the holidays, check where any loose bottles are, too. Quell’s label doesn’t give directions for children, so ask a pediatrician or pharmacist before using it on a child. Our guide to [keep out of reach of children](/guides/keep-out-of-reach-of-children) covers that label line.`,
      },
      { h: 'Checking expiration dates' },
      {
        p: `Kits get forgotten. A bottle tucked away for an emergency can sit past its date without anyone noticing. Set a routine:`,
      },
      {
        list: [
          `Check the kit twice a year, for example when the clocks change in spring and fall.`,
          `Look for the expiration date on the carton and bottle; see [where the expiration date is on eye drops](/guides/where-is-the-expiration-date-on-eye-drops).`,
          `Replace anything past its date, and anything with a broken or missing seal.`,
          `Note on the kit’s inventory card the date each bottle was added.`,
        ],
      },
      { h: 'Sealed spare versus bottle in use' },
      {
        p: `It helps to keep two kinds of bottle. The kit holds a sealed spare that no one has opened. The bottle in daily use lives wherever the person who uses it keeps it. That way the kit bottle stays clean, and you aren’t left with an empty one when you need it. Quell’s label also says: {tip}. Each person should have their own bottle rather than sharing one; see [can you share eye drops](/guides/can-you-share-eye-drops).`,
      },
      {
        p: `Look the bottle over before use, too. Quell’s label says: {doNotUse}. It also notes: {milky}. That color is normal for Quell, so it’s worth knowing what it looks like when new.`,
      },
      { h: 'Ordering bottles for the kit' },
      {
        list: [
          `Order as a guest; there’s no account or subscription.`,
          `Shipping is {shipping}, and {freeBottles} or more bottles ship free, which covers a kit spare plus bottles in use.`,
          `Buyers must be 18 or older, and orders ship only within the US.`,
          `After an order, you’ll get one reorder reminder email, which is a good prompt to check the kit too.`,
          `Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
        ],
      },
      {
        p: `You can [order from the home page](/#buy). If you’re also stocking a workplace, our guide to [eye drops for an office first aid kit](/guides/eye-drops-for-an-office-first-aid-kit) covers that setting.`,
      },
      { h: 'What else belongs near the eye drops' },
      {
        list: [
          `Clean tissues or gauze pads.`,
          `A small mirror for checking an eye.`,
          `The Poison Control number and your eye doctor’s phone number on the inventory card.`,
          `A note of anyone in the house with an egg or bird allergy, because Quell’s label warns: {warnings}.`,
        ],
      },
      { h: 'When to skip the kit and call a doctor' },
      {
        p: `A drop is for ordinary dryness. The label says: {stopUse} Pain, vision changes, an injury or a chemical exposure all need medical care, not a drop. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Should you keep eye drops in a home first aid kit?',
        a: `A sealed bottle of lubricating eye drops is a useful addition for everyday dryness. Store the kit at a steady room temperature, high out of children’s reach, and check the date twice a year.`,
      },
      {
        q: 'Where should I keep a first aid kit at home?',
        a: `A hall closet or a high cabinet away from the shower, stove and heat vents usually works well. Bathrooms get warm and steamy, and Quell’s label says: {storage}.`,
      },
      {
        q: 'How often should I check my first aid kit for expired items?',
        a: `Twice a year is a good routine, for instance when the clocks change. Replace anything past its date or with a broken seal.`,
      },
      {
        q: 'Can lubricating eye drops be used for a chemical splash?',
        a: `No. For a splash, follow the first-aid instructions on that product’s own label and contact Poison Control or a doctor as it directs.`,
      },
    ],
  },
  {
    slug: 'mineral-oil-eye-drops-side-effects',
    title: 'Mineral oil eye drops: what the label warns',
    description:
      'Searching mineral oil eye drops side effects? What Quell’s Drug Facts warn about, why it looks milky, and when to stop and ask a doctor.',
    category: 'label',
    addedOn: '2026-11-16',
    body: [
      {
        p: `An OTC eye drop’s Drug Facts panel has no “side effects” section, so the Warnings are what to read. For Quell, which contains light mineral oil, the label cautions: {warnings}. Its Do not use line reads: {doNotUse}. It also lists when to stop and ask a doctor, such as eye pain or vision changes. Its milky brown look is normal.`,
      },
      { h: 'Mineral oil eye drops side effects: where the label puts them' },
      {
        p: `FDA’s format for over-the-counter Drug Facts uses set headings in a set order, among them Active ingredients, Purpose, Uses, Warnings, Directions, Other information and Inactive ingredients. There’s no “side effects” heading as you’d see on a prescription leaflet. Everything a buyer needs to watch for is under Warnings, which includes its own subheadings: Do not use, When using this product, Stop use and ask a doctor if, and Keep out of reach of children. Our guide to [the Warnings section](/guides/the-warnings-section) walks through each part.`,
      },
      { h: 'Quell’s warnings, line by line' },
      {
        p: `Quell lists three active ingredients: {actives}. Light mineral oil is the one listed as an emollient. Here is what the panel says, quoted exactly:`,
      },
      {
        list: [
          `The general warning: {warnings}.`,
          `Do not use: {doNotUse}.`,
          `When using this product: {tip}.`,
          `Keep out of reach of children: {swallowed}.`,
        ],
      },
      {
        p: `And the stop-use list, in plain terms: {stopUse}`,
      },
      {
        p: `That egg and bird allergy caution relates to an inactive ingredient, emu oil, not the mineral oil. Our guide to [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains it.`,
      },
      { h: 'Is the milky look a side effect?' },
      {
        p: `No. An eye drop that contains oil can look cloudy, and Quell’s label says so directly under Other information: {milky}. The site adds: {appearance} So the color itself isn’t a warning sign. A change from that color is: the label’s Do not use line says {doNotUse}. If a bottle looks different from the milky brown you’re used to (darker, separated in a new way, or another color), don’t use it. More on that in [do not use if the color changes](/guides/do-not-use-if-the-color-changes).`,
      },
      { h: 'Brief blur after a drop' },
      {
        p: `Any eye drop can blur your vision for a moment while it spreads across the eye, and a drop with oil in it may take a few blinks to settle. That’s different from blurred vision that lasts. The label’s stop-use list includes changes in vision, so blur that doesn’t clear with blinking is a reason to stop and call a doctor. Our page on [whether it’s normal for vision to blur after eye drops](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) covers the difference.`,
      },
      {
        list: [
          `Put drops in when you can sit for a minute afterward, not right before driving.`,
          `Blink gently a few times to spread the drop.`,
          `If blur lingers or worsens, stop and contact an eye doctor.`,
        ],
      },
      { h: 'What a mineral oil eye lubricant is designed to do' },
      {
        p: `The tear film has three layers: an outer oil layer, a water layer and a mucus layer next to the eye. The oil layer slows evaporation. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is why it contains an oil at all. The chemistry and the monograph details are in our guide to [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops); this page sticks to the warnings.`,
      },
      { h: 'Dry eyes at night and how to keep eyes moist' },
      {
        p: `People often look up mineral oil drops because their eyes feel worst at night or on waking. The label’s directions are what to follow: {directions}. It doesn’t give separate directions for bedtime. Beyond drops, a bedroom humidifier, a fan pointed away from the bed, and a lower thermostat at night all slow evaporation. If your eyes are consistently worse at night, mention it to an eye doctor; it’s useful information for them.`,
      },
      { h: 'Questions the label leaves to a doctor' },
      {
        list: [
          `Contact lenses: Quell’s label doesn’t give directions for use with lenses. Ask your eye doctor.`,
          `Other eye drops: the label doesn’t cover combining it with other drops. Ask your pharmacist or eye doctor about timing.`,
          `Children: the label doesn’t give directions for children. Ask a pediatrician or pharmacist.`,
          `Pregnancy, other medicines, or recent eye surgery: ask the doctor who knows your history.`,
        ],
      },
      {
        p: `The whole label is on our [Drug Facts page](/drug-facts), and our pharmacist questions list is at [questions to ask your pharmacist](/guides/questions-to-ask-your-pharmacist).`,
      },
      { h: 'If you have a reaction' },
      {
        p: `If your eyes hurt, your vision changes, irritation continues, or something just feels wrong after using any eye drop, stop using it and contact a doctor. If someone swallows it, the label says: {swallowed}. You can also reach {company} about product questions at {phone}, {hours}, though medical questions belong with a doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'What are the side effects of mineral oil eye drops?',
        a: `OTC eye drop labels don’t list side effects; they list warnings. For Quell, the stop-use guidance reads: {stopUse} The label also cautions anyone with egg or bird allergies.`,
      },
      {
        q: 'Do mineral oil eye drops make your vision blurry?',
        a: `A drop with oil in it can blur vision briefly while it spreads, and a few blinks usually settle it. Blur that doesn’t clear is a change in vision, which is on the label’s stop-use list.`,
      },
      {
        q: 'Is it normal for mineral oil eye drops to look cloudy?',
        a: `For Quell, yes. Its label says: {milky}. A change from that usual color is the warning sign, and the label says not to use it if that happens.`,
      },
      {
        q: 'Who should not use Quell eye drops?',
        a: `The label cautions people with egg or bird allergies and says not to use it if the product changes color. For contact lenses, children or other eye drops, the label gives no directions, so ask an eye doctor or pharmacist.`,
      },
    ],
  },
]
