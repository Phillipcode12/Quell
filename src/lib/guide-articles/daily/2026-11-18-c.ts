import type { Guide } from '@/lib/guide-types'
export const DAILY_20261118_C: Guide[] = [
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-akron-oh:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID USW00014895, AKRON CANTON AP, OH, elev 1210 ft
   *   (Jan max 35.5 F, min 20.3 F, snow 13.4 in; Feb snow 12.0; Mar snow 7.6;
   *   Dec snow 8.9; monthly snow sums to 47.2 in; Jul max 84.3 F; Jun precip
   *   4.43 in, wettest; Feb 2.44 in, driest; monthly precip sums to 41.57 in;
   *   normal lows Nov 34.2, Dec 26.1, Mar 29.4, Apr 39.8)
   * - /c/dev/quell/.daily-job/relhum23.txt (NOAA, AKRON OH, WBAN 14895,
   *   1948-2018, morning/afternoon: Jan 81/70, Apr 76/54, May 77/55,
   *   Aug 86/57, Dec 81/71)
   * - /c/dev/quell/.daily-job/wndspd23.txt (AKRON OH, 1984-2023: Jan the
   *   windiest month, Aug the calmest; Jan through Apr the four windiest)
   */
  {
    slug: 'dry-eye-relief-akron-oh',
    title: 'Dry eye relief in Akron, Ohio',
    description:
      'Akron’s April afternoons average 54 percent humidity, and January brings over 13 inches of snow. NOAA’s numbers and everyday dry eye relief for Summit County.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Akron means planning for two dry stretches: the long furnace season, when January highs at Akron-Canton Airport average about 36°F in NOAA’s normals, and the breezy spring, when April afternoons average 54 percent humidity. Keep heat vents off your face, blink fully at screens, use a lubricating drop exactly as its label directs, and see an eye doctor for pain, vision changes or dryness that won’t settle.`,
      },
      { h: 'Akron weather in NOAA’s numbers' },
      {
        p: `The official long-record station for the Akron area is Akron-Canton Airport, which sits in Green, south of the city on the way to Canton, at about 1,210 feet above sea level. NOAA’s 1991–2020 climate normals for that station, as published through the National Weather Service’s NOWData, sketch the year like this:`,
      },
      {
        list: [
          `January is the coldest and snowiest month, with a normal high of 35.5°F, a normal low of 20.3°F and 13.4 inches of snow.`,
          `February adds another 12.0 inches of snow and December 8.9, and the monthly snowfall normals add up to about 47 inches a season.`,
          `July is the warmest month, with a normal high of 84.3°F.`,
          `Precipitation totals roughly 41.6 inches across the twelve monthly normals. June is the wettest month at 4.43 inches, and February the driest at 2.44.`,
        ],
      },
      {
        p: `Those figures say Akron is not a dry place by rainfall. What dries eyes here is what people do to the air: heat it for half the year, cool it in July, and move through it fast on a bike or a ridgeline trail.`,
      },
      { h: 'Furnace season, late October to April' },
      {
        p: `Normal lows at the airport fall to 34.2°F in November and 26.1°F in December, and they don’t climb back near 40°F until April. That’s roughly six months when a furnace runs most nights in a typical Akron house, from the older frame homes in Highland Square to newer builds out in Stow and Hudson.`,
      },
      {
        p: `Outdoors, the winter air is damp. NOAA’s humidity table puts January afternoons at 70 percent and December afternoons at 71. Indoors is a different story. When 20-degree air is pulled inside and warmed to 70, it holds the same moisture spread across far more capacity, so its relative humidity drops sharply. The tear film loses water faster in that air, especially between blinks.`,
      },
      {
        list: [
          `Run a cleaned humidifier in the bedroom, where you spend the most unbroken hours. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers setup and cleaning.`,
          `Turn floor registers and space heaters so they don’t blow toward a favorite chair or the head of the bed.`,
          `Point the car defroster at the windshield, not at your face, on the drive down Route 8 or I-77.`,
          `Lower the thermostat a few degrees at night; cooler air that is heated less loses less relative humidity.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through the house room by room.`,
      },
      { h: 'Why April can feel drier than January' },
      {
        p: `Most people expect winter to be the hard season for dry eyes, and indoors it is. Outdoors, though, NOAA’s humidity table for Akron shows April afternoons averaging 54 percent and May afternoons 55, the lowest figures of the year and well below January’s 70. NOAA’s wind table adds to it: January through April are Akron’s four windiest months, while August is its calmest.`,
      },
      {
        p: `Put drier afternoons together with steady spring wind and you get the days when eyes sting during yard cleanup, a Little League practice or the first long ride of the season. Wraparound sunglasses help because they block moving air from the side as well as glare. If you feel the sting starting, step out of the wind and give your eyes a few slow, complete blinks before carrying on.`,
      },
      { h: 'The Towpath, the valley and game days' },
      {
        p: `The Ohio & Erie Canal Towpath Trail runs through Akron, and Cuyahoga Valley National Park opens up to the north. Both draw runners and cyclists in every season, and both add airflow across the eye that a walk around the block doesn’t. A cycling pace of even 12 or 15 miles an hour moves air past your face steadily, which speeds evaporation from the tear film. Glasses or cycling eyewear help, and our guide to [dry eyes when cycling](/guides/dry-eyes-when-cycling) explains why stopping before you use a drop matters.`,
      },
      {
        p: `Fall is the valley’s busiest season for hikers. October’s normal high of 63.4°F is comfortable, and the leaves and dust kicked up on dry trails can bother eyes that are already short on moisture. Summer brings the other extreme: July and August highs in the low to mid 80s, with air conditioning blowing in cars, offices and arenas.`,
      },
      { h: 'Classrooms, hospital shifts and screens' },
      {
        p: `Akron runs on the University of Akron campus downtown, on large hospital systems and on offices where most of the work happens at a monitor. Looking at a screen tends to reduce how often you blink, and each blink is what spreads a fresh layer of tears across the eye. Long charting sessions, exam weeks and evening streaming all count.`,
      },
      {
        list: [
          `Every 20 minutes or so, look across the room for a few seconds and blink fully.`,
          `Place monitors slightly below eye level so your eyes are less wide open.`,
          `Move your desk out of the line of any ceiling vent.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) goes further into why close work dries eyes.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. On its Drug Facts panel, the Uses line reads: {uses}.`,
      },
      {
        p: `The directions are short: {directions}. The panel’s “Do not use” line is: {doNotUse}. For storage, it says: {storage}. An Akron garage or a car parked at the airport in January can fall well below that range, so keep the bottle in a coat pocket or bring it inside rather than leaving it in a cold vehicle. Every line of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell to an Akron address' },
      {
        p: `Quell ships from Brentwood, Tennessee, to homes and workplaces across Akron, Cuyahoga Falls, Barberton, Green and the rest of the United States. You can check out as a guest. Shipping is {shipping}, and orders of {freeThreshold} or more, which {freeBottles} bottles reach, ship free. Tracking comes by email, but no delivery date is promised, so reorder while there’s still some left. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to send them back.`,
      },
      {
        p: `The [Akron page](/eye-drops/akron-oh) and the [Ohio page](/eye-drops/state/ohio) have local details, or you can [order from the home page](/#buy).`,
      },
      { h: 'When an Akron eye doctor should see you' },
      {
        p: `A lubricating drop is for dryness and minor irritation, not for anything that hurts or changes how you see. The label is specific: {stopUse} Working out the cause, and what to do about it, is an eye doctor’s job. Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) guide lists the warning signs, and the [self-check](/self-check) can help you organize what you notice before an appointment. It’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Is Akron humid in the winter?',
        a: `Outdoors, yes. NOAA’s humidity table for Akron puts January afternoons at 70 percent and December afternoons at 71. Heated indoor air is much drier, which is why eyes can feel dry inside during an Akron winter.`,
      },
      {
        q: 'How much snow does Akron, Ohio get a year?',
        a: `NOAA’s 1991–2020 normals for Akron-Canton Airport add up to about 47 inches of snow a season, with January the snowiest month at 13.4 inches.`,
      },
      {
        q: 'What month has the lowest humidity in Akron?',
        a: `April. NOAA’s table lists Akron’s April afternoons at 54 percent relative humidity, with May close behind at 55. January through April are also Akron’s windiest months.`,
      },
      {
        q: 'Can I order Quell eye drops to Akron, OH?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Akron and every other US address. Shipping is {shipping}, orders of {freeThreshold} or more ship free, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-allentown-pa:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID USW00014737, ALLENTOWN LEHIGH VALLEY INTERNATIONAL AIRPORT, PA,
   *   elev 385 ft (Jan max 38.4 F, min 21.8 F; Jul max 86.4 F, precip 5.30 in,
   *   wettest; Feb precip 2.77 in, driest; Feb snow 10.8 in, Jan 9.8, Mar 6.3,
   *   Dec 4.6; monthly snow sums to 33.1 in; monthly precip sums to 47.36 in;
   *   Sep precip 4.84)
   * - /c/dev/quell/.daily-job/relhum23.txt (NOAA, ALLENTOWN PA, WBAN 14737,
   *   1948-2018, morning/afternoon: Jan 76/61, Mar 74/52, Apr 72/49,
   *   May 76/52, Sep 87/56, Dec 78/62)
   * - /c/dev/quell/.daily-job/wndspd23.txt (ALLENTOWN PA, 1984-2023: Mar the
   *   windiest month, Aug the calmest)
   */
  {
    slug: 'dry-eye-relief-allentown-pa',
    title: 'Dry eye relief in Allentown, Pennsylvania',
    description:
      'April afternoons in the Lehigh Valley average 49 percent humidity, the year’s low. NOAA’s Allentown numbers and practical dry eye relief, season by season.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `For dry eye relief in Allentown, watch early spring as closely as winter. NOAA’s humidity table for Lehigh Valley International Airport puts April afternoons at 49 percent, the lowest of the year, and March is the valley’s windiest month. In winter, heated indoor air does the drying. Shield your eyes from wind and vents, blink fully during screen work, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The Lehigh Valley’s climate, by NOAA’s count' },
      {
        p: `NOAA’s 1991–2020 climate normals for Lehigh Valley International Airport, the official station for Allentown, about 385 feet above sea level northeast of downtown, show a valley with four distinct seasons and plenty of rain:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals add up to about 47.4 inches. July is the wettest month at 5.30 inches; February is the driest at 2.77.`,
          `Snow totals about 33 inches in a normal season, with February the snowiest month at 10.8 inches and January close behind at 9.8.`,
          `January averages a high of 38.4°F and a low of 21.8°F.`,
          `July averages a high of 86.4°F, the warmest month.`,
        ],
      },
      {
        p: `None of that reads like a dry climate, and in a sense it isn’t. Eyes in Allentown dry out because of when the air turns dry and breezy, and because of what heating, cooling and long shifts do indoors.`,
      },
      { h: 'March wind and April’s low humidity' },
      {
        p: `NOAA’s wind table names March as Allentown’s windiest month and August its calmest. Its humidity table then shows afternoon readings sliding from 61 percent in January to 52 in March and 49 in April, before climbing to 52 again in May. That makes late March and April the stretch when outdoor air is both moving and comparatively dry.`,
      },
      {
        p: `It’s also when the valley moves outdoors again. Opening day for minor league baseball at Coca-Cola Park, spring cleanup in the yard, the first walks along the Lehigh River and the Jordan Creek all put your eyes in that dry, gusty air.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on windy afternoons; they block air coming in from the sides.`,
          `Turn your back to gusts when you can, and blink slowly a few times after a strong one.`,
          `Save mowing and leaf blowing for a calmer hour, or wear safety glasses that wrap around.`,
          `On a long drive on I-78 or Route 22, aim the dashboard vents at your chest, not your eyes.`,
        ],
      },
      { h: 'Warehouse floors, loading docks and long shifts' },
      {
        p: `Warehouses and distribution centers line the highways around Allentown, and many local jobs now involve big buildings with dock doors opening and closing, forced-air heat in winter and fans in summer. Air that keeps moving across your face, dust from cardboard and pallets, and long hours of focused work at a scanner or a screen can all leave eyes gritty by the end of a shift.`,
      },
      {
        p: `If you work in one of those buildings, a few habits help: stand out of the direct path of heaters and fans when you have a choice, wear the eye protection your employer provides, and take a short break now and then to close your eyes for a few seconds. If something gets into your eye at work, rinsing and first aid follow your workplace’s rules, and anything that keeps hurting needs a medical professional, not a lubricating drop.`,
      },
      { h: 'Heating season from the West End to the suburbs' },
      {
        p: `From roughly November into March, Allentown homes run their heat. Warmed winter air is relatively dry even though NOAA records January afternoons outdoors at 61 percent humidity. Rowhouses near downtown with radiators, and newer houses in South Whitehall or Upper Macungie with forced air, dry the air in different ways, but both pull its relative humidity down as it warms.`,
      },
      {
        list: [
          `Keep a humidifier in the bedroom and clean it on the schedule its manual gives.`,
          `Put a little distance between your chair and the radiator or floor register.`,
          `If you use a space heater at your desk, angle it toward your legs. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains why placement matters.`,
        ],
      },
      { h: 'Screens, study and the rink' },
      {
        p: `Students at Muhlenberg College and the valley’s other campuses spend long nights on laptops, and office workers downtown face the same monitors. Screens tend to cut the number of times you blink, and each blink spreads a fresh layer of tears. In winter the PPL Center fills for hockey, and the air over an ice rink is cold and moving. Look away from the screen or the game every so often and finish each blink fully. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      { h: 'Quell’s label, word for word' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}, and its Drug Facts panel states the Uses as: {uses}.`,
      },
      {
        list: [
          `Directions: {directions}.`,
          `When using: {tip}.`,
          `Warnings: {warnings}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `A pickup truck at a job site in February sits below that storage range for hours, so keep the bottle in an inside pocket. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Allentown' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Allentown, Bethlehem, Easton, Emmaus and anywhere else in the US. No account is needed to check out. Shipping costs {shipping}, and an order of {freeBottles} bottles or more ships free. You’ll get tracking by email; delivery dates aren’t promised, so leave some margin before the last bottle runs out. If a bottle stays sealed, you can ask for a refund within {returnDays} days of delivery without mailing it back. See the [Allentown page](/eye-drops/allentown-pa) and the [Pennsylvania page](/eye-drops/state/pennsylvania), or [order here](/#buy).`,
      },
      { h: 'Signs you need an eye doctor in the Lehigh Valley' },
      {
        p: `The label draws the line plainly: {stopUse} Only an eye doctor, who can examine your eyes and hear your history, can say what is behind the dryness and what to do next. Before the visit, [questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) can help you get the most out of it.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Allentown, PA?',
        a: `March. NOAA’s wind table names it Allentown’s windiest month, and August its calmest. April follows with the lowest afternoon humidity of the year, at 49 percent.`,
      },
      {
        q: 'How much snow does Allentown get in a year?',
        a: `About 33 inches in a normal season, according to NOAA’s 1991–2020 normals for Lehigh Valley International Airport. February is the snowiest month at 10.8 inches.`,
      },
      {
        q: 'Why do my eyes feel dry at work in a warehouse?',
        a: `Big buildings move a lot of air with heaters, fans and dock doors, and dust and focused work add to it. Stay out of direct airflow when you can, wear the eye protection your employer provides, and blink fully during breaks.`,
      },
      {
        q: 'Does Quell deliver to the Lehigh Valley?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Allentown, Bethlehem, Easton and the rest of the US. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-aberdeen-sd:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID USW00014929, ABERDEEN REGIONAL AP, SD, elev 1298 ft
   *   (Jan max 23.7 F, min 1.9 F; Feb min 6.3; Dec min 7.9; Jul max 84.9 F;
   *   Jun precip 3.76 in, wettest; Jan 0.55 in, driest; monthly precip sums to
   *   21.82 in; Feb snow 8.6, Dec 8.0, Jan 7.8, Apr 4.2; monthly snow sums to
   *   42.7 in)
   * - /c/dev/quell/.daily-job/relhum23.txt (NOAA, ABERDEEN SD, WBAN 14929,
   *   1948-2018, morning/afternoon: Jan 78/72, Apr 82/53, May 81/51,
   *   Aug 89/54, Dec 81/73)
   * - /c/dev/quell/.daily-job/wndspd23.txt (ABERDEEN SD, 1984-2023: Apr the
   *   windiest month, Jul and Aug the calmest; annual figure higher than the
   *   Akron and Allentown rows)
   */
  {
    slug: 'dry-eye-relief-aberdeen-sd',
    title: 'Dry eye relief in Aberdeen, South Dakota',
    description:
      'Aberdeen gets about 22 inches of precipitation a year, and April is its windiest month. NOAA’s numbers and dry eye relief for the James River valley.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Aberdeen comes down to wind and cold. NOAA’s normals give Aberdeen Regional Airport about 22 inches of precipitation a year, January lows near 2°F, and April as its windiest month, with afternoon humidity bottoming out around 51 percent in May. Block the wind with wraparound eyewear, keep furnace air off your face, use a lubricating drop exactly as labeled, and see an eye doctor if your eyes hurt or your vision changes.`,
      },
      { h: 'Aberdeen’s weather, in NOAA’s numbers' },
      {
        p: `Aberdeen Regional Airport sits on the flat ground east of town at about 1,300 feet. NOAA’s 1991–2020 climate normals for the station, also published through the National Weather Service’s NOWData, describe a true northern plains climate:`,
      },
      {
        list: [
          `January’s normal high is 23.7°F and its normal low 1.9°F. December and February lows also stay in single digits.`,
          `July’s normal high is 84.9°F.`,
          `The monthly precipitation normals total about 21.8 inches. June is wettest at 3.76 inches, and January driest at 0.55.`,
          `Snow adds up to about 43 inches a season, with February the snowiest month at 8.6 inches. April still averages 4.2.`,
        ],
      },
      {
        p: `More than half the year’s precipitation falls from May through August. The rest of the calendar is lean, and the winter months bring very little moisture of any kind beyond light, blowing snow.`,
      },
      { h: 'Prairie wind, worst in April' },
      {
        p: `NOAA’s wind table gives Aberdeen a higher yearly average than Akron, Ohio, or Allentown, Pennsylvania, and it ranks April as the windiest month, with March and May close behind. July and August are the calmest. Wind matters for eyes because moving air carries moisture off the tear film faster, and on open ground there’s little to break it.`,
      },
      {
        p: `NOAA’s humidity table adds the other half of the spring picture: April afternoons average 53 percent and May afternoons 51, the lowest of the year, while mornings stay above 80. Spring planting, calving checks in the pasture and the first rounds of golf all happen in that drying air.`,
      },
      {
        list: [
          `Wear wraparound safety glasses or sunglasses in the field; they block crosswind better than flat lenses.`,
          `In a tractor or pickup cab, keep the fan off your face and on the floor or windshield.`,
          `Turn away from strong gusts and blink slowly a few times once they pass.`,
          `Keep a clean cloth in the cab for wiping dust off your glasses before it reaches your eyes.`,
        ],
      },
      { h: 'Harvest dust and pheasant season' },
      {
        p: `Fall is busy around Aberdeen. Combines run through soybeans, corn and wheat stubble, and pheasant hunters fill the fields and shelterbelts of Brown County. Chaff and dust ride the wind, and long hours scanning a field or a horizon tend to reduce how often you blink. October’s normal high is 59.3°F and November’s 42.5°F, so cold air joins the dust as the season goes on.`,
      },
      {
        p: `Shooting glasses or wraparound sunglasses do double duty here. If grit gets into an eye, don’t rub it; stop, blink, and if it won’t clear or keeps hurting, get it looked at. Our guide to [dry eyes on a hunting trip](/guides/dry-eyes-on-a-hunting-trip) covers blinds, cold mornings and long sits.`,
      },
      { h: `Half a year of furnace air` },
      {
        p: `Normal lows sit at or below freezing from November through April at the airport, so heat runs in most Aberdeen homes for half the year. Outdoors in midwinter, NOAA’s humidity table records January afternoons at 72 percent and December at 73. Inside, that same air warmed to room temperature has a much lower relative humidity, which is why skin cracks and eyes sting by February.`,
      },
      {
        list: [
          `A humidifier in the bedroom helps the hours you sleep. Clean it often.`,
          `Turn down the furnace a few degrees at night.`,
          `Block or redirect floor registers that blow toward the couch or bed.`,
          `When you come in from a subzero walk, give your eyes a minute to adjust before settling in front of a screen.`,
        ],
      },
      {
        p: `Students at Northern State University face the same dry dorm air, plus long screen sessions. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on keeping indoor air easier on the eyes.`,
      },
      { h: 'Using Quell in a South Dakota winter' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The Drug Facts panel lists the Uses as: {uses}. Its directions: {directions}.`,
      },
      {
        p: `Temperature matters for the bottle as well as for you. The label says: {storage}. A truck parked at a field edge in January, or a deer stand in November, will fall below that range, so carry the bottle in an inside pocket where body heat keeps it warmer. The panel’s “Do not use” line reads: {doNotUse}. Everything else is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell to Aberdeen' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses in Aberdeen and across the state, including farms and rural routes. Checkout works without an account. Shipping is {shipping}, and once an order reaches {freeThreshold} ({freeBottles} bottles), shipping is free. Tracking is emailed, but a delivery date isn’t promised, and winter weather on the plains can slow anything moving by road, so order before you’re down to the last bottle. An unopened bottle can be refunded within {returnDays} days of delivery without being returned. The [Aberdeen page](/eye-drops/aberdeen-sd) and the [South Dakota page](/eye-drops/state/south-dakota) have more, or [order on the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness from wind and furnace air is common, but some signs call for an exam, not a drop. The label puts it this way: {stopUse} An eye doctor can find the cause and recommend what to do about it. [Should I see a doctor or try eye drops first?](/guides/should-i-see-a-doctor-or-try-eye-drops-first) helps you decide.`,
      },
    ],
    faq: [
      {
        q: 'How windy is Aberdeen, South Dakota?',
        a: `Quite windy, by NOAA’s wind table, which gives it a higher yearly average than Akron or Allentown. April is Aberdeen’s windiest month, with March and May close behind, and July and August are the calmest.`,
      },
      {
        q: 'How cold does Aberdeen, SD get in winter?',
        a: `NOAA’s 1991–2020 normals give Aberdeen Regional Airport a January high of 23.7°F and a January low of 1.9°F, with December and February lows also in single digits.`,
      },
      {
        q: 'How much precipitation does Aberdeen get a year?',
        a: `About 21.8 inches across NOAA’s monthly normals for Aberdeen Regional Airport. June is the wettest month at 3.76 inches, and January the driest at 0.55.`,
      },
      {
        q: 'Can I get Quell shipped to a farm near Aberdeen?',
        a: `Yes, as long as it’s a US address. Quell ships from Brentwood, Tennessee, for {shipping}, or free at {freeBottles} bottles or more. No delivery date is promised, so order ahead in winter.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-riverside-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID RAL, RIVERSIDE MUNICIPAL AP, CA, elev 845 ft
   *   (Jan max 67.7 F, min 43.6 F; Dec min 42.8; Jun max 86.7, Jul 93.3,
   *   Aug 94.9, Sep 91.3, Oct 82.7; precip Feb 2.41 in wettest, Jan 2.29,
   *   Dec 1.51, Jun 0.01, Jul 0.12, Aug 0.02, Sep 0.11, May 0.20; monthly
   *   precip sums to 9.37 in; snowfall missing, not used)
   * - National Weather Service San Diego area forecast discussion,
   *   2023-10-29 20:44Z (AFDSGX), archived at
   *   https://mesonet.agron.iastate.edu/api/1/nwstext/202310292044-KSGX-FXUS66-AFDSGX
   *   (Santa Ana winds across the Inland Empire; "widespread relative humidity
   *   less than 15 percent away from the coast"; very poor humidity recovery
   *   at night)
   * No relhum23 or wndspd23 row for this station: no humidity normals used.
   */
  {
    slug: 'dry-eye-relief-riverside-ca',
    title: 'Dry eye relief in Riverside, California',
    description:
      'Riverside averages about 9.4 inches of rain a year and August highs near 95°F. What NOAA’s data and Santa Ana winds mean for dry eyes in the Inland Empire.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Riverside starts with how little rain falls. NOAA’s normals for Riverside Municipal Airport add up to about 9.4 inches a year, almost none of it from June through September, when highs run in the 90s. Santa Ana winds can push humidity far lower in fall and winter. Wear wraparound sunglasses, keep car and office air off your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Riverside’s climate in NOAA’s normals' },
      {
        p: `Riverside Municipal Airport, on the city’s west side near the Santa Ana River at about 845 feet, is the station NOAA uses for its 1991–2020 climate normals here. The numbers describe an inland valley that is warm, sunny and dry for most of the year:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals total about 9.4 inches. February is the wettest month at 2.41 inches, with January close at 2.29.`,
          `June averages 0.01 inch and August 0.02. June through September together come to about a quarter of an inch.`,
          `August’s normal high is 94.9°F, July’s 93.3°F and September’s 91.3°F.`,
          `January is mild by most of the country’s standards, with a normal high of 67.7°F and a low of 43.6°F.`,
        ],
      },
      {
        p: `With rain that scarce, the air spends much of the year with little moisture to give, and anything that moves it across your eyes, from a car vent to a desert wind, speeds up evaporation from the tear film.`,
      },
      { h: 'Santa Ana days' },
      {
        p: `The Inland Empire’s driest days usually arrive with offshore wind. In one October 2023 forecast discussion, the National Weather Service’s San Diego office described Santa Ana winds across the Inland Empire and reported relative humidity widely below 15 percent away from the coast, with very poor recovery at night. Those events most often come in fall and winter, and they turn an ordinary errand into a gritty, squinting walk across a parking lot.`,
      },
      {
        list: [
          `On a windy day, wear wraparound sunglasses outdoors, even for short trips.`,
          `Close the car’s fresh-air intake and point the vents at your chest.`,
          `Keep windows shut at home while the wind is blowing dust and ash.`,
          `If grit gets in your eye, don’t rub it. Blink, and if it won’t clear, have it looked at.`,
        ],
      },
      {
        p: `Wind also carries dust from bare lots and hillsides. Wraparound lenses block particles as well as air, which matters more than tint on those days.`,
      },
      { h: 'Ninety-degree summers and the air conditioning that comes with them' },
      {
        p: `From late spring to early fall, highs at the airport sit near or above 90°F, so air conditioning runs in nearly every house, car, classroom and warehouse in town. Cooled air is dry air, and an AC vent aimed at your face blows it straight across the eye. The pattern is familiar to anyone who commutes on the 91 or the 60 with the dash vents on high.`,
      },
      {
        list: [
          `Aim car vents low and away from your eyes, and use recirculate on dusty days.`,
          `At a desk, check whether a ceiling diffuser blows directly onto your chair and move the chair if it does.`,
          `A small humidifier on the desk or by the bed can take the edge off cooled air.`,
          `Plan long outdoor hikes, like the climb up Mount Rubidoux, for early morning before the heat and afternoon breeze build.`,
        ],
      },
      { h: 'Citrus groves, the Santa Ana River Trail and campus life' },
      {
        p: `Riverside’s identity is tied to its citrus history, still visible at California Citrus State Historic Park, and to open spaces like the Santa Ana River Trail and the Box Springs Mountains. Cycling and running those routes puts steady airflow on your eyes. Our guide on [dry eyes when cycling](/guides/dry-eyes-when-cycling) has more on eyewear and stopping safely.`,
      },
      {
        p: `UC Riverside students live with the same dry air plus long nights on laptops. Screens tend to slow blinking, and every blink spreads a fresh layer of tears, so a screen session in an air-conditioned room is a double hit. Looking away every so often and finishing each blink helps. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the mechanics.`,
      },
      { h: 'Mild winters, cool nights' },
      {
        p: `December and January lows at the airport average in the low 40s, so many Riverside homes run a heater on winter evenings even though afternoons are pleasant. Wall heaters and space heaters dry the air in a small room quickly. During the Festival of Lights at the Mission Inn, crowds stand outside on cool, sometimes breezy nights, then come home to a heated house. Keep heaters pointed away from where you sit and sleep.`,
      },
      { h: 'Quell’s Drug Facts, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The panel lists its Uses as: {uses}. Directions read: {directions}.`,
      },
      {
        p: `The storage line matters in Riverside summers: {storage}. A car parked in an August lot gets much hotter than that, so carry the bottle in a bag you take inside rather than leaving it in the glove box. The panel also says: {tip}. See the whole label on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Riverside' },
      {
        p: `We ship from Brentwood, Tennessee, to Riverside, Corona, Moreno Valley, Jurupa Valley and anywhere else in the US. There’s no account to create. Shipping costs {shipping}, and orders of {freeThreshold} or more ship free, which {freeBottles} bottles cover. Tracking arrives by email, though delivery dates aren’t promised, so reorder with a little time to spare. Sealed bottles are refundable within {returnDays} days of delivery, and you keep them. For local details, see the [Riverside page](/eye-drops/riverside-ca) and the [California page](/eye-drops/state/california), or [buy on the home page](/#buy).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `Dryness that comes and goes with the weather is one thing. Pain, blurred vision or irritation that won’t let up is another. Quell’s label says: {stopUse} An eye doctor can figure out what’s going on and what to do about it. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help, and the [self-check](/self-check) helps you organize what you notice. It’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Riverside, CA get a year?',
        a: `About 9.4 inches, adding up NOAA’s 1991–2020 monthly normals for Riverside Municipal Airport. February is the wettest month at 2.41 inches, and June through September bring about a quarter inch combined.`,
      },
      {
        q: 'Do Santa Ana winds make your eyes dry?',
        a: `They can. During one October 2023 event, the National Weather Service’s San Diego office reported relative humidity widely below 15 percent away from the coast. Dry, moving air speeds evaporation from the tear film, so wraparound sunglasses help.`,
      },
      {
        q: 'How hot does Riverside get in the summer?',
        a: `NOAA’s normals give Riverside Municipal Airport an August high of 94.9°F and a July high of 93.3°F, with September still averaging 91.3°F.`,
      },
      {
        q: 'Can Quell be shipped to the Inland Empire?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Riverside and the rest of the US for {shipping}, or free on orders of {freeThreshold} or more. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-winston-salem-nc:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID INT, WINSTON SALEM REYNOLDS AP, NC, elev 957 ft
   *   (Jan max 48.8 F, min 30.7 F; Feb min 33.2; Dec min 33.6; Jul max 88.0 F,
   *   Aug 86.1, Jun 84.9; Oct max 70.6; precip Aug 4.51 in wettest, Jul 4.24,
   *   Feb 2.89 driest, Nov 3.06; monthly precip sums to 43.20 in; snowfall
   *   missing, not used)
   * No relhum23 or wndspd23 row for this station: no humidity or wind
   * normals used.
   */
  {
    slug: 'dry-eye-relief-winston-salem-nc',
    title: 'Dry eye relief in Winston-Salem, North Carolina',
    description:
      'Winston-Salem’s January lows average about 31°F and July highs 88°F, so heat and AC take turns drying the air. NOAA’s numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Winston-Salem is mostly about indoor air. NOAA’s normals for Smith Reynolds Airport show about 43 inches of precipitation a year, but January lows near 31°F keep furnaces running in winter and July highs of 88°F keep air conditioning on in summer. Both dry the air you breathe and blink in. Aim vents away from your face, blink fully at screens, use a lubricating drop as directed, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Winston-Salem weather by the numbers' },
      {
        p: `Smith Reynolds Airport, northeast of downtown at about 957 feet, is the city’s official weather station. NOAA’s 1991–2020 climate normals for it, the same figures the National Weather Service publishes through NOWData, show a mild Piedmont climate:`,
      },
      {
        list: [
          `Precipitation totals about 43.2 inches across the monthly normals, spread fairly evenly. August is the wettest month at 4.51 inches; February is the driest at 2.89.`,
          `January averages a high of 48.8°F and a low of 30.7°F. December and February lows sit just above freezing.`,
          `July is the warmest month, with a normal high of 88.0°F, and August follows at 86.1°F.`,
          `October cools to a normal high of 70.6°F, the start of the season when windows open and then close again for heat.`,
        ],
      },
      {
        p: `Rain falls in every month, so the dryness people feel here rarely comes from drought. It comes from heated and cooled indoor air, from long work at screens, and from the wind on a ridge or a bike.`,
      },
      { h: 'Heating season in the Twin City' },
      {
        p: `With normal lows just above or below freezing from December through February, heat pumps and furnaces run most nights in Winston-Salem homes from late fall through early spring. Warming cold air lowers its relative humidity, and heat pumps that move a lot of air keep it flowing past you. Older homes in West End and Ardmore with radiators dry a room differently than a newer house with ducts, but both can leave eyes scratchy by evening.`,
      },
      {
        list: [
          `Keep a humidifier running where you sleep, and follow its cleaning schedule.`,
          `Close or redirect a register that blows on the bed or the couch.`,
          `Set the thermostat a little lower at night.`,
          `In the car, send the heat to your feet and the windshield instead of your face.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers more room-by-room changes.`,
      },
      { h: 'December evenings in Old Salem' },
      {
        p: `The holiday season brings crowds to Old Salem’s candlelight events and Moravian traditions, to downtown’s lights and to Christmas shopping at Hanes Mall. That means long stretches outdoors in cold, sometimes breezy air, followed by heated stores and homes. Cold wind on the way in and warm, dry air once you arrive is a combination that leaves many people blinking more by the end of the night. Glasses or sunglasses help outdoors, and a break from a heater vent helps inside.`,
      },
      { h: 'Humid summers, cold air conditioning' },
      {
        p: `Summers in the Piedmont feel sticky, yet eyes can still feel dry. That’s because many people spend July and August in air-conditioned offices, hospital wings, classrooms and cars, with cooled air blowing past them for hours. The city’s large medical center and its university campuses keep thousands of people inside conditioned buildings on long shifts.`,
      },
      {
        list: [
          `Check whether an office vent blows across your monitor and your face, and move if it does.`,
          `On long shifts, close your eyes for a few seconds during breaks.`,
          `Keep car vents pointed below your chin on the drive home on Salem Parkway or US 52.`,
        ],
      },
      { h: 'Ridges, trails and game days' },
      {
        p: `Pilot Mountain and Hanging Rock state parks sit within an hour’s drive, and the view from a ridge often comes with a stiff breeze. The Salem Lake trail and the Muddy Creek Greenway draw runners and cyclists in town. Moving air on a bike or exposed ridge carries moisture off the eye, so wraparound sunglasses are worth packing. On fall Saturdays, Wake Forest football fans spend hours in open stands; [dry eyes for referees and coaches](/guides/dry-eyes-for-referees-and-coaches) covers the same wind and lights from the sideline.`,
      },
      { h: 'Screens on campus and at work' },
      {
        p: `Students at Wake Forest, Winston-Salem State and the UNC School of the Arts, along with office and hospital staff across the city, spend hours at screens. Focused screen work tends to cut how often you blink, so tears aren’t spread as often. Look away now and then, finish each blink, and keep the monitor slightly below eye level. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its actives are {actives}. The Uses section of its Drug Facts panel reads: {uses}. For directions, the panel says: {directions}. It also says: {doNotUse}. The bottle’s storage line is: {storage}. You can read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Winston-Salem' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Winston-Salem, Clemmons, Kernersville, Lewisville and every other US address. Check out as a guest. Shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, so order before you run low. Unopened bottles can be refunded within {returnDays} days of delivery, no return trip needed. See the [Winston-Salem page](/eye-drops/winston-salem-nc) or the [North Carolina page](/eye-drops/state/north-carolina), or [order from the home page](/#buy).`,
      },
      { h: 'When it’s time for an eye exam' },
      {
        p: `If dryness comes with pain, a change in vision or irritation that won’t ease, stop and get checked. The label says: {stopUse} An eye doctor is the one to sort out the cause. [When to stop using eye drops and see a doctor](/guides/when-to-stop-using-eye-drops) goes through the signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Winston-Salem get in winter?',
        a: `NOAA’s 1991–2020 normals for Smith Reynolds Airport give January a high of 48.8°F and a low of 30.7°F, with December and February lows just above freezing.`,
      },
      {
        q: 'What is the wettest month in Winston-Salem, NC?',
        a: `August, at 4.51 inches in NOAA’s normals for Smith Reynolds Airport. February is the driest at 2.89 inches, and the year totals about 43.2 inches.`,
      },
      {
        q: 'Why are my eyes dry in North Carolina in the summer?',
        a: `Air conditioning. Outdoor summer air in the Piedmont is humid, but cooled air indoors and in cars is dry and often blows across your face for hours. Redirecting vents and blinking fully at screens help.`,
      },
      {
        q: 'Can I buy Quell online in Winston-Salem?',
        a: `Yes. Order on our site and it ships from Brentwood, Tennessee, to any Winston-Salem address. Shipping is {shipping}, or free at {freeBottles} or more bottles.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-macon-bibb-county-ga:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID MCN, MACON MIDDLE GA REGIONAL AP, GA, elev 343 ft
   *   (Jan max 59.3 F, min 35.9 F; Feb min 39.1; Dec min 37.8; Mar max 70.6;
   *   Jun max 90.9, Jul 93.5, Aug 92.2, Sep 87.6; precip Jul 4.79 in wettest,
   *   Dec 4.57, Oct 2.63 driest, May 2.65; monthly precip sums to 46.91 in;
   *   snowfall missing, not used)
   * - /c/dev/quell/.daily-job/wndspd23.txt (MACON GA, 1984-2023: Feb and Mar
   *   the windiest months, Aug the calmest)
   * No relhum23 row for this station: no humidity normals used.
   */
  {
    slug: 'dry-eye-relief-macon-bibb-county-ga',
    title: 'Dry eye relief in Macon, Georgia',
    description:
      'Macon’s summer highs top 90°F for four months, and March is one of its windiest. NOAA’s numbers and dry eye relief for Macon-Bibb County, season by season.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Macon means handling a long, hot air-conditioning season and a breezy late winter. NOAA’s normals put highs at Middle Georgia Regional Airport above 90°F from June through August, and its wind records rank February and March as Macon’s windiest months. Keep cold vent air off your face, wear sunglasses on blustery days, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Macon’s climate, from NOAA’s records' },
      {
        p: `Middle Georgia Regional Airport, south of the city at about 343 feet, is the official station for Macon-Bibb County. NOAA’s 1991–2020 climate normals for it, also available through the National Weather Service’s NOWData pages, show a warm, wet Georgia fall line climate:`,
      },
      {
        list: [
          `July is the hottest month, with a normal high of 93.5°F. August averages 92.2°F and June 90.9°F.`,
          `January’s normal high is 59.3°F and its normal low 35.9°F.`,
          `The monthly precipitation normals add up to about 46.9 inches. July is the wettest month at 4.79 inches, and December nearly matches it at 4.57.`,
          `October is the driest month at 2.63 inches, with May close behind at 2.65.`,
        ],
      },
      {
        p: `That’s plenty of rain overall. The two drier months, though, line up with times when people are outdoors a lot: May, as the heat builds, and October, when football, fairs and fall weekends at Lake Tobesofkee fill the calendar.`,
      },
      { h: 'Cherry blossoms and March wind' },
      {
        p: `Macon’s International Cherry Blossom Festival takes over the city each March, when thousands of Yoshino cherry trees bloom. NOAA’s wind table for Macon ranks February and March as the windiest months of the year, and August as the calmest. Wind speeds evaporation from the tear film, so a day of parades, park concerts and walking tours under the blossoms can leave eyes tired and scratchy by evening.`,
      },
      {
        list: [
          `Wear sunglasses with wraparound frames for festival days; they cut breeze and glare together.`,
          `Take a break in a sheltered spot and close your eyes for a few seconds now and then.`,
          `If petals, dust or grit blow into an eye, don’t rub. Blink, and if the feeling won’t clear, have it checked.`,
        ],
      },
      { h: 'Long summers inside the air conditioning' },
      {
        p: `With normal highs above 90°F from June through August and still near 88°F in September, air conditioning runs most of the year in Macon homes, offices and cars. Cooled air holds less moisture, and the vent is often pointed right at your face. People who work at Robins Air Force Base in Warner Robins, in the city’s hospitals or in warehouses along I-75 spend long shifts in that moving, conditioned air.`,
      },
      {
        list: [
          `Turn dashboard vents toward your chest and feet on the drive along I-75 or I-16.`,
          `At work, notice whether a ceiling vent blows on your desk and ask about moving if it does.`,
          `A small humidifier by the bed or on a desk can soften dry, cooled air.`,
          `On outdoor summer evenings, a fan pointed at your face dries eyes faster; aim it at your body instead.`,
        ],
      },
      { h: 'Ocmulgee trails and river days' },
      {
        p: `Ocmulgee Mounds National Historical Park sits just east of downtown, and the Ocmulgee Heritage Trail follows the river through Amerson River Park. Those are the places where Macon walks, runs, paddles and bikes. Sun off the water and steady breeze along the riverbank add up over a long morning. Shade, sunglasses and a few deliberate blinks during breaks make a difference you can feel.`,
      },
      { h: 'Winter, Mercer and screens' },
      {
        p: `Winters in Macon are short and mild, but December through February still bring normal lows in the high 30s, so heat runs on cold nights. Heated air drops relative humidity indoors, especially in older homes in Ingleside or the historic districts where a space heater fills the gaps. Keep heaters aimed away from where you sit or sleep; [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains the reasons.`,
      },
      {
        p: `Mercer University students and Macon’s office workers also face the screen problem. Focusing on a monitor tends to reduce blinking, and blinking is what spreads tears over the eye. Look up from the screen every 20 minutes or so and make each blink a full one. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      { h: 'What the Quell label tells you' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. Its Drug Facts panel states the Uses: {uses}. The directions say: {directions}.`,
      },
      {
        p: `In a Macon summer, the storage line deserves attention: {storage}. A car in a parking lot on a 93-degree afternoon gets far hotter than that, so keep the bottle in a purse or bag you carry inside. The label also reminds you: {tip}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Macon-Bibb County' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Macon, Warner Robins, Forsyth, Gray and the rest of the country. You don’t need an account to check out. Shipping is {shipping}, and orders of {freeThreshold} or more ship free, which {freeBottles} bottles reach. A tracking email comes with each order, but delivery dates aren’t promised, so reorder before the bottle runs dry. Unopened bottles can be refunded within {returnDays} days of delivery, and there’s nothing to send back. Visit the [Macon-Bibb County page](/eye-drops/macon-bibb-county-ga) or the [Georgia page](/eye-drops/state/georgia), or [order on the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor in Macon' },
      {
        p: `A lubricating drop is for dryness and minor irritation. Pain, changes in vision, or irritation that keeps going are reasons to stop and be examined. The label says: {stopUse} An eye doctor can tell you what’s causing the problem. Before you go, [questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Macon, Georgia?',
        a: `NOAA’s wind table ranks February and March as Macon’s windiest months, which overlaps with the Cherry Blossom Festival. August is the calmest.`,
      },
      {
        q: 'How hot does Macon, GA get in the summer?',
        a: `NOAA’s 1991–2020 normals give Middle Georgia Regional Airport a July high of 93.5°F, with August at 92.2°F and June at 90.9°F.`,
      },
      {
        q: 'What is the driest month in Macon?',
        a: `October, at 2.63 inches in NOAA’s normals, with May nearly as dry at 2.65. July is the wettest month at 4.79 inches.`,
      },
      {
        q: 'Does Quell ship to Macon-Bibb County?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to addresses across Macon-Bibb County for {shipping}, or free on orders of {freeThreshold} or more. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-college-station-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID CLL, COLLEGE STATION EASTERWOOD FLD, TX, elev 315 ft
   *   (Jan max 61.7 F, min 41.3 F; Dec max 63.4, min 42.8; May max 86.3;
   *   Jun 92.2, Jul 95.4, Aug 96.6, Sep 91.2, Oct 81.9; precip Oct 4.93 in
   *   wettest, May 4.60, Jul 1.98 driest, Aug 3.10; monthly precip sums to
   *   41.75 in; snowfall missing, not used)
   * No relhum23 or wndspd23 row for this station: no humidity or wind
   * normals used.
   */
  {
    slug: 'dry-eye-relief-college-station-tx',
    title: 'Dry eye relief in College Station, Texas',
    description:
      'August highs in College Station average 96.6°F and July is its driest month. NOAA’s numbers and dry eye relief for Aggies, game days and long study nights.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in College Station mostly means surviving the cooling season and the study hours. NOAA’s normals for Easterwood Field put August highs at 96.6°F, and July is the driest month at under 2 inches of rain, so air conditioning runs hard for months. Point vents away from your face, take screen breaks and blink fully, use a lubricating drop exactly as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'College Station weather, by NOAA’s numbers' },
      {
        p: `Easterwood Field, the airport on the Texas A&M side of town at about 315 feet, is College Station’s official station. NOAA’s 1991–2020 climate normals for it describe a long, hot Brazos Valley summer and a short, mild winter:`,
      },
      {
        list: [
          `August’s normal high is 96.6°F, the hottest of the year. July averages 95.4°F, June 92.2°F and September 91.2°F.`,
          `July is the driest month at 1.98 inches of rain; October is the wettest at 4.93, with May close at 4.60.`,
          `The monthly precipitation normals total about 41.8 inches.`,
          `January’s normal high is 61.7°F and its low 41.3°F.`,
        ],
      },
      {
        p: `Put those together and you get four months with normal highs above 90°F, peaking just as rain thins out in July and August. Outdoors is hot; indoors is cold and dry, because of how hard the cooling runs.`,
      },
      { h: 'August move-in and the cooling season' },
      {
        p: `Fall semester at Texas A&M starts in the hottest stretch of the year. Students haul boxes up dorm stairs in 96-degree heat, then spend the evening in an apartment with the AC set low. Cooled air carries less moisture, and the vents in many dorms and apartments blow right over a desk or a bed. Eyes notice.`,
      },
      {
        list: [
          `Aim the room vent at the ceiling or the floor, not your pillow or your desk chair.`,
          `A small humidifier can take the edge off cooled air; clean it as its manual says.`,
          `In the car, turn dash vents toward your chest and use recirculate on dusty days.`,
          `Keep a pair of wraparound sunglasses in your backpack for the walk across campus at midday.`,
        ],
      },
      { h: 'Game days at Kyle Field' },
      {
        p: `September home games often kick off in heat; NOAA’s September normal high is still 91.2°F. Fans spend hours in the stands with sun and glare off the bleachers, and the Corps of Cadets and the band march and stand through it. Night games trade sun for stadium lights and hours of staring at the field. Either way, long, focused watching tends to slow your blinking.`,
      },
      {
        list: [
          `Bring sunglasses for afternoon kickoffs, especially in the upper decks.`,
          `Blink deliberately during timeouts and between quarters.`,
          `Keep a small bottle of drops in your bag rather than in a hot car, if you use them.`,
          `If dust or grit gets into an eye in the crowd, don’t rub it. Blink, and get help if it won’t clear.`,
        ],
      },
      {
        p: `Midnight Yell and late tailgates add cool night air and smoke from grills to the mix. That’s another reason to keep eyewear handy.`,
      },
      { h: 'Labs, libraries and finals week' },
      {
        p: `College Station is a study town. Hours at Evans Library, in research labs and at laptops in apartment kitchens add up, and focused screen work tends to cut your blink rate. Every blink spreads a fresh layer of tears across the eye, so fewer blinks mean a drier surface. Fall finals land in December, when normal highs are in the low 60s and heaters start running on cold nights. [Dry eyes during finals week](/guides/dry-eyes-during-finals-week) has a study-session routine.`,
      },
      {
        list: [
          `Every 20 minutes or so, look across the room for a few seconds and blink fully.`,
          `Set the screen slightly below eye level.`,
          `Turn off a desk fan aimed at your face while you read.`,
        ],
      },
      { h: 'Short winters, cold fronts' },
      {
        p: `Winter here is short, but cold fronts can drop temperatures quickly. December and January lows average in the low 40s at Easterwood, so heat pumps and space heaters come on. Heated air dries a small apartment fast. Keep heaters pointed away from where you sit or sleep, and give your eyes a break if they start to sting. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the rest.`,
      },
      { h: 'Quell’s Drug Facts panel' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its actives are {actives}. The panel gives its Uses as: {uses}. Directions: {directions}. It also says: {doNotUse}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car parked in a College Station lot in August gets much hotter than that range, so carry the bottle in your bag. You can read the full label on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to College Station' },
      {
        p: `Quell ships from Brentwood, Tennessee, to College Station, Bryan, Navasota and the rest of the US, including apartment complexes and campus addresses that accept packages. Check out as a guest. Shipping is {shipping}, and {freeBottles} bottles or more ship free. You’ll get tracking by email, but delivery dates aren’t promised, so order before you run out. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. Buyers must be 18 or older. Visit the [College Station page](/eye-drops/college-station-tx) or the [Texas page](/eye-drops/state/texas), or [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness from AC and long study nights is common. Pain, changes in vision, or irritation that keeps going are not something to push through. The label says: {stopUse} An eye doctor can examine your eyes and tell you what to do next. [Eye symptoms that need a doctor, not a drop](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'How hot is College Station in August?',
        a: `NOAA’s 1991–2020 normals give Easterwood Field an August high of 96.6°F, the hottest month. July averages 95.4°F and September still 91.2°F.`,
      },
      {
        q: 'What is the driest month in College Station, TX?',
        a: `July, with 1.98 inches of rain in NOAA’s normals for Easterwood Field. October is the wettest month at 4.93 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in my dorm room?',
        a: `Cooled or heated air holds little moisture, and dorm vents often blow across a desk or bed. Redirect the vent, take breaks from screens to blink fully, and consider a small humidifier.`,
      },
      {
        q: 'Can college students order Quell to a campus address?',
        a: `Yes, if the address accepts packages and you’re 18 or older. Quell ships from Brentwood, Tennessee, for {shipping}, or free on orders of {freeBottles} bottles or more.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-st-petersburg-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID SPG, ST PETERSBURG ALBERT WHITTED AP, FL, elev 4 ft
   *   (Jan max 69.0 F, min 55.3 F; Feb min 57.9; Dec min 58.7; Jul max 89.6,
   *   Aug max 89.8, min 78.2; precip Jun 6.79, Jul 7.49, Aug 8.39 wettest,
   *   Sep 6.66, Nov 1.46 driest, Apr 1.93, Feb 2.02, Oct 2.16; monthly
   *   precip sums to 46.65 in; Jun-Sep sum 29.33 in; snowfall missing, not used)
   * Tampa's guide (dry-eye-relief-tampa-fl) uses Tampa International's
   * humidity and degree days; this one uses the St. Petersburg station.
   * No relhum23 or wndspd23 row for this station: no humidity or wind
   * normals used.
   */
  {
    slug: 'dry-eye-relief-st-petersburg-fl',
    title: 'Dry eye relief in St. Petersburg, Florida',
    description:
      'Most of St. Pete’s rain falls June through September; November averages under 1.5 inches. NOAA’s numbers and dry eye relief for the Pinellas peninsula.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in St. Petersburg is a matter of season and air conditioning. NOAA’s normals for Albert Whitted Airport show about 29 of the year’s 47 inches of rain falling June through September, while November averages just 1.46 inches. Cooled indoor air dries eyes year-round, and breezy dry-season days on the water add to it. Use sunglasses outdoors, aim vents away from your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'St. Pete’s weather in NOAA’s numbers' },
      {
        p: `Albert Whitted Airport sits on the downtown waterfront, just a few feet above Tampa Bay. NOAA’s 1991–2020 climate normals for that station, published through the National Weather Service’s NOWData, describe a city surrounded by water on three sides:`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 46.7 inches. August is the wettest month at 8.39 inches, July 7.49, June 6.79 and September 6.66.`,
          `November is the driest month at 1.46 inches, with April at 1.93 and February at 2.02.`,
          `August’s normal high is 89.8°F and its normal low 78.2°F, so summer nights stay warm.`,
          `January is the coolest month, averaging a high of 69.0°F and a low of 55.3°F.`,
        ],
      },
      {
        p: `Those four wet months bring roughly 29 inches, close to two-thirds of the year’s total. The other eight months are much drier, and that stretch, from October into May, is the season of beach days, outdoor festivals and long afternoons on the water.`,
      },
      { h: 'The dry season, October to May' },
      {
        p: `Once the summer storms end, St. Pete settles into months of sun and much less rain. Breezes off the Gulf and the bay feel pleasant, but moving air carries moisture off the eye’s surface faster, and glare off the water makes people squint and blink less fully. A day at Fort De Soto, a ride across the Sunshine Skyway with the windows down, or a long walk on the Pier can leave eyes gritty by sunset.`,
      },
      {
        list: [
          `Wear wraparound sunglasses at the beach and on the water; they block breeze and reflected light.`,
          `Rinse salt spray and sunscreen off your face before it runs toward your eyes.`,
          `Sit with your back to the wind on a boat or a beach chair.`,
          `Rest your eyes in the shade for a few minutes every hour or so.`,
        ],
      },
      { h: 'Air conditioning, nearly year-round' },
      {
        p: `With summer highs near 90°F and lows staying in the upper 70s, air conditioning in St. Pete runs most of the year, sometimes even on mild winter afternoons. Condos along the waterfront, offices downtown and cars on I-275 all blow cooled, dry air, often right at your face. That’s why eyes can feel dry in a city where the outdoor air feels heavy most of the year.`,
      },
      {
        list: [
          `Check where the vents point in your bedroom and living room, and redirect them away from your face.`,
          `In the car, aim the air at your chest and keep the fan speed moderate.`,
          `A small humidifier in the bedroom can help in a heavily cooled room.`,
          `Bring a light layer and sunglasses for the walk from a cold building into bright sun.`,
        ],
      },
      { h: 'Pinellas Trail rides and race weekend' },
      {
        p: `The Pinellas Trail runs from downtown St. Pete up the peninsula, and many people ride or skate it daily. Riding creates its own wind, which dries eyes faster. In March, the Grand Prix of St. Petersburg runs on downtown streets around the Albert Whitted area, and crowds spend long days in sun and breeze. For riders, [dry eyes when cycling](/guides/dry-eyes-when-cycling) covers eyewear and when to pull over.`,
      },
      { h: 'Screens, museums and retirement routines' },
      {
        p: `St. Pete has a strong arts scene, including the Dalí Museum and the galleries along Central Avenue, but it also has plenty of office workers, remote workers and retirees who read or watch screens for hours. Focused screen time tends to cut how often you blink, and blinking spreads tears over the eye. Looking away every so often and finishing each blink helps. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'Quell’s label in plain view' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The Drug Facts panel lists its Uses as: {uses}. The directions are: {directions}.`,
      },
      {
        p: `In Florida, the storage line matters: {storage}. A beach bag in the sun or a car on a summer afternoon can go well past that upper limit, so keep the bottle in a cooler spot or take it inside with you. The panel also says: {tip}. The whole label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in St. Petersburg' },
      {
        p: `Quell ships from Brentwood, Tennessee, to St. Petersburg, Gulfport, Pinellas Park, St. Pete Beach and every other US address, including condos with a front desk. Checkout works as a guest. Shipping costs {shipping}, and orders of {freeThreshold} or more ship free, which {freeBottles} bottles reach. Tracking comes by email; delivery dates aren’t promised, so leave some room before you run out. Sealed bottles can be refunded within {returnDays} days of delivery without being sent back. Find more on the [St. Petersburg page](/eye-drops/st-petersburg-fl) and the [Florida page](/eye-drops/state/florida), or [order now](/#buy). Across the bay? Our [Tampa guide](/guides/dry-eye-relief-tampa-fl) covers that side.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Dryness from wind, sun and air conditioning is common. Pain, changes in vision, or irritation that won’t let up are different. The label says: {stopUse} An eye doctor can find the cause. [Should I see a doctor or try eye drops first?](/guides/should-i-see-a-doctor-or-try-eye-drops-first) can help you decide when it’s time.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainy season in St. Petersburg, FL?',
        a: `June through September. NOAA’s 1991–2020 normals for Albert Whitted Airport give those four months about 29 of the year’s roughly 47 inches, with August the wettest at 8.39.`,
      },
      {
        q: 'What is the driest month in St. Petersburg?',
        a: `November, at 1.46 inches in NOAA’s normals for Albert Whitted Airport. April and February are also dry, at 1.93 and 2.02 inches.`,
      },
      {
        q: 'Why do my eyes get dry at the beach?',
        a: `Wind off the water, bright glare and squinting all speed up evaporation from the tear film. Wraparound sunglasses, shade breaks and keeping sunscreen away from your eyes help.`,
      },
      {
        q: 'Can Quell be delivered to a condo in St. Pete?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including condos. Shipping is {shipping}, and orders of {freeThreshold} or more ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-tacoma-wa:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID TIW, TACOMA NARROWS AP, WA, elev 290 ft
   *   (Jan max 46.3 F, min 36.4 F; Dec max 45.5, min 36.2; Jul max 75.5,
   *   Aug 75.6; precip Nov 7.18 in wettest, Jan 6.06, Dec 5.81, Jun 1.36,
   *   Jul 0.68 driest, Aug 0.86; monthly precip sums to 42.02 in; snowfall
   *   missing, not used)
   * Seattle's guide (dry-eye-relief-seattle-wa) uses Sea-Tac; this one uses
   * Tacoma Narrows Airport, across the Narrows west of the city.
   * No relhum23 or wndspd23 row for this station: no humidity or wind
   * normals used.
   */
  {
    slug: 'dry-eye-relief-tacoma-wa',
    title: 'Dry eye relief in Tacoma, Washington',
    description:
      'Tacoma gets over 7 inches of rain in November but under an inch in July. NOAA’s Tacoma Narrows numbers and dry eye relief for the South Sound, all year.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Tacoma depends on the season. NOAA’s normals for Tacoma Narrows Airport show 7.18 inches of rain in November but only 0.68 in July, so summer is surprisingly dry, while the damp, cool months keep heaters running from fall into spring. Shield your eyes from wind on the water, aim heat away from your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Tacoma Narrows weather in NOAA’s numbers' },
      {
        p: `The NOAA station this guide uses is Tacoma Narrows Airport, just across the Narrows Bridge on the Gig Harbor side, at about 290 feet. Its 1991–2020 climate normals, published through the National Weather Service’s NOWData, show a mild, wet winter and a short, dry summer:`,
      },
      {
        list: [
          `November is the wettest month at 7.18 inches, followed by January at 6.06 and December at 5.81.`,
          `July is the driest at 0.68 inches, with August at 0.86 and June at 1.36.`,
          `The monthly precipitation normals add up to about 42 inches a year.`,
          `January’s normal high is 46.3°F and its low 36.4°F. July and August both average highs near 75.5°F.`,
        ],
      },
      {
        p: `In other words, a normal July gets less than a tenth of November’s rain. The rain that defines Tacoma’s reputation falls mostly from October through March; summer is a different climate altogether.`,
      },
      { h: 'Why a rainy city can still dry your eyes' },
      {
        p: `With winter highs in the mid-40s and lows in the mid-30s, heat runs in most Tacoma homes for months. Cool, damp outdoor air warmed indoors loses relative humidity, and baseboard heaters, wall units and forced air in older homes from the North End to the Eastside all dry the air in a room. People often blame the gray weather for tired eyes, but the drier air is indoors.`,
      },
      {
        list: [
          `Use a humidifier in the bedroom, and clean it on schedule.`,
          `Keep wall heaters and space heaters pointed away from the couch and the bed.`,
          `Turn the heat down a little at night.`,
          `Defrost the car windshield with the vents aimed at the glass, not at you.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers setup and upkeep.`,
      },
      { h: 'The dry South Sound summer' },
      {
        p: `Then July arrives with barely two-thirds of an inch of rain on average. Long, bright days pull people outside: Five Mile Drive at Point Defiance, Ruston Way’s waterfront, a ferry to Vashon or a day trip toward Mount Rainier. Breeze off the water and long hours in the sun dry the eye’s surface faster. Wraparound sunglasses help block both, and sitting with your back to the wind on a ferry deck makes a difference.`,
      },
      {
        list: [
          `Pack sunglasses even on days that start gray; summer mornings often clear by afternoon.`,
          `On the water, keep spray and wind off your face as much as you can.`,
          `For a hike near Rainier, start early and take breaks in shade.`,
        ],
      },
      { h: 'The port, the base and long shifts' },
      {
        p: `Tacoma works hard. The Port of Tacoma handles cargo on the tideflats, Joint Base Lewis-McChord sits just south, and the city’s hospitals and warehouses keep long shifts going. Port work means wind off Commencement Bay and diesel exhaust; base and warehouse jobs often mean big, ventilated buildings and hours outdoors in any weather. Wear the eye protection your job provides, and step out of direct airflow during breaks.`,
      },
      { h: 'Screens, campuses and the Tacoma Dome' },
      {
        p: `Students at the University of Puget Sound, UW Tacoma and Pacific Lutheran spend long hours at screens, and so do office and remote workers across the South Sound. Screen focus tends to slow your blinking, and blinking spreads tears across the eye. Look away now and then and finish every blink. A concert or game at the Tacoma Dome adds bright lights and hours of focused watching. [Screens and your tear film](/guides/screens-and-your-tear-film) goes deeper.`,
      },
      { h: 'Quell’s label, section by section' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The panel lists its Uses as: {uses}.`,
      },
      {
        list: [
          `Directions: {directions}.`,
          `Do not use: {doNotUse}.`,
          `When using: {tip}.`,
          `Other information: {storage}.`,
        ],
      },
      {
        p: `A car left at a Tacoma trailhead on a winter night can drop below that storage range, so keep the bottle in a pocket. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Tacoma' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Tacoma, University Place, Lakewood, Gig Harbor and Puyallup, and everywhere else in the US. No account is required. Shipping is {shipping}, or free once an order reaches {freeThreshold}, which is {freeBottles} bottles. Tracking arrives by email, but there’s no promised delivery date, so reorder with time to spare. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to ship them back. See the [Tacoma page](/eye-drops/tacoma-wa) and the [Washington page](/eye-drops/state/washington), or [order on the home page](/#buy). If you’re north of the county line, our [Seattle guide](/guides/dry-eye-relief-seattle-wa) covers Sea-Tac’s numbers.`,
      },
      { h: 'When it’s time for an eye doctor' },
      {
        p: `If your eyes hurt, your vision changes, or irritation won’t ease, a lubricating drop isn’t the answer. The label says: {stopUse} An eye doctor can examine your eyes and find what’s causing it. Our [self-check](/self-check) can help you organize what you’ve noticed; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Tacoma, WA get a year?',
        a: `About 42 inches, adding up NOAA’s 1991–2020 monthly normals for Tacoma Narrows Airport. November is the wettest month at 7.18 inches, and July the driest at 0.68.`,
      },
      {
        q: 'Is Tacoma dry in the summer?',
        a: `Yes, by rainfall. NOAA’s normals give Tacoma Narrows Airport just 0.68 inches in July and 0.86 in August, with highs around 75°F.`,
      },
      {
        q: 'Why are my eyes dry in Tacoma in winter?',
        a: `Heated indoor air. Outdoor air is damp, but warming it inside lowers its relative humidity. A bedroom humidifier and keeping heaters pointed away from your face help.`,
      },
      {
        q: 'Does Quell ship to Tacoma and Pierce County?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Tacoma and the rest of Pierce County for {shipping}, or free on {freeBottles} bottles or more. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for fsa-open-enrollment-eye-drops:
   * - IRS Publication 969 (2025), https://www.irs.gov/publications/p969,
   *   "Flexible Spending Arrangements": election set at the beginning of the
   *   plan year, changed or revoked "only if specifically allowed by law and
   *   the plan"; maximum reimbursement available "at any time during the
   *   coverage period"; written statement from an independent third party;
   *   no advance reimbursement of future or projected expenses; OTC medicine
   *   "(whether or not prescribed)" is a covered expense; use-it-or-lose-it,
   *   grace period up to 2 1/2 months or a carryover, not both.
   * - FSAFEDS, https://www.fsafeds.gov/explore/hcfsa and
   *   https://www.fsafeds.gov/support/faq/all/500: Open Season for 2027
   *   enrollments Nov 9 - Dec 14, 2026; enroll or renew each Open Season;
   *   carryover when you re-enroll; total annual election available on day one.
   * - Site guide how-long-does-a-bottle-of-eye-drops-last: "roughly a month"
   *   at the labeled dose, "a couple of hundred drops".
   */
  {
    slug: 'fsa-open-enrollment-eye-drops',
    title: 'How much to put in an FSA for eye drops',
    description:
      'Count bottles, not guesses: how to estimate a year of eye drops for your FSA election from the label’s directions, and the IRS rules to know first.',
    category: 'ordering',
    addedOn: '2026-11-18',
    body: [
      {
        p: `To decide how much to put in an FSA for eye drops, count bottles first. Work out how many drops you use a day, how long one bottle lasts you, and how many months a year you use drops at all. Multiply to a yearly bottle count, price it at today’s price plus shipping, and add it to your other planned expenses. FSA money is generally use-it-or-lose-it, so plan for what you’ll really use.`,
      },
      { h: 'Why the number matters at open enrollment' },
      {
        p: `Open enrollment is when you choose your health FSA amount for the coming plan year. IRS Publication 969 says you designate how much to contribute at the beginning of the plan year, and that you can change or revoke the election only if specifically allowed by law and the plan. In practice, the number you pick now is usually the number you live with for twelve months.`,
      },
      {
        p: `Federal employees, for example, use FSAFEDS, whose Open Season for 2027 enrollments runs from November 9 to December 14, 2026. FSAFEDS also says you enroll or renew during Open Season each year, so last year’s election doesn’t simply roll forward. Check your own employer’s dates and whether your plan works the same way.`,
      },
      { h: 'Step 1: start with the label’s directions' },
      {
        p: `The directions on the Drug Facts panel are the starting point for any estimate. Quell’s read: {directions}. Used that way in both eyes, that’s six drops a day. If you use drops only on some days, or only in certain months, your number will be lower, but plan from the label rather than from a hope that you’ll need less.`,
      },
      { h: 'Step 2: how long one bottle lasts you' },
      {
        p: `A bottle of Quell holds {size}. Drop size varies with the bottle and how firmly you squeeze, so the number of drops in a bottle isn’t fixed. Our guide to [how long a bottle of eye drops lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) works out roughly a month at the labeled dose. If you’ve used Quell before, your own record beats any estimate: note the date you open a bottle and the date it runs out.`,
      },
      { h: 'Step 3: turn that into bottles per year' },
      {
        list: [
          `If you use drops at the labeled dose every month, and a bottle lasts you about a month, plan on about 12 bottles.`,
          `If your eyes only bother you in heating season, count those months. Five months of use is about five bottles.`,
          `If a bottle lasts you longer than a month because you use it less often, divide 12 by the number of months one bottle lasts.`,
          `Round up by one bottle to cover a dropped or misplaced bottle, but no more than that.`,
        ],
      },
      {
        p: `A worked example: someone who used drops from November through March last winter, about one bottle a month, would plan five bottles, plus one spare, for six.`,
      },
      { h: 'Step 4: turn bottles into dollars' },
      {
        p: `Look up the current price on the [home page](/#buy) and multiply by your bottle count. Then add shipping. Each order costs {shipping} to ship, unless it reaches {freeThreshold}, which {freeBottles} bottles do, and then it ships free. Ordering {freeBottles} bottles at a time instead of one cuts the shipping you need to budget for. There are no promo codes or subscriptions to factor in.`,
      },
      {
        p: `Prices can change during a year, so leave a small margin. Don’t pad the number heavily; a large election you don’t spend is the classic FSA mistake.`,
      },
      { h: 'Do eye drops count as an FSA expense?' },
      {
        p: `Publication 969 says expenses for over-the-counter medicine, whether or not prescribed, are considered medical care and a covered expense. Quell is an over-the-counter drug. The same publication says qualified medical expenses are those specified in the plan, so your plan’s own list is the final word. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains the history.`,
      },
      { h: 'Use it or lose it, and the two exceptions' },
      {
        p: `Publication 969 calls FSAs generally use-it-or-lose-it plans: money left at the end of the plan year can’t generally carry over. A plan may offer one of two exceptions, but not both. One is a grace period of up to two and a half months after the plan year ends; the other is a carryover of a limited amount of unused money into the next year. Our guide to [FSA carryover and grace periods](/guides/fsa-carryover-and-grace-period-for-eye-drops) walks through each.`,
      },
      { h: 'Rules that shape how you spend it' },
      {
        list: [
          `The full amount is available early. Publication 969 says you must be able to receive your full annual election at any time during the coverage period, regardless of how much has been deducted from your pay so far. FSAFEDS puts it as day one of the plan year.`,
          `No advance reimbursement. The same publication says an FSA can’t reimburse future or projected expenses, so you claim bottles as you buy them.`,
          `Documentation. Plans need a written record from an independent third party showing the expense and amount. Your order confirmation email is that record for a Quell order; see [how to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops).`,
        ],
      },
      { h: 'What could change your estimate' },
      {
        p: `Your eye doctor may suggest a different routine, and their advice comes first. The label also sets a limit: {stopUse} If that happens, you may not use as many bottles as planned, which is another reason to estimate modestly in your first year with a new product. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back, but how a refund is handled with your FSA is up to your plan administrator.`,
      },
    ],
    faq: [
      {
        q: 'How much should I put in my FSA for eye drops?',
        a: `Estimate bottles first: how long one bottle lasts you, times the months you use drops, plus one spare. Multiply by the current price and add shipping. At the labeled dose, a bottle of Quell lasts roughly a month.`,
      },
      {
        q: 'Can I change my FSA amount in the middle of the year?',
        a: `Only if the law and your plan allow it. IRS Publication 969 says you can change or revoke your election only if specifically allowed by law and the plan, so the amount you choose at open enrollment usually stands.`,
      },
      {
        q: 'Is my whole FSA election available at the start of the year?',
        a: `Generally, yes. IRS Publication 969 says you must be able to receive the full amount you elected at any time during the coverage period, regardless of how much you’ve contributed so far.`,
      },
      {
        q: 'Do I have to re-enroll in my FSA every year?',
        a: `Often, yes. FSAFEDS, the federal employees’ program, says you enroll or renew during Open Season each year. Private employers set their own rules, so check with your plan administrator.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for fsa-for-eye-drops-bought-last-year:
   * - IRS Publication 969 (2025), https://www.irs.gov/publications/p969:
   *   health FSA reimburses expenses "incurred during the period of coverage";
   *   written statement from an independent third party; statement that the
   *   expense hasn't been paid or reimbursed under other coverage; grace
   *   period up to 2 1/2 months (expenses incurred in it paid from prior
   *   year's leftover); carryover pays expenses "you incur in the following
   *   plan year"; HSA: expenses incurred before you establish the HSA aren't
   *   qualified.
   * - IRS Publication 502 (2025), https://www.irs.gov/publications/p502:
   *   "Except for insulin, you can't include in medical expenses amounts you
   *   pay for a drug that isn't prescribed."
   * - FSAFEDS key dates, https://www.fsafeds.gov/support/faq/all/500: last day
   *   to incur 2027 HCFSA expenses Dec 31, 2027; last day to submit claims for
   *   the 2027 benefit period April 30, 2028.
   */
  {
    slug: 'fsa-for-eye-drops-bought-last-year',
    title: 'Can you use an FSA for eye drops bought last year?',
    description:
      'Only from last year’s FSA, and only if your plan still takes claims for that year. What IRS Publication 969 says, and how claim deadlines work.',
    category: 'ordering',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Usually only from last year’s FSA, and only while your plan still accepts claims for that year. IRS Publication 969 says a health FSA reimburses expenses incurred during the period of coverage, so a bottle bought last plan year belongs to last year’s account, not this year’s. Many plans allow a few months after the year ends to file; FSAFEDS, for example, gives until April 30. Once that window closes, the claim is generally gone.`,
      },
      { h: 'What the IRS rule says' },
      {
        p: `Publication 969 states that distributions from a health FSA must generally be paid only to reimburse qualified medical expenses you incurred during the period of coverage. That ties every purchase to a specific plan year. This year’s election covers this year’s purchases, and last year’s election covered last year’s.`,
      },
      {
        p: `The same publication counts over-the-counter medicine, whether or not prescribed, as a covered expense, so an OTC lubricating drop like Quell qualifies in principle. The question with an old receipt isn’t whether the drops count. It’s whether last year’s account can still pay.`,
      },
      { h: 'Run-out periods: the window after the year ends' },
      {
        p: `Many plans give you time after the plan year ends to submit claims for expenses from that year. This is often called a run-out period. It’s a plan feature, so its length is in your plan documents, not in the tax code.`,
      },
      {
        p: `FSAFEDS shows how it works. For its 2027 benefit period, the last day to incur health care FSA expenses is December 31, 2027, and the last day to submit claims for that year is April 30, 2028. A bottle bought in December 2027 could be claimed against the 2027 account until that April deadline, and not after.`,
      },
      {
        list: [
          `Find your plan year. Many run January through December, but some follow a fiscal year, such as July through June.`,
          `Find the claims deadline for the year of your purchase. Your administrator’s website or summary plan description lists it.`,
          `Check the balance left in that year’s account. A claim can only be paid from money that was there.`,
          `File with an itemized receipt showing the date, the product and the amount.`,
        ],
      },
      { h: 'Grace periods and carryovers are different' },
      {
        p: `People sometimes confuse a run-out period with the two features that let FSA money cross into the next year. Publication 969 describes them this way:`,
      },
      {
        list: [
          `A grace period of up to two and a half months after the plan year ends. Expenses you incur during it can be paid from last year’s leftover money. It runs forward: it lets old money pay for new purchases, not new money pay for old ones.`,
          `A carryover of a limited amount of unused money into the next plan year, for expenses you incur in that following year. Again, it moves money forward, not purchases backward.`,
        ],
      },
      {
        p: `A plan can offer one or the other, not both. [FSA carryover and grace period for eye drops](/guides/fsa-carryover-and-grace-period-for-eye-drops) covers the details.`,
      },
      { h: 'Which date counts for your order?' },
      {
        p: `If you ordered close to the end of a plan year, whether the purchase falls in one year or the next can matter. Your plan administrator decides which date it uses. Your Quell order confirmation email shows the order date and the itemized total; you can also look up an order on our [order tracking page](/orders) with your order number and the email you used.`,
      },
      { h: 'What you’ll need to file a late claim' },
      {
        p: `Publication 969 says you must give the FSA a written statement from an independent third party showing that the expense was incurred and its amount, plus a statement that it hasn’t been paid or reimbursed by any other health coverage. For an online order, that usually means:`,
      },
      {
        list: [
          `The order confirmation email, showing the date, the product name and the amount paid.`,
          `The plan’s claim form or online upload, filled in for the right plan year.`,
          `Your own confirmation that you didn’t already claim the purchase from an HSA or another plan.`,
        ],
      },
      {
        p: `Our [FSA claim guide](/guides/how-to-file-an-fsa-claim-for-eye-drops) walks through each step.`,
      },
      { h: 'If the window has closed' },
      {
        p: `Once a plan’s deadline passes, a late claim is generally denied, and this year’s FSA money can’t step in for last year’s purchase. An itemized tax deduction isn’t much of a fallback either: IRS Publication 502 says that, except for insulin, you can’t include amounts you pay for a drug that isn’t prescribed in medical expenses. [Are eye drops tax deductible?](/guides/are-eye-drops-tax-deductible) explains more.`,
      },
      { h: 'HSAs work differently' },
      {
        p: `A health savings account has no use-it-or-lose-it deadline, but Publication 969 says expenses incurred before you establish the HSA aren’t qualified medical expenses. If your HSA existed when you bought the drops, you can generally reimburse yourself later. [Can HSA pay for eye drops bought before it opened?](/guides/hsa-for-eye-drops-bought-before-your-hsa-opened) covers that case.`,
      },
      { h: 'Planning so it doesn’t happen again' },
      {
        p: `File each claim when you order rather than saving receipts for later. If you’re picking an amount for next year, [how much to put in an FSA for eye drops](/guides/fsa-open-enrollment-eye-drops) shows how to estimate bottles from the label’s directions, which read: {directions}.`,
      },
    ],
    faq: [
      {
        q: 'Can I use this year’s FSA for last year’s expenses?',
        a: `Generally no. IRS Publication 969 says a health FSA reimburses expenses incurred during the period of coverage, so last year’s purchase belongs to last year’s account.`,
      },
      {
        q: 'What is an FSA run-out period?',
        a: `It’s time after the plan year ends to submit claims for that year’s expenses. Its length is set by your plan; FSAFEDS, for example, gives until April 30 of the following year.`,
      },
      {
        q: 'What happens if I miss the FSA claim deadline?',
        a: `The claim is generally denied, and the purchase can’t move to the next year’s account. Check your plan’s documents or call the administrator to confirm the deadline for your plan year.`,
      },
      {
        q: 'Can I deduct eye drops I couldn’t claim on my FSA?',
        a: `Usually not. IRS Publication 502 says that, except for insulin, you can’t include amounts paid for a drug that isn’t prescribed in your medical expense deduction.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-two-weeks',
    title: 'Dry eyes for two weeks: what should you do?',
    description:
      'Two weeks is well past the 72 hours on a lubricating drop’s label. When to book an eye doctor, what to write down first, and the signs that can’t wait.',
    category: 'choosing',
    addedOn: '2026-11-18',
    body: [
      {
        p: `If your eyes have felt dry for two weeks, book an eye doctor rather than waiting it out. Quell’s label says to stop and ask a doctor if the condition worsens or persists for 72 hours, and two weeks is far past three days. Before the visit, write down when it started, when it’s worse and what you’ve tried. Pain or any change in your vision shouldn’t wait for a routine appointment.`,
      },
      { h: 'What the label says about time' },
      {
        p: `Lubricating drops are meant for short-term dryness and minor irritation. The stop-use section of Quell’s Drug Facts panel reads: {stopUse}`,
      },
      {
        p: `That sentence sets two kinds of limit. Some signs, such as pain or a change in vision, are reasons to stop at once. The others come with a clock: if the problem is still there after 72 hours of using the product as directed, or it’s getting worse, the label’s answer is a doctor, not more drops. Our guide on [why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) explains how to count it.`,
      },
      { h: 'Dry eyes for days' },
      {
        p: `A day or two of dry, scratchy eyes after a long flight, a windy hike or a weekend of screen time is common. It usually tracks something you can name. If you’ve used a lubricating drop as its label directs and the dryness is easing, keep an eye on it and fix what you can: vents aimed at your face, a dry bedroom, long stretches without looking up from a screen.`,
      },
      { h: 'Dry eyes for a week' },
      {
        p: `By a week, you’re past the point the label sets. That doesn’t mean something serious is going on; it means the question has moved from what to buy to what’s causing it, and only an exam can answer that. Call an eye doctor’s office, describe how long it’s been, and ask how soon they can see you. Many offices will ask a few questions on the phone to decide how quickly you need to come in.`,
      },
      { h: 'Dry eyes for 2 weeks' },
      {
        p: `Two weeks of dryness is a clear reason for an appointment, even if it’s mild. Keep using only what the label covers, and don’t increase the dose on your own to push through; the directions are {directions}, and the label doesn’t give a higher amount. If anything on the stop-use list shows up while you wait, call the office back or get seen sooner.`,
      },
      {
        p: `Not sure whether a routine visit or an urgent one fits? [Eye symptoms that need a doctor, not a drop](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs, and [should I see a doctor or try eye drops first?](/guides/should-i-see-a-doctor-or-try-eye-drops-first) helps sort out the order.`,
      },
      { h: 'Dry eyes for months' },
      {
        p: `Dryness that keeps coming back for months, or that never fully goes away, also belongs with an eye doctor, even if each episode seems minor. A pattern over months is useful information: maybe it follows heating season, a new job, longer screen hours or a change in medicines. Bring that history to the appointment rather than trying to sort it out alone.`,
      },
      { h: 'What to write down before the appointment' },
      {
        list: [
          `When it started, and whether it came on suddenly or built up.`,
          `One eye or both.`,
          `When it’s worse: morning, evening, at a screen, outdoors, in the car, at work.`,
          `What it feels like: dry, gritty, burning, watery, tired, sensitive to light.`,
          `Any change in vision, even brief blurring that clears when you blink.`,
          `Everything you’ve tried, with the product name and how often you used it.`,
          `Contact lens use, recent eye procedures and any new prescription or OTC medicines.`,
          `Changes around you: a new office, a new heater, a move, travel.`,
        ],
      },
      {
        p: `Bring the bottles of anything you’ve been putting in your eyes, or photos of their Drug Facts panels. [Questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) can round out your list.`,
      },
      { h: 'Using the self-check to organize your notes' },
      {
        p: `Our [self-check](/self-check) walks through common questions about dryness, timing and warning signs. It’s not a diagnosis, and it can’t tell you what’s causing your symptoms. What it can do is help you put your observations in order before a call or a visit.`,
      },
      { h: 'While you wait for the visit' },
      {
        p: `Waiting for an appointment doesn’t mean doing nothing. These changes don’t replace an exam, but they reduce the things that dry eyes:`,
      },
      {
        list: [
          `Turn heating and cooling vents away from your face, at home and in the car.`,
          `Run a cleaned humidifier in the bedroom.`,
          `Take regular breaks from screens and make each blink a full one.`,
          `Wear wraparound sunglasses outdoors on windy days.`,
          `Don’t rub your eyes, however tempting.`,
        ],
      },
      {
        p: `If you use Quell, follow its label only. Its uses are: {uses}. It doesn’t give directions for contact lenses, for children or for use with other eye drops, so ask your eye doctor or pharmacist about those.`,
      },
      { h: 'Signs that can’t wait two weeks' },
      {
        p: `Eye pain, a sudden change in vision, an injury, a chemical splash or something stuck in the eye all need prompt care, not a lubricating drop. If any of those happen, contact an eye doctor right away or go to urgent care or an emergency room. [When to stop using eye drops and see a doctor](/guides/when-to-stop-using-eye-drops) covers the stop-use section line by line.`,
      },
    ],
    faq: [
      {
        q: 'Is it normal to have dry eyes for two weeks?',
        a: `It’s common, but it’s long enough to see an eye doctor. Quell’s label says to stop and ask a doctor if the condition persists for 72 hours, and two weeks is well beyond that.`,
      },
      {
        q: 'How long is too long for dry eyes?',
        a: `For a lubricating drop like Quell, the label’s limit is 72 hours: if the problem worsens or persists that long, stop and ask a doctor. Pain or vision changes need a doctor right away.`,
      },
      {
        q: 'Should I see a doctor if my eyes have been dry for a week?',
        a: `Yes. A week is past the 72 hours on the label. An exam is the way to find out what’s behind it, and the office can tell you how soon you need to come in.`,
      },
      {
        q: 'What should I tell my eye doctor about dry eyes?',
        a: `When it started, one eye or both, when it’s worse, what it feels like, any change in vision, and every product you’ve tried and how often. Bring the bottles if you can.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for eye-drops-vs-eye-gel:
   * - 21 CFR part 349 via eCFR versioner API,
   *   https://www.ecfr.gov/api/versioner/v1/full/2026-01-01/title-21.xml?part=349
   *   (349.3(d) demulcent: "usually a water-soluble polymer", applied to
   *   "protect and lubricate mucous membrane surfaces and relieve dryness and
   *   irritation"; 349.3(e) emollient: "usually a fat or oil"; 349.12 lists
   *   cellulose derivatives (carboxymethylcellulose sodium, hydroxyethyl
   *   cellulose, hypromellose, methylcellulose), dextran 70, gelatin, liquid
   *   polyols (glycerin, polyethylene glycol 300 and 400, polysorbate 80,
   *   propylene glycol), polyvinyl alcohol, povidone. The part sorts actives
   *   by function and has no separate "gel" category. No concentrations used.)
   * - TSA liquids rule (3.4 oz / 100 mL containers; medically necessary
   *   liquids allowed in larger amounts when declared) as already stated on
   *   the site in eye-drops-vs-eye-ointment.
   * FDA references removed 2026-11-18 at Phillip's request (the part 349
   * section and its definitions dropped; common ingredient names kept).
   */
  {
    slug: 'eye-drops-vs-eye-gel',
    title: 'Eye drops vs. eye gel: what’s the difference?',
    description:
      'Eye gels are thicker lubricants than drops, often used when blurring won’t matter. How they compare, how to read the label, and what to ask a pharmacist.',
    category: 'choosing',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Eye drops and eye gels are both lubricants for dry eyes; the difference is thickness. Drops are thin liquids that spread fast and usually blur vision only for a moment. Gels are thickened to sit on the eye longer, so they tend to blur vision longer too, which is why many people save them for bedtime or quiet hours. Both are sold over the counter, often in the same aisle. Quell is a drop.`,
      },
      { h: 'The short version' },
      {
        list: [
          `Texture: drops pour like water or a thin emulsion; gels are thicker and slower to spread.`,
          `Vision: drops blur briefly if at all; gels commonly blur for longer after you put them in.`,
          `Timing: drops fit the working day; gels suit evenings, reading breaks or bedtime.`,
          `Feel: drops feel light; gels can feel heavier on the lids and lashes.`,
          `Dispensing: both usually come in bottles or single-use containers; a gel bottle may be slower to release a drop.`,
        ],
      },
      {
        p: `A gel sits between a drop and an ointment. Ointments are thicker still, and greasy; our guide to [eye drops vs. eye ointment](/guides/eye-drops-vs-eye-ointment) covers that comparison.`,
      },
      { h: 'What makes a gel a gel?' },
      {
        p: `Gels get their body from ingredients that thicken water. Many of the lubricating ingredients in OTC eye products are water-soluble polymers, which can be used at different strengths. More polymer, or a heavier one, makes a thicker product. The manufacturer then names the product by its form: “lubricant eye drops” or “lubricant eye gel.” The name on the front of the box is the quickest clue.`,
      },
      { h: 'The same ingredients, a different thickness' },
      {
        p: `Look at the Active ingredients line on a gel and a drop side by side and you may find the same names. The difference is mostly in how much thickener is in the finished product, not in a separate set of actives. The lubricating ingredients, often called demulcents, that you’re likely to see on either include:`,
      },
      {
        list: [
          `Cellulose-based thickeners such as carboxymethylcellulose sodium and hypromellose.`,
          `Glycerin, polysorbate 80 and propylene glycol.`,
          `Polyvinyl alcohol and povidone.`,
        ],
      },
      {
        p: `Some products also carry an oily ingredient, listed with the purpose “emollient,” such as light mineral oil. Quell has one. Whatever the form, the Purpose column beside each active tells you what that ingredient is there to do.`,
      },
      { h: 'Reading the label to tell them apart' },
      {
        list: [
          `Look at the product name: “gel” or “drops” is usually printed right after “lubricant eye.”`,
          `Read the Active ingredients line in the Drug Facts panel to see which ingredients you’re getting.`,
          `Read the Directions. They tell you how much to use and how often, and they differ between products.`,
          `Check the inactive ingredients if you have a sensitivity to anything.`,
        ],
      },
      {
        p: `Our guide to [what eye drops you can buy without a prescription](/guides/what-eye-drops-can-i-buy-without-a-prescription) covers reading an OTC eye label more generally.`,
      },
      { h: 'Is eye gel better than eye drops?' },
      {
        p: `Neither is better across the board. A gel’s thickness is a trade-off: more time on the eye in exchange for more blurring. Someone who drives, presents or works on detailed tasks may prefer a drop during the day. Someone whose eyes feel worst at night may find a gel easier before bed. Which fits your eyes, and whether you need either, is a question for your eye doctor or pharmacist.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a liquid drop, not a gel. The label describes it this way: {milky}. {appearance} Its active ingredients are {actives}, and it is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. Directions: {directions}. You can see the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Using a gel and a drop together' },
      {
        p: `Quell’s label doesn’t give directions for using it with any other eye product, gels included, and it doesn’t cover contact lenses or children. If you already use a gel, or a doctor has suggested one, ask that doctor or your pharmacist whether and how to combine products. Don’t work out timing or order from general advice.`,
      },
      { h: 'Travel: gels and drops at the airport' },
      {
        p: `For carry-on screening, TSA counts both as liquids, gels or aerosols, which means containers of 3.4 ounces (100 milliliters) or less in your quart-size bag. Medically necessary liquids can go above that limit if you declare them at the checkpoint. A {size} bottle of Quell is well under the limit. [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) has more.`,
      },
      { h: 'When neither is the answer' },
      {
        p: `Gels and drops are for dryness and minor irritation. Pain, a change in vision, an injury or something in the eye need a doctor. The stop-use section on Quell’s label reads: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between eye drops and eye gel?',
        a: `Thickness. Drops are thin liquids that spread quickly and blur only briefly. Gels are thickened to stay on the eye longer and usually blur vision longer, so many people use them at bedtime.`,
      },
      {
        q: 'Does eye gel blur your vision?',
        a: `Usually more than a drop does, because a gel is thicker and spreads more slowly. That’s why gels are often used when sharp vision isn’t needed, such as before sleep.`,
      },
      {
        q: 'Can you use eye gel during the day?',
        a: `Some people do, but the blur can get in the way of driving or detailed work. Follow the gel’s own directions, and ask your eye doctor or pharmacist which form suits your day.`,
      },
      {
        q: 'Is Quell a gel or a drop?',
        a: `A drop. Quell is a milky brown liquid in a {size} bottle, used as its label directs. It isn’t a gel or an ointment.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-get-dry-when-i-focus',
    title: 'Why do my eyes get dry when I focus?',
    description:
      'Concentrating slows blinking, and many blinks you do make are partial, so tears aren’t spread as often. Why focus dries eyes, and what helps.',
    category: 'choosing',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Your eyes get dry when you focus because concentrating slows your blinking, and many of the blinks you do make are only partial. Each full blink spreads a fresh layer of tears across the eye; between blinks, that layer evaporates. Stare at a screen, a page or the road for long enough, especially in heated, cooled or moving air, and the surface dries out. Regular breaks and deliberate full blinks help.`,
      },
      { h: 'What a blink actually does' },
      {
        p: `The front of the eye is covered by the tear film, which has three layers: an oil layer on the outside, a watery layer in the middle and a mucus layer that helps it cling to the eye. Every complete blink smooths a new film over the surface and spreads the oil layer back across the top, where it slows evaporation. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      { h: 'Why do my eyes get dry when I concentrate?' },
      {
        p: `When you concentrate, you blink less. Screens are the familiar example, and they reduce blinking for most people, but the pattern holds for any task that holds your gaze. Partial blinks are part of the problem too: when you’re concentrating, the upper lid often comes only partway down, refreshing the top of the eye but leaving the lower part to dry.`,
      },
      {
        p: `Less blinking means longer gaps between fresh tear layers. In still, humid air, the film holds up reasonably well. In dry or moving air, it thins faster, and by the end of a long stretch of focus you notice it as dryness, grittiness or a tired, burning feeling.`,
      },
      { h: 'Tasks that do it' },
      {
        list: [
          `Screen work and gaming, where the eyes track small, changing details.`,
          `Reading, whether print, an e-reader or a phone. [Dry eyes when reading](/guides/dry-eyes-when-reading) covers that case.`,
          `Driving, especially at night or on long highway stretches.`,
          `Close handwork: sewing, knitting, painting, model building, electronics repair.`,
          `Studying, coding, spreadsheet work and anything with a deadline attached.`,
          `Watching: sports from the stands, a movie in a theater, a long presentation.`,
        ],
      },
      { h: 'Why your surroundings make it worse' },
      {
        p: `Focus slows the blinks; the air decides how fast the film dries between them. Dry, windy, heated or air-conditioned air speeds evaporation. A desk under a ceiling vent, a car with the dash vents on high, or a space heater aimed at your chair all shorten the time a tear film lasts. Raising a screen above eye level matters too, because looking up opens the eyes wider and exposes more of the surface.`,
      },
      { h: 'How to stop your eyes drying out when you focus' },
      {
        list: [
          `Set a reminder to look away every 20 minutes or so, at something across the room, for a few seconds.`,
          `During those breaks, close your eyes gently, pause, and open them. Do it two or three times.`,
          `Practice full blinks: let the upper lid meet the lower one, rather than fluttering.`,
          `Place screens slightly below eye level so you look a little downward.`,
          `Move out of the path of vents and fans, at a desk and in the car.`,
          `Use a cleaned humidifier near where you work for long hours in heated or cooled rooms.`,
          `Break long tasks into chunks, and get up between them.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) has more on desk setup.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `A drop doesn’t replace blinking, but it can help with the dryness that builds up during long tasks. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as: {uses}. The directions say: {directions}. If you use drops, plan them around your breaks rather than in the middle of a task, and keep the bottle clean; the label says: {tip}.`,
      },
      { h: 'When it isn’t only dryness' },
      {
        p: `Tired eyes, headaches or blurred vision during close work can also mean your glasses or contacts don’t suit the distance you work at, or that you need a prescription you don’t have. An eye exam can check. And if focusing brings pain, vision that doesn’t clear when you blink, or irritation that keeps going, stop and see an eye doctor. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I concentrate?',
        a: `Concentrating cuts how often you blink, and many blinks become partial, so the tear film isn’t refreshed as often and evaporates in between. Dry or moving air speeds it up.`,
      },
      {
        q: 'Does staring at something make your eyes dry?',
        a: `It can. Staring slows blinking, and blinking is what spreads fresh tears over the eye. Looking away every so often and blinking fully helps.`,
      },
      {
        q: 'How do I stop my eyes from drying out when I focus?',
        a: `Take a short break every 20 minutes or so, close your eyes gently a few times, make each blink a full one, keep screens slightly below eye level, and move out of the path of vents.`,
      },
      {
        q: 'Can focusing too hard cause blurry vision?',
        a: `A dry eye surface can make vision blur briefly until you blink. Blurring that doesn’t clear, or that comes with pain, needs an eye doctor, and an exam can also check whether you need glasses for close work.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-rv-owners',
    title: 'Christmas gifts for RV owners',
    description:
      'Practical Christmas gifts for RV owners: setup gear, cold-weather comforts, road-trip extras and small things for dry eyes in a heated rig.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `The Christmas gifts RV owners use most solve a problem they hit on every trip: leveling, hookups, storage, cold nights or long drives. Good picks include setup gear like wheel chocks and a water pressure regulator, compact kitchen and camp gear, warm layers for shoulder-season trips, a road atlas, and small comforts for heated, dry RV air, like a compact humidifier or lubricating eye drops.`,
      },
      { h: 'Start with how they use the rig' },
      {
        p: `RV owners are not all alike. A retired couple wintering in the Southwest, a family that takes a travel trailer to the lake four weekends a year, and someone working remotely from a van all need different things. Before you shop, find out:`,
      },
      {
        list: [
          `What kind of RV they have: motorhome, travel trailer, fifth wheel, camper van or truck camper.`,
          `How often they travel and whether they camp with hookups or off-grid.`,
          `Whether they travel in cold weather or park the rig for winter.`,
          `How much storage space they have. In a small rig, every gift takes up room.`,
        ],
      },
      { h: 'Setup and hookup gear' },
      {
        p: `Practical gear is the safest bet because it gets used every trip. Many of these items wear out, get left at a campsite or never got bought in the first place:`,
      },
      {
        list: [
          `Wheel chocks and leveling blocks.`,
          `A water pressure regulator and a drinking-water-safe hose.`,
          `Sewer hose support and a spare set of disposable gloves.`,
          `A tire pressure gauge, or a tire pressure monitoring system if their rig doesn’t have one.`,
          `A surge protector rated for their RV’s electrical service. Check whether they have a 30-amp or 50-amp rig first.`,
          `A headlamp for hooking up after dark.`,
        ],
      },
      { h: 'Gifts for life inside a small space' },
      {
        list: [
          `Nesting cookware and collapsible bowls that save cabinet space.`,
          `Adhesive hooks, drawer organizers and hanging storage.`,
          `A soft throw blanket and flannel sheets for the bunk.`,
          `An outdoor rug and a pair of folding camp chairs.`,
          `A small, quiet fan for summer nights.`,
          `A deck of cards, a travel board game or a puzzle with a roll-up mat.`,
        ],
      },
      { h: 'Gifts for the road' },
      {
        p: `Long drives between campgrounds are part of RV life. A printed road atlas works where phones lose signal. A sticker map of the states they’ve visited gives them something to fill in. A national parks annual pass makes sense if they visit federal recreation sites often. Good sunglasses are a gift every driver uses, and wraparound frames block wind on breezy campsite afternoons too.`,
      },
      { h: 'Gifts for heated air and dry eyes' },
      {
        p: `RV owners who travel in fall and winter run a furnace or space heater in a small, enclosed space. Warmed air is dry, and in a rig the heat vent is often close to the bed or the dinette. Moving air and dry air both speed up evaporation from the eye’s tear film, so eyes can feel scratchy after a cold night or a long drive with the heater on. Gifts that help:`,
      },
      {
        list: [
          `A compact humidifier sized for a small space. Condensation is an issue in RVs, so a small one used carefully fits better than a big one.`,
          `A hygrometer that shows indoor humidity, so they can see how dry the air gets.`,
          `Vent deflectors to steer heat away from the bed or seating.`,
          `Lubricating eye drops for the glovebox or nightstand.`,
        ],
      },
      {
        p: `[Dry eyes living in an RV in winter](/guides/dry-eyes-living-in-an-rv-in-winter) covers that problem in more detail.`,
      },
      { h: 'Quell as a gift for an RV owner' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. It comes in a {size} bottle, small enough for a cubby or a door pocket.`,
      },
      {
        p: `Two label lines are worth checking before you give it. The warnings read: {warnings}. Ask about egg or bird allergies first. The storage line reads: {storage}. An RV parked in a storage lot can get colder or hotter than that, so the bottle should travel with them, not live in the rig year-round. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting a gift to someone on the road' },
      {
        p: `If they’re traveling over the holidays, you have a few options. Ship it to their home before they leave, to a family member they’ll see, or to a campground or RV park that accepts packages for guests; call the park first to ask. [Ordering eye drops for an RV trip](/guides/ordering-eye-drops-for-an-rv-trip) covers campground addresses and mail forwarding.`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses only. Put their name and shipping address in the order and your own email, so the confirmation and tracking come to you. There’s no gift wrap or gift message option. Shipping is {shipping}, or free on orders of {freeThreshold} or more. No delivery date is promised, so order well before Christmas. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) has the steps, or [order here](/#buy).`,
      },
      { h: 'Gifts that aren’t things' },
      {
        list: [
          `A few nights at a campground they’ve wanted to visit.`,
          `Help with winterizing or de-winterizing the rig.`,
          `A professional RV wash or a mobile service appointment.`,
          `Joining them for a weekend trip.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What do RV owners want for Christmas?',
        a: `Practical gear they’ll use every trip, like leveling blocks, a water pressure regulator and a headlamp, plus comforts for small spaces, such as nesting cookware, warm bedding and camp chairs.`,
      },
      {
        q: 'What is a good small gift for an RV owner?',
        a: `A headlamp, a tire pressure gauge, a road atlas, a sticker map of the states, or a small bottle of lubricating eye drops for the dry air of a heated rig.`,
      },
      {
        q: 'Can I send a Christmas gift to someone at an RV park?',
        a: `Often, if the park accepts packages for guests. Call the office first and ask how to address it. Quell ships to US addresses, and no delivery date is promised, so order early.`,
      },
      {
        q: 'Are eye drops a practical gift for someone who RVs in winter?',
        a: `They can be. RV furnaces dry the air in a small space, and Quell comes in a {size} bottle that fits a cubby. Check for egg or bird allergies first, since the label carries that caution.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-adult-children',
    title: 'Christmas gifts for adult children',
    description:
      'Christmas gifts for grown sons and daughters, by life stage: first apartments, new jobs, long commutes, screen-heavy work and the gift of time together.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Good Christmas gifts for adult children fit where they are in life now: a first apartment, a new job, a long commute, a growing family or a career spent at a screen. Practical upgrades they wouldn’t buy for themselves, help with real costs, experiences you share and thoughtful family keepsakes tend to land better than more stuff. Ask, or listen for what they mention in passing.`,
      },
      { h: 'Gifts for a first apartment' },
      {
        list: [
          `A good chef’s knife and a cutting board.`,
          `A basic tool kit with a cordless drill.`,
          `Quality sheets and towels, the kind that hold up for years.`,
          `A small vacuum or a set of cleaning tools.`,
          `A fire extinguisher and a first aid kit for the kitchen.`,
          `A houseplant that’s hard to kill.`,
        ],
      },
      { h: 'Gifts for a new job' },
      {
        p: `Starting a career brings new costs and new routines. A sturdy work bag, a good water bottle, a nice pen, a professional jacket, or a monitor stand for a home office all get used daily. If they work at a computer for most of the day, think about comfort: a supportive chair cushion, an adjustable laptop stand or a desk lamp with warm light.`,
      },
      { h: 'Gifts for screen-heavy work' },
      {
        p: `Many adult children now spend long hours on screens for work, then more in the evening. Screens reduce how often people blink, and blinking is what spreads tears across the eye. Gifts that help:`,
      },
      {
        list: [
          `A monitor arm or stand that sets the screen slightly below eye level.`,
          `A small desk humidifier for a dry office or apartment.`,
          `A timer or smart watch that reminds them to look away every so often.`,
          `Lubricating eye drops, if they’ve mentioned their eyes feeling dry or tired.`,
        ],
      },
      {
        p: `[Gifts for a coworker who works on screens](/guides/gifts-for-a-coworker-who-works-on-screens) has more ideas in the same vein.`,
      },
      { h: 'Gifts for a long commute' },
      {
        list: [
          `An insulated travel mug that fits their car’s cup holder.`,
          `Good sunglasses for driving into low winter sun.`,
          `A car emergency kit with jumper cables, a blanket and a flashlight.`,
          `An audiobook or podcast subscription.`,
          `A paid oil change or a car detailing appointment.`,
        ],
      },
      { h: 'Gifts for new parents and growing families' },
      {
        p: `If your adult child has a baby or young kids, the most useful gifts are often time and help: a night of babysitting, meals delivered, a house cleaning, or covering a babysitter so they can go out. [Christmas gifts for new parents](/guides/christmas-gifts-for-new-parents) has more practical ideas.`,
      },
      { h: 'Help with real costs' },
      {
        p: `Some families give money or pay a bill. A contribution toward rent, a student loan payment, car insurance, a plane ticket home or a phone bill can mean more than an object. If they’d appreciate it, say it plainly: “This is for the car insurance this month.” Others prefer to stock a pantry or a medicine cabinet. If they use over-the-counter items regularly, a supply of those can be welcome.`,
      },
      { h: 'Giving Quell to a grown son or daughter' },
      {
        p: `If your adult child has mentioned dry eyes from screens, a dry apartment or a long drive, Quell can be one part of a gift. It’s a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as: {uses}. Directions: {directions}.`,
      },
      {
        p: `Before you buy, check one label line with them: {warnings}. Anyone with an egg or bird allergy should talk to their doctor first. Eye drops aren’t a substitute for an eye exam, either; if their eyes hurt or their vision has changed, encourage them to see an eye doctor. If they have an HSA and you’re wondering about paying with yours, [can I use my HSA for my adult child’s eye drops?](/guides/can-i-use-my-hsa-for-my-adult-childs-eye-drops) covers that question.`,
      },
      { h: 'Shipping a gift to where they live' },
      {
        p: `Quell ships within the US from Brentwood, Tennessee. Enter their name and address for shipping and your email for the order, so the confirmation and tracking come to you, not them. There’s no gift wrap or gift message, so send a text to let them know a package is coming. Shipping is {shipping}, or free on orders of {freeThreshold} or more. No delivery date is promised, so order early in December. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through the steps, or [order here](/#buy).`,
      },
      { h: 'Experiences and keepsakes' },
      {
        list: [
          `Tickets to a game, concert or show you attend together.`,
          `A weekend trip, a cooking class or a hike you plan as a family.`,
          `A photo book of their childhood or of a recent family trip.`,
          `Family recipes written out in your own handwriting.`,
          `A letter about what you admire in them as an adult.`,
        ],
      },
      { h: 'Gifts for adult children who say they don’t need anything' },
      {
        p: `When they say they have everything, consumables and experiences work well: good coffee, a favorite restaurant gift card, a streaming subscription, or a promise of a day together. Ask a sibling or partner what they’ve mentioned lately. Small, useful, replenishable things rarely go to waste.`,
      },
    ],
    faq: [
      {
        q: 'What do you buy adult children for Christmas?',
        a: `Gifts that fit their life now: kitchen and tool basics for a first apartment, work bags and desk upgrades for a new job, car kits for commuters, help with real costs, and experiences you share.`,
      },
      {
        q: 'Is it OK to give adult children money for Christmas?',
        a: `Many families do. A contribution toward rent, a loan payment or a plane ticket home can mean more than an object, and saying what it’s for makes it feel thoughtful.`,
      },
      {
        q: 'What do you get a grown child who works at a computer?',
        a: `A monitor stand, a desk humidifier, a timer that reminds them to look away from the screen, or lubricating eye drops if they’ve mentioned dry or tired eyes.`,
      },
      {
        q: 'Can I ship Quell straight to my son or daughter?',
        a: `Yes, to any US address. Put their name and address in the shipping fields and your email in the email field, so tracking comes to you. There’s no gift wrap or message option.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-coach',
    title: 'Christmas gifts for a coach',
    description:
      'Christmas gifts a coach will actually use: sideline gear, cold-weather comfort, team keepsakes, and a few things for long days of wind, sun and film study.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `The Christmas gifts coaches appreciate most are useful on the sideline or personal to the team: a good stadium seat, warm gloves, a weatherproof jacket, a whiteboard clipboard, a sturdy tumbler, polarized sunglasses, or a team-signed ball or photo book. For a coach who spends long hours in wind, sun and film study, small comforts for tired eyes fit too. Pool money with other families for a larger gift.`,
      },
      { h: 'Gifts for the sideline' },
      {
        list: [
          `A dry-erase tactics board or clipboard with the sport’s field printed on it.`,
          `A stopwatch with a lanyard, or a quality whistle.`,
          `A stadium seat cushion for bleachers.`,
          `A folding sideline chair or a collapsible wagon for equipment.`,
          `A large insulated tumbler or water jug.`,
          `A weatherproof notebook and pen that write in the rain.`,
        ],
      },
      { h: 'Gifts for cold-weather seasons' },
      {
        p: `Fall and winter sports put coaches outside in cold wind for hours. Hand warmers, insulated gloves that work with a phone screen, a warm hat, a fleece-lined jacket, wool socks and a heated seat cushion all get used. For indoor sports, the opposite problem shows up: dry, heated gyms and long tournament days.`,
      },
      { h: 'Gifts for eyes that work long hours' },
      {
        p: `Coaching is a lot of watching. Coaches track the field or court for whole games and practices, then study film on a laptop or tablet. Focusing on a field or a screen tends to slow blinking, and wind, sun, stadium lights and heated gyms all speed evaporation from the tear film. Gifts that help:`,
      },
      {
        list: [
          `Polarized, wraparound sunglasses that block glare and wind.`,
          `A brimmed cap or visor in team colors.`,
          `A tablet stand for film review at a comfortable angle.`,
          `Lubricating eye drops for the coaching bag.`,
        ],
      },
      {
        p: `[Dry eyes for referees and coaches](/guides/dry-eyes-for-referees-and-coaches) goes into game-day routines in more detail.`,
      },
      { h: 'Team keepsakes' },
      {
        p: `The gifts coaches often keep longest are the personal ones. A ball signed by every player, a framed team photo, a photo book of the season or a card with a short note from each family all say thank you in a way gear can’t. Older players can write their own notes about a moment that mattered.`,
      },
      { h: 'Group gifts from the team' },
      {
        p: `When families pool money, a bigger gift becomes possible: a quality jacket, a gift card to a favorite restaurant, a set of good sideline chairs, or a gift card to a sporting goods store. One parent collects, another buys, and everyone signs the card. Keep contributions optional and the amount private.`,
      },
      {
        p: `If the coach works for a school or league, check whether it has rules about gifts to staff before you plan something expensive. Some schools set limits, and a team card with a modest gift card often fits inside them.`,
      },
      { h: 'Gifts for different kinds of coaches' },
      {
        list: [
          `High school and college coaches: film-study gear, a laptop bag, a comfortable office chair cushion.`,
          `Club and travel coaches: road-trip gear, a cooler, a good travel mug, a phone mount for the car.`,
          `Rec league volunteers: anything that makes a thankless job easier, plus a heartfelt card.`,
          `Strength and fitness coaches: a quality jump rope, a foam roller, gym bag essentials.`,
          `Swim and indoor coaches: a microfiber towel, a deck chair, something for long hours in humid or dry gyms.`,
        ],
      },
      { h: 'Quell as part of a coach’s gift' },
      {
        p: `If the coach has mentioned dry or tired eyes, Quell can be a small, thoughtful addition. It’s a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, in a {size} bottle that fits in a coaching bag. Its label gives the Uses as: {uses}. Directions: {directions}.`,
      },
      {
        p: `Check the warnings line first: {warnings}. The storage line matters too: {storage}. A bag left on a cold sideline or in a hot car can go outside that range, so a jacket pocket is a better home for it. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering in time for the last practice' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses. You can ship it to yourself to wrap with the team gift, or straight to the coach. Shipping is {shipping}, or free on orders of {freeThreshold} or more, which {freeBottles} bottles reach, handy if a few families each want one for a coaching staff. There’s no gift wrap or gift message, and no delivery date is promised, so order well before the season’s last game or the holiday break. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) has the steps, or [order here](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a coach?',
        a: `Something useful on the sideline, like a stadium seat, warm gloves, a tactics clipboard or polarized sunglasses, or something personal, like a ball signed by the team or a photo book of the season.`,
      },
      {
        q: 'How much should parents spend on a coach’s gift?',
        a: `There’s no set amount. Many teams pool optional contributions for one group gift, and schools or leagues may have limits on gifts to staff, so check before planning something expensive.`,
      },
      {
        q: 'What do you write in a card for a coach?',
        a: `A specific moment or lesson from the season, and what it meant to the player or family. A short note from each player, signed by everyone, is often the part a coach keeps.`,
      },
      {
        q: 'Is a group gift from the team better than individual gifts?',
        a: `Often. Pooling money lets the team give one bigger, useful gift with a card everyone signs, and it keeps contributions optional and private for families.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-living-in-an-rv-in-winter',
    title: 'Dry eyes living in an RV in winter',
    description:
      'Furnace heat in a small RV dries eyes fast, but adding moisture fights condensation. How to balance the two and keep your eyes comfortable all winter.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Living in an RV in winter dries your eyes because a furnace or space heater warms a small, sealed space, and warming cold air lowers its relative humidity. The heat vent is often a few feet from your bed or seat, so dry air blows right across your face. The fix is a balance: add some moisture and redirect airflow, without creating the condensation RVs are prone to.`,
      },
      { h: 'Why RV heat is so drying' },
      {
        p: `Cold outdoor air holds little moisture. When an RV furnace pulls that air in and warms it, the same moisture is spread through warmer air, so relative humidity drops. In a house, that dry air spreads through several rooms. In an RV, it fills a small space quickly, and the ducted vents under the dinette, beside the bed or along the floor push it right past you.`,
      },
      {
        p: `Dry, heated and moving air all speed up evaporation from the tear film, the thin layer of oil, water and mucus that keeps the eye’s surface smooth. That’s why many full-timers notice gritty, tired eyes after the first cold snap, especially in the morning after a night with the furnace cycling.`,
      },
      { h: 'The condensation trade-off' },
      {
        p: `Here’s the catch. In winter, RV walls and windows are cold. Moisture from cooking, showers, breathing and any humidifier condenses on those cold surfaces, drips, and can lead to damp corners and mildew. Many RVers fight condensation with roof vents cracked open, vent fans and dehumidifiers. Those keep the rig dry, which is good for the rig and hard on the eyes.`,
      },
      {
        p: `The goal is middle ground. A hygrometer tells you what’s actually happening inside, so you can add a little moisture when the air is very dry and back off when the windows start to fog.`,
      },
      {
        list: [
          `Put an inexpensive hygrometer near the bed and another near the kitchen.`,
          `If the windows are dripping, run the vent fan and skip the humidifier.`,
          `If readings are low and the windows are dry, a small humidifier near the bed for a few hours can help.`,
          `Wipe down windows in the morning and watch the corners of closets and cabinets for damp.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers choosing and cleaning one.`,
      },
      { h: 'Redirect the heat, don’t sleep in it' },
      {
        list: [
          `Find every heat outlet and note where it blows. Many sit at floor level and aim across the walkway or toward a bunk.`,
          `Use vent deflectors to steer heat along the floor rather than up toward your face.`,
          `Don’t sleep with your head next to a heat outlet, if you can arrange the bed or pillows differently.`,
          `If you use an electric space heater on shore power, place it so it doesn’t blow toward where you sit or sleep.`,
          `Follow the manufacturer’s instructions for your furnace and any heater, including placement and ventilation.`,
        ],
      },
      {
        p: `[Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains why placement matters.`,
      },
      { h: 'Small-space habits that help' },
      {
        list: [
          `Lower the thermostat at night and use warmer bedding instead.`,
          `Take a break from screens every so often; working remotely from a dinette table often means long laptop hours.`,
          `Blink fully and close your eyes for a few seconds during breaks.`,
          `Wear wraparound sunglasses outdoors on windy days in camp.`,
          `In the tow vehicle or cab, point the heater at the windshield and your feet.`,
        ],
      },
      { h: 'Cold outside, dry inside: travel days' },
      {
        p: `Travel days stack dry air on dry air. You start with a heated cab, drive for hours with the defroster blowing, set up in cold wind, then turn the furnace back on. Plan breaks every couple of hours, and keep sunglasses handy for low winter sun and snow glare on the road. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers cold-wind eye care that applies at campsites too.`,
      },
      { h: 'Where Quell fits in an RV' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The Drug Facts panel lists its Uses as: {uses}. Directions say: {directions}.`,
      },
      {
        p: `Storage matters in an RV. The label says: {storage}. An RV left unheated in a storage lot or a campsite while you’re out for the day can drop below that range, and a bottle left near a heat vent or in a sunny window can go above it. Keep it in an inside cabinet away from vents, or in your pocket when you leave. The label also says: {tip}. Read the whole panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting drops delivered while you’re on the road' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, including campgrounds and RV parks that accept packages for guests. Ask the office how to address it first. Shipping is {shipping}, or free on orders of {freeThreshold} or more. No delivery date is promised, and winter weather can slow deliveries, so order before you’re down to your last bottle. [Ordering eye drops for an RV trip](/guides/ordering-eye-drops-for-an-rv-trip) covers mail forwarding and campground addresses, or you can [order here](/#buy).`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `If your eyes hurt, your vision changes, or irritation keeps going, a lubricating drop isn’t the answer. The label says: {stopUse} If you’re on the road, an urgent care or eye doctor near your campground can see you. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in my RV in winter?',
        a: `The furnace warms cold air in a small space, which lowers its relative humidity, and heat vents often blow right past your bed or seat. Dry, moving air speeds evaporation from the tear film.`,
      },
      {
        q: 'Should I use a humidifier in my RV in winter?',
        a: `A small one, carefully. RVs are prone to condensation on cold windows and walls, so use a hygrometer, add moisture only when the air is very dry, and stop when the windows fog.`,
      },
      {
        q: 'How do I keep my eyes from drying out in a camper?',
        a: `Redirect heat vents away from your face, lower the thermostat at night, balance humidity without causing condensation, take screen breaks and blink fully.`,
      },
      {
        q: 'Where should I keep eye drops in an RV in winter?',
        a: `In an inside cabinet away from heat vents and windows, or in your pocket. Quell’s label says: {storage}, and an unheated rig can drop below that range.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-riding-an-e-bike-or-scooter',
    title: 'Dry eyes riding an e-bike or scooter',
    description:
      'E-bikes and scooters push steady wind across your eyes. Why riding dries them, what eyewear helps, and when to pull over instead of riding through it.',
    category: 'using',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Riding an e-bike or electric scooter dries your eyes because you move quickly through the air without much effort, so wind blows across your face the whole ride. Moving air speeds evaporation from the tear film, and focusing on traffic slows blinking. Wear wraparound glasses or a helmet visor, ride with eyes protected even on short trips, and pull over to deal with watering or grit rather than riding blind.`,
      },
      { h: 'Why e-bikes and scooters dry your eyes' },
      {
        p: `On a regular bike, you work for every mile an hour. On an e-bike or scooter, the motor does much of that, so you hold a steady speed from the first block. That steady speed means a steady stream of air across your eyes, the same way sticking your head out of a car window would.`,
      },
      {
        p: `Two things happen at once. Wind carries moisture away from the eye’s surface faster than still air does. And because you’re watching traffic, potholes and pedestrians, your blinks slow down and get shallower, so the tear film isn’t refreshed as often. The result is dry, stinging or watery eyes, sometimes within a few minutes.`,
      },
      { h: 'Why your eyes water when you ride' },
      {
        p: `Watering seems like the opposite of dryness, but it often starts the same way. When the surface of the eye dries and gets irritated, it can respond with a flood of tears. Those tears blur your vision just when you need it, and they don’t stay on the eye for long in the wind. Protecting your eyes from the airflow tends to cut down on both the dryness and the watering.`,
      },
      { h: 'Eyewear that helps' },
      {
        list: [
          `Wraparound sunglasses or cycling glasses that curve around the sides of your face.`,
          `Clear or lightly tinted lenses for dusk, night and cloudy days.`,
          `A helmet with a built-in visor or a clip-on face shield, common on faster e-bikes and mopeds.`,
          `Glasses with soft foam around the frame, which seal out more wind.`,
          `Anti-fog lenses for cold mornings when your breath fogs everything.`,
        ],
      },
      {
        p: `Even on a short ride to the train or the store, put the glasses on. A few minutes of wind is enough to make eyes sting, and grit or a bug doesn’t care how far you’re going.`,
      },
      { h: 'Shared scooters and rental e-bikes' },
      {
        p: `Shared scooters and bikes make quick, unplanned trips easy, which also means people often ride without eyewear. Keep a cheap pair of wraparound glasses in your bag or jacket if you use rentals. Remember too that rideshare handlebars are touched by many hands; don’t touch your eyes or put drops in until you’ve washed or sanitized your hands.`,
      },
      { h: 'Cold-weather riding' },
      {
        p: `Winter wind is harder on the eyes. Cold air is usually dry, and your speed adds wind chill across the eye’s surface. A ride that feels fine in September can leave you squinting and watering in December. Goggles or a helmet visor protect better than sunglasses on cold commutes, and a buff or neck gaiter pulled up keeps your breath from fogging lenses as much.`,
      },
      { h: 'Night riding' },
      {
        p: `At night, headlights and streetlights add glare, and a watering eye smears it across your view. Clear lenses keep wind out without darkening your view. If your vision is blurry from watering or dryness, slow down or stop until it clears.`,
      },
      { h: 'Using drops: stop first' },
      {
        p: `Never put drops in while riding. Pull over somewhere safe, step off the bike or scooter, and wash or sanitize your hands. Lubricating drops can blur vision briefly, so wait until your vision is clear before you ride again. Our guide on [dry eyes when cycling](/guides/dry-eyes-when-cycling) covers the same routine for regular bikes, and [dry eyes when riding a motorcycle](/guides/dry-eyes-when-riding-a-motorcycle) covers faster riding.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions are: {directions}. Plan drops around your trips, such as before you leave or after you arrive, rather than mid-ride.`,
      },
      {
        p: `The label also says: {tip}. Keep the bottle in a jacket pocket or bag, not in a bike basket in the sun; its storage line reads: {storage}. Quell’s label doesn’t give directions for contact lenses, so if you wear them, ask your eye doctor or pharmacist about drops. See the full label on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Grit, bugs and when to stop riding' },
      {
        list: [
          `If something hits your eye, pull over. Don’t rub it.`,
          `Blink several times and let tears try to wash it out.`,
          `If it won’t come out, or the eye keeps hurting, get it looked at rather than riding home with one eye closed.`,
          `If your vision changes or the pain is sharp, stop and seek care.`,
        ],
      },
      {
        p: `The stop-use section of Quell’s label reads: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait, and you can [order Quell here](/#buy) for your bag.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when I ride an electric scooter?',
        a: `Steady wind dries and irritates the eye’s surface, and the eye often responds by flooding with tears. Wraparound glasses or a visor cut down on the wind and usually on the watering too.`,
      },
      {
        q: 'Do I need glasses to ride an e-bike?',
        a: `It’s a good idea. E-bikes hold steady speeds that push wind across your eyes, and glasses also block grit and bugs. Wraparound frames or a helmet visor work better than flat lenses.`,
      },
      {
        q: 'Can I put eye drops in while riding a scooter?',
        a: `No. Pull over, get off, clean your hands, and wait for your vision to clear before riding again. Drops can blur vision briefly.`,
      },
      {
        q: 'What eye protection is good for winter e-bike commuting?',
        a: `Goggles or a helmet visor protect better than sunglasses in cold wind. Anti-fog lenses and a neck gaiter help keep your breath from fogging them.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-the-shooting-range',
    title: 'Dry eyes at the shooting range',
    description:
      'Concentrating on a sight picture slows blinking, and range wind or ventilation dries eyes further. How to keep your eyes comfortable through a range day.',
    category: 'using',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Eyes get dry at the shooting range because concentrating on sights, a scope or a target slows your blinking, so the tear film isn’t refreshed as often. Outdoor wind, sun and dust, or the steady airflow of an indoor range’s ventilation, then dry the surface faster. Blink fully between shots, rest your eyes between strings, wear the eye protection the range requires, and step back from the line before using any drops.`,
      },
      { h: 'Why shooting dries your eyes' },
      {
        p: `Shooting asks for intense focus. Lining up sights, holding a crosshair steady or tracking a clay demands that you keep your eyes open and still. People naturally blink less during that kind of focus, and the blinks they do make are often partial. Each full blink spreads tears across the eye; fewer of them means the surface dries out between blinks.`,
      },
      {
        p: `Many shooters also hold their breath and their gaze through a string of shots. By the end of a long session, eyes can feel dry, gritty, tired or watery, and the sight picture may blur until you blink.`,
      },
      { h: 'Outdoor ranges: wind, sun and dust' },
      {
        list: [
          `Wind across an open range speeds evaporation from the tear film, especially on dry days.`,
          `Bright sun and glare make you squint, which can change how fully you blink.`,
          `Dust from gravel, dirt berms and nearby vehicles can get into the eyes.`,
          `Cold-weather sessions add dry, cold wind; hot afternoons add sun and dry heat.`,
        ],
      },
      {
        p: `Wraparound eye protection blocks some of the wind and dust along with doing its main job. Tinted lenses help in bright sun; clear or yellow lenses suit overcast days and indoor lanes. A brimmed cap shades your eyes from overhead sun.`,
      },
      { h: 'Indoor ranges: moving air' },
      {
        p: `Indoor ranges use ventilation to keep air moving through the shooting area. That airflow can blow steadily past the firing line, and it often feels cool and dry. Combine it with focused shooting and bright lane lighting, and dry eyes can show up faster than you’d expect on a short session.`,
      },
      {
        list: [
          `Take a break off the line every so often and close your eyes for a few seconds.`,
          `Stand so the airflow isn’t hitting you square in the face, if your lane allows it.`,
          `Wash your hands before touching your face or eyes after handling firearms, ammunition or targets.`,
        ],
      },
      { h: 'Eye protection comes first' },
      {
        p: `Every range has its own rules for eye protection, and they apply no matter how your eyes feel. Wear the protection your range requires, keep it on whenever you’re on the line or near it, and choose glasses that fit snugly. If you wear prescription glasses, ask your eye doctor or optician about protective options that fit over or replace them. Dry eyes are never a reason to take protection off on the line.`,
      },
      { h: 'Blink habits between shots' },
      {
        list: [
          `After each shot or string, close your eyes gently for a second, then open and blink fully a few times.`,
          `Between strings, look at something far away and let your focus relax.`,
          `When you lower a rifle from your shoulder, take a few slow, complete blinks before you look back through the scope.`,
          `At a long session, plan a full break every half hour or so.`,
        ],
      },
      {
        p: `[How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why full blinks matter more than quick ones.`,
      },
      { h: 'Using drops at the range' },
      {
        p: `Never put drops in on the firing line. Make your firearm safe according to the range’s rules, step back from the line, clean your hands, and then use drops. Lubricating drops can blur vision briefly, so wait until your vision is clear before returning to the line. Using drops before you start and on your breaks fits better than trying to fit them in between strings.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `In a range bag, keep the bottle in a clean pocket away from solvents and lubricants, and out of a hot vehicle. Its storage line is: {storage}. Quell’s label doesn’t give directions for contact lenses or for use with other eye products, so ask your eye doctor or pharmacist about those. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Hunting season and long sits' },
      {
        p: `Many shooters move from the range to the field in the fall. Long sits in a blind or stand, scanning through binoculars and cold morning wind all dry eyes in the same way. [Dry eyes on a hunting trip](/guides/dry-eyes-on-a-hunting-trip) covers that, and [Christmas gifts for a hunter](/guides/christmas-gifts-for-a-hunter) has ideas if you’re shopping for one.`,
      },
      { h: 'When to stop and see a doctor' },
      {
        p: `If something hits your eye, whether a fragment, debris or anything else, stop shooting and get it checked, even if it seems minor. Pain, vision changes, or irritation that keeps going need a doctor, not a drop. Quell’s label says: {stopUse} You can [order Quell here](/#buy) for your range bag.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when shooting?',
        a: `Concentrating on sights or a scope slows your blinking, so tears aren’t spread across the eye as often. Wind outdoors or ventilation indoors dries the surface faster still.`,
      },
      {
        q: 'Can I use eye drops at the shooting range?',
        a: `Yes, but only off the line. Make your firearm safe as the range requires, step back, clean your hands, use the drops, and wait until your vision is clear before returning.`,
      },
      {
        q: 'Why do my eyes water when I look through a scope?',
        a: `Holding your eye still and open behind a scope slows blinking, and the eye’s surface can dry and react with a rush of tears. Blinking fully between shots and resting your eyes between strings help.`,
      },
      {
        q: 'Should I take off my shooting glasses if my eyes feel dry?',
        a: `Not on or near the line. Step back to a safe area first. The range’s eye protection rules apply however your eyes feel, and wraparound glasses also block some wind and dust.`,
      },
    ],
  },
]
