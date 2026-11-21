import type { Guide } from '@/lib/guide-types'
export const DAILY_20261121_C: Guide[] = [
  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-findlay-oh:
   * - NOAA Regional Climate Centers ACIS StnData (data.rcc-acis.org), SID FDY,
   *   1991-2020 monthly normals (FINDLAY AP, OH, elev 809 ft): normal max F
   *   Jan 35.1, Feb 38.4, Mar 48.9, Apr 62.2, May 73.3, Jun 82.1, Jul 85.4,
   *   Aug 83.5, Sep 77.7, Oct 65.2, Nov 51.4, Dec 39.8; normal min F Jan 20.4,
   *   Feb 22.7, Mar 30.6, Apr 40.6, Jul 64.4, Oct 44.5, Nov 34.4, Dec 26.2;
   *   precipitation in: Feb 1.68 (lowest), Jun 3.93 (highest), annual sum 33.80.
   *   Snowfall "M" (missing) for every month, so no snow figure is stated.
   *   Raw JSON: .daily-job/acis1121/FDY.json and .daily-job/c/FDY-extra.json (mint).
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-findlay-oh',
    title: 'Dry eye relief in Findlay, Ohio',
    description:
      'Findlay’s January nights average about 20°F, so furnaces and defrosters run for months. NOAA’s numbers and a day-to-day routine for dry eyes in Findlay.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Findlay mostly means managing heated air. NOAA’s normals for Findlay Airport put January lows near 20°F, so furnaces, space heaters and car defrosters run from late fall into spring, and warm, moving, dry air thins the tear film fast. Keep vents off your face, blink fully at screens, use a lubricating drop exactly as its label directs, and see an eye doctor for pain, vision changes or dryness that keeps returning.`,
      },
      { h: 'Findlay’s climate in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Findlay Airport, as published through the National Weather Service’s NOWData, describe a station at about 810 feet in the flat farm country of Hancock County. The monthly figures sketch a town with a real winter, a warm and wet early summer, and quick swings in between:`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 35.1°F and a normal low of 20.4°F.`,
          `Normal lows stay below freezing from December (26.2°F) through March (30.6°F), and November’s sits just above it at 34.4°F.`,
          `July is the warmest month, averaging 85.4°F in the afternoon and 64.4°F at night.`,
          `February is the driest month at 1.68 inches of precipitation, and June the wettest at 3.93 inches.`,
          `A normal year adds up to about 33.8 inches.`,
        ],
      },
      {
        p: `The station’s snowfall normals are missing from the record, so this page leaves snow totals out rather than guessing at them.`,
      },
      { h: 'Why do Findlay winter mornings dry out your eyes?' },
      {
        p: `A 20-degree morning starts with a cold car. Most people scrape the windshield, start the engine and crank the heat, and for the first few miles that air comes out hot, fast and very dry. If the dashboard vents are open, it lands straight on your eyes while you’re staring at the road and blinking less than usual. By the time you pull into work or the school drop-off line, your eyes can already feel gritty.`,
      },
      {
        list: [
          `Send the heat to the windshield and the floor, and close or angle the center dashboard vents.`,
          `Let the cabin warm for a minute before turning the fan to its highest setting.`,
          `On a bright morning after a cold night, sunglasses cut glare off frosted fields and wet pavement, so you squint less.`,
          `At red lights, close your eyes for a second or two and let a full blink spread fresh tears.`,
        ],
      },
      {
        p: `There’s more on cabin air in [why your eyes feel dry in the car](/guides/why-do-my-eyes-feel-dry-in-the-car).`,
      },
      { h: 'The furnace season, November through March' },
      {
        p: `With normal lows at or near freezing for five months, a Findlay furnace has a long job. Heating cold outdoor air without adding water drops its relative humidity, and forced-air systems then push that air across the room. That’s why a living room can feel parched in February while the yard outside is slushy.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, where you spend the most hours in one place, and clean it as its maker directs.`,
          `Turn the thermostat down a few degrees at night; cooler air holds on to more of its relative humidity.`,
          `Move the recliner or desk chair out of the path of the floor register.`,
          `Change the furnace filter on schedule so the system isn’t stirring dust along with the heat.`,
        ],
      },
      {
        p: `If you’re unsure whether a humidifier is worth it, [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) weighs it up.`,
      },
      { h: 'June rain, July heat and the air conditioner' },
      {
        p: `Summer flips the source of dry air without removing it. June brings the most rain of the year, July afternoons average in the mid-80s, and most homes, offices and plants close up and run air conditioning. Cooling pulls moisture out of the air as it chills it, and ceiling vents in an open-plan office or a production floor can blow across a workstation for an entire shift. Ask to have a vent redirected if it hits your face, and keep a light layer handy so you’re not tempted to sit in a draft to cool off.`,
      },
      { h: 'April and October, the in-between months' },
      {
        p: `Findlay’s spring and fall are short and changeable. April averages 62.2°F in the afternoon but 40.6°F at night, and October runs 65.2°F and 44.5°F. Many households run the heat at dawn, open windows by lunch, and reach for a jacket again after dinner. Fall also brings harvest in the fields around town and yard work at home, and both kick up fine dust and chaff on breezy days. Wraparound sunglasses help on the mower or the leaf rake, and rinsing your face and hands before touching your eyes keeps grit out of them.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. One line covers handling: {tip}.`,
      },
      {
        p: `The panel also carries this caution: {warnings}. For storage it says: {storage}. A bottle left in the glove box on a January night in Findlay will fall well below that range, so keep it in a coat pocket or bag that comes inside with you. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Findlay' },
      {
        p: `We ship from Brentwood, Tennessee, to Findlay and every other US address. Checkout works as a guest, buyers must be 18 or older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order before your bottle runs low, especially ahead of the holidays. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to send them back. See the [Findlay page](/eye-drops/findlay-oh), the [Ohio page](/eye-drops/state/ohio), or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness, not for working out what’s behind it. The label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Findlay, Ohio get in winter?',
        a: `NOAA’s 1991–2020 normals for Findlay Airport put January’s average low at 20.4°F and its average high at 35.1°F. Normal lows stay below freezing from December through March.`,
      },
      {
        q: 'What is the wettest month in Findlay, Ohio?',
        a: `June, with a normal 3.93 inches of precipitation at Findlay Airport. February is the driest month at 1.68 inches, and a normal year totals about 33.8 inches.`,
      },
      {
        q: 'Why do my eyes feel dry on winter mornings in Findlay?',
        a: `Cold mornings mean a hot, dry car heater and a furnace running inside, and both speed up evaporation from the tear film. Aim the car’s heat at the windshield and floor, and keep home registers from blowing at your face.`,
      },
      {
        q: 'Does Quell ship to Findlay, Ohio?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Findlay, with guest checkout. No delivery date is promised, so order before you run out.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-fullerton-ca:
   * - NOAA RCC ACIS StnData, SID FUL, 1991-2020 monthly normals
   *   (FULLERTON MUNICIPAL AP, CA, elev 86 ft): normal max F Jan 68.8, Feb 69.0,
   *   Mar 71.0, Jul 84.4, Aug 86.7 (highest), Sep 85.4, Oct 80.3, Nov 74.0,
   *   Dec 68.1 (lowest); normal min F Jan 46.4, Dec 45.6, Aug 66.4;
   *   precipitation in: Jan 2.85, Feb 3.02 (highest), Mar 1.74, May 0.30,
   *   Jun 0.08, Jul 0.02, Aug 0.02, Sep 0.14, Dec 1.86; annual sum 11.86;
   *   May-Sep sum 0.56; Dec-Mar sum 9.47. Snowfall "M": not stated.
   *   Raw JSON: .daily-job/acis1121/FUL.json and .daily-job/c/FUL-extra.json.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-fullerton-ca',
    title: 'Dry eye relief in Fullerton, California',
    description:
      'Fullerton gets about half an inch of rain from May through September, with August highs near 87°F. NOAA’s figures and practical dry eye relief for Fullerton.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Fullerton means planning for a long rainless stretch. NOAA’s normals for Fullerton Municipal Airport show only about half an inch of rain from May through September and August highs near 87°F, so air conditioning runs for months while dust settles on everything outside. Keep vents off your face, take blink breaks at screens, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'What the Fullerton airport station records' },
      {
        p: `NOAA’s 1991–2020 climate normals for Fullerton Municipal Airport, which sits at about 86 feet in north Orange County, show warm afternoons nearly every month and a rainy season packed into winter:`,
      },
      {
        list: [
          `August is the warmest month, with a normal high of 86.7°F, and September is close behind at 85.4°F.`,
          `December has the coolest afternoons at 68.1°F and the coolest nights at 45.6°F.`,
          `A normal year brings about 11.86 inches of precipitation, most of it from December through March.`,
          `February is the wettest month at 3.02 inches; July and August each average 0.02 inch.`,
          `From May through September, the monthly normals add up to about 0.56 inch.`,
        ],
      },
      { h: 'A rainy season that fits in four months' },
      {
        p: `December through March account for about 9.5 of Fullerton’s 11.9 normal inches, roughly four of every five. The rest of the year, ground, sidewalks and landscaping dry out, and anything that moves air (a leaf blower next door, a delivery truck, a gust down the street) lifts fine dust. That dust is a common reason eyes feel scratchy after time outdoors in late summer.`,
      },
      {
        list: [
          `Wear wraparound sunglasses for yard work, walks and youth sports on dry fields.`,
          `Wash your hands and face before touching your eyes when you come in.`,
          `Keep car windows up on dusty roads and set the air to recirculate.`,
          `On days when dry wind blows in from inland, plan errands for the calmer morning hours where you can.`,
        ],
      },
      { h: 'Why September still feels like summer' },
      {
        p: `In Fullerton, the hot season doesn’t end with Labor Day. September’s normal high is within about a degree and a half of August’s, and October still averages 80.3°F. That means school, offices and the drive home all run on air conditioning well into fall. Chilled, dry air from a classroom vent or a dashboard can be as hard on the tear film as the heat outside. Point car vents at your chest instead of your face, and if a ceiling diffuser sits right over your desk, ask whether it can be angled or partly closed.`,
      },
      { h: 'Cool winter nights and the heater' },
      {
        p: `December and January nights at the airport average about 46°F, cool enough that many homes run heat in the early morning and evening. Wall furnaces, older forced-air systems and space heaters all warm the air without adding moisture, and a small heater aimed at your legs under a desk also sends warm air upward toward your face. Keep a space heater on the floor, pointed away from you, and switch it off when the room is comfortable. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) goes into the details.`,
      },
      { h: 'Freeway commutes and long screen days' },
      {
        p: `Many Fullerton residents spend real time in the car, and a long freeway drive combines steady air from the vents with fixed, focused attention. Screen work does the same thing at a desk. In both cases, people blink less often and less completely, and the tear film breaks up between blinks.`,
      },
      {
        list: [
          `Every 20 minutes or so at a screen, look across the room and blink fully a few times.`,
          `Set the monitor slightly below eye level so your eyelids cover more of the eye.`,
          `On long drives, use stops to rest your eyes for a minute before getting back on the road.`,
          `Read [screens and your tear film](/guides/screens-and-your-tear-film) for the reasons behind these habits.`,
        ],
      },
      { h: 'Quell’s label, line by line' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Here is what the panel states, in its own words:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Warning: {warnings}.`,
          `When using: {tip}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `A car parked in an open lot in August can get far hotter inside than that storage range, so carry the bottle in a bag rather than leaving it on the dashboard. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Fullerton' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Fullerton and the rest of the US. You can check out as a guest if you’re 18 or older; shipping is {shipping}, and orders of {freeBottles} bottles or more ship free. We don’t promise a delivery date, so reorder with a little time to spare. If a bottle stays unopened, you can get a refund within {returnDays} days of delivery without sending it back. Local details are on the [Fullerton page](/eye-drops/fullerton-ca) and the [California page](/eye-drops/state/california), or you can [buy from the home page](/#buy).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `Some symptoms aren’t a matter of dry air. The label says: {stopUse} Don’t wait out pain or blurred vision. An eye doctor can find the cause and decide what to do; our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to ignore.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Fullerton, California get?',
        a: `About 11.86 inches in a normal year, according to NOAA’s 1991–2020 normals for Fullerton Municipal Airport. February is the wettest month at 3.02 inches, while July and August average just 0.02 inch each.`,
      },
      {
        q: 'What is the hottest month in Fullerton, California?',
        a: `August, with a normal high of 86.7°F at Fullerton Municipal Airport. September is nearly as warm at 85.4°F, and October still averages 80.3°F.`,
      },
      {
        q: 'Why do my eyes feel scratchy in Fullerton in late summer?',
        a: `By late summer the area has gone months with almost no rain, so dust lifts easily, and air conditioning dries the air indoors. Sunglasses outside and vents aimed away from your face both help.`,
      },
      {
        q: 'Can I order Quell to Fullerton, California?',
        a: `Yes. Quell ships to Fullerton and every other US address from Brentwood, Tennessee. Checkout is available as a guest for buyers 18 and older.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-goldsboro-nc:
   * - NOAA RCC ACIS StnData, SID GSB, 1991-2020 monthly normals
   *   (GOLDSBORO SEYMOUR JOHNSON AFB, NC, elev 109 ft): normal max F Jan 54.2,
   *   Jun 88.0, Jul 91.0, Aug 89.1, Sep 83.4; normal min F Jan 34.6, Feb 36.4,
   *   Jul 71.7, Dec 37.3; precipitation in: Jul 5.42, Aug 6.42, Sep 7.03
   *   (highest), Nov 3.17 (lowest), Feb 3.24; annual sum 52.26; snowfall in:
   *   Jan 1.3, Dec 0.7, all other months 0.0 (annual about 2.0).
   *   Raw JSON: .daily-job/acis1121/GSB.json and .daily-job/c/GSB-extra.json.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   * - The base's current official name was not verified today, so the prose
   *   uses ACIS's station name once and otherwise says "the air base".
   */
  {
    slug: 'dry-eye-relief-goldsboro-nc',
    title: 'Dry eye relief in Goldsboro, North Carolina',
    description:
      'Goldsboro’s July highs average 91°F and its rain tops 52 inches a year, yet eyes still dry out indoors. NOAA numbers and a routine that fits Goldsboro.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Goldsboro is mostly an indoor job. NOAA’s normals for the weather station at the air base put July highs at 91°F, so air conditioning runs for months, and winter swaps it for heat. The coastal plain outside stays wet, with more than 52 inches of rain a year. Keep vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor if dryness lingers.`,
      },
      { h: 'Is Goldsboro wet or dry? What NOAA’s numbers say' },
      {
        p: `NOAA’s 1991–2020 climate normals come from the station ACIS lists as Goldsboro Seymour Johnson AFB, at about 110 feet on the coastal plain. By rainfall, Goldsboro is anything but dry:`,
      },
      {
        list: [
          `About 52.3 inches of precipitation fall in a normal year.`,
          `September is the wettest month at 7.03 inches, followed by August at 6.42 and July at 5.42.`,
          `November is the driest month, and even it averages 3.17 inches.`,
          `July’s normal high is 91.0°F, with nights averaging 71.7°F.`,
          `January averages 54.2°F in the afternoon and 34.6°F at night.`,
          `Snowfall averages about 2 inches a year, nearly all of it in December and January.`,
        ],
      },
      {
        p: `So why do so many people here rub their eyes by mid-afternoon? Because most of a Goldsboro day is spent in air that has been cooled or heated by a machine.`,
      },
      { h: 'Why do my eyes feel dry when it’s muggy outside?' },
      {
        p: `An air conditioner works by pulling heat and moisture out of the air. Step from a sticky parking lot into a chilled store, office or truck cab and you trade wet air for dry air in seconds, often with a vent blowing at head height. Your tears evaporate faster in that cool, moving air, and a few hours of it can leave eyes stinging even though the weather report says humid. [Why are my eyes dry when it’s humid?](/guides/why-are-my-eyes-dry-when-it-is-humid) explains the same effect in more depth.`,
      },
      {
        list: [
          `Set the thermostat a couple of degrees warmer so the system cycles less often.`,
          `Turn bedroom ceiling fans to low, or off, at night.`,
          `In the car, aim the vents at your chest and use the lowest fan speed that keeps you comfortable.`,
          `At a desk, sit outside the direct path of supply vents.`,
        ],
      },
      { h: 'Late summer storms and a closed-up house' },
      {
        p: `July through September bring about 19 of Goldsboro’s 52 normal inches. In those weeks, windows stay shut, the air conditioner works hardest, and many homes add a dehumidifier to fight dampness and mildew. Each of those helps the house, but they also strip more moisture from the air you breathe and the surface of your eyes. If you run a dehumidifier, keep it out of the bedroom, or set it to a moderate level instead of its driest. [Can a dehumidifier cause dry eyes?](/guides/can-a-dehumidifier-cause-dry-eyes) covers settings.`,
      },
      { h: 'Field work and long days outside' },
      {
        p: `Wayne County is farm country, and a lot of local work happens outdoors: planting and harvest, landscaping, construction, and long hours on the flightline or the road. On hot, bright days, people squint to cut glare, and a squint means shorter, less complete blinks. Dry spells between storms let field dust and pollen ride the breeze.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or tinted safety glasses where your job allows them.`,
          `Take shade breaks and use them to blink slowly and fully a few times.`,
          `Wipe sweat and sunscreen away from your eyes with a clean cloth, not the back of a dusty glove.`,
          `Wash your hands before putting in eye drops after field or shop work.`,
        ],
      },
      { h: 'Winter: mild days, heat at night' },
      {
        p: `Goldsboro winters are short, but January nights still average just under 35°F. Many homes here use heat pumps, which push a steady stream of warm air for hours on cold nights, and older houses may rely on space heaters in one or two rooms. Heated air holds less relative moisture, so the bedroom can be the driest room in the house by morning. A humidifier near the bed, a slightly lower thermostat at night, and keeping vents from blowing across your pillow all help.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is a preservative-free eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses statement reads: {uses}. The directions are short: {directions}. The panel adds a caution that matters before the first drop: {warnings}. If that applies to you, read [Egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell) first.`,
      },
      {
        p: `For handling, the label says: {tip}. For storage: {storage}. A truck cab in a Goldsboro July runs far hotter than the top of that range, so keep the bottle in a lunch bag or bring it inside.`,
      },
      { h: 'Getting Quell in Goldsboro' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including Goldsboro, Mount Olive, Pikeville and homes around the air base. Guest checkout is available to buyers 18 and older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. There’s no promised delivery date, so leave some margin before your bottle runs out. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. See the [Goldsboro page](/eye-drops/goldsboro-nc), the [North Carolina page](/eye-drops/state/north-carolina), or [buy Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness from air conditioning usually eases with small changes. Some symptoms need a professional. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do, and [these eye symptoms need a doctor](/guides/eye-symptoms-that-need-a-doctor) sooner rather than later.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Goldsboro, NC get a year?',
        a: `About 52.3 inches in a normal year, based on NOAA’s 1991–2020 normals for the station at the air base. September is the wettest month at 7.03 inches, and November the driest at 3.17.`,
      },
      {
        q: 'Does Goldsboro, North Carolina get snow?',
        a: `A little. NOAA’s normals for the Goldsboro station list about 2 inches of snow in a normal year, with 1.3 inches in January and 0.7 inch in December.`,
      },
      {
        q: 'Why do my eyes get dry in Goldsboro when it’s so humid?',
        a: `Most of the day is spent in air-conditioned rooms and vehicles, and air conditioning removes moisture as it cools. Moving from sticky outdoor air into chilled, vented air speeds up evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Goldsboro, North Carolina?',
        a: `Yes. Quell ships to Goldsboro and the rest of Wayne County from Brentwood, Tennessee, with guest checkout. No delivery date is promised, so order ahead.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-rocky-mount-nc:
   * - NOAA RCC ACIS StnData, SID RWI, 1991-2020 monthly normals
   *   (ROCKY MOUNT WILSON AP, NC, elev 150 ft): normal max F Jan 51.8, Feb 55.3,
   *   Mar 63.2, Apr 72.5, May 79.9, Jun 86.9, Jul 90.5, Aug 88.3, Sep 82.5,
   *   Oct 73.1, Nov 62.8, Dec 54.7; normal min F Jan 30.8, Feb 32.6, Mar 38.7,
   *   Apr 47.5, Jul 69.0, Oct 49.9, Nov 39.0, Dec 33.5; precipitation in:
   *   Feb 2.87 (lowest), May 2.92, Dec 2.93, Jul 4.59, Aug 4.92 (highest),
   *   Sep 4.91; annual sum 44.38. Snowfall "M": not stated.
   *   Raw JSON: .daily-job/acis1121/RWI.json and .daily-job/c/RWI-extra.json.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-rocky-mount-nc',
    title: 'Dry eye relief in Rocky Mount, North Carolina',
    description:
      'Frosty January nights, a dry May and 90°F Julys: a season-by-season guide to dry eyes in Rocky Mount, built on NOAA’s normals for the local airport.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Rocky Mount’s dry eye seasons are winter heat and summer air conditioning. NOAA’s normals for the Rocky Mount–Wilson airport put January nights near 31°F and July afternoons above 90°F, and each extreme sends people indoors into machine-dried air. Day to day, keep airflow off your face, blink fully during screen work, use a lubricating drop as its label directs, and have an eye doctor check dryness that doesn’t settle down.`,
      },
      { h: 'About the station' },
      {
        p: `The numbers on this page are NOAA’s 1991–2020 climate normals for the Rocky Mount–Wilson airport, the regional field that serves both cities, at about 150 feet. A normal year there brings about 44.4 inches of precipitation, spread fairly evenly: no month averages less than 2.87 inches (February) or more than 4.92 (August). The record doesn’t include usable snowfall normals for this station, so snow isn’t covered here. The rest of the guide walks through the year one season at a time.`,
      },
      { h: 'December to February: frost on the windshield' },
      {
        p: `January’s normal low is 30.8°F, and February’s is 32.6°F, which makes frosted windshields a normal start to a winter weekday. Rocky Mount winter afternoons are mild by national standards (January averages 51.8°F), so the heat doesn’t run nonstop. It runs hardest early and late, exactly when people are getting ready, driving, sleeping and sitting in front of the TV.`,
      },
      {
        list: [
          `Defrost with the airflow set to the windshield, not the dashboard vents that face you.`,
          `Keep the bedroom a bit cooler at night and run a humidifier there if the air feels dry.`,
          `Don’t sleep with a space heater pointed toward the bed.`,
          `If the house has floor or wall registers, keep favorite chairs out of their direct path.`,
        ],
      },
      { h: 'March to May: pollen and a drier spell' },
      {
        p: `Spring warms quickly. March averages 63.2°F, and by May afternoons reach 79.9°F. May is also one of the driest months on the record, averaging 2.92 inches. Those weeks bring yard work, cookouts, youth baseball evenings and long walks, and in eastern North Carolina they also bring a coat of yellow pine pollen on cars and porches. Pollen and dust on the lids and lashes can make eyes feel gritty. Rinse your face when you come in, keep sunglasses on outdoors, and wash your hands before touching your eyes or putting in a drop.`,
      },
      { h: 'June to September: heat and the wettest stretch' },
      {
        p: `July is the warmest month, at 90.5°F in the afternoon and 69.0°F at night, and June and August aren’t far behind. August and September are the wettest months, at roughly 4.9 inches each. Outdoors the air is heavy. Indoors, air conditioning runs most of the day, and the change from one to the other can leave eyes feeling sandy by evening.`,
      },
      {
        list: [
          `Raise the thermostat a degree or two; the system will cycle less and blow less dry air.`,
          `In plants, warehouses and distribution centers, ask whether a ceiling vent above your station can be angled away.`,
          `For a long afternoon drive, use recirculation, a low fan speed and vents aimed below your chin.`,
          `Use thunderstorm days indoors as a reason to take more screen breaks, not fewer.`,
        ],
      },
      { h: 'October and November: the comfortable gap' },
      {
        p: `October is the easiest month on the eyes for many people here, with afternoons near 73°F and nights near 50°F, and neither the furnace nor the air conditioner has to work much. November cools to a 39°F normal low, and the heat starts running again in the evenings. It’s a good window to replace the furnace filter, set up a humidifier before you need it, and order eye drops ahead of the holidays.`,
      },
      { h: 'Along the Tar River and on the road' },
      {
        p: `Fishing, paddling and walking along the Tar River put you in the open air, with glare off the water and breezes that speed evaporation from the eye’s surface. Polarized sunglasses cut that glare, and a brimmed hat helps too. Many people here also commute between Rocky Mount, Wilson, Tarboro and Raleigh, and a long drive means fewer blinks. Take breaks, and look at [why your eyes feel dry in the car](/guides/why-do-my-eyes-feel-dry-in-the-car) for cabin-air tips.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. On the Drug Facts panel, its Uses are: {uses}. Directions: {directions}. Before using it, note this caution: {warnings}.`,
      },
      {
        p: `The panel also says: {tip}. And on storage: {storage}. A bottle left in a parked car in July or on a frosty January night can fall outside that range, so carry it with you. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Rocky Mount' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Rocky Mount, Nashville, Tarboro and every other US address. There’s no account to create; adults 18 and up can check out as a guest. Shipping is {shipping}, and orders of {freeBottles} bottles or more ship free. Since no delivery date is promised, reorder before you’re down to the last few drops. Unopened bottles are refundable within {returnDays} days of delivery, and you keep them. Visit the [Rocky Mount page](/eye-drops/rocky-mount-nc), the [North Carolina page](/eye-drops/state/north-carolina), or [order now](/#buy).`,
      },
      { h: 'When it’s more than the weather' },
      {
        p: `Seasonal dryness tends to rise and fall with the heat and the air conditioner. Symptoms that don’t follow that pattern, or that hurt, need a professional. The label is clear: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Rocky Mount, NC get at night in winter?',
        a: `NOAA’s 1991–2020 normals for the Rocky Mount–Wilson airport put January’s average low at 30.8°F and February’s at 32.6°F. December averages 33.5°F.`,
      },
      {
        q: 'What is the driest month in Rocky Mount, NC?',
        a: `February, with a normal 2.87 inches of precipitation at the Rocky Mount–Wilson airport. May and December are close behind at 2.92 and 2.93 inches.`,
      },
      {
        q: 'Why do my eyes feel gritty in the spring in eastern North Carolina?',
        a: `Spring brings pine pollen, yard work and drier weeks, and pollen or dust on the lids and lashes can make eyes feel gritty. Sunglasses outside and washing your face and hands when you come in can help.`,
      },
      {
        q: 'Can I get Quell delivered to Rocky Mount, North Carolina?',
        a: `Yes. Quell ships to Rocky Mount and nearby towns from Brentwood, Tennessee, with guest checkout for adults. No delivery date is promised, so reorder with time to spare.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-hayward-ca:
   * - NOAA RCC ACIS StnData, SID HWD, 1991-2020 monthly normals
   *   (HAYWARD AIR TERMINAL, CA, elev 31 ft): normal max F Jan 59.3 (lowest),
   *   Feb 61.9, Jun 74.0, Jul 74.7, Aug 76.4, Sep 77.0 (highest), Oct 73.5,
   *   Dec 59.4; normal min F Jan 43.1, Dec 42.9 (lowest), Aug 58.2 (highest);
   *   precipitation in: Jan 2.91, Feb 3.11, Jun 0.15, Jul 0.00, Aug 0.10,
   *   Sep 0.08, Oct 0.81, Dec 3.20 (highest); annual sum 16.00; Jun-Sep sum 0.33.
   *   Snowfall "M": not stated.
   *   Raw JSON: .daily-job/acis1121/HWD.json and .daily-job/c/HWD-extra.json.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-hayward-ca',
    title: 'Dry eye relief in Hayward, California',
    description:
      'Hayward’s normal July rainfall is zero, and its highs stay between 59°F and 77°F all year. NOAA’s numbers and dry eye relief for Hayward homes and commutes.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Hayward is about the long dry season and the air you breathe indoors. NOAA’s normals for the Hayward airport show zero normal rain in July and about a third of an inch from June through September, while mild temperatures keep windows open and dust moving. Keep heater and car vents off your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor if dryness persists.`,
      },
      { h: 'Hayward’s numbers, from the airport by the bay' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Hayward airport come from a station at about 31 feet on the flat shoreline plain. They describe one of the gentlest temperature patterns you’ll find, with a rainy season and a dry season instead of hot and cold ones:`,
      },
      {
        list: [
          `January has the coolest afternoons, at 59.3°F; September has the warmest, at 77.0°F.`,
          `December has the coolest nights, averaging 42.9°F, and August the mildest at 58.2°F.`,
          `About 16 inches of precipitation fall in a normal year.`,
          `December is the wettest month, at 3.20 inches, with February (3.11) and January (2.91) close behind.`,
          `July’s normal precipitation is 0.00 inch, and June through September add up to about 0.33 inch.`,
        ],
      },
      { h: 'A small temperature range, and what it means indoors' },
      {
        p: `Afternoon highs in Hayward move less than 18 degrees from the coolest month to the warmest. That steadiness shapes how homes run. On many days neither heat nor air conditioning is needed, so windows stay open and outdoor air drifts through the house. When the heat does come on, it’s usually on winter mornings and evenings, often from a wall furnace, an older forced-air system or a space heater in one room. Those blow warm, dry air at close range, which can dry the eye’s surface quickly when you sit near them.`,
      },
      {
        list: [
          `Sit at least a few feet from a wall furnace or space heater, and never face it.`,
          `Use the heater to take the chill off, then turn it down instead of leaving it running for hours.`,
          `In winter, a small humidifier in the bedroom can make mornings easier.`,
          `With windows open in dry months, dust the sills and vacuum often; dust that blows in ends up on lashes and lids.`,
        ],
      },
      { h: 'Four months with almost no rain' },
      {
        p: `From June through September, the hills behind the city turn brown, yards and lots dry out, and every breeze carries fine dust. Hiking the regional parks in the hills, weekend soccer, and jobs in yards, warehouses and loading docks all keep you in that dry, dusty air for hours. Grit on the eyelids and a breeze across the eye are a common pairing behind that scratchy end-of-day feeling.`,
      },
      {
        list: [
          `Wear wraparound sunglasses outside, especially on trails and open fields.`,
          `Keep a brimmed hat in the car for afternoons when the sun is low and you’re squinting.`,
          `When you come in, wash your face before rubbing your eyes.`,
          `On smoky days during fire season, keep windows closed and follow local air-quality alerts.`,
        ],
      },
      { h: 'Crossing the bay and other commutes' },
      {
        p: `Plenty of Hayward residents drive across the bay or up and down the East Bay for work, and long traffic stretches mean hours of staring ahead with the fan running. On a cool morning the heater runs; by afternoon it may be the air conditioner. Either way, aim the vents low and away from your face, use recirculation on dusty days, and blink deliberately while you’re stopped. Transit riders can use the ride itself as a screen break: look out the window instead of at a phone for part of the trip.`,
      },
      { h: 'The rainy months: damp outside, drier inside' },
      {
        p: `December through February bring most of Hayward’s rain, and outdoor air is moist then. Indoors, it’s a different story. Closed windows, heaters and long evenings in front of screens combine into the driest indoor stretch of the year for many households. The fixes are small: keep heating moderate, add moisture to the bedroom air, and step away from the screen now and then for a few full blinks. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why the blink matters so much.`,
      },
      { h: 'How Quell’s label says to use it' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. Directions: {directions}. A caution on the panel: {warnings}.`,
      },
      {
        p: `It also says: {tip}. And for storage: {storage}. Hayward rarely strains that range indoors, but a car in an open lot on a September afternoon can, so keep the bottle in a bag you carry. The panel is reproduced on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Hayward' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Hayward, Castro Valley, San Lorenzo and every other US address. Adults 18 and older can check out without creating an account. Shipping is {shipping}, and orders of {freeBottles} bottles or more ship free. We don’t promise a delivery date. If a bottle you ordered stays unopened, you can request a refund within {returnDays} days of delivery and keep the bottle. See the [Hayward page](/eye-drops/hayward-ca) and the [California page](/eye-drops/state/california), or [order on the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that tracks the seasons usually responds to small changes at home and at work. Other symptoms shouldn’t wait. The label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'Does it rain in Hayward in the summer?',
        a: `Barely. NOAA’s 1991–2020 normals for the Hayward airport list 0.00 inch for July and about 0.33 inch in total from June through September. Most rain falls from December through February.`,
      },
      {
        q: 'What is the warmest month in Hayward, California?',
        a: `September, with a normal high of 77.0°F at the Hayward airport. August is close at 76.4°F, while January is the coolest at 59.3°F.`,
      },
      {
        q: 'How cold does Hayward get at night?',
        a: `December has the coolest nights, with a normal low of 42.9°F at the Hayward airport, and January averages 43.1°F. Summer nights average in the high 50s.`,
      },
      {
        q: 'Does Quell ship to Hayward, California?',
        a: `Yes. Quell ships to Hayward and the rest of the US from Brentwood, Tennessee. Guest checkout is open to buyers 18 and older, with no delivery date promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-hickory-nc:
   * - NOAA RCC ACIS StnData, SID HKY, 1991-2020 monthly normals
   *   (HICKORY FAA AIRPORT, NC, elev 1170 ft): normal max F Jan 49.1, Jul 87.4
   *   (highest), Aug 85.7, Oct 70.2, Dec 51.5; normal min F Jan 30.2, Feb 32.8,
   *   Dec 32.8, Jul 68.1, Oct 48.9, Nov 38.7; precipitation in: Feb 3.21
   *   (lowest), Oct 3.49, Jun 4.35, Jul 4.29, Aug 4.58 (highest); every month
   *   3.21 or more; annual sum 47.15. Snowfall "M": not stated.
   *   Raw JSON: .daily-job/acis1121/HKY.json and .daily-job/c/HKY-extra.json.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-hickory-nc',
    title: 'Dry eye relief in Hickory, North Carolina',
    description:
      'Hickory gets more than 3 inches of rain every month, so dry eyes there are mostly made indoors. NOAA’s foothills numbers and a routine that helps.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Hickory isn’t about a dry climate. NOAA’s normals for the Hickory airport show more than 3 inches of precipitation in every month, so the dryness people feel mostly comes from heated winter air, summer air conditioning, wind on the lake and long hours at screens. Keep vents off your face, blink fully, use a lubricating drop as its label directs, and see an eye doctor if symptoms persist.`,
      },
      { h: 'How much does it rain in Hickory?' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Hickory airport, at about 1,170 feet in the Catawba Valley foothills, show a place without a dry season at all:`,
      },
      {
        list: [
          `About 47.2 inches of precipitation in a normal year.`,
          `February is the driest month, and it still averages 3.21 inches; August is the wettest at 4.58.`,
          `July afternoons average 87.4°F, with nights near 68°F.`,
          `January averages 49.1°F in the afternoon and 30.2°F at night, and December and February lows both average 32.8°F.`,
          `October brings highs near 70°F and lows near 49°F.`,
        ],
      },
      {
        p: `The station’s snowfall normals aren’t in the record, so snow totals are left out here.`,
      },
      { h: 'Rain every month, so where does the dryness come from?' },
      {
        p: `Your tear film has three layers: mucus against the eye, water in the middle, and a thin oil layer on top that slows evaporation. Anything that moves warm or chilled air across the eye pulls water out of that film faster, and anything that holds your gaze steady (a screen, a road, a book) cuts down the blinks that spread fresh tears. In Hickory, the weather outside is rarely the problem. The furnace, the heat pump, the car vents, the air conditioner and the monitor are. [What is the tear film?](/guides/what-is-the-tear-film) covers the layers in more detail.`,
      },
      { h: 'Cold foothill mornings' },
      {
        p: `With normal lows near or below freezing from December through February, Hickory houses heat hard in the early morning and evening. Heat pumps run long cycles of warm air on the coldest nights, and plenty of foothill homes add a fireplace or wood stove that dries the air in the room around it.`,
      },
      {
        list: [
          `Sit to the side of a fireplace or stove rather than directly in front of it.`,
          `Keep heat pump and furnace vents from blowing across the bed or the couch.`,
          `Turn the thermostat down a little at night; a bedroom humidifier helps on the coldest weeks.`,
          `Warm the car before you drive, then lower the fan and aim it at the windshield.`,
        ],
      },
      { h: 'Lake Hickory and summer afternoons' },
      {
        p: `Summer days on Lake Hickory and the other Catawba River lakes are a big part of life here, and they put eyes in a tough spot. A moving boat creates its own wind, sun bounces off the water from below, and people squint for hours. Add sunscreen that drifts into the eyes as you sweat, and many people come off the water with eyes that sting and feel dry.`,
      },
      {
        list: [
          `Wear wraparound or polarized sunglasses on the boat, with a strap so they stay on.`,
          `Put on sunscreen stick or lotion that stays away from the eye area, and reapply carefully.`,
          `Turn your back to the spray and wind between runs on the water.`,
          `On the drive home, keep the air conditioning off your face.`,
        ],
      },
      { h: 'Fall drives into the mountains' },
      {
        p: `October is one of Hickory’s most comfortable months, and it’s also when many people drive west into the higher mountains to see the leaves change. Mountain overlooks are cooler and windier than the valley, car heaters come on for the ride back, and the flicker of sun through trees along winding roads keeps drivers’ eyes busy. Pull off now and then, stretch, look at something far away, and blink. Passengers can close their eyes for stretches too, especially if the sun is low.`,
      },
      { h: 'Plants, warehouses and home offices' },
      {
        p: `A lot of the Hickory area’s work happens indoors, on production floors, in warehouses and distribution centers, and at home desks. Big fans on a plant floor, packing dust and fabric lint all reach the eyes, and a home office often means a laptop on the kitchen table with a vent overhead. Ask for a fan to be turned so it doesn’t blow at your face, wear safety glasses where they’re required, and at a screen, look away every 20 minutes or so and blink fully a few times.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses: {uses}. Directions: {directions}. Read the caution before buying: {warnings}.`,
      },
      {
        p: `On handling: {tip}. On storage: {storage}. A boat bag in July sun or a car on a cold January night can run outside that range, so keep the bottle shaded in summer and indoors in winter. Everything else on the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Hickory' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Hickory, Conover, Newton, Lenoir and every other US address. Adults can check out as guests. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so plan around a lake weekend or a holiday trip. Unopened bottles can be refunded within {returnDays} days of delivery, and there’s nothing to mail back. See the [Hickory page](/eye-drops/hickory-nc), the [North Carolina page](/eye-drops/state/north-carolina), or [buy from the home page](/#buy).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `Not every gritty eye is a dry one. The label says: {stopUse} An eye doctor can find the cause and decide what to do. If you’re not sure whether something can wait, start with [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Hickory, NC get a year?',
        a: `About 47.2 inches in a normal year, according to NOAA’s 1991–2020 normals for the Hickory airport. Every month averages at least 3.21 inches, with August the wettest at 4.58.`,
      },
      {
        q: 'How cold does it get in Hickory, North Carolina in winter?',
        a: `January has a normal low of 30.2°F and a normal high of 49.1°F at the Hickory airport. December and February lows both average 32.8°F.`,
      },
      {
        q: 'Why do my eyes feel dry after a day on the lake?',
        a: `A moving boat creates wind across your eyes, glare off the water makes you squint, and sunscreen can drift in with sweat. Wraparound sunglasses and keeping sunscreen away from the eye area help.`,
      },
      {
        q: 'Does Quell ship to Hickory, North Carolina?',
        a: `Yes. Quell ships to Hickory and the rest of Catawba County from Brentwood, Tennessee, with guest checkout for adults. No delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-21 for dry-eye-relief-hutchinson-ks:
   * - NOAA RCC ACIS StnData, SID HUT, 1991-2020 monthly normals
   *   (HUTCHINSON MUNICIPAL AP, KS, elev 1520 ft): normal max F Jan 43.6,
   *   Jun 88.4, Jul 92.8 (highest), Aug 90.8, Sep 83.0, Dec 45.2; normal min F
   *   Jan 19.7 (lowest), Feb 23.2, Mar 32.8, Jul 68.2, Nov 31.2, Dec 22.1;
   *   precipitation in: Jan 0.58 (lowest), Feb 1.12, Nov 1.12, Dec 1.16,
   *   May 4.75 (highest), Jun 4.20, Jul 3.33, Aug 3.42; annual sum 28.31;
   *   Dec-Feb sum 2.86; May-Aug sum 15.70. Snowfall "M": not stated.
   *   Raw JSON: .daily-job/acis1121/HUT.json and .daily-job/c/HUT-extra.json.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-hutchinson-ks',
    title: 'Dry eye relief in Hutchinson, Kansas',
    description:
      'Hutchinson swings from 20°F January nights to 93°F July afternoons, with a dry winter in between. NOAA’s figures and dry eye relief through each season.',
    category: 'local',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Dry eye relief in Hutchinson means handling two extremes. NOAA’s normals for the municipal airport show January nights near 20°F with barely half an inch of precipitation, and July afternoons near 93°F. The furnace dries the house in winter; harvest dust, wind and air conditioning take over in summer. Keep air off your face, wear sunglasses outdoors, use a lubricating drop as labeled, and see an eye doctor if dryness persists.`,
      },
      { h: 'Hutchinson weather from the municipal airport' },
      {
        p: `These figures are NOAA’s 1991–2020 climate normals for Hutchinson Municipal Airport, at about 1,520 feet on the plains of Reno County, as published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 43.6°F and a normal low of 19.7°F.`,
          `July is the hottest, averaging 92.8°F in the afternoon and 68.2°F at night; August averages 90.8°F.`,
          `January is also the driest month, at 0.58 inch of precipitation.`,
          `May is the wettest month at 4.75 inches, followed by June at 4.20.`,
          `A normal year brings about 28.3 inches.`,
        ],
      },
      { h: 'From 20-degree nights to 93-degree afternoons' },
      {
        p: `The gap between a normal January night and a normal July afternoon in Hutchinson is about 73 degrees. That range means the house rarely gets a rest. Normal lows sit near or below freezing from November (31.2°F) through March (32.8°F), so the furnace has about five months of steady work. Highs climb into the upper 80s by June and stay near or above 90°F through August, so the air conditioner takes over. Both machines change the air around your eyes: heating lowers its relative humidity, and cooling pulls water out of it.`,
      },
      { h: 'January, the cold and dry low point' },
      {
        p: `December through February bring only about 2.9 inches of precipitation combined, and January alone averages just over half an inch. Cold, dry air outside becomes even drier once a furnace warms it. Static shocks from door handles and blankets are a familiar sign that the indoor air has lost a lot of its moisture, and eyes often feel it too, especially first thing in the morning.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom on the coldest weeks, and clean it as directed.`,
          `Keep furnace registers from blowing across the bed, couch or desk.`,
          `When you head out to feed animals, scrape the car or shovel the walk, wear sunglasses or goggles against the wind on open ground.`,
          `Let the car warm before turning the fan up, and send the heat to the windshield.`,
        ],
      },
      { h: 'May storms, then harvest heat' },
      {
        p: `More than half of Hutchinson’s normal precipitation, about 15.7 of 28.3 inches, falls from May through August, much of it in spring and early-summer storms. Then comes wheat harvest across the surrounding farm country, usually in the heat of early summer. Long days in a combine or grain truck mean hours of air-conditioned cab air, and every stop at the field’s edge or the elevator puts you in chaff and dust.`,
      },
      {
        list: [
          `Aim cab vents at your chest and use the lowest fan speed that keeps you comfortable.`,
          `Keep wraparound safety glasses or sunglasses on whenever you step out into dust.`,
          `Wash your hands and face before touching your eyes or putting in a drop.`,
          `Take short breaks with your eyes closed while the truck is being loaded or emptied.`,
        ],
      },
      { h: 'Along the Arkansas River and the open road' },
      {
        p: `Walking, biking or fishing near the Arkansas River gets you out in open air, where breezes pass across your eyes for as long as you’re outside. Long drives across south-central Kansas do something similar inside the car: straight roads, low sun at the start and end of the day, and steady vent air. Polarized sunglasses help with glare, and stopping every hour or two to rest your eyes helps with the rest. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has more on cabin air.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it contains no preservative. The label gives its Uses as: {uses}. Its directions: {directions}. It also carries this caution: {warnings}.`,
      },
      {
        p: `On handling, the label says: {tip}. On storage: {storage}. A truck cab in July or a pickup parked outside on a January night can push past either end of that range, so keep the bottle in a lunch box in summer and bring it inside in winter. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Hutchinson' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Hutchinson, South Hutchinson, Nickerson, Buhler and every other US address. Guest checkout is open to adults 18 and older. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so reorder before harvest or the holidays get busy. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Hutchinson page](/eye-drops/hutchinson-ks), the [Kansas page](/eye-drops/state/kansas), or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust in the eye, a scratch from chaff, or dryness that won’t quit are all reasons to get checked rather than keep using drops. The label says: {stopUse} An eye doctor can find the cause and decide what to do. The list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Hutchinson, Kansas get in winter?',
        a: `NOAA’s 1991–2020 normals for Hutchinson Municipal Airport put January’s average low at 19.7°F and its average high at 43.6°F. December averages a low of 22.1°F.`,
      },
      {
        q: 'What is the driest month in Hutchinson, KS?',
        a: `January, with a normal 0.58 inch of precipitation at Hutchinson Municipal Airport. December through February together average only about 2.9 inches.`,
      },
      {
        q: 'How hot does Hutchinson, Kansas get in the summer?',
        a: `July has a normal high of 92.8°F at the municipal airport, and August averages 90.8°F. June’s normal high is 88.4°F.`,
      },
      {
        q: 'Does Quell ship to Hutchinson, Kansas?',
        a: `Yes. Quell ships to Hutchinson and the rest of Reno County from Brentwood, Tennessee, with guest checkout. No delivery date is promised, so order ahead.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-during-the-year-end-work-crunch',
    title: 'Dry eyes during the year-end work crunch',
    description:
      'December packs reviews, budgets and deadlines into a few weeks of screen time in heated offices. How to get through the year-end crunch with comfortable eyes.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `The year-end work crunch dries eyes because December squeezes months of deadlines into a few weeks of nonstop screen time in heated offices. Focused work slows and shortens your blinks, and warm, dry air speeds evaporation from the tear film. Plan breaks into the calendar, keep vents and heaters off your face, enlarge what you read, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'What the December crunch does to your eyes' },
      {
        p: `Year-end work rarely looks like one big task. It’s performance reviews, next year’s budget, a final report for a client or a board, inventory and closing figures, plus every project someone wants finished before the holidays. With Christmas on a Friday this year and Thanksgiving on November 26, many teams have about three working weeks of December before people start leaving. That compresses everything into longer days at a screen.`,
      },
      {
        p: `The eyes notice. When you concentrate, you blink less often, and many blinks don’t fully close. The tear film thins between blinks, and in the dry, heated air of a December office, it thins faster. By late afternoon, eyes can feel gritty, tired or oddly watery. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why staring is the key factor.`,
      },
      { h: 'Plan the last three weeks before the break' },
      {
        p: `You can’t make the deadlines go away, but you can arrange them so your eyes get regular rests:`,
      },
      {
        list: [
          `Put your hardest reading and writing early in the day, before your eyes have been at a screen for hours.`,
          `Leave ten minutes between meetings on your calendar instead of booking them back to back.`,
          `Take phone-only meetings on a walk or at a window when you don’t need to share a screen.`,
          `Set a stopping time on crunch nights, so you don’t end up reading reports at midnight.`,
          `Book a few hours with no meetings each week to work through long documents without interruptions.`,
        ],
      },
      { h: 'Reviews, presentations and long video calls' },
      {
        p: `Year-end often means hours of performance conversations and budget presentations by video. People tend to stare at the camera or at faces on the screen and forget to blink. Turn off the self-view once you’ve checked your framing, glance away from the screen while others are speaking, and close your eyes for a moment between calls. If you present, pause between slides and look up from your notes. Our guide on [dry eyes from video calls](/guides/dry-eyes-from-video-calls) has more on long meeting days.`,
      },
      { h: 'Long documents: budgets, reports and reviews' },
      {
        p: `Annual reports and budget workbooks mean small type and lots of numbers. Zoom in a step or two, increase the font size in drafts (you can shrink it again for the final version), and use search instead of scrolling through pages to find one figure. Print the longest documents if your office allows it and read them at a comfortable distance. If your December work runs on spreadsheets, [dry eyes for data analysts](/guides/dry-eyes-for-data-analysts) covers layout and screen setup in detail.`,
      },
      { h: 'Dark commutes on both ends of the day' },
      {
        p: `Around the winter solstice, many workers drive in at dawn and leave after dark. A cold car, a heater running on high and headlight glare on the way home are a hard finish to a long screen day. Aim the heat at the windshield and floor, keep the dashboard vents off your face, and if you’re squinting at oncoming lights, clean the inside of the windshield, which builds up a film in winter. [Dry eyes when it gets dark early](/guides/dry-eyes-when-it-gets-dark-early) covers the season’s short days.`,
      },
      { h: 'The office in December' },
      {
        p: `Heating runs hard in most buildings this month, and offices that thin out during the holiday weeks sometimes set the thermostat back, which tempts people to bring space heaters. A small heater under the desk blows warm, dry air upward. Point it at your feet, never toward your face, and switch it off when you leave. If a ceiling vent sits right above your chair, ask facilities whether it can be redirected. [Dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) has more desk-level fixes.`,
      },
      { h: 'Keeping a lubricating drop at your desk' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. For directions it says: {directions}. That’s three times a day, so a busy day can be built around it: once before the morning’s work, once at lunch, once mid-afternoon, or whatever pattern fits your schedule.`,
      },
      {
        p: `The label also reminds you: {tip}. Wash your hands before using it, especially after shaking hands at a holiday event. For storage, the panel says: {storage}. If your office turns the heat way down during a holiday shutdown, take the bottle home with you. Read this caution before you buy: {warnings}. Everything else is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'If your eyes still bother you in January' },
      {
        p: `The weeks after the crunch are a good gauge. If your eyes feel fine once the deadlines pass and you’re sleeping normally again, the crunch was probably the main factor. If dryness hangs on, or comes with other symptoms, don’t keep putting it off. The label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel worse in December at work?',
        a: `December combines long deadline days at a screen with heated, dry office air. Concentrating reduces how often and how completely you blink, and dry air speeds evaporation from the tear film.`,
      },
      {
        q: 'How do I rest my eyes between meetings?',
        a: `Leave a few minutes between meetings, look across the room or out a window, and blink slowly and fully several times. Closing your eyes for a short stretch before the next call helps too.`,
      },
      {
        q: 'Should I take eye drops home over the holiday office shutdown?',
        a: `If your office turns the heat down while it’s closed, yes. Quell’s storage line reads: {storage}. An unheated building can get colder than that over a long break.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-during-holiday-retail-shifts',
    title: 'Dry eyes during holiday retail shifts',
    description:
      'Seasonal retail means long shifts, bright lights, cardboard dust and drafty doors from late November to New Year. How to keep your eyes comfortable at work.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Holiday retail shifts dry out eyes through long hours, store air and the season’s pace. From Black Friday through after-Christmas returns, workers stand under bright lights near drafty doors, open dusty boxes and stare at scanners and registers. Take your full breaks, blink deliberately during slow moments, wash your hands before touching your eyes, keep a lubricating drop in your locker and use it as labeled, and see an eye doctor if dryness persists.`,
      },
      { h: 'The season, from behind the counter' },
      {
        p: `In 2026, Thanksgiving falls on Thursday, November 26, so Black Friday is November 27. From then on, stores add hours, weekends fill up, and the last days before Christmas (a Friday this year) get the longest lines. The Saturday after is the start of returns and gift-card shopping, and early January brings markdowns and inventory counts. For many seasonal hires, that’s five or six weeks of the busiest work the store sees all year.`,
      },
      { h: 'First seasonal job? What to expect for your eyes' },
      {
        p: `New hires spend their first days learning a handheld scanner, a register screen and a store layout, all of which mean intense, close focus. That kind of attention cuts down blinking, and eyes can feel dry and tired by the end of a shift even before the rush starts. New staff also tend to skip breaks to look busy. Don’t. A break is the one time in a shift you can close your eyes for a minute, wash your face and reset.`,
      },
      {
        list: [
          `At the register, glance up at the customer between scans; it gives your eyes a change of focus.`,
          `On a handheld scanner, hold the screen a little farther away and lower than your eyes.`,
          `Use slow minutes to blink fully a few times on purpose.`,
          `If you wear glasses, keep them clean so you’re not squinting through smudges.`,
        ],
      },
      { h: 'Gift wrap tables and glitter' },
      {
        p: `December retail comes with wrapping paper, tissue, ribbon and a surprising amount of glitter from cards, bags and decorations. Glitter and paper fibers stick to fingers and end up on lashes and eyelids, especially when you rub tired eyes. Keep a pack of wipes at the wrap station, wash your hands before touching your face, and if something gets in your eye, blink and let your tears work rather than rubbing. If the feeling of something in your eye doesn’t go away, or it hurts, get it checked.`,
      },
      { h: 'Freight days and early restocks' },
      {
        p: `Holiday freight often arrives early in the morning, before the doors open. Unloading and breaking down cardboard boxes releases fine fibers and dust, and stockrooms are often warmer and drier than the sales floor. Box cutters and stretch wrap add a reason to keep your eyes protected. Wear safety glasses if your store provides them, keep your face turned away when you pull boxes open, and wash up before going back to the floor.`,
      },
      { h: 'Curbside pickup and the parking lot' },
      {
        p: `Many stores now run curbside and order pickup through the holidays, which means trips from a heated store into cold wind and back, over and over. Cold wind dries the eyes quickly, and the warm store air that follows does the same. A hat with a brim, glasses or sunglasses, and turning your back to the wind while you load a trunk all help. Our guide on [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas.`,
      },
      { h: 'Your locker kit for the season' },
      {
        list: [
          `A bottle of lubricating eye drops, kept in its box or a small zip bag.`,
          `Clean tissues and a few hand wipes.`,
          `A glasses case and cleaning cloth if you wear glasses.`,
          `A spare hat or beanie for parking lot duty.`,
          `A note of your schedule, so you can plan when to use drops on your breaks.`,
        ],
      },
      {
        p: `If you work retail year-round, [dry eyes for retail workers](/guides/dry-eyes-for-retail-workers) covers the store itself in more depth.`,
      },
      { h: 'Using Quell on a shift' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Its directions: {directions}. With three drops a day in each eye, many people find it easiest to use one before work, one on the main break and one after the shift.`,
      },
      {
        p: `A few lines from the label matter in a store. On handling: {tip}. On storage: {storage}. A locker by the loading dock or a car in the employee lot in December may get colder than that, so keep the bottle in your bag or coat. The label also carries this caution: {warnings}. The full panel is on our [Drug Facts page](/drug-facts), and you can [order Quell here](/#buy).`,
      },
      { h: 'After the season ends' },
      {
        p: `When the rush is over and your shifts shrink back, your eyes should feel more like themselves. If they don’t, or if they’ve been bothering you in ways that go beyond dryness, see a professional. The label puts it this way: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long retail shift?',
        a: `Long shifts mean hours of close focus on scanners and registers, which reduces blinking, plus dry store air and dusty stockrooms. If eyes truly hurt rather than feel dry or tired, or vision changes, see an eye doctor.`,
      },
      {
        q: 'What should I do if glitter gets in my eye?',
        a: `Don’t rub it. Blink to let your tears move it, and wash your hands before touching your face. If you still feel something in your eye, or it hurts or your vision changes, get it checked by a doctor.`,
      },
      {
        q: 'When should I use eye drops during a retail shift?',
        a: `Quell’s directions read: {directions}. Many retail workers use one before the shift, one on the main break and one afterward, with clean hands each time.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-grading-before-winter-break',
    title: 'Dry eyes grading before winter break',
    description:
      'The last week before winter break piles exams, essays and grade deadlines onto teachers. How to grade without ending the semester with dry, sore eyes.',
    category: 'seasonal',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Grading before winter break dries eyes because it piles hours of close reading onto the end of a long semester in heated buildings. Teachers and professors read exams and essays on screens and paper, often late at night, and focused reading cuts down blinking. Grade in timed blocks, enlarge text on screen, rest your eyes between stacks, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why the last week before break is so hard on the eyes' },
      {
        p: `December gives teachers a perfect storm. High schools give semester exams and colleges hold finals, then grades are due within days. Elementary teachers write progress reports and comments. Add concerts, class parties, coverage for colleagues who are out sick and the general chaos of the last days before break. The grading itself gets squeezed into evenings and weekends, after a full day of talking, moving and looking at a projector screen.`,
      },
      {
        p: `Reading student work is close, focused effort. You’re hunting for errors, following an argument, checking a calculation. Blinks get fewer and shallower, and in a dry, heated classroom or living room, the tear film breaks up faster between them.`,
      },
      { h: 'Grading on a screen: settings that help' },
      {
        list: [
          `Zoom student documents up a step or two, so you’re not leaning in.`,
          `Match screen brightness to the room; a bright screen in a dark kitchen is hard to look at for long.`,
          `Use a separate monitor or a laptop stand to raise the screen to just below eye level.`,
          `Turn off notifications while grading, so your eyes aren’t pulled between windows.`,
          `If your platform lets you leave voice or video comments, use them for long feedback instead of typing.`,
        ],
      },
      { h: 'Grading on paper: light and posture' },
      {
        p: `Paper is often easier on the eyes than a screen, but only with good light. Use a desk lamp aimed at the page, not at your face, and sit up with the stack at a slight angle instead of flat on the table. If you have prescription reading glasses, wear them; squinting to save a trip to the other room adds strain. Every few papers, look across the room for a few seconds.`,
      },
      { h: 'Timed blocks instead of grading marathons' },
      {
        p: `A whole stack in one sitting sounds efficient, but your eyes and your consistency both drift after an hour or so. Try short blocks with real breaks:`,
      },
      {
        list: [
          `Grade for 25 to 30 minutes, then take five minutes away from the page or screen.`,
          `On exams, grade one question across the whole class before moving to the next; you’ll scan less.`,
          `Use a rubric with clear levels so you’re not rereading papers to compare them.`,
          `Stop at a set time each night instead of grading until your eyes give out.`,
        ],
      },
      { h: 'The classroom in December' },
      {
        p: `School buildings run their heat hard in December, and many classrooms have a unit ventilator or radiator right by the teacher’s desk. Craft projects with glitter, a holiday party or two, and hallway drafts each time a door opens all add to the mix. Move your grading spot away from the heater if you can, keep a box of tissues handy, and wash your hands before touching your eyes after a crafts day. [Dry eyes for teachers](/guides/dry-eyes-for-teachers) covers the classroom across the whole school year.`,
      },
      { h: 'The drive home for break' },
      {
        p: `Many teachers head out of town as soon as grades are in, sometimes right after the last bell. A long drive at the end of a draining week, with the heater on and the sun low in the afternoon, is hard on tired eyes. Get a night’s sleep first if you can, aim the heat at the windshield, wear sunglasses in low sun, and stop every couple of hours.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label gives its Uses as: {uses}. The directions read: {directions}. A practical routine for grading season might be one drop in each eye before school, one at lunch and one before an evening grading block.`,
      },
      {
        p: `Two more lines are worth knowing: {tip}. And: {storage}. Some school buildings turn the heat way down over winter break, so take any bottle from your desk drawer home with you. The panel also carries this caution: {warnings}. The full text is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'If your eyes don’t recover over break' },
      {
        p: `Two weeks away from grading is a natural check. If your eyes feel normal by New Year’s, the end-of-semester crush was likely the main factor. If dryness continues, or you notice pain or blurred vision, don’t wait for spring break. The label says: {stopUse} An eye doctor can find the cause and decide what to do. College students facing the same week from the other side can read [dry eyes during finals week](/guides/dry-eyes-during-finals-week).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after grading papers?',
        a: `Grading is close, focused reading, which reduces how often and how completely you blink, and it often happens late in heated rooms. Eyes that hurt rather than feel dry or tired, or vision changes, are a reason to see an eye doctor.`,
      },
      {
        q: 'How can teachers grade without straining their eyes?',
        a: `Grade in 25- to 30-minute blocks with short breaks, enlarge text on screen, use good light on paper, and stop at a set time each night. Grading one question across all exams also cuts down scanning.`,
      },
      {
        q: 'Should I take my eye drops home over winter break?',
        a: `Yes, if they’re kept at school. Quell’s storage line reads: {storage}. Some buildings lower the heat a lot while school is closed, so a desk drawer can get colder than that.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-animators',
    title: 'Dry eyes for animators',
    description:
      'Frame-by-frame drawing, scrubbing timelines and crunch before delivery all slow your blinking. Practical ways animators can keep their eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Animators get dry eyes because the work demands long, unbroken focus on small details: flipping between frames, tracking motion across a timeline, and drawing on a pen display inches from the face. That focus cuts blinking, and studio air conditioning speeds evaporation. Build breaks into the workflow, set up your display at a comfortable height and distance, use a lubricating drop as its label directs, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why animation work is hard on the eyes' },
      {
        p: `Animation asks the eye to do something unusual: compare nearly identical images over and over, looking for tiny differences in a line, a pose or a shadow. Whether you’re drawing in 2D, posing a rig in 3D or nudging a puppet in stop motion, you’re watching for movement that lasts a fraction of a second. People blink less when they’re concentrating like that, and many blinks stop short of closing fully, so the tear film dries in patches between them.`,
      },
      {
        p: `Then there’s the setting. Studios and home offices are often dim to make screens look accurate, air conditioning or heating runs constantly to keep machines and people comfortable, and deadlines push sessions late into the evening.`,
      },
      { h: 'Pen displays and drawing tablets' },
      {
        p: `Drawing directly on a screen brings it close, and a pen display laid flat on a desk has you looking down for hours. A tablet with a separate monitor keeps the screen farther away but splits your attention between hand and screen. Either can work if you set it up deliberately:`,
      },
      {
        list: [
          `Prop a pen display on a stand at an angle, so you’re not hunched with your face over it.`,
          `Keep it at least a forearm’s length away when you’re reviewing rather than drawing.`,
          `With a tablet and monitor, set the monitor’s top edge at or slightly below eye level.`,
          `Turn the screen brightness down to match the room, and add a lamp behind or beside the display instead of working in darkness.`,
        ],
      },
      { h: 'Flipping frames and onion skinning' },
      {
        p: `Rolling and flipping through drawings, or toggling onion skins to check spacing, is classic stare-without-blinking territory. Make a habit of blinking at the moment you finish a flip, as if it’s part of the motion. After a pass through a shot, look away from the screen for a few seconds at something across the room. Your eyes refocus, and your next pass is often fresher too.`,
      },
      { h: 'Playblasts, renders and natural breaks' },
      {
        p: `3D and compositing work comes with built-in pauses: playblasts, test renders, simulation caches, file saves to a server. Those minutes are perfect eye breaks, but most people spend them on their phone, which is just another screen. Stand up instead, look out a window, or close your eyes for a minute. In stop motion, the time between frames while you adjust a puppet is a chance to step back from the set and the monitor and blink normally. [Dry eyes for video editors](/guides/dry-eyes-for-video-editors) covers similar render breaks from the editing side.`,
      },
      { h: 'Color, lighting and the dark room' },
      {
        p: `Color-critical work pushes many animators into rooms with blackout curtains and a single calibrated monitor. A completely dark room with one bright screen is hard on comfort. Soft, neutral room lighting behind the monitor keeps your eyes from working so hard and usually doesn’t affect color judgment the way direct light on the screen does. Check with your lead or pipeline if your studio has standards for the review room, and follow them for final color, but you don’t have to animate in the dark.`,
      },
      { h: 'Crunch before delivery' },
      {
        p: `Festival deadlines, client deliveries and end-of-season pushes all bring long days and short nights. Tired eyes feel drier, and long hours mean even fewer breaks. A few habits that help during crunch:`,
      },
      {
        list: [
          `Set a timer for roughly every 20 minutes to look away and blink a few times.`,
          `Keep heating and cooling vents from blowing at your desk; move the chair or redirect the vent.`,
          `Use your lunch break away from screens, even for 15 minutes.`,
          `Stop at a reasonable hour when you can; rested eyes make for a better morning at the desk.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains what’s happening to the eye during long screen sessions.`,
      },
      { h: 'Using a lubricating drop in the studio' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. The directions read: {directions}. Many people use one dose before starting work, one around lunch and one in the late afternoon.`,
      },
      {
        p: `Clean hands matter, because you’ve been handling a stylus, a puppet, clay or a keyboard: {tip}. Store the bottle as the label says: {storage}. A desk drawer is fine; a windowsill in summer or a car between studio and home may not be. Read this caution before buying: {warnings}. The full panel is on our [Drug Facts page](/drug-facts), and you can [order Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back between projects, or your vision blurs and doesn’t clear with a few blinks, get it looked at. The label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do animators get dry eyes?',
        a: `Animation means long stretches of focused comparison between frames, which reduces how often and how completely you blink. Dim rooms, air-conditioned studios and crunch hours add to it.`,
      },
      {
        q: 'How should I set up a pen display to keep my eyes comfortable?',
        a: `Prop it on a stand at an angle rather than flat, keep it a comfortable distance from your face, and turn brightness down to match the room. A lamp beside or behind the display helps more than working in the dark.`,
      },
      {
        q: 'How can animators rest their eyes during crunch?',
        a: `Use renders, playblasts and saves as screen-free breaks, look across the room every 20 minutes or so, and keep vents from blowing at your desk. Getting some sleep helps tired eyes too.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-podcasters',
    title: 'Dry eyes for podcasters and radio hosts',
    description:
      'Reading scripts, watching levels, editing waveforms and sitting under ring lights add up to long staring sessions. Eye comfort tips for podcasters and hosts.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Podcasters and radio hosts get dry eyes from long stretches of reading scripts, watching levels and editing audio on screens, often in small, closed studios with little fresh air and, for video shows, bright lights aimed at the face. Focus cuts blinking, and dry studio air speeds evaporation. Read from a screen set at eye level, use breaks between segments, keep lights off-axis, use a lubricating drop as labeled, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why audio work still strains your eyes' },
      {
        p: `It sounds like an ears job, but most of the work happens through the eyes. You read ad copy and show notes, track a guest’s answers against your question list, watch meters to keep levels clean, and keep an eye on the clock or a chat window. After recording, editing means hours scanning waveforms for breaths, clicks and ums. All of that is the same kind of fixed, focused looking that slows your blink rate.`,
      },
      { h: 'Small booths and stuffy studios' },
      {
        p: `Recording spaces are built to keep sound out, which often means closed doors, no open windows and blankets or foam on every wall. Some booths get warm and stuffy; others sit under a ceiling vent that runs cold. Either way, the air isn’t friendly to the tear film for long.`,
      },
      {
        list: [
          `Open the door and air the booth out between recordings.`,
          `If a vent blows on you, redirect it or move the chair; even a quiet vent can be noticeable to your eyes over an hour.`,
          `Don’t park a space heater at your feet pointing up at your face in a cold booth.`,
          `Step out of the booth between segments rather than sitting through every break.`,
        ],
      },
      { h: 'Reading scripts and ad reads' },
      {
        p: `Reading aloud is its own challenge. You’re trying to sound natural while your eyes move steadily across the text, and many hosts barely blink during a long ad read. Make it easier: enlarge the font on your script so you’re not leaning toward the screen, put the reading screen or tablet at eye level next to the microphone instead of flat on the desk, and mark natural pauses where you can blink, breathe and look up. For live shows, a printed rundown in large type is sometimes easier than a screen.`,
      },
      { h: 'Video podcasts and ring lights' },
      {
        p: `Many shows now record video too, with cameras, ring lights or softboxes pointed at the hosts. A light right in front of your eyes makes you squint and can feel warm on the face. Move the light slightly off to the side and above eye level, or bounce it off a wall, and lower its brightness to the level the camera actually needs. Look at your co-host or guest rather than staring into the lens the whole time. [Dry eyes for streamers](/guides/dry-eyes-for-streamers) has more on on-camera lighting setups.`,
      },
      { h: 'Editing waveforms for hours' },
      {
        p: `Editing can take much longer than the recording itself. You’re watching a scrolling waveform, zooming in on tiny spikes and replaying sections, often late in the evening. A few changes help:`,
      },
      {
        list: [
          `Increase the waveform height and interface size, so you’re not peering at thin lines.`,
          `Close your eyes while you listen back to a section; your ears don’t need your eyes for that part.`,
          `Edit in blocks of about 30 minutes with a short break between them.`,
          `Match monitor brightness to the room, and keep a lamp on so the screen isn’t the only light.`,
        ],
      },
      { h: 'Interviews, guests and live shows' },
      {
        p: `Remote interviews mean watching a guest on a video call while you listen and take notes, which can be hours of focused looking. In-studio interviews often mean holding eye contact for long stretches. Either way, it helps to glance down at your notes, then back, which naturally prompts a blink. For live radio, use music beds, breaks and traffic or weather segments as short eye rests.`,
      },
      { h: 'Using a lubricating drop around a recording' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. Directions: {directions}. Since your eyes may water for a moment after a drop, many hosts put it in a few minutes before going on mic or on camera rather than right before reading a script.`,
      },
      {
        p: `Wash your hands first, especially after handling shared headphones or microphones, and keep the tip clean: {tip}. Keep the bottle somewhere steady in temperature: {storage}. Note this caution before ordering: {warnings}. The [Drug Facts page](/drug-facts) has the whole label, and you can [buy Quell from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after a weekend off the mic, or you notice pain or vision changes, it’s time for a professional opinion. The label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I record a podcast?',
        a: `Recording means reading scripts, watching levels and keeping eye contact, all of which reduce blinking, often in a closed booth with stale or vent-blown air. Breaks between segments and an eye-level script screen help.`,
      },
      {
        q: 'Where should I put my script when reading on mic?',
        a: `Put the screen or tablet at about eye level, next to the microphone, with the font enlarged so you don’t lean in. Mark pauses in the copy where you can blink and look up.`,
      },
      {
        q: 'Can I use eye drops right before going live?',
        a: `Your eyes may water for a moment after a drop, so many hosts use it a few minutes before going on air or camera. Follow the directions on the label, and use clean hands.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-theater-actors',
    title: 'Dry eyes for theater actors',
    description:
      'Script work, tech week, hot dressing rooms, stage makeup and long runs all dry the eyes. What theater actors can do from first rehearsal to closing night.',
    category: 'using',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Theater actors get dry eyes from a whole production cycle: weeks of reading scripts, long tech rehearsals in dark houses, dressing rooms full of bright mirror bulbs, powder and hairspray, and performances under hot lights. Focused reading and intense stage moments cut blinking. Take breaks during tech, keep makeup and sprays away from your eyes, use a lubricating drop as its label directs and away from performance times, and see an eye doctor if dryness persists.`,
      },
      { h: 'From table read to closing night' },
      {
        p: `A show puts different demands on the eyes at each stage. Early rehearsals are mostly reading: the script, notes, blocking marked in pencil. Off-book weeks bring late nights memorizing lines on a phone or tablet. Tech week stacks 10- or 12-hour days in a dark auditorium. Then the run itself brings the same routine six or eight times a week: makeup, hair, wigs, lights, and two hours of heightened focus. [Dry eyes for musicians and stage performers](/guides/dry-eyes-for-musicians-and-performers) covers stage lighting, haze and touring; this guide follows an actor’s own production calendar.`,
      },
      { h: 'Script work and memorizing lines' },
      {
        p: `Memorizing is staring at text, repeating it, and staring again. Many actors run lines from an app or a PDF late at night, in bed, with the phone a few inches from their face. That’s a recipe for gritty eyes in the morning.`,
      },
      {
        list: [
          `Print the script in a larger font and run lines on paper when you can.`,
          `Run lines aloud with your eyes closed or looking away, checking the page only when you’re stuck.`,
          `Work with a scene partner or a recording, so your ears do more of the work than your eyes.`,
          `Stop screen-based line work a while before bed.`,
        ],
      },
      { h: 'Tech week in a dark house' },
      {
        p: `Tech means holding for light cues, repeating transitions and standing in place while designers adjust. Actors look into bright instruments from a dark stage, then sit in a dark house watching other scenes, often with heating or air conditioning running full blast for a mostly empty theater. Use holds to close your eyes for a few seconds. Bring a layer so you’re not tempted to sit right under a heating vent. If an instrument is glaring straight into your eyes during a long hold, it’s fine to ask the stage manager whether you can look slightly off it while they work.`,
      },
      { h: 'The dressing room' },
      {
        p: `Dressing rooms are often small and warm, lined with bright mirror bulbs, and full of airborne products: setting powder, hairspray, dry shampoo, wig adhesives and makeup remover. Some of those end up in the eyes, and the bright bulbs at close range make you squint while you work around your eyes.`,
      },
      {
        list: [
          `Close your eyes and turn your face away when anyone sprays hair products nearby, and ask castmates to do the same for you.`,
          `Apply powder with your eyes closed, then wait a moment before opening them.`,
          `Keep eye makeup brushes and sponges clean, and don’t share eye products.`,
          `If you can, do your eye makeup last, and sit back a little from the mirror bulbs.`,
        ],
      },
      {
        p: `Quell’s label doesn’t give directions for using it with makeup, so ask your eye doctor or a pharmacist how to time drops around stage makeup. [Eye drops before or after makeup?](/guides/eye-drops-before-or-after-makeup) covers what’s generally known.`,
      },
      { h: 'Onstage: intense moments and long stares' },
      {
        p: `Big scenes often call for steady, focused looks: a held gaze at a scene partner, a moment staring out past the audience. Actors sometimes resist blinking on purpose to keep the moment clean. Your eyes need those blinks, though, and audiences rarely notice a natural one. Find places in the blocking where a blink, a turn of the head or a look down fits the character, and use them. Exits and quick changes are chances to blink fully and rest your eyes for a second.`,
      },
      { h: 'Long runs and eight shows a week' },
      {
        p: `A long run settles into a rhythm, and eye habits can be part of it. Use your pre-show routine to check in on your eyes: if they already feel dry before half-hour, that’s worth noting. Keep the dressing room air from getting too hot, sleep as much as the schedule allows, and give your eyes a screen break between a matinee and an evening show instead of scrolling the whole time.`,
      },
      { h: 'Using a lubricating drop around shows' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses: {uses}. And the directions: {directions}. Since your eyes may water for a moment after a drop, many actors use one before makeup call or well before places, and again after the show, not seconds before an entrance.`,
      },
      {
        p: `Wash off makeup residue from your hands first, and remember this line: {tip}. Keep the bottle in a bag in the dressing room, not on a hot makeup counter under the bulbs, and store it as directed: {storage}. Read the label caution before buying: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Makeup or hairspray in the eye usually settles with blinking, but some symptoms need a professional. The label says: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait for the show to close.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry during tech week?',
        a: `Tech week means long days in a dark auditorium, looking into bright lights during holds, often with heating or air conditioning running hard. Closing your eyes during holds and staying out of vent drafts can help.`,
      },
      {
        q: 'How do actors keep hairspray out of their eyes?',
        a: `Close your eyes and turn your face away whenever products are sprayed nearby, and ask castmates to warn you. Apply powder with your eyes closed, too, and wait a moment before opening them.`,
      },
      {
        q: 'When should actors use eye drops before a show?',
        a: `Many actors use a drop before makeup call or well before places, since eyes may water for a moment afterward. Quell’s label doesn’t give directions for use with stage makeup, so ask an eye doctor or pharmacist about timing.`,
      },
    ],
  },

  {
    slug: 'can-you-put-eye-drops-in-your-nose',
    title: 'Can you put eye drops in your nose?',
    description:
      'Lubricating eye drops are labeled for the eyes, not the nose. What Quell’s label says, why a dry nose needs a different product, and what to do instead.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `No. Lubricating eye drops are made and labeled for the eyes, and Quell’s warning says it plainly: {warnings}. A dry or stuffy nose calls for a product labeled for nasal use, and a pharmacist can point you to one. If your nose and eyes both feel dry, you can care for each with its own product, used the way its own label directs.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `The Drug Facts panel has two lines that answer this. The Uses line describes what the drop is for: {uses}. That’s about the eye, and only the eye. The warning repeats the point in a different way: the drop is for use in the eyes. Nothing on the panel describes putting it anywhere else, and no amount or frequency is given for any other part of the body. [What does “for use in the eyes only” mean?](/guides/what-does-for-use-in-the-eyes-only-mean) walks through that line in more detail.`,
      },
      { h: 'Why people think about it' },
      {
        p: `The question usually comes up in winter, when heated indoor air dries out both the eyes and the inside of the nose at the same time. Someone has a bottle of eye drops on the nightstand and wonders if the same thing would help their nose. It makes intuitive sense: both are moist tissues, and both feel the dry air. Some people also notice that after they put drops in their eyes, they can feel or even taste a little in the back of the nose or throat, and they assume that means the products are interchangeable.`,
      },
      {
        p: `They aren’t. Each product is labeled for a specific use, with directions written for that use. An eye drop’s formula, bottle and dose are designed around the eye. A nasal product is designed around the nose. Using one in place of the other means using it in a way nobody has given you directions for.`,
      },
      { h: 'Why you can feel eye drops in your nose' },
      {
        p: `That trickle is normal. Tears drain from the inner corner of each eye into the nose, which is also why your nose runs when you cry. A drop that goes into the eye follows the same route, so a little can reach the nose and throat after you use it. That doesn’t mean the drop is meant for the nose; it’s just where excess fluid from the eye ends up. Our guide on [why eye drops run down your face](/guides/why-do-eye-drops-run-down-my-face) explains what happens to the extra, and [why you can taste eye drops](/guides/why-can-i-taste-eye-drops) covers the taste.`,
      },
      { h: 'What to do for a dry nose instead' },
      {
        p: `A dry nose is a question for a pharmacist, who can suggest a product labeled for nasal use and explain how to use it. In the meantime, a few general steps help both your nose and your eyes in dry indoor air:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Turn the heat down a little at night.`,
          `Keep heating and car vents from blowing at your face.`,
          `If nosebleeds, pain or congestion keep coming back, see a doctor rather than trying more products.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers the eye side of room humidity.`,
      },
      { h: 'If you already put eye drops in your nose' },
      {
        p: `If it was a one-time mistake, don’t panic. Blow your nose gently and don’t repeat it. If you feel unwell, if the drops were swallowed, or if you have questions, follow the label: {swallowed}. You can also call a pharmacist. If it was a child who did it, the same label line applies, and [keeping eye drops out of children’s reach](/guides/keep-out-of-reach-of-children) has tips for storing bottles safely at home.`,
      },
      { h: 'Keeping eye and nose products apart' },
      {
        p: `Small bottles of eye drops and nasal sprays can look alike, especially on a dark nightstand or in a travel bag. Mix-ups happen. A few habits help:`,
      },
      {
        list: [
          `Store eye products and nose products in different places, such as a drawer for one and a shelf for the other.`,
          `Read the label every time before using a small bottle, especially at night.`,
          `Use a colored band or sticker on one type so you can tell them apart by feel or at a glance.`,
          `Keep each product in its own box when traveling.`,
        ],
      },
      { h: 'Using Quell the way the label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions: {directions}. Keep the tip clean: {tip}. Store it as labeled: {storage}. Before using it, read the caution about allergies on the panel, and if you have questions about a use the label doesn’t cover, ask your pharmacist or eye doctor. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can you put lubricating eye drops in your nose?',
        a: `No. Lubricating eye drops are labeled for the eyes, and Quell’s warning reads: {warnings}. For a dry nose, ask a pharmacist about a product labeled for nasal use.`,
      },
      {
        q: 'Can I use eye drops for a dry nose?',
        a: `Eye drops aren’t labeled or dosed for the nose, so they aren’t the right product. A pharmacist can recommend something made for nasal dryness, and a bedroom humidifier helps both nose and eyes in winter.`,
      },
      {
        q: 'What happens if you accidentally put eye drops in your nose?',
        a: `A one-time mistake usually just means blowing your nose gently and not repeating it. If drops were swallowed or you feel unwell, follow the label: {swallowed}.`,
      },
    ],
  },

  {
    slug: 'can-you-use-cold-eye-drops',
    title: 'Can you use cold eye drops?',
    description:
      'A drop that feels cold can be startling. What Quell’s storage line says, how to bring a chilly bottle back to room temperature, and when to call first.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `A drop that’s cool from a chilly room is still the same drop, but the label is what sets the limits. Quell’s storage line reads: {storage}. If a bottle has stayed within that range, let it sit at room temperature before use so the drop feels comfortable. If it sat colder than that, check its color and appearance first, and ask a pharmacist or call us before using it if anything looks off.`,
      },
      { h: 'Why people ask' },
      {
        p: `Cold drops come up in a few situations. A bottle rides in a coat pocket on a winter walk, sits in a car on a cold morning, or spends the day in a drafty locker. Some people keep eye drops in the refrigerator because they like the cool feeling, and others find a bottle in the fridge that someone else put there. And in winter, simply living in a cool house can make a drop feel noticeably colder going in than it does in summer.`,
      },
      { h: 'What Quell’s label says about temperature' },
      {
        p: `The only temperature guidance on the panel is the storage line: {storage}. That’s the range the label tells you to keep the bottle in. It doesn’t say how cold a drop should be at the moment you use it, and it doesn’t say what to do if the bottle spent time outside the range. Those are fair questions to bring to a pharmacist or to us.`,
      },
      {
        p: `Refrigeration isn’t part of the storage line, so there’s no need to keep Quell in the fridge. A refrigerator is kept much colder than a room, and colder than the low end of that labeled range. [Should eye drops be refrigerated?](/guides/should-eye-drops-be-refrigerated) goes into that question in more depth.`,
      },
      { h: 'Using a drop that’s simply cool' },
      {
        p: `If your bottle stayed in a cool house or a coat pocket and never left the labeled range, the main issue is comfort. A cool drop can make you flinch or blink before it lands, which makes it easy to miss the eye. To make it easier:`,
      },
      {
        list: [
          `Let the closed bottle sit at room temperature for a while before using it.`,
          `Hold the closed bottle in your hand for a minute or two to take the chill off.`,
          `Don’t warm it in a microwave, on a heater, in hot water or in direct sun.`,
          `Steady the hand holding the bottle on your forehead, so a startled flinch doesn’t move the tip.`,
        ],
      },
      {
        p: `If cool drops make you flinch, [how to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) has more techniques.`,
      },
      { h: 'If the bottle got colder than the label allows' },
      {
        p: `A bottle left in a car on a January night, in an unheated garage or near a freezer may have gone well below the labeled range. The label doesn’t tell you what that does to the product, so don’t guess. Check two things the label does cover:`,
      },
      {
        list: [
          `Appearance. The label says: {milky}. {appearance}`,
          `Color change. The label lists a do-not-use condition: {doNotUse}.`,
        ],
      },
      {
        p: `If the drop doesn’t look the way it normally does, don’t use it. If it looks normal but you know it got very cold, ask a pharmacist, or contact us at {phone} ({hours}) before using it. [Can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) covers winter car storage in particular.`,
      },
      { h: 'Does a cold drop work differently?' },
      {
        p: `The label doesn’t make any claim about temperature changing how the drop works, so neither can we. What a cool drop does change is how it feels, and for some people, how it stings for a second. A drop that’s room temperature tends to feel closer to your own tears. If a drop stings or burns in a way that doesn’t settle quickly, at any temperature, stop and follow the label’s guidance on when to ask a doctor. [Why do eye drops sting?](/guides/why-do-eye-drops-sting) looks at the common reasons.`,
      },
      { h: 'Keeping a bottle in range through winter' },
      {
        list: [
          `Carry it in an inside coat pocket or a bag, not an outer pocket exposed to wind.`,
          `Don’t leave it in the car, especially on cold nights.`,
          `Keep it away from windowsills and exterior walls in a cold house.`,
          `At work, keep it in a desk drawer rather than a locker near a loading door.`,
        ],
      },
      {
        p: `The same range applies in summer, when a hot car is the bigger risk. [How to store eye drops](/guides/how-to-store-eye-drops) covers both ends.`,
      },
      { h: 'What else the label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions: {directions}. Its handling line: {tip}. And its caution: {warnings}. If your eyes feel worse rather than better, the label says: {stopUse} The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is it OK to put cold eye drops in your eyes?',
        a: `A drop that’s cool but stayed within the label’s storage range is mainly a comfort issue; let it come to room temperature first. If the bottle got colder than the label allows, check its appearance and ask a pharmacist before using it.`,
      },
      {
        q: 'How do I warm up eye drops?',
        a: `Let the closed bottle sit at room temperature, or hold it in your hand for a minute or two. Don’t use a microwave, hot water, a heater or direct sun.`,
      },
      {
        q: 'What should I do if my eye drops feel too cold going in?',
        a: `Wait until the bottle reaches room temperature before your next dose, and steady your hand on your forehead so a flinch doesn’t make you miss. If a drop stings in a way that doesn’t settle, stop and ask a doctor.`,
      },
    ],
  },

  {
    slug: 'can-you-use-eye-drops-while-fasting',
    title: 'Can you use eye drops while fasting?',
    description:
      'Quell’s label doesn’t mention fasting. Who to ask for a religious fast or a fast before a procedure, and how to plan the label’s doses around fasting hours.',
    category: 'choosing',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Quell’s label doesn’t mention fasting, so it can’t settle the question. For a religious fast, whether eye drops are allowed is a question for the religious leader or scholar you follow. For a fast before surgery, a procedure or lab work, ask the team giving the instructions. If drops are allowed only at certain hours, you can plan the label’s directions around them: {directions}.`,
      },
      { h: 'Why people ask about eye drops and fasting' },
      {
        p: `The question comes up for two main reasons. First, many religious traditions include fasts that limit what may enter the body during certain hours, and people want to know whether an eye drop counts. Second, hospitals and clinics often ask patients not to eat or drink before anesthesia, a procedure or some blood tests, and people wonder whether that rule covers their everyday drops.`,
      },
      {
        p: `There’s also a physical reason the question feels reasonable. After you put in a drop, some of it drains from the inner corner of the eye into the nose and throat, the same path your tears take. Some people notice a faint taste afterward. [Why can I taste eye drops?](/guides/why-can-i-taste-eye-drops) explains that route.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `The Drug Facts panel covers what the drop is for, how much to use, cautions and storage. Its Uses line reads: {uses}. Its directions are the one-line instruction quoted above. Nothing on the panel addresses fasting of any kind, religious or medical, and we won’t fill that gap with a guess.`,
      },
      { h: 'Religious fasts: who to ask' },
      {
        p: `Traditions and teachers differ in how they view eye drops during a fast, and the answer can depend on your own circumstances. This site can’t answer that question for you. The person to ask is the imam, rabbi, priest, pastor or other religious authority whose guidance you follow. It helps to bring specifics:`,
      },
      {
        list: [
          `What the product is: an over-the-counter lubricating eye drop, used in the eyes only.`,
          `How it’s used: one drop at a time, with the dose and frequency on the label.`,
          `Why you use it: dryness that bothers you during the day, or that gets worse in dry indoor air.`,
          `That some of the drop can drain into the throat, which is often part of what’s being asked.`,
        ],
      },
      { h: 'Planning doses around fasting hours' },
      {
        p: `If your guidance allows drops only outside fasting hours, the directions can often be spread across the hours when you may use them. The label’s directions are: {directions}. During a dawn-to-sunset fast, for example, a person might plan one dose before the fast begins, one soon after it ends and one later in the evening. Whether that pattern suits you is between you and your religious adviser, and if dryness during the fasting hours becomes hard to manage, talk with an eye doctor.`,
      },
      {
        p: `Other ways to make fasting hours easier on the eyes don’t involve anything entering the body:`,
      },
      {
        list: [
          `Keep heating and air conditioning vents from blowing at your face.`,
          `Take regular breaks from screens and blink fully a few times.`,
          `Wear sunglasses outdoors on windy or bright days.`,
          `Use a humidifier in the bedroom if the air is dry.`,
        ],
      },
      { h: 'Fasting before surgery, a procedure or blood work' },
      {
        p: `Medical fasting instructions vary by procedure and by the team giving them. Some say “nothing by mouth” and expect you to keep taking certain medicines; others list exactly what to stop. Don’t assume either way. Call the office that gave you the instructions and ask specifically about your eye drops, or mention them at your pre-procedure appointment. Bring the bottle or a photo of the label so they can see exactly what it is.`,
      },
      {
        p: `If you’re having an eye exam rather than a procedure elsewhere in the body, the question is a little different. [Should you use eye drops before an eye exam?](/guides/using-eye-drops-before-an-eye-exam) covers that situation.`,
      },
      { h: 'If drops aren’t allowed for a while' },
      {
        p: `Going without drops for a day or for a long stretch of hours is usually a comfort issue rather than an emergency. Do what you can with the environment: stay out of drafts, rest your eyes, and avoid long screen sessions. If your eyes start to hurt, your vision changes, or the dryness becomes more than mild, don’t simply wait it out. The label says: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'A few label lines worth knowing anyway' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Before using it at any time, read the caution: {warnings}. On handling: {tip}. If any is swallowed, the label says: {swallowed}. The full panel is on our [Drug Facts page](/drug-facts), and our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers when not to wait.`,
      },
    ],
    faq: [
      {
        q: 'Do eye drops break a fast?',
        a: `That depends on the fast. For a religious fast, ask the religious authority you follow, since traditions differ. For a fast before a medical procedure, ask the team that gave you the instructions.`,
      },
      {
        q: 'Can I use eye drops before surgery if I’m told not to eat or drink?',
        a: `Ask the office that gave you the fasting instructions, and tell them exactly which drops you use. Rules vary by procedure, so don’t assume eye drops are included or excluded.`,
      },
      {
        q: 'How can I fit eye drops around fasting hours?',
        a: `If your guidance allows drops only outside fasting hours, you can spread the label’s doses across those hours, such as before the fast begins and in the evening after it ends.`,
      },
    ],
  },

  {
    slug: 'what-does-caution-should-be-used-mean',
    title: 'What “caution should be used” means on a label',
    description:
      'Quell’s warning opens with “caution should be used” for people with egg or bird allergies. What that phrase asks of you, and how it differs from do not use.',
    category: 'label',
    addedOn: '2026-11-21',
    body: [
      {
        p: `“Caution should be used” on a drug label means the product isn’t forbidden for the people named, but they should stop and check before using it. On Quell, the warning reads: {warnings}. If you have an egg or bird allergy, the practical step is to ask your doctor or allergist before your first drop, with the full ingredient list in hand.`,
      },
      { h: 'Where the phrase appears on Quell’s panel' },
      {
        p: `It opens the Warnings section of the Drug Facts panel, before the do-not-use line, the when-using line, the stop-use list and the keep-out-of-reach line. Its position matters: it’s the first thing the Warnings section asks you to consider, before you’ve opened the bottle. The second half of the same line, about use in the eyes only, is covered in [what “for use in the eyes only” means](/guides/what-does-for-use-in-the-eyes-only-mean).`,
      },
      { h: 'Caution is not the same as do not use' },
      {
        p: `Drug labels use a few different levels of language, and the difference is worth knowing:`,
      },
      {
        list: [
          `“Caution should be used” names a group of people who need to think before using the product. It doesn’t say they can’t; it says the decision deserves care.`,
          `“Do not use” describes a situation where the product shouldn’t be used at all. On Quell, that line is: {doNotUse}.`,
          `“Stop use and ask a doctor if” tells you when to quit after you’ve started, based on what you notice.`,
          `“When using this product” gives handling instructions that apply to everyone.`,
        ],
      },
      {
        p: `So a caution sits between a general instruction and a hard stop. It’s addressed to specific readers, and it puts the decision in their hands, ideally with professional advice. [Do not use vs. stop use on a drug label](/guides/do-not-use-vs-stop-use-on-a-drug-label) covers the other two levels in depth.`,
      },
      { h: 'Who the caution is written for' },
      {
        p: `Quell’s caution names people with egg or bird allergies. The reason is in the ingredient list: emu oil, which comes from a bird, is one of the inactive ingredients. Here is the full list as printed: {inactives}. If you’ve ever reacted to eggs, poultry or feathers, or a doctor has told you that you have one of those allergies, this line is about you.`,
      },
      {
        p: `If you don’t know whether you have one of those allergies, that uncertainty is itself a reason to ask before using the product. [Egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell) is the shorter, original page on this subject.`,
      },
      { h: 'What to do if the caution applies to you' },
      {
        list: [
          `Don’t start the bottle yet. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t need to send it back.`,
          `Take the ingredient list to your doctor or allergist, or show them our [Drug Facts page](/drug-facts) on your phone.`,
          `Ask specifically about the emu oil, since that’s the ingredient behind the caution.`,
          `Follow their advice. If they say not to use it, don’t.`,
        ],
      },
      { h: 'Buying for someone else' },
      {
        p: `A caution is easy to overlook when you order for a parent, partner or friend. Before you buy, ask them about egg and bird allergies directly. If you’re giving Quell as a gift and can’t ask without spoiling the surprise, include a note pointing them to the warning line, and remind them that an unopened bottle can be refunded. We sell only to buyers 18 and older, but the person using the drops is the one the caution is written for.`,
      },
      { h: 'If you used it and something feels wrong' },
      {
        p: `Stop using it. The label’s stop-use guidance applies to everyone, not just people named in the caution: {stopUse} Swelling of the eyelids or face, trouble breathing or a rash spreading beyond the eyes calls for urgent medical care, not a wait-and-see approach. Bring the bottle or the ingredient list with you.`,
      },
      { h: 'Why cautions exist on OTC labels' },
      {
        p: `An over-the-counter label is written so you can make a safe decision without a prescription or a pharmacist’s explanation. A caution line is one of the tools that makes that possible: it flags a specific risk for specific people, in plain language, at the top of the warnings. It’s worth reading every time you try a new product, even one in a familiar category, because ingredient lists differ from brand to brand.`,
      },
      { h: 'The rest of the panel' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. Its handling line: {tip}. Its storage line: {storage}. For questions about the label, you can reach {company} at {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'What does “caution should be used” mean on a drug label?',
        a: `It means the people it names should check before using the product, usually with a doctor or pharmacist. It isn’t a ban, but it flags a specific risk worth discussing first.`,
      },
      {
        q: 'Is a caution the same as a warning not to use a product?',
        a: `No. A caution asks the people it names to take care and check first. A “do not use” line describes a situation where the product shouldn’t be used at all.`,
      },
      {
        q: 'Why does Quell have a caution about egg and bird allergies?',
        a: `One of its inactive ingredients is emu oil, which comes from a bird. People with egg or bird allergies should ask a doctor or allergist before using it.`,
      },
    ],
  },

  {
    slug: 'what-does-relieve-dryness-of-the-eye-mean',
    title: 'What “relieve dryness of the eye” means',
    description:
      'The second half of Quell’s Uses line says the drop is “to relieve dryness of the eye.” What each word covers, what it leaves out, and when to look further.',
    category: 'label',
    addedOn: '2026-11-21',
    body: [
      {
        p: `“To relieve dryness of the eye” is the second half of Quell’s Uses line, and it means the drop is meant to ease the feeling of dryness on the eye’s surface. It doesn’t promise to remove the cause, last a set time, or cover other symptoms. The full line reads: {uses}. If dryness keeps returning or comes with pain or vision changes, an eye doctor should take a look.`,
      },
      { h: 'Where the phrase sits on the label' },
      {
        p: `The Uses section is the part of a Drug Facts panel that says what a product is for. Quell’s Uses line has two parts joined by “or”: a protectant use and a relief use. The first part, about protecting against further irritation, has its own guide: [what “protectant” means on eye drops](/guides/what-does-protectant-mean-on-eye-drops). This page looks at the second part, word by word. [The Uses section on an eye drop label](/guides/the-uses-section) covers the section as a whole.`,
      },
      { h: '“Relieve”: easing, not fixing' },
      {
        p: `To relieve something is to make it less of a problem. It’s a modest verb on purpose. It doesn’t say the dryness goes away for good, and it doesn’t say how quickly or for how long the drop helps. Those limits matter when you read about eye drops online. A website, an ad or a review may describe results in stronger terms, but the Uses line is the statement that goes with the product, and “relieve” is its word.`,
      },
      {
        p: `In practice, relief from a lubricating drop depends on what’s drying your eyes in the first place. Tears keep being made, spread by blinking, evaporated and drained, and a drop joins that cycle. If the air is dry, a vent is blowing at you, or you’re staring at a screen without blinking, those conditions keep working on the tear film after the drop is in.`,
      },
      { h: '“Dryness”: a feeling people describe in many ways' },
      {
        p: `Dryness is a sensation, and people put it in different words. Some say their eyes feel dry. Others say gritty, sandy, scratchy, tired or tight, or that it feels like something is in the eye. Some people even notice watering, because irritated eyes can produce extra tears that don’t stay put. The label doesn’t list these descriptions, but they’re the everyday language of the dryness it refers to.`,
      },
      {
        p: `What the word doesn’t cover is just as important. Pain, a change in vision, discharge, or an injury aren’t dryness, and a lubricating drop isn’t the answer for them. If you’re not sure which you have, our [self-check](/self-check) can help you sort through it (it’s not a diagnosis), and an eye doctor can tell you for certain.`,
      },
      { h: '“Of the eye”: the surface, specifically' },
      {
        p: `The phrase ends by naming where: the eye. That means the surface of the eye covered by the tear film, with its oil, water and mucus layers. It doesn’t mean dry skin on the eyelids, a dry nose, or dry lips, even though those often show up in the same dry season. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the tear film is where its job is. The warning line makes the same point another way: {warnings}.`,
      },
      { h: 'What the phrase doesn’t say' },
      {
        list: [
          `It doesn’t name a cause of dryness or claim to address one.`,
          `It doesn’t give a time frame for relief or for how long it continues.`,
          `It doesn’t cover symptoms other than dryness.`,
          `It doesn’t replace the directions, which set how much to use: {directions}.`,
        ],
      },
      { h: 'How the relief half works with the warnings' },
      {
        p: `A Uses line always has a partner: the stop-use list. If the drop isn’t relieving dryness the way you hoped, or something else develops, the label tells you what to do next: {stopUse} [Why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) explains that time limit.`,
      },
      { h: 'Reading this phrase on other labels' },
      {
        p: `Many lubricating eye drops use similar wording, sometimes with “temporary” added in front of “relief.” When you see the same Uses language on several products, it tells you they belong to the same general category, not that they’re the same. The active ingredients, their purposes and the inactive ingredients are where products actually differ. [What “temporary relief” means on eye drop labels](/guides/what-temporary-relief-means-on-eye-drops) looks at that related phrase. Quell’s full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What does “relieve dryness of the eye” mean?',
        a: `It means the drop is meant to ease the feeling of dryness on the eye’s surface. It doesn’t promise to remove the cause, act for a set time, or cover other symptoms such as pain or vision changes.`,
      },
      {
        q: 'Does relieve on an eye drop label mean the dryness goes away for good?',
        a: `No. To relieve is to ease a symptom, not to get rid of what’s causing it. If dryness keeps coming back, an eye doctor can find the cause and decide what to do.`,
      },
      {
        q: 'What counts as dryness of the eye?',
        a: `People describe it as dry, gritty, sandy, scratchy or tired eyes, and sometimes as watering. Pain, vision changes, discharge or an injury aren’t dryness and need an eye doctor.`,
      },
    ],
  },

  {
    slug: 'why-quell-has-three-active-ingredients',
    title: 'Why does Quell have three active ingredients?',
    description:
      'Quell lists glycerol, polysorbate 80 and light mineral oil as actives: two lubricants and an emollient. How the three line up with the tear film’s layers.',
    category: 'formula',
    addedOn: '2026-11-21',
    body: [
      {
        p: `Quell has three active ingredients because its formula pairs two lubricants with an emollient: {actives}. The two lubricants work with the watery part of the tear film, and the emollient is an oil, in line with Quell’s design, which is to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists each active with its strength and purpose.`,
      },
      { h: 'What the Active ingredients box shows' },
      {
        p: `At the top of the Drug Facts panel, the Active ingredients section lists each active ingredient with its concentration, and beside each one, a Purpose. On Quell’s carton:`,
      },
      {
        list: [
          `{glycerol}: purpose, Lubricant.`,
          `{polysorbate}: purpose, Lubricant.`,
          `{mineralOil}: purpose, Emollient.`,
        ],
      },
      {
        p: `Those three are the ingredients the label credits with the product’s Uses: {uses}. Everything else in the bottle appears separately, under Inactive ingredients. [The active ingredients on an eye drop label](/guides/the-active-ingredients-section) explains how that section is laid out on any product.`,
      },
      { h: 'Why a drop would combine actives at all' },
      {
        p: `The tear film isn’t a single liquid. It has a mucus layer against the eye, a watery middle layer, and a thin oil layer on top. Each layer does a different job: the mucus helps tears cling, the water keeps the surface moist, and the oil slows evaporation. A formula built with more than one active can address more than one part of that structure, which is the basic logic behind combination drops. [What is the tear film?](/guides/what-is-the-tear-film) describes each layer.`,
      },
      { h: 'The two lubricants' },
      {
        p: `Glycerol and polysorbate 80 share the label purpose “Lubricant.” Lubricant ingredients in eye drops are water-friendly: they mix into the watery part of the tear film and help the surface stay slick, so the lids glide over it with each blink. Having two of them listed doesn’t mean twice the effect of one; it means the formula uses both, at the strengths shown on the panel. Each has its own guide: [glycerol in eye drops](/guides/glycerol-in-eye-drops) and [polysorbate 80 in eye drops](/guides/polysorbate-80-in-eye-drops).`,
      },
      { h: 'The emollient' },
      {
        p: `Light mineral oil is the only active with the purpose “Emollient,” and the only oil among the three. An emollient is an oily ingredient that softens and coats. In an eye drop, that points it toward the tear film’s oil layer, the part responsible for slowing evaporation from the water beneath. That’s the layer Quell is designed to reinforce, and the reason an oil sits among its actives. [Light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) covers that ingredient on its own.`,
      },
      { h: 'Does three mean stronger?' },
      {
        p: `No, and the label doesn’t say so. The number of active ingredients isn’t a measure of strength or effectiveness. A single-active drop and a three-active drop can both carry the same kind of Uses statement. What a count tells you is how a formula was put together, not how well it suits you. Concentrations matter too, and they only compare like with like; [what the percentages on eye drop labels mean](/guides/what-the-percentages-on-the-label-mean) explains why.`,
      },
      { h: 'What the label doesn’t explain' },
      {
        p: `A Drug Facts panel tells you what’s in a product and what it’s for. It doesn’t explain why a formulator chose a particular combination, how the actives interact, or why one strength was picked over another. Anything on that subject beyond the panel and the formula’s stated design isn’t something we can claim. If you want to know whether a combination drop is a good fit for your eyes, that’s a conversation for your eye doctor.`,
      },
      { h: 'The actives and the drop’s appearance' },
      {
        p: `Oil and water don’t mix on their own, so a drop that combines a water-based solution with an oil looks different from a clear drop. Quell’s label says: {milky}. The light mineral oil and the natural oils among the inactive ingredients both play a part in that look. {appearance} [Why is Quell milky brown?](/guides/why-is-quell-milky-brown) goes further.`,
      },
      { h: 'The rest of the formula' },
      {
        p: `Below the actives, the label lists {inactiveCount} inactive ingredients: {inactives}. Among them is emu oil, which is why the panel opens its warnings with this caution: {warnings}. The directions for using all of it together are short: {directions}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What are the three active ingredients in Quell?',
        a: `Quell’s Drug Facts panel lists {actives}. Glycerol and polysorbate 80 are listed as lubricants, and light mineral oil as an emollient.`,
      },
      {
        q: 'Is an eye drop with more active ingredients stronger?',
        a: `Not necessarily. The number of active ingredients describes how a formula is built, not how strong or effective it is. Concentrations only compare like with like, so an eye doctor is the right person to judge fit.`,
      },
      {
        q: 'Why does Quell have an oil as an active ingredient?',
        a: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Light mineral oil, listed as an emollient, is the oil among its actives.`,
      },
    ],
  },

  {
    slug: 'what-does-glycerin-do-in-eye-drops',
    title: 'What does glycerin do in eye drops?',
    description:
      'Glycerin, also called glycerol, is a lubricant in many eye drops, including Quell. What its label purpose means, where it works, and what the label leaves out.',
    category: 'formula',
    addedOn: '2026-11-21',
    body: [
      {
        p: `In eye drops, glycerin works as a lubricant. It’s water-friendly, so it mixes into the watery part of the tear film and helps keep the eye’s surface slick between blinks. On Quell’s Drug Facts panel it appears as {glycerol}, with the purpose “Lubricant,” alongside polysorbate 80 and light mineral oil. The label states its purpose, not a mechanism, speed or duration.`,
      },
      { h: 'Glycerin and glycerol are the same ingredient' },
      {
        p: `Labels use both names. Glycerin is the common name you’ll see on soap, skin care and food packaging; glycerol is the chemical name, and it’s the one printed on Quell’s carton. If you’re checking a label for this ingredient, look for either word. [Glycerin vs. glycerol in eye drops](/guides/glycerin-vs-glycerol-in-eye-drops) goes into the naming in detail.`,
      },
      { h: 'What “Lubricant” means as a label purpose' },
      {
        p: `Every active ingredient on a Drug Facts panel comes with a Purpose, a word or two describing its role. Glycerin’s is “Lubricant.” In eye drops, a lubricant is an ingredient that makes the eye’s surface slicker, so the eyelid moves over it with less friction as you blink, and that helps the surface feel more comfortable when it’s dry. That’s the role the label assigns it, in service of the product’s Uses: {uses}.`,
      },
      { h: 'Where glycerin works in the tear film' },
      {
        p: `The tear film has three layers: mucus against the eye, a watery middle, and a thin oil layer on top. Glycerin dissolves in water, so in a drop, it joins the watery layer rather than the oily one. That’s different from an oil-based ingredient like light mineral oil, which heads for the surface layer instead. [The tear film’s water layer](/guides/the-tear-films-water-layer) explains what that middle layer does.`,
      },
      { h: 'Why glycerin shows up in so many eye drops' },
      {
        p: `Turn over the boxes in a pharmacy’s eye-care aisle and you’ll find glycerin on many of them, sometimes as the only active and sometimes beside one or two others. It’s one of the common lubricant actives in over-the-counter artificial tears. That familiarity is useful when you’re comparing products, but it also means the presence of glycerin alone doesn’t tell you much about how one drop differs from another. The other actives, their strengths, the inactive ingredients and whether the drop is preservative-free matter more for comparison.`,
      },
      { h: 'How much glycerin is in Quell' },
      {
        p: `The strength is printed beside the name on the panel: {glycerol}. That figure is the concentration in the solution. It compares only with the same ingredient in another product, and even then, a higher number doesn’t mean a better drop. [What the percentages on eye drop labels mean](/guides/what-the-percentages-on-the-label-mean) explains how to read it.`,
      },
      { h: 'Glycerin with the other two actives' },
      {
        p: `Quell’s actives are {actives}. Polysorbate 80 shares glycerin’s purpose, “Lubricant,” and light mineral oil is listed as an “Emollient.” Two water-friendly lubricants and one oil reflect the formula’s design: Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. [Why does Quell have three active ingredients?](/guides/why-quell-has-three-active-ingredients) walks through the combination.`,
      },
      { h: 'Glycerin on skin care labels vs. eye drops' },
      {
        p: `Glycerin in a hand cream or a bar of soap is listed for a different purpose, in a product made for skin. Seeing it in both places doesn’t mean a skin product belongs anywhere near your eyes. Only use a product in your eyes if its label says it’s for the eyes, and use it the way that label directs. Quell’s warning is clear on that point: {warnings}.`,
      },
      { h: 'What the label doesn’t tell you about glycerin' },
      {
        list: [
          `It doesn’t say how quickly glycerin helps or how long it stays on the eye.`,
          `It doesn’t explain why this concentration was chosen.`,
          `It doesn’t compare glycerin with other lubricant ingredients.`,
          `It doesn’t address sensitivities to individual ingredients; ask a pharmacist or your doctor if you have concerns.`,
          `It doesn’t say whether glycerin from one source differs from another; the label names the ingredient and its strength, and that’s all.`,
        ],
      },
      { h: 'Using a glycerin-containing drop as directed' },
      {
        p: `Whatever the ingredient list, the directions set how you use the product: {directions}. Keep the tip clean ({tip}), and store it as labeled: {storage}. If dryness doesn’t settle, the label says: {stopUse} The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What does glycerin do in eye drops?',
        a: `It acts as a lubricant. Glycerin mixes into the watery part of the tear film and helps keep the eye’s surface slick, so the lids glide over it as you blink.`,
      },
      {
        q: 'Is glycerin in eye drops the same as glycerin in skin care?',
        a: `It’s the same ingredient name, but the products are made and labeled for different uses. Only put a product in your eyes if its label says it’s for the eyes.`,
      },
      {
        q: 'How much glycerin is in Quell eye drops?',
        a: `The concentration is printed on the Drug Facts panel beside the name: {glycerol}. That figure compares only with the same ingredient in other products.`,
      },
    ],
  },
]
