import type { Guide } from '@/lib/guide-types'
export const DAILY_20261121_B: Guide[] = [
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-cape-girardeau-mo:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid CGI; saved at .daily-job/acis1121/CGI.json and .daily-job/b/CGI-mint.json)
   *   (CAPE GIRARDEAU FAA AP, elev 334 ft: Jan max 43.0 F, min 26.2 F; Feb min
   *   29.7; Mar min 37.3; Apr max 69.0; Jul max 89.2, min 69.3; Aug max 88.3;
   *   Oct max 70.9; Nov min 36.7; Dec min 29.8; precip May 5.27 in (wettest),
   *   Apr 5.18, Aug 3.23 (driest); twelve monthly precip normals sum to 47.91 in;
   *   snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Cape Girardeau row: no humidity or wind figure.
   * - No landmark, university or employer named. The river and the Illinois
   *   shore are geography only.
   */
  {
    slug: 'dry-eye-relief-cape-girardeau-mo',
    title: 'Dry eye relief in Cape Girardeau, Missouri',
    description:
      'Cape Girardeau gets nearly 48 inches of rain a year, yet furnaces and AC still dry the eyes. NOAA’s airport normals and simple everyday relief.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Cape Girardeau depends more on the air inside than the weather outside. NOAA’s normals for the city’s airport show rain in every month, July highs near 89°F and January nights in the mid-20s, so furnaces and air conditioners each run for months. Keep vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Cape Girardeau’s weather in NOAA’s numbers' },
      {
        p: `The figures below are NOAA’s 1991–2020 climate normals for the airport station that carries the city’s name (NOAA lists it as Cape Girardeau FAA Airport), the same record the National Weather Service publishes through NOWData. The station sits at about 330 feet:`,
      },
      {
        list: [
          `July is the hottest month, with a normal high of 89.2°F and a normal low of 69.3°F. August follows at 88.3°F.`,
          `January is the coldest, with a normal high of 43.0°F and a normal low of 26.2°F. December and February lows also stay under 30°F.`,
          `May is the wettest month at 5.27 inches of precipitation, with April right behind at 5.18.`,
          `August is the driest month, and it still averages 3.23 inches.`,
          `Added together, the twelve monthly normals come to about 47.9 inches a year.`,
        ],
      },
      {
        p: `That last point matters. No month here averages less than about 3 inches, so Cape Girardeau has no true dry season outdoors. What it does have is a long heating season and a long cooling season, and both change the air you breathe for hours at a stretch.`,
      },
      { h: 'Why a wet place can still leave your eyes dry' },
      {
        p: `The surface of the eye is covered by the tear film, a thin coat with an oily outer layer, a watery middle and a mucus layer against the eye. Each blink spreads it fresh. Between blinks it slowly evaporates, and the drier or faster-moving the air, the quicker that happens.`,
      },
      {
        p: `Rain outside doesn’t reach a living room with the furnace on. Warming cold winter air without adding moisture lowers its relative humidity, and an air conditioner pulls water out of the air as it cools it. So even a rainy week can still give you a scratchy, tired feeling by evening if a vent has been blowing at you since lunch.`,
      },
      { h: 'Summer: 89°F afternoons and cold rooms' },
      {
        p: `From June through August, normal highs at the airport run from about 87°F to 89°F, and nights stay in the upper 60s. That keeps air conditioning running in houses, stores, offices and cars for most of the season. A few changes help:`,
      },
      {
        list: [
          `Turn car dash vents toward your chest or the windshield instead of your eyes.`,
          `At work, check whether a ceiling diffuser or a floor fan sends air across your face, and shift your chair if it does.`,
          `Wear wraparound sunglasses for yard work and on the water; they cut glare and block moving air at the same time.`,
          `When you catch yourself staring at a phone in a chilly waiting room, close your eyes gently for a few seconds, then blink fully a few times.`,
        ],
      },
      {
        p: `Heat matters for the bottle too. Quell’s label gives its storage range as {storage}, and July’s normal high of 89.2°F is already above the top of that range before a parked car adds its own heat. Carry the bottle with you rather than leaving it on the dash. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains what to look for afterward.`,
      },
      { h: 'Furnace season, November through March' },
      {
        p: `The normal low drops below 40°F in November (36.7°F) and doesn’t climb back above it until April. Through December, January and February it sits under 30°F. That is five months of furnaces, space heaters and car heaters, and the dry indoor air that comes with them.`,
      },
      {
        list: [
          `Keep your chair and your bed out of the direct path of a floor register.`,
          `Lower the thermostat a little at night, so the furnace runs less while you sleep.`,
          `Try a cool-mist humidifier in the bedroom and keep it clean. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers what one can and can’t do.`,
          `Aim a space heater at your feet, never at your face.`,
        ],
      },
      { h: 'Spring and fall: the open-window months' },
      {
        p: `April’s normal high is 69.0°F and October’s is 70.9°F, and in those weeks many houses run neither heat nor air. They’re good months for your eyes indoors. Outdoors they bring mowing, raking, garden work and harvest dust from the fields around town, all of which put fine particles in the air. Safety glasses or sunglasses keep debris out, and rinsing your hands before touching your face keeps it off your eyelids. Spring is also the wettest stretch of the year, so a day of yard work often ends with damp clothes and gritty eyes at once.`,
      },
      { h: 'Long drives across the river and up the interstate' },
      {
        p: `Cape Girardeau sits on the Mississippi, and plenty of errands, jobs and family visits mean driving across into Illinois or north toward St. Louis. Long highway stretches lower your blink rate the way screens do, because your eyes lock on the road. Pull over every couple of hours, look at something far off, and blink slowly before setting out again. In winter the defroster has to stay on when the glass fogs, but the side vents can usually be turned away. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has more for the drive home after dark.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states its Uses as: {uses}. The directions say: {directions}. For the bottle tip, the label adds: {tip}.`,
      },
      {
        p: `There is one caution to read before you buy: {warnings}. The panel also lists when not to use it: {doNotUse}. You can read every line on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Cape Girardeau' },
      {
        p: `We ship from Brentwood, Tennessee, to Cape Girardeau, Jackson, Scott City and every other US address. You can check out as a guest if you’re 18 or older. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order before your last bottle runs out. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t have to send it back. The [Cape Girardeau page](/eye-drops/cape-girardeau-mo) and the [Missouri page](/eye-drops/state/missouri) have more local detail.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Indoor air explains a lot of everyday dryness, but not all of it. Quell’s label says when to stop: {stopUse} Pain, blurred vision that doesn’t clear with blinking, or one eye much worse than the other belongs with an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the wettest month in Cape Girardeau, Missouri?',
        a: `May, at 5.27 inches in NOAA’s 1991–2020 normals for the Cape Girardeau airport station. April is nearly as wet at 5.18 inches, and August is the driest month at 3.23 inches.`,
      },
      {
        q: 'How cold does Cape Girardeau get in January?',
        a: `NOAA’s normals for the airport put January’s normal low at 26.2°F and its normal high at 43.0°F, which makes it the coldest month of the year there.`,
      },
      {
        q: 'Why do my eyes feel dry in Cape Girardeau when it rains so often?',
        a: `Rain outside doesn’t reach heated or air-conditioned rooms. Furnaces lower indoor humidity in winter and air conditioners pull moisture out in summer, and a vent blowing at your face speeds evaporation from the eye.`,
      },
      {
        q: 'Does Quell ship to Cape Girardeau, MO?',
        a: `Yes. We ship from Brentwood, Tennessee, to Cape Girardeau and the rest of the United States. Shipping is {shipping}, or free on orders of {freeBottles} or more bottles.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-carbondale-il:
   * - NOAA 1991-2020 monthly normals via ACIS (sid MDH; saved at
   *   .daily-job/acis1121/MDH.json and .daily-job/b/MDH-mint.json)
   *   (CARBONDALE SOUTHERN ILLINOIS AP, elev 400 ft: Jan max 41.7 F, min 24.8 F;
   *   Feb max 47.2, min 27.8; Dec min 28.2; Apr precip 5.34 in (wettest), May
   *   4.98; Feb 2.61 (driest), Jan 2.79, Sep 2.85; Sep max 80.8, min 55.7; Jul
   *   max 88.4, min 67.5; Aug max 87.2; twelve monthly precip normals sum to
   *   44.01 in; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Carbondale row: no humidity or wind figure.
   * - The station's name is quoted as NOAA prints it; no university, forest or
   *   employer is named.
   */
  {
    slug: 'dry-eye-relief-carbondale-il',
    title: 'Dry eye relief in Carbondale, Illinois',
    description:
      'February is Carbondale’s driest month and its coldest stretch, and September is warm and dry too. NOAA’s numbers and what helps your eyes in each.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Carbondale means watching two stretches the yearly rain total hides. February is the driest month in NOAA’s normals for the Southern Illinois Airport station and arrives with the furnace running hard, and September is warm with less rain than most months. Keep heat and AC off your face, take blink breaks during long reading, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Where Carbondale’s numbers come from' },
      {
        p: `NOAA’s 1991–2020 climate normals for the station it lists as Carbondale Southern Illinois Airport, at about 400 feet, are the source here. They’re the same normals the National Weather Service shows in NOWData. Taken month by month, they describe a place with a real winter, a hot summer and rain that comes unevenly:`,
      },
      {
        list: [
          `April is the wettest month, at 5.34 inches, and May follows with 4.98.`,
          `February is the driest, at 2.61 inches. January (2.79) and September (2.85) are next.`,
          `January’s normal low is 24.8°F and its normal high 41.7°F.`,
          `July brings a normal high of 88.4°F and a low of 67.5°F, with August at 87.2°F.`,
          `The twelve monthly totals add up to about 44 inches a year.`,
        ],
      },
      { h: 'February: the driest month meets the coldest air' },
      {
        p: `February pairs the smallest precipitation total of the year with normal lows near 28°F, and January is barely different. That combination is hard on the tear film, the thin layer of oil, water and mucus that keeps the eye’s surface smooth. Cold outdoor air carries little water to begin with, and once a furnace warms it, its relative humidity indoors falls further. Eyes can feel gritty or tired by late afternoon even when nothing seems wrong with the day.`,
      },
      {
        list: [
          `Sit away from floor registers and baseboard heaters, especially for long reading or desk sessions.`,
          `Run a clean cool-mist humidifier in the room where you sleep.`,
          `Turn the car heater to the floor and the windshield instead of the face vents.`,
          `If a room feels stuffy and warm, lower the thermostat a degree or two before reaching for anything else.`,
        ],
      },
      {
        p: `For a fuller look at what heat does indoors, see [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
      { h: 'September: warm, bright and a little dry' },
      {
        p: `September keeps much of summer’s warmth, with a normal high of 80.8°F, but its 2.85 inches of rain make it one of the three driest months of the year. It’s also when people spend long hours outside: football and soccer on Saturday afternoons, hikes in the wooded hills of far southern Illinois, early harvest work and the first yard cleanup of fall. Sun, dust and drying grass add up.`,
      },
      {
        list: [
          `Wear sunglasses that wrap around the sides; they block glare and breeze together.`,
          `Pause in the shade now and then for a few slow, complete blinks.`,
          `Keep sawdust, leaf debris and trail dust off your hands before you touch your eyes.`,
          `Bring a bottle of drops in a bag that stays with you, not in a car parked in the sun.`,
        ],
      },
      { h: 'April and May: the wet months and open windows' },
      {
        p: `The wettest weeks of the year are also mild ones, so spring is usually the easiest season for Carbondale eyes indoors. Furnaces shut off, the air conditioning hasn’t started, and windows open. Spring storms can still bring blowing debris and mowing season begins, so protective glasses are worth having by the door.`,
      },
      { h: 'Long reading and screen sessions' },
      {
        p: `Whether you’re studying, grading, writing reports or working through email, long stretches of close focus slow your blink rate. Fewer blinks means the tear film has more time to thin out between them, and that is a big part of why eyes feel dry after a long session even in a comfortable room. Try these during any long sitting:`,
      },
      {
        list: [
          `Every so often, look across the room or out a window for a few seconds.`,
          `Finish each blink fully; half blinks leave part of the eye uncovered.`,
          `Set the screen slightly below eye level so your lids cover more of the eye.`,
          `Get up between chapters or tasks, even briefly.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains the blink connection in more detail.`,
      },
      { h: 'Using Quell in southern Illinois' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, it is: {uses}. The label’s directions are: {directions}. On handling, it says: {tip}.`,
      },
      {
        p: `Check the caution before you order: {warnings}. The storage line reads {storage}, so a car parked outside on a February night or a July afternoon can take the bottle outside that range. The [full Drug Facts panel](/drug-facts) is online.`,
      },
      { h: 'Ordering Quell to Carbondale' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Carbondale, Murphysboro, Marion and anywhere else in the United States. Buyers must be 18 or older, and no account is needed. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so leave yourself some time before a bottle runs low. If you change your mind about an unopened bottle, it can be refunded within {returnDays} days of delivery without sending it back. The [Carbondale page](/eye-drops/carbondale-il) and the [Illinois page](/eye-drops/state/illinois) have more on ordering here.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `Dry winter air and long reading sessions explain plenty, but persistent trouble deserves a proper look. The label is plain about when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge when to call.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Carbondale, Illinois?',
        a: `February, with 2.61 inches of precipitation in NOAA’s 1991–2020 normals for the Southern Illinois Airport station. January (2.79 inches) and September (2.85 inches) are the next driest.`,
      },
      {
        q: 'How hot does Carbondale get in the summer?',
        a: `July is the hottest month, with a normal high of 88.4°F and a normal low of 67.5°F at the Southern Illinois Airport station. August’s normal high is 87.2°F.`,
      },
      {
        q: 'Why do my eyes feel drier in February?',
        a: `Cold air holds little water, and heating it indoors lowers its relative humidity further, so the tear film evaporates faster between blinks. In Carbondale, February is also the month with the least precipitation.`,
      },
      {
        q: 'Can I order Quell to Carbondale, IL?',
        a: `Yes. We ship from Brentwood, Tennessee, to Carbondale and every US address. Shipping is {shipping}, and {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-concord-ca:
   * - NOAA 1991-2020 monthly normals via ACIS (sid CCR; saved at
   *   .daily-job/acis1121/CCR.json and .daily-job/b/CCR-mint.json)
   *   (CONCORD BUCHANAN FIELD, elev 23 ft: precip Jan 3.21 in, Feb 3.19, Dec
   *   3.18, Mar 2.26, Apr 1.12, May 0.51, Jun 0.16, Jul 0.00, Aug 0.02, Sep 0.06,
   *   Oct 0.73, Nov 1.61; sum 16.05 in; Jul max 88.0 F, min 58.7 F; Aug max 87.9,
   *   min 59.4; Sep max 85.3, min 57.8; Dec max 58.2, min 40.7; Jan max 57.6,
   *   min 41.2; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Concord, CA row (the CONCORD row is
   *   New Hampshire): no humidity or wind figure.
   * - Antioch and Oakland guides exist; this one is built on Buchanan Field's
   *   day-night swing and the rainless months, with no landmarks named.
   */
  {
    slug: 'dry-eye-relief-concord-ca',
    title: 'Dry eye relief in Concord, California',
    description:
      'Concord gets almost no rain from June to September, and summer days swing about 29 degrees. NOAA’s Buchanan Field numbers and daily dry eye relief.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Concord starts with its long rainless summer. NOAA’s normals for Buchanan Field show less than a quarter inch of rain from June through September, with July afternoons near 88°F that cool to about 59°F by dawn. That swing means AC in the afternoon and sometimes heat in the morning. Keep vents off your face, wear sunglasses outside, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What Buchanan Field’s record shows' },
      {
        p: `The numbers here are NOAA’s 1991–2020 climate normals for Concord Buchanan Field, the city’s airport station, at about 23 feet above sea level. They’re the same normals the National Weather Service uses in NOWData:`,
      },
      {
        list: [
          `About 16 inches of precipitation in a normal year, almost all of it from November through April.`,
          `January (3.21 inches), February (3.19) and December (3.18) are the wettest months.`,
          `July averages 0.00 inches, August 0.02 and September 0.06.`,
          `July’s normal high is 88.0°F, with a normal low of 58.7°F. August is nearly the same, at 87.9°F and 59.4°F.`,
          `December and January highs sit near 58°F, with lows around 41°F.`,
        ],
      },
      { h: 'Four months with almost no rain' },
      {
        p: `Add up June through September and the total is about a quarter of an inch. May (0.51) and October (0.73) are barely wetter. For roughly half the year, Concord gets no rain to speak of, and the hills around the valley turn gold and dusty. That doesn’t mean every afternoon is harsh on the eyes, but it does mean the air, the ground and the plants all dry out as the season goes on.`,
      },
      {
        p: `Your eyes depend on the tear film, a thin layer of oil, water and mucus renewed with each blink. Warm air, sun and moving air all pull water from it faster. By late summer, a long afternoon outdoors in Concord stacks all three.`,
      },
      {
        list: [
          `Plan long walks, runs and yard work for the cooler early hours.`,
          `Wear wraparound sunglasses; they cut glare off pale pavement and dry grass and shield the eye from breeze.`,
          `When dust is kicking up on a trail or a job site, close-fitting safety glasses beat regular sunglasses.`,
          `Rinse your hands after gardening before you rub your eyes.`,
        ],
      },
      { h: 'A 29-degree day: cool mornings, hot afternoons' },
      {
        p: `The gap between July’s normal high and low at Buchanan Field is about 29 degrees. A summer day can start in a light jacket and end in the high 80s. Houses and cars follow that curve: windows open and maybe a heater at 6 a.m., then air conditioning by mid-afternoon. Both blow dry air, and both are easy to point at your face without thinking.`,
      },
      {
        list: [
          `In the car, aim the morning heat at the floor and the afternoon AC at your chest.`,
          `At a desk, move or redirect any fan that sends air across your eyes.`,
          `In the evening, when the outdoor air cools, opening windows lets the AC rest and brings in gentler air.`,
          `A small bedroom fan pointed at the wall, not the bed, keeps air moving without drying your eyes while you sleep.`,
        ],
      },
      { h: 'Commutes, screens and long drives' },
      {
        p: `Many Concord days include a freeway or train commute toward Oakland, San Francisco or the inland valleys, then hours at a screen. Concentration slows blinking, whether you’re watching traffic or a spreadsheet, and a car vent or office diffuser adds moving air. A few slow, full blinks at each red light, train stop or meeting break help spread a fresh tear film. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why that works.`,
      },
      { h: 'The winter rains and the heater' },
      {
        p: `December through February bring about 3.2 inches of rain a month and lows near 41°F, so winter is the damp season outside. Indoors, heaters run on chilly mornings and evenings. Wall heaters and floor vents send hot air up past your face, and a space heater by the couch can dry your eyes during a movie. Keep heat pointed low, take a short break from any heater you’re sitting beside, and consider a clean humidifier in the bedroom; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) walks through it.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. Its directions read: {directions}. A line about the tip follows: {tip}.`,
      },
      {
        p: `Before buying, read the panel’s caution: {warnings}. It lists storage as {storage}, and a car parked in a sunny lot on a July afternoon will run well past that, so bring the bottle inside with you. All of it is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Concord' },
      {
        p: `We ship from Brentwood, Tennessee, to Concord, Pleasant Hill, Clayton, Walnut Creek and every other US address. Checkout works without an account for anyone 18 or older. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We can’t promise a delivery date, so reorder before you run out. Unopened bottles are refundable within {returnDays} days of delivery, with nothing to mail back. Local details are on the [Concord page](/eye-drops/concord-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor in Concord' },
      {
        p: `Dry summers and daily commutes cover a lot, but not everything. The label’s stop-use section is the guide: {stopUse} Sudden pain, vision that stays blurry, or sensitivity to light that’s getting worse calls for an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs worth acting on.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Concord, California get a year?',
        a: `About 16 inches, based on NOAA’s 1991–2020 normals for Concord Buchanan Field. Almost all of it falls from November through April, and July, August and September together average less than a tenth of an inch.`,
      },
      {
        q: 'What are the wettest months in Concord, CA?',
        a: `January, February and December, each with about 3.2 inches of precipitation in NOAA’s normals for Buchanan Field. March is next at 2.26 inches.`,
      },
      {
        q: 'Why are summer mornings so cool in Concord?',
        a: `NOAA’s normals for Buchanan Field show July lows near 59°F and highs near 88°F, a swing of about 29 degrees. Many homes go from a heater or open windows at dawn to air conditioning by afternoon, and both can dry the eyes if they blow at your face.`,
      },
      {
        q: 'Does Quell ship to Concord, CA?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Concord and the rest of the United States. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-decatur-al:
   * - NOAA 1991-2020 monthly normals via ACIS (sid DCU; saved at
   *   .daily-job/acis1121/DCU.json and .daily-job/b/DCU-mint.json)
   *   (DECATUR PRYOR FIELD, elev 588 ft: precip Dec 5.20 in (wettest), Feb 4.96,
   *   Mar 4.96, Aug 3.05 (driest), Sep 3.21, Oct 3.23; sum 49.47 in; Jul max
   *   89.8 F, min 69.7; Aug max 89.8, min 67.9; Jun max 87.6; Jan max 50.7, min
   *   32.0; Dec max 53.6, min 34.6; Feb min 35.2; Nov min 39.2; Sep max 85.1;
   *   Oct max 74.5; snowfall "M",
   *   not quoted)
   * - relhum23.txt / wndspd23.txt have no Decatur row: no humidity or wind figure.
   * - Huntsville guide exists; this one is built on Pryor Field's wet December
   *   and late-summer heat. No landmark, plant or employer named; "the river"
   *   is geography only.
   */
  {
    slug: 'dry-eye-relief-decatur-al',
    title: 'Dry eye relief in Decatur, Alabama',
    description:
      'December is the wettest month at Decatur’s Pryor Field, yet indoor heat dries eyes then, and July and August reach about 90°F. NOAA’s data and tips.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Decatur, Alabama, works around two seasons that dry the eyes for opposite reasons. NOAA’s normals for Pryor Field make December the wettest month, yet that’s when indoor heat runs, and July and August highs reach about 90°F under constant air conditioning. Point vents away from your face, wear sunglasses on the water, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Decatur’s weather, read from Pryor Field' },
      {
        p: `This guide uses NOAA’s 1991–2020 climate normals for the Decatur Pryor Field station, which stands at about 590 feet. These are the official normals the National Weather Service publishes through NOWData:`,
      },
      {
        list: [
          `December is the wettest month, with 5.20 inches of precipitation. February and March each average 4.96.`,
          `August is the driest month, at 3.05 inches, followed by September (3.21) and October (3.23).`,
          `July and August share the highest normal high, 89.8°F. July’s normal low is 69.7°F.`,
          `January’s normal high is 50.7°F and its normal low 32.0°F, right at freezing.`,
          `The monthly normals total about 49.5 inches a year.`,
        ],
      },
      { h: 'December: the wettest month, and dry air indoors' },
      {
        p: `It surprises people that December, not spring, tops the precipitation list at Pryor Field. Gray, rainy days and lows near 35°F send people indoors, where the furnace or heat pump runs much of the time. Heating air that came in cold lowers its relative humidity, so the rain on the windows doesn’t help the air in the room. December is also when holiday screens, late nights and long drives to see family stack up.`,
      },
      {
        list: [
          `Keep chairs and beds out of the direct stream of a heat register.`,
          `Turn the car heater toward your feet and the windshield instead of the face vents.`,
          `Run a clean humidifier in the bedroom if the house feels parched in the morning.`,
          `Take a real break from screens in the evening, even a short one.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on keeping heated rooms easier on the eyes.`,
      },
      { h: 'July and August: two months near 90°F' },
      {
        p: `June already reaches 87.6°F on average, and July and August both settle at 89.8°F, with nights near 68°F to 70°F. That’s three months of near-constant air conditioning in homes, offices, stores and trucks. Air conditioners remove moisture as they cool, and when their vents blow at face level, the tear film (the thin layer of oil, water and mucus over each eye) evaporates faster between blinks.`,
      },
      {
        list: [
          `Redirect dash vents toward your chest, and use recirculation sparingly on long drives.`,
          `In an office, check for a ceiling diffuser right above your desk; moving a monitor a few feet can take your face out of its path.`,
          `Keep a pair of wraparound sunglasses in the truck for the walk across hot parking lots.`,
          `Bring eye drops inside with you: the label’s storage line is {storage}, and summer highs here pass the top of that range before a closed car heats up.`,
        ],
      },
      { h: 'Late summer into fall: the driest stretch' },
      {
        p: `August, September and October are the three driest months at Pryor Field, each with a little over 3 inches. Afternoons stay warm, with a normal September high of 85.1°F and an October high of 74.5°F, and people spend them at ball fields, in deer stands, on job sites and in the yard. Dust from dry ground and cut grass gets into eyes easily. Protective glasses and a habit of rinsing your hands before touching your face both help.`,
      },
      { h: 'Glare and wind on the river' },
      {
        p: `Decatur sits on the Tennessee River, and weekends on a boat, a dock or the bank are part of life here. Sun reflecting off water hits your eyes from below as well as above, and a moving boat creates its own wind even on a calm day. Polarized, wraparound sunglasses deal with both. Keep your drops in a shaded bag or cooler, not on a sunny console, and take a minute in the shade for a few full blinks when your eyes start to feel scratchy.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. On its Drug Facts panel, the Uses line reads: {uses}. Directions: {directions}. To keep the bottle clean: {tip}.`,
      },
      {
        p: `The panel carries this caution: {warnings}. It also says not to use it in one situation: {doNotUse}. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Decatur' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Decatur, Hartselle, Priceville and every other US address. Guest checkout is open to buyers 18 and older. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. There’s no promised delivery date, so order before you’re down to the last few drops, and bring the box in promptly on a hot afternoon. Unopened bottles can be refunded within {returnDays} days of delivery without returning them. See the [Decatur page](/eye-drops/decatur-al) and the [Alabama page](/eye-drops/state/alabama) for local details.`,
      },
      { h: 'When to see an eye doctor in Decatur' },
      {
        p: `Heat, heating and river glare explain plenty of everyday dryness. They don’t explain everything. The label sets the line for when to stop: {stopUse} Pain, vision changes or symptoms that keep coming back belong with an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'What is the wettest month in Decatur, Alabama?',
        a: `December, at 5.20 inches in NOAA’s 1991–2020 normals for Decatur Pryor Field. February and March are next at 4.96 inches each, and August is the driest month at 3.05 inches.`,
      },
      {
        q: 'How hot does Decatur, AL get in the summer?',
        a: `July and August both have a normal high of 89.8°F at Pryor Field, and June averages 87.6°F. July’s normal low is 69.7°F.`,
      },
      {
        q: 'Why do my eyes get dry in a North Alabama winter if it rains so much?',
        a: `Rain stays outside, but heating runs inside. Warming cold air lowers its relative humidity, so a heated room can feel dry even during the wettest month, and a vent blowing at your face speeds evaporation from the eye.`,
      },
      {
        q: 'Can I get Quell delivered in Decatur, AL?',
        a: `Yes. We ship from Brentwood, Tennessee, to Decatur and anywhere in the United States. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
/*
   * Sources fetched 2026-11-21 for dry-eye-relief-elyria-oh:
   * - NOAA 1991-2020 monthly normals via ACIS (sid LPR; saved at
   *   .daily-job/acis1121/LPR.json and .daily-job/b/LPR-mint.json)
   *   (ELYRIA LORAIN COUNTY AP, elev 791 ft: normal lows Oct 43.2 F, Nov 34.0,
   *   Dec 26.0, Jan 19.8, Feb 21.2, Mar 28.8, Apr 38.5; Jan max 33.6, Feb max
   *   36.3, Dec max 38.5; Jul max 82.3, min 62.2; Jun max 79.0; Aug max 79.9;
   *   precip Feb 1.66 in (driest), Jan 2.11, Dec 2.29, Jun 3.87 (wettest), Sep
   *   3.74, May 3.64; sum 36.72 in; snowfall "M", not quoted)
   * - relhum23.txt / wndspd23.txt have no Elyria or Lorain row: no humidity or wind figure.
   * - Cleveland guide exists (lake wind, furnace season); this one is built on
   *   the county airport's month-by-month heating calendar, workshops and
   *   garages, and a mild summer. Lake Erie is mentioned as geography only.
   */
  {
    slug: 'dry-eye-relief-elyria-oh',
    title: 'Dry eye relief in Elyria, Ohio',
    description:
      'Elyria’s normal lows stay below freezing from December into March, and February is its driest month. NOAA’s county airport data and eye relief tips.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Elyria is mostly a heating-season job. NOAA’s normals for the Lorain County airport put normal lows below freezing from December through March, and February is the driest month of the year, so furnaces, space heaters and car heaters run for months. Keep that warm air off your face, add moisture where you sleep, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Elyria’s climate, from the county airport station' },
      {
        p: `The numbers in this guide are NOAA’s 1991–2020 climate normals for the station NOAA calls Elyria Lorain County Airport, at about 790 feet. The National Weather Service publishes the same normals through NOWData. Here’s the outline:`,
      },
      {
        list: [
          `January is the coldest month, with a normal low of 19.8°F and a normal high of 33.6°F.`,
          `February’s normal low is 21.2°F, and it is the driest month, with 1.66 inches of precipitation.`,
          `June is the wettest month, at 3.87 inches, with September close behind at 3.74.`,
          `July is the warmest month, with a normal high of 82.3°F and a low of 62.2°F.`,
          `The twelve monthly normals add up to about 36.7 inches a year.`,
        ],
      },
      { h: 'The heating calendar, month by month' },
      {
        p: `Normal lows tell you when the furnace starts working. At the county airport they run like this, and each step down means more hours of heated, drier air indoors:`,
      },
      {
        list: [
          `October: 43.2°F. The first chilly mornings, and the first time many people switch the heat on.`,
          `November: 34.0°F. Heat most evenings and mornings.`,
          `December: 26.0°F. Below freezing on a normal night.`,
          `January: 19.8°F. The coldest nights of the year.`,
          `February: 21.2°F. Still deep winter, and the month with the least precipitation.`,
          `March: 28.8°F. Below freezing on a normal night, though afternoons warm up.`,
          `April: 38.5°F. The heat finally starts to rest.`,
        ],
      },
      {
        p: `That is roughly half the year with a furnace doing real work. Warming cold outdoor air without adding water lowers its relative humidity, so heated rooms feel drier the colder it gets outside. The tear film, the thin layer of oil, water and mucus over each eye, evaporates faster in that air, especially when a register blows straight at you.`,
      },
      { h: 'December through February: cold and the least precipitation' },
      {
        p: `Elyria’s three driest months are its three coldest: December (2.29 inches), January (2.11) and February (1.66). Cold, dry air comes in through doors and drafty windows and gets heated, and the result is the driest indoor air of the year. A few habits make a real difference in those weeks:`,
      },
      {
        list: [
          `Move your favorite chair, desk or headboard out of the path of the nearest floor register.`,
          `Run a cool-mist humidifier in the bedroom, and clean it as its maker directs.`,
          `Point the car heater at the floor and the windshield, not your face, on the drive to work.`,
          `Keep the thermostat moderate. A very warm house is a very dry one.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on forced air, radiators and space heaters.`,
      },
      { h: 'Garages, basements and workshops' },
      {
        p: `Winter projects move into the garage or the basement around here, and both bring their own eye problems. A space heater or salamander heater in a closed garage throws hot, dry air across a small space. Sanding, cutting and sweeping put fine dust in the air, and a basement shop with a furnace in the corner can be the driest room in the house. Wear safety glasses that fit close, keep any heater aimed at your legs, take breaks outside the dust, and wash your hands before you touch your face.`,
      },
      { h: 'Screens and long winter evenings' },
      {
        p: `December’s normal high is only 38.5°F, and January’s is 33.6°F, so winter evenings tend to be spent inside with a television, a laptop or a phone. Focusing on a screen slows blinking, and fewer blinks leave the tear film exposed longer. Look away from the screen now and then, blink fully, and get up between episodes. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blink connection.`,
      },
      { h: 'A mild summer with open windows' },
      {
        p: `Summer is gentler. July’s normal high is 82.3°F, and June and August sit near 79°F to 80°F, so many Elyria homes can open the windows for stretches of the season rather than run the AC every day. June is the wettest month of the year. The air conditioning that does run still dries the air, and an office or a car vent aimed at your face matters in July as much as a furnace does in January. Mowing season brings grass clippings and dust, and a day at the beach on Lake Erie, a short drive north, brings sun and wind off the water. Sunglasses that wrap around the sides help with both.`,
      },
      { h: 'Using Quell through an Ohio winter' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section of its Drug Facts panel reads: {uses}. It is directed as follows: {directions}. The panel adds: {tip}.`,
      },
      {
        p: `The caution on the panel reads: {warnings}. Its storage line is {storage}. With January nights near 20°F, a bottle left in the car through a January night or in an unheated garage will drop below that range, so keep it indoors. If a bottle has been exposed to cold or heat, check it first; the label says {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Elyria' },
      {
        p: `We ship from Brentwood, Tennessee, to Elyria, Lorain, North Ridgeville, Oberlin and every other US address. You can check out as a guest if you’re 18 or older. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order with some room to spare, and bring the box inside quickly on a freezing day. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t send it back. The [Elyria page](/eye-drops/elyria-oh) and the [Ohio page](/eye-drops/state/ohio) have more.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Winter air explains a lot, but it doesn’t explain everything. Quell’s label is direct about when to stop: {stopUse} An eye doctor can find the cause and decide what to do, especially for pain, vision changes or one eye that’s much worse than the other. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Elyria, Ohio?',
        a: `February, with 1.66 inches of precipitation in NOAA’s 1991–2020 normals for the Lorain County airport station. January (2.11 inches) and December (2.29 inches) are the next driest.`,
      },
      {
        q: 'How cold does Elyria get in winter?',
        a: `January is the coldest month at the Lorain County airport, with a normal low of 19.8°F and a normal high of 33.6°F. Normal lows stay below freezing from December through March.`,
      },
      {
        q: 'Why do my eyes feel dry as soon as the furnace comes on?',
        a: `Heating cold air without adding moisture lowers its relative humidity, so the tear film evaporates faster between blinks. A register or vent blowing toward your face speeds that up even more.`,
      },
      {
        q: 'Can I order Quell in Elyria, Ohio?',
        a: `Yes. We ship from Brentwood, Tennessee, to Elyria and every other US address. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-hialeah-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (sid OPF; saved at
   *   .daily-job/acis1121/OPF.json and .daily-job/b/OPF-mint.json)
   *   (MIAMI OPA LOCKA AP, elev 4 ft: precip Jan 1.81 in (driest), Dec 2.17,
   *   Mar 2.51, Feb 2.66, Apr 2.94, Nov 2.89, May 6.05, Jun 8.92 (wettest), Jul
   *   8.13, Aug 8.08, Sep 8.71, Oct 7.78; sum 62.65 in; May-Oct sum 47.67 in;
   *   Aug max 91.1 F (hottest), min 76.8; Jul max 90.8; Jun max 89.7; Jan max
   *   76.7, min 58.9; Dec min 62.3; Feb min 61.2; snowfall "M", not quoted)
   * - relhum23.txt's MIAMI row is Miami International, a different station: not used.
   * - The station is in Opa-locka, not Hialeah; named as NOAA lists it. Miami
   *   and Fort Lauderdale guides exist; this one is built on the dry-season
   *   January, outdoor work in heat, and storage during a power outage.
   */
  {
    slug: 'dry-eye-relief-hialeah-fl',
    title: 'Dry eye relief in Hialeah, Florida',
    description:
      'Hialeah’s summers run near 91°F with heavy rain, and January is the driest month. NOAA’s Opa-locka normals, AC, outages and everyday eye relief.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Hialeah comes down to air conditioning, sun and heat more than dry weather. NOAA’s normals for the nearby Opa-locka airport show August highs near 91°F and more than 8 inches of rain a month in summer, while January is the driest month. Keep AC vents off your face, wear sunglasses outdoors, keep eye drops within their labeled temperature range, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Hialeah’s weather in NOAA’s Opa-locka normals' },
      {
        p: `NOAA doesn’t publish climate normals for a station inside Hialeah, so this guide uses the closest one: the Opa-locka airport station, which NOAA lists as Miami Opa Locka Airport, at about 4 feet above sea level. These are its 1991–2020 normals, the same ones the National Weather Service shows in NOWData:`,
      },
      {
        list: [
          `August is the hottest month, with a normal high of 91.1°F and a normal low of 76.8°F. July is close at 90.8°F.`,
          `June is the wettest month, with 8.92 inches, and September follows at 8.71.`,
          `January is the driest month, with 1.81 inches, and also the coolest, with a normal low of 58.9°F.`,
          `The year’s total comes to about 62.7 inches of precipitation.`,
        ],
      },
      { h: 'Six wet months and six drier ones' },
      {
        p: `From May through October the station averages about 47.7 inches of rain, roughly three-quarters of the year’s total. November through April are much drier, each under 3 inches. The split doesn’t change much about your eyes outdoors, since summer air here is warm and moist, but it shapes how people live. Summer pushes everyone into air conditioning for months, and the drier months bring windows open, more time outside and stronger sun on cloudless days.`,
      },
      { h: 'January: the driest month and the coolest nights' },
      {
        p: `January’s 1.81 inches make it the driest month of the year, and its normal low of 58.9°F is the coolest. When a cool front comes through, people turn off the AC, open the windows and get outside more. Those are some of the easiest weeks of the year for eyes indoors. Outdoors, a bright, breezy dry-season day still speeds evaporation from the tear film, the thin layer of oil, water and mucus over the eye, and a long afternoon at a park or a ball game can leave eyes scratchy by evening.`,
      },
      {
        list: [
          `Wear sunglasses that wrap around the sides on breezy, cloudless days.`,
          `Take short shade breaks during long outdoor events and blink fully a few times.`,
          `If you use a space heater on the few cold nights, aim it at your feet.`,
        ],
      },
      { h: 'Working in the heat' },
      {
        p: `A lot of Hialeah’s workday happens in heat: loading docks, job sites, delivery routes, auto shops and bus stops. Summer normal highs near 90°F to 91°F, with sun and glare off concrete, wear on the eyes, and sweat running into them makes it worse. Moving from that heat into a cold, air-conditioned office or truck cab adds a blast of dry air on top.`,
      },
      {
        list: [
          `Wear wraparound safety glasses or sunglasses where the job allows; they block dust, glare and moving air.`,
          `Keep a clean cloth or towel for sweat, and wipe your forehead before it reaches your eyes.`,
          `Wash your hands before touching your eyes, especially after handling tools or packaging.`,
          `When you step into a cold cab or office, turn the vents away from your face before you get comfortable.`,
        ],
      },
      {
        p: `[Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) goes further for people who spend the whole shift outside.`,
      },
      { h: 'Air conditioning at home, at work and in the car' },
      {
        p: `In a South Florida summer, air conditioning runs nearly everywhere you go. It cools by pulling moisture out of the air, and a vent aimed at your face dries the eye’s surface quickly. Small adjustments help: point dash vents at your chest, keep fans from blowing across your pillow, and look away from the phone or the screen for a few seconds now and then so your blinks catch up.`,
      },
      { h: 'Eye drops and a power outage' },
      {
        p: `Storms can knock out power for hours or days, and without air conditioning a closed house heats up quickly. Quell’s label gives its storage range as {storage}. August’s normal high at the station, 91.1°F, is already above the top of that range, so a house without power, a car or a storm shelter can take a bottle past it. Keep your drops in the coolest interior spot you have, away from windows, and out of a closed car.`,
      },
      {
        p: `After a long outage, look at the bottle before using it. {appearance} The label also says {doNotUse}. If you’re building a storm supply, keep the drops with your other medicines in a closed bag you can carry.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes it this way: {uses}. The directions say: {directions}. To keep the dropper clean: {tip}.`,
      },
      {
        p: `One caution comes first on the panel: {warnings}. Everything else, from the active ingredients to the storage line, is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Hialeah' },
      {
        p: `We ship from Brentwood, Tennessee, to Hialeah, Miami Lakes, Miami Springs and every other US address. Guest checkout is open to anyone 18 or older. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order ahead, and bring the package inside soon after it arrives on a hot day. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Hialeah page](/eye-drops/hialeah-fl) and the [Florida page](/eye-drops/state/florida) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Heat, AC and sun account for a lot of everyday dryness, but not all of it. The label’s stop-use section tells you when to stop: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs worth acting on.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Hialeah, Florida?',
        a: `January, with 1.81 inches of precipitation in NOAA’s 1991–2020 normals for the Opa-locka airport station, the closest NOAA normals station to Hialeah. December is next at 2.17 inches.`,
      },
      {
        q: 'How hot does Hialeah get in August?',
        a: `NOAA’s normals for the Opa-locka airport station put August’s normal high at 91.1°F and its normal low at 76.8°F, making August the hottest month there.`,
      },
      {
        q: 'Where should I keep eye drops during a power outage in Florida?',
        a: `In the coolest interior spot you have, away from windows and out of any closed car. Quell’s label gives its storage range as {storage}, and a house without air conditioning in summer can climb past the top of that range.`,
      },
      {
        q: 'Does Quell ship to Hialeah, FL?',
        a: `Yes. We ship from Brentwood, Tennessee, to Hialeah and anywhere else in the United States. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-pembroke-pines-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (sid HWO; saved at
   *   .daily-job/acis1121/HWO.json and .daily-job/b/HWO-mint.json)
   *   (HOLLYWOOD NORTH PERRY AP, elev 6 ft: Aug max 91.8 F (hottest), min 77.5;
   *   Jul max 91.7, min 77.1; Jun max 90.0; Jan max 76.9, min 59.4; Dec max
   *   78.6, min 62.9; precip Jun 8.72 in (wettest), Jul 6.82, Aug 8.49, Sep
   *   7.98, Oct 7.65, May 5.18, Dec 2.18 (driest), Mar 2.68, Jan 2.71; sum
   *   61.98 in; snowfall "M", not quoted)
   * - No North Perry row in relhum23.txt / wndspd23.txt: no humidity or wind figure.
   * - Station named as ACIS lists it. Miami, Fort Lauderdale and Hialeah guides
   *   exist; this one is organized by the hours of a day (morning, midday car,
   *   afternoon storms, evening), with no landmarks named.
   */
  {
    slug: 'dry-eye-relief-pembroke-pines-fl',
    title: 'Dry eye relief in Pembroke Pines, Florida',
    description:
      'Pembroke Pines summers reach about 92°F, with afternoon storms from June on. Hour-by-hour dry eye relief, built on NOAA’s North Perry airport normals.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Pembroke Pines is easiest to plan hour by hour. NOAA’s normals for North Perry Airport show summer highs near 92°F, so midday means hot cars and strong AC, summer afternoons bring storms, and evenings move indoors. Do outdoor exercise early, keep vents and fans off your face, never leave eye drops in a parked car, use them as the label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'North Perry’s numbers for Pembroke Pines' },
      {
        p: `The figures here are NOAA’s 1991–2020 climate normals for North Perry Airport, which NOAA’s data service lists as Hollywood North Perry Airport, at about 6 feet above sea level. They are the official normals behind the National Weather Service’s NOWData pages:`,
      },
      {
        list: [
          `August is the hottest month: normal high 91.8°F, normal low 77.5°F. July is a tenth of a degree cooler in the afternoon.`,
          `June is the wettest month, with 8.72 inches. August (8.49) and September (7.98) follow, while July dips to 6.82.`,
          `December is the driest month, with 2.18 inches, and January has the coolest nights, with a normal low of 59.4°F.`,
          `The twelve monthly totals add up to about 62 inches a year.`,
        ],
      },
      { h: 'Early morning: the gentlest air of the day' },
      {
        p: `Even in August, the normal low is 77.5°F, and the hours around sunrise are when Pembroke Pines is coolest and the sun is lowest. That makes early morning the easiest time for eyes outdoors. A walk, a run or a round of yard work before the heat builds spares you the strongest glare and the hardest afternoon sun.`,
      },
      {
        list: [
          `Wear sunglasses even at dawn when you drive east toward the sunrise.`,
          `If you run or bike, a pair that wraps around the sides keeps sweat and breeze out of your eyes.`,
          `Do the mowing and the hedge trimming early, and wear safety glasses for both.`,
        ],
      },
      { h: 'Midday: parking lots, hot cars and your eye drops' },
      {
        p: `Life in the western suburbs runs on the car, and by midday the parking lots are the hottest places most people stand on a summer day. Climbing into a car that’s been in the sun, you turn the AC to full and aim it at your face, which is about the fastest way there is to dry the tear film, the thin layer of oil, water and mucus over each eye. Aim the vents at your chest instead, and give the cabin a minute to cool with the windows cracked.`,
      },
      {
        p: `The bottle needs the same care. Quell’s label lists its storage range as {storage}, and from June through September the normal afternoon high at North Perry is at or above 90°F, already past the top of that range before a closed car heats up. Keep drops in your bag and take the bag inside. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains what to check if one stayed behind.`,
      },
      { h: 'Afternoon: storm season from June through October' },
      {
        p: `From May through October, the monthly rain totals jump, with June the wettest month of the year. Much of that comes as afternoon storms that send everyone inside. Outdoors the air is humid, but indoors you are back under the AC, often in a store, a gym or an office with vents overhead. That pattern can repeat every day for months, so the indoor habits matter most:`,
      },
      {
        list: [
          `Choose a seat at the office or library away from a ceiling diffuser.`,
          `Take a short break from the screen when you hear thunder; look out the window and blink fully.`,
          `If the gym blows air across the treadmills, face away from the fans.`,
        ],
      },
      { h: 'December: the driest month and windows open' },
      {
        p: `December’s 2.18 inches make it the driest month, and its normal low of 62.9°F, with January cooler still at 59.4°F, means a lot of homes turn the AC down or off. Those weeks often bring visiting family, holiday drives to the airport and long days at outdoor events. Dry-season sun on a cloudless day is still strong, so keep the sunglasses handy. If guests arrive from colder places, they may notice their eyes feel better here than at home, until they sit beside the AC vent in the car.`,
      },
      { h: 'Evening: AC, ceiling fans and screens' },
      {
        p: `Evenings in summer are still in the 80s, so they happen indoors for most people. Ceiling fans over the couch and the bed keep air moving across your face for hours, and streaming, scrolling and gaming slow your blink rate. Set fans to a lower speed or move them off the direct line to your pillow, take a break between episodes, and look up from the phone now and then. [Screens and your tear film](/guides/screens-and-your-tear-film) has more on why screens dry the eyes.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. Its directions: {directions}. And on handling: {tip}.`,
      },
      {
        p: `Read this caution before you order: {warnings}. The label adds a sign to watch for: {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Pembroke Pines' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Pembroke Pines, Miramar, Cooper City, Weston and every other US address. Buyers must be 18 or older, and no account is needed. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, and a box on a sunny doorstep gets hot, so bring it in as soon as you can. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. See the [Pembroke Pines page](/eye-drops/pembroke-pines-fl) and the [Florida page](/eye-drops/state/florida) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Hot cars, AC and screens explain a lot of everyday dryness, but not every symptom. The label spells out when to stop: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Pembroke Pines, Florida?',
        a: `August, with a normal high of 91.8°F and a normal low of 77.5°F in NOAA’s 1991–2020 normals for North Perry Airport. July’s normal high is 91.7°F.`,
      },
      {
        q: 'When is the rainy season in Pembroke Pines?',
        a: `May through October, when monthly totals at North Perry Airport run from about 5 to nearly 9 inches. June is the wettest month at 8.72 inches, and December is the driest at 2.18 inches.`,
      },
      {
        q: 'Is it bad to aim the car AC at your face?',
        a: `It dries the eyes quickly, because cold, fast-moving air speeds evaporation from the tear film. Aiming the vents at your chest or the windshield cools the car just as well and is easier on your eyes.`,
      },
      {
        q: 'Can I order Quell to Pembroke Pines, FL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Pembroke Pines and the rest of the United States. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },
/*
   * Facts for can-i-ship-to-a-different-address-than-billing, read 2026-11-21 from:
   * - src/app/api/checkout/route.ts (shipTo schema: first/last name, line1,
   *   optional line2, city, two-letter state, 5- or 9-digit ZIP, country US,
   *   phone required; one shipTo per order; 10-bottle cap per order)
   * - src/lib/authorizenet.ts (hosted page: billing address shown and required;
   *   shipping address hidden there and passed in from our form)
   * - src/components/CartView.tsx and src/lib/checkout-memory (guest details
   *   saved in the browser after submit, "Not you? Clear details")
   * - src/lib/email.ts (confirmation greets the first word of the shipping name,
   *   lists items, prices, subtotal, shipping, total and the ship-to block)
   */
  {
    slug: 'can-i-ship-to-a-different-address-than-billing',
    title: 'Can I ship to a different address than billing?',
    description:
      'Yes. Quell’s checkout takes the shipping address on its own form and the billing address on the payment page, so a gift can go anywhere in the US.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Yes. Quell’s checkout collects the two addresses in different places, so they never have to match. The shipping address goes on the cart page’s “Ship to” form, and the billing address goes with your card on the secure payment page. Put the recipient’s name and address in “Ship to,” your own email for the receipt, and your card’s billing address when the payment page asks for it.`,
      },
      { h: 'How checkout keeps the two addresses apart' },
      {
        p: `The cart page asks for the shipping details: first and last name, street address, an optional apartment or suite line, city, a two-letter state code, a ZIP code and a phone number. If you’re checking out as a guest, it also asks for an email address, with a note that your receipt and tracking go there.`,
      },
      {
        p: `When you press continue, the shop hands those shipping details to Authorize.net, the payment processor, and sends you to its payment page. That page asks for your card and the card’s billing address, and the billing address is required there. It doesn’t ask for a shipping address again, because the shop already has it. The two never get compared. [Why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) walks through that handoff in more detail.`,
      },
      { h: 'Step by step: shipping a gift to someone else' },
      {
        list: [
          `Add the bottles to your [cart](/cart). Shipping is {shipping}, or free on {freeBottles} or more bottles.`,
          `In the email field, enter your own address, so the receipt and tracking come to you rather than the recipient.`,
          `Under “Ship to,” enter the recipient’s first and last name exactly as they’d want it on the package.`,
          `Type their street address, and use the apartment or suite line for a unit, a suite or a company name.`,
          `Enter their city, the two-letter state code and their ZIP code (five digits, or ZIP+4).`,
          `Enter a phone number for the delivery. The field is required, and the note beside it explains that the carrier asks for one.`,
          `Continue to payment, then enter your card and your billing address on the payment page.`,
        ],
      },
      { h: 'Why your receipt may greet the recipient by name' },
      {
        p: `The confirmation email opens with a thank-you that uses the first name from the shipping address, not the buyer’s name. Guest orders have no account name to use, so the shipping name is the one the email has. If you sent a gift to your sister, your own receipt will say “Thanks” followed by her first name. That’s expected, and it means the order went in with her name on the package.`,
      },
      {
        p: `The same email lists each item with its price, the subtotal, the shipping charge, the total and the address it’s going to. Read the address block once when it arrives. If a house number or ZIP is wrong, that’s the moment to call {phone} ({hours}) with the order number, before it ships.`,
      },
      { h: 'Your next order will remember the gift address' },
      {
        p: `If you check out as a guest, this browser saves the name, address, phone and email you used, so you don’t have to type them again. That’s handy for reorders and easy to forget after a gift. The next time you open the cart on the same device, the “Ship to” fields will hold the recipient’s details, not yours.`,
      },
      {
        list: [
          `Check the “Ship to” name and street before every order.`,
          `To wipe the saved details, use “Not you? Clear details” on the cart page.`,
          `The details stay on your device; the privacy policy says the shop never receives a copy of them.`,
        ],
      },
      {
        p: `[Why checkout remembers your details](/guides/checkout-remembers-your-details) covers the feature on its own.`,
      },
      { h: 'Several people, several addresses' },
      {
        p: `Each order has one shipping address. If you want bottles to go to three people in three towns, that’s three orders, each with its own “Ship to” details and its own order number. Every order is priced on its own, so each one pays {shipping} unless it reaches {freeBottles} bottles. A single order can hold up to ten bottles. If everyone will be in the same place for the holidays, one order to one address costs less, and [buying Quell for several people](/guides/buying-quell-for-several-people) compares the two approaches.`,
      },
      { h: 'What stays with you as the buyer' },
      {
        p: `The person paying must be at least 18, and every address has to be in the United States. As the buyer, you hold the order number and receive both emails, so any question about the order starts with you. Under /terms, an unopened bottle can be refunded within {returnDays} days of delivery without being sent back, and an order that arrives damaged, incorrect or with a broken seal is replaced within the same {returnDays} days. Either way, the call to {phone} needs the order number, so keep the confirmation email until the gift has been opened.`,
      },
      { h: 'Before you send it' },
      {
        p: `Quell’s label carries one caution worth checking with the recipient first: {warnings}. The label doesn’t cover contact lens wearers or use with other eye drops, so if either applies, they should ask their eye doctor or pharmacist before using it. They can read the whole panel on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can my billing address and shipping address be different on Quell?',
        a: `Yes. The shipping address is entered on the cart page and the billing address on the card processor’s payment page, and the two are never compared. A gift can ship to any US address while the card bills to yours.`,
      },
      {
        q: 'Why does my order confirmation use the gift recipient’s name?',
        a: `The confirmation email greets the first name on the shipping address, because guest orders have no account name. If you shipped to someone else, your receipt will greet them, and it still comes to your email.`,
      },
      {
        q: 'Will my next order ship to the last gift address?',
        a: `It might. Guest checkout saves the last name, address, phone and email in your browser and fills them in next time. Check the “Ship to” fields before paying, or use “Not you? Clear details” to start fresh.`,
      },
      {
        q: 'Can one Quell order ship to two addresses?',
        a: `No. Each order has a single shipping address, so bottles for two places need two orders. Each order pays {shipping} unless it has {freeBottles} or more bottles.`,
      },
    ],
  },
  /*
   * Facts for will-the-gift-recipient-see-the-price, read 2026-11-21 from:
   * - src/lib/email.ts (confirmation: item prices, subtotal, shipping, total,
   *   ship-to; shipping notice: tracking number when present, carrier label,
   *   ship-to, one directions line, no prices; both go to order.email)
   * - src/components/OrderLookup.tsx and src/app/api/orders/lookup/route.ts
   *   (lookup needs order number and email; shows item prices, subtotal,
   *   shipping, total and address; shipped status says to check email for
   *   tracking)
   * - src/app/api/checkout/route.ts and CartView.tsx (no gift message, gift
   *   receipt or price-hiding field anywhere in checkout)
   * - Nothing in the code says what paperwork goes in the box, so the guide
   *   doesn't say; it sends readers to the phone line.
   */
  {
    slug: 'will-the-gift-recipient-see-the-price',
    title: 'Will the gift recipient see the price?',
    description:
      'Quell’s receipts go to the buyer’s email, and the shipping email has no prices. What a gift recipient can see, and how to share tracking safely.',
    category: 'ordering',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Not from the emails. The order confirmation, which lists every price and the total, goes only to the email address on the order, so put your own email there. The shipping email has no prices at all, just the tracking details and the address, which makes it the safe one to forward. Checkout has no gift receipt option, so if the box’s paperwork matters, call {phone} before ordering or ship it to yourself first.`,
      },
      { h: 'Where the price shows up' },
      {
        p: `Two places on this site show what an order cost. Both are tied to the buyer, not the person receiving the package:`,
      },
      {
        list: [
          `The confirmation email. It arrives once payment goes through and lists each item with its price, then the subtotal, the shipping charge (or “Free”), the total and the shipping address.`,
          `The order lookup page. Entering an order number together with the email used at checkout on the [track your order](/orders) page shows the items, their prices, the subtotal, shipping, total and address.`,
        ],
      },
      {
        p: `Both depend on the email on the order. If that’s yours, the recipient never receives the confirmation, and they can’t pull up the lookup page without your order number and your email address together.`,
      },
      { h: 'Where it doesn’t' },
      {
        p: `The shipping email is a different message. When the order is marked shipped, it tells you the order number has shipped, gives the tracking number when one is available (with a link when the carrier is recognized), repeats the shipping address and ends with the label’s directions. There are no item prices, no subtotal and no total in it. Our guide to [the shipping email](/guides/the-shipping-email) shows the whole message.`,
      },
      { h: 'Sharing tracking without sharing the cost' },
      {
        p: `If the person you’re sending to wants to watch for the box, the shipping email is what to share:`,
        },
      {
        list: [
          `Wait for the shipping email, which comes after the confirmation.`,
          `Forward it, or copy just the tracking number into a text.`,
          `Don’t forward the confirmation email, which carries the prices.`,
          `Don’t send them your order number and email together, since that pair opens the lookup page with the full price breakdown.`,
        ],
      },
      {
        p: `The lookup page doesn’t show a tracking number anyway. Once an order has shipped, it tells you to check your email for tracking, so the shipping email really is the piece the recipient needs.`,
      },
      { h: 'What checkout doesn’t offer' },
      {
        p: `There’s no gift-message box, no gift-wrap choice and no gift receipt option anywhere in Quell’s checkout. The cart page asks for an email, a name, an address and a phone number, and the payment page asks for a card and its billing address. Nothing in the process lets you mark an order as a gift or ask for prices to be left off.`,
      },
      {
        p: `If you need to know exactly what paper goes into the box, ask before you order: call {phone} ({hours}). Otherwise, the surest route is to ship the order to yourself, then wrap it and hand it over or mail it on. [Can you mail eye drops to someone?](/guides/can-you-mail-eye-drops) covers sending it yourself.`,
      },
      { h: 'What the recipient will see' },
      {
        p: `They’ll see a package with their name and address on it, since the “Ship to” name is the name on the label. The phone number you entered goes with the delivery details, because the carrier asks for one, so choose a number that will reach whoever is home for the delivery. Inside is the bottle in its carton, with the Drug Facts panel printed on it.`,
      },
      {
        p: `A quick heads-up text helps. A box from an unfamiliar shop can sit unopened or get mistaken for someone else’s order, and on a hot or freezing day you want it brought inside soon. The label gives the storage range as {storage}.`,
      },
      { h: 'If they don’t want it' },
      {
        p: `Under /terms, an unopened bottle can be refunded within {returnDays} days of delivery, and nobody has to send it back. The refund is for the product price; original shipping isn’t refunded. The call comes from you, because you hold the order number. A damaged, incorrect or broken-seal order is replaced within the same {returnDays} days. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) goes through that conversation.`,
      },
      {
        p: `One more thing to check before ordering: the label’s caution reads {warnings}, so ask about egg or bird allergies before the box goes out.`,
      },
    ],
    faq: [
      {
        q: 'Does the Quell shipping email show the price?',
        a: `No. It has the order number, the tracking number when one is available, the shipping address and a line from the label’s directions. Prices and the total appear only in the confirmation email and on the order lookup page.`,
      },
      {
        q: 'Can the person I sent a gift to track the package?',
        a: `Yes, if you forward them the shipping email or copy the tracking number from it. The shipping email has no prices, so it’s the one to share rather than the confirmation.`,
      },
      {
        q: 'Can I add a gift message to an eye drop order?',
        a: `Not on quelldrop.com. Checkout has no gift-message box, gift-wrap option or gift receipt. To add a card, ship the order to yourself and pass it along with your own note.`,
      },
      {
        q: 'Does Quell offer a gift receipt?',
        a: `No. There’s no gift receipt option at checkout. The confirmation email with prices goes to the email on the order, so using your own email keeps it with you.`,
      },
    ],
  },
  /*
   * Facts for shipping-eye-drops-to-an-apo-or-fpo-address, read 2026-11-21 from:
   * - src/app/api/checkout/route.ts (line1 max 60 chars, line2 optional, city
   *   max 40, state = any two letters, ZIP 5 digits or ZIP+4, country enum US,
   *   phone 10-15 digits)
   * - src/lib/shipping.ts (SHIPPABLE_COUNTRIES = ['US']); grep of src for APO,
   *   FPO, military, PO Box: no handling anywhere
   * - src/app/terms/page.tsx §3, §6, §7
   * The site makes no statement about military mail, so the guide says so and
   * sends readers to the phone line; no carrier and no transit time named.
   */
  {
    slug: 'shipping-eye-drops-to-an-apo-or-fpo-address',
    title: 'Can I ship eye drops to an APO or FPO address?',
    description:
      'Quell ships within the US, but its checkout has no military-mail option and the site makes no promise for APO or FPO. What to do before ordering.',
    category: 'shipping',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Not with any promise from this site. Quell ships within the United States, but checkout has no option for military mail, and nothing on the site says APO, FPO or DPO addresses are served. The address boxes may accept one, which isn’t the same as a delivery commitment. Call {phone} ({hours}) before ordering, or ship to a stateside address and mail it on from there.`,
      },
      { h: 'What the address form actually checks' },
      {
        p: `The “Ship to” form on the cart page checks a short list of things before it lets an order through:`,
      },
      {
        list: [
          `A first and last name.`,
          `A street address, up to 60 characters, and an optional apartment or suite line.`,
          `A city, up to 40 characters.`,
          `A state written as exactly two letters.`,
          `A ZIP code of five digits, or five plus four.`,
          `A phone number with 10 to 15 digits once punctuation is ignored.`,
          `A country, and the only one checkout accepts is the United States.`,
        ],
      },
      {
        p: `That’s all it checks. It doesn’t look up whether a ZIP code belongs to a military post office or whether a two-letter code is a state at all. So a military address can fit in the boxes and still be one the order can’t reach. That gap is why this guide doesn’t tell you to just type it in and hope.`,
      },
      { h: 'What the terms say' },
      {
        p: `Quell’s [terms of service](/terms) say the shop ships within the United States only. They also say risk of loss passes on delivery to the address you provide, and that the shop isn’t responsible for delays caused by the carrier or by an incorrect address. Delivery estimates are described as estimates, not promises. None of that mentions military mail either way, which is the reason to ask first rather than assume.`,
      },
      { h: 'Ask before you order' },
      {
        p: `The phone line is {phone}, staffed {hours}. A short call settles it before any money changes hands. Have this ready:`,
      },
      {
        list: [
          `The full address as the service member gave it to you.`,
          `How many bottles you want to send.`,
          `A stateside phone number someone will answer, since checkout requires one for the delivery.`,
          `Your own email, so the receipt and tracking come to you.`,
        ],
      },
      { h: 'The stateside route' },
      {
        p: `Many families send a care package from home anyway, with snacks, letters and toiletries packed together. Quell can be part of that. Ship the order to your own address or to a relative in the United States, check it on arrival, then pack it into the box you’re mailing yourself. The order’s refund and replacement rules then apply to a delivery you can see and inspect. [Can you mail eye drops to someone?](/guides/can-you-mail-eye-drops) covers packing a bottle for the mail.`,
      },
      {
        p: `If the service member is still stateside before leaving, the simplest route of all is to order to their current address and let them pack the bottle themselves.`,
      },
      { h: 'Heat, cold and a long trip' },
      {
        p: `Mail to an overseas post can spend a long time in transit, in trucks, warehouses and aircraft holds you can’t control. Quell’s label gives its storage range as {storage}. A care package crossing a desert summer or a northern winter can leave that range for days. Pack the bottle in the middle of the box, surrounded by soft items, and ask the recipient to look at it before using it. {appearance} The label also says {doNotUse}.`,
      },
      { h: 'Timing and the refund window' },
      {
        p: `No delivery date is promised for any order, and the clock on refunds and replacements runs from delivery. An unopened bottle can be refunded within {returnDays} days of delivery without being sent back, and an order that arrives damaged, incorrect or with a broken seal is replaced if you call within {returnDays} days. With the stateside route, that delivery is to you, so check the order as soon as it arrives, before it goes into the care package. [What to check when your order arrives](/guides/what-to-check-when-your-order-arrives) has a short checklist.`,
      },
      { h: 'Stateside bases with a street address' },
      {
        p: `A base inside the United States with a regular street address, city, state and ZIP is a different case from APO or FPO mail. Checkout handles it like any other US address, though the installation’s own rules for packages, gates and mailrooms still apply. Ask the recipient how packages reach them before you order.`,
      },
    ],
    faq: [
      {
        q: 'Does Quell ship to APO addresses?',
        a: `The site doesn’t say it does. Checkout has no military-mail option and the terms describe shipping within the United States only, so call {phone} ({hours}) before placing an order to an APO, FPO or DPO address.`,
      },
      {
        q: 'Can I send eye drops in a care package to a deployed service member?',
        a: `You can ship Quell to your own US address first, check it, and pack it into a care package you mail yourself. Pack it in the middle of the box, since the label’s storage range is {storage}.`,
      },
      {
        q: 'Will checkout reject a military address?',
        a: `Not necessarily. The form checks only that the state is two letters, the ZIP is five or nine digits and the country is the United States. Fitting the form isn’t the same as being deliverable, which is why it’s worth asking first.`,
      },
      {
        q: 'Can I ship eye drops to a military base in the US?',
        a: `If the base uses a standard street address, city, state and ZIP, checkout handles it like any other US address. The installation’s own package and mailroom rules still apply, so ask the recipient how packages reach them.`,
      },
    ],
  },
  /*
   * Facts for why-do-you-need-a-phone-number-to-ship, read 2026-11-21 from:
   * - src/lib/phone.ts (10-15 digits after stripping non-digits; accepts
   *   "(615) 555-0142", "615.555.0142", "+1 615 555 0142", "6155550142 x204";
   *   rejects blank, "n/a", "none", short numbers; not checked for reachability)
   * - src/app/api/checkout/route.ts (required; max 30 chars; stored verbatim,
   *   extensions included; the comment says the carriers ask for a number)
   * - src/components/CartView.tsx (field label "Phone"; note says it's for
   *   delivery updates and that the carrier asks for a number)
   * - src/app/privacy/page.tsx (guest name, address, email and phone saved in
   *   the buyer's own browser; "Not you? Clear details")
   */
  {
    slug: 'why-do-you-need-a-phone-number-to-ship',
    title: 'Why do you need a phone number to ship eye drops?',
    description:
      'Quell’s checkout requires a phone number because the carrier asks for one for delivery. What it accepts, whose number to use for a gift, and more.',
    category: 'shipping',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Because the carrier asks for one. Quell’s checkout requires a phone number with every shipping address, and the note under the field says it’s for delivery updates. Any number with 10 to 15 digits works, in whatever format you like, extensions included. Use a number that reaches whoever will be at the delivery address, which for a gift may be the recipient rather than you.`,
      },
      { h: 'What the number is for' },
      {
        p: `The phone field sits in the “Ship to” section of the cart page, right after the ZIP code, and it’s required. The short note beneath it explains that it’s there for delivery updates and that the carrier asks for a number. It travels with the shipping address as part of the order, so the person booking the shipment has it alongside the name and street.`,
      },
      {
        p: `That’s the whole reason. It isn’t a sign that something is expected to go wrong with the order, and it isn’t a login or a verification step. Your receipt and tracking still go to the email address, not to the phone.`,
      },
      { h: 'What counts as a valid number' },
      {
        p: `The rule is deliberately loose. Checkout throws away everything that isn’t a digit, then counts what’s left. Between 10 and 15 digits passes. All of these are accepted:`,
      },
      {
        list: [
          `(615) 555-0142`,
          `615.555.0142`,
          `+1 615 555 0142`,
          `6155550142 x204`,
        ],
      },
      {
        p: `What it catches is the obvious stuff: a blank field, “n/a,” “none,” or a number that’s a few digits short. If a number is refused, the message asks for a phone number with at least 10 digits and explains that the carrier needs it for delivery. The field allows up to 30 characters in all, which leaves room for punctuation and an extension.`,
      },
      { h: 'Extensions, work lines and country codes' },
      {
        p: `The number is saved exactly as you typed it, extension and all, so a work line with an extension is fine. A leading +1 is fine too. Checkout doesn’t look the number up or call it to see if it works, so a landline, a mobile or a desk phone all go through the same way. That also means a typo won’t be caught if it still has enough digits, so read it back once before you continue.`,
      },
      { h: 'Ordering for someone else: whose number?' },
      {
        p: `When the package is going to someone else, think about who should get any call or update about the delivery. If the recipient is the one who’ll be home, or the address is a building where the driver might need to reach them, their number makes more sense. If you’d rather the delivery details stay with you, or you don’t have their number, yours works; it just means any contact about the delivery reaches you instead of the door.`,
      },
      {
        p: `Either way, the email on the order should be yours if you want the receipt and the tracking. [Can I ship to a different address than billing?](/guides/can-i-ship-to-a-different-address-than-billing) covers the rest of a gift order.`,
      },
      { h: 'Where the number is kept' },
      {
        p: `The number is stored with the order, along with the name, address, email and what was bought. If you check out as a guest, your browser also remembers your name, address, email and phone so the form is filled in next time. According to the [privacy policy](/privacy), that saved copy stays on your device, the shop never receives it, and you can remove it with “Not you? Clear details” on the cart page or by clearing your browser’s site data. On a shared computer, that button is worth using.`,
      },
      { h: 'If you typed it wrong' },
      {
        p: `Check the confirmation email when it arrives; it shows the shipping address you entered. If you realize the phone number or anything else in the address is wrong, call {phone} ({hours}) with your order number as soon as you can. Our guide on [entering the wrong shipping address](/guides/wrong-shipping-address) explains what can and can’t be changed.`,
      },
      { h: 'The rest of what shipping involves' },
      {
        p: `Shipping is {shipping}, or free on orders of {freeBottles} or more bottles, and orders go anywhere in the United States from Brentwood, Tennessee. No delivery date is promised. The shipping email carries a tracking number when one is available, and [how to track your order](/guides/how-to-track-your-order) explains how to follow it.`,
      },
    ],
    faq: [
      {
        q: 'Why does Quell checkout require a phone number?',
        a: `The carrier asks for a phone number with each shipment, so checkout requires one with the shipping address. The note under the field says it’s for delivery updates.`,
      },
      {
        q: 'Can I enter a phone number with an extension at checkout?',
        a: `Yes. Checkout counts only the digits, accepts anything from 10 to 15 of them, and saves the number exactly as you typed it, extension included.`,
      },
      {
        q: 'Whose phone number should I use when sending eye drops as a gift?',
        a: `Use a number that reaches whoever will be at the delivery address, usually the recipient. If you’d rather any delivery contact come to you, your own number also works.`,
      },
      {
        q: 'Does checkout check that my phone number is real?',
        a: `No. It only checks that there are 10 to 15 digits once punctuation is removed. It doesn’t call or look up the number, so read it back before you continue.`,
      },
    ],
  },
/*
   * Date check for dry-eyes-on-small-business-saturday: Thanksgiving is
   * Thursday, November 26, 2026 (brief), so the Saturday after it is
   * November 28, 2026. No organizer, sponsor or business named.
   */
  {
    slug: 'dry-eyes-on-small-business-saturday',
    title: 'Dry eyes on Small Business Saturday',
    description:
      'Small Business Saturday falls on November 28, 2026. Cold sidewalks, warm little shops and tiny price tags can dry your eyes; here’s how to plan the day.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Small Business Saturday falls on November 28, 2026, two days after Thanksgiving, and a day of walking from shop to shop downtown asks a lot of your eyes. Cold air outside, heated rooms inside and hours of reading small tags and phone screens all thin the tear film. Wear sunglasses on the sidewalk, step away from door heaters, take blink breaks, and keep eye drops in a pocket rather than the car.`,
      },
      { h: 'When is Small Business Saturday in 2026?' },
      {
        p: `It’s the Saturday after Thanksgiving. With Thanksgiving on Thursday, November 26, 2026, Small Business Saturday lands on November 28, wedged between Black Friday and Cyber Monday. For many people it comes at the end of a week of travel, cooking, late nights and houseguests, so eyes may already be tired before the first shop opens. (Our guide to [Black Friday and Cyber Monday shopping](/guides/dry-eyes-from-cyber-monday-shopping) covers the screen-heavy side of that weekend.)`,
      },
      { h: 'Sidewalks in late November' },
      {
        p: `Shopping local usually means a main street, a town square or a strip of independent shops, and that means walking outside between stops. In much of the country, late November brings cold, dry air and a breeze down the street. Moving air speeds evaporation from the tear film, the thin layer of oil, water and mucus that covers each eye, and cold eyes often water and sting at the same time. Low autumn sun reflecting off storefront glass adds glare.`,
      },
      {
        list: [
          `Wear sunglasses that wrap around the sides, even on a cool day, to block wind and glare.`,
          `Walk with the wind at your back when you have the choice of which side of the street to start on.`,
          `If your eyes water in the cold, blot gently with a clean tissue instead of rubbing.`,
        ],
      },
      { h: 'In and out of warm shops' },
      {
        p: `Small shops tend to be warm, especially near the door, where a heater or a vent often blows to keep the cold out. Walk in from the sidewalk and you go from cold wind to a blast of warm, dry air in a few steps. Do that twenty times in an afternoon and your eyes feel it by evening. Don’t linger in the doorway; move a few steps into the shop before you start browsing, and take your hat off so the warm air isn’t trapped around your face.`,
      },
      {
        p: `Coffee shops and lunch spots are the place to reset. Sit away from the door and any overhead vent, rest your eyes for a minute, and blink slowly a few times before heading back out.`,
      },
      { h: 'Small print: tags, labels and card readers' },
      {
        p: `Independent shops often price things by hand: little paper tags, chalkboards, labels on jars, tiny stickers on the bottoms of mugs. Reading them means close focus, sometimes in dim, cozy lighting, and close focus slows blinking. Add a phone for a gift list, a shop map or a quick price check, and a card reader at every register, and your eyes spend much of the day on small, near things.`,
      },
      {
        list: [
          `Bring your reading glasses if you use them; squinting at tags makes the strain worse.`,
          `Between shops, look down the street at something far away for a few seconds.`,
          `Write your gift list on paper and check it less often than you’d check a phone.`,
          `Use the brighter spot near a window to read a label rather than holding it close in a dark corner.`,
        ],
      },
      { h: 'Craft fairs and pop-up markets indoors' },
      {
        p: `Plenty of towns hold holiday craft fairs that same weekend in school gyms, church halls and community centers. They’re crowded, warm, brightly lit and often dusty from boxes and displays, and the air in a full gym can feel stale by midafternoon. Plan to step outside for a few minutes every hour or so. If a booth sells candles, soaps or potpourri, strong scents and fine particles can make already dry eyes feel worse, so keep your visit there short if that bothers you.`,
      },
      { h: 'A plan for the day' },
      {
        list: [
          `Start after breakfast with sunglasses, reading glasses and your eye drops in a coat pocket.`,
          `Shop one side of the street, take a coffee break, then shop the other.`,
          `Keep your hands clean; you’ll touch door handles, cash and merchandise for hours, so wash or sanitize before you go near your eyes.`,
          `Drop bags in the car between blocks so you aren’t juggling them, and take the drops with you each time.`,
          `Head home before your eyes are aching, not after.`,
        ],
      },
      { h: 'Keeping eye drops with you, not in the car' },
      {
        p: `Quell’s label lists its storage range as {storage}. A car parked on a freezing November afternoon can drop below that range, so carry the bottle in an inside pocket. If you do use a drop, do it somewhere clean and calm, like a café restroom, with washed hands. The label adds: {tip}. If a bottle sat in the cold, check it first; the label says {doNotUse}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. One caution applies to everyone: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you’re shopping for someone else, Quell ships from Brentwood, Tennessee, to any US address. Shipping is {shipping}, or free on {freeBottles} or more bottles; there are no promo codes, and no delivery date is promised, so give a holiday order time. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) explains the details.`,
      },
      { h: 'When it’s more than a long day' },
      {
        p: `Tired, dry eyes after a day of shopping usually settle with rest. If they don’t, the label is clear: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'When is Small Business Saturday 2026?',
        a: `Saturday, November 28, 2026. It’s the Saturday after Thanksgiving, which falls on Thursday, November 26 this year.`,
      },
      {
        q: 'Why do my eyes get dry walking between shops in the cold?',
        a: `Cold wind outside and warm, dry air inside each speed evaporation from the tear film, and walking in and out of shops switches between them over and over. Close reading of price tags and phones also slows blinking.`,
      },
      {
        q: 'Should I bring eye drops when shopping downtown in winter?',
        a: `If you use them, carry them in an inside pocket rather than leaving them in the car. Quell’s label gives its storage range as {storage}, and a parked car on a cold day can drop below it.`,
      },
    ],
  },
  /*
   * dry-eyes-from-jigsaw-puzzles-and-board-games: general how-the-eye-works
   * facts only (close focus slows blinking; dry or moving air speeds
   * evaporation). Nearest existing guides: dry-eyes-when-binge-watching-tv,
   * eye-drops-for-gamers, dry-eyes-when-sewing-or-knitting; this one is the
   * table-game and puzzle weekend, shared pieces and hand hygiene.
   */
  {
    slug: 'dry-eyes-from-jigsaw-puzzles-and-board-games',
    title: 'Dry eyes from jigsaw puzzles and board games',
    description:
      'A long holiday weekend of puzzles and board games means hours of close focus and shared pieces. Why your eyes get dry, and how to keep playing.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `A jigsaw puzzle or a board game marathon dries your eyes the same way a screen does: you focus closely for hours and blink less. Holiday weekends add a warm, crowded house and a fireplace or heater nearby. Light the table well, sit away from vents and fires, look up between turns, wash your hands before touching your eyes, and use a lubricating drop only as its label directs.`,
      },
      { h: 'Why puzzles and games dry your eyes' },
      {
        p: `Every blink spreads a fresh tear film, the thin layer of oil, water and mucus that keeps the surface of the eye smooth and clear. When you concentrate on something close, you blink less often, and some blinks don’t close all the way. The film thins between blinks, and after an hour or two your eyes can feel dry, scratchy or heavy even though you’ve been sitting still in a comfortable room.`,
      },
      {
        p: `A 1,000-piece puzzle is close to the most concentrated looking there is. You scan hundreds of nearly identical shapes, compare tiny color shifts and hold your gaze on one corner of the table for long stretches. Strategy games with small cards and dense boards ask for the same kind of focus, and a tense round can go a long time without anyone looking up.`,
      },
      { h: 'The holiday house makes it harder' },
      {
        p: `Thanksgiving weekend and the days around Christmas are prime puzzle and game time, and they come in heating season. The card table often ends up in the warmest spot in the house: near the fireplace, beside a wood stove, or by a floor register in a family room full of people. Heating lowers the air’s relative humidity, a fire throws dry warmth and a little smoke, and a busy kitchen next door adds more heat. All of it speeds evaporation.`,
      },
      {
        list: [
          `Set up the puzzle table away from the fireplace, the wood stove and any heat vent.`,
          `If the room is stuffy, lower the thermostat a degree or two; a full room heats itself.`,
          `Crack a window for a few minutes between games if the air feels heavy.`,
          `Point any fan away from the players’ faces.`,
        ],
      },
      { h: 'Light the table, not your eyes' },
      {
        p: `Poor light makes you lean in, squint and stare harder, and all three make dry eyes feel worse. Good puzzle light is bright and even across the table, coming from above or over your shoulder rather than into your eyes. A lamp that shines in your face from across the table, or the glare of a shiny box lid, makes you squint without noticing.`,
      },
      {
        list: [
          `Use an overhead light plus a lamp behind or beside you.`,
          `Turn glossy pieces or cards so they don’t catch the light.`,
          `Sort pieces into trays on the table instead of hunting through a box in your lap.`,
          `If you use reading glasses for close work, wear them for the puzzle too.`,
        ],
      },
      { h: 'Built-in breaks: rounds, turns and edge pieces' },
      {
        p: `Games already have pauses built in, so use them. While someone else takes a turn, look across the room or out a window for a few seconds and blink slowly. With a puzzle, change tasks: switch from sky pieces to edge pieces, stand up to look at the whole picture from above, or let someone else take your chair for a while. A short walk to the kitchen after each game resets your eyes and the room’s mood.`,
      },
      {
        p: `If the weekend turns into a video game marathon, the same rules apply on a screen. [Eye drops for gamers](/guides/eye-drops-for-gamers) covers controller sessions, and [dry eyes when binge-watching TV](/guides/dry-eyes-when-binge-watching-tv) covers the long movie nights in between.`,
      },
      { h: 'Shared pieces, shared hands' },
      {
        p: `Everyone at the table touches the same puzzle pieces, cards, dice and game money, and they’re snacking while they do it. That’s a lot of hands. Rubbing an itchy eye mid-game moves whatever is on your fingers straight onto the eye’s surface. Wash your hands before you touch your eyes, and definitely before putting in a drop.`,
      },
      {
        p: `If you bring eye drops to a family gathering, keep the bottle in your own pocket or bag, not on the game table, and don’t share it; [can you share eye drops?](/guides/can-you-share-eye-drops) explains why. Quell’s label adds a handling rule that matters in a busy house: {tip}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. The directions are: {directions}. That’s the limit whether it’s a quiet Tuesday or the third day of a puzzle marathon. Before using it, check this caution: {warnings}.`,
      },
      {
        p: `The storage range on the panel is {storage}, so keep the bottle off the mantel and away from the fire. Everything else is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When dry eyes outlast the weekend' },
      {
        p: `Eyes tired from close work usually feel better after a night’s sleep and a day with fewer hours of focus. If yours don’t, follow the label: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after doing a jigsaw puzzle?',
        a: `Close, concentrated looking slows your blink rate, so the tear film thins between blinks and the eye’s surface dries. Poor light, squinting and a warm, heated room make it worse.`,
      },
      {
        q: 'How do I make doing a puzzle easier on my eyes?',
        a: `Light the table brightly from above or over your shoulder, sit away from heaters and the fireplace, and look up across the room every few minutes. Changing tasks or standing up to see the whole picture also gives your eyes a break.`,
      },
      {
        q: 'Is it okay to use eye drops during game night?',
        a: `If you use a lubricating drop, follow its label; Quell’s directions are {directions}. Wash your hands first, since game pieces and cards pass through many hands.`,
      },
    ],
  },
  /*
   * dry-eyes-while-writing-christmas-cards: general how-the-eye-works facts
   * only. No mail deadlines or carriers named. Nearest existing guides:
   * dry-eyes-while-decorating-for-christmas (glitter), dry-eyes-when-sewing-
   * or-knitting (close work); this one is handwriting, addresses and labels.
   */
  {
    slug: 'dry-eyes-while-writing-christmas-cards',
    title: 'Dry eyes while writing Christmas cards',
    description:
      'Addressing a stack of Christmas cards means close focus, small print and long evenings under a lamp. Why it dries your eyes, and a gentler way to do it.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Writing Christmas cards dries your eyes because it’s hours of close focus: small handwriting, tiny addresses and a phone or spreadsheet of contacts, usually at a heated table on a December evening. You blink less while you concentrate. Work in batches of a dozen or so, light the page from over your shoulder, look across the room between cards, and keep heater vents off your face.`,
      },
      { h: 'Why a stack of cards is hard on the eyes' },
      {
        p: `The tear film, a thin layer of oil, water and mucus, is renewed every time you blink. When you focus closely on something, blinks slow down and get shallower, and the film has longer to evaporate between them. A card asks for exactly that kind of focus. You’re writing a few lines in a small space, then copying an address character by character, then checking it against your list. Fifty cards is a lot of looking at small things.`,
      },
      {
        p: `December adds the setting. Card writing tends to happen in the evening, after work, at a dining table near a heat register, in a house that has been heated for weeks. Warm, dry indoor air speeds evaporation further, and a lamp that’s too dim makes you lean in and squint.`,
      },
      { h: 'Set up the table first' },
      {
        list: [
          `Pick a spot away from heat vents, radiators, the fireplace and space heaters.`,
          `Light the page from above or over the shoulder opposite your writing hand, so your hand doesn’t shade it.`,
          `Avoid a bare bulb shining toward your face; glare makes you squint.`,
          `Wear your reading glasses if you use them for close work.`,
          `Set the address list where you can read it without leaning: a printed sheet propped up, or a laptop at eye level.`,
        ],
      },
      { h: 'Work in batches, not marathons' },
      {
        p: `Trying to finish every card in one night is what leaves eyes stinging by the end. Breaking the job up works better for your eyes and usually for your handwriting too. A dozen or so cards at a sitting, with a real break in between, is a reasonable rhythm.`,
      },
      {
        list: [
          `Write all the messages one night and address the envelopes another.`,
          `After each card, look across the room or out a window for a few seconds.`,
          `Stand up and stretch between batches; get a drink, check on dinner, walk around.`,
          `Stop when your eyes feel heavy or gritty rather than pushing through the last ten.`,
        ],
      },
      { h: 'Addresses: phone, laptop or printed list' },
      {
        p: `Copying addresses from a phone means flicking your eyes between a small bright screen and a white card dozens of times. Each switch makes your eyes refocus. A printed list or a laptop screen at a comfortable distance is easier, and it saves you from squinting at tiny text. If you print address labels instead, you trade handwriting for screen time while you set them up; take a break from the screen before you start sticking them on.`,
      },
      { h: 'Glitter, ink and envelope glue' },
      {
        p: `Glitter cards shed fine flakes onto the table, your hands and your face. Shiny ink and metallic pens make a little glare under a strong lamp. Licking envelope after envelope isn’t an eye problem, but rubbing your eyes with hands that have handled glitter, ink and paper dust is. Wash your hands before touching your eyes, and wipe the table down when a glitter batch is done. [Dry eyes while decorating for Christmas](/guides/dry-eyes-while-decorating-for-christmas) has more on glitter and flocking.`,
      },
      { h: 'If you write a lot of cards for work' },
      {
        p: `Some people sign hundreds of cards in December: business owners writing to clients, teachers writing to families, people with big extended families. At that volume, approach it like any other long stretch of close work. Spread the job over a week or two, keep the desk away from heating vents, and schedule breaks the way you would during a long day at a screen. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blink connection that applies to paper too.`,
      },
      { h: 'Using a lubricating drop' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. Its directions: {directions}. The label also says: {tip}.`,
      },
      {
        p: `Before using it, read the panel’s caution: {warnings}. Wash ink and glitter off your hands before you open the bottle. Storage is listed as {storage}, so keep it off the radiator shelf. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Thinking of tucking a bottle in with a card? Quell ships from Brentwood, Tennessee, to any US address, at {shipping} or free on {freeBottles} or more bottles. No delivery date is promised, so order early in December. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) covers the details.`,
      },
      { h: 'When it’s more than card-writing strain' },
      {
        p: `Eyes tired from a night of cards usually recover by morning. If dryness keeps coming back, or you notice pain or blurred vision that doesn’t clear, follow the label: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired writing Christmas cards?',
        a: `Writing and addressing cards is hours of close focus on small print, which slows blinking and lets the tear film dry between blinks. Evening lamp light and warm, heated rooms add to it.`,
      },
      {
        q: 'What kind of light helps when writing Christmas cards?',
        a: `Bright, even light on the page, coming from above or over the shoulder opposite your writing hand. Avoid a lamp that shines toward your face or bounces glare off glossy cards.`,
      },
      {
        q: 'How many Christmas cards should I write at once?',
        a: `There’s no set number, but working in batches of about a dozen with a real break in between is easier on the eyes than a single marathon night.`,
      },
    ],
  },
/*
   * dry-eyes-for-corrections-officers: general how-the-eye-works facts only.
   * No agency, facility, staffing rule or shift length stated as fact;
   * personal-item rules described as varying by facility. Nearest existing
   * guides: dry-eyes-for-security-guards (camera monitors), dry-eyes-for-
   * police-officers, dry-eyes-on-the-night-shift; this one is housing units,
   * towers, chemical agents and bringing a bottle through a secure entrance.
   */
  {
    slug: 'dry-eyes-for-corrections-officers',
    title: 'Dry eyes for corrections officers',
    description:
      'Corrections officers work long shifts in recirculated air, under bright lights and in front of monitors. Why eyes dry out on the job, and what helps.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Corrections officers get dry eyes from the building as much as the job: recirculated air in sealed concrete units, bright lighting that never goes off, hours watching camera monitors and long or rotating shifts. Check your facility’s rule on personal items before bringing eye drops in, take blink breaks during count and monitor duty, keep vents off your face, and use a lubricating drop only as its label directs.`,
      },
      { h: 'Why the job dries your eyes' },
      {
        p: `Your eyes rely on the tear film, a thin layer of oil, water and mucus that each blink renews. Two things wear it down quickly: moving, conditioned air and long stretches of concentration, which slow blinking. A corrections post has both. Secure buildings are usually sealed, with air moved by large ventilation systems that heat or cool it, and the work demands steady, watchful attention for hours at a time.`,
      },
      {
        p: `Add shift work, sleep that comes at odd hours and very little control over the temperature of your post, and it’s no surprise that many officers finish a shift with gritty, tired eyes.`,
      },
      { h: 'Control rooms and camera monitors' },
      {
        p: `Control room and central monitoring posts mean hours in front of a wall of screens. Watching for movement across many feeds is exactly the kind of focus that cuts blink rate, and control rooms are often cool, with equipment fans and ceiling vents moving air across the desk.`,
      },
      {
        list: [
          `Every few minutes, deliberately blink fully several times, even while you keep watching.`,
          `If a ceiling diffuser blows straight down on your chair, ask whether the louver can be turned.`,
          `Set your main monitor slightly below eye level when the console allows it.`,
          `Use the brightness controls you’re allowed to change; a screen far brighter than the room adds strain.`,
        ],
      },
      {
        p: `[Dry eyes for security guards](/guides/dry-eyes-for-security-guards) goes further into long monitor shifts.`,
      },
      { h: 'Housing units, yards and towers' },
      {
        p: `On the floor, the air is different again. Housing units can run warm and stuffy or cold and drafty depending on the season and the system. Cleaning chemicals, dust from laundry and mattresses, and the general traffic of a crowded unit all hang in the air. Outdoor posts, perimeter patrols and tower duty bring sun, wind and glare off concrete and fencing, along with whatever the weather is doing.`,
      },
      {
        list: [
          `On outdoor posts, wear agency-approved sunglasses or safety glasses that wrap around the sides.`,
          `During rounds, take a second at each door or station to look up and blink.`,
          `In a tower or vehicle, aim the heater or AC away from your face.`,
          `Wash your hands before touching your eyes, especially after searches or handling property.`,
        ],
      },
      { h: 'Night and rotating shifts' },
      {
        p: `Night posts and rotating schedules are part of the job for many officers. Tired eyes blink less completely, and sleep during the day is often shorter and lighter than sleep at night. Eyes that feel fine at the start of a night shift can feel sandy by the early morning count. Darkening the bedroom, keeping a fan off your face while you sleep and giving yourself a few minutes with your eyes closed on breaks all help. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers sleep and breaks in more detail.`,
      },
      { h: 'Chemical agents and your eyes' },
      {
        p: `Officers may be exposed to chemical agents during training or incidents. If that happens, follow your agency’s decontamination training and get medical help as your agency directs. A lubricating eye drop isn’t a decontamination step, and Quell’s label doesn’t cover chemical exposure. If your eyes still hurt, burn or don’t see clearly after decontamination, that calls for a medical evaluation, not a drop.`,
      },
      { h: 'Bringing eye drops through a secure entrance' },
      {
        p: `Every facility sets its own rules on what staff can carry inside, and some limit medicines, liquids or containers. Ask your supervisor or check your post orders before you bring a bottle in. Where it’s allowed, a few habits help:`,
      },
      {
        list: [
          `Keep the bottle in its original carton or labeled bottle, so it’s easy to identify at screening.`,
          `Store it in a locker or a secure staff area, never on a post where others could get to it.`,
          `Use it in a staff restroom or break room with clean hands, not on the unit.`,
          `If your facility doesn’t allow it inside, keep it in a cooler bag in your vehicle and use it on breaks outside the secure perimeter, keeping in mind the storage range below.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions are: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `There’s a caution to check before you use it: {warnings}. The storage line reads {storage}, so a vehicle sitting in the staff lot through a summer afternoon or a winter night isn’t a good place for it. The full panel is on our [Drug Facts page](/drug-facts). If you wear contact lenses or use other eye drops, the label doesn’t cover that; ask your eye doctor or pharmacist.`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Shipping is {shipping}, or free on {freeBottles} or more bottles, and checkout doesn’t need an account. [Order from the home page](/#buy) when you’re ready.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Shift work and building air explain a lot of everyday dryness, but not every symptom. Quell’s label says when to stop: {stopUse} Anything that affects your vision on duty is worth taking seriously. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a jail or prison?',
        a: `Sealed buildings move heated or cooled air through ventilation systems, and the work demands long stretches of watchful focus that slow blinking. Long or late-night shifts make tired eyes feel drier still.`,
      },
      {
        q: 'Can corrections officers bring eye drops to work?',
        a: `It depends on the facility. Each one sets its own rules for what staff can carry inside, so ask your supervisor or check your post orders. Where it’s allowed, keep the bottle labeled and in a locker or secure staff area.`,
      },
      {
        q: 'Can a corrections officer use eye drops after OC spray training?',
        a: `Follow your agency’s decontamination training and get medical help as directed. A lubricating drop isn’t a decontamination step, and Quell’s label doesn’t cover chemical exposure.`,
      },
    ],
  },
  /*
   * dry-eyes-for-crossing-guards: general how-the-eye-works facts only. No
   * schedules, pay, agency rules or uniform requirements stated. Directions
   * cover only the guard's own eyes; nothing about children's eyes.
   */
  {
    slug: 'dry-eyes-for-crossing-guards',
    title: 'Dry eyes for crossing guards',
    description:
      'Crossing guards face low sun, cold wind and traffic exhaust twice a day, with no chance to look away. Why eyes dry out at the curb, and what helps.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Crossing guards get dry eyes from standing at an intersection in whatever the morning and afternoon bring: low sun in your face, cold wind, road spray and exhaust, all while you can’t look away from traffic. Wear sunglasses that wrap around the sides, keep your back to the wind when you can, never use drops while on post, and keep the bottle warm enough between shifts.`,
      },
      { h: 'Why crossing guards get dry eyes' },
      {
        p: `The surface of the eye is covered by the tear film, a thin layer of oil, water and mucus that each blink spreads fresh. Wind, cold and dry air pull water from it, and steady concentration slows blinking. A crossing post combines all of it. You watch cars, bikes and people from several directions at once, often for an hour or more, while weather blows straight into your face.`,
      },
      {
        p: `Unlike most outdoor jobs, you can’t turn away from the wind or step into shade when it gets bad. The post is where the crossing is.`,
      },
      { h: 'Low sun at both crossings' },
      {
        p: `School start and dismissal times often line up with a low sun, especially from late fall through winter. Depending on which way your crosswalk runs, you may face the sunrise in the morning and the lowering sun in the afternoon. Squinting into glare for long stretches tires the eyes and makes them water, and watering in cold wind leaves them feeling drier afterward.`,
      },
      {
        list: [
          `Wear sunglasses that wrap around the sides, if your employer allows them; they cut glare and block wind together.`,
          `A brimmed cap under a hood shades your eyes from a low sun.`,
          `Stand so the sun is to your side rather than straight ahead, when the crossing allows it.`,
          `Keep your lenses clean; a smudged lens scatters glare.`,
        ],
      },
      { h: 'Wind, cold and road spray' },
      {
        p: `Winter mornings at a corner can be bitter, and the wind funnels down streets. Cold air carries little moisture, and every gust speeds evaporation from the tear film. Wet or slushy days add spray from passing tires, with grit and road salt in it, which can splash toward your face as cars slow at the crossing.`,
      },
      {
        list: [
          `Pull a scarf or neck gaiter up over your nose and cheeks; it warms the air around your face.`,
          `Step back from the curb between crossings, out of the splash zone.`,
          `Blot watering eyes gently with a clean tissue instead of rubbing them with a glove.`,
          `Keep a dry, clean cloth in a pocket for your glasses.`,
        ],
      },
      { h: 'Exhaust and dust at the curb' },
      {
        p: `Drop-off and pickup lines mean idling cars and buses near the curb for long stretches. Exhaust and the dust kicked up by traffic irritate eyes that are already dry. Where you have room, stand upwind of the line of waiting cars. Dry, dusty days in late summer and early fall bring their own grit, and protective glasses help as much then as on a windy winter morning.`,
      },
      { h: 'Never mid-crossing' },
      {
        p: `Putting in an eye drop blurs your vision briefly, takes a hand off the stop paddle and tilts your head back, away from traffic. None of that belongs at a crosswalk. Use drops only when you are fully off post, sitting in your car or indoors, with clean hands. Wait until your vision is clear before you drive.`,
      },
      { h: 'Between the morning and afternoon shifts' },
      {
        p: `The gap between the two crossings is your chance to rest your eyes. Sit somewhere warm, out of the wind, and close your eyes for a few minutes. If you spend the break on a phone, look up often and blink fully. Keep the car heater aimed at your feet and the windshield, not your face, since a blast of hot, dry air right after cold wind is hard on the tear film. [Dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more on car heaters.`,
      },
      { h: 'Keeping the bottle warm enough' },
      {
        p: `Quell’s label gives its storage range as {storage}. On a freezing morning, a bottle in an outer coat pocket or a car left at the curb can drop below the bottom of that range. Carry it in an inside pocket, close to your body, and bring it inside at the end of the day. If a bottle has been very cold, let it come back to room temperature and look at it before use: {appearance} The label also says {doNotUse}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. Directions: {directions}. And for the tip of the bottle: {tip}. Check this caution before using it: {warnings}.`,
      },
      {
        p: `The full panel is on our [Drug Facts page](/drug-facts). Quell ships from Brentwood, Tennessee, to any US address for {shipping}, or free on {freeBottles} or more bottles. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers more jobs that keep you out in the weather.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind and cold explain a lot of watering and grittiness at the curb. They don’t explain pain, vision that stays blurry or light sensitivity that’s getting worse. The label says: {stopUse} Clear vision is part of keeping a crossing safe, so don’t wait on changes. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do crossing guards get dry eyes?',
        a: `They stand in wind, cold and low sun at both ends of the school day while watching traffic closely, which slows blinking. Exhaust from drop-off lines and spray from wet roads add irritation.`,
      },
      {
        q: 'Can crossing guards wear sunglasses?',
        a: `That depends on the employer’s rules, so ask. Where they’re allowed, a pair that wraps around the sides cuts low-sun glare and blocks wind at the same time.`,
      },
      {
        q: 'Where should a crossing guard keep eye drops in winter?',
        a: `In an inside pocket close to the body, not an outer pocket or a cold car. Quell’s label gives its storage range as {storage}, and a freezing morning can drop a bottle below it.`,
      },
    ],
  },
  /*
   * dry-eyes-for-animal-control-officers: general how-the-eye-works facts
   * only. No agency, disease, zoonosis or injury statistic named; dander and
   * dust described as irritants only, never as an allergy claim.
   */
  {
    slug: 'dry-eyes-for-animal-control-officers',
    title: 'Dry eyes for animal control officers',
    description:
      'Fur, kennel dust, disinfectants and long hours in a truck cab all dry the eyes. What animal control officers can do on calls, in kennels and in the truck.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Animal control officers get dry, irritated eyes from a mix of fur and dander, kennel and barn dust, strong disinfectants and long hours in a truck with the vents running. Wear wraparound safety glasses on calls and during cleaning, wash your hands before touching your face, aim truck vents away from your eyes, and use a lubricating drop only as its label directs. Any scratch or injury to the eye needs a doctor.`,
      },
      { h: 'Why the job is hard on your eyes' },
      {
        p: `Each blink spreads the tear film, a thin layer of oil, water and mucus that keeps the eye’s surface smooth. Dry or moving air thins it, and particles in the air land on it and irritate the eye. An animal control shift does both, over and over: a hot or freezing yard, a dusty barn, a truck cab with the heat blasting, then a kennel full of fur and the smell of cleaning solution.`,
      },
      { h: 'Fur, dander, hay and kennel dust' },
      {
        p: `Loose fur and dander float in the air of kennels, transport boxes and homes with many animals. Calls to barns, feed stores and fields add hay dust, straw and dry soil. These are irritants: they land on the tear film and make the eye itch, water and feel gritty, and rubbing the eye with dusty gloves or hands drives them further in.`,
      },
      {
        list: [
          `Wear close-fitting safety glasses during handling, loading and kennel work.`,
          `Shake out or brush off your uniform outside the truck, not in the cab.`,
          `Change gloves and wash your hands before you touch your face.`,
          `Clean the truck cab and transport area regularly so dust doesn’t blow around from the vents.`,
        ],
      },
      { h: 'Disinfectants and cleaning days' },
      {
        p: `Shelters and transport compartments are cleaned often, with products strong enough to sanitize surfaces that animals have used. Fumes in a small, closed space can sting the eyes, and spray can bounce back toward your face. Follow the product label and your agency’s safety rules, ventilate the space, and wear eye protection when spraying or pressure-washing. If a cleaning product splashes into your eye, follow the product’s first aid directions and your agency’s procedure, and get medical help. A lubricating drop isn’t a rinse, and Quell’s label doesn’t cover chemical splashes.`,
      },
      { h: 'The truck: vents, laptop and long drives' },
      {
        p: `A lot of the shift happens in the cab: driving between calls, waiting on scene and writing reports on a laptop or tablet. The heater or AC usually runs to keep the cab and any animals comfortable, and dash vents tend to point straight at the driver. Report writing adds screen time, which slows blinking.`,
      },
      {
        list: [
          `Aim dash vents at your chest or the windshield rather than your face.`,
          `When you finish a report, look out the windshield at something far away for a few seconds.`,
          `Take a minute with your eyes closed while parked between calls.`,
          `Keep the laptop below eye level so your lids cover more of the eye.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why reports and screens leave eyes dry.`,
      },
      { h: 'Night calls and flashlights' },
      {
        p: `Calls after dark mean searching with flashlights and spotlights, catching reflections off eyes in the brush and squinting into headlights on rural roads. Straining to see in the dark slows blinking too. Keep your lenses clean, take short breaks from a bright handheld light, and don’t stare into oncoming headlights. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the drive home.`,
      },
      { h: 'Clean hands before your eyes' },
      {
        p: `Your hands touch animals, leashes, cages, catch poles and door handles all shift long. Rubbing an itchy eye in the middle of that moves whatever is on your fingers onto the eye’s surface. Keep hand sanitizer in the truck and soap at the station, and wash before you touch your face or open a bottle of drops.`,
      },
      { h: 'Where the bottle rides' },
      {
        p: `Quell’s label gives its storage range as {storage}. A truck parked on a summer call with the engine off, or through a night in a winter lot, can move well past either end. Keep the bottle in a bag you carry, or in a small cooler bag in the cab, not on the dash or in a door pocket in the sun. The label adds a handling rule: {tip}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes its Uses: {uses}. The directions read: {directions}. One caution is worth reading closely: {warnings}. Quell contains emu oil, so if you have an egg or bird allergy, talk to a doctor before using it.`,
      },
      {
        p: `The full panel is on our [Drug Facts page](/drug-facts). Quell ships from Brentwood, Tennessee, to any US address for {shipping}, or free on {freeBottles} or more bottles.`,
      },
      { h: 'Scratches, bites and injuries' },
      {
        p: `A scratch from a claw, a branch in the eye on a field call or anything stuck in the eye is an injury, not dryness. Don’t rub it, and don’t try to fix it with drops. Get medical care promptly, as your agency directs. For everyday dryness, the label sets the limit: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do animal control officers get dry eyes?',
        a: `The job mixes fur, dander and barn dust in the air with strong disinfectants and long hours in a truck cab with the vents running. Report writing on a laptop slows blinking too.`,
      },
      {
        q: 'Can pet dander make your eyes feel dry and gritty?',
        a: `Dander and loose fur in the air can land on the eye and irritate it, making it itch, water or feel gritty. Safety glasses during handling and washing your hands before touching your face help.`,
      },
      {
        q: 'What should I do if an animal scratches my eye?',
        a: `Handle it as an injury: don’t rub the eye and don’t rely on eye drops. Get medical care promptly, following your agency’s procedure for on-the-job injuries.`,
      },
    ],
  },
/*
   * how-often-can-you-use-preservative-free-eye-drops: label tokens and the
   * site's existing preservative-free explainers only. Phrasing from
   * keyword-suggest ("how often can preservative free eye drops be used",
   * "how often to use preservative free eye drops"). No other brand named;
   * single-use vials described only in general terms.
   */
  {
    slug: 'how-often-can-you-use-preservative-free-eye-drops',
    title: 'How often can you use preservative-free eye drops?',
    description:
      'As often as its label directs. Preservative-free changes what’s in the bottle, not the dose; Quell’s label says {directions}.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `As often as that product’s own label directs. Being preservative-free changes what’s in the bottle, not how many drops you can use, so check the Directions line on each product. Quell is preservative-free, and its label reads: {directions}. That works out to six drops a day across both eyes. If that isn’t enough to keep your eyes comfortable, ask an eye doctor instead of adding more.`,
      },
      { h: 'What preservative-free changes, and what it doesn’t' },
      {
        p: `A preservative is an ingredient added to keep microbes from growing in a bottle once it’s been opened. A preservative-free drop leaves that ingredient out. That’s a real difference in the formula, and many people look for it. What it doesn’t do is rewrite the directions. The dose is set by the product’s label, and labels for preservative-free drops differ from one product to the next, the same way labels for preserved drops do.`,
      },
      {
        p: `Our guide to [what preservative-free means](/guides/what-does-preservative-free-mean) explains the term itself, and [how to tell if your drops are preservative-free](/guides/how-do-i-know-if-my-eye-drops-are-preservative-free) shows where to look on the box.`,
      },
      { h: 'Why people assume they can use more' },
      {
        p: `There’s a common idea that a drop without preservatives can be used as often as you like, because there’s nothing in it to build up. It’s an understandable leap, but it isn’t something to act on by itself. Some product labels say to use a drop as needed; others give a fixed number of times per day. The only way to know which applies is to read the Directions line on the box in your hand.`,
      },
      {
        p: `If you’ve been using a different preservative-free product with looser directions, switching to one with a fixed schedule means following the new label, not the old habit.`,
      },
      { h: 'Quell’s directions, counted out' },
      {
        p: `Quell’s label says {directions}. In practice:`,
      },
      {
        list: [
          `One drop is the dose, not two or three.`,
          `Three times per day is the count, so three doses spread across the day.`,
          `In each eye means a drop in the left eye and a drop in the right at each dose.`,
          `That’s six drops a day in total, three per eye.`,
          `The label doesn’t name times. [When to use eye drops during the day](/guides/when-to-use-eye-drops-during-the-day) shows a simple way to spread them out.`,
        ],
      },
      { h: 'Single-use vials and multi-dose bottles' },
      {
        p: `Preservative-free drops come in different packages. Some come in small single-use vials, which usually carry their own instructions about what to do with a vial after use. Others, like Quell, come in a multi-dose bottle; Quell’s holds {size}. The package doesn’t change how often you use the drop, but it does change how you handle it. With no preservative in a multi-dose bottle, keeping the tip clean matters even more, and the label says so plainly: {tip}.`,
      },
      {
        list: [
          `Wash your hands before each dose.`,
          `Keep the tip from touching your eye, lashes, fingers or the counter.`,
          `Recap the bottle right away.`,
          `Don’t share it with anyone else.`,
          `Store it as the label says: {storage}.`,
        ],
      },
      {
        p: `How long an opened bottle stays usable is a separate question, and [how long eye drops last after opening](/guides/how-long-do-eye-drops-last-after-opening) covers it.`,
      },
      { h: 'If three times a day isn’t enough' },
      {
        p: `Needing more than the label allows is information worth acting on, not a reason to raise the dose on your own. It may point to something in your surroundings, like a heater blowing at your desk or long screen sessions, and it may point to something an eye doctor should look at. The label sets the stopping point: {stopUse} [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) has more on this question.`,
      },
      { h: 'Reading any preservative-free label for frequency' },
      {
        list: [
          `Find the Directions line on the Drug Facts panel. That’s where the dose and the frequency live.`,
          `Note whether it gives a number of times per day or says to use as needed.`,
          `For single-use vials, read what the package says about each vial after opening.`,
          `Read the stop-use section, which tells you when to stop and ask a doctor.`,
          `If anything is unclear, ask a pharmacist and bring the box.`,
        ],
      },
      { h: 'Contact lenses and other drops' },
      {
        p: `Quell’s label doesn’t cover use with contact lenses or alongside other eye drops. If either applies to you, ask your eye doctor or pharmacist before you start, and don’t count doses from different products together. The full panel, including {warnings}, is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can you use preservative-free eye drops as often as you want?',
        a: `Only if that product’s label says so. Preservative-free describes the formula, not the dose, and each label sets its own frequency. Quell’s directions are {directions}.`,
      },
      {
        q: 'Does preservative-free mean I can use more drops a day?',
        a: `No. Leaving out preservatives changes what’s in the bottle, but the number of drops a day comes from the Directions line. If the labeled amount isn’t enough, ask an eye doctor.`,
      },
      {
        q: 'Is it okay to use preservative-free eye drops every hour?',
        a: `Follow the label on the product you have. Quell’s directions call for one drop three times per day in each eye, so hourly use goes beyond them; an eye doctor can help if you feel you need that much.`,
      },
    ],
  },
  /*
   * how-long-should-i-wait-between-eye-drops: label tokens only. Most searches
   * for this phrase are about combining products; the guide gives no minutes
   * and no combining directions, and sends that question to a pharmacist or
   * prescriber, as the brief requires.
   */
  {
    slug: 'how-long-should-i-wait-between-eye-drops',
    title: 'How long should I wait between eye drops?',
    description:
      'It depends what “between” means: doses, your two eyes or two different products. What Quell’s label says, and what it leaves to a pharmacist.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `It depends on what you’re waiting between. For doses of the same drop, Quell’s label sets a count, {directions}, but no number of hours, so most people spread the three across the day. Between your two eyes, the label sets no wait. Between Quell and a different eye drop, the label says nothing at all, so ask a pharmacist or the doctor who prescribed the other drop.`,
      },
      { h: 'Between doses of the same drop' },
      {
        p: `Quell’s directions give a number of times per day, not an interval. They don’t say “every four hours” or name morning, noon and night. What they do fix is the total: three doses a day. So the practical question is how to place three doses across your waking hours.`,
      },
      {
        list: [
          `Spreading them out covers more of the day than bunching them together.`,
          `Pairing each dose with something you already do, like breakfast, lunch and the evening dishes, makes them easier to remember.`,
          `Using two doses a few minutes apart doesn’t add anything and uses up the day’s count early.`,
          `If you miss one, the label doesn’t say to double up; [what if I miss a dose?](/guides/what-if-i-miss-a-dose-of-eye-drops) talks through it.`,
        ],
      },
      {
        p: `[When to use eye drops during the day](/guides/when-to-use-eye-drops-during-the-day) lays out a sample schedule.`,
      },
      { h: 'Between your right eye and your left eye' },
      {
        p: `“In each eye” means one drop goes in each eye at every dose. The label doesn’t ask you to wait between them, so most people put a drop in one eye, then the other, as one step. A few habits keep it clean and simple:`,
      },
      {
        list: [
          `Wash your hands before you start.`,
          `Keep the tip off your eyelid, lashes and skin as you move from one eye to the other; the label says {tip}.`,
          `Close your eyes gently for a moment after each drop rather than squeezing them shut.`,
          `If you’re not sure the drop landed, [how to tell if an eye drop went in](/guides/how-do-i-know-if-the-eye-drop-went-in) explains the signs.`,
        ],
      },
      { h: 'Between Quell and a different eye drop' },
      {
        p: `This is what most people searching the question really want to know, and it’s the one the label doesn’t answer. Quell’s directions are written for Quell on its own. They don’t say whether to use it with another product, in what order or how far apart. That isn’t a gap to fill with a rule of thumb from a friend.`,
      },
      {
        list: [
          `If the other drop was prescribed, ask the doctor who prescribed it. They chose it for a reason and know how it should fit with anything else.`,
          `If the other drop is over the counter, ask a pharmacist and bring both boxes, so they can read both ingredient lists.`,
          `Don’t combine or alternate products until you’ve asked.`,
        ],
      },
      {
        p: `[Can I use Quell with other eye drops?](/guides/using-quell-with-other-eye-drops) covers what to bring to that conversation.`,
      },
      { h: 'After a drop: glasses, makeup and the car' },
      {
        p: `People also ask how long to wait after a drop before doing something else. The label doesn’t set times for these either, but there are practical answers:`,
      },
      {
        list: [
          `Vision can blur briefly after a drop. Wait until it’s clear before driving; [can you drive after putting in eye drops?](/guides/can-you-drive-after-putting-in-eye-drops) explains.`,
          `Glasses can go back on once any extra liquid has been blotted from around the eye.`,
          `Eye makeup is easier after drops, not before; [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) walks through the order.`,
          `Blinking normally afterward is fine; [should you blink after eye drops?](/guides/should-you-blink-after-putting-in-eye-drops) covers it.`,
        ],
      },
      { h: 'Why one drop at a time is enough' },
      {
        p: `The surface of the eye can hold only a small amount of liquid at once. Extra liquid spills onto the cheek or drains away, which is why the directions call for one drop rather than several. Waiting between two drops in the same eye won’t make a second one more useful, because the label doesn’t call for a second one. [How much liquid is in one eye drop?](/guides/how-much-liquid-is-in-one-eye-drop) explains the size of a single drop.`,
      },
      { h: 'When waiting isn’t the question' },
      {
        p: `If you find yourself wanting drops closer together than the label allows, that’s worth an eye doctor’s attention. The label’s stop-use section reads: {stopUse} You can read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How long should you wait between eye drops in each eye?',
        a: `Quell’s label calls for one drop in each eye at each dose and doesn’t set a wait between them, so most people do one eye and then the other as one step. Keep the tip off your lids and lashes as you switch.`,
      },
      {
        q: 'How many hours apart should lubricating eye drops be?',
        a: `Quell’s directions give a count, {directions}, not an hourly interval. Spreading the three doses across your waking hours is a common approach.`,
      },
      {
        q: 'How long should I wait between two different eye drops?',
        a: `Quell’s label doesn’t cover using it with another drop. Ask the doctor who prescribed the other drop, or a pharmacist if it’s over the counter, and bring both boxes.`,
      },
    ],
  },
  /*
   * how-long-should-you-use-eye-drops-for-dry-eyes: label tokens only
   * (directions, stop-use list with its 72-hour line, do-not-use line).
   * Phrasing from keyword-suggest ("how long should you use eye drops for dry
   * eyes"). Nearest existing guides: is-it-okay-to-use-eye-drops-every-day,
   * should-i-see-a-doctor-or-try-eye-drops-first, why-the-label-mentions-72-
   * hours; this one is about duration across days, seasons and months.
   */
  {
    slug: 'how-long-should-you-use-eye-drops-for-dry-eyes',
    title: 'How long should you use eye drops for dry eyes?',
    description:
      'Quell’s label sets a daily dose but no number of weeks. It does set one limit: see a doctor if things get worse or persist past 72 hours.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Quell’s label sets how often to use it, {directions}, but not for how many days or weeks. It does set one time limit: stop and ask a doctor if the condition worsens or persists for 72 hours. If your eyes feel better and you keep using it as directed, the label sets no end date. Needing drops month after month is still worth an eye doctor’s visit.`,
      },
      { h: 'What the label sets, and what it doesn’t' },
      {
        p: `The Drug Facts panel is the set of instructions for using an over-the-counter product without a doctor’s order. Quell’s panel covers three things that bear on how long you use it:`,
      },
      {
        list: [
          `The daily dose: {directions}.`,
          `The stop-use list, which includes the 72-hour line.`,
          `One sign the product itself shouldn’t be used: {doNotUse}.`,
        ],
      },
      {
        p: `It doesn’t say “use for 7 days” or “use for up to a month,” and it doesn’t say to stop once you feel better. That silence isn’t permission to ignore your eyes. It means the label leaves the long view to you and, when needed, an eye doctor.`,
      },
      { h: 'The 72-hour line, explained' },
      {
        p: `The stop-use section reads: {stopUse} The 72-hour part is about the condition, not the bottle. If after about three days your eyes are no better, or they’re getting worse, the label wants a doctor involved rather than more of the same. It’s a checkpoint, not a countdown that resets every three days. [Why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) goes into the wording.`,
      },
      { h: 'A few days, a season, or longer' },
      {
        p: `How long people end up using a lubricating drop often follows what’s drying their eyes in the first place:`,
      },
      {
        list: [
          `A short stretch: a trip with long flights and dry hotel rooms, a week of final exams, a project with late nights at a screen.`,
          `A season: winter heating from November into March, or summer air conditioning, when the indoor air is driest.`,
          `Most of the year: a desk job with long screen hours, a dry climate, or a commute with the car vents on.`,
        ],
      },
      {
        p: `In each case, the label’s daily directions are the same. What changes is how long the conditions last. Changing the conditions, such as moving a desk away from a vent or adding a humidifier to the bedroom, can shorten the stretch. [Do you need different eye drops in winter?](/guides/do-you-need-different-eye-drops-in-winter) looks at the seasonal pattern.`,
      },
      { h: 'Daily use for months' },
      {
        p: `Quell’s directions describe everyday use, and nothing on the label limits that if your eyes are comfortable. Still, dryness that needs drops every day for months has a cause, and an eye doctor can find it and decide what to do. Think of a visit as a way to understand why, not a sign you’ve done something wrong. [Is it okay to use eye drops every day?](/guides/is-it-okay-to-use-eye-drops-every-day) covers the everyday side.`,
      },
      { h: 'When to stop sooner' },
      {
        list: [
          `Eye pain, at any point.`,
          `Changes in your vision.`,
          `Irritation that continues or gets worse.`,
          `No improvement after about 72 hours.`,
          `The solution has changed color, which the label lists as a reason not to use it.`,
        ],
      },
      {
        p: `Any of these means stopping and asking a doctor, as the label says. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
      { h: 'How long a bottle lasts' },
      {
        p: `A different “how long” question is about the bottle. Quell comes in a {size} bottle, and at six drops a day it runs for weeks rather than days. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) does the math, and [how long eye drops last after opening](/guides/how-long-do-eye-drops-last-after-opening) covers the opened bottle. Store it as the label says, {storage}, wherever you are.`,
      },
      { h: 'Questions to bring to an eye doctor' },
      {
        list: [
          `How long have I been using drops, and how many a day?`,
          `Do my eyes feel worse at certain times, in certain places or with screens?`,
          `Is one eye worse than the other?`,
          `What else could be drying my eyes, and is there anything to change at home or work?`,
          `Should I keep using a lubricating drop, and for how long?`,
        ],
      },
      {
        p: `Bring the box or a photo of the [Drug Facts panel](/drug-facts) so the doctor can see exactly what you’ve been using. The label also carries this caution: {warnings}.`,
      },
    ],
    faq: [
      {
        q: 'How long can you use lubricating eye drops for dry eyes?',
        a: `Quell’s label sets a daily dose but no number of weeks. It does say to stop and ask a doctor if the condition worsens or persists for 72 hours, and ongoing daily need is worth an eye doctor’s visit.`,
      },
      {
        q: 'Do I need to stop using eye drops when my eyes feel better?',
        a: `The label doesn’t say to stop once you feel better. It gives a daily dose and a list of reasons to stop and ask a doctor, so follow those and talk to an eye doctor about long-term use.`,
      },
      {
        q: 'What does the 72 hours on an eye drop label mean?',
        a: `On Quell’s label it’s part of the stop-use list: if the condition worsens or persists for 72 hours, stop and ask a doctor. It refers to how your eyes are doing, not to how long a bottle can be used.`,
      },
    ],
  },
]
