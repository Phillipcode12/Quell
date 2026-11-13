import type { Guide } from '@/lib/guide-types'
export const DAILY_20261113_A: Guide[] = [
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-murfreesboro-tn:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00406371.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00406371.csv
   *   (MURFREESBORO 5 N, elev 163.1 m: annual precip 55.92 in; Oct 3.46, Aug 3.61,
   *   Dec 5.54, Jun 5.68; Jan high 47.9 F, low 27.5; Jul high 89.2; 47.9 days at or
   *   above 90 F; 89.2 nights at or below 32 F; annual snow 2.2 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (NASHVILLE, TN, WBAN 13897: Jan 80/64, Apr 80/51, Aug 89/55, Sep 89/55,
   *   Oct 86/53, annual 84/56, morning/afternoon)
   * No Murfreesboro row in the humidity table, so Nashville's is used and named.
   */
  {
    slug: 'dry-eye-relief-murfreesboro-tn',
    title: 'Dry eye relief in Murfreesboro, Tennessee',
    description:
      'Murfreesboro’s humid air still dries eyes indoors. NOAA’s local numbers, the seasons that matter, and how to find dry eye relief in Rutherford County.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Dry eye relief in Murfreesboro usually means dealing with indoor air, not the weather outside. Middle Tennessee is humid most of the year, but furnaces in winter and air conditioning through long, hot summers both pull moisture from your eyes. Blink fully at screens, keep vents off your face, and use a lubricating drop exactly as its label directs. Lasting discomfort, pain or blurry vision is a reason to see an eye doctor.`,
      },
      { h: 'Murfreesboro’s weather in NOAA’s numbers' },
      {
        p: `NOAA keeps a cooperative weather station five miles north of downtown, listed as Murfreesboro 5 N. Its 1991 to 2020 climate normals describe a wet, warm place with a real winter:`,
      },
      {
        list: [
          `About 55.9 inches of precipitation in a normal year, spread across every month.`,
          `October is the driest month at 3.46 inches, with August close behind at 3.61.`,
          `June and December are the wettest, each above 5.5 inches.`,
          `July’s normal high is 89.2°F, and the station logs nearly 48 days a year at 90°F or hotter.`,
          `January runs from a normal high of 47.9°F down to a low of 27.5°F, and about 89 nights a year dip to freezing or below.`,
          `Snow is light: roughly 2.2 inches in an average winter.`,
        ],
      },
      {
        p: `That’s a lot of rain for a place where people complain about dry eyes. The explanation is that eyes respond to the air right in front of them, and in Rutherford County that air is conditioned, heated or blown by a fan for much of the day.`,
      },
      { h: 'Humid summers, cold air conditioning' },
      {
        p: `NOAA’s humidity table has no Murfreesboro row, so the nearest long record comes from Nashville’s airport. There, August and September mornings average 89 percent relative humidity and afternoons fall to about 55 percent. Muggy air like that pushes nearly everyone indoors and turns the thermostat down.`,
      },
      {
        p: `An air conditioner works partly by wringing water out of the air. Sitting under a ceiling vent at work, driving home with the dash vents aimed at your face, then sleeping beside a window unit can mean ten or twelve hours a day in dried, moving air during the most humid months of the year. Two small changes help: angle car vents toward your chest, and keep a bedroom fan from blowing across the pillow.`,
      },
      { h: 'Why October and the first cold snaps feel different' },
      {
        p: `The Nashville record shows its lowest afternoon humidity in April, at 51 percent, and October, at 53 percent. Those are the clear, breezy months when Murfreesboro opens windows, rakes leaves and spends Saturdays outdoors. A bright fall afternoon with a steady breeze can dry eyes faster than a sticky July day.`,
      },
      {
        p: `Then the furnace comes on. Forced-air heat warms air without adding water, so indoor humidity drops as the outdoor temperature does. With close to 90 freezing nights a year at the Murfreesboro station, the heat often runs from November into March. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the room-by-room changes.`,
      },
      { h: 'Campus, commutes and long days in Rutherford County' },
      {
        p: `A few parts of local life put more strain on eyes than others:`,
      },
      {
        list: [
          `Middle Tennessee State University students reading on laptops in heated lecture halls and air-conditioned libraries, often late at night.`,
          `The I-24 commute toward Nashville, where stop-and-go traffic means long stretches staring ahead with the vents running.`,
          `Shift work in the distribution centers and plants around the county, under big fans and bright lights.`,
          `Walks through Stones River National Battlefield or along the Greenway on windy fall afternoons.`,
          `Weekend ballgames in full sun, where squinting replaces full blinks.`,
        ],
      },
      {
        p: `Screens deserve special attention. People blink less while concentrating, and each partial blink leaves more of the eye’s surface exposed. Every so often, look across the room and blink slowly a few times. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why that pause helps.`,
      },
      { h: 'How a lubricating drop fits in' },
      {
        p: `Quell’s Drug Facts panel lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, the problem that heated and conditioned air both make worse. The directions are short: {directions}. Before each drop, follow the handling line: {tip}.`,
      },
      {
        p: `The label’s “Do not use” line reads: {doNotUse}. Store the bottle where its temperature stays in range: {storage}. That matters in a Murfreesboro car, which can climb well past that ceiling on a July afternoon, so keep a bottle in a bag you carry inside rather than in the glove box. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Murfreesboro' },
      {
        p: `Quell ships from Brentwood, Tennessee, so a Murfreesboro order doesn’t travel far, though we don’t promise a delivery date. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. An unopened bottle can be refunded within {returnDays} days of delivery with nothing to send back. You can order from the [home page](/#buy) or see the [Murfreesboro page](/eye-drops/murfreesboro-tn) and the [Tennessee page](/eye-drops/state/tennessee).`,
      },
      { h: 'When relief isn’t the right goal' },
      {
        p: `A drop is for everyday dryness and irritation. Figuring out the cause of persistent symptoms, and what to do about it, is an eye doctor’s job. The label is specific about when to stop: {stopUse}`,
      },
      {
        p: `If you aren’t sure whether your symptoms are routine, the [dry eye self-check](/self-check) asks a few questions and suggests next steps; it’s not a diagnosis. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Where can I get dry eye relief in Murfreesboro, TN?',
        a: `For everyday dryness, a lubricating drop used as labeled and less time in front of vents and fans go a long way. Quell ships to Murfreesboro from Brentwood, Tennessee; persistent or painful symptoms belong with a local eye doctor.`,
      },
      {
        q: 'Why are my eyes dry when Tennessee is so humid?',
        a: `Air conditioning in summer and forced-air heat in winter both dry the air indoors, where most people spend their day. Your eyes respond to that air, not to the humidity outside.`,
      },
      {
        q: 'What is the driest month in Murfreesboro?',
        a: `October, by rainfall. NOAA’s 1991 to 2020 normals for the Murfreesboro 5 N station put it at 3.46 inches, the lowest of any month.`,
      },
      {
        q: 'How cold does Murfreesboro get in winter?',
        a: `NOAA’s normals give January a high of 47.9°F and a low of 27.5°F at the Murfreesboro 5 N station, with about 89 nights a year at or below freezing. That’s plenty of furnace time.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-amherst-ma:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00190120.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00190120.csv
   *   (AMHERST, MA, elev 44.2 m: annual precip 46.59 in; annual snow 36.5 in, Feb 11.0,
   *   Jan 8.1, Dec 7.5; Jan high 34.0 F, low 13.8; Jul high 83.1; 153.3 nights at or
   *   below 32 F; 30.8 days with a high at or below 32 F; 12.4 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (HARTFORD, CT, WBAN 14740, Bradley airport in the Connecticut River valley:
   *   Jan 73/57, Mar 71/50, Apr 69/45, May 73/48, annual 76/53, morning/afternoon)
   * No Amherst or Springfield row in the humidity table; Hartford's is used and named.
   */
  {
    slug: 'dry-eye-relief-amherst-ma',
    title: 'Dry eye relief in Amherst, Massachusetts',
    description:
      'Five months of heated dorms, libraries and cold wind: what NOAA’s Amherst records show and practical dry eye relief for students and residents.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `In Amherst, dry eyes mostly come from the long heating season. NOAA’s records show about 153 freezing nights a year, so radiators and forced air run from fall into spring, and students spend those months in heated dorms, libraries and lecture halls. Fuller blinking at screens, a humidifier in your room and a lubricating drop used as labeled can help. A doctor should look at anything painful, persistent or affecting vision.`,
      },
      { h: 'What the Amherst weather station records' },
      {
        p: `NOAA has a long-running cooperative station in Amherst itself, in the Connecticut River valley at about 145 feet above sea level. Its 1991 to 2020 normals sketch a classic New England year:`,
      },
      {
        list: [
          `A January normal high of 34.0°F and a low of 13.8°F.`,
          `About 31 days a year when the temperature never climbs above freezing.`,
          `Roughly 153 nights a year at 32°F or colder, about five months’ worth.`,
          `36.5 inches of snow in a normal winter, with February the snowiest month at 11 inches.`,
          `46.6 inches of total precipitation, fairly even from month to month.`,
          `A July normal high of 83.1°F and about a dozen days a year reaching 90°F.`,
        ],
      },
      { h: 'Why cold Pioneer Valley air dries eyes' },
      {
        p: `Cold air holds very little water. When a January morning at 14°F is pulled into a building and warmed to 70°F, its relative humidity collapses, even though no water has been removed. That’s why a snowy day outside can feel parched inside.`,
      },
      {
        p: `NOAA’s humidity table has no Amherst row. The closest long record from the same valley is the Hartford station at Bradley airport, farther south along the Connecticut River. There, April afternoons average 45 percent relative humidity, the lowest of the year, with March close behind at 50 percent. Spring in the valley can be bright, breezy and surprisingly dry before the trees leaf out, so if your eyes feel worst around spring break, the numbers back you up.`,
      },
      { h: 'Dorm rooms, libraries and finals week' },
      {
        p: `Amherst is a college town, home to UMass Amherst, Amherst College and Hampshire College. Student life stacks up nearly every everyday cause of eye strain at once:`,
      },
      {
        list: [
          `Steam radiators in older dorms that can’t be turned down, so windows get cracked open to cold air while the heat blasts.`,
          `Hours of laptop reading in heated libraries, where concentration cuts the blink rate.`,
          `Late nights before exams, with less sleep and longer screen sessions.`,
          `Walking across campus into a north wind, then straight into an overheated building.`,
        ],
      },
      {
        p: `Small changes work because you can keep them up. Set a reminder to look away from your screen every 20 minutes. Put a small humidifier on your desk if your housing allows one, and clean it as its maker directs. Our guide to [dry eyes while studying for exams](/guides/dry-eyes-while-studying) has more ideas for finals week.`,
      },
      { h: 'For year-round residents' },
      {
        p: `Town residents face the same heating season without the dorm radiators. Forced-air furnaces, wood stoves and space heaters all dry a room, and a long Massachusetts winter gives them months to do it. Running a humidifier, keeping heat registers from blowing toward the couch or bed, and not sleeping with a fan on your face all reduce the load.`,
      },
      {
        p: `Outdoors, the Norwottuck Rail Trail and the Holyoke Range draw walkers, skiers and cyclists through the cold months. Wind speeds up evaporation from the tear film, and cold wind on a bike or a ridge does it fast. Wraparound sunglasses or ski goggles block much of it.`,
      },
      { h: 'What the label says about relief' },
      {
        p: `Quell is an over-the-counter lubricating drop. Its Drug Facts panel lists the Uses as {uses}, and the directions read: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the whole problem in a heated room.`,
      },
      {
        p: `Each bottle holds {size}. The label’s handling rule is {tip}, and it gives a storage range: {storage}. A bottle left in a car through an Amherst January can sit well below that range, so keep it in your bag or room instead. If you wear contact lenses, the label doesn’t cover using it with them; ask your eye doctor first.`,
      },
      { h: 'Ordering to Amherst and when to see a doctor' },
      {
        p: `Quell ships to any US address, including dorms, from Brentwood, Tennessee. There’s no delivery date promised, so order before you run out, especially before winter break. Details for the town are on the [Amherst page](/eye-drops/amherst-ma) and the [Massachusetts page](/eye-drops/state/massachusetts); our [dorm shipping guide](/guides/shipping-eye-drops-to-a-college-dorm) covers campus mailrooms.`,
      },
      {
        p: `A search for relief that won’t come from a drop often means something more than a dry room is going on. Working out the cause, and what to do about it, belongs to an eye doctor, and campus health services can point students to one. The label says: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Where can I find dry eye relief in Amherst, MA?',
        a: `For everyday dryness from heated rooms and cold wind, a lubricating drop used as labeled, a humidifier and screen breaks all help. Persistent or painful symptoms should go to an eye doctor, and students can start with campus health services.`,
      },
      {
        q: 'Why are my eyes so dry in my dorm room?',
        a: `Heating cold outdoor air drops its relative humidity sharply, and many dorm radiators can’t be turned down. Add long laptop sessions, and your eyes lose moisture faster than usual.`,
      },
      {
        q: 'How much snow does Amherst, Massachusetts get?',
        a: `NOAA’s 1991 to 2020 normals for the Amherst station show about 36.5 inches of snow in a typical winter, with February the snowiest month at about 11 inches.`,
      },
      {
        q: 'Can I ship eye drops to a UMass Amherst dorm?',
        a: `Quell ships to any US address, including campus housing. Use your full name and the exact mailing format your housing office gives, and allow extra time, since no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-muncie-in:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094895.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094895.csv
   *   (MUNCIE DELAWARE CO AP, elev 285.6 m: annual precip 40.26 in; Feb 2.27, Jan 2.52,
   *   Dec 2.57, Jun 4.81, May 4.36; Jan high 36.0 F, low 21.3; Jul high 85.8;
   *   118.9 nights at or below 32 F; 35.5 days with a high at or below 32 F;
   *   17.4 days at or above 90 F; 78.3 days with 0.10 in or more of precipitation)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (INDIANAPOLIS, IN, WBAN 93819: Jan 81/70, Apr 77/55, May 79/56, Dec 83/71,
   *   annual 82/60, morning/afternoon)
   * No Muncie row in the humidity table; Indianapolis is used and named.
   */
  {
    slug: 'dry-eye-relief-muncie-in',
    title: 'Dry eye relief in Muncie, Indiana',
    description:
      'Flat, open land, about 119 freezing nights a year and Ball State’s heated buildings: how Muncie dries eyes and where everyday relief starts.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Muncie’s winters are the main reason eyes feel dry there. NOAA’s records for Delaware County Regional Airport show about 119 nights a year at or below freezing, so homes, classrooms and plants run dry heat for months, and wind crosses the flat farmland with little to slow it. Screen breaks, steering vents and fans away from your face, and a lubricating drop used as labeled help with everyday dryness. Symptoms that persist need an eye doctor.`,
      },
      { h: 'Muncie by the numbers: the airport record' },
      {
        p: `The weather station at Delaware County Regional Airport, north of downtown at roughly 937 feet above sea level, has three decades of NOAA normals behind it. For 1991 to 2020 they show:`,
      },
      {
        list: [
          `January highs averaging 36.0°F, with lows around 21.3°F.`,
          `About 36 days each year when the high never gets above freezing.`,
          `Nearly 119 nights a year at 32°F or below.`,
          `About 40.3 inches of precipitation a year, wettest in June at 4.81 inches.`,
          `February as the driest month, at 2.27 inches, with January and December close behind.`,
          `A July high near 85.8°F and around 17 days a year at 90°F or hotter.`,
        ],
      },
      {
        p: `The winter months are both the coldest and the driest on the gauge, which lines up with what many people notice: eyes feel worst from December through February.`,
      },
      { h: 'Humid outside, dry inside' },
      {
        p: `Muncie has no row in NOAA’s humidity table, so the nearest long record is Indianapolis. Winter air there is actually humid by the numbers: December afternoons average 71 percent relative humidity and January 70 percent. The air feels damp and gray.`,
      },
      {
        p: `That damp air is also cold, and cold air carries little water in absolute terms. Warm it to room temperature in a furnace and its relative humidity drops sharply. So a raw, cloudy January day in Muncie can still mean bone-dry air in your living room, your office and your car. Read more in our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air).`,
      },
      { h: 'Spring wind across open farmland' },
      {
        p: `The Indianapolis humidity record bottoms out in April, with afternoons averaging 55 percent. East Central Indiana is flat and heavily farmed, and spring brings gusty fronts, field work and drying soil. Wind is one of the quickest ways to pull moisture off the eye, and fine dust along county roads adds grit.`,
      },
      {
        list: [
          `Wear wraparound glasses for yard work, field work or a ride on the Cardinal Greenway.`,
          `Keep tractor and truck cab vents pointed below your face.`,
          `Rinse your hands before touching your eyes after outdoor work.`,
          `Rubbing grinds grit across the eye; blink and let tears move it, and see a doctor if something seems stuck.`,
        ],
      },
      { h: 'Ball State and screen-heavy days' },
      {
        p: `Ball State University brings thousands of students into heated classrooms and libraries each winter, and a lot of Muncie’s working life happens at desks, in hospital corridors and on factory floors. The pattern repeats across all of them: dry indoor air plus long periods of focus.`,
      },
      {
        p: `Concentration slows blinking. When blinks get shallow, the tear film thins and breaks up between them. A simple rule helps: when you finish a page, a chart or a spreadsheet row, look up, blink fully two or three times, and then keep going. Our guide on [computer use and dry eyes](/guides/eye-drops-for-computer-users) covers desk setups in detail.`,
      },
      { h: 'Using Quell as directed in a Muncie winter' },
      {
        p: `Quell’s label lists one purpose: {uses}. The directions say: {directions}. The formula is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what a heated house in February works against.`,
      },
      {
        list: [
          `Wash your hands before each use.`,
          `Follow the label’s handling line: {tip}.`,
          `Keep the bottle inside your coat or bag in cold weather, since the label says: {storage}.`,
          `Know what normal looks like; the label notes: {milky}.`,
          `Stop and call a doctor if the label’s stop-use signs appear.`,
        ],
      },
      { h: 'Ordering Quell to Muncie' },
      {
        p: `Quell ships to Muncie and anywhere else in the US from Brentwood, Tennessee. There’s no account required and no promised delivery date, so reorder with a few days’ margin. Standard shipping costs {shipping}, and {freeBottles} or more bottles ship free. See the [Muncie page](/eye-drops/muncie-in) or the [Indiana page](/eye-drops/state/indiana) for local details, or go straight to [checkout](/#buy).`,
      },
      { h: 'When to see an eye doctor in Muncie' },
      {
        p: `People searching for help with ongoing dryness are often looking for more than a drop. Pinning down why your eyes are dry, and deciding what to do about it, is an eye doctor’s work. On that point the label is direct: {stopUse} Our list of [symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a good place to check.`,
      },
    ],
    faq: [
      {
        q: 'Where can I get dry eye relief in Muncie, Indiana?',
        a: `Everyday dryness from heated rooms and wind usually responds to small habit changes and a lubricating drop used as labeled. For symptoms that don’t ease, see a Muncie eye doctor.`,
      },
      {
        q: 'Why do my eyes feel so dry in Indiana winters?',
        a: `Indiana winter air is cold, and heating it indoors drops its relative humidity sharply. Furnaces run for months, so homes and offices stay dry from late fall into spring.`,
      },
      {
        q: 'How cold does Muncie get in January?',
        a: `NOAA’s 1991 to 2020 normals for Delaware County Regional Airport put January’s average high at 36.0°F and its low at 21.3°F.`,
      },
      {
        q: 'Does Quell ship to Muncie?',
        a: `Yes. Quell ships to any US address from Brentwood, Tennessee, with no account needed. There’s no promised delivery date, so leave some margin before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-woodstock-ga:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00091585.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00091585.csv
   *   (CANTON, GA, elev 345.9 m, Cherokee County seat: annual precip 55.58 in;
   *   Oct 3.49, May 3.72, Mar 5.42, Dec 5.42; 82.2 days with 0.10 in or more.
   *   The Woodstock co-op station USC00099524 has no 1991-2020 normals file.)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00053873.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00053873.csv
   *   (CARTERSVILLE AP: Jan high 52.2 F, low 31.4; Jul high 89.6; 55.4 days at or
   *   above 90 F; 67.5 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ATLANTA, GA, WBAN 13874: Apr 78/49, Oct 84/53, Jul 86/58, Aug 87/58,
   *   annual 81/55, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-woodstock-ga',
    title: 'Dry eye relief in Woodstock, Georgia',
    description:
      'Hot summers under the AC, a dry October and long I-575 drives: what NOAA’s Cherokee County records say about dry eyes in Woodstock, GA.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Woodstock’s dry-eye season is really two seasons: months of air conditioning through a long, hot summer, and a crisp, low-humidity stretch in fall and early spring. Both dry the tear film, and long commutes on I-575 add hours of vent air and screen glare. Point vents away from your face, take screen breaks, and use a lubricating drop exactly as the label says. Ongoing or painful symptoms belong with an eye doctor.`,
      },
      { h: 'Cherokee County weather, from NOAA' },
      {
        p: `NOAA’s long-term normals for Woodstock’s own volunteer station weren’t published for 1991 to 2020, so the closest full rain record is Canton, the county seat farther north on I-575. For temperature, the nearest airport station with normals is Cartersville, in neighboring Bartow County. Together they describe the northern Atlanta suburbs well:`,
      },
      {
        list: [
          `Canton averages about 55.6 inches of precipitation a year.`,
          `October is Canton’s driest month at 3.49 inches, followed by May at 3.72.`,
          `March and December are the wettest, each about 5.4 inches.`,
          `Cartersville logs about 55 days a year at 90°F or hotter, with a July normal high of 89.6°F.`,
          `January averages a high of 52.2°F and a low of 31.4°F there, with roughly 68 freezing nights a year.`,
        ],
      },
      { h: 'Summer: humid outside, chilled and dry inside' },
      {
        p: `NOAA’s humidity table for Atlanta shows July and August mornings averaging 86 to 87 percent relative humidity, with afternoons near 58 percent. On those days, most of Woodstock retreats indoors and into cars, and the air conditioner runs hard. AC pulls water out of the air as it cools, and the cold, dry stream from a vent dries eyes quickly.`,
      },
      {
        list: [
          `Aim car vents at your chest or the floor instead of your face.`,
          `Move a desk away from a ceiling diffuser if you can.`,
          `Turn a bedroom ceiling fan down, or off, while you sleep.`,
          `Step outside for a few minutes during long indoor days; warmer, moister air is easier on your eyes.`,
        ],
      },
      { h: 'Fall and spring: the drier months' },
      {
        p: `The same Atlanta record shows April afternoons averaging 49 percent and October afternoons 53 percent, the two lowest points of the year. Those are the months people spend outdoors: Friday nights at high school football, weekends at Lake Allatoona, mornings on the Greenprints trails around downtown Woodstock. Dry air and a steady breeze both speed evaporation, and sun glare makes people squint instead of blink.`,
      },
      {
        p: `Sunglasses help in more than one way. They cut glare, so you squint less, and wraparound styles block wind. On the lake, spray and wind off the water add to it; our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) has tips for a day out on Allatoona.`,
      },
      { h: 'The I-575 commute' },
      {
        p: `Many Woodstock residents drive south toward Marietta and Atlanta for work. Heavy traffic means long stretches of staring straight ahead, blinking less, with the climate control running and the sun often low in the windshield in the morning or the evening. A few habits make the drive easier on your eyes:`,
      },
      {
        list: [
          `Set the fan to a lower speed and recirculate when the air outside is dusty or smoky.`,
          `At a long light or in a stopped lane, close your eyes gently for a second or two.`,
          `Keep sunglasses in the car, not in the house.`,
          `Don’t leave eye drops in the car; Georgia summers push cabin temperatures well past the label’s storage range.`,
        ],
      },
      { h: 'How Quell’s label describes it' },
      {
        p: `Quell is an over-the-counter lubricating drop. The Drug Facts Uses line reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, a fit for air-conditioned rooms that pull water away. The directions read: {directions}. The label also lists its storage range, {storage}, and a handling step: {tip}.`,
      },
      {
        p: `Each bottle is {size}, and the drop looks different from clear drops: {appearance} You can read every section on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Woodstock, and when to see a doctor' },
      {
        p: `Quell ships to Woodstock from Brentwood, Tennessee, with guest checkout. We don’t promise a delivery date, so order before your last bottle runs low. See the [Woodstock page](/eye-drops/woodstock-ga) and the [Georgia page](/eye-drops/state/georgia) for local information.`,
      },
      {
        p: `If you’ve been searching for help because dryness keeps coming back, an eye doctor is the right next step. Figuring out the cause and recommending what to do is their job, not a drop’s. The label lists when to stop: {stopUse} Our [self-check](/self-check) can help you decide, and [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Where can I find dry eye relief in Woodstock, GA?',
        a: `For everyday dryness from AC, commutes and screens, a lubricating drop used as labeled and a few habit changes help. If symptoms persist or hurt, see an eye doctor in Woodstock or nearby.`,
      },
      {
        q: 'Why do my eyes get dry in Georgia summers?',
        a: `Air conditioners remove moisture from the air as they cool it, and Georgians spend much of the summer in AC at home, at work and in the car. Cold, dry air blowing on your face dries the tear film quickly.`,
      },
      {
        q: 'What is the driest month in Cherokee County, Georgia?',
        a: `October. NOAA’s 1991 to 2020 normals for Canton, the county seat, show 3.49 inches, the lowest of any month, with May second at 3.72 inches.`,
      },
      {
        q: 'Can I leave eye drops in my car in Georgia?',
        a: `It’s better not to. Quell’s label says: {storage}. A parked car in a Georgia summer gets much hotter than that.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-richmond-ky:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00156810.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00156810.csv
   *   (RICHMOND STATE POLICE, KY, elev 303.3 m: annual precip 48.12 in; Sep 2.66,
   *   Aug 3.32, Jul 4.99, May 4.96, Apr 4.67; 77.3 days with 0.10 in or more.
   *   Snow normals at this station look incomplete, so none used.)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00150619.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00150619.csv
   *   (BEREA COLLEGE, KY, nearest temperature normals: Jan high 45.3 F, low 28.7;
   *   Jul high 86.8; 21.4 days at or above 90 F; 84.3 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LEXINGTON, KY, WBAN 93820: Jan 81/68, Apr 75/54, Sep 85/55, Oct 83/55,
   *   Dec 82/67, annual 81/59, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-richmond-ky',
    title: 'Dry eye relief in Richmond, Kentucky',
    description:
      'A dry September, months of furnace heat and long I-75 drives: what NOAA’s Madison County records say about dry eyes in Richmond, KY.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `In Richmond, Kentucky, dry eyes tend to flare in two stretches: the dry late summer and early fall, and the heating months from November through March. Furnace air, long I-75 drives and study sessions at Eastern Kentucky University all pull moisture from the eye. Blinking breaks, a humidifier, keeping vents off your face and a lubricating drop used as labeled cover everyday dryness. An eye doctor should check anything persistent or painful.`,
      },
      { h: 'Richmond’s rainfall and temperatures' },
      {
        p: `NOAA has a rain gauge in Richmond at the Kentucky State Police post, and its 1991 to 2020 normals give a clear picture of the year’s wet and dry months. Temperature normals come from the nearest station that records them, at Berea College, a short drive south:`,
      },
      {
        list: [
          `About 48.1 inches of precipitation a year in Richmond.`,
          `September is the driest month at 2.66 inches, and August is second at 3.32.`,
          `July and May are the wettest, each close to 5 inches.`,
          `Berea’s January normal high is 45.3°F, with a low of 28.7°F.`,
          `About 84 nights a year reach freezing or below there.`,
          `July highs average 86.8°F, with about 21 days a year at 90°F or more.`,
        ],
      },
      { h: 'Why late summer and fall hit eyes hard' },
      {
        p: `With September and August as Richmond’s two driest months, the land is often at its driest just as people head outdoors for football, festivals and cooler evenings. NOAA’s humidity record for nearby Lexington shows September and October afternoons averaging 55 percent relative humidity, among the lowest of the year, and April lower still at 54 percent.`,
      },
      {
        p: `Dry ground means dust. Hay and tobacco fields, gravel lanes and construction along the growing edges of town all put fine particles in the air, and a breeze carries them into eyes. Grit plus dry air makes eyes feel scratchy. Sunglasses, especially wraparound ones, keep a lot of it out, and washing your hands before touching your face helps too.`,
      },
      { h: 'Heating season in Madison County' },
      {
        p: `The Lexington record shows winter afternoons that look humid on paper, near 68 percent in January. But cold air carries little water, and when a furnace heats it to room temperature, relative humidity indoors falls well below that. With more than 80 freezing nights a year, the heat in most Richmond homes runs for months.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it on the schedule its maker sets.`,
          `Close or redirect heat registers that blow straight at a bed, couch or desk chair.`,
          `Keep space heaters pointed at your legs, not your face.`,
          `Drink water through the day; dry indoor air dries more than your eyes.`,
        ],
      },
      {
        p: `Our [guide to space heaters and dry eyes](/guides/dry-eyes-from-a-space-heater) goes into more detail.`,
      },
      { h: 'EKU, I-75 and daily life' },
      {
        p: `Richmond’s days revolve around a few places, and each has its own effect on eyes:`,
      },
      {
        list: [
          `Eastern Kentucky University’s classrooms, labs and libraries, where long reading sessions mean fewer blinks.`,
          `The I-75 commute north to Lexington, with vents running and eyes fixed on traffic.`,
          `Warehouse, manufacturing and hospital shifts that run long under bright lights and steady airflow.`,
          `Weekends at Fort Boonesborough State Park on the Kentucky River, or on trails in the Berea forest to the south, often in wind and sun.`,
        ],
      },
      {
        p: `A focused screen session is one of the most common reasons eyes feel dry by late afternoon. Every few minutes, look away from the screen and blink completely, so the upper lid meets the lower one. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why full blinks matter.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. The label’s Uses line is: {uses}. The directions are: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, the main issue with heated or windy air.`,
      },
      {
        p: `The active ingredients are {actives}. The warnings section reads: {warnings}. If you’re unsure whether the drop suits you, a Richmond pharmacist can review the label with you. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Richmond, and getting help' },
      {
        p: `Quell ships to Richmond and the rest of the US from Brentwood, Tennessee. Checkout doesn’t need an account, and an unopened bottle can be refunded within {returnDays} days of delivery without sending it back. There’s no promised delivery date, so order early. More on the [Richmond page](/eye-drops/richmond-ky) and the [Kentucky page](/eye-drops/state/kentucky).`,
      },
      {
        p: `Anyone searching for dry eye help because symptoms won’t settle should talk to an eye doctor. Sorting out the cause, and what to do next, is their call. The label says: {stopUse} See our list of [symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Where can I get dry eye relief in Richmond, KY?',
        a: `Everyday dryness from furnace heat, wind and screens usually eases with small habit changes and a lubricating drop used as labeled. For symptoms that persist, see an eye doctor in Richmond or Lexington.`,
      },
      {
        q: 'What is the driest month in Richmond, Kentucky?',
        a: `September. NOAA’s 1991 to 2020 normals for the Richmond station show about 2.66 inches of precipitation that month, the lowest of the year, with August next at 3.32 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Kentucky in the fall?',
        a: `Late summer and early fall are among the driest times of year in central Kentucky, and people spend more time outdoors in wind, sun and dust. Then the furnace comes on and dries the air indoors.`,
      },
      {
        q: 'Can EKU students order Quell to campus?',
        a: `Quell ships to any US address, including campus mail addresses. Use the exact format your housing or mail office gives, and allow extra time, since there’s no promised delivery date.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-a-hotel',
    title: 'Can you ship eye drops to a hotel?',
    description:
      'Yes, Quell ships to US hotels. How to address it for a guest, what to ask the front desk first, and how to time an order with no promised delivery date.',
    category: 'shipping',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Yes. Quell ships to any US street address, and a hotel is one. Put your name as it appears on the reservation, write “Hotel guest, hold for arrival” with your check-in and check-out dates, and use the hotel’s own street address. Call the front desk first to confirm they accept guest packages. Because no delivery date is promised, order well before you check in.`,
      },
      { h: 'Ship package to hotel before arrival: call first' },
      {
        p: `Hotels handle guest mail very differently. Some have a package room, some keep boxes behind the front desk, and a few refuse anything that arrives before the guest. A two-minute call settles it. Ask:`,
      },
      {
        list: [
          `Do you accept packages for guests who haven’t checked in yet? How many days early?`,
          `What exact name and wording should be on the label?`,
          `Is there a fee for receiving or holding a package?`,
          `Where are packages kept, and is it indoors and climate-controlled?`,
          `What happens to a package that arrives after I check out?`,
        ],
      },
      {
        p: `Write down the name of the person you spoke with and the date. If the box goes missing at the desk later, that note makes the conversation easier.`,
      },
      { h: 'How to address a package to a hotel guest' },
      {
        p: `Checkout on quelldrop.com has the standard address fields, so the hotel details go into them like this:`,
      },
      {
        list: [
          `Name: your first and last name, exactly as on the booking. If the room is under someone else’s name, use theirs, or ask the hotel how they want it.`,
          `Address line 1: the hotel’s street address, not a reservations office or a corporate address.`,
          `Second address line: “Hotel guest, hold for arrival” plus your dates, for example “Arr 12/18, dep 12/22”. Add a confirmation number if the hotel asks for it.`,
          `City, state and ZIP: the hotel’s, copied from its own website or your confirmation email.`,
          `Email: one you’ll check while traveling, since the shipping email carries the tracking link.`,
        ],
      },
      {
        p: `The company name of the hotel can go at the start of line 2 if there’s room. Our guide to [getting the shipping address right](/guides/getting-the-address-right) covers the common mistakes, like swapping a suite number into the wrong field.`,
      },
      { h: 'Timing an order with no promised delivery date' },
      {
        p: `Quell ships from Brentwood, Tennessee, and the site doesn’t promise when a package will arrive. That isn’t a problem at home, but a hotel stay has a hard end date. A few ways to reduce the risk:`,
      },
      {
        list: [
          `Order as soon as your reservation is confirmed, as long as the hotel accepts early packages.`,
          `For a stay of only a night or two, ship to home and pack the bottle instead.`,
          `Around holidays, carriers are busier, so add extra margin.`,
          `Watch the tracking link; if it shows delivered, ask the desk to check under your name and under the hotel’s name.`,
        ],
      },
      {
        p: `The [order tracking guide](/guides/how-to-track-your-order) explains what each status means.`,
      },
      { h: 'If it arrives after you’ve checked out' },
      {
        p: `This is the biggest risk of shipping to a hotel. Hotels may hold a late package for a while, send it back, or forward it if you pay the postage. Policies vary, so ask when you call. If you’re leaving and the box hasn’t shown up, give the front desk your home address and phone number and ask what they’ll do.`,
      },
      {
        p: `If a bottle you never opened is returned or reaches you later, Quell’s refund policy may help: {returns}. The window is {returnDays} days from delivery. A box that arrives damaged, the wrong item, or a broken tamper seal is replaced; contact us through the [About page](/about#contact).`,
      },
      { h: 'Heat, cold and the hotel mailroom' },
      {
        p: `The label gives a storage range: {storage}. A hotel back office is usually climate-controlled, but a loading dock in July or a car trunk in January may not be. When you pick up the box, open it in your room and check the bottle. The label also notes {milky}, which is how the drop normally looks. If the seal is broken, don’t use it; ask for a replacement.`,
      },
      { h: 'Hotels outside the United States' },
      {
        p: `Quell only ships to US addresses. A hotel in Canada, Mexico or overseas can’t be the shipping address, so buy before you leave and pack it. TSA’s liquids rule allows containers of 3.4 ounces or less in a carry-on, and a {size} bottle is well under that. See [traveling with eye drops](/guides/traveling-with-eye-drops) for packing tips, and [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) for what to do once you’re there.`,
      },
      { h: 'Using the drops while you’re away' },
      {
        p: `Hotel rooms tend to be dry: constant heating or air conditioning, a fan by the bed and long days of travel. The label’s directions don’t change on the road: {directions}. Keep the bottle in your bag rather than on a sunny windowsill, follow the label’s line about the tip ({tip}), and stop if any of the label’s stop-use signs appear.`,
      },
    ],
    faq: [
      {
        q: 'How do you address a package to a hotel guest?',
        a: `Use your name as it appears on the reservation, the hotel’s street address, and a second line that says “Hotel guest, hold for arrival” with your check-in and check-out dates. Confirm the wording with the front desk before you order.`,
      },
      {
        q: 'Can I ship a package to a hotel before I arrive?',
        a: `Often yes, but each hotel sets its own rules on how early it will accept and hold a guest’s package, and some charge a fee. Call the front desk before ordering.`,
      },
      {
        q: 'What happens if my package arrives at the hotel after I check out?',
        a: `It depends on the hotel: some hold it, some return it, and some forward it for a fee. Leave your home address with the front desk, and if an unopened Quell bottle comes back to you, it may qualify for a refund within the {returnDays}-day window.`,
      },
      {
        q: 'Will Quell arrive before my hotel stay?',
        a: `Quell doesn’t promise a delivery date, so order as early as the hotel allows. For short stays it’s usually simpler to ship to home and pack the bottle.`,
      },
    ],
  },
  {
    slug: 'is-it-safe-to-buy-eye-drops-from-a-social-media-ad',
    title: 'Is it safe to buy eye drops from a social media ad?',
    description:
      'An ad can lead anywhere. How to check the seller, the Drug Facts panel, the company address and refund terms before you buy eye drops from a social feed.',
    category: 'ordering',
    addedOn: '2026-11-13',
    body: [
      {
        p: `It can be, but an ad tells you nothing about who’s selling. Before you buy, leave the ad and type the seller’s web address yourself. Then check for a full Drug Facts panel, a named company with a US street address and phone number, where the order ships from, and refund terms you can read before paying. If any of those are missing, buy somewhere that shows them.`,
      },
      { h: 'Why an ad needs extra checking' },
      {
        p: `Social feeds are built for fast decisions: a short video, a big discount and a buy button that opens inside the app. That speed is the problem. You may never see the seller’s home page, its company name or its policies before you type in a card number. Eye drops are an over-the-counter drug, and for a product you put in your eyes, knowing who made and shipped it matters more than the discount.`,
      },
      { h: 'Step 1: leave the ad and go to the site directly' },
      {
        list: [
          `Note the brand name and the website shown in the ad.`,
          `Close the ad and open your regular browser.`,
          `Type the web address yourself, or search for the brand name and compare the result with the ad’s link.`,
          `Look closely at the address bar. Lookalike sites swap a letter, add a word, or end in an unusual domain.`,
        ],
      },
      {
        p: `For Quell, the shop is quelldrop.com. Typing it directly is the easiest way to know you’re on our site. Our guide on [whether quelldrop.com is the official site](/guides/is-quelldrop-the-official-quell-site) explains who runs it.`,
      },
      { h: 'Step 2: find the Drug Facts panel' },
      {
        p: `Every over-the-counter drug sold in the US carries a Drug Facts label in a standard FDA format: active ingredients, purpose, uses, warnings, directions, other information and inactive ingredients. A real seller has no reason to hide it. Look for it on the product page or a linked page, and read it before buying.`,
      },
      {
        p: `As an example, Quell’s panel is posted in full on our [Drug Facts page](/drug-facts). The active ingredients are {actives}, and the Uses line reads {uses}. If an ad’s product page has no panel, or the panel is a blurry photo you can’t read, count that as a warning sign.`,
      },
      { h: 'Step 3: check the company behind it' },
      {
        list: [
          `A company name you can look up, not just a brand or a store name.`,
          `A US street address, not only an email form or a PO box.`,
          `A phone number with stated hours, and a person who answers.`,
          `Terms of sale and a privacy policy that name the same company.`,
        ],
      },
      {
        p: `Quell is sold by {company}, {address}. The phone number is {phone}, answered {hours}. Those details are on the [About page](/about) and in our [terms](/terms), and they match each other.`,
      },
      { h: 'Step 4: find out where it ships from' },
      {
        p: `A store that sounds local may ship from overseas, which can mean long waits, customs delays and products made for another market with a different label. The product page or shipping policy should say where orders ship from. Quell ships from Brentwood, Tennessee, to US addresses only. Our guide to [buying eye drops from overseas websites](/guides/is-it-safe-to-buy-eye-drops-from-overseas-websites) covers the risks of foreign sellers in more detail.`,
      },
      { h: 'Step 5: read the price and refund terms before paying' },
      {
        p: `Ads often show one price and reveal shipping, handling or a subscription only at the last step. Before you pay, check the full total, whether you’re being signed up for repeat charges, and what happens if you change your mind. A refund policy you can’t find until after checkout isn’t much of a policy.`,
      },
      {
        p: `Quell has no subscription, and there are no promo codes. Shipping is {shipping}, or free on {freeBottles} or more bottles. For unopened bottles, the refund policy reads: {returns}.`,
      },
      { h: 'Red flags in eye drop ads' },
      {
        list: [
          `Promises no drug label can make, such as fixing every eye problem or working for good after one bottle.`,
          `Countdown timers and “only 3 left” banners that reset when you reload.`,
          `Before-and-after photos of people’s eyes with no source.`,
          `Comments turned off, or a page created very recently.`,
          `Payment by gift card, wire transfer or cryptocurrency only.`,
          `A product photo whose label doesn’t match the name in the ad.`,
        ],
      },
      { h: 'If you already ordered from an ad' },
      {
        p: `Look for a confirmation email and a company name on your card statement. If neither matches the ad, or the product never arrives, contact your card issuer about a dispute. If a bottle arrives with a broken seal, an unreadable label or a look that doesn’t match the label’s description, don’t put it in your eyes. A pharmacist can help you read an unfamiliar label.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops sold through social media ads legit?',
        a: `Some are and some aren’t; the ad itself doesn’t tell you. Leave the ad, type the seller’s site address yourself, and look for a full Drug Facts panel, a named US company with a street address and phone number, and readable refund terms.`,
      },
      {
        q: 'How do I check a website from an ad before buying eye drops?',
        a: `Close the ad, type the address into your browser, and compare it letter by letter. Then check the Drug Facts panel, the company’s address and phone number, where it ships from, and the refund policy.`,
      },
      {
        q: 'How do I get to the real Quell website?',
        a: `Type quelldrop.com into your browser’s address bar. The site lists {company}, its Brentwood, Tennessee address and the phone number {phone}.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-fall',
    title: 'Dry eyes in fall: why autumn feels different',
    description:
      'The first furnace days, crisp wind and falling humidity: why eyes feel drier in autumn, and simple ways to get through the season change comfortably.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Eyes often feel drier in fall because several changes land at once: the furnace switches on for the first time in months, outdoor air turns cooler and drier, wind picks up, and shorter days pull people indoors to screens. Each of those speeds up evaporation from the tear film. Adjusting your heating, blocking wind, blinking more at screens and using a lubricating drop as labeled can help you through the transition.`,
      },
      { h: 'Dry eyes in fall: what actually changes' },
      {
        p: `Summer air in much of the country is humid, and many people spend the season with windows open or air conditioning on. Fall flips several things at the same time, which is why the change can feel sudden rather than gradual:`,
      },
      {
        list: [
          `Cooler air holds less water, so the same relative humidity outside means less moisture once it’s warmed indoors.`,
          `The heat comes on, often on the first cold morning, and forced air starts blowing through the house.`,
          `Cold fronts bring gusty, dry wind.`,
          `Sunset comes earlier, so evenings shift to TVs, phones and laptops.`,
          `School, work and holiday planning ramp up screen time and cut sleep.`,
        ],
      },
      { h: 'The first heating days' },
      {
        p: `A furnace that’s been off since spring often does its hardest work in the first chilly weeks, when nobody has pulled the humidifier out of the closet yet. Forced-air heat warms the air without adding water, so indoor relative humidity drops. Dust that settled in the ducts over the summer can also blow through on the first run.`,
      },
      {
        list: [
          `Change or clean the furnace filter before the first cold night.`,
          `Get a humidifier out and running when the heat comes on, and clean it as directed.`,
          `Check which way the registers blow, and turn any aimed at a bed or favorite chair.`,
          `Set the thermostat a degree or two lower; warmer air dries faster.`,
        ],
      },
      {
        p: `Our full guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on the months ahead.`,
      },
      { h: 'Dry eyes in autumn wind' },
      {
        p: `Fall cold fronts often arrive with gusty wind. Wind pulls moisture off the surface of the eye and blows leaf dust and grit around. Raking, leaf blowing, football games and fall hikes all put your face in it.`,
      },
      {
        list: [
          `Wear sunglasses, ideally wraparound, for yard work and outdoor games.`,
          `Stand upwind of the leaf blower, or wear safety glasses while you run it.`,
          `On a bike or a run, a brimmed cap and glasses cut the wind on your eyes.`,
          `When you come inside, wash your hands before touching your face.`,
        ],
      },
      { h: 'Dry itchy eyes in fall' },
      {
        p: `Plenty of people describe autumn eyes as both dry and itchy. Dryness itself can feel scratchy or gritty. But itching that comes with sneezing, a runny nose or puffy eyelids may have a cause other than dryness, and a lubricating drop isn’t labeled for that. Quell’s Uses line is specific: {uses}. If itching is the main complaint, ask a pharmacist or doctor what’s behind it. [Eye drops for itchy eyes](/guides/eye-drops-for-itchy-eyes) explains what to look for on labels.`,
      },
      { h: 'Dry eyes and the season change indoors' },
      {
        p: `Shorter days change routines. Sunset before dinner means more evenings on the couch with a screen, and the end of daylight saving time in early November can scramble sleep for a week or two. Both matter: people blink less while looking at screens, and short sleep tends to leave eyes feeling tired and dry the following morning.`,
      },
      {
        list: [
          `Take regular breaks: every 20 minutes, look at something across the room and blink slowly.`,
          `Keep phones and tablets slightly below eye level so the lids cover more of the eye.`,
          `Turn on a lamp rather than staring at a bright screen in a dark room.`,
          `Protect your sleep when the clocks change.`,
        ],
      },
      { h: 'A lubricating drop during the transition' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That oil layer is the part of the tear film that slows evaporation, which is the main thing heated air and wind work against. The label’s directions read: {directions}. Follow the handling instruction every time: {tip}.`,
      },
      {
        p: `Fall is also when bottles get left in cars for football tailgates and road trips. The label gives a storage range, {storage}, and early fall afternoons can still heat a parked car past it. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When autumn dryness is something else' },
      {
        p: `Seasonal dryness tends to ease as you adjust the heat and your habits. If it doesn’t, or if it comes with pain or vision changes, see an eye doctor. The label is clear: {stopUse} Our [self-check](/self-check) can help you think it through, though it’s not a diagnosis. For a list of warning signs, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in the fall?',
        a: `Cooler, drier outdoor air, the first weeks of furnace heat, windy cold fronts and more evening screen time all arrive together in fall. Each one speeds evaporation from the tear film.`,
      },
      {
        q: 'Can the change of seasons cause dry eyes?',
        a: `The shift from summer to fall changes the air your eyes sit in: indoor heat comes on and outdoor humidity drops. Many people notice more dryness for a few weeks while they adjust their heating and habits.`,
      },
      {
        q: 'Why are my eyes dry and itchy in autumn?',
        a: `Dry eyes can feel scratchy, but itching with sneezing or a runny nose may have another cause. Quell is labeled for dryness and irritation, not itching, so ask a pharmacist or doctor if itch is the main symptom.`,
      },
      {
        q: 'Should I turn on a humidifier when the heat comes on?',
        a: `It’s a good time to start one. Forced-air heat dries indoor air, and a clean humidifier running in the bedroom can make the first heating weeks easier on your eyes.`,
      },
    ],
  },
  {
    slug: 'hanukkah-gifts-for-someone-with-dry-eyes',
    title: 'Hanukkah gifts for someone with dry eyes',
    description:
      'Eight nights of practical gift ideas for someone with dry eyes, from a bedside humidifier to wraparound sunglasses, plus how to time an order.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Good Hanukkah gifts for someone with dry eyes make the air and the day easier on their eyes: a bedside humidifier, wraparound sunglasses, a warm scarf for windy walks, a screen-break timer or a good reading lamp. A bottle of lubricating eye drops can be one of the eight nights. Hebcal’s calendar puts Hanukkah 2026 from sundown on December 4 to nightfall on December 12, so order early.`,
      },
      { h: 'When Hanukkah 2026 falls' },
      {
        p: `According to Hebcal’s Jewish calendar, Hanukkah 2026 begins at sundown on Friday, December 4, and ends at nightfall on Saturday, December 12. That’s earlier than in some years, and it lands right as furnaces are running hard in much of the country. If you’re shipping anything, plan around that first night rather than the last.`,
      },
      { h: 'Eight nights, eight ideas' },
      {
        p: `One way to plan is a small, useful gift each night, building toward something bigger. These ideas target the everyday things that dry eyes out: heated air, wind, screens and short sleep.`,
      },
      {
        list: [
          `Night 1: a cool-mist humidifier for the bedroom, where people spend eight hours breathing heated air.`,
          `Night 2: wraparound sunglasses that block wind on winter walks.`,
          `Night 3: a soft scarf or neck gaiter that can be pulled up against a cold breeze.`,
          `Night 4: a reading lamp, so they aren’t squinting at a bright screen in a dark room.`,
          `Night 5: a simple kitchen timer or a smart speaker reminder set for screen breaks.`,
          `Night 6: a refillable water bottle for the desk.`,
          `Night 7: a sleep mask, for anyone whose bedroom has a fan or a vent nearby.`,
          `Night 8: a bottle or two of lubricating eye drops, wrapped like any other gift.`,
        ],
      },
      { h: 'Hanukkah gifts for adults who work at screens' },
      {
        p: `Anyone who spends the workday on a laptop blinks less than they think. Concentration slows blinking, and each partial blink leaves more of the eye exposed. A monitor stand that puts the screen slightly below eye level, an anti-glare screen filter or a desk plant to look at between tasks all make the habit easier. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'Gifts for the person who’s always outside' },
      {
        p: `Walkers, runners, cyclists and anyone who shovels the driveway take a lot of cold wind to the face. Wraparound sunglasses or ski goggles, a brimmed winter hat and a windproof face covering are thoughtful practical gifts. For someone who travels for the holidays, a clear zip bag for carry-on liquids is handy; TSA’s liquids rule limits each container in a carry-on to 3.4 ounces.`,
      },
      { h: 'Giving Quell as one of the gifts' },
      {
        p: `Eye drops are a personal gift, so it helps to know the person already deals with dry eyes and doesn’t mind you noticing. Quell is an over-the-counter lubricating drop whose label lists its Uses as {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Each bottle holds {size}, and the label gives the directions as {directions}.`,
      },
      {
        list: [
          `Read the warnings before you give it, since the label says: {warnings}.`,
          `Mention that the drop looks different from clear drops: {appearance}`,
          `Leave the box sealed so they can see the tamper seal is intact.`,
          `If they wear contact lenses or use other eye drops, the label doesn’t cover that; suggest they ask their eye doctor.`,
        ],
      },
      {
        p: `Our guides on [sending Quell as a gift](/guides/sending-quell-as-a-gift) and [whether eye drops make a good gift](/guides/are-eye-drops-a-good-gift) cover the etiquette.`,
      },
      { h: 'Ordering in time for the first night' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, and the site doesn’t promise a delivery date. December is busy for every carrier, so order in November if you can. Shipping is {shipping} on a smaller order, and {freeBottles} or more bottles ship free, which works well if you’re giving to more than one person.`,
      },
      {
        p: `There are no promo codes or holiday sales, so the price you see is the price. If a bottle goes unopened, the policy is: {returns}. You can order from the [home page](/#buy) as a guest.`,
      },
      { h: 'If their eyes need more than a gift' },
      {
        p: `A humidifier and a bottle of drops help with ordinary dryness. If someone you love complains of eye pain, blurry vision or dryness that never lets up, the kindest gift may be encouragement to see an eye doctor. The label lists when to stop and call a doctor: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is a good Hanukkah gift for someone with dry eyes?',
        a: `Practical gifts that make the air easier on eyes work well: a bedroom humidifier, wraparound sunglasses, a reading lamp or a screen-break timer. A bottle of lubricating eye drops can be one of the eight nights.`,
      },
      {
        q: 'When does Hanukkah start in 2026?',
        a: `Hebcal’s calendar lists Hanukkah 2026 from sundown on Friday, December 4, to nightfall on Saturday, December 12.`,
      },
      {
        q: 'Are eye drops an appropriate Hanukkah gift?',
        a: `They can be, for someone who already deals with dry eyes and would appreciate it. Pair a bottle with something more personal, and leave the box sealed so they can check the tamper seal.`,
      },
      {
        q: 'How early should I order Quell for Hanukkah?',
        a: `As early as you can. Quell doesn’t promise delivery dates and December is a busy shipping month, so ordering in November gives the most margin before the first night.`,
      },
    ],
  },
  {
    slug: 'lubricant-vs-lubricating-eye-drops',
    title: 'Lubricant eye drops vs. lubricating eye drops',
    description:
      'Lubricant and lubricating eye drops are the same kind of product. Here’s where each word comes from, what the federal rules say, and how to read the label.',
    category: 'label',
    addedOn: '2026-11-13',
    body: [
      {
        p: `There’s no difference in kind. “Lubricant eye drops” is the wording the FDA’s over-the-counter rules use to identify the product on its label, and “lubricating eye drops” is the everyday adjective many brands and shoppers use for the same thing. What matters is the Drug Facts panel: the active ingredients, each one’s stated purpose, and the Uses line.`,
      },
      { h: 'Where “lubricant” comes from: 21 CFR part 349' },
      {
        p: `Over-the-counter eye drops in this category follow federal rules in Title 21 of the Code of Federal Regulations, part 349, titled “Ophthalmic drug products for over-the-counter human use.” Section 349.60 says the label identifies a demulcent product as a “lubricant” or a “demulcent (lubricant),” followed by “eye” or “ophthalmic” and the dosage form, such as drops. Section 349.65 does the same for emollient products.`,
      },
      {
        p: `So “lubricant eye drops” is a statement of identity, a phrase built from the rule. “Lubricating” isn’t in that list; it’s a descriptive word that shows up on websites, in store aisles and in search boxes. Both point to the same group of products.`,
      },
      { h: 'Eye drops and lubricants: the ingredient categories' },
      {
        p: `Part 349 also lists which active ingredients can be used and at what strengths. Two groups are relevant here:`,
      },
      {
        list: [
          `Demulcents (section 349.12), defined in section 349.3 as agents, usually water-soluble polymers, applied to the eye to protect and lubricate mucous membrane surfaces and relieve dryness and irritation. Glycerin and polysorbate 80 are both on the list.`,
          `Emollients (section 349.14), defined as agents, usually a fat or oil, applied locally to the eyelids. Light mineral oil is on that list.`,
        ],
      },
      {
        p: `Quell has ingredients from both groups. Its active ingredients are {actives}. On the Drug Facts panel, glycerol and polysorbate 80 carry the purpose “Lubricant,” and light mineral oil carries “Emollient.” Our guides to [demulcents](/guides/what-is-a-demulcent-in-eye-drops) and [emollient eye drops](/guides/emollient-eye-drops) go deeper on each.`,
      },
      { h: 'What the Uses line tells you' },
      {
        p: `Part 349 gives a short list of approved indications, and a label uses one or more of them. That’s the Uses line. Quell’s reads: {uses}. It’s the most important line to compare between products, because it says what the drop is labeled to do, whatever the front of the box calls it.`,
      },
      {
        p: `Words like “soothing,” “hydrating” or “moisturizing” on the front of a box are marketing, not part of the federal statement of identity. They aren’t necessarily wrong, but they don’t replace the Drug Facts panel.`,
      },
      { h: 'Lubricant eye drops vs. artificial tears' },
      {
        p: `“Artificial tears” is another everyday name for the same broad category. You won’t find it in the part 349 identity statement, but it’s widely used, and products called artificial tears, lubricant drops and lubricating drops all live in the same aisle. Our guide to [artificial tears vs. lubricating eye drops](/guides/artificial-tears-vs-lubricating-eye-drops) compares the terms in more detail.`,
      },
      { h: 'Lubricant eye drops for dry eyes: reading the label' },
      {
        list: [
          `Active ingredients: names and strengths, plus the purpose of each, such as lubricant or emollient.`,
          `Uses: the labeled indication, which is what the product is for.`,
          `Warnings: allergies, when to stop and when not to use. Quell’s reads: {warnings}.`,
          `Directions: how much and how often. Quell’s: {directions}.`,
          `Other information: storage and appearance. Quell’s storage line reads: {storage}.`,
          `Inactive ingredients: everything else in the bottle, including any preservative.`,
        ],
      },
      {
        p: `Our step-by-step guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section.`,
      },
      { h: 'Lubricant eye drops preservative free' },
      {
        p: `Whether a product contains a preservative shows up in its inactive ingredients, not in the word “lubricant” or “lubricating.” Quell is preservative-free; its inactive ingredients are {inactives}. Because a multi-dose bottle without a preservative depends on clean handling, the label says: {tip}.`,
      },
      { h: 'What the label leaves to your doctor' },
      {
        p: `Neither word tells you whether a drop is right for you. The Quell label doesn’t give directions for contact lens wearers, children, or using it alongside other eye drops; ask your eye doctor or pharmacist about those. And if a lubricant drop isn’t helping, the label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between lubricant and lubricating eye drops?',
        a: `There isn’t one in kind. “Lubricant” is the identity term in the FDA’s over-the-counter rules at 21 CFR part 349, and “lubricating” is the everyday adjective for the same products.`,
      },
      {
        q: 'What are lubricant eye drops used for?',
        a: `Each product’s Uses line says. Quell’s reads: {uses}.`,
      },
      {
        q: 'Are lubricant eye drops the same as artificial tears?',
        a: `They’re the same broad category of over-the-counter drops. “Artificial tears” is a common name, while “lubricant” is the identity term used in the federal rules; compare products by their Drug Facts panels.`,
      },
      {
        q: 'What ingredients make an eye drop a lubricant?',
        a: `The federal rules list approved demulcents, such as glycerin and polysorbate 80, and emollients, such as light mineral oil. The Drug Facts panel names each active ingredient and its purpose.`,
      },
    ],
  },
  {
    slug: 'glycerin-vs-glycerol-in-eye-drops',
    title: 'Glycerin vs. glycerol in eye drops: same thing?',
    description:
      'Glycerin and glycerol are two names for one compound. Why labels differ, what federal rules call it, and how to compare glycerin eye drops on a label.',
    category: 'formula',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Yes, they’re the same thing. Glycerin and glycerol are two names for one compound, and NIH’s PubChem database lists glycerin and glycerine as synonyms of glycerol. The federal over-the-counter rule for eye drops calls it glycerin, while Quell’s Drug Facts panel uses glycerol. Either way, its purpose on an eye drop label is “lubricant,” and the Uses line tells you what the drop is for.`,
      },
      { h: 'One compound, three spellings' },
      {
        p: `PubChem, the chemistry database run by the National Institutes of Health, files the compound under the name glycerol. Its synonym list includes glycerin, glycerine and 1,2,3-propanetriol, all pointing to the same chemical record. The “triol” in that last name refers to the three alcohol groups in the molecule.`,
      },
      {
        list: [
          `Glycerol: the name PubChem uses for the record, and the one on Quell’s carton.`,
          `Glycerin: the name in the FDA’s over-the-counter eye drop rule, and common on US product labels.`,
          `Glycerine: an alternate spelling of glycerin, also listed by PubChem.`,
        ],
      },
      {
        p: `If you’re scanning ingredient lists, for example to compare two products, search for all three.`,
      },
      { h: 'What the federal rule calls it' },
      {
        p: `Title 21 of the Code of Federal Regulations, part 349, covers over-the-counter ophthalmic drug products. Section 349.12 lists the approved demulcents, the ingredients that lubricate and protect the surface of the eye. Glycerin is on that list, along with polysorbate 80 and several others. The same section sets the allowed strength range for each.`,
      },
      {
        p: `A label can use either name, and the substance is the same. Quell lists it as {glycerol}, one of three active ingredients alongside {polysorbate} and {mineralOil}. Our guide to [what a demulcent is](/guides/what-is-a-demulcent-in-eye-drops) explains that group of ingredients.`,
      },
      { h: 'Glycerin eye drops uses' },
      {
        p: `Glycerin doesn’t have “uses” of its own on a label; the product does. The Uses section is where a Drug Facts panel states what the drop is for, and it applies to the whole formula. Quell’s reads: {uses}.`,
      },
      {
        p: `Next to each active ingredient, the panel also names its purpose. Quell’s panel gives glycerol the purpose “Lubricant,” the same purpose it gives polysorbate 80. Light mineral oil is listed as an “Emollient,” which the federal rule defines as an agent, usually a fat or oil, applied locally to the eyelids. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and that’s a job for the formula as a whole rather than any one ingredient.`,
      },
      { h: 'Glycerin eye drops preservative free: check the inactive list' },
      {
        p: `“Glycerin eye drops” describes the active ingredient, not whether the bottle has a preservative. That answer is in the inactive ingredients. Quell’s are {inactives}. There’s no preservative among them, which is why the label’s handling line matters every time you open the bottle: {tip}. Read [what preservative-free means](/guides/what-does-preservative-free-mean) for more.`,
      },
      { h: 'How to compare glycerin eye drops on a label' },
      {
        list: [
          `Look for glycerin, glycerine or glycerol in the active ingredients, with its strength in parentheses.`,
          `Check the purpose column; for these it will usually read “lubricant.”`,
          `Read the Uses line to see what the product is labeled for.`,
          `Compare the other actives. Some drops pair glycerin with other demulcents or with an oil.`,
          `Read the inactive ingredients, including whether there’s a preservative.`,
          `Check the warnings. Quell’s say: {warnings}.`,
        ],
      },
      {
        p: `Strength numbers are only comparable between the same ingredient in different products. Our guide to [label percentages](/guides/what-the-percentages-on-the-label-mean) explains why.`,
      },
      {
        p: `Ingredient names also matter if you keep a list of things to avoid. A list that says “glycerin” should be checked against labels that say “glycerol,” and the reverse. On Quell’s panel, the allergy caution in the warnings concerns egg or bird allergies, which relates to the emu oil among its inactive ingredients rather than to glycerol. When a label uses a name you don’t recognize, a pharmacist can match it to the one on your list.`,
      },
      { h: 'Is glycerin in eye drops right for you?' },
      {
        p: `A label can tell you what’s in the bottle and what it’s for, but not whether it suits your eyes. Questions about contact lenses, children or using it with other eye drops aren’t covered on Quell’s label; ask your eye doctor or pharmacist. Searches about side effects are worth taking to a pharmacist too, who can go through the full panel with you.`,
      },
      {
        p: `If you use the drop and something feels wrong, the label tells you what to do: {stopUse} The complete panel is on our [Drug Facts page](/drug-facts), and the [glycerol guide](/guides/glycerol-in-eye-drops) covers the ingredient’s place in Quell.`,
      },
    ],
    faq: [
      {
        q: 'Is glycerin the same as glycerol in eye drops?',
        a: `Yes. They’re two names for one compound; NIH’s PubChem database lists glycerin and glycerine as synonyms of glycerol. Labels use either name.`,
      },
      {
        q: 'What are glycerin eye drops used for?',
        a: `The product’s Uses line answers that, not the ingredient. Quell, which lists glycerol as an active ingredient, is labeled: {uses}.`,
      },
      {
        q: 'Why does Quell say glycerol instead of glycerin?',
        a: `Both names are correct, and the federal eye drop rule uses glycerin while Quell’s carton uses glycerol. The substance is the same either way.`,
      },
      {
        q: 'Are glycerin eye drops preservative-free?',
        a: `Some are and some aren’t; the inactive ingredients tell you. Quell lists no preservative among its inactive ingredients.`,
      },
    ],
  },
  {
    slug: 'why-are-my-eyes-dry-all-of-a-sudden',
    title: 'Why are my eyes dry all of a sudden?',
    description:
      'New heat, a trip, a deadline, wind or short sleep can make eyes feel dry within a day. Everyday causes, what to try, and which sudden changes need a doctor.',
    category: 'choosing',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Eyes that feel dry all of a sudden usually point to something in your surroundings or routine that just changed: the heat or air conditioning turning on, a flight or road trip, a stretch of long screen days, a windy week or several short nights. But sudden dryness with pain, vision changes, light sensitivity or an injury is a reason to see an eye doctor promptly, not to wait it out.`,
      },
      { h: 'Start with what changed this week' },
      {
        p: `The tear film has three layers: an oil layer on top, a watery middle and a mucus layer against the eye. Blinking spreads it, and dry or moving air pulls water out of it. When something changes the air around you or how often you blink, your eyes can notice within a day. Run down this list:`,
      },
      {
        list: [
          `Did the furnace, a space heater or a new air conditioner start running?`,
          `Did you fly, take a long drive or sleep somewhere new?`,
          `Has work or school meant longer screen sessions than usual?`,
          `Was it windy, or were you outdoors in cold air?`,
          `Have you slept less than usual for a few nights?`,
          `Did your desk, car seat or bed move closer to a vent or fan?`,
        ],
      },
      { h: 'Heating and cooling season' },
      {
        p: `The most common “all of a sudden” moment is the first cold week of fall, when the heat comes on. Heated air holds its water poorly, so indoor humidity falls fast. The same thing happens in reverse in early summer, when air conditioning dries the air as it cools. If your eyes changed the same week your thermostat did, start there. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has room-by-room fixes.`,
      },
      { h: 'Travel and new places' },
      {
        p: `Airplane cabins, hotel rooms and long car rides all combine dry air with vents. Moving to a drier or higher place can do it too. If the dryness started on a trip and eases once you’re home, the trip was probably the cause. Guides on [dry eyes on a plane](/guides/dry-eyes-on-a-plane) and in hotel rooms cover what helps on the road.`,
      },
      { h: 'Screens, deadlines and short nights' },
      {
        p: `People blink less when they concentrate on a screen, and the blinks they do take are often partial. A sudden project, an exam week or a new game can double screen time without anyone noticing. Short sleep piles on. Try this for a few days:`,
      },
      {
        list: [
          `Every 20 minutes, look across the room for a few seconds and blink fully.`,
          `Lower your screen slightly so your eyes aren’t opened as wide.`,
          `Turn vents and desk fans away from your face.`,
          `Go to bed earlier for a few nights and see whether mornings feel different.`,
        ],
      },
      { h: 'Super dry eyes all of a sudden: when to see a doctor' },
      {
        p: `Everyday dryness feels gritty, tired or tight, and it eases as the trigger goes away. Some sudden changes aren’t everyday dryness. Get prompt care from an eye doctor if you notice:`,
      },
      {
        list: [
          `Eye pain, not just discomfort.`,
          `Blurred vision that doesn’t clear when you blink, or any loss of vision.`,
          `New sensitivity to light.`,
          `Dryness after something hit, scratched or splashed into your eye.`,
          `Discharge, swelling or a change in how your eye looks.`,
          `Symptoms in only one eye that keep getting worse.`,
        ],
      },
      {
        p: `Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes into more detail. For a chemical splash or an injury, get help right away.`,
      },
      { h: 'What a lubricating drop can and can’t do' },
      {
        p: `For dryness from everyday causes, an over-the-counter lubricating drop is one option. Quell’s label lists its Uses as {uses}, and the directions read: {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `A drop doesn’t explain why your eyes changed, and it isn’t a substitute for an exam when warning signs are present. The label sets the limit: {stopUse} If you’re not sure which group you’re in, our [dry eye self-check](/self-check) can help you decide on a next step; it’s not a diagnosis.`,
      },
      { h: 'If it keeps coming back' },
      {
        p: `Dryness that keeps returning, or that never fully goes away after the heat, travel or deadline has passed, deserves a proper look. An eye doctor can work out the cause and what to do about it. Bring a note of when it started, what makes it better or worse, and anything you’ve tried. Our list of [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) can help you prepare.`,
      },
    ],
    faq: [
      {
        q: 'What causes dry eyes all of a sudden?',
        a: `Often something in your surroundings changed: heating or air conditioning turned on, travel, wind, longer screen sessions or short sleep. If the dryness comes with pain, vision changes or light sensitivity, see an eye doctor promptly.`,
      },
      {
        q: 'Why are my eyes so dry all of a sudden at night?',
        a: `Bedrooms dry out when the heat runs, and a fan or vent blowing toward the bed adds to it. Evening screen time also cuts blinking right before sleep.`,
      },
      {
        q: 'When should I worry about suddenly dry eyes?',
        a: `See an eye doctor promptly if dryness comes with eye pain, blurred vision that doesn’t clear, light sensitivity, discharge, or follows an injury or splash. Ordinary dryness tends to ease when its trigger goes away.`,
      },
      {
        q: 'Can I use eye drops for sudden dry eyes?',
        a: `For everyday dryness, a lubricating drop used as labeled is an option. The label also lists when to stop and ask a doctor, and new pain or vision changes call for an exam instead.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-hairstylists',
    title: 'Dry eyes for hairstylists',
    description:
      'Blow dryers, spray, close-up color work and ten-hour days on your feet: why stylists’ eyes dry out behind the chair, and practical fixes between clients.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Hairstylists’ eyes dry out because the job surrounds them with moving warm air from blow dryers, fine mist from sprays, and hours of close-up focus on cutting lines, foils and color. Focus cuts blinking, and the warm airflow speeds evaporation. Aiming the dryer away from your own face, blinking between sections, venting the station and using a lubricating drop as labeled on breaks all help.`,
      },
      { h: 'Why the salon floor is hard on eyes' },
      {
        p: `A salon packs several eye-drying conditions into one room. Each on its own is minor. Together, over a ten-hour day and five or six days a week, they add up:`,
      },
      {
        list: [
          `Blow dryers pushing hot, fast air for most of each appointment, often bouncing off the client’s head toward yours.`,
          `Aerosol sprays and finishing mists that hang in the air at face height.`,
          `Bright overhead and mirror lights that encourage squinting.`,
          `Close focus on fine work: point cutting, weaving foils, a precise hairline.`,
          `Air conditioning or heat running hard to keep a room full of dryers comfortable.`,
          `Short or skipped breaks when the book is full.`,
        ],
      },
      { h: 'Blow dryers and your own face' },
      {
        p: `A blow dryer moves warm air quickly, and both warmth and air movement speed evaporation from the tear film. Stylists often spend more time in that airstream than clients do, because they lean in to work the brush. A few changes in technique keep the air off you:`,
      },
      {
        list: [
          `Point the nozzle down the hair shaft and away from your body, not back toward you.`,
          `Rotate the chair instead of leaning across the client to reach the far side.`,
          `Use the cool setting for finishing when the style allows it.`,
          `Keep your face above the airflow rather than level with it.`,
          `Turn the dryer off while you section or re-clip, instead of letting it blow.`,
        ],
      },
      { h: 'Hairspray, color and other products near your eyes' },
      {
        p: `Spray and mist irritate eyes when they drift into them. Spray in short bursts, shield the client’s face and your own with your hand or a card, and step back while the mist settles. Keep the station ventilated: an exhaust fan or open door helps more than a fan blowing across the room, which spreads mist and dries eyes at the same time.`,
      },
      {
        p: `A splash of color, developer or another chemical in the eye is different from dryness. Follow that product’s own label for what to do, and get medical help when it says to. Quell’s label doesn’t cover chemical splashes, and a lubricating drop isn’t first aid for them.`,
      },
      { h: 'Close-up work and blinking' },
      {
        p: `Concentration slows blinking, and blinks during precise work are often incomplete. A foil highlight or a careful fade can mean several minutes of steady staring. Build blinks into the rhythm of the service:`,
      },
      {
        list: [
          `Blink fully every time you set down the comb or switch sections.`,
          `Look up at the far wall for a few seconds between steps.`,
          `Let your eyes rest closed for a moment while color processes.`,
          `Position the mirror light so it isn’t shining into your eyes.`,
        ],
      },
      {
        p: `Our guide to [how blinking spreads tears](/guides/how-blinking-spreads-tears) explains why full blinks matter.`,
      },
      { h: 'Using Quell on a salon schedule' },
      {
        p: `Quell is an over-the-counter lubricating drop. The Drug Facts Uses line reads: {uses}. The directions are {directions}, which fits a salon day neatly: once before the first client, once at lunch and once at the end of the day. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        list: [
          `Wash product off your hands before you touch your eyes or the bottle.`,
          `Keep the bottle in a closed drawer or bag, away from heat tools and spray mist.`,
          `Follow the handling line: {tip}.`,
          `Note the storage range: {storage}. A shelf next to a running hood dryer can get warm.`,
          `{swallowed}. Keep it away from product bottles where it could be confused for something else.`,
        ],
      },
      {
        p: `If you wear contact lenses at work, the label doesn’t cover using it with them; ask your eye doctor. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Long shifts on your feet' },
      {
        p: `Salon days are long, and tired eyes feel drier. Drink water between clients; a warm, dry salon dries more than your eyes. Step outside or into the break room for a few minutes between appointments. If you’re booth renting, consider where your station sits relative to vents and other stylists’ dryers before you choose a chair. More ideas for heat-heavy jobs are in [dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay irritated after a day off, or you notice pain or vision changes, see an eye doctor. The label puts it plainly: {stopUse} Our [self-check](/self-check) can help you think through what to do next.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I do hair?',
        a: `Blow dryers push warm, fast air toward your face, sprays drift at eye level, and close-up work cuts how often you blink. Over a long salon day those add up to dry, tired eyes.`,
      },
      {
        q: 'How can hairstylists keep blow dryer air out of their eyes?',
        a: `Point the nozzle down the hair shaft and away from your body, rotate the chair instead of leaning across, and switch the dryer off while you section.`,
      },
      {
        q: 'Can I keep eye drops at my salon station?',
        a: `Yes, in a closed drawer away from heat tools and spray. Quell’s label gives a storage range, {storage}, so keep it off shelves next to hood dryers or sunny windows.`,
      },
      {
        q: 'What should a stylist do if hair color gets in their eye?',
        a: `Follow the color product’s own label directions and get medical help when it says to. A lubricating drop like Quell isn’t labeled for chemical splashes.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-warehouse-workers',
    title: 'Dry eyes for warehouse workers',
    description:
      'Giant fans, open dock doors, cardboard dust and scanner screens: why warehouse shifts dry the eyes, and what helps from clock-in to clock-out.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Warehouse work dries eyes through constant air movement: big ceiling and floor fans, drafts through open dock doors, and forklifts and conveyors stirring dust. Add scanner and screen work, long shifts and sometimes night hours, and eyes can feel gritty by break time. Safety glasses, standing out of direct fan flow, blinking breaks and a lubricating drop used as labeled help.`,
      },
      { h: 'Fans, drafts and dock doors' },
      {
        p: `Large warehouses rely on moving air to stay bearable. High-volume ceiling fans, pedestal fans at workstations and air curtains over doors keep people cooler, but moving air is one of the fastest ways to pull water from the tear film. Wherever you work, notice where the air comes from:`,
      },
      {
        list: [
          `Turn a station fan so it hits your chest or back, not your face.`,
          `When you can choose a spot at a packing table, pick one out of the main fan path.`,
          `At the dock, the draft through an open door in winter is cold and dry. Glasses help block it.`,
          `In summer, an air-conditioned break room after hours in a hot building can feel harsh; give your eyes a minute.`,
        ],
      },
      { h: 'Dust, cardboard and grit' },
      {
        p: `Cardboard sheds fine fibers, pallets shed wood dust, and floor sweepers and forklift tires keep everything moving. Grit makes dry eyes feel worse, and rubbing grinds particles across the surface.`,
      },
      {
        list: [
          `Wear the safety glasses your site provides; wraparound styles block both dust and drafts.`,
          `Wash your hands before touching your face, especially after breaking down boxes.`,
          `If something gets in your eye, use your site’s eyewash station and tell your supervisor.`,
          `See a doctor if it still feels like something is stuck, or if there’s pain or blurred vision.`,
        ],
      },
      {
        p: `Quell’s label doesn’t cover flushing debris out of an eye; that’s what an eyewash station is for.`,
      },
      { h: 'Scanners, screens and pick lists' },
      {
        p: `Handheld scanners, wrist screens, pick-to-light displays and inventory terminals all pull your focus close. People blink less while focusing on screens, and a fast pick rate leaves little time to look away. Try to blink fully each time you confirm a scan or set down a tote, and look up at the far end of the aisle when you walk between locations. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why this matters.`,
      },
      { h: 'Cold storage and freezer sections' },
      {
        p: `Workers in refrigerated or freezer areas face very cold air, often moved by evaporator fans. Cold air carries little moisture, so stepping out of a freezer into a warmer building doesn’t restore much humidity. Insulated hoods and face coverings help with the cold; fitted safety glasses or goggles cut the airflow on your eyes. Keep any eye drops out of the freezer area entirely.`,
      },
      { h: 'Long shifts and night work' },
      {
        p: `Ten- and twelve-hour shifts, mandatory overtime in peak season and rotating nights all leave eyes tired. Short sleep tends to make eyes feel drier the next shift. Protect your sleep where you can: a dark, cool bedroom and the same bedtime on days off. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers more.`,
      },
      { h: 'Keeping Quell in your locker' },
      {
        p: `Quell is an over-the-counter lubricating drop. Its Uses line reads: {uses}. The directions are {directions}, which fits a shift: once before you clock in, once on your lunch break and once at the end. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `A locker is a good place for a bottle if it stays within the label’s range: {storage}. Lockers in climate-controlled break rooms usually do. Lockers near dock doors, in unheated areas or in a building that isn’t air conditioned in summer may not. In that case, keep the bottle in a jacket pocket or bag that stays with you.`,
      },
      {
        list: [
          `Wash your hands before using it, especially after handling boxes.`,
          `Follow the label’s handling rule: {tip}.`,
          `Don’t share a bottle with coworkers.`,
          `{swallowed}.`,
          `Know how it should look: {milky}.`,
        ],
      },
      {
        p: `If you wear contact lenses on shift, the label doesn’t address that; check with your eye doctor. You can read the full panel on the [Drug Facts page](/drug-facts) and order from the [home page](/#buy).`,
      },
      { h: 'When it’s more than dryness' },
      {
        p: `Workplace eye injuries need prompt attention: use the eyewash, report it and get seen. For dryness that hangs on, see an eye doctor. The label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a warehouse?',
        a: `Warehouses rely on big fans and open dock doors, and moving air pulls moisture from the tear film. Cardboard dust, scanner screens and long shifts add to it.`,
      },
      {
        q: 'Can I keep eye drops in my work locker?',
        a: `Yes, if the locker stays within the label’s storage range: {storage}. Lockers near dock doors or in unconditioned areas may get too hot or cold, so carry the bottle with you instead.`,
      },
      {
        q: 'Do safety glasses help with dry eyes at work?',
        a: `They can. Wraparound safety glasses block drafts from fans and dock doors along with dust, so less moving air reaches your eyes.`,
      },
      {
        q: 'What should I do if dust gets in my eye at work?',
        a: `Use your site’s eyewash station, tell a supervisor, and see a doctor if it still feels like something is stuck or there’s pain or blurred vision. A lubricating drop isn’t meant to flush debris out.`,
      },
    ],
  },
  {
    slug: 'how-to-put-in-eye-drops-without-flinching',
    title: 'How to put in eye drops without flinching',
    description:
      'Blinking or jerking away as the drop falls is normal. Step-by-step ways to put in eye drops without flinching, from where to look to how to steady the bottle.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `To put in eye drops without flinching, tilt your head back, look up at a fixed point on the ceiling, gently pull down your lower lid to make a pocket, rest your bottle hand on your forehead, and squeeze one drop into the pocket rather than onto the center of your eye. Looking away from the bottle and aiming low takes away most of the reflex.`,
      },
      { h: 'Why you flinch' },
      {
        p: `Blinking when something comes toward your eye is a protective reflex, and nearly everyone has it. Watching the bottle tip approach makes it stronger. So does a drop landing on the most sensitive part of the eye, the clear center, and a drop that’s colder than your eye. Each step below works around one of those triggers.`,
      },
      { h: 'Step by step: putting in eye drops without flinching' },
      {
        list: [
          `Wash your hands and dry them.`,
          `Check the bottle. The label’s “Do not use” line reads: {doNotUse}. Its other information notes: {milky}.`,
          `Sit or stand with your head tilted back, or lie down flat.`,
          `Pick a spot on the ceiling and look at it. Don’t watch the bottle.`,
          `With your other hand, gently pull your lower eyelid down to form a small pocket.`,
          `Rest the hand holding the bottle on your forehead or the bridge of your nose so it can’t drift.`,
          `Hold the tip above the pocket without letting it touch your eye, lashes or skin.`,
          `Squeeze gently until one drop falls into the pocket.`,
          `Let go of your lid, close your eye softly and keep it closed for a moment. Don’t squeeze it shut.`,
          `Repeat for the other eye.`,
        ],
      },
      { h: 'Aim for the pocket, not the center' },
      {
        p: `The center of the eye is the most sensitive part, and a drop landing there is what most people flinch at. The pocket formed by your lower lid is much less sensitive. A drop there spreads across the eye when you close it and blink, so you don’t need to hit the middle. If you look up at the ceiling, your lower lid area is naturally exposed and the drop lands where it should.`,
      },
      { h: 'Steady the bottle' },
      {
        p: `Shaky hands make people pull the bottle closer, and a closer bottle is scarier. Bracing helps:`,
      },
      {
        list: [
          `Rest the side of your hand or your little finger on your forehead or cheek.`,
          `Hold the bottle between your thumb and two fingers, not your whole fist.`,
          `If one hand isn’t enough, use the other hand’s fingers on your cheek to pull the lid and steady your wrist.`,
          `Practice the motion with the cap on until it feels routine.`,
        ],
      },
      {
        p: `Keep the tip clean throughout. The label says: {tip}. If the tip touches your eye or lashes, that’s the contamination the label warns about; see [why you should never touch the bottle tip](/guides/do-not-touch-the-tip).`,
      },
      { h: 'Lying down, and using a mirror' },
      {
        p: `Lying flat on a bed or couch puts your eye directly under the bottle and stops your head from tipping forward. Many people find it the easiest position. Others do better standing at a bathroom mirror, which lets you see the bottle and lid without having to look at the tip directly. Try both and keep the one that works for you.`,
      },
      { h: 'If the drop feels cold' },
      {
        p: `A drop straight from a cold car or a chilly room can feel startling. The label gives a storage range, {storage}, and room temperature is within it. Holding the closed bottle in your hand for a minute before use warms it slightly. Don’t refrigerate a bottle unless the label says to; Quell’s doesn’t.`,
      },
      { h: 'Missed the eye? What the label says' },
      {
        p: `Quell’s directions are: {directions}. A drop that clearly ran down your cheek didn’t go in your eye. If you’re unsure how to count a missed drop, or you often miss, a pharmacist can watch you once and suggest a better angle. Our guide to [using eye drops as directed](/guides/how-to-use-eye-drops-as-directed) covers the full routine.`,
      },
      { h: 'If you still can’t do it' },
      {
        p: `Some people never fully lose the reflex. Having a partner put the drop in can help, as long as their hands are washed and they follow the same steps. The label doesn’t give directions for children; ask their doctor or pharmacist before using drops on a child. If drops sting, see [why eye drops sting](/guides/why-do-eye-drops-sting). If your eye is painful or vision changes, stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How do I stop blinking when putting in eye drops?',
        a: `Look up at a fixed point instead of at the bottle, pull your lower lid into a pocket, and aim the drop there rather than at the center of your eye. Bracing your bottle hand on your forehead keeps it steady.`,
      },
      {
        q: 'How do I put eye drops in myself without missing?',
        a: `Tilt your head back or lie down, brace your hand on your forehead so the bottle stays above your eye, and squeeze one drop into the pocket of your lower lid.`,
      },
      {
        q: 'Is it easier to put in eye drops lying down?',
        a: `Many people find it is, because lying flat keeps your head still and puts the eye directly under the bottle. Try it alongside standing at a mirror and use whichever works.`,
      },
      {
        q: 'Why do I flinch when I put in eye drops?',
        a: `Blinking at something approaching the eye is a protective reflex. Watching the tip come closer, a drop hitting the sensitive center of the eye, or a cold drop all make it stronger.`,
      },
    ],
  },
]
