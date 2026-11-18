import type { Guide } from '@/lib/guide-types'
export const DAILY_20261117_D: Guide[] = [
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-kalispell-mt:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00244558.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00244558.csv
   *   (KALISPELL GLACIER AP, elev 901.3 m: annual precip 16.76 in; Jun 2.84 wettest,
   *   Aug 0.76 driest, Jul 1.14; annual snow 54.4 in, Dec 15.9, Jan 13.9, Nov 8.0;
   *   Jul high 82.2 F, Aug 81.7 F; Dec and Jan high 31.0 F; 13.7 days at or above
   *   90 F; 187.2 nights at or below 32 F; 48.1 days with a high at or below 32 F;
   *   9.7 nights at or below 0 F)
   *   USW00024146 (the WBAN station) has no normals file (404); USC00244558 is the
   *   normals station NOAA lists for the same airport.
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (KALISPELL, MT, WBAN 24146: Jul 74/35, Aug 72/34, Sep 75/42, Jun 77/45,
   *   Dec 83/80, Jan 81/77, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (KALISPELL: Apr 3.2 highest month, May 3.0; Dec 1.8 lowest, Jan 1.9)
   * Elevation is the NOAA station elevation, converted (901.3 m is about 2,960 ft).
   */
  {
    slug: 'dry-eye-relief-kalispell-mt',
    title: 'Dry eye relief in Kalispell, Montana',
    description:
      'August afternoons near Kalispell average 34 percent humidity, and 187 nights a year dip to freezing. NOAA’s Flathead Valley numbers and what helps dry eyes.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Kalispell depends on the season. NOAA’s records for Glacier Park International Airport show August afternoons averaging 34 percent humidity with less than an inch of rain, while winter brings humid, still air outside and months of dry furnace heat indoors. Guard your eyes from wind and vents, take screen breaks, and use a lubricating drop the way its label says. Pain or vision changes belong with an eye doctor.`,
      },
      { h: 'The Flathead Valley’s climate in numbers' },
      {
        p: `The airport sits on the valley floor between Kalispell and Columbia Falls at about 901 meters, or roughly 2,960 feet. NOAA’s 1991 to 2020 climate normals for that station (listed as Kalispell Glacier Airport) describe a valley with cold, snowy winters and a short, dry summer:`,
      },
      {
        list: [
          `About 16.76 inches of precipitation in a normal year, with June the wettest month at 2.84 inches.`,
          `August is the driest month at 0.76 inches, and July is not far behind at 1.14.`,
          `Normal snowfall totals 54.4 inches, mostly in December (15.9) and January (13.9).`,
          `Roughly 187 nights a year reach 32°F or colder, and about 48 days never climb above freezing at all.`,
          `Only about 14 days a year hit 90°F, and July’s normal high is 82.2°F.`,
        ],
      },
      { h: 'Why are my eyes so dry in Kalispell in August?' },
      {
        p: `Late summer is the Flathead’s driest stretch. NOAA’s humidity table, built from the airport’s records, puts August afternoons at 34 percent and July afternoons at 35, against mornings in the low to mid 70s. A day that starts cool and damp on Flathead Lake can feel parched by mid-afternoon, and the tear film’s watery layer evaporates faster in that air. Wildfire smoke in some summers adds grit and haze on top of the dryness.`,
      },
      {
        list: [
          `Drive Going-to-the-Sun Road or hike from Logan Pass early, before the afternoon humidity drop.`,
          `On a boat or paddleboard, wraparound sunglasses cut both the breeze and the glare off the lake.`,
          `On smoky days, keep windows closed and run the car’s air on recirculate, aimed away from your face.`,
          `Pick huckleberries in the shade where you can, and pause every so often for a few slow, full blinks.`,
        ],
      },
      { h: 'Kalispell winters: humid outdoors, parched indoors' },
      {
        p: `From November on, the numbers turn around. NOAA’s table puts December afternoons at 80 percent humidity and January at 77, and the station’s wind readings are lowest in December, so the valley air outside is calm and moist. Inside is another story. With December and January highs normally at 31°F and close to ten nights a year at zero or below, furnaces and wood stoves run for months. Heating cold air raises its temperature without adding water, and its relative humidity drops steeply, which is why eyes often feel worse at the kitchen table than on a snowy walk.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Point floor registers and the car’s defroster away from your face.`,
          `Sit back from the wood stove rather than right in front of it.`,
          `Turn the thermostat down a few degrees at night if your eyes feel worst in the morning.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through the house room by room.`,
      },
      { h: 'Ski days on Big Mountain and spring wind' },
      {
        p: `Whitefish Mountain Resort is a short drive north, and a chairlift ride in January puts cold air across your eyes for minutes at a stretch. Goggles seal better than sunglasses, and they block the snow glare too. In spring the pattern shifts again: NOAA’s wind table shows April as the station’s breeziest month, followed by May, just as people head out to plant gardens, ride the trails at Lone Pine State Park, and open up the lake cabins. A brimmed hat and close-fitting glasses help on gusty days.`,
      },
      { h: 'Screens through the long evenings' },
      {
        p: `Winter nights come early this far north, and a lot of them get spent on laptops, phones and televisions. Screens slow your blink rate, and each skipped blink leaves the tear film to thin a little longer in dry, heated air. Set a reminder to look across the room every so often, finish each blink fully, and keep the screen slightly below eye level so your lids cover more of the eye. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the mechanics.`,
      },
      { h: 'Using Quell in the Flathead' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. The directions read: {directions}. One habit matters in a pickup console or a ski pocket alike: {tip}.`,
      },
      {
        p: `Storage is printed on the panel as well: {storage}. A truck left at a Glacier trailhead in August or in the ski lot in January can drift outside that range, so carry the bottle in an inside pocket and bring it in at night. The label also lists this caution: {warnings}. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Kalispell, Whitefish and Columbia Falls' },
      {
        p: `Orders ship from Brentwood, Tennessee, to any US address, including rural routes and lake cabins around the Flathead. You can check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, and winter weather over the passes can slow packages, so order before you’re down to the last few drops. Unopened bottles are refundable within {returnDays} days of delivery without being mailed back. Local details live on the [Kalispell page](/eye-drops/kalispell-mt) and the [Montana page](/eye-drops/state/montana).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `A drop eases everyday dryness; it doesn’t explain why your eyes keep bothering you. The label is clear about the limit: {stopUse} Sudden blurry vision, eye pain, or one eye far worse than the other deserves a visit, not a second bottle. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Kalispell in the summer?',
        a: `NOAA’s table puts July and August afternoons near the Kalispell airport at 34 to 35 percent relative humidity, and August normally gets under an inch of rain. Warm, dry afternoon air pulls water from the tear film faster.`,
      },
      {
        q: 'How much snow does Kalispell get a year?',
        a: `About 54.4 inches in a normal year at the Glacier Park International Airport station, according to NOAA’s 1991 to 2020 normals. December averages 15.9 inches and January 13.9.`,
      },
      {
        q: 'Is Kalispell humid in the winter?',
        a: `Outside, yes: NOAA’s table lists December afternoons at 80 percent relative humidity. Heated indoor air is far drier, so eyes tend to feel worse inside during the cold months.`,
      },
      {
        q: 'Can I get Quell delivered to Kalispell, Montana?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Kalispell, Whitefish, Bigfork and every other US address, with guest checkout and tracking by email. No arrival date is promised, so reorder early in winter.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-grand-island-ne:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014935.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014935.csv
   *   (GRAND ISLAND AP, elev 560.8 m: annual precip 26.61 in; Jan 0.61 driest,
   *   Feb 0.74, Dec 0.84; May 4.70 wettest, Jun 4.01; annual snow 27.7 in, Feb 7.3,
   *   Jan 6.8; Jul high 88.1 F; Jan high 36.1 F, low 15.6 F; 35.7 days at or above
   *   90 F; 144.7 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (GRAND ISLAND, NE, WBAN 14935: Oct 80/49 lowest afternoon, Apr 79/51,
   *   Sep 84/51, Mar 80/57, Jan 78/64, Aug 86/55; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (GRAND ISLAND: Apr 6.0 highest month, Mar 5.6; Aug 4.0 lowest, Jul 4.1)
   * Elevation is the NOAA station elevation, converted (560.8 m is about 1,840 ft).
   */
  {
    slug: 'dry-eye-relief-grand-island-ne',
    title: 'Dry eye relief in Grand Island, Nebraska',
    description:
      'Grand Island’s windiest month is April, and October afternoons average 49 percent humidity. NOAA’s numbers, crane season, harvest dust and dry-eye habits.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Grand Island comes down to wind and dust. NOAA’s records for the city’s airport show April as the windiest month and October afternoons averaging 49 percent humidity, the lowest of the year, with harvest dust in the air. Winters are dry outside and drier indoors. Wear wraparound glasses outdoors, keep heater and dashboard vents off your face, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Grand Island weather by the numbers' },
      {
        p: `Central Nebraska Regional Airport, on the northeast side of town, sits at about 561 meters, or close to 1,840 feet. NOAA’s 1991 to 2020 normals for the station read like a plains calendar, with a wet late spring, a hot summer and a dry, cold winter:`,
      },
      {
        list: [
          `Normal yearly precipitation is 26.61 inches. May is the wettest month at 4.70 inches, and June brings 4.01.`,
          `January is the driest month at 0.61 inches, with February (0.74) and December (0.84) close behind.`,
          `Snowfall averages 27.7 inches, with February (7.3) slightly ahead of January (6.8).`,
          `About 36 days a year reach 90°F, and July’s normal high is 88.1°F.`,
          `Roughly 145 nights a year drop to 32°F or below, and January lows average 15.6°F.`,
        ],
      },
      { h: 'Spring wind and crane season on the Platte' },
      {
        p: `NOAA’s wind table lists April as Grand Island’s windiest month, with March second. That’s also when sandhill cranes gather along the Platte River south of town, and most viewing happens from riverside blinds at dawn and dusk. Sitting still for an hour in a cold breeze, eyes fixed on the sandbars, is a recipe for stinging, watery eyes. The tear film evaporates faster in moving air, and staring at distant birds slows blinking.`,
      },
      {
        list: [
          `Wear close-fitting glasses or wraparound sunglasses in the blind, even at dawn.`,
          `Put the binoculars down every few minutes and close your eyes for a few seconds.`,
          `Keep the car heater on low and the vents pointed at your feet on the drive out.`,
          `Pack the eye drop bottle in an inside coat pocket rather than the glove box on a cold morning.`,
        ],
      },
      { h: 'Harvest dust and the driest afternoons' },
      {
        p: `Afternoon humidity is lowest in October, at 49 percent in NOAA’s table, with April at 51 and September at 51 as well. Those months line up with planting and harvest in Hall County, when combines and grain trucks raise dust along every section road. Dust that lands on the eye scratches at a tear film that’s already thinning in dry air. The Nebraska State Fair, held in Grand Island in late summer, adds long days of walking dusty midway paths and livestock barns.`,
      },
      {
        list: [
          `Keep the cab filter on the combine or tractor clean, and run the air on recirculate in dusty fields.`,
          `Point the cab vents at your chest, never straight at your face.`,
          `Rinse dust off your face and lashes with clean water at the end of a field day.`,
          `At the fairgrounds, a brimmed hat and sunglasses help on breezy afternoons.`,
        ],
      },
      { h: 'Winter in Grand Island: cold air, dry rooms' },
      {
        p: `January brings the least precipitation of the year and normal highs of 36.1°F. Even though January afternoons average 64 percent relative humidity outdoors, that cold air holds very little water to begin with. Once a furnace warms it to room temperature, its relative humidity falls sharply, and eyes feel it most in the evening after hours indoors. A humidifier in the room where you spend the most time, a lower thermostat at night, and a chair moved away from the floor registers all help. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers the extra heaters many people run in shops and garages.`,
      },
      { h: 'Driving I-80 and long workdays' },
      {
        p: `Grand Island sits just north of Interstate 80, and plenty of residents commute or haul freight along it. Long stretches of open highway invite a fixed stare and fewer blinks, while the dashboard vents blow warm or cold air across your face. Angle the vents down, stop every couple of hours, and blink deliberately at each stop. Office work at a screen does the same thing in a different chair; [eye drops for computer users](/guides/eye-drops-for-computer-users) has a workday routine.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. The directions say: {directions}. Before every use, remember the panel’s tip: {tip}.`,
      },
      {
        p: `Storage matters on a farm, where a bottle can end up in a truck cab for a week. The label says: {storage}. A summer cab or a January glove box can go well outside that, so keep it in the house or in a pocket. The panel also cautions: {warnings}. All of it is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Grand Island' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Grand Island, Hastings, Kearney, Doniphan and every other US address, including rural route boxes. Guest checkout works without an account, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows, though no delivery date is promised. If you change your mind, unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. More local information is on the [Grand Island page](/eye-drops/grand-island-ne) and the [Nebraska page](/eye-drops/state/nebraska).`,
      },
      { h: 'Knowing when to see an eye doctor' },
      {
        p: `Wind, dust and furnace air explain a lot of everyday dryness, but not everything. The label’s line is {stopUse} Dust that won’t rinse out, a scratchy feeling after a field day that doesn’t ease, or blurred vision that stays should be looked at by an eye doctor. The [self-check](/self-check) can help you describe your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Grand Island, Nebraska?',
        a: `April, according to NOAA’s wind speed table for the Grand Island airport, with March second. August and July are the calmest months at that station.`,
      },
      {
        q: 'How much snow does Grand Island get?',
        a: `About 27.7 inches in a normal year, based on NOAA’s 1991 to 2020 normals for the Grand Island airport. February averages 7.3 inches and January 6.8.`,
      },
      {
        q: 'Why do my eyes burn during harvest season?',
        a: `Dust from combines and gravel roads lands on the eye, and in Grand Island it comes when afternoon humidity is at its lowest, about 49 percent in October in NOAA’s table. Wraparound glasses and a clean cab filter help, and lasting irritation needs an eye doctor.`,
      },
      {
        q: 'Does Quell ship to Grand Island, NE?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Grand Island and the surrounding towns, with guest checkout and a tracking email. No delivery date is promised, so order before your bottle runs low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-atlantic-city-nj:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093730.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093730.csv
   *   (ATLANTIC CITY INTL AP, elev 18.3 m: annual precip 45.96 in; Aug 4.59 wettest,
   *   Mar 4.52, Jul and Dec 4.47; Feb 3.23 driest; annual snow 17.4 in, Feb 5.9,
   *   Jan 5.7; Jul high 86.6 F; Jan high 43.2 F, low 25.1 F; 22.6 days at or above
   *   90 F; 101.3 nights at or below 32 F; 10.5 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ATLANTIC CITY, NJ, WBAN 93730: Apr 74/51 lowest afternoon, Mar 75/53,
   *   Feb 77/55, Sep 86/58, Aug 84/58, Dec 79/59; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ATLANTIC CITY: Mar 4.7 highest month, Apr 4.6; Aug 3.1 lowest)
   * The station is Atlantic City International Airport in Egg Harbor Township, inland
   * from the barrier island. Elevation converted: 18.3 m is about 60 ft.
   */
  {
    slug: 'dry-eye-relief-atlantic-city-nj',
    title: 'Dry eye relief in Atlantic City, New Jersey',
    description:
      'Atlantic City’s windiest month is March and April afternoons average 51 percent humidity. Boardwalk wind, casino air, NOAA’s numbers and dry-eye habits.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Atlantic City is mostly about wind and indoor air. NOAA’s records for Atlantic City International Airport show March as the windiest month and April afternoons as the driest, at 51 percent humidity. On the Boardwalk, ocean wind dries the eyes; inside the casinos and offices, climate control and screens do it. Shield your eyes outdoors, blink fully indoors, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Where Atlantic City’s weather numbers come from' },
      {
        p: `NOAA’s official station for the city is at Atlantic City International Airport, which is in Egg Harbor Township on the mainland, roughly ten miles inland from Absecon Island and the Boardwalk. Its elevation is about 18 meters, or 60 feet. Conditions at the airport are close to what the city sees, but the beachfront is breezier and gets more salt spray, so read the numbers below as the mainland view. NOAA’s 1991 to 2020 normals for the station show:`,
      },
      {
        list: [
          `About 45.96 inches of precipitation a year, spread fairly evenly. August is wettest at 4.59 inches and February driest at 3.23.`,
          `Normal snowfall of 17.4 inches, mostly in February (5.9) and January (5.7).`,
          `About 23 days a year at 90°F or warmer, and a July normal high of 86.6°F.`,
          `Roughly 101 nights a year at or below freezing, but only about 10 days when the high never gets above 32°F.`,
        ],
      },
      { h: 'Late winter and spring on the Boardwalk' },
      {
        p: `NOAA’s wind table ranks March as the station’s windiest month, with April just behind it. Those same months bring the year’s lowest afternoon humidity: 51 percent in April and 53 in March. A walk or bike ride on the Boardwalk in early spring combines cold, dry air with a steady wind off the water, and the tear film’s watery layer evaporates quickly under those conditions. Blowing sand on the beach side adds grit.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the Boardwalk, even on gray days, to block wind and sand.`,
          `Walk with the wind at your back on the return leg if you can choose your direction.`,
          `Turn your face away from gusts rather than squinting into them.`,
          `Step inside a shop or a casino lobby now and then to let your eyes recover.`,
        ],
      },
      { h: 'Casino floors, hotels and long shifts' },
      {
        p: `Atlantic City’s biggest employers keep people indoors for long hours under climate control. Dealers, security staff, servers and hotel workers spend shifts in air that’s cooled in summer and heated in winter, both of which speed evaporation from the eye. Players at a slot machine or card table stare at the same spot for long stretches and blink less. Conventions at the convention center and Boardwalk Hall add hours of watching stages and screens.`,
      },
      {
        list: [
          `Look away from the table or screen every so often and blink slowly a few times.`,
          `On breaks, step outside for natural air if the weather allows.`,
          `Keep a bottle in a locker or bag rather than a hot car in the employee lot.`,
          `If you work a late shift, our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has a routine.`,
        ],
      },
      { h: 'Summer at the Jersey Shore' },
      {
        p: `Summer is the humid season here. NOAA’s table shows August mornings at 84 percent humidity and September mornings at 86, and the station’s wind readings are lowest in August. Humid air is kinder to the tear film, but beach days bring their own trouble: sunscreen running into the eyes, salt water, glare off the sand and the ocean, and hours of air conditioning in hotel rooms and cars on the Atlantic City Expressway. Sunglasses, a brimmed hat, and a hotel thermostat set a few degrees warmer all help.`,
      },
      { h: 'Winter by the ocean' },
      {
        p: `Atlantic City’s winters are milder than inland New Jersey’s, with a January normal high of 43.2°F at the airport, but the heat still runs for months. Older apartments and rooming houses near the Boardwalk often have radiators or baseboard heat, and hotel rooms rely on wall units that blow straight across the bed. Point the unit’s vanes toward the ceiling, keep a humidifier in the bedroom, and sleep with the heat a little lower. Our [winter heating guide](/guides/winter-heating-and-dry-eyes) has more on indoor air.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives these Uses: {uses}. Directions: {directions}. Hands get sandy at the beach, so the panel’s tip is worth repeating: {tip}.`,
      },
      {
        p: `A beach bag in the sun gets warm quickly, and the label’s storage line reads: {storage}. Keep the bottle in a cooler pocket, away from ice, or leave it in the hotel room. The panel also includes this caution: {warnings}. Read every section on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Atlantic City' },
      {
        p: `We ship from Brentwood, Tennessee, to Atlantic City, Ventnor, Margate, Brigantine, Absecon and the rest of the US. If you’re here on a trip, you can ship to a hotel only if it accepts guest packages, so ask the front desk first. Checkout is as a guest, shipping costs {shipping}, and {freeBottles} or more bottles ship free. No arrival date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Atlantic City page](/eye-drops/atlantic-city-nj) and the [New Jersey page](/eye-drops/state/new-jersey) have more.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Sand, salt and wind can all leave the eyes uncomfortable for a while, but some symptoms are past what a drop is for. The label says: {stopUse} Sand that feels stuck, sharp pain, or vision that stays blurry after rinsing calls for an eye doctor. The [self-check](/self-check) can help you put your symptoms into words; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Where is the Atlantic City weather station?',
        a: `NOAA’s main station for Atlantic City is at Atlantic City International Airport in Egg Harbor Township, on the mainland about ten miles inland from the Boardwalk. Beachfront conditions are often windier than the airport’s.`,
      },
      {
        q: 'What is the windiest month in Atlantic City?',
        a: `March, according to NOAA’s wind speed table for the Atlantic City airport, with April close behind. August is the calmest month at that station.`,
      },
      {
        q: 'How much snow does Atlantic City get?',
        a: `About 17.4 inches in a normal year at Atlantic City International Airport, according to NOAA’s 1991 to 2020 normals. February and January bring most of it.`,
      },
      {
        q: 'Can I order Quell to an Atlantic City hotel?',
        a: `Quell ships to any US address, but whether a hotel will hold a guest’s package is up to the hotel. Ask the front desk before you order, and put your full name on the order so staff can match it to your stay.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-binghamton-ny:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00004725.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00004725.csv
   *   (BINGHAMTON, NY, elev 489.5 m: annual precip 42.04 in; Jun 4.69 wettest,
   *   Feb 2.41 driest; annual snow 86.5 in, Jan 20.6, Feb 19.7, Dec 18.1, Mar 16.4,
   *   Nov 6.8, Apr 3.8; Jul high 78.4 F; Jan high 29.5 F; 2.2 days at or above
   *   90 F; 141.8 nights at or below 32 F; 58.6 days with a high at or below 32 F;
   *   25.0 days with 1 in or more of snow)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BINGHAMTON, NY, WBAN 04725: Apr 75/55 and May 78/55 lowest afternoons,
   *   Jun 82/59, Dec 82/72, Jan 80/70, Aug 88/59, Sep 89/63; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BINGHAMTON: Mar 4.5 highest month; Aug 3.1 lowest)
   * The station is Greater Binghamton Airport, on high ground north of the city.
   * Elevation converted: 489.5 m is about 1,610 ft.
   */
  {
    slug: 'dry-eye-relief-binghamton-ny',
    title: 'Dry eye relief in Binghamton, New York',
    description:
      'Binghamton averages 86.5 inches of snow, so the heat runs for months. NOAA’s numbers for the Southern Tier and how to keep your eyes comfortable year-round.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Binghamton is mostly an indoor job. NOAA’s records put normal snowfall at 86.5 inches, and about 59 days a year never get above freezing, so furnaces, boilers and baseboard heat run from fall into spring. Outdoors, the driest afternoons come in April and May. Humidify the rooms you live in, keep heat off your face, rest your eyes at screens, and use a lubricating drop as its label directs. An eye doctor should check pain or vision changes.`,
      },
      { h: 'Binghamton’s climate, from NOAA’s normals' },
      {
        p: `NOAA’s station for the city is Greater Binghamton Airport, on a hilltop north of downtown at about 490 meters, or roughly 1,610 feet. That’s well above the river valley where most people live, so the airport tends to run a little colder and snowier than downtown. The 1991 to 2020 normals still give a clear picture of the year:`,
      },
      {
        list: [
          `About 42.04 inches of precipitation a year. June is the wettest month at 4.69 inches, and February the driest at 2.41.`,
          `Normal snowfall of 86.5 inches, led by January (20.6), February (19.7), December (18.1) and March (16.4).`,
          `About 25 days a year bring an inch or more of new snow.`,
          `Roughly 142 nights a year at or below freezing, and about 59 days with a high of 32°F or lower.`,
          `Summer stays mild: July’s normal high is 78.4°F, and only about two days a year reach 90°F.`,
        ],
      },
      { h: 'Why do my eyes feel dry in a Binghamton winter?' },
      {
        p: `Outside, January and December afternoons average 70 and 72 percent humidity in NOAA’s table, which sounds comfortable. The catch is temperature. January’s normal high at the airport is 29.5°F, and air that cold carries very little water. Warming it to 68°F indoors drops its relative humidity steeply, and the tear film loses water faster in that air. Many houses in the Triple Cities date from the early 1900s and still run on steam or hot-water radiators, which add strong, dry heat near where people sit and sleep.`,
      },
      {
        list: [
          `Put a humidifier in the bedroom and the room where you spend evenings, and clean it on the maker’s schedule.`,
          `Move reading chairs and beds away from radiators and baseboard units.`,
          `Lower the heat at bedtime if your eyes feel worst first thing in the morning.`,
          `Keep the car’s heater aimed at the floor and windshield, not your face, on the drive up Route 17 or I-81.`,
        ],
      },
      {
        p: `[Dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) goes into steam and hot-water systems in more detail.`,
      },
      { h: 'Snow, shoveling and March wind' },
      {
        p: `With about 25 snowy days a year of an inch or more, shoveling is a regular winter chore. Cold wind, blowing snow and bright glare all work on the eyes at once. NOAA’s wind table shows March as the station’s windiest month, so the last big storms of the season often come with the most wind. Close-fitting glasses or ski goggles help on blowing days, and a hood or brimmed hat keeps snow out of your face. [Dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) has more.`,
      },
      { h: 'Spring and summer along the rivers' },
      {
        p: `The driest afternoons of the year come in April and May, both at 55 percent humidity in NOAA’s table. That’s when people get back out on the Two Rivers Greenway along the Susquehanna and Chenango, ride the town carousels in the parks, and start yard work. Spring pollen and dust can join the dry air, so a pair of sunglasses and a rinse of the face after yard work help. Summer is more humid, with August and September mornings near 88 and 89 percent, and the calmest winds of the year come in August.`,
      },
      { h: 'Campus life and screen time' },
      {
        p: `Binghamton University and SUNY Broome put thousands of students and staff in front of laptops, often in heated libraries and dorms through the long winter semester. Finals in December land in the middle of heating season. Screens slow the blink rate, and partial blinks leave part of the eye uncovered. Take a short break every so often to look across the room, close your eyes fully a few times, and keep the screen slightly below eye level. [Dry eyes while studying](/guides/dry-eyes-while-studying) has a fuller plan.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. With winter gloves and mittens in the mix, keep this line in mind: {tip}.`,
      },
      {
        p: `The panel’s storage line reads: {storage}. A bottle left in a parked car through a January night can freeze, so bring it inside. The label also carries this caution: {warnings}. Our [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Getting Quell in the Southern Tier' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Binghamton, Johnson City, Endicott, Vestal and every other US address. Guest checkout is available, shipping is {shipping}, and {freeBottles} or more bottles ship free. Each order gets a tracking email, but there’s no promised delivery date, and winter storms can slow things down, so order well before you run out. Unopened bottles are refundable within {returnDays} days of delivery, no return shipment needed. The [Binghamton page](/eye-drops/binghamton-ny) and the [New York page](/eye-drops/state/new-york) have local details.`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `Dry heat and cold wind account for a lot of winter discomfort, but a drop isn’t the answer to everything. The label says: {stopUse} Pain, light sensitivity that’s new, or vision that stays blurry after blinking should be checked by an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Binghamton get a year?',
        a: `About 86.5 inches in a normal year at Greater Binghamton Airport, according to NOAA’s 1991 to 2020 normals. January (20.6 inches) and February (19.7) are the snowiest months.`,
      },
      {
        q: 'Is Binghamton humid?',
        a: `Mornings are humid year-round, near 88 to 89 percent in August and September in NOAA’s table. Afternoons are drier, bottoming out at 55 percent in April and May.`,
      },
      {
        q: 'Why is the Binghamton airport colder than downtown?',
        a: `Greater Binghamton Airport sits on a hilltop at about 1,610 feet, well above the river valley where downtown lies. Higher ground is usually cooler, so the airport’s readings can run colder and snowier than the city’s.`,
      },
      {
        q: 'Does Quell ship to Binghamton, NY?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Binghamton and the rest of the Triple Cities, with guest checkout and a tracking email. No delivery date is promised, so order early during the snowy months.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-asheville-nc:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003812.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003812.csv
   *   (ASHEVILLE RGNL AP, elev 645.3 m: annual precip 49.59 in; Aug 5.04 wettest,
   *   Oct 3.37 driest, Feb 3.46; annual snow 10.3 in, Jan 3.6, Dec 2.5; Jul high
   *   85.3 F; Jan high 48.9 F, low 28.6 F; 9.1 days at or above 90 F; 87.5 nights
   *   at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ASHEVILLE, NC, WBAN 03812: Apr 82/48 lowest afternoon, Mar 82/51,
   *   Nov 86/53, Oct 91/54; Aug 94/60, Sep 94/59 highest mornings;
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ASHEVILLE: Jan 3.8 highest month, Feb and Mar 3.7; Aug 2.0 lowest)
   * The station is Asheville Regional Airport in Fletcher, south of the city.
   * Elevation converted: 645.3 m is about 2,120 ft.
   */
  {
    slug: 'dry-eye-relief-asheville-nc',
    title: 'Dry eye relief in Asheville, North Carolina',
    description:
      'April afternoons in Asheville average 48 percent humidity, the driest of the year. NOAA’s mountain numbers, fall leaf trips and dry-eye habits that help.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Asheville means watching spring and fall. NOAA’s records for Asheville Regional Airport put April afternoons at 48 percent humidity, the driest of the year, and October is the driest month for rain. Winters are breezy, and mountain overlooks add wind. Wear sunglasses on the Parkway, keep heater vents off your face, take breaks from screens, and use a lubricating drop the way its label directs. An eye doctor should handle pain or vision changes.`,
      },
      { h: 'Asheville’s weather at a glance' },
      {
        p: `The city’s official weather station is Asheville Regional Airport in Fletcher, south of town, at about 645 meters, or close to 2,120 feet. NOAA’s 1991 to 2020 normals for it describe a wet, mild mountain climate with a few dry stretches:`,
      },
      {
        list: [
          `Normal yearly precipitation is 49.59 inches. August is wettest at 5.04 inches, and October driest at 3.37.`,
          `Snowfall averages 10.3 inches, most of it in January (3.6) and December (2.5).`,
          `July’s normal high is 85.3°F, and only about nine days a year reach 90°F.`,
          `About 88 nights a year fall to freezing or below, though January’s normal high is still 48.9°F.`,
        ],
      },
      { h: 'Is Asheville humid?' },
      {
        p: `In the mornings, very. NOAA’s relative humidity table lists August and September mornings at 94 percent, which matches the fog that settles in the French Broad valley on late-summer mornings. Afternoons tell a different story. Humidity bottoms out at 48 percent in April and 51 in March, and it falls to 53 to 54 percent in October and November. Those spring and fall afternoons, often sunny and breezy, are when eyes tend to feel driest outdoors.`,
      },
      { h: 'Leaf season on the Blue Ridge Parkway' },
      {
        p: `October draws crowds to the Parkway overlooks, Craggy Gardens and Mount Pisgah for the fall color, and it’s also the driest month of the year by rainfall. Overlooks at higher elevation are windier and cooler than town, and hours of driving and squinting into bright sky add up.`,
      },
      {
        list: [
          `Wear wraparound sunglasses at the overlooks; they block wind and glare at the same time.`,
          `Point the car’s vents at your chest, not your eyes, on the long drive along the ridge.`,
          `Pull over every hour or so, close your eyes for a few seconds, and blink fully a few times.`,
          `Keep your drops in a bag on the floor or in the cabin, not on a sunny dashboard.`,
        ],
      },
      { h: 'Winter wind and indoor heat' },
      {
        p: `NOAA’s wind table shows January as the station’s windiest month, with February and March close behind, while August is the calmest. A cold, breezy January day in the mountains dries the eyes on the walk from the car, and the heat inside does the rest. Older houses in Montford and West Asheville often have radiators or floor furnaces, and newer ones blow forced air. Either way, a humidifier in the bedroom and a chair moved away from the heat source help more than you’d expect. If wood smoke from a fireplace bothers you, [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers it.`,
      },
      { h: 'Rivers, trails and breweries' },
      {
        p: `Summer life in Asheville is outdoors: tubing the French Broad, hiking in Pisgah National Forest, and walking the River Arts District. Sun off the water and sunscreen sweating into the eyes cause more trouble than dry air in July and August. Wear a brimmed hat, keep sunscreen above the brow line, and rinse your face with clean water if it stings. Indoors, brewery taprooms and studios often run strong air conditioning, so sit away from the vents when you can.`,
      },
      { h: 'Using Quell in the mountains' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states these Uses: {uses}. The directions read: {directions}. On a trail, wash or sanitize your hands first and follow the panel: {tip}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car parked at a trailhead on a July afternoon can get hotter than that, so carry the bottle in a pack. The panel also cautions: {warnings}. Everything printed on the box is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Asheville' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Asheville, Black Mountain, Weaverville, Hendersonville and every other US address. You can check out without an account, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows, and no delivery date is promised, so mountain roads and storms are worth planning around. Unopened bottles can be refunded within {returnDays} days of delivery without mailing them back. See the [Asheville page](/eye-drops/asheville-nc) and the [North Carolina page](/eye-drops/state/north-carolina) for local details.`,
      },
      { h: 'Signs that call for an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness. The label draws the line here: {stopUse} Pain, sudden changes in vision, or discomfort that keeps returning should be checked by an eye doctor, who can look for the cause. The [self-check](/self-check) can help you note your symptoms first; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Asheville?',
        a: `By rainfall, October, at 3.37 inches in NOAA’s 1991 to 2020 normals for Asheville Regional Airport. By afternoon humidity, April is lowest at 48 percent.`,
      },
      {
        q: 'Does Asheville get much snow?',
        a: `Not much in town. The Asheville airport averages about 10.3 inches a year, mostly in January and December, according to NOAA’s normals. Higher elevations nearby often see more.`,
      },
      {
        q: 'Why are my eyes dry on the Blue Ridge Parkway?',
        a: `Overlooks are higher, windier and cooler than town, and October, the peak leaf month, is also Asheville’s driest month for rain. Wraparound sunglasses and regular breaks from driving help.`,
      },
      {
        q: 'Can I order Quell to Asheville, NC?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Asheville and the surrounding mountain towns, with guest checkout and a tracking email. No delivery date is promised, so order before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-wilmington-nc:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013748.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013748.csv
   *   (WILMINGTON INTL AP, NC, elev 10.1 m: annual precip 60.15 in; Sep 8.69 wettest,
   *   Aug 8.16, Jul 6.86; Apr 3.07 driest; annual snow 0.9 in; Jul high 90.0 F;
   *   Jan high 57.2 F, low 36.3 F; 44.9 days at or above 90 F; 37.2 nights at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (WILMINGTON, NC, WBAN 13748: Apr 79/49 lowest afternoon, Mar 81/52,
   *   Feb 81/53; Sep 89/62, Aug 88/64, Oct 88/56; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (WILMINGTON NC: Apr 4.1 highest month, Mar 4.0; Aug 2.9 lowest, Oct 3.0)
   * Elevation converted: 10.1 m is about 33 ft.
   */
  {
    slug: 'dry-eye-relief-wilmington-nc',
    title: 'Dry eye relief in Wilmington, North Carolina',
    description:
      'Wilmington, NC gets about 60 inches of rain a year, yet April afternoons average 49 percent humidity. NOAA’s coastal numbers and where dry eyes come from.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Wilmington, North Carolina, starts with knowing that this humid port city has a dry season. NOAA’s records for Wilmington International Airport put April afternoons at 49 percent humidity, with April also its windiest and least rainy month. The rest of the year, air conditioning does most of the drying. Shield your eyes on the beach in spring, aim AC vents away from your face, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Wilmington’s climate in NOAA’s numbers' },
      {
        p: `Wilmington International Airport sits on the north side of the city, just east of the Cape Fear River, at about 10 meters (roughly 33 feet) above sea level. NOAA’s 1991 to 2020 climate normals for the station show a warm, wet coastal year:`,
      },
      {
        list: [
          `About 60.15 inches of precipitation a year, heaviest in September (8.69 inches), August (8.16) and July (6.86).`,
          `April is the least rainy month at 3.07 inches.`,
          `Snow is rare, averaging under an inch a year.`,
          `July’s normal high is 90.0°F, and about 45 days a year reach 90°F or more.`,
          `Around 37 nights a year dip to freezing, while January highs average 57.2°F.`,
        ],
      },
      { h: 'Is Wilmington, NC humid?' },
      {
        p: `Most of the year, yes. NOAA’s relative humidity table lists August mornings at 88 percent and September at 89, with afternoons in the low 60s through late summer. Spring is the exception. April afternoons average 49 percent, March 52 and February 53, and NOAA’s wind table shows April and March as the breeziest months. A clear, gusty April day on Wrightsville Beach or Carolina Beach can feel surprisingly hard on the eyes, with sand in the wind and sun glare off the water.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the beach and the Riverwalk on windy spring days.`,
          `Sit with your back to the wind on the sand, and keep blowing sand out of your face with a hat brim.`,
          `Rinse sand off your hands before touching your eyes or opening an eye drop bottle.`,
          `At the North Carolina Azalea Festival in April, take breaks indoors between parade-route hours in the sun.`,
        ],
      },
      { h: 'Air conditioning, nine months of it' },
      {
        p: `With about 45 days a year at 90°F or warmer and humid air from May to October, Wilmington homes, offices and cars run air conditioning for much of the year. Cooled air is drier than the outdoor air it replaces, and a vent blowing across your face speeds evaporation from the tear film. Office workers in the downtown towers, nurses at the hospital, and staff in climate-controlled warehouses near the port all spend long hours in that air.`,
      },
      {
        list: [
          `Turn car vents toward your chest or the floor rather than your face.`,
          `In an office, ask to move a desk away from a ceiling diffuser if it blows on you.`,
          `Set the bedroom thermostat a few degrees higher at night, or use a ceiling fan on low instead of a strong AC blast.`,
          `Take short screen breaks; [screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
        ],
      },
      { h: 'Boating, fishing and the Cape Fear' },
      {
        p: `The Cape Fear River, the Intracoastal Waterway and the inlets draw boaters and anglers year-round. Hours on the water bring steady wind across the eyes, salt spray, and bright glare that makes people squint and blink less. Polarized wraparound sunglasses help with glare and wind together. A cap with a brim keeps spray out of the eyes, and a freshwater rinse of the face at the dock clears salt before it dries on the lashes.`,
      },
      { h: 'Hurricane season and storm cleanup' },
      {
        p: `August and September are the wettest months in NOAA’s normals, and they overlap the peak of the Atlantic hurricane season. After a storm, cleanup means dust, debris, and sometimes days without power or air conditioning. Wear safety glasses while clearing branches and debris, and keep an eye drop bottle with your storm kit, where it won’t bake in a hot car. If debris gets in your eye or your vision changes, see a doctor promptly.`,
      },
      { h: 'Students at UNCW and the winter months' },
      {
        p: `Winters are mild by most standards, but heat still runs on cool nights from November to March. UNCW students studying for December finals spend hours at laptops in heated libraries and dorm rooms, where blinking slows and the air dries out. A small humidifier, a break every so often to look across the room, and a full, deliberate blink now and then all help.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions say: {directions}. Sand and sunscreen are everywhere at the beach, so take this line seriously: {tip}.`,
      },
      {
        p: `The panel’s storage line reads: {storage}. A beach bag in the sun or a car in a summer parking lot can run hotter than that, so keep the bottle shaded or indoors. It also includes this caution: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Wilmington, NC' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Wilmington, Leland, Hampstead, Carolina Beach and every other US address. Guest checkout is available, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, and storms can slow coastal deliveries. Unopened bottles can be refunded within {returnDays} days of delivery, and they don’t need to be sent back. The [Wilmington, NC page](/eye-drops/wilmington-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have more.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Sun, salt and air conditioning explain plenty of dry, tired eyes, but not all of it. The label says: {stopUse} Pain, vision that stays blurry, or something stuck in the eye that won’t rinse out needs an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the least humid month in Wilmington, NC?',
        a: `April, with afternoon relative humidity averaging 49 percent at Wilmington International Airport in NOAA’s table. March and February follow at 52 and 53 percent.`,
      },
      {
        q: 'How much rain does Wilmington, NC get a year?',
        a: `About 60.15 inches in a normal year at Wilmington International Airport, according to NOAA’s 1991 to 2020 normals. September is the wettest month at 8.69 inches.`,
      },
      {
        q: 'Why do my eyes feel dry at the beach in the spring?',
        a: `On the North Carolina coast, spring afternoons are the least humid of the year and the windiest, according to NOAA’s Wilmington numbers. Wind and blowing sand speed evaporation from the eye, so wraparound sunglasses help.`,
      },
      {
        q: 'Does Quell ship to Wilmington, North Carolina?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Wilmington and nearby beach towns, with guest checkout and tracking by email. No delivery date is promised, so order ahead of storm season.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-grand-forks-nd:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014916.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014916.csv
   *   (GRAND FORKS INTL AP, elev 256.6 m: annual precip 21.74 in; Jun 3.77 wettest,
   *   Jan 0.49 driest, Feb 0.51; annual snow 48.4 in, Dec 12.3, Jan 9.9; Jan high
   *   15.8 F, low -3.1 F; Jul high 80.7 F; 51.1 nights at or below 0 F; 101.3 days
   *   with a high at or below 32 F; 184.7 nights at or below 32 F; 112.9 days with
   *   1 in or more of snow on the ground)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (GRAND FORKS, ND, WBAN 14916: May 80/51 lowest afternoon, Jun 84/56,
   *   Apr 82/57; Dec 81/76, Jan 77/74, Feb 80/74; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (GRAND FORKS, 199502-202312: Apr 5.1 highest month; Jul 3.7 lowest)
   * Elevation converted: 256.6 m is about 840 ft.
   */
  {
    slug: 'dry-eye-relief-grand-forks-nd',
    title: 'Dry eye relief in Grand Forks, North Dakota',
    description:
      'Grand Forks averages 51 nights a year at or below zero and over 100 days below freezing. NOAA’s Red River Valley numbers and how to ease winter dry eyes.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Grand Forks is mostly a winter project. NOAA’s records for Grand Forks International Airport count about 101 days a year that never get above freezing and 51 nights at or below zero, so indoor heat runs half the year. Spring brings the windiest month and the driest afternoons. Humidify your home, wear goggles in blowing snow, keep vents off your face, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Grand Forks by the numbers' },
      {
        p: `Grand Forks International Airport lies west of the city on the flat floor of the Red River Valley, at about 257 meters, or roughly 840 feet. NOAA’s 1991 to 2020 normals for the station describe long, hard winters and short summers:`,
      },
      {
        list: [
          `January’s normal high is 15.8°F and its normal low is -3.1°F.`,
          `About 51 nights a year fall to 0°F or below, and about 101 days stay at or below freezing.`,
          `Snow cover of at least an inch lasts about 113 days a year.`,
          `Normal snowfall is 48.4 inches, with December (12.3) and January (9.9) the snowiest months.`,
          `Yearly precipitation is 21.74 inches. January (0.49) and February (0.51) are driest, and June (3.77) is wettest.`,
        ],
      },
      { h: 'Grand Forks winter: why indoor air gets so dry' },
      {
        p: `On paper, the outdoor air in a Grand Forks winter is humid: NOAA’s table shows December afternoons at 76 percent and January at 74. But air at zero degrees holds almost no water. When a furnace warms it to room temperature, its relative humidity drops to a small fraction of what it was outside, which is why lips crack, static builds, and eyes sting in a heated house. Six months of that wears on the tear film, especially in bedrooms where the heat runs all night and in offices with forced air.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it on the schedule its maker gives.`,
          `Turn floor registers so warm air doesn’t blow across your bed or desk.`,
          `Keep the car’s heater on the windshield and floor settings instead of the face vents.`,
          `Lower the thermostat slightly at night if your eyes feel scratchy in the morning.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ways to make heated rooms easier on the eyes.`,
      },
      { h: 'Blowing snow on open prairie' },
      {
        p: `The Red River Valley is very flat, with few hills or trees to slow the wind across open fields. Ground blizzards can whip loose snow into the air even on a clear day. Cold wind dries the eyes and makes them water at the same time, and bright sun on snow adds glare. Ski goggles, a scarf pulled up over the cheeks, and a hood with a brim all help on walks across campus or while clearing the driveway.`,
      },
      { h: 'Hockey nights and long screen days' },
      {
        p: `UND hockey at the Ralph Engelstad Arena means hours of watching a fast puck in a cool arena, where people blink less while following the play. On campus, students in aviation, engineering and other programs spend long hours in front of screens and flight simulators. Look away from the ice or the screen for a few seconds between plays or tasks, blink fully, and keep the screen slightly below eye level. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has a workday routine.`,
      },
      { h: 'Spring wind, the river and the driest afternoons' },
      {
        p: `NOAA’s wind table shows April as the station’s windiest month, and the driest afternoons come right after: 51 percent humidity in May and 56 in June. That’s planting season across the valley, when dry topsoil can lift into the air on windy days, and when people return to the Greenway along the Red River and Red Lake River. Sunglasses that wrap around the sides and a cap with a brim block wind and dust.`,
      },
      { h: 'Sugar beet harvest and fall dust' },
      {
        p: `In the fall, the Red River Valley’s sugar beet harvest fills the roads with trucks and the fields with dust. Workers in the piling grounds and truck cabs spend long days in dusty, windy air as the temperatures drop. Keep cab filters clean, run the air on recirculate in dusty conditions, and rinse dust from the face and lashes with clean water at the end of the shift.`,
      },
      { h: 'What Quell’s Drug Facts panel covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists its Uses as: {uses}. Directions: {directions}. With mittens on and off all winter, remember this: {tip}.`,
      },
      {
        p: `Storage is the line people in Grand Forks should read twice: {storage}. A bottle left in a car on a below-zero night will get far colder than that, so keep it inside and carry it in an inner pocket. The panel also cautions: {warnings}. Our [Drug Facts page](/drug-facts) has every section.`,
      },
      { h: 'Ordering Quell to Grand Forks' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Grand Forks, East Grand Forks, Grand Forks Air Force Base and every other US address. Guest checkout works without an account. Shipping is {shipping}, or free on {freeBottles} or more bottles. Tracking comes by email, but there’s no promised delivery date, and winter storms can slow things down, so order well before you run out. Unopened bottles are refundable within {returnDays} days of delivery with no need to return them. The [Grand Forks page](/eye-drops/grand-forks-nd) and the [North Dakota page](/eye-drops/state/north-dakota) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Cold, dry air explains a lot, but a drop has limits. The label puts it plainly: {stopUse} Eye pain after time in the wind, sudden vision changes, or discomfort that won’t settle down after you warm up deserves an eye doctor’s attention. The [self-check](/self-check) can help you describe symptoms before a visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Grand Forks get in the winter?',
        a: `January’s normal low at Grand Forks International Airport is -3.1°F, and about 51 nights a year reach zero or below, according to NOAA’s 1991 to 2020 normals. January’s normal high is 15.8°F.`,
      },
      {
        q: 'How much snow does Grand Forks get?',
        a: `About 48.4 inches in a normal year, according to NOAA’s normals for the Grand Forks airport. December averages 12.3 inches and January 9.9, and snow usually stays on the ground about 113 days.`,
      },
      {
        q: 'Why are my eyes so dry in a North Dakota winter?',
        a: `Air near zero degrees holds very little water, so once it’s heated indoors its relative humidity drops sharply. Months of furnace heat dry the tear film, and a bedroom humidifier and vents aimed away from your face can help.`,
      },
      {
        q: 'Does Quell ship to Grand Forks, ND?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Grand Forks and the surrounding area, including the air base, with guest checkout and tracking by email. No delivery date is promised, so order early in winter.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-dayton-oh:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093815.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093815.csv
   *   (DAYTON INTL AP, elev 304.8 m: annual precip 41.33 in; May 4.51 wettest,
   *   Apr 4.46; Feb 2.35 driest; annual snow 25.0 in, Jan 8.3, Feb 6.6, Dec 4.8;
   *   Jul high 85.9 F; Jan high 37.1 F, low 21.8 F; 15.5 days at or above 90 F;
   *   109.9 nights at or below 32 F; 32.7 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (DAYTON, OH, WBAN 93815: Apr 76/54 and Sep 86/54 lowest afternoons,
   *   May-Aug and Oct 55; Dec 82/71, Jan 80/70; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (DAYTON: Jan 5.0 highest month; Aug 3.1 lowest)
   * The station is Dayton International Airport, north of the city near Vandalia.
   * Elevation converted: 304.8 m is about 1,000 ft.
   */
  {
    slug: 'dry-eye-relief-dayton-oh',
    title: 'Dry eye relief in Dayton, Ohio',
    description:
      'Dayton’s windiest month is January, and April and September afternoons average 54 percent humidity. NOAA’s numbers, air show days and dry-eye habits.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Dayton follows the Miami Valley’s seasons. NOAA’s records for Dayton International Airport show January as the windiest month, so winter brings cold wind outside and furnace air inside. April and September have the driest afternoons, at 54 percent humidity. Keep heat and AC vents off your face, wear sunglasses on windy days, rest your eyes at screens, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Dayton’s weather, from NOAA’s normals' },
      {
        p: `NOAA’s official Dayton station is Dayton International Airport, north of the city near Vandalia, at about 305 meters, or right around 1,000 feet. The 1991 to 2020 normals there describe four distinct seasons:`,
      },
      {
        list: [
          `About 41.33 inches of precipitation a year. May (4.51 inches) and April (4.46) are wettest, and February (2.35) is driest.`,
          `Normal snowfall of 25.0 inches, mostly in January (8.3), February (6.6) and December (4.8).`,
          `About 110 nights a year fall to freezing, and about 33 days never climb above it.`,
          `July’s normal high is 85.9°F, with about 16 days a year at 90°F or warmer.`,
        ],
      },
      { h: 'Winter wind across the Miami Valley' },
      {
        p: `NOAA’s wind table ranks January as Dayton’s windiest month and August as its calmest. A January walk across a parking lot at a hospital, a campus or the Dayton Mall puts cold wind straight into your eyes, and the January normal high of 37.1°F means the furnace runs for most of the day at home. Outdoor afternoon humidity in January averages 70 percent, but once that cold air is heated indoors, its relative humidity drops sharply, and the tear film dries faster.`,
      },
      {
        list: [
          `Wear glasses or sunglasses with wide temples on windy days to block the wind from the side.`,
          `Point the car’s heat at the windshield and floor on the commute down I-75 or across US-35.`,
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Sit away from floor registers and space heaters at your desk.`,
        ],
      },
      { h: 'Air museum days and the air show' },
      {
        p: `Dayton calls itself the birthplace of aviation, and plenty of visitors spend a full day walking the hangars of the National Museum of the US Air Force at Wright-Patterson Air Force Base. Big indoor halls with climate control and hours of reading exhibit panels can leave the eyes tired and dry. The Dayton Air Show at the airport in summer is the opposite problem: hours outdoors, looking up into bright sky, often with wind across the open airfield.`,
      },
      {
        list: [
          `At the museum, take a seat every hour or so and close your eyes for a few seconds.`,
          `At the air show, wear wraparound sunglasses and a brimmed hat, and look down at the ground between flyovers.`,
          `Keep your eye drop bottle in a bag in the shade, not in a car on a summer lot.`,
        ],
      },
      { h: 'Spring and fall: Dayton’s driest afternoons' },
      {
        p: `In NOAA’s relative humidity table, Dayton’s afternoons are lowest in April and September, both at 54 percent, with most of the months in between at 55. Spring and early fall are when people bike the river trails along the Great Miami, Stillwater and Mad rivers, visit the Five Rivers MetroParks, and work in the yard. A dry breeze and sun glare off the water can both irritate the eyes. Sunglasses and a short rest indoors help on long days outside.`,
      },
      { h: 'Office work, hospitals and the long shift' },
      {
        p: `Many Dayton jobs keep people inside under climate control: the base, the hospitals, the University of Dayton and Wright State, and offices and plants across the region. Hours at a monitor slow blinking, and forced-air heat or air conditioning dries the room. Set the screen slightly below eye level, look away every few minutes, and finish every blink. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers a workday routine, and [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) helps if you work nights.`,
      },
      { h: 'How to use Quell, according to its label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives these Uses: {uses}. Directions: {directions}. Wash your hands first and keep the tip clean: {tip}.`,
      },
      {
        p: `The label’s storage line reads: {storage}. A car at the air show or the ballpark in July, or one parked outside on a January night, can go outside that range, so bring the bottle with you. The panel also says: {warnings}. Our [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering Quell in Dayton' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Dayton, Kettering, Beavercreek, Huber Heights, Centerville and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so reorder before you run out. Unopened bottles can be refunded within {returnDays} days of delivery, with no need to send them back. For local information, see the [Dayton page](/eye-drops/dayton-oh) and the [Ohio page](/eye-drops/state/ohio).`,
      },
      { h: 'When an eye doctor is the next step' },
      {
        p: `Wind, heat and screens explain plenty of dry, tired eyes. Some symptoms don’t fit that picture, and the label tells you when to stop: {stopUse} Eye pain, sudden blurry vision, or dryness that keeps coming back despite good habits should be checked by an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Dayton, Ohio?',
        a: `January, according to NOAA’s wind speed table for Dayton International Airport. August is the calmest month at that station.`,
      },
      {
        q: 'How much snow does Dayton get a year?',
        a: `About 25 inches in a normal year at Dayton International Airport, according to NOAA’s 1991 to 2020 normals. January is the snowiest month, at 8.3 inches.`,
      },
      {
        q: 'Is Dayton humid in the summer?',
        a: `Mornings are humid, with August mornings at 85 percent relative humidity in NOAA’s table. Afternoons hover around 55 percent from May through August.`,
      },
      {
        q: 'Can I order Quell to Dayton, OH?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Dayton and its suburbs, with guest checkout and a tracking email. No delivery date is promised, so order before your bottle runs low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-salem-or:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024232.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024232.csv
   *   (SALEM MCNARY FLD, elev 62.5 m: annual precip 40.08 in; Dec 6.97 wettest,
   *   Jan 6.08, Nov 5.95; Jul 0.25 driest, Aug 0.39; Jul high 83.5 F, Aug 83.6 F;
   *   Jan high 48.4 F; 18.3 days at or above 90 F; 49.4 nights at or below 32 F;
   *   91.5 days with 0.10 in or more of precipitation. Snow normals are not in the
   *   file, so no snowfall figure is used.)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SALEM, OR, WBAN 24232: Jul 80/39 and Aug 80/39 lowest afternoons, Sep 82/44,
   *   Jun 82/49; Dec 88/81, Nov 88/77, Jan 87/77; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SALEM: Mar 3.2 highest month; Sep and Oct 2.5 lowest)
   * The station is McNary Field (Salem Municipal Airport), in southeast Salem.
   * Elevation converted: 62.5 m is about 205 ft.
   */
  {
    slug: 'dry-eye-relief-salem-or',
    title: 'Dry eye relief in Salem, Oregon',
    description:
      'Salem gets just 0.25 inches of rain in July, and summer afternoons average 39 percent humidity. NOAA’s Willamette Valley numbers and tips for dry eyes.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Salem means planning for a dry summer in a rainy place. NOAA’s records for McNary Field show July with only 0.25 inches of rain and July and August afternoons averaging 39 percent humidity. Winters are wet and gray outside, but heated rooms dry the eyes. Wear sunglasses in the field and on the river, keep vents off your face, take screen breaks, and use a lubricating drop as its label directs. An eye doctor should check pain or vision changes.`,
      },
      { h: 'Salem’s climate in numbers' },
      {
        p: `Salem’s official weather station is McNary Field, the city’s municipal airport in southeast Salem, at about 62 meters, or roughly 205 feet. NOAA’s 1991 to 2020 normals for the station describe the classic Willamette Valley pattern of wet winters and very dry summers:`,
      },
      {
        list: [
          `About 40.08 inches of precipitation a year, with December (6.97 inches), January (6.08) and November (5.95) the wettest months.`,
          `July is the driest at 0.25 inches, and August brings only 0.39.`,
          `About 92 days a year bring a tenth of an inch of rain or more, nearly all of them outside summer.`,
          `Normal highs reach 83.5°F in July and 83.6°F in August, with about 18 days a year at 90°F or above.`,
          `Winters are mild, with January highs averaging 48.4°F and about 49 nights a year at freezing or below.`,
        ],
      },
      { h: 'Is Salem, Oregon humid?' },
      {
        p: `It depends on the month and the hour. NOAA’s relative humidity table shows mornings at 80 to 88 percent all year, with valley fog common in the cool months. Afternoons swing widely: 81 percent in December and 77 in November and January, but just 39 percent in July and August and 44 in September. That summer swing, from damp mornings to dry afternoons, is what catches people off guard.`,
      },
      { h: 'Dry summer days in the Willamette Valley' },
      {
        p: `Summer is when Salem lives outdoors: Riverfront Park, the Oregon State Fair in late August, farm stands along the valley roads, and long bike rides through the countryside. Field work and harvest put dust into the air, and in some summers wildfire smoke drifts into the valley. Dry afternoon air, dust and smoke together are hard on the tear film.`,
      },
      {
        list: [
          `Plan long outdoor work or exercise for the morning, when humidity is about twice the afternoon level.`,
          `Wear wraparound sunglasses at the fairgrounds and on dusty farm roads.`,
          `On smoky days, stay indoors with windows closed when you can, and run the car’s air on recirculate.`,
          `Rinse dust from your face and lashes with clean water when you come in.`,
        ],
      },
      { h: 'Rainy winters and dry indoor air' },
      {
        p: `From November through January, Salem’s afternoons average 77 to 81 percent humidity outdoors, and the rain is steady. Yet indoors, the heat runs for months against a damp chill. A heat pump, a gas furnace or baseboard heaters all warm the air without adding water, and that lowers indoor humidity. Many people notice their eyes feel better on a rainy walk than at a desk or in front of a heater. Try a small humidifier in the bedroom, point heat registers away from your seat, and give your eyes regular screen breaks. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas.`,
      },
      { h: 'Spring wind and the Capitol Mall' },
      {
        p: `NOAA’s wind table shows March as the station’s breeziest month, while September and October are the calmest. Spring is also when the cherry trees bloom on the Capitol grounds and people come out to walk the Capitol Mall and the Willamette University campus. A breezy spring day can dry the eyes faster than people expect after a damp winter. Sunglasses and a hat help.`,
      },
      { h: 'State offices, screens and long workdays' },
      {
        p: `As Oregon’s capital, Salem has thousands of state workers spending their days at screens in climate-controlled offices. Hours at a monitor reduce blinking, and office HVAC adds air movement. Lower the monitor slightly, look away every few minutes, and blink fully. If your desk sits under a ceiling vent, ask about moving it. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why screens and dry eyes go together.`,
      },
      { h: 'Quell’s label: what it says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists these Uses: {uses}. The directions read: {directions}. Keep the dropper clean: {tip}.`,
      },
      {
        p: `The panel’s storage line reads: {storage}. A car at the State Fair in August can get much hotter than that, so carry the bottle in a bag in the shade. The label also cautions: {warnings}. Everything on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Salem' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Salem, Keizer, Silverton, Dallas, Stayton and every other US address. Guest checkout is available, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. See the [Salem page](/eye-drops/salem-or) and the [Oregon page](/eye-drops/state/oregon) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry air, dust and smoke can make the eyes uncomfortable, but lasting or severe symptoms are a different matter. The label says: {stopUse} Pain, sudden blurry vision, or eyes that keep bothering you after the smoke clears should be seen by an eye doctor. The [self-check](/self-check) can help you organize your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Salem, Oregon?',
        a: `July, with only 0.25 inches of precipitation in a normal year at McNary Field, according to NOAA’s 1991 to 2020 normals. August is close behind at 0.39 inches.`,
      },
      {
        q: 'How humid is Salem in the summer?',
        a: `Afternoons are dry: NOAA’s table lists July and August afternoons at 39 percent relative humidity in Salem. Mornings are much more humid, around 80 percent.`,
      },
      {
        q: 'Why are my eyes dry in the winter if it rains so much in Salem?',
        a: `Outdoor air is damp, but heating it indoors lowers its relative humidity, and the heat runs for months. A bedroom humidifier and registers pointed away from your seat can help.`,
      },
      {
        q: 'Does Quell ship to Salem, OR?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Salem and nearby towns in the Willamette Valley, with guest checkout and tracking by email. No delivery date is promised, so order ahead.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-radiator-heat',
    title: 'Dry eyes from radiator heat',
    description:
      'Steam and hot-water radiators heat cold air without adding moisture, and older buildings often run hot. How to set up a radiator-heated room for drier eyes.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Radiator heat dries your eyes because it warms cold winter air without adding any water, so the room’s relative humidity drops and the tear film evaporates faster. Older steam systems often overheat apartments, making it worse. Sit and sleep away from the radiator, turn its valve down if your building allows, add moisture with a humidifier, and use a lubricating drop as its label directs. Pain or vision changes call for an eye doctor.`,
      },
      { h: 'Does radiator heat dry the air?' },
      {
        p: `Yes, though not in the way many people think. A radiator doesn’t pull water out of the air. The dryness comes from temperature. Cold outdoor air holds very little water, and when it leaks in around windows and gets warmed to 70°F or more, the same small amount of water is spread across air that could hold far more. Relative humidity, the number that matters for how fast moisture leaves your eyes and skin, falls sharply. The hotter the room, the lower it goes.`,
      },
      {
        p: `This happens with every heating system. Radiators get singled out because of where they’re found: older apartment buildings, brownstones, row houses and dorms, many of them heated by a central boiler you don’t control. When the boiler runs hot, the whole building runs hot, and tenants crack windows to cool off, letting in more cold, dry air to be heated in turn.`,
      },
      { h: 'Steam radiators vs. hot-water radiators' },
      {
        p: `Both look similar, but they behave differently, and the difference matters for how dry a room feels.`,
      },
      {
        list: [
          `Steam radiators are fed by a boiler that turns water into steam. They heat up fast and get very hot, then cool down as the boiler cycles. The air vent on the side releases air so steam can enter; the hissing you hear is that air, not a meaningful amount of moisture.`,
          `Hot-water radiators, sometimes called hydronic, circulate heated water. They stay warm more steadily and usually don’t reach steam temperatures.`,
          `Baseboard hydronic heat works like hot-water radiators, spread along the bottom of a wall.`,
        ],
      },
      {
        p: `With steam, the room often swings between too hot and comfortable. Those overheated stretches drive relative humidity lowest, and they tend to happen at night and early morning, when buildings fire up the boiler. If your eyes feel worst first thing in the morning, that’s a likely reason.`,
      },
      { h: 'Radiator heat vs. forced air' },
      {
        p: `Forced-air furnaces blow heated air through vents, and moving air across the face speeds evaporation from the eye. Radiators heat mostly by warming the air around them, which rises and circulates more gently. So a radiator-heated room may feel less drafty, but if it’s kept hotter, the air can still end up drier. Our guides to [winter heating](/guides/winter-heating-and-dry-eyes) and [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) cover the other systems.`,
      },
      { h: 'How to set up a radiator-heated room' },
      {
        list: [
          `Move your bed, desk and reading chair away from the radiator. The air directly above one is the warmest and driest in the room.`,
          `Check for a valve. Many radiators have a knob at the bottom, and some have thermostatic valves with numbered settings. If yours is adjustable and your building allows it, turn it down instead of opening a window.`,
          `Steam radiator valves generally should be fully open or fully closed, not halfway. If you’re unsure how yours works, ask your landlord or building super.`,
          `Run a humidifier in the bedroom and clean it on the schedule its maker gives. A humidifier with a built-in humidity reading lets you see what the room is actually doing.`,
          `Keep the bedroom door closed so the humidifier isn’t trying to work on the whole apartment.`,
          `Use your eyes kindly at night: dim screens, and don’t read in bed for hours right next to the radiator.`,
        ],
      },
      { h: 'What about putting a pan of water on the radiator?' },
      {
        p: `Setting a pan or a decorative humidifier tray of water on or near a radiator is a long-standing home practice in older buildings, and some radiator covers are built with a shelf for one. Water does evaporate from it into the room. How much difference it makes depends on the size of the pan, the room and how hot the radiator runs. If you try it, keep the water clean and refilled, use a container that can handle the heat, and keep it where children and pets can’t knock it over. A steam radiator can get hot enough to burn, so be careful when filling it.`,
      },
      { h: 'Blinking, screens and radiator rooms' },
      {
        p: `Indoor winter days mean more time on phones, TVs and laptops. Looking at screens slows blinking, and in dry radiator heat that means the tear film thins between blinks. Look away from the screen every so often and blink fully a few times. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the connection.`,
      },
      { h: 'Using Quell in heated rooms' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. The directions say: {directions}. Wash your hands before using it, and follow this line: {tip}.`,
      },
      {
        p: `Don’t keep the bottle on the radiator, a radiator cover or a windowsill above one. The label’s storage line is {storage}, and a radiator surface can get hotter than that. A nightstand drawer or a shelf across the room is a better spot. The full panel is on our [Drug Facts page](/drug-facts), and [Quell is available to order here](/#buy).`,
      },
      { h: 'When dryness is more than the heat' },
      {
        p: `If your eyes stay dry after you’ve fixed the room, or if you notice pain or changes in your vision, the heat isn’t the whole story. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that call for an appointment.`,
      },
    ],
    faq: [
      {
        q: 'Is radiator heat drier than forced air?',
        a: `Not by itself. Any heat lowers relative humidity when it warms cold air. Forced air adds a draft that dries the eyes, while radiator rooms often run hotter, which can leave the air just as dry.`,
      },
      {
        q: 'Should I put a bowl of water on my radiator?',
        a: `It’s a common practice in older buildings, and some water does evaporate into the room. How much it helps varies, so keep the water clean, use a heat-safe container, and keep it out of reach of children and pets.`,
      },
      {
        q: 'Why is my apartment so hot with radiators?',
        a: `Many older buildings run a central boiler that heats every unit at once, so you may not control the temperature. If your radiator has a valve and your building allows it, turning it down is better than opening a window.`,
      },
      {
        q: 'Where should I keep eye drops in a room with a radiator?',
        a: `Away from it. Quell’s label gives a storage range, and a radiator or its cover can get hotter than that. A drawer or shelf across the room works well.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-winter-bonfire',
    title: 'Dry eyes at a winter bonfire',
    description:
      'Smoke, cold air, wind and a long stare into the flames all dry the eyes at a winter bonfire. Where to stand, what to wear, and when to use drops.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `A winter bonfire dries your eyes in four ways at once: smoke irritates them, cold air and wind speed evaporation from the tear film, radiant heat dries the face, and staring into the flames slows blinking. Stand upwind and a few steps back, wear glasses, look away from the fire now and then, and step out of the smoke when it shifts. A lubricating drop, used as its label directs, can help afterward.`,
      },
      { h: 'Why does bonfire smoke hurt your eyes?' },
      {
        p: `Wood smoke is a mix of fine particles and gases released as wood burns. When it drifts across your face, those particles land on the surface of the eye and irritate it, and the eye responds by stinging and watering. Damp or green wood, leaves, and anything that isn’t clean, dry firewood make more smoke. Painted or stained wood, pallets, and trash shouldn’t go in a fire at all.`,
      },
      {
        p: `Watery eyes around a fire don’t mean the eyes are well lubricated. Tears that flood the eyes in response to smoke are mostly water and run off fast; once you walk away from the fire into cold, dry air, the eyes can feel drier than before.`,
      },
      { h: 'Cold air, wind and the heat of the fire' },
      {
        p: `A bonfire night stacks up conditions that each dry the tear film on their own. Cold winter air carries little moisture. Wind across an open field or a backyard speeds evaporation. And the fire itself throws radiant heat at your face, so the front of you warms and dries while your back stays cold. People tend to stand close to stay warm, which puts their eyes right in the heat and closer to the smoke.`,
      },
      { h: 'Staring into the flames' },
      {
        p: `Fire is hypnotic. People watch it for long stretches without looking away, and like a screen, a fixed gaze slows the blink rate. Fewer blinks mean the tear film isn’t spread as often over the eye’s surface. In dry, smoky air, that adds up quickly.`,
      },
      {
        list: [
          `Look away from the fire every few minutes, toward the dark, and blink slowly a few times.`,
          `Talk with people across the circle instead of watching the flames the whole time.`,
          `Close your eyes for a few seconds when smoke rolls toward you, and turn your head.`,
        ],
      },
      { h: 'How to keep smoke out of your eyes at a bonfire' },
      {
        list: [
          `Check the wind before you pick a spot, and stand or sit upwind of the fire.`,
          `Stay a few steps back. You’ll still feel the heat without your face taking the full blast.`,
          `When the wind shifts, move. Smoke doesn’t follow anyone in particular; it goes where the air moves it.`,
          `Wear glasses or close-fitting sunglasses with wide temples, which deflect some of the smoke and wind.`,
          `Burn only clean, dry, seasoned firewood to keep the smoke down.`,
          `Keep a hat with a brim on; it blocks some of the heat and stray ash.`,
        ],
      },
      { h: 'Homecoming, holidays and backyard fire pits' },
      {
        p: `Winter bonfires come in many forms: a school homecoming bonfire, a New Year’s Eve party around a fire pit, a solstice gathering, or a farm field burn pile turned into a party. They often run for hours. A short visit is easy on the eyes, but a whole evening of smoke, cold and heat needs a plan. Take breaks indoors or in a warm car, and come back to a different side of the fire. If you’re heading out for several nights in a row, our guide to [dry eyes on a winter camping trip](/guides/dry-eyes-on-a-winter-camping-trip) covers more.`,
      },
      { h: 'After the bonfire' },
      {
        p: `Smoke and ash can cling to the face, eyebrows and lashes. When you get home, wash your face with clean, lukewarm water, and keep your hands away from your eyes until you do. If your clothes and hair smell strongly of smoke, change and wash up before bed so you’re not sleeping in it. Don’t sleep with your face close to a heater vent after a night out in the cold.`,
      },
      { h: 'Using Quell after a night by the fire' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. The directions read: {directions}. Ash and dirt get on the hands around a fire, so wash first, and follow the panel: {tip}.`,
      },
      {
        p: `Don’t leave the bottle in a car on a freezing night or set it near the fire. The label says: {storage}. A jacket’s inner pocket keeps it closer to that range. The label also includes this caution: {warnings}. The full panel is on our [Drug Facts page](/drug-facts), and our [fireplaces and candles guide](/guides/fireplaces-candles-and-dry-eyes) covers indoor fires.`,
      },
      { h: 'When to see a doctor after smoke exposure' },
      {
        p: `Stinging that eases once you’re out of the smoke is common. Some symptoms aren’t. Ash or a spark that gets into the eye, pain that doesn’t fade, light sensitivity, or blurry vision that stays need prompt medical care. The label’s rule is {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list.`,
      },
    ],
    faq: [
      {
        q: 'Why does bonfire smoke burn my eyes?',
        a: `Wood smoke carries fine particles and gases that irritate the surface of the eye. Damp wood and leaves make more smoke, so dry firewood and standing upwind help.`,
      },
      {
        q: 'How do I get smoke out of my eyes after a bonfire?',
        a: `Move away from the smoke, close your eyes for a moment, and wash your face with clean water once your hands are clean. If pain or blurred vision lasts, or ash got into the eye, see a doctor.`,
      },
      {
        q: 'Why does smoke always blow toward me at a bonfire?',
        a: `It only feels that way. Smoke follows the wind, which shifts around a fire as warm air rises and cooler air rushes in. Moving to the upwind side when it changes is the fix.`,
      },
      {
        q: 'Should I wear glasses at a bonfire?',
        a: `Glasses or close-fitting sunglasses can deflect some smoke, ash and wind from your eyes. Sitting upwind and a few steps back from the flames helps too.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-a-movie-theater',
    title: 'Dry eyes in a movie theater',
    description:
      'A dark room, a fixed stare at a bright screen, cool air and a long runtime all dry the eyes at the movies. When to use drops and how to blink more.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Eyes get dry in a movie theater because you blink less while watching a bright screen in the dark, the air conditioning keeps the room cool and dry, and long runtimes stretch it out. If you use lubricating drops, put them in before the previews while the lights are up, sit away from ceiling vents, and look away from the screen during slow scenes. See an eye doctor for pain or changes in vision.`,
      },
      { h: 'Why do my eyes get dry watching a movie?' },
      {
        p: `Watching a film is concentrated screen time. Your eyes follow action on a huge, bright screen, and that kind of focus slows blinking, just as it does at a computer or phone. Each blink spreads the tear film across the eye. When the gap between blinks grows, the surface has more time to dry out. A two-and-a-half-hour feature means a long stretch of that.`,
      },
      {
        p: `The room adds to it. Theaters are cooled to stay comfortable when full of people, and air conditioning makes the air drier. A ceiling vent above your row can push air straight down across your face.`,
      },
      { h: 'Where to sit for drier eyes' },
      {
        list: [
          `Look up when you find your seat. If a vent sits right overhead, move a few seats over.`,
          `Rows near the middle or back put the screen lower in your field of view. Looking straight ahead or slightly down lets the eyelids cover more of the eye than looking up from the front rows.`,
          `If you get cold easily, bring a light jacket instead of sitting near a warm exit corridor with drafts.`,
        ],
      },
      { h: 'When to put in eye drops at the movies' },
      {
        p: `The easiest time is before the film, while the lights are still up. Fumbling with a bottle in the dark is how tips touch fingers and armrests.`,
      },
      {
        list: [
          `Wash or sanitize your hands before you head into the theater; popcorn butter and salt don’t belong anywhere near the eyes.`,
          `Put drops in after you’re seated and before the previews end.`,
          `If you need to use them during the film, do it during a quiet scene, with the bottle out already, or step out to the restroom and use the light there.`,
          `Cap the bottle firmly and keep it in a pocket, not loose on the seat or cup holder.`,
        ],
      },
      { h: 'Long movies and blink breaks' },
      {
        p: `There’s no pause button in a theater, but there are natural breaks. During the credits of a preview, a slow scene or a title card, close your eyes for a couple of seconds and blink fully a few times. Partial blinks, where the lids don’t quite meet, are common during screen watching. Looking at the edge of the screen or the exit sign for a moment also gives your eyes a change of focus. Some long films still have intermissions; use them to stand, stretch and blink.`,
      },
      { h: '3D, IMAX and bright screens' },
      {
        p: `Large-format and 3D screenings don’t change the basics. A big screen fills more of your view and pulls your attention harder, and 3D glasses sit close to the eyes. If you wear prescription glasses, wearing 3D glasses on top of them can feel awkward. Take the 3D glasses off between scenes and blink. If your eyes ache after every 3D movie, mention it to your eye doctor rather than guessing at the cause.`,
      },
      { h: 'Home theaters and streaming nights' },
      {
        p: `The same pattern happens on the couch: a dark room, a bright TV and a whole season in one sitting. Turn on a lamp behind the TV to soften the contrast, pause between episodes, and move the couch away from heating or AC vents. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why screens slow blinking, and [holiday screen time](/guides/holiday-screen-time-and-dry-eyes) covers binge-watching season.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists these Uses: {uses}. Directions: {directions}. A darkened theater makes this line from the label especially worth following: {tip}.`,
      },
      {
        p: `The label doesn’t give directions for using Quell with contact lenses or alongside other eye drops. If either applies to you, ask your eye doctor or pharmacist. The storage line reads: {storage}, so don’t leave the bottle in a hot car during a summer matinee. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than movie-night dryness' },
      {
        p: `Dryness that fades by the time you reach the parking lot is common. Symptoms that last are different. The label says: {stopUse} Headaches, eye pain, or blurry vision that doesn’t clear after a movie are worth raising with an eye doctor. The [self-check](/self-check) can help you note your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can I use eye drops during a movie?',
        a: `Yes, if the label’s directions allow it, but it’s easier before the film while the lights are up. In the dark it’s harder to keep the tip from touching anything, so step out to a lit area if you need to use them mid-film.`,
      },
      {
        q: 'Why do my eyes hurt after watching a movie in theaters?',
        a: `Long stretches of focused watching slow your blink rate, and theater air conditioning dries the air. Taking blink breaks during slow scenes and sitting away from vents can help, and lasting pain should be checked by an eye doctor.`,
      },
      {
        q: 'Where should I sit in a movie theater if my eyes get dry?',
        a: `Away from overhead vents, and far enough back that you look straight ahead or slightly down at the screen. Looking up from the front rows leaves more of the eye exposed to the air.`,
      },
      {
        q: 'Do 3D glasses make your eyes dry?',
        a: `The glasses themselves aren’t the main issue. A big, bright screen and a long runtime slow blinking. Taking them off between scenes and blinking fully a few times helps.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-as-a-new-parent',
    title: 'Dry eyes as a new parent',
    description:
      'Short sleep, night feeds by phone light and long days indoors leave many new parents with dry, tired eyes. Small fixes, and where to keep drops.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `New parents often get dry, gritty eyes from broken sleep, long nights staring at a phone during feeds, and days spent in heated or air-conditioned rooms. Fewer hours with the eyes closed and less blinking at screens both leave the tear film thinner. Dim the phone or skip it at night, blink deliberately, run a humidifier, and if you use a lubricating drop, follow its label and store it out of reach. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Why do new parents get dry eyes?' },
      {
        p: `Sleep is when the eyes get their longest break from the air. With lids closed for hours, the tear film doesn’t evaporate the way it does when you’re awake. Waking every two or three hours for feeds and diaper changes cuts that rest into short pieces, and many parents feel it as scratchy, heavy eyes by mid-morning.`,
      },
      {
        p: `The rest of the day often adds to it: long hours indoors with the heat or air conditioning running, screens for checking feeding apps and messages, and late nights catching up on shows once the baby is down. Each one nudges the tear film toward drying out.`,
      },
      { h: 'Night feeds and phone light' },
      {
        p: `A phone is the easiest way to stay awake during a 3 a.m. feed. In a dark room, though, people tend to hold it close, stare without blinking much, and look at a bright screen against black surroundings. That combination tends to show up as dry, tired eyes the next morning.`,
      },
      {
        list: [
          `Turn the brightness all the way down and use dark mode, or set a night schedule on the phone.`,
          `Keep a small, dim lamp on instead of feeding in total darkness with only the phone lit.`,
          `Try audio instead: a podcast or audiobook keeps you awake without a screen.`,
          `Every few minutes, look away and close your eyes for a few seconds. A full blink does more than a half blink.`,
        ],
      },
      {
        p: `[Dry eyes from looking at your phone in bed](/guides/dry-eyes-from-looking-at-your-phone-in-bed) goes deeper into phone habits after dark.`,
      },
      { h: 'Your nursery and bedroom air' },
      {
        p: `Many parents keep the nursery and their own bedroom warm in winter, and that heated air holds less moisture relative to its temperature. A humidifier in your bedroom can make the air more comfortable for your eyes. Clean it as its maker directs, and follow your pediatrician’s guidance for anything in the baby’s room. Point heating vents and fans away from where you sit during feeds, so air isn’t blowing across your face for half an hour at a time.`,
      },
      { h: 'Daytime habits that help tired eyes' },
      {
        list: [
          `Sleep when you can, even for a short nap. Closed eyes rest the tear film.`,
          `Step outside for a walk with the stroller when the weather allows, and wear sunglasses in the wind.`,
          `Look across the room or out a window often when using a laptop or phone.`,
          `Keep screens slightly below eye level so your lids cover more of the eye.`,
          `Rub your eyes less. Tired eyes itch, but rubbing doesn’t add moisture and brings hands to the eyes.`,
        ],
      },
      { h: 'Keeping eye drops out of reach' },
      {
        p: `Once a baby starts grabbing, crawling and pulling things off low shelves, small bottles become a hazard. Store your drops up high or in a closed cabinet, not in a diaper bag pocket, a nightstand within reach of the crib, or on the arm of the feeding chair. The panel’s keep-out-of-reach section says: {swallowed}. Our guide to [keeping eye drops out of children’s reach](/guides/keep-out-of-reach-of-children) has more on storage.`,
      },
      {
        p: `This guide is about your eyes, not your baby’s. Quell’s label doesn’t give directions for children; questions about a baby’s eyes belong with your pediatrician. If you’re nursing, [this guide](/guides/can-you-use-eye-drops-while-breastfeeding) covers what the label says and what to ask a pharmacist.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. The directions read: {directions}. With bottles, wipes and diapers in the mix, wash your hands first and follow this line: {tip}.`,
      },
      {
        p: `For storage, the label says: {storage}. The panel also cautions: {warnings}. The label doesn’t give directions for using Quell with contact lenses or other eye drops; ask your eye doctor or pharmacist if either applies. You can read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering when you can’t get to the store' },
      {
        p: `Errands get hard with a newborn. Quell can be ordered from your phone with guest checkout and ships to any US address from Brentwood, Tennessee. Shipping is {shipping}, or free on {freeBottles} or more bottles. There’s no subscription, and no delivery date is promised, so order before you run out. [Order from the home page](/#buy).`,
      },
      { h: 'When tired eyes need a doctor' },
      {
        p: `Short sleep explains plenty of gritty mornings, but it doesn’t explain everything. The label says: {stopUse} Pain, vision changes, or discomfort that keeps returning even after a few better nights should be checked by an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry after having a baby?',
        a: `Broken sleep gives the eyes fewer long stretches closed, and night feeds often involve a bright phone in a dark room, which slows blinking. Heated or air-conditioned rooms add to it. Pain or vision changes should be checked by an eye doctor.`,
      },
      {
        q: 'How can I stay awake during night feeds without my phone?',
        a: `A dim lamp and a podcast or audiobook keep you alert without a bright screen close to your face. If you do use the phone, turn the brightness down and look away often.`,
      },
      {
        q: 'Where should I keep eye drops with a baby in the house?',
        a: `Up high or in a closed cabinet, not in a diaper bag pocket or on a low nightstand. Quell’s label includes a section on keeping it out of reach and what to do if it’s swallowed.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-a-vr-headset',
    title: 'Dry eyes from a VR headset',
    description:
      'VR headsets put screens close to your eyes, slow your blinking and trap warm air. How to set up sessions, take breaks and time eye drops around them.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `A VR headset can dry your eyes because you blink less while focused on its close-up displays, and warm air builds up inside the sealed face cushion. Long sessions add up. Take regular breaks with the headset off, blink fully, keep the lenses and cushion clean, and give any eye drops time to settle before putting the headset back on. An eye doctor should check pain, headaches or vision changes.`,
      },
      { h: 'Does VR cause dry eyes?' },
      {
        p: `VR doesn’t create a new kind of dryness, but it combines several things that dry the tear film. Like any screen, an immersive game or app holds your attention so tightly that blinking slows down and blinks get shallower. Inside a headset, there’s nothing else to look at, so there are no natural pauses when your eyes drift off the screen. The face cushion forms a small, enclosed space in front of the eyes, which warms up from your body heat and the device during play.`,
      },
      { h: 'Why your eyes feel tired after VR' },
      {
        p: `Many people notice dry or tired eyes when they take the headset off, especially after an hour or more. Some find their eyes feel fine during play and only notice the dryness afterward, when they look around a normal room again. If eye discomfort comes with headaches, dizziness or nausea, stop and rest, and mention it to your doctor if it keeps happening.`,
      },
      { h: 'How long should you use VR before taking a break?' },
      {
        p: `Headset makers include health and safety information with their devices, often with guidance on breaks. Check what yours says. In general, shorter sessions with breaks are easier on the eyes than marathon ones. Use the break to take the headset off completely, not just lift it.`,
      },
      {
        list: [
          `Set a timer before you start, since it’s easy to lose track of time inside a game.`,
          `On each break, take the headset off, look across the room or out a window, and blink slowly a few times.`,
          `Close your eyes for a few seconds before putting the headset back on.`,
          `End the session if your eyes start to burn or water; pushing through usually makes it worse.`,
        ],
      },
      { h: 'Setting up the headset' },
      {
        list: [
          `Adjust the fit and the lens spacing so the image is sharp. A blurry image makes people strain and stare.`,
          `Keep the lenses clean with the cloth or method the maker recommends. Smudges make the image harder to focus on.`,
          `Clean or replace the face cushion as the maker directs; sweat and oils build up on it.`,
          `If the lenses fog, let the headset warm up to room temperature before you start instead of wiping it repeatedly mid-game.`,
          `Play in a room that isn’t too warm, and don’t aim a fan or vent straight at your face.`,
        ],
      },
      { h: 'Using eye drops around VR sessions' },
      {
        p: `The label doesn’t say anything about headsets, so use common sense. If you use lubricating drops, put them in on a break or before you start, then give them a few minutes to settle before strapping the headset back on. Pressing a face cushion against freshly applied drops can smear them across the lids and lenses. Store the bottle somewhere you won’t knock it off a desk while you’re moving around blind to the room. If you wear contact lenses, the label doesn’t give directions for them; ask your eye doctor or pharmacist.`,
      },
      { h: 'VR for work, fitness and gaming' },
      {
        p: `VR shows up in more places than gaming: fitness apps, training simulators at work, design reviews and virtual meetings. Fitness sessions add sweat inside the cushion. Work training can mean long stretches without a natural stopping point. Handle each one the same way: plan breaks, keep the gear clean, and pay attention to how your eyes feel when you take it off. Gamers who also play on monitors may find our guide to [eye drops for gamers](/guides/eye-drops-for-gamers) useful, and [screens and your tear film](/guides/screens-and-your-tear-film) explains how screens affect blinking.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. Directions: {directions}. Controllers and headsets are handled constantly, so wash your hands first and follow this line: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A gaming room that runs hot from equipment can come close, so keep the bottle away from consoles and power bricks. The label also includes this caution: {warnings}. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to stop and see an eye doctor' },
      {
        p: `Brief dryness after a long session is common. Persistent symptoms are something else. The label says: {stopUse} Eye pain, double vision, blurred vision that doesn’t clear, or headaches that follow every session should be checked by an eye doctor. The [self-check](/self-check) can help you describe your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Are VR headsets bad for your eyes?',
        a: `VR can leave eyes dry and tired because you blink less while focused on close displays inside a warm face cushion. Breaks with the headset off help, and an eye doctor should check pain, headaches or vision changes.`,
      },
      {
        q: 'Why do my eyes feel dry after using VR?',
        a: `Immersive content slows your blink rate, and the enclosed space inside the face cushion warms up during play. Short sessions, regular breaks and full blinks help.`,
      },
      {
        q: 'Can I put in eye drops before using a VR headset?',
        a: `Quell’s label doesn’t mention headsets. If you use drops, give them a few minutes to settle before putting the headset on, so the cushion doesn’t press against freshly applied drops.`,
      },
      {
        q: 'Why do VR lenses fog up?',
        a: `Warm, moist air from your face meets cooler lenses. Letting the headset warm up to room temperature before you play usually reduces it.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-looking-at-your-phone-in-bed',
    title: 'Dry eyes from looking at your phone in bed',
    description:
      'Scrolling in a dark bedroom, phone held close and above your face, slows blinking and dries the eyes. What to change, and how to wind down instead.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Looking at your phone in bed dries your eyes because you blink less while scrolling, the bright screen in a dark room keeps you staring, and holding the phone above your face opens the eyes wider. Turn the brightness down, hold the phone lower and farther away, set a cutoff time, and blink fully. If you use a lubricating drop, follow its label. See an eye doctor if dryness comes with pain or vision changes.`,
      },
      { h: 'Why your eyes dry out when you scroll in bed' },
      {
        p: `Screens slow blinking. That’s true at a desk, but in bed it’s often worse. People hold the phone closer, scroll for longer without a break, and do it at the end of the day, when the eyes have already been open for 16 hours or more. The bedroom air may also be dry from heating or air conditioning.`,
      },
      {
        list: [
          `Fewer blinks: each blink spreads the tear film, so longer gaps leave the surface drier.`,
          `Partial blinks: while focused on small text, the lids often don’t fully close.`,
          `Upward gaze: lying on your back with the phone above your face means looking up, which exposes more of the eye to the air.`,
          `Contrast: a bright screen in a dark room is harder on the eyes than the same screen in a lit room.`,
        ],
      },
      { h: 'How you hold the phone matters' },
      {
        p: `Looking slightly downward lets the eyelids cover more of the eye, which is why desk screens are often set a little below eye level. In bed, people do the opposite, holding the phone overhead or propped on a pillow at eye level. Sitting up against the headboard with the phone resting low on your lap or chest brings your gaze back down. Holding it at a comfortable distance, not a few inches from your face, also helps you relax the stare.`,
      },
      { h: 'Settings that make night scrolling easier on the eyes' },
      {
        list: [
          `Turn the brightness down to a level that matches the room, and let auto-brightness handle it.`,
          `Use dark mode, a night color setting, or both.`,
          `Increase text size so you don’t lean in to read.`,
          `Turn on a soft bedside lamp so the screen isn’t the only light in the room.`,
          `Set a downtime or bedtime schedule that limits apps after a certain hour.`,
        ],
      },
      { h: 'Breaking the scroll-before-sleep habit' },
      {
        p: `The simplest fix is less time on the phone in bed. Put the phone on a charger across the room, so reaching for it means getting up. Swap the last 20 minutes of scrolling for a paper book, music or a podcast with your eyes closed. If you use your phone as an alarm, a basic alarm clock removes the temptation altogether. [A screen-time New Year’s resolution](/guides/screen-time-new-years-resolution) has more ideas for cutting back.`,
      },
      { h: 'Morning dryness after a late night on the phone' },
      {
        p: `Waking with dry, scratchy eyes after a late scrolling session is common. A short night means fewer hours with the eyes closed, and the eyes may start the night already dry. If this sounds familiar, [why your eyes feel dry in the middle of the night](/guides/dry-eyes-in-the-middle-of-the-night) explains other things that dry the eyes during sleep, from fans to heating vents.`,
      },
      { h: 'Using drops before bed' },
      {
        p: `Some people like to put in lubricating drops before turning off the light. Quell’s directions don’t name a time of day. They read: {directions}. If you use a drop at bedtime, put the phone down first, so you’re not scrolling with fresh drops in, and give it a moment before you close your eyes. [Can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed) covers timing in more detail.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. Phones are one of the most-touched objects we own, so wash your hands first and follow this line: {tip}.`,
      },
      {
        p: `Keep the bottle on the nightstand only if it stays within the label’s storage range: {storage}. Out of reach of children matters on a nightstand too. The label also includes this caution: {warnings}. The full panel is on our [Drug Facts page](/drug-facts), and [screens and your tear film](/guides/screens-and-your-tear-film) explains the screen side of dryness.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If cutting back on night scrolling doesn’t help, or if your eyes hurt or your vision changes, the phone may not be the cause. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth an appointment.`,
      },
    ],
    faq: [
      {
        q: 'Does using your phone in the dark dry your eyes?',
        a: `It can. People blink less while scrolling, and a bright screen in a dark room keeps the gaze fixed. Turning the brightness down and switching on a soft lamp helps.`,
      },
      {
        q: 'Why do my eyes hurt after looking at my phone in bed?',
        a: `Long scrolling sessions slow your blink rate, and holding the phone above your face exposes more of the eye to the air. If your eyes hurt or your vision changes, see an eye doctor.`,
      },
      {
        q: 'What is the right way to hold a phone in bed?',
        a: `Sit up against the headboard and hold the phone low and at a comfortable distance, so you look slightly down. Lying flat and holding it overhead exposes more of the eye.`,
      },
      {
        q: 'Does dark mode help dry eyes?',
        a: `Dark mode can make a screen less glaring in a dim room, but it doesn’t change how often you blink. Taking breaks and blinking fully matter more.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-17 for do-i-need-to-keep-receipts-for-hsa-eye-drops:
   * - https://www.irs.gov/publications/p969 (Recordkeeping: "You must keep records
   *   sufficient to show that" distributions were exclusively for qualified medical
   *   expenses, weren't previously paid or reimbursed from another source, and weren't
   *   taken as an itemized deduction; "Don't send these records with your tax return.
   *   Keep them with your tax records." Form 1099-SA from the trustee; Form 8889;
   *   additional 20 percent tax on distributions not used for qualified medical
   *   expenses; "You don't have to make withdrawals from your HSA each year.")
   * - https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records
   *   (generally until the period of limitations runs out; 3 years in the basic case)
   * - src/lib/email.ts sendOrderConfirmationEmail (read-only): order number, each item
   *   with quantity and price, subtotal, shipping ("Free" when zero), total, shipping
   *   address; footer with company name, address and phone.
   */
  {
    slug: 'do-i-need-to-keep-receipts-for-hsa-eye-drops',
    title: 'Do I need to keep receipts for HSA eye drops?',
    description:
      'Yes. IRS Publication 969 says to keep records showing HSA money went to qualified medical expenses. What to save for eye drops, and for how long.',
    category: 'ordering',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Yes. IRS Publication 969 says HSA owners must keep records showing each distribution paid for qualified medical expenses that weren’t reimbursed elsewhere or deducted. For eye drops, the order receipt is that record: it shows what you bought, when, and what you paid. You don’t send it with your tax return; you keep it with your tax records in case the IRS or your HSA administrator asks.`,
      },
      { h: 'What IRS Publication 969 says about HSA records' },
      {
        p: `Publication 969, the IRS guide to health savings accounts, has a short recordkeeping section. It says you must keep records sufficient to show three things:`,
      },
      {
        list: [
          `The distributions were used only to pay or reimburse qualified medical expenses.`,
          `Those expenses hadn’t already been paid or reimbursed from another source, such as insurance or an FSA.`,
          `The expenses weren’t taken as an itemized deduction in any year.`,
        ],
      },
      {
        p: `It also says not to send these records with your return. They stay with your own tax files. Your HSA trustee reports distributions to you and the IRS on Form 1099-SA, and you report them on Form 8889 with your return, but neither form lists what you bought. The receipt is what connects a withdrawal to a qualified expense.`,
      },
      { h: 'Why the receipt matters even with an HSA card' },
      {
        p: `Paying with an HSA debit card feels automatic, and the card may be approved right at checkout. That doesn’t replace your own records. Publication 969 puts the responsibility on the account holder, and it says distributions not used for qualified medical expenses are taxable and may face an additional 20 percent tax. If you’re ever asked to show what a card charge paid for, a receipt answers the question. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains why over-the-counter drops qualify without a prescription.`,
      },
      { h: 'What a Quell receipt shows' },
      {
        p: `Quell sends an order confirmation email as soon as payment goes through, with the subject “Your Quell order # … is confirmed.” That email is the receipt, and it includes:`,
      },
      {
        list: [
          `The order number.`,
          `Each item by name, with the quantity and the price.`,
          `The subtotal, the shipping charge (or “Free”), and the total.`,
          `The shipping address.`,
          `The seller’s name, {company}, with its address and phone number at the bottom.`,
        ],
      },
      {
        p: `The email’s own date stamp shows when you ordered. [Getting a receipt for your Quell order](/guides/getting-a-receipt-for-your-order) covers finding it again if it’s been deleted, and the [order lookup page](/orders) shows an order’s status by number.`,
      },
      { h: 'Saving HSA receipts for eye drops' },
      {
        list: [
          `Save the confirmation email as a PDF the day it arrives, or forward it to a folder or email label you use only for HSA receipts.`,
          `Name files by date and item, for example “2026-11 Quell eye drops,” so they sort neatly.`,
          `Note how you paid: HSA card, or out of pocket with plans to reimburse yourself later.`,
          `If your HSA administrator has a receipt upload tool, add the PDF there too, but keep your own copy.`,
          `Keep a separate note if part of an order wasn’t for an eligible person, such as a bottle given to a friend.`,
        ],
      },
      { h: 'How long to keep HSA receipts' },
      {
        p: `Publication 969 doesn’t give a separate time limit for HSA records. The IRS’s general guidance says to keep records that support an item on a return until the period of limitations for that return runs out, which is three years after filing in the basic case and longer in certain situations. Some HSA owners choose to keep receipts for as long as the account is open, since the receipt supports the return for the year the money comes out, not the year of purchase. A tax professional can tell you what applies to you.`,
      },
      { h: 'Reimbursing yourself later' },
      {
        p: `Publication 969 notes that you don’t have to take distributions from your HSA every year. Some people pay for eye drops out of pocket and reimburse themselves from the HSA later. If you do that, the receipt is your only proof that the expense was real, came after the account was opened, and wasn’t already reimbursed. Keep it until well after the reimbursement, not just the purchase. [Can HSA pay for eye drops bought before it opened?](/guides/hsa-for-eye-drops-bought-before-your-hsa-opened) covers timing.`,
      },
      { h: 'What about shipping?' },
      {
        p: `The receipt lists shipping separately from the product, which helps if your administrator handles them differently. Shipping is {shipping} per order, and orders of {freeBottles} or more bottles ship free, in which case the receipt shows the shipping line as Free. If you’re unsure whether shipping counts, ask your HSA administrator.`,
      },
      { h: 'Buying Quell with an HSA' },
      {
        p: `You can check out as a guest, so no account is needed to get the receipt; it goes to the email address you enter. There’s no subscription, and promo codes aren’t offered, so the receipt shows the regular price for each item. [Order Quell here](/#buy), and keep the email that follows.`,
      },
    ],
    faq: [
      {
        q: 'How long should I keep HSA receipts?',
        a: `Publication 969 doesn’t set a separate limit. The IRS says to keep records until the period of limitations for the related return runs out, generally three years after filing, and some HSA owners keep receipts as long as the account is open.`,
      },
      {
        q: 'Do I have to send HSA receipts to the IRS?',
        a: `No. IRS Publication 969 says not to send HSA records with your tax return. Keep them with your tax records in case they’re requested.`,
      },
      {
        q: 'What should an HSA receipt show?',
        a: `It should show what you bought, when, and how much you paid, enough to connect the distribution to a qualified medical expense. Quell’s confirmation email lists the item, quantity, price and total, along with the seller’s name.`,
      },
      {
        q: 'What happens if I can’t prove an HSA expense?',
        a: `According to Publication 969, distributions that aren’t used for qualified medical expenses are taxable and may face an additional 20 percent tax. A saved receipt is how you show the money went to an eligible purchase.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-data-entry-workers',
    title: 'Dry eyes for data entry workers',
    description:
      'Hours of keying and checking numbers between paper and screen slow your blinking. Set up the monitor and source documents, and build in breaks.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Data entry work dries the eyes because hours of keying and checking numbers keep your gaze locked on the screen and source documents, and blinking slows when you concentrate. Office air adds to it. Put source documents beside the screen at the same height, keep the monitor slightly below eye level, take short breaks between batches, and blink fully. If you use a lubricating drop, follow its label. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Why data entry is hard on the eyes' },
      {
        p: `Data entry combines several things that slow blinking. The work is precise: one wrong digit in an account number or an invoice total matters. Concentration slows the blink rate, and when you’re matching numbers between a paper form and a screen field, the eyes move constantly but rarely rest. Many jobs are measured by keystrokes or records per hour, which makes breaks feel costly.`,
      },
      {
        list: [
          `Fewer blinks while focused on small numbers and fields.`,
          `Partial blinks, where the lids don’t fully close, during fast keying.`,
          `Constant refocusing between a document on the desk and a screen at a different distance.`,
          `Long shifts in office air that’s heated in winter and cooled in summer.`,
        ],
      },
      { h: 'Placing source documents' },
      {
        p: `Looking down at a paper on the desk, then up at the screen, hundreds of times an hour, means constant refocusing and head movement. A document holder puts the paper at about the same distance and height as the screen, so your eyes move side to side instead of up and down.`,
      },
      {
        list: [
          `An in-line holder sits between the keyboard and monitor, right below the screen.`,
          `A side holder sits next to the monitor, at the same height and distance.`,
          `For scanned documents, a second monitor or a split screen keeps the source and the entry form side by side.`,
          `Zoom in on small scans rather than leaning toward the screen.`,
        ],
      },
      { h: 'Monitor position for data entry' },
      {
        p: `Set the top of the screen at or slightly below eye level, so you look slightly down at the fields. That lets the upper eyelids cover more of the eye, which reduces evaporation. Put the screen at about arm’s length and adjust the font size so numbers are easy to read without squinting. Glare from a window or overhead light makes people stare harder, so tilt the screen or adjust the blinds to cut reflections. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers general office setup.`,
      },
      { h: 'Breaks between batches' },
      {
        p: `Data entry often comes in batches: a stack of forms, a file of records, a set of invoices. The end of each batch is a natural break point.`,
      },
      {
        list: [
          `At the end of each batch, look across the room or out a window for 20 seconds.`,
          `Close your eyes fully for a few seconds, then blink slowly several times.`,
          `Stand up for a minute every hour or so; getting up from the desk also breaks the fixed gaze.`,
          `If you use the ten-key pad with your eyes on the screen, glance away every so often anyway.`,
        ],
      },
      {
        p: `If your employer sets break schedules, follow them, and ask whether short eye breaks can fit between batches.`,
      },
      { h: 'Verification work and double entry' },
      {
        p: `Checking work means reading numbers digit by digit and comparing them to the source. This is some of the most intense staring in the job, and blinking tends to slow even further while you do it. Read numbers aloud quietly, or use a ruler or the cursor to track the line, so you’re not straining to hold your place. Blink at the end of every line or record. Accountants have similar work at tax time; [dry eyes for accountants](/guides/dry-eyes-for-accountants) covers deadline season.`,
      },
      { h: 'Office air and your workstation' },
      {
        p: `Look for vents above or beside your desk. A ceiling diffuser or a floor register aimed at your face dries the eyes faster. Ask to have it redirected, or move your chair. A small personal fan should point at your body, not your eyes. Space heaters under desks are common in cold offices; aim them at your legs. If you work from home, the same rules apply, and a humidifier near your desk can help in winter.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists these Uses: {uses}. Directions: {directions}. Keyboards and paperwork collect a lot from hands, so wash yours first and follow this line: {tip}.`,
      },
      {
        p: `Keep the bottle in a desk drawer at room temperature. The label’s storage line reads: {storage}. The panel also includes this caution: {warnings}. The label doesn’t give directions for contact lenses or using it with other drops; ask your eye doctor or pharmacist about either. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Tired eyes after a long shift are common. Some symptoms go beyond that. The label says: {stopUse} Blurry vision that doesn’t clear after a break, headaches at the screen, or trouble reading numbers that used to be easy are worth an eye exam. The [self-check](/self-check) can help you describe what you notice; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry doing data entry?',
        a: `Concentrating on numbers and fields slows your blink rate, and blinks get shallower during fast keying. Office heating or air conditioning adds to it. Breaks between batches and full blinks help.`,
      },
      {
        q: 'Where should I put documents when typing from paper?',
        a: `In a document holder at the same height and distance as the screen, either between the keyboard and monitor or beside the monitor. That cuts the up-and-down refocusing between desk and screen.`,
      },
      {
        q: 'How often should data entry workers take eye breaks?',
        a: `A short look away at the end of each batch, plus standing up every hour or so, fits the rhythm of most data entry work. Follow your employer’s break schedule and fit eye breaks between batches.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-lab-workers',
    title: 'Dry eyes for lab workers',
    description:
      'Fume hoods pull air past your face, safety glasses trap warmth, and bench work keeps you staring. How lab workers can manage dry eyes within lab rules.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Lab work dries the eyes through moving air at fume hoods and biosafety cabinets, long stretches of focused bench and screen work, and climate-controlled rooms. Wear the eye protection your lab requires, take breaks outside the lab, and blink fully between tasks. Never put eye drops in inside a lab area: follow your lab’s rules, leave the work area, remove gloves and wash your hands first. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Why lab work dries the eyes' },
      {
        p: `Labs are built to move air. Ventilation systems in many labs change the room’s air frequently, and fume hoods and biosafety cabinets pull air steadily through their openings. That constant airflow helps keep workers safe from fumes and particles, but moving air also speeds evaporation from the tear film. Add hours of careful work, pipetting, reading small labels and watching screens, and blinking slows.`,
      },
      {
        list: [
          `Air pulled into a fume hood passes across the sash opening, right in front of where you stand.`,
          `Long focus at a bench, an instrument screen or a plate reader slows blinking.`,
          `Cold rooms and constant-temperature rooms often have strong air circulation.`,
          `Safety glasses and goggles are required for good reason, and some styles trap warmth around the eyes.`,
        ],
      },
      { h: 'Working at a fume hood' },
      {
        p: `A fume hood draws room air in through the front opening and exhausts it away. Your face is close to that opening while you work. Keep the sash at the working height your lab marks or requires, and keep your face outside the plane of the sash as you’ve been trained. Don’t adjust airflow or the sash beyond what your lab’s procedures allow to make your eyes more comfortable. Instead, step back from the hood between steps, close your eyes briefly, and blink fully before you continue.`,
      },
      { h: 'Safety glasses, goggles and dry eyes' },
      {
        p: `Eye protection is non-negotiable in most labs. Wear what your lab and its safety officer require for the work, every time. If your glasses or goggles feel uncomfortable, fog up, or press against your face, ask about other approved models. Better-fitting protection is easier to wear correctly. Never remove eye protection inside the lab to rub your eyes or put in drops. Learn where the eyewash station is and how to use it; eye drops are not a substitute for an eyewash after a splash.`,
      },
      { h: 'Can I use eye drops in a lab?' },
      {
        p: `Not inside the lab work area. Most labs prohibit applying cosmetics, eating, drinking and touching the face in work areas, and eye drops fall under the same principle: anything on your gloves or hands could end up in your eye. Follow your lab’s own rules. A safe routine looks like this:`,
      },
      {
        list: [
          `Finish the current step and secure your work.`,
          `Leave the lab area for an office, break room or other space your lab allows.`,
          `Remove gloves and lab coat according to your lab’s procedures.`,
          `Wash your hands thoroughly with soap and water.`,
          `Put in drops as the label directs, then wash your hands again before going back in.`,
        ],
      },
      {
        p: `Don’t store personal eye drops in lab refrigerators, on benches, or anywhere near chemicals or samples. Keep them with your personal belongings outside the work area.`,
      },
      { h: 'Microscopes, screens and bench work' },
      {
        p: `Many lab tasks involve intense, close focus: microscope work, reading tiny tube labels, counting colonies, watching an instrument screen. Each one slows blinking. Build breaks into your protocol where you can, such as while a centrifuge runs or an incubation finishes. Look across the room, close your eyes for a few seconds, and blink fully. Our guide to [dry eyes from looking through a microscope](/guides/dry-eyes-from-looking-through-a-microscope) covers microscope work in detail. Data analysis at a desk afterward brings the usual screen habits into play; [screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'Cold rooms and long shifts' },
      {
        p: `Cold rooms, freezer farms and constant-temperature rooms are often cold and drafty. Working in one for long stretches dries the eyes, and the change in temperature when you come out can make them water. Limit time in cold rooms when you can, and take a minute outside to blink and let your eyes settle. Long shifts and late-night experiments add fatigue on top. If you work nights, our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) can help.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. Directions: {directions}. In a lab setting, this line from the label matters even more: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A personal bag or desk drawer outside the lab is a better spot than a cold room or a lab fridge. The label also includes this caution: {warnings}. It doesn’t give directions for contact lenses or for use with other eye drops; ask your eye doctor or pharmacist. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to get medical help' },
      {
        p: `If a chemical, sample or particle gets in your eye, follow your lab’s emergency procedures, use the eyewash, and get medical care. Don’t reach for lubricating drops instead. For everyday dryness, the label says: {stopUse} Ongoing discomfort, pain or blurred vision should be checked by an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a lab?',
        a: `Lab ventilation, fume hoods and biosafety cabinets keep air moving past your face, and focused bench and screen work slows blinking. Breaks outside the lab and full blinks help.`,
      },
      {
        q: 'Do fume hoods dry out your eyes?',
        a: `A fume hood pulls room air in through its front opening, so air moves past your face while you work. Stepping back between steps and blinking fully helps, but don’t change the sash or airflow beyond what your lab allows.`,
      },
      {
        q: 'Should I take off my safety glasses to rub my eyes in the lab?',
        a: `No. Keep eye protection on in the lab, and leave the work area, remove gloves and wash your hands before touching your eyes or putting in drops. Follow your lab’s rules.`,
      },
      {
        q: 'Can eye drops replace an eyewash station?',
        a: `No. If something splashes in your eye, follow your lab’s emergency procedures and use the eyewash, then get medical care. Lubricating drops aren’t meant for that.`,
      },
    ],
  },
  /*
   * light-mineral-oil-vs-mineral-oil: FDA references removed 2026-11-18 at
   * Phillip's request (the 21 CFR 349.14, 172.878 and 200.50 citations are gone).
   * No monograph-conformance claim is made either way.
   */
  {
    slug: 'light-mineral-oil-vs-mineral-oil',
    title: 'Light mineral oil vs. mineral oil',
    description:
      'Light mineral oil and mineral oil are two grades of the same refined oil. What “light” means, where each turns up, and what Quell’s eye drop label lists.',
    category: 'label',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Light mineral oil and mineral oil are both refined oils from petroleum; “light” names a lighter, thinner-flowing grade, and the plain name a heavier one. Eye product labels list them as two separate ingredients, so the exact name matters. Quell’s Drug Facts panel lists light mineral oil among its active ingredients. Neither name tells you how much is in a product; the strength printed on the label does.`,
      },
      { h: 'What is mineral oil?' },
      {
        p: `Mineral oil is a clear, odorless oil made of liquid hydrocarbons refined from petroleum. The same basic material, refined to different standards and grades, turns up in skin products, kitchen and lab uses, and medicines. What separates one bottle from another is the grade, how far it was refined, and whether it was made and packaged for the use on its label.`,
      },
      { h: 'What makes mineral oil “light”?' },
      {
        p: `“Light” describes the grade, not the amount. Light mineral oil is the lighter, thinner-flowing grade; the plain name refers to a heavier grade. In a drop, a lighter oil spreads more easily. The amount of oil in a product is a separate question, answered by the strength printed next to the ingredient name on the Drug Facts panel. Our guide to [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) covers Quell’s use of it.`,
      },
      { h: 'Where you’ll see each name on eye products' },
      {
        p: `A drop has to spread across the eye in a blink, so lighter oils suit it. Ointments and gels meant for bedtime lean on heavier oils and on petrolatum, which is why they feel thicker and blur vision for longer. On the shelf, you may see these oily names in the active ingredients:`,
      },
      {
        list: [
          `Light mineral oil, more often in drops.`,
          `Mineral oil, often in ointments.`,
          `White petrolatum or petrolatum, the base of many eye ointments.`,
          `Lanolin, a wax from sheep’s wool, in some ointments.`,
        ],
      },
      {
        p: `Each of these shows up on a panel with the Purpose “Emollient,” a word for an oil or fat that softens and protects. [Emollient eye drops](/guides/emollient-eye-drops) covers the word in more depth, and [what is the OTC monograph for eye drops?](/guides/what-is-the-otc-monograph-for-eye-drops) explains why the names look so consistent across brands.`,
      },
      { h: 'Light mineral oil and white mineral oil' },
      {
        p: `Some eye ointment and gel labels list “white mineral oil” or “light mineral oil and white mineral oil.” “White” refers to a highly refined, colorless grade. The label of any product is the authority on what it contains, so read the active ingredients section instead of guessing from the product’s name or type.`,
      },
      { h: 'Why an eye drop contains oil at all' },
      {
        p: `The tear film has three layers: mucus against the eye, water in the middle, and a thin layer of oil on top. Blinking spreads it, and dry, windy, heated or air-conditioned air speeds up how fast the water evaporates. An oil in a drop works on that top layer. That’s the idea behind Quell, which is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      { h: 'What Quell’s label lists' },
      {
        p: `Quell’s Drug Facts panel lists its active ingredients as {actives}. The light mineral oil entry reads {mineralOil}. Its purpose on the panel is “Emollient,” while glycerol and polysorbate 80 are listed as lubricants. Light mineral oil is the oily active in Quell’s formula.`,
      },
      {
        p: `The inactive ingredients are {inactives}. Some of these, such as emu oil, are natural oils, and together with the light mineral oil they give the drop its look: {milky}.`,
      },
      { h: 'Don’t use household mineral oil in your eyes' },
      {
        p: `Mineral oil sold for the skin, the kitchen, or any other use isn’t made or packaged as an eye product. Eye drops are filled sterile and sealed, so the bottle can’t be opened without breaking the seal. A bottle from the medicine cabinet or a hardware store has neither protection. Only put products labeled for the eyes into your eyes, and follow their directions: Quell’s are {directions}.`,
      },
      { h: 'Reading the active ingredients section' },
      {
        list: [
          `Find the active ingredients box at the top of the Drug Facts panel.`,
          `Read the exact name: light mineral oil, mineral oil, or white mineral oil.`,
          `Note the strength beside it; [what the percentages mean](/guides/what-the-percentages-on-the-label-mean) explains how to read it.`,
          `Read the purpose column to see what role the label gives each ingredient.`,
          `Check the warnings before use. Quell’s panel includes: {warnings}.`,
        ],
      },
      {
        p: `If you’re comparing products, or have reacted to an oil-based drop before, a pharmacist can walk through the labels with you. Read Quell’s full panel on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is light mineral oil the same as mineral oil?',
        a: `They’re the same kind of refined petroleum oil in different grades. “Light” is the thinner-flowing grade, and eye product labels list light mineral oil and mineral oil as separate ingredients, so read the exact name.`,
      },
      {
        q: 'What is the difference between light and heavy mineral oil?',
        a: `Light mineral oil is the lighter, thinner-flowing grade, and heavy mineral oil is thicker. The name describes the grade, not how much is in a product; the strength on the label tells you that.`,
      },
      {
        q: 'What is white mineral oil?',
        a: `A highly refined, colorless grade of mineral oil, used where purity matters. On an eye product it’s another grade name, so check the active ingredients for exactly what the product contains.`,
      },
      {
        q: 'Can I put regular mineral oil in my eyes?',
        a: `No. Household mineral oil isn’t made as a sterile eye product. Use only products labeled for the eyes, and follow their directions.`,
      },
    ],
  },
  /*
   * how-to-report-a-problem-with-eye-drops: FDA references removed 2026-11-18 at
   * Phillip's request. Rewritten from the shopper's side: stop, keep the bottle,
   * note the lot, call a doctor or pharmacist, call the maker. Returns facts come
   * from the {returns} and {returnDays} tokens (damaged, incorrect or broken-seal
   * orders replaced).
   */
  {
    slug: 'how-to-report-a-problem-with-eye-drops',
    title: 'How to report a problem with eye drops',
    description:
      'Stop using the drops if symptoms appear, keep the bottle and box, note the lot number, then call your doctor or pharmacist and the company on the label.',
    category: 'label',
    addedOn: '2026-11-17',
    body: [
      {
        p: `To report a problem with eye drops, first stop using them if you have symptoms and get medical advice from your eye doctor or a pharmacist. Keep the bottle and carton, and write down the lot number and expiration date. Then call the company named on the label. For Quell, that’s {company} at {phone}, {hours}; keep the lot number handy for the call.`,
      },
      { h: 'What counts as a problem worth reporting?' },
      {
        p: `Problems with eye drops fall into a few groups, and each one is worth a call:`,
      },
      {
        list: [
          `A reaction after using the drops, such as pain, a change in vision, or irritation that won’t settle.`,
          `A quality problem: a broken or missing seal, a leaking or cracked bottle, a cloudy look that differs from what the label describes, particles, or an odd smell.`,
          `A labeling problem: a carton or bottle that doesn’t match, or a missing lot number or expiration date.`,
          `A use error: drops swallowed by accident, or put somewhere they weren’t meant to go.`,
          `A shipping problem: a crushed box, a bottle that arrived broken, or the wrong product.`,
        ],
      },
      {
        p: `Quell has a naturally unusual look, so check this before reporting a change: {appearance} The label also says: {milky}. A color change is different. The Do not use section reads: {doNotUse}.`,
      },
      { h: 'Step 1: Stop using the drops if you have symptoms' },
      {
        p: `If your eyes hurt or your vision changes after using drops, stop and get medical advice before using them again. Quell’s label says: {stopUse} If drops are swallowed, the label says: {swallowed}. For a sudden or severe reaction, seek care right away; the phone calls to the company can wait until you’ve been seen.`,
      },
      { h: 'Step 2: Keep the bottle, carton and details' },
      {
        list: [
          `Don’t throw the bottle away, even if it’s empty or broken. Put it in a clean zip-top bag.`,
          `Keep the carton. Eye drop packaging carries a lot number and expiration date; [what the lot number means](/guides/what-the-lot-number-on-eye-drops-means) shows where to look.`,
          `Take photos of the bottle, the seal, the carton and, for a shipping problem, the outer box and label.`,
          `Write down when you bought the drops, when you started using them, when symptoms began, and what you noticed.`,
          `Save your order confirmation email or store receipt.`,
        ],
      },
      { h: 'Step 3: Talk to your doctor or pharmacist' },
      {
        p: `For anything that touched your eyes or your health, a professional comes before the company. Bring the bottle and carton, or clear photos of both, to your eye doctor, or show them to the pharmacist where you usually fill prescriptions. They can look at what happened, tell you whether to keep using the drop, and note it in your record. A pharmacist can also check whether anything else you use might be involved.`,
      },
      {
        p: `Tell them exactly what you used and when. Mention any other drops, contact lenses or new medicines, since Quell’s label doesn’t cover combining it with those and the answer has to come from them.`,
      },
      { h: 'Step 4: Contact the company' },
      {
        p: `The company that makes or distributes a drug wants to hear about problems with it, because a report about one bottle can point to a whole lot. For Quell, call {phone} during {hours}, or find every contact option on our [contact page](/about#contact). Have these ready:`,
      },
      {
        list: [
          `The lot number and expiration date from the carton or bottle.`,
          `Your order number, if you bought from this site.`,
          `What happened, when, and whether you’ve seen a doctor.`,
          `The photos you took in step 2.`,
        ],
      },
      { h: 'Damaged, wrong or broken-seal orders' },
      {
        p: `Some problems are about the delivery rather than the drop. If your Quell order arrives damaged, with the wrong item, or with a broken seal, contact us within {returnDays} days of delivery and we’ll replace it. Don’t use a bottle whose seal was broken before you opened it; [why eye drops have a tamper-evident seal](/guides/why-eye-drops-have-a-tamper-evident-seal) explains why. Our guides to a [damaged order](/guides/damaged-order) and [a wrong order](/guides/if-your-order-is-wrong) walk through what to send. For unopened bottles you no longer want, the policy is: {returns}.`,
      },
      { h: 'Checking for recalls and counterfeits' },
      {
        p: `If a problem seems to involve a whole batch, it’s worth checking whether that product has been recalled. [How to check if your eye drops were recalled](/guides/how-to-check-if-eye-drops-were-recalled) shows where to look. If the packaging looks wrong, such as a missing Drug Facts panel or no lot number, see [how to tell if eye drops are counterfeit](/guides/how-to-tell-if-eye-drops-are-counterfeit) before using it.`,
      },
      { h: 'What the label covers, and what it leaves to your doctor' },
      {
        p: `The Drug Facts panel tells you when to stop using a product and what to do in an emergency. It doesn’t tell you what caused a reaction or whether you can use the product again. Those are questions for your eye doctor or pharmacist. You can read Quell’s full panel on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Should I keep the bottle if eye drops gave me a reaction?',
        a: `Yes. Keep the bottle and carton, even if the bottle is empty, because they carry the lot number and expiration date. Your doctor, your pharmacist and the company will all want those details.`,
      },
      {
        q: 'Who should I tell first about a reaction to eye drops?',
        a: `Stop using the drops and talk to your eye doctor or a pharmacist first, or seek care right away if the reaction is severe. Then call the company named on the label.`,
      },
      {
        q: 'What information do I need to report a problem with eye drops?',
        a: `The product name, lot number and expiration date from the carton, when you bought and used it, and what happened. Keep the bottle, carton and any photos.`,
      },
      {
        q: 'Who do I contact about a problem with Quell?',
        a: `Call {company} at {phone}, {hours}. Have the lot number, expiration date and your order number ready, and stop using the drops if you have symptoms.`,
      },
    ],
  },
]
