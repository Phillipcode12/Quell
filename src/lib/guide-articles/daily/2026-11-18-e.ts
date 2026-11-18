import type { Guide } from '@/lib/guide-types'
export const DAILY_20261118_E: Guide[] = [
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-youngstown-oh:
   * - https://data.rcc-acis.org/StnData (sid USW00014852, NOAA 1991-2020 monthly
   *   normals, the data behind NWS NOWData; NCEI file server down today)
   *   (YOUNGSTOWN-WARREN RGNL AP, elev 1167 ft: monthly precip sums to 41.19 in;
   *   Jul 4.27 wettest, Feb 2.52 driest; snow sums to 67.8 in, Jan 19.6, Feb 15.1,
   *   Dec 14.8, Mar 10.5; Jan high 34.3 F, low 19.3 F; Jul high 82.7 F, low 60.3 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (local copy
   *   .daily-job/relhum23.txt; YOUNGSTOWN, OH, WBAN 14852, morning/afternoon:
   *   Jan 81/71, Apr 76/55, May 78/54, Sep 88/59, Dec 82/72)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt (local copy;
   *   YOUNGSTOWN: Jan 4.5 highest month, Aug 2.9 lowest; Nov-Mar all 4.2 or more)
   */
  {
    slug: 'dry-eye-relief-youngstown-oh',
    title: 'Dry eye relief in Youngstown, Ohio',
    description:
      'Youngstown averages about 68 inches of snow, so furnaces run for months. NOAA’s figures for the Mahoning Valley and practical dry eye relief, season by season.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Youngstown is mostly a winter project. NOAA’s normals put about 68 inches of snow a year at the Youngstown-Warren airport, so furnaces run from late fall into April and dry the air indoors, while April and May afternoons are the least humid outdoors. Keep heat vents off your face, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Youngstown’s climate in NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Youngstown-Warren Regional Airport, as published through the National Weather Service’s NOWData, describe the Mahoning Valley as snowy and evenly wet. The station sits at about 1,170 feet in Vienna Township, north of the city, so read its figures as close to downtown rather than identical.`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 41.2 inches. July is the wettest month at 4.27 inches, and February the driest at 2.52.`,
          `Snowfall normals total about 68 inches: 19.6 in January, 15.1 in February, 14.8 in December and still 10.5 in March.`,
          `January’s normal high is 34.3°F, with a normal low of 19.3°F.`,
          `July peaks at a normal high of 82.7°F, with nights near 60.`,
        ],
      },
      { h: 'Is Youngstown humid?' },
      {
        p: `Outdoors, most of the year, yes. NOAA’s relative humidity table for Youngstown has mornings at 76 percent or higher in every month, topping out at 88 percent in September. Afternoons are where the valley dries a little: 55 percent in April and 54 in May, the lowest of the year. Winter afternoons stay high, 71 percent in January and 72 in December.`,
      },
      {
        p: `Those winter figures don’t describe the air inside your house. Relative humidity depends on temperature, and frigid air carries very little water. Warm that January air from the teens to the upper 60s and its relative humidity drops sharply, with no water added or lost. That’s why the kitchen can feel parched while snow is falling past the window.`,
      },
      { h: 'Furnace season in the Mahoning Valley' },
      {
        p: `With normal lows below freezing from December through February, heat runs for months, and forced air moves that dried-out air across your face all evening. A few changes cut down on how much of it reaches your eyes:`,
      },
      {
        list: [
          `Move the recliner or desk chair so the floor register isn’t blowing up at you, or fit the register with a deflector.`,
          `Run a humidifier in the bedroom and clean it on the schedule its maker gives.`,
          `Turn the thermostat down a few degrees at night, since warmer indoor air dries out faster.`,
          `On the drive down Route 422 or across the Market Street Bridge, send the car’s heat to the windshield and floor, not your face.`,
          `If a basement space heater keeps a workshop or laundry corner warm, sit beside it rather than in front of it.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has a room-by-room checklist if the whole house feels dry.`,
      },
      { h: 'Wind on the coldest days' },
      {
        p: `NOAA’s wind table for Youngstown makes January the windiest month and August the calmest, and every month from November through March sits near the top. Moving air pulls water off the tear film faster, so shoveling the driveway after a squall, waiting for a bus downtown or crossing the Youngstown State campus between classes can leave eyes stinging, then watering. Watering in the wind is a reflex, not a sign your eyes have moisture to spare. Wraparound glasses or a cap with a brim block much of the breeze, and turning your back to the wind while you wait helps more than you’d expect.`,
      },
      { h: 'Spring and summer around Mill Creek Park' },
      {
        p: `The driest outdoor air of the year comes in April and May, which is also when people head back into Mill Creek MetroParks to walk the gorge trails, circle Lake Glacier or stop at Lanterman’s Mill. Afternoon humidity in the mid-50s is mild compared with the desert West, but an afternoon of sun, glare off the water and a spring breeze adds up. Morning walks catch the higher humidity, and sunglasses cut glare as well as wind. Mowing the first grass of the season throws dust and clippings, so safety glasses are worth the extra minute.`,
      },
      { h: 'Screens, school and long shifts' },
      {
        p: `Snow days and short winter light keep more of life indoors, which usually means more screens. People blink less often and less completely when they concentrate on a monitor, and the tear film has more time to thin between blinks. YSU finals land in December, right in furnace season, and a hospital or warehouse night shift can mean hours under dry ventilation. Look away from the screen every so often and finish each blink. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why the habit matters.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `It carries this warning: {warnings}. The storage line reads: {storage}. A bottle left all night in a car parked in a January driveway, or on a porch on delivery day, can drop well below that range, so keep it in a coat pocket and bring packages in promptly. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Youngstown' },
      {
        p: `Orders leave Brentwood, Tennessee, for Youngstown, Boardman, Austintown, Canfield, Warren and any other US address. You check out as a guest, standard shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email. We don’t promise a delivery date, so in snow season it makes sense to reorder with a week or so of drops left. An unopened bottle can be refunded within {returnDays} days of delivery without being sent back. See the [Youngstown page](/eye-drops/youngstown-oh) and the [Ohio page](/eye-drops/state/ohio) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for ordinary dryness. Figuring out why your eyes keep bothering you, and what to do about it, belongs to an optometrist or ophthalmologist. The label is direct about it: {stopUse} Pain, vision that stays blurry, light sensitivity or one eye far worse than the other are reasons to book an exam. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more, and the [self-check](/self-check) helps you put your symptoms into words first; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Youngstown get a year?',
        a: `About 68 inches in a normal year at Youngstown-Warren Regional Airport, by NOAA’s 1991 to 2020 normals. January leads with 19.6 inches, and March still averages 10.5.`,
      },
      {
        q: 'Why are my eyes dry in Youngstown in the winter?',
        a: `Mostly because of indoor heat. Warming frigid outdoor air lowers its relative humidity sharply, and forced-air vents blow it across your face. NOAA also lists January as Youngstown’s windiest month, which dries eyes outdoors.`,
      },
      {
        q: 'Is Youngstown humid?',
        a: `Fairly. NOAA’s table shows Youngstown mornings at 76 percent relative humidity or higher year-round. Afternoons are lowest in April and May, at 55 and 54 percent.`,
      },
      {
        q: 'Does Quell ship to Youngstown, Ohio?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Youngstown and the rest of the Mahoning Valley with guest checkout and tracking by email. No delivery date is promised, so reorder before the bottle is nearly empty.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-port-arthur-tx:
   * - https://data.rcc-acis.org/StnData (sid USW00012917, NOAA 1991-2020 monthly
   *   normals as served to NWS NOWData; NCEI file server down today)
   *   (PORT ARTHUR SE TX REGIONAL AP, elev 13 ft: monthly precip sums to 62.13 in;
   *   Aug 6.89, Jul 6.85, Jun 6.70, Sep 6.69; Feb 3.09 driest; Aug high 93.1 F,
   *   Jul 92.6 F; Jan high 63.5 F, low 43.8 F; snowfall normals missing, not used)
   * - .daily-job/relhum23.txt (NOAA relhum23; PORT ARTHUR, TX, WBAN 12917,
   *   morning/afternoon: Jan 87/67, Jul 94/64, Aug 94/63, Oct 91/58, annual 90/63)
   * - .daily-job/wndspd23.txt (NOAA wndspd23; PORT ARTHUR: Apr 4.6 highest,
   *   Feb-Mar 4.5; Aug 2.7 lowest, Jul 2.8)
   * No Beaumont guide exists on the site as of today; this one is built around
   * Port Arthur's own coast, plants and waterways.
   */
  {
    slug: 'dry-eye-relief-port-arthur-tx',
    title: 'Dry eye relief in Port Arthur, Texas',
    description:
      'Port Arthur mornings average about 90 percent humidity, yet eyes still dry out in AC and spring wind off Sabine Lake. NOAA’s figures and what helps.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `In Port Arthur, dry eyes rarely come from the weather itself. NOAA’s records put mornings near 90 percent humidity, but air conditioning in homes, plant control rooms and trucks dries the air you actually breathe, and spring brings the windiest weeks off Sabine Lake and the Gulf. Aim vents away from your face, wear wraparound eyewear on the water, and use a lubricating drop as its label directs.`,
      },
      { h: 'Port Arthur weather by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for the regional airport that serves Port Arthur and Beaumont, listed by NOAA as Port Arthur SE TX Regional and sitting about 13 feet above sea level, describe a warm, very wet coastal plain:`,
      },
      {
        list: [
          `The monthly rainfall normals add up to about 62.1 inches a year.`,
          `June through September each bring more than 6.6 inches, led by August at 6.89. February is the driest month at 3.09.`,
          `August’s normal high is 93.1°F and July’s 92.6°F.`,
          `January is mild, with a normal high of 63.5°F and a normal low of 43.8°F.`,
        ],
      },
      { h: 'How humid is Port Arthur?' },
      {
        p: `Very, by any measure. NOAA’s relative humidity table for Port Arthur averages 90 percent in the morning and 63 percent in the afternoon across the year. July and August mornings reach 94 percent. The lowest afternoon figure, 58 percent, comes in October, when the first fall fronts push drier air down from the north. Even that would count as humid in most of the country.`,
      },
      {
        p: `So why do eyes feel dry here? Because most people in Port Arthur spend the hot months moving between air-conditioned spaces. An AC system pulls water out of the air as it cools it, and the vent then blows that drier air across your face. A night in a cold bedroom, a shift in a pressurized control room and the drive home with the dash vents open can leave eyes gritty in a town where the outside air is close to saturated.`,
      },
      { h: 'Plant shifts, turnarounds and control rooms' },
      {
        p: `Refining and petrochemical work shapes a lot of daily life along the Sabine-Neches Waterway, and much of that work is hard on eyes. Long hours at monitors in a control room slow blinking. Turnaround season means long days in safety glasses, heat and dust, with breaks in a cooled trailer or truck cab. A few habits help:`,
      },
      {
        list: [
          `At a console, look up and across the room every so often and let a few complete blinks happen.`,
          `In the truck, angle the dash vents toward your chest or the windshield.`,
          `Keep your eye protection on in the unit; wash your hands before you touch your eyes or a dropper on break.`,
          `Leave drops in your lunch bag or locker rather than on the dash, where the cab can get far hotter than the label’s storage range.`,
        ],
      },
      {
        p: `Anything that gets into an eye at work, from a splash to a particle, is a matter for your site’s first aid and safety procedures, not for a lubricating drop. Our guide on [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers more of the routine outside the fence.`,
      },
      { h: 'Spring wind on Sabine Lake and Pleasure Island' },
      {
        p: `NOAA’s wind table for Port Arthur makes April the windiest month, with February and March just behind, while July and August are the calmest. That spring stretch is when plenty of people are fishing Sabine Lake, launching from Pleasure Island or driving out toward Sabine Pass and the beaches. Wind plus glare off open water is a hard combination for the tear film: the breeze speeds evaporation, and squinting into bright water shortens each blink.`,
      },
      {
        list: [
          `Polarized wraparound sunglasses cut glare and block the side wind that ordinary frames let through.`,
          `A cap with a brim keeps both sun and spray off your eyes.`,
          `Turn your back to the wind when you rebait or check your phone.`,
          `Keep salty or sunscreen-covered fingers away from your eyes until you’ve rinsed your hands.`,
        ],
      },
      { h: 'Fall fronts and the short heating season' },
      {
        p: `October’s 58 percent afternoons are the driest outdoor air Port Arthur gets, and the first cool fronts feel good after summer. Winters are short and mild, so heaters run less here than in most of the country, but on the cold snaps when they do run, the same rule applies: heated indoor air loses relative humidity. Space heaters pointed at a couch or bed are the usual culprits. Our [space heater guide](/guides/dry-eyes-from-a-space-heater) explains where to put one.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, it is: {uses}. The directions read: {directions}. One caution on the panel is worth repeating: {tip}.`,
      },
      {
        p: `The warning section says: {warnings}. For storage: {storage}. A Gulf Coast summer pushes a parked car or a mailbox far past that upper limit, so carry the bottle with you and bring deliveries indoors the day they arrive. The rest of the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Port Arthur' },
      {
        p: `We ship from Brentwood, Tennessee, to Port Arthur, Groves, Port Neches, Nederland and any other US address. There’s no account to make; checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, so order before your last bottle is nearly gone. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. Local details are on the [Port Arthur page](/eye-drops/port-arthur-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If dryness keeps returning despite good habits, an optometrist or ophthalmologist can look for the reason; a drop can’t. The label sets its own limit: {stopUse} Sudden pain, a change in vision, or anything that hit your eye at work calls for care right away. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How humid is Port Arthur, Texas?',
        a: `NOAA’s table averages 90 percent relative humidity in the morning and 63 percent in the afternoon over the year at the Port Arthur station. July and August mornings reach 94 percent.`,
      },
      {
        q: 'Why do my eyes feel dry in Port Arthur when it’s so humid?',
        a: `Most of the dryness comes from air conditioning, which removes water from the air it cools and blows it across your face. Spring wind off the water adds to it outdoors.`,
      },
      {
        q: 'What is the rainiest month in Port Arthur?',
        a: `August, at 6.89 inches in NOAA’s 1991 to 2020 normals, with July, June and September close behind. February is the driest month at 3.09 inches.`,
      },
      {
        q: 'Can I get Quell delivered in Port Arthur, TX?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Port Arthur and the rest of Jefferson County, with guest checkout and tracking by email. There’s no promised delivery date, so reorder early.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-walla-walla-wa:
   * - https://data.rcc-acis.org/StnData (sid USW00024160, NOAA 1991-2020 monthly
   *   normals, the data behind NWS NOWData)
   *   (WALLA WALLA REGIONAL AP, elev 1170 ft: monthly precip sums to 18.74 in;
   *   Aug 0.40, Jul 0.47, Sep 0.64, Jun 1.24; Nov 2.25, Dec 2.23; snow sums to
   *   6.5 in, Dec 2.7, Feb 2.2, Jan 1.0; Jul high 90.1 F, Aug 88.6 F; Dec high
   *   41.0 F, low 30.2 F; Jan low 30.7 F)
   * - .daily-job/relhum23.txt (NOAA relhum23; WALLA WALLA, WA, WBAN 24160, period
   *   1948-2000, morning/afternoon: Jun 68/35, Jul 56/25, Aug 57/28, Sep 61/33,
   *   Nov 80/72, Dec 82/79, Jan 81/77)
   * - .daily-job/wndspd23.txt (NOAA wndspd23; WALLA WALLA: Mar and Apr 4.0
   *   highest; Jan, Oct, Dec 3.2 lowest)
   */
  {
    slug: 'dry-eye-relief-walla-walla-wa',
    title: 'Dry eye relief in Walla Walla, Washington',
    description:
      'Walla Walla July afternoons average 25 percent humidity, with under half an inch of rain. NOAA’s numbers and how to keep your eyes comfortable in the valley.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Walla Walla centers on summer. NOAA’s records put July afternoons at the regional airport near 25 percent humidity, and July and August together average less than an inch of rain, while spring brings the windiest weeks. Plan outdoor work and wine-country afternoons around the heat, shield your eyes from wind and dust, and use a lubricating drop as its label directs.`,
      },
      { h: 'How dry is Walla Walla in the summer?' },
      {
        p: `Drier than the green vineyards suggest. NOAA’s 1991 to 2020 normals for Walla Walla Regional Airport, at about 1,170 feet on the northeast side of town, show a year built around a long, nearly rainless summer:`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 18.7 inches a year.`,
          `August averages 0.40 inches and July 0.47; September adds only 0.64.`,
          `November (2.25 inches) and December (2.23) are the wettest months.`,
          `July’s normal high is 90.1°F, and August’s 88.6°F.`,
          `Snow is light, about 6.5 inches in a normal year, with December the snowiest at 2.7.`,
        ],
      },
      {
        p: `NOAA’s relative humidity table for Walla Walla, which covers 1948 to 2000 for this station, shows what that means for the air. July afternoons average 25 percent and August afternoons 28 percent. June (35) and September (33) aren’t far behind. Mornings start much higher, 56 to 68 percent in those months, so the day dries out steadily from breakfast to late afternoon.`,
      },
      { h: 'Harvest season, dust and long days outside' },
      {
        p: `Summer here is work season. Wheat comes off the rolling hills toward Waitsburg and Touchet, sweet onions come out of the ground, and by September the grape harvest is underway across the valley. Most of that happens in the driest stretch of the year, with dust in the air and sun overhead. Low humidity pulls water from the tear film quickly, and dust and chaff make you rub your eyes, which only adds irritation.`,
      },
      {
        list: [
          `Wear wraparound safety glasses in the field and on the crush pad; they block dust and the breeze together.`,
          `In a combine or tractor cab, keep the AC vents aimed at your chest, not at your eyes.`,
          `Start the heaviest outdoor jobs early, while morning humidity is more than twice the afternoon figure.`,
          `Wash dust off your hands and face before you touch your eyes or a bottle of drops.`,
        ],
      },
      {
        p: `Our guide for [outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers the daily routine for anyone who spends the season outside.`,
      },
      { h: 'Spring wind off the Blue Mountains' },
      {
        p: `NOAA’s wind table ranks March and April as Walla Walla’s windiest months, and the calmest are January, October and December. Spring is when people get back on bikes, walk the trail around Bennington Lake or head up toward the Blue Mountains, and gusty air dries the eye’s surface even when temperatures are mild. Glasses with side coverage help, and so does riding or walking with the wind behind you on the way home. If your eyes water in the wind, that’s the eye’s reflex response to irritation; they can still feel dry once you’re back indoors.`,
      },
      { h: 'Gray winters and dry houses' },
      {
        p: `Winter flips the outdoor numbers. NOAA’s table has December afternoons at 79 percent humidity and January at 77, and the valley often sits under low clouds and fog. Inside, the furnace or heat pump runs from November on, and warmed air loses relative humidity as it heats. That’s why a Walla Walla living room can feel dry while the windows are fogged. A bedroom humidifier, a chair moved off the floor vent, and a slightly cooler thermostat at night all help. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more.`,
      },
      { h: 'Tasting rooms, campus and screens' },
      {
        p: `Downtown tasting rooms, Whitman College classrooms and offices at the hospitals all run on climate control, cool in summer and warm in winter. Students writing papers and anyone at a laptop for hours blink less while they concentrate. Look away from the screen every so often, finish each blink, and don’t sit with an AC register pointed at your face. A drive home on Highway 12 with the dash vents open is worth adjusting too.`,
      },
      { h: 'What the label on Quell says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line, from the Drug Facts panel: {uses}. Its directions: {directions}. And from the panel’s “when using” section: {tip}.`,
      },
      {
        p: `The warnings read: {warnings}. The storage line reads: {storage}. A July afternoon near 90°F in a parked pickup takes the cab well past that upper limit, so keep the bottle in a cooler bag or bring it inside. Everything else on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Walla Walla' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Walla Walla, College Place, Milton-Freewater and every other US address. Guest checkout is the only kind; there’s no account. Shipping costs {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, though we don’t promise an arrival date, so order ahead of harvest rather than in the middle of it. Unopened bottles can be refunded within {returnDays} days of delivery without returning them. See the [Walla Walla page](/eye-drops/walla-walla-wa) and the [Washington page](/eye-drops/state/washington).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps coming back deserves an exam, because only an eye doctor can find out why. The label says when to stop: {stopUse} A scratch from chaff or a chip of grit, pain, or a change in your vision needs prompt care rather than drops. The [self-check](/self-check) can help you describe what you’re noticing; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How dry is Walla Walla in the summer?',
        a: `Very dry in the afternoons. NOAA’s table puts Walla Walla’s July afternoons at 25 percent relative humidity and August at 28, and those two months average less than an inch of rain combined.`,
      },
      {
        q: 'How much rain does Walla Walla get?',
        a: `About 18.7 inches in a normal year at Walla Walla Regional Airport, by NOAA’s 1991 to 2020 normals. November and December are the wettest months; July and August are the driest.`,
      },
      {
        q: 'Does Walla Walla get snow?',
        a: `A little. NOAA’s normals show about 6.5 inches a year at the airport, with December averaging 2.7 inches and February 2.2.`,
      },
      {
        q: 'Does Quell ship to Walla Walla?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Walla Walla, College Place and the rest of the valley, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-huntington-wv:
   * - https://data.rcc-acis.org/StnData (sid USW00003860, NOAA 1991-2020 monthly
   *   normals, the data behind NWS NOWData)
   *   (HUNTINGTON TRI-STATE AIRPORT, elev 824 ft: monthly precip sums to 45.10 in;
   *   Jul 5.08 wettest, May 4.51; Oct 3.02 driest; snow sums to 19.8 in, Jan 6.0,
   *   Feb 5.8, Mar 4.3; Jan high 43.2 F, low 26.4 F; Jul high 86.4 F, low 66.4 F)
   * - .daily-job/relhum23.txt (NOAA relhum23; HUNTINGTON, WV, WBAN 03860,
   *   morning/afternoon: Mar 76/54, Apr 75/48, May 84/54, Aug 91/59, Sep 91/58,
   *   Jan 78/64, Dec 79/64)
   * - .daily-job/wndspd23.txt (NOAA wndspd23; HUNTINGTON annual 2.6, Jan-Apr 3.1
   *   highest, Aug 1.9 lowest)
   */
  {
    slug: 'dry-eye-relief-huntington-wv',
    title: 'Dry eye relief in Huntington, West Virginia',
    description:
      'Huntington’s driest air comes in April, near 48 percent humidity in the afternoon, and winter heat dries homes. NOAA’s figures and what helps your eyes.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `In Huntington, dry eyes usually follow two patterns: spring afternoons, when NOAA’s records show humidity falling to about 48 percent in April, and the months of indoor heat from December into March. Summers are humid and still. Keep vents off your face, take screen breaks, wear glasses in the wind, and use a lubricating drop as its label directs.`,
      },
      { h: 'Huntington’s climate in the NOAA record' },
      {
        p: `NOAA’s 1991 to 2020 normals for Huntington Tri-State Airport, on a ridge at about 824 feet west of the city near Ceredo, describe a river-valley climate with steady rain and modest snow:`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 45.1 inches a year, led by July at 5.08 inches. October is the driest month at 3.02.`,
          `Snowfall averages about 19.8 inches, mostly in January (6.0), February (5.8) and March (4.3).`,
          `January’s normal high is 43.2°F and its normal low 26.4°F.`,
          `July brings normal highs of 86.4°F and nights near 66.`,
        ],
      },
      { h: 'How humid is Huntington?' },
      {
        p: `It depends heavily on the season and the hour. NOAA’s relative humidity table for Huntington shows August and September mornings at 91 percent, the kind of damp that brings fog up off the Ohio River before sunrise. Afternoons tell a different story in spring: 54 percent in March, 48 in April and 54 in May. April is the driest outdoor air of the year, with mild temperatures that draw people outside for hours.`,
      },
      {
        p: `Winter sits in between, with afternoons near 64 percent in December and January. Indoors, though, the furnace changes everything. Heating cold air lowers its relative humidity, and forced-air vents spread it through the house.`,
      },
      { h: 'Spring afternoons along the river' },
      {
        p: `April is when Ritter Park’s paths fill up, people walk Harris Riverfront Park, and Little League and soccer seasons start. Low afternoon humidity speeds evaporation from the tear film, and sun glare makes people squint, which tends to come with shorter, less complete blinks.`,
      },
      {
        list: [
          `Schedule long walks and yard work for the morning, when humidity is much higher.`,
          `Sunglasses that wrap around cut both glare and breeze.`,
          `On the sidelines, sit with the sun and wind behind you if you can.`,
          `Give your eyes a minute of slow, full blinks after time outdoors.`,
        ],
      },
      { h: 'Calm air, summer heat and air conditioning' },
      {
        p: `NOAA’s wind table lists Huntington among the calmer stations in its region, with August the stillest month and January through April the breeziest. Wind is less of a factor here than in open country. In summer, the drying force is air conditioning: highs in the mid-80s keep it running in homes, cars and offices, and the cold air from a vent strips moisture from your eyes as it does from the room. Adjust car vents toward the windshield and keep desk fans out of your line of sight.`,
      },
      { h: 'Winter heat, Marshall finals and screens' },
      {
        p: `Once January lows settle in the 20s, heat runs most of the day. Dorms and classrooms at Marshall University and the downtown offices near Pullman Square are warm and dry, and finals week in December lands right in the middle of it. Long reading and screen sessions slow blinking, so the tear film thins between blinks. Look away every so often, keep a humidifier near your bed, and steer clear of seats under a ceiling vent. [Dry eyes while studying for exams](/guides/dry-eyes-while-studying) has a routine built for finals.`,
      },
      { h: 'River work and the tri-state commute' },
      {
        p: `Plenty of Huntington workers spend shifts on towboats and barges, at rail yards, or commuting across the bridges to Ohio and Kentucky. Cold wind on the water and long drives with the heater running are both hard on eyes. Wear eye protection on deck, close the dash vents nearest your face, and keep a bottle in an inside pocket rather than the glove box, where winter cold or summer heat can push it out of range.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its panel gives this use: {uses}. Directions: {directions}. To keep the bottle clean: {tip}.`,
      },
      {
        p: `The panel’s warning reads: {warnings}. Storage: {storage}. Also listed under other information: {milky}. Our [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Ordering Quell in Huntington' },
      {
        p: `Orders go from Brentwood, Tennessee, to Huntington, Barboursville, Kenova, Ceredo and any other US address, including across the river in Ohio and Kentucky. You can check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles, and tracking arrives by email. Delivery dates aren’t promised, so leave some margin. If a bottle goes unopened, it can be refunded within {returnDays} days of delivery, and you don’t ship it back. See the [Huntington page](/eye-drops/huntington-wv) and the [West Virginia page](/eye-drops/state/west-virginia) for more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Persistent dryness has causes that only an eye exam can sort out. The label puts it plainly: {stopUse} Pain, a sudden change in vision, or anything that struck your eye at work or on the water needs prompt care. Read [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'How humid is Huntington, WV?',
        a: `Quite humid in summer mornings: NOAA’s table shows 91 percent in August and September. Afternoons are drier, especially in April, when they average 48 percent.`,
      },
      {
        q: 'How much snow does Huntington, WV get?',
        a: `About 19.8 inches a year at Huntington Tri-State Airport, according to NOAA’s 1991 to 2020 normals. January (6.0 inches) and February (5.8) are the snowiest months.`,
      },
      {
        q: 'Why do my eyes get dry in Huntington in the spring?',
        a: `April afternoons are the least humid of the year in Huntington, averaging 48 percent in NOAA’s table, and mild weather keeps people outside for hours in sun and breeze.`,
      },
      {
        q: 'Can I order eye drops online in Huntington, West Virginia?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Huntington and the whole tri-state area, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-mcallen-tx:
   * - https://data.rcc-acis.org/StnData (sid MFE, NOAA 1991-2020 monthly normals,
   *   the data behind NWS NOWData)
   *   (MCALLEN MILLER INTL AP, elev 99 ft: monthly precip sums to 22.16 in;
   *   Sep 4.61 wettest, Jun 3.05; Feb 0.72 driest, Jan 0.77, Dec 1.06;
   *   Aug high 99.6 F, Jul 98.5 F, Jun 97.4 F, Sep 94.3 F, May 93.1 F;
   *   Jan high 72.8 F, low 52.7 F; Dec high 73.8 F; snowfall missing, not used)
   * - No relhum23 or wndspd23 row for McAllen: no humidity or wind figures used.
   * Brownsville has a guide (2026-11-17-e.ts) built on coastal wind and AC; this
   * one is built on inland heat, the dry winter months and McAllen's own life.
   */
  {
    slug: 'dry-eye-relief-mcallen-tx',
    title: 'Dry eye relief in McAllen, Texas',
    description:
      'McAllen’s August highs average 99.6°F, so AC runs for months, and winters bring under an inch of rain a month. NOAA’s figures and dry eye relief tips.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in McAllen means managing heat and the air conditioning it demands. NOAA’s normals put August highs at 99.6°F at Miller International Airport, with highs above 93°F from May through September, and December through February each average about an inch of rain or less. Keep cold vents off your face, protect your eyes from sun and glare, and use a lubricating drop as its label directs.`,
      },
      { h: 'McAllen’s climate, by NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for McAllen Miller International Airport, about 99 feet above sea level on the south side of the city, show an inland Rio Grande Valley climate: hot for half the year, warm the rest, and rainfall that arrives in a few heavy months.`,
      },
      {
        list: [
          `Normal highs: 93.1°F in May, 97.4°F in June, 98.5°F in July, 99.6°F in August and 94.3°F in September.`,
          `Winter is mild, with a January normal high of 72.8°F and a normal low of 52.7°F.`,
          `The monthly rainfall normals add up to about 22.2 inches a year.`,
          `September is the wettest month at 4.61 inches. February (0.72), January (0.77) and December (1.06) are the driest.`,
        ],
      },
      { h: 'Why your eyes feel dry in a McAllen summer' },
      {
        p: `Five months of highs in the mid-90s or above mean air conditioning almost everywhere: houses, cars, stores along Tenth Street, the hospitals, schools and the long hallways of La Plaza Mall. Cooling removes water from the air, and vents send that drier air straight at your face. Going from a hot parking lot into a freezing office several times a day leaves many people with gritty, tired eyes by evening, even when the weather outside feels sticky.`,
      },
      {
        list: [
          `In the car, aim the dash vents at your chest or the windshield instead of your eyes.`,
          `At work, ask to move a desk out from under a ceiling diffuser, or angle a small deflector.`,
          `At night, set the bedroom fan or AC so it doesn’t blow across your pillow.`,
          `Take short breaks from screens and let your eyes close fully for a few blinks.`,
        ],
      },
      { h: 'Waiting in traffic and at the bridges' },
      {
        p: `Plenty of McAllen errands involve sitting in a car with the engine and AC running, whether it’s a drive-through line, school pickup or a wait at an international bridge into Reynosa. An idling car with dash vents on high is a small, very dry room. Point the airflow away from your face, put on sunglasses if the sun is low across the windshield, and remember that a bottle of drops left in a parked car in summer won’t stay within the label’s storage range.`,
      },
      { h: 'Sun and glare outdoors' },
      {
        p: `South Texas sun is strong much of the year, and glare off parking lots, pools and light-colored concrete makes people squint. Squinting goes with shallow, incomplete blinks, so the tear film gets less help just when the heat is working on it. Wraparound sunglasses and a hat brim make a real difference for anyone walking the trails at Quinta Mazatlán, coaching a team in the evening, or working outside on construction, landscaping or in citrus groves.`,
      },
      { h: 'Winter Texans and the dry months' },
      {
        p: `From December to February, McAllen’s weather is the reason thousands of winter visitors arrive in RVs and park models. Those are also the driest months by rainfall, each averaging about an inch or less. Days outside in a breeze, evenings in a small RV with the furnace or a space heater running on the cooler nights, and long drives down from the north all add up. Keep heaters pointed away from the couch and bed, and carry drops in a bag rather than leaving them in a hot or cold vehicle. If you’re traveling by air, our guide to [traveling with eye drops](/guides/traveling-with-eye-drops) covers the carry-on rules.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel names its use as: {uses}. The directions read: {directions}. It also cautions: {tip}.`,
      },
      {
        p: `The warning line: {warnings}. The storage line: {storage}. In a McAllen August, that upper limit is lower than the inside of a parked car by a wide margin, so keep the bottle indoors or in a bag you carry. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to McAllen' },
      {
        p: `Quell ships from Brentwood, Tennessee, to McAllen, Edinburg, Mission, Pharr and every other US address, including RV parks with a deliverable street address. Checkout is as a guest, with no account. Shipping runs {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised, so order with time to spare. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t need to send it back. Local information is on the [McAllen page](/eye-drops/mcallen-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops help with everyday dryness; they don’t explain it. An optometrist or ophthalmologist can examine your eyes and tell you what’s behind symptoms that keep returning. The label’s own limit: {stopUse} Eye pain, vision changes and sensitivity to light are reasons to call promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'How hot does McAllen get in the summer?',
        a: `NOAA’s 1991 to 2020 normals put August’s normal high at 99.6°F at McAllen Miller International Airport, with July at 98.5°F and June at 97.4°F.`,
      },
      {
        q: 'How much rain does McAllen get?',
        a: `About 22.2 inches in a normal year at the airport, by NOAA’s normals. September is the wettest month at 4.61 inches, and February the driest at 0.72.`,
      },
      {
        q: 'Why do my eyes feel dry in McAllen?',
        a: `Mostly because of air conditioning. With highs above 93°F from May through September, cooled air runs nearly everywhere, and it dries the eye’s surface, especially when a vent blows at your face.`,
      },
      {
        q: 'Does Quell ship to the Rio Grande Valley?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to McAllen, Edinburg, Mission, Harlingen and the rest of the Valley, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-clarksville-tn:
   * - https://data.rcc-acis.org/StnData (sid CKV, NOAA 1991-2020 monthly normals,
   *   the data behind NWS NOWData)
   *   (CLARKSVILLE OUTLAW AP, elev 550 ft: monthly precip sums to 47.21 in;
   *   May 4.90 wettest, Apr 4.55, Dec 4.36; Aug 2.90 driest; Jul high 88.5 F,
   *   Aug 88.7 F; Jan high 46.2 F, low 27.7 F; Dec low 31.0 F; snowfall missing)
   * - No relhum23 or wndspd23 row for Clarksville: no humidity or wind figures used.
   * Nashville has a guide (2026-11-15); this one is built on Clarksville's own
   * station, Fort Campbell, Austin Peay and the rivers.
   */
  {
    slug: 'dry-eye-relief-clarksville-tn',
    title: 'Dry eye relief in Clarksville, Tennessee',
    description:
      'Clarksville’s summer highs near 89°F keep AC running, and winter lows below freezing mean months of heat. NOAA’s numbers and dry eye relief for daily life.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Clarksville mostly comes down to indoor air. NOAA’s normals for Outlaw Field show July and August highs near 89°F, so air conditioning runs for months, and winter lows below freezing keep the heat on from December through February. Point vents away from your face, take breaks from screens, wear eye protection in the field, and use a lubricating drop as its label directs.`,
      },
      { h: 'Clarksville weather, from Outlaw Field' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Clarksville’s Outlaw Field, the municipal airport northeast of downtown at about 550 feet, describe a humid, well-watered Middle Tennessee year:`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 47.2 inches a year.`,
          `May is the wettest month at 4.90 inches, with April (4.55) and December (4.36) close behind.`,
          `August is the driest at 2.90 inches, and also the hottest, with a normal high of 88.7°F; July averages 88.5°F.`,
          `January’s normal high is 46.2°F and its normal low 27.7°F.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables don’t include a Clarksville station, so this guide doesn’t quote those figures. What the normals do show is a place with long, hot summers and real winters, which means climate control indoors for much of the year.`,
      },
      { h: 'Summer: air conditioning and late-season dry spells' },
      {
        p: `When August highs sit in the upper 80s and the month brings the least rain of the year, the AC barely shuts off. Cooling removes water from indoor air, and a vent blowing across your face or pillow speeds evaporation from the tear film. A few changes help:`,
      },
      {
        list: [
          `Turn bedroom vents or fans so the airflow doesn’t cross your face while you sleep.`,
          `On I-24 toward Nashville, aim the dash vents at your chest or the windshield.`,
          `If you work under a ceiling diffuser, ask about moving the desk or angling the vent.`,
          `Step outside or look out a window every so often during long screen sessions.`,
        ],
      },
      { h: 'Fort Campbell: field days, rotor wash and long drives' },
      {
        p: `For a lot of Clarksville families, daily life runs through Fort Campbell, just up US 41A on the Kentucky line. Field training means long hours outdoors in summer heat or winter wind, often in dust kicked up by vehicles and helicopter rotor wash. Wind and grit speed tear evaporation and make people rub their eyes. Wear the eye protection your unit issues and keep it on in the dust. Wash your hands before you touch your eyes or a dropper.`,
      },
      {
        p: `Anything that actually strikes or enters the eye, from a particle to a chemical splash, is a matter for medics or an eye doctor rather than a lubricating drop. Spouses and service members heading home on leave can read [traveling with eye drops](/guides/traveling-with-eye-drops) for the airport rules.`,
      },
      { h: 'Austin Peay, study sessions and screens' },
      {
        p: `Austin Peay State University brings thousands of students into classrooms, the library and dorm rooms that are heated or cooled most of the year. When you concentrate on a laptop or a page, you blink less often and less completely, and the tear film thins between blinks. A useful habit is to glance up at something across the room every so often and let a few slow blinks happen. Late-semester exams in December come with the heat running. [Dry eyes while studying for exams](/guides/dry-eyes-while-studying) has more ideas.`,
      },
      { h: 'Winter heat and the indoor dryness it brings' },
      {
        p: `From December through February, normal lows run at or below freezing at Outlaw Field. Heat pumps and gas furnaces warm cold air, and warming air lowers its relative humidity without adding any water. That’s why eyes can feel worse inside on a damp January day than they do outdoors. Keep a humidifier in the bedroom, keep space heaters pointed away from the couch, and don’t let the car heater blow across your face on the morning commute. Our [winter heating guide](/guides/winter-heating-and-dry-eyes) goes into more detail.`,
      },
      { h: 'On the Cumberland and the trails' },
      {
        p: `The Clarksville RiverWalk along the Cumberland, the trails at Dunbar Cave State Park and boat ramps on the Cumberland and Red rivers draw people outside in spring and fall. Sun on the water and a breeze across it are both drying. Polarized sunglasses cut glare, and a hat brim keeps the sun out of your eyes. Morning outings are usually gentler on the eyes than mid-afternoon ones.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line: {uses}. Its directions: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `Under warnings: {warnings}. For storage: {storage}. A bottle in a ruck, a car or a mailbox on an August afternoon can get hotter than that, so keep it in a cooler pocket and bring deliveries in. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Clarksville' },
      {
        p: `Quell ships from Brentwood, here in Middle Tennessee, to Clarksville, Sango, St. Bethlehem and any other US street address. Checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email. Even in state, we don’t promise a delivery date, so reorder with a few days of drops left. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Clarksville page](/eye-drops/clarksville-tn) or the [Tennessee page](/eye-drops/state/tennessee).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back, an eye exam is how you find out why; a drop can’t do that. Follow the label’s limit: {stopUse} Pain, changes in vision or an eye injury from training or work need prompt care. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Clarksville, TN get in winter?',
        a: `NOAA’s 1991 to 2020 normals for Outlaw Field put January’s normal low at 27.7°F and its normal high at 46.2°F. December’s normal low is 31.0°F.`,
      },
      {
        q: 'What is the rainiest month in Clarksville?',
        a: `May, at 4.90 inches in NOAA’s normals for Outlaw Field, followed by April at 4.55 inches. August is the driest month at 2.90 inches.`,
      },
      {
        q: 'Why do my eyes get dry in Clarksville?',
        a: `Mostly indoor air. Summer highs near 89°F keep air conditioning running, and winter lows below freezing keep heaters on, and both dry the air that reaches your eyes. Dust during field training adds to it.`,
      },
      {
        q: 'Can I order Quell to Clarksville, Tennessee?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Clarksville and the rest of Montgomery County with guest checkout and tracking by email. No delivery date is promised, even in state.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-santa-rosa-ca:
   * - https://data.rcc-acis.org/StnData (sid STS, NOAA 1991-2020 monthly normals,
   *   the data behind NWS NOWData)
   *   (SANTA ROSA SONOMA CO AP, elev 119 ft: monthly precip sums to 33.78 in;
   *   Dec 6.76, Jan 6.67, Feb 6.67; Jun 0.31, Jul 0.01, Aug 0.05, Sep 0.13;
   *   Aug high 84.1 F, low 51.9 F; Jul high 83.5 F, low 51.7 F; Sep high 83.4 F,
   *   low 49.6 F; Jan high 57.9 F, low 37.5 F; Dec low 36.9 F; snowfall missing)
   * - No relhum23 or wndspd23 row for Santa Rosa: no humidity or wind figures used.
   * Bay Area cities have guides; this one is built on Sonoma County's airport,
   * the dry season, the day-night swing and wine-country life.
   */
  {
    slug: 'dry-eye-relief-santa-rosa-ca',
    title: 'Dry eye relief in Santa Rosa, California',
    description:
      'Santa Rosa gets about a fifth of an inch of rain from June to September, and summer days swing over 30 degrees. NOAA’s numbers and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Santa Rosa follows the dry season. NOAA’s normals for the Sonoma County airport show almost no rain from June through September, 0.50 inches across all four months, with afternoons in the low 80s and nights near 50. Shield your eyes from sun and breeze, keep heaters and AC vents off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'Does it rain in Santa Rosa in the summer?' },
      {
        p: `Barely. NOAA’s 1991 to 2020 climate normals for Charles M. Schulz Sonoma County Airport, about 119 feet above sea level north of the city, divide the year into a wet winter and a long, nearly rainless summer:`,
      },
      {
        list: [
          `The monthly normals add up to about 33.8 inches of rain a year.`,
          `December (6.76 inches), January (6.67) and February (6.67) bring roughly 60 percent of it between them.`,
          `June averages 0.31 inches, July 0.01, August 0.05 and September 0.13.`,
          `August’s normal high is 84.1°F, but its normal low is only 51.9°F.`,
          `January runs from a normal high of 57.9°F to a normal low of 37.5°F.`,
        ],
      },
      {
        p: `NOAA’s humidity tables don’t list a Santa Rosa station, so there’s no humidity figure here. The rainfall pattern alone tells you that from late spring into fall, the landscape and the air above it steadily dry out.`,
      },
      { h: 'Foggy mornings, warm dry afternoons' },
      {
        p: `A Santa Rosa summer day often swings more than 30 degrees. In August the normal low is about 52°F and the normal high about 84°F, and the coastal fog that drifts in after dark usually burns off by late morning. That swing matters for your eyes: the cool, damp start feels comfortable, then the afternoon warms and dries, sometimes with a breeze through the vineyards. Long rides on the Joe Rodota Trail, hikes at Annadel State Park or a day on the Russian River are easier on the eyes early.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the bike and the trail; they block wind as well as glare.`,
          `Bring a hat with a brim to an afternoon outdoor tasting or a ballgame.`,
          `Rest your eyes in the shade now and then with a few slow, complete blinks.`,
          `Point the car’s AC vents away from your face on the drive back down Highway 101.`,
        ],
      },
      { h: 'Harvest season in the vineyards' },
      {
        p: `Grape harvest runs through the driest stretch of the year, with picking crews starting before dawn and winery cellars running long days. Dust from dirt roads and vineyard rows, sun, and wind are all in play, and so is the urge to rub tired, gritty eyes with dirty hands. Safety glasses keep dust and leaf debris out, and washing up before you touch your eyes keeps grit off the eye’s surface. Our guide for [outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers more of the daily routine.`,
      },
      { h: 'Smoke days' },
      {
        p: `Sonoma County residents know that late summer and fall can bring wildfire smoke. Smoke is irritating to the eyes, and the right response is to follow local air-quality guidance: stay inside with windows closed when you’re told to, and run filtration if you have it. Eye drops don’t filter anything. If your eyes burn, ache, or your vision changes after smoke exposure, see an eye doctor rather than relying on a bottle.`,
      },
      { h: 'Wet, chilly winters indoors' },
      {
        p: `Winter is the rainy season, but nights near 37°F in December and January mean heaters run in most homes. Warming cool air drops its relative humidity, and wall heaters, forced air and space heaters all send that drier air across the room. Keep a space heater pointed away from the couch, add a humidifier in the bedroom, and turn the thermostat down at night. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers placement.`,
      },
      { h: 'Screens at work and school' },
      {
        p: `Plenty of Santa Rosa work happens at a screen: county and hospital offices, wine-industry sales and logistics, and classes at Santa Rosa Junior College and Sonoma State up the road. Concentration slows blinking, and air conditioning or heat speeds evaporation between blinks. Glance at something across the room every so often and let your eyes close fully a few times.`,
      },
      { h: 'Quell’s label, in its own words' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. From its Drug Facts panel, the use is: {uses}. The directions: {directions}. The panel adds: {tip}.`,
      },
      {
        p: `Its warning: {warnings}. Storage: {storage}. A car parked at a trailhead on an 84-degree afternoon can climb above that, so keep the bottle in a daypack in the shade. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Santa Rosa' },
      {
        p: `We ship from Brentwood, Tennessee, to Santa Rosa, Rohnert Park, Windsor, Sebastopol and the rest of the US. Checkout takes no account. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, and since no delivery date is promised, order a little early. If you don’t open a bottle, you can get a refund within {returnDays} days of delivery without sending it back. Find more on the [Santa Rosa page](/eye-drops/santa-rosa-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps returning is something to have examined. An optometrist or ophthalmologist can tell you what’s behind it, which a drop can’t. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more, and the [self-check](/self-check) can help you describe what you feel; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Does it rain in Santa Rosa in the summer?',
        a: `Hardly at all. NOAA’s normals for the Sonoma County airport show 0.01 inches in July and 0.05 in August, and only about half an inch from June through September combined.`,
      },
      {
        q: 'Why are my eyes dry in Santa Rosa?',
        a: `From late spring into fall, the air dries as the rain stops, and warm afternoons and breezes speed evaporation from the tear film. In winter, indoor heat does the same thing.`,
      },
      {
        q: 'How cold does Santa Rosa get at night?',
        a: `NOAA’s normals put December’s normal low at 36.9°F and January’s at 37.5°F at the airport. Even in August, nights average about 52°F.`,
      },
      {
        q: 'Does Quell deliver to Sonoma County?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Santa Rosa and the rest of Sonoma County with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-arlington-tx:
   * - https://data.rcc-acis.org/StnData (sid GKY, NOAA 1991-2020 monthly normals,
   *   the data behind NWS NOWData)
   *   (ARLINGTON MUNICIPAL AP, elev 590 ft: monthly precip sums to 36.19 in;
   *   Oct 4.72 wettest, May 4.33; Aug 1.68, Jul 1.70 driest; Aug high 96.1 F,
   *   Jul 95.9 F, Jun 91.6 F, Sep 89.3 F; Jan high 57.9 F, low 36.6 F;
   *   snowfall missing)
   * - No relhum23 or wndspd23 row for Arlington: no humidity or wind figures used.
   * Dallas and Fort Worth have their own guides; this one uses Arlington
   * Municipal and Arlington's own life.
   */
  {
    slug: 'dry-eye-relief-arlington-tx',
    title: 'Dry eye relief in Arlington, Texas',
    description:
      'Arlington’s July and August highs average about 96°F with the year’s least rain. NOAA’s figures from Arlington Municipal and everyday dry eye relief tips.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `In Arlington, dry eyes tend to peak in midsummer. NOAA’s normals for Arlington Municipal Airport put July and August highs near 96°F, and those months bring the least rain of the year, so people live in air conditioning and step out into hot sun. Keep vents off your face, wear sunglasses outdoors, take screen breaks, and use a lubricating drop as its label directs.`,
      },
      { h: 'Arlington’s own weather station' },
      {
        p: `Arlington Municipal Airport, on the south side of the city at about 590 feet, has its own NOAA normals for 1991 to 2020. Here’s what they show:`,
      },
      {
        list: [
          `About 36.2 inches of precipitation a year when the monthly normals are added up.`,
          `October is the wettest month at 4.72 inches, followed by May at 4.33.`,
          `August (1.68 inches) and July (1.70) are the driest.`,
          `Normal highs reach 91.6°F in June, 95.9°F in July and 96.1°F in August, and stay near 89 in September.`,
          `January has a normal high of 57.9°F and a normal low of 36.6°F.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables don’t have a row for this station, so no humidity figure is quoted here. The pairing that stands out is simple: the hottest months are also the driest by rainfall.`,
      },
      { h: 'Summer in the entertainment district' },
      {
        p: `Arlington’s biggest summer days happen around the entertainment district: ballgames, concerts, and long afternoons at the theme park off I-30. That means hours in direct sun on hot pavement, then a blast of cold air in a climate-controlled stadium or a car. Squinting in glare shortens blinks, and moving air from vents, misting fans or a breeze speeds evaporation from the tear film.`,
      },
      {
        list: [
          `Wear sunglasses in the parking lots and lines; glare off concrete is intense in July.`,
          `In the car after the game, point the dash vents at the windshield before you crank them up.`,
          `Rest your eyes for a minute in shade between rides or innings with a few slow blinks.`,
          `Don’t leave a bottle of drops in the car during a game; a closed car in August gets far hotter than the label’s storage range.`,
        ],
      },
      { h: 'Commutes on I-20, I-30 and Highway 360' },
      {
        p: `Sitting between Dallas and Fort Worth, Arlington is a commuting city, and long drives with the AC on high are a daily source of dry air. Dash vents usually point right at the driver’s face. Angle them toward your chest and wear sunglasses when the sun is low over the highway. For the drive home after dark, see [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night).`,
      },
      { h: 'Plant floors, warehouses and campus' },
      {
        p: `Arlington’s big employers include auto assembly, warehouses and distribution along the highways, and the University of Texas at Arlington. Plant and warehouse shifts mean fans, dust and long hours in safety glasses. UTA students and office workers face the opposite problem: hours of close focus on screens in cold classrooms and cubicles. In both cases, the habits that help are similar: keep air movement off your face, look up and away every so often, and wash your hands before you touch your eyes.`,
      },
      { h: 'Spring and fall outdoors' },
      {
        p: `October is Arlington’s wettest month and May its second, so spring and fall afternoons are the most comfortable times to be outdoors, along the trails at River Legacy Parks or on Lake Arlington. Sun on the water and the wind across it still dry the eyes, so polarized sunglasses and a hat are worth bringing.`,
      },
      { h: 'Winter cold snaps' },
      {
        p: `Winters here are short, but January’s normal low of 36.6°F means heating runs on cold nights and during the occasional hard freeze. Warmed indoor air has lower relative humidity. Keep space heaters pointed away from beds and couches, and run a humidifier in the bedroom if mornings start with gritty eyes.`,
      },
      { h: 'What’s on the Quell label' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel says it is: {uses}. The directions: {directions}. And a reminder from the panel: {tip}.`,
      },
      {
        p: `The warning: {warnings}. The panel’s storage line: {storage}. Every item on the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Arlington' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Arlington, Grand Prairie, Mansfield and every other US address. You check out as a guest. Shipping costs {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised, so place your order before you’re down to the last few drops. Unopened bottles can be refunded within {returnDays} days of delivery, with no need to send them back. The [Arlington page](/eye-drops/arlington-tx) and the [Texas page](/eye-drops/state/texas) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Recurring dryness has causes that an eye doctor can identify. The label is clear about where a drop ends: {stopUse} Pain, vision changes or an injury on the job call for prompt care. Read [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Arlington, Texas get in the summer?',
        a: `NOAA’s 1991 to 2020 normals for Arlington Municipal Airport put the normal high at 96.1°F in August and 95.9°F in July.`,
      },
      {
        q: 'What is the wettest month in Arlington, TX?',
        a: `October, with 4.72 inches in NOAA’s normals for Arlington Municipal Airport. May is next at 4.33, and July and August are the driest months.`,
      },
      {
        q: 'Why are my eyes dry in Arlington in the summer?',
        a: `July and August are both the hottest and the driest months by rainfall, so air conditioning runs constantly and glare is strong outdoors. Both speed evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Arlington, Texas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Arlington and the rest of the Dallas-Fort Worth area with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-ontario-ca:
   * - https://data.rcc-acis.org/StnData (sid ONT, NOAA 1991-2020 monthly normals,
   *   the data behind NWS NOWData)
   *   (ONTARIO INTL AP, elev 924 ft: monthly precip sums to 11.64 in; Feb 3.07,
   *   Jan 2.57, Dec 1.89; May 0.30, Jun 0.02, Jul 0.05, Aug 0.03, Sep 0.10,
   *   Oct 0.41; Aug high 94.9 F, Jul 93.8 F, Sep 91.3 F; Jan high 67.7 F,
   *   low 44.6 F; Dec high 66.9 F, low 43.6 F; snowfall missing)
   * - No relhum23 or wndspd23 row for Ontario: no humidity or wind figures used.
   * Riverside is being written by another writer today; this one is built on
   * Ontario's airport, warehouses and commutes.
   */
  {
    slug: 'dry-eye-relief-ontario-ca',
    title: 'Dry eye relief in Ontario, California',
    description:
      'Ontario gets about 11.6 inches of rain a year and almost none from May to October. NOAA’s figures and dry eye relief for warehouse shifts, commutes and heat.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Ontario starts with how little rain falls. NOAA’s normals for Ontario International Airport add up to about 11.6 inches a year, and May through October together average under an inch, with August highs near 95°F. Keep dust and vent air out of your eyes at work and in the car, wear sunglasses, and use a lubricating drop as its label directs.`,
      },
      { h: 'How much rain does Ontario get?' },
      {
        p: `Not much. NOAA’s 1991 to 2020 climate normals for Ontario International Airport, at about 924 feet on the valley floor below the San Gabriel Mountains, show a semi-arid year with all of its rain packed into winter:`,
      },
      {
        list: [
          `The monthly normals add up to about 11.6 inches of rain a year.`,
          `February is the wettest month at 3.07 inches, then January at 2.57 and December at 1.89.`,
          `June averages 0.02 inches, July 0.05, August 0.03 and September 0.10.`,
          `Normal highs reach 93.8°F in July, 94.9°F in August and 91.3°F in September.`,
          `Winter is mild: January’s normal high is 67.7°F and its normal low 44.6°F.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables don’t include Ontario, so this page doesn’t quote figures for either. The rainfall alone says plenty: for about half the year, the ground, the air and the dust are dry.`,
      },
      { h: 'Warehouse and logistics shifts' },
      {
        p: `Ontario sits in a region full of warehouses and distribution centers, and many people here work in buildings that stretch for blocks. Dock doors open to hot, dusty air, forklifts and fans keep it moving, and cardboard and shrink-wrap shed fine particles. Pickers and loaders spend shifts scanning labels and checking screens. All of it works against the tear film.`,
      },
      {
        list: [
          `Wear the safety glasses your site provides; they also cut the airflow from big floor fans.`,
          `Don’t stand in the direct path of a fan or a dock door draft when you have a choice.`,
          `Wash dust off your hands before you touch your eyes or use drops on break.`,
          `Keep your bottle in a locker or lunch bag, not on a hot dashboard in the lot.`,
        ],
      },
      {
        p: `If something lands in your eye on the job, use your site’s first aid process. That’s not what a lubricating drop is for. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers yard and dock work in more detail.`,
      },
      { h: 'Freeway commutes on the 10, the 15 and the 60' },
      {
        p: `Long drives across the Inland Empire are a fact of life, often with the AC on high and the sun in your eyes. Dash vents aimed at your face dry your eyes as they cool you. Point them at your chest or the windshield, wear sunglasses for the low sun on the westbound morning or eastbound evening drive, and blink fully at red lights.`,
      },
      { h: 'Santa Ana days and Mount Baldy trips' },
      {
        p: `In fall and winter, Santa Ana winds can push dry air from the deserts across the valley toward the coast. On those days, wraparound sunglasses help outdoors, and it’s worth keeping the car windows up. In winter, the snow on Mount San Antonio, known locally as Mount Baldy, pulls people up the mountain for a day in cold, bright wind; goggles cover more of the eye than sunglasses do. Our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more.`,
      },
      { h: 'Air travel through ONT' },
      {
        p: `Ontario International Airport is close to home for a lot of residents, and a long flight in a dry cabin is hard on the eyes. Bring drops in your carry-on following TSA’s liquids rule, and see [traveling with eye drops](/guides/traveling-with-eye-drops) for packing details.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the use as: {uses}. The directions: {directions}. And this note on handling: {tip}.`,
      },
      {
        p: `The panel’s warning: {warnings}. Storage: {storage}. Inland Empire summers push a parked car well past that upper limit, so carry the bottle with you. The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Ordering Quell to Ontario' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Ontario, Upland, Rancho Cucamonga, Chino and any other US address. Checkout is as a guest. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order ahead. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Ontario page](/eye-drops/ontario-ca) and the [California page](/eye-drops/state/california) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry or irritated for weeks, an optometrist or ophthalmologist can examine them and find the reason. The label sets its own boundary: {stopUse} Eye pain, vision changes and injuries on the job need prompt care. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Ontario, California get?',
        a: `About 11.6 inches in a normal year at Ontario International Airport, by NOAA’s 1991 to 2020 normals. February is the wettest month at 3.07 inches, and June through September average almost nothing.`,
      },
      {
        q: 'Why are my eyes dry in the Inland Empire?',
        a: `Very little rain falls from May to October, summer highs push into the 90s, and warehouse dust, fans and long AC commutes all speed evaporation from the tear film.`,
      },
      {
        q: 'How hot does Ontario, CA get in August?',
        a: `NOAA’s normals put August’s normal high at 94.9°F at Ontario International Airport, with July at 93.8°F and September at 91.3°F.`,
      },
      {
        q: 'Does Quell ship to Ontario, CA?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Ontario and the rest of the Inland Empire with guest checkout and tracking by email. There’s no promised delivery date.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-melbourne-fl:
   * - https://data.rcc-acis.org/StnData (sid MLB, NOAA 1991-2020 monthly normals,
   *   the data behind NWS NOWData)
   *   (MELBOURNE INTERNATIONAL AIRPORT, elev 22 ft: monthly precip sums to
   *   50.79 in; Sep 7.63, Jun 7.10, Aug 6.67, Jul 6.50; Feb 1.98 driest, Apr 2.29,
   *   Dec 2.36; Jul high 89.7 F, Aug 89.3 F; Jan high 71.8 F, low 51.7 F;
   *   snowfall missing)
   * - No relhum23 or wndspd23 row for Melbourne: no humidity or wind figures used.
   * Orlando and Tampa have guides; this one is built on the Space Coast:
   * the beaches, the Indian River Lagoon, launches and the dry season.
   */
  {
    slug: 'dry-eye-relief-melbourne-fl',
    title: 'Dry eye relief in Melbourne, Florida',
    description:
      'Melbourne’s dry season runs from fall to spring, with February averaging under 2 inches of rain. NOAA’s figures and dry eye relief for Space Coast life.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Melbourne follows the Space Coast’s two seasons. NOAA’s normals show a rainy summer, with June through September each above 6 inches, and a drier winter and spring, when February averages under 2. Beach wind, glare off the lagoon and air conditioning are the usual culprits. Wear wraparound sunglasses, keep vents off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'Melbourne’s rainy and dry seasons' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Melbourne International Airport, about 22 feet above sea level just west of the Indian River Lagoon, show how sharply the year divides:`,
      },
      {
        list: [
          `The monthly normals add up to about 50.8 inches of rain a year.`,
          `September is the wettest month at 7.63 inches, then June at 7.10, August at 6.67 and July at 6.50.`,
          `February is the driest at 1.98 inches, with April (2.29) and December (2.36) next.`,
          `July’s normal high is 89.7°F and August’s 89.3°F.`,
          `January runs from a normal high of 71.8°F to a normal low of 51.7°F.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables don’t list Melbourne, so no figures for either appear here. The rainfall shows the pattern most locals already feel: steamy, stormy summers and a drier stretch from late fall into spring.`,
      },
      { h: 'Beach days: wind, salt and glare' },
      {
        p: `From Melbourne Beach to Indialantic and Sebastian Inlet, a day on the sand means steady wind off the ocean, bright sun and glare off water and white sand. Moving air speeds evaporation from the tear film, and squinting into brightness shortens each blink. Salt spray and sunscreen add their own sting if they get into your eyes.`,
      },
      {
        list: [
          `Wear wraparound sunglasses; they block side wind that flat lenses let through.`,
          `Keep sunscreen on the forehead from running into your eyes by applying it well above the brows.`,
          `Rinse salty, sandy hands with fresh water before you touch your eyes or a dropper.`,
          `Sit facing away from the wind when you read or look at a phone.`,
        ],
      },
      { h: 'Watching a launch' },
      {
        p: `Rocket launches from Cape Canaveral are a Space Coast tradition, and people line the causeways and beaches to watch. That usually means waiting outside for a long time in wind and sun, then staring up without blinking much while the rocket climbs. Bring sunglasses for the wait, blink deliberately once the rocket fades from view, and never look directly at the sun while tracking a daytime launch.`,
      },
      { h: 'On the Indian River Lagoon' },
      {
        p: `Kayaking, fishing and boating on the lagoon add the same combination of wind and glare, often for hours at a stretch. Polarized sunglasses reduce glare off flat water, a hat brim shades your eyes, and a strap keeps your glasses on when you lean over the side. Keep drops in a dry bag out of the sun; a hatch or a car at the boat ramp can get hotter than the label’s storage range.`,
      },
      { h: 'Air conditioning and aerospace screens' },
      {
        p: `With highs near 90°F from June into September, AC runs nearly year-round in homes, cars and the offices and labs of the area’s aerospace and defense employers. Engineers, technicians and students at Florida Tech spend long hours focused on screens, and concentration slows blinking. Point desk fans and vents away from your face, look away from the screen every so often, and blink fully. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why that helps.`,
      },
      { h: 'The dry season and winter visitors' },
      {
        p: `From November to May, rainfall drops off and many snowbirds and visiting family arrive. Windows go open on cool mornings, and long beach walks fill the afternoons. It’s a pleasant stretch, but it’s also when eyes that were fine all summer can feel dry outdoors. Wear sunglasses for afternoon walks and keep drops in a bag rather than in the car.`,
      },
      { h: 'What’s on Quell’s Drug Facts panel' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its use, per the panel: {uses}. Directions: {directions}. A handling note: {tip}.`,
      },
      {
        p: `The warning reads: {warnings}. On storage: {storage}. A car at the beach lot in July can get much hotter than that, so carry the bottle in a shaded bag. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Melbourne' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Melbourne, Palm Bay, Satellite Beach, Indialantic and every other US address. Checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email. No delivery date is promised, and summer storms can slow things, so order with time to spare. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Melbourne page](/eye-drops/melbourne-fl) and the [Florida page](/eye-drops/state/florida) have local information.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps coming back, or that drops don’t help, is worth an eye exam; only an eye doctor can find the reason. The label says: {stopUse} Pain, changes in vision, or anything that scratched or struck the eye needs care promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainiest month in Melbourne, Florida?',
        a: `September, at 7.63 inches in NOAA’s 1991 to 2020 normals for Melbourne International Airport. June is close behind at 7.10 inches, and February is the driest month at 1.98.`,
      },
      {
        q: 'Can I keep eye drops in a beach bag in Florida?',
        a: `Yes, as long as the bag stays shaded and cool. Quell’s storage line reads: {storage}. A bag in direct sun or a closed car at the beach lot can get hotter than that.`,
      },
      {
        q: 'Why do my eyes get dry watching a rocket launch?',
        a: `Launch viewing means a long wait in wind and sun, then staring up without blinking much. Both speed evaporation from the tear film. Sunglasses and deliberate blinking afterward help.`,
      },
      {
        q: 'Does Quell ship to Melbourne, Florida?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Melbourne, Palm Bay and the rest of Brevard County with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'buying-eye-drops-for-your-employees',
    title: 'Buying eye drops for your employees',
    description:
      'Buying Quell for a team: guest checkout, up to 10 bottles per order to one address, free shipping on {freeBottles} or more, and a receipt for your books.',
    category: 'ordering',
    addedOn: '2026-11-18',
    body: [
      {
        p: `You can buy Quell for your employees through the same guest checkout anyone uses. Each order holds up to 10 bottles and ships to one address, orders of {freeBottles} or more bottles ship free, and the confirmation email serves as the receipt. There are no bulk discounts, business accounts or promo codes, so the price per bottle is the same whether you order for one person or a whole floor.`,
      },
      { h: 'Before you order: offer it, don’t assign it' },
      {
        p: `Eye drops are personal. A bottle belongs to one person, and the decision to use it belongs to that person too. A short note to the team (“we’re stocking lubricating eye drops for anyone who wants a bottle; reply if you’d like one”) gets you a head count and lets people opt out without explaining why.`,
      },
      {
        p: `Include two things from the label in that note so people can decide for themselves. Quell’s warning reads: {warnings}. And the label doesn’t give directions for contact lens wearers or for using it alongside other eye drops; anyone in either situation should check with their eye doctor or pharmacist first. Never hand a bottle to someone under 18 on the company’s behalf, since the label’s directions and our checkout are for adults.`,
      },
      { h: 'How many bottles to buy' },
      {
        p: `Order one bottle per person who said yes, plus a spare or two for new hires and for anyone who loses theirs. Each bottle is {size}, and the directions say: {directions}. How quickly an individual goes through a bottle depends on how they use it, so it’s more practical to reorder as people ask than to guess at a year’s supply.`,
      },
      {
        list: [
          `Up to 10 bottles fit in a single order; for more, place a second order.`,
          `Orders of {freeBottles} or more bottles ship free; smaller orders pay {shipping} shipping.`,
          `Prices are set per bottle with no quantity tiers, so splitting a big order into two costs the same in product as one.`,
        ],
      },
      { h: 'One shipping address per order' },
      {
        p: `Checkout has a single shipping address, and there’s no separate company-name field. For an office delivery, put the person who will receive it in the name fields and use the “Apt, suite” line for the suite, floor or department. A front desk or mailroom that knows a box is expected is less likely to leave it on a loading dock.`,
      },
      {
        p: `For a remote team, each home address needs its own order. That also means each order has its own confirmation and its own tracking email. Ask employees before you use their home addresses for anything, and keep the list wherever your company keeps other staff contact details, not in a personal spreadsheet.`,
      },
      { h: 'Paying, receipts and records' },
      {
        p: `Checkout takes payment when you place the order; there’s no invoicing or billing on terms. Use whatever card your company issues for purchases, and enter an email address that accounting can reach, such as a shared purchasing inbox, so the receipt doesn’t end up buried in one person’s mail.`,
      },
      {
        list: [
          `The confirmation email lists the order number, each item with quantity and price, the subtotal, shipping and total, and the shipping address.`,
          `Forward it to accounts payable or attach it to the expense report right away.`,
          `The [track your order](/orders) page finds an order with its number and the checkout email address.`,
          `Our guide to [getting a receipt for your Quell order](/guides/getting-a-receipt-for-your-order) explains what to do if the email goes missing.`,
        ],
      },
      { h: 'What we don’t offer for business orders' },
      {
        p: `It’s worth knowing up front, so nobody wastes time hunting for a code. We don’t have business pricing, volume discounts or promo codes of any kind, and there’s no subscription or standing order. After an order, the buyer gets one reminder email about reordering, and that’s all. Every order is placed and paid for individually, by someone 18 or older, for delivery inside the United States.`,
      },
      { h: 'Handing out the bottles' },
      {
        p: `Give each person a sealed carton rather than opening anything at the office. A sticky note with a name on the outside of the carton keeps bottles from getting mixed up. Share the label’s storage line, {storage}, because desk drawers near a sunny window or a car in the parking lot can drift outside that range. Point people to the [Drug Facts page](/drug-facts) for the full panel, including this caution: {tip}.`,
      },
      {
        p: `Don’t set up a shared “office bottle.” One dropper used by several people defeats the point of that caution, and it isn’t how the product is meant to be used. If you’re also building a first aid kit, our guide to [eye drops for an office first aid kit](/guides/eye-drops-for-an-office-first-aid-kit) covers how that’s different from a gift to each employee.`,
      },
      { h: 'If you ordered too many, or something went wrong' },
      {
        p: `Leftover bottles that are still unopened can be refunded within {returnDays} days of delivery, and you don’t need to send them back. If a box arrives damaged, with the wrong item, or with a broken seal on a bottle, contact us and we’ll replace it. Call {phone}, {hours}, or use the details on the [contact page](/about#contact). Keep the order number handy; it’s on the confirmation email.`,
      },
      { h: 'Planning a larger supply' },
      {
        p: `If you’re thinking about stocking a break room for the year, our guide to [buying eye drops in bulk](/guides/buying-eye-drops-in-bulk) covers expiration dates, storage and pacing purchases. For most teams, the simplest plan is a first order sized to the people who opted in and a reorder when the spares run out.`,
      },
    ],
    faq: [
      {
        q: 'Can I buy eye drops for my employees?',
        a: `Yes. Use guest checkout, enter the office or employee’s address, and pay by card. Each order holds up to 10 bottles to one address, and {freeBottles} or more bottles ship free.`,
      },
      {
        q: 'Do you offer a business discount on eye drops?',
        a: `No. There are no business prices, volume discounts or promo codes. Every buyer pays the same per-bottle price, and the only shipping break is free shipping on {freeBottles} or more bottles.`,
      },
      {
        q: 'Can I ship one order of eye drops to several office locations?',
        a: `No. Each order goes to a single shipping address, so place a separate order for each office or remote employee. Each order gets its own confirmation email and tracking.`,
      },
      {
        q: 'Can my company get a receipt for an eye drop order?',
        a: `Yes. The confirmation email is the receipt, listing items, quantities, subtotal, shipping and total. Use a shared purchasing inbox at checkout so accounting receives it directly.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-18 for fsa-asked-for-receipt-for-eye-drops:
   * - https://www.irs.gov/publications/p969 (Health FSAs: "You must provide the
   *   health FSA with a written statement from an independent third party stating
   *   that the medical expense has been incurred and the amount of the expense.
   *   You must also provide a written statement that the expense hasn't been paid
   *   or reimbursed under any other health plan coverage." Cards: "If the use of
   *   these cards meets certain substantiation methods, you may not have to
   *   provide additional information to the health FSA." OTC: "Expenses incurred
   *   for over-the-counter medicine (whether or not prescribed) ... are
   *   considered medical care and are considered a covered expense.")
   * - https://www.irs.gov/publications/p502 (fetched; not quoted here because its
   *   rule on non-prescribed drugs is about the tax deduction, not FSAs)
   */
  {
    slug: 'fsa-asked-for-receipt-for-eye-drops',
    title: 'FSA asked for a receipt for eye drops?',
    description:
      'Your FSA wants proof of what you bought. What IRS Publication 969 requires, what a Quell receipt shows, and where to find it so you can answer fast.',
    category: 'ordering',
    addedOn: '2026-11-18',
    body: [
      {
        p: `If your FSA asks for a receipt for eye drops, it needs proof of what you bought. IRS Publication 969 says a health FSA must get a written statement from an independent third party showing the expense was incurred and its amount. For a Quell order, the confirmation email is that itemized receipt. Save it as a PDF and upload it through your plan’s claim portal before the deadline in the request.`,
      },
      { h: 'Why your FSA is asking' },
      {
        p: `Plan administrators call this substantiation. Publication 969 sets two requirements for a health FSA reimbursement: a statement from an independent third party (the seller) that the expense happened and how much it was, and your own statement that the expense hasn’t been paid or reimbursed by any other health coverage. The second part is usually a checkbox in the claim form.`,
      },
      {
        p: `If you paid with an FSA debit card, Publication 969 says you may not have to provide more information when the card use meets certain substantiation methods. When a purchase isn’t covered by one of those methods, the plan has to ask you for the paperwork, and the request can arrive weeks after a card payment that seemed to go through fine. It isn’t an accusation; it’s the plan doing what the IRS rules require.`,
      },
      {
        p: `The eye drops themselves are a covered category. Publication 969 states that over-the-counter medicine, whether or not prescribed, is considered medical care and a covered expense for a health FSA. Our guide to [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) has the background.`,
      },
      { h: 'What an itemized receipt shows' },
      {
        p: `A card statement isn’t enough because it shows only a merchant name and an amount, not what you bought. An itemized receipt fills that gap. The confirmation email from a Quell order includes:`,
      },
      {
        list: [
          `The seller, {company}.`,
          `The order number and the date of the order.`,
          `The product by name, with the quantity and the price of each line.`,
          `The subtotal, the shipping charge and the total.`,
          `The address the order shipped to.`,
        ],
      },
      {
        p: `Plans write their own checklists on top of the IRS rule, and some also ask whose expense it was or want the patient’s name. Read the request letter or portal message carefully and answer each item it lists.`,
      },
      { h: 'Where to find your Quell receipt' },
      {
        list: [
          `Search your inbox for “Quell.” The subject line reads “Your Quell order #… is confirmed.” Check spam, promotions and archived folders too.`,
          `Look in the inbox of whatever email address you typed at checkout; that’s where it went, even if you usually use another account.`,
          `If you have the order number, the [track your order](/orders) page will find the order using that number and the checkout email.`,
          `Still stuck? Call {phone}, {hours}, with the name, email and approximate date of the order.`,
        ],
      },
      {
        p: `Our guide to [getting a receipt for your Quell order](/guides/getting-a-receipt-for-your-order) covers lost receipts in more detail.`,
      },
      { h: 'How to answer the request, step by step' },
      {
        list: [
          `Note the deadline in the request, and whether it says anything about your card’s status.`,
          `Open the confirmation email and save or print it as a PDF; a screenshot that cuts off the totals may be rejected.`,
          `If the order included other items, mark the eye drop lines so the reviewer can find them.`,
          `Upload the PDF in your FSA portal or app against the specific transaction it asks about.`,
          `Complete the statement that the expense wasn’t reimbursed anywhere else.`,
          `Keep a copy with your other health receipts in case the plan asks again.`,
        ],
      },
      { h: 'If the reviewer isn’t sure what Quell is' },
      {
        p: `Brand names don’t always tell a reviewer what a product does. If a claim comes back asking what the item is, a printout or PDF of our [Drug Facts page](/drug-facts) shows that Quell is an over-the-counter lubricating eye drop. Its Uses line reads: {uses}. Attaching that page alongside the receipt usually answers the question. If the plan still declines, ask the administrator which rule it’s applying and whether a different document would satisfy it.`,
      },
      { h: 'Shipping, deadlines and plan rules' },
      {
        p: `Whether shipping is reimbursable, how long you have to submit, and whether there’s a grace period or carryover are all set by your plan, within IRS limits. Those questions are covered in [how to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) and [FSA carryover and grace period](/guides/fsa-carryover-and-grace-period-for-eye-drops). When the guides and your plan documents differ, your plan administrator has the final word on your account.`,
      },
      { h: 'If you used an HSA instead' },
      {
        p: `HSAs work differently: you usually don’t send receipts to anyone at purchase time, but you keep them in case of questions later. If you’re not sure which kind of account your card draws from, check the card or the benefits portal. [Do I need to keep receipts for HSA eye drops?](/guides/do-i-need-to-keep-receipts-for-hsa-eye-drops) explains that side.`,
      },
    ],
    faq: [
      {
        q: 'Why did my FSA ask for a receipt for eye drops?',
        a: `IRS Publication 969 requires a health FSA to have a third-party statement showing the expense and its amount. When a card purchase can’t be substantiated another way, the plan asks you for the itemized receipt.`,
      },
      {
        q: 'What does an itemized receipt need to show for an FSA claim?',
        a: `At minimum, the seller, the date, what was bought and the amount. Quell’s confirmation email shows the seller, order number, date, items with quantity and price, shipping and total. Your plan may ask for more.`,
      },
      {
        q: 'Is a credit card statement enough for an FSA claim?',
        a: `Usually not, because a statement shows only the merchant and amount, not the item. Send the itemized receipt instead; for a Quell order, that’s the confirmation email.`,
      },
      {
        q: 'Where do I find my Quell receipt for my FSA?',
        a: `Search the inbox you used at checkout for “Quell”; the confirmation email is the receipt. If it’s gone, the order lookup page or a call to {phone} can help you find the order.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-lawyer',
    title: 'Christmas gifts for a lawyer',
    description:
      'Christmas gift ideas for a lawyer who reads for a living and lives at a screen: desk upgrades, court-day gear, comfort items, and when eye drops make sense.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Good Christmas gifts for a lawyer make long reading, screen and court days easier: a document stand, a quality pen, noise-canceling headphones, a sturdy rolling case for trial binders, or a desk lamp with warm light. If they’ve mentioned dry, tired eyes from document review, a bottle of lubricating eye drops can sit in the stocking. Ask about allergies first, and ship it early.`,
      },
      { h: 'What lawyers actually need at the end of the year' },
      {
        p: `December is busy in many practices. Year-end deals close, filing deadlines stack up before the holidays, and billing and annual reviews land on top of everything else. A lawyer’s gift wish list tends to lean practical: things that make the desk, the commute and the courtroom easier. Hours of reading drafts, contracts and discovery on a screen also mean fewer blinks and tired eyes by evening, which our guide on [dry eyes for lawyers and paralegals](/guides/dry-eyes-for-lawyers-and-paralegals) explains.`,
      },
      { h: 'Gifts for the desk' },
      {
        list: [
          `A document stand or copy holder that puts printed pages at screen height, so they aren’t bending over the desk.`,
          `A weighty, refillable pen for signing and margin notes.`,
          `A desk lamp with adjustable brightness and warm light for late reading.`,
          `A small desk humidifier for an office with dry winter heat.`,
          `A second monitor arm or a laptop riser, if they work from home.`,
          `A nice notebook for the handwritten lists most lawyers still keep.`,
        ],
      },
      { h: 'Gifts for court days and travel' },
      {
        list: [
          `A rolling case built for binders and exhibits.`,
          `A compact umbrella and a lint roller for the walk to the courthouse.`,
          `A power bank and short charging cable for long days in hallways with few outlets.`,
          `A packable garment bag for out-of-town depositions and hearings.`,
          `A refillable water bottle and a stash of snacks that don’t crinkle.`,
        ],
      },
      { h: 'Gifts that help them switch off' },
      {
        p: `Plenty of lawyers struggle to put work down. Noise-canceling headphones for the train, a membership to a museum or a climbing gym, tickets to a show, or a cooking class are all gifts that make room for something besides the docket. A good book that has nothing to do with law fits here too. For a lawyer who loves a project, a jigsaw puzzle or a model kit gives their eyes and mind a different kind of focus.`,
      },
      { h: 'Are eye drops a good gift for a lawyer?' },
      {
        p: `They can be, for someone who has told you their eyes feel dry or tired after long days. As a stocking stuffer or an add-on to a desk gift, a bottle says you noticed. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. A few things to check before you give it:`,
      },
      {
        list: [
          `The label’s warning reads: {warnings}. Ask quietly about egg or bird allergies.`,
          `The label doesn’t give directions for contact lenses or for use with other eye drops, so anyone who wears lenses or already uses another drop should ask their eye doctor or pharmacist first.`,
          `The directions are: {directions}. Each bottle is {size}, small enough for a desk drawer or briefcase pocket.`,
          `Dryness that won’t go away, or eyes that hurt, needs an eye doctor rather than a gift.`,
        ],
      },
      { h: 'Gifts for a law student' },
      {
        p: `Law students in December are deep in outlines and finals. They need the same things as practicing lawyers, on a smaller budget: highlighters in several colors, a reading stand, a good backpack, coffee or tea, quiet headphones for the library, and food that doesn’t require cooking. A gift card for a meal near campus goes a long way during exam week. Our guide to [dry eyes while studying for exams](/guides/dry-eyes-while-studying) has tips you could pass along with a bottle.`,
      },
      { h: 'Gifts from clients and colleagues' },
      {
        p: `If you’re a client, opposing party or vendor rather than family or a friend, think about appearances. Some lawyers, especially those working for courts or government agencies, have rules about the gifts they can accept, and many firms have their own policies. A handwritten card, a contribution to a cause they care about, or something modest the whole office can share is usually the safer choice. When in doubt, ask the office manager what’s appropriate.`,
      },
      { h: 'Sending it to the firm or to their home' },
      {
        p: `A firm’s front desk or mailroom handles plenty of packages, but in late December offices close for days at a time, and packages can sit. Shipping to a home address is usually more reliable for a personal gift. Checkout has one shipping address per order and no gift-wrap or gift-message option; to wrap a bottle yourself, ship it to your own address. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through whose details go where.`,
      },
      { h: 'Timing and ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses in the US. We don’t promise a delivery date, so order early in December rather than days before Christmas. Shipping is {shipping}, and {freeBottles} or more bottles ship free, which can work if you’re buying for a few people. The buyer must be 18 or older. If a bottle goes unopened, it can be refunded within {returnDays} days of delivery without being sent back. When you’re ready, [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a lawyer for Christmas?',
        a: `Practical items that ease long reading and court days work well: a document stand, a refillable pen, noise-canceling headphones, a rolling case or a warm desk lamp. Experiences that help them unplug are welcome too.`,
      },
      {
        q: 'Are eye drops a good gift for a lawyer?',
        a: `They can be, if the lawyer has mentioned dry or tired eyes from screen work. Ask about egg or bird allergies first, since Quell’s label carries that caution, and about contact lenses or other drops.`,
      },
      {
        q: 'What is a good Christmas gift for a law student?',
        a: `Things that help during finals: highlighters, a reading stand, a quiet pair of headphones, coffee, and meal gift cards near campus. Small, useful and consumable is the theme.`,
      },
      {
        q: 'Should I send a lawyer’s gift to the firm or their home?',
        a: `For a personal gift, home is usually safer, because many offices close for stretches in late December and packages can sit in a mailroom. A gift meant for the whole office can go to the firm.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-college-professor',
    title: 'Christmas gifts for a college professor',
    description:
      'Christmas gifts for a college professor during grading season: thoughtful notes, books, desk comforts, and when eye drops fit. Plus timing and campus etiquette.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `A good Christmas gift for a college professor is small, useful or personal: a handwritten thank-you note, a book in their field, a quality pen for grading, a warm desk lamp, or good coffee. If you’re their student, wait until grades are posted. For a professor who’s mentioned tired, dry eyes from grading and screens, a bottle of lubricating eye drops can be a thoughtful add-on.`,
      },
      { h: 'The season from a professor’s side' },
      {
        p: `December is usually the heaviest month of the academic year: final exams, term papers, project reviews, then grades due on a tight deadline. Many professors spend days reading student work on screens, in offices with dry heat, and they blink less while they concentrate. Then there are recommendation letters, committee reports and next semester’s syllabus. Gifts that respect that crunch, or that help them recover from it, tend to land well.`,
      },
      { h: 'Is it appropriate to give a professor a Christmas gift?' },
      {
        p: `From family, friends and colleagues, of course. From students, timing matters. A gift while grades are still open can look like an attempt to influence them, even when it isn’t, and some schools have policies on gifts to faculty. The cleanest approach is to wait until final grades are posted, or to give something with no real cash value, like a card. A sincere note about what a class meant to you is the gift many professors keep for years.`,
      },
      { h: 'Ideas for the office and the grading pile' },
      {
        list: [
          `A pack of smooth gel pens in a few colors for comments.`,
          `A document stand that holds papers upright beside the screen.`,
          `A desk lamp with dimmable, warm light for late reading.`,
          `A small humidifier for an office with radiator or forced-air heat.`,
          `A sturdy mug and a bag of coffee or loose tea from a local roaster.`,
          `A plant that tolerates a north-facing office window.`,
        ],
      },
      { h: 'Ideas for after the semester ends' },
      {
        list: [
          `A recently published book in their field, or a novel completely outside it.`,
          `Tickets to a concert, play or museum exhibition over winter break.`,
          `A gift card for a restaurant near campus.`,
          `Good gloves or a scarf for the walk across a cold quad.`,
          `A packable tote for conference travel in the spring.`,
        ],
      },
      { h: 'Are eye drops a good gift for a professor?' },
      {
        p: `For a professor who has said their eyes feel dry or tired after grading marathons, yes, as a modest extra. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Each bottle is {size}, small enough for a desk drawer or a laptop bag. Its Uses line: {uses}.`,
      },
      {
        p: `Check a few things first. The label warns: {warnings}. It also doesn’t give directions for contact lens wearers or for use alongside other eye drops; people in either group should check with their eye doctor or pharmacist. And eye drops are a personal gift, better suited to a colleague or family member who has brought up the topic, rather than a student gift to someone they barely know. Our guide on [whether eye drops make a good gift](/guides/are-eye-drops-a-good-gift) talks through the etiquette.`,
      },
      { h: 'Gifts from a department or a lab group' },
      {
        p: `Graduate students and lab members often chip in for an advisor. Group gifts work well when they’re shared or experiential: a nice lunch for the lab, a framed photo from fieldwork, a book everyone signs. If you’re adding eye drops to a group basket, include a note that makes it clear the gift is about grading season, not a comment on how they look.`,
      },
      { h: 'Can I ship a gift to a professor’s campus office?' },
      {
        p: `You can, but campus mail can be slow in December, and many buildings close or run reduced hours over winter break. A package that arrives after a professor has left for the holidays may sit in a department mailroom until January. Shipping to a home address, or delivering a gift in person before the last day of finals, is more reliable. With Quell, each order goes to one address, and there’s no gift-message option; the details are in [how to send Quell as a gift](/guides/sending-quell-as-a-gift).`,
      },
      { h: 'Ordering and timing' },
      {
        p: `Quell ships from Brentwood, Tennessee, anywhere in the US. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order well before the end of the semester. The buyer must be 18 or older. An unopened bottle can be refunded within {returnDays} days of delivery, with no need to return it. If your professor teaches long days at a lectern, [dry eyes for teachers](/guides/dry-eyes-for-teachers) has ideas that carry over to a lecture hall.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a college professor?',
        a: `A sincere thank-you note, a book, good pens for grading, a desk lamp or coffee. If they’ve mentioned dry, tired eyes from grading, a bottle of lubricating eye drops can be a modest extra.`,
      },
      {
        q: 'Is it appropriate to give a professor a Christmas gift?',
        a: `Yes, with care. Students should wait until final grades are posted, and some schools have gift policies. A heartfelt card is always appropriate.`,
      },
      {
        q: 'Can I ship a gift to a professor’s campus office?',
        a: `You can, but campus buildings and mailrooms often run reduced hours over winter break, so a gift may sit until January. A home address or an in-person handoff is more dependable.`,
      },
      {
        q: 'Are eye drops a good gift for a professor?',
        a: `For a professor who has mentioned dry eyes from screens and grading, yes. Check for egg or bird allergies, contact lenses and other eye drops before giving Quell.`,
      },
    ],
  },
  {
    slug: 'practical-christmas-gifts-for-adults',
    title: 'Practical Christmas gifts for adults',
    description:
      'Practical Christmas gifts for adults: how to pick something useful they’ll actually use, ideas by category, and when eye drops are a sensible gift.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Practical Christmas gifts for adults replace or upgrade something they use every day, or restock something they’d buy anyway. Think a good flashlight, warm gloves, a phone charger for the car, kitchen tools, a winter car kit, quality socks, or a refill of a favorite consumable. For someone who mentions dry eyes in winter, a bottle of lubricating eye drops fits the same idea.`,
      },
      { h: 'How to pick a practical gift' },
      {
        p: `The most useful gift is one the person would have bought anyway, but at a better quality or sooner. Three questions narrow it down:`,
      },
      {
        list: [
          `What do they use every day that’s worn out? A frayed charging cable, a cracked phone case, a thinning bath towel.`,
          `What do they complain about? Cold hands on the commute, a dull kitchen knife, a dark driveway.`,
          `What do they run out of? Coffee, batteries, hand cream, printer paper.`,
        ],
      },
      {
        p: `Listen in the weeks before Christmas. People mention these things in passing, and a gift that solves a small daily annoyance usually gets used for years.`,
      },
      { h: 'Practical gifts for the home' },
      {
        list: [
          `A rechargeable flashlight or a set of plug-in night lights for the hallway.`,
          `A good chef’s knife or a knife sharpener.`,
          `Flannel sheets or a heavier blanket for winter.`,
          `A cool-mist humidifier for a bedroom with dry furnace air.`,
          `A label maker, for the person whose garage is half organized.`,
          `A quality umbrella that won’t turn inside out.`,
        ],
      },
      { h: 'Practical gifts for the car and the commute' },
      {
        list: [
          `A winter car kit: ice scraper, blanket, gloves, a small shovel and a phone charger.`,
          `A tire pressure gauge or a portable air compressor.`,
          `An insulated travel mug that fits their cup holder.`,
          `A visor clip or case for sunglasses, so they stop riding loose on the dash.`,
        ],
      },
      { h: 'Practical gifts for everyday comfort' },
      {
        list: [
          `Merino or wool-blend socks.`,
          `Touchscreen-friendly gloves.`,
          `A good lip balm and hand cream for winter.`,
          `A reading pillow or a lap desk.`,
          `Blackout curtains or a sleep mask for someone who works nights.`,
        ],
      },
      { h: 'Are eye drops a practical Christmas gift?' },
      {
        p: `For the right person, yes. Winter is when furnaces and car heaters dry the air, and people at screens for hours blink less, so some adults find their eyes feel dry or gritty by evening. If someone has said exactly that, a bottle of lubricating eye drops is a practical gift in the same way hand cream is: it addresses something they already feel. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, in a {size} bottle.`,
      },
      {
        p: `Before giving it, check two things. Quell’s label warns: {warnings}. And the label doesn’t give directions for contact lens wearers or for using it alongside other eye drops; those people should ask their eye doctor or pharmacist first. The whole panel is on the [Drug Facts page](/drug-facts). If their eyes hurt or the dryness never lets up, the better gift is encouragement to see an eye doctor. For more ideas built around dry eyes specifically, see [gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes).`,
      },
      { h: 'Is it rude to give a practical gift?' },
      {
        p: `Not if it’s chosen with care. A practical gift says you pay attention to their daily life. What can sting is a gift that sounds like a hint, such as a scale or anti-aging cream. Avoid anything that implies they need fixing. With a health-related item like eye drops, frame it around something they said: “You mentioned your eyes were bothering you at work, so I thought this might help.” A short note makes the difference between thoughtful and awkward.`,
      },
      { h: 'Making a practical gift feel like a present' },
      {
        list: [
          `Upgrade the quality: a nicer version of something ordinary feels like a luxury.`,
          `Bundle it: a winter car kit in a tote reads as a gift; a lone ice scraper reads as a chore.`,
          `Add one personal touch, like a favorite snack or a photo.`,
          `Wrap it well, even if it’s just socks.`,
        ],
      },
      { h: 'Ordering Quell as a gift' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout for buyers 18 and older. Shipping is {shipping}, and {freeBottles} or more bottles ship free, handy if you’re giving to a few people and handing them out yourself. There’s no gift wrap or gift message, and no delivery date is promised, so order early in December. An unopened bottle can be refunded within {returnDays} days of delivery without being sent back. If it turns out they don’t want it, see [what if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted)`,
      },
    ],
    faq: [
      {
        q: 'What are practical Christmas gifts for adults?',
        a: `Upgrades or refills of things they use daily: a good flashlight, warm gloves, a winter car kit, a chef’s knife, wool socks, or a humidifier. Listen for small complaints in the weeks before Christmas.`,
      },
      {
        q: 'What is a useful gift for someone who has everything?',
        a: `Replace something worn out with a better version, or give a consumable they’ll use up, like good coffee or hand cream. Experiences and handwritten notes are also welcome.`,
      },
      {
        q: 'Are eye drops a practical Christmas gift?',
        a: `For someone who has mentioned dry or gritty eyes in winter, yes. Check for egg or bird allergies, contact lenses and other eye drops first, since Quell’s label doesn’t cover the last two.`,
      },
      {
        q: 'Is it rude to give a practical gift for Christmas?',
        a: `Not if you choose it with care and tie it to something they said. Skip gifts that imply they need fixing, and add a short note explaining why you picked it.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-an-electrician',
    title: 'Christmas gifts for an electrician',
    description:
      'Christmas gifts for an electrician that get used on the job: lighting, cold-weather gear, tool storage, comfort items, and why to leave rated PPE to them.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Good Christmas gifts for an electrician are things they’ll use on the job: a bright rechargeable headlamp, a magnetic work light, a sturdy tool backpack, knee pads, warm work socks and thermal layers, or a big insulated thermos. Leave rated safety gear and testers to them, since requirements vary. For someone who spends winter in dusty attics and crawlspaces, lubricating eye drops make a small, useful extra.`,
      },
      { h: 'What an electrician’s winter workday looks like' },
      {
        p: `Electricians move between very different spaces in a day: cold new-construction sites with no heat yet, attics full of insulation, crawlspaces, mechanical rooms, and the truck in between. Much of the work is close focus on panels, terminals and small wire, often in poor light. Gifts that address light, warmth, organization and comfort get used, and they don’t step on the tools a pro picks for themselves. Our guide on [dry eyes for electricians](/guides/dry-eyes-for-electricians) covers what those spaces do to the eyes.`,
      },
      { h: 'Lighting gifts' },
      {
        list: [
          `A rechargeable headlamp with a tilt and a red-light mode for dark attics.`,
          `A magnetic work light that sticks to a panel door or a metal stud.`,
          `A compact penlight for reading labels inside boxes.`,
          `A charging station or spare batteries for whatever lights they already own.`,
        ],
      },
      { h: 'Gear for cold job sites' },
      {
        list: [
          `Merino work socks and a thin base layer that fits under work clothes.`,
          `A warm beanie that fits under a hard hat, if their site rules allow it.`,
          `Rechargeable hand warmers for breaks.`,
          `A large insulated thermos and a lunch box that keeps food warm until noon.`,
          `A heated vest, if they’ve asked for one.`,
        ],
      },
      { h: 'Organization and comfort' },
      {
        list: [
          `A tool backpack or bucket organizer with plenty of pockets.`,
          `Comfortable knee pads for crawlspace and floor-box work.`,
          `A truck seat organizer or a cab console tray.`,
          `A magnetic wristband for holding screws on a ladder.`,
          `Quality work boot insoles for long days on concrete.`,
        ],
      },
      { h: 'What not to buy an electrician' },
      {
        p: `Skip voltage testers, meters, insulated tools and rated gloves unless they’ve told you the exact make and model. Those items have to meet ratings and workplace requirements, and electricians usually have strong opinions about their brands. The same goes for safety glasses: employers often specify what’s allowed. A gift card to the supply house they already use lets them pick, and it’s far from impersonal if you pair it with a note.`,
      },
      { h: 'Are eye drops a good gift for an electrician?' },
      {
        p: `For one who’s mentioned dry, gritty eyes after attic work or long days at a screen doing estimates, yes, as a stocking stuffer. Insulation dust, heat in the summer attic and dry furnace air in the winter all speed evaporation from the tear film. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Each bottle is {size}, small enough for a jacket pocket.`,
      },
      {
        list: [
          `The label’s warning: {warnings}. Ask about egg or bird allergies first.`,
          `The label doesn’t give directions for contact lenses or use with other eye drops; anyone in that situation should check with an eye doctor or pharmacist.`,
          `Its storage line reads: {storage}. A truck cab in January or July can fall outside that range, so the bottle belongs in a pocket or lunch bag.`,
          `Drops are for ordinary dryness. Anything that gets into the eye on the job, like dust, a wire clipping or a spark, needs first aid and possibly an eye doctor.`,
        ],
      },
      { h: 'Stocking stuffers for an electrician' },
      {
        list: [
          `A pack of quality pencils or fine-point markers for marking boxes and studs.`,
          `Wire nut and connector assortments they always run out of.`,
          `Electrical tape in several colors.`,
          `A pocket notebook that survives a wet job site.`,
          `A bottle of eye drops, if dryness has come up.`,
          `Lip balm and hand cream for cold, cracked hands.`,
        ],
      },
      { h: 'Gifts for an apprentice' },
      {
        p: `Apprentices are building their kits and often working the coldest, dustiest jobs. Ask their journeyman or instructor what’s on the required tool list before buying tools. Warm layers, a lunch box, a good backpack and a headlamp are safe bets that won’t duplicate anything. If they’re taking classes at night, a gift card for gas or dinner is welcome too.`,
      },
      { h: 'Shipping and timing' },
      {
        p: `Ship gifts to a home address rather than to a shop or job site, where packages can get mixed up or left in the weather. Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles. We don’t promise a delivery date, so order early in December. There’s no gift wrap or gift message; ship to yourself if you want to wrap it, as [how to send Quell as a gift](/guides/sending-quell-as-a-gift) explains. An unopened bottle can be refunded within {returnDays} days of delivery without being sent back. The full label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What do you get an electrician for Christmas?',
        a: `Gear that makes the workday easier: a rechargeable headlamp, a magnetic work light, a tool backpack, knee pads, warm socks or a big thermos. Leave meters, testers and rated gloves to them.`,
      },
      {
        q: 'Are eye drops a good gift for an electrician?',
        a: `For one who’s mentioned dry eyes after attic or crawlspace work, yes. Ask about egg or bird allergies, contact lenses and other drops first, since Quell’s label covers none of those situations.`,
      },
      {
        q: 'What are good stocking stuffers for an electrician?',
        a: `Electrical tape in several colors, wire connector assortments, marking pencils, a weatherproof notebook, hand cream, and a bottle of eye drops if dryness has come up.`,
      },
      {
        q: 'What should I not buy an electrician?',
        a: `Testers, meters, insulated tools and rated gloves, unless you know the exact model they want. Those must meet ratings and workplace rules, and most electricians choose their own.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-a-heated-garage-workshop',
    title: 'Dry eyes in a heated garage or workshop',
    description:
      'Why a heated garage dries your eyes: propane, kerosene and electric heaters, dust, and close focus. How to set up the space and when to stop and see a doctor.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `A heated garage or workshop dries your eyes because heating cold winter air lowers its relative humidity, and fan-driven heaters push that air across your face. Add sawdust or grinding dust and hours of close focus, which cuts blinking, and eyes feel gritty fast. Aim the heater at your legs, not your face, keep dust down, take blink breaks and use a lubricating drop as its label directs.`,
      },
      { h: 'Why garage heat is so drying' },
      {
        p: `Cold air holds little water. When a heater takes a 25-degree garage up to 60, the water in the air stays the same, but the relative humidity falls a long way, so the air pulls moisture from anything wet, including the surface of your eyes. The tear film’s outer oil layer slows that evaporation, but warm, dry, moving air still wins over a long afternoon. A garage also tends to be heated in bursts: the heater runs hard, the space warms, you open the big door, and it starts again.`,
      },
      { h: 'Propane, kerosene and electric heaters compared' },
      {
        p: `Different heaters change the air in different ways, and the kind you have shapes what helps.`,
      },
      {
        list: [
          `Forced-air propane and kerosene heaters (often called torpedo heaters) blow a fast stream of hot air. Standing in that stream dries your eyes quickly.`,
          `Fan-forced electric heaters, from small ceramic units to wall-mounted 240-volt shop heaters, also move a lot of air. Aim them at the floor or your legs.`,
          `Radiant and infrared heaters warm surfaces and people without much air movement, which is easier on the eyes at the bench.`,
          `Wood stoves and ceiling-hung gas unit heaters warm the whole room; the air they produce is just as dry, but it isn’t usually blowing straight at you.`,
        ],
      },
      {
        p: `Any fuel-burning heater comes with its manufacturer’s ventilation and clearance instructions. Follow them exactly. If your eyes sting or water every time a fuel heater runs, shut it off, step outside for fresh air, and check the heater against its manual before using it again.`,
      },
      { h: 'Dust, chips and fumes' },
      {
        p: `Winter is when many people catch up on garage projects, with the door closed to hold in the heat. That traps whatever the work throws into the air. Sanding dust, sawdust, grinding grit, drywall dust and fine particles from cutting tools all settle on the eye’s surface and make you want to rub it, which adds more irritation. Paint, stain and solvents add vapors to an already dry room.`,
      },
      {
        list: [
          `Wear safety glasses or goggles every time a tool is running; goggles also block heater airflow.`,
          `Run dust collection or a shop vacuum at the tool, and an air cleaner if you have one.`,
          `Open the door for a few minutes after a dusty job to clear the air, then let the space warm again.`,
          `Do finishing work in a separate session from dusty work.`,
          `Wash your hands and face before you touch your eyes.`,
        ],
      },
      {
        p: `If dust, a chip or a splash of solvent or brake cleaner actually gets into your eye, a lubricating drop isn’t the answer. Follow the first aid directions on the product you were using and get care. [Dry eyes for woodworkers](/guides/dry-eyes-for-woodworkers) covers wood shop dust in more depth.`,
      },
      { h: 'Focus work and forgotten blinks' },
      {
        p: `Fine joinery, wiring a trailer, rebuilding a carburetor or tying flies at the bench all take close concentration, and people blink less when they focus hard. Each skipped blink gives the tear film longer to thin in the dry air. Every so often, set the tool down, look across the garage or out a window, and blink fully a few times. A good task light helps too, so you aren’t squinting into a shadow.`,
      },
      { h: 'Setting up the space' },
      {
        list: [
          `Position the heater so it warms your legs and the floor, never your face.`,
          `Put the workbench out of the heater’s airflow, or use a deflector.`,
          `Use a radiant panel at the bench if you work there for hours.`,
          `Don’t run a humidifier near power tools or fuel heaters unless the maker says it’s fine; a small one in the house is a better place to start.`,
          `Keep a stool so you can sit back and rest your eyes between tasks.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) has more on heater placement indoors.`,
      },
      { h: 'Where Quell fits in the workshop' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its use as: {uses}. The directions say: {directions}. Take your gloves off and wash shop dust from your hands before you open the bottle, and follow this caution from the panel: {tip}.`,
      },
      {
        p: `The warnings read: {warnings}. If you wear contacts or use another eye drop, the label doesn’t cover that, so ask your eye doctor or pharmacist.`,
      },
      { h: 'Don’t store drops in the garage' },
      {
        p: `The label’s storage line is {storage}. An unheated garage on a winter night falls below that, and a shelf beside the heater can get far too warm while it runs. Keep the bottle in the house or in a coat pocket and bring it out with you. If a bottle has frozen, see [can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) and also check the label line that reads: {doNotUse}.`,
      },
      { h: 'When to stop and see an eye doctor' },
      {
        p: `Workshop dryness should ease once you’re back in normal indoor air. If it doesn’t, or if you have pain, blurred vision, or the feeling something is still in your eye, see an eye doctor. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list.`,
      },
    ],
    faq: [
      {
        q: 'Does a garage heater dry out the air?',
        a: `Yes. Heating cold air lowers its relative humidity, and fan-driven heaters push that drier air around the space. Radiant heaters move less air, which is easier on the eyes.`,
      },
      {
        q: 'Does a kerosene heater make your eyes dry?',
        a: `It heats air like any heater, so the air gets drier, and forced-air models blow it at you. If your eyes sting whenever it runs, shut it off, get fresh air and check the heater against its manual.`,
      },
      {
        q: 'Can I keep eye drops in my garage in winter?',
        a: `It’s better not to. Quell’s label gives a storage range, and an unheated garage at night can drop below it while a shelf near a heater can run too warm. Keep the bottle indoors or in a pocket.`,
      },
      {
        q: 'Why do my eyes get gritty in my workshop in winter?',
        a: `Heated dry air, dust from sanding or cutting with the door closed, and close focus that slows blinking all combine. Safety glasses, dust collection and blink breaks help.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-public-speakers',
    title: 'Dry eyes for public speakers',
    description:
      'Why your eyes dry out when you give a talk: stage lights, ballroom air, teleprompters and notes. How to set up the room and when to use drops.',
    category: 'using',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Public speakers get dry eyes from a mix of room air, bright lights and staring. Conference halls and ballrooms run strong heating or air conditioning, stage lights add glare, and reading a teleprompter or notes cuts blinking. Look out at the audience between lines, keep vents and fans off your face, wear glasses instead of contacts if your eye doctor agrees, and use a lubricating drop well before you go on.`,
      },
      { h: 'Why giving a speech dries your eyes' },
      {
        p: `Speaking for an hour combines three things that work against the tear film. The room’s air is moving and often dry, because large venues push a lot of conditioned air to keep a crowd comfortable. The lights are bright, so you narrow your eyes. And you’re concentrating, which slows blinking. Each blink spreads a fresh layer of tears, so fewer blinks means the surface of the eye dries between them.`,
      },
      { h: 'Stage lights and spotlights' },
      {
        p: `Lighting for speakers is usually set so the audience and cameras can see your face, which means it points at your eyes. Bright light makes people squint, and squinting tends to shorten blinks. Some fixtures also give off warmth. At the tech check, ask whether the main light can come in from a slightly higher angle, and practice where you’ll look so you aren’t staring into the brightest fixture. If the venue has a confidence monitor, find out where it sits before your talk.`,
      },
      { h: 'Teleprompters and confidence monitors' },
      {
        p: `A teleprompter asks you to read steadily while appearing not to, and that kind of fixed gaze is when blinking drops off most. Tips from people who read prompters often:`,
      },
      {
        list: [
          `Mark natural pauses in the script, and blink fully at each one.`,
          `Ask the operator to set a comfortable font size so you aren’t straining to read.`,
          `Break the gaze now and then to look at the audience; it reads as more natural anyway.`,
          `Rehearse with the prompter, not just your laptop, so the rhythm is familiar.`,
        ],
      },
      { h: 'Reading notes, slides and a laptop' },
      {
        p: `Glancing down at notes and up at the room is easier on the eyes than a steady stare. Use large type, one idea per card or page, and a lectern light if the room is dim. If you’re driving your own slides from a laptop, keep its screen at a comfortable distance and brightness. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why long screen focus is hard on the eyes.`,
      },
      { h: 'The room: ballrooms, halls and green rooms' },
      {
        list: [
          `Look for ceiling vents above the lectern and ask whether airflow can be adjusted or the lectern moved.`,
          `Keep small fans for cooling pointed at your body, not your face.`,
          `Wait in a green room or hallway without a heater blowing at you.`,
          `If a fog or haze effect is planned for a show-style event, ask to keep it away from the speaker area.`,
        ],
      },
      { h: 'Video calls, webinars and ring lights' },
      {
        p: `Virtual talks bring their own version of the problem: a webcam you’re told to look into, a ring light aimed at your face, and slides on a second monitor. Place the ring light slightly to the side and above, rather than straight on, and dim it to the lowest level that looks good on camera. Look away from the camera between sections, and blink.`,
      },
      { h: 'When to use drops before a talk' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line: {uses}. Its directions: {directions}. Put drops in well before you’re called, in a restroom or green room where you can wash your hands first, rather than in the wings a minute before you walk on. That gives you time to blink, settle and check your makeup.`,
      },
      {
        list: [
          `The panel notes: {milky}. Keep a tissue handy.`,
          `Follow its caution: {tip}.`,
          `Its warning: {warnings}.`,
          `The label doesn’t cover contact lenses or use with other eye drops. If you wear contacts on stage or use another drop, ask your eye doctor or pharmacist before adding Quell.`,
        ],
      },
      { h: 'On the road between engagements' },
      {
        p: `Speakers who travel spend long hours in airplanes, hotel rooms and rental cars, all with dry, moving air. Pack drops in your carry-on under TSA’s liquids rule, and keep them out of a hot or freezing car. Our guide to [traveling with eye drops](/guides/traveling-with-eye-drops) covers security. The storage line reads: {storage}. A bag left in a car between venues can drift outside that.`,
      },
      { h: 'How this differs from performing' },
      {
        p: `Speakers face some of the same conditions as musicians and actors, but usually without the haze, the long sets or the sheet music. If you also perform, [dry eyes for musicians and stage performers](/guides/dry-eyes-for-musicians-and-performers) covers those situations.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry well after the event, ache, or your vision changes, see an eye doctor. The label says: {stopUse} Our [self-check](/self-check) helps you describe symptoms before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when giving a speech?',
        a: `Large rooms move a lot of dry conditioned air, bright stage lights make you squint, and concentrating on notes or a prompter slows blinking. Together they let the tear film dry between blinks.`,
      },
      {
        q: 'How do I keep my eyes from drying out while reading a teleprompter?',
        a: `Mark pauses in the script and blink fully at each one, look out at the audience now and then, and ask for a comfortable font size so you aren’t straining.`,
      },
      {
        q: 'Can I use eye drops right before a presentation?',
        a: `Use them well ahead, in a restroom or green room where you can wash your hands, not in the wings. Follow the directions on the label, and ask an eye doctor first if you wear contacts.`,
      },
      {
        q: 'Do ring lights dry out your eyes?',
        a: `A ring light doesn’t blow air, but staring toward a bright light makes many people squint and blink less. Set it off to the side, dim it and take breaks from looking at the camera.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-power-line-workers',
    title: 'Dry eyes for power line workers',
    description:
      'Storm restoration means wind, cold and long shifts in a bucket truck. Why line work dries your eyes, and how to carry and use drops safely on the job.',
    category: 'using',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Power line workers get dry eyes from wind at height, cold air, sawdust from clearing trees, and long storm-restoration shifts with little sleep. A bucket raised into a winter wind dries the tear film quickly, and looking up at lines against a bright sky makes you squint. Wear the eye protection your employer requires, use drops only on the ground with clean hands, and keep the bottle in an inside pocket.`,
      },
      { h: 'Why line work dries your eyes' },
      {
        p: `Wind is the biggest factor. The higher the bucket, the more exposed you are, and a steady breeze across the eye speeds evaporation from the tear film. Winter air holds little moisture, and storms often arrive with a cold front behind them. Then there’s the work itself: concentrating on a connection overhead, blinking less, often while squinting into sky glare or floodlights.`,
      },
      { h: 'Storm restoration: wind, cold and long hours' },
      {
        p: `After an ice storm, a hurricane or a line of severe thunderstorms, crews may work long shifts for days, sometimes far from home on mutual-assistance calls. That means:`,
      },
      {
        list: [
          `Hours in the bucket in gusty wind as the storm clears.`,
          `Sleet and freezing rain that make you wipe your face with wet gloves.`,
          `Short, broken sleep in a hotel or a staging area, so eyes start the day tired.`,
          `Long drives in a heated cab with vents blowing across your face.`,
          `Work at night under truck-mounted lights.`,
        ],
      },
      {
        p: `Any one of those can leave eyes gritty; days of them together make it more likely.`,
      },
      { h: 'Tree work and debris' },
      {
        p: `Restoration often starts with clearing limbs. Chainsaw chips, bark, and sawdust kicked up in the wind are an obvious hazard to the eye, and fine dust that gets past glasses can leave eyes irritated for hours. Your employer’s eye and face protection rules govern this work; follow them, and keep spare clean lenses in the truck. If a chip or anything else actually gets into your eye, report it and get first aid. A lubricating drop isn’t first aid for an eye injury.`,
      },
      { h: 'Habits that help on a long shift' },
      {
        list: [
          `Wear wraparound protective eyewear that blocks side wind, within your company’s approved list.`,
          `Turn your face out of the wind when you can, between tasks in the bucket.`,
          `On the ground, take a minute to close your eyes fully and blink several times.`,
          `In the truck, point heat vents at the windshield and floor, not your face.`,
          `Use the time between jobs to rest your eyes rather than scroll a phone.`,
          `Sleep in a dark room when you get the chance; ask for blackout curtains at the hotel.`,
        ],
      },
      { h: 'Can I use eye drops in a bucket truck?' },
      {
        p: `Not while you’re working aloft. Handling a bottle in the bucket means taking off gloves and taking your attention off the work, and that isn’t worth it. Use drops on the ground, during a break, after you’ve taken gloves off and washed or sanitized your hands. Tilt your head back with your back to the wind so the drop goes where it’s meant to.`,
      },
      { h: 'Quell’s label, for line crews' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Per the Drug Facts panel, it is: {uses}. The directions: {directions}. And the panel’s handling rule: {tip}.`,
      },
      {
        list: [
          `Its warning: {warnings}.`,
          `If you wear contact lenses or use other eye drops, the label doesn’t cover that; ask your eye doctor or pharmacist.`,
          `Read the full label on the [Drug Facts page](/drug-facts).`,
        ],
      },
      { h: 'Where to keep drops in winter' },
      {
        p: `The label’s storage line reads: {storage}. A bucket truck parked at a staging yard on a winter night, or a gear bag in a summer cab, can fall well outside that. An inside chest pocket keeps a bottle close to body temperature. If it does freeze or overheat, check the label line that reads: {doNotUse}. Our guide on [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more for winter crews.`,
      },
      { h: 'Summer work and heat' },
      {
        p: `Summer storms bring a different set of problems: heat, sun glare off the sky, and sweat running into your eyes under a hard hat. A sweatband helps keep it out. Glare is constant when you spend a shift looking up, so tinted protective eyewear that meets your employer’s rules can make a real difference. The general routine for outdoor trades is in [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers).`,
      },
      { h: 'Getting drops when you’re on the road' },
      {
        p: `Storm sites move, so don’t ship to a staging area. Order to your home address before storm season, and pack a bottle in your go-bag. Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout. Shipping is {shipping}, and {freeBottles} or more bottles ship free, which can cover a spare for the truck and one at home. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry for days after a restoration push, ache, or your vision changes, see an eye doctor. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do lineworkers get dry eyes?',
        a: `Wind at height, cold dry air, sawdust from clearing limbs, and long storm shifts with little sleep all speed evaporation from the tear film. Squinting at a bright sky slows blinking too.`,
      },
      {
        q: 'Can I use eye drops in a bucket truck?',
        a: `Not while working aloft. Wait until you’re on the ground on a break, take your gloves off, clean your hands and turn your back to the wind before using drops.`,
      },
      {
        q: 'Where should a lineman keep eye drops in winter?',
        a: `In an inside chest pocket, not in the truck. Quell’s label gives a storage range, and a parked truck on a winter night can fall below it.`,
      },
      {
        q: 'Can I ship eye drops to a storm staging area?',
        a: `It’s better not to, because staging sites move and no delivery date is promised. Order to your home address before storm season and pack a bottle in your go-bag.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-during-a-hospital-stay',
    title: 'Dry eyes during a hospital stay',
    description:
      'Why eyes feel dry in a hospital room, what you can change about the air, screens and sleep, and why any eye drops go through your care team first.',
    category: 'using',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Eyes often feel dry during a hospital stay because the room’s air is climate-controlled and constantly moving, sleep is broken, and long hours with a TV or phone cut blinking. Tell your nurse your eyes feel dry, and don’t start any eye drop on your own: anything put in your eyes while you’re a patient goes through the care team, who know your medicines.`,
      },
      { h: 'Why are my eyes so dry in the hospital?' },
      {
        p: `Hospitals control their air closely for comfort and safety, and the ventilation moves a lot of it through each room. Moving air speeds evaporation from the tear film, and in winter, heated air holds less relative humidity. Patient rooms also tend to be warm, and a bed is often placed under or near a vent. None of this is anyone’s fault; it’s the nature of the building. But it does mean eyes that feel fine at home can feel gritty by day two.`,
      },
      { h: 'Screens, lights and sleep' },
      {
        p: `A hospital stay involves a lot of waiting. People pass the hours watching the wall TV, scrolling a phone or reading, and focusing on a screen slows blinking. At night, monitors glow, hallway lights spill in, and someone checks vitals every few hours, so sleep comes in short pieces. Tired eyes often feel drier. Some things that can help:`,
      },
      {
        list: [
          `Ask whether the bed can be angled so the vent doesn’t blow across your face.`,
          `Take breaks from screens, and look across the room or out the window.`,
          `Ask the nurse about a sleep mask or turning down the room lights at night.`,
          `If you wear glasses, keep them where you can reach them, so you aren’t straining.`,
          `Let the staff know if something in the room is bothering your eyes; they may be able to adjust it.`,
        ],
      },
      { h: 'Why the care team decides about eye drops' },
      {
        p: `In a hospital, everything that goes into your body is supposed to be on your chart: pills, injections and drops alike. Your care team needs to know what you’re using to avoid mixing products, to spot side effects, and to plan around any procedures. That applies to over-the-counter eye drops too. Ask your nurse or doctor before using any drop you brought from home, and follow their answer even if it’s “not right now.”`,
      },
      {
        p: `The Quell label doesn’t give directions for use with other eye drops, and many hospital patients are getting eye medicines or ointments of their own. That’s another reason the decision belongs to your care team, not to the bottle in your bag.`,
      },
      { h: 'If you or a visitor brings Quell' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. If your care team says it’s fine to use, the label’s directions read: {directions}. Its warning reads: {warnings}. Tell the staff about any egg or bird allergy so it’s on your record anyway.`,
      },
      {
        list: [
          `Show the bottle to your nurse so it can be noted.`,
          `Wash or sanitize your hands first, and follow the label: {tip}.`,
          `Keep the bottle in your bag or bedside drawer, not on a sunny windowsill. The storage line reads: {storage}.`,
          `Don’t share the bottle with a roommate or visitor.`,
        ],
      },
      {
        p: `If someone wants to send you drops, [sending eye drops to someone in the hospital](/guides/sending-eye-drops-to-someone-in-the-hospital) explains why shipping them home is often better.`,
      },
      { h: 'Contact lenses in the hospital' },
      {
        p: `If you wear contact lenses, ask your care team whether to keep them in during your stay, especially before any procedure. The Quell label doesn’t give directions for contact lenses, so ask them about eye comfort with lenses too. Bring your glasses if you can.`,
      },
      { h: 'Things a visitor can do' },
      {
        list: [
          `Bring the patient’s glasses and a case.`,
          `Pack a sleep mask and a book with large print as a break from screens.`,
          `Ask before bringing any appliance, like a humidifier or fan; hospitals often have rules.`,
          `Pass along to the nurse if the patient mentions their eyes hurt or feel dry.`,
        ],
      },
      { h: 'Why do my eyes feel dry after a hospital stay?' },
      {
        p: `Some people notice dry eyes for a while after they get home. The home air may be dry in winter, sleep is still catching up, and recovery days often mean more TV and phone time. Give it a little time, and use the same habits that help anyone: keep vents off your face, blink fully at screens and sleep in a dark room. If your discharge papers mention your eyes, follow them, and ask your doctor before starting any new drop. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) covers the blinking part.`,
      },
      { h: 'When eye symptoms need attention' },
      {
        p: `Eye pain, a sudden change in vision, light sensitivity or anything new and severe should be reported to your nurse right away while you’re in the hospital, and to your doctor after you go home. The Quell label’s own stop-use list: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in the hospital?',
        a: `Hospital rooms have constantly moving, climate-controlled air, and patients often spend long hours with screens and broken sleep. Moving air and fewer blinks let the tear film dry faster.`,
      },
      {
        q: 'Should I tell my nurse my eyes feel dry?',
        a: `Yes. The staff may be able to adjust the room or offer something, and they need to know before you use any eye drop, including over-the-counter ones you brought from home.`,
      },
      {
        q: 'Can I use eye drops in the hospital without asking?',
        a: `It’s better not to. Everything you use should be on your chart, and the care team needs to know about other medicines. Quell’s label doesn’t cover use with other eye drops either.`,
      },
      {
        q: 'Why do my eyes feel dry after a hospital stay?',
        a: `Dry winter air at home, catching up on sleep and extra screen time during recovery can all play a part. If it doesn’t ease, or your eyes hurt, talk with your doctor before adding a drop.`,
      },
    ],
  },
]
