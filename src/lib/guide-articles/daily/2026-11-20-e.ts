import type { Guide } from '@/lib/guide-types'
export const DAILY_20261120_E: Guide[] = [
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-logan-ut:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid LGU; saved at .daily-job/acis1120/LGU.json and .daily-job/e/mint_LGU.json)
   *   (LOGAN CACHE AP, elev 4448 ft: Jan max 31.8 F, min 15.1 F; Dec max 33.2,
   *   min 16.9; Jul max 91.0, min 55.1; Aug max 89.0, min 53.0; Jul precip 0.32 in
   *   (driest), May 2.09 (wettest); twelve monthly precip normals sum to 15.60 in;
   *   snowfall normal missing ("M"), not quoted)
   * - USGS NWIS site 10109000 "LOGAN RIVER ABOVE STATE DAM, NEAR LOGAN, UT"
   *   (waterservices.usgs.gov, checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Logan row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-logan-ut',
    title: 'Dry eye relief in Logan, Utah',
    description:
      'Logan’s airport sits near 4,450 feet and gets about 15.6 inches of precipitation a year. NOAA numbers and everyday ways to ease dry eyes in Cache County.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Logan starts with the air: NOAA’s normals for the Logan-Cache Airport, at about 4,450 feet, add up to only about 15.6 inches of precipitation a year, and July averages just 0.32 inches. Thin, dry air pulls water from the tear film year-round. Shield your eyes from wind, run a humidifier when the furnace is on, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Logan-Cache Airport record shows' },
      {
        p: `The numbers here come from NOAA’s 1991–2020 climate normals for the Logan-Cache Airport, the same data the National Weather Service publishes through NOWData. NOAA lists the airport at roughly 4,450 feet above sea level. A few of its monthly figures tell most of the story:`,
      },
      {
        list: [
          `January averages a high of 31.8°F and a low of 15.1°F, the coldest month on the record.`,
          `December is close behind, at 33.2°F for the high and 16.9°F for the low.`,
          `July brings a normal high of 91.0°F but a low of only 55.1°F, a swing of about 36 degrees in a day.`,
          `August is nearly the same: 89.0°F by afternoon and 53.0°F before dawn.`,
          `May is the wettest month at 2.09 inches; July is the driest at 0.32 inches.`,
          `All twelve monthly precipitation normals together come to about 15.6 inches.`,
        ],
      },
      {
        p: `The station’s record has no snowfall normal, so this page leaves snow out. The precipitation total says enough: by the standards of most of the country, Logan is a dry place, and the elevation adds to it.`,
      },
      { h: 'Why altitude and dry air matter for your eyes' },
      {
        p: `The tear film has three layers: an oily outer layer, a watery middle and a mucus layer against the eye. The oil slows evaporation. When the surrounding air is dry, water leaves the tear film faster between blinks, and the eye starts to feel scratchy, gritty or tired. Higher ground tends to mean drier air and stronger sun, and a place that sees little summer rain gives that effect plenty of room. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains the mechanics in more detail.`,
      },
      { h: 'Summer: hot afternoons, cool nights, open windows' },
      {
        p: `A 36-degree daily swing changes how people live in July and August. Afternoons push toward 90°F, so air conditioners and evaporative coolers run, and car vents blow straight at the driver. After dark the air drops into the 50s, windows go open, and a box fan often pulls that cool, dry night air across the bed. Each of those habits moves air across your eyes for hours.`,
      },
      {
        list: [
          `Aim car vents at your chest or the windshield instead of your face.`,
          `Point a bedroom fan at your feet or the wall, not toward the pillow.`,
          `Wear sunglasses that wrap around the sides when you’re outside at midday.`,
          `When reading or scrolling in bed with a fan running, stop every so often and close your eyes for a few seconds.`,
        ],
      },
      { h: 'Winter in Cache County: furnace air for months' },
      {
        p: `With January lows near 15°F, furnaces run from fall well into spring. Heating cold outdoor air without adding moisture drives indoor relative humidity down, and that dry indoor air is what most people breathe at work, at home and in the car. The eyes notice it first thing in the morning and after long evenings in front of a screen.`,
      },
      {
        list: [
          `Run a bedroom humidifier during the heating months and clean it on the schedule its manual gives.`,
          `Close or deflect the floor register nearest the bed or a desk chair.`,
          `Keep the car’s heat on the windshield rather than the face vents during the morning drive.`,
          `Step outside with a hat brim and wraparound glasses when the wind is up; [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers room size, placement and how to read a hygrometer.`,
      },
      { h: 'The river, the trails and long days outdoors' },
      {
        p: `The Logan River passes close to town (the U.S. Geological Survey keeps a gauge on it above the State Dam near Logan), and plenty of residents spend summer weekends hiking, biking or fishing on higher ground. Climbing trails and riding mountain bikes put moving air across the eyes, and the higher you go, the stronger the sun. Wraparound sunglasses help on the trail, and a few deliberate full blinks at each rest stop spread a fresh layer of tears. Keep a bottle in a pack pocket out of direct sun.`,
      },
      { h: 'Keeping a bottle at the right temperature' },
      {
        p: `Logan’s range is wide enough to matter for storage. The label reads: {storage}. A parked car in a July afternoon can get far hotter than that, and a car left out on a January night can fall well below it. Keep the bottle in a bag you carry indoors rather than in the glove box. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) and [can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) cover both ends.`,
      },
      { h: 'Using a lubricating drop in Logan' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits dry, high air. Its label lists these uses: {uses}. The directions are short: {directions}. Before using it, read the warnings: {warnings}. One more line from the label is worth keeping in mind: {tip}. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses, for children, or for use alongside other eye drops. If any of those apply to you, ask your eye doctor or pharmacist first. Quell ships to Logan addresses from Brentwood, Tennessee; the [Logan page](/eye-drops/logan-ut) and the [Utah page](/eye-drops/state/utah) have ordering details for the area.`,
      },
      { h: 'When dryness is a question for an eye doctor' },
      {
        p: `Dry air explains a lot of discomfort, but not all of it. {stopUse} Sudden pain, light sensitivity, or blurred vision that doesn’t clear with a blink also deserve a prompt visit. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait, and the [self-check](/self-check) can help you describe your symptoms, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Logan, Utah?',
        a: 'July. NOAA’s 1991–2020 normals for the Logan-Cache Airport give July only 0.32 inches of precipitation, the lowest of any month, while May is the wettest at 2.09 inches.',
      },
      {
        q: 'How cold does Logan, Utah get at night in January?',
        a: 'The normal January low at the Logan-Cache Airport is 15.1°F, with a normal high of 31.8°F. That means furnaces run for months, which dries indoor air.',
      },
      {
        q: 'Why do my eyes feel dry in Logan in the summer?',
        a: 'Summer afternoons near 90°F bring air conditioning and fans, and July is the driest month on the airport’s record. Moving, dry air speeds evaporation from the tear film, so eyes can feel scratchy even on pleasant evenings.',
      },
      {
        q: 'Is Logan, Utah high altitude?',
        a: 'The Logan-Cache Airport, the city’s official weather station, sits at about 4,450 feet according to NOAA’s station record. Higher, drier air is one reason eyes can feel dry there.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-utica-ny:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid RME; saved at .daily-job/acis1120/RME.json and .daily-job/e/mint_RME.json)
   *   (ROME GRIFFISS AIRFIELD, elev 475 ft: Jan max 30.1 F, min 12.9 F; Feb max
   *   31.8, min 13.2; Dec max 35.7, min 20.9; Nov min 31.2; Jul max 80.9, min 59.5;
   *   precip Oct 4.67 in (wettest), May 4.46, Feb 2.37 (driest), Jan 2.50; twelve
   *   monthly precip normals sum to 43.82 in; snowfall normal missing ("M"), not quoted)
   * - USGS NWIS sites 01339300 "MOHAWK RIVER AT SCHUYLER ROAD AT UTICA NY" and
   *   01336510 "MOHAWK RIVER AT FLOYD AVENUE AT ROME NY" (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Rome or Utica row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-utica-ny',
    title: 'Dry eye relief in Utica, New York',
    description:
      'Utica’s nearest NOAA record puts February lows near 13°F and October as the wettest month. How the long Mohawk Valley heating season dries your eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Utica, dry eyes are mostly an indoor problem. The nearest official record, NOAA’s normals for the Griffiss airfield in Rome, shows close to 44 inches of precipitation a year, yet January and February lows sit near 13°F, so heat runs for half the year and indoor air turns parched. Humidify, steer heat away from your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Where Utica’s weather numbers come from' },
      {
        p: `Utica doesn’t have its own first-order weather station, so this page uses NOAA’s 1991–2020 climate normals for Rome Griffiss Airfield, in the neighboring city of Rome, as published through the National Weather Service’s NOWData. The station sits at about 475 feet. Both cities lie along the Mohawk River, which the U.S. Geological Survey gauges in Rome and in Utica, so the airfield is a fair stand-in for the valley floor around Utica, though it won’t match the hills south of the city.`,
      },
      {
        list: [
          `January: normal high 30.1°F, normal low 12.9°F.`,
          `February: 31.8°F and 13.2°F, nearly as cold, and the driest month at 2.37 inches.`,
          `November lows average 31.2°F, so freezing nights arrive before Thanksgiving.`,
          `December: a 35.7°F high and a 20.9°F low.`,
          `July: 80.9°F by afternoon, 59.5°F at dawn.`,
          `October is the wettest month at 4.67 inches, with May close behind at 4.46.`,
          `The twelve monthly normals add up to about 43.8 inches of precipitation a year.`,
        ],
      },
      {
        p: `The record has no snowfall normal, so you won’t find a snow total here.`,
      },
      { h: 'A wet climate with dry indoor air' },
      {
        p: `Wet weather and dry eyes seem like a mismatch until you look at where people spend a Utica winter. Air at 13°F carries very little water vapor, whether it’s raining, snowing or clear. Bring that air indoors and warm it to 68°F, and the same small amount of moisture is spread across far warmer air, so the relative humidity falls sharply. Your eyes don’t feel the rain gauge. They feel the living room, the cubicle and the car, where warm, dry air sits against the tear film for hours and pulls water from it between blinks.`,
      },
      { h: 'Radiators, boilers and older homes' },
      {
        p: `If your home or apartment heats with steam or hot-water radiators rather than forced air, you have one advantage: radiators don’t blow air at you. The rooms still dry out, though, and a radiator under a bedroom window warms the air right beside the bed. Forced-air systems in newer homes and offices add moving air on top of the dryness.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom from November through March and keep it clean.`,
          `Move the bed or the reading chair a few feet away from a radiator if the room allows.`,
          `In forced-air rooms, close or deflect the vent closest to where you sit.`,
          `Lower the thermostat a little at night; slightly cooler air dries the eyes a little less.`,
        ],
      },
      {
        p: `[Dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) has more on steam heat, and [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers sizing and placement.`,
      },
      { h: 'Snow days, shoveling and the drive in' },
      {
        p: `Clearing the driveway at 7 a.m. in February puts cold wind on wide-open, watering eyes. Inside the car, the heater then blasts warm, dry air at your face for the whole commute. Wraparound sunglasses or ski goggles outside, and defrost aimed at the glass instead of the face vents inside, take a lot of the sting out. [Dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) and [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) go into both.`,
      },
      { h: 'Fall leaf season and October rain' },
      {
        p: `October is the wettest month on the record, and it’s also when the first furnace and radiator days arrive. Raking leaves on a breezy afternoon stirs up dust and bits of leaf, then you come inside to the season’s first dry, heated air. If your eyes feel worse in late October than in midsummer, that change of setting is the likely reason. Rinse dust off your face and hands after yard work before you touch your eyes, and start the humidifier when the heat comes on rather than waiting for January.`,
      },
      { h: 'Using Quell through a Utica winter' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what heated rooms work against. The label lists its uses as: {uses}. Its directions read: {directions}. Read the warnings before the first drop: {warnings}. The full Drug Facts panel is on the [Drug Facts](/drug-facts) page.`,
      },
      {
        list: [
          `Storage on the label: {storage}. A car parked outside on a February night is far colder than that, so carry the bottle in a coat pocket or bag rather than leaving it in the console.`,
          `Contact lenses, children and other eye drops aren’t covered by the directions; ask your eye doctor or pharmacist first.`,
          `Orders ship from Brentwood, Tennessee, to Utica addresses; see the [Utica page](/eye-drops/utica-ny) and the [New York page](/eye-drops/state/new-york).`,
        ],
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `Dry heat makes a lot of eyes uncomfortable, but it doesn’t explain everything. {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the wettest month in Utica, New York?',
        a: 'October, by the nearest official record. NOAA’s 1991–2020 normals for Rome Griffiss Airfield give October 4.67 inches of precipitation, with May second at 4.46 inches.',
      },
      {
        q: 'Where is the official weather station for Utica, NY?',
        a: 'The closest NOAA station with full climate normals is Rome Griffiss Airfield in neighboring Rome, at about 475 feet. Its numbers stand in for Utica on this page.',
      },
      {
        q: 'Why are my eyes so dry in Utica when it’s so wet outside?',
        a: 'Cold outdoor air holds little moisture, and heating it indoors drops the relative humidity sharply. With January and February lows near 13°F, Utica homes and offices spend months with dry, heated air, and that’s the air your eyes sit in.',
      },
      {
        q: 'Does steam radiator heat make eyes dry in a Utica winter?',
        a: 'Radiators don’t blow air the way forced-air vents do, but a heated room still loses relative humidity, especially near the radiator itself. A humidifier and a little distance from the heat source help.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-elmira-ny:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid ELM; saved at .daily-job/acis1120/ELM.json and .daily-job/e/mint_ELM.json)
   *   (ELMIRA CORNING REGIONAL AP, elev 936 ft: Jan max 33.8 F, min 16.4 F; Feb
   *   max 36.3, min 16.9; May max 70.4, min 44.3; Oct max 61.4, min 38.8; Jul max
   *   82.4, min 58.0; precip Feb 1.34 in (driest), Jan 1.66, Aug 3.58 (wettest),
   *   Jun 3.50; twelve monthly precip normals sum to 32.36 in; snowfall missing ("M"))
   * - USGS NWIS site 01530332 "CHEMUNG RIVER AT ELMIRA NY" (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Elmira row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-elmira-ny',
    title: 'Dry eye relief in Elmira, New York',
    description:
      'Elmira’s spring days swing 26 degrees from dawn to afternoon, and February is its driest month. NOAA numbers and ways to keep dry eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Elmira’s eyes face two seasons of trouble: a cold, dry-aired heating season, with February the driest month at the Elmira Corning Regional Airport, and spring days that swing about 26 degrees between dawn and afternoon. Both mean heaters, defrosters and fans blowing on your face. Keep air off your eyes, humidify in winter, take full blinks during screen time, use a lubricating drop as its label directs, and see an eye doctor if pain or blurred vision appears.`,
      },
      { h: 'Elmira by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Elmira Corning Regional Airport, the record the National Weather Service shows in NOWData, are the official climate figures for the area. NOAA lists the station at about 940 feet. It’s an airport station rather than a downtown one, so a given morning in the city along the Chemung River may not match it exactly. Over thirty years, though, the pattern is clear:`,
      },
      {
        list: [
          `Coldest month: January, with a normal high of 33.8°F and low of 16.4°F.`,
          `February is about as cold (36.3°F and 16.9°F) and the driest month, at 1.34 inches.`,
          `May runs from a 44.3°F dawn to a 70.4°F afternoon, the widest daily range of the year.`,
          `July is the warmest month, at 82.4°F and 58.0°F.`,
          `August is the wettest month at 3.58 inches, with June at 3.50.`,
          `Total precipitation across the twelve monthly normals is about 32.4 inches.`,
        ],
      },
      {
        p: `There’s no snowfall normal in the station’s record, so none is quoted here.`,
      },
      { h: 'The heating season, January through March' },
      {
        p: `With winter lows in the mid-teens, Elmira homes keep the heat on for months, and the outdoor air is at its driest in February. Warm that thin winter air to room temperature and indoor relative humidity drops low enough that eyes feel it within hours. People often describe waking with eyes that feel stuck or sandy, or reaching the end of a workday with eyes that burn. Both come from the same thing: water leaving the tear film faster than blinking replaces it.`,
      },
      {
        list: [
          `A humidifier in the bedroom does the most good, since that’s where you spend the longest stretch without blinking.`,
          `If you heat with a wood stove or pellet stove, keep your chair out of the direct path of its warm air; [dry eyes from a wood stove](/guides/dry-eyes-from-a-wood-stove) has more.`,
          `Space heaters under a desk blow straight up toward your face; angle them at your feet.`,
        ],
      },
      { h: 'Spring’s big daily swing' },
      {
        p: `In May, the normal low is 44.3°F and the normal high is 70.4°F. In practice that means the car heater runs on the drive to work and the air conditioning runs on the drive home, and a home thermostat may switch between heat and cooling in one day. Each switch puts a new stream of conditioned air in motion, often aimed at your face. April and May are also when people get back outside after a long winter: yard cleanup, the first bike rides along the river, youth soccer on breezy fields.`,
      },
      {
        list: [
          `Set car vents to the floor and windshield, not the dash vents facing you.`,
          `Wear wraparound sunglasses for spring yard work and ball games.`,
          `Rinse your hands and face after mowing or raking before you touch your eyes.`,
        ],
      },
      { h: 'Summer along the Chemung' },
      {
        p: `Summer in Elmira is warm and fairly wet, with August the rainiest month. Humid air is gentler on the tear film than heated winter air, but summer has its own drying habits: hours in air-conditioned offices and stores, box fans in bedrooms, and long afternoons on the water or at outdoor events. Kayaking or fishing on the Chemung puts glare and breeze on your eyes at the same time. [Dry eyes when kayaking](/guides/dry-eyes-when-kayaking) and [dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) cover both settings.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its stated uses are: {uses}. The directions say: {directions}. The warnings section begins: {warnings}. The label also says not to use it under this condition: {doNotUse}. The bottle holds {size}. You can read every line on the [Drug Facts](/drug-facts) page.`,
      },
      {
        p: `The directions don’t cover contact lens wearers, children, or use alongside other eye drops; for any of those, ask an eye doctor or pharmacist first. Quell ships to Elmira from Brentwood, Tennessee, with no account required. The [Elmira page](/eye-drops/elmira-ny) and the [New York page](/eye-drops/state/new-york) have local ordering notes.`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `Seasonal dryness is common, but some symptoms point elsewhere. {stopUse} An eye doctor can find the cause and decide what to do; don’t wait out sudden pain or a change in vision. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list, and the [self-check](/self-check) can help you put your symptoms into words before an appointment.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Elmira, NY?',
        a: 'February. NOAA’s 1991–2020 normals for the Elmira Corning Regional Airport give February 1.34 inches of precipitation, the least of any month. August is the wettest at 3.58 inches.',
      },
      {
        q: 'How cold does Elmira get in January?',
        a: 'January is the coldest month at the Elmira Corning Regional Airport, with a normal high of 33.8°F and a normal low of 16.4°F.',
      },
      {
        q: 'Why do my eyes bother me more in spring in Elmira?',
        a: 'May days often start in the mid-40s and end near 70°F, so heaters and air conditioners both run, and you spend more time outdoors in breezy weather. Moving, conditioned air dries the tear film faster.',
      },
      {
        q: 'Is the Elmira airport weather the same as downtown Elmira?',
        a: 'Close, but not identical. The official NOAA record comes from the Elmira Corning Regional Airport at about 940 feet, so individual days in the city can differ slightly, while the long-term pattern is the same.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-prescott-az:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid PRC; saved at .daily-job/acis1120/PRC.json and .daily-job/e/mint_PRC.json)
   *   (PRESCOTT LOVE FIELD, elev 5013 ft: Jan max 53.3 F, min 26.2 F; Dec max 52.2,
   *   min 25.5; Jun max 87.8, min 55.7; Jul max 90.3, min 62.7; precip Apr 0.47 in,
   *   May 0.47, Jun 0.35 (driest), Jul 1.87, Aug 2.46 (wettest); twelve monthly
   *   precip normals sum to 12.85 in; daily range 26.7 to 32.1 degrees in every
   *   month; snowfall normal missing ("M"), not quoted)
   * - USGS NWIS site 09502960 "GRANITE CREEK AT PRESCOTT, AZ" (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Prescott row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-prescott-az',
    title: 'Dry eye relief in Prescott, Arizona',
    description:
      'Prescott sits near 5,000 feet, and April through June bring barely 1.3 inches of rain combined. NOAA figures and practical dry-eye tips for the high country.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Prescott’s dry-eye season peaks in late spring. NOAA’s normals for Prescott’s Love Field, at about 5,000 feet, give April, May and June about 1.3 inches of precipitation combined, and every month swings close to 30 degrees from dawn to afternoon. Thin, dry air and steady sun speed tear evaporation. Wear wraparound sunglasses, keep vents and fans off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Prescott’s climate record' },
      {
        p: `These figures are NOAA’s 1991–2020 climate normals for Prescott Love Field, the city’s airport and its official weather station, as published through the National Weather Service’s NOWData. NOAA lists the station at about 5,010 feet. The record reads like a high-desert town with real seasons:`,
      },
      {
        list: [
          `December and January bring mild afternoons (52.2°F and 53.3°F) and frosty mornings (25.5°F and 26.2°F).`,
          `June is the driest month, with 0.35 inches, and April and May each average 0.47 inches.`,
          `July is the warmest month, at a 90.3°F high and a 62.7°F low; June is close, at 87.8°F.`,
          `August is the wettest month at 2.46 inches, and July adds 1.87, so summer storms bring nearly a third of the year’s total.`,
          `All twelve monthly normals add up to about 12.9 inches of precipitation.`,
          `The gap between the normal high and low stays between about 27 and 32 degrees in every month.`,
        ],
      },
      {
        p: `NOAA’s record for the station has no snowfall normal, so this page doesn’t give one.`,
      },
      { h: 'Late spring: the driest stretch' },
      {
        p: `From April through June, Prescott sees little rain while the sun climbs higher and afternoons warm from the upper 60s toward the upper 80s. That combination is hard on the tear film. The air pulls moisture from the eye’s surface between blinks, and breezy afternoons move dry air across it even faster. Gardeners, hikers and anyone working outdoors notice it most, often as a gritty or tired feeling by midafternoon.`,
      },
      {
        list: [
          `Wear sunglasses that wrap around the sides; they cut wind and glare together.`,
          `A brimmed hat shades the eyes and slows the air moving across them.`,
          `Plan long outdoor jobs for the cooler morning hours.`,
          `After yard work or a dusty trail, wash your hands and face before touching your eyes.`,
        ],
      },
      {
        p: `[Dry eyes when gardening](/guides/dry-eyes-when-gardening) has more ideas for yard work in dry weather.`,
      },
      { h: 'Summer storms and swamp coolers' },
      {
        p: `The summer rains arrive in July, and July and August together average about 4.3 inches. The storm days are a short break for the eyes, but gusty winds ahead of a storm can kick up dust, so a pair of sunglasses in the car is worth having. Indoors, whether your home cools with an evaporative cooler or with air conditioning, the system moves a lot of air, and sitting in its direct path dries the eyes. Angle the outlet away from the couch and the bed.`,
      },
      { h: 'Winter: sunny days, freezing nights, heat on' },
      {
        p: `Winter afternoons in Prescott are often pleasant, but normal lows sit in the mid-20s from December through February. Furnaces, wall heaters and fireplaces run every evening and into the night, and nights are when your eyes are closed and can’t blink fresh tears across their surface. Heated, dry bedroom air can leave eyes feeling sticky or scratchy on waking.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom during the heating months, and clean it as the manual directs.`,
          `Don’t sit facing a fireplace or space heater for a whole evening; turn your chair to the side.`,
          `[Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains why close, direct heat is the hardest on eyes.`,
        ],
      },
      { h: 'Trails, lakes and long days outdoors' },
      {
        p: `Prescott is an outdoor town. Granite Creek runs through the city, and the U.S. Geological Survey gauges it both in town and below Watson Lake, one of the lakes close by. At 5,000 feet, sunlight is strong and air is thin and dry, and a long hike or a day on a paddleboard means hours of breeze and glare. Take sunglasses, take short breaks with your eyes closed in the shade, and keep a bottle in your pack rather than baking in a parked car at the trailhead.`,
      },
      { h: 'Using Quell in dry mountain air' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label gives its uses as: {uses}. Directions: {directions}. Before you start, check the warnings: {warnings}. The storage line matters here too: {storage}. A car parked in a June or July sun can far exceed that, so carry the bottle with you. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) goes into that further.`,
      },
      {
        p: `The directions don’t address contact lenses, children or other eye drops, so check with your eye doctor or pharmacist if any of those apply. Quell ships from Brentwood, Tennessee, to Prescott and nearby towns; the [Prescott page](/eye-drops/prescott-az) and the [Arizona page](/eye-drops/state/arizona) have local details. The full label is on the [Drug Facts](/drug-facts) page.`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `Dry air causes plenty of discomfort, but some symptoms need professional attention. {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Prescott, Arizona?',
        a: 'June. NOAA’s 1991–2020 normals for Prescott Love Field give June just 0.35 inches of precipitation, and April and May each average 0.47 inches.',
      },
      {
        q: 'When does Prescott get most of its rain?',
        a: 'In midsummer. August is the wettest month at 2.46 inches and July averages 1.87, so those two months bring about a third of the year’s roughly 12.9 inches.',
      },
      {
        q: 'How cold does it get at night in Prescott in winter?',
        a: 'Normal lows at Prescott Love Field are about 25.5°F in December and 26.2°F in January, even though afternoons usually reach the low 50s.',
      },
      {
        q: 'Why are my eyes so dry in Prescott in the spring?',
        a: 'April through June are the driest months, the sun is strong at about 5,000 feet, and breezy afternoons move dry air across the eye. Together those speed evaporation from the tear film.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-sheboygan-wi:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid SBM; saved at .daily-job/acis1120/SBM.json and .daily-job/e/mint_SBM.json)
   *   (SHEBOYGAN COUNTY MEMORIAL AP, elev 751 ft: Jan max 26.9 F, min 11.8 F; Feb
   *   max 30.0, min 14.2; Dec max 32.5, min 18.4; Jul max 80.2, min 58.3; precip
   *   Feb 0.96 in (driest), Jan 1.10, Mar 1.65, Apr 3.30, Jun 3.77 (wettest);
   *   twelve monthly precip normals sum to 29.41 in; snowfall missing ("M"))
   * - sheboyganwi.gov (City of Sheboygan) pages on its Lake Michigan shoreline
   *   water-safety group and South Pier District at the Sheboygan River mouth
   * - USGS NWIS site 04086000 "SHEBOYGAN RIVER AT SHEBOYGAN, WI" (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Sheboygan row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-sheboygan-wi',
    title: 'Dry eye relief in Sheboygan, Wisconsin',
    description:
      'Sheboygan’s January lows average 11.8°F, and February is its driest month. NOAA numbers for the lakeshore and everyday ways to ease dry, tired eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Sheboygan, dry eyes track the heating season. NOAA’s normals for the Sheboygan County Memorial Airport put January lows at 11.8°F and February precipitation under an inch, so furnaces run for months and indoor air turns very dry, while wind off Lake Michigan stings on the way to the car. Humidify the bedroom, block the wind with wraparound glasses, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The official record for Sheboygan' },
      {
        p: `The climate numbers on this page are NOAA’s 1991–2020 normals for Sheboygan County Memorial Airport, as published through the National Weather Service’s NOWData. The airport is the county’s official station, at about 750 feet. An airport reading won’t always match the lakefront on a given day, but the long-term pattern holds. Here’s what thirty years of records show:`,
      },
      {
        list: [
          `January is the coldest month: a normal high of 26.9°F and a normal low of 11.8°F.`,
          `February averages a 30.0°F high and a 14.2°F low, and with 0.96 inches it’s the driest month.`,
          `December brings a 32.5°F high and an 18.4°F low.`,
          `Precipitation doubles between March (1.65 inches) and April (3.30 inches).`,
          `June is the wettest month at 3.77 inches.`,
          `July, the warmest month, averages 80.2°F and 58.3°F.`,
          `The twelve monthly normals total about 29.4 inches of precipitation a year.`,
        ],
      },
      {
        p: `NOAA doesn’t list a snowfall normal for this station, so there’s no snow figure here. The daily range is narrow by national standards, about 14 to 22 degrees depending on the month.`,
      },
      { h: 'Deep winter and the driest indoor air of the year' },
      {
        p: `When the outdoor low is near 12°F, the air outside holds almost no water vapor. Heated to 70°F inside, that air’s relative humidity drops to levels that are hard on the tear film, which loses water every second your eyes are open. That’s why January and February, the coldest and driest stretch on the record, are when many people in Sheboygan reach for eye drops, wake with scratchy eyes, or find their eyes tiring halfway through a workday.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and keep it clean; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers the details.`,
          `Turn the thermostat down a few degrees at night.`,
          `Keep floor registers and space heaters pointed away from the bed, the couch and your desk chair.`,
          `Use the car’s defrost on the glass and keep the face vents closed on the commute.`,
        ],
      },
      { h: 'Wind off Lake Michigan' },
      {
        p: `The city sits on the Lake Michigan shoreline, where the Sheboygan River meets the lake. Wind crossing miles of open water meets nothing to slow it before it reaches the beach, the pier and the streets near the harbor. On a cold day, that wind is the reason a short walk along the lakefront leaves your eyes watering, and then dry and stinging once you’re back inside. Watering in wind isn’t a sign your eyes are well lubricated; it’s a reflex, and those tears drain away or dry quickly.`,
      },
      {
        list: [
          `Wraparound sunglasses or clear safety glasses block wind from the sides.`,
          `A hat with a brim and a scarf pulled up high cut the airflow across your face.`,
          `Turn your back to the wind when you stop to talk or wait.`,
        ],
      },
      {
        p: `[How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ways to cover up.`,
      },
      { h: 'Summer on the shore' },
      {
        p: `Summer is short and mild, with July highs near 80°F. It’s also when people spend whole days outside: on the beach, on a fishing boat, on the water with a board, or at outdoor festivals. Sun reflecting off the lake and steady breeze add up over hours. Sunglasses, shade breaks and a few slow, complete blinks every so often help, and a bottle kept in a beach bag out of direct sun stays closer to its labeled storage range.`,
      },
      { h: 'Plant floors, offices and screens' },
      {
        p: `Plenty of jobs keep people indoors under big heating and ventilation systems, whether on a manufacturing floor, in a warehouse, in a hospital or in an office. Moving air from overhead units and the reduced blinking that comes with close work or screens both dry the eyes. Ask whether a vent above your station can be redirected, take short look-away breaks, and follow your workplace’s rules on eye protection. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why screens cut your blink rate.`,
      },
      { h: 'Using a lubricating drop' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its uses, from the label: {uses}. Directions: {directions}. The warnings start with: {warnings}. Storage: {storage}. In a Sheboygan January a car is far colder than that range, so keep the bottle in a coat pocket or bag. [Can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) has more.`,
      },
      {
        p: `If you wear contact lenses, are buying for a child, or use other eye drops, the label doesn’t cover your situation; ask an eye doctor or pharmacist. Quell ships to Sheboygan from Brentwood, Tennessee. Details are on the [Sheboygan page](/eye-drops/sheboygan-wi) and the [Wisconsin page](/eye-drops/state/wisconsin).`,
      },
      { h: 'When it’s more than winter air' },
      {
        p: `{stopUse} Pain, sudden blurry vision or sensitivity to light are reasons to call an eye doctor rather than reach for another drop. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Sheboygan get in January?',
        a: 'January is the coldest month at Sheboygan County Memorial Airport, with a normal high of 26.9°F and a normal low of 11.8°F, based on NOAA’s 1991–2020 normals.',
      },
      {
        q: 'What is the driest month in Sheboygan, Wisconsin?',
        a: 'February, at 0.96 inches of precipitation on NOAA’s 1991–2020 normals for the county airport. June is the wettest month at 3.77 inches.',
      },
      {
        q: 'Why do my eyes water and then feel dry after walking by the lake?',
        a: 'Cold wind triggers reflex tearing, and those tears drain or evaporate quickly. Once you’re back in heated indoor air, the eyes can feel drier than before. Wraparound glasses help on the walk.',
      },
      {
        q: 'Can I order Quell to Sheboygan, Wisconsin?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to addresses anywhere in the United States, including Sheboygan. Checkout works as a guest, and the buyer must be 18 or older.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-alexandria-la:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid AEX; saved at .daily-job/acis1120/AEX.json and .daily-job/e/mint_AEX.json)
   *   (ALEXANDRIA INTL AP, elev 82 ft: Jan max 59.6 F, min 38.9 F; Dec min 40.6;
   *   May max 85.4; Jun max 90.5; Jul max 92.6, min 73.0; Aug max 93.5 (warmest),
   *   min 71.9; Sep max 89.0; precip Jan 5.47 in (wettest), Dec 5.28, Jun 5.14,
   *   Aug 3.32 (driest), Sep 3.39; twelve monthly precip normals sum to 54.55 in;
   *   snowfall missing ("M"), not quoted)
   * - USGS NWIS sites 07355500 "Red River at Alexandria, LA" and 07355490 "BAYOU
   *   RAPIDES AT CONTROL ST AT ALEXANDRIA, LA." (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Alexandria row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-alexandria-la',
    title: 'Dry eye relief in Alexandria, Louisiana',
    description:
      'Alexandria’s highs top 85°F from May through September, so air conditioning runs for months. NOAA numbers for Central Louisiana and how to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Alexandria, dry eyes usually come from air conditioning, not the outdoors. NOAA’s normals for Alexandria International Airport show highs of 85°F or more from May through September and about 54.6 inches of precipitation a year, so people spend months in cooled, dehumidified rooms and cars. Keep vents off your face, take screen breaks, use a lubricating drop as its label directs, and see an eye doctor for pain, light sensitivity or vision changes.`,
      },
      { h: 'Central Louisiana’s climate record' },
      {
        p: `The official numbers come from NOAA’s 1991–2020 climate normals for Alexandria International Airport, the station the National Weather Service uses for the area in NOWData. It sits at about 80 feet above sea level. Month by month:`,
      },
      {
        list: [
          `May’s normal high is 85.4°F, June’s is 90.5°F, July’s 92.6°F and August’s 93.5°F, the warmest of the year.`,
          `September still averages 89.0°F in the afternoon.`,
          `July nights hold at 73.0°F on average, so there’s little relief after dark.`,
          `January is the coolest month, with a 59.6°F high and a 38.9°F low.`,
          `The wettest months fall in winter: January at 5.47 inches and December at 5.28. June follows at 5.14.`,
          `August is the driest month at 3.32 inches, with September close at 3.39.`,
          `The twelve monthly normals add up to about 54.6 inches a year.`,
        ],
      },
      {
        p: `The station has no snowfall normal, so this page doesn’t quote one.`,
      },
      { h: 'Five months of air conditioning' },
      {
        p: `Summer in Alexandria means going from one cooled space to the next: house, car, office, store, gym. An air conditioner cools air and also pulls water out of it, and the blower pushes that drier air around the room. Sitting in the path of a supply vent for an eight-hour shift, or driving with the dash vents aimed at your face, steadily strips water from the tear film. Eyes that feel fine at a backyard crawfish boil can feel scratchy by the end of a day at a cold desk.`,
      },
      {
        list: [
          `Turn car vents toward your chest or the windshield, especially on long drives.`,
          `At work, ask whether a vent over your desk can be redirected or fitted with a deflector.`,
          `At home, keep ceiling fans on a low setting over the bed, or point a box fan away from your face.`,
          `Set the thermostat a few degrees warmer at night; the system cycles less and moves less air.`,
        ],
      },
      {
        p: `[Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) explains why airflow over closed lids still matters.`,
      },
      { h: 'Heat, sweat and sunscreen outdoors' },
      {
        p: `Outdoor work and play in an Alexandria August come with their own eye irritants. Sweat runs into the eyes and stings. Sunscreen on the forehead can migrate down with it. Glare off water, concrete and car windshields makes people squint and blink less. A headband or a cap with a sweatband, sunscreen kept below the brow line, and sunglasses with side coverage all help. Rinse sweat and sunscreen off your face with clean water rather than rubbing your eyes with a dirty hand.`,
      },
      { h: 'Rivers, bayous and time on the water' },
      {
        p: `Alexandria sits on the Red River, and Bayou Rapides runs through town; the U.S. Geological Survey keeps gauges on both. Fishing, boating and paddling put you in sun and moving air for hours, with glare from the water surface on top. Polarized sunglasses cut that glare, and a few long, slow blinks every so often help spread fresh tears across the eye. A bottle in a shaded tackle box or cooler pocket stays closer to its labeled storage range than one in a hot boat compartment.`,
      },
      { h: 'Mild, wet winters and indoor heat' },
      {
        p: `Winter is short, but January lows average 38.9°F, and December and January are the wettest months on the record. On damp, chilly mornings, heaters and space heaters come on, and the furnace air that dries northern homes for months dries Central Louisiana homes for weeks. If your eyes bother you in January as well as July, look for the same pattern: warm, moving air aimed at your face. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) has tips for the cold snaps.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s uses: {uses}. The directions: {directions}. Read the warnings first: {warnings}. Because summer cars get very hot, note the storage line: {storage}. Keep the bottle in a bag you bring inside rather than the glove box; [can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses, children, or use with other eye drops. Ask an eye doctor or pharmacist if any of those apply. Quell ships to Alexandria addresses from Brentwood, Tennessee; see the [Alexandria page](/eye-drops/alexandria-la), the [Louisiana page](/eye-drops/state/louisiana) and the full [Drug Facts](/drug-facts).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `{stopUse} The same goes for sudden pain, a feeling that something is stuck in the eye that won’t rinse out, or vision that stays blurry after blinking. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Alexandria, Louisiana?',
        a: 'August. NOAA’s 1991–2020 normals for Alexandria International Airport give August a normal high of 93.5°F, just above July’s 92.6°F.',
      },
      {
        q: 'What is the rainiest month in Alexandria, LA?',
        a: 'January, at 5.47 inches on NOAA’s 1991–2020 normals for the airport. December is second at 5.28 inches, and August is the driest month at 3.32 inches.',
      },
      {
        q: 'Why do my eyes feel dry at an air-conditioned desk in Alexandria?',
        a: 'Air conditioners take moisture out of the air and keep it moving. Hours under a supply vent speed evaporation from the tear film, even when it’s humid outside, so redirecting the vent and taking screen breaks help.',
      },
      {
        q: 'How do I keep sweat out of my eyes working outside in Alexandria?',
        a: 'Wear a cap or headband that catches sweat, apply sunscreen below the brow line rather than across the forehead, and rinse your face with clean water instead of wiping your eyes with your hands.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-rome-ga:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid RMG; saved at .daily-job/acis1120/RMG.json and .daily-job/e/mint_RMG.json)
   *   (ROME R B RUSSELL AP, elev 639 ft: Jan max 52.9 F, min 31.8 F; Apr max 74.4,
   *   min 48.4 (daily range 26.0, widest); Oct max 75.0, min 49.6 (range 25.4);
   *   Jul max 91.2, min 69.3; Aug max 90.5; precip Dec 5.00 in, Jan 4.99, Mar 4.99,
   *   Feb 4.81, Sep 3.42 (driest); twelve monthly precip normals sum to 50.68 in;
   *   snowfall missing ("M"), not quoted)
   * - USGS NWIS sites 02388520 "OOSTANAULA RIVER AT ROME, GA" and 02395996
   *   "ETOWAH RIVER AT COOSA VALLEY F.G., AT ROME, GA" (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Rome row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-rome-ga',
    title: 'Dry eye relief in Rome, Georgia',
    description:
      'Rome’s April and October days swing about 25 degrees from morning to afternoon. NOAA numbers for northwest Georgia and simple ways to soothe dry eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Rome, Georgia, dry eyes tend to flare in the in-between seasons and in summer air conditioning. NOAA’s normals for Rome’s R. B. Russell Airport show April and October days swinging about 25 degrees from dawn to afternoon, and July highs near 91°F. That means heat in the morning, cooling by afternoon, and lots of moving air. Keep vents off your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What NOAA’s Rome record shows' },
      {
        p: `This page uses NOAA’s 1991–2020 climate normals for Rome’s R. B. Russell Airport, the record the National Weather Service publishes through NOWData. NOAA lists the station at about 640 feet. The figures:`,
      },
      {
        list: [
          `April averages 74.4°F in the afternoon and 48.4°F at dawn, a 26-degree spread and the widest of the year.`,
          `October runs from 49.6°F to 75.0°F, nearly as wide.`,
          `July is the warmest month, at 91.2°F and 69.3°F; August follows at 90.5°F.`,
          `January averages a 52.9°F high and a 31.8°F low, so most winter nights hover near freezing.`,
          `December (5.00 inches), January and March (4.99 each) are the wettest months.`,
          `September is the driest, at 3.42 inches.`,
          `The twelve monthly normals total about 50.7 inches of precipitation a year.`,
        ],
      },
      {
        p: `NOAA’s record for this station has no snowfall normal, so none is listed here.`,
      },
      { h: 'Spring and fall: heat at breakfast, air at lunch' },
      {
        p: `A 26-degree daily swing is what makes April and October tricky. You might run the heat or a space heater at 7 a.m., then switch to the air conditioner by 3 p.m. In the car, the defroster blasts warm air on a cold windshield, and a few hours later the vents are blowing cool air at your face. Each change sends a fresh stream of conditioned air across your eyes, and conditioned air is drier than the outdoor air it replaced.`,
      },
      {
        list: [
          `Aim car vents at the windshield or your chest, never straight at your eyes.`,
          `Use a light jacket on cool mornings instead of a space heater pointed at your desk.`,
          `On mild afternoons, open a window for a while instead of switching straight to cooling.`,
        ],
      },
      { h: 'Summer heat and long cooled days' },
      {
        p: `From June through August, afternoon highs sit around 88°F to 91°F, and people spend most of the day in air conditioning. That’s comfortable, but the cooled air is drier and always moving. Long workdays under an office supply vent, a night with a fan on, or a two-hour drive with the dash vents on high can all leave eyes gritty and tired. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) has bedroom fixes, and [screens and your tear film](/guides/screens-and-your-tear-film) covers what screen work does to blinking.`,
      },
      { h: 'Where the rivers meet' },
      {
        p: `Rome is a river town: the Etowah and the Oostanaula both run through it, and the U.S. Geological Survey keeps gauges on each within the city. Fishing, kayaking and walks near the water are everyday outdoor time for a lot of residents. On the water, glare and breeze work together to dry the eyes. Polarized sunglasses with side coverage, a brimmed hat, and a habit of closing your eyes for a few seconds now and then all help. [Dry eyes when kayaking](/guides/dry-eyes-when-kayaking) has more on paddling.`,
      },
      { h: 'Winter: wet and near freezing' },
      {
        p: `Rome’s winter is its wettest season, with December, January and March each averaging about 5 inches. Rain doesn’t keep indoor air moist, though. With January lows near 32°F, furnaces and heat pumps run on most nights, and warmed winter air holds a low share of the moisture it could. If you wake up with scratchy eyes in January, a bedroom humidifier and a register pointed away from the bed are the first things to try. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) walks through it.`,
      },
      { h: 'Using Quell in Rome' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its label, its uses are: {uses}. The directions say: {directions}. Read the warnings before using it: {warnings}. And keep this one in mind: {tip}.`,
      },
      {
        list: [
          `Storage, per the label: {storage}. Summer cars in Rome get far hotter, so don’t leave the bottle in the glove box.`,
          `The label doesn’t cover contact lenses, children or use with other drops; ask your eye doctor or pharmacist.`,
          `Quell ships from Brentwood, Tennessee, to Rome addresses and the towns around it. See the [Rome page](/eye-drops/rome-ga) and the [Georgia page](/eye-drops/state/georgia).`,
          `The complete label is on the [Drug Facts](/drug-facts) page.`,
        ],
      },
      { h: 'Symptoms that mean see a doctor' },
      {
        p: `{stopUse} Pain, light sensitivity, or blurred vision that doesn’t clear after blinking also call for an eye doctor. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs, and the [self-check](/self-check) can help you organize what you’ve noticed.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Rome, Georgia?',
        a: 'September, at 3.42 inches of precipitation on NOAA’s 1991–2020 normals for Rome’s R. B. Russell Airport. December, January and March are the wettest, at about 5 inches each.',
      },
      {
        q: 'How hot does Rome, GA get in the summer?',
        a: 'July is the warmest month at the airport, with a normal high of 91.2°F and a low of 69.3°F. August is close behind at 90.5°F.',
      },
      {
        q: 'Why do my eyes feel dry in Rome in April and October?',
        a: 'Those months swing about 25 degrees between dawn and afternoon, so heaters run in the morning and air conditioning in the afternoon. Both blow dry, conditioned air across the eyes.',
      },
      {
        q: 'What rivers run through Rome, Georgia?',
        a: 'The Etowah and the Oostanaula both run through Rome, and the U.S. Geological Survey keeps gauges on each in the city. Glare and breeze on the water can dry the eyes, so sunglasses help.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-lima-oh:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid AOH; saved at .daily-job/acis1120/AOH.json and .daily-job/e/mint_AOH.json)
   *   (LIMA ALLEN COUNTY AP, elev 961 ft: Jan max 34.1 F, min 20.1 F; Feb max 37.5,
   *   min 22.2; Dec max 38.6, min 25.6 (daily range 13.0, narrowest); Sep max 76.2,
   *   min 53.9 (range 22.3, widest); Jul max 83.6, min 63.2; precip Feb 1.85 in
   *   (driest), Jun 3.95 (wettest), May 3.81, Oct 2.69; twelve monthly precip
   *   normals sum to 35.77 in; snowfall missing ("M"), not quoted)
   * - USGS NWIS site 04187000 "Ottawa River at Lima OH" (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Lima row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-lima-oh',
    title: 'Dry eye relief in Lima, Ohio',
    description:
      'Lima’s January highs average 34.1°F and February is the driest month. NOAA numbers for Allen County and practical ways to keep dry eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `For most people in Lima, dry eyes are a winter-indoors problem with a fall-outdoors twist. NOAA’s normals for the Lima Allen County Airport show January highs of 34.1°F and February as the driest month, so heat runs for months, while September and October harvest work fills the air with dust. Humidify at home, keep vents off your face, guard your eyes in the fields, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Lima’s weather, from NOAA' },
      {
        p: `The figures come from NOAA’s 1991–2020 climate normals for the Lima Allen County Airport, the record behind the National Weather Service’s NOWData for the area. The station sits at about 960 feet. Thirty years of normals look like this:`,
      },
      {
        list: [
          `January: normal high 34.1°F, normal low 20.1°F.`,
          `February: 37.5°F and 22.2°F, and the least precipitation of the year at 1.85 inches.`,
          `December: 38.6°F and 25.6°F, the smallest gap between high and low of any month.`,
          `June is the wettest month, at 3.95 inches, with May close at 3.81.`,
          `July, the warmest month, averages 83.6°F and 63.2°F.`,
          `September has the widest daily range, from 53.9°F at dawn to 76.2°F in the afternoon.`,
          `Across all twelve months, precipitation totals about 35.8 inches.`,
        ],
      },
      {
        p: `There’s no snowfall normal in the station’s record, so the page doesn’t cite a snow total.`,
      },
      { h: 'The long heating season' },
      {
        p: `From November through March, Lima’s normal lows stay near or below freezing, and the furnace does most of the work of keeping a home livable. Heating cold air doesn’t add moisture to it, so indoor humidity slides as the season goes on. Eyes respond with a gritty, tired or burning feeling, often worst first thing in the morning or late in the evening after hours of TV or a phone.`,
      },
      {
        list: [
          `A humidifier in the bedroom, cleaned regularly, helps the most.`,
          `Close or angle the register nearest the bed and the couch.`,
          `Keep a space heater pointed at your legs, not your face.`,
          `When reading or scrolling, put the device down every so often and blink slowly a few times.`,
        ],
      },
      {
        p: `[Dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) covers furnace settings and vents in more detail.`,
      },
      { h: 'Open fields, harvest and wind' },
      {
        p: `Open cropland lets wind cross for miles with little to slow it, especially after harvest when the fields are bare. September and October are when combines run and grain moves, and dust and chaff hang in the air around fields, bins and elevators. If you farm, haul grain or just drive the county roads at harvest, eye protection matters as much as comfort.`,
      },
      {
        list: [
          `Wear safety glasses or goggles when working around grain, chaff or hay, as your operation’s safety rules call for.`,
          `Keep the tractor or truck cab’s vents off your face and its windows closed in dust.`,
          `Rinse your face and hands before touching your eyes after a dusty job.`,
          `If something gets in your eye and won’t rinse out, see a doctor rather than rubbing it.`,
        ],
      },
      { h: 'Plant shifts, warehouses and offices' },
      {
        p: `Plants, warehouses and shops are usually heated and ventilated by big overhead systems. Those systems move a lot of air, and overhead heaters in winter can blow straight down onto a workstation. In offices, screens cut the blink rate while the heat runs. Ask whether a vent or heater can be redirected, take short look-away breaks, and follow your employer’s eye-protection rules. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side.`,
      },
      { h: 'Summer on the Ottawa River and beyond' },
      {
        p: `Summers in Lima are warm and fairly wet, with June the rainiest month. The Ottawa River runs through the city (the U.S. Geological Survey gauges it in Lima), and summer brings fishing, bike rides and ball games. Sun and breeze are easier on the eyes than furnace air, but hours outside still add up. Sunglasses, a cap and a bottle kept in the shade go a long way.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists these uses: {uses}. Follow the directions: {directions}. The warnings section reads: {warnings}. A storage note for cold months: {storage}. A truck or car left outside on a January night is much colder than that, so carry the bottle inside with you.`,
      },
      {
        p: `If you wear contact lenses, want to use it for a child, or use other eye drops, the label doesn’t cover that, so ask an eye doctor or pharmacist first. Quell ships to Lima from Brentwood, Tennessee. See the [Lima page](/eye-drops/lima-oh), the [Ohio page](/eye-drops/state/ohio) and the full [Drug Facts](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Dust or chaff that stays stuck after rinsing, sudden pain, or a change in vision need prompt care. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which signs can’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Lima, Ohio get in winter?',
        a: 'January is the coldest month at the Lima Allen County Airport, with a normal high of 34.1°F and a normal low of 20.1°F on NOAA’s 1991–2020 normals.',
      },
      {
        q: 'What is the driest month in Lima, Ohio?',
        a: 'February, at 1.85 inches of precipitation. June is the wettest month at 3.95 inches, according to NOAA’s normals for the county airport.',
      },
      {
        q: 'How do I protect my eyes from dust during harvest?',
        a: 'Wear safety glasses or goggles around grain, chaff and hay, keep cab vents off your face, and rinse your face and hands before touching your eyes. Anything that won’t rinse out is a reason to see a doctor.',
      },
      {
        q: 'Can I get Quell shipped to Lima, OH?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Lima and other U.S. addresses, with guest checkout and no subscription. Buyers must be 18 or older.',
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-carlsbad-nm:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid CNM; saved at .daily-job/acis1120/CNM.json and .daily-job/e/mint_CNM.json)
   *   (CAVERN CITY AIRPORT, elev 3250 ft: Jan max 58.3 F, min 29.5 F; Dec max 57.3,
   *   min 29.6; Jun max 96.2 (warmest), min 65.9; Jul max 95.4, min 69.3; Aug max
   *   94.0; precip Jan 0.37 in (driest), Feb 0.42, Mar 0.54, Apr 0.45, Sep 2.58
   *   (wettest), Jul 1.76, Aug 1.65; twelve monthly precip normals sum to 12.05 in;
   *   daily range 25.8 to 32.1 degrees; snowfall missing ("M"), not quoted)
   * - USGS NWIS site 08405200 "PECOS RIVER BELOW DARK CANYON AT CARLSBAD, NM"
   *   (checked 2026-11-20)
   * - relhum23.txt / wndspd23.txt have no Carlsbad row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-carlsbad-nm',
    title: 'Dry eye relief in Carlsbad, New Mexico',
    description:
      'Carlsbad gets about 12 inches of precipitation a year, and June highs average 96°F. NOAA numbers for Carlsbad and how to ease dry, gritty eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Carlsbad is desert country, and dry eyes are common there year-round. NOAA’s normals for Cavern City Airport add up to about 12 inches of precipitation a year, with January through April each under 0.6 inches, and June highs average 96°F. Dry air, sun and dust all speed tear evaporation. Wear wraparound sunglasses, keep cooler and vent air off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Carlsbad’s climate record' },
      {
        p: `Carlsbad’s official numbers are NOAA’s 1991–2020 climate normals for Cavern City Airport, as the National Weather Service publishes them in NOWData. NOAA lists the airport at about 3,250 feet. The record:`,
      },
      {
        list: [
          `June is the hottest month, with a normal high of 96.2°F; July (95.4°F) and August (94.0°F) aren’t far behind.`,
          `July nights average 69.3°F, the warmest lows of the year.`,
          `December and January highs are in the upper 50s, with lows near 29.5°F.`,
          `January is the driest month at 0.37 inches, and February through April each average between 0.42 and 0.54 inches.`,
          `September is the wettest month at 2.58 inches, after July (1.76) and August (1.65).`,
          `The twelve monthly normals total about 12.1 inches a year.`,
          `Every month swings roughly 26 to 32 degrees between the normal high and low.`,
        ],
      },
      {
        p: `The station’s record has no snowfall normal, so none appears here.`,
      },
      { h: 'Why the desert is hard on the tear film' },
      {
        p: `The tear film is a thin coating of oil, water and mucus. Its oily outer layer slows evaporation, but in very dry air water still leaves the eye’s surface quickly between blinks. Add strong sun that makes people squint, wind carrying dust and grit, and buildings cooled for most of the year, and the eye surface gets little rest. In Carlsbad, the driest months (January through April) come before the hottest ones, so there’s no long stretch of easy air.`,
      },
      { h: 'Late winter and spring: the driest air' },
      {
        p: `From January through April, Carlsbad averages about 1.8 inches of precipitation in total. Days warm quickly from the 50s into the 70s and then near 80°F by April, and breezy spring afternoons can lift dust. This is often when people notice eyes that feel sandy or tired by evening, or that water in the wind and then sting indoors.`,
      },
      {
        list: [
          `Wear wraparound sunglasses whenever it’s breezy, even on cool days.`,
          `Keep car windows up on dusty roads and the vents set to the windshield.`,
          `Run a humidifier at night while the heat is still on in the mornings.`,
          `Wash dust from your face and hands before you touch your eyes.`,
        ],
      },
      { h: 'Summer: triple digits indoors and out' },
      {
        p: `By June, afternoons run in the mid-90s, and the hottest days go well past that. Whether a building cools with an evaporative cooler or refrigerated air, the system keeps air moving across your face for hours. A refrigerated system also removes moisture as it cools. At night, a ceiling fan over the bed adds airflow over closed eyelids for hours. Angle vents and fans away from where you sit and sleep; [dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) explains why it matters.`,
      },
      { h: 'Working outdoors in the heat' },
      {
        p: `If your work is outdoors, whether construction, ranching or a road or field crew, long hours in sun, heat and wind dry the eyes, and sweat and sunscreen can run into them. Safety glasses with side shields, a hard-hat brim or cap, and a few closed-eye breaks in the shade make a difference. Follow your employer’s eye-protection rules, and keep a bottle in a lunch cooler or bag in the shade rather than a truck dash, where it can bake.`,
      },
      { h: 'Along the Pecos' },
      {
        p: `The Pecos River runs through Carlsbad, and the U.S. Geological Survey gauges it in town. Walking, fishing or boating along the river is a break from the dust, but glare off the water and the steady breeze still dry the eyes. Polarized sunglasses help with glare, and a hat brim keeps both sun and wind off your face.`,
      },
      { h: 'Using a lubricating drop in Carlsbad' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its uses, as the label states them: {uses}. Directions: {directions}. Warnings: {warnings}. The storage line is especially relevant in a Carlsbad summer: {storage}. A closed car in June can run far hotter than that. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) has more.`,
      },
      {
        p: `For contact lenses, children or use with other eye drops, the label gives no directions; ask an eye doctor or pharmacist. Quell ships to Carlsbad from Brentwood, Tennessee. The [Carlsbad page](/eye-drops/carlsbad-nm), the [New Mexico page](/eye-drops/state/new-mexico) and the [Drug Facts](/drug-facts) page have more.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `{stopUse} Grit that won’t rinse out, sudden pain, or blurry vision that doesn’t clear also call for an eye doctor. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Carlsbad, New Mexico get a year?',
        a: 'About 12.1 inches, adding up NOAA’s twelve monthly normals for Cavern City Airport. September is the wettest month at 2.58 inches and January the driest at 0.37.',
      },
      {
        q: 'What is the hottest month in Carlsbad, NM?',
        a: 'June, with a normal high of 96.2°F at Cavern City Airport. July averages 95.4°F and August 94.0°F, based on NOAA’s 1991–2020 normals.',
      },
      {
        q: 'Why are my eyes so dry in Carlsbad in the spring?',
        a: 'January through April are the driest months on the airport’s record, and warming, breezy days can carry dust. Dry, moving air speeds tear evaporation, so sunglasses and a humidifier at night help.',
      },
      {
        q: 'What is the elevation of Carlsbad, New Mexico?',
        a: 'NOAA lists Cavern City Airport, Carlsbad’s official weather station, at about 3,250 feet above sea level.',
      },
    ],
  },

  {
    slug: 'dry-eyes-in-archery',
    title: 'Dry eyes in archery',
    description:
      'Holding at full draw is a long stare without blinking. Why archers get dry, tired eyes, and how to work blinks, breaks and drops into a round.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Archery dries the eyes because aiming is a long, fixed stare: from anchor to release you hold your focus on the target and blink very little, then repeat it dozens of times a round. Wind, sun, and indoor range ventilation add evaporation. Blink fully between shots, rest your eyes on the walk to the target, shield them outdoors, use a lubricating drop between ends rather than mid-shot, and see an eye doctor if pain or blurred vision persists.`,
      },
      { h: 'Why aiming dries your eyes' },
      {
        p: `Each blink spreads a fresh layer of tears across the eye. The tear film has an oily outer layer that slows evaporation, but between blinks it thins steadily. When you concentrate on a small target, your blink rate drops, the same way it does when you read or work at a screen. At full draw, most archers hold still for several seconds while they settle the pin or sight picture. That hold is when you’re least likely to blink, and a round of 30, 60 or more arrows means a lot of holds.`,
      },
      {
        p: `The result usually shows up late in a session rather than at the start: eyes that feel gritty, tired or hot, or a sight picture that seems a little less crisp until you blink a few times. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why full blinks matter more than quick ones.`,
      },
      { h: 'Archery with both eyes open, or one closed' },
      {
        p: `Many archers ask whether shooting with both eyes open or closing one makes a difference to dryness. That’s a technique choice for you and your coach, and it depends on eye dominance and your style of shooting. From the tear film’s point of view, the open eye that does the aiming behaves the same either way: it holds still and blinks less. Squeezing the other eye shut can also tense the face. Whichever method you use, the habits below apply to the aiming eye.`,
      },
      { h: 'A blink routine between shots' },
      {
        list: [
          `After each release, close your eyes gently for a second or two before nocking the next arrow.`,
          `Blink fully, so the upper lid meets the lower one, three or four times while you set up.`,
          `On the walk to pull arrows, look at distant things rather than at the ground or your phone.`,
          `Between ends, sit down and close your eyes for half a minute.`,
          `If your eyes start to water during the hold, let down and reset rather than forcing the shot.`,
        ],
      },
      { h: 'Outdoor ranges, field courses and 3D shoots' },
      {
        p: `Outdoors, wind is the main drying force. A steady crosswind blows straight across the open eye during every hold, and a dusty range adds grit. Bright sun makes people squint, which can make aiming harder and tire the muscles around the eyes. Field and 3D courses through woods are gentler on wind but can mix bright clearings and dark shade, which keeps the eyes adjusting.`,
      },
      {
        list: [
          `A cap with a brim cuts sun and some wind; check that it doesn’t touch the string.`,
          `Shooting glasses or sunglasses with side coverage block wind, if they work with your anchor and sight.`,
          `Stand with your back to the wind between shots.`,
          `On a dusty range, wash your hands before touching your face.`,
        ],
      },
      { h: 'Indoor ranges and winter leagues' },
      {
        p: `Indoor ranges are popular in winter, and that means heated, dry air pushed by large ventilation systems, often with fans or heaters overhead. Bright lights over the targets and a dim shooting line can make you narrow your eyes. A long league night of several rounds gives that dry air plenty of time. If a vent or heater blows on your spot on the line, ask to move to another lane. [Dry eyes at the shooting range](/guides/dry-eyes-at-the-shooting-range) covers similar indoor setups for firearms shooters.`,
      },
      { h: 'Bowhunting: long sits in cold air' },
      {
        p: `Bowhunting adds hours of waiting in a tree stand or ground blind, often in cold, moving air before sunrise. Watching a trail for movement is a lot like aiming: you stare and blink less. Close your eyes briefly every few minutes while you listen, keep your face out of the wind as much as the setup allows, and keep the bottle in an inside pocket where your body heat stops it from getting too cold. The label’s storage line: {storage}.`,
      },
      { h: 'Using eye drops at the range' },
      {
        p: `A lubricating drop fits naturally into the breaks between ends, not into the middle of a shot sequence. After a drop, vision can blur for a moment while it spreads, so give it time to clear before you shoot again. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains what to expect.`,
      },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its uses as: {uses}. The directions say: {directions}. Read the warnings first: {warnings}. One more line to remember with chalky or dusty hands at a range: {tip}. Wash your hands before using it, and keep the cap on when the bottle is in your quiver pocket. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
      {
        p: `If you wear contact lenses or use other eye drops, the label doesn’t give directions for that; ask your eye doctor or pharmacist. The same goes for young archers: the directions don’t cover children, so a parent should check with the child’s doctor.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Anything that changes how clearly you see your sight or the target, such as blur that doesn’t clear with blinking or double vision, is a reason to see an eye doctor, not to keep shooting through it. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor), or try the [self-check](/self-check) to put your symptoms in order first.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when shooting a bow?',
        a: 'Aiming means holding a fixed stare at the target for several seconds with few blinks, and a round repeats that many times. Wind outdoors and ventilation indoors speed evaporation from the tear film between blinks.',
      },
      {
        q: 'Should I shoot archery with both eyes open if my eyes get dry?',
        a: 'Eye dominance and shooting style decide that, so it’s a question for your coach. The aiming eye blinks less either way; full blinks between shots and short rests between ends help with dryness.',
      },
      {
        q: 'When should I use eye drops during an archery round?',
        a: 'Between ends, while you rest or walk back from the target. Vision can blur briefly after a drop, so let it clear before you shoot again, and follow the label’s directions for how often to use it.',
      },
      {
        q: 'Do archers need sunglasses?',
        a: 'Not always, but sunglasses or shooting glasses with side coverage cut wind and glare outdoors, which helps dry eyes. Check that the frame doesn’t interfere with your anchor point or sight picture.',
      },
    ],
  },

  {
    slug: 'dry-eyes-when-bowling',
    title: 'Dry eyes when bowling',
    description:
      'Bowling alleys pair bright lane lights with dry, moving air, and ball cleaner and rosin end up on your hands. How to keep eyes comfortable on league night.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Bowling can leave eyes dry and tired because a bowling center combines strong ventilation, bright lights over the lanes and a long session of focused aiming at the arrows or pins. Your hands also carry ball cleaner, lane oil and rosin, which sting if they reach your eyes. Blink between frames, keep your hands clean before touching your face, sit away from vents, use a lubricating drop as labeled, and see an eye doctor if pain or vision changes appear.`,
      },
      { h: 'Why bowling alleys are hard on eyes' },
      {
        p: `A bowling center is a big indoor room that has to be heated in winter and cooled in summer, and that conditioned air keeps moving, from overhead ducts and ceiling fans. Conditioned air is drier than the air outside it, and moving air speeds evaporation from the tear film. Add glare from polished lanes and bright lights, and many people narrow their eyes for hours without noticing.`,
      },
      {
        p: `League play stretches it out. Three games with a full team can take a couple of hours, and tournaments run longer. Eyes that feel fine for the first game can feel scratchy by the third.`,
      },
      { h: 'Aiming at the arrows and the pins' },
      {
        p: `Whether you aim at the arrows on the lane, the dots near the foul line or the pins themselves, the approach is a moment of fixed concentration. Concentrating cuts your blink rate, as reading and screens do. Then, after the ball leaves your hand, you watch it all the way down the lane, often without blinking until the pins fall. Repeat that for every frame and the eyes spend a lot of time open and still.`,
      },
      {
        list: [
          `While you wait on the settee, close your eyes for a few seconds instead of watching the score screen.`,
          `Take two or three slow, full blinks as you pick up your ball.`,
          `After you see where the ball hits, look away from the lane for a moment before walking back.`,
          `Between games, step away from the lanes for a minute and look at something far off.`,
        ],
      },
      { h: 'Ball cleaner, lane oil and rosin on your hands' },
      {
        p: `Bowlers handle a lot of things that shouldn’t go in eyes. Ball cleaner sprays, lane conditioner that coats the ball, rosin bags, and powder for the slide foot all end up on your fingers and towel. Rubbing a dry eye with that hand can bring sting and watering, which then feels like more dryness.`,
      },
      {
        list: [
          `Keep one towel for the ball and another, clean one for your face.`,
          `Spray ball cleaner away from your face and let the mist settle before wiping.`,
          `Wash your hands with soap and water before you put in an eye drop or touch your eyes.`,
          `If cleaner or anything else gets in your eye, rinse with clean water, and if irritation continues, get medical advice.`,
        ],
      },
      { h: 'Where to sit, and what to wear' },
      {
        p: `Look up when you get to your lane. If a supply vent or ceiling fan is pointing at the settee, sit at the other end or ask for a lane further from it. In winter, bowling centers can be warm near the entrance heaters and cool by the lanes, and either draft dries the eyes. Glasses wearers sometimes find that bowling glasses or frames that sit higher help them see the lane without looking over the top of their lenses; that’s a question for your eye doctor or optician.`,
      },
      { h: 'Using eye drops at the lanes' },
      {
        p: `A lubricating drop fits a natural break: before warm-up, between games, or while the machine resets after a lane problem. Wash and dry your hands first, put the drop in, and give your vision a moment to clear before you bowl. [How to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) helps if aiming a drop is harder than aiming a ball.`,
      },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives these uses: {uses}. The directions are: {directions}. The warnings start with: {warnings}. And the label’s reminder about handling: {tip}. That last one matters in a bowling bag full of shoes, towels and cleaner, so keep the bottle capped in a small separate pocket or a zip bag.`,
      },
      {
        p: `The label doesn’t cover contact lenses, children or use alongside other eye drops; ask an eye doctor or pharmacist. If your league includes kids, don’t share a bottle with them. The [Drug Facts](/drug-facts) page has the full label.`,
      },
      { h: 'Keeping a bottle in a bowling bag' },
      {
        p: `Bowling bags often ride in the trunk. The label’s storage line reads: {storage}. A car trunk on a summer afternoon or a January night can fall outside that range, so carry the bottle in a coat pocket or bring the bag inside. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) has more on heat.`,
      },
      { h: 'When to stop and see a doctor' },
      {
        p: `{stopUse} If something splashed into your eye and the sting doesn’t settle after rinsing, or if your vision changes, don’t wait for the next game. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at the bowling alley?',
        a: 'Bowling centers move a lot of heated or cooled air, the lights and polished lanes create glare, and aiming at the arrows cuts your blink rate. Over a league night that adds up to dry, tired eyes.',
      },
      {
        q: 'What should I do if bowling ball cleaner gets in my eye?',
        a: 'Rinse the eye with clean water right away and wash your hands. If stinging, pain or blurred vision continues after rinsing, get medical advice rather than going back to your game.',
      },
      {
        q: 'Can I use eye drops between bowling games?',
        a: 'Yes, a break between games is a good time. Wash your hands first, follow the label’s directions, and let your vision clear for a moment before you bowl again.',
      },
    ],
  },

  {
    slug: 'dry-eyes-playing-darts-or-pool',
    title: 'Dry eyes playing darts or pool',
    description:
      'A bright lamp over the table, a dim room, chalk on your hands and late league nights. How darts and pool players can keep dry eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Darts and pool both ask for a long, still stare at a small target, which cuts your blink rate, and they’re usually played at night in rooms with bright lights over the board or table and dim, dry air everywhere else. Cue chalk and dart grip wax end up on your fingers. Blink fully between shots, rest your eyes between racks or legs, keep chalk off your face, use a lubricating drop as labeled, and see an eye doctor if pain or vision changes appear.`,
      },
      { h: 'Why aiming at a board or ball dries your eyes' },
      {
        p: `Throwing a dart or lining up a shot means holding your gaze on one small point: the treble 20, the cue ball’s contact point, the pocket. Concentration lowers the blink rate, and the tear film thins between blinks. Pool adds the bend over the table, where you look up slightly toward the object ball, which opens the eyes a little wider than usual. Over a long match, those still moments add up.`,
      },
      { h: 'The light over the table and the dark room' },
      {
        p: `Pool tables sit under a low, bright lamp, and dartboards often have a ring light or spotlight, while the rest of the room is dim. Moving your eyes between bright and dark many times an hour is tiring, and glare off the cloth, the balls or a glossy board can make you squint. A squint narrows the eye and changes how evenly the lids spread tears.`,
      },
      {
        list: [
          `Between turns, look at something in the middle distance at normal room light rather than staring into the lamp.`,
          `Sit where the table light isn’t in your direct line of sight while you wait.`,
          `If glare off a board bothers you, mention it to the venue; angling a light slightly can help.`,
        ],
      },
      { h: 'Chalk, wax and what’s on your hands' },
      {
        p: `Cue chalk is a fine, colored powder that ends up on your fingers, the bridge hand and your clothes. Darts players may use grip wax or chalk on their fingers too. Touching a dry, itchy eye with that hand puts powder right where you don’t want it. Chalk the cue away from your face, keep a clean cloth for your hands, and wash with soap and water before you put in a drop or rub your eyes.`,
      },
      { h: 'League nights at a bar or pool hall' },
      {
        p: `Most league play happens in the evening, often after a full workday, and matches can run late. By then the eyes have already spent hours at a screen or in an office. Bars and pool halls are heated or air conditioned for a crowd, and ceiling fans keep air moving. If the venue allows smoking or vaping, that adds irritants to the air too.`,
      },
      {
        list: [
          `Choose a seat away from vents, fans and the door when you’re waiting your turn.`,
          `Use the walk to retrieve your darts, or the time while an opponent shoots, to close your eyes for a few seconds.`,
          `Take a short break outside the noise and light between legs or games when the match allows.`,
          `If you play several nights a week, give your eyes an easier day with fewer late screens on the off nights.`,
        ],
      },
      { h: 'Tournaments and long practice sessions' },
      {
        p: `Weekend tournaments and long practice sessions stretch the same habits over many hours. Practice is often solo, with no opponent’s turn to force a pause, so it’s easy to throw or shoot for an hour without a real blink break. Set a simple rule, like closing your eyes for a slow count of five after every set of darts or every rack. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why a complete blink helps more than a quick one.`,
      },
      { h: 'Using a lubricating drop between games' },
      {
        p: `Put a drop in between legs, racks or matches, not right before an important shot, since vision can blur briefly while a drop spreads. Wash the chalk off first.`,
      },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its uses: {uses}. It gives these directions: {directions}. Its warnings say: {warnings}. And because cue cases and dart cases fill up with chalk and tips, keep this line in mind: {tip}. Carry the bottle in its own pocket. If it ever looks different from usual, check the label’s caution: {doNotUse}. The [Drug Facts](/drug-facts) page has everything else.`,
      },
      {
        p: `The label doesn’t give directions for contact lenses, children or use with other eye drops. If any of those apply, ask your eye doctor or pharmacist.`,
      },
      { h: 'Glasses, contacts and seeing the board' },
      {
        p: `Some players notice that the board or the far pocket looks less sharp late in a match. Dryness can make vision seem a little hazy until you blink, but blur that doesn’t clear, or trouble seeing at the distance of a dartboard, is a question for an eye exam, not a drop. An eye doctor can check whether your glasses or contacts suit how you play. [Eye drops vs. reading glasses](/guides/eye-drops-vs-reading-glasses) explains why drops don’t change focus.`,
      },
      { h: 'When to stop and see a doctor' },
      {
        p: `{stopUse} Chalk or anything else stuck in the eye that rinsing doesn’t remove also needs medical attention. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired playing pool?',
        a: 'Lining up shots holds your gaze on small points with few blinks, the lamp over the table creates bright and dark contrast, and league nights run late in heated or cooled rooms. Those all dry and tire the eyes.',
      },
      {
        q: 'Can cue chalk get in your eyes?',
        a: 'Yes. Chalk dust collects on your fingers and can reach your eyes when you rub them. Chalk the cue away from your face and wash your hands before touching your eyes.',
      },
      {
        q: 'Why does the dartboard look blurry late in a match?',
        a: 'Dry eyes can make vision seem slightly hazy until you blink, especially after long, focused throwing. If blinking doesn’t clear it, or it happens often, see an eye doctor.',
      },
    ],
  },

  {
    slug: 'dry-eyes-at-esports-tournaments',
    title: 'Dry eyes at esports tournaments',
    description:
      'Stage lights, cold venues, long match days and travel. How esports players, coaches and casters can keep dry eyes comfortable at a tournament.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Esports tournaments dry the eyes because they stack long, focused screen sessions on top of stage lighting, air-conditioned venues, late hotel nights and travel. Focus on a fast game drops the blink rate, and the venue air speeds evaporation. Build blink breaks into pauses between maps or rounds, keep fans and vents off your face, pack a lubricating drop and use it as labeled, and see an eye doctor if pain or vision changes appear.`,
      },
      { h: 'Esports eye strain: why tournaments are different' },
      {
        p: `At home you control the setup: the chair, the lamp, the window, when you stop. At an event, you play on someone else’s desk under someone else’s lights, often for many hours across a day, with a crowd, cameras and the pressure of elimination. Players tend to blink even less when the stakes are high, and the breaks are on the tournament’s schedule rather than yours. [Eye drops for gamers](/guides/eye-drops-for-gamers) covers the everyday home setup; this page is about event days.`,
      },
      { h: 'Stage lights, cameras and big screens' },
      {
        p: `Stages are lit for broadcast, so there’s often strong light from the front and sides, sometimes with colored washes and moving effects. Your monitor competes with it. Glare on the screen or bright light in your peripheral vision makes people squint, and squinting tires the eyes and changes how evenly the lids spread tears. In the practice room or a side stage, the lighting can be the opposite: dim, with screens as the main light source.`,
      },
      {
        list: [
          `During setup, adjust monitor brightness and angle to cut reflections from stage lights.`,
          `If a light is shining straight at your eyes, raise it with the tournament admins before play starts.`,
          `Between maps, close your eyes for a few seconds rather than looking into the crowd lights.`,
        ],
      },
      { h: 'Venue air: cold, dry and moving' },
      {
        p: `Arenas, convention centers and studios run powerful air conditioning to handle a room full of people and machines. That air is drier than the outdoor air and keeps moving, from overhead ducts and fans pointed at the stage to cool equipment. Hours of it on the eyes speed evaporation from the tear film. Wearing a headset doesn’t change that, and a desk fan set up to keep you cool can make it worse if it blows at your face.`,
      },
      {
        list: [
          `Point any personal fan at your chest or hands, not your eyes.`,
          `Bring a layer instead of asking for heat, which adds its own moving air.`,
          `If a vent blows straight onto your station, ask whether it can be redirected.`,
        ],
      },
      { h: 'Using pauses between maps and rounds' },
      {
        p: `Tournaments build in breaks: between maps, between games in a series, during technical pauses and while the next match is set up. Those are your eye breaks. A routine helps because it runs even when your mind is on strategy.`,
      },
      {
        list: [
          `When a map ends, close your eyes for a slow count of five, then blink fully three or four times.`,
          `Look at something far away, across the venue or out a window if there is one, for twenty seconds.`,
          `Use a longer break to put in a lubricating drop, giving it a moment to settle before play resumes.`,
          `During a technical pause, step away from the screen if the rules allow it.`,
        ],
      },
      { h: 'Scrims, bootcamps and hotel rooms' },
      {
        p: `The days before an event are often the hardest on the eyes: long scrim blocks, VOD review, then theory-crafting on phones at night. Bootcamp houses and hotel rooms add dry, heated or cooled air, and sleep tends to be short. Late screen time and short sleep leave less time with eyes closed and rested. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has tips for the room itself, and [how often should I take a break from screens?](/guides/how-often-should-i-take-a-break-from-screens) helps you plan practice blocks.`,
      },
      { h: 'Coaches, casters, admins and spectators' },
      {
        p: `It isn’t only players. Coaches and analysts watch multiple screens; casters and observers stare at feeds for hours under studio lights; tournament admins move between bright stages and dim tech areas. Spectators spend a day in a cold arena watching a giant screen. The same habits help everyone: blink fully during pauses, keep vents off your face, and step out for a few minutes between matches.`,
      },
      { h: 'Packing and using eye drops at an event' },
      {
        p: `Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its uses: {uses}. The directions read: {directions}. The warnings section begins: {warnings}. Keep the cap on and remember this line: {tip}. A peripheral bag full of cables and mice is not a clean surface. The bottle holds {size}, well under the 3.4-ounce (100 milliliter) limit TSA sets for each liquid container in a carry-on bag; [traveling with eye drops](/guides/traveling-with-eye-drops) has more.`,
      },
      {
        p: `Storage, from the label: {storage}. Don’t leave the bottle in a hot rental car or a cold van between event days. If you wear contact lenses or use other drops, the label doesn’t give directions; ask your eye doctor or pharmacist. Younger players should check with a parent and their own doctor, since the directions don’t cover children. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Blurred vision that doesn’t clear when you blink, or eye pain during play, isn’t something to push through for one more series. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry at gaming tournaments?',
        a: 'You play for hours with intense focus, which lowers your blink rate, under bright stage lights in cold, air-conditioned venues. Travel, late nights and hotel air add to it before you even sit down.',
      },
      {
        q: 'When can esports players use eye drops during a tournament?',
        a: 'During scheduled breaks between maps or games, not mid-round. Give the drop a moment to settle before play resumes, and follow the label’s directions on how often to use it.',
      },
      {
        q: 'Can I bring eye drops to an esports event?',
        a: 'Check the venue’s bag policy, which varies by event. For flights, a {size} bottle is well under TSA’s 3.4-ounce limit per container for carry-on liquids.',
      },
      {
        q: 'How can I rest my eyes between esports matches?',
        a: 'Close your eyes for a few seconds when a map ends, blink fully several times, and look at something far away for about twenty seconds before the next game. Keep any fan or vent off your face.',
      },
    ],
  },

  {
    slug: 'are-eye-drops-worth-it',
    title: 'Are eye drops worth it?',
    description:
      'Lubricating eye drops are worth trying when dryness comes from screens, dry air or wind. When they make sense, what you pay for, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Lubricating eye drops are worth it when your eyes feel dry, gritty or tired from everyday causes such as screens, heated or air-conditioned rooms, wind or long drives, and you use them as the label directs alongside small habit changes. They aren’t worth relying on for eye pain, vision changes or symptoms that keep getting worse; those need an eye doctor. Give a drop a fair, consistent try and judge it by how your eyes feel.`,
      },
      { h: 'What lubricating drops can do' },
      {
        p: `The eye’s surface is covered by the tear film: a mucus layer against the eye, a watery middle and a thin oily layer on top that slows evaporation. Blinking spreads it. When the air is dry or moving, or when you stare at a screen and blink less, water leaves the tear film faster than blinking replaces it, and the eye starts to feel scratchy or tired. A lubricating drop adds a layer to the surface. Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label describes its uses this way: {uses}.`,
      },
      {
        p: `That’s the whole job. A lubricating drop doesn’t change your prescription, sharpen focus or address whatever is behind a symptom that isn’t simple dryness. [How do lubricating eye drops work?](/guides/how-do-lubricating-eye-drops-work) goes deeper into the mechanics.`,
      },
      { h: 'When eye drops are worth trying' },
      {
        list: [
          `Your eyes feel dry or gritty after hours at a computer, phone or tablet.`,
          `Winter heat or summer air conditioning leaves your eyes uncomfortable by evening.`,
          `Wind, sun or a fan bothers your eyes on walks, bike rides or at night.`,
          `Long drives or flights leave your eyes tired.`,
          `Your eyes feel fine on some days and dry on others, in a pattern you can tie to where you were.`,
        ],
      },
      {
        p: `In each case the cause is in the air or in your blinking, and a drop works on the same problem from the other side.`,
      },
      { h: 'When they aren’t the answer' },
      {
        p: `Eye drops aren’t worth it, and can delay help, when the symptom points to something a drop can’t reach. The label is clear about when to stop: {stopUse} Sudden pain, light sensitivity, discharge, an injury, or a feeling that something is stuck under the lid all belong with an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists them.`,
      },
      { h: 'Are expensive eye drops worth it?' },
      {
        p: `Price on its own says little about whether a drop suits your eyes. What’s worth comparing is on the label and the order page:`,
      },
      {
        list: [
          `The active ingredients and what each one is for. Quell’s are {actives}.`,
          `The inactive ingredients, which include any preservative. Quell’s are {inactives}.`,
          `The directions, which tell you how many drops a day you’ll use: {directions}.`,
          `The bottle size. Quell holds {size}.`,
          `The delivered price, including shipping. Quell ships for {shipping} on smaller orders and free at {freeBottles} or more bottles.`,
          `What happens if you change your mind. Unopened Quell bottles can be refunded within {returnDays} days of delivery without sending them back.`,
        ],
      },
      {
        p: `[How to compare eye drops when shopping online](/guides/comparing-eye-drops-online) walks through each of these, and [store-brand vs. name-brand eye drops](/guides/store-brand-vs-name-brand-eye-drops) covers the generic question.`,
      },
      { h: 'How to tell whether they’re working for you' },
      {
        p: `A drop used once in a while, on a bad day, is hard to judge. A consistent trial gives you a clearer answer.`,
      },
      {
        list: [
          `Follow the label’s directions for a couple of weeks, the same way each day.`,
          `At the end of each day, rate how your eyes felt from 1 to 5 and note where you spent the most time.`,
          `Change one habit at the same time, such as moving a vent or taking screen breaks, so you can see what each contributes.`,
          `Compare the first few days with the last few. Look for fewer gritty evenings and less rubbing.`,
          `If nothing has changed, or things are worse, stop and talk to an eye doctor rather than trying drop after drop.`,
        ],
      },
      { h: 'Habits that make any drop more worth it' },
      {
        p: `Eye drops work better when you also cut down on what’s drying the eyes. Point car and desk vents away from your face. Run a humidifier during the heating months. Take short screen breaks and blink fully. Wear wraparound glasses in wind. None of these replace a drop, and a drop doesn’t replace them. Together, they deal with the air and the blink. [What makes dry eyes worse?](/guides/what-makes-dry-eyes-worse) lists more everyday culprits.`,
      },
      { h: 'Getting the most from each bottle' },
      {
        p: `Waste is part of the cost. Touching the tip to an eyelash or a counter, leaving the bottle in a hot car, and squeezing two drops when one would do all use up a bottle faster. The label’s handling line is: {tip}. Its storage line is: {storage}. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) helps you plan how many to buy. The label doesn’t give directions for contact lenses, children or use with other eye drops; ask an eye doctor or pharmacist about those. When you’re ready, Quell is on the [home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops a waste of money?',
        a: 'Not when dryness comes from screens, dry air or wind and you use them as directed. They are a waste if they stand in for a doctor’s visit when you have pain, vision changes or symptoms that keep getting worse.',
      },
      {
        q: 'Are expensive eye drops better than cheap ones?',
        a: 'Not because of price alone. Compare the active and inactive ingredients, the directions, the bottle size and the delivered price, and choose what fits your eyes and how you’ll use it.',
      },
      {
        q: 'How do I know if eye drops are worth it for me?',
        a: 'Use them as the label directs for a couple of weeks, rate your eyes each evening, and compare the first days with the last. If nothing improves, stop and see an eye doctor.',
      },
      {
        q: 'Are eye drops beneficial for everyday dryness?',
        a: 'For dryness from everyday causes, a lubricating drop adds to the tear film on the eye’s surface. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.',
      },
    ],
  },

  {
    slug: 'eye-drops-vs-reading-glasses',
    title: 'Eye drops vs. reading glasses',
    description:
      'Lubricating eye drops soothe a dry eye surface; reading glasses help you focus up close. How to tell which problem you have, and when it’s time for an eye exam.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Lubricating eye drops and reading glasses solve different problems. Drops add moisture to the surface of the eye, which helps when your eyes feel dry, gritty or tired. Reading glasses magnify, which helps when small print looks blurry up close. If blur clears after a few blinks, dryness is a likely part of it; if close-up text stays blurry, that’s a focusing question for an eye exam.`,
      },
      { h: 'What each one does' },
      {
        p: `A lubricating drop works on the front of the eye, the tear film that coats it. The tear film needs to be smooth and even for light to pass through cleanly, and when it thins between blinks, vision can look a little hazy. A drop adds to that layer. Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label lists its uses as: {uses}.`,
      },
      {
        p: `Reading glasses work on focus. They’re lenses that bend light so near objects come into focus more easily. They don’t touch the eye’s surface or change how moist it is. One can’t substitute for the other, though many people end up using both.`,
      },
      { h: 'How to tell which problem you have' },
      {
        list: [
          `Blur that comes and goes, and clears after you blink a few times, points toward the tear film.`,
          `Blur that’s there every time you look at small print, and doesn’t change with blinking, points toward focus.`,
          `Eyes that feel gritty, scratchy or burning are describing the surface, not focus.`,
          `Holding a menu or phone farther away to read it is a focusing sign.`,
          `Text that’s sharp in the morning but hazy after an afternoon of reading can be either, or both.`,
        ],
      },
      {
        p: `These are clues, not a test. Only an eye exam can sort out focus, and an eye doctor can find the cause of dryness and decide what to do.`,
      },
      { h: 'Why reading dries your eyes' },
      {
        p: `Close work lowers the blink rate. When you read a book, a phone or a spreadsheet, you blink less, and many blinks are partial, so the lower part of the eye stays uncovered. The tear film thins, and the page starts to look a little soft. That’s why someone can blame their eyes’ focus when part of the problem is surface dryness. [Dry eyes when reading](/guides/dry-eyes-when-reading) covers the habit side of this.`,
      },
      {
        p: `Straining to read without the right glasses can make it worse. Squinting and leaning in hold the eyes in a fixed, effortful position, and the blink rate falls further. So the two problems can feed each other.`,
      },
      { h: 'Using both together' },
      {
        p: `Plenty of people wear reading glasses and use a lubricating drop. A few practical points:`,
      },
      {
        list: [
          `Take your glasses off before putting a drop in, and wait a moment for your vision to settle before putting them back on.`,
          `Wipe the lenses if a drop lands on them; an oily smear looks like blur.`,
          `Keep your reading at a comfortable distance and take short breaks to look across the room.`,
          `Follow the label’s directions: {directions}.`,
        ],
      },
      {
        p: `The label doesn’t cover contact lenses, children or use with other eye drops, including prescription drops; ask your eye doctor or pharmacist about any of those.`,
      },
      { h: 'Do drugstore readers hurt your eyes?' },
      {
        p: `Many people buy over-the-counter readers. Whether they suit you depends on things only an eye exam measures, such as whether your two eyes need the same strength. If readers leave you with headaches or tired eyes, or you keep moving to a stronger pair, get an exam. Persistent blur, or a change in vision that happens suddenly, shouldn’t wait. {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
      { h: 'If dryness is part of your answer' },
      {
        p: `If the blur clears with blinking and your eyes feel dry, start with the air and the blink: move vents off your face, take reading breaks, and consider a humidifier in winter. A lubricating drop can help with the surface. Quell’s warnings start with: {warnings}. The full label is on the [Drug Facts](/drug-facts) page, and the [self-check](/self-check) can help you describe what you’re noticing before an appointment.`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops replace reading glasses?',
        a: 'No. Lubricating eye drops moisten the surface of the eye, while reading glasses help you focus on close objects. If small print stays blurry after blinking, see an eye doctor about focus.',
      },
      {
        q: 'Why does print get blurry after I read for a while?',
        a: 'Reading lowers your blink rate, so the tear film thins and vision can look hazy until you blink. If the blur doesn’t clear with blinking, the cause may be focus, which an eye exam can check.',
      },
      {
        q: 'Can I use eye drops while wearing reading glasses?',
        a: 'Take the glasses off, put the drop in, and give your vision a moment to settle before you put them back on. Wipe the lenses if any drop lands on them.',
      },
      {
        q: 'Are cheap reading glasses bad for your eyes?',
        a: 'Whether drugstore readers suit you depends on measurements only an eye exam takes. If they cause headaches or tired eyes, or you keep needing stronger ones, have your eyes checked.',
      },
    ],
  },

  {
    slug: 'humidifier-or-eye-drops-for-dry-eyes',
    title: 'Humidifier or eye drops for dry eyes?',
    description:
      'A humidifier changes the air in one room; a lubricating drop goes with you everywhere. Which to try first for dry eyes, and why many people end up using both.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `A humidifier and eye drops work on dry eyes from opposite ends. A humidifier adds moisture to the air in one room, so it helps most where you spend long, still hours, such as the bedroom. A lubricating drop works on the eye itself and goes wherever you go, used as its label directs. If your eyes are worst on waking, start with the humidifier; if they’re worst at work or on the road, start with drops and better habits.`,
      },
      { h: 'How each one helps' },
      {
        p: `Dry air pulls water from the tear film between blinks. A humidifier tackles the air: by raising the room’s relative humidity, it slows that evaporation for as long as you’re in the room and the machine is running. A lubricating drop tackles the eye: it adds to the layer on the surface. Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. One changes the environment, the other supports the surface, and neither does the other’s job.`,
      },
      { h: 'Where a humidifier makes more sense' },
      {
        list: [
          `Your eyes feel stuck, sandy or sore when you wake up in winter.`,
          `The furnace, radiators or a wood stove run most of the night.`,
          `You spend long evenings in one room, reading or watching TV.`,
          `You work from home at the same desk every day.`,
          `Your skin and lips feel dry too, which hints the room air is the culprit.`,
        ],
      },
      {
        p: `A hygrometer, a small gauge sold at hardware stores, shows the room’s humidity so you can tell whether the humidifier is making a difference. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers target levels and placement.`,
      },
      { h: 'Where eye drops make more sense' },
      {
        list: [
          `Your eyes bother you at an office desk, in the car or on a plane, where you can’t control the air.`,
          `Symptoms flare outdoors in wind or sun.`,
          `You move between many places in a day.`,
          `Summer air conditioning is the issue, and a humidifier would fight the cooling system.`,
          `You’ve already improved the air at home and still feel dry by evening.`,
        ],
      },
      {
        p: `Quell’s label lists its uses as: {uses}. The directions: {directions}. Read the warnings before you start: {warnings}.`,
      },
      { h: 'Using both together' },
      {
        p: `For many people, the answer is both. A humidifier in the bedroom takes care of the longest stretch of the day with no blinking, and a drop covers the hours you spend elsewhere. Add the habits that cost nothing: point vents away from your face, take screen breaks, and blink fully. If you track your symptoms, you’ll see which change does the most for you. [What makes dry eyes worse?](/guides/what-makes-dry-eyes-worse) lists other everyday triggers worth checking.`,
      },
      { h: 'Is a cool-mist or warm-mist humidifier better for dry eyes?' },
      {
        p: `Either type adds moisture to the air, which is what matters for the tear film. The practical differences are about the machine. Warm-mist models boil water, so they use more power and the hot water and steam can burn, which matters around children and pets. Cool-mist models can spread whatever is in the tank into the air if they aren’t cleaned, so regular cleaning and fresh water matter even more. Follow the manufacturer’s cleaning instructions for either type, and don’t point the mist straight at your face.`,
      },
      { h: 'What each costs you in effort' },
      {
        p: `A humidifier asks for daily refilling, regular cleaning and a little floor or dresser space. Too much humidity can leave condensation on cold windows. Eye drops ask for clean hands, a few seconds and attention to the label. The handling line is: {tip}. The storage line is: {storage}. Neither one fixes a cause that isn’t air or blinking.`,
      },
      { h: 'When neither is the answer' },
      {
        p: `If your eyes still bother you after you’ve improved the air and used a drop as directed, or if anything feels wrong beyond dryness, see an eye doctor. {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs. The label doesn’t give directions for contact lenses, children or other eye drops, so ask your eye doctor or pharmacist about those. The full label is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
    faq: [
      {
        q: 'Should I use a humidifier or eye drops for dry eyes?',
        a: 'If your eyes are worst on waking or in one room you use for hours, start with a humidifier there. If they bother you at work, outdoors or while traveling, a lubricating drop used as directed is easier to take along. Many people use both.',
      },
      {
        q: 'Is a cool mist humidifier good for dry eyes?',
        a: 'Any humidifier that raises a dry room’s humidity can help slow tear evaporation. Cool-mist models need regular cleaning, and warm-mist models can burn, so choose based on your home and keep it clean.',
      },
      {
        q: 'Can I stop using eye drops if I get a humidifier?',
        a: 'Some people find a humidifier is enough at home, but it only changes the air in one room. Watch how your eyes feel in other places, and see an eye doctor if dryness continues.',
      },
    ],
  },

  {
    slug: 'eye-drops-vs-glasses-for-dry-eyes',
    title: 'Eye drops vs. glasses for dry eyes',
    description:
      'Wraparound glasses block the wind and air that dry your eyes; lubricating drops support the tear film. When each helps more, and how to combine them.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Glasses and eye drops help dry eyes in different ways. Wraparound glasses or glasses with side shields block the wind, fan air and vent drafts that speed tear evaporation, so they help most outdoors, in the car and on bikes. A lubricating drop supports the tear film itself and helps wherever you are, used as its label directs. For windy, sunny or drafty settings, start with glasses; for screens and dry indoor air, a drop and better blinking do more.`,
      },
      { h: 'Why moving air matters so much' },
      {
        p: `The tear film’s outer oily layer slows evaporation, but moving air strips water away much faster than still air does. A breeze across the face, a car vent aimed at your eyes, a ceiling fan over the bed, or the wind on a bike all have the same effect: more evaporation between blinks. Anything that puts a barrier between the air and your eye cuts that down. That’s the whole idea behind glasses for dry eyes.`,
      },
      { h: 'What kind of glasses help' },
      {
        list: [
          `Wraparound frames that curve around the sides of the face block wind from the sides as well as the front.`,
          `Glasses with side shields do the same for people who need a prescription.`,
          `Larger lenses that sit close to the face leave less gap at the top and bottom.`,
          `Sports glasses and cycling glasses are built to stay put while you move.`,
          `Ski goggles seal around the eyes for wind and cold.`,
        ],
      },
      {
        p: `Some eyewear is designed with extra seals around the frame specifically for dry eyes. Whether one suits you, and whether it can be made with your prescription, is a question for an eye doctor or optician.`,
      },
      { h: 'Do sunglasses help dry eyes?' },
      {
        p: `Sunglasses help in two ways: the frame blocks some wind, and the tint cuts glare that makes people squint. Squinting narrows the eye and changes how evenly the lids spread tears. Flat, small sunglasses help less with wind than wraparounds. Polarized lenses reduce glare off water, snow and roads. For sunglasses indoors, see [is it bad to wear sunglasses indoors?](/guides/is-it-bad-to-wear-sunglasses-indoors).`,
      },
      { h: 'Where glasses do more than drops' },
      {
        list: [
          `Cycling, running or motorcycling, where speed creates constant wind.`,
          `Walking or working outdoors on cold, windy days.`,
          `Boating, fishing or a day at the beach, with wind and glare together.`,
          `Yard work, where dust and debris blow around.`,
        ],
      },
      {
        p: `In these settings, a drop on its own is fighting a strong, continuous airflow. A physical barrier lets the tear film last longer between blinks. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more on winter outings.`,
      },
      { h: 'Where drops do more than glasses' },
      {
        p: `Indoors, the problem is usually dry air and reduced blinking rather than wind. Glasses don’t change the room’s humidity, and they don’t make you blink more at a screen. Here a lubricating drop, screen breaks and a humidifier usually help more. Quell™ is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its uses as: {uses}. The directions say: {directions}.`,
      },
      { h: 'Using glasses and drops together' },
      {
        list: [
          `Put a drop in before heading out, then wear wraparound glasses outside.`,
          `Take glasses off to use a drop, and wait for your vision to settle before putting them back on.`,
          `Keep a lens cloth handy; a smear of drop on a lens can look like blur.`,
          `Keep the bottle out of direct sun in a bag pocket. The label’s storage line: {storage}.`,
        ],
      },
      {
        p: `The warnings on Quell’s label begin: {warnings}. The label doesn’t give directions for contact lenses, children or use with other eye drops, so ask an eye doctor or pharmacist about those. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
      { h: 'Goggles for dry eyes at night' },
      {
        p: `Some people notice their eyes are worst on waking, especially when a fan or vent runs all night. The first steps are simple: turn the fan away from the bed, close the vent and run a humidifier. Sleep goggles or masks made for dryness exist, but whether they fit your situation is a question for an eye doctor. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers the bedroom fixes.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If glasses and drops together don’t help, or something feels wrong beyond dryness, get your eyes checked. {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Do wraparound glasses help dry eyes?',
        a: 'Yes, especially outdoors. Wraparound frames block wind and drafts from the sides as well as the front, which slows evaporation from the tear film between blinks.',
      },
      {
        q: 'Are glasses or eye drops better for dry eyes when cycling?',
        a: 'On a bike, the constant wind is the main problem, so wraparound cycling glasses do the most. A lubricating drop before you ride, used as the label directs, can add to the protection.',
      },
      {
        q: 'Should I wear goggles to bed for dry eyes?',
        a: 'Start by turning fans and vents away from the bed and using a humidifier. Sleep goggles made for dryness exist; ask an eye doctor whether they suit you.',
      },
    ],
  },

  /*
   * Sources checked 2026-11-20 for the three ordering guides below:
   * - IRS Publication 969 (irs.gov/publications/p969, saved as text at
   *   .daily-job/e/p969.txt): "Distributions From an HSA" (tax-free distributions
   *   to pay or be reimbursed for qualified medical expenses incurred after the
   *   HSA is established; total distributions include amounts paid with a debit
   *   card and amounts withdrawn by other individuals you have designated; whose
   *   expenses qualify: you and your spouse, dependents you claim, persons you
   *   could have claimed except three listed cases; divorced-parents tip;
   *   distributions not used for qualified medical expenses are taxable plus an
   *   additional 20 percent tax; recordkeeping: three things records must show;
   *   don't send records with the return); "Flexible Spending Arrangements"
   *   (distributions only to reimburse qualified medical expenses incurred during
   *   the period of coverage; written third-party statement; employer debit cards).
   * - Site code: src/lib/authorizenet.ts (one authCaptureTransaction per order on
   *   Authorize.net's hosted page; card only; card code and billing address
   *   required on that page; shipping address passed separately);
   *   src/lib/email.ts (confirmation goes to the checkout email, greets the first
   *   name on the shipping address, lists items, subtotal, shipping, total and the
   *   ship-to address); src/app/terms/page.tsx section 7 (unopened bottles refunded
   *   within 30 days of delivery, not sent back, original shipping not refunded;
   *   opened bottles not refundable; damaged, incorrect or broken-seal orders
   *   replaced; call with the order number).
   */
  {
    slug: 'split-payment-hsa-card-for-eye-drops',
    title: 'Can you split payment with an HSA card for eye drops?',
    description:
      'Quell’s checkout takes one card per order, so you can’t split it. Ways to pay when your HSA balance is short, and what IRS Publication 969 says.',
    category: 'ordering',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Not on quelldrop.com: each order is paid with a single card on the secure payment page, so you can’t put part of the total on an HSA card and the rest on another card. If your HSA balance won’t cover the order, pay the whole thing with a personal card and reimburse yourself from the HSA later for the qualifying amount, which IRS Publication 969 allows, or place a smaller order the HSA can cover.`,
      },
      { h: 'Why checkout takes one card per order' },
      {
        p: `When you check out, the site hands you to a secure payment page run by Authorize.net, the payment processor named in the site’s [terms](/terms). That page charges one card for the order’s full total, products plus shipping, in a single transaction. It asks for the card number, the expiration date, the security code and the billing address that goes with that card. There’s no second card field and no gift card or store credit to combine with it. [Why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains how that page works.`,
      },
      { h: 'What happens if the HSA card doesn’t cover the total' },
      {
        p: `HSA debit cards draw on the money in the account. If the order total is more than the available balance, the card will usually be declined and the order won’t go through. Nothing is charged for a declined attempt, and your cart is still there to try again. Your HSA custodian can tell you the exact balance and whether the card has any other limits.`,
      },
      { h: 'Option 1: pay with another card, then reimburse yourself' },
      {
        p: `IRS Publication 969 says you can receive tax-free distributions from your HSA “to pay or be reimbursed for qualified medical expenses you incur after you establish the HSA.” So you can pay for eye drops with a personal credit or debit card and later move money from the HSA to yourself for the qualifying part of the purchase, whenever the balance allows.`,
      },
      {
        list: [
          `Pay the full order with your personal card at checkout.`,
          `Save the confirmation email; it lists each item, the subtotal, shipping and the total.`,
          `When your HSA has enough, request a reimbursement through your custodian’s website or app.`,
          `Keep the receipt with your tax records, along with a note of the amount you reimbursed and when.`,
        ],
      },
      {
        p: `[How to reimburse yourself from an HSA for eye drops](/guides/reimburse-yourself-from-hsa-for-eye-drops) walks through that in detail. Whether shipping counts as part of the qualifying expense is something to confirm with your HSA custodian.`,
      },
      { h: 'Option 2: place a smaller order' },
      {
        p: `If you’d rather pay directly with the HSA card, order the number of bottles your balance covers now and the rest later. Keep the shipping rules in mind: orders of one or two bottles pay a flat {shipping} for shipping, and {freeBottles} or more bottles ship free. Two small orders can cost more in shipping than one larger order. [How many bottles of eye drops should I order?](/guides/how-many-bottles-to-order) helps you plan.`,
      },
      { h: 'Option 3: wait for the next contribution' },
      {
        p: `If you contribute to your HSA through payroll, the balance grows every pay period. Waiting a week or two for the next deposit lets you pay the whole order with the HSA card in one go. If you’re running low on drops, though, paying with a personal card and reimbursing yourself later avoids going without.`,
      },
      { h: 'Records to keep either way' },
      {
        p: `Publication 969 says HSA owners must keep records showing that distributions were used only for qualified medical expenses, that those expenses weren’t paid or reimbursed from another source, and that they weren’t taken as an itemized deduction. Don’t send them with your tax return; keep them with your tax records. If you split a purchase across a personal card and a later HSA reimbursement, write down which part came from where. It also warns that distributions not used for qualified medical expenses are taxable and may face an additional 20 percent tax.`,
      },
      { h: 'What about an FSA card?' },
      {
        p: `An FSA card works the same way at checkout: one card covers the whole order. FSAs, though, work on an election for the plan year, and Publication 969 says you must be able to receive the full amount you elected at any time during the coverage period, regardless of how much you’ve contributed so far. Plan rules on cards and claims vary, so ask your plan administrator if a charge is declined. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) covers eligibility.`,
      },
      { h: 'Before you order' },
      {
        p: `Quell’s label lists its uses as: {uses}. Its warnings begin: {warnings}. The directions don’t cover contact lenses, children or use with other eye drops, so ask an eye doctor or pharmacist first if any of those apply. When you’re ready, choose your quantity on the [home page](/#buy). This page explains how payment works on this site; for tax questions, a tax professional or your HSA custodian can advise on your situation.`,
      },
    ],
    faq: [
      {
        q: 'Can I split payment between my HSA card and a credit card?',
        a: 'Not on quelldrop.com. The secure payment page charges one card for the full order total. You can pay with a personal card and reimburse yourself from your HSA later for the qualifying amount.',
      },
      {
        q: 'What happens if my HSA card doesn’t have enough money for my order?',
        a: 'The card will usually be declined, and nothing is charged. Pay with another card and reimburse yourself from the HSA later, or order fewer bottles so the total fits your balance.',
      },
      {
        q: 'Can I make a partial HSA payment for eye drops?',
        a: 'Not at checkout, since each order goes on one card. You can, however, pay with another card and later reimburse yourself from your HSA for qualified medical expenses, as IRS Publication 969 describes.',
      },
    ],
  },

  {
    slug: 'can-family-members-use-your-hsa-card',
    title: 'Can family members use your HSA card for eye drops?',
    description:
      'A spouse or dependent can use your HSA money for their eye drops; others can’t tax-free. What IRS Publication 969 says, and how checkout handles their order.',
    category: 'ordering',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Your HSA can pay tax-free for eye drops for you, your spouse and your dependents, and IRS Publication 969 says money withdrawn by people you designate counts as your distribution. So a spouse or dependent can use your HSA card for their own drops if your custodian allows it. Using it for someone who isn’t a spouse or dependent, such as a parent you don’t claim, makes that spending taxable.`,
      },
      { h: 'Whose expenses an HSA can pay' },
      {
        p: `Publication 969 lists the people whose qualified medical expenses an HSA can cover:`,
      },
      {
        list: [
          `You and your spouse.`,
          `All dependents you claim on your tax return.`,
          `Any person you could have claimed as a dependent, except that the person filed a joint return, had gross income at or above the exemption amount, or you (or your spouse, if filing jointly) could be claimed as a dependent on someone else’s return.`,
        ],
      },
      {
        p: `It adds that a child of parents who are divorced, separated or living apart for the last six months of the year counts as the dependent of both parents for this purpose. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains how over-the-counter medicines fit in.`,
      },
      { h: 'Can my spouse use my HSA card?' },
      {
        p: `Yes, for qualified medical expenses. Ask your custodian whether it issues a second card in a spouse’s name on the same account. Either way, Publication 969 says your total distributions include “amounts withdrawn from the HSA by other individuals that you have designated.” Those withdrawals show up on the same Form 1099-SA as yours. [Can I use my HSA for my spouse’s eye drops?](/guides/can-i-use-my-hsa-for-my-spouses-eye-drops) goes into more detail.`,
      },
      { h: 'Can my mom use my HSA card?' },
      {
        p: `Only tax-free if she counts as your dependent under the rules above. A parent whose own gross income is at or above the exemption amount, for example, doesn’t qualify. If she isn’t, spending your HSA on her eye drops is a distribution not used for qualified medical expenses: Publication 969 says it’s taxable and may face an additional 20 percent tax. The rules for parents are spelled out in [can I use my HSA for my parents’ eye drops?](/guides/can-i-use-my-hsa-for-my-parents-eye-drops).`,
      },
      { h: 'Friends, roommates, siblings and partners' },
      {
        p: `The same test applies to everyone else. A friend or roommate isn’t a spouse or dependent, so your HSA can’t pay for their eye drops tax-free. A sibling or a partner you aren’t married to qualifies only if they meet the dependent rules. When in doubt, pay with a personal card, or let them buy their own.`,
      },
      { h: 'How the order works when someone else checks out' },
      {
        p: `On quelldrop.com, whoever is ordering can check out as a guest. A few details matter when the card belongs to someone else in the household:`,
      },
      {
        list: [
          `The secure payment page asks for the card’s billing address, which is the address the card account is registered to, not necessarily where the drops are going.`,
          `It also asks for the card’s security code.`,
          `The shipping address can be anyone’s in the United States; the order confirmation greets the first name on that shipping address.`,
          `The confirmation and shipping emails go to whatever email address is entered at checkout, so use the address of whoever will track the order and keep the receipt.`,
          `The person placing the order must be 18 or older.`,
        ],
      },
      { h: 'Keep the receipt with the account holder’s records' },
      {
        p: `The HSA belongs to one person, the account holder, and Publication 969 puts the recordkeeping on them: records showing each distribution paid only for qualified medical expenses, that the expense wasn’t reimbursed from another source, and that it wasn’t taken as an itemized deduction. If a family member orders with your card, have them forward the confirmation email to you. It lists the items, the shipping cost, the total and the ship-to name, which also shows who the drops were for.`,
      },
      { h: 'FSA cards follow similar rules' },
      {
        p: `A health FSA reimburses qualified medical expenses too, and Publication 969 notes employers can issue debit cards for it. Who can use the card, and whose expenses count, depends on your employer’s plan, so check with the plan administrator. [FSA vs. HSA for eye drops](/guides/fsa-vs-hsa-for-eye-drops) compares the two accounts.`,
      },
      { h: 'Before they use the drops' },
      {
        p: `Whoever uses Quell should read the label first. Its warnings begin: {warnings}. The directions say: {directions}. The label doesn’t give directions for contact lenses, children or use with other eye drops, so they should ask an eye doctor or pharmacist if any of those apply. This page explains the site and what Publication 969 says; for your own tax situation, ask your HSA custodian or a tax professional.`,
      },
    ],
    faq: [
      {
        q: 'Can family members use my HSA card?',
        a: 'Your spouse and dependents can, for their own qualified medical expenses such as eye drops, if your HSA custodian allows it. IRS Publication 969 counts withdrawals by people you designate as your distributions.',
      },
      {
        q: 'Can my mom use my HSA card for her eye drops?',
        a: 'Only tax-free if she qualifies as your dependent under IRS rules. Otherwise the purchase is a non-qualified distribution, which is taxable and may face an additional 20 percent tax.',
      },
      {
        q: 'Whose billing address do I enter when paying with someone else’s HSA card?',
        a: 'The billing address registered to that card account. The shipping address can be wherever the eye drops are going.',
      },
      {
        q: 'Can I use my HSA card for my roommate’s eye drops?',
        a: 'Not tax-free. An HSA covers qualified medical expenses for you, your spouse and your dependents, and a roommate usually isn’t any of those.',
      },
    ],
  },

  {
    slug: 'refunds-on-eye-drops-bought-with-hsa-or-fsa',
    title: 'Refunds on eye drops bought with HSA or FSA money',
    description:
      'Returning eye drops paid for with an HSA or FSA card: what Quell refunds, what it doesn’t, and how to keep your HSA or FSA records straight.',
    category: 'ordering',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Quell refunds the product price of unopened bottles within {returnDays} days of delivery, without asking you to send them back; original shipping isn’t refunded. If you paid with an HSA or FSA card, ask that the refund go back to the card you used, then keep the refund note with your receipt. If you paid personally and already reimbursed yourself, contact your HSA custodian or FSA administrator about the refunded amount.`,
      },
      { h: 'What Quell refunds, and what it doesn’t' },
      {
        p: `The site’s [terms](/terms) set the policy, and it’s the same whatever card you paid with:`,
      },
      {
        list: [
          `Unopened bottles: refunded at the product price if you contact the company within {returnDays} days of delivery. You don’t need to send them back.`,
          `Original shipping: not refunded.`,
          `Opened bottles: can’t be refunded, returned or resold.`,
          `Damaged, incorrect or broken-seal orders: replaced at no charge if reported within {returnDays} days. A replacement isn’t a refund, so nothing changes on your card.`,
        ],
      },
      {
        p: `To ask for a refund or replacement, call {phone} ({hours}) with your order number. [Refunds on unopened bottles of Quell](/guides/how-to-return-an-unopened-bottle) has the step-by-step version.`,
      },
      { h: 'Can you get a refund on your HSA card?' },
      {
        p: `Refunds of card payments normally go back to the card that was charged, so a refund on an order paid with an HSA debit card would usually land back in the HSA. Confirm how the refund will be issued when you call. Once it posts, check your HSA account to make sure the money arrived. Your custodian’s statement shows both the original charge and the credit.`,
      },
      { h: 'If you paid personally and already reimbursed yourself' },
      {
        p: `This is the case that needs attention. Say you paid with a personal card, took a reimbursement from your HSA for the eye drops, and then got a refund from the seller. The refund comes back to your personal card, but the HSA money already left the account for an expense you no longer have.`,
      },
      {
        p: `IRS Publication 969 says that if you don’t use a distribution from your HSA for qualified medical expenses, you must pay tax on it, and there’s an additional 20 percent tax on the part not used for qualified expenses. Ask your HSA custodian what options it offers for the refunded amount before tax time, and talk with a tax professional about how to report it. [How to reimburse yourself from an HSA for eye drops](/guides/reimburse-yourself-from-hsa-for-eye-drops) explains the reimbursement side.`,
      },
      { h: 'Refunds on FSA purchases' },
      {
        p: `Publication 969 says health FSA distributions must be paid only to reimburse qualified medical expenses incurred during the period of coverage. If your FSA card paid for the order, a refund to that card would normally go back to the FSA. If you filed a claim and were reimbursed, then got a refund, tell your plan administrator; the expense you claimed was partly reversed, and the plan decides how that’s handled. Plan rules vary, so the administrator is the one to ask.`,
      },
      { h: 'Keeping your records straight' },
      {
        p: `Publication 969 says HSA owners must keep records showing distributions were used only for qualified medical expenses that weren’t paid or reimbursed from another source. A refund is part of that story.`,
      },
      {
        list: [
          `Keep the original order confirmation email, which lists the items, shipping and total.`,
          `Save any email or note confirming the refund, with the date and amount.`,
          `Note which card was charged and which card the refund went to.`,
          `If you reimbursed yourself from the HSA, note what you did with the refunded amount and what your custodian told you.`,
        ],
      },
      {
        p: `[Do I need to keep receipts for HSA eye drops?](/guides/do-i-need-to-keep-receipts-for-hsa-eye-drops) covers the rest of HSA recordkeeping.`,
      },
      { h: 'Before you ask for a refund' },
      {
        p: `If you bought more than you’ll use, check the dates first: the {returnDays} days run from delivery. If the bottles are fine but you’re unsure about using them, the label may answer the question. Its uses: {uses}. Its warnings: {warnings}. The full panel is on the [Drug Facts](/drug-facts) page. This page explains the site’s policy and what Publication 969 says; for your own tax situation, ask your HSA custodian, FSA administrator or a tax professional.`,
      },
    ],
    faq: [
      {
        q: 'Can you return something you bought with an HSA card?',
        a: 'Yes, under the seller’s own return policy. Quell refunds unopened bottles within {returnDays} days of delivery without a return shipment. Card refunds normally go back to the card that was charged, so confirm that when you call.',
      },
      {
        q: 'What if I reimbursed myself from my HSA and then got a refund?',
        a: 'The HSA money no longer matches a qualified expense, and IRS Publication 969 says such distributions are taxable and may face an additional 20 percent tax. Ask your HSA custodian about options and a tax professional about reporting.',
      },
      {
        q: 'Is shipping refunded if I return eye drops bought with FSA money?',
        a: 'No. Quell’s terms refund the product price of unopened bottles, and original shipping isn’t refunded, whatever card you used.',
      },
      {
        q: 'Do I need to tell my FSA about a refund?',
        a: 'If you filed a claim and were reimbursed, then got a refund, tell your plan administrator. Plan rules vary, and the administrator decides how a reversed expense is handled.',
      },
    ],
  },
]
