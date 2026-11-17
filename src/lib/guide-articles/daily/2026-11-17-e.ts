import type { Guide } from '@/lib/guide-types'
export const DAILY_20261117_E: Guide[] = [
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-erie-pa:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014860.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014860.csv
   *   (ERIE INTL AP, elev 222.5 m: annual precip 42.98 in; Oct 4.38, Sep 4.32,
   *   Feb 2.52; seasons DJF 10.10, MAM 10.05, JJA 10.38, SON 12.45; annual snow
   *   104.3 in, Jan 31.8, Dec 26.3, Feb 19.4; Jul high 81.1 F; Jan high 35.2 F,
   *   low 21.3 F; 111.4 nights at or below 32 F; 41.6 days with a high at or
   *   below 32 F; 63.0 days with 1 in or more of snow on the ground; 4.7 days
   *   at or above 90 F; 5904.7 heating degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ERIE, PA, WBAN 14860: Jan 78/72, Dec 77/71, Apr 74/61, May 74/61,
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ERIE: Jan 5.3 highest month, Nov and Dec 5.2; Jul and Aug 3.6 lowest)
   * Elevation is the NOAA station elevation, converted (222.5 m is about 730 ft).
   */
  {
    slug: 'dry-eye-relief-erie-pa',
    title: 'Dry eye relief in Erie, Pennsylvania',
    description:
      'Erie averages about 104 inches of snow, and January is its windiest month. NOAA’s lakeshore numbers and practical dry eye relief for home, car and work.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Erie means planning around the lake. NOAA’s normals give Erie International Airport about 104 inches of snow a year, January is the station’s windiest month, and furnaces run from fall well into spring. Keep wind and heater vents off your face, blink fully at screens, use a lubricating drop exactly as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What NOAA’s records say about Erie' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Erie International Airport, which sits about 222 meters (roughly 730 feet) above sea level, describe a lakeshore year that gets water in every season but still leaves eyes uncomfortable for months at a time:`,
      },
      {
        list: [
          `About 42.98 inches of precipitation in a normal year, spread so evenly that no season gets much less than 10 inches.`,
          `October (4.38 inches) and September (4.32) are the wettest months, and February (2.52) is the driest.`,
          `About 104.3 inches of snow, led by January at 31.8, December at 26.3 and February at 19.4.`,
          `Roughly 111 nights a year at 32°F or below, and about 42 days when the high never climbs past freezing.`,
          `About 63 days a year with at least an inch of snow on the ground, and fewer than five days that reach 90°F.`,
        ],
      },
      {
        p: `Those figures explain a pattern many Erie residents notice: the outdoors is rarely dry by the numbers, yet eyes feel scratchy all winter. Wind and indoor heat do most of the work.`,
      },
      { h: 'Lake wind in November, December and January' },
      {
        p: `NOAA’s wind table ranks January as Erie’s breeziest month, with November and December right behind it, while July and August are the calmest. Moving air pulls water off the surface of the eye between blinks, so the same walk along the Bayfront feels very different in January than in July. Squalls coming off Lake Erie add blowing snow, and people tend to squint and stare at the ground rather than blink normally while they push through it.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or goggles to clear the driveway; a closed frame blocks gusts far better than open lenses.`,
          `Turn your back to the wind while you wait at a bus stop or load the car, then blink slowly a few times once you’re out of it.`,
          `Keep a hood or hat brim low so snow doesn’t blow straight into your eyes.`,
          `Give your eyes a minute indoors before reading or driving after time in the wind.`,
        ],
      },
      { h: 'Why Erie homes feel dry in January' },
      {
        p: `NOAA counts about 5,900 heating degree days at the airport in a normal year, a measure of how hard heating systems have to work. With January lows averaging 21.3°F, the furnace is warming very cold air, and warming air without adding moisture drops its relative humidity. That’s why afternoon humidity outdoors can average 72 percent in January while the living room feels parched. The tear film’s outer oil layer slows evaporation from the watery layer beneath it, and warm, dry indoor air tests that layer every hour you’re home.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Move your favorite chair, desk or bed away from floor registers and baseboard heaters.`,
          `Lower the thermostat a few degrees at night; cooler air holds less heat and dries the room less.`,
          `Aim car vents at your feet or the windshield, not at your face, on cold commutes.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through each room of a heated house.`,
      },
      { h: 'Driving I-90 and I-79 in snow' },
      {
        p: `Winter driving around Erie combines three things that dry eyes: a defroster blowing warm air upward, glare from fresh snow, and the fixed stare that comes with watching for brake lights in a squall. Point the defroster at the glass, not at the driver, and break up long stretches with a stop. Never put drops in while the car is moving. If your vision blurs briefly after a drop, wait until it’s clear before you pull back onto the road.`,
      },
      { h: 'Spring and summer on Presque Isle' },
      {
        p: `Erie’s driest-feeling air comes in spring. NOAA’s humidity table puts April and May afternoons at about 61 percent, the lowest of the year at the airport, while mornings stay in the mid 70s. A sunny May afternoon on the beaches of Presque Isle State Park pairs that drier air with wind off the open lake and glare from sand and water. Summers stay mild, with July highs averaging 81.1°F, but a boat ride on the bay or a long bike loop around the peninsula still keeps wind in your eyes for hours. Sunglasses that wrap around the sides and a break in the shade every so often help more than you’d expect.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. One more line on the panel matters every time you open the bottle: {tip}.`,
      },
      {
        p: `The label’s caution reads: {warnings}. Storage is printed as: {storage}. A glove box at the airport lot in January or a car parked in July sun can move well past either end of that range, so carry the bottle in an inside coat pocket or keep it in the house. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Erie' },
      {
        p: `We ship from Brentwood, Tennessee, to Erie, Millcreek, Harborcreek and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised, so order before a storm week rather than during one. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to send them back. Local details are on the [Erie page](/eye-drops/erie-pa) and the [Pennsylvania page](/eye-drops/state/pennsylvania), or you can [order from the home page](/#buy).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `A drop is for everyday dryness, and it can’t tell you why dryness keeps returning. The label draws the line: {stopUse} Sudden pain, light sensitivity or blurred vision that doesn’t clear after blinking all deserve an appointment. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more, and our [self-check](/self-check) can help you put your symptoms into words before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Erie, PA get a year?',
        a: `About 104.3 inches in a normal year at Erie International Airport, according to NOAA’s 1991 to 2020 normals. January averages 31.8 inches, December 26.3 and February 19.4.`,
      },
      {
        q: 'Why do my eyes feel dry in Erie in the winter?',
        a: `Mostly wind and indoor heat. NOAA’s records make January Erie’s windiest month, and furnaces warming air that averages 21.3°F at night leave indoor air much drier than the outdoor humidity suggests.`,
      },
      {
        q: 'What is the driest time of year in Erie?',
        a: `By humidity, spring. NOAA’s table puts April and May afternoons at Erie International Airport at about 61 percent, the lowest of the year. By precipitation, February is the driest month at 2.52 inches.`,
      },
      {
        q: 'Does Quell ship to Erie, Pennsylvania?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Erie and anywhere else in the US, with guest checkout and email tracking. No delivery date is promised, so it’s smart to reorder before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-chattanooga-tn:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013882.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013882.csv
   *   (CHATTANOOGA LOVELL AP, elev 204.5 m: annual precip 55.00 in; Mar 5.34,
   *   Dec 5.25, Oct 3.59 driest, Aug 3.67; annual snow 3.6 in; Jul high 90.5 F,
   *   Aug 89.8 F; Jan high 51.0 F, low 32.4 F; 57.8 days at or above 90 F; 56.2
   *   nights at or below 32 F; 2.3 days with a high at or below 32 F; 1920.6
   *   cooling degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (CHATTANOOGA, TN, WBAN 13882: Apr 82/48 lowest afternoon, Mar 81/52,
   *   Oct 89/53, Sep 90/56, Aug 89/56, Jan 81/60, Dec 83/60; annual 85/55;
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (CHATTANOOGA: Mar 2.9 highest month, Feb 2.8; Aug and Sep 1.8 lowest)
   * Elevation is the NOAA station elevation, converted (204.5 m is about 670 ft).
   */
  {
    slug: 'dry-eye-relief-chattanooga-tn',
    title: 'Dry eye relief in Chattanooga, Tennessee',
    description:
      'Chattanooga mornings are humid, but April afternoons average 48 percent and summers bring 58 days of 90°F and steady AC. NOAA’s numbers and daily relief.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Chattanooga feels humid most of the year, yet dry eyes still show up here. NOAA’s records put April afternoons at the airport near 48 percent humidity, and about 58 summer days reach 90°F, which keeps air conditioning running for months. Relief comes from shielding your eyes from spring breezes and AC vents, blinking fully at screens, and using a lubricating drop as its label directs.`,
      },
      { h: 'Chattanooga’s climate in numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals come from Chattanooga Metropolitan Airport (Lovell Field), about 204 meters (roughly 670 feet) above sea level on the valley floor. Here’s what that station reports for a normal year:`,
      },
      {
        list: [
          `55.00 inches of precipitation, with March (5.34 inches) and December (5.25) the wettest months.`,
          `October is the driest month at 3.59 inches, followed by August at 3.67.`,
          `About 3.6 inches of snow, most years only a dusting or two.`,
          `About 58 days at 90°F or hotter, with July highs averaging 90.5°F.`,
          `Around 56 nights at or below freezing, though only two or three days a year stay below 32°F from morning to night.`,
        ],
      },
      { h: 'Is Chattanooga humid all year?' },
      {
        p: `Mornings, nearly. NOAA’s humidity table has Chattanooga mornings between 81 and 90 percent in every month, with September the dampest. Afternoons tell a different story. They average 55 percent across the year and dip to 48 percent in April and 52 in March. Those spring afternoons are also the breeziest: NOAA’s wind table makes March the station’s windiest month and August and September its calmest. A dry, breezy April afternoon on the Walnut Street Bridge or the Riverwalk pulls moisture off the eye faster than a muggy August morning ever will.`,
      },
      {
        list: [
          `Save long spring bike rides and runs on the Tennessee Riverwalk for the morning hours, when humidity runs far higher.`,
          `Wear sunglasses with side coverage when the wind picks up over the river.`,
          `On the climb up Lookout Mountain or Signal Mountain, stop at an overlook and blink slowly for a minute before driving on.`,
          `Keep the car window cracked rather than wide open on breezy days.`,
        ],
      },
      { h: 'Air conditioning from May to September' },
      {
        p: `NOAA lists about 1,920 cooling degree days at the airport in a normal year, a measure of how hard air conditioners work. AC cools air by pulling water out of it, and the vent that keeps a Chattanooga office bearable in July also blows dry air straight across anyone sitting in its path. People notice this most in places they stay for hours: open-plan offices downtown, hospital wards, factory floors with big ceiling units, and the car on a long drive up I-75.`,
      },
      {
        list: [
          `Angle desk fans and car vents so the air passes your chest, not your face.`,
          `Ask to move a desk that sits under a ceiling diffuser; it’s one of the simplest fixes there is.`,
          `Set the thermostat a few degrees warmer so the system cycles less.`,
          `Take a short break outdoors in the afternoon; the humid air outside can feel better on the eyes than the office does.`,
        ],
      },
      { h: 'Fall color drives and October’s dry spell' },
      {
        p: `October is Chattanooga’s driest month by rainfall in NOAA’s normals, with afternoon humidity near 53 percent. It’s also when many people spend whole afternoons on scenic drives and trails in the ridges around the city. Staring at winding roads, fixing on bright views and riding with the windows down all cut into normal blinking. Pull over at overlooks to rest your eyes, and keep a bottle in the car door rather than in a hot trunk.`,
      },
      { h: 'Short winters, steady heat' },
      {
        p: `January highs average 51.0°F and lows 32.4°F, so Chattanooga winters are short and mild. Heat still runs most nights from December through February, and NOAA’s numbers show about 56 nights at or below freezing. Heated indoor air loses relative humidity as it warms, so the bedroom can feel drier than the damp, gray afternoon outside. A humidifier and a lower thermostat at night help. [Dry eyes in the morning](/guides/dry-eyes-in-the-morning-when-you-wake-up) covers the wake-up side of the problem.`,
      },
      { h: 'Quell’s label, in its own words' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. For dosing, the panel says: {directions}. It also warns against one easy mistake: {tip}.`,
      },
      {
        p: `Read the caution before your first bottle: {warnings}. Quell is also milky by nature ({milky}), and the panel adds: {doNotUse}. Storage is listed as: {storage}. A car parked at Coolidge Park on a July afternoon can easily run hotter than that, so carry the bottle with you. Everything is collected on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Chattanooga' },
      {
        p: `Quell ships from Brentwood, in Middle Tennessee, to Chattanooga, Red Bank, East Ridge, Hixson and anywhere else in the US. There’s no account to create; you check out as a guest and get tracking by email. Standard shipping is {shipping}, and {freeBottles} or more bottles ship free. We don’t promise a delivery date, even in state, so reorder with a few days of drops left. If you change your mind, an unopened bottle can be refunded within {returnDays} days of delivery without being sent back. See the [Chattanooga page](/eye-drops/chattanooga-tn) or the [Tennessee page](/eye-drops/state/tennessee), or go straight to [the order form](/#buy).`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `Eye drops cover ordinary dryness. If something else is going on, a drop won’t tell you. The label’s limit: {stopUse} Pain, vision that stays blurry, or one eye that’s suddenly much worse than the other should go to an eye doctor. Our [list of symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more detail.`,
      },
    ],
    faq: [
      {
        q: 'How humid is Chattanooga in the spring?',
        a: `Mornings are humid, near 81 or 82 percent in NOAA’s table, but afternoons drop to about 52 percent in March and 48 percent in April. April afternoons are the driest of the year at the airport.`,
      },
      {
        q: 'How many 90-degree days does Chattanooga get?',
        a: `About 58 a year at Chattanooga Metropolitan Airport, based on NOAA’s 1991 to 2020 normals. July highs average 90.5°F and August 89.8°F.`,
      },
      {
        q: 'Why do my eyes feel dry in Chattanooga if it’s so humid?',
        a: `Indoor air is usually the reason. Air conditioning pulls moisture out as it cools and blows across your face, and winter heat dries rooms out too. Spring afternoons outdoors are also drier and breezier than the city’s muggy reputation suggests.`,
      },
      {
        q: 'Can I order Quell to Chattanooga, TN?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Chattanooga and the rest of the US, with guest checkout and tracking by email. No delivery date is promised, so order before your bottle runs low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-brownsville-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012919.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012919.csv
   *   (BROWNSVILLE, TX, elev 7.0 m: annual precip 26.78 in; Sep 5.73 wettest,
   *   Oct 3.83; Feb 1.03 driest, Jan 1.08, Dec 1.21; snow 0.0; Aug high 96.3 F,
   *   Jul 95.0 F; Jan high 72.6 F, low 53.1 F; 140.5 days at or above 90 F; 2.1
   *   days at or above 100 F; 1.0 night at or below 32 F; 4542.2 cooling degree
   *   days; 422.8 heating degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BROWNSVILLE, TX, WBAN 12919: Jul and Aug 92/55, Jan 88/65, Dec 87/64,
   *   annual 90/60; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BROWNSVILLE: Apr 5.5 highest month, Mar and May 5.4; Sep 3.5 lowest)
   * Elevation is the NOAA station elevation, converted (7.0 m is about 23 ft).
   */
  {
    slug: 'dry-eye-relief-brownsville-tx',
    title: 'Dry eye relief in Brownsville, Texas',
    description:
      'Brownsville sees about 140 days of 90°F a year, so AC runs most months, and spring winds peak in April. NOAA’s figures and dry eye tips for the Valley.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `In Brownsville, dry eyes usually come from indoor cooling and coastal wind rather than dry weather. NOAA’s normals record about 140 days a year at 90°F or hotter, so air conditioning runs for most of the calendar, and April is the windiest month. Keep AC vents and Gulf breezes off your eyes, blink fully during screen time, and use a lubricating drop as its label directs.`,
      },
      { h: 'Brownsville’s weather by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for the Brownsville airport station, only about 7 meters (roughly 23 feet) above sea level near the mouth of the Rio Grande, show a warm, humid place where rain arrives in bursts:`,
      },
      {
        list: [
          `About 26.78 inches of precipitation a year.`,
          `September is by far the wettest month at 5.73 inches; February (1.03) and January (1.08) are the driest.`,
          `About 140 days at 90°F or above, with August highs averaging 96.3°F.`,
          `January is the coolest month, with highs near 72.6°F and lows near 53.1°F.`,
          `About one night a year at or below freezing, and no measurable snow in the normals.`,
        ],
      },
      {
        p: `NOAA’s humidity table shows mornings near 90 percent in almost every month, with July and August mornings at 92. Afternoons average about 60 percent across the year and dip to 55 in midsummer. The outdoor air is rarely the problem. What happens to that air once it’s cooled, and how hard it blows, is another story.`,
      },
      { h: 'Life in near-constant air conditioning' },
      {
        p: `NOAA counts about 4,540 cooling degree days at the station in a normal year against about 420 heating degree days, which is another way of saying Brownsville cools far more than it heats. Air conditioners dry the air as they chill it. Sitting under a ceiling vent at work, in a cold classroom, in a car with the fan on high, or in a store aisle all afternoon can leave eyes feeling gritty by evening, even on a muggy day.`,
      },
      {
        list: [
          `Turn car vents toward the floor or your chest, especially on long drives up US-77.`,
          `If your desk sits under a diffuser, ask about moving it or adding a simple deflector.`,
          `A warmer thermostat setting at home means the system runs less and dries the air less.`,
          `Step outside for a few minutes on breaks; the humid air can feel easier on the eyes than a chilled room.`,
        ],
      },
      { h: 'Waiting in traffic and at the bridges' },
      {
        p: `Plenty of Brownsville routines involve sitting in a running car: school pickup lines, drive-through windows, and the wait to cross an international bridge into Matamoros. An hour with the AC aimed at your face and your eyes fixed on the car ahead is a reliable recipe for dryness. Point the vents away, blink deliberately while you’re stopped, and wear sunglasses against the glare off windshields and pavement. Keep drops for when the car is parked; a stop in line is not the time.`,
      },
      { h: 'April wind and the beach at South Padre' },
      {
        p: `NOAA’s wind table ranks April as Brownsville’s windiest month, with March and May close behind, while September is the calmest. Spring days on South Padre Island or the Boca Chica shoreline combine that wind with salt spray, blowing sand and glare off the water. Wraparound sunglasses block more of it than flat lenses do, and sitting with your back to the wind helps more than you’d think. Rinse sand off your face and hands before you touch anywhere near your eyes.`,
      },
      { h: 'The mild winter months' },
      {
        p: `December and January bring Brownsville’s most comfortable weather, and afternoon humidity rises to about 64 or 65 percent. Many people spend more time outside in these months, at the Gladys Porter Zoo, along the resacas, or at outdoor markets, and that tends to ease screen and AC habits. Heat rarely runs for long, but cold fronts can bring dry, gusty north winds for a day or two, so keep sunglasses handy even in winter.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, the Uses are: {uses}. Directions on the panel: {directions}. To keep the dropper clean, the panel adds: {tip}.`,
      },
      {
        p: `The label carries this caution: {warnings}. Its storage line reads: {storage}. A dashboard in a Brownsville parking lot in August will run far hotter than that range, so keep the bottle in a bag that comes inside with you. You’ll find the full panel on our [Drug Facts page](/drug-facts), and [how to store eye drops](/guides/how-to-store-eye-drops) covers heat in more detail.`,
      },
      { h: 'Ordering Quell to the Rio Grande Valley' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Brownsville, Harlingen, Port Isabel and every other US address. Guest checkout is the only kind there is, shipping costs {shipping}, and an order of {freeBottles} or more bottles ships free. Tracking arrives by email. We can’t promise a delivery date, so order early if you’re running low. An unopened bottle can be refunded within {returnDays} days of delivery, with nothing to mail back. Local information is on the [Brownsville page](/eye-drops/brownsville-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If drops don’t settle things, it’s time for a professional look. The label puts it plainly: {stopUse} Pain, light sensitivity, or blurring that won’t clear with a blink are reasons to book an eye exam. Our [self-check](/self-check) can help you describe what you’re noticing, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How many 90-degree days does Brownsville, Texas get?',
        a: `About 140 a year at the Brownsville airport station, according to NOAA’s 1991 to 2020 normals. August is the hottest month, with highs averaging 96.3°F.`,
      },
      {
        q: 'What is the windiest month in Brownsville?',
        a: `April, based on NOAA’s wind table for the Brownsville station, with March and May close behind. September is the calmest month of the year there.`,
      },
      {
        q: 'Why are my eyes dry in Brownsville when it’s so humid?',
        a: `Air conditioning is the usual cause. With about 140 days a year at 90°F or hotter, cooling runs for months, and AC removes moisture and blows it across your face. Coastal wind in spring adds to it outdoors.`,
      },
      {
        q: 'Can Quell ship to Brownsville, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Brownsville and the rest of the US, with guest checkout and email tracking. No delivery date is promised, so place your order before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-wichita-falls-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013966.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013966.csv
   *   (WICHITA FALLS MUNI AP, elev 310.0 m: annual precip 27.89 in; May 3.81
   *   wettest, Jun 3.35; Jan 1.20 driest, Feb 1.40; annual snow 3.1 in; Jul high
   *   97.2 F, Aug 96.6 F; Jan high 54.7 F, low 30.0 F; 104.7 days at or above
   *   90 F; 30.4 days at or above 100 F; 58.5 nights at or below 32 F; 8.3
   *   nights at or below 20 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (WICHITA FALLS, TX, WBAN 13966: Aug 77/44 lowest afternoon, Jul 77/45,
   *   Apr 78/48, Mar 77/49, Jan 77/54, May 84/53; annual 79/50;
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (WICHITA FALLS: Apr 5.7 highest month, Mar 5.6; Sep 4.3 lowest; annual
   *   5.0, compared with 4.6 at Brownsville, 12919)
   * Elevation is the NOAA station elevation, converted (310.0 m is about 1,020 ft).
   */
  {
    slug: 'dry-eye-relief-wichita-falls-tx',
    title: 'Dry eye relief in Wichita Falls, Texas',
    description:
      'Wichita Falls averages 30 days of 100°F a year, August afternoons near 44 percent humidity, and a windy spring. NOAA’s numbers and real dry eye relief.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Wichita Falls is hard on eyes in two seasons. NOAA’s normals show about 30 days a year at 100°F or hotter, August afternoons averaging 44 percent humidity, and a spring when March and April winds peak. Shade your eyes from wind and sun, keep AC and heater vents pointed away from your face, blink fully at screens, and use a lubricating drop exactly as the label says.`,
      },
      { h: 'The numbers behind a Wichita Falls summer' },
      {
        p: `NOAA’s 1991 to 2020 normals for the station it lists as Wichita Falls Municipal Airport, at about 310 meters (roughly 1,020 feet) above sea level on the rolling plains of North Texas, read like a heat report:`,
      },
      {
        list: [
          `About 105 days a year reach 90°F, and about 30 of those reach 100°F.`,
          `July highs average 97.2°F, with August close behind at 96.6°F.`,
          `About 27.89 inches of precipitation a year, with May (3.81 inches) the wettest month and January (1.20) the driest.`,
          `Roughly 58 nights a year fall to 32°F or below, and about 8 drop to 20°F or colder.`,
          `About 3.1 inches of snow in a normal year.`,
        ],
      },
      { h: 'Why August afternoons are the hardest' },
      {
        p: `NOAA’s relative humidity table for Wichita Falls shows mornings near 77 percent in July and August, then afternoons falling to 45 and 44 percent. That means a summer day here starts out heavy and turns dry and baking by mid-afternoon, just as the temperature peaks. Hot, dry, moving air draws water off the surface of the eye quickly, and the oil layer of the tear film has more to hold back with every hour outside. Anyone working outdoors, from ranch hands and oilfield crews to roofers and grounds staff, feels it by quitting time.`,
      },
      {
        list: [
          `Schedule outdoor jobs and long walks around Lake Wichita Park for early morning, when humidity runs about 30 points higher.`,
          `Wear close-fitting sunglasses or safety glasses with side shields; they cut both wind and glare.`,
          `Pull a hat brim low and stand with your back to the wind during breaks.`,
          `Blink deliberately and slowly for a few seconds whenever you step into shade.`,
        ],
      },
      { h: 'A windy city, especially in spring' },
      {
        p: `Wind is part of daily life here. NOAA’s wind table puts the station’s annual average above Brownsville’s on the Gulf coast, with April the windiest month, March nearly tied, and September the calmest. Spring afternoons combine that wind with humidity near 48 or 49 percent, which is when many people notice gritty, tired eyes even before summer heat arrives. Blowing grit on construction sites, ball fields and open lots adds to it. Goggles for yard work and wraparound glasses for everything else go a long way.`,
      },
      { h: 'Air conditioning and the drive home' },
      {
        p: `With summer highs in the high 90s, air conditioning in Wichita Falls isn’t optional. It also dries the air it cools. Office vents, cold warehouses and pickup trucks with the fan on high all blow that dry air across your face for hours. Point vents toward your chest or the floor, take short breaks from the screen to look across the room, and on drives along US-287 or down to Lake Kemp, stop to rest your eyes rather than pushing through. Drops go in when you’re parked, never in traffic.`,
      },
      { h: 'Cold fronts and winter heat' },
      {
        p: `January afternoons are the most humid of the year at about 54 percent, but a Wichita Falls winter can swing hard when a front blows through. Lows average 30.0°F in January, and heat runs on most winter nights. Warming cold air indoors leaves rooms dry, so a bedroom humidifier and a slightly cooler thermostat at night can make mornings more comfortable. If you spend winter evenings at a laptop, [eye drops for computer users](/guides/eye-drops-for-computer-users) has a fuller screen routine.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel describes its purpose this way: {uses}. Its dosing line: {directions}. Every time you open the bottle, remember: {tip}.`,
      },
      {
        p: `There’s one caution to read before buying: {warnings}. The bottle should be kept as the panel says: {storage}. That matters a great deal here. A truck cab in a Wichita Falls parking lot in July will run far past the top of that range, so keep the bottle in a lunch cooler, a bag you carry, or inside the house. See the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Wichita Falls' },
      {
        p: `We send orders from Brentwood, Tennessee, to Wichita Falls, Burkburnett, Iowa Park and every other US address. You don’t need an account. Shipping is {shipping}, or free once an order reaches {freeBottles} bottles, and tracking comes by email. Since no delivery date is promised, a package sitting on a porch in August is worth thinking about: if you can, bring it inside soon after it arrives. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. More about the area is on the [Wichita Falls page](/eye-drops/wichita-falls-tx) and the [Texas page](/eye-drops/state/texas), or [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops can’t sort out what’s behind dryness that keeps coming back. The label tells you when to stop: {stopUse} Eye pain, changes in vision, or a feeling that something is stuck in the eye after a windy day are reasons to see an eye doctor promptly. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'How many 100-degree days does Wichita Falls get?',
        a: `About 30 a year at Wichita Falls Municipal Airport, based on NOAA’s 1991 to 2020 normals. About 105 days a year reach 90°F or higher.`,
      },
      {
        q: 'Why is Wichita Falls so windy?',
        a: `NOAA’s records back up the reputation. Its wind table shows April and March as its windiest months and September as the calmest, and its yearly average runs above the Brownsville station on the Gulf.`,
      },
      {
        q: 'How dry is the air in Wichita Falls in summer?',
        a: `Afternoons are dry. NOAA’s humidity table has July afternoons near 45 percent and August near 44, even though mornings in both months average about 77 percent.`,
      },
      {
        q: 'Does Quell deliver to Wichita Falls, TX?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Wichita Falls and anywhere else in the US. There’s no delivery date promised, so order ahead, and bring the package inside quickly in summer heat.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-roanoke-va:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013741.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013741.csv
   *   (ROANOKE RGNL AP, elev 358.1 m: annual precip 42.82 in; Jun 4.66
   *   wettest, May 4.31, Jul 4.28; Feb 2.89 driest, Oct 2.96; annual snow 14.8
   *   in, Feb 4.8, Jan 4.3, Dec 3.2; Jul high 88.1 F; Jan high 47.1 F, low
   *   28.7 F; 30.4 days at or above 90 F; 76.6 nights at or below 32 F; 10.5
   *   days with 1 in or more of snow on the ground)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ROANOKE, VA, WBAN 13741: Apr 70/45 lowest afternoon, Mar 69/47, Feb
   *   69/50, Sep 86/55, Aug 85/55; annual 76/51; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ROANOKE: Mar 3.7 highest month, Jan, Feb and Apr 3.5; Aug 2.2 lowest)
   * Elevation is the NOAA station elevation, converted (358.1 m is about 1,175 ft).
   */
  {
    slug: 'dry-eye-relief-roanoke-va',
    title: 'Dry eye relief in Roanoke, Virginia',
    description:
      'Roanoke’s late-winter and spring afternoons are its driest, near 45 percent in April, and March is its windiest month. NOAA data and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Roanoke’s driest air arrives in late winter and spring. NOAA’s normals for Roanoke-Blacksburg Regional Airport put April afternoons near 45 percent humidity, the lowest of the year, and March is the windiest month. Furnace heat dries homes from November into March. Shield your eyes on windy ridges, keep heater vents off your face, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Roanoke Valley weather at a glance' },
      {
        p: `NOAA’s 1991 to 2020 climate normals come from the regional airport, about 358 meters (roughly 1,175 feet) above sea level on the floor of the Roanoke Valley, between the Blue Ridge and the ridges to the west. A normal year there looks like this:`,
      },
      {
        list: [
          `42.82 inches of precipitation, with June (4.66 inches) the wettest month.`,
          `February (2.89 inches) and October (2.96) are the driest months.`,
          `About 14.8 inches of snow, mostly in January and February.`,
          `About 77 nights at or below 32°F, and roughly 30 days at 90°F or above.`,
          `January highs near 47.1°F and July highs near 88.1°F.`,
        ],
      },
      { h: 'February through April: the dry stretch' },
      {
        p: `NOAA’s humidity table shows Roanoke afternoons at 50 percent in February, 47 in March and 45 in April, the lowest readings of the year. The same months are the breeziest; the station’s wind table puts March on top, with January, February and April close behind. Late summer is the mirror image, with August and September afternoons at 55 percent and August the calmest month. If your eyes feel worst as the dogwoods and redbuds come out, the weather data backs you up.`,
      },
      {
        list: [
          `On spring hikes to McAfee Knob or Dragon’s Tooth, wear sunglasses that wrap around the sides; ridge-top wind is stronger than what you feel in the valley.`,
          `Rest at the overlook with your eyes closed for a minute instead of staring out at the view the whole time.`,
          `On a windy day, ride the Roanoke River Greenway in the morning rather than mid-afternoon.`,
          `Keep car windows mostly up on drives along the Blue Ridge Parkway, and point the vents low.`,
        ],
      },
      { h: 'Heated homes from November to March' },
      {
        p: `Roanoke winters aren’t harsh by mountain standards, but January lows average 28.7°F and freezing nights add up to about 77 a year. That means months of furnaces, heat pumps and space heaters warming cold air. Warmer air with the same amount of water in it has lower relative humidity, which is why a heated living room can feel drier than a raw February afternoon outside. Blinking spreads tears across the eye, and evaporation between blinks speeds up in dry, warm air.`,
      },
      {
        list: [
          `Keep a humidifier running in the bedroom and clean it on the schedule its maker recommends.`,
          `Don’t sit with a space heater aimed at your face while you read or watch TV.`,
          `Turn the thermostat down a little at night.`,
          `Point defroster air at the glass, not at you, on cold-morning commutes.`,
        ],
      },
      { h: 'Snow days, glare and the Star on Mill Mountain' },
      {
        p: `NOAA’s normals show about 10 or 11 days a year with an inch or more of snow on the ground at the airport. Those bright, cold days bring sharp glare. A trip up Mill Mountain to see the Star, or a sledding afternoon, means squinting into reflected light while cold wind dries the eye surface. Sunglasses help on snowy days as much as in summer.`,
      },
      { h: 'Screens, hospitals and long shifts' },
      {
        p: `Plenty of Roanoke work happens indoors under climate control, in hospital units, offices downtown, schools and distribution centers along I-81. Air conditioning in summer and forced heat in winter both dry the air, and long hours at a monitor cut your blink rate. Look away from the screen often, finish each blink fully, and ask about moving a workstation that sits right under a vent. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) helps if your hours run late.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as: {uses}. Here’s the dosing line: {directions}. Keep this in mind too: {tip}.`,
      },
      {
        p: `The panel’s caution reads: {warnings}. Store the bottle as printed: {storage}. A car at the trailhead lot on a January morning can drop well below that range, and the same car in July can run well above it, so keep the bottle in your pack or pocket. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in the Roanoke Valley' },
      {
        p: `Orders go out from Brentwood, Tennessee, to Roanoke, Salem, Vinton and the rest of the US. Checkout is guest-only, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so keep a spare bottle on hand before a snowy week. Any unopened bottle can be refunded within {returnDays} days of delivery without sending it back. See the [Roanoke page](/eye-drops/roanoke-va) and the [Virginia page](/eye-drops/state/virginia) for local notes, or [order here](/#buy).`,
      },
      { h: 'When dryness is a doctor question' },
      {
        p: `Drops are for everyday dryness. The label marks where that stops: {stopUse} Pain, vision changes, or dryness that keeps returning despite all of the above should go to an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs, and the [self-check](/self-check) can help you describe them; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Roanoke, Virginia?',
        a: `By humidity, April, when NOAA’s table puts afternoons at Roanoke’s airport near 45 percent. By precipitation, February is driest at 2.89 inches, followed closely by October at 2.96.`,
      },
      {
        q: 'How much snow does Roanoke, VA get?',
        a: `About 14.8 inches in a normal year at Roanoke-Blacksburg Regional Airport, according to NOAA’s 1991 to 2020 normals, with February (4.8 inches) and January (4.3) the snowiest months.`,
      },
      {
        q: 'Why do my eyes get dry hiking near Roanoke in the spring?',
        a: `Spring afternoons are Roanoke’s driest and windiest in NOAA’s records, and ridge-top trails catch even more wind than the valley. Wraparound sunglasses and short rests with your eyes closed help.`,
      },
      {
        q: 'Does Quell ship to Roanoke, Virginia?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Roanoke and anywhere else in the US, with guest checkout and email tracking. No delivery date is promised, so reorder before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-olympia-wa:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024227.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024227.csv
   *   (OLYMPIA AP, elev 57.3 m: annual precip 50.62 in; Nov 8.21, Dec 7.85,
   *   Jan 7.80; Jul 0.53, Aug 0.96; seasons DJF 20.74, JJA 2.95; annual snow
   *   3.9 in; Aug high 78.0 F, Jul 77.6 F, Jul low 50.7 F; Dec high 44.9 F;
   *   77.1 nights at or below 32 F; 6.4 days at or above 90 F; 105.0 days with
   *   0.10 in or more of precipitation; 5377.5 heating degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (OLYMPIA, WA, WBAN 24227: Jul 85/48 lowest afternoon, Aug 86/49, May and
   *   Jun 85-86/53, Dec 91/85, Jan 91/81, Nov 91/81; annual 88/64;
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (OLYMPIA: Apr 2.9 highest month; Sep 2.2 lowest; annual 2.6)
   * Elevation is the NOAA station elevation, converted (57.3 m is about 190 ft).
   */
  {
    slug: 'dry-eye-relief-olympia-wa',
    title: 'Dry eye relief in Olympia, Washington',
    description:
      'Olympia gets about 50 inches of rain, yet July afternoons average 48 percent humidity and the heat runs most of the year. NOAA’s data and dry eye tips.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Olympia’s rain doesn’t keep eyes comfortable indoors. NOAA’s normals show about 50 inches of precipitation a year, but July afternoons at the airport average 48 percent humidity, and heating runs from fall into late spring. For relief, keep furnace and car vents off your face, take real breaks from screens, wear sunglasses on breezy summer days, and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'Olympia’s two seasons, in NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for Olympia Regional Airport, about 57 meters (roughly 190 feet) above sea level south of the city, show the sharp wet-and-dry split that shapes life at the south end of Puget Sound:`,
      },
      {
        list: [
          `About 50.62 inches of precipitation a year, with about 105 days bringing a tenth of an inch or more.`,
          `November (8.21 inches), December (7.85) and January (7.80) are the wettest months.`,
          `July averages just 0.53 inches and August 0.96; the whole summer totals under 3 inches.`,
          `Only about 3.9 inches of snow in a normal year, but roughly 77 nights at or below freezing.`,
          `Summer highs top out near 78°F in August, and only about six days a year reach 90°F.`,
        ],
      },
      { h: 'Why your eyes feel dry in a wet town' },
      {
        p: `From October through March, Olympia’s outdoor air is about as damp as it gets in NOAA’s tables: December afternoons average 85 percent humidity and mornings 91. The trouble is that most people spend those months indoors. NOAA lists about 5,380 heating degree days at the airport, a sign that heat runs for much of the year, including cool spring evenings. Heating cold, damp air drops its relative humidity, and the dry air that results evaporates tears faster between blinks. Long, dark afternoons also mean more hours on phones, laptops and TV, and screens slow the blink rate.`,
      },
      {
        list: [
          `Run a humidifier in the room where you sleep or work, and clean it as directed.`,
          `Keep your chair and pillow out of the path of baseboard heaters and floor vents.`,
          `Turn the thermostat down a few degrees at night.`,
          `Every 20 minutes or so, look away from the screen and blink slowly a few times.`,
          `Use the car’s defroster on the glass, not across your face, on wet morning drives.`,
        ],
      },
      { h: 'Summer: the dry season people forget' },
      {
        p: `July and August flip everything. NOAA’s humidity table puts July afternoons at 48 percent and August at 49, while mornings stay near 85. That afternoon dip coincides with the season people spend outside: paddling Budd Inlet, walking Percival Landing, hiking the trails at the Nisqually refuge, or watching a game in the sun. Bright light off the water and steady breezes add to the drying. Wraparound sunglasses and a hat brim help, and so does stepping into shade for a few slow blinks.`,
      },
      { h: 'Working at the Capitol and in state offices' },
      {
        p: `As Washington’s capital, Olympia has a lot of people doing desk work in government buildings, often for long stretches during busy seasons. Climate-controlled offices, long meetings and hours of reading on monitors are a reliable combination for tired, dry eyes. A desk under a ceiling vent makes it worse. Ask about moving it, keep a small fan from blowing at your face, and step outdoors at lunch even in the rain. [Eye drops for computer users](/guides/eye-drops-for-computer-users) has a fuller screen routine.`,
      },
      { h: 'Spring wind on the Sound' },
      {
        p: `Olympia isn’t a windy place overall, but NOAA’s wind table shows April as its breeziest month and September its calmest. Spring sailing, ferry rides farther up the Sound, or a blustery walk at Priest Point Park can leave eyes stinging. Turn away from gusts, keep glasses on, and wait until you’re out of the wind before putting in a drop.`,
      },
      { h: 'Quell’s label, word for word' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The panel’s directions: {directions}. And one rule to follow every time: {tip}.`,
      },
      {
        p: `Before using it, read the caution: {warnings}. Store it as the label says: {storage}. An Olympia winter rarely pushes a car below that range for long, but a parked car on a sunny August afternoon can climb past the top of it, so keep the bottle with you. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Olympia' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Olympia, Lacey, Tumwater and anywhere else in the country. Check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles go free. You’ll get tracking by email, but there’s no promised delivery date, so order while you still have a few days left in the bottle. Unopened bottles qualify for a refund within {returnDays} days of delivery, and there’s nothing to return. For more, see the [Olympia page](/eye-drops/olympia-wa) or the [Washington page](/eye-drops/state/washington).`,
      },
      { h: 'When to book an eye exam' },
      {
        p: `If your eyes don’t improve with simple changes, a drop isn’t the whole answer. Follow the label’s limit: {stopUse} Pain, light sensitivity, or blurring that doesn’t clear with blinking are worth an appointment. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists others.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Olympia, Washington get?',
        a: `About 50.62 inches a year at Olympia Regional Airport, according to NOAA’s 1991 to 2020 normals. November is the wettest month at 8.21 inches, and July the driest at 0.53.`,
      },
      {
        q: 'Why are my eyes dry in Olympia when it rains so much?',
        a: `Indoor heat is the main reason. Heat runs for much of the year, and warming damp outdoor air lowers its relative humidity. Summer afternoons are also dry, near 48 percent in July in NOAA’s table.`,
      },
      {
        q: 'Is Olympia dry in the summer?',
        a: `Yes, by Pacific Northwest standards. NOAA’s normals give July just 0.53 inches of rain and August 0.96, and afternoon humidity averages about 48 to 49 percent in those months.`,
      },
      {
        q: 'Does Quell ship to Olympia, WA?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Olympia and the rest of the US, with guest checkout and email tracking. Because no delivery date is promised, reorder before your bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-la-crosse-wi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014920.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014920.csv
   *   (LA CROSSE MUNI AP, elev 198.7 m: annual precip 35.23 in; Jun 5.08
   *   wettest; Feb 1.19 driest, Jan 1.25; DJF 3.93; annual snow 46.3 in, Jan
   *   11.8, Dec 10.9, Feb 9.7; Jan high 27.4 F, low 10.5 F; Jul high 85.4 F;
   *   140.7 nights at or below 32 F; 19.6 nights at or below 0 F; 59.4 days
   *   with a high at or below 32 F; 78.7 days with 1 in or more of snow on the
   *   ground; 17.5 days at or above 90 F; 6787.6 heating degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LA CROSSE, WI, WBAN 14920: Apr and May 78-79/52 lowest afternoon, Mar
   *   80/60, Dec 81/71, Jan 78/68, Aug 90/59; annual 82/60; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LA CROSSE: Apr 4.4 highest month; Aug 3.2 lowest)
   * Elevation is the NOAA station elevation, converted (198.7 m is about 650 ft).
   */
  {
    slug: 'dry-eye-relief-la-crosse-wi',
    title: 'Dry eye relief in La Crosse, Wisconsin',
    description:
      'La Crosse sees about 20 nights below zero, snow on the ground about 79 days, and dry, windy April afternoons. NOAA’s numbers and dry eye relief that helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `In La Crosse, dry eyes follow the furnace and the April wind. NOAA’s normals show about 141 nights a year at or below freezing and nearly 20 below zero, so heat runs for months, and April and May afternoons drop to about 52 percent humidity. Keep heat and wind off your eyes, take breaks from screens, wear goggles on the ice, and use a lubricating drop as its label directs.`,
      },
      { h: 'How cold and snowy La Crosse gets' },
      {
        p: `NOAA’s 1991 to 2020 normals are measured at La Crosse’s municipal airport, about 199 meters (roughly 650 feet) above sea level beside the Mississippi River. The winter figures stand out:`,
      },
      {
        list: [
          `January highs average 27.4°F and lows 10.5°F.`,
          `About 141 nights a year reach 32°F or colder, and about 20 fall to 0°F or below.`,
          `About 59 days a year never get above freezing.`,
          `Normal snowfall is 46.3 inches, with January (11.8), December (10.9) and February (9.7) the snowiest months.`,
          `About 79 days a year have at least an inch of snow on the ground.`,
        ],
      },
      {
        p: `Precipitation runs about 35.23 inches a year, but very little falls in winter: December through February totals only about 3.93 inches, with February the driest month at 1.19. June is wettest at 5.08 inches.`,
      },
      { h: 'Six months of furnace air' },
      {
        p: `NOAA counts about 6,790 heating degree days at the station, which translates to furnaces and boilers running hard from October into April. The air outside on a January morning may be humid by percentage, but at 10°F it holds very little water. Once that air is warmed to room temperature, its relative humidity plunges. Indoors, the tear film’s watery layer evaporates faster, and the oil layer that slows that loss has more work to do. Many La Crosse residents notice that their eyes feel worst on the coldest, clearest days, when the heat never shuts off.`,
      },
      {
        list: [
          `Place a humidifier in the bedroom and keep it clean.`,
          `Don’t sleep with a register or space heater blowing toward the bed.`,
          `Lower the thermostat at night; a cooler room is less drying.`,
          `Before driving, let the windshield clear with the defroster on the glass rather than pointed at your face.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has room-by-room ideas.`,
      },
      { h: 'Ice fishing, skiing and the river in winter' },
      {
        p: `Winter sports here mean long hours in bitter cold: ice fishing on the backwaters, cross-country trails, and skiing on the bluffs. Subzero air, wind across open ice, and glare off snow all dry the eye surface, and people tend to squint instead of blinking fully. Goggles cover more of the eye than sunglasses. In a heated ice shanty, keep the heater from blowing at your face and step outside now and then for a break from the warm, dry air.`,
      },
      { h: 'April and May: the dry, breezy weeks' },
      {
        p: `NOAA’s humidity table puts April and May afternoons in La Crosse at about 52 percent, the lowest of the year, and the wind table makes April the windiest month (August is the calmest). Spring is when the bike trails and the river come back to life, from the La Crosse River State Trail to boat launches along the Mississippi. Wear sunglasses that wrap around, ride with your back to the wind when you can, and plan longer outings for the morning. A hike up Grandad Bluff for the view means wind at the top; take a minute with your eyes closed before you head back down.`,
      },
      { h: 'Campus, clinics and screen-heavy work' },
      {
        p: `La Crosse is a college town and a regional health care center, which means a lot of people spend their days studying, charting or working at monitors in heated or air-conditioned buildings. Screens slow your blink rate, and dry indoor air makes each missed blink count. Look across the room every so often, blink fully, and if you’re in a dorm or office with forced-air heat, move your desk out of the vent’s path. [Dry eyes while studying](/guides/dry-eyes-while-studying) has a fuller routine for exam weeks.`,
      },
      { h: 'Reading the Quell label' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Here are the directions as printed: {directions}. The label also cautions: {tip}.`,
      },
      {
        p: `There’s an important caution on the panel: {warnings}. For storage it reads: {storage}. In a La Crosse winter, a car, garage or ice shanty will run well below that range, so keep the bottle indoors or in an inside pocket rather than in the vehicle. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in La Crosse' },
      {
        p: `Orders ship from Brentwood, Tennessee, to La Crosse, Onalaska, Holmen and the rest of the US. Checkout is as a guest, with shipping at {shipping} and free shipping on {freeBottles} or more bottles. Tracking comes by email. No delivery date is promised, and a package left on a porch in January can get very cold, so bring it inside soon after it arrives. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. For more, see the [La Crosse page](/eye-drops/la-crosse-wi) and the [Wisconsin page](/eye-drops/state/wisconsin).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Persistent dryness deserves a real exam, not just more drops. The label’s rule: {stopUse} Eye pain, vision changes, or feeling as if something is in your eye after time in the cold wind are reasons to call. The [self-check](/self-check) can help you note what you’re feeling; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does La Crosse, WI get in winter?',
        a: `January lows average 10.5°F at La Crosse’s airport in NOAA’s 1991 to 2020 normals, and about 20 nights a year fall to 0°F or below. About 59 days a year stay at or below freezing.`,
      },
      {
        q: 'How much snow does La Crosse get a year?',
        a: `About 46.3 inches in a normal year, according to NOAA. January (11.8 inches) and December (10.9) are the snowiest months, and snow covers the ground about 79 days a year.`,
      },
      {
        q: 'Why do my eyes feel so dry in a Wisconsin winter?',
        a: `Heated indoor air is the main cause. Very cold air holds little water, and warming it to room temperature drops its relative humidity sharply. Cold wind and snow glare outdoors add to it.`,
      },
      {
        q: 'Can I get Quell shipped to La Crosse, Wisconsin?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to La Crosse and anywhere else in the US. No delivery date is promised, so reorder early, and bring the package indoors quickly in winter.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-meridian-ms:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013865.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013865.csv
   *   (MERIDIAN KEY FLD, elev 89.6 m: annual precip 57.00 in; Mar 5.66, Jan
   *   5.61, Apr 5.56; Sep 3.17 driest, Oct 3.86; annual snow 0.6 in; Jul high
   *   93.3 F, Aug 93.1 F; Jan high 59.0 F, low 36.4 F; 86.4 days at or above
   *   90 F; 3.1 days at or above 100 F; 48.4 nights at or below 32 F; 2477.5
   *   cooling degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MERIDIAN, MS, WBAN 13865: Apr 91/51 lowest afternoon, Oct 92/52, Mar
   *   88/53, Jul 93/58, Aug 93/56, Jan 87/60, Dec 88/60; annual 90/55;
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (MERIDIAN: Feb and Mar 3.3 highest; Aug 1.9 lowest)
   * Elevation is the NOAA station elevation, converted (89.6 m is about 295 ft).
   */
  {
    slug: 'dry-eye-relief-meridian-ms',
    title: 'Dry eye relief in Meridian, Mississippi',
    description:
      'Meridian mornings average 90 percent humidity, but April and October afternoons fall to the low 50s and AC runs for 86 hot days. NOAA data and eye tips.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Meridian’s muggy mornings can hide how often eyes dry out here. NOAA’s normals put April and October afternoons at Key Field near 51 and 52 percent humidity, and about 86 days a year reach 90°F, so air conditioning runs from spring well into fall. Point AC and heater vents away from your face, blink fully on screens and long drives, and use a lubricating drop as its label directs.`,
      },
      { h: 'Meridian’s climate, from Key Field' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Meridian come from Key Field, the city’s airport, about 90 meters (roughly 295 feet) above sea level in the pine-covered hills of east-central Mississippi:`,
      },
      {
        list: [
          `57.00 inches of precipitation in a normal year.`,
          `March (5.66 inches), January (5.61) and April (5.56) are the wettest months; September (3.17) is the driest.`,
          `About 86 days a year at 90°F or above, with July highs averaging 93.3°F.`,
          `About 48 nights at or below freezing, but well under an inch of snow a year.`,
          `January highs near 59.0°F, with lows near 36.4°F.`,
        ],
      },
      { h: 'Humid mornings, drier afternoons' },
      {
        p: `NOAA’s humidity table shows Meridian mornings between 87 and 93 percent in every month. Afternoons average about 55 percent and dip lowest in April (51) and October (52). Those two months are among the most pleasant of the year, which is exactly when people are outside for hours, working in the yard, sitting in the stands at a ball game or driving back roads with the windows down. The drier, milder air, often with a breeze in spring, draws moisture from the eye’s surface more than a sticky August day does.`,
      },
      {
        list: [
          `On breezy April afternoons, wear sunglasses that wrap around the sides.`,
          `For long yard jobs, safety glasses with side shields keep both wind and debris out.`,
          `Take short breaks indoors or in the shade and blink slowly a few times.`,
          `Keep car windows partly up at highway speed.`,
        ],
      },
      { h: 'February and March wind' },
      {
        p: `NOAA’s wind table lists February and March as Meridian’s breeziest months and August as the stillest. Late-winter fronts that sweep through bring gusty, cooler air, and outdoor work in that weather, on farms, timber land or job sites, can leave eyes stinging by the end of the day. Turning your back to the wind during breaks and finishing each blink fully both help.`,
      },
      { h: 'Air conditioning from May to October' },
      {
        p: `NOAA lists about 2,480 cooling degree days at Key Field in a normal year. That’s a lot of air conditioning, and AC removes moisture from the air as it cools. Offices, hospitals, schools, stores and trucks all run cold, dry air for months, and the vents tend to blow right where people sit. Move a desk out from under a ceiling diffuser if you can, turn dashboard vents toward the floor, and look away from screens every few minutes to reset your blink. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers a full desk routine.`,
      },
      { h: 'Long drives on I-20 and I-59' },
      {
        p: `Meridian sits where Interstates 20 and 59 meet, and plenty of people here drive for a living or commute long distances to Jackson, Hattiesburg or across the Alabama line. Hours of watching the road with the AC on lower your blink rate and dry the eye surface. Break up long drives with stops, aim the vents away from your face, and wear sunglasses against afternoon glare. Put drops in only when you’re parked, and wait until your vision is clear before driving again. Our [truck drivers guide](/guides/eye-drops-for-truck-drivers) has more on driving routines.`,
      },
      { h: 'Short winters, heated rooms' },
      {
        p: `December and January afternoons are among Meridian’s most humid at about 60 percent, but heating still runs on chilly nights, with about 48 of them at or below freezing. Warm, heated air pulls moisture from the eye more than the damp air outside does. A humidifier in the bedroom and a slightly cooler thermostat at night can help on cold weeks.`,
      },
      { h: 'Quell’s Drug Facts panel' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label describes its Uses as: {uses}. The directions on the panel are: {directions}. To keep the tip clean, it says: {tip}.`,
      },
      {
        p: `One caution to read first: {warnings}. The storage line reads: {storage}. A car parked in a Meridian lot in July can get much hotter inside than that range allows, so carry the bottle in your bag or keep it indoors. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Meridian' },
      {
        p: `We ship from Brentwood, Tennessee, to Meridian, Marion, Collinsville and every other US address. Checkout is as a guest, with tracking sent by email. Shipping runs {shipping}, and an order of {freeBottles} or more bottles ships at no charge. No delivery date is promised, so order before you’re down to the last few drops. If a bottle stays unopened, you can get a refund within {returnDays} days of delivery without returning it. Local details are on the [Meridian page](/eye-drops/meridian-ms) and the [Mississippi page](/eye-drops/state/mississippi).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops handle everyday dryness, not the reasons behind it. The label sets the boundary: {stopUse} Eye pain, vision that stays blurry, or symptoms that keep returning after all of these changes are reasons for an exam. Read [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'How humid is Meridian, Mississippi?',
        a: `Very humid in the mornings, between 87 and 93 percent in every month in NOAA’s table. Afternoons average about 55 percent and drop to about 51 percent in April and 52 in October.`,
      },
      {
        q: 'How many 90-degree days does Meridian get?',
        a: `About 86 a year at Key Field, according to NOAA’s 1991 to 2020 normals. July highs average 93.3°F and August 93.1°F.`,
      },
      {
        q: 'Why do my eyes get dry in Mississippi?',
        a: `Usually from air conditioning, which dries air as it cools and runs for months, plus heated air in winter. Drier, breezy spring and fall afternoons outdoors add to it.`,
      },
      {
        q: 'Does Quell ship to Meridian, MS?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Meridian and anywhere else in the US, with guest checkout and email tracking. No delivery date is promised, so place your order before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-galveston-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012923.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012923.csv
   *   (GALVESTON SCHOLES FLD, elev 1.5 m: annual precip 47.22 in; Sep 6.65
   *   wettest, Oct 5.15; Apr 2.06 driest, Feb 2.14; snow 0.1 in; Aug high 92.0
   *   F, Jul 91.3 F; Aug low 79.8 F, Jul 79.7 F; Jan high 63.2 F, low 48.9 F;
   *   65.5 days at or above 90 F; 1.7 nights at or below 32 F; 3571.0 cooling
   *   degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (GALVESTON, TX, WBAN 12923, record period 1948-1962 only: Oct 80/64
   *   lowest afternoon, Nov 81/66, Feb 86/75, Jan 85/74; annual 83/69;
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (GALVESTON, 199903-202312: Apr 5.7 highest month, May 5.6; Aug 4.3
   *   lowest; annual 5.0)
   * Elevation is the NOAA station elevation, converted (1.5 m is about 5 ft).
   */
  {
    slug: 'dry-eye-relief-galveston-tx',
    title: 'Dry eye relief in Galveston, Texas',
    description:
      'Galveston’s air is humid, but April brings the windiest weeks and summer nights stay near 80°F with AC on. NOAA data and practical dry eye tips for the island.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `On Galveston Island, dry eyes come from wind, sun and air conditioning rather than dry air. NOAA’s records show humid air year-round, but April is the windiest month and summer nights stay near 80°F, so AC rarely rests. Wear wraparound sunglasses on the beach, keep vents off your face, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Galveston’s weather, from Scholes Field' },
      {
        p: `NOAA’s 1991 to 2020 normals for Galveston come from Scholes International Airport, which sits just 1.5 meters (about 5 feet) above sea level on the island. A normal year there brings:`,
      },
      {
        list: [
          `About 47.22 inches of precipitation, with September (6.65 inches) the wettest month.`,
          `April (2.06 inches) and February (2.14) as the driest months.`,
          `About 65 days at 90°F or above, with August highs near 92.0°F.`,
          `Summer nights that barely cool off, with July lows near 79.7°F and August near 79.8°F.`,
          `January highs near 63.2°F and fewer than two freezing nights a year.`,
        ],
      },
      { h: 'How humid is Galveston?' },
      {
        p: `Very. NOAA’s humidity table for Galveston is based on an older record, 1948 to 1962, and it shows mornings in the low to mid 80s year-round. Afternoons average about 69 percent, with the lowest readings in October (64) and November (66). That means the outdoor air on the island almost never dries the eyes by itself. Wind, salt spray, sun on the water, and chilled indoor air do.`,
      },
      { h: 'Wind on the Seawall and the beaches' },
      {
        p: `NOAA’s wind table for Galveston, which runs from 1999 to 2023, shows April as the windiest month, May close behind, and August the calmest. Spring wind off the Gulf carries salt spray and blowing sand. A bike ride along Seawall Boulevard, a day on the beach at East End or a fishing pier, or a ride on the Bolivar ferry all put your eyes in that wind for hours. Wind speeds evaporation from the tear film, and sand or salt on your fingers is something you don’t want near your eyes.`,
      },
      {
        list: [
          `Wear wraparound sunglasses; they stop more wind and spray than flat lenses.`,
          `Sit with your back to the wind on the beach.`,
          `Rinse salt and sand off your hands and face before touching anywhere near your eyes.`,
          `Take breaks in the shade, and blink slowly for a few seconds when you get there.`,
        ],
      },
      { h: 'Air conditioning on warm nights' },
      {
        p: `NOAA counts about 3,570 cooling degree days at the station in a normal year. With summer nights holding near 80°F, air conditioning runs around the clock for months. AC dries the air as it cools, and the vent in a hotel room, condo or bedroom is often aimed straight at the bed. Point it away, set the thermostat a little warmer at night, and consider a small humidifier. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more ideas for visitors.`,
      },
      { h: 'Cruise days, Strand strolls and screens' },
      {
        p: `Many visitors pass through Galveston on their way to a cruise, and long days in a terminal, on deck in the wind, or in a cold cabin can all dry the eyes. Locals face their own version: shifts in hospitals, offices and port facilities under strong AC, long hours on screens, and the drive over the causeway to Houston. Keep the bottle in a carry-on or day bag, look away from screens often, and blink fully. If you’re flying in, [traveling with eye drops](/guides/traveling-with-eye-drops) covers packing.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives these Uses: {uses}. Directions, as printed on the panel: {directions}. One more instruction to follow: {tip}.`,
      },
      {
        p: `The panel includes a caution: {warnings}. Its storage line is: {storage}. A car parked near the beach in summer will run well past the top of that range, so keep the bottle in a bag that comes with you, out of direct sun. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Galveston' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Galveston, Jamaica Beach, Texas City and anywhere else in the US. You check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email. No delivery date is promised, so order ahead of a trip rather than counting on a package reaching a vacation rental on time. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Galveston page](/eye-drops/galveston-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When it’s time for an eye doctor' },
      {
        p: `If your eyes stay uncomfortable after you’ve dealt with wind, sun and AC, get them checked. The label is clear: {stopUse} Pain, blurred vision that doesn’t clear, or sand that won’t come out with blinking are reasons to see a doctor. The [self-check](/self-check) can help you describe your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Galveston get at night in the summer?',
        a: `Not much cooler than the day. NOAA’s 1991 to 2020 normals for Scholes International Airport put July lows at 79.7°F and August lows at 79.8°F, with highs near 91 to 92°F.`,
      },
      {
        q: 'What is the windiest month in Galveston?',
        a: `April, according to NOAA’s wind table for the Galveston station, with May close behind. August is the calmest month of the year there.`,
      },
      {
        q: 'Why do my eyes burn at the beach in Galveston?',
        a: `Wind, salt spray, sand and sun glare off the water all play a part. Wraparound sunglasses, sitting with your back to the wind, and rinsing your hands before touching your face help. Burning that continues needs an eye doctor.`,
      },
      {
        q: 'Can I get Quell delivered to Galveston, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Galveston and the rest of the US, with guest checkout and email tracking. No delivery date is promised, so order well before a trip.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for can-i-use-my-fsa-after-i-leave-my-job:
   * - https://www.irs.gov/publications/p969 (Publication 969, 2025): health FSAs
   *   are "employer-established benefit plans"; self-employed persons aren't
   *   eligible; distributions reimburse qualified medical expenses "incurred
   *   during the period of coverage"; the full annual election must be available
   *   at any time during the coverage period regardless of the amount actually
   *   contributed; a written statement from an independent third party is
   *   required; no advance reimbursement of future expenses; OTC medicine
   *   (whether or not prescribed) is medical care; FSAs are generally
   *   use-it-or-lose-it, with either a grace period of up to 2 1/2 months or a
   *   carryover, not both; FSA can't pay insurance premiums.
   * - https://www.ecfr.gov/ 26 CFR 54.4980B-2, Q&A-8: health FSAs are group
   *   health plans subject to COBRA; when the two conditions in paragraph (c)
   *   are met, the FSA need only offer COBRA if the benefit still available for
   *   the rest of the plan year exceeds the maximum COBRA charge for the rest of
   *   the year, and never for any later plan year.
   * Run-out periods are plan-specific and not in Pub 969, so the guide only tells
   * readers to ask the administrator.
   */
  {
    slug: 'can-i-use-my-fsa-after-i-leave-my-job',
    title: 'Can I use my FSA after I leave my job?',
    description:
      'Usually only for expenses from before your last day of coverage, unless you elect COBRA. What IRS Publication 969 says, and what to ask your FSA plan.',
    category: 'ordering',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Generally, only for expenses you incurred while you were still covered. IRS Publication 969 calls a health FSA an employer-established benefit plan and says it reimburses qualified medical expenses incurred during the period of coverage. When your job ends, coverage usually ends too, unless you elect COBRA continuation for the FSA. You may still be able to file claims for earlier purchases; your plan sets that deadline.`,
      },
      { h: 'Why an FSA ends when the job does' },
      {
        p: `A health flexible spending arrangement isn’t an account you own the way you own an HSA. Publication 969 describes health FSAs as employer-established benefit plans, usually funded by a salary reduction agreement in which you elect an amount at the start of the plan year and your employer withholds it from each paycheck. It also notes that self-employed people aren’t eligible for FSAs at all. Because the plan belongs to your employer, its written terms decide when your participation ends, and for most people that’s tied to the last day of employment or the end of that pay period.`,
      },
      {
        p: `Compare that with a health savings account, which Publication 969 describes as portable: it stays with you when you change jobs. Our guide on [using your HSA after leaving a job](/guides/can-you-use-hsa-for-eye-drops-after-leaving-a-job) covers that side.`,
      },
      { h: 'Can I still use my FSA after termination?' },
      {
        p: `The date that matters is when the expense was incurred, not when you file the claim. Publication 969 says distributions from a health FSA must reimburse qualified medical expenses incurred during the period of coverage. In practice that means:`,
      },
      {
        list: [
          `Something you bought or received before your coverage ended can usually still be reimbursed, as long as you file by the plan’s deadline.`,
          `Something you buy after coverage ends generally can’t be, unless you’ve elected COBRA continuation for the FSA.`,
          `Your FSA debit card may be shut off on or soon after your last day, even if you still have claims to file for earlier expenses.`,
          `Whether quitting, being laid off or retiring changes anything depends on your plan document, not on IRS rules.`,
        ],
      },
      { h: 'How long can I use my FSA after termination?' },
      {
        p: `There’s no single IRS answer. A plan may give former participants a window after their last day to submit receipts for expenses already incurred, often called a run-out period, and its length is written into each plan. Publication 969 doesn’t set it. Your summary plan description or benefits portal should list it, and the plan administrator can confirm it. Ask before your last day, while you still have access to employer systems.`,
      },
      { h: 'Using your full election before you leave' },
      {
        p: `Publication 969 includes a rule that surprises a lot of people: you must be able to receive the maximum amount of reimbursement you elected at any time during the coverage period, regardless of how much you’ve actually contributed so far. If you elected a full year’s amount and leave in March, eligible expenses you incurred in January through March can be reimbursed up to that full election, even though only a few paychecks went in. Ask your administrator how your plan handles this before relying on it, since claims still have to be approved under the plan’s terms.`,
      },
      { h: 'COBRA and health FSAs' },
      {
        p: `Under the Treasury regulation on COBRA (26 CFR 54.4980B-2, Q&A-8), a health FSA is a group health plan that can be subject to COBRA. For many FSAs, though, the obligation is limited. If the FSA meets the regulation’s conditions, it only has to offer COBRA when the benefit you could still receive for the rest of the plan year is more than the most it could charge you for COBRA for the rest of that year. Even then, coverage doesn’t have to extend into the next plan year.`,
      },
      {
        p: `In plain terms, COBRA for an FSA tends to make sense only if you’ve spent little of your election and expect real medical costs before the plan year ends. Your employer’s COBRA notice will list the premium and the deadline to elect it. Note also that Publication 969 says an FSA can’t pay health insurance premiums, so FSA money can’t be used to pay a COBRA premium for your medical plan.`,
      },
      { h: 'Do grace periods and carryovers still apply?' },
      {
        p: `Publication 969 explains that FSAs are generally use-it-or-lose-it, but a plan may offer either a grace period of up to two and a half months after the plan year or a carryover of a limited amount into the next year, not both. Whether a former employee keeps either benefit is a plan-level choice. Our guide to [FSA carryover and grace periods](/guides/fsa-carryover-and-grace-period-for-eye-drops) explains how each one works for people who stay.`,
      },
      { h: 'Spending your FSA before your last day' },
      {
        p: `If you have money left and your departure date is set, the simplest approach is to buy what you already use while coverage is still active. Publication 969 lists over-the-counter medicine, whether or not prescribed, as medical care for FSA purposes, so OTC products such as lubricating eye drops can qualify. A few practical steps:`,
      },
      {
        list: [
          `Check the plan’s last eligible date for expenses, and order well before it so the purchase date is never in question.`,
          `Pay with your FSA card while it still works, or pay another way and file a claim.`,
          `Save a receipt that shows the date, item and amount; Publication 969 requires a written statement from an independent third party.`,
          `Buy only what you’ll use before the expiration dates; the IRS doesn’t allow reimbursement for expenses you haven’t incurred yet.`,
          `Update your benefits portal with a personal email address so reminders and denial notices reach you after you leave.`,
        ],
      },
      { h: 'Paying for Quell with FSA funds' },
      {
        p: `Quell is an over-the-counter lubricating eye drop with a standard Drug Facts panel. Its Uses line reads: {uses}. Each bottle holds {size}, and the label directions are: {directions}. You check out as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
      {
        p: `Your order confirmation email works as a receipt, and you can pull up past orders on the [order lookup page](/orders). Whether a particular FSA card is accepted at checkout depends on the card issuer, not on us. For the general rules, see our [HSA and FSA guide](/guides/hsa-fsa-and-eye-drops) and [how to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops).`,
      },
      { h: 'Questions to ask HR before you go' },
      {
        list: [
          `On what exact date does my health FSA coverage end?`,
          `How long do I have to submit claims for expenses incurred before that date?`,
          `When will my FSA card stop working?`,
          `Am I eligible for COBRA on the FSA, and what would it cost for the rest of the plan year?`,
          `Does the grace period or carryover apply to former employees?`,
          `Where will notices go once I lose access to my work email?`,
        ],
      },
      {
        p: `A dependent care FSA follows its own rules and can’t be used for eye drops at all; [this guide](/guides/can-you-use-a-dependent-care-fsa-for-eye-drops) explains the difference.`,
      },
    ],
    faq: [
      {
        q: 'Can I still use my FSA after termination?',
        a: `Generally only for qualified expenses you incurred while your coverage was active. IRS Publication 969 says health FSAs reimburse expenses incurred during the period of coverage, so purchases after coverage ends usually don’t qualify unless you elect COBRA.`,
      },
      {
        q: 'How long do I have to submit FSA claims after leaving a job?',
        a: `It depends on your plan. A plan may allow a run-out period for former employees to file claims for earlier expenses, but the IRS doesn’t set its length. Check your summary plan description or ask the administrator.`,
      },
      {
        q: 'Does COBRA apply to a health FSA?',
        a: `It can. Treasury regulations count a health FSA as a group health plan subject to COBRA, but many FSAs only have to offer it if the benefit left for the year exceeds the COBRA charge, and only through the end of that plan year.`,
      },
      {
        q: 'Can I use my whole FSA election if I quit early in the year?',
        a: `IRS Publication 969 says the full elected amount must be available at any time during the coverage period, regardless of what you’ve contributed. That applies to expenses incurred before your coverage ends; confirm the details with your plan administrator.`,
      },
      {
        q: 'Should I spend my FSA before leaving my job?',
        a: `Often, yes, if you have qualified expenses you’d incur anyway. Buying over-the-counter items you already use, like eye drops, before coverage ends is common. Keep the receipts and don’t buy more than you’ll use.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-holiday-light-show',
    title: 'Dry eyes at a holiday light show',
    description:
      'Cold night air, wind, a car heater on high and long stares at bright lights all dry the eyes. How to enjoy a holiday light show, walking or driving through.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Holiday light shows are hard on dry eyes because they combine cold, dry night air, wind on walk-through paths, a car heater blowing at your face on drive-through routes, and long stares at bright points of light that slow your blinking. Point vents away, wear glasses in the wind, look away from the lights now and then, and use a drop only when you’re parked or standing still.`,
      },
      { h: 'Why holiday lights leave your eyes feeling dry' },
      {
        p: `Nothing about the bulbs themselves dries your eyes. The setting does. Most displays run on December nights, when outdoor air is cold and holds little moisture. You’re usually looking at something bright and detailed for a long stretch, and people blink less while they concentrate on a view, just as they do at a screen. Each blink spreads a fresh layer of tears over the eye, and the outer oil layer of the tear film slows evaporation in between. When blinks get fewer and the air gets drier or windier, that film thins faster, and eyes start to sting, burn or water.`,
      },
      { h: 'Drive-through light shows: the heater problem' },
      {
        p: `A popular drive-through display can mean a long, slow crawl in a line of cars with the heater running the whole time. Warm air from the dash vents is dry air, and on most cars it blows straight at the faces in the front seats. Add a defroster on high to keep the windshield clear and you’ve built a small, dry wind tunnel.`,
      },
      {
        list: [
          `Aim the dash vents at the floor or toward the windows, and run the defroster only as much as the glass needs.`,
          `Lower the fan speed and let seat heaters, blankets or coats do more of the warming.`,
          `Open a window an inch for a few minutes now and then if the cabin feels stuffy.`,
          `Let a passenger do the long stares at the displays. The driver should keep eyes on the road and the car ahead.`,
          `If your eyes need a drop, wait for a spot where you can park or the line has fully stopped with the car in park, and never use one while the car is moving.`,
        ],
      },
      {
        p: `If your vision blurs for a moment after a drop, don’t drive until it’s clear. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains what to expect.`,
      },
      { h: 'Walk-through displays: wind and cold' },
      {
        p: `Zoo lights, botanical garden trails and downtown walk-throughs keep you outside for an hour or more. Cold air blowing across an open lawn or a lakefront path dries the eye surface quickly, and lines at the entrance or the cocoa stand often stand in the wind. Glasses or sunglasses with side coverage help even at night, though you’ll want clear or lightly tinted lenses so you can see the path. A hat with a brim blocks some wind from above. If the wind is strong, turn your back to it while you wait, and give your eyes a few slow, full blinks.`,
      },
      {
        p: `Fire pits and roasting stations show up at many displays. Smoke irritates eyes on its own, so stand upwind of the fire and don’t lean over it.`,
      },
      { h: 'Staring at bright lights and flashing displays' },
      {
        p: `Dense displays, light tunnels and shows synced to music invite long, fixed stares. Your eyes also have to keep adjusting between bright bulbs and dark spaces in between. Here are a few ways to keep it comfortable:`,
      },
      {
        list: [
          `Every couple of minutes, look away into the dark sky or the ground for a few seconds and blink fully.`,
          `Don’t watch an entire light show through your phone screen; filming adds a second bright screen to stare at.`,
          `If a flashing section feels uncomfortable, look away or walk past it.`,
          `Take a break inside a warming tent or the car, but keep the heater off your face.`,
        ],
      },
      {
        p: `New sensitivity to light, pain, or halos that don’t go away after you leave are not dryness to wait out. See an eye doctor.`,
      },
      { h: 'Bringing eye drops to a light show' },
      {
        p: `A small bottle fits easily in a coat pocket. Keep it in an inside pocket rather than in the car or an outer pocket, because the label sets a storage range: {storage}. A car parked for an hour on a freezing night can fall below that. [Can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) has more on cold.`,
      },
      {
        p: `Take your gloves off and make sure your hands are clean before you open the bottle, and follow the label: {tip}. Using a drop in the dark can be tricky. Do it under a streetlight, in a restroom, or in the parked car with the dome light on.`,
      },
      { h: 'What Quell’s label covers, and what it doesn’t' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions say: {directions}. If you’re heading out in the evening, the panel doesn’t say what time of day to use each drop, so many people simply space them across their waking hours. Before the first bottle, read the caution: {warnings}.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses, for children, or for use alongside other eye drops. If any of those apply to your group, ask an eye doctor or pharmacist before the outing. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'More holiday outings, same eyes' },
      {
        p: `Light shows often fall in a busy run of December evenings: concerts, parties, travel and late nights on screens. [Dry eyes at a holiday concert or show](/guides/dry-eyes-at-a-holiday-concert-or-show) covers indoor events, and [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) goes deeper on car heat. If you’re running low before the holidays, you can [order Quell](/#buy) as a guest. No delivery date is promised, so order early.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness from a cold night out should ease once you’re home in calmer air. If it doesn’t, the label is clear: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists other signs that need an appointment.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water at Christmas light displays?',
        a: `Cold wind and long stares at bright lights dry the surface of the eye, and watering is often the eye’s response to that dryness. Glasses with side coverage, regular breaks to look away and blink, and keeping car heater vents off your face all help.`,
      },
      {
        q: 'How do I keep my eyes from drying out on a drive-through light show?',
        a: `Aim the heater vents at the floor, keep the fan low, and let a passenger do most of the sightseeing. Put in drops only when the car is parked, and wait until your vision is clear before driving on.`,
      },
      {
        q: 'Can I keep eye drops in the car during a light show?',
        a: `It’s better to keep them in an inside coat pocket. Quell’s label sets a storage temperature range, and a parked car on a cold December night can fall below it.`,
      },
      {
        q: 'Do bright holiday lights hurt your eyes?',
        a: `Long stares at bright displays can leave eyes tired and dry because you blink less while you watch. Pain, new light sensitivity or halos that last after you leave are not normal and should be checked by an eye doctor.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-new-parents',
    title: 'Christmas gifts for new parents',
    description:
      'The gifts new parents use most are for them, not the baby: food, sleep help and comfort. Where eye drops fit for tired, screen-strained eyes, and when to skip.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `The most useful Christmas gifts for new parents take care of the adults: ready meals, help with chores, chances to sleep, comfortable clothes and small comforts for night feeds. If a new parent has mentioned dry, tired eyes from short nights and phone screens, a bottle of lubricating eye drops for them can be a practical add-on to a bigger gift. It’s for the grown-up only.`,
      },
      { h: 'Gifts for new parents that aren’t for the baby' },
      {
        p: `Babies get showered with clothes and toys. Parents get forgotten. These ideas are ones new parents tend to actually use in the first months:`,
      },
      {
        list: [
          `Meals: a freezer full of dinners, a meal delivery gift card, or a standing offer to drop off soup on Sundays.`,
          `Time: a written “coupon” for a night of dishes, laundry or grocery runs, or for watching the baby while they nap.`,
          `Sleep comfort: a soft eye mask, blackout curtains, or good earplugs for the parent who isn’t on duty.`,
          `Night-feed comfort: a dim, warm nightlight, a phone charger with a long cable, and a cozy robe or slippers.`,
          `Something just for them: a book, a favorite coffee, or a gift card for a haircut or massage.`,
        ],
      },
      { h: 'Why new parents end up with tired, dry eyes' },
      {
        p: `Short, broken sleep is the obvious one. Less obvious is how much of a new parent’s night is spent staring: at the baby during a feed, at a monitor screen, or at a phone scrolled in a dim room to stay awake. Screens reduce how often people blink, and blinking is what spreads tears over the eye. Winter makes it worse. Heated rooms dry the air, and many parents keep the nursery warm, so the parent sitting in that room at 3 a.m. is in dry air with a lit screen. By morning, eyes can feel gritty and heavy.`,
      },
      { h: 'Where eye drops fit in a new parent gift' },
      {
        p: `A bottle of drops makes sense as a small, thoughtful extra for someone who has already said their eyes feel dry. Some parents will appreciate it alongside a nightlight and an eye mask as a “night shift kit.” For someone who hasn’t mentioned their eyes, it may come across as a comment on how tired they look, so pick something else.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The label directions are: {directions}. Each bottle holds {size}, small enough for a diaper bag pocket or a nightstand.`,
      },
      { h: 'Check these before you give drops' },
      {
        list: [
          `Allergies: Quell’s label caution reads: {warnings}. If you don’t know whether the parent has an egg or bird allergy, ask first. [Egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains why.`,
          `Breastfeeding: the label doesn’t address it. A nursing parent should ask their doctor or pharmacist before starting any new drop; [this guide](/guides/can-you-use-eye-drops-while-breastfeeding) has more.`,
          `Contact lenses and other drops: the label doesn’t cover either, so an eye doctor or pharmacist is the one to ask.`,
          `Prescription eye medicine: if they already use one, they should check with their doctor before adding anything.`,
        ],
      },
      { h: 'Keep the bottle out of the baby’s reach' },
      {
        p: `The label’s keep-out-of-reach section says: {swallowed}. With a newborn that sounds remote, but babies start grabbing and mouthing everything within months. Suggest the parents store the bottle up high, in a closed cabinet or bag pocket the baby can’t open, rather than on a changing table or low shelf. This label is for adults, and it doesn’t give directions for use in babies or children; questions about a baby’s eyes go to the pediatrician.`,
      },
      { h: 'Christmas gifts for new moms and new dads' },
      {
        p: `Gift lists for new moms and new dads overlap more than the internet suggests. Both lose sleep, both scroll at 2 a.m., and both appreciate a hot meal they didn’t have to make. A parent heading back to an office or a screen-heavy job after leave may also be back to long computer days on little sleep, which is when dry eyes often show up. Pairing drops with a gift that says “rest” (an eye mask, a book, an offer to take a night shift) keeps the message kind.`,
      },
      { h: 'Christmas gifts for first-time parents on a budget' },
      {
        p: `Inexpensive gifts can be just as welcome: a homemade casserole, a handwritten offer of help, a favorite snack box, or a single bottle of drops tucked into a stocking. Quell has no promo codes or subscriptions, so the price you see at checkout is what you pay, plus {shipping} shipping, or free shipping on {freeBottles} or more bottles.`,
      },
      { h: 'Sending Quell to new parents' },
      {
        p: `You can ship straight to their address with guest checkout. There’s no gift wrap or gift message at checkout, so add a card when you see them or send a note separately. No delivery date is promised, so order well before Christmas. If an unopened bottle isn’t wanted, it can be refunded within {returnDays} days of delivery with no need to send it back. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through the details, and you can [order here](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'What do new parents really want for Christmas?',
        a: `Usually help and rest more than baby gear: ready meals, offers to do chores or watch the baby, sleep comforts, and small things just for them. A gift aimed at the parent rather than the baby is often the one they remember.`,
      },
      {
        q: 'What is a good gift for new parents that isn’t for the baby?',
        a: `Meal deliveries, an offer of a night off, a cozy robe, an eye mask, a dim nightlight for feeds, or a gift card for something personal. If they’ve mentioned dry eyes from late nights, eye drops can be a small add-on.`,
      },
      {
        q: 'Are eye drops a good gift for a new mom?',
        a: `Only if she’s said her eyes feel dry or tired. Check for egg or bird allergies first, because Quell’s label carries that caution, and if she’s breastfeeding, she should ask her doctor or pharmacist before using any new drop.`,
      },
      {
        q: 'Can I ship a Christmas gift directly to new parents?',
        a: `Yes. Quell ships to any US address with guest checkout, but there’s no gift wrap or gift message option, and no delivery date is promised, so order early and send a card separately.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-the-evening',
    title: 'Dry eyes in the evening',
    description:
      'Evenings stack up screens, heat and tired blinking. How to plan your evening routine around dry eyes, and where Quell’s third daily drop can fit.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eyes in the evening usually come from what the evening is made of: more screens after a day of them, the heat or air conditioning running in the house, and tired eyelids that blink less fully. Shaping the evening helps, such as fewer screen hours, vents pointed away, a humidifier, and a lubricating drop placed as its label directs, with the last of the day’s doses timed before your longest stretch of screen time.`,
      },
      { h: 'What causes dry eyes in the evening?' },
      {
        p: `By evening your eyes have already been through a full day. That doesn’t mean something is wrong, but several everyday things pile up after dark:`,
      },
      {
        list: [
          `Screens follow you home. The work monitor is swapped for a phone, tablet or TV, and screens reduce blinking.`,
          `The house closes up. In winter the furnace runs harder after sunset; in summer the AC runs into the night. Both dry the air.`,
          `Lighting changes. Reading or scrolling in a dim room tends to mean staring harder and blinking less.`,
          `Blinks get lazier. Tired eyelids often close only part of the way, so tears don’t spread fully across the eye.`,
          `Fans and space heaters come on in the rooms where you relax.`,
        ],
      },
      {
        p: `The tear film has three layers: an outer oil layer, a watery middle, and a mucus layer next to the eye. The oil layer slows evaporation, and blinking renews the whole film. Evenings test both.`,
      },
      { h: 'Dry eyes worse in the evening than in the morning?' },
      {
        p: `That pattern is common. A night of sleep keeps the eyes closed, and most people start the day with more comfortable eyes. Over the next twelve or more hours, the effects of screens, indoor air and long stretches of focus add up. If your eyes are fine at breakfast and scratchy by 8 p.m., that rhythm points to your day rather than to any one moment. Our guide to [eyes that feel dry at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) looks at the workday side. This one is about what happens after you get home.`,
      },
      { h: 'Dry eyes only in the evening' },
      {
        p: `If evenings are the only time your eyes bother you, look hard at the evening itself. Keep a short log for a week: what you did, which room you were in, whether the heat or AC was on, and how many hours you spent on a screen. Many people discover that the uncomfortable evenings are the ones spent on a laptop on the couch, under a ceiling fan, or next to a heater. That’s good news, because those are things you can change.`,
      },
      { h: 'An evening routine that’s easier on dry eyes' },
      {
        list: [
          `Pick one screen. Watching TV while scrolling a phone doubles the staring.`,
          `Sit farther from the TV and keep the room lit, not pitch dark.`,
          `Point fans, heater vents and space heaters away from the couch and bed.`,
          `Run a humidifier in the room where you spend the evening, and keep it clean.`,
          `Every 20 minutes of screen time, look across the room for about 20 seconds and blink slowly a few times.`,
          `Put the phone down a little before bed. Scrolling in bed is a long, close stare in a dark room.`,
          `Read a paper book or listen to something for the last stretch of the evening.`,
        ],
      },
      { h: 'Where the third daily drop fits' },
      {
        p: `Quell’s label gives its directions as: {directions}. It doesn’t say what time of day each drop should go in, so you can arrange them around your own day. People who notice their eyes most in the evening often space the drops through their waking hours so the last one falls in the early evening, before the stretch of the day that bothers them most. Some examples:`,
      },
      {
        list: [
          `Office schedule: one drop in the morning before work, one at lunch, and one when you get home, before dinner and the evening’s screen time.`,
          `Late shift: one when you wake up, one partway through the shift, and one when you get home.`,
          `Evening classes or a second job: one mid-morning, one mid-afternoon, and one before you leave for the evening.`,
        ],
      },
      {
        p: `The directions set the number; they don’t stretch to extra evening drops when a day has been rough. If three a day as directed doesn’t keep things comfortable, that’s a question for an eye doctor. [Can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed) covers bedtime timing.`,
      },
      { h: 'Using a drop well in the evening' },
      {
        list: [
          `Wash your hands first, especially after cooking or handling food.`,
          `Follow the label: {tip}.`,
          `Tilt your head back, pull down the lower lid, and let one drop fall in. Close your eye gently for a moment.`,
          `If your vision blurs briefly, wait for it to clear before reading, driving or walking down stairs in a dim house.`,
          `Quell is milky by nature: {milky}. Its label also says: {doNotUse}.`,
        ],
      },
      { h: 'What the label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses are given as: {uses}. Read the caution before first use: {warnings}. The label doesn’t give directions for contact lenses, for children, or for use with other drops; ask your eye doctor or pharmacist if any of those apply. Storage is listed as: {storage}. A nightstand away from a radiator or sunny window usually works. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Dry, itchy or sore eyes in the evening: when to see a doctor' },
      {
        p: `Dryness that settles after a calmer evening is one thing. Itching, pain, discharge, light sensitivity, or eyes that stay sore the next morning are different, and they need an eye doctor. The label puts it this way: {stopUse} Our [self-check](/self-check) can help you describe your symptoms before an appointment; it’s not a diagnosis. If you’re ready to try Quell, you can [order as a guest](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why are my dry eyes worse in the evening?',
        a: `Effects build through the day. Screens after work, heated or air-conditioned rooms, dim lighting and tired, partial blinks all add up after dark, so many people feel fine in the morning and dry by evening.`,
      },
      {
        q: 'When should I use eye drops if my eyes are dry at night?',
        a: `Quell’s label directs one drop three times a day in each eye without naming the times, so many people space them across waking hours with the last one in the early evening, before their heaviest screen time.`,
      },
      {
        q: 'Can watching TV at night make your eyes dry?',
        a: `It can. Long stretches of staring at a screen reduce blinking, especially in a dark room with heat or a fan running. Sit farther back, keep a light on, and look away and blink every so often.`,
      },
      {
        q: 'Why do my eyes feel dry only at night?',
        a: `Often because the evening combines the most screen time with the driest indoor air. Keep a short log of rooms, screens and heating for a week; if the dryness doesn’t follow any pattern or comes with pain, see an eye doctor.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-driving-at-night',
    title: 'Dry eyes when driving at night',
    description:
      'Heater vents, oncoming headlights and the fixed stare of a dark road all dry the eyes at night. What helps, and why drops go in only when you’re parked.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Eyes get dry when driving at night because you stare at a dark road, blink less, squint against oncoming headlights, and often sit in front of heater or AC vents for the whole trip. Point vents away from your face, keep the windshield clean, take breaks on long drives, and put in eye drops only after you’ve pulled over and parked, waiting until your vision is clear before driving again.`,
      },
      { h: 'Why do my eyes get dry driving at night?' },
      {
        p: `Night driving asks your eyes to concentrate harder with less to look at. A dark road gives you a narrow, bright zone to focus on, and people tend to fix their gaze on it without blinking much. Every blink spreads tears over the eye; the outer oil layer of the tear film then slows evaporation until the next one. Fewer blinks means more time for the surface to dry. At the same time, the car is usually sealed up with the heater or AC running, and that air is dry.`,
      },
      { h: 'Heater and AC vents at night' },
      {
        p: `Nights are colder, so in fall and winter the heater tends to run harder after dark, and the defroster often runs too. Both push dry air upward toward the driver’s face. In summer, the AC does the same thing with cold, dry air. Try these settings:`,
      },
      {
        list: [
          `Aim the center vents at your chest or the passenger side, not your eyes.`,
          `Use the floor setting for heat; warm air rises on its own.`,
          `Run the defroster only as much as needed to keep the glass clear.`,
          `Lower the fan speed and use seat heaters if you have them.`,
          `Crack a window briefly on a long drive to swap out stale, dry cabin air.`,
        ],
      },
      { h: 'Oncoming headlights and glare' },
      {
        p: `Bright headlights from oncoming traffic, or a pickup’s lights in your mirrors, make you squint, and squinting isn’t blinking. A dirty windshield turns every light into a starburst and makes the squinting worse.`,
      },
      {
        list: [
          `Clean the inside and outside of the windshield regularly; film on the inside builds up from the heater.`,
          `Replace streaky wiper blades.`,
          `Look toward the right edge of your lane, not straight into oncoming lights, as they pass.`,
          `Flip the rearview mirror to its night setting.`,
          `Keep your glasses clean if you wear them.`,
        ],
      },
      {
        p: `Tinted “night driving” lenses are sold widely. Whether they suit you is a question for your eye doctor, who can check your night vision and your glasses prescription.`,
      },
      { h: 'The stare on a long dark highway' },
      {
        p: `Hours on an interstate at night is one of the easiest ways to end up with burning eyes. The road barely changes, the dashboard glows, and many drivers fall into a locked stare. Break it up:`,
      },
      {
        list: [
          `Stop every couple of hours at a rest area or gas station.`,
          `When you stop, close your eyes for a minute and blink slowly a few times before driving on.`,
          `Dim the dashboard and navigation screen to a comfortable level.`,
          `Share the drive with someone else if you can.`,
        ],
      },
      {
        p: `Tired, heavy eyes on a night drive can also be a sign you’re too sleepy to drive. If you catch yourself drifting or forgetting the last few miles, stop and rest.`,
      },
      { h: 'Pull over before you put in drops' },
      {
        p: `Never use eye drops while the car is moving, even at a red light. Find a safe place to stop, put the car in park, and turn on the dome light so you can see what you’re doing. Then:`,
      },
      {
        list: [
          `Clean your hands; a small bottle of hand sanitizer in the console helps, as long as your hands are dry before you touch the bottle.`,
          `Follow the label: {tip}.`,
          `Tilt your head back, pull down the lower lid, and let one drop fall in.`,
          `Close your eyes gently for a moment.`,
          `Wait until your vision is fully clear before you drive.`,
        ],
      },
      {
        p: `Quell is a milky drop, and some blurring right after a drop is common with lubricating drops. Give it time to clear. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains more.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives these Uses: {uses}. The directions are: {directions}. If you drive mostly in the evening, you might put the day’s last drop in before you leave rather than during the trip. Read the caution before first use: {warnings}.`,
      },
      {
        p: `Don’t leave the bottle in the car for long stretches. The label’s storage line reads: {storage}. A car on a winter night or a summer afternoon can easily fall outside that range. Keep it in a bag or pocket that comes inside with you. The label doesn’t give directions for contact lenses; if you wear them, ask your eye doctor or pharmacist. Full details are on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When night driving trouble needs an eye doctor' },
      {
        p: `Dryness isn’t the only reason night driving gets harder. Halos around lights, glare that seems to get worse each month, blurry vision that doesn’t clear when you blink, or trouble seeing road signs are reasons for an eye exam, not just drops. The label also sets a limit: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more. For winter-specific car advice, see [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn when I drive at night?',
        a: `Usually because you blink less while focusing on a dark road, squint against headlights, and sit in dry air from the heater or AC. Point vents away, take breaks, and see an eye doctor if burning continues after the drive.`,
      },
      {
        q: 'Should I use eye drops before driving at night?',
        a: `If you use them, put them in before you set off or after you park, never while driving, and wait until your vision is clear. Quell’s label directs one drop three times a day in each eye.`,
      },
      {
        q: 'Do headlights make dry eyes worse?',
        a: `Bright oncoming lights make you squint rather than blink fully, and a dirty windshield adds glare. Keeping the glass clean and looking toward the edge of your lane as cars pass helps.`,
      },
      {
        q: 'Is it normal to have trouble seeing when driving at night?',
        a: `Night vision is never as sharp as daytime vision, but halos, growing glare or blurring that doesn’t clear with blinking are reasons to see an eye doctor rather than just reaching for drops.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-video-calls',
    title: 'Dry eyes from video calls',
    description:
      'Video calls mean staring at faces and a camera with few blinks, often for hours back to back. Settings and habits that help dry eyes on meeting-heavy days.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Video calls dry the eyes because you stare steadily at faces, your own image and the camera, often in meetings stacked back to back, and people blink less while they concentrate on a screen. Turn off self-view, move the camera so you look slightly down, take a short break between calls, keep fans and vents off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why video calls feel harder on the eyes than other screen work' },
      {
        p: `On a spreadsheet or an email, your eyes move around the screen and wander off it now and then. A video call pulls them into a steady gaze. You watch faces for reactions, you watch yourself to check how you look, and you try to look at the camera so people feel you’re making eye contact. That steady gaze lowers your blink rate. Each blink spreads a fresh tear layer over the eye; between blinks, the outer oil layer slows evaporation. Fewer blinks mean longer stretches for the surface to dry, and on a full day of calls, that adds up.`,
      },
      { h: 'Back-to-back meetings with no gap' },
      {
        p: `In an office, walking to a conference room gave your eyes a break. On video, one meeting ends and the next starts with a click. Some fixes that keep the schedule intact:`,
      },
      {
        list: [
          `Set default meetings to end five minutes early, and use the gap to stand up and look out a window.`,
          `Make some calls audio-only, especially one-on-ones and check-ins that don’t need screens shared.`,
          `Walk during audio calls if you can.`,
          `Block one call-free hour in the afternoon on heavy days.`,
          `Close the laptop between meetings rather than checking email in the gap.`,
        ],
      },
      { h: 'Turn off self-view' },
      {
        p: `Most video platforms let you hide your own image after you’ve checked your framing. Watching yourself is one more thing for your eyes to lock onto, and many people find they look at their own tile far more than they realize. Hide it, glance at it occasionally if you need to, and let your eyes rest on the speaker or look away from the screen while someone else is presenting.`,
      },
      { h: 'Camera height, screen distance and lighting' },
      {
        list: [
          `Put the camera at or just above eye level, with the screen slightly below, so you look a little downward. Your eyelids cover more of the eye surface in a downward gaze than in an upward one.`,
          `Sit at arm’s length from the screen, and enlarge the video window rather than leaning in.`,
          `Use soft light from in front or to the side. A bright ring light aimed straight at your face makes you squint and stare into glare.`,
          `Avoid a bright window behind the screen; your eyes will work against the contrast.`,
          `Turn down screen brightness to match the room.`,
        ],
      },
      { h: 'Air at your desk' },
      {
        p: `Home offices are often small rooms with a space heater in winter or a fan in summer, both aimed at the person working. Heated and air-conditioned air are dry, and moving air dries the eye surface faster. Point heaters and fans at your legs, not your face, keep the desk away from vents, and consider a humidifier in the room. In an office, a desk under a ceiling diffuser is worth asking to move.`,
      },
      { h: 'Blinking on camera' },
      {
        p: `Some people feel self-conscious blinking while others watch. You don’t need to. Normal blinks don’t look odd on video, and a few slow, full blinks while someone else is talking are invisible in a gallery of tiles. If you’re presenting, glance down at your notes between slides, which naturally brings a blink. If you need a longer reset, turn your camera off for a minute and close your eyes.`,
      },
      { h: 'Using Quell on a meeting-heavy day' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label describes its Uses as: {uses}. The directions read: {directions}. You can arrange the three around your calendar: before the first call of the day, at lunch, and in the gap before the longest afternoon block, for example.`,
      },
      {
        list: [
          `Put drops in between calls, not during one with your camera on.`,
          `Wash your hands first, and follow the label: {tip}.`,
          `Give your vision a minute to clear before you start the next call or share your screen.`,
          `Keep the bottle in a desk drawer, away from a sunny window or heater. The label’s storage line: {storage}.`,
        ],
      },
      {
        p: `Read the caution before the first bottle: {warnings}. The label doesn’t give directions for contact lenses or for use with other drops; ask your eye doctor or pharmacist about those. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'How this differs from general computer use' },
      {
        p: `Screen time of any kind lowers blinking, and the basics overlap: breaks, distance and air. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers general desk work, and [dry eyes for remote workers](/guides/dry-eyes-for-remote-workers) covers the home office as a whole. What sets video calls apart is the locked gaze on faces and the lack of natural breaks. If calls are your hardest hours, the call-specific changes above tend to help most.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes still feel dry or sore after you’ve made these changes, or you notice pain, vision changes, or headaches with screen work, book an eye exam. An out-of-date glasses prescription can make you strain on calls. The label sets its own limit: {stopUse} You can [order Quell](/#buy) as a guest when you’re ready.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after Zoom meetings?',
        a: `Long video calls keep your eyes fixed on faces and the camera, which lowers blinking, and many people sit in dry, heated or air-conditioned rooms. Turning off self-view and taking short breaks between calls helps. Pain that continues needs an eye doctor.`,
      },
      {
        q: 'Does turning off self-view help your eyes?',
        a: `It can. Watching your own video tile is one more thing to stare at during a call. Hiding it after you check your framing lets your eyes rest on the speaker or look away more often.`,
      },
      {
        q: 'Can I put in eye drops during a video call?',
        a: `It’s easier between calls. A lubricating drop can blur your vision briefly, so give it a minute to clear before your next meeting or screen share.`,
      },
      {
        q: 'How do I stop my eyes from drying out in back-to-back meetings?',
        a: `End meetings a few minutes early, make some calls audio-only, look out a window in the gaps, and keep heaters and fans off your face. A humidifier in a small home office can also help.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-on-a-long-bus-ride',
    title: 'Dry eyes on a long bus ride',
    description:
      'Overhead air nozzles, hours of reading or scrolling, and dozing upright all dry the eyes on a coach. How to set up your seat and pack drops for a long bus trip.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Long bus rides dry the eyes because the overhead air nozzle blows straight down at your face, the cabin air is heated or cooled for hours, and most passengers spend the trip reading or staring at a phone. Close or turn the nozzle away, look out the window often, sleep with your eyes covered, and keep a small bottle of drops in your carry-on bag rather than the luggage bay.`,
      },
      { h: 'Why coaches are hard on dry eyes' },
      {
        p: `A coach is a long, sealed tube with a climate system running the entire time. Cold or warm air comes through vents along the ceiling and in the overhead panel above each seat. Air that has been heated or cooled is dry, and air that moves dries the eye’s surface faster. Your tear film has an oil layer on the outside that slows evaporation, but it gets renewed only when you blink, and long stretches of reading or watching a screen cut the number of blinks. Over a six- or ten-hour trip, that combination shows up as burning, gritty or watery eyes.`,
      },
      { h: 'Set up your seat in the first five minutes' },
      {
        list: [
          `Find the round air nozzle above your seat and twist it closed or point it at the window. If it won’t close, try another seat at the next stop if one is free.`,
          `Choose a seat away from a vent that’s blasting from the wall, if you can tell when you board.`,
          `On a sunny route, the shaded side cuts glare on your phone and eyes.`,
          `Keep your bag at your feet with the bottle of drops, a pair of sunglasses and a soft eye mask where you can reach them.`,
          `Wear a light layer so you don’t need to ask for more heat, which means drier air.`,
        ],
      },
      { h: 'Reading, phones and the window' },
      {
        p: `Hours on a bus invite hours on a phone. Screens reduce blinking, and a bouncing screen makes your eyes work harder to stay on the text. Reading a book does the same thing to a lesser degree. A few habits help:`,
      },
      {
        list: [
          `Every 15 or 20 minutes, look out the window at something far away for a few seconds and blink slowly.`,
          `Raise the screen closer to eye level instead of looking down into your lap for hours.`,
          `Turn screen brightness down to match the cabin, especially at night.`,
          `Switch to podcasts, audiobooks or music for part of the trip so your eyes can rest.`,
        ],
      },
      { h: 'Sleeping on a bus without drying out your eyes' },
      {
        p: `Dozing upright with the nozzle running and the cabin lights low can leave eyes uncomfortable when you wake. A soft eye mask shields your eyes from moving air and light, and closing the nozzle before you nod off matters even more than it does while you’re awake. On a late-night route, set an alarm or ask a neighbor to nudge you before your stop so you don’t wake in a rush and rub your eyes.`,
      },
      { h: 'Using eye drops on a moving bus' },
      {
        p: `You’re not driving, so you can use drops in your seat, but the ride can be bumpy. Wait for a smooth stretch of highway or a stop. Use hand sanitizer or wash your hands at a rest stop first, and let your hands dry. Then follow the label: {tip}. Tilt your head back against the headrest, which helps steady it, pull down the lower lid and let one drop fall in. Close your eyes for a moment, and give your vision time to clear before you start reading again.`,
      },
      { h: 'Rest stops and transfers' },
      {
        p: `Stops are your chance to reset. Step outside, look into the distance and blink a few times. A long transfer in a station is another stretch of indoor air and bright screens, so keep the same habits there. If you’re switching to a flight for part of the trip, [traveling with eye drops](/guides/traveling-with-eye-drops) covers airport rules.`,
      },
      { h: 'Packing drops for a bus trip' },
      {
        p: `Each Quell bottle holds {size}, small enough for a jacket pocket. Pack it in the bag you keep with you, not your suitcase. The luggage bay under a bus can get hot in summer and cold in winter, and the label’s storage line reads: {storage}. If your trip is long, bring the bottle you’re using rather than a brand-new one so you know how much is left, and don’t let anyone else use it.`,
      },
      { h: 'What the label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The directions are: {directions}. On a full-day ride, you might time them for when you board, partway through, and when you arrive. Before the first use, read the caution: {warnings}.`,
      },
      {
        p: `Quell is milky by nature; the label says {milky}. It also says: {doNotUse}. The label gives no directions for contact lenses, children, or use with other drops; ask an eye doctor or pharmacist if any of those apply to you. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'How a bus differs from a train' },
      {
        p: `Trains usually have more room to get up and walk, bigger windows and smoother tracks. Buses keep you in one seat with an air nozzle close to your head and more bumps, which makes the nozzle and your sleeping setup matter more. [Dry eyes on a long train ride](/guides/dry-eyes-on-a-long-train-ride) covers rail trips if you’re choosing between them.`,
      },
      { h: 'Ordering before you leave' },
      {
        p: `If you’re low, order before the trip. Guest checkout is the only kind, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so give yourself time. You can [order here](/#buy). If your eyes stay painful or blurry after the trip, see an eye doctor. Here’s the label’s guidance: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry on a bus?',
        a: `The overhead air nozzle and cabin heating or cooling keep dry air moving across your face for hours, and reading or using a phone lowers how often you blink. Closing the nozzle and looking out the window often help.`,
      },
      {
        q: 'Can I bring eye drops on a long-distance bus?',
        a: `Check your bus line’s baggage rules before you travel. Pack the small bottle in the bag you keep at your seat rather than in the luggage bay, where temperatures can swing past the label’s storage range.`,
      },
      {
        q: 'How do I sleep on a bus without my eyes drying out?',
        a: `Close or turn the overhead nozzle away before you doze, and wear a soft eye mask to block moving air and light. Avoid rubbing your eyes when you wake up.`,
      },
      {
        q: 'Is it okay to put in eye drops on a moving bus?',
        a: `Yes, since you’re not driving, but wait for a smooth stretch or a stop. Clean your hands, steady your head on the headrest, and let your vision clear before reading again.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-trade-show-or-convention',
    title: 'Dry eyes at a trade show or convention',
    description:
      'Exhibit hall air, bright booth lights, demo screens and long days on your feet add up to dry, tired eyes. How attendees and booth staff can stay comfortable.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Trade shows and conventions dry the eyes through a long chain of small things: climate-controlled exhibit halls, bright booth lighting, hours of demo screens and phones, little sleep, and a hotel room with its own heater or AC at night. Take short breaks away from the floor, keep a bottle of drops in your bag, point the hotel vent away from the bed, and give your eyes real rest between sessions.`,
      },
      { h: 'Why exhibit halls are hard on your eyes' },
      {
        p: `A convention center is a huge indoor space with a powerful heating and cooling system, and that system moves a lot of air. Air that’s been heated or cooled tends to be dry, and moving air pulls water off the eye faster. On top of that, a show floor is a visual flood: banners, video walls, product screens and spotlights compete for your attention, and people blink less when they concentrate. The oil layer of your tear film slows evaporation between blinks, but when blinks become rare and the air stays dry, the film thins and your eyes start to sting or water.`,
      },
      { h: 'Booth lights and video walls' },
      {
        p: `Exhibitors light their booths to stand out. Spotlights aimed down at a product table, LED panels at eye level and video walls running loops all add glare. If you’re working a booth, you may stand facing those lights for hours.`,
      },
      {
        list: [
          `When setting up, angle spotlights at the products, not at the spot where staff will stand.`,
          `Turn LED panels and monitors down from their brightest setting; a show floor rarely needs maximum brightness.`,
          `Rotate positions within the booth so no one faces the brightest light for the whole shift.`,
          `As an attendee, step out of the brightest aisles every so often and look at something distant.`,
        ],
      },
      { h: 'Demos, badge scanners and phones' },
      {
        p: `Much of a show happens on small screens: product demos on tablets, badge scanning apps, schedules, maps and endless messages to coworkers about where to meet. Each one is a few minutes of close, steady focus. Between conversations, look across the hall at a far sign for a few seconds and blink fully. If you’re running demos for hours, put the tablet on a stand at chest height rather than holding it up near your face.`,
      },
      { h: 'Long days on your feet' },
      {
        p: `A show day can run from early setup through an evening reception. Fatigue makes blinking lazier and less complete, so eyes often feel worst in the late afternoon. Plan breaks the way you’d plan meetings:`,
      },
      {
        list: [
          `Schedule a 10-minute break off the floor in the morning and afternoon, somewhere quieter and dimmer.`,
          `Step outside at lunch for daylight and a change of air.`,
          `Close your eyes for a minute during a break, and blink slowly a few times when you open them.`,
          `Sit through at least one session in a meeting room rather than walking the floor from open to close.`,
        ],
      },
      { h: 'Hotel rooms after the show' },
      {
        p: `After a long day, a hotel room’s heater or AC often runs all night, and the unit may sit right next to the bed. Turn the fan setting to low or auto, point any adjustable vent away from the pillow, and set the temperature a little cooler in winter so the heat runs less. A small travel humidifier is another option if you stay for several nights. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more.`,
      },
      { h: 'Traveling to the show' },
      {
        p: `Getting there can be part of the problem: a flight with dry cabin air, a long drive with the vents on, or an early start after short sleep. If you’re flying, a {size} bottle fits easily within TSA’s 3.4-ounce (100-milliliter) limit for liquids in carry-on bags, according to TSA’s liquids rule. [Traveling with eye drops](/guides/traveling-with-eye-drops) covers packing.`,
      },
      { h: 'Keeping drops handy on the show floor' },
      {
        list: [
          `Keep the bottle in your bag or a pocket, not in a booth cabinet under hot lights or in a car in a parking garage. The label’s storage line reads: {storage}.`,
          `Use drops on breaks, away from the booth, with clean hands; restrooms are easier than the aisle.`,
          `Follow the label: {tip}.`,
          `Give your vision a minute to clear before your next conversation or demo.`,
          `Don’t share your bottle with coworkers, even on a long show day.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The directions: {directions}. On a show day, many people put one in before leaving the hotel, one at lunch, and one in the late afternoon before an evening event. Read the caution first: {warnings}.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses or for use with other drops. If you wear lenses on long show days, ask your eye doctor or pharmacist what makes sense. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering before the show' },
      {
        p: `Order before you leave rather than shipping to the venue. We don’t promise a delivery date, and a package sent to a convention center or a hotel might not reach you in time. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You can [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Tired eyes after a long show are common, but they should improve after a night’s rest at home. If they don’t, or you notice pain or blurry vision, see an eye doctor. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry at conventions?',
        a: `Convention centers move a lot of heated or cooled air, and the show floor is full of bright lights and screens that make you blink less. Long days and short nights make it worse.`,
      },
      {
        q: 'How do booth staff keep their eyes from getting tired?',
        a: `Angle spotlights away from where staff stand, turn screens down, rotate positions, and take scheduled breaks off the floor. Looking at something distant between conversations helps too.`,
      },
      {
        q: 'Can I ship eye drops to a convention center?',
        a: `It’s safer to order before you leave. No delivery date is promised, and a package sent to a venue or hotel might not reach you in time, so bring a bottle with you.`,
      },
      {
        q: 'Should I bring eye drops to a trade show?',
        a: `If your eyes tend to feel dry, yes. A small bottle fits in a bag or pocket. Use it on breaks with clean hands, and keep it away from hot booth lights and parked cars.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-data-center-technicians',
    title: 'Dry eyes for data center technicians',
    description:
      'Cold aisles, hot exhaust and constant airflow in a data hall can dry your eyes fast. Habits for data center technicians on the floor and at the console.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Data center technicians often get dry eyes because the job happens in constant, conditioned airflow: cold air pushed up through floor tiles or down from overhead, hot exhaust behind the racks, and fans running nonstop. Add hours of reading tiny labels and screens, and blinking drops off. Keep your face out of direct airflow when you can, wear safety glasses where required, take breaks off the floor, and use drops on breaks.`,
      },
      { h: 'Why a data hall dries your eyes' },
      {
        p: `A data hall is built to move air past equipment. That air is conditioned, often cooled well below a comfortable office temperature, and it rarely stops moving. Moving air speeds evaporation from the eye, the same way wind does outdoors. The oil layer of the tear film slows that loss, but it needs regular blinks to stay spread across the eye, and the detailed work in a data center tends to cut blinking.`,
      },
      { h: 'Cold aisles and perforated tiles' },
      {
        p: `In many layouts, cold air comes up through perforated floor tiles in front of the racks. When you kneel to work on a low server, swap a drive near the bottom of a rack, or read a label at floor level, your face can end up right over a tile blowing upward. Overhead supply designs can push air down on you instead.`,
      },
      {
        list: [
          `Before kneeling, check where the nearest perforated tile is and position yourself to the side of it.`,
          `Wear safety glasses or goggles if your site requires them. Beyond protection, they block direct airflow.`,
          `Work in short stints at floor level, then stand and blink a few times.`,
          `Bring a small portable light so you’re not squinting at labels in a dim aisle.`,
        ],
      },
      { h: 'Hot aisles and exhaust' },
      {
        p: `Behind the racks, the hot aisle collects exhaust from server fans. It’s warm, it’s noisy, and the air is moving fast. Running cables or tracing connections back there means close, careful work in a warm draft. Take breaks out of the hot aisle, avoid lingering face-first in front of a fan outlet, and blink deliberately before you move on to the next task.`,
      },
      { h: 'Tiny labels, blinking LEDs and crash carts' },
      {
        p: `A lot of the work is visual: matching serial numbers, reading port labels, checking status LEDs and working on a crash cart monitor or laptop. All of that is close focus, often in uneven light, and people blink less when they concentrate. A few habits help:`,
      },
      {
        list: [
          `Use a scanner or photo of a label rather than reading long serials by eye when you can.`,
          `Raise font size on crash cart consoles and laptops.`,
          `After each ticket, look down the aisle for a few seconds and blink slowly.`,
          `If you wear glasses, keep your prescription current; straining to read labels adds to eye fatigue.`,
        ],
      },
      { h: 'Console work, tickets and night shifts' },
      {
        p: `Time off the floor often means time at a monitor: tickets, monitoring dashboards, change records and documentation. Screens reduce blinking, and an operations room can be heavily air-conditioned too. Keep monitors at arm’s length with the top at or a little below eye level, and look away every 20 minutes or so. If your site runs around the clock, night shifts add fatigue, which makes blinks less complete. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers shift routines, and [eye drops for computer users](/guides/eye-drops-for-computer-users) covers desk setup.`,
      },
      { h: 'Using drops at work' },
      {
        p: `Check whether your site allows liquids on the floor. If it doesn’t, keep your bottle in your locker or bag in a break area and use it on breaks. Wash your hands first, especially after handling cables, racks and packaging. Then:`,
      },
      {
        list: [
          `Follow the label: {tip}.`,
          `Tilt your head back, pull down the lower lid, and put in one drop.`,
          `Close your eyes for a moment, and wait for any blurring to clear before you go back to reading labels or climbing a ladder.`,
          `Keep the bottle out of hot vehicles and away from equipment exhaust. The label says: {storage}.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The directions: {directions}. On a 12-hour shift, that might mean one at the start, one at a mid-shift break, and one near the end. Read the caution before first use: {warnings}.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses or for use alongside other eye drops. If either applies, ask your eye doctor or pharmacist. Full details are on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Talking to your site about airflow' },
      {
        p: `You probably can’t change how a data hall is cooled, and you shouldn’t block tiles or redirect airflow on your own. You can raise comfort issues with your supervisor: where safety glasses or goggles are available, whether workstations sit under a strong supply vent, and whether break rooms have calmer air. Those small changes can matter on long shifts.`,
      },
      { h: 'Ordering and when to see a doctor' },
      {
        p: `Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You can [order here](/#buy). If your eyes stay irritated after a shift, or you notice pain or vision changes, see an eye doctor. Something blown into the eye from a dusty box or ceiling tile also needs attention. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a data center?',
        a: `Data halls move a lot of conditioned air, from cold air rising through floor tiles to hot exhaust behind racks. That airflow speeds evaporation from the eye, and close work on labels and screens lowers blinking.`,
      },
      {
        q: 'Can data center technicians use eye drops on the floor?',
        a: `Check your site’s rules first, since a data hall may not allow liquids on the floor. If yours doesn’t, keep the bottle in your locker or bag and use it on breaks with clean hands.`,
      },
      {
        q: 'Do safety glasses help with dry eyes in a cold aisle?',
        a: `They can block some direct airflow from floor tiles and fans. Wear whatever eye protection your site requires, and position yourself to the side of perforated tiles when you kneel.`,
      },
      {
        q: 'How can I reduce eye strain on data center night shifts?',
        a: `Take breaks off the floor, look into the distance after close work, raise font sizes on consoles, and keep monitors at arm’s length. Fatigue makes blinking less complete, so rest matters too.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-software-developers',
    title: 'Dry eyes for software developers',
    description:
      'Deep focus on code cuts blinking, and debugging marathons, extra monitors and on-call nights add up. Eye habits that fit a developer’s day.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Software developers get dry eyes mostly from focus: reading and writing code holds your gaze steady for long stretches, and people blink far less while concentrating on a screen. Multiple monitors, late debugging sessions, on-call pages and dry office air add to it. Build breaks into natural pauses like builds and test runs, set up monitors to reduce staring, and use a lubricating drop as its label directs.`,
      },
      { h: 'Dry eyes as a software engineer: why it happens' },
      {
        p: `Coding is reading at close range, with high stakes on every character. When you’re tracing a bug or holding a data structure in your head, your eyes lock onto the screen and blinking slows. Each blink spreads a fresh tear layer across the eye, and the outer oil layer of the tear film slows evaporation between blinks. Fewer blinks means the surface dries out more between them.`,
      },
      { h: 'Use builds, tests and deploys as eye breaks' },
      {
        p: `The usual advice is to look away every 20 minutes. Developers already have built-in pauses that are easier to remember than a timer:`,
      },
      {
        list: [
          `While a build compiles or tests run, look out a window or across the room instead of watching the progress bar.`,
          `After each commit, close your eyes for a few seconds and blink slowly a few times.`,
          `While waiting for a deploy or CI pipeline, stand up and walk to refill coffee.`,
          `When you’re stuck on a bug, step away from the screen to think. The break helps your eyes and often your debugging too.`,
          `End pair-programming sessions with a short break before the next task.`,
        ],
      },
      { h: 'Monitor setup for long coding sessions' },
      {
        list: [
          `Put your main monitor at arm’s length, with the top at or slightly below eye level so you look a little downward.`,
          `With two or three monitors, put the one you use most directly in front; constant head turning to a side screen adds strain.`,
          `Increase the editor and terminal font size until you can read code comfortably without leaning in.`,
          `Choose a theme with contrast that’s comfortable in your room’s light, and match screen brightness to the room.`,
          `Keep a bright window behind you or to the side, not behind your monitor.`,
        ],
      },
      { h: 'Air in offices and home setups' },
      {
        p: `Open-plan offices often have strong ceiling vents, and home offices tend to have a fan or space heater aimed right at the desk. Both move dry air across your face. Point fans and heaters at your legs, move the desk out of a vent’s path if you can, and consider a small humidifier near your workspace in winter. If you feel warm air from a laptop fan on your face, turn the laptop slightly.`,
      },
      { h: 'Code reviews, standups and video calls' },
      {
        p: `A developer’s day isn’t only code. Long code reviews mean reading diffs closely for an hour at a time. Standups, planning and pair sessions often happen on video, which brings its own staring at faces and shared screens. Turn off self-view, take calls audio-only when screens aren’t shared, and enlarge shared code rather than squinting at it. [Dry eyes from video calls](/guides/dry-eyes-from-video-calls) goes deeper on meetings.`,
      },
      { h: 'On-call nights and late debugging' },
      {
        p: `A page at 2 a.m. means jumping from sleep to a bright laptop screen in a dark room, often for an hour or more of intense focus. Turn on a lamp before opening the laptop, lower screen brightness, and take a short break once the incident is under control. Several on-call nights in a row add fatigue, which makes blinks less complete. Hackathons and release crunches do the same. If you’re short on sleep, your eyes will likely feel it.`,
      },
      { h: 'Using a lubricating drop at your desk' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. The directions say: {directions}. A developer’s day might fit them at the start of work, after lunch, and before a long afternoon block of focused coding. Before first use, read the caution: {warnings}.`,
      },
      {
        list: [
          `Wash your hands first; keyboards and mice collect a lot of grime.`,
          `Follow the label: {tip}.`,
          `Give your vision a moment to clear before reading code again.`,
          `Keep the bottle in a drawer, not on a sunny windowsill or next to a hot laptop. The label says: {storage}.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses or for using another eye drop at the same time. If either applies, ask your eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'How this differs from general computer use' },
      {
        p: `Most screen-heavy jobs share the basics: breaks, distance and air. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers those for any desk worker. What’s specific to developers is the depth of focus, multiple monitors, on-call hours, and natural pauses like builds and test runs that make breaks easy to attach to your existing workflow. If you’re shopping for a developer instead, see [Christmas gifts for a software developer](/guides/christmas-gifts-for-a-software-developer).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry, sore or tired despite these changes, or you get headaches or blurry vision during coding, book an eye exam. A glasses prescription for computer distance can help some people; that’s a question for your eye doctor. The label says: {stopUse} When you’re ready, you can [order Quell](/#buy) as a guest.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I code?',
        a: `Deep focus on code lowers how often you blink, and many developers work in dry office air or near fans and heaters. Breaks during builds and tests, a good monitor setup and calmer air all help.`,
      },
      {
        q: 'Do software engineers get dry eyes?',
        a: `Many people who spend long hours on screens notice dry, tired eyes, and developers often focus intently for long stretches, which lowers blinking. Persistent symptoms should be checked by an eye doctor.`,
      },
      {
        q: 'How should developers set up monitors to avoid eye strain?',
        a: `Place the main monitor at arm’s length with the top at or slightly below eye level, put the screen you use most directly in front, increase font sizes, and match brightness to the room.`,
      },
      {
        q: 'Can I use eye drops while working at my computer?',
        a: `Yes, follow the label directions, wash your hands first, and wait a moment for your vision to clear before reading code again. Quell’s label directs one drop three times a day in each eye.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-airport-security-screeners',
    title: 'Dry eyes for airport security screeners',
    description:
      'Watching X-ray images, terminal air and long checkpoint shifts can leave screeners’ eyes dry and tired. Habits and break routines that help at work.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Airport security screeners often get dry eyes because the job combines intense, steady focus on X-ray images and monitors with dry, climate-controlled terminal air, bright checkpoint lighting and long shifts on your feet. Blinking slows during that kind of concentration. Use rotations and breaks to rest your eyes, keep vents and fans off your face where you can, and use a lubricating drop on breaks as its label directs.`,
      },
      { h: 'Why watching X-ray monitors dries your eyes' },
      {
        p: `Reading an X-ray image of a bag is detailed visual work: scanning layered shapes for anything that needs a closer look, with a line of travelers waiting. People blink far less when they concentrate on a screen, and blinking is what spreads tears over the eye and refreshes the oil layer that slows evaporation. After a stretch at the monitor, the eye surface has had long intervals to dry between blinks. Repeat that across a shift, and eyes feel gritty or tired by the end.`,
      },
      { h: 'Terminal air and checkpoint lighting' },
      {
        p: `Airport terminals are large buildings with powerful heating and cooling, and the air in them is often dry. Checkpoints can sit under strong ceiling vents or near entrance doors that open constantly, bringing in drafts of hot or cold outdoor air. Bright overhead lighting at the checkpoint and the glow of monitors add glare. You can’t change the building, but you can:`,
      },
      {
        list: [
          `Mention a vent blowing directly onto a monitor station to your supervisor.`,
          `Adjust monitor brightness and position if your station allows it.`,
          `Stand slightly out of a door draft at the entrance when you can.`,
          `Use a break to step somewhere quieter, with calmer air.`,
        ],
      },
      { h: 'Using rotations as eye breaks' },
      {
        p: `If your checkpoint rotates staff between positions, such as the X-ray monitor, bag search, the walk-through or body scanner, and the document check, each change of position is a chance to rest your eyes from the monitor:`,
      },
      {
        list: [
          `When you rotate off the X-ray station, blink slowly a few times and look at something far away, down the concourse.`,
          `At a position that doesn’t involve a screen, let your gaze move naturally rather than fixing on one point.`,
          `On breaks, close your eyes for a minute before reaching for your phone.`,
          `Skip extra screen time on breaks when you can; your eyes have done enough of it.`,
        ],
      },
      { h: 'Early starts and long shifts' },
      {
        p: `Airport schedules can mean shifts that start before dawn, run late into the evening, or change from week to week. Short sleep makes blinking less complete and eyes feel worse. Protect sleep on days off where you can, and keep your eyes’ routine consistent from shift to shift. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has ideas if your hours run late.`,
      },
      { h: 'Using drops on a break' },
      {
        p: `Drops belong on breaks, not at the monitor. Wash your hands first, especially after handling bags, bins and gloves. Then:`,
      },
      {
        list: [
          `Follow the label: {tip}.`,
          `Tilt your head back, pull down the lower lid and let one drop fall in.`,
          `Close your eyes gently for a moment.`,
          `Wait for any blurring to clear before going back to an X-ray screen.`,
          `Keep the bottle in a locker or bag, not in a hot car in employee parking. The label says: {storage}.`,
        ],
      },
      { h: 'Your own bottle and the liquids rule' },
      {
        p: `Screeners know the rule better than anyone, but for your own travel: TSA’s liquids rule allows liquids in carry-on bags in containers of 3.4 ounces (100 milliliters) or less, and TSA’s liquids page lists medications as an exemption. A Quell bottle holds {size}, well under the limit. Bringing a bottle to work follows your workplace’s own policy, so check with your supervisor if you’re unsure. [Can eye drops go through airport X-ray?](/guides/can-eye-drops-go-through-airport-x-ray) covers questions travelers ask.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives its Uses as: {uses}. The directions are: {directions}. On a typical shift, that might be before you clock in, at your main break, and after you clock out. Read the caution before first use: {warnings}.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses or for combining with other eye drops. If you wear lenses for long shifts, ask your eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering and when to see a doctor' },
      {
        p: `Guest checkout is the only option, shipping is {shipping}, and {freeBottles} or more bottles ship free. You can [order here](/#buy). If dryness keeps coming back, or you have pain, blurry vision that doesn’t clear, or trouble reading monitor images, see an eye doctor; your vision on the job matters. The label says: {stopUse} Our [security guards guide](/guides/dry-eyes-for-security-guards) covers similar monitor work.`,
      },
    ],
    faq: [
      {
        q: 'Why do TSA officers get dry eyes?',
        a: `Watching X-ray monitors takes intense focus, which lowers blinking, and terminals are full of dry, climate-controlled air and bright lights. Long and early shifts make it worse.`,
      },
      {
        q: 'How can airport screeners rest their eyes during a shift?',
        a: `Use rotations away from the X-ray monitor to blink slowly and look into the distance, close your eyes for a minute on breaks, and avoid extra screen time when you can.`,
      },
      {
        q: 'Can I use eye drops at the X-ray station?',
        a: `It’s better on a break. Lubricating drops can blur vision briefly, so wait until your vision clears before returning to a monitor. Check your workplace’s policy about bringing a bottle to work.`,
      },
      {
        q: 'Do eye drops count toward the TSA liquids limit?',
        a: `TSA’s liquids rule limits carry-on liquids to containers of 3.4 ounces (100 milliliters) or less, and its liquids page lists medications as an exemption. A Quell bottle holds well under that limit.`,
      },
    ],
  },
]
