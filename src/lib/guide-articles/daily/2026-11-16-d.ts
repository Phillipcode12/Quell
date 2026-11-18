import type { Guide } from '@/lib/guide-types'
export const DAILY_20261116_D: Guide[] = [
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-waco-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013959.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013959.csv
   *   (WACO RGNL AP, elev 152.4 m: annual precip 36.40 in; May 4.44, Oct 4.41,
   *   Jul 1.82, Aug 2.05; annual snow 0.7 in; Jul high 96.7 F, Aug 97.1 F;
   *   Jan high 59.1 F; 114.8 days at or above 90 F; 24.3 days at or above 100 F;
   *   34.1 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (WACO, TX, WBAN 13959: Jul 83/48, Aug 82/47, Jan 82/62, annual 84/56,
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (WACO annual 4.4, Mar 5.0, Apr 5.1 highest, Sep 3.7 lowest; DALLAS annual 4.2)
   * Elevation is the NOAA station elevation, converted (152.4 m is about 500 ft).
   */
  {
    slug: 'dry-eye-relief-waco-tx',
    title: 'Dry eye relief in Waco, Texas',
    description:
      'Waco averages about 115 days a year at 90°F or hotter, and spring is its windiest season. What NOAA’s records mean for dry eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Waco means planning around heat and wind more than desert-dry air. NOAA’s records for Waco Regional Airport show about 115 days a year at 90°F or hotter, August afternoons near 47 percent humidity, and March and April as the windiest months. Keep vents and gusts off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What NOAA’s normals say about Waco' },
      {
        p: `The figures below come from NOAA’s 1991 to 2020 climate normals for Waco Regional Airport, the official station northwest of downtown, at about 500 feet above sea level:`,
      },
      {
        list: [
          `About 36.4 inches of precipitation a year, with May (4.44 inches) and October (4.41) the wettest months.`,
          `July is the driest month at 1.82 inches, and August follows at 2.05.`,
          `Normal highs reach 96.7°F in July and 97.1°F in August.`,
          `Roughly 115 days a year hit 90°F, and about 24 of those reach 100°F.`,
          `Snow barely registers: under an inch in a normal year, with about 34 nights at or below freezing.`,
        ],
      },
      {
        p: `So Waco isn’t a desert, but its summers are long and hot, and the hottest stretch lines up with the driest one.`,
      },
      { h: 'August afternoons and the air-conditioning trade' },
      {
        p: `NOAA’s humidity table puts Waco’s August mornings at 82 percent and its afternoons at 47, the lowest afternoon reading of the year. July is close behind at 48. Outdoors, that’s a hot, moderately dry afternoon. The bigger effect on your eyes usually comes from what you do about the heat: you go inside. Air conditioning pulls moisture out of the air as it cools, and the vents that keep a car bearable on Valley Mills Drive or a Baylor lecture hall comfortable in September also move dry air across the front of your eyes, where the tear film evaporates between blinks.`,
      },
      {
        list: [
          `Angle the dashboard vents toward your chest or the floor, not your face.`,
          `At a desk, check where the ceiling diffuser blows; moving the chair a few feet can take you out of the stream.`,
          `If you watch a game at McLane Stadium on an early fall afternoon, sunglasses cut both glare and the breeze off the Brazos.`,
          `Save long walks along the river or around Cameron Park for the morning or evening, when the sun is lower.`,
        ],
      },
      { h: 'Spring wind on the Blackland Prairie' },
      {
        p: `NOAA’s wind table ranks April as Waco’s windiest month, with March nearly the same, and September as its calmest. Over a full year, the Waco station reads slightly windier than the Dallas station up I-35. Wind is one of the plainest causes of fast tear evaporation, because it strips the moist air that sits right at the surface of the eye. Spring is also when people in Central Texas get outside the most: baseball, yard work, fishing on Lake Waco, and the drive to Austin or Dallas with the windows down.`,
      },
      {
        p: `Wraparound sunglasses help more than flat lenses here, because gusts come from the side as often as the front. On a boat or a bike, a brimmed hat plus close-fitting glasses keeps the airflow off your eyes. Our guide to [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more for people who spend the whole shift outside.`,
      },
      { h: 'Dry eyes at work in Waco' },
      {
        p: `Plenty of Waco jobs mix the two problems above. Warehouse and distribution work along the interstate means big fans and open dock doors. Hospital and clinic staff spend twelve-hour shifts in tightly controlled, cool air. Students and office workers stare at screens, and a screen cuts the number of times you blink. A few habits travel to any of those settings:`,
      },
      {
        list: [
          `Every so often, look away from the screen at something across the room and blink fully a few times.`,
          `Keep a fan pointed at your body rather than your face.`,
          `Lower the monitor a little, so you look slightly down and your eyelids cover more of the eye.`,
          `If your eyes feel worst late in the shift, that pattern is worth noting for a doctor.`,
        ],
      },
      {
        p: `Our page on [screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking drops off when you concentrate.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. On its Drug Facts panel, the Uses line reads: {uses}. The directions are short: {directions}. One handling instruction matters in a dusty spring: {tip}.`,
      },
      {
        p: `Storage is the part Waco summers test hardest. The panel says: {storage}. A car parked in the sun in July runs far past the top of that range, so keep the bottle in a bag you carry inside, not in the glove box. Our note on [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers deliveries in the heat.`,
      },
      { h: 'Ordering Quell to Waco' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Waco, Hewitt, Woodway, McGregor and every other US address. You check out as a guest; shipping is {shipping}, or free on {freeBottles} or more bottles. Tracking comes by email, and we don’t promise a delivery date, so it pays to reorder while you still have some left. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back. Local details are on the [Waco page](/eye-drops/waco-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `Drops are for everyday dryness. The label draws the line: {stopUse} Eye pain, vision that stays blurry after blinking, sensitivity to light, or one eye much worse than the other should go to an optometrist or ophthalmologist. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through the signs.`,
      },
    ],
    faq: [
      {
        q: 'How many 100-degree days does Waco get?',
        a: `About 24 in a normal year at Waco Regional Airport, according to NOAA’s 1991 to 2020 normals. Roughly 115 days reach at least 90°F.`,
      },
      {
        q: 'What is the windiest month in Waco?',
        a: `April, with March close behind, in NOAA’s average wind speed table for the Waco station. September is the calmest month there.`,
      },
      {
        q: 'Why do my eyes feel dry in Waco in the summer?',
        a: `August afternoons average about 47 percent humidity at the airport, and most people spend those hours in air conditioning, which dries the air further and blows it across the eyes. Redirecting vents and blinking fully at screens both help.`,
      },
      {
        q: 'Does Quell ship to Waco, Texas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Waco and every other US address, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-shreveport-la:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013957.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013957.csv
   *   (station named "SHREVEPORT, LA US", WBAN 13957, elev 83.2 m: annual precip
   *   51.43 in; Apr 5.19, Dec 4.94, Aug 2.91; annual snow 0.9 in; Jul high 94.3 F,
   *   Aug 94.9 F; Jan high 58.4 F; 98.5 days at or above 90 F; 10.7 days at or
   *   above 100 F; 29.5 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SHREVEPORT, LA, WBAN 13957: May-Aug mornings 90; Aug 90/54, Oct 88/54,
   *   Jan 83/62, annual 87/58)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SHREVEPORT annual 3.2; Mar 3.9 highest; Aug 2.6 lowest)
   * Elevation is the NOAA station elevation, converted (83.2 m is about 270 ft).
   */
  {
    slug: 'dry-eye-relief-shreveport-la',
    title: 'Dry eye relief in Shreveport, Louisiana',
    description:
      'Shreveport summer mornings average 90 percent humidity, yet dry eyes are common there. Why indoor air is the culprit, and what helps day to day.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Shreveport’s outdoor air is humid most of the year: NOAA’s table puts summer mornings at 90 percent. Dry eyes there usually come from indoor air, car vents, screens and the occasional gusty spring day. Relief starts with moving vents off your face, blinking fully when you concentrate, and using a lubricating drop as its label directs. An eye doctor should check pain, vision changes or dryness that keeps returning.`,
      },
      { h: 'Shreveport’s climate in numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for its Shreveport station (WBAN 13957, at about 270 feet) describe a hot, wet place with a short, mild winter:`,
      },
      {
        list: [
          `About 51.4 inches of precipitation in a normal year. April is the wettest month at 5.19 inches, and December is next at 4.94.`,
          `August is the driest month, at 2.91 inches, and also the hottest, with a normal high of 94.9°F.`,
          `Roughly 98 days a year reach 90°F, and about 11 reach 100°F.`,
          `Snow averages under an inch, and around 30 nights a year dip to freezing.`,
        ],
      },
      { h: 'Why are my eyes dry when it’s this humid?' },
      {
        p: `Because your eyes spend most of a Shreveport summer indoors. From May through August, NOAA lists morning humidity at 90 percent, and afternoons in the mid to upper 50s. Nobody sits in that for long. Homes, offices, Barksdale hangars, casino floors on the riverfront and every car on I-20 run air conditioning for months, and an air conditioner dries air as it cools it. Then a vent pushes that air straight across the eye. The humidity outside your window doesn’t reach the thin tear film that coats your eye; the air in the room does.`,
      },
      {
        list: [
          `Point car vents at your hands or the floor, and use recirculate sparingly on long drives.`,
          `Keep bedroom ceiling fans on a low speed, or angle a box fan at your feet rather than your pillow.`,
          `Sit out of the direct line of office and classroom diffusers when you can choose your seat.`,
          `If your eyes feel worse at work than on the porch, the building’s air is a likely factor.`,
        ],
      },
      { h: 'October: the year’s driest-feeling afternoons' },
      {
        p: `Fall is the other season to watch. NOAA’s table gives Shreveport’s August and October afternoons the year’s lowest readings, both 54 percent. By October the extreme heat has eased, so people spend more time outside: the State Fair of Louisiana, high school football, fishing on Cross Lake or along the Red River. Afternoon sun, a breeze off open water, and long hours of looking at one thing (a scoreboard, a cork, a stage) all cut blinking and speed evaporation. Sunglasses, shade breaks and a few deliberate full blinks go a long way.`,
      },
      { h: 'Spring wind and road trips' },
      {
        p: `March is Shreveport’s windiest month in NOAA’s wind table, and August its calmest. Spring wind isn’t dramatic in northwest Louisiana, but it adds up on a bass boat, a golf course, or a parade route during Carnival season. A brimmed cap pulled low, close-fitting sunglasses, and turning your face away from gusts help keep moisture where it belongs.`,
      },
      {
        p: `Long drives raise the problem too. Shreveport sits where I-20 and I-49 meet, so trips to Dallas, Monroe or Alexandria are routine. Hours of watching the road slow your blink rate; take breaks at rest stops, and never put drops in while the car is moving. Our [winter driving guide](/guides/dry-eyes-when-driving-in-winter) covers heater vents for the colder months.`,
      },
      { h: 'Dry eyes at night' },
      {
        p: `Many people in humid places notice their eyes most at bedtime or on waking, after hours in a cool, air-conditioned bedroom with a fan running. Keeping the fan off your face is the simplest change. If you wonder about using drops right before sleep, our guide [can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed) goes through what the label says and what it leaves to your doctor.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses as: {uses}. The directions read: {directions}. It also warns: {warnings}.`,
      },
      {
        p: `For storage, the panel says: {storage}. An August afternoon in a parked car goes far beyond that, so carry the bottle with you instead of leaving it in the console. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Shreveport and Bossier City' },
      {
        p: `We ship from Brentwood, Tennessee, to Shreveport, Bossier City and the rest of the US. Guest checkout is all you need, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. See the [Shreveport page](/eye-drops/shreveport-la) and the [Louisiana page](/eye-drops/state/louisiana) for more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If drops aren’t enough, the cause needs a professional look. The label puts it this way: {stopUse} Pain, light sensitivity, or blurry vision that doesn’t clear with blinking are reasons to book an exam rather than buy another bottle.`,
      },
    ],
    faq: [
      {
        q: 'How humid is Shreveport in the summer?',
        a: `Very humid in the morning: NOAA lists May through August mornings at 90 percent relative humidity. Afternoons fall to the mid 50s, with August the lowest at 54 percent.`,
      },
      {
        q: 'How hot does Shreveport get in August?',
        a: `The normal August high is 94.9°F, the hottest of any month, in NOAA’s 1991 to 2020 normals. About 98 days a year reach 90°F, and around 11 reach 100°F.`,
      },
      {
        q: 'Why do my eyes feel dry in Shreveport if the air is so humid?',
        a: `Most of the day is spent in air-conditioned rooms and cars, where the air is drier than outside and vents blow it across your eyes. Screens and long drives also cut blinking.`,
      },
      {
        q: 'Can I get Quell delivered to Bossier City?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Bossier City, Shreveport and every other US address. Checkout is as a guest, and tracking arrives by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-mobile-al:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013894.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013894.csv
   *   (station named "MOBILE, AL US", WBAN 13894, elev 63.4 m: annual precip
   *   67.08 in; Jul 7.69, Aug 6.87, Jun 6.55, Oct 3.95; annual snow 0.2 in; Jul
   *   high 90.9 F; Jan high 61.5 F; 77.5 days at or above 90 F; 20.9 nights at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MOBILE, AL, WBAN 13894: Apr 88/53, Oct 87/53, Aug 91/60, annual 87/57)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (MOBILE annual 3.3; Feb and Mar 4.0 highest; Jul and Aug 2.5 lowest;
   *   BIRMINGHAM annual 2.7)
   * Elevation is the NOAA station elevation, converted (63.4 m is about 210 ft).
   */
  {
    slug: 'dry-eye-relief-mobile-al',
    title: 'Dry eye relief in Mobile, Alabama',
    description:
      'Mobile gets about 67 inches of rain a year, yet eyes still dry out in AC, wind off the bay and parade season. What NOAA’s data shows, and what helps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Mobile is one of the wettest, most humid places in the country, so dry eyes there rarely come from the outdoor air. They come from months of air conditioning, breezy late-winter days by the bay, and long stretches of screens or driving. Relief means steering vents off your face, wearing wraparound sunglasses in the wind, blinking fully, and using a lubricating drop as its label directs.`,
      },
      { h: 'Mobile by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for its Mobile station (WBAN 13894, about 210 feet above sea level) show how much water this part of the Gulf Coast gets:`,
      },
      {
        list: [
          `About 67 inches of precipitation in a normal year.`,
          `July is the wettest month at 7.69 inches, followed by August (6.87) and June (6.55).`,
          `October is the driest, at 3.95 inches.`,
          `The normal July high is 90.9°F, and about 78 days a year reach 90°F.`,
          `Only about 21 nights a year fall to freezing, and snowfall averages a fraction of an inch.`,
        ],
      },
      { h: 'Humid outside, dry at the vent' },
      {
        p: `Annual humidity at the Mobile station averages 87 percent in the morning and 57 percent in the afternoon, according to NOAA. August mornings reach 91. With heat and humidity like that, most people live in air conditioning from May into October, and that’s where eyes dry out. An air conditioner wrings water out of the air it cools. Then fans and vents push that drier air across the open eye, and the watery layer of the tear film evaporates faster between blinks.`,
      },
      {
        list: [
          `In the car, aim the vents at the dashboard or your chest; on the Bayway, that’s twenty minutes of air you don’t want in your eyes.`,
          `At the office, a desk under a supply diffuser is the worst seat for your eyes. Ask to move, or angle a small deflector.`,
          `At home, keep ceiling fans off the bed or set to low.`,
          `Give your eyes a break from the screen every so often by looking out a window and blinking slowly a few times.`,
        ],
      },
      { h: 'Wind off the bay in February and March' },
      {
        p: `NOAA’s wind table gives Mobile its highest averages in February and March, and its calmest in July and August. Over a year, the Mobile station is breezier than Birmingham’s. Late winter is also Mardi Gras season, when crowds stand along downtown streets for hours, faces turned toward floats, often into a stiff wind off Mobile Bay. Cold, moving air and long minutes of staring at one spot are a hard combination for the tear film.`,
      },
      {
        list: [
          `Wear sunglasses to parades, even at night if the wind is up; clear safety-style glasses work after dark.`,
          `Stand with a building at your back on gusty evenings.`,
          `Look away from the street and blink between floats.`,
          `Carry a bottle in an inside pocket, not a bag left in a cold car.`,
        ],
      },
      { h: 'October and April: the lower-humidity months' },
      {
        p: `If any months feel crisp in Mobile, they’re April and October, when NOAA lists afternoon humidity at 53 percent, the year’s lowest. Those are also prime months for fishing at Dauphin Island, tailgating, and working in the yard. Sun reflected off water and pale sand makes people squint, and squinting is a poor substitute for a full blink. Polarized sunglasses and a hat with a brim help.`,
      },
      { h: 'Dry eyes at work on the coast' },
      {
        p: `Mobile’s port, shipyards and plants put many people in wind, dust and glare for whole shifts, while hospital and office workers sit in cool, dry air. If your eyes are fine on weekends and gritty by Thursday, work is part of the picture. Safety glasses with side shields block wind as well as debris. Our guide to [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) explains why symptoms pile up as a shift goes on.`,
      },
      { h: 'What Quell is, and what its label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. The directions are: {directions}. Keep the bottle clean: {tip}.`,
      },
      {
        p: `The panel’s storage line is {storage}. A car parked in a Mobile lot in July gets much hotter than that, so keep drops in a purse or pocket. The panel also says: {doNotUse}. The rest of the label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Mobile' },
      {
        p: `We ship from Brentwood, Tennessee, to Mobile, Daphne, Saraland and every other US address. There’s no account to create; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but no arrival date is promised. An unopened bottle can be refunded within {returnDays} days of delivery, no return shipment needed. The [Mobile page](/eye-drops/mobile-al) and the [Alabama page](/eye-drops/state/alabama) have more.`,
      },
      { h: 'When drops aren’t the answer' },
      {
        p: `See an eye doctor for pain, changes in vision, or dryness that keeps coming back no matter what you change. The label agrees: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Mobile, Alabama get a year?',
        a: `About 67 inches in a normal year, according to NOAA’s 1991 to 2020 normals for the Mobile station. July is the wettest month at 7.69 inches.`,
      },
      {
        q: 'What is the least humid month in Mobile?',
        a: `April and October tie in NOAA’s table, with afternoon relative humidity averaging 53 percent. Mornings in both months still run in the high 80s.`,
      },
      {
        q: 'Why do my eyes dry out at Mardi Gras parades?',
        a: `Mobile’s windiest months in NOAA’s records are February and March, and parade-goers stand in that wind for hours, staring at floats and blinking less. Sunglasses and regular full blinks help.`,
      },
      {
        q: 'Does Quell ship to Mobile, AL?',
        a: `Yes. Orders go from Brentwood, Tennessee, to Mobile and anywhere else in the US, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-huntsville-al:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003856.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003856.csv
   *   (HUNTSVILLE INTL AP, elev 190.2 m: annual precip 54.29 in; Dec 5.87,
   *   Mar 5.39, Sep 3.49; annual snow 2.4 in, Feb 1.0, Jan 0.7; Jul high 91.5 F;
   *   Jan high 52.3 F, Jan low 33.1 F; 61.6 days at or above 90 F; 55.6 nights at
   *   or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (HUNTSVILLE, AL, WBAN 03856: Apr 82/51, Oct 87/52, Jul 89/59, Jan 81/64,
   *   annual 85/57)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (HUNTSVILLE annual 3.2; Mar 4.0 highest; Jul and Aug 2.3 lowest;
   *   BIRMINGHAM annual 2.7)
   * Elevation is the NOAA station elevation, converted (190.2 m is about 620 ft).
   */
  {
    slug: 'dry-eye-relief-huntsville-al',
    title: 'Dry eye relief in Huntsville, Alabama',
    description:
      'Huntsville’s April afternoons average 51 percent humidity, its driest of the year. NOAA’s numbers, screen-heavy work, and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Huntsville starts with two things: spring wind and screen time. NOAA’s records for Huntsville International Airport show April afternoons averaging 51 percent humidity and March as the windiest month, while many residents spend workdays at monitors. Blink fully and look away from screens, keep heater and AC vents off your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Huntsville’s weather, from NOAA' },
      {
        p: `NOAA’s 1991 to 2020 normals for Huntsville International Airport, at about 620 feet in the Tennessee Valley west of the city, show a wetter, cooler profile than the Gulf Coast:`,
      },
      {
        list: [
          `About 54.3 inches of precipitation a year. December is the wettest month at 5.87 inches; September is the driest at 3.49.`,
          `The normal July high is 91.5°F, and about 62 days a year reach 90°F.`,
          `January highs average 52.3°F, with lows near 33°F.`,
          `Roughly 56 nights a year drop to freezing, and snowfall averages 2.4 inches, mostly in January and February.`,
        ],
      },
      { h: 'Rocket City screen time' },
      {
        p: `Huntsville’s economy runs on engineering, from Redstone Arsenal to Cummings Research Park, and that means long hours of code, CAD drawings, spreadsheets and test data. When you focus on a screen, you blink less often and often not completely, so the tear film thins between blinks. Add a cool, conditioned office, and dryness by mid-afternoon is a common result.`,
      },
      {
        list: [
          `Set a timer to look across the room or out a window, and blink slowly a few times when it goes off.`,
          `Put your monitor slightly below eye level, so your lids cover more of the eye.`,
          `Turn down screen brightness to match the room, which reduces squinting.`,
          `Close each blink all the way; a half-blink doesn’t spread tears across the lower part of the eye.`,
        ],
      },
      {
        p: `Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains the blink science in more detail.`,
      },
      { h: 'Dry eyes when tired' },
      {
        p: `Launch schedules, deadlines and long commutes on Memorial Parkway and I-565 add up to short nights. Tired eyes and dry eyes feel alike, and they often arrive together: when you’re sleepy, you rub your eyes and blink less, and the end of a long day is when the tear film is under the most strain. If your eyes feel worst after a run of late nights, sleep is part of the answer. [Do eye drops help tired eyes?](/guides/do-eye-drops-help-tired-eyes) sorts out what a drop can and can’t do.`,
      },
      { h: 'Spring wind and April’s dry afternoons' },
      {
        p: `In NOAA’s tables, Huntsville is windiest in March and calmest in July and August, and it averages breezier than Birmingham over the year. April brings the year’s lowest afternoon humidity, 51 percent, with October close behind at 52. Those are also the months for hiking Monte Sano, kayaking the Flint River, or watching a game outdoors. A breezy, lower-humidity afternoon on a ridge trail pulls moisture from the eyes faster than a still July evening by the river.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on windy hikes and on the water.`,
          `Turn your face out of strong gusts rather than squinting into them.`,
          `Pack the bottle in a pocket, not in a hot or freezing car.`,
        ],
      },
      { h: 'Winter heat and summer AC' },
      {
        p: `Huntsville’s outdoor air stays fairly humid in winter, with January afternoons averaging 64 percent. Indoors is different. Heat pumps and furnaces warm air without adding water, so a house can feel dry even on a damp January day. In summer, the air conditioner does the opposite job with a similar result. Either way, the fix is mostly about airflow: move away from vents, keep fans off your face at night, and consider a humidifier in the bedroom during heating season.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes its Uses this way: {uses}. For dosing, it says: {directions}. And for handling: {tip}.`,
      },
      {
        p: `Storage, per the panel: {storage}. The label also reminds you of this: {warnings}. Everything printed on the carton appears on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Huntsville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Huntsville, Madison, Decatur and the rest of the US. You can check out as a guest. Shipping is {shipping}; {freeBottles} or more bottles ship free. Tracking arrives by email, though there’s no promised delivery date. If you don’t open a bottle, you can get a refund within {returnDays} days of delivery without mailing it back. More on the [Huntsville page](/eye-drops/huntsville-al) and the [Alabama page](/eye-drops/state/alabama).`,
      },
      { h: 'When to see an eye doctor in Huntsville' },
      {
        p: `If dryness keeps coming back, or comes with pain or blurred vision, an eye exam is the next step, not more drops. The label sets the limit: {stopUse} Bring notes on when it’s worst (desk, car, bedroom) to the appointment.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Huntsville, Alabama?',
        a: `By rainfall, September, at 3.49 inches in NOAA’s 1991 to 2020 normals. By humidity, April has the lowest afternoon average, about 51 percent.`,
      },
      {
        q: 'Does Huntsville get snow?',
        a: `A little. Huntsville International Airport averages about 2.4 inches of snow a year in NOAA’s normals, most of it in January and February.`,
      },
      {
        q: 'Why do my eyes get dry when I’m tired?',
        a: `Tired people tend to blink less fully and rub their eyes more, and by the end of a long day the tear film has been under strain for hours. Rest, screen breaks and full blinks all help.`,
      },
      {
        q: 'Can I order Quell in Huntsville?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Huntsville and every other US address. Checkout is as a guest, and tracking comes by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-lexington-ky:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093820.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093820.csv
   *   (LEXINGTON BLUEGRASS AP, elev 298.7 m: annual precip 49.84 in; May 5.44,
   *   Jul 5.12, Nov 3.37; annual snow 14.5 in, Jan 4.7, Feb 4.5, Mar 2.8; Jul high
   *   86.9 F; Jan high 42.3 F, Jan low 25.4 F; 25.1 days at or above 90 F; 89.9
   *   nights at or below 32 F; 17.9 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LEXINGTON, KY, WBAN 93820: Apr 75/54, Oct 83/55, Jan 81/68, Dec 82/67,
   *   annual 81/59)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LEXINGTON annual 3.5; Jan, Feb, Mar 4.2 highest; Aug 2.6 lowest)
   * Elevation is the NOAA station elevation, converted (298.7 m is about 980 ft).
   */
  {
    slug: 'dry-eye-relief-lexington-ky',
    title: 'Dry eye relief in Lexington, Kentucky',
    description:
      'Lexington has about 90 freezing nights a year and its windiest weather from January to March. NOAA’s numbers and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `In Lexington, dry eyes usually peak in the heated months and on windy late-winter and spring days. NOAA’s records for Blue Grass Airport show about 90 nights a year at freezing, January through March as the windiest stretch, and April afternoons near 54 percent humidity. Run a humidifier in winter, shield your eyes from wind, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Lexington’s four seasons, measured' },
      {
        p: `NOAA’s 1991 to 2020 normals come from Blue Grass Airport, west of town across Versailles Road from Keeneland, at about 980 feet. The station records a true four-season climate:`,
      },
      {
        list: [
          `About 49.8 inches of precipitation a year, with May the wettest month (5.44 inches) and November the driest (3.37).`,
          `About 14.5 inches of snow in a normal winter, led by January (4.7) and February (4.5).`,
          `January highs average 42.3°F and lows 25.4°F; about 18 days a year never climb above freezing.`,
          `Summer highs peak near 87°F in July, and only about 25 days a year reach 90°F.`,
        ],
      },
      { h: 'Heating season, November to March' },
      {
        p: `With roughly 90 freezing nights a year, Lexington furnaces and heat pumps run for months. Outside, the winter air isn’t especially dry: NOAA lists January afternoon humidity at 68 percent. The problem is what heating does to that air. Warm cold air up to room temperature without adding water and its relative humidity falls sharply, which is why a Chevy Chase bungalow or a UK dorm room can feel parched while the yard is damp.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Turn the thermostat down a few degrees at night.`,
          `Move your favorite chair, or your desk, away from the floor register.`,
          `Keep space heaters pointed at your legs, never at your face.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through each room of the house.`,
      },
      { h: 'Wind across the Bluegrass' },
      {
        p: `NOAA’s wind table shows Lexington’s highest averages in January, February and March, and its calmest in August. Open, rolling farmland lets wind travel, and late winter is when it’s also coldest. Cold, moving air is doubly hard on the tear film: wind speeds evaporation, and cold can make eyes water and then sting. Anyone who works outside on a horse farm, a construction site or a golf course in February knows the feeling.`,
      },
      {
        list: [
          `Wear wraparound glasses or goggles for outdoor work in winter wind.`,
          `A brimmed hat or hood breaks wind from above.`,
          `Turn your back to gusts during breaks, and blink fully a few times.`,
        ],
      },
      { h: 'Keeneland, April and October' },
      {
        p: `The spring and fall race meets fall in two of Lexington’s lower-humidity months. NOAA lists April afternoons at 54 percent, the lowest of the year, and October at 55. Hours at the rail, watching horses come down the stretch, mean long, fixed gazes, often in a breeze and bright sun. The same goes for tailgating before a Wildcats game at Kroger Field. Sunglasses help, and so does looking away and blinking between races or plays.`,
      },
      { h: 'Dry eyes at work and at the screen' },
      {
        p: `Lexington is a university and hospital town, with a large share of people at screens or on long clinical shifts. When you concentrate, you blink less often. Pairing that with heated or air-conditioned air is a fast way to end the day with gritty eyes. [Dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) has desk-by-desk fixes for the winter months.`,
      },
      { h: 'The Quell label' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, as printed: {uses}. Its directions: {directions}. And a handling rule worth following every time: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. On an 18-degree January morning, a bottle left in the car drops well below that; bring it in at night. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Lexington' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Lexington, Georgetown, Nicholasville, Winchester and every other US address. Check out without an account; shipping costs {shipping}, and {freeBottles} or more bottles ship free. We email tracking but don’t promise when a package will arrive. Unopened bottles can be refunded within {returnDays} days of delivery, and there’s nothing to send back. Visit the [Lexington page](/eye-drops/lexington-ky) or the [Kentucky page](/eye-drops/state/kentucky) for local details.`,
      },
      { h: 'Knowing when it’s more than dryness' },
      {
        p: `A drop doesn’t explain why your eyes are dry. If you have pain, light sensitivity, vision changes, or symptoms that don’t ease, see an eye doctor. The label is clear: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Lexington, KY get?',
        a: `About 14.5 inches in a normal year at Blue Grass Airport, according to NOAA’s 1991 to 2020 normals. January and February bring most of it.`,
      },
      {
        q: 'What is the windiest time of year in Lexington?',
        a: `January through March, in NOAA’s average wind speed table for the Lexington station. August is the calmest month.`,
      },
      {
        q: 'Why are my eyes dry in Lexington in the winter?',
        a: `Outdoor winter air there is fairly humid, but heating it indoors drops the relative humidity sharply, and late-winter wind adds to the strain outside. A bedroom humidifier and keeping vents off your face both help.`,
      },
      {
        q: 'Does Quell ship to Lexington, Kentucky?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Lexington and every other US address, with guest checkout and email tracking. Delivery dates aren’t promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-evansville-in:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093817.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093817.csv
   *   (EVANSVILLE REGIONAL AP, elev 121.9 m: annual precip 47.91 in; Apr 5.14,
   *   May 5.12, Aug 3.07; annual snow 10.8 in, Jan 3.4, Feb 3.1, Dec 2.8; Jul high
   *   88.6 F; Jan high 41.7 F; 41.0 days at or above 90 F; 90.4 nights at or below
   *   32 F; 15.7 days with a high at or below 32 F)
   *   Compared with FT WAYNE INTL AP (15.7 days at or above 90 F, 33.6 in snow) and
   *   SOUTH BEND MICHIANA RGNL AP (13.5 days, 64.5 in snow), same normals.
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (EVANSVILLE, IN, WBAN 93817: Jul 86/57, Aug 88/56, Sep 89/54, Oct 85/53,
   *   Jan 79/67, annual 83/58)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (EVANSVILLE annual 3.1, Mar 3.7 highest, Aug 2.2 lowest; INDIANAPOLIS
   *   annual 4.3, FORT WAYNE 4.1, SOUTH BEND 4.1)
   * Elevation is the NOAA station elevation, converted (121.9 m is about 400 ft).
   */
  {
    slug: 'dry-eye-relief-evansville-in',
    title: 'Dry eye relief in Evansville, Indiana',
    description:
      'Evansville is Indiana’s hot, humid river city, with about 41 days a year at 90°F. Why eyes still dry out there, and what helps through the seasons.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Evansville’s air is humid for much of the year, so dry eyes there are mostly an indoor and screen problem. NOAA’s records for Evansville Regional Airport show about 41 days a year at 90°F or hotter, which means long air-conditioning seasons, followed by about 90 freezing nights of furnace heat. Keep vents off your face, blink fully when you focus, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'A southern climate in a northern state' },
      {
        p: `Evansville sits in a wide bend of the Ohio River, in the lowest, warmest corner of Indiana. NOAA’s 1991 to 2020 normals for Evansville Regional Airport, north of downtown at about 400 feet, show how different that is from the rest of the state:`,
      },
      {
        list: [
          `About 41 days a year reach 90°F, against roughly 16 at Fort Wayne and 14 at South Bend.`,
          `Normal snowfall is 10.8 inches, a fraction of Fort Wayne’s 33.6 and South Bend’s 64.5.`,
          `Precipitation totals about 47.9 inches, with April (5.14) and May (5.12) the wettest months and August (3.07) the driest.`,
          `July highs average 88.6°F; January highs average 41.7°F.`,
        ],
      },
      { h: 'Humid outside, dry where you actually sit' },
      {
        p: `NOAA’s humidity table gives Evansville summer mornings in the high 80s: 86 percent in July, 88 in August, 89 in September. Afternoons drop to the mid 50s. That steamy river-valley air is why so much of an Evansville summer happens indoors, and why the air conditioner is the main thing drying your eyes. Cooling removes moisture, and vents and fans move the cooled air across your face. In a factory or warehouse, big circulation fans do the same on a larger scale.`,
      },
      {
        list: [
          `In the car on the Lloyd Expressway, aim vents at your chest instead of your eyes.`,
          `Keep a desk fan pointed at your body, not your face.`,
          `At night, set the ceiling fan to low or angle it away from the bed.`,
          `On shift, safety glasses with side shields block fan wash as well as debris.`,
        ],
      },
      { h: 'Calm air, still air' },
      {
        p: `One thing Evansville has going for it is calm. NOAA’s wind table shows Evansville with a lower annual average than Indianapolis, Fort Wayne or South Bend. Calm outdoor air is gentle on the tear film. The flip side is that in still, humid summer air, people crank fans and AC harder, so the breeze your eyes feel comes mostly from machines. March is the windiest month, worth remembering for spring yard work and early-season ball games at Bosse Field.`,
      },
      { h: 'October and the Fall Festival' },
      {
        p: `NOAA lists October afternoons at 53 percent humidity, Evansville’s lowest reading of the year. That month brings the West Side Fall Festival on Franklin Street, crowded with food booths, frying oil and grill smoke, plus high school football and walks on the riverfront. Smoke and cooking vapor irritate eyes, and long hours outdoors in drier, sunny air add up. Step out of the haze now and then, wear sunglasses in the afternoon sun, and blink deliberately when your eyes start to sting.`,
      },
      { h: 'Winter heat in the Ohio Valley' },
      {
        p: `Winters are short by Indiana standards but real: about 90 nights a year fall to freezing, and around 16 days stay below freezing all the way through the afternoon. The outdoor air stays fairly moist (January afternoons average 67 percent), but once heated indoors its relative humidity falls a long way. A bedroom humidifier, a few degrees lower on the thermostat at night, and keeping space heaters aimed at your feet all help. Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers settings and cleaning.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. Dosing is printed as: {directions}. To keep the dropper clean: {tip}.`,
      },
      {
        p: `The panel’s storage range: {storage}. A truck cab in a July parking lot climbs well past the top of that, so carry the bottle inside. If it ever looks different from when you opened it, the label says: {doNotUse}. See the whole panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Evansville' },
      {
        p: `We ship from Brentwood, Tennessee, to Evansville, Newburgh, Henderson across the river, and anywhere else in the US. Guest checkout is the only kind. Shipping is {shipping}, or free once you order {freeBottles} or more bottles. Tracking comes by email; delivery dates aren’t promised. You can get a refund on an unopened bottle within {returnDays} days of delivery, and you don’t ship it back. See the [Evansville page](/eye-drops/evansville-in) and the [Indiana page](/eye-drops/state/indiana).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Persistent dryness has causes that a drop can’t sort out. The label says: {stopUse} Pain, light sensitivity or blurred vision that doesn’t clear are reasons to book an exam. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) helps with timing.`,
      },
    ],
    faq: [
      {
        q: 'How many 90-degree days does Evansville get?',
        a: `About 41 a year at Evansville Regional Airport, in NOAA’s 1991 to 2020 normals. That’s far more than northern Indiana cities such as Fort Wayne or South Bend.`,
      },
      {
        q: 'How much snow does Evansville, Indiana get?',
        a: `About 10.8 inches in a normal year, according to NOAA. January (3.4 inches) and February (3.1) bring the most.`,
      },
      {
        q: 'Is Evansville humid?',
        a: `Yes, especially in summer mornings, which average 86 to 89 percent relative humidity from July through September in NOAA’s table. October afternoons are the least humid, at about 53 percent.`,
      },
      {
        q: 'Does Quell ship to Evansville?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Evansville and every other US address, with guest checkout and tracking by email. No arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-fort-wayne-in:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014827.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014827.csv
   *   (FT WAYNE INTL AP, elev 241.1 m: annual precip 39.48 in; May 4.58, Jun 4.48,
   *   Feb 2.06; annual snow 33.6 in, Jan 10.8, Feb 7.8, Dec 7.6; Jan high 32.6 F,
   *   Jan low 18.4 F; Jul high 84.1 F; 15.7 days at or above 90 F; 123.6 nights at
   *   or below 32 F; 39.7 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (FORT WAYNE, IN, WBAN 14827: May 77/54, Jun 79/54, Apr 78/55, Dec 84/74,
   *   Jan 82/72, annual 82/61)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (FORT WAYNE annual 4.1; Jan 4.9 highest; Aug 2.8 lowest)
   * Elevation is the NOAA station elevation, converted (241.1 m is about 790 ft).
   */
  {
    slug: 'dry-eye-relief-fort-wayne-in',
    title: 'Dry eye relief in Fort Wayne, Indiana',
    description:
      'Fort Wayne’s windiest month is January, and about 124 nights a year reach freezing. NOAA’s figures and practical dry eye relief, season by season.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Dry eye relief in Fort Wayne is mostly a winter project. NOAA’s records for Fort Wayne International Airport show about 124 freezing nights a year, nearly 40 days that never get above freezing, and January as the windiest month. That means long furnace seasons and cold wind outdoors. Humidify the bedroom, keep vents off your face, wear wraparound glasses in the wind, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Fort Wayne’s climate at a glance' },
      {
        p: `These figures come from NOAA’s 1991 to 2020 normals for Fort Wayne International Airport, southwest of the city at about 790 feet:`,
      },
      {
        list: [
          `About 39.5 inches of precipitation a year. May (4.58 inches) and June (4.48) are the wettest months; February (2.06) is the driest.`,
          `About 33.6 inches of snow, with January the snowiest at 10.8 inches.`,
          `January highs average 32.6°F and lows 18.4°F.`,
          `Summers are warm rather than hot: the July high averages 84.1°F, and only about 16 days a year reach 90°F.`,
        ],
      },
      { h: 'Where three rivers meet the wind' },
      {
        p: `The St. Joseph and St. Marys rivers join downtown to form the Maumee, and the land around them is flat, open farm country. NOAA’s wind table shows Fort Wayne at its windiest in January and calmest in August, with an annual average well above Evansville’s. In midwinter, that’s cold wind with nothing to slow it. Wind strips moisture from the surface of the eye, and cold air can make eyes water and then sting once the watering stops.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or ski goggles when clearing snow on a windy morning.`,
          `On a winter walk along the Rivergreenway, a scarf or neck gaiter pulled up under wraparound glasses closes the gap where wind gets in.`,
          `In a parking lot, turn your face away from gusts rather than squinting into them.`,
          `Bring the drops inside at night instead of leaving them in a frozen car.`,
        ],
      },
      { h: 'Five months of furnace air' },
      {
        p: `NOAA’s humidity table shows Fort Wayne’s outdoor air at its most humid in December and January, with afternoons around 72 to 74 percent. Indoors tells another story. Heating that cold air to room temperature drops its relative humidity dramatically, and in a city with about 40 days a year that stay below freezing, heat runs from fall to spring. Bedrooms, classrooms at Purdue Fort Wayne, and break rooms at manufacturing plants all dry out.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, cleaned on its maker’s schedule.`,
          `Lower the thermostat a few degrees at night; warmer air is drier air.`,
          `Point space heaters at your legs, never your face.`,
          `Keep your desk away from the floor register.`,
        ],
      },
      {
        p: `More room-by-room ideas are in our guide on [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
      { h: 'Late spring: the lowest afternoon humidity' },
      {
        p: `If any season feels dry outdoors, it’s May and June, when NOAA’s table puts afternoon humidity at 54 percent. Those are the months for planting gardens, Saturdays at the farmers market, paddling the rivers from Promenade Park, and TinCaps games at Parkview Field. Sun, breeze off the water, and hours of looking at a ball or a screen all strain the tear film. Sunglasses and a few deliberate, full blinks every so often make a difference.`,
      },
      { h: 'Dry eyes at work' },
      {
        p: `Plants, warehouses and distribution centers around Fort Wayne put many people in heated, fan-blown air with dust in it. Offices and hospitals add screens and cool, dry ventilation. If your eyes feel fine on Sunday and gritty by Friday, the job is part of the cause. Safety glasses with side shields help on the floor; at a desk, look away from the screen and blink often. Our guide on [dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) goes into plant conditions.`,
      },
      { h: 'Quell’s Drug Facts, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Its directions read: {directions}. It adds: {tip}.`,
      },
      {
        p: `Fort Wayne winters push one line in particular. The panel says: {storage}. A bottle left in a car on an 18-degree January night falls well below that range. Carry it in an inside pocket. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Fort Wayne' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Fort Wayne, New Haven, Huntertown and the rest of the US. You check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking link arrives by email, but there’s no promised delivery date. Unopened bottles qualify for a refund within {returnDays} days of delivery, and you keep them. See the [Fort Wayne page](/eye-drops/fort-wayne-in) and the [Indiana page](/eye-drops/state/indiana).`,
      },
      { h: 'When it’s time for an eye exam' },
      {
        p: `Recurring dryness is worth a doctor’s look, especially with pain, blurred vision or light sensitivity. The label says: {stopUse} The [self-check](/self-check) can help you put symptoms into words before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Fort Wayne get a year?',
        a: `About 33.6 inches in a normal year at Fort Wayne International Airport, in NOAA’s 1991 to 2020 normals. January is the snowiest month at 10.8 inches.`,
      },
      {
        q: 'What is the windiest month in Fort Wayne?',
        a: `January, in NOAA’s average wind speed table for the Fort Wayne station. August is the calmest.`,
      },
      {
        q: 'Why are my eyes so dry in Fort Wayne in the winter?',
        a: `Fort Wayne heats homes and workplaces for months, and heated winter air holds little moisture relative to its temperature. Cold January wind outside adds to it.`,
      },
      {
        q: 'Can I order Quell to Fort Wayne, Indiana?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Fort Wayne and every other US address. There’s no account needed, and tracking comes by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-south-bend-in:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014848.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014848.csv
   *   (SOUTH BEND MICHIANA RGNL AP, elev 235.6 m: annual precip 39.23 in; May
   *   4.20, Aug 4.01, Feb 2.31; annual snow 64.5 in, Jan 21.6, Feb 16.1, Dec 13.7,
   *   Mar 6.8, Nov 5.1; 20.3 days with 1 in or more of snowfall; 51.9 days with 1 in
   *   or more of snow on the ground; Jan high 31.2 F, Jan low 17.0 F; Jul high
   *   82.7 F; 13.5 days at or above 90 F; 126.4 nights at or below 32 F; 44.7 days
   *   with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SOUTH BEND, IN, WBAN 14848: Dec 83/74, Jan 82/73, Apr 76/54, May 76/54,
   *   annual 81/61)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SOUTH BEND annual 4.1; Jan 4.8 highest; Aug 3.0 lowest)
   * Elevation is the NOAA station elevation, converted (235.6 m is about 770 ft).
   * The station is the airport NOAA lists as Michiana Regional, now South Bend
   * International Airport.
   */
  {
    slug: 'dry-eye-relief-south-bend-in',
    title: 'Dry eye relief in South Bend, Indiana',
    description:
      'South Bend averages 64.5 inches of snow a year, much of it lake-effect. What snow glare, wind and furnace air do to dry eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `South Bend’s dry-eye season is its snow season. NOAA’s normals for the city’s airport show 64.5 inches of snow a year, about 52 days with snow on the ground, and January as the windiest month. Cold wind, bright snow glare and months of furnace air all pull moisture from the eyes. Wear goggles or wraparound glasses outdoors, humidify indoors, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Lake-effect country, by the numbers' },
      {
        p: `South Bend sits a short drive from the southern end of Lake Michigan, close enough that cold winds crossing the open water drop lake-effect snow on the city. NOAA’s 1991 to 2020 normals, from the airport it lists as Michiana Regional (now South Bend International), at about 770 feet, show the result:`,
      },
      {
        list: [
          `About 64.5 inches of snow in a normal year, nearly double Fort Wayne’s total.`,
          `January brings 21.6 inches, February 16.1 and December 13.7.`,
          `About 20 days a year get an inch or more of new snow, and about 52 days have at least an inch on the ground.`,
          `Roughly 126 nights fall to freezing, and about 45 days stay below freezing from morning to night.`,
          `Precipitation totals about 39.2 inches, with February the driest month.`,
        ],
      },
      { h: 'Snow glare and squinting' },
      {
        p: `Fresh snow reflects a great deal of sunlight. On a clear morning after a lake-effect band moves through, the glare off a driveway or a parking lot makes nearly everyone squint. Squinting narrows the eye but isn’t a real blink, so the tear film isn’t refreshed while you’re doing it, and cold air keeps pulling moisture away. Shoveling also means looking down at bright snow for half an hour at a time.`,
      },
      {
        list: [
          `Wear sunglasses or tinted goggles for shoveling and snowblowing on sunny days.`,
          `Take short breaks indoors and blink slowly a few times.`,
          `If a snowblower throws powder back at you, goggles help more than glasses.`,
          `Warm up indoors before driving, so watery eyes settle first.`,
        ],
      },
      { h: 'January wind and the drive in' },
      {
        p: `NOAA’s wind table puts South Bend’s highest average wind in January and its lowest in August. Winter commutes on the US 20 bypass or the Toll Road can mean squalls, blowing snow and hours with the defroster roaring. That hot, dry air aimed at the windshield also spills across your face. Point dashboard vents at the glass and your feet, and use the lowest fan speed that keeps the windshield clear. Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) covers car heat in more detail.`,
      },
      { h: 'Game days on campus' },
      {
        p: `Late-season Notre Dame home games can put tens of thousands of people in a cold stadium for hours. Spectators stare at the field, blink less, and sit in whatever wind comes across the stands. Tailgating adds grill smoke. Sunglasses help in daylight, and a hood or brimmed hat blocks wind from above. Look away from the field and blink between plays. [Dry eyes at an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) has a full checklist.`,
      },
      { h: 'Indoors: humid outside, dry inside' },
      {
        p: `NOAA lists December afternoons at 74 percent humidity and January at 73, the most humid afternoons of South Bend’s year. That cold, moist air doesn’t stay moist when it’s heated, though. Its relative humidity drops sharply once it reaches room temperature, which is why dorms, offices and older houses near the St. Joseph River can feel desert-dry all winter. A bedroom humidifier and keeping heat vents off your face are the two changes most people notice.`,
      },
      { h: 'What the label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives these Uses: {uses}. The directions are: {directions}. One rule for the dropper: {tip}.`,
      },
      {
        p: `Storage, as printed: {storage}. On a 17-degree January night, a car is far colder than that, so take the bottle inside. Everything else on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to South Bend' },
      {
        p: `We ship from Brentwood, Tennessee, to South Bend, Mishawaka, Granger and every other US address. Guest checkout only; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, though we can’t promise a delivery date, especially during a lake-effect storm. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [South Bend page](/eye-drops/south-bend-in) and the [Indiana page](/eye-drops/state/indiana).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If your eyes stay dry once the snow melts, or hurt, or blur, see an eye doctor. The label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does South Bend get a year?',
        a: `About 64.5 inches in a normal year, according to NOAA’s 1991 to 2020 normals for the South Bend airport. January averages 21.6 inches, the most of any month.`,
      },
      {
        q: 'Why does South Bend get so much snow?',
        a: `It sits close to the southern end of Lake Michigan. Cold air crossing the open lake picks up moisture and drops it as lake-effect snow on the land downwind.`,
      },
      {
        q: 'Can snow glare make your eyes feel dry?',
        a: `It can add to it. Bright reflected light makes people squint instead of blinking fully, and cold winter air is already pulling moisture from the eyes. Sunglasses or tinted goggles help.`,
      },
      {
        q: 'Does Quell ship to South Bend, Indiana?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to South Bend and anywhere else in the US. Checkout is as a guest, and tracking arrives by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16 for dry-eye-relief-rockford-il:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094822.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094822.csv
   *   (ROCKFORD GTR ROCKFORD AP, elev 222.5 m: annual precip 37.24 in; Jun 5.23,
   *   Jan 1.60, Feb 1.63; annual snow 37.1 in, Jan 10.9, Dec 9.4, Feb 8.5; Jan high
   *   29.1 F, Jan low 14.5 F; Jul high 83.9 F; 14.8 days at or above 90 F; 135.8
   *   nights at or below 32 F; 50.0 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ROCKFORD, IL, WBAN 94822: Apr 79/53, May 80/54, Dec 83/72, Jan 80/71,
   *   annual 83/60)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ROCKFORD annual 4.1; Apr 4.9 highest, Mar 4.8; Aug 3.0 lowest)
   * Elevation is the NOAA station elevation, converted (222.5 m is about 730 ft).
   * NOAA lists the station as Greater Rockford Airport, now Chicago Rockford
   * International Airport.
   */
  {
    slug: 'dry-eye-relief-rockford-il',
    title: 'Dry eye relief in Rockford, Illinois',
    description:
      'Rockford has about 136 freezing nights a year and a windy, low-humidity April. NOAA’s figures, and practical ways to ease dry eyes at home and work.',
    category: 'local',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Rockford’s cold season is long, and that’s when most dry eyes show up. NOAA’s normals for the city’s airport list about 136 freezing nights and 50 days that stay below freezing, followed by a windy April with the year’s lowest afternoon humidity. Humidify heated rooms, block winter and spring wind with wraparound glasses, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Rockford’s weather, from NOAA' },
      {
        p: `NOAA’s 1991 to 2020 normals come from the airport south of the city that NOAA lists as Greater Rockford Airport (now Chicago Rockford International), at about 730 feet near the Rock River:`,
      },
      {
        list: [
          `About 37.2 inches of precipitation a year. June is the wettest month at 5.23 inches; January (1.60) and February (1.63) are the driest.`,
          `About 37.1 inches of snow, led by January at 10.9 inches and December at 9.4.`,
          `January highs average 29.1°F and lows 14.5°F.`,
          `Roughly 136 nights a year reach freezing, and 50 days never get above it.`,
          `Summers are mild: the July high averages 83.9°F, with about 15 days at 90°F or more.`,
        ],
      },
      { h: 'The driest months are the coldest ones' },
      {
        p: `January and February bring the least precipitation of the year in Rockford, and they’re also the months when the furnace works hardest. The outdoor air in those months is humid relative to its temperature (NOAA’s table lists January afternoons at 71 percent), but bitterly cold air can’t hold much water in absolute terms. Heat it to 70 degrees indoors and its relative humidity falls steeply. That’s why lips crack, static sparks fly, and eyes feel gritty by evening in a Rockford winter.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom through the heating season, and clean it as directed.`,
          `Turn the heat down a few degrees at night.`,
          `Keep floor registers and baseboard heat from blowing straight up at your chair.`,
          `Aim car heater vents at the windshield and floor on the drive in.`,
        ],
      },
      {
        p: `Our guide on [dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains the physics in plain terms.`,
      },
      { h: 'Windy springs on the prairie' },
      {
        p: `In NOAA’s wind table, April is Rockford’s windiest month, March is a close second, and August is the calmest. April also has the lowest afternoon humidity of the year, about 53 percent. Put those together and spring is when the outdoor air works hardest on the eyes: brisk wind, lower humidity, and people finally getting outside for yard cleanup, golf, or a walk through Rock Cut State Park. Wraparound sunglasses and a brimmed hat do more than you’d expect.`,
      },
      { h: 'Dry eyes at work in a manufacturing town' },
      {
        p: `Rockford has a long history of machine shops, tool makers and aerospace manufacturing. Shop floors bring cutting fluid mist, metal dust and big circulation fans; quality and engineering offices bring screens. Both cut down on comfortable, regular blinking. Safety glasses with side shields block airborne debris and fan wash. At a monitor, look away every so often and close each blink fully. If you commute on I-90, hours of road-watching and heater air add to the strain.`,
      },
      { h: 'Is it bad to use eye drops before bed?' },
      {
        p: `People in heated houses often notice dry eyes most at night, and wonder whether to use a drop just before sleep. Quell’s label gives directions for daily use but doesn’t address bedtime specifically. Our guide [can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed) covers what the label says and where to ask your eye doctor.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts Uses: {uses}. Directions: {directions}. And for hygiene: {tip}.`,
      },
      {
        p: `The storage line: {storage}. A Rockford winter takes a parked car far below that range, so bring the bottle in rather than leaving it in the cupholder. If it’s ever swallowed, the label says: {swallowed}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Rockford' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Rockford, Loves Park, Machesney Park, Belvidere and every other US address. Check out as a guest. Shipping is {shipping}; buy {freeBottles} or more bottles and it’s free. We email tracking, but no delivery date is promised. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t return it. The [Rockford page](/eye-drops/rockford-il) and the [Illinois page](/eye-drops/state/illinois) have more.`,
      },
      { h: 'Signs to see an eye doctor' },
      {
        p: `If dryness persists after you’ve dealt with the furnace air, or comes with pain, blurred vision or light sensitivity, see an eye doctor. The label puts it plainly: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How cold does Rockford, Illinois get in winter?',
        a: `January lows average 14.5°F and highs 29.1°F at the Rockford airport, in NOAA’s 1991 to 2020 normals. About 50 days a year never get above freezing.`,
      },
      {
        q: 'How much snow does Rockford get?',
        a: `About 37.1 inches in a normal year, according to NOAA. January (10.9 inches) and December (9.4) are the snowiest months.`,
      },
      {
        q: 'What is the windiest month in Rockford?',
        a: `April, closely followed by March, in NOAA’s average wind speed table for the Rockford station. August is the calmest.`,
      },
      {
        q: 'Does Quell ship to Rockford, IL?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Rockford and all other US addresses, with guest checkout and email tracking. Delivery dates aren’t promised.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-16 for dry-eyes-at-a-winter-wedding:
   * - TSA liquids figure (3.4 oz / 100 mL) as already used on the site in
   *   2026-11-11-c.ts; no new external facts.
   */
  {
    slug: 'dry-eyes-at-a-winter-wedding',
    title: 'Dry eyes at a winter wedding',
    description:
      'Cold-wind portraits, a heated reception hall and a dance floor that runs past midnight. How to keep your eyes comfortable through a winter wedding.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `A winter wedding is hard on dry eyes because it stacks cold wind during outdoor photos, dry forced-air heat in the hall, and a long, late night. Keep outdoor portraits short and shoot with your back to the wind, sit away from heat vents, plan any eye drops into the getting-ready schedule before makeup, and carry the bottle in a pocket, not a cold car.`,
      },
      { h: 'Why a winter wedding day is rough on the tear film' },
      {
        p: `Your eyes stay comfortable when a thin tear film, with an oily outer layer over a watery one, coats the surface between blinks. Almost everything about a December or January wedding pushes against it. Cold air and wind speed evaporation outside. Indoors, heated air has low relative humidity. Then there are hours of looking at one thing (a camera, a vow book, a crowded room) with fewer blinks, plus a schedule that starts early and ends late. None of that means you’ll be miserable, but it’s worth planning for the way you’d plan for cold hands.`,
      },
      { h: 'Outdoor photos in the cold' },
      {
        p: `Portraits outside on a snowy lawn or a downtown street are often the coldest, windiest part of the day. People stand still, stare toward a lens, and try not to blink. A few changes help everyone in the shot:`,
      },
      {
        list: [
          `Ask the photographer for a tight shot list outside and the rest indoors, by a window.`,
          `Stand with your back to the wind when the light allows; turning your face into a gust is what makes eyes water and sting.`,
          `Between frames, close your eyes for a few seconds instead of holding them open.`,
          `Keep sunglasses in a groomsman’s pocket for walking between locations on bright, snowy days.`,
          `Go indoors and let watering settle before the next set of photos rather than dabbing at it.`,
        ],
      },
      {
        p: `Snow on the ground also reflects bright light, which makes people squint. A squint isn’t a blink and doesn’t refresh the tear film, so short breaks out of the glare matter. Our guide on [dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains what happens in the cold in more detail.`,
      },
      { h: 'Eye drops before or after a shower on the wedding morning' },
      {
        p: `The getting-ready suite is usually a warm hotel room with hair dryers, curling irons and a dozen people. Steam from the shower briefly raises humidity; hot styling tools and the room’s heater bring it right back down. If you plan to use a lubricating drop that morning, our guide on [eye drops before or after a shower](/guides/eye-drops-before-or-after-a-shower) covers that question on its own. Keep your face out of the line of a blow dryer, too.`,
      },
      { h: 'Fitting drops around makeup' },
      {
        p: `Makeup timing has its own guide, [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup), so here’s only the wedding-day logistics. Tell your makeup artist ahead of time that you use eye drops, so it’s built into the schedule instead of squeezed in at the last minute. Use your own bottle, never one passed around the bridal suite, and keep it away from shared brushes and palettes. If your eyes tend to water in the cold, mention that too; it may change what goes on your lower lashes.`,
      },
      { h: 'The heated reception hall' },
      {
        p: `Barns, ballrooms and historic halls all heat differently, and none of them add moisture. A table right under a ceiling vent or next to a patio heater can leave guests rubbing their eyes by the second course. Fog or haze machines on the dance floor, candles and a busy bar add to the mix.`,
      },
      {
        list: [
          `If you’re seating the room, keep the head table away from heater outlets and space heaters.`,
          `As a guest, swap seats with someone if a vent blows across your face; most people won’t mind.`,
          `Step outside or into a quieter hallway now and then to rest your eyes.`,
          `Don’t rub your eyes through mascara; blinking slowly does more good and smears less.`,
        ],
      },
      { h: 'Dry eyes at night: the late reception' },
      {
        p: `By eleven o’clock, the tear film has spent hours in dry air and your blink rate has dropped with fatigue. Tired eyes and dry eyes feel alike, and they tend to show up together late in a celebration. If you’re traveling home afterward, give your eyes a few minutes indoors before a cold drive, and point the car’s heater vents at the windshield and floor rather than your face. The same goes for the after-party in a heated hotel room. Our guide on [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) explains the link with fatigue.`,
      },
      { h: 'What to pack in the emergency kit' },
      {
        list: [
          `Your own bottle of lubricating drops, in a pocket or clutch rather than a bag left in the car.`,
          `Clean tissues for blotting under the eye without rubbing.`,
          `Sunglasses for daytime photos in snow.`,
          `Glasses as a backup if you normally wear contacts.`,
        ],
      },
      {
        p: `Flying to the wedding? TSA allows eye drops in carry-on bags in containers of 3.4 ounces (100 milliliters) or less, and a bottle of Quell holds {size}. If you wear contact lenses, note that Quell’s label doesn’t give directions for use with contacts. Ask your eye doctor or pharmacist before the trip rather than on the day.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts Uses: {uses}. The directions: {directions}. Its handling rule: {tip}. Storage: {storage}, which a car parked outside a January reception can easily drop below.`,
      },
      {
        p: `Ordering for the wedding party? Shipping is {shipping}, or free on {freeBottles} or more bottles, and orders ship from Brentwood, Tennessee, to US addresses only. We don’t promise delivery dates, so order well before the day. Unopened bottles can be refunded within {returnDays} days of delivery. You can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor first' },
      {
        p: `If your eyes have been bothering you for weeks, see an eye doctor before the wedding, not after. The label’s limit: {stopUse} Pain or blurred vision on the day itself is a reason to get help, not to push through.`,
      },
    ],
    faq: [
      {
        q: 'How do I keep my eyes from watering in cold wedding photos?',
        a: `Keep outdoor portraits short, stand with your back to the wind when the light allows, and close your eyes between frames. Go inside and let watering settle before the next set rather than dabbing at it.`,
      },
      {
        q: 'Can I use eye drops on my wedding day?',
        a: `If you already use a lubricating drop, plan it into the getting-ready schedule before makeup, and use your own bottle. Follow the label’s directions; if your eyes have been troubling you, see an eye doctor well before the day.`,
      },
      {
        q: 'Why do my eyes feel dry at wedding receptions?',
        a: `Reception halls in winter run forced-air heat with low humidity, and tables near vents or patio heaters get a steady stream of it. Long hours, fog machines and late nights add to the strain.`,
      },
      {
        q: 'Can I bring eye drops in my carry-on for a destination wedding?',
        a: `TSA allows eye drops in carry-on bags in containers of 3.4 ounces (100 milliliters) or less. A bottle of Quell holds {size}.`,
      },
    ],
  },
  {
    slug: 'screen-time-new-years-resolution',
    title: 'A screen-time New Year’s resolution for dry eyes',
    description:
      'Turn “less screen time” into habits your eyes notice: scheduled breaks, full blinks, a better monitor setup and a phone-free last hour of the night.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `A screen-time New Year’s resolution for dry eyes works when it’s specific: take a short break from the screen at set times, practice full blinks, lower your monitor slightly, keep vents and fans off your face, and put the phone down for the last stretch before sleep. These habits target the reduced, incomplete blinking that screens cause. If dryness continues despite them, see an eye doctor.`,
      },
      { h: 'Why screens and dry eyes go together' },
      {
        p: `Blinking is how the eye renews its tear film: each blink spreads a fresh layer of oil, water and mucus across the surface. When you concentrate on a screen, you blink less often, and many blinks don’t close all the way. Between those blinks, the film thins and evaporates. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) covers the mechanics. This one is about habits that stick past the second week of January.`,
      },
      { h: 'Make the resolution something you can check off' },
      {
        p: `“Less screen time” fails because it’s vague and fights with work you can’t skip. Rules tied to specific moments do better, because they don’t require willpower in the middle of a task. Pick two or three from this list rather than all of them:`,
      },
      {
        list: [
          `When a meeting ends, look out a window or across the room for half a minute before opening the next file.`,
          `Every time you send an email, close your eyes gently for two seconds, then open them.`,
          `When you sit down at your desk, check that the vent or fan isn’t blowing on your face.`,
          `When you get into bed, the phone goes on the charger across the room.`,
          `When you start a show, sit far enough from the TV that you aren’t staring up at it.`,
        ],
      },
      { h: 'Practice the full blink' },
      {
        p: `A partial blink leaves the lower part of the eye uncovered, and that strip dries first. Practicing complete blinks a few times a day helps them become a habit at the screen. Close your eyes normally, pause briefly with them closed, then open. Do a handful of these during each break. It feels odd for a few days, which is a sign you weren’t closing fully before.`,
      },
      { h: 'Set up the desk once, and stop thinking about it' },
      {
        list: [
          `Lower the monitor so the top of the screen sits at or slightly below eye level. Looking a little down means your lids cover more of the eye.`,
          `Push the screen to roughly arm’s length.`,
          `Match screen brightness to the room so you’re not squinting at a bright rectangle in a dim office.`,
          `Turn up text size instead of leaning in.`,
          `Move a desk fan or space heater so it points at your body, not your face.`,
        ],
      },
      { h: 'Dry eyes at work: shared offices and long calls' },
      {
        p: `At an office, you may not control the thermostat or the vent above your desk, but you can often control where you sit. A desk away from the supply diffuser makes a difference. On long video calls, turning your camera off for a few minutes lets you look away without seeming distracted. If your eyes feel fine on weekends and dry by Friday, that pattern is worth mentioning to an eye doctor.`,
      },
      { h: 'Dry eyes at night and the phone in bed' },
      {
        p: `A phone held close in a dark bedroom combines the screen problem with a heated, often dry room at the end of a long day. A resolution as simple as charging the phone outside arm’s reach covers a lot. If you read before sleep, a paper book or an e-reader at a comfortable distance asks less of your blink rate than scrolling. Whether to use a drop right before bed is a separate question, covered in [can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed)`,
      },
      { h: 'Dry eyes when tired' },
      {
        p: `Fatigue and dry eyes feed each other. When you’re tired, you blink less completely and rub your eyes more, and the end of a long screen day is when eyes feel grittiest. Some of the benefit of a screen-time resolution comes from going to bed earlier. If New Year’s Eve left you short on sleep, our [New Year’s Eve guide](/guides/new-years-eve-and-dry-eyes) deals with that night; this resolution is about the other 364.`,
      },
      { h: 'Keeping it going past January' },
      {
        list: [
          `Tie each habit to something you already do (coffee, sending a file, a meeting ending).`,
          `Track it on paper for three weeks, then stop tracking and see what stuck.`,
          `If a rule keeps failing, change the trigger rather than dropping the goal.`,
          `Tell a coworker; shared breaks are easier to keep.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `A drop doesn’t replace breaks or blinking, but it can be part of the routine. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions are: {directions}. Follow them as written, and keep the tip clean: {tip}. Shipping is {shipping}, or free on {freeBottles} or more bottles, and you can [see the label](/drug-facts) before you buy.`,
      },
      { h: 'When habits aren’t enough' },
      {
        p: `If your eyes stay dry after weeks of better habits, or you have pain, light sensitivity or blurred vision, see an eye doctor. The label is clear about stopping: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is a good New Year’s resolution for eye health?',
        a: `Pick specific screen habits you can check off: a short look away from the screen at set moments, full blinks during breaks, a lower monitor, and no phone in bed. Booking a routine eye exam is another concrete one.`,
      },
      {
        q: 'How do I remember to blink more at the computer?',
        a: `Tie blinking to something you already do, like sending an email or ending a meeting, and practice a few slow, complete blinks during each break until it becomes a habit.`,
      },
      {
        q: 'Does reducing screen time help dry eyes?',
        a: `It can, because screens reduce how often and how completely you blink. Regular breaks, full blinks and a better desk setup often help even when total screen time can’t change.`,
      },
      {
        q: 'Should I stop using my phone in bed for dry eyes?',
        a: `Charging the phone outside arm’s reach is a simple change. A screen held close in a dark, heated bedroom cuts blinking at the end of a long day, when eyes are already tired.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-mechanic',
    title: 'Christmas gifts for a mechanic',
    description:
      'Gift ideas for a mechanic who works in a cold, dusty shop with heaters running: better eye protection, light, clean hands and a bottle of Quell.',
    category: 'seasonal',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Good Christmas gifts for a mechanic make a cold, dusty shop easier on the body, eyes included. Think sealed safety glasses that block wind and grit, a bright headlamp or work light so they aren’t squinting under a dash, a heater they can aim at their legs, good hand cleaner and clean shop towels, and a bottle of lubricating eye drops like Quell for the stocking.`,
      },
      { h: 'What winter does to a mechanic’s eyes' },
      {
        p: `In December, a shop is a mix of cold drafts from the bay doors, hot, dry air from heaters, and dust from brakes, grinding and sweeping. Add hours of staring into an engine bay or under a car, where people concentrate hard and blink less. [Dry eyes for auto mechanics](/guides/dry-eyes-for-mechanics) covers the work itself. This list is about gifts that help with it.`,
      },
      { h: 'Safety glasses they’ll actually wear' },
      {
        p: `Most mechanics own safety glasses. Fewer own a pair comfortable enough to leave on. A good upgrade:`,
      },
      {
        list: [
          `Wraparound glasses with a foam gasket or seal, which block drafts and fine dust along with flying debris.`,
          `Anti-fog lenses, since cold shops and warm breath fog ordinary lenses and people push them up on their heads.`,
          `Prescription safety glasses, if they wear glasses already; check with their eye doctor or optician for an exam and fitting.`,
          `A second pair with tinted lenses for road tests on bright, snowy days.`,
        ],
      },
      {
        p: `Check what their shop requires before you buy; some employers specify safety ratings or brands. Fit matters as much as the lens, so a gift receipt is wise.`,
      },
      { h: 'Light, so they stop squinting' },
      {
        p: `Squinting into a dark wheel well isn’t a blink, and it adds strain on long jobs. A bright, rechargeable headlamp, a magnetic underhood light bar, or a flexible inspection light puts the light where the work is. Look for adjustable brightness: a light aimed into chrome or shiny paint can glare right back.`,
      },
      { h: 'Heat that doesn’t blow in their face' },
      {
        p: `Shop heaters keep hands working but dry the air fast, especially when one sits by the bench and blows across the face. A radiant heater with a tilting head can be aimed at the legs instead. If they already have one, a heater stand or wall bracket that holds it lower can be just as useful. Our guide on [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains why the direction of the air matters.`,
      },
      { h: 'Clean hands, clean eyes' },
      {
        p: `Mechanics rub their eyes with dirty knuckles because there’s no clean surface nearby. Gifts that fix that:`,
      },
      {
        list: [
          `A good pumice or citrus hand cleaner for the shop sink.`,
          `A stack of lint-free shop towels or microfiber cloths kept separate for faces and glasses.`,
          `A small pack of tissues for the toolbox drawer.`,
          `Nitrile gloves in their size, so hands stay cleaner to begin with.`,
        ],
      },
      { h: 'Stocking stuffers' },
      {
        list: [
          `A bottle of Quell, in the stocking or in the lunch box.`,
          `Lens wipes for safety glasses.`,
          `A hand warmer pack for the cold drive in.`,
          `A small zip pouch to keep drops and lens wipes away from grease.`,
        ],
      },
      { h: 'Is Quell a good fit for the shop?' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions are printed as: {directions}. Two lines matter for a mechanic. The first: {tip}. The second is storage: {storage}. A truck left outside a shop on a January night falls well below that, so the bottle belongs indoors.`,
      },
      {
        p: `Remind them to wash their hands before using drops, and that a drop isn’t for something that has gotten into the eye. A metal shaving, a chemical splash or anything that hurts is a job for an eye doctor or emergency care, not a lubricating drop. The label says: {stopUse}`,
      },
      { h: 'Ordering it as a gift' },
      {
        p: `You can ship a bottle straight to the shop or their home address, or to yourself to wrap. Our guide on [sending Quell as a gift](/guides/sending-quell-as-a-gift) explains whose details go where at checkout. Shipping is {shipping}, or free with {freeBottles} or more bottles, and orders ship from Brentwood, Tennessee, to US addresses. There’s no promised delivery date, so order early in December. Unopened bottles can be refunded within {returnDays} days of delivery.`,
      },
      { h: 'Gifts to skip' },
      {
        p: `Skip anything that promises to fix eyes on its own, and skip products marketed for contact lens wearers unless you know they wear contacts and their eye doctor recommends it; Quell’s label doesn’t cover contact lens use. If they mention eye pain or blurry vision, the most useful gift may be nudging them to book an eye exam.`,
      },
    ],
    faq: [
      {
        q: 'What do mechanics want for Christmas?',
        a: `Practical things they’ll use daily: comfortable sealed safety glasses, a bright rechargeable headlamp or underhood light, a heater they can aim at their legs, good hand cleaner, and stocking stuffers like lens wipes and eye drops.`,
      },
      {
        q: 'What safety glasses are good for dusty shops?',
        a: `Wraparound glasses with a foam seal block fine dust and drafts better than open frames, and anti-fog lenses help in cold shops. Check whether the shop requires a particular safety rating first.`,
      },
      {
        q: 'Can I ship Quell to a repair shop as a gift?',
        a: `Yes, any US address works, including a business. Put the recipient’s name and the shop address in the shipping fields and your email in the email field.`,
      },
      {
        q: 'Should mechanics use eye drops after getting debris in their eye?',
        a: `No. A lubricating drop isn’t for metal, chemicals or debris in the eye. Get prompt care from an eye doctor or emergency room instead.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-caregivers',
    title: 'Dry eyes for caregivers',
    description:
      'Broken sleep, hospital rooms and late nights on a phone wear on a caregiver’s own eyes. Practical ways to look after yours while you look after someone else.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Caregivers often get dry eyes from the conditions of the job: broken sleep, long hours in dry hospital or care-facility air, and late nights reading updates on a phone. Look after your own eyes by sitting away from vents, taking screen breaks, blinking fully, keeping your own bottle of lubricating drops separate from the patient’s, and seeing your eye doctor if it doesn’t ease.`,
      },
      { h: 'Your eyes count too' },
      {
        p: `Caring for a parent, a partner or a child with a serious illness means your own needs slide down the list. Eyes are an easy one to ignore until they’re gritty every evening. This guide is about the caregiver’s eyes, not the patient’s. If you’re the one putting drops into someone else’s eyes, our guide on [how to put eye drops in someone else’s eyes](/guides/how-to-put-eye-drops-in-someone-elses-eyes) covers technique.`,
      },
      { h: 'Dry eyes when tired' },
      {
        p: `Waking up to help with medicines, turns or bathroom trips breaks sleep into short pieces. Tired eyes blink less completely, and you’re more likely to rub them. Short nights also mean longer days with your eyes open. You can’t always fix the sleep, but you can protect the hours you do get:`,
      },
      {
        list: [
          `Keep the bedroom cool and the heater or fan off your face.`,
          `Use a dim night light instead of switching on overhead lights for night checks.`,
          `If another family member can cover one night a week, take it.`,
          `Close your eyes for a few minutes while you wait, even when you can’t nap.`,
        ],
      },
      {
        p: `Our guide on [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) goes into the link between fatigue and dryness.`,
      },
      { h: 'Hospital rooms and waiting rooms' },
      {
        p: `Hospitals and care facilities keep their air tightly controlled, and it often feels dry. Visitor chairs end up wherever there’s space, sometimes right under a supply vent. You might sit there for ten hours, watching a monitor or reading forms, blinking less than usual.`,
      },
      {
        list: [
          `Move the visitor chair out of the direct airflow if staff don’t mind.`,
          `Step into the hallway or outside every hour or so, and look at something far away.`,
          `Keep a small bag with tissues, a bottle of your own lubricating drops, and your glasses if you wear contacts.`,
          `Wash your hands before touching your eyes; you’ve likely touched rails, doors and phones.`,
        ],
      },
      { h: 'Dry eyes at night with a phone in your hand' },
      {
        p: `Caregivers spend late nights on phones: texting siblings, reading test results, searching for answers, filling in portal forms. A small, bright screen held close in a dark room is one of the harder setups for the tear film. Make the text bigger, turn the brightness down, and hold the phone a little lower and farther away. Put it down for a few minutes and close your eyes between messages. If you’re wondering about using a drop just before sleep, see [can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed)`,
      },
      { h: 'Driving to appointments' },
      {
        p: `Many caregivers spend hours on the road between home, clinics, pharmacies and the hospital. Car heaters and air conditioning push dry air at your face, and watching traffic cuts your blink rate. Point the vents at the windshield or your chest, take a break on long drives, and never put drops in while the car is moving.`,
      },
      { h: 'Keep your bottle separate' },
      {
        p: `Quell’s label has a clear handling rule: {tip}. In a caregiving house, that also means one bottle per person. Don’t use your bottle in someone else’s eyes, and don’t use theirs. Label your bottle or keep it in a different place, so nobody grabs the wrong one in the middle of the night.`,
      },
      {
        p: `If the person you care for already uses prescription or other eye drops, Quell’s label doesn’t give directions for using it alongside them. Ask their doctor or pharmacist before adding anything. The same goes for children and for anyone who wears contact lenses.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, as printed on the Drug Facts panel: {uses}. The directions: {directions}. It also cautions: {warnings}. Storage is {storage}, so keep a spare bottle in the house rather than a cold or hot car. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If ordering is easier than another trip to the pharmacy, you can check out as a guest; shipping is {shipping}, or free on {freeBottles} or more bottles. We ship from Brentwood, Tennessee, to US addresses, without a promised delivery date. If someone else’s eyes are the concern, our guide on [eye drops for older adults](/guides/eye-drops-for-older-adults) lists what to check first.`,
      },
      { h: 'Don’t skip your own eye exam' },
      {
        p: `Caregivers postpone their own appointments for months. If your eyes stay dry, hurt, or your vision blurs, see an eye doctor. The label says: {stopUse} A short visit for yourself is part of being able to keep going for someone else.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry after a long day at the hospital?',
        a: `Hospital air is tightly controlled and often dry, visitor chairs can sit under vents, and long hours watching monitors or reading cut your blink rate. Moving out of the airflow and taking regular breaks help.`,
      },
      {
        q: 'Can caregivers share eye drops with the person they care for?',
        a: `No. Use one bottle per person. Quell’s label says not to touch the tip to any surface, and sharing a bottle between two people works against that.`,
      },
      {
        q: 'How can I look after my eyes while caring for someone?',
        a: `Protect the sleep you do get, sit away from vents, put the phone down regularly at night, wash your hands before touching your eyes, and keep your own eye appointments.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-real-estate-agents',
    title: 'Dry eyes for real estate agents',
    description:
      'Car vents between showings, vacant homes with the heat off or blasting, dusty new builds and late-night screens. How agents can keep their eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Real estate agents get dry eyes from a workday split between the car, other people’s houses and a screen. Car vents blow dry air for hours, vacant homes swing from unheated to overheated, new construction is dusty, and contracts get read at night on a phone. Aim vents away from your face, wear glasses on job sites, take screen breaks, and keep a bottle of lubricating drops in your bag.`,
      },
      { h: 'Why the job is hard on your eyes' },
      {
        p: `Comfortable eyes depend on a tear film that blinking spreads over the surface many times a minute. Dry, moving air speeds its evaporation, and concentrating on a road or a screen slows blinking. An agent’s week has a lot of both. It isn’t one big exposure, but dozens of small ones: twelve short drives, six houses, three hours of email.`,
      },
      { h: 'Driving between showings' },
      {
        p: `Many agents put more miles on the car than they spend in the office. Heater air in winter and air conditioning in summer both come out of dashboard vents aimed at face height. Over a day of short hops, that’s hours of dry air across your eyes.`,
      },
      {
        list: [
          `Point the center vents at the windshield or your chest, and close the one nearest your face.`,
          `Use the lowest fan speed that keeps the windows clear.`,
          `Park, then check messages; reading a phone at a red light is hard on your eyes and your safety.`,
          `Never put drops in while driving. Do it parked, before you pull out.`,
        ],
      },
      {
        p: `Our guide on [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more on defrosters and heater settings.`,
      },
      { h: 'Vacant homes: too cold, then too hot' },
      {
        p: `A vacant listing in January may have the thermostat set low to save money, so you walk in and turn it up for a showing, and the furnace blasts dry air through every register. Cold, still rooms can leave eyes fine for a few minutes; then forced air arrives at the vent beside the kitchen island where you stand to talk. Stand away from registers while you talk with buyers. If the home has been closed up for weeks, dust settles everywhere and the first run of the furnace stirs it up.`,
      },
      { h: 'Open houses' },
      {
        p: `Open houses mean hours in one place, often with candles, plug-in diffusers or a fireplace running for atmosphere. All of these add particles or heat to the air. Skip lit candles, keep the fireplace for photos, and open a window for a few minutes between groups if the weather allows. A seat near the door and away from heat vents helps on a long Sunday.`,
      },
      { h: 'New construction and job sites' },
      {
        p: `Walking a build with clients means drywall dust, sawdust and wind through open framing. Clear safety glasses protect against grit and also block the breeze. Builders often have spares at the site trailer. Afterward, wash your hands before touching your eyes, and blink a few times rather than rubbing if something feels gritty. Anything that stays stuck or hurts needs an eye doctor, not a drop.`,
      },
      { h: 'Dry eyes at work at the screen' },
      {
        p: `Listings, MLS searches, disclosures, e-signatures, CMAs and texts mean a lot of screen time, much of it on a phone. When you focus, you blink less, and small screens tempt you to hold them close. A few habits help:`,
      },
      {
        list: [
          `Do paperwork on a laptop or monitor rather than a phone when you can.`,
          `Look up from the screen and across the room every so often, and blink fully a few times.`,
          `Increase text size so you aren’t leaning in.`,
          `Keep the office desk out of the line of a heat or AC vent.`,
        ],
      },
      {
        p: `Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking drops off.`,
      },
      { h: 'Dry eyes at night: the late offer' },
      {
        p: `Offers and counteroffers arrive at 10 p.m. Reading them on a phone in a dim room, tired after a day of driving, is the worst setup for your eyes. Turn on a lamp, use a larger screen, and step away for a minute between documents. The end of a long day is when the tear film has been under strain the longest. For a closer look at why evenings feel worst, see [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day).`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts Uses: {uses}. The directions: {directions}. Hygiene: {tip}. Because agents live out of their cars, the storage line matters: {storage}. A car in July or January goes past both ends of that, so keep the bottle in your work bag and take it inside.`,
      },
      {
        p: `If you buy for a team or keep a bottle at the office, guest checkout is quick; shipping is {shipping}, and {freeBottles} or more bottles ship free. Orders go from Brentwood, Tennessee, to US addresses, with no promised delivery date. Unopened bottles can be refunded within {returnDays} days of delivery.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back, or you notice pain, light sensitivity or blurred vision, see an eye doctor. The label puts it this way: {stopUse} If you wear contact lenses, Quell’s label doesn’t cover use with contacts, so ask your eye doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry after a day of showings?',
        a: `Hours of car vents, forced-air heat in vacant homes, dust and screen time between appointments all speed tear evaporation or reduce blinking. Redirecting vents and standing away from registers help.`,
      },
      {
        q: 'Is it okay to leave eye drops in the car between showings?',
        a: `Not for long in extreme weather. Quell’s storage range is {storage}, and a parked car in summer or winter can go outside it. Keep the bottle in a bag you carry inside.`,
      },
      {
        q: 'Should I wear safety glasses at a new construction showing?',
        a: `It’s a good idea. Drywall dust, sawdust and wind through open framing can all get into your eyes, and clear safety glasses block grit and breeze together.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-ski-patrol',
    title: 'Dry eyes for ski patrol',
    description:
      'Lift wind, cold, thin air, goggle fog and a heated patrol shack: why ski patrollers’ eyes dry out over a season, and the habits that help.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Ski patrollers get dry eyes from a full season of cold wind, high-elevation air, snow glare and goggles pushed up when they fog, followed by breaks in a heated patrol room. Keep goggles on and fog-free, use a face covering that doesn’t vent breath into them, sit away from the shack heater, carry lubricating drops in an inside pocket, and see an eye doctor if dryness lingers.`,
      },
      { h: 'A patroller’s day, from the eye’s point of view' },
      {
        p: `Patrol work starts before the lifts open and ends after sweep. In between come lift rides into the wind, fast runs, long stretches standing at a closure line or an accident scene, sled runs, and short breaks in a warm shack. Each piece is manageable alone. Stacked across five months, they wear on the tear film, the thin layer of oil, water and mucus that keeps the eye’s surface smooth. Our guide on [ski trips and dry eyes](/guides/ski-trips-and-dry-eyes) covers a vacation week; this one is for people on the hill every day.`,
      },
      { h: 'Cold, thin, dry air' },
      {
        p: `Cold air can hold only a little water vapor, so mountain air in winter is low in moisture even when it’s snowing. At higher elevations the air is thinner too, and in many western resorts it starts out dry. Every breath of wind across an exposed eye pulls moisture off the surface faster than calm air would. A lift ride facing into a north wind is the clearest example: several minutes of steady airflow, often with eyes squinted against the cold.`,
      },
      {
        list: [
          `Keep goggles down on the lift, not just on the run.`,
          `Turn your head out of the wind on long rides, and close your eyes for a few seconds now and then.`,
          `A helmet-compatible hood or a balaclava blocks wind from the gap between goggles and helmet.`,
        ],
      },
      { h: 'Goggles: the fog problem' },
      {
        p: `Goggles are the patroller’s main eye protection, and they only work when they’re on. The usual reason they end up on the helmet is fog. Once they’re up, wind and glare hit the eyes directly, often for the rest of the run.`,
      },
      {
        list: [
          `Fit the neck gaiter or face mask so breath exits down, not up into the goggle foam.`,
          `Don’t wipe the inside of the lens with a glove; it smears the anti-fog layer.`,
          `Carry a spare lens or second goggle in your pack for heavy-sweat days like rope work or sled hauling.`,
          `Let goggles dry fully between shifts, hung open in the locker room rather than zipped into a bag.`,
          `Keep a low-light lens for flat-light afternoons, so you aren’t tempted to ride with goggles off to see contrast.`,
        ],
      },
      { h: 'Snow glare and squinting' },
      {
        p: `Snow reflects most of the sunlight that hits it, and on a bluebird day after a storm, an open bowl can be blinding. Squinting reduces how much light gets in, but it isn’t a blink: the lids don’t close and spread fresh tears. The right goggle tint lets your eyes relax and blink normally. On sunny days at the top station, sunglasses are a reasonable switch when goggles are off for a moment.`,
      },
      { h: 'The patrol shack heater' },
      {
        p: `Breaks happen in a small room with a woodstove, a propane heater or a space heater cranked high. After hours in the cold, everyone crowds close. That heat is very dry, and sitting right in front of it can make eyes feel worse in ten minutes than a whole run did. Sit off to the side of the heater, not facing it, and step away once your hands are warm. Hang wet gear away from the stove so the air doesn’t fill with smoke or fumes from scorched fabric. Our guide on [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains why the direction of the airflow matters.`,
      },
      { h: 'Dry eyes when tired, late in the season' },
      {
        p: `By March, patrollers have months of early mornings behind them, plus late incident reports. Fatigue cuts blink quality, and evenings at a screen writing up reports add more strain. Tired eyes and dry eyes feel alike, and they often arrive together. If you notice your eyes are worst on the fifth day of a stretch, that pattern points to cumulative wear rather than one bad day.`,
      },
      { h: 'Carrying drops on the hill' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts Uses: {uses}. Its directions: {directions}. The storage line is the one patrollers need to plan around: {storage}. A pack strap or hip pocket in single-digit temperatures takes a bottle far below that, so keep it in an inside chest pocket, close to your body, and leave a spare in the locker room.`,
      },
      {
        list: [
          `Use drops in the shack or at the top station, out of the wind, with gloves off and hands clean.`,
          `Follow the label’s handling rule: {tip}.`,
          `Wait until watering from the cold settles before putting a drop in.`,
        ],
      },
      { h: 'When it isn’t dryness' },
      {
        p: `Patrollers respond to eye injuries as part of the job and know a lubricating drop isn’t for a branch strike, a ski pole poke or something stuck in the eye. The same goes for your own eyes. Pain, light sensitivity after a bright day on snow, or blurred vision that doesn’t clear needs medical care. The label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lays out the signs.`,
      },
      { h: 'Ordering for the season' },
      {
        p: `If the closest pharmacy is a long drive down the canyon, you can order online. Shipping is {shipping}, or free on {freeBottles} or more bottles, from Brentwood, Tennessee, to US addresses, without a promised delivery date. Mountain towns can see delays in storms, so order before you run out. Unopened bottles can be refunded within {returnDays} days of delivery. You can [order here](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry working on ski patrol?',
        a: `Cold, often thin and dry mountain air, constant wind on lifts and runs, snow glare and goggles pushed up when they fog all speed tear evaporation. Heated patrol rooms add dry air during breaks.`,
      },
      {
        q: 'How do I stop my ski goggles from fogging on patrol?',
        a: `Route breath down and away from the goggles with a well-fitted gaiter, don’t wipe the inside of the lens, carry a spare lens, and let goggles dry fully between shifts.`,
      },
      {
        q: 'Can eye drops freeze in a ski jacket?',
        a: `In an outside pocket in severe cold, a bottle can fall well outside the label’s storage line: {storage}. Keep it in an inside chest pocket and leave a spare indoors.`,
      },
      {
        q: 'Is it okay to use eye drops on the chairlift?',
        a: `It’s easier and cleaner to use them somewhere out of the wind with clean hands, like the patrol shack or a top station. Follow the label and keep the tip from touching anything.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-film-and-tv-crews',
    title: 'Dry eyes for film and TV crews',
    description:
      'Hot lights, haze, wind machines, monitors and 12-hour days: why film and TV crew members end up with dry eyes, and what helps on set.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Film and TV crews get dry eyes from long days under hot lights, atmospheric haze, wind and rain effects, stage air that switches off for takes and roars back between them, and hours watching monitors. Wear glasses around haze and effects, stand out of fixture heat and fan wash, take real breaks from the monitor, keep your own drops in a set bag, and see an eye doctor if it lingers.`,
      },
      { h: 'Why sets are hard on eyes' },
      {
        p: `The tear film needs regular blinking and reasonably still, moist air. A set gives you the opposite: heat from fixtures, fans and effects, airborne particles, and tasks that demand unbroken attention. Twelve-hour days are common and fourteen isn’t rare, so small exposures add up. The specifics depend on your department.`,
      },
      { h: 'Hot lights and the electric department' },
      {
        p: `LED fixtures run cooler than old tungsten units, but big HMIs and tungsten lights are still common, and any large fixture throws heat. Electricians and grips work right beside them, focusing, flagging and scrimming, often looking toward the source. That combination of radiant heat and bright light makes eyes squint and dry quickly.`,
      },
      {
        list: [
          `Don’t stand in front of a hot fixture longer than the adjustment needs.`,
          `Wear sunglasses or tinted safety glasses when setting lights outdoors or rigging near large sources.`,
          `Step into shade or a darker part of the stage between setups and blink fully a few times.`,
        ],
      },
      { h: 'Haze, smoke effects and atmosphere' },
      {
        p: `Haze makes light beams visible, and the special effects team may run it for hours on a stage or in a closed location. Fog and smoke effects add more particles for shorter bursts. Haze settles on lenses, so camera crews clean glass often; your eyes don’t get the same care. Clear safety glasses help, and stepping outside the hazed area during resets gives your eyes a break. If an effect leaves your eyes stinging, mention it to the effects lead and the safety representative.`,
      },
      { h: 'Wind machines and rain towers' },
      {
        p: `Effects fans used for wind are built to move a lot of air, and anyone standing downstream gets a face full. Rain towers and water effects add spray and grit thrown up from the floor. Stand to the side of effects fans, not behind talent in the same airstream, and keep glasses on during rain setups. On location in desert, coastal or winter shoots, the outdoor wind does the same job without a switch.`,
      },
      { h: 'Stage air: off for takes, on between them' },
      {
        p: `Many stages and locations shut off HVAC during takes to keep sound clean, then run it hard between them. That swing means warm, stale air during the take and a blast of conditioned air during resets. In an air-conditioned stage the reset blast is dry and cold; in a heated one, dry and hot. Find out where the supply vents are and don’t park your cart or chair under one.`,
      },
      { h: 'Monitors, video village and post' },
      {
        p: `Directors, script supervisors, DITs, video assist and producers spend hours watching monitors, often in a dim tent. Camera operators look through an eyepiece with one eye for long stretches. Editors and assistants in post put in long days at multiple screens. All of this reduces blinking.`,
      },
      {
        list: [
          `Look away from the monitor during resets, not at your phone, and blink fully a few times.`,
          `Lower the monitor slightly so you look down at it.`,
          `Keep monitor brightness close to the room’s light level to cut squinting.`,
          `In post, our guide on [dry eyes for video editors](/guides/dry-eyes-for-video-editors) covers the edit bay in detail.`,
        ],
      },
      { h: 'Night shoots and turnaround' },
      {
        p: `Splits, nights and short turnarounds cut into sleep, and tired eyes blink less fully and get rubbed more. A night exterior in winter adds cold wind. Protect the sleep you do get with a dark, cool room and the fan aimed away from your face, and see [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) for more on working through the night.`,
      },
      { h: 'Your set bag and Quell’s label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives these Uses: {uses}. Directions: {directions}. Handling: {tip}. The storage line, {storage}, matters on location: a camera truck or a car parked in the sun for a day gets hotter than that. Keep the bottle in a bag that stays in base camp or the stage, not on a hot dashboard.`,
      },
      {
        p: `Use drops at a break, with clean hands, away from the haze and effects area. Never share a bottle with the cast or other crew; each person should have their own. Actors who need drops for a scene are a matter for the set medic and production, not your personal bottle. If you wear contact lenses, Quell’s label doesn’t cover use with contacts; ask your eye doctor or pharmacist.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop isn’t for debris, chemicals or anything that hits the eye. Report injuries to the set medic. For ongoing dryness, pain, light sensitivity or blurred vision, see an eye doctor. The label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long day on set?',
        a: `Hot fixtures, haze, effects fans, conditioned air during resets and hours of monitor watching all dry or irritate the eyes. If they actually hurt or vision blurs, see an eye doctor rather than relying on drops.`,
      },
      {
        q: 'Does haze on a film set dry out your eyes?',
        a: `Haze adds airborne particles that many people find irritating over a long day. Clear safety glasses and stepping out of the hazed area during resets help.`,
      },
      {
        q: 'How can camera operators reduce eye strain?',
        a: `Take breaks from the eyepiece during resets, look at something far away, and blink fully a few times. Switch eyes or use an onboard monitor when the shot allows.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-casino-dealers',
    title: 'Dry eyes for casino dealers',
    description:
      'Constant focus on cards and chips, strong ventilation, bright lights and graveyard shifts: why casino dealers get dry eyes, and what helps between breaks.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Casino dealers get dry eyes because the job demands unbroken visual focus under bright lights, in heavily ventilated air, often on night shifts. Concentrating on cards, chips and hands cuts blinking, and the air moving across the floor speeds evaporation. Use breaks to look away and blink fully, keep your bottle of lubricating drops in your locker or break bag, protect your sleep, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why dealing is hard on the eyes' },
      {
        p: `A dealer’s eyes are working the whole time they’re on a game: tracking cards, counting chips, watching bets, reading hand signals and keeping track of every player at the table. That kind of sustained attention lowers blink rate, the same way a screen does. Each blink spreads the tear film across the eye, so fewer blinks mean longer stretches for the surface to dry.`,
      },
      { h: 'Ventilation and air on the casino floor' },
      {
        p: `Casinos move a lot of air. Large gaming floors run powerful heating and cooling systems, and supply vents often sit in the ceiling above the tables. In desert markets, the outside air is already dry; in other places, air conditioning still strips moisture as it cools. A table under a supply vent gets a steady stream across the dealer’s face. Our guide on [dry eyes in Las Vegas](/guides/dry-eyes-in-las-vegas) looks at one of the driest examples.`,
      },
      {
        list: [
          `If you notice one table is consistently worse for your eyes, it may sit under a vent. Mention it to a supervisor; sometimes a diffuser can be adjusted.`,
          `In the break room, sit away from the heater or AC outlet.`,
          `Keep your car vents off your face on the commute, especially after a long shift.`,
        ],
      },
      { h: 'Bright lights and the felt' },
      {
        p: `Gaming tables are brightly lit so cameras and players can see every card. Bright overhead light, shiny chips and glossy cards can make some dealers squint. Squinting narrows the eye without completing a blink. If glare bothers you, talk to your eye doctor about your glasses prescription and lens coatings, since many casinos limit what eyewear dealers can wear on the game.`,
      },
      { h: 'What you can do at the table' },
      {
        p: `Game procedures restrict what dealers can do with their hands, and touching your face at the table is usually discouraged or not allowed. That rules out rubbing your eyes or putting drops in on the game. What remains is blinking:`,
      },
      {
        list: [
          `Use natural pauses, like a shuffle or while players decide, to blink slowly and completely.`,
          `Let your gaze move between the layout and the far end of the pit instead of locking on one spot.`,
          `When a game is dead or between rounds, close your eyes gently for a second or two.`,
        ],
      },
      { h: 'Using breaks well' },
      {
        p: `Dealers typically rotate off a game for regular breaks. That’s the time for your eyes:`,
      },
      {
        list: [
          `Look at something far away, not your phone, for the first minute.`,
          `Close your eyes for a short stretch.`,
          `Wash your hands before touching your eyes; chips and cards pass through many hands.`,
          `If you use lubricating drops, this is when to do it, in the break room with clean hands.`,
        ],
      },
      { h: 'Night shifts and dry eyes when tired' },
      {
        p: `Swing and graveyard shifts are part of most dealers’ careers. Sleeping during the day is harder, and tired eyes blink less fully and feel gritty. Keep the bedroom dark and cool, aim fans away from your face, and keep a regular schedule on days off when you can. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers this in more depth. If your eyes feel worst at the end of a long shift, that timing is worth sharing with an eye doctor.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. The directions say: {directions}. For handling: {tip}. Storage: {storage}. A locker inside the casino keeps it in that range more reliably than a car in the parking garage.`,
      },
      {
        p: `Shipping is {shipping}, or free when you order {freeBottles} or more bottles, and orders ship from Brentwood, Tennessee, to US addresses. You can read the full label on the [Drug Facts page](/drug-facts) before you order. If you wear contact lenses, the label doesn’t cover use with them; ask your eye doctor or pharmacist.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry despite breaks and better sleep, or you notice pain, light sensitivity or changes in vision, see an eye doctor. The label is direct: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I deal cards?',
        a: `Dealing takes constant visual focus, which lowers how often you blink, and casino floors move a lot of heated or cooled air. Bright table lights can add squinting.`,
      },
      {
        q: 'Can casino dealers use eye drops at the table?',
        a: `Game procedures usually discourage touching your face on the game, so use drops on breaks, in the break room with clean hands, following the label.`,
      },
      {
        q: 'How can dealers rest their eyes during a shift?',
        a: `Use natural pauses to blink slowly and completely, let your gaze move around the pit, and spend the first minute of each break looking at something far away rather than a phone.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-bakers',
    title: 'Dry eyes for bakers',
    description:
      'Oven heat, flour dust in the air and 3 a.m. starts: why bakers get dry, gritty eyes, and practical ways to protect them through a bake.',
    category: 'using',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Bakers get dry eyes from three things: the blast of dry heat when a deck or rack oven opens, flour dust that hangs in the air when mixers start or flour is sifted and scooped, and pre-dawn shifts that cut into sleep. Stand to the side when opening ovens, start mixers on low, wash flour off your hands before touching your eyes, protect your sleep, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why a bakery is different from a line' },
      {
        p: `Restaurant cooks deal with grills, fryers and the rush of service, which our guide on [dry eyes for line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs) covers. A bakery has its own pattern: very hot ovens opened many times an hour, airborne flour, and shifts that start when most people are asleep. The work is also detailed and focused (scaling, shaping, scoring), which cuts blinking.`,
      },
      { h: 'Oven heat in your face' },
      {
        p: `A deck oven running for bread or a rack oven at full load releases a wave of hot, dry air every time the door opens. Bakers loading peels or pulling racks lean right into it. That heat evaporates the watery part of the tear film fast.`,
      },
      {
        list: [
          `Open the oven door, then step back or to the side for a second before reaching in.`,
          `Turn your face away while the first rush of heat clears.`,
          `Use a longer peel when you can, so your face stays farther from the opening.`,
          `If the oven has steam injection, keep your face back when venting; the steam is scalding.`,
        ],
      },
      { h: 'Flour dust' },
      {
        p: `Flour is fine enough to float. Dumping a bag into a mixer, starting the mixer on high, dusting a bench or sifting all put a cloud into the air that settles on everything, including your eyelashes. Flour on the eye feels gritty and makes you want to rub, which pushes it around more.`,
      },
      {
        list: [
          `Pour flour into the bowl slowly and close to the surface instead of dropping it from height.`,
          `Start mixers on the lowest speed until the flour is hydrated.`,
          `Dust benches with a light hand, or use a dredger instead of throwing flour.`,
          `Wear clear safety glasses on big mixing days; they keep flour off your lashes.`,
          `Wipe benches with a damp cloth rather than brushing dry flour into the air.`,
        ],
      },
      {
        p: `Wash flour off your hands and wrists before touching your eyes. If flour gets in your eye and doesn’t clear with blinking, or something feels stuck, stop and get it looked at rather than reaching for a lubricating drop.`,
      },
      { h: 'Proofers, coolers and the swing between them' },
      {
        p: `Bakers move between the warm, humid air of a proof box, the dry heat of the oven, and a cold walk-in. Those quick changes in temperature and humidity can leave eyes watering one minute and dry the next. A few seconds of slow blinking after you step out of the oven area helps the tear film settle.`,
      },
      { h: 'Pre-dawn starts and dry eyes when tired' },
      {
        p: `Bread has to be ready when the doors open, so many bakers start between 2 and 4 a.m. Getting enough sleep on that schedule is hard, especially when the rest of your household keeps normal hours. Tired eyes blink less completely and feel gritty. Protect your sleep:`,
      },
      {
        list: [
          `Keep a consistent bedtime, even on days off when you can.`,
          `Use blackout curtains for evening sleep in summer.`,
          `Keep a fan or heater off your face at night.`,
          `Drive home with car vents pointed away from your eyes.`,
        ],
      },
      {
        p: `Our guide on [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) goes further into the fatigue link.`,
      },
      { h: 'Dry eyes at work: decorating and detail work' },
      {
        p: `Piping, laminating dough or decorating cakes means hours looking closely at small things. Focused close work cuts blinking. Raise the work to a comfortable height so you aren’t hunched, take short breaks to look across the room, and blink fully before the next detailed piece. Bright, even lighting helps you avoid squinting.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts Uses: {uses}. Directions: {directions}. Handling: {tip}. In a bakery, that also means keeping the bottle away from benches, flour bins and mixers. Storage: {storage}. A shelf near the ovens can run hotter than that, so keep the bottle in a locker or bag away from the heat.`,
      },
      {
        p: `If you order, shipping is {shipping}, or free on {freeBottles} or more bottles; orders ship from Brentwood, Tennessee, to US addresses. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry or irritated, or you notice pain, light sensitivity or blurred vision, see an eye doctor. The label puts it simply: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel gritty after baking?',
        a: `Airborne flour settles on the lashes and eye surface, and the blast of dry oven heat speeds tear evaporation. Rubbing with floury hands makes it worse, so wash first.`,
      },
      {
        q: 'Can flour dust irritate your eyes?',
        a: `Yes, fine flour floats easily and can settle in the eyes. Adding flour slowly, starting mixers on low and wearing clear safety glasses on big mixing days all reduce how much reaches you.`,
      },
      {
        q: 'How do bakers protect their eyes from oven heat?',
        a: `Open the door, then step back or to the side for a second before reaching in, and turn your face away from the first rush of heat. A longer peel keeps your face farther from the opening.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-16 for hsa-for-eye-drops-bought-before-your-hsa-opened:
   * - https://www.irs.gov/publications/p969 (for 2025 returns):
   *   "For HSA purposes, expenses incurred before you establish your HSA aren’t
   *   qualified medical expenses." "State law determines when an HSA is
   *   established." HSA funded by rollover from an Archer MSA or another HSA is
   *   established on the date the prior account was established. Tax-free
   *   distributions for qualified medical expenses "you incur after you establish
   *   the HSA." "You don’t have to make withdrawals from your HSA each year."
   *   Records: exclusively for qualified medical expenses; not previously paid or
   *   reimbursed from another source; not taken as an itemized deduction. Report
   *   distributions on Form 8889. Additional 20% tax on distributions not used for
   *   qualified medical expenses; none after disability, age 65 or death. Health
   *   FSA reimburses expenses "incurred during the period of coverage"; OTC
   *   medicine (whether or not prescribed) is a covered FSA expense.
   */
  {
    slug: 'hsa-for-eye-drops-bought-before-your-hsa-opened',
    title: 'Can HSA pay for eye drops bought before it opened?',
    description:
      'No. IRS Publication 969 says expenses incurred before an HSA is established aren’t qualified. What that means for eye drops, and the one exception.',
    category: 'ordering',
    addedOn: '2026-11-16',
    body: [
      {
        p: `No. IRS Publication 969 says expenses incurred before you establish your HSA aren’t qualified medical expenses, so eye drops bought before the account existed can’t be paid or reimbursed from it tax-free. State law sets the date an HSA is established. The exception is an HSA funded by a rollover from an earlier HSA or Archer MSA, which counts as established on the earlier account’s date.`,
      },
      { h: 'What Publication 969 says' },
      {
        p: `Publication 969, “Health Savings Accounts and Other Tax-Favored Health Plans,” is the IRS’s main guide to HSAs. The current edition, for 2025 returns, says three things that settle this question:`,
      },
      {
        list: [
          `For HSA purposes, expenses incurred before you establish your HSA aren’t qualified medical expenses.`,
          `State law determines when an HSA is established.`,
          `An HSA funded by amounts rolled over from an Archer MSA or another HSA counts as established on the date the prior account was established.`,
        ],
      },
      {
        p: `It also says you can receive tax-free distributions to pay or be reimbursed for qualified medical expenses you incur after you establish the HSA. So the date the account was set up is the dividing line.`,
      },
      { h: 'Eligible for an HSA is not the same as having one' },
      {
        p: `People often mix up two dates. Being covered by a high-deductible health plan is what makes you eligible to contribute to an HSA. The HSA itself is a separate account with a trustee or custodian, usually a bank or HSA provider, and it’s established on its own date under state law. If your health plan started on January 1 but the account wasn’t set up until February, a bottle of eye drops bought in January falls before the account’s start. Your HSA trustee can tell you the date they record as your establishment date.`,
      },
      { h: 'Examples' },
      {
        list: [
          `You bought two bottles in October, then opened your first HSA in November. The October purchase isn’t a qualified HSA expense. Purchases after the November date can be.`,
          `You had an HSA at your old job and rolled it into a new HSA. Because it was funded by a rollover from another HSA, the new account counts as established on the old account’s date, so a purchase made after that earlier date can still qualify.`,
          `You opened your HSA in March but didn’t put money in until May. Whether March or May is the establishment date depends on your state’s law and your trustee; ask them before reimbursing an April purchase.`,
        ],
      },
      { h: 'What happens if you reimburse it anyway' },
      {
        p: `Publication 969 says HSA distributions used for something other than qualified medical expenses are included in income, and there’s an additional 20 percent tax on that part, unless the distribution is made after you become disabled, reach age 65, or die. You report HSA distributions on Form 8889 with your tax return. If you’ve already reimbursed a pre-HSA purchase by mistake, talk to your HSA trustee and a tax professional about how to handle it.`,
      },
      { h: 'Purchases after the HSA opens' },
      {
        p: `Once your HSA is established, things get simpler. Publication 969 says you don’t have to take withdrawals from your HSA each year, and you can pay for a qualified expense out of pocket and reimburse yourself from the HSA later. The IRS asks you to keep records showing that:`,
      },
      {
        list: [
          `the distributions were only for qualified medical expenses;`,
          `those expenses weren’t paid or reimbursed from another source; and`,
          `you didn’t also take them as an itemized deduction.`,
        ],
      },
      {
        p: `Keep the order confirmation email and any receipts. To find a Quell order again, the [order lookup page](/orders) takes the order number plus the email you used at checkout. Our guide on [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains why over-the-counter drops qualify in the first place.`,
      },
      { h: 'Is an FSA different?' },
      {
        p: `A health FSA has its own timing rule. Publication 969 says a health FSA reimburses qualified medical expenses you incurred during the period of coverage, and it lists over-the-counter medicine, whether or not prescribed, as a covered expense. So for an FSA, the plan year and your coverage dates matter. Your employer’s plan administrator can confirm the exact dates. Our [HSA and FSA guide](/guides/hsa-fsa-and-eye-drops) covers how paying with either card works at checkout.`,
      },
      { h: 'Buying Quell with an HSA card' },
      {
        p: `Quell is an over-the-counter lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss; its label gives its Uses as {uses}. Whether a given card goes through depends on your HSA provider and the card network. Shipping is {shipping}, or free on {freeBottles} or more bottles, and orders ship from Brentwood, Tennessee, to US addresses. Unopened bottles can be refunded within {returnDays} days of delivery; keep that in mind for your HSA records, since a refunded purchase isn’t an expense you paid.`,
      },
      { h: 'This isn’t tax advice' },
      {
        p: `This page summarizes what IRS Publication 969 says. For your own situation, ask your HSA trustee or a tax professional. If you’re also changing jobs, our guide on [using your HSA after leaving a job](/guides/can-you-use-hsa-for-eye-drops-after-leaving-a-job) covers what happens to the account.`,
      },
    ],
    faq: [
      {
        q: 'Can I use my HSA for expenses before it was opened?',
        a: `No. IRS Publication 969 says expenses incurred before you establish your HSA aren’t qualified medical expenses, so they can’t be paid or reimbursed from it tax-free.`,
      },
      {
        q: 'Who decides when my HSA was established?',
        a: `Publication 969 says state law determines when an HSA is established. Your HSA trustee or custodian can tell you the date they use.`,
      },
      {
        q: 'Does a rolled-over HSA keep its original start date?',
        a: `Yes. Publication 969 says an HSA funded by a rollover from an Archer MSA or another HSA is established on the date the prior account was established.`,
      },
      {
        q: 'Can I reimburse myself from my HSA years later?',
        a: `Publication 969 says you don’t have to take HSA withdrawals each year, and it allows reimbursement of qualified expenses incurred after the HSA was established. Keep records showing the expense wasn’t paid from another source or deducted.`,
      },
    ],
  },
  /*
   * what-does-ophthalmic-mean: FDA references removed 2026-11-18 at Phillip's
   * request (the 21 CFR 200.50 and 211.132 sections are gone).
   */
  {
    slug: 'what-does-ophthalmic-mean',
    title: 'What does ophthalmic mean on eye drops?',
    description:
      'Ophthalmic means “of or for the eye.” What the word signals on an eye drop label, what it says about how the drop is made, and why not to confuse it with otic.',
    category: 'label',
    addedOn: '2026-11-16',
    body: [
      {
        p: `Ophthalmic means “of or relating to the eye.” On a label, it tells you the product is made to go in the eye, as in “ophthalmic solution.” That word carries weight: a product made for the eye is made sterile and sealed so it stays that way until you open it. Never put a product labeled otic (for the ear) or one without directions for the eye into your eyes.`,
      },
      { h: 'Where the word comes from' },
      {
        p: `Ophthalmic comes from the Greek word for eye, ophthalmos. You’ll see the same root in ophthalmologist, a medical doctor who specializes in the eye, and ophthalmology, the field itself. Pronounced “off-THAL-mik,” it’s a technical word that turns up mostly on pharmacy labels, prescriptions and package inserts. If you’re choosing between eye-care professionals, our guide on [optometrist or ophthalmologist](/guides/optometrist-or-ophthalmologist) explains the difference.`,
      },
      { h: 'How it shows up on labels' },
      {
        p: `Prescription and over-the-counter products use ophthalmic to describe their form and route:`,
      },
      {
        list: [
          `Ophthalmic solution: a clear liquid drop.`,
          `Ophthalmic suspension or emulsion: a drop with particles or oil droplets spread through it, which can look cloudy or milky.`,
          `Ophthalmic ointment or gel: a thicker product applied to the eye.`,
          `“For ophthalmic use only”: a reminder that the product is meant for the eyes and not for the ears, nose or skin.`,
        ],
      },
      {
        p: `Quell’s own carton uses the word in its emu oil panel, which reads: {emuOil} Its Drug Facts warning makes the same point in plain language: {warnings}.`,
      },
      { h: 'Other eye words you may see on a box or prescription' },
      {
        list: [
          `Ocular: another word for “of the eye,” common on package inserts.`,
          `OU, OD and OS: shorthand on prescriptions for both eyes, the right eye and the left eye.`,
          `Lubricant: the Purpose word printed beside each of Quell’s active ingredients.`,
          `Emulsion: a liquid with tiny droplets of oil spread through water, which is why some drops look milky.`,
        ],
      },
      {
        p: `None of these words tells you what a particular drop is for. That’s the job of the Uses line, covered below.`,
      },
      { h: 'Ophthalmic vs otic: don’t mix them up' },
      {
        p: `Otic means “of the ear.” Otic drops come in small bottles that can look a lot like eye drops, and both may sit in the same medicine cabinet. They aren’t made to the same standard for use in the eye. Before any drop goes in your eye, check that the label says it’s for the eyes. If you’ve put an ear drop or any other wrong product in your eye, contact a doctor, pharmacist or Poison Control.`,
      },
      { h: 'What “made for the eye” means for the bottle' },
      {
        p: `An eye drop goes onto one of the most sensitive surfaces of the body, so it’s filled sterile and sealed before it leaves the maker. Our guide [are eye drops sterile?](/guides/are-eye-drops-sterile) covers that from a user’s point of view. The seal is your sign that nothing has reached the drop since. If a seal is broken or missing when the bottle arrives, don’t use it; call {phone} and we’ll replace it.`,
      },
      {
        p: `Once you open a multi-dose bottle, keeping it clean becomes your job, and that matters more for a drop without a preservative. Quell’s label carries this line: {tip}. Our guide on [what preservative-free means](/guides/what-does-preservative-free-mean) explains the trade-off.`,
      },
      { h: 'Handling an ophthalmic bottle after it’s open' },
      {
        list: [
          `Wash and dry your hands before you pick up the bottle.`,
          `Keep the tip from touching your eye, lashes, fingers or the counter.`,
          `Recap the bottle as soon as you’ve finished.`,
          `Keep it to yourself; a bottle that touches someone else’s eye is no longer clean for yours.`,
          `Store it as the label says: {storage}.`,
        ],
      },
      { h: 'What ophthalmic doesn’t tell you' },
      {
        p: `The word describes where a product goes and the standard it’s made to, not what it does. Ophthalmic products range from lubricating drops to prescription medicines. To learn what a particular over-the-counter drop is for, read the Drug Facts panel. Quell’s Uses line reads: {uses}. Its directions: {directions}. Our [guide to the Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section.`,
      },
      { h: 'What Quell is' },
      {
        p: `Quell is an over-the-counter lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The label also notes: {milky}. Since the label itself describes that look, use it as your baseline; the panel adds a check: {doNotUse}. You can read every line on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Questions the label leaves to a doctor' },
      {
        p: `Quell’s label doesn’t give directions for contact lens wearers, children, or use alongside other eye drops. Ask your eye doctor or pharmacist about those. And if your eyes hurt or your vision changes, the label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What does ophthalmic mean?',
        a: `It means “of or relating to the eye.” On a product label, it tells you the product is made for use in the eye, such as an ophthalmic solution or ointment.`,
      },
      {
        q: 'What is the difference between ophthalmic and otic drops?',
        a: `Ophthalmic drops are for the eyes; otic drops are for the ears. They’re made to different standards, so never put ear drops in your eyes. Check the label before every use.`,
      },
      {
        q: 'Do ophthalmic products have to be sterile?',
        a: `Eye drops are made sterile and sealed so they stay that way until you open them, which is why a bottle with a broken seal shouldn’t be used. After opening, clean handling keeps the drop in good shape.`,
      },
      {
        q: 'How do you pronounce ophthalmic?',
        a: `“Off-THAL-mik.” The first syllable sounds like “off,” and the “ph” is pronounced as an f.`,
      },
    ],
  },
]
