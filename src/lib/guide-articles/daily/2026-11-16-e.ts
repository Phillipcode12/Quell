import type { Guide } from '@/lib/guide-types'
export const DAILY_20261116_E: Guide[] = [
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-dubuque-ia:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094908.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094908.csv
   *   (DUBUQUE RGNL AP, elev 321.9 m: annual precip 38.20 in; Jan 1.32, Jun 5.19;
   *   DJF 4.69 in; annual snow 42.5 in, Jan 10.7, Feb 10.6, Dec 10.3; Jan high
   *   26.5 F, Jan low 11.1 F; Jul high 81.5 F; 61.4 days with a high at or below
   *   32 F; 144.1 nights at or below 32 F; 16.1 nights at or below 0 F; 6.2 days
   *   at or above 90 F; 64.1 days with snow depth of 1 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (DUBUQUE, IA, WBAN 94908: Jan 80/71, Apr 78/56, Aug 89/62, Dec 83/73,
   *   annual 83/63, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (DUBUQUE: Apr 5.5 highest month, Aug 3.4 lowest, Jan 5.0)
   * Elevation is the NOAA station elevation, converted (321.9 m is about 1,056 ft).
   */
  {
    slug: 'dry-eye-relief-dubuque-ia',
    title: 'Dry eye relief in Dubuque, Iowa',
    description:
      'Dubuque averages 61 days a year that never climb above freezing, so furnaces run for months. NOAA’s numbers and practical dry eye relief for the river city.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Dubuque, dry eyes are mostly a winter story. NOAA’s records show about 61 days a year when the high stays at or below freezing, so homes and offices run the furnace for months and indoor air turns parched. April adds the windiest weeks. Keep heat vents off your face, add moisture to the bedroom, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Dubuque’s climate in NOAA’s figures' },
      {
        p: `The official station is Dubuque Regional Airport, outside the city on higher ground at about 322 meters (roughly 1,060 feet). Its 1991 to 2020 normals describe a humid river town with a hard winter:`,
      },
      {
        list: [
          `About 38.2 inches of precipitation a year, with June the wettest month at 5.19 inches.`,
          `January is the driest at 1.32 inches, and December through February together bring only 4.69.`,
          `Normal snowfall is 42.5 inches, nearly all of it split between December (10.3), January (10.7) and February (10.6).`,
          `January highs average 26.5°F and lows 11.1°F.`,
          `Around 144 nights a year reach 32°F or colder, and about 16 drop to zero or below.`,
          `Only about six days a year reach 90°F.`,
        ],
      },
      {
        p: `That last figure matters. Summer heat, the usual dry-eye villain in the West, barely registers here. Dubuque’s trouble months are the cold ones.`,
      },
      { h: 'Why Dubuque eyes feel dry in a humid climate' },
      {
        p: `Outdoor air in Dubuque is rarely dry. NOAA’s humidity table puts the airport’s August mornings at 89 percent and even January afternoons at 71. The problem starts when that cold, damp air comes inside. Air at 11°F holds very little water, and when a furnace warms it to 70°F without adding any, its relative humidity drops sharply. The tear film’s watery layer evaporates faster in that air, and the eyes start to feel gritty, tired or scratchy by evening.`,
      },
      {
        p: `With roughly two months of days that stay below freezing and about 64 days a year with an inch or more of snow on the ground, the heat in a Dubuque house rarely gets a break from December into March. That’s a long stretch of dry indoor air.`,
      },
      { h: 'How to keep eyes moist through a Dubuque winter' },
      {
        list: [
          `Run a cool-mist humidifier in the bedroom and clean it on the schedule its manual gives.`,
          `Turn the thermostat down a few degrees at night; cooler room air dries less.`,
          `Close or redirect floor registers that blow toward a bed, couch or desk chair.`,
          `In the car, send the defroster and heater to the windshield and feet, not toward your face.`,
          `Keep a bottle of lubricating drops where you spend your evenings, since symptoms often build as the day goes on.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes further into humidifiers and room setup.`,
      },
      { h: 'Spring wind on the bluffs' },
      {
        p: `NOAA’s wind table lists April as the airport’s windiest month and August as its calmest, with January not far behind April. Wind thins the tear film on exposed eyes the same way it dries laundry on a line. A walk along the Riverwalk, a ride on the Heritage Trail or an afternoon on the bluff above the river in early spring puts your eyes in moving air for longer than a quick dash to the car. Wraparound sunglasses cut the breeze as well as the glare off the Mississippi. In January, a scarf pulled up and a hat brim pulled down help on the walk from a parking ramp.`,
      },
      { h: 'Dry eyes at the end of the day in Dubuque' },
      {
        p: `Many people here notice dryness most after work rather than first thing. Factory floors, warehouses and offices all run forced-air heat in winter, and screen work slows the blink rate. By the drive home your eyes have spent hours in warm, dry, moving air with fewer blinks than usual. A few habits make a difference:`,
      },
      {
        list: [
          `Every 20 minutes or so, look away from the screen and blink slowly and completely a few times.`,
          `Lower the monitor slightly so your eyelids cover more of the eye while you work.`,
          `If you’re a student at Loras, Clarke or the University of Dubuque, take study breaks away from the library’s vents during finals.`,
        ],
      },
      {
        p: `[Dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) covers this evening pattern in more detail.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Its directions read: {directions}. One practical note for clean handling: {tip}.`,
      },
      {
        p: `The panel’s caution is: {warnings}. For storage it says: {storage}. A Dubuque January can drop well below that range, so don’t leave a bottle in a glovebox or an unheated porch. If the drop ever looks different from usual, the label is clear. Do not use: {doNotUse}. You can read every line on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell from Dubuque' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Dubuque, Asbury, East Dubuque and anywhere else in the US. You can check out as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though we don’t promise a delivery date, so order before you’re down to your last bottle. The [Dubuque page](/eye-drops/dubuque-ia) and the [Iowa page](/eye-drops/state/iowa) have more local detail.`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `A lubricating drop is for ordinary dryness and irritation. It isn’t a way to find out why your eyes keep bothering you. The label puts the line plainly: {stopUse} Sharp pain, light sensitivity, discharge, or vision that stays blurry after blinking all need an eye doctor’s exam. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a good place to check first.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Dubuque get in winter?',
        a: `NOAA’s 1991 to 2020 normals for Dubuque Regional Airport put January’s average low at 11.1°F and its average high at 26.5°F. About 16 nights a year fall to zero or below.`,
      },
      {
        q: 'How much snow does Dubuque, Iowa get a year?',
        a: `About 42.5 inches in a normal year at Dubuque Regional Airport, with December, January and February each bringing a little over 10 inches.`,
      },
      {
        q: 'Why are my eyes drier in winter in Iowa when it’s humid outside?',
        a: `Cold air holds little water, and heating it indoors without adding moisture drops its relative humidity. Hours in that heated air speed evaporation from the tear film, even when the outdoor air is damp.`,
      },
      {
        q: 'Can I order Quell eye drops to Dubuque?',
        a: `Yes. Quell ships to Dubuque and every other US address from Brentwood, Tennessee, with guest checkout and email tracking. No arrival date is promised, so it’s wise to reorder early.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-sioux-city-ia:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014943.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014943.csv
   *   (SIOUX CITY GATEWAY AP, elev 333.8 m: annual precip 29.27 in; Jan 0.69,
   *   Jun 4.35; DJF 2.54 in; annual snow 36.0 in, Feb 8.7, Jan 7.7, Dec 7.6;
   *   Jul high 85.0 F; Jan low 10.4 F; 24.6 days at or above 90 F; 154.1 nights
   *   at or below 32 F; 16.4 nights at or below 0 F; 51.3 days with a high at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SIOUX CITY, IA, WBAN 14943: Apr 79/52, May 80/53, Oct 82/54, Aug 89/61,
   *   Dec 81/70, morning/afternoon; DUBUQUE Apr afternoon 56)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SIOUX CITY: Apr 5.6 highest, Mar 5.3, Aug 3.6 lowest; annual 4.6, same as
   *   Dubuque, above Des Moines 4.4)
   * Dubuque comparison: Dubuque Rgnl Ap normal annual precip 38.20 in (fetched today).
   * Elevation is the NOAA station elevation, converted (333.8 m is about 1,095 ft).
   */
  {
    slug: 'dry-eye-relief-sioux-city-ia',
    title: 'Dry eye relief in Sioux City, Iowa',
    description:
      'Sioux City’s April afternoons average 52 percent humidity in its windiest month, and winter is long. NOAA’s numbers and how to ease dry eyes in Siouxland.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Sioux City’s driest stretch for eyes is spring, when April brings the airport’s windiest weather and its lowest afternoon humidity of the year, about 52 percent in NOAA’s records. Winter adds months of furnace heat, and summer brings about 25 days at 90°F or hotter. Block the wind with wraparound glasses, keep indoor air from getting too dry, and use a lubricating drop as labeled. Ongoing symptoms belong with an eye doctor.`,
      },
      { h: 'Sioux City weather, by NOAA’s numbers' },
      {
        p: `The city’s official weather records come from Sioux Gateway Airport, south of downtown in Sergeant Bluff, at about 334 meters (close to 1,095 feet). Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `29.27 inches of precipitation in a normal year, about nine inches less than Dubuque gets on the other side of the state.`,
          `January is the driest month at 0.69 inch, and the three winter months together total 2.54 inches.`,
          `June is wettest at 4.35 inches.`,
          `About 36 inches of snow a year, with February the snowiest month at 8.7 inches.`,
          `Roughly 25 days a year reach 90°F, with July highs averaging 85°F.`,
          `About 154 nights fall to freezing, and 16 or so drop to zero or below.`,
        ],
      },
      { h: 'April: windy, and the driest afternoons of the year' },
      {
        p: `NOAA’s wind table ranks April as Sioux City’s windiest month, followed closely by March, while August is the calmest. The humidity table lines up with it: April afternoons average 52 percent and May afternoons 53, the lowest readings of the year. Mornings stay near 80 percent, so the swing from breakfast to mid-afternoon is large. Spring is when the open country around Siouxland is still mostly bare soil, and dust rides that wind.`,
      },
      {
        p: `Wind speeds evaporation from the tear film, and grit on the eye’s surface adds irritation on top. A few spring habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses for yard work, field work and walks along the riverfront.`,
          `Keep the car’s fan on recirculate on gusty days, and aim the vents low.`,
          `If something blows into your eye, blink and let tears wash it out rather than rubbing.`,
          `Rinse your face and hands after a dusty job before you touch your eyes or put in a drop.`,
        ],
      },
      { h: 'Why do my eyes feel dry and itchy in a Sioux City winter?' },
      {
        p: `December afternoons at the airport average 70 percent humidity, so the outdoor air isn’t the culprit. Indoors is another matter. With about 51 days a year that never get above freezing, furnaces run hard, and warmed winter air carries far less moisture relative to what it could hold. Dryness and itching often show up together in that air. A bedroom humidifier, a cooler thermostat setting at night, and furniture moved away from floor registers all cut down the drying. [Dry, itchy eyes in winter](/guides/dry-itchy-eyes-in-winter) walks through the indoor side.`,
      },
      {
        p: `Itching that comes with sneezing or swelling, or that doesn’t ease with simple measures, is worth describing to an eye doctor. A lubricating drop isn’t meant to sort out what’s behind it.`,
      },
      { h: 'Summer heat and harvest dust' },
      {
        p: `July afternoons average 59 percent humidity, so a Sioux City summer isn’t dry in the way the desert is. What it adds is heat and air conditioning. About 25 days a year reach 90°F, and offices, trucks and homes run cold, dehumidified air for weeks at a stretch. In October, afternoons drop back to 54 percent as fields come down and dust picks up again. Anyone who drives the county roads or works around grain should keep safety glasses or sunglasses handy through harvest.`,
      },
      { h: 'Using Quell as the label directs' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, the Uses are: {uses}. The directions are: {directions}. The label also cautions: {warnings}.`,
      },
      {
        p: `Two other lines matter in a place with cold winters and hot summers. Storage: {storage}. A pickup cab can get far hotter or colder than that, so carry the bottle in a coat or bag. And for clean handling: {tip}. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Getting Quell delivered in Siouxland' },
      {
        p: `We ship from Brentwood, Tennessee, to Sioux City, Sergeant Bluff, Le Mars, and across the river to South Sioux City and North Sioux City, since we ship to every US state. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised. See the [Sioux City page](/eye-drops/sioux-city-ia) and the [Iowa page](/eye-drops/state/iowa) for more.`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `Lubricating drops are for everyday dryness. If your eyes stay dry no matter the season, or something feels wrong, an eye doctor can examine them and find the reason. The label sets its own limit: {stopUse} Pain, changes in vision or a lot of light sensitivity call for a visit soon. You can use the [dry eye self-check](/self-check) to sort out your symptoms first; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Sioux City?',
        a: `April, according to NOAA’s long-term wind table for Sioux Gateway Airport, with March close behind. August is the calmest month.`,
      },
      {
        q: 'How much rain does Sioux City, Iowa get?',
        a: `About 29.27 inches of precipitation a year at Sioux Gateway Airport, in NOAA’s 1991 to 2020 normals. June is wettest at 4.35 inches and January driest at 0.69.`,
      },
      {
        q: 'Why do my eyes get dry in the spring in Iowa?',
        a: `In Sioux City, April is both the windiest month and the one with the lowest afternoon humidity, about 52 percent. Wind and drier air speed evaporation from the tear film, and spring dust can add irritation.`,
      },
      {
        q: 'Does Quell ship to Sioux City, Iowa?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Sioux City and any other US address. Checkout is as a guest, tracking comes by email, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-north-platte-ne:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024023.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024023.csv
   *   (NORTH PLATTE RGNL AP, elev 846.7 m: annual precip 21.08 in; Jan 0.39,
   *   Dec 0.45, Nov 0.49, Jun 3.54; DJF 1.41 in; annual snow 29.6 in, Feb 6.9;
   *   Jan high 40.7 F, Jan low 11.9 F; Jul high 89.7 F, Jul low 61.4 F; 39.0 days
   *   at or above 90 F; 3.7 days at or above 100 F; 174.6 nights at or below 32 F;
   *   96.5 nights at or below 20 F; 12.2 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (NORTH PLATTE, NE, WBAN 24023: Apr 81/48, Sep 84/48, Oct 83/47, Aug 87/52,
   *   Jan 80/61, annual 83/53, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (NORTH PLATTE annual 4.1, lowest of the seven Nebraska rows: Grand Island 5.0,
   *   Norfolk 4.7, Omaha 4.5, Lincoln 4.4, Scottsbluff 4.4, Valentine 4.4;
   *   Apr 5.2 highest month, Aug 3.6 lowest)
   * Elevation is the NOAA station elevation, converted (846.7 m is about 2,778 ft).
   */
  {
    slug: 'dry-eye-relief-north-platte-ne',
    title: 'Dry eye relief in North Platte, Nebraska',
    description:
      'North Platte gets about 21 inches of precipitation a year, and fall afternoons drop to 47 percent humidity. NOAA data and everyday dry eye relief for the area.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `North Platte sits where the Plains start turning semi-arid, with about 21 inches of precipitation a year and the driest afternoons in fall and spring, near 47 to 48 percent humidity in NOAA’s records. Winters are dry and cold, and summers bring about 39 days at 90°F. For dry eyes, guard against wind and dust outdoors, keep heated indoor air from drying out, and use a lubricating drop exactly as labeled.`,
      },
      { h: 'North Platte’s climate in numbers' },
      {
        p: `North Platte Regional Airport, east of town at about 847 meters (around 2,780 feet), is the station behind the city’s official normals. For 1991 to 2020, NOAA lists:`,
      },
      {
        list: [
          `21.08 inches of precipitation a year, with June the wettest month at 3.54 inches.`,
          `A very dry winter: January averages 0.39 inch, December 0.45, and the three winter months together only 1.41.`,
          `29.6 inches of snow a year, the most in February at 6.9 inches.`,
          `July highs near 90°F, and about 39 days a year at 90°F or above, with three or four reaching 100°F.`,
          `About 175 nights at 32°F or colder, nearly 97 at 20°F or colder, and about a dozen at zero or below.`,
        ],
      },
      {
        p: `The daily range is wide in every season. January averages a high of 40.7°F and a low of 11.9°F, a swing of almost 29 degrees. July runs from about 61°F at dawn to about 90°F in the afternoon. Dry air heats and cools quickly, and your eyes feel that difference between a cold morning and a mild, drier afternoon.`,
      },
      { h: 'Less windy than you might think' },
      {
        p: `North Platte has a reputation as a windy place, and it does get wind, but NOAA’s long-term wind table tells a more modest story. Of the seven Nebraska stations listed, North Platte has the lowest annual average. Grand Island, Norfolk and Omaha all rank higher. April is its windiest month and August its calmest. So wind matters here mainly in spring and on the gusty days that come with passing storms, rather than as a constant.`,
      },
      {
        p: `When it does blow, the tear film pays for it. Spring fieldwork, a long day on Lake Maloney, or a morning watching trains at Union Pacific’s Bailey Yard from the Golden Spike Tower’s open deck all leave your eyes in moving air. Wraparound sunglasses help more than flat lenses because they close the gap at the sides.`,
      },
      { h: 'Fall and spring: the driest afternoons' },
      {
        p: `NOAA’s humidity table puts North Platte’s October afternoons at 47 percent and April and September at 48. For comparison, Dubuque’s monthly afternoon average, in eastern Iowa, never falls below 56. Mornings, by contrast, stay in the low to mid 80s year round, so the dry part of the day comes after lunch. If your eyes feel worse in the afternoon than the morning, that’s the pattern the numbers predict.`,
      },
      {
        list: [
          `Schedule outdoor chores, hunting walks or yard cleanup for the morning when you can.`,
          `Take a break in the shade or the truck cab, and blink slowly a few times before heading back out.`,
          `Keep sunglasses on the dash so you aren’t squinting into low autumn sun on I-80.`,
        ],
      },
      { h: 'Winter inside, and dry eyes when you wake up' },
      {
        p: `With nearly 100 nights a year at 20°F or colder, furnaces in North Platte work hard from November to March. Heated air indoors is far drier than the cold air outside, and many people first notice it in the morning, after hours with a heat register blowing across the bed. A humidifier, a lower night setting on the thermostat, and a closed register near the bed often help. [Dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up) has more on that pattern.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses: {uses}. The directions: {directions}. And a caution worth reading before the first drop: {warnings}.`,
      },
      {
        p: `Storage on the label reads: {storage}. That’s a narrower range than a North Platte truck sees in a year, from below zero in January to well over 100°F inside a parked cab in July, so keep the bottle with you rather than in the vehicle. To keep the dropper clean: {tip}. The [Drug Facts page](/drug-facts) shows the whole panel.`,
      },
      { h: 'Ordering to North Platte' },
      {
        p: `Quell ships from Brentwood, Tennessee, to North Platte, Hershey, Sutherland and any other address in the US, including rural routes. Guest checkout is available. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, and since no delivery date is promised, reorder with a little time to spare. The [North Platte page](/eye-drops/north-platte-ne) and the [Nebraska page](/eye-drops/state/nebraska) have more.`,
      },
      { h: 'Knowing when a drop isn’t enough' },
      {
        p: `Dry, gritty eyes after a windy afternoon are common. Eyes that hurt, see poorly, or stay irritated week after week need an exam, not more drops. The label says it directly: {stopUse} If you’re unsure whether to wait, read our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Is North Platte, Nebraska a dry climate?',
        a: `Fairly dry. NOAA’s 1991 to 2020 normals put North Platte Regional Airport at about 21 inches of precipitation a year, with only 1.41 inches from December through February, and October afternoons average 47 percent humidity.`,
      },
      {
        q: 'Is North Platte windier than the rest of Nebraska?',
        a: `Not by NOAA’s long-term averages. Of the seven Nebraska stations in its wind table, North Platte has the lowest annual average, though April can still be gusty.`,
      },
      {
        q: 'How hot does North Platte get in the summer?',
        a: `July highs average 89.7°F at the airport, and about 39 days a year reach 90°F or more. Three or four days a year reach 100°F.`,
      },
      {
        q: 'Can I get Quell shipped to a rural address near North Platte?',
        a: `Yes, Quell ships to any US address, rural ones included, from Brentwood, Tennessee. You’ll get tracking by email, though no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-dodge-city-ks:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013985.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013985.csv
   *   (DODGE CITY, KS US, elev 789.4 m: annual precip 22.00 in; Jan 0.60, Feb 0.62,
   *   Jun 3.29; DJF 2.18 in; annual snow 19.1 in; Jul high 93.7 F; Jan high
   *   45.6 F, Jan low 20.3 F; 70.9 days at or above 90 F; 14.1 days at or above
   *   100 F; 127.5 nights at or below 32 F; 19.1 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (DODGE CITY, KS, WBAN 13985: Jul 78/45, Apr 76/46, Oct 76/46, Jan 76/57,
   *   annual 78/50, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (DODGE CITY annual 5.8; of 265 rows only Mt. Washington NH, Cold Bay AK,
   *   St. Paul Island AK, Kwajalein and Lihue HI are higher; Amarillo TX ties at
   *   5.8. Apr 6.7 highest month, Aug 5.1 lowest. Kansas: Goodland 5.4,
   *   Wichita 5.1, Concordia 4.9, Topeka 3.6 with Apr 4.4 its highest month)
   * Elevation is the NOAA station elevation, converted (789.4 m is about 2,590 ft).
   */
  {
    slug: 'dry-eye-relief-dodge-city-ks',
    title: 'Dry eye relief in Dodge City, Kansas',
    description:
      'Dodge City ranks among the windiest stations in NOAA’s records and sees about 71 days a year at 90°F. What that does to your eyes, and how to get relief.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dodge City is one of the windiest places in NOAA’s long-term records, and wind is the main thing drying eyes there. Add about 71 days a year at 90°F or hotter, afternoon humidity that dips to 45 percent in July, and dust from fields and feedyards. Relief starts with blocking the wind: wraparound glasses outdoors, vents aimed away from your face, regular blink breaks, and a lubricating drop used as labeled.`,
      },
      { h: 'How windy is Dodge City?' },
      {
        p: `NOAA publishes long-term average wind for about 265 weather stations. Dodge City’s annual average ties Amarillo, Texas, and among all the stations in the lower 48 states, only the summit of Mount Washington in New Hampshire averages higher. The few others above it are in Alaska or on Pacific islands. Within Kansas, Dodge City outranks Goodland, Wichita, Concordia and Topeka.`,
      },
      {
        p: `The month-by-month numbers make the point even more clearly. April is Dodge City’s windiest month and August its calmest, but its calmest month is still windier than Topeka’s windiest. There is no quiet season here, just a gustier spring.`,
      },
      {
        p: `Moving air pulls water from the surface of the eye between blinks, and the more steadily it blows, the faster the tear film thins. In Dodge City, that’s close to every day you spend outside.`,
      },
      { h: 'The rest of Dodge City’s climate' },
      {
        p: `NOAA’s 1991 to 2020 normals for the Dodge City station, at about 789 meters (roughly 2,590 feet), fill in the picture:`,
      },
      {
        list: [
          `About 22 inches of precipitation a year, most of it from May through August; June is wettest at 3.29 inches.`,
          `January (0.60 inch) and February (0.62) are the driest months.`,
          `July highs average 93.7°F; about 71 days a year reach 90°F, and about 14 reach 100°F.`,
          `Snow averages 19.1 inches a year, and only about 19 days have a high at or below freezing.`,
          `About 128 nights a year fall to 32°F or below.`,
        ],
      },
      {
        p: `Humidity is lowest in midsummer. NOAA’s table gives July afternoons an average of 45 percent, with April and October at 46. Hot, dry, windy afternoons are the hardest combination on the eyes, and Dodge City gets plenty of them.`,
      },
      { h: 'Dust, feedyards and fieldwork' },
      {
        p: `Southwest Kansas runs on cattle, wheat and the work that goes with them. Wind lifts dust from pens, dirt roads, plowed fields and construction sites, and fine grit on the eye adds irritation on top of the drying. If you work outdoors:`,
      },
      {
        list: [
          `Wear wraparound safety glasses that meet your job’s requirements; they block wind and debris together.`,
          `Turn your back to a strong gust instead of squinting into it.`,
          `Don’t rub. Blink and let tears flush a speck out, and wash your hands before touching your eyes.`,
          `Keep a clean bandana or cloth in the cab to wipe your face before putting in a drop.`,
        ],
      },
      {
        p: `Our guide on [dry eyes for farmers](/guides/dry-eyes-for-farmers) covers long days in fields, cabs and barns.`,
      },
      { h: 'Inside the house, the truck and the office' },
      {
        p: `Air conditioning runs most of the summer, and it pulls moisture out as it cools. A vent blowing straight at your face on US-50 or US-400 dries your eyes much faster than one aimed at your chest. In winter, the heat does the same. Point vents low, keep a humidifier in the bedroom in winter, and look away from screens every so often for a few slow, full blinks.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. Caution: {warnings}.`,
      },
      {
        p: `On handling, the label says: {tip}. On storage: {storage}. Dodge City summers can push a parked vehicle well past that upper limit, so carry the bottle with you. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Dodge City' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Dodge City, Garden City, Cimarron, Spearville and every other US address, rural routes included. Checkout is available as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; we don’t promise a delivery date. The [Dodge City page](/eye-drops/dodge-city-ks) and the [Kansas page](/eye-drops/state/kansas) have more local information.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Windburned, tired eyes after a long day are common here. Pain, blurry vision that doesn’t clear, or something stuck in your eye that won’t wash out need an eye doctor, and quickly if you were hit by debris. The label sets the boundary for the drop: {stopUse} The [self-check](/self-check) can help you describe your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Is Dodge City the windiest city in the US?',
        a: `It’s among the windiest in NOAA’s long-term wind table. Dodge City ties Amarillo, and among lower-48 stations only the summit of Mount Washington in New Hampshire averages higher.`,
      },
      {
        q: 'What is the windiest month in Dodge City, Kansas?',
        a: `April, by NOAA’s monthly averages. August is the calmest, though even August in Dodge City is windier than Topeka’s windiest month.`,
      },
      {
        q: 'How many days a year is Dodge City over 90 degrees?',
        a: `About 71 days in NOAA’s 1991 to 2020 normals, with roughly 14 days reaching 100°F. July highs average 93.7°F.`,
      },
      {
        q: 'Why do my eyes burn on windy days in western Kansas?',
        a: `Steady wind evaporates the tear film faster, and blowing dust adds irritation. Wraparound glasses and a few slow blinks out of the wind help; burning that persists or comes with pain belongs with an eye doctor.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-elko-nv:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024121.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024121.csv
   *   (ELKO RGNL AP, elev 1533.1 m: annual precip 9.99 in; JJA 1.26 in; Jul 0.36,
   *   Aug 0.33, May 1.22, Dec 1.20, Jan 1.19; annual snow 41.2 in, Jan 10.4,
   *   Dec 10.2; Jul high 91.8 F, Jul low 52.0 F; Jan low 16.0 F; 47.7 days at or
   *   above 90 F; 194.8 nights at or below 32 F; 9.2 nights at or below 0 F;
   *   48.5 days with snow depth of 1 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ELKO, NV, WBAN 24121: Jul 48/18, Aug 47/18, Sep 52/21, Jun 58/24,
   *   Jan 77/62, Dec 76/63, annual 64/37, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ELKO annual 2.6, lowest of the five Nevada rows: Reno 2.8, Winnemucca 3.4,
   *   Las Vegas 3.7, Ely 4.3; Apr 3.1 highest month; Oct to Jan 2.2)
   * Elevation is the NOAA station elevation, converted (1533.1 m is about 5,030 ft).
   */
  {
    slug: 'dry-eye-relief-elko-nv',
    title: 'Dry eye relief in Elko, Nevada',
    description:
      'Elko gets under 10 inches of precipitation a year, and July and August afternoons average 18 percent humidity at 5,000 feet. NOAA data and practical relief.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Elko is high desert: about 5,030 feet up, with under 10 inches of precipitation a year and July and August afternoons averaging just 18 percent humidity in NOAA’s records. Winters add months of furnace heat. For dry eyes, protect them from sun, dust and wind outdoors, keep indoor air from getting too dry, take blink breaks during screen work, and use a lubricating drop as directed on its label.`,
      },
      { h: 'Elko’s climate in the NOAA record' },
      {
        p: `Elko Regional Airport, the city’s weather station, sits at about 1,533 meters, or roughly 5,030 feet, on the Humboldt River valley floor. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `9.99 inches of precipitation in a normal year.`,
          `June through August together bring only 1.26 inches, with July at 0.36 and August at 0.33.`,
          `41.2 inches of snow a year, mostly in December (10.2) and January (10.4).`,
          `July highs average 91.8°F, and about 48 days a year reach 90°F.`,
          `About 195 nights a year fall to freezing or below, more than half the year, and about nine drop to zero.`,
        ],
      },
      {
        p: `July’s average low is 52°F against a high near 92°F, a 40-degree swing between dawn and late afternoon. Thin, dry air at altitude loses heat fast at night and gains it fast in the sun.`,
      },
      { h: 'Why Elko summers are so hard on eyes' },
      {
        p: `NOAA’s humidity table lists Elko’s July and August afternoons at 18 percent, with September at 21 and June at 24. Summer mornings only reach 47 to 58 percent. Air that dry pulls water from the eye’s surface quickly, and the high-altitude sun adds glare that makes people squint and blink less fully.`,
      },
      {
        list: [
          `Wear wraparound sunglasses with side coverage, especially on the drive up Lamoille Canyon or a hike in the Ruby Mountains.`,
          `Use a hat brim to cut overhead sun and reduce squinting.`,
          `Plan long outdoor work for the morning, when humidity runs far higher than in the afternoon.`,
          `Keep the car’s AC on recirculate and the vents pointed low.`,
        ],
      },
      { h: 'Calm air, but plenty of dust' },
      {
        p: `Here’s a surprise in NOAA’s wind table: Elko has the lowest annual average wind of the five Nevada stations listed, below Reno, Winnemucca, Las Vegas and Ely. April is its breeziest month, and October through January are the calmest. So it isn’t constant wind that dries eyes in Elko. It’s the dry air itself, plus dust from dirt roads, ranch work, construction and the mines around the region.`,
      },
      {
        p: `Mine and ranch work bring long shifts in dust, often with safety eyewear as part of the job. That eyewear is what keeps grit out; a drop is not a substitute. Keep wipes or a clean cloth in your truck so your hands and face are clean before you put a drop in. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more for long days outside.`,
      },
      { h: 'Elko winters: snow outside, dry heat inside' },
      {
        p: `From November to February, Elko’s afternoon humidity climbs to 49 percent in November and the low 60s in December and January. But that’s outdoors. With about 195 freezing nights a year and roughly 48 days with an inch or more of snow on the ground, homes are heated for much of the year, and heated mountain air is very dry. Put a humidifier in the bedroom, keep the thermostat lower at night, and point registers away from where you sit and sleep. If you come into town for the Cowboy Poetry Gathering in winter, a hotel room’s heater can dry your eyes the same way; [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has tips.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, as printed on the Drug Facts panel: {uses}. The directions: {directions}. The label’s caution: {warnings}.`,
      },
      {
        p: `Elko’s temperatures span far more than the label’s storage range, which reads: {storage}. A bottle left in a truck at a mine site can freeze in January or overheat in July, so keep it in a pocket or lunch bag. And remember: {tip}. The full text is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Elko' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Elko, Spring Creek, Carlin and any other US address. Check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking is emailed to you. We don’t promise a delivery date, and northeastern Nevada is a long way from Tennessee, so keep a spare on hand. The [Elko page](/eye-drops/elko-nv) and the [Nevada page](/eye-drops/state/nevada) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry desert air can make healthy eyes uncomfortable. But if dryness never lets up, or comes with pain, light sensitivity or blurred vision, it’s time for an eye exam. The label says: {stopUse} Anything that hits your eye with force at work, or a speck that won’t rinse out, needs prompt care. See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How dry is Elko, Nevada?',
        a: `Very dry. NOAA’s 1991 to 2020 normals put Elko Regional Airport at 9.99 inches of precipitation a year, and its July and August afternoons average 18 percent relative humidity.`,
      },
      {
        q: 'What is the elevation of Elko, Nevada?',
        a: `The NOAA weather station at Elko Regional Airport sits at about 1,533 meters, roughly 5,030 feet.`,
      },
      {
        q: 'Does Elko get a lot of snow?',
        a: `About 41 inches a year at the airport, mostly in December and January, which each average a little over 10 inches. Roughly 48 days a year have an inch or more of snow on the ground.`,
      },
      {
        q: 'Can I leave eye drops in my truck in an Elko winter?',
        a: `It’s better not to. Elko averages about 195 nights a year at or below freezing, far colder than the label’s storage line allows: {storage}. Keep the bottle in a pocket or bring it inside.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-medford-or:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024225.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024225.csv
   *   (MEDFORD ROGUE VLY AP, elev 395.3 m: annual precip 18.43 in; Dec 3.53,
   *   Jan 2.72, Nov 2.61, Jul 0.24, Aug 0.33; JJA 1.25 in; DJF 8.21 in; annual
   *   snow 3.4 in; Jul high 91.6 F, Aug 91.1 F; Dec low 32.6 F; 61.2 days at or
   *   above 90 F; 10.6 days at or above 100 F; 63.9 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MEDFORD, OR, WBAN 24225: Jul 67/25, Aug 67/26, Sep 72/29, Dec 91/76,
   *   Jan 90/71, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (MEDFORD annual 1.8, third lowest of 265 rows after Los Angeles 0.8 and
   *   Oak Ridge TN 1.1; Jun 2.4 highest month, Oct and Nov 1.3 lowest)
   * Eugene comparison: Eugene Mahlon Sweet Ap annual precip 40.83 in (fetched today).
   * Elevation is the NOAA station elevation, converted (395.3 m is about 1,297 ft).
   */
  {
    slug: 'dry-eye-relief-medford-or',
    title: 'Dry eye relief in Medford, Oregon',
    description:
      'Medford averages 61 days a year at 90°F, and July afternoons drop to 25 percent humidity. NOAA’s numbers for the Rogue Valley and how to ease dry eyes there.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Medford isn’t the rainy Oregon most people picture. The Rogue Valley gets about 18 inches of precipitation a year, and NOAA’s records show July afternoons averaging 25 percent humidity with about 61 days a year at 90°F or hotter. Summer is the hard season for dry eyes. Keep air conditioning off your face, wear sunglasses outdoors, rest your eyes at screens, and use a lubricating drop as labeled.`,
      },
      { h: 'The Rogue Valley’s climate, from NOAA' },
      {
        p: `Medford’s weather station is at Rogue Valley International-Medford Airport, about 395 meters (close to 1,300 feet) above sea level. NOAA’s 1991 to 2020 normals:`,
      },
      {
        list: [
          `18.43 inches of precipitation a year, less than half of Eugene’s total.`,
          `December is the wettest month at 3.53 inches; July (0.24) and August (0.33) are nearly dry.`,
          `June through August together bring only 1.25 inches.`,
          `July highs average 91.6°F, and about 61 days a year reach 90°F, with roughly 11 hitting 100°F.`,
          `Snow is rare in town, about 3.4 inches a year, and only about 64 nights reach freezing.`,
        ],
      },
      {
        p: `In short, Medford has a hot, dry summer and a cool, damp winter, closer to inland California than to the Willamette Valley.`,
      },
      { h: 'Summer: the dry season for Medford eyes' },
      {
        p: `NOAA’s humidity table lists July afternoons at 25 percent and August at 26, with September close behind at 29. Mornings start near 67 percent, so a July day goes from mild to parched by mid-afternoon. Heat, low humidity and long hours in air conditioning all speed evaporation from the tear film.`,
      },
      {
        list: [
          `Get outdoor chores, orchard work and runs on the Bear Creek Greenway done before noon when you can.`,
          `Aim car and office vents at your chest instead of your face.`,
          `Wear wraparound sunglasses on the Rogue River or the Table Rocks trails; they cut glare and drying air together.`,
          `Indoors, take short screen breaks and close your eyes for a few seconds now and then.`,
        ],
      },
      { h: 'One of the calmest places in NOAA’s wind table' },
      {
        p: `Of the roughly 265 stations in NOAA’s long-term wind table, Medford has the third-lowest annual average, behind only Los Angeles and Oak Ridge, Tennessee. June is its breeziest month, and October and November are the calmest. That’s good news for eyes in one way: wind isn’t what dries them here. Heat, low humidity and indoor air do most of that work. If your eyes feel dry on a still day in Medford, wind is the wrong suspect, and your car’s AC or the office ventilation is a better place to look.`,
      },
      { h: 'Winter: damp outside, heated inside' },
      {
        p: `December mornings at the airport average 91 percent humidity and afternoons 76, so winter in the valley is genuinely damp. It isn’t harsh, either, with lows that hover near freezing rather than far below it. Still, homes run heat from November into March, and that warmed air dries out. A small humidifier in the bedroom and a register turned away from your favorite chair are usually enough. The [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) guide has more ideas.`,
      },
      { h: 'Day trips to Crater Lake and the mountains' },
      {
        p: `Many Medford residents head up to Crater Lake, Mount Ashland or the Cascades on weekends. Higher elevations bring thinner, drier air, more sun and often more wind. Pack sunglasses with side coverage and keep your drops in a pocket, not baking in the car at the trailhead. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why elevation matters to your eyes.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. The directions are: {directions}. The panel cautions: {warnings}.`,
      },
      {
        p: `For storage, the label says: {storage}. On a 100°F Medford afternoon, a closed car climbs far above that, so take the bottle with you. And for clean use: {tip}. See the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Medford' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Medford, Central Point, Phoenix, Talent, Ashland and the rest of the US. Guest checkout is available. Shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll receive tracking by email, but we can’t promise a delivery date. More local details are on the [Medford page](/eye-drops/medford-or) and the [Oregon page](/eye-drops/state/oregon).`,
      },
      { h: 'When to see an eye doctor in the Rogue Valley' },
      {
        p: `Seasonal dryness is common in a hot, dry valley. Dryness that won’t quit, or comes with pain, light sensitivity or vision changes, needs an eye doctor. The label is direct about it: {stopUse} For a quick way to organize what you’re noticing, try the [self-check](/self-check); it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Is Medford, Oregon dry in the summer?',
        a: `Yes. NOAA’s 1991 to 2020 normals show July averaging just 0.24 inch of precipitation at the Medford airport, with afternoon humidity around 25 percent.`,
      },
      {
        q: 'How hot does Medford get?',
        a: `July highs average 91.6°F at Rogue Valley International-Medford Airport. About 61 days a year reach 90°F, and about 11 reach 100°F.`,
      },
      {
        q: 'Is Medford windy?',
        a: `No. In NOAA’s long-term wind table, Medford has one of the lowest annual averages of any station, ranking third calmest of about 265.`,
      },
      {
        q: 'Does Quell ship to Medford and Ashland, Oregon?',
        a: `Yes. Quell ships to Medford, Ashland and every other US address from Brentwood, Tennessee. Tracking comes by email, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-eugene-or:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024221.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024221.csv
   *   (EUGENE MAHLON SWEET AP, elev 107.6 m: annual precip 40.83 in; Dec 7.21,
   *   Jan 6.05, Nov 5.98, Jul 0.32, Aug 0.39; DJF 17.93 in; JJA 1.94 in; 89.8
   *   days with 0.10 in or more; Jul high 84.0 F, Aug 84.3 F; Dec low 34.3 F;
   *   18.0 days at or above 90 F; 51.8 nights at or below 32 F. No snowfall
   *   normal is published for this station, so snow is not mentioned.)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (EUGENE, OR, WBAN 24221: Dec 91/84, Jan 90/81, Nov 91/79, Jul 79/38,
   *   Aug 80/38, annual 86/61, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (EUGENE annual 3.1; monthly range only 2.8 (Oct) to 3.3 (Mar, Jul))
   * Medford comparison: Medford Rogue Vly Ap annual precip 18.43 in (fetched today).
   * Elevation is the NOAA station elevation, converted (107.6 m is about 353 ft).
   */
  {
    slug: 'dry-eye-relief-eugene-or',
    title: 'Dry eye relief in Eugene, Oregon',
    description:
      'Eugene gets nearly 41 inches of precipitation a year, yet dry eyes are common. How heated rooms, screens and a rainless July and August play a part.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Eugene is wet, with nearly 41 inches of precipitation a year in NOAA’s records, but dry eyes there come from indoor air and habits more than weather. Heated rooms through the long rainy season, hours at screens, and a nearly rainless July and August with afternoon humidity near 38 percent all thin the tear film. Manage the heat and the screens, and use a lubricating drop as labeled.`,
      },
      { h: 'Eugene’s weather in NOAA’s figures' },
      {
        p: `Eugene’s official station is at Mahlon Sweet Field, the airport northwest of town, at about 108 meters, or roughly 350 feet. Its 1991 to 2020 normals describe a mild, wet Willamette Valley climate with a sharp dry season:`,
      },
      {
        list: [
          `40.83 inches of precipitation in a normal year, more than twice Medford’s.`,
          `December is the wettest month at 7.21 inches, followed by January (6.05) and November (5.98).`,
          `July (0.32 inch) and August (0.39) are close to dry; all of summer brings under two inches.`,
          `About 90 days a year bring a tenth of an inch of rain or more.`,
          `Summer highs average about 84°F, with roughly 18 days at 90°F or above.`,
          `About 52 nights a year reach freezing, with winter lows averaging in the mid 30s.`,
        ],
      },
      { h: 'Why do my eyes feel dry all the time in such a rainy town?' },
      {
        p: `Outdoors, Eugene’s winter air is about as moist as air gets. NOAA’s humidity table puts December mornings at 91 percent and afternoons at 84. But most people spend those months inside, and homes, classrooms and offices run their heat from October into spring. Warming cool, damp air without adding water lowers its relative humidity, so the air around your desk can feel much drier than the drizzle outside the window. Add a screen, which slows blinking, and the tear film evaporates faster than it’s replaced.`,
      },
      {
        list: [
          `Keep a humidifier in the room where you spend the most time, and clean it as its manual directs.`,
          `Turn space heaters and floor vents away from your face.`,
          `Lower your screen a little so your upper eyelids cover more of each eye.`,
          `Every so often, look out the window at something far away and blink fully a few times.`,
        ],
      },
      { h: 'Campus, screens and long study nights' },
      {
        p: `With the University of Oregon and Lane Community College in town, plenty of Eugene residents spend their winters reading, writing and studying on laptops in heated buildings. That’s a recipe for dry, tired eyes by the end of the day, especially during finals in December and March. Our guide to [dry eyes while studying](/guides/dry-eyes-while-studying) covers routines for long sessions.`,
      },
      { h: 'July and August: Eugene’s short dry season' },
      {
        p: `Then summer flips the calendar. July and August afternoons at the airport average 38 percent humidity, less than half the winter figure, and almost no rain falls. The air is warm and dry, sun glare comes off the Willamette River, and trails like Spencer Butte and Ridgeline see their busiest weeks. A few habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the river, the bike paths and the trails.`,
          `Run and ride in the morning, when humidity sits near 80 percent.`,
          `Keep car vents pointed away from your eyes on the drive to the coast or the Cascades.`,
        ],
      },
      {
        p: `NOAA’s wind table shows little seasonal change in Eugene’s wind: the breeziest and calmest months differ only slightly. So summer dryness here is about heat, sun and dry air rather than gusts.`,
      },
      { h: 'Quell’s label, in its own words' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. The label also notes: {warnings}.`,
      },
      {
        p: `Two other lines are worth knowing. On handling: {tip}. On storage: {storage}. Eugene’s mild winters rarely threaten that range, but a car parked in the sun on an August afternoon can exceed it. The complete panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Eugene and Springfield' },
      {
        p: `We ship from Brentwood, Tennessee, to Eugene, Springfield, Junction City, Cottage Grove and any other US address. Check out as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised. See the [Eugene page](/eye-drops/eugene-or) and the [Oregon page](/eye-drops/state/oregon) for more.`,
      },
      { h: 'When it’s more than dry air' },
      {
        p: `If your eyes feel dry whatever the season, an eye doctor can look for the reason. The label’s stop-use list applies to anyone using the drop: {stopUse} Eye pain, sudden vision changes or strong light sensitivity need prompt attention. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Eugene, Oregon get a year?',
        a: `About 40.83 inches of precipitation, according to NOAA’s 1991 to 2020 normals for Mahlon Sweet Field. December is wettest at 7.21 inches, and July is nearly dry at 0.32.`,
      },
      {
        q: 'Why are my eyes dry in Oregon when it rains so much?',
        a: `In Eugene and much of western Oregon, winters are spent indoors in heated air, which is far drier than the rain outside. Screen time slows blinking, and the combination dries the tear film.`,
      },
      {
        q: 'What are the driest months in Eugene?',
        a: `July and August. Each averages under half an inch of precipitation at the airport, and afternoon humidity drops to about 38 percent.`,
      },
      {
        q: 'Can I order Quell eye drops to Eugene?',
        a: `Yes. Quell ships to Eugene, Springfield and anywhere else in the US from Brentwood, Tennessee, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-yakima-wa:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024243.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024243.csv
   *   (YAKIMA AIR TERMINAL, elev 324.3 m: annual precip 8.01 in; Jul 0.20,
   *   Aug 0.21, Sep 0.23, Dec 1.44, Jan 1.19; JJA 0.91 in; annual snow 20.3 in,
   *   Dec 7.7, Jan 6.2; Jul high 89.9 F; Jan low 24.0 F; 40.2 days at or above
   *   90 F; 5.7 days at or above 100 F; 147.4 nights at or below 32 F; 19.0 days
   *   with a high at or below 32 F; 26.3 days with 0.10 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (YAKIMA, WA, WBAN 24243: Jul 61/25, Aug 63/27, Jun 63/30, May 64/31,
   *   Dec 84/76, Jan 83/72, annual 72/45, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (YAKIMA annual 2.8; Jun 3.4 highest month, Dec 1.8 lowest; Spokane 3.9,
   *   Walla Walla 3.5)
   * Eugene comparison: Eugene annual precip 40.83 in (fetched today).
   * Elevation is the NOAA station elevation, converted (324.3 m is about 1,064 ft).
   */
  {
    slug: 'dry-eye-relief-yakima-wa',
    title: 'Dry eye relief in Yakima, Washington',
    description:
      'Yakima gets about 8 inches of precipitation a year, and July afternoons average 25 percent humidity. Local NOAA numbers and dry eye relief for the valley.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Yakima sits in the rain shadow of the Cascades and gets only about 8 inches of precipitation a year, by NOAA’s 1991 to 2020 normals. July afternoons average 25 percent humidity, and summer brings about 40 days at 90°F. Winters are cold enough to keep the heat running for months. For dry eyes, shield them outdoors, keep indoor air from getting too dry, and use a lubricating drop exactly as labeled.`,
      },
      { h: 'Yakima’s climate in NOAA’s records' },
      {
        p: `The city’s station is Yakima Air Terminal, at about 324 meters (roughly 1,060 feet). NOAA’s normals for it read like a desert that happens to grow fruit:`,
      },
      {
        list: [
          `8.01 inches of precipitation in a normal year, about a fifth of what Eugene, Oregon, gets.`,
          `July (0.20 inch), August (0.21) and September (0.23) are the driest months.`,
          `December is the wettest month, but even it brings only 1.44 inches.`,
          `About 20 inches of snow a year, mostly in December and January.`,
          `July highs near 90°F; about 40 days a year reach 90°F, and five or six reach 100°F.`,
          `About 147 nights fall to freezing, and January lows average 24°F.`,
          `Only about 26 days a year bring a tenth of an inch of precipitation or more.`,
        ],
      },
      { h: 'Why Yakima’s summer is hard on the eyes' },
      {
        p: `NOAA’s humidity table lists Yakima’s July afternoons at 25 percent, August at 27 and June at 30. Mornings are moister, in the low 60s, but the afternoon drop is steep. Throw in sun glare off pale hillsides and long days outdoors, and the tear film has a tough time. Picking cherries in June, thinning apples, working hop yards or harvesting grapes all put eyes in hot, dry, dusty air for hours.`,
      },
      {
        list: [
          `Start outdoor work early, while humidity is at its daily high.`,
          `Wear wraparound sunglasses or safety glasses with side shields in orchards and fields; branches and leaves are a hazard too.`,
          `Take water and shade breaks, and use them to close your eyes for a minute.`,
          `Wash dust off your hands before you touch your eyes or put in a drop.`,
        ],
      },
      {
        p: `[Dry eyes for farmers](/guides/dry-eyes-for-farmers) has more for long days in fields and orchards.`,
      },
      { h: 'Wind in the valley' },
      {
        p: `Yakima isn’t one of the state’s windier stations. NOAA’s long-term table puts its annual average below Spokane’s and Walla Walla’s. The seasonal pattern still matters: June is the breeziest month and December the calmest, so the windiest weeks line up with some of the driest. That’s why early summer can feel especially rough on the eyes, even before the July heat peaks. On the Yakima River, the Greenway path or a hike in Cowiche Canyon, sunglasses that wrap around the sides block the breeze better than flat lenses.`,
      },
      { h: 'Winter: cold, gray and heated indoors' },
      {
        p: `December and January flip the humidity picture, with afternoons at 76 and 72 percent in NOAA’s table. Outdoor air is damp and often gray, but the furnace runs hard through about 147 freezing nights a year. Heated indoor air dries out quickly. A bedroom humidifier, heat registers turned away from your face, and a cooler thermostat at night all help. Read our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) for the walk between a cold parking lot and a warm building.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses: {uses}. Directions: {directions}. Caution: {warnings}.`,
      },
      {
        p: `The label’s storage line reads: {storage}. A truck parked at the edge of an orchard in July, or left out on a January night, can go well outside that range. Keep the bottle in a cooler bag or your pocket. The tip rule matters in dusty work too: {tip}. See all of it on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Yakima' },
      {
        p: `We ship from Brentwood, Tennessee, to Yakima, Union Gap, Selah, Wapato and every other US address, rural roads included. Guest checkout is available, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised. For local details, see the [Yakima page](/eye-drops/yakima-wa) and the [Washington page](/eye-drops/state/washington).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry eyes in a dry valley are common, but persistent symptoms deserve an exam. The label is clear: {stopUse} A branch, leaf or chemical splash to the eye at work needs prompt care, not a drop. When unsure, review our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Yakima, Washington get?',
        a: `About 8.01 inches of precipitation a year at Yakima Air Terminal, by NOAA’s 1991 to 2020 normals. July, August and September each average about two-tenths of an inch.`,
      },
      {
        q: 'Is Yakima a desert?',
        a: `It’s very dry. Yakima gets about 8 inches of precipitation a year in the rain shadow of the Cascades, and July afternoons average 25 percent humidity in NOAA’s table.`,
      },
      {
        q: 'What is the windiest month in Yakima?',
        a: `June, according to NOAA’s long-term wind averages for Yakima Air Terminal. December is the calmest month.`,
      },
      {
        q: 'Does Quell ship to Yakima?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Yakima and any other US address, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-fresno-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093193.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093193.csv
   *   (FRESNO YOSEMITE INTL AP, elev 101.5 m: annual precip 10.99 in; Jan 2.16,
   *   Feb 1.93, Mar 1.90, Jun 0.24, Jul 0.03, Aug 0.00, Sep 0.05; JJA 0.27 in;
   *   annual snow 0.0; Jul high 97.7 F, Aug 96.5 F; Dec low 39.8 F; 113.3 days
   *   at or above 90 F; 38.4 days at or above 100 F; 10.7 nights at or below 32 F;
   *   2,209 cooling degree days vs 2,187 heating degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (FRESNO, CA, WBAN 93193: Jul 55/21, Aug 60/22, Jun 59/23, Sep 65/26,
   *   Dec 88/67, Jan 88/67, annual 73/40, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (FRESNO annual 2.7; May and Jun 3.7 highest, Nov 1.7 lowest; Sacramento
   *   and Bakersfield 2.8)
   * Elevation is the NOAA station elevation, converted (101.5 m is about 333 ft).
   */
  {
    slug: 'dry-eye-relief-fresno-ca',
    title: 'Dry eye relief in Fresno, California',
    description:
      'Fresno averages about 113 days a year at 90°F and close to 38 at 100°F, with July afternoons near 21 percent humidity. Dry eye relief for the long hot season.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Fresno’s dry-eye season is long. NOAA’s normals count about 113 days a year at 90°F or hotter and about 38 at 100°F, and July afternoons average just 21 percent humidity. From May into October, heat, glare and months of air conditioning all pull water from the tear film. Protect your eyes outdoors, keep vents off your face, take screen breaks, and use a lubricating drop as labeled.`,
      },
      { h: 'Fresno’s heat, by the numbers' },
      {
        p: `Fresno Yosemite International Airport, on the east side of the city at about 100 meters (roughly 330 feet), is the station behind Fresno’s official normals. For 1991 to 2020:`,
      },
      {
        list: [
          `July highs average 97.7°F and August 96.5°F.`,
          `About 113 days a year reach 90°F, close to a third of the year, and about 38 reach 100°F.`,
          `Normal precipitation is 10.99 inches, most of it from November through April.`,
          `June through August together average 0.27 inch, and August’s normal is zero.`,
          `Freezing nights are rare, about 11 a year, and no snow is normal at the airport.`,
        ],
      },
      {
        p: `One telling figure: the airport’s cooling degree days slightly outnumber its heating degree days. In plain terms, Fresno spends at least as much effort cooling buildings as heating them, which means a lot of hours in conditioned air.`,
      },
      { h: 'Afternoons in the low 20s' },
      {
        p: `NOAA’s humidity table gives Fresno’s July afternoons 21 percent, August 22 and June 23. Mornings run in the high 50s, so the daily drop is large. In air that dry, the tear film evaporates faster between blinks, and bright sun makes people squint, which shortens the full blink that spreads tears. Practical steps:`,
      },
      {
        list: [
          `Run errands, walk Woodward Park or ride the Sugar Pine Trail early in the day.`,
          `Wear wraparound sunglasses with UV protection; they cut glare and block hot, dry air.`,
          `Point car vents down and away on Highway 99, 41 or 168 instead of straight at your face.`,
          `Keep a cool spot at home where you can rest your eyes with a cool, damp washcloth after time outside.`,
        ],
      },
      { h: 'Living in air conditioning' },
      {
        p: `Fresno homes, offices, classrooms at Fresno State and cars run air conditioning for months. AC dries air as it cools it, and ceiling vents in an office often blow straight across a desk. If your eyes feel worse by evening, the indoor air may be as much to blame as the weather. Move your chair out of a vent’s path, use a desk fan only if it points away from you, and take short breaks from screens to blink fully. [Dry eyes in a hot workplace](/guides/dry-eyes-in-a-hot-workplace) has more for warehouses, kitchens and job sites.`,
      },
      { h: 'Trips up to Yosemite, Kings Canyon and the Sierra' },
      {
        p: `Fresno’s location makes mountain trips easy, and many residents head up Highway 41 to Yosemite or Highway 180 to Kings Canyon and Sequoia. Gaining several thousand feet means thinner air, stronger sun and often wind on ridgelines and lakes. Bring sunglasses with side coverage, keep a hat on, and don’t leave your drops in a hot car at the trailhead. Our guide on [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why elevation matters.`,
      },
      { h: 'Winter: cool, damp mornings' },
      {
        p: `Winter is Fresno’s easy season for eyes. December and January mornings average 88 percent humidity and afternoons 67 in NOAA’s table, and the wind table lists November as the calmest month. December lows average about 40°F, so homes do run some heat, but not for long stretches. If your eyes still feel dry in January, look at indoor sources like a space heater, a car heater on high or long screen sessions.`,
      },
      { h: 'Quell’s label, word for word' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, the Uses are: {uses}. The directions say: {directions}. The panel also cautions: {warnings}.`,
      },
      {
        p: `In a Fresno summer, storage needs attention. The label reads: {storage}. A parked car on a 100°F afternoon gets much hotter than that, so carry the bottle in a bag or keep it indoors. And for clean use: {tip}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Fresno' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Fresno, Clovis, Sanger, Madera and any other US address. Guest checkout is available. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email; no delivery date is promised. See the [Fresno page](/eye-drops/fresno-ca) and the [California page](/eye-drops/state/california) for more local information.`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `Hot, dry weather can leave eyes uncomfortable, but dryness that doesn’t ease, pain, or blurred vision that doesn’t clear with blinking needs an eye doctor. The label puts it plainly: {stopUse} To organize your symptoms before an appointment, use the [self-check](/self-check); it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How many 100 degree days does Fresno get a year?',
        a: `About 38 in NOAA’s 1991 to 2020 normals for Fresno Yosemite International Airport, out of roughly 113 days a year that reach 90°F or more.`,
      },
      {
        q: 'How humid is Fresno in the summer?',
        a: `Not very in the afternoon. NOAA’s table puts Fresno’s July afternoons at 21 percent relative humidity, August at 22 and June at 23. Mornings run in the high 50s.`,
      },
      {
        q: 'Does it rain in Fresno in the summer?',
        a: `Hardly at all. June through August average a combined 0.27 inch at the airport, and August’s normal precipitation is zero. Most of Fresno’s 10.99 inches fall from November through April.`,
      },
      {
        q: 'Can I get Quell delivered in Fresno or Clovis?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Fresno, Clovis and every other US address. Checkout is as a guest, tracking comes by email, and no delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-writer',
    title: 'Christmas gifts for a writer',
    description:
      'Gift ideas that make a writer’s long desk hours easier on the body and eyes, from a laptop riser to a drafting notebook to a small bottle of drops.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `The most useful Christmas gifts for a writer make the hours at the desk easier: a laptop riser and separate keyboard, a document holder, a timer that forces breaks, a notebook for drafting away from the screen, a quiet pair of headphones, and a bottle of lubricating eye drops. Writers stare at words for long stretches and blink less while they do, so comfort gifts tend to get used every day.`,
      },
      { h: 'What do writers actually want for Christmas?' },
      {
        p: `Ask most writers and they’ll say time. You can’t wrap that, but you can make the time they already have more comfortable. Writers are particular about pens, apps and software, so guessing their favorite tools is risky. The desk itself is safer ground. Look at where they work: the kitchen table, a spare bedroom, a café corner, a library carrel. Something that improves that spot gets used every day, which is more than you can say for a fourth writing-prompt book.`,
      },
      { h: 'Gifts that fix the desk' },
      {
        list: [
          `A laptop riser and a separate wireless keyboard, so the screen sits at a better height and their head isn’t bent all morning.`,
          `A document or copy holder that keeps notes and printed pages beside the screen at the same distance, so their eyes aren’t refocusing constantly.`,
          `A desk lamp with an adjustable arm and dimmer, to light notes without throwing glare onto the monitor.`,
          `A supportive seat cushion or footrest for deadline weeks.`,
          `A small humidifier for the room where they write, if the house runs forced-air heat in winter.`,
        ],
      },
      {
        p: `None of these is glamorous, which is part of the appeal. Writers rarely buy them for themselves.`,
      },
      { h: 'Gifts that pull them away from the screen' },
      {
        p: `Long drafting sessions are hard on the eyes because concentration slows the blink, and every blink is what spreads a fresh layer of tears. Gifts that change how or where a writer works give their eyes a natural break:`,
      },
      {
        list: [
          `A well-made notebook and a good pen for drafting longhand, then typing up later.`,
          `A pocket voice recorder, or a nice case for their phone’s dictation, for drafting out loud on a walk.`,
          `A sand timer or a simple kitchen timer for break reminders, since app notifications are easy to ignore.`,
          `A print-and-bind of their current manuscript, so they can mark it up in an armchair by the window.`,
          `A day pass or membership at a local writing space or library with good light.`,
        ],
      },
      {
        p: `Our guide to [dry eyes for writers](/guides/dry-eyes-for-writers) explains why changing tools and distances helps.`,
      },
      { h: 'Gifts by kind of writer' },
      {
        list: [
          `Novelists working on a long draft: a word-count journal, a riser, and an excuse to take a weekly walk without the laptop.`,
          `Journalists and freelancers on tight deadlines: noise-canceling headphones, a sturdy laptop bag, and a small kit for the bag with lip balm, a phone charger and eye drops.`,
          `Screenwriters and playwrights: tickets to a reading or a show, which is research and a night off in one.`,
          `Students writing a thesis: a study lamp, a good desk chair cushion, and snacks for finals week.`,
          `Poets and journal keepers: paper they’ll love writing on, and a pen that doesn’t skip.`,
        ],
      },
      { h: 'Eye drops as a writer’s stocking stuffer' },
      {
        p: `A bottle of Quell fits easily in a stocking or a desk drawer. It’s a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. Its directions are: {directions}. The bottle size is {size}.`,
      },
      {
        p: `A couple of things are worth knowing before you give it. The drops are milky brown, which surprises people who expect clear drops: {appearance} The label also carries this caution: {warnings}. And if your writer wears contact lenses or already uses other eye drops, Quell’s label doesn’t cover that; they should check with their eye doctor or pharmacist first.`,
      },
      { h: 'Ordering a gift and getting it there in time' },
      {
        p: `You can order Quell as a guest and ship it to your own address or straight to the writer. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, so a writing group gift for several friends can add up quickly. We ship from Brentwood, Tennessee, within the US only, and tracking comes by email. We don’t promise a delivery date, and December is busy for every shipper, so ordering early is the safe choice. See [ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) for timing tips.`,
      },
      {
        p: `If the gift turns out not to suit them, unopened bottles can be refunded within {returnDays} days of delivery, and you don’t need to send them back. There are no promo codes and no subscription, so there’s nothing to cancel later.`,
      },
      { h: 'Gifts to skip, and when a doctor is the better gift' },
      {
        p: `Skip anything that makes a health promise. If a writer complains that their eyes burn or blur every afternoon, a gift card won’t answer that, but encouragement to book an eye exam might. Their glasses may not suit screen distance, or something else may be going on that needs a professional look. The label’s own limit is clear: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a gentle thing to pass along.`,
      },
    ],
    faq: [
      {
        q: 'What is a good gift for a writer who has everything?',
        a: `Something that improves their workspace rather than another notebook: a laptop riser with a separate keyboard, a document holder, a dimmable desk lamp or a small humidifier for winter. Writers seldom buy these for themselves.`,
      },
      {
        q: 'Are eye drops a thoughtful gift for a writer?',
        a: `They can be, as a small extra. Writers spend long stretches focused on a screen or page and blink less while they do. Before giving Quell, check the egg and bird allergy caution on its label.`,
      },
      {
        q: 'What should I buy a writer friend for under the tree?',
        a: `Pick something for the desk or for drafting away from the screen: a nice pen and notebook, a sand timer for breaks, noise-canceling headphones, or a printed and bound copy of their draft to mark up.`,
      },
      {
        q: 'Can I ship Quell straight to a writer as a gift?',
        a: `Yes. Enter their address at checkout and Quell ships there from Brentwood, Tennessee, to any US address. Tracking comes by email, and no delivery date is promised, so order early in December.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-holiday-concert-or-show',
    title: 'Dry eyes at a holiday concert or show',
    description:
      'Heated theaters, stage haze, a cold walk from the car and a late drive home can leave your eyes dry by the final bow. How to enjoy the show comfortably.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Eyes often feel dry at a holiday concert or show because you sit for two hours in warm, dry, heated air, staring at a bright stage and blinking less than usual, after a walk in through cold wind. Stage haze and late nights add to it. Sit away from vents, blink on purpose between numbers, keep sunglasses or a scarf for the walk, and carry lubricating drops to use at intermission as labeled.`,
      },
      { h: 'Why a show dries your eyes' },
      {
        p: `Several small things stack up between the parking lot and the curtain call:`,
      },
      {
        list: [
          `Cold air outside holds little moisture. Once a big hall heats it for a full house, the relative humidity falls and the air feels dry.`,
          `A dark room with a bright stage pulls your attention forward. When you’re absorbed, you blink less often and less completely, and each blink is what spreads tears across the eye.`,
          `Heating vents in older theaters and churches often sit at floor level or near the aisles and blow warm air across seats.`,
          `Haze and fog effects hang in the air to make lighting beams visible, and some people find their eyes feel irritated in it.`,
          `Holiday shows run late, and tired eyes after a long day tend to feel drier by evening.`,
        ],
      },
      { h: 'Picking a seat' },
      {
        p: `If you have a choice of seats, think about air as well as sight lines. Seats directly under a balcony overhang, right next to a floor register or beside a side door that opens to the cold all mean more moving air. Center seats a few rows back from the stage often have less draft. At a church or an older auditorium with radiators along the walls, an aisle seat away from the wall may be more comfortable. If haze is used heavily at a rock-style holiday show, sitting farther from the stage can help.`,
      },
      { h: 'The Nutcracker, choirs and candlelight services' },
      {
        p: `Different holiday events come with different conditions:`,
      },
      {
        list: [
          `Ballet and musical theater: long acts in a warm house, and you’re watching fast movement, which keeps your eyes fixed on the stage. Make a habit of a few slow blinks at each scene change.`,
          `Choir and orchestra concerts: many are held in churches and school gyms, with heat that cycles on and off and air that can get stuffy with a full room.`,
          `Candlelight services: candles add warmth and a little smoke near your face. Hold your candle at chest height rather than close to your eyes. Our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) has more.`,
          `Kids’ school pageants: bright gym lighting, phone screens held up to record, and a lot of squinting at a small stage. Watch some of it with your own eyes rather than through the screen.`,
        ],
      },
      { h: 'The cold walk in and out' },
      {
        p: `The trip from a parking garage or a bus stop to the theater door can be the windiest part of the evening. Cold wind speeds evaporation from the eye, and then you step into dry, heated air for two hours. Pull a scarf up, wear a hat with a brim, and if it’s windy, glasses help shield your eyes. Afterward, the same walk happens in the dark, often in a crowd, with headlights and street lights adding glare.`,
      },
      { h: 'Using eye drops at intermission' },
      {
        p: `Intermission is the easiest time to use a drop. Wash your hands in the restroom first, since you’ve probably handled a program, a coat check ticket and a door handle. Then follow the label. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions are: {directions}. For clean handling: {tip}.`,
      },
      {
        p: `A few practical points for a night out:`,
      },
      {
        list: [
          `Carry the bottle in an inside coat pocket or a purse rather than leaving it in a cold car. The label’s storage line is: {storage}.`,
          `Quell is milky brown in the bottle, which is normal: {appearance}`,
          `Your vision may take a moment to settle after a drop, so use it before you head back to your seat in a dark aisle.`,
          `The label carries a caution worth knowing in advance: {warnings}.`,
        ],
      },
      {
        p: `If you’re taking children, the label doesn’t give directions for them, so ask their eye doctor or pharmacist before using any drops. The same goes if you wear contact lenses to the show or use other eye drops.`,
      },
      { h: 'Late nights and the drive home' },
      {
        p: `Holiday weeks stack up: an office party on Thursday, a concert on Friday, a pageant on Saturday. Short sleep and long screen days leave eyes drier and more tired. On the drive home, set the car’s heater toward the windshield and your feet rather than your face, and if your eyes feel strained, pull over somewhere safe and close them for a minute. Our guide to [dry eyes at a holiday party](/guides/dry-eyes-at-a-holiday-party) covers the rest of the season’s evenings.`,
      },
      { h: 'Ordering drops before the season starts' },
      {
        p: `If you know December will be full, order before it starts. Quell ships from Brentwood, Tennessee, with guest checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but we don’t promise a delivery date, so ordering early gives you a buffer. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A bit of dryness after a long show is common and usually settles with rest. Pain, blurry vision that doesn’t clear when you blink, strong sensitivity to light, or eyes that feel dry every day need an eye doctor. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in a theater?',
        a: `Theaters heat cold winter air, which lowers its relative humidity, and watching a bright stage in a dark room slows your blinking. Vents near the seats can add a steady flow of dry air.`,
      },
      {
        q: 'Can stage fog or haze bother your eyes?',
        a: `Some people find their eyes feel irritated in haze or fog effects. Sitting farther from the stage helps; if irritation is strong or doesn’t settle after you leave, see an eye doctor.`,
      },
      {
        q: 'Can I use eye drops during a concert?',
        a: `It’s easier at intermission, when you can wash your hands first and let your vision settle before walking back to your seat. Follow the directions on the label.`,
      },
      {
        q: 'How do I keep my eyes from drying out at a Christmas service?',
        a: `Sit away from heat registers and drafty doors, hold any candle at chest height, and blink fully between readings and songs. A scarf or glasses help on the walk in from the cold.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-sign-language-interpreters',
    title: 'Dry eyes for sign language interpreters',
    description:
      'Interpreting means hours of steady visual focus, video relay screens and stage lights. Why interpreters’ eyes dry out, and habits that fit the job.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Sign language interpreters often get dry eyes because the work demands unbroken visual attention: watching a signer’s hands and face, holding eye contact, or tracking a video relay screen for long stretches. Concentration slows blinking, and conference halls, stage lights and call-center air add drying. Use team switches to rest your eyes, set screens and lights carefully, and use a lubricating drop between assignments as its label directs.`,
      },
      { h: 'Why interpreting is so hard on the eyes' },
      {
        p: `Spoken-language interpreters listen. Sign language interpreters watch, and the language itself lives in small details: handshape, movement, location, and facial grammar like raised brows or a mouth shape. Missing a blink’s worth of information can mean missing meaning, so many interpreters hold their gaze longer than they realize. Fewer blinks means the tear film gets less frequent renewal, and the surface of the eye starts to feel dry, gritty or tired.`,
      },
      {
        p: `When voicing for a Deaf signer, you’re reading their signs continuously. When signing for a hearing speaker, you’re maintaining eye contact with Deaf consumers while also glancing at slides, a script or the speaker. Either way, your eyes are working hard and steadily.`,
      },
      { h: 'Video relay and video remote interpreting' },
      {
        p: `Video relay service (VRS) and video remote interpreting (VRI) put the signer on a screen instead of across a table. Screen work slows blinking further, and a camera setup that keeps you centered and still adds to the strain. Habits that help:`,
      },
      {
        list: [
          `Place the screen so its top edge is at or slightly below eye level. Looking slightly down means your eyelids cover more of the eye.`,
          `Match screen brightness to the room so you aren’t squinting into a glowing rectangle.`,
          `Keep the light source in front of you for the camera, but diffused so it doesn’t glare into your eyes.`,
          `Between calls, look away from the screen at something across the room and blink fully several times.`,
          `If your workstation sits under a ceiling vent, ask whether it can be redirected; a steady stream of air across your face adds up over a shift.`,
        ],
      },
      { h: 'Conference stages and platform interpreting' },
      {
        p: `On a stage or platform, you’re usually lit so Deaf audience members can see you clearly. Bright lights in your face make many people squint, and squinting tends to replace full blinks with partial ones. Big rooms also run strong heating or air conditioning, and a stage near a supply vent can be a surprisingly drafty spot. A few adjustments:`,
      },
      {
        list: [
          `During tech checks, ask whether the light can be angled to reduce glare in your eyes while still lighting your hands and face.`,
          `Stand slightly out of the airflow if a vent is blowing on the platform.`,
          `If you wear glasses on stage, an anti-glare coating is something to ask your eye doctor about.`,
        ],
      },
      { h: 'Team switches are eye breaks too' },
      {
        p: `Many assignments use team interpreting, with two interpreters trading off at set intervals. The off interpreter usually supports the working one by feeding missed information, which means more watching. Even so, the switch is a chance to rest your eyes briefly. Look away from the signer for a moment, blink slowly a few times, and then return to supporting. Over a long assignment, those small breaks add up.`,
      },
      { h: 'Dry eyes at the end of the day' },
      {
        p: `Freelance interpreters often stack assignments: a medical appointment in the morning, a classroom at midday, VRS in the evening. By late afternoon, eyes that have been focused for hours can feel dry and heavy. Driving between jobs with the heater or AC blowing on your face makes it worse. Point vents at your hands, take a few minutes in a parked car with your eyes closed before the next job, and avoid going straight from a long assignment into an evening of phone scrolling. Our guide to [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) has more.`,
      },
      { h: 'Using a lubricating drop around assignments' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses: {uses}. The directions are: {directions}. Because your hands are your instrument, wash them before using a drop, and remember: {tip}.`,
      },
      {
        p: `Timing matters for interpreters. Vision can take a moment to clear after a drop, so put it in before you start or during a break, not right before you need to read fine handshapes. The label’s caution is: {warnings}. Its storage line reads: {storage}. A sunny dashboard between assignments can exceed that. If you wear contact lenses or use other eye drops, the label doesn’t cover that, so check with your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including an agency office or a VRS center if that’s where you’d rather receive it. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Your eyes are central to your work, so don’t wait out symptoms that keep coming back. An eye doctor can check whether your glasses suit screen and stage distances and look into ongoing dryness. The label says: {stopUse} Our [self-check](/self-check) can help you describe what you notice before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired when interpreting ASL?',
        a: `Interpreting demands constant visual attention to hands and faces, which slows blinking. Long sessions, bright stage lights and screen work in video relay add to the dryness and fatigue.`,
      },
      {
        q: 'How can VRS interpreters reduce eye strain?',
        a: `Set the screen at or slightly below eye level, match brightness to the room, keep vents off your face, and look away and blink fully between calls. Persistent strain is worth an eye exam.`,
      },
      {
        q: 'When should an interpreter use eye drops?',
        a: `Before an assignment or during a team switch or break, so vision has time to settle before you need to read fine detail. Follow the directions on the label and wash your hands first.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-loggers',
    title: 'Dry eyes for loggers',
    description:
      'Sawdust, wind on the landing, cold mornings and long days far from a store. Why loggers’ eyes dry out, what protects them, and what a drop can and can’t do.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Loggers’ eyes dry out from long days in wind, cold air and dust, often hours from the nearest store. Sawdust and chips are a separate hazard: safety eyewear and face screens are what keep debris out, and no eye drop does that job. Wear your protection every time, keep vents off your face in the truck, carry a spare bottle in a clean pocket, and use a lubricating drop only as labeled.`,
      },
      { h: 'What dries a logger’s eyes' },
      {
        list: [
          `Wind on ridgelines, landings and open cutover ground, where there’s nothing to break it.`,
          `Cold, dry morning air on the drive in and the first hours of the shift.`,
          `Fine dust and sawdust in the air around saws, skidders, processors and log trucks.`,
          `Heated or air-conditioned cabs, with vents that often point at the operator’s face.`,
          `Exhaust from diesel equipment idling nearby.`,
          `Long days that start before dawn and end after dark in winter, leaving little time for eyes to rest.`,
        ],
      },
      {
        p: `None of this is unusual for the work. It does mean that eyes that feel fine at home can feel dry, gritty and tired by the end of a week in the woods.`,
      },
      { h: 'Protection comes first' },
      {
        p: `A chainsaw throws chips, a limb can whip back, and a skidder kicks up grit. Those are injury hazards, not dryness, and the only answer is proper protection. Wear the eye and face protection your employer requires and the job calls for, whether that’s a mesh face screen on your helmet, safety glasses, or both. Mesh screens block chips but not fine dust, so many loggers wear glasses under them. Keep spares in the truck in case a pair gets scratched or lost.`,
      },
      {
        p: `A lubricating drop is not protective gear. It won’t keep a chip out, and it isn’t meant for washing something out of your eye. If debris gets in, don’t rub. Blink, let your tears work, and if it doesn’t come out quickly or your eye hurts, get it looked at. Something that hits the eye with force needs prompt medical care.`,
      },
      { h: 'In the cab' },
      {
        p: `Feller-buncher, processor and skidder operators spend hours in enclosed cabs, and long drives to and from the job add more. Cab heat and AC are drying, especially aimed straight at your face.`,
      },
      {
        list: [
          `Point vents at your chest, hands or the windshield instead of your eyes.`,
          `Keep cab filters changed so less dust circulates inside.`,
          `Blink deliberately during long, repetitive cycles; intense focus on a cutting head slows blinking.`,
          `Clean the inside of the windshield, since a dusty, smeared glass adds glare that makes you squint.`,
        ],
      },
      { h: 'Cold mornings and winter cutting' },
      {
        p: `Plenty of logging happens in winter, when frozen ground supports equipment better. Cold air carries little moisture, and wind across a landing on a January morning dries the eye’s surface quickly. A neck gaiter pulled up, a helmet with a brim, and glasses all cut the wind. Then the cab heater takes over, and the drying continues inside. Our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the back-and-forth between outdoor cold and indoor heat.`,
      },
      { h: 'Far from a store: planning your supply' },
      {
        p: `Logging jobs are often a long way from a pharmacy, and a crew might stay in camp or work remote sites for days. If you use drops, plan ahead:`,
      },
      {
        list: [
          `Keep a spare bottle in your gear bag so you’re not caught short on a remote job.`,
          `Store it in a clean, closed bag or case so sawdust and bar oil stay off the bottle.`,
          `Carry it in an inside pocket in winter; a truck parked at a landing through a winter night can get far colder than the label allows.`,
        ],
      },
      { h: 'Using a lubricating drop in the woods' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses: {uses}. Directions: {directions}. Caution: {warnings}.`,
      },
      {
        p: `Clean hands matter more in the woods than almost anywhere. Pitch, bar oil, fuel and sawdust don’t belong near your eyes. Wipe or wash your hands and face first, and use the drop in the truck, not on the landing in the wind. The label also says: {tip}. For storage: {storage}. Read it all on the [Drug Facts page](/drug-facts). For more on long days outside, see [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers).`,
      },
      { h: 'Getting Quell to a rural address' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including rural routes and small towns near logging country. Checkout is available as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised, so order before your supply runs low. [Order from the home page](/#buy).`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `Gritty, tired eyes after a week of cutting are common. Pain, blurred vision, something that won’t come out, or an eye that keeps bothering you after a weekend off needs an eye doctor. The label states: {stopUse} See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What eye protection do loggers wear?',
        a: `Many wear a helmet with a mesh face screen, often with safety glasses underneath for fine dust. Use whatever eye and face protection your employer and the job require.`,
      },
      {
        q: 'Can eye drops wash sawdust out of your eye?',
        a: `A lubricating drop isn’t made for flushing out debris. Don’t rub; blink and let tears work, and if a particle stays in or the eye hurts, get medical care promptly.`,
      },
      {
        q: 'Why are my eyes so dry after a day in the woods?',
        a: `Wind on open ground, cold air, dust and hours of cab heat or AC all speed evaporation from the eye. Long, focused work also slows blinking.`,
      },
      {
        q: 'How should loggers carry eye drops?',
        a: `In a clean, closed bag or case in an inside pocket, away from sawdust and bar oil, and never left in a parked truck on a freezing night. Wash your hands before use.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-commercial-fishermen',
    title: 'Dry eyes for commercial fishermen',
    description:
      'Salt spray, steady wind, glare off the water and trips that run for days. Why fishermen’s eyes dry out, how to protect them on deck, and how to pack drops.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Commercial fishermen’s eyes take a beating from wind, salt spray, sun glare off the water, and long trips with short sleep. Wind and glare dry the tear film, and salt on your hands and face can sting. Wear wraparound glasses on deck, rinse salt from your hands before touching your eyes, keep wheelhouse vents off your face, and pack enough lubricating drops for the whole trip, used as labeled.`,
      },
      { h: 'Why life on deck dries your eyes' },
      {
        list: [
          `Steady wind, plus the boat’s own speed, means moving air across your eyes for hours.`,
          `Sun reflecting off the water hits your eyes from below as well as above, so you squint more and blink less fully.`,
          `Salt spray dries on your face, hands and gear, and getting it in your eyes stings.`,
          `Cold air in winter fisheries holds little moisture, and wind chill adds to the bite.`,
          `Wheelhouse and galley heaters, diesel exhaust and engine room heat all dry the air indoors.`,
          `Watches and long hauls cut into sleep, and tired eyes feel drier.`,
        ],
      },
      {
        p: `For recreational boating, see our guide on [dry eyes on a boat](/guides/dry-eyes-on-a-boat). Commercial work is a different scale: longer trips, harder conditions and no option to head in early because your eyes are bothering you.`,
      },
      { h: 'Protecting your eyes on deck' },
      {
        p: `Glasses do double duty at sea: they cut glare and block wind and spray. Look for wraparound frames that sit close to your face, and keep them secured with a strap so they don’t go over the side. Polarized lenses cut reflected glare off the water. Some crew prefer clear safety glasses at night or in low light. Whatever you wear, rinse lenses with fresh water rather than wiping salt crystals across them with a sleeve, which scratches them.`,
      },
      {
        p: `Hooks, lines, gear under tension and flying fish scales are injury hazards. Follow your vessel’s rules for eye protection during hauling and processing, and remember that a drop doesn’t protect against anything that can hit the eye.`,
      },
      { h: 'Salt on your hands' },
      {
        p: `Salt water and fish slime end up everywhere. Before you touch your eyes or use a drop, wash your hands with fresh water and soap if you can, and dry them on a clean towel. If salt water splashes into your eyes, blink and rinse with clean fresh water. If stinging or irritation doesn’t settle, or something is caught in your eye, get it checked as soon as you’re able.`,
      },
      { h: 'In the wheelhouse and the bunk' },
      {
        p: `Long hours watching radar, chartplotters and sonar screens slow blinking, just like office screen work. Heaters and defrosters often blow across the helm. A few habits help:`,
      },
      {
        list: [
          `Aim heater and defroster vents at the windows and your hands, not your face.`,
          `Dim screens at night so they match the dark wheelhouse.`,
          `Look out at the horizon regularly and blink fully a few times.`,
          `In a heated bunk room, keep any heater from blowing toward your pillow.`,
        ],
      },
      { h: 'Packing drops for a long trip' },
      {
        p: `Once you’re offshore, there’s no running to a store. If you use lubricating drops, pack more than you think you’ll need, and keep them where they won’t get lost or ruined:`,
      },
      {
        list: [
          `Pack a spare bottle in your sea bag, in a sealed plastic bag to keep out salt water and fish slime.`,
          `Keep the one you’re using in a clean, dry spot in your bunk area, not on deck.`,
          `Watch temperatures. The label’s storage line reads: {storage}. A sunny wheelhouse window or an engine room can exceed that, and a deck locker in winter can drop below it.`,
          `If a bottle falls in the bilge or on deck and the tip touches anything, the label is clear: {tip}.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions read: {directions}. The panel also carries a caution: {warnings}. Under “Do not use,” it lists: {doNotUse}. Its normal color is milky brown: {appearance} You can read every line on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering before you leave port' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including Alaska and Hawaii; see [shipping to Alaska or Hawaii](/guides/shipping-eye-drops-to-alaska-or-hawaii) for details. Checkout works as a guest. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, but we don’t promise a delivery date, so order well before your trip and have it sent somewhere you’ll be before you sail.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry, salt-stung eyes after a trip are common, but some symptoms shouldn’t wait for the season to end. Pain, blurred vision that doesn’t clear, sensitivity to light, or an injury from gear need care, and offshore that may mean contacting medical help over the radio. The label says: {stopUse} Between trips, an eye exam can help with dryness that keeps returning.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a fishing trip?',
        a: `Hours of wind, glare off the water, salt spray and short sleep all dry and irritate the eyes. If pain continues after you’re ashore, or your vision changes, see an eye doctor.`,
      },
      {
        q: 'What sunglasses are good for commercial fishing?',
        a: `Wraparound frames that sit close to the face and have a retaining strap, with polarized lenses to cut glare off the water. Rinse salt off with fresh water rather than wiping.`,
      },
      {
        q: 'How many bottles of eye drops should I take on a fishing trip?',
        a: `Bring more than you expect to use, with a spare in a sealed bag in your sea bag, since you can’t restock offshore. Use them as the label directs and store them within its temperature range.`,
      },
      {
        q: 'What should I do if salt water gets in my eyes?',
        a: `Blink and rinse with clean fresh water. If stinging or irritation doesn’t settle, or something seems stuck in your eye, get it checked as soon as you can.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-highway-workers',
    title: 'Dry eyes for highway workers',
    description:
      'Wind from passing trucks, dust from milling and cutting, and night shifts under light towers. Why road crews’ eyes dry out, and how to protect them.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Highway workers’ eyes dry out from the blast of passing traffic, dust from milling, sawing and sweeping, hot asphalt in summer, cold wind in winter, and night work under bright light towers. Safety glasses with side protection are the first line of defense against debris. Keep vents off your face in the truck, wash your hands before touching your eyes, and use a lubricating drop away from traffic, as its label directs.`,
      },
      { h: 'What makes road work so drying' },
      {
        list: [
          `Every passing truck pushes a wall of air across the work zone, and on a busy interstate that wind never really stops.`,
          `Milling machines, concrete saws, sweepers and loaders throw fine dust into the air.`,
          `Hot asphalt and summer pavement radiate heat that dries the air at face level.`,
          `Winter work on bridges and shoulders means cold, dry wind with nothing to block it.`,
          `Long hours standing as a flagger, facing traffic and watching for drivers, with little chance to look away.`,
          `Night shifts under light towers and oncoming headlights, which make you squint.`,
        ],
      },
      { h: 'Protection first, comfort second' },
      {
        p: `Debris from saws, grinders and passing vehicles is an injury risk. Wear the eye protection your employer and the task require, with side shields or a wraparound fit, and keep a spare pair in the truck. Tinted lenses help in daytime glare; clear or low-light lenses are better at night so you can still see hazards. When cutting concrete or asphalt, use the dust controls your crew has, such as water on the blade, and stay upwind when you can.`,
      },
      {
        p: `A drop is not a substitute for any of that. It won’t keep grit out, and it isn’t meant for flushing debris from the eye. If something blows into your eye, step out of the work zone, don’t rub, blink, and rinse with clean water if you can. If it doesn’t clear quickly or it hurts, get it checked.`,
      },
      { h: 'Night work under the lights' },
      {
        p: `Night paving and lane closures put crews under light towers with traffic headlights coming at them. Bright, uneven light makes people squint, which turns full blinks into partial ones. Late shifts also mean short or disrupted sleep, and tired eyes feel drier. Some things that help:`,
      },
      {
        list: [
          `Position yourself so light towers aren’t shining straight into your eyes when possible.`,
          `Use clear or low-light safety lenses at night rather than dark tints.`,
          `Take short breaks in the truck with your eyes closed when your role allows.`,
          `Protect your sleep after a night shift with a dark, cool room and the fan pointed away from your face.`,
        ],
      },
      {
        p: `Our guide on [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more on sleep schedules and tired eyes.`,
      },
      { h: 'Summer heat and paving season' },
      {
        p: `Paving season is hot work. The air above fresh asphalt is hot and dry, and you’re often working in direct sun with glare off the road surface. Wraparound tinted safety glasses help, and so does a hard hat with a brim attachment or sun shade. When you get into the truck, resist blasting the AC straight at your face; aim the vents at your chest and neck instead, which cools you without drying your eyes as fast.`,
      },
      { h: 'Winter work, snow and salt' },
      {
        p: `Crews who switch to plowing and salting in winter trade dust for cold wind and road spray. Snow glare on a sunny day can be as intense as summer pavement. Glasses or goggles, a gaiter pulled up, and a heater pointed at the windshield instead of your face all help. See [dry eyes for snowplow drivers](/guides/dry-eyes-for-snowplow-drivers) for the cab side of winter road work.`,
      },
      { h: 'Using a lubricating drop on the job' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses: {uses}. The directions are: {directions}. The panel cautions: {warnings}.`,
      },
      {
        p: `On a road crew, timing and cleanliness matter. Use a drop in the truck or on a break, away from traffic, since your vision may take a moment to settle. Wash or wipe tar, dust and diesel off your hands first, and follow the label: {tip}. Storage is on the label too: {storage}. A truck dashboard in July or a toolbox in January can be well outside that range, so keep the bottle in a lunch bag or pocket. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a yard office if that’s easier than home; [shipping eye drops to a job site](/guides/shipping-eye-drops-to-a-job-site) has tips. Checkout works as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry, tired eyes after a long shift are common in road work. Pain, blurred vision that doesn’t clear, an eye hit by debris, or dryness that keeps coming back need an eye doctor. The label puts it this way: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry working on the highway?',
        a: `Wind from passing traffic, dust from milling and cutting, heat off the pavement and cold winter wind all speed evaporation from the eye. Night work and long shifts leave eyes more tired on top of that.`,
      },
      {
        q: 'What safety glasses are good for night road work?',
        a: `Clear or low-light lenses with side protection, so you can still see hazards and moving vehicles. Dark tints reduce what you can see at night. Follow your employer’s eyewear requirements.`,
      },
      {
        q: 'Can I use eye drops in a work zone?',
        a: `It’s better to step away from traffic, into the truck or a break area, wash or wipe your hands, and then use the drop as the label directs, giving your vision a moment to settle.`,
      },
      {
        q: 'What should I do if dust blows into my eye on a road crew?',
        a: `Step out of the work zone, don’t rub, blink, and rinse with clean water if you can. If it doesn’t clear quickly or your eye hurts, get it checked promptly.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-all-the-time',
    title: 'Why do my eyes feel dry all the time?',
    description:
      'Constant dry eyes usually come from a mix of dry air, screen habits and daily routines, but dryness that never lets up is worth an eye exam. Where to start.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Eyes that feel dry all the time are usually reacting to something you do or sit in every day: heated or air-conditioned air, vents and fans, long screen sessions that slow blinking, short sleep, or wind. Changing those often helps. But dryness that never lets up, even on weekends and in different places, deserves an eye doctor’s exam, because a drop can ease discomfort without explaining it.`,
      },
      { h: 'Why do my eyes feel dry all the time?' },
      {
        p: `Your eyes are covered by a thin tear film with three layers: an oily outer layer that slows evaporation, a watery middle layer, and a mucus layer that helps tears cling to the eye. Every blink spreads a fresh coat. Anything that speeds evaporation, or reduces how often and how completely you blink, leaves the surface drier between blinks. When the cause is part of your everyday routine, the feeling is everyday too.`,
      },
      {
        p: `That’s the difference from sudden dryness, which often has a clear trigger like a trip, a new job or a cold snap. Our guide to [why eyes feel dry all of a sudden](/guides/why-are-my-eyes-dry-all-of-a-sudden) covers that side. Constant dryness tends to be built into the day, which is why it’s easy to overlook.`,
      },
      { h: 'Everyday things that keep eyes dry' },
      {
        list: [
          `Indoor air: forced-air heat in winter and air conditioning in summer both dry the air you sit in for hours.`,
          `Vents, fans and space heaters blowing toward your face at a desk, on a couch or in bed.`,
          `Screens: computers, phones and tablets hold your attention, and people tend to blink less often and less fully while using them.`,
          `Car vents aimed at your face on a daily commute.`,
          `Short or broken sleep, which leaves the eyes tired and dry-feeling the following morning.`,
          `Windy, dusty or very dry outdoor conditions if you work or exercise outside.`,
          `Long reading or close-up work sessions without looking up.`,
        ],
      },
      { h: 'Dry eyes at end of day' },
      {
        p: `Many people notice their eyes are fine in the morning and dry or heavy by late afternoon. That pattern points toward the day itself: hours of screen focus, office air, and eyes kept open with fewer full blinks. It often eases after a night’s sleep and builds again by the following evening. If that sounds familiar, small changes during the day matter most. [Dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) goes deeper on the evening pattern.`,
      },
      { h: 'Why do my eyes feel dry and itchy?' },
      {
        p: `Dryness and itchiness often travel together, especially in dry winter air. A dry eye surface can feel itchy, scratchy or gritty. But itching has other causes too, and rubbing makes eyes feel worse. If itching comes with sneezing, swelling, discharge or other symptoms, or doesn’t ease with simple steps, an eye doctor can sort out what’s going on. [Eye drops for itchy eyes](/guides/eye-drops-for-itchy-eyes) explains what a lubricating drop can and can’t address.`,
      },
      { h: 'Why do my eyes feel dry when I wake up?' },
      {
        p: `Morning dryness has its own causes: a ceiling fan or heater blowing on the bed, very dry bedroom air in winter, or eyelids that don’t fully close during sleep. Our guide on [dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up) covers this, and it’s worth mentioning to an eye doctor if it happens most mornings.`,
      },
      { h: 'How to keep eyes moist through the day' },
      {
        list: [
          `Every 20 minutes or so, look at something far away for a few seconds and blink slowly and completely.`,
          `Lower your screen a little so your upper lids cover more of each eye.`,
          `Move out of the path of vents and fans, at work, at home and in the car.`,
          `Use a humidifier in the room where you spend the most time during heating season.`,
          `Wear wraparound sunglasses outdoors on windy days.`,
          `Protect your sleep, and switch off a fan that blows across the bed.`,
          `Use a lubricating eye drop as its label directs if your eyes still feel dry.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes the Uses this way: {uses}. Its directions: {directions}. It also cautions: {warnings}. A drop can make everyday dryness more comfortable, but it doesn’t tell you why your eyes are dry. If you find yourself relying on drops constantly with no improvement, that’s a sign to see an eye doctor rather than a reason to use more. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) explains why the label’s directions are the limit.`,
      },
      { h: 'Keep notes before you see a doctor' },
      {
        p: `A week of simple notes makes an appointment more useful. Write down when your eyes feel worst, where you were, how long you spent on screens, and how you slept. Note any medicines you take; your eye doctor or pharmacist can tell you whether any of them matter. Our guide to [keeping an eye drop log](/guides/keeping-an-eye-drop-log) has a simple format, and the [self-check](/self-check) can help you describe symptoms; it’s not a diagnosis.`,
      },
      { h: 'When dryness all the time needs an eye doctor' },
      {
        p: `Persistent dryness is itself a good reason to book an eye exam. Go sooner if you notice pain, vision changes, strong light sensitivity, discharge, or one eye much worse than the other. The label’s stop-use list is clear: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge how quickly to go.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry even when I drink enough water?',
        a: `Eye dryness is usually about evaporation and blinking: indoor air, vents, screens and wind thin the tear film between blinks. If dryness persists despite changing those, see an eye doctor.`,
      },
      {
        q: 'Is it normal for eyes to feel dry every day?',
        a: `It’s common, especially with lots of screen time or dry indoor air, but it isn’t something to ignore. Dryness that continues every day despite changes to your routine is worth an eye exam.`,
      },
      {
        q: 'How do I keep my eyes moist naturally?',
        a: `Blink fully and often, take regular breaks from screens, keep vents and fans off your face, use a humidifier in dry seasons and wear wraparound glasses in the wind.`,
      },
      {
        q: 'Why do my eyes feel dry at the end of the day?',
        a: `Hours of screen focus and indoor air reduce blinking and speed evaporation, so dryness builds as the day goes on. Breaks, better vent placement and blinking on purpose often help.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyelids-feel-sticky-after-eye-drops',
    title: 'Why do my eyelids feel sticky after eye drops?',
    description:
      'Extra drop that runs onto your lids leaves its ingredients behind as the water dries. Why oil-based drops can feel sticky, and how to wipe it off cleanly.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Eyelids often feel sticky after eye drops because some of the drop doesn’t stay in the eye. It runs onto the lid and lashes, the water evaporates, and the rest of the formula stays on your skin. Oil-containing drops like Quell can leave a slightly filmy feel. Dab the excess off with a clean tissue, keep the bottle tip clean, and see a doctor if stickiness comes with discharge, pain or vision changes.`,
      },
      { h: 'Where the sticky feeling comes from' },
      {
        p: `The eye can only hold a small amount of liquid at once. A single drop often fills it to the brim, and anything extra spills over the lower lid, runs into the corner, or gets swept onto the lashes when you blink. Once it’s on your skin, the water evaporates fairly quickly. What’s left is whatever else the drop contained: lubricants, oils and other ingredients that were dissolved or suspended in that water.`,
      },
      {
        p: `That residue is what feels tacky or filmy on the lid. It’s most noticeable when you put in a drop, then blink a lot, or when you squeeze your eyes shut right after, which pushes more of it out.`,
      },
      { h: 'Why oil-containing drops can feel different' },
      {
        p: `Quell is an emulsion, meaning it carries oil-based ingredients in water. Its active ingredients are {actives}, and its inactive list includes {inactives}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. On the eye, they mix with your tears. On the skin of the lid, they can leave a light, slightly slick film after the water dries. Our guide to [what emulsion eye drops are](/guides/what-are-emulsion-eye-drops) explains the format.`,
      },
      {
        p: `The label also describes how the product looks. Its Other information section says: {milky}. Our own note on that: {appearance} A faint milky or brownish trace on your lashes after use is that same color, not a sign that anything has gone wrong.`,
      },
      { h: 'How to wipe off excess drops' },
      {
        list: [
          `Wash and dry your hands before you start.`,
          `After putting in the drop, close your eyes gently. Don’t squeeze them shut.`,
          `Take a clean, dry tissue and lightly dab the outside of the closed lid and the corner of the eye. Don’t rub, and don’t wipe across the open eye.`,
          `Use a fresh tissue for each eye.`,
          `If residue bothers you later, wash your face with warm water and a gentle cleanser, keeping soap out of your eyes.`,
        ],
      },
      { h: 'Using fewer drops can mean less mess' },
      {
        p: `More drops in the eye at once doesn’t mean more benefit; extra mostly ends up on your cheek. Quell’s directions say: {directions}. One drop at a time is what the label calls for. If you often miss or get two drops out, our guide on [putting in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) has tips for steady aim.`,
      },
      { h: 'Keep the bottle tip clean' },
      {
        p: `If the tip touches your lashes or a sticky lid, it can pick up residue and germs and carry them back into the bottle. The label is explicit: {tip}. Hold the bottle just above the eye, not resting on it, and recap it right away. If the tip does touch your lid, our guide on [eye drops and your eyelids](/guides/can-you-put-eye-drops-on-your-eyelids) covers what to do next.`,
      },
      { h: 'Sticky lids, makeup and the morning after' },
      {
        p: `Residue on the lid can make eye makeup slide or smudge. Putting drops in before makeup, waiting a few minutes, then dabbing the lids dry often works better; see [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup). At night, a drop just before bed can leave the lashes feeling a little stuck together in the morning. Wash your face as usual. If your lashes are glued together with crust or discharge every morning, that’s different from drop residue and worth showing an eye doctor.`,
      },
      { h: 'When stickiness isn’t from the drop' },
      {
        p: `Some stickiness has nothing to do with eye drops. Discharge that’s thick, yellow or green, lids that are swollen or tender, crusting along the lash line, pain, or blurred vision all need an eye doctor. Don’t keep using drops to cover those up. The label sets the limit: {stopUse} It also says: Do not use: {doNotUse}. If you notice either, stop and check.`,
      },
      {
        p: `The label’s caution is also worth knowing before you start: {warnings}. If you wear contact lenses or use other eye drops, the label doesn’t cover those situations; ask your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyelashes stick together after eye drops?',
        a: `Excess drop runs onto the lashes, the water evaporates, and the other ingredients stay behind. Dab the closed lid with a clean tissue after each drop. Crusting with discharge is a reason to see an eye doctor.`,
      },
      {
        q: 'Is it normal for oil-based eye drops to leave a film on the eyelids?',
        a: `Drops that carry oils can leave a light film on the skin once the water dries. Gently dabbing the excess off with a clean tissue usually takes care of it.`,
      },
      {
        q: 'How do you wipe off excess eye drops?',
        a: `Close your eyes gently and lightly dab the outside of the lid and the inner corner with a clean tissue, using a fresh one for each eye. Don’t rub or wipe the open eye.`,
      },
      {
        q: 'When is a sticky eye a sign to see a doctor?',
        a: `If stickiness comes with thick or colored discharge, crusted lashes, swollen or painful lids, light sensitivity or blurred vision, see an eye doctor rather than continuing drops.`,
      },
    ],
  },
  /*
   * Source checked 2026-11-16: 21 CFR 201.66(c), via the eCFR API (versioner,
   * title 21, part 201, section 201.66): Drug Facts content goes on the outside
   * container or wrapper of the retail package, or on the immediate container
   * label if there is no outside container or wrapper.
   * Also 21 CFR 211.132(a)-(b), same API: OTC drugs for retail sale (except
   * dermatological, dentifrice, insulin or lozenge products) need tamper-evident
   * packaging; it may use the container and closure, a carton, or both.
   */
  {
    slug: 'parts-of-an-eye-drop-bottle',
    title: 'The parts of an eye drop bottle, explained',
    description:
      'Cap, tip, tamper-evident seal, label, lot number and expiration date: what each part of an eye drop bottle and its carton does, and what to check before use.',
    category: 'label',
    addedOn: '2026-11-16',
    body: [
      {
        p: `An eye drop bottle has a few working parts: a cap that protects the tip, a dropper tip that releases one drop at a time, a squeezable body that holds the solution, a tamper-evident seal that shows whether it’s been opened, a label, and printed lot and expiration codes. The carton carries the full Drug Facts panel. Knowing what each part does makes it easier to check a new bottle and keep it clean.`,
      },
      { h: 'The cap' },
      {
        p: `The cap’s job is to cover the dropper tip between uses. That’s more important than it sounds: the tip is the only part that comes near your eye, and an uncovered tip can pick up dust, lint or germs from a counter, pocket or bag. Recap the bottle right after each use and don’t set the cap down on a dirty surface with its inside facing down. If a cap is lost, the bottle is much harder to keep clean, and it’s safest to replace it with a new bottle rather than improvise a cover.`,
      },
      { h: 'The dropper tip' },
      {
        p: `The tip, sometimes called the nozzle, is shaped to release liquid in drops rather than a stream. A gentle squeeze of the bottle body pushes a single drop out. Squeezing too hard can release two or more at once, which mostly ends up on your cheek.`,
      },
      {
        p: `Every eye drop label warns about touching the tip. Quell’s says: {tip}. Germs from a lash, a fingertip or a counter can travel back into the bottle and contaminate what’s left. Our guide to [why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains the details.`,
      },
      { h: 'The bottle body' },
      {
        p: `The body holds the solution and is usually made of soft plastic so you can squeeze it. Multi-dose bottles like Quell’s are meant to be opened and used repeatedly; single-use vials are a different format, designed to be opened once and thrown away. See [single-use vials vs. multi-dose bottles](/guides/single-use-vials-vs-multi-dose-bottles) for how they compare. Quell’s bottle size is {size}.`,
      },
      {
        p: `Many bottles let you see the liquid through the plastic or through a clear window. That’s useful for checking how much is left and what it looks like. Quell’s label says: {milky}. Its usual color is milky brown: {appearance} The label also gives a clear stop sign. Do not use: {doNotUse}.`,
      },
      { h: 'The tamper-evident seal' },
      {
        p: `Under an FDA rule, 21 CFR 211.132, most over-the-counter drugs sold at retail, eye drops included, come in tamper-evident packaging: a seal, band, wrap or sealed carton that shows visible evidence if someone has already opened it. On eye drops, it’s often a band around the neck of the bottle or a ring that breaks away when you first twist the cap, and sometimes a sealed carton as well.`,
      },
      {
        list: [
          `Check the seal before the first use, every time.`,
          `If it’s broken, torn or missing on a new bottle, don’t use it.`,
          `For a Quell order that arrives with a broken seal, contact us; broken-seal orders are replaced.`,
        ],
      },
      {
        p: `Our guide on [why eye drops have a tamper-evident seal](/guides/why-eye-drops-have-a-tamper-evident-seal) covers the federal rule behind it.`,
      },
      { h: 'The label and the carton' },
      {
        p: `Small bottles don’t have much room for print. Federal labeling rules for over-the-counter drugs, at 21 CFR 201.66, place the Drug Facts content on the outside container or wrapper of the retail package, or on the bottle’s own label if there’s no outer package. For most eye drops, that means the carton carries the full panel. Keep the carton, at least until you’ve read it and noted the lot and expiration.`,
      },
      {
        p: `On Quell’s panel, the Uses line reads: {uses}. The directions say: {directions}. The caution: {warnings}. Storage: {storage}. Everything on it is reproduced on our [Drug Facts page](/drug-facts), so you can check it even after the carton is gone.`,
      },
      { h: 'Lot number and expiration date' },
      {
        p: `Two short codes are printed on the bottle, the carton or both, often near each other:`,
      },
      {
        list: [
          `The lot number (often marked LOT) ties your bottle to the batch it was made in. You need it to check a recall or report a problem; see [what the lot number on eye drops means](/guides/what-the-lot-number-on-eye-drops-means).`,
          `The expiration date (often marked EXP) shows the date through which the unopened product is expected to stay within its specifications. Look on the carton’s flaps and along the bottle label’s edge; [where to find the expiration date](/guides/where-is-the-expiration-date-on-eye-drops) has tips for faint printing.`,
        ],
      },
      { h: 'A quick check before the first drop' },
      {
        list: [
          `The seal is intact.`,
          `The expiration date hasn’t passed.`,
          `The liquid looks the way the label describes.`,
          `The tip is clean and undamaged.`,
          `You’ve read the Drug Facts panel, including the warnings.`,
        ],
      },
      { h: 'Questions the bottle can’t answer' },
      {
        p: `The bottle and carton tell you what the product is and how to use it. They don’t cover every situation. If you wear contact lenses, use other eye drops, or want to use drops for a child, Quell’s label doesn’t give directions for those, so ask your eye doctor or pharmacist. And if your eyes hurt or your vision changes, the label is clear: {stopUse} For order questions, reach us at {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'What is the tip of an eye drop bottle called?',
        a: `It’s usually called the dropper tip or nozzle. It’s shaped to release one drop at a time, and it shouldn’t touch your eye, lashes, fingers or any surface.`,
      },
      {
        q: 'Where is the Drug Facts label on eye drops?',
        a: `Usually on the carton. Under 21 CFR 201.66, the Drug Facts content goes on the outside package, or on the bottle’s own label if there’s no outer package. Quell’s full panel is also on our Drug Facts page.`,
      },
      {
        q: 'Should I keep the box my eye drops came in?',
        a: `It’s a good idea. The carton usually carries the full Drug Facts panel, the lot number and the expiration date, which you’ll need if you check a recall or have a question.`,
      },
      {
        q: 'What if my eye drop bottle cap is lost?',
        a: `An uncovered tip can pick up dirt and germs, so a bottle without its cap is hard to keep clean. Replacing it with a new bottle is the safer choice.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-16:
   * - 21 CFR 201.66 via the eCFR API (versioner, title 21, part 201, section
   *   201.66): (a) scope "all OTC drug products"; (c)(1)-(9) title and headings in
   *   order, (c)(9) "Questions?" optional, phone in minimum 6-point bold, days and
   *   times recommended; (d)(1)-(3) capitalization, type sizes (title larger than
   *   any other type; headings at least 8-point or 2 points over text; text at
   *   least 6-point), 0.5-point leading, letters not touching, no more than 39
   *   characters per inch, title and headings bold italic, black or one color on a
   *   contrasting background; (d)(5) "Drug Facts (continued)" and an arrow
   *   across panels; (d)(7) no UPC or other graphics interrupting, hyphens only
   *   in compound words; (d)(8) box and barlines; (d)(9) table for three or more
   *   age groups; (d)(10) modified format when the panel needs more than 60
   *   percent of the labeling surface. Source note: 64 FR 13286, Mar. 17, 1999,
   *   amended 2000, 2004, 2007, 2008, 2009 and 2011.
   * - https://www.fda.gov/drugs/information-consumers-and-patients-drugs/otc-drug-facts-label
   *   (FDA requires a standard label for all OTC drug products; read the label
   *   each time you use the product)
   */
  {
    slug: 'history-of-the-drug-facts-label',
    title: 'Why OTC drugs all have a Drug Facts label',
    description:
      'An FDA rule published in 1999, 21 CFR 201.66, gave every over-the-counter drug the same Drug Facts box. What it requires, down to type size and layout.',
    category: 'label',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Every over-the-counter drug in the US carries a Drug Facts label because of an FDA regulation, 21 CFR 201.66, first published as a final rule in the Federal Register on March 17, 1999. It sets the content and format for the labeling of all OTC drugs: the same title, the same headings in the same order, and minimum type sizes, so a buyer can find the same information in the same place on any box.`,
      },
      { h: 'What the 1999 rule did' },
      {
        p: `The regulation, titled “Format and content requirements for over-the-counter (OTC) drug product labeling,” applies to every OTC drug product. Its scope section says so plainly. Where a specific OTC monograph or regulation has conflicting format rules, 201.66 generally wins unless the other rule specifically provides otherwise. The eCFR’s source note dates the rule to the March 17, 1999 Federal Register, with amendments in 2000, 2004, 2007, 2008, 2009 and 2011.`,
      },
      {
        p: `The FDA’s consumer page on the label puts the purpose simply: the agency requires a standard label of important drug information for all OTC drug products. The idea is that you shouldn’t have to learn a new layout for every product on the shelf.`,
      },
      { h: 'The headings, in the order the rule sets' },
      {
        list: [
          `Drug Facts (the title)`,
          `Active ingredient(s), with the amount in each dosage unit`,
          `Purpose(s)`,
          `Use(s)`,
          `Warning(s)`,
          `Directions`,
          `Other information`,
          `Inactive ingredients`,
          `Questions? or Questions or comments? (optional)`,
        ],
      },
      {
        p: `The first eight are required. The last is allowed but not required, and if it’s used, it must give a phone number for questions about the product. Our guide on [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through what each section tells you on an eye drop carton.`,
      },
      { h: 'How the rule controls the look of the box' },
      {
        p: `What’s less well known is how much of the design the rule fixes. Paragraph (d) of 201.66 sets out format requirements in unusual detail:`,
      },
      {
        list: [
          `The title “Drug Facts” must be in a type size larger than any other type in the panel.`,
          `Headings must be at least 8-point, or 2 points larger than the text, whichever is bigger.`,
          `Text must be at least 6-point.`,
          `There must be at least 0.5-point leading (space between lines), letters may not touch, and type may not exceed 39 characters per inch.`,
          `The title and headings are in bold italic.`,
          `Type is black or one color on a white or other contrasting background.`,
          `The panel sits in a box, with barlines separating the headings.`,
          `Graphics such as the UPC barcode may not appear in or interrupt the panel, and hyphens are allowed only in compound words.`,
        ],
      },
      {
        p: `Those rules explain why Drug Facts boxes look so much alike from one brand to the next, even on very different products. The layout itself is the regulation at work. For more on barcodes, see [the barcode on an eye drop box](/guides/eye-drop-box-barcode).`,
      },
      { h: 'Small boxes, extra panels and tables' },
      {
        p: `Not every package has room for a full panel on one side. The rule handles that in several ways:`,
      },
      {
        list: [
          `If the panel runs onto another side of the box, each later panel is titled “Drug Facts (continued),” and a graphic such as an arrow signals the continuation.`,
          `Directions for three or more age groups or populations must be set out in a table.`,
          `If the full format would take more than 60 percent of the package’s available labeling surface, a modified format is allowed for small packages.`,
        ],
      },
      { h: 'The Questions? line and the phone number' },
      {
        p: `When a label uses the optional Questions section, the phone number must appear in at least 6-point bold type, and the rule recommends listing the days and hours someone is available to answer. That line gives buyers a direct route to the company behind the product. For Quell, the number is {phone}, and our hours are {hours}.`,
      },
      { h: 'What the format doesn’t mean' },
      {
        p: `A Drug Facts box shows that a product is labeled as an OTC drug in the required format. It doesn’t mean the FDA reviewed and approved that particular product, and it isn’t a quality seal. Many OTC drugs are marketed under monographs, which set conditions such as allowed ingredients and labeling. [How OTC eye drops are regulated](/guides/how-are-otc-eye-drops-regulated) explains the bigger picture.`,
      },
      {
        p: `The format also can’t answer every personal question. A label can’t know whether you wear contact lenses, take other medicines or are buying for a child. Where it’s silent, a pharmacist or doctor is the right person to ask.`,
      },
      { h: 'Reading Quell’s panel' },
      {
        p: `Quell’s carton follows the same structure. Its active ingredients are {actives}. The Uses section reads: {uses}. The Warnings include: {warnings}. The Directions say: {directions}. Other information has two lines. The first: {milky}. The second: {storage}. Its inactive ingredients are {inactives}. You can see the whole panel on our [Drug Facts page](/drug-facts), and the FDA’s advice applies here too: read the label each time you use the product.`,
      },
    ],
    faq: [
      {
        q: 'When did the Drug Facts label start?',
        a: `The FDA’s final rule setting the Drug Facts format, now 21 CFR 201.66, was published in the Federal Register on March 17, 1999. It has been amended several times since, most recently in 2011.`,
      },
      {
        q: 'Do all over-the-counter drugs need a Drug Facts label?',
        a: `Yes. The scope of 21 CFR 201.66 covers the labeling of all OTC drug products, with a modified format allowed for very small packages.`,
      },
      {
        q: 'What is the minimum font size on a Drug Facts label?',
        a: `Under 21 CFR 201.66, text must be at least 6-point type and headings at least 8-point or 2 points larger than the text. The title must be larger than any other type in the panel.`,
      },
      {
        q: 'Is the Questions section required on Drug Facts?',
        a: `No, it’s optional. If a label includes it, the rule requires a phone number in at least 6-point bold type and recommends listing the days and times someone is available.`,
      },
    ],
  },
  /*
   * Source checked 2026-11-16: 21 CFR 201.1 via the eCFR API (versioner,
   * title 21, part 201, section 201.1): (a) label must conspicuously bear the
   * name and place of business of the manufacturer, packer or distributor (not
   * for Rx drugs dispensed under 503(b)(1)); (g) actual corporate name, parent,
   * subsidiary or affiliate allowed; (h)(1) no one else may be identified except
   * as the section provides; (h)(2) an unqualified name represents the sole
   * manufacturer; (h)(3) label may say which named person to contact; (h)(4)
   * trademark holder or licensee may be identified; (h)(5) distributor qualified
   * by "Manufactured for", "Distributed by", "Manufactured by ___ for ___",
   * "Manufactured for ___ by ___", "Distributor:", "Marketed by", may be
   * abbreviated; (h)(6) "Packed by" or "Packaged by"; (i) street address, city,
   * State and ZIP Code, street may be omitted if in a current city or telephone
   * directory; (j) principal place of business allowed unless misleading.
   * Quell's seller and manufacturer names follow the existing who-makes-quell
   * guide and lib/product-content.ts (COMPANY, MANUFACTURER).
   */
  {
    slug: 'what-does-distributed-by-mean-on-a-label',
    title: 'What does “distributed by” mean on a drug label?',
    description:
      '“Distributed by” names the company that sells a drug, not necessarily the one that made it. What federal labeling rule 21 CFR 201.1 requires and why.',
    category: 'label',
    addedOn: '2026-11-16',
    body: [
      {
        p: `“Distributed by” on a drug label means the company named is the distributor, the business that sells or markets the product, rather than the one that physically made it. A federal rule, 21 CFR 201.1, requires a drug label to name the manufacturer, packer or distributor and its place of business, and when a distributor is named, the name must carry a qualifying phrase such as “Distributed by.”`,
      },
      { h: 'What the federal rule requires' },
      {
        p: `The regulation is 21 CFR 201.1, titled “Drugs; name and place of business of manufacturer, packer, or distributor.” Its first paragraph says a drug in finished package form is misbranded if its label doesn’t conspicuously bear the name and place of business of the manufacturer, packer or distributor. Prescription drugs dispensed by a pharmacy are handled differently, but for an over-the-counter product on a store shelf or bought online, that name and address must be on the label.`,
      },
      {
        p: `The rule also limits who can be named. Apart from what the section allows, no one other than the manufacturer, packer or distributor may be identified on the label. A label may also identify the holder or licensee of a trademark, and when more than one company is named, it may say which one to contact for information.`,
      },
      { h: 'The phrases you’ll see on a label' },
      {
        p: `When the company named is a distributor, 201.1 requires its name to be qualified with one of these phrases, which may be abbreviated:`,
      },
      {
        list: [
          `“Manufactured for ______”`,
          `“Distributed by ______”`,
          `“Manufactured by ______ for ______”`,
          `“Manufactured for ______ by ______”`,
          `“Distributor: ______”`,
          `“Marketed by ______”`,
        ],
      },
      {
        p: `A packer gets its own wording: “Packed by” or “Packaged by.” Abbreviations such as “Dist. by” or “Mfd. for” are the same statements in shorter form.`,
      },
      { h: 'A name with no phrase means “we made it”' },
      {
        p: `Here’s the part many people don’t know. Under 201.1, a company name on a drug label with no qualifying phrase is a representation that the company is the sole manufacturer. If that isn’t true, the rule calls the label false and misleading. So a bare name tells you something too: the company is claiming to have made the product itself.`,
      },
      { h: 'Why the address might be an office' },
      {
        p: `The place of business must include the street address, city, state and ZIP code. The street address can be left out if it’s listed in a current city or telephone directory. And a company that manufactures, packs or distributes somewhere other than its principal place of business may list that principal address instead, unless doing so would be misleading. That’s why the address on a label is often a headquarters or office rather than a factory.`,
      },
      {
        p: `The name itself has rules too. For a corporation, it must be the actual corporate name, though it can be the name of a parent, subsidiary or affiliate under common ownership and control.`,
      },
      { h: 'Is a distributed drug different from a manufactured one?' },
      {
        p: `The phrase tells you about roles, not about quality. Plenty of drug companies design, own and sell a product while another company handles manufacturing, and the label simply has to say which is which. What matters for you is that the label tells you who is responsible for the product reaching the market and where to find them. That’s the name to use for questions, to check recalls, or to report a problem, along with the lot number from the package; see [what the lot number on eye drops means](/guides/what-the-lot-number-on-eye-drops-means).`,
      },
      { h: 'Where to find it on an eye drop package' },
      {
        p: `On eye drops, the company name and address usually sit outside the Drug Facts box, often on a side or bottom panel of the carton, and sometimes in small print on the bottle label. The Drug Facts box itself follows a separate format rule and holds the ingredients, uses, warnings and directions; our guide on [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) covers that panel. If a box has no company name or address anywhere, that’s a reason for caution; see [how to tell if eye drops are counterfeit](/guides/how-to-tell-if-eye-drops-are-counterfeit).`,
      },
      { h: 'Who’s behind Quell' },
      {
        p: `Quell is sold by {company}, at {address}, which owns the Quell trademark, runs this site and handles orders. The bottle names its manufacturer as Aurora Pharmaceuticals, Inc, also in Brentwood, Tennessee. [Who makes Quell?](/guides/who-makes-quell) has more on how the two relate. For questions about an order or the product, call {phone}, {hours}.`,
      },
      {
        p: `The rest of what you need is on the Drug Facts panel. Quell’s Uses line reads: {uses}. The directions: {directions}. The caution: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Does distributed by mean the company didn’t make the product?',
        a: `Usually, yes. Under 21 CFR 201.1, a company named only as a distributor must be labeled with a phrase like “Distributed by,” while a name with no phrase represents the company as the sole manufacturer.`,
      },
      {
        q: 'What is the difference between manufactured by and distributed by?',
        a: `“Manufactured by” names the company that made the product. “Distributed by” names a company that sells or markets it, which may have had another company make it. Federal rules require labels to say which role the named company plays.`,
      },
      {
        q: 'Why is there an address on a drug label?',
        a: `21 CFR 201.1 requires the name and place of business of the manufacturer, packer or distributor, including street address, city, state and ZIP code, so you know who is responsible and how to reach them.`,
      },
      {
        q: 'What does Mfd. for mean on a label?',
        a: `It’s short for “Manufactured for.” The named company had the product made for it by another firm. Federal labeling rules allow these qualifying phrases to be abbreviated.`,
      },
    ],
  },
]
