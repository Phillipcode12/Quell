import type { Guide } from '@/lib/guide-types'
export const DAILY_20261120_A: Guide[] = [
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-killeen-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid ILE; saved at .daily-job/acis1120/ILE.json and .daily-job/a/ILE-extra.json)
   *   (KILLEEN MUNICIPAL AP, elev 841 ft: Jan max 59.5 F, min 36.1 F; Dec max
   *   60.4, min 38.1; Jun max 92.2; Jul max 95.7, min 72.3; Aug max 96.6, min
   *   72.7; precip May 4.70 in (wettest), Sep 3.89, Aug 1.64 (driest); twelve
   *   monthly precip normals sum to 34.75 in; snowfall normals 0.0, not quoted)
   * - relhum23.txt / wndspd23.txt have no Killeen row: no humidity or wind figure.
   * - The neighboring Army post's name was not verified today, so it is not named.
   */
  {
    slug: 'dry-eye-relief-killeen-tx',
    title: 'Dry eye relief in Killeen, Texas',
    description:
      'Killeen’s August highs average about 97°F, and August is its driest month in NOAA’s normals. What that does to your eyes, and simple daily relief.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Killeen mostly comes down to handling heat and air conditioning. NOAA’s normals for Killeen’s municipal airport put August highs near 97°F in the driest month of the year, so eyes spend summer moving between baking parking lots and cold, dry indoor air. Point vents away from your face, wear wraparound sunglasses outside, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'How hot and dry does Killeen get?' },
      {
        p: `The record used here is NOAA’s 1991–2020 climate normals for Killeen Municipal Airport, the same data the National Weather Service publishes through NOWData. The station sits at about 840 feet, inside the city, so its numbers describe the streets most people drive every day:`,
      },
      {
        list: [
          `August is the hottest month, with a normal high of 96.6°F and a normal low of 72.7°F. July is close behind at 95.7°F.`,
          `June already averages 92.2°F in the afternoon, so the hot stretch runs about three months.`,
          `August is also the driest month, at 1.64 inches of rain. May is the wettest, at 4.70 inches.`,
          `The twelve monthly rain normals add up to about 34.75 inches a year.`,
          `January afternoons reach about 59.5°F, and its normal low is 36.1°F.`,
        ],
      },
      {
        p: `Put the hot and dry months together and late summer is when Killeen asks the most of the tear film, the thin layer of oil, water and mucus that keeps the eye’s surface smooth. Warm air with little rain behind it pulls water from that film between blinks.`,
      },
      { h: 'August afternoons: the hardest stretch for eyes' },
      {
        p: `A Killeen August afternoon is hot air outside and chilled air inside, with a short walk across bright pavement in between. Air conditioning removes moisture as it cools, and a vent blowing at face height speeds evaporation from the eye the way a breeze dries a wet sidewalk. The eye doesn’t get a rest in either place.`,
      },
      {
        list: [
          `In the car, angle the dash vents toward your chest or the windshield instead of your face.`,
          `At a desk, move the chair or the fan so the air from the ceiling register doesn’t land on your eyes.`,
          `Run errands and yard work in the morning when you can; the normal low in August is still above 72°F, but the sun is lower and the glare is softer.`,
          `Wear wraparound sunglasses in parking lots, where heat and glare come up off the asphalt.`,
          `When you notice you’ve been staring at a phone in a cold waiting room, close your eyes gently for a few seconds and then blink fully a few times.`,
        ],
      },
      { h: 'New to Killeen? The first summer surprises people' },
      {
        p: `Plenty of Killeen households arrive on military orders or follow a job to Bell County, and many come from cooler, damper places. The first summer can feel harsh on the eyes for people used to coastal fog or northern lakes. If you’re moving in, pack your eye drops in the box or bag that rides with you, not the moving truck. Quell’s label gives its storage range as {storage}, and a sealed truck in a Central Texas July can climb far past the top of that range.`,
      },
      {
        p: `Unpacking is dusty work too. Cardboard, insulation in the attic and a house that sat closed for weeks all put fine particles in the air. Rubbing your eyes during a move makes irritation worse. Rinse your hands, step outside for a minute and blink, and keep a clean pair of glasses or sunglasses handy while you work.`,
      },
      { h: 'Training, ranch work and long days outside' },
      {
        p: `Killeen’s workday often happens outdoors: on job sites, on ranch land west of town, on the Army post next door, and on long highway drives to Austin, Waco or Temple. Wind across open country, dust from gravel roads and hours of sun all dry the eyes faster. A few habits help across all of them:`,
      },
      {
        list: [
          `Wear eye protection that wraps around the sides, which blocks wind as well as debris.`,
          `Keep your eye drops in a shaded pocket or a cooler bag, never on the dash.`,
          `Take short breaks out of the wind, and blink slowly a few times before getting back to it.`,
          `On a long drive, stop every couple of hours, look at something far away and rest your eyes.`,
        ],
      },
      {
        p: `[Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more for people who spend the whole shift outside.`,
      },
      { h: 'Winter mornings with the heater on' },
      {
        p: `Killeen winters are mild by most standards, but the normal January low of 36.1°F means heaters run in the morning and evening. Car heaters aimed at the face dry the eyes just as the summer AC does, so the same vent advice applies in January. Inside, a small humidifier in the bedroom helps some people; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains what to expect from one.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. To keep the bottle clean, the panel adds: {tip}.`,
      },
      {
        p: `The label also carries this caution: {warnings}. Its storage line is {storage}, which matters in a city where a parked car can get far hotter than that in summer. Keep the bottle in a bag you carry inside. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Killeen' },
      {
        p: `We ship from Brentwood, Tennessee, to Killeen, Harker Heights, Copperas Cove and every other US address. Checkout works as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so reorder before your last bottle runs low. If you’re out in the afternoon, ask a neighbor to bring the package in so it doesn’t sit on a hot porch. See the [Killeen page](/eye-drops/killeen-tx) and the [Texas page](/eye-drops/state/texas) for local details.`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `Heat and AC explain a lot of everyday dryness, but not all of it. The label is clear about when to stop: {stopUse} Pain, vision that stays blurry, or one eye much worse than the other calls for an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth acting on.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Killeen get in August?',
        a: `NOAA’s 1991–2020 normals for Killeen Municipal Airport put the normal August high at 96.6°F and the normal low at 72.7°F, which makes August the city’s hottest month.`,
      },
      {
        q: 'What is the driest month in Killeen, Texas?',
        a: `August, at 1.64 inches of rain in NOAA’s normals for the municipal airport. May is the wettest month, with 4.70 inches.`,
      },
      {
        q: 'Why do my eyes feel dry after moving to Killeen?',
        a: `Long, hot summers mean air conditioning runs for months, and AC air blowing at the face dries the eye’s surface quickly. People moving from cooler, damper places often notice it most during their first summer.`,
      },
      {
        q: 'Can I get Quell shipped to Harker Heights or Copperas Cove?',
        a: `Yes. We ship from Brentwood, Tennessee, to any US address, including Harker Heights, Copperas Cove and Killeen. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-valdosta-ga:
   * - NOAA 1991-2020 monthly normals via ACIS (sid VLD; saved at
   *   .daily-job/acis1120/VLD.json and .daily-job/a/VLD-extra.json)
   *   (VALDOSTA REGIONAL AP, elev 193 ft: Jan max 62.8 F, min 38.6 F; Dec min
   *   41.3; May max 86.4, precip 2.84; Jun precip 7.08 in (wettest); Jul max
   *   92.1, min 70.1; Aug max 91.5, precip 5.11; Jul precip 5.33; Nov precip
   *   2.47 (driest); twelve monthly precip normals sum to 48.41 in; snowfall "M")
   * - relhum23.txt / wndspd23.txt have no Valdosta row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-valdosta-ga',
    title: 'Dry eye relief in Valdosta, Georgia',
    description:
      'Valdosta gets about 48 inches of rain a year, yet eyes still dry out in its air-conditioned summers and dry Novembers. NOAA’s numbers and daily habits.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Valdosta isn’t about desert air. NOAA’s normals for Valdosta Regional Airport show about 48 inches of rain a year, with June the wettest month. Eyes dry out here indoors, under air conditioning that runs from May into October, and again in November, the driest month. Keep vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Valdosta’s climate in numbers' },
      {
        p: `These figures come from NOAA’s 1991–2020 climate normals for Valdosta Regional Airport, which sits on the south side of the city at about 190 feet, as published through the National Weather Service’s NOWData.`,
      },
      {
        list: [
          `June is the wettest month at 7.08 inches, followed by July at 5.33 and August at 5.11. Summer rain usually arrives as afternoon storms.`,
          `November is the driest month at 2.47 inches, and May is the second driest at 2.84.`,
          `The twelve monthly normals add up to about 48.41 inches of rain a year.`,
          `July is the hottest month, with a normal high of 92.1°F and a low of 70.1°F.`,
          `January afternoons average 62.8°F, with a normal low of 38.6°F.`,
        ],
      },
      { h: 'Why your eyes can feel dry in a wet place' },
      {
        p: `Humid outdoor air is easy on the tear film. The trouble starts when you go inside. Air conditioning cools the air by pulling water out of it, and in a South Georgia summer the AC in homes, offices, classrooms and cars may run for most of the waking day. A vent blowing straight at your face does to your eyes what a fan does to a wet towel. The tear film’s outer oil layer slows that evaporation, but steady airflow still thins it between blinks.`,
      },
      {
        p: `That’s why someone can step out of a muggy parking lot into a cold store and feel their eyes sting within minutes. The air outdoors wasn’t the problem.`,
      },
      { h: 'May and November: the drier edges of the year' },
      {
        p: `Valdosta’s two driest months fall at the turning points of the year. May brings normal highs of 86.4°F with only 2.84 inches of rain, so yards, ball fields and dirt roads are at their dustiest just as the heat builds. November’s 2.47 inches come with cool mornings, and many homes switch from cooling to heating within the same few weeks.`,
      },
      {
        list: [
          `In May, wear sunglasses with side coverage at outdoor games and on the tractor, and rinse dust off your face and lashes before you rub your eyes.`,
          `In November, when the heat pump first switches to heat, check where the vents point in the bedroom and the living room.`,
          `On cool mornings, aim the car heater at the windshield instead of your face.`,
          `If your eyes feel gritty after yard cleanup or burning leaves, step out of the smoke and blink a few times to let tears wash the surface.`,
        ],
      },
      { h: 'Classrooms, offices and long drives' },
      {
        p: `Valdosta is a college town and a regional hub for South Georgia, so a lot of daily life happens in cooled lecture halls, offices and clinics. Reading, studying and charting all cut the blink rate. Look up from the screen every so often, and finish each blink rather than half-closing your eyes. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why focus slows blinking.`,
      },
      {
        p: `Long interstate drives to Tallahassee, Macon or the Florida coast add hours of dash vents and sun glare. Stop now and then, look into the distance and give your eyes a few slow blinks before heading back onto the highway.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which fits the air-conditioned side of Valdosta life. The Drug Facts panel names its Uses: {uses}. How to use it: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `The bottle’s caution reads: {warnings}. Its storage range is {storage}. A glove box in July goes well past that, so keep the bottle in a purse or bag that comes inside with you. [Can eye drops go bad in a hot car?](/guides/eye-drops-in-a-hot-car) covers the details. Everything else on the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Valdosta' },
      {
        p: `We ship from Brentwood, Tennessee, to Valdosta, Hahira, Lake Park and anywhere else in the US. Checkout is as a guest for anyone 18 or older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise delivery by a date, so order before you’re down to your last few days. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Valdosta page](/eye-drops/valdosta-ga) and the [Georgia page](/eye-drops/state/georgia) have local details.`,
      },
      { h: 'When to see an eye doctor in Valdosta' },
      {
        p: `A drop is for everyday dryness, and the label sets its limits: {stopUse} If one eye hurts, your vision changes, or the dryness keeps coming back no matter the season, book an appointment. An eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you describe your symptoms beforehand; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Valdosta get a year?',
        a: `About 48.41 inches, based on NOAA’s 1991–2020 monthly normals for Valdosta Regional Airport. June is the wettest month at 7.08 inches and November the driest at 2.47.`,
      },
      {
        q: 'Why are my eyes dry in Valdosta when it’s so humid?',
        a: `Most of the drying happens indoors. Air conditioning pulls moisture out of the air, and vents blowing on your face speed up evaporation from the eye, even when it’s muggy outside.`,
      },
      {
        q: 'What is the hottest month in Valdosta, Georgia?',
        a: `July, with a normal high of 92.1°F and a normal low of 70.1°F at Valdosta Regional Airport. August is nearly as hot, with a normal high of 91.5°F.`,
      },
      {
        q: 'Does Quell ship to Hahira or Lake Park?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Hahira and Lake Park. Checkout is as a guest, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-santa-cruz-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (sid WVI; saved at
   *   .daily-job/acis1120/WVI.json and .daily-job/a/WVI-extra.json)
   *   (WATSONVILLE MUNICIPAL AIRPORT, elev 162 ft: Jan max 61.3 F, min 40.1 F;
   *   Dec max 60.7, min 39.4; Jul max 72.4, min 52.6; Aug max 73.4, min 53.3;
   *   Sep max 75.3 (warmest); Oct max 73.6; precip Jan 4.60 in (wettest), Feb
   *   4.02, Mar 4.34, Dec 4.01, Jun 0.18, Jul 0.02, Aug 0.03, Sep 0.07; twelve
   *   monthly precip normals sum to 22.35 in; snowfall "M")
   * - Station is in Watsonville, not Santa Cruz; named as such in the text.
   * - relhum23.txt / wndspd23.txt have no Watsonville row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-santa-cruz-ca',
    title: 'Dry eye relief in Santa Cruz, California',
    description:
      'Santa Cruz County gets almost no rain from June to September in NOAA’s normals. How ocean wind, dry summers and screens affect your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Santa Cruz means planning for a rainless summer and a windy coast. NOAA’s normals for the nearest official station, Watsonville Municipal Airport, show a combined 0.30 inches of rain from June through September, while winter months bring four inches or more. Shield your eyes from wind at the beach, keep screens and car vents in check, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Where the numbers come from' },
      {
        p: `This guide uses NOAA’s 1991–2020 climate normals for Watsonville Municipal Airport, down the bay in south county, at about 160 feet. The same data appears in the National Weather Service’s NOWData. The station isn’t in Santa Cruz itself, so read the figures as a county picture rather than a street-by-street one.`,
      },
      {
        list: [
          `June averages 0.18 inches of rain, July 0.02, August 0.03 and September 0.07.`,
          `January is the wettest month at 4.60 inches, followed by March at 4.34, February at 4.02 and December at 4.01.`,
          `The twelve monthly normals add up to about 22.35 inches a year.`,
          `September is the warmest month, with a normal high of 75.3°F. July’s is 72.4°F.`,
          `December is the coolest, with a normal high of 60.7°F and a low of 39.4°F.`,
        ],
      },
      { h: 'Four rainless months on the coast' },
      {
        p: `Mild temperatures hide how dry a Santa Cruz summer gets. With almost no rain for four months, hillsides turn gold, trails get dusty and the wind off the water carries salt and fine sand. Mornings often start gray and cool, and the afternoon sea breeze can be strong at the beach and on the cliffs. Wind is what does the most to the eyes here: moving air pulls water from the tear film faster than still air does, even when the temperature is pleasant.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on cliff-top walks and at the beach, where wind and glare off the water hit together.`,
          `Rinse salt and sand off your face with fresh water before touching your eyes.`,
          `On dusty trail days, wipe your sunglasses clean before putting them back on.`,
          `Head out for long rides or runs before the afternoon wind builds.`,
        ],
      },
      { h: 'Surf, paddling and the water' },
      {
        p: `Santa Cruz life is tied to the ocean. Surfing, paddleboarding and kayaking put your face in the wind, the spray and the glare for hours. Salt water stings, and squinting into reflected light wears on tired eyes. After a session, rinse your face, let your eyes rest for a few minutes before you drive, and wait to use any eye drops until your hands are clean and dry. [Dry eyes when surfing](/guides/dry-eyes-when-surfing) and [dry eyes when kayaking](/guides/dry-eyes-when-kayaking) go further.`,
      },
      { h: 'Commuting over the hill and working on screens' },
      {
        p: `Many Santa Cruz residents commute over the mountains to Silicon Valley or work from home for companies there. That means long stretches at a monitor, video calls and a winding drive with the vents running. Screen work cuts the blink rate, and many blinks during focused work are partial ones that don’t spread a fresh tear film across the whole eye. Try these:`,
      },
      {
        list: [
          `Every 20 minutes, look out a window at something far away for about 20 seconds.`,
          `Set the monitor slightly below eye level so your lids cover more of the eye.`,
          `On the drive, close the vents nearest your face and use the windshield setting.`,
          `If you work from a home office with a space heater in winter, aim it at your legs.`,
        ],
      },
      { h: 'Winter: wet outside, heaters inside' },
      {
        p: `December lows near 39°F at the Watsonville station mean many older Santa Cruz homes run wall heaters, fireplaces or wood stoves on winter evenings. The rain outside does little for a small room with dry, heated air. A humidifier, a lower thermostat at night and keeping your chair out of the heater’s path all help. Wood smoke near the face can sting, so step back from the fire and open a window now and then.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. {directions}, according to the label. The panel also says: {tip}.`,
      },
      {
        p: `Before you buy, read the caution: {warnings}. The storage range is {storage}, which suits Santa Cruz most of the year; just don’t leave the bottle in a car parked in the sun at the beach. All of it is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Santa Cruz County' },
      {
        p: `We ship from Brentwood, Tennessee, to Santa Cruz, Capitola, Scotts Valley, Watsonville and anywhere in the US. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so reorder with a few days to spare. The [Santa Cruz page](/eye-drops/santa-cruz-ca) and the [California page](/eye-drops/state/california) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind and screens explain a lot, but not every dry or sore eye. The label puts it plainly: {stopUse} If sand or something else seems stuck in your eye, or your vision changes after a day at the beach, get it checked rather than reaching for drops. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the details.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Santa Cruz get in the summer?',
        a: `Very little. NOAA’s 1991–2020 normals for Watsonville Municipal Airport, the nearest official station, show 0.18 inches in June, 0.02 in July, 0.03 in August and 0.07 in September.`,
      },
      {
        q: 'What is the warmest month in Santa Cruz County?',
        a: `September, with a normal high of 75.3°F at Watsonville Municipal Airport. August follows at 73.4°F and July at 72.4°F.`,
      },
      {
        q: 'Why do my eyes get dry at the beach in Santa Cruz?',
        a: `The afternoon sea breeze moves a lot of air across your eyes, which speeds up evaporation from the tear film. Glare off the water and salt spray add to the irritation, so wraparound sunglasses help.`,
      },
      {
        q: 'Does Quell ship to Scotts Valley or Capitola?',
        a: `Yes. We ship from Brentwood, Tennessee, to every US address, including Scotts Valley, Capitola and Watsonville. Shipping is {shipping}, and {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-bangor-me:
   * - NOAA 1991-2020 monthly normals via ACIS (sid BGR; saved at
   *   .daily-job/acis1120/BGR.json and .daily-job/a/BGR-extra.json)
   *   (BANGOR INTERNATIONAL AIRPORT, elev 147 ft: Jan max 28.1 F, min 9.0 F;
   *   Feb max 31.2, min 10.9; Dec max 34.5, min 17.3; Mar max 40.1; Jul max
   *   80.4, min 58.6; snowfall Jan 18.6 in, Feb 17.5, Mar 15.2, Dec 14.7,
   *   Nov 4.3, Apr 3.7, Oct 0.6, sum 74.6 in; precip Oct 4.58 in (wettest),
   *   Feb 2.38 (driest); twelve monthly precip normals sum to 41.71 in)
   * - relhum23.txt / wndspd23.txt have no Bangor row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-bangor-me',
    title: 'Dry eye relief in Bangor, Maine',
    description:
      'Bangor’s January lows average 9°F and about 75 inches of snow fall each winter. How a long heating season dries your eyes, and what helps at home.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Bangor is mostly about the heating season, which runs from October into May. NOAA’s normals for Bangor International Airport put January lows at 9°F and winter snowfall near 75 inches, so furnaces, boilers and wood stoves work for months. Keep heat off your face, add moisture to the rooms you use most, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'A Bangor winter by the numbers' },
      {
        p: `The figures below are NOAA’s 1991–2020 climate normals for Bangor International Airport, at about 150 feet on the west side of the city, as published through the National Weather Service’s NOWData.`,
      },
      {
        list: [
          `January’s normal high is 28.1°F and its normal low is 9.0°F. February is barely warmer, with a low of 10.9°F.`,
          `Snowfall normals add up to about 74.6 inches: 18.6 in January, 17.5 in February, 15.2 in March and 14.7 in December.`,
          `Snow can start in October (0.6 inches) and linger into April (3.7 inches).`,
          `July is the warmest month, with a normal high of 80.4°F.`,
          `Rain and melted snow total about 41.71 inches a year. October is the wettest month at 4.58 inches; February is the driest at 2.38.`,
        ],
      },
      { h: 'Why heated air dries your eyes' },
      {
        p: `Cold air can’t hold much water. When a furnace warms January air from single digits to 68°F, the amount of water in it stays the same, so its relative humidity falls sharply. That dry indoor air pulls moisture from anything it touches, including the tear film on your eyes. A Bangor house may run that cycle for seven months of the year, and the eyes feel it most in late winter, after months of heat.`,
      },
      {
        p: `Forced-air systems add moving air to the dryness. If a floor register sits under your favorite chair or blows across the bed, your eyes take the brunt. [Dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) explains the difference between heating types.`,
      },
      { h: 'Wood stoves, pellet stoves and the camp' },
      {
        p: `Many homes around Bangor heat partly or wholly with wood or pellets, and plenty of families have a camp up north they open in the shoulder seasons. A stove makes the room around it very warm and very dry, and loading it means leaning into heat and a puff of smoke. Some ways to make it easier on the eyes:`,
      },
      {
        list: [
          `Sit across the room from the stove rather than right beside it.`,
          `Turn your face away when you open the door to load wood or pellets.`,
          `Run a humidifier in the rooms where you spend the most time, and refill it daily in stove season.`,
          `Air out the room briefly after a smoky start-up.`,
        ],
      },
      {
        p: `[Dry eyes from a wood stove](/guides/dry-eyes-from-a-wood-stove) goes into more detail.`,
      },
      { h: 'Snow days, shoveling and the drive' },
      {
        p: `Bangor winters ask a lot of outdoor time too. Shoveling, snowblowing and clearing the car mean cold wind and bright reflected light off fresh snow. A car heater blasting on the face during a slow morning commute dries the eyes further.`,
      },
      {
        list: [
          `Wear sunglasses or goggles on bright snow days; they block wind and glare.`,
          `Set the car to defrost so warm air goes to the windshield instead of your eyes.`,
          `Keep your eye drops in an inside coat pocket, not the car, on the coldest days.`,
          `When you come in from the cold, let your eyes adjust for a minute before you start reading or working on a screen.`,
        ],
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits rooms kept warm and dry for months. The Drug Facts panel gives its Uses as: {uses}. {directions}, per the label, and it adds: {tip}.`,
      },
      {
        p: `The panel’s caution reads: {warnings}. Its storage range is {storage}. A Bangor car in January drops far below that, so the bottle should spend winter nights indoors. [Can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) explains what to do if one does. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Bangor' },
      {
        p: `We ship from Brentwood, Tennessee, to Bangor, Brewer, Orono, Hampden and every other US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Delivery dates aren’t promised, and winter storms can slow things down, so order before you run out. If you won’t be home, ask for the package to come in out of the cold. The [Bangor page](/eye-drops/bangor-me) and the [Maine page](/eye-drops/state/maine) have local details.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Heated air explains a lot of winter dryness, but the label sets the limit for a drop: {stopUse} Eye pain, vision changes or one eye that stays worse than the other should go to an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Bangor, Maine get in January?',
        a: `NOAA’s 1991–2020 normals for Bangor International Airport put the January high at 28.1°F and the normal low at 9.0°F, making it the coldest month of the year.`,
      },
      {
        q: 'How much snow does Bangor get a year?',
        a: `About 74.6 inches in NOAA’s normals for Bangor International Airport. January leads with 18.6 inches, followed by February at 17.5 and March at 15.2.`,
      },
      {
        q: 'Why are my eyes so dry in a Maine winter?',
        a: `Heating cold outdoor air drops its relative humidity sharply, and Bangor homes heat for much of the year. Forced air, wood stoves and car heaters all speed up evaporation from the tear film.`,
      },
      {
        q: 'Can I get Quell delivered to Brewer or Orono?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Brewer, Orono and Bangor. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-eureka-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (sid ACV; saved at
   *   .daily-job/acis1120/ACV.json and .daily-job/a/ACV-extra.json)
   *   (ARCATA EUREKA AP, elev 211 ft: monthly normal highs range from 56.2 F
   *   (Dec) to 65.1 F (Sep); Jan max 56.4, min 40.5; Jul max 63.4, min 51.3;
   *   Aug max 64.5, min 51.3; Dec min 39.7; precip Dec 8.95 in (wettest), Jan
   *   7.52, Feb 6.48, Nov 5.71, Jun 0.96, Jul 0.19 (driest), Aug 0.26; twelve
   *   monthly precip normals sum to 46.12 in; snowfall "M")
   * - The station is the Arcata-Eureka airport, north of both cities; named as such.
   * - relhum23.txt / wndspd23.txt have no Arcata/Eureka row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-eureka-ca',
    title: 'Dry eye relief in Eureka, California',
    description:
      'Eureka’s normal highs stay between 56°F and 65°F all year, so many homes run heat even in summer. How that affects your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Eureka starts with a surprise: the heater. NOAA’s normals for the Arcata-Eureka airport show highs between 56°F and 65°F in every month, so many homes and offices run heat in July as well as January. Damp, foggy air outside helps the eyes, but heated rooms, wind off the water and long screen days still dry them. Keep heat off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Eureka’s narrow temperature range' },
      {
        p: `This guide uses NOAA’s 1991–2020 climate normals for the Arcata-Eureka airport, the closest long-term official station, as published through the National Weather Service’s NOWData. The airport sits north of Arcata, at about 210 feet, so it is more exposed to ocean air than downtown Eureka, but the pattern is the same:`,
      },
      {
        list: [
          `The warmest month is September, with a normal high of 65.1°F. The coolest is December, at 56.2°F. That’s a spread of about 9 degrees across the whole year.`,
          `July and August nights average about 51°F; January and December nights average about 40°F.`,
          `December is the wettest month at 8.95 inches, then January at 7.52 and February at 6.48.`,
          `July is the driest at 0.19 inches, and August gets 0.26.`,
          `The twelve monthly normals add up to about 46.12 inches of rain a year.`,
        ],
      },
      { h: 'Why heat runs here in summer' },
      {
        p: `With summer nights near 51°F and fog in the mornings, a Eureka house can feel chilly in August. Furnaces, wall heaters and wood stoves cycle on in the evening at times of year when most of the country is running air conditioning. Heated air holds less relative moisture than the air outside, so the indoor air dries out even while the fog drips off the eaves. The result is that Eureka eyes can feel dry in July for the same reason other people’s do in January.`,
      },
      {
        list: [
          `Keep wall heaters and space heaters pointed away from where you sit and sleep.`,
          `Run a humidifier in the bedroom if the heater runs at night.`,
          `Turn the thermostat down a few degrees at bedtime and use an extra blanket instead.`,
          `Air the house out on mild afternoons; the outdoor air is rarely the dry part.`,
        ],
      },
      { h: 'Wind on the bay, the beaches and the boats' },
      {
        p: `The bay and the open coast shape working life here: fishing boats, the waterfront and long walks on windy beaches. Wind is the main thing that dries the eyes outdoors in Eureka, more than heat or sun. A breeze off the water pulls moisture from the tear film between blinks, and salt spray and blowing sand add irritation. Wraparound glasses help on deck and on the beach, and a hat brim cuts glare when the sun breaks through. People who work on the water can find more in [dry eyes for commercial fishermen](/guides/dry-eyes-for-commercial-fishermen).`,
      },
      { h: 'Gray days, screens and indoor hobbies' },
      {
        p: `Long, gray winters push many people indoors to read, game, sew or work on a laptop. All of those involve close focus, and close focus means fewer full blinks. In a heated room, that’s a fast route to tired, scratchy eyes by evening.`,
      },
      {
        list: [
          `Every 20 minutes or so, look away from the screen or page at something across the room.`,
          `Blink fully and slowly a few times during each break.`,
          `Use a good lamp on dark afternoons rather than squinting.`,
          `Keep the screen a little below eye level.`,
        ],
      },
      {
        p: `[How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why full blinks matter.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The label’s directions read: {directions}. One more line from the panel: {tip}.`,
      },
      {
        p: `Read the caution before you buy: {warnings}. The panel’s storage range is {storage}, which Eureka’s mild weather rarely tests, though a bottle shouldn’t sit on top of a wood stove or a heater. The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Ordering Quell in Humboldt County' },
      {
        p: `We ship from Brentwood, Tennessee, to Eureka, Arcata, McKinleyville, Fortuna and every other US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, and the North Coast is a long way from Tennessee, so order well before you run out. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Eureka page](/eye-drops/eureka-ca) and the [California page](/eye-drops/state/california) have local details.`,
      },
      { h: 'When an eye doctor is the right call' },
      {
        p: `Damp weather can make people assume their eyes can’t be dry, and it can also make them ignore a problem. The label is clear about when to stop and ask: {stopUse} Pain, changing vision, light sensitivity or one eye much worse than the other should be checked by an eye doctor, who can find the cause and decide what to do. The [self-check](/self-check) can help you put symptoms into words; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the warmest month in Eureka, California?',
        a: `September, with a normal high of 65.1°F at the Arcata-Eureka airport in NOAA’s 1991–2020 normals. December is the coolest, with a normal high of 56.2°F.`,
      },
      {
        q: 'How much rain does Eureka get in December?',
        a: `About 8.95 inches, making December the wettest month at the Arcata-Eureka airport. July is the driest, with 0.19 inches.`,
      },
      {
        q: 'Why are my eyes dry in Eureka when it’s so foggy?',
        a: `Fog and damp air outside are easy on the eyes, but cool nights mean heaters run in most months. Heated indoor air is much drier, and heat blowing toward your face speeds evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Arcata or McKinleyville?',
        a: `Yes. We ship from Brentwood, Tennessee, to any US address, including Arcata, McKinleyville and Eureka. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-minot-nd:
   * - NOAA 1991-2020 monthly normals via ACIS (sid MOT; saved at
   *   .daily-job/acis1120/MOT.json and .daily-job/a/MOT-extra.json)
   *   (MINOT INTL AP, elev 1657 ft: Jan max 23.3 F, min 4.4 F; Feb max 27.0,
   *   min 7.7; Dec max 27.2, min 9.3; Nov max 39.7, min 20.6; Jul max 83.8,
   *   min 58.5; Aug max 83.7; precip Jan 0.28 in (driest), Feb 0.29, Dec 0.31,
   *   Jun 3.73 (wettest); twelve monthly precip normals sum to 16.71 in;
   *   snowfall Jan 9.8, Nov 9.2, Dec 8.1, Mar 6.1, Feb 5.4, Apr 4.5, Oct 1.2,
   *   May 0.7, Sep 0.1, sum 45.1 in)
   * - relhum23.txt / wndspd23.txt have no Minot row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-minot-nd',
    title: 'Dry eye relief in Minot, North Dakota',
    description:
      'Minot’s January lows average about 4°F and the month brings just 0.28 inches of precipitation. Why winter air dries your eyes, and how to cope.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Minot means getting through a long, very dry cold season. NOAA’s normals for Minot International Airport put January lows near 4°F, and the whole month brings only 0.28 inches of precipitation. Air that cold holds almost no water, so heated rooms get parched and prairie wind stings outside. Keep heat and wind off your eyes, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Minot’s weather record' },
      {
        p: `These numbers are NOAA’s 1991–2020 climate normals for Minot International Airport, at about 1,660 feet, as published through the National Weather Service’s NOWData.`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 23.3°F and a normal low of 4.4°F. February’s low is 7.7°F and December’s is 9.3°F.`,
          `December, January and February each average about three-tenths of an inch of precipitation or less.`,
          `June is the wettest month at 3.73 inches, and the twelve monthly normals add up to about 16.71 inches a year.`,
          `Snowfall normals total about 45.1 inches. November (9.2) brings nearly as much as January (9.8).`,
          `July and August both have normal highs near 84°F.`,
        ],
      },
      { h: 'Why the cold months are so hard on eyes' },
      {
        p: `The low precipitation in Minot’s winter months reflects how little water very cold air can carry. When that air comes inside and the furnace warms it to room temperature, its relative humidity drops to very low levels. Eyes, lips and skin all lose water to it. The tear film, a thin layer of oil, water and mucus, evaporates faster between blinks, and by evening many people feel a scratchy, tired sensation.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Keep the thermostat a little lower at night; warmer air dries more.`,
          `Check where the furnace registers blow, and move chairs and beds out of their path.`,
          `Close the vent nearest your face in the car and use defrost instead.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas for the house.`,
      },
      { h: 'Prairie wind and the walk across the parking lot' },
      {
        p: `Open prairie surrounds Minot, and on a January morning even a short walk from the car to the door can bring tears to your eyes. That watering is a reflex to cold and wind, not a sign your eyes are well-moistened. Once you’re inside, those reflex tears drain away and the dry indoor air takes over.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or ski goggles on windy days, especially on bright snow.`,
          `Pull a hat brim low and a scarf up to cut the wind across your face.`,
          `Blot watering eyes gently with a clean tissue instead of rubbing.`,
          `Give your eyes a minute to settle after coming in before reading or driving.`,
        ],
      },
      { h: 'Plug-ins, block heaters and early starts' },
      {
        p: `Winter mornings in Minot often mean plugging in the block heater, scraping windows and running the car to warm it. Sitting in a car with the heat blowing hard at your face is one of the fastest ways to dry your eyes before the workday starts. Point the vents at the windshield and your feet, and wait to put drops in until you’re out of the airflow.`,
      },
      { h: 'Harvest dust and summer fields' },
      {
        p: `Summer in Minot is short and pleasant, with June the wettest month. By late summer and fall, though, harvest, gravel roads and dry fields fill the air with fine dust. Farmers and anyone driving rural roads should keep their windows up in dust, wear eye protection around grain and machinery, and rinse their face before touching their eyes. [Dry eyes for farmers](/guides/dry-eyes-for-farmers) has more on the work itself.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which fits a city where indoor air is dry for months. The Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. The panel also asks: {tip}.`,
      },
      {
        p: `The caution on the label reads: {warnings}. For storage, it says: {storage}. On a winter night in Minot, a car falls far below that, so keep your bottle in an inside pocket or a bag you carry indoors. See [can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) if one gets left out. Our [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering Quell in Minot' },
      {
        p: `We ship from Brentwood, Tennessee, to Minot, Burlington, Surrey and every other US address. Checkout works as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, and winter weather can slow packages to the northern plains, so reorder early. Ask for the box to be brought inside promptly on frigid days. See the [Minot page](/eye-drops/minot-nd) and the [North Dakota page](/eye-drops/state/north-dakota) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Cold, dry air explains a lot of winter dryness, but the label is clear about the limits of a drop: {stopUse} Pain, blurred vision that doesn’t clear, light sensitivity or a problem in just one eye should go to an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Minot get in winter?',
        a: `NOAA’s 1991–2020 normals for Minot International Airport put January’s normal high at 23.3°F and its normal low at 4.4°F. February and December lows average 7.7°F and 9.3°F.`,
      },
      {
        q: 'How much snow does Minot, North Dakota get?',
        a: `About 45.1 inches a year in NOAA’s normals for Minot International Airport. January averages 9.8 inches and November 9.2.`,
      },
      {
        q: 'Why do my eyes water outside in Minot but feel dry inside?',
        a: `Cold wind triggers reflex tearing, which drains away once you’re indoors. Heated indoor air in a Minot winter is very dry, so the tear film evaporates quickly and the eyes feel dry again.`,
      },
      {
        q: 'Can Quell be shipped to Burlington or Surrey, ND?',
        a: `Yes. We ship from Brentwood, Tennessee, to any US address, including Burlington, Surrey and Minot. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-saginaw-mi:
   * - NOAA 1991-2020 monthly normals via ACIS (sid MBS; saved at
   *   .daily-job/acis1120/MBS.json and .daily-job/a/MBS-extra.json)
   *   (SAGINAW MBS INTL AP, elev 662 ft: Jan max 29.5 F, min 16.4 F; Feb max
   *   31.8, min 17.3; Dec max 34.7, min 23.1; Jul max 82.2, min 61.2; snowfall
   *   Jan 13.9 in, Dec 11.8, Feb 11.4, Mar 6.0, Nov 3.3, Apr 2.4, Oct 0.2, sum
   *   49.0 in; precip Aug 3.85 in (wettest), Feb 1.77 (driest), Dec 1.85, Jan
   *   1.92; twelve monthly precip normals sum to 32.12 in)
   * - relhum23.txt / wndspd23.txt have no MBS row (the Flint row is a different
   *   station and is not used): no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-saginaw-mi',
    title: 'Dry eye relief in Saginaw, Michigan',
    description:
      'Saginaw gets about 49 inches of snow and its furnaces run from fall to spring. NOAA’s numbers for the Tri-Cities and what helps dry, tired eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Saginaw comes down to winter: NOAA’s normals for MBS International Airport show about 49 inches of snow a year and January lows near 16°F, so furnaces run from fall into spring. Heated rooms, cold wind off the bay and long shifts under plant lighting all dry the eyes. Keep vents off your face, take regular breaks from close work, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The Tri-Cities weather record' },
      {
        p: `The figures here come from NOAA’s 1991–2020 climate normals for MBS International Airport, the station named for Midland, Bay City and Saginaw, which sits between the three at about 660 feet. The same normals appear in the National Weather Service’s NOWData.`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 29.5°F and a normal low of 16.4°F.`,
          `Snowfall normals add up to about 49 inches: 13.9 in January, 11.8 in December and 11.4 in February.`,
          `February is the driest month for total precipitation, at 1.77 inches, and December and January are close behind.`,
          `August is the wettest month, at 3.85 inches. The twelve monthly normals total about 32.12 inches.`,
          `July brings a normal high of 82.2°F and a normal low of 61.2°F.`,
        ],
      },
      { h: 'Heating season from November to April' },
      {
        p: `Saginaw’s winter normals keep heat running for close to half the year. Warming cold air indoors lowers its relative humidity, and the low precipitation from December through February is a hint of how little moisture the outdoor air brings in. That dry indoor air speeds evaporation from the tear film, which is why eyes often feel scratchy by evening in January even if they were fine in October.`,
      },
      {
        list: [
          `Check where the floor or ceiling registers point, and move your recliner or desk out of the path.`,
          `Run a humidifier in the bedroom and keep it clean.`,
          `Turn the heat down a couple of degrees at bedtime.`,
          `Wear glasses rather than nothing on windy days; any lens cuts some of the wind.`,
        ],
      },
      { h: 'Shift work under bright lights' },
      {
        p: `Manufacturing, health care and warehouse jobs fill a lot of Saginaw-area shifts. Many of them involve close inspection under bright lights, screens at workstations, or ventilated air moving through a plant. Each of those adds to dryness: focus lowers the blink rate, and moving air pulls tears away faster. A few changes help:`,
      },
      {
        list: [
          `On breaks, look across the floor or out a window for 20 seconds, and blink fully.`,
          `Wear the safety glasses your job requires; they block air movement as well as debris.`,
          `Keep your eye drops in a locker or bag at room temperature, not in a truck in January.`,
          `Wash your hands before putting drops in, especially after handling oil, coolant or dust.`,
        ],
      },
      {
        p: `[Dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) has more for plant jobs.`,
      },
      { h: 'Ice fishing, deer camp and the bay' },
      {
        p: `Cold-weather outdoor time is a big part of winter around the bay, from ice shanties to hunting blinds. Both mix cold wind with heaters in a small space: a propane heater in a shanty or a stove in a cabin can leave the air hot and dry while the wind outside makes your eyes water. Keep heaters away from your face, wear goggles or sunglasses on the open ice, and step outside for a few minutes if a smoky stove is bothering you. [Dry eyes while ice fishing](/guides/dry-eyes-while-ice-fishing) covers more.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel names its Uses: {uses}. The directions: {directions}. To keep the bottle clean, the panel says: {tip}.`,
      },
      {
        p: `The label carries this caution: {warnings}. Its storage line reads: {storage}. A truck parked at the plant or on the ice in January will go well below that, so carry the bottle in an inside pocket. The [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Ordering Quell in the Saginaw area' },
      {
        p: `We ship from Brentwood, Tennessee, to Saginaw, Bay City, Midland, Frankenmuth and every other US address. Checkout works as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Delivery dates aren’t promised, and lake-effect storms can slow trucks, so order before you run low. See the [Saginaw page](/eye-drops/saginaw-mi) and the [Michigan page](/eye-drops/state/michigan) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for everyday dryness. Its label sets clear limits: {stopUse} If something gets in your eye at work, a splash or a chip, follow your workplace’s eye-safety steps and get it checked; don’t try to wash it out with lubricating drops. An eye doctor can find the cause of ongoing symptoms and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Saginaw get a year?',
        a: `About 49 inches in NOAA’s 1991–2020 normals for MBS International Airport. January averages 13.9 inches, December 11.8 and February 11.4.`,
      },
      {
        q: 'How cold is Saginaw, Michigan in January?',
        a: `January’s normal high at MBS International Airport is 29.5°F and its normal low is 16.4°F, making it the coldest month of the year.`,
      },
      {
        q: 'Why do my eyes get dry working in a plant in Saginaw?',
        a: `Close inspection work lowers your blink rate, and ventilation or heaters moving air through the plant pull moisture from the tear film. Safety glasses, regular breaks and full blinks help.`,
      },
      {
        q: 'Does Quell ship to Bay City or Midland?',
        a: `Yes. We ship from Brentwood, Tennessee, to any US address, including Bay City, Midland and Saginaw. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-hot-springs-ar:
   * - NOAA 1991-2020 monthly normals via ACIS (sid HOT; saved at
   *   .daily-job/acis1120/HOT.json and .daily-job/a/HOT-extra.json)
   *   (HOT SPRINGS ASOS, elev 505 ft: Jan max 52.6 F, min 32.7 F; Dec max
   *   54.4, min 35.0; Jul max 93.3, min 72.2; Aug max 93.2, min 71.1; precip
   *   May 5.89 in (wettest), Apr 5.09, Aug 3.33 (driest), Jan 3.39; twelve
   *   monthly precip normals sum to 52.87 in; snowfall "M")
   * - https://www.nps.gov/hosp/index.htm (Hot Springs National Park: Bathhouse
   *   Row "is home to the Park's historic bathhouses"; visitors can soak in
   *   the thermal water)
   * - relhum23.txt / wndspd23.txt have no Hot Springs row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-hot-springs-ar',
    title: 'Dry eye relief in Hot Springs, Arkansas',
    description:
      'Hot Springs summers run to about 93°F, and thermal baths, lake days and AC all affect your eyes. NOAA’s numbers and simple ways to stay comfortable.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Hot Springs means planning around summer heat, air conditioning and time on the water. NOAA’s normals for the Hot Springs airport put July and August highs above 93°F, and the city’s thermal baths and lakes add steam, glare and wind. Keep cold AC and hot steam off your face, wear sunglasses on the lake, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Hot Springs weather at a glance' },
      {
        p: `This guide uses NOAA’s 1991–2020 climate normals for the Hot Springs airport weather station, at about 500 feet, as published through the National Weather Service’s NOWData.`,
      },
      {
        list: [
          `July’s normal high is 93.3°F and August’s is 93.2°F. Summer nights stay in the low 70s.`,
          `January’s normal high is 52.6°F, with a normal low of 32.7°F, right around freezing.`,
          `May is the wettest month at 5.89 inches, followed by April at 5.09.`,
          `August is the driest at 3.33 inches, which still means regular rain.`,
          `The twelve monthly normals add up to about 52.87 inches a year.`,
        ],
      },
      { h: 'Thermal baths, steam and your eyes' },
      {
        p: `Hot Springs National Park, on the National Park Service’s own description, still invites visitors to soak in its thermal water, and Bathhouse Row holds the park’s historic bathhouses. Warm water and steam feel soothing, but very hot air on the face can leave eyes feeling dry afterward, and stepping straight from a steamy room into an air-conditioned lobby or car is a sharp change.`,
      },
      {
        list: [
          `Close your eyes and rest them while you soak instead of staring at the ceiling.`,
          `Keep your face out of the hottest steam, and splash it with cool, clean water now and then.`,
          `Wait until you’re dressed and your hands are clean before using eye drops.`,
          `Give your eyes a few minutes in the shade before driving off.`,
        ],
      },
      {
        p: `[Dry eyes in a sauna](/guides/dry-eyes-in-a-sauna) explains what heat does to the tear film.`,
      },
      { h: 'Lake days and summer glare' },
      {
        p: `Boats, docks and swimming spots on the lakes around town are where many locals spend a summer weekend. Wind across open water, reflected sunlight and boat speed all pull moisture from the eyes. Polarized wraparound sunglasses cut glare and some of the wind; a hat with a brim helps when you’re anchored in the sun. Keep your eye drops in a shaded bag on the boat, since a deck in July can run past the label’s storage range of {storage}. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more.`,
      },
      { h: 'AC season from May to September' },
      {
        p: `With normal highs in the 80s by May and the 90s through August, air conditioning runs much of the day in homes, restaurants, shops and cars. AC removes moisture as it cools, and vents at face height speed evaporation from the tear film. That combination is behind a lot of the dry, gritty feeling people describe on summer evenings.`,
      },
      {
        list: [
          `Point car vents at your chest or the windshield.`,
          `At a restaurant or casino, choose a seat away from ceiling vents if you can.`,
          `When reading or using a phone in a cold room, look away now and then and blink fully.`,
          `On cooler spring and fall days, open the windows and give the AC a rest.`,
        ],
      },
      { h: 'Wooded hills and trail dust' },
      {
        p: `The hills around Hot Springs draw hikers and mountain bikers, especially in spring and fall. Pollen, dust from dry trails in late summer and branches at face height all bother the eyes. Wear clear or tinted glasses on wooded trails, rinse your face at the trailhead before touching your eyes, and carry a clean tissue for watering.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Its directions are: {directions}. One more line from the panel: {tip}.`,
      },
      {
        p: `Read the caution before buying: {warnings}. The label’s storage range is {storage}. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Hot Springs' },
      {
        p: `We ship from Brentwood, Tennessee, to Hot Springs, Hot Springs Village, Lake Hamilton and every other US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so reorder before your bottle runs low, and bring a summer package in quickly. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. The [Hot Springs page](/eye-drops/hot-springs-ar) and the [Arkansas page](/eye-drops/state/arkansas) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Heat, steam and lake glare explain a lot, but the label sets the line: {stopUse} If lake water or something else gets into your eye and it hurts or your vision changes, get it checked rather than reaching for a drop. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Hot Springs, Arkansas get in summer?',
        a: `NOAA’s 1991–2020 normals for the Hot Springs airport put the July high at 93.3°F and the August high at 93.2°F, with summer lows in the low 70s.`,
      },
      {
        q: 'What is the rainiest month in Hot Springs?',
        a: `May, with 5.89 inches in NOAA’s normals for the Hot Springs airport. April follows with 5.09 inches, and August is the driest month at 3.33.`,
      },
      {
        q: 'Can a thermal bath make my eyes feel dry?',
        a: `Very hot steam on your face, followed by cold air-conditioned rooms, can leave eyes feeling dry or tired. Rest your eyes closed while you soak and give them a few minutes before driving.`,
      },
      {
        q: 'Does Quell ship to Hot Springs Village?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Hot Springs Village and Hot Springs. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-lufkin-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (sid LFK; saved at
   *   .daily-job/acis1120/LFK.json and .daily-job/a/LFK-extra.json)
   *   (LUFKIN ANGELINA COUNTY AIRPORT, elev 286 ft: Jan max 59.8 F, min 37.5 F;
   *   Dec min 39.3; Jul max 93.3, min 71.7; Aug max 93.7 (hottest), min 71.1;
   *   Jun max 90.3; precip Oct 4.73 in (wettest), Dec 4.68, Jan 4.66, Jul 3.34
   *   (driest), Apr 3.69; twelve monthly precip normals sum to 50.27 in;
   *   snowfall "M")
   * - https://www.fs.usda.gov/r08/texas/recreation/angelina-national-forest
   *   (153,179 acres in Angelina, Nacogdoches, San Augustine and Jasper
   *   counties; on the north and south shores of Sam Rayburn Reservoir, a
   *   114,500-acre lake on the Angelina River; supervisor's office in Lufkin)
   * - relhum23.txt / wndspd23.txt have no Lufkin row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-lufkin-tx',
    title: 'Dry eye relief in Lufkin, Texas',
    description:
      'Lufkin gets steady rain all year, yet August highs near 94°F keep AC running for months. NOAA’s numbers for East Texas and practical eye comfort tips.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Lufkin is mostly about the indoors. NOAA’s normals for the Angelina County Airport show about 50 inches of rain a year, spread across every month, so the outdoor air is rarely the problem. Highs near 94°F in July and August keep air conditioning running from late spring into fall, and sawdust, lake glare and screens add to it. Keep vents off your face, wear eye protection outdoors, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Lufkin’s climate numbers' },
      {
        p: `The record here is NOAA’s 1991–2020 climate normals for Lufkin’s Angelina County Airport, at about 290 feet, as published through the National Weather Service’s NOWData.`,
      },
      {
        list: [
          `August is the hottest month, with a normal high of 93.7°F. July is nearly the same at 93.3°F, and June reaches 90.3°F.`,
          `Rain is unusually even: every month falls between 3.34 inches (July) and 4.73 inches (October).`,
          `The twelve monthly normals add up to about 50.27 inches a year.`,
          `January’s normal high is 59.8°F and its normal low is 37.5°F.`,
        ],
      },
      { h: 'Piney woods air, indoor dryness' },
      {
        p: `With rain in every month and pine forest on every side, Lufkin feels green and damp most of the year. That outdoor moisture doesn’t follow you inside. From May through September, air conditioners in homes, schools, the hospital and the car remove humidity as they cool. A vent blowing on your face dries the tear film between blinks, and people who move from the porch to the office and back many times a day feel it most.`,
      },
      {
        list: [
          `Angle the car vents low and away from your eyes on the drive to work.`,
          `Move a desk fan or sit out of the path of a ceiling register.`,
          `On mild spring and fall days, open the windows and let the AC rest.`,
          `If you read or scroll in a cold room, blink fully every few minutes.`,
        ],
      },
      { h: 'Timber country: sawdust, chips and long days' },
      {
        p: `Timber and wood products have long been part of work around Lufkin, from logging crews in the forest to mills, cabinet shops and home workshops. Sawdust and wood chips irritate the eyes, and rubbing them pushes particles around. Eye protection with side shields matters more than any drop here. Rinse your face and wash your hands before touching your eyes, and if a chip or splinter seems stuck, get it seen instead of trying to rinse it with lubricating drops. [Dry eyes for loggers](/guides/dry-eyes-for-loggers) and [dry eyes for woodworkers](/guides/dry-eyes-for-woodworkers) go further.`,
      },
      { h: 'The national forest and the big lake' },
      {
        p: `The U.S. Forest Service runs the Angelina National Forest from a supervisor’s office in Lufkin. Its 153,179 acres reach into Angelina, Nacogdoches, San Augustine and Jasper counties and line the north and south shores of Sam Rayburn Reservoir, which the Forest Service lists at 114,500 acres. That’s a lot of open water for fishing, boating and camping.`,
      },
      {
        list: [
          `Polarized sunglasses cut glare off the reservoir on bright afternoons.`,
          `Boat speed adds wind; wraparound glasses keep it out of your eyes.`,
          `Campfire smoke stings, so sit upwind and step back when it shifts.`,
          `Keep eye drops in a shaded cooler bag, not in a hot truck or on the console of a boat.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel names its Uses: {uses}. It directs: {directions}. A hygiene line on the panel says: {tip}.`,
      },
      {
        p: `The label’s caution: {warnings}. Its storage range is {storage}. An East Texas truck cab in August gets much hotter than that, so carry the bottle with you. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Lufkin' },
      {
        p: `We ship from Brentwood, Tennessee, to Lufkin, Diboll, Huntington, Nacogdoches and every other US address. Checkout works as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so reorder before you’re out. See the [Lufkin page](/eye-drops/lufkin-tx) and the [Texas page](/eye-drops/state/texas) for local details.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `A lubricating drop is for everyday dryness. The label spells out its limits: {stopUse} Pain, blurred vision that won’t clear, light sensitivity, or an eye injury from work or the woods calls for an eye doctor, who can find the cause and decide what to do. The [self-check](/self-check) helps you describe what you’re feeling before a visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Lufkin, Texas get in the summer?',
        a: `NOAA’s 1991–2020 normals for Lufkin’s Angelina County Airport put the August high at 93.7°F and the July high at 93.3°F, with summer lows near 71°F.`,
      },
      {
        q: 'What is the rainiest month in Lufkin?',
        a: `October, with 4.73 inches in NOAA’s normals for the Angelina County Airport. Rain is spread evenly, and even the driest month, July, averages 3.34 inches.`,
      },
      {
        q: 'How big is Sam Rayburn Reservoir?',
        a: `The U.S. Forest Service lists Sam Rayburn Reservoir at 114,500 acres on the Angelina River. The Angelina National Forest lines its north and south shores.`,
      },
      {
        q: 'Can I get Quell delivered to Diboll or Nacogdoches?',
        a: `Yes. We ship from Brentwood, Tennessee, to any US address, including Diboll, Nacogdoches and Lufkin. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-dad',
    title: 'Christmas gifts for dad',
    description:
      'Christmas gifts for dad that fix a daily annoyance: the drive, the garage, game day and his screen time, plus when eye drops belong in his stocking.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `The Christmas gifts dads keep using are the ones that fix a small, daily annoyance: a brighter flashlight for the garage, warm gloves for scraping the windshield, a good grill thermometer, the next book in a series he’s reading, or a day out with you. If he’s mentioned scratchy eyes after driving or a long game on TV, lubricating eye drops can be a useful stocking addition once you’ve checked the label’s allergy caution.`,
      },
      { h: 'What to get a dad who says he doesn’t want anything' },
      {
        p: `Most dads who claim to want nothing are telling the truth about big-ticket items and leaving out a list of small irritations. The trick is to collect those in November and December, before you shop.`,
      },
      {
        list: [
          `Listen for complaints. “These gloves are shot” or “I can never find a pen that works” is a gift list in disguise.`,
          `Look at what’s worn out: the wallet with a split seam, the slippers with flattened soles, the coffee mug with a chip.`,
          `Ask whoever lives with him what he keeps borrowing or putting off buying for himself.`,
          `Offer time instead of things: breakfast out, a ball game, help clearing out the garage, or a drive to see the lights.`,
        ],
      },
      { h: 'Gifts for the dad who drives a lot' },
      {
        p: `If he commutes, drives for work or does the long holiday drive to see family, small car upgrades get noticed every day. A snow brush with a long handle, a phone mount that holds steady, a heated seat cushion for an older truck or a good pair of polarized sunglasses for low winter sun all earn their keep.`,
      },
      {
        p: `Long drives also explain a lot of dad’s tired eyes. The heater blows dry air at face height, and focusing on the road means fewer full blinks. Telling him to point the vents at the windshield is free; [why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) explains the rest if he’s curious.`,
      },
      { h: 'For game days and movie nights' },
      {
        p: `December and January are packed with football, bowl games and holiday movies, and many dads plan their weekends around them. A heavy throw for the recliner, a tray table that actually holds a plate, a subscription to the channel his team plays on, or a box of his favorite snacks fits right into that routine.`,
      },
      {
        p: `Hours in front of a big screen are also hours of slower blinking, which is why eyes can feel gritty by the fourth quarter. A lamp on behind the TV makes the room easier on the eyes than watching in the dark. [Dry eyes when binge-watching TV](/guides/dry-eyes-when-binge-watching-tv) has a few more easy fixes.`,
      },
      { h: 'For the garage, the grill and the yard' },
      {
        list: [
          `A rechargeable work light or headlamp, so he isn’t holding a phone flashlight in his teeth.`,
          `A quick-read grill thermometer or a long set of tongs and a sturdy spatula.`,
          `Insulated work gloves or a lined canvas jacket for cold mornings outside.`,
          `A small shop vacuum or a rolling tool cart for a cramped garage.`,
          `Comfortable safety glasses he’ll actually wear for the mower, the saw or the leaf blower.`,
        ],
      },
      {
        p: `Safety glasses do two jobs: they stop debris, and they block some of the wind that dries the eyes during yard work.`,
      },
      { h: 'Gifts to split with your siblings' },
      {
        p: `Bigger gifts are easier when brothers and sisters chip in. A new recliner, a smart doorbell, a weekend trip, a framed family photo session, or tickets for the whole family to a game all work well as group gifts. Decide early who orders, who wraps, and whether it ships to one sibling or straight to Dad, so it doesn’t get bought twice. If you’re the one coordinating, a shared note listing each person’s share keeps things simple.`,
      },
      { h: 'Giving your dad eye drops without it feeling like a hint' },
      {
        p: `Nobody wants a gift that says “you’re getting old.” Eye drops land well when they answer something he’s actually said, like his eyes feeling dry after a long drive, a late night at the computer or a day in the deer stand. Tuck the bottle into his stocking with the gloves and the flashlight, rather than putting it under the tree alone.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. Check two things before buying:`,
      },
      {
        list: [
          `Allergies. The label cautions: {warnings}. Quell contains emu oil, so ask if you’re not sure. [Egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell) explains why.`,
          `Other eye drops. The label doesn’t cover using it with other drops. If he uses anything his eye doctor prescribed, he should ask that doctor or a pharmacist first.`,
        ],
      },
      {
        p: `Write a short note to go with it. {directions}, according to the label, and it adds: {milky}. Knowing the color is normal saves him a worried phone call on Christmas afternoon.`,
      },
      { h: 'Getting it to him' },
      {
        p: `If you won’t see him in person, ship the order straight to his address. Enter his name and address at checkout and your own email, so the tracking comes to you instead of spoiling the surprise. Checkout has no gift message or gift wrap, so if you want it wrapped, ship it to yourself first. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We ship from Brentwood, Tennessee, and don’t promise delivery by a date, so order in early December. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. You can [order from the home page](/#buy).`,
      },
      { h: 'Stocking stuffers for dad' },
      {
        list: [
          `A pocket knife or multitool, if he doesn’t already carry one.`,
          `Hand warmers for early mornings outside or in the stands.`,
          `A lens cloth and a spare glasses case for the truck.`,
          `His favorite jerky, hot sauce or coffee.`,
          `A deck of cards or a new puzzle book.`,
        ],
      },
      { h: 'When his eyes need more than a gift' },
      {
        p: `If dad’s eyes hurt, his vision has changed, or he squints at road signs he used to read easily, the gift that matters is getting him to an eye doctor. The label says to stop and ask a doctor in these cases: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth acting on.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a dad who says he doesn’t want anything for Christmas?',
        a: `Listen for small complaints and replace what’s worn out, like gloves, slippers or a wallet. Time together, such as breakfast out or a game, also works well for dads who don’t want more things.`,
      },
      {
        q: 'Is it weird to give your dad eye drops for Christmas?',
        a: `Not if he’s mentioned dry or tired eyes. Put the bottle in his stocking with other practical things, and check the label’s egg and bird allergy caution before you buy.`,
      },
      {
        q: 'Can I ship Quell straight to my dad’s house?',
        a: `Yes. Enter his name and address for shipping and your own email at checkout, so tracking comes to you. There’s no gift message option, so add a note by phone or text.`,
      },
      {
        q: 'What are good stocking stuffers for dad?',
        a: `A multitool, hand warmers, a lens cloth for his glasses, his favorite snack and a puzzle book are easy wins. A bottle of lubricating eye drops fits if he’s said his eyes feel dry.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-mom',
    title: 'Christmas gifts for mom',
    description:
      'Christmas gifts for mom that give her comfort or time back: cozy evenings, reading and crafts, family photos, and when eye drops are a kind addition.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Many moms value gifts that give them comfort or time back: a soft robe, a framed family photo, a class you take with her, a book from her favorite author, or one holiday chore taken off her list. If she mentions dry, tired eyes from reading, crafts or a heated house, a bottle of lubricating eye drops is a thoughtful extra for her stocking after you check the label’s allergy caution.`,
      },
      { h: 'Think about how her December goes' },
      {
        p: `For a lot of mothers, the holidays are work. She may be the one hosting, cooking, shopping for everyone, wrapping late at night and keeping track of who’s coming when. A gift that lightens that load can mean more than anything in a box.`,
      },
      {
        list: [
          `Take over a whole task: you buy and wrap the gifts for her side of the family, or you cook Christmas Eve dinner.`,
          `Book a house cleaning for the week before guests arrive.`,
          `Give a gift card to the restaurant she likes, with a date already picked.`,
          `Make a coupon for a month of rides, errands or help with tech questions, and then actually follow through.`,
        ],
      },
      { h: 'Comfort for cold evenings' },
      {
        p: `Winter gifts that make the house cozier get used every night. A plush robe, warm socks with grippy soles, a heated throw, a nice candle or a tin of good tea all fit. If her house runs the furnace hard, a small bedroom humidifier is a practical gift too: heated winter air is dry, and dry air pulls moisture from skin, lips and eyes. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains what to expect from one.`,
      },
      { h: 'For the mom who reads, sews or does puzzles' },
      {
        p: `Close, focused work is relaxing, but it also slows blinking, and slower blinking lets the tear film thin out. That’s one reason eyes feel tired after an evening of knitting, quilting, a thick novel or a thousand-piece puzzle.`,
      },
      {
        list: [
          `A bright, adjustable floor or table lamp aimed at her work, not her eyes.`,
          `A hands-free magnifier for fine stitching or small print.`,
          `A puzzle board with a cover, so a project can stay out for days.`,
          `An e-reader with adjustable text size, if she likes reading in bed.`,
          `A gift card to her fabric, yarn or book shop.`,
        ],
      },
      {
        p: `Encourage breaks too: looking up across the room every so often and blinking slowly helps. [Dry eyes when sewing or knitting](/guides/dry-eyes-when-sewing-or-knitting) has more for crafters.`,
      },
      { h: 'Photos, calls and the family group chat' },
      {
        p: `If you live far from her, a digital photo frame that family can send pictures to, or a printed album of the year’s photos, keeps everyone close. A phone with bigger text, a stand that holds it for video calls, or simply setting up a weekly call time can be the gift she talks about most. Long video calls are screen time, though, so a stand that sits a little below eye level is easier on her eyes than holding the phone up close.`,
      },
      { h: 'If she wears makeup' },
      {
        p: `Many moms who use eye drops also wear eye makeup, and they wonder about order. The Quell label doesn’t mention makeup. Washing hands and keeping the bottle tip from touching lashes or skin matter more than the order. [Eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) walks through the options.`,
      },
      { h: 'How to give Quell to your mom' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits heated rooms and long reading sessions. The panel lists its Uses as: {uses}. The directions are short: {directions}. Before you buy, check:`,
      },
      {
        list: [
          `The allergy line: {warnings}. One of the ingredients is emu oil; [emu oil in eye drops](/guides/emu-oil-in-eye-drops) explains what it is.`,
          `Whether she already uses a prescribed eye drop. The label doesn’t cover using it with other drops, so she should check with her eye doctor or pharmacist.`,
          `Whether she’d rather pick her own. If you’re not sure, ask her casually what she uses now.`,
        ],
      },
      {
        p: `Add a note about the look of it, too. The label says: {milky}. A mom who opens a bottle and sees a brown, cloudy drop may assume it’s spoiled unless you tell her that’s how it’s made.`,
      },
      { h: 'Ordering and timing' },
      {
        p: `Checkout is as a guest, for buyers 18 and older. Ship to her address with your email on the order, so tracking and the order emails come to you, or ship to yourself if you’re wrapping it with other things. There’s no gift message or wrapping at checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which works if you’re getting one for her and one for yourself. We ship from Brentwood, Tennessee, and don’t promise a delivery date, so early December is the safe time to order. [See the bottle and order here](/#buy).`,
      },
      { h: 'A gift that gets her to the eye doctor' },
      {
        p: `Some moms put everyone else’s appointments first. If she’s complained about blurry vision, eye pain, light bothering her, or one eye that’s worse than the other, the label is clear that a drop isn’t the answer: {stopUse} Offering to drive her to an eye exam, or to watch the kids while she goes, may be the most useful thing you give her this year. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'What do you get your mom for Christmas when she says she wants nothing?',
        a: `Give her time or comfort instead of more things: take over a holiday task, book a cleaning, or plan a meal out together. A cozy robe or a framed family photo also tends to land well.`,
      },
      {
        q: 'Are eye drops a good Christmas gift for mom?',
        a: `They can be, if she’s mentioned dry or tired eyes. Check the label’s egg and bird allergy caution first, and make sure she doesn’t already use a prescribed eye drop.`,
      },
      {
        q: 'What is a good gift for a mom who sews or reads a lot?',
        a: `A bright adjustable lamp, a hands-free magnifier or a gift card to her favorite shop. Close work slows blinking, so a nudge to take breaks helps her eyes too.`,
      },
      {
        q: 'Can I have Quell shipped to my mom with my email on the order?',
        a: `Yes. Put her name and address in the shipping fields and your email on the order, so the tracking and order emails come to you. Checkout has no gift message, so tell her it’s coming.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-your-husband',
    title: 'Christmas gifts for your husband',
    description:
      'Christmas gift ideas for your husband: daily upgrades, his work week, time together, his hobbies, and how to give eye drops so you each have your own.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Good Christmas gifts for a husband usually come from paying attention to his year: an upgrade to something he uses every day, gear for a hobby he keeps postponing, a plan for time together, or something that makes his work week easier. If long hours at a screen or behind the wheel leave his eyes dry, add a bottle of lubricating eye drops to his stocking, after checking the label’s egg and bird allergy caution.`,
      },
      { h: 'Upgrade something he uses daily' },
      {
        p: `You see your husband’s routine up close, which is an advantage no one else on his list has. Look at the things he touches every morning and evening, and pick the one that’s worn, cheap or annoying.`,
      },
      {
        list: [
          `Boots or shoes he wears until they fall apart.`,
          `A coffee maker or travel mug that keeps coffee hot through the commute.`,
          `Noise-canceling headphones if he works in a loud space or travels.`,
          `A slim wallet, a key organizer or a charging station for the nightstand.`,
          `A quality pillow, if he keeps folding his in half.`,
        ],
      },
      { h: 'Gifts for his work week' },
      {
        p: `If he spends the day at a desk, a monitor stand or laptop riser makes a real difference: setting the screen a little below eye level means the upper lid covers more of the eye, and less of the surface is exposed to air. A good desk lamp cuts glare. If he’s on the road, a phone mount and a seat cushion help. If he works on his feet, insoles and warm socks get used every shift.`,
      },
      {
        p: `Screen-heavy jobs come with fewer, shallower blinks, which is a big reason eyes feel dry by late afternoon. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers simple habits he can try at work.`,
      },
      { h: 'Time together as the gift' },
      {
        p: `For a lot of couples, the gift that matters most is planned time. Book the dinner, the concert, the game or the weekend away, and handle the details: the reservation, the babysitter, the dog sitter. Put the tickets or a printed plan in a card. If the trip involves a flight, the dry air on planes is hard on the eyes; [dry eyes on a plane](/guides/dry-eyes-on-a-plane) has tips you can both use.`,
      },
      { h: 'For his hobbies' },
      {
        list: [
          `Fishing: polarized sunglasses, a new reel or a guided trip.`,
          `Woodworking or repairs: clamps, a quality tape measure, or safety glasses that seal at the sides.`,
          `Cooking: a cast-iron pan, a knife sharpener or a smoker accessory.`,
          `Gaming: a comfortable headset or a new game he’s mentioned.`,
          `Running or cycling: wind-blocking glasses and a good pair of gloves.`,
        ],
      },
      {
        p: `Many of these hobbies put wind, dust or screens in front of his eyes, so protective glasses are a gift with more than one benefit.`,
      },
      { h: 'Each of you gets your own bottle' },
      {
        p: `If you both use eye drops, buy two bottles instead of one to share. Using the same bottle passes germs from one person’s eye area to the next, and the label’s own hygiene line points the same way: {tip}. [Can you share eye drops?](/guides/can-you-share-eye-drops) explains why separate bottles matter. Two or more bottles also count toward free shipping, since orders of {freeBottles} or more ship free.`,
      },
      {
        p: `If you pay with HSA or FSA money, a spouse’s over-the-counter medicine can qualify under IRS rules, but plans differ. [Can I use my HSA for my spouse’s eye drops?](/guides/can-i-use-my-hsa-for-my-spouses-eye-drops) explains, and your plan administrator has the final word.`,
      },
      { h: 'What to check on the label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. Read the caution before you buy: {warnings}. If he already uses a prescribed eye drop, the label doesn’t cover using the two together, so he should ask his eye doctor or pharmacist. The directions: {directions}. All of it is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Keeping it a surprise' },
      {
        p: `If you share an email account or a front porch, plan ahead. Checkout is as a guest for buyers 18 and older, and the order confirmation and tracking go to the email you enter, so use your own address. Ship to your workplace or a friend’s house if he usually brings in the packages. Shipping is {shipping}; we ship from Brentwood, Tennessee, and don’t promise a delivery date, so order in early December. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [Order Quell here](/#buy).`,
      },
      { h: 'Stocking stuffers for your husband' },
      {
        list: [
          `A pair of wool socks and some hand warmers.`,
          `A new phone charging cable that’s actually long enough.`,
          `His favorite candy from childhood.`,
          `A lens cleaning kit for his glasses or sunglasses.`,
          `Lip balm for winter, which most men won’t buy themselves.`,
        ],
      },
      { h: 'If his eyes bother him more than he lets on' },
      {
        p: `Some husbands will put up with sore eyes for months rather than book an appointment. If he’s squinting at the TV, rubbing his eyes a lot, or complaining of pain or blurry vision, the label is clear: {stopUse} Helping him get to an eye doctor, who can find the cause and decide what to do, is worth more than any drop. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'What should I get my husband for Christmas this year?',
        a: `Look at his daily routine and upgrade something worn or annoying, like boots, a travel mug or headphones. Planned time together, such as a dinner or weekend away, is also a gift many husbands value.`,
      },
      {
        q: 'Should my husband and I share a bottle of eye drops?',
        a: `It’s better to have separate bottles. Sharing passes germs from one person to the other, and the label says not to touch the tip to any surface. Two bottles also count toward the free-shipping threshold.`,
      },
      {
        q: 'Is a laptop stand a good gift for a husband who works at a computer?',
        a: `Yes. Raising or lowering the screen so it sits a little below eye level lets the upper lid cover more of the eye, which can make long screen days more comfortable.`,
      },
      {
        q: 'How do I keep a Quell order a surprise from my husband?',
        a: `Use your own email at checkout so the confirmation and tracking come to you, and ship to your workplace or a friend if he usually brings in the mail.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-your-wife',
    title: 'Christmas gifts for your wife',
    description:
      'Christmas gifts for your wife that show you listened: her running wish list, time off her plate, a planned outing, her nightstand, and her stocking.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `The Christmas gifts wives remember usually show you were listening: the thing she mentioned once in October, a weekend off from the work she always does, an outing planned down to the babysitter, or a comfort upgrade for her nightstand. If she’s said her eyes feel dry from screens or a heated bedroom, lubricating eye drops can go in her stocking alongside the fun things, after you check the label’s allergy caution.`,
      },
      { h: 'Start a running list now' },
      {
        p: `Most good gifts for a spouse come from an offhand comment. Make a note on your phone titled with her name and add to it all year: the sweater she paused over, the restaurant a friend recommended, the book she meant to read, the tool or kitchen gadget she complained about. In December, the list does the shopping for you. If you’re starting late, scroll back through your texts and her saved links; wish lists hide there.`,
      },
      { h: 'Gifts that take something off her plate' },
      {
        list: [
          `A house cleaning, or a season of lawn care or snow removal.`,
          `A weekend morning to herself every week in January, with you handling breakfast, kids and pets.`,
          `A meal delivery plan for the busy weeks after the holidays.`,
          `You handling the holiday cards, the teacher gifts or the family travel booking this year.`,
        ],
      },
      {
        p: `If you choose one of these, write it on a card with specific dates so it reads as a plan and not a promise.`,
      },
      { h: 'Plan the whole outing' },
      {
        p: `An experience counts most when she doesn’t have to organize it. Pick the show, the spa day, the cooking class or a night away at an inn, then arrange the sitter, the reservation and the drive. If it’s an evening at a theater or a long drive in the dark, her eyes may feel dry by the end; a bottle in her purse is handy for long evenings out. [Carrying eye drops in a purse or pocket](/guides/carrying-eye-drops-in-a-purse-or-pocket) has tips on keeping it clean and at the right temperature.`,
      },
      { h: 'For her nightstand' },
      {
        list: [
          `A small humidifier, if the bedroom air gets dry when the heat runs.`,
          `A soft sleep mask and a good pair of earplugs.`,
          `A reading light that clips to the book or the headboard.`,
          `The next book on her list, in the format she prefers.`,
          `A charging stand that puts the phone out of reach of the pillow.`,
        ],
      },
      {
        p: `That last one has a quiet benefit. Scrolling in the dark slows blinking, and many people notice drier eyes in the morning after a late night on the phone. [Dry eyes from looking at your phone in bed](/guides/dry-eyes-from-looking-at-your-phone-in-bed) explains why.`,
      },
      { h: 'If she works long shifts or long screen days' },
      {
        p: `A wife who teaches, nurses, drives or works at a computer all week often comes home with tired eyes. Gifts that make her workday easier say you’ve noticed: compression socks or supportive shoes for long shifts, a monitor riser for the home office, an insulated lunch bag, or an upgrade to the work bag she carries every day.`,
      },
      { h: 'Are eye drops a romantic gift? Put them in the stocking' },
      {
        p: `Eye drops won’t be the gift she shows her friends, and that’s fine. They belong in the stocking with the chocolate, the lip balm and the fuzzy socks, where practical things are expected. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Drug Facts panel lists its Uses as: {uses}.`,
      },
      { h: 'Read these on the label first' },
      {
        list: [
          `The allergy caution: {warnings}. Quell contains emu oil.`,
          `How it’s used: {directions}.`,
          `How it looks: {milky}. Tell her so she isn’t surprised by the color.`,
          `What it doesn’t cover: using it with other drops, or with contact lenses. If she uses either, she should ask her eye doctor or pharmacist.`,
        ],
      },
      {
        p: `The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering so she doesn’t see it' },
      {
        p: `If you share an email account or a calendar with your wife, think before you order anything for her. Order confirmations and tracking go to the email you enter at checkout, so use one she doesn’t read, and ship to your work if she’s usually the one home when packages arrive. Checkout is as a guest for buyers 18 and older, there’s no gift wrap or message option, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We ship from Brentwood, Tennessee, without promising a delivery date, so order early in December. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [Order here](/#buy).`,
      },
      { h: 'When her eyes need a doctor, not a gift' },
      {
        p: `If she’s mentioned eye pain, changes in her vision or one eye that keeps bothering her, a drop isn’t the answer, and the label says so: {stopUse} Encourage her to book an eye exam, and offer to take care of whatever would keep her from going. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What do you get your wife for Christmas when she says she has everything?',
        a: `Give her time or a planned experience instead of more things: a weekend morning off, a house cleaning, or a show with the sitter already booked. A running list of things she mentions helps too.`,
      },
      {
        q: 'Are eye drops a good stocking stuffer for my wife?',
        a: `They can be, if she’s said her eyes feel dry. Put them in the stocking with other practical things, and check the egg and bird allergy caution on the label before buying.`,
      },
      {
        q: 'How do I order a gift without my wife seeing the email?',
        a: `Use an email address she doesn’t check at checkout, since the order confirmation and tracking go there, and ship to your workplace if she usually brings in the packages.`,
      },
      {
        q: 'What is a good nightstand gift for my wife?',
        a: `A small humidifier, a sleep mask, a clip-on reading light or a charging stand that keeps the phone away from the pillow are all useful for the bedroom.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-radiology-techs',
    title: 'Dry eyes for radiology techs',
    description:
      'Radiology techs move between dim control rooms, cool scanner suites and bright halls all shift. Why that dries the eyes, and habits that fit the work.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Radiology techs get dry eyes from the mix their shift demands: cool, ventilated scanner rooms, dim control rooms with bright monitors, masks that push breath upward, and long stretches of focused work positioning patients and checking images. Blinking slows when you concentrate, and moving air thins the tear film faster. Plan short eye breaks between exams, keep airflow off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why radiology techs get dry eyes' },
      {
        p: `A tech’s eyes rarely get to settle in one environment. A shift might start with portable X-rays on the wards, move to a CT or MRI suite, and end in a dim room checking images before sending them on. Each setting asks something different of the eyes:`,
      },
      {
        list: [
          `Scanner rooms are often kept cool and well ventilated for the equipment, and moving air speeds evaporation from the tear film.`,
          `Control rooms tend to be dim, with bright monitors that hold your attention, so blinks get fewer and shallower.`,
          `Hallways and patient rooms are brightly lit, so your eyes keep readjusting as you go back and forth.`,
          `Masks can direct warm, moist breath up across the eyes and then let it cool, which many people find drying over a long shift.`,
        ],
      },
      {
        p: `Radiologists who spend their shifts reading images have their own guide, [dry eyes from reading medical images](/guides/dry-eyes-reading-medical-images). Techs face more movement, more patient contact and more time in the scanner room itself.`,
      },
      { h: 'Control rooms and image checks' },
      {
        p: `Checking positioning, exposure and motion on each image means staring hard at a monitor for a few seconds at a time, dozens of times a shift. That’s the kind of focus that lets blinking stall. Small changes help:`,
      },
      {
        list: [
          `Turn up the room lighting a notch if your department allows, so the monitor isn’t the only bright thing in view.`,
          `Set the monitor slightly below eye level and about an arm’s length away.`,
          `After each image check, look away at something across the room and blink fully twice.`,
          `Keep a desk fan or vent from blowing across the console toward your face.`,
        ],
      },
      { h: 'Lead aprons, positioning and long days on your feet' },
      {
        p: `Positioning patients means leaning over tables, lifting, and working close to people who may be in pain or anxious. Wearing a lead apron for long stretches makes you warm, and warm, tired people tend to rub their eyes. Rubbing spreads whatever is on your hands and can leave the eyes more irritated. Wash or sanitize your hands before touching your face, and let the itch pass with a few slow blinks instead.`,
      },
      {
        p: `If your department issues protective eyewear for fluoroscopy or interventional work, wear it as directed. Wraparound lenses also cut some of the airflow from ceiling vents in the room.`,
      },
      { h: 'Portable rounds and the ED' },
      {
        p: `Portable exams send you through the whole building: intensive care, the emergency department, surgery, and patient floors. You push heavy equipment, juggle a tablet or workstation, and work fast. There’s little time to think about your own eyes, so build a habit into the walk between rooms: a few slow, full blinks in the elevator or hallway. It costs nothing and refreshes the tear film before the next exam.`,
      },
      { h: 'Night shifts and weekend call' },
      {
        p: `Many imaging departments run around the clock. Night and call shifts pair fatigue with screens, and tired eyes often feel drier. Sleeping during the day with a fan blowing on your face can add to it. Point the fan at your feet or the wall, and wear a sleep mask if light keeps you awake. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more ideas for people who work through the night.`,
      },
      { h: 'Using a lubricating drop around patient care' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which fits cool, ventilated rooms. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}, which fits a start-of-shift, mid-shift and end-of-shift pattern for many people.`,
      },
      {
        list: [
          `Use drops on a break, away from patients and scanner rooms, with clean hands.`,
          `Follow the label: {tip}.`,
          `Keep the bottle in your bag or locker; the label’s storage range is {storage}.`,
          `Don’t share a bottle with coworkers. [Can you share eye drops?](/guides/can-you-share-eye-drops) explains why.`,
        ],
      },
      {
        p: `Read the caution first: {warnings}. If you use any prescribed eye drops, the label doesn’t cover using it with other drops, so ask your eye doctor or a pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'If something gets in your eye at work' },
      {
        p: `Contrast, cleaning solutions or body fluids can splash. A lubricating drop isn’t for that. Follow your hospital’s eye exposure procedure, use the eyewash station as trained, and report it through employee health. Then get your eye checked.`,
      },
      { h: 'Ordering for yourself or your department' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a hospital or clinic. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back, or you notice pain, blurred vision that won’t clear, or light sensitivity, the label is clear: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth acting on.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as a radiology tech?',
        a: `Cool, ventilated scanner rooms, dim control rooms with bright monitors and masks that push air upward all speed evaporation from the tear film. Focused image checks also slow blinking.`,
      },
      {
        q: 'Can X-ray techs use eye drops at work?',
        a: `Many do, on breaks and with clean hands, away from patients and scanner rooms. Follow the label’s directions and never share a bottle with coworkers.`,
      },
      {
        q: 'How can I rest my eyes between imaging exams?',
        a: `After each image check, look across the room and blink fully twice. Use the walk between portable exams to take a few slow blinks, and keep vents from blowing on your face.`,
      },
      {
        q: 'Should I use eye drops if contrast splashes in my eye?',
        a: `No. Follow your hospital’s eye exposure procedure, use the eyewash station as trained, report it, and have your eye checked. A lubricating drop isn’t meant for splashes.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-dental-assistants',
    title: 'Dry eyes for dental assistants',
    description:
      'Dental assistants work chairside under bright lights, in spray and in steamy sterilization rooms. Why eyes dry out, and what helps through a clinic day.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dental assistants get dry, tired eyes from a full day of close work in a busy setting: watching the field chairside under a bright operatory light, steering suction through spray, working behind masks and face shields, and running instruments through a warm, steamy sterilization area between patients. Focus slows blinking and moving air thins the tear film. Build quick eye breaks into room turnover, wear your eye protection, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why assistants’ eyes take a beating' },
      {
        p: `An assistant’s eyes are on the patient’s mouth almost as much as the dentist’s are, but from a different angle and with different jobs: anticipating the next instrument, keeping the field clear, retracting, and watching the patient’s comfort. The day also includes sterilization, X-rays, charting and sometimes front-desk work. Each brings its own strain:`,
      },
      {
        list: [
          `Chairside focus under a bright light, with fewer and shallower blinks.`,
          `Spray and aerosol from handpieces and air-water syringes near your face.`,
          `Masks that push warm breath upward toward your eyes.`,
          `Steam and warm air from sterilization equipment.`,
          `Screens for charting, scheduling and images between patients.`,
        ],
      },
      {
        p: `Hygienists and dentists have their own guide, [dry eyes for dental hygienists](/guides/dry-eyes-for-dental-hygienists), which focuses on loupes and long scaling appointments. The assistant’s day moves around more.`,
      },
      { h: 'Chairside: suction, light and four hands' },
      {
        p: `Four-handed dentistry keeps your eyes locked on a small, bright area. The operatory light is aimed at the patient, but it reflects off wet surfaces and instruments right back at you. Between steps, take a moment to look away from the light, at the wall or the floor, and blink fully. Even a second or two helps the tear film recover.`,
      },
      {
        p: `During light-curing, use the orange shield or filter your office provides, and don’t stare at the curing light tip. That’s about protecting your eyes from the light itself, and it also gives you a natural moment to look away.`,
      },
      { h: 'Eye protection that also cuts dryness' },
      {
        p: `Safety glasses or a face shield are part of every procedure. They protect against spatter and debris, and wraparound styles also block some of the moving air from the handpiece and the room’s ventilation. If your glasses fog because of your mask, pinch the mask’s nose wire firmly and make sure the top edge sits snug before you put your glasses on. Fog-free glasses are less tempting to push up and adjust with gloved hands.`,
      },
      { h: 'The sterilization room' },
      {
        p: `Between patients, many assistants process instruments: ultrasonic cleaners, packaging, autoclaves and drying cycles. Opening an autoclave releases a burst of steam and heat, and leaning over it puts both right at face level. Step back and turn your face aside when you open the door, and give the steam a moment to clear. Cleaning chemicals can also irritate the eyes; follow your office’s safety data sheets and use the eye protection they call for.`,
      },
      { h: 'X-rays, charting and the front desk' },
      {
        p: `Taking and checking radiographs, updating charts and scheduling all happen on screens. Many assistants finish a long day of chairside work with an hour of computer time. That’s a lot of focused looking. Set your screen a little below eye level, turn up the room light if the screen seems glaring, and follow a simple rule: every 20 minutes, look at something about 20 feet away for 20 seconds.`,
      },
      { h: 'Building eye breaks into room turnover' },
      {
        list: [
          `When you’re wiping down the operatory, take a few slow, full blinks.`,
          `Before seating the next patient, look out a window or down the hall for a few seconds.`,
          `Use your lunch break away from screens if you can.`,
          `Use eye drops only on a break, with washed hands and gloves off, away from the operatory.`,
        ],
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel names its Uses: {uses}. The directions: {directions}. The panel also says: {tip}, which matters in an office full of surfaces.`,
      },
      {
        p: `Read the caution: {warnings}. The storage range is {storage}, so a locker or a bag in the break room is a better spot than the sterilization area or a hot car. If you use a prescribed eye drop, the label doesn’t cover using it with others, so ask your eye doctor or pharmacist. See the full [Drug Facts](/drug-facts) panel.`,
      },
      { h: 'If something splashes into your eye' },
      {
        p: `A splash of saliva, blood, a disinfectant or a dental material is an exposure, not dryness. Lubricating drops aren’t for that. Use your office’s eyewash station as trained, tell the dentist, follow your exposure plan, and get your eye checked.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a dental office. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which can make sense for a few coworkers ordering their own bottles together. We don’t promise a delivery date. [See the bottle and order](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after a weekend off, or you notice pain, blurry vision or light sensitivity, the label says it’s time to stop and ask: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why do dental assistants get dry eyes?',
        a: `Chairside focus under a bright light slows blinking, while spray, masks and steam from the sterilization area add moving, warm air near the eyes. Screen time for charting adds more.`,
      },
      {
        q: 'Should dental assistants look at the curing light?',
        a: `No. Use the orange shield or filter your office provides and look away from the light tip during curing. It protects your eyes and gives them a short break.`,
      },
      {
        q: 'Can autoclave steam bother your eyes?',
        a: `A burst of hot steam at face level can leave your eyes feeling dry or irritated. Step back and turn your face aside when you open the door, and let the steam clear first.`,
      },
      {
        q: 'When can a dental assistant use eye drops during the day?',
        a: `On a break, with gloves off and hands washed, away from the operatory. Many people use them at the start of the day, at lunch and at the end, following the label’s directions.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-operating-room-staff',
    title: 'Dry eyes for operating room nurses and techs',
    description:
      'Scrub techs, circulators and other OR staff work long cases in cool, filtered air under bright lights. Why eyes dry out, and how to plan around it.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Operating room nurses and surgical techs get dry eyes from long cases in cool, constantly filtered air, bright surgical lights, masks that push breath upward and hours of close attention to instruments, counts and monitors. Once you’re scrubbed, you can’t touch your face, so planning matters. Use a lubricating drop as its label directs before you scrub, keep blinking on purpose during the case, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why OR work dries the eyes' },
      {
        p: `Operating rooms move a lot of air to keep it clean, and many are kept cool for the team in gowns. Moving, cool air pulls water from the tear film faster than still air. Add bright overhead lights, a mask and cap, and a case where you’re watching every move, and blinking slows to the point where eyes feel gritty by the end.`,
      },
      {
        p: `Surgeons have their own guide, [dry eyes for surgeons](/guides/dry-eyes-for-surgeons), focused on loupes and the operating microscope. This one is for the rest of the room: scrub techs and nurses, circulators, sterile processing, and the techs who turn the room over.`,
      },
      { h: 'Scrub techs: plan before you scrub in' },
      {
        p: `A scrubbed tech is stuck with whatever their eyes feel like at the start. Once your gloves are on, rubbing an itchy eye or putting a drop in means breaking scrub. A short routine before each case helps:`,
      },
      {
        list: [
          `Use your eye drop several minutes before scrubbing, so any brief blur clears and you can wash your hands afterward.`,
          `Adjust your mask, cap and eyewear completely before you scrub, so you won’t be tempted to touch them.`,
          `Set your back table so you can glance up and across the room between passes, not just down at the instruments.`,
          `During a long case, take a few slow, deliberate blinks whenever there’s a pause.`,
        ],
      },
      { h: 'Circulating nurses: between the field and the screen' },
      {
        p: `Circulators move constantly: opening supplies, charting, answering the phone, getting the next item and watching the field. Much of the documentation happens on a computer in the room, often under the same bright light. Position the screen so you can see it without craning, and look away from it between entries. Because you’re not scrubbed, you can use a drop during a quiet moment, with clean hands and away from the sterile field, following your facility’s rules.`,
      },
      { h: 'Masks, caps and eyewear for hours' },
      {
        p: `A mask that gaps at the nose sends warm breath across your eyes with every exhale. Over a four-hour case, that adds up. Press the nose wire snug before the case, and wear eye protection that fits close. Wraparound shields or glasses also block some of the airflow from ceiling diffusers. If your glasses fog, fix the mask fit instead of pushing the glasses down your nose.`,
      },
      { h: 'Sterile processing and room turnover' },
      {
        p: `Sterile processing teams work around washers, sterilizers and steam. Turnover crews use disinfectants and work fast in the same cool, moving air. Turn your face away when opening a sterilizer, keep chemical bottles at arm’s length, and wear the eye protection your department requires. If something splashes into your eye, follow your exposure plan and use the eyewash station as trained; lubricating drops aren’t meant for that.`,
      },
      { h: 'Long days and call nights' },
      {
        p: `OR schedules often mean early starts, long stretches without a real break and call nights. Tired eyes tend to feel drier. Between cases, step out of the room for a minute, look down a long hallway, and blink. Keep your drop in your locker or bag so it’s there on breaks. At home, keep fans and heating vents off your face while you sleep.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, which fits rooms with cool, constantly moving air. Its Drug Facts panel gives its Uses as: {uses}. The directions say: {directions}. Hygiene matters in an OR, and the panel agrees: {tip}.`,
      },
      {
        p: `The caution line reads: {warnings}. The storage range is {storage}, so a locker beats a hot car. If you already use a prescribed drop, the label doesn’t cover combining it with others, so ask your eye doctor or a pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order before your bottle runs low. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Persistent dryness, pain, light sensitivity or blurred vision that won’t clear deserves an appointment, and the label says so: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in the operating room?',
        a: `OR air is cool and constantly moving, the lights are bright, and masks can push breath across your eyes. Long cases with close attention also slow blinking.`,
      },
      {
        q: 'When should a scrub tech use eye drops?',
        a: `Before scrubbing in, so you can wash your hands afterward and any brief blur clears before the case. Once you’re scrubbed, putting in a drop means breaking scrub.`,
      },
      {
        q: 'Can circulating nurses use eye drops in the OR?',
        a: `Facilities have their own rules. If yours allows it, use a drop during a quiet moment with clean hands, away from the sterile field, or step out of the room.`,
      },
      {
        q: 'How do I stop my mask from drying my eyes during surgery?',
        a: `Press the nose wire snug so breath doesn’t escape upward, and wear close-fitting eye protection. A good seal also reduces fogging on glasses.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-home-health-aides',
    title: 'Dry eyes for home health aides',
    description:
      'Home health aides drive between homes, work in rooms kept very warm and spend breaks charting on a phone. Why eyes dry out, and what helps on the job.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Home health aides get dry eyes from a workday spread across several houses: car heaters on the drive, client homes kept very warm with furnaces, space heaters or wood stoves, steamy bathrooms during personal care, and visit notes on a phone between stops. Each home’s air is different, and few of them are easy on the eyes. Keep heat off your face, blink fully between tasks, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why aides’ eyes dry out' },
      {
        p: `Many older clients feel cold easily, so their thermostats are set high, and the heated air in a small house in January can be very dry. Space heaters and wood stoves make the air near them hotter still. You may also cook, do laundry, help with bathing and keep the house tidy, often in a few hours. Between visits, you’re in the car with the heater running. Your eyes hardly get a break.`,
      },
      { h: 'Warm homes and space heaters' },
      {
        p: `You can’t change a client’s thermostat, but you can choose where you stand and sit.`,
      },
      {
        list: [
          `Sit to the side of a space heater or wood stove, not facing it.`,
          `Keep your face out of the path of forced-air registers when you’re charting or helping with meals.`,
          `If the client has a humidifier, offer to fill it as part of the visit, if that’s in the care plan.`,
          `Step outside or into a cooler room for a minute during a long visit to let your eyes recover.`,
        ],
      },
      {
        p: `[Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains what that heat does to the tear film.`,
      },
      { h: 'Bathrooms, laundry and cleaning products' },
      {
        p: `Helping with a shower fills the bathroom with steam, and then you step into a dry, heated hallway. Laundry rooms are warm and full of lint. Cleaning sprays and bleach can sting the eyes, especially in a small room with the door closed. Open a window or run the bathroom fan when you clean, spray away from your face, and use any eye protection your agency provides. If a cleaning product splashes into your eye, rinse it as your agency’s safety training directs and get it checked; a lubricating drop isn’t for that.`,
      },
      { h: 'The drive between clients' },
      {
        p: `Aides can spend a lot of the day in the car. Point the heater vents at the windshield and your feet, not your face. Keep sunglasses in the car for low winter sun on the way to morning visits. If you park and chart in the car, turn the fan down and look up from the phone every few minutes.`,
      },
      { h: 'Phone charting and visit notes' },
      {
        p: `Most agencies have aides log visits and notes on a phone or tablet. Small screens pull your eyes close and slow your blinking. A few simple habits:`,
      },
      {
        list: [
          `Make the text bigger on your phone so you aren’t squinting.`,
          `Hold the phone a little below eye level.`,
          `Finish notes in short bursts, looking out the window between entries.`,
          `Blink fully a few times when you put the phone down.`,
        ],
      },
      { h: 'Your drops and your client’s drops' },
      {
        p: `If you help a client with their own eye drops as part of the care plan, follow the instructions their nurse or doctor gave and wash your hands before and after. Keep your bottle completely separate, in your bag rather than on their counter, and never use the same bottle for both of you. [Can you share eye drops?](/guides/can-you-share-eye-drops) explains why, and [dry eyes for caregivers](/guides/dry-eyes-for-caregivers) covers family caregivers.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which fits a day in warm, dry rooms. The Drug Facts panel lists its Uses as: {uses}. {directions}, the label says, so many aides use it at the start of the day, at lunch and after the last visit. The panel adds: {tip}.`,
      },
      {
        p: `Read the caution: {warnings}. Storage is {storage}; a car in winter or summer can go outside that, so keep the bottle in your bag. If you use any prescribed drops, the label doesn’t cover combining them, so ask your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order from the home page](/#buy).`,
      },
      { h: 'Take care of your own eyes' },
      {
        p: `Aides spend their days looking after other people and often skip their own appointments. If you notice eye pain, vision changes, light sensitivity or dryness that doesn’t ease on your days off, the label is clear: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as a home health aide?',
        a: `Client homes are often kept very warm, with furnaces, space heaters or wood stoves drying the air, and the car heater runs between visits. Charting on a phone slows blinking too.`,
      },
      {
        q: 'Can I use my own eye drops at a client’s house?',
        a: `Yes, on a break with washed hands. Keep your bottle in your bag, separate from anything the client uses, and never share a bottle.`,
      },
      {
        q: 'How can I keep a client’s space heater from drying my eyes?',
        a: `Sit to the side of it rather than facing it, keep your face out of the path of warm air, and step into a cooler room for a minute during long visits.`,
      },
      {
        q: 'What should a home health aide do if cleaner splashes in their eye?',
        a: `Rinse it as your agency’s safety training directs and have it checked. Lubricating eye drops aren’t meant for chemical splashes.`,
      },
    ],
  },
  {
    slug: 'which-eye-drops-are-closest-to-natural-tears',
    title: 'Which eye drops are closest to natural tears?',
    description:
      'No eye drop copies real tears, which have oil, water and mucus layers. How drops differ in which layer they support, and how to read a label for it.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `No eye drop is the same as natural tears. Your own tear film has three layers, oil on the outside, water in the middle and mucus against the eye, and your eyes rebuild it with every blink. Lubricating drops differ in which part they’re built to support: some mainly add moisture, while oil-containing drops such as Quell are designed to reinforce the oil layer. An eye doctor can tell you which part of your tear film needs the help.`,
      },
      { h: 'What natural tears are made of' },
      {
        p: `The tears that keep your eyes comfortable from minute to minute aren’t the ones that run down your face when you cry. They form a very thin film over the front of the eye with three parts working together:`,
      },
      {
        list: [
          `An oil layer on the outside, made by tiny glands along the edges of the eyelids. It slows evaporation of the water underneath. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains more.`,
          `A water layer in the middle, which holds most of the film’s volume and keeps the surface moist.`,
          `A mucus layer against the eye, which helps the water spread and stick instead of beading up.`,
        ],
      },
      {
        p: `Every blink spreads a fresh film across the eye, and the lids keep feeding it. When any layer is thin or the film evaporates too fast, eyes can feel dry, gritty or tired. [What is the tear film?](/guides/what-is-the-tear-film) covers the whole system.`,
      },
      { h: 'Why no bottle can copy them' },
      {
        p: `Natural tears are made continuously, in tiny amounts, by your own eye. They’re refreshed many times a minute and shift with what you’re doing, how tired you are and the air around you. A drop from a bottle is a single dose of liquid that lands on top of that system. It can add moisture, help the surface feel smoother, or support a layer that’s running thin, but it can’t make itself the way your eye does. That’s why the label gives a number of drops a day rather than promising a permanent fix.`,
      },
      { h: 'How eye drops differ by tear layer' },
      {
        p: `When people ask which drops are “closest” to real tears, the more useful question is which part of the tear film a drop is designed to help. Broadly:`,
      },
      {
        list: [
          `Water-based lubricating drops add moisture and often contain ingredients that thicken the liquid slightly.`,
          `Oil-containing drops, sometimes called emulsions, include an oil meant to reinforce the outer layer and slow evaporation. They often look milky. [What are emulsion eye drops?](/guides/what-are-emulsion-eye-drops) goes into detail.`,
          `Gels and ointments are thicker still and stay longer, but they can blur vision for a while, which is why many people use them at bedtime.`,
        ],
      },
      {
        p: `None of these is closer to tears in every way. Each one is designed to support part of what tears do.`,
      },
      { h: 'Reading a label for this' },
      {
        p: `The Drug Facts panel tells you what a drop is made of and what it’s for. Look at three lines:`,
      },
      {
        list: [
          `Active ingredients, and the purpose printed beside each. Quell’s are {actives}.`,
          `Uses, which say what the drop is for. Quell’s reads: {uses}.`,
          `Other information, which may describe how it looks. Quell’s says: {milky}.`,
        ],
      },
      {
        p: `An oil among the actives, and a milky appearance, are signs the drop is aimed at the oil layer. A list of only water-loving ingredients suggests a moisture-adding drop. The inactive ingredients list rounds out the picture: Quell’s includes {inactives}.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients include light mineral oil, and emu oil is among its inactive ingredients. The carton’s emu oil panel says: {emuOil} If your eyes feel fine after you blink but dry out quickly in heated rooms, in wind or at a screen, a drop aimed at the oil layer is one option to ask about. The directions read: {directions}.`,
      },
      {
        p: `Before choosing it, read the caution: {warnings}. The label doesn’t cover contact lenses or use with other drops, so ask your eye doctor or pharmacist if either applies.`,
      },
      { h: 'Preservatives and “natural” labels' },
      {
        p: `Two other things people mean by “close to natural tears” are no preservatives and natural ingredients. Quell is preservative-free; [what does preservative-free mean?](/guides/what-does-preservative-free-mean) explains what that covers. Natural ingredients aren’t automatically more tear-like, though. What matters is which layer a drop supports and whether its label fits your symptoms.`,
      },
      { h: 'When the answer isn’t a different drop' },
      {
        p: `If you’ve tried a few drops and none of them feel right, the issue may not be which drop is closest to tears. An eye doctor can look at your tear film directly, find which layer is struggling and decide what to do. And if you have pain, vision changes or symptoms that keep coming back, the label is clear: {stopUse} The [dry eye self-check](/self-check) can help you describe your symptoms before a visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Are artificial tears the same as real tears?',
        a: `No. Real tears have oil, water and mucus layers that your eyes rebuild with every blink. Artificial tears and lubricating drops add moisture or support one part of that film.`,
      },
      {
        q: 'Is there an eye drop that copies all three tear layers?',
        a: `No bottle reproduces the whole tear film. Drops are designed to support part of it, such as adding moisture or reinforcing the outer oil layer.`,
      },
      {
        q: 'Why do eye drops that support the oil layer look milky?',
        a: `Oil and water don’t mix clear, so drops with oil in them usually look milky or cloudy. Quell’s label describes it as a milky brown solution.`,
      },
      {
        q: 'How do I know which tear layer my eyes need help with?',
        a: `An eye doctor can examine your tear film and tell you. A drop label can only say what that drop is for, not what your eyes need.`,
      },
    ],
  },
  {
    slug: 'should-i-use-the-same-eye-drops-as-my-friend',
    title: 'Should I use the same eye drops as my friend?',
    description:
      'A friend’s favorite eye drop may not fit your eyes. What to ask them, what to check on the label yourself, and why you should never borrow their bottle.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `A friend’s recommendation is a fine place to start, but not a reason to buy without checking. Their drop may be meant for a different symptom, may contain something you’re allergic to, or may not fit with contact lenses or another drop you use. Ask what it’s for, then read the Uses, Warnings and Directions on the label yourself. Buy your own bottle rather than borrowing theirs, and see an eye doctor if your eyes hurt or your vision changes.`,
      },
      { h: 'Why a friend’s drop may not suit you' },
      {
        p: `Two people can both say “my eyes are dry” and mean different things. One feels grit at the end of a screen day; another has itchy eyes every spring; a third has a burning feeling that’s really something else entirely. A drop that helps one of them may do nothing for the others. Eye drops on a store shelf are made for different jobs: dryness, itching, irritation, contact lens comfort and more. [What are eye drops used for?](/guides/what-are-eye-drops-used-for) explains the main kinds.`,
      },
      { h: 'Questions to ask your friend' },
      {
        list: [
          `What did you buy it for: dryness, itching, or something an eye doctor told you about?`,
          `How often do you use it, and when during the day?`,
          `Do you wear contact lenses or use any other eye drops with it?`,
          `How did it feel for the first few days, and does it blur your vision at all?`,
          `Did your eye doctor suggest it, or did you pick it yourself?`,
        ],
      },
      {
        p: `If the drop was prescribed, or their eye doctor chose it for a specific reason, it isn’t a good stand-in for your own visit. Their answers just tell you whether their reasons for using it sound like yours.`,
      },
      { h: 'What to check on the label yourself' },
      {
        p: `Whatever your friend says, the label is what counts. Every over-the-counter eye drop has a Drug Facts panel, and three parts of it matter most when you’re deciding:`,
      },
      {
        list: [
          `Uses: does it say it’s for what you’re feeling? Quell’s reads: {uses}.`,
          `Warnings: is there anything you’re allergic to or a reason you shouldn’t use it? Quell’s caution: {warnings}.`,
          `Directions: how much, how often, and is that practical for you? Quell’s: {directions}.`,
        ],
      },
      {
        p: `Also check the do-not-use and stop-use lines. Quell’s label says not to use it in this case: {doNotUse}. You can read the whole panel on our [Drug Facts page](/drug-facts) before buying.`,
      },
      { h: 'Contact lenses, other drops and allergies' },
      {
        p: `These are the three places where copying a friend goes wrong most often. If you wear contacts and your friend doesn’t, their drop may not be labeled for use with lenses. Quell’s label doesn’t cover contact lenses. If you use any prescribed eye drops, the label doesn’t cover using Quell with other drops, so ask your eye doctor or pharmacist. And if your friend’s drop contains an ingredient you react to, their good experience doesn’t transfer to you. Quell contains emu oil, which is why its label carries the egg and bird caution.`,
      },
      { h: 'Never borrow the bottle itself' },
      {
        p: `Even if you both decide on the same drop, get your own bottle. A bottle that’s been near someone else’s eye can carry germs from their lids and lashes to yours, and a dropper tip that’s touched a lash isn’t clean anymore. The label makes the same point about hygiene: {tip}. [Can you share eye drops?](/guides/can-you-share-eye-drops) covers this in detail, including unopened bottles.`,
      },
      { h: 'Reviews from strangers are the same idea' },
      {
        p: `Online reviews are a crowd of friends’ recommendations, with the same limits: each reviewer’s eyes, reasons and other drops are different from yours. They’re useful for practical things like how a bottle handles or how a drop feels at first. [How to read eye drop reviews online](/guides/reading-eye-drop-reviews-online) has tips for sorting them.`,
      },
      { h: 'If you decide to try what your friend uses' },
      {
        p: `If the label fits your symptoms and you’ve checked for allergies and other drops, trying the same product is reasonable. Give it a few days, use it as the directions say, and pay attention to how your eyes feel. If it’s Quell, it ships from Brentwood, Tennessee, to any US address; checkout is as a guest for buyers 18 and older, and unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [See the bottle and order](/#buy).`,
      },
      { h: 'When to skip the drop and see an eye doctor' },
      {
        p: `If your eyes hurt, your vision changes, light bothers you, or one eye is much worse than the other, a friend’s favorite drop isn’t the next step. The label is clear: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Can I use the same eye drops my friend uses?',
        a: `You can if the label fits your symptoms and you’ve checked the warnings, but buy your own bottle. Their drop may be for a different problem, or contain something you react to.`,
      },
      {
        q: 'Is it okay to borrow someone’s eye drops just once?',
        a: `It’s better not to. A bottle used near someone else’s eyes can carry germs to yours, and the label asks you not to let the tip touch any surface.`,
      },
      {
        q: 'What should I ask a friend who recommends eye drops?',
        a: `Ask what they bought it for, how often they use it, whether they wear contacts or use other drops, and whether their eye doctor chose it for them.`,
      },
      {
        q: 'Why do eye drops work for my friend but not for me?',
        a: `Your eyes may be bothered by something different, even if you both call it dryness. An eye doctor can find the cause if a drop doesn’t help you.`,
      },
    ],
  },
  {
    slug: 'buying-eye-drops-for-the-first-time',
    title: 'Buying eye drops for the first time: what to know',
    description:
      'First time buying eye drops? Name your symptom, read the Drug Facts panel, plan where the bottle lives, and watch the first week. A practical checklist.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `If you’re buying eye drops for the first time, start by naming what your eyes are doing, since dryness, itching and pain call for different things. Read the Drug Facts panel before you buy, especially Uses, Warnings and Directions. Plan where the bottle will live, practice getting a drop in, and note how your eyes feel over the first week. Pain or vision changes mean you should skip the shelf and see an eye doctor.`,
      },
      { h: 'Start by naming what your eyes are doing' },
      {
        p: `Before you pick anything, put your symptom into a few plain words. It shapes which part of the label you look for, and whether a drop is the right next step at all.`,
      },
      {
        list: [
          `Dry, gritty or tired, worse at screens, in wind or in heated rooms: a lubricating drop is the usual first thing to look at.`,
          `Itchy, especially in certain seasons or around pets: look for a drop whose Uses line mentions itching, or ask a pharmacist.`,
          `Painful, sensitive to light, blurry, or after an injury: this isn’t a shopping question. See an eye doctor.`,
        ],
      },
      {
        p: `The [dry eye self-check](/self-check) asks a few questions about your symptoms and can help you put them into words. It’s not a diagnosis.`,
      },
      { h: 'Read the panel before you buy' },
      {
        p: `Every over-the-counter eye drop has a Drug Facts panel, on the box or online. For a first purchase, read it in this order:`,
      },
      {
        list: [
          `Uses: what the drop is for. Quell’s says: {uses}.`,
          `Warnings, including allergies. Quell’s reads: {warnings}.`,
          `Do not use: Quell’s says not to use it in this case: {doNotUse}.`,
          `Directions: how much and how often. Quell’s: {directions}.`,
          `Other information: storage and appearance. Quell’s says: {storage}, and adds: {milky}.`,
        ],
      },
      {
        p: `Our [Drug Facts page](/drug-facts) shows Quell’s full panel, so you can read it before ordering.`,
      },
      { h: 'Three things the label may not cover' },
      {
        p: `First-time buyers often find out later that their situation isn’t on the label. Check these before you buy:`,
      },
      {
        list: [
          `Contact lenses. Quell’s label doesn’t cover use with contacts. Ask your eye doctor.`,
          `Other eye drops. The label doesn’t cover combining drops. If you use anything prescribed, ask your eye doctor or pharmacist first.`,
          `Children. The label doesn’t give directions for children, so ask a pediatrician or eye doctor before using it for anyone young.`,
        ],
      },
      { h: 'Plan where the bottle will live' },
      {
        p: `A drop only helps if it’s where you are when your eyes feel dry, and in a place that keeps it in its storage range. Common choices are a desk drawer at work, a purse or jacket pocket, and the nightstand. Avoid the car’s glove box in summer and winter, a sunny windowsill and the steamy bathroom shelf. [How to store eye drops](/guides/how-to-store-eye-drops) covers the details.`,
      },
      { h: 'Getting the first drop in' },
      {
        p: `Most people blink or flinch the first few times. That’s normal, and it gets easier quickly.`,
      },
      {
        list: [
          `Wash and dry your hands.`,
          `Tilt your head back or lie down, and look up.`,
          `Gently pull the lower lid down to make a small pocket.`,
          `Hold the bottle above the eye without touching it. The label’s hygiene line: {tip}.`,
          `Squeeze one drop into the pocket, then close your eye gently for a moment.`,
        ],
      },
      {
        p: `If you can’t tell whether it went in, [how do I know if the eye drop went in?](/guides/how-do-i-know-if-the-eye-drop-went-in) has the signs. [How to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) helps if you keep blinking it away.`,
      },
      { h: 'The first week: what to notice' },
      {
        p: `Use the drop as directed for several days before deciding how it’s working. A few notes on your phone help you remember: when you used it, what you were doing, and how your eyes felt an hour later. Notice whether it feels better at screens or in heated rooms. If any drop leaves your vision briefly hazy, give it a moment before driving or reading. If anything gets worse instead of better, stop.`,
      },
      { h: 'Buying online for the first time' },
      {
        p: `If you buy Quell, checkout is as a guest for buyers 18 and older, with no account to set up. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and orders ship from Brentwood, Tennessee, to US addresses only. We don’t promise a delivery date. If you change your mind, unopened bottles can be refunded within {returnDays} days of delivery without sending them back. You’ll get one reorder reminder email, and there’s no subscription. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `A drop is for everyday dryness and irritation. The label sets the limits: {stopUse} If you’re not sure whether your symptoms belong on that list, [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide. An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What should I know before buying eye drops for the first time?',
        a: `Know what you’re trying to relieve, then read the Uses, Warnings and Directions on the label. Check whether it covers contacts or other drops if either applies to you.`,
      },
      {
        q: 'How do I pick my first eye drop?',
        a: `Match the Uses line on the label to what your eyes are doing, check the warnings for anything you’re allergic to, and make sure the directions are practical for your day.`,
      },
      {
        q: 'Where should I keep my first bottle of eye drops?',
        a: `Somewhere you’ll be when your eyes feel dry and that stays within the label’s storage range, like a desk drawer, purse or nightstand. Avoid hot or freezing cars.`,
      },
      {
        q: 'How do I tell if my first eye drop is helping?',
        a: `Use it as directed for several days and keep short notes on how your eyes feel. Stop and see an eye doctor if anything gets worse or you have pain or vision changes.`,
      },
    ],
  },
]
