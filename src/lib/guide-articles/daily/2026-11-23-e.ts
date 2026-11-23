import type { Guide } from '@/lib/guide-types'
export const DAILY_20261123_E: Guide[] = [
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-clifton-nj:
   * - NOAA Regional Climate Centers ACIS StnData, SID CDW, 1991-2020 monthly normals
   *   (.daily-job/acis1123/CDW.json; mint added in .daily-job/e/mint-CDW.json)
   *   (CALDWELL ESSEX COUNTY AP, NJ, elev 171 ft. Normal highs/lows F: Jan 38.3/22.9,
   *   Feb 41.4/23.9, Mar 49.4/31.3, Apr 61.9/41.0, Jul 85.2/66.0, Aug 83.6/64.2,
   *   Sep 76.0/56.7, Oct 64.5/45.0, Nov 53.4/35.4, Dec 43.0/27.7. Precip in: Feb 2.55
   *   (lowest), Jul 4.33, Aug 4.49 (highest), Dec 4.04, Mar 4.07; annual sum 44.88.
   *   Snowfall missing ("M"), so not stated.)
   * - Station not in relhum23.txt or wndspd23.txt, so no humidity or wind figures.
   * The station is at Essex County Airport in Caldwell, west of Clifton; named as such.
   */
  {
    slug: 'dry-eye-relief-clifton-nj',
    title: 'Dry eye relief in Clifton, New Jersey',
    description:
      'Clifton’s nearest NOAA station averages lows below freezing from December through March. What that heating season does to your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Dry eye relief in Clifton comes down to the heating season. NOAA’s normals for Essex County Airport in Caldwell, the nearest official station, put average lows below freezing from December through March, so furnaces and boilers run for a third of the year and indoor air turns dry. Keep vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Which weather station speaks for Clifton?' },
      {
        p: `Clifton doesn’t have a first-order weather station of its own. The closest one with a full set of NOAA’s 1991–2020 climate normals sits at Essex County Airport in Caldwell, west of the city, at about 170 feet above sea level. Those normals are the same figures the National Weather Service publishes through its NOWData pages. Here is what they show for the station:`,
      },
      {
        list: [
          `Normal yearly precipitation adds up to about 44.9 inches, spread fairly evenly across the months.`,
          `February is the driest month on the gauge at 2.55 inches; August is the wettest at 4.49.`,
          `January averages a high of 38.3°F and a low of 22.9°F, the coldest month of the year.`,
          `July is the warmest month, with an average high of 85.2°F and a low of 66.0°F.`,
          `Average lows fall below freezing in December (27.7°F), January, February and March (31.3°F).`,
        ],
      },
      {
        p: `NOAA’s snowfall normals for this station are missing, so this page doesn’t give a snowfall figure for Clifton. The station also isn’t one of the few dozen in NOAA’s humidity and wind tables, so no humidity percentages appear here either.`,
      },
      { h: 'Four freezing months, and what the heat does indoors' },
      {
        p: `A low near 23°F in January means the heat in a Clifton house, apartment or office is working hard from well before Thanksgiving into April. Cold air holds little moisture to begin with. Once it’s pulled inside and warmed to 68 or 70 degrees, its relative humidity drops sharply, and that drier air draws water from the surface of your eyes between blinks. The tear film has an outer oil layer that slows that loss, a water layer underneath and a mucus layer against the eye. Warm, dry, moving air works on all of it.`,
      },
      {
        list: [
          `Point floor registers and baseboard heat away from the couch or bed rather than toward where your face rests.`,
          `Turn the thermostat down a few degrees at night; cooler air dries the room less.`,
          `A room humidifier near the bed or desk adds back some of what the heat takes out. Clean it as its maker directs.`,
          `Keep the car’s heater aimed at your feet and the windshield, not up at your eyes, on a cold morning drive.`,
        ],
      },
      {
        p: `Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) explains what level of indoor humidity to aim for and how to check it.`,
      },
      { h: 'Why February can feel worst' },
      {
        p: `February is the driest month in the Caldwell record, and it’s also deep in heating season, with an average high of only 41.4°F. That combination matters more than either number alone. Outdoor air has little moisture, the heat has been running for months, and by late winter many people notice their eyes feel scratchy by mid-afternoon at a desk or after an evening of television. If that pattern sounds familiar, pay attention to the room rather than only to your eyes: where you sit relative to the vents, how warm you keep the thermostat, and how long you go without looking away from a screen.`,
      },
      { h: 'Spring and fall: the switchover weeks' },
      {
        p: `March still averages lows just under freezing, yet the average high is 49.4°F, so the heat cycles on in the morning and off by afternoon. October runs the other way, with highs near 64.5°F and lows around 45.0°F. In both seasons a lot of people open windows on a mild day and then close up the house and turn the heat back on the same evening. Those swings are easy on the electric bill and hard to notice, but the evening heat still dries the air. A small hygrometer by the bed tells you what the room is really like after the windows close.`,
      },
      { h: 'Summer: a wet season with air conditioning' },
      {
        p: `July and August are the wettest stretch on the Caldwell gauge, each over 4.3 inches, and July’s average high is 85.2°F. Outdoors that isn’t dry air. Indoors is a different story: central air and window units pull moisture out as they cool, and a unit aimed at a chair or bed blows that drier air straight across your eyes. Angle the louvers toward the ceiling, keep the fan speed moderate at night, and set the car’s vents toward your chest. Long hours in an air-conditioned office have the same effect as winter heat, just with cooler air.`,
      },
      { h: 'Screens, commutes and long days' },
      {
        p: `Many Clifton residents spend part of the day in traffic and part at a screen, and both slow blinking. When you’re concentrating on a monitor or a dashboard, you blink less often and often only partly, which leaves the tear film exposed longer. Set a reminder to look across the room every 20 minutes or so, and close your eyes fully for a few seconds now and then. Our guide to [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) covers desk setups in more detail.`,
      },
      { h: 'Using Quell in a New Jersey winter' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. Its directions read: {directions}. The ingredients are {actives} as actives, with {inactives} as inactives. The panel also says: {milky}.`,
      },
      {
        p: `For storage the label says: {storage}. On a January morning a car parked on the street can sit well below that range, so keep the bottle in a coat pocket or bag that comes inside with you rather than in the glove box. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered to Clifton' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Clifton and every other US address, with guest checkout and tracking by email. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order before your last bottle is nearly empty. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Clifton page](/eye-drops/clifton-nj) and the [New Jersey page](/eye-drops/state/new-jersey) have more local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop eases everyday dryness; it doesn’t explain why your eyes keep feeling dry. The label’s limit is plain: {stopUse} If one eye is much worse than the other, if light suddenly bothers you, or if your vision changes, book an appointment. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'Where is the closest weather station to Clifton, NJ?',
        a: `The nearest station with full NOAA 1991–2020 climate normals is at Essex County Airport in Caldwell, west of Clifton, at about 170 feet above sea level.`,
      },
      {
        q: 'How cold does Clifton get in January?',
        a: `NOAA’s normals for the Caldwell station show a January average high of 38.3°F and an average low of 22.9°F, making it the coldest month of the year there.`,
      },
      {
        q: 'What is the driest month near Clifton, New Jersey?',
        a: `February, at 2.55 inches of precipitation in NOAA’s 1991–2020 normals for Essex County Airport. August is the wettest month at 4.49 inches.`,
      },
      {
        q: 'Can I get Quell shipped to Clifton, NJ?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Clifton, with guest checkout and email tracking. No arrival date is promised, so reorder with some time to spare.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-corsicana-tx:
   * - NOAA Regional Climate Centers ACIS StnData, SID CRS, 1991-2020 monthly normals
   *   (.daily-job/acis1123/CRS.json; mint added in .daily-job/e/mint-CRS.json)
   *   (CORSICANA CAMPBELL FIELD, TX, elev 443 ft. Normal highs/lows F: Jan 58.5/37.5,
   *   Feb 62.5/41.3, Mar 69.8/48.2, Apr 77.0/55.1, May 84.1/64.1, Jun 91.2/71.2,
   *   Jul 95.1/74.0, Aug 96.0/73.7, Sep 89.6/67.5, Oct 79.8/57.2, Nov 67.8/46.9,
   *   Dec 59.9/39.4. Precip in: Jan 2.76, Feb 2.67, Mar 3.58, Apr 3.48, May 4.42,
   *   Jun 3.82, Jul 2.28, Aug 2.28, Sep 2.53, Oct 5.10 (highest), Nov 3.18, Dec 3.23;
   *   annual sum 39.33. Snowfall missing, not stated.)
   * - Station not in relhum23.txt or wndspd23.txt, so no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-corsicana-tx',
    title: 'Dry eye relief in Corsicana, Texas',
    description:
      'Corsicana’s August highs average 96°F, and October is its wettest month. A month-by-month look at NOAA’s numbers and what each season does to dry eyes.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `In Corsicana, dry eyes follow the thermostat more than the rain. NOAA’s normals for Campbell Field put highs above 90°F from June through August, with August averaging 96°F, so air conditioning runs for months and dries indoor air. Winter brings lows in the upper 30s and the heater. Aim vents away from your face, take screen breaks, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Campbell Field’s numbers' },
      {
        p: `The official record for Corsicana comes from Campbell Field, the Corsicana airport station NOAA lists as Corsicana Campbell Field, at about 440 feet above sea level. NOAA’s 1991–2020 climate normals for the station, the same data the National Weather Service shows on its NOWData pages, add up to about 39.3 inches of precipitation in a normal year. The station’s snowfall normals are missing, and it isn’t one of the stations in NOAA’s humidity and wind tables, so this page sticks to temperature and rainfall.`,
      },
      { h: 'Corsicana’s year, month by month' },
      {
        p: `Rather than one dry season, Corsicana has a calendar of different reasons your eyes may feel dry. Here is how the normals line up with what most households are running indoors:`,
      },
      {
        list: [
          `January: average high 58.5°F, low 37.5°F. The coldest month, and the heater runs most evenings and mornings.`,
          `February and March: highs climb from 62.5°F to 69.8°F. Heat in the morning, open windows some afternoons.`,
          `April and May: highs of 77.0°F and 84.1°F. May brings 4.42 inches of rain, the second-wettest month, and the AC starts working in earnest.`,
          `June: the first month with an average high above 90°F, at 91.2°F.`,
          `July and August: highs of 95.1°F and 96.0°F, with only 2.28 inches of rain in each. The driest and hottest stretch of the year.`,
          `September: still 89.6°F on average, and only 2.53 inches of rain.`,
          `October: 5.10 inches, the wettest month on the gauge, with highs near 79.8°F.`,
          `November and December: highs fall to 67.8°F and then 59.9°F, and the heat comes back on.`,
        ],
      },
      { h: 'July through September: when the gauge and the AC agree' },
      {
        p: `The three months with the least rain at Campbell Field, July, August and September, are also the three hottest. That’s the stretch when outdoor air feels heavy in the morning and harsh by afternoon, and indoors the air conditioner rarely rests. An AC unit cools by pulling moisture out of the air, and its vents push that drier air in a steady stream. If a vent blows across your recliner, your bed or the driver’s seat, it speeds the evaporation of your tears between blinks.`,
      },
      {
        list: [
          `Turn ceiling vents or the louvers on a window unit toward the ceiling instead of toward where you sit.`,
          `In the truck or car, close the center vents nearest your face and use the side or floor vents.`,
          `Run errands and yard work early, when the normal low is still in the low 70s, rather than in mid-afternoon heat.`,
          `Wear wraparound sunglasses outdoors; they cut glare and block some of the wind across open pasture.`,
        ],
      },
      { h: 'October rain doesn’t mean wetter eyes indoors' },
      {
        p: `October is the wettest month in Corsicana’s normals at 5.10 inches, more than double what July or August gets. It’s tempting to expect relief once the fall rains arrive. Indoors, though, the air conditioner usually keeps running into October on warm afternoons, and by November the heater takes over on cool nights. Rain outside doesn’t change much about a closed-up room. If your eyes still feel dry during a rainy week, look at the vents and the screen time rather than the forecast.`,
      },
      { h: 'Winter mornings in the upper 30s' },
      {
        p: `Corsicana winters are mild by national standards, but January and December lows average 37.5°F and 39.4°F. Central heat, space heaters and fireplaces all warm air without adding moisture, which lowers its relative humidity. A space heater pointed at your legs on a cold morning is fine; one aimed at your face while you read is not. Our guide to [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) walks through vents, filters and humidifiers room by room.`,
      },
      { h: 'Long drives and long shifts' },
      {
        p: `A lot of work around Corsicana happens in a truck cab, a shop or an office with the AC set low. Long drives keep your eyes fixed on the road and slow your blinking, and a dashboard vent adds moving air on top. Office and plant work brings screens and climate control. In each setting, the habits are the same: blink fully, look away from the screen or road during stops, and keep air from blowing straight into your eyes. [Why your eyes feel dry in the car](/guides/why-do-my-eyes-feel-dry-in-the-car) has more for drivers.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. The panel adds: {warnings}. And for keeping the dropper clean: {tip}.`,
      },
      {
        p: `Storage matters in a Texas summer. The panel says: {storage}. A pickup in a Corsicana parking lot in August will climb far past the top of that range, so carry the bottle inside with you. One more line to know: {doNotUse}. Our [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Ordering Quell to Corsicana' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Corsicana and the rest of the country, and checkout works as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; no arrival date is promised. If an unopened bottle isn’t what you wanted, you can be refunded within {returnDays} days of delivery without returning it. See the [Corsicana page](/eye-drops/corsicana-tx) and our [Texas page](/eye-drops/state/texas) for more.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `Lubricating drops are for everyday dryness. They aren’t a way to find out why your eyes keep bothering you. The label says when to stop: {stopUse} An eye doctor can find the cause and decide what to do next, and our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Corsicana, Texas get in the summer?',
        a: `NOAA’s 1991–2020 normals for Campbell Field put the August average high at 96.0°F and July at 95.1°F. June is the first month to average above 90°F.`,
      },
      {
        q: 'What is the rainiest month in Corsicana?',
        a: `October, with 5.10 inches in a normal year at Campbell Field. July and August are the driest months, at 2.28 inches each.`,
      },
      {
        q: 'Why do my eyes feel dry in the fall in Corsicana if it rains more?',
        a: `Rain outdoors doesn’t change much about a closed, climate-controlled room. Air conditioning still runs on warm October afternoons and the heater starts in November, and both leave indoor air drier.`,
      },
      {
        q: 'Does Quell ship to Corsicana, TX?',
        a: `Yes. Orders go out from Brentwood, Tennessee, to Corsicana and every other US address, with tracking by email. No delivery date is promised, so order ahead.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-eagle-pass-tx:
   * - NOAA Regional Climate Centers ACIS StnData, SID EGP, 1991-2020 monthly normals
   *   (.daily-job/acis1123/EGP.json; mint added in .daily-job/e/mint-EGP.json)
   *   (EAGLE PASS 3N, TX, cooperative station 3 miles north of the city, elev 812 ft.
   *   Normal highs/lows F: Jan 64.5/39.7, Feb 70.0/43.4, Mar 77.6/51.4, Apr 84.4/57.7,
   *   May 90.3/65.9, Jun 96.0/71.8, Jul 97.5/73.8, Aug 98.6/74.3, Sep 91.8/69.1,
   *   Oct 83.4/59.3, Nov 72.4/48.3, Dec 64.8/39.8. Precip in: Jan 0.74, Feb 0.74,
   *   Mar 1.18, Apr 2.02, May 2.80, Jun 2.20, Jul 2.10, Aug 1.68, Sep 3.29 (highest),
   *   Oct 2.14, Nov 1.13, Dec 0.81; annual sum 20.83. Snowfall normal 0.0 every month.)
   * - Station not in relhum23.txt or wndspd23.txt, so no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-eagle-pass-tx',
    title: 'Dry eye relief in Eagle Pass, Texas',
    description:
      'Eagle Pass averages about 21 inches of rain a year, and winter days swing 25 degrees. NOAA’s figures and practical dry eye relief, season by season.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eagle Pass is dry country: NOAA’s normals for the station 3 miles north of town add up to about 21 inches of precipitation a year, with less than an inch a month from December through February. Five months average highs of 90°F or more, so air conditioning dries indoor air for much of the year. Shade your eyes outdoors, aim vents away from your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'How dry is Eagle Pass, really?' },
      {
        p: `The figures here come from NOAA’s 1991–2020 climate normals for a cooperative weather station known as Eagle Pass 3N, which sits about 3 miles north of the city at roughly 810 feet. They’re the same normals the National Weather Service publishes through NOWData. Taken month by month, they show a place where rain is the exception:`,
      },
      {
        list: [
          `About 20.8 inches of precipitation in a normal year.`,
          `January and February each average 0.74 inches, and December 0.81, so the three winter months together bring less than 2.3 inches.`,
          `September is the wettest month at 3.29 inches, followed by May at 2.80.`,
          `Normal snowfall is zero in every month of the year.`,
        ],
      },
      {
        p: `This station isn’t in NOAA’s humidity or wind tables, so no humidity percentage is given here. Rainfall and temperature tell enough of the story on their own.`,
      },
      { h: 'Which months are hottest in Eagle Pass?' },
      {
        p: `August, at an average high of 98.6°F, with July close behind at 97.5°F and June at 96.0°F. May (90.3°F) and September (91.8°F) also average above 90°F. That’s five months when most homes, stores, clinics and vehicles in Eagle Pass run air conditioning through the afternoon and often into the night, because August lows still average 74.3°F. An air conditioner removes moisture as it cools, and a vent that blows across your face dries the tear film quickly. The fix is simple and costs nothing: redirect the airflow.`,
      },
      {
        list: [
          `Aim car vents at your chest or the side windows. The center vents point straight at a driver’s eyes on a long drive.`,
          `At home, angle a window unit or wall vent toward the ceiling and keep the bed out of its path.`,
          `At work, ask whether a desk can be shifted out from under a ceiling diffuser. A couple of feet makes a difference.`,
          `Step outside into shade, not full sun, on a break, and give your eyes a few slow, complete blinks.`,
        ],
      },
      { h: 'Why do my eyes feel dry in Eagle Pass in the winter?' },
      {
        p: `Winter is the dry season on the rain gauge, and it has a quirk the summer doesn’t: a big daily swing. January averages a high of 64.5°F and a low of 39.7°F, a spread of about 25 degrees. December is nearly the same. That means a lot of households run the heater at dawn and the air conditioner by mid-afternoon, all within a few hours, and both dry the indoor air. Your eyes don’t get a break when the outdoor air is pleasant, because the air you breathe for most of the day is coming out of a vent.`,
      },
      {
        p: `A small hygrometer near the bed shows how dry a room gets on a winter morning. If it reads low, a humidifier in the bedroom can help; our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) explains what level to aim for.`,
      },
      { h: 'Is dust a problem for eyes around Eagle Pass?' },
      {
        p: `With so little rain from late fall through early spring, bare ground stays dry, and a gusty afternoon can lift dust off unpaved lots, fields and construction sites. Dust and grit irritate the eye’s surface, and rubbing makes it worse. Wraparound sunglasses help on windy days. If something gets stuck in your eye and blinking doesn’t clear it, don’t reach for eye drops to wash it out; go to urgent care or an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers when not to wait.`,
      },
      { h: 'What about the sun?' },
      {
        p: `Long days of strong sun come with the heat, and squinting against glare off pavement, water or a white truck hood narrows the eyes and changes how you blink. Good sunglasses and a brimmed hat do more than you might expect for comfort outdoors, especially for anyone who works outside in May or September, when it’s already hot but the sun is lower in the morning and late afternoon.`,
      },
      { h: 'Can I keep eye drops in my truck in Eagle Pass?' },
      {
        p: `Not through the warm months. Quell’s label says: {storage}. With normal highs near 98°F in August, a closed vehicle parked in the sun can get far hotter than 86°F inside. A cooler bag in the cab works for a workday, but the simplest habit is to carry the bottle in a pocket or bag that comes inside with you. If a bottle has been baking, check it before you use it, because the label’s Do not use line reads: {doNotUse}.`,
      },
      { h: 'What does Quell’s label say to do?' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Directions: {directions}. Keep the tip clean, as the panel says: {tip}. The bottle’s contents are expected to look a certain way, too: {appearance} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Does Quell ship to Eagle Pass?' },
      {
        p: `Yes. Orders ship from Brentwood, Tennessee, to Eagle Pass and every other US address; Quell doesn’t ship outside the United States. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, and no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Eagle Pass page](/eye-drops/eagle-pass-tx) and the [Texas page](/eye-drops/state/texas) have more.`,
      },
      { h: 'When should I see an eye doctor?' },
      {
        p: `If dryness keeps coming back no matter how you adjust the air and your habits, that’s worth an appointment. The label’s own stopping point is: {stopUse} An eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you put what you’re feeling into words before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Eagle Pass, Texas get a year?',
        a: `About 20.8 inches in a normal year, according to NOAA’s 1991–2020 normals for the Eagle Pass 3N station. September is the wettest month at 3.29 inches.`,
      },
      {
        q: 'Does it ever snow in Eagle Pass?',
        a: `NOAA’s 1991–2020 normals for the Eagle Pass 3N station list normal snowfall as zero in every month, so a typical year has none.`,
      },
      {
        q: 'What is the hottest month in Eagle Pass?',
        a: `August, with an average high of 98.6°F at the station north of town. July averages 97.5°F, and five months in all average 90°F or warmer.`,
      },
      {
        q: 'Why are my eyes dry on winter mornings in Eagle Pass?',
        a: `January averages a low near 40°F, so the heater often runs at dawn, and the winter months are the driest on the rain gauge. Heated indoor air loses relative humidity, which speeds evaporation from the eyes.`,
      },
      {
        q: 'Can I order Quell to Eagle Pass, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Eagle Pass with guest checkout and email tracking. It ships only to US addresses, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-jackson-mi:
   * - NOAA Regional Climate Centers ACIS StnData, SID JXN, 1991-2020 monthly normals
   *   (.daily-job/acis1123/JXN.json; mint added in .daily-job/e/mint-JXN.json)
   *   (JACKSON REYNOLDS FIELD, MI, elev 971 ft. Normal highs/lows F: Jan 31.3/17.5,
   *   Feb 34.5/18.6, Mar 45.3/26.7, Apr 58.5/37.1, May 69.8/47.7, Jun 78.9/57.1,
   *   Jul 82.5/60.7, Aug 80.4/59.4, Sep 73.6/51.7, Oct 61.1/41.4, Nov 47.7/32.1,
   *   Dec 36.2/23.6. Precip in: Jan 1.67, Feb 1.52 (lowest), Mar 1.93, Apr 2.94,
   *   May 3.40, Jun 3.58, Jul 3.35, Aug 3.81 (highest), Sep 2.98, Oct 2.92, Nov 2.33,
   *   Dec 1.76; annual sum 32.19. Snowfall missing, not stated.)
   * - Station not in relhum23.txt or wndspd23.txt, so no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-jackson-mi',
    title: 'Dry eye relief in Jackson, Michigan',
    description:
      'Jackson’s January lows average 17.5°F and March nights still freeze. How a long Michigan heating season dries your eyes, from NOAA’s numbers, and what helps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Jackson’s dry-eye season is its heating season, and it runs long. NOAA’s normals for Reynolds Field show average lows of 17.5°F in January and still below freezing in March, so furnaces run from about November into April and indoor air dries out. Keep heat registers off your face, run a bedroom humidifier, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Reynolds Field record shows' },
      {
        p: `Jackson’s official weather station is at Reynolds Field, the airport station NOAA lists as Jackson Reynolds Field, about 970 feet above sea level. NOAA’s 1991–2020 climate normals for it, the same figures the National Weather Service shows on NOWData, include:`,
      },
      {
        list: [
          `About 32.2 inches of precipitation in a normal year.`,
          `February is the driest month at 1.52 inches, and August the wettest at 3.81.`,
          `January is the only month whose average high stays below freezing, at 31.3°F.`,
          `Average lows sit below 32°F from December through March, and November’s is 32.1°F, right at the line.`,
          `July is the warmest month, averaging 82.5°F in the afternoon and 60.7°F at night.`,
        ],
      },
      {
        p: `The station’s snowfall normals are missing, so no snowfall figure appears here, and Reynolds Field isn’t among the stations in NOAA’s humidity and wind tables.`,
      },
      { h: 'Why are my eyes drier in a Jackson winter?' },
      {
        p: `Very cold air holds very little water. When January air at 17°F is drawn into a house and warmed to 68°F, its relative humidity drops to a fraction of what it was outdoors. That’s why a furnace-heated room can feel parched even on a snowy day. Your eyes notice it as a gritty or tight feeling by evening, or a burning feeling when you first wake up. The tear film’s oil layer slows evaporation, but dry, warm, moving air from a register works against it hour after hour.`,
      },
      {
        list: [
          `Close or redirect a floor register under a favorite chair or next to the bed.`,
          `Lower the thermostat a few degrees at night. Cooler air dries the room less.`,
          `Run a humidifier in the bedroom and keep it clean as its maker directs.`,
          `Change the furnace filter on schedule; a clogged filter isn’t the cause of dry air, but a clean one keeps dust from circulating.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on furnaces, space heaters and wood stoves.`,
      },
      { h: 'March and April: still heating, but sunnier' },
      {
        p: `Spring is slow to arrive in Jackson. March averages a high of 45.3°F and a low of 26.7°F, and April lows still average 37.1°F, so most homes keep heating into April. At the same time, the days are longer and brighter, and people spend more time outdoors raking, walking and driving with the sun low in the windshield. Squinting into a low sun and cold spring wind both make eyes feel drier. Sunglasses help, and so does keeping the car’s defroster aimed at the glass rather than at your face.`,
      },
      { h: 'Garages, basements and workshops' },
      {
        p: `Plenty of Jackson households have a workbench in the garage or a project going in the basement through the winter, often with a space heater or a forced-air heater running close by. Those heaters blow very dry air at short range. Point them at your legs, not your face, take breaks from close work like sanding or soldering, and remember that sawdust or metal in the eye is a job for urgent care or an eye doctor, not for eye drops.`,
      },
      { h: 'Summer’s quieter months' },
      {
        p: `June through August are the wettest months at Reynolds Field, each between about 3.35 and 3.81 inches, and highs stay around 80°F. Outdoors, summer is usually the easiest season on dry eyes here. Indoors, central air and window units still pull moisture from the air, so keep the same rule as in winter: no air blowing straight across your eyes, at home, at the office or in the car.`,
      },
      { h: 'Using Quell through a Michigan winter' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. {directions}. It also cautions: {warnings}. Before a first use, it helps to know: {milky}.`,
      },
      {
        p: `Cold matters for storage. The panel says: {storage}. A bottle left in a parked car through a January night will fall far below that, so keep it in a coat pocket and bring it inside. Our guide to [whether eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) covers what to check. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Jackson' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Jackson, Michigan, and anywhere else in the US. Guest checkout works fine, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, and winter storms can slow any package, so reorder before you run out. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Jackson page](/eye-drops/jackson-mi) and the [Michigan page](/eye-drops/state/michigan).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Drops ease everyday dryness; they don’t tell you why it happens. The label’s limit: {stopUse} If you keep needing relief all winter, or one eye feels very different from the other, an eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you prepare; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Jackson, Michigan get in winter?',
        a: `NOAA’s 1991–2020 normals for Reynolds Field put January’s average low at 17.5°F and its average high at 31.3°F, the only month with a high below freezing.`,
      },
      {
        q: 'What is the driest month in Jackson, MI?',
        a: `February, with 1.52 inches of precipitation in a normal year at Reynolds Field. August is the wettest month at 3.81 inches.`,
      },
      {
        q: 'How long does the heating season last in Jackson, Michigan?',
        a: `Average lows at Reynolds Field are below freezing from December through March, November sits at 32.1°F, and April lows average 37.1°F, so most homes heat from about November into April.`,
      },
      {
        q: 'Does Quell ship to Jackson, Michigan?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Jackson and every other US address, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-flight-instructors',
    title: 'Dry eyes for flight instructors',
    description:
      'Sun through the windshield, cabin vents at your face and hours of scanning for traffic. Why flight instructors get dry eyes, and how to fit relief into the day.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Flight instructors get dry eyes from a mix of bright sun through the windshield, fresh-air vents blowing at the face, hours of scanning for traffic and watching a student, and windy ramps between lessons. Aim the vents at your chest, wear sunglasses, blink fully on the ground, and use a lubricating drop between flights as its label directs. Ask your aviation medical examiner about any drop before you fly with it.`,
      },
      { h: 'Why instructing is hard on your eyes' },
      {
        p: `A flight instructor’s day isn’t one long flight. It’s a string of lessons, often three or four, each with a preflight on the ramp, an hour or two in a small cockpit, and a debrief at a table or a screen. Your eyes do something different in every stage, and almost none of it encourages a relaxed, full blink.`,
      },
      {
        list: [
          `In the air, you’re scanning outside for traffic and back inside to the instruments and the student’s hands, again and again.`,
          `Small training aircraft let in a lot of sun through the windshield and side windows, and you squint against it for hours.`,
          `Fresh-air vents in many light aircraft sit right at face height and blow outside air across the eyes.`,
          `On the ground, prop wash, ramp wind and dust from a grass strip hit your face during preflights and run-ups.`,
          `Between lessons, logbooks, scheduling apps and ground school slides keep you at a screen.`,
        ],
      },
      { h: 'Concentration and blinking' },
      {
        p: `People blink less when they’re concentrating, and instructing is a particular kind of concentration. You’re flying the airplane in your head while someone else flies it with their hands, ready to take the controls. During a landing pattern or a stall series, that focus barely lets up. Fewer and partial blinks leave the tear film uncovered longer, and the cockpit air finishes the job. Many instructors notice it most at the end of the day, after the last pattern work, when their eyes feel gritty on the drive home.`,
      },
      {
        p: `A useful habit: when you’re on a stable leg, like a long straight-and-level cruise to the practice area, close your eyes fully for a second or two between scans. Talk the student through the next maneuver while you do it. Blink completely on the ground before every lesson.`,
      },
      { h: 'Cockpit air, vents and the sun' },
      {
        list: [
          `Twist the fresh-air vent so the stream hits your chest or the side window, not your face. If the student’s vent blows across you, ask them to redirect it too.`,
          `In winter, cabin heat in a trainer often comes in low and hot. Keep it at your feet.`,
          `Wear sunglasses that fit under your headset comfortably and wrap enough to block side glare. Check that you can still read the panel and any tablet clearly with them on.`,
          `A brimmed cap helps during long ramp time and preflights in summer.`,
        ],
      },
      {
        p: `Our guide to [eye drops for pilots and flight crews](/guides/eye-drops-for-pilots-and-flight-crews) covers the questions pilots should take to an aviation medical examiner, and why that conversation matters before using any medication on a flight.`,
      },
      { h: 'Ramp wind and anything that gets in your eye' },
      {
        p: `A preflight on a breezy ramp can blow grit, insects or bits of grass into your eyes, and a run-up behind another aircraft adds prop wash. If something lands in your eye and blinking doesn’t clear it, don’t fly with it and don’t try to wash it out with lubricating drops. Get it looked at by urgent care or an eye doctor. Sunglasses on the ramp double as a shield.`,
      },
      { h: 'Fitting drops into a lesson schedule' },
      {
        p: `Quell’s directions say: {directions}. Three times a day lines up neatly with an instructor’s day: once before the first preflight, once around the midday break, and once after the last flight or before the drive home. Put drops in on the ground, never during a lesson, and give your vision a moment to settle before you head out to the airplane. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the label says: {milky}. Anything oil-containing can blur vision for a short time after it goes in.`,
      },
      {
        p: `Keep the bottle clean between uses, as the label says: {tip}. If you’ve been asked by your examiner to avoid something, follow that over anything you read here.`,
      },
      { h: 'Where to keep the bottle at the airport' },
      {
        p: `The label’s storage line is: {storage}. A flight bag left on the back seat of a closed trainer on a summer ramp or in a car in the lot gets far hotter than that, and an unheated hangar in January gets far colder. Keep the bottle in the flight school office, your locker or a jacket pocket that stays with you.`,
      },
      { h: 'Ground school, sims and screen time' },
      {
        p: `Teaching ground school means hours at a whiteboard or projector, and simulator sessions put you in a dim room in front of bright displays. Both cut your blink rate. Every 20 minutes or so, look across the room at something far away for a few seconds, and set the room’s vents and space heaters so they don’t blow across your seat. Our guide on [dry eyes for air traffic controllers](/guides/dry-eyes-for-air-traffic-controllers) has more ideas for long screen shifts in aviation.`,
      },
      { h: 'Ordering for yourself or the school' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a flight school or an airport office. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order ahead of a busy stretch of checkrides. Each person should use their own bottle. Unopened bottles can be refunded within {returnDays} days of delivery. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Your eyes are part of your job, so don’t sit on symptoms. The label lists when to stop: {stopUse} Light sensitivity, trouble focusing on the panel, or dryness that keeps returning after days off should go to an eye doctor, who can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a good place to start.`,
      },
    ],
    faq: [
      {
        q: 'Why do flight instructors get dry eyes?',
        a: `Long hours scanning for traffic while watching a student, bright sun through a small cockpit’s windows, fresh-air vents at face height and windy ramp time all leave the tear film uncovered or exposed to moving air.`,
      },
      {
        q: 'Can a flight instructor use eye drops between lessons?',
        a: `Ask your aviation medical examiner first about any medication you plan to use while flying. If you use a lubricating drop, put it in on the ground, follow its label, and let your vision settle before the next flight.`,
      },
      {
        q: 'Should the cockpit fresh-air vent point at my face?',
        a: `It’s better aimed at your chest or the side window. A steady stream of outside air across your eyes speeds evaporation from the tear film during a long lesson.`,
      },
      {
        q: 'What should I do if something blows into my eye on the ramp?',
        a: `If blinking doesn’t clear it, don’t fly and don’t rely on lubricating drops to wash it out. Have urgent care or an eye doctor look at it.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-meteorologists',
    title: 'Dry eyes for meteorologists',
    description:
      'Radar loops on several monitors, night shifts and storm coverage that runs for hours. Why meteorologists get dry eyes, and habits that help on and off air.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Meteorologists get dry eyes because the job means staring at radar, satellite and model screens for hours, often in dim, cool operations rooms, on rotating and night shifts, and through long storm coverage when breaks disappear. Set monitors below eye level, aim vents away from your face, blink fully between radar scans, and use a lubricating drop as its label directs. See an eye doctor if dryness keeps coming back.`,
      },
      { h: 'What a forecast shift does to your eyes' },
      {
        p: `Whether you work in a forecast office, a broadcast weather center, an airline or energy-trading desk, or a private forecasting firm, the core of the work is the same: reading moving images on several screens at once. Radar loops, satellite imagery, model output and observation tables all demand close attention, and eyes that are concentrating blink less often and less completely. A partial blink doesn’t spread a fresh layer of tears across the whole eye, so the surface dries in patches. Add a cool, air-conditioned room kept that way for the equipment, and the tear film evaporates faster still.`,
      },
      { h: 'Setting up a multi-monitor desk' },
      {
        list: [
          `Keep the tops of the monitors at or slightly below eye level. Looking down a little narrows the eye opening and exposes less of the surface.`,
          `Put the screen you watch most, usually radar, straight ahead rather than off to one side.`,
          `Match screen brightness to the room. A very bright display in a dark office makes you squint.`,
          `Check where the ceiling diffusers and equipment fans blow, and move the chair or desk out of the stream.`,
          `If the office allows it, a small desk humidifier can take the edge off cooled air near your face.`,
        ],
      },
      { h: 'Storm coverage and long nights' },
      {
        p: `Severe weather days, hurricane landfalls and winter storms change the job. Warnings go out one after another, a radar loop holds your attention for an hour without a break, and a shift can stretch well past its scheduled end. That’s when eyes feel hot, gritty or blurry, and when it’s easiest to forget to blink. Before an event, while things are still quiet, take a few minutes away from the screens. During it, use the time while a product is sending or a model run is loading to close your eyes fully for a few seconds. Afterward, let your eyes rest before driving home.`,
      },
      {
        p: `Rotating shifts and nights compound it. Working while your body expects sleep, then sleeping in daylight in a room with the air running, both leave eyes feeling dry. Our guide to [dry eyes on night shifts](/guides/dry-eyes-on-the-night-shift) has more on rest, light and bedroom air.`,
      },
      { h: 'On air: studio lights and the teleprompter' },
      {
        p: `Broadcast meteorologists add a few things of their own. Studio lights are bright and warm, a green screen means looking toward a camera or a monitor rather than the map behind you, and newsroom air conditioning runs cold. You also try not to blink at the wrong moment on camera, which can mean holding your eyes open longer than usual. Between hits, blink fully several times and look at something across the room. Use any drop well before going on air so it has time to settle, especially with a drop that contains oil and can blur briefly.`,
      },
      { h: 'Field work and storm spotting' },
      {
        p: `Damage surveys, spotter training and field projects put meteorologists outdoors in the conditions they forecast: wind, dust and heat in the summer, cold wind in the winter. Wraparound sunglasses cut both glare and wind. In the car between stops, aim the vents away from your face. If debris or grit gets into your eye and blinking doesn’t clear it, that’s a job for urgent care or an eye doctor, not for eye drops.`,
      },
      { h: 'Using a lubricating drop around shifts' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Directions: {directions}. On a 12-hour shift that might be once at the start, once at a midpoint break and once near the end; on a normal day, morning, midday and evening. Keep the tip clean: {tip}. The panel also says: {warnings}.`,
      },
      {
        p: `The storage line reads: {storage}. Operations rooms are usually well within that, but a car parked outside during a summer shift isn’t. Keep the bottle in a desk drawer or bag. Our [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Using your own forecast for your eyes' },
      {
        p: `You already know better than most that relative humidity drops as the afternoon warms and that a low dew point means dry air. Those are the days to keep sunglasses handy outdoors and run a humidifier at home, especially once the heat comes on in the fall. Our guide to [checking the humidity forecast for dry-eye days](/guides/checking-the-humidity-forecast-for-dry-eye-days) walks a general audience through the same numbers.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, whether that’s home or the office. Checkout is as a guest; shipping is {shipping}, and free on {freeBottles} or more bottles. Tracking comes by email, and no delivery date is promised, so order before a busy season starts. Unopened bottles can be refunded within {returnDays} days of delivery. [Start an order](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes feel dry even after a few days off, or if you notice changes in your vision while reading radar, don’t chalk it up to the job. The label’s limit: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why do meteorologists get dry eyes?',
        a: `Hours of watching radar, satellite and model screens lower the blink rate, operations rooms are usually cool and air-conditioned, and long storm coverage and night shifts leave little time for breaks.`,
      },
      {
        q: 'How should I set up multiple monitors to reduce eye strain?',
        a: `Keep the tops of the screens at or slightly below eye level, put the screen you watch most straight ahead, match brightness to the room, and keep vents and equipment fans from blowing on your face.`,
      },
      {
        q: 'Can broadcast meteorologists use eye drops before going on air?',
        a: `The label doesn’t address timing around broadcasts, but leaving a few minutes between a drop and a camera hit lets any brief blur clear, especially with a drop that contains oil.`,
      },
      {
        q: 'How do I rest my eyes during severe weather coverage?',
        a: `Use the seconds while a product sends or a loop reloads to close your eyes fully, blink completely several times, and look across the room. Take a real break before the event if you can.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-brewery-workers',
    title: 'Dry eyes for brewery workers',
    description:
      'Grain dust at the mill, steam in the brewhouse, cold cellars and long cleaning shifts. Why brewery work dries your eyes, and practical ways to cope.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Brewery work dries eyes because it moves you through very different air in one shift: dust from milling grain, hot steam over the kettle and mash tun, chilly cellars and cold rooms, then a dry taproom or office. Wear the eye protection your brewery requires, step out of steam and dust between tasks, blink fully, and use a lubricating drop as labeled. Anything splashed or blown into the eye needs urgent care or an eye doctor.`,
      },
      { h: 'One shift, four kinds of air' },
      {
        list: [
          `The mill and grain room: fine dust from crushed malt hangs in the air while bags are emptied and grain is milled.`,
          `The brewhouse: hot, wet air rises from the mash and the boil, and you lean into it to check, stir or clean.`,
          `The cellar and cold room: cooler, drier air around the tanks and kegs, often with fans moving it.`,
          `The taproom, office or canning line: heated or air-conditioned air, screens and long stretches of watching a line run.`,
        ],
      },
      {
        p: `Moving from steam to a cold room and back again doesn’t give your tear film time to settle. Warm, humid air feels comfortable for a moment; the cool, dry air that follows draws moisture off quickly, and that switch can repeat a dozen times in a brew day.`,
      },
      { h: 'Milling days and grain dust' },
      {
        p: `Malt dust is fine enough to drift and settle on the face, and dust on the eyelids and lashes works its way in when you rub. Follow your brewery’s rules on eye protection and dust control around the mill and when emptying bags; they exist for your eyes. Wash your hands and face before touching your eyes. If dust makes your eyes feel gritty, blink several times and step into clean air. If a particle is stuck and blinking doesn’t clear it, don’t reach for eye drops to wash it out. Go to urgent care or an eye doctor.`,
      },
      { h: 'Steam, heat and the boil' },
      {
        p: `Leaning over a kettle or mash tun means hot vapor rising into your face. It can make eyes water first and feel dry later, once you’ve stepped away into cooler air. Keep your face back from the vapor when you can, use the vents and hoods the brewhouse has, and pause in the doorway between the hot side and the cold side for a few seconds of slow, complete blinks.`,
      },
      { h: 'Cleaning shifts and chemical splashes' },
      {
        p: `A lot of brewing is cleaning: tanks, lines, hoses and kegs. Cleaning chemicals belong behind the eye protection your brewery specifies, and splashes are a serious matter. If anything splashes into your eye, follow your workplace’s emergency procedures right away and get medical care. Lubricating eye drops are not for chemical splashes, and the label doesn’t cover it. For everyday comfort after a long cleaning shift, step into fresh air, blink fully and wash your face before touching your eyes.`,
      },
      { h: 'Cold cellars and walk-ins' },
      {
        p: `Cellar work brings cool, moving air from fans and refrigeration. Eyes tend to water in the cold at first, then feel dry later in the shift. Glasses or safety glasses cut the draft somewhat. Keep your time in the coldest spaces in blocks rather than darting in and out, when the job allows. Our guide on [dry eyes in cold storage and freezer work](/guides/dry-eyes-in-cold-storage-and-freezer-work) covers walk-in work in more depth.`,
      },
      { h: 'Taproom shifts and the canning line' },
      {
        p: `Many brewery staff also pour, run the canning line or handle orders at a screen. Taproom air is heated in winter and cooled in summer, and the hours run late. Watching a canning line, like watching any screen, slows blinking. Look away every so often and blink fully. Our guide to [dry eyes for bartenders and servers](/guides/dry-eyes-for-bartenders-and-servers) has more for front-of-house shifts.`,
      },
      { h: 'Where drops fit, and where to keep them' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions are: {directions}. With clean hands and away from dust and steam, that might be before the shift, at a mid-shift break and after you clock out. The label also says: {tip}. Wash up first, since brewery hands handle grain, hoses and chemicals.`,
      },
      {
        p: `For storage: {storage}. The brewhouse runs hot and the cold room runs cold, so neither is a good place for the bottle. A locker, office drawer or jacket pocket that stays at room temperature works. Our [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering for yourself or the crew' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a brewery. Checkout is as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised. Each person should use their own bottle. Unopened bottles can be refunded within {returnDays} days of delivery. [Order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eyes that stay dry after time away from work, or that hurt, deserve a professional look. The label says when to stop: {stopUse} An eye doctor can find the cause and decide what to do. See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a brewery?',
        a: `A brew day moves you between grain dust, hot steam, cold cellars and climate-controlled rooms. The constant change, plus dust and long hours, leaves the tear film exposed to dry, moving air.`,
      },
      {
        q: 'Can grain dust irritate your eyes?',
        a: `Yes, fine malt dust can drift onto the face and into the eyes. Follow your brewery’s eye protection rules, wash before touching your eyes, and see urgent care or an eye doctor if a particle won’t blink out.`,
      },
      {
        q: 'Can I use eye drops after a cleaning chemical splash?',
        a: `No. Follow your workplace’s emergency procedures and get medical care right away. Lubricating eye drops aren’t meant for chemical splashes.`,
      },
      {
        q: 'Where should brewery workers keep eye drops?',
        a: `Somewhere that stays at room temperature, like a locker, an office drawer or a jacket pocket. The brewhouse and the cold room fall outside the storage range on the label.`,
      },
    ],
  },
  {
    slug: 'checking-the-humidity-forecast-for-dry-eye-days',
    title: 'Checking the humidity forecast for dry-eye days',
    description:
      'How to read relative humidity and dew point in a National Weather Service forecast, and how to plan around the days that feel hardest on dry eyes.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `To spot a dry-eye day, check two numbers in your National Weather Service forecast at weather.gov: relative humidity and dew point. A low dew point means little moisture in the air, and relative humidity usually bottoms out in the afternoon as temperatures rise. In winter, heating makes indoor air drier still. On those days, run a humidifier, keep vents off your face, wear sunglasses outdoors, and use a lubricating drop as labeled.`,
      },
      { h: 'What relative humidity actually measures' },
      {
        p: `The National Weather Service’s glossary defines relative humidity as a ratio, given in percent, of the moisture in the air compared with how much the air would hold if it were saturated. Because warm air can hold more water than cold air, the glossary notes that relative humidity depends on both moisture and temperature, and that by itself it doesn’t tell you how much water is actually in the air. That’s why a single day can show a high humidity reading at dawn and a much lower one by mid-afternoon without any moisture leaving.`,
      },
      { h: 'What the dew point tells you' },
      {
        p: `The NWS glossary describes the dew point as the temperature air would have to cool to in order to reach saturation, and says a higher dew point means more moisture in the air. Unlike relative humidity, the dew point doesn’t swing just because the afternoon warms up. It’s the steadier measure of how dry the air is. When a cold, dry air mass arrives in winter, the dew point can drop well below freezing, and that’s the air your furnace will be warming for the next several days.`,
      },
      { h: 'Finding both numbers on weather.gov' },
      {
        list: [
          `Go to weather.gov and enter your city or ZIP code to get your local point forecast.`,
          `The current conditions box near the top lists Humidity and Dewpoint along with wind speed and temperature.`,
          `Below the forecast, open the Hourly Weather Forecast link. It shows a graph for the next 48 hours and lets you turn on Dewpoint and Relative Humidity as lines.`,
          `Turn on Surface Wind as well. Wind on a dry day speeds evaporation from the eyes outdoors.`,
          `The Tabular Forecast link gives the same kind of hourly figures as a table if you’d rather read numbers.`,
        ],
      },
      { h: 'Reading a dry-eye day in the forecast' },
      {
        p: `There’s no official “dry-eye day” threshold, and nobody can tell you that a particular number will make your eyes uncomfortable. What the forecast does well is show you the pattern ahead, so you can see which days stand out. Look for:`,
      },
      {
        list: [
          `A falling dew point after a cold front. Drier air is arriving, and indoor air will follow once the heat runs.`,
          `Afternoon relative humidity well below the morning reading, especially with sun and a breeze.`,
          `Wind picking up on a dry day, which matters for anyone working or exercising outdoors.`,
          `A run of cold nights in a row, which means the heat will run hard and long.`,
        ],
      },
      { h: 'Why indoor air is drier than the forecast' },
      {
        p: `The forecast describes outdoor air. In heating season, indoor air is usually drier. When cold outside air leaks or is drawn into a house and warmed, the amount of moisture stays the same while the temperature climbs, so its relative humidity drops a long way. That’s the glossary definition at work: same moisture, higher temperature, lower percentage. A low winter dew point outside is a good hint that your living room will feel parched. A small indoor hygrometer shows you the real number in the room where you sit and sleep.`,
      },
      { h: 'A plan for the dry days you can see coming' },
      {
        list: [
          `Fill and run a humidifier in the bedroom the evening before a dry stretch arrives. Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers target levels.`,
          `Turn the thermostat down a little at night; cooler indoor air keeps a higher relative humidity.`,
          `Point car and home vents away from your face, and keep space heaters aimed low.`,
          `Plan outdoor runs, walks or yard work for the morning, when relative humidity is usually higher.`,
          `Pack wraparound sunglasses for windy afternoons.`,
          `Take screen breaks more often on dry days; screens slow blinking whatever the weather.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `A forecast can’t tell you what to put in your eyes. Your eye drop’s label does. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses read: {uses}. The directions are the same whatever the weather: {directions}. Dry days aren’t a reason to use more than the label says. Before you go out in the cold, remember the storage line: {storage}. Our [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'The seasons when this matters most' },
      {
        p: `In much of the country, late fall through early spring brings the lowest dew points, and that’s when heated homes are driest. Desert and high-plains towns can see low humidity in any season. Coastal places often run humid outdoors but dry indoors once the heat or air conditioning is on. Our local guides use NOAA climate normals to describe each place’s driest months; start at the [cities and states page](/eye-drops), or browse all our [seasonal guides](/guides/topic/seasonal).`,
      },
      { h: 'When the weather isn’t the whole story' },
      {
        p: `If your eyes feel dry even on humid days, or the feeling doesn’t ease when the weather changes, the forecast isn’t the cause to chase. The label’s stopping point is: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between dew point and relative humidity?',
        a: `The NWS defines the dew point as the temperature air must cool to before it’s saturated; a higher dew point means more moisture. Relative humidity compares the moisture present with what the air could hold at its current temperature, so it changes as the air warms or cools.`,
      },
      {
        q: 'Where do I find the dew point on weather.gov?',
        a: `Enter your city or ZIP code on weather.gov. The current conditions box lists Dewpoint and Humidity, and the Hourly Weather Forecast graph can plot both for the next 48 hours.`,
      },
      {
        q: 'Why is humidity lower in the afternoon?',
        a: `Relative humidity depends on temperature. As the air warms through the day, it could hold more water, so the same amount of moisture becomes a smaller percentage.`,
      },
      {
        q: 'Why does my house feel drier than the humidity forecast?',
        a: `The forecast is for outdoor air. When cold air is heated indoors, its moisture stays the same while its temperature rises, so the indoor relative humidity ends up much lower.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-assembling-gifts-on-christmas-eve',
    title: 'Dry eyes assembling gifts on Christmas Eve',
    description:
      'Tiny parts, small-print instructions and a late hour in a warm room. Why putting gifts together on Christmas Eve dries your eyes, and how to make it easier.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Assembling gifts late on Christmas Eve dries your eyes because you’re staring at tiny parts and small-print instructions for hours, blinking less, in a heated room, often under dim light after a long day. Light the work surface well, take a break every 20 minutes, aim heat away from your face, and use a lubricating drop as labeled. If a part or splinter gets in your eye, see urgent care, not the medicine cabinet.`,
      },
      { h: 'Why this one night is so hard on your eyes' },
      {
        p: `In 2026, Christmas falls on a Friday, so Christmas Eve is a Thursday, and plenty of people will spend it at work before coming home to cook, wrap and finally build whatever arrived in a flat box. By the time the house is quiet enough to start, it’s late, your eyes have been open since early morning, and the job ahead is close, fussy work: screws, cam locks, washers, decals and diagrams with no words.`,
      },
      {
        list: [
          `Close focus on small parts lowers your blink rate, the same way a screen does.`,
          `Living rooms are often heated and warm on Christmas Eve, and a fireplace or space heater adds dry, rising air.`,
          `Dim lamps and tree lights look festive but make you squint at a diagram.`,
          `Phone flashlights and a lit-up screen for video instructions add glare up close.`,
          `Hours of this, after a full day, leave the tear film little chance to recover.`,
        ],
      },
      { h: 'Set up the workspace before you open the box' },
      {
        list: [
          `Work at a table under a bright, even light rather than on the floor by the tree. A desk lamp aimed at the parts, not at your eyes, helps most.`,
          `Sort the hardware into cups or a muffin tin so you aren’t hunting through a pile on the carpet.`,
          `If you wear reading glasses, have them on hand; straining to focus makes you squint.`,
          `Turn the fireplace or space heater so it isn’t blowing warm air across your face, or work in a cooler room.`,
          `Lay out the instruction booklet flat and well lit, or zoom in on the diagram if you’re following a PDF on a tablet.`,
        ],
      },
      { h: 'Pace it with breaks' },
      {
        p: `Every 20 minutes or so, look away from the parts to something across the room for a few seconds, and blink slowly and completely several times. Stand up between steps. If two people are building, trade off: one reads the diagram while the other turns the screwdriver, and switch halfway through. A bike, a dollhouse and a bookshelf in the same night is a lot of close work. If you can, build one of them earlier in the week, after the box arrives.`,
      },
      { h: 'Sawdust, plastic flash and things that get in your eyes' },
      {
        p: `Particleboard edges shed fine dust, plastic parts can have small burrs, and a spring or clip can snap loose. Keep your face back from anything you’re forcing into place, and wear safety glasses if you’re drilling, cutting or hammering. If something gets into your eye and blinking doesn’t clear it, don’t rub and don’t try to wash it out with eye drops. Go to urgent care or an eye doctor, even on Christmas Eve. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge how urgent it is.`,
      },
      { h: 'Using a lubricating drop in the middle of it' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions are: {directions}. If your evening dose comes during the build, wash your hands first, since they’ll have been handling packaging, greasy hardware and dusty board. Keep the bottle clean, as the label says: {tip}. Then give your eyes a minute before you go back to close work.`,
      },
      { h: 'Christmas morning, after a late night' },
      {
        p: `A short night’s sleep in a warm, heated bedroom often means waking with dry, scratchy eyes, right when everyone wants to open presents and take photos. Turn the thermostat down a little at bedtime, run a bedroom humidifier if you have one, and keep the heating vent off the bed. Our guide to [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) has more for the morning after.`,
      },
      { h: 'If the gift is eye drops' },
      {
        p: `If you’re giving Quell to an adult on your list, it ships from Brentwood, Tennessee, to any US address, with guest checkout and tracking by email. Shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised, so order well ahead of Christmas. Unopened bottles can be refunded within {returnDays} days of delivery. Our guide to [sending Quell as a gift](/guides/sending-quell-as-a-gift) covers the details, and the late-night wrapping that comes before the building is in [dry eyes during a Christmas wrapping marathon](/guides/dry-eyes-during-a-christmas-wrapping-marathon).`,
      },
      { h: 'When it’s more than a long night' },
      {
        p: `Eyes that are still dry and uncomfortable several days after the holiday deserve attention. The label is clear on when to stop: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after putting together furniture?',
        a: `Close work on small parts lowers how often you blink, and doing it late at night in a warm, heated room dries the tear film further. Bright, even light and regular breaks help.`,
      },
      {
        q: 'What day of the week is Christmas Eve in 2026?',
        a: `Thursday. Christmas Day 2026 falls on a Friday, so Christmas Eve is Thursday, December 24.`,
      },
      {
        q: 'How do I make assembly instructions easier to read at night?',
        a: `Work at a table under a desk lamp aimed at the page and parts, wear reading glasses if you use them, and zoom in on PDF diagrams rather than squinting at small print in dim light.`,
      },
      {
        q: 'What should I do if a splinter or part gets in my eye?',
        a: `Don’t rub it or try to rinse it out with lubricating drops. If blinking doesn’t clear it, go to urgent care or an eye doctor, even on a holiday.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-librarian',
    title: 'Christmas gifts for a librarian',
    description:
      'Thoughtful Christmas gifts for a librarian who spends the day at screens, in dusty stacks and dry heated air, from a patron, coworker or family member.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Good Christmas gifts for a librarian are practical things that make long days at a desk, a screen and the stacks more comfortable: a warm-white reading lamp, a small desk humidifier for dry heated air, a soft cardigan for drafty buildings, a bookstore gift card, or a lubricating eye drop for someone who mentions dry eyes. From a patron, a handwritten note often means the most.`,
      },
      { h: 'What a librarian’s workday is really like' },
      {
        p: `People picture a librarian reading quietly. The real job is closer to a customer-service desk combined with an IT help line and a warehouse. Librarians spend hours at catalog screens and patron computers, field questions from opening to close, run programs, shelve carts of returns and pull books from dusty upper shelves. Many library buildings are large, heated and air-conditioned spaces where the air can feel dry, especially in winter. That shapes what makes a useful gift. Our guide to [dry eyes for librarians](/guides/dry-eyes-for-librarians) goes into the work conditions in more detail.`,
      },
      { h: 'Gifts for long hours at a screen' },
      {
        list: [
          `A warm-white desk lamp with an adjustable arm, so they can light paperwork without glare on the monitor.`,
          `A monitor riser or laptop stand that brings a screen to eye level or slightly below.`,
          `A small, quiet desk humidifier, if their workplace allows one. Dry, heated air is hard on eyes.`,
          `A gift card for an audiobook service, so they can enjoy books on the commute without more screen or page time.`,
          `A wrist rest or a comfortable keyboard, for anyone who spends half the day processing records.`,
        ],
      },
      { h: 'Gifts for the stacks and the circulation desk' },
      {
        list: [
          `A soft cardigan or a warm vest. Big buildings have cold corners and drafty entrances.`,
          `Comfortable insoles or an anti-fatigue mat for the circulation desk.`,
          `A sturdy canvas tote for carrying programs, crafts and books between branches.`,
          `A good insulated mug with a lid, since many libraries limit open drinks near the collection.`,
          `Hand cream. Paper, dust and dry winter air are hard on hands too.`,
        ],
      },
      { h: 'Are eye drops a good gift for a librarian?' },
      {
        p: `They can be, if you know the person. If a librarian has mentioned that their eyes feel dry by the end of a shift, a bottle of a lubricating eye drop tucked into a card or a basket is practical and thoughtful. If you don’t know them well, pick something more general and save the eye drops for a coworker or family member who has brought it up. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. Its directions are simple: {directions}. The bottle is {size}, small enough for a desk drawer.`,
      },
      {
        p: `Two things to mention in a card so it isn’t a surprise: the label says {milky}, and it also says {warnings}. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Gifts from patrons versus coworkers' },
      {
        p: `Many librarians work for a city, county, school or university, and some public employers have rules about accepting gifts from the public. A patron can’t go wrong with a card thanking someone for specific help, such as finding a hard-to-track-down book, helping with a job application or running a story time a family loves. Baked goods for the whole staff room are another easy choice. Coworkers and family have more room to give something personal, like a lamp or a cozy sweater.`,
      },
      { h: 'Gift baskets that fit a library' },
      {
        list: [
          `The quiet evening: a bookstore gift card, a reading lamp, herbal tea and a bookmark.`,
          `The desk-day kit: a monitor riser, a lidded mug, hand cream and a bottle of eye drops.`,
          `The cold-building basket: a cardigan, fingerless gloves and a warm drink mix.`,
          `The commute: an audiobook gift card, wraparound sunglasses and a canvas tote.`,
        ],
      },
      { h: 'Ordering Quell as a gift' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. You can check out as a guest and send it to your own address to wrap, or straight to the recipient. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order early in December rather than the week of Christmas. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [Sending Quell as a gift](/guides/sending-quell-as-a-gift) explains the steps.`,
      },
      { h: 'More gift ideas' },
      {
        p: `For a book lover who isn’t a librarian, see [Christmas gifts for someone who reads a lot](/guides/christmas-gifts-for-someone-who-reads-a-lot). Our full list of holiday and gift guides is under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'A note on eyes that stay uncomfortable' },
      {
        p: `A gift can make a long day more pleasant, but it isn’t a substitute for an exam. If the person you’re buying for has eyes that hurt or dryness that never lets up, gently suggest they see an eye doctor, who can find the cause and decide what to do. The label’s own limit is: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do librarians want for Christmas?',
        a: `Useful things for long days at a desk, a screen and the stacks: a warm-white lamp, a cardigan for cold buildings, a lidded mug, a bookstore or audiobook gift card, and a heartfelt thank-you note.`,
      },
      {
        q: 'Can I give my child’s school librarian a Christmas gift?',
        a: `Yes, though some schools and public employers limit gifts to staff. A thank-you card or something to share in the staff room is always welcome, and a small gift card is common where rules allow.`,
      },
      {
        q: 'Are eye drops a weird gift for a librarian?',
        a: `Not if they’ve mentioned dry eyes. Long screen hours and dry heated buildings make it a practical gift. For someone you don’t know well, a more general gift is the safer pick.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-in-a-hospital-room',
    title: 'Why do my eyes feel dry in a hospital room?',
    description:
      'Sitting with someone in the hospital can leave your eyes dry and gritty. Why the room, the hours and the stress add up, and simple ways to get some relief.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eyes often feel dry in a hospital room because the building’s air is tightly climate-controlled and often cool, you sit for hours watching a monitor, a phone or the person in the bed, you sleep badly in a chair, and you may be crying more than usual. Step out for breaks, aim the room’s air away from your chair, blink fully, and use a lubricating drop as its label directs.`,
      },
      { h: 'Is hospital air drier than home?' },
      {
        p: `Hospitals control temperature and air movement carefully, and many patient rooms run cool. In winter, heated air throughout a large building tends to be dry. The air also moves constantly through vents and returns. You don’t need exact numbers to feel it: when you spend twelve hours in the same chair under a ceiling vent, your eyes notice. Cool, dry, moving air draws moisture from the tear film’s outer oil layer and the water beneath it between blinks.`,
      },
      { h: 'What sitting at a bedside does to your eyes' },
      {
        list: [
          `You stare. At the monitor’s numbers, the IV pump, the person’s face, the TV mounted on the wall. Staring slows blinking.`,
          `You scroll. Hours of texting family and reading updates on a phone held close to your face.`,
          `You sleep in fragments, in a recliner or on a fold-out bench, often under a vent.`,
          `You cry, and the hours afterward can leave eyes feeling scratchy.`,
          `You walk long, bright hallways and wait in cool waiting areas between visits.`,
        ],
      },
      { h: 'Simple fixes you can try in the room' },
      {
        list: [
          `Look up at the ceiling vents and move your chair out of the direct stream if the room allows.`,
          `Turn the brightness of your phone down and hold it farther away. Put it down entirely for a few minutes every half hour.`,
          `Close your eyes fully for a few seconds whenever the person you’re with is resting.`,
          `Take a walk outside or to a window at least once every couple of hours. It’s good for more than your eyes.`,
          `If you’re staying the night, bring an eye mask and position the recliner away from the vent before you settle in.`,
        ],
      },
      {
        p: `A visitor generally can’t adjust the thermostat, and you shouldn’t bring a humidifier or other appliances into a patient room without asking. Nurses decide what’s allowed. Our guide to [dry eyes after crying](/guides/should-i-use-eye-drops-after-crying) covers that part of a hard day.`,
      },
      { h: 'Can I use eye drops at the hospital?' },
      {
        p: `As a visitor, yes, your own drops are your business. Use them the way the label says. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses read: {uses}. The directions: {directions}. Wash your hands first, which you’ll be doing often in a hospital anyway, and keep the tip clean: {tip}. Hospital rooms are usually within the label’s storage range ({storage}), but keep the bottle in your bag rather than on the windowsill.`,
      },
      {
        p: `If you’re the patient, it’s different. Ask your nurse or doctor before using any drop you brought from home. You may be getting other medicines, and the label doesn’t cover use with other drops or medications. Never give your own drops to the person you’re visiting, and don’t share a bottle.`,
      },
      { h: 'Packing for a long stay at someone’s bedside' },
      {
        list: [
          `Your own eye drops, glasses and contact lens case if you wear them. The label doesn’t cover use with contact lenses, so ask your eye doctor about that.`,
          `A sweater. Cool rooms feel colder after hours of sitting.`,
          `A phone charger with a long cord, so you aren’t hunched beside the outlet.`,
          `An eye mask and earplugs for a night in a recliner.`,
          `A paper book or crossword, as a break from the phone screen.`,
        ],
      },
      { h: 'Sending eye drops to someone in the hospital' },
      {
        p: `If the patient is the one with dry eyes, talk to the nursing staff before buying anything for them; hospitals have their own rules about medicines from outside. Our guide to [sending eye drops to someone in the hospital](/guides/sending-eye-drops-to-someone-in-the-hospital) covers the questions to ask first. If you’re ordering for yourself, Quell ships from Brentwood, Tennessee, to any US address, with guest checkout; shipping is {shipping} or free on {freeBottles} or more bottles, and no delivery date is promised.`,
      },
      { h: 'Why your eyes may still feel dry at home' },
      {
        p: `After a long hospital stay, it can take a few days of normal sleep and fewer hours at a screen for your eyes to feel like themselves. A heated house in winter keeps up some of the same dryness. Our guide to [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) covers similar indoor air.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes still feel dry or sore well after the hospital days are over, don’t write it off as stress. The label sets out when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Many hospitals have an urgent care or emergency department nearby if something sudden happens, like pain or a change in vision.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry after sitting in a hospital for hours?',
        a: `Cool, climate-controlled air moving from vents, long hours staring at monitors and phones, broken sleep in a chair and crying all leave the tear film exposed and short of rest.`,
      },
      {
        q: 'Can I use my own eye drops while visiting someone in the hospital?',
        a: `Yes, as a visitor you can use your own drops as the label directs. Don’t share them with the patient; ask the nursing staff about anything for the person in the bed.`,
      },
      {
        q: 'Can I bring a humidifier to a hospital room?',
        a: `Ask the nurses first. Hospitals have rules about appliances from outside, and a visitor shouldn’t plug anything in without permission.`,
      },
      {
        q: 'How do I sleep in a hospital recliner without waking up with dry eyes?',
        a: `Turn the recliner out of the vent’s path before settling in, wear an eye mask, put the phone down well before sleeping, and use a lubricating drop in the morning as its label directs.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-at-the-dentist',
    title: 'Why do my eyes feel dry at the dentist?',
    description:
      'A bright light overhead, a reclined chair and an hour of staring at the ceiling. Why your eyes dry out at a dental visit, and what to ask for next time.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eyes often feel dry at the dentist because you lie back for a long appointment staring up at a bright overhead light, holding still and blinking less, in a cool, climate-controlled office. Closing your eyes during the work, asking for protective or tinted glasses, and requesting a short break on a long visit all help. If your eyes still feel dry afterward, use a lubricating drop as its label directs.`,
      },
      { h: 'What the dental chair does to your eyes' },
      {
        list: [
          `You’re reclined and looking straight up, which opens your eyes wider than when you look ahead or down.`,
          `The overhead light is bright and aimed near your face, so you squint or stare past it.`,
          `You hold still and concentrate on not moving, and concentration slows blinking.`,
          `Appointments for cleanings, fillings or crowns can run an hour or longer.`,
          `Dental operatories are usually kept cool, and air moves from ceiling vents above the chair.`,
          `Nerves play a part. Many people stare at one spot on the ceiling to get through it.`,
        ],
      },
      {
        p: `None of that is unusual, and none of it means something is wrong. It’s the same mechanism as a long screen session: wide-open eyes, fewer and partial blinks, and moving air, all at once. The surface of the eye dries between blinks, and afterward it can feel gritty or tired.`,
      },
      { h: 'Is it okay to close my eyes at the dentist?' },
      {
        p: `Yes, for most of the visit, and it’s often the simplest fix. With your eyes closed, the light doesn’t bother you and your tears stay where they belong. If the dentist or hygienist needs you to look somewhere, they’ll say so. Let them know at the start that you’ll be closing your eyes so they don’t think you’ve dozed off.`,
      },
      { h: 'What to ask for at your next appointment' },
      {
        list: [
          `Protective or tinted glasses. Many offices have them for patients; ask before the light comes on.`,
          `Permission to wear your own sunglasses, if the office doesn’t have glasses to offer.`,
          `A quick break on a long appointment, so you can sit up, blink and look around for a minute.`,
          `A blanket, if the room runs cold. Being cold and tense makes it harder to relax your face.`,
          `A small adjustment to the light, if it’s shining straight in your eyes rather than in your mouth.`,
        ],
      },
      { h: 'Water spray, polish and debris' },
      {
        p: `Cleanings and drilling use water spray and suction, and now and then a fine mist or a bit of polishing paste lands near the eyes. That’s one reason protective glasses are offered. If something gets in your eye, raise your hand and tell the dental team right away. If it’s still uncomfortable after a few blinks, or if anything stings, have it looked at by urgent care or an eye doctor rather than relying on lubricating drops.`,
      },
      { h: 'Using eye drops before or after a dental visit' },
      {
        p: `The label doesn’t give separate directions for appointments, so follow it as written. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Its directions: {directions}. A sensible time is in the car or waiting room afterward, once you’re sitting up and the light is off. Wash your hands first and keep the tip clean, as the label says: {tip}.`,
      },
      {
        p: `If you’re using a prescription eye drop or other medicines, the label doesn’t cover combining them. Ask your eye doctor or pharmacist. And if you’re having sedation or a procedure that keeps you in the chair much longer, ask the dental office what you should bring and what to skip that day.`,
      },
      { h: 'Contact lenses and glasses' },
      {
        p: `Some people find their eyes feel driest at the dentist when they wear contact lenses, since lying back and staring adds to whatever their lenses already do. Quell’s label doesn’t cover use with contact lenses, so ask your eye doctor before using any drop with them in. Wearing glasses instead on the day of a long appointment is an option to raise with them too.`,
      },
      { h: 'If your eyes are always dry, not just at the dentist' },
      {
        p: `A dental visit can make a dryness you already have more noticeable. If your eyes feel this way at your desk, in the car or first thing in the morning too, the appointment isn’t the whole story. Our guide to [why your eyes feel dry at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) covers the everyday causes, and the people on the other side of the chair have their own guide: [dry eyes for dental hygienists and dentists](/guides/dry-eyes-for-dental-hygienists).`,
      },
      { h: 'Keeping a bottle with you' },
      {
        p: `Quell comes in a {size} bottle that fits in a pocket or bag, so it can come along to the appointment. The label’s storage line is: {storage}. Don’t leave it in a hot or freezing car during a long visit. Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout; shipping is {shipping}, and free on {freeBottles} or more bottles. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that fades by the evening after a dental visit is usually just the chair and the light. If it lasts, gets worse, or comes with pain, call an eye doctor, who can find the cause and decide what to do. The label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water or feel dry after a dental cleaning?',
        a: `Lying back under a bright light, staring at the ceiling and blinking less for an hour dries the surface of the eye. Watering can follow as the eyes react. Closing your eyes during the work helps.`,
      },
      {
        q: 'Can I ask for sunglasses at the dentist?',
        a: `Yes. Many offices offer protective or tinted glasses to patients, and if they don’t, ask whether you can wear your own.`,
      },
      {
        q: 'Is it rude to close your eyes at the dentist?',
        a: `Not at all. Many patients do, and it keeps the light out of your eyes. Tell the team at the start so they know you’re awake and listening.`,
      },
      {
        q: 'What should I do if water spray gets in my eye at the dentist?',
        a: `Raise your hand and tell the dental team. If your eye still feels uncomfortable after blinking, have urgent care or an eye doctor take a look.`,
      },
    ],
  },
  {
    slug: 'do-eye-drops-have-steroids-in-them',
    title: 'Do eye drops have steroids in them?',
    description:
      'Most over-the-counter lubricating eye drops don’t contain steroids. How to check any drop’s label, and what Quell’s active ingredients actually are.',
    category: 'formula',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Some prescription eye drops contain steroids, but lubricating eye drops sold over the counter generally don’t, and Quell doesn’t. You can confirm for any drop by reading the Active ingredients section of its Drug Facts label. Quell’s actives are {actives}, listed with the purposes Lubricant and Emollient. None is a steroid. If you’re unsure what a drop contains, ask a pharmacist.`,
      },
      { h: 'How to tell whether an eye drop contains a steroid' },
      {
        list: [
          `Find the Drug Facts panel on the box. On an over-the-counter drop, it’s usually on the back or side.`,
          `Read the Active ingredients section first. Every ingredient that does the drug’s job is listed there, with its strength and its Purpose.`,
          `Look at the Purpose line next to each active. It tells you what kind of ingredient it is.`,
          `Check the front of the box and the prescription label if it came from a pharmacy counter. A prescription drop carries the pharmacy’s label with your name and the prescriber’s.`,
          `If a name is unfamiliar, ask a pharmacist. They can tell you exactly what class of drug it is.`,
        ],
      },
      {
        p: `Our guide to [the active ingredients section](/guides/the-active-ingredients-section) explains how that part of the label is laid out.`,
      },
      { h: 'What’s actually in Quell' },
      {
        p: `Quell’s Drug Facts panel lists three active ingredients: {actives}. The first two carry the purpose Lubricant, and {mineralOil} carries the purpose Emollient. The inactive ingredients are {inactives}. That’s the full formula, and there’s no steroid among them. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses are: {uses}. Nothing in that wording describes the kind of job a steroid does.`,
      },
      { h: 'Why people ask' },
      {
        p: `Steroid eye drops are prescription medicines, so the question usually comes up for one of a few reasons. Someone was prescribed a drop before and wants to know whether a store-bought one is similar. Someone is avoiding steroids for personal reasons or on a doctor’s advice and wants to be sure. Or someone saw a long, unfamiliar chemical name on a box and wondered what it was. In each case, the answer is on the label, and a pharmacist can confirm it in a minute.`,
      },
      { h: 'Prescription drops versus over-the-counter drops' },
      {
        p: `An over-the-counter drop is sold without a prescription and carries a Drug Facts panel written for you to read and follow on your own. A prescription drop is chosen by a doctor for a specific reason, dispensed by a pharmacy, and used under that doctor’s directions. If you’re using a prescription drop now, don’t add or swap in a store-bought one without asking. The Quell label doesn’t cover use with other drops, so that question belongs with your eye doctor or pharmacist. [Do you need a prescription for eye drops?](/guides/do-you-need-a-prescription-for-eye-drops) explains the difference in more detail.`,
      },
      { h: 'What the label says to watch for' },
      {
        p: `Even a drop with simple ingredients has limits. Quell’s label says: {warnings}. Under “Do not use,” it reads: {doNotUse}. And it lists when to stop and get help: {stopUse} Those lines are about your eyes, not about the ingredient list, and they’re worth knowing before you open any bottle.`,
      },
      { h: 'Questions to bring to a pharmacist' },
      {
        list: [
          `“Does this drop contain a steroid or any other prescription-strength ingredient?”`,
          `“I’m already using a prescribed eye drop. Can I use this one too, and how far apart?”`,
          `“Is there anything in the inactive ingredients I should know about, given my allergies?”`,
          `“How often can I use this, and what should make me stop?”`,
        ],
      },
      {
        p: `Bring the box or a photo of the Drug Facts panel so they can read the exact ingredient names. Our guide to [questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) has a longer list.`,
      },
      { h: 'If you were told to avoid certain ingredients' },
      {
        p: `If a doctor told you to avoid a particular ingredient or class of medicine, read both lists on Quell’s panel, active and inactive, before using it, and check with that doctor or a pharmacist if anything is unclear. Quell’s inactive ingredients include natural ones such as emu oil and manuka honey, and the label carries an egg and bird caution, quoted above. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'How to order' },
      {
        p: `Quell is sold without a prescription and ships from Brentwood, Tennessee, to US addresses. Buyers must be 18 or older. Shipping is {shipping}, or free on {freeBottles} or more bottles, and unopened bottles can be refunded within {returnDays} days of delivery.`,
      },
    ],
    faq: [
      {
        q: 'Do over-the-counter eye drops contain steroids?',
        a: `Lubricating eye drops sold over the counter generally don’t; steroid eye drops are prescription medicines. Check any drop’s Active ingredients section, or ask a pharmacist to be sure.`,
      },
      {
        q: 'Does Quell have a steroid in it?',
        a: `No. Quell’s active ingredients are {actives}, with the purposes Lubricant and Emollient, and none of its inactive ingredients is a steroid either.`,
      },
      {
        q: 'How do I know what kind of ingredient is in my eye drops?',
        a: `Read the Purpose line beside each active ingredient on the Drug Facts panel. If a name is still unfamiliar, a pharmacist can tell you what it is.`,
      },
      {
        q: 'Can I use lubricating drops with a prescription steroid drop?',
        a: `Ask the doctor who prescribed the steroid drop or your pharmacist. Quell’s label doesn’t cover use with other eye drops.`,
      },
    ],
  },
  {
    slug: 'active-vs-inactive-ingredients-in-eye-drops',
    title: 'Active vs. inactive ingredients in eye drops',
    description:
      'Why Quell’s label lists active and inactive ingredients separately, what each list tells you, and how to use both when you’re checking a bottle.',
    category: 'formula',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Active ingredients are the ones a drug label credits with doing the product’s job, listed with their strength and a Purpose. Inactive ingredients are everything else in the formula. Quell lists both: its actives are {actives}, and it lists {inactiveCount} inactives, including emu oil and manuka honey. Read the actives to know what the drop is for, and the inactives to check for anything you need to avoid.`,
      },
      { h: 'What “active” means on a Drug Facts label' },
      {
        p: `On an over-the-counter drug label, the Active ingredients section names the ingredients responsible for what the product is labeled to do. Each one is followed by its amount, shown on Quell’s label as a percentage, and by a Purpose that describes its role in a word or two. For Quell, two actives are labeled Lubricant and one is labeled Emollient. That section, together with the Uses line ({uses}), is the label’s summary of what the drop is for.`,
      },
      { h: 'What “inactive” means' },
      {
        p: `Inactive ingredients are the rest of the formula: everything in the bottle that isn’t listed as an active. “Inactive” doesn’t mean useless or filler. It means the label doesn’t credit those ingredients with the drug’s labeled job. They make up the solution the actives are carried in and give the product its character. In Quell, that includes sterile water and a salt, as well as natural ingredients such as emu oil and manuka honey. The carton describes emu oil this way: {emuOil}`,
      },
      { h: 'Why Quell’s label lists both' },
      {
        p: `A Drug Facts panel is laid out in the same order on every over-the-counter drug so that people can find what they need quickly. Listing actives with their purposes tells you what kind of product it is. Listing the inactives tells you everything else that’s in it, which matters for anyone who reacts to a particular ingredient or simply wants to know. Together they’re a complete picture of the formula.`,
      },
      { h: 'How to use each list when you shop' },
      {
        list: [
          `To compare what drops are for, start with the actives and their Purpose lines.`,
          `To check for something you avoid, read the inactives carefully, every name, in full.`,
          `To check for a preservative, read the inactive list; a preservative-free drop won’t list one. Our guide on [what preservative-free means](/guides/what-does-preservative-free-mean) explains more.`,
          `To compare strengths, look at the amounts beside the actives. Inactives aren’t listed with amounts.`,
          `To understand a caution, read the Warnings section alongside both lists. Quell’s says: {warnings}.`,
        ],
      },
      { h: 'Common misunderstandings' },
      {
        list: [
          `“More active ingredients means a stronger drop.” Not necessarily. The number of actives tells you how many ingredients have a labeled role, not how strong the product is.`,
          `“Inactive ingredients don’t matter.” They matter to anyone with a sensitivity, and they shape how a drop looks and feels. Quell’s label notes: {milky}.`,
          `“Natural ingredients must be the actives.” In Quell, the natural ingredients such as emu oil and manuka honey are listed as inactives.`,
          `“The order of the inactive list shows the amounts.” Quell’s inactives are listed alphabetically, so the order doesn’t tell you how much of each is present.`,
        ],
      },
      {
        p: `Our guide to [why inactive ingredients are listed alphabetically](/guides/why-are-inactive-ingredients-listed-alphabetically) goes into that last point.`,
      },
      { h: 'Reading Quell’s two lists together' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. On the active side, {glycerol} and {polysorbate} are labeled lubricants and {mineralOil} an emollient. On the inactive side, the emu oil the carton describes supports the same idea in its own words. Neither list is complete without the other: the actives tell you what the label says the drop does, and the inactives tell you everything else you’re putting in your eye. The full panel is on our [Drug Facts page](/drug-facts), and [why Quell has three active ingredients](/guides/why-quell-has-three-active-ingredients) explains the actives in more depth.`,
      },
      { h: 'When to ask someone' },
      {
        p: `If an ingredient on either list is unfamiliar, or you have allergies, ask a pharmacist before using the drop. If you already use a prescription eye drop, ask your eye doctor or pharmacist before adding another; Quell’s label doesn’t cover use with other drops. For questions about Quell specifically, call {company} at {phone}, {hours}.`,
      },
      { h: 'Ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
    ],
    faq: [
      {
        q: 'What is an active ingredient in eye drops?',
        a: `It’s an ingredient the Drug Facts label credits with the product’s labeled job, listed with its amount and a Purpose. Quell’s actives are {actives}.`,
      },
      {
        q: 'Are inactive ingredients in eye drops important?',
        a: `Yes. They make up the rest of the solution, and anyone with a sensitivity should read them. Quell lists {inactiveCount} inactive ingredients, including emu oil and manuka honey.`,
      },
      {
        q: 'Why are natural ingredients listed as inactive in Quell?',
        a: `On a Drug Facts panel, only the ingredients credited with the product’s labeled job are listed as actives. In Quell those are {actives}; natural ingredients such as emu oil are part of the inactive list.`,
      },
      {
        q: 'Do inactive ingredients have amounts on the label?',
        a: `No. Quell’s label shows amounts only beside the active ingredients. The inactive ingredients are listed by name, in alphabetical order.`,
      },
    ],
  },
  {
    slug: 'do-eye-drops-contain-alcohol',
    title: 'Do eye drops contain alcohol?',
    description:
      'Quell’s ingredients don’t include ethanol, the alcohol in drinks and sanitizer. How to read names ending in “-ol” or “glycol,” and what to ask.',
    category: 'formula',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Quell doesn’t list ethanol, the alcohol in drinks and hand sanitizer, among its ingredients. Its actives are {actives}, and none of its {inactiveCount} inactives is an alcohol of that kind either. A few names on the list end in “-ol” or include “glycol,” which can look like alcohol on a label, but they’re different chemicals with their own names. If you need to avoid a specific ingredient, read both lists and ask a pharmacist.`,
      },
      { h: 'Why people ask whether eye drops have alcohol' },
      {
        p: `The question usually comes from one of three places. Some people avoid alcohol for religious, personal or recovery reasons and check every product. Some remember that hand sanitizer stings and worry an eye drop might too. And some read an ingredient list, spot a name like glycerol or caprylyl glycol, and wonder whether it means alcohol. Each of those is a fair reason to look closely, and the label has what you need.`,
      },
      { h: 'Reading Quell’s ingredient list for alcohol' },
      {
        list: [
          `Active ingredients: {actives}. These are the three ingredients the label credits with the drop’s job, with Purposes of Lubricant and Emollient.`,
          `Inactive ingredients: {inactives}. These make up the rest of the formula.`,
          `Neither list includes ethanol, ethyl alcohol, isopropyl alcohol or “alcohol” on its own.`,
          `The panel’s full text, including warnings and storage, is on our [Drug Facts page](/drug-facts).`,
        ],
      },
      { h: 'What about glycerol and caprylyl glycol?' },
      {
        p: `In chemistry, “-ol” at the end of a name and the word “glycol” describe a family of molecules, not the alcohol people drink. Glycerol is also called glycerin, and it’s a common ingredient in lubricating eye drops, where Quell’s label gives it the Purpose of Lubricant. Caprylyl glycol is one of Quell’s inactive ingredients. Neither name is a synonym for drinking alcohol. If you’ve been told to avoid a particular one of these, that’s a question for a pharmacist with the box in hand. Our guides to [glycerol in eye drops](/guides/glycerol-in-eye-drops) and [caprylyl glycol in eye drops](/guides/caprylyl-glycol-in-eye-drops) go into each in more detail.`,
      },
      { h: 'Do eye drops sting like hand sanitizer?' },
      {
        p: `A lubricating eye drop isn’t sanitizer, and it isn’t meant to sting. Some people notice a brief feeling as any drop goes in, especially when the eye is very dry, and an oil-containing drop can blur vision for a moment. Quell’s label notes its appearance, {milky}, which surprises some first-time users. What the label lists as a reason to stop is different. It says: {stopUse} Our guide to [what “continued irritation” means on eye drops](/guides/what-does-continued-irritation-mean-on-eye-drops) helps tell the difference.`,
      },
      { h: 'If you avoid alcohol for religious or personal reasons' },
      {
        p: `Many people who avoid alcohol check medicines and cosmetics too, and standards differ from one tradition or program to another. The honest answer is the ingredient list itself: read the names on Quell’s panel, quoted above, and decide with that information. If an ingredient’s origin matters to you, such as whether it comes from a plant or an animal, our guide [is Quell vegan?](/guides/is-quell-vegan) explains the natural ingredients, including emu oil and manuka honey. For a ruling on what your faith or program permits, ask the person you’d normally ask.`,
      },
      { h: 'If you’re in recovery' },
      {
        p: `People in recovery often get used to reading labels for ethanol in mouthwash, cough syrup and other products. A lubricating eye drop goes in the eye, not the mouth, and Quell’s ingredient list doesn’t include ethanol. The label also says: {swallowed}. If you’re unsure about any product, a pharmacist can go through the ingredient list with you, and your sponsor or counselor can talk through anything that feels uncertain.`,
      },
      { h: 'Checking other eye drops' },
      {
        list: [
          `Find the Drug Facts panel on the box.`,
          `Read the Active ingredients first, then the Inactive ingredients, name by name.`,
          `Look for ethanol, ethyl alcohol, isopropyl alcohol or “alcohol” used alone.`,
          `If a name is unfamiliar, look it up or ask a pharmacist before you buy.`,
          `Read the Warnings section, which flags cautions the manufacturer wants you to see.`,
        ],
      },
      { h: 'What Quell is for' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. The directions are: {directions}. It also cautions: {warnings}.`,
      },
      { h: 'Questions about Quell’s ingredients' },
      {
        p: `For anything the label doesn’t answer, call {company} at {phone} ({hours}). Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout, and unopened bottles can be refunded within {returnDays} days of delivery without sending them back. You can [see the full ingredient list](/guides/quell-eye-drops-ingredients-list) before you order.`,
      },
    ],
    faq: [
      {
        q: 'Is there alcohol in lubricating eye drops?',
        a: `Read the ingredient list to be sure for any brand. Quell’s active and inactive ingredients don’t include ethanol, ethyl alcohol or isopropyl alcohol.`,
      },
      {
        q: 'Is glycerol the same as alcohol?',
        a: `Not the alcohol people drink. Glycerol, also called glycerin, has its own chemical name and is listed on Quell’s label as an active ingredient with the Purpose of Lubricant.`,
      },
      {
        q: 'Can I use eye drops if I avoid alcohol for religious reasons?',
        a: `That depends on your tradition’s rules, so read the ingredient list and ask whoever you’d normally consult. Quell’s list does not include ethanol.`,
      },
      {
        q: 'Do Quell eye drops sting like sanitizer?',
        a: `Quell isn’t a sanitizer, and it doesn’t list ethanol. Some people notice a brief feeling as any drop goes in, but pain or continued irritation is a reason to stop and ask a doctor.`,
      },
    ],
  },
  {
    slug: 'should-you-keep-the-box-your-eye-drops-came-in',
    title: 'Should you keep the box your eye drops came in?',
    description:
      'Yes, until the bottle is finished. Quell’s carton carries the full Drug Facts panel, the codes you’d need for a question, and the company’s phone number.',
    category: 'label',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Yes, keep the box until you’ve finished the bottle. Quell’s Drug Facts panel, with the uses, directions, warnings and storage range, is printed on the carton, and the packaging carries the lot number and expiration date you’d need if you ever had a question. A small bottle has room for very little. If you’d rather recycle the box, photograph every side first, and our Drug Facts page has the full panel.`,
      },
      { h: 'What’s on the box that isn’t on the bottle' },
      {
        p: `A small dropper bottle has room for only a little printing. The carton is where the label has space to say everything. Quell’s Drug Facts panel is on the carton, and it includes:`,
      },
      {
        list: [
          `The active ingredients, {actives}, with their Purposes.`,
          `Uses: {uses}.`,
          `Warnings, including: {warnings}.`,
          `Directions: {directions}.`,
          `Other information, including: {storage}.`,
          `The inactive ingredients, all {inactiveCount} of them.`,
        ],
      },
      {
        p: `The carton also has the emu oil panel and a before-and-after picture of the tear film. Our guide to [the before and after picture on the Quell box](/guides/the-before-and-after-picture-on-the-quell-box) explains it.`,
      },
      { h: 'The codes you may need later' },
      {
        p: `Medicine packaging carries a lot number and an expiration date. If you ever call the company with a question about a bottle, the first thing they’ll ask for is the lot number. If you ever wonder whether an old bottle is still in date, the expiration date answers it. Those codes are small and can wear off a bottle you handle every day, so the carton is the easier place to read them. Our guides on [the lot number](/guides/what-the-lot-number-on-eye-drops-means) and [where to find the expiration date](/guides/where-is-the-expiration-date-on-eye-drops) show what to look for.`,
      },
      { h: 'Who to call, if you need to' },
      {
        p: `The carton names the company behind the product. For Quell that’s {company}, at {address}, and you can reach us at {phone}, {hours}. Keeping the box keeps that information with the bottle, which is handy if someone else in the house has a question or the bottle travels with you.`,
      },
      { h: 'Reasons to hold on to it' },
      {
        list: [
          `You want to reread the directions or warnings later.`,
          `You or a family member has an allergy question about an inactive ingredient.`,
          `The bottle’s printing has worn off and you need the lot number.`,
          `Someone swallows some by accident and you need the label’s instructions. The label says: {swallowed}.`,
          `You want to check the storage range before a trip.`,
          `You’re asked about the product by a doctor or pharmacist.`,
        ],
      },
      { h: 'Do I need the box for a refund?' },
      {
        p: `Quell’s refund policy is about unopened bottles. Under our terms, if you change your mind about an unopened bottle, you contact us within {returnDays} days of delivery for a refund of the product price, and you don’t send the bottle back. For a refund or a replacement, the terms say to call {phone} ({hours}) with your order number. So the box isn’t what the refund depends on; your order number is. Read the [terms](/terms) for the full wording.`,
      },
      { h: 'If you don’t want to keep the carton' },
      {
        list: [
          `Photograph every side of the box, including the bottom and the flaps, before recycling it.`,
          `Write the lot number and expiration date on a piece of tape on the bottle, or in a note on your phone.`,
          `Bookmark our [Drug Facts page](/drug-facts), which shows Quell’s full panel.`,
          `Keep your order confirmation email; it has your order number.`,
        ],
      },
      { h: 'Where to keep the box' },
      {
        p: `Keep the bottle in its carton if that’s convenient, in a drawer or cabinet at room temperature, away from a sunny windowsill or a heater. The storage line on the label is the guide: {storage}. Put it somewhere children can’t reach, too. If you carry the bottle in a bag, the box can stay home, as long as you’ve noted the codes.`,
      },
      { h: 'When the label tells you to stop' },
      {
        p: `One more reason the panel matters: it tells you when to stop using the product. It says {doNotUse}, and it gives this list of reasons to stop and ask a doctor: {stopUse} Knowing where to find those lines quickly is worth a little shelf space.`,
      },
    ],
    faq: [
      {
        q: 'Should I throw away the box my eye drops came in?',
        a: `It’s worth keeping until the bottle is used up. Quell’s carton carries the full Drug Facts panel and the lot number and expiration date, which are hard to read on a small bottle.`,
      },
      {
        q: 'Is the Drug Facts label on the eye drop bottle or the box?',
        a: `Quell’s full Drug Facts panel is printed on the carton. A small dropper bottle doesn’t have room for all of it, which is a good reason to keep the box.`,
      },
      {
        q: 'Do I need the original box to get a refund on eye drops?',
        a: `Quell’s terms refund unopened bottles within {returnDays} days of delivery without sending them back. You call {phone} with your order number, so the order number matters more than the box.`,
      },
      {
        q: 'What should I do before recycling an eye drop box?',
        a: `Photograph every side, note the lot number and expiration date somewhere you’ll find them, and keep your order email. Quell’s full panel is also on the site’s Drug Facts page.`,
      },
    ],
  },
  {
    slug: 'what-does-eye-pain-mean-on-eye-drops',
    title: 'What does “eye pain” mean on an eye drop label?',
    description:
      'Eye pain is the first reason on Quell’s label to stop and ask a doctor. How it differs from dryness or grittiness, and what to do if it happens.',
    category: 'label',
    addedOn: '2026-11-23',
    body: [
      {
        p: `On an eye drop label, “eye pain” means real pain in or around the eye, such as aching, sharp, throbbing or stabbing pain, not the gritty, tired or dry feeling the drop is meant for. Quell’s label lists it first among the reasons to stop and ask a doctor. If your eye hurts, stop using the drop and contact an eye doctor. Sudden or severe pain needs care right away.`,
      },
      { h: 'Where the phrase appears on the panel' },
      {
        p: `Quell’s Drug Facts panel has a section of reasons to stop using the product and ask a doctor. That section reads: {stopUse} Eye pain comes first in that list. Its place there is deliberate. The Uses section describes what the drop is for, {uses}, and pain isn’t on it. When something falls outside the Uses, the label points you to a doctor rather than to another drop.`,
      },
      { h: 'Dryness and discomfort versus pain' },
      {
        p: `People use many words for how their eyes feel, and it helps to sort them. These describe the everyday discomfort a lubricating drop is made for:`,
      },
      {
        list: [
          `Dry, tight or scratchy, especially late in the day.`,
          `Gritty, as if there’s a little sand in the eye, after screens or wind.`,
          `Tired or heavy after a long drive or a night of reading.`,
          `A mild burning that eases when you blink or close your eyes.`,
        ],
      },
      {
        p: `These are different, and fit what the label means by pain:`,
      },
      {
        list: [
          `An ache deep in or behind the eye.`,
          `A sharp or stabbing pain, or a feeling that something is cutting the eye.`,
          `Throbbing that doesn’t ease when you close your eyes.`,
          `Pain when you look at light, or when you move your eyes.`,
          `Pain after something hit the eye or got into it.`,
        ],
      },
      {
        p: `The line between them isn’t always crisp, and you don’t need to decide which side you’re on. If you’re asking yourself whether it counts as pain, take the question as your answer, stop the drop, and call.`,
      },
      { h: 'What to do if your eye hurts' },
      {
        list: [
          `Stop using the drop. Don’t add more to see if it helps.`,
          `Don’t rub the eye.`,
          `Call an eye doctor and describe the pain: where it is, what it feels like, when it started and what you were doing.`,
          `If the pain is severe, came on suddenly, followed an injury or a splash, or comes with a change in vision, go to urgent care or an emergency room.`,
          `Bring the bottle or the box so the doctor can see what you used.`,
        ],
      },
      {
        p: `Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) gives more detail on what counts as urgent.`,
      },
      { h: 'Why the label sends you to a doctor' },
      {
        p: `A lubricating drop works on the surface of the eye, and it can’t tell you why something hurts. Pain can have many causes, and some need prompt attention. Masking it with drops while you wait for it to pass can delay finding out what’s wrong. The label’s approach is straightforward: when it hurts, a person who can examine the eye should look. An eye doctor can find the cause and decide what to do. Our guide to [when to stop using eye drops](/guides/when-to-stop-using-eye-drops) puts this line next to the label’s other stopping points.`,
      },
      { h: 'Pain right after a drop goes in' },
      {
        p: `Some people notice a brief sensation as any drop touches the eye, especially when the eye is very dry or the bottle is colder than the room. A passing feeling that’s gone in a few seconds isn’t what the label is describing. Pain that lingers, keeps coming back each time you use the drop, or gets worse is. Stop and call. Our guide to [what “continued irritation” means on eye drops](/guides/what-does-continued-irritation-mean-on-eye-drops) covers the related line on irritation.`,
      },
      { h: 'Pain and the rest of the label' },
      {
        p: `The other parts of the panel can help you think about what happened. Did the solution look the way it should? The label says {milky}, and also says {doNotUse}. Was the bottle stored within its range, {storage}? Did the tip touch anything? The label says: {tip}. None of these replaces a doctor’s visit if you have pain, but the answers are useful to bring to the appointment.`,
      },
      { h: 'Reporting a problem with a product' },
      {
        p: `If you think a bottle of Quell itself caused a problem, call {company} at {phone} ({hours}) with the lot number from the box. Our guide on [how to report a problem with eye drops](/guides/how-to-report-a-problem-with-eye-drops) explains what to have ready. Your own care comes first: see a doctor before you make any calls about the product.`,
      },
    ],
    faq: [
      {
        q: 'What counts as eye pain on an eye drop label?',
        a: `Aching, sharp, stabbing or throbbing pain in or around the eye, pain with light or eye movement, or pain after an injury. The everyday dry, gritty or tired feeling is what lubricating drops are for.`,
      },
      {
        q: 'Should I keep using eye drops if my eye hurts?',
        a: `No. Quell’s label lists eye pain first among the reasons to stop using the product and ask a doctor. Don’t add more drops to see if it helps.`,
      },
      {
        q: 'When is eye pain an emergency?',
        a: `Severe or sudden pain, pain after an injury or chemical splash, or pain with a change in vision should be seen right away at urgent care or an emergency room.`,
      },
      {
        q: 'Is a little sting when eye drops go in the same as eye pain?',
        a: `A brief sensation that fades in seconds isn’t what the label means. Pain that lingers, returns with every use or grows worse is a reason to stop and call an eye doctor.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-a-mobile-home-park',
    title: 'Shipping eye drops to a mobile home park',
    description:
      'Where the lot or space number goes, why the phone number matters, and how to keep a package of eye drops from sitting in the sun at a mobile home park.',
    category: 'shipping',
    addedOn: '2026-11-23',
    body: [
      {
        p: `To ship eye drops to a mobile home park, put the park’s street address on the first address line and your lot or space number on the second line, then add the city, two-letter state and ZIP code. Use a phone number where you can be reached. Quell ships to any US address with tracking by email, but no delivery date is promised, so watch the tracking and bring the package in promptly.`,
      },
      { h: 'How to write a mobile home park address at checkout' },
      {
        p: `Quell’s checkout asks for an address in the standard parts, and each has a place:`,
      },
      {
        list: [
          `First and last name: the person who lives in the home, as they’d be known to the park office or a neighbor.`,
          `Street address: the park’s street address, or your home’s own street address if the park assigns individual ones.`,
          `Second address line (optional): your lot, space or unit number, such as “Lot 42” or “Space 17.” It holds up to 60 characters.`,
          `City, state and ZIP: the two-letter state code and the five-digit ZIP, or ZIP+4 if you know it.`,
          `Phone number: required, because shipping carriers ask for one.`,
        ],
      },
      {
        p: `If your park uses a name instead of a street number, use the address your mail and other deliveries already arrive at. The most reliable test is simple: copy the address exactly as it appears on a recent bill or package that reached you.`,
      },
      { h: 'Lot numbers, space numbers and park names' },
      {
        p: `Parks label homes in different ways. Some use lot numbers, some use space numbers, and some give each home a full street address on an internal road. Whatever yours uses, put it on the second address line rather than tacking it onto the street address. That keeps the first line clean and puts the identifier where drivers look for it. If the park has a name, it doesn’t need its own line unless it’s part of the official address you receive mail at.`,
      },
      { h: 'Why the phone number matters' },
      {
        p: `Checkout requires a phone number with the shipping address, and our guide to [why you need a phone number to ship](/guides/why-do-you-need-a-phone-number-to-ship) explains why. In a park with many similar-looking homes or a gate, a reachable number gives a driver a way to sort out a question. Use a mobile number if you have one, and if you’re ordering for someone else, use theirs.`,
      },
      { h: 'Checking how your park handles packages' },
      {
        list: [
          `Ask the park office whether packages come to your door or are dropped at the office.`,
          `Ask whether there are cluster mailboxes or package lockers, and how you’re notified.`,
          `If the park has a gate, ask how drivers get in.`,
          `If you’ll be away, ask a neighbor to bring the box inside.`,
        ],
      },
      {
        p: `Quell can’t change how a park or a carrier handles deliveries, and no delivery date is promised. What you can control is giving a complete address and watching the tracking. Our guides to [eye drops delivered to an apartment](/guides/eye-drops-delivered-to-an-apartment) and [eye drops delivered to a rural address](/guides/eye-drops-delivered-to-a-rural-address) cover similar address situations.`,
      },
      { h: 'Heat, cold and a package on the steps' },
      {
        p: `A box left on a sunny metal step or a porch in July, or out on a freezing night in January, can move outside the storage range on Quell’s label: {storage}. Watch the tracking email and bring the package in as soon as you can. If a bottle looks different from how it should, the label says: {doNotUse}, and it describes the normal look as: {milky}. Our guide to [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) has more on what to check.`,
      },
      { h: 'If tracking says delivered but you don’t have it' },
      {
        list: [
          `Check the park office and any package lockers or cluster boxes.`,
          `Ask neighbors on either side; similar lot numbers get mixed up.`,
          `Look around the home, under steps and behind planters.`,
          `If it still hasn’t turned up, call us at {phone} ({hours}) with your order number.`,
        ],
      },
      {
        p: `Our terms say risk of loss passes on delivery to the address you provide, which is one more reason to get the lot number right. If an order arrives damaged, incorrect or with a broken seal, contact us within {returnDays} days and it will be replaced.`,
      },
      { h: 'Shipping cost and what to expect' },
      {
        p: `Orders ship from Brentwood, Tennessee. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email once the order ships. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Our guide to [how to track your order](/guides/how-to-track-your-order) explains the shipping email.`,
      },
      { h: 'Ordering for a parent or grandparent in a park' },
      {
        p: `Many people order for an older relative in a mobile home community. Use their name, their lot number and their phone number on the shipping address, and your own email for the receipt and tracking, so you can keep an eye on the package and let them know when it’s close. Our guide to [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) walks through the rest.`,
      },
    ],
    faq: [
      {
        q: 'How do I write a lot number in a shipping address?',
        a: `Put the park’s street address on the first line and the lot or space number, such as “Lot 42,” on the second address line. Quell’s second line holds up to 60 characters.`,
      },
      {
        q: 'Can Quell ship to a mobile home?',
        a: `Yes. Quell ships to any US address, including homes in mobile home parks. Give the full address with the lot or space number and a reachable phone number.`,
      },
      {
        q: 'What if my mobile home park doesn’t deliver packages to my door?',
        a: `Ask the park office how packages are handled, whether at the office, in lockers or at cluster boxes, and watch the tracking email so you can pick the box up promptly.`,
      },
      {
        q: 'Which address should I use if my park has a name but no street number?',
        a: `Use the address your mail and other packages already reach you at. Copying it exactly from a recent bill or delivery is the most reliable approach.`,
      },
    ],
  },
  {
    slug: 'ordering-eye-drops-for-a-parent-without-email',
    title: 'Ordering eye drops for a parent without email',
    description:
      'Your parent doesn’t use email, but checkout asks for one. Whose details go where, who gets the receipt and tracking, and how to keep them in the loop.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `If your parent doesn’t use email, place the order yourself with your own email address and ship it to them. Put their name, street address and phone number in the shipping fields, and use your email so the receipt, tracking and any reminder come to you. Then call or text them when it ships. Your parent never needs an account or an inbox to receive the bottle.`,
      },
      { h: 'Whose details go where at checkout' },
      {
        list: [
          `Email: yours. Checkout asks for an email so it can send the receipt, and that’s where the order’s messages go.`,
          `Shipping name: your parent’s, so the package is addressed to the person who lives there.`,
          `Street address, apartment or unit, city, state and ZIP: theirs.`,
          `Phone number: theirs, if they answer it, because the carrier may use it. If they don’t, use yours.`,
          `Payment: your card on the secure payment page. The billing address there is the one for your card.`,
        ],
      },
      {
        p: `Buyers must be 18 or older, and checkout works as a guest, so neither of you needs an account. Our guide to [what checkout asks for](/guides/what-checkout-asks-for) shows each field.`,
      },
      { h: 'What arrives in your inbox' },
      {
        p: `Because the order is under your email, you get the receipt with the order number and, once it ships, the tracking email. Quell also sends one reorder reminder email later on, to the same address. That makes you the point person, which works well for a parent who doesn’t use email: you can see where the package is and tell them when to expect it, without promising a date, since none is promised at checkout.`,
      },
      { h: 'Keeping your parent in the loop' },
      {
        list: [
          `Call or text when you place the order, so a box with an unfamiliar return address isn’t a surprise.`,
          `Read them the tracking updates or forward a screenshot to a family member who lives nearby.`,
          `Ask them to bring the package inside soon after it arrives, especially in very hot or cold weather.`,
          `Tell them the drops look milky brown. The label says: {milky}. It’s easy to mistake that for spoiled.`,
          `Write the label’s directions on a sticky note if their eyesight makes small print hard to read: {directions}.`,
        ],
      },
      { h: 'Looking up the order later' },
      {
        p: `The order status page at [/orders](/orders) asks for the order number and the email the order was placed with. Since that’s your email, you’re the one who can look it up. Keep the confirmation email in a folder, or write the order number down in case your parent calls to ask about it.`,
      },
      { h: 'If something’s wrong with the package' },
      {
        p: `If the order arrives damaged, incorrect or with a broken seal, our terms say to contact us within {returnDays} days for a replacement. If your parent decides they don’t want an unopened bottle, you can be refunded within {returnDays} days of delivery, and nothing needs to be sent back. Either way, call {phone} ({hours}) with the order number. Your parent can call too, but having the order number and your email handy makes it quicker.`,
      },
      { h: 'Before you order: is it the right drop for them?' },
      {
        p: `It’s worth a quick conversation first. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses read: {uses}. The label also says: {warnings}. If your parent uses prescription eye drops or other medicines, the label doesn’t cover combining them, so they should ask their eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts), which you can read to them over the phone.`,
      },
      { h: 'Paying from an HSA or FSA' },
      {
        p: `Whether you can use your own health account for a parent’s eye drops depends on whether they’re your dependent under IRS rules and on your plan. Our guide to [using an HSA for your parents’ eye drops](/guides/can-i-use-my-hsa-for-my-parents-eye-drops) explains what IRS Publication 969 says.`,
      },
      { h: 'Shipping and cost' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a parent in another state. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. If your parent has trouble getting out, ordering a few bottles at once means fewer packages to watch for.`,
      },
      { h: 'When they should see an eye doctor' },
      {
        p: `If your parent mentions eye pain, changes in their vision, or dryness that doesn’t get better, help them make an appointment rather than ordering more drops. The label says: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Can I order eye drops for my mom if she doesn’t have an email?',
        a: `Yes. Use your own email at checkout and put her name, address and phone number in the shipping fields. The receipt and tracking come to you.`,
      },
      {
        q: 'Whose phone number should I put on an order shipped to my parent?',
        a: `Theirs, if they answer it, since the carrier may use it to reach the person at the delivery address. If they don’t answer calls from unknown numbers, use yours.`,
      },
      {
        q: 'Who gets the tracking email when I order for someone else?',
        a: `The person whose email was used at checkout. If you order with your email for a parent, you get the receipt, the tracking email and the reorder reminder.`,
      },
      {
        q: 'Can my parent check on the order without an email address?',
        a: `The order lookup asks for the order number and the email used, so the person who placed the order checks it. Your parent can also call {phone} during {hours}.`,
      },
    ],
  },
  {
    slug: 'splitting-a-gift-order-with-your-siblings',
    title: 'Splitting a gift order with your siblings',
    description:
      'Going in together on eye drops for a parent? Checkout takes one card, so one person orders. How to split the cost, ship it and keep everyone informed.',
    category: 'ordering',
    addedOn: '2026-11-23',
    body: [
      {
        p: `To split a gift order of eye drops with your siblings, have one person place the order and pay, then settle up between yourselves. Quell’s checkout charges one card for the whole order, so the cost can’t be split at payment. The person who orders gets the receipt and tracking by email and can share them, and the gift ships to one address.`,
      },
      { h: 'Why one person has to place the order' },
      {
        p: `Each order is paid in one transaction on the secure payment page, with one card for the full total of products and shipping. There’s no option to divide it across cards, and there are no gift cards or store credit to combine. Our guide to [why checkout uses a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains how that page works. So the simplest plan is to pick an organizer: one sibling orders, the rest pay their share back.`,
      },
      { h: 'A simple plan for going in together' },
      {
        list: [
          `Agree on what you’re giving and how many bottles. A few bottles at once means the recipient won’t run out soon.`,
          `Pick the organizer, usually whoever is most reliable about keeping receipts and following tracking.`,
          `The organizer checks out as a guest with their own email and card, and ships to the recipient or to themselves for wrapping.`,
          `The organizer shares the receipt total with everyone, and each person pays their share however your family usually settles up.`,
          `Forward the tracking email to the group, so nobody needs to ask where it is.`,
        ],
      },
      { h: 'Working out each person’s share' },
      {
        p: `Divide the order total from the receipt, not the price on the product page, so shipping is included. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, so going in together on several bottles can make the shipping charge disappear and simplify the math. Free shipping applies once the product subtotal reaches {freeThreshold}. Round the shares to whole dollars if that’s easier, and let the organizer keep any odd cents for their trouble.`,
      },
      { h: 'Where to ship a group gift' },
      {
        list: [
          `Straight to the recipient, if you’re not wrapping it. Use their name, address and phone number in the shipping fields.`,
          `To the organizer, if you’ll wrap it together or hand it over at a family gathering.`,
          `To whichever sibling will see the recipient first, if you’re spread across states.`,
        ],
      },
      {
        p: `Each order ships to one address. If two households each want a bottle, that’s two orders. Our guide to [ordering eye drops for someone in another state](/guides/order-eye-drops-for-someone-in-another-state) covers shipping a gift across state lines.`,
      },
      { h: 'When one sibling lives near the parent' },
      {
        p: `Often one brother or sister lives close by and sees the parent every week, while the others are farther away. That nearby sibling is a natural organizer even if someone else pays: they can receive the package, check that it arrived sealed and undamaged, hand it over in person and read the label with the parent. If the box has a problem, they’re the one who can describe it when the organizer calls with the order number.`,
      },
      { h: 'Will the recipient see the price?' },
      {
        p: `Messages about the order go to the email used at checkout, which is the organizer’s, not the recipient’s. Our guide on [whether the gift recipient sees the price](/guides/will-the-gift-recipient-see-the-price) goes through what’s in the box and what isn’t.`,
      },
      { h: 'What goes in the card' },
      {
        p: `A group gift deserves a word about why. If Mom has mentioned her eyes feeling dry in the evenings, or Dad squints at the newspaper by the furnace vent, say that you noticed. Mention two things from the label so the bottle isn’t a surprise: {milky}, and its directions are {directions}. If they use prescription eye drops or other medicines, suggest they check with their eye doctor or pharmacist first, since the label doesn’t cover using it with other drops.`,
      },
      { h: 'If the gift isn’t wanted' },
      {
        p: `If the recipient decides they don’t want an unopened bottle, it can be refunded within {returnDays} days of delivery without being sent back. Under our terms, the refund covers the product price, and original shipping isn’t refunded. The organizer calls {phone} ({hours}) with the order number, since the order is under their email, and then shares the refund with the group. Our guide on [what to do if a gift isn’t wanted](/guides/if-a-gift-of-quell-is-not-wanted) has more.`,
      },
      { h: 'Using HSA or FSA money for a shared gift' },
      {
        p: `Health account rules turn on whose expense it is, and a shared gift for a parent usually isn’t straightforward. If anyone hopes to use an HSA or FSA, read our guide on [buying a gift with HSA money](/guides/can-you-buy-a-gift-with-hsa-money) and check with the plan administrator before ordering.`,
      },
      { h: 'Timing around the holidays' },
      {
        p: `No delivery date is promised, so a group gift for Christmas should be ordered well before the last week. Give the group a deadline to agree a few days before you plan to order, and order on schedule even if one sibling hasn’t weighed in. Quell ships from Brentwood, Tennessee, to any US address. [Start an order](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Can two people pay for one eye drop order?',
        a: `No. Quell’s checkout charges one card for the full order total. One person pays, and the others pay their share back to them.`,
      },
      {
        q: 'How do siblings split the cost of a gift for their parents?',
        a: `Agree on the gift, have one sibling order and pay, then divide the receipt total, including shipping, and settle up however your family usually does.`,
      },
      {
        q: 'Who should place a group gift order?',
        a: `Whoever is most organized about receipts and tracking. The order’s emails go to that person, and they’d make any refund call with the order number.`,
      },
      {
        q: 'Can a group gift ship to two different addresses?',
        a: `Each order ships to one address. If two households each need a bottle, place two orders.`,
      },
    ],
  },
]
