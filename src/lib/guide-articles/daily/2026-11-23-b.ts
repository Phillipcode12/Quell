import type { Guide } from '@/lib/guide-types'
export const DAILY_20261123_B: Guide[] = [
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-cambridge-ma:
   * - NOAA 1991-2020 monthly normals via RCC ACIS (data.rcc-acis.org StnData),
   *   saved at .daily-job/acis1123/BED.json and .daily-job/b/BED-extra.json
   *   (BEDFORD HANSCOM FIELD, elev 128 ft: normal highs Jan 36.8, Feb 39.4,
   *   Mar 47.5, Apr 59.9, Jul 85.1, Oct 63.6, Nov 52.4, Dec 42.0 F; normal lows
   *   Jan 18.2, Feb 19.3, Mar 27.2, Apr 37.1, Jul 62.0, Oct 40.8, Nov 32.4,
   *   Dec 24.0 F; precipitation Feb 2.69 (lowest), Oct 4.24 (highest), annual
   *   42.60 in; snowfall M)
   * - Hanscom is not in relhum23.txt or wndspd23.txt, so no humidity or wind
   *   figure is given.
   */
  {
    slug: 'dry-eye-relief-cambridge-ma',
    title: 'Dry eye relief in Cambridge, Massachusetts',
    description:
      'Cambridge gets about 42 inches of precipitation a year, yet January lows near 18°F keep the heat on for months. Dry eye relief for its homes, labs and streets.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Dry eye relief in Cambridge is mostly an indoor job. NOAA’s normals for Hanscom Field, the nearest long-record station, show about 42.6 inches of precipitation a year and January lows near 18°F, so the outdoor air is rarely parched but the heat runs from November into April. Keep vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Where Cambridge’s weather numbers come from' },
      {
        p: `Cambridge has no long-record weather station of its own. The closest one with a full set of 1991 to 2020 normals is at Hanscom Field in Bedford, northwest of the city, at about 128 feet above sea level. An airfield in the suburbs and a dense city block don’t share the exact same air, so read the figures below as the regional picture, not a reading from your block. Here’s what NOAA’s 1991–2020 climate normals for Hanscom Field show:`,
      },
      {
        list: [
          `Precipitation of about 42.6 inches in a normal year, spread almost evenly: no month averages less than 2.69 inches (February) or more than 4.24 (October).`,
          `January’s normal high is 36.8°F and its normal low 18.2°F, the coldest pairing of the year.`,
          `July peaks at a normal high of 85.1°F, with lows around 62°F.`,
          `November’s normal low is 32.4°F and March’s is 27.2°F, so frost-level nights bracket the winter by several weeks on each side.`,
        ],
      },
      { h: 'A wet place with dry rooms' },
      {
        p: `An even rain and snow record like that can make dry eyes feel like a contradiction. It isn’t. Relative humidity measures how much water the air holds compared with how much it could hold at its temperature. When 20-degree January air is pulled indoors and warmed to 70, its water content stays the same while its capacity climbs, so the room’s relative humidity falls. Heated, dry air speeds evaporation from the tear film between blinks, and the eye feels it as scratchiness or a tired, gritty sting by mid-afternoon.`,
      },
      {
        p: `In Cambridge that means the season to watch runs from the first sub-freezing nights of November through the last cold ones in late March or April. Older apartment buildings with steam or hot-water heat often run warm, and tenants rarely control the thermostat. Newer offices and lab buildings tend to use forced air, which adds moving air to the dryness. Our guides to [radiator heat](/guides/dry-eyes-from-radiator-heat) and [forced-air heat](/guides/dry-eyes-from-forced-air-heat) go through each setup in more detail.`,
      },
      { h: 'Lab benches, libraries and long screen days' },
      {
        p: `A lot of Cambridge work happens indoors and up close: reading, writing code, staring into instruments, or sitting through long meetings in rooms with sealed windows. Concentration slows blinking, and a half-finished blink leaves part of the eye’s surface uncovered. A few habits help during a long session:`,
      },
      {
        list: [
          `Put the monitor slightly below eye level, so your lids cover more of the eye while you work.`,
          `Every 20 minutes or so, look across the room and do a few slow, complete blinks.`,
          `If a ceiling diffuser blows onto your desk, ask facilities whether it can be redirected, or move the chair a few feet.`,
          `Keep your drops at your desk rather than in a coat in the hallway, so a dose at the right time is easy.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why the blink rate drops at a monitor and what that does to the tear film’s three layers.`,
      },
      { h: 'Walking and biking through a Cambridge winter' },
      {
        p: `Plenty of people in Cambridge get around on foot or by bike, which means time in cold, moving air before and after the heated rooms. Cold wind pulls moisture from the eye’s surface just as heated air does, and riding into it multiplies the effect. Wraparound glasses or clear cycling lenses block much of the airflow. A scarf pulled up over the nose can direct your warm breath upward, so a pair of glasses that fogs is a sign to adjust it rather than give up on eye cover. When you get inside, give your eyes a minute of slow blinking before you sit down at a screen.`,
      },
      { h: 'Making a Cambridge apartment easier on the eyes' },
      {
        list: [
          `Run a cool-mist humidifier in the bedroom and clean it as its maker directs. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers placement.`,
          `Turn a radiator valve down, or crack a window an inch, when the apartment runs hot; cooler rooms lose less moisture to the heat.`,
          `Keep the bed and the couch out of the path of floor registers and space heaters.`,
          `Lower the thermostat at night if you control it. A cooler bedroom with a blanket is easier on eyes than a hot, dry one.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}.`,
      },
      {
        p: `Two more lines matter for a city winter. On storage, the panel says: {storage}. A bottle left in a car parked on the street through a January night can drop below that range, so keep it in an inside pocket or a bag that comes indoors. And keep the dropper clean: {tip}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Cambridge' },
      {
        p: `We ship from Brentwood, Tennessee, to Cambridge and every other US address, including apartments with a shared mailroom; add the unit number at checkout. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so order before the bottle runs low, especially around the holidays. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Cambridge page](/eye-drops/cambridge-ma) and the [Massachusetts page](/eye-drops/state/massachusetts) for local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness. It isn’t a way to find out why your eyes keep bothering you. The label is direct about where self-care ends: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Which weather station is closest to Cambridge, Massachusetts?',
        a: `For NOAA’s 1991 to 2020 normals, the nearest long-record station is at Hanscom Field in Bedford, northwest of Cambridge, at about 128 feet above sea level. Its numbers describe the region rather than any one Cambridge street.`,
      },
      {
        q: 'How cold does it get in Cambridge, MA in January?',
        a: `NOAA’s normals for Hanscom Field put January’s normal high at 36.8°F and its normal low at 18.2°F, the coldest month of the year at that station.`,
      },
      {
        q: 'Why do my eyes feel dry in a Cambridge winter if it rains so much?',
        a: `The region gets about 42.6 inches of precipitation a year, but cold air holds little water. Once it’s heated indoors, its relative humidity drops, and that dry indoor air pulls moisture from the tear film between blinks.`,
      },
      {
        q: 'Does Quell ship to Cambridge, Massachusetts?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Cambridge apartments, houses and offices, with guest checkout and tracking by email. No arrival date is promised, so order a little early.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-huntsville-tx:
   * - NOAA 1991-2020 monthly normals via RCC ACIS (data.rcc-acis.org StnData),
   *   saved at .daily-job/acis1123/UTS.json and .daily-job/b/UTS-extra.json
   *   (HUNTSVILLE MUNICIPAL AP, elev 346 ft: normal highs Jan 61.0, Apr 78.8,
   *   May 86.0, Jun 91.7, Jul 94.2, Aug 95.2, Sep 89.7, Oct 80.7, Nov 69.9,
   *   Dec 62.3 F; normal lows Jan 41.2, Jun 72.8, Jul 74.6, Aug 74.4,
   *   Dec 42.7 F; precipitation Jun 4.57 (highest), Jul 2.75 (lowest),
   *   Nov 4.25, Dec 4.13, annual 43.65 in; snowfall M)
   * - Not in relhum23.txt or wndspd23.txt, so no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-huntsville-tx',
    title: 'Dry eye relief in Huntsville, Texas',
    description:
      'Huntsville, Texas averages a 95°F high in August and 74°F nights, so air conditioning runs around the clock. NOAA’s numbers and what helps dry eyes there.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `In Huntsville, Texas, dry eyes come mostly from the air conditioner. NOAA’s normals for Huntsville Municipal Airport put August highs at 95.2°F and summer lows near 74°F, so cooling runs day and night for months, and conditioned air dries the tear film. Aim vents away from your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Huntsville’s climate on paper' },
      {
        p: `The airport station sits at about 346 feet, and its 1991 to 2020 record is the official one for the area. NOAA’s 1991–2020 climate normals for Huntsville Municipal Airport, the same data the National Weather Service publishes through NOWData, show:`,
      },
      {
        list: [
          `About 43.65 inches of precipitation in a normal year.`,
          `June is the wettest month at 4.57 inches; July, at 2.75, is the driest, right as the heat peaks.`,
          `August’s normal high is 95.2°F, July’s 94.2 and June’s 91.7. September still averages 89.7.`,
          `Summer nights stay warm: normal lows of 72.8°F in June, 74.6 in July and 74.4 in August.`,
          `January is mild, with a normal high of 61.0°F and a low of 41.2.`,
        ],
      },
      { h: 'Why warm nights matter for your eyes' },
      {
        p: `A hot afternoon is only half of it. When a July night bottoms out around 74 degrees, the house never cools off enough to shut the air conditioning down, so the compressor and the blower keep going while you sleep. Air conditioning pulls water out of indoor air as it cools it, and the fan moves that drier air across the room. If a ceiling vent sits over the bed or a box fan points at the pillow, your eyes spend hours in a steady, dry draft. That’s one reason people wake up in summer with eyes that feel sandy before the day has started.`,
      },
      {
        list: [
          `Check where the bedroom supply vent points. Many have adjustable louvers that can send air toward a wall instead of the bed.`,
          `If you sleep with a fan, set it to oscillate or aim it at your feet.`,
          `Set the thermostat a couple of degrees higher at night; the system cycles less and the air moves less.`,
          `Keep the bottle on the nightstand, out of the vent’s path, so a morning dose is easy.`,
        ],
      },
      { h: 'Six months of cooling season' },
      {
        p: `Normal highs reach 86.0°F in May and are still 80.7 in October, so the cooling season in Huntsville runs about half the year. Offices, classrooms, stores and trucks are all conditioned for that whole stretch. If your day moves from a cold office to a parking lot and back, your eyes take turns in dry conditioned air and hot outdoor sun. Sunglasses help outside, and a vent turned toward your chest rather than your face helps in the truck. [Screens and your tear film](/guides/screens-and-your-tear-film) covers the indoor half: blinking slows at a monitor, and the conditioned air does the rest.`,
      },
      { h: 'Outdoor work and weekends in the heat' },
      {
        p: `Mowing, fence work, ranch chores, deer leases in the fall and long afternoons at a ball field all put your eyes in sun and wind. In July, the month with the least rain on the record, the ground dries out and dust lifts with every gust. A few things make outdoor time easier:`,
      },
      {
        list: [
          `Do the heavy outdoor jobs early in the morning, before the afternoon heat builds.`,
          `Wear wraparound sunglasses or safety glasses that close the gap at the temples.`,
          `If dust, a seed or a bit of debris gets in an eye, don’t rub it and don’t count on a lubricating drop to fix it. Something stuck in the eye is a job for an eye doctor or urgent care.`,
          `Don’t leave your drops on the dashboard. A parked truck in an August sun gets far hotter than the label allows.`,
        ],
      },
      { h: 'Mild winters and the first cold fronts' },
      {
        p: `Huntsville’s winters are short. December averages a 62.3°F high and a 42.7°F low, and January is about the same. Still, when a cold front comes through, the heat goes on for a few days, and those first runs of a furnace or heat pump dry the indoor air quickly. November, at 4.25 inches, and December, at 4.13, are among the wetter months, so outdoor air in winter is rarely the issue. Indoor heating is. A small humidifier in the bedroom can help on those cold-front weeks; see [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions say: {directions}. It contains {actives} as active ingredients, and it’s preservative-free.`,
      },
      {
        p: `On storage, the label is specific: {storage}. In a Huntsville summer that rules out a glove box, a truck-bed toolbox or a mailbox in the sun, so bring the bottle inside with you. Its look is normal too: {appearance} The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Huntsville' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Huntsville and the rest of Walker County, and to every other Texas address. You can check out as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We email tracking but don’t promise an arrival date, and a box on a sunny porch in August is worth bringing in quickly. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Huntsville page](/eye-drops/huntsville-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops are for everyday dryness, not for working out the cause of symptoms that return. The label says it plainly: {stopUse} If one eye is much worse than the other, or your vision changes, book an appointment. The [self-check](/self-check) can help you put words to what you’re feeling before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Huntsville, Texas?',
        a: `August, by NOAA’s 1991 to 2020 normals for Huntsville Municipal Airport, with a normal high of 95.2°F. July is close behind at 94.2°F.`,
      },
      {
        q: 'What is the driest month in Huntsville, TX?',
        a: `July, at 2.75 inches of precipitation in a normal year at Huntsville Municipal Airport. June, just before it, is the wettest month at 4.57 inches.`,
      },
      {
        q: 'Why do my eyes feel dry when I wake up in a Texas summer?',
        a: `Warm nights keep the air conditioning running while you sleep, and conditioned air is drier and keeps moving. A vent or fan aimed at the bed dries the tear film for hours, so redirect it and raise the night setting a little.`,
      },
      {
        q: 'Does Quell ship to Huntsville, Texas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Huntsville and the surrounding area, with guest checkout and tracking by email. No delivery date is promised, so order before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-new-bern-nc:
   * - NOAA 1991-2020 monthly normals via RCC ACIS (data.rcc-acis.org StnData),
   *   saved at .daily-job/acis1123/EWN.json and .daily-job/b/EWN-extra.json
   *   (NEW BERN - COASTAL CAROLINA REGIONAL AIRPORT, elev 11 ft: normal highs
   *   Jan 55.1, Feb 58.5, Apr 73.6, Jul 89.6, Aug 87.9, Oct 74.9, Nov 65.6,
   *   Dec 58.5 F; normal lows Jan 33.8 (lowest month), Feb 35.8, Jul 71.2,
   *   Dec 36.9 F; precipitation Jul 6.26, Aug 6.81 (highest), Sep 6.33,
   *   Apr 3.18 (lowest), Oct 3.56, Nov 3.33, annual 53.01 in; Jul-Sep 19.40 in;
   *   snowfall M)
   * - Not in relhum23.txt or wndspd23.txt, so no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-new-bern-nc',
    title: 'Dry eye relief in New Bern, North Carolina',
    description:
      'New Bern gets about 53 inches of rain a year, a third of it from July to September. Why eyes still feel dry there in spring and winter, and what helps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `New Bern is a wet, low-lying place, so dry eyes there come from indoor air and a few dry spells rather than the climate as a whole. NOAA’s normals for the regional airport show about 53 inches of rain a year, with April the driest month and winter heat running from December into March. Keep heating and cooling drafts off your face, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'New Bern’s weather in NOAA’s record' },
      {
        p: `The weather station for New Bern is at Coastal Carolina Regional Airport, only about 11 feet above sea level, which tells you most of what you need to know about the landscape: flat, close to the water and surrounded by low country. NOAA’s 1991–2020 climate normals for the airport show:`,
      },
      {
        list: [
          `About 53.01 inches of precipitation in a normal year.`,
          `July (6.26 inches), August (6.81) and September (6.33) together bring 19.4 inches, more than a third of the year’s total.`,
          `April is the driest month at 3.18 inches, followed by February (3.32) and November (3.33).`,
          `July’s normal high is 89.6°F, with nights near 71°F.`,
          `January’s normal low is 33.8°F, the coldest of the year, and its normal high is 55.1°F.`,
        ],
      },
      { h: 'Spring: the dry month and the windows-open weeks' },
      {
        p: `April is the month that catches people off guard. It has the least rain on the airport’s record, highs reach 73.6°F, and it’s the season for yard work, pressure-washing the deck and getting the boat ready. Sun, a breeze off open water and fine dust from a freshly mowed yard all reach your eyes at once. Sunglasses that wrap around the sides block much of the wind and glare. Take a break in the shade and blink slowly for a minute when your eyes start to sting, and if anything gets into an eye, rinse it out and don’t rub; something that stays stuck is for an eye doctor or urgent care, not a drop.`,
      },
      { h: 'Summer rain doesn’t mean comfortable eyes' },
      {
        p: `From July through September, New Bern gets its heaviest rain, and highs sit in the upper 80s. Outdoor air in those months is anything but dry. The trouble starts when you go inside. Houses, stores and offices run their air conditioning hard for months, and cooling pulls water out of the air as it chills it. A ceiling vent over a desk or a car vent aimed at your face then pushes that drier air straight across your eyes. Turn vents toward your chest or the window, and give your eyes a break from long stretches in a conditioned car. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has more for commuters.`,
      },
      { h: 'A short winter with a long heating habit' },
      {
        p: `New Bern’s winters are mild by most standards. No month’s normal low on the airport record falls below freezing: January comes closest at 33.8°F, and December averages 36.9. Even so, those nights are cold enough that the heat runs every evening from about December into March. Whatever warms the house, warmed air holds a lower share of the water it could carry, and a bedroom with the heat on all night can leave eyes gritty in the morning.`,
      },
      {
        list: [
          `Keep the bed and the favorite chair out of the line of a floor or ceiling register.`,
          `Run a humidifier in the bedroom through the coldest weeks, cleaned as its maker directs.`,
          `Use a heavier blanket and a lower thermostat at night instead of a warm, dry room.`,
          `If you use a space heater in a back room, point it at your legs, not your face.`,
        ],
      },
      { h: 'Reading, screens and quiet evenings' },
      {
        p: `Long December evenings mean more reading, more TV and more time on a phone. Each of those slows blinking, and a slower blink rate leaves the tear film exposed for longer. Put the phone down every 20 minutes or so, look across the room, and blink fully a few times. [Dry eyes when it gets dark early](/guides/dry-eyes-when-it-gets-dark-early) has a fuller routine for the short-day months.`,
      },
      { h: 'Quell’s label, in plain terms' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions read: {directions}. Its active ingredients are {actives}.`,
      },
      {
        p: `The panel’s storage line is {storage}. A bottle left in a car through a New Bern July afternoon will go well past that, so keep it in a bag that comes inside. Keep the tip clean, too: {tip}. Everything on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to New Bern' },
      {
        p: `Orders ship from Brentwood, Tennessee, to New Bern, Trent Woods, River Bend and every other North Carolina address. Guest checkout is the default, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You get tracking by email, but no delivery date is promised, so reorder with a bottle still in hand. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [New Bern page](/eye-drops/new-bern-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have local details.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `If drops and a better-placed vent don’t settle things, the next step is an exam, not a second bottle. The label sets the line: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainiest month in New Bern, NC?',
        a: `August, at 6.81 inches in NOAA’s 1991 to 2020 normals for Coastal Carolina Regional Airport. July and September are close behind at 6.26 and 6.33 inches.`,
      },
      {
        q: 'What is the driest month in New Bern, North Carolina?',
        a: `April, at 3.18 inches of precipitation in a normal year at the regional airport. It’s also a busy month for yard work and boating, which adds sun and wind.`,
      },
      {
        q: 'Does it freeze in New Bern in the winter?',
        a: `Some nights do, but no month’s normal low at the airport falls below freezing. January comes closest, with a normal low of 33.8°F.`,
      },
      {
        q: 'Can I get Quell delivered in New Bern, NC?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to New Bern and the surrounding towns, with guest checkout and email tracking. No arrival date is promised, so order before the bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-23 for dry-eye-relief-holland-mi:
   * - NOAA 1991-2020 monthly normals via RCC ACIS (data.rcc-acis.org StnData),
   *   saved at .daily-job/acis1123/BIV.json and .daily-job/b/BIV-extra.json
   *   (HOLLAND TULIP CITY AP, elev 677 ft: normal highs Jan 31.8, Feb 34.3,
   *   Mar 44.4, Apr 56.8, May 68.6, Jul 81.7, Oct 60.8, Nov 47.6, Dec 36.9 F;
   *   normal lows Jan 19.9, Feb 20.5, Mar 27.6, Apr 37.4, Jul 61.6, Oct 42.6,
   *   Nov 33.8, Dec 26.2 F; precipitation Jan 1.87, Feb 1.77 (lowest),
   *   Mar 2.07, Dec 2.11, Apr 3.50, May 3.76, Oct 4.22 (highest), annual
   *   34.76 in; snowfall M)
   * - Not in relhum23.txt or wndspd23.txt, so no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-holland-mi',
    title: 'Dry eye relief in Holland, Michigan',
    description:
      'Holland’s winter highs stay in the 30s for three months and February is its driest month on record. How West Michigan winters dry the eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-23',
    body: [
      {
        p: `In Holland, Michigan, dry eyes peak in the heating season. NOAA’s normals for Tulip City Airport show highs below 40°F from December through February, lows near 20°F, and February as the year’s driest month for precipitation. Furnaces run for half the year, so keep warm air off your face, run a bedroom humidifier, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Tulip City Airport record shows' },
      {
        p: `Holland’s weather station is at the Tulip City Airport, at about 677 feet. NOAA’s 1991–2020 climate normals for the station, as published through the National Weather Service’s NOWData, describe a long winter and a short, mild summer:`,
      },
      {
        list: [
          `About 34.76 inches of precipitation in a normal year.`,
          `February is the driest month at 1.77 inches, with January (1.87), March (2.07) and December (2.11) close behind.`,
          `October is the wettest month at 4.22 inches; May follows at 3.76.`,
          `Normal highs stay below 40°F in December (36.9), January (31.8) and February (34.3).`,
          `July’s normal high is 81.7°F, with nights near 62°F.`,
        ],
      },
      {
        p: `Those winter precipitation figures include melted snow, and the station’s snowfall normals aren’t available, so they don’t say how much snow falls. What they do show is that the coldest months bring the least water of the year.`,
      },
      { h: 'Why winter is the hard season' },
      {
        p: `Cold air holds very little water. When 20-degree air leaks into a house and the furnace warms it to 68, its relative humidity falls sharply, and the warm, dry air draws moisture from every surface it touches, including the tear film. Forced-air systems add movement: each time the blower kicks on, a stream of that air comes out of a register. If the register is under your desk, beside the bed or at the foot of the couch, your eyes feel it.`,
      },
      {
        p: `Holland’s heating season is long. October nights already average 42.6°F, November’s normal low is 33.8°F, and April’s is still 37.4°F. Count on about six months of furnace air. [Dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) goes room by room through registers, filters and returns.`,
      },
      { h: 'Small changes around the house' },
      {
        list: [
          `Close or redirect a floor register that blows straight at a bed or a recliner, as long as the room still heats.`,
          `Run a humidifier in the bedroom from November into April, and clean it on the schedule its maker gives.`,
          `Change the furnace filter on schedule so the blower isn’t pushing dust around.`,
          `Turn the thermostat down a few degrees at night; a cooler room with an extra blanket is gentler on the eyes.`,
          `Keep a space heater pointed at your feet and well away from your face.`,
        ],
      },
      { h: 'Plant floors, offices and shift work' },
      {
        p: `If your job keeps you in a large heated building for a long shift, on a production floor or at a desk, the air there matters as much as at home. Big spaces are often heated with blowers mounted high on the walls or ceiling, and in an office the supply vent is usually overhead. If a stream of warm air runs across your workstation, ask whether it can be angled away. At a screen, look up and away every 20 minutes and finish each blink. On a line, safety glasses keep moving air and flying debris away from the eye at the same time. If anything does get into an eye at work, rinse it as your workplace directs and get it checked by an eye doctor or urgent care; a lubricating drop isn’t the answer for that.`,
      },
      { h: 'Spring and the windy shoulder weeks' },
      {
        p: `Spring warms quickly: from a normal high of 44.4°F in March to 68.6°F in May. Rain picks up too, with April at 3.50 inches and May at 3.76. Those first warm weekends bring yard cleanup, bike rides and time at the beach, often in a strong breeze. Sunglasses with side coverage help, and they also cut the glare off water and pale sand. The heat may still kick on at night in April, so the indoor half of the problem doesn’t vanish all at once.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions: {directions}.`,
      },
      {
        p: `The storage line is {storage}. That matters in a Holland January, when a car in an open lot can sit well below 59°F for hours; keep the bottle in an inside pocket and bring it in at night. If a bottle ever looks wrong, the label says: {doNotUse}. For reference, the panel also notes: {milky}. See the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Holland' },
      {
        p: `We ship from Brentwood, Tennessee, to Holland, Zeeland, Saugatuck and the rest of Michigan. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email; no delivery date is promised, so order ahead of a snowy stretch. A box left on a porch in January can get very cold, so bring it in when it arrives. Unopened bottles can be refunded within {returnDays} days of delivery, without sending them back. The [Holland page](/eye-drops/holland-mi) and the [Michigan page](/eye-drops/state/michigan) have more.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `A drop helps with everyday dryness; it doesn’t explain why your eyes keep bothering you. The label lists when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Holland, Michigan get in winter?',
        a: `NOAA’s 1991 to 2020 normals for Tulip City Airport put January’s normal high at 31.8°F and its normal low at 19.9°F. December and February highs are also below 40°F.`,
      },
      {
        q: 'What is the driest month in Holland, MI?',
        a: `February, with 1.77 inches of precipitation in a normal year at Tulip City Airport. January, March and December are also among the driest months on that record.`,
      },
      {
        q: 'Why are my eyes so dry in my Holland house in winter?',
        a: `The furnace warms cold outdoor air without adding water, so indoor relative humidity drops and the tear film evaporates faster. Registers blowing toward a bed or chair make it worse; redirect them and run a bedroom humidifier.`,
      },
      {
        q: 'Does Quell ship to Holland, Michigan?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Holland, Zeeland and the lakeshore towns, with guest checkout and tracking by email. No delivery date is promised, so order ahead.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-wind-turbine-technicians',
    title: 'Dry eyes for wind turbine technicians',
    description:
      'Wind at hub height, cold nacelles, long climbs and laptop fault logs all dry the eyes. Practical habits for wind techs, plus what Quell’s label covers.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Wind turbine technicians get dry eyes because the job stacks several drying conditions in one shift: steady wind on top of the nacelle, cold or overheated air inside it, exertion on the climb, and close-up work on controllers and laptops that slows blinking. Shield your eyes from wind, use drops on the ground or in a stable spot, keep the bottle in an inside pocket, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why wind work is hard on the eyes' },
      {
        p: `The tear film is a thin layer of oil, water and mucus that each blink spreads across the eye. Anything that speeds evaporation thins it, and wind is one of the fastest ways to do that. A turbine site is chosen because the air moves, and the higher you go, the less there is to break it. Add the cold of a winter morning or the glare of a summer afternoon, and the eye’s surface loses water faster than blinking puts it back.`,
      },
      {
        p: `Then there’s focus. Torquing bolts, reading a multimeter, tracing a fault through a controller or scrolling through turbine data on a laptop all pull your eyes into a fixed stare. People blink less when they concentrate, and they often blink only partway, which leaves the lower part of the eye uncovered for longer.`,
      },
      { h: 'Up top: wind at hub height' },
      {
        p: `Work on the roof of the nacelle or out at the hub puts your face straight into the wind, often with no shelter at all. Whatever eye protection your site requires is the first line here; glasses that wrap around the sides, or a pair with a foam seal, stop much more of the airflow than flat lenses. A few more habits help:`,
      },
      {
        list: [
          `Turn your face out of the wind when you’re reading a tag or checking a connection, if the task allows it.`,
          `Before you head out on the nacelle roof, blink slowly and fully a few times inside.`,
          `If your eyes start watering hard, that’s the surface reacting to dryness and wind. Finish the task safely, then get inside and give them a break.`,
          `If grit, a metal shaving, grease or a fleck of paint gets in an eye, don’t rub it and don’t try to rinse it out with a lubricating drop. Get down safely and have it seen by an eye doctor or urgent care.`,
        ],
      },
      { h: 'Inside the nacelle: cold, heat and stale air' },
      {
        p: `The nacelle is a closed box full of machinery, and its air depends on the season and the turbine. In winter it can be cold enough that your breath shows, and cold air holds little moisture. In summer, with the sun on the housing and the gearbox and generator giving off heat, it can run hot and stuffy. Either way, the air is often dry and sometimes moving from cooling fans. You can’t change the turbine, but you can change where you stand: work out of the direct stream from a fan when the job allows, and step back to blink and refocus between tasks.`,
      },
      { h: 'The climb and the long drive' },
      {
        p: `Climbing a tower ladder is hard work, and you’ll want both hands for the ladder and your gear, not for eye drops. Use your drops before the climb and after you’re back on the ground, or once you’re settled and secured in a stable spot at the top if your site’s rules allow it. Many sites are a long drive from the shop, which adds hours in a truck with the heater or air conditioning running. Point the dash vents at your chest instead of your face, and don’t leave your bottle on the dashboard.`,
      },
      { h: 'Screens, data and the end of a long shift' },
      {
        p: `Much of the job is now troubleshooting by data: fault logs on a laptop, a tablet with work orders, a phone with photos to send back. Looking at a screen slows blinking just like close mechanical work does. Every 20 minutes or so, look out the hatch or across the turbine for a few seconds and blink fully. At the end of a long shift or a run of shifts away from home, tired eyes often feel driest of all. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why the blink rate drops at a monitor.`,
      },
      { h: 'Carrying drops on the job' },
      {
        list: [
          `The label’s storage line is {storage}. A truck parked in the sun or a nacelle in January can go past either end, so keep the bottle in an inside chest pocket where body heat holds it in range.`,
          `Clean or remove your gloves before putting in drops. Greasy or dusty fingers near your eye defeat the purpose.`,
          `Follow the label’s tip rule: {tip}. The tip shouldn’t touch your gloves, your eyelid or a toolbag.`,
          `Bring a spare in your travel bag if you’re on a hitch away from home. [Keeping spare bottles](/guides/keeping-spare-bottles) covers how to rotate them.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. Directions: {directions}. Spread three doses through the day around your schedule, such as one before the climb, one at lunch and one after the drive home. The label doesn’t give directions for use with contact lenses or alongside other eye drops; ask an eye doctor or pharmacist about either. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind and cold can make dryness worse, but they don’t explain every symptom. The label says when to stop: {stopUse} Anything that strikes the eye, or a feeling that something is still in it after you’ve blinked, needs an exam, not a drop. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor), and get the [Drug Facts](/drug-facts) panel in front of your eye doctor if you have questions about using Quell.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry working on wind turbines?',
        a: `Wind at height thins the tear film quickly, nacelle air is often cold or hot and dry, and close work on controllers and laptops slows blinking. Those conditions overlap on most shifts.`,
      },
      {
        q: 'Can wind turbine techs use eye drops at the top of the tower?',
        a: `Only when you’re secured in a stable spot and your site’s rules allow it. Using them before the climb and after you’re back on the ground is simpler, with clean hands and the tip kept off every surface.`,
      },
      {
        q: 'What should I do if something gets in my eye in the nacelle?',
        a: `Don’t rub it and don’t rely on a lubricating drop to wash it out. Get down safely and have it checked by an eye doctor or urgent care, especially for metal, grease or anything that struck the eye.`,
      },
      {
        q: 'Where should a wind tech keep eye drops in winter?',
        a: `In an inside chest pocket, where body heat keeps the bottle within the label’s storage range. A cold truck or nacelle can drop below it.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-cable-and-internet-installers',
    title: 'Dry eyes for cable and internet installers',
    description:
      'Hot attics, dusty crawl spaces, wind on a ladder and a van heater between jobs: why cable and internet installers get dry eyes, and simple ways to cope.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Cable and internet installers get dry eyes because each job puts them in a different kind of air: a hot, dusty attic, a crawl space, wind on a ladder outside, a customer’s heated living room, then a van with the vents on. Add close work on connectors and a phone full of work orders, and blinking slows. Protect your eyes from dust, keep vents off your face, and use a lubricating drop as labeled.`,
      },
      { h: 'Why the work dries your eyes' },
      {
        p: `Your eyes stay comfortable when a smooth tear film covers them between blinks. Heat, moving air and low humidity all speed evaporation from that film, and an installer can pass through all three in a single morning. There’s also concentration: stripping coax, terminating a connector, splicing fiber or reading a signal meter all hold your eyes on one small point, and people blink less when they focus that hard.`,
      },
      { h: 'Attics and crawl spaces' },
      {
        p: `An attic in summer can be far hotter than the house below it, and the air is dry and full of insulation fibers and dust that drift when you move. A crawl space is cooler but often just as dusty. Neither is a place to put in eye drops, because loose particles can land on the bottle tip or on your fingers.`,
      },
      {
        list: [
          `Wear the eye protection your employer provides or requires. Sealed or wraparound glasses keep drifting dust out much better than regular glasses.`,
          `Use a headlamp pointed slightly down rather than into the rafters, so you aren’t squinting into glare reflected off foil or white insulation.`,
          `Climb out for a minute between steps of a long run and blink slowly a few times in clean air.`,
          `If insulation, dirt or a fragment of anything gets into an eye, don’t rub it. A lubricating drop isn’t for flushing debris out; have it looked at by an eye doctor or urgent care.`,
        ],
      },
      { h: 'Ladders, poles and wind' },
      {
        p: `Outside work brings wind, sun and, in winter, cold. Wind at the top of a ladder or on a roof line hits your face straight on while both hands are busy. Glasses that wrap around the sides break most of that airflow. On cold days, cold air carries little moisture, so even a light breeze dries the eye more than you’d expect. Use your drops in the van before you go up, not halfway up the ladder.`,
      },
      { h: 'Inside customers’ homes' },
      {
        p: `Indoor jobs have their own air. In winter, a house with the furnace running and a register near the TV stand or the router closet will blow warm, dry air at you while you work on the floor. In summer, a window unit or central air does the same with colder air. You can’t adjust the customer’s thermostat, but you can usually shift your position so the register isn’t aimed at your face. Kneeling behind a TV cabinet for 20 minutes is also a long stretch of close focus, so look up across the room now and then.`,
      },
      { h: 'The van between jobs' },
      {
        p: `Hours of driving between appointments add up. The dash vents sit at face height, and in winter the heater runs on high to warm up after an attic or a pole. Aim the vents at your chest or the windshield and use the floor setting when you can. Your phone or tablet also eats into blinking: reading a work order, checking an address and closing out a ticket are all short sessions of staring at a small screen. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has more on vehicle air.`,
      },
      { h: 'A routine that fits an installer’s day' },
      {
        list: [
          `One dose before you leave home, one at lunch and one when your shift ends gives you the label’s three a day without stopping mid-job.`,
          `Wash or wipe your hands before using drops; cable gel, dust and attic grime don’t belong near your eyes.`,
          `Keep the bottle in a jacket or shirt pocket, not in the van’s door pocket, which heats up and cools down with the weather.`,
          `Put in drops while you’re parked, never while driving.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Directions: {directions}. The panel also warns: {warnings}. Keep the tip clean: {tip}.`,
      },
      {
        p: `For storage, the label says {storage}. A van parked in a summer sun or left out on a January night can fall outside that range, so the bottle should ride with you. The label doesn’t cover use with contact lenses or other eye drops; ask an eye doctor or pharmacist. See the full panel on our [Drug Facts page](/drug-facts), and our guide for [outdoor workers](/guides/dry-eyes-for-outdoor-workers) for more on weather.`,
      },
      { h: 'When to get it checked' },
      {
        p: `Dryness that improves with better habits is one thing. Pain, vision changes or the feeling that something is stuck in your eye are another. The label lists the signs: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after working in an attic?',
        a: `Attic air is often hot and dry, and insulation fibers and dust float in it. Heat speeds evaporation from the tear film, and particles can irritate the eye, so wear sealed glasses and take breaks in clean air.`,
      },
      {
        q: 'Can cable techs keep eye drops in their work van?',
        a: `It’s better to carry them in a pocket. A van can get hotter or colder than the label’s storage range, while your body keeps a pocket closer to room temperature.`,
      },
      {
        q: 'Should I use eye drops if insulation gets in my eye?',
        a: `No. A lubricating drop isn’t meant to flush out debris. Don’t rub the eye, and have it checked by an eye doctor or urgent care.`,
      },
      {
        q: 'How can installers rest their eyes between jobs?',
        a: `Before driving off, look into the distance for a minute and blink slowly. Point the van’s vents away from your face, and use your drops while parked, not on the road.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-sound-engineers',
    title: 'Dry eyes for sound engineers',
    description:
      'Dim control rooms, bright meters, late sessions and cold gear rooms dry a sound engineer’s eyes. How to set up the room and the night to go easier on them.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Sound engineers get dry eyes because the work is listening done while staring: at waveforms, meters and plugin windows in a dim room, often late into the night, in air kept cool for the gear. Concentration lowers blinking, and cool, dry, moving air thins the tear film faster. Lift the room’s light a little, look away from the screen between passes, keep vents off your face, and use a lubricating drop as labeled.`,
      },
      { h: 'Why mixing and recording dry your eyes' },
      {
        p: `Most of the job happens with your eyes fixed on a screen. You loop eight bars and watch the playhead, scan a meter for clipping, zoom in to edit a breath. Each of those holds your gaze still, and the blink rate drops while you focus. When blinks slow, the thin layer of tears over the eye has longer to evaporate before the next one spreads it again. By hour six, that shows up as a gritty, burning or heavy feeling.`,
      },
      { h: 'The control room: dim light, bright screens' },
      {
        p: `Many control rooms are kept dark so the monitors and meters stand out and nothing distracts from the speakers. A bright screen in a dark room makes your eyes work harder to adjust, and you tend to lean in and stare. You don’t need to flood the room, but a few changes help:`,
      },
      {
        list: [
          `Add a lamp or bias light behind or beside the monitors so the screen isn’t the only bright thing in view.`,
          `Turn screen brightness down to roughly match the room.`,
          `Set the monitors slightly below eye level. Looking a little down lets your eyelids cover more of the eye.`,
          `Use a larger zoom or font in your editor so you aren’t leaning toward the screen.`,
        ],
      },
      { h: 'Cool rooms and the gear closet' },
      {
        p: `Studios and machine rooms are often kept cool because equipment runs warm, and air conditioning removes moisture from the air as it cools it. If a supply vent sits above the mix position, cold, dry air flows straight across your face for hours. Ask whether it can be angled away, or shift the chair. In winter, a building’s heat can be just as dry. A small, quiet humidifier in the control room is worth considering, as long as it’s far enough from gear and cleaned as its maker directs. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) has more.`,
      },
      { h: 'Front of house and live shows' },
      {
        p: `Live work brings a different set of conditions. At the front-of-house position you watch the stage and the console for hours, under or near stage lighting, often with haze or fog in the air for the lights. Haze drifting into the audience and dust kicked up during load-in can both irritate eyes. Monitor engineers at the side of the stage spend the show staring at the band and a screen at once. Load-out ends late, and then there’s the drive or the bus.`,
      },
      {
        list: [
          `Use your drops before doors open and after the set, at the console when the room is quiet, never with dirty hands from cables and road cases.`,
          `Between songs or during a long set change, look across the room at something far away.`,
          `On a tour bus, aim bunk vents away from your pillow.`,
        ],
      },
      { h: 'Late nights and long sessions' },
      {
        p: `Sessions run long, and the hardest mixing decisions often land late. Tired eyes tend to feel drier, and a long stretch without a break is the worst case. Short, regular breaks help. Every 20 to 30 minutes, step away from the screen, look at something across the room or out a window for 20 seconds, and blink fully a few times. On a break, walk out of the room entirely. [Dry eyes for musicians and stage performers](/guides/dry-eyes-for-musicians-and-performers) covers the view from the stage, and [Screens and your tear film](/guides/screens-and-your-tear-film) explains why staring at a display changes how you blink.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. The directions say: {directions}. For an engineer’s day, that might mean once at the start of a session, once at the dinner break and once before the last pass.`,
      },
      {
        p: `A few notes from the panel: {tip}. Store it as directed: {storage}, which a car parked outside a venue in summer or winter can exceed. And its color is expected: {appearance} The full panel is on our [Drug Facts page](/drug-facts). The label doesn’t give directions for contact lenses or for other drops; ask your eye doctor or pharmacist.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If you’ve fixed the lighting, moved the vent and taken breaks, and your eyes still bother you most days, it’s time for an exam. The label is clear on when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long mixing session?',
        a: `Staring at waveforms and meters slows your blinking, and the cool, dry air in many studios speeds evaporation from the tear film. Hours of both leave the eyes feeling dry and tired.`,
      },
      {
        q: 'Should a recording studio be dark?',
        a: `Dim is fine, but a bright screen in a completely dark room makes you stare harder. A lamp or bias light near the monitors and lower screen brightness are easier on the eyes.`,
      },
      {
        q: 'Can stage haze make your eyes feel dry?',
        a: `Haze and fog in the air, along with dust from load-in, can irritate the eyes during a show. Step out of the haze when you can, and see an eye doctor if irritation continues.`,
      },
      {
        q: 'When should sound engineers take eye breaks?',
        a: `Every 20 to 30 minutes, look at something across the room for about 20 seconds and blink fully. Leave the room entirely on longer breaks.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-poker-players',
    title: 'Dry eyes for poker players',
    description:
      'Long sessions, card room air, hours of reading opponents and online multi-tabling all dry a poker player’s eyes. Habits for live and online play.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Poker players get dry eyes because the game rewards a steady, unblinking watch: on the cards, the board, the chips and the other players, often for eight hours or more in a climate-controlled card room or in front of several online tables. Focus slows blinking and conditioned air speeds evaporation. Blink deliberately between hands, use the breaks, keep vents off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why poker is hard on the eyes' },
      {
        p: `A good player watches everything: how someone stacks chips, where their eyes go when the flop comes, how long they take to act. That kind of watching is concentration, and concentration lowers the blink rate. Each blink spreads a fresh layer of tears across the eye; when blinks come slowly or stop halfway, the surface dries between them. Over a long session, that shows up as a burning or sandy feeling, or eyes that start watering for no obvious reason.`,
      },
      { h: 'Card room air' },
      {
        p: `Casino card rooms and poker rooms run their heating and cooling around the clock, and many have strong ventilation to keep large rooms comfortable. That steady flow of conditioned air moves across the tables, and conditioned air is usually drier than outside air. If you can choose a seat, avoid one directly under a ceiling vent. If you can’t, a ball cap brim can break some of the downdraft. [Dry eyes for casino dealers](/guides/dry-eyes-for-casino-dealers) covers the same rooms from the other side of the table.`,
      },
      { h: 'Sunglasses at the table' },
      {
        p: `Many players wear sunglasses to hide their eyes, and some find they help with glare from bright table lights too. Glasses can also block a little of the airflow from a vent. They don’t add moisture, though, and a tinted lens in a dim room makes you strain to read cards. If you wear them, take them off on breaks and check how your eyes feel without them.`,
      },
      { h: 'Using breaks well in a tournament' },
      {
        p: `Tournament breaks are short, and most people spend them in line for the restroom or on their phone. A phone screen is more of the same staring. Try this instead:`,
      },
      {
        list: [
          `Walk away from the table and look at something far away, across the room or out a window if there is one.`,
          `Do ten slow, complete blinks, letting your lids fully close each time.`,
          `Use your drops during the break, with clean hands, rather than at the table. Chips and cards pass through a lot of hands.`,
          `If your eyes feel heavy, close them for a minute.`,
        ],
      },
      { h: 'Online poker and multi-tabling' },
      {
        p: `Online play takes away the room air and adds screens, often several tables across one or two monitors. Watching action on four or eight tables at once keeps your eyes moving between small windows and leaves little room for full blinks. A few things help:`,
      },
      {
        list: [
          `Set the monitors slightly below eye level so your upper lids cover more of each eye.`,
          `Make the tables large enough to read without leaning in.`,
          `Keep a desk fan or a heating vent from blowing across your face.`,
          `Sit out a round or take a five-minute break every hour to rest your eyes.`,
        ],
      },
      {
        p: `[Dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) has more on arranging screens, and [screens and your tear film](/guides/screens-and-your-tear-film) explains why the blink rate drops at a display.`,
      },
      { h: 'Late nights and home games' },
      {
        p: `Home games and long sessions often run late, and tired eyes feel drier. A kitchen table under a bright pendant lamp, a living room with the heat on, a card table next to a space heater: each one dries the air around you. Move the space heater so it points at your legs, and set the game away from the main register if you’re the host. When the game breaks up, put your phone down for a few minutes before bed.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions read: {directions}. For a long session, a dose before you sit down, one at a mid-session break and one later on fits that pattern. Keep the tip clean: {tip}.`,
      },
      {
        p: `The storage line is {storage}. A car in a casino parking garage or lot can go past that range in summer, so keep the bottle in a pocket rather than the console. The full panel is on the [Drug Facts page](/drug-facts). The label doesn’t give directions for contact lenses or for other eye drops; ask an eye doctor or pharmacist.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes still trouble you after a better seat, regular breaks and drops, have them checked. The label puts it directly: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry playing poker?',
        a: `Watching cards and opponents for hours slows your blinking, and card rooms run conditioned air that speeds evaporation from the tear film. Long sessions combine both.`,
      },
      {
        q: 'Do sunglasses help with dry eyes at the poker table?',
        a: `They can cut glare and block some airflow from vents, but they don’t add moisture. A dark lens in a dim room can also make you strain, so take them off on breaks.`,
      },
      {
        q: 'Can I use eye drops at a poker table?',
        a: `It’s better to step away on a break. Chips and cards are handled by many people, so wash your hands and use the drops away from the table.`,
      },
      {
        q: 'How do I stop dry eyes when multi-tabling online?',
        a: `Make the tables large enough to read without leaning in, set the monitors slightly below eye level, keep fans off your face and take a short break every hour.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-catering-and-banquet-staff',
    title: 'Dry eyes for catering and banquet staff',
    description:
      'Ballroom air, chafing dish heat, outdoor events and back-to-back holiday parties dry the eyes of catering crews. What helps from setup to teardown.',
    category: 'using',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Catering and banquet staff get dry eyes from a long day of changing air: hot steam and fuel heat from chafing dishes, ballroom ventilation sized for hundreds of guests, wind and sun at outdoor events, and van heaters on the drive in. December party season stacks those shifts back to back. Keep your face out of rising heat, blink deliberately during long stands, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why event work dries the eyes' },
      {
        p: `The tear film covering your eye is thin, and heat, moving air and low humidity all pull water from it. Event work moves you through those conditions all shift long: loading the van, setting the room, running the buffet, clearing tables, breaking down. Each environment on its own is manageable. Ten hours of switching between them is what leaves your eyes scratchy by the time the last tables are stacked.`,
      },
      { h: 'Chafing dishes and hot boxes' },
      {
        p: `A buffet line is a row of heat sources at about chest height. When you lift a chafing dish lid to stir or swap a pan, a puff of steam and hot air rises straight into your face, and the fuel cans underneath keep warm air rising the whole time you stand there. Hot holding cabinets do the same when you open them. Small habits make a difference:`,
      },
      {
        list: [
          `Lift lids away from you, so the steam goes toward the back of the table rather than up toward your eyes.`,
          `Stand to the side of a hot box when you open the door, not right in front of it.`,
          `Step back from the line between refills instead of leaning over it.`,
          `If a splash of food, sauce or cleaning solution gets in your eye, rinse it as your workplace directs. That’s not a job for a lubricating drop, and anything that still hurts or blurs needs an eye doctor or urgent care.`,
        ],
      },
      { h: 'Ballrooms and banquet halls' },
      {
        p: `Large event rooms have ventilation sized for a crowd. Before guests arrive, the system may be blasting to bring the room to temperature, and that air is often dry, especially in a heated winter ballroom. Then the room fills with people, candles and warm dishes. Standing at a post near the doors or under a ceiling diffuser puts a steady stream of air across your face. Notice where the air hits and, when your station allows, stand a few feet out of it. [Dry eyes at a holiday party](/guides/dry-eyes-at-a-holiday-party) describes the same rooms from a guest’s side.`,
      },
      { h: 'Outdoor events and tent work' },
      {
        p: `Weddings, corporate picnics and tailgate catering put you outside, often all afternoon. Sun, wind, and dust from a field or a gravel lot all reach your eyes while your hands are full of trays. In cold weather, a tent with propane heaters adds hot, dry air. Sunglasses help during setup and teardown when guests aren’t present, and wraparound frames block more wind. Keep heaters pointed at the floor and stand beside them rather than in front of them.`,
      },
      { h: 'Holiday party season' },
      {
        p: `December is the busiest month for many catering crews, with office parties, open houses and year-end banquets stacked into a few weeks. Long hours and short sleep leave eyes feeling drier. A few things help when the calendar is packed:`,
      },
      {
        list: [
          `Use your drops at the start of a shift, at a meal break and when you get home, rather than trying to find time mid-service.`,
          `Keep the bottle in a pocket of your own clothes, not in a shared supply bin or a van that sits in a cold lot.`,
          `On the drive between venues, point the van’s vents at your chest or the windshield.`,
          `On a day off, rest your eyes from screens too; a long scroll is more staring.`,
        ],
      },
      { h: 'Using drops on the job' },
      {
        p: `Wash your hands first, every time. Catering hands have touched raw food, cleaning chemicals and fuel cans, and none of those belong in your eye. Step into a back hallway or the staff area, tilt your head back, and keep the tip from touching anything: {tip}. [Dry eyes for line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs) covers the kitchen side of food service, and [dry eyes for bartenders and servers](/guides/dry-eyes-for-bartenders-and-servers) the restaurant floor.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel’s Uses: {uses}. Its directions: {directions}. Storage: {storage}. The label also says: {warnings}. The full panel is on our [Drug Facts page](/drug-facts). It doesn’t give directions for contact lenses or for using other drops alongside it; ask an eye doctor or pharmacist.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes keep bothering you after the season ends, don’t keep pushing through. The label is specific about when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers what shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn when I work a buffet?',
        a: `Lifting chafing dish lids sends steam and hot air up toward your face, and the fuel heat below keeps warm air rising. Lift lids away from you and step back from the line between refills.`,
      },
      {
        q: 'Can catering staff use eye drops during an event?',
        a: `Yes, on a break and in a staff area, after washing your hands. Keep the bottle in your own pocket and the tip away from every surface.`,
      },
      {
        q: 'Why are my eyes dry after working a banquet?',
        a: `Banquet halls run strong heating or cooling for large crowds, and standing under a diffuser puts dry air across your face for hours. Long shifts and late nights add to it.`,
      },
      {
        q: 'Do propane heaters in a party tent dry out your eyes?',
        a: `They warm the air and add moving heat, which speeds evaporation from the tear film. Stand to the side of the heater, not in front of it, and keep it aimed low.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-close-friend',
    title: 'Christmas gifts for a close friend',
    description:
      'Gift ideas for a close friend whose eyes feel dry from screens, heat or long days: practical, personal picks, how to ship them, and how to give them kindly.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `A good Christmas gift for a close friend whose eyes often feel dry is something that makes their ordinary days more comfortable: a bedroom humidifier, wraparound sunglasses, a warm reading lamp, an experience that gets them away from screens, or a bottle of preservative-free lubricating eye drops tucked in with something personal. Pick from what you already know about their routine, and give it as care, not as a comment.`,
      },
      { h: 'Start with what you know about their days' },
      {
        p: `You know this person better than any gift list does. Think about where their eyes get a hard time. Do they work at a screen until late? Commute by bike in the cold? Live in an apartment where the radiator runs hot and nobody can turn it down? Spend weekends on the water, on a ski hill or on long drives? The right gift answers one of those situations rather than the idea of dry eyes in general. A friend who’s mentioned that their eyes feel scratchy every afternoon at work has given you a clue; a friend who hasn’t might rather get something else entirely.`,
      },
      { h: 'Gifts for a friend who lives on screens' },
      {
        list: [
          `A monitor stand or riser that lets them set the screen slightly below eye level. Looking a little down lets the eyelids cover more of the eye.`,
          `A warm desk lamp or a bias light for behind the monitor, so the screen isn’t the only bright thing in a dark room.`,
          `A good paperback, a puzzle or a board game: something that pulls their eyes off a screen in the evening.`,
          `An experience: a hike, a concert, a cooking class, a day out together. Time away from screens is the gift.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why long screen sessions slow blinking, if you want a sense of why these help.`,
      },
      { h: 'Gifts for a friend who’s always outside' },
      {
        list: [
          `Wraparound sunglasses that block wind at the sides as well as glare. Fit matters, so a gift receipt helps.`,
          `A soft, warm scarf or neck gaiter for winter walks and rides.`,
          `A brimmed hat for sun and drizzle.`,
          `For skiers or riders, a pair of goggles in their size.`,
        ],
      },
      { h: 'Gifts for a friend in a dry, heated home' },
      {
        list: [
          `A small cool-mist humidifier for the bedroom, with a note that it needs regular cleaning.`,
          `A heated throw or a heavier blanket, so they can turn the thermostat down at night.`,
          `A simple indoor thermometer and humidity gauge, so they can see what their rooms are doing.`,
          `Cozy socks and slippers, for the same reason: warmth without a hotter, drier room.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers where to put one in a room.`,
      },
      { h: 'Adding eye drops to a friend’s gift' },
      {
        p: `A bottle of eye drops on its own can read as a hint. Tucked into a larger gift, such as a reading lamp and a novel, a scarf and a thermos for winter walks, or a humidifier and a warm throw, it reads as part of a thoughtful bundle. Quell is a preservative-free lubricating eye drop in a {size} bottle, designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}.`,
      },
      {
        p: `Two label notes matter before you buy. The panel cautions: {warnings}. If your friend has either allergy, choose another gift. And the drops are naturally milky in color: {appearance} If you’d like to see everything on the panel first, it’s on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Shipping it to your friend' },
      {
        p: `You can check out as a guest and put your friend’s address in the shipping fields, so the box goes straight to them while the confirmation and tracking come to your email. Shipping is {shipping}, and an order of {freeBottles} or more bottles ships free, which makes it easy to keep one for yourself. We ship within the US only and don’t promise an arrival date, so order early in December. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through the steps, and [ordering early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) covers timing.`,
      },
      { h: 'If the gift isn’t right' },
      {
        p: `Friends are honest with each other, which is part of the point. If your friend would rather not use the drops, an unopened bottle can be refunded within {returnDays} days of delivery, without sending it back. Because you placed the order, you’d be the one to call {phone} with the order number. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) has more, and the full list of holiday guides is on the [gifts and holidays page](/guides/topic/seasonal).`,
      },
      { h: 'A word about health' },
      {
        p: `A gift isn’t a substitute for an exam. If your friend has mentioned eye pain, vision changes or symptoms that keep coming back, the kindest thing may be encouraging them to see an eye doctor. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth taking seriously.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a close friend for Christmas who has everything?',
        a: `Something that fits their routine rather than their shelves: an experience together, a warm reading lamp for screen-free evenings, or a comfort bundle for winter with a scarf, a humidifier or a blanket.`,
      },
      {
        q: 'Is it weird to give a friend eye drops for Christmas?',
        a: `On their own, they can come across as a hint. As part of a thoughtful bundle for a friend who has mentioned dry, tired eyes, they read as practical care.`,
      },
      {
        q: 'Can I ship a Christmas gift directly to my friend’s house?',
        a: `Yes. Enter your friend’s address in the shipping fields at checkout; the confirmation and tracking come to your email. Orders ship within the US only, and no arrival date is promised.`,
      },
      {
        q: 'What are good Christmas gifts for a friend who works at a computer?',
        a: `A monitor riser, a desk lamp or bias light, a paperback or puzzle for screen-free evenings, or an outing together. Each one gives their eyes a break from the screen.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-on-a-long-airport-layover',
    title: 'Dry eyes on a long airport layover',
    description:
      'Hours in terminal air, a phone in your hand and a nap in a gate chair can leave eyes dry before the next flight. What helps on a long layover.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `A long airport layover dries your eyes because it extends the same conditions as the flight: climate-controlled terminal air, hours of staring at a phone or departure screens, and dozing upright in a chair. To ease it, sit away from vents, put the phone down and walk, use your drops in a restroom with clean hands, and keep the bottle in your personal item. TSA allows eye drops in carry-ons in containers of 3.4 ounces or less.`,
      },
      { h: 'Why layovers leave eyes dry' },
      {
        p: `By the time you land for a connection, your eyes have usually spent hours in cabin air, which is dry. A layover doesn’t give them much of a rest. Terminals are huge buildings with heating and cooling running constantly, and their air moves through large ceiling vents and along concourses. Add bright lighting, a phone you’re checking for gate changes, and the fatigue of an early start or a late arrival, and it’s easy to get on the second flight with eyes that already feel gritty. [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) covers the time in the air.`,
      },
      { h: 'Finding a better spot in the terminal' },
      {
        list: [
          `Look up before you sit. If a ceiling vent sits directly above a row of seats, choose another row.`,
          `Sit away from the jet bridge doors, where air rushes in and out with every boarding.`,
          `Avoid the seats right next to a heating unit or a floor-level blower along the windows.`,
          `A quieter gate a few doors down from yours is often less crowded and calmer.`,
        ],
      },
      { h: 'Screens, gate boards and blinking' },
      {
        p: `A layover is a lot of looking at screens: the phone for gate updates and messages, a laptop for work, the departure board for delays. Each one slows your blink rate. Set a timer for every 20 minutes or so, look out the windows at the farthest thing you can see, and blink fully a few times. A walk to the far end of the concourse and back gets your eyes off the screen and stretches your legs at once.`,
      },
      { h: 'Napping in a gate chair' },
      {
        p: `A short nap can help on a long connection, but a gate chair isn’t a bed. Your head tilts back toward the ceiling, often under a vent, and the terminal’s air flows across your face while you sleep. If you nap, put a hood up or drape a scarf loosely over the top of your head to break the airflow, or use a sleep mask. Set an alarm well ahead of boarding. When you wake up, give your eyes a minute of slow blinking before you pick up your phone.`,
      },
      { h: 'TSA and your eye drops' },
      {
        p: `TSA’s liquids rule allows travel-size liquids in carry-on bags in containers of 3.4 ounces (100 milliliters) or less, packed in a quart-size bag. A bottle of Quell holds {size}, well under that limit. TSA also lists medications as an exception to the liquids rule. If your bag is screened again at a connection, keep the bottle where you can reach it easily. [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) has the details.`,
      },
      {
        p: `Keep the bottle in your personal item, not a checked bag. If a connection becomes a long delay or an unplanned night, your checked bag may be out of reach, and you’ll want your drops with you.`,
      },
      { h: 'Using drops in a terminal' },
      {
        list: [
          `Wash your hands first. Airport surfaces are touched by thousands of people a day.`,
          `A restroom mirror makes it easier to aim. Tilt your head back, pull down your lower lid and let one drop fall.`,
          `Follow the label’s tip rule: {tip}. Don’t set the open bottle on the counter.`,
          `Keep to the label’s directions, even if the travel day is long: {directions}.`,
        ],
      },
      {
        p: `If you’re crossing time zones, spacing three doses can get confusing. A simple rule is to keep them spread across your waking hours wherever you are, such as one before the first flight, one during the layover and one in the evening at your destination.`,
      },
      { h: 'Holiday travel days' },
      {
        p: `Thanksgiving and Christmas trips often mean crowded terminals, longer security lines and delays. Pack your drops so you can reach them, give yourself time to find a calmer spot, and plan for a connection to run long. [Flying home for Christmas with eye drops](/guides/flying-home-for-christmas-with-eye-drops) covers the rest of a holiday trip, and the full list is under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'What the label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. The storage line is {storage}. Checked bags can sit in cold or hot holds and on ramps, which is one more reason to carry the bottle in your personal item. The label doesn’t give directions for contact lenses or for other drops; ask an eye doctor or pharmacist before your trip. See the full [Drug Facts](/drug-facts).`,
      },
      { h: 'When it’s more than travel dryness' },
      {
        p: `Travel dryness usually eases after a night in normal air. If it doesn’t, or if something feels wrong, the label says when to stop: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why are airport terminals so dry?',
        a: `Terminals are large buildings with heating and cooling running all the time, moving conditioned air through big vents. That air tends to be dry, and hours in it after a flight add up.`,
      },
      {
        q: 'Can I use eye drops during a layover?',
        a: `Yes. Wash your hands, use a restroom mirror and keep the tip from touching anything. Follow the label’s directions for how often to use them.`,
      },
      {
        q: 'Should eye drops go in my carry-on or checked bag on a connecting flight?',
        a: `Your carry-on or personal item. TSA allows eye drops in carry-ons at 3.4 ounces or less, and if a connection runs long you’ll still have them with you.`,
      },
      {
        q: 'How do I keep my eyes from drying out while napping at the airport?',
        a: `Pick a seat that isn’t under a vent, and put up a hood or wear a sleep mask to block the airflow. Blink slowly for a minute after you wake up.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-waiting-in-a-parked-car-with-the-heat-on',
    title: 'Dry eyes waiting in a parked car with the heat on',
    description:
      'School pickup lines, airport cell phone lots and warming up the car all mean sitting in heater air while you stare at a phone. How to spare your eyes.',
    category: 'seasonal',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Waiting in a parked car with the heat on dries your eyes because the dash vents blow warm, dry air at face height while you sit still and stare at a phone. A pickup line or an airport cell phone lot can stretch that into a long wait. Switch the heat to the floor setting, lower the fan, use the heated seat instead, look up from the screen, and keep your drops in a pocket rather than the glove box.`,
      },
      { h: 'Why waiting is worse than driving' },
      {
        p: `When you drive, your eyes scan the road, the mirrors and the dashboard, and you shift position. When you wait, you sit still with a phone in your hand. Phones slow blinking, and the car’s heater keeps pushing warm, dry air into a small cabin. In a parked car, there’s often nothing else to do but scroll, so the stare goes on for the whole wait. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) covers vehicle air in general; this guide is about the parked part.`,
      },
      { h: 'Where winter waiting happens' },
      {
        list: [
          `School pickup lines, where you can sit in one spot for a long stretch.`,
          `Airport cell phone lots during holiday travel, waiting for a flight that keeps getting delayed.`,
          `Outside practice, rehearsal or a late shift, with the engine running to stay warm.`,
          `Warming the car up in the morning while you check email.`,
          `Waiting for a store to open or a curbside order during the holiday rush.`,
        ],
      },
      { h: 'Change where the heat goes' },
      {
        p: `Most cars let you send heat to the floor, the dash, the windshield or a mix. For waiting, the floor setting is the friendliest to your eyes: warm air rises from your feet and fills the cabin without blowing across your face. If you need the dash vents, close or turn the ones closest to you toward the passenger side or the window. Lower the fan speed once the cabin has warmed up; the air still holds its heat with less movement.`,
      },
      {
        list: [
          `If your car has heated seats or a heated steering wheel, use them and turn the fan down. They warm you without moving air.`,
          `A blanket kept in the back seat does the same job for free.`,
          `Crack a window a little if the cabin gets stuffy, then close it when you’re comfortable.`,
          `If the windshield fogs, use defrost briefly, then switch back to floor heat. [Dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) covers defrost on the road.`,
        ],
      },
      { h: 'The phone problem' },
      {
        p: `A parked car is where many people catch up on messages, news and games. It’s the same staring that dries eyes at a desk, in an even smaller, warmer space. A few ways to break it up:`,
      },
      {
        list: [
          `Look out the windshield at the farthest thing you can see every few minutes.`,
          `Listen to a podcast or an audiobook instead of reading.`,
          `Close your eyes for a minute and let your lids rest.`,
          `Hold the phone a little lower so you’re looking slightly down at it, which keeps more of each eye covered.`,
        ],
      },
      { h: 'A parked car is a good place for drops' },
      {
        p: `If you use eye drops, a parked car is one of the easier places to put them in: you’re sitting, your hands are free, and you’re not about to drive in the next few seconds. Wash or sanitize your hands first, tilt your head back against the headrest, and follow the label’s tip rule: {tip}. Never put in drops while the car is moving. If your vision blurs for a moment afterward, wait until it’s clear before pulling out of the line.`,
      },
      { h: 'Don’t store the bottle in the car' },
      {
        p: `The label’s storage line is {storage}. A car parked for a winter night in a driveway or a lot can go far below that, and in summer a closed car gets far hotter. The glove box and door pockets aren’t places to keep your drops; an inside coat pocket or a bag you bring indoors is. [Can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) has more, and our [winter guides](/guides/topic/seasonal) cover other cold-weather habits.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. Directions: {directions}. A wait in the car can be a good moment for one of those three doses, if the timing fits your day. See the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after you’ve fixed the heater and cut back on phone time, see an eye doctor. The label says when to stop using the drops: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry sitting in the car with the heater on?',
        a: `The dash vents blow warm, dry air at face height, and sitting still with a phone slows your blinking. Together they thin the tear film faster than driving does.`,
      },
      {
        q: 'What heater setting is easiest on dry eyes?',
        a: `The floor setting, with the fan turned down once the cabin is warm. Heated seats or a blanket let you stay comfortable without moving more air.`,
      },
      {
        q: 'Is it okay to put in eye drops while parked?',
        a: `Yes, a parked car is a good place for it. Clean your hands first, keep the tip off every surface, and wait for any brief blur to clear before you drive.`,
      },
      {
        q: 'How can I keep my eyes from drying out in a school pickup line?',
        a: `Switch the heat to the floor, lower the fan, and look up from your phone every few minutes. An audiobook or podcast makes the wait easier on your eyes than scrolling.`,
      },
    ],
  },
  {
    slug: 'got-a-quell-order-you-didnt-place',
    title: 'Got a Quell order you didn’t place?',
    description:
      'A box of eye drops arrived, or a charge showed up, and you don’t remember ordering. How to check who placed it, look it up and reach us.',
    category: 'returns',
    addedOn: '2026-11-23',
    body: [
      {
        p: `If a Quell order arrived or a charge appeared and you didn’t place it, first ask the people who share your address or your card: a partner, an adult child, a roommate, or a friend sending a gift. Then search your email for a confirmation, look up the order on our [order page](/orders) with its number and email, and call {phone} ({hours}) if it still doesn’t make sense.`,
      },
      { h: 'Start with the people around you' },
      {
        p: `Most surprise orders have a simple explanation. Quell is often bought for someone else: a spouse ordering for both of you, a grown child sending a bottle to a parent, a friend shipping a holiday gift. Before anything else, ask:`,
      },
      {
        list: [
          `Anyone who lives with you or uses your address for deliveries.`,
          `Anyone who has your card details, such as a partner on a shared account.`,
          `Family or friends who know your eyes have been bothering you, especially around birthdays and the holidays.`,
          `Yourself a few weeks ago. It’s easy to forget an order placed late at night or on a phone.`,
        ],
      },
      {
        p: `If it turns out to be a gift, the person who ordered it got the confirmation and tracking emails, not you, because those go to the email entered at checkout.`,
      },
      { h: 'Search your email' },
      {
        p: `If you placed the order, you received an order confirmation at the email you used at checkout. Search your inbox, spam and promotions folders for the brand name or the word “order.” The confirmation shows the order number, which you’ll need for everything else. If you didn’t get a confirmation, [Didn’t get an order confirmation email?](/guides/no-order-confirmation-email) explains where it might have gone. If you got an email that you think is fake, read [Is this eye drop order email real?](/guides/is-this-eye-drop-order-email-real) and don’t click its links.`,
      },
      { h: 'Look up the order' },
      {
        p: `Our [order page](/orders) looks up an order by its order number and the email used at checkout; both are on the confirmation. If you have an account, you can also sign in to see your orders. If the lookup shows an order, you’ll see its status, which can tell you whether it’s the box on your porch. Checkout is open to guests, so an order placed by someone else won’t appear in your account.`,
      },
      { h: 'A charge you don’t recognize' },
      {
        p: `If you see a charge on your card but no box has arrived and no one in your household ordered, call us at {phone} ({hours}). We can look into it with you. Our [terms](/terms) say you authorize the charge when you submit an order. If you think your card was used without your permission, also contact your card issuer, which is the right place to report unauthorized use. [When is my card charged?](/guides/when-is-my-card-charged) explains the timing of a normal order.`,
      },
      { h: 'What happens to the bottles' },
      {
        p: `If the order was placed by mistake and the bottles are unopened, our refund policy covers them: {returns}. The [terms](/terms) put it precisely: an unopened bottle can be refunded within {returnDays} days of delivery, and you don’t send it back. Opened bottles can’t be refunded. If the box arrived damaged, wrong or with a broken seal, it can be replaced within the same window.`,
      },
      {
        list: [
          `Don’t open a bottle you might want refunded.`,
          `Have the order number ready when you call.`,
          `If someone else placed the order, they’re usually the one who should ask for the refund, since the payment came from them.`,
        ],
      },
      { h: 'Will it happen again?' },
      {
        p: `Quell has no subscription, so an order doesn’t repeat on its own. A customer may get one reminder email about reordering, but nothing ships unless someone places a new order. If the person ordering for you wants to keep doing so, the boxes will keep coming to your address; if not, nothing more arrives.`,
      },
      { h: 'If the drops were meant for you' },
      {
        p: `Sometimes the mystery order is a kindness: someone noticed you rubbing your eyes at the end of the day. Before you use the drops, read the label. Its Uses: {uses}. It cautions: {warnings}. And its directions read: {directions}. The full panel is on our [Drug Facts page](/drug-facts). For symptoms that go beyond everyday dryness, see an eye doctor.`,
      },
      { h: 'How to reach us' },
      {
        p: `Call {phone} during {hours}, or use the details on our [contact section](/about#contact). Have the order number if you can find it. We’re at {address}, and orders ship from Brentwood, Tennessee, to US addresses only.`,
      },
    ],
    faq: [
      {
        q: 'Why did I get eye drops I didn’t order?',
        a: `Usually someone ordered them for you: a partner, a grown child, a roommate or a friend sending a gift. The confirmation and tracking go to the email of the person who checked out, so ask around first.`,
      },
      {
        q: 'How do I find out who ordered a package sent to me?',
        a: `Ask the people who share your address or your card first. If the package has an order number, call {phone} during {hours}; you can also use our order page if you have the number and the checkout email.`,
      },
      {
        q: 'Can I get a refund on an eye drop order I didn’t place?',
        a: `Unopened bottles can be refunded within {returnDays} days of delivery under our terms, and you don’t send them back. Opened bottles can’t be refunded. Call {phone} with the order number.`,
      },
      {
        q: 'Will Quell keep sending eye drops I didn’t sign up for?',
        a: `No. There’s no subscription, so nothing ships unless someone places a new order. A customer may get one reorder reminder email, but no automatic shipments.`,
      },
    ],
  },
  {
    slug: 'oil-based-eye-drops-what-that-means',
    title: 'Oil-based eye drops: what that means',
    description:
      'What “oil-based” means for an eye drop, which ingredients in Quell are oils, why the drops look milky, and what the label does and doesn’t say.',
    category: 'formula',
    addedOn: '2026-11-23',
    body: [
      {
        p: `“Oil-based” eye drops are lubricating drops that include an oil among their ingredients, usually to support the tear film’s outer oil layer, which slows evaporation of the watery layer beneath it. The phrase doesn’t mean the drop is mostly oil. Quell, for example, lists {mineralOil} as an active ingredient and emu oil as an inactive one, alongside sterile water, which is why the drops look milky.`,
      },
      { h: 'Where the phrase comes from' },
      {
        p: `“Oil-based” isn’t a term on Quell’s Drug Facts panel. It’s shopper shorthand for drops that contain an oil, as opposed to drops whose lubricants all dissolve in water. You’ll see it in reviews, search results and conversations at the pharmacy counter. Because it’s informal, it can mean slightly different things to different people. The reliable way to know what a drop contains is to read its ingredient list. For Quell, the active ingredients are {actives}, and the inactive ingredients are {inactives}.`,
      },
      { h: 'Which ingredients in Quell are oils' },
      {
        list: [
          `{mineralOil}, one of the three active ingredients. The panel lists its Purpose as Emollient; the other two actives, {glycerol} and {polysorbate}, are listed as Lubricants.`,
          `Emu oil, an inactive ingredient. The carton’s emu oil panel describes it this way: {emuOil}`,
        ],
      },
      {
        p: `The other ingredients aren’t oils. Sterile water is on the list, and so are salt, honey and plant ingredients. [Quell eye drops ingredients: the full list](/guides/quell-eye-drops-ingredients-list) goes through every one.`,
      },
      { h: 'Why add oil to an eye drop?' },
      {
        p: `The tear film has three layers: a mucus layer against the eye, a watery layer in the middle and a thin oil layer on the outside. The oil layer acts like a lid on the water, slowing how quickly it evaporates between blinks. When that outer layer is thin, the water beneath it evaporates faster, especially in dry, windy, heated or air-conditioned air. Quell’s carton shows this with a before-and-after picture. Before: {oilBefore}. After: {oilAfter}.`,
      },
      {
        p: `That’s the idea behind drops with oil in them: Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. [The tear film’s oil layer, explained](/guides/the-tear-films-oil-layer) goes deeper into how that layer works.`,
      },
      { h: 'Why oil-containing drops look milky' },
      {
        p: `Oil and water don’t dissolve into each other. When tiny droplets of oil are spread through water, light scatters off them and the mixture looks cloudy, the way milk does. A drop that combines oil and water is called an emulsion, and an emulsion is usually milky rather than clear. Quell’s label says so directly: {milky}. The site adds: {appearance} [What are emulsion eye drops?](/guides/what-are-emulsion-eye-drops) explains the chemistry in plain terms.`,
      },
      { h: 'What it may feel like' },
      {
        p: `Some people notice a brief blur right after an oil-containing drop, while the drop spreads across the eye. Blinking a few times usually helps it settle. Some also notice a light film along the lid margins. If either bothers you, mention it to your eye doctor, and give the drop a moment before you drive or read fine print. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) and [Why do my eyelids feel sticky after eye drops?](/guides/why-do-my-eyelids-feel-sticky-after-eye-drops) cover both. If blurring doesn’t clear, that’s a different matter; see the last section below.`,
      },
      { h: 'What “oil-based” doesn’t tell you' },
      {
        list: [
          `It doesn’t tell you how much oil is in the drop. Quell’s label gives each active ingredient’s strength on the panel; see the [Drug Facts page](/drug-facts).`,
          `It doesn’t tell you which oil. Mineral oils and animal or plant oils are different ingredients, and allergies differ too. Quell’s panel cautions: {warnings}.`,
          `It doesn’t tell you whether the drop is preservative-free. Quell is; that’s a separate line on the label. [What does preservative-free mean on eye drops?](/guides/what-does-preservative-free-mean) explains the term.`,
          `It doesn’t tell you how to use it. For Quell, the directions are: {directions}.`,
        ],
      },
      { h: 'Storing a drop with oil in it' },
      {
        p: `The panel’s storage line is {storage}. Keep the bottle capped and out of hot cars, cold mailboxes and sunny windowsills. If the drops ever look different from usual, the label is clear: {doNotUse}. Their normal milky brown color is not a change; a sudden different color is.`,
      },
      { h: 'Questions for your eye doctor' },
      {
        p: `If you’re choosing between drops and wondering whether one with oil suits you, an eye doctor can look at your eyes and tell you more than any label term. The label doesn’t give directions for contact lenses or for using other drops at the same time, so ask about those too. And if you have eye pain or vision changes, the label says to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What does oil-based mean in eye drops?',
        a: `It means the drop includes an oil among its ingredients, usually to support the tear film’s outer oil layer. It doesn’t mean the drop is mostly oil.`,
      },
      {
        q: 'Which ingredients in Quell are oils?',
        a: `Light mineral oil, one of its three active ingredients, and emu oil, one of its inactive ingredients. The rest, including sterile water, are not oils.`,
      },
      {
        q: 'Is Quell an oil-based eye drop?',
        a: `It contains oils, so people often describe it that way, but its label doesn’t use the term. Its ingredient list pairs those oils with sterile water, and its label describes a milky brown solution.`,
      },
      {
        q: 'Do oil eye drops need to be stored differently?',
        a: `Follow the label’s storage line. For Quell it reads: {storage}. Keep the bottle capped and out of hot cars and cold mailboxes.`,
      },
    ],
  },
  {
    slug: 'do-eye-drops-help-with-blurry-vision',
    title: 'Do eye drops help with blurry vision?',
    description:
      'Lubricating eye drops are labeled for dryness, not blur. When blurry vision is part of tired, dry eyes, what drops can and can’t do, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Lubricating eye drops aren’t made to fix blurry vision. Quell’s label lists its Uses as: {uses}. It doesn’t mention vision at all. If things look a little hazy at the end of a long screen day and clear when you blink, rest and a lubricating drop may make your eyes more comfortable. Blur that doesn’t clear, or a change in your vision, belongs with an eye doctor.`,
      },
      { h: 'What the label actually covers' },
      {
        p: `The place to start is the Drug Facts panel. Quell’s Uses read: {uses}. Nothing there promises sharper vision, and no lubricating drop should be bought for that reason. The panel’s stop-use section points the other way: {stopUse} In other words, vision changes are on the label as a reason to stop and ask a doctor, not as something the drop is for. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Blur that comes and goes with blinking' },
      {
        p: `Many people describe a soft, filmy haze late in the day, especially after hours at a screen or in heated or air-conditioned air. Each blink spreads a fresh layer of tears across the eye, and when you stare at a screen you blink less, so the surface has longer to dry between blinks. If the haze clears for a moment each time you blink fully, that pattern is worth mentioning to your eye doctor, and it’s also a sign your eyes need a break:`,
      },
      {
        list: [
          `Look away from the screen at something across the room for 20 seconds.`,
          `Blink slowly and completely several times, letting your lids fully close.`,
          `Move out of the path of a vent or fan blowing on your face.`,
          `Use a lubricating drop as its label directs, if dryness is part of what you feel: {directions}.`,
        ],
      },
      {
        p: `If comfort comes back but the haze doesn’t lift, don’t keep adding drops. The label’s directions set the number, and more drops won’t answer a vision question.`,
      },
      { h: 'Blur right after putting in a drop' },
      {
        p: `A different kind of blur happens for a moment just after a drop goes in, while it spreads across the eye. With a milky, oil-containing drop like Quell, which the label describes this way: {milky}, that moment can be more noticeable. A few blinks usually settle it. Wait until your vision is clear before driving or reading fine print. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) covers this in detail.`,
      },
      { h: 'Blurry vision drops don’t address' },
      {
        p: `Plenty of blurry vision has nothing to do with dryness. Needing glasses for the first time, an old prescription, eyes that have trouble focusing up close as the years go by, and many medical causes can all blur vision, and none of them is something a lubricating drop is labeled for. Some signs mean you shouldn’t wait for an ordinary appointment:`,
      },
      {
        list: [
          `Blur that comes on suddenly, especially in one eye.`,
          `Blur with eye pain, a headache, flashes of light or a curtain over part of your view.`,
          `Blur after something hit or got into your eye.`,
          `Blur that doesn’t clear after rest and blinking.`,
        ],
      },
      {
        p: `Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists these and other warning signs. An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'How to describe it to your eye doctor' },
      {
        p: `Blur is easier to sort out when you can say exactly what happens. Before your visit, note a few things for a week or so:`,
      },
      {
        list: [
          `When it happens: morning, afternoon, at a screen, while driving at night.`,
          `Whether it clears with blinking, and for how long.`,
          `Whether it’s one eye or both.`,
          `Whether your eyes also feel dry, gritty or tired at the same time.`,
          `Any drops you’re using, and when you use them.`,
        ],
      },
      {
        p: `[Keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) shows an easy format, and the [self-check](/self-check) can help you put the dryness side into words. It’s not a diagnosis.`,
      },
      { h: 'Screens, glasses and the end of the day' },
      {
        p: `If your blur shows up mostly at a computer, two quick checks help. First, the screen: is it too close, too bright or set above your eye line? A screen slightly below eye level lets your lids cover more of your eye. Second, your glasses: if you wear them, when were they last checked? A prescription that’s a little off makes you squint and stare harder. [Screens and your tear film](/guides/screens-and-your-tear-film) has more on screen setup.`,
      },
      { h: 'The short answer' },
      {
        p: `Eye drops like Quell are for dryness. If dryness is making your eyes uncomfortable and a little hazy by evening, a lubricating drop used as directed, plus fuller blinks and fewer drafts, may help with how your eyes feel. If your vision itself is blurry, see an eye doctor; that’s what the label tells you to do.`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops fix blurry vision?',
        a: `Lubricating drops aren’t labeled for blurry vision. Quell’s label covers dryness and irritation, and lists changes in vision as a reason to stop and ask a doctor.`,
      },
      {
        q: 'Why does my vision get blurry when my eyes feel dry?',
        a: `Many people notice a haze late in the day at screens that clears when they blink fully. Tell your eye doctor about that pattern, and take regular screen breaks in the meantime.`,
      },
      {
        q: 'Should I use more eye drops if my vision is blurry?',
        a: `No. Follow the label’s directions for how often to use them. If blur doesn’t clear with blinking and rest, see an eye doctor rather than adding drops.`,
      },
      {
        q: 'When is blurry vision an emergency?',
        a: `Sudden blur, blur in one eye, blur with eye pain, flashes or a shadow over part of your view, or blur after an injury needs prompt care from an eye doctor or emergency room.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-some-days-and-not-others',
    title: 'Why do my eyes feel dry some days and not others?',
    description:
      'Eyes that feel fine Monday and gritty Tuesday usually follow the air, the screens and the sleep. How to spot your pattern, and when it’s time to ask a doctor.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eyes that feel dry on some days and fine on others are usually following the conditions around them: drier or windier weather, the heat or air conditioning running, a long screen day, a short night, a flight or a room with a vent over your seat. Tracking those for a week or two often shows the pattern. If dryness keeps returning even on easy days, or you have pain or vision changes, see an eye doctor.`,
      },
      { h: 'Your tear film reacts to the day' },
      {
        p: `The tear film is a thin layer of oil, water and mucus that each blink spreads across the eye. How long it stays smooth between blinks depends on two things: how often you blink, and how fast the water evaporates. Both change from day to day. A Tuesday spent at a screen under an air-conditioning vent and a Saturday spent outside on a calm, mild day are very different for your eyes, even if you are exactly the same person.`,
      },
      { h: 'Weather and the air indoors' },
      {
        list: [
          `Wind: a breezy day speeds evaporation from the eye’s surface, even when it isn’t cold.`,
          `Cold snaps: when the heat comes on, indoor air gets drier. The first few cold days of fall often feel worse than the rest of winter, because nothing has been adjusted yet.`,
          `Hot spells: air conditioning running hard pulls moisture from indoor air.`,
          `Low-humidity days: a forecast showing low relative humidity is often a hint. [What humidity is good for dry eyes?](/guides/what-humidity-is-good-for-dry-eyes) explains the numbers.`,
        ],
      },
      { h: 'Screen-heavy days' },
      {
        p: `People blink less while they concentrate on a screen, and they often blink only partway. A day of deadlines, video calls or a long drive staring at the road can leave eyes noticeably drier than a day of moving around. If your bad days line up with your busiest workdays, that’s a strong clue. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the effect, and simple breaks every 20 minutes or so help.`,
      },
      { h: 'Sleep, late nights and early mornings' },
      {
        p: `Short nights tend to be followed by eyes that feel heavier and drier. So do very early starts and late evenings on a phone in bed. If your dry days follow nights of poor sleep, [Dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) has more.`,
      },
      { h: 'Where you sat, and where you slept' },
      {
        p: `Small details of a particular day matter more than people expect. A meeting room with a vent over your chair, a restaurant table next to a heater, a hotel room with the fan blowing on the pillow, a car with the dash vents aimed at your face: each one can dry your eyes for hours. If a dry day seems random, think back to where you spent the longest stretches and what the air was doing there.`,
      },
      { h: 'How to find your pattern' },
      {
        p: `A short log makes the pattern easier to see than memory does. For two weeks, write a line at the end of each day:`,
      },
      {
        list: [
          `How your eyes felt, on a simple scale from fine to very dry.`,
          `The weather: windy, cold, hot, humid.`,
          `Whether the heat or air conditioning was running.`,
          `Roughly how many hours you spent at screens.`,
          `How you slept the night before.`,
          `Anything unusual: a flight, a long drive, a smoky room, a new place.`,
        ],
      },
      {
        p: `[Keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) has a format you can copy. Bring it to your next eye appointment; it gives your doctor something concrete.`,
      },
      { h: 'Changing what you can' },
      {
        p: `Once you see the pattern, you can plan around it. On a screen-heavy day, schedule breaks. On a windy or cold day, wear wraparound glasses outside. When the heat comes on, run a bedroom humidifier and move furniture out of a register’s path. Before a flight, pack your drops in your carry-on. Small adjustments on the days you can predict make the bad days less frequent.`,
      },
      { h: 'Eye drops on good days and bad days' },
      {
        p: `If you use a lubricating drop, follow the label rather than the mood of the day. Quell’s directions are: {directions}. Its Uses are: {uses}. The label doesn’t say to double up on a bad day, so don’t; on a busy day, the three doses can be timed to fall before and during the hardest stretches. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. See the full [Drug Facts](/drug-facts).`,
      },
      { h: 'When a pattern needs a doctor' },
      {
        p: `Day-to-day variation is common. Dryness that’s there every day regardless of the weather, the screens or the sleep is a different thing, and so is one eye that’s much worse than the other. The label says when to stop: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry on some days but not others?',
        a: `The conditions around you change: wind, heating, air conditioning, screen time, sleep and travel all affect how fast the tear film dries. Keeping a short daily log often reveals which matters most for you.`,
      },
      {
        q: 'Can the weather make dry eyes worse on certain days?',
        a: `Yes. Windy, cold or low-humidity days speed evaporation from the eye, and cold snaps also mean the heat runs indoors, which dries the air further.`,
      },
      {
        q: 'Should I use more eye drops on bad days?',
        a: `Follow the label’s directions rather than adding doses. You can time the doses you take to land before and during the hardest parts of the day.`,
      },
      {
        q: 'When should I see a doctor about eyes that feel dry on and off?',
        a: `When dryness is there most days regardless of conditions, when one eye is much worse, or when you have pain, vision changes or irritation that continues. An eye doctor can find the cause.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-when-i-wear-makeup',
    title: 'Why do my eyes feel dry when I wear makeup?',
    description:
      'Flakes, powder and liner near the lash line, long makeup days and rushed removal can all leave eyes feeling dry. What to check, and what the label covers.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `Eyes can feel drier on makeup days for a few reasons: flakes of mascara, shadow or powder can fall into the eye, liner applied right along the lash line sits next to the tiny glands that make the tear film’s oil layer, and makeup days are often long days at screens or events. Apply lighter near the lashes, remove everything gently at night, and see an eye doctor if irritation continues.`,
      },
      { h: 'How makeup and the tear film meet' },
      {
        p: `The tear film has three layers, and its outer oil layer comes from small glands along the edges of your eyelids, right where the lashes grow. That oil slows evaporation from the watery layer below. Eye makeup is applied in the same small area: liner along the lash line, mascara on the lashes, shadow on the lid. Anything that sits on that edge, or falls from it into the eye, is close to where the tear film is made and spread. [What is meibum?](/guides/what-is-meibum) explains the oil and the glands.`,
      },
      { h: 'Flakes, powders and glitter' },
      {
        p: `Through the day, small amounts of mascara, powder shadow, setting powder or glitter can flake off and land on the eye’s surface. Each blink moves those particles across the eye, and they can make it feel gritty or dry. A few ways to reduce it:`,
      },
      {
        list: [
          `Tap off excess powder from the brush before applying shadow.`,
          `Apply setting powder with your eyes closed, and wait a moment before opening them.`,
          `If you notice a lot of flaking from a mascara, try a different formula.`,
          `Skip loose glitter near the eyes on days your eyes already feel dry.`,
        ],
      },
      { h: 'Liner along the lash line' },
      {
        p: `Lining the inner rim of the eyelid, inside the lashes, puts product right next to the openings that release the tear film’s oil. Some people find their eyes feel drier on days they line the inner rim. If that sounds familiar, try lining just outside the lashes instead and see whether it makes a difference. Your eye doctor can tell you more about your own lids.`,
      },
      { h: 'Makeup days are often long days' },
      {
        p: `It’s worth asking whether the makeup is the cause or a coincidence. Many people wear their fullest makeup on their longest days: a full day of meetings and screens, a wedding, a holiday party, a performance, a night out. Those days also bring slower blinking, dry indoor air, bright lights and late nights. If your eyes feel dry on long days with or without makeup, the day itself may be the bigger factor. [Why do my eyes feel dry some days and not others?](/guides/why-do-my-eyes-feel-dry-some-days-and-not-others) helps you sort that out.`,
      },
      { h: 'Taking it off at night' },
      {
        list: [
          `Remove eye makeup every night, before bed. Our guide [Is it bad to sleep with mascara on?](/guides/is-it-bad-to-sleep-with-mascara-on) explains why.`,
          `Be gentle. Hold a soaked pad against your closed lid for a few seconds, then wipe outward instead of scrubbing.`,
          `Make sure the remover is meant for the eye area.`,
          `Rinse afterward, so remover residue doesn’t stay along the lash line.`,
        ],
      },
      { h: 'Old and shared makeup' },
      {
        p: `Eye products are used close to the eye every day, so keep them clean. Don’t share mascara, liner or eye pencils, and toss anything that has changed smell or texture. Sharpen pencils before use. If a product has ever been used while your eye was irritated, replacing it is the cautious choice.`,
      },
      { h: 'Where eye drops fit in' },
      {
        p: `The Quell label doesn’t mention makeup, so it doesn’t say whether drops go on before or after. Many people put drops in before applying eye makeup, so the drop doesn’t smudge anything, and give it a moment to settle. [Eye drops before or after makeup?](/guides/eye-drops-before-or-after-makeup) walks through the order. When you do use drops, keep the tip clean: {tip}.`,
      },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives its Uses as: {uses}. The directions read: {directions}. Its full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than dryness' },
      {
        p: `Stop using a product if your eyes sting, itch, swell or water every time you wear it, and tell your eye doctor what you used. The drop’s label also lists when to stop and call a doctor: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Can eye makeup make dry eyes worse?',
        a: `It can make eyes feel drier for some people, especially when flakes fall into the eye or liner is applied along the inner rim of the lid. Long makeup days at screens or events also play a part.`,
      },
      {
        q: 'Why do my eyes feel dry when I wear eyeliner?',
        a: `Liner on the inner rim sits right next to the small glands that release the tear film’s oil. Try lining just outside the lashes and see if it helps, and ask your eye doctor.`,
      },
      {
        q: 'Can mascara flakes cause dry, gritty eyes?',
        a: `Flakes that land on the eye are moved across it with every blink and can make it feel gritty or dry. A different formula or a lighter coat can help.`,
      },
      {
        q: 'Does Quell’s label say anything about eyeliner or mascara?',
        a: `No. The label doesn’t mention makeup. Use drops with clean hands, keep the tip off every surface, and ask your eye doctor about your routine.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-sitting-by-a-window',
    title: 'Why do my eyes feel dry sitting by a window?',
    description:
      'A heating register under the sill, a cool draft off winter glass and sun glare on your screen can all dry your eyes by a window. How to keep the seat.',
    category: 'choosing',
    addedOn: '2026-11-23',
    body: [
      {
        p: `A seat by a window can dry your eyes for a few reasons at once: heating registers and baseboard heaters are often installed right under windows, cool air can slide down cold glass in winter, and sun through the glass creates glare that makes you squint and stare at your screen. Moving a few feet, turning the desk sideways to the glass and redirecting the register usually helps more than you’d expect.`,
      },
      { h: 'The heater under the sill' },
      {
        p: `Look below the window. In many homes and offices, that’s where the heat comes from: a floor register, a baseboard heater, a radiator or a wall unit. Builders often put heat there to warm the coldest wall of the room. The result is a column of warm, dry air rising past the window, right where your chair or your reading nook sits. Heated, dry air speeds evaporation from the tear film, and when it rises past your face for hours, your eyes notice. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains why heated air feels so dry.`,
      },
      {
        list: [
          `If the register has louvers, angle them toward the glass rather than into the room at face height.`,
          `Move the chair or desk a couple of feet back from the wall, out of the rising air.`,
          `Keep heavy curtains from trapping the heat against your seat; open them during the day or tie them back.`,
          `Don’t block a baseboard heater or radiator completely with furniture; just sit beside the flow instead of in it.`,
        ],
      },
      { h: 'Cold glass and winter drafts' },
      {
        p: `On a cold day, a window is the coldest surface in the room. Many people feel a chilly draft near large windows in winter, either from air leaking around the frame or from air cooled by the glass and sinking toward the floor. A steady current of cool air across your face dries the eye’s surface the same way a breeze outside does. Older windows, single panes and frames that rattle tend to be the worst.`,
      },
      {
        list: [
          `Feel around the frame on a windy day; if you notice air coming in, weatherstripping or a window insulation kit may help.`,
          `Close blinds or curtains in the evening to block cold coming off the glass.`,
          `A high-backed chair turned slightly away from the window blocks some of the draft.`,
        ],
      },
      { h: 'Sun, glare and squinting' },
      {
        p: `Daylight is pleasant, but sun through a window can bounce off a monitor, a phone or the pages of a book. Glare makes you squint and lean in, and both go along with blinking less. Sun on your face also warms the skin around your eyes. In an office, the most common setup problem is a desk facing a window or with the window directly behind the screen.`,
      },
      {
        list: [
          `Turn the desk so the window is to your side, not in front of or behind the monitor.`,
          `Use blinds to soften direct sun at the times of day it hits your desk.`,
          `Lower the screen brightness when the sun moves away, so you’re not staring into a bright screen in a dim corner later.`,
          `Wear sunglasses on a sunny porch or in a sunroom if the light makes you squint.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why staring and squinting at a screen slows your blinks.`,
      },
      { h: 'Summer by the window' },
      {
        p: `In summer, the window may hold a window air conditioner, or the room’s supply vent may sit near it to cool the hottest wall. That puts a stream of cold, dry air right next to the seat. Air conditioning removes moisture as it cools, so the effect on your eyes is similar to winter heat, just colder. Point a window unit’s louvers away from where you sit and turn the fan down once the room is cool.`,
      },
      { h: 'In the car, on the train, on a plane' },
      {
        p: `The window seat on a plane or train is often next to a vent or a cold panel, and in a car the window is a source of drafts and sun. [Dry eyes on a long train ride](/guides/dry-eyes-on-a-long-train-ride) and [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) cover those trips; the same rules apply: block direct airflow, cut glare and blink fully.`,
      },
      { h: 'Where eye drops fit in' },
      {
        p: `Fixing the seat comes first, since a drop can’t keep up with a register blowing on you all afternoon. If your eyes still feel dry, a lubricating drop used as labeled can help. Quell’s Uses: {uses}. Its directions: {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. One caution for window seats: the label’s storage line is {storage}, and a sunny windowsill or a cold one in winter can go past it. Keep the bottle in a drawer or a bag, not on the sill. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it isn’t the window' },
      {
        p: `If you move away from the window and your eyes still feel dry, the window wasn’t the main cause. The label lists the signs to stop and ask a doctor: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry sitting next to a window in winter?',
        a: `Heat registers and baseboard heaters are often under windows, sending warm, dry air up past your seat. Cold glass and leaky frames can add a cool draft at the same time.`,
      },
      {
        q: 'Is it bad to have a desk facing a window?',
        a: `For your eyes, the glare can be a problem: sun behind or in front of the screen makes you squint and blink less. Turning the desk so the window is to the side usually helps.`,
      },
      {
        q: 'Can a drafty window make your eyes dry?',
        a: `A steady current of cool air across your face speeds evaporation from the eye, like a breeze outdoors. Sealing the frame or sitting out of the draft helps.`,
      },
      {
        q: 'Can I keep eye drops on a windowsill?',
        a: `It’s better not to. A sunny sill can get warm and a winter sill can get cold, and the label gives a storage range. A drawer or a bag is safer.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-an-office-closed-for-holidays',
    title: 'Shipping eye drops to an office closed for the holidays',
    description:
      'Ordering eye drops to your workplace in late December? If the office will be closed, a package may wait or be turned away. Ship to home instead.',
    category: 'shipping',
    addedOn: '2026-11-23',
    body: [
      {
        p: `If your office will be closed for the holidays, don’t ship eye drops there. With no one to accept a delivery, a package may sit at a locked door or loading dock, be held, or be sent back, and we can’t promise an arrival date that lands before the closure. Ship to your home or to wherever you’ll be over the break instead, and watch the tracking email.`,
      },
      { h: 'Why a closed office is a problem' },
      {
        p: `Office deliveries work because someone is there: a receptionist, a mailroom, a front desk. During a holiday closure, often the stretch between Christmas and New Year’s Day, there may be no one to accept a box. What happens next depends on the carrier and the building. The package might be left at a door, held for pickup, tried again later or returned to sender. None of those gets the drops to you quickly, and some leave the bottle outside in the cold. [Can I ship eye drops to my work address?](/guides/shipping-eye-drops-to-your-work-address) covers normal office deliveries.`,
      },
      { h: 'We can’t promise a delivery date' },
      {
        p: `Quell ships from Brentwood, Tennessee, and tracking arrives by email, but we don’t promise a delivery date. Holiday weeks are busy for every carrier. An order placed before a closure might arrive after everyone has left. That’s the main reason to choose a home address when the calendar is tight. [Ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) has more on timing.`,
      },
      { h: 'Temperature on a loading dock' },
      {
        p: `The label’s storage line is {storage}. A box left in an unheated vestibule, on a loading dock or at a locked door for several winter days can drop below that range. In warm climates, a sunny entry can go the other way. A home with someone around, or a covered porch you can check daily, is a better place for it.`,
      },
      { h: 'Choosing where to ship instead' },
      {
        list: [
          `Your home address, if you’ll be there during the break.`,
          `A family member’s address, if you’re traveling to see them. [Shipping Quell to a holiday address](/guides/shipping-to-a-holiday-address) covers this.`,
          `An apartment with a package room, if someone manages it during the holidays. Add the unit number.`,
          `Your office, only if you’re sure someone will be there to receive packages on the days it may arrive.`,
        ],
      },
      { h: 'If you already ordered to the office' },
      {
        p: `Check the tracking email first; it will show where the package is. If you need to ask about an order you’ve already placed, call {phone} during {hours} with the order number. Our [order page](/orders) can show the order’s status using the order number and the email you checked out with. If the package is returned to us, [Package returned to sender](/guides/eye-drop-package-returned-to-sender) explains what happens next.`,
      },
      { h: 'Ordering for coworkers or a team' },
      {
        p: `Some people order for several coworkers at once, such as for a gift exchange. If the office is closing, either order early enough to hand them out before the break or ship each one to the person’s home. Shipping is charged once per order: {shipping}, with free shipping on orders of {freeBottles} or more bottles. [Why shipping is charged once per order](/guides/why-shipping-is-charged-once-per-order) explains how that works.`,
      },
      { h: 'Running low over the break' },
      {
        p: `A spare is the simplest answer to a delivery stuck at a dark office. Keep an extra unopened bottle at home, and you won’t need to time an order around a closure. [Keeping spare bottles](/guides/keeping-spare-bottles) explains how to rotate them. Quell’s directions read: {directions}, so a single {size} bottle won’t stretch forever; plan your reorder before the holidays begin.`,
      },
      { h: 'Refunds and damaged packages' },
      {
        p: `If a package sat in the cold and you’re unsure about it, call us before opening it. Our policy is straightforward: {returns}. Unopened bottles can be refunded within {returnDays} days of delivery, and orders that arrive damaged, incorrect or with a broken seal can be replaced within the same window. If a bottle looks different from usual, the label says: {doNotUse}. See the full [Drug Facts](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What happens if a package is delivered to a closed office?',
        a: `It depends on the carrier and the building. It may be left at the door, held, tried again later or returned to sender. Shipping to a home address avoids the problem.`,
      },
      {
        q: 'Should I ship eye drops to work over Christmas?',
        a: `Only if someone will be there to receive packages. Many offices close between Christmas and New Year’s, and no arrival date is promised, so a home address is usually safer.`,
      },
      {
        q: 'Can eye drops sit on a cold loading dock?',
        a: `Not for long in winter. The label gives a storage range, and a box left for days in an unheated area can drop below it. Call {phone} if you’re unsure about a package.`,
      },
      {
        q: 'Can I ship eye drops to my family’s house for the holidays?',
        a: `Yes. Enter their address in the shipping fields at checkout; the tracking email still comes to you. Orders ship within the US only.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-a-college-student-on-winter-break',
    title: 'Shipping eye drops to a college student on winter break',
    description:
      'Campus mailrooms slow down or close over winter break. Where to ship eye drops for a college student who’s heading home, and when to order.',
    category: 'shipping',
    addedOn: '2026-11-23',
    body: [
      {
        p: `If a college student is leaving campus for winter break, ship their eye drops to wherever they’ll actually be: usually home, or their off-campus apartment if they’re staying. Campus mailrooms may close or hold packages during the break, and no arrival date is promised, so a box sent to a dorm in mid-December may sit there until January. Students 18 and older can order for themselves.`,
      },
      { h: 'Why the dorm address is a bad bet in December' },
      {
        p: `Most campuses empty out after finals. Residence halls often close for the break, and mailrooms may cut their hours or hold packages until students return. A box that arrives the week after a student leaves may wait weeks for pickup. [Shipping eye drops to a college dorm](/guides/shipping-eye-drops-to-a-college-dorm) covers how dorm mail works the rest of the year.`,
      },
      { h: 'Ship to where they’ll be' },
      {
        list: [
          `Home for the break: ship to the family address, and the student can open it when they arrive.`,
          `Staying near campus in an off-campus apartment: ship there, with the unit number.`,
          `Traveling or visiting relatives: ship to the relative’s address, or wait until they’re settled.`,
          `Staying in campus housing over break: check with the housing office whether mail is being delivered and held.`,
        ],
      },
      { h: 'Timing around finals and travel' },
      {
        p: `Finals week is a hard week for dry eyes: long nights of screens and reading, little sleep, heated libraries. If a student runs low then, an order shipped to campus may not arrive before they leave. Two simpler options: send a bottle in a care package earlier in the semester, or have them pack their current bottle and order the next one to the home address. [Dry eyes during finals week](/guides/dry-eyes-during-finals-week) has tips for the week itself.`,
      },
      { h: 'Who should place the order' },
      {
        p: `Buyers must be 18 or older, so a student who is 18 can order for themselves as a guest. A parent can also order and put the student’s name and address in the shipping fields. Either way, the confirmation and tracking emails go to the email entered at checkout. If a parent orders, it may help to forward the tracking email to the student so they know what’s coming. [Ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) explains the steps.`,
      },
      { h: 'Packing drops for the trip home' },
      {
        p: `Students flying home can carry their drops in a carry-on: TSA allows liquids in carry-on bags in containers of 3.4 ounces (100 milliliters) or less, and a bottle of Quell holds {size}. Driving home? Keep the bottle in a backpack in the cabin rather than the trunk. The label’s storage line is {storage}, and a car trunk in winter can go below it.`,
      },
      { h: 'Heading back to campus in January' },
      {
        p: `When the break ends, the same problem runs in reverse. A package ordered to the dorm in early January may arrive before the mailroom reopens or before the student is back. The simplest plan is to order to home in time for the student to pack it, or order to campus once they’re back and settled. Each order ships separately, and shipping is {shipping}, or free on orders of {freeBottles} or more bottles, which can cover a student’s spring semester supply in one box.`,
      },
      { h: 'What Quell is and what its label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Its directions: {directions}. The label doesn’t give directions for contact lenses, which many students wear; they should ask an eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Refunds and questions' },
      {
        p: `If the student ends up with an extra unopened bottle, it can be refunded within {returnDays} days of delivery, and nothing needs to be sent back. The person who placed the order should call {phone} during {hours} with the order number. If eye discomfort goes beyond everyday dryness, a doctor near home over the break is a good place to start; see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Should I ship a package to my college student’s dorm in December?',
        a: `Usually not. Many dorms and mailrooms close or hold packages over winter break, and no arrival date is promised. Ship to the address where the student will spend the break.`,
      },
      {
        q: 'Can I ship eye drops to my home for my college student?',
        a: `Yes. Put the student’s name and your home address in the shipping fields. The confirmation and tracking emails go to the email used at checkout.`,
      },
      {
        q: 'When should I order eye drops for a student’s spring semester?',
        a: `Either order to home in time for them to pack it, or order to campus once they’re back and the mailroom is open. No delivery date is promised, so leave extra time.`,
      },
      {
        q: 'Can a college student fly home with eye drops in a carry-on?',
        a: `Yes. TSA allows liquids in carry-on bags in containers of 3.4 ounces or less, and a bottle of Quell is well under that.`,
      },
    ],
  },
]
