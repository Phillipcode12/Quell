import type { Guide } from '@/lib/guide-types'
export const DAILY_20261113_C: Guide[] = [
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-sumter-sc:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00388440.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00388440.csv
   *   (SUMTER, SC cooperative station, elev 53.9 m: annual precip 48.83 in; Jul 5.75,
   *   Jun 5.05, Aug 4.92, Nov 2.94; JJA 15.72 in; Jul high 90.2 F, Jan high 55.1,
   *   Jan low 32.8; 57.8 days at or above 90 F; 56.1 nights at or below 32 F;
   *   76.9 days with 0.10 in or more; snow 0.3 in)
   * - https://www.shaw.af.mil/About-Us/Fact-Sheets/Display/Article/663885/shaw-air-force-base/
   *   (Shaw AFB, home of the 20th Fighter Wing, flies F-16s)
   * Shaw AFB station USW00013849 has no 1991-2020 normals file (404). No humidity
   * row for Sumter in NOAA's relhum table, so no humidity figure is used.
   */
  {
    slug: 'dry-eye-relief-sumter-sc',
    title: 'Dry eye relief in Sumter, South Carolina',
    description:
      'Muggy Sumter summers, cold air-conditioned rooms and long shifts at Shaw: why eyes still dry out here, NOAA’s local numbers, and what helps.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `In Sumter, dry eyes rarely come from the outdoor air, which NOAA’s records show is warm and wet much of the year. They come from what people do to escape it: hours in air-conditioned rooms and cars, fans, screens and long shifts. Relief starts with moving vents away from your face, blinking fully at screens and using a lubricating drop exactly as its label says. Finding the cause of lasting dryness is an eye doctor’s job.`,
      },
      { h: 'Sumter’s weather by NOAA’s numbers' },
      {
        p: `NOAA keeps a long-running cooperative weather station in Sumter itself, and its 1991 to 2020 climate normals sketch a hot, rainy lowland town with short, mild winters:`,
      },
      {
        list: [
          `Normal yearly precipitation is 48.83 inches, spread across about 77 days that bring a tenth of an inch or more.`,
          `July is the wettest month at 5.75 inches, and June through August together average 15.72 inches.`,
          `November is the driest month on the station’s record, at 2.94 inches.`,
          `The normal July high is 90.2°F, and the town sees about 58 days a year at 90°F or hotter.`,
          `January’s normal high is 55.1°F with a normal low of 32.8°F, and about 56 nights a year drop to freezing or below.`,
          `Snow is close to absent: the normal yearly total is three-tenths of an inch.`,
        ],
      },
      {
        p: `Those numbers matter for your eyes in a roundabout way. A summer this hot and sticky means almost everyone in Sumter spends the warm months sealed inside cooled air, and the short winter means a few weeks of heat pumps and furnaces running hard on frosty mornings.`,
      },
      { h: 'Why eyes feel dry in a humid town' },
      {
        p: `It surprises people that their eyes can feel gritty in a place where stepping outside in July feels like walking into a damp towel. The explanation is indoors. An air conditioner cools air by pulling moisture out of it, and the air then blows across your face from a ceiling register or a dashboard vent. Moving, dried air speeds evaporation from the tear film, the thin layer of oil, water and mucus that keeps the eye’s surface smooth.`,
      },
      {
        p: `In a Sumter summer, a typical day can run from a cold bedroom to a cold car to a cold office and back again. Each stop is its own small dry zone. You don’t need to give up air conditioning to feel better, just change where it lands:`,
      },
      {
        list: [
          `Aim car vents at your chest or the footwell rather than your eyes, especially on the drive along US 378 or Broad Street.`,
          `Point a desk fan at your body, not your face, and set a ceiling fan to a lower speed at night.`,
          `Keep the thermostat a little higher if you can; colder settings mean the system runs longer.`,
          `Step outside for a few minutes at lunch. The air out there is rarely the problem in summer.`,
        ],
      },
      { h: 'Long shifts at Shaw Air Force Base and beyond' },
      {
        p: `Shaw Air Force Base, just outside the city, is home to the 20th Fighter Wing and its F-16s, according to the base’s official fact sheet, and it shapes the working day for a large share of the area. Flight line crews work in sun, heat and the wind of a wide-open airfield. Office and operations staff work long hours at screens in climate-controlled buildings. Both put eyes under strain in different ways.`,
      },
      {
        p: `Outdoors, wraparound sunglasses or the eye protection your job already requires block wind and grit. Indoors, the screen is the bigger factor: people blink less when they focus on a monitor, and fewer blinks mean the tear film is refreshed less often. A short break every so often to look across the room and blink slowly gives it a chance to recover. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the mechanics.`,
      },
      {
        p: `Hospital nurses, plant workers on rotating schedules and teachers in older school buildings describe the same pattern: eyes that feel fine in the morning and scratchy by the end of a long day inside. It usually tracks hours spent in one cooled, still room more than anything about Sumter itself.`,
      },
      { h: 'Winter mornings and heated air' },
      {
        p: `With roughly 56 freezing nights a year in NOAA’s Sumter normals, December through February is when the heat comes on. Heat pumps and gas furnaces warm the air without adding moisture to it, and warm, dry air pulls water from the eye’s surface faster. Many people notice it most when they wake up, especially if a vent is near the bed. Closing that vent, or turning the heat down a few degrees at night, is an easy first step. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on the colder months.`,
      },
      { h: 'Is there dry eye relief in Sumter without a prescription?' },
      {
        p: `Yes, for everyday dryness. Lubricating eye drops are sold over the counter, and Quell is one of them. Its Drug Facts label lists its uses as: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it’s preservative-free.`,
      },
      {
        p: `The directions read: {directions}. Wash your hands first, tilt your head back, pull the lower lid down gently and let one drop fall into the small pocket that forms. One more line from the label is worth remembering on a busy shift: {tip}. The [Drug Facts page](/drug-facts) shows the whole panel, including the warning that reads: {warnings}.`,
      },
      {
        p: `Expect a milky-brown liquid. {appearance} Store the bottle as the label says, {storage}, which in a South Carolina summer rules out a glove box or a truck dashboard.`,
      },
      { h: 'When dry eyes in Sumter need an eye doctor' },
      {
        p: `A drop is for relief of ordinary dryness, not for figuring out why your eyes hurt. Working out the cause of persistent symptoms and choosing a course of care belongs to an optometrist or ophthalmologist. The label is direct about when to stop: {stopUse} Sudden changes in vision or real pain deserve prompt attention rather than a wait-and-see week. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs, and the free [dry eye self-check](/self-check) can help you sort your symptoms before an appointment. It is not a diagnosis.`,
      },
      { h: 'Ordering Quell to Sumter' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any South Carolina address. Shipping is {shipping} on smaller orders and free once you order {freeBottles} or more bottles. Checkout works as a guest, buyers must be 18 or older, and there’s no subscription. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The site doesn’t promise a delivery date, so order before your current bottle runs out. See the [Sumter page](/eye-drops/sumter-sc) or the [South Carolina page](/eye-drops/state/south-carolina) for more.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Sumter when it’s so humid?',
        a: `Most of the dryness comes from indoor air. Air conditioners remove moisture as they cool, and vents and fans blow that dried air across your face for hours at a time.`,
      },
      {
        q: 'How hot does it get in Sumter, SC in summer?',
        a: `NOAA’s 1991 to 2020 normals for the Sumter station put the normal July high at 90.2°F, with about 58 days a year reaching 90°F or more.`,
      },
      {
        q: 'Can I buy dry eye drops in Sumter without a prescription?',
        a: `Yes. Lubricating eye drops like Quell are over-the-counter products. Quell ships to Sumter from Brentwood, Tennessee, and checkout works as a guest for buyers 18 and older.`,
      },
      {
        q: 'Who should I see about dry eyes that don’t go away in Sumter?',
        a: `An optometrist or ophthalmologist. Quell’s label says to stop use and ask a doctor for eye pain, vision changes, continued irritation, or symptoms that worsen or last 72 hours.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-dunwoody-ga:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013874.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013874.csv
   *   (ATLANTA HARTSFIELD INTL AP: annual precip 50.43 in; Oct 3.28 in, May 3.56;
   *   Jul high 90.1 F; Jan high 54.0, Jan low 35.6; 47.1 days at or above 90 F;
   *   35.7 nights at or below 32 F; snow 2.2 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ATLANTA, GA row: annual morning 81, afternoon 55; April afternoon 49, March 52,
   *   Oct 53; Aug morning 87)
   * The Sandy Springs guide used DeKalb-Peachtree (USW00053863); this one uses
   * Atlanta's official Hartsfield station on purpose, and says so.
   */
  {
    slug: 'dry-eye-relief-dunwoody-ga',
    title: 'Dry eye relief in Dunwoody, Georgia',
    description:
      'Perimeter Center desks, MARTA commutes and surprisingly dry April afternoons: what dries eyes in Dunwoody, Atlanta’s NOAA numbers, and what helps.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Dry eyes in Dunwoody mostly trace back to the workday, not the weather. Long hours at screens in Perimeter Center offices, chilled air from ceiling vents and car commutes on I-285 all thin the tear film. Spring afternoons are also drier than Atlanta’s muggy reputation suggests. Relief comes from redirecting airflow, taking real screen breaks and using a lubricating eye drop as labeled, while lasting symptoms go to an eye doctor.`,
      },
      { h: 'Atlanta’s official numbers, and what they mean in Dunwoody' },
      {
        p: `Dunwoody doesn’t have a NOAA normals station of its own. The city’s official record for the region is kept at Hartsfield-Jackson International Airport on the south side of Atlanta, and its 1991 to 2020 normals describe the climate all of the northern suburbs share:`,
      },
      {
        list: [
          `About 50.43 inches of precipitation in a normal year, with no truly dry month; October is the lowest at 3.28 inches.`,
          `A normal July high of 90.1°F and about 47 days a year at 90°F or warmer.`,
          `A normal January high of 54.0°F and low of 35.6°F, with about 36 nights at or below freezing.`,
          `Snow averaging 2.2 inches a year, which is why one icy morning can shut the metro down.`,
        ],
      },
      {
        p: `NOAA’s relative humidity table for Atlanta adds the part people don’t expect. Mornings are damp all year, averaging 81 percent. Afternoons average 55 percent, and in April the afternoon figure drops to 49 percent, the lowest of any month. March and October afternoons sit close behind at 52 and 53 percent. A sunny spring day in Dunwoody can feel pleasant and still be the driest air of the year.`,
      },
      { h: 'Perimeter Center and the office eye' },
      {
        p: `Perimeter Center, the office and shopping district around the mall near where I-285 meets GA-400, anchors Dunwoody’s southern edge, and a big share of residents either work there or drive past it daily. Corporate towers run their air handling on schedules set for the whole floor, not for the person sitting under the diffuser. Add two monitors and a calendar of video calls, and the result is the classic late-afternoon burn.`,
      },
      {
        p: `Screens are the bigger half of the problem. When you focus on a monitor you blink less often, and partial blinks don’t spread the tear film fully. Fixes that work at a Perimeter desk:`,
      },
      {
        list: [
          `Ask facilities whether the diffuser above your desk can be angled or partly closed; it’s a routine request.`,
          `Lower your monitor so you look slightly down; less of the eye is exposed to the air.`,
          `Every time a meeting ends, look out a window for twenty seconds and blink slowly a few times.`,
          `Keep a water bottle at your desk. Dry air dries more than your eyes, and refilling it gets you up.`,
        ],
      },
      {
        p: `[Eye drops for computer users](/guides/eye-drops-for-computer-users) goes further into desk setup and how the label’s directions fit a working day.`,
      },
      { h: 'Commuting: the Red Line, I-285 and the car vent' },
      {
        p: `MARTA’s Red Line has stops at Dunwoody and at Sandy Springs, which makes the train a real option for Perimeter workers. Train cars are cooled hard in summer, and standing under a ceiling vent for twenty minutes leaves eyes as dry as an office does. Choose a spot away from the vents when you can.`,
      },
      {
        p: `Drivers face the same air from a different direction. Dashboard vents aimed at the face are the most common single cause of commuter eye dryness. Turn them toward your hands or the windshield, use recirculation rather than fresh air on dusty days, and keep sunglasses in the car for the westbound drive home into a low sun.`,
      },
      { h: 'Pollen season and spring yard work' },
      {
        p: `Dunwoody’s tree canopy is part of its appeal, and in spring it leaves a yellow film on cars, decks and patio furniture. That dust, together with the low April afternoon humidity NOAA records, makes spring the season many residents notice gritty, irritated eyes outdoors. Wraparound sunglasses help on walks through Brook Run Park or along neighborhood streets. Rinse your face and wash your hands when you come in, before you touch your eyes or a dropper bottle.`,
      },
      { h: 'How to get dry eye relief in Dunwoody without a prescription' },
      {
        p: `Over-the-counter lubricating eye drops are made for everyday dryness. Quell’s Drug Facts label gives its purpose as: {uses}. It’s preservative-free and is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer that slows evaporation in conditioned office air.`,
      },
      {
        list: [
          `Read the full panel on the [Drug Facts page](/drug-facts) first, including the warning: {warnings}.`,
          `Follow the directions as printed: {directions}.`,
          `Wash your hands, tilt your head back, pull down the lower lid and let one drop fall into the pocket.`,
          `Keep the tip clean. The label puts it plainly: {tip}.`,
          `Don’t be thrown by the color. {appearance}`,
          `Leave the bottle in a desk drawer rather than a hot car. The label says: {storage}.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lens wearers or for using Quell alongside other eye drops, so ask your eye doctor or a pharmacist about either.`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `Figuring out why your eyes keep drying out, and deciding what to do about it, is an eye doctor’s job. A drop can ease ordinary dryness but can’t explain it. Quell’s label sets clear limits: {stopUse} Before an appointment, the [dry eye self-check](/self-check) can help you put your symptoms into words, and [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
      { h: 'Getting Quell delivered in Dunwoody' },
      {
        p: `Orders ship from Brentwood, Tennessee, to home or office addresses in Dunwoody. Shipping costs {shipping} below {freeBottles} bottles and nothing at {freeBottles} or more. Buyers must be 18 or older, checkout works without an account, and there’s no subscription to cancel. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. No delivery date is promised. The [Dunwoody page](/eye-drops/dunwoody-ga) and the [Georgia page](/eye-drops/state/georgia) have the local details.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working at Perimeter Center?',
        a: `Office air handling, ceiling diffusers and long stretches of screen work combine to thin the tear film. People blink less at a monitor, and moving conditioned air speeds evaporation from the eye’s surface.`,
      },
      {
        q: 'Is Atlanta air dry in the spring?',
        a: `In the afternoons, yes. NOAA’s humidity table for Atlanta shows April afternoons averaging 49 percent, the lowest of the year, while mornings stay near 80 percent.`,
      },
      {
        q: 'Where can I get eye drops delivered in Dunwoody, GA?',
        a: `Quell ships to Dunwoody homes and offices from Brentwood, Tennessee. Shipping is {shipping}, or free with {freeBottles} or more bottles, and the site doesn’t promise a delivery date.`,
      },
      {
        q: 'Should I see an eye doctor for dry eyes in Dunwoody?',
        a: `See one if dryness keeps coming back or you notice pain, vision changes or continued irritation. Quell’s label says to stop and ask a doctor if symptoms worsen or last 72 hours.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-tucson:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023160.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023160.csv
   *   (TUCSON INTL AP, elev 776.9 m = about 2,549 ft: annual precip 10.61 in; Apr 0.24,
   *   May 0.20, Jun 0.23, Jul 2.21, Aug 1.98, Sep 1.32; JJA 4.42 in; Jun high 101.2 F;
   *   157.8 days at or above 90 F; 67.9 days at or above 100 F; Dec low 40.5 F;
   *   11.7 nights at or below 32 F; 25.0 days with 0.10 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (TUCSON, AZ row: May afternoon 12, Jun 13, Apr 15; Jun morning 29;
   *   Aug morning 58, afternoon 32; annual 47 and 24)
   * - https://www.weather.gov/fgz/monsooninfo and https://www.weather.gov/psr/monsoonawarenessweek
   *   (NWS Southwest offices define the monsoon as June 15 through September 30)
   */
  {
    slug: 'dry-eyes-in-tucson',
    title: 'Dry eyes in Tucson, Arizona',
    description:
      'Afternoon humidity near 12 percent in May, then the monsoon: how Tucson’s desert seasons dry your eyes, with NOAA’s numbers and practical relief.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Tucson dries eyes because its air is extremely dry for much of the year. NOAA’s humidity records put May afternoons at just 12 percent, and the weeks before the monsoon add triple-digit heat and wind. Shade your eyes outdoors, keep cooler and car vents off your face, blink often at screens and use a lubricating drop as labeled. Ongoing dryness belongs with an eye doctor.`,
      },
      { h: 'Tucson’s climate by NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for Tucson International Airport, which the agency lists at roughly 2,549 feet above sea level, outline a desert with two very different kinds of summer:`,
      },
      {
        list: [
          `Normal yearly precipitation is 10.61 inches, and only about 25 days a year bring a tenth of an inch or more.`,
          `April, May and June together average less than seven-tenths of an inch; May is the driest month at 0.20 inches.`,
          `July and August are the wettest months, at 2.21 and 1.98 inches, and June through August supply more than four of the year’s inches.`,
          `June’s normal high is 101.2°F. The airport averages about 158 days a year at 90°F or above and about 68 at 100°F or above.`,
          `Winters are mild, with a December normal low of 40.5°F and about 12 freezing nights a year.`,
        ],
      },
      { h: 'Why are my eyes so dry in Tucson in May and June?' },
      {
        p: `NOAA’s relative humidity table for Tucson tells the story month by month. Afternoon humidity averages 15 percent in April, 12 percent in May and 13 percent in June. Even June mornings, when the air is coolest, average only 29 percent. Few places in the country offer air that thirsty for so many weeks in a row.`,
      },
      {
        p: `The tear film, the thin layer of oil, water and mucus over the eye, loses water to the air around it. The drier and hotter that air, and the faster it moves, the quicker the loss. That’s why late spring is when many Tucsonans notice burning or a sandy feeling, especially by afternoon. A few things help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses whenever you’re outside; they cut wind and dust as well as glare.`,
          `Do outdoor errands, dog walks and runs in the early morning, when it’s cooler and slightly less dry.`,
          `Keep a hat with a brim on the trail in Sabino Canyon or at Tucson Mountain Park; shade on the face matters.`,
          `Drink water steadily through the day, not just when you feel thirsty.`,
        ],
      },
      { h: 'The monsoon: humid air, dust and storms' },
      {
        p: `The National Weather Service’s Southwest offices define the monsoon as June 15 through September 30. In Tucson, the shift is easy to read in NOAA’s humidity table: August afternoons average 32 percent and mornings 58, more than double the late-spring figures. Many people find their eyes feel better once the moisture arrives.`,
      },
      {
        p: `The season brings its own irritants, though. Storm outflows push walls of dust across the valley, and gusty winds carry grit and debris. If you’re caught outside when one hits, turn away from the wind, close your eyes and get indoors or into a car. Don’t rub your eyes afterward. Blink, let natural tears do their work, and rinse your face once you’re inside.`,
      },
      { h: 'Evaporative coolers, AC and Tucson homes' },
      {
        p: `If your home has an evaporative cooler, it adds moisture to the air as it cools it. That can make indoor air easier on the eyes during the dry spring, though the strong airflow still needs to be kept off your face. Refrigerated air conditioning works the other way, cooling and drying the air at the same time, so a house or office on AC can feel as parched inside as the desert does outside.`,
      },
      {
        p: `Whichever system you have, the vents are the issue. Point registers away from beds and sofas, run ceiling fans at a lower speed at night, and keep the car’s air off your face on long drives down I-10. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how each of these speeds tear loss.`,
      },
      { h: 'Campus, base and screen time' },
      {
        p: `The University of Arizona puts thousands of students in front of laptops for hours at a stretch, and Davis-Monthan Air Force Base and the city’s offices and call centers keep many more at screens. Concentrating on a display cuts the blink rate, and that matters more in air this dry. Set a reminder to look across the room every so often and blink fully. Students will find more in [Dry eyes while studying for exams](/guides/dry-eyes-while-studying).`,
      },
      { h: 'Using a lubricating eye drop in the desert' },
      {
        p: `A lubricating drop is one tool among several. Quell’s Drug Facts label lists its uses as: {uses}. It’s preservative-free and is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions say: {directions}. More often isn’t on the label, so it isn’t advice we can give; if you feel you need more, that’s worth raising with an eye doctor.`,
      },
      {
        p: `Heat matters for storage in Tucson. The label says to store it: {storage}. With June highs averaging over 101°F, a car interior, a mailbox or a backpack left in the sun can go well past that. Keep the bottle indoors or in a bag that stays with you in the shade. The label also says: {doNotUse}. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'When to see an eye doctor in Tucson' },
      {
        p: `Desert dryness is common, but it isn’t the only reason eyes hurt. An optometrist or ophthalmologist is the person to find the cause and decide on care. Quell’s label says: {stopUse} Dust that seems stuck in the eye after a storm, or a sudden change in vision, is a reason to get seen promptly. The [dry eye self-check](/self-check) can help organize your symptoms before a visit.`,
      },
      { h: 'Can I get Quell delivered in Tucson?' },
      {
        p: `Yes. Quell ships from Brentwood, Tennessee, to any Arizona address. Shipping is {shipping} below {freeBottles} bottles and free from {freeBottles} up. Checkout is open to guests aged 18 or older, and unopened bottles can be refunded within {returnDays} days of delivery without being sent back. No delivery date is promised, and in summer it helps to have someone bring the package in promptly. The [Tucson page](/eye-drops/tucson-az) and the [Arizona page](/eye-drops/state/arizona) have more.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Tucson?',
        a: `By rainfall, May: NOAA’s 1991 to 2020 normals for Tucson International Airport average 0.20 inches. May also has the lowest average afternoon humidity in NOAA’s table, at 12 percent.`,
      },
      {
        q: 'When is monsoon season in Tucson?',
        a: `The National Weather Service’s Southwest offices define it as June 15 through September 30. July and August are the wettest months at Tucson’s airport.`,
      },
      {
        q: 'Do evaporative coolers help with dry eyes?',
        a: `They add moisture to indoor air while cooling it, which some people find easier on their eyes in dry weather. Keep the airflow off your face, since moving air still speeds evaporation from the eye.`,
      },
      {
        q: 'Can eye drops be left in a car in Tucson?',
        a: `Not in warm weather. Quell’s label storage line reads {storage}, and a parked car in a Tucson summer gets far hotter than that, so keep the bottle indoors or with you.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-santa-fe:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023049.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023049.csv
   *   (SANTA FE CO MUNI AP, elev 1933.7 m = about 6,344 ft: annual precip 10.71 in;
   *   Feb 0.35, Dec 0.50, Jan 0.45; Jul 1.82, Aug 1.96; JJA 4.33 in; Jan high 44.3 F,
   *   Dec low 19.5, Jan low 19.9; Jul high 88.5; 153.4 nights at or below 32 F;
   *   7.3 days with high at or below 32 F; 40.8 days at or above 90 F;
   *   28.3 days with 0.10 in or more; Dec and Jan about 30 freezing nights each)
   * No Santa Fe row in NOAA's relhum table, so no humidity figure is used. The
   * city's own elevation could not be confirmed from an official source today, so
   * only the airport station's NOAA elevation is given.
   */
  {
    slug: 'dry-eyes-in-santa-fe',
    title: 'Dry eyes in Santa Fe, New Mexico',
    description:
      'Thin, dry high-desert air, 150-plus freezing nights and wood smoke in winter: why eyes feel dry in Santa Fe, with NOAA’s numbers and ways to get relief.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Santa Fe dries eyes through a mix of altitude, very little moisture in the air and long heating seasons. NOAA’s airport station sits above 6,300 feet, gets under 11 inches of precipitation a year and records more than 150 freezing nights. Indoor heat, wood smoke, bright sun and wind all add to it. Sunglasses, cooler and moister indoor air, regular blinking and a lubricating drop used as labeled help, and an eye doctor handles anything that persists.`,
      },
      { h: 'Santa Fe’s climate in NOAA’s records' },
      {
        p: `NOAA’s 1991 to 2020 climate normals come from Santa Fe Regional Airport, southwest of downtown, which the agency lists at about 6,344 feet. The figures describe a high, sunny place with cold nights almost half the year:`,
      },
      {
        list: [
          `Normal yearly precipitation is 10.71 inches, with only about 28 days a year bringing a tenth of an inch or more.`,
          `February is the driest month at 0.35 inches; December and January are close behind.`,
          `July and August bring the most rain, at 1.82 and 1.96 inches, from summer thunderstorms.`,
          `About 153 nights a year fall to freezing or below. December and January each average roughly 30.`,
          `January’s normal high is 44.3°F and December’s normal low is 19.5°F.`,
          `Summer is warm but rarely brutal: July’s normal high is 88.5°F, with about 41 days a year at 90°F or warmer.`,
        ],
      },
      { h: 'Does Santa Fe’s altitude make your eyes drier?' },
      {
        p: `Altitude works on the eyes indirectly. Air at Santa Fe’s height holds less moisture to begin with, and sunlight is strong, so the air around your face is dry and often warmed by the sun even on a cool day. Wind across the open mesas and up from the Rio Grande valley keeps it moving. Dry, moving air pulls water from the tear film, the thin oil, water and mucus layer that keeps your eyes comfortable, faster than still, damp air does.`,
      },
      {
        p: `Visitors arriving from humid places often notice this within a day or two: eyes that feel scratchy by evening, lips that crack, skin that tightens. Residents who’ve been here for years still feel it on windy spring afternoons. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) covers how those three forces stack up.`,
      },
      { h: 'Wood smoke, kiva fireplaces and heated rooms' },
      {
        p: `With so many freezing nights, heating runs for much of the year. Forced-air furnaces, radiant floors, wood stoves and the corner kiva fireplaces found in many adobe homes all warm the air without adding moisture to it. Warm, dry indoor air speeds evaporation from the eyes, and it’s the reason many people notice dryness most in the morning.`,
      },
      {
        p: `Smoke adds irritation on top. A wood fire on a still winter evening can leave a haze inside the room and over the neighborhood. If your eyes sting by the fire, sit farther back and keep the room ventilated. Our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) has more practical steps. Small changes inside the house help too:`,
      },
      {
        list: [
          `Keep the thermostat a few degrees lower while you sleep and close any vent aimed at the bed.`,
          `Run a humidifier in the bedroom, cleaned as its maker directs.`,
          `Set reading chairs away from the fireplace and out of the path of warm air.`,
          `Take short breaks outdoors on calm days; cold, still air bothers eyes less than hot, blowing air.`,
        ],
      },
      { h: 'Winter sun, snow and the ski basin' },
      {
        p: `Santa Fe’s winter days are often clear, and sunlight bounces hard off snow. Squinting into glare all afternoon is tiring, and wind on the slopes or on a ridge trail dries the eye’s surface quickly. Good sunglasses for town and goggles for skiing protect against both. Keep a bottle of eye drops in an inside pocket rather than a pack or a car, where it can freeze.`,
      },
      { h: 'Galleries, studios and screens' },
      {
        p: `Art and tourism shape Santa Fe’s working life. Gallery staff spend long days under bright display lighting, artists stare at fine detail for hours, and the state government offices around the capitol keep many more people at screens. Concentrated looking reduces how often you blink. A habit of looking up and blinking slowly every so often gives the tear film a chance to rebuild, whatever you’re focusing on.`,
      },
      { h: 'Using a lubricating eye drop in Santa Fe' },
      {
        p: `Quell is an over-the-counter lubricating drop. Its label lists its uses as: {uses}. It’s preservative-free and is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Read the panel before using it; the [Drug Facts page](/drug-facts) shows every section.`,
      },
      {
        list: [
          `Directions: {directions}.`,
          `Warning: {warnings}.`,
          `Do not use: {doNotUse}.`,
          `Storage: {storage}. In a Santa Fe winter that rules out an unheated car or garage.`,
          `Appearance: {appearance}`,
        ],
      },
      { h: 'When dry eyes in Santa Fe need a doctor' },
      {
        p: `High-desert dryness is common, but an eye doctor is the right person to find out whether something else is behind your symptoms and to decide what to do about it. The label is clear about when to stop: {stopUse} Smoke exposure that leaves your eyes hurting long after you’ve left the room also deserves a professional look. The free [dry eye self-check](/self-check) can help you describe what you’re feeling, and it is not a diagnosis.`,
      },
      { h: 'Can I order Quell to Santa Fe?' },
      {
        p: `Yes. Quell ships from Brentwood, Tennessee, to any New Mexico address. Shipping is {shipping} below {freeBottles} bottles and free from {freeBottles} on. Buyers must be at least 18, there’s no account to create and no subscription, and unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The site doesn’t promise a delivery date. In winter, bring the package inside soon after it arrives. More on the [Santa Fe page](/eye-drops/santa-fe-nm) and the [New Mexico page](/eye-drops/state/new-mexico).`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Santa Fe?',
        a: `Santa Fe’s air is high, sunny and dry, with under 11 inches of precipitation a year at the airport in NOAA’s normals. Long heating seasons and wood smoke dry and irritate eyes indoors as well.`,
      },
      {
        q: 'How cold does Santa Fe get at night?',
        a: `NOAA’s 1991 to 2020 normals for the Santa Fe airport put December’s normal low at 19.5°F, with about 153 nights a year at or below freezing.`,
      },
      {
        q: 'Can wood smoke make your eyes dry?',
        a: `Smoke irritates the eyes, and wood heat dries indoor air, which speeds evaporation from the tear film. Sitting back from the fire and keeping the room ventilated helps.`,
      },
      {
        q: 'Does Quell ship to Santa Fe, NM?',
        a: `Yes. Orders ship from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} or more bottles. No delivery date is promised, so order before your bottle runs out.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-chicago:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094846.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094846.csv
   *   (CHICAGO OHARE INTL AP, elev 200.6 m: annual precip 37.86 in; snow 38.4 in;
   *   Jan high 31.6 F, low 18.8; Jul high 84.5; 121.3 nights at or below 32 F;
   *   43.4 days with high at or below 32 F; 6.5 nights at or below 0 F;
   *   16.7 days at or above 90 F; Jan snow 11.3, Feb 10.7, Dec 7.6)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (CHICAGO, IL row: annual morning 80, afternoon 60; Apr and May afternoon 54;
   *   Dec afternoon 70, Jan 68)
   */
  {
    slug: 'dry-eyes-in-chicago',
    title: 'Dry eyes in Chicago',
    description:
      'Radiator heat, lake wind on the L platform and long office days: why Chicago eyes feel dry, what NOAA’s O’Hare records show, and how to find relief.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Chicago eyes dry out mostly indoors, in the long heating season. NOAA’s O’Hare records show about 121 freezing nights a year, so radiators and forced-air heat run for months, drying the air around you. Wind off the lake and across L platforms adds to it outside. Keep heat and fans off your face, blink often at screens, wear glasses in the wind and use a lubricating drop as labeled. Persistent symptoms need an eye doctor.`,
      },
      { h: 'Chicago weather by NOAA’s numbers' },
      {
        p: `O’Hare International Airport is Chicago’s official weather station, and NOAA’s 1991 to 2020 normals for it describe a city with a long, hard winter and a short, warm summer:`,
      },
      {
        list: [
          `January’s normal high is 31.6°F and its normal low is 18.8°F.`,
          `About 121 nights a year fall to freezing or below, and about 43 days never get above freezing at all.`,
          `Roughly six or seven nights a year drop to zero or colder.`,
          `Normal snowfall is 38.4 inches, most of it in December, January and February.`,
          `July’s normal high is 84.5°F, and only about 17 days a year reach 90°F.`,
          `Normal yearly precipitation is 37.86 inches.`,
        ],
      },
      { h: 'Is the air in Chicago dry in winter?' },
      {
        p: `Outdoors, not by the usual measure. NOAA’s humidity table for Chicago shows winter afternoons averaging 68 percent in January and 70 in December, higher than in spring, when April and May afternoons average 54 percent. But relative humidity depends on temperature. Bring 20-degree air inside and heat it to 70 degrees, and the same amount of moisture becomes a much lower relative humidity. That’s why a Chicago apartment in January can feel like a desert even when the weather report says the outside air is damp.`,
      },
      {
        p: `Older buildings with steam radiators often run hot, and residents crack windows to compensate, which brings in cold drafts on top of the heat. Newer high-rises use forced air that blows steadily from ceiling vents. Either way, warm, dry indoor air speeds evaporation from the tear film, the thin layer of oil, water and mucus over each eye. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains the effect in more detail.`,
      },
      { h: 'Lake wind and the L platform' },
      {
        p: `Wind is the other half of a Chicago winter. Waiting on an elevated L platform, walking across a bridge over the river or running the Lakefront Trail puts cold, moving air straight onto your eyes. Your eyes may water in the cold, which can seem odd if they also feel dry; reflex tearing in the wind is common and doesn’t replace a steady tear film. Some ways to cut the exposure:`,
      },
      {
        list: [
          `Wear glasses or wraparound sunglasses outside; even clear lenses block a lot of wind.`,
          `Wait inside the platform shelter, or on the side of it away from the wind, when you can.`,
          `Pull a hat brim or hood forward on the lakefront to shield your face from gusts.`,
          `Once you’re on the train, step away from the doors and the heater vents.`,
        ],
      },
      { h: 'Loop offices and screen time' },
      {
        p: `Downtown, the workday adds a screen to the dry air. People blink less often while reading a monitor, and each skipped blink leaves the eye’s surface exposed a little longer. In a sealed office tower with heat blowing from a ceiling diffuser, the combination wears on eyes by mid-afternoon. Lowering the monitor, angling the vent and taking a two-minute walk to the window every hour all help. [Dry eyes in a heated office in winter](/guides/dry-eyes-in-a-heated-office) has a fuller checklist.`,
      },
      { h: 'Summer: AC, fans and a short break' },
      {
        p: `Chicago’s warm months bring their own dryness. Window air conditioners and box fans pushing air across a bedroom all night leave many people waking with gritty eyes, and the summer street festivals mean long days in sun and wind. Point fans at your body rather than your face, and keep sunglasses handy for Wrigleyville afternoons and beach days alike.`,
      },
      { h: 'Using a lubricating eye drop in Chicago' },
      {
        p: `Quell is a preservative-free, over-the-counter lubricating eye drop. Its Drug Facts label lists its uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, the layer that slows evaporation in dry, heated rooms. The label directions read: {directions}.`,
      },
      {
        p: `Two other label lines matter in a Chicago winter. First, storage: {storage}. A bottle left in a car on a January night will get far colder than that, so keep it in an inner coat pocket or indoors. Second, {tip}. Wash your hands after a ride on the train before you use any drop. The full panel, including the warning that reads {warnings}, is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor in Chicago' },
      {
        p: `Dryness from heated air is common, but it isn’t the only reason eyes feel uncomfortable, and working out the cause belongs to an optometrist or ophthalmologist. Quell’s label says: {stopUse} Before an appointment, the [dry eye self-check](/self-check) can help you sort your symptoms, and [Questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) helps you make the most of the visit.`,
      },
      { h: 'Getting Quell delivered in Chicago' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any Illinois address, including apartments and offices. Shipping is {shipping} below {freeBottles} bottles and free from {freeBottles} up. Checkout is open to guests aged 18 or older, there’s no subscription, and unopened bottles can be refunded within {returnDays} days of delivery without being returned. The site doesn’t promise a delivery date. If your building has a package room, collect the box promptly in winter. More on the [Chicago page](/eye-drops/chicago-il) and the [Illinois page](/eye-drops/state/illinois).`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Chicago in the winter?',
        a: `Indoor heat is the main reason. Cold outdoor air holds little moisture, and once it’s heated inside, its relative humidity drops sharply, so heated apartments and offices pull water from the eyes faster.`,
      },
      {
        q: 'How cold does Chicago get in January?',
        a: `NOAA’s 1991 to 2020 normals for O’Hare put January’s normal high at 31.6°F and its normal low at 18.8°F, with about six or seven nights a year at zero or below.`,
      },
      {
        q: 'Why do my eyes water in the wind but feel dry indoors?',
        a: `Cold wind triggers reflex tearing, a quick flood that doesn’t stay on the eye. Indoors, dry heated air keeps pulling moisture from the tear film, so the eyes can feel dry soon after.`,
      },
      {
        q: 'Can I get eye drops delivered to my Chicago apartment?',
        a: `Yes. Quell ships to Chicago apartments and offices from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} or more bottles. Include your unit number at checkout.`,
      },
    ],
  },

  {
    slug: 'shipping-eye-drops-to-alaska-or-hawaii',
    title: 'Shipping eye drops to Alaska or Hawaii',
    description:
      'Yes, Quell ships to Alaska and Hawaii at the same price and shipping charge as the lower 48. What to expect, what isn’t promised, and how to plan ahead.',
    category: 'shipping',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Quell ships to Alaska and Hawaii. Checkout accepts any US address, and the charge is the same as for the lower 48: {shipping} for smaller orders, free with {freeBottles} or more bottles. There’s no remote-area surcharge. Orders leave from Brentwood, Tennessee, and the site doesn’t promise a delivery date, so order well before your current bottle runs low.`,
      },
      { h: 'Does Quell ship to Alaska and Hawaii?' },
      {
        p: `Yes. The shipping rules in the site’s code accept one country, the United States, and set one flat rate for every address in it. Checkout handles an Alaska or Hawaii address exactly as it handles one in Tennessee or Texas. The cart shows the shipping charge before you pay, and it will match what you see on the [home page](/#buy).`,
      },
      {
        p: `What can’t be shipped to is anywhere outside the United States. If you’re in Alaska or Hawaii, you’re inside that line.`,
      },
      { h: 'How much does shipping to Alaska or Hawaii cost?' },
      {
        list: [
          `Below {freeBottles} bottles: {shipping}, charged once per order no matter how many bottles are in it.`,
          `{freeBottles} bottles or more: free shipping.`,
          `No extra fee for distance, islands, rural routes or remote towns.`,
          `No promo codes or membership needed for the free threshold; it applies automatically in the cart.`,
        ],
      },
      {
        p: `Because the charge is flat, ordering a larger supply at once tends to make more sense from far away. An order of {freeBottles} bottles ships to Kodiak for exactly what it costs to ship to Kansas City: nothing. [How to get free shipping on Quell](/guides/how-to-get-free-shipping) walks through the cart math.`,
      },
      { h: 'How long does shipping to Alaska or Hawaii take?' },
      {
        p: `The site doesn’t publish a delivery window for any address, and it won’t guess one for Alaska or Hawaii. Packages to the farthest states have more distance to cover from Middle Tennessee, and the [terms](/terms) describe any estimate as an estimate, not a commitment. Here’s what you can count on:`,
      },
      {
        list: [
          `A confirmation email when your payment goes through, with your order number.`,
          `A second email when the package ships, with tracking when it’s available.`,
          `The [order status page](/orders), where your order number and checkout email show where things stand.`,
        ],
      },
      {
        p: `If you need eye drops by a particular date, for a trip or because you’re nearly out, the honest advice is to order early and not count on a specific arrival day.`,
      },
      { h: 'Planning your supply from far away' },
      {
        p: `Distance changes how you should think about reordering. A package headed to a small Alaska town or a neighbor island has more legs to its trip than one crossing a single state, and every extra leg is a chance for a wait. Running out in the meantime is the thing to avoid. Some practical habits:`,
      },
      {
        list: [
          `Reorder when you open your second-to-last bottle, not your last.`,
          `Order {freeBottles} or more at once if you use Quell regularly; it removes the shipping charge and the urgency.`,
          `Check the expiration date on each bottle when it arrives and use the oldest first.`,
          `Keep the confirmation email; your order number makes any question to us faster.`,
        ],
      },
      {
        p: `Quell sends one reorder reminder email after an order, timed to an estimate of when the bottles might run low. From Alaska or Hawaii, it’s wise not to wait for it. [How many bottles of eye drops should I order?](/guides/how-many-bottles-to-order) helps you work out a sensible quantity.`,
      },
      { h: 'Temperature on a long trip' },
      {
        p: `The label’s storage line reads: {storage}. Packages to Alaska in midwinter or to Hawaii in summer can pass through temperatures outside that range on the way, as any shipment can. Bring the box indoors as soon as you can after delivery, and don’t leave it in a mailbox, on a porch or in a vehicle.`,
      },
      {
        p: `When you open it, check the seal and the liquid. {appearance} The label also says: {doNotUse}. If the tamper seal is broken, the order is damaged or something is wrong, contact us and we’ll replace it. [Eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers this in more detail.`,
      },
      { h: 'Rural, village and island addresses' },
      {
        p: `Enter the address where packages actually reach you, exactly as you’d write it for any other delivery, with any unit, lot or apartment number on the second line. If you live off the road system in Alaska, or somewhere on an island where deliveries usually go to a different address than your home, use the one that reliably gets packages. Double-check the ZIP code before you pay, since a wrong digit is harder to fix the farther a package travels. [Getting the shipping address right](/guides/getting-the-address-right) has a short checklist.`,
      },
      { h: 'Refunds and problems from Alaska or Hawaii' },
      {
        p: `The policy doesn’t change with distance. {returns}. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t ship anything back, which matters when return postage from Juneau or Hilo would otherwise be part of the decision. Damaged, incorrect or broken-seal orders are replaced. Reach us through the [contact section](/about#contact) or call {phone}, {hours}. That’s Central time, so plan for the difference from Alaska or Hawaii.`,
      },
      { h: 'Ordering, step by step' },
      {
        list: [
          `Choose a quantity on the [home page](/#buy); {freeBottles} or more ships free.`,
          `Check out as a guest with your Alaska or Hawaii address. Buyers must be 18 or older.`,
          `Pay on the payment provider’s secure page.`,
          `Watch for the confirmation and shipping emails, and track the order at [/orders](/orders).`,
        ],
      },
      {
        p: `Both states have their own pages on the site: [Alaska](/eye-drops/state/alaska) and [Hawaii](/eye-drops/state/hawaii).`,
      },
    ],
    faq: [
      {
        q: 'Does Quell ship to Hawaii?',
        a: `Yes. Checkout accepts Hawaii addresses at the same price and shipping charge as anywhere else in the US: {shipping}, or free with {freeBottles} or more bottles.`,
      },
      {
        q: 'Is shipping more expensive to Alaska or Hawaii?',
        a: `No. Quell charges one flat shipping rate for every US address, with no surcharge for Alaska, Hawaii or remote areas, and orders of {freeBottles} or more bottles ship free.`,
      },
      {
        q: 'How long does it take for eye drops to ship to Hawaii?',
        a: `The site doesn’t promise a delivery date for any address. You’ll get an email when the order ships, and you can follow it on the order status page, so order well ahead of running out.`,
      },
      {
        q: 'Can I return eye drops from Alaska without mailing them back?',
        a: `Yes, if they’re unopened. Quell refunds unopened bottles within {returnDays} days of delivery without asking for them back, wherever you live in the US.`,
      },
    ],
  },

  {
    slug: 'is-this-eye-drop-order-email-real',
    title: 'Is this eye drop order email real?',
    description:
      'How to tell a genuine Quell order email from a fake: what we actually send, what we never ask for, and how to check an order without clicking a link.',
    category: 'ordering',
    addedOn: '2026-11-13',
    body: [
      {
        p: `A genuine Quell email is about an order you placed and gives an order number starting with Q- that you can check yourself. To be sure, don’t click anything: type quelldrop.com into your browser, open the order status page and enter the order number with your checkout email. Quell emails never ask for your card number, password or bank details. If anything looks off, call {phone} instead.`,
      },
      { h: 'What emails does Quell actually send?' },
      {
        p: `The site sends a short, specific set of emails, each tied to something you did. Knowing the list makes a fake easier to spot:`,
      },
      {
        list: [
          `Order confirmation, after payment goes through. Subject: your order number “is confirmed”. It lists the bottles, subtotal, shipping, total and shipping address, with a link to track the order.`,
          `Shipping notice, when the package leaves Brentwood, Tennessee. Subject: your order number “has shipped”. It may include a tracking number.`,
          `A reorder reminder, sent once, with the subject “Running low on Quell?”. It names the date you ordered and links to the home page.`,
          `A “cart is waiting” email, sent once, only if you started checkout and didn’t finish paying. It says nothing was charged.`,
          `Your self-check result, only if you asked for it to be emailed from the [self-check](/self-check).`,
          `A password reset link, only if you have an account and asked for one.`,
        ],
      },
      {
        p: `That’s the full set the store’s ordering system sends, and none of them carries a discount code. Quell doesn’t run promo codes, prizes or a subscription, so a message offering a coupon, a “membership renewal” or a subscription you need to cancel didn’t come from this store. [Is Quell a subscription?](/guides/is-quell-a-subscription) explains why there’s nothing to renew.`,
      },
      { h: 'What a real Quell email will never ask for' },
      {
        list: [
          `Your full card number, expiration date or security code.`,
          `Your bank account or routing number.`,
          `A password, a one-time code or a login sent back by reply.`,
          `Payment by gift card, wire transfer, payment app or cryptocurrency.`,
          `A fee to release a held package or to fix a “failed delivery”.`,
        ],
      },
      {
        p: `Payment only happens at checkout, on the payment provider’s secure page that the site hands you to. Nothing about an order is settled by replying to an email.`,
      },
      { h: 'How to check an order without clicking a link' },
      {
        p: `The safest habit with any order email, from any store, is to go to the site yourself rather than through the message:`,
      },
      {
        list: [
          `Open a new browser tab and type quelldrop.com yourself.`,
          `Go to the [order status page](/orders).`,
          `Enter the order number from the email, which looks like Q- followed by eight letters and numbers, and the email address you used at checkout.`,
          `If the order shows up and matches, the email was about a real order. If it doesn’t, you didn’t buy it here.`,
        ],
      },
      {
        p: `Real order numbers leave out letters and digits that are easy to confuse when read aloud, such as I, L, O, U, 0 and 1. An “order number” full of those, or in a completely different format, is a red flag.`,
      },
      { h: 'Signs an eye drop order email is fake' },
      {
        list: [
          `It’s about an order you don’t remember placing, especially one with a big total, and it urges you to call or click to cancel.`,
          `The sender’s display name says Quell, but the actual address isn’t on quelldrop.com.`,
          `Links point to an unfamiliar web address when you hover over them, or use a link shortener.`,
          `It threatens a deadline, an account lock or a charge unless you act now.`,
          `It asks for anything on the never-ask list above.`,
          `It includes an attachment you’re told to open to see your “invoice”.`,
        ],
      },
      {
        p: `Fake “your order is confirmed” emails are a common way to scare people into calling a number in the message. If you didn’t order from us, don’t call the number in the email. Look up our contact details yourself on the [About page](/about#contact).`,
      },
      { h: 'What about the “cart is waiting” email?' },
      {
        p: `That one has a link back to your cart, and it’s real, but it only goes to someone who entered their details at checkout and didn’t pay. It arrives once, gives the order number and says it’s the only email about it. If you get one and never started a Quell checkout, someone may have typed your address by mistake. You can ignore it; nothing was charged. If you want to finish your order, it’s still safer to type quelldrop.com yourself and add the bottles again.`,
      },
      { h: 'Is my eye drop order real if I didn’t get an email?' },
      {
        p: `Probably, if you paid. A missing confirmation is usually a typo in the email address or a spam folder. Search your inbox and spam for “Quell”, then check the [order status page](/orders) with your order number. [What if I mistype my email at checkout?](/guides/mistyped-email-at-checkout) covers what to do next.`,
      },
      { h: 'Who to contact if you’re unsure' },
      {
        p: `Call {company} at {phone}, {hours}, or use the contact details on the [About page](/about#contact). Have the order number ready if you have one. If you entered card details on a page you now suspect was fake, call your card issuer using the number on the back of your card; they’re the ones who can block it. For broader advice on judging a store before you buy, see [How to spot a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website).`,
      },
    ],
    faq: [
      {
        q: 'How do I know if an order confirmation email is real?',
        a: `Don’t click its links. Type quelldrop.com into your browser, open the order status page and enter the order number with your checkout email. If the order appears, the email was genuine.`,
      },
      {
        q: 'Does Quell ever ask for card details by email?',
        a: `No. Payment only happens at checkout on the payment provider’s secure page. No Quell email asks for a card number, security code, password or bank details.`,
      },
      {
        q: 'What does a Quell order number look like?',
        a: `It starts with Q- and is followed by eight letters and numbers. The format leaves out characters that are easy to mix up, like I, L, O, U, 0 and 1.`,
      },
      {
        q: 'I got an order email from Quell but didn’t order anything. What should I do?',
        a: `Don’t click links or call numbers in the message. Check the order number on quelldrop.com’s order status page, and if nothing shows up, contact us at {phone} using the number on our About page.`,
      },
    ],
  },

  {
    slug: 'gifts-for-a-coworker-who-works-on-screens',
    title: 'Gifts for a coworker who works on screens',
    description:
      'Practical office gift ideas for the coworker glued to a monitor: desk comfort, eye-friendly extras, a budget plan, and when eye drops make sense.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Good gifts for a coworker who works on screens make long desk days more comfortable: a monitor riser, a small desk plant, a quality water bottle, a warm desk lamp, a timer for breaks, or a lens cleaning kit. If they’ve mentioned dry or tired eyes, a lubricating eye drop like Quell can join the bundle. Keep it practical, impersonal and within the office gift limit.`,
      },
      { h: 'Why screen workers appreciate practical gifts' },
      {
        p: `Someone who spends the workday reading code, spreadsheets, charts or a support queue lives with the same small discomforts: a stiff neck, a sore lower back and eyes that feel scratchy by the late afternoon. People blink less often when they concentrate on a screen, and office air from ceiling vents speeds evaporation from the tear film. A gift that eases any of those gets used every day, which is more than most mugs can claim.`,
      },
      { h: 'Gift ideas for the coworker at a computer' },
      {
        list: [
          `A monitor riser or stand. Raising a laptop or lowering a tall monitor so the eyes look slightly down is a common ergonomic tweak.`,
          `A small, easy-care desk plant, such as a pothos or a snake plant, for something green to look at during breaks.`,
          `An insulated water bottle with a time scale on the side, a gentle nudge to get up and refill.`,
          `A desk lamp with a warm, adjustable light to cut glare from overhead fixtures.`,
          `A screen and lens cleaning kit with a microfiber cloth, especially for glasses wearers.`,
          `A small analog timer or hourglass as a reminder to look away from the screen.`,
          `Soft wrist rests for the keyboard and mouse.`,
          `A desk fan with an adjustable head, so the airflow can be pointed at the body instead of the face.`,
        ],
      },
      { h: 'Are eye drops a weird gift for a coworker?' },
      {
        p: `It depends on what you know. A coworker who keeps a bottle of drops on their desk, who rubs their eyes in every meeting, or who has said their eyes feel dry at work is likely to see it as thoughtful. For someone you barely know, a health product can feel personal in a way a lamp doesn’t. A good test: would they mention it to you first? If they have, it’s a fair gift. If not, stick with the desk items.`,
      },
      {
        p: `Framing helps. A “screen-day survival kit” with a water bottle, a microfiber cloth, a timer and a bottle of lubricating drops reads as a care package, not a comment on anyone’s health. [Are eye drops a good gift?](/guides/are-eye-drops-a-good-gift) looks at the question more broadly.`,
      },
      { h: 'If you include Quell: what to know' },
      {
        p: `Quell is an over-the-counter, preservative-free lubricating eye drop. Its Drug Facts label lists its uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. A bottle holds {size}.`,
      },
      {
        p: `Two things to mention when you hand it over, or to tuck into a card:`,
      },
      {
        list: [
          `The label warning reads: {warnings}. Someone with an egg or bird allergy should read the label before using it.`,
          `The liquid looks milky brown. {appearance}`,
        ],
      },
      {
        p: `Let them read the full label on the [Drug Facts page](/drug-facts) themselves. A gift giver shouldn’t offer advice about how to use it, whether it suits contact lenses or whether it works with other drops; the label doesn’t cover those, and their eye doctor or pharmacist is the one to ask.`,
      },
      { h: 'Office gift exchange rules and budgets' },
      {
        p: `Most office exchanges set a spending limit and a theme, or none at all. A few ways to fit Quell into common formats:`,
      },
      {
        list: [
          `Low-limit exchange: one bottle on its own, paired with a card that says what it’s for.`,
          `Bigger budget: one bottle plus a desk lamp or a water bottle as a small kit.`,
          `Team gift: buying {freeBottles} bottles at once ships free, which works if several people in the group have mentioned dry eyes.`,
          `Grab-bag or white elephant: skip eye drops here, since you won’t know who ends up with the gift.`,
        ],
      },
      {
        p: `Shipping is {shipping} below {freeBottles} bottles. There are no promo codes, so the price at checkout is the price. For a drawn-name exchange, [Eye drops as a Secret Santa gift](/guides/eye-drops-as-a-secret-santa-gift) covers that format specifically.`,
      },
      { h: 'Ordering a gift: age, address and timing' },
      {
        list: [
          `The buyer must be 18 or older. Checkout works as a guest.`,
          `Ship it to yourself and wrap it, or ship it to the office with the company name on the address line.`,
          `The site doesn’t promise a delivery date, so order well before the exchange.`,
        ],
      },
      {
        p: `[Shipping eye drops to your work address](/guides/shipping-eye-drops-to-your-work-address) explains how to address a package to an office mailroom.`,
      },
      { h: 'What if they don’t want it?' },
      {
        p: `That’s fine, and it’s easy to undo. {returns}. Refunds apply within {returnDays} days of delivery and only while the bottle is unopened, so tell your coworker it’s okay to hand it back to you sealed. A damaged, wrong or broken-seal order is replaced. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) covers the details.`,
      },
      { h: 'A card that goes with it' },
      {
        p: `Something short and specific lands well. “For the 4 p.m. squint” or “For the person who closes every ticket” keeps it light. Skip anything that suggests their eyes have a problem, and if they mention lasting discomfort later, point them toward an eye doctor rather than more gifts. The [dry eye self-check](/self-check) is a free, private way for them to think through their symptoms.`,
      },
    ],
    faq: [
      {
        q: 'What is a good gift for someone who works on a computer?',
        a: `Practical desk items get the most use: a monitor riser, a warm desk lamp, a water bottle, a lens cleaning kit or a break timer. A lubricating eye drop fits if they’ve mentioned dry eyes.`,
      },
      {
        q: 'Is it okay to give a coworker eye drops as a gift?',
        a: `It works when they’ve mentioned dry or tired eyes at work, and it can feel too personal otherwise. Present it as part of a screen-day kit, and keep the bottle sealed so it can be refunded if unwanted.`,
      },
      {
        q: 'Can I ship an office gift straight to my coworker’s work address?',
        a: `Yes. Put the company name on the address line at checkout. Quell ships from Brentwood, Tennessee, and doesn’t promise a delivery date, so order ahead of the exchange.`,
      },
      {
        q: 'Can an unopened gift bottle of eye drops be refunded?',
        a: `Yes. Quell refunds unopened bottles within {returnDays} days of delivery, without the bottle being sent back. Keep it sealed until you know it’s wanted.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-on-a-snowmobile',
    title: 'Dry eyes on a snowmobile',
    description:
      'Cold wind at speed, sun on snow and fogged goggles: why eyes dry out on a snowmobile, how to protect them, and how to carry drops so they don’t freeze.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Snowmobiling dries eyes because you’re pushing your face into cold wind at speed, and cold, moving air pulls moisture from the tear film fast. Glare off snow and a fogging visor make it worse. A full-face helmet with a sealed visor or snug goggles is the main defense. Carry eye drops in an inside pocket against your body, and only use them after you’ve stopped the sled.`,
      },
      { h: 'Why eyes dry out on a snowmobile' },
      {
        p: `Three things work on your eyes at once. The air is cold and holds little moisture. The speed of the sled turns still air into a strong headwind. And the sun reflecting off snow makes you squint, which changes how fully you blink. The tear film, a thin layer of oil, water and mucus, loses water to moving, dry air much faster than to calm air, so even a short ride with an open visor can leave eyes stinging and watering at the same time.`,
      },
      {
        p: `The National Weather Service’s wind chill formula gives a sense of the force involved. At an air temperature of 0°F, a 30 mph wind produces a wind chill of about 26 below zero; at 10°F and 40 mph, it’s about 15 below. Those numbers describe what exposed skin feels, but your eyes are just as exposed if nothing covers them.`,
      },
      { h: 'Helmets, visors and goggles' },
      {
        list: [
          `A full-face helmet with the visor closed keeps the wind off your eyes completely; ride with it down, not cracked open.`,
          `If you wear goggles with an open-face helmet, choose a pair that seals all the way around, with foam that sits flush on your face.`,
          `A heated or double-pane visor, or a breath box, reduces fogging, which is what tempts people to flip the visor up.`,
          `Carry a spare lens or a second pair of goggles. A fogged or iced lens is a reason to stop and swap, not to ride with no protection.`,
          `Tinted lenses help on bright days; a lighter or clear lens is better in flat light and toward dusk.`,
        ],
      },
      {
        p: `Gaps are where the trouble starts. A goggle strap that’s loose over a hat, or a helmet that sits too high, lets a jet of air in at the edge and across the eye.`,
      },
      { h: 'Sun on snow' },
      {
        p: `Fresh snow reflects much of the sunlight that hits it, so a bright trail day puts light into your eyes from below as well as above. Squinting for hours is tiring and makes eyes feel dry and sore by evening. Tinted goggle lenses or a tinted visor are the first line of defense. On a lunch stop with your helmet off, put on sunglasses rather than going bare-eyed in the glare. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers similar conditions on the slopes.`,
      },
      { h: 'Can I use eye drops while riding?' },
      {
        p: `No. Never take your hands off the controls or lift your visor to put in drops while the sled is moving. Pull fully off the trail to a safe spot, shut the engine off, and let your eyes settle for a minute before doing anything. Then:`,
      },
      {
        list: [
          `Take off your gloves and, if you can, clean your hands with a wipe.`,
          `Lift the visor or goggles, turn your back to the wind and tilt your head back.`,
          `Follow the label’s directions: {directions}.`,
          `Keep the tip away from gloves, snow and your face. The label says: {tip}.`,
          `Close your eyes for a moment, then lower your visor before you set off again.`,
        ],
      },
      { h: 'Keeping eye drops from freezing on the trail' },
      {
        p: `The label’s storage line reads: {storage}. A day on the trail is far colder than that, so where you carry the bottle matters. An inside chest pocket against a base or mid layer is the warmest spot you have, and much warmer than a tank bag, a tunnel bag or an outer jacket pocket. Leaving a bottle on the sled through a cold night or in an unheated trailer is a sure way to take it far below the label’s range.`,
      },
      {
        p: `The label doesn’t say what to do with a bottle that has frozen. Check it against the label: {doNotUse}. {appearance} If it looks different from usual or you’re unsure, don’t use it; ask a pharmacist or call {company} at {phone}, {hours}. [Can eye drops freeze in a coat pocket?](/guides/dry-eyes-from-cold-air) has more on cold-weather storage.`,
      },
      { h: 'After the ride: the cabin and the lodge' },
      {
        p: `Coming in from the cold often brings a second round of dryness. Cabins and lodges heated by wood stoves or forced air run warm and dry, and sitting near the fire with wind-chapped eyes can feel worse than the ride did. Sit back from the heat, drink water, and give your eyes a rest from screens for a while. If you use drops, the label’s directions still apply, counted across the whole day, including what you used on the trail.`,
      },
      { h: 'When to stop riding and see a doctor' },
      {
        p: `Snow, ice, branches and debris thrown up by other sleds can hit the eye. Something stuck in the eye, sharp pain or a sudden change in vision means stop riding and get medical help, not drops. Quell’s label is clear about when to stop: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
      { h: 'Packing for a snowmobile trip' },
      {
        list: [
          `A sealed bottle of lubricating eye drops in an inside pocket. Quell’s label lists its use as: {uses}.`,
          `Spare goggle lens or goggles, and an anti-fog cloth.`,
          `Sunglasses for stops and the drive in.`,
          `Hand wipes for clean hands before touching your eyes.`,
          `Water, because it’s easy to forget to drink when you’re cold.`,
        ],
      },
      {
        p: `If you’re ordering before a trip, Quell ships from Brentwood, Tennessee, without a promised delivery date, so leave time. Read the whole label first on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water and burn on a snowmobile?',
        a: `Cold wind at speed dries the eye’s surface quickly, and the eyes respond with reflex tearing. A sealed visor or snug goggles keep most of that wind off your eyes.`,
      },
      {
        q: 'Is a full face helmet better for dry eyes on a snowmobile?',
        a: `A full-face helmet with the visor closed keeps wind off your eyes, which is the main cause of dryness while riding. Anti-fog features help you keep the visor down instead of lifting it.`,
      },
      {
        q: 'Where should I keep eye drops when snowmobiling?',
        a: `In an inside chest pocket close to your body, the warmest spot available. Quell’s label says to store it {storage}, so avoid bags on the sled or an outer pocket.`,
      },
      {
        q: 'Can you put in eye drops on a snowmobile?',
        a: `Only after you’ve pulled off the trail and stopped the engine. Clean your hands, keep the bottle tip clear of gloves and snow, and follow the label’s directions.`,
      },
    ],
  },

  {
    slug: 'how-long-do-eye-drops-last-after-opening',
    title: 'How long do eye drops last after opening?',
    description:
      'What Quell’s label says, and doesn’t say, about using a bottle once it’s opened, plus the expiration date and signs that tell you to stop using it.',
    category: 'label',
    addedOn: '2026-11-13',
    body: [
      {
        p: `The answer for any eye drop comes from its own label. Quell’s Drug Facts label doesn’t set a number of days or weeks to discard the bottle after opening. It gives a storage range, an expiration date on the package, and a do-not-use rule if the liquid changes color. If you want a specific after-opening limit, ask your pharmacist or call the company rather than guessing.`,
      },
      { h: 'How long do eye drops last after opening, according to the label?' },
      {
        p: `Labels differ by product, which is why online answers vary so much. Some eye drop packages print a discard period after opening, and some don’t. The only reliable answer is the one on the package in your hand.`,
      },
      {
        p: `For Quell, the over-the-counter Drug Facts panel covers the bottle’s life in four places:`,
      },
      {
        list: [
          `Storage: {storage}.`,
          `Do not use: {doNotUse}.`,
          `When using: {tip}.`,
          `Other information: {milky}.`,
        ],
      },
      {
        p: `None of those lines sets a time limit after opening. That isn’t an invitation to keep a bottle forever; it means the label doesn’t give a figure, and nobody should invent one for it. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'What the expiration date tells you' },
      {
        p: `Every bottle and carton carries an expiration date. Past that date, don’t use it, opened or not. The date applies to the product as it was made and stored; it isn’t a promise that an opened bottle stays in the same condition until then, which is exactly why the questions below matter. [Where is the expiration date on eye drops?](/guides/where-is-the-expiration-date-on-eye-drops) shows how to find and read it.`,
      },
      { h: 'How long do eye drops stay good once opened?' },
      {
        p: `In practice, how long an opened bottle stays usable depends on how it’s been handled, and you’re the one who knows that. Three questions help:`,
      },
      {
        list: [
          `Has it stayed within the label’s storage range? Days in a hot car or a freezing garage take it outside {storage}.`,
          `Has the tip stayed clean? Touching the tip to an eye, a finger or a counter is what the label warns against.`,
          `Does it look the way it should? {appearance} A different color is a stop sign under the label’s do-not-use rule.`,
        ],
      },
      {
        p: `If the answer to any of those is no, or you’re not sure, replace the bottle. A new one costs less than the worry. Check the expiration date on any sealed spare before you open it, too.`,
      },
      { h: 'Does preservative-free change the answer?' },
      {
        p: `Quell is preservative-free, which is a choice about what’s in the formula. People sometimes assume preservative-free drops must be thrown out within a set number of days after opening, but Quell’s label doesn’t say that, and this guide won’t add a rule the label doesn’t contain. Your pharmacist can explain how preservative-free, multi-dose bottles are generally handled and whether they’d suggest a personal limit. [What does preservative-free mean?](/guides/what-does-preservative-free-mean) covers the term itself.`,
      },
      { h: 'How long does one bottle actually last?' },
      {
        p: `A separate question, and one the label helps with. The directions read: {directions}. Following them, most people use up a bottle well before any expiration date. A bottle holds {size}. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) works through the arithmetic, so you can plan when to reorder rather than stretching an old bottle.`,
      },
      { h: 'Habits that keep an opened bottle in good shape' },
      {
        list: [
          `Wash your hands before each use.`,
          `Keep the tip off your eye, lashes, fingers and every surface.`,
          `Cap the bottle right after each use.`,
          `Store it indoors, out of direct sun, within the labeled range; a drawer or a bag that stays with you works.`,
          `Use one bottle at a time. Leave spares sealed until you need them.`,
          `Write the date you opened it on the carton if that helps you keep track.`,
          `Don’t share a bottle with anyone else.`,
        ],
      },
      { h: 'Signs to stop using an opened bottle' },
      {
        list: [
          `The liquid has changed color from its usual milky brown.`,
          `The expiration date has passed.`,
          `The tip touched something, or the cap was left off for a long time.`,
          `It was stored outside the label’s range.`,
          `Your eyes feel worse after using it, not better.`,
        ],
      },
      {
        p: `That last one is about you, not the bottle. Quell’s label says: {stopUse} [How do I know if my eye drops have gone bad?](/guides/how-do-i-know-if-my-eye-drops-have-gone-bad) goes deeper into what to look for in the bottle itself.`,
      },
      { h: 'Who to ask for a specific answer' },
      {
        p: `A pharmacist can answer “how long should I keep this open bottle?” for your situation. You can also call {company} at {phone}, {hours}. Have the lot number and expiration date from the package handy. For how to throw away an old bottle, see [How to dispose of eye drops](/guides/how-to-dispose-of-eye-drops).`,
      },
    ],
    faq: [
      {
        q: 'How long can you use eye drops once opened?',
        a: `Check the product’s own label. Quell’s label doesn’t set a number of days after opening; it gives a storage range, an expiration date and a rule not to use it if it changes color. Ask a pharmacist for a personal limit.`,
      },
      {
        q: 'Do preservative-free eye drops need to be thrown away after a month?',
        a: `Only if their label says so. Quell’s label doesn’t give a discard period after opening, so follow the expiration date, storage range and do-not-use rule, and ask a pharmacist if you want a firm limit.`,
      },
      {
        q: 'Can I use eye drops past the expiration date if they look fine?',
        a: `No. Don’t use eye drops after the expiration date printed on the package, whether the bottle is opened or still sealed, even if it looks normal.`,
      },
      {
        q: 'Should I write the date I opened my eye drops on the bottle?',
        a: `It’s a useful habit. It helps you track how long a bottle has been in use and when to reorder, even though Quell’s label doesn’t set a discard period after opening.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13 for is-polysorbate-80-in-eye-drops-safe:
   * - https://www.govinfo.gov/content/pkg/CFR-2024-title21-vol5/xml/CFR-2024-title21-vol5-sec349-12.xml
   *   (21 CFR 349.12 Ophthalmic demulcents: glycerin and polysorbate 80 listed)
   * - https://www.govinfo.gov/content/pkg/CFR-2024-title21-vol3/xml/CFR-2024-title21-vol3-sec172-840.xml
   *   (21 CFR 172.840 Polysorbate 80 as a food additive: emulsifier in ice cream and
   *   frozen desserts; solubilizing and dispersing agent in pickles)
   */
  {
    slug: 'is-polysorbate-80-in-eye-drops-safe',
    title: 'Is polysorbate 80 in eye drops safe?',
    description:
      'Polysorbate 80 is a listed OTC eye drop lubricant. What FDA’s rules cover, why food headlines are a different context, and what Quell’s label warns.',
    category: 'formula',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Polysorbate 80 is one of the lubricant ingredients FDA lists for nonprescription eye drops, in 21 CFR 349.12, within set concentration limits. That makes it a standard, permitted eye drop ingredient, but no ingredient is right for every person. Whether a particular drop suits you comes down to its full label, its warnings and your own history, which is a question for your eye doctor or pharmacist.`,
      },
      { h: 'Is polysorbate 80 safe in eye drops? What the rules say' },
      {
        p: `FDA regulates nonprescription eye drops through a monograph, a rulebook that sets which active ingredients a product may use, at what strengths, and what the label must say. Part 349 of Title 21 of the Code of Federal Regulations covers ophthalmic drugs. Section 349.12, “Ophthalmic demulcents,” lists the lubricating ingredients allowed, and polysorbate 80 is on that list, next to glycerin.`,
      },
      {
        p: `Being on the list means the ingredient may be used in an OTC eye drop within the stated range and with the required labeling. It doesn’t mean every person will tolerate every product that contains it, and it isn’t a personal recommendation. That distinction is the honest answer to “is it safe?”: the rules permit it, and your own situation decides whether a given bottle is right for you.`,
      },
      { h: 'How Quell lists polysorbate 80' },
      {
        p: `Quell’s Drug Facts panel lists three active ingredients: {actives}. Polysorbate 80 appears as {polysorbate}, with the purpose “lubricant.” The label’s Uses line reads: {uses}. Together, the actives are part of a formula designed to reinforce the tear film’s oil layer to help reduce moisture loss. The strength printed on the label falls inside the range Section 349.12 allows for polysorbate 80. The whole panel, including the {inactiveCount} inactive ingredients, is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you’d like the background on what the ingredient does chemically, [What does polysorbate 80 do in eye drops?](/guides/what-does-polysorbate-80-do-in-eye-drops) covers its role as a lubricant and emulsifier.`,
      },
      { h: 'Why food headlines about polysorbate 80 aren’t about eye drops' },
      {
        p: `Many people first meet polysorbate 80 in articles about processed food. FDA does allow it as a food additive, under a different rule, 21 CFR 172.840, which names uses such as an emulsifier in ice cream and frozen desserts and a dispersing agent in pickles. Concerns raised about food additives are about eating them, often in daily amounts, and they travel through the digestive system.`,
      },
      {
        p: `An eye drop is a different situation: a single drop placed on the surface of the eye, a few times a day, under a separate set of rules written for eye products. One context doesn’t answer questions about the other. If something you read about polysorbate 80 in food worries you, bring it to a pharmacist, who can tell you whether it has any bearing on an eye drop.`,
      },
      { h: 'Polysorbate 80 eye drops side effects: what the label tells you' },
      {
        p: `The Drug Facts label is where a product tells you what to watch for, and it applies to the product as a whole rather than to one ingredient. Quell’s label includes:`,
      },
      {
        list: [
          `Warnings: {warnings}.`,
          `Do not use: {doNotUse}.`,
          `When using: {tip}.`,
          `If swallowed: {swallowed}.`,
        ],
      },
      {
        p: `And it tells you when to stop: {stopUse} Any eye drop can sting briefly or blur vision for a moment as it spreads, and [Why do eye drops sting?](/guides/why-do-eye-drops-sting) covers that. Lasting discomfort is a reason to stop and ask a professional, not to push through.`,
      },
      { h: 'Who should ask a doctor before using it?' },
      {
        p: `The label’s own caution names people with egg or bird allergies. Beyond that, a few situations are worth a conversation before you start any new eye drop, whatever the ingredients:`,
      },
      {
        list: [
          `You’ve had a reaction to an eye drop, a skin product or a medicine before and don’t know which ingredient caused it.`,
          `You’ve been told you’re sensitive to polysorbates or to similar ingredients.`,
          `You wear contact lenses; Quell’s label doesn’t give directions for them.`,
          `You already use other eye drops; the label doesn’t cover combining them.`,
          `You’re pregnant or nursing, or you’re thinking of using it for a child; the label doesn’t address either.`,
          `You have an eye condition you’re already being seen for.`,
        ],
      },
      {
        p: `In each case, the label is silent, and the right person to fill the gap is your eye doctor or a pharmacist. Bring the box or a screenshot of the [Drug Facts page](/drug-facts) so they can see the full ingredient list. [Questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) has a short list to take with you.`,
      },
      { h: 'Is polysorbate 80 a preservative?' },
      {
        p: `No. In Quell it’s listed as an active ingredient with the purpose “lubricant,” and Quell is a preservative-free formula. People sometimes confuse polysorbate 80 with preservatives because both appear in long ingredient lists, but they’re listed for different reasons. [What does preservative-free mean?](/guides/what-does-preservative-free-mean) explains the term.`,
      },
      { h: 'If you have a question about Quell’s ingredients' },
      {
        p: `Call {company} at {phone}, {hours}, with the lot number from the package handy. For anything about your own health or eyes, your eye doctor or pharmacist is the right call, and the [dry eye self-check](/self-check) can help you describe your symptoms before you speak to them.`,
      },
    ],
    faq: [
      {
        q: 'Is polysorbate 80 approved for use in eye drops?',
        a: `It’s one of the ophthalmic demulcents listed in FDA’s rules for over-the-counter eye drops, 21 CFR 349.12, which set the strengths and labeling such products must follow.`,
      },
      {
        q: 'Is polysorbate 80 in eye drops the same as in food?',
        a: `It’s the same ingredient used in a different way. Food use falls under a separate FDA rule, 21 CFR 172.840, and concerns about eating additives don’t automatically apply to a drop on the eye.`,
      },
      {
        q: 'Can you be allergic to polysorbate 80 in eye drops?',
        a: `Any ingredient can bother some people. If you’ve reacted to a product before or think you’re sensitive to polysorbates, ask your eye doctor or pharmacist before using an eye drop that contains it.`,
      },
      {
        q: 'Is polysorbate 80 a preservative in eye drops?',
        a: `Not in Quell. Its label lists polysorbate 80 as an active ingredient with the purpose “lubricant,” and the formula is preservative-free.`,
      },
    ],
  },

  {
    slug: 'do-eye-drops-help-tired-eyes',
    title: 'Do eye drops help tired eyes?',
    description:
      'Lubricating drops can ease the dryness that often comes with tired eyes after screens or a long day. What the label covers, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Lubricating eye drops can help when tired eyes are really dry eyes, which is common after hours at a screen or a long day in dry air. Quell’s label lists its uses as relieving dryness and protecting against further irritation; it doesn’t mention fatigue. Drops won’t fix a lack of sleep or focusing strain, and tired eyes that come with pain or vision changes belongs with an eye doctor.`,
      },
      { h: 'What people mean by “tired eyes”' },
      {
        p: `“Tired eyes” isn’t a label term or a single thing. People use it for a handful of different sensations, and a drop helps with some of them and not others:`,
      },
      {
        list: [
          `A dry, gritty or burning feeling, especially later in the day.`,
          `Heavy eyelids or wanting to close your eyes, often from short sleep.`,
          `An achy feeling from focusing up close for a long time.`,
          `Eyes that water, sting or feel irritated.`,
          `Blurry vision that clears when you blink.`,
        ],
      },
      {
        p: `The first and the last of these often trace back to the tear film, the thin layer of oil, water and mucus that keeps the eye’s surface smooth. When it thins out, eyes feel dry and vision can flicker until a blink resets it. That overlap is where a lubricating drop has something to offer.`,
      },
      { h: 'Do eye drops relieve tired eyes? What the label says' },
      {
        p: `An over-the-counter drop can only claim what its Drug Facts label covers. Quell’s Uses line reads: {uses}. So the honest answer is: if your tired eyes feel dry or irritated, the label speaks to that. If “tired” means sleepy, achy from focusing, or something else, the label doesn’t.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters most where evaporation is the problem: screens, air conditioning, heated rooms and wind. The directions read: {directions}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Why screens make eyes feel tired' },
      {
        p: `When you concentrate on a screen, you blink less often, and many blinks are incomplete. Each blink spreads a fresh layer of tears; fewer and shallower blinks let the surface dry between them. By mid-afternoon that shows up as burning, a sandy feeling or blur, which most people describe as tired eyes.`,
      },
      {
        p: `Close-up focus adds its own fatigue, separate from dryness. Your eyes work to hold a near point for hours, and that effort can ache even when the surface is well lubricated. A drop doesn’t change focusing effort; breaks do. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side in more detail.`,
      },
      { h: 'How do you soothe tired eyes without drops?' },
      {
        list: [
          `Look away from the screen at something distant every so often and blink fully a few times.`,
          `Lower your monitor slightly so you look down at it; less of the eye is exposed to the air.`,
          `Move vents and fans so they don’t blow across your face.`,
          `Rest your eyes closed for a minute between tasks.`,
          `Get enough sleep. Short nights make eyes feel heavy and dry the following morning.`,
          `Turn up the text size so you aren’t straining to read.`,
          `Get outside for a few minutes; changing your focus and your surroundings helps.`,
        ],
      },
      {
        p: `If your eyes feel tired after poor sleep, [Dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) covers that connection.`,
      },
      { h: 'Can I use eye drops for tired eyes every day?' },
      {
        p: `The label’s directions apply every day you use it: {directions}. If you find you want drops more often than that, or every day just to get through work, that’s useful information to take to an eye doctor, who can look at why your eyes are drying out. [Is it okay to use eye drops every day?](/guides/is-it-okay-to-use-eye-drops-every-day) covers the question in more depth.`,
      },
      { h: 'Using a lubricating drop for end-of-day dryness' },
      {
        list: [
          `Wash your hands first.`,
          `Tilt your head back, gently pull down the lower lid and look up.`,
          `Let one drop fall into the pocket without the tip touching anything. The label says: {tip}.`,
          `Close your eyes gently for a moment rather than blinking hard.`,
          `Expect a milky-brown liquid. {appearance}`,
        ],
      },
      {
        p: `Before you use it, read the warning: {warnings}. The label doesn’t give directions for contact lenses or for using other eye drops at the same time; ask your eye doctor or pharmacist about either.`,
      },
      { h: 'When tired eyes need a doctor, not a drop' },
      {
        p: `Some eye fatigue is a signal worth paying attention to. See an eye doctor if your eyes feel tired along with:`,
      },
      {
        list: [
          `Blurry vision that doesn’t clear when you blink.`,
          `Headaches when you read or use a screen.`,
          `Pain, light sensitivity or a feeling that something is in your eye.`,
          `Double vision or new difficulty focusing.`,
          `Symptoms in one eye only that keep coming back.`,
        ],
      },
      {
        p: `Focusing strain can also come from glasses or contacts that no longer match your eyes, and only an eye exam can check that. Quell’s label is clear: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more warning signs.`,
      },
      { h: 'Not sure whether it’s dryness?' },
      {
        p: `The free [dry eye self-check](/self-check) asks a few questions about when and how your eyes bother you and suggests whether your answers point toward dryness or toward seeing a doctor. It is not a diagnosis, but it can help you describe what’s going on. If dryness fits, Quell is available to [order](/#buy) without a prescription.`,
      },
    ],
    faq: [
      {
        q: 'Do eye drops for tired eyes work?',
        a: `Lubricating drops can ease tired eyes when the tired feeling is really dryness, such as after long screen time. They don’t address sleepiness or focusing strain, which need rest, breaks or an eye exam.`,
      },
      {
        q: 'Can I use eye drops for tired eyes?',
        a: `If your tired eyes feel dry or irritated, a lubricating drop’s label covers that. Quell’s label lists relief of dryness and protection against further irritation, used as directed: {directions}.`,
      },
      {
        q: 'How do you soothe tired eyes after a long day at the computer?',
        a: `Look into the distance and blink fully, move vents off your face, lower your monitor and rest your eyes closed for a minute. A lubricating drop can help if they also feel dry.`,
      },
      {
        q: 'When should I see a doctor for tired eyes?',
        a: `See an eye doctor if tired eyes come with blurry vision that doesn’t clear, headaches, pain, light sensitivity or double vision, or if the tired feeling keeps coming back despite rest.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-musicians-and-performers',
    title: 'Dry eyes for musicians and stage performers',
    description:
      'Hot stage lights, haze machines, sheet music and touring flights: why performers’ eyes dry out, and how to use drops before and after the show, never during.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Musicians and stage performers get dry eyes from hot lights, haze and fog effects, air-conditioned venues, hours of reading music and constant travel. Fixes start offstage: angle away from fans and vents, blink deliberately during rests, wear glasses for close reading and keep your hands clean. If you use a lubricating drop, put it in before you go on or after you come off, with washed hands, never mid-performance.`,
      },
      { h: 'Why performers’ eyes dry out' },
      {
        p: `A performance packs several drying conditions into a short time. Stage lighting throws heat onto your face. Venues run air conditioning hard to keep a crowd comfortable, and stage fans blow on the band. Concentration lowers your blink rate, whether you’re counting bars, watching a conductor or hitting a mark. The tear film, a thin layer of oil, water and mucus over each eye, loses water faster in warm, moving, dry air, and blinks are what replace it.`,
      },
      {
        p: `Add a few nights in a row, short sleep on tour and long drives between cities, and gritty, burning eyes become part of the job for many working musicians, actors and dancers.`,
      },
      { h: 'Stage lights and onstage fans' },
      {
        list: [
          `During soundcheck, notice where the fans and floor vents point, and ask for them to be angled at your body instead of your face.`,
          `Between songs or during a long rest, close your eyes for a second or two and blink fully a few times.`,
          `Look away from the brightest lights when you can; squinting into them all night is tiring.`,
          `Keep water within reach onstage and drink it.`,
          `In the wings, step out of the direct path of lights and heaters.`,
        ],
      },
      { h: 'Haze and fog machines' },
      {
        p: `Haze and fog effects hang in the air to catch the light, and many performers find their eyes feel dry or irritated during and after a heavy-haze show. Practical steps: ask the lighting designer or stage manager whether haze can be lighter near your position, avoid standing at the machine’s outlet, and rinse your face with clean water after the show. If your eyes stay irritated well after you leave the venue, or you have any pain or change in vision, stop and see a doctor rather than waiting for the next show.`,
      },
      { h: 'Reading sheet music, charts and scripts' },
      {
        p: `Orchestral players, session musicians and anyone reading a chart spend long stretches focused at one distance, often in dim pit lighting. That steady stare reduces blinking. If you read from a tablet on a music stand, the effect is similar to working at a computer.`,
      },
      {
        list: [
          `Use the brightest stand light the venue allows, so you aren’t straining.`,
          `Enlarge parts or turn up the tablet’s text size where you can.`,
          `If you wear reading glasses, make sure the prescription suits your stand distance; an eye doctor can check.`,
          `During rehearsals, look up and across the room between pieces.`,
        ],
      },
      {
        p: `[Dry eyes when reading](/guides/dry-eyes-when-reading) covers the reading side in more depth.`,
      },
      { h: 'Touring, flights and hotel rooms' },
      {
        p: `Life on the road adds its own dry air: airplane cabins, tour buses with the vents running, and hotel rooms with heating or AC that never quite turns off. A few habits help on tour:`,
      },
      {
        list: [
          `Pack eye drops in your carry-on, in the quart-size bag TSA requires for liquids of 3.4 ounces or less.`,
          `Turn the overhead air vent on a plane away from your face.`,
          `Keep bus and car vents pointed at your body, not your eyes.`,
          `In hotels, turn the fan setting down at night and keep the bed away from the vent.`,
        ],
      },
      {
        p: `[Dry eyes on a plane](/guides/dry-eyes-on-a-plane) and [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) go into each in detail.`,
      },
      { h: 'Using eye drops around a performance' },
      {
        p: `Timing matters. Put drops in before call time or after the show, not during a set, scene or rest. Mid-performance, your hands have been on strings, keys, mouthpieces, drumsticks, props or a mic stand, and the label is clear: {tip}. Rushed drops also blur vision for a moment as they spread, which is the last thing you want before an entrance.`,
      },
      {
        list: [
          `Wash your hands with soap and water before touching the bottle or your eyes.`,
          `Sit down in the dressing room, tilt your head back and pull down the lower lid.`,
          `Follow the label directions: {directions}.`,
          `Close your eyes gently for a moment, then check your vision has settled before you head to the stage.`,
          `Put the cap back on right away and keep the bottle in a closed bag, not loose on a stand.`,
        ],
      },
      {
        p: `If you wear stage makeup or contact lenses, the label doesn’t give directions for either situation, so ask your eye doctor or a pharmacist how to fit drops around them. [Eye drops before or after makeup?](/guides/eye-drops-before-or-after-makeup) covers what’s known about the makeup side.`,
      },
      { h: 'About Quell for performers' },
      {
        p: `Quell is a preservative-free, over-the-counter lubricating eye drop. Its label lists its uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer that slows evaporation under hot lights and in dry venues. The liquid is milky brown, so it can briefly blur your vision as it spreads; {appearance}`,
      },
      {
        p: `Storage matters on the road. The label says: {storage}. Don’t leave the bottle in a hot van, a trailer in winter, or on top of an amp under the lights. A gig bag or jacket pocket that stays with you is safer. Read the full label, including the warning that reads {warnings}, on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Sore eyes after a long tour often settle with rest, but some symptoms shouldn’t wait for the next break. The label says: {stopUse} Anything that hits the eye, such as a pyro particle, confetti or a broken string, is a reason for prompt medical attention, not drops. The free [dry eye self-check](/self-check) can help you sort out what you’re feeling between gigs.`,
      },
    ],
    faq: [
      {
        q: 'Why do stage lights make my eyes dry?',
        a: `Stage lights put heat on your face, and venues add fans and air conditioning. Warm, moving air speeds evaporation from the tear film, and concentrating during a show means you blink less.`,
      },
      {
        q: 'Can haze machines irritate your eyes?',
        a: `Many performers notice dry or irritated eyes during heavy-haze shows. Stay away from the machine’s outlet, ask whether haze can be lighter near you, and see a doctor if irritation lingers or you have pain.`,
      },
      {
        q: 'When should a musician put in eye drops?',
        a: `Before call time or after the show, with freshly washed hands, never mid-set. Drops can briefly blur vision as they spread, and hands that have been on instruments shouldn’t go near the bottle tip.`,
      },
      {
        q: 'Can I take eye drops on tour in my carry-on?',
        a: `Yes. Under TSA’s liquids rule, containers of 3.4 ounces or less go in a quart-size bag in your carry-on. Keep the bottle with you rather than in a hot or freezing vehicle.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-at-the-gym',
    title: 'Dry eyes at the gym',
    description:
      'Fans, air conditioning, treadmill screens and sweat: why eyes feel dry during and after a workout, simple fixes, and how to keep drops in a gym bag.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Eyes often feel dry at the gym because of airflow and focus: big fans and air conditioning blow across your face, and staring at a treadmill screen or your phone cuts your blink rate. Sweat and sunscreen running into the eyes add sting. Position yourself out of the fan’s path, wipe sweat with a clean towel, blink between sets, and use lubricating drops with clean hands after your workout, not mid-set.`,
      },
      { h: 'Why do my eyes get dry after the gym?' },
      {
        p: `The tear film, a thin layer of oil, water and mucus, keeps the eye’s surface smooth and comfortable. Moving, dry air pulls water from it faster, and gyms are full of moving, dry air: wall-mounted fans, ceiling fans, air conditioning set low for a room full of people working hard, and the personal fan built into many treadmills and bikes. Each one aimed at your face shortens the time your tears stay intact between blinks.`,
      },
      {
        p: `Concentration does the rest. Watching a cardio screen, counting reps or reading your phone between sets all reduce how often you blink, and long stretches without a full blink let the surface dry out. Many people only notice it once they stop moving: in the car, eyes suddenly feel gritty.`,
      },
      { h: 'Treadmills, bikes and the console fan' },
      {
        list: [
          `Turn the console fan off, or point it at your chest instead of your face.`,
          `Choose a machine away from the big floor fans and ceiling vents if you have a choice.`,
          `Lower your gaze to the screen rather than tilting your head back to look up at a TV; looking down exposes less of the eye.`,
          `Look away from the screen and blink fully every few minutes.`,
          `On rowing machines and stair climbers, close your eyes briefly between intervals.`,
        ],
      },
      { h: 'Sweat and sunscreen in your eyes' },
      {
        p: `Sweat running down your forehead stings, and the reflex is to rub, which spreads it and drags dirty fingers across the eye. A few habits keep it under control:`,
      },
      {
        list: [
          `Wear a sweatband or a cap to catch sweat before it reaches your eyes.`,
          `Use a clean towel and pat the skin around your eyes rather than wiping across them.`,
          `Keep gym towels separate: one for equipment, one for your face.`,
          `Before an outdoor workout, apply sunscreen well away from the eyes, and check the sunscreen’s own label for what to do if it gets in them.`,
        ],
      },
      {
        p: `Quell’s label doesn’t cover rinsing sweat or sunscreen from the eyes, so don’t use an eye drop as an eyewash. If stinging doesn’t settle quickly after you rinse your face, or your vision changes, see a doctor.`,
      },
      { h: 'Does exercise help dry eyes?' },
      {
        p: `There’s no label claim to make here, and Quell’s label doesn’t mention exercise. What can be said is that the gym itself, with its fans and screens, is often what makes eyes feel dry during a workout, rather than the effort. Changing where you stand and what you look at addresses that directly. Outdoor runners face wind and sun instead; [Dry eyes when running](/guides/dry-eyes-when-running) covers that version.`,
      },
      { h: 'Using eye drops before or after a workout' },
      {
        p: `Drops belong at the start or the end of a session, not between sets. Gym equipment is handled by many people, and the label says: {tip}. Wash your hands with soap and water in the locker room first, then:`,
      },
      {
        list: [
          `Sit on a bench, tilt your head back and pull the lower lid down gently.`,
          `Follow the label directions: {directions}.`,
          `Close your eyes for a moment and let your vision settle before you drive.`,
          `Recap the bottle right away.`,
        ],
      },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its label lists its uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, the layer that slows evaporation when air is moving across your eyes. The liquid is milky brown. {appearance}`,
      },
      { h: 'Keeping eye drops in a gym bag or locker' },
      {
        p: `The label’s storage line reads: {storage}. That shapes where a bottle should live:`,
      },
      {
        list: [
          `An indoor locker at room temperature is fine for the length of a workout.`,
          `A gym bag left in a hot car in summer, or a freezing one in winter, will go outside that range; bring the bottle inside with you.`,
          `Keep it in a small zippered pouch, away from a sauna or steam room and out of direct sun by a window.`,
          `Don’t keep it loose in a bag with wet towels or shoes.`,
          `Check the label’s do-not-use rule before each use: {doNotUse}.`,
        ],
      },
      { h: 'Contact lenses at the gym' },
      {
        p: `Many people work out in contact lenses, and some notice they feel drier there. Quell’s label doesn’t give directions for use with contact lenses, so ask your eye doctor before putting any drop in with lenses in, and what they suggest for workouts. [Can I use Quell with contact lenses?](/guides/contact-lenses-and-quell) explains what the label does and doesn’t say.`,
      },
      { h: 'Swimming pools and saunas' },
      {
        p: `Pool water and the dry heat of a sauna each bother eyes in their own way. Goggles keep pool water out; keeping sauna sessions short is kinder to sensitive eyes. [Dry eyes after swimming in a pool](/guides/dry-eyes-after-swimming) has more on the pool side.`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Something stuck in your eye, eye pain or vision changes after a workout are reasons to see a doctor. Quell’s label is clear: {stopUse} For a quick look at your symptoms first, try the free [dry eye self-check](/self-check). The full label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after working out?',
        a: `Gym fans, air conditioning and treadmill console fans blow dry air across your face, and focusing on a screen or your phone reduces blinking. Together they let the tear film dry out during a session.`,
      },
      {
        q: 'Can sweat cause dry eyes?',
        a: `Sweat in the eyes stings and can irritate them, and rubbing makes it worse. A sweatband or cap and patting with a clean face towel keep it out. See a doctor if stinging doesn’t settle.`,
      },
      {
        q: 'Can I keep eye drops in my gym locker?',
        a: `An indoor locker at room temperature is fine during a workout. Quell’s label says to store it {storage}, so don’t leave it in a gym bag in a hot or freezing car.`,
      },
      {
        q: 'Should I use eye drops before or after the gym?',
        a: `Either, as long as your hands are freshly washed. Avoid putting drops in between sets after touching shared equipment, and let your vision settle before you drive.`,
      },
    ],
  },

  {
    slug: 'how-do-i-know-if-the-eye-drop-went-in',
    title: 'How do I know if the eye drop went in?',
    description:
      'Signs an eye drop actually landed, what to do if it missed, and simple techniques that make it easier to get a single drop into your eye every time.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `You’ll usually know an eye drop went in because you feel a brief cool, wet sensation on the eye and your vision blurs for a moment as it spreads. If the drop ran down your cheek or landed on your lid or lashes, it missed. Using a mirror, resting your hand on your face and aiming for the pocket of the lower lid make it easier to tell, and to get it right the first time.`,
      },
      { h: 'Signs the eye drop went in' },
      {
        list: [
          `A cool or wet feeling on the surface of the eye, not just on the skin.`,
          `A moment of blurry vision as the drop spreads, which clears after a few blinks.`,
          `An urge to blink or close the eye.`,
          `With a milky drop like Quell, a brief milky haze in that eye.`,
          `Sometimes, a taste at the back of the throat a little later, because tears drain from the eye into the nose and throat.`,
        ],
      },
      {
        p: `You don’t need to feel all of these. A drop that lands in the pocket of the lower lid can be surprisingly quiet. [Why can I taste eye drops?](/guides/why-can-i-taste-eye-drops) explains the throat sensation, and [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) covers the blur.`,
      },
      { h: 'Signs the drop missed' },
      {
        list: [
          `You feel it run down your cheek or the side of your nose.`,
          `It lands on your eyelid, brow or lashes and you feel it on the skin.`,
          `You blinked as it fell, and you see it on the outside of your lid.`,
          `Nothing at all: no cool feeling, no blur, no wet sensation on the eye.`,
        ],
      },
      { h: 'What to do if the eye drop missed' },
      {
        p: `Quell’s label directions read: {directions}. Those directions count drops that go into the eye. If you clearly saw or felt the drop land on your cheek or lid, it didn’t go in, and it’s reasonable to try once more, carefully. What the label doesn’t support is adding extra drops on top of one that may have gone in, just to be sure.`,
      },
      {
        list: [
          `If you’re sure it missed, wipe your cheek, reset, and try once more.`,
          `If you’re not sure, don’t add another; wait until your next scheduled drop.`,
          `If you keep missing, change your technique before trying again (see below).`,
          `If the tip touched your eye, lid or face during the attempt, note it. The label says: {tip}.`,
        ],
      },
      {
        p: `If you often find yourself needing more than the label’s directions, that’s worth mentioning to an eye doctor or pharmacist. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers the label limit.`,
      },
      { h: 'How to put eye drops in so you know they landed' },
      {
        list: [
          `Wash your hands and sit down or lean back somewhere comfortable.`,
          `Tilt your head back and look up at the ceiling.`,
          `With one finger, gently pull your lower lid down to make a small pocket.`,
          `Rest the hand holding the bottle on your forehead or cheek so it stays steady.`,
          `Hold the tip above the pocket, close but not touching, and squeeze gently for one drop.`,
          `Let go of the lid, and close your eye gently for a moment.`,
          `Wipe away any excess on the skin with a clean tissue.`,
        ],
      },
      {
        p: `Aiming for the lower-lid pocket rather than the center of the eye helps in two ways: you’re less likely to blink, and a drop that lands there clearly went in. [How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the same steps in more detail.`,
      },
      { h: 'Mirror tips' },
      {
        p: `A mirror helps many people see whether the drop landed. Put a small mirror flat on a table or counter, lean over it and look down into it. The bottle comes from above, out of your direct line of sight, which makes you less likely to blink at it. You can see the pocket of your lower lid in the reflection and watch the drop fall into it.`,
      },
      {
        p: `Alternatively, lie down on your back. Gravity holds the drop on the eye’s surface, your hand rests naturally on your face, and a missed drop is easy to feel as it runs toward your ear.`,
      },
      { h: 'Does a cool bottle make it easier to feel?' },
      {
        p: `Some people find a slightly cool drop easier to feel landing. Don’t put Quell in the refrigerator to get that effect, though: the label’s storage line reads {storage}, so keep it at a cool room temperature within that range. [Should eye drops be refrigerated?](/guides/should-eye-drops-be-refrigerated) covers why the label’s range matters.`,
      },
      { h: 'If you blink every time' },
      {
        p: `Blinking as a drop approaches is a reflex, and nearly everyone does it at first. A few tricks help: look up and away from the bottle, keep both eyes open rather than squinting the other one, breathe out as you squeeze, and practice with the bottle closed until the motion feels routine. If hand tremor or arthritis makes it hard, a pharmacist can suggest aids designed to hold the bottle steady. [Eye drops for older adults](/guides/eye-drops-for-older-adults) includes more tips for steadying your hands.`,
      },
      { h: 'Checking the bottle itself' },
      {
        p: `If you’re never sure whether a drop came out, look at the bottle. Hold it upside down over a sink and squeeze gently once to see how much pressure a single drop needs. {appearance} If the liquid looks different from usual, check the label: {doNotUse}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to ask for help' },
      {
        p: `If drops consistently sting, make your eyes worse, or you have pain or vision changes, stop and call a doctor. The label’s stop-use line reads: {stopUse} A pharmacist can also watch you put in a drop and suggest changes to your technique.`,
      },
    ],
    faq: [
      {
        q: 'How do I know if the eye drop went into my eye?',
        a: `You’ll usually feel a brief cool, wet sensation on the eye and see a moment of blur as it spreads. If it ran down your cheek or landed on your lid, it missed.`,
      },
      {
        q: 'What should I do if I missed my eye with an eye drop?',
        a: `If you’re sure it landed on your skin, wipe it away and try once more, carefully. If you’re not sure whether it went in, don’t add another drop; wait until your next scheduled one.`,
      },
      {
        q: 'What do eye drops feel like when they go in?',
        a: `Most people feel a cool, wet touch on the eye, a brief urge to blink and a moment of blurry vision. With a milky drop like Quell, that eye may look hazy for a few seconds.`,
      },
      {
        q: 'Is it easier to put eye drops in lying down?',
        a: `Many people find it easier. Lying on your back steadies your hand and holds the drop on the eye, and a drop that misses is easy to feel as it runs toward your ear.`,
      },
    ],
  },
]
