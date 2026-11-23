import type { Guide } from '@/lib/guide-types'
export const DAILY_20261123_A: Guide[] = [
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-independence-mo:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1123/LXT.json and .daily-job/a/LXT-1123-extra.json
   *   (LEES SUMMIT MUNICIPAL AP, MO, elev 1000 ft: Jan high 39.0 F, low 22.1 F;
   *   Feb high 44.3, low 25.9; Mar low 35.4; Apr precip 4.19; May precip 5.70
   *   (wettest), Jun 4.95; Jul high 88.3, low 69.7; Aug high 86.9, low 67.6;
   *   Nov high 54.0, low 36.2; Dec high 43.2, low 26.3; Jan precip 0.96 (driest);
   *   monthly precip normals sum to 38.34 in; snowfall "M", left out)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   * Independence has no station in today's files; Lee's Summit Municipal is named
   * as the source in the prose.
   */
  {
    slug: 'dry-eye-relief-independence-mo',
    title: 'Dry eye relief in Independence, Missouri',
    description:
      'NOAA normals from nearby Lee’s Summit show January lows near 22°F and a wet May. How Independence’s two seasons dry your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Dry eye relief in Independence comes down to two long seasons. From November into March, normal lows at the nearest NOAA station sit in the 20s and 30s and furnaces dry the indoor air; from June through August, highs in the upper 80s keep air conditioning running. Steer vents away from your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor if dryness keeps coming back.`,
      },
      { h: 'Where Independence’s weather numbers come from' },
      {
        p: `Independence doesn’t have an official long-term weather station of its own in NOAA’s records for today’s guides, so the figures here are NOAA’s 1991–2020 climate normals for Lee’s Summit Municipal Airport, a short drive to the south, as published through the National Weather Service’s NOWData. The airport sits at about 1,000 feet. Its normals give a clear picture of the year:`,
      },
      {
        list: [
          `January is the coldest month, with an average high of 39.0°F and an average low of 22.1°F.`,
          `December isn’t far behind: a 43.2°F high and a 26.3°F low.`,
          `July is the hottest, averaging 88.3°F in the afternoon and 69.7°F at night.`,
          `May is the wettest month at 5.70 inches of precipitation, followed by June at 4.95.`,
          `January is the driest at 0.96 inches, and the twelve monthly normals add up to about 38.3 inches a year.`,
        ],
      },
      {
        p: `Those numbers matter for your eyes less because of the rain itself and more because of what they make you do indoors. A 22°F January night means the furnace cycles for hours, and a 70°F July night means the air conditioner rarely gets a rest.`,
      },
      { h: 'January: the driest stretch for your eyes' },
      {
        p: `The cold months bring the least precipitation at the station, and the cold outdoor air carries little moisture to begin with. Warm that air to 70°F inside a house and its relative humidity drops further. Heated, dry air pulls water from the tear film between blinks, so many people in Independence notice gritty, tired-feeling eyes first thing in the morning from about Thanksgiving onward. Normal lows don’t climb back above freezing until March, when the station’s average low reaches 35.4°F, so heating season here is long.`,
      },
      {
        list: [
          `Check where the floor registers point. A bed or recliner right beside one puts warm air across your face for hours.`,
          `Run a bedroom humidifier and clean it on the schedule its maker gives. Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers settings and placement.`,
          `Lower the thermostat a few degrees at night; the furnace runs less and the air stays a little less dry.`,
          `In the car, send heat to the floor and windshield rather than to the dash vents aimed at your eyes.`,
        ],
      },
      { h: 'A wet spring, then the air-conditioning months' },
      {
        p: `April (4.19 inches), May and June are the wet season at Lee’s Summit, and outdoor air in spring rarely feels harsh on the eyes. That changes when summer settles in. With July and August highs near 88°F and 87°F and nights in the upper 60s, most homes, offices and cars run air conditioning around the clock. Cooled indoor air is dry air, and the same steady blower that keeps a living room comfortable can leave your eyes stinging by evening. Keep desk fans and car vents aimed at your chest, and close blinds on sunny windows so the system cycles less.`,
      },
      { h: 'Yard work, ball fields and long drives' },
      {
        p: `Weekend life in eastern Jackson County happens outdoors in the warm months: mowing, youth baseball and softball, fishing at a nearby lake, grilling on the deck. Sun, wind and grass dust all speed evaporation from an open eye. Wraparound sunglasses block more breeze than flat lenses, and a brimmed cap cuts glare. If you mow, shut the bag side away from your face and take a short break in the shade to blink fully. On the drive back across the metro, keep the air conditioning off your face for the last stretch so you don’t step out with dry, stinging eyes.`,
      },
      { h: 'Screens during the long heating season' },
      {
        p: `Short winter days pull people indoors and onto screens, and staring at a screen lowers how often you blink. Combine that with furnace air and the tear film gets little help. Set the monitor slightly below eye level so your lids cover more of the eye, look across the room every 20 minutes or so, and make a point of finishing each blink. Phones in bed count too: a dim bedroom with a heat register nearby is a common setting for eyes that feel dry by morning.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `Two other lines are worth knowing before the first drop. The warning reads: {warnings}. Storage reads: {storage}. A car parked on a January night or left in a sunny July lot can move well outside that range, so keep the bottle in a coat pocket or bring it inside. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Independence' },
      {
        p: `Orders ship from Brentwood, Tennessee, to any US address, including Independence, Blue Springs, Raytown and the rest of the east side. You can check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, so reorder a little before you run out. The [Independence page](/eye-drops/independence-mo) and the [Missouri page](/eye-drops/state/missouri) have local details, and you can [order from the home page](/#buy).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `A drop and a humidifier help with dry air; they don’t explain dryness that keeps returning or symptoms that change. The label is plain about when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the ones not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Independence, Missouri in January?',
        a: `NOAA’s 1991–2020 normals for nearby Lee’s Summit Municipal Airport give January an average high of 39.0°F and an average low of 22.1°F, making it the coldest month of the year.`,
      },
      {
        q: 'What is the wettest month near Independence, Missouri?',
        a: `May, at 5.70 inches of precipitation in NOAA’s normals for Lee’s Summit Municipal Airport. January is the driest month at 0.96 inches.`,
      },
      {
        q: 'Why do my eyes feel drier in winter in Independence?',
        a: `Cold outdoor air carries little moisture, and heating it indoors lowers its relative humidity further. Furnace air moving across your face speeds evaporation from the tear film, especially near registers and in the car.`,
      },
      {
        q: 'Does Quell ship to Independence, MO?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to addresses across the United States, including Independence. Tracking comes by email, though no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-harlingen-tx:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1123/HRL.json and .daily-job/a/HRL-1123-extra.json
   *   (HARLINGEN RIO GRANDE VALLEY INTL AP, TX, elev 31 ft: Jan high 71.7 F, low
   *   49.8 F; Feb precip 0.73 (driest); Mar high 81.0; Apr high 86.5; May high
   *   91.4, precip 2.50; Jun high 95.0; Jul high 96.2, low 75.3; Aug high 97.2
   *   (hottest), low 75.3; Sep precip 5.31 (wettest), high 92.2; Oct precip 2.71;
   *   Nov high 79.3; Dec high 73.2, low 51.6; monthly precip normals sum to 24.04 in;
   *   snowfall "M", left out)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   */
  {
    slug: 'dry-eye-relief-harlingen-tx',
    title: 'Dry eye relief in Harlingen, Texas',
    description:
      'Harlingen’s airport averages 97°F in August and 72°F in January, per NOAA. Why air conditioning, sun and screens dry your eyes, and what to do.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `In Harlingen, dry eyes are mostly an indoor story. NOAA’s normals for the city’s airport show highs above 90°F from May through September, so homes, cars and workplaces run air conditioning for half the year, and cooled air dries the tear film. Aim vents away from your face, wear sunglasses outdoors, take blink breaks at screens, use a lubricating drop as directed, and see an eye doctor if it persists.`,
      },
      { h: 'Harlingen’s climate in NOAA’s normals' },
      {
        p: `The figures below are NOAA’s 1991–2020 climate normals for Valley International Airport in Harlingen, the station listed as Harlingen Rio Grande Valley International Airport, as published through the National Weather Service’s NOWData. The station sits about 31 feet above sea level.`,
      },
      {
        list: [
          `August is the hottest month, with an average high of 97.2°F; July averages 96.2°F.`,
          `Summer nights stay warm: the average low in July and August is 75.3°F.`,
          `Highs average above 90°F in May (91.4°F), June (95.0°F), July, August and September (92.2°F).`,
          `January is the mildest month, at 71.7°F in the afternoon and 49.8°F at night.`,
          `September is the wettest month at 5.31 inches, and February the driest at 0.73 inches. The monthly normals total about 24 inches a year.`,
        ],
      },
      { h: 'Five months above 90°F means five months of cooled air' },
      {
        p: `When an August afternoon averages 97°F and the night only falls to about 75°F, the air conditioner runs nearly without a break. Air conditioning pulls moisture out of the air as it cools it, and a vent blowing steadily across your face speeds evaporation from the tear film. That’s why plenty of people in the Valley feel their eyes sting by late afternoon at a desk, even though the air outside feels heavy and damp. Offices, classrooms, stores and clinics tend to run cool and constant, and most of the day is spent in them.`,
      },
      {
        list: [
          `At work, ask whether a ceiling diffuser blowing straight down on your chair can be angled or partly closed.`,
          `At home, keep bedroom vents and ceiling fans from blowing across the pillow.`,
          `Close blinds on west-facing windows in the afternoon, so the system cycles less.`,
          `Point the car’s dash vents at your chest or hands, never at your eyes.`,
        ],
      },
      { h: 'Sun and glare in the Valley' },
      {
        p: `Harlingen sits in flat, open country, and outdoor work and errands happen under strong sun most of the year. Squinting into glare and wind from a moving truck both leave the eye surface exposed. Wraparound sunglasses with UV protection cut glare and block some of the breeze; a wide-brimmed hat helps more. If you work outdoors in fields, at a job site or on deliveries, schedule a short shade break every hour or two to rest your eyes and blink fully. Start early in the summer, when the heat of the day is still hours away.`,
      },
      { h: 'The wet month, and the drier winter' },
      {
        p: `September brings the most rain, 5.31 inches on average, as the tropical season peaks, and October adds 2.71. Then the year turns gentle: November highs average 79.3°F and December 73.2°F. Winter is the season people move outdoors, with patio dinners and long walks, and it’s also the driest stretch on the calendar, with February the low point. On mild winter days, many houses switch between heat in the early morning and air conditioning by afternoon, so the air indoors stays dry either way.`,
      },
      { h: 'Screens, long drives and night shifts' },
      {
        p: `Staring at a screen lowers how often you blink, and that matters more in a cold, air-conditioned office. Drivers on long trips along the Valley’s highways and workers on night shifts at hospitals and warehouses face the same thing: a fixed gaze, dry cooled air and few breaks. A few habits help:`,
      },
      {
        list: [
          `Every 20 minutes, look at something across the room for a few seconds and finish each blink.`,
          `Set your monitor slightly below eye level so your lids cover more of the eye.`,
          `On a long drive, stop every couple of hours and let your eyes rest before getting back in the cooled cab.`,
          `After a night shift, keep the bedroom fan off your face while you sleep during the day.`,
        ],
      },
      { h: 'Quell’s label, in its own words' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. The directions are: {directions}. Keep the dropper clean, as the panel says: {tip}.`,
      },
      {
        p: `Storage matters in South Texas. The panel reads: {storage}. A car parked in an August lot gets far hotter than that, so carry the bottle in a bag you take inside instead of leaving it in the glove box. The panel also carries this warning: {warnings}. Read every line on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Harlingen' },
      {
        p: `We ship from Brentwood, Tennessee, to Harlingen, San Benito, La Feria and every other US address. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, though we don’t promise a delivery date, and in the hot months it helps to bring the package inside soon after it arrives. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Harlingen page](/eye-drops/harlingen-tx) and the [Texas page](/eye-drops/state/texas), or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Air conditioning and sun explain a lot of everyday dryness, but not everything. Stop and get help when the label says to: {stopUse} An eye doctor can find the cause and decide what to do. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Harlingen, Texas get in summer?',
        a: `NOAA’s 1991–2020 normals for Harlingen’s airport give August an average high of 97.2°F and July 96.2°F, with summer nights averaging about 75°F.`,
      },
      {
        q: 'What is the rainiest month in Harlingen?',
        a: `September, with 5.31 inches of precipitation in NOAA’s normals for Valley International Airport. February is the driest month at 0.73 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Harlingen when it’s humid outside?',
        a: `Most of the day is spent in air-conditioned rooms and cars, and cooled air is dry air. A vent blowing across your face speeds evaporation from the tear film no matter how damp it feels outdoors.`,
      },
      {
        q: 'Does Quell ship to Harlingen, TX?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Harlingen and the rest of the Rio Grande Valley, with tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-roseburg-or:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1123/RBG.json and .daily-job/a/RBG-1123-extra.json
   *   (ROSEBURG REGIONAL AP, OR, elev 502 ft: Dec precip 6.05 (wettest), high
   *   48.2 F, low 36.8 F; Jan precip 4.82, high 50.1, low 37.1; Nov precip 4.72;
   *   Jun precip 0.93; Jul precip 0.26, high 85.8, low 57.4; Aug precip 0.23
   *   (driest), high 85.9, low 57.1; Sep precip 0.85, high 80.1; Oct precip 2.32,
   *   high 66.9; monthly precip
   *   normals sum to 32.07 in; Jun-Sep sum 2.27; Nov-Jan sum 15.59;
   *   snowfall "M", left out)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   * - cityofroseburg.org (Umpqua River Trail page: the trail runs through city
   *   parks, at times along the South Umpqua River; press release: Deer Creek runs
   *   through downtown into the South Umpqua), checked 2026-11-23.
   */
  {
    slug: 'dry-eye-relief-roseburg-or',
    title: 'Dry eye relief in Roseburg, Oregon',
    description:
      'Roseburg’s airport gets 6 inches of rain in December and a quarter inch in August. How the dry summer and the heated winter affect your eyes.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Roseburg has two kinds of dry-eye weather. July and August are nearly rainless at the airport, with highs near 86°F, and winter is wet outside but heated and dry indoors. Keep vents and fans off your face, wear sunglasses on summer afternoons, blink fully at screens, and use a lubricating drop exactly as its label directs. Dryness that lingers or comes with pain belongs with an eye doctor.`,
      },
      { h: 'The numbers from Roseburg Regional Airport' },
      {
        p: `NOAA’s 1991–2020 climate normals for Roseburg Regional Airport, at about 500 feet in the South Umpqua valley, show one of the sharpest wet-to-dry swings you’ll find in a weather record. These are the official normals, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `December is the wettest month, with 6.05 inches of precipitation. November (4.72) and January (4.82) add enough that those three months hold almost half of the year’s total.`,
          `August is the driest month at 0.23 inches, and July gets only 0.26. June through September together average about 2.3 inches.`,
          `The monthly normals add up to roughly 32 inches a year.`,
          `July and August highs average about 86°F, with nights near 57°F.`,
          `December averages 48.2°F in the afternoon and 36.8°F at night; January is similar.`,
        ],
      },
      { h: 'Summer: almost no rain for two months' },
      {
        p: `A quarter inch of rain in a month means the hills brown out and the air dries as the afternoon warms. With highs in the mid-80s, Roseburg summer afternoons are the time eyes feel it most outdoors: sun, warm air and a breeze all speed evaporation from the tear film. Mornings are cooler, with July lows near 57°F, so they’re the easier time for yard work, a bike ride or a walk on the Umpqua River Trail, which the city describes as winding through its parks and at times running along the South Umpqua.`,
      },
      {
        list: [
          `Do outdoor chores before noon in July and August, when it’s cooler.`,
          `Wear wraparound sunglasses on the water and on open, sunny trails.`,
          `Pause in shade for a few slow, complete blinks.`,
          `On the drive home, keep the air conditioning aimed at your chest, not your face.`,
        ],
      },
      { h: 'September and October: the turn back to rain' },
      {
        p: `The dry season doesn’t end on Labor Day. September still averages only 0.85 inches of rain, with highs near 80°F, so the first weeks of the school year feel like summer for your eyes. October brings the change, with 2.32 inches and highs around 67°F, and by November the valley is wet again. That shoulder season is also when many households switch the heat on for the first time, often while the windows are still closed against cool mornings. If your eyes feel dry the first week the furnace runs, it’s the change in indoor air, not anything you did. Clean the humidifier before you start it up for the year, and check that registers near beds and desks aren’t blocked or aimed at you.`,
      },
      { h: 'Winter: rain outside, dry heat inside' },
      {
        p: `From November through January the valley is gray and wet, and the outdoor air is rarely the problem. The problem is the heat. Normal lows hover in the upper 30s, so furnaces, heat pumps and wood stoves run for months, and warming cool air without adding water lowers its relative humidity. Many households also keep a stove going through the evening, which dries the room further. Sit back from the stove or a heat register, keep a humidifier in the bedroom if the air feels parched, and clean it often. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through each kind of heat.`,
      },
      { h: 'Long drives on I-5 and screen time at home' },
      {
        p: `Roseburg sits on the interstate between Eugene and Medford, and plenty of people drive it for work, appointments and family. A long drive means a fixed stare at the road, dash vents blowing and glare off wet pavement in winter or bright sun in summer. Stop every couple of hours, and keep vents off your face. The same goes for long evenings on a laptop or phone in a heated room: screens lower your blink rate, so look away now and then and finish each blink.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses are: {uses}. Directions on the panel: {directions}. And: {tip}.`,
      },
      {
        p: `Storage is printed as: {storage}. A car on a sunny August afternoon in Roseburg can climb well above that, so carry the bottle with you. The label also notes: {milky}. Everything else is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Roseburg' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Roseburg, Winston, Sutherlin, Green and the rest of Douglas County. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Roseburg page](/eye-drops/roseburg-or) has local details, the [Oregon page](/eye-drops/state/oregon) lists other Oregon cities, and you can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness doesn’t settle with a drop and better air, or if something new shows up, stop. The label lists the signs: {stopUse} An eye doctor can find the cause and decide what to do. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Roseburg, Oregon?',
        a: `August, with 0.23 inches of precipitation in NOAA’s 1991–2020 normals for Roseburg Regional Airport. July is close behind at 0.26 inches.`,
      },
      {
        q: 'How much rain does Roseburg get in December?',
        a: `About 6.05 inches, which makes December the wettest month at Roseburg Regional Airport. November and January each add close to 5 inches.`,
      },
      {
        q: 'Why are my eyes dry in Roseburg in the winter when it rains so much?',
        a: `Most winter hours are spent indoors with the heat on, and heating cool air lowers its relative humidity. Sitting near a stove, register or heat pump vent speeds evaporation from your eyes.`,
      },
      {
        q: 'Does Quell ship to Roseburg, OR?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Roseburg and the rest of Douglas County, with tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-evanston-il:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1123/PWK.json and .daily-job/a/PWK-1123-extra.json
   *   (CHICAGO PALWAUKEE AP, IL, elev 629 ft, now Chicago Executive Airport: Jan
   *   high 31.9 F, low 18.4 F; Feb high 35.8, low 21.2, precip 1.28 (driest);
   *   Mar high 46.7, low 30.2; Apr precip 3.31; Jun precip 3.97 (wettest);
   *   Jul high 84.0, low 65.8; Aug precip 3.70; Nov high 48.5, low 33.4;
   *   Dec high 36.9, low 24.0; monthly precip normals sum to 32.28 in;
   *   snowfall "M", left out)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   * - cityofevanston.org/beaches (Evanston's beaches are on Lake Michigan),
   *   checked 2026-11-23.
   */
  {
    slug: 'dry-eye-relief-evanston-il',
    title: 'Dry eye relief in Evanston, Illinois',
    description:
      'Near Evanston, January averages a 32°F high and an 18°F low in NOAA’s normals. How lake wind, long heating seasons and screens dry your eyes.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Dry eyes in Evanston follow the heating season. NOAA’s normals for the nearest station show January highs just under freezing and average lows below 32°F from December into March, so radiators and furnaces run for months. Add cold wind off Lake Michigan and long hours on screens. Shield your eyes outdoors, keep heat off your face, blink fully, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'Which weather station describes Evanston' },
      {
        p: `There’s no long-term station inside Evanston in today’s data, so these figures come from NOAA’s 1991–2020 climate normals for Chicago Executive Airport, listed by NOAA under its old name, Palwaukee, in the northwest suburbs, at about 630 feet. They are the official normals, as published through the National Weather Service’s NOWData. The lakefront itself can run a little different from an inland airport, but the seasons are the same:`,
      },
      {
        list: [
          `January averages a high of 31.9°F and a low of 18.4°F.`,
          `February is barely warmer, at 35.8°F and 21.2°F, and it’s also the driest month, with 1.28 inches of precipitation.`,
          `Average lows stay below freezing from December through March, when the low is 30.2°F.`,
          `July is the warmest month, averaging 84.0°F in the afternoon and 65.8°F at night.`,
          `June is the wettest month at 3.97 inches, and the monthly normals total about 32.3 inches a year.`,
        ],
      },
      { h: 'Four months of below-freezing nights' },
      {
        p: `A heating season that runs from November into April is the main reason Evanston eyes feel dry in winter. Cold outdoor air holds little moisture, and heating it lowers the relative humidity indoors even further. If your building has radiators, they may run hot with no simple thermostat in each room; if it has forced air, warm air blows from registers in short bursts. Either way, warm, dry air speeds evaporation from the tear film.`,
      },
      {
        list: [
          `In a radiator apartment, keep your bed and desk a few feet from the radiator rather than right beside it.`,
          `If the unit runs too hot, ask the building about adjusting the valve instead of opening a window and letting the radiator work harder.`,
          `Use a bedroom humidifier, cleaned often, through the coldest months.`,
          `Our guide to [radiator heat and dry eyes](/guides/dry-eyes-from-radiator-heat) covers steam and hot-water systems in more detail.`,
        ],
      },
      { h: 'Wind off Lake Michigan' },
      {
        p: `Evanston’s beaches and parks sit right on Lake Michigan, and a walk or run along the lakefront in winter puts cold wind straight into your face. Cold wind does two things at once: it dries the eye surface, and it can trigger a rush of watering as the eye reacts. That watering doesn’t mean your eyes aren’t dry. Wraparound sunglasses or clear glasses cut the wind, and a hat brim or hood helps. Walk with the wind at your back on the return leg when you can, and come indoors before your eyes start to sting.`,
      },
      { h: 'Campus calendars, commutes and screens' },
      {
        p: `Evanston is a college town, and winter terms and exams land squarely in the coldest weeks of the year. Long hours on a laptop in a heated library or dorm lower your blink rate while the air dries the tear film. The same goes for anyone who commutes downtown on the train and spends the day at a desk: overheated rail cars, then an office with forced air. Look up from the screen every 20 minutes, finish each blink, and keep the monitor slightly below eye level. Our guide on [dry eyes while studying](/guides/dry-eyes-while-studying) has a fuller routine.`,
      },
      { h: 'Summer by the lake' },
      {
        p: `June is the wettest month, and summer highs average in the low to mid 80s. Beach days bring sun and glare off the water rather than dry air, plus wind on the open sand. Polarized sunglasses help with glare. Indoors, air conditioning dries the air in summer the way radiators do in winter, so keep vents and fans aimed away from your face at work and at night.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists its Uses as: {uses}. Directions: {directions}. Keep the bottle clean: {tip}.`,
      },
      {
        p: `In an Evanston winter, storage counts as much as directions. The panel says: {storage}. A car on a January night drops well below that range, so keep the bottle in an inside coat pocket or bag. The warning on the panel reads: {warnings}. Read it all on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Evanston' },
      {
        p: `We ship from Brentwood, Tennessee, to Evanston, Skokie, Wilmette and the rest of the North Shore. Guest checkout works fine; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, and in winter it helps to bring the box in from a cold lobby or porch soon after delivery. See the [Evanston page](/eye-drops/evanston-il) and the [Illinois page](/eye-drops/state/illinois), or [order from the home page](/#buy).`,
      },
      { h: 'When dryness is a question for a doctor' },
      {
        p: `Dry air and lake wind explain a lot, but not pain or changing vision. The label is clear: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to act on.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Evanston, Illinois get in winter?',
        a: `NOAA’s 1991–2020 normals for Chicago Executive Airport, the nearest station in today’s data, give January an average high of 31.9°F and an average low of 18.4°F.`,
      },
      {
        q: 'Do radiators make your eyes dry in Evanston apartments?',
        a: `Radiators warm the air without adding moisture, which lowers its relative humidity, and a bed or desk right next to one sits in the warmest, driest air in the room. Moving a few feet away and running a humidifier both help.`,
      },
      {
        q: 'Why do my eyes water on the Evanston lakefront in winter?',
        a: `Cold wind dries the surface of the eye, and the eye can respond by flooding with tears. Wraparound glasses and a hood or brim cut the wind and usually reduce both.`,
      },
      {
        q: 'Does Quell ship to Evanston, IL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Evanston and the North Shore, with tracking by email. No delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-judges',
    title: 'Dry eyes for judges',
    description:
      'Briefs, transcripts, e-filed exhibits and hours on the bench add up. Why judges’ eyes dry out, what helps in chambers, and when to see a doctor.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Judges’ eyes dry out because the job is reading and watching for hours with few breaks: briefs and transcripts in chambers, exhibits on courtroom monitors, testimony that demands steady attention, all in climate-controlled buildings. Concentrated staring slows blinking, and dry indoor air speeds evaporation. Build blinks and short breaks into recesses, keep vents off the bench, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why judicial work is hard on the tear film' },
      {
        p: `The tear film has three layers: an oily outer layer that slows evaporation, a watery middle and a mucus layer against the eye. Every full blink spreads it again. When you read closely or watch a witness, you blink less often and sometimes only halfway, so patches of the eye surface dry between blinks. A judge’s day stacks those moments: a morning motion calendar, a trial afternoon, then an evening with a draft opinion. By late in the day, many people describe their eyes as gritty, hot or tired.`,
      },
      { h: 'On the bench' },
      {
        p: `The bench often sits higher than the rest of the room, and in many courtrooms it sits near ceiling diffusers or wall vents. Air moving across your face for a long session matters more than the room temperature. A few things worth checking with court facilities staff or your clerk:`,
      },
      {
        list: [
          `Whether a ceiling diffuser blows straight down onto the bench, and whether its louvers can be turned.`,
          `Whether a small desk fan or space heater at your feet is pointed up at your face.`,
          `How the bench monitor sits. A screen set slightly below eye level lets your lids cover more of the eye than one you look straight across at.`,
          `Lighting glare on the monitor, which makes you squint and stare harder.`,
        ],
      },
      {
        p: `During testimony, you can’t look away for long, but you can make each blink a full one. Closing the eyes completely for a second while counsel retrieves an exhibit or a witness reads a document costs nothing and respreads the tear film.`,
      },
      { h: 'Chambers: briefs, records and opinions' },
      {
        p: `Much of the work happens away from the courtroom: reading briefs and the record, reviewing proposed orders, editing a law clerk’s draft. More of that reading now happens on screens, with an e-filed record open on one monitor and a draft on another. Screens lower the blink rate more than paper does for most people, and a second monitor off to the side means turning your eyes wider for hours.`,
      },
      {
        list: [
          `Center the monitor you read from most, and keep the second one close beside it rather than far to the side.`,
          `Enlarge the text instead of leaning in. Squinting at small type narrows the eyes and slows blinking.`,
          `Every 20 minutes, look across the room or out a window for a few seconds.`,
          `Print the long documents you need to mark up, if that suits how you work; paper gives your eyes a change.`,
          `End a long reading block by closing your eyes for a slow count of ten.`,
        ],
      },
      { h: 'Long trial days and late drafting' },
      {
        p: `Multiday trials compress breaks into short recesses and a lunch hour, and opinion deadlines push reading into evenings at home. Eyes are usually most uncomfortable at the end of a long day, so the last hour of reading tends to be the least productive anyway. If your evening work happens at a laptop on the couch, a heat register or ceiling fan overhead adds its own drying. Our guide on [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) has more on evening habits.`,
      },
      { h: 'Using an eye drop around court hours' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions read: {directions}. With three doses a day, a common pattern is one before the morning calendar, one at the lunch recess and one in the late afternoon, though the timing is yours to set within the label.`,
      },
      {
        list: [
          `Use it in chambers, not on the bench, with clean hands and a mirror if that helps.`,
          `Follow the label: {tip}`,
          `Give it a minute before reading fine print, since a drop can blur vision briefly.`,
          `Keep the bottle in a desk drawer or bag at room temperature. The label’s storage line: {storage}`,
        ],
      },
      {
        p: `The label also says: {warnings}. If you wear contact lenses, or if you already use other eye drops, the label doesn’t give directions for either; ask your eye doctor or a pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering for yourself or for chambers' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, and guest checkout needs no account. Courthouse mailrooms have their own rules for packages, so shipping to your home is usually simpler. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which suits a judge and a law clerk ordering together. No delivery date is promised. Our guide for [lawyers and paralegals](/guides/dry-eyes-for-lawyers-and-paralegals) covers the other side of the courtroom, and the one for [court reporters](/guides/dry-eyes-for-court-reporters-and-transcriptionists) covers the person who never looks away. You can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop and better habits help with everyday dryness. They don’t explain blurred vision that doesn’t clear, pain, or dryness that keeps coming back after a rest day. The label sets the line: {stopUse} An eye doctor can find the cause and decide what to do, and a routine eye exam is also the place to ask whether your reading glasses suit the distance to your bench monitor.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry sitting on the bench?',
        a: `Watching testimony and exhibits for long stretches slows blinking, and courtroom air from overhead vents dries the eye surface between blinks. Full blinks at natural pauses and a vent turned away from the bench help.`,
      },
      {
        q: 'Can a judge use eye drops during a trial?',
        a: `Many judges keep drops in chambers and use them at recesses rather than on the bench. Quell’s label directs one drop three times a day in each eye, which fits around a morning session, lunch and the afternoon.`,
      },
      {
        q: 'How can judges reduce eye fatigue from reading briefs on screens?',
        a: `Center the main monitor slightly below eye level, enlarge the text, look away every 20 minutes, and close your eyes briefly at the end of each reading block. Printing long documents gives your eyes a change from the screen.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-climbing-gym-route-setters',
    title: 'Dry eyes for climbing gym route setters',
    description:
      'Chalk dust, scrubbed holds, drilling overhead and long days on ropes or lifts. Why route setters’ eyes dry out, and what helps on a setting day.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Route setters’ eyes dry out from the work itself: chalk dust stirred up as old problems come down, looking up into bright gym lights while drilling, big ventilation fans in tall buildings, and long days of fixed concentration. Wear eye protection when drilling or scrubbing, keep fans off your face, take blink breaks, and use a lubricating drop as its label directs. Grit or debris in the eye needs an eye doctor or urgent care, not drops.`,
      },
      { h: 'What a setting day does to your eyes' },
      {
        p: `Setting is a different job from climbing, even in the same building. Climbers spend a few minutes at a time on the wall; setters spend hours on it, often with their faces close to the holds they’re turning and tightening. The usual sequence looks like this:`,
      },
      {
        list: [
          `Stripping: taking down old routes, with chalk falling from every hold you remove.`,
          `Washing: scrubbing or pressure-washing holds, which throws spray and loosened chalk.`,
          `Setting: bolting holds and volumes while hanging on a rope, standing on a ladder or riding a lift, looking up and sideways for long stretches.`,
          `Forerunning: climbing the new problems to test them, with chalk on your hands and wiping sweat from your face.`,
        ],
      },
      {
        p: `Each stage puts the eye surface in contact with dust, dry moving air or long stares. The tear film’s oil layer slows evaporation, and blinking spreads tears across the eye. Fewer, shallower blinks while you concentrate let it break up faster, and fine dust adds an irritant on top.`,
      },
      { h: 'Chalk dust on stripping and brushing days' },
      {
        p: `Chalk hangs in the air longest right after a set comes down and after heavy brushing. If the gym lets you, strip and brush before opening, when fewer climbers are adding to the haze, and let the air settle before you go back up. Brush holds downward and away from your face, and stand to the side of the hold rather than directly beneath it. Many setters wear clear eye protection for this work; follow your gym’s rules and wear what it provides.`,
      },
      { h: 'Drilling and looking up into the lights' },
      {
        p: `When you drill a new hold placement or drive bolts overhead, debris and dust fall toward your face, and you’re usually looking up into the ceiling lights at the same time. Bright light makes you squint, and squinting keeps the lids half closed and tense rather than blinking fully. A brimmed cap under your helmet, if your setup allows one, shades the eyes from overhead fixtures. Pause between bolts, look down at the mat for a moment, and finish a few complete blinks.`,
      },
      { h: 'If something gets in your eye' },
      {
        p: `Chalk, a fleck of resin or a sliver of plywood in the eye is not a job for an eye drop. Stop work, come down safely, and don’t rub. Follow your gym’s first aid procedure, and if the feeling of something in the eye doesn’t clear quickly, or the eye hurts or your vision changes, get it seen at an eye doctor or urgent care right away. A lubricating drop isn’t meant to wash out a particle.`,
      },
      { h: 'Fans, heat and the building itself' },
      {
        p: `Climbing gyms are tall, open buildings, and many rely on big ceiling fans and strong ventilation to move air and clear chalk. Up near the ceiling on a setting day, you can spend hours in that moving air. In winter, heated air from high vents adds its own drying, and in summer the air conditioning does the same. Ask whether fans can be slowed or paused in the section you’re setting, and position yourself so the airflow hits your back rather than your face.`,
      },
      { h: 'Using a lubricating drop on a setting day' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Directions: {directions}. That makes three natural points in a setting day: before you start, at lunch and when you finish.`,
      },
      {
        list: [
          `Wash the chalk off your hands first. Chalk on your fingers near the eye or on the bottle is the last thing you want.`,
          `Use the drop on the ground, not on the wall.`,
          `Follow the panel: {tip}`,
          `Keep the bottle in your bag in the setting room, not in a hot or freezing van. Storage: {storage}`,
        ],
      },
      {
        p: `The panel carries this warning as well: {warnings}. The label doesn’t give directions for contact lenses or for using it with other drops; ask your eye doctor or pharmacist about either. Read the rest on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Climbing on your own time' },
      {
        p: `Plenty of setters also climb outside, which brings wind, sun and dust at the crag. Our guide to [dry eyes when rock climbing](/guides/dry-eyes-when-rock-climbing) covers that side. For the gym itself, the [dry eyes at the gym](/guides/dry-eyes-at-the-gym) guide looks at the floor-level view. Quell ships from Brentwood, Tennessee, to any US address, with guest checkout; [order from the home page](/#buy) when you’re ready.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust and dry air explain a lot of discomfort after a long set. They don’t explain pain, vision changes or dryness that lasts days after you’ve been off the wall. The label is clear about when to stop: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after setting routes?',
        a: `Setting combines chalk dust from stripping and brushing holds, long stretches staring at the wall, bright overhead lights and steady airflow from gym fans and vents. Each one speeds evaporation from the tear film or irritates the eye surface.`,
      },
      {
        q: 'Should route setters wear eye protection?',
        a: `Many setters wear clear eye protection when drilling, stripping and washing holds, since dust and debris fall toward the face. Follow your gym’s rules and use what it provides.`,
      },
      {
        q: 'What should I do if chalk dust gets in my eye while setting?',
        a: `Stop, get down safely and don’t rub. Follow the gym’s first aid procedure, and if the feeling doesn’t clear quickly or the eye hurts, see an eye doctor or urgent care promptly. A lubricating drop isn’t for washing out particles.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-offshore-oil-rig-workers',
    title: 'Dry eyes for offshore oil rig workers',
    description:
      'Wind and salt spray on deck, sun off the water, recirculated air in quarters and weeks-long hitches. Why offshore eyes dry out, and what helps.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Offshore rig and platform workers get dry eyes from both halves of the hitch: wind, salt spray and glare on open decks, then mechanically ventilated air in quarters, offices and control rooms. Long shifts and weeks away make it harder to rest your eyes. Wear the eye protection your job requires, keep vents off your bunk, take blink breaks, pack enough lubricating drops, and see an eye doctor between hitches if dryness persists.`,
      },
      { h: 'Why offshore work dries the eyes' },
      {
        p: `The tear film has three layers, with an oily outer layer that slows evaporation. Wind, sun and dry indoor air all strip moisture from it faster, and staring at a task or a screen cuts how often you blink to spread it again. Offshore, you rarely get a break from all of these at once. The deck is exposed on every side, and the living spaces are sealed boxes that depend on air handling for every breath of fresh air.`,
      },
      { h: 'On deck: wind, salt and glare' },
      {
        p: `Open water gives wind nothing to slow it down, and a platform deck sits high above the waves. Salt spray dries on skin, hard hats and lenses, and sunlight comes at you twice, once from above and once reflected off the water. Eyes respond by squinting, which keeps them half closed and tense rather than blinking fully.`,
      },
      {
        list: [
          `Wear the safety glasses or goggles your employer requires; they also cut some of the wind. Tinted versions, where allowed, reduce squinting in glare.`,
          `Rinse salt off your lenses with fresh water rather than wiping them dry, so the residue doesn’t smear across your view.`,
          `Turn your back to the wind when you get a moment to stand still.`,
          `In a lull, close your eyes completely for a few seconds before going back to the task.`,
        ],
      },
      { h: 'Quarters, galley and control rooms' },
      {
        p: `Off shift, you live inside: a shared cabin, the galley, the rec room, and for some crew a control room or office with screens. Those spaces run on mechanical ventilation and air conditioning, and the air moving through them is usually dry. A vent over the bunk can blow across your face for the whole of your sleep period. If the vent above your bunk is adjustable, aim it away from the pillow. If it isn’t, ask whether a cover or deflector is allowed, and sleep with your head at the other end if the bunk permits.`,
      },
      { h: 'Long shifts, night rotations and screens' },
      {
        p: `Twelve-hour shifts are common offshore, and many crews rotate between days and nights partway through a hitch. Night work in a control room means hours in front of monitors with little natural light, and screens lower the blink rate. Look away from the screen every 20 minutes or so, finish each blink, and keep the monitor slightly below eye level. After a night shift, the bunk vent and a reading light on your phone at the end of a long day both add to tired, dry eyes when you finally sleep. Our guide on [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers the rotation in more detail.`,
      },
      { h: 'If something gets in your eye' },
      {
        p: `Grit, a splash of a chemical, a flake of rust or paint: none of these is a job for a lubricating drop. Stop work and report it to the rig medic or follow your installation’s first aid procedure. Don’t rub the eye. Anything that leaves pain, changed vision or the feeling that something is still there needs medical attention, and offshore that starts with the medic.`,
      },
      { h: 'Packing eye drops for a hitch' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses are: {uses}. The directions read: {directions}. Each bottle holds {size}, and the label doesn’t say how many drops that is, so the easiest plan is to see how long a bottle lasts you at home and pack more than that for a full rotation.`,
      },
      {
        list: [
          `Check what your employer allows in your bag. Offshore operators often have rules about medicines on board, and the medic may want to know what you’ve brought.`,
          `Pack an extra unopened bottle, sealed, in case one is lost or a hitch runs long.`,
          `Keep the bottle with you in your cabin, not in a locker on deck. Storage: {storage}`,
          `Follow the panel: {tip}`,
          `Wash salt and grease off your hands before every use.`,
        ],
      },
      {
        p: `The label also says: {warnings}. If you wear contact lenses or use other eye drops, the label doesn’t give directions for either, so check with your eye doctor or pharmacist before you fly out. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering before you crew change' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, so have it sent home or to wherever you stay before crew change, never to the installation itself. No delivery date is promised, so order well before your departure. Guest checkout works, shipping is {shipping}, and {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery. If you also work onshore in the field, our guide for [oil field workers](/guides/dry-eyes-for-oil-field-workers) covers that side. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Your days off are the time to get dryness checked if it hasn’t settled. Stop and get help when the label says to: {stopUse} An eye doctor can find the cause and decide what to do, and can tell you whether anything about your eyewear or routine should change before your next hitch.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry on an offshore rig?',
        a: `Open decks expose your eyes to constant wind, salt spray and glare off the water, and quarters and control rooms run on mechanically ventilated, usually dry air. Long shifts at screens slow blinking on top of that.`,
      },
      {
        q: 'Can I take eye drops offshore?',
        a: `Check your operator’s rules on medicines first, since offshore installations often have their own policies and the medic may ask what you bring. Pack enough for the whole hitch plus a spare, sealed bottle.`,
      },
      {
        q: 'How do I stop the cabin vent from drying my eyes on a rig?',
        a: `Aim an adjustable vent away from your pillow, ask whether a deflector is allowed, or sleep with your head at the other end of the bunk. Moving air across your face for hours speeds evaporation from the tear film.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-djs',
    title: 'Dry eyes for DJs',
    description:
      'Late sets, fog and haze, lights in your face and a laptop screen in a dark booth. Why DJs’ eyes dry out by the end of the night, and what helps.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `DJs get dry eyes from a working night built against them: hours staring at a laptop, controller or waveforms in a dark booth, haze or fog drifting across the stage, lights aimed at the decks, air conditioning or outdoor wind, and sets that end in the small hours. Blink deliberately between tracks, keep fans and haze out of your face, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why a DJ set dries your eyes' },
      {
        p: `The tear film needs regular, complete blinks to stay spread across the eye. Beatmatching, reading waveforms and watching a crowd all pull your attention into a fixed stare, and people blink less when they’re concentrating on a screen. The booth is dark, so the brightest thing in your view is the laptop, and you lean toward it. Meanwhile, the room’s air is moving: club ventilation, a fan at your feet, a haze machine and, at outdoor events, wind and sun.`,
      },
      { h: 'The laptop and the decks' },
      {
        p: `Software and controllers have made the screen the center of a set. Bright waveforms in a dark room make you squint, and squinting holds the lids half closed. A few setup changes help over a long night:`,
      },
      {
        list: [
          `Lower the laptop’s brightness to match the booth instead of leaving it at full.`,
          `Use a laptop stand so the screen sits closer to eye level and you aren’t looking sharply down for hours.`,
          `Learn your transitions well enough to look up at the crowd between them; looking at the far wall resets your focus and invites a full blink.`,
          `Between tracks, close your eyes fully for a second or two. It feels like nothing, and it respreads the tear film.`,
        ],
      },
      { h: 'Fog, haze and lights in your face' },
      {
        p: `Fog and haze make lighting visible, and many clubs and stage shows run a machine for most of the night. The fluid that makes the haze, and the haze itself, can leave eyes feeling dry or irritated, especially if the output blows across the booth. Ask the lighting tech or venue whether the machine can be placed so it doesn’t blow straight at the decks. Moving lights, strobes and LED bars aimed at the stage also make you squint. If a fixture is pointed into your eyes, a small change in its focus or angle often fixes it. Our guide for [musicians and stage performers](/guides/dry-eyes-for-musicians-and-performers) covers stage lighting from the performer’s side.`,
      },
      { h: 'Weddings, bars, festivals: different rooms, different air' },
      {
        list: [
          `Wedding and event DJs often set up near a ballroom’s air returns or under a ceiling vent; position the table so moving air hits your back.`,
          `Bars and small clubs are crowded and warm, so the air conditioning works hard and blows cold, dry air.`,
          `Outdoor festivals add wind, dust and sun on daytime sets. Sunglasses help and are part of the look for many DJs anyway.`,
          `Rooftop and beach gigs mix wind and glare; a booth with a back wall or canopy helps.`,
        ],
      },
      { h: 'Late nights and the drive home' },
      {
        p: `A set that ends at 2 a.m. means packing gear, loading the car and driving home with tired, dry eyes on dark roads, under oncoming headlights. Take a few minutes before you drive: rest your eyes, finish a few slow blinks, and point the car’s vents at your chest rather than your face. When you finally sleep, keep a bedroom fan off your face. Our guide on [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has more for that last stretch.`,
      },
      { h: 'Using a lubricating drop around a gig' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses are: {uses}. The directions say: {directions}. For a night worker, that might look like one when you wake up, one before the set and one on the way out, rather than all three during the gig.`,
      },
      {
        list: [
          `Wash your hands before you use it. Controllers, cables and bar tops are not clean surfaces.`,
          `Do it before you go on, not mid-mix; a drop can blur your vision for a moment.`,
          `Keep the bottle in your backpack, not in the car with your gear on a hot afternoon or a freezing night. The panel says: {storage}`,
          `And the panel’s reminder: {tip}`,
        ],
      },
      {
        p: `The panel also notes: {warnings}. The label doesn’t cover contact lenses or using it with other drops; ask your eye doctor or a pharmacist about either. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting it to you' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, including a home base between tour dates. Guest checkout takes a few minutes and doesn’t care what time it is. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order ahead of a busy stretch of weekends. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Haze, late nights and screens explain a lot of tired, dry eyes. They don’t explain pain, vision that stays blurry or dryness that lingers through your days off. Follow the label: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I DJ?',
        a: `Staring at a bright laptop or controller in a dark booth slows blinking, while haze, stage lights and club air conditioning dry the eye surface between blinks. Late finishes add tired eyes to the mix.`,
      },
      {
        q: 'Can fog machines dry out your eyes as a DJ?',
        a: `Haze and fog drifting across the booth can leave eyes feeling dry or irritated, especially when the machine blows straight at the decks. Ask the venue to place it so the output goes elsewhere.`,
      },
      {
        q: 'When should a DJ use eye drops during a gig?',
        a: `Before the set or during a break, not mid-mix, since a drop can blur vision briefly. Quell’s label directs one drop three times a day in each eye, so a night worker can space doses across waking hours.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-sonographers',
    title: 'Dry eyes for sonographers',
    description:
      'Dim scan rooms, hours watching a monitor while you hold the transducer, back-to-back patients. Why sonographers get dry eyes, and what helps.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Sonographers get dry eyes because the job is an extended stare at a monitor in a dim room while one hand guides the transducer and the other works the controls. Concentration slows blinking, and clinic air dries the eye surface. Turn vents away from the scan station, build full blinks into each exam, rest your eyes between patients, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'The scan room and your blink rate' },
      {
        p: `Ultrasound images are easiest to read in low light, so most scan rooms are dimmed. The monitor becomes the bright point in the room, and your eyes lock onto it while you hunt for the right plane, freeze, measure and annotate. Fine detail on a screen is exactly the work that slows blinking. The tear film’s oily outer layer slows evaporation, but between infrequent blinks it thins anyway. By the end of a full schedule, eyes can feel gritty, hot or heavy.`,
      },
      { h: 'Setting up the station' },
      {
        list: [
          `Raise or lower the monitor arm so the screen sits at or slightly below eye level when you’re in your scanning posture, not just when you sit down.`,
          `Bring the monitor close enough that you don’t lean in to see detail.`,
          `Keep a little ambient light on rather than a fully dark room; a small lamp behind the screen eases the contrast between the bright monitor and the dark walls.`,
          `Check where the ceiling diffuser sits. A steady stream of air over the station dries your eyes faster than the room temperature suggests.`,
          `Turn down the monitor brightness to suit the room.`,
        ],
      },
      { h: 'Building blinks into each exam' },
      {
        p: `You can’t look away mid-measurement, but every exam has natural pauses: while the patient turns, while you change transducers, while you wait for a breath hold. Use those moments to close your eyes completely for a second. Between patients, look at the far wall or out a door for a few seconds. These are small habits, but they add up across a schedule of a dozen or more exams.`,
      },
      { h: 'Reading, reporting and the rest of the shift' },
      {
        p: `Scanning isn’t the only screen time. Worksheets, preliminary reports, prior studies and the electronic record all go on a monitor too, often in the same dim room. If you can, do charting with the lights up, and move to a desk with a better setup for longer documentation. Our guide for people who [read medical images](/guides/dry-eyes-reading-medical-images) looks at the reading-room side of imaging, and the one for [radiology techs](/guides/dry-eyes-for-radiology-techs) covers the rest of the department.`,
      },
      { h: 'Portables, call and long days' },
      {
        p: `Bedside scans in the ICU or the emergency department mean working in whatever light and air the unit has, sometimes with a laptop-sized machine at an awkward height. On-call nights stack long concentration onto tired eyes. A few habits travel well:`,
      },
      {
        list: [
          `Angle the portable’s screen so you aren’t craning to see it.`,
          `Keep a few seconds at the end of each portable scan to rest your eyes before you push the machine back.`,
          `On a call night, sleep away from fans or vents blowing across your face.`,
        ],
      },
      { h: 'Gel, gloves and your eyes' },
      {
        p: `Gel and gloves are part of every exam, and none of it belongs near your eyes. Remove gloves and wash your hands before you touch your face or an eye drop bottle. If gel, a cleaning product or anything else splashes into your eye, follow your department’s procedure for eye exposure and get it checked; don’t reach for a lubricating drop to deal with it.`,
      },
      { h: 'Using a lubricating drop on a scan day' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions: {directions}. On a day shift, that can be before your first patient, at lunch and at the end of the day, away from the scan room.`,
      },
      {
        list: [
          `Use it with clean, ungloved hands, then give it a minute before your next scan, since a drop can blur vision briefly.`,
          `Follow the label: {tip}`,
          `Keep it in your locker or bag at room temperature. Storage, from the panel: {storage}`,
        ],
      },
      {
        p: `The panel also says: {warnings}. If you wear contact lenses or use another eye drop, the label doesn’t give directions; ask your eye doctor or a pharmacist. Every line is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering for yourself or the department' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Guest checkout needs no account, shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised. Shipping to home is often simpler than a hospital mailroom. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Fine visual work, hour after hour, is a good reason to keep up with your own eye exams. If dryness persists, or you notice pain or blurred vision that doesn’t clear, the label is clear: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why do sonographers get dry eyes?',
        a: `Scanning means watching a monitor closely in a dim room for long stretches, which slows blinking, and clinic ventilation dries the eye surface between blinks. A full schedule of exams adds up over the day.`,
      },
      {
        q: 'How should a sonographer set up the monitor to reduce eye strain?',
        a: `Position the screen at or slightly below eye level in your scanning posture, close enough that you don’t lean in, with brightness matched to the room. A little ambient light behind the screen eases contrast.`,
      },
      {
        q: 'Can I use eye drops between ultrasound patients?',
        a: `Yes, if you remove gloves and wash your hands first and give it a minute before the next scan. Quell’s label directs one drop three times a day in each eye.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-widowed-parent',
    title: 'Christmas gifts for a widowed parent',
    description:
      'Kind, practical Christmas gift ideas for a mom or dad spending the holidays without their spouse, from the tasks that got harder to small comforts.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `The most useful Christmas gifts for a widowed parent replace something that went missing with their spouse: the person who drove at night, fixed the router, kept the calendar or cooked the big meal. Give your time first, then practical help with those jobs, then comforts for long winter evenings, like good reading light or a bedroom humidifier. Small personal items belong in the stocking, chosen because they’ve mentioned needing them.`,
      },
      { h: 'Start with what changed in their week' },
      {
        p: `Before shopping, think about the jobs your parent’s spouse used to handle. Grief is hard enough without a pile of small tasks nobody taught them. A gift that takes one of those off their plate can mean more than anything in a box. Ask siblings what they’ve noticed, and listen for the phrases your parent repeats on the phone: “I can’t figure out the thermostat,” “I don’t like driving after dark now,” “Your mother always did the cards.”`,
      },
      {
        list: [
          `If the late spouse did the driving, a set of prepaid rides, or your own standing offer of a ride every Tuesday, written on a card.`,
          `If they handled technology, an afternoon of setting up the phone, the TV and the video calls, with a written cheat sheet left by the computer.`,
          `If they kept up the house, a scheduled furnace check, gutter cleaning or snow removal, booked and paid for.`,
          `If they cooked, a few weeks of prepared meals, or a cooking afternoon together.`,
          `If they managed the money, help finding a trusted advisor, offered gently rather than taken over.`,
        ],
      },
      { h: 'Time is the gift they’ll use most' },
      {
        p: `The first Christmas alone is often the hardest, and the weeks after New Year’s can be harder still, when visitors go home. A gift of time spreads past December 25:`,
      },
      {
        list: [
          `A standing weekly call at a set time, written into a calendar you give them.`,
          `A monthly lunch or movie, with dates already picked for January through March.`,
          `A shared project: a family photo book you build together, or labeling old photos so names aren’t lost.`,
          `A class they’ve talked about taking, paid for, with a friend or with you.`,
        ],
      },
      { h: 'Comfort for long winter evenings at home' },
      {
        p: `Evenings are when an empty house is felt most, and winter makes them long. Practical comforts help: a warm throw for their chair, a good reading lamp that puts light on the page rather than in their eyes, an audiobook subscription, a large-print puzzle book. A heated house in winter dries the air, and many older adults notice dry, tired eyes when they read or watch TV for hours. A bedroom humidifier, set up and shown to them, or a reading chair moved away from a heat register, is the kind of help they may not think to ask for. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains why.`,
      },
      { h: 'Keepsakes, handled with care' },
      {
        p: `Memorial gifts can be lovely or painful, and only you know your parent. If they like to talk about their spouse, a framed photo, a recipe card in their late partner’s handwriting turned into a printed tea towel, or a recording of family stories can be treasured. If they’re still raw, a keepsake can wait for an anniversary or a birthday, and a quieter gift fits better now. When in doubt, ask a sibling or a close friend of theirs.`,
      },
      { h: 'Small, practical items for the stocking' },
      {
        p: `A stocking gives you room for the little things that make daily life easier: a magnifier for small print, a pill organizer if they’ve asked for one, warm slippers with grip, a phone charger for the bedside. If your parent has mentioned dry eyes this winter, a bottle of lubricating eye drops fits here too. Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. Check first that they don’t already use eye drops from their own eye doctor, since the label doesn’t give directions for using it with other drops. The panel also says: {warnings}. Our guide to [giving eye drops to a parent or grandparent](/guides/eye-drops-for-a-parent-or-grandparent) covers reading the label together and handling the bottle.`,
      },
      { h: 'Sending a gift if you can’t be there' },
      {
        p: `If distance keeps you apart this Christmas, a package with a handwritten note matters. For Quell, you can ship straight to your parent’s address with guest checkout; we ship from Brentwood, Tennessee, to US addresses. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order well before the holiday; Christmas falls on a Friday this year. Our guide on [whether the gift recipient sees the price](/guides/will-the-gift-recipient-see-the-price) answers the usual gift questions. Unopened bottles can be refunded within {returnDays} days of delivery if it turns out they don’t need them.`,
      },
      { h: 'When a gift isn’t the answer' },
      {
        p: `Sometimes the most helpful thing is noticing. If your parent seems to be struggling more as the months pass, isn’t eating or sleeping, or has stopped seeing friends, encourage them to talk with their own doctor, and offer to go along. The same goes for their eyes: if dryness hangs on or their vision changes, an eye doctor can find the cause and decide what to do. For the dad or mom on your list more generally, see our [Christmas gifts for mom](/guides/christmas-gifts-for-mom) and [Christmas gifts for dad](/guides/christmas-gifts-for-dad) guides.`,
      },
    ],
    faq: [
      {
        q: 'What do you give a widowed parent for their first Christmas alone?',
        a: `Time and practical help usually mean the most: standing plans for the weeks after the holidays, rides, tech setup or home maintenance that their spouse used to handle. Keepsakes can be lovely if they like to talk about their spouse.`,
      },
      {
        q: 'Is a memorial gift a good idea for a grieving parent at Christmas?',
        a: `It depends on where they are in their grief. If they enjoy sharing memories, a framed photo or a family-story recording can be treasured; if they’re still raw, a quieter practical gift may suit this year better.`,
      },
      {
        q: 'Are eye drops a thoughtful stocking stuffer for an older parent?',
        a: `They can be, if your parent has mentioned dry eyes. Check first that they aren’t already using drops from their own eye doctor, and read the label together so they know the directions.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-christmas-eve-candlelight-service',
    title: 'Dry eyes at a Christmas Eve candlelight service',
    description:
      'A full, warm sanctuary, a candle near your face and a late hour. Why Christmas Eve candlelight services dry your eyes, and what to do about it.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `A Christmas Eve candlelight service is hard on dry eyes for three reasons: a packed, heated sanctuary, a lit candle held close to your face, and a late hour when eyes are already tired. Hold your candle at chest height and slightly forward, sit away from heating vents, blink fully during the readings, and if you use a lubricating drop, put it in before you leave home, following its label.`,
      },
      { h: 'Why your eyes feel it on Christmas Eve' },
      {
        p: `Christmas Eve falls on a Thursday this year, and many churches hold a late service that runs toward midnight. By then you’ve had a full day, possibly a long drive and a heated house full of family. The sanctuary itself is usually the busiest it will be all year: every pew full, the heat turned up for the evening, doors opening to the cold and closing again. Warm, moving, dry air speeds evaporation from the tear film, and tired eyes blink less fully. Then the lights go down and everyone lights a candle.`,
      },
      { h: 'Holding your candle so it doesn’t bother your eyes' },
      {
        p: `A candle flame gives off heat and a thin trail of smoke, and in a still room it rises straight up toward whatever is above it, which is often your face. Staring into a flame also tends to fix your gaze and slow your blinking.`,
      },
      {
        list: [
          `Hold the candle at chest height and a little in front of you, not under your chin.`,
          `Use the paper drip guard most churches provide, and keep it level so you aren’t tipping your head to watch the wax.`,
          `Look at the front of the sanctuary or the person reading, not at your own flame.`,
          `If someone beside you holds theirs close to your face, shift a little or turn your shoulder.`,
          `When the moment for candles ends, extinguish yours as your church directs, and look away from the smoke as it rises.`,
        ],
      },
      { h: 'Where to sit' },
      {
        p: `Arrive early if you can choose. Seats right next to floor registers, under ceiling vents or beside the doors get the most moving air: warm and dry from the heat, or a cold blast every time the doors open. A seat a few rows back from the front, away from the aisles, tends to be calmer. If you sing in the choir or read, ask whether a heater or fan near the chancel can be turned away from where you stand. Our guide for [pianists and church musicians](/guides/dry-eyes-for-pianists-and-church-musicians) covers the view from the front.`,
      },
      { h: 'Reading by candlelight' },
      {
        p: `Many services ask the congregation to sing a verse or two of a carol by candlelight, reading words from a bulletin in near darkness. Dim light makes you squint and stare harder at the page. If you know the words, sing from memory and look up. If you need the bulletin, hold it at a comfortable distance and let the readings be a moment to close your eyes and rest them. Bring your reading glasses if you use them; leaning in toward a small print bulletin brings your face closer to your candle, too.`,
      },
      { h: 'Before you leave home, and the drive back' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses: {uses}. Its directions: {directions}. If one of your three daily doses lands in the evening, putting it in before you leave gives it time to settle before the service starts, and you won’t be reaching for a bottle in a dark pew. Follow the label: {tip}.`,
      },
      {
        p: `The drive home after a late service means darkness, oncoming headlights and a car heater that’s been blasting to warm everyone up. Aim the vents at the floor and windshield, not at faces, and if your eyes feel tired and dry, let a passenger drive. Our guide to [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has more. On a cold night, don’t leave the bottle in the car during the service. The storage line on the panel reads: {storage}.`,
      },
      { h: 'Candles at home on Christmas Eve' },
      {
        p: `Many families keep the candlelight going after church, with candles on the table or a fire in the fireplace. The same idea holds: keep the flames below eye level and to one side of where people sit, and don’t sit directly downwind of a fire’s draft. Our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers home fires in detail. Keep eye drops in a cool spot away from the hearth.`,
      },
      { h: 'If something feels wrong' },
      {
        p: `Smoke and dry air usually leave eyes feeling tired or gritty for a while, and that settles with rest. Wax, a spark or anything else that gets into the eye is different: don’t rub it, and get it checked. The label tells you when to stop and get help: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'Ordering before Christmas' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout. Shipping is {shipping}, and {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order early in December if you want it before Christmas Eve. More winter guides are in [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn at a candlelight service?',
        a: `A candle held close to your face sends heat and a thin trail of smoke upward, and a full, heated sanctuary dries the air. Holding the candle at chest height and slightly forward, and not staring into the flame, usually helps.`,
      },
      {
        q: 'Where should I hold my candle during Silent Night?',
        a: `At chest height and a little in front of you, with the drip guard level. That keeps the heat and smoke from rising straight into your face and keeps your gaze off the flame.`,
      },
      {
        q: 'Can I use eye drops before a Christmas Eve service?',
        a: `Yes, if it fits the label’s directions. Quell’s label directs one drop three times a day in each eye, so putting an evening dose in before you leave home avoids fumbling in a dark pew.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-baseboard-heat',
    title: 'Dry eyes from baseboard heat',
    description:
      'Baseboard heaters don’t blow air, but a heated room still gets dry. Why baseboard heat can dry your eyes, and how to set up beds, desks and humidity.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Baseboard heat can dry your eyes because warming winter air lowers its relative humidity, whether or not a fan pushes it around. The heaters also send a column of warm air up the wall, so a bed or desk pushed against one sits in the driest, warmest air in the room. Move furniture a little away from the heaters, lower bedroom thermostats at night, add moisture with a humidifier, and use a lubricating drop as its label directs.`,
      },
      { h: 'How baseboard heat warms a room' },
      {
        p: `Baseboard heaters run along the bottom of a wall, usually under windows. Electric units warm metal fins with a heating element; hot-water (hydronic) units pass water from a boiler through a finned pipe. Either way, cool air enters at the bottom, warms over the fins and rises out the top. That rising warm air spreads across the ceiling, cools, sinks on the far side of the room and comes back to the heater. It’s a quiet, slow loop called convection, with no blower.`,
      },
      { h: 'Why the air still gets dry' },
      {
        p: `People sometimes expect baseboard heat to feel less drying than forced air because nothing blows. It’s true there’s no gust from a register. But the dryness comes from the temperature change, not from the fan. Cold winter air holds very little water. Warm it up indoors and the same water is spread across air that could hold much more, so relative humidity drops. Dry indoor air speeds evaporation from the tear film, the thin layer of oil, water and mucus that covers the eye. Our guide to [forced-air heat](/guides/dry-eyes-from-forced-air-heat) covers the blower side, and the [radiator heat](/guides/dry-eyes-from-radiator-heat) guide covers the other no-fan system.`,
      },
      { h: 'The bed against the heater' },
      {
        p: `Bedrooms are small, and baseboards often run along the wall where the bed fits most easily. A headboard right over a heater means the warm current rises past your face for hours while you sleep, and many people wake with eyes that feel dry and sticky. A few fixes:`,
      },
      {
        list: [
          `Move the bed so the headboard is on a wall without a heater, if the room allows.`,
          `If it can’t move, pull it a few inches out from the wall and keep bedding, pillows and curtains clear of the heater. Follow the heater’s manual for the clearance it needs.`,
          `Turn the bedroom thermostat down at night. Baseboard systems often have a thermostat in each room, which makes this easy.`,
          `Run a humidifier in the bedroom, set on a dresser or table away from the heater, and clean it on the schedule its maker gives.`,
        ],
      },
      { h: 'Home offices and reading chairs' },
      {
        p: `A desk under a window is a common setup, and the baseboard is usually under the same window. Warm air rising past a monitor reaches your face, and screens already lower how often you blink. Turn the desk so the heater is beside you rather than in front, or move it to an inside wall. A reading chair pulled close to a heater for warmth puts you in the same current; a blanket gives you the warmth without the dry air.`,
      },
      { h: 'Per-room thermostats: use them' },
      {
        p: `One advantage of baseboard heat is control. Each room’s thermostat lets you keep the living room comfortable while the bedroom runs cooler. A cooler room needs less heating, and the air in it stays less dry. Keep doors closed to rooms you aren’t using, and avoid cranking a cold room up high to warm it fast; the heaters will run hot for a long time and dry the room more than a moderate setting would.`,
      },
      { h: 'Dust on the fins' },
      {
        p: `Dust settles on baseboard fins between seasons, and when the heat first comes on in the fall it can give off a faint burning smell and stir up dust. That dust in the air can make eyes feel gritty. With the power off and the units cool, vacuum the fins gently with a brush attachment before heating season, and again midwinter if you have pets. Don’t bend the fins or push anything inside the cover.`,
      },
      { h: 'Using a lubricating drop in a heated house' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Its storage line: {storage}. A shelf near a baseboard heater runs warmer than the rest of the room, so keep the bottle in a drawer or on a nightstand away from the heat. Follow the panel: {tip}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes still feel dry after you’ve moved the bed, added humidity and turned the heat down, the room may not be the whole story. The label’s stop-use line is clear: {stopUse} An eye doctor can find the cause and decide what to do. More winter advice is in [gifts and the holidays](/guides/topic/seasonal), and you can [order Quell from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Does baseboard heat dry out the air?',
        a: `Yes. Any heat that warms cold winter air lowers its relative humidity, even without a fan. Baseboard heaters don’t add moisture, so rooms heated by them can get dry in the coldest months.`,
      },
      {
        q: 'Is it bad to sleep with your head next to a baseboard heater?',
        a: `Warm air rises from the heater past the headboard all night, which can leave your eyes dry by morning. Moving the bed, pulling it out from the wall and lowering the bedroom thermostat all help; follow the heater’s manual for clearance.`,
      },
      {
        q: 'Is baseboard heat less drying than forced air?',
        a: `It moves air more gently, so there’s no gust from a register, but both lower humidity by warming cold air. A humidifier and cooler settings matter for both.`,
      },
    ],
  },
  {
    slug: 'what-does-changes-in-your-vision-mean-on-eye-drops',
    title: 'What “changes in your vision” means on eye drops',
    description:
      'Eye drop labels say to stop and ask a doctor if your vision changes. What counts, how it differs from a brief blur after a drop, and what to do.',
    category: 'label',
    addedOn: '2026-11-23',
    body: [
      {
        p: `On an eye drop’s Drug Facts panel, “changes in your vision” is one of the signs that mean stop using the drop and ask a doctor. It covers any change in how you see that doesn’t clear in a moment with blinking: blur that lingers, dimming, distortion, new spots, halos or double vision. A short blur right after a drop goes in is expected with some drops; a change that stays is not.`,
      },
      { h: 'Where the phrase sits on the panel' },
      {
        p: `The words appear in the “Stop use and ask a doctor if” section, alongside eye pain and continued irritation. Quell’s own panel, put as a sentence, reads: {stopUse}`,
      },
      {
        p: `That section is different from “Do not use,” which lists reasons not to start (Quell’s is: {doNotUse}), and from “When using this product,” which gives handling rules. Stop-use items are things that can happen after you start. Our guide to [do not use vs. stop use](/guides/do-not-use-vs-stop-use-on-a-drug-label) explains how the sections fit together.`,
      },
      { h: 'What counts as a change in vision' },
      {
        p: `The label doesn’t list examples, and it isn’t asking you to judge how serious something is. It asks you to notice that your sight is different from your normal and to get it looked at. People describe changes like these:`,
      },
      {
        list: [
          `Blur that stays after you’ve blinked a few times and waited several minutes.`,
          `Things looking dimmer, washed out or as if through a film that doesn’t clear.`,
          `Straight lines looking wavy or bent.`,
          `New spots, specks, flashes or shadows in your view.`,
          `Rings or halos around lights that you didn’t notice before.`,
          `Seeing double, or having trouble focusing at a distance that used to be easy.`,
        ],
      },
      {
        p: `Any one of them is enough to stop and ask. If a change comes on suddenly, or comes with pain, don’t wait for a routine appointment; get care right away. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers which ones are urgent.`,
      },
      { h: 'A brief blur right after a drop is different' },
      {
        p: `Many lubricating drops, especially ones with oils, can blur your vision for a moment while the drop spreads across the eye. Quell’s panel notes: {milky}. A milky drop can leave things hazy for a short time after it goes in, which is why it makes sense to wait before driving or reading fine print. That brief blur clears as you blink. The stop-use line is about something else: a change that doesn’t clear, or that shows up apart from putting a drop in. Our guide on [blurry vision after eye drops](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) goes into the short-term kind.`,
      },
      { h: 'Why “ask a doctor” rather than “keep going”' },
      {
        p: `A lubricating drop is meant for the surface of the eye. The Uses section on Quell’s label reads: {uses}. A change in vision can come from many causes that a surface drop doesn’t address, and only an exam can tell them apart. Continuing to use a drop while your vision is changing can also make it harder to tell whether the drop has anything to do with it. Stopping keeps the picture clear for whoever examines you. An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'What to do if your vision changes' },
      {
        list: [
          `Stop using the drop.`,
          `Note when you first noticed the change, whether it’s in one eye or both, and whether it came on suddenly or gradually.`,
          `Call an eye doctor, or go to urgent care or an emergency room if the change is sudden or painful.`,
          `Bring the bottle and carton. The lot number and expiration date on them help if anyone needs to check the product.`,
          `Don’t restart the drop until a doctor tells you it’s fine to.`,
        ],
      },
      {
        p: `If you have a question about the product itself, such as its appearance or a damaged seal, call us at {phone} ({hours}). Medical questions belong with your doctor or pharmacist.`,
      },
      { h: 'Reading the rest of the panel with the same care' },
      {
        p: `The vision line is one of several that ask you to watch for something. The panel also says: {warnings}. And for color: {doNotUse}. Taken together, the panel is telling you what normal looks like for this product and what should send you to a doctor instead. The whole panel is on our [Drug Facts page](/drug-facts), and [continued irritation](/guides/what-does-continued-irritation-mean-on-eye-drops) has its own guide.`,
      },
    ],
    faq: [
      {
        q: 'What does change in vision mean on an eye drop label?',
        a: `It means any difference in how you see that doesn’t clear quickly with blinking, such as lingering blur, dimming, distortion, new spots or halos. The label says to stop using the drop and ask a doctor if it happens.`,
      },
      {
        q: 'Should I stop using eye drops if my vision gets worse?',
        a: `Yes. Quell’s label lists changes in your vision as a reason to stop use and ask a doctor. Get care right away if the change is sudden or comes with pain.`,
      },
      {
        q: 'Is a little blur after eye drops a change in vision?',
        a: `A brief blur right after a drop goes in, which clears as you blink, is common with milky or oil-containing drops. Blur that stays, or that appears apart from using the drop, is the kind the label means.`,
      },
    ],
  },
  {
    slug: 'returning-a-quell-gift-after-christmas',
    title: 'Returning a Quell gift after Christmas',
    description:
      'Got Quell as a gift you don’t need, or gave one that missed? How refunds on unopened gift bottles work after Christmas, who asks, and the deadline.',
    category: 'returns',
    addedOn: '2026-11-23',
    body: [
      {
        p: `An unopened Quell gift can be refunded after Christmas if the person who placed the order contacts us within {returnDays} days of delivery. The refund covers the product price and goes back on the original order; you don’t mail the bottle back, and original shipping isn’t refunded. Opened bottles can’t be refunded. If you received the gift, ask the giver to call {phone} with the order number.`,
      },
      { h: 'What our Terms say' },
      {
        p: `Section 7 of our [Terms](/terms) covers returns and refunds. In short:`,
      },
      {
        list: [
          `Unopened bottles: contact us within {returnDays} days of delivery and we refund the product price. You don’t need to send the bottle back.`,
          `Original shipping is not refunded.`,
          `Opened bottles can’t be refunded, returned or resold.`,
          `Damaged or incorrect orders, or a broken tamper seal: contact us within {returnDays} days and we replace the order at no charge.`,
          `For a refund or replacement, call {phone} ({hours}) with your order number.`,
        ],
      },
      { h: 'Who asks for the refund' },
      {
        p: `A refund goes back through the order, and the order belongs to whoever placed and paid for it. That’s usually the giver. The recipient doesn’t have the order number unless it was passed along, and the refund wouldn’t go to them anyway. So the practical path is simple:`,
      },
      {
        list: [
          `If you gave the gift and it isn’t needed, find your confirmation email, note the order number, and call.`,
          `If you received it, tell the giver. It can feel awkward, but most people would rather have the refund than a bottle in a drawer.`,
          `If you’d rather not mention it, the bottle can also simply be kept unopened for later or passed to someone else in the household who uses eye drops, each person with their own bottle.`,
        ],
      },
      { h: 'The clock started at delivery, not on Christmas' },
      {
        p: `The {returnDays} days count from the day the package was delivered, not from the day it was unwrapped. A gift ordered early and delivered in mid-December has less time left on December 26 than people expect. For example, a bottle delivered on December 15 reaches day 30 on January 14. One delivered on December 1 reaches it on December 31. Our guide on [when the refund window starts](/guides/when-does-the-eye-drop-refund-window-start) walks through more situations.`,
      },
      {
        p: `To find the delivery date, check the tracking link in the shipping email, or look the order up on our [order page](/orders) with the order number and the email address used at checkout.`,
      },
      { h: 'Unopened means the seal is intact' },
      {
        p: `The refund applies to bottles that haven’t been opened. An opened bottle of eye drops can’t be checked for how it was handled or stored, so it can’t be refunded or resold. If a gift was opened to try it and turned out not to suit, the refund isn’t available, but the label still applies. If the reason it didn’t suit is discomfort, look at the label’s stop-use line: {stopUse}`,
      },
      { h: 'If the gift arrived damaged or wrong' },
      {
        p: `That’s a different case. If the box arrived crushed with a broken bottle, the wrong item came, or the tamper seal was broken on arrival, we replace the order at no charge when you contact us within {returnDays} days. A gift wrapped without being checked first might only be opened on Christmas morning; call as soon as you see the problem. Our guides to a [damaged order](/guides/damaged-order) and a [broken tamper seal](/guides/broken-tamper-seal) explain what to have ready.`,
      },
      { h: 'Before you call' },
      {
        list: [
          `Have the order number from the confirmation email. Order numbers start with “Q-”.`,
          `Know the name and email used to place the order.`,
          `Know how many bottles you want refunded and that they’re unopened.`,
          `Call on a weekday during our hours: {hours}.`,
        ],
      },
      {
        p: `We can’t promise when the refund will appear on the card statement, because that depends on the card issuer. Our guide on [when a refund shows up](/guides/when-will-my-eye-drop-refund-show-up) explains what affects it.`,
      },
      { h: 'Multi-bottle gifts and gifts for several people' },
      {
        p: `Holiday orders often cover more than one person: three bottles split between parents and a sibling, say, all shipped to one house. Each unopened bottle is its own case. If one person opened theirs and the other two bottles are still sealed, the sealed ones can be refunded within the window while the opened one can’t. If you shipped separate orders to separate addresses, each order has its own delivery date and its own {returnDays}-day clock, so check them one at a time. Keep in mind that refunds cover the product price only, so any shipping paid on the original order stays as it was. If you have a question about how a partial refund works on a larger order, ask when you call; we’d rather explain it on the phone than have you guess.`,
      },
      { h: 'Keeping it instead' },
      {
        p: `If the recipient does get dry eyes in winter, the bottle may be useful later. Unopened bottles should be kept as the label directs: {storage}. Check the expiration date printed on the carton. If you’d like to know more about what’s inside before deciding, see the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can I return eye drops I got as a Christmas gift?',
        a: `If the bottle is unopened and it’s within {returnDays} days of delivery, the person who placed the order can call {phone} with the order number for a refund of the product price. The bottle doesn’t need to be sent back.`,
      },
      {
        q: 'Do I have to send a Quell gift back to get a refund?',
        a: `No. Under our Terms, unopened bottles are refunded without being returned, because a bottle that has left our control can’t be resold. Original shipping isn’t refunded.`,
      },
      {
        q: 'What if the gift was delivered a month or more before Christmas?',
        a: `The refund window counts from delivery, so a bottle delivered in late November may be past it by Christmas. Call {phone} with the order number and we can check the delivery date.`,
      },
    ],
  },
  {
    slug: 'can-eye-drops-help-with-headaches-from-screens',
    title: 'Can eye drops help with headaches from screens?',
    description:
      'Eye drop labels don’t mention headaches. What a lubricating drop is for, screen habits that ease tired eyes, and when a headache needs a doctor.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eye drops aren’t a headache remedy. A lubricating drop like Quell is labeled to relieve dryness of the eye and protect against further irritation, and headaches aren’t on its label. If long screen sessions leave your eyes dry and your head aching, a drop may help the dry-eye part; screen habits help both; and headaches that keep coming back belong with a doctor.`,
      },
      { h: 'What the label actually covers' },
      {
        p: `Every over-the-counter drug has a Uses section that says what it’s for. Quell’s reads: {uses}. That’s about the surface of the eye. It doesn’t mention pain elsewhere in the head, and a drop placed on the eye isn’t meant to reach the causes of a headache. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is a different job. Our guide to [the Uses section](/guides/the-uses-section) explains how to read it on any label.`,
      },
      { h: 'Why screens and headaches show up together' },
      {
        p: `Plenty of people notice that a long afternoon at a monitor ends with tired, dry eyes and a sore head. The two often travel together, but that doesn’t mean one causes the other, and the reasons differ from person to person. Some of what goes on during a long screen session is well understood:`,
      },
      {
        list: [
          `People blink less often when they concentrate on a screen, and blinks become partial, so the tear film breaks up and eyes feel dry.`,
          `Heated or air-conditioned office air speeds evaporation from the eye.`,
          `Glare and a screen that’s too bright or too dim make people squint.`,
          `Hours in the same position, often leaning toward the screen, tighten the neck and shoulders.`,
          `Long sessions also crowd out meals, water and breaks.`,
        ],
      },
      {
        p: `A drop can address only the first two, and only the eye part of them. Which of the others matters for your headaches is something a doctor can help you sort out.`,
      },
      { h: 'Screen habits that ease tired, dry eyes' },
      {
        list: [
          `Every 20 minutes or so, look at something across the room for a few seconds.`,
          `Make a point of completing your blinks; a few slow, full blinks when you notice your eyes feel dry respread the tear film.`,
          `Set the monitor about an arm’s length away, with the top at or slightly below eye level.`,
          `Match screen brightness to the room, and cut glare from windows or overhead lights.`,
          `Enlarge text instead of leaning in to read it.`,
          `Turn desk fans and vents so they don’t blow across your face.`,
          `Stand up and move every hour; your neck and shoulders get the break too.`,
        ],
      },
      {
        p: `Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side in more detail.`,
      },
      { h: 'Is my glasses prescription part of it?' },
      {
        p: `Screens sit at a distance that some glasses aren’t set up for. Reading glasses are often made for a book held closer than a monitor, and progressive lenses may push you to tilt your head back to see the screen. If you’ve been squinting at your monitor or leaning forward to read it, a routine eye exam is a reasonable step. An eye doctor can check whether your current prescription suits the way you work and talk with you about the headaches too.`,
      },
      { h: 'If you decide to use a lubricating drop' },
      {
        p: `If your eyes feel dry during screen work, a lubricating drop used as directed can help with that part. Quell’s directions: {directions}. Spacing three doses across a workday is simple: one before you start, one around lunch, one in the late afternoon. Follow the label: {tip}. A milky drop can blur your vision for a moment, so give it a minute before you go back to fine print. Our guide on [eye drops before or after computer work](/guides/eye-drops-before-or-after-computer-work) covers timing.`,
      },
      {
        p: `Don’t add drops beyond the directions because your head still hurts. More drops won’t change a headache, and the label gives the dose. If you use other eye drops or wear contact lenses, the label doesn’t give directions for either; ask your eye doctor or pharmacist.`,
      },
      { h: 'When a headache needs a doctor' },
      {
        p: `Headaches have many causes, and only a doctor can find which one applies to you. Talk to your doctor if headaches are frequent, getting worse, waking you up or changing in pattern. Get care right away for a sudden, severe headache, or one that comes with vision changes, weakness, confusion or trouble speaking. For the eyes themselves, Quell’s label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers more.`,
      },
    ],
    faq: [
      {
        q: 'Do eye drops help headaches?',
        a: `Lubricating eye drops aren’t labeled for headaches. Quell’s label covers dryness and irritation of the eye, so it may help eyes that feel dry during screen work, but headaches should be discussed with a doctor.`,
      },
      {
        q: 'Can dry eyes cause headaches from computer use?',
        a: `Dry eyes and headaches often show up together after long screen sessions, but that doesn’t mean one causes the other. Squinting, posture and glare all play a part, and a doctor can help work out what’s behind your headaches.`,
      },
      {
        q: 'Should I see an eye doctor for headaches after screen time?',
        a: `It’s reasonable, especially if you squint or lean in to read your monitor, since your glasses may not suit that distance. See a doctor promptly for headaches that are sudden, severe or come with vision changes.`,
      },
    ],
  },
  {
    slug: 'why-do-some-eye-drops-have-preservatives',
    title: 'Why do some eye drops have preservatives?',
    description:
      'Preservatives keep microbes from growing in a bottle opened again and again. Why multi-use drops often contain them, and what preservative-free asks of you.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Some eye drops have preservatives because a multi-use bottle is opened dozens of times over weeks, and every opening is a chance for microbes to get in. A preservative limits their growth in the solution. Preservative-free drops leave that ingredient out, which some people prefer for frequent use, but it means careful handling matters more: a clean tip, a closed cap and storage as the label directs.`,
      },
      { h: 'The problem a preservative solves' },
      {
        p: `An eye drop starts out sterile, sealed at the factory. The moment you break the seal, the bottle is in the real world: your hands, the bathroom counter, a purse, the air. Each time you squeeze out a drop and let the bottle relax, a little air can be drawn back in. Over a month of use, a solution with nothing to stop growth could let microbes multiply. A preservative is an inactive ingredient added to limit that. It doesn’t do anything for your eyes; it protects the liquid in the bottle.`,
      },
      {
        p: `That’s also why the tamper-evident seal matters on any drop, preserved or not. An intact seal tells you the bottle hasn’t been opened since it was filled. If the seal on a Quell bottle is broken when it arrives, don’t use it; call {phone} within {returnDays} days of delivery and we’ll replace the order at no charge.`,
      },
      { h: 'Why multi-use bottles are where they show up' },
      {
        p: `The need comes from how a product is used, not from what it’s for. Compare the common formats:`,
      },
      {
        list: [
          `Single-use vials hold one dose and are thrown away after opening, so there’s no long stretch of reuse to protect against. These are often preservative-free.`,
          `Multi-use bottles hold many doses and are opened again and again, which is where preservatives are most often used.`,
          `Some multi-use bottles are made without a preservative and rely on the formula, the bottle design and careful handling instead.`,
        ],
      },
      {
        p: `Our guide comparing [single-use vials and multi-dose bottles](/guides/single-use-vials-vs-multi-dose-bottles) goes into the trade-offs between formats.`,
      },
      { h: 'Why some people look for preservative-free' },
      {
        p: `People who use drops several times a day, every day, often prefer to keep the number of ingredients their eyes meet as low as they reasonably can. A preservative is one more ingredient. That doesn’t make every preserved drop a poor choice; it means that for frequent use, many people read the inactive list closely and choose accordingly. If you’re unsure what suits your eyes, an eye doctor or pharmacist can look at the labels with you. Our featured guide on [what preservative-free means](/guides/what-does-preservative-free-mean) covers the term itself.`,
      },
      { h: 'How to tell from a label' },
      {
        list: [
          `Look at the front of the carton for “preservative-free,” but don’t stop there.`,
          `Turn to the Drug Facts panel and read the Inactive ingredients section, where a preservative would be listed.`,
          `If an ingredient name is unfamiliar, ask a pharmacist what it does.`,
          `Check the Other information section for storage directions, which matter more when there’s no preservative.`,
        ],
      },
      {
        p: `Quell is a preservative-free formula. Its inactive ingredients are: {inactives}. Its active ingredients are {actives}. The label doesn’t assign a role to each inactive ingredient, so if you want to know more about one, our [inactive ingredients guide](/guides/the-inactive-ingredients-section) and a pharmacist are good places to start.`,
      },
      { h: 'What preservative-free asks of you' },
      {
        p: `Leaving the preservative out shifts some of the job to the person using the bottle. The habits are simple, and they matter for every drop, preserved or not:`,
      },
      {
        list: [
          `Wash your hands before you open the bottle.`,
          `Follow the label: {tip}. That includes your eyelashes, your fingers and the counter.`,
          `Put the cap back on right after each use.`,
          `Store it as printed: {storage}`,
          `Use your own bottle; don’t share eye drops.`,
          `Check the appearance before each use. Quell’s panel says: {doNotUse}. The drop is milky brown when it’s right, so watch for a change from how it looked when it arrived.`,
        ],
      },
      { h: 'Does preservative-free mean I can use more?' },
      {
        p: `No. The directions on the label are the dose, whatever the formula. Quell’s read: {directions}. If you find yourself wanting more than that, it’s a sign to talk to an eye doctor rather than to change how you use the drop. Our guide on [how often you can use preservative-free drops](/guides/how-often-can-you-use-preservative-free-eye-drops) explains why.`,
      },
      { h: 'When to stop and ask' },
      {
        p: `Whatever the formula, the label tells you when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Questions about the bottle itself, like a broken seal, go to us at {phone}.`,
      },
    ],
    faq: [
      {
        q: 'Why do eye drops need preservatives?',
        a: `A multi-use bottle is opened many times over weeks, and each opening is a chance for microbes to get into the solution. A preservative is added to limit their growth in the bottle.`,
      },
      {
        q: 'Do all eye drops in a bottle have preservatives?',
        a: `No. Many multi-use bottles contain one, but some are made preservative-free. The Inactive ingredients section of the Drug Facts panel is where a preservative would be listed.`,
      },
      {
        q: 'Do preservative-free eye drops need more careful handling?',
        a: `Yes. Without a preservative, clean hands, a tip that never touches anything, a cap put back right away and storage as the label directs all matter more.`,
      },
    ],
  },
  {
    slug: 'can-eye-drops-help-with-eye-twitching',
    title: 'Can eye drops help with eye twitching?',
    description:
      'An eyelid twitch is in the lid, and eye drop labels don’t mention it. What a lubricating drop can and can’t do, and when a twitch needs a doctor.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eye drops aren’t made for eye twitching, and lubricating drop labels don’t mention it. That flicker most people call an eye twitch is usually in the eyelid, not the eye’s surface, and a drop works on the surface. If your eyes also feel dry, a lubricating drop used as directed may help that part. A twitch that goes on for weeks, spreads or closes the eye belongs with a doctor.`,
      },
      { h: 'Where the twitch actually is' },
      {
        p: `When people say their eye is twitching, they usually mean the lower or upper eyelid is flickering on its own, sometimes enough that others can see it, sometimes only felt. The eye itself, the part you see with, isn’t moving. The lid has its own small muscles, and those are what flicker. A lubricating drop is placed onto the surface of the eye and spreads in the tear film. It isn’t aimed at the muscles of the lid.`,
      },
      { h: 'What a lubricating drop is labeled for' },
      {
        p: `The Uses section on an over-the-counter drug’s Drug Facts panel tells you what the product is for. Quell’s says: {uses}. That’s dryness and irritation of the eye’s surface. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. There’s nothing on the label about twitching, and the label is the boundary of what a drug can claim to do. Our guide to [the Uses section](/guides/the-uses-section) explains how to read any label’s Uses.`,
      },
      { h: 'When twitching and dry eyes show up together' },
      {
        p: `Plenty of people notice a twitch in the same stretch of weeks when their eyes feel dry, gritty or tired: a busy season at work, long screen days, short nights, a heated house in winter. Those stretches are hard on the eyes generally. The twitch and the dryness may simply be keeping each other company rather than one causing the other, and the reasons behind a twitch vary from person to person. If the dryness bothers you, address it directly:`,
      },
      {
        list: [
          `Look away from your screen every 20 minutes and finish your blinks.`,
          `Turn vents and fans so they don’t blow across your face, at your desk and in bed.`,
          `Use a humidifier in a dry bedroom during heating season.`,
          `Set your monitor at or slightly below eye level.`,
          `If you use a lubricating drop, follow its directions exactly.`,
        ],
      },
      {
        p: `If the twitch fades as your schedule settles, that’s good to know. If it doesn’t, the drop wasn’t the right tool for it anyway.`,
      },
      { h: 'What not to do' },
      {
        list: [
          `Don’t add extra drops hoping to settle a twitch. The label’s directions are the dose: {directions}.`,
          `Don’t rub or press on the twitching lid; rubbing irritates the eye’s surface without stopping the flicker.`,
          `Don’t borrow someone else’s prescription drops. Eye drops are for the person they were bought or prescribed for.`,
          `Don’t ignore a twitch that changes: one that spreads, or one that makes the lid close.`,
        ],
      },
      { h: 'When a twitch needs a doctor' },
      {
        p: `Most people know a passing twitch when they feel one. A doctor is the right call when a twitch keeps going for weeks, when it closes your eyelid completely, when other parts of your face start to twitch or pull, or when the lid begins to droop. See a doctor too if the eye becomes painful or your vision changes. For the eye itself, Quell’s label sets the line: {stopUse} An eye doctor or your regular doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the eye side.`,
      },
      { h: 'Notes to bring to the appointment' },
      {
        p: `A twitch often stops by the time you’re sitting in the exam chair, so a few notes help the doctor see what you’ve been seeing. Write down when it started, which eye and which lid, how often it happens and for how long each time, and whether anything else has changed: your sleep, your work hours, new medicines, or how your eyes feel. A short phone video of the twitch, taken when it’s happening, can be useful too. Bring any eye drops you’ve been using, with the carton, so the doctor can read the label.`,
      },
      { h: 'If you use Quell for dry eyes' },
      {
        p: `If your eyes do feel dry and you decide to try a lubricating drop, use it as the label directs. Quell’s panel also says: {tip}. And: {warnings}. The label doesn’t give directions for contact lenses or for using it alongside other drops; check with your eye doctor or pharmacist. Every line of the panel is on our [Drug Facts page](/drug-facts), and you can [order from the home page](/#buy) with guest checkout.`,
      },
    ],
    faq: [
      {
        q: 'Do eye drops stop eye twitching?',
        a: `Lubricating eye drops aren’t labeled for twitching. A twitch is usually in the eyelid’s muscles, while a drop works on the surface of the eye, so it may help dryness but isn’t meant for the twitch itself.`,
      },
      {
        q: 'Can dry eyes make your eyelid twitch?',
        a: `Twitching and dry eyes often show up in the same busy, screen-heavy stretches, but that doesn’t mean one causes the other. If a twitch goes on for weeks or spreads, ask a doctor what’s behind it.`,
      },
      {
        q: 'When should I worry about an eye twitch?',
        a: `See a doctor if a twitch keeps up for weeks, closes the eyelid, spreads to other parts of the face, comes with a drooping lid, or comes with pain or vision changes.`,
      },
    ],
  },
  {
    slug: 'do-eye-drops-help-with-dark-circles',
    title: 'Do eye drops help with dark circles?',
    description:
      'Dark circles are in the skin under the eye, and eye drops go in the eye. What a lubricating drop is for, what to skip, and who to ask about the skin.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `No. Eye drops go onto the surface of the eye, and dark circles are in the skin beneath it, so a drop doesn’t reach them. A lubricating drop like Quell is labeled to relieve dryness of the eye and protect against further irritation; nothing on its label mentions dark circles or under-eye skin. For questions about the skin, ask a doctor or dermatologist; for dry, tired-feeling eyes, a drop used as directed may help.`,
      },
      { h: 'Why eye drops and dark circles get lumped together' },
      {
        p: `After a long week, people look in the mirror and see two things at once: eyes that feel dry, heavy or gritty, and shadows underneath that make them look tired. It’s natural to reach for one fix for both. But they’re different parts of the face. The tear film covers the eye’s surface and is spread by blinking. The skin under the eye is skin, with its own color, thickness and blood vessels showing through, and it isn’t touched by a drop that goes into the eye.`,
      },
      { h: 'What a lubricating drop is for' },
      {
        p: `The Drug Facts panel is the place to check what any over-the-counter drug is for. Quell’s Uses section reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That’s the whole of what it claims, and it’s about how your eyes feel, not how the skin around them looks. Our guide to [the Uses section](/guides/the-uses-section) explains how to read that part of any label.`,
      },
      { h: 'Don’t put eye drops on your skin' },
      {
        p: `Some people try dabbing eye drops under the eyes like a serum. The label rules that out. Its warning reads: {warnings}. An eye drop is formulated, packaged and labeled for the eye, and using it as a skin product is outside its directions. If a drop runs onto your cheek when you put it in, blot it gently with a clean tissue; don’t rub it into the skin.`,
      },
      { h: 'Things that can make eyes look and feel tired' },
      {
        p: `Without promising anything about dark circles, a few everyday habits help eyes feel less dry and strained, which is often part of what people mean by “tired eyes”:`,
      },
      {
        list: [
          `Take a break from screens every 20 minutes and make each blink a full one.`,
          `Keep fans, heat registers and car vents from blowing across your face, especially at night.`,
          `Use a humidifier in a dry bedroom during heating season.`,
          `Don’t rub your eyes; rubbing irritates the eye and the delicate skin around it.`,
          `Take off eye makeup before bed so it doesn’t end up in your eyes.`,
        ],
      },
      {
        p: `Our guide on [whether eye drops help tired eyes](/guides/do-eye-drops-help-tired-eyes) looks at the tired-eye question more broadly.`,
      },
      { h: 'Eye products vs. skin products' },
      {
        p: `Shelves near the eye drops often hold under-eye creams, gels and patches, and the packaging can blur together. The difference is in the label. An over-the-counter eye drop carries a Drug Facts panel with Uses and Directions for the eye. A cream or patch made for the skin under the eye carries its own directions for the skin. Keep each where it belongs: skin products out of the eye, eye drops off the skin. If a skin product gets into your eye and it stings or blurs, that’s a question for a doctor or pharmacist, not something to rinse away with a lubricating drop.`,
      },
      { h: 'Who to ask about dark circles' },
      {
        p: `Dark circles have many possible causes, and the right person to look at them is a doctor, often a dermatologist. Ask about them sooner if they appear suddenly, if only one side is affected, or if there’s swelling, pain or a change in your vision along with them. For the eyes themselves, Quell’s label is clear about when to stop: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'If your eyes also feel dry' },
      {
        p: `If dryness is part of what you’re dealing with, a lubricating drop can be part of the answer. Quell’s directions: {directions}. Follow the panel: {tip}. Storage: {storage}. The drop is milky brown, as the panel notes: {milky}. It can blur your vision for a moment, so put it in before you need to read or drive, not right before. The label doesn’t give directions for contact lenses or for using it with other drops; ask your eye doctor or pharmacist about either. Every line of the label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops get rid of dark circles?',
        a: `No. Eye drops go onto the surface of the eye, while dark circles are in the skin under it. Quell’s label covers dryness and irritation of the eye and says nothing about dark circles.`,
      },
      {
        q: 'Can I put eye drops under my eyes for dark circles?',
        a: `No. Quell’s label says it is for use in the eyes only. If a drop runs onto your cheek, blot it with a clean tissue, and ask a doctor or dermatologist about under-eye skin.`,
      },
      {
        q: 'Do dry eyes cause dark circles?',
        a: `The label and the site don’t make that link, and dark circles have many possible causes. A doctor or dermatologist can look at the skin, while dry eyes are a question for an eye doctor.`,
      },
    ],
  },
  {
    slug: 'dont-recognize-a-charge-from-an-eye-drop-order',
    title: 'Don’t recognize a charge from an eye drop order?',
    description:
      'A charge you can’t place that might be Quell? Search your email, look the order up, ask your household, then call us with the date and amount.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `If you see a charge you don’t recognize and think it might be from a Quell order, start with your email: search for “Quell order” to find a confirmation. If you find one, look it up on our order page with the order number and checkout email. If you find nothing, ask the people who share your card, then call us at {phone} ({hours}) with the date and amount. If no one recognizes it, contact your card issuer.`,
      },
      { h: 'Step 1: Search your email' },
      {
        p: `Every Quell order sends a confirmation email to the address entered at checkout. Its subject line reads “Your Quell order #” followed by the order number, then “is confirmed.” Search your inbox, spam and promotions folders for:`,
      },
      {
        list: [
          `“Quell order”`,
          `“is confirmed”`,
          `“quelldrop”`,
          `An order number beginning with “Q-”`,
        ],
      },
      {
        p: `Check every email address you use, including old ones that still forward. If you find a confirmation, it lists what was ordered and where it was shipped, which usually answers the question on the spot. If an email looks off, or asks you for card details, our guide on [whether an order email is real](/guides/is-this-eye-drop-order-email-real) explains what genuine ones look like.`,
      },
      { h: 'Step 2: Look the order up' },
      {
        p: `With an order number and the email used at checkout, you can see an order’s status on our [order lookup page](/orders). If you created an account, signing in shows all your orders in one place. Order lookup needs both pieces to match; if it says no order was found, our guide on [what to check when lookup finds nothing](/guides/order-lookup-says-no-order-found) walks through the usual reasons.`,
      },
      { h: 'Step 3: Ask who else uses the card' },
      {
        p: `A lot of unrecognized charges turn out to be a household purchase. Before anything else, ask:`,
      },
      {
        list: [
          `A spouse or partner who shares the card or the account.`,
          `An adult child or parent who has used your card before, with your permission, for something like this.`,
          `Anyone who set up a gift. Holiday orders, especially in December, are often bought by one person and shipped to another, and the buyer may not have mentioned it.`,
          `Yourself, a few weeks ago. It happens: a late-night order from your phone, forgotten by the time the statement arrives.`,
        ],
      },
      { h: 'Step 4: Compare the date and amount' },
      {
        p: `Look at when the charge was made and how much it is. Under our [Terms](/terms), you authorize the charge when you submit an order, so the date on your statement should sit close to the date of the confirmation email. That email lists the subtotal, the shipping (shown as free on orders of {freeBottles} or more bottles) and the total, so you can match the amount to the penny. A card that was declined and then retried can show more than one line for a while; our guide to being [charged twice for one order](/guides/charged-twice-for-one-eye-drop-order) explains pending and posted charges.`,
      },
      { h: 'Reading the confirmation once you find it' },
      {
        p: `A found confirmation usually settles things quickly, because it carries the details you need to recognize a purchase:`,
      },
      {
        list: [
          `The first name of the person who ordered, in the greeting.`,
          `The order number, which starts with “Q-”.`,
          `Each item and the number of bottles.`,
          `The subtotal, shipping and total.`,
          `The shipping address. A gift order shows the recipient’s address, which is often the giveaway.`,
          `A link to track the order.`,
        ],
      },
      {
        p: `If the confirmation shows your own address and a quantity you’d expect, it was very likely yours or someone in your household. If the address is one you don’t know at all, call us. We can look at it with you, and if the card was used without permission, your card issuer will want to know too.`,
      },
      { h: 'Step 5: Call us' },
      {
        p: `If you still can’t place it, call {phone} during {hours}. Have these ready:`,
      },
      {
        list: [
          `The date and exact amount of the charge.`,
          `The last four digits of the card. You shouldn’t need the full card number to match an order, so don’t read it out to anyone who calls or emails you first.`,
          `Any email addresses you might have used.`,
          `The shipping address you’d expect, if it was a household or gift order.`,
        ],
      },
      {
        p: `We can tell you whether it matches an order and, if it does, help with the next step. An unopened bottle can be refunded within {returnDays} days of delivery without being sent back, as our [returns guide](/guides/can-you-return-eye-drops) explains.`,
      },
      { h: 'If nobody recognizes it' },
      {
        p: `If no one in your household placed it and we can’t match it to an order, contact your card issuer using the number on the back of your card. They can investigate the charge and, if needed, replace the card. Don’t use a phone number from a text or email you weren’t expecting. Our guide on [fake delivery texts](/guides/fake-delivery-texts-and-eye-drop-orders) explains why.`,
      },
    ],
    faq: [
      {
        q: 'How do I find out what an eye drop charge on my card was for?',
        a: `Search your email for an order confirmation, look the order up with its number and email, and ask anyone who shares your card. If you still can’t place it, call {phone} with the date and amount.`,
      },
      {
        q: 'What does a Quell order confirmation email say in the subject line?',
        a: `It reads “Your Quell order #” followed by the order number and “is confirmed.” Order numbers begin with “Q-”.`,
      },
      {
        q: 'Should I call my bank or the store about a charge I don’t recognize?',
        a: `Check with the store first if you think a household member might have ordered; it’s often the fastest answer. If no one recognizes the charge, call your card issuer at the number on the back of your card.`,
      },
    ],
  },
  {
    slug: 'can-i-order-eye-drops-late-at-night',
    title: 'Can I order eye drops late at night?',
    description:
      'Yes, checkout works at any hour. What happens after a 2 a.m. order, when you’re charged, what waits for business hours, and why no ship date is promised.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Yes. You can order Quell at any hour, including the middle of the night. Checkout is online, works as a guest, and your card is authorized when you submit the order. A confirmation email follows with your order number. What doesn’t happen at night is packing or phone support: phone hours are {hours}, and we don’t promise a ship or delivery date for any order.`,
      },
      { h: 'What happens the moment you order' },
      {
        list: [
          `You add bottles to your cart, then check out with your email, shipping address and card. No account is needed.`,
          `When you submit, you authorize the charge, as our [Terms](/terms) say.`,
          `A confirmation email arrives with an order number that starts with “Q-”.`,
          `Your order waits in line to be packed in Brentwood, Tennessee, and a shipping email with tracking follows once it goes out.`,
        ],
      },
      {
        p: `If the confirmation doesn’t show up, check spam and promotions first; our guide on a [missing confirmation email](/guides/no-order-confirmation-email) covers the rest.`,
      },
      { h: 'Will it ship sooner if I order now?' },
      {
        p: `We don’t promise when packing happens or when a package will arrive, so ordering at midnight instead of noon doesn’t buy a promised head start. What helps is ordering before you’re out. If you use Quell as directed, one drop three times a day in each eye, a bottle runs out on a fairly predictable schedule, and setting a reminder a couple of weeks ahead works better than a late-night scramble. Quell also sends one reorder reminder email; it isn’t a subscription.`,
      },
      { h: 'Who orders at night' },
      {
        p: `Night is when a lot of people finally get to their lists: night-shift nurses on a break, parents after the kids are in bed, someone who just noticed the bottle is almost empty while getting ready for bed. If you work nights, our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has habits for your hours. If you’re ordering from bed on your phone, the same glowing screen in a dark room that keeps you up also dries your eyes; our guide to [looking at your phone in bed](/guides/dry-eyes-from-looking-at-your-phone-in-bed) explains why.`,
      },
      { h: 'Late-night mistakes, and how to fix them' },
      {
        p: `Tired typing is the main risk of a 2 a.m. order. Before you submit, check:`,
      },
      {
        list: [
          `Your email address. A typo means no confirmation and no tracking; see [what to do if you mistype your email](/guides/mistyped-email-at-checkout).`,
          `The shipping address, especially the apartment or unit number.`,
          `The quantity in the cart. It’s easy to tap the plus button twice.`,
          `Whether you already ordered. If you’re not sure, search your email for a confirmation before you place a second order.`,
        ],
      },
      {
        p: `If you spot a problem after submitting, call {phone} as soon as phone hours open ({hours}). Our guide on [canceling an order](/guides/can-i-cancel-an-eye-drop-order) explains what can be done once an order is placed. If you accidentally ordered too many bottles, unopened ones can be refunded within {returnDays} days of delivery without sending them back.`,
      },
      { h: 'Ordering for someone else after hours' },
      {
        p: `A lot of night orders are for someone else: a parent who mentioned dry eyes on the evening phone call, a partner who’s out of drops, a sibling across the country. Checkout lets the shipping address differ from the billing address, so you can send a bottle straight to them; our guide to [shipping to a different address than billing](/guides/can-i-ship-to-a-different-address-than-billing) explains how. Put their name on the shipping address so the carrier can match the package to the door. The confirmation and tracking emails go to the email you enter at checkout, which is yours, so forward the tracking link if they’d like to follow it. Before you surprise someone with eye drops, though, it’s worth asking whether they already use drops from their own eye doctor.`,
      },
      {
        p: `Once you’ve placed the order, take one more look before you put the phone down: open the confirmation email and check the address, the number of bottles and the total. It takes half a minute, and it’s much easier to catch a typo that night than to discover it when the package goes somewhere unexpected.`,
      },
      { h: 'Ordering during holiday sale nights' },
      {
        p: `Black Friday is November 27 and Cyber Monday is November 30 this year, and plenty of shopping happens after midnight on both. Quell doesn’t use promo codes, so there’s no code to wait up for, and the price in your cart is the price. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, any hour of the day. If you’re ordering a gift, order early in December, since no delivery date is promised.`,
      },
      { h: 'What can wait until morning' },
      {
        p: `Questions about an order, about the label or about whether Quell suits you are better asked by daylight. Order questions go to us at {phone} during {hours}. Questions about your eyes go to your eye doctor or a pharmacist; the label’s stop-use line reads: {stopUse} You can read the full label on the [Drug Facts page](/drug-facts) before you order, at any hour.`,
      },
    ],
    faq: [
      {
        q: 'Can you buy eye drops online in the middle of the night?',
        a: `Yes. Quell’s checkout is open at any hour, works without an account, and sends a confirmation email with your order number right after you order.`,
      },
      {
        q: 'Does a late-night order get charged right away?',
        a: `Yes. Under our Terms, you authorize the charge when you submit the order, whatever the time. Packing happens later, and no ship date is promised.`,
      },
      {
        q: 'What if I make a mistake on an order at 2 a.m.?',
        a: `Call {phone} as soon as phone hours open ({hours}) with your order number. Unopened bottles ordered by mistake can be refunded within {returnDays} days of delivery without being sent back.`,
      },
    ],
  },
]
