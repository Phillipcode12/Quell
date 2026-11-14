import type { Guide } from '@/lib/guide-types'
export const DAILY_20261114_A: Guide[] = [
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-spokane-wa:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024157.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024157.csv
   *   (SPOKANE INTL AP, elev 717.2 m: annual precip 16.45 in; Jul 0.42, Aug 0.47,
   *   Dec 2.34, Nov 2.06; Jun-Aug 2.06 in; Dec-Feb 5.75 in; annual snow 45.4 in,
   *   Dec 13.8, Jan 12.3; Jul high 84.4 F; Jan high 34.5, low 24.7; Dec high 33.8;
   *   20.8 days at or above 90 F; 132.0 nights at or below 32 F; 33.7 days with a
   *   high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SPOKANE, WA, WBAN 24157: Jul 59/26, Aug 57/27, Sep 65/34, Dec 87/83,
   *   Jan 86/80, annual 74/52, morning/afternoon)
   * Wildfire smoke dropped: no official source checked today.
   */
  {
    slug: 'dry-eye-relief-spokane-wa',
    title: 'Dry eye relief in Spokane, Washington',
    description:
      'Spokane summer afternoons average 26 percent humidity, then the furnace runs for months. NOAA’s numbers and practical dry eye relief for the Inland Northwest.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Spokane depends on the season. July and August afternoons are among the driest in the Pacific Northwest, with humidity in the 20s, and winter brings months of forced-air heat. Keep vents and fans off your face, blink fully during screen work, and use a lubricating drop exactly as its label directs. Pain, vision changes or dryness that won’t settle need an eye doctor.`,
      },
      { h: 'Spokane is not the rainy side of Washington' },
      {
        p: `People who move here from Seattle are often surprised. The Cascades wring most of the Pacific moisture out of the air before it reaches the Inland Northwest, and NOAA’s 1991 to 2020 normals for Spokane International Airport show the result:`,
      },
      {
        list: [
          `About 16.45 inches of precipitation in a normal year, less than half of what falls at Sea-Tac.`,
          `July averages 0.42 inches and August 0.47, so the summer months together see only about 2 inches.`,
          `December is the wettest month at 2.34 inches, much of it as snow.`,
          `Normal snowfall is 45.4 inches a year, with December (13.8 inches) and January (12.3) leading.`,
          `The station sits at about 717 meters, roughly 2,350 feet above sea level.`,
        ],
      },
      {
        p: `In other words, Spokane has a semi-arid summer and a snowy winter, and both work against the thin film of tears on your eyes for different reasons.`,
      },
      { h: 'Summer afternoons in the 20s' },
      {
        p: `NOAA’s relative humidity table gives Spokane a July afternoon average of 26 percent and August 27 percent. Mornings are far damper, near 59 percent in July, which is why eyes often feel fine at breakfast and scratchy by mid-afternoon. Normal July highs reach 84.4°F, and the airport logs about 21 days a year at 90°F or hotter.`,
      },
      {
        p: `Dry, warm air pulls water from the tear film faster than cool, damp air does. Add a breeze off the Palouse or a long afternoon on the water at Lake Coeur d’Alene and the effect builds. Some habits that help on those days:`,
      },
      {
        list: [
          `Wear wraparound sunglasses outdoors, which cut wind across the eye as well as glare.`,
          `Do outdoor chores and runs in the morning, when the humidity is roughly double the afternoon figure.`,
          `Aim car vents at your chest instead of your face on the drive home with the air conditioning running.`,
          `Take short screen breaks indoors, since air-conditioned offices dry the air further.`,
        ],
      },
      { h: 'Snow outside, dry heat inside' },
      {
        p: `Winter flips the outdoor picture. Afternoon humidity in December averages 83 percent, and the air often feels raw and damp. Indoors is a different story. With 132 nights a year at or below freezing and about 34 days when the high never climbs past 32°F, Spokane furnaces run hard from November into March. Heating cold air without adding water lowers its relative humidity, so a house can feel desert-dry while it snows outside.`,
      },
      {
        p: `Ski days on Mt. Spokane add cold wind on top. Goggles help more than sunglasses on the lift. At home, a humidifier in the bedroom and closed heat registers near your favorite chair can make the evenings more comfortable. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through the changes room by room.`,
      },
      { h: 'What the label covers' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem both a dry August afternoon and a heated January living room create. Its Drug Facts panel lists the Uses as: {uses}. The directions read: {directions}. Every time, follow the handling line: {tip}.`,
      },
      {
        p: `Read one warning first: {warnings}. The label also says how to store it: {storage}. A car parked at a trailhead in July can climb well past that range, and one left at the airport lot in January can fall below it, so keep the bottle in a bag that comes inside with you. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Spokane' },
      {
        p: `Orders ship from Brentwood, Tennessee, to addresses across the United States, including Spokane and Spokane Valley. There’s no account to create: checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. We send a shipping email with tracking, but we don’t promise a delivery date, so order before you run out. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back. See the [Spokane page](/eye-drops/spokane-wa) or the [Washington page](/eye-drops/state/washington), or order from the [home page](/#buy).`,
      },
      { h: 'When to see a Spokane eye doctor' },
      {
        p: `A drop is meant for everyday dryness and irritation. Working out the cause of symptoms that keep coming back belongs to an eye doctor, and the label is clear about when to stop: {stopUse}`,
      },
      {
        p: `If your eyes hurt, your vision changes, or one eye bothers you much more than the other, make an appointment rather than reaching for another bottle. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs, and the [dry eye self-check](/self-check) can help you put your symptoms into words before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Spokane in the summer?',
        a: `July and August afternoons at Spokane International Airport average 26 to 27 percent relative humidity in NOAA’s table, and those months see less than half an inch of rain each. Warm, dry air pulls water from the tear film quickly.`,
      },
      {
        q: 'How much snow does Spokane get a year?',
        a: `NOAA’s 1991 to 2020 normals give Spokane International Airport about 45.4 inches of snow in a typical year, with December and January the snowiest months at 13.8 and 12.3 inches.`,
      },
      {
        q: 'Is Spokane drier than Seattle?',
        a: `Yes, by a wide margin. Spokane’s airport normally gets about 16.45 inches of precipitation a year, compared with about 39 inches at Sea-Tac, and its summer afternoons are far less humid.`,
      },
      {
        q: 'Can I order Quell eye drops to Spokane?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Spokane and the rest of the United States, with guest checkout and tracking by email. No delivery date is promised, so order a little ahead.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-bend-or:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00350694.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00350694.csv
   *   (BEND, OR, elev 1115.6 m: annual precip 10.62 in; Sep 0.31, Aug 0.35, Jul 0.44,
   *   Dec 2.07; Jun-Aug 1.47 in; annual snow 21.6 in, Jan 6.4, Feb 5.5, Dec 5.3;
   *   Jul high 83.8 F, low 48.6; Jan high 42.5, low 24.6; 167.8 nights at or below
   *   32 F; 15.6 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (No Bend or Redmond row. BURNS, OR, WBAN 94185: Jul 47/21, Aug 44/19,
   *   Sep 50/24, Dec 82/76, annual 65/44, morning/afternoon)
   * Elevation is the NOAA station elevation, converted (1115.6 m is about 3,660 ft).
   */
  {
    slug: 'dry-eye-relief-bend-or',
    title: 'Dry eye relief in Bend, Oregon',
    description:
      'Bend gets about 10.6 inches of precipitation a year at 3,660 feet. What NOAA’s high desert numbers mean for your eyes, and relief that fits Central Oregon.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Bend starts with the high desert itself: thin, dry air, big daily temperature swings and wind on the trails and ski runs. Shield your eyes outdoors with sunglasses or goggles, keep heater and car vents off your face, take blink breaks from screens, and use a lubricating drop as its label directs. Pain or changes in vision are a reason to see an eye doctor.`,
      },
      { h: 'High desert numbers from NOAA' },
      {
        p: `Bend sits on the dry side of the Cascades, and NOAA’s weather station in town records it. Its 1991 to 2020 climate normals read like a desert almanac:`,
      },
      {
        list: [
          `About 10.62 inches of precipitation in a normal year.`,
          `September is the driest month at 0.31 inches, with August at 0.35.`,
          `June, July and August together average under 1.5 inches.`,
          `December is the wettest month, at about 2.07 inches.`,
          `Normal snowfall is 21.6 inches, most of it from December through February.`,
          `The station stands at about 1,116 meters, close to 3,660 feet.`,
        ],
      },
      {
        p: `For comparison, Portland’s airport normally gets more than three times as much. The mountains to the west catch the moisture, and Central Oregon lives in their rain shadow.`,
      },
      { h: 'How dry the air gets' },
      {
        p: `NOAA’s humidity table doesn’t include Bend or Redmond, so the closest high-desert record is from Burns, farther east on the same plateau. There, August afternoons average 19 percent relative humidity and July 21 percent. Even the annual afternoon average is only 44 percent. Bend’s figures will differ somewhat, but the pattern is the same: very dry summer afternoons, damper mornings and nights.`,
      },
      {
        p: `Air that dry speeds the evaporation of tears. It’s one reason a day on the Deschutes River Trail can leave eyes gritty even when you weren’t squinting into the sun.`,
      },
      { h: 'Cold nights, warm afternoons' },
      {
        p: `Elevation, dry air and clear skies give Bend wide daily temperature swings. A normal July day runs from 48.6°F at dawn to 83.8°F in the afternoon, a 35-degree range. In January the normal high is 42.5°F and the low 24.6°F. The station averages about 168 nights a year at or below freezing, so many households run the heat from fall well into spring, and some summer mornings call for it too.`,
      },
      {
        p: `That means the furnace or wood stove runs for much of the year, and heated indoor air is drier still than the air outside. Keeping a humidifier in the bedroom, sitting a few feet back from the wood stove and turning ceiling fans down at night all help. If you rely on a space heater in a home office, our guide to [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers placement.`,
      },
      { h: 'Mt. Bachelor, the river and the trails' },
      {
        p: `Outdoor life is the reason many people live here, and each activity dries eyes a little differently:`,
      },
      {
        list: [
          `Skiing and snowboarding at Mt. Bachelor combine cold wind, speed and glare off the snow. Goggles that seal around the eyes work far better than sunglasses.`,
          `Mountain biking on the Phil’s Trail network means constant airflow and dust. Clear or tinted cycling glasses help.`,
          `Floating the Deschutes in August puts you in bright sun with reflected glare and afternoon humidity near the year’s low.`,
          `Hiking at elevation, around Tumalo Falls or the lakes along the Cascade Lakes Highway, adds wind and thinner air.`,
        ],
      },
      {
        p: `Our guides on [ski trips and dry eyes](/guides/ski-trips-and-dry-eyes) and [dry eyes when cycling](/guides/dry-eyes-when-cycling) go deeper on gear and timing.`,
      },
      { h: 'Using a lubricating drop in Central Oregon' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what dry, moving air strips away. The label’s Uses line reads: {uses}. The directions are: {directions}. Read the caution before the first drop: {warnings}.`,
      },
      {
        p: `Two label lines matter more at altitude. The first is storage: {storage}. A car at a trailhead parking lot in July can get too hot, and one left at the ski area on a January night can get far too cold, so carry the bottle in an inside pocket or a pack you bring indoors. The second is handling: {tip}. Wash or sanitize your hands after a dusty ride before you reach for the bottle.`,
      },
      { h: 'Ordering to Bend and when to see a doctor' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Bend and the rest of the country. Guest checkout works without an account, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We email tracking once it ships, though no delivery date is promised. You’ll find more on the [Bend page](/eye-drops/bend-or) and the [Oregon page](/eye-drops/state/oregon).`,
      },
      {
        p: `A drop is for everyday dryness. If symptoms persist, working out why is an eye doctor’s job, and the label says when to stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which ones shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel so dry in Bend, Oregon?',
        a: `Bend gets only about 10.6 inches of precipitation in a normal year, sits around 3,660 feet up, and has cold nights that keep the heat running indoors. Dry air outside and heated air inside both speed tear evaporation.`,
      },
      {
        q: 'How much rain does Bend, Oregon get a year?',
        a: `NOAA’s 1991 to 2020 normals for the Bend station show about 10.62 inches of precipitation a year, with September the driest month at 0.31 inches and December the wettest at about 2.07.`,
      },
      {
        q: 'What is the humidity like in Central Oregon in summer?',
        a: `NOAA’s humidity table has no Bend row, but Burns, on the same high plateau, averages 19 to 21 percent relative humidity on July and August afternoons. Mornings are much damper.`,
      },
      {
        q: 'Does Quell ship to Bend, Oregon?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Bend and every other US address, with guest checkout and a tracking email. Delivery dates aren’t promised, so leave some margin before your bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-portland-or:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024229.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024229.csv
   *   (PORTLAND INTL AP: annual precip 36.92 in; Jul 0.51, Aug 0.54, Dec 5.77,
   *   Nov 5.45, Jan 5.03; Dec-Feb 14.48 in; Jun-Aug 2.68 in; 93.3 days with 0.10 in
   *   or more; Jul high 81.9 F, Aug 82.3; Jan high 47.5, low 36.2; 14.6 days at or
   *   above 90 F; 31.7 nights at or below 32 F; annual snow 4.2 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (PORTLAND, OR, WBAN 24229: Jul 77/44, Aug 78/44, Sep 82/48, Dec 85/78,
   *   annual 82/59, morning/afternoon)
   * - NWS Portland Area Forecast Discussion, 2025-11-09 (mirrored at
   *   https://mesonet.agron.iastate.edu/api/1/nwstext/202511091116-KPQR-FXUS66-AFDPQR):
   *   easterly winds through the Columbia River Gorge with high pressure east of the
   *   Cascades. Used only for "the forecast office describes east winds through the Gorge".
   */
  {
    slug: 'dry-eye-relief-portland-or',
    title: 'Dry eye relief in Portland, Oregon',
    description:
      'Rainy Portland can still dry your eyes: heated homes all winter, 44 percent humidity on summer afternoons, and east winds from the Gorge. Practical relief tips.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Portland is mostly about indoor air and summer afternoons. The city is damp from fall through spring, but heated homes and offices dry the air you actually breathe, and July and August are nearly rainless. Point vents away from your face, take blink breaks at screens, and use a lubricating drop as its label directs. Ongoing pain or blurry vision needs an eye doctor.`,
      },
      { h: 'A wet reputation with a dry season' },
      {
        p: `Portland’s rain is real, but it arrives on a schedule. NOAA’s 1991 to 2020 normals for Portland International Airport show:`,
      },
      {
        list: [
          `About 36.92 inches of precipitation in a normal year, on roughly 93 days with a tenth of an inch or more.`,
          `December, November and January are the wettest months, each above 5 inches, and the three winter months together bring about 14.5 inches.`,
          `July averages 0.51 inches and August 0.54. June through August together total under 2.7 inches.`,
          `Snow is rare at the airport, about 4.2 inches in a typical year.`,
        ],
      },
      {
        p: `So the rain falls mostly in the cool months, which is exactly when people are indoors with the heat on. By the time the sun returns, the air outside has dried out too.`,
      },
      { h: 'Gray months, heated rooms' },
      {
        p: `Winter afternoons in Portland average 78 percent relative humidity in December, according to NOAA’s humidity table. That moist outdoor air doesn’t stay moist once a furnace warms it. Heating air raises the amount of water it could hold without adding any, so relative humidity indoors falls, sometimes sharply. A bungalow with forced-air heat, a downtown office with sealed windows, or a MAX car with the heater on can all feel dry while rain streaks the glass.`,
      },
      {
        p: `The short, dark days add a second factor: more hours on screens. People blink less often and less completely while they read, code or scroll, leaving the eye’s surface exposed longer between blinks. A few practical changes for the rainy season:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it on the schedule its maker gives.`,
          `Close or redirect a floor register that blows toward your desk or couch.`,
          `Every 20 minutes or so, look out a window and blink slowly a few times.`,
          `Keep a water glass at your desk; it won’t moisten the eye, but it’s a cue to take that break.`,
        ],
      },
      { h: 'July and August are nearly rainless' },
      {
        p: `Summer is when Portland’s outdoor air turns genuinely dry. NOAA’s humidity table puts July and August afternoons at 44 percent, compared with morning readings in the high 70s. Normal highs climb to about 82°F, and the airport averages nearly 15 days a year at 90°F or hotter. On those afternoons, a bike ride along the Willamette, a game at Providence Park or a hike in Forest Park all mean warm, moving air across your eyes.`,
      },
      {
        p: `Air conditioning dries indoor air as well, since cooling coils pull water out as they chill it. Aim the airflow at the room, not at your pillow or your face.`,
      },
      { h: 'East winds through the Gorge' },
      {
        p: `Portland’s National Weather Service office regularly describes easterly winds pushing through the Columbia River Gorge when high pressure builds east of the Cascades. That air comes from the drier interior of the state, and the gusts can be strong near the Gorge and on the east side of the metro area. On a day like that, wraparound sunglasses and a scarf pulled up help on the walk to the car, and keeping the car’s recirculation on cuts the draft from outside.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the moisture that heated rooms and dry summer air pull away. Its Uses line reads: {uses}. The label gives these directions: {directions}. Before every drop, the handling line applies: {tip}.`,
      },
      {
        p: `The appearance can surprise people: {appearance} The label’s “Do not use” line reads: {doNotUse}. Store it within range: {storage}. Portland winters seldom push a parked car below that range for long, but a summer dashboard can climb above it, so keep the bottle in a bag or pocket. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Portland, and when to see a doctor' },
      {
        p: `Quell ships within the United States from Brentwood, Tennessee, including to Portland and its suburbs. Checkout works as a guest, shipping is {shipping}, and an order of {freeBottles} or more bottles ships free. A tracking email follows once it ships, and no delivery date is promised. See the [Portland page](/eye-drops/portland-or) and the [Oregon page](/eye-drops/state/oregon) for local details.`,
      },
      {
        p: `Lubricating drops are for everyday dryness. Working out the cause of discomfort that keeps returning belongs to an eye doctor, and the label says when to stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers what shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Portland when it rains so much?',
        a: `Most of Portland’s rain falls in the cool months, when homes and offices run the heat. Heating air lowers its relative humidity indoors, so your eyes face dry air even while it rains outside.`,
      },
      {
        q: 'What is the driest month in Portland, Oregon?',
        a: `July, by rainfall. NOAA’s 1991 to 2020 normals for Portland International Airport put it at about 0.51 inches, with August close behind at 0.54.`,
      },
      {
        q: 'Do east winds in Portland make dry eyes worse?',
        a: `They can. The National Weather Service describes easterly winds through the Columbia River Gorge drawing air from east of the Cascades, and steady wind speeds tear evaporation. Wraparound sunglasses help outdoors.`,
      },
      {
        q: 'Can I get Quell delivered in Portland, Oregon?',
        a: `Yes. Quell ships to Portland and the rest of the US from Brentwood, Tennessee, with guest checkout and email tracking. We don’t promise a delivery date, so it helps to reorder before the last bottle runs low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-seattle-wa:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024233.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024233.csv
   *   (SEATTLE TACOMA INTL AP, elev 112.8 m: annual precip 39.34 in; Nov 6.31,
   *   Jan 5.78, Dec 5.72; Jul 0.60, Aug 0.97; Dec-Feb 15.26 in; Jun-Aug 3.02 in;
   *   93.4 days with 0.10 in or more; annual snow 6.3 in; Jul high 77.4 F, Aug 77.6;
   *   Jan high 48.0, low 37.7; Dec high 47.0; 3.8 days at or above 90 F;
   *   25.2 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SEATTLE, WA, WBAN 24233: Jul 79/48, Aug 81/50, Sep 84/56, Nov 84/76,
   *   Dec 83/79, Jan 83/76, annual 82/63, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-seattle-wa',
    title: 'Dry eye relief in Seattle, Washington',
    description:
      'Seattle’s drizzle doesn’t reach your desk. How heated offices, long screen days and nearly rainless Julys dry your eyes, with NOAA’s Sea-Tac numbers.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Seattle usually comes down to the air indoors and the hours on screens, not the drizzle. From October to April most people spend their days in heated offices and apartments, and July is almost rainless. Look away from the monitor often and blink fully, keep vents and fans aimed away from your face, and use a lubricating drop exactly as labeled. See an eye doctor for pain or blurred vision.`,
      },
      { h: 'Sea-Tac’s numbers, season by season' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Seattle-Tacoma International Airport describe two very different halves of the year:`,
      },
      {
        list: [
          `Roughly 39.34 inches of precipitation in a normal year, falling on about 93 days with a tenth of an inch or more.`,
          `November is the wettest month at 6.31 inches; December, January and February add up to about 15.3.`,
          `July gets just 0.60 inches and August 0.97, and the whole summer totals about 3 inches.`,
          `Winter is mild: January’s normal high is 48.0°F and its low 37.7°F, with about 25 nights a year at or below freezing.`,
          `Snow averages only 6.3 inches a year at the airport.`,
        ],
      },
      {
        p: `The rain is frequent rather than heavy, which is why Seattle feels wet. But frequent light rain outdoors says little about the air at your desk.`,
      },
      { h: 'Why a damp city can feel dry indoors' },
      {
        p: `NOAA’s humidity table puts Sea-Tac’s December afternoons at 79 percent relative humidity. Bring that cool, damp air inside and heat it from the 40s to the high 60s and its relative humidity drops a long way, because warm air can hold much more water than cool air. Nothing in a typical furnace or baseboard heater adds that water back.`,
      },
      {
        p: `Seattle’s mild winters work against you here. Because it’s rarely cold enough to feel drastic, people don’t think of their home as a heated space, yet the heat may run quietly from October through April. New apartment buildings with sealed windows and constant ventilation can be especially dry. A small hygrometer from a hardware store will tell you what your rooms really measure; our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) explains what to do with the reading.`,
      },
      { h: 'Screens, standups and long workdays' },
      {
        p: `Seattle has a large workforce at keyboards, from South Lake Union offices to home desks in Ballard and Bellevue. Concentrated screen work lowers how often you blink, and many blinks during focus are partial, leaving the lower part of the eye exposed. Over an eight- or ten-hour day in heated air, that adds up. A routine that fits around meetings:`,
      },
      {
        list: [
          `Every 20 minutes, look at something at least 20 feet away for 20 seconds and blink slowly.`,
          `Set the top of your monitor at or slightly below eye level, so your eyes aren’t opened as wide.`,
          `Use the walk to a standup or the coffee machine as a screen break, not a phone break.`,
          `Turn down the brightness of a monitor that glows much brighter than the room around it.`,
        ],
      },
      {
        p: `Our guides to [screens and your tear film](/guides/screens-and-your-tear-film) and [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) go further on setup.`,
      },
      { h: 'The dry, bright summer' },
      {
        p: `By July, Sea-Tac’s afternoon humidity averages 48 percent and highs reach about 77°F. That’s comfortable weather, and Seattle spends it outdoors: kayaking on Lake Union, riding the Burke-Gilman Trail, catching a ferry with the wind off Puget Sound in your face, or hiking to a Cascade viewpoint. Each one moves air across your eyes for hours. Sunglasses that wrap around cut both glare off the water and the breeze. On the ferry deck, the lee side of the cabin is noticeably calmer.`,
      },
      { h: 'How Quell fits in' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the evaporation that heated offices and windy ferry rides both speed up. The label’s Uses line reads: {uses}. Directions: {directions}. Check this caution before the first drop: {warnings}.`,
      },
      {
        p: `Keep the bottle clean and in range. The label’s handling line says: {tip}. Its storage line says: {storage}. A desk drawer or a jacket pocket suits Seattle’s mild climate well; a car parked in the sun on an August afternoon is the main place it could get too warm. You can read the complete panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Seattle' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, including Seattle and the Eastside. You can check out as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a shipping email with tracking, though we don’t promise a delivery date. Shipping to an office mailroom works if you include the company name and suite. More is on the [Seattle page](/eye-drops/seattle-wa) and the [Washington page](/eye-drops/state/washington).`,
      },
      { h: 'Signs it’s time for an eye exam' },
      {
        p: `Drops are for routine dryness. Working out the cause of symptoms that persist, or of eyes that feel worse at the screen even after breaks, belongs to an optometrist or ophthalmologist. The label says when to stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent ones.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Seattle if it rains all the time?',
        a: `Heated indoor air is the usual reason. Cool, damp outdoor air loses much of its relative humidity once a furnace warms it, and Seattle homes and offices may heat from October through April.`,
      },
      {
        q: 'What is the driest month in Seattle?',
        a: `July. NOAA’s 1991 to 2020 normals for Seattle-Tacoma International Airport give it about 0.60 inches of precipitation, and summer afternoons average around 48 percent relative humidity.`,
      },
      {
        q: 'Do screens make dry eyes worse in Seattle offices?',
        a: `Screen work lowers how often you blink and leaves blinks incomplete, which exposes the eye longer in already heated air. Regular breaks to look far away and blink fully help.`,
      },
      {
        q: 'Does Quell ship to Seattle, Washington?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Seattle and every US state, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'eye-drops-hsa-approved-vs-eligible',
    title: 'Eye drops HSA approved vs HSA eligible',
    description:
      'There’s no IRS list of “HSA approved” eye drops. What eligible really means, why OTC drops qualify since the CARES Act, and why a card can still be declined.',
    category: 'ordering',
    addedOn: '2026-11-14',
    body: [
      {
        p: `“HSA approved” isn’t an IRS category. The IRS defines qualified medical expenses and doesn’t approve individual products. Since the CARES Act of 2020, over-the-counter medicine counts as a qualified medical expense whether or not it’s prescribed, so OTC lubricating eye drops are generally HSA eligible. Whether a specific store’s card reader accepts them is a separate question decided by the plan, its administrator and the merchant.`,
      },
      { h: 'Eye drops HSA approved: where the phrase comes from' },
      {
        p: `“HSA approved” shows up on store shelf tags, shopping filters and product pages. It’s marketing shorthand, usually meaning the item is coded so an HSA or FSA debit card will go through at checkout. That’s useful information, but it’s a statement about a store’s system, not an IRS ruling.`,
      },
      {
        p: `The IRS doesn’t publish a list of approved brands or products for health savings accounts. Instead, IRS Publication 969 defines qualified medical expenses by pointing to the tax code’s definition of medical care. An expense either fits that definition or it doesn’t. No product needs a federal sign-off to qualify, and a sticker saying “approved” doesn’t make an ineligible item eligible.`,
      },
      { h: 'Eye drops HSA eligible: what the IRS actually says' },
      {
        p: `Before 2020, an HSA could pay for over-the-counter medicine only with a prescription (insulin was the exception). The Coronavirus Aid, Relief, and Economic Security Act, signed March 27, 2020, changed that. IRS Publication 969 now says over-the-counter medicine, whether or not prescribed, counts as medical care for amounts paid after 2019. Health FSAs follow the same rule.`,
      },
      {
        p: `Lubricating eye drops sold over the counter are medicine with a Drug Facts label. Quell’s label lists the Uses as: {uses}. Its active ingredients are {actives}. That puts it in the same broad group as any other OTC medicine for HSA purposes. Our guide to [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) covers the history in more detail.`,
      },
      { h: 'Eye drops HSA approved vs eligible, side by side' },
      {
        list: [
          `Eligible: a tax-law idea. The IRS sets the rules through the tax code and explains them in Publication 969.`,
          `Approved: a retail idea. A store or card network has coded the item so an HSA card can pay for it at the register.`,
          `An item can be eligible but not coded at a particular store, which is why a card might decline even though the purchase qualifies.`,
          `An item can be coded at a store and still be something you need to justify with records, because coding doesn’t replace your own recordkeeping.`,
          `Your plan or account administrator may add its own procedures, such as asking for receipts.`,
        ],
      },
      { h: 'Who decides at the checkout' },
      {
        p: `Several parties handle an HSA purchase, and none of them is the IRS. Your HSA trustee or custodian (often a bank) holds the money and issues the card. The card network and the merchant decide how purchases are categorized at the point of sale. For a health FSA, IRS Publication 969 notes that these are employer-established plans, so the employer’s plan documents and its administrator set how claims are submitted and checked.`,
      },
      {
        p: `If a card declines, the purchase may still be eligible. The usual options are to pay another way and reimburse yourself from the HSA, or to submit a claim to your FSA administrator with the receipt. Our step-by-step guide on [how to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) walks through it.`,
      },
      { h: 'Keeping records for eye drops paid from an HSA' },
      {
        p: `HSA rules put the responsibility for showing an expense qualifies on the account holder, not the store. Publication 969 tells account holders to keep records showing their distributions paid for qualified medical expenses. A few habits make that easy:`,
      },
      {
        list: [
          `Save the order confirmation email. For a Quell order, it lists the product, quantity and amount paid.`,
          `Keep a simple folder or spreadsheet with the date, item and amount of each HSA purchase.`,
          `If you reimburse yourself later, note which receipt each withdrawal covers.`,
          `For an FSA, follow your administrator’s instructions on what to upload and when.`,
        ],
      },
      {
        p: `You can look up a past Quell order on the [orders page](/orders), and our guide on [getting a receipt for your order](/guides/getting-a-receipt-for-your-order) explains what’s on it.`,
      },
      { h: 'Using an HSA or FSA for Quell' },
      {
        p: `Quell is sold only on quelldrop.com, with guest checkout and no subscription. Whether your particular HSA or FSA card is accepted when you pay depends on the card and the plan, so we can’t promise it will go through. If it doesn’t, paying another way and reimbursing yourself or claiming through your administrator are the routes Publication 969 leaves open. Shipping is {shipping} per order; whether a plan reimburses shipping is a question for your administrator.`,
      },
      {
        p: `This guide explains how the rules are written, not your personal tax situation. For that, ask your plan administrator or a tax professional. The broader picture of both accounts is in [Can I use HSA or FSA funds for eye drops?](/guides/hsa-fsa-and-eye-drops).`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops HSA approved?',
        a: `There’s no IRS approval for individual products. Over-the-counter medicine, including lubricating eye drops, counts as a qualified medical expense under the CARES Act changes described in IRS Publication 969, so the drops are generally eligible.`,
      },
      {
        q: 'Is there an IRS list of HSA eligible products?',
        a: `No. IRS Publication 969 defines qualified medical expenses by referring to the tax code’s definition of medical care rather than listing products. Lists you see online are made by stores and benefits companies.`,
      },
      {
        q: 'Why was my HSA card declined for eye drops?',
        a: `Card acceptance depends on how the merchant and card network code the purchase, not only on tax law. An eligible purchase can still be declined; you can pay another way and reimburse yourself from the HSA, keeping the receipt.`,
      },
      {
        q: 'Do I need to keep receipts for eye drops bought with an HSA?',
        a: `Yes, it’s wise. IRS Publication 969 tells HSA holders to keep records showing distributions were for qualified medical expenses. An order confirmation email that lists the item and amount works well.`,
      },
    ],
  },
  {
    slug: 'can-you-use-a-dependent-care-fsa-for-eye-drops',
    title: 'Can you use a dependent care FSA for eye drops?',
    description:
      'A dependent care FSA pays for care so you can work, not for medicine. Which account covers OTC eye drops instead, and what to do if you paid from the wrong one.',
    category: 'ordering',
    addedOn: '2026-11-14',
    body: [
      {
        p: `No. A dependent care FSA reimburses the cost of caring for a qualifying person, such as a young child, so that you can work or look for work. IRS Publication 503 describes those expenses, and medicine isn’t one of them. Over-the-counter eye drops belong in a health FSA or an HSA, which IRS Publication 969 says can pay for OTC medicine whether or not it’s prescribed.`,
      },
      { h: 'Two FSAs with similar names' },
      {
        p: `Many employers offer more than one flexible spending arrangement during open enrollment, and the names blur together. They’re separate accounts with separate rules, funded separately from your paycheck:`,
      },
      {
        list: [
          `A health FSA pays for medical care: copays, prescriptions, glasses and, since 2020, over-the-counter medicine.`,
          `A dependent care FSA, sometimes called a DCFSA or dependent care assistance program, pays for the care of a child or another qualifying person while you work.`,
          `A limited-purpose FSA is a narrower health FSA, often paired with an HSA, that usually covers vision and dental costs. What it pays for depends on how the employer wrote the plan.`,
        ],
      },
      {
        p: `Money in one can’t simply be moved to another. If you’re looking at a balance and wondering whether a bottle of eye drops qualifies, the first step is figuring out which account the money is actually in.`,
      },
      { h: 'What a dependent care FSA pays for' },
      {
        p: `IRS Publication 503 covers child and dependent care expenses. It explains that the expenses must be for the care of a qualifying person and must allow you, and your spouse if you file jointly, to work or look for work. It also says that care expenses count only when their main purpose is the person’s well-being and protection.`,
      },
      {
        p: `In practice that means things like:`,
      },
      {
        list: [
          `Daycare or preschool for a child under 13.`,
          `Before- and after-school programs.`,
          `A babysitter or nanny who watches a child during work hours.`,
          `Day camp during summer break.`,
          `Adult day care for a spouse or dependent who can’t care for themselves.`,
        ],
      },
      {
        p: `A bottle of eye drops for you, your child or anyone else in the household doesn’t fit that description. It’s medicine, and the tax code counts medicine as medical care, which is the territory of a health account.`,
      },
      { h: 'Which account covers eye drops' },
      {
        p: `The CARES Act, signed March 27, 2020, made over-the-counter medicine a qualified medical expense without a prescription for amounts paid after 2019. IRS Publication 969 describes the rule for health savings accounts and health FSAs. Lubricating eye drops sold with a Drug Facts label, like Quell, are over-the-counter medicine. Quell’s label lists its Uses as: {uses}.`,
      },
      {
        p: `So the accounts that generally can pay for eye drops are a health FSA, an HSA, and possibly a limited-purpose FSA if the employer’s plan includes OTC medicine. Our guide to [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains the change in more depth, and [Can I use HSA or FSA funds for eye drops?](/guides/hsa-fsa-and-eye-drops) covers the basics of each.`,
      },
      { h: 'If you already paid from the dependent care account' },
      {
        p: `Mistakes happen, especially when two benefit cards look alike or when a reimbursement portal lists both accounts on one screen. If you submitted an eye drop receipt to your dependent care FSA, or used the wrong card:`,
      },
      {
        list: [
          `Contact your FSA administrator before the claim is paid, if you can, and ask to withdraw it.`,
          `If it was already paid, ask the administrator how it wants the money returned or offset.`,
          `Resubmit the same receipt to your health FSA, or reimburse yourself from your HSA, following that account’s steps.`,
          `Keep copies of every message and receipt in case your employer or the IRS asks later.`,
        ],
      },
      {
        p: `Your administrator’s instructions are the ones that count here, since each employer’s plan documents set the procedure. Our guide on [how to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) shows what a typical health FSA claim looks like.`,
      },
      { h: 'When you only have a dependent care FSA' },
      {
        p: `Some people elect a dependent care FSA for daycare and skip the health FSA. If that’s you, eye drops are simply an out-of-pocket purchase this year. A few options for next time:`,
      },
      {
        list: [
          `At open enrollment, check whether your employer offers a health FSA and how much you’d realistically spend on copays, glasses and OTC medicine.`,
          `If you’re enrolled in a high-deductible health plan, ask HR whether you’re eligible to open an HSA.`,
          `Estimate eye drop spending from how often you reorder. At the labeled directions, {directions}, a {size} bottle doesn’t stretch far.`,
        ],
      },
      {
        p: `None of this is personal tax advice. Your plan administrator or a tax professional can tell you what your specific accounts allow.`,
      },
      { h: 'Ordering Quell with a health account' },
      {
        p: `Quell is sold on quelldrop.com with guest checkout, no subscription and no coupons. Whether a health FSA or HSA card is accepted at payment depends on the card issuer and plan, so we can’t say in advance that yours will go through. If it doesn’t, the order confirmation email works as an itemized receipt for a reimbursement claim, and past orders can be looked up on the [orders page](/orders). Shipping is {shipping} per order, and {freeBottles} or more bottles ship free.`,
      },
      {
        p: `Before using any eye drop, read the label caution: {warnings}. The full Drug Facts panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can I use my dependent care FSA for eye drops?',
        a: `No. A dependent care FSA pays for care of a qualifying person so you can work, as IRS Publication 503 describes. Eye drops are medicine, which a health FSA or HSA can cover instead.`,
      },
      {
        q: 'What is the difference between a dependent care FSA and a health FSA?',
        a: `A health FSA reimburses medical expenses, including over-the-counter medicine since the CARES Act. A dependent care FSA reimburses daycare and similar care costs for a child or dependent while you work.`,
      },
      {
        q: 'Can a limited-purpose FSA pay for eye drops?',
        a: `It depends on your employer’s plan. Limited-purpose FSAs usually cover vision and dental expenses, and some include OTC medicine. Check the plan documents or ask your administrator.`,
      },
      {
        q: 'What if I accidentally paid for eye drops with my dependent care card?',
        a: `Contact your FSA administrator, ask how to reverse or repay the claim, and then submit the receipt to your health FSA or reimburse yourself from your HSA. Keep copies of everything.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-pilot',
    title: 'Christmas gifts for a pilot with dry eyes',
    description:
      'Gift ideas for pilots who spend long hours in dry cockpit air, from layover comforts to eye drops, plus the label caution to check and why to order early.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Good Christmas gifts for a pilot with dry eyes make long flights and layovers more comfortable: a sleep mask, a travel humidifier for hotel rooms, a sturdy water bottle, good sunglasses, and a bottle of lubricating eye drops if they want one. Before giving Quell, check its egg or bird allergy caution, and let the pilot decide with their aviation medical examiner whether any medicine fits their rules.`,
      },
      { h: 'Why pilots talk about dry eyes' },
      {
        p: `Air at cruising altitude holds very little water, and the air circulated through a cockpit or cabin reflects that. Add the steady flow from overhead and side vents, hours of scanning instruments and screens, and early report times after short nights, and a pilot’s eyes can feel gritty by the end of a trip. Blinking spreads tears across the eye; long stretches of concentration cut blinking down. Our guide to [dry eyes on a plane](/guides/dry-eyes-on-a-plane) explains why cabin air feels the way it does.`,
      },
      {
        p: `None of that needs a gift to fix, but small comforts get used. The ideas below suit airline pilots, corporate and charter crews, flight instructors and weekend private pilots alike.`,
      },
      { h: 'Christmas gifts for pilots: layover comforts' },
      {
        list: [
          `A contoured sleep mask that doesn’t press on the eyelids, for daytime sleep in hotel rooms after a late-night flight.`,
          `A compact, USB-powered travel humidifier. Hotel rooms are often dry, and a small unit on the nightstand adds moisture where it matters.`,
          `A small digital hygrometer, so they can see how dry a room actually is.`,
          `An insulated water bottle that fits a flight bag side pocket.`,
          `Earplugs or a white-noise device for hotels near the airport.`,
          `A quality lip balm and fragrance-free hand cream, since dry air hits more than eyes.`,
        ],
      },
      {
        p: `Our guide to [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more on what helps on the road.`,
      },
      { h: 'Gifts for pilots in the cockpit' },
      {
        p: `Gear that goes in the cockpit is personal, and many pilots have strong opinions. If you’re not sure, a gift card from a pilot supply shop lets them choose. Safer picks for most people:`,
      },
      {
        list: [
          `A sunglasses case that clips to a flight bag, since a good pair is easily crushed.`,
          `A microfiber cleaning kit for sunglasses and headset ear seals.`,
          `A small zippered pouch to keep personal items, like eye drops and lip balm, together and easy to find.`,
          `A logbook cover or a framed print of a favorite airplane.`,
        ],
      },
      {
        p: `Leave actual flight equipment, sunglasses with specific lens requirements and anything that mounts in the airplane to the pilot.`,
      },
      { h: 'Eye drops as part of the gift' },
      {
        p: `Quell is a preservative-free lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem dry, moving air creates. Its Uses line reads: {uses}. The bottle is {size}, small enough for a flight bag or a shirt pocket, and below TSA’s 3.4-ounce limit for liquids in carry-on bags.`,
      },
      {
        p: `First, though, the most important line on the label: {warnings}. If the person you’re buying for has an egg or bird allergy, or you don’t know, ask before you buy. More detail is in [egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell).`,
      },
      {
        p: `Pilots also answer to medical standards that most gift recipients don’t. Whether any over-the-counter medicine is acceptable while flying is a question for the pilot and their aviation medical examiner, along with any policy their employer applies. Don’t assume; what a passenger can use freely is still the pilot’s call to make. Our guide to [eye drops for pilots and flight crews](/guides/eye-drops-for-pilots-and-flight-crews) covers what to ask.`,
      },
      { h: 'Using it the way the label says' },
      {
        p: `If the pilot decides to use it, the directions are short: {directions}. The handling line matters in a cramped cockpit where a cap can roll under a seat: {tip}. The milky look surprises people, so mention it in a card: {appearance}`,
      },
      {
        p: `Storage matters for anyone whose bag sits in a cold cargo hold, an unheated crew room or a hot car in the employee lot: {storage}. A flight bag that stays with the pilot is a better home than checked luggage. The stop-use line is worth knowing too: {stopUse}`,
      },
      { h: 'Ordering in time for Christmas' },
      {
        p: `We ship from Brentwood, Tennessee, to US addresses only and don’t promise a delivery date, so order well ahead of the holiday, especially if the pilot is on a trip schedule and won’t be home to receive it. Checkout has no gift wrap or gift message, so the box arrives plain and you can wrap it yourself. Shipping is {shipping}, and {freeBottles} or more bottles ship free, which can work if you’re buying for a whole crew.`,
      },
      {
        p: `If the gift isn’t wanted, unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Our guide to [sending Quell as a gift](/guides/sending-quell-as-a-gift) covers shipping to someone else’s address, and you can order from the [home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a pilot for Christmas?',
        a: `Practical comforts for flying and layovers go over well: a contoured sleep mask, a travel humidifier, an insulated water bottle, a sunglasses case or a gift card to a pilot supply shop. Leave flight equipment to the pilot.`,
      },
      {
        q: 'Are eye drops a good gift for a pilot?',
        a: `They can be, if the pilot wants them. Check the egg or bird allergy caution on Quell’s label first, and leave the question of using any medicine while flying to the pilot and their aviation medical examiner.`,
      },
      {
        q: 'Why do pilots get dry eyes?',
        a: `Air at cruising altitude holds very little moisture, cockpit vents keep it moving, and long periods of concentration reduce blinking. Together these speed evaporation from the eye’s surface.`,
      },
      {
        q: 'Can Quell arrive by Christmas?',
        a: `We don’t promise delivery dates. Quell ships from Brentwood, Tennessee, with a tracking email once it leaves, so ordering early is the honest way to have it in hand for the holiday.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-holiday-party',
    title: 'Dry eyes at a holiday party',
    description:
      'Warm, crowded rooms, candles, fireplaces and late nights can leave eyes scratchy. Easy ways to stay comfortable at holiday parties, and how to carry eye drops.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Holiday parties dry eyes because they stack several things at once: heated rooms full of people, candles and fireplaces, a late night after a full workday, and a phone screen for photos. Stand away from the fire and heat vents, blink fully, step outside or into a quieter room now and then, and carry a lubricating drop in a pocket or purse to use as its label directs.`,
      },
      { h: 'Why a party room dries your eyes' },
      {
        p: `Most December gatherings happen indoors with the heat running. Heating cold air lowers its relative humidity, and a room packed with guests often gets the thermostat nudged up rather than down. Then come the extras:`,
      },
      {
        list: [
          `A fireplace or wood stove warms one corner of the room and moves air across it.`,
          `Rows of candles add a little warmth and smoke near eye level on tables and mantels.`,
          `Kitchen heat from the oven drifts into the living room.`,
          `Ceiling fans set to spread the warmth keep air moving overhead.`,
          `Hours of conversation, which often means looking at faces and lights without many full blinks.`,
        ],
      },
      {
        p: `Any one of these is minor. Three hours of all of them, at the end of a day spent in a heated office, is when people start rubbing their eyes. Our guide to [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) looks at the first two in more detail.`,
      },
      { h: 'Where to stand' },
      {
        p: `You can’t control the host’s thermostat, but you can choose your spot. Stay a few steps back from the fireplace, and out of the line of a floor register or a portable heater. Chat on the side of a candle-lined table away from where the smoke drifts. If there’s a room with fewer people and no fire, it’s usually more comfortable. A few minutes on a porch or patio in cool, still air can give your eyes a break, though cold wind does the opposite, so stay sheltered.`,
      },
      { h: 'Late nights and tired eyes' },
      {
        p: `December parties tend to start after work and run late. Eyes that have been open for 16 or 18 hours are more likely to feel dry, and less sleep the night before doesn’t help. Our guide to [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) covers the connection.`,
      },
      {
        p: `If you wear contact lenses, the label of any eye drop is the place to check, and Quell’s label doesn’t give directions for use with contacts. Bring your glasses as a backup and ask your eye doctor what to use with your lenses.`,
      },
      { h: 'Photos, screens and the white elephant game' },
      {
        p: `Phones come out constantly: group photos, videos of the gift exchange, scrolling through pictures someone just sent. Staring at a small, bright screen reduces blinking. When you’ve finished looking at your phone, look across the room and blink slowly a few times. Camera flashes and bright string lights can make you squint, and squinting tends to swap full blinks for half ones.`,
      },
      { h: 'Carrying eye drops in a purse or pocket' },
      {
        p: `A small bottle travels easily. Quell is {size}, which fits in a clutch, a jacket pocket or a small zippered pouch. Keep it with you instead of in a coat piled on the host’s bed, so you know where it is and it stays clean. Our guide to [carrying eye drops in a purse or pocket](/guides/carrying-eye-drops-in-a-purse-or-pocket) covers caps, leaks and pockets that run warm.`,
      },
      {
        p: `If you need a drop, step into the bathroom or a quiet corner and wash your hands first. The handling line on the label is the one most often broken at parties, when the cap gets set on a counter: {tip}. Then follow the directions: {directions}. Don’t pass your bottle around, even to a friend who asks. Our guide on [whether you can share eye drops](/guides/can-you-share-eye-drops) explains why.`,
      },
      { h: 'The car ride and the coat check' },
      {
        p: `Where the bottle waits matters. Quell’s storage line reads: {storage}. A coat left in a freezing car during a long dinner, or a purse set next to a fireplace, can push it outside that range. If a bottle has been left in a cold car, our guide on [whether eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) explains what to check. On the drive home, point the heater vents at the windshield or your feet rather than your face.`,
      },
      {
        p: `Before using a bottle that’s been knocking around a purse, look at it. Quell normally looks a certain way: {milky}. The label’s “Do not use” line reads: {doNotUse}.`,
      },
      { h: 'When it’s more than party air' },
      {
        p: `Scratchy eyes after a long evening usually settle after sleep in a cooler room. If they don’t, or something else seems wrong, the label says what to watch for: {stopUse} Working out what’s going on belongs to an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which signs need attention sooner.`,
      },
      {
        p: `Before using Quell for the first time, read the caution on its label: {warnings}. You can read the rest of the panel on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at parties?',
        a: `Party rooms tend to be warm, crowded and heated, often with a fireplace or candles moving dry air around. Long conversations, late hours and phone screens add up, and all of them speed evaporation from the eye.`,
      },
      {
        q: 'Can candles make your eyes dry?',
        a: `Candles add warmth and a little smoke near eye level, and a table full of them can make eyes feel scratchy. Sitting on the side away from where the smoke drifts usually helps.`,
      },
      {
        q: 'Is it okay to put in eye drops at a party?',
        a: `Yes, if you do it the way the label says. Step somewhere private, wash your hands, keep the tip from touching anything, and follow the directions on the bottle.`,
      },
      {
        q: 'Where should I keep eye drops during a holiday party?',
        a: `In your pocket or purse, not in a coat left in a cold car or a bag near the fireplace. Quell’s label gives a storage range in degrees, and a bag that stays with you is far easier to keep inside it.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-the-middle-of-the-night',
    title: 'Why do my eyes feel dry in the middle of the night?',
    description:
      'Waking at 3 a.m. with dry eyes usually points to bedroom air: heat, fans, vents. What to change, what the eye drop label says, and when to see a doctor.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Eyes that feel dry in the middle of the night are usually reacting to bedroom air. Heat running through winter nights, a fan or ceiling fan aimed at the bed, and a vent near the pillow all speed evaporation while you aren’t blinking. Redirect the airflow, add moisture to the room, and use a lubricating drop only as its label directs. Dryness that keeps waking you is worth an eye exam.`,
      },
      { h: 'Dry eyes in the middle of the night: what’s going on' },
      {
        p: `While you sleep, your eyelids are closed and you’re not blinking, so the tear film isn’t being refreshed the way it is during the day. For most people that’s fine. But if air is moving across the face, or the room’s humidity has dropped, the surface of the eye can dry enough to wake you, or to make you notice it the moment you surface from sleep to roll over.`,
      },
      {
        p: `The usual pattern is a scratchy, sandy feeling, a desire to rub, or the sense that your eyelids are sticking. Most of the time it settles after you blink a few times. If it happens every night, the bedroom is the first place to look.`,
      },
      { h: 'Dry eyes when sleeping: check the bedroom air' },
      {
        p: `Walk into your bedroom at night and notice what’s moving. Common culprits:`,
      },
      {
        list: [
          `A forced-air heating register near the bed, especially one that blows toward the headboard.`,
          `A ceiling fan on high, or a box fan pointed at you. Our guide to [dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers fan placement.`,
          `A space heater running through the night beside the bed.`,
          `A window air conditioner in summer, which pulls water out of the air as it cools.`,
          `A CPAP mask that leaks air toward the eyes. If you use one, the guide to [dry eyes from a CPAP mask](/guides/dry-eyes-from-cpap) explains who to talk to.`,
        ],
      },
      {
        p: `Winter is often the worst season because the heat cycles on through the coldest hours, just when you’re deepest asleep. A thermostat that drops a few degrees at night means the furnace runs less, and the air stays a little moister.`,
      },
      { h: 'Small changes that help' },
      {
        list: [
          `Turn or deflect any vent that points toward the bed, or close the register in the bedroom if the room stays warm enough.`,
          `Run a humidifier in the bedroom and clean it regularly. A simple hygrometer shows whether it’s making a difference; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains the numbers.`,
          `Set a fan to oscillate away from your face, or move it to the foot of the bed.`,
          `Put the phone down a while before sleep. Screens reduce blinking, and going to bed with eyes already dry makes nighttime discomfort more likely.`,
          `Try a sleep mask that doesn’t press on the eyelids, which shields the eyes from moving air.`,
        ],
      },
      { h: 'Dry eyes at night while sleeping vs. on waking' },
      {
        p: `Waking up in the middle of the night with dry eyes and waking up in the morning with them are related but not identical. Middle-of-the-night dryness often lines up with when the heat or air conditioning cycles on, so it can help to note the time and check the thermostat schedule. Morning dryness tends to reflect the whole night’s air. Our guide to [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) focuses on the morning side.`,
      },
      {
        p: `Some people find that their eyelids don’t seem to close fully when they sleep, which a partner might notice. That’s not something to sort out at home. Mention it to an eye doctor.`,
      },
      { h: 'Using eye drops in the night' },
      {
        p: `Quell’s directions read: {directions}. The label doesn’t give separate instructions for nighttime or for doses spread around sleep, so a drop at bedtime or during the night counts as one of those three. If you find yourself needing more, that’s a reason to talk to an eye doctor; our guide on [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) explains why the label sets a number. For bedtime use in general, see [can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed).`,
      },
      {
        p: `A few practical notes for using a drop half asleep:`,
      },
      {
        list: [
          `Turn on a light. Aiming in the dark is how a tip ends up touching an eyelash or your fingers, and the label is clear: {tip}.`,
          `Keep the bottle on the nightstand in a small dish or case, cap on, so it doesn’t roll under the bed.`,
          `Check that it’s the right bottle. A medicine bottle beside the bed should never be confused with something else.`,
          `Mind the storage range: {storage}. A nightstand next to a radiator or a space heater can run warmer than that.`,
        ],
      },
      {
        p: `If your vision is a little blurry right after a drop, blink a few times and wait before getting up and walking around. The label’s Uses line reads: {uses}.`,
      },
      { h: 'Dry eyes at night only' },
      {
        p: `When your eyes feel fine during the day and dry only at night, the environment explanation becomes even more likely, because the bedroom is the one thing that changes. Experiment with one change at a time for a few nights, such as the fan off, then the humidifier on, so you can tell what made the difference.`,
      },
      {
        p: `If nothing in the room helps, or the dryness comes with pain, light sensitivity or vision that stays blurry, stop guessing. The label says: {stopUse} Working out the cause belongs to an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Why do I wake up in the middle of the night with dry eyes?',
        a: `Usually because of the air in the bedroom. Heat cycling on during cold nights, a fan or vent blowing toward the bed, or a leaking CPAP mask can dry the eye’s surface while you’re not blinking.`,
      },
      {
        q: 'Can I put eye drops in during the night?',
        a: `Quell’s label directions are 1 drop 3 times per day in each eye, with no separate nighttime instructions, so a nighttime drop counts toward that total. Turn on a light and keep the tip from touching anything.`,
      },
      {
        q: 'Why are my eyes only dry at night?',
        a: `If days are fine, the bedroom environment is the likeliest reason: heated or air-conditioned air, fans and vents. Change one thing at a time for a few nights to find what matters, and see an eye doctor if nothing helps.`,
      },
      {
        q: 'Should I sleep with a mask for dry eyes at night?',
        a: `A soft sleep mask that doesn’t press on the eyelids can shield the eyes from moving air from a fan or vent. If dryness continues anyway, ask an eye doctor what else to consider.`,
      },
    ],
  },
  {
    slug: 'can-you-use-eye-drops-in-your-ears',
    title: 'Can you use eye drops in your ears?',
    description:
      'Quell’s label says it’s for use in the eyes only. Why that line matters, what to use for ears instead, and what to do if eye drops end up somewhere else.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `No. Quell’s label says it is for use in the eyes only, and its directions cover eyes and nothing else. Products for ears are made and labeled for the ear, with their own directions and warnings. If your ears are itchy, dry or uncomfortable, ask a pharmacist or doctor which product is labeled for that, and keep eye drops for your eyes.`,
      },
      { h: 'What the label says' },
      {
        p: `The warnings line on Quell’s Drug Facts panel reads: {warnings}. That last phrase is not decoration. Over-the-counter labels follow FDA’s Drug Facts format, and the directions and warnings are written for one route, the way the product is meant to reach the body. For Quell, that route is the eye: {directions}.`,
      },
      {
        p: `Because the label only covers the eye, it says nothing about what happens when the drops are used anywhere else. That silence is the answer. Nobody has given you directions for ears, so there’s no dose, no warning set and no stop-use guidance that applies. Our guide on [what “for use in the eyes only” means](/guides/what-does-for-use-in-the-eyes-only-mean) goes into the phrase more fully.`,
      },
      { h: 'Why people reach for eye drops for their ears' },
      {
        p: `It’s an understandable impulse. The bottles look alike: small, plastic, with a dropper tip. Eye drops are made for a sensitive part of the body, so it seems logical that they’d suit the ear too. And when an ear itches at night, the eye drops on the nightstand are closer than the drugstore.`,
      },
      {
        p: `But eyes and ears are different parts of the body, and products for each are designed around that. Ear products carry their own directions and warnings, including questions about the eardrum that no eye drop label addresses. Using a product somewhere its label doesn’t cover skips all of those checks.`,
      },
      { h: 'What to use for ears instead' },
      {
        list: [
          `Read the label of any ear product before buying. It should say it is for use in the ear.`,
          `Ask a pharmacist. They can listen to what’s bothering you and point you to a product labeled for ears, or tell you to see a doctor first.`,
          `See a doctor for ear pain, drainage, hearing changes, ringing that’s new, or anything after an injury or a blow to the head.`,
          `Don’t put anything into an ear that hurts until someone has looked at it.`,
        ],
      },
      {
        p: `Our guide on [questions to ask your pharmacist](/guides/questions-to-ask-your-pharmacist) has a list you can take to the counter, and the habit of asking works for ear questions as well as eye ones.`,
      },
      { h: 'If an eye drop ends up in your ear' },
      {
        p: `This happens more than you’d think, especially when someone puts in drops lying down. A drop overflows the eye, runs along the temple and into the ear. It’s a small amount of liquid, and the fix is simple: tilt your head to let it drain and dab the outer ear with a clean tissue. If your ear hurts afterward or feels blocked for more than a short while, check with a pharmacist or doctor.`,
      },
      {
        p: `To keep it from happening, sit up or lie with your head only slightly tilted, and close your eye gently for a moment after the drop. Our guide on [how to know if the eye drop went in](/guides/how-do-i-know-if-the-eye-drop-went-in) explains what overflow looks like.`,
      },
      { h: 'If drops get in your mouth or are swallowed' },
      {
        p: `A drop that drains through the tear duct can leave a taste at the back of the throat, which is explained in our guide on [why you can taste eye drops](/guides/why-can-i-taste-eye-drops). Drinking from the bottle, or a child getting hold of it, is a different matter. The label is direct: {swallowed}. Keep the bottle out of children’s reach.`,
      },
      { h: 'Keeping bottles from getting mixed up' },
      {
        p: `Most mix-ups between eye drops and ear drops happen in a medicine cabinet or a bag where small bottles sit together. A few habits help:`,
      },
      {
        list: [
          `Store eye drops apart from ear drops, nose sprays and other small bottles, in their own case or shelf.`,
          `Read the label every time, even in the middle of the night. Turn on a light.`,
          `Keep the original carton if it helps you tell bottles apart at a glance.`,
          `Don’t transfer any drops into a different bottle.`,
        ],
      },
      {
        p: `Quell is easy to recognize once you know it, because of how it looks: {appearance} The label’s “Do not use” line reads: {doNotUse}. Store it as the label says: {storage}.`,
      },
      { h: 'Using Quell the way it’s meant to be used' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. Before every drop, follow the handling line: {tip}. If your eyes don’t improve, the label says when to stop: {stopUse} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can you put eye drops in your ear?',
        a: `Not Quell. Its label says it’s for use in the eyes only, and its directions don’t cover ears. For ear discomfort, ask a pharmacist or doctor about a product labeled for ears.`,
      },
      {
        q: 'Are eye drops and ear drops the same thing?',
        a: `No. They’re made and labeled for different parts of the body, with different directions and warnings. A product’s label tells you which route it’s for, and you should follow it.`,
      },
      {
        q: 'What should I do if eye drops run into my ear?',
        a: `Tilt your head to let the drop drain out and dab the outer ear with a clean tissue. If the ear hurts or feels blocked afterward, check with a pharmacist or doctor.`,
      },
      {
        q: 'Can I use eye drops for itchy ears?',
        a: `No. An itchy ear calls for a product labeled for ears, or a doctor’s visit if there’s pain, drainage or hearing change. Quell’s label limits it to the eyes.`,
      },
    ],
  },
  {
    slug: 'can-you-put-eye-drops-on-your-eyelids',
    title: 'Can you put eye drops on your eyelids?',
    description:
      'Eye drops go into the eye, not onto the lid. Why dry eyelid skin is a separate problem, how to aim, and what to do if a drop misses.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Quell’s directions are for drops in the eye, not on the eyelid: {directions}. A drop on the lid mostly runs off the skin and never reaches the tear film it’s meant for. Dry or flaky eyelid skin is a different problem from a dry eye surface, so ask a pharmacist or doctor about a product labeled for skin around the eyes.`,
      },
      { h: 'Where the drop is supposed to go' },
      {
        p: `A lubricating drop works on the tear film, the thin layer of oil, water and mucus that covers the front of the eye. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. To do that, the drop has to land on the eye itself, usually in the small pocket formed when you gently pull the lower lid down. Blinking then spreads it across the surface.`,
      },
      {
        p: `The eyelid is skin on the outside and a moist lining on the inside. A drop that lands on the outer lid sits on skin, where it can’t mix with the tear film. Most of it will roll down the cheek or soak into your lashes. That isn’t harmful in itself, but it means the drop missed. Our guide to [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains what the drop is working with.`,
      },
      { h: 'Dry eyelid skin is a different issue' },
      {
        p: `People sometimes ask about putting eye drops on their lids because the lids themselves feel dry, tight or flaky, especially in winter. That’s a skin concern, and eye drops aren’t labeled for it. The label’s Uses line is specific: {uses}. It names the eye, not the skin around it.`,
      },
      {
        p: `The skin of the eyelids is thin, and heated indoor air, cold wind, hot showers, harsh cleansers and frequent rubbing can all leave it dry. Some practical steps:`,
      },
      {
        list: [
          `Wash your face with lukewarm water and a gentle, fragrance-free cleanser, and pat the lids dry instead of rubbing.`,
          `Remove eye makeup gently at night rather than scrubbing.`,
          `Keep humidity up in the bedroom during heating season.`,
          `Ask a pharmacist which moisturizers are labeled for use around the eyes, since not every face cream is.`,
          `See a doctor if the lids are swollen, crusted, painful, or if a rash spreads.`,
        ],
      },
      { h: 'How to aim so the drop doesn’t land on the lid' },
      {
        p: `Missing the eye and hitting the lid is the most common reason drops end up on skin. A steadier technique:`,
      },
      {
        list: [
          `Wash your hands first.`,
          `Tilt your head back, or lie down, and look up toward the ceiling.`,
          `With one finger, gently pull the lower lid down to make a small pocket.`,
          `Hold the bottle above the eye, close enough to aim but without touching anything.`,
          `Squeeze gently so a single drop falls into the pocket.`,
          `Let go of the lid, close your eye softly for a moment, and avoid squeezing it shut.`,
        ],
      },
      {
        p: `If you flinch, try resting the hand holding the bottle on your forehead to steady it. Our guide on [how to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) has more tricks, and [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) covers the routine from start to finish.`,
      },
      { h: 'Keep the tip off the lid and lashes' },
      {
        p: `When aiming is tricky, it’s tempting to bring the bottle closer, and that’s when the tip brushes a lash or the lid. The label is clear: {tip}. Eyelids and lashes carry oils, makeup and whatever was on your fingers, and a tip that touches them can carry that back into the bottle.`,
      },
      {
        p: `If the tip does touch your lid, don’t wipe it with a tissue or rinse it under tap water. Replace the cap and, if you’re concerned, ask a pharmacist whether to keep using that bottle. Check it before the next use too. The label’s “Do not use” line reads: {doNotUse}.`,
      },
      { h: 'When a drop lands on the eyelid anyway' },
      {
        p: `It happens to everyone. If you felt the drop hit your lid or cheek and nothing cool in the eye, it probably missed. Blot the skin with a clean tissue. Whether a second try counts against your directions is something the label doesn’t spell out, so use judgment: if the drop clearly never reached your eye, one more attempt is reasonable. Our guide on [how to know if the eye drop went in](/guides/how-do-i-know-if-the-eye-drop-went-in) describes what a successful drop feels like.`,
      },
      {
        p: `If you wear eye makeup, put drops in before applying it, or at least before eyeliner and mascara, so a missed drop doesn’t smear anything. Our guide on [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) covers the timing.`,
      },
      { h: 'Other label lines worth knowing' },
      {
        p: `Before the first use, read the caution: {warnings}. Quell is milky by design: {appearance} Store it within the labeled range: {storage}. If your eyes don’t settle, the label tells you when to stop: {stopUse}`,
      },
      {
        p: `If you keep missing the eye because of a tremor, stiff hands or trouble tilting your head, ask someone to help; our guide on [putting eye drops in someone else’s eyes](/guides/how-to-put-eye-drops-in-someone-elses-eyes) is written for the helper.`,
      },
    ],
    faq: [
      {
        q: 'Can you put eye drops on your eyelid?',
        a: `Quell’s directions are for drops in the eye. A drop on the outer lid stays on the skin and doesn’t reach the tear film, so aim for the small pocket under the lower lid instead.`,
      },
      {
        q: 'Do eye drops work if they land on your eyelid?',
        a: `Mostly not. A drop that lands on the eyelid skin runs off or soaks into the lashes rather than mixing with the tear film. Blot it away and, if it clearly missed, try again carefully.`,
      },
      {
        q: 'What can I use for dry skin on my eyelids?',
        a: `Ask a pharmacist for a product labeled for use around the eyes, and use a gentle cleanser and lukewarm water. See a doctor if the lids are swollen, crusted, painful or develop a rash.`,
      },
      {
        q: 'What if the eye drop bottle touches my eyelid?',
        a: `Recap it and check the bottle before the next use. The label says not to touch the tip to any surface, so ask a pharmacist if you’re unsure whether to keep using it.`,
      },
    ],
  },
  {
    slug: 'do-eye-drops-help-with-eye-strain',
    title: 'Do eye drops help with eye strain?',
    description:
      'Eye drops can ease the dryness that comes with screen work, but not the focusing fatigue behind eye strain. What helps, and when to get your eyes checked.',
    category: 'choosing',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Eye drops can help with part of eye strain, the dryness and irritation that come from blinking less at a screen, but they don’t address the focusing effort behind it. Quell’s label covers dryness and irritation, not strain. Regular breaks, better lighting, a well-placed monitor and an up-to-date glasses prescription do more for strained eyes. Headaches or blurry vision that keep coming back are a reason for an eye exam.`,
      },
      { h: 'What people mean by eye strain' },
      {
        p: `“Eye strain” isn’t a label term. People use it for a mix of feelings after long, close work: tired or heavy eyes, burning, a dull ache around the eyes or forehead, trouble refocusing when they look up, and vision that blurs for a moment. Two different things usually drive those feelings:`,
      },
      {
        list: [
          `Focusing effort. Looking at something close for a long time keeps the eye’s focusing muscles working steadily. That fatigue is about focus, not moisture.`,
          `Dryness. Concentrating on a screen or page lowers how often you blink, and many blinks become partial. Less blinking means the tear film breaks up and evaporates between blinks.`,
        ],
      },
      {
        p: `A lubricating drop can only speak to the second one.`,
      },
      { h: 'Do eye drops help with eye strain? What the label covers' },
      {
        p: `Quell’s Uses line reads: {uses}. That’s about dryness and irritation. It doesn’t mention focusing, fatigue, headaches or strain, and no lubricating drop changes how hard your eyes work to focus. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters when long screen sessions leave the surface exposed.`,
      },
      {
        p: `So if your “strain” feels mostly like dryness, grittiness or burning that eases when you blink a lot, a drop used as directed may help with that part: {directions}. If it feels more like an ache, a heaviness or a struggle to focus, drops are unlikely to be the answer. Our guide on [whether eye drops help tired eyes](/guides/do-eye-drops-help-tired-eyes) looks at a closely related question.`,
      },
      { h: 'Eye drops for eye strain vs. habits that help more' },
      {
        p: `For most people at a desk, changes to the way they work make a bigger difference than any drop:`,
      },
      {
        list: [
          `Every 20 minutes, look at something about 20 feet away for 20 seconds. It relaxes focusing and reminds you to blink.`,
          `Blink fully on purpose a few times when you look away, letting the lids meet.`,
          `Sit roughly an arm’s length from the monitor, and set its top at or a little below eye level.`,
          `Raise text size instead of leaning in.`,
          `Match screen brightness to the room. A bright monitor in a dark room, or a dim one beside a sunny window, makes eyes work harder.`,
          `Reduce glare from windows and overhead lights by angling the screen or using a shade.`,
          `Keep heater and air conditioning vents from blowing at your face.`,
        ],
      },
      {
        p: `Our guides on [screens and your tear film](/guides/screens-and-your-tear-film) and [eye drops for computer users](/guides/eye-drops-for-computer-users) have more desk setup ideas.`,
      },
      { h: 'Reading, driving and other close work' },
      {
        p: `Screens get the blame, but books, sewing, fine woodwork, long drives and microscope work can cause the same mix of focus fatigue and dryness. The fixes are similar: breaks to look into the distance, good light on the task, and conscious blinking. Our guide to [dry eyes when reading](/guides/dry-eyes-when-reading) covers print specifically.`,
      },
      { h: 'When eye strain means you need an eye exam' },
      {
        p: `Strain that shows up every day, even after you’ve fixed your setup, is often a sign that your eyes need a check. An eye doctor can measure whether you need glasses or a new prescription, including lenses set for computer distance, which many people never think to ask about. Book an appointment if you notice:`,
      },
      {
        list: [
          `Headaches that follow close work most days.`,
          `Blurry vision that doesn’t clear when you blink or take a break.`,
          `Double vision, or having to close one eye to read.`,
          `Squinting at screens or signs you used to see easily.`,
          `Eye pain, or dryness and irritation that persist.`,
        ],
      },
      {
        p: `The label is clear on when to stop using a drop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers urgent signs, and [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) can help you make the most of a visit.`,
      },
      { h: 'If you decide to try a lubricating drop' },
      {
        p: `Read the caution first: {warnings}. Follow the handling line every time: {tip}. Store it as directed: {storage}. A bottle in a desk drawer is handy for screen breaks, and the [Drug Facts page](/drug-facts) has the full panel. The label doesn’t give directions for use with contact lenses, so contact wearers should ask their eye doctor first.`,
      },
    ],
    faq: [
      {
        q: 'Do eye drops help with eye strain?',
        a: `They can ease the dryness and irritation that come with long screen work, but not the focusing fatigue behind eye strain. Breaks, good lighting, monitor position and the right glasses usually help more.`,
      },
      {
        q: 'Is eye strain the same as dry eyes?',
        a: `Not exactly. Eye strain usually mixes focusing fatigue with dryness from reduced blinking. A lubricating drop can address dryness; focusing fatigue calls for breaks and, sometimes, glasses.`,
      },
      {
        q: 'What is the 20-20-20 rule for eye strain?',
        a: `Every 20 minutes, look at something about 20 feet away for 20 seconds. It gives your focusing muscles a rest and reminds you to blink fully.`,
      },
      {
        q: 'When should I see an eye doctor for eye strain?',
        a: `If strain shows up most days despite breaks, or comes with headaches, blurred or double vision, or eye pain. An exam can check whether you need glasses or a new prescription.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for what-is-the-otc-monograph-for-eye-drops:
   * - https://www.govinfo.gov/content/pkg/CFR-2019-title21-vol5/xml/CFR-2019-title21-vol5-part349.xml
   *   (21 CFR Part 349, Ophthalmic Drug Products for Over-the-Counter Human Use;
   *   subparts A general, B active ingredients, C labeling; 349.10 astringent,
   *   349.12 demulcents incl. glycerin and polysorbate 80 under liquid polyols,
   *   349.14 emollients incl. light mineral oil under oleaginous ingredients,
   *   349.16 hypertonicity, 349.18 vasoconstrictors, 349.20 eyewashes,
   *   349.30 combinations; 349.60(b) indication "For use as a protectant against
   *   further irritation or to relieve dryness of the eye"; 349.50 tip warning;
   *   349.60(c) 72-hour stop-use and color-change warnings)
   * - https://www.accessdata.fda.gov/drugsatfda_docs/omuf/Order/Final%20Administrative%20Order%20OTC000023_M018-Ophthalmic%20Drug%20Products%20for%20OTC%20Human%20Use.pdf
   *   (Final administrative order OTC000023, OTC Monograph M018, deemed final under
   *   FD&C Act section 505G(b)(8), effective on CARES Act enactment March 27, 2020)
   */
  {
    slug: 'what-is-the-otc-monograph-for-eye-drops',
    title: 'What is the OTC monograph for eye drops?',
    description:
      'FDA’s OTC monograph for eye drops sets allowed active ingredients, label wording and warnings. What it says, how the CARES Act changed it, and where Quell fits.',
    category: 'label',
    addedOn: '2026-11-14',
    body: [
      {
        p: `The OTC monograph for eye drops is FDA’s rulebook for over-the-counter ophthalmic products. Originally codified as 21 CFR Part 349, “Ophthalmic Drug Products for Over-the-Counter Human Use,” it lists permitted active ingredients by category, their concentration ranges, and required label wording. Under the 2020 CARES Act it became a final administrative order, now called OTC Monograph M018. Products that follow it don’t need individual FDA approval.`,
      },
      { h: 'What a monograph is' },
      {
        p: `Most new drugs reach the market through an application that FDA reviews product by product. Many over-the-counter medicines work differently. For categories of OTC drugs, FDA publishes a monograph: a set of conditions covering which active ingredients may be used, in what amounts, for what uses, and with what label statements. A product that meets every condition can be marketed without its own approval. One that strays outside them, by adding an ingredient that isn’t listed or making a claim the monograph doesn’t allow, can’t rely on the monograph.`,
      },
      {
        p: `That’s why a monograph eye drop’s label doesn’t claim an individual FDA approval, and why the claims on these labels look so similar from brand to brand. Our guide to [how over-the-counter eye drops are regulated](/guides/how-are-otc-eye-drops-regulated) covers the bigger picture, including manufacturing rules.`,
      },
      { h: '21 CFR Part 349: the ophthalmic monograph' },
      {
        p: `The eye drop monograph was published in the Code of Federal Regulations as Part 349. The government’s own archive at govinfo.gov still carries the text. It’s organized into three parts:`,
      },
      {
        list: [
          `Subpart A, general provisions, including definitions of terms like demulcent and emollient.`,
          `Subpart B, active ingredients, grouped by category.`,
          `Subpart C, labeling, with required wording for each category.`,
        ],
      },
      {
        p: `Subpart B lists these categories: an ophthalmic astringent, ophthalmic demulcents, ophthalmic emollients, an ophthalmic hypertonicity agent, ophthalmic vasoconstrictors, and eyewashes, followed by a section on which active ingredients may be combined.`,
      },
      { h: 'How the CARES Act changed it' },
      {
        p: `For decades, changing an OTC monograph meant a slow, multi-step rulemaking process. The Coronavirus Aid, Relief, and Economic Security Act, enacted March 27, 2020, added section 505G to the Federal Food, Drug, and Cosmetic Act and reformed that system. Final monographs were deemed final administrative orders on the day the law took effect.`,
      },
      {
        p: `FDA now publishes the ophthalmic order as OTC Monograph M018, “Ophthalmic Drug Products for OTC Human Use,” on its website. The content carried over, and FDA can now amend it by administrative order instead of full rulemaking. The section numbers changed format too: what was 349.12 for demulcents corresponds to M018.12.`,
      },
      { h: 'Where Quell’s active ingredients fit' },
      {
        p: `Quell’s active ingredients are {actives}. Each appears in the monograph’s lists:`,
      },
      {
        list: [
          `Glycerin, the name the monograph uses for glycerol, is listed among the ophthalmic demulcents as a liquid polyol. Quell’s label shows it as {glycerol}.`,
          `Polysorbate 80 is listed in the same group of liquid polyol demulcents. On the label: {polysorbate}.`,
          `Light mineral oil is listed among the ophthalmic emollients as an oleaginous ingredient. On the label: {mineralOil}.`,
        ],
      },
      {
        p: `The monograph defines a demulcent as an agent, usually a water-soluble polymer, that protects and lubricates mucous membrane surfaces and relieves dryness and irritation, and an emollient as an agent, usually a fat or oil, that protects or softens tissues. Our guides on [what a demulcent is](/guides/what-is-a-demulcent-in-eye-drops) and [emollient eye drops](/guides/emollient-eye-drops) go into each, and [the active ingredients section](/guides/the-active-ingredients-section) explains how they appear on the label. If the glycerin and glycerol names confuse you, see [glycerin vs. glycerol](/guides/glycerin-vs-glycerol-in-eye-drops).`,
      },
      {
        p: `The inactive ingredients, such as emu oil and manuka honey, aren’t active ingredients and so aren’t in the monograph’s active-ingredient lists. They’re listed separately on the label: {inactives}.`,
      },
      { h: 'The label wording comes from the monograph too' },
      {
        p: `Monograph labeling isn’t freeform. Subpart C gives the statements a product may use for its indications and the warnings it must carry. Quell’s Uses line, {uses}, matches one of the indication statements the monograph lists for demulcent and emollient products. The tip warning, {tip}, follows the general labeling section, and the 72-hour stop-use statement and the color-change warning come from the demulcent labeling section.`,
      },
      {
        p: `That shared source is why lubricating drops tend to say almost the same things. It also explains what the labels don’t say: no promises about how long relief continues, and no claims outside the listed uses. Our guide on [why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) looks at one of those warnings closely.`,
      },
      { h: 'Reading a monograph eye drop label' },
      {
        list: [
          `Active ingredients appear first, each with its amount and its category, such as “lubricant” or “protectant.”`,
          `Uses repeat a monograph indication word for word or nearly so.`,
          `Warnings include the tip warning, a stop-use statement and a do-not-use line.`,
          `Directions give the dose and how often. Quell’s: {directions}.`,
          `Inactive ingredients and storage come last. Quell’s storage line: {storage}.`,
        ],
      },
      {
        p: `You can read Quell’s whole panel on our [Drug Facts page](/drug-facts), and [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each box.`,
      },
    ],
    faq: [
      {
        q: 'What is the OTC monograph for eye drops?',
        a: `It’s FDA’s set of conditions for over-the-counter ophthalmic products, originally 21 CFR Part 349 and now OTC Monograph M018. It lists permitted active ingredients, concentrations, label statements and warnings.`,
      },
      {
        q: 'What does M018 mean on FDA’s eye drop monograph?',
        a: `M018 is FDA’s current designation for the ophthalmic monograph, “Ophthalmic Drug Products for OTC Human Use.” The CARES Act turned the old final monograph into a final administrative order in 2020.`,
      },
      {
        q: 'Do OTC eye drops need FDA approval before they’re sold?',
        a: `Not if they follow a monograph. Products that meet every condition of the ophthalmic monograph can be marketed without their own FDA application and approval, which is why their labels make no approval claim.`,
      },
      {
        q: 'Is light mineral oil allowed in OTC eye drops?',
        a: `Yes. The ophthalmic monograph lists light mineral oil among its emollient active ingredients, as an oleaginous ingredient. Quell lists it on its label as one of three active ingredients.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-snowplow-drivers',
    title: 'Dry eyes for snowplow drivers',
    description:
      'Night shifts, a cab heater blasting, glare off fresh snow: why plow drivers get dry eyes, how to keep eye drops in a freezing cab, and when to pull over.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Snowplow drivers get dry eyes from a rough combination: long night shifts, a cab heater and defroster pushing hot, dry air, glare from headlights and fresh snow, and cold wind every time they step out. Aim vents at the windshield and feet, blink deliberately on long straight runs, and keep a lubricating drop in an inside pocket. Use it only when parked, as its label directs.`,
      },
      { h: 'Why the plow cab is so hard on eyes' },
      {
        p: `Plow shifts during a storm often run long, and much of the work happens in the dark. Inside the cab, the heater and defroster run constantly to keep the glass clear, and heated winter air holds very little moisture. Outside, wind drives snow across the road and every stop to check a spreader, clear a blade or help a stuck driver puts cold air straight into your face.`,
      },
      {
        p: `Then there’s concentration. Plowing means watching the road edge, mailboxes, parked cars, the wing blade and mirrors at the same time. People blink less when they focus hard, and the eye’s surface dries between blinks. By the second half of a shift, eyes can feel gritty, burning or heavy.`,
      },
      { h: 'Glare, lights and the long night shift' },
      {
        p: `Light makes plowing harder on the eyes in several ways:`,
      },
      {
        list: [
          `Fresh snow reflects headlights and streetlights back at you, so you squint, and squinting replaces full blinks with partial ones.`,
          `Amber strobes and warning lights flash at the edge of your vision for hours.`,
          `Oncoming headlights on a dark rural road force your eyes to adjust again and again.`,
          `At dawn, low sun on a snowfield can be blinding. Keep sunglasses in the cab for the end of the shift.`,
        ],
      },
      {
        p: `A tired driver also blinks differently. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers how short sleep and night work affect eyes, and [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) goes deeper on rest.`,
      },
      { h: 'Setting up the cab' },
      {
        list: [
          `Point the defroster at the glass and the heater at your feet and chest, never straight at your face.`,
          `Close the dash vent nearest you if it can’t be angled away.`,
          `Keep the cab a few degrees cooler if you can stay comfortable in your layers. Less heat means slightly less dry air.`,
          `Clean the inside of the windshield before the season. A hazy film adds glare at night.`,
          `On long straight stretches, blink deliberately a few times, letting the lids close fully.`,
        ],
      },
      {
        p: `More ideas for winter driving in general are in [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter).`,
      },
      { h: 'Keeping eye drops in a cold cab' },
      {
        p: `Plow trucks sit in cold yards and sheds between storms, and a cab can drop far below freezing once the engine shuts off. Quell’s storage line reads: {storage}. A bottle left in the door pocket or glove box between shifts can easily fall outside that range.`,
      },
      {
        list: [
          `Carry the bottle in an inside jacket or shirt pocket during the shift, where it stays near body warmth.`,
          `Take it home or into the break room at the end of the shift rather than leaving it in the truck.`,
          `If a bottle froze or sat in a frozen truck, look at it before using it. Our guide on [whether eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) explains what to check.`,
          `Keep a spare at home, not in the truck, so a forgotten bottle isn’t your only one.`,
        ],
      },
      {
        p: `Quell normally looks like this: {milky}. The label’s “Do not use” line reads: {doNotUse}.`,
      },
      { h: 'Gloves, road salt and the bottle tip' },
      {
        p: `Plow work leaves hands covered in road salt, grease, diesel and grit. Before using a drop, take your gloves off and clean your hands, with soap and water at the shop or hand sanitizer in the cab, letting it dry completely. The label’s handling line matters even more here: {tip}. A tip that touches a glove, a steering wheel or your fingers can pick up exactly the kind of grime you don’t want in your eye.`,
      },
      { h: 'Using a drop safely on a route' },
      {
        p: `Never put in eye drops while the truck is moving. Wait until you’re stopped somewhere legal and out of traffic, like the yard, a salt shed or a safe pull-off, with the parking brake set. Vision can blur briefly after a drop, so give it a moment before you drive. The directions are short: {directions}. The label’s Uses line reads: {uses}.`,
      },
      {
        p: `Read the caution before your first bottle: {warnings}. If you drive under a commercial license or for a public works department, any questions about medicines and your medical card or employer policy are for your medical examiner or supervisor. Our guide to [eye drops for truck drivers](/guides/eye-drops-for-truck-drivers) covers similar ground for CDL drivers.`,
      },
      { h: 'When to stop and get your eyes checked' },
      {
        p: `If your vision blurs and doesn’t clear, you see halos that weren’t there before, or your eyes hurt, stop driving when it’s safe and have them looked at. The label’s stop-use line reads: {stopUse} Working out what’s going on is a job for an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which signs shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry driving a snowplow?',
        a: `The heater and defroster run constantly with dry winter air, glare from snow and lights makes you squint, and focusing on the road and blade cuts blinking. Long night shifts add tired eyes to the mix.`,
      },
      {
        q: 'Can I leave eye drops in my plow truck?',
        a: `Not between shifts in cold weather. Quell’s label gives a storage range in degrees, and a parked truck in a cold yard can fall well below it. Carry the bottle in an inside pocket and take it with you.`,
      },
      {
        q: 'Can you use eye drops while driving a plow?',
        a: `Only when stopped somewhere safe with the parking brake set. Vision can blur briefly after a drop, so wait a moment before pulling back onto the route.`,
      },
      {
        q: 'How do I reduce glare from snow at night?',
        a: `Keep the inside of the windshield clean, avoid looking directly at oncoming headlights, and keep sunglasses in the cab for low sun at dawn. Squinting less helps you blink fully.`,
      },
    ],
  },
  {
    slug: 'ordered-too-many-bottles-of-eye-drops',
    title: 'Ordered too many bottles of eye drops?',
    description:
      'Unopened bottles of Quell can be refunded within {returnDays} days of delivery without sending them back. How to ask, what can’t be refunded, and how to store extras.',
    category: 'returns',
    addedOn: '2026-11-14',
    body: [
      {
        p: `If you ordered more Quell than you need, unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to send them back. Contact us with your order number to ask. Opened bottles can’t be refunded. If you’d rather keep the extras, store them within the label’s temperature range and use them before their expiration dates.`,
      },
      { h: 'How it happens' },
      {
        p: `Ordering extra eye drops is common and usually easy to sort out. Some typical ways it happens:`,
      },
      {
        list: [
          `You set the cart quantity to six when you meant three, perhaps on a phone where the number was hard to read.`,
          `You placed an order, didn’t see the confirmation email right away, and ordered again.`,
          `You ordered for the free shipping threshold of {freeBottles} bottles and then realized you won’t use that many soon.`,
          `A family member ordered for you at the same time you ordered for yourself.`,
          `Your eye doctor suggested something else after you’d already stocked up.`,
        ],
      },
      {
        p: `Whatever the reason, what matters is whether the bottles are still sealed and how long it’s been since delivery.`,
      },
      { h: 'The refund policy on unopened bottles' },
      {
        p: `Quell offers {returns}. In practice:`,
      },
      {
        list: [
          `The window is {returnDays} days, counted from the day the order was delivered.`,
          `The bottle has to be unopened, with its tamper seal intact.`,
          `You don’t ship anything back. We don’t ask for unopened bottles to be returned.`,
          `The refund covers the unopened bottles you ask about; you don’t have to refund the whole order.`,
        ],
      },
      {
        p: `Our guide to [refunds on unopened bottles](/guides/how-to-return-an-unopened-bottle) walks through the details, and [why we don’t ask for unopened bottles back](/guides/why-we-do-not-ask-for-bottles-back) explains the thinking. For exactly what’s covered, see [what is refunded on a Quell order](/guides/what-is-refunded-on-a-return).`,
      },
      { h: 'How to ask for a refund on extra bottles' },
      {
        list: [
          `Find your order number in the confirmation email. Our guide on [finding your order number](/guides/finding-your-order-number) shows where it is.`,
          `Count the sealed bottles you want refunded and check that the seals are intact.`,
          `Reach us through the [contact page](/about#contact), or call {phone} during {hours}.`,
          `Give your order number, the email used at checkout, and how many unopened bottles you’re asking about.`,
        ],
      },
      {
        p: `You can look up the order itself on the [orders page](/orders). Ask within the window: once {returnDays} days have passed since delivery, unopened bottles are no longer eligible.`,
      },
      { h: 'Why opened bottles can’t be refunded' },
      {
        p: `Once a bottle’s seal is broken, it can’t be resold or redistributed, and its contents have been exposed to air and handling. That’s true for eye drops generally, not just Quell. If you opened one bottle from a larger order, the remaining sealed bottles can still be refunded within the window. Our guide on [why opened eye drops can’t be returned](/guides/why-opened-eye-drops-cannot-be-returned) explains more.`,
      },
      {
        p: `If an order arrived damaged, with a broken seal, or with the wrong item, that’s different: those orders are replaced. Contact us with your order number and a description of what arrived.`,
      },
      { h: 'Keeping the extras instead' },
      {
        p: `Many people decide to hold on to an extra bottle or two, especially if they use Quell regularly. At the labeled directions, {directions}, a {size} bottle goes faster than you might expect. If you keep spares:`,
      },
      {
        list: [
          `Store them as the label says: {storage}. A closet shelf or dresser drawer works; a bathroom right next to a hot shower, a windowsill in summer or a car does not.`,
          `Leave them sealed until you need them, and open one bottle at a time.`,
          `Check the expiration date on each bottle and use the earliest-dated one first. Our guide on [where the expiration date is on eye drops](/guides/where-is-the-expiration-date-on-eye-drops) helps you find it.`,
          `Keep them out of children’s reach.`,
        ],
      },
      {
        p: `More on rotating a small supply is in [keeping spare bottles of eye drops](/guides/keeping-spare-bottles).`,
      },
      { h: 'Giving a sealed bottle to someone else' },
      {
        p: `A sealed, unexpired bottle can be given to someone who wants it, as long as they read the label themselves first, starting with the caution: {warnings}. Never share an opened bottle; each person should have their own. Our guide on [whether you can share eye drops](/guides/can-you-share-eye-drops) explains why.`,
      },
      { h: 'Avoiding it next time' },
      {
        p: `Before checkout, check the quantity in your cart; our guide on [how to change the quantity in your cart](/guides/editing-your-cart) shows how. Wait for the confirmation email before placing a second order. Quell isn’t a subscription, so nothing reorders on its own, and the one reorder reminder email we send is only a reminder.`,
      },
    ],
    faq: [
      {
        q: 'I ordered too many eye drops. Can I get a refund?',
        a: `Yes, for unopened bottles. Quell refunds unopened bottles within {returnDays} days of delivery without asking you to send them back. Contact us with your order number and the number of sealed bottles.`,
      },
      {
        q: 'Do I have to mail back unopened bottles of Quell?',
        a: `No. Refunds on unopened bottles don’t require sending anything back. Just contact us within the refund window with your order number.`,
      },
      {
        q: 'Can I get a refund on part of my eye drop order?',
        a: `Yes. You can ask for a refund on just the unopened bottles you don’t want and keep the rest, as long as you ask within {returnDays} days of delivery.`,
      },
      {
        q: 'How should I store extra bottles of eye drops?',
        a: `Keep them sealed, within the temperature range on the label, and away from heat, sunlight and children. Use the bottle with the earliest expiration date first.`,
      },
    ],
  },
]
